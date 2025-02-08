import   './ContentLaout.css';
import Header from "../header/Header";
import FeatureCards from "../FeatureCards/FeatureCards";
import BigText from "../BigText/BigText";
 const  ContentLaout = (props)=>{

return (
    <div className='containerContentLaout'>
        <Header/>
        <BigText text={'Наши возможности'}/>
        <FeatureCards/>
    </div>
)
 }
 export default ContentLaout