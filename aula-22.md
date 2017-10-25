# Propriedade e métodos de funções, Arry-like como Arrays, Editorconfig

* .name - retorna o nome da função como string.
* .length - conta a quantidade de parâmetros que a função pode receber.

            function myfunction (a,b,c,d) {  }
            console.log( myfunction.length);

   - Retorna quantos parâmetros a função pode receber.

* toString() - converte toda a função em uma string.

         function myfunction (a,b,c,d) {
        }
        
        console.log( myfunction.toString());

* .call() - invoca a função, é a mesma coisa que chamar a função (myfunction()), **a diferença é que posso chamar o (this) dentro do call**.  
        - Posso dizer quem é o this daquela função.

        call(this);

        function myfunction (a,b,c,d) {
             console.log(this.lastName) ;
        }

        var obj = { lastName: 'Daciuk'};

        myfunction.call( obj ); 

    - posso criar outro objeto (obj2)

                var obj2 = {lastname : 'Silva'};
                myfunction.call( obj2 ); o console vai imprimir Silva 

    - No exemplo acima estou dizendo com o método call(obj) que agora ele faz parte da função, então agora a função possui um lastName e será exibido no console. Mesmo o objeto sendo criado depois.
    - Quando eu chamar o _this_ dentro da função eu vou dizer que ele está se referindo ao _obj_

* call(this, arg1, arg2, arg3) - Além disso, é possível chamar argumentos para a função. Sendo o this o primeiro parâmentro

        function myfunction (a,b,c,d) {
             console.log(this.lastName) ;
        }

        var obj { lastName: Daciuk};
        var obj2 { lastName: Silva};

        myfunction.call( obj2, a, b, c, d ); //  que são os parâmentros da função criada.
   
   - O primeiro parâmetro é sempre o _this_ e os outros são os demais parâmetros daquela função.
   - **Quando não tiver o this**, posso passar null, um objeto vazio (obj{}), para ser o this, ou ainda posso passar a própria função, sem executar.

* apply - Passando os parâmetros de forma dinâmica. Cada item o array vai ser quebrado em um argumento da função.  
        - Passa pelos argumentos 1 a 1. Por exemplo um array.

         function myfunction (a,b,c,d) {
             console.log(this.lastName) ;
        }

        var obj { lastName: Daciuk};
        var obj2 { lastName: Silva};
        var arr = [1,2,3,4];

        myfunction.apply ( obj2, arr ); 

 - Vai imprimir Silva, 1, 2, 3, 4


# Prototype

* prototype - onde tem todos os métodos do objeto principal onde criamos novos objetos.  É o protótipo dos construtores e partir dele é possível estender os objetos. Fazer herança no JavaScript.

        function Myfunction (name, lastName) {
             this.name = name;
             this.lastName = lasName;
        }

        Myfunction.prototype.fullName = function() {
            return this.name + '' + this.lastName;
        }

        var fernando = new Myfunction('Fernando', 'Daciuk');
        console.log(fernando.fullName());

- Posso ainda adicionar outras propriedades na função criada. Ex:

        Myfunction.prototype.age = 30;
        console.log(fernando.age);

- Pode ser sobrescrito.

        Myfunction.prototype.age = 10;

  - se a propriedade estiver dentro do objeto, dentro da function Myfunction ele vai prevalecer, mas se criar depois posso sobrescrever.


# Array-like como Arrays

* Array.prototype - Neste formato consigo estender qualquer objeto JS.  
Passa o arguments como o this da função. O forEach vai iterar o arguments. Consigo no caso abaixo fazer a iteração como se fosse o array.   
Facilita a leitura. 
  - Todas as propriedades e métodos de array estão todos pendurados no prototype.

        function myfunction () {
             Array.prototype.forEach.call(arguments, function (item, index){
                console.log( item );
             });
        }

        myFunction(1,2,3,4,5,6,7,8);
    
    Posso utilizar o **reduce()**:

        function myfunction () {
             var result = Array.prototype.reduce.call(arguments, function (acumulado, atual, index){
                return +acumulado + +atual;
             });
             console.log(result);
        }

        myFunction(1,2,3,4,5,6,7,8);

**IMPORTANTE** - SE COLOCAR O return +acumulado + +atual AO INVÉS DE return acumulado + atual, ELE CONVERTE O VALOR PARA NÚMERO. POSSO USAR O + OU O NUMBER.

# Editorconfig

* O arquivo editorconfig na raiz do projeto faz com que todos os arquivos tenham a configuração setada neste arquivo.  
É utilizado para padronização dos códigos.