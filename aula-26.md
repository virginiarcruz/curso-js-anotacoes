# Aula 26 - DOM

* DOM - modelo do coumento em formato de objeto.

# Percorrer Elementos

* .parentNode - vai percorrer o nó que é pai do nó que estou selecionando.  
Exemplo:

        var $main = document.querySelector('.main'); // quero pegar a div main
        console.log($main.parentNode); // vai retornar o pai de main;

* .childNodes - traz todos os nós que são filhos (estão dentro) do elemento que estou buscando.

        console.log($main.childNodes); // vai retorna uma lista com os nós, filhos de main

_as quebras de linha também são consideradas como nós. Cada enter conta como nó_

* .firstChild - $main.firstChild; retorna o primeiro filho;
* .lastChild - $main.lastChild; retorna o último filho;
* .nextSibling - mostra quem é o irmão, quem está abaixo daquela tag. Diferente de quem estádentro, mostra a tag irmã;
* .previousSibling - mostra o irmão anterior;
* .nodeType - mostra o que tipo de nó selecionado.
* .nodeValue - pega o valor daquele elemento chamado. É o elemento textual do text e comment.

        console.log($main.firstChild.nodeValue); // vai mostrar o conteúdo do primeiro filho de main

* .nodeName - mostra o nome daquele nó
* .children - não é pradrozinada. Mas podemos utilizar. TRaz uma coleção de elementos HTML

        console.log($main.children);

* firstElementChild - $main.firstElementChild - traz só aqueles nós que são elementos do DOM. Este **ignora nós de texto solto ou de comentário**. Pega só o elemento de marcação.

* lastElementChildren - traz o último;
* nextElementSibling - traz o próximo elemento que é irmão;
* childElementCount - quantidade de elementos dentro de um nó. Exibe números.


# Métodos baseados no DOM, utilizados para a manipulação de elementos do DOM

* .hasAttribute(name) - passa o nome do atributo para verificar se o elemento tem aquele atributo que você passou por parâmetro.

        console.log($main.hasAttribute('.class')); // Pergunto se o main tem class e ele retorna true ou false

* .hasAttributes - verifica se aquele elemento tem qualquer atributo

        console.log($main.firstElementChild.hasAttributes()); // retorna se o elemento tiver qualquer atributo. Retorna true ou false;

* .appendChild(child) - adiciona um filho em algum elemento. No final daquele elemento.

        var $main = document.queruSelector('.main');
        var $mainContent = document.queruSelector('.main-content');
        var $mainHeader = document.queruSelector('.main-header');
        $mainContent.appendChild($mainHeader);

_Neste caso ele irá retirar o mainHeader da posição inicial e colocar dentro do mainContent_

* .insertBefore (tagQueVaiInserir, ApareçaAntesDE) - insere o elemento antes da tag selecionada.

        var $firstText = $mainContent.firstChild;
        $mainContent.inserBefore($mainHeader, $firstText);

* .cloneNode(true ou false) - clona o nó que ja existe.
       
        $mainHeader.cloneNode(true);

* .hasChildNodes - verfica se aquele elemento tem filhos. Retorna true ou false

* .removeChild(quem vou remover) - remove o filho.
* .replaceChild(quem vou substituir) - substitui o filho.
* document.createElement - você usa uma tag e ele cria o elemento

        var $newP = document.createElement('p');

# Atributos

* element.id 

        console.log($main.id) // deve mostrar o id do main

* element.className - posso tanbém modificar a classe setando um valor

        $main.className = 'arroz'

* getAttribute('class') - você passa o atributo que ele é no HTML. 

         $main.getAttribute('class'); // retorna a classe do main.

* setAttribute - posso modificar o nome do atributo ou criar

        $main.setAttribute('data-js', 'main-datajs'); modifica ou cria o nome da classe data-js
