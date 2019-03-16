import { SerialPublicKeyCredentialRequestOptions, PublicKeyCredentialRequestOptions } from './transformers';
declare const preFormatCreateCredentialRequest: (credentials: SerialPublicKeyCredentialRequestOptions) => PublicKeyCredentialRequestOptions;
declare const publicKeyCredentialToJSON: (pubKeyCred: any) => any;
export { preFormatCreateCredentialRequest, publicKeyCredentialToJSON };
