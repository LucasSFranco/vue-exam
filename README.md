# Portal de Notícias - Vue.js 📰

###### Veja o projeto em execução: [Portal de Notícias](https://frosty-brown-7434e8.netlify.app/) 

O aplicativo é um portal de notícias desenvolvido em Vue.js (3.x) para a exibição de notícias sobre dois tópicos (tecnologia e ciência), os quais são fornecidos pela API do The New York Times.

### 💡 Escolhas
- Design: Como o aplicativo consome a API do The New York Times, foi optado por fazer um visual similar ao visual do próprio NY Times. O visual foi reaproveitado do [react-exam](https://github.com/LucasSFranco/react-exam.git) usando, ao invés de Styled Components, `SCSS`. O aplicativo é totalmente responsivo e utiliza o princípio de _mobile first_.
- API: Como a API utilizada é bastante limitada, sem quaisquer ferramentas de filtro ou ordenação, foi escolhido sincronizar os dados da API com o IndexedDB utilizando `Axios` e `Dexie.js` para tal. Dessa forma, é possível salvar notícias mais antigas do que as que são retornadas pela API e é possível buscar ou todas as notícias ou notícias de um tópico específico. Também permitiu a realização de um _infinite scroll_ com _skeleton loading_.   
- Gerenciamento de estado: Foi optado por utilizar o `Vuex` para manter o projeto mais organizado.
- Rotas: Foi utilizado o `Vue Router` para criar rotas para os diferentes tipos de busca.
- Estrutura do projeto:
  - assets: possui alguns recursos estáticos, como fontes, ícones e imagens.
  - components: possui os componentes do projeto e está dividida em uma estrutura baseada no _atomic design_:
    - atoms: componentes genéricos, que ou são reutilizados (AppContainer) ou possuem lógica própria (AppModal);
    - molecules: componentes específicos e que não têm integração com recursos externos ou com o gerenciador de estado;
    - organisms: componentes específicos e que têm integração com recursos externos ou com o gerenciador de estado.
  - models: mantém os objetos manipulados (Article).
  - services: possui a integração com os recursos externos (IndexedDB e API do NYT).
  - store: serve para gerenciar o estado da aplicação. 
  - styles: possui os estilos globais da aplicação.
  - router: possui as rotas da aplicação.
  - views: possui as páginas da aplicação.
- Testes: Foi optado por fazer os testes mais importantes da aplicação por meio do Cypress, no qual é testada toda a funcionalidade, para facilitar a equalização dos testes nos dois projetos. Além disso, também foram feitos alguns testes de componente, sobretudo utilizando _snapshot_, para garantir que os componentes estão sendo gerados corretamente.
  
### 🔧 Instalação e execução
Clone o projeto e acesse a pasta:
```bash
$ https://github.com/LucasSFranco/vue-exam.git && cd vue-exam
```

Comandos:
```bash
# instala as dependências
$ yarn

# compila e recarrega automaticamente para desenvolvimento
$ yarn serve

# compila e minifica para produção
$ yarn build

# executa os testes unitários
$ yarn test:unit

# executa os testes e2e
$ yarn test:e2e
```
___OBS___: Após executar os testes e2e, é possível visualizar o _coverage report_ dos testes: `react-exam/coverage/lcov-report/index.html`.

### PWA
Na aplicação em Vue.js, foi elaborada uma PWA:
![App](/.github/app.jpeg)

![Icon](/.github/icon.jpeg)
