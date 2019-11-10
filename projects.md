---
layout: default
title: projects
published: true
# categories: [blog, programming]
# tags: [cool, programming]
author: Brett Schwarz
---
<ul>
{% for proj in site.data.projects %}
  <li>  
  <a href='{{ proj.url }}'>{{ proj.name }}</a>: {{ proj.description }}  
  </li>
{% endfor %}
</ul>
