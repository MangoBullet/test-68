const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 }
];

const reformattedArray = kvArray.map(
    ({ key, value }) => ({ [key]: value })
);

console.log(reformattedArray);
// ผลลัพธ์: [ { '1': 10 }, { '2': 20 } ]