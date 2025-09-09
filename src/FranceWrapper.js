
import FirstScreen from "./francePage/screens/FirstScreen"
import SecondScreen from "./francePage/screens/SecondScreen"

import NavBarNew from "./francePage/components/CourseNav/NavBarNew"
import ThirdScreen from "./francePage/screens/ThirdScreen"
import AboutMe from "./francePage/components/me/Me"
import TreatmentsCarousel from "./francePage/components/TreatsMenu/TreatsMenu"
import Recs from "./components/recommends/Recs copy"
import ForthScreen from "./francePage/screens/ForthScreen"
import Place from "./francePage/components/place/Place"
import PrivacyPolicy from "./privacy/Privacy"
import ByMe from "./components/ByMe/ByMe"
const FranceWrapper=()=>{


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
export default FranceWrapper
