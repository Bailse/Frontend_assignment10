import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function TopMenu(){

    const session = await getServerSession(authOptions);

    return(

        <div className="relative">

            {/* LEFT MENU (Sign + MyBooking) */}
            <div className="absolute left-0 h-full flex items-center gap-4 px-4 text-xl">

                {
                    session ?
                    <Link href="/api/auth/signout">
                        <div>
                            Sign-out {session?.user?.name}
                        </div>
                    </Link>
                    :
                    <Link href="/api/auth/signin">
                        <div>
                            Sign-In
                        </div>
                    </Link>
                }

                <Link href="/mybooking" className="px-5">
                    <div>
                        My Booking
                    </div>
                </Link>

            </div>

            {/* RIGHT MENU */}
            <div className="h-[50px] bg-white z-30 border-t border-b border-gray-300 flex items-center justify-end">

                <TopMenuItem pageRef="/booking" title="Booking"/>

                <div className="relative h-[50px] w-[70px]">
                    <Image
                        src="/img/logo.png"
                        alt="logo"
                        fill
                        className="object-contain"
                    />
                </div>

            </div>

        </div>

    );
}