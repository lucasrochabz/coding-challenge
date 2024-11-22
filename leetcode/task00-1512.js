// ATIVIDADE NÃO FUNCIONANDO CORRETAMENTE

function countGoodPairs(nums) {
  let goodPairsCount = 0; // Inicializa o contador de pares bons

  // Loop externo para iterar sobre cada elemento do array
  for (let i = 0; i < nums.length; i++) {
    // Loop interno para encontrar pares com o índice j maior que i
    for (let j = i + 1; j < nums.length; j++) {
      // Verifica se os elementos são iguais
      if (nums[i] === nums[j]) {
        goodPairsCount++; // Incrementa o contador se for um par bom
      }
    }
  }

  return goodPairsCount; // Retorna o número total de pares bons
}

// Exemplo de uso
const nums = [1, 2, 3, 1, 1, 3];
const result = countGoodPairs(nums);
console.log(result); // Saída: 2
