/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  suite('Routing Tests', function() {
    
    suite('GET /api/convert => conversion object', function() {
      
      test('Convert 10L (valid input)', function(done) {
       chai.request(server)
        .get('/api/convert')
        .query({ input: '10L' })
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, 'L');
          assert.approximately(res.body.returnNum, 2.64172, 0.1);
          assert.equal(res.body.returnUnit, 'gal');
          assert.equal(res.body.string, '10 litres converts to 2.64172 gallons');
          done();
        });
      });

      test('Convert 3.78541L (valid input)', function(done) {
        chai.request(server)
         .get('/api/convert')
         .query({ input: '3.78541L' })
         .end(function(err, res){
           assert.equal(res.status, 200);
           assert.equal(res.body.initNum, 3.78541);
           assert.equal(res.body.initUnit, 'L');
           assert.approximately(res.body.returnNum, 1, 0.1);
           assert.equal(res.body.returnUnit, 'gal');
           assert.equal(res.body.string, '3.78541 litres converts to 1 gallons');
           done();
         });
       });
      

       test('Convert 1/3L (valid input)', function(done) {
        chai.request(server)
         .get('/api/convert')
         .query({ input: '1/3L' })
         .end(function(err, res){
           assert.equal(res.status, 200);
           assert.approximately(res.body.initNum, 0.33, 0.01);
           assert.equal(res.body.initUnit, 'L');
           assert.approximately(res.body.returnNum, 0.08805647021, 0.1);
           assert.equal(res.body.returnUnit, 'gal');
           assert.equal(res.body.string, '0.33333 litres converts to 0.08806 gallons');
           done();
         });
       });

      test('Convert 32g (invalid input unit)', function(done) {
        chai.request(server)
        .get('/api/convert')
        .query({ input: '32g' })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, null);
          assert.equal(res.body.initUnit, null);
          assert.equal(res.body.returnNum, null);
          assert.equal(res.body.error, 'invalid unit');
          done();
        })
      });
      
      test('Convert 3/7.2/4kg (invalid number)', function(done) {
        chai.request(server)
        .get('/api/convert')
        .query({ input:'3/7.2/4kg' })
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, null);
          assert.equal(res.body.initUnit, null);
          assert.equal(res.body.returnNum, null);
          assert.equal(res.body.error, 'invalid number');
          done();
        }) 
      });  
      
      test('Convert 3/7.2/4kilomegagram (invalid number and unit)', function(done) {
        chai.request(server)
        .get('/api/convert')
        .query({ input: '3/7.2/4kilomegagram' })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, null);
          assert.equal(res.body.initUnit, null);
          assert.equal(res.body.returnNum, null);
          assert.equal(res.body.error, 'invalid number and unit');
          done();
        })
      });
      
      test('Convert kg (no number)', function(done) {
        chai.request(server)
        .get('/api/convert')
        .query({ input: 'kg'})
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 1);
          assert.equal(res.body.initUnit, 'kg');
          assert.approximately(res.body.returnNum, 2.20462, 0.1);
          assert.equal(res.body.string, '1 kilograms converts to 2.20462 pounds');
          done();
        })
      });
    });
  });
});
