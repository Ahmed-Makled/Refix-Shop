/*----------------------------------------------
 *
 * Defiend Global Variable
 *
 ----------------------------------------------*/
let modal = document.getElementById("exampleModal");
let SendMessageModal = document.querySelector(".Send-message-modal");
let showSubMenuServices = document.querySelector(".toggel-services ");
let navBar = document.querySelector("#navBar");
let sections = document.querySelectorAll("section"); // All section

/**-----------------------------------------------------------------
 * End Global Variable
 *
 * Start Main Function
 *
-----------------------------------------------------------------**/

/**-----------------------------------------------------------------
 * 
 * @description  add class fixed to navbar
 * @param e
 * @returns preventDefault
 * 
 * 
 -----------------------------------------------------------------**/

let navView = () => {
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      navBar.classList.add("fixed-top");
    } else {
      navBar.classList.remove("fixed-top");
    }
  });
};

/**-----------------------------------------------------------------
 * 
 * @description  Toggle Modal
 * @param e
 * @returns preventDefault
 * 
 * 
 -----------------------------------------------------------------**/

const toggleModal = () => {
  modal.style = "display:none";
  modal.removeAttribute("role");
  modal.classList.toggle("show");
  const toggleBackDrop = () => {
    document.querySelector(".modal-backdrop").style = "display:none";
    document.querySelector(".modal-backdrop").classList.toggle("show");
  };
  toggleBackDrop();
};

/**-----------------------------------------------------------------
 * 
 * @description  scrollSmooth and scrolIntoview
 * @param e
 * @returns preventDefault
 * 
 -----------------------------------------------------------------**/

function scrollSmooth() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

/**-----------------------------------------------------------------
 * 
 *  End Main Functions
 * Begin Events
 *
 -----------------------------------------------------------------**/
navView(); // call back function
scrollSmooth(); // call back function

//submit appointment
SendMessageModal.addEventListener("click", () => {
  toggleModal();
});
//add class show to dropdown menu when mouse hover Services Tab

showSubMenuServices.addEventListener("mouseover", () => {
  document.querySelector(".dropdown-menu").classList.add("show");
});

//Remove class show to dropdown menu when mouse leave  dropdown-menu region

document.querySelector(".dropdown-menu").addEventListener("mouseleave", () => {
  document.querySelector(".dropdown-menu").classList.remove("show");
});

/** JQuery* */

$(function () {
  // navlink s add active class
  $(".navbar-nav li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
  $(".details-category li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
});
