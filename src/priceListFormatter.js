/*let data = [
    {from: "2020-01-01", to: "2020-02-01", price: 34.5},
    {from: "2020-02-02", to: "2020-03-01", price: 37.0},
    {from: "2020-03-02", to: "2020-05-15", price: 39.0},
    {from: "2020-05-16", to: "2020-06-15", price: 37.0},
   ];
*/

function priceListFormatter(data) {
    const data2 =  [...data].sort((a, b) => a.price - b.price );
    const output = createOutput(data2);
    console.log(output);
}

function createOutput(data) {
    let output = '';
    data.forEach((item, i, arr) => {
    const dateStr = `${item.from} do ${item.to}`;
    output +=
    arr[i - 1]?.price === item.price
    ? ` , ${dateStr}`
    : `\n${item.price.toFixed('1')} : ${dateStr}`;
})}

return output;
   
module.exports = priceListFormatter;
