export const personalInfo = {
  name: "Dhwanil Ranpura",
  tagline: "I find what the numbers are hiding.",
  description: "Financial models, ML pipelines, and visualizations that surface what the data is actually trying to say. Studying Data Science at SJSU and building production systems between classes.",
  email: "dhwanil.ranpura@sjsu.edu",
  linkedin: "https://linkedin.com/in/dhwanil-ranpura",
  github: "https://github.com/dhwanil1907",
  resume: "/master_resume.pdf",
  education: {
    university: "San Jose State University",
    degree: "Bachelor of Science in Data Science",
    graduation: "Expected Dec 2027",
    location: "San Jose, CA"
  }
};

export const navLinks = [
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#work' },
  { name: 'Experience', path: '#experience' },
  { name: 'Contact', path: '#contact' },
];

export const experienceData = [
  {
    role: "Data Automation Intern",
    company: "Language & Culture Worldwide (LCW)",
    type: "Internship",
    date: "Sep 2024 — Feb 2025",
    location: "Remote",
    bullets: [
      "Built Power BI dashboards tracking operational KPIs across 10+ client initiatives, delivering structured analytical deliverables to non-technical stakeholders.",
      "Automated data pipelines with Power Automate, reducing manual processing by 30%+ across multiple business systems.",
      "Cleaned, transformed, and validated datasets from multiple business systems; surfaced trends to inform client strategy.",
    ]
  },
  {
    role: "Documentation Assistant",
    company: "GovAI Coalition",
    type: "Volunteer",
    date: "Dec 2024 — Jan 2025",
    location: "San Jose, CA",
    bullets: [
      "Synthesized insights from national sessions on AI trends, ethical governance, and public sector applications.",
      "Supported responsible AI adoption by organizing ethical considerations for Generative AI Tools."
    ]
  }
];

export const leadershipData = [
  {
    organization: "Spartan Analytics",
    location: "San Jose, CA",
    roles: [
      { title: "President",            date: "Dec 2025 — Present", duration: "4 mos" },
      { title: "Senior Vice President", date: "Jul 2025 — Dec 2025", duration: "6 mos" },
      { title: "VP of Programs",       date: "Dec 2024 — Jul 2025", duration: "8 mos" }
    ],
    description:
      "Lead 7-person executive team; delivered Python and SQL workshops to 30+ students and launched annual data competition for 30+ participants.",
    bullets: []
  },
  {
    organization: "Responsible Computing Club (RCC) at SJSU",
    location: "San Jose, CA",
    roles: [
      { title: "Treasurer",                        date: "Jan 2026 — Present", duration: "3 mos" },
      { title: "Mozilla Student Ambassador — Finance", date: "Jan 2025 — Dec 2025", duration: "1 yr" }
    ],
    bullets: [
      "Managed funding and resource allocation for responsible tech development initiatives.",
      "Collaborated as Mozilla Ambassador to promote ethical computing frameworks across campus.",
    ]
  }
];

