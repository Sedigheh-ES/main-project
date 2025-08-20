import React from 'react'
import Modal from '../ui/modal/Modal'
import { useForm } from 'react-hook-form'
import Input from '../ui/form/Input';
import { useMutation } from '@tanstack/react-query';
import { RegisterApiCall } from '@/api/Auth';
import { useUser } from '@/store/AuthContext';
import { toast } from 'react-toastify';
import { useModal } from '@/store/ModalContext';
import useBasket from '@/hooks/use-basket';

interface Props{
    onClose:()=>void
}

interface FormData{
    username: string;
    email: string;
    password: string  
}



export default function RegisterModal({ onClose }: Props) {  
    const { openModal, closeModal } = useModal();
    
    const { uuid2user } = useBasket();

    const { login } = useUser();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const mutate=useMutation({mutationFn:RegisterApiCall})

    const onSubmit = (data:FormData) => {
        console.log(data);
        mutate.mutate(data, {
            onSuccess: (response) => {
                console.log('response', response);
                login(response.jwt, response.user);
                toast.success('اکانت شما با موفقیت ایجاد شد');
                closeModal();
                uuid2user();
        }})
        
    }


    return (

        <Modal title={'Register'} closeModal={onClose}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-between'>
                <Input register={register('username', { required: "enter username" })} type={'text'} errors={errors} label={'username'} {...{placeholder:"enter username"}} />
                <Input register={register('email', {required:"enter your email address", minLength:{value:3,message:"min 3 character"}})}  type={'email'} errors={errors}  label={'Email'} {...{placeholder:"enter email"}} />
                <Input register={register('password', {required:"enter your password", minLength:{value:3,message:"min 3 character"}})} type={'password'} errors={errors} label={'password'} {...{placeholder:"enter password"}}/>               
                <button className={'mt-2 bg-blue-400 px-8 py-4 cursor-pointer text-white text-xl border border-white rounded-2xl hover:border-blue-900 hovere:bg-blue-100  '}>
                    Register
                </button>
            </form>
        </Modal>


    )
}

