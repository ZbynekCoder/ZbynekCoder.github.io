## 5.1 Exercises

5.

每个整数都有平方且平方仍为整数，故给出一个映射。$\mathbf{Q.E.D.}$​



6.

指数函数$f(x)=e^x$在$\mathbb{R}$上皆有定义，故给出一个映射。$\mathbf{Q.E.D.}$



7.

$r\in\mathbb{R}$满足要么$r\in\mathbb{Q}$要么$r\notin\mathbb{Q}$，故给出一个映射。$\mathbf{Q.E.D.}$



8.

Gauss取整函数在$\mathbb{R}$上皆有定义，故给出一个映射。$\mathbf{Q.E.D.}$



11.

(a) 是单射，是满射

(b) 不是单射，不是满射



12.

(a) 是单射，不是满射

(b) 不是单射，是满射



13.

(a) 是单射，是满射

(b) 不是单射，是满射



14.

(a) 不是单射，是满射

(b) 不是单射，不是满射



15.

(a) 是单射，是满射

(b) 不是单射，是满射



29.

$n^m$



30.

$g$是单射，$f$是单射



31.

$C$，$B$，$A$



33.

$C = \mathrm{Ran}(g\circ f) \sube \mathrm{Ran}(g) \sube C$，故$\mathrm{Ran}(g) = C$，$g$为满射。$\mathbf{Q.E.D.}$



34.

设$f^{n_1}(a_1)=f^{n_2}(a_2)\in O(a_1,f)\cap O(a_2,f)$，那么$a_1=f^{-n_1+n_2}(a_2)$，这意味着$O(a_1,f)=O(a_2,f)$。$\mathbf{Q.E.D.}$



40.

(a) $f(1+2)=f(3)=3^2=9\neq 5=1^2+2^2=f(1)+f(2)$

(b) 据$s$的长度定义即得。$\mathbf{Q.E.D.}$



41.

(a) $f(1 \diamond 1) = 0\ \mathrm{mod}\ 2 = 0 =true,f(1) \vee f(1) =false \vee false = false$

(b) $f(1 \diamond 1) = 0\ \mathrm{mod}\ 2 = 0 =true,f(1) \wedge f(1) =false \wedge false = false$



## 5.2 Exercises

7.

作带余除法$n=ak+r,0\le r<n$，进而$\dfrac{n}{k}=a+\dfrac{r}{n},0\le\dfrac{r}{n}<1$，故$\left\lfloor\dfrac{n}{k}\right\rfloor=a\quad\mathbf{Q.E.D.}$



8.

设$n=2k+1$，$\left\lceil\dfrac{n^2}{4}\right\rceil=\left\lceil\dfrac{(2k+1)^2}{4}\right\rceil=\left\lceil\dfrac{4k^2+4k+1}{4}\right\rceil=k^2+k+1=\dfrac{(2k+1)^2+3}{4}=\dfrac{n^2+3}{4}\quad\mathbf{Q.E.D.}$



18.

(a) 

(b) $l(abcd)=l(dcba)=4$，故不是单射

(c) 因字符串长度均为非负，故不是满射



20.

据6.1 Exercises 29题结论，有$2^2=4$个布尔函数

据6.1 Exercises 29题结论，有$2^4=16$个布尔函数



28.

对于$A$的子集$X$，$n$个元素在$f_X$上的取值均有0,1两种，故$\{f_X\}$有$2^n$个不同元素，即$pow(A)$中有$2^n$个元素。$\mathbf{Q.E.D.}$



29.

$A$中全体元素



## 5.3 Exercises

11.

$\{f_1\},\{f_2\},\{f_3\},\{f_4\},\{f_5\},\{f_6,f_{10},f_{11}\},\{f_7\},\{f_8\},\{f_9\},\{f_{12}\}$



12.

$\{f_5\},\{f_6,f_{10},f_{11}\},\{f_7\},\{f_4\},\{f_8\},\{f_1\},\{f_2\},\{f_3\},\{f_9\},\{f_{12}\}$



13.

$\Theta(f_1)=\Theta(n \lg n),\Theta(f_2)=\Theta(n^2),\Theta(f_4)=\Theta(\lg n),\Theta(f_5)=\Theta(1),\Theta(f_6)=\Theta(n),\Theta(f_{10})=\Theta(n),\Theta(f_{11})=\Theta(n)$



