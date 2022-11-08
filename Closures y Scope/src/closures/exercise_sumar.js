export function sumWithClosure(firstNum) {
    function anidado(secondNum) {
      if (secondNum) {
        return secondNum + firstNum;
      }
      return firstNum;
    }
    return anidado;
  }

  sumWithClosure(2)(3);