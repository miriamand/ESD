// LISTA DOBLEMENTE ENLAZADA

class Nodo {
    constructor(dato, next, back){
        this.dato = dato;
        this.next = next;
        this.back = back;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

        //insertFirst
        insertFirst(dato) {
            if(dato === "") return alert('No existe el valor dado')
            const newNode = new Nodo(dato, this.head, null);
            if (this.head) {
                newNode.next = this.head;
                this.head.back = newNode;
                this.head = newNode;
            } else {
                this.head = newNode;
                this.tail = newNode;
            }
            this.size++;
        }
        
        //insertLast
        insertLast(dato) {
            const newNode = new Nodo(dato, null, this.tail);
    
            if (this.tail) {
                newNode.back = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            } else {
                this.tail = newNode;
                this.head = newNode;
            };
            this.size++;
        }
    
        //insertAt
        insertAt(dato, index) {
            if (index < 1 || index > this.size+1 || index === '') return alert('Índice no aceptado')
            else if(dato =='') return alert('Valor inexistente')
            const newNode = new Nodo(dato, null, null);
    
            if (index == 1) {
                this.insertFirst(dato)
                return console.log('Valor insertado')
            } if(index == this.size+1){
                this.insertLast(dato)
                return console.log('Valor insertado')
            } else {
                let current = this.head;
                let previous;
                for (let i = 1; i < index; i++) {
                    previous = current;
                    current = current.next;
                };
    
                newNode.next =current;
                newNode.back = previous;
                current.back = newNode;
                previous.next = newNode;
                this.size++;
            }
            }
    
        //removeFirst
        removeFirst() {
            if (!this.head) {
                return null
            };
    
            const valueToReturn = this.head.dato;
    
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.back = null;
            }
            this.size--;
            return valueToReturn;
        }
    
        //removeLast
        removeLast() {
            if (!this.tail) {
                return null
            };
    
            const valueToReturn = this.tail.dato;
    
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.back;
                this.tail.next = null;
            };
            this.size--;
            return valueToReturn;
        }
    
        //removeData
        removeData(dato) {
            let current = this.head;
            let previous = null;
    
            while(current !== null) {
                if (current.dato === dato) {
                    if (!previous) {
                        this.removeFirst();
                        return;
                    } else if (!current.next) {
                        this.removeLast()
                        return;
                    } else {
                        previous.next = current.next;
                        current.next.back = previous;
                    };
                    this.size--;
                    return current.dato;
                };
                previous = current;
                current = current.next;
            };
            return null;
        }
    
        //removeFrom
        removeFrom(indice){
            if(indice < 1 || indice > this.size || indice === ""){
                return alert('Índice no aceptado');
            }
            else if(indice == 1) {
                return this.removeFirst()
            }
            else if(indice > 1 && indice < this.size){
                let current = this.head
                let previous
                let nxt
                
                for(let i = 1; i < indice; i++){
                    current = current.next
                }
                
                previous = current.back
                nxt = current.next
                
                previous.next = nxt
                nxt.back = previous
                
                this.size--
                return current.dato
            }
            else if(indice == this.size){
                return this.removeLast()
            }
        }
        
        //removeList    remueve toda la lista
        removeList(){
            this.head = null;
            this.size = 0
        }
    
        //print
        print() {
            let current = this.head;
            let lde_table = document.getElementById("lde_table");
            lde_table.innerHTML = ``
            while(current){
                lde_table.innerHTML += `
                    <tr>
                    <td>${current.dato}</td>
                    </tr>
                `
                current = current.next;
            }
            // let current = this.head;
            // let result = '';
            // while(current) {
            //     result += current.dato + ' <---> ';
            //     current = current.next;
            // };
    
            // return console.log(result.slice(0, result.length-7))
        }
    
        //reversePrint
        reversePrint() {
            let current = this.tail;
            let result = '';
            while(current) {
                result += current.dato + ' <---> ';
                current = current.back;
            };
    
            return alert(result.slice(0, result.length-7));
        };
        //getSize
        getSize() {
            return alert(`El tamaño de la lista es: ${this.size}`);
        }
    
        //isEmpty
        isEmpty(){
            if(this.size === 0){
                return alert('Está vacía');
            }
            else{
                return alert('No está vacía');
            }
        }
    }

export {DoubleLinkedList}