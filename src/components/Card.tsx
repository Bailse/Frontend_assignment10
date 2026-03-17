'use client'

import Styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from '@/components/InteractiveCard'
import Rating from '@mui/material/Rating'
import { useState } from 'react'

export default function Card(
    {imgSrc , venueName , onRatingChange} 
    : {imgSrc:string , venueName:string , onRatingChange?:(rating:number)=>void}
){

    const [rating,setRating] = useState<number | null>(0)

    return(

        <InteractiveCard >

            <div className={Styles.cardimg} >

                <Image
                    src={imgSrc}
                    alt="Product Picture"
                    fill={true}
                    style={{ objectFit: "cover" }}
                />

            </div>
    
            <div className={Styles.headtext} >{venueName}</div>

            <Rating 
                value={rating}
                onClick={(e) => {
                            e.stopPropagation();
                    }}
                onChange={(event,newValue)=>{
                    setRating(newValue)
                    if(newValue!==null){
                        onRatingChange?.(newValue)
                    }
                }}
                
                id={`${venueName} Rating`}
                name={`${venueName} Rating`}
                data-testid={`${venueName} Rating`}
            />
    
        </InteractiveCard>
        
    )
    
}