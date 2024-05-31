import Form from './components/Form'
import membrete from './assets/membrete-ds9.png'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={membrete} alt='membrete' />
        <h1>Formulario de contacto</h1>
        <p>Por favor, ingresa tus datos para ponernos en contacto contigo.</p>
      </header>
      <Form />
      <footer>
        <p>Desarrollado por Sara Victoria Cedeño</p>
        <p className='anio'>© 2024</p>
      </footer>
    </div>
  );
};
export default App;
