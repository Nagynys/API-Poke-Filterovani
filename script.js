const input = document.querySelector(".inputFilter")
let userList = []

input.addEventListener("input", (e) => {
  dataFilter(e.target.value)
})


fetch("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0")
  .then( response => response.json() )
  .then( data => {
    
  const pokemoni = document.getElementById("poke")
 
  pokemoni.innerHTML = ""

 
  data.results.forEach( pokePoke => {
    // Získání URL obrázku 
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokePoke.name}`)
    .then( response => response.json() )
    .then( pokeData => {
    
      const imageUrl = pokeData.sprites.front_default

      const elementPoke = document.createElement("li")
      elementPoke.innerHTML = `
        <img src="${imageUrl}" alt="">
        <h3>${pokePoke.name}</h3>`
      pokemoni.appendChild(elementPoke)

      userList.push(elementPoke)
    })
  })
})


const dataFilter = (inputElement) => {
  userList.forEach( oneUser => {
    if (oneUser.innerText.toLowerCase().includes(inputElement.toLowerCase())) {
      oneUser.classList.remove("hide")
    } else {
      oneUser.classList.add("hide")
    }
  })
}