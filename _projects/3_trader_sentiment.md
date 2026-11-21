---
layout: page
title: Trader Performance vs Market Sentiment
description: How fear and greed in crypto markets change trader behaviour and profits on Hyperliquid. (SQL + Python)
importance: 3
category: finance
github: https://github.com/Deveshree101/trader_performance-vs-market_sentiment
---

**Question.** Crypto markets run on emotion. Do traders on Hyperliquid (a decentralised perpetual-futures exchange) make or lose more money when the market is fearful or greedy, and are there repeatable patterns behind it?

**What I did.** An end-to-end analysis in **SQL (DuckDB)** and Python on two datasets: trade-level Hyperliquid data and the daily crypto Fear & Greed Index.

1. **Cleaning:** removed rows missing critical fields, de-duplicated, and converted Unix timestamps (seconds and milliseconds) to calendar dates.
2. **Daily metrics:** built a `daily_trader_metrics` view with one row per trader per day: PnL, win rate, average trade size and long/short ratio.
3. **Sentiment merge:** joined trader-days to the Fear & Greed Index across 4 sentiment regimes.
4. **Segmentation:** split traders into frequent vs infrequent, and consistent winners vs high-variance winners vs non-winners, then compared each segment across regimes.

## Key finding

**Frequent traders increase their position sizes during greed phases without improving their win rates.** They take on more risk exactly when the market feels safest, which points to emotion-aware position limits as a practical fix.

**Tools:** SQL (DuckDB), Python, Pandas, Matplotlib
