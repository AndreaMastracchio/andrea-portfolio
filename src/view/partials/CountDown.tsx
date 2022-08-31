/* Core */
import React from "react";
import Countdown, {zeroPad} from "react-countdown";

const CountDown = () => {

    // @ts-ignore
    const renderer = ({days, hours, minutes, seconds}) => (
        <span>
            {zeroPad(days)}d {zeroPad(hours)}h {zeroPad(minutes)}m {zeroPad(seconds)}s
        </span>
    );

    return (
        <div className="text-white">
            <Countdown renderer={renderer}
                       className="text-white text-xl countdown"
                       date={'2022-12-01T01:02:03'}/>
        </div>
    )
}

export default CountDown