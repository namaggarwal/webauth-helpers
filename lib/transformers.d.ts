interface SerialPublicKeyCredentialUserEntity {
    readonly id: string;
    [propName: string]: any;
}
export interface SerialPublicKeyCredentialOptions {
    readonly challenge: string;
    readonly user?: SerialPublicKeyCredentialUserEntity;
    readonly allowCredentials?: SerialAllowedCredential[];
    [propName: string]: any;
}
interface SerialAllowedCredential {
    readonly type: string;
    readonly id: string;
}
interface AllowCredential {
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
    allowCredentials?: AllowCredential[];
    [propName: string]: any;
}
export declare function publicKeyCredentialToJSON(pubKeyCred: any, encode: Function): any;
export declare function formatCredentialRequest(credentials: SerialPublicKeyCredentialOptions, decode: Function): PublicKeyCredentialOptions;
export {};
