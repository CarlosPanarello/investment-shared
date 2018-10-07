import { IApiError } from "./api.error";

export class ValidationError extends Error implements IApiError {

  public static UNSUPPORTED_TYPE: string = "Please provide a 'String', 'Uint8Array' or 'Array'.";
  public readonly statusCode: number;
  constructor(public numberError: number, public message: string, public description?: string, public technicalMessage?: string) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}
export const dadosParaCreditoNaoInformado = new ValidationError(
  4001,
  "Informe os dados para Credito",
  "Não foram informados os dados necessarios para realizar o credito de juros na conta poupanca",
  "O objeto da requisição está vazio.");

export const dadosParaSaqueNaoInformado = new ValidationError(
  4001,
  "Informe os dados para Saque total",
  "Não foram informados os dados necessarios para realizar o saque total na conta poupanca",
  "O objeto da requisição está vazio.");
export const dadosDepositoNaoInformado = new ValidationError(4001, "Informe os dados para deposito",
  "Não foram informados os dados necessarios para realizar o deposito na conta poupanca",
  "O objeto da requisição está vazio.");
// Validacoes de Organizacao codigo comeca com 4010
export const organizacaoNaoInformado = new ValidationError(4010, "Campo identificador da organização não informado",
  "Campo identificador da organização não informado",
  "Campo identificador da organização não informado");
export const organizacaoNaoNumerico = new ValidationError(4011, "Campo identificador da organização deve ser numerico",
  "Campo identificador da organização deve ser numerico",
  "Campo identificador da organização deve ser numerico");

export const agenciaNaoInformada = new ValidationError(4002,
  "Agência não informada.",
  "Agência não informada. Campo é obrigatório.",
  "Campo branch não informado. Campo é obrigatório.");
export const contaNaoInformada = new ValidationError(
  4003,
  "Conta não informada",
  "Conta não informada. Campo é obrigatório.",
  "Conta não informada. Campo é obrigatório",
);

export const dataBaseNaoInformada = new ValidationError(
  4004,
  "Data Base não informada.",
  "Data Base não informada. Campo é obrigatório.",
  "Data Base não informada. Campo é obrigatório.",
);

export const dataBaseInvalida = new ValidationError(4004,
  "Data Base inválida. Informe um número entre 1 e 28. ",
  "Data Base inválida. Informe um número entre 1 e 28. ",
  "Data Base inválida. Informe um número entre 1 e 28. ");

export const organizacaoInvalida = new ValidationError(4012, "Campo identificador da organização deve ser entre 1 e 999999999999",
  "Campo identificador da organização deve ser entre 1 e 999999999999",
  "Campo identificador da organização deve ser entre 1 e 999999999999");
export const organizacaoNaoPossuiConta = new ValidationError(4014, "Organização não possui conta",
  "Organização não possui conta",
  "Organização não possui conta");

// Validacao de Evento de deposito codigo comeca com 4020
export const eventoNaoInformado = new ValidationError(4020, "Informação sobre o evento da transação não informado",
  "Informação sobre o evento da transação não informado",
  "Informação sobre o evento da transação não informado");
export const codigoExternoEventoNaoInformado = new ValidationError(4021, "Informação sobre o codigo externo do evento da transação não informado",
  "Informação sobre o codigo externo do evento da transação não informado",
  "Informação sobre o codigo externo do evento da transação não informado");
export const codigoExternoEventoInvalido = new ValidationError(4022, "Informação sobre o codigo externo do evento da transação invalido",
  "Informação sobre o codigo externo do evento da transação invalido, informe um valor entre 0 e 999",
  "Valor informado fora do intervalo 0 a 999");
export const descricaoEventoNaoInformado = new ValidationError(4023, "Informação sobre a descrição do evento da transação não informado",
  "Informação sobre a descrição do evento da transação não informado",
  "Informação sobre a descrição do evento da transação não informado");
export const descricaoEventoInvalido = new ValidationError(4024, "Informação sobre a descrição do evento invalido",
  "Informação sobre a descrição do evento da transação invalido, ele deve possuir no maximo 140 caracteres",
  "Quantidade maxima de caracteres e de 140");

// Validacoes de valor de Deposito codigo comeca com 4030
export const valorDoDepositoNaoInformado = new ValidationError(4030, "Valor do deposito não informado",
  "Valor do deposito não informado",
  "Valor do deposito não informado");
export const valorDoDepositoDeveSerMaiorQueZero = new ValidationError(4031, "Valor para deposito deve ser maior que zero",
  "Valor para deposito deve ser maior que zero",
  "Valor para deposito deve ser maior que zero");
export const valorDoDepositoInvalido = new ValidationError(4032, "Valor de deposito invalido",
  "O valor do deposito deve ser positivo, maior que zero e menor que 99.999.999.999.999.999,99 e deve possuir apenas 2 casas decimais",
  "Valor para deposito deve numerico");
export const valorDoDepositoForaDoIntervaloValido = new ValidationError(4033, "Valor de deposito invalido",
  "O valor do deposito deve ser positivo, maior que zero e menor que 99.999.999.999.999.999,99 e deve possuir apenas 2 casas decimais",
  "Valor para deposito deve ser maior que zero e menor que 99.999.999.999.999.999,99 e deve ter 2 casas decimais");

// Validacao de Poupanca
export const contaPoupancaNaoPossuiOrganizacao = new ValidationError(4040, "Conta poupança informada não está relacionada a Organização",
  "Conta poupança informada não está relacionada a Organização",
  "Conta poupança informada não está relacionada a Organização");
export const contaPoupancaNaoPossuiContaKernel = new ValidationError(4041, "Conta poupança informada não possui conta kernel",
  "Conta poupança informada não possui conta kernel",
  "Conta poupança informada não possui conta kernel");
export const identificadorContaPoupancaNaoInformado = new ValidationError(4042, "Campo identificador da poupança não infomado",
  "Campo identificador da poupança não infomado",
  "Campo identificador da poupança não infomado");
export const identificadorContaPoupancaInvalido = new ValidationError(4043, "Campo identificador da poupança inválido",
  "Campo identificador da poupança inválido",
  "Campo identificador da poupança inválido");
export const identificadorContaPoupancaTipoIncorreto = new ValidationError(4044, "Campo identificador da poupança inválido",
  "Campo identificador da poupança inválido",
  "Campo identificador da poupança não é do tipo ObjectId do Mongo!");

export const identificadorClienteNaoInformado = new ValidationError(
  4045,
  "Campo identificador da cliente não infomado",
  "Campo identificador da cliente não infomado",
  "Campo identificador da cliente não infomado");
