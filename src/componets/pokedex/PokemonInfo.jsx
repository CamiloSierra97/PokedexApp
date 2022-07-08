import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import headerImage from './img/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67.png'

const PokemonInfo = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const moveInfo = () => navigate(`/pokedex/${pokeInfo?.moves.move.name}`)

    const [moveState, setMoveState] = useState()

    const [pokeInfo, setPokeInfo] = useState()

    const moveName = e => {
        e.preventDefault()
        setMoveState(e)
    }

    console.log(moveState)


    useEffect(() => {
        URL = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(URL)
            .then(res => setPokeInfo(res.data))
            .catch(err => console.log(err))
    }, [])

    // console.log(pokeInfo)

    return (
        <>
            <div>
                <header className="logo">
                    <div style={{ display: 'flex' }}>
                        <img src={headerImage} alt="pokedex" style={{ width: '200px', padding: '20px' }} />

                    </div>
                </header>
            </div>
            <article className="main">
                <div className="img__container">
                    <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt={`pokemon.${id}`} className="pokeimage" />
                </div>
                <main>
                    <div className="id">
                        #{pokeInfo?.id}
                    </div>
                    <h3 className="name">{pokeInfo?.name}</h3>
                    <table className="info__table">
                        <tbody>
                            <tr style={{ display: 'flex', gap: '130px', justifyContent: 'center', fontSize: '0.8rem' }}>
                                <td>
                                    <h6>Weight</h6>
                                    <span>{pokeInfo?.weight}</span>
                                </td>
                                <td>
                                    <h6>Height</h6>
                                    <span>{pokeInfo?.height}</span>
                                </td>
                            </tr>
                            <tr style={{ minWidth: '300px', display: 'flex', justifyContent: 'center', gap: '200px', marginTop: '5%' }}>
                                <td>
                                    <h3>Type</h3>
                                    <p>
                                        {
                                            pokeInfo?.types.map(type =>
                                                <span key={type.type.url} style={{ padding: '50px' }}>{type.type.name} </span>
                                            )
                                        }
                                    </p>
                                </td>
                                <td>
                                    <h3>Abilities</h3>
                                    <p>
                                        {
                                            pokeInfo?.abilities.map(ability =>
                                                <span key={ability.slot} style={{ padding: '50px' }}>{ability.ability.name} </span>
                                            )
                                        }
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </article>
            <article className="second">
                <div className="moves__container">
                    <h6 style={{ paddingTop: '3%', marginBottom: '0%' }}>Moves</h6>
                    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', padding: '3%' }}>
                        {
                            pokeInfo?.moves.map(move =>
                                <li className="moves" key={move?.move.url} name={move?.move.name} onClick={moveName}>{move?.move.name}</li>
                            )
                        }
                    </ul>
                </div>
            </article>
        </>
    )
}

export default PokemonInfo