import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Header';
import Tarjeta  from './Tarjeta'
import Footer from './Footer';

function App() {

  return (
    
      
    <div className="App">
      <Header titulo = "Galeria de imagenes con React"></Header>
      <hr className='hr'/>
    <Tarjeta titulo= "Santo de Bronce" nombre="Shiryu" src= "https://w0.peakpx.com/wallpaper/553/97/HD-wallpaper-dragon-shiryu-dragon-shiryu.jpg"/>
    <Tarjeta titulo= "Santo de Plata" nombre="Cristal" src= "https://i.pinimg.com/originals/c6/68/e6/c668e602d463aeecc808ec1e70b984c2.jpg"/>
    <Tarjeta titulo= "Santo de Oro" nombre="Shaka" src= "https://i.pinimg.com/originals/0f/0c/a8/0f0ca89d6975be7fb4323e949a6a1a3a.jpg"/>

 <Footer texto = "Saint Seiya @2022"/>
      
      
    </div>
  );
}

export default App;
