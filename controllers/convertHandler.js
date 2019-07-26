/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    result = input.match(/[\d.\/]+/);
    // US 11: I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6),
    if (result && result[0].includes('/')) {
      let vals = result[0].split('/');
      if (vals.length == 2) {
        result = vals[0]/vals[1];   
      } else {
        // US 8: If my unit of measurement is invalid, returned will be 'invalid unit'.
        result = 'invalid number';
      }
    } else if (!result) {
      // US 11: if nothing is provided it will default to 1.
      result = 1;
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
