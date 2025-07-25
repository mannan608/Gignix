const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

(function ($) {
  "use strict";

  // Mobile Nav Hide/Show
  if ($(".mobile-menu").length) {
    $(".mobile-nav-toggler").on("click", function () {
      var navMenuContent = $(".navbar-nav").html();
      $(".mobile-menu .mobile-menu-nav .menu-outer")
        .empty()
        .append(navMenuContent);
      $("body").addClass("mobile-menu-visible");
    });

    // Close mobile menu when clicking on backdrop or close button
    $(".menu-backdrop, .mobile-menu-close").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });
  }
})(jQuery);
