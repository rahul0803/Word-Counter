let textBox = document.getElementById("textBox");


textBox.addEventListener("input", function () {
    var text = this.value;                                                    // 'this' refers to 'textBox'
    // console.log(text);
    let char = text.length;                                                   // 'space' is also a character
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let words = text.split(" ");                                              // 'split' returns an array
    let newList = words.filter((elem) => {                                    // 'filter' returns a new array
        return elem != "";
    })
    // console.log(words);
    console.log(newList);
    // document.getElementById("word").innerHTML = words.length;             // 'words.length' ko separate variable mein store nhi kiye
    document.getElementById("word").innerHTML = newList.length;              // 'newList' mein correct form store h so replace words with newlist
})


