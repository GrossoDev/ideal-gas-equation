export const toNormalizedUnits = (P: number, V: number, T: number, unitP: string, unitV: string, unitT: string) => {
  switch(unitP) {
    case "hpascal":
      P = convertPressure.toPa.hPa(P);
      break;
    case "bar":
      P = convertPressure.toPa.bar(P);
      break;
    case "atm":
      P = convertPressure.toPa.atm(P);
      break;
    case "psi":
      P = convertPressure.toPa.psi(P);
      break;
    case "mmHG":
      P = convertPressure.toPa.mmHg(P);
      break;
  }

  switch(unitV) {
    case "m3":
      V = convertVolume.toLiters.m3(V);
      break;
  }

  switch(unitT) {
    case "celsius":
      T = convertTemperature.toKelvin.celsius(T);
      break;
    case "fahrenheit":
      T = convertTemperature.toKelvin.fahrenheit(T);
      break;
  }

  return { P, V, T };
}

export const fromNormalizedUnits = (P: number, V: number, T: number, unitP: string, unitV: string, unitT: string) => {
  switch(unitP) {
    case "hpascal":
      P = convertPressure.fromPa.hPa(P);
      break;
    case "bar":
      P = convertPressure.fromPa.bar(P);
      break;
    case "atm":
      P = convertPressure.fromPa.atm(P);
      break;
    case "psi":
      P = convertPressure.fromPa.psi(P);
      break;
    case "mmHG":
      P = convertPressure.fromPa.mmHg(P);
      break;
  }

  switch(unitV) {
    case "m3":
      V = convertVolume.fromLiters.m3(V);
      break;
  }

  switch(unitT) {
    case "celsius":
      T = convertTemperature.fromKelvin.celsius(T);
      break;
    case "fahrenheit":
      T = convertTemperature.fromKelvin.fahrenheit(T);
      break;
  }

  return { P, V, T };
}

/**
 * Convertir unidades de presión.
 */
export const convertPressure = {
  /** De unidades específicas a Pascales */
  toPa: {
    hPa: (value: number) => value * 100,
    bar: (value: number) => value * 1e5,
    atm: (value: number) => value * 101325,
    psi: (value: number) => value * 6894.76,
    mmHg: (value: number) => value * 133.322,
  },
  /** De Pascales a unidades específicas */
  fromPa: {
    hPa: (value: number) => value / 100,
    bar: (value: number) => value / 1e5,
    atm: (value: number) => value / 101325,
    psi: (value: number) => value / 6894.76,
    mmHg: (value: number) => value / 133.322,
  },
};

/**
 * Convertir unidades de volumen.
 */
export const convertVolume = {
  /** De unidades específicas a Litros */
  toLiters: {
    m3: (value: number) => value * 1000,
  },
  /** De Litros a unidades específicas */
  fromLiters: {
    m3: (value: number) => value / 1000,
  },
};

/**
 * Convertir unidades de temperatura.
 */
export const convertTemperature = {
  /** De unidades específicas a Kelvin */
  toKelvin: {
    celsius: (value: number) => value + 273.15,
    fahrenheit: (value: number) => (value - 32) * (5 / 9) + 273.15,
  },
  /** De Kelvin a unidades específicas */
  fromKelvin: {
    celsius: (value: number) => value - 273.15,
    fahrenheit: (value: number) => (value - 273.15) * (9 / 5) + 32,
  },
};
