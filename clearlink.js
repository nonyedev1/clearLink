// slide testimonial images on click
const leftArrow = document.querySelector(".arrowLeft");
const rightArrow = document.querySelector(".arrowRight");

let companies = [
  {
    companyImage: "Shopify.png",
    personName: "Sarah Thompson",
    personImage: "Avatar.png",
    personPosition: "Project Manager",
    companyName: "Shopify",
    testimony:
      " ClearLink has upgraded our remote meetings. High-quality  video, screen sharing, and <br>top-notch secuity make it <br>essential for our team. ",
  },
  {
    companyImage: "Dropbox.png",
    personName: "Augusta White",
    personImage: "Avatar.png",
    personPosition: "Project Manager",
    companyName: "Dropbox",
    testimony:
      " ClearLink has upgraded our remote meetings. High-quality  video, screen sharing, and <br>top-notch secuity make it <br>essential for our team. ",
  },
  {
    companyImage: "Coinbase.png",
    personImage: "Avatar.png",
    personName: "Elina Malik",
    personPosition: "Project Manager",
    companyName: "Coinbase",
    testimony: " ClearLink is the best video conferencing platform.",
  },
  {
    companyImage: "intercom.png",
    personName: "Michelle White",
    personImage: "Avatar.png",
    personPosition: "Project Manager",
    companyName: "Intercom",
    testimony: " ClearLink offers the best services for remote meetings. ",
  },
];

let i = 0;

function updateSlider() {
  const html = `<div class="testimonialsText">
   <div class="testimony">
<img src="./images/${
    companies[i].companyImage
  }"  class="bottomSpace smallSizedImages" />
<p class="biggerFont">
 ${companies[i].testimony}
 ${console.log(companies[i].companyImage)}
</p>
</div>
<div class="profileForTestimonial paddingTop"  >
  <img src="./images/${companies[i].personImage}" alt="profilePhoto" >
  <p> <span class="bigFont">${companies[i].personName}</span> <br>
   ${companies[i].personPosition}, ${companies[i].companyName}</p>
</div>
</div>
`;

  document.querySelector(" .testimonialsText").innerHTML = html;
}

updateSlider();

leftArrow.addEventListener("click", () => {
  i = (i - 1 + companies.length) % companies.length;
  updateSlider();
});

rightArrow.addEventListener("click", () => {
  i = (i + 1 + companies.length) % companies.length;
  updateSlider();
});

// FAQ Dropdown
const minus = document.querySelectorAll(".minus");
const plus = document.querySelectorAll(".plus");
const answers = document.querySelectorAll(".answers");
const haveGreyBackground = document.querySelectorAll(".someFAQS ");

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", () => {
    answers[i].classList.add("hidden");
    plus[i].classList.remove("hidden");
    minus[i].classList.add("hidden");
    haveGreyBackground[i].classList.remove("greyBackground");
  });
}
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", () => {
    answers[i].classList.remove("hidden");
    minus[i].classList.remove("hidden");
    plus[i].classList.add("hidden");
    haveGreyBackground[i].classList.add("greyBackground");
  });
}

// scroll to the top
const scrollUpArrow = document.querySelector(".scrollUpArrow");
scrollUpArrow.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// arrow disappears
document.addEventListener("scroll", () => {
  if (pageYOffset > 300) {
    scrollUpArrow.style.display = "block";
  } else {
    scrollUpArrow.style.display = "none";
  }
});

// navbar disappears
document.addEventListener("scroll", () => {
  if (pageYOffset > 50) {
    document.querySelector(".navbar").classList.add("hidden");
  } else {
    document.querySelector(".navbar").classList.remove("hidden");
  }
});

// dropdown menu
const menu = document.querySelector(".menuIcon");
const closeMenu = document.querySelector(".closeIcon");

menu.addEventListener("click", () => {
  document.querySelector(".navLinks").style.display = "block";
  closeMenu.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});
closeMenu.addEventListener("click", () => {
  document.querySelector(".navLinks").style.display = "none";
  closeMenu.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});

//dropdown Arrows
const dropDownArrow = document.querySelectorAll(".dropDownArrows");
const dropUpArrow = document.querySelectorAll(".dropUpArrow");

for (let i = 0; i < dropDownArrow.length; i++) {
  dropDownArrow[i].addEventListener("click", () => {
    dropUpArrow[i].classList.remove("hidden");
    dropDownArrow[i].classList.add("hidden");
  });
}
for (let i = 0; i < dropUpArrow.length; i++) {
  dropUpArrow[i].addEventListener("click", () => {
    dropUpArrow[i].classList.add("hidden");
    dropDownArrow[i].classList.remove("hidden");
  });
}
