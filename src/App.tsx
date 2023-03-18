import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        ipsa optio similique numquam fugiat omnis nostrum tenetur repudiandae
        laborum eum maxime saepe deserunt reiciendis fuga sit obcaecati, quos
        hic tempora quas corporis provident repellat expedita? Tempora accusamus
        iure blanditiis facere harum omnis minima, eius eligendi sequi expedita
        nemo nam, quidem ducimus tempore culpa? Quaerat vel earum illo
        voluptates, aliquam perferendis? Id eos perferendis iusto labore, vel
        provident accusamus aperiam ad officiis iste aut earum et tempora sunt
        odit ducimus nemo laborum? Nisi, magni quasi? Laboriosam repellendus
        corporis voluptate laborum maiores aspernatur commodi alias, saepe
        labore omnis consequatur doloremque, nam consequuntur?
      </div>
      <Footer />
    </div>
  );
}

export default App;
