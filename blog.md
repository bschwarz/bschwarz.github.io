---
layout: default
title: blog
published: true
# categories: [blog]
# tags: [cool, programming]
author: Brett Schwarz
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
{% if site.posts.size == 0  %}
 <h2> coming soon </h2>
{% endif %}