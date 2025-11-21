---
layout: single
title: Ferramentas
permalink: /ferramentas/
---

## Mapa com a Estimativa de Banda TVWS no Brasil

A ferramenta interativa de visualização de dados espectrais, utilizando os dados brutos para prover inteligência regulatória e técnica. Este mapa permite a exploração geográfica da **disponibilidade de espectro TV White Space (TVWS)** em todo o território brasileiro, sendo uma fonte para o planejamento de novas redes de conectividade.

O mapa foi construído com base em dados do **Plano Básico de TV Digital (PBTVD) da ANATEL** e de informações geoespaciais do **IBGE**. Ele não apenas exibe a quantidade de **Canais Livres** por localização, mas também integra a **Estimação da Taxa de Dados (Throughput)** potencial, utilizando o modelo LTE, e possibilita a **Análise Cruzada** com indicadores socioeconômicos, como o Índice Brasileiro de Conectividade (IBC) e IDH.


<div style="margin-bottom: 1em; display: flex; gap: 10px;">
  
  <a href="https://fiquespectro.com.br/mapa/" target="_blank" class="btn" style="padding: 0.5em 1em; background-color: #007acc; color: white; text-decoration: none; border-radius: 4px;">
    🌐 Abrir mapa completo em nova aba
  </a>

  <a href="https://fiquespectro.com.br/mapa/download_data_zip" class="btn" style="padding: 0.5em 1em; background-color: #4CAF50 ; color: white; text-decoration: none; border-radius: 4px;">
    ⬇️ Download dos Dados (ZIP)
  </a>
<!-- 
  <a href="{{ '/mapa-metodologia/' | relative_url }}" class="btn" style="padding: 0.5em 1em; background-color:  #FF9800; color: white; text-decoration: none; border-radius: 4px;">
    📐 Metodologia da Construção do Mapa
  </a> -->

</div>




### Metodologia de Processamento da Bases de Dados Espectral de TVWS

Esta seção detalha as **bases de dados oficiais** utilizadas e a **metodologia de processamento** aplicada pelo projeto para estimar, com precisão técnica e regulatória, a disponibilidade e o potencial de uso do espectro de TV White Space (TVWS) no Brasil. O estudo é fundamental para informar a viabilidade e as estratégias de implantação de novas soluções de conectividade.


#### Fontes de Dados

A construção dessa base de dados utiliza de dados públicos e geoespaciais fornecidos por fontes governamentais brasileiras, listadas abaixo:

| Base de Dados | Fonte | Finalidade no Projeto | Link de Referência |
| :--- | :--- | :--- | :--- |
| **Plano Básico de TV Digital (PBTVD)** | **ANATEL** | Mapeamento e classificação dos canais de TV digital ocupados e protegidos, essenciais para determinar os **Canais Vagos (TVWS)** disponíveis por região. | [Painel de Radiodifusão - ANATEL](https://informacoes.anatel.gov.br/paineis/radiodifusao/plano-basico-de-tv-digital) |
| **Dados Geoespaciais e Malha Municipal** | **IBGE** | Fornecimento da base cartográfica e dos limites geográficos (municípios, UFs) para realizar análises e visualizações espaciais precisas do espectro. | (Não há link direto na apresentação, mas a fonte é o IBGE) |
| **Índice Brasileiro de Conectividade (IBC)** | **ANATEL** | Utilizado em análises cruzadas como indicador socioeconômico de infraestrutura, permitindo contextualizar a demanda por conectividade em áreas específicas. | [Painel Meu Município - ANATEL](https://informacoes.anatel.gov.br/paineis/meu-municipio/indice-brasileiro-de-conectividade) |


#### Metodologia de Processamento 

O processamento dos dados foi dividido em etapas que transformam as bases oficiais em informações estratégicas sobre a disponibilidade de espectro.

##### Processamento e Enriquecimento de Dados de transmissores de TV

  * **Processamento Geoespacial:** Preparação e integração dos dados geoespaciais e dos limites municipais. [cite: 15]
  * **Identificação de Canais Livres:** A partir do PBTVD, cada canal é classificado pelo seu *Status* (e.g., C4 - Canal Licenciado, C0 - Canal Vago), sendo que os canais livres/vagos são identificados como potencial espectro TVWS.
  * **Contorno Protegido:** O cálculo do contorno protegido de cada estação licenciada é realizado para demarcar as áreas onde o uso do TVWS é restrito, prevenindo interferências.

##### Estimação de Taxa de Dados e Potencial de Banda

  A disponibilidade de canais vagos é usada para calcular a **Banda Total Disponível** (em MHz) por localização pixel.
  
  * **Curvas LTE para *Throughput*:** Para a estimaiva de taxa de transferência (vazão da rede) foi utilizado uma curva LTE com **Relação Sinal-Ruído (SNR)** de 0, 8db  e 16 db na equação de Shannon para determinar a **Taxa Mínima, Média e Máxima** de dados. 

##### Análise Cruzada

  * **Integração de Indicadores:** Os resultados da disponibilidade de canais são integrados com filtros de indicadores socioeconômicos (IBC, IDH, Cobertura Agrícola) e regiões geográficas.
  * **Visualização:** O resultado final é um mapa de calor que mostra a distribuição da disponibilidade de canais livres no Brasil, permitindo a **análise cruzada** por diferentes filtros. 
  * **Distribuição Cumulativa:** A análise conclui que uma parcela significativa da área total do Brasil apresenta uma alta disponibilidade de espectro, com mais de 80% da área total possuindo acima de 40 canais livres.
