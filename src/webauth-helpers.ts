import { decode, encode } from './base64-arraybuffer';
import { preFormatCreateCredentialRequest as pccr,
   preFormatGetAssertionRequest as pgar,
    PublicKeyCredentialAssertOptions,
     PublicKeyCredentialRequestOptions,
      publicKeyCredentialToJSON as pkcj,
       SerialPublicKeyCredentialAssertOptions,
        SerialPublicKeyCredentialRequestOptions } from './transformers';

const preFormatCreateCredentialRequest =
    (credentials: SerialPublicKeyCredentialRequestOptions):
      PublicKeyCredentialRequestOptions => (pccr(credentials, decode));
const preFormatGetAssertionRequest =
   (credentials: SerialPublicKeyCredentialAssertOptions):
    PublicKeyCredentialAssertOptions => (pgar(credentials, decode));
const publicKeyCredentialToJSON = (pubKeyCred: any) => (pkcj(pubKeyCred, encode));

export {
  preFormatCreateCredentialRequest,
  preFormatGetAssertionRequest,
  publicKeyCredentialToJSON,
};
