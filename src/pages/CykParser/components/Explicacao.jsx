import React, { Component, Fragment } from "react";

export class Explicacao extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <p>
            <strong>Objetivo do Algoritmo:</strong> O algoritmo CYK é um parser
            que garante reconhecer se uma palavra é reconhecida por uma
            gramática ou não.
          </p>
        </div>

        <div className="row">
          <p>
            <strong>Funcionamento:</strong> Dado uma palavra e uma gramática
            estando na forma normal de Chomsky (pré-requisito) podemos aplicar o
            algoritmo, a sua explicação foi dividida em partes.
          </p>
        </div>

        <div className="row">
          <ol>
            <li>
              Primeiro é necessário pegar o tamanho da palavra, ou seja, uma
              palavra w = “aba” tem tamanho 3. Esse tamanho é necessário para
              saber o tamanho da matriz que será gerada pelo algoritmo.
            </li>

            <li className="mt-3">
              Com o tamanho da palavra em mãos, ou melhor, em código. É montado
              uma tabela triangular como a do exemplo abaixo:
            </li>

            <div className="row text-center">
              <img
                src={require("../assets/img1.png")}
                alt="img1"
                style={{ margin: "15px auto 0px auto" }}
              />
            </div>

            <li className="mt-3">
              Essa tabela vai servir como base para todo o funcionamento do
              algoritmo. Através de uma função recursiva é possível passar por
              cada linha da matriz atualizando a cada chamada da função os seus
              valores.
            </li>

            <li className="mt-3">
              Para preencher a matriz começamos da posição 0, ou seja, a parte
              de baixo da matriz, seguindo da esquerda para a direita. Note que
              embaixo da figura acima tem a palavra que desejamos reconhecer. É
              com ela que iniciaremos o preenchimento da matriz. O que faremos
              basicamente é organizar todas as possibilidades com a palavra e a
              gramática.
            </li>

            <li className="mt-3">
              A gramática que utilizarei para explicar o algoritmo é a seguinte:
            </li>

            <div className="row text-center">
              <img
                src={require("../assets/img2.png")}
                alt="img1"
                style={{ margin: "15px auto 0px auto" }}
              />
            </div>

            <li className="mt-3">
              Vamos começar gerando as possibilidades da linha 0. Para a letra
              “a”, observando a gramática, o único não terminal que gera essa
              letra é o “A”, então preenchemos a posição (0, 0) da matriz com
              ele, ficando assim:
            </li>

            <div className="row text-center">
              <img
                src={require("../assets/img3.png")}
                alt="img1"
                style={{ margin: "15px auto 0px auto" }}
              />
            </div>

            <li className="mt-3">
              O mesmo é feito para o restante das letras, pois estando na
              posição 0, só levamos em consideração 1 letra por vez, a medida
              que formos subindo com o preenchimento essa quantidade de
              consideração é aumentada em 1 (veremos em breve). Portanto
              procurando a letra “b” na gramática, temos apenas o não terminal
              “S” a gerando. Se tivéssemos outro não-terminal gerando essa mesma
              letra, ele também entraria no preenchimento. Agora temos a matriz
              assim:
            </li>

            <div className="row text-center">
              <img
                src={require("../assets/img4.png")}
                alt="img1"
                style={{ margin: "15px auto 0px auto" }}
              />
            </div>

            <li className="mt-3">
              Seguindo a execução do algoritmo, agora vamos para a segunda
              linha, ou seja, posição 1. Para a posição 1, temos que começar a
              pensar nas combinações possíveis, lembra que eu falei que essa
              quantidade de consideração era aumentada em 1 a cada vez que subia
              na matriz? Então, é agora que acontece, como nosso número de
              consideração agora é 2 vamos testar “ab”. Para realizar o
              preenchimento dessa posição precisamos verificar qual não-terminal
              gera cada uma das letras. Para o “a” temos o ‘A“ e para o “b”
              temos o “S”, portanto ficamos com “AS”, com esse “AS” verificamos
              na gramática quais não-terminais geram eles, se você observar na
              gramática que mostrei anteriormente, tanto o “S” quanto “A” geram
              ele, portanto a célula será preenchida com esses dois valores.
              Para preencher a sua célula a direita, posição (1, 1), fazemos a
              mesma coisa, pegamos “b” e “a” e identificamos quais não-terminais
              os geram e depois procuramos quais não-terminais geram este último
              identificado. O “b” é gerado através do “S” e o “a” através do
              “A”, temos então “SA”, e observando a gramática, apenas o “A” gera
              o “SA”, portanto preenchemos com ele, então a matriz fica assim:
            </li>

            <div className="row text-center">
              <img
                src={require("../assets/img5.png")}
                alt="img1"
                style={{ margin: "15px auto 0px auto" }}
              />
            </div>

            <li className="mt-3">
              Até então geramos todas as possibilidades com 1 letra e com 2
              letras da palavra, quando chegamos no último tamanho, ou seja, na
              última linha, é quando temos nosso caso base do algoritmo, o
              preenchimento da última célula, essa última célula que vai nos
              dizer se essa palavra é ou não reconhecida por esta gramática.
              Essa decisão se dá pela condição de o símbolo inicial, no nosso
              caso o “S” está contido nesta última célula. Para fazer o
              preenchimento deste segue o mesmo padrão dos itens anteriores.
              Agora nossa condição de análise é de 3, ou seja, vamos analisar a
              palavra “aba” por completo. Mas aqui entra uma regra básica, não
              analisamos ela toda de vez, separamos sempre em dois, sem mexer
              nas posições. Assim podemos ter dois grupos, (a)(ba) e (ab)(a),
              que são as combinações em dupla para a palavra, se tivéssemos uma
              palavra maior, na consideração de tamanho 4 faríamos a mesma
              coisa, dividindo sempre em dois grupos e analisando cada um
              individualmente. Para o (a)(ba) temos que o “a” é gerado por “A” e
              para sabermos o “ba” de forma rápida podemos utilizar a própria
              matriz, olhando a palavra embaixo da matriz, vamos a linha 2 que é
              a quantidade de letras da palavra, e essa posição indica o que é
              gerado com o “ba”, no nosso caso é o “A”, assim temos “AA”,
              verificando na gramática, apenas o “S” gera o “AA”, portanto
              guardamos ele, então é feito também a análise do (ab)(a), seguindo
              a mesma lógica, o seu resultado é “AS” que está tanto em “S”
              quanto em “A”, então finalizamos o preenchimento da matriz:
            </li>

            <div className="row text-center">
              <img
                src={require("../assets/img6.png")}
                alt="img1"
                style={{ margin: "15px auto 0px auto" }}
              />
            </div>

            <li className="mt-3">
              Com a matriz preenchida podemos ver no topo dela que o símbolo
              inicial “S” está na célula, sendo assim, a palavra “aba” é
              reconhecida por esta gramática, se ele não estivesse ele não seria
              reconhecido por esta gramática.
            </li>
          </ol>
        </div>
      </Fragment>
    );
  }
}
