var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var Seattle = {
    randomInRange: function () {
        var range = this.maxcust - this.mincust;
        var rand = (Math.random() * range) + this.mincust;
        return Math.ceil(rand);
    },
    location:'Seattle',

    mincust: 23,
    maxcust: 65,
    avgcookie: 6.3,
    cookies: [],

    render: function () {
        var container = document.getElementById('content-area');
         var h2 = document.createElement('h2');
        container.appendChild(h2);

         h2.textContent = this.location;
        var ul = document.createElement('ul');
        container.appendChild(ul);
        
        for (var g = 0; g < times.length; g++) {
            var li =document.createElement('li');
            ul.appendChild(li);
            var time = times[g];
            var cookieSales  = Math.ceil((this.avgcookie) * (this.randomInRange()));
             //shop.cookies[g] = math.ceil((shop.avgcookie) * (shop.randomInRange()));
           this.cookies.push(cookieSales);
    
            var result = times[g] + ' : ' + this.cookies[g] + ' cookies ';
            li.textContent = result;
        }
    }
    
};


var Tokyo = {
    randomInRange: function () {
        var range = this.maxcust - this.mincust;
        var rand = (Math.random() * range) + this.mincust;
        return Math.ceil(rand);
    },
    location : 'Tokyo',
    mincust: 3,
    maxcust: 24,
    avgcookie: 1.2,
    cookies: [],
    render: function () {
        var container = document.getElementById('content-area');
        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = this.location;

        var ul = document.createElement('ul');
        container.appendChild(ul);
        for (var g = 0; g < times.length; g++) {
            var li =document.createElement('li');
            ul.appendChild(li);
            var time = times[g];
            var cookieSales  = Math.ceil((this.avgcookie) * (this.randomInRange()));
             //shop.cookies[g] = math.ceil((shop.avgcookie) * (shop.randomInRange()));
           this.cookies.push(cookieSales);
    
            var result = times[g] + ' : ' + this.cookies[g] + ' cookies ';
            li.textContent = result;
        }
    }
};


var Dubai = {
    randomInRange: function () {
        var range = this.maxcust - this.mincust;
        var rand = (Math.random() * range) + this.mincust;
        return Math.ceil(rand);
    },
    location : 'Dubai',
    mincust: 11,
    maxcust: 38,
    avgcookie: 3.7,
    cookies: [],
    render: function () {
        var container = document.getElementById('content-area');
        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = this.location;

        var ul = document.createElement('ul');
        container.appendChild(ul);
        for (var g = 0; g < times.length; g++) {
            var li =document.createElement('li');
            ul.appendChild(li);
            var time = times[g];
            var cookieSales  = Math.ceil((this.avgcookie) * (this.randomInRange()));
             //shop.cookies[g] = math.ceil((shop.avgcookie) * (shop.randomInRange()));
           this.cookies.push(cookieSales);
    
            var result = times[g] + ' : ' + this.cookies[g] + ' cookies ';
            li.textContent = result;
        }
    }

};
var Paris = {
    randomInRange: function () {
        var range = this.maxcust - this.mincust;
        var rand = (Math.random() * range) + this.mincust;
        return Math.ceil(rand);
    },
    location: 'Paris',
    mincust: 20,
    maxcust: 38,
    avgcookie: 2.3,
    cookies: [],
    render: function () {
        var container = document.getElementById('content-area');
        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = this.location;
        var ul = document.createElement('ul');
        container.appendChild(ul);
        for (var g = 0; g < times.length; g++) {
            var li =document.createElement('li');
            ul.appendChild(li);
            var time = times[g];
            var cookieSales  = Math.ceil((this.avgcookie) * (this.randomInRange()));
             //shop.cookies[g] = math.ceil((shop.avgcookie) * (shop.randomInRange()));
           this.cookies.push(cookieSales);
    
            var result = times[g] + ' : ' + this.cookies[g] + ' cookies ';
            li.textContent = result;
        }
    }
};
var Lima = {
    randomInRange: function () {
        var range = this.maxcust - this.mincust;
        var rand = (Math.random() * range) + this.mincust;
        return Math.ceil(rand);
    },
    location : 'Lima',
    mincust: 2,
    maxcust: 16,
    avgcookie: 4.6,
    cookies: [],
    render: function () {
        var container = document.getElementById('content-area');
        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = this.location;

        var ul = document.createElement('ul');
        container.appendChild(ul);
        for (var g = 0; g < times.length; g++) {
            var li =document.createElement('li');
            ul.appendChild(li);
            var time = times[g];
            var cookieSales  = Math.ceil((this.avgcookie) * (this.randomInRange()));
             //shop.cookies[g] = math.ceil((shop.avgcookie) * (shop.randomInRange()));
           this.cookies.push(cookieSales);
    
            var result = times[g] + ' : ' + this.cookies[g] + ' cookies ';
            li.textContent = result;
        }
    }


};



var shops = [Seattle,Tokyo,Dubai,Paris,Lima];




 for (var i = 0; i < shops.length; i++) {
console.log(i);


    var shop = shops[i];


    // for (var g = 0; g < times.length; g++) {
        
    //     var time = times[g];
    //     var cookieSales  = Math.ceil((shop.avgcookie) * (shop.randomInRange()));
    //      //shop.cookies[g] = math.ceil((shop.avgcookie) * (shop.randomInRange()));
    //     shop.cookies.push(cookieSales);

    //     var result = times[g] + ' : ' + shop.cookies[g] + ' cookies ';
        
   // }
    console.log(shop.cookies);
    
    
    
}

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
