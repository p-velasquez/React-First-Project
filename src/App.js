import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  }

  const onChangeLineaImg = function (evento) {
    setImagen(evento.target.value);
  }

  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeLineaImg}>
        <option value="Forever-Alone.jpg">Forever Alone</option>
        <option value="sapo.jpg">Sapo</option>
        <option value="brian.jpg">Brian</option>
        <option value="Ancient-Aliens.jpg">Ancient Aliens</option>
      </select> <br />

      <input maxlength="11" onChange={onChangeLinea1} placeholder='Top Text' type="text"/><br />
      <input maxlength="11" onChange={onChangeLinea2} placeholder='Bottom Text' type="text"/><br />
      <div className='meme' id='meme'>
        <span>{linea1}</span><br />
        <img src={"/img/" + imagen}/> <br />
        <span className="text">{linea2}</span><br />
        
      </div>
      <button onClick={onClickExportar}>Exportar</button>
    </div>
  );
}

export default App;
