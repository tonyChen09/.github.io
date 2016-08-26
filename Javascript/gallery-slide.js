
var images = [];
var currentIndex = 0;

images[0] = "images/alien.jpg";
images[1] = "images/awal.jpg";
images[2] = "images/puncak.jpg";


var nextIndex = 0;
var prevIndex = 0;
var currentImages = images[currentIndex];

	function nextImages()
	{
		nextIndex++;
		if(nextIndex > 2)
		{
			nextIndex = 0;
		}
		document.getElementById("images").src =images[nextIndex];

	}
	
	function previousImages()
	{
		prevIndex++;
		if(prevIndex > 2)
		{
			prevIndex = 0;
		}
		document.getElementById("images").src = images[prevIndex];

	}
	
	
	window.onload = function()
	{
		function currentImage(){
	    document.getElementById("images").src = currentImages;
			}
			currentImage();
	
	}

