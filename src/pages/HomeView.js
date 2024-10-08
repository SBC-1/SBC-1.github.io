import React from 'react';
import Header from '../components/Header';
import Project from '../components/Project';
import Site from '../components/Site';
import Ability from '../components/Ability';
import Intro from '../components/Intro';
import Main from '../components/Main';
import Contact from '../components/Contact';

const HomeView=()=>{
    return(
        <div>
            <Header/>
            <Main>
                <Intro/>
                <Ability/>
                <Site/>
                <Project/>
                <Contact/>
            </Main>
            <Footer/>
        </div>
    )
};

export default HomeView;