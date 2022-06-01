import "colors";

import { Covid, Estados } from "../interfaces/index";

export const questionTwo = (state_us: Estados[]) => {
  const acumulado: number[]  = [];

  state_us.forEach((element) => {
    acumulado.push(element.Acumulado);
  });
  const respuesta = state_us.filter(
    (state_us) => state_us.Acumulado === Math.min.apply(null, acumulado) && state_us.Population !== 0 
  );
  return respuesta;
};
