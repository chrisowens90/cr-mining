import React from "react";
import { Grow } from '@material-ui/core';


function AnimationWrapper({ children }) {

    if (!children) return null;

    return (
        <Grow in={true} mountOnEnter unmountOnExit>
            {children}
        </Grow>
    )
}

export default AnimationWrapper;