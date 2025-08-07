import React, { Dispatch, SetStateAction } from 'react'
import Modal from '../ui/modal/Modal'
import { useModal } from '@/store/ModalContext';
import Input from '../ui/form/Input';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { LoginApiCall } from '@/api/Auth';
import { useUser } from '@/store/AuthContext';
import { toast } from 'react-toastify';

interface Props{
    onClose: () => void;
}
interface FormData{
    identifier: string;
    password: string  
}



export default function LoginModal({ onClose }: Props) {
    const { openModal , closeModal} = useModal();
    const { login } = useUser();
     const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const mutate=useMutation({mutationFn:LoginApiCall})

    const onSubmit = (data:FormData) => {
        console.log(data);
        mutate.mutate(data, {
            onSuccess: (response) => {
                console.log('response', response);
                login(response.jwt, response.user);
                toast.success('شما با موفقیت لاگین شدید');
                closeModal();
        }})
        
    }

    
    return (

        <Modal title={'Login'} closeModal={onClose}>
         <form onSubmit={handleSubmit(onSubmit)}>
                <Input register={register('identifier', { required: "enter username" })} type={'text'} errors={errors} label={'username'} {...{placeholder:"enter username"}} />
                <Input register={register('password', {required:"enter your password", minLength:{value:3,message:"min 3 character"}})} type={'password'} errors={errors} label={'password'} {...{placeholder:"enter password"}}/>
                
                   
                <button className={'mt-2 bg-amber-400 px-4 py-2 cursor-pointer'}>
                    submit
                </button>
            </form>
            <span onClick={()=>openModal('register')}>Goto register modal</span>
        </Modal>


    )
}

