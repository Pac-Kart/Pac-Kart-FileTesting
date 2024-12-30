"use strict";

const body = document.body;
const file_viewer = getElementSafely('file_viewer');
const file_editor = getElementSafely('file_editor');
const outer_program = getElementSafely('outer_program');
const show_debug = getElementSafely('show_debug');
const hide_console = getElementSafely('hide_console_view');
const drag_bar = getElementSafely('drag_bar');
const check_offset_input = getElementSafely('check_offset');
const pk_debug = true
if (pk_debug) {
    file_input.multiple = true
}

if (drag_bar) {
    drag_bar.addEventListener("mousedown", handleDragBar);
}

if (show_debug) {
    show_debug.addEventListener("click", checkDebugBox);
}
if (hide_console) {
    hide_console.addEventListener("click", check_hide_console);
}

function handleDragBar(e) {
    body.style.userSelect = "none";
    window.addEventListener('mousemove', mouseMoveListener, {
        passive: true
    });
    window.addEventListener('mouseup', mouseUpListener, {
        passive: true
    });
}

function mouseMoveListener(e) {
    let mouse_offset = e.pageX;
    let outer_box_offset = file_viewer.getBoundingClientRect().left;
    let outer_box_width = outer_program.getBoundingClientRect().width;

    let left_box = (mouse_offset - outer_box_offset) / outer_box_width * 99.5;
    let right_box = 99.5 - left_box;

    if (right_box > 6 && left_box > 6) {
        file_viewer.style.width = left_box + "%";
        file_editor.style.width = right_box + "%";
    }
}

function mouseUpListener(e) {
    window.removeEventListener('mousemove', mouseMoveListener, {
        passive: true
    });
    body.style.userSelect = "";
}

function checkDebugBox() {
    const debugStyle = document.getElementById("debug_style");
    if (debugStyle) {
        debugStyle.innerHTML = `[data-debug="true"] { display: ${show_debug.checked ? 'block' : 'none'}; }`;
    }
}
function check_hide_console() {
    const hide_console_html = document.getElementById("hide_console_view");
    if (hide_console_html) {
        if (hide_console_html.checked === true) {
            console.log(true)
            globalThis.packart_hide_console = true
            // document.getElementsByClassName('bar')[0].dataset.index
        } else {
            console.log(false)
            globalThis.packart_hide_console = false
        }
        // debugStyle.innerHTML = `[data-debug="true"] { display: ${show_debug.checked ? 'block' : 'none'}; }`;
    }
}

function getElementSafely(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with id '${id}' not found.`);
    }
    return element;
}
