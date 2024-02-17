/* eslint-disable react/prop-types */
import Banner from "../Banner/Banner";


const Home = ({dark, setDark}) => {
    console.log(dark)
    return (
        <div>
            <Banner dark={dark} setDark={setDark}></Banner>
        </div>
    );
};

export default Home;