# OpenStreetMap React App

Este projeto � uma aplica��o React que utiliza o **OpenStreetMap** com **Leaflet** para capturar coordenadas GPS e o endere�o correspondente a partir de um clique do mouse no mapa. A aplica��o tamb�m centraliza o mapa na localiza��o atual do usu�rio ao carregar.

## Funcionalidades

- Exibe um mapa interativo utilizando o OpenStreetMap e Leaflet.
- Centraliza o mapa automaticamente na localiza��o atual do usu�rio ao carregar.
- Captura as coordenadas GPS e o endere�o exato quando o usu�rio clica em qualquer ponto do mapa.
- Exibe um �cone personalizado na posi��o exata do clique.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Leaflet](https://leafletjs.com/)
- [React-Leaflet](https://react-leaflet.js.org/)
- [OpenStreetMap](https://www.openstreetmap.org/)

## Como Executar o Projeto

### Pr�-requisitos

- Node.js instalado na sua m�quina. [Instale aqui](https://nodejs.org/)
- Gerenciador de pacotes npm (vem com o Node.js) ou yarn.

### Passos para rodar o projeto

1. Clone este reposit�rio:

   ```bash
   git clone https://github.com/seu-usuario/openstreetmap-react-app.git
   cd openstreetmap-react-app

2. Instale as depend�ncias do projeto:
npm install

ou, se voc� preferir usar o Yarn:
yarn install

3. Execute a aplica��o:
npm start

ou, com Yarn:
yarn start

4. Abra seu navegador e acesse http://localhost:3000 para visualizar a aplica��o.

Estrutura do Projeto
* src/MapComponent.js: Componente principal que renderiza o mapa, captura as coordenadas e o endere�o do local clicado, e centraliza o mapa na localiza��o atual do usu�rio.
* src/App.js: Componente que incorpora o MapComponent e estrutura a p�gina.

5. Personaliza��o do �cone
O �cone exibido na posi��o do clique � personalizado e pode ser alterado modificando a URL do �cone no c�digo:

const customIcon = new L.Icon({
  iconUrl: 'URL_DO_SEU_ICONE_AQUI',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

6. Problemas Conhecidos
* A precis�o da geolocaliza��o pode variar dependendo do dispositivo e navegador.
* Caso a API de geolocaliza��o n�o seja suportada pelo navegador, o mapa ser� carregado sem centralizar na posi��o do usu�rio.

Contribui��es
Contribui��es s�o bem-vindas! Sinta-se � vontade para abrir issues ou enviar pull requests.

7. Licen�a
Este projeto est� licenciado sob a Licen�a MIT. Consulte o arquivo LICENSE para mais detalhes.
