import { decode, encode } from './base64-arraybuffer';
import { SerialPublicKeyCredentialRequestOptions, PublicKeyCredentialRequestOptions, preFormatCreateCredentialRequest as pccr, publicKeyCredentialToJSON as pkcj } from './transformers';

const preFormatCreateCredentialRequest =  (credentials: SerialPublicKeyCredentialRequestOptions): PublicKeyCredentialRequestOptions => (pccr(credentials, decode));
const publicKeyCredentialToJSON = (pubKeyCred: any) => (pkcj(pubKeyCred, encode));

export {
  preFormatCreateCredentialRequest,
  publicKeyCredentialToJSON
};
