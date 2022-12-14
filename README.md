# **Servidor Node**

## **Qual o objetivo do projeto?**
### A idéia deste projeto foi construir um servidor simples em Express.js para validação de dados de login.

## **Detalhes do projeto:**
### Para poder realizar o processo de validação foram criadas duas rotas e uma função, sendo estas:

* #### *Rota Estática:* Recebe uma lista de informações de usuários pré-definidos da função;
* #### *Rota Dinâmica:* Apresenta informações do usuário que foi retornado na função, seja o resultado obtido através de parâmetros pré estabelecidos na função, através de parâmetros recebidos ou inserindo o usuário no endereço da rota. E caso o usuário escolhido não esteja no sistema, retorna todos os usuários cadastrados. 
* #### *Função:* A função retorna os dados para as rotas com o resultado obtido através de comparações com parâmetros pré-definidos, ou se no caso for uma função assíncrona, o resultado pode ser obtido com parâmetros recebidos por meios externos, como o consumo de uma API por exemplo.

## **O que é necessário para rodar o projeto:**

- #### Um navegador de internet;
- #### É preciso ter o Node.js instalado na máquina;
- #### Ferramenta de versionamento GIT;
- #### Ao clonar o projeto para o repositório local, devem ser instalados os módulos por meio do NPM para rodar o projeto;

## **Passos para rodar o projeto:**

- #### 1. Escolha uma pasta para o projeto, clique com o botão direito do mouse e escolha a opção "**Git Bash**";
- #### 2. Ao abrir o console Bash do Git, basta digitar: **git clone "https://github.com/Jean-Vertuoso/serverNode.git"** ;
- #### 3. Feche a janela do Git Bash, clique na barra de endereços da pasta e digite: **cmd** ;
- #### 4. Ao abrir o Prompt de Comando do Windows, digite: **npm install** , para que sejam instalados os módulos Node;
- #### 5. Instalados os módulos, ainda com o Prompt de Comando aberto, basta digitar o comando: **node server.js** para iniciar o servidor;
