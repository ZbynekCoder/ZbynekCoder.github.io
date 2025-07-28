## 1 导论

机器学习

- 有监督学习

- 无监督学习

- 强化学习

  - 试探
    - 尝试未知
  - 开发
    - 贪心

  - 策略
    - 状态S$\rightarrow$动作A
    - 刺激-反应

  - 收益信号
    - 短期优选

  - 价值函数
    - 长期优选

  - 环境模型
    - 可选
    - 对环境行为推断
    - 有模型
    - 无模型：直接试错



## 2 多臂赌博机

$q_*(a) = \mathbb{E}(R_t | A_t = a)$

尝试$Q_t(a) \rightarrow q_*(a) (t \rightarrow \infty)$

###### 基于采样平均的动作选择

$$
Q_t(a) = \dfrac{\sum_{i=1}^{t-1} R_i \mathbb{1}_{A_i = a}}{\sum_{i=1}^{t-1} \mathbb{1}_{A_i = a}}
$$

记$N_t(a) = \sum_{i=1}^{t-1} \mathbb{1}_{A_i = a}$为在时刻t前动作a被选择的次数

贪心策略
$$
A_t = \arg \mathop{\max}\limits_{a} Q_t(a)
$$
只开发不试探

$\epsilon$-贪心策略

以$\epsilon$概率在所有动作中随机选择

> 练习2.1
>
> $\dfrac{\epsilon}{2} + (1 - \epsilon) = 0.75$

增量式：平均值以分摊O(1)时间计算
$$
Q_{n+1} = Q_n + \alpha_n(a) \left( R_n - Q_n \right)
$$
平稳问题：采样平均的增量式
$$
Q_n = \dfrac{1}{n - 1} \sum_{i=1}^{n-1} R_i
$$
为被选择n - 1次后的动作价值
$$
\begin{align}
	Q_{n+1} &= \dfrac{1}{n} \sum_{i=1}^{n} R_i \\
	&= \dfrac{n-1}{n} \dfrac{1}{n-1} \left( \sum_{i=1}^{n-1} R_i + R_n \right)  \\
	&= \left(1 - \dfrac{1}{n} \right) \dfrac{1}{n-1} \sum_{i=1}^{n-1} R_i + \dfrac{1}{n}R_n \\
	&= \left(1 - \dfrac{1}{n} \right)Q_n + \dfrac{1}{n}R_n \\
	&= Q_n + \dfrac{1}{n} \left( R_n - Q_n \right) \quad (步长移动) \\
	&= \left( 1 - \dfrac{1}{n}\right) Q_n + \dfrac{1}{n}R_n \quad (线性插值)
\end{align}
$$

- $\forall Q_1$，$Q_2 = R_1$
- 步长为$\frac{1}{n}$，从$Q_n$到$R_n$的线性插值

非平稳问题：指数近因加权平均

按指数系数赋最近信息更大的权重

固定步长$\alpha$的增量式
$$
Q_{n+1} = Q_n + \alpha \left( R_n - Q_n \right)
$$

$$
\begin{align}
	Q_{n+1} &= Q_n + \alpha \left( R_n - Q_n \right) \\
	&= (1 - \alpha)Q_n + \alpha R_n \\
	&= (1 - \alpha)(Q_{n-1} + \alpha \left( R_{n-1} - Q_{n-1} \right)) + \alpha R_n \\
	&= (1 - \alpha)^2Q_{n-1} + (1 - \alpha)\alpha R_{n-1} + \alpha R_n \\
	&= \cdots \\
	&= (1 - \alpha)^n Q_1 + \sum_{i=1}^n \alpha(1 - \alpha)^{n - i} R_i
\end{align}
$$

变步长$\alpha_n$的增量式
$$
Q_{n+1} = Q_n + \alpha_n(a) \left( R_n - Q_n \right)
$$
Proposition：（收敛步长条件）$\sum_{n=1}^\infty a_n(a) = \infty$且$\sum_{n=1}^\infty a_n^2(a) < \infty$时，$\{Q_n\}$收敛

乐观初始值

适用于平稳问题

有利于试探

