/* eslint-disable react/prop-types */
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = ({dark, setDark}) => {
    return (
        <div id="Home">
            <Banner dark={dark} setDark={setDark}></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;