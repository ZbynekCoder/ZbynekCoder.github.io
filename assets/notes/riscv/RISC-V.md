# RISC-V

## 代码结构

### 数据段

```assembly
.data
g: .word 0		# .word: 4 byte
h: .word 10
i: .word 30
j: .word 40

result: .word 0

numbers: .word -30, 30, -20, 20, -10, 10, 0

msg: .string "The result is: "  # .ascii
```

### 代码段

```assembly
.text


```

## 汇编指令

### 运算指令

RISC-V中的运算指令包括算术运算，逻辑运算，移位运算。运算只在寄存器之间运行，即想要对内存中的数据进行运算，需要先将其取至寄存器。

```assembly
add rd, rs1, rs2 # 将寄存器rs1与rs2的值相加并写入寄存器rd
sub rd, rs1, rs2 # 将寄存器rs1与rs2的值相减并写入寄存器rd
addi rd, rs1, imm # 将寄存器rs1的值与立即数imm相加并存入寄存器rd
# no subi

mv rd, rs1 # add rd, rs1, x0
li rd, imm # addi rd, x0, imm
```

#### 移位运算

```assembly
sll rd, rs1, rs2 # 将寄存器rs1的值左移寄存器rs2的值这么多位，并写入寄存器rd
slli rd, rs1, imm # 将寄存器rs1的值左移立即数imm的值这么多位，并写入寄存器rd
```

### Loads和Stores

在RISC-V中1word=4Bytes=32bits

```assembly
lb rd, offset(rs1) # 从地址为寄存器rs1的值加offset的主存中读一个字节，符号扩展后存入rd
lw rd, offset(rs1) # 从地址为寄存器rs1的值加offset的主存中读一个字，符号扩展后存入rd

la rd, label # 取得label在内存中的地址，存入rd
lw rd, label # 将首地址为label的一个word存入rd

sb rs1, offset(rs2) # 把寄存器rs1的值存入地址为寄存器rs2的值加offset的主存中，保留最右端的8位
sw rs1, offset(rs2) # 把寄存器rs1的值存入地址为寄存器rs2的值加offset的主存中，保留最右端的32位

sw rs, label, rt # rt暂存label地址，将rd的值存入label地址为首地址的一个word
```

### 比较指令

```assembly
slt rd, rs1, rs2 # 若rs1的值小于rs1的值，rd置为1，否则置为0
slti rd, rs1, imm # 若rs1的值小于立即数imm，rd置为1，否则置为0
```

### 分支指令

```assembly
beq rs1, rs2, label # 若rs1的值等于rs2的值，程序跳转到label处继续执行
bne rs1, rs2, label # 若rs1的值不等于rs2的值，程序跳转到label处继续执行
blt rs1, rs2, label # 若rs1的值小于rs2的值，程序跳转到label处继续执行
bge rs1, rs2, label # branch if greater than or equal：若rs1的值大于等于rs2的值，程序跳转到label处继续执行

bltz ts, label	# branch if less than zero
```

### 无条件跳转指令

```assembly
j label # jump：程序直接跳转到label处继续执行
jal rd, label # jump and link：用于调用函数，把下一条指令的地址保存在rd中（通常用x1），然后跳转到label处继续执行
jalr rd, offset(rs) # jump and link register：可用于函数返回，把下一条指令的地址存到rd中，然后跳转到rs+offset地址处的指令继续执行。若rd=x0就是单纯的跳转（x0不能被修改）

jr rs # jump register： jalr zero, 0(rs)

ret # return：jr ra
```

### 系统调用

1. 将service number存入寄存器a7
2. 按a0，a1，...的顺序存入过程参数
3. 使用`ecall`指令

```assembly
li a7, 1 # print integer
li a0, imm # 参数为立即数
mv a0, rs # 参数在寄存器中
ecall

li a7, 4 # print string
la a0, msg # 参数为字符串首地址
ecall
```

### 过程调用

1. 按a0，a1，...的顺序存入过程参数
2. 把现pc存入ra
3. 跳转
4. 被调用过程按约定视a0，a1，...，a7为传入参数
5. 约定a0，a1为返回值存放的寄存器

```assembly
call label
jal label
jal ra, label
```

## 控制流结构

### if语句

```assembly
# c = max(a, b)

.data
a: .word 100
b: .word 200
c: .word 0

.text
lw t0, a
lw t1, b

bge t0, t1 greater_equal
mv t2, t1
j end

greater_equal:
mv t2, t0

end:
sw t2, c, t3
```

### for循环

```assembly
.data
numbers: .word -30, 30, -20, 20, -10, 10, 0
size: .word 7

positive_sum: .word 0
negative_sum: .word 0

.text
la t0, numbers	# base address of numbers
lw t1, size

mv t2, zero		# counter: i = 0

li t3, 0		# positive_number
li t4, 0		# negative_number

loop:
	bge t2, t1, end_loop
	# numbers[i]
	# mul t5, t2, 4
	slli t5, t2, 2
	add t5, t0, t5	# address of numbers[i]
	lw t5, 0(t5)		# t5 <- numbers[i]
	
	addi t2, t2, 1	# i++
		
	# numbers[i] < 0?
	bltz t5, negative
	add t3, t3, t5
	j loop
	
negative:
	add t4, t4, t5
	j loop

end_loop:
	sw, t3, positive_sum, t5
	sw, t4, negative_sum, t5
```

