## 7.1 Exercises

18.

要添加11个顶点成为完全3-树。

![](.\media\chapter7-1-18.drawio.svg)



19.

![](.\media\chapter7-1-19.drawio.svg)



20.

树的高度为$n$，第$k$层最多有$2^k$个顶点，故最大顶点数为$\sum_{k=0}^n2^k=2^{n+1}-1$。$\textbf{Q.E.D.}$



21.

第0层有1个顶点，第1层最多有$n$个顶点，第2层最多有$n^2$个顶点，以此类推，第$k$层最多有$n^k$个顶点，即高度为$k$的树最多有$n^k$个叶。$\textbf{Q.E.D.}$​



22.

第0层有1个顶点，因$T$是完全$n-$树，第1层有$n$个顶点，第2层有$kn\ (1 \le k\le n)$个顶点，故共有$1+kn\ (2 \le k \le n+1)$个顶点。$\textbf{Q.E.D.}$



24.

据树的定义，$T$中无环，故$T$是不自反的。$\textbf{Q.E.D.}$



29.

将其排为只有1个子结点的树，最大高度为4。



32.

(a) 是

(b) 是

(c) 不是

(d) 不是



33.

(a) $n \ge 2$

(b) $k \ge 1$（$k$可无限大下去，因$T$未必完全）



34.

高度为4的$n$-树最多有$n^4$个叶，故$n \ge 4$



## 7.2 Exercises

7.

![](.\media\chapter7-2-7.drawio.svg)



13.

![](C:\Users\20926\Desktop\discrete mathematics structure\exercise\chapter7\media\chapter7-2-13.drawio.svg)



18.

![](.\media\chapter7-2-18.drawio.svg)



25.

(a) CAR

(b) SEAR

(c) RACE

(d) SCAR



26.

(a) 11111011100

(b) 110010

(c) 1011110

(d) 1111101100



27.

![](.\media\chapter7-2-27.drawio.svg)



## 7.3 Exercises

10.

$ZWMADQESCNTFKLJGRMT$



15.

$AZMWSDEQTCLKNFTMGJR$



19.

$\begin{align} =& \times\ -\ 7\ 5\ \div\ 12\times\ 3\ 2 \\ =& \times\ 2\div\ 12\ 6 \\ =& \times 2\ 2 \\ =& 4 \end{align}$



20.

$\begin{align} =& \div\ -\ 6\ 12\ +\ 15\ \times\ 2\ 3 \\ =& \div -6\ +\ 15\ 6 \\ =& \div -6\ 21 \\ =& -\dfrac{2}{7} \end{align}$



21.

$\begin{align} =& 4\ \dfrac{3}{2}\ -\ 5 \times\ 4\ 2\ \times\ 5\ \times\ 3\ \div\ \div \\ =& \dfrac{5}{2}\ 5 \times\ 4\ 2\ \times\ 5\ \times\ 3\ \div\ \div \\ =& \dfrac{25}{2}\ 8\ 5\ \times\ 3\ \div\ \div \\ =& \dfrac{25}{2}\ 40\ 3\ \div\ \div \\ =& \dfrac{25}{2}\ \dfrac{40}{3}\ \div \\ =& \dfrac{15}{16} \end{align}$



22.

$\begin{align} =& 21\ 4\ -\ 9\ \times\ 30\ 2\ +\ \div \\ =& 17\ 9\ \times\ 32\ \div \\ =& 153\ 32\ \div \\ =& \dfrac{153}{32} \end{align}$



25.

![](.\media\chapter7-3-25.drawio.svg)



33.

![](.\media\chapter7-3-33.drawio.svg)



37.

![](.\media\chapter7-3-37.drawio.svg)



38. 是



## 7.4 Exercises

16.

![](.\media\chapter7-4-16.drawio.svg)



17.

![](.\media\chapter7-4-17.drawio.svg)



19.

![](.\media\chapter7-4-19.drawio.svg)



21. 5



26. 因为对称连通关系对应一个无向连通图，作出其生成树后将各边方向去除即为无向生成树。$\textbf{Q.E.D.}$



## 7.5 Exercises

6.

$M-N,M-L,L-K,K-J,J-H,K-I,I-F,F-E,E-D,I-G,F-B,G-A,B-C$



11.

$A-C,B-D,C-E,A-B,E-F,H-G,E-H$



14.

在Step 1中将给定边放入生成树边集合中，从Step 2开始正常执行Kruskal算法选择与检查。



18.

- Step 1: 在$S$中选择具有最大权重的边$e_i$放入选择集合中，待选边集合中删去$e_i$
- Step 2: 在待选边集合中选择不与现有选择集合形成环的具有最大权重的边放入$e_j$放入选择集合中，待选边集合中删去$e_j$
- Step 3: 重复Step 2直至选择集合中有$n-1$条边



23.

此处只需充分条件，故只需各边权重均不相同即可。

