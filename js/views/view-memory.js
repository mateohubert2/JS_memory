import { Observer } from "../patterns/observer.js";

export class ViewMemory extends Observer
{
    #controllerMemory;

    constructor(controllerMemory)
    {
        super();

        this.#controllerMemory = controllerMemory;
        this.#controllerMemory.addObserver(this);
    }

    notify()
    {
        this.displayCard();
    }
    displayCard(){
        const cards = document.querySelector(".cards");
        let enfant = document.createElement("div");
        enfant.classList.add("card");
        enfant.innerHTML = "&#x" + (this.#controllerMemory.card.value).toString(16);
        cards.appendChild(enfant);
        enfant.addEventListener("click", () => {
            this.#controllerMemory.createCard();
        });
    }
}