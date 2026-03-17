import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface"

type BookState = {
    bookItems: BookingItem[]
}

// ✅ โหลดจาก localStorage
const loadState = (): BookingItem[] => {
    if (typeof window === "undefined") return []
    try {
        const data = localStorage.getItem("bookItems")
        return data ? JSON.parse(data) : []
    } catch {
        return []
    }
}

const initialState: BookState = {
    bookItems: loadState()
}

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {

        addBooking: (state, action: PayloadAction<BookingItem>) => {
            const newItem = action.payload

            const index = state.bookItems.findIndex(item =>
                item.venue === newItem.venue &&
                item.bookDate === newItem.bookDate
            )

            if (index !== -1) {
                state.bookItems[index] = newItem
            } else {
                state.bookItems.push(newItem)
            }

            // ✅ save ลง localStorage
            if (typeof window !== "undefined") {
                localStorage.setItem("bookItems", JSON.stringify(state.bookItems))
            }
        },

        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            state.bookItems = state.bookItems.filter(item =>
                !(
                    item.nameLastname === action.payload.nameLastname &&
                    item.tel === action.payload.tel &&
                    item.venue === action.payload.venue &&
                    item.bookDate === action.payload.bookDate
                )
            )

            // ✅ save หลังลบ
            if (typeof window !== "undefined") {
                localStorage.setItem("bookItems", JSON.stringify(state.bookItems))
            }
        }

    }
})

export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer