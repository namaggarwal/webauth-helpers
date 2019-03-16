
import {
  preFormatCreateCredentialRequest,
  publicKeyCredentialToJSON,
  preFormatGetAssertionRequest,
} from './transformers';
import { expect } from 'chai';
import * as sinon from 'sinon';

describe('webauth-helpers', () => {

  describe('preFormatCreateCredentialRequest', () => {
    // given
    const decode = sinon.stub();
    decode.withArgs('testchallenge').returns(new ArrayBuffer(10));
    decode.withArgs('testuserid').returns(new ArrayBuffer(5));
    // when
    describe('on credential object with challenge and user.id', () => {
      const data = preFormatCreateCredentialRequest(
        {
          challenge: 'testchallenge',
          user: { id: 'testuserid' },
        },
        decode);
      // then
      it('challenge should be correct', () => {
        expect(data.challenge.byteLength).to.equal(10);
      });
      it('user.id  should be correct', () => {
        expect(data.user.id.byteLength).to.equal(5);
      });
    });

  });

  describe('publicKeyCredentialToJSON', () => {
    // given
    const encode = sinon.stub();
    encode.returns('testArrayBuffer');
    // when
    describe('on input having object as arraybuffers', () => {
      const data = publicKeyCredentialToJSON({ some: 'test123', one: new ArrayBuffer(32) }, encode);
      // then
      it('object key with no arraybuffer should be correct', () => {
        expect(data.some).to.equal('test123');
      });
      it('object key with arraybuffer should be correct', () => {
        expect(data.one).to.equal('testArrayBuffer');
      });
    });

    describe('on input having array as arraybuffers', () => {
      const data = publicKeyCredentialToJSON(['test123', new ArrayBuffer(32)], encode);
      // then
      it('no arraybuffer should be correct', () => {
        expect(data[0]).to.equal('test123');
      });
      it('object key with arraybuffer should be correct', () => {
        expect(data[1]).to.equal('testArrayBuffer');
      });
    });

  });

  describe('preFormatCreateCredentialRequest', () => {
    // given
    const decode = sinon.stub();
    decode.withArgs('testchallenge').returns(new ArrayBuffer(10));
    decode.withArgs('testuserid1').returns(new ArrayBuffer(5));
    decode.withArgs('testuserid2').returns(new ArrayBuffer(4));
    // when
    describe('on credential object with challenge and allowedcredentials', () => {
      const data = preFormatGetAssertionRequest(
        {
          challenge: 'testchallenge',
          allowedCredentials: [{ id: 'testuserid1', type: 'public-key' },
          { id: 'testuserid2', type: 'public-key2' }],
        },
        decode);
      // then
      it('challenge should be correct', () => {
        expect(data.challenge.byteLength).to.equal(10);
      });
      it('allowedcredentials1.id  should be correct', () => {
        expect(data.allowedCredentials[0].id.byteLength).to.equal(5);
      });
      it('allowedcredentials1.type should be correct', () => {
        expect(data.allowedCredentials[0].type).to.equal('public-key');
      });
      it('allowedcredentials2.id  should be correct', () => {
        expect(data.allowedCredentials[1].id.byteLength).to.equal(4);
      });
      it('allowedcredentials2.type should be correct', () => {
        expect(data.allowedCredentials[1].type).to.equal('public-key2');
      });
    });

  });

  afterEach(() => {
    // Restore the default sandbox here
    sinon.restore();
  });
});
