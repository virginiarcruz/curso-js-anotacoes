# API - DOM

* DOM - modelo do coumento em formato de objeto.
        - no momento em que o dom está sendo executado o JS também está sendo executado.
        - api DOM, transforma cada elemento em um nó

# Percorrendo Elementos

* .parentNode - vai percorrer o nó que é pai do nó que estou selecionando.  
Exemplo:

        var $main = document.querySelector('.main'); 
        console.log($main.parentNode); 

  - quero pegar a div main que está dentro de body. O resultado vai ser o pai de main que é o body

* .childNodes - traz todos os nós que são filhos (estão dentro) do elemento que estou buscando.

        console.log($main.childNodes); 
 
  - Vai retornar uma lista com os nós, filhos de main. 
  - Retorna uma NodeList não é um Array - uma lista de nós HTML  
  - As quebras de linha também são contadas como nós

* .firstChild - retorna o primeiro filho de main, pode variar conforme o espaço
                
                $main.firstChild; 


* .lastChild - retorna o último filho;

                $main.lastChild; 

* .nextSibling - mostra quem é o irmão, quem está abaixo daquela tag.   
  - Diferente de quem estádentro, mostra a tag irmã;

* .previousSibling - mostra o irmão anterior;

# Propriedades

* .nodeType - mostra o que tipo de nó selecionado.  
                
                console.log($main.nodeType);
                
  -  vai retornar 1

* .nodeValue - pega o valor daquele elemento chamado. É o elemento textual do text e comment.

        console.log($main.firstChild.nodeValue); 
        
  - vai mostrar o conteúdo do primeiro filho de main, o que vem dentro da tag main

* .nodeName - mostra o nome daquele nó, daquela tag, ex: section, div, text, header

* .children - não é padrozinada. Mas podemos utilizar. Traz uma coleção de elementos HTML. Os nós que são elementos HTML

        console.log($main.children);

* firstElementChild - traz só aqueles nós que são elementos do DOM. 
   - Este **ignora nós de texto solto ou de comentário**. Pega só o elemento de marcação.
   - Digo que quero o primeiro filho que é um elemento. Ignora nós de texto.

         $main.firstElementChild

* lastElementChildren - traz o último;
* nextElementSibling - traz o próximo elemento que é irmão;
* childElementCount - diz a quantidade de elementos HTML dentro de um nó. Exibe números.


# Métodos baseados no DOM, utilizados para a manipulação de elementos do DOM

* .hasAttribute(name) - passa o nome do atributo para verificar se o elemento tem aquele atributo que você passou por parâmetro.

        console.log($main.hasAttribute('.class')); 
        
  - Pergunto se o main tem class e ele **retorna true ou false**

* .hasAttributes - verifica se aquele elemento tem qualquer atributo

        console.log($main.firstElementChild.hasAttributes());
  
  - retorna se o elemento tiver qualquer atributo. **Retorna true ou false**;

* .appendChild(child) - adiciona um filho em algum elemento. No final passa o parâmetro que eu quero adicionar naquele elemento.

        var $main = document.querySelector('.main'); // pego o main
        var $mainContent = document.querySelector('.main-content');
        var $mainHeader = document.querySelector('.main-header');
        console.log( $mainContent.appendChild($mainHeader) );

  - Neste caso ele irá retirar o _mainHeader_ da posição inicial e colocar dentro do _mainContent_

* .insertBefore (tagQueVaiInserir, ApareçaAntesDeQuem) - insere o elemento antes da tag selecionada.

        var $firstText = $mainContent.firstChild;
        $mainContent.inserBefore($mainHeader, $firstText);

- antes do firstText quero que seja inserido o $mainheader dentro do maincontent

* .cloneNode(true ou false) - clona o nó que ja existe.
       
        $mainHeader.cloneNode(true); // quero clonar o mainHeader

* .hasChildNodes - verfica se aquele elemento tem nós de texto ou não. Retorna true ou false;
       
* .removeChild(quem vou remover) - remove o elemento filho.

        $mainHeader.removeChild($h1) // quero remover o h1 do mainHeader

* .replaceChild(new, old) - substitui o filho. Faz o replace.

        $main.replaceChild($mainHeader, $mainFooter);

  - Pega o $mainHeader e coloca no lugar do $mainFooter_

* createTextNode(text) - cria um nó de texto que preciso atribuir a uma variável. É um elemento do DOM
        
        var newTextNode = document.createTextNode('texto inserido');

        $main.appendChild(newTextNode); // vai inserir o texto dentro do main.

* document.createElement - você passa uma tag e ele cria o elemento

        var $newP = document.createElement('p'); // criei um novo elemento
        $newP.appendChild(newTextNode);  // vou colocar um texto dentro do p
        $main.appendChild($newP); // e vou colocar o novo p dentro do main

  - Dentro do main aparece um parágrafo com o texto de newTextNode_

# Atributos de Elementos do DOM

        var $main = document.querySelector('main');

* element.id 

        console.log($main.id) // deve mostrar o id do main

* element.className - posso também modificar a classe setando um valor

        $main.className;

        console.log($main.className = 'arroz'); 
        
  - Quando uso o = estou modificando o nome da classe main para arroz. Posso fazer a mesma coisa com o ID.

* getAttribute('class') - você passa o atributo que ele é no HTML. Retorna sempre string.

         $main.getAttribute('class'); // retorna a classe do main.

* setAttribute(attr, value) - posso modificar o nome do atributo ou criar novos atributos.

        $main.setAttribute('data-js', 'main-datajs'); modifica ou cria o nome da classe data-js


# Resolução do exercício - observações

* Tenho uma função construtora e quero extender, posso usar métodos. No caso abaixo retorna uma nodelist e vou chamar pelo prototype:  

        function DOM(tagName) {
          this.element = doc.querySelectorAll(tagName);
        };


        DOM.prototype.on = function on(eventType, callback) { // o this.element é um arrayLike
        Array.prototype.forEach.call(this.element, function (element) { // cada vez que entrar aqui vai atribuir um valor a element
        element.addEventListener(eventType, callback, false);
        });