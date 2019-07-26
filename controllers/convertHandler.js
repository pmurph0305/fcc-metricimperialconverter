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
    let validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var result = validUnits.find(unit => unit === input);
    if (!result) {
      result = 'invalid unit';
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    // US: 5 -> 7 (Note litres is a capital L)
    // 5. I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
    // 6. I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
    // 7. I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
    var input = ['gal','l','mi','km','lbs','kg'];
    var output = ['L','gal','km','mi','kg','lbs'];
    let inputIndex = input.indexOf(initUnit.toLowerCase());
    var result = output[inputIndex];
    return result;
  };

  this.spellOutUnit = function(unit) {
    var input =  ['gal','l','mi','km','lbs','kg'];
    var output = ['gallons', 'litres', 'miles', 'kilometers', 'pounds', 'kilograms'];
    var result = output[input.indexOf(unit.toLowerCase())];
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
