# 【计组笔记】CPU

# 指令执行步骤



1. 读指令（IF，instruction fetch）：读指令存储器，地址PC
2. 指令译码（ID，instruction decode）：读源寄存器rs
3. 执行（EXE，execute）
4. 存储器读写（MEM，memory）：读写数据存储器
5. 写回（WB，write back）：写目的寄存器rd

- 数据通路：实现数据流动
  - D触发器：时钟上升沿写入数据，保持稳定直到下一个上升沿
  - 寄存器组（堆）
    - 3个地址端口，2个读接口，1个写接口
    - 每个时钟周期可以完成3次访问
- 控制器：指挥数据流动

# 单周期CPU

![img](https://i-blog.csdnimg.cn/direct/63f91da8f6db49d58207723b2d9a66ab.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

指令串行执行

每条指令都用一个CPU周期

- 对于单条指令，不管何种指令，都占用一个周期 
  - 计算资源浪费
- ID段得到指令类型后给出整个周期的全部控制信号 
  - 周期内控制信号保持不变
- 不需要状态信息，在周期的结束边沿写入结果
- lw指令周期决定时钟周期，因load指令步骤时延最长

## 指令执行动作

选取7条MIPS指令实现单周期CPU

- lw、sw
- addu、subu、ori
- beq、j

### R型指令

#### op %rd, %rs, %rt

- R[rd] = R[rs] op R[rt]

### I型指令

#### ori %rt, %rs, imm

- R[rt] = R[rs] or zext(imm)

#### beq %rs, %rt, imm

- cond = R[rs] - R[rt]
- if (cond eq 0) 
  - PC += 4 + sext(imm) << 2 	
    - CPU拿到指令就把PC+4，指令给出的立即数偏移是另外计算的
    - 因指令总是4个字节打包出现，编码时省略最低2位，但译码时左移2位还原
- else 
  - PC += 4

### J型指令

#### j target

- PC = PC[31 : 28] || target << 2 
  - 跳转范围有限制，（在一条j语句中）PC高4位不动

### load指令

#### lw %rt, %rs, imm

- addr = R[rs] + sext(imm)
- R[rt] = MEM[addr]

### store指令

#### sw %rt, %rs, imm

- addr = R[rs] + sext(imm)
- MEM[R[rs] + sext(imm)] = R[rt]

## 控制信号

![img](https://i-blog.csdnimg.cn/direct/a08ed7efd87f4187bfd23f7dd584da8d.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

## 延迟计算

1. 算逻指令 
   - IF：获取指令，1个存储器延迟
   - ID：读操作数，1个寄存器读延迟
   - EXE：ALU计算，1个ALU延迟
   - MEM：无
   - WB：结果写入寄存器，1个寄存器写延迟
2. load指令：lw rt, rs, imm 
   - IF：获取指令，1个存储器延迟
   - ID：读操作数，1个寄存器读延迟
   - EXE：ALU计算addr，1个ALU延迟
   - MEM：MEM[addr]获取，1个存储器延迟
   - WB：load进寄存器，1个寄存器写延迟
3. store指令：sw rt, ts, imm 
   - IF：获取指令，1个存储器延迟
   - ID：读操作数，1个寄存器读延迟
   - EXE：ALU计算addr，1个ALU延迟
   - MEM：存入MEM[addr]，1个存储器延迟
   - WB：无
4. 跳转指令：beq rs, rt, imm 
   - IF：获取指令，1个存储器延迟
   - ID：读操作数，1个寄存器读延迟
   - EXE：ALU计算cond，1个ALU延迟
   - MEM：无
   - WB：无

> 假定某单周期CPU各主要部件的延迟为：
>
> - 存储器：2ns
> - 运算器：2ns
> - 寄存器组：1ns
>
> 该单周期CPU执行100条指令：
>
> - 25%Load指令
> - 10%Store指令
> - 45%算逻指令
> - 20%跳转指令
>
> 单条load指令延迟为8ns，时钟周期为8ns，CPI=1，总执行时间800ns

# 多周期CPU

![img](https://i-blog.csdnimg.cn/direct/cd5ff6141f684aee9c2ad1622be0a58e.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

把指令分为若干步骤

每个步骤占用一个时间周期，尽量使用单一部件

- 单步骤最长时延决定时钟周期

控制器只提供当前步骤的控制信号

PC给出取指令地址，取来的地址存入IR，而后PC+4

ALU有A路和B路输出

- A路为A寄存器或PC
- B路为B寄存器、4、或imm符号扩展或扩展后左移2位值

## 指令执行动作

### 算逻指令

1. 取指周期 
   - IR = MEM[PC]
   - PC = PC + 4
2. 译码周期 
   - A = [rs]
   - B = [rt]
3. 执行周期 
   - C = A + B
4. 内存周期
5. 写回周期 
   - [rd] = C

### load指令

#### lw $rt, imm($rs)

1. 取指周期 
   - IR = MEM[PC]
   - PC = PC + 4
2. 译码周期 
   - A = [rs]
3. 执行周期 
   - C = A + sext(imm)
4. 内存周期 
   - DR = MEM[C]
5. 写回周期 
   - [rt] = DR

### store指令

#### sw $rt, imm($rs)

1. 取指周期 
   - IR = MEM[PC]
   - PC = PC + 4
2. 译码周期 
   - A = [rs]
   - B = [rt]
3. 执行周期 
   - C = A + sext(imm)
4. 内存周期 
   - MEM[C] = B
5. 写回周期

### beq指令

#### beq $r1, $r2, imm

1. 取指周期 
   - IR = MEM[PC]
   - PC = PC + 4
2. 译码周期 
   - 结果寄存器 = PC + sext(imm)
   - A = [r1]
   - B = [r2]
3. 执行周期 
   - C = A - B
   - **PC = 结果寄存器**
4. 内存周期
5. 写回周期

### j指令

#### j target

1. 取指周期 
   - IR = MEM[PC]
   - PC = PC + 4
2. 译码周期 
   - **PC = PC[31 : 28] || target << 2**
3. 执行周期
4. 内存周期
5. 写回周期

## 延迟计算

1. 算逻指令：4周期延迟
2. load指令：5周期延迟
3. store指令：4周期延迟
4. 分支指令：3周期延迟
5. 跳转指令：2周期延迟

> 假定某多周期CPU各主要部件的延迟为：
>
> - 存储器：2ns
> - 运算器：2ns
> - 寄存器组：1ns
>
> 该多周期CPU执行100条指令：
>
> - 25%Load指令
> - 10%Store指令
> - 45%算逻指令
> - 20%跳转指令
>
> 单步骤最长2ns，时钟周期为2ns，总执行时间为25×10+10×8+45×8+20×3=810ns

# 流水线CPU

 流水线连接图表示法

![img](https://i-blog.csdnimg.cn/direct/99b9742c04b14e81b31adc8a31fe4a00.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

流水线时空图表示法

![img](https://i-blog.csdnimg.cn/direct/348cb6e574d5427ca9e4d090e987dede.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

装入时间：第一个任务进入流水线到输出流水线的时间

排空时间：最后一个任务进入流水线到输出流水线的时间

## 流水线特点

- 流水线的时钟周期不能短于最慢的流水段
- 每个子任务由一个专门部件实现 
  - 每个功能部件每条指令只能用一次
  - 每个功能部件必须在相同的阶段被使用

## 性能指标

- 吞吐率：单位时间执行指令的数量
- 加速比：与串行执行时速度提高的比率

### 流水段数选择问题

> ![img](https://i-blog.csdnimg.cn/direct/92f33873a0d94df48bf4aa1c1c996468.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑
>
> ![img](https://i-blog.csdnimg.cn/direct/b9f66659488f4c89bfc3e2e5dcd26313.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

## 指令流水线实现

对应指令执行五阶段，采用五阶段流水线，每个功能段对应指令执行的一个阶段

![img](https://i-blog.csdnimg.cn/direct/22fdef9ae0c641d5808acef47df26426.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

- 即使有的指令不需要五个功能段，也要填空段变成五个功能段，这是流水线内部同步并行性决定的 
  - R-型指令、I-型指令：4功能段
  - load指令：5功能段
  - store指令：4功能段
  - beq指令：4功能段 	
    - [rs] - [rt]和跳转地址的计算都在EXE段
    - cond = 0的改写PC在MEM段完成
  - j指令：3功能段 	
    - 在EXE段改写PC

|            |  IF  |  ID  | EXE  | MEM  |  WB  |
| :--------: | :--: | :--: | :--: | :--: | :--: |
| R/I-型指令 |  √   |  √   |  √   |      |  √   |
|  load指令  |  √   |  √   |  √   |  √   |  √   |
| store指令  |  √   |  √   |  √   |  √   |      |
|  beq指令   |  √   |  √   |  √   |  √   |      |
|   j指令    |  √   |  √   |  √   |      |      |

- PC多路选择器在IF段使用，避免多指令写PC冲突
- 流水线锁存器（寄存器）：流水线每个功能段后都要有一个缓冲寄存器，保存本流水段的结果 
  - 既保留数据，也保留控制信号
  - 每个流水段的时延=流水段模块时延+流水线锁存器时延 	
    - WB段最后亦有锁存器时延
    - WB段有控制信号，锁存器需要存储
- IF：指令存储器IM、PC、总线 
  - IF/ID 	
    - PC+4
    - IR
- ID：寄存器组、控制信号生成部件 
  - ID/EXE 	
    - A、B、imm
    - rt/rd
    - PC+4
    - func
- EXE：ALU 
  - EXE/MEM 	
    - PC
    - ALU结果
    - 结果状态 		
      - 溢出等状态
    - B、目的寄存器
- MEM：数据存储器DM、总线 
  - MEM/WB 	
    - 目的寄存器
    - ALU结果
    - 存储器读出的结果
- WB：寄存器组

## 流水线冒险

### 结构冲突

硬件资源不满足某种指令组合

#### 解决方案

- 插入空指令nop![img](https://i-blog.csdnimg.cn/direct/7458f3f22a134faa9db6210ee5c1af5a.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑
- 增加硬件资源
- 增加端口或分开管理![img](https://i-blog.csdnimg.cn/direct/bb622d8e87ba4de19023fe5092f5addc.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑![img](https://i-blog.csdnimg.cn/direct/43a386b7b0dd430ca566f598196dd5c2.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

### 数据冲突

![img](https://i-blog.csdnimg.cn/direct/c968214adffb4d9fa9b2a10bace1e0cd.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

Reg实线为写，虚线为读

Load与sub、and冲突，与or、xor不冲突

#### 冲突分类

XAY：需要Y后X但是实际上做不到

- 写后读冲突（RAW） 
  - 上一条指令还没来得及写寄存器，下一条指令就要读
- 写后写冲突（WAW） 
  - 上一条指令寄存器结果覆盖下一条指令同一寄存器结果
  - MIPS指令流水不会发生WAW
    - 只有WB段会使用寄存器写端口
    - 各指令到达WB段的顺序就是本身的顺序
- 读后写冲突（WAR） 
  - 下一条指令脏读
  - MIPS指令流水不会发生WAR
    - 只有ID段读寄存器
    - 只有WB段写寄存器（不含PC，改写PC的冲突已不属于数据冲突）

#### 解决方案

##### 插入空指令nop或插入气泡

- 推迟后续指令的进行
- 并不增加总指令条数

##### 旁路（转发、定向）技术

- 将结果尽快传送到需要使用的位置

- 解决RAW（在MIPS下也只有这一种数据冲突）

- 各锁存器与各部件间有数据旁路，可以直接给数据和控制信号

  ![img](https://i-blog.csdnimg.cn/direct/64c348815571476da5794e7894911e8f.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

  - 各部件照常读数据
  - 如果正常读数据和旁路数据均到达多路选择器，选择旁路数据
  - 冲突检测![img](https://i-blog.csdnimg.cn/direct/8d3f7a85663d4cb598bfed7f0354c69a.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑
    - EXE段冲突（add指令与sub指令冲突）
      - 检查当前指令的EXE/MEM锁存器和下一条指令的ID/EXE锁存器
        - 本条指令的目的寄存器是下一条指令的源寄存器
        - 本条指令将改写目的寄存器
        - 目的寄存器不是0寄存器
    - MEM段冲突（add指令与and指令冲突）
      - 检查当前指令的MEM/WB锁存器和下下一条指令的ID/EXE锁存器
        - 本条指令的目的寄存器是下一条指令的源寄存器
        - 本条指令将改写目的寄存器
        - 目的寄存器不是0寄存器

![img](https://i-blog.csdnimg.cn/direct/6712cdb5a05e4098a5565971ab4435c0.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

- EXE/MEM实现的转发. 
  - EXE段结果替换下一条指令EXE段操作数
- MEM/WB实现的转发 
  - MEM段准备写入寄存器的值替换下下一条指令EXE段操作数
- **有且仅有**sw指令的rt寄存器可以在EXE段或MEM段被修改

##### 编译器调度方法（静态调度）

-  load-use冲突 
  - 旁路技术不再有效 	
    - load指令在WB段才写入数据
    - 下一条指令在EXE段就需要使用
    - 使用时数据还没有计算出来
  - 插入一个nop
  - 插入一个气泡
  - 编译器调度![img](https://i-blog.csdnimg.cn/direct/380a6f310d284382981900348b6008da.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑
  - 冲突检测 	
    - 上一条指令是load指令（控制信号MemRead = 1）
    - load指令的写入寄存器是当前指令的源寄存器

##### 动态调度

- 指令顺序发射
- 乱序执行
- 指令乱序流出

### 控制冲突

转移类指令导致的程序方向改变

- 对流水线性能影响最大 
  - 所有指令都要在IF段使用PC
  - 出现转移指令后要到该指令EXE阶段结束才能确定PC

#### 解决方案

- 插入nop 

  - 为减小暂停周期数 	
    - 尽早判断分支转移是否成功 		
      - 增加比较器比较源操作数
    - 尽早计算出成功转移时的PC 		
      - ID段增加加法器

- 分支预测 

  - 预测转移失败：视转移指令为普通指令，顺序向下执行 	
    - 如果转移成功，清除已执行指令的影响
  - 预测转移成功：假设转移指令都会转移，找到分支目标处执行 	
    - 如果转移失败，清除已执行指令的影响

- 动态预测 

  - 认为如果发生转移，下次也发生转移；如果不发生转移，下次也不发生转移 	
    - 执行一个循环体
  - 1位预测位：一旦预测错了就改变预测方向![img](https://i-blog.csdnimg.cn/direct/4ff3c8f9e50b4095a177ac71a03e0796.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑
  - 2位预测位：连续两次预测错才改变预测方向![img](https://i-blog.csdnimg.cn/direct/1b181627754f40d5bf0e2a21bc323448.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

- 延迟槽：编译器处理 

  - 分支指令后续指令

    放在延迟槽中（调整指令顺序） 	

    - 无论转移是否成功，延迟槽内指令均上流水线执行![img](https://i-blog.csdnimg.cn/direct/1d13974d899c4549b2e42b923e759ef7.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

  - 延迟槽指令选择![img](https://i-blog.csdnimg.cn/direct/88adfe3707224b4498c9f26431cdbdd7.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑![img](https://i-blog.csdnimg.cn/direct/5098be9e0b7449209d8fa5762853ab45.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

  - MIPS处理器**采用**延迟分支技术，延迟槽数为1

  - RISCV处理器**不采用**延迟分支技术

# 异常处理

![img](https://i-blog.csdnimg.cn/direct/dbcd125269934fdcb57897ce9f539f3b.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

## MIPS异常处理流程

![img](https://i-blog.csdnimg.cn/direct/cd401d82c4494ebb8714ec12696b86e9.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

硬件部分

![img](https://i-blog.csdnimg.cn/direct/2b958155f47c41adb9d40967a9cd5c17.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

软件部分

![img](https://i-blog.csdnimg.cn/direct/103258a1c71543c191f14f5683f919a8.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

- EPC寄存器 
  - 保存异常指令地址 	
    - 延迟槽问题 		
      - 异常指令**在延迟槽**中：**EPC = PC - 4**
      - 异常指令**不在延迟槽**中：**EPC = PC**
    - 多周期CPU 		
      - 中断：EPC = PC
      - 异常：EPC = 上一条指令的地址
    - 流水线CPU 		
      - **精确异常**
        - 产生异常之前的指令都执行完毕
        - 取消后续指令
  - 中断处理后返回

## 异常嵌套

在异常处理中出现另一个异常

- 大多数系统对异常进行优先级划分 
  - 规定处理异常时只有更高优先级才被允许

异常前状态被保存在寄存器中，内部异常会重写寄存器值，因此必须先保存寄存器的值

异常帧：为保存寄存器的值的主存空间的数据结构

- 通常保存在栈中