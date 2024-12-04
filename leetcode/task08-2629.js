/*
  Dado um conjunto de funções, retorne uma nova função que seja a composição de funções do conjunto de funções.[f1, f2, f3, ..., fn]fn

  A composição da função é [f(x), g(x), h(x)] . fn(x) = f(g(h(x)))

  A composição funcional de uma lista vazia de funções é a função identidade f(x) = x .

  Você pode assumir que cada função na matriz aceita um inteiro como entrada e retorna um inteiro como saída.
*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */

var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return function (x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
