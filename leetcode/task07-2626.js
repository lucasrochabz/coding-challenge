/*
  Dado um array de inteiros nums, uma função redutora fn e um valor inicial init, retorne o resultado final obtido pela execução da fn função em cada elemento do array, sequencialmente, passando o valor de retorno do cálculo no elemento anterior.

  Este resultado é alcançado através das seguintes operações: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...até que cada elemento no array tenha sido processado. O valor final de val é então retornado.

  Se o comprimento do array for 0, a função deverá retornar init.

  Por favor, resolva-o sem usar o método integrado Array.reduce.
*/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }

  let accum = init;
  for (let i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i]);
  }
  return accum;
};
