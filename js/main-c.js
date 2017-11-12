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
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

var showImages = function(){

  var myRequest = new Request('./images.json');
  fetch(myRequest)
    .then(function(response) { return response.json(); })
    .then(function(data) {
      var myList = document.querySelector('.primary-color ul')
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        var figure = document.createElement('figure');

        var a = document.createElement('a');
        a.setAttribute('href', `img/original/${data[i].mediaUrl}`);

        var image = document.createElement('img');
        image.setAttribute('src', `img/thumbs/${data[i].mediaUrl}`);
        a.appendChild(image);

        var figcaption = document.createElement('figcaption');
        var header3 = document.createElement("h3");
        var node = document.createTextNode(data[i].mediaTitle);

        header3.appendChild(node);
        figcaption.appendChild(header3);

        figure.appendChild(a);
        figure.appendChild(figcaption);

        listItem.appendChild(figure);

        myList.appendChild(listItem);
      }
    });
}

showImages()
