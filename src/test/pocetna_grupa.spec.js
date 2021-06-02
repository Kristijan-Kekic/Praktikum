var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;

const {
  } = require('../pocetna_grupa.js');

describe('reduce vjezbe', function () {

    it('vjezba 1-reduce', function() {
        let sum = [1,2,3,4,5,6].reduce((previous, current)=>previous + current);
        expect(sum).to.be.equal(21);
    });
    it('vjezba 1-reduce-2', function() {
        let sum = [1,2,3,4,5,6,7,8].reduce((previous, current)=>previous + current);
        expect(sum).to.be.equal(36);
    });

    it('vjezba 2-reduce', function() {
        let array = [1,2,3,4,5]
        let arraycopy = []
        arraycopy = array.reduce((previous, current) => {
        if (current %2 == 0) {
            arraycopy.push(current)
        }
        return arraycopy
    });
        expect(arraycopy).to.be.deep.equal([2,4]);
    });

    it('vjezba 3-reduce', function() {
        let array = [1,2,3,4,5,6]
        let arraycopy = []
        arraycopy = array.reduce((previous, current) => {
        if (current %2 == 0) {
            arraycopy.push(current)
        }
        return arraycopy.map(x =>x+1)
    });
        expect(arraycopy).to.be.deep.equal([3,5,7]);
    });

    it('vjezba 4-reduce', function() {
        let array = ['asd','wwww','ggwpglhf','rip']
        let arraycopy = []
        array.reduce((previous, current) => arraycopy.push(current))
        expect(arraycopy).to.be.deep.equal(['wwww','ggwpglhf','rip'])
    });

    it('vjezba 5-reduce', function() {
        let array = ['asd','wwww','ggwpglhf','rip']
        let arraycopy = []
        array.reduce((previous, current) => arraycopy.push(current.length))
        expect(arraycopy).to.be.deep.equal([4,8,3])
    });

    it('vjezba 6-reduce', function() {
        let array = ['asd','wwww','ggwpglhf','rip']
        let arraycopy = []
        array.reduce((previous, current) => arraycopy.push(current))
        arraycopy = arraycopy.map(x => x + 'aaa').filter(word => word.length > 7)
        expect(arraycopy).to.be.deep.equal(['ggwpglhfaaa'])
    });

    it('vjezba 7-reduce', function() {
        let data = [
            {
              name: 'aaaa',
              price: 34.5,
            },
            {
              name: 'bbbbb',
              price: 37.0,
            },
            {
              name: 'ccccc',
              price: 39.0,
            },
          ];

          const totalPrice = Object.values(data).reduce((previous, {price}) => previous + price, 0)
        expect(totalPrice).to.be.equal(110.5)
    });

    it('vjezba 8-reduce', function() {
        let data = [
            {
              name: 'aaaa',
              price: 34.5,
            },
            {
              name: 'bbbbb',
              price: 37.0,
            },
            {
              name: 'ccccc',
              price: 39.0,
            },
          ];

          let totalPrice = Object.values(data).reduce((previous, {price}) => previous + price+5, 0)
        expect(totalPrice).to.be.equal(125.5)
    });

    it('vjezba 9-reduce', function() {
        let data = [
            {
              name: 'aaaa',
              price: 34.5,
            },
            {
              name: 'bbbbb',
              price: 37.0,
            },
            {
              name: 'ccccc',
              price: 39.0,
            },
          ];
          let totalPrice = Object.values(data).filter(price => price.price < 38).reduce((previous, {price}) => previous + price+5, 0)
        expect(totalPrice).to.be.equal(81.5)
    });

    it('vjezba 10-reduce', function() {
        let data = [
            {
              name: 'aaaa',
              price: 34.5,
            },
            {
              name: 'bbbbb',
              price: 37.0,
            },
            {
              name: 'ccccc',
              price: 39.0,
            },

            {
              name: 'ddddd',
              price: 33.0,
            },
          ];
          let totalPrice = Object.values(data).filter(price => price.price < 38).reduce((previous, {price}) => previous + price+10, 0)
        expect(totalPrice).to.be.equal(134.5)
    });
});

