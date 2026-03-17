import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";
export default async function Venue() {

    const venues = getVenues()


    return(

        <main>
            <div className="text-3xl text-center"> Select your Venues </div>
            <div>
                <VenueCatalog venuesJson={venues}></VenueCatalog>
            </div>
        </main>

    );

}