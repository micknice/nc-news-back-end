const stopWords = require('./stopwords');
const articlesArr = require('../db/data/development-data/articles');




function cleanText(text) {
    const cleanedText = text.replace(/[.,?!;()"'-]/g, "").replace(/\s+/g, " ").toLowerCase().split(" ");
    return cleanedText
}

function removeStopWords(text) {
    const usefulText = cleanText(text).filter((word) => !stopWords.hasOwnProperty(word))
    return usefulText
}



function calculateTF(document) {
  let wordCounts = {};
  let words = removeStopWords(document.body);
  for (let j = 0; j < words.length; j++) {
    let word = words[j];
    if (!(word in wordCounts)) {
      wordCounts[word] = 0;
    }
    wordCounts[word]++;
  }
  return wordCounts;
}

function calculateTFIDF(documents) {
  let wordCounts = {};
  let docCount = documents.length;
  let tf = [];
  let idf = {};
  let tfidf = [];
  for (let i = 0; i < docCount; i++) {
    
    let words = removeStopWords((documents[i].body));
    
    let docWordCount = {};
    for (let j = 0; j < words.length; j++) {
      let word = words[j];
      if (!(word in docWordCount)) {
        if (!(word in wordCounts)) {
          wordCounts[word] = 0;
        }
        wordCounts[word]++;
        docWordCount[word] = 0;
      }
      docWordCount[word]++;
    }
    tf.push(docWordCount);
    
  }
  for (let word in wordCounts) {
    idf[word] = Math.log(docCount / wordCounts[word]);
  }

  for (let i = 0; i < docCount; i++) {
    let docTFIDF = {};
    let docWords = Object.keys(tf[i]);
    for (let j = 0; j < docWords.length; j++) {
      let word = docWords[j];
      docTFIDF[word] = tf[i][word] * idf[word];
    }
    tfidf.push(docTFIDF);
  }

  return tfidf;
}




function cosineSimilarity(vec1, vec2) {
  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;

  for (let key in vec1) {
    if (vec1.hasOwnProperty(key) && vec2.hasOwnProperty(key)) {
      dotProduct += vec1[key] * vec2[key];
      norm1 += vec1[key] * vec1[key];
    }
  }

  for (let key in vec2) {
    if (vec1.hasOwnProperty(key) && vec2.hasOwnProperty(key)) {
      norm2 += vec2[key] * vec2[key];
    }
  }

  return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
}
  
  function findMostSimilar(documents, queryDoc) {
    let tfidf = calculateTFIDF(documents);
    let queryVec = calculateTF(queryDoc);    
    let maxSim = -Infinity;
    let mostSimilarDoc = -1;
  
    for (let i = 0; i < documents.length; i++) {
      if (documents[i].body !== queryDoc.body) {
        let docVec = tfidf[i];       
        let similarity = cosineSimilarity(queryVec, docVec);
        if (similarity > maxSim) {
          maxSim = similarity;
          mostSimilarDoc = i;
        }
      }
    }
  
    return mostSimilarDoc +1;
  }


  module.exports = {calculateTFIDF, findMostSimilar};