describe('map vjezbe', function () {

    it('vjezba 1-map', function() {
        let array = [1,2,3,4,5]
        array = array.map(x => x+1)
        expect(array).to.be.deep.equal([2,3,4,5,6])
    });

    it('vjezba 1-map-2', function() {
        let array = [1,2,3,4,5]
        array = array.map(x => x+2)
        expect(array).to.be.deep.equal([3,4,5,6,7])
    });

    it('vjezba 2-map', function() {
        let array = [1,2,3,4,5]
        array = array.map(x => x+2).filter(number => number > 4)
        expect(array).to.be.deep.equal([5,6,7])
    });

    it('vjezba 3-map', function() {
        let array = [1,2,3,4,5]
        let arraycopy = array.map(x => x+2).reduce((previous, current)=>previous + current)
        expect(arraycopy).to.be.equal(25)
    });

    it('vjezba 4-map', function() {
        let array = ['aaa','bbbb','ccccc']
        let arraycopy = array.map(x => x + 'd')
        expect(arraycopy).to.be.deep.equal(['aaad', 'bbbbd','cccccd'])
    });

    it('vjezba 5-map', function() {
        let array = ['aaa','bbbb','ccccc']
        function lessLength(array) {
            return array.length>4
        }
        let arraycopy = array.map(x => x + 'a').filter(lessLength)
        expect(arraycopy).to.be.deep.equal(['bbbba','ccccca'])
    });

    it('vjezba 6-map', function() {
        let array = ['aaa','bbbb','ccccc']
        function lessLength(array) {
            return array.length>4
        }
        let arraycopy = array.map(x => x + 'a').filter(lessLength)
        arraycopy = arraycopy.reduce((previous, current)=> previous+current)
        expect(arraycopy).to.be.deep.equal('bbbbaccccca')
    });

    it('vjezba 7-map', function() {
        let array = ['aaa','bbbb','ccccc']
        function lessLength(array) {
            return array.length>4
        }
        let arraycopy = array.map(x => x + 'a').filter(lessLength)
        arraycopy = arraycopy.reduce((previous, current)=> previous.length+current.length)
        expect(arraycopy).to.be.deep.equal(11)
    });

    it('vjezba 8-map', function() {
        let array = ['aaa','bbbb','ccccc']
        let array2 = ['ccc']
        array = array.map(x => x + array2[0])
        expect(array).to.be.deep.equal(['aaaccc', 'bbbbccc', 'cccccccc'])
    });

    it('vjezba 9-map', function() {
        let array = ['aaa','bbbb','ccccc']
        let array2 = [10]
        array = array.map(x => x + array2[0]).filter(string => string.length <7)
        expect(array).to.be.deep.equal(['aaa10', 'bbbb10'])
    });

    it('vjezba 10-map', function() {
        let array = ['aaa','bbbb','ccccc']
        let array2 = ['ggg']
        let string = 'ggwp'
        array = array.map(x => x + array2[0]).reduce((previous, current) => previous + (current + string) )
        expect(array).to.be.deep.equal('aaagggbbbbgggggwpcccccgggggwp')
    });
    
});

