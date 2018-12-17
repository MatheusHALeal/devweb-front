## Rota-Link front-end

Para rodar o projeto navegue até o diretorio raiz do projeto e dê o seguinte comando:

```
npm install
```

Certifique-se de estar com o [back-end](https://github.com/MatheusHALeal/devweb-api) da ferramenta  rodando em paralelo. Estando tudo ok, rode o front-end com:

```
npm start
```

Note que algumas rotas da aplicação (Criação de novos eventos) exigem que você esteja autenticado, além disso, para que ela funcione corretamente, você vai precisar dos tokens do Firebase e substituí-los em src/config/keys.js. Tokens e credenciais serão enviados por email. 


