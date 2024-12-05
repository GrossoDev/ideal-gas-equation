// @deno-types="@types/react"
import { useState } from "react";
import { DebounceInput } from 'react-debounce-input';
import { toNormalizedUnits, fromNormalizedUnits } from "./conversions.tsx";
import { getPressure, getVolume, getTemperature, getMoles } from "./solutions.tsx";

export function Calculator() {
  const [toCalculate, setToCalculate] = useState("n");
  const [unitP, setUnitP] = useState("pascal");
  const [unitV, setUnitV] = useState("liter");
  const [unitT, setUnitT] = useState("kelvin");

  const [rawP, setRawP] = useState(1);
  const [rawV, setRawV] = useState(1);
  const [rawT, setRawT] = useState(273);
  const [rawn, setRawn] = useState(1);

  const normalized = { ...toNormalizedUnits(rawP, rawV, rawT, unitP, unitV, unitT), n: rawn };

  switch (toCalculate) {
    case "P":
      normalized.P = getPressure(normalized.n, normalized.T, normalized.V);
      break;
    case "V":
      normalized.V = getVolume(normalized.n, normalized.T, normalized.P);
      break;
    case "T":
      normalized.T = getTemperature(normalized.n, normalized.P, normalized.V);
      break;
    case "n":
      normalized.n = getMoles(normalized.T, normalized.P, normalized.V);
      break;
  }

  const { P, V, T, n } = { ...fromNormalizedUnits(normalized.P, normalized.V, normalized.T, unitP, unitV, unitT), n: normalized.n };

  return (
    <form className="flex flex-col gap-2 max-w-fit">
      <div className="flex gap-2">
        <DebounceInput type="number" id="P" className="border rounded" disabled={toCalculate == "P"} value={P} onChange={e => setRawP(Number(e.target.value))} />
        <select name="unitP" id="unitP" className="border rounded p-2 flex-grow" value={unitP} onChange={e => setUnitP(e.target.value)}>
          <option value="pascal">Pascales [Pa]</option>
          <option value="hpascal">Hectopascales [hPa]</option>
          <option value="bar">Bares [bar]</option>
          <option value="atm">Atmósferas [atm]</option>
          <option value="psi">Libras por pulgada cuadrada [PSI]</option>
          <option value="mmHG">Milímetros de mercurio [mmHg]</option>
        </select>
      </div>

      <div className="flex gap-2">
        <DebounceInput type="number" id="V" className="border rounded" disabled={toCalculate == "V"} value={V} onChange={e => setRawV(Number(e.target.value))} />
        <select name="unitV" id="unitV" className="border rounded p-2 flex-grow" value={unitV} onChange={e => setUnitV(e.target.value)}>
          <option value="liter">Litros [L]</option>
          <option value="m3">Metros cúbicos [m&sup3;]</option>
        </select>
      </div>
      
      <div className="flex gap-2">
        <DebounceInput type="number" id="T" className="border rounded" disabled={toCalculate == "T"} value={T} onChange={e => setRawT(Number(e.target.value))} />
        <select name="unitT" id="unitT" className="border rounded p-2 flex-grow" value={unitT} onChange={e => setUnitT(e.target.value)}>
          <option value="celsius">Celsius [°C]</option>
          <option value="fahrenheit">Fahrenheit [°F]</option>
          <option value="kelvin">Kelvin [K]</option>
        </select>
      </div>

      <div className="flex gap-2">
        <DebounceInput type="number" id="n" className="border rounded" disabled={toCalculate == "n"} value={n} onChange={e => setRawn(Number(e.target.value))} />
        <select name="unitn" id="unitn" className="border rounded p-2 flex-grow" disabled={true}>
          <option value="moles">Moles [mol]</option>
        </select>
      </div>

      <div className="flex justify-center gap-2">
        <span className="p-2">Calcular:</span>
        <select name="unitn" id="unitn" className="border rounded p-2 flex-grow" value={toCalculate} onChange={e => setToCalculate(e.target.value)}>
          <option value="P">Presión</option>
          <option value="V">Volumen</option>
          <option value="T">Temperatura</option>
          <option value="n">Número de moles</option>
        </select>
      </div>
    </form>
  );
}
