import "colors";

import inquirer from "inquirer";

const Preguntas = [
  {
    type: "list",
    name: "Opciones",
    message: "Preguntas".blue,
    choices: [
      {
        value: 1,
        name: `${"1.".green} Estado con mayor acumulado a la fecha`,
      },

      {
        value: 2,
        name: `${"2.".green} Estado con menor acumulado a la fecha`,
      },
      {
        value: 3,
        name: `${
          "3.".green
        } El porcentaje de muertes vs el total de población por estado`,
      },
      {
        value: 4,
        name: `${
          "4.".green
        } Cuál fue el estado más afectado (explicar por qué)`,
      },

      {
        value: 0,
        name: `${"0.".green} Salir`,
      },
    ],
  },
];
const Pause = [
  {
    type: "input",
    name: "Pausa",
    message: `Presione ${"ENTER".red} para continuar`,
  },
];

export const inquirerPausa = async () => {
  const { Pausa } = await inquirer.prompt(Pause);
  return Pausa;
};

export const inquirerMenu = async () => {
  console.clear();
  console.log("=======================".red);
  console.log(" Seleccione una opcion ".white);
  console.log("=======================\n".red);
  const { Opciones } = await inquirer.prompt(Preguntas);
  return Opciones;
};
