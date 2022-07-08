import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './componets/home/Home'
import MainView from './componets/pokedex/mainView'
import Moveinfo from './componets/pokedex/Moveinfo'
import PokemonInfo from './componets/pokedex/PokemonInfo'

function App() {

  const userName = useSelector(state => state.userName)

  const [showHeader, setShowHeader] = useState()

  useEffect(() => {
    if (userName === '') {
      setShowHeader('hidden')
    } else {
      setShowHeader('visible')
    }
  }, [userName])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home showHeader={showHeader} setShowHeader={setShowHeader} />} />
        <Route path='/pokedex' element={<MainView />} />
        <Route path='/pokedex/:id' element={<PokemonInfo />} />
        <Route path='/pokedex/:move' element={<Moveinfo />}/>
      </Routes>
    </div>
  )
}

export default App
