/*
  Dado um inteiro n, retorna uma counter função. Esta counter função inicialmente retorna n e então retorna 1 a mais que o valor anterior toda vez subsequente que é chamada ( n, n + 1, n + 2, etc).
*/

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    n = n + 1;
    return n - 1;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