> 练习2.7
>
> 与式(2.6)类似
> $$
> \begin{align}
> 	Q_{n+1} &= (1 - \beta_n) Q_n + \beta_n R_n \\
>     &= (1 - \beta_n) (1 - \beta_{n - 1}) Q_{n - 1} + (1 - \beta_n) \beta_{n - 1} R_{n - 1} + \beta_n R_n \\
>     &= (1 - \beta_n) (1 - \beta_{n - 1}) (1 - \beta_{n - 2}) Q_{n - 2} + (1 - \beta_n) (1 - \beta_{n - 1}) \beta_{n - 2}R_{n - 2} + (1 - \beta_n) \beta_{n - 1} R_{n - 1} + \beta_n R_n \\
>     &= \cdots \\
>     &= \prod_{i = 2}^n(1 - \beta_i) Q_2 + \sum_{i=2}^{n-1} \prod_{j=i+1}^n (1 - \beta_{j}) \beta_i R_i + \beta_n R_n
> \end{align}
> $$
> 注意到
> $$
> \bar{o}_1 = \bar{o}_{0} + \alpha(1 - \bar{o}_0) = \alpha
> $$
>
> $$
> \begin{align}
> 	Q_2 &= (1 - \beta_1) Q_1 + \beta_1 R_1 \\
> 	&= (1 - \dfrac{\alpha}{\bar{o}_1}) Q_1 + \dfrac{\alpha}{\bar{o}_1} R_1 \\
> 	&= R_1
> \end{align}
> $$
>
> $$
> \begin{align}
> 	Q_{n+1} &= \prod_{i = 2}^n(1 - \beta_i) R_1 + \sum_{i=2}^{n-1} \prod_{j = i + 1}^n (1 - \beta_{j}) \beta_i R_i + \beta_n R_n \\
> 	&= \prod_{i = 2}^n(1 - \beta_i) R_1 + \prod_{i = 3}^n(1 - \beta_i) \beta_2 R_2 + \cdots + \beta_n R_n
> \end{align}
> $$

###### 基于置信度上界UCB的动作选择

$$
A_t = \mathop{\arg\max}\limits_{a} \  UCB(a)
$$

$$
UCB(a) = Q_t(a) + c \sqrt{\dfrac{\ln t}{N_t(a)}}
$$

视$Q_t(a)$为统计量，当前$Q_t(a)$为均值，$\sqrt{\dfrac{\ln t}{N_t(a)}}$为方差，$c$为置信水平

- $Q_t(a)$越小，动作价值越低，越不需要试探
- 被选中的次数越多，方差越小，且是平方根量级的，可以减少试探
  - $\mathbb{D}(\bar{X}) = \dfrac{\mathbb{D}(X_1)}{n}$
- 相对被选中的次数越少，（认为）方差越大，需要试探

> 练习2.8

###### 基于梯度的动作选择

在动作集A上定义偏好泛函$H_t(a)$

- 动作a与动作b的相对偏好通过$H_t(a) - H_t(b)$而非$\dfrac{H_t(a)}{H_t(b)}$衡量

按softmax分布定义动作概率
$$
\pi_t(a) = Pr\{A_t = a\} = \dfrac{e^{H_t(a)}}{\sum_{b \in A}e^{H_t(b)}} 
$$

> 练习2.9
>
> 直接计算即可

所有偏好泛函有相同的初始值

在选择动作$A_t$并获得收益$R_t$之后，更新偏好函数
$$
H_{t + 1}(a) = 
\begin{cases}
	H_t(a) + \alpha(R_t - \bar{R}_t)(1 - \pi_t(A_t))&, a = A_t \\
	H_t(a) - \alpha(R_t - \bar{R}_t) \pi_t(A_t)&, a \neq A_t \\
\end{cases}
$$

- $\alpha$为步长常数
- $\bar{R}_t$是时刻t以前所有动作的收益平均
- 是随机梯度算法（推导见P38-40）

###### 上下文相关动作选择

> 练习2.10
>
> 如果不知情况，最优动作率为50%，随意操作
>
> 如果知道情况，最优动作率为100%，情况A选动作2，情况B选动作1



## 3 有限Markov决策过程

MDP交互轨迹：$S_0,A_0,R_1;S_1,A_1,R_2;\dots$

**Markov性**：当前状态s‘和收益r为给定前继状态s和对应动作a唯一确定，即$p(s',r|s,a) = Pr\{S_t = s',R_t = r | S_{t-1} = s,A_{t-1} = a\}$

