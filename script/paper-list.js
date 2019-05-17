var papers = new Array (

	  {
        id : "ads16",
        name : "Delivery Policy to Minimize User Traffic Consumption in Guaranteed Advertising",
        coauthors : new Array(authorList.Zheng, authorList.Qian, authorList.Qiang, authorList.Jialin, authorList.Xiaoming),
        conference : "Manuscript",
        type : "eo",
     },

     {
        id : "sche16-2",
        name : "Online Mechanisms for Reusable Resource Reservation",
        coauthors : new Array(authorList.Tieyan, authorList.Weidong, authorList.Tao, authorList.Xiaoming),
        conference : "Manuscript",
        type : "go"
     },

     {
        id : "sche16-1",
        name : "Randomized Mechanisms for Selling Reserved Instances in Cloud",
        coauthors : new Array(authorList.Weidong, authorList.Tao, authorList.Xiaoming, authorList.Tieyan),
        conference : "Manuscript",
        type : "go"
     },
    
     {
        id : "matching15",
        name : "Computing the Least-core and Nucleolus for Threshold Cardinality Matching Games",
        coauthors : new Array(authorList.Qizhi, authorList.Bo, authorList.Xiaoming, authorList.Jialin),
        conference : "TCS 2015",
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
