import { PublicKeyCredentialOptions, SerialPublicKeyCredentialOptions } from './transformers';
declare const formatRequest: (credentials: SerialPublicKeyCredentialOptions) => PublicKeyCredentialOptions;
declare const formatResponse: (pubKeyCred: any) => any;
export { formatRequest, formatResponse, };
