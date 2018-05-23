/* global describe, it */

var expect = require('chai').expect;
var factory = require('../../app/negotiate/confirmation');


describe('negotiate/confirmation', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.be.undefined;
    expect(factory['@singleton']).to.be.undefined;
  });
  
  describe('negotiate', function() {
    
    describe('default behavior', function() {
      var type;
      
      before(function(done) {
        var client = {
          id: 's6BhdRkqt3'
        }
        var resource = {
          id: '112210f47de98100'
        }
        
        var negotiate = factory();
        negotiate(resource, client, function(err, t) {
          if (err) { return done(err); }
          type = t;
          done();
        });
      });
      
      it('should yield type', function() {
        expect(type).to.equal('none');
      });
    });
    
    describe('negotiating mac token', function() {
      var type;
      
      before(function(done) {
        var client = {
          id: 's6BhdRkqt3',
          confirmationMethodsSupported: [ 'key' ]
        }
        var resource = {
          id: '112210f47de98100',
          confirmationMethodsSupported: [ 'key' ]
        }
        
        
        var negotiate = factory();
        negotiate(resource, client, function(err, t) {
          if (err) { return done(err); }
          type = t;
          done();
        });
      });
      
      it('should yield type', function() {
        expect(type).to.equal('key');
      });
    });
    
  });
  
});
