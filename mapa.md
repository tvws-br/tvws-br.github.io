---
layout: default
title: Mapa
permalink: /mapa/
---

# Mapa do Projeto

<div id="map" class="card"></div>

<script>
  // Fortaleza como ponto inicial
  const center = [-3.730, -38.526];
  const map = L.map('map').setView(center, 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const marker = L.marker(center).addTo(map);
  marker.bindPopup('Fortaleza, CE — ponto inicial.');

  // Exemplo adicional (ajuste ou acrescente conforme necessidade)
  const ufc = [-3.744, -38.576];
  L.circle(ufc, { radius: 800, color: '#7aa2ff' }).addTo(map)
    .bindPopup('Campus — exemplo de área.');
</script>
