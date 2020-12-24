// defaults

let FONT_SIZE = 5;
let DARK_MODE = false;
let SUGGESTIONS = false;
let GRID = false;
let style = ``;

chrome.storage.sync.get(["DARK_MODE", "SUGGESTIONS", "GRID"], function(result) {
  DARK_MODE = result.DARK_MODE;
  SUGGESTIONS = result.SUGGESTIONS;
  GRID = result.GRID;

  if (window.location.pathname === "/" || window.location.pathname === "/webhp") {
    // dark mode
    if (DARK_MODE) {
      style += `
      body {
        background-color: #111 !important;
      }

      input {
        color: #fff !important;
      }

      div.RNNXgb {
        background-color: #111 !important;
      }

      div.xtSCL {
        opacity: 0.1 !important;
      }

      div.aajZCb {
        background: #111 !important;
      }

      .sbl1 {
        color: #fff !important;
      }

      .sbl1p {
        color: #bf92ed !important;
      }

      .sbct {
        transition: all 0.3s cubic-bezier(0,1,1,1) !important;
      }

      .sbhl {
        background: #272727 !important;
      }

      iframe {
        filter: invert(0.95) grayscale(0.95);
      }
    `;
    }

    // move suggestions
    // or hide suggestions
    style += `
    div.UUbT9 {
      ${!SUGGESTIONS ? "display: none !important;" : "margin-top: 4px !important;"}
    }
  `;

    // set search bar height
    style += `
    div.a4bIc > input.gsfi {
      height: 50vh !important;
    }
  `;

    // get rid of search bar weird border on right
    style += `
    .FqnKTc {
      display: none;
    }
  `;

    // global font
    style += `
    body {
      font-family: 'Avenir' !important;
      overflow-x: hidden;
    }

    input {
      font-family: 'Avenir' !important;
    }

    div.sbai.sbdb {
      font: 13px 'Avenir' !important;
    }
  `;

    // header top left
    style += `
    #hptl {
      display: none !important;
    }
  `;

    // header top right, not including pfp
    if (!GRID) {
      style += `
      #gbwa {
        display: none !important;
      }
    `;
    } else if (DARK_MODE) {
      style += `
      #gbwa a {
        background-position: -463px -35px !important;
      }
    `;
    }
    style += `
    div.gb_ie.gb_i.gb_Fg.gb_wg {
      display: none !important;
    }
  `;

    // pfp remove margin
    style += `
    div.gb_3e.gb_Fg.gb_i {
      margin: 0 !important;
    }
  `;

    // remove footer, google logo
    style += `
    #main {
      display: none !important;
    }
  `;

    // remove buttons
    style += `
    div.FPdoLc.tfB0Bf {
      display: none !important;
    }
  `;

    // remove "report inappropriate suggestions "
    style += `
    #sbfblt {
      display: none !important;
    }
  `;

    // remove suggestions buttons
    style += `
    div.tfB0Bf {
      display: none !important;
    }
  `;

    // remove search bar margins
    style += `
    #tsf {
      margin: 0 !important;
    }
  `;

    // remove search bar mic and search icons
    style += `
    .hpuQDe {
      display: none !important;
    }
  `;

    // remove weird right search bar border
    style += `
    div.dRYYxd > style:nth-child(3) {
      display: none !important;
    }
  `;

    // make search bar full width
    style += `
    div.A8SBwf {
      padding-top: 0 !important;
      max-width: none !important;
    }
  `;

    // make search bar half height
    style += `
    div.RNNXgb {
      height: 50vh !important;
      border-radius: 0 !important;
      box-shadow: none !important;
    }
  `;

    // give search bar padding
    style += `
    div.a4bIc > input {
      font-size: ${FONT_SIZE}vh !important;
      margin-top: 3.5em !important;
    }
  `;

    // move it to the very top
    style += `
    div.jhp {
      top: 0 !important;
    }
  `;

    // move icons down
    style += `
    .iblpc {
      padding-top: 45vh !important;
    }

    .dRYYxd {
      padding-top: 45vh !important;
    }
  `;

    // remove dropdown shadow
    style += `
    .aajZCb {
      box-shadow: none !important;
    }
  `;

    // remove search border and box-shadow while typing
    style += `
    .RNNXgb {
      border: none !important;
      box-shadow: none !important;
    }
  `;

    // hide spell checking lines
    style += `
    .pR49Ae.gsfi {
      visibility: hidden !important;
    }
  `;
  }

  document.documentElement.insertAdjacentHTML("afterbegin", `<style>${style}</style>`);
});
