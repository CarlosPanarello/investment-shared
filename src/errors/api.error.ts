export interface IApiError {
  numberError: number;
  message: string;
  description?: string;
  technicalMessage?: string;
  readonly statusCode: number;
}

/**
 * @swagger
 *
 * definitions:
 *   Error:
 *     type: object
 *     properties:
 *       code:
 *         type: integer
 *       description:
 *         type: string
 *       message:
 *         type: string
 *       technicalMessage:
 *         type: string
 *     example:
 *       code: 5
 *       description: "Descrição simples"
 *       message: "Mensagem mais detalhada"
 *       technicalMessage: "Mensagem Tecnica"
 */
export class NotFoundError extends Error implements IApiError {
  public static UNSUPPORTED_TYPE: string = "Please provide a 'String', 'Uint8Array' or 'Array'.";
  public statusCode: number;
  constructor(public numberError: number, public message: string, public description?: string, public technicalMessage?: string) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}
// Erro generico para quando nao encontrar nenhum registro
export const nenhumRegistroEncontrado = new NotFoundError(4000, "Não foi encontrado nehum registro",
  "Não foi encontrado nehum registro",
  "Não foi encontrado nehum registro");
