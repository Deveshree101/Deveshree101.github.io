---
layout: page
title: Messy Multi-Source Sales Data → One Trusted Table
description: Merged Shopify, Amazon and wholesale orders into one clean table, with every fix logged.
img: assets/img/projects/chart_monthly_revenue.png
importance: 4
category: data-cleaning
github: https://github.com/Deveshree101/data-portfolio/tree/main/02-data-cleaning
---

**Problem.** A small skincare brand sells on Shopify, on Amazon, and to spas by wholesale (orders typed into a spreadsheet by hand). Each source uses different columns, date formats, price text and spellings, so the owner can't answer a basic question: *how much did we actually make each month, by channel?*

**What I built.** A Python cleaning pipeline that merges all three sources into one standard table, fixes every inconsistency, keeps a full **issue log** of what changed, and sets aside rows that can't be trusted instead of guessing.

## Result

- **994 raw rows from 3 sources → 955 clean, validated rows**
- **30 duplicates removed**; test orders and rows with missing quantity set aside for the client to confirm
- **~3,100 fixes logged:** 3 date formats unified, `$1,234.00` / `56.00 USD` text turned into numbers, city and customer spellings merged, SKU codes standardised
- Refunded, cancelled and unpaid orders kept but excluded from revenue: **$106.6K paid revenue**, Jan–Oct 2026

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/chart_issue_log.png" title="Issue log" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/chart_monthly_revenue.png" title="Monthly revenue by channel" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">Left: what the cleaning fixed. Right: paid revenue by month and channel.</div>

**Insight:** wholesale is the largest and most volatile channel. It drove the February and June peaks and nearly vanished in April, so the business depends on a few spa accounts and should track them closely.

**Deliverable:** an Excel workbook with a summary, the clean orders table, the issue log, excluded rows and monthly revenue.

**Tools:** Python, Pandas, Regex, Matplotlib, openpyxl, Excel

*The data is synthetic, modelled on real Shopify and Amazon export formats.*
