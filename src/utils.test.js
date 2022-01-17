const {encode, decode} = require('./utils')
 
test('encode gl5 correctly', () => {
    expect(encode("gl5")).toBe('Z2w1');
  });


  test('decode gl5 correctly', () => {
    expect(decode("Z2w1")).toBe('gl5');
  });