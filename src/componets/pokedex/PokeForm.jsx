import React from 'react'

const PokeForm = ({ setSearch, types, setSelectType }) => {

    const nameTyping = e => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const changeType = e => {
        setSelectType(e.target.value)
    }

    return (
        <form style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '5px'
        }}>
            <input
                type="text"
                placeholder='Type a pokemon`s name'
                style={{ borderRadius: '5px', border: 'solid' }}
                onChange={nameTyping}
            />
            <button className='btn'>Let's go!</button>
            <select onChange={changeType} style={{
                width: '331px',
                backgroundColor: 'rgba(255, 95, 92, 0.15)',
                color: '#A30300',
                borderRadius: '5px',
                cursor: 'pointer',
                marginLeft: '50px'
            }}>
                <option value="All pokemons" style={{ cursor: 'pointer' }}>All pokemons</option>
                {
                    types?.map(type => (
                        <option value={type?.name} key={type.name}>{type?.name}</option>
                    ))
                }
            </select>
        </form >
    )
}

export default PokeForm