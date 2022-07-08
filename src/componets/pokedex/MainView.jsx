import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'
import PokeForm from './PokeForm'
import headerImage from '/Users/camilo.sierra/Documents/Fundamentos/entregable_5/vite-project/src/img/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67.png'

const MainView = () => {

  const userName = useSelector(state => state.userName)

  const [pokemons, setPokemons] = useState()

  const [search, setSearch] = useState()

  const [filter, setFilter] = useState()

  const [types, setTypes] = useState()

  const [selectType, setSelectType] = useState('All pokemons')


  useEffect(() => {
    URL = 'https://pokeapi.co/api/v2/type/'
    axios.get(URL)
      .then(res => setTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])


  useEffect(() => {
    if (selectType === 'All pokemons') {
      URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    } else {
      URL = `https://pokeapi.co/api/v2/type/${selectType}`
      axios.get(URL)
        .then(res => {
          const pokeArray = res.data.pokemon.map(e => e.pokemon)
          setPokemons(pokeArray)
        })
        .catch(err => console.log(err))
    }
  }, [selectType])


  useEffect(() => {
    setFilter(pokemons?.filter(e => e.name.includes(search.toLowerCase())))
  }, [search])


  return (
    <div>
      <div>
        <header className="logo">
          <div style={{display: 'flex'}}>
            <img src={headerImage} alt="pokedex" style={{width: '200px', padding: '20px'}}/>
          </div>
        </header>
      </div>
      <h2 className="title__main">Welcome {userName ? userName : 'Trainer'}, let's find your favourite pokemons!</h2>
      <PokeForm
        setSearch={setSearch}
        types={types}
        setSelectType={setSelectType}
      />
      <div className="pokecontainer">
        {
          filter

            ?

            filter?.map(pokemon => (
              <PokemonCard
                key={pokemon.url}
                pokemon={pokemon}
              />
            ))

            :

            pokemons?.map(pokemon => (
              <PokemonCard
                key={pokemon.url}
                pokemon={pokemon}
              />
            ))
        }
      </div>
    </div>
  )
}

export default MainView