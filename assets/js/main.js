window.onload = function(){
    // Dinamicko ispisivanje navigacije - POCETAK
    var navText = ["ABOUT US", "MENU", "RESERVATION", "GALLERY", "OUR CHEFS", "CONTACT"];
    var navHref = ["about-us", "restaurant-menu", "reservation", "gallery", "chef", "contact"];

    function displayNav(){
        let html = `<li><a href="index.html">HOME</a></li>`;
        for(let i = 0; i < navText.length; i++){
            html += `
                    <li><a href="#mu-${navHref[i]}">${navText[i]}</a></li>
                    `;
        }
        return html;
        // console.log(html);
    }
    document.querySelector("#top-menu").innerHTML = displayNav();
    // Dinamicko ispisivanje navigacije - KRAJ

    // Dinamicko ispisavanje counter sekcije - POCETAK

    var counterSpan = ["Delicios", "Fresh", "Satisfied"];
    var dataCount = [50, 20, 3000];
    var counterP = ["Meals", "Desserts", "Customers"];

    function displayCounter(){
        let html = "";
        for(let i = 0; i < counterSpan.length; i++){
            html += `
                    <li class="col-md-4 col-sm-4 col-xs-12">
                        <div class="mu-single-counter">
                            <span>${counterSpan[i]}</span>
                            <h3><span class="counter-value" data-count="${dataCount[i]}">0</span><sup>+</sup></h3>
                            <p>${counterP[i]}</p>
                        </div>
                    </li>
                    `
        }
        // console.log(html);
        return html;
    }
    document.querySelector(".mu-counter-nav").innerHTML = displayCounter();
    
    // Dinamicko ispisavanje counter sekcije - KRAJ

    // Dinamicko ispisivanje naziva menija - POCETAK
    var menuText = ["Pizza", "Desserts", "Drinks"];

    function displayMenu(){
        let html = `<li class="active"><a href="#meat" data-toggle="tab">Meat</a></li>`;
        for(let i = 0; i < menuText.length; i++){
           html += `<li><a href="#${menuText[i].toLowerCase()}" data-toggle="tab">${menuText[i]}</a></li>`;
        }
        // console.log(html);
        return html;
    }
    document.querySelector(".nav-tabs").innerHTML = displayMenu();
    // Dinamicko ispisivanje naziva menija - KRAJ

    // Dinamicko ispisivanje Menu Items - POCETAK
    var ids = ["meat", "pizza", "desserts", "drinks"];
    var menuSrc = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg"];
    var menuH4AndAlt = ["Burger With Lettuce and Cheese", "Grilled Steak", "Ribeye", "Tenderloin/Filet Mignon", "Capriccio pizza", "Margarita pizza", "Quattro stagioni pizza", "Greek Pizza", "Chocolate cake ", "Fruit cake", "Fruit salad", "American pancakes", "Jacob's Creek Reserve wine", "Heineken Lager Beer", "Brazilian coffee", "Tea"];
    var menuPrice = ["7.50", "15.00", "23.50", "35.00", "13.00", "10.00", "17.50", "15.00", "6.00", "7.00", "8.50", "11.50", "27.00", "5.50", "4.00", "2.00"];
    var menuDescription = ["A classic bacon burger with lettuce, tomato and a good amount of mayonnaise.", "Everyone knows about grilled steak. Try it and see how juicy and tasty the grilled steak is.", "The rib-eye, sometimes known as scotch fillet is one of the most popular steaks in the world. Try it and see for yourself.", "Filet mignon is a cut of meat taken from the smaller end of the tenderloin, or psoas major of an animal carcass.", "Pizza capricciosa prepared with mozzarella cheese, Italian baked ham, mushroom, artichoke and tomato.", "Pizza Margherita is made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.", "Pizza quattro stagioni is a variety of pizza in Italian cuisine that is prepared in four sections with diverse ingredients.", "Greek Pizza is topped with feta, spinach, and olives for a colorful pie with Mediterranean inspiration.", "Chocolate cake or chocolate gateau is a cake flavored with melted chocolate, cocoa powder, or both.", "Fruit cake is a cake made with dried fruit, nuts, and spices. Try it.", "Fruit salad is a dish consisting of various kinds of fruit. This dessert is full of vitamins.", "American pancakes smeared with fruit syrup and sprinkled with powdered sugar.", "Jacob's Creek Reserve Cabernet Sauvignon is a premium full-bodied wine.", "Heineken Lager Beer with 5% alcohol. Always cold and refreshing.", "Brazilian coffee with a chocolaty roast taste. This coffee has a wonderful aroma.", "Fruit tea, mint tea, chamomile tea. Honey and sugar are served with tea."];
  
    function displayMenuItems(){
      let html = "";
      for(let i = 0; i < ids.length; i++){
          html+= 
                  `
                  <div class="tab-pane fade" id="${ids[i]}">
                      <div class="mu-tab-content-area">
                          <div class="row">`;
          for(let k = 0; k < 2; k++){
              html += 
                      `
                      <div class="col-md-6">
                          <div class="mu-tab-content-left">
                              <ul class="mu-menu-item-nav">
                      `;
              for(let j = 0; j < 2; j++){
                  html += 
                          `
                          <li>
                              <div class="media">
                                  <div class="media-left">
                                      <a href="#">
                                          <img class="media-object" src="assets/img/my-menu/${menuSrc[4*i+2*k+j]}" alt="${menuH4AndAlt[4*i+2*k+j]}"/>
                                      </a>
                                  </div>
                                  <div class="media-body">
                                      <h4 class="media-heading"><a href="#">${menuH4AndAlt[4*i+2*k+j]}</a></h4>
                                      <span class="mu-menu-price">&euro;${menuPrice[4*i+2*k+j]}</span>
                                      <p>${menuDescription[4*i+2*k+j]}</p>
                                  </div>
                              </div>
                          </li>
                          `;
              }
              html += 
                      `
                              </ul>   
                          </div>
                      </div>
                      `;
          }
          html += 
                  ` 
                          </div>
                      </div>
                  </div>
  
                  `;
      }
      return html;
    // console.log(html);
  }

    document.querySelector("#menuItems").innerHTML = displayMenuItems();
    document.querySelector("#menuItems").firstElementChild.classList.add("in", "active");
    // Dinamicko ispisivanje Menu Items - KRAJ

    // Dinamicko ispisivanje forme - POCETAK
  var formType = ["text", "email", "text"];
  var formPlaceholder = ["Full Name", "Email", "Phone Number"];
  var formId = ["tbFullName", "eEmail", "tbNumber"]

  function displayForm(){
    let html = "";
    for(let i = 0; i < formType.length; i++){
      html += 
            `
            <div class="col-md-12">
              <div class="form-group">                       
                <input type="${formType[i]}" class="form-control" placeholder="${formPlaceholder[i]}" id="${formId[i]}" />
              </div>
            </div>`;
    }
    //console.log(html);
    return html;
  }
  var miniForm = displayForm();
  $(miniForm).insertBefore("#formSelect");
    // Dinamicko ispisivanje forme - KRAJ

    // Dinamicko ispisivanje option-a - POCETAK
  function displayOptionTags(){
    let html = 
              `
              <option value="0">How Many?</option>
              <option value="1 Person">1 Person</option>
              `;
    for(let i = 2; i < 11; i++){
      html += `<option value="${i} People">${i} People</option>`;
    }
    console.log(html);
    return html;
  }
  document.querySelector("#select2").innerHTML = displayOptionTags();
    // Dinamicko ispisivanje option-a - KRAJ

    // Regularni izrazi - Rezervacije - POCETAK

      var fullName = document.querySelector("#tbFullName");
      var email = document.querySelector("#eEmail");
      var phoneNumber = document.querySelector("#tbNumber");
    
      var dataReservation = [];
      var errorReservation = [];
    
      var regexFullName = /^[A-ZŠĐČĆŽ][a-zčćžšđ]{2,11}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,15})+$/;
      if(regexFullName.test(fullName)){
        var fullName = document.querySelector("#tbFullName");
        var email = document.querySelector("#eEmail");
        var phoneNumber = document.querySelector("#tbNumber");
      
        var dataReservation = [];
        var errorReservation = [];

      
        var regexFullName = /^[A-ZŠĐČĆŽ][a-zčćžšđ]{2,11}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,15})+$/;
        if(regexFullName.test(fullName)){
          fullName.nextElementSibling.innerHTML = "Ne valja";
        }
        else{
          fullName.nextElementSibling.innerHTML = "Super";
        }
      }
}