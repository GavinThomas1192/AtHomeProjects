var expect = require('chai').expect;

expect(true).to.be.true;


function titleCase (title) {
  var words = title.split(' ');
  var titleCasedWords = words.map(function (word) {
    return word[0].toUpperCase() +  title.substring(1);
  });



  return titleCasedWords.join(' ')

expect(titleCase('the great mouse detective')).to.be.a('string');

expect(titleCase('a')).to.equal('A');

expect(titleCase('vertigo')).to.equal('Vertigo');

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');


//Some stuff pulled from internet for github upload
"use strict";

var expect = require('chai').expect;

// Simple assertions
expect({}).to.exist;
expect(26).to.equal(26);
expect(false).to.be.false;
expect('hello').to.be.string;

// Modifiers ('not')
expect([1, 2, 3]).to.not.be.empty;

// Complex chains
expect([1, 2, 3]).to.have.length.of.at.least(3);
