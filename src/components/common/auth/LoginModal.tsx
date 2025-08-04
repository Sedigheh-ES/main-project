import React, { Dispatch, SetStateAction } from 'react'
import Modal from '../ui/modal/Modal'
import { useModal } from '@/store/ModalContext';

interface Props{
    onClose: () => void;
}


export default function LoginModal({ onClose }: Props) {
     const { openModal } = useModal();
    
    return (

        <Modal title={'Login'} closeModal={onClose}>
            <form action="">
                <label htmlFor="#">Name</label>
                <input type="text" name='login' className='border border-amber-200 rounded-2xl w-full bg-white' placeholder='enter your name' />
            </form>
            <span onClick={()=>openModal('register')}>Goto register modal</span>
        </Modal>


    )
}

