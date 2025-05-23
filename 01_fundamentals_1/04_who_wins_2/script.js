const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log("No team wins...")
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
