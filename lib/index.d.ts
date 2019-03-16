import { SerialPublicKeyCredentialRequestOptions, PublicKeyCredentialRequestOptions } from './webauth-helpers';
declare const preFormatCreateCredentialRequest: (credentials: SerialPublicKeyCredentialRequestOptions) => PublicKeyCredentialRequestOptions;
declare const publicKeyCredentialToJSON: (pubKeyCred: any) => any;
export { preFormatCreateCredentialRequest, publicKeyCredentialToJSON };