export const projectsData = [
  {
    slug: 'credit-risk-scorer',
    title: 'Home Credit Risk Scorer',
    summary: 'Credit default scoring with XGBoost, SHAP explanations and a policy rules engine, served via FastAPI and Streamlit.',
    headline: '0.779 ROC-AUC · 307K applications',
    subtitle: 'XGBoost + SHAP + Policy Guardrails',
    year: '2026',
    impact: '0.779 ROC-AUC · 307K applications · SHAP explainability · rules-based guardrails',
    description: 'End-to-end credit default system on the Home Credit dataset (307,511 applications, 5 joined tables). Compares XGBoost, Random Forest and Logistic Regression with F1-tuned thresholds for the ~8% default rate (XGBoost: 0.779 ROC-AUC, catches ~41% of defaulters). Every prediction gets a SHAP waterfall, and a rules engine caps scores on high debt-to-income, as real lenders do, after the base model rated a 267% DTI borrower Low Risk. Served via Streamlit and FastAPI, with CI and a 30-test pytest suite.',
    tech: ['Python', 'XGBoost', 'SHAP', 'Scikit-learn', 'Streamlit', 'FastAPI', 'GitHub Actions', 'Pytest'],
    categories: ['Machine Learning', 'Data Science'],
    gradient: 'from-sky-500 via-blue-500 to-indigo-600',
    results: {
      metrics: [
        { value: '0.7789', label: 'XGBoost ROC-AUC' },
        { value: '0.7573', label: 'Logistic Regression ROC-AUC' },
        { value: '0.7434', label: 'Random Forest ROC-AUC' },
        { value: '41.2%', label: 'XGBoost recall (defaulters caught)' },
        { value: '27.7%', label: 'XGBoost precision' },
        { value: '0.331', label: 'XGBoost F1 at tuned threshold' },
      ],
      note: 'Held-out 20% test set with F1-tuned thresholds (XGBoost 0.671) for the ~8% default rate. Confusion matrix: TN 51,216, FP 5,322, FN 2,922, TP 2,043. Top Kaggle scores on this competition are about 0.80 AUC.',
    },
    github: 'https://github.com/dhwanil1907/credit-risk-scorer',
    image: '/Credit Risk Scorer.png',
  },
  {
    slug: 'commercial-lease-forecasting',
    title: 'Commercial Lease Market Forecasting',
    summary: 'Rent trend forecasting from 194K+ commercial lease records using ARIMA and regression.',
    headline: '8% MAPE · ASA DataFest 2025 Best Overall Winner',
    subtitle: 'Predicting Rent Trends',
    year: '2025',
    impact: '8% MAPE · ASA DataFest Overall Winner',
    description: 'Analyzed 194K+ commercial lease records to uncover macroeconomic drivers of rent trends. Built ARIMA and regression forecasting models achieving 8% MAPE. Earned Best Overall Winner at ASA DataFest 2025.',
    tech: ['Python', 'R', 'ARIMA', 'Regression'],
    categories: ['Data Science'],
    gradient: 'from-blue-500 via-indigo-500 to-violet-600',
    image: '/Commercial Lease Market Forecasting.png',
  },
  {
    slug: 'financial-data-warehouse',
    title: 'Financial Data Warehouse Pipeline',
    summary: 'Lending Club ETL into a DuckDB star schema, with SQL analytics and a Streamlit dashboard.',
    headline: '2.26M loans · 28 tests passing',
    subtitle: 'Lending Club ETL & Analytics',
    year: '2026',
    impact: '2.26M loans · 11.88% default rate · G-grade defaults 11× A-grade · 28 tests passing',
    description: 'End-to-end Lending Club pipeline: raw CSV → schema-validated extract → star schema (1 fact + 4 dimensions, surrogate keys, idempotent INSERT OR IGNORE loads) in DuckDB, plus an optional PySpark → Parquet path. 13 CTE and window-function SQL queries show default risk rising monotonically from 3.28% (grade A) to 37.48% (grade G). Streamlit dashboard with 4 Plotly charts and a 28-test pytest suite.',
    tech: ['Python', 'DuckDB', 'PySpark', 'Streamlit', 'Plotly', 'pandas', 'pytest'],
    categories: ['Data Engineering', 'Data Science'],
    gradient: 'from-slate-500 via-zinc-500 to-neutral-600',
    results: {
      metrics: [
        { value: '2,260,668', label: 'Loans loaded into fact_loans' },
        { value: '11.88%', label: 'Overall default rate' },
        { value: '3.28%', label: 'Grade A default rate' },
        { value: '37.48%', label: 'Grade G default rate' },
        { value: '≈ $15,047', label: 'Average loan amount' },
        { value: '28', label: 'pytest tests passing' },
      ],
      note: 'Default risk rises monotonically from grade A to G, roughly 11× higher for G than A. Warehouse: 1 fact table and 4 dimensions (90,211 borrowers, 35 grades, 28 purposes, 139 time periods).',
    },
    github: 'https://github.com/dhwanil1907/financial-data-warehouse-pipeline',
    image: '/Financial Data Warehouse Pipeline.png',
  },
  {
    slug: 'proxy-agent-undo',
    title: 'Proxy',
    summary: 'MCP server that catches mistaken agent purchases and bookings, then undoes the whole chain of refunds.',
    headline: '6 of 6 live mistakes caught · YC Hackathon',
    subtitle: 'Undo Layer for AI Agents',
    year: '2026',
    impact: 'MCP server · 6 of 6 live mistakes caught · YC Hackathon · 3-person team',
    description: 'Team project (3) built at the YC hackathon Make Something Agents Want. Proxy is an MCP server that compares the receipts and Stripe charges an AI agent produces against what the human asked for, flags mismatches, and undoes the whole chain by negotiating refunds with merchant agents over Inkbox before the refund window closes. My part: the eval harness and scoreboard (scripted and live-agent layers) and the Northwind store-return scenario. On a live eval with Claude Haiku 4.5, Proxy caught 6 of 6 mistakes with 0 false alarms, versus 3 of 8 noticed by the agent checking its own work. The sample is small, merchants are mocks, and Stripe runs in test mode.',
    tech: ['TypeScript', 'MCP', 'Stripe', 'Inkbox', 'Claude'],
    categories: ['AI/ML', 'Software Engineering', 'Hackathon'],
    gradient: 'from-fuchsia-600 via-purple-600 to-indigo-700',
    github: 'https://github.com/karan6705/proxy',
  },
  {
    slug: 'verdict',
    title: 'Verdict',
    summary: 'AI startup validation: market, competitor and Go/No-Go memo in about a minute from live web research.',
    headline: '~60s memo · HackHayward 2026',
    subtitle: 'AI Startup Validation Platform',
    year: '2026',
    impact: '~60s full diligence memo · 6 parallel API calls · HackHayward 2026',
    description: 'AI startup validation platform built at HackHayward 2026. Describe your idea, answer a quick profile survey — Verdict runs 6 parallel live web searches to return market sizing, competitor intel, a 4-dimension entry strategy score, and a Go/No-Go verdict with real failure patterns. Full PDF export and Dossier AI chatbot included.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Perplexity Sonar Pro', 'Vercel'],
    categories: ['Full-Stack', 'AI/ML', 'Hackathon'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    github: 'https://github.com/dhwanil1907/Verdict-HackHayward-2026',
    image: '/Verdict.png',
  },
  {
    slug: 'saferoute',
    title: 'SafeRoute',
    summary: 'Safety navigation app that maps police-call crime data, with route search, saved trips and incident reporting.',
    headline: '3rd of 91 teams · SJ Hacks 2025',
    subtitle: 'AI Safety Navigation System',
    year: '2025',
    impact: '3rd of 91 teams · SJ Hacks 2025',
    description: 'Full-stack safety navigation app built at SJ Hacks 2025. Visualizes police-call crime data on an interactive Mapbox map, with a Flask/Firestore API for incident reporting, turn-by-turn route search with downloadable directions, and Firebase auth with saved routes. Placed 3rd out of 91 teams.',
    tech: ['React', 'Firebase', 'Mapbox GL', 'Flask', 'Python'],
    categories: ['Full-Stack', 'Machine Learning', 'Hackathon'],
    gradient: 'from-violet-600 via-purple-500 to-indigo-600',
    github: 'https://github.com/dhwanil1907/SafeRoute_SJHacks-2025',
    image: '/SafeRoute.png',
  },
  {
    slug: 'product-analytics-pipeline',
    title: 'Product Analytics & Experimentation Pipeline',
    summary: 'Funnel, cohort, retention and revenue analysis of 885K e-commerce events in a Postgres star schema.',
    headline: '90.9% browse-to-cart drop-off',
    subtitle: 'E-Commerce Funnel & Cohort Analytics',
    year: '2026',
    impact: '885K events ingested · 90.9% browse-to-cart drop-off · 67.8% revenue from top 20%',
    description: 'End-to-end e-commerce analytics pipeline — from 885K raw events to an interactive dashboard with funnel, cohort, retention, and revenue analysis. 4-table star schema across 407K users, 53K products, and 490K sessions.',
    tech: ['Python', 'PostgreSQL', 'Streamlit', 'Plotly'],
    categories: ['Data Engineering', 'Data Science'],
    gradient: 'from-orange-500 via-amber-500 to-yellow-600',
    github: 'https://github.com/dhwanil1907/Product-Analytics-and-Experimentation',
    demo: 'https://ecommerce--analytics.streamlit.app/',
    image: '/Product Analytics pipeline.png',
  },
  {
    slug: 'sba-loan-default',
    title: 'SBA Loan Default Prediction',
    summary: 'Predicts SBA loan charge-offs from 899K loans, comparing five models with class weighting.',
    headline: '93% accuracy · 0.97 ROC-AUC',
    subtitle: 'Charge-Off Risk Modeling',
    year: '2024',
    impact: '93% accuracy · 0.97 ROC-AUC · 899K loans · 5 models compared',
    description: 'Credit-risk model predicting SBA loan outcomes (Paid in Full vs Charged-Off) from 899K+ historical loans (1987–2014). Compared Logistic Regression, Random Forest, kNN, Decision Tree and a Keras neural network with class weighting for the imbalanced charge-off class. Random Forest performed best: ~93% accuracy, ~0.97 ROC-AUC, 0.84 precision and 0.77 recall on charged-offs. Built for the CSU Sacramento Business Analytics Competition 2024.',
    tech: ['Python', 'Scikit-learn', 'TensorFlow/Keras', 'Random Forest', 'Pandas'],
    categories: ['Data Science', 'Machine Learning'],
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    github: 'https://github.com/dhwanil1907/sba-loan-approval-and-default-risk',
    image: '/SBA Loan Default Prediction.png',
  },
  {
    slug: 'financial-document-rag',
    title: 'Financial Document RAG',
    summary: 'Q&A over 10-K, 10-Q and transcripts with metadata-filtered retrieval, reranking and cited Gemini answers.',
    headline: 'Cited answers · reranked retrieval',
    subtitle: 'Retrieval-Augmented Q&A over SEC Filings',
    year: '2026',
    impact: 'Metadata-filtered retrieval · cross-encoder rerank · cited Gemini answers',
    description: 'RAG system over financial PDFs — 10-K filings, 10-Q reports, earnings transcripts. Chunks embedded in ChromaDB with rich metadata, metadata-filtered retrieval narrows the corpus before vector search, a cross-encoder reranks results, and Gemini generates cited answers. FastAPI + Streamlit frontend.',
    tech: ['Python', 'FastAPI', 'Streamlit', 'ChromaDB', 'Gemini', 'LangChain'],
    categories: ['AI/ML', 'Data Engineering'],
    gradient: 'from-indigo-500 via-blue-500 to-cyan-600',
    github: 'https://github.com/dhwanil1907/rag-finance',
    image: '/Financial Document RAG.png',
  },
  {
    slug: 'kpi-anomaly-detection',
    title: 'KPI Anomaly Detector',
    summary: 'Unsupervised anomaly detection on AAPL with five detectors, SHAP explanations and a known-event validation set.',
    headline: '60% Precision@5 vs 15 market events',
    subtitle: 'Unsupervised Anomaly Detection with SHAP',
    year: '2025',
    impact: '5-detector ensemble · 60% Precision@5 vs 15 real market events · SHAP explanations',
    description: 'Unsupervised anomaly detection on 1,950 days of live AAPL data with no labels. Five detectors (Isolation Forest, One-Class SVM, LOF, Z-score, IQR) vote with configurable consensus, flagging 20 anomalous days (1.04%). Validated against 15 documented market events, including the COVID crash and the 2022 Fed hikes: 3 of the top 5 flags matched. Log-return features chosen via ADF stationarity tests, SHAP breakdown for every flagged day, and a Streamlit dashboard.',
    tech: ['Python', 'Scikit-learn', 'SHAP', 'statsmodels', 'yfinance', 'Streamlit', 'Plotly'],
    categories: ['Machine Learning', 'Data Science'],
    gradient: 'from-cyan-500 via-teal-500 to-emerald-600',
    results: {
      metrics: [
        { value: '20 / 1,922', label: 'Consensus anomalies (1.04% of days)' },
        { value: '60%', label: 'Precision@5 vs 15 market events' },
        { value: '50%', label: 'Precision@10' },
        { value: '33.3%', label: 'Recall@10 (5 of 15 events)' },
        { value: '0.236', label: 'Top SHAP feature: Close_pct_change_1' },
        { value: '67%', label: 'Agreement between first and second half splits' },
      ],
      note: 'Top-10 flags caught the COVID crash (Feb 28, Mar 2 and Mar 13, 2020), the May 2019 US-China trade war spike and the July 2020 recovery bounce. The system is tuned for high-confidence flags rather than full coverage, and stability across splits is moderate.',
    },
    github: 'https://github.com/dhwanil1907/kpi-anomaly-detector',
    image: '/KPI Anomaly Detection System.png',
  },
  {
    slug: 'breast-cancer-relapse',
    title: 'Breast Cancer Relapse Prediction',
    summary: 'Gene-expression models predicting breast cancer relapse on an imbalanced 286-patient cohort.',
    headline: '~0.86 recall · ~0.70 AUC',
    subtitle: 'Genomic Machine Learning',
    year: '2025',
    impact: '~0.86 recall · AUC ~0.70 · 5 biomarkers uncovered',
    description: 'End-to-end ML pipeline on the GSE2034 dataset (286 patients, ~22K genes) predicting breast cancer relapse from gene expression. Compared Logistic Regression, Random Forest, RBF SVM and Linear SVM on a 217/69 imbalanced cohort: Logistic Regression and Linear SVM performed best (Linear SVM: ~0.86 recall, ~0.70 AUC), while Random Forest and RBF SVM scored high accuracy but missed relapse entirely. Cross-model importance analysis surfaced 5 candidate biomarker genes. Built on a modular OOP preprocessing pipeline.',
    tech: ['Python', 'Bioinformatics', 'Scikit-learn', 'Pipelines'],
    categories: ['Machine Learning', 'Research'],
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
    github: 'https://github.com/dhwanil1907/CS-123A-Predicting-Breast-Cancer-Relapse-Using-Gene-Expression-and-Machine-Learning',
    image: '/Breast Cancer Relapse Prediction.png',
  },
  {
    slug: 'headroom',
    title: 'Headroom',
    summary: 'macOS menu bar app showing remaining Claude and Cursor usage, with Keychain-stored credentials.',
    headline: 'Native SwiftUI · Keychain-secured',
    subtitle: 'macOS Menu Bar Usage Tracker',
    year: '2026',
    impact: 'Native SwiftUI app · Claude + Cursor usage at a glance · Keychain-secured',
    description: 'Native macOS menu bar app that shows how much usage is left on Claude and Cursor. The menu bar item displays the highest usage percentage across providers, with a per-provider breakdown and lifetime Claude Code token totals read locally. Built in SwiftUI with a pluggable provider architecture, in-app sign-in, and credentials stored in the macOS Keychain.',
    tech: ['Swift', 'SwiftUI', 'macOS', 'Keychain', 'Swift Package Manager'],
    categories: ['Software Engineering'],
    gradient: 'from-slate-600 via-gray-600 to-zinc-700',
    github: 'https://github.com/dhwanil1907/headroom',
  },
  {
    slug: 'msft-direction-prediction',
    title: 'MSFT Next-Day Direction Prediction',
    summary: 'Walk-forward test of next-day direction models after costs, with bootstrap CIs and null tests.',
    headline: 'AUC 0.506–0.516 · no edge after costs',
    subtitle: 'Walk-Forward Backtest with Null Tests',
    year: '2026',
    status: 'In Progress',
    impact: '25 walk-forward folds · 3,150 out-of-sample days · AUC 0.506–0.516 · no edge after costs',
    description: 'Walk-forward test of whether logistic regression and XGBoost can predict MSFT next-day direction after transaction costs. 12 leakage-checked features, 25 expanding-window folds (2013–2026), 5 bps costs, bootstrap confidence intervals, and shuffled-target and timing-shift null tests. Finding: no detectable edge. Pooled AUC is 0.506 / 0.516 with intervals that include 0.5, and neither model beats buy-and-hold on net Sharpe (0.93 / 0.84 vs 0.94), though both cut max drawdown (−31% / −33% vs −37%).',
    tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'yfinance', 'Jupyter'],
    categories: ['Machine Learning', 'Data Science'],
    gradient: 'from-lime-500 via-green-500 to-emerald-600',
    github: 'https://github.com/dhwanil1907/stock-market-price-prediction',
  },
];

