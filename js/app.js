const wrapper = document.querySelector("#wrapper")

const pokemon = [

  {

    name: "Charmander",

    type: "Fire",

    maxHp: 100,

    moves: ["Scratch", "Ember", "Flamethrower"]

  },

  {

    name: "Squirtle",

    type: "Water",

    maxHp: 110,

    moves: ["Tackle", "Water Gun", "Bite"]

  },

  {

    name: "Pikachu",

    type: "Electric",

    maxHp: 95,

    moves: ["Quick Attack", "Thunder Shock", "Thunderbolt"]

  },

    {

    name: "Ampharos",

    type: "Electric",

    maxHp: 90,

    moves: ["Thunder", "Meteor Beam", "Dragon Pulse"]

  }

];

pokemon.forEach((item) => {
    const ele = document.createElement("div")
    const header = document.createElement("h2")
    const typeHead = document.createElement("h3")
    const hpHead = document.createElement("h3")

    header.innerHTML = item.name
    typeHead.innerHTML = item.type
    hpHead.innerHTML = item.maxHp
    
    ele.appendChild(header)
    ele.appendChild(typeHead)
    ele.appendChild(hpHead)

    item.moves.forEach((item) => {
        const moveHead = document.createElement("h5")
        ele.appendChild(moveHead)
        moveHead.innerHTML = item
    })

    switch (item.type) {
        case "Fire":
          ele.style.color = "red"
          break;
        
        case "Water":
          ele.style.color = "blue"
        break;

        case "Electric":
          ele.style.color = "yellow"
        break;

        default:
          break;
      }
  
    
    wrapper.appendChild(ele)
});