/* eslint-disable react/prop-types */
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";


const Home = ({dark, setDark}) => {
    return (
        <div>
            <Banner dark={dark} setDark={setDark}></Banner>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;