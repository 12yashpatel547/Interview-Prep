function reverseString(str) {
  return str.split('').reverse().join();
}

function reverseString2(str) {
  return [...str].reverse().join();
}

console.log(reverseString('Hello World'));
console.log(reverseString2('Hello World'));
