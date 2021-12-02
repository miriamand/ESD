import {Pila} from './Modules/Pila.js'
import {queue} from './Modules/queue.js'
import {ListaEnlazada} from './Modules/ListaEnlazada.js'
import {DoubleLinkedList} from './Modules/DoubleLinkedList.js'
import {ListaEC} from './Modules/ListaEC.js'
import {ListaCDE} from './Modules/ListaCDE.js'

// Declaración de constantes
const pila = new Pila();
const cola = new queue(); 
const listaE = new ListaEnlazada();
const listaDE = new DoubleLinkedList();
const listaEC = new ListaEC();
const listaCDE = new ListaCDE();

const input_stack = document.getElementById('input_stack');
const button_stack = document.getElementById('button_stack');
const options_stack = document.getElementById('options_stack');
const stack_display = document.getElementById('stack_display');
const display1 = document.getElementById('display1');

const input_queue = document.getElementById('input_queue')
const button_queue = document.getElementById('button_queue');
const options_queue = document.getElementById('options_queue');
const queue_display = document.getElementById('queue_display');
const display2 = document.getElementById('display2');

const input_le = document.getElementById('input_le')
const input_le2 = document.getElementById('input_le2')
const button_LE = document.getElementById('button_LE');
const options_LE = document.getElementById('options_LE');
const le_display = document.getElementById('le_display');
const display3 = document.getElementById('display3');

const input_lde = document.getElementById('input_lde')
const input_lde2 = document.getElementById('input_lde2')
const button_LDE = document.getElementById('button_LDE');
const options_LDE = document.getElementById('options_LDE');
const lde_display = document.getElementById('lde_display');
const display4 = document.getElementById('display4');

const input_lec = document.getElementById('input_lec')
const input_lec2 = document.getElementById('input_lec2')
const button_LEC = document.getElementById('button_LEC');
const options_LEC = document.getElementById('options_LEC');
const lec_display = document.getElementById('lec_display');
const display5 = document.getElementById('display5');

const input_lcde = document.getElementById('input_lcde')
const input_lcde2 = document.getElementById('input_lcde2')
const button_LCDE = document.getElementById('button_LCDE');
const options_LCDE = document.getElementById('options_LCDE');
const lcde_display = document.getElementById('lcde_display');
const display6 = document.getElementById('display6');

// Cambia los valores de todos los botones al iniciar
button_stack.innerHTML = options_stack.value
button_queue.innerHTML = options_queue.value
button_LE.innerHTML = options_LE.value
button_LDE.innerHTML = options_LDE.value
button_LEC.innerHTML = options_LEC.value
button_LCDE.innerHTML = options_LCDE.value


// Cambia los valores de todos los botones según la opción elegida
options_stack.addEventListener('click', () =>{
    button_stack.innerHTML=options_stack.value;
})
options_queue.addEventListener('click', () =>{
    button_queue.innerHTML=options_queue.value;
})
options_LE.addEventListener('click', () =>{
    button_LE.innerHTML=options_LE.value;
})
options_LDE.addEventListener('click', () =>{
    button_LDE.innerHTML=options_LDE.value;
})
options_LEC.addEventListener('click', () =>{
    button_LEC.innerHTML=options_LEC.value;
})
options_LCDE.addEventListener('click', () =>{
    button_LCDE.innerHTML=options_LCDE.value;
})

// Muestra las opciones de selección 
stack_display.addEventListener('click', () =>{
    display1.style.display === "none" ? display1.style.display = "block" : display1.style.display = "none"
});

queue_display.addEventListener('click', () =>{
    display2.style.display === "none" ? display2.style.display = "block" : display2.style.display = "none"
});

le_display.addEventListener('click', () =>{
    display3.style.display === "none" ? display3.style.display = "block" : display3.style.display = "none"
});

lde_display.addEventListener('click', () =>{
    display4.style.display === "none" ? display4.style.display = "block" : display4.style.display = "none"
});

lec_display.addEventListener('click', () =>{
    display5.style.display === "none" ? display5.style.display = "block" : display5.style.display = "none"
});

lcde_display.addEventListener('click', () =>{
    display6.style.display === "none" ? display6.style.display = "block" : display6.style.display = "none"
});

