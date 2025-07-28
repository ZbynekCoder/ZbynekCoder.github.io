## 9.1 Exercises

5.

因$1*2=1-2=-1\notin \mathbb{Z}^+$，故$*$不是$\mathbb{Z}^+$上的二元运算。



6.

因$1*(-1)=\sqrt{-1}\notin \mathbb{R}$，故$*$不是$\mathbb{R}$上的二元运算。



7.

因$a*b\in \mathbb{Q} \sube \mathbb{R}$，故$*$是$\mathbb{R}$上的二元运算。



8.

因$a*b=2a+b \in \mathbb{Z}$，故$*$是$\mathbb{Z}$上的二元运算。



15.

交换，结合



16.

不交换

$(a*b)*c=(ab+2b)*c=(ab+2b)c+2c=abc+2bc+2c,a*(b*c)=a*(bc+2c)=a(bc+2c)+2c=abc+2ac+2c$，故不结合



17.

交换，结合



18.

交换，结合



19.

交换，不结合



20.

$\mathrm{GCD}(a,a)\ |\ a$，而$a | a$，故$a\ |\ \mathrm{GCD}(a,a)$，这表明$a=\mathrm{GCD}(a,a)$。$\quad \mathbf{Q.E.D.}$



22.

| $*$  | $a$  | $b$  | $c$  |
| :--: | :--: | :--: | :--: |
| $a$  | $b$  | $c$  | $a$  |
| $b$  | $c$  | $b$  | $a$  |
| $c$  | $a$  | $a$  | $c$  |



25.

(a) $c*d=a,d*c=a$

(b) $b*d=c.d*b=b$

(c) $a*(b*c)=a*b=c,(a*b)*c=c*c=a$

(d) 据(b)不交换，据(c)不结合



27.

| $*$  | $a$  | $b$  | $c$  | $d$  |
| :--: | :--: | :--: | :--: | :--: |
| $a$  | $b$  | $a$  | $c$  | $d$  |
| $b$  | $b$  | $a$  | $c$  | $d$  |
| $c$  | $c$  | $d$  | $c$  | $d$  |
| $d$  | $d$  | $c$  | $c$  | $d$  |



28.

$n^{n^2}$



29.

$n^{(\frac{n^2-n}{2}+n)}=n^\frac{n(n+1)}{2}$



32.

自反性：因$*$幂等，$a*a=a$，故$a \le a$

反对称性：若$a \le b,b \le a$，那么$b = a*b, a = b*a$，因$*$对称，$a=b$

传递性：若$a \le b,b \le c$，那么$b=a*b,c=b*c$，因$*$结合，$a*c=a*(b*c)=(a*b)*c=b*c=c$，故$a \le c$

