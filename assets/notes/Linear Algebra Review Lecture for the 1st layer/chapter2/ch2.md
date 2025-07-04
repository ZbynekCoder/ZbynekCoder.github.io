# 第二章 矩阵基础性质、计算与初等变换

>**需要熟悉的知识点**
>
>- 手算矩阵乘法
>- 矩阵的逆、伴随、转置定义及性质
>- 手算求逆，手算求伴随
>- 矩阵的初等变换、初等矩阵表示，相抵关系，矩阵秩的计算，线性方程组求解
>- 分块矩阵处理与矩阵分块
>- 简单矩阵分解

---

## 2.1 基本性质与计算型

1. **矩阵乘法**：
   $$
   AB = \begin{bmatrix}
   a_1^T \\\\ a_2^T \\\\ \vdots \\\\ a_s^T
   \end{bmatrix}_{s \times m}
   [ \beta_1, \beta_2, \cdots, \beta_m ]_{m \times m} =
   \begin{bmatrix}
   a_1^T \beta_1 & \cdots & a_1^T \beta_m \\\\
   \vdots & \ddots & \vdots \\\\
   a_s^T \beta_1 & \cdots & a_s^T \beta_m
   \end{bmatrix}_{s \times m}
   $$

2. **逆矩阵**：
   - $AA^{-1} = A^{-1}A = I$（唯一性）
   - $(A^{-1})^{-1} = A$
   - $|A^{-1}| = |A|^{-1}$
   - 3阶及以下矩阵算逆用伴随，3阶以上矩阵算逆用初等行变换
   
3. **伴随矩阵**：
   - $AA^* = A^*A = |A|I$（唯一性）
   - $|A^*| = |A|^{n-1}$
   - $A^*$的 $(i,j)$ 元是$A_{ji}$而非$A_{ij}$（代数余子式转置）
   - $A^{-1} = \dfrac{1}{|A|}A^*$
   	- 涉及$A^{-1}$或$A^*$时，优先乘原矩阵化简
   
4. **转置矩阵**：
   - $(A^T)^T = A$
   - $|A^T| = |A|$

5. **初等变换**：
   
   - 初等行（列）变换 ⇔ 左（右）乘初等矩阵
   - 初等变换不改变秩，但可能改变行列式

**例题 2.1 (2015W-5)**

设 $A$ 为幂零矩阵（存在 $N$ 使 $A^N=O$）。证明：  

(1) $B = a_1A + \cdots + a_mA^m$ 幂零。

(2) 若 $a_0 \neq 0$，则 $C = a_0E + B$ 可逆，并利用$𝐵$来表示$𝐶^{−1}$ 。

**证明**：

(1) 直接验证$B^N = O$，从而幂零。

(2) 假设我们已经知道了$C$可逆，$C^{-1} = (a_0 E + B)^{-1}$，完全形式化地处理矩阵的逆。
$$
\begin{aligned}
    (a_0 E + B)^{-1} &= \dfrac{E}{a_0 E + B} \\\\
    &= \dfrac{1}{a_0} \dfrac{E}{E + \dfrac{1}{a_0} B} \\\\
    &= \dfrac{1}{a_0} \sum_{k=0}^{\infty} \left(-\dfrac{1}{a_0} B\right)^k \\\\
    &= \dfrac{1}{a_0} \sum_{k=0}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k
\end{aligned}
$$
这表明如果$C$可逆，那么$C^{-1} = \dfrac{1}{a_0} \sum_{k=0}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k$，那么只需验证$C \dfrac{1}{a_0} \sum_{k=0}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k = E$：
$$
\begin{aligned}
    C \dfrac{1}{a_0} \sum_{k=0}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k &= \dfrac{1}{a_0}  (a_0 E + B) \sum_{k=0}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k \\\\
    &= \sum_{k=0}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k - \sum_{k=1}^{N} \left(-\dfrac{1}{a_0} B\right)^k \\\\
    &= \sum_{k=0}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k - \sum_{k=1}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k \\\\
    &= E
