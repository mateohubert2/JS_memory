import { ControllerMemory } from "../controllers/controller-memory.js";
import { Card } from "./card.js";

export class Memory {
    #cards;
    constructor(){
        this.#cards = [];
    }

    newGame(pairsNumer){
        let valeur = "0x1F90C";
        for(let i = 0; i < 2*pairsNumer; i++){
            valeur = parseInt(valeur);
            if((i%2 === 0)&&(i !== 0)){
                valeur++;
            }
            let emplacement = Math.floor(Math.random()*this.#cards.length);
            this.#cards.splice(emplacement, 0, new Card(valeur));
        }
    }
    getCardsNumber(){
        return this.#cards.length;
    }
    getCard(index){
        return this.#cards[index];
    }
    toData(){
        let cards = [];
        for(let i = 0; i < this.getCardsNumber(); i++){
            let temp = {
                value: this.getCard(i).value,
            }
            cards.push(temp);
        }
        let tableau = {
            cards,
        }
        return tableau;
    }
}
