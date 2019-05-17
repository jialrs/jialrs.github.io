var papers = new Array (

     {
        id: "kdd19",
        name: "DeepGBM: A Deep Learning Framework Distilled by GBDT for Online Prediction Tasks",
        coauthors: new Array(authorList.Guolin, authorList.Zhenhui, authorList.JiangBian, authorList.Tieyan),
        conference: "SIGKDD 2019",
        paperAbstract: "Online prediction has become one of the most essential tasks in many real-world applications. Two main characteristics of typical online prediction tasks include tabular input space and online data generation. Specifically, tabular input space indicates the existence of both sparse categorical features and dense numerical ones, while online data generation implies continuous task-generated data with potentially dynamic distribution. Consequently, effective learning with tabular input space as well as fast adaption to online data generation become two vital challenges for obtaining the online prediction model. Although Gradient Boosting Decision Tree (GBDT) and Neural Network (NN) have been widely used in practice, either of them yields their own weaknesses. Particularly, GBDT can hardly be adapted to dynamic online data generation, and it tends to be ineffective when facing sparse categorical features; NN, on the other hand, is quite difficult to achieve satisfactory performance when facing dense numerical features. In this paper, we propose a new learning framework, DeepGBM, which integrates the advantages of the both NN and GBDT by using two corresponding NN components: (1) CatNN, focusing on handling sparse categorical features. (2) GBDT2NN, focusing on dense numerical features with distilled knowledge from GBDT. Powered by these two components, DeepGBM can leverage both categorical and numerical features while retaining the ability of efficient online update. Comprehensive experiments on a variety of publicly available datasets have demonstrated that DeepGBM can outperform other well-recognized baselines in various online prediction tasks."
     },
     {
        id: "aamas19",
        name: "A Cooperative Multi-Agent Reinforcement Learning Framework for Resource Balancing in Complex Logistics Network",
        coauthors: new Array(authorList.Xihan, authorList.JiangBian, authorList.Yunhai, authorList.Tieyan),
        conference: "AAMAS 2019",
        arxiv: "https://arxiv.org/abs/1903.00714",
        paperAbstract: "Resource balancing within complex transportation networks is one of the most important problems in real logistics domain. Traditional solutions on these problems leverage combinatorial optimization with demand and supply forecasting. However, the high complexity of transportation routes, severe uncertainty of future demand and supply, together with non-convex business constraints make it extremely challenging in the traditional resource management field. In this paper, we propose a novel sophisticated multi-agent reinforcement learning approach to address these challenges. In particular, inspired by the externalities especially the interactions among resource agents, we introduce an innovative cooperative mechanism for state and reward design resulting in more effective and efficient transportation. Extensive experiments on a simulated ocean transportation service demonstrate that our new approach can stimulate cooperation among agents and lead to much better performance. Compared with traditional solutions based on combinatorial optimization, our approach can give rise to a significant improvement in terms of both performance and stability."
     },
     {
        id: "joco17",
        name: "Near optimal algorithms for online weighted bipartite matching in adversary model",
        coauthors: new Array(authorList.Xiaoming, authorList.Jialin),
        conference: "Journal of Combinatorial Optimization (JOCO), 2017",
        paperAbstract: "Bipartite matching is an important problem in graph theory. With the prosperity of electronic commerce, such as online auction and AdWords allocation, bipartite matching problem has been extensively studied under online circumstance. In this work, we study the online weighted bipartite matching problem in adversary model, that is, there is a weighted bipartite graph $G=(L,R,E)$ and the left side $L$ is known as input, while the vertices in $R$ come one by one in an order arranged by adversary. When each vertex in $R$ comes, its adjacent edges and relative weights are revealed. The algorithm should irreversibly decide whether to match this vertex to an unmatched one in $L$ with the objective to maximize the total weight of the obtained matching. When the weights are unbounded, the best algorithm can only achieve a competitive ratio $\\Theta\\left(\\frac{1}{n}\\right)$, where $n$ is the number of vertices coming online. Thus, we mainly deal with two variants: the {bounded weight problem} in which all weights are in the range $[\\alpha, \\beta]$, and the normalized summation problem in which each vertex in one side has the same total weights. We design algorithms for both variants with competitive ratio $\\Theta\\left(\\max\\left\\{\\frac{1}{\\log \\frac{\\beta}{\\alpha}},\\frac{1}{n}\\right\\}\\right)$ and $\\Theta\\left(\\frac{1}{\\log n}\\right)$ respectively. The hardness results show that these ratios match corresponding upper bounds in order."
     },
	  {
        id : "ads16",
        name : "Efficient delivery policy to minimize user traffic consumption in guaranteed advertising",
        coauthors : new Array(authorList.Zheng, authorList.Qian, authorList.Qiang, authorList.Jialin, authorList.Yanyan, authorList.Xiaoming),
        conference : "AAAI 2017",
        type : "e",
        paperAbstract: "<p>In this work, we study the guaranteed delivery model which is widely used in online display advertising. In the guaranteed delivery scenario, ad exposures (which are also called impressions in some works) to users are guaranteed by contracts signed in advance between advertisers and publishers. A crucial problem for the advertising platform is how to fully utilize the valuable user traffic to generate as much as possible revenue. Different from previous works which usually minimize the penalty of unsatisfied contracts and some other cost (e.g. representativeness), we propose the novel consumption minimization model, in which the primary objective is to minimize the user traffic consumed to satisfy all contracts. Under this model, we develop a near optimal method to deliver ads for users. The main advantage of our method lies in that it consumes nearly as least as possible user traffic to satisfy all contracts, therefore more contracts can be accepted to produce more revenue. It also enables the publishers to estimate how much user traffic is redundant or short so that they can sell or buy this part of traffic in bulk in the exchange market. Furthermore, it is robust with regard to priori knowledge of user type distribution. Finally, the simulation shows that our method outperforms the traditional state-of-the-art methods. </p>",
        arxiv: "https://arxiv.org/abs/1611.07599"
     },

     {
        id : "sche16-2",
        name : "Randomized mechanisms for selling reserved instances in cloud",
        coauthors : new Array(authorList.Weidong, authorList.Tao, authorList.Xiaoming, authorList.Tieyan),
        conference : "AAAI 2017",
        arxiv: "https://arxiv.org/abs/1611.07379",
        type : "g",
        paperAbstract: "<p>Selling reserved instances (or virtual machines) is a basic service in cloud computing. In this paper, we consider a more flexible pricing model for instance reservation, in which a customer can propose the time length and number of resources of her request, while in today's industry, customers can only choose from several predefined reservation packages. Under this model, we design randomized mechanisms for customers coming online to optimize social welfare and providers' revenue. We first consider a simple case, where the requests from the customers do not vary too much in terms of both length and value density. We design a randomized mechanism that achieves a competitive ratio $\\frac{1}{42}$ for both social welfare and revenue, which is a improvement as there is usually no revenue guarantee in previous works such as  (Azar et al. 2015; Wang et al. 2015). This ratio can be improved up to $\\frac{1}{11}$ when we impose a realistic constraint on the maximum number of resources used by each request. On the hardness side, we show an upper bound $\\frac{1}{3}$ on competitive ratio for any randomized mechanism. We then extend our mechanism to the general case and achieve a competitive ratio $\\frac{1}{42\\log k\\log T}$ for both social welfare and revenue, where $T$ is the ratio of the maximum request length to the minimum request length and $k$ is the ratio of the maximum request value density to the minimum request value density. This result outperforms the previous upper bound $\\frac{1}{CkT}$ for deterministic mechanisms (Wang et al. 2015). We also prove an upper bound $\\frac{2}{\\log 8kT}$ for any randomized mechanism. All the mechanisms we provide are in a greedy style. They are truthful and easy to be integrated into practical cloud systems.</p>"
     },

     {
        id : "matching15",
        name : "Computing the Least-core and Nucleolus for Threshold Cardinality Matching Games",
        coauthors : new Array(authorList.Qizhi, authorList.Bo, authorList.Xiaoming, authorList.Jialin),
        conference : "Theoretical Computer Science (TCS), 2015",
        arxiv : "http://arxiv.org/abs/1409.5987",
        type : "g",
        paperAbstract : "<p>Cooperative games provide a framework for fair and stable profit allocation in multi-agent systems. <em>Core</em>, <em>least-core</em> and <em>nucleolus</em> are such solution concepts that characterize stability of cooperation. In this paper, we study the algorithmic issues on the least-core and nucleolus of threshold cardinality matching games (TCMG). A TCMG is defined on a graph $G=(V,E)$ and a threshold $T$, in which the player set is V and the profit of a coalition $S \\subseteq V$ is 1 if the size of a maximum matching in $G[S]$ meets or exceeds $T$, and 0 otherwise. We first show that for a TCMG, the problems of computing least-core value, finding and verifying least-core payoff are all polynomial time solvable. We also provide a general characterization of the least core for a large class of TCMG. Next, based on Gallai-Edmonds Decomposition in matching theory, we give a concise formulation of the nucleolus for a typical case of TCMG which the threshold $T$ equals 1. When the threshold $T$ is relevant to the input size, we prove that the nucleolus can be obtained in polynomial time in bipartite graphs and graphs with a perfect matching.</p>"
     },
     
     {
        id : "secretary14",
        name : " Solving Multi-choice Secretary Problem in Parallel: An Optimal Observation-Selection Protocol",
        coauthors : new Array(authorList.Xiaoming, authorList.Jialin),
        conference : "ISAAC 2014",
        arxiv : "http://arxiv.org/abs/1405.5975",
        type : "o",
        paperAbstract : "<p>The classical secretary problem investigates the question of how to hire the best secretary from $n$ candidates who come in a uniformly random order.</p><p>In this work we investigate a parallel generalization of this problem introduced by Feldman and Tennenholtz. We call it <em>shared $Q$-queue $J$-choice $K$-best secretary problem</em>. In this problem, $n$ candidates are evenly distributed into $Q$ queues, and instead of hiring the best one, the employer wants to hire $J$ candidates among the best $K$ persons. The $J$ quotas are <em>shared</em> by all queues. This problem is a generalized version of $J$-choice $K$-best problem and has higher practical value as it characterizes the parallel situation.</p><p>Although a few of works have been done about this generalization, to the best of our knowledge, no optimal deterministic protocol was known for general $Q$ queues. In this paper, we provide an optimal deterministic protocol for this problem. The protocol is in the same style of the $1\over e$-solution for the classical secretary problem, but has multiple phases and adaptive criteria. Our protocol is very simple and efficient, and we show that several generalizations, such as the <em>fractional $J$-choice $K$-best secretary problem</em> and <em>exclusive $Q$-queue $J$-choice $K$-best secretary problem</em> can be solved optimally by this protocol with slight modification. Among these generalizations, the second one solves an open problem of Feldman and Tennenholtz.</p><p>In addition, we provide theoretical analysis for two typical cases, including the $K$-best problem and the shared $2$-queue $2$-choice $2$-best problem. For the former, we prove a lower bound $1-O(\\frac{\\ln^2K}{K^2})$ of the competitive ratio. For the latter, we show the optimal competitive ratio is $\\approx0.372$ while the best known result is $\\approx 0.356$ before our work.<p>"
    },

    {
        id : "matching14",
        name : "Computing the Least-core and Nucleolus for Threshold Cardinality Matching Games",
        coauthors : new Array(authorList.Qizhi, authorList.Bo, authorList.Xiaoming, authorList.Jialin),
        conference : "WINE 2014",
        arxiv : "http://arxiv.org/abs/1409.5987",
        type : "g",
        paperAbstract : "<p>Cooperative games provide a framework for fair and stable profit allocation in multi-agent systems. <em>Core</em>, <em>least-core</em> and <em>nucleolus</em> are such solution concepts that characterize stability of cooperation. In this paper, we study the algorithmic issues on the least-core and nucleolus of threshold cardinality matching games (TCMG). A TCMG is defined on a graph $G=(V,E)$ and a threshold $T$, in which the player set is V and the profit of a coalition $S \\subseteq V$ is 1 if the size of a maximum matching in $G[S]$ meets or exceeds $T$, and 0 otherwise. We first show that for a TCMG, the problems of computing least-core value, finding and verifying least-core payoff are all polynomial time solvable. We also provide a general characterization of the least core for a large class of TCMG. Next, based on Gallai-Edmonds Decomposition in matching theory, we give a concise formulation of the nucleolus for a typical case of TCMG which the threshold $T$ equals 1. When the threshold $T$ is relevant to the input size, we prove that the nucleolus can be obtained in polynomial time in bipartite graphs and graphs with a perfect matching.</p>"
    }
);
