---
layout: page
title: Nifty 50 Risk vs Return
description: Five years, fifty stocks, one benchmark. Which large caps actually paid for their risk? (Python + SQL)
img: assets/img/projects/chart_risk_return.png
importance: 1
category: finance
github: https://github.com/Deveshree101/data-portfolio/tree/main/03-nifty50-risk-return
---

**Question.** An investor in India can buy the Nifty 50 index or pick individual large-cap stocks. Over the last five years, which stocks rewarded the extra risk, which sectors lagged, and how bad did the index's own falls get?

**What I built.** A Python + SQL pipeline that downloads five years of daily prices for all 50 Nifty stocks and the index (Nov 2021 – Oct 2026, 62,538 price rows), runs data-quality checks, loads everything into SQLite, and computes CAGR, volatility, Sharpe ratio, beta and maximum drawdown **in SQL** (window functions, CTEs, joins). A pandas recalculation cross-checks every SQL metric.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/chart_risk_return.png" title="Risk vs return" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">Every one of the 50 stocks was more volatile than the index itself.</div>

## Key findings

- **The index returned 5.2% a year at 13.9% volatility**, barely above a ~6% risk-free rate (Sharpe 0.01).
- **All 50 stocks were riskier than the index** (median 25% volatility). Diversification cut risk roughly in half.
- **BSE (88% a year, Sharpe 1.43), BEL and Trent led.** 10 of 50 stocks lost money, including TCS, Infosys, HDFC Bank and Hindustan Unilever.
- **IT and FMCG**, long seen as "safe" large caps, were the only major sectors with a negative average Sharpe.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/chart_sharpe_ranking.png" title="Sharpe ranking" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/chart_sector_sharpe.png" title="Sector Sharpe" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">Left: who was paid for the risk. Right: average Sharpe ratio by sector.</div>

## Data quality

The price feed isn't perfect, so the pipeline checks it before computing anything. It removed holiday filler rows (caught by the SQL-vs-pandas cross-check), back-adjusted prices for the Tata Motors demerger and the Trent split, and kept genuine large moves such as Adani Enterprises in Feb 2023. Stock prices are split-adjusted but not dividend-adjusted, so they compare fairly with the price-only index.

> **Survivorship bias.** These are the stocks in the index *today*. Several were added because they had already risen, so the stock rankings overstate how easy stock-picking was.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/chart_nifty_drawdown.png" title="Nifty 50 drawdown" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">The index's worst fall was −16.5%, in June 2022.</div>

**Tools:** Python, SQL (SQLite window functions, CTEs), Pandas, Matplotlib, yfinance, Excel

*This is an analysis exercise, not investment advice.*
