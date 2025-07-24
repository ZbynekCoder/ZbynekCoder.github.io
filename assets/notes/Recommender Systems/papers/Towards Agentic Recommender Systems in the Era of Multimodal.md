# Towards Agentic Recommender Systems in the Era of Multimodal[^1]

**对LLM-ARS的简介**

定义

元组$(U, I, A, E, R)$

- $U$：user
- $I$：item
- $A$：agent
- $E$：environment
- $R: U \times E \times A \to P (I)$：recommendation function

对于智能体a，优化问题$\max_{\pi_a} \mathbb{E} \left[ U(u,R(u,e,a)) | \pi_a \right] $

- $U$：utility

Model

- 用户画像Profile
	- $\begin{aligned} P: U \times T &\to \mathcal{S} \\\\ (u,t) &\mapsto f(H(u,t),C(u,t),X(u,t);\theta_P) \end{aligned}$
		- $\mathcal{S}$：state space（？？？什么状态）
		- $H(u,t)$：history
		- $C(u,t)$：context
		- $X(u,t)$：external signal

	- 增量更新$P(u,t+1) = P(u,t) + \eta \Delta P(u,t)$

- 规划Planning
	- $s=f(u,e)$
	- $f: U \times E \to \mathcal{S}$

- 记忆Memory
	- $\begin{aligned} M: U \times T &\to \mathcal{M} \\\\ (u,t) &\mapsto g(H(u,t),C(u,t);\theta_M) \end{aligned}$

- 行动Action

用户模拟问题

- Simulator
- RS

框架

- 单智能体框架
- 多智能体框架
- 人机 LLM 混合框架

[^1]:https://arxiv.org/pdf/2503.16734

