import Header from "./components/header/Header";
import "./App.css"
import FallingCircles from "./components/FallingCircles/FallingCircles";
import FeatureCards from "./components/FeatureCards/FeatureCards";
import BigText from "./components/BigText/BigText";

function App() {
    return (
        <div className="main">
            <Header/>
            <BigText/>
            <FallingCircles/>
            <FeatureCards/>
        </div>
    );
}

export default App;
