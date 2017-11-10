# Expressoes Regulares, Métodos de string, Construtor RegExp, Caracteres Especiais

* ^ - início de string. Se for **negação** tem que estar dentro de uma lista.   
    Ex: ^p - minha string começa com 'p';
* $ - representa fim de string. Vai ser a última coisa adicionada.   
    Ex: >$, quero ver se o final da string termina com >
    Testar início e fim da string 
* m = flag após a / da expressão.  
    Ex: Faz a busca por mais uma linha. Por ex quando busco o caractere de início da string ele busca em todas as linhas.
* ? - é 1 ou 0 caractere do que vem antes dele. Captura o mínimo de caracteres necessários para fazer o match. (Captura não gulosa) 

    Ex: <h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>

         (<\w+>.+?(<\/\w+>)) - vai capturar a linha que começa com < e termina com >. Então captura início e fechamento de tag

* (?:) - somente agrupamento sem capturar. Ex: Quero fazer um agrupamento sem capturar.   
    Ex: junho ou julho.
                ju(?:n|l)ho - não faz a captura mas faz o match
* \1 e \2 - referência dentro de regex.
    Ex: No ex das tags, quero fazer o casamento de abertura, texto e fechamento da tag, quero garantir que o inicio tem o mesmo nome do final da tag

            (<(\w+)>(.+)(<\/(\1)>)) - com o \1 eu digo que quero que ele pegue o fechamento de tag com o mesmo nome da primeira captura


# Métodos de string

* match() - retorna um arry com o match ou retorna null se não encontrar o que retornar.
* replace() - pode usar regex e 
* split() - quebrar cada item da string e converter em array
    Ex: 111.222.333-44 
            
            111.222.333-44.split('.'); 
            retorna ['111','222', '333-44' ]
* search - faz uma busca na string e traz exatamente o indice onde foi encontrado o que busquei. Como o indexOf. Só busca até o primeiro item, independente se vocÊ utiliza /g ou não.


# Construtor RegExp

* Construtor

            var regex = new RegExp('nando');
            regex vai exibir /nando/

            fernando.match( regex); // ["nando"]
            var name = "fer123nando" //

            regex - new RegExp('\\d'); preciso escapar a barra então precisa da \\, se colocar só uma ele vai retornar a regex.
            Mesa coisa com o \. precisa ser \\.

            Quero pegar só os números
            name.match(/\d/g) //  ['1','2','3'];

    Posso passar um segundo parâmetro no construtor que são as flags.   
    ex: var regex = new RegExp('nando', 'g');

* test - busca uma string, a diferença é que verifica se o item existe. Não funciona com string, funciona com a RegExp. **Só pode ser usado com regex, não pode ser usado com string**
        Ex: name = fernando

            /\d/.test(name) // retorna true
            /z/.test(name) // retorna false

* exec - faz uma junção cada vez que é executado.  
    Ex: var regex = /\d/g e var name = 'fer123nando' var

            regex.exec(name) // retorna ["1"] _e cada vez que executa ele exibe o próximo número. Até que todos os resultados seja exibidos e ele retorna null_

            var regex = /\d/g;
            var name = 'fer123nando';
            var result;
            while ( result = regex.exec(name) !== null) {
                console.log(result);  // retorna ["1"] retorna ["2"] retorna ["3"]
            }

    - Está procurando por números, vai retornar a ocorrência toda vez que encontrar

            regex.lastIndex - retornar 4 que é o último índice


# Caracteres especiais

* \n - quebra de linha. Ex: console.log('Resultado:\n', result)
* \t - faz uma tab
* \ - escapar caracteres dentro da string, por exemplo uma aspa. 
    - Ex: Julio's > Julio\'s