import { decode, encode } from './base64-arraybuffer';
import {
  formatCredentialRequest as pccr,
  PublicKeyCredentialOptions,
  publicKeyCredentialToJSON as pkcj,
  SerialPublicKeyCredentialOptions,
} from './transformers';

const formatRequest =
    (credentials: SerialPublicKeyCredentialOptions):
      PublicKeyCredentialOptions => (pccr(credentials, decode));
const formatResponse = (pubKeyCred: any) => (pkcj(pubKeyCred, encode));

export {
  formatRequest,
  formatResponse,
};
