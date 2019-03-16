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
  readonly allowedCredentials : SerialAllowedCredential[];
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
  allowedCredentials : AllowedCredential[];
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
 * @param  {SerialPublicKeyCredentialRequestOptions} credentials
 * @param  {Function} decode
 * @returns PublicKeyCredentialRequestOptions
 */
export function preFormatCreateCredentialRequest(
     credentials: SerialPublicKeyCredentialRequestOptions,
     decode: Function)
     : PublicKeyCredentialRequestOptions {
  const createCredentialRequest: PublicKeyCredentialRequestOptions = {
    ...credentials,
    challenge: decode(credentials.challenge),
    user: {
      ...credentials.user,
      id: decode(credentials.user.id),
    },
  };

  return createCredentialRequest;
}

/**
 * @param  {SerialPublicKeyCredentialAssertOptions} credentials
 * @param  {Function} decode
 * @returns PublicKeyCredentialAssertOptions
 */
export function preFormatGetAssertionRequest(
    credentials: SerialPublicKeyCredentialAssertOptions
  , decode: Function)
  : PublicKeyCredentialAssertOptions {
  const getAssertionRequest: PublicKeyCredentialAssertOptions = {
    ...credentials,
    challenge: decode(credentials.challenge),
    allowedCredentials: credentials.allowedCredentials.map(ac => ({ ...ac, id: decode(ac.id) })),
  };

  return getAssertionRequest;
}
