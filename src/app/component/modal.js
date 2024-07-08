'use client'

import { useState, useEffect } from "react";
import Link from 'next/link'
import ReactModal from "react-modal";

export default function Modal({isOpen, onRequestClose, contentLabel, children}) {
 

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel={contentLabel}

      style={{
        overlay:{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          background:'rgba(0,0,0,.5)',
          zIndex: '99'
        },
        content: {
          width:'100%',
          maxWidth:'700px',
          height:'80%',
          inset:'auto',
          borderRadius:'0.75rem',
          overflow:'hidden'
        }
      }}
    >
      {children}
    </ReactModal>
  );
}