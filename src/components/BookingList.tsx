'use client'

import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
//import { removeReservation } from "@/redux/features/carSlice"
import { removeBooking } from "@/redux/features/bookSlice"

export default function ReservationCart() {

    const bookItems = useAppSelector((state) => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
            {
                bookItems.length === 0 ? (
                    <div className="text-center text-gray-500 mt-5">
                        No Venue Booking
                    </div>
                ) : (
                    bookItems.map((bookingItem) => (
                        <div
                            className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                            key={bookingItem.nameLastname}
                        >   
                            <div className="text-xl">
                                Name-Lastname : {bookingItem.nameLastname}
                            </div>
                            <div className="text-xl">
                                Tel : {bookingItem.tel}
                            </div>

                            <div className="text-xl">
                               Venue : {bookingItem.venue}
                            </div>

                            <div className="text-xl">
                                Date : {bookingItem.bookDate}
                            </div>

                             <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30
                                hover:bg-cyan-600 hover:text-white hover:border-transparent'
                            onClick={() => {dispatch(removeBooking(bookingItem))}}>
                                Remove this venue
                            </button>
                        </div>
                    ))
                )
            }
        </>
    )
}