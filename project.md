# Dhwanil Ranpura: Project Bullets for Resume

Context file. Each project has resume-ready bullets and a "Do not claim" list.
Use only these facts and numbers. Do not round up, merge metrics across projects, or add claims.
Order: the first three are the featured projects on the portfolio site, then the rest.

Rules for using this file:
- Keep numbers exact as written. Do not convert "~0.97" into "97%" or similar.
- Respect the "Do not claim" lines. They exist because earlier site copy overstated these projects and was corrected.
- Team projects say so. Keep the "my part" wording where it is given.
- `[verify]` marks anything not confirmed against a repo.

---

## 1. Home Credit Risk Scorer (2026)
Stack: Python, XGBoost, SHAP, Scikit-learn, FastAPI, Streamlit, GitHub Actions, Pytest
Repo: https://github.com/dhwanil1907/credit-risk-scorer

- Built an end-to-end credit default scoring system on 307,511 Home Credit loan applications (up to 5 joined tables); compared XGBoost, Random Forest and Logistic Regression with F1-tuned thresholds for the ~8% default rate. XGBoost performed best: 0.779 ROC-AUC, 41.2% recall, 27.7% precision on a held-out 20% test set.
- Added a SHAP explainability layer (global summary and per-applicant waterfall) and a rules-based guardrails engine that caps scores on debt-to-income and overdue history, after the base model rated a borrower with 267% debt-to-income as Low Risk.
- Served the model through a FastAPI scoring API with input validation and a Streamlit dashboard that shows the raw score, the policy-adjusted score and the triggered rules; GitHub Actions CI runs ruff and 30 pytest tests on every push.
- Kept train and serve features consistent by reusing the same encoding and feature-engineering functions in the API and adding interaction features (`EXT_MEAN x ANNUITY_INCOME_RATIO`, `DEBT_STRESS`).

Do not claim: Docker (there is no Dockerfile); beating top Kaggle scores (top is about 0.80 AUC); production deployment.

---

## 2. Commercial Lease Market Forecasting (2025)
Stack: Python, R, ARIMA, Regression
Repo: none `[verify]` Numbers below come from the portfolio site, not a repo.

- Analyzed 194K+ commercial lease records to identify the macroeconomic drivers of rent trends.
- Built ARIMA and regression forecasting models that reached 8% MAPE.
- Earned Best Overall Winner at ASA DataFest 2025.

Do not claim: anything beyond the three bullets above until it is checked against the project files.

---

## 3. Financial Data Warehouse Pipeline (2026)
Stack: Python, DuckDB, PySpark, Streamlit, Plotly, pandas, pytest, uv
Repo: https://github.com/dhwanil1907/financial-data-warehouse-pipeline

- Built an ETL pipeline that loads 2,260,668 Lending Club loans from raw CSV into a star-schema DuckDB warehouse (1 fact table, 4 dimensions, surrogate keys, idempotent `INSERT OR IGNORE` loads), with schema validation and data-quality checks at the extract stage.
- Wrote 13 analytical SQL queries using CTEs and window functions; showed default risk rising monotonically from 3.28% (grade A) to 37.48% (grade G), about 11x, against an overall default rate of 11.88%.
- Delivered a Streamlit dashboard with 4 Plotly charts and an optional PySpark-to-Parquet path; 28 passing pytest tests and a reproducible setup with uv.

Do not claim: production or cloud warehouse deployment; Spark results (the Spark path is optional and its 5 tests are skipped without a JDK).

---

## 4. Proxy: Undo Layer for AI Agents (2026), YC hackathon, team of 3
Stack: TypeScript, MCP, Stripe (test mode), Inkbox, Claude
Repo: https://github.com/karan6705/proxy (teammates: Karan Raval, Sarah Khadder)

- Co-built Proxy at the YC "Make Something Agents Want" hackathon, an MCP server that compares the receipts and Stripe charges an AI agent produces with what the human asked for, flags mismatches, and undoes the whole chain by negotiating refunds with merchant agents over Inkbox before the refund window closes.
- My part: built the eval harness and results scoreboard (a scripted layer of 34 scenarios and a live-agent layer with Claude Haiku 4.5, 25 episodes per arm) and the Northwind store-return scenario (support agent, return form, shipping label, refund after carrier scan).
- In the live-agent eval, Proxy caught 6 of 6 mistakes with 0 false alarms, while the agent checking its own work noticed 3 of 8 episodes that had mistakes.

Do not claim: a hackathon placement (none is recorded); core server, orchestration or deployment work as mine; real money or real merchants (merchants are mocks, Stripe is test mode). The live eval is small (5 tasks x 5 trials) and the two arms made different mistakes, so compare rates, not totals. The scripted comparison (39 of 44 vs 1 of 44) uses a scripted self-review as the baseline, so it is not a measured miss rate and should not be quoted as one.

---

## 5. Verdict: AI Startup Validation Platform (2026), HackHayward
Stack: Next.js 15, TypeScript, Tailwind CSS, Perplexity Sonar Pro / Sonar Reasoning Pro, Vercel
Repo: https://github.com/dhwanil1907/Verdict-HackHayward-2026

