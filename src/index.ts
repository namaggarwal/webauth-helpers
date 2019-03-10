import { decode, encode } from './base64-arraybuffer';
import { SerialPublicKeyCredentialRequestOptions, PublicKeyCredentialRequestOptions, preFormatCreateCredentialRequest, publicKeyCredentialToJSON } from './webauth-helpers';

const WebAuthHelper = {
  preFormatCreateCredentialRequest: (credentials: SerialPublicKeyCredentialRequestOptions): PublicKeyCredentialRequestOptions => (preFormatCreateCredentialRequest(credentials, decode)),
  publicKeyCredentialToJSON: (pubKeyCred: any) => (publicKeyCredentialToJSON(pubKeyCred, encode)),
}

export { WebAuthHelper };

