import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Card from './components/Card';
import CoreFeature from './components/CoreFeature';
import Course from './components/Course';
import Function from './components/Function';
import Price from './components/Price';
import Question from './components/Question';
import LearnNew from './components/LearnNew';
import Footer from './components/Footer';
import FreeTutorial from './components/FreeTutorial';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <NavBar />
        <Home />
        <Card />
        <CoreFeature />
        <Course />
        <Function />
        <Price />
        <FreeTutorial />
        <Question />
        <LearnNew />
        <Footer />
      </SkeletonTheme>
    </>
  );
}

export default App;
