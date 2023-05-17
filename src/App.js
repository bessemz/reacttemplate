import Contactform from './components/Contactform';
import './App.css';
import BarNav from './components/BarNav';
import Profil from './profil/profil';
import ProfileImage from './profil/ProfileImage';

function App() {

  const handleName = (name) => {
    alert(`Hello ${name}!`);
  };
  return (
    <div className="App">
    <BarNav/>   
   <Contactform/>

   <Profil fullName="Bessem Zaizaa" bio="Front-end Developer" profession="Developer" handleName={handleName}>
        <ProfileImage src="profil.jpg" alt="Profil Image"  />
  </Profil>

    </div>
  );
}

export default App;
