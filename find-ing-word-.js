
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

