import React from "react";
import Navbar from "../AllComponentsHere/Components Home/navbar";
import Footerandi from "../AllComponentsHere/Components Home/Footerandi";
import PerkenalanSingkat from "../AllComponentsHere/Components About/PerkenalanSingkat"
import PerkenalanPanjang from "../AllComponentsHere/Components About/PerkenalanPanjang";
import HR from "../AllComponentsHere/Components Abstract/GarisHorizontal";
import Serti from "../AllComponentsHere/Components About/Sertifikat";
import Playlist from "../AllComponentsHere/Components About/PLaylist";

const About = () => {
    return(
        <div>
            <Navbar></Navbar>
            <PerkenalanSingkat></PerkenalanSingkat>
            <PerkenalanPanjang></PerkenalanPanjang>
            <HR/>
            <Serti/>
            <Footerandi></Footerandi>
        </div>
    )
}

export default About;