// casos switch con botones
button_stack.addEventListener('click', ()=>{
    switch(options_stack.value){
        case "push": 
            pila.push(input_stack.value)
            pila.print();
        break;
        case "pop":
            pila.pop()
            pila.print();
        break;
        case "peek":
            pila.peek();
        break;
        case "size":
            pila.size();
        break;
     }
})
button_queue.addEventListener('click', ()=>{
    switch(options_queue.value){
        case "enqueue": 
            cola.enqueue(input_queue.value)
            cola.print();
        break;
        case "dequeue":
            cola.dequeue()
            cola.print();
        break;
        case "peek":
            cola.peek();
        break;
        case "size":
            cola.size();
        break;
        case "isEmpty":
            cola.isEmpty();
     }
})
button_LE.addEventListener('click', ()=>{
    switch(options_LE.value){
        case "insert first": 
            listaE.insertBefore(input_le.value)
            listaE.print();
        break;
        case "insert last":
            listaE.insertAfter(input_le.value)
            listaE.print();
        break;
        case "insert at":
            listaE.insertAt(input_le.value, input_le2.value);
            listaE.print();
        break;
        case "remove first":
            listaE.removeFirst();
            listaE.print()
        break;
        case "remove last":
            listaE.removeLast();
            listaE.print();
        break;
        case "remove data":
            listaE.removeData(input_le.value);
            listaE.print()
        break;
        case "remove list":
            listaE.removeList();
            listaE.print();
        break;
        case "remove from":
            listaE.removeFrom(input_le2.value);
            listaE.print();
        break;
        case "isEmpty":
            listaE.isEmpty();
        break;
        case "get size":
            listaE.getSize();
        break;
     }
})
button_LDE.addEventListener('click', ()=>{
    switch(options_LDE.value){
        case "insert first": 
            listaDE.insertFirst(input_lde.value)
            listaDE.print();
        break;
        case "insert last":
            listaDE.insertLast(input_lde.value)
            listaDE.print();
        break;
        case "insert at":
            listaDE.insertAt(input_lde.value, input_lde2.value);
            listaDE.print();
        break;
        case "remove first":
            listaDE.removeFirst();
            listaDE.print()
        break;
        case "remove last":
            listaDE.removeLast();
            listaDE.print();
        break;
        case "remove data":
            listaDE.removeData(input_lde.value);
            listaDE.print()
        break;
        case "remove list":
            listaDE.removeList();
            listaDE.print();
        break;
        case "remove from":
            listaDE.removeFrom(input_lde2.value);
            listaDE.print();
        break;
        case "is empty":
            listaDE.isEmpty();
        break;
        case "get size":
            listaDE.getSize();
        break;
        case "reverse print":
            listaDE.reversePrint();
        break;
     }
})
button_LEC.addEventListener('click', ()=>{
    switch(options_LEC.value){
        case "insert first": 
            listaEC.insertFirst(input_lec.value)
            listaEC.print();
        break;
        case "insert last":
            listaEC.insertLast(input_lec.value)
            listaEC.print();
        break;
        case "insert at":
            listaEC.insertAt(input_lec.value, input_lec2.value);
            listaEC.print();
        break;
        case "remove first":
            listaEC.removeFirst();
            listaEC.print();
        break;
        case "remove last":
            listaEC.removeLast();
            listaEC.print();
        break
        case "remove data":
            listaEC.removeData(input_lec.value);
            listaEC.print();
        break;
        case "remove from":
            listaEC.removeFrom(input_lec2.value);
            listaEC.print();
        break;
        case "remove list":
            listaEC.removeList();
            listaEC.print();
        break;
        case "get size":
            listaEC.getSize();
        break;
        case "get last":
            listaEC.getLast();
        break;
        case "get first":
            listaEC.getFirst();
        break;
        case "is empty":
            listaEC.isEmpty();
        break;
     }
})
button_LCDE.addEventListener('click', ()=>{
    switch(options_LCDE.value){
        case "insert first": 
            listaCDE.insertFirst(input_lcde.value)
            listaCDE.print();
        break;
        case "insert last":
            listaCDE.insertLast(input_lcde.value)
            listaCDE.print();
        break;
        case "insert at":
            listaCDE.insertAt(input_lcde.value, input_lcde2.value);
            listaCDE.print();
        break;
        case "remove first":
            listaCDE.removeFirst();
            listaCDE.print();
        break;
        case "remove last":
            listaCDE.removeLast();
            listaCDE.print();
        break
        case "remove data":
            listaCDE.removeData(input_lcde.value);
            listaCDE.print();
        break;
        case "remove from":
            listaCDE.removeFrom(input_lcde2.value);
            listaCDE.print();
        break;
        case "remove list":
            listaCDE.removeList();
            listaCDE.print();
        break;
        case "get size":
            listaCDE.getSize();
        break;
        case "reverse print":
            listaCDE.reveresePrint();
        break;
        case "is empty":
            listaEC.isEmpty();
        break;
     }
})