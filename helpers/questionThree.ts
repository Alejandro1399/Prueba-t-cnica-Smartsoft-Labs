import { Covid, Estados } from "../interfaces/index";

export const questionThree = (state_us: Estados[]) => {
  const porcentaje: Estados[] = [];
  state_us.forEach((element) => {
    if (element.Acumulado !== 0 && element.Population !== 0) {
      const porcent: number = (element.Acumulado / element.Population) * 100;
      porcentaje.push({
        Province_State: element.Province_State,
        Population: element.Population,
        Acumulado: element.Acumulado,
        Porcentaje: Number(porcent.toFixed(4)),
      });
    }
  });
  return porcentaje;
};
