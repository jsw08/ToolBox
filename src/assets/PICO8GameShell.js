/**
 * Function to generate the pico8 game shell with cartridge.
 * @param {string} cart
 * @returns string
 **/
export function generatePICO8(cart) {
  return `
<html>
  <head>
    <title>PICO-8 Cartridge</title>
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <script type="text/javascript">
      // Default shell for PICO-8 0.2.2 (includes @weeble's gamepad mod 1.0)
      // This file is available under a CC0 license https://creativecommons.org/share-your-work/public-domain/cc0/
      // (note: "this file" does not include any cartridge or cartridge artwork injected into a derivative html file when using the PICO-8 html exporter)

      // options

      // fullscreen, sound, close button at top when playing on touchscreen
      var p8_allow_mobile_menu = true;

      // p8_autoplay true to boot the cartridge automatically after page load when possible
      // if the browser can not create an audio context outside of a user gesture (e.g. on iOS), p8_autoplay has no effect
      var p8_autoplay = false;

      // When pico8_state is defined, PICO-8 will set .is_paused, .sound_volume and .frame_number each frame
      // (used for determining button icons)
      var pico8_state = [];

      // When pico8_buttons is defined, PICO-8 reads each int as a bitfield holding that player's button states
      // 0x1 left, 0x2 right, 0x4 up, 0x8 right, 0x10 O, 0x20 X, 0x40 menu
      // (used by p8_update_gamepads)
      var pico8_buttons = [0, 0, 0, 0, 0, 0, 0, 0]; // max 8 players

      // When pico8_mouse is defined, PICO-8 reads the 3 integers as X, Y and a bitfield for buttons: 0x1 LMB, 0x2 RMB
      var pico8_mouse = [];

      // used to display number of detected joysticks
      var pico8_gamepads = {};
      pico8_gamepads.count = 0;

      // When pico8_gpio is defined, reading and writing to gpio pins will read and write to these values
      var pico8_gpio = new Array(128);

      // When pico8_audio_context context is defined, the html shell (this file) is responsible for creating and managing it.
      // This makes satisfying browser requirements easier -- e.g. initialising audio from a short script in response to a user action.
      // Otherwise PICO-8 will try to create and use its own context.

      var pico8_audio_context;

      // menu button and controller graphics
      p8_gfx_dat = {
        p8b_pause1:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAOUlEQVRIx2NgGPbg/8cX/0F46FtAM4vobgHVLRowC6hm0YBbQLFFoxaM4FQ0dHPy0C1Nh26NNugBAAnizNiMfvbGAAAAAElFTkSuQmCC",
        p8b_controls:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAQ0lEQVRIx2NgGAXEgP8fX/ynBaap4XBLhqcF1IyfYWQBrZLz0LEAlzqqxQFVLcAmT3MLqJqTaW7B4CqLaF4fjIIBBwBL/B2vqtPVIwAAAABJRU5ErkJggg==",
        p8b_full:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAN0lEQVRIx2NgGPLg/8cX/2mJ6WcBrUJm4CwgOSgGrQVEB8WoBaMWDGMLhm5OHnql6dCt0YY8AAA9oZm+9Z9xQAAAAABJRU5ErkJggg==",
        p8b_pause0:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAKUlEQVRIx2NgGHbg/8cX/7FhctWNWjBqwagFoxaMWjBqwagF5Fkw5AAAPaGZvsIUtXUAAAAASUVORK5CYII=",
        p8b_sound0:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAANklEQVRIx2NgGDHg/8cX/5Hx0LEA3cChYwEugwavBcRG4qgFoxYMZwuGfk4efqXp8KnRBj0AAMz7cLDnG4FeAAAAAElFTkSuQmCC",
        p8b_sound1:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAPUlEQVRIx2NgGDHg/8cX/5Hx0LEA3cChYwEugwhZQLQDqG4BsZFIKMhGLRi1YChbMPRz8vArTYdPjTboAQCSVgpXUWQAMAAAAABJRU5ErkJggg==",
        p8b_close:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAU0lEQVRIx2NkoDFgpJsF/z+++I8iwS9BkuW49A+cBcRaREgf/Swg1SJi1dHfAkIG4EyOOIJy4Cwg1iJCiWDUAvItGLqpaOjm5KFfmg79Gm3ItioAl+mAGVYIZUUAAAAASUVORK5CYII=",

        controls_left_panel:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAEI0lEQVR42u3dMU7DQBCG0Tjam9DTcP8jpEmfswS5iHBhAsLxev/hvQY6pGXyZRTQ+nQCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHqbHEEtl+vt7hS+fLy/mXHBQqxEi/6aI/AiFW9SnB2BWDkDBAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwONJ8tYvrXRAsImK19j0IFsPGSrQQLCJiNV+et7xAT7QQLIaN1dr3ooVgMWysRAvBIipWooVgERUr0UKwiIqVaCFYRMVKtBAsomIlWggWUbESLQSLqFiJFoJFVKxEC8EiKlaihWARFSvRQrDYJSSVfhaCBSBYAIIFCBbAHpoj4Bl/scOGBWDD4lX8iwE2LADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAECxAsAMECECxAsMh1ud7uTsHZVDcZyFo8Yt5sVJ6NyUAaSNEyIymaXwZepIKd4mwoQbAFC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQI4UHME2/10QZq7usyBObBhRQwpmBUb1nADuPbuaUD/p2ezMH+1admwhosVfBcxb2SCJVaIlmAhVoiWYIkVoiVagiVWiJZgiZVYIVqCJVaIlmgJllghWoIlViBagiVWiJZoCZZYIVqCJVYgWoIlViBaggUIlnc0sPELlmghVmIlWKKFWAmWaIFYCZZoIVYIlmghVoIlWiBWgiVaiJVgIVqIlWCJFoiVYIkWYiVYiBZiJViihViJ1XbNEWyL1mMQRYvfvIGJlQ1rmE0LzIoNyyBiDrBhAYIFIFiAYAEIFoBgAYIFIFgAggUIFoBgAQgWIFgAggUgWIBgDc+Nn1D/tdH8YupwgZy5qG4ykKIlVmZDsDjshSlazqQqH7p793Q2CBaAYAGCBSBYAIIFCBaAYAEIFiBYAIIFIFiAYAEIFoBgAYIFIFgAggUIFoBgAQgWIFgAggUgWIBgAQgWwENzBKxZPub9CJ7WjA0LsGFRV+9N5+jNDhsWgGABggUgWACCxW56fgjuA3cEiz9Z/nWwR0iWP8P/YCFYDBstsUKwiIiWWCFYRERLrBAsIqIlVggWEdESKwSLiGiJFYJFRLTECsEiIlpihWARES2xQrCIiJZYIVhEREusECwioiVWCBYx0RIrBIuoaIkVr+YhFHTZtMCGBQgWgGABCBYgWACCBSBYgGABCBaAYAGCBSBYAIIFCBbj2uOR8s6AEbhexgsWYri3SKhKczcXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA2n+e0UMDzh3yTAAAAAElFTkSuQmCC",

        controls_right_panel:
          "data:image/png;base64,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",
      };

      // added 0.2.1: work-around for iOS/Safari running from an iFrame (e.g. from itch.io page):
      // touch events only register after adding dummy listeners on document.

      document.addEventListener("touchstart", {});
      document.addEventListener("touchmove", {});
      document.addEventListener("touchend", {});

      // --------------------------------------------------------------------------------------------------------------------------------
      // pico-8 0.2.2: allow dropping files
      var p8_dropped_cart = null;
      var p8_dropped_cart_name = "";
      function p8_drop_file(e) {
        // console.log("@@ dropping file...");

        e.stopPropagation();
        e.preventDefault();

        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
          // read from file
          reader = new FileReader();
          reader.onload = function (event) {
            p8_dropped_cart_name = "untitled.p8";
            if (typeof e.dataTransfer.files[0].name !== "undefined")
              p8_dropped_cart_name = e.dataTransfer.files[0].name;
            if (typeof e.dataTransfer.files[0].fileName !== "undefined")
              p8_dropped_cart_name = e.dataTransfer.files[0].fileName;
            p8_dropped_cart = reader.result;
            // data:image/png;base64
            e.stopPropagation();
            e.preventDefault();
            codo_command = 9; // read directly from p8_dropped_cart with libb64 decoder
          };
          reader.readAsDataURL(e.dataTransfer.files[0]);
        } else {
          // read from url (or data url)
          txt = e.dataTransfer.getData("Text");
          if (txt) {
            p8_dropped_cart_name = "untitled.p8.png";
            p8_dropped_cart = txt;
            codo_command = 9;
          }
        }
      }
      function nop(evt) {
        evt.stopPropagation();
        evt.preventDefault();
      }
      function dragover(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        Module.pico8DragOver();
      }
      function dragstop(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        Module.pico8DragStop();
      }

      // download (pico-8 0.2.4d web exports can save a .wav file)
      function download_browser_file(filename, contents) {
        var element = document.createElement("a");
        if (filename.substr(filename.length - 7) == ".p8.png")
          element.setAttribute(
            "href",
            "data:image/png;base64," + encodeURIComponent(contents),
          );
        else if (filename.substr(filename.length - 4) == ".wav")
          element.setAttribute(
            "href",
            "data:audio/x-wav;base64," + encodeURIComponent(contents),
          );
        else
          element.setAttribute(
            "href",
            "data:text/plain;charset=utf-8," + encodeURIComponent(contents),
          );
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      }
      // --------------------------------------------------------------------------------------------------------------------------------

      var p8_buttons_hash = -1;
      function p8_update_button_icons() {
        // buttons only appear when running
        if (!p8_is_running) {
          requestAnimationFrame(p8_update_button_icons);
          return;
        }
        var is_fullscreen =
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitIsFullScreen ||
          document.msFullscreenElement;

        // hash based on: pico8_state.sound_volume  pico8_state.is_paused bottom_margin left is_fullscreen p8_touch_detected
        var hash = 0;
        hash = pico8_state.sound_volume;
        if (pico8_state.is_paused) hash += 0x100;
        if (p8_touch_detected) hash += 0x200;
        if (is_fullscreen) hash += 0x400;

        if (p8_buttons_hash == hash) {
          requestAnimationFrame(p8_update_button_icons);
          return;
        }

        p8_buttons_hash = hash;
        // console.log("@@ updating button icons");

        els = document.getElementsByClassName("p8_menu_button");
        for (i = 0; i < els.length; i++) {
          el = els[i];
          index = el.id;
          if (index == "p8b_sound")
            index += pico8_state.sound_volume == 0 ? "0" : "1"; // 1 if undefined
          if (index == "p8b_pause")
            index += pico8_state.is_paused > 0 ? "1" : "0"; // 0 if undefined

          new_str =
            '<img width=24 height=24 style="pointer-events:none" src="' +
            p8_gfx_dat[index] +
            '">';
          if (el.innerHTML != new_str) el.innerHTML = new_str;

          // hide all buttons for touch mode (can pause with menu buttons)

          var is_visible = p8_is_running;

          if (
            (!p8_touch_detected || !p8_allow_mobile_menu) &&
            el.parentElement.id == "p8_menu_buttons_touch"
          )
            is_visible = false;

          if (p8_touch_detected && el.parentElement.id == "p8_menu_buttons")
            is_visible = false;

          if (is_fullscreen) is_visible = false;

          if (is_visible) el.style.display = "";
          else el.style.display = "none";
        }
        requestAnimationFrame(p8_update_button_icons);
      }

      function abs(x) {
        return x < 0 ? -x : x;
      }

      // step 0 down 1 drag 2 up (not used)
      function pico8_buttons_event(e, step) {
        if (!p8_is_running) return;

        pico8_buttons[0] = 0;

        if (step == 2 && typeof pico8_mouse !== "undefined") {
          pico8_mouse[2] = 0;
        }

        var num = 0;
        if (e.touches) num = e.touches.length;

        if (num == 0 && typeof pico8_mouse !== "undefined") {
          //  no active touches: release mouse button from anywhere on page. (maybe redundant? but just in case)
          pico8_mouse[2] = 0;
        }

        for (var i = 0; i < num; i++) {
          var touch = e.touches[i];
          var x = touch.clientX;
          var y = touch.clientY;
          var w = window.innerWidth;
          var h = window.innerHeight;

          var r = Math.min(w, h) / 12;
          if (r > 40) r = 40;

          // mouse (0.1.12d)

          let canvas = document.getElementById("canvas");
          if (p8_touch_detected)
            if (typeof pico8_mouse !== "undefined")
              if (canvas) {
                var rect = canvas.getBoundingClientRect();
                //console.log(rect.top, rect.right, rect.bottom, rect.left, x, y);

                if (
                  x >= rect.left &&
                  x < rect.right &&
                  y >= rect.top &&
                  y < rect.bottom
                ) {
                  pico8_mouse = [
                    Math.floor(
                      ((x - rect.left) * 128) / (rect.right - rect.left),
                    ),
                    Math.floor(
                      ((y - rect.top) * 128) / (rect.bottom - rect.top),
                    ),
                    step < 2 ? 1 : 0,
                  ];
                  // return; // commented -- blocks overlapping buttons
                } else {
                  pico8_mouse[2] = 0;
                }
              }

          // buttons

          b = 0;

          if (y < h - r * 8) {
            // no controller buttons up here; includes canvas and menu buttons at top in touch mode
          } else {
            e.preventDefault();

            if (y < h - r * 6 && y > h - r * 8) {
              // menu button: half as high as X O button
              // stretch across right-hand half above X O buttons
              if (x > w - r * 3) b |= 0x40;
            } else if (x < w / 2 && x < r * 6) {
              // stick

              mask = 0xf; // dpad
              var cx = 0 + r * 3;
              var cy = h - r * 3;

              deadzone = r / 3;
              var dx = x - cx;
              var dy = y - cy;

              if (abs(dx) > abs(dy) * 0.6) {
                // horizontal
                if (dx < -deadzone) b |= 0x1;
                if (dx > deadzone) b |= 0x2;
              }
              if (abs(dy) > abs(dx) * 0.6) {
                // vertical
                if (dy < -deadzone) b |= 0x4;
                if (dy > deadzone) b |= 0x8;
              }
            } else if (x > w - r * 6) {
              // button; diagonal split from bottom right corner

              mask = 0x30;

              // one or both of [X], [O]
              if (h - y > (w - x) * 0.8) b |= 0x10;
              if (w - x > (h - y) * 0.8) b |= 0x20;
            }
          }

          pico8_buttons[0] |= b;
        }
      }

      // p8_update_layout_hash is used to decide when to update layout (expensive especially when part of a heavy page)
      var p8_update_layout_hash = -1;
      var last_windowed_container_height = 512;
      var p8_layout_frames = 0;

      function p8_update_layout() {
        var canvas = document.getElementById("canvas");
        var p8_playarea = document.getElementById("p8_playarea");
        var p8_container = document.getElementById("p8_container");
        var p8_frame = document.getElementById("p8_frame");
        var csize = 512;
        var margin_top = 0;
        var margin_left = 0;

        // page didn't load yet? first call should be after p8_frame is created so that layout doesn't jump around.
        if (!canvas || !p8_playarea || !p8_container || !p8_frame) {
          p8_update_layout_hash = -1;
          requestAnimationFrame(p8_update_layout);
          return;
        }

        p8_layout_frames++;

        // assumes frame doesn't have padding

        var is_fullscreen =
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitIsFullScreen ||
          document.msFullscreenElement;
        var frame_width = p8_frame.offsetWidth;
        var frame_height = p8_frame.offsetHeight;

        if (is_fullscreen) {
          // same as window
          frame_width = window.innerWidth;
          frame_height = window.innerHeight;
        } else {
          // never larger than window  // (happens when address bar is down in portraight mode on phone)
          frame_width = Math.min(frame_width, window.innerWidth);
          frame_height = Math.min(frame_height, window.innerHeight);
        }

        // as big as will fit in a frame..
        csize = Math.min(frame_width, frame_height);

        // .. but never more than 2/3 of longest side for touch (e.g. leave space for controls on iPad)
        if (p8_touch_detected && p8_is_running) {
          var longest_side = Math.max(window.innerWidth, window.innerHeight);
          csize = Math.min(csize, (longest_side * 2) / 3);
        }

        // pixel perfect: quantize to closest multiple of 128
        // only when large display (desktop)
        if (frame_width >= 512 && frame_height >= 512) {
          csize = (csize + 1) & ~0x7f;
        }

        // csize should never be higher than parent frame
        // (otherwise stretched large when fullscreen and then return)
        if (!is_fullscreen && p8_frame)
          csize = Math.min(csize, last_windowed_container_height); // p8_frame_0 parent

        if (is_fullscreen) {
          // always center horizontally
          margin_left = (frame_width - csize) / 2;

          if (p8_touch_detected) {
            if (window.innerWidth < window.innerHeight) {
              // portrait: keep at y=40 (avoid rounded top corners / camera nub thing etc.)
              margin_top = Math.min(40, frame_height - csize);
            } else {
              // landscape: put a little above vertical center
              margin_top = (frame_height - csize) / 4;
            }
          } else {
            // non-touch: center vertically
            margin_top = (frame_height - csize) / 2;
          }
        }

        // skip if relevant state has not changed

        var update_hash =
          csize +
          margin_top * 1000.3 +
          margin_left * 0.001 +
          frame_width * 333.33 +
          frame_height * 772.15134;
        if (is_fullscreen) update_hash += 0.1237;

        // unexpected things can happen in the first few seconds, so just keep re-calculating layout. wasm version breaks layout otherwise.
        // also: bonus refresh at 5, 8 seconds just in case ._.
        if (
          p8_layout_frames < 180 ||
          p8_layout_frames == 60 * 5 ||
          p8_layout_frames == 60 * 8
        )
          update_hash = p8_layout_frames;

        if (!is_fullscreen)
          if (!p8_touch_detected)
            // fullscreen: update every frame for safety. should be cheap!
            if (p8_update_layout_hash == update_hash) {
              // mobile: update every frame because nothing can be trusted
              //console.log("p8_update_layout(): skipping");
              requestAnimationFrame(p8_update_layout);
              return;
            }
        p8_update_layout_hash = update_hash;

        // record this for returning to original size after fullscreen pushes out container height (argh)
        if (!is_fullscreen && p8_frame)
          last_windowed_container_height =
            p8_frame.parentNode.parentNode.offsetHeight;

        // mobile in portrait mode: put screen at top (w / a little extra space for fullscreen button if needed)
        // (don't cart too about buttons overlapping screen)
        if (
          p8_touch_detected &&
          p8_is_running &&
          document.body.clientWidth < document.body.clientHeight
        )
          p8_playarea.style.marginTop = p8_allow_mobile_menu ? 32 : 8;
        else if (p8_touch_detected && p8_is_running)
          // landscape: slightly above vertical center (only relevant for iPad / highres devices)
          p8_playarea.style.marginTop =
            (document.body.clientHeight - csize) / 4;
        else p8_playarea.style.marginTop = "";

        canvas.style.width = csize;
        canvas.style.height = csize;

        // to do: this should just happen from css layout
        canvas.style.marginLeft = margin_left;
        canvas.style.marginTop = margin_top;

        p8_container.style.width = csize;
        p8_container.style.height = csize;

        // set menu buttons position to bottom right
        el = document.getElementById("p8_menu_buttons");
        el.style.marginTop = csize - el.offsetHeight;

        if (p8_touch_detected && p8_is_running) {
          // turn off pointer events to prevent double-tap zoom etc (works on Android)
          // don't want this for desktop because breaks mouse input & click-to-focus when using codo_textarea
          canvas.style.pointerEvents = "none";

          p8_container.style.marginTop = "0px";

          // buttons

          // same as touch event handling
          var w = window.innerWidth;
          var h = window.innerHeight;
          var r = Math.min(w, h) / 12;

          if (r > 40) r = 40;

          el = document.getElementById("controls_right_panel");
          el.style.left = w - r * 6;
          el.style.top = h - r * 7;
          el.style.width = r * 6;
          el.style.height = r * 7;
          if (el.getAttribute("src") != p8_gfx_dat["controls_right_panel"])
            // optimisation: avoid reload? (browser should handle though)
            el.setAttribute("src", p8_gfx_dat["controls_right_panel"]);

          el = document.getElementById("controls_left_panel");
          el.style.left = 0;
          el.style.top = h - r * 6;
          el.style.width = r * 6;
          el.style.height = r * 6;
          if (el.getAttribute("src") != p8_gfx_dat["controls_left_panel"])
            // optimisation: avoid reload? (browser should handle though)
            el.setAttribute("src", p8_gfx_dat["controls_left_panel"]);

          // scroll to cart (commented; was a failed attempt to prevent scroll-on-drag on some browsers)
          // p8_frame.scrollIntoView(true);

          document.getElementById("touch_controls_gfx").style.display = "table";
          document.getElementById("touch_controls_background").style.display =
            "table";
        } else {
          document.getElementById("touch_controls_gfx").style.display = "none";
          document.getElementById("touch_controls_background").style.display =
            "none";
        }

        if (!p8_is_running) {
          p8_playarea.style.display = "none";
          p8_container.style.display = "flex";
          p8_container.style.marginTop = "auto";

          el = document.getElementById("p8_start_button");
          if (el) el.style.display = "flex";
        }
        requestAnimationFrame(p8_update_layout);
      }

      var p8_touch_detected = false;
      addEventListener(
        "touchstart",
        function (event) {
          p8_touch_detected = true;

          // hide codo_textarea -- clipboard support on mobile is not feasible
          el = document.getElementById("codo_textarea");
          if (el && el.style.display != "none") {
            el.style.display = "none";
          }
        },
        { passive: true },
      );

      function p8_create_audio_context() {
        if (pico8_audio_context) {
          try {
            pico8_audio_context.resume();
          } catch (err) {
            console.log("** pico8_audio_context.resume() failed");
          }
          return;
        }

        var webAudioAPI =
          window.AudioContext ||
          window.webkitAudioContext ||
          window.mozAudioContext ||
          window.oAudioContext ||
          window.msAudioContext;
        if (webAudioAPI) {
          pico8_audio_context = new webAudioAPI();

          // wake up iOS
          if (pico8_audio_context) {
            try {
              var dummy_source_sfx = pico8_audio_context.createBufferSource();
              dummy_source_sfx.buffer = pico8_audio_context.createBuffer(
                1,
                1,
                22050,
              ); // dummy
              dummy_source_sfx.connect(pico8_audio_context.destination);
              dummy_source_sfx.start(1, 0.25); // gives InvalidStateError -- why? hasn't been played before
              //dummy_source_sfx.noteOn(0); // deleteme
            } catch (err) {
              console.log("** dummy_source_sfx.start(1, 0.25) failed");
            }
          }
        }
      }

      function p8_close_cart() {
        // just reload page! used for touch buttons -- hard to roll back state
        window.location.hash = ""; // triggers reload
      }

      var p8_is_running = false;
      var p8_script = null;
      var Module = null;
      function p8_run_cart() {
        if (p8_is_running) return;
        p8_is_running = true;

        // touch: hide everything except p8_frame_0
        if (p8_touch_detected) {
          el = document.getElementById("body_0");
          el2 = document.getElementById("p8_frame_0");
          if (el && el2) {
            el.style.display = "none";
            el.parentNode.appendChild(el2);
          }
        }

        // create audio context and wake it up (for iOS -- needs happen inside touch event)
        p8_create_audio_context();

        // show touch elements
        els = document.getElementsByClassName("p8_controller_area");
        for (i = 0; i < els.length; i++) els[i].style.display = "";

        // install touch events. These also serve to block scrolling / pinching / zooming on phones when p8_is_running
        // moved event.preventDefault(); calls into pico8_buttons_event() (want to let top buttons pass through)
        addEventListener(
          "touchstart",
          function (event) {
            pico8_buttons_event(event, 0);
          },
          { passive: false },
        );
        addEventListener(
          "touchmove",
          function (event) {
            pico8_buttons_event(event, 1);
          },
          { passive: false },
        );
        addEventListener(
          "touchend",
          function (event) {
            pico8_buttons_event(event, 2);
          },
          { passive: false },
        );

        // load and run script
        e = document.querySelector("#e_script");
        p8_script = e;
        e.onload = function () {
          // show canvas / menu buttons only after loading
          el = document.getElementById("p8_playarea");
          if (el) el.style.display = "table";

          if (typeof p8_update_layout_hash !== "undefined")
            p8_update_layout_hash = -77;
          if (typeof p8_buttons_hash !== "undefined") p8_buttons_hash = -33;
        };

        document.body.appendChild(e); // load and run

        // hide start button and show canvas / menu buttons. hide start button
        el = document.getElementById("p8_start_button");
        if (el) el.style.display = "none";

        // add #playing for touchscreen devices (allows back button to close)
        // X button can also be used to trigger this
        if (p8_touch_detected) {
          window.location.hash = "#playing";
          window.onhashchange = function () {
            if (window.location.hash.search("playing") < 0)
              window.location.reload();
          };
        }

        // install drag&drop listeners
        {
          let canvas = document.getElementById("canvas");
          if (canvas) {
            canvas.addEventListener("dragenter", dragover, false);
            canvas.addEventListener("dragover", dragover, false);
            canvas.addEventListener("dragleave", dragstop, false);
            canvas.addEventListener("drop", nop, false);
            canvas.addEventListener("drop", p8_drop_file, false);
          }
        }
      }

      // Gamepad code

      var P8_BUTTON_O = { action: "button", code: 0x10 };
      var P8_BUTTON_X = { action: "button", code: 0x20 };
      var P8_DPAD_LEFT = { action: "button", code: 0x1 };
      var P8_DPAD_RIGHT = { action: "button", code: 0x2 };
      var P8_DPAD_UP = { action: "button", code: 0x4 };
      var P8_DPAD_DOWN = { action: "button", code: 0x8 };
      var P8_MENU = { action: "menu" };
      var P8_NO_ACTION = { action: "none" };

      var P8_BUTTON_MAPPING = [
        // ref: https://w3c.github.io/gamepad/#remapping
        P8_BUTTON_O, // Bottom face button
        P8_BUTTON_X, // Right face button
        P8_BUTTON_X, // Left face button
        P8_BUTTON_O, // Top face button
        P8_NO_ACTION, // Near left shoulder button (L1)
        P8_NO_ACTION, // Near right shoulder button (R1)
        P8_NO_ACTION, // Far left shoulder button (L2)
        P8_NO_ACTION, // Far right shoulder button (R2)
        P8_MENU, // Left auxiliary button (select)
        P8_MENU, // Right auxiliary button (start)
        P8_NO_ACTION, // Left stick button
        P8_NO_ACTION, // Right stick button
        P8_DPAD_UP, // Dpad up
        P8_DPAD_DOWN, // Dpad down
        P8_DPAD_LEFT, // Dpad left
        P8_DPAD_RIGHT, // Dpad right
      ];

      // Track which player is controller by each gamepad. Gamepad index i controls the
      // player with index pico8_gamepads_mapping[i]. Gamepads with null player are
      // currently unassigned - they get assigned to a player when a button is pressed.
      var pico8_gamepads_mapping = [];

      function p8_unassign_gamepad(gamepad_index) {
        if (pico8_gamepads_mapping[gamepad_index] == null) {
          return;
        }
        pico8_buttons[pico8_gamepads_mapping[gamepad_index]] = 0;
        pico8_gamepads_mapping[gamepad_index] = null;
      }

      function p8_first_player_without_gamepad(max_players) {
        var allocated_players = pico8_gamepads_mapping.filter(function (x) {
          return x != null;
        });
        var sorted_players = Array.from(allocated_players).sort();
        for (
          var desired = 0;
          desired < sorted_players.length && desired < max_players;
          ++desired
        ) {
          if (desired != sorted_players[desired]) {
            return desired;
          }
        }
        if (sorted_players.length < max_players) {
          return sorted_players.length;
        }
        return null;
      }

      function p8_assign_gamepad_to_player(gamepad_index, player_index) {
        p8_unassign_gamepad(gamepad_index);
        pico8_gamepads_mapping[gamepad_index] = player_index;
      }

      function p8_convert_standard_gamepad_to_button_state(
        gamepad,
        axis_threshold,
        button_threshold,
      ) {
        // Given a gamepad object, return:
        // {
        //     button_state: the binary encoded Pico 8 button state
        //     menu_button: true if any menu-mapped button was pressed
        //     any_button: true if any button was pressed, including d-pad
        //         buttons and unmapped buttons
        // }
        if (!gamepad || !gamepad.axes || !gamepad.buttons) {
          return {
            button_state: 0,
            menu_button: false,
            any_button: false,
          };
        }
        function button_state_from_axis(
          axis,
          low_state,
          high_state,
          default_state,
        ) {
          if (axis && axis < -axis_threshold) return low_state;
          if (axis && axis > axis_threshold) return high_state;
          return default_state;
        }
        var axes_actions = [
          button_state_from_axis(
            gamepad.axes[0],
            P8_DPAD_LEFT,
            P8_DPAD_RIGHT,
            P8_NO_ACTION,
          ),
          button_state_from_axis(
            gamepad.axes[1],
            P8_DPAD_UP,
            P8_DPAD_DOWN,
            P8_NO_ACTION,
          ),
        ];

        var button_actions = gamepad.buttons.map(function (button, index) {
          var pressed = button.value > button_threshold || button.pressed;
          if (!pressed) return P8_NO_ACTION;
          return P8_BUTTON_MAPPING[index] || P8_NO_ACTION;
        });

        var all_actions = axes_actions.concat(button_actions);

        var menu_button = button_actions.some(function (action) {
          return action.action == "menu";
        });
        var button_state = all_actions
          .filter(function (a) {
            return a.action == "button";
          })
          .map(function (a) {
            return a.code;
          })
          .reduce(function (result, code) {
            return result | code;
          }, 0);
        var any_button = gamepad.buttons.some(function (button) {
          return button.value > button_threshold || button.pressed;
        });

        any_button |= button_state; //jww: include axes 0,1 as might be first intended action

        return {
          button_state,
          menu_button,
          any_button,
        };
      }

      // jww: pico-8 0.2.1 version for unmapped gamepads, following p8_convert_standard_gamepad_to_button_state
      // axes 0,1 & buttons 0,1,2,3 are reasonably safe. don't try to read dpad.
      // menu buttons are unpredictable, but use 6..8 anyway (better to have a weird menu button than none)

      function p8_convert_unmapped_gamepad_to_button_state(
        gamepad,
        axis_threshold,
        button_threshold,
      ) {
        if (!gamepad || !gamepad.axes || !gamepad.buttons) {
          return {
            button_state: 0,
            menu_button: false,
            any_button: false,
          };
        }

        var button_state = 0;

        if (gamepad.axes[0] && gamepad.axes[0] < -axis_threshold)
          button_state |= 0x1;
        if (gamepad.axes[0] && gamepad.axes[0] > axis_threshold)
          button_state |= 0x2;
        if (gamepad.axes[1] && gamepad.axes[1] < -axis_threshold)
          button_state |= 0x4;
        if (gamepad.axes[1] && gamepad.axes[1] > axis_threshold)
          button_state |= 0x8;

        // buttons: first 4 taken to be O/X, 6..8 taken to be menu button

        for (j = 0; j < gamepad.buttons.length; j++)
          if (gamepad.buttons[j].value > 0 || gamepad.buttons[j].pressed) {
            if (j < 4)
              button_state |=
                0x10 << (((j + 1) / 2) & 1); // 0 1 1 0 -- A,X -> O,X on xbox360
            else if (j >= 6 && j <= 8) button_state |= 0x40;
          }

        var menu_button = button_state & 0x40;

        var any_button = gamepad.buttons.some(function (button) {
          return button.value > button_threshold || button.pressed;
        });

        any_button |= button_state; //jww: include axes 0,1 as might be first intended action

        return {
          button_state,
          menu_button,
          any_button,
        };
      }

      // gamepad  https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API
      // (sets bits in pico8_buttons[])
      function p8_update_gamepads() {
        var axis_threshold = 0.3;
        var button_threshold = 0.5; // Should be unnecessary, we should be able to trust .pressed
        var max_players = 8;
        var gps = navigator.getGamepads() || navigator.webkitGetGamepads();

        if (!gps) return;

        // In Chrome, gps is iterable but it's not an array.
        gps = Array.from(gps);

        pico8_gamepads.count = gps.length;
        while (gps.length > pico8_gamepads_mapping.length) {
          pico8_gamepads_mapping.push(null);
        }

        var menu_button = false;
        var gamepad_states = gps.map(function (gp) {
          return gp && gp.mapping == "standard"
            ? p8_convert_standard_gamepad_to_button_state(
                gp,
                axis_threshold,
                button_threshold,
              )
            : p8_convert_unmapped_gamepad_to_button_state(
                gp,
                axis_threshold,
                button_threshold,
              );
        });

        // Unassign disconnected gamepads.
        // gps.forEach(function (gp, i) { if (gp && !gp.connected) { p8_unassign_gamepad(i); }});
        gps.forEach(function (gp, i) {
          if (!gp || !gp.connected) {
            p8_unassign_gamepad(i);
          }
        }); // https://www.lexaloffle.com/bbs/?pid=87132#p

        // Assign unassigned gamepads when any button is pressed.
        gamepad_states.forEach(function (state, i) {
          if (state.any_button && pico8_gamepads_mapping[i] == null) {
            var first_free_player =
              p8_first_player_without_gamepad(max_players);
            p8_assign_gamepad_to_player(i, first_free_player);
          }
        });

        // Update pico8_buttons array.
        gamepad_states.forEach(function (gamepad_state, i) {
          if (pico8_gamepads_mapping[i] != null) {
            pico8_buttons[pico8_gamepads_mapping[i]] =
              gamepad_state.button_state;
          }
        });

        // Update menu button.
        // Pico 8 only recognises the menu button on the first player, so we
        // press it when any gamepad has pressed a button mapped to menu.
        if (
          gamepad_states.some(function (state) {
            return state.menu_button;
          })
        ) {
          pico8_buttons[0] |= 0x40;
        }

        requestAnimationFrame(p8_update_gamepads);
      }
      requestAnimationFrame(p8_update_gamepads);

      // End of gamepad code

      // key blocker. prevent browser operations while playing cart so that PICO-8 can use those keys e.g. cursors to scroll, ctrl-r to reload
      document.addEventListener(
        "keydown",
        function (event) {
          event = event || window.event;
          if (!p8_is_running) return;

          if (pico8_state.has_focus == 1)
            if ([32, 37, 38, 39, 40, 77, 82, 80, 9].indexOf(event.keyCode) > -1)
              if (event.preventDefault)
                // block only cursors, M R P, tab
                event.preventDefault();
        },
        { passive: false },
      );

      // when using codo_textarea to determine focus, need to explicitly hand focus back when clicking a p8_menu_button
      function p8_give_focus() {
        el =
          typeof codo_textarea === "undefined"
            ? document.getElementById("codo_textarea")
            : codo_textarea;
        if (el) {
          el.focus();
          el.select();
        }
      }

      function p8_request_fullscreen() {
        var is_fullscreen =
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitIsFullScreen ||
          document.msFullscreenElement;

        if (is_fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
          return;
        }

        var el = document.getElementById("p8_playarea");

        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.mozRequestFullScreen) {
          el.mozRequestFullScreen();
        } else if (el.webkitRequestFullScreen) {
          el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      }
    </script>

    <style type="text/css">
      <!--
      .p8_menu_button{
      	opacity:0.3;
      	padding:4px;
      	display:table;
      	width:24px;
      	height:24px;
      	float:right;
      }

      @media screen and (min-width:512px) {
      	.p8_menu_button{
      		width:24px; margin-left:12px; margin-bottom:8px;
      	}
      }
      .p8_menu_button:hover{
      	opacity:1.0;
      	cursor:pointer;
      }

      canvas{
          image-rendering: optimizeSpeed;
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: optimize-contrast;
          image-rendering: pixelated;
          -ms-interpolation-mode: nearest-neighbor;
      	border: 0px;
      	cursor: none;
      }


      .p8_start_button{
      	cursor:pointer;
      	background:url("data:image/png;base64,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");
      	-repeat center;
      	-webkit-background-size:cover; -moz-background-size:cover; -o-background-size:cover; background-size:cover;
      }

      .button_gfx{
      	stroke-width:2;
      	stroke: #ffffff;
      	stroke-opacity:0.4;
      	fill-opacity:0.2;
      	fill:black;
      }

      .button_gfx_icon{
      	stroke-width:3;
      	stroke: #909090;
      	stroke-opacity:0.7;
      	fill:none;
      }

      -->
    </style>
  </head>

  <body style="padding: 0px; margin: 0px; background-color: #222; color: #ccc">
    <div id="body_0">
      <!-- hide this when playing in mobile (p8_touch_detected) so that elements don't affect layout -->

      <!-- Add any content above the cart here -->

      <div
        id="p8_frame_0"
        style="max-width: 800px; max-height: 800px; margin: auto"
      >
        <!-- double function: limit size, and display only this div for touch devices -->
        <div
          id="p8_frame"
          style="
            display: flex;
            width: 100%;
            max-width: 95vw;
            height: 100vw;
            max-height: 95vh;
            margin: auto;
          "
        >
          <div
            id="p8_menu_buttons_touch"
            style="position: absolute; width: 100%; z-index: 10; left: 0px"
          >
            <div
              class="p8_menu_button"
              id="p8b_full"
              style="float: left; margin-left: 10px"
              onClick="p8_give_focus(); p8_request_fullscreen();"
            ></div>
            <div
              class="p8_menu_button"
              id="p8b_sound"
              style="float: left; margin-left: 10px"
              onclick="p8_give_focus(); p8_create_audio_context(); Module.pico8ToggleSound();"
            ></div>
            <div
              class="p8_menu_button"
              id="p8b_close"
              style="float: right; margin-right: 10px"
              onClick="p8_close_cart();"
            ></div>
          </div>

          <div
            id="p8_container"
            style="margin: auto; display: table"
            onclick="p8_create_audio_context(); p8_run_cart();"
          >
            <div
              id="p8_start_button"
              class="p8_start_button"
              style="width: 100%; height: 100%; display: flex"
            >
              <img
                width="80"
                height="80"
                style="margin: auto"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABpklEQVR42u3au23DQBCEYUXOXIGKcujQXUgFuA0XIKgW90Q9oEAg+Ljd27vd2RsCf058gEDqhofPj+OB6SMCAQlIQAIyAhKQgARkBAQDnM6XSRsB7/2e/tSA0//12fCAKsQX3ntDA4oRFwBRIc0AixE38BAhTQGLEAsBUSDNAXcRhYDRIZsAPlp99VECRoXsDpgN0g0wC6Q7IDpkGEBUyG6A0+vKBtkdMBukG2AWSHdAdMgwgKiQ4QDRIMMCokCGB4wOCQPYFVKw2cABNocUjl6wgE0gFashPKAZpHJ2TQNYBVmxW6cDFENWDv9pAUshCVgJScBKSAISkD9hPkT4GkNAMdzepyj8Kye852EBLe51CZHHWQK4JcThD1SlcHPEYY/0a+A0n6SkGZV6w6WZNb3g4Id1b7hwgGhwYQBR4dwB0eHcALPAdQfMBhcOEA0uDCAqnDsgOpwbYBa4poA/31+rZYFrBriFpwGMCtcEcA9PAhgdzhywBK8EEQXOFFCCtwaIBmcGKMWbI6LCmQBq8R6hw5kAMgISkIAEJCAjIAEJSEBGQI9ukV7lRn9nD+gAAAAASUVORK5CYII="
              />
            </div>

            <div
              id="p8_playarea"
              style="
                display: none;
                margin: auto;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                -webkit-touch-callout: none;
              "
            >
              <div
                id="touch_controls_background"
                style="
                  pointer-events: none;
                  display: none;
                  background-color: #000;
                  position: fixed;
                  top: 0px;
                  left: 0px;
                  border: 0;
                  width: 100vw;
                  height: 100vh;
                "
              >
                &nbsp
              </div>

              <div style="display: flex; position: relative">
                <!-- pointer-events turned off for mobile in p8_update_layout because need for desktop mouse -->
                <canvas
                  class="emscripten"
                  id="canvas"
                  oncontextmenu="event.preventDefault();"
                >
                </canvas>
                <div
                  class="p8_menu_buttons"
                  id="p8_menu_buttons"
                  style="margin-left: 10px"
                >
                  <div
                    class="p8_menu_button"
                    style="position: absolute; bottom: 125px"
                    id="p8b_controls"
                    onClick="p8_give_focus(); Module.pico8ToggleControlMenu();"
                  ></div>
                  <div
                    class="p8_menu_button"
                    style="position: absolute; bottom: 90px"
                    id="p8b_pause"
                    onClick="p8_give_focus(); Module.pico8TogglePaused(); p8_update_layout_hash = -22;"
                  ></div>
                  <div
                    class="p8_menu_button"
                    style="position: absolute; bottom: 55px"
                    id="p8b_sound"
                    onClick="p8_give_focus(); p8_create_audio_context(); Module.pico8ToggleSound();"
                  ></div>
                  <div
                    class="p8_menu_button"
                    style="position: absolute; bottom: 20px"
                    id="p8b_full"
                    onClick="p8_give_focus(); p8_request_fullscreen();"
                  ></div>
                </div>
              </div>

              <!-- display after first layout update -->
              <div
                id="touch_controls_gfx"
                style="
                  pointer-events: none;
                  display: table;
                  position: fixed;
                  top: 0px;
                  left: 0px;
                  border: 0;
                  width: 100vw;
                  height: 100vh;
                "
              >
                <img
                  src=""
                  id="controls_right_panel"
                  style="position: absolute; opacity: 0.5"
                />
                <img
                  src=""
                  id="controls_left_panel"
                  style="position: absolute; opacity: 0.5"
                />
              </div>
              <!-- touch_controls_gfx -->

              <!-- used for clipboard access & keyboard input; displayed and used by PICO-8 only once needed. can be safely removed if clipboard / key presses not needed. -->
              <!-- (needs to be inside p8_playarea so that it still works under Chrome when fullscreened) -->
              <!-- 0.2.5: added "display:none"; pico8.js shows on demand to avoid mac osx accent character selector // https://www.lexaloffle.com/bbs/?tid=47743 -->

              <textarea
                id="codo_textarea"
                class="emscripten"
                style="
                  display: none;
                  position: absolute;
                  left: -9999px;
                  height: 0px;
                  overflow: hidden;
                "
              ></textarea>
            </div>
            <!--p8_playarea -->
          </div>
          <!-- p8_container -->
        </div>
        <!-- p8_frame -->
      </div>
      <!-- p8_frame_0 size limit -->

      <script type="text/javascript">
        p8_update_layout();
        p8_update_button_icons();

        var canvas = document.getElementById("canvas");
        Module = {};
        Module.canvas = canvas;

        // from @ultrabrite's shell: test if an AudioContext can be created outside of an event callback.
        // If it can't be created, then require pressing the start button to run the cartridge

        if (p8_autoplay) {
          var temp_context = new AudioContext();
          temp_context.onstatechange = function () {
            if (temp_context.state == "running") {
              p8_run_cart();
              temp_context.close();
            }
          };
        }

        // pointer lock request needs to be inside a canvas interaction event
        // pico8_state.request_pointer_lock is true when 0x5f2d bit 0 and bit 2 are set -- poke(0x5f2d,0x5)
        // note on mouse acceleration for future: // https://github.com/w3c/pointerlock/pull/49
        canvas.addEventListener("click", function () {
          if (!p8_touch_detected)
            if (pico8_state.request_pointer_lock) canvas.requestPointerLock();
        });
      </script>

      <script id="e_script" type="application/javascript">
        ${cart}
      </script>

      <!-- Add content below the cart here -->
    </div>
    <!-- body_0 -->
  </body>
</html>

  `;
}
