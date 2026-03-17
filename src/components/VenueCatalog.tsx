import Card from "./Card"
import Link from "next/link"

type VenueItem = {
    id: string
    name: string
    picture: string
}

type VenueJson = {
    data: VenueItem[]
}

export default async function VenueCatalog(
    { venuesJson }: { venuesJson: Promise<VenueJson> }
) {

    const venues = await venuesJson

    return (

        <div style={{
            margin:"20px",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"space-around"
        }}>

            {
                venues.data.map((venue:VenueItem)=>(
                    
                    <Link key={venue.id} href={`/venue/${venue.id}`} className="w-1/5">

                        <Card
                            imgSrc={venue.picture}
                            venueName={venue.name}
                        />

                    </Link>

                ))
            }

        </div>

    )
}