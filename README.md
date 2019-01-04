# meat-api-restify

mkdir meat-api \
cd meat-api/ \
npm init -y \
code . \
npm i restify@6.3.4 --save -E \
npm i @types/restify@5.0.6 -D -E \
sudo apt install node-typescript \
tsc -W \
sudo npm i nodemon -g \
nodemon dist/main.js \
npm i mongoose@4.13.9 -P -E \
npm i @types/mongoose@4.7.32 -D -E \
npm i restify-errors@5.0.0 -P -E \
npm i @types/restify-errors@4.3.2 -D -E \
npm i bcrypt@3.0.0 -P -E \
npm i @types/bcrypt@1.0.0 -D -E \
npm i jest@22.4.2 \
ts-jest@22.0.4 \
typescript@2.6.2 \
supertest@3.0.0 \
@types/jest@22.1.2 \
@types/supertest@2.0.4


<h3><a id="Rotas_da_API_0"></a>Rotas da API</h3>
<h4><a id="Endpoint_de_usurios_1"></a>Endpoint de usuários</h4>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Verbo</th>
<th>Url</th>
<th>Ação</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>/users</td>
<td>Lista de usuários</td>
</tr>
<tr>
<td>GET</td>
<td>/users/:id</td>
<td>Busca usuário pelo ID</td>
</tr>
<tr>
<td>POST</td>
<td>/users</td>
<td>Cadastra novos usuários</td>
</tr>
<tr>
<td>PUT</td>
<td>/users/:id</td>
<td>Atualiza um usuário com todos os dados</td>
</tr>
<tr>
<td>PATCH</td>
<td>/users/:id</td>
<td>Atualiza dados específicos de um usuário</td>
</tr>
<tr>
<td>DELETE</td>
<td>/users/:id</td>
<td>Remove permanentemente um usuário</td>
</tr>
</tbody>
</table>
<p>Formato do Body para cadastrar novos usuários:</p>
<pre><code class="language-sh">{
  <span class="hljs-string">"name"</span>: <span class="hljs-string">"Bruce Wayne"</span>,
  <span class="hljs-string">"email"</span>: <span class="hljs-string">"bruce@dc.com"</span>,
  <span class="hljs-string">"password"</span>: <span class="hljs-string">"123456"</span>,
  <span class="hljs-string">"gender"</span>: <span class="hljs-string">"Male"</span>,
  <span class="hljs-string">"cpf"</span>: <span class="hljs-string">"19531262357"</span>
}
</code></pre>
<h4><a id="Endpoint_de_restaurantes_23"></a>Endpoint de restaurantes</h4>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Verbo</th>
<th>Url</th>
<th>Ação</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>/restaurants</td>
<td>Lista de restaurantes</td>
</tr>
<tr>
<td>GET</td>
<td>/restaurants/:id/menu</td>
<td>Lista de itens do menu do restaurante</td>
</tr>
<tr>
<td>PUT</td>
<td>/restaurants/:id/menu</td>
<td>Alterar o menu do restaurante</td>
</tr>
<tr>
<td>GET</td>
<td>/restaurants/:id</td>
<td>Busca restaurante pelo ID</td>
</tr>
<tr>
<td>POST</td>
<td>/restaurants</td>
<td>Cadastra novos restaurantes</td>
</tr>
<tr>
<td>PUT</td>
<td>/restaurants/:id</td>
<td>Atualiza um restaurante com todos os dados</td>
</tr>
<tr>
<td>PATCH</td>
<td>/restaurants/:id</td>
<td>Atualiza dados específicos de um restaurante</td>
</tr>
<tr>
<td>DELETE</td>
<td>/restaurants/:id</td>
<td>Remove permanentemente um restaurante</td>
</tr>
</tbody>
</table>
<p>Formato do Body para cadastrar novos restaurantes sem informar o menu:</p>
<pre><code class="language-sh">{
  <span class="hljs-string">"name"</span>: <span class="hljs-string">"Fast Burguer"</span>
}
</code></pre>
<p>Formato do Body para cadastrar restaurante com o atributo menu</p>
<pre><code class="language-sh">{
  <span class="hljs-string">"name"</span>: <span class="hljs-string">"Send Burguer"</span>,
  <span class="hljs-string">"menu"</span>: [
    {<span class="hljs-string">"name"</span>: <span class="hljs-string">"Chicken Burguer"</span>, <span class="hljs-string">"price"</span>: <span class="hljs-number">29.90</span>},
    {<span class="hljs-string">"name"</span>: <span class="hljs-string">"Pork Burguer"</span>, <span class="hljs-string">"price"</span>: <span class="hljs-number">16.90</span>}
  ]
}
</code></pre>
<p>Formato do Body para alterar os itens do menu de um restaurante</p>
<pre><code class="language-sh">[
  {<span class="hljs-string">"name"</span>: <span class="hljs-string">"Chicken Burguer"</span>, <span class="hljs-string">"price"</span>: <span class="hljs-number">29.90</span>},
  {<span class="hljs-string">"name"</span>: <span class="hljs-string">"Jumento Burguer"</span>, <span class="hljs-string">"price"</span>: <span class="hljs-number">16.90</span>}
]
</code></pre>
