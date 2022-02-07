// Preloader

$(window).on("load", function () {
  // make sure that whole website is loaded
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

// Team

$(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});

// Progress Bars

$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate({ width: $(this).attr("aria-valuenow") + "%" }, 2000);
      });
      this.distroy();
    },
    { offset: "bottom-in-view" }
  );
});

// Responsive Tabs
$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});

// Portfolio

$(window).on("load", function () {
  // Initialize Isotope
  $("#isotope-container").isotope({});
  // filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    // get filter value
    // alert("You clicked the button");
    var filterValue = $(this).attr("data-filter");
    // alert("You clicked" + filterValue);
    // filter portfolio items
    $("#isotope-container").isotope({
      filter: filterValue,
    });

    // active button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

// Maginifier

$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// Testimonial Section

$(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});

// Stats

$(function () {
  $(".counter").counterUp({
    delay: 20,
    time: 2000,
  });
});

// CLients

$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});

// Google Map

$(window).on("load", function () {
  // Map Variables
  var addressString = "Tejas Society, Sector 23, Gandhinagar, Gujarat";
  var myLatlng = { lat: 23.23914, lng: 72.6506 };

  // 1. Render Map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatlng,
  });

  // 2. Map Marker
  const marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Click to see address",
  });

  // 3. Add Info Window
  var infowindow = new google.maps.InfoWindow({
    content: addressString,
  });

  // Show Info windo when user clicks marker
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
});

// Show and Hide White Navigation
$(function () {
  // show/hide nav on page load
  showHideNav();
  $(window).scroll(function () {
    // show/hide nav on window's scroll
    showHideNav();
  });
  function showHideNav() {
    if ($(window).scrollTop() > 150) {
      // Show White Nav
      $("nav").addClass("white-nav-top");

      // Show Dark Logo
      $(".navbar-brand img").attr("src", "images/logo/logo-dark.png");

      // Show back to top button
      $("#back-to-top").fadeIn();
    } else {
      // Hide White Nav
      $("nav").removeClass("white-nav-top");

      // Show Logo
      $(".navbar-brand img").attr("src", "images/logo/logo.png");

      // Hide back to top button
      $("#back-to-top").fadeOut();
    }
  }
});

// Smooth Scrolling

$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    // Get Section Id like #about, #services, #work, #team and etc.
    var section_id = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});
