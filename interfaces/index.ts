export interface Covid {
  UID: number;
  iso2: string;
  iso3: string;
  code3: number;
  FIPS: number;
  Admin2: string;
  Province_State: string;
  Country_Region: string;
  Lat: number;
  Long_: number;
  Combined_Key: string;
  Population: number;
  Acumulado: number;
}

export interface Estados {
  Province_State: string;
  Population: number;
  Acumulado: number;
  Porcentaje?: number;
}


