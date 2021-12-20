$("#footer").css(
  "margin-top",
  $(document).height() -
    ($("#header").height() + $("#content").height()) -
    $("#footer").height()
);

$("#back-to-top").on("click", function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    700
  );
});

//paste this code under the head tag or in a separate js file.
// Wait for window load
$(window).on("load", function () {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");

  $(".places .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".upcoming-events .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    dots: true,
    dotsEach: true,
    navText: [
      "<i class='fa-arrow fa fa-chevron-left'></i>",
      "<i class='fa-arrow fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".independent .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    dots: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".positions .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    dots: false,
    center: true,
    navText: [
      "<i class='fa-arrow fa fa-chevron-left'></i>",
      "<i class='fa-arrow fa fa-chevron-right'></i>",
    ],
    dotsEach: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  const left = document.querySelector("independent-left");
  const right = document.querySelector("independent-right");
  $("#left-btn").on("click", function () {
    $(".independent-right").css({ display: "none" });
    $(".independent-left").css({ display: "block" });
    $(".ind-right").css({ display: "block" });
    $(".left-sect").css({ display: "none" });
  });
  $("#right-btn").on("click", function () {
    $(".independent-right").css({ display: "block" });
    $(".independent-left").css({ display: "none" });
    $(".ind-right").css({ display: "none" });
    $(".left-sect").css({ display: "block" });
  });
});
