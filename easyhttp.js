function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// PROTOTYPES

// GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(self.http.responseText);
    }
  }

  this.http.send();
}

// POST request
// PUT request
// DELETE request