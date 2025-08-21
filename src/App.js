import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/CourseNav/NavBarNew';
import FirstScreen from './screens/FirstScreen';
import TreatmentsCarousel from './components/TreatsMenu/TreatsMenu';
import AboutMe from './components/me/Me';
import ThirdScreen from './screens/ThirdScreen';
import SecondScreen from './screens/SecondScreen';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';
import PrivacyPolicy from './privacy/Privacy';

function App() {
  return <>
  <NavBarNew/>

        <FirstScreen/>
        <SecondScreen/>
        <AboutMe/>
        <ThirdScreen/>
        <TreatmentsCarousel/>
        <ForthScreen/>
        <PrivacyPolicy 
  ownerName="אוקסנה בראל" 
  email="Okjamesblond@gmail.com" 
  phone="+972 54-494-8282" 
  domain="https://oksanabarel.co.il/" 
/>
        <ByMe/>
  </>
}

export default App;
