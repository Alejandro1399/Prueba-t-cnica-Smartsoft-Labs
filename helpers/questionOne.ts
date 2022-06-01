import { Covid, Estados } from '../interfaces/index';

export const questionOne = (state_us :Estados[]) => {
    const acumulado: number[] = [];

    state_us.forEach((element) => {
      acumulado.push(element.Acumulado);
    });
    const respuesta = state_us.filter(
      (state_us) => state_us.Acumulado === Math.max.apply(null, acumulado)
    );
    return respuesta;
};