describe('filter vjezbe', function () {
    
    it('vjezba 1-filter', function() {
        let array = [2,4,3,2,4,6,1]
        function isBigger(array) {
            return array>2 
        }
        array = array.filter(isBigger)
        expect(array).to.be.deep.equal([4,3,4,6])
    });

    it('vjezba 1-filter-2', function() {
        let array = [2,4,3,2,4,6,1]
        function isSmaller(array) {
            return array<2 
        }
        array = array.filter(isSmaller)
        expect(array).to.be.deep.equal([1])
    });

    it('vjezba 2 filter', function() {
        let array = [2,4,3,2,4,6,1]
        function isBigger(array) {
            return array>2 
        }
        array = array.filter(isBigger).map(x=> x*2)
        expect(array).to.be.deep.equal([8,6,8,12])
    });

    it('vjezba 3 filter', function() {
        let array = [2,4,3,1,2,4,6,1]
        function isSmaller(array) {
            return array<2 
        }
        array = array.filter(isSmaller).reduce((previous, current)=> previous+current)
        expect(array).to.be.deep.equal(2)
    });

    it('vjezba 4 filter', function() {
        let array = ['karlo','marko','iva','ana']
        function isBigger(array) {
            return array.length>3 
        }
        array = array.filter(isBigger)
        expect(array).to.be.deep.equal(['karlo', 'marko'])
    });

    it('vjezba 5 filter', function() {
        let array = ['karlo','marko','iva','ana']
        function isBigger(array) {
            return array.length>3 
        }
        array = array.filter(isBigger).map(x => x + 'aaa').reduce((previous, current)=> previous.length + current.length)
        expect(array).to.be.deep.equal(16)
    });

    it('vjezba 6 filter', function() {
        let data = [
            {
              name: 'aaaa',
              price: 34.5,
            },
            {
              name: 'bbbbb',
              price: 37.0,
            },
            {
              name: 'ccccc',
              price: 39.0,
            },

            {
              name: 'ddddd',
              price: 33.0,
            },
          ];
          let totalPrice = Object.values(data).filter(price => price.price < 38).reduce((previous, {price}) => previous + price, 0)
        expect(totalPrice).to.be.equal(104.5)
    });

    it('vjezba 7 filter', function() {
        let data = [
            {
              name: 'aaaa',
              price: 34.5,
            },
            {
              name: 'bbbbb',
              price: 37.0,
            },
            {
              name: 'ccccc',
              price: 39.0,
            },

            {
              name: 'ddddd',
              price: 33.0,
            },
          ];
          let totalPrice = Object.values(data).filter(name => name.name.length <5).reduce((previous, {price}) => previous + price, 0)
        expect(totalPrice).to.be.equal(34.5)
    });

    it('vjezba 8 filter', function() {
        let data = [
            {
              name: 'aaaa',
              price: 34.5,
            },
            {
              name: 'bbbbb',
              price: 37.0,
            },
            {
              name: 'ccccc',
              price: 39.0,
            },

            {
              name: 'ddddd',
              price: 33.0,
            },
          ];
          let totalPrice = Object.values(data).filter(name => name.name.length <6 & name.price < 35).reduce((previous, {price}) => previous + price, 0)
        expect(totalPrice).to.be.equal(67.5)
    });

    it('vjezba 9 filter', function() {
        let array = ['karlo','marko','iva','ana','pero']
        function isEqual(array) {
            return array.length==3 
        }
        array = array.filter(isEqual).map(x => x + 'aaa')
        expect(array).to.be.deep.equal(['ivaaaa', 'anaaaa'])
    });

    it('vjezba 10 filter', function() {
        let array = ['karlo','marko','iva','ana','perica']
        function isBiggerOrSmaller(array) {
            return array.length > 5 | array.length < 4
        }
        array = array.filter(isBiggerOrSmaller).map(x => x + '1')
        expect(array).to.be.deep.equal(['iva1', 'ana1', 'perica1'])
    });
});

