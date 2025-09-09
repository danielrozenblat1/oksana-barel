
import FirstScreen from "./screens/FirstScreen"
import SecondScreen from "./screens/SecondScreen"

import NavBarNew from "./components/CourseNav/NavBarNew"
import ThirdScreen from "./screens/ThirdScreen"
import AboutMe from "./components/me/Me"
import TreatmentsCarousel from "./components/TreatsMenu/TreatsMenu"
import Recs from "./components/recommends/Recs"
import ForthScreen from "./screens/ForthScreen"
import Place from "./components/place/Place"
import PrivacyPolicy from "./privacy/Privacy"
import ByMe from "./components/ByMe/ByMe"
const HebrewWrapper=()=>{


    return <>
  <NavBarNew/>

        <FirstScreen/>
        <SecondScreen/>
        <AboutMe/>
        <ThirdScreen/>
        <TreatmentsCarousel/>
        <Recs/>
        <ForthScreen/>
        <Place/>
        <PrivacyPolicy 
  ownerName="אוקסנה בראל" 
  email="Okjamesblond@gmail.com" 
  phone="+972 54-494-8282" 
  domain="https://oksanabarel.co.il/" 
/>
        <ByMe/>
    </>
}
export default HebrewWrapper
