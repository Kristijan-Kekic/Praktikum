const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;
chai.use(require('sinon-chai'));

const priceListFormatter = require('../priceListFormatter.js');

describe('#priceListFormatter()', function () {
  it('should be a function', function () {
    expect(priceListFormatter).to.be.a('function');
  });

  context('with correctly formatted data as input', function () {
    beforeEach(() => {
      sinon.restore();
    });

    const data = [
      {
        from: '2020-01-01',
        to: '2020-02-01',
        price: 34.5,
      },
      {
        from: '2020-02-02',
        to: '2020-03-01',
        price: 37.0,
      },
      {
        from: '2020-03-02',
        to: '2020-05-15',
        price: 39.0,
      },
    ];



    it('za 3 cijene', function () {
      const log = sinon.spy(console, 'log');
      priceListFormatter(data);
      const expectedOutput = `34.5 : 2020-01-01 do 2020-02-01\n37.0 : 2020-02-02 do 2020-03-01\n39.0 : 2020-03-02 do 2020-05-15`;
      expect(log).to.have.been.calledWithExactly(expectedOutput);
    });


    it('za iste cijene', function () {
      const log = sinon.spy(console, 'log');
      data.push({
        from: '2020-05-16',
        to: '2020-06-15',
        price: 37.0,
      });
      priceListFormatter(data);
      const expectedOutput = `34.5 : 2020-01-01 do 2020-02-01\n37.0 : 2020-02-02 do 2020-03-01 , 2020-05-16 do 2020-06-15\n39.0 : 2020-03-02 do 2020-05-15`;
      expect(log).to.have.been.calledWithExactly(expectedOutput);
    });
  });
});