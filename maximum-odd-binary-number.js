/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
  let result = ""
  if (s.length < 2) {
      return s
  }

  let zeroCount = 0
  let oneCount = 0

  let arrayString = s.split("")
  for (let i = 0; i < arrayString.length; i++) {
      if (arrayString[i] == '1') {
          oneCount++
      } else {
          zeroCount++
      }
  }

  if (oneCount > 1) {
      for (let i = 0; i < oneCount -1; i++) {
          result += "1"
      }
  }

  for (let i = 0; i < zeroCount; i++) {
      result += "0"
  }

  return result += "1"
};