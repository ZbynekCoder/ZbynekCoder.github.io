## 8.1 Exercises

16.

![](.\media\chapter8-1-16.drawio.svg)



17.

![](.\media\chapter8-1-17.drawio.svg)



18.

![](.\media\chapter8-1-18.drawio.svg)



27.

图$G_1=(V_1,E_1,\gamma_1),G_2=(V_2,E_2,\gamma_2)$是同构的，如果存在$V_1,V_2$间的双射$f$，$(v_i,v_j)\in E_1$当且仅当$(f(v_i),f(v_j))\in E_2$



28.

(a)中度为1的顶点有2个，(b)中度为1的顶点有1个，故不同构。



29.

(a)中度为4的顶点有0个，(c)中度为4的顶点有1个，故不同构。



30.

同构，取对应对称映射即可。



31.

在有向图中两个点间没有多条边相连。

在无向图中边没有方向。



32.

因为1条边等价于该边两顶点的各1度，故边数等于各顶点度数之和的一半。$\textbf{Q.E.D.}$



## 8.2 Exercises

4.

奇度顶点为4和7，故其无Euler回路但有Euler路径。



6.

奇度顶点有2个，故其无Euler回路但有Euler路径。



9.

所有顶点都为偶度顶点，故存在Euler回路，可以一笔画。



12.

![](.\media\chapter8-2-12.drawio.svg)



13.

![](.\media\chapter8-2-13.drawio.png)



14.

![](.\media\figure 8.49.png)



18.

补充8条，见20题



19.

![](.\media\chapter8-2-19.drawio.svg)



20.

![](.\media\chapter8-2-20.drawio.svg)



21.

$n$为奇数。



22.

因二者同构，$G$中各边与$H$中各边一一对应，故$G$中Euler回路在同构作用下的像为$H$中Euler回路。$\textbf{Q.E.D.}$



23.

必要性：设$(a,b)$在图内，这表明$a\le b$且不存在$c$满足$a \le c \le b$或$b\le a$且不存在$c$满足$b \le c \le a$，这表明$a,b$间只有一个位置不同。

充分性：设$a=a_1a_2\dots a_n,b=b_1b_2\dots b_n$仅有一个位置不一样，不妨设$a_i=0,b_i=1,a_j=b_j(j\neq i)$，那么$a \le b$且不存在$c=c_1c_2\dots c_n$满足$a \le c \le b$，故$a,b$间存在一条边。$\textbf{Q.E.D.}$



24.

(a) 均为偶度顶点，存在Euler回路

(b) 均为奇度顶点，不存在Euler回路

(c) 均为偶度顶点，存在Euler回路

(d) 均为奇度顶点，不存在Euler回路



25.

根据23题结论，$B_n$的Hasse图存在Euler回路当且仅当$n$为偶数时。



## 8.3 Exercises

3.

存在Hamilton路径，但不存在Hamilton回路。



6.

存在Hamilton路径，但不存在Hamilton回路。



10.

$A-B-C-D-E-F-J-G-H-I$



14.

$G-H-I-A-B-C-E-D-F-J$



19.

因为图是完全的，在Hamilton回路中各顶点的选法分别有$n,n-1,\dots,2,1$种选法，从而共有$(n-1)!$条Hamilton回路。$\textbf{Q.E.D.}$



20.

![](.\media\chapter8-3-20.drawio.svg)



21.

![](.\media\chapter8-3-21.drawio.svg)



22.

对于$a,b \in E$，$a\ R^\infty\ b$当且仅当在$R$的图中存在一条从$a$到$b$的路径，故如果$M_{R^\infty}$中没有全0列或全0行当且仅当$G$是连通的。



23.

$000-100-110-111-101-001-011-010-000$



24.

![](.\media\chapter8-3-24.drawio.svg)

$0001-0000-1000-1100-1110-1111-0111-0011-1011-0101-0100-0110-0010-1010-1101-1001$



25.

Hamilton回路等价于除首尾两项相同，其他均互不相同的长度为$2^n+1$的0-1序列，且相邻两项只有1位不同。



## 8.4 Exercises

5.

![](.\media\chapter8-4-5.drawio.svg)

$value(F)=6$



6.

![](.\media\chapter8-4-6.drawio.svg)

$value(F)=6$



7.

![](.\media\chapter8-4-7.drawio.svg)

