import "colors";
import { inquirerMenu, inquirerPausa } from "./helpers/inquirer";
import { questionOne } from "./helpers/questionOne";
import { readCSV } from "./helpers/readCsv";
import { questionTwo } from "./helpers/questionTwo";
import { questionThree } from "./helpers/questionThree";

const main = async () => {
  const { datos, estados, state_us } = await readCSV();
  let opt: Number;
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const respuesta_one = questionOne(state_us);
        console.log(
          `El estado con mayor acumulado es : ${respuesta_one[0].Province_State}`
        );
        console.log(`Con una poblacion de : ${respuesta_one[0].Population}`);
        console.log(`Con un acumulado de : ${respuesta_one[0].Acumulado}`);
        break;
      case 2:
        const respuesta_two = questionTwo(state_us);
        console.log(
          `El estado con menor acumulado es : ${respuesta_two[0].Province_State}`
        );
        console.log(`Con una poblacion de : ${respuesta_two[0].Population}`);
        console.log(`Con un acumulado de : ${respuesta_two[0].Acumulado}`);
        break;
      case 3:
        const respuesta_three = questionThree(state_us);
        respuesta_three.forEach((element) => {
          console.log(`${element.Province_State.red} : ${element.Porcentaje}%`);
        });
        break;
      case 4:
        const respuesta_four = questionOne(state_us);
        console.log(
          `El estado más afectado fue : ${respuesta_four[0].Province_State.red} Esto porque fue el estado con mayor numero de muertes (${respuesta_four[0].Acumulado}) hasta la fecha respectiva`
        );
        break;

      default:
        break;
    }
    await inquirerPausa();
  } while (opt !== 0);
};

main();
