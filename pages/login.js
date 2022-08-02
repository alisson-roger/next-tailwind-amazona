import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'

export default function LoginScren () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const submitHandler = ({ email, password }) => {}

  return (
    <Layout title='login'>
      <form
        className='mx-auto max-w-screen-md'
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className='mb-4 text-xl'>Login</h1>
        <div className='mb-4'>
          <label htmlFor='email'>Email</label>
          <input
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email'
              }
            })}
            type='email'
            className='w-full'
            id='email'
            autoFocus
          ></input>
          {errors.email && (
            <div className='text-red-500'>{errors.email.message}</div>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='password'>Password</label>
          <input
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'password is more than 5 chars' }
            })}
            type='password'
            className='w-full'
            id='password'
            autoFocus
          ></input>
          {errors.password && (
            <div className='text-red-500 '>{errors.password.message}</div>
          )}
        </div>
        <div className='mb-4'>
          <button className='primary-button'>Login</button>
        </div>
        <div className='mb-4'>
          Don&apos;t you haave an account? &nbsp;
          <Link href='register'>Register</Link>
        </div>
      </form>
    </Layout>
  )
}
