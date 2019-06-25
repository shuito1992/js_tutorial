module.exports = Phrase;

// Adds String#reverse.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns true for a plindrome, false otherwise.
  this.palindrome = function() {
    if (this.processedContent()) {
    return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }

  this.letters = function() {
    return (this.content.match(/[a-z]/ig) || []).join("");
  }

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function() {
    return this.processor(this.letters());
  }
}
