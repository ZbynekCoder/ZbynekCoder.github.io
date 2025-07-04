# 第一章 行列式计算

> **需要熟悉的知识点**
>
> - 2阶、3阶行列式手算
> - 三角阵和反三角阵的行列式
> - 分块三角阵和分块反三角阵的行列式
> - 3种初等变换及对应行列式变化
> - 按某行或某列展开的Laplace公式
> - Vandemonde行列式
> - 余子式 $M_{ij}$ 与代数余子式 $A_{ij}$ 定义及性质
> - $|AB| = |A||B|$

---

## 1.1 直接计算

### 1.1.1 初等变换

**务必多加练习！**

**一般步骤：**

1. 通过初等变换得到某一行（列）全为1（或全相等时提出公因子）
2. 再次初等变换得到某一行（列）只有一个非零元
3. 用Laplace公式展开

**常见特征：**
- 每行（列）和全相等
- 相邻行（列）有规律
- 某行（列）只有个别非零元

**练习1.1 (2015W-1-1)**

设 $A = (a_{ij})_{n \times n}$, $a_{ij} = ij$，求 $|A|$.

**练习1.2 (2017S-5)**

计算行列式
$$
D_n = 
  \left|
	\begin{array}{cccccc}
		b       & b       & \cdots & b      & b       & a       \\\\
		b       & b       & \cdots & b      & a       & b       \\\\
		b       & b       & \cdots & a      & b       & b       \\\\
		\vdots  & \vdots  &        & \vdots & \vdots  & \vdots  \\\\
		b       & a       & \cdots & b      & b       & b       \\\\
		a       & b       & \cdots & b      & b       & b       \\\\
	\end{array}
  \right|
  
$$
**练习1.3 (2018W-1-5)**

计算行列式
$$
D_n = \left|
	\begin{array}{ccccc}
		1       & 2       & 3       & \cdots  & n       \\\\
		2       & 3       & 4       & \cdots  & n-1     \\\\
		3       & 4       & 5       & \cdots  & n-2     \\\\
		\vdots  & \vdots  & \vdots  &         & \vdots  \\\\
		n       & n-1     & n-2     & \cdots  & 1       \\\\
	\end{array}
  \right|
$$
**练习1.4 (2019S-4)**

计算 $f(\pi)$ 与 $f'(\pi)$，其中
$$
f(x) = \begin{vmatrix}
a_1 & b_1 & a_1x^2 + b_1x + c_1 \\\\
a_2 & b_2 & a_2x^2 + b_2x + c_2 \\\\
a_3 & b_3 & a_3x^2 + b_3x + c_3 \\\\
\end{vmatrix}
$$
**练习1.5 (2019W-1-1)**

计算行列式
$$
D = \left|
	\begin{array}{cccc}
		2   & 3   & 4   & 5 \\\\
		1   & 2   & 3   & 4 \\\\
		-1  & 3   & 1   & 0 \\\\
		1   & 2   & 1   & 3 \\\\
	\end{array}
  \right|
$$
**练习1.6 (2020S-1-1)**

计算行列式
$$
D = \left|
	\begin{array}{cccc}
		1   & 2   & 3   & 4 \\\\
		-1  & 1   & 2   & 3 \\\\
		0   & -1  & 1   & 2 \\\\
		0   & 0   & -1  & 1 \\\\
	\end{array}
  \right|
$$

---

### 1.1.2 可递推型
**常见特征：**

使用 Laplace 公式将行列式降阶后变为所求行列式的低阶版本或一个局部

- 三对角阵/反三对角阵
- 中心对称且边界稀疏

递推式通过 Laplace 公式得到。

**例题1.1 (2016W-1-5)**

计算行列式：
$$
D_n = \begin{vmatrix}
0 & 0 & \cdots & 1 & 2 \\\\
0 & 0 & \cdots & 2 & 1 \\\\
\vdots & \vdots & \ddots & \vdots & \vdots \\\\
1 & 2 & \cdots & 0 & 0 \\\\
2 & 1 & \cdots & 0 & 0 \\\\
\end{vmatrix}
$$
**解：** 通过递推关系 $D_n = (-1)^{n+1} \cdot 2D_{n-1} + D_{n-2}$ 求解。

**练习1.7**

计算行列式
$$
D_n = \begin{vmatrix}
\alpha + \beta & \alpha\beta & & \\\\
1 & \ddots & \ddots & \\\\
& \ddots & \ddots & \alpha\beta \\\\
& & 1 & \alpha + \beta \\\\
\end{vmatrix}
$$
**练习1.8**

