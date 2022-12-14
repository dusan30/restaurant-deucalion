window.onload = function () {

  // DYNAMIC NAVIGATION MENU - START
  var navText = ["ABOUT US","MENU", "RESERVATION", "GALLERY", "OUR CHEFS", "CONTACT", "AUTHOR"];

  var navHref = ["about-us", "restaurant-menu", "reservation", "gallery", "chef", "contact", "author"];

  function displayNav() {
    let html = `<li><a href="index.html">HOME</a></li>`;
    for (let i = 0; i < navText.length; i++) {
      html += `
                    <li><a href="#mu-${navHref[i]}">${navText[i]}</a></li>
                    `;
    }
    return html;
  }
  document.querySelector("#top-menu").innerHTML = displayNav();
  // DYNAMIC NAVIGATION MENU - END

  // DYNAMIC COUNTER SECTION - START
  var counterSpan = ["Delicios", "Fresh", "Satisfied"];
  var dataCount = [50, 20, 3000];
  var counterP = ["Meals", "Desserts", "Customers"];

  function displayCounter() {
    let html = "";
    for (let i = 0; i < counterSpan.length; i++) {
      html += `
                    <li class="col-md-4 col-sm-4 col-xs-12">
                        <div class="mu-single-counter">
                            <span>${counterSpan[i]}</span>
                            <h3><span class="counter-value" data-count="${dataCount[i]}">0</span><sup>+</sup></h3>
                            <p>${counterP[i]}</p>
                        </div>
                    </li>
                    `;
    }
    return html;
  }
  document.querySelector(".mu-counter-nav").innerHTML = displayCounter();
// DYNAMIC COUNTER SECTION - END

// DYNAMIC OFFERS - START
let offers = ["Delicious food", "Pleasant atmosphere", "Beautiful sea view", "Music program every weekend from 6 pm"];

function displayOffers(){
  let html = "";
  for(let i = 0; i < offers.length; i++){
    html += `<li>${offers[i]}</li>`;
  }
  return html;
}
document.querySelector("#restaurantOffers").innerHTML = displayOffers();
// DYNAMIC OFFERS - END

  // DYNAMIC MENU NAMES - START
  var menuText = ["Pizza", "Desserts", "Drinks"];

  function displayMenu() {
    let html = `<li class="active"><a href="#meat" data-toggle="tab">Meat</a></li>`;
    for (let i = 0; i < menuText.length; i++) {
      html += `<li><a href="#${menuText[i].toLowerCase()}" data-toggle="tab">${
        menuText[i]
      }</a></li>`;
    }
    return html;
  }
  document.querySelector(".nav-tabs").innerHTML = displayMenu();
  // DYNAMIC MENU NAMES - END

  // DYNAMIC MENU ITEMS - START
  var ids = ["meat", "pizza", "desserts", "drinks"];

  var menuSrc = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg"
  ];
  var menuH4AndAlt = ["Burger With Lettuce and Cheese", "Grilled Steak", "Ribeye", "Tenderloin/Filet Mignon", "Capriccio pizza", "Margarita pizza", "Quattro stagioni pizza", "Greek Pizza", "Chocolate cake", "Fruit cake", "Fruit salad", "American pancakes", "Jacob's Creek Reserve wine", "Heineken Lager Beer", "Brazilian coffee", "Tea"];
  var menuPrice = ["7.50", "15.00", "23.50", "35.00", "13.00", "10.00", "17.50", "15.00", "6.00", "7.00", "8.50", "11.50", "27.00", "5.50", "4.00", "2.00"];
  var menuDescription = [
    "A classic bacon burger with lettuce, tomato and a good amount of mayonnaise.",
    "Everyone knows about grilled steak. Try it and see how juicy and tasty the grilled steak is.",
    "The rib-eye, sometimes known as scotch fillet is one of the most popular steaks in the world. Try it and see for yourself.",
    "Filet mignon is a cut of meat taken from the smaller end of the tenderloin, or psoas major of an animal carcass.",
    "Pizza capricciosa prepared with mozzarella cheese, Italian baked ham, mushroom, artichoke and tomato.",
    "Pizza Margherita is made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
    "Pizza quattro stagioni is a variety of pizza in Italian cuisine that is prepared in four sections with diverse ingredients.",
    "Greek Pizza is topped with feta, spinach, and olives for a colorful pie with Mediterranean inspiration.",
    "Chocolate cake or chocolate gateau is a cake flavored with melted chocolate, cocoa powder, or both.",
    "Fruit cake is a cake made with dried fruit, nuts, and spices. Try it.",
    "Fruit salad is a dish consisting of various kinds of fruit. This dessert is full of vitamins.",
    "American pancakes smeared with fruit syrup and sprinkled with powdered sugar.",
    "Jacob's Creek Reserve Cabernet Sauvignon is a premium full-bodied wine.",
    "Heineken Lager Beer with 5% alcohol. Always cold and refreshing.",
    "Brazilian coffee with a chocolaty roast taste. This coffee has a wonderful aroma.",
    "Fruit tea, mint tea, chamomile tea. Honey and sugar are served with tea."];

  function displayMenuItems() {
    let html = "";
    for (let i = 0; i < ids.length; i++) {
      html += `
                  <div class="tab-pane fade" id="${ids[i]}">
                      <div class="mu-tab-content-area">
                          <div class="row">`;
      for (let k = 0; k < 2; k++) {
        html += `
                      <div class="col-md-6" >
                          <div class="mu-tab-content-left">
                              <ul class="mu-menu-item-nav">
                      `;
        for (let j = 0; j < 2; j++) {
          html += `
                          <li>
                              <div class="media">
                                  <div class="media-left">
                                      <a href="#mu-restaurant-menu">
                                          <img class="media-object border-orange" src="assets/img/my-menu/${
                                            menuSrc[4 * i + 2 * k + j]
                                          }" alt="${
            menuH4AndAlt[4 * i + 2 * k + j]
          }"/>
                                      </a>
                                  </div>
                                  <div class="media-body">
                                      <h4 class="media-heading"><a href="#mu-restaurant-menu">${
                                        menuH4AndAlt[4 * i + 2 * k + j]
                                      }</a></h4>
                                      <span class="mu-menu-price">&euro;${
                                        menuPrice[4 * i + 2 * k + j]
                                      }</span>
                                      <p>${
                                        menuDescription[4 * i + 2 * k + j]
                                      }</p>
                                  </div>
                              </div>
                          </li>
                          `;
        }
        html += `
                              </ul>   
                          </div>
                      </div>
                      `;
      }
      html += ` 
                          </div>
                      </div>
                  </div>
  
                  `;
    }
    return html;
  }
  document.querySelector("#menuItems").innerHTML = displayMenuItems();
  document.querySelector("#menuItems").firstElementChild.classList.add("in", "active");
