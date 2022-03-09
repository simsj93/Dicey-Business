document.addEventListener('DOMContentLoaded', function () {
    let diceContainer = document.createElement('div');
    document.body.appendChild(diceContainer);
    diceContainer.classList.add('diceContainer');
    let btn = document.getElementById('btn');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3'); 
    let diceArray = [];

    // above code pulls in a bunch of relevant html elements, creates a dice container, and declares an array to be populated with dice. 


    class Die {  // this is the pseudoclass Die, when instanced it uses the createDice function to, well, create a new die. It has three methods defined. 
        constructor() {

            this.div = document.createElement('div');
            this.div.classList.add('newDie');
            this.div.innerHTML = this.roll();
            diceContainer.appendChild(this.div);
            this.div.addEventListener('click', () => {
                this.reroll();
            })
            this.div.addEventListener('dblclick', () => {
                this.dieRemove(); 
            })
        };
        roll() { // roll method simply returns dice rng. 
            return Math.floor(Math.random() * (6 - 1 + 1) + 1)
        };
        reroll() { //reroll method is just the roll method but first clears the innerHTML of the die. 
            this.div.innerHTML = '';
            this.div.innerHTML = this.roll();
        };
        dieRemove() { // dieRemove removes the die from the html and from the array we use to determine dice pool sum. 
            this.div.remove(); 
            let that = diceArray.indexOf(this); 
            diceArray.splice(that, 1); 
        }
    };

    btn.addEventListener('click', () => { // listens for click on btn, creates a die instance. 
        createDice();
    });

    btn2.addEventListener('click', () => { // listens for click on btn2, fetches sum of all dice innerHTML and reports it using Sweet Alert. 
        let sum = 0;
        diceArray.forEach(getSum);
        swal(`The pool total is ${sum}! 
        
        I'm running a SweetAlert script for this alert box styling.

        Neat. `);

        function getSum(die) {
            sum += Number(die.div.innerHTML);
        }
    });


    btn3.addEventListener('click', function (){ // button three rerolls all dice present in the array (and thus on the page). 
            diceArray.forEach(die => die.reroll()); 
    }); 


    function createDice() { // this makes sure we haven't exceeded my arbitrary cap of 8 dice and then populates the page/the array with a new instance of Die. 
        if (diceArray.length < 8) {
        let newDie = new Die();
        diceArray.push(newDie);
        console.log(diceArray);
        } else {
            swal(`Hey pal, I think eight is enough. 
            
            You're going to end up losing one under the couch.`)
        }
    };


}); 