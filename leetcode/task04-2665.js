/*
  Escreva uma função createCounter. Ela deve aceitar um inteiro inicial init. Ela deve retornar um objeto com três funções.

  As três funções são:

  increment() aumenta o valor atual em 1 e depois o retorna.
  decrement() reduz o valor atual em 1 e depois o retorna.
  reset() define o valor atual init e então o retorna.
*/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function (init) {
  let current = init;
  return {
    increment: function () {
      current = current + 1;
      return current;
    },
    decrement: function () {
      current = current - 1;
      return current;
    },
    reset: function () {
      current = init;
      return current;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
