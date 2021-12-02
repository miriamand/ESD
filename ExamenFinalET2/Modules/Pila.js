//Pila

class Pila{
    constructor(){
        this.almacenPila={};
        this.contPila=0;
    }

    push(elemento){     //Agrega un nuevo elemento al final de la pila
        this.almacenPila[this.contPila]=elemento;
        this.contPila++;
        return this.almacenPila;
    }
    pop(){      //Retorna el ultimo elemento y lo elimina
        if(this.contPila===0){
            return null;
        }
        this.contPila--;
        const elemento = this.almacenPila[this.contPila];
        delete this.almacenPila[this.contPila];
        return elemento;
    }
    peek(){     //Retorna el ultimo elemento sin eliminarlo
        if(this.contPila===0){
            return null;
        }
        return alert(`Último elemento: ${this.almacenPila[this.contPila-1]}`);
    }   
    size(){     //Retorna el numero de elementos de la pila
        return alert(`Tamaño de pila es: ${this.contPila}`);
    }
    print(){
           let stack_table = document.getElementById('stack_table');
           stack_table.innerHTML=``
           for (let i = 0; i < this.contPila; i++){
               stack_table.innerHTML += `
               <tr>
                <td>${this.almacenPila[i]}</td>
               </tr>
               `
           }
        return this.almacenPila;
    }
}

export {Pila};