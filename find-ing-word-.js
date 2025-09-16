
function findingINGwords(verbList) {
    let ingWordslist = [];
    let n = verbList.slice().length;

    for (let i = 0; i < n; i++) {
        let word = verbList[i].trim();
            if (word.endsWith("ing")) {
            ingWordslist.push(word);
        }
    }
    return ingWordslist;
}

console.log(findingINGwords(["runing ", "walking", "sachin", "popletwar"]));

// let arr = ["runing ", "walking"];
// let name =  "achib"
// console.log(name.slice());
// console.log(name, name.length);
// console.log(name, name.length);

// let strigify = arr.slice();
// console.log(strigify);
// console.log(arr.length);