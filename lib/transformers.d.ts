interface SerialPublicKeyCredentialUserEntity {
    readonly id: string;
    [propName: string]: any;
}
export interface SerialPublicKeyCredentialRequestOptions {
    readonly challenge: string;
    readonly user: SerialPublicKeyCredentialUserEntity;
    [propName: string]: any;
}
export interface SerialPublicKeyCredentialAssertOptions {
    readonly challenge: string;
    readonly allowedCredentials: SerialAllowedCredential[];
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
export interface PublicKeyCredentialRequestOptions {
    challenge: ArrayBuffer;
    user: PublicKeyCredentialUserEntity;
    [propName: string]: any;
}
export interface PublicKeyCredentialAssertOptions {
    challenge: ArrayBuffer;
    allowedCredentials: AllowedCredential[];
    [propName: string]: any;
}
export declare function publicKeyCredentialToJSON(pubKeyCred: any, encode: Function): any;
export declare function preFormatCreateCredentialRequest(credentials: SerialPublicKeyCredentialRequestOptions, decode: Function): PublicKeyCredentialRequestOptions;
export declare function preFormatGetAssertionRequest(credentials: SerialPublicKeyCredentialAssertOptions, decode: Function): PublicKeyCredentialAssertOptions;
export {};
