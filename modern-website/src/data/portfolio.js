import { Map, BarChart2, Briefcase, TrendingUp, Presentation, Users, Rocket, Database, Layout, Lightbulb, Code2, BrainCircuit, LayoutTemplate, Wrench } from 'lucide-react';

export const personalInfo = {
  name: "Dhwanil Ranpura",
  tagline: "Data Science Student & Builder",
  description: "Specializing in designing machine learning systems and full-stack data products that solve real-world problems.",
  email: "dhwanil.ranpura@sjsu.edu",
  linkedin: "https://linkedin.com/in/dhwanil-ranpura",
  github: "https://github.com/dhwanil1907",
  education: {
    university: "San Jose State University",
    degree: "Bachelor of Science in Data Science",
    graduation: "Expected May 2027",
    location: "San Jose, CA"
  }
};

export const navLinks = [
  { name: 'About', path: '#about' },
  { name: 'Experience', path: '#experience' },
  { name: 'Leadership', path: '#leadership' },
  { name: 'Projects', path: '#projects' },
  { name: 'Awards', path: '#awards' },
  { name: 'Skills', path: '#skills' },
];

export const experienceData = [
  {
    role: "Data Automation Intern",
    company: "Language & Culture Worldwide (LCW)",
    date: "Sep 2024 — Feb 2025",
    location: "Chicago, IL (Remote)",
    bullets: [
      "Automated data workflows using Microsoft Power Automate, streamlining recurring operational processes and cutting manual processing time by 30%+.",
      "Built Power BI dashboards for 10+ initiatives, enabling faster KPI tracking, clearer insights, and more informed stakeholder decisions.",
      "Analyzed operational KPIs across teams to identify inefficiencies and bottlenecks, increasing engagement by 15%."
    ]
  },
  {
    role: "Documentation Assistant",
    company: "GovAI Coalition",
    date: "Dec 2024 — Jan 2025",
    location: "San Jose, CA",
    bullets: [
      "Synthesized insights from national sessions on AI trends, ethical governance, and public sector applications.",
      "Supported responsible AI adoption by organizing ethical considerations concerning Generative AI Tools."
    ]
  }
];

export const leadershipData = [
  {
    organization: "Spartan Analytics",
    location: "San Jose, CA",
    roles: [
      { title: "President", date: "Dec 2025 — Present", duration: "4 mos" },
      { title: "Senior Vice President", date: "Jul 2025 — Dec 2025", duration: "6 mos" },
      { title: "VP of Programs", date: "Dec 2024 — Jul 2025", duration: "8 mos" }
    ],
    bullets: [
      "Direct a team of 7 officers, overseeing recruitment strategy and execution to scale club membership by 60% (25 -> 40 paid members).",
      "Designed and delivered Python and SQL workshops for 30+ students, culminating in a loan default prediction capstone.",
      "Established an annual data competition, designing problem statements, evaluation criteria, and judging workflows to engage 30+ participants."
    ]
  },
  {
    organization: "Responsible Computing Club (RCC) at SJSU",
    location: "San Jose, CA",
    roles: [
      { title: "Treasurer", date: "Jan 2026 — Present", duration: "3 mos" },
      { title: "Mozilla Student Ambassador - Finance", date: "Jan 2025 — Dec 2025", duration: "1 yr" }
    ],
    bullets: [
      "Managed funding and resource allocation to support club initiatives focusing on responsible tech development.",
      "Collaborated as a Mozilla Ambassador to promote ethical computing frameworks across campus."
    ]
  }
];

