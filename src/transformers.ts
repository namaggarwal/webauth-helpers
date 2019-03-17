interface SerialPublicKeyCredentialUserEntity {
  readonly id: string;
  [propName: string]: any;
}

export interface SerialPublicKeyCredentialOptions {
  readonly challenge: string;
  readonly user ?: SerialPublicKeyCredentialUserEntity;
  readonly allowCredentials ?: SerialAllowedCredential[];
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
  user ?: PublicKeyCredentialUserEntity;
  allowCredentials ?: AllowCredential[];
  [propName: string]: any;
}

/**
 * @param  {any} pubKeyCred
 * @param  {Function} encode
 * @returns any
 */
export function publicKeyCredentialToJSON(pubKeyCred: any, encode: Function): any {
  if (pubKeyCred instanceof Array) {
    const arr = [];
    for (const i of pubKeyCred) {
      arr.push(publicKeyCredentialToJSON(i, encode));
    }
    return arr;
  }
  if (pubKeyCred instanceof ArrayBuffer) {
    return encode(pubKeyCred);
  }
  if (pubKeyCred instanceof Object) {
    const obj: any = {};
    for (const key in pubKeyCred) {
      obj[key] = publicKeyCredentialToJSON(pubKeyCred[key], encode);
    }
    return obj;
  }
  return pubKeyCred;
}
/**
 * @param  {SerialPublicKeyCredentialOptions} credentials
 * @param  {Function} decode
 * @returns PublicKeyCredentialOptions
 */
export function formatCredentialRequest(
     credentials: SerialPublicKeyCredentialOptions,
     decode: Function)
     : PublicKeyCredentialOptions {
  const credentialRequest: PublicKeyCredentialOptions = {
    ...credentials,
    challenge: decode(credentials.challenge),
    user: credentials.user && {
      ...credentials.user,
      id: decode(credentials.user.id),
    },
    allowCredentials: credentials.allowCredentials &&
       credentials.allowCredentials.map(ac => ({ ...ac, id: decode(ac.id) })),
  };

  return credentialRequest;
}
