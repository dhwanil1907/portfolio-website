export const personalInfo = {
  name: "Dhwanil Ranpura",
  tagline: "Data Engineer & ML Practitioner",
  description: "Pipelines, models, and dashboards built for production.",
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
  { name: 'About',      path: '#about' },
  { name: 'Experience', path: '#experience' },
  { name: 'Work',       path: '#work' },
  { name: 'Leadership', path: '#leadership' },
  { name: 'Awards',     path: '#awards' },
  { name: 'Certificates', path: '#certifications' },
  { name: 'Contact',    path: '#contact' },
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
    type: "Internship",
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
      "Directed 7-officer team, scaling paid membership 60% (25 → 40 members).",
      "Designed Python and SQL workshops for 30+ students culminating in a loan default prediction capstone.",
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
    impact: '~60s full diligence memo · 6 parallel API calls · HackHayward 2026 3rd Place',
    description: 'AI-powered startup validation platform built at HackHayward 2026. Founders describe their idea and complete a quick profile survey — Verdict runs 6 parallel live web searches via Perplexity Sonar Pro to return TAM/SAM/SOM sizing, competitor intel, an entry strategy score, and a Go/No-Go verdict with real failure patterns. Includes PDF export, report history, and a Dossier AI chatbot.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Perplexity Sonar Pro', 'Vercel'],
    categories: ['Full-Stack', 'AI/ML'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    github: 'https://github.com/dhwanil1907/Verdict-HackHayward-2026',
    demo: 'https://verdict-hackhayward-2026.vercel.app/',
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
  },
  {
    title: 'KPI Anomaly Detection System',
    subtitle: 'Automated Insight Generation',
    year: '2024',
    impact: '78% stability · 12–14% meaningful anomalies flagged',
    description: 'End-to-end automated platform replacing manual KPI monitoring with a modular ML pipeline and multi-model anomaly detection backend.',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'FastAPI'],
    categories: ['Machine Learning', 'Data Science'],
    gradient: 'from-cyan-500 via-teal-500 to-emerald-600',
    github: 'https://github.com/dhwanil1907/kpi-anomaly-detector',
  },
  {
    title: 'Breast Cancer Relapse Prediction',
    subtitle: 'Genomic Machine Learning',
    year: '2024',
    impact: '~0.86 recall · AUC ~0.70 · 5 biomarkers uncovered',
    description: 'End-to-end OOP ML pipeline on the GSE2034 dataset predicting breast cancer relapse from highly-dimensional gene expression data.',
    tech: ['Python', 'Bioinformatics', 'Scikit-learn', 'Pipelines'],
    categories: ['Machine Learning', 'Research'],
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
    github: 'https://github.com/dhwanil1907/CS-123A-Predicting-Breast-Cancer-Relapse-Using-Gene-Expression-and-Machine-Learning',
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
  }
];

export const awardsData = [
  {
    title: 'Verdict 3rd Place — HackHayward 2026',
    issuer: 'HackHayward',
    date: 'Mar 2026',
    description: 'Built Verdict, an AI-powered startup validation platform that generates a full diligence memo in ~60 seconds. Leveraged 6 parallel Perplexity Sonar Pro API calls with SSE streaming to deliver TAM/SAM/SOM market sizing, competitor intel, a 4-dimension entry strategy score, and a Go/No-Go verdict personalized to the founder\'s stage, budget, and geography. Placed 3rd overall.'
  },
  {
    title: 'ASA DataFest 2025 Best Overall Winner',
    issuer: 'American Statistical Association',
    date: 'Apr 2025',
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
    skills: ['Python', 'SQL', 'Machine Learning', 'Data Engineering', 'Statistical Modeling', 'Dashboard Design', 'API Development', 'React']
  },
  {
    category: 'Tools & Technologies',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Power BI', 'Tableau', 'Snowflake', 'AWS', 'FastAPI', 'Firebase', 'Git']
  }
];
