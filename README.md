# Papyro: uma rede social para leitores

A quantidade de leitores no Brasil vem decaindo, segundo dados da pesquisa Retratos da Leitura no Brasil, feita pelo Instituto Pró-Livro (IPL) (2020). De 2015 para 2019, a porcentagem de leitores no Brasil caiu de 56% para 52%. O número de brasileiros com mais de 5 anos que nunca leram nenhum livro, nos últimos três meses, representam 48% da população. O brasileiro lê, em média, cinco livros por ano, sendo aproximadamente 2,4 livros lidos apenas em parte e 2,5 inteiros. Segundo o estudo, um dos fatores que influencia a leitura é o incentivo de outras pessoas.

Assim, essa rede social nasce com o intuito de incentivar a interação social e a leitura, compreendendo os seguintes pontos:

1.	Permitir a criação e a visualização de avaliações de livros.
2.	Permitir a criação e o gerenciamento do histórico de livros do usuário.
3.	Permitir buscas de usuários e livros.
4.	Permitir a criação e o gerenciamento de conta de usuário.
5.	Prover uma interface intuitiva.

## Como funciona?

Para que seja possível a execução, é necessário que uma série de requisitos sejam instalados antes da entrada no projeto. Esses requisitos são:
-	Docker v20.10.17 (ou equivalente)
-	Yarn v1.22.19
-	Node v8.11.0
-	Expo v5.4.12
-	Android Studio (Opcional)
-	Visual Code (Opcional)
-	ESLint v2.2.6 (Opcional)
-	WSL v2

E deve ser executado junto a sua API https://github.com/lucax21/papyroAPI que se encontra dockerizada.

## Passo a Passo (Windows)

Para o frontend, é necessário que o emulador seja executado ou que a aplicação “expo” esteja baixada no celular. Caso opte pelo uso no aparelho celular, o aplicativo pode ser baixado através do endereço https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US. 
Após conferir a existência de todas os pré-requisitos, abra o PowerShell como Administrador (menu Iniciar > PowerShell > clique com o botão direito do mouse > Executar como Administrador), navegue até o repositório utilizando o comando “cd” e insira o comando `expo install` e, posteriormente `expo start`.
Esse comando irá construir a aplicação e disponibilizá-la. É possível acessar a interface via o Metro App cujo link está disponível no texto de saída do comando, ou se ler o QR diretamente do terminal, caso tenha optado pelo uso do aparelho celular. Não feche esse terminal enquanto a aplicação estiver sendo executada! Para execução via emulador, você também pode digitar a opção “a” no mesmo terminal.

### Precauções

Caso opte pelo uso do aparelho celular, é necessário que a rota de desenvolvimento seja alterada. No arquivo src\routes\routes.js, linha 2, a variável chamada baseURL deve ser alterada para o IP local, em outras palavras, diferente do emulador que utiliza o IP 10.0.2.2:8000, os celulares terão um outro IP. Esse IP é obtido diretamente no console de saída do expo e deve ser substituído nesse arquivo. Por exemplo, nessa execução do expo, o IP local apontado foi o 192.168.1.7 e é o mesmo IP que deve ser inserido no arquivo em questão, porém sempre na porta 8000.


