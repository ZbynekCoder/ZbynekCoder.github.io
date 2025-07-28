# (E4SRec)E4SRec: An Elegant Effective Efficient Extensible Solution of Large Language Models for Sequential Recommendation[^1]

motivation

- existing LLM-based recommendation methods struggle to manage the IDs to conduct ID-based recommendation and more critically, fail to leverage collaborative data vital for recommendations
	- ID管理：利用ID蕴含的协同信息
- the problem definition of the existing approaches that is generate the results from the whole vocabulary will often lead to out-of-range results
	- 结果超出范围
- the existing methods are only able to generate one recommendation result each time for the characteristics of LLMs
	- 延迟高，可行性差



model

- sequential recommendation model for ID embeddings
	- 输出ID embedding $E \in M_{N \times d_S}(\mathbb{R})$，给出嵌入$\mathcal{I} \stackrel{\mathscr{E}}{\hookrightarrow} \mathbb{R}^{d_S}$
- E4SRec
	- Input Layer
		- $\mathscr{E}(\mathcal{I}^L) \in (\mathbb{R}^{d_S})^L$
		- 线性投影$W_{input}$将$E$投影到LLM embedding子空间（协同知识库）
		- Alpaca模板构建prompt
			- 文本部分使用词嵌入，item id使用id嵌入
	- LLM Layer
		- ？？？
	- Prediction Layer
		- ？？？



[^1]:[E4SRec: An Elegant Effective Efficient Extensible Solution of Large Language Models for Sequential Recommendation](https://arxiv.org/pdf/2312.02443)
