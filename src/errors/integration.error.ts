import { IApiError } from "./api.error";

export class IntegrationError extends Error implements IApiError {

  public readonly statusCode: number;
  constructor(public numberError: number, public message: string, public description?: string, public technicalMessage?: string) {
    super(message);
    this.name = "IntegrationError";
    this.statusCode = 500;
  }
}

export const erroKernelGetAccount = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Não foi possivel relizar o getAccount do Kernel";
  }
  return new IntegrationError(5001, "Erro ao recuperar a conta",
    "Não foi possivel obter os dados da conta, favor tentar novamente daqui a alguns minutos",
    tecnicalMessage);
};
export const erroKernelPostTransaction = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Não foi possivel relizar o post da transcao no Kernel";
  }
  return new IntegrationError(5002, "Erro ao realizar transação na conta",
    "Erro ao realizar a transação na conta, favor tentar novamente daqui a alguns minutos",
    tecnicalMessage);
};

export const erroIncomeAPIPostTransaction = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Não foi possivel fazer o calculo dos juros para a transação.";
  }
  return new IntegrationError(5002, "Não foi possivel fazer o calculo dos juros para a transação.",
    "Não foi possivel fazer o calculo dos juros para a transação.",
    tecnicalMessage);
};

export const erroKernelPostAccount = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Não foi possivel relizar o post da account no Kernel";
  }
  return new IntegrationError(5003, "Erro ao realizar um deposito na conta",
    "Erro ao realizar o deposito na conta, favor tentar novamente daqui a alguns minutos",
    tecnicalMessage);
};
export const erroKernelDeposit = new IntegrationError(5004, "Ocorreu erro ao tentar efetuar o depósito",
  "Ocorreu erro ao tentar efetuar o depósito",
  "ErroKernelDeposit");

export const erroContaKernelNaoEncontrada = new IntegrationError(5005, "Inconsistência no cadastro. Saldo não encontrado! ",
  "Erro interno na busca pelo saldo.",
  "A conta Kernel presente no modelo SavingsAccount não foi encontrada!");
export const erroAoAtualizarContaPoupancaComContaKernel = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Erro ao atualizar o número da conta Kernel na coleção SavingsAccount. Conta não foi encontrada.";
  }

  return new IntegrationError(5006, "Erro ao realizar o deposito",
    "Ocorreu um erro ao fazer a atualização da conta para atualizar o deposito",
    tecnicalMessage);
};

export const erroDepositoNaoRetornouResultado = new IntegrationError(5200, "O deposito não foi executado corretamente",
  "Não houve retorno no deposito",
  "A funcao de deposito retornou um objeto vazio");

export const erroSaldoNaoRetornouResultado = new IntegrationError(5201, "Consulta ao saldo não foi executada corretamente",
  "Não houve retorno no saldo",
  "A funcao de saldo retornou um objeto vazio");

export const erroSaldoNaoExiste = new IntegrationError(5202, "Não foi possível recuperar o saldo para a conta poupança informada",
  "Não foi possível recuperar o saldo para a conta poupança informada.",
  "Possível inconsistência na base de dados ");

export const erroResgateTotalNaoRetornouResultado = new IntegrationError(5203, "O resgate não foi executado corretamente",
  "Não houve retorno no resgate",
  "A funcao de resgate retornou um objeto vazio");

export const erroResgateParciallNaoRetornouResultado = new IntegrationError(5204, "O resgate parcial não foi executado corretamente",
  "Não houve retorno no resgate parcial",
  "A funcao de resgate parcial retornou um objeto vazio");
