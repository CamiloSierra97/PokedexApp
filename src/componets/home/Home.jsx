import React from 'react'
import HomeForm from './HomeForm'
import ash from '/Users/camilo.sierra/Documents/Fundamentos/entregable_5/vite-project/src/img/Pokemon31.png'

const Home = () => {

  return (
    <div className='home'>
      <img src={ash} alt="Ash__Ketchum" className="ash" />
      <h1>Pokedex</h1>
      <h2>Greetings Trainer!</h2>
      <HomeForm />
    </div>
  )
}

export default Home