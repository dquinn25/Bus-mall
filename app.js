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
var totalClicks = 0;
var maxClicks = 25; 
var verifyImage = [];

function DisplayProducts(imageSource, caption){
    this.clicked = 0;
    this.shown = 0;
    this.imageSrc = imageSource;
    this.imageCaption = caption;
  
    imageCollection.push(this);
}
    new DisplayProducts('breakfast.jpg', 'breakfast');
    new DisplayProducts('shark.jpg', 'Shark');
    new DisplayProducts('dragon.jpg', 'Dragon Meat');
    new DisplayProducts('cthulhu.jpg', 'Chtulhu');
    new DisplayProducts('tauntaun.jpg', 'Tauntaun');
    new DisplayProducts('bag.jpg', 'R2-D2');
    new DisplayProducts('chair.jpg', 'Chair');
    new DisplayProducts('banana.jpg', 'Banana');
    new DisplayProducts('boots.jpg', 'Boots');
    new DisplayProducts('dog-duck.jpg', 'Dog Duck');
    new DisplayProducts('bathroom.jpg', 'Bathroom IPAD');
    new DisplayProducts('bubblegum.jpg', 'Meatball Bubble Gum');
    new DisplayProducts('pen.jpg', 'Pen');
    new DisplayProducts('pet-sweep.jpg', 'Pet Sweep');
    new DisplayProducts('scissors.jpg', 'Pizza Scissors');
    new DisplayProducts('sweep.png', 'Kid Sweep');
    new DisplayProducts('unicorn.jpg', 'Unicorn Meat');
    new DisplayProducts('usb.gif', 'USB');
    new DisplayProducts('water-can.jpg', 'Water Can');
    new DisplayProducts('wine-glass.jpg', 'Wine Glass');




    
    
    // Set up the event listener
    // target something
    var productImageSection = document.getElementById('productImages');
    
    // add the listener
    productImageSection.addEventListener('click', trackAndRerack);
    
    function trackAndRerack(event){
        //     if(event.target.section === 'productImages'){
            //     //if section does not work use Id
            //     totalClicks++;
    //     }
    if(totalClicks === maxClicks){
        //IMPORTANT - how to stop an event handler
        productImageSection.removeEventListener('click', trackAndRerack);
        //if statement is not compiling to true so click proprty is not being updated
        tableRender();
    }
var targetSrc = event.target.getAttribute('src');
    for(var i = 0; i <  imageCollection.length; i++){
        console.log(targetSrc, imageCollection[i].imageSrc)
        //this, left side, (imageCollection[i].imageSource)
      if (imageCollection[i].imageSrc === targetSrc) {
          console.log('**********', imageCollection[i])
          imageCollection[i].clicked++;
        }
    }
    
    
    totalClicks++;
    console.log(totalClicks)
    rerenderSomeRandomImages();
    
    

}


function rerenderSomeRandomImages(){
    var firstRandom = pickRandom(0, imageCollection.length);
    console.log('first new', imageCollection[firstRandom]);
  
    var secondRandom = pickRandom(0, imageCollection.length);


    var thirdRandom = pickRandom(0, imageCollection.length);
  
    while(secondRandom === firstRandom || thirdRandom === firstRandom || thirdRandom === secondRandom || verifyImage.includes(firstRandom)||verifyImage.includes(secondRandom)|| verifyImage.includes(thirdRandom)){
        thirdRandom = pickRandom(0, imageCollection.length);
        firstRandom = pickRandom(0, imageCollection.length);
      secondRandom = pickRandom(0, imageCollection.length);
    }
    verifyImage[0] = firstRandom;
    verifyImage[1] = secondRandom;
    verifyImage[2] = thirdRandom;
    
    var leftImage = document.getElementById('left-image');
    var leftText = document.getElementById('left-text');
    leftImage.src = imageCollection[firstRandom].imageSrc;
    leftText.textContent = imageCollection[firstRandom].imageCaption;
    imageCollection[firstRandom].shown++;
    
    var middleImage = document.getElementById('middle-image')
    var middleText = document.getElementById('middle-text');
    middleImage.src = imageCollection[secondRandom].imageSrc;
    middleText.textContent = imageCollection[secondRandom].imageCaption;
  imageCollection[secondRandom].shown++;
  
  var rightImage = document.getElementById('right-image');
  var rightText = document.getElementById('right-text');
  rightImage.src = imageCollection[thirdRandom].imageSrc;
  rightText.textContent = imageCollection[thirdRandom].imageCaption;
  imageCollection[thirdRandom].shown++;
  
}


function pickRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
//remember we had trouble last time
function tableRender(){
    //render the same data in table form
    var table = document.getElementById('product-results');
    // function totalTheCookies(){
        //     var total = 0
        //     return total
        // }
        // seattleStore.prototype.createHours = createHours;
        
// seattleStore.prototype.renderToPage = renderToPage;



for(var i = 0; i < this.imageCollection.length; i++){
    var tableCell = document.createElement('td');
    var tableRow = document.createElement('tr');
    tableCell = document.createElement('td');
    tableCell.textContent = this.imageCollection[i].imageCaption;
    tableRow.appendChild(tableCell);
    tableCell = document.createElement('td');
    tableCell.textContent = this.imageCollection[i].clicked;
    tableRow.appendChild(tableCell);
    table.appendChild(tableRow);
}
  }
 



//   var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//   // The type of chart we want to create
//   type: 'graph',

//   data: {
//     labels: ['', 'Breakfast', 'Shark', 'Dragon Meat', 'Chtulhu', 'Tauntaun', 'R2-D2', 'Chair', 'Banana', 'Boots', 'Dog Duck', 'Bathroom IPAD', 'Meatball Bubble Gum', 'Pen', 'Pet Sweep', 'Pizza Scissors', 'Kid Sweep', 'Unicorn Meat', 'USB', 'Water Can', 'Wine Glass'],
//     datasets: [{
//       label: 'Which product is best',
//       backgroundColor: 'orange',
//       borderColor: 'purple',
//       data: [{y: 0, x: 9, r:300}, {y: 10, x:20, r:300}, {y:5, x:20, r:300}, {y:2, x: 30, r:300}, {y: 20, x: 5, r:300}, {y:30, x:30, r:300}, {y: 45, x: 45, r:300}, {y:50, x:20, r:600}]
//     }]
//   },
//   // Configuration options go here
//   options: {
//     title: {
//       display: true,
//       text: 'Custom Chart Title',
//     },
//     layout: {
//       padding: {
//         left: 50,
//         right: 0,
//         top: 0,
//         bottom: 0
//       }
//     }
//   }
// });