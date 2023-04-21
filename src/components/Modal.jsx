import React from 'react'

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'
}

const MODAL_STYLE = {
position: 'fixed',
top: '0',
left: '0',
height: '100vh',
width: '400px',
backgroundColor: '#114871',
color: '#fff'
}

const CLOSE_STYLE = {
   position: 'fixed',
   top: '60px',
   right: '1250px',
   fontSize: '30px',
   cursor: 'pointer',

}


export default function Modal({isOpen, setModalOpen, children}) {
if(isOpen) {
    return ( 
    
    <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
            <div>
            {children}
            </div>
            <p style={CLOSE_STYLE}  onClick={setModalOpen}>X</p>
            </div>
    </div>
    )
}


  return null
}

