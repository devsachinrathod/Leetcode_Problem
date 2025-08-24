

    // // Here are all the string methods in JavaScript:
    // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

    // // length

    // function getLength(str) {
    // console.log("Getting length of string:", str);
    // console.log("Length:", str.length);
    // return str.length;
    // }
    // getLength("Hello,World!");

    // // indexOf
    // function findIndexOf(subStr, str) {
    // console.log("Finding index of substring:", subStr, "in string:", str);
    // console.log("Index:", str.indexOf(subStr));
    // }

    // findIndexOf("World", "Hello, World!");

    // // lastIndexOf
    // function findLastIndexOf(subStr, str) {
    // console.log("Finding last index of substring:", subStr, "in string:", str);
    // console.log("Last Index:", str.lastIndexOf(subStr));
    // }
    // findLastIndexOf("e", "Heello, Worled!");

    // // charAt
    // function getLength(str){
    //     console.log("Getting length of string:", str);
    //     console.log("Length:", str.length);
    //     console.log("Character at index 4:", str.charAt(4));
    // }
    // getLength("Hello,World!");

    // slice
    // function getSlice(str, start, end) {
    //   console.log("Original String:", str);
    //   console.log("After slice:", str.slice(start, end));
    // }
    // getSlice("Hello World", 0, 5);

    // function replaceString(str, target, replacement) {
    //     console.log(str.split(" "));
    //     for (let i = 0; i < str.split(" ").length; i++) {
    //     console.log(str.split(" ")[i]);
    //     }
    //   console.log("Original String:", str);
    //   console.log("After replace:", str.replace(target, replacement));
    // }
    // replaceString("Hello World", "World", "JavaScript");


    // function splitString(str, separator) {
    // console.log("Original String:", str);
    // console.log("After split:", str.split(separator));
    // }
    // splitString("Hello World", "w");
    // splitString("Hello World", "l");


    function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString("     Hello World ");