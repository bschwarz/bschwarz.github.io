---
layout: default
title: resume
---

<h1> {{ site.data.resume.basics.name }} </h1>

<div>
{% for prof in site.data.resume.basics.profiles %}

{% if prof.network == "linkedin" %}
<i class="fab fa-linkedin-in igreen" aria-hidden="true"></i>
{% endif %}
<a href="{{ prof.url }}">{{ prof.username }}</a>
{% endfor %}

<i class="fas fa-envelope igreen" aria-hidden="true"></i>
<a href="mailto:{{ site.data.resume.basics.email }}">{{ site.data.resume.basics.email }}</a>


{% capture location %}{{ site.data.resume.basics.location.city }},{{ site.data.resume.basics.location.region }},{{ site.data.resume.basics.location.postalCode }} {{ site.data.resume.basics.location.countryCode }}
{% endcapture %}

<i class="fas fa-map-marker-alt igreen" aria-hidden="true"></i>
<a href="{{ "https://www.google.com/maps/place/" | append: location }}">{{ location }}</a>
</div>

<hr/>

<h2> Overview </h2>
{{ site.data.resume.basics.summary }}

<hr/>

<div class="tab black">
  <button id="experience-btn" class="tablinks button active" onclick="openTab('experience')"><i class="fas fa-briefcase igreen tab-icon" aria-hidden="true"></i>Experience</button>
  <button id="skills-btn" class="tablinks button" onclick="openTab('skills')"><i class="fas fa-tools igreen tab-icon" aria-hidden="true"></i>&nbsp;Skills&nbsp;</button>
  <button id="education-btn" class="tablinks button" onclick="openTab('education')"><i class="fas fa-graduation-cap igreen tab-icon" aria-hidden="true"></i>Education</button>
  <button id="publications-btn" class="tablinks button" onclick="openTab('publications')"><i class="fas fa-book igreen tab-icon" aria-hidden="true"></i>Publications</button>
  <button id="languages-btn" class="tablinks button" onclick="openTab('languages')"><i class="fas fa-language igreen tab-icon" aria-hidden="true"></i>Languages</button>
  <button id="references-btn" class="tablinks button" onclick="openTab('references')"><i class="fas fa-star igreen tab-icon" aria-hidden="true"></i>References</button>
  <button id="diagram-btn" class="tablinks button" onclick="openTab('diagram')"><i class="fas fa-project-diagram igreen tab-icon" aria-hidden="true"></i>Graphical</button>
</div>
<!-- <div class="tab black">
  <button id="text-btn" class="tablinks button active" onclick="openTab('text')">Text Resume</button>
  <button id="diagram-btn" class="tablinks button" onclick="openTab('diagram')">Graphical Resume</button>
</div> -->


<!-- <div id="text" class="tabcontent" style="display: block;"> -->

<!-- <div class="section-links">
  <span>
    <i class="fas fa-tools igreen" aria-hidden="true"></i>
    <a href="#skills">Skills</a>
  </span>
  <span>
    <i class="fas fa-graduation-cap igreen" aria-hidden="true"></i>
    <a href="#education" style="margin-right: 4px;">Education</a>
  </span>
  <span>
    <i class="fas fa-book igreen" aria-hidden="true"></i>
    <a href="#publications" style="margin-right: 4px;">Publications</a>
  </span>
  <span>
    <i class="fas fa-language igreen" aria-hidden="true"></i>
    <a href="#languages" style="margin-right: 4px;">Languages</a>
  </span>
  <span>
    <i class="fas fa-star igreen" aria-hidden="true"></i>
    <a href="#references" style="margin-right: 4px;">References</a>
  </span>
</div> -->


<div id="experience" class="tabcontent" style="display: block;">
<h2> Experience</h2>
{% for job in site.data.resume.work %}
<h3> {{ job.position }}</h3>
<b>{{ job.company }}</b> ({{ job.startDate | date: "%B %Y" }} - {{ job.endDate | date: "%B %Y" | default: "present" }})

{{ job.summary }}
<ul>
{% for hl in job.highlights %}
<li> {{ hl }} </li>
{% endfor %}
</ul>
{% endfor %}


<hr/>
</div>
<div id="skills" class="tabcontent" style="display: block;">
<h2 id="skillsX"> Skills</h2>

{% for skill in site.data.resume.skills %}

<h3>{{ skill.name }}</h3>
<div>
{% for key in skill.keywords %}
<code class="highlighter-rouge">{{ key }}</code>
{% endfor %}
</div>
{% endfor %}

<hr/>
</div>
<div id="education" class="tabcontent" style="display: block;">
<h2 id="educationX"> Education</h2>

{% for ed in site.data.resume.education %}

<h3> {{ ed.area }}</h3>
<b>{{ ed.institution }}</b>

{{ ed.studyType }}

{% endfor %}

<hr/>
</div>
<div id="publications" class="tabcontent" style="display: block;">
<h2 id="publicationsX"> Publications</h2>

{% for pub in site.data.resume.publications %}

<h3> {{ pub.name }}</h3>
<a href="{{ pub.website }}">{{ pub.publisher }}</a> ({{ pub.releaseDate | date: "%B %Y"}})

{{ pub.summary }}

{% endfor %}


<hr/>
</div>
<div id="languages" class="tabcontent" style="display: block;">
<h2 id="languagesX"> Languages</h2>
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

<hr/>
</div>
<div id="references" class="tabcontent" style="display: block;">
<h2 id="referencesX"> References</h2>

{% for ref in site.data.resume.references %}
<b>{{ ref.name }}</b>
<blockquote>{{ ref.reference | strip_newlines }}</blockquote>
{% endfor %}

</div>

<div id="diagram" class="tab tabcontent">
<img src="{{ site.baseurl }}/assets/images/resume-dark.png">
</div>

<script>
function openTab(name) {
  var i;
  var x = document.getElementsByClassName("tabcontent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var x = document.getElementsByClassName("tablinks");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
  document.getElementById(name).style.display = "block";
  document.getElementById(name+'-btn').classList.add("active");
}
</script>
