import getVenues from "@/libs/getVenues";
import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function venueDetailPage(
  { params }: { params: Promise<{ vid: string }> }
){

    const { vid } = await params

    const venueDetail = await getVenue(vid);

    return (

        <main className="p-5 m-5">

            <div className="text-center text-5xl text-bold m-5 display-block">{venueDetail.data.name}</div>


            <div className="flex flex-row !gap-10 !my-5">

                <Image
                    src={venueDetail.data.picture}
                    alt="Venue Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
            <div className="text-md p-5 text-left">
                <div className="text-md p-5">
                    Name : {venueDetail.data.name}    
                </div>
                <div className="text-md p-5">
                    Address : {venueDetail.data.address}    
                </div>
                <div className="text-md p-5">
                    District : {venueDetail.data.district}    
                </div>
                <div className="text-md p-5">
                    Province : {venueDetail.data.province}    
                </div>
                <div className="text-md p-5">
                    postalCode : {venueDetail.data.postalcode}    
                </div>
                <div className="text-md p-5">
                    Tel : {venueDetail.data.tel}    
                </div>
                <div className="text-md p-5">
                    DailyRate : {venueDetail.data.dailyrate}    
                </div>
            </div>

            </div>

        </main>

    )

}