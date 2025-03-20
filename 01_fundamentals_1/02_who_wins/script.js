/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy🏆");
} else if(scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy🏆");
} else {
    console.log("Both win the trophy🏆🏆");
};
 */


const scoreDolphins = (97 + 112 + 90) / 3;
const scoreKoalas = (109 + 95 + 90) / 3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy🏆");
} else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas win the trophy🏆");
} else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas) {
    console.log("Both win the trophy🏆🏆");
} else {
    console.log("No one wins the trophy 😭");
};