故$(A,\le)$成一偏序集，其与由$\vee$诱导的$(A,\le')$同构，故$\mathrm{LUB}(a,b)=a*b$。$\quad \mathbf{Q.E.D.}$



## 9.2 Exercises

6.

交换幺半群，幺元为1



8.

交换幺半群，幺元为1



10.

交换幺半群，幺元为$I$



14.

交换幺半群，幺元为2



18.

$(b*a)*c=c,b*(a*c)=b$，故不结合，从而不是半群，进而不是幺半群



21.

记$f_1\equiv a,f_2=I,f_3,f_4\equiv b$为$S$上所有映射，

| $\circ$ | $f_1$ | $f_2$ | $f_3$ | $f_4$ |
| :-----: | :---: | :---: | :---: | :---: |
|  $f_1$  | $f_1$ | $f_1$ | $f_4$ | $f_4$ |
|  $f_2$  | $f_1$ | $f_2$ | $f_3$ | $f_4$ |
|  $f_3$  | $f_1$ | $f_3$ | $f_2$ | $f_1$ |
|  $f_4$  | $f_1$ | $f_4$ | $f_4$ | $f_4$ |

显然$\circ$不交换。



22.

$P(S)=\{\empty,\{a\},\{b\},\{a,b\}\}$

|  $\cup$   | $\empty$  |  $\{a\}$  |  $\{b\}$  | $\{a,b\}$ |
| :-------: | :-------: | :-------: | :-------: | :-------: |
| $\empty$  | $\empty$  |  $\{a\}$  |  $\{b\}$  | $\{a,b\}$ |
|  $\{a\}$  |  $\{a\}$  |  $\{a\}$  | $\{a,b\}$ | $\{a,b\}$ |
|  $\{b\}$  |  $\{b\}$  | $\{a,b\}$ |  $\{b\}$  | $\{a,b\}$ |
| $\{a,b\}$ | $\{a,b\}$ | $\{a,b\}$ | $\{a,b\}$ | $\{a,b\}$ |



26.

结合律显然成立，而运算对两半群皆封闭，进而对交集亦封闭，故交集是半群。$\quad \mathbf{Q.E.D.}$



27.

据26题，只需证明幺元在交集中，而两个幺半群均含有幺元，故交集是幺半群。$\quad \mathbf{Q.E.D.}$



31.

$\forall x,y\in S_1,(g\circ f)(x *_1 y)=g(f(x)*_2g(y))=(g\circ f)(x)*_3(g\circ f)(y)$，故$g\circ f$是同态。$\quad \mathbf{Q.E.D.}$



32.

因$f,g$均为双射，$g\circ f$亦为双射，据31题结论，$g\circ f$为同构。$\quad \mathbf{Q.E.D.}$



35.

因$f(x)=\ln x$严格单调递增且值域为$\mathbb{R}$，$f(x)$为双射，又$\ln(xy)=\ln x+\ln y$，故$f$是同态。$\quad \mathbf{Q.E.D.}$



36.

(a) 

(b)



## 9.3 Exercises

2. 

$\forall (s,t) \in S \times T,(s,t)*''(e_S,e_T)=(s,t),(e_S,e_T)*''(s,t)=(s,t)$，故$(e_S,e_T)$为$(S \times T,*'')$的幺元。$\quad \mathbf{Q.E.D.}$



4.

定义$f:S\times T \rightarrow T\times S,(s,t)\mapsto (t,s)$，易见其为双射、同态，故为同构。$\quad \mathbf{Q.E.D.}$



8.

是



10.

是



14.

是



16.

设$a=3k_1+1,b=3k_2+1,c=3k_3+1,d=3k_4+1$，若$a\ R\ b,c\ R\ d,5\ |\ 3(k_1-k_2),5\ |\ 3(k_3-k_4)$。$ac=9k_1k_3+3k_1+3k_3+1,bd=9k_2k_4+3k_2+3k_4+1$，



18.

$a(R_1\cap R_2)b,c(R_1\cap R_2)d \iff a\ R_1\ b,a\ R_2\ b,c\ R_1\ d,c\ R_2\ d$，据$R_1,R_2$皆同余，$(a*c)R_1(b*d),(a*c)R_2(b*d) \iff (a*c)(R_1\cap R_2)(b*d) \quad \mathbf{Q.E.D.}$



23.

$\{[0],[1],[2],[3],[4]\},[k]=\{n\in\mathbb{Z}:5\ |\ n-k\}$



24.

(a) $S/R=\{\{a,b\},\{c,d\}\}$​

|    $*$    | $\{a,b\}$ | $\{c,d\}$ |
| :-------: | :-------: | :-------: |
| $\{a,b\}$ | $\{a,b\}$ | $\{c,d\}$ |
| $\{c,d\}$ | $\{c,d\}$ | $\{a,b\}$ |

(b) $f_R(a)=[a],a\in[a]$



26.

(a) 因$f(\alpha_1\alpha_2)=f(\alpha_1)+f(\alpha_2)$，故$f$是同态。$\quad \mathbf{Q.E.D.}$

(b) 据(a)，若$f(\alpha_1)=f(\alpha_2),f(\alpha_3)=f(\alpha_4)$，那么$f(\alpha_1\alpha_3)=f(\alpha_2\alpha_4)$，故$R$是同余关系。$\quad \mathbf{Q.E.D.}$

(c) 据(b)，$\bar{f}:A^*/R\rightarrow \mathbb{N}$为双射，据同态基本定理，$\bar{f}$是同构，进而$A^*/R$与$\mathbb{N}$同构。$\quad \mathbf{Q.E.D.}$



28.

取$a=[0],b=[1],c=[2],d=[3]$，直接验证即得二者同构。$\quad \mathbf{Q.E.D.}$



30.

设$R$为$S$上一等价关系，那么若$a\ R\ b,c\ R\ d,a*c=c\ R\ d=(b*d)$，故是同余关系。$\quad \mathbf{Q.E.D.}$



## 9.4 Exercises

6.

Abel群，幺元为-2，$a^{-1}=-a-4$



8.

Abel群，幺元为0，$a^{-1}=-\dfrac{a}{a+1}$



12.

| $\circ$ | $f_1$ | $f_2$ | $f_3$ | $f_4$ | $f_5$ | $f_6$ |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  $f_1$  | $f_1$ | $f_2$ | $f_3$ | $f_4$ | $f_5$ | $f_6$ |
|  $f_2$  | $f_2$ | $f_1$ | $f_5$ | $f_6$ | $f_3$ | $f_4$ |
|  $f_3$  | $f_3$ | $f_4$ | $f_1$ | $f_2$ | $f_6$ | $f_5$ |
|  $f_4$  | $f_4$ | $f_3$ | $f_6$ | $f_5$ | $f_1$ | $f_2$ |
|  $f_5$  | $f_5$ | $f_6$ | $f_2$ | $f_1$ | $f_4$ | $f_3$ |
|  $f_6$  | $f_6$ | $f_5$ | $f_4$ | $f_3$ | $f_2$ | $f_1$ |



18.

$\forall a,b\in G,ab=abbb^{-1}=ab^{-1}=a^{-1}b^{-1}=(ba)^{-1}=ba$，故$G$是Abel群。$\quad \mathbf{Q.E.D.}$



19.

| $\circ$ | $f_1$ | $f_2$ | $f_3$ | $f_4$ | $f_5$ | $f_6$ | $f_7$ | $f_8$ |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  $f_1$  | $f_1$ | $f_2$ | $f_3$ | $f_4$ | $f_5$ | $f_6$ | $f_7$ | $f_8$ |
|  $f_2$  | $f_2$ | $f_3$ | $f_4$ | $f_1$ | $f_8$ | $f_7$ | $f_5$ | $f_6$ |
|  $f_3$  | $f_3$ | $f_4$ | $f_1$ | $f_2$ | $f_6$ | $f_5$ | $f_8$ | $f_7$ |
|  $f_4$  | $f_4$ | $f_1$ | $f_2$ | $f_3$ | $f_7$ | $f_8$ | $f_6$ | $f_5$ |
|  $f_5$  | $f_5$ | $f_7$ | $f_6$ | $f_8$ | $f_1$ | $f_3$ | $f_2$ | $f_4$ |
|  $f_6$  | $f_6$ | $f_8$ | $f_5$ | $f_7$ | $f_3$ | $f_1$ | $f_4$ | $f_2$ |
|  $f_7$  | $f_7$ | $f_6$ | $f_8$ | $f_5$ | $f_4$ | $f_2$ | $f_1$ | $f_3$ |
|  $f_8$  | $f_8$ | $f_5$ | $f_7$ | $f_6$ | $f_2$ | $f_4$ | $f_3$ | $f_1$ |



21.

因$G$有限，故存在$a^n=a,a^{n-1}=e$。$\quad \mathbf{Q.E.D.}$



24.

据$H$定义，$H$为群，进而为$G$的子群。$\quad \mathbf{Q.E.D.}$



26.

据$H$定义，$e \in H$，其为幺半群。若$x \in H$，那么$xa=ax,ax^{-1}=x^{-1}a$，故$x^{-1}\in H$，$H$为$G$的子群。$\quad \mathbf{Q.E.D.}$



28.

(a) 结合律与含幺元显然成立，对于任意$x\in H\cap K$，其逆元$x^{-1}\in H,x^{-1}\in K$，故$x^{-1}\in H\cap K$，从而$H\cap K$是$G$的子群。$\quad \mathbf{Q.E.D.}$

(b) $G=\mathbb{Z}_6,H=\{[0],[3]\},K=\{[0],[2],[4]\}$



29.

$\{f_1\},\{f_1,f_2,f_3,f_4\},\{f_1,f_3,f_5,f_6\},\{f_1,f_3,f_7,f_8\},\{f_1,f_5\},\{f_1,f_6\},\{f_1,f_3\},\{f_1,f_7\},\{f_1,f_8\}，D_4$



30.

据$G$交换，$f(ab)=(ab)^n=a^nb^n=f(a)f(b)$，故$f$是同态。$\quad \mathbf{Q.E.D.}$



31.

因$|xy|=|x||y|$，从而$f(xy)=f(x)f(y)$，故$f$是同态。$\quad \mathbf{Q.E.D.}$



32.

$f(ab)=e=ee=f(a)f(b)$，故$f$是同态。$\quad \mathbf{Q.E.D.}$



33.

必要性：$\forall a,b \in G,ab=af(b)b^{-1}=a^{-1}f(ab)b^{-1},a^2b^2=f(ab)=abab,ab=ba$，故$G$交换。

充分性：据30题立得。$\quad \mathbf{Q.E.D.}$



34.

必要性：$\forall a,b \in G,ab=af(b)b^2=a^2f(ab)b^2,a^{-1}b^{-1}=f(ab)=(ab)^{-1},ab=ba$，故$G$交换。

充分性：据30题立得。$\quad \mathbf{Q.E.D.}$



35.

$f_a(xy)=axya^{-1}=axa^{-1}aya^{-1}=f_a(x)f_a(y)$，故$f$是同态。

若$f_a(x)=f_a(y),axa^{-1}=aya^{-1},x=y$，故$f$是单射。

$\forall y\in G,f_a(x)=axa^{-1}=y,x=a^{-1}ya$，故$f$是满射，进而为双射，从而为同构。$\quad \mathbf{Q.E.D.}$



36.

取映射$f:G \rightarrow \mathbb{Z}_6,a^i \mapsto [i]$，显然$f$是双射。直接验证$f(a^ia^j)=f(a^r)=[r]=[i]+[j]$，故$f$是同态，进而$f$是同构。$\quad \mathbf{Q.E.D.}$



37.

当$n=1$时命题成立。假设当$n=k$时命题成立，那么当$n=k+1$时，$(ab)^{k+1}=(ab)^k(ab)=a^kb^kab=a^kab^kb=a^{k+1}b^{k+1}$​，故命题对全体正整数皆成立。$\quad \mathbf{Q.E.D.}$



38.

不妨设在某行出现两次，即$ab_1=ab_2=c$，这表明$b_1=a^{-1}c=b_2$，矛盾。列的情形同理。$\quad \mathbf{Q.E.D.}$



39.

| $*$  | $a$  | $b$  | $c$  |
| :--: | :--: | :--: | :--: |
| $a$  | $b$  | $a$  | $c$  |
| $b$  | $c$  | $b$  | $a$  |
| $c$  | $a$  | $c$  | $b$  |

$*$无幺元。



## 9.5 Exercises

1.

|                     | $(\bar{0},\bar{0})$ | $(\bar{0},\bar{1})$ | $(\bar{0},\bar{2})$ | $(\bar{1},\bar{0})$ | $(\bar{1},\bar{1})$ | $(\bar{1},\bar{2})$ |
| :-----------------: | :-----------------: | :-----------------: | :-----------------: | :-----------------: | :-----------------: | :-----------------: |
| $(\bar{0},\bar{0})$ | $(\bar{0},\bar{0})$ | $(\bar{0},\bar{1})$ | $(\bar{0},\bar{2})$ | $(\bar{1},\bar{0})$ | $(\bar{1},\bar{1})$ | $(\bar{1},\bar{2})$ |
| $(\bar{0},\bar{1})$ | $(\bar{0},\bar{1})$ | $(\bar{0},\bar{2})$ | $(\bar{0},\bar{0})$ | $(\bar{1},\bar{1})$ | $(\bar{1},\bar{2})$ | $(\bar{1},\bar{0})$ |
| $(\bar{0},\bar{2})$ | $(\bar{0},\bar{2})$ | $(\bar{0},\bar{0})$ | $(\bar{0},\bar{1})$ | $(\bar{1},\bar{2})$ | $(\bar{1},\bar{0})$ | $(\bar{1},\bar{1})$ |
| $(\bar{1},\bar{0})$ | $(\bar{1},\bar{0})$ | $(\bar{1},\bar{1})$ | $(\bar{1},\bar{2})$ | $(\bar{0},\bar{0})$ | $(\bar{0},\bar{1})$ | $(\bar{0},\bar{2})$ |
| $(\bar{1},\bar{1})$ | $(\bar{1},\bar{1})$ | $(\bar{1},\bar{2})$ | $(\bar{1},\bar{0})$ | $(\bar{0},\bar{1})$ | $(\bar{0},\bar{2})$ | $(\bar{0},\bar{0})$ |
| $(\bar{1},\bar{2})$ | $(\bar{1},\bar{2})$ | $(\bar{1},\bar{0})$ | $(\bar{1},\bar{1})$ | $(\bar{0},\bar{2})$ | $(\bar{0},\bar{0})$ | $(\bar{0},\bar{1})$ |



2.

$(a,a')(b,b')=(ab,a'b')=(ba,b'a')=(b,b')(a,a')$，故$G\times G'$是Abel群。$\quad \mathbf{Q.E.D.}$



3.

据9.3节4题，二者同构。$\quad \mathbf{Q.E.D.}$



6.

$f((a_1,b_1)+(a_2,b_2))=f(a_1+a_2,b_1+b_2)=a_1+a_2+b_1+b_2=f(a_1,b_1)+f(a_2,b_2)$，故$f$是同态。$\quad \mathbf{Q.E.D.}$



12.

(a) 因$1\times1=-1\times-1=1,-1\times1=1\times-1=-1$，故$H$是$G$的子群。

(b) $\{1,-1\},\{i,-i\}$



18.

$S_3$



22.

据定义立刻得到。$\quad \mathbf{Q.E.D.}$



26.

据$H$定义，$\forall x\in G,xH=Hx$，故$H$是正规子群。$\quad \mathbf{Q.E.D.}$



27.

据陪集定义，$f_a$是双射，故$|aH|=|H|$。$\quad \mathbf{Q.E.D.}$



28.

据34题立即得到。$\quad \mathbf{Q.E.D.}$



29.

据定义，$f$是满射，再据37题结论，$f$是单射。$\quad \mathbf{Q.E.D.}$



30.

$\mathrm{ker}(f)=G_1\times\{e\}$



31.

据$f$为同态，$f(ab)=f(a)f(b)$，再据$G_2$为Abel群即得。$\quad \mathbf{Q.E.D.}$



32.

因商群的运算与群的计算相容，故$G/N$为Abel群。$\quad \mathbf{Q.E.D.}$



33.

设$a\notin H$，那么据37题结论，$aH=Ha$，这表明$H$是$G$的正规子群。$\quad \mathbf{Q.E.D.}$



34.

因$a(H\cap N)a^{-1}=aHa^{-1}\cap N=H\cap N$，$H\cap N$亦为正规子群。$\quad \mathbf{Q.E.D.}$



35.

必要性：若$f(a)=e,f(e)=f(a)f(a^{-1})=f(a^{-1})$，据$f$为单射，$a=e$，故$\mathrm{ker}(f)=\{e\}$。

充分性：若$f(a)=f(b),f(a)f(b^{-1})=f(b)f(b^{-1})=f(e)=e$，故$ab^{-1}=e,a=b$，这表明$f$是单射。$\quad \mathbf{Q.E.D.}$



37.

设$aH,bH$为两个左陪集，若有$ah_1=bh_2$，那么$a=bh_2h_1^{-1}=bh_3$，这表明$aH\sube bH$，对称的有$bH \sube aH$，故$aH=bH$，这表明诸陪集间两两无交。而$G=\bigcup_{a\in G}aH$，据上述结论除去重复出现的陪集，即得$G$的一个划分。$\quad \mathbf{Q.E.D.}$



## 9.6 Exercises

7.

易见上述集合及其上运算构成环，直接验证$\begin{bmatrix}
	0 & 1 \\
	0 & 0 \\
\end{bmatrix}
\begin{bmatrix}
	0 & 1 \\
	0 & 0 \\
\end{bmatrix}
=
\begin{bmatrix}
	0 & 0 \\
	0 & 0 \\
\end{bmatrix}$，故其有零因子。$\quad \mathbf{Q.E.D.}$



8.

易见$\mathbb{Z}_{10}$及其上运算构成环，而$\bar{2}\times\bar{5}=\bar{0}$，故其有零因子。$\quad \mathbf{Q.E.D.}$



26.

设$ab=0 \in F$，因$F$是域，非零元皆可逆，从而$a=0$或$b=0$，故$F$中无零因子。$\quad \mathbf{Q.E.D.}$



27.

含有所有$R$中非零元。



28.

若$n$非素，不妨设$n=n_1n_2,1<n_1,n_2<n$，那么$\bar{n}_1\bar{n}_2=\bar{0}$，据26题结论，$\mathbb{Z}_n$不是域。$\quad \mathbf{Q.E.D.}$



29.

必要性：据28题直接得到。

充分性：因$n$为素数，对于$1<k<n$，$k,n$皆互素，据Bezout定理，存在唯一$s,t\in\mathbb{Z}$使得$sn+tk=1$，故$\mathbb{Z}_n$诸元皆有乘法逆元，进而$\mathbb{Z}_n$是域。$\quad \mathbf{Q.E.D.}$

