---
layout: default
title: resume
---

<div class="tab black">
  <button class="tablinks button" onclick="openTab('text')">Text Resume</button>
  <button class="tablinks button" onclick="openTab('diagram')">Graphiical Resume</button>
</div>

<div id="text" class="tab tabcontent">

# {{ site.data.resume.basics.name }}

<div>
{% for prof in site.data.resume.basics.profiles %}

    {% if prof.network == "linkedin" %}
        <i class="fab fa-linkedin-in igreen" aria-hidden="true"></i>
    {% endif %}

    <a href="{{ prof.url }}">{{ prof.username }}</a>
{% endfor %}
</div>

<i class="fas fa-envelope igreen" aria-hidden="true"></i>
[{{ site.data.resume.basics.email }}](mailto:{{ site.data.resume.basics.email }})


{% capture location %}{{ site.data.resume.basics.location.city }},{{ site.data.resume.basics.location.region }},{{ site.data.resume.basics.location.postalCode }} {{ site.data.resume.basics.location.countryCode }}
{% endcapture %}

<i class="fas fa-map-marker-alt igreen" aria-hidden="true"></i>
[{{ location }}]({{ "https://www.google.com/maps/place/" | append: location }})


***

## Overview
{{ site.data.resume.basics.summary }}

***

## Experience
{% for job in site.data.resume.work %}
### {{ job.position }}
**{{ job.company }}** ({{ job.startDate | date: "%B %Y" }} - {{ job.endDate | date: "%B %Y" | default: "present" }})

{{ job.summary }}
<ul>
{% for hl in job.highlights %}
<li> {{ hl }} </li>
{% endfor %}
</ul>
{% endfor %}


***
{% for skill in site.data.resume.skills %}

### {{ skill.name }}
<div>
{% for key in skill.keywords %}
<code class="highlighter-rouge">{{ key }}</code>
{% endfor %}
</div>
{% endfor %}

***
{% for ed in site.data.resume.education %}

### {{ ed.area }}
**{{ ed.institution }}**

{{ ed.studyType }}

{% endfor %}

***
## Publications

{% for pub in site.data.resume.publications %}

### {{ pub.name }}
[{{ pub.publisher }}](pub.website) ({{ pub.releaseDate | date: "%B %Y"}})

{{ pub.summary }}

{% endfor %}


***
## Languages
<table>
{% for lang in site.data.resume.languages %}
<tr>
<td><strong>{{ lang.language}}</strong></td>
{% if lang.fluency contains "Native" %}
<td><span class="langlevel">||||||||||</span><span></span></td>
{% endif %}
{% if lang.fluency contains "Full" %}
<td><span class="langlevel">||||||||</span><span>||</span></td>
{% endif %}
{% if lang.fluency contains "Professional" %}
<td><span class="langlevel">|||||||</span><span>|||</span></td>
{% endif %}
{% if lang.fluency contains "Limited" %}
<td><span class="langlevel">|||||</span><span>|||||</span></td>
{% endif %}
{% if lang.fluency contains "Elementary" %}
<td><span class="langlevel">|||</span><span>|||||||</span></td>
{% endif %}

<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
{% endfor %}
</table>

***
## References

{% for ref in site.data.resume.references %}
**{{ ref.name }}**
>{{ ref.reference | strip_newlines }}
{% endfor %}

</div>

<div id="diagram" class="tab tabcontent">
<img src="assets/images/resume-dark.png">
</div>

<script>
function openTab(name) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(name).style.display = "block";  
}
</script>