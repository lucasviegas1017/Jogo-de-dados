/*Math.random() gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusive).
Multiplicando este número por 6 (Math.random() * 6), obtemos um valor decimal entre 0 (inclusive) e 6 (exclusive).
Somando 1 ao resultado (Math.random() * 6 + 1), obtemos um valor decimal entre 1 (inclusive) e 7 (exclusive).
Math.floor() arredonda o valor para baixo até o inteiro mais próximo, resultando em um número inteiro entre 1 e 6 (inclusive). */

var sorteio=Math.floor(Math.random()*6+1);

switch(sorteio){

    case 1:
        document.getElementById("face").src="img/face1.png";
    break;
    case 2:
        document.getElementById("face").src="img/face2.png";
    break;
    case 3:
        document.getElementById("face").src="img/face3.png";
    break;
    case 4:
        document.getElementById("face").src="img/face4.png";
    break;
    case 5:
        document.getElementById("face").src="img/face5.png";
    break;
    case 6:
        document.getElementById("face").src="img/face6.png";
    break;
    default:
            
}
/*A variável sorteio é usada como expressão no comando switch.
Dependendo do valor de sorteio (que pode ser de 1 a 6), o switch executa o bloco correspondente ao caso (case).
Cada case altera a propriedade src do elemento HTML com id face para o caminho da imagem correspondente ao número sorteado (face1.png até face6.png).
break é usado para sair da estrutura switch após a execução do código do caso correspondente, evitando que o código dos casos seguintes seja executado.
O default está vazio e é opcional. Ele seria executado se sorteio não correspondesse a nenhum dos casos (o que não é possível neste contexto, pois sorteio sempre será um número entre 1 e 6). */
