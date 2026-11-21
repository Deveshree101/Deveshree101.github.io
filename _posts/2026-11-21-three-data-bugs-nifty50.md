---
layout: post
title: Three data bugs that almost fooled my Nifty 50 analysis
date: 2026-11-21 18:00:00
description: Before computing a single Sharpe ratio, I had to catch a fake holiday, a demerger and a split the price feed missed.
tags: [SQL, Python, finance, data-quality]
categories: projects
---

I wanted to answer a simple question: **over the last five years, which Nifty 50 stocks actually paid investors for the extra risk they took on, compared with just buying the index?**

The maths is not the hard part. CAGR, volatility, Sharpe ratio, beta and maximum drawdown are a few lines of SQL each. The hard part was making sure the 62,538 daily prices underneath them were telling the truth. Here are the three problems I found, and how I caught them.

## 1. A trading day that never happened

I compute every metric twice: once in SQL (window functions and CTEs in SQLite) and once in pandas. If volatility or beta differ by more than 0.001, the run stops.

On the first run, it stopped.

The cause was **15 January 2026**, an exchange holiday. The price feed had quietly repeated the previous close for all 50 stocks on that day, but not for the index. So the stocks had one extra "trading day" with a 0% return, and every stock-vs-index comparison was off by a little.

**Fix:** remove those 50 filler rows so every stock trades on the index's calendar. Without the cross-check, I would never have seen it: the numbers looked perfectly reasonable.

## 2. A 40% crash that wasn't a crash

Tata Motors showed a **−40% one-day fall** on 14 October 2025. That would wreck its volatility and drawdown figures.

It wasn't a crash. It was the **demerger** of the commercial-vehicle business: value moved out of one share and into a new company's shares. Shareholders didn't lose 40%.

**Fix:** back-adjust the earlier prices by the ratio on that day, so the series measures the business and not the corporate action. I noted the assumption (that the stock was otherwise flat that day) in the data-quality log.

## 3. A split the feed recorded on the wrong date

Trent's price dropped by exactly **1/1.5** on 1 January 2026, the signature of a bonus issue. The feed did record the 1.5 split, but on **4 June 2026**, five months later, so its "adjusted" prices never actually adjusted for it.

**Fix:** back-adjust the earlier prices by 1/1.5 myself.

Not every big move is an error, though. Adani Enterprises really did fall more than 25% in a day in early February 2023, after the short-seller report. I kept those days and listed them as **checked, real**. Cleaning data means removing what's wrong, not what's inconvenient.

## One more trap: dividends

The Nifty 50 index (^NSEI) is **price-only**. If I used dividend-adjusted stock prices, every stock would get a head start the index doesn't get. So I used split-adjusted but **not** dividend-adjusted prices, and both sides are measured the same way.

## What the clean data showed

{% include figure.liquid loading="eager" path="assets/img/projects/chart_risk_return.png" class="img-fluid rounded z-depth-1" %}

- **The index returned 5.2% a year at 13.9% volatility.** That's barely above a ~6% risk-free rate.
- **Every single stock was more volatile than the index** (median 25%). Diversification cut risk roughly in half.
- **BSE** led (88% a year, Sharpe 1.43), followed by **BEL** and **Trent**.
- **10 of 50 stocks lost money** over five years, including TCS, Infosys, HDFC Bank and Hindustan Unilever.
- **IT and FMCG**, the "safe" large caps, had the worst risk-adjusted returns of any sector.

## The caveat I put above the results

These are the 50 stocks in the index **today**. Several of the winners joined the index *because* they had already risen, and the stocks that dropped out aren't in the data. That's **survivorship bias**, and it makes stock-picking look easier than it was. A fair test would use the index as it stood in November 2021. I'd rather say that up front than let a chart oversell the result.

## What I took away

1. **Compute it twice.** The SQL-vs-pandas check found a bug that no chart would have shown.
2. **Big moves need a reason.** Every one-day move over 25% got a label: corporate action (fixed) or real event (kept).
3. **Write the caveats down.** A short data-quality log makes the analysis something other people can trust.

The full project (SQL, Python, Excel output and charts) is on the [projects page]({{ '/projects/1_nifty50/' | relative_url }}) and on [GitHub](https://github.com/Deveshree101/data-portfolio/tree/main/03-nifty50-risk-return).

_This is an analysis exercise, not investment advice._
