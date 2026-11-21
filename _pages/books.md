---
layout: page
title: bookshelf
permalink: /books/
nav: true
nav_order: 4
---

> This is not a list of books I've read. It's a log of mindset shifts. Each entry captures a belief I held, the idea that challenged it and how my thinking evolved. I write this for myself, to remember that my beliefs are not fixed.

{% comment %}
Order: business first, then other non-fiction, then fiction.
Inside each group, books are sorted by public rating (highest first).
Each book's `genre` and `rating` live in its file in _books/.
{% endcomment %}

{% assign groups = "business|Business,nonfiction|Non-fiction,fiction|Fiction" | split: "," %}

## Books I've read

{% for g in groups %}
{% assign parts = g | split: "|" %}
{% assign books = site.books | where: "shelf", "finished" | where: "genre", parts[0] | sort: "rating" | reverse %}
{% if books.size > 0 %}

### {{ parts[1] }}

<ul>
{% for item in books %}
  <figure class="cover">
    <a class="cover-link" href="{{ item.url | relative_url }}">
      <img alt="{{ item.title }} cover" src="{{ item.cover | relative_url }}" style="height:200px" loading="lazy">
      <figcaption class="finished">FINISHED</figcaption>
    </a>
  </figure>
{% endfor %}
</ul>
{% endif %}
{% endfor %}

## On my wishlist

{% assign wishlist = site.books | where: "shelf", "wishlist" | sort: "rating" | reverse %}
<ul>
{% for item in wishlist %}
  <figure class="cover">
    <a class="cover-link" href="{{ item.url | relative_url }}">
      <img alt="{{ item.title }} cover" src="{{ item.cover | relative_url }}" style="height:200px" loading="lazy">
      <figcaption class="queued">WISHLIST</figcaption>
    </a>
  </figure>
{% endfor %}
</ul>