// DYNAMIC MENU ITEMS - END

// DYNAMIC OPTION TAGS FOR THE NUMBER OF GUESTS - START
  function displayOptionTags() {
    let html = `
              <option value="0">How Many?</option>
              <option value="1 Person">1 Person</option>
              `;
    for (let i = 2; i < 11; i++) {
      html += `<option value="${i} People">${i} People</option>`;
    }
    return html;
  }
  document.querySelector("#select2").innerHTML = displayOptionTags();
// DYNAMIC OPTION TAGS FOR THE NUMBER OF GUESTS - END

// VARIABLES FOR VALIDATION - START
  let checkName = 0;
  let checkEmail = 0;
  let checkNumber = 0;
  let checkDate = 0;
  let checkName2 = 0;
  let checkGender2 = 0;
  let checkEmail2 = 0;
  let checkSubject2 = 0;
  let checkMessage2 = 0;
  let fullName = document.querySelector("#tbFullName");
  let email = document.querySelector("#eEmail");
  let number = document.querySelector("#select2");
  let date = document.querySelector("#datepicker");
  var reservation = document.querySelector("#res");
  let name2 = document.querySelector("#name");
  let gender2 = document.getElementsByName("rbGender");
  let email2 = document.querySelector("#email");
  let subject2 = document.querySelector("#subject");
  let message2 = document.querySelector("#message");
  var contact2 = document.querySelector("#res2");
  // VARIABLES FOR VALIDATION - END

