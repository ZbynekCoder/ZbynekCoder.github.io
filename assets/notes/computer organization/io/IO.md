# I/O

##  I/O端口

I/O接口中的寄存器

### 独立编址

![img](assets/a7af13be5a3a4389bb82eea9df79c350.png)

### 统一编址

![img](assets/c0828afed41c40b28b31c54f104bd8f7.png)

- 编程灵活
- 大多数RISC架构都是用统一编址 
  - 通过操作数地址范围确定是否为I/O操作
- <font color=#956FE7>**非映射地址**</font>：地址转换无需MMU
- <font color=#956FE7>**非cache缓存地址**</font>

## I/O数据传送控制方式

### 程序直接控制

CPU直接控制I/O

- <font color=#1C7331>简单，成本低</font>
- <font color=#BE191C>效率低下，严重影响CPU</font>
- 早期使用

### 程序中断

![img](assets/27b6b71555364661a219c53af5629b72.png)

- 中断请求：外设给CPU发信号

- 中断响应：<font color=#956FE7>**硬件**完成</font>

  - <font color=#4DA8EE>关中断</font>
  - 设所有可屏蔽中断的允许标志为禁止
    
- <font color=#4DA8EE>保护断点和程序状态</font>
    - 保存PC和PSWR
    - EPC ← PC
    
- <font color=#4DA8EE>识别中断源</font>（可能由软件实现），<font color=#4DA8EE>**转中断服务程序**</font>
    - 获得优先级最高的中断源对应的中断处理程序的首地址和初始程序状态
    - 送PC和PSWR

- 中断处理：<font color=#956FE7>CPU执行中断服务程序（**软件完成**）</font>

  - 准备阶段
    - <font color=#4DA8EE>保护现场</font>
      - <font color=#956FE7>用户可见通用寄存器</font>的值压栈
    - <font color=#4DA8EE>设置新屏蔽字</font>
    - <font color=#4DA8EE>开中断</font>
  - 处理阶段 	
    - <font color=#956FE7>执行具体中断服务</font>
      - <font color=#956FE7>CPU可以响应新的中断请求</font>
  - 恢复阶段 	
    - <font color=#4DA8EE>关中断</font>
    - <font color=#4DA8EE>恢复现场和旧屏蔽字</font>
    - <font color=#4DA8EE>清除中断请求</font>
    - <font color=#4DA8EE>开中断</font>
    - <font color=#4DA8EE>返回</font>

![img](assets/a29c9ecbb4fa4961a668c7d9b79ee6b8.png)

![img](assets/86e5694903e34e7fb60f9e9ff799f449.png)

- <font color=#1C7331>适用于传输速度不大，传输量不大的场合</font>
- <font color=#BE191C>较大CPU干扰</font>

### DMA

- 专设硬件

- I/O和主存间的直接数据通路

- 成组传送

- 工作方式 

  - <font color=#956FE7>独占总线</font>
    - CPU暂停占用总线
    - DMA传完数据还给CPU
  - <font color=#956FE7>周期窃取</font>
    - CPU给DMA一个总线周期
  - 交替分时访问
    - 每个存储周期分为CPU时间片和DMA时间片

- ![img](assets/0ce61a4581ba43ac9858261d928c9e9f.png)![img](assets/ece594594b0340e8ae9c843325b215b5.png)

- DMA地址问题

  ![img](assets/8a505597aa1541f4b14f106f180814a1.png)

- DMA导致的<font color=#BE191C>cache与主存一致性问题</font>

  - DMA写主存，cache留着新值
  - cache用延迟写策略，DMA看了主存的旧值
  - 解决方法
    - I/O通过cache
      - I/O可以更新cache
        - 降低命中率
    - 软件层面控制
      - <font color=#4DA8EE>I/O**读时**操作系统使部分cache无效</font>
      - <font color=#4DA8EE>I/O**写时**强制cache写回</font>
    - 硬件层面控制
  
- 特点 

  - 与设备一对一服务
  - 适中的CPU干扰
  - 不能用于大量高速设备

## I/O通道

![img](assets/c04a1dfe310b4eff83156676526adf83.png)

- 类型
  - 字节多路通道
    - 通道时分复用
  - 选择通道
    - 选择一台设备独占通道
    - 成组传送数据
    - 高速
  - 数组多路通道
- 特点 
  - 与设备一对多服务
  - 适中的CPU干扰
  - 不能用于大量高速设备

## 输入输出处理机

### I/O处理机IOP

与主机共享内存

### 外围处理机

- 是通用计算机
- 独立的I/O
- 与主机通过通道交互

## I/O处理流程

![img](https://i-blog.csdnimg.cn/direct/76dd8612db0b450cbcf5ec20250cb2fa.png)