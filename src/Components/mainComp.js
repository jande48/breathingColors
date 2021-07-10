import React, { useState, useEffect} from "react";
import '../App.css';

import { useSpring, useSprings, animated } from 'react-spring'
function MainComp(props) {
    const copyArray = props.propsArray
    const copyArray2 = props.propsArray
    const copyArray3 = copyArray.concat(copyArray2)
    //console.log(copyArray3)
    const [styles, seStyles] = useSpring({
        loop: true,
        to: props.propsArray,
        from: { opacity: 0,  config: { duration: 100 }, width: '100%', height: '92%', margin: '0px', padding: '0px',  borderRadius: '15px', backgroundColor: '#262626' },
      })

    return (

        <animated.div style={styles}></animated.div>
        
            

    )

}
export default MainComp