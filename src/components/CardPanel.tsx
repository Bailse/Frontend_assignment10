'use client'

import Card from "./Card"
import Link from "next/link"
import { useReducer } from "react"

export default function CardPanel() {

    const initialState = new Map<string,number>([
        ["The Bloom Pavilion",0],
        ["Spark Space",0],
        ["The Grand Table",0]
    ])

    const reducer = (state:Map<string,number>,action:{type:string,venue:string,rating?:number}) => {

        const newState = new Map(state)

        switch(action.type){

            case "setRating":
                if(action.rating !== undefined){
                    newState.set(action.venue,action.rating)
                }
                return newState

            case "remove":
                newState.delete(action.venue)
                return newState

            default:
                return state
        }

    }

    const [ratingMap,dispatch] = useReducer(reducer,initialState)

    const mockVenueRepo = 
    [           {cid: "001" , name:"The Bloom Pavilion" , image:'/img/bloom.jpg'},
                {cid: "002" , name:"Spark Space" , image:'/img/sparkspace.jpg'},
                {cid: "003" , name:"The Grand Table" , image:'/img/grandtable.jpg'}
                
    ]

    return(

        <div className="px-10" >

            <div style = {{margin : "20px" , display:"flex" , flexDirection : "row", flexWrap:"wrap" , justifyContent : "space-around"}}>
                

                 {
                    mockVenueRepo.map((venue)=>(
                        <Link key={venue.cid} href={`/venue/${venue.cid}`} className="w-1/5">
                            <Card
                                imgSrc={venue.image}
                                venueName={venue.name}
                                onRatingChange={(rating:number)=>{
                                    dispatch({
                                        type:"setRating",
                                        venue:venue.name,
                                        rating
                                    })
                                }}
                            />
                        </Link>
                    ))
                 }

                

            </div>

                    

            <div style={{marginTop:"24px", paddingLeft:"32px"}} >
                

                <div className="text-3xl font-bold"> Venu List with Ratings : {ratingMap.size} </div>

            <div className="text-xl">

                {[...ratingMap.entries()].map(([venue,rating])=>(
                    
                    <div
                    key={venue}
                    data-testid={venue}
                    onClick={()=>dispatch({type:"remove",venue})}
                    >

                    {venue} Rating : {rating}

                    </div>

                ))}

            </div>
            
            </div>

        </div>

    )
}