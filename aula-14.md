# Métodos de Array - reduce(), indexOf

* reduce() - reduz os valores do array. Pode somar os números, * concatenar. Se utilizar numeros ele soma todos.

        var reduce = arr.reduce( function(acumulado, atual, index, array) {
            return acumulado + atual;
        },0);

    _Obs: o '0', passado ao final diz em qual item ele deve começar._

* reduceRight() - faz a redução da direita para a esquerda

* indexOf() - procura se um valor existe no indice do array.  
Passo como parâmetro o índice do valor que estou procurando.  
Posso dizer onde o _indexOf_ deve começar a busca. indexOf('a',1);   
	* 'a' - o valor que quero procurar  
	* 1 - a partir do item 1  


* lasIndexOf() - procura do final para o início.

* Array.isArray() - retorna se o elemento passado é array - true/false