export const projectsData = [
  {
    title: 'SafeRoute',
    subtitle: 'AI Safety Navigation System',
    description: 'A full-stack AI web application offering context-aware safety routing based on real-time spatio-temporal crime data. Placed 3rd out of 91 teams in a judged hackathon.',
    details: [
      'Built a full-stack AI web application (React frontend, Firebase backend) from conception to shipped product.',
      'Shipped real-time route alerts via WebSockets, reducing notification latency by 40%.',
      'Boosted model performance to 87% accuracy with crowdsourced inputs.'
    ],
    tech: ['React', 'Firebase', 'Mapbox GL', 'Python', 'WebSockets'],
    categories: ['Full-Stack', 'Machine Learning'],
    github: '#',
    demo: '#'
  },
  {
    title: 'KPI Anomaly Detection System',
    subtitle: 'Automated Insight Generation',
    description: 'An end-to-end automated platform that replaces manual KPI monitoring with a modular ML pipeline and multi-model anomaly detection backend.',
    details: [
      'Analyzes business metrics automatically using unsupervised models (Isolation Forest, One Class SVM, LOF).',
      'Achieved 78% stability across time splits, identifying 12-14% meaningful anomalies indicating strong unsupervised performance.',
      'Shipped a Streamlit + FastAPI prototype as the user-facing product for non-technical stakeholders.'
    ],
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'FastAPI'],
    categories: ['Machine Learning', 'Data Science'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Breast Cancer Relapse Prediction',
    subtitle: 'Genomic Machine Learning',
    description: 'End-to-end OOP-based machine learning pipeline on the GSE2034 dataset to predict breast cancer relapse from highly-dimensional gene expression data.',
    details: [
      'Applied rigorous preprocessing and evaluated multiple models, prioritizing recall and F1-score to handle class imbalance.',
      'Logistic Regression and Linear SVM achieved ~0.86 recall for relapse with AUC ~0.70.',
      'Uncovered five overlapping, biologically meaningful genes across models as potential relapse biomarkers.'
    ],
    tech: ['Python', 'Bioinformatics', 'Machine Learning', 'Pipelines'],
    categories: ['Machine Learning', 'Research'],
    github: '#'
  },
  {
    title: 'SBA Loan Default Prediction',
    subtitle: 'Cost-Sensitive ML Modeling',
    description: 'Built a credit-risk model to predict whether SBA loans would be paid back in full or charged off using 899K+ historical loans (1987–2014).',
    details: [
      'Tuned a cost-sensitive Decision Tree achieving 93% accuracy with 0.91+ ROC-AUC.',
      'Completed a cost-based threshold analysis to roughly estimate $6.8M in potential savings by reducing risky approvals.',
      'Compared predictive metrics directly with business financial impact.'
    ],
    tech: ['Python', 'Scikit-learn', 'Neural Networks', 'Decision Trees'],
    categories: ['Data Science', 'Machine Learning'],
    github: '#'
  },
  {
    title: 'Commercial Lease Market Forecasting',
    subtitle: 'Predicting Rent Trends',
    description: 'Analyzed 194K+ commercial lease records to identify macroeconomic drivers of rent trends across the market. Earned Overall Winner at ASA DataFest.',
    details: [
      'Built ARIMA and regression forecasting models, achieving 92% accuracy (MAPE).',
      'Improved forecast performance by 18% using targeted feature engineering.',
      'Extracted actionable insights regarding market volatility.'
    ],
    tech: ['Python', 'R', 'ARIMA', 'Regression'],
    categories: ['Data Science'],
    github: '#'
  }
];

export const awardsData = [
  {
    title: 'ASA DataFest 2025 Best Overall Winner',
    issuer: 'American Statistical Association',
    date: 'Apr 2025',
    description: 'Worked with a team to analyze 194K+ commercial lease transactions and uncover macroeconomic trends. Built forecasting models using time-series and regression analysis to identify oversupply risks and predict rent growth, earning Best Overall Winner among 40+ teams.'
  },
  {
    title: 'SafeRoute 3rd Place - Public Safety Track',
    issuer: 'SJ Hacks',
    date: 'Apr 2025',
    description: 'Collaborated with a team to develop SafeRoute, an insight-driven web application that integrates geospatial analytics and real-time risk modeling. Built a spatial-temporal risk prediction model using clustering and weighted severity scores, earning 3rd Place out of 91 teams.'
  }
];

export const skillsData = [
  {
    category: 'Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'Java', 'R', 'HTML', 'CSS']
  },
  {
    category: 'Machine Learning & AI',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenAI API', 'LLMs', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
  },
  {
    category: 'Frontend & Backend',
    skills: ['React', 'FastAPI', 'Flask', 'Firebase', 'Streamlit', 'WebSockets', 'Tailwind CSS']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Power BI', 'Tableau', 'Snowflake', 'MySQL', 'AWS', 'Git', 'GitHub', 'Power Automate']
  }
];
