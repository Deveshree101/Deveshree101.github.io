---
layout: page
title: bookshelf
permalink: /books/
nav: true
nav_order: 4
---

> This is not a list of books I've read. It's a log of mindset shifts. Each entry captures a belief I held, the idea that challenged it and how my thinking evolved. I write this for myself, to remember that my beliefs are not fixed.

{% comment %}
One block per shelf, no sub-headings. Order inside a block:
business first, then other non-fiction, then fiction;
within each of those, highest public rating first.
Each book's `genre` and `rating` live in its file in _books/.
{% endcomment %}

{% assign genres = "business,nonfiction,fiction" | split: "," %}

## Books I've read

<ul>
{% for g in genres %}
{% assign books = site.books | where: "shelf", "finished" | where: "genre", g | sort: "rating" | reverse %}
{% for item in books %}
  <figure class="cover">
    <a class="cover-link" href="{{ item.url | relative_url }}">
      <img alt="{{ item.title }} cover" src="{{ item.cover | relative_url }}" style="height:200px" loading="lazy">
      <figcaption class="finished">FINISHED</figcaption>
    </a>
  </figure>
{% endfor %}
{% endfor %}
</ul>

## On my wishlist

<ul>
{% for g in genres %}
{% assign books = site.books | where: "shelf", "wishlist" | where: "genre", g | sort: "rating" | reverse %}
{% for item in books %}
  <figure class="cover">
    <a class="cover-link" href="{{ item.url | relative_url }}">
      <img alt="{{ item.title }} cover" src="{{ item.cover | relative_url }}" style="height:200px" loading="lazy">
      <figcaption class="queued">WISHLIST</figcaption>
    </a>
  </figure>
{% endfor %}
{% endfor %}
</ul>
