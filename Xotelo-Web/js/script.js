$(function () {
  $(window).on("load", hidePreloader);
  function hidePreloader() {
    setTimeout(() => {
      $(".js-preloader").addClass("preloader--hidden");
      $(".js-content").addClass("preloader__content--hidden");
    }, 1000);
  }

  let isDarkMode = false;
  let isDark = () => (isDarkMode ? "dark" : "light");

  function changeThemeMode([primaryColor, lightColor, darkColor]) {
    isDarkMode = !isDarkMode;
    $(":root").css({
      "--color-primary": primaryColor,
      "--color-primary-dark": darkColor,
      "--color-primary-light": lightColor,
    });
    $(".user-theme__icon").attr(
      "href",
      `img/sprite.svg#icon-theme-${isDark()}`
    );
    $(".logo").attr("src", `img/logo-${isDark()}.png`);
  }

  $(".theme-mode").on("click", () =>
    changeThemeMode(
      !isDarkMode
        ? ["#0E0E2E", "#161649", "#0D0D2B"]
        : ["#eb2f64", "#ff3366", "#ba265d"]
    )
  );
})();
