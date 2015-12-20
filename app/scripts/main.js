var SENTENCES_IN_PARA = 5;

var loremIpsum= lipsum;
var feministWords= ["equality", "alex", "qin", "wtf", "yo", "mama", "ok", "yeah"];

function generateFeminipsum(n) {
    var text = "";

    for (var i= 0; i < n; i++) {
        text += generateParagraph();
    }

    return text;
}

function generateParagraph() {
    var paragraph = "";

    for (var i= 0; i < SENTENCES_IN_PARA; i++) {
        paragraph += generateSentence();
    }

    return paragraph + "\n\n";
}

function generateSentence() {
    var sentenceLength = Math.random() * (15 - 3) + 3;

    var loremWordsArray = _.sample(loremIpsum, sentenceLength);
    var femWordsArray = _.sample(feministWords, sentenceLength);

    var feminipsumArray = _.shuffle(_.flatten([femWordsArray, loremWordsArray]));

    return capitalize(feminipsumArray.join(" ") + ". ");
}

function capitalize(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}
