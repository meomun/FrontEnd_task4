// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// After the loop print the HTML into <ul> element using innerHTML.


var showImages = function(){

  var myRequest = new Request('./images.json');
  var myList = document.querySelector('.primary-color ul')
  fetch(myRequest)
    .then(function(response) { return response.json(); })
    .then(function(data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<figure>
          <a href="img/original/${data[i].mediaUrl}">
            <img src="img/thumbs/${data[i].mediaUrl}">
          </a>
          <figcaption>
              <h3>${data[i].mediaTitle}</h3>
          </figcaption>
        </figure>`;
        myList.appendChild(listItem);
      }
    });
}
showImages()
