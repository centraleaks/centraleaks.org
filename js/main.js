"use strict";

(function() {
  var burger = document.querySelector(".burger-container"),
    nav = document.querySelector(".nav-main");

  burger.onclick = function() {
    nav.classList.toggle("menu-opened");
    document.body.classList.toggle("no-scroll");
  };

  document.addEventListener("click", function(event) {
    var isClickInside = nav.contains(event.target);

    if (!isClickInside && nav.classList.contains("menu-opened")) {
      nav.classList.remove("menu-opened");
      document.body.classList.toggle("no-scroll");
    }
  });
  domReady(scroll);
  domReady(accordion);
})();

window.onload = function() {
  fetch('https://3g2upl4pq6kufc4m.onion/', {
    mode: 'no-cors',
    cache: 'no-cache'
  })
    .then(() => {
      var elements = document.getElementsByClassName('btn-denuncia');
      for (let element of elements) {
          element.href = 'http://saev5hl3p6luc5cchhm5yyk7gm6iynnkvkztqrm5ro67mg2hz3l3puad.onion/#/';
          //element.href = 'https://centraleaks.org/denuncia.html';
          element.textContent = element.classList.contains('btn-header') ? 'Denuncia ahora' : 'Denuncia';
      }
    })
    .catch(() => {
      var elements = document.getElementsByClassName('btn-denuncia');
      for (let element of elements) {
          element.href = 'https://centraleaks.org/denuncia.html';
          element.textContent = element.classList.contains('btn-header') ? 'Denuncia ahora' : 'Denuncia';
      }
    });
}

function copyText() {
  document.getElementById("copy").select();
  document.execCommand("copy");
  alert("Texto copiado en el portapapeles.");
}

function domReady(fn) {
  // If we're early to the party
  document.addEventListener("DOMContentLoaded", fn); // If late; I mean on time.

  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    fn();
  }
}

function scroll() {
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
    var scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    var objectPosition;
    var nav = document.querySelector(".nav-main");

    if (document.body.classList.contains("landing")) {
      var objectSelect = document.querySelector(".header-main");
      objectPosition = objectSelect.offsetHeight;

      if (scroll > objectPosition - 100) {
        nav.classList.add("displayNav");
        nav.classList.add("white");
      } else {
        nav.classList.remove("displayNav");
        nav.classList.remove("white");
      }
    } else {
      objectPosition = 0;
    }

    /*if (scroll > objectPosition + 120) {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0px";
      } else {
        nav.style.top = "-94px";
      }

      prevScrollpos = currentScrollPos;
    } else {
      nav.style.top = "0px";
    }*/
  };
}

function accordion() {
  if (document.body.classList.contains("faq-page")) {
    var slideUp = function slideUp(target) {
      var duration =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.boxSizing = "border-box";
      target.style.height = target.offsetHeight + "px";
      target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(function() {
        target.style.display = "none";
        target.style.removeProperty("height");
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property"); //alert("!");
      }, duration);
    };

    var slideDown = function slideDown(target) {
      var duration =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      target.style.removeProperty("display");
      var display = window.getComputedStyle(target).display;
      if (display === "none") display = "block";
      target.style.display = display;
      var height = target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.boxSizing = "border-box";
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = height + "px";
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      window.setTimeout(function() {
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
      }, duration);
    };

    var slideToggle = function slideToggle(target) {
      var duration =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      if (window.getComputedStyle(target).display === "none") {
        return slideDown(target, duration);
      } else {
        return slideUp(target, duration);
      }
    };

    var firstA = document.querySelector(".accordion > li:nth-child(1) > a");
    var firstP = document.querySelector(".accordion > li:nth-child(1) p");
    firstA.classList.add("active");
    slideDown(firstP);
    var inputs = document.querySelectorAll(".accordion li > a");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("click", function(e) {
        var dropDown = this.parentNode.querySelector("p");
        var ps = document.querySelector(".accordion").querySelectorAll("p");

        for (var l = 0; l < ps.length; l++) {
          if (ps[l] != dropDown) {
            slideUp(ps[l]);
          }
        }

        if (this.classList.contains("active")) {
          this.classList.remove("active");
        } else {
          var active = document
            .querySelector(".accordion")
            .querySelector("a.active");
          if (active != null) active.classList.remove("active");
          this.classList.add("active");
        }

        slideToggle(dropDown);
        e.preventDefault();
      });
    }
  }
}