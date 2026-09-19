export const personalInfo = {
  name: "Dhwanil Ranpura",
  tagline: "Data Engineer & ML Practitioner",
  description: "Pipelines, models, and dashboards built for production.",
  email: "dhwanil.ranpura@sjsu.edu",
  linkedin: "https://linkedin.com/in/dhwanil-ranpura",
  github: "https://github.com/dhwanil1907",
  resume: "/master_resume.pdf",
  education: {
    university: "San Jose State University",
    degree: "Bachelor of Science in Data Science",
    graduation: "Expected May 2027",
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
    location: "Chicago, IL (Remote)",
    bullets: [
      "Automated data workflows using Microsoft Power Automate, cutting manual processing time by 30%+.",
      "Built Power BI dashboards for 10+ initiatives, enabling faster KPI tracking and more informed stakeholder decisions.",
      "Analyzed operational KPIs across teams to identify inefficiencies, increasing engagement by 15%."
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
    bullets: [
      "Lead a 7-officer team, scaling paid membership 60% (25 → 40 members).",
      "Design Python and SQL workshops for 30+ students culminating in a loan default prediction capstone.",
      "Established annual data competition, engaging 30+ participants across problem design and judging."
    ]
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
      "Collaborated as Mozilla Ambassador to promote ethical computing frameworks across campus."
    ]
  }
];

