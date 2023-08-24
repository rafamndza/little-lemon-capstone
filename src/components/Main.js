import React, { useReducer } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from './Header'
import Booking from './Booking'

export default function Main() {
    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch]=useReducer(updateTimes,initialState);
    const navigate = useNavigate();

    const submitAPI = function (formData) {
        return true;
    };
    const fetchAPI = function (formData) {
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i<=23;i++){
            if(random()<0.5){
                result.push(i+':00')
            };
            if(random()> 0.5){
                result.push(i+':30')
            };
        };
        return result;
    };
    const seedRandom= function (seed){
        var m = 2**35 -31;
        var a = 185852;
        var s = seed % m ;
        return function (){
            return (s = s *a % m)/m;
        }
    };
    function updateTimes(state,date){
        return {availableTimes: fetchAPI(new Date())}
    };
    function submitForm(formData){
        if(submitAPI(formData)){
            navigate("/confirmed")
        }
    };

  return (
    <main>
        <Routes>
            <Route path='/' element={<Header/>}></Route>
            <Route path='/booking' element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}></Route>
            <Route path='/' element={<Header/>}></Route>
            <Route path='/' element={<Header/>}></Route>
            <Route path='/' element={<Header/>}></Route>
        </Routes>
    </main>
  )
}
