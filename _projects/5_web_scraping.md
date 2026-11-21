---
layout: page
title: Web Scraping → Analysis-Ready Dataset
description: Scraped 1,000 products from 50 categories, then cleaned, validated and exported them to Excel.
img: assets/img/projects/chart_top_categories.png
importance: 5
category: data-cleaning
github: https://github.com/Deveshree101/data-portfolio/tree/main/01-web-scraping
---

**Problem.** A client needs every product from a catalogue website (title, category, price, rating, stock) in one clean spreadsheet, without copy-pasting 1,000 items by hand.

**What I built.** A Python scraper that walks all 50 categories of [books.toscrape.com](https://books.toscrape.com) (a public sandbox made for scraping practice), follows pagination with polite delays and retries, then cleans, validates and exports the data.

## Result

- **1,000 products from 50 categories** in about a minute
- **0 duplicates, 0 missing prices, 0 missing ratings** after validation
- **219 products (22%) sat under placeholder categories** on the source site; I flagged them as *Uncategorised* so they don't distort category analysis
- Delivered as CSV plus a 3-sheet Excel workbook (clean data, category summary, validation report)

| Raw (as scraped) | Clean |
|---|---|
| `"£45.17"` (text) | `45.17` (number) + price band |
| `"Two"` | `2` |
| `"In stock"` | `True` |
| `"Add a comment"` | `"Uncategorised"` |

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/chart_avg_price_by_category.png" title="Average price by category" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/chart_price_by_rating.png" title="Average price by rating" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

**Insight:** star rating barely moves price (£34.6 average for 1-star vs £35.4 for 5-star), so on this catalogue price is not a quality signal.

**Tools:** Python, Requests, BeautifulSoup, Pandas, Matplotlib, openpyxl

*I only scrape publicly available data, respect site terms and rate limits, and don't collect personal data.*
