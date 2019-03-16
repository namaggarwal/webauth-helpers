interface SerialPublicKeyCredentialUserEntity {
  readonly id: string
  [propName: string]: any;
}

export interface SerialPublicKeyCredentialRequestOptions {
  readonly challenge: string
  readonly user: SerialPublicKeyCredentialUserEntity
  [propName: string]: any;
}

interface PublicKeyCredentialUserEntity {
  id: ArrayBuffer
  [propName: string]: any;
}

export interface PublicKeyCredentialRequestOptions {
  challenge: ArrayBuffer
  user: PublicKeyCredentialUserEntity
  [propName: string]: any;
}

/**
 * @param  {any} pubKeyCred
 * @param  {Function} encode
 * @returns any
 */
export function publicKeyCredentialToJSON(pubKeyCred: any, encode: Function): any {
  if (pubKeyCred instanceof Array) {
    let arr = [];
    for (let i of pubKeyCred)
      arr.push(publicKeyCredentialToJSON(i, encode));
    return arr;
  }
  if (pubKeyCred instanceof ArrayBuffer) {
    return encode(pubKeyCred);
  }
  if (pubKeyCred instanceof Object) {
    let obj: any = {};
    for (let key in pubKeyCred) {
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
export function preFormatCreateCredentialRequest(credentials: SerialPublicKeyCredentialRequestOptions, decode: Function): PublicKeyCredentialRequestOptions {
  const createCredentialRequest: PublicKeyCredentialRequestOptions = {
    ...credentials,
    challenge: decode(credentials.challenge),
    user: {
      ...credentials.user,
      id: decode(credentials.user.id),
    },
  };

  return createCredentialRequest
}

