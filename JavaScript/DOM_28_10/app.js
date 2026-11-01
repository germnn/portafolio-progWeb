

const alumnos = [
    {nombre: "ANa", calificacion: 80, edad: 20},
    {nombre: "LUis", calificacion: 50, edad: 22},
    {nombre: "Carlos", calificacion: 90, edad: 21}
]

const titulo = document.getElementById("titulo")
titulo.textContent = "Lista de alumnos"

function esAprobado(alumno){
    return alumno.calificacion >= 70
}


function mostrarAlumnos(arreglo){
    const lista = document.getElementById("listaAlumnos")
    lista.innerHTML = "" 
    // textCOntent: le vale madre el css y modifica el texto
    // innerHTML: respeta al CSS y si respeta sus atributos
    arreglo.forEach((alumno, index) => {
        //crear un elemento li
        const li = document.createElement("li")
        li.innerHTML = `${alumno.nombre} - ${alumno.calificacion}`
        
        li.className = esAprobado(alumno) ? "aprobado" : "reprobado"

        lista.appendChild(li) //añade al final
    });

}

mostrarAlumnos(alumnos)

document.querySelector("#agregar").addEventListener("click",() =>{
   const nombre = document.getElementById("nombre").value.trim() 
   const calificacion = Number(document.getElementById("calificacion").value)
   const edad = Number(document.getElementById("edad").value)

   alumnos.push({nombre: nombre, calificacion, edad})
   limpiarInputs()
   mostrarAlumnos(alumnos)
   mostrarMensaje("Alumno agregado con exito")
}) //boton agregar1, regrese el primero que se llame asi y le ponemos escuchadores

function limpiarInputs(){
    const inputs = document.getElementsByTagName("input") //regresa arreglo de inputs
    for(let i of inputs){
        i.value = ""
    }
}

function mostrarMensaje(texto){
    const msg = document.createElement("p")
    msg.textContent = texto
    msg.style.color = "green"
    document.body.appendChild(msg)

    setTimeout(() => {
        msg.remove()
    }, 7000)
}






