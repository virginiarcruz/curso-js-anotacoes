# Aula 29 - Anotações do Challenge-29

* Método init vai ser o método principal do app();

* this - dentro do objeto ele está referenciando o próprio objeto. Retorna o objeto em si.

        var obj = {
            lala: 'oi',
            init : function () {
                return this.lala;
            }
        };

        console.log(obj.init()); 

    - Vai imprimir 'oi'.

* Os métodos é sempre bom chamar com o mesmo nome.

        companyInfo: function companyInfo() 
        getCompanyInfo: function getCompanyInfo() 

# Melhorando o código

* quando preciso fazer um get(), preciso selecionar o item [0], quando só tem um item. Podemos passar por parametro o valor do get;
Vamos fazer isso modificando a lib DOM que foi feita.

        DOM.prototype.get = function get(index) {
            if (!index)
            return this.element[0];
            return this.element[index];
        };

 - A função recebe um index, que se ele não for passado retorna o elemento 0, se for passado ele retorna o index.


* pra não ficar chamando sempre o get() posso passar ele na função DOM

        function DOM(elements) {
            this.element = doc.querySelectorAll(elements);
            if (this.element.lenght === 1)
            return this.get();
        };

    - Vai retornar o primeiro elemento se a quantidade de elementos for igual a 1. Dessa forma não precisa utilizar o get quando tiver só um elemento.

* para não ficar chamando o new DOM.
    - Verifico na função do DOM se o this é uma instância do DOM, se não for, retorna  o new DOM e o valor que for passado no DOM.
    - Então posso retirar o new DOM e substituir pelo $ pra ficar parecido com jQuery, e na chamada da IIFE troco DOM por $

            function DOM(elements) {
                if (!(this instanceof DOM))
                return new DOM(elements);

                this.element = doc.querySelectorAll(elements);
                if (this.element.length === 1)
                return this.get();
            };

* pra não ficar chamando o app(), eu crio ele no início como IIFE. Ele consegue então guardar todos os estados por estar dentro de uma function.
Onde tem app(), uso como objeto normal app.
