var usuarios = [
    {
        nombre: 'toni',
        online: false
    },
    {
        nombre: 'Jesus',
        online: false
    },
    {
        nombre: 'Dan',
        online: true
    }
  
];
  
  function sumaTodosImpares(array) {
      // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
      // y debe devolver la suma total entre todos los numeros impares.
      // ej:
      // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15
  
      // Tu código aca:
  
      var tamArray = array.length;
      var cont = 0;
      var sumaTotal = 0;
  
      do {
  
          if (array[cont] % 2 === 1) {
              sumaTotal = array[cont] + sumaTotal;
              console.log(array[cont]+ " + ");
          }
          cont = cont + 1;
  
      } while (cont <= tamArray);
  
      return " = " + sumaTotal;
  
  
  }
  
  
  function stringMasLarga(str) {
      // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
      // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
      // Ej:
      // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
      // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
      // Tip: podes usar el metodo de String 'split'
  
      // Tu código aca:
  
      var fraseArray = str.split(" ");
      var cont = 0;
      var limite = fraseArray.length;
      var mayor = -1;
      var frase = "";
  
      do {
  
          if(fraseArray[cont].length > mayor) {
              mayor = fraseArray[cont].length;
              frase = fraseArray[cont];
          }
  
          cont = cont + 1;
  
      } while (cont < limite);
  
      console.log(frase);
  
  }
  
  function estaOffline(usuarios, nombre) {
      // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
      // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
      // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
      // ej:
      // var usuarios = [
      //     {
      //       nombre: 'toni',
      //       online: true
      //     },
      //     {
      //       nombre: 'emi',
      //       online: true
      //     },
      //     {
      //       nombre: 'agus',
      //       online: false
      //     }
      // ];
      // estaOffline(usuarios, 'agus') retorna true
      // estaOffline(usuarios, 'emi') retorna false
  
      // Tu código aca:
  
      console.log(usuarios);
  
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].online==true && usuarios[i].nombre==nombre) {
          console.log("esta online");
          return false;
        }else if (usuarios[i].online==false && usuarios[i].nombre==nombre) {
          console.log("esta offline");
          return true;
        }
      }
  
    }
  
  
    function actividadesEnComun(persona1, persona2) {
      // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
      // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
      // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
      //     persona2 = ['comer', 'dormir', 'futbol']
      // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
      // Tip: podes usar ciclos for anidados.
      // Tu código aca:
  
      var actEnComun = [];
  
      for (let i = 0; i < persona1.length; i++) {
  
        for (let j = 0; j < persona2.length; j++) {
  
          if (persona1[i]==persona2[j]) {
            actEnComun.push(persona2[j]); 
          }
  
        }//2do for
  
      }//1er for
  
      return actEnComun;
  
    }
  
    function buscaDestruye(array, num) {
      // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
      // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
      // La función debe retornar el array sin los números sacados.
      // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
      // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
      // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
      //
      // Tu código aca:
  
      for (let i = 0; i < array.length; i++) {
        if (array[i]==num) {
          array.splice(i,1);
        }
  
      }
      return array;
    }
  
    function sumarElTipo(arreglo) {
      // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
      // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
      // de veces que se repita cada tipo.
      // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
      // Ej:
      // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
      // Tip: podes usar el ciclo for o el metodo de Array 'reduce'
  
      // Tu código aca:
  
    }
  
    // =======================================================================
  
    function crearClaseEmprendedor() {
      class Emprendedor {
          constructor(nombre, apellido, libros, mascotas) {
              // El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
              // Inicializar las propiedades del emprendedor con los valores recibidos como argumento
  
              // Tu código aca:
  
          }
  
          addMascota(mascota) {
            // este método debe agregar una mascota (mascota) al arreglo de mascotas del emprendedor.
            // no debe retornar nada.
  
            // Tu código aca:
  
          }
  
          getMascotas() {
              // El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
              // Ej:
              // Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
              // emprendedor.getMascotas() debería devolver 2
  
              // Tu código aca:
  
          }
  
          addBook(book, autor) {
              // El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
              // { nombre: book, autor: autor} al arreglo de libros del emprendedor.
              // No debe retornar nada.
  
              // Tu código aca:
  
          }
  
          getBooks() {
              // El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
              // Ej:
              // Suponiendo que el emprendedor tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
              // emprendedor.getBooks() debería devolver ['El señor de las moscas', 'Fundacion']
  
              // Tu código aca:
  
          }
  
          getFullName() {
              // El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
              // ej:
              // Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
              // emprendedor.getFullName() deberia devolver 'Elon Musk'
  
              // Tu código aca:
  
          }
      }
  
      return Emprendedor;
    }
  
/* 
  
====================== EXTRA CREDIT ===================== 
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!
  
function mapear() {
  // Escribi una funcion mapear en el prototipo del objeto global 'Array'
      // que recibe una funcion callback , que se ejecuta por cada elemento del array
      // mapear los elementos de ese array segun la funcion callback
      // Esta funcion tiene que devolver un array nuevo con los elementos mapeados.
      // NO USAR LA FUNCION MAP DE ARRAYS.
      // ej:
      // var numeros = [1, 2, 3, 4];
      // numeros.mapear(function(numero) {
      //   return numero + 1;
      // }) devuelve [2, 3, 4, 5]
  
      // Tu código aca:
  
    }
  
    // No modificar nada debajo de esta línea
    // --------------------------------
  
    module.exports = {
      sumaTodosImpares,
      buscaDestruye,
      actividadesEnComun,
      estaOffline,
      stringMasLarga,
      sumarElTipo,
      crearClaseEmprendedor,
      mapear
    };
  
*/