import { Card } from "../models/card.js";
import { Memory } from "../models/memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    #memory;
    constructor()
    {
        super();
        this.#memory = new Memory();
    }
    /*get card(){
        return this.#card;
    }*/
    get memory(){
        return this.#memory;
    }
    newGame(){
        this.#memory.newGame(10);
        this.notify();
        this.saveGame();
    }
    saveGame(){
        sessionStorage.setItem("memory", JSON.stringify(this.memory.toData()));
    }
    loadGame(){
        const myData = sessionStorage.getItem("memory");
        if(myData){
            this.#memory.fromData(JSON.parse(myData));
            this.notify();
            return true;
        }
        else{
            return false;
        }
    }
    start(){
        const chargement = this.loadGame();
        if(chargement === false){
            this.newGame();
        }
    }
}
