class Cola{
    constructor(){
        this.save=[];        
        this.start=0;
        this.last=0;            
    }

    enqueue(elemento){
        this.save[this.last]=elemento;   
        this.last++;                            
        return this.save;                    
    }

    dequeue(){
        if(this.start===this.last){
            return null;
        }
        const elemento=this.save[this.start];
        delete this.save[this.start];
        this.start++;
        return elemento;
    }

    peek(){
        if(this.size()===0){
            return null;
        }
        return this.save[this.start];
    }

    size(){
        return this.last-this.start;
    }

    print(){
        return this.save;
    }

    isEmpty(){
        if(this.start===this.last){
            return true;
        }
        return false;
        
    }
}

const cola = new Cola();