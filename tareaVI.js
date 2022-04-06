// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  //charAt() Selecciona el caracter de la cadena en la posicion definida dentro de los parentesis.
  //toUpperCase() Lleva a mayusculas la cadena
  // slice() inicia la cadena desde la posicion indicada en el parentesis.
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  
  return 'hola '+cb();
  //La funcian de callback se tiene que introducir como parametro.
  //invocarCallback(function(){return 'Mi nombre es callback function'})
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
  //operacionMatematica(5,3,function(a,b){return a+b});
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let acum = [];
  let sumT = 0;

  for (let i = 0; i < numeros.length; i++) {
    if(isNaN(numeros[i])){
      console.log('Elemento ingresado no es un numero');
      continue;
    }else {
      acum.push(numeros[i]);
      console.log('numero agregado');
    }
  }
  for (let j = 0; j < acum.length; j++) {
    sumT = sumT + acum[j];
  }
  return cb(sumT);
  //sumarArray([1,true,Boolean,2,'asd',5],function(sumT){return 'Suma de los numeros= '+sumT;});
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  let acum = [];

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    cb(array[i]);
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray=[];
  for (let i = 0; i < array.length; i++) {
      nuevoArray.push(cb(array[i]));    
  }
  return 'Valores: '+nuevoArray+' | longitud: '+nuevoArray.length;
  //(En consola): map([1,2,3,4,'hola',kike={nombre:'jesus'}, obj={propiedad1:'Primera',p2:2}], function devolverElemento(a){return a});
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  let result = array.filter(elem => elem.charAt(0) != 'a');
  //El método filter() crea un nuevo array con todos los elementos 
  //que cumplan la condición implementada por la función dada.
  // En este caso queremos obtener los elementos que no empiecen por la letra 'a'
  // Por lo tanto tenemos que agregar al resultado los string que en su posicion 0
  // Sean diferentes de 'a'.

  for (let i = 0; i < array.length; i++) {
    if(array[i].charAt(0)=='a'){
      array.splice(i,1);
      i=0;
    }
  }
  //Este recorrido es una opcion aunque se tiene que optimizar
  return result;
}

// No modificar nada debajo de esta línea
// --------------------------------
/*
module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
*/
