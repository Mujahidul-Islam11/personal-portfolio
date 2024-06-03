/* eslint-disable react/prop-types */
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";


const Home = ({dark, setDark}) => {
    return (
        <div>
            <Banner dark={dark} setDark={setDark}></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Home;