interface SerialPublicKeyCredentialUserEntity {
    readonly id: string;
    [propName: string]: any;
}
export interface SerialPublicKeyCredentialRequestOptions {
    readonly challenge: string;
    readonly user: SerialPublicKeyCredentialUserEntity;
    [propName: string]: any;
}
interface PublicKeyCredentialUserEntity {
    id: ArrayBuffer;
    [propName: string]: any;
}
export interface PublicKeyCredentialRequestOptions {
    challenge: ArrayBuffer;
    user: PublicKeyCredentialUserEntity;
    [propName: string]: any;
}
export declare function publicKeyCredentialToJSON(pubKeyCred: any, encode: Function): any;
export declare function preFormatCreateCredentialRequest(credentials: SerialPublicKeyCredentialRequestOptions, decode: Function): PublicKeyCredentialRequestOptions;
export {};
