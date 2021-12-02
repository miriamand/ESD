//Variables
let Busqueda = document.getElementById("Busqueda")
let Eliminar = document.getElementById("Borrar")
let Matricula = document.getElementById("Matricula")
let Nombre = document.getElementById("Nombre")
let Materia = document.getElementById("Materia")
let Calificacion = document.getElementById("Calificacion")
//Botones
let Añadir = document.getElementById("btnAdd")
let Editar = document.getElementById("btnEdi")
let Borrar = document.getElementById("btnDel")
let Buscar = document.getElementById("btnFin")
let Mostrar = document.getElementById("btnSho")
//Tabla
let Tabla = document.getElementById("Table")

//Closure
function crud(){
    let array = []
    /*Mostrar*/
    function show(){
        Tabla.innerHTML = ``
        for (let i = 0; i < array.length; i+=4) {
            Tabla.innerHTML += 
            `
            <tr style="text-aling:center">
            <td>${array[i]}</td>
            <td>${array[i+1]}</td>
            <td>${array[i+2]}</td>
            <td>${array[i+3]}</td>
            </tr>
            `
        }
        console.log(array)
        return console.log("Mostrado")
    }
    /*Añadir*/
    function add(Mat,Nom,Mate,Cal){
        if (array.indexOf(Mat) == -1) {
            array.push(Mat,Nom,Mate,Cal)
            Matricula.value = ""
            Nombre.value= ""
            Materia.value=""
            Calificacion.value=""
            return console.log("Añadido")

        } else {
           return alert("Ese ya existe!")
        }
    }
    /*Editar*/
    function edi(Mat,Nom,Mate,Cal){
        let questi = prompt("Matricula a Editar")
        if (array.indexOf(questi) == -1) {
            return alert("Ineditable")
        } else {
            let edi2 = array.indexOf(questi)
            array.splice(edi2, 4,Mat,Nom,Mate,Cal)
            Matricula.value = ""
            Nombre.value= ""
            Materia.value=""
            Calificacion.value=""
            return console.log("Editado")
        }
    }
    /*Borrar*/
    function del(Mat){
        let del2 = array.indexOf(Mat)
        array.splice(del2,4)
        Eliminar.value = ""
        return console.log("Borrado")
    }
    /*Buscar*/
    function find(Mat){
        let find2 = array.indexOf(Mat)
        Tabla.innerHTML = ``
        Tabla.innerHTML = 
        `
        <tr style="text-aling:center">
            <td>${array[find2]}</td>
            <td>${array[find2+1]}</td>
            <td>${array[find2+2]}</td>
            <td>${array[find2+3]}</td>
            </tr>
        `
        Busqueda.value = ""
        console.log(array[find2],array[find2+1],array[find2+2],array[find2+3])
        return console.log("Encontrado")
    }
    /*Regresar Funciones*/
    return{
        show,add,edi,del,find
    }
}
//Constante
const reg = crud()

//Botones
/*Añadir*/
Añadir.addEventListener('click', () => {
    reg.add(Matricula.value,Nombre.value,Materia.value,Calificacion.value)
    reg.show()
})
/*Editar*/
Editar.addEventListener('click', () => {
    reg.edi(Matricula.value,Nombre.value,Materia.value,Calificacion.value)
    reg.show()
})
/*Borrar*/
Borrar.addEventListener('click', () => {
    reg.del(Eliminar.value)
    reg.show()
})
/*Buscar*/
Buscar.addEventListener('click', () => {
    reg.find(Busqueda.value)
})
/*Mostrar*/
Mostrar.addEventListener('click', () => {
    reg.show()
})