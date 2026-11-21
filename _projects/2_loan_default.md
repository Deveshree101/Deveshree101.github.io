---
layout: page
title: Predicting High-Risk Borrowers
description: Finding patterns in 5,000 borrower records to help a fintech lender spot likely defaulters early.
img: assets/img/projects/loan_eda_bivariate_default_vs_income_source.png
importance: 2
category: finance
github: https://github.com/Deveshree101/loan-default-prediction-analytics
---

**Problem.** Lenders struggle to predict repayment among low-income borrowers, who often have irregular incomes and no formal credit history. That leads to higher default risk and less access to credit for this group.

**What I did.** Simulating a fintech lending scenario, I built a 5,000-row borrower dataset (age, loan amount, income level, income source, repayment status) with Python, cleaned it, and ran univariate, bivariate and multivariate exploratory analysis in Pandas, Matplotlib and Seaborn.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/loan_eda_bivariate_default_vs_income_source.png" title="Default by income source" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/loan_eda_bivariate_default_vs_income_level.png" title="Default by income level" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">Daily-wage earners and low-income borrowers default far more often than salaried borrowers.</div>

## Findings

- **Income source is the strongest signal:** daily-wage earners default much more often than salaried or pension borrowers.
- **Income level compounds it:** low-income borrowers carry most of the default risk.
- **Recommendation:** a simple risk score built on income source and income level, so lenders can flag high-risk applications early and adjust loan size or follow-up instead of rejecting outright.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/loan_eda_multivariate_1.png" title="Multivariate view" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

**Tools:** Python, Pandas, NumPy, Matplotlib, Seaborn, SQLite, Jupyter
