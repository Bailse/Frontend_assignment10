'use client'

import Styles from './card.module.css'
import Image from 'next/image';

export default function Card( {children} : {children:React.ReactNode}) {

    function onMouseOverCard(event:React.SyntheticEvent){
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.add('bg-neutral-200');
            event.currentTarget.classList.add('shadow-2xl');
            
        }
        else{
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.remove('bg-neutral-200');
            event.currentTarget.classList.add('shadow-lg');
        }

    }




    return(



        <div className='w-[300px] h-[350px] bg-white shadow-lg rounded-lg pt-[10px] m-[30px]'
        onMouseOver={(e) => onMouseOverCard(e)}
        onMouseOut = {(e) => onMouseOverCard(e)}>
        
            {children}
            
        </div>


    );




}