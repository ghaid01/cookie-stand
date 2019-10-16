// 'use strict'
// var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var Seattle = {
//     randomInRange: function () {
//         var range = this.maxcust - this.mincust;
//         var rand = (Math.random() * range) + this.mincust;
//         return Math.ceil(rand);
//     },
//     location:'Seattle',

//     mincust: 23,
//     maxcust: 65,
//     avgcookie: 6.3,
//     cookies: [],

//     render: function () {
//         var container = document.getElementById('content-area');
//          var h2 = document.createElement('h2');
//         container.appendChild(h2);

//          h2.textContent = this.location;
//         var ul = document.createElement('ul');
//         container.appendChild(ul);

//         for (var g = 0; g < times.length; g++) {
//             var li =document.createElement('li');
//             ul.appendChild(li);
//             var time = times[g];
//             var cookieSales  = Math.ceil((this.avgcookie) * (this.randomInRange()));
//              //shop.cookies[g] = math.ceil((shop.avgcookie) * (shop.randomInRange()));
//            this.cookies.push(cookieSales);

//             var result = times[g] + ' : ' + this.cookies[g] + ' cookies ';
//             li.textContent = result;
//         }
//     }

// };


// var Tokyo = {
//     randomInRange: function () {
//         var range = this.maxcust - this.mincust;
//         var rand = (Math.random() * range) + this.mincust;
//         return Math.ceil(rand);
//     },
//     location : 'Tokyo',
//     mincust: 3,
//     maxcust: 24,
//     avgcookie: 1.2,
//     cookies: [],
//     render: function () {
//         var container = document.getElementById('content-area');
//         var h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent = this.location;

//         var ul = document.createElement('ul');
//         container.appendChild(ul);
//         for (var g = 0; g < times.length; g++) {
//             var li =document.createElement('li');
//             ul.appendChild(li);
//             var time = times[g];
//             var cookieSales  = Math.ceil((this.avgcookie) * (this.randomInRange()));
//              //shop.cookies[g] = math.ceil((shop.avgcookie) * (shop.randomInRange()));
//            this.cookies.push(cookieSales);

//             var result = times[g] + ' : ' + this.cookies[g] + ' cookies ';
//             li.textContent = result;
//         }
//     }
// };


// var Dubai = {
//     randomInRange: function () {
//         var range = this.maxcust - this.mincust;
//         var rand = (Math.random() * range) + this.mincust;
//         return Math.ceil(rand);
//     },
//     location : 'Dubai',
//     mincust: 11,
//     maxcust: 38,
//     avgcookie: 3.7,
//     cookies: [],
//     render: function () {
//         var container = document.getElementById('content-area');
//         var h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent = this.location;

//         var ul = document.createElement('ul');
//         container.appendChild(ul);
//         for (var g = 0; g < times.length; g++) {
//             var li =document.createElement('li');
//             ul.appendChild(li);
//             var time = times[g];
//             var cookieSales  = Math.ceil((this.avgcookie) * (this.randomInRange()));
//              //shop.cookies[g] = math.ceil((shop.avgcookie) * (shop.randomInRange()));
//            this.cookies.push(cookieSales);

//             var result = times[g] + ' : ' + this.cookies[g] + ' cookies ';
//             li.textContent = result;
//         }
//     }

// };
// var Paris = {
//     randomInRange: function () {
//         var range = this.maxcust - this.mincust;
//         var rand = (Math.random() * range) + this.mincust;
//         return Math.ceil(rand);
//     },
//     location: 'Paris',
//     mincust: 20,
//     maxcust: 38,
//     avgcookie: 2.3,
//     cookies: [],
//     render: function () {
//         var container = document.getElementById('content-area');
//         var h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent = this.location;
//         var ul = document.createElement('ul');
//         container.appendChild(ul);
//         for (var g = 0; g < times.length; g++) {
//             var li =document.createElement('li');
//             ul.appendChild(li);
//             var time = times[g];
//             var cookieSales  = Math.ceil((this.avgcookie) * (this.randomInRange()));
//              //shop.cookies[g] = math.ceil((shop.avgcookie) * (shop.randomInRange()));
//            this.cookies.push(cookieSales);

//             var result = times[g] + ' : ' + this.cookies[g] + ' cookies ';
//             li.textContent = result;
//         }
//     }
// };
// var Lima = {
//     randomInRange: function () {
//         var range = this.maxcust - this.mincust;
//         var rand = (Math.random() * range) + this.mincust;
//         return Math.ceil(rand);
//     },
//     location : 'Lima',
//     mincust: 2,
//     maxcust: 16,
//     avgcookie: 4.6,
//     cookies: [],
//     render: function () {
//         var container = document.getElementById('content-area');
//         var h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent = this.location;

//         var ul = document.createElement('ul');
//         container.appendChild(ul);
//         for (var g = 0; g < times.length; g++) {
//             var li =document.createElement('li');
//             ul.appendChild(li);
//             var time = times[g];
//             var cookieSales  = Math.ceil((this.avgcookie) * (this.randomInRange()));
//              //shop.cookies[g] = math.ceil((shop.avgcookie) * (shop.randomInRange()));
//            this.cookies.push(cookieSales);

