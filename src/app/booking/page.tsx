'use client'

import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { TextField, Select, MenuItem, Button, FormControl } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() {

  //const session = await getServerSession(authOptions) 
  // //if(!session || !session.user.token) return null; 
  // //const profile = await getUserProfile(session.user.token);
  // //var createdAt = new Date(profile.data.createdAt);

  {/* <tbody> <tr><td>Name :{profile.data.name}</td></tr> <tr><td>Email 
    :{profile.data.email}</td></tr> <tr><td>Tel :{profile.data.tel}</td></tr> 
    <tr><td>Member Since : {createdAt.toString()}</td></tr> </tbody> */}

  const dispatch = useDispatch<AppDispatch>();

  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("Bloom");
  const [bookDate, setBookDate] = useState("");

  const handleBooking = () => {
    const newBooking: BookingItem = {
      nameLastname,
      tel,
      venue,
      bookDate
    };

    dispatch(addBooking(newBooking));
  };

  return (
    <main className="flex flex-col items-center mt-10 space-y-6">

      <div className="text-3xl font-bold">
        Venue Booking
      </div>

      <div className="flex flex-col w-[420px]">

        <TextField
          variant="standard"
          name="Name-Lastname"
          label="Name-Lastname"
          margin="normal"
          value={nameLastname}
          onChange={(e) => setNameLastname(e.target.value)}
        />

        <TextField
          variant="standard"
          name="Contact-Number"
          label="Contact-Number"
          margin="normal"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />

        <FormControl variant="standard" sx={{ mt: 3 }}>
          <Select
            id="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <DatePicker
      value={bookDate ? dayjs(bookDate) : null}
      onChange={(newValue) => {
    if (newValue) {
      setBookDate(newValue.format("YYYY-MM-DD"));
    }
    }}
/>

        <Button
          variant="contained"
          name="Book Venue"
          sx={{ mt: 4 }}
          onClick={handleBooking}
        >
          Book Venue
        </Button>

      </div>

    </main>
  );
}