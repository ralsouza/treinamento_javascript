(function() {
  /*
    Envolva todo o código desse desafio em uma IIFE.
    Crie um arquivo chamado index.html e adicione esse script ao HTML.
  */

  /*
    Crie uma função construtora chamada "Person". Esse construtor deve ter
    as seguintes características:
      - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
      - Deverá ter 3 propriedades:
      - `name` - que receberá o valor do parâmetro `name`;
      - `lastName` - que receberá o valor do parâmetro `lastName`;
      - `age` - que receberá o valor do parâmetro `age`;
    - Deverá ter 3 métodos:
      - `getFullName` - que deve retornar o nome completo do objeto criado,
      no formato:
        - "[NAME] [LASTNAME]"
      - `getAge` - que deverá retornar a idade (age);
      - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
      iremos passar um único argumento, que é a quantidade de anos que devem ser
      adicionados à idade original (age). Esse método deverá retornar o objeto
      que será instanciado.
  */
  function Person( name, lastName, age ) {

    this.name = name;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function getFullName() {

      return this.name + ' ' + this.lastName;
    };

    this.getAge = function getAge() {

      return this.age;
    };

    /*
      addAge - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
      iremos passar um único argumento, que é a quantidade de anos que devem ser
      adicionados à idade original (age). Esse método deverá retornar o objeto
      que será instanciado, para conseguir isso usaremos o arguments.
    */
    this.addAge = function addAge() {

      this.age += arguments[0];

      // Retornar o this, que é um apontamento para
      // o objeto que será instanciado.
      return this;
    };
  }

  /*
    Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
    pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
    parâmetros corretamente para o construtor para criar as novas pessoas.
    Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
  */
  console.log( 'Novas pessoas criadas à partir de Person:' );
  
  var rafael = new Person('Rafael', 'Lima', 36 );

  var cristiane = new Person('Cristiane', 'Lima', 35);

  var mila = new Person('Mila', 'Lima', 4);

  // Exibição do nome
  console.log( rafael );

  console.log( cristiane );

  console.log( mila );

  /*
    Mostre no console o nome completo de cada pessoa.
  */
  console.log( '\nNomes das pessoas:' );
  console.log( rafael.getFullName() );
  console.log( cristiane.getFullName() );
  console.log( mila.getFullName() );

  /*
    Mostre no console as idades de cada pessoa, com a frase:
    - "[NOME COMPLETO] tem [IDADE] anos."
  */
  console.log( '\nIdade das pessoas:' );

  console.log( rafael.getFullName(), 'tem' ,rafael.getAge(), 'anos.' );
  console.log( cristiane.getFullName(), 'tem', cristiane.getAge(), 'anos.' );
  console.log( mila.getFullName(), 'tem', mila.getAge(), 'anos.' );

  /*
    Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
    cada um. A frase deverá ser no formato:
    - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
  */
  console.log( '\nNova idade das pessoas:' );
  
  // O retorno this invoca o próprio objeto, logo é possível encadear os objetos
  // O encadeamento pode ser usado desde que seja retornado um objeto
  console.log( rafael.getFullName(), 'agora tem', rafael.addAge(3).getAge(), 'anos.' );
  console.log( cristiane.getFullName(), 'agora tem', cristiane.addAge(2).getAge(), 'anos.');
  console.log( mila.getFullName(), 'agora tem', mila.addAge(1).getAge(), 'anos.' );

})();
