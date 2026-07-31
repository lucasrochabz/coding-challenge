/*
  Dada uma função fn, retorne uma nova função que seja idêntica à função original, exceto que ela garante fn que seja chamada no máximo uma vez.

  Na primeira vez que a função retornada for chamada, ela deverá retornar o mesmo resultado que fn.
  Toda vez que for chamado subsequentemente, ele deve retornar undefined.
*/

/**
 * @param {Function} fn
 * @return {Function}
 */

var once = function (fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...agrs);
      return result;
    }
    return undefined;
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
