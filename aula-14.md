# Métodos de Array - reduce(), indexOf

* reduce() - reduz todos os itens do array em um único item. Pode somar os números, fazer concatenação de strings. Se utilizar numeros ele soma todos.  


        var reduce = arr.reduce( function(acumulado, atual, index, array) {
            return acumulado + atual;
        },0);

    _Obs: o '0', passado ao final diz em qual item ele deve começar. Se não utilizar o valor no final ele utiliza o primeiro + o segundo_
    _ Poderia ser no parâmentro function (x,y, index, array)
    _Pega todo valor que já está acumulado e soma com o valor atual. Ex: arr = [1,2,3] soma 1 + 2 = 3 e 3 + 3 = 6;_

* reduceRight() - faz a redução da direita para a esquerda

* indexOf() - procura se um valor existe no indice do array.  
Passo como parâmetro o índice do valor que estou procurando.  
Posso dizer onde o _indexOf_ deve começar a busca indexOf('a',1);   
	* 'a' - o valor que quero procurar  
	* 1 - a partir do item 1  


* lastIndexOf( ) - procura do final para o início.

* Array.isArray(nomeDoArray) - retorna se o elemento passado é array - true/false.