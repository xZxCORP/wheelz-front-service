type IVehicle$Issues = {
  exterior: string[];
  mechanical: string[];
  generic: string[];
};

export type IVehicle = {
  constructor: string;
  model: string;
  year: number;
  risks: IVehicle$Issues;
  sinisters: {
    'Year': number;
    'Month': number;
    'Day': number;
    'Weekend?': string;
    'Hour': number;
    'Collision Type': string;
    'Injury Type': string;
    'Primary Factor': string;
    'Reported_Location': string;
    'Latitude': number;
    'Longitude': number;
  }[];
  vin: string;
  issues: IVehicle$Issues;
};
