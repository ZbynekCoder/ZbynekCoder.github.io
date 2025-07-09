## 第8章 评分预测问题

用户评分数据集：每一条评分记录是一个三元组$(u,i,r) = (u,i,r_{ui})$，表示用户$u$给物品$i$赋予了评分$r$

评分预测问题：通过已知的用户历史评分记录预测未知的用户评分记录

### 8.1 离线实验方法

一般用均方根误差RMSE度量预测的精度
$$
\mathrm{RMSE} = \dfrac{\sqrt{\displaystyle \sum_{(u,i) \in \mathrm{Test}}(r_{ui} - \hat{r}_{ui})^2}}{\left| \mathrm{Test} \right|}
$$

### 8.2 评分预测算法

#### 平均值

- 全局平均值：$\hat{r}_{ui} = \mu = \dfrac{\displaystyle \sum_{(u,i) \in \mathrm{Train}} r_{ui}}{\displaystyle \sum_{(u,i) \in \mathrm{Train}} 1} = \dfrac{\displaystyle \sum_{(u,i) \in \mathrm{Train}} r_{ui}}{\left| \mathrm{Train} \right|}$

- 用户评分平均值：$\hat{r}_{ui} = \bar{r}_u = \dfrac{\displaystyle \sum_{i \in N(u)}r_{ui}}{\displaystyle \sum_{i \in N(u)} 1} = \dfrac{\displaystyle \sum_{i \in N(u)} r_{ui}}{\left| N(u) \right|}$

- 物品评分平均值：$\hat{r}_{ui} = \bar{r}_i = \dfrac{\displaystyle \sum_{u \in N(i)}r_{ui}}{\displaystyle \sum_{u \in N(i)} 1} = \dfrac{\displaystyle \sum_{u \in N(i)} r_{ui}}{\left| N(i) \right|}$

- 用户分类对物品分类的平均值（类类平均值）：定义用户分类函数$\phi$和物品分类函数$\varphi$
	$$
	\hat{r}_{ui} = \dfrac{\displaystyle \sum_{\substack{(v,j) \in \mathrm{Train} \\\\ \phi(u) = \phi(v) \\\\ \varphi(i) = \varphi(j)}}r_{vj}}{\displaystyle \sum_{\substack{(v,j) \in \mathrm{Train} \\\\ \phi(u) = \phi(v) \\\\ \varphi(i) = \varphi(j)}}1}
	$$

	- $\phi(u) = 0, \varphi(i) = 0$，退化为全局平均值
	- $\phi(u) = u, \varphi(i) = 0$，退化为用户评分平均值
	- $\phi(u) = 0, \varphi(i) = i$，退化为物品评分平均值

#### 基于邻域的方法

##### 基于用户的邻域算法

预测一个用户对一个物品的评分，需要参考和这个用户兴趣相似的用户对该物品的评分
$$
\hat{r}_{ui} = \bar{r}_u + \dfrac{\displaystyle \sum_{v \in S(u,K) \cap N(i)} w_{uv} (r_{vi} - \bar{r}_v)}{\displaystyle \sum_{v \in S(u,K) \cap N(i)}\left| w_{uv} \right|}
$$
其中$S(u, K)$是和用户$u$兴趣最相似的$K$个用户的集合，$N(i)$是对物品$i$评过分的用户集合，$r_{vi}$是用户$v$对物品$i$的评分，$r_v$是用户$v$对他评过分的所有物品评分的平均值，$w_{uv}$为用户之间的相似度。

- 使用Pearson系数计算$$w_{uv}$$
	$$
	w_{uv} = \dfrac{\displaystyle \sum_{i \in I} (r_{ui} - \bar{r}_u)(r_{vi} - \bar{r}_v)}{\displaystyle \sqrt{\sum_{i \in I} (r_{ui} - \bar{r}_u)^2 \sum_{i \in I} (r_{vi} - \bar{r}_v)^2}}
	$$

##### 基于物品的邻域算法

在预测用户$u$对物品$i$的评分时，会参考用户$u$对和物品$i$相似的其他物品的评分
$$
\hat{r}_{ui} = \bar{r}_i + \dfrac{\displaystyle \sum_{j \in S(i,K) \cap N(u)} w_{ij} (r_{uj} - \bar{r}_i)}{\displaystyle \sum_{j \in S(i,K) \cap N(u)}\left| w_{ij} \right|}
$$
其中$S(i,K)$是和$i$最相似的物品集合，$N(u)$是用户$u$评过分的物品集合，$w_{ij}$是物品之间的相似度，$\bar{r}_i$是物品$i$的平均分，$w_{ij}$为物品之间的相似度。

- 余弦相似度
- Pearson系数
- 修正的余弦相似度

#### 隐语义模型与矩阵分解模型

#todo

#### 加入时间信息

#todo

#### 模型融合

##### 模型级联融合

定义损失函数
$$
C = \sum_{(u,i) \in \mathrm{Train}} (r_{ui} - \hat{r}_{ui}^{(k)} - \hat{r}_{ui}^{(k+1)})^2
$$

##### 模型加权融合

$$
\hat{r} = f(\hat{r}^{(1)},\hat{r}^{(2)},\dots,\hat{r}^{(K)})
$$

