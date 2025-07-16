# 散列表Hashtable

合法关键码数量为$R$，散列表长为$M$

## 散列函数设计

### 除余法

**<font color=#956FE7>取$M$为素数</font>**，<font color=#4DA8EE>$hash(key) = key \% M$</font>

![](assets/deng-mod.png)

### MAD法

**<font color=#956FE7>取M为素数</font>**，<font color=#4DA8EE>$hash(key) = (a \times key + b) \% M$</font>，<font color=#956FE7>$a$，$b$皆正，$a \% M \neq 0$</font>

相较于除余法有<font color=#1C7331>更好的均匀性</font>

![](assets/deng-mad-1.png)

![](assets/deng-mad-2.png)

### 数字分析法

取$key$中的若干位

### 平方取中法

取$key^2$中的若干位

### 折叠法

将$key$分为若干段，各段之和作为$hash(hey)$

### 位异或法

将$key$分为若干段，各段之异或作为$hash(hey)$

### 伪随机数法

$hash(key) = rand(key) \% M$

- <font color=#BE191C>可移植性差</font>

## 散列冲突解决

- <font color=#956FE7>开：使用**新的存储结构**</font>
- <font color=#956FE7>闭散列：不使用**新的存储结构**</font>
- <font color=#956FE7>封闭：某个散列地址**只能**由散列值匹配的关键词装入</font>
- <font color=#956FE7>开放地址：**无所谓**散列值</font>

### 开散列（封闭地址）策略

#### 多槽位法

散列表每个桶都能装$N$个关键词

#### 独立链法

散列表每个桶都能装若干关键词，List组织

#### 公共溢出区法

另设一个溢出区，整个散列表<font color=#4DA8EE>一旦冲突就进入溢出区</font>

### 闭散列（开放地址）策略

<font color=#956FE7>装填因子最好**小于50%**</font>

#### 线性试探法

<font color=#4DA8EE>第$k$次试探的偏移量为$k$</font>

- <font color=#4DA8EE>每次往后找1个</font>
- <font color=#BE191C>聚集现象严重</font>

##### 查找链与平均查找长度

<font color=#956FE7>查找链：查找过程中**经过**的桶（是一条查找路径）</font>

<font color=#956FE7>查找长度：**尝试**匹配的桶的数量</font>

##### 懒惰删除

直接删除导致查找链断裂

标记这个桶<font color=#956FE7>**曾经**有关键码来过</font>，现在是空的

- 既然是空桶，<font color=#4DA8EE>正常插入</font>
- 之前有关键码，<font color=#4DA8EE>查找需要再往后看</font>

#### 平方试探法

<font color=#4DA8EE>第$k$次试探的偏移量为$k^2$</font>

- <font color=#1C7331>更好的减缓聚集现象</font>
- <font color=#956FE7>**装填因子 <= 50%时必能插入**</font>

> <font color=#956FE7>对于素数$p$，所有的完全平方数模$p$同余有且只有**$\left\lceil \dfrac{p}{2} \right\rceil$个同余类**，即$\displaystyle \bar{0},\bar{1},\dots,\bar{\left\lfloor{\frac{p}{2}}\right\rfloor}$。</font>

![](assets/deng-ex9-14-1.png)

![](assets/deng-ex9-14-2.png)

![](assets/mark-thm9.1.png)

- TableSize一定是奇数
- 使用鸽笼原理得知：因装填因子 <= 50%，互异备选位置中一定有空桶
- <font color=#956FE7>如果**$M$不是素数**，即使装填因子 < 50%也**不一定就能插入**</font>![](assets/deng-ex9-15-a.png)
- <font color=#956FE7>如果**装填因子 > 50%**，即使有空桶也**不一定就能插入**</font>
	- <font color=#956FE7>如果**在$\left\lceil \dfrac{p}{2} \right\rceil$次试探后**仍未插入**，**那么**不能插入**</font>![](assets/deng-ex9-14-c.png)

#### 双向平方试探法

<font color=#4DA8EE>偏移量为1,-1,4,-4,9,-9，...</font>

- <font color=#956FE7>如果M是形如</font><font color=#1C7331>$4k + 3$</font><font color=#956FE7>的素数，那么前$M$次试探桶</font><font color=#1C7331>**必然互异**</font>![](assets/deng-ex9-17-a.png)
	- 反之，如果M取作<font color=#BE191C>$4k + 1$</font>的素数，那么**<font color=#BE191C>必然不能保证</font>**前$M$次试探均互异
- 换言之，这将遍历整个散列表，<font color=#956FE7>只要还有空桶，**必能插入**</font>

#### 伪随机试探法

如果第$k$次冲突，就尝试地址为<font color=#4DA8EE>$rand(k) \% M$</font>的桶，直到找到一个空桶

#### 双散列法

<font color=#4DA8EE>第$k$次试探的偏移量为$k \times hash_2(key)$</font>

- <font color=#4DA8EE>每次往后找$hash_2(key)$个 </font>

## 再散列

类比向量扩容，<font color=#4DA8EE>容量翻倍，数据搬迁</font>