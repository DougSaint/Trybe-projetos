// Desafio 1
function compareTrue(x, y) {
    if (x === true && y === true) {
      return true;
    }
    return false;
  }
  
  // Desafio 2
  function calcArea(base, height) {
    return (base * height) / 2;
  }
  
  // Desafio 3
  function splitSentence(str) {
    return (str.split(' '));
  }
  
  // Desafio 4
  function concatName(arr) {
    let resposta = `${arr[arr.length - 1]}, ${arr[0]}`;
    return (resposta);
  }
  
  // Desafio 5
  function footballPoints(wins, ties) {
    let total = (wins * 3) + ties;
  
    return total;
  }
  
  // Desafio 6
  function highestCount(arr) {
    let count = 0;
    let biggest = arr[0];
  
    for (let x = 0; x < arr.length; x += 1) {
      if (arr[x] > biggest) {
        biggest = arr[x];
      }
    }
  
    for (let x = 0; x < arr.length; x += 1) {
      if (arr[x] === biggest) {
        count += 1;
      }
    }
    return count;
  }
  7
  // Desafio 7
  function catAndMouse(mouse, gato1, gato2) {
    let cat1 = Math.abs(gato1 - mouse);
    let cat2 = Math.abs(gato2 - mouse);
  
    if (cat1 === cat2) return ('os gatos trombam e o rato foge');
    if (cat1 < cat2) return ('cat1');
    return ('cat2');
  }
  
  // Desafio 8
  function fizzBuzz(arr) {
    let fizzBuzz = [];
    for (let x = 0; x < arr.length; x += 1) {
      if (arr[x] % 3 === 0 && arr[x] % 5 === 0) fizzBuzz.push('fizzBuzz');
      else if (arr[x] % 3 === 0) fizzBuzz.push('fizz');
      else if (arr[x] % 5 === 0) fizzBuzz.push('buzz');
      else fizzBuzz.push('bug!');
    }
    return fizzBuzz;
  }
  
  
  // Desafio 9
  function encode(str) {
    let newstr = str;
    for (let x = 0; x < str.length; x += 1) {
      switch (newstr[x]) {
      case 'a':
        newstr = newstr.replace('a', '1');
        break;
      case 'e':
        newstr = newstr.replace('e', '2');
        break;
      case 'i':
        newstr = newstr.replace('i', '3');
        break;
      case 'o':
        newstr = newstr.replace('o', '4');
        break;
      case 'u':
        newstr = newstr.replace('u', '5');
        break;
        default:
      }
    }
    return newstr;
  }
  
  function decode(str) {
    let newstr = str;
  
    for (let x = 0; x < str.length; x += 1) {
      switch (newstr[x]) {
      case '1':
        newstr = newstr.replace('1', 'a');
        break;
      case '2':
        newstr = newstr.replace('2', 'e');
        break;
      case '3':
        newstr = newstr.replace('3', 'i');
        break;
      case '4':
        newstr = newstr.replace('4', 'o');
        break;
      case '5':
        newstr = newstr.replace('5', 'u');
        break;
      default:
      }
    }
    return newstr;
  }
  
  // Desafio 10
  function techList(tech, people) {
    if (!tech.length || people === '') {
      return 'Vazio!';
    }
    {
      let resposta = [];
      tech = tech.sort();
      for (let index = 0; index < tech.length; index += 1) {
        let object = {
          tech: tech[index],
          name: people,
        };
        resposta.push(object);
      }
      return resposta;
    }
  }
  //console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Douglas'));

  
  
  