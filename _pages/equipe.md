---
title: Nossa Equipe
permalink: /equipe/
layout: single
# classes: wide # Opcional: para usar a largura máxima do tema
toc: false
# sidebar:
#   - title: O Projeto
#     text: Conheça os especialistas por trás da nossa iniciativa de TVWS.
# header:
#   overlay_color: "#333"
#   overlay_image: /assets/images/team-header.jpg # Opcional: imagem de cabeçalho
---

<!-- <p class="lead">A equipe é composta por pesquisadores e engenheiros de comunicações de diversas instituições brasileiras.</p> -->

A equipe é composta por pesquisadores e engenheiros de comunicações de diversas instituições brasileiras.

<div class="team-grid">
{% assign team_members = site.data.authors %}
{% for member in team_members %}
  {% assign author = member[1] %}
  <div class="team-member-card">
    <!-- <div class="profile-image">
      {% if author.avatar %}
        <img src="{{ author.avatar | relative_url }}" alt="Foto de {{ author.name }}" class="author-avatar" />
      {% else %}
        <i class="fas fa-user-circle fa-5x"></i>
      {% endif %}
    </div> -->
    
    <div class="profile-details">
      <h2 class="author-name">{{ author.name }}</h2>
      <p class="author-bio">{{ author.bio }}</p>
    </div>

    <div class="author-links">
      {% if author.github %}
        <a href="https://github.com/{{ author.github }}" title="GitHub"><i class="fab fa-github fa-lg"></i></a>
      {% endif %}
      {% if author.linkedin %}
        <a href="https://linkedin.com/in/{{ author.linkedin }}" title="LinkedIn"><i class="fab fa-linkedin fa-lg"></i></a>
      {% endif %}
      {% if author.twitter %}
        <a href="https://twitter.com/{{ author.twitter }}" title="Twitter"><i class="fab fa-twitter-square fa-lg"></i></a>
      {% endif %}
      {% if author.email %}
        <a href="mailto:{{ author.email }}" title="Email"><i class="fas fa-envelope-square fa-lg"></i></a>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>


