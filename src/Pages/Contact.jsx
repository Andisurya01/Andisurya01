import React from "react";
import Navbar from "../AllComponentsHere/Components Home/navbar";
import Footerandi from "../AllComponentsHere/Components Home/Footerandi";
import Sapaan from "../AllComponentsHere/Components Contact/Sapaan";
import ListContact from "../AllComponentsHere/Components Contact/ListContact";

const Contact = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Sapaan></Sapaan>
            <ListContact/>
            <Footerandi></Footerandi>
        </div>
    )

}

export default Contact;
