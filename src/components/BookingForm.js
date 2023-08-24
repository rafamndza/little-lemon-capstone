import React, { useState } from 'react'

export default function BookingForm() {
    const [date, setDate]= useState("");
    const [times, setTimes]= useState("");
    const [guests, setGuests]= useState("");
    const [occasion, setOccasion]= useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.SubmitForm(e);
    }
    const handleChange = (e) =>{
        setDate(e);
        props.dispatch(e);
    };

  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose Date:</label>
                        <input id="book-date" onChange={(e)=>{handleChange(e.target.value)}} value={date} type='date' required></input>
                    </div>
                    <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                        <select id="book-time" value={times} onChange={(e)=> setTimes(e.target.value)}>
                            <option value="" >Select a Time:</option>
                            {
                            props.availableTimes.availableTimes.map(availableTimes =>{return  <option key={availableTimes}>{availableTimes}</option>})
                            };
                        </select>
                    </div>
                    <div>
                        <label htmlFor='book-guests'>Number of Guests:</label>
                        <input id='book-guests' min='1' value={guests} onChange={(e)=>setGuests(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor='book-occasion'>Occasion:</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={e=> setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option></option>
                            <option></option>
                        </select>
                    </div>
                    <div className='btnReceive'>
                        <input araia-label='On Click' type='submit' value={'Make Your Reservation'}></input>
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
  )
}
