var expect = require('chai').expect;

expect(true).to.be.true;


function titleCase () {
};
expect(titleCase('the great mouse detective')).to.be.a('string');
