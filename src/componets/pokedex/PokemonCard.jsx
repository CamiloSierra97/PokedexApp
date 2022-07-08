import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import pokeBall from './img/PokeBall_37565.ico'

const PokemonCard = ({ pokemon }) => {

    const [information, setInformation] = useState()

    useEffect(() => {
        axios.get(pokemon.url)
            .then(res => setInformation(res.data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const pokeInfo = () => navigate(`/pokedex/${information.id}`)

    return (
        <article className={`pokecard ${information?.types[0].type.name}`} onClick={pokeInfo}>
            {
                information ?
                    <main className="article__container">
                        <div style={{ minWidth: '332.5px', minHeight: '300px', margin: '0px' }}>
                            <img src={information?.sprites.other['official-artwork'].front_default} alt={information?.name} className="pokeimage"></img>
                        </div>
                        <h3 className="name">{information?.name}</h3>
                        <ul className="info">
                            <li>
                                <div >
                                    {
                                        information?.types.map(nameType => (
                                            <span key={nameType?.type.url} style={{ padding: '30px' }}>{nameType?.type.name} </span>
                                        ))
                                    }
                                </div>
                                <p>Type</p>
                            </li>
                            <li style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '30px'
                            }}>
                                <div style={{ width: '80%', height: '1px', backgroundColor: 'gray', marginLeft: '10%' }}></div>
                                <table className="info__container">
                                    <tbody>
                                        <tr style={{
                                            display: 'flex',
                                            gap: '20%',
                                            justifyContent: 'center'
                                        }}>
                                            <td>
                                                <h4 className="stats">Hp</h4>
                                                <span className="value">{information?.stats[0].base_stat}</span>
                                            </td>
                                            <td>
                                                <h4 className="stats">Attack</h4>
                                                <span className="value">{information?.stats[1].base_stat}</span>
                                            </td>
                                        </tr>
                                        <tr style={{
                                            display: 'flex',
                                            gap: '20%',
                                            justifyContent: 'center'
                                        }}>
                                            <td>
                                                <h4 className="stats">Defense</h4>
                                                <span className="value">{information?.stats[2].base_stat}</span>
                                            </td>
                                            <td>
                                                <h4 className="stats">Speed</h4>
                                                <span className="value">{information?.stats[5].base_stat}</span>
                                            </td>

                                        </tr>
                                        <tr style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: '3%',
                                            paddingBottom: '5%'
                                        }}>
                                            <td style={{ width: '150px', }}>
                                                <h4 className="stats">Special Defense</h4>
                                                <span className="value">{information?.stats[4].base_stat}</span>
                                            </td>
                                            <td style={{ width: '150px' }}>
                                                <h4 className="stats">Special Attack</h4>
                                                <span className="value">{information?.stats[3].base_stat}</span>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </li>
                        </ul>
                    </main>

                    :

                    <div style={{ height: '570px', width: '340px', }}>
                        <div>
                            <img src={pokeBall} alt="poke-ball" style={{ width: '332.5px', height: '300px', backgroundColor: 'rgba(20, 1, 17, 0.3)' }} />
                        </div>
                        <p style={{ color: '#140111', fontSize: '3rem' }}>Cargando...</p>
                    </div>
            }

        </article>
    )
}

export default PokemonCard