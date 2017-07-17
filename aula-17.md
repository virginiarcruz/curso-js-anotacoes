# Expressões Regulares, Tabela Unicode

* Manipulação de textos/strings;
* Pra utilizar usa-se entre duas barras / / .
* Regex - existem manipuladores de Regex <https:regex101.com>

Ex: /m/ - quero pegar de um texto todas as letras M

        /m/g

_Obs: Se uso de forma global sem a expressão após a / ele busca pelo primeiro item que achar._

g: Global
i: ignore case

# Objeto de Expressões Regulares

* RegExp() - posso atribuir uma variável na expressão regular. 
    Ex. Trazer todos os 'm' do texto:

        var texto = 'Lorem Ipsum site amet dollor sit amet dolor Mophus Mata sit doloWM';

        texto.match(/m/g);

* \w : todos os caracteres alfanuméricos
* \d : representa dígitos

        texto.match(/\w/g); - traz um array com todas as letras da string
* sempre que o regex não conseguir fazer um match ele retorna null

    Ex: Encontrar números

        var texto.match(/\d/) - todos os números
        var texto.match(/\d\d/) - carrega 2 números
        var texto.match(/\d\d/g) - carrega 2 números globalmente. Trás classes de caracteres.


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
        /0|1|2|3/ - 0 ou 1 ou 2 ou 3

* Tabela Unicode -  <http://www.ftrain.com/unicode>

* **replace()** - se quero fazer replace de todos os itens
    Ex: quero substituir todos os 'de' por 'DE';

            texto.replace(/de/g, 'DE')

* Posso agrupar um item por () - $1 - pega a primeira captura, $2 a segunda

            texto.replace(/(de)/g, '--$1--') / Con --de-- --de--

* duas capturas - 
            texto.replace(/(d)(e)/g, '$1$1') / Condd dd
            texto.replace(/(d)(e)/g, '$1$2') / Conde de
            texto.replace(/(d)(e)/g, '$&') / Pega todas as capturas 

* posso utilizar _function_

        texto.replace(/(d)(e)/g, function(capturaTotal, d, e) {
            return (d + e).toUpperCase();
        })