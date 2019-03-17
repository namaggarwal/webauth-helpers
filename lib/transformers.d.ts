interface SerialPublicKeyCredentialUserEntity {
    readonly id: string;
    [propName: string]: any;
}
export interface SerialPublicKeyCredentialOptions {
    readonly challenge: string;
    readonly user?: SerialPublicKeyCredentialUserEntity;
    readonly allowedCredentials?: SerialAllowedCredential[];
    [propName: string]: any;
}
interface SerialAllowedCredential {
    readonly type: string;
    readonly id: string;
}
interface AllowedCredential {
    type: string;
    id: ArrayBuffer;
}
interface PublicKeyCredentialUserEntity {
    id: ArrayBuffer;
    [propName: string]: any;
}
export interface PublicKeyCredentialOptions {
    challenge: ArrayBuffer;
    user?: PublicKeyCredentialUserEntity;
    allowedCredentials?: AllowedCredential[];
    [propName: string]: any;
}
export declare function publicKeyCredentialToJSON(pubKeyCred: any, encode: Function): any;
export declare function formatCredentialRequest(credentials: SerialPublicKeyCredentialOptions, decode: Function): PublicKeyCredentialOptions;
export {};
