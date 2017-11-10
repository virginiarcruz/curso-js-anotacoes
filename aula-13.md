# Arrays - concat, reverse, forEach

* arr.toString() - converte array em string por virgula
* arr.concat(item) - faz mais ou menos o que o push faz. Gera um novo array com os novos valores. ..
Posso concatenar array com array arr.concat([],[]).
* arr.unshift() - adiciona o item no começo
* arr.shift() - remove o primeiro item do array
* arr.slice(0,3) - retorna uma parte do array. 
Passa o número do índice(0) após ao item que quero mostrar. A partir de item 0 quero remover (3)
* arr.splice(indice que quero começar e indice que quero terminar) - pode adicionar e remover itens no array. 
    - Ex: slice(1,4)
    - para adicionar - arr.splice(1,0, 'a') - que a partir do indice 1 adiciona um item (0), 'a'.
    - arr.splice(1,4, 2, 3, 4) - a partir do indice 1, adiciona 4 que será o 2, 3 e 4

# Foreach

  * arr.forEach - recebe uma function como parâmtro que recebe 3 parametros: item, index, e array. 
    - Semelhante e mais elegante que o uso do for, mais rápido também. É o método
    - Se não queo saber o index e o array passo só o índice que não tem problema.

          arr.forEach (function (item, index, array){
              console.log( item, index, array.)
          });

    - Exemplo para somar itens do array

        var arr = [1,2,3,4,5,6];
        var sum = 0;

        arr.forEach(function(item){
          sum+= item;
        });

        console.log(sum)

        O resultado será a soma de todos os itens do array

  * every() - aplica uma função que seu retorno baseado no item do array, retorna true ou false.

        var every = arr.every function(item) {
          return item < 5; // vai retornar true se todos os itens do array forem menor que 5
        }

  * some() - faz a mesma coisa do every, só que retorna true se pelo menos um dos elementos testado for true.

        var some = arr.some(function(item){
          return item % 2 === 0; // vai retornar true se pelo menos um item for true
        })


  * arr.map() - percorre todos os itens do array e retona um _novo array_
      - recebe uma função que percorre todo o array, todos os itens, só que retorna um novo array com os valores do método.

            var map = arr.map(function (item, index, array){
              return item + 1; 
          }); // todo item vai somar 1. Paassa em cada item do array e vai somar 1.

      -  diferença pro forEach é que já retorna um novo array, o forEach você precisa passar algum outro parametro pra retornar um novo array


  * arr.filter() - cria um novo array baseado nos itens que estou passando e vai retornar um novo array. Filtra os itens do array. 
    - Exemplo: caso eu queria um array com os itens do array passado que são maiores que 2

          var filter = arr.filter(function(item, index, array){
            return item > 2;
          })
          console.log(filter); // vai exibir só os itens do array que forem maiores que 2
