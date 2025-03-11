const tutorials = [
  "what does the this keyword mean?",
  "what is the constructor oo pattern?",
  "implementing blockchain web api",
  "the test driven development workflow",
  "what is NaN and how can we check for it",
  "what is the difference between stopPropagation and preventDefault?",
  "immutable state and pure functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

function titleCased() {
  return tutorials.map(tutorial =>
    tutorial
      .split(" ")
      .map(word => {
        // If the word is in a known list of acronyms, keep it uppercase
        const acronyms = ["OO", "API", "JSONP", "NaN"];
        if (acronyms.includes(word.toUpperCase())) {
          return word.toUpperCase();
        }
        // Otherwise, capitalize only the first letter
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ")
  );
}

// Export function for testing
module.exports = { titleCased };