export const projectsData = [
  {
    title: 'Verdict',
    subtitle: 'AI Startup Validation Platform',
    year: '2026',
    impact: '~60s full diligence memo · 6 parallel API calls · HackHayward 2026',
    description: 'AI-powered startup validation platform built at HackHayward 2026. Founders describe their idea and complete a quick profile survey — Verdict runs 6 parallel live web searches via Perplexity Sonar Pro to return TAM/SAM/SOM sizing, competitor intel, a 4-dimension entry strategy score, and a Go/No-Go verdict with real failure patterns. Includes PDF export, report history, and a Dossier AI chatbot.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Perplexity Sonar Pro', 'Vercel'],
    categories: ['Full-Stack', 'AI/ML'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    github: 'https://github.com/dhwanil1907/Verdict-HackHayward-2026',
    demo: 'https://verdict-hackhayward-2026.vercel.app/',
    image: '/Verdict.png',
  },
  {
    title: 'Financial Data Warehouse Pipeline',
    subtitle: 'Lending Club ETL & Analytics',
    year: '2026',
    impact: '2.26M+ loans loaded · star schema · 28 pytest tests passing',
    description: 'End-to-end Lending Club loan data pipeline with Python, DuckDB, and PySpark. Validates and loads ~2.26M loans into a dimensional warehouse (dim/fact tables), includes 13 SQL analytics queries, optional Spark → Parquet transforms, and a Streamlit dashboard for exploration.',
    tech: ['Python', 'DuckDB', 'PySpark', 'Streamlit', 'Plotly', 'pandas', 'pytest'],
    categories: ['Data Engineering', 'Data Science'],
    gradient: 'from-slate-500 via-zinc-500 to-neutral-600',
    github: 'https://github.com/dhwanil1907/financial-data-warehouse-pipeline',
    image: '/Financial Data Warehouse Pipeline.png',
  },
  {
    title: 'StockSage',
    subtitle: 'Paper Trading Platform with ML Forecasts',
    year: '2026',
    status: 'In Progress',
    impact: '$100K simulated portfolio · ARIMA + NN forecasts · strategy backtesting',
    description: 'Full-stack paper trading platform with live market data, blended ARIMA and neural-network price forecasts (7–90 day horizon), and technical strategy backtesting. React + Express + SQLite for auth and portfolio state; FastAPI + scikit-learn for ML workloads — all orchestrated via Docker Compose.',
    tech: ['React', 'TypeScript', 'FastAPI', 'scikit-learn', 'SQLite', 'Docker'],
    categories: ['Full-Stack', 'AI/ML'],
    gradient: 'from-green-500 via-emerald-500 to-teal-600',
    github: 'https://github.com/dhwanil1907/stock-market-dashboard',
    image: '/StockSage.png',
  },
  {
    title: 'Financial Document RAG',
    subtitle: 'Retrieval-Augmented Q&A over SEC Filings',
    year: '2025',
    impact: 'Metadata-filtered retrieval · cross-encoder rerank · cited Gemini answers',
    description: 'RAG system over financial PDFs (10-K, 10-Q, earnings transcripts). Chunks embedded in ChromaDB with rich metadata, then retrieval narrows the corpus with filters before vector search, re-ranks with a cross-encoder, and generates cited answers via Gemini. Exposed through FastAPI and a Streamlit UI.',
    tech: ['Python', 'FastAPI', 'Streamlit', 'ChromaDB', 'Gemini', 'LangChain'],
    categories: ['AI/ML', 'Data Engineering'],
    gradient: 'from-indigo-500 via-blue-500 to-cyan-600',
    github: 'https://github.com/dhwanil1907/rag-finance',
    image: '/Financial Document RAG.png',
  },
  {
    title: 'Breast Cancer Relapse Prediction',
    subtitle: 'Genomic Machine Learning',
    year: '2025',
    impact: '~0.86 recall · AUC ~0.70 · 5 biomarkers uncovered',
    description: 'End-to-end OOP ML pipeline on the GSE2034 dataset predicting breast cancer relapse from highly-dimensional gene expression data.',
    tech: ['Python', 'Bioinformatics', 'Scikit-learn', 'Pipelines'],
    categories: ['Machine Learning', 'Research'],
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
    github: 'https://github.com/dhwanil1907/CS-123A-Predicting-Breast-Cancer-Relapse-Using-Gene-Expression-and-Machine-Learning',
    image: '/Breast Cancer Relapse Prediction.png',
  },
  {
    title: 'KPI Anomaly Detection System',
    subtitle: 'Automated Insight Generation',
    year: '2025',
    impact: '78% stability · 12–14% meaningful anomalies flagged',
    description: 'End-to-end automated platform replacing manual KPI monitoring with a modular ML pipeline and multi-model anomaly detection backend.',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'FastAPI'],
    categories: ['Machine Learning', 'Data Science'],
    gradient: 'from-cyan-500 via-teal-500 to-emerald-600',
    github: 'https://github.com/dhwanil1907/kpi-anomaly-detector',
    image: '/KPI Anomaly Detection System.png',
  },
  {
    title: 'Commercial Lease Market Forecasting',
    subtitle: 'Predicting Rent Trends',
    year: '2025',
    impact: '92% MAPE · 18% improvement via feature engineering · ASA DataFest Overall Winner',
    description: 'Analyzed 194K+ commercial lease records to identify macroeconomic drivers of rent trends. Earned Overall Winner at ASA DataFest.',
    tech: ['Python', 'R', 'ARIMA', 'Regression'],
    categories: ['Data Science'],
    gradient: 'from-blue-500 via-indigo-500 to-violet-600',
    image: '/Commercial Lease Market Forecasting.png',
  },
  {
    title: 'SafeRoute',
    subtitle: 'AI Safety Navigation System',
    year: '2025',
    impact: '87% model accuracy · 3rd of 91 teams · 40% latency reduction',
    description: 'Full-stack AI web app offering context-aware safety routing from real-time spatio-temporal crime data. Placed 3rd of 91 teams at SJ Hacks.',
    tech: ['React', 'Firebase', 'Mapbox GL', 'Python', 'WebSockets'],
    categories: ['Full-Stack', 'Machine Learning'],
    gradient: 'from-violet-600 via-purple-500 to-indigo-600',
    github: 'https://github.com/dhwanil1907/SafeRoute_SJHacks-2025',
    image: '/SafeRoute.png',
  },
  {
    title: 'SBA Loan Default Prediction',
    subtitle: 'Cost-Sensitive ML Modeling',
    year: '2024',
    impact: '93% accuracy · 0.91+ ROC-AUC · ~$6.8M estimated savings',
    description: 'Credit-risk model predicting SBA loan outcomes using 899K+ historical loans (1987–2014) with cost-based threshold analysis.',
    tech: ['Python', 'Scikit-learn', 'Neural Networks', 'Decision Trees'],
    categories: ['Data Science', 'Machine Learning'],
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    github: 'https://github.com/dhwanil1907/sba-loan-approval-and-default-risk',
    image: '/SBA Loan Default Prediction.png',
  },
  {
    title: 'Credit Risk Scorer',
    subtitle: 'Production-Grade Credit Risk Assessment',
    year: '2025',
    impact: '0.778 ROC-AUC · 300K+ loan applications · SHAP explainability',
    description: 'Production-grade credit risk assessment system trained on the Kaggle Home Credit Default Risk dataset. Combines XGBoost, Random Forest, and Logistic Regression with a two-layer scoring architecture — ML predictions layered with a business rules engine. Features per-applicant SHAP waterfall charts and an interactive Streamlit dashboard with real-time score updates.',
    tech: ['Python', 'XGBoost', 'SHAP', 'Streamlit', 'Scikit-learn', 'Pytest'],
    categories: ['Machine Learning', 'Data Science'],
    gradient: 'from-sky-500 via-blue-500 to-indigo-600',
    github: 'https://github.com/dhwanil1907/credit-risk-scorer',
    image: '/Credit Risk Scorer.png',
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
