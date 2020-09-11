let upgradeBtn = document.querySelectorAll('.upgrade');
let value = document.querySelectorAll('.value');
const characterName = document.querySelector('.character-name');
let playerHealth = document.querySelector('.player-health');
let attackBtn = document.querySelector('.attack');

const CHOSE_CLASS = document.querySelectorAll('.choseClass');
let classChosen = [];
let player;

//let user chose class
function choseClass() {
    CHOSE_CLASS.forEach(keys => {
        keys.addEventListener('click',function () {
            if (keys.innerHTML === 'Mage'){
                player = {};
                classChosen.shift();
                classChosen.push('Mage');
                player = new User('John',8,12,21);
                setStat(player);
            }else if (keys.innerHTML === 'Warrior') {
                player = {};
                classChosen.shift();
                classChosen.push('Warrior');
                player = new User('Marc',28,7,5);
                setStat(player);
            }else if (keys.innerHTML === 'Ranger') {
                player = {};
                classChosen.shift();
                classChosen.push('Ranger');
                player = new User('Rayna',12,25,11);
                setStat(player);
            }
        });
       });
}

let damageValue = 10;
function dealDamage(damage) {
playerHealth.value -= damageValue;
}

attackBtn.addEventListener('click',dealDamage);





//constructor function user object
function User(name,strength, agility, intelligence){
    this.name = name;
    this.strength = strength;
    this.agility = agility;
    this.intelligence = intelligence

}// stat upgrade
    function statsUpgrade(chosenClass){
        upgradeBtn.forEach(keys =>{
    keys.addEventListener('click', function () {
        if(keys.dataset.class === 'agi'){
            player.agility += 1;
            value[0].innerHTML = player.agility;
        }else if(keys.dataset.class === 'str'){
            player.strength += 1;
            value[1].innerHTML = player.strength;
        }else if(keys.dataset.class === 'int'){
            player.intelligence += 1;
            value[2].innerHTML = player.intelligence;
        }
    })
        });
    }

function setStat(chosenClass) {
    characterName.innerHTML = chosenClass.name;
    value[0].innerHTML = chosenClass.agility;
    value[1].innerHTML = chosenClass.strength;
    value[2].innerHTML = chosenClass.intelligence;
}
choseClass();
statsUpgrade();





