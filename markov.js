const Markov = require('markov-strings');

const data = [
    //put your text data here
]


let parsedData = data.replace(/(\r\n|\n|\r)/gm,"").split(/[\\.!?]/);

const options = {
    minWords: 10,
    minScore: 40
};

const markovChain = new Markov(parsedData, options);
markovChain.buildCorpusSync();
const result = markovChain.generateSentenceSync();
console.log(result);
