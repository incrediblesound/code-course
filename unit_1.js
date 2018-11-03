/* data */

const john = {
  name: 'John',
  age: 31,
}

const person = function(name, age){
  return {
    name,
    age,
  }
}

const matt = person('Matt', 23)

class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }
  print(){
    console.log(`This person's name is ${this.name} and they are ${this.age} years old.`)
  }
}

/*
What advantage does the person factory give us over pure data? The class?
Can you write a function to compare two "people" data objects? 
What about a class method to compare two "people" class instances?
*/

/* data with state */

const VEGE_STATES = [ 'seed', 'sprout', 'mature', 'fruiting', 'rotting', 'dead' ]

class Vegetable {
  constructor(name){
    this.name = name
    this.state = 0
  }
  grow(){
    if (this.state < VEGE_STATES.length - 1) {
      this.state = this.state + 1;
    }
  }
  printState(){
    return `${VEGE_STATES[ this.state ]} ${this.name}`
  }
}

class Garden {
  constructor(){
    this.map = [
      [ null, null ],
      [ null, null ],
      [ null, null ],
    ]
  }
  plantVegetable(coordinates, name) {
    const [ x, y ] = coordinates
    this.map[x][y] = new Vegetable(name)
  }
  advanceTime(){
    this.map.forEach(row => {
      row.forEach(plot => {
        if (plot !== null) {
          plot.grow()
        }
      })
    })
  }
  printGarden(){
    let text = ''
    this.map.forEach(row => {
      const rowText = row.map(plot => {
        if (plot === null) {
          return 'empty'
        } else {
          return plot.printState()
        }
      }).join(' | ')
      text = text + rowText + '\n'
    })
    console.log(text)
  }
}

const g = new Garden()

g.plantVegetable([0, 0], 'potato')
g.plantVegetable([0, 1], 'potato')
g.plantVegetable([1, 0], 'lettuce')
g.plantVegetable([1, 1], 'lettuce')

g.printGarden()
g.advanceTime()
g.printGarden()
g.advanceTime()

/*
Projects:
write a method that collects the vegetable from a plot but only if the vegetable is fruiting
how would you model the collected vegetable?

Use HTML to add graphics to the garden and controls to plant and harvest vegetables
 */