import React, { useEffect, useState, useMemo } from 'react';

function ClockBlock() {
    const [clockState, setClockState] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClockState(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const timeString = useMemo(() => clockState.toLocaleTimeString(), [clockState]);
    const dateString = useMemo(() => clockState.toLocaleDateString(), [clockState]);

    return (
        <div className="clock-block">
            <div className="time">{timeString}</div>
            <div className="date">{dateString}</div>
        </div>
    );
}

export default ClockBlock