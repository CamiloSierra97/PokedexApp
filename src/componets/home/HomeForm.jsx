import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserName } from '../../store/slices/user.name.slice'

const HomeForm = () => {

    const { handleSubmit, register, reset } = useForm()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submit = data => {
        dispatch(setUserName(data.userName))
        reset({
            userName: ''
        })
        navigate('pokedex')
    }

    return (
        <div className='trainer__container'>
            <form className="user" onSubmit={handleSubmit(submit)} style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <label htmlFor="userName"></label>
                <input type="text" placeholder='Type your name' id='userName' {...register('userName')} style={{
                    borderRadius: '5px',
                    border: 'solid',
                    borderWidth: '2px'
                }} />
                <button className='btn'>Start</button>
            </form>
        </div>
    )
}

export default HomeForm