import { useState, useEffect } from "react"

import './style.css';

const App = () => {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function apiLoad() {
      const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
        .then(response => response.json())
        .then((json) => {
          // console.log(json);
          setNutri(json);
        })
    }

    apiLoad();

  }, []);


  return (
    <div className="container"> 
      <header> 
        <strong> React Nutri </strong>
      </header>
      {
        nutri.map((item) => {
          return(
            <article className="post">
              <strong className="titulo"> {item.titulo} </strong>
              <img src={item.capa} alt={item.titulo} />
              <p> {item.subtitulo} </p>
              <h1> Categoria {item.categoria} </h1>
              <button className="botao"> acessar </button>
            </article>
          )
        })
      }
    </div>
  )
}

export default App