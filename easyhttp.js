function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// PROTOTYPES

// GET request
easyHTTP.prototype.get = function(url) {
  this.http.open('GET', url, true);

  this.http.onload = function() {
    
  }

  this.http.send();
}

// POST request
// PUT request
// DELETE request