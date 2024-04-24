import "../Styles/container.css";
import "../Styles/times.css";
import "../Styles/index.css";
import "../Styles/centerContainer.css"
import { useState, useEffect } from "react";
import Buttoms from "./Buttoms";

function CenterComponent() {

    const [isRunning, setIsRunning] = useState(false)
    const [run, setRun] = useState(0)
    const [min, setMin] = useState(0)
    const [hr, setHr] = useState(0)

    useEffect(()=>{
        let interval;
        if(isRunning){
            interval = setInterval(()=>{
                setRun(pre=> pre + 1)

                //Definir el tiempo en segundos para pasar a minutos
                if((run + 1) % 61 === 0){
                    setMin(prev => prev + 1)
                    setRun(0)
                }
                if(min === 60){
                    setHr(prev => prev + 1)
                    setMin(0)
                }
            },1000)
        }else{
            clearInterval(interval)
        }
        return ()=>{
            clearInterval(interval)
        }
        
    },[isRunning, run, min])


    const start = ()=>{
        setIsRunning(true)
    }

    const stop = ()=>{
        setIsRunning(false)
    }

    const reset = ()=>{
        setIsRunning(false)
        setRun(0)
        setMin(0)
        setHr(0)
    }
    
    return (
    <>
        <div className="centerContainer">
            <main className="container">
            {/* Time section */}
            <h1>{hr}</h1>
            <h1>{min}</h1>
            <h1>{run}</h1>
            </main>
            <div className="buttom-area">
            {/* Props de botones */}
            <Buttoms start={start} stop={stop} reset={reset} />
            {/* <Buttoms /> */}
            </div>

        </div>
    </>
);
}

export default CenterComponent;
