import "./App.css";
import { Calculator } from "./Calculator.tsx";

function App() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col gap-y-16 w-screen h-screen">
        <h1 className="text-center">Calculadora de la Ley de los Gases Ideales</h1>

        <Calculator />
      </div>

      <footer className="flex flex-col justify-center items-center bg-zinc-950 w-full h-32">
        <span>
          Giuliano Rosso, 2024
        </span>
        <span>
          <a href="https://github.com/GrossoDev/ideal-gas-equation">Repo en Github</a>
        </span>
      </footer>
    </div>
  );
}

export default App;

