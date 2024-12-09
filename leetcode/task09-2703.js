/*
  Escreva uma função  argumentsLengthque retorne a contagem de argumentos passados a ela.
*/

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result = result + 1;
  }
  return result;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
