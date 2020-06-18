interface SerialPublicKeyCredentialUserEntity {
    readonly id: string;
    [propName: string]: any;
}
export interface SerialPublicKeyCredentialOptions {
    readonly challenge: string;
    readonly user?: SerialPublicKeyCredentialUserEntity;
    readonly allowCredentials?: SerialCredential[];
    readonly excludeCredentials?: SerialCredential[];
    [propName: string]: any;
}
interface SerialCredential {
    readonly type: string;
    readonly id: string;
}
interface Credential {
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
    allowCredentials?: Credential[];
    excludeCredentials?: Credential[];
    [propName: string]: any;
}
export declare function publicKeyCredentialToJSON(pubKeyCred: any, encode: Function): any;
export declare function formatCredentialRequest(credentials: SerialPublicKeyCredentialOptions, decode: Function): PublicKeyCredentialOptions;
export {};