// REGULAR EXPRESSIONS - START
  var regexFullName = /^[A-ZŠĐČĆŽ][a-zčćžšđ]{2,11}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,15})+$/;
  var regexEmail = /^[a-z][\w\.]*\@[a-z0-9]{3,18}(\.[a-z]{3,5})?(\.[a-z]{2,3})$/;
  var regexSubject = /^[A-ZČĆŽŠĐ]([A-zčćžšđ\d\.\,\s]){2,29}$/;
  var regexMessage = /[A-z]+/;
   // REGULAR EXPRESSIONS - END

   // VALIDATION FOR RESERVATION - START
  document.querySelector("#btnReservation").addEventListener("click", makeAReservation);

  function makeAReservation() {

    // Check fullName
    if (fullName.value == "") {
      fullName.classList.remove("greenBorder");
      fullName.classList.add("redBorder");
      fullName.nextElementSibling.textContent = "This field cannot be empty.";
      fullName.nextElementSibling.classList.add("displayBlock");
      checkName = 1;
    } else if (!regexFullName.test(fullName.value)) {
      fullName.value = "";
      fullName.classList.remove("greenBorder");
      fullName.classList.add("redBorder");
      fullName.nextElementSibling.textContent = "Not a valid name. The first letter of the name and the last name must be a capital letter.";
      fullName.nextElementSibling.classList.add("displayBlock");
      checkName = 1;
    } else {
      fullName.classList.remove("redBorder");
      fullName.classList.add("greenBorder");
      fullName.nextElementSibling.textContent = "";
      fullName.nextElementSibling.classList.remove("displayBlock");
      checkName = 0;
    }

    // Check Email
    if (email.value == "") {
      email.classList.remove("greenBorder");
      email.classList.add("redBorder");
      email.nextElementSibling.textContent = "This field cannot be empty.";
      email.nextElementSibling.classList.add("displayBlock");
      checkEmail = 1;
    } else if (!regexEmail.test(email.value)) {
      email.value = "";
      email.classList.remove("greenBorder");
      email.classList.add("redBorder");
      email.nextElementSibling.textContent = "Not a valid email address. (eg. somebody@example.com)";
      email.nextElementSibling.classList.add("displayBlock");
      checkEmail = 1;
    } else {
      email.classList.remove("redBorder");
      email.classList.add("greenBorder");
      email.nextElementSibling.textContent = "";
      email.nextElementSibling.classList.remove("displayBlock");
      checkEmail = 0;
    }

    // Check Number
    if (number.options[number.options.selectedIndex].value == "0") {
      number.classList.remove("greenBorder");
      number.classList.add("redBorder");
      number.nextElementSibling.textContent = "This field cannot be empty.";
      number.nextElementSibling.classList.add("displayBlock");
      checkNumber = 1;
    } else {
      number.classList.remove("redBorder");
      number.classList.add("greenBorder");
      number.nextElementSibling.textContent = "";
      number.nextElementSibling.classList.remove("displayBlock");
      checkNumber = 0;
    }

    // Check Date
    if (date.value == "") {
      date.classList.remove("greenBorder");
      date.classList.add("redBorder");
      date.nextElementSibling.textContent = "This field cannot be empty.";
      date.nextElementSibling.classList.add("displayBlock");
      checkDate = 1;
    } else {
      date.classList.remove("redBorder");
      date.classList.add("greenBorder");
      date.nextElementSibling.textContent = "";
      date.nextElementSibling.classList.remove("displayBlock");
      checkDate = 0;
    }

    // Final Check - RESERVATION
    if (checkName + checkEmail + checkNumber + checkDate == 0) {
      console.log("Reservation successful.");
      reservation.classList.remove("hideText");
      reservation.classList.add("showText");
    } else {
      reservation.classList.remove("showText");
      reservation.classList.add("hideText");
      return false;
    }
  }
  // VALIDATION FOR RESERVATION - END
 
  // DYNAMIC GALLERY IMAGES - START
  function displayGalleryImages() {
    var gallerySrc = [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
    ];
    var galleryAlt = [
      "Pizza",
      "Burger",
      "Wine",
      "Ribeye",
      "Chocolate Cake",
      "Grilled Steak",
      "Coffee",
      "Tenderloin/Filet Mignon",
      "Fruit Cake",
    ];

    let html = `<div class="mu-gallery-body">`;
    for (let i = 0; i < gallerySrc.length; i++) {
      html += `<div class="mu-single-gallery col-md-4">
          <div class="mu-single-gallery-item">
            <figure class="mu-single-gallery-img">
              <div class="mu-imglink">
                <img alt="${galleryAlt[i]}" src="assets/img/gallery/${gallerySrc[i]}" class="border-orange"/>
                 <div class="mu-single-gallery-info">
                    <img class="mu-view-btn" src="assets/img/plus.png" alt="plus icon img" />
                </div> 
              </div>
            </figure>            
          </div>
      </div>`;
    }
    html += `</div>`;
    return html;
  }
 
  document.querySelector(".mu-gallery-content").innerHTML = displayGalleryImages();
  // DYNAMIC GALLERY IMAGES - END

  // VIEW IMAGES IN A LARGER FORMAT - START
  var pictures = document.querySelectorAll(".mu-imglink");
  
  // Dohvatio sam div sa ID-jem overlay koji sluzi za prikazivanje slika u krupnom planu.
  // Klasa main-image je div koji prikazuje sliku na koju sam kliknuo.
  // Klasa other-image - div koji prikazuje ostale slike iz galerije.

  let overlay = document.querySelector("#overlay");
  let mainImage = document.querySelector(".main-image");
  let otherImage = document.querySelector(".other-images");

  let relatedImages = null;

  function refreshImages() {
    relatedImages = document.querySelectorAll(".related-images");

    relatedImages.forEach((image) => {
      image.addEventListener("click", (event) => {
        let imagePath = event.target;
        let imageIndex = Number(imagePath.src.substring(imagePath.src.lastIndexOf("/")).split(".")[0].substring(1)) - 1;
        showImage(imagePath, imageIndex);
      });
    });
  }
  /**
   * Funkcija za prikazivanje slike u krupnom planu.
   * Takodje funkcija koja prikazuje i prethodnu i sledecu sliku u odnosu na trenutnu.
   * 
   * 
   * @param {div} imgContainer 
   * @param {number} index 
   */
  function showImage(imgContainer, index) {
    let img;
    // Napravljen je if/else blok zbog prvog klika koji se odnosi div (klikcemo na div, ne na sliku),.
    // Ostali klikovi ce unutar overlay-a div-a biti klikovi koji direktno uticu na img tag.
    if (!imgContainer.src) {
      img = imgContainer.children[0];
    } else {
      img = imgContainer;
    }
    overlay.classList.add("overlay");
    overlay.classList.remove("d-none");

    mainImage.innerHTML = `<img src="${img.src}" alt=${img.alt} width=500 />`;

    let html = "";

    // Ova dva if-a proveravaju da li postoji prethodna, odnosno sledeca slika.
    // Ako jedno od ta dva ne postoji, nece se ni ispisati.
    if (pictures[index - 1]) {
      html += `<img class="related-images" src="${
        pictures[index - 1].children[0].src
      }" alt=${pictures[index - 1].children[0].alt} width=150 />`;
    }

    if (pictures[index + 1]) {
      html += `<img class="related-images" src="${
        pictures[index + 1].children[0].src
      }" alt=${pictures[index + 1].children[0].alt} width=150 />`;
    }

    otherImage.innerHTML = html;
    refreshImages();
  }

  for (let i = 0; i < pictures.length; i++) {
    $(pictures[i]).click(function (event) {
      event.preventDefault();

      showImage(pictures[i], i);
      refreshImages();
    });
  }

  $(overlay).click(function (event) {
    event.target.classList.remove("overlay");
    event.target.classList.add("d-none");
  });
  // VIEW IMAGES IN A LARGER FORMAT - END
  
  // DYNAMIC TESTIMONIALS - START
  var customerSay = [
    "The food is great! The staff working in the restaurant is phenomenal. I can't wait to come again!",
    "What a beautiful view of the sea, relaxed atmosphere, delicious food, hospitable staff. Everything is on level! All praise for this restaurant!",
    "I can say that I am very satisfied with the food and the ambience in the restaurant. The prices are very affordable, the location of the restaurant is in a great place. If I come to Barcelona again, I will definitely visit this restaurant at least one more time."
  ];
  var customerName = ["Ben White", "Alvaro Pique", "Serena Maddison"];

  function displayTestimonials() {
    let html = `<ul class="mu-testimonial-slider">`;
    for (let i = 0; i < customerSay.length; i++) {
      html += `
                  <li>
                  <div class="mu-testimonial-single">                   
                    <div class="mu-testimonial-info">
                      <p>${customerSay[i]}</p>
                    </div>
                    <div class="mu-testimonial-bio">
                      <p>- ${customerName[i]}</p>                      
                    </div>
                  </div>
                </li>
                  `;
    }
    html += `</ul>`;
    return html;
  }
  // jQuery FOR TESTIMONIAL - START
  document.querySelector("#testimonialList").innerHTML = displayTestimonials();
  jQuery(".mu-testimonial-slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
  });
   // jQuery FOR TESTIMONIAL - END
