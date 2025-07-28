# (TIGER)Recommender Systems with Generative Retrieval[^1]

motivation

semantic ID: a token sequence derived from each item’s content information



model

- $\mathcal{I} \hookrightarrow \mathbb{R}^m$

  - $i \in \mathcal{I} \rightarrow semantic\ embedding \in \mathbb{R}^d$

  - $semantic\ embedding \in \mathbb{R}^d \rightarrow semantic\ ID \in \mathbb{R}^m$

  	> 为什么不直接一步到位？能不能直接计算semantic ID？（也许答案在RQ-VAE的架构中）

  	- RQ‐VAE
  		- k‐means聚类初始化

  	- Locality Sensitive Hashing (LSH)
  	- 分层k‐means聚类
  	- VQ‐VAE

- generate

  - seq2seq
  	- 堆叠之前所有item的semantic ID序列生成下一item的semantic ID序列


[^1]:[Recommender Systems with Generative Retrieval](https://arxiv.org/pdf/2305.05065)

