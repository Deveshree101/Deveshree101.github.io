---
layout: page
title: bookshelf
permalink: /books/
nav: true
nav_order: 4
---

> This is not a list of books I've read. It's a log of mindset shifts. Each entry captures a belief I held, the idea that challenged it and how my thinking evolved. I write this for myself, to remember that my beliefs are not fixed.

{% assign read = site.books | where: "shelf", "finished" | sort: "title" %}
{% assign wishlist = site.books | where: "shelf", "wishlist" | sort: "title" %}

## Books I've read

<ul>
{% for item in read %}
  <figure class="cover">
    <a class="cover-link" href="{{ item.url | relative_url }}">
      <img alt="{{ item.title }} cover" src="{{ item.cover | relative_url }}" style="height:200px" loading="lazy">
      <figcaption class="finished">FINISHED</figcaption>
    </a>
  </figure>
{% endfor %}
</ul>

## On my wishlist

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