//             var result = times[g] + ' : ' + this.cookies[g] + ' cookies ';
//             li.textContent = result;
//         }
//     }


// };



// var shops = [Seattle,Tokyo,Dubai,Paris,Lima];




//  for (var i = 0; i < shops.length; i++) {
// console.log(i);


//     var shop = shops[i];


//     // for (var g = 0; g < times.length; g++) {

//     //     var time = times[g];
//     //     var cookieSales  = Math.ceil((shop.avgcookie) * (shop.randomInRange()));
//     //      //shop.cookies[g] = math.ceil((shop.avgcookie) * (shop.randomInRange()));
//     //     shop.cookies.push(cookieSales);

//     //     var result = times[g] + ' : ' + shop.cookies[g] + ' cookies ';

//    // }
//     console.log(shop.cookies);



// }

// Seattle.render();
// Tokyo.render();
// Dubai.render();
// Paris.render();
// Lima.render();
'use strict';
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var footerRow;
function Location(locationName, minCust, maxCust, avgCookies) {
    this.locationName = locationName;
    this.min = minCust;
    this.max = maxCust;
    this.avgCookie = avgCookies;
    this.hSales = [];
    this.dSales = 0;
    this.generateHSales();

}
Location.prototype.getRandomCount = function () {
    var range = this.max - this.min;
    var rand = Math.random() * range + this.min;
    return Math.ceil(rand);
}
Location.prototype.generateHSales = function () {
    for (var i = 0; i < times.length; i++) {
        var cookiesSoldInHour = Math.ceil(this.getRandomCount() * this.avgCookie);
        this.hSales.push(cookiesSoldInHour);
        this.dSales += cookiesSoldInHour;
    }
}
// location.prototype.render = function () {
// var container = document.getElementById('content-area')
// var article = document.createElement('article');
// container.appendChild(article);
//}
// var table = document.createElement('table');
// article.appendChild(table);
Location.prototype.render = function (table) {
    var tr = document.createElement('tr');
    table.appendChild(tr);

    var td = document.createElement('td');
    tr.appendChild(td);
   console.log('location' ,this.locationName)
    td.textContent = this.locationName;
    for (var i = 0; i < times.length; i++) {
        td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.hSales[i];
// console.log('sales', this.hSales)
    }
    td = document.createElement('td');
    tr.appendChild(td);
    td.textContent =this.dSales;
    console.log('sales', this.dSales)
    

}
function renderHeaderRow(table) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var th = document.createElement('th');
    tr.appendChild(th);
    console.log(times)
    for (var i = 0; i < times.length; i++) {
        console.log("times:",times[i])
        th = document.createElement('th');
        tr.appendChild(th);
        
        th.textContent = times[i];
    }
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = 'Daily Location Total';
}

function renderFooterRow(table) {
    
    var tr = document.createElement('tr');
    table.appendChild(tr);
    footerRow = tr ;
    
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = 'Total';
    var total = 0;
    for (var timeIndex = 0; timeIndex < times.length; timeIndex++) {
        td = document.createElement('td');
        tr.appendChild(td);
        var sum = 0;
      
        for (var locationIndex = 0; locationIndex < shops.length; locationIndex++) {
        var shop = shops[locationIndex]
        sum += shop.hSales[timeIndex];
        console.log('sum', sum)
        td.textContent = sum;
    }
    total += sum;

}
td = document.createElement('td');
tr.appendChild(td);
td.textContent= total; 
}

var seattle = new Location ('Seattle',23,65, 6.5);
var tokyo = new Location ( 'Tokyo', 3, 24, 1.2);
var dubai = new Location ('Dubai',11, 38, 3.7);
var paris = new Location ('Paris',20 , 38, 2.3);
var lima = new Location ('Lima', 2, 16,4.6);
//put the array after not before the defining 

var shops = [seattle, tokyo,dubai,paris,lima];

var container = document.getElementById('content-area');
var table = document.createElement('table');
container.appendChild(table);

renderHeaderRow(table);

for (var i = 0; i < shops.length; i++) {
  
  var shop = shops[i];

  shop.render(table);
}

renderFooterRow(table);
// function renderFooterRow(table) {
//     var td = document.createElement('td');
//     table.appendChild(td);
//     td.textContent('Totals');
// }
function submitButton(event) {
    event.preventDefault();
    var location = event.target.location.value;
    var min = parseInt(event.target.min.value);
    var max = parseInt(event.target.max.value);
    var avgcookies = parseFloat(event.target.avgcookies.value);
    var newShop = new Location(location,min,max,avgcookies);
    
    shops.push(newShop);
    table.removeChild(footerRow);
 newShop.render(table); 
 renderFooterRow(table);

    
    
 
}
var cookieForm = document.getElementById('shopForm');
cookieForm.addEventListener('submit', submitButton);