状态转移概率：$p(s'|s,a) = Pr\{S_t = s' | S_{t-1} = s,A_{t-1} = a\} = \sum_{r \in \mathcal{R} } p(s',r|s,a)$

状态-动作期望收益：$r(s,a) = \mathbb{E}(R_t | S_{t-1} = s,A_{t-1} = a) = \sum_{r \in \mathcal{R}} r \sum_{s' \in \mathcal{S}} p(s',r|s,a)$

有限MDP的状态转移图



结束时刻为T的回报函数$G_t = R_{t + 1} + R_{t + 2} + \cdots +R_T$

- $G_T = 0$

持续性任务的带折扣回报函数$G_t = \sum_{k=0}^\infty \gamma^k R_{t+k+1}$，折扣率$0 \le \gamma \le 1$

- $G_t = R_{t+1} +\gamma G_{t+1}$


> 练习3.8
>
> $G_5 = 0$
>
> $G_4 = R_5 + \gamma G_5 = +2$
>
> $G_3 = R_4 + \gamma G_4 = +4$
>
> $G_2 = R_3 + \gamma G_3 = +8$
>
> $G_1 = R_2 + \gamma G_2 = +6$
>
> $G_0 = R_1 + \gamma G_1 = +4$

> 练习3.9
>
> $G_1 = \sum_{k = 0}^\infty \gamma^k R_{k + 2} = 7 \sum_{k = 0}^\infty 0.9^k = 70$
>
> $G_0 = R_1 + \gamma G_1 = 65$

> 练习3.10
>
> 略



策略是状态到动作的分布列的映射

- 确定性策略：在给定状态下执行确定动作
- 随机策略：每个状态下都有动作空间上的概率分布

状态价值函数$v_\pi(s) = \mathbb{E}_\pi(G_t|S_t=s) = \mathbb{E}_\pi(\sum_{k=0}^\infty \gamma^k R_{t+k+1} | S_t = s)$

- 从状态s开始按该策略执行的回报期望

动作价值函数$q_\pi(s,a) = \mathbb{E}_\pi(G_t | S_t = s,A_t = a) = \mathbb{E}_\pi(\sum_{k=0}^\infty \gamma^k R_{t+k+1} | S_t = s,A_t = a)$

- 从状态s按该策略执行动作a的回报期望

> 全期望公式
> $$
> \mathbb{E}(Y) = \mathbb{E}(\mathbb{E}(Y | X))
> $$

> 练习3.11
>
> $\mathbb{E}(R_{t + 1} | S_t = s) = \sum_{a \in \mathcal{A}} \mathbb{E}(R_{t+1} |S_t = s ,A_t = a) \pi(a|s) = \sum_{a \in \mathcal{A}} \sum_{r \in \mathcal{R}} r \sum_{s' \in \mathcal{S}} p(s',r|s,a) \pi(a|s)$

> 练习3.12
>
> $v_\pi(s) = \mathbb{E}_\pi(G_t|S_t=s) = \sum_{a \in \mathcal{A}} \mathbb{E}_\pi(G_t|S_t = s,A_t = a) \pi(a|s) = \sum_{a \in \mathcal{A}} q_\pi(s,a) \pi(a|s)$

> 练习3.13
>
> $q_\pi(s,a) = \mathbb{E}_\pi(\sum_{k=0}^\infty \gamma^k R_{t+k+1} | S_t = s,A_t = a) = $

**状态价值函数的Bellman方程**：一致性条件
$$
v_\pi(s) = \sum_{a \in \mathcal{A}}\pi(a | s) \sum_{s' \in \mathcal{S},r \in \mathcal{R}}p(s',r|s,a)(r+\gamma v_\pi(s'))
$$
s'为下一时刻状态

回溯图：动态规划

将后继状态的价值信息回传给当前时刻的状态

> 练习3.14
>
> 

> 练习3.15
>
> 

> 练习3.16
>
> 

> 练习3.17（动作价值函数的Bellman方程）
> $$
> \begin{align}
> 	q_\pi(s,a) &= \mathbb{E}_\pi(G_t | S_t = s,A_t = a) \\
> 	&= \mathbb{E}_\pi(R_{t+1} + \gamma G_{t+1} | S_t = s,A_t = a) \\
> 	&= 
> \end{align}
> $$
> 

>练习3.18

> 练习3.19



最优策略

$\pi \ge \pi' \iff \forall s \in \mathcal{S}, v_\pi(s) \ge v_{\pi'}(s)$

$\pi$是最优的$\iff \forall \pi', \pi \ge \pi'$

所有的最优策略有相同的最优状态价值函数$v_*(s)$和相同的最优动作价值函数$q_*(s,a)$

记$\pi^*$为所有最优策略的代表元

最优状态价值函数$v_*(s) = \max_\pi v_\pi(s)$

- 由状态价值函数Bellman方程，最优状态下的各状态价值 = 该状态下最优动作的期望回报

- **Bellman最优方程**
  $$
  \begin{align}
  v_*(s) &= \max_a \mathbb{E}(R_{t+1} + \gamma v_*(S_{t + 1}) | S_t = s, A_t = a) \\
  &= \max_a \sum_{s',r} p(s',r|s,a) (r + \gamma v_*(s'))
  \end{align}
  $$

最优动作价值函数$q_*(s,a) = \max_\pi q_\pi(s,a)$

- **Bellman最优方程**
  $$
  \begin{align}
  q_*(s,a) &= \mathbb{E}(R_{t + 1} + \gamma \max_{a'} q_*(S_{t+1},a') | S_t = s, A_t = a) \\
  &= \sum_{s',r} p(s',r | s,a)(r + \gamma \max_{a'} q_*(s',a'))
  \end{align}
  $$

通过最优函数，全局最优转化为局部最优

> 练习3.22
>
> 当$\gamma = 0$，在顶部状态时不考虑后续收益，$\pi_* = \pi_{left}$
>
> 当$\gamma \neq 0$，在顶部状态时不考虑后续收益，$\pi_* = \pi_{right}$

> 练习3.25

> 练习3.25

> 练习3.25

> 练习3.25

> 练习3.25



## 4 动态规划

### 策略迭代

- 预测问题：给定策略，计算/估计其价值函数
- 控制问题：计算/逼近最优价值函数

$\pi_0 \overset{\mathrm{E}}{\rightarrow} v_{\pi_0} \overset{\mathrm{I}}{\rightarrow} \pi_1 \overset{\mathrm{E}}{\rightarrow} v_{\pi_1} \overset{\mathrm{I}}{\rightarrow} \pi_2 \overset{\mathrm{E}}{\rightarrow} \cdots \overset{\mathrm{I}}{\rightarrow} \pi_{*} \overset{\mathrm{E}}{\rightarrow} v_{*}$

#### 策略评估（预测）$\overset{\mathrm{E}}{\rightarrow}$

Bellman方程
$$
\begin{align}
v_\pi(s) &= \mathbb{E}_\pi (R_{t+1} + \gamma v_\pi(S_{t+1}) | S_t = s) \\
&= \sum_{a \in \mathcal{A}}\pi(a | s) \sum_{s' \in \mathcal{S},r \in \mathcal{R}}p(s',r|s,a)(r+\gamma v_\pi(s'))
\end{align}
$$
对于每个$s \in \mathcal{S}$，均有Bellman方程成立，得到$|\mathcal{S}|$元线性方程组

迭代解法（Bellman格式）
$$
\begin{align}
v_{k+1}(s) &= \mathbb{E}(R_{t+1} + \gamma v_k(S_{t+1}) | S_t= s) \\
&= \sum_{a \in \mathcal{A}}\pi(a | s) \sum_{s' \in \mathcal{S},r \in \mathcal{R}}p(s',r|s,a)(r + \gamma v_k(s'))
\end{align}
$$
其中$v_0$可以任意选取，上述迭代是一个不动点为$v_\pi$的压缩映射，收敛到$v_\pi$

就地更新：用同一个数组存储一次遍历状态空间前后的价值函数

类比数值解的半隐格式

> 练习4.3（动作价值函数的Bellman格式）

#### 策略改进$\overset{\mathrm{I}}{\rightarrow}$

Theorem：（策略改进定理）$\pi' \ge \pi \iff q_\pi(s,\pi'(s)) \ge v_\pi(s),\forall s \in \mathcal{S} \iff v_{\pi'}(s) \ge v_\pi(s),\forall s \in \mathcal{S}$

贪心策略改进：在每一个状态选择价值函数最大的策略

除非原策略已经是最优策略，否则贪心策略一定给出了一个严格更优的策略

> 练习4.6

### 价值迭代

在迭代格式中直接贪心
$$
\begin{align}
v_{k+1}(s) &= \max_a \mathbb{E}(R_{t + 1} + \gamma v_k(S_{t + 1}) | S_t = s,A_t = a) \\
&= \max_a \sum_{s',r} p(s',r|s,a) (r + \gamma v_k(s'))
\end{align}
$$
Proposition：对任意$v_0$，如果$v_*$存在，那么$v_k \rightarrow v_* (k \rightarrow \infty)$

### 异步动态规划

在一次循环中只更新一个状态的价值，无需遍历整个状态空间

- 历史可指导应该更新哪个状态的价值

### 广义策略迭代GPI

$\overset{\mathrm{E}}{\rightarrow} + \overset{\mathrm{I}}{\rightarrow}$

- 二者不一定粒度相等，即
  - 可以若干次改进后再评估
  - 可以只改进一个状态后评估



## 5 Monte-Carlo方法

以下假定任务为分幕式

**试探性出发假设**：采样的幕个数趋于无穷时，每个状态或状态-动作都会被访问到无数次

### Monte-Carlo预测

首次访问型MC算法：按第一次访问状态或状态-动作的回报估计最优函数

每次访问型MC算法：按所有访问回报的平均值估计最优函数

常量$\alpha$MC
$$
\begin{align}
V_{n+1}(S_t) &= V_n(S_t) + \alpha(G_t - V_n(S_t)) \\
&= (1 - \alpha) V_n(S_t) + \alpha G_t
\end{align}
$$




### Monte-Carlo控制

目标策略$\pi$：用于实际决策的待评估和改进的策略

行动策略$b$：用于生成采样数据序列的策略

回报值$G_t$为行动策略$b$的采样数据对应结果

#### 同轨策略方法

$\pi = b$
$$
\mathbb{E}(G_t | S_t = s) = v_\pi(s)
$$

- 贪心策略
  $$
  \pi_{k+1}(s) = \arg \max_a q_{\pi_k}(s,a)
  $$

- $\epsilon$-软性策略

#### 离轨策略方法

$\pi \neq b$

$b$往往采用带有随机性的试探策略

**覆盖假设**：$b(a|s) > 0, \forall \pi(a|s) > 0$

##### 重要度采样

给定起始状态$S_t$，在策略$\pi$下状态-动作轨迹$= A_t, S_{t+1},A_{t+1},\dots,S_T$的概率为
$$
\begin{align}
Pr\{A_t,S_{t+1},A_{t+1},\dots,S_T|S_t,A_{t:T-1} \sim \pi\} &= \pi(A_t | S_t) p(S_{t+1} | S_t,A_t) \pi(A_{t+1} | S_{t+1}) \dots p(S_T | S_{T-1},A_{T-1}) \\
&= \prod_{k=t}^{T-1} \pi(A_k | S_k) p(S_{k+1} | S_k,A_k)
\end{align}
$$
定义重要度采样比
$$
\rho_{t:T-1} = \dfrac{\prod_{k=t}^{T-1} \pi(A_k | S_k) p(S_{k+1} | S_k,A_k)}{\prod_{k=t}^{T-1} b(A_k | S_k) p(S_{k+1} | S_k,A_k)} = \prod_{k=t}^{T-1} \dfrac{\pi(A_k | S_k)}{b(A_k | S_k)}
$$
其与MDP模型参数无关，为$\pi$和$b$确定

离轨策略下$G_t$对$\pi$的控制需要价值函数的系数修正
$$
\mathbb{E}(\rho_{t:T-1} G_t | S_t = s) = v_\pi(s)
$$

###### 普通重要度采样

$$
V(s) = \dfrac{\sum_{t \in \mathcal{T}(s)}\rho_{t : T(t) - 1}G_t}{|\mathcal{T}(s)|}
$$

- $T(t)$为当前分幕式任务下对于时刻t的终止时刻
- $\mathcal{T}(s)$为状态s的有效计算时刻集合
  - 对于首次访问型方法，$\mathcal{T}(s)$只有在当前分幕式任务下首次访问s的时刻
    - $|\mathcal{T}(s)| = 1$
  - 对于每次访问型方法，$\mathcal{T}(s)$包含在当前分幕式任务下每次访问s的时刻
- $\mathbb{E}(V(s)) = v_\pi(s)$
- $\mathbb{D}(V(s)) = \infty$

###### 加权重要度采样

$$
V(s) = \dfrac{\sum_{t \in \mathcal{T}(s)} \rho_{t : T(t) - 1} G_t}{\sum_{t \in \mathcal{T}(s)} \rho_{t : T(t) - 1}}
$$

- 当分母为0时，定义$V(s) = 0$
- $\mathbb{E}(V(s)) \neq v_\pi(s)$
- $\mathbb{D}(V(s)) \rightarrow 0$

##### 带折扣结构的重要度采样

###### 折扣敏感的重要度采样



###### 每次决策型重要度采样





## 6 时序差分学习

自举法：基于估计结果而非观察结果的预测

TD误差：在**当前时刻**（t+1时刻）估计的误差
$$
\delta_t = R_{t+1} + \gamma V_{t+1}(S_{t+1}) - V_t(S_t)
$$
单步TD（TD(0)）
$$
\begin{align}
V_{t+1}(S_t) &= V_t(S_t) + \alpha \delta_t \\
&= (1 - \alpha) V_t(S_t) + \alpha (R_{t+1} + \gamma V_{t+1}(S_{t+1}))
\end{align}
$$
Proposition：

1. 如果$\alpha$是足够小的常数，那么$\bar{V}$收敛于$v_\pi$
2. 如果$\alpha$满足步长收敛条件，那么$V \overset{P}{\rightarrow} v_\pi$

> 练习6.1
>
> 向前误差分析
> $$
> \begin{align}
> G_t - V_t(S_t) &= R_{t+1} + \gamma G_{t+1} - V_t(S_t) + \gamma V_{t+1}(S_{t+1}) - \gamma V_{t+1}(S_{t+1}) \\
> &= R_{t+1} + \gamma G_{t+1} - (V_{t+1}(S_t) - \alpha \delta_t) + \gamma V_{t+1}(S_{t+1}) - \gamma V_{t+1}(S_{t+1}) \\
> &= (1 + \alpha) \delta_t + \gamma (G_{t+1} - V_{t+1}(S_{t+1})) \\
> &= (1 + \alpha)\delta_t + \gamma (1 + \alpha) \delta_{t+1} + \gamma^2 (G_{t+2} - V_{t+2}(S_{t+2})) \\
> &= \cdots \\
> &= (1 + \alpha)\delta_t + \gamma (1 + \alpha) \delta_{t+1} + \cdots + \gamma^{T-t} (G_{T} - V_{T}(S_{T}))) \\
> &= (1 + \alpha)\sum_{k=t}^{T-1}\gamma^{k-t} \delta_k
> \end{align}
> $$
> 对于$V(s)$在整个任务中不会被更新的情形（例如Monte-Carlo的一次模拟），$V_t = V_{t+1}$，相当于$\alpha = 0$
> $$
> G_t - V_t(S_t) = \sum_{k=t}^{T-1}\gamma^{k-t} \delta_k
> $$

> 练习6.7

单步Sarsa（Sarsa(0)）
$$
\delta_t = R_{t+1} + \gamma Q(S_{t+1},A_{t+1}) - Q(S_t,A_t)
$$

$$
Q(S_t,A_t) \leftarrow Q(S_t,A_t) + \alpha \delta_t
$$

依赖于当前行动策略（因为需要定下$A_t$后才能预测）

> 练习6.8
>
> 与练习6.1同理

Q-learning
$$
Q(S_t,A_t) \leftarrow Q(S_t,A_t) + \alpha (R_{t+1} + \gamma \max_a Q(S_{t+1},a) - Q(S_t,A_t))
$$
其不依赖于当前行动策略

> 练习6.11
>
> 学习目标是对最优价值函数的近似

期望Sarsa

$$
\begin{align}
Q(S_t,A_t) &\leftarrow Q(S_t,A_t) + \alpha (R_{t+1} + \gamma \mathbb{E} (Q(S_{t+1},A_{t+1} | S_{t+1}) - Q(S_t,A_t)) \\
&= Q(S_t,A_t) + \alpha \left( R_{t+1} + \gamma \sum_a \pi(a | S_{t+1} ) Q(S_{t+1},a) - Q(S_t,A_t) \right)
\end{align}
$$
双学习

分离动作选择和Q函数更新，减少最大化偏差

- 最大化偏差：由于在每个局部都采用贪心，总是选择更大的样本，导致样本整体均值大于总体均值

采用两个预测函数$Q^{(1)}(a),Q^{(2)}(a)$

用一个确定动作，另一个用确定好的动作更新估计值

双Q-learning
$$
Q^{(i)}(S_t,A_t) \leftarrow Q^{(i)}(S_t,A_t) + \alpha(R_{t+1} + \gamma Q^{(3-i)}(S_{t + 1},\arg \max_a Q^{(i)}(S_{t+1},a)) - Q^{(i)}(S_t,A_t)), i = 1, 2
$$

> 练习6.13（双期望Sarsa）
> $$
> Q^{(i)}(S_t,A_t) \leftarrow Q^{(i)}(S_t,A_t) + \alpha (R_{t+1} + \gamma \mathbb{E} (Q^{(3-i)}(S_{t+1},A_{t+1} | S_{t+1}) - Q^{(i)}(S_t,A_t))
> $$

后位状态





## 7 $n$步自举法

$n$步TD

定义$n$步回报
$$
G_{t:t+n} = 
\begin{cases}
R_{t+1} + \gamma R_{t+2} + \cdots + \gamma^{n-1} R_{t+n} + \gamma^n V_{t + n - 1}(S_{t+n}) & ,t + n < T \\
R_{t+1} + \gamma R_{t+2} + \cdots + \gamma^{T-t-1}R_T  =G_t & ,t + n \ge T
\end{cases}
$$
基于$n$步回报的TD格式
$$
\begin{align}
V_{t+n}(S_t) &= V_{t+n-1}(S_t) + \alpha (G_{t:t+n} - V_{t+n-1}(S_t)) \\
&= (1 - \alpha)V_{t+n-1}(S_t) + \alpha G_{t:t+n}
\end{align}
$$

- $n = 1$时为单步TD：$V_{t+1}(S_t) = (1 - \alpha) V_t(S_t) + \alpha (R_{t+1} + \gamma V_t(S_{t+1}))$
- $n = \infty$时为MC：$V_{n+1}(S_t) = (1 - \alpha) V_n(S_t) + \alpha G_t$

终止时刻后（$t = T,T + 1,\dots, T + n -2$）仍要按上述格式更新价值函数

> 练习7.1

> 练习7.2

Proposition：（误差减少性质）对于$n \ge 1$或$n = \infty$
$$
\max_s | \mathbb{E}(G_{t:t+n} | S_t = s) - v_\pi(s) | \le \gamma^n \max_s | V_{t + n - 1} - v_\pi(s) |
$$
$n$步Sarsa

定义$n$步回报
$$
G_{t:t+n} = 
\begin{cases}
R_{t+1} + \gamma R_{t+2} + \cdots + \gamma^{n-1} R_{t+n} + \gamma^n Q_{t + n - 1}(S_{t+n},A_{t+n}) & ,t + n < T \\
R_{t+1} + \gamma R_{t+2} + \cdots + \gamma^{T-t-1}R_T  =G_t & ,t + n \ge T
\end{cases}
$$
基于$n$步回报的Sarsa格式
$$
\begin{align}
Q_{t+n}(S_t,A_t) &= Q_{t+n-1}(S_t,A_t) + \alpha (G_{t:t+n} - Q_{t+n-1}(S_t,A_t)) \\
&= (1 - \alpha)Q_{t+n-1}(S_t,A_t) + \alpha G_{t:t+n}
\end{align}
$$

> 练习7.4
>
> 归纳证明$t+n<T$的情形
>
> 当$n=1$时，
> $$
> \begin{align}
> G_{t:t+1} &= R_{t+1} + \gamma Q_t(S_{t+1},A_{t+1}) \\
> &= Q_{t-1}(S_t,A_t) + R_{t+1} + \gamma Q_t(S_{t+1},A_{t+1}) - Q_{t-1}(S_t,A_t)
> \end{align}
> $$
> 若命题对于$n=m-1$成立，那么对于$n=m$，
> $$
> \begin{align}
> G_{t:t+m} &= G_{t:t+m-1} - \gamma^{m-1}Q_{t+m-2}(S_{t+m-1},A_{t+m-1}) + \gamma^{m-1} R_{t+m} + \gamma^n Q_{t+m-1}(S_{t+m},A_{t+m}) \\
> &= Q_{t-1}(S_t,A_t) + \sum_{k=t}^{\min(t+m-1,T)-1}\gamma^{k-t}(R_{k+1} + \gamma Q_k(S_{k+1},A_{k+1})-Q_{k-1}(S_k,A_k)) - \gamma^{m-1}Q_{t+m-2}(S_{t+m-1},A_{t+m-1}) + \gamma^{m-1} R_{t+m} + \gamma^n Q_{t+m-1}(S_{t+m},A_{t+m}) \\
> &= Q_{t-1}(S_t,A_t) + \sum_{k=t}^{\min(t+m,T)-1}\gamma^{k-t}(R_{k+1} + \gamma Q_k(S_{k+1},A_{k+1})-Q_{k-1}(S_k,A_k))
> \end{align}
> $$
> $t+n \ge T$的情形显然

$n$步期望Sarsa

定义$n$步回报
$$
G_{t:t+n} = 
\begin{cases}
R_{t+1} + \gamma R_{t+2} + \cdots + \gamma^{n-1} R_{t+n} + \gamma^n \bar{V}_{t+n-1}(S_{t+n}) & ,t + n < T \\
R_{t+1} + \gamma R_{t+2} + \cdots + \gamma^{T-t-1}R_T = G_t & ,t + n \ge T
\end{cases}
$$

- 其中期望近似价值
  $$
  \bar{V}_t(s) = 
  \begin{cases}
  \sum_a \pi(a|s) Q_t(s,a) &, s \in \mathcal{S} \\
  0 &, s \in \mathcal{S}^+ \setminus \mathcal{S} 
  \end{cases}
  $$

基于$n$步回报的期望Sarsa格式
$$
\begin{align}
Q_{t+n}(S_t,A_t) &= Q_{t+n-1}(S_t,A_t) + \alpha (G_{t:t+n} - Q_{t+n-1}(S_t,A_t)) \\
&= (1 - \alpha)Q_{t+n-1}(S_t,A_t) + \alpha G_{t:t+n}
\end{align}
$$



$n$步离轨策略

$$
\rho_{t:h} = \prod_{k=t}^{\min\{h,T-1\}} \dfrac{\pi(A_k|S_k)}{b(A_k|S_k)}
$$
$n$步Sarsa
$$
Q_{t+n}(S_t,A_t) = Q_{t+n-1}(S_t,A_t) + \alpha \rho_{t+1:t+n}(G_{t:t+n} - Q_{t+n-1}(S_t,A_t))
$$
$n$步期望Sarsa
$$
Q_{t+n}(S_t,A_t) = Q_{t+n-1}(S_t,A_t) + \alpha \rho_{t+1:t+n-1}(G_{t:t+n} - Q_{t+n-1}(S_t,A_t))
$$

- 因为$t+n$时刻将计算期望，把所有可能动作都考虑进来，不需采样率修正



带控制变量的每次决策型方法





$n$步树回溯

定义$n$步回报
$$
G_{t:t+n} = 
\begin{cases}
R_{t+1} + \gamma \left( \sum_{a \neq A_{t+1}} \pi (a|S_{t+1}) Q_{t+1}(S_{t+1},a) + \pi (A_{t+1}|S_{t+1}) G_{t+1:t+2} \right) &, t < T - 1, n \ge 2 \\
R_T &, t = T - 1\\
R_{t+1} + \gamma \sum_a \pi (a|S_{t+1}) Q_t(S_{t+1},a) &, n = 1
\end{cases}
$$

$$
Q_{t+n}(S_t,A_t) \leftarrow Q_{t+n-1}(S_t,A_t) + \alpha (G_{t:t+n} - Q_{t+n-1}(S_t,A_t))
$$

> 练习7.11



$n$步$Q(\sigma)$

$n$步Sarsa与$n$步树回溯的线性组合

记$\sigma_t$为时刻$t$的采样程度

- $\sigma_t = 1$：采样
  - $\sigma_t \equiv 1$为$n$步Sarsa
- $\sigma_t = 0$：求期望而完全不采样
  - $\sigma_t \equiv 0$为$n$步树回溯

对于$t < h \le T$
$$
G_{t:h} = R_{t+1} + \gamma (\sigma_{t+1} \rho_{t+1} + (1 - \sigma_{t+1})\pi(A_{t+1}|S_{t+1}))(G_{t+1:h} - Q_{h-1}(S_{t+1},A_{t+1})) + \gamma \bar{V}_{h-1}(S_{t+1})
$$


## 8 基于表格型方法的规划和学习

### 后台规划





### 决策时规划

#### 启发式搜索



#### 预演算法

对给定预演策略$\pi$在单一状态上作改进得到的$\pi'$严格地优于$\pi$

其给出了预演策略基础上的更优算法，而非全局最优策略

#### Monte-Carlo树搜索MCTS

"策略改进的算子"

避免计算全局最优价值函数，但保留了过去经验以指导学习

- 选择
  - 从根节点开始，按照基于动作价值的树策略向下找到一个叶节点
  - 树策略必须可以平衡试探和开发
  - $\epsilon$-贪心策略或UCB
- 扩展
  - 在某些循环中执行
  - 如果现在的状态叶节点存在动作a没有子节点，即深入动作a，扩展MC树
- 模拟
  - 从当前所在状态节点（可能是动作选择的结果，也可能是扩展得到的新节点）开始，按照预演策略进行整幕模拟
- 回溯
  - 计算整幕模拟的回报值并向上回传

#### APV-MCTS

对MCTS在扩展与回溯步骤进行改进





## 9 基于函数逼近的同轨策略预测

$$
\bar{VE}(\bold{w}) = \sum_{s \in \mathcal{S}} \mu(s) (v_\pi(s) - \hat{v}(s,\bold{w}))^2
$$

- 同轨策略分布$\mu: \mathcal{S} \rightarrow [0,1]$定义了在状态s上花费的计算时间比例
- $v_\pi$为策略$\pi$下的真实价值函数
- $\hat{v}$为策略$\pi$下的近似价值函数

全局/局部最优权值向量$\bold{w}^*$满足$\bar{VE}(\bold{w}^*) \le \bar{VE}(\bold{w})$在全局/局部成立

随机梯度下降SGD

对于给定的样本$S_t \mapsto v_\pi(S_t)$
$$
\begin{align}
\bold{w}_{t+1} &= \bold{w}_{t} - \dfrac{1}{2} \alpha_t \nabla (v_\pi(S_t) - \hat{v}(S_t,\bold{w}_{t}))^2 \\
&= \bold{w}_{t} + \alpha_t (v_\pi(S_t) - \hat{v}(S_t, \bold{w}_{t})) \nabla \hat{v}(S_t, \bold{w}_{t})
\end{align}
$$
Proposition：如果$\alpha_t$满足收敛步长条件，那么SGD收敛到局部最优解

即使$v_\pi(S_t)$只表现为一个观察统计量$U_t$，只要$U_t$对于$v_\pi(S_t)$是无偏的，SGD仍然收敛到局部最优解





12 资格迹

记回报序列$\bold{g} = (G_{t:t+1},G_{t:t+2},\dots)$，取概率序列$\bold{w} = (w_1,w_2,\dots)$，得复合更新回报$G=(\bold{w},\bold{g})$

特别地，定义衰减率$\lambda \in [0,1]$，若$\bold{w} = (1 - \lambda)(1,\lambda,\lambda^2,\dots)$，得到$\lambda$-回报$G_t^\lambda$

- $\lambda = 1$，$G_t^\lambda = G_t$
- $\lambda = 0$，$G_t^\lambda = G_{t:t+1}$

离线$\lambda$-回报算法
$$
\bold{w}_{t+1} = \bold{w}_t + \alpha(G_t^\lambda - \hat{v}(S_t,\bold{w}_t)) \nabla \hat{v} (S_t,\bold{w}_t), t = 0,\dots,T-1
$$
TD($\lambda$)



$n$步截断$\lambda$-回报算法



在线$\lambda$-回报算法



真实在线TD($\lambda$)



荷兰迹



Sarsa($\lambda$)



Q($\lambda$)



TB($\lambda$)



时序差分学习算法的一般格式

