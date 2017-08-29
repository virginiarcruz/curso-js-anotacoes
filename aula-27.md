# Aula 27 - DOM Fragments

* Revisão:  

    * .childNdes
    * .firstChild
    * .lasChild
    * .nextSibling
    * .previousSibling
    * .nodeName
    * .nodeType
    * .nodeValue

* Somente Elements

    * .parentNode
    * .firstElementChild
    * .lastElementChild
    * .nextElementSibling
    * .previousElementSibling
    * .childElementCount = children.lenght

* DOM - Métodos

    * .hasAttibute(attr)
    * .hasAttibutes()
    * .appendChild(child)
    * .insertBefore(node, beforeWhom)
    * .cloneNode(cloneChildren? (boolean))
    * .hasChildNodes()
    * .removeChild()
    * .replaceChild(new, old)
    * .document.createTextNode(text)

* Atributos HTML

    * element.id
    * element.className
    * element.value
    * element.href(para links)
    * element.title
    * element.src


# DOM - Manipular com performance

    * document.createDocumentFragment() - cria um fragmento de documento, como se fosse um document em branco para que você possa manipular nós. Então você trabalha fora do DOM e inclui os elementos todos de uma vez só.

            var fragment = document.createDocumentFragment();
            var childP = document.createElement('p');
            var textChildP = document.createTextNode('Texto da tag P!');
    
            chilP.appendChild(textChildP); // adicionei o texto dentro do <p>
            fragment.appendChild(childP); e adicionei o <p> dentro do fragment

            document.body.appendChild(fragment); // adiciono só depois que terminar de manipular.
    
_manipular sempre dentro de um document fragment porque é mais rápido e mais performatico para manipular o DOM_

# Posição dos scripts no HTML

* Colocar o script com fragments no final do código porque se colocar no início o HTML não foi carregado ainda.

        document = DOMContentLoaded // dispara o evento depois que o documento é carregado.


* para fazer carregar tudo depois que o DOM for carregado:

        function afterDomDocumentLoaded() {
            var fragment = document.createDocumentFragment();
            var childP = document.createElement('p');
            var textChildP = document.createTextNode('Texto da tag P!');
    
            chilP.appendChild(textChildP); 
            fragment.appendChild(childP); 

            document.body.appendChild(fragment);
        };
        
        document.addEventListener('DOMContentLoaded', afterDomDocumentLoaded, false);

* window = load

# Técnicas Ninja

* copiar arrays:

        var arr = [1,2,3,4,5];
        var arr2 = arr.map( function(item) {
                return item;
        });

ou por slice

        var arr2 = arr.slice(); // sem índice ele imprime todos os números

Se quero copiar divs por exemplo, elas virão como **arraylike** e não como array, então tenho que fazer por Array.prototype. Serão o mesmo array só que cópias diferentes.

        var $divs = document.querySelectorAll('div'); // pega todas as divs do documento
        var $divsCopy = Array.prototype.slice.call($divs); // utilizando uma linha faz a copia do array

        console.log($divs, $divCopdy, $divs === $divCopy);


* Como saber o tipo de dado real do elemento.

* Object.prototype.toString - retorna o tipo do objeto. Ex, que o objeto é do tipo Array, que a function é do tipo Function e etc.

        Object.prototype.toString.call(objeto);

_Testando os tipos de objeto_
        
        function is(obj) {
                return Objetct.prototype.toString.call(obj);
        }

        function isArray(){
            return is(obj) === '[object Array]';
        }

        function isObjetct(){
            return is(obj) === '[object Objetc]';
        }

        console.log( isArray([1,2,3]) ); o retorno será true
        console.log( isObject([prop:1, prop:2]) ); o retorno será true

