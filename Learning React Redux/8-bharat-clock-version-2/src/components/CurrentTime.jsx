import { useEffect, useState } from "react";

export default function CurrentTime() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    // let time = new Date();
    return (
        <p className="dark">This is the Current Time : {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
    )
}
