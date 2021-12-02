// Fila

class queue {
    constructor(){
        this.save=[];                  
    }

    enqueue(el){     
        this.save.push(el);                     
        return this.save;                    
    }

    dequeue(){
        this.save.shift();
        return 
    }

    peek(){
        if(this.save.length===0){
            return null;
        }
        return alert(`Primer elemento: ${this.save[0]}`);
    }

    size(){
        return alert(`Tamaño de la cola: ${this.save.length}`)
    }

    print(){
        let queue_table = document.getElementById('queue_table');
           queue_table.innerHTML=``
           for (let i = 0; i < this.save.length; i++){
               queue_table.innerHTML += `
               <tr>
                <td>${this.save[i]}</td>
               </tr>
               `
           }
        return this.save;
    }

    isEmpty(){
        if(this.save.length===0){
            return alert('Vacio')
        }
        else return alert('No está vacio')
        
    }
}

export {queue}