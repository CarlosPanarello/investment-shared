export class AccountSavings {

  /**
   * Retorna a database onde deve ser feito um depósito seguinto a legislação brasileira:
   * Dia 1 - deposito feito na database 1
   * Dia 2 - deposito feito na database 2
   * ....
   * Dia 28 - deposito feito na database 28
   * Dia 29 - deposito feito na database 1
   * Dia 30 - deposito feito na database 1
   * Dia 31 - deposito feito na database 1
   * @param date : Data do deposito
   */
  public getDatabaseForDeposit(date: Date): number {
    let day = date.getDate();

    if (day > 28) {
      day = 1;
    }

    return day;
  }
}

export const accountSavings = new AccountSavings();
