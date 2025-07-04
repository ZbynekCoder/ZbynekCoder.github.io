# 第三章 矩阵的秩、向量线性相关性与线性方程组解的结构

> **需要熟悉的知识点**
>
> - 线性相关/无关、线性表出、向量组等价、向量组的秩
> -  矩阵行秩、列秩的定义，秩的子式定义
> - Sylvester秩不等式
> - 矩阵加法、乘法、堆叠对秩的影响
> - 线性方程组解的结构
> - 线性方程组无解、有解、唯一解、无穷解的条件
> - 维数定理

---

## 3.1 秩的相关性质

1. **Sylvester 秩不等式**：

   $$ r(A) + r(B) - n \leq r(AB) \leq \min(r(A), r(B)) $$

   - 当 $AB = O$ 时：$r(A) + r(B) \leq n$
   - 若 $A$ 可逆：$r(AB) = r(B)$

2. **秩的基本性质**：

   $$ r(A + B) \leq r(A) + r(B) $$

   $$ r \left( \begin{array}{c} A \\\\ B \end{array} \right) \leq r(A) + r(B) $$

   $$ r \left( \begin{array}{cc} A & O \\\\ O & B \end{array} \right) = r(A) + r(B) $$

**例题 3.1 (2015W-6)**  

设 $A$ 为幂等矩阵（$A^2 = A$）。证明：  

(1) $E - A$ 幂等。

(2) $r(A) + r(E - A) = n$。

**证明**：

(1) $(E - A)^2 = E - A$

(2) 由$A(E - A) = O$和Sylvester不等式得证。

**练习3.1 (2017S-1-2)**  

设 $A^2 = -A$，证明 $r(A) + r(E + A) = n$。

**练习3.2 (2018W-1-4)**  

设 $A = MN^T$，$M,N \in \mathbb{R}^{n \times r}$，$|N^T M| \neq 0$，证明 $r(A^2) = r(A)$。

**练习3.3 (2019S-1-4改)**  

设向量组 $A: \{\alpha_1,\dots,\alpha_{100}\}$ 秩为7，$B: \{\beta_1,\dots,\beta_{20}\}$，求 $r(A \cup B)$ 的取值范围。

**练习3.4 (2019W-3)**  

设$(A^*)^* = O$，证明$|A| = 0$。

**练习3.5 (2020S-6)**  

设 $r(A) = n-1$，证明 $A^n = \alpha \beta^T$ 且 $A\alpha = A^T\beta = 0$。

---

## 3.2 线性方程组解的结构

- **解的存在性**：$Ax = b$有解 ⇔ $r(A) = r(A|b)$
- **解的结构**：
  - 齐次方程组$Ax = 0$：基础解系向量数量 $= n - r(A)$
  - 非齐次方程组$Ax = b$：通解 = 特解 + 齐次通解

**练习3.6 (2019S-5)**

设 $A = \begin{bmatrix} 1 & -1 & -3 & -2 & -3 \\\\ 1 & 3 & 8 & -3 & 9 \\\\ 3 & 1 & 2 & -7 & 3 \end{bmatrix}$。

(1) 求 $r(A)$。

(2) 求$Ax = 0$的基础解系。

(3) 若$\eta = (1,-1,0,0,2)^\mathrm{T}$是$Ax = b$的解，确定$b$并计算$Ax=b$的通解。

---

## 3.3 秩与线性方程组解结构的相互转化

1. **维数定理**：$Ax = 0$ 的基础解系向量数量 $= n - r(A)$
2. **同解定理**：若 $A_1x = b_1$ 与 $A_2x = b_2$ 同解，则行向量组等价

**例题 3.2 (2016W-3)**

设 $A_1x = b_1$ 和 $A_2x = b_2$ 同解，证明 $A_1$ 和 $A_2$ 的行向量组等价。

**证明**：$A_1 x = b_1,A_2 x = b_2,\left[\begin{matrix}A_1 \\\\A_2 \\\\\end{matrix}\right]x=\left[\begin{matrix}b_1 \\\\b_2 \\\\\end{matrix}\right]$均同解，这表明$r(A_1) = r(A_2) = r\left(\left[\begin{matrix}A_1 \\\\A_2 \\\\\end{matrix}\right]\right)$，得证。

**例题 3.3 (2019S-7改)**

设 $A$ 为 $m \times n$ 实矩阵，$b$ 为 $m$ 维实向量。证明：

(1) $A^TAx = 0$ 与 $Ax = 0$ 同解。

