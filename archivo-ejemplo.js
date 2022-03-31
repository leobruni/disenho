//Compartir metodos entre objetos

function getEdad(){
	return this.edad;
};

//Objetos

var obj1 = {
	nombre: 'nombre_objeto',
	edad: 23,
	getEdad: getEdad
};

/* 	Tabla de la verdad 
	(a,b)
	//OR
	True || True => true
	True || False => true
	false || false => false
	false || true => true

	a || true => a
	a || false => a
	false || false => false
	false || b => b
	
--- o --- o --- o --- o --- o --- 
	//AND
	//shortcircuit

	T && T => T
	T && F => F
	F && T => F
	F && F => F



*/



//Definir clases
function Persona(nombre,pass) {

	this.nombre = nombre || 'Defaul'; //Constructor con valores default
	this.pass = pass || 'Default Pass';
	}
}
//Los valores default se definen en un constructor para que cuando el primer valores(nombre o pass) no esten definidos le asigne un valor predeterminado y asi el programa no explote



function Auto(marca,color,motor){
	this.marca = marca;
	this.color = color;
	this.motor = motor;
}
//Instanciar
var kike = new Persona('kike','1234');
var audi = new Auto('audi','negro','v6');


//Las funciones de constructor no retornan nada
//Todas las funciones constructora de clases empiezan con mayusculas

//-------------CALLBACKS---------------
//Los callbacks son funciones que reciben como parametros una funcion

function saludar(usuario){
	return('hola ' + usuario);
}

function crearSaludo(usuario,funcionCallback) {//funcionn callback, se ingresa como parametro la funcion y retorna el resultado de esta
	return funcionCallback(usuario);
}