\end{aligned}
$$
上面的过程请在草稿纸上完成。解题过程如下：

断言：$C$可逆，并且$C^{-1} = \dfrac{1}{a_0} \sum_{k=0}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k$。

事实上，
$$
\begin{aligned}
    C \dfrac{1}{a_0} \sum_{k=0}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k &= \dfrac{1}{a_0}  (a_0 E + B) \sum_{k=0}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k \\\\
    &= \sum_{k=0}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k - \sum_{k=1}^{N} \left(-\dfrac{1}{a_0} B\right)^k \\\\
    &= \sum_{k=0}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k - \sum_{k=1}^{N-1} \left(-\dfrac{1}{a_0} B\right)^k \\\\
    &= E
\end{aligned}
$$
**练习2.1 (2015W-1-3)**

已知 $A + B = \left[ \begin{matrix} 1 & 1 \\\\ 2 & 4 \\\\ \end{matrix} \right]$, $A - B = \begin{bmatrix} 3 & 5 \\\\ 0 & 2 \end{bmatrix}$，求 $A^2 - B^2$。

**练习2.2 (2017S-1-1)**

设 $A$ 为3阶方阵，$|A| = \dfrac{1}{2}$，求 $|(3A)^{-1} - 2A^*|$。

**练习2.3 (2017S-1-4)**

已知 $A = \begin{bmatrix} -5 & 2 \\\\ -12 & 5 \end{bmatrix}$, $P = \begin{bmatrix} 1 & 2 \\\\ 3 & 4 \end{bmatrix}$，求 $P^{-1}AP$ 和 $A^{-3} - A$。

**练习2.4 (2017S-2)**

设 $A,B$ 是同阶幂等矩阵（$X^2=X$），证明：$A+B$ 幂等当且仅当$AB=BA=O$。

**练习2.5 (2018W-1-2)**

设 $A = \left[\begin{matrix}0 & 1 &     &      &    \\\\& 0 & 2    &      &    \\\\&  & \ddots  & \ddots   &    \\\\&  &     & 0     & n-1  \\\\n &  &     &      & 0   \\\\\end{matrix}\right]$, $B = \begin{bmatrix} 2 & 1 \\\\ 5 & 3 \end{bmatrix}$, $C = \begin{bmatrix} A & O \\\\ O & B \end{bmatrix}$，其中$n \ge 2$，求 $C^{-1}$。

**练习2.6 (2018W-1-3)**

设 $A \in \mathbb{R}^{3 \times 3}$, $|A| \neq 0$，且 $A_{ij} = 2a_{ij}$，求 $|A^*|$。

**练习2.7 (2019S-1-3)**

已知 $A^* = \begin{bmatrix} 0 & 0 & 3 & 2 \\\\ 0 & 0 & 0 & 3 \\\\ 2 & 1 & 0 & 0 \\\\ 1 & 2 & 0 & 0 \end{bmatrix}$，求 $A$。

**练习2.8 (2019W-1-3)**

已知 $A^{-1} = \begin{bmatrix} 2 & 1 & 4 \\\\ -2 & 3 & 6 \\\\ -2 & 1 & -6 \end{bmatrix}$，求 $(E + A)^{-1}$。

**练习2.9 (2019W-3)**

设 $n$ 阶方阵满足 $(A^*)^* = O$，证明 $|A| = 0$。

**练习2.10 (2021S-1-4)**

计算 $(A^*)^*$，其中 $A = \begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \end{bmatrix}$。

**练习2.11 (2021S-5(1))**

设$A = (\alpha_1,\dots,\alpha_n)$, $B = A^{-1} = \begin{bmatrix} \beta_1^T \\\\ \vdots \\\\ \beta_n^T \end{bmatrix}$, $C = \sum_{i=1}^k \alpha_i \beta_i^T$ ($k < n$)。

(1) 证明：$C^2 = C$。

---

## 2.2 初等变换计算型

**多加练习！不要跳步！没有技巧！**

