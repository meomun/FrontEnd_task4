// Create function 'showImages' which
// adds the loaded HTML contents to <ul> element
function showImages() {
  var myRequest = new Request('./images.html');

  return fetch(myRequest).then(function(response) {
    return response.text().then(function(html) {
      document.querySelector('.primary-color ul').innerHTML = html;
    });
  });
}

showImages();
