# Expressões Regulares, Tabela Unicode

* Manipulação de textos/strings;
* Pra utilizar usa-se entre duas barras / / .
* Regex - existem manipuladores de Regex <https:regex101.com>

Ex: /m/ - quero pegar de um texto todas as letras M

        /m/g

_Obs: Se uso de forma global sem a expressão após a / ele busca pelo primeiro item que achar._

- g: Entrada Global
- i: ignore case

# Objeto de Expressões Regulares

* RegExp() - posso atribuir uma variável na expressão regular. 
    Ex. Trazer todos os 'm' do texto:

        var texto = 'Lorem Ipsum site amet dollor sit amet dolor Mophus Mata sit doloWM';

        texto.match(/m/g);

* \w : todos os caracteres alfanuméricos, inclusive o _ (underscore)
* \d : representa dígitos

        texto.match(/\w/g); - traz um array com todas as letras da string
* sempre que o regex não conseguir fazer um match ele retorna null

    Ex: Encontrar números  
    -  var texto.match(/\d/) - todos os números
    - var texto.match(/\d\d/) - carrega 2 números
    - var texto.match(/\d\d/g) - carrega 2 números globalmente. Trás classes de caracteres.


* classes de caracteres - quando quero pegar listas específicas. Iniciada por []
    Ex: quero mostrar todos os 'de' e 'da'

        var texto.match(/\d/) - todos os números /de|da/g
    
    
    Ex: quero buscar a ou b ou c ou d
    
         /[abcd]/g

* Posso fazer um agrupamento de caracteres - utilizo (). 
    Ex: quero uma lista que traga 1875 e 817

        /(1875)(817)/g

* Sequência de caracteres. Ex: 123456789

        /[0-9]/g - de 1 ao 9
        /[a-z]/g - de a a z 
        /[a-g]/g - de a a g - minusculos, se quiser maiúsculo, coloco as letras maiúsculas. 
        /0|1|2|3/ - 0 ou 1 ou 2 ou 3
        /[A-Za-z0-9]/ ou [\w] - pega todos os caracteres alfanuméricosßß
        /[A-z]/ - pega todo tipo de caractere até os especiais

* Tabela Unicode -  <http://www.ftrain.com/unicode>

* **replace()** - se quero fazer replace de todos os itens
    Ex: quero substituir todos os 'de' por 'DE';

            texto.replace(/de/, 'DE') - só muda o primeiro
            texto.replace(/de/g, 'DE') - faz o replace de todos os itens 'de'

* Posso agrupar um item por () fazendo **grupos de captura** - $1 - pega a primeira captura, $2 a segunda

            texto.replace(/(de)/g, '--$1--') / Con --de-- --de--

* duas capturas - 
            texto.replace(/(d)(e)/g, '$1$1') / Condd dd
            texto.replace(/(d)(e)/g, '$1$2') / Conde de
            texto.replace(/(d)(e)/g, '$&') / Pega todas as capturas 

* posso utilizar _function_

        texto.replace(/(d)(e)/g, function(capturaTotal, d, e) {
            return (d + e).toUpperCase();
        })

    - converter todas as letras para maiúsucla

            'Virginia'.replace(/(\w)/g), function (capturaTotal, letra) {
                return letra.toUpperCase();
            }
    - converter letras intercaladas maiúsucla e minuscula
            
            'Virginia'.replace(/(\w)(\w)/g), function (capturaTotal, letra1, letra2) {
                return letra1.toUpperCase() + letra2.toLowerCase();
            }