- **矩阵秩的计算**：初等变换化为行阶梯形
- **线性方程组求解**：  
	- $Ax = b$ ⇔ 增广矩阵 $[A|b]$ 行变换
	- $AX = B$ ⇔ 解 $Ax_k = \beta_k$ ($k=1,\dots,n$)
- **矩阵方程求解**：统一的行变换方法

**例题 2.2 (2017S-4)**

解带参数方程组：
$$
\begin{cases}
x_1 + (\lambda^2 + 1)x_2 + 2x_3 = \lambda \\\\
\lambda x_1 + \lambda x_2 + (2\lambda + 1)x_3 = 0 \\\\
x_1 + (2\lambda + 1)x_2 + 2x_3 = 2
\end{cases}
$$

**练习2.12 (2015W-1-2)**

求 $p$ 使矩阵 $A = \begin{bmatrix} p & 4 & 10 & 1 \\\\ 1 & 7 & 15 & 3 \\\\ 2 & 2 & 0 & 3 \end{bmatrix}$ 的秩$r(A)$最小，并求$r(A)$。

**练习2.13 (2015W-4)**

求过点$(-2,0), (-1,1), (1,-3), (t,1)$的三次多项式$y = a_3x^3 + a_2x^2 + a_1x + a_0$。

**练习2.14 (2016W-5)**

设 $A = \begin{bmatrix} 5 & 2 & 4 \\\\ 2 & 5 & -11 \\\\ 2 & 3 & -5 \end{bmatrix}$。

(1) 解 $Ax = 0$

(2) 求满足 $A^2x = 0$ 但 $Ax \neq 0$ 的 $x$ 的集合。

**练习2.15 (2017S-6)**

设$𝐴$和$𝑋$为$n$阶方阵，且满足$AX = A + 2X$。

(1) 证明 $AX = XA$。

(2) 若 $A = \begin{bmatrix} 4 & 2 & 3 \\\\ 1 & 1 & 0 \\\\ -1 & 2 & 3 \end{bmatrix}$，求解矩阵方程$AX = A + 2X$。

**练习2.16 (2018W-1-1)**

设$A=\left[\begin{matrix}1 & 2 & 1 \\\\1 & 1 & 0 \\\\2 & 1 & -\lambda \\\\\end{matrix}\right]$经初等变换得$B=\left[\begin{matrix}-5 & 17 & 6 \\\\-7 & 0 & 5 \\\\13 & 9 & -8 \\\\\end{matrix}\right]$，求$\lambda$。

**练习2.17 (2019S-1-2)**

求$X$满足
$$
\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & -1 & 0 \\\\ 0 & 0 & -1 \end{bmatrix}
X
\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & -1 & 0 \\\\ 0 & 0 & 1 \end{bmatrix} =
\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & -1 & 0 \\\\ 0 & 2 & 2 \end{bmatrix}
$$
**练习2.18 (2019S-5)**

给定 $A = \begin{bmatrix} 1 & -1 & -3 & -2 & -3 \\\\ 1 & 3 & 8 & -3 & 9 \\\\ 3 & 1 & 2 & -7 & 3 \end{bmatrix}$。

(1) 求$r(A)$。

(2) 求$Ax=0$的基础解系。

(3) 若$\eta = (1,-1,0,0,2)^\mathrm{T}$ 是$Ax=b$的解，确定$b$并求$Ax=b$的通解。

**练习2.19 (2019W-2)**

设 $A = \begin{bmatrix} 1 & -3 & 5 \\\\ -2 & 1 & -3 \\\\ -1 & -7 & 9 \end{bmatrix}$, $\beta = \begin{bmatrix} 4 \\\\ -3 \\\\ 6 \end{bmatrix}$, $\gamma = \begin{bmatrix} 3 \\\\ s \\\\ 2.4 \end{bmatrix}$。

(1) 解方程组$Ax = \beta$。

(2) 令 $B = \begin{bmatrix} A & \beta \\\\ \gamma^T & 3 \end{bmatrix}$，解方程组$By = 0$。

**练习2.20 (2020S-1-2)**