20.

$f(n)=\sum_{i=0}^ni=\dfrac{(n+1)n}{2},\Theta(f)=\Theta(n^2)$​



21.

$f(n,m,q)=1+nq+3nmq+1,\Theta(f)=\Theta(N^3),N=\max\{n,m,q\}$



22.

$\Theta(2^n),\Theta(n)$



23.

(a)  $P_n=P_{n-1}+(n-2)+(n-3),P_3=1,P_4=4$

(b) $\Theta(n^2)$



24.

必要性：存在$c\ge 0$，当$n$充分大时$n^a\le cn^b,n^{a-b}\le c$，这表明$a-b<0,0<a<b$

存在性：$\lim_{n\rightarrow\infty}n^{a-b}=0$，当$n$充分大时$n^{a-b}\le c,n^a\le cn^b$，这表明$\Theta(n^a)$低于$\Theta(n^b)\quad\mathbf{Q.E.D.}$



25.

必要性：存在$c\ge 0$，当$n$充分大时$a^n\le cb^n,\left(\dfrac{a}{b}\right)^n\le c$，这表明$\dfrac{a}{b}<1,0<a<b$

存在性：$\lim_{n\rightarrow\infty}\left(\dfrac{a}{b}\right)^n=0$，当$n$充分大时$\left(\dfrac{a}{b}\right)^n\le c,a^n\le cb^n$，这表明$\Theta(a^n)$低于$\Theta(b^n)\quad\mathbf{Q.E.D.}$



26.

因为当$n$充分大时$|rf(n)|\le|r||f(n)|,|f(n)|\le|r^{-1}||rf(n)|$，这表明$\Theta(rf)=\Theta(f)$。$\mathbf{Q.E.D.}$



27.

据对称性，只需证明$\Theta(f)$低于$\Theta(g)$的情形，此时存在$c\ge 0$，当$n$充分大时$|f(n)|\le c|g(n)|$，进而$|(fh)(n)|=|f(n)||h(n)|\le c|g(n)||h(n)|=c|(gh)(n)|$，这表明$\Theta(fh)$低于$\Theta(gh)$。$\mathbf{Q.E.D.}$



28.

据$f,g$是$\Theta(h)$的，进而是$O(h)$的，从而存在$c_1,c_2\ge0$，当$n$充分大时有$\left|f(n)\right|\le c_1\left|h(n)\right|,\left|g(n)\right|\le c_2\left|h(n)\right|$。取$c=2\max\{c_1,c_2\}$，那么当$n$充分大时有$\left|f(n)+g(n)\right|\le\left|f(n)\right|+\left|g(n)\right|\le c\left|h(n)\right|$，故$f+g$是$O(h)$的。$\mathbf{Q.E.D.}$



29.

据$\Theta(f)=\Theta(g)$，$f$是$O(g)$的，$g$是$O(f)$的，从而存在$c_1,c_2\ge0$，当$n$充分大时有$\left|f(n)\right|\le c_1\left|g(n)\right|,\left|g(n)\right|\le c_2\left|f(n)\right|$，故$\left|cf(n)\right|\le c_1c\left|g(n)\right|,\left|g(n)\right|\le c_2|c^{-1}|\left|cf(n)\right|$，故$\Theta(cf)=\Theta(g)$。$\mathbf{Q.E.D.}$



## 5.4 Exercises

12.

(a) $(1,4,5)\circ(2,3)\circ(6,8)$

(b) $(1,2,3,4)\circ(5,6,7,8)$



13.

(a) $(1,6,3,7,2,5,4,8)$

(b) $(1,2,3)\circ(5,6,7,8)$



14.

(a) $(a,g,e,c,b,d)$

(b) $(a,d,b,e,g,c)$



15.

(a) $(2,6)\circ(2,8)\circ(2,5)\circ(2,4)\circ(2,1)$

(b) $(3,6)\circ(3,1)\circ(4,5)\circ(4,2)\circ(4,8)$



16.

EWAREROEHOU



20.

(a) $\begin{pmatrix}
	1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
	4 & 2 & 1 & 6 & 5 & 8 & 7 & 3 \\
