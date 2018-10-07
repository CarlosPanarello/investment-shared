import { erroFormatoData } from "../errors/internal.error";

export class DateUtil {

  public convertUTCToBrazilianTime(date: Date) {
    return new Date(date.setHours(date.getHours() - 3));
  }

  public convertDateToFormatedString(date: Date) {

    const year = ("0000" + date.getFullYear()).slice(-4);
    const month = ("00" + (date.getMonth() + 1)).slice(-2);
    const day = ("00" + date.getDate()).slice(-2);
    const hour = ("00" + date.getHours()).slice(-2);
    const minutes = ("00" + date.getMinutes()).slice(-2);
    const seconds = ("00" + date.getSeconds()).slice(-2);

    return year + "." + month + "." + day + " " +
      hour + ":" + minutes + ":" + seconds;
  }

  public convertFormatedStringToUTCDate(date: string) {

    // Format: "2018.01.05 18:00:00"

    if (!(date)) {
      throw (erroFormatoData);
    }

    if (date.length !== 19) {
      throw (erroFormatoData);
    }

    const year = parseInt(date.substring(0, 4), 10);
    if (isNaN(year)) {
      throw (erroFormatoData);
    }

    let month = parseInt(date.substring(5, 7), 10);
    if (isNaN(month)) {
      throw (erroFormatoData);
    } else {
      month += -1;
    }

    const day = parseInt(date.substring(8, 10), 10);
    if (isNaN(day)) {
      throw (erroFormatoData);
    }

    const hour = parseInt(date.substring(11, 13), 10);
    if (isNaN(hour)) {
      throw (erroFormatoData);
    }

    const minutes = parseInt(date.substring(14, 16), 10);
    if (isNaN(minutes)) {
      throw (erroFormatoData);
    }

    const seconds = parseInt(date.substring(17, 19), 10);
    if (isNaN(seconds)) {
      throw (erroFormatoData);
    }

    return new Date(new Date(Date.UTC(
      year, month, day, hour, minutes, seconds)));
    }

  }

export const dateUtil = new DateUtil();
