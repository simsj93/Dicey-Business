document.addEventListener('DOMContentLoaded', function () {
    let diceContainer = document.createElement('div');
    document.body.appendChild(diceContainer);
    diceContainer.classList.add('diceContainer');
    let btn = document.getElementById('btn');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3'); 
    let diceArray = [];



    class Die {
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
        roll() {
            return Math.floor(Math.random() * (6 - 1 + 1) + 1)
        };
        reroll() {
            this.div.innerHTML = '';
            this.div.innerHTML = this.roll();
        };
        dieRemove() {
            this.div.remove(); 
            let that = diceArray.indexOf(this); 
            diceArray.splice(that, 1); 
        }
    };

    btn.addEventListener('click', () => {
        createDice();
    });

    btn2.addEventListener('click', () => {
        let sum = 0;
        diceArray.forEach(getSum);
        swal(`The pool total is ${sum}! 
        
        I'm running a SweetAlert script for this alert box styling.

        Neat. `);

        function getSum(die) {
            sum += Number(die.div.innerHTML);
        }
    });


    btn3.addEventListener('click', function (){
            diceArray.forEach(die => die.reroll()); 
    }); 


    function createDice() {
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