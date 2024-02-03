function findEvenIndex(arr) {
    let result = [];
    arr.map(num => result.push(num * 1));
    return result.reverse();
}

console.log(findEvenIndex([2, 4, 5, 6, 1, 4]));

// Mencari kata terpendek
function findShort(nameUser) {
    const nama = nameUser.split(' ')
    .reduce((firstWord, secondWord) => firstWord.length <= secondWord.length ? firstWord : secondWord);
    return nama;
}
console.log(findShort('Arjun Samudera Ahli Fikri')); // Ahli

function getNameUser(name, age) {
    return `Halo, nama saya ${name}, dan umur saya ${age} tahun`;
}
console.log(getNameUser('Arjun', 17));