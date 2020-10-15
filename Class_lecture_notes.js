class Rectangle {
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }
}

const newRect = new Rectangle(400,800);

//extends creating a prototype
//super() binds classes together when we "extend classes" (Binds)
//Classes are just functions

class Animal {
    constructor(name) {
        this.name = name;
    }

speak() {
    console.log(this.name + 'makes a noise.');
}
}

class Dog extends Animal {
    constructor(name) {
        //super() binds Dog to Animal parent function, so you put name in there so it can have the 'name' properties of its parent element
        super(name);
    }
speak() {
    console.log(this.name + 'barks.');
}
}

const Benji = new Dog;
Benji.speak(); //.speak() method will come from class Dog and not parent element class Animal

// Notes from lecture today
// function JediSith(obj) {
//   this.name = obj.name;
//   this.forceAttack = Math.ceil(Math.random() * obj.forceAttack);
// }

// //Ternay operators are sweet!!!!!! Look them up
// JediSith.prototype.fight = function(foe) {
//   console.log(`${this.name}'s attack: ${this.forceAttack} \n Multiplier: ${this.attackMult ? this.attackMult:"none"} \n
// ${foe.name}'s attack: ${foe.forceAttack} \n ${this.forceAttack >= foe.forceAttack ? this.name + " wins" : foe.name + " wins"}`)
// }

// function EpicJediSith(epicObj) {
//   JediSith.call(this,epicObj); //inheriting JediSiths key/values NOT functions
//   this.attackMult = epicObj.forceMult;
//   this.forceAttack = Math.ceil((Math.random() * epicObj.forceAttack) * epicObj.forceMult)
// }

// EpicJediSith.prototype = Object.create(JediSith.prototype);



//ES6 way
class JediSith {
    constructor(obj) {
      this.name = obj.name;
      this.forceAttack = Math.ceil(Math.random() * obj.forceAttack);
    }
    fight(foe){
      console.log(`${this.name}'s attack: ${this.forceAttack} \n Multiplier: ${this.attackMult ? this.attackMult:"none"} \n
  ${foe.name}'s attack: ${foe.forceAttack} \n ${this.forceAttack >= foe.forceAttack ? this.name + " wins" : foe.name + " wins"} and Yoda has a ${this.lightsaber} ?`)
    }
  }
  
  class EpicJediSith extends JediSith {//EpicJediSith is a child class of JediSith
    constructor(epicObj) {
    super(epicObj); //replaces .call
      this.attackMult = epicObj.forceMult;
      this.forceAttack = Math.ceil((Math.random() * epicObj.forceAttack) * epicObj.forceMult);
      this.lightsaber = epicObj.saber;
    }
  }
  
  let yoda = new EpicJediSith({
    name:"Yoda",
    forceAttack:5,
    forceMult:4,
    lightsaber: "awesome saber"
  })
  
  
  
  let obi = new JediSith({ name:"Obi Wan", forceAttack:5});
  let maul = new JediSith({name: "Darth Maul", forceAttack:4});
  let rey = new JediSith({name: "Rey", forceAttack:3});
  let kylo = new JediSith({name:"Kylo Ren", forceAttack:3});
  
  
  //console.log(yoda.name);
  //console.log(yoda.forceAttack);
  //console.log(yoda.attackMult);
  //yoda.fight(obi);
  
  
  
  yoda.fight(maul);
  //obi.fight(maul);
  // rey.fight(kylo);
  // maul.fight(kylo);
  // maul.fight(rey);
  
  // console.log(obi);
  
  //ternary operators - quick if statement on one line
  //condition ? true: false:
  //value > 0? "apples": "apple"
  
  


 