(2) $r(A) = r(A^TA) = r(AA^T)$。

(3) $A^TAx = A^Tb$ 恒有解。

(4) 若 $Ax = b$ 有解，则 $A^TAx = A^Tb$ 与 $Ax = b$ 同解。

**证明**：

(1) 显然当$x$是$Ax=0$的解时，$x$是$A^\mathrm{T} A x = 0$的解。反之，设$x$是$A^\mathrm{T} A x = 0$的解，那么$(A x)^\mathrm{T} A x = 0$，这表明$A x = 0$，得证。

(2) 由(1)，$r(A) = r(A^\mathrm{T} A)$。又$r(A) = r(A^\mathrm{T})$，$r(A^\mathrm{T} A) = r(A) = r(A^\mathrm{T}) = r((A^\mathrm{T})^\mathrm{T} A^\mathrm{T}) = r(A A^\mathrm{T})$

(3) $r(A^\mathrm{T} A | A^\mathrm{T} b) = r(A^\mathrm{T}) = r(A^\mathrm{T} A)$

(4) 显然当$x$是$Ax=b$的解时，$x$是$A^\mathrm{T} A x = A^\mathrm{T} b$的解。反之，设$x$是$A^\mathrm{T} A x = A^\mathrm{T} b$的解，$x_0$是$Ax=b$的解，由上，$x_0$是$A^\mathrm{T} A x = A^\mathrm{T} b$的解。下验证$Ax = b$成立，只需证明$Ax - b = 0$即可。

$A^\mathrm{T} (Ax - b) = A^\mathrm{T} A(x - x_0) = 0$，那么$(A(x - x_0))^\mathrm{T} A(x - x_0) = 0$，这表明$A(x - x_0) = 0,Ax = Ax_0 = b$，从而$x$是$Ax=b$的解，得证。

> 上题结论请掌握，并熟悉证明过程。

**练习3.7 (2015W-1-5)**

已知5元方程组 $Ax = b$ ($b \neq 0$) 有解 $\xi_1 = (1,1,1,1,1)^T$, $\xi_2 = (1,2,3,4,5)^T$, $\xi_3 = (1,0,-3,-2,-3)^T$ 且 $r(A) = 3$，求通解。

**练习3.8 (2016W-1-4)**

设 $A \in \mathbb{R}^{m \times n}$ ($m > n$), $r(A) = n$，证明存在 $P \in \mathbb{R}^{n \times m}$ 使 $PA = E_n$。

**练习3.9 (2016W-3改)**

若 $A_1x = b_1$ 和 $A_2x = b_2$ 同解，证明 $[A_1|b_1]$ 和 $[A_2|b_2]$ 行向量组等价。

**练习3.10 (2017S-1-5)**

设$n$阶方阵$A$的秩为$r < n$，证明存在秩为 $n-r$ 的 $B$ 使 $AB = O$。

**练习3.11 (2017S-3)**

证明方程组
$$
\begin{cases}
x_1 - x_2 = a_1 \\\\
\vdots \\\\
x_{n-1} - x_n = a_{n-1} \\\\
x_n - x_1 = a_n
\end{cases}
$$
有解当且仅当 $\sum_{i=1}^n a_i = 0$，并在有解的情况下，求方程组的解集。

**练习3.12 (2019S-1-5)**

已知 $Ax = b$ 有特解 $\alpha_1 = (1,-2,3)^T$, $\alpha_2 = (0,-1,-2)^T$, $\alpha_3 = (-4,2,1)^T$ 且 $r(A) = 1$，求通解。

**练习3.13 (2019W-1-5)**

证明 $r(AA^T + BB^T) = r(A, B)$。

**练习3.14 (2021S-1-6)**

设$A$为3阶方阵， $r(A) = 1$，$Ax = b$ 有解 $\alpha_1,\alpha_2,\alpha_3$，$\alpha_1 + \alpha_2 = (1,-1,3)^\mathrm{T}$, $\alpha_2 + \alpha_3 = (0,-2,1)^\mathrm{T}$, $\alpha_3 + \alpha_1 = (3,0,4)^\mathrm{T}$，求通解。

**练习3.15 (2021S-6)**

设$A$为$m \times n$阶矩阵，$B$为$n \times k$阶矩阵，$AB = O$, $r(A) + r(B) = n$, $B$ 与 $C$ 列等价，证明 $C$ 的极大线性无关组可以成为 $Ax = 0$ 的一个基础解系。

---

## 3.4 向量线性相关性与线性方程组解的相互转化

