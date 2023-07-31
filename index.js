const pokecontainer = document.querySelector("#pokecontainer");

const pokemon = 1280;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const maintypes = Object.keys(colors)

const fetchpokemons = async () => {
    for (let i = 1; i < pokemon; i++){
        await getpokemon(i)
    }
     
}

const getpokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const resp = await fetch(url)
    const data = await resp.json()
    pokemoncard(data)

}

const pokemoncard = (poke) => {
    const card = document.createElement('div')
    card.classList.add("pokemon")

    const name = poke.name[0].toUpperCase() + poke.name.slice(1)
    const id = poke.id.toString().padStart(3, '0')
    const poketypes = poke.types.map(type => type.type.name)
    const type = maintypes.find(type => poketypes.indexOf(type) > -1)
    const color = colors[type]
    card.style.backgroundColor = color

    const pokehtml = `
    <div class="imgcontainer">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">
    </div>

     <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
         <small class="type">Type:<span> ${type}</span></small>
    </div>`


    card.innerHTML = pokehtml
    pokecontainer.appendChild(card)
            }
fetchpokemons()