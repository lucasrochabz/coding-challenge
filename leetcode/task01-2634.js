/*
  Dado um array de inteiros arr e uma função de filtragem fn, retorne um array filtrado filteredArr.

  A fn função recebe um ou dois argumentos:

  arr[i] - número do arr
  i - índice de arr[i]
  filteredArr deve conter apenas os elementos do arr para o qual a expressão fn(arr[i], i) avalia para um valor verdadeiro. Um  valor verdadeiro é um valor onde Boolean(value) retorna  true.

  Por favor, resolva sem o método integrado Array.filter.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) {
  return n > 10;
};
const newArray = filter(arr, fn);
console.log(newArray);
