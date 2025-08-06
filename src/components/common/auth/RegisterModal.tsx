import React from 'react'
import Modal from '../ui/modal/Modal'
import { useForm } from 'react-hook-form'
import Input from '../ui/form/Input';
import { useMutation } from '@tanstack/react-query';
import { RegisterApiCall } from '@/api/Auth';

interface Props{
    onClose:()=>void
}

interface FormData{
    username: string;
    email: string;
    password: string  
}



export default function RegisterModal({ onClose }: Props) {   
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const mutate=useMutation({mutationFn:RegisterApiCall})

    const onSubmit = (data:FormData) => {
        console.log(data);
        mutate.mutate(data, {
            onSuccess: (response) => {
                console.log('response', response);
                window.localStorage.setItem('token',response.jwt)
        }})
        
    }


    return (

        <Modal title={'Register'} closeModal={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input register={register('username', { required: "enter username" })} type={'text'} errors={errors} label={'username'} {...{placeholder:"enter username"}} />
                <Input register={register('email', {required:"enter your email address", minLength:{value:3,message:"min 3 character"}})}  type={'email'} errors={errors}  label={'Email'} {...{placeholder:"enter email"}} />
                <Input register={register('password', {required:"enter your password", minLength:{value:3,message:"min 3 character"}})} type={'password'} errors={errors} label={'password'} {...{placeholder:"enter password"}}/>
                
                   
                <button className={'mt-2 bg-amber-400 px-4 py-2 cursor-pointer'}>
                    submit
                </button>
            </form>
        </Modal>


    )
}