describe('forEach vjezbe', function () {

    it('vjezba 1-foreach', function() {
        let array = [2,4,2,6]
        let arraycopy = []
        array.forEach(number => {
        arraycopy.push(number+1)
        return arraycopy      
        })
        expect(arraycopy).to.be.deep.equal([3,5,3,7])
    
    });

    it('vjezba 1-foreach-2', function() {
        let array = [2,4,2,6]
        let arraycopy = []
        array.forEach(number => {
        arraycopy.push(number*2)
        return arraycopy      
        })
        expect(arraycopy).to.be.deep.equal([4,8,4,12])
    
    });

    it('vjezba 2-foreach', function() {
        let array = [2,4,2,6]
        let arraycopy = []
        array.forEach(number => {
        arraycopy.push(number+1)
        return arraycopy     
        })
        arraycopy = arraycopy.map(x => x-1)
        expect(arraycopy).to.be.deep.equal([2,4,2,6])
    
    });

    it('vjezba 3-foreach', function() {
        let array = [2,4,2,6]
        let arraycopy = []
        array.forEach(number => {
        arraycopy.push(number+1)
        return arraycopy     
        })
        arraycopy = arraycopy.reduce((previous, current)=> previous+current+1)  
        expect(arraycopy).to.be.deep.equal(21)
    
    });

    it('vjezba 4-foreach', function() {
        let array = ['aaa','bbbb','ccccc']
        let arraycopy = []
        array.forEach(word => {
        arraycopy.push(word)
        return arraycopy     
        }) 
        expect(arraycopy).to.be.deep.equal(['aaa','bbbb','ccccc'])
    
    });

    it('vjezba 5-foreach', function() {
        let array = ['aaa','bbbb','ccccc']
        let arraycopy = []
        array.forEach(word => {
        arraycopy.push(word)
        return arraycopy   
        })
        arraycopy = arraycopy.filter(word => word.length>3)  
        expect(arraycopy).to.be.deep.equal(['bbbb','ccccc'])
    
    });

    it('vjezba 6-foreach', function() {
        let array = ['aaa','bbbb','ccccc']
        let arraycopy = []
        array.forEach(word => {
        arraycopy.push(word + array.filter(word => word.length<4))
        return arraycopy   
        })
        arraycopy = arraycopy.filter(word => word.length>3)  
        expect(arraycopy).to.be.deep.equal(['aaaaaa','bbbbaaa', 'cccccaaa'])
    
    });

    it('vjezba 7-foreach', function() {
        let array = ['aaa','bbbb','ccccc']
        let arraycopy = []

        let data = [
            {
              name: 'aaaa',
              price: 34.5,
            },
            {
              name: 'bbbbb',
              price: 37.0,
            },
            {
              name: 'ccccc',
              price: 39.0,
            },

            {
              name: 'ddddd',
              price: 33.0,
            },
          ];

        Object.values(data).forEach(key => {
            arraycopy.push(key.name);
          });
        expect(arraycopy).to.be.deep.equal(['aaaa', 'bbbbb', 'ccccc', 'ddddd'])
    
    });

    it('vjezba 8-foreach', function() {
        let array = ['aaa','bbbb','ccccc']
        let arraycopy = []

        let data = [
            {
              name: 'aaaa',
              price: 34.5,
            },
            {
              name: 'bbbbb',
              price: 37.0,
            },
            {
              name: 'ccccc',
              price: 39.0,
            },

            {
              name: 'ddddd',
              price: 33.0,
            },
          ];

        Object.values(data).forEach(key => {
            arraycopy.push(key.price);
            arraycopy = arraycopy.filter(price => price > 35)
          });
        expect(arraycopy).to.be.deep.equal([37, 39])
    
    });

    it('vjezba 9-foreach', function() {
        let array = ['aaa','bbbb','ccccc']
        let arraycopy = []

        let data = [
            {
              name: 'aaaa',
              price: 34.5,
            },
            {
              name: 'bbbbb',
              price: 37.0,
            },
            {
              name: 'ccccc',
              price: 39.0,
            },

            {
              name: 'ddddd',
              price: 33.0,
            },
          ];

        Object.values(data).forEach(key => {
            arraycopy.push(key.price);
          });
        arraycopy = arraycopy.reduce((previous, current) => previous+current)
        expect(arraycopy).to.be.deep.equal(143.5)
    
    });

    it('vjezba 10-foreach', function() {
        let array = ['aaa','bbbb','ccccc']
        let arraycopy = []

        let data = [
            {
              name: 'aaaa',
              price: 34.5,
            },
            {
              name: 'bbbbb',
              price: 37.0,
            },
            {
              name: 'ccccc',
              price: 39.0,
            },

            {
              name: 'ddddd',
              price: 33.0,
            },
          ];

        Object.values(data).forEach(key => {
            arraycopy.push(key.price);
          });
        arraycopy = arraycopy.filter(price => price > 35).reduce((previous, current) => previous+current)
        expect(arraycopy).to.be.deep.equal(76)
    
    });
});