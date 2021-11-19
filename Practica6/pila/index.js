class PilaA{
    constructor(){
        this.save=[];
        this.count=0;
    }

    push(){};
    pop(){};
    peek(){};
    size(){};
    print(){};
}

const PILAA = new PilaA();



class Pila{
    constructor(){
        this.save={};
        this.count=0;
    }

    push(elemento){
        this.save[this.count]=elemento;
        this.count++;
        return this.save;
    }
    pop(){
        if(this.count===0){
            return null;
        }
        this.count--;
        const elemento = this.save[this.count];
        delete this.save[this.count];
        return elemento;
    }
    peek(){
        if(this.count===0){
            return null;
        }
        return this.save[this.count-1];
    }   
    size(){
        return this.count;
    }
    print(){
        return this.save;
    }
}

const PILA = new Pila();