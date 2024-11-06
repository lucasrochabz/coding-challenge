const isPalindrome = (string) => {
  let noSpace = string.replace(/\s+/g, '').toLowerCase();
  let reversed = noSpace.split('').reverse().join('');

  return noSpace === reversed;
};

const texto1 = 'arara';
const texto2 = 'A man a ma plan a canal Panama';
console.log(isPalindrome(texto1));
console.log(isPalindrome(texto2));
