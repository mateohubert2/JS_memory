export class Card{
    #value;
    constructor(value){
        this.#value = value;
    }
    get value(){
        return this.#value;
    }
}
