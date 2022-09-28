## Jogo da Velha (_tic-tac-toe_)

## Aviso legal

Esta aplicação foi criada em conjunto com o curso "React Clarified: Building a Game in React", de Tom Bowden, disponível na plataforma Udemy. Clique [aqui](https://www.udemy.com/course/react-clarified-building-a-game-in-react/) para ver a página do curso.

### Descrição

Este projeto tem como objetivo construir o Jogo da Velha usando React. Você pode conferir esta aplicação clicando [aqui](https://tic-tac-toe-ivo.netlify.app/)

### Explicação

A aplicação:

1. Quem deve fazer a jogada atual;
2. Atualiza o quadrado clicado com o símbolo (X ou O) do jogador atual;
3. Mostra o jogador que ganhou o jogo.

### Processo de criação

Antes de começar a criação, foram deletados todos os escritos contigos nos arquivos index.js e index.css. Após, utilizei o arquivo index.js para criar o componente principal, Game.

Os outros componentes criados foram "Board" e "Square" (Tabuleiro e Quadrado, respectivamente).

No componente Board, foram criados vários estados: um para definir o número de quadrados, outro para definir qual o jogador (usando um booleano: caso verdadeiro, "X", caso falso, "O") e um terceiro para definir quantos quadrados faltam ser preenchidos.

Foi criada também uma função para reiniciar o jogo (resetGame), a ser ativada com o clique de um botão que aparece na tela, abaixo do "tabuleiro", caso haja um ganhador ou caso o jogo termine em um empate.

Também há uma outra função usada para calcular se houve um vencedor, executada sempre que há uma jogada. Caso uma das possibilidades de vitória seja alcançada, retorna-se o valor do ganhador ("X" ou "O").

A todo tempo é mostrado ao usuário o _status_ do jogo: caso ainda não haja ganhador mas ainda restarem quadrados a serem preenchidos, é mostrado de quem é a vez; caso haja um ganhador (e a variável winner for verdadeira), é carregado o texto correspondente à vitória; caso não haja ganhador e o número de quadrados restantes for 0, é carregado um texto que corresponde ao empate.

### Extras

Algumas funcionalidades foram adicionadas exclusivamente por mim, sendo elas:

1. Mostrar ao usuário caso o jogo termine num empate;
2. Botão para reiniciar a aplicação, que é mostrado caso haja um ganhador ou o jogo termine num empate.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