- Built Verdict, an AI startup-validation platform that produces a first-pass diligence memo in about a minute from 6 parallel live-web API calls: TAM/SAM/SOM market sizing, competitor intel, an entry-strategy score, and a Go / Conditional Go / No-Go verdict with a Devil's Advocate section on real failure patterns.
- Engineered the prompt pipeline: 6-step chain-of-thought market sizing with cited sources, a 4-dimension sub-score system with reference calibration anchors, stripping of reasoning-model `<think>` blocks before JSON parsing, and a server-side verdict re-derived from the computed viability score instead of trusting raw model output.
- Shipped a founder profile survey that personalizes each report, a contextual Dossier AI chatbot, PDF export, and saved report history; deployed on Vercel.

Do not claim: users, revenue or a hackathon placement (none recorded); Supabase auth (storage is localStorage). `[verify]` team size and your exact role.

---

## 6. SafeRoute (2025), SJ Hacks, 3rd of 91 teams
Stack: React, Mapbox GL, Firebase, Flask, Python
Repo: https://github.com/dhwanil1907/SafeRoute_SJHacks-2025 (Team 44: Dhwanil Ranpura, David Song, Krishiv Haranath)

- Co-built SafeRoute, a safety navigation app, in a 3-person team at SJ Hacks 2025 and placed 3rd out of 91 teams.
- The app plots police-call crime data on an interactive Mapbox map and offers route search with turn-by-turn directions, downloadable directions, and saved routes stored per user in Firebase.
- The backend is a Flask and Firestore REST API for incident reports (create, read, update, delete, type filtering, pagination, field validation) with a pandas CSV import for crime data.

Do not claim: a clustering or weighted-severity risk model; routing that avoids crime (the "safest route" is the standard Mapbox driving route); real-time or WebSocket alerts (notifications are a print-only stub). `[verify]` which parts you personally built.

---

## 7. Product Analytics and Experimentation Pipeline (2026)
Stack: Python, PostgreSQL, Streamlit, Plotly
Repo: https://github.com/dhwanil1907/Product-Analytics-and-Experimentation
Demo: https://ecommerce--analytics.streamlit.app/

- Loaded 885,129 e-commerce events (407,283 users, 53,453 products, 490,398 sessions) into PostgreSQL and modeled a 4-table star schema (`dim_products`, `dim_users`, `fct_sessions`, `fct_events`), with 7 documented cleaning decisions including removal of 837 duplicate events.
- Built funnel, weekly-cohort, retention and revenue-segment analyses in SQL: 5.24% of viewers purchase, 90.9% never add to cart, and the $200-$500 price band shows the highest view-to-cart rate (14.27%) but a lower cart-to-purchase close (49.67%).
- Found that the top 20% of buyers drive 67.77% of revenue and that first purchases between $50 and $500 repeat at the highest rates (about 36-37%); recommended a 24-hour re-engagement nudge after product views instead of optimizing checkout.
- Published the analysis as an interactive Streamlit dashboard.

Do not claim: A/B testing or experiments (the project is observational analysis despite "Experimentation" in the title).

---

## 8. SBA Loan Default Prediction (2024), team of 2
Stack: Python, Scikit-learn, TensorFlow/Keras, Pandas
Repo: https://github.com/dhwanil1907/sba-loan-approval-and-default-risk (with Santhosh Ravindrabharathy)

- Modeled SBA loan outcomes (Paid in Full vs Charged-Off) on about 899K loans from 1987-2014 for the CSU Sacramento Business Analytics Competition 2024, as a team of two.
- Cleaned the data and reduced 27 features to 17, removing post-outcome leakage features (for example `ChgOffDate`), and engineered `IsFranchise`, `SameState` and an industry grouping from NAICS codes.
- Compared Logistic Regression, Random Forest, kNN, Decision Tree and a Keras neural network with class weighting for the minority charged-off class; Random Forest was best at about 93% accuracy and about 0.97 ROC-AUC, with about 0.84 precision and 0.77 recall on charged-off loans.

Do not claim: "$6.8M estimated savings" (it came from a placeholder cost matrix with made-up values on the Decision Tree, not real dollars); cost-sensitive learning or threshold tuning (the README lists these as future work); a competition placement (the team did not win).

---

## 9. Financial Document RAG (2026)
Stack: Python, FastAPI, Streamlit, ChromaDB, Gemini, LangChain
Repo: https://github.com/dhwanil1907/rag-finance

- Built a retrieval-augmented Q&A system over financial PDFs (10-K, 10-Q, earnings transcripts): pdfplumber parsing, 1024/128 chunking, Google `gemini-embedding-001` embeddings, and a persistent ChromaDB store with per-chunk metadata (company, ticker, fiscal period, filing date, sector).
- Narrowed the corpus with metadata filters before vector search, then re-ranked candidates with a cross-encoder (`ms-marco-MiniLM-L-6-v2`) before Gemini 1.5 Flash generated answers with citations.
- Exposed the pipeline through a FastAPI `/query` service and a Streamlit UI with filing, sector and date-range filters.

