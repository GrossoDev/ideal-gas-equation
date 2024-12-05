/**
 * Constante de los gases ideales.
 * En [L⋅Pa / K⋅mol]
 */
export const R = 8_314.462_618_153_24;

/**
 * Obtener la presión del gas.
 * P = nRT/V
 */
export const getPressure = (n: number, T: number, V: number): number => {
  return n * R * T / V;
};

/**
 * Obtener el volumen del gas.
 * V = nRT/P
 */
export const getVolume = (n: number, T: number, P: number): number => {
  return n * R * T / P;
};

/**
 * Obtener la temperatura del gas.
 * T = PV/(nR)
 */
export const getTemperature = (n: number, P: number, V: number): number => {
  return (P * V) / (n * R);
};

/**
 * Obtener la cantidad de moles del gas.
 * n = PV/(RT)
 */
export const getMoles = (T: number, P: number, V: number): number => {
  return (P * V) / (R * T);
};
