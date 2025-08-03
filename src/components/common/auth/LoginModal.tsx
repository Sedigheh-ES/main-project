import React from 'react'
import Modal from '../ui/modal/Modal'

export default function LoginModal() {
  return (
    <Modal title={'Login'}  closeModal={()=>{}}>
          <form action="">
              <input type="text" name='login' />
        </form>
      </Modal>
  )
}

