var categories = [
    {
        title: "Electronic Devices",
        titletwo:"Donate a Device",
        icon: "/img/categories/icon/deviceicon.jpg",
        description: "Make a positive impact by donating your unused or unwanted electronic devices.Help us reduce electronic waste and bridge the digital divide. Your old devices can find new life in the hands of those in need.",
        ready:"Ready to give? Click below to donate",
        imageSrc:"/img/categories/img/device.jpg"
    },
    {
        title: "BOOKS",
        titletwo:"Donate a Book",
        icon: "/img/categories/icon/bookicon.png",
        description: "Your generous contributions can spark imagination, nurture curiosity,and empower individuals of all ages.Join us in promoting literacy,expanding knowledge, and fostering a lifelong love for books.",
        ready:"Give your books a new chapter in someone else's life",
        imageSrc:"/img/categories/img/book.jpg"
    },
    {
        title: "TOYS",
        titletwo:"Donate a toy",
        icon: "/img/categories/icon/toyicon.jpg",
        description: "Spread joy and make a child's day by donating your gently used toysYour donations can bring smiles, laughter, and endless hours of play to children in need.Help us create magical moments and inspire imagination through the power of play.",
        ready:"Pass on the joy of play.",
        imageSrc:"/img/categories/img/toy.jpg"
    },
    {
        title: "HOME ESSENTIAL",
        titletwo:"Donate home-essential",
        icon: "/img/categories/icon/homeicon.jpg",
        description: "Help create safe and comfortable homes by donating essential items.Your contributions can provide warmth, nourishment, and a sense of security to individuals and families facing challenging circumstances.",
        ready:"Make a house feel like a home.",
        imageSrc:"/img/categories/img/home.jpg"
    },
    {
        title: "FOOD",
        titletwo:"Donate a food",
        icon: "/img/categories/icon/foodicon.jpg",
        description: "Your contributions can provide nourishment, support food security, and make a direct impact on individuals and families in need.together, we can ensure that no one goes to bed hungry.",
        ready:"Share the abundance and support those in need.",
        imageSrc:"/img/categories/img/food.jpg"
    },
    {
      title: "CLOTHES",
      titletwo:"Donate a clothe",
      icon:"/img/categories/icon/clothesicon.jpg",
      description: "Give the gift of warmth and dignity by donating your gently used clothing.Help us clothe those who are less fortunate and make a positive impact on their lives.",
      ready:"Pass on the gift of style",
      imageSrc: "/img/categories/img/book.jpg"
    },
];

var currentCategoryIndex = 0;
var isTransitioning = false;

var categoryTitle = document.getElementById('category-title');
var categoryTitleTwo = document.getElementById('category-titletwo');
var categoryIcon = document.getElementById('category-icon');
var categoryDescription = document.getElementById('category-description');
var categoryReady = document.getElementById('category-ready');
var imageSection = document.getElementById('image-section');



function updateCategory() {
    var currentCategory = categories[currentCategoryIndex];
    categoryTitle.textContent = currentCategory.title;
    categoryTitleTwo.textContent = currentCategory.titletwo;
    categoryIcon.src = currentCategory.icon;
    categoryDescription.textContent = currentCategory.description;
    categoryReady.textContent = currentCategory.ready;
    imageSection.style.backgroundImage = "url('" + currentCategory.imageSrc + "')";
  }



function showNextCategory() {
    if (isTransitioning) {
      return;
    }

    var nextCategoryIndex = currentCategoryIndex + 1;
    if (nextCategoryIndex >= categories.length) {
      nextCategoryIndex = 0;
    }

    var nextCategory = categories[nextCategoryIndex]; 
    imageSection.style.animation = "slide-out 0.5s forwards";
    isTransitioning = true;
  
    setTimeout(function () {
      currentCategoryIndex = nextCategoryIndex;
      updateCategory();
      imageSection.style.animation = "slide-in 0.5s forwards";
      isTransitioning = false;
    }, 500);
}

function showPreviousCategory() {
    if (isTransitioning) {
      return;
    }
  
    var previousCategoryIndex = currentCategoryIndex - 1;
    if (previousCategoryIndex < 0) {
      previousCategoryIndex = categories.length - 1;
    }
  
    var previousCategory = categories[previousCategoryIndex];
  
    imageSection.style.animation = "slide-out-reverse 0.5s forwards";
    isTransitioning = true;
  
    setTimeout(function () {
      currentCategoryIndex = previousCategoryIndex;
      updateCategory();
      imageSection.style.animation = "slide-in-reverse 0.5s forwards";
      isTransitioning = false;
    }, 500);
}



var backButton = document.getElementById('back-button');
var forwardButton = document.getElementById('forward-button');

backButton.addEventListener('click', showPreviousCategory);
forwardButton.addEventListener('click', showNextCategory);

// Initial category update
updateCategory();