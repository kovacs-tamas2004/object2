let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
};

const values = Object.values(fizetes);
const sum = values.reduce((szamit, value) => {
    return szamit + value;
}, 0);

console.log(sum);