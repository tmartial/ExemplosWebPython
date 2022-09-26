onload = function () {
    console.log('Page Game Started');
    var figura = document.getElementById("idImageHangHim");
    var alphabet = generateAlphabet();
    console.log(alphabet);
    listButton = generateButtonAlphabet(alphabet)
    var words = ['CHAIR', 'TABLE', 'CAR'];
    wordToFind = chooseWordsAleatory(words);
    listLetter = generateWordToFind(wordToFind);
}

//Image list
var imagesPath = ['IMG\1-HangHim.jpg','IMG\2-HangHim.jpg', 'IMG\3-HangHim.jpg', 'IMG\4-HangHim.jpg', 'IMG\5-HangHim.jpg',
                    'IMG\6-HangHim.jpg', 'IMG\7-HangHim.jpg', 'IMG\8-HangHim.jpg',]



function chooseWordsAleatory(listWord) {
    var lengthListWord = listWord.length;
    console.log(lengthListWord)
    var random = Math.floor(Math.random()*lengthListWord)
    console.log('The random number is :', random)
    var wordToFind = listWord[random];
    console.log(wordToFind);
    return wordToFind;
}


function generateAlphabet() {
    var alphabet = [];
    for (var i = 65; i <= 90; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
}

function generateButtonAlphabet(alphabet){
    var listButton = []
    var containerButton = this.document.getElementById("idAlphabetButton");
    for (var i = 0; i < alphabet.length; i++ ){
        var button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = alphabet[i];
        button.id = "idButton"+i;
        button.addEventListener("click", function() {
            this.style.backgroundColor = "grey";
            this.style.color = 'white';
          });
        listButton.push(button);
        containerButton.appendChild(listButton[i]);     
    }
    return listButton;
 }

 function generateWordToFind(word){
    var listLetter = []
    var containerWord = this.document.getElementById("idWordToFind");
    for (var i = 0; i < word.length; i++ ){
        var letter = document.createTextNode(word[i]);
        letter.textContent = `_ `;
        listLetter.push(word[i]);
        console.log(listLetter);
        containerWord.appendChild(letter);  
    }
    return listLetter;
 }
