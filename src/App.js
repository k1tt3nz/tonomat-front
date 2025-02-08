import Header from "./components/header/Header";
import "./App.css"
import FallingCircles from "./components/FallingCircles/FallingCircles";
import FeatureCards from "./components/FeatureCards/FeatureCards";
import BigText from "./components/BigText/BigText";
import ContentLaout from "./components/ContentLayout/ContentLaout";

function App() {
    return (
        <div className="main">
            <FallingCircles/>
            <ContentLaout/>
        </div>
    );
}

export default App;
