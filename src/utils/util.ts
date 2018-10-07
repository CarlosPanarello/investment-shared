import { validators } from "../validator/validators";

export class Util {
  public invertValue(value: number) {
    const valueInvert = value;
    return (-1 * valueInvert);
  }

  public getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public getRandomString() {
    const max = Math.floor(15);
    return Math.random().toString(36).substring(2, max) + Math.random().toString(36).substring(2, max);
  }

  public diffTimeInSeconds(start: [number, number]) {
    const diff = process.hrtime(start);
    return Math.round((diff[0] * 1e9 + diff[1]) / 1000000);
  }

  public getIndexFromDataBaseDay(dataBaseDay: number) {
    if ( (dataBaseDay >= 29 && dataBaseDay <= 31) || dataBaseDay === 1) {
      return 0;
    }

    return dataBaseDay - 1;
  }
}

export const utils = new Util();
