//pick 3 images start with 3
//make constructor function for information I want 
//make a function that will get a random image.
//create a event listener
//create event handler (will probably be related to step 3)that will generate 3 random images
//get objects to know how many times they have been clicked
//the user will click an image and a new set will come try to get the limit of rounds to be 7
//add css. reset ect
//dipslpay a list to show after all rounds are over
//remove event listener
//refer back to 9
//


var imageCollection = [];

function DisplayProducts(imageSource, caption){
    // this.clicked = 0;
    // this.shown = 0;
    this.imageSrc = imageSource;
    this.imageCaption = caption;
  
    imageCollection.push(this);
}
    new DisplayProducts('breakfast.jpg', 'breakfast');
    new DisplayProducts('shark.jpg', 'shark');
    new DisplayProducts('dragon.jpg', 'dragon meat');
    new DisplayProducts('cthulu', 'chtulu');
    new DisplayProducts('tauntaun.jpg', 'tauntaun');
    new DisplayProducts('bag.jpg', 'R2-D2');
    new DisplayProducts('chair.jpg', 'chair');
    new DisplayProducts('banana.jpg', 'banana');
    new DisplayProducts('boots.jpg', 'boots');
    new DisplayProducts('dog-duck.jpg', 'dog-duck');
   

    // Set up the event listener
// target something
var productImageSection = document.getElementById('productImages');

// add the listener
productImageSection.addEventListener('click', trackAndRerack);

function trackAndRerack(event){
    if(event.target.section === 'productImages'){
    //if section does not work use Id
    totalClicks++;
    }

var targetSrc = event.target.getAttribute('src');
    for(var i = 0; i <  imageCollection.length; i++){
      if ( imageCollection[i].imageSource === targetSrc) {
        imageCollection[i].clicked++;
      }
    }


    
    rerenderSomeRandomImages();
    
}


function rerenderSomeRandomImages(){
    var firstRandom = pickRandom(0, imageCollection.length);
    console.log('first new', imageCollection[firstRandom]);
  
    var secondRandom = pickRandom(0, imageCollection.length);
    console.log('second new', imageCollection[secondRandom]);
  
    while(secondRandom === firstRandom){
      secondRandom = pickRandom(0, imageCollection.length);
      console.log('second new (reroll)', imageCollection[secondRandom]);
    }

    var leftImage = document.getElementById('left-image');
  var leftText = document.getElementById('left-text');
  var rightImage = document.getElementById('right-image');
  var rightText = document.getElementById('right-text');
  leftImage.src = imageCollection[firstRandom].imageSrc;
  leftText.textContent = imageCollection[firstRandom].imageCaption;
  imageCollection[firstRandom].shown++;
  
}




function pickRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
  }