计算行列式
$$
D_{2n} = \left|
	\begin{array}{cccccc}
		a   &    										&     	&   & 											& b	\\\\
	  		& \ddots   									&     	&   & \begin{rotate}{90}$\ddots$\end{rotate}	&   \\\\
	  	    &   										& a		& b &											&	\\\\
	  	    &    										& b  	& a &											&	\\\\
		    & \begin{rotate}{90}$\ddots$\end{rotate}	&    	&   & \ddots									&	\\\\
		b   &    										&    	&   &											& a	\\\\
	\end{array}
	\right|
$$
**练习1.9**

计算行列式
$$
D_{n+1} = 
	\left|
	\begin{array}{cccccc}
		a_0 	& a_1		& a_2 		& \cdots	& a_{n-1}	& a_n		\\\\
	  	-1		& x			& 0    		& \cdots	& 0			& 0  		\\\\
	  	0		& -1		& x			& \cdots	& 0			& 0			\\\\
	  	\vdots	& \vdots 	& \vdots  	&			& \vdots	& \vdots 	\\\\
		0   	& 0			& 0			& \cdots	& -1		& x			\\\\
	\end{array}
	\right|
$$

### 1.1.3 Vandemonde

$$
\begin{vmatrix}
1 & 1 & \cdots & 1 \\\\
x_1 & x_2 & \cdots & x_n \\\\
\vdots & \vdots & \ddots & \vdots \\\\
x_1^{n-1} & x_2^{n-1} & \cdots & x_n^{n-1} \\\\
\end{vmatrix} = \prod_{1 \leq j < i \leq n} (x_i - x_j)
$$

- $j < i$而非$j \le i$
- $x_i - x_j$而非$x_j - x_i$

**例题1.1 (2015W-2-(1))**

(1) 计算
$$
D_{n+1} = 
 \left|
  \begin{array}{cccccc}
    1     & 1     & \cdots & 1      & 1    \\\\
    x_1    & x_2    & \cdots & x_n     & x    \\\\
    x_1^2   & x_2^2   & \cdots & x_n^2    & x^2   \\\\
    \vdots   & \vdots   &     & \vdots   & \vdots  \\\\
    x_1^{n-2} & x_2^{n-2} & \cdots & x_n^{n-2}  & x^{n-2} \\\\
    x_1^{n-1} & x_2^{n-1} & \cdots & x_n^{n-1}  & x^{n-1} \\\\
    x_1^n   & x_2^n   & \cdots & x_n^n    & x^n   \\\\
  \end{array}
 \right|
$$
**解：**$D_{n+1} = \prod_{1 \le j < i \le n}(x_i - x_j) \prod_{i=1}^n(x - x_i)$

---

### 1.1.4 秩一修正型
对可逆方阵 $A$，有 
$$
|A + \alpha \beta^T| = (1 + \beta^T A^{-1} \alpha) |A|
$$
**练习1.10**

计算
$$
D_n = \begin{vmatrix}
a_1 + x_1 & a_2 & \cdots & a_n \\\\
a_1 & a_2 + x_2 & \cdots & a_n \\\\
\vdots & \vdots & \ddots & \vdots \\\\
a_1 & a_2 & \cdots & a_n + x_n \\\\
\end{vmatrix}
$$
其中$x_i \neq 0,i=1,2,\dots,n$。

---

## 1.2 余子式与代数余子式之和类型
- $M_{ij} = (-1)^{i+j} A_{ij}$

- $$
	\begin{aligned}
	        D &= \sum_{i = 1}^n a_{ij}A_{ij},\forall j = 1,2,\dots,n \\\\
	        &= \sum_{j = 1}^n a_{ij}A_{ij},\forall i = 1,2,\dots,n
	\end{aligned}
	$$

- $$
	\begin{align*}
	        0 &= \sum_{i = 1}^n a_{ij_0}A_{ij},\forall j = 1,2,\dots,n,j \neq j_0 \\\\
	        &= \sum_{j = 1}^n a_{i_0j}A_{ij},\forall i = 1,2,\dots,n,i \neq i_0
	\end{align*}
	$$

**例题1.3 (2019S-1-1)** 

计算$\begin{vmatrix}
2 & 3 & 4 & 5 \\\\
-1 & 0 & 0 & 0 \\\\
2 & -2 & 0 & 0 \\\\
0 & 3 & -3 & 0 \\\\
\end{vmatrix}$的第一行代数余子式之和。

**解：**
$$
\begin{aligned}
        A_{11} + A_{12} + A_{13} + A_{14} &= 
        \left|
        \begin{array}{cccc}
            1   & 1   & 1   & 1 \\\\
            -1  & 0   & 0   & 0 \\\\
            2   & -2  & 0   & 0 \\\\
            0   & 3   & -3  & 0 \\\\
        \end{array}
        \right| \\\\
        &= 6
