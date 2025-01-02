import type { CreateVehicleTransactionData } from '@zcorp/shared-typing-wheelz';
import type { BasicResponse } from '@zcorp/wheelz-contracts';

export const MODAL_IDS = {
  REGISTER: 'register',
  LOGIN: 'login',
  FORCE_CREATE_TRANSACTION: 'force-create-transaction',
} as const;

export type ForceCreateTransactionProps = {
  transactionData: CreateVehicleTransactionData;
  response: BasicResponse;
};
