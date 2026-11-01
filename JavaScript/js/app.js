console.log("Hola");
//alert("Mi documento")

console.log("****Variables****");

/*var
    Ya no se actualiza
*/ 
var uno='variable';
console.log("uno: ", uno);

var x = "x";

if(true){
    var x = "verdadero";
    
}

console.log("x: ", x)


/*
    LET
no usar var, usar let
*/ 

let y = "variable 2";
console.log("let y: ", y);

/*
    CONS -> constantes
*/ 

console.log("*******Valores verdaderos y falsos********");
// Valores falsos: undefined, null, 0, '', ""
// Valores verdaderos: los que no son falsos :p

let mes = "";
console.log("Mes: ", mes)
if(mes){
    console.log("verdadero")
}else{
    console.log("Falso")
}


/*

*/ 
console.log("*****Operadores de IGUALDAD******")

// == != Compara si dos valores son iguales
// === !== -> Comprueba tambien si tienen el tipo de dato, usarlo

mes = 10;

if(mes == "10"){ // mes === "10" ya no entra pq no son el mismo tipo de dato
    console.log("SOn iguales")
}

console.log("****Template String********")
let nombre = "ANtonio"
let apellido = "Lopez"
let nacimiento = 2000

console.log(`${nombre}  ${apellido}: edad ${2026 - nacimiento}`)//alt gr, para usar el template string 


console.log("******DESTRUCTURING**********")

const persona = { //objeto persona
    nombreP: "Ana", 
    edadP: 21
};

persona.nacimientoP = 2005; 
console.log("persona", persona)

const nombrePersona = persona.nombreP;

const {nombreP: nombreP2, edadP} = persona;
console.log("nombreP", nombreP2)



console.log("********FUNCIONES***********")
//funcion tradicional
function saludar(nombre){
    return "Hola " + nombre;
}

console.log("Funcion tradicional: ", saludar("naldo"))

//funcion anonima: cuando a una variable le asignamos una funcion
const saludar2 = function(nombre){
    return "hola " + nombre;
}

console.log("Funcion anonima: ", saludar2("naldouuu"))

//FUnciones de flecha
const cuadrado = function(num){ // normal
    return num * num
}
console.log("Cuadrado func tradicional: ", cuadrado(2))

const cuadrado2 = (num) =>{
    return num*num
}
console.log("Cuadrado flecha", cuadrado2(2))

const cuadrado3 = num => num*num
console.log("Cuadrado felcha abreviada: ", cuadrado3(2))

/******************** */

console.log("***FUNCIONES DE ARREGLOS***")
console.log("MAP*")
const year = [2000, 2005, 2010, 2015, 2020, 2025]

let edades = year.map(elemento => 2026 - elemento)
console.log("map sencillo: ", edades)


/****Map con index */
let edades2 = year.map((el, idx) => `Edad ${idx+1}: ${2026-el}`)
console.log("map con index", edades2)

let edades3 = year.map(
    (el, index) =>{
        const actual = new Date().getFullYear()
        const edad = actual - el
        return `Edad ${index+1}: ${edad}`
    }
)
console.log("Map con index y mas lineas: ", edades3)

/********Map con objetos */

const frutas = [
    {nombre: "Manzana", cantidad: 4},
    {nombre: "Fresa", cantidad: 12},
    {nomber: "Mora azul", cantidad: 3}
]

const objetoConMasPropiedades = frutas.map(f => ({
    //return {
    
        // ... spread operator: copia el objeto original
        ...f, 
        tipo: f.cantidad > 5 ? "Muchas" : "Pocas", // añadir propiedad
        nombreMostrar: `${f.nombre} - cantidad ${f.cantidad}`
        //, nombre: f.nombre.toUpperCase()
    //}
    
})) // se añadio un parentesis para no poner el return
console.log("Map con objetos: ", objetoConMasPropiedades)

console.log("****FILTER****")
//const pocas = frutas.filter(f => f.cantidad > 3 && f.nombre.startsWith("M"))
// destructuracion, obliga a poner parentesis. De que solo quiero ciertas propiedades
const pocas = frutas.filter( ({nombre, cantidad}) => cantidad > 3 && nombre.startsWith("M")) 
console.log("filter pocas frutas: ", pocas)




