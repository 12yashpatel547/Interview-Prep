function isAnagram(string1, string2){
  if(string1.length !== string2.length) {
    return false;
  }
  let countS1 = {};
  let countS2 = {};
  for(const i = 0; i<string1.length; i++) {
    countS1[string1[i]] = countS1.hasOwnProperty(string1[i]) ? countS1[string1[i]]+1 : 1;
    countS2[string1[i]] = countS2.hasOwnProperty(string1[i]) ? countS2[string1[i]]+1 : 1;
  }
  for(const letter of string1) {
    if(countS1[letter] !== countS2[letter]) {
      return false;
    }
  }
  return true;
}
