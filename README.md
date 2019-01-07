# meat-api-restify

Como Rodar o projeto
```
tsc -W
sudo npm i nodemon -g
nodemon dist/main.js
```

### Dependências
* restify@6.3.4
* mongoose@4.13.9
* restify-errors@5.0.0
* bcrypt@3.0.0
* jest@22.4.2
* ts-jest@22.0.4
* typescript@2.6.2
* supertest@3.0.0
* jsonwebtoken@8.1.1
* @types/restify-errors@4.3.2
* @types/restify@5.0.6
* @types/mongoose@4.7.32
* @types/bcrypt@1.0.0
* @types/jest@22.1.2
* @types/supertest@2.0.4
* @types/jsonwebtoken@7.2.5

### Rotas da API
#### Endpoint de usuários

| Verbo  | Url    | Ação |
| ------ | ------ |  ------ |
| GET    | /users | Lista de usuários  |
| GET    | /users/:id | Busca usuário pelo ID  |
| POST   | /users | Cadastra novos usuários  |
| PUT    | /users/:id | Atualiza um usuário com todos os dados  |
| PATCH  | /users/:id | Atualiza dados específicos de um usuário  |
| DELETE | /users/:id | Remove permanentemente um usuário  |

Formato do Body para cadastrar novos usuários:
```sh
{
  "name": "Bruce Wayne",
  "email": "bruce@dc.com",
  "password": "123456",
  "gender": "Male",
  "cpf": "19531262357"
}
```

#### Endpoint de restaurantes

| Verbo  | Url    | Ação |
| ------ | ------ |  ------ |
| GET    | /restaurants | Lista de restaurantes  |
| GET    | /restaurants/:id/menu | Lista de itens do menu do restaurante  |
| PUT    | /restaurants/:id/menu | Alterar o menu do restaurante  |
| GET    | /restaurants/:id | Busca restaurante pelo ID  |
| POST   | /restaurants | Cadastra novos restaurantes  |
| PUT    | /restaurants/:id | Atualiza um restaurante com todos os dados  |
| PATCH  | /restaurants/:id | Atualiza dados específicos de um restaurante  |
| DELETE | /restaurants/:id | Remove permanentemente um restaurante  |

Formato do Body para cadastrar novos restaurantes sem informar o menu:
```sh
{
  "name": "Fast Burguer"
}
```

Formato do Body para cadastrar restaurante com o atributo menu
```sh
{
  "name": "Send Burguer",
  "menu": [
    {"name": "Chicken Burguer", "price": 29.90},
    {"name": "Pork Burguer", "price": 16.90}
  ]
}
```

Formato do Body para alterar os itens do menu de um restaurante
```sh
[
  {"name": "Chicken Burguer", "price": 29.90},
  {"name": "Jumento Burguer", "price": 16.90}
]
```
