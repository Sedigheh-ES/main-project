import React, { Dispatch, SetStateAction } from 'react'
import Modal from '../ui/modal/Modal'
import { useModal } from '@/store/ModalContext';
import Input from '../ui/form/Input';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { LoginApiCall } from '@/api/Auth';
import { useUser } from '@/store/AuthContext';
import { toast } from 'react-toastify';
import useBasket from '@/hooks/use-basket';

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
    const { uuid2user } = useBasket();
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
                uuid2user();
        }})
        
    }

    
    return (

        <Modal title={'Login'} closeModal={onClose} >
         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
                <Input register={register('identifier', { required: "enter username" })}
                    type={'text'} errors={errors}
                    label={'username'}
                    {...{ placeholder: "enter username" }}
                    className='text-2xl'
                
                />
                <Input register={register('password', {required:"enter your password", minLength:{value:3,message:"min 3 character"}})} type={'password'} errors={errors} label={'password'} {...{placeholder:"enter password"}}/>
                
                   
                <button className={'mt-2 bg-blue-400 px-8 py-4 cursor-pointer text-white text-xl border border-white rounded-2xl hover:border-blue-900 hovere:bg-blue-100  '}>
                    Login
                </button>
            </form>
            <span onClick={()=>openModal('register')} className='text-xl cursor-pointer capitalize text-blue-800 hover:text-blue-400 ml-3.5'>You don't have account? register...</span>
        </Modal>


    )
}

