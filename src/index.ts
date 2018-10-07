import { IntegrationError } from "./errors/integration.error";
import { InternalError } from "./errors/internal.error";
import { ValidationError } from "./errors/validation.error";
import { dateUtil, DateUtil } from "./utils/date";
import { accountSavings, AccountSavings } from "./utils/savings.account";
import { Util, utils } from "./utils/util";
import { Validator, validators } from "./validator/validators";

export const ApiInternalError = InternalError;
export type ApiInternalError = InternalError;

export const ApiIntegrationError = IntegrationError;
export type ApiIntegrationError = IntegrationError;

export const ApiValidationError = ValidationError;
export type ApiValidationError = ValidationError;

export const validatorUtil = validators;
export type ValidatorUtil = Validator;

export const sharedUtils = utils;
export type ShareUtil = Util;

export const accountSavingsUtil = accountSavings;
export type AccountSavingsUtil = AccountSavings;

export const sharedDateUtil = dateUtil;
export type SharedDateUtil = DateUtil;