// DYNAMIC TESTIMONIALS - END

  // DYNAMIC CHEFS - START
  var chefName = [
    "Filip Najdanović",
    "Dušan Novicić",
    "Nevena Radovanović",
    "Novak Nešković",
    "Milan Ivić",
    "Vlada Ivančević",
    "Ivan Ivančević",
  ];
  var chefSrc = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

  var chefJob = [
    "Head Chef",
    "Pizza Chef",
    "Cake Chef",
    "Grill Chef",
    "Pizza Chef",
    "Grill Chef",
    "Cake Chef",
  ];

  function displayChefs() {
    let html = "";
    for (let i = 0; i < chefName.length; i++) {
      html += `<li>
          <div class="mu-single-chef">
            <figure class="mu-single-chef-img">
              <img src="assets/img/my-chefs/${chefSrc[i]}" alt="chef" class="border-orange"/>
            </figure>
            <div class="mu-single-chef-info">
              <h4>${chefName[i]}</h4>
              <span>${chefJob[i]}</span>
            </div>
          </div>
        </li>`;
    }
    return html;
  }
  document.querySelector(".mu-chef-nav").innerHTML = displayChefs();
  // DYNAMIC CHEFS - END

  // VALIDATION CONTACT - START
  document.querySelector("#btnContact").addEventListener("click", sendAMessage);

  function sendAMessage(){

    // Check name
    if (name2.value == "") {
      name2.classList.remove("greenBorder");
      name2.classList.add("redBorder");
      name2.nextElementSibling.textContent = "This field cannot be empty.";
      name2.nextElementSibling.classList.add("displayBlock");
      checkName2 = 1;
    } else if (!regexFullName.test(name2.value)) {
      name2.value = "";
      name2.classList.remove("greenBorder");
      name2.classList.add("redBorder");
      name2.nextElementSibling.textContent = "Not a valid name. The first letter of the name and the last name must be a capital letter.";
        name2.nextElementSibling.classList.add("displayBlock");
        checkName2 = 1;
    } else {
      name2.classList.remove("redBorder");
      name2.classList.add("greenBorder");
      name2.nextElementSibling.textContent = "";
      name2.nextElementSibling.classList.remove("displayBlock");
      checkName2 = 0;
    }

    // Check Gender
    var genderValue = "";
    for(let i = 0; i < gender2.length; i++){
        if(gender2[i].checked){
          genderValue = gender2[i].value;
            break;
        }
     }

    if(genderValue == ""){
      gender2[0].parentElement.parentElement.parentElement.nextElementSibling.classList.remove("greenBorder");
      gender2[0].parentElement.parentElement.parentElement.nextElementSibling.classList.add("redBorder");
      gender2[0].parentElement.parentElement.parentElement.nextElementSibling.textContent = "You must select at least one option.";
      gender2[0].parentElement.parentElement.parentElement.nextElementSibling.classList.add("displayBlock");
      checkGender2 = 1;
    }
    else{
      gender2[0].parentElement.parentElement.parentElement.nextElementSibling.classList.remove("redBorder");
      gender2[0].parentElement.parentElement.parentElement.nextElementSibling.classList.add("greenBorder");
      gender2[0].parentElement.parentElement.parentElement.nextElementSibling.textContent = "";
      gender2[0].parentElement.parentElement.parentElement.nextElementSibling.classList.remove("displayBlock");
      checkGender2 = 0;
    }

    // Check Email
    if (email2.value == "") {
      email2.classList.remove("greenBorder");
      email2.classList.add("redBorder");
      email2.nextElementSibling.textContent = "This field cannot be empty.";
      email2.nextElementSibling.classList.add("displayBlock");
      checkEmail2 = 1;
    } else if (!regexEmail.test(email2.value)) {
      email2.value = "";
      email2.classList.remove("greenBorder");
      email2.classList.add("redBorder");
      email2.nextElementSibling.textContent =
        "Not a valid email address. (eg. somebody@example.com)";
        email2.nextElementSibling.classList.add("displayBlock");
      checkEmail2 = 1;
    } else {
      email2.classList.remove("redBorder");
      email2.classList.add("greenBorder");
      email2.nextElementSibling.textContent = "";
      email2.nextElementSibling.classList.remove("displayBlock");
      checkEmail2 = 0;
    }

    // Check Subject
    if (subject2.value == "") {
      subject2.classList.remove("greenBorder");
      subject2.classList.add("redBorder");
      subject2.nextElementSibling.textContent = "This field cannot be empty.";
      subject2.nextElementSibling.classList.add("displayBlock");
      checkSubject2 = 1;
    } else if (!regexSubject.test(subject2.value)) {
      subject2.value = "";
      subject2.classList.remove("greenBorder");
      subject2.classList.add("redBorder");
      subject2.nextElementSibling.textContent =
        "The subject field must start with a letter and have between 3 and 30 characters..";
        subject2.nextElementSibling.classList.add("displayBlock");
        checkSubject2 = 1;
    } else {
      subject2.classList.remove("redBorder");
      subject2.classList.add("greenBorder");
      subject2.nextElementSibling.textContent = "";
      subject2.nextElementSibling.classList.remove("displayBlock");
      checkSubject2 = 0;
    }

    // Check Message
    if (message2.value == "") {
      message2.classList.remove("greenBorder");
      message2.classList.add("redBorder");
      message2.nextElementSibling.textContent = "This field cannot be empty.";
      message2.nextElementSibling.classList.add("displayBlock");
      checkMessage2 = 1;
    }else if (!regexMessage.test(message2.value)) {
      message2.value = "";
      message2.classList.remove("greenBorder");
      message2.classList.add("redBorder");
      message2.nextElementSibling.textContent = "The message field must contain at least one letter.";
      message2.nextElementSibling.classList.add("displayBlock");
      checkMessage2 = 1;
    }
    else {
      message2.classList.remove("redBorder");
      message2.classList.add("greenBorder");
      message2.nextElementSibling.textContent = "";
      message2.nextElementSibling.classList.remove("displayBlock");
      checkMessage2 = 0;
    }

    // Final Check - CONTACT
    if (checkName2 + checkGender2 + checkEmail2 + checkSubject2 + checkMessage2 == 0) {
      console.log("Message was sent.");
      contact2.classList.remove("hideText");
      contact2.classList.add("showText");
    } else {
      contact2.classList.remove("showText");
      contact2.classList.add("hideText");
      return false;
    }
  }
   // VALIDATION CONTACT - END

   // DYNAMIC FOOTER - START
  let socialNetworksHref1 = ["https://www.facebook.com/", "https://twitter.com/", "https://www.instagram.com/", "https://www.youtube.com/"];
  let socialNetworksIcons1 = ["facebook", "twitter", "instagram", "youtube"];
  let socialNetworksHref2 = ["sitemap.xml", "rss.xml", "#"];
  let socialNetworksIcons2 = ["sitemap", "rss", "file"];
  function displayFooter(){
    let html = "";

    for(let i = 0; i < socialNetworksHref1.length; i++){
      html += `<a href="${socialNetworksHref1[i]}" target="_blank"><span class="fa fa-${socialNetworksIcons1[i]}"></span></a>`;
    }
    html += "<div>";
    for(let j = 0; j < socialNetworksHref2.length; j++){
      html += `<a href="${socialNetworksHref2[j]}" target="_blank"><span class="fa fa-${socialNetworksIcons2[j]}"></span></a>`;
    }
    html += "</div>";

    return html;
  }
  console.log(displayFooter());

  document.querySelector("#socialNetworks").innerHTML = displayFooter();
   // DYNAMIC FOOTER - END

  // DYNAMIC AUTHOR SKILLS - START
  let skills = ["HTML, CSS", "Bootstrap, Materialize", "Javascript, jQuery","PHP", "SQL", "C", "C#"];
  function displaySkills(){
    let html = "";
    for(let i = 0; i < skills.length; i++){
      html += `<li>${skills[i]}</li>`;
    }
    return html;
  }

  document.querySelector("#authorSkills").innerHTML = displaySkills();
  $("#checkSkills").click(function(){
    $("#authorSkills").toggle();
  })
  // DYNAMIC AUTHOR SKILLS - END

  // SCROLL to TOP - START
  $(document).ready(function () {
    $("a[href=#]").click(function () {
      $.scrollTo(100, "slow");
      return false;
    });
  });
  // SCROLL to TOP - END
};
