import React from 'react'
import MuiModal from '@mui/material/Modal'
import { useInfoStore } from 'src/store'
import { FaTimes } from 'react-icons/fa'

function Modal() {
    const { modal, setModal, currentMovie } = useInfoStore()
    const handleClose = () => {
        setModal(false)
    }

    return (
        <MuiModal open={modal} onClose={handleClose}>
            <button onClick={() => setModal(false)} className='modalBtn absolute right-5 top-6 !z-40 h-9 w-9 border-none bg-[#181818]'>
                <FaTimes />
            </button>
        </MuiModal>
    );
};

export default Modal