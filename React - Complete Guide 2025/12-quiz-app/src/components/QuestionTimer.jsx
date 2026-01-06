import { useEffect, useState } from "react";

export default function QuestionTimer({ timeOut, OnTimeOut, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeOut);

    useEffect(() => {
        const timer = setTimeout(OnTimeOut, timeOut);
        return () => clearTimeout(timer);
    }, [OnTimeOut, timeOut]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 100);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <progress
            id="question-time"
            value={remainingTime}
            max={timeOut}
            className={mode}
        />
    );
}
