import csv from "csvtojson";
import { Covid, Estados } from "../interfaces/index";

export const readCSV = async () => {
  const csvFilePath = "time_series_covid19_deaths_US.csv";

  const jsonArray = await csv().fromFile(csvFilePath);

  const datos: Covid[] = [];

  const estados: string[] = [];

  jsonArray.forEach((element) => {
    datos.push({
      UID: element["UID"],
      iso2: element["iso2"],
      iso3: element["iso3"],
      code3: element["code3"],
      FIPS: element["FIPS"],
      Admin2: element["Admin2"],
      Province_State: element["Province_State"],
      Country_Region: element["Country_Region"],
      Lat: element["Lat"],
      Long_: element["Long_"],
      Combined_Key: element["Combined_Key"],
      Population: element["Population"],
      Acumulado: element["4/27/21"],
    });
    if (!estados.includes(element["Province_State"])) {
      estados.push(element["Province_State"]);
    }
  });

  const state_us: Estados[] = [];
  estados.forEach((state) => {
    let population = 0;
    let acum = 0;
    const datos_states = datos.filter(
      (datos) => datos.Province_State === state
    );
    datos_states.forEach((element) => {
      acum += Number(element.Acumulado);
      population += Number(element.Population);
    });
    state_us.push({
      Province_State: state,
      Population: population,
      Acumulado: acum,
    });
  });
  return { datos, estados, state_us };
};
