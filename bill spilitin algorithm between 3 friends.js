//for equal payment button
        function add() {
            let food = document.getElementById('food').value;
            let price = document.getElementById('price').value;
            let f1 = price/3;
            let f2 = price/3;
            let f3 = price/3;
            let tbody = document.querySelector('#dtable tbody');
            tbody.appendChild(createRow(food, price,f1,f2,f3));
          }
     
  //for friend 1 button
          function add1() {
            let food = document.getElementById('food').value;
            let price = document.getElementById('price').value;
            let f1 = price;
            let f2 = (" ");
            let f3 = (" ");
            let tbody = document.querySelector('#dtable tbody');
            tbody.appendChild(createRow(food, price,f1,f2,f3));
          }
    
  //for friend 2 button
          function add2() {
            let food = document.getElementById('food').value;
            let price = document.getElementById('price').value;
            let f1 = (" ");
            let f2 = price;
            let f3 = (" ");
            let tbody = document.querySelector('#dtable tbody');
            tbody.appendChild(createRow(food, price,f1,f2,f3));
          }
       
  //for friend 3 button
          function add3() {
            let food = document.getElementById('food').value;
            let price = document.getElementById('price').value;
            let f1 = (" ");
            let f2 = (" ");  
            let f3 = price;
            let tbody = document.querySelector('#dtable tbody');
            tbody.appendChild(createRow(food, price,f1,f2,f3));
          }


          function createRow(food, price,f1,f2,f3) {
            let tr = document.createElement('tr');
            tr.appendChild(createTd(food));
            tr.appendChild(createTd(price));
            tr.appendChild(createTd(f1));
            tr.appendChild(createTd(f2));
            tr.appendChild(createTd(f3));
            return tr;
       
          }

          function createTd(value) {
            let td = document.createElement('td');
            td.innerText = value;
            return td;
           
          }