### 过程调用

```assembly
# proc-max.asm

# c = max(a, b)

.data
max_result: .word 0

.text
.global main	# globl: global

max:
# (3) a0 (argument 0): a, a1: b

# (4) computing the max of a and b
blt a0, a1, smaller
j end_max

smaller:
mv a0, a1	# convention: a0, a1 as return value registers

end_max:
ret
# jr ra
# jalr zero 0(ra)	# jalr: jump and link register (offset); link: rd <- pc + 4

.data
a: .word 100
b: .word 200

.text
main:
# (1) preparing the arguments (a0, ..., a7)
lw a0, a
lw a1, b

# (2) call the max function
call max # (auipc + jalr; 8 bytes)
# jal max # (default: ra)
# jal ra, max	

# (5) continue
sw a0, max_result, t0
```

### 递归调用

函数栈地址从高地址向低地址增长，`sp`减少以开辟栈空间

- 被调用者要负责前后`sp`的值不变（回收栈空间）
- 调用链各函数要保留各自的`ra`值

压栈顺序：

|      `fp`      |
| :------------: |
|   参数寄存器   |
|   `ra`寄存器   |
| 其他保留寄存器 |
| 局部数组与结构 |
|      `sp`      |

```assembly
# main: fact(n)

.text
.global main

# if (n == 0) return 1
# return n * factorial(n - 1)
factorial:
beqz a0, base_case

addi sp, sp, -8
sw a0, 4(sp)
sw ra, 0(sp) 		# reserve the former ra value

# n > 0: n * factorial(n - 1)
addi a0, a0, -1		# no subi
call factorial 		# a0: factorial(n - 1)
mv t0, a0			# t0: factorial(n - 1)

lw a0, 4(sp) 		# a0: n
lw ra, 0(sp)
addi sp, sp, 8

mul a0, a0, t0		# a0: n * factorial(n - 1)
j end

base_case:
	li a0, 1
	
end:
	ret

########## main ##########
.data
n: .word 10

.text
main:
lw a0, n
call factorial
```

> Ex1. 不为`ra`分配空间，运行结果如何？

> Ex2. 将下面计算Fib(n)的C代码转换为RISC-V代码
>
> **仅允许**使用如下指令 (包括伪指令; 汇编伪指令不限): `li`、`add`、`addi`、`sub`、`ble`、`bge`、`lw`、`sw`、`jal`、`jalr`、`ecall`、`j`、`la`
>
> ```c
> #include <stdio.h>
> 
> int fib(int n)
> {
>  // fib(0) = 0, fib(1) = 1
>  if(n <= 1)
>  {
>      return n;
>  }
> 
>  return fib(n - 1) + fib(n - 2);
> }
> 
> int n = 20;
> 
> int main(void)
> {
>  int result = fib(n);
> 
>  printf("fib(%d) = $d\n", n, result);
> 
>  return 0;
> }
> ```
>
> ```assembly
> .text
> .global main
> 
> ########## fib ##########
> fib:
> # base case: n <= 1
> li t0, 1
> ble a0, t0, base_case
> 
> addi sp, sp, -16	# allocate stack
> sw a0, 12(sp)		# store a0 on stack
> sw ra, 8(sp)		# store ra on stack
> 
> # n > 1: fib(n - 1) + fib(n - 2)
> lw a0, 12(sp)		# a0: n
> addi a0, a0, -1 	# a0: n - 1
> jal ra, fib		# call fib on (n - 1)
> mv t1, a0 			# t1: fib(n - 1)
> sw t1, 4(sp)
> 
> lw a0, 12(sp) 		# a0: n
> addi a0, a0, -2 	# a0: n - 2
> jal ra, fib			# call fib on (n)
> mv t2, a0 			# t2: fib(n - 2)
> sw t2, 0(sp)
> 
> lw t1, 4(sp)
> lw t2, 0(sp)
> add a0, t1, t2 		# a0: fib(n - 1) + fib(n - 2)
> 
> sw ra, 8(sp)		# restore ra
> addi sp, sp, 16		# clear stack
> 
> j end
> 
> base_case:
> 
> end:
> 	jalr zero, 0(ra) # ret
> ########## main ##########
> .data
> n: .word 20
> 
> # n = 10: 0 1 1 2 3 5 8 13 21 34 55
> .text
> main:
> la a0, n			# a0: address of n
> lw a0, 0(a0)		# a0: value of n
> jal ra, fib			# call fib
> ```

> Ex3. 编写两段 RISC-V 函数代码，实现控制流在这两个函数之间 “跳来跳去” 的效果。