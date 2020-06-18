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
// var income = document.getElementById("income").getContext("2d");
// new Chart(income).Bar(barData);

function DisplayProducts(imageSource, caption){
    this.clicked = 0;
    this.shown = 0;
    this.imageSrc = imageSource;
    this.imageCaption = caption;
  
    imageCollection.push(this);
}
    new DisplayProducts('breakfast.jpg', 'breakfast Onthe go(select meals)');
    new DisplayProducts('shark.jpg', 'What would it be like to be inside a Shark');
    new DisplayProducts('dragon.jpg', 'Dragon Meat(may cause fire breath)');
    new DisplayProducts('cthulhu.jpg', 'Chtulhu');
    new DisplayProducts('tauntaun.jpg', 'Sleep Like Han Solo');
    new DisplayProducts('bag.jpg', 'R2-D2');
    new DisplayProducts('chair.jpg', 'I would not sit on this');
    new DisplayProducts('banana.jpg', 'because cutting a bannana is too hard');
    new DisplayProducts('boots.jpg', 'Boots if you have no toes');
    new DisplayProducts('dog-duck.jpg', 'Wish you bought a Duck');
    new DisplayProducts('bathroom.jpg', 'Never stop playing Candy Crush');
    new DisplayProducts('bubblegum.jpg', 'Meatball Bubble Gum (yum)');
    new DisplayProducts('pen.jpg', 'Pen Utensil');
    new DisplayProducts('pet-sweep.jpg', 'Pet Sweep(they make a messs they can clean it up)');
    new DisplayProducts('scissors.jpg', 'Pizza Scissors(Im sure you have a place to store this)');
    new DisplayProducts('sweep.png', 'Kid Sweep(they will think its fun)');
    new DisplayProducts('unicorn.jpg', 'Unicorn Meat(very rare)');
    new DisplayProducts('usb.gif', 'USB(or is it?)');
    new DisplayProducts('water-can.jpg', 'Water Can(the gift that keeps on getting re gifted)');
    new DisplayProducts('wine-glass.jpg', 'Wine Glass(Drink responsibly so dont buy this)');




    
    var translateProductsToString = localStorage.getItem('storedProducts');

    var productsFromStorage = JSON.parse(translateProductsToString);

    if(productsFromStorage){
      imageCollection = productsFromStorage;
    }
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
        totalClicks++;
        if(totalClicks === maxClicks){
          //IMPORTANT - how to stop an event handler
          productImageSection.removeEventListener('click', trackAndRerack);
          createChart();
          
          var stringyProductSelection = JSON.stringify(imageCollection);
          console.log('stringy array', translateProductsToString);
          // 2. save it
          localStorage.setItem('product images', stringyProductSelection);
          //if statement is not compiling to true so click proprty is not being updated
          // tableRender();
          //  renderTheChart();
        }
        var targetSrc = event.target.getAttribute('src');
        for(var i = 0; i <  imageCollection.length; i++){
          console.log(targetSrc, imageCollection[i].imageSrc)
          //this, left side, (imageCollection[i].imageSource)
          if (imageCollection[i].imageSrc === targetSrc) {
            imageCollection[i].clicked++;
          }
        }
        
        // console.log(Math.max('*****************', ...imageCollection[i].clicked));
    
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


createHeader();
for(var i = 0; i < this.imageCollection.length; i++){
    var tableCell = document.createElement('td');
    var tableRow = document.createElement('tr');
    tableCell = document.createElement('td');
    tableCell.textContent = this.imageCollection[i].imageCaption;
    tableRow.appendChild(tableCell);
    tableCell = document.createElement('td');
    tableCell.textContent = this.imageCollection[i].clicked;
    tableRow.appendChild(tableCell);
    tableCell = document.createElement('td');
    tableCell.textContent = this.imageCollection[i].shown;
    tableRow.appendChild(tableCell);
    table.appendChild(tableRow);
}
  }
 
  function createHeader(){
    var header = document.getElementById('productImagese');

    var tableRow = document.createElement('tr');

    var tableCell = document.createElement('td');

    tableCell.textContent = 'Times clicked';

    tableRow.appendChild(tableCell);

    for(var i = 0; i < imageCollection.length; i ++){
        tableCell = document.createElement('td');
        tableCell.textContent = 'Times seen';
        tableRow.appendChild(tableCell);
    }
    // header.appendChild(tableRow);
}




// function renderTheChart(){

//     var productNames =[];
//   for(var i = 0; i < imageCollection.length; i++){
//     productNames.push(imageCollection[i].imageCaption);
//   }

// var productClicks = [];
//   for(i = 0; i < imageCollection.length; i++){
//     productClicks.push(imageCollection[i].clicked);
//   }



function chartTotals(){
DisplayProducts.productNames =[];
for(var i = 0; i < imageCollection.length; i++){
  DisplayProducts.productNames.push(imageCollection[i].imageCaption);
}

//mission set

DisplayProducts.productsShown = [];
for(i = 0; i < imageCollection.length; i++){
  DisplayProducts.productsShown.push(imageCollection[i].shown);
}

DisplayProducts.productClicks = [];
for(i = 0; i < imageCollection.length; i++){
  DisplayProducts.productClicks.push(imageCollection[i].clicked);
}
}
function createChart(){
  chartTotals();
  console.log('product names', DisplayProducts.productNames)
console.log('products clicked', DisplayProducts.productClicks)
var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: { 
      labels: DisplayProducts.productNames,
      datasets: [{
        label: 'pic Clicks',
        data: DisplayProducts.productClicks,
        backgroundColor: [
          'rgba(' + 255 + ', ' +99 + ', ' + 132 +', 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      },
      {
        label: 'products Shown',
        data: DisplayProducts.productsShown,
        backgroundColor: [
          'rgba(' + 255 + ', ' + 99 + ', ' + 132 + ', 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
        type: 'bar',
      },
      {
     
      }]
    },
    options: {
      // https://stackoverflow.com/questions/26257268/click-events-on-pie-charts-in-chart-js
      // onClick: function (event){
      //   console.log(event);
      //   console.log(myChart.getElementsAtEvent(event));
      // },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


//         backgroundColor: 'blue',
//         borderColor: 'purple',
//         data: [{y: 0, x: 9, r:300}, {y: 10, x:20, r:300}, {y:5, x:20, r:300}, {y:2, x: 30, r:300}, {y: 20, x: 5, r:300}, {y:30, x:30, r:300}, {y: 45, x: 45, r:300}, {y:50, x:20, r:600}]
//       }]
//   },
// //   Configuration options go here
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
// })
// }
//mission 
//brainstorm with classmates on how to implement local storage on to this app
//find away to get top result to render
//
