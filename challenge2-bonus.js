// Desafio 11
function generatePhoneNumber(numbers) {
    if (numbers.length === 11) {
      for (let index = 0; index < numbers.length; index += 1) {
        let counterNumber = 0;
  
        for (let i in numbers) {
          if (numbers[index] === numbers[i]) {
            counterNumber += 1;
          }
          if (numbers[index] >= 10 || numbers[index] < 0 || counterNumber >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
        counterNumber = 0;
      }
  
      const ddd = `${numbers[0]}${numbers[1]}`;
      const fivenumbers = numbers.slice(2, 7).toString().replace(/,/g, '');
      const fournumbers = numbers.slice(7, 11).toString().replace(/,/g, '');
      return `(${ddd}) ${fivenumbers}-${fournumbers}`;
    }
    return 'Array com tamanho incorreto.';
  }
  
  console.log(generatePhoneNumber())
  
  // Desafio 12
  function triangleCheck(x, y, z) {
    if ((x <= y + z && x > Math.abs(z - y))
      || (y <= x + z && y > Math.abs(z - x))
        || (z <= x + y && z > Math.abs(x - y))) {
      return (true);
    }
    return (false);
  }
  console.log(triangleCheck(10, 13, 2))
  
  
  // Desafio 13
  function hydrate(string) {
    const numbers = string.match(/\d+/g);
    let result = 0;
    for (let index = 0; index < numbers.length; index += 1) {
      result += parseInt(numbers[index], 10);
    }
    if (result === 1) return `${result} copo de água`;
    return `${result} copos de água`;
  }
  
