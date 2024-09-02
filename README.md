# OpenStreetMap React App

Este projeto é uma aplicação React que utiliza o **OpenStreetMap** com **Leaflet** para capturar coordenadas GPS e o endereço correspondente a partir de um clique do mouse no mapa. A aplicação também centraliza o mapa na localização atual do usuário ao carregar.

## Funcionalidades

- Exibe um mapa interativo utilizando o OpenStreetMap e Leaflet.
- Centraliza o mapa automaticamente na localização atual do usuário ao carregar.
- Captura as coordenadas GPS e o endereço exato quando o usuário clica em qualquer ponto do mapa.
- Exibe um ícone personalizado na posição exata do clique.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Leaflet](https://leafletjs.com/)
- [React-Leaflet](https://react-leaflet.js.org/)
- [OpenStreetMap](https://www.openstreetmap.org/)

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na sua máquina. [Instale aqui](https://nodejs.org/)
- Gerenciador de pacotes npm (vem com o Node.js) ou yarn.

### Passos para rodar o projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/openstreetmap-react-app.git
   cd openstreetmap-react-app

2. Instale as dependências do projeto:
npm install

ou, se você preferir usar o Yarn:
yarn install

3. Execute a aplicação:
npm start

ou, com Yarn:
yarn start

4. Abra seu navegador e acesse http://localhost:3000 para visualizar a aplicação.

Estrutura do Projeto
* src/MapComponent.js: Componente principal que renderiza o mapa, captura as coordenadas e o endereço do local clicado, e centraliza o mapa na localização atual do usuário.
* src/App.js: Componente que incorpora o MapComponent e estrutura a página.

5. Personalização do Ícone
O ícone exibido na posição do clique é personalizado e pode ser alterado modificando a URL do ícone no código:

const customIcon = new L.Icon({
  iconUrl: 'URL_DO_SEU_ICONE_AQUI',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

6. Problemas Conhecidos
* A precisão da geolocalização pode variar dependendo do dispositivo e navegador.
* Caso a API de geolocalização não seja suportada pelo navegador, o mapa será carregado sem centralizar na posição do usuário.

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

7. Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.