\end{pmatrix}=(1,4,6,8,3)=(1,3)\circ(1,8)\circ(1,6)\circ(1,4)$，故置换是偶置换。

(b) $\begin{pmatrix}
	1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
	7 & 3 & 4 & 2 & 1 & 8 & 6 & 5 \\
\end{pmatrix}=(1,7,6,8,5)\circ(2,3,4)=(1,5)\circ(1,8)\circ(1,6)\circ(1,7)\circ(2,4)\circ(2,3)$，故置换是偶置换。



26.

因$p$是双射，$p^2=p\circ p$亦为双射，故$p^2$是$A$上的置换。$\mathbf{Q.E.D.}$



28.

(a) $p=(2,3,5)\circ(1,4)$

(b) $p^{-1}=(4,1)\circ(3,2,5)$

(c) $p=
\begin{pmatrix}
1 & 2 & 3 & 4 & 5 & 6 \\
1 & 5 & 2 & 4 & 3 & 6 \\
\end{pmatrix}$

(d) 6



29.

(a) 当$n=1$时，因$p^1=p$，命题成立。

假设$n=k$时命题成立，那么当$n=k+1$时，据26题结论，命题成立。据数学归纳法，命题对全体正整数都成立。$\mathbf{Q.E.D.}$

(b) 因$A$为有限集，$A$上排列是有限的，故存在$m$使得$p^m=1_A\quad$$\mathbf{Q.E.D.}$



30.

自反性：$a=a,\forall a \in A$

对称性：若$a\ R\ b$，那么存在$n\in\mathbb{Z},p^n(a)=b$，这表明$p^{-n}(b)=a,b\ R\ a$

传递性：若$a\ R\ b,b\ R\ c$，那么存在$m,n\in\mathbb{Z},p^m(a)=b,p^n(b)=c$，故$p^{m+n}(a)=c$

故$R$是等价关系，其等价类为置换群${p^n}$的各个轨道。$\mathbf{Q.E.D.}$​



37.

(a) $\begin{pmatrix}
	1 & 2 & 3 \\
	1 & 3 & 2 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 \\
	1 & 2 & 3 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 \\
	2 & 1 & 3 \\
\end{pmatrix}$，共3个

(b) $\begin{pmatrix}
	1 & 2 & 3 & 4 \\
	1 & 4 & 2 & 3 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 \\
	1 & 4 & 3 & 2 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 \\
	1 & 3 & 4 & 2 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 \\
	2 & 4 & 3 & 1 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 \\
	2 & 3 & 4 & 1 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 \\
	3 & 2 & 4 & 1 \\
\end{pmatrix}$，共6个



38.

$\begin{pmatrix}
	1 & 2 & 3 & 4 & 5 \\
	1 & 5 & 2 & 4 & 3 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 & 5 \\
	1 & 5 & 2 & 3 & 4 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 & 5 \\
	1 & 4 & 2 & 3 & 5 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 & 5 \\
	1 & 5 & 3 & 2 & 4 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 & 5 \\
	1 & 4 & 3 & 2 & 5 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 & 5 \\
	1 & 3 & 4 & 2 & 5 \\
\end{pmatrix},$

$\begin{pmatrix}
	1 & 2 & 3 & 4 & 5 \\
	2 & 5 & 3 & 1 & 4 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 & 5 \\
	2 & 4 & 3 & 1 & 5 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 & 5 \\
	2 & 3 & 4 & 1 & 5 \\
\end{pmatrix},
\begin{pmatrix}
	1 & 2 & 3 & 4 & 5 \\
	3 & 2 & 4 & 1 & 5 \\
\end{pmatrix}$，共10个



39.

一个置换是up-down置换当且仅当在$A$中选择$\left\lceil\dfrac{n}{2}\right\rceil$个元素排为上升序列放入对应位置的奇数位。事实上，当$\left\lceil\dfrac{n}{2}\right\rceil$个元素被选出后，剩下的元素必然可排为一个下降列放入剩下的偶数位中，故$A$上的up-down置换数量等于$\left\lceil\dfrac{n}{2}\right\rceil$个元素上升序列数量。$\mathbf{Q.E.D.}$

