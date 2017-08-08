# Use strict, Objeto String

* use strict - uma diretiva que diz ao browser que tudo o que está lá dentro vai ser resolvido, os problemas na ES3 por ex.  
    * Uso quando quero dizer que aquele escopo é um escopo restrito.  
    * Faço como uma string normal. 'user strict' dentro da IIFE.

    * with() - coloco o objeto que quero acessar. Vai dimunuir a quantidade de chamadas se tiver um objeto muito grande.  
    _No modo estrito ele não é permitido._

    * this - dentro de use stric o this é undefined

    * delete - exibe erro de sintaxe se ele não puder deletar


# Objeto string - metodos


 * .length - conta os caracterires de uma string   
 * charAt(index) - diz qual é o caractere no índice que eu passar pra ele.
        
        var vir = new String('Virginia'); - construtor de string

        virginia.charAt(0) - exibe 'v'
 * .concat(string1, string2) - concatena as strings sem modificar a prinicipal. Posso utilizar também o valor **+=** this.valor, que vai concaternar da mesma forma.

 * indexOf(string , [start]) -  busca a string no indice passado 
 * replace(string,string) - troca os caracteres. Faz a substituição somente da primeira string encontrada
 * slice(start, end) - pega o valor do intervalo passado. Ex: for.slice(3,6)  

 * split([separador], limite) - quebra a string e transforma em um array. Se não passar nenhum parâmetro ele cria um array com a string inteira. Se passar ele quebra a partir do indice passado. Gera um novo array

            var arrVir = vir.split('r'); // ['vi', 'g'. 'i', 'n', 'i', 'a']
            var arrVir = vir.split(' '); // ['v', 'i', 'r', 'g'. 'i', 'n', 'i', 'a'] 
    
    _Posso juntar com outro array utilizando o .join()_

 * substring(start, end) - pego uma parte da string. Se o numero inicial for maior que o final pega a string **contando do final para o inicio**.

 * toLowerCase - faz com que todas as palavras da string fiquem em caixa baixa
 * toUpperCase - todas as letras em maiúscula
                
        vir.Chart(0).toUpperCase();


Para deixar a primeira maiuscula e as demais minusculas, posso utilizar métodos encadeados:


         var newVir = vir.Chart(0).toUpperCase() + vir.slice(1);
                


        
