
import {preFormatCreateCredentialRequest} from './webauth-helpers';
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


  afterEach(() => {
    // Restore the default sandbox here
    sinon.restore();
  });
});