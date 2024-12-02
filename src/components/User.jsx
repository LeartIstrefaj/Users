import React from "react";
import { Input } from "@chakra-ui/react"


export const User = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <Input placeholder={props.placeholder} />
        </div>
    )
}