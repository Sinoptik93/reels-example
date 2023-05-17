import {useEffect, useState} from "react";
import dayJs from "dayjs";

const LiveDate= () => {
    const PATTERN = 'DD MMM YYYY, HH:mm'
    const [time, setTime] = useState<string>(dayJs(new Date).format(PATTERN));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(dayJs(new Date).format(PATTERN));
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

     return (
         <p className="text-[0.9rem] desktop:text-[1.5rem] text-dark-gray font-regular">{time}</p>
     );
};

export default LiveDate;
