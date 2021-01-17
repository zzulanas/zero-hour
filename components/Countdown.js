import React, {useEffect, useState} from "react";

export default function Countdown({}){
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`12/31/2029`) - +new Date();
        let dayDiff = +new Date(`12/31/${year}`) - +new Date();
        let years = ((difference / (1000 * 60 * 60 * 24))/365)
        let timeLeft = {
            years: Math.floor(years),
            days: Math.floor(dayDiff / (1000 * 60 * 60 * 24)) ,
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
        };
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        },1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if(!timeLeft[interval]){
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "} <br/>
            </span> 
        );
    });

    return(
        <div>
            {timerComponents.length? timerComponents : <span>Time's up!</span>}
        </div>
    )
}