export const awardsData = [
  {
    title: 'ASA DataFest 2025 Best Overall Winner',
    issuer: 'American Statistical Association',
    date: 'Mar 2025',
    description: 'Worked with a team to analyze 194K+ commercial lease transactions and uncover macroeconomic trends. Built forecasting models using time-series and regression analysis to identify oversupply risks and predict rent growth, earning Best Overall Winner among 40+ teams.'
  },
  {
    title: 'SafeRoute 3rd Place — Public Safety Track',
    issuer: 'SJ Hacks',
    date: 'Apr 2025',
    description: 'Collaborated with a team to develop SafeRoute, an insight-driven web application integrating geospatial analytics and real-time risk modeling. Built a spatial-temporal risk prediction model using clustering and weighted severity scores, earning 3rd Place out of 91 teams.'
  }
];

export const certificationsData = [
  {
    title: 'Building LLM Applications With Prompt Engineering',
    issuer: 'NVIDIA',
    date: 'Mar 2025',
    credentialId: 'v4rq1bLWQO-q2Ymc5WeYfw',
    url: 'https://learn.nvidia.com/certificates?id=v4rq1bLWQO-q2Ymc5WeYfw',
  },
  {
    title: 'Introduction to Transformer-Based Natural Language Processing',
    issuer: 'NVIDIA',
    date: 'Dec 2024',
    credentialId: 'He2KfYSaRj28w6FgPx1-aA',
    url: 'https://learn.nvidia.com/certificates?id=He2KfYSaRj28w6FgPx1-aA',
  },
  {
    title: 'Accenture — Data Analytics and Visualization Job Simulation',
    issuer: 'Forage',
    date: 'Oct 2024',
    credentialId: 'trcWphttyBXDKSXCr',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_EYSyCjSosZ8RZTju3_1728512365409_completion_certificate.pdf',
    skills: ['Data Analysis'],
  },
];

export const skillsData = [
  {
    category: 'Core Skills',
    skills: ['Python', 'SQL', 'R', 'Machine Learning', 'Data Engineering', 'Statistical Modeling', 'Dashboard Design', 'API Development', 'React', 'TypeScript']
  },
  {
    category: 'Tools & Technologies',
    skills: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Streamlit', 'Power BI', 'Tableau', 'Snowflake', 'AWS', 'FastAPI', 'Next.js', 'Firebase', 'Git', 'Spark', 'Linux', 'Power Automate']
  }
];
