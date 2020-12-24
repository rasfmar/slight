const FONT_SIZE = 5;
const DARK_MODE = false;
const SUGGESTIONS = false;
const GRID = false;

let style = ``;

// dark mode
if (DARK_MODE) {
  style += `
    body {
      background-color: #111;
    }

    input {
      color: #fff;
    }

    div.RNNXgb {
      background-color: #111 !important;
    }
  `;
  $("body").css("background-color", "#111");
  $("input").css("color", "#fff");
  $("div.RNNXgb").attr("style", "background-color: #111 !important");
}

// move suggestions
$("div.UUbT9").css("margin-top", "4px");

// hide suggestions
if (!SUGGESTIONS) {
  $("div.UUbT9").remove();
}

// set search bar height
$("div.a4bIc > input.gsfi").removeClass("gsfi");
$("div.a4bIc > input").css("height", "50vh");

// global font
$("body").css({
  "font-family": "'Avenir'",
  "overflow-x": "hidden"
});
$("input").css("font-family", "'Avenir'");
$("div.sbai.sbdb").css("font", "13px 'Avenir'");

// header top left
$("#hptl").remove();

// header top right, not including pfp
if (!GRID) {
  $("#gbwa").remove();
} else if (DARK_MODE) {
  $("#gbwa a").css("background-position", "-463px -35px");
}
$("div.gb_ie.gb_i.gb_Fg.gb_wg").remove();

// pfp remove margin
$("div.gb_3e.gb_Fg.gb_i").attr("style", "");

// remove footer, google logo
$("#main").remove();

// remove buttons
$("div.FPdoLc.tfB0Bf").remove();

// remove "report inappropriate suggestions "
$("#sbfblt").remove();

// remove suggestions buttons
$("div.tfB0Bf").remove();

// remove search bar margins
$("#tsf").css("margin", "0");

// remove search bar mic and search icons
$(".hpuQDe").remove();

// remove weird right search bar border
$("div.dRYYxd > style:nth-child(3)").remove();

// make search bar full width
$("div.A8SBwf").css({
  "padding-top": "0",
  "max-width": "none"
});

// make search bar half height
$("div.RNNXgb").css({
  "height": "50vh",
  "border-radius": "0",
  "box-shadow": "none"
});

// give search bar padding
$("div.a4bIc > input").css({
  //"padding-top": "10vw",
  "font-size": `${FONT_SIZE}vh`,
  "margin-top": "3.5em"
});

// move it to the very top
$("div.jhp").css("top", "0");

// move icons down
$(".iblpc").css("padding-top", "45vh");
$(".dRYYxd").css("padding-top", "45vh");

// remove dropdown shadow
$(".aajZCb").css("box-shadow", "none");

// remove search border and box-shadow while typing
$(".RNNXgb").css({
  "border": "none",
  "box-shadow": "none"
});

// hide spell checking lines
$(".pR49Ae.gsfi").css("visibility", "hidden");

/*
$("div.a4bIc > input").keyup(function(e) {
  const inputLength = $(this).val().length;
  const fontSize = UPPER_FONT_SIZE / (inputLength ** 0.65);
  $(this).css({
    "font-size": `${fontSize}vw`,
    "margin-top": `-${35 - 10 / inputLength}vw`
  });
});
*/