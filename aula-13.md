# Arrays - concat, reverse, forEach

arr.toString() - converte array em string por virgula

arr.concat(item) - faz mais ou menos o que o push faz. Gera um novo array com os novos valores.
Posso concatenar array com array arr.concat([],[]).

arr.unshift() - adiciona o item no começo
arr.shift() - remove o primeiro item do array

arr.slice(0,3) - retorna uma parte do array. 
Passa o número do índice(0) após ao item que quero mostrar. A partir de item 0 quero remover (3)

arr.splice(indice que quero começar e indice que quero terminar) - pode adicionar e remover itens no array. Ex: slice(1,4)

para adicionar - arr.splice(1,0, 'a') - que a artir do indice 1 adiciona um item (0), 'a'.

arr.splice(1,4, 2, 3, 4) - a partir do indice um, adiciona 4 que será o 2, 3 e 4

every() / some()

arr.map() - percorre todos os itens do array e retona um novo array

arr.filter() - cria um novo array baseado nos itens que estou passando e vai retornar um novo array