\end{aligned}
$$
**练习1.11 (2021S-1-1)**

计算$A_{11} + M_{12} - M_{13}$，其中$D =  \left|\begin{array}{ccccc}2  & 1 & 1 & 1 & 1 \\\\1  & 2 & 1 & 1 & 1 \\\\1  & 1 & 2 & 1 & 1 \\\\1  & 1 & 1 & 2 & 1 \\\\1  & 1 & 1 & 1 & 2 \\\\\end{array}\right|$，$A_{ij}$是元素$a_{ij}$的代数余子式，$M_{ij}$是元素$a_{ij}$的余子式。

**练习1.12**

设行列式$D= \left| \begin{array}{cccc} 2 & 0 & -1 & 1 \\\\  3 & 1 & 0 & 1 \\\\  4 & 1 & 1 & 0 \\\\  5 & -1 & 0 & a \end{array} \right|$，$A_{ij}$表示元素$a_{ij}(i, j=1,2,3,4)$的代数余子式。若$A_{11}-A_{21}+A_{41}=4$，求$a$。

---

## 1.3 分块行列式计算
$$
\left| \begin{array}{cc}
A & O \\\\
C & D \\\\
\end{array} \right| = 
\left| \begin{array}{cc}
A & B \\\\
O & D \\\\
\end{array} \right| = |A| \cdot |D|
$$

**练习1.13**

设$A$是$m$阶矩阵，$B$是$n$阶矩阵，且$\left|A\right|=a$，$\left|B\right|=b$，求$\left|\begin{array}{cc}O  & A \\\\B  & O \\\\\end{array}\right|$。

---

## 1.4 多项式行列式计算
关注各幂次前系数。

**例题1.4 (2015W-2-(2))**

(1) 计算$D_{n+1} = \left|\begin{array}{ccccc}1     & 1     & \cdots & 1      & 1    \\\\x_1    & x_2    & \cdots & x_n     & x    \\\\x_1^2   & x_2^2   & \cdots & x_n^2    & x^2   \\\\\vdots   & \vdots   &     & \vdots   & \vdots  \\\\x_1^{n-2} & x_2^{n-2} & \cdots & x_n^{n-2}  & x^{n-2} \\\\x_1^{n-1} & x_2^{n-1} & \cdots & x_n^{n-1}  & x^{n-1} \\\\x_1^n   & x_2^n   & \cdots & x_n^n    & x^n   \\\\\end{array}\right|.$

(2) 由(1)计算$C_n = \left|\begin{array}{cccc}1     & 1     & \cdots & 1      \\\\x_1    & x_2    & \cdots & x_n     \\\\x_1^2   & x_2^2   & \cdots & x_n^2    \\\\\vdots   & \vdots   &     & \vdots   \\\\x_1^{n-2} & x_2^{n-2} & \cdots & x_n^{n-2}  \\\\x_1^n   & x_2^n   & \cdots & x_n^n    \\\\\end{array}\right|.$

**解：**(2) 注意到$-C_n$为$D_{n+1}$的$x^{n-1}$项前系数，由Vieta定理，$C_n = \prod_{1 \le j < i \le n}(x_i - x_j) \sum_{i=1}^n x_i$

**练习1.14 (2019S-4 改)**

计算 $f'(\pi)$ 和 $f''(\pi)$，此处
$$
f(x) = \begin{vmatrix}
a_1 & b_1 & a_1x^2 + b_1x + c_1 \\\\
a_2 & b_2 & a_2x^2 + b_2x + c_2 \\\\
a_3 & b_3 & a_3x^2 + b_3x + c_3 \\\\
\end{vmatrix}
$$
**练习1.15**

分析不恒为零的函数$f(x)=\left|\begin{array}{ccc}a_1 + x & b_1 + x & c_1 + x \\\\a_2 + x & b_2 + x & c_2 + x \\\\a_3 + x & b_3 + x & c_3 + x \\\\\end{array}\right|$的零点数量情况。

**练习1.16**

设$f(x)=\left|\begin{array}{ccccc}x + 1  & 2     & 3     & \cdots   & n     \\\\1    & x + 2   & 3     & \cdots   & n     \\\\1    & 2     & x + 3   & \cdots   & n     \\\\\vdots  & \vdots   & \vdots   &       & \vdots   \\\\1    & 2     & 3     & \cdots   & x + n   \\\\\end{array}\right|$，求$f^{(n-1)}(0)$。