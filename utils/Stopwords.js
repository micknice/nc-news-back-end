const stopObj = require('./stopObj');
const defaultStopwords = Object.keys(stopObj)


class Stopwords {

  // "useDefaultStopwords" and "customStopwords" are optional parameters, as specified in the
  // constructor for Corpus, which control whether the default stopword list should be used, and to
  // specify any custom stopwords. If the default stopword list is to be used, any custom stopwords
  // are added to that list; if not, the custom stopwords are used instead of the default list.
  constructor(useDefaultStopwords = true, customStopwords = []) {
    const stopwords = useDefaultStopwords ? customStopwords.concat(defaultStopwords) : customStopwords;
    this._stopwords = new Map(stopwords.map(d => [d, true]));
  }

  // Returns true if the current stopword list contains the given term, or false otherwise
  includes(word) {
    return this._stopwords.has(word);
  }

  // Returns an array of the stopword list currently in use (for inspection or debugging)
  getStopwordList() {
    return Array.from(this._stopwords.keys());
  }
}

module.exports = Stopwords;