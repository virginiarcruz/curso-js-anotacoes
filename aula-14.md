
# Métodos de Array - reduce(), indexOf

* reduce() - reduz todos os itens do array em um único item. Pode somar os números, fazer concatenação de strings. Se utilizar numeros ele soma todos.  

        var arr = [1,2,3,4,5];

        var reduce = arr.reduce( function(acumulado, atual, index, array) {
            return acumulado + atual;
        },0);

        console.log(reduce) // retorna o valor 15, porque vai pegar o valor acumulado, a primeira entrada e soma com o próximo; Ou seja: 
            0 + 1 = 1, 
            1 + 2 = 3, 
            3 + 3 = 6, 
            6 + 4 = 10, 
            10 + 5 = 15
    
    - acumulado - todo o valor acumulado. 
    - atual - valor atual
    - Se for string vai concatenar uma com a outra.

    _Obs: o '0', passado ao final diz em qual item ele deve começar. Se não utilizar o valor no final ele utiliza o primeiro + o segundo_
    _ Poderia ser no parâmentro function (x,y, index, array)

* reduceRight() - faz a redução da direita para a esquerda. Do último para o primeiro. Faz a redução ao contrário.

* indexOf() - procura se um valor existe no indice do array.  

        var arr = [1,2,3,4,5];
        console.log(arr.indexOf(3));
        
    - verifica se existe o 3 no array; Retorna o índice onde está o item procurado no arrya. Se não existir ele vai retornar -1
    - Passo como parâmetro o índice do valor que estou procurando.  
    - Posso dizer onde o _indexOf_ deve começar a busca por exemplo: 
            
            console.log(arr.indexOf('a',1)); 

        - 'a' - o valor que quero procurar  
        - 2 - a partir do indice 2  


            console.log(arr.indexOf('a') > -1); // retorna true ou false , estou verificando se o valor é maior que -1.


* lastIndexOf( ) - Mesma coisa que o indexOf, só que procura do final para o início.

* Array.isArray(nomeDoArray) - retorna se o elemento passado é array - true/false.