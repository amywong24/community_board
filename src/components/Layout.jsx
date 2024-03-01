import React from "react";
import Card from "./Card";

const Layout = () => {
    return (
        <>
            <div className="container">
                <Card name="Duolingo" link="https://www.duolingo.com" image="./src/assets/Duolingo-logo.png"/>
                <Card name="Drops" link="https://languagedrops.com/" image="./src/assets/drops-language-app-square.jpg"/>
                <Card name="YouTube" link="https://www.youtube.com" image="./src/assets/Youtube-logo.jpg"/>
                <Card name="Coursera" link="https://www.coursera.org" image="./src/assets/2048px-Coursera-Logo_600x600.svg.png" />
                <Card name="Memrise" link="https://www.memrise.com/en-us/" image ="./src/assets/Memrise-new-logo.png"/>
                <Card name="Mango Languages" link="https://mangolanguages.com/" image="./src/assets/Mango.png" />
                <Card name="Lingo Deer" link="https://www.lingodeer.com/" image="./src/assets/lingodeer.png"/>
                <Card name="Hello Talk" link="https://www.hellotalk.com/?lang=en" image="./src/assets/hellotalk.jpg" />
                <Card name="Babbel" link="https://www.babbel.com/" image="./src/assets/babbel.png"/>
                <Card name="Alison" link="https://alison.com/courses/language" image="./src/assets/alison.png"/>
                <Card name="Pimsleur" link="https://www.pimsleur.com/" image="./src/assets/pimsleur.jpg"/>
                <Card name ="Busuu" link="https://www.busuu.com/en-us" image="./src/assets/busuu.png"/>
            </div>
        </>
    );
};

export default Layout;