$value(F)=13$



8.

![](.\media\chapter8-4-8.drawio.svg)

$value(F)=5$



9.

![](.\media\chapter8-4-9.drawio.svg)

$value(F)=16$



10.

![](.\media\chapter8-4-10.drawio.svg)

$value(F)=12$



11.

![](.\media\chapter8-4-11.drawio.svg)

$value(F)=7$



14.

![](.\media\chapter8-4-14.drawio.svg)

$K_1=\{(1,2),(1,3)\},c(K_1)=11$

$K_2=\{(4,6),(4,7),(5,7)\},c(K_2)=13$

$K_3=\{(6,8),(7,8)\},c(K_3)=8$



19.

$K=\{(1,2),(2,5),(3,5),(7,8)\}$



20.

$K=\{(4,7),(5,7),(6,7)\}$



21.

$K=\{(2,4),(2,5),(3,5)\}$



## 8.5 Exercises

4.

![](.\media\chapter8-5-4.drawio.svg)



5.

![](.\media\chapter8-5-5.drawio.svg)



8.

$\mathbf{M}_M=
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 \\
\end{bmatrix}$



10.

$\mathbf{M}_M=
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{bmatrix}$



14.

当$k=1$时，这时每行每列都各只有一个1，此时$R$即为双射，$R$即为完备匹配。

当$k\ge 1$时，取$R$的子关系$R_1$使得$\mathbf{M}_{R_1}$的每行每列都各只有一个1，化为$k=1$的情形。$\textbf{Q.E.D.}$



15.

任取$S\sube A$，记$E$为从$S$发出的边集合，那么$k|S|\le|E|$，显然$E$中边的另一端点在$R(S)$中，又$j\le k$，有$j|S| \le k|S| \le j|R(S)|$，这表明$|S| \le |R(S)|$，据Hall婚姻定理即得。$\textbf{Q.E.D.}$



16.

据所有顶点的度至少为$\dfrac{n}{2}$及8.3节Corollary 1得网络图中存在Hamilton回路，从而$A,B$的每个顶点都将被遍历且只经过一次，该回路对应的$R$的子关系即为完备匹配。$\textbf{Q.E.D.}$



17.

(a) 是，$\{\{1,3,5\},\{2,4,6\}\}$

(b) 是，$\{\{1,3,5,7\},\{2,4,6,8\}\}$



18.

断言：将$B_n$的Hasse图中顶点按含有奇数和偶数个1作出的划分即为所求划分。

事实上，若$a,b\in B_n$含有相同数量的1，那么它们要么相等，要么不可比较，这表明各划分顶点间无边。

另一方面，$a,b\in B_n$在Hasse图上两顶点间有边当且仅当$a,b$仅有一个位置不同，那么二者必分居两分划内，这表明所有边的两端都不在同一分划内。

综上，上述分划使得$B_n$的Hasse图是二分图。$\textbf{Q.E.D.}$



19.

设该三角形的三个顶点为$(a_1,b_1),(a_2,b_2),(a_3,b_3)$，若图是二分图，那么$(a_1,b_1),(a_2,b_2)$分别在两个分划中，从而$(a_3,b_3)$不属于两分划中的任意一个，矛盾。$\textbf{Q.E.D.}$



## 8.6 Exercises

15.

$P_G(x)=x(x-1)(x-2)(x-3),\chi(G)=4$



16.

$P_G(x)=x(x-1)^3(x-2)^2,\chi(G)=3$



19.

$P_G(x)=x(x-1)^2(x-2)(x^2-3x+3),\chi(G)=3$



23.

当$n=1$时，$P_{L_1}(x)=x$，命题成立。

假设当$n=k$时命题成立，那么当$n=k+1$时，
$$
\begin{align}
	P_{L_{k+1}}(x) &= P_{L_k}(x)(x-1) \\
	&= x(x-1)^{k-1}(x-1) \\
	&= x(x-1)^k
\end{align}
$$
故命题对一切正整数$n$皆成立。$\textbf{Q.E.D.}$



26.

(a) 两个顶点间有边当且仅当所代表的两门课程存在时间段冲突

(b) 考试时间段

(c) 为使各课程时间段均不冲突所需的最少时间段数



27.

将鱼的种类抽象为图的顶点，种间存在捕食关系为图的边，放入的不同水缸为着色集合，原问题等价为图着色问题。

