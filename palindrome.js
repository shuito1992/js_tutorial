// Adds String#reverse.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns true for a plindrome, false otherwise.
  this.palindrome = function() {
    return this.processedContent() === this.processedContent().reverse();
  }

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function() {
    return this.processor(this.content);
  }
}
