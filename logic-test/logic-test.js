//     Dada una cadena que contiene un carácter especial junto con letras (de
//     la 'a' a la 'z' y de la 'A' a la 'Z'), invierta la cadena de manera que los
//     caracteres especiales no se vean afectados.
//     Ejemplos:
//     Entrada: str = "a,b$c"
//     Salida: str = "c,b$a"
//     Tenga en cuenta que $ y , no se mueven a ningún lado.
//     Solo se invierte la subsecuencia "abc"
//     Entrada: str = "Ab,c,de!$"
//     Salida: str = "ed,c,bA!$"
//     https://www.geeksforgeeks.org/reverse-a-string-without-affectingspecial-characters/

function reverseString(str) {
    // Convertir la cadena a un array
    let arr = str.split("");
  
    // Inicializar los punteros de inicio y final
    let left = 0;
    let right = arr.length - 1;
  
    // Mientras los punteros no se crucen
    while (left < right) {
      // Si el carácter de la izquierda no es una letra, avanzar el puntero
      if (!isLetter(arr[left])) {
        left++;
      }
      // Si el carácter de la derecha no es una letra, retroceder el puntero
      else if (!isLetter(arr[right])) {
        right--;
      }
      // Si ambos son letras, intercambiarlos y avanzar / retroceder los punteros
      else {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
      }
    }
  
    // Convertir el array de vuelta a una cadena y devolverla
    return arr.join("");
  }
  
  function isLetter(char) {
    // Utilizar una expresión regular para comprobar si el carácter es una letra
    return /^[a-zA-Z]$/.test(char);
  }
  
  // Ejemplos
  console.log(reverseString("a,b$c")); // "c,b$a"
  console.log(reverseString("Ab,c,de!$")); // "ed,c,bA!$"