Do not claim: retrieval accuracy, latency or evaluation numbers (none exist in the repo).

---

## 10. KPI Anomaly Detector (2025)
Stack: Python, Scikit-learn, SHAP, statsmodels, yfinance, Streamlit, Plotly
Repo: https://github.com/dhwanil1907/kpi-anomaly-detector

- Built an unsupervised anomaly detection system on 1,950 trading days of AAPL data (Jan 2019 - Oct 2026) using 5 detectors (Isolation Forest, One-Class SVM, Local Outlier Factor, Z-score, IQR) with configurable consensus voting; consensus flagged 20 of 1,922 days (1.04%).
- Validated against 15 documented market events with no labeled training data: Precision@5 of 60%, Precision@10 of 50% and Recall@10 of 33.3%; top flags caught the Feb-Mar 2020 COVID crash days, the May 2019 trade-war spike and the July 2020 rebound.
- Chose log-return features using ADF stationarity tests (raw Close p = 0.9476, non-stationary; log returns p < 0.0001, stationary), added SHAP explanations for every flagged day (top feature `Close_pct_change_1`, importance 0.236), and shipped a Streamlit dashboard with severity labels and CSV export.

Do not claim: high recall or full coverage (recall@10 is 33.3% and model stability between half-splits is only 67%); tuned for precision, not coverage.

---

## 11. Breast Cancer Relapse Prediction (2025), course project (CS 123A)
Stack: Python, Scikit-learn, pandas, Graphviz
Repo: https://github.com/dhwanil1907/CS-123A-Predicting-Breast-Cancer-Relapse-Using-Gene-Expression-and-Machine-Learning

- Built a modular, object-oriented preprocessing pipeline (`GSE2034Pipeline`) for the GSE2034 gene-expression dataset (286 patients, about 22,000 genes; 217 non-relapse, 69 relapse): GEO matrix parsing, variance filtering, train/test split and scaling.
- Compared Logistic Regression, Random Forest, RBF SVM and Linear SVM on the imbalanced cohort; Logistic Regression and Linear SVM performed best (Linear SVM: F1 about 0.57, recall about 0.86, AUC about 0.70), while Random Forest (about 0.76 accuracy) and the RBF SVM scored F1 = 0 on relapse, showing that accuracy misleads on imbalanced data.
- Identified 5 candidate biomarker genes that appear in both the top-100 Logistic Regression coefficients and the top-100 Random Forest importances (203218_at, 218787_x_at, 222077_s_at, 209380_s_at, 219756_s_at).

Do not claim: clinical validity (no external validation cohort; microarray batch effects possible); the 0.86 recall for Logistic Regression specifically (the README gives it for Linear SVM). `[verify]` team size.

---

## 12. Headroom (2026)
Stack: Swift, SwiftUI, macOS, Keychain, Swift Package Manager
Repo: https://github.com/dhwanil1907/headroom

- Built a native macOS menu bar app (SwiftUI `MenuBarExtra`, macOS 14+) that shows how much usage remains on Claude and Cursor: the menu bar item displays the highest usage percentage across providers, with a per-provider breakdown on click.
- Read usage from the Claude and Cursor web APIs using a browser session cookie obtained through an in-app login window, stored in the macOS Keychain and read once per launch.
- Added lifetime Claude Code token totals read locally from `~/.claude/stats-cache.json`, and a pluggable provider architecture (a `UsageProvider` protocol and `ProviderRegistry`) with provider unit tests.

Do not claim: users, downloads, or an App Store release (it builds as an ad-hoc signed local app); the web endpoints are not official public APIs.

---

## 13. MSFT Next-Day Direction Prediction (2026), in progress
Stack: Python, XGBoost, Scikit-learn, pandas, yfinance, Jupyter
Repo: https://github.com/dhwanil1907/stock-market-price-prediction

- Built a walk-forward evaluation of next-day MSFT direction models on 4,232 daily bars (2010-2026): 12 leakage-checked features, 25 expanding-window folds, 3,150 out-of-sample test days (2013-2026), and 5 bps transaction costs.
- Found no detectable edge: pooled AUC of 0.506 (Logistic Regression) and 0.516 (XGBoost) with 95% bootstrap intervals that include 0.5 (0.484-0.526 and 0.496-0.535); net Sharpe of 0.93 and 0.84 against 0.94 for buy-and-hold; max drawdown of -31% and -33% against -37%.
- Stress-tested the result with 21-day block bootstrap confidence intervals, shuffled-target and timing-shift null tests, a 0-20 bps cost-sensitivity table, and a 200-day moving-average regime split.

Do not claim: a profitable or predictive model (the finding is negative); an LSTM, a dashboard, a scoring API, or a green CI (not built or not verified); that `outputs/metrics.csv` exists (it does not yet, and the README results are unfilled). Single stock chosen with hindsight, so results carry survivorship bias.
