"use strict";

// N A V B A R
// Add class navbarDark on navbar scroll to work with the background styling
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".page_wrapper");
  const header = document.querySelector(".navbar");

  wrapper.onscroll = (event) => {
    const top = wrapper.scrollTop;
    if (top >= 200) {
      header.classList.add("navbarDark");
    } else {
      header.classList.remove("navbarDark");
    }
  };
});

// Collapse navbar after click on small devices // this only applys to the mobile navbar
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});

// P R O F I L E
// Profile image tilting effect
const profileImg = document.querySelector(".profile_img");

document.addEventListener("mousemove", (e) => {
  rotateEl(e, profileImg);
});

const rotateEl = (event, element) => {
  const x = event.clientX;
  const y = event.clientY;
  // console.log(x, y)

  // Get the middle
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  // Get offset from middle
  const offsetX = ((x - middleX) / middleX) * 16;
  const offsetY = ((y - middleY) / middleY) * 16;

  element.style.setProperty("--rotateX", -1 * offsetY + "deg");
  element.style.setProperty("--rotateY", offsetX + "deg");
};

// S K I L L S
// Add event listeners to the overlay btn and the overlay itself
document.addEventListener("DOMContentLoaded", () => {
  const overlayButtons = document.querySelectorAll(".overlay_btn");
  const overlayContainers = document.querySelectorAll(".overlay");

  overlayButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent click event from propagating to body
      const targetOverlayId = this.getAttribute("data-target");
      const targetOverlay = document.getElementById(targetOverlayId);

      if (targetOverlay) {
        // Close any open overlays except the current one
        overlayContainers.forEach((container) => {
          if (container.id !== targetOverlayId) {
            container.classList.remove("overlay-show");
            const correspondingButton = document.querySelector(
              `[data-target=${container.id}]`
            );
            if (correspondingButton) {
              correspondingButton.style.display = "block";
            }
          }
        });

        // Hide the button of the current overlay
        button.style.display = "none";

        // Show the current overlay
        targetOverlay.classList.add("overlay-show");

        // Add a click event listener to the overlay to prevent propagation
        targetOverlay.addEventListener("click", function (event) {
          event.stopPropagation();
        });

        // Add a click event listener to the body to handle clicks outside the overlay
        document.body.addEventListener("click", function () {
          // Show the button of the current overlay
          button.style.display = "block";

          // Close the current overlay
          targetOverlay.classList.remove("overlay-show");
        });
      } else {
        console.error("Target Overlay Element not found!");
      }
    });
  });
});

// P O R T F O L I O
// Add a click event to the portfolio box <div> that enables the href functionality.
document.getElementById("box1").addEventListener("click", function () {
  window.open("https://teclexi.com/home/", "_blank");
});

document.getElementById("box2").addEventListener("click", function () {
  window.open("", "_blank");
});
document.getElementById("box3").addEventListener("click", function () {
  window.open("https://gee.bsilva.ch/", "_blank");
});
document.getElementById("box4").addEventListener("click", function () {
  window.open("", "_blank");
});
