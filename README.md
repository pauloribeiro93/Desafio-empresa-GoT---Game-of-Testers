# :zap: Desafio Empresa GOT Game-Of-Testers


<img src="https://github.com/pauloribeiro93/Desafio-empresa-GoT---Game-of-Testers/blob/master/img-readme/QAGOT.gif"/>

### 🛠️ Ferramentas Utilizadas

- Visual Studio Code 1.54 
- Cypress 7.6
- Cmder 1.3

### :package: Packages 

- chance: "^1.1.7",
- cypress: "^7.6.0",
- cypress-multi-reporters: "^1.5.0",
- mocha: "^9.0.2",
- mochawesome: "^6.2.2",
- mochawesome-merge: "^4.2.0",
- mochawesome-report-generator: "^5.2.0"

### :computer: Preparando o Ambiente

#### Windows:Win10
```
Node.js 10 ou 12 e superior (https://nodejs.org/en/)
```


##### Clone o projeto do GitHub em um diretório:

```
cd "seu diretorio"
git clone https://github.com/pauloribeiro93/Desafio-empresa-GoT---Game-of-Testers.git

```

##### :runner: Execute o seguinte comando para instalar as dependências

```
npm i
```

##### :memo: Fluxo do cenário de "Cadastrar um novo usuário":

- Acessar o site automation practice http://automationpractice.com

- Clicar no botão de Sign in

- Preencher as informações de e-mail (não pode ser repetido)

- Clicar no botão Create an Account

- Preencher as informações do formulário de cadastro

- Clicar no botão Register

- Validar que foi redirecionado para a url correta

- Validar exibição do texto 'Welcome to your account'


## ⚙️ Executando os testes

##### Utilize o seguinte comando para executar todos os cenários de teste: 

``````
npm run cy:open
``````

##### Visualização do Teste:

<img src="https://github.com/pauloribeiro93/Desafio-empresa-GoT---Game-of-Testers/blob/master/img-readme/RunnGOT.gif"/>

##### Para gerar o relatorio use os comandos abaixo: 

``````
npm run report:merge
npm run report:mocha
``````

![image](https://user-images.githubusercontent.com/40372913/124516133-66e57700-ddb7-11eb-9811-6dfa3d4a99cb.png)


## ✒️ Autor


## Paulo Ribeiro

[![Linkedin Badge](https://img.shields.io/badge/-Paulo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ribeiro-paulo/)](https://www.linkedin.com/in/ribeiro-paulo/) 
[![Outlook Badge](https://img.shields.io/badge/-Paulo_Ribeiro-0078d4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:pauloribeiro93@hotmail.com)](mailto:pauloribeiro93@hotmail.com)

