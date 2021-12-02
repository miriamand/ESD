// LISTA CIRCULAR ENLAZADA

class Nodo{
    constructor(dato, next){
        this.dato = dato;
        this.next = null;
    }
}

class ListaEC{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //insertFirst : agrega un elemento al principio de la lista
    insertFirst(dato){
        let newnode = new Nodo(dato);
        if(this.size===0){
            this.head = newnode;
            newnode.next = this.head;
        }else{
            newnode.next=this.head;
            this.head = newnode;
            for(let i=0; i<this.size; i++){
                newnode = newnode.next;
            }
            newnode.next=this.head;          
        }
        this.size++;
        return this.head.dato;
    }

    //insertLast : agrega un elemento al final de la lista
    insertLast(dato){
        let newnode = new Nodo(dato);
        let current = this.head;
        if(current == null){
            this.head = newnode;
            newnode.next = this.head;
        }else if(current.next === this.head){
            current.next = newnode;
            newnode.next = this.head;
        }else{
            while(current.next!==this.head){
                current = current.next;
            }
            current.next = newnode;
            newnode.next = this.head;
            // this.getLast().next=this.head;
        }
        this.size++;
        return newnode.dato;

    }
    //insertAt : agrega un elemento en una posicion especifica
    insertAt(dato, index){
        if(index < 0 || index > this.size || index === ''){
            return alert('Índice no aceptado');
        }
        if(index == 0){
            this.insertFirst(dato)
            return console.log('Elemento agregado')
        }else{
            let newnode = new Nodo(dato);
            let current = this.head;
            let back;
            for(let i=0; i<index; i++){
                back = current;
                current=current.next;
            }
            newnode.next = current;
            back.next = newnode;
        }
        this.size++;
    }

    //removeFirst : remueve el primer elemenro de la lista
    removeFirst(){
        if(this.size==0){
            return null;
        }
        let current = this.head;
        let tail;
        for(let i=0; i<this.size; i++){
            tail= current;
            current = current.next
            if(current===this.head && current.next===this.head){
                current=this.head.dato
                this.head = null;
                this.size--;
                return current;
            }
            if(current === this.head){
                tail.next = current.next;
                this.head = current.next;
                this.size--;
                return current.dato;
            }
        }
        return current.dato;
    }
    //removeLast : remueve el ultimo elemento de la lista
    removeLast(){
        if(this.size===0){
            return null;
        }

        let current = this.head;
        let tail;

        for(let i=0; i<this.size; i++){
            tail = current;
            current = current.next;
            if(current.next===this.head){
                tail.next = current.next;
                this.size--;
                return current.dato;
            }
        }
    }
    //remuveData : remueve el elemento con el valor que pasemos por parametro
    removeData(dato){
        if(this.head === null){
            return null;
        }
        let current = this.head;
        let previous;
        let i=0
        if(i==0 && current.dato==dato){
            this.removeFirst();
            return current.dato;
        }
        for(i=0; i<this.size; i++){
            previous = current;
            current = current.next;
            if(current.dato===dato){
                previous.next = current.next;
                this.size--;
                return current.dato;
            }
        }
        this.size--;
    }
    //removeFrom : remueve el elemento con el indice que le indiquemos por parametro
    removeFrom(index){
        if(this.size == 0 || index > this.size){
            return alert('Índice no aceptado');
        }
        if(index == 0){
            let x = this.head.dato
            this.removeFirst();
            return x;
        }
        let current = this.head;
        let previous;

        for(let i=0; i<index; i++){
            previous = current;
            current = current.next;  
        }

        previous.next = current.next
        this.size--;
        return current.dato;
    }

    //removeList : remueve todo el contenido de la lista
    removeList(){
        this.head = null;
        this.size = 0
    }

    //print : retorna los elementos que contiene la lista
    print(){
        // if(this.size===0){
        //     return null;
        // }
        let current = this.head;
        let lec_table = document.getElementById("lec_table");
        lec_table.innerHTML = ``
        for(let i = 0; i < this.size; i++){
            lec_table.innerHTML += `
                <tr>
                <td>${current.dato}</td>
                </tr>
            `
            current = current.next;
        }
        // let list="";

        // let current = this.head;
        //     for(let i=0;i<this.size;i++){
        //         list+=`  ${current.dato}`;
        //         current=current.next;
        //     }
        //     console.log(list)
    }

    //getSize : retorna el numero de elementos de la lista
    getSize(){
        return alert(`El tamaño de la lista es: ${this.size}`);
    }

    //getLast : retorna el ultimo elemento de la lista
    getLast(){
        let tail = this.head;
        if(this.size===0){
            return null;
        }else{
            for(let i=1; i<this.size; i++){
                tail = tail.next;
            }
            return alert(`El último elemento es ${tail.dato}`);
        }
    }
    
    //getFirst : retorna el primer elemento de la lista
    getFirst(){
        if(this.size===0){
            return null;
        }
        return alert(`El primer elemento es ${this.head.dato}`);
    }

    isEmpty(){
        if(this.size === 0){
            return alert('Está vacía');
        }
        else{
            return alert('No está vacía');
        }
    }
}

export {ListaEC}
