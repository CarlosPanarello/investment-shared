
import * as mongoose from "mongoose";
import { isNull, isNullOrUndefined, isNumber } from "util";
import { nenhumRegistroEncontrado } from "../errors/api.error";
import * as integration from "../errors/integration.error";
import * as internal from "../errors/internal.error";
import * as validation from "../errors/validation.error";

export class Validator {
  public validRequestForDeposit(input: any) {
    if (isNullOrUndefined(input) || input === "") {
      throw validation.dadosDepositoNaoInformado;
    }
  }
  public validateOrganizationId(input: any) {
    if (input === "" || input === undefined) {
      throw validation.organizacaoNaoInformado;
    }
    if (isNaN(input)) {
      throw validation.organizacaoNaoNumerico;
    }
    if (!Number.isInteger(Number(input))) {
      throw validation.organizacaoNaoNumerico;
    }

    if (input > 999999999999 || input <= 0) {
      throw validation.organizacaoInvalida;
    }
  }

  public validateIdPerson(input: any) {
    if (input === "" || input === undefined || input.trim() === "") {
      throw validation.identificadorClienteNaoInformado;
    }
  }

  public validateSavingsAccountId(input: any) {
    if (input === "" || input === undefined) {
      throw validation.identificadorContaPoupancaNaoInformado;
    }

    if (typeof input !== "string") {
      throw validation.identificadorContaPoupancaInvalido;
    }

    if (!mongoose.Types.ObjectId.isValid(input)) {
      throw validation.identificadorContaPoupancaTipoIncorreto;
    }
  }

  public investmentValue(input: any) {
    if (input === "" || input === undefined) {
      throw validation.valorDoDepositoNaoInformado;
    }

    if (isNaN(input)) {
      throw validation.valorDoDepositoInvalido;
    }

    if (input === 0) {
      throw validation.valorDoDepositoDeveSerMaiorQueZero;
    }

    const regexp = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/g;
    if (!regexp.test(input.toString())) {
      throw validation.valorDoDepositoInvalido;
    }

    if (input < 0 || input > 99999999999999999.99) {
      throw validation.valorDoDepositoForaDoIntervaloValido;
    }
  }

  public transactionEvent(input: any) {
    if (input === "" || input === undefined) {
      throw validation.eventoNaoInformado;
    }

    if (!input.externalCode && input.externalCode !== 0) {
      throw validation.codigoExternoEventoNaoInformado;
    }

    if (
      !Number.isInteger(input.externalCode) ||
      input.externalCode <= 0 ||
      input.externalCode > 999
    ) {
      throw validation.codigoExternoEventoInvalido;
    }

    if (
      input.description === "" ||
      input.description === undefined ||
      input.description.trim() === ""
    ) {
      throw validation.descricaoEventoNaoInformado;
    }

    if (input.description.length > 140) {
      throw validation.descricaoEventoInvalido;
    }
  }
  public savingsAccountBelongToOrganization(
    savingsAccount: any | null,
    organization: any,
  ) {
    if (!organization || !organization.id) {
      throw nenhumRegistroEncontrado;
    }

    if (!savingsAccount || !savingsAccount.idOrganization) {
      throw validation.contaPoupancaNaoPossuiOrganizacao;
    }

    if (savingsAccount.idOrganization !== organization.id) {
      throw internal.contaPoupancaNaoPertenceAOrganizacao;
    }
  }

  public savingsAccountHaveKernelAccount(
    savingsAccount: any,
    database: number,
  ) {
    if (!savingsAccount.databaseKernelAccounts[database - 1]) {
      throw validation.contaPoupancaNaoPossuiContaKernel;
    }
  }

  public organizationAccountHaveKernelAccount(organization: any) {
    if (organization.idAccount === undefined) {
      throw validation.organizacaoNaoPossuiConta;
    }
  }

  public validateBranch(input: any) {
    if (this.isNullOrUndefinedOrEmpty(input)) {
      throw validation.agenciaNaoInformada;
    }
  }
  public validateAccount(input: any) {
    if (this.isNullOrUndefinedOrEmpty(input)) {
      throw validation.contaNaoInformada;
    }
  }

  public validateDataBaseDay(input: any) {
    if (this.isNullOrUndefinedOrEmpty(input)) {
      throw validation.dataBaseNaoInformada;
    }

    if (!Number.isInteger(input)) {
      throw validation.dataBaseInvalida;
    } else {
      if (input < 1 || input > 28) {
        throw validation.dataBaseInvalida;
      }
    }
  }
  private isNullOrUndefinedOrEmpty(input: any) {
    return isNullOrUndefined(input) || input === "";
  }
}

export const validators = new Validator();
