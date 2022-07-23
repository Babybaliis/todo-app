import React from "react";
import {H1, Input} from "./header-style";
import "../../style.css"


const Header = () => {
    return <header>
        <H1> todos</H1>
        <Input className="new-todo" placeholder="What needs to be done?" autoFocus/>
    </header>;

};

export default Header;