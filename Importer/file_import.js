#! fires whenever New File is clicked
"use strict";
async function input_file(event) {
    const files = event.currentTarget.files;
    const lastFileIndex = files.length - 1;

    Object.keys(files).forEach(i => {
        const reader = new FileReader();
        read_a_file(reader, i, files[i])

        function read_a_file(reader, i, file) {
            try {
                reader.readAsArrayBuffer(file)
                reader.onload = (e) => {

                    globalThis.g = {
                        debug: false,
                        divisible_prev_value: 0,
                        game: 0,
                        console: 0,
                        version: 0,
                        file_name: file.name,
                        endian: true
                    };

                    globalThis.buffer = e.target.result

                    document.getElementById("file_input").value = ''

                    const dataView = new DataView(buffer);

                    globalThis.x = []
                    globalThis.id_list = [];
                    //.x* file array

                    file_viewer.textContent = ''
                    file_editor.textContent = ''

                    filecheck()

                    console.log(`%c ${g.file_name}`, 'color:#ff10ff')
                    for (let temp_array_index = 0; temp_array_index < temp_array__.length; temp_array_index++) {
                    if (temp_array__[temp_array_index].files.includes(g.file_name)) {
                        temp_array__[temp_array_index].console += `<a class='f'> ${g.file_name}</a><hr><br>`
                        }
                    }
                    if (pk_debug && lastFileIndex == Number(i)) {
                        array_log()
                    }
                    //sorted by a-z, also by size

                }
            } catch (error) {}

        }
    }

    )
}

function u8(o) {
    return new DataView(buffer).getUint8(o, g.endian);
}
function u16(o) {
    return new DataView(buffer).getUint16(o, g.endian);
}
function u32(o) {
    return new DataView(buffer).getUint32(o, g.endian);
}
function f32(o) {
    return new DataView(buffer).getFloat32(o, g.endian);
}

function choose_game_type() {

    let html = '';

    switch (g.game) {
    case "bigfoot_collision_course":
        get_x_bcc()
        break
    case "bee_movie_game":
        get_x_bmg()
        break
    case "pac_man_world_rally":
        if (g.version === 243) {
            get_x_pmwr_xdx()
        }
        break
    case "hot_wheels_velocity_x":
        if (g.version === 183) {
            get_x_hwvx()
        } else {
            get_x_hwvx_proto()
        }
        break
    case "motor_mayhem":
        x_mm()
        break
    default:
        console.log("?")
        // html = get_x_static(g.file_name, false);
    }

}

document.getElementById("file_input").addEventListener("change", input_file);

document.getElementsByClassName('bar')[0].addEventListener('click', function(e) {
    if (e?.srcElement?.dataset?.val != undefined) {
        console.clear()
        array_log(parseInt(e.srcElement.dataset.val))
    }

})
