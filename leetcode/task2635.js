/*
  Dado um array de inteiros  arr e uma função de mapeamento  fn, retorne um novo array com uma transformação aplicada a cada elemento.
  O array retornado deve ser criado de forma que  returnedArray[i] = fn(arr[i], i).
  Por favor, resolva sem o método integrado Array.map.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function (arr, fn) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const index = fn(arr[i], i);
    newArr.push(index);
  }

  return newArr;
};
