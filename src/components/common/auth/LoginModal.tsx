import React from 'react'
import Modal from '../ui/modal/Modal'



export default function LoginModal() {
    return (

        <Modal title={'Login'} closeModal={() => { }}>
            <form action="">
                <label htmlFor="#">Name</label>
                <input type="text" name='login' className='border border-amber-200 rounded-2xl w-full bg-white' placeholder='enter your name' />
            </form>
        </Modal>


    )
}

