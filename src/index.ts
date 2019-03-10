import { decode, encode } from './base64-arraybuffer';

const WebAuthHelper = {
  preFormatCreateCredentialRequest: (credentials: SerialPublicKeyCredentialRequestOptions) => (preFormatCreateCredentialRequest(credentials, decode)),
  publicKeyCredentialToJSON: (pubKeyCred: any) => (publicKeyCredentialToJSON(pubKeyCred, encode)),
}

export { WebAuthHelper };

