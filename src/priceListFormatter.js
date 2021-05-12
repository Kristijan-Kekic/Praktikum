function priceListFormatter(pricelist) {
  
    const orderedDataByPrice = [...pricelist].sort((a, b) => a.price - b.price);
    const dataCloneMap = createMapByPrice(orderedDataByPrice);
    const output = createOutput(dataCloneMap);
  
    console.log(output);
  }
  
  function createMapByPrice(pricelist) {
    new Map();
    return pricelist.reduce((map, element) => {
      const Dates = ({ from, to } = element);
      const Cost = map.get(element.price);
      map.set(element.price, Cost ? [...Cost, Dates] : [Dates]);
      return map;
    });
  }
  
  function createOutput(pricelist) {
    return Array.from(pricelist)
      .reduce((output, [cost, value]) => {
        const Dates = value.map((Dates) => `${Dates.from} do ${Dates.to}`).join(' , ');
        return (output += `${cost} : ${Dates}\n`);
      }, '')
  }

  
  
  module.exports = priceListFormatter;