- 向量组线性相关 ⇔ 齐次方程组有非零解
- 向量 $\beta$ 可由 $\alpha_1,\dots,\alpha_s$ 线性表出 ⇔ 非齐次方程组有解

**练习3.16 (2016W-2)** 

设向量组$\alpha_1 = \begin{bmatrix} 3 \\\\ 1 \\\\ 2 \\\\ -1 \end{bmatrix}$, $\alpha_2 = \begin{bmatrix} 1 \\\\ -1 \\\\ 4 \\\\ 2 \end{bmatrix}$, $\alpha_3 = \begin{bmatrix} 7 \\\\ 5 \\\\ -2 \\\\ -7 \end{bmatrix}$,  $\alpha_4 = \begin{bmatrix} 5 \\\\ -1 \\\\ 10 \\\\ 3 \end{bmatrix}$, $\alpha_5 = \begin{bmatrix} -1 \\\\ 2 \\\\ 1 \\\\ 0 \end{bmatrix}$ 

(1) 求$\alpha_1,\alpha_2,\alpha_3,\alpha_4,\alpha_5$的一个极大线性无关组，并用该极大线性无关组表出其他向量。

(2) 若有向量$\beta = (1,0,-1,-1)^T$，判断向量组$\alpha_3,\alpha_4,\beta$与$\alpha_1,\alpha_3,\alpha_4,\alpha_5$是否等价。

**练习3.17 (2018W-2)**
设向量组$\alpha_1 = \begin{bmatrix} 2 \\\\ -2 \\\\ -1 \\\\ 4 \end{bmatrix}$, $\alpha_2 = \begin{bmatrix} 1 \\\\ -2 \\\\ 0 \\\\ 1 \end{bmatrix}$, $\alpha_3 = \begin{bmatrix} 1 \\\\ -4 \\\\ 1 \\\\ -1 \end{bmatrix}$,  $\alpha_4 = \begin{bmatrix} 1 \\\\ 0 \\\\ 2 \\\\ 3 \end{bmatrix}$, $\alpha_5 = \begin{bmatrix} 2 \\\\ 1 \\\\ 2 \\\\ 7 \end{bmatrix}$ 

(1) 求一个极大线性无关组，并用其表示其余向量。

(2) 在 $e_1,\dots,e_4$ 中找出所有不能被线性表出的向量。

**练习3.18 (2019W-4)**

设向量组 $A$: $\alpha_1 = \begin{bmatrix} 2 \\\\ 4 \\\\ 3 \\\\ 1 \end{bmatrix}$, $\alpha_2 = \begin{bmatrix} 4 \\\\ 3 \\\\ 6 \\\\ 2 \end{bmatrix}$, $\alpha_3 = \begin{bmatrix} 1 \\\\ 3 \\\\ 1 \\\\ 2 \end{bmatrix}$  和 $B$: $\beta_1 = \begin{bmatrix} 2 \\\\ 4 \\\\ 3 \\\\ 1 \end{bmatrix}$, $\beta_2 = \begin{bmatrix} 4 \\\\ 3 \\\\ 1 \\\\ 2 \end{bmatrix}$, $\beta_3 = \begin{bmatrix} 1 \\\\ 3 \\\\ 1 \\\\ 2 \end{bmatrix}$

(1) 分别求$A,B$的极大无关组。

(2) 求$\gamma$使向量组$\alpha_1,\alpha_2,\alpha_3,\gamma$与$\beta_1,\beta_2,\beta_3,\gamma$等价。

**练习3.19 (2020S-4)**

设向量组$\alpha_1 = \begin{bmatrix} 1 \\\\ 8 \\\\ -1 \\\\ 4 \end{bmatrix}$, $\alpha_2 = \begin{bmatrix} 3 \\\\ 0 \\\\ -5 \\\\ 4 \end{bmatrix}$, $\alpha_3 = \begin{bmatrix} 0 \\\\ 12 \\\\ 1 \\\\ 4 \end{bmatrix}$,  $\alpha_4 = \begin{bmatrix} 2 \\\\ 6 \\\\ -2 \\\\ 4 \end{bmatrix}$, $\alpha_5 = \begin{bmatrix} -2 \\\\ -4 \\\\ 3 \\\\ -4 \end{bmatrix}$

(1) 求一个极大线性无关组，并用其表示其余向量。

(2) 在$\alpha_1,\alpha_2,\alpha_3,\alpha_4,\alpha_5$中去除一个向量，使得去除后向量组的秩减小。