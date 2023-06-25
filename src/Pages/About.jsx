import React from "react";
import Navbar from "../AllComponentsHere/Components Home/navbar";
import Footerandi from "../AllComponentsHere/Components Home/Footerandi";
import PerkenalanSingkat from "../AllComponentsHere/Components About/PerkenalanSingkat"
import PerkenalanPanjang from "../AllComponentsHere/Components About/PerkenalanPanjang";
import HR from "../AllComponentsHere/Components Abstract/GarisHorizontal";

const About = () => {
    return(
        <div>
            <Navbar></Navbar>
            <PerkenalanSingkat></PerkenalanSingkat>
            <PerkenalanPanjang></PerkenalanPanjang>
            <HR></HR>
            <Footerandi></Footerandi>
        </div>
    )
}

export default About;
