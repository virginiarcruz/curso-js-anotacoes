# Expressões Regulares, repetidores, Caracteres de negação

* [] - corresponde a UM caractere dos que estiverem dentro da lista - [abc] - ou a ou b ou c
* () - grupo de captura, captura de trechos específicos
* \w - caracteres alphanuméricos
* \d - dígitos de 0 a 9
* \s - espaço em branco
* \n - nova linha, quebra de linha
*  . - qualquer caractere, exceto quebra de linha

# Caracteres de negação

* [^abc] -  o match deve ser feito em qualquer coisa que não seja a, b ou c. **A negação tem que ser sempre dentro da lista []**.
* \W - faz o match com qualquer caractere menos os alfanuméricos.
* \D - qualquer caractere que **não seja número**
* \S - qualquer caractere menos os _espaços em branco_   
Ex: pegar todos os caracteres do texto [\S\s]


# Repetidores

* {n,m} - representado pelas chaves. Item anterior vai se repetir no mínimo **n** vezes e no máximo **m** vezes.  
    Ex: Quero pegar número que se repitam no mínimo 2 vezes (18) e no máximo 4 (1981). 
                        
                \d{2,4}

* {n, } -  intervalo aberto - tem que ter no mínimo o número representado na chave. TEm que ter no mínimo 2 números
               
                \d{2,}

* {n} - intervalo onde se utiliza o item anterior exatamente aquele número setado.

                \d{4} // só o número que repete 4 vezes;

* ? - opcional - zero ou uma ocorrência do item anterior.
Ex: espaço em branco seguido de um número ou não.

            \s\d?

* + - faz o match com pelo menos um ou mais caracteres.

        \s+ // seleciona todos os _s_ do texto

* * - zero ou mais ocorrências do item anterior '\w*
* \w+ - qualquer caractere alfanumérico, quantos vezes forem necessários

# Exemplos reais

- tenho uma url:   
   http://www.google.com.br   
   https://google.com.br   
   http://google. 
   
   Quero validar as urls.  
    - tenho que fazer um match

   regex =  /https?:\/\/\w+[.\w]+/
    [.\w] - ponto seguido de qualquer palavra

- validar email:
    virginia@email.com
    rodrigues@gmail.com
    meunome@meuemail.org

    Regex - [\w+]+@\w+\.\w+([.\w]+)?

- Tenho essa sequencia = ?s=lala&b=bebe&c=cce

            var queryString = '?s=lala&b=bebe&c=cc';

            queryString.replace(/[?&](\w+)=(\w+)/g, fucntion (regex, key, value){
                    console.log(key,value)
            });

            s lala
            b bebe
            c cce
