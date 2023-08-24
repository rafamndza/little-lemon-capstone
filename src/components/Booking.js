import React from 'react'
import BookingForm from './BookingForm'

export default function Booking(props) {
  return (
    <div>
      <BookingForm 
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        SubmitForm={props.SubmitForm}
      />
    </div>
  )
}
