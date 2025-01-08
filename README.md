# Pokedex Next
Este projeto é uma aplicação Next.js que consome a [PokeApi](<https://pokeapi.co/>) para exibir Pokemons em cards interativos. A aplicação envia eventos de like e dislike via postMessage. Esse projeto foi desenvolvido para ser integrado ao [Pokedex React Native](<https://github.com/guilhermeFCarvalho/pokedex-react-native>), que exibe a página principal da aplicação em uma WebView e lida com os eventos recebidos.

A estrutura e separação das pastas foi feita pensanda principalmente na testabilidade do código. Estão cobertos por testes:
* principais componentes
* actions 
* services 
* utilitários


## Como rodar o projeto

Instale as dependências rodando o seguinte comando na pasta raiz do proketo:

~~~bash
npm install
~~~

Rode o servidor

```bash
npm run dev
```
O servidor vai ser iniciado em [http://localhost:3000](http://localhost:3000) 


Para rodar os testes, execute o seguinte comando:

~~~bash
npm run test
~~~

## Integração em aplicativos React Native
Uma sugestão de integração em aplicativos React Native é utilizar o pacote [react-native-webview](<https://www.npmjs.com/package/react-native-webview>) e criar o componente da seguinte forma para garantir mais desempenho, lembrando de substituir o localhost pela url da sua aplicação rodando. 

~~~html
    <WebView
        source={{ uri: "http://localhost:3000" || "" }}
        cacheEnabled={true}
        cacheMode={'LOAD_CACHE_ELSE_NETWORK'}
        androidLayerType="hardware"
        javaScriptEnabled={true}
        onMessage={handleWebViewMessage}
        startInLoadingState={true}
        incognito={false}
      />
~~~

Os eventos podem ser recebidos dessa forma, após receber é necessário realizar o parse do JSON e aplicar a lógica desejada. 
~~~typescript
(event: WebViewMessageEvent) => {
    const { data } = event.nativeEvent;
    const parsedData = safeParseJSON<T>(data);
}
~~~
