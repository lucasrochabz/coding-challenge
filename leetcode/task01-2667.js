/*
  Escreva uma função createHelloWorld. Ela deve retornar uma nova função que sempre retorna "Hello World".
*/

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return 'Hello World';
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
