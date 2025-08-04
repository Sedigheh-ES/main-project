import React from 'react'
import Modal from '../ui/modal/Modal'

interface Props{
    onClose:()=>void
}


export default function LoginModal({onClose}:Props) {
    return (

        <Modal title={'Login'} closeModal={onClose}>
            <form action="">
                <label htmlFor="#">Name</label>
                <input type="text" name='login' className='border border-amber-200 rounded-2xl w-full bg-white' placeholder='enter your name' />
            </form>
        </Modal>


    )
}

