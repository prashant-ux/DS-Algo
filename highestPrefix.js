var a = ["flower", "flu", "flow", "flush"];
var b = "";

function checkPrefix(str1, str2) {
  let length1 = str1.length;
  let length2 = str2.length;
  let i = 0;
  let j = 0;
  result = "";
  while (i <= length1 - 1 && j <= length2 - 1) {
    if (str1[i] !== str2[j]) {
      break;
    }
    result += str1[i];
    j += 1;
    i += 1;
  }
  return result;
}

function longestCommonPrefix(a) {
  let prefix = a[0];
  let result = ""
  for (let i = 1; i < a.length; i++) {
    result = checkPrefix(prefix, a[i]);
  }
  console.log(result)
}

longestCommonPrefix(a);
