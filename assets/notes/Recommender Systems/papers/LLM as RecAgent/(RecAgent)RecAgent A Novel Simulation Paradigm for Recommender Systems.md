## (RecAgent)RecAgent A Novel Simulation Paradigm for Recommender Systems

Profile

It includes features like ID, name, gender, age, traits, career and interests.

- trait、interest等人工分类
	- 预加载的动作序列聚类后交由LLM标注？
- 来自ChatGPT的用户画像分类

profile generation

- handcrafting
- GPT-based
	- 设计适当的提示，基于GPT生成个人信息
		- hallucination from GPT？
- real-data alignment

Memory

- 感觉记忆Sensory Memory
	- an observation as an event experienced by the agent
	- compressing observation (robustness, efficiency)
	- weight (score) for each observation
	- $M=\langle c,s,t\rangle$
		- $c$: compressed observation
		- $s$: score for each observation
		- $t$: timestamp
- 短期记忆Short-term Memory
	- $MEM = \left\{ M_1, M_2, \dots, M_n\right\}$
	- 如果$M_{n+1}$在$MEM$中找到相似者，就增强相似者
		- 设定成为长期记忆的阈值次数
	- 将$M_{n+1}$加入$MEM$
- 长期记忆Long-term Memory
	- 幂函数定义遗忘概率

------

- Memory writing
- Memory reading
- Memory reflection

Action

搜索、浏览、点击、下一页、一对一聊天、一对多广播

unified prompting framework

------

multi-agent

using Pareto distribution to measure the activity level of each agent