设 $A = \begin{bmatrix} 1 & -2 & 1 \\\\ 2 & 1 & 3 \\\\ 1 & -1 & 1 \end{bmatrix}$, $B = \begin{bmatrix} -6 & 8 \\\\ 5 & 2 \\\\ 4 & 2 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 3 \\\\ 2 & 2 \\\\ 3 & 1 \end{bmatrix}$，求解矩阵方程$A(X - B) = C$。

**练习2.21 (2020S-2)**

解方程组：
$$
\begin{cases}
2x_1 + 3x_2 - 5x_3 + 4x_4 = -11 \\\\
x_1 + a x_2 + 2x_3 - 7x_4 = 7 \\\\
3x_1 - x_2 - 2x_3 - 5x_4 = 0
\end{cases}
$$
**练习2.22 (2021S-1-5)**

求 $X$ 满足：
$$
\begin{bmatrix} 2 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 2 \end{bmatrix}
X
\begin{bmatrix} 1 & -1 & 0 & 0 \\\\ 0 & 1 & -1 & 0 \\\\ 0 & 0 & 1 & -1 \\\\ 0 & 0 & 0 & 1 \end{bmatrix} =
\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ -1 & 1 & 0 & 0 \\\\ 0 & -1 & 1 & 0 \end{bmatrix}
$$
**练习2.23 (2021S-5(2))**

设$A = (\alpha_1,\dots,\alpha_n)$, $B = A^{-1} = \begin{bmatrix} \beta_1^T \\\\ \vdots \\\\ \beta_n^T \end{bmatrix}$, $C = \sum_{i=1}^k \alpha_i \beta_i^T$ ($k < n$)。

(2) 求$Cx = 0$的基础解系。

---

## 2.3 矩阵分解型

- 求$A^n$
	- 低秩矩阵将其分解为低维矩阵（向量）之积后利用结合律
	- 幂零矩阵，如$\left[\begin{matrix}0 & 1 &     & \\\\& 0 & \ddots &  \\\\&  & \ddots & 1  \\\\&  &     & 0 \\\\\end{matrix}\right]$

- 矩阵的每一列被写为向量组线性表出形式：$B = A \cdot P$ ⇒ $|B| = |A||P|$

**例题 2.3 (2016W-1-1)**

设 $A = \begin{bmatrix} 3 & 6 & -3 \\\\ -1 & -2 & 1 \\\\ 2 & 4 & -2 \end{bmatrix}$，求 $A^n$。

**解**：$A = \begin{bmatrix} 3 \\\\ -1 \\\\ 2 \end{bmatrix} \begin{bmatrix} 1 & 2 & -1 \end{bmatrix}$ ⇒  $A^n = (-1)^{n-1} A \quad (n \geq 1)$

**例题 2.4 (2016W-1-2)** 

设$A = (\alpha_1,\alpha_2,\alpha_3) \in \mathbb{R}^{3 \times 3}$，$|A| = 3$，$B = (2\alpha_1 - \alpha_2 + 2\alpha_3, \alpha_1 - 3\alpha_2 + \alpha_3, \alpha_1 + 2\alpha_2 - \alpha_3)$， 求 $|B|$。 

**解**：$|B| = |A| \begin{vmatrix} 2 & 1 & 1 \\\\ -1 & -3 & 2 \\\\ 2 & 1 & -1 \end{vmatrix} = 30$

**练习2.24 (2021S-1-2)**

计算 $A^{2021}$，其中 $A = \begin{bmatrix} -1 & 1 & -2 & -1 \\\\ 1 & -1 & 2 & 1 \\\\ 0 & 0 & 0 & 0 \\\\ 2 & -2 & 4 & 2 \end{bmatrix}$。

**练习2.25 (2019W-1-4)**

设 $A = (\alpha_1,\alpha_2,\alpha_3)$，$B = (-3\alpha_2 + \alpha_3, \alpha_1 - \alpha_2 + 2\alpha_3, -2\alpha_1 + \alpha_2 - \alpha_3)$，$|B| = 16$，求 $|A + B|$。