
import {preFormatCreateCredentialRequest, publicKeyCredentialToJSON} from './transformers';
import {expect} from 'chai';
import * as sinon from 'sinon';

describe('webauth-helpers', function() {
  describe('preFormatCreateCredentialRequest', () => {
    //given
    const decode = sinon.stub();
    decode.withArgs("testchallenge").returns(new ArrayBuffer(10))
    decode.withArgs("testuserid").returns(new ArrayBuffer(5))
      //when
    describe('on credential object with challenge and user.id', function(){
      const data = preFormatCreateCredentialRequest({challenge: "testchallenge", user: {id: "testuserid"}}, decode)
      //then
      it('challenge should be correct', () => {
        expect(data.challenge.byteLength).to.equal(10);
      })
      it('user.id  should be correct', () => {
        expect(data.user.id.byteLength).to.equal(5);
      });
    });

  });

  describe('publicKeyCredentialToJSON', () => {
    //given
    const encode = sinon.stub();
    encode.returns('testArrayBuffer')
      //when
    describe('on input having object as arraybuffers', function(){
      const data = publicKeyCredentialToJSON({some: 'test123', one: new ArrayBuffer(32) }, encode)
      //then
      it('object key with no arraybuffer should be correct', () => {
        expect(data.some).to.equal('test123');
      })
      it('object key with arraybuffer should be correct', () => {
        expect(data.one).to.equal('testArrayBuffer');
      });
    });

    describe('on input having array as arraybuffers', function(){
      const data = publicKeyCredentialToJSON([ 'test123',new ArrayBuffer(32) ], encode)
      //then
      it('no arraybuffer should be correct', () => {
        expect(data[0]).to.equal('test123');
      })
      it('object key with arraybuffer should be correct', () => {
        expect(data[1]).to.equal('testArrayBuffer');
      });
    });

  });


  afterEach(() => {
    // Restore the default sandbox here
    sinon.restore();
  });
});