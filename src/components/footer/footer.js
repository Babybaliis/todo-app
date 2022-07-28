import React from "react";
import {Button, Div, Span, Footers} from "./footer-style";
import {MODE} from "../app/app";


const Footer = ({mode,setMode}) => {


    return (
        <Footers>
            <Span> items left</Span>
            <Div>
                <Button id={1} mode={mode} onClick={() => setMode(MODE[0])}>All</Button>
                <Button id={2} mode={mode} onClick={() => setMode(MODE[1])}> Active</Button>
                <Button id={3} mode={mode} onClick={() => setMode(MODE[2])}>Done</Button>
            </Div>
            <button>
                Clear completed
            </button>
        </Footers>
    )

};

export default Footer;

