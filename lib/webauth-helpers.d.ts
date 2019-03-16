import { PublicKeyCredentialAssertOptions, PublicKeyCredentialRequestOptions, SerialPublicKeyCredentialAssertOptions, SerialPublicKeyCredentialRequestOptions } from './transformers';
declare const preFormatCreateCredentialRequest: (credentials: SerialPublicKeyCredentialRequestOptions) => PublicKeyCredentialRequestOptions;
declare const preFormatGetAssertionRequest: (credentials: SerialPublicKeyCredentialAssertOptions) => PublicKeyCredentialAssertOptions;
declare const publicKeyCredentialToJSON: (pubKeyCred: any) => any;
export { preFormatCreateCredentialRequest, preFormatGetAssertionRequest, publicKeyCredentialToJSON, };
