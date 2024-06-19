
import { useEffect, useState } from "react";
import App from "./App";
import { createPortal } from "react-dom";
import { FastSpin } from './fastspin/fastspin'

export const Heyyy = ()=>{

    const [d, setD] = useState(false);

    useEffect(()=>{
        setD(true)
        setTimeout(() => {
            setD(false);
        }, 4500);
    }, []);

    const swap = createPortal(<> <App /> </>, document.querySelector('.JKHGtyuiojunyyfdtryUJIUy_PoiuI_POiuyJpo_POI______oiughj'));

    return(<>

        <main>
            {
                d ?
                    <FastSpin />
                    // <h1>loading</h1>
                :
                    swap
            }
        </main>
    </>)
};