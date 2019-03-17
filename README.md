# webauth-helpers
Helper Library for WebAuth API

## Use case

### For credentials request

For making a create credentials ( `navigator.credentials.create`) request you need to provide `challenge` and `user.id`, similarily for making assert credentials (`navigator.credentials.get`) request you need to provide `allowCredentials[].id` parameters.

The Credentials API requires these parameters to be `ArrayBuffer`. Ususally, these parameters would be fetched from your backend and would be in Base64URLEncoded format. This helper library provides a simple function `formatRequest` that can convert those Base64URL encoding to array buffers.

### For credentials response

The response from `navigator.credentials.create` and `navigator.credentials.get` contains values which are `ArrayBuffers`. These needs to be encoded to Base64URL so that they can be sent over to server for verification. This library provide a simple function `formatResponse` to convert those ArrayBuffers to Base64Url encoding string which can then be sent over to your backend.


## Usage

Download the library and include in the head

```
 <script type="text/javascript" src="https://github.com/namaggarwal/webauth-helpers/releases/tag/v0.0.7"></script>
```

Use `WebAuthHelpers.formatRequest` function to convert to Array Buffer before making a create credentials request.

For eg

```
// This is from your backend
var publicKeyCredentials = {
  'challenge': "somebase64encodedrandomsamplesdsddssd",

  'rp': {
    'name': 'Naman Aggarwal Corp'
  },

  'user': {
    'id': "somebase64encodeduserid",
    'name': 'alice@example.com',
    'displayName': 'Alice Liddell'
  },

  'pubKeyCredParams': [
    { 'type': 'public-key', 'alg': -7 },
  ]
};

var decodedPublicKeyCredentials = WebAuthHelpers.formatRequest(publicKeyCredentials)

//Pass decoded credentials as public-key object
navigator.credentials.create({ 'publicKey': decodedPublicKeyCredentials })

```

Same goes for `navigator.credentials.get`.

```
// This comes from your backend
var getCredentials = {
  'challenge': "somebase64encodedrandomsampleweewwewweewew",
  'allowCredentials': [
    {
      id:"AENKMg1PXEIGTKu9BpkKQExNoER6BtkqS66hO3bq0sYmFVm15Gq0mJPp4FHqPsnikT1_G4zVAJ_2u3tffXxoGislmwf5y5itQT1U8x75ToY",
      type: 'public-key'
    }
  ],
};

var decodedPublicKeyCredentials = WebAuthHelpers.formatRequest(publicKeyCredentials)

//Pass decoded credentials as public-key object
navigator.credentials.get({ 'publicKey': decodedPublicKeyCredentials })

```

The response returned from both these requests contain the array buffers. This can be converted to base64urlencoded string using `WebAuthHelpers.formatResponse`

For eg.

```
navigator.credentials.create({ 'publicKey': decodedPublicKeyCredentials })
.then(credentials => {
  //encodedCredentials contains only strings and can be send to
  //backend for verification
  var encodedCredentials = WebAuthHelpers.formatResponse(credentials.response);
});
```

The `index.html` in the source provides an example for this.
