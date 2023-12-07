import React, { useState } from "react";
import Profile from "./Profile";
import UserData from "./UserData";
import data from '../data.json';

const Card = () => {
    // // console.log(data);
    // console.log(data[0].title);
    const [time, setTime] = useState('daily');
    const [timespan, setTimespan] = useState('Yesterday')
    const userDay = () => {
        setTime('daily');
        setTimespan('Yesterday')
    }
    const userWeek = () => {
        setTime('weekly');
        setTimespan('Last Week')
    }

    const userMonth = () => {
        setTime('monthly');
        setTimespan('Last Month')
    }

    return (<>
        <main className="card">
            <Profile
                getday = {userDay}
                getweek =  {userWeek}
                getmonth = {userMonth}
                active = {time}
            />
            <div className="data-objects">
            {data.map((val, index) => {
                return (<UserData
                    key={index}
                    id={index}
                    title ={val.title}
                    currentdata ={val.timeframes[time].current}
                    previousdata = {val.timeframes[time].previous}
                    time = {timespan}
                />)
            })}
            </div> 
        </main>
    </>)
}

export default Card;