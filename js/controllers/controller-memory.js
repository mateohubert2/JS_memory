import { Card } from "../models/card.js";
//import { Memory } from "../models/memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    #card = null;
    constructor()
    {
        super();
    }
    get card(){
        return this.#card;
    }
    createCard(){
        let random_premier = Math.floor(Math.random() * 16);
        let random_second= Math.floor(Math.random() * 4);
        const tab_premier = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        const tab_second = ["C", "D", "E", "F"];
        const debut = "0x1F9";
        let premier = tab_premier[random_premier];
        let second = tab_second[random_second];
        let valeur = debut + premier + second;
        valeur = parseInt(valeur);
        this.#card = new Card(valeur);
        this.notify();
    }
}
