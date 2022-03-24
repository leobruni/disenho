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


