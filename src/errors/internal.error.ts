import errors = require("restify-errors");
import { IApiError } from "./api.error";

// TODO criar uma interface para os erro e entao usar implementacaoes diferentes para diferentes linguas
export class InternalError extends errors.InternalError implements IApiError {
  public readonly statusCode: number;
  constructor(public numberError: number, public message: string, public description: string, public technicalMessage: string) {
    super(message);
    this.name = "InternalError";
    this.statusCode = 500;
  }
}
export const contaPoupancaNaoPertenceAOrganizacao = new InternalError(9012, "Conta informada não é da organização informada",
  "A conta informada não pertence a organização informada. Verifique os dados.",
  "Conta informada não encontrada na base da organização informada");
export const contaPoupancaNaoEncontrada = new InternalError(9013, "Conta poupança informada não existe",
  "A conta poupança informada não existe. Verifique se foi informado o codigo correto.",
  "Conta poupança não encontrada na base de dados ");
export const consultaPoupancaNoBanco = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Não foi possivel relizar a consulta da poupança no banco";
  }
  return new InternalError(9014, "Erro ao consultar a poupança",
    "Erro ao consultar a poupança, favor tentar novamente daqui a alguns minutos",
    tecnicalMessage);
};
export const vincularPoupancaComContaKernelParaDeposito = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Não foi possivel relizar a associação entre poupanca e o kernel";
  }
  return new InternalError(9201, "Erro ao realizar o deposito",
    "Erro ao realizar o deposito na poupança, favor tentar novamente daqui a alguns minutos",
    tecnicalMessage);
};
export const erroRealizarAcaoDeDeposito = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Não foi possivel relizar a operação de deposito";
  }
  return new InternalError(9301, "Erro ao realizar o deposito",
    "Erro ao realizar o deposito na poupança, favor tentar novamente daqui a alguns minutos",
    tecnicalMessage);
};

export const erroRealizarAcaoAtualizacaoJuros = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Não foi possivel relizar a operação de atualização de previsão de juros";
  }
  return new InternalError(9302, "Não foi possivel relizar a operação de atualização de previsão de juros",
    "Não foi possivel relizar a operação de atualização de previsão de juros",
    tecnicalMessage);
};

export const naoFoiPossivelAtualizarAContaTipoIncorreto = new InternalError(9401, "Erro ao fazer a atualização da conta.",
  "Ocorreu um erro ao fazer a atualização da conta",
  "Id da conta poupanca invalido, não é do tipo ObjectId.");

export const naoFoiPossivelAtualizarAContaIdKernelNaoInfo = new InternalError(9402, "Erro ao fazer a atualização da conta.",
  "Ocorreu um erro ao fazer a atualização da conta",
  "Id da conta Kernel não informada.");

export const databaseComSaldoNegativo = new InternalError(9403, "Database com saldo inferior a zero.",
  "Operação não pode ser realizada porque foi encontrada uma data base com saldo inferior a zero",
  "Operação não pode ser realizada porque foi encontrada uma data base com saldo inferior a zero.");

export const contaPoupancaJahZerada = new InternalError(9402, "Conta poupança com saldo zerado. Não é possível resgate.",
  "Conta poupança com saldo zerado. Não é possível resgate.",
  "Conta poupança com saldo zerado. Não é possível resgate.");

export const erroAoRealizarAConsultaDoSaldo = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Erro ao receber os dados do kernel sobre o saldo";
  }
  return new InternalError(9500, "Erro ao consultar o saldo",
    "Erro na busca das informações sobre o saldo, favor tentar novamente daqui a alguns minutos",
    tecnicalMessage);
};

export const erroAoConsultarContasAtivas = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Erro ao consultar contas ativas.";
  }
  return new InternalError(9510, "Erro ao consultar contas ativas",
    "Erro na busca das contas ativas, favor tentar novamente daqui a alguns minutos",
    tecnicalMessage);
};

export const erroFormatoData = new InternalError(9402,
  "Erro ao processar transação.",
  "Ocorreu um erro interno ao processar a transação",
  "Formato da data invalido.");

export const saldoMenorResgate = new InternalError(9404, "Conta não possui saldo suficiente para o valor a ser resgatado.",
  "Valor do resgate maior que o valor atual na conta.",
  "Valor do resgate maior que o valor atual na conta.");
