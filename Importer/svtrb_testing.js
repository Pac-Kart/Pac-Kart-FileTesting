function get_x_svtrb() {

    globalThis.offset_mid = undefined

    for (let i = 0; i < u32(12); i++) {
        get_svtrb_directory(16 + (i * 24), 16 + (u32(12) * 24))
    }
}
function get_svtrb_directory(o, end_offset) {
    globalThis.log_array = {
        p_texture: {
            offset: 0,
            array: []
        },
        p_animation: {
            offset: 0,
            array: []
        },
        p_sound: {
            offset: 0,
            array: []
        },
        order: 0,
        model: 0,
        model_anim_1: 0,
        model_anim_2: 0,
        unordered: 0,
        p_model: {
            offset: 0,
            array: [],
            array_type: [],
        },
        multilinked: [],
        ä_array: [],
        p_offset: {
            offset: 0,
            array: [],
            pointers: [],
        },
        print: show_debug.checked

    }
    if (u32(0) !== 33620128 || u32(4) !== 67174575)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], 0)

    globalThis.svtrb_interface = []
    globalThis.svtrb_text = []
    globalThis.svtrb_font = []
    globalThis.svtrb_unknown_thing = []
    globalThis.svtrb_sound_controls = []
    globalThis.svtrb_sound_section = []
    globalThis.svtrb_unknown = []
    globalThis.svtrb_model = []
    globalThis.svtrb_model_anims_1 = []
    globalThis.svtrb_model_anims_2 = []
    globalThis.svtrb_asdf = []
    globalThis.svtrb_world_12 = []
    globalThis.svtrb_strange = []
    globalThis.svtrb_some_random_section = []
    globalThis.svtrb_world_20 = []
    globalThis.svtrb_world_116 = []
    globalThis.svtrb_world_44 = []
    globalThis.svtrb_unknown_idk_sub_sec = []
    globalThis.svtrb_world_60 = []
    globalThis.svtrb_world_92 = []
    globalThis.svtrb_world_100 = []
    globalThis.svtrb_world_108 = []
    globalThis.svtrb_object = []
    globalThis.svtrb_idk = []
    globalThis.svtrb_model_link = []
    globalThis.svtrb_car_extended_link = []
    globalThis.svtrb_car_extended_sub_link = []
    globalThis.svtrb_multi_font = []
    globalThis.svtrb_some_model_anims_section = []
    globalThis.svtrb_unknown_idk_sec = []
    globalThis.svtrb_gate = []
    globalThis.svtrb_world_4 = []
    globalThis.svtrb_world_68 = []
    globalThis.svtrb_world_84 = []
    globalThis.svtrb_world_idk = []
    globalThis.svtrb_world_120_0 = []
    globalThis.svtrb_world_36 = []
    globalThis.svtrb_flag = []
    globalThis.svtrb_activator = []
    globalThis.svtrb_something = []
    globalThis.svtrb_car = []
    globalThis.svtrb_var = []
    globalThis.svtrb_car_link_model = []
    globalThis.svtrb_asdf_model = []
    globalThis.svtrb_world_0_64 = []
    globalThis.svtrb_world_0_32_40 = []
    globalThis.svtrb_interface_text_related = []
    globalThis.svtrb_maybe_car_related = []
    globalThis.svtrb_world_mode_4_links = []
    globalThis.svtrb_small_texture_link = []
    globalThis.svtrb_single_car_sec = []
    globalThis.svtrb_model_20_4_0tps2t2 = []
    globalThis.svtrb_model_20_4_0tpsp_108t0 = []

    // if (g.console !== "pc") {} else {
    //     return
    // }

    director_offset = o
    g.type = u32(o + 4)
    g.datapack_end = u32(director_offset + 16) + u32(director_offset + 20) + end_offset

    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)

    get_svtrb_datapack(end_offset + u32(o + 20))

    print_logarray(log_array)

}

function get_svtrb_datapack(o) {
    if (u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 96) || u32(o + 104) || u32(o + 108) || u32(o + 116))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], o)
    let end_datapack;
    let after_datapack;
    let end_audio;
    if (g.console === 'psp') {
        end_datapack = o + 120
        after_datapack = end_datapack
        if (u32(o + 8) || u32(o + 4)) {
            end_datapack += divisible(u32(o + 8) * 4, 32)
            end_audio = end_datapack
            end_datapack += u32(o + 4)
        }
        offset_mid = end_datapack + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)
    } else if (g.console === 'ps2') {
        end_datapack = o + 120
        end_datapack = divisible(end_datapack, 2048)
        after_datapack = end_datapack
        // console.log("sound list",end_datapack)
        if (u32(o + 8) || u32(o + 4)) {
            end_datapack += divisible(u32(o + 8) * 4, 32)
            // console.log("after sound list",end_datapack)
            end_audio = end_datapack
            end_datapack += u32(o + 4)

            end_datapack = divisible(end_datapack, 2048)
            // console.log("patch list",end_datapack)
        }
        offset_mid = end_datapack + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)
    } else {
        end_datapack = o + 128
        after_datapack = end_datapack
        if (u32(o + 8) || u32(o + 4)) {
            end_datapack += divisible(u32(o + 8) * 4, 32)
            end_audio = end_datapack
            end_datapack += u32(o + 4)
        }
        offset_mid = end_datapack + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)
    }

    g.datapack_end = g.datapack_end - ((u32(o + 56) * 8) + (u32(o + 12) * 4))

    // svtrb_get_index_patch_list(o, end_datapack)
    // svtrb_get_offset_patch_list(o, offset_mid + u32(o))

    globalThis.old_log_array = structuredClone(log_array)

    if (g.console === 'psp') {
        for (let i = 0; i < u32(o + 20); i++) {
            get_svtrb_texture_psp(offset_mid + u32(o + 24) + (i * 52))
        }
    } else {
        for (let i = 0; i < u32(o + 20); i++) {
            get_svtrb_texture(offset_mid + u32(o + 24) + (i * 16))
        }
    }

    for (let i = 0; i < u32(o + 48); i++) {
        get_svtrb_texture_anims(offset_mid + u32(o + 60) + (i * 12))
    }

    if (g.console === 'pc') {
        for (let i = 0; i < u32(o + 80); i++) {
            get_svtrb_datapack_text_link(offset_mid + u32(o + 84) + (i * 8))
        }
    }

    switch (g.type) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 9:
    case 10:
        // get_svtrb_basic(offset_mid)
        break
    case 4:
        // get_svtrb_world(offset_mid)
        break
    case 8:
        // for (let i = 0; i < u32(o + 56); i++) {
        //     get_svtrb_share(offset_mid + (i * 4))
        // }
        break
    default:
        console.log("?")
    }

    for (let i = 0; i < u32(o + 32); i++) {
        get_svtrb_audio(after_datapack + (i * 4), end_audio)
    }

}
function get_svtrb_audio(o, n) {
    /*ü(1, [u32, 0], o)*/
    get_svtrb_audio_0(u32(o) + n)
}
function get_svtrb_audio_0(o) {
    if (u32(o + 16) || u16(o + 20) !== 32767 || u16(o + 22) !== 16 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28], o)
}

function get_svtrb_share(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_model', o, 0)
}

function get_svtrb_texture_anims(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_svtrb_texture_anims_0)

}

function get_svtrb_texture(o) {
    if (u8(o + 1) !== 2)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_texture_8)
    ö(u32(o + 12), get_svtrb_texture_12)

}

function get_svtrb_texture_8(o) {// texture data
}
function get_svtrb_texture_12(o) {// ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
// console.log(get_string(o, 0, false))
}
function get_svtrb_texture_psp(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) !== 2 || u8(o + 5) || u32(o + 8) !== 52 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48], o)

    ö(u32(o + 12), get_svtrb_texture_psp_12)
    ö(u32(o + 16), get_svtrb_texture_psp_16)
    ö(u32(o + 20), get_svtrb_texture_psp_20)

}

function get_svtrb_texture_psp_12(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_texture_psp_16(o) {// color table 1024 bytes
}
function get_svtrb_texture_psp_20(o) {//texture data
}

function svtrb_get_index_patch_list(o, patch_offset) {
    patchlistoffset = patch_offset
    log_array.p_texture.offset = patchlistoffset
    for (let i = 0; i < u32(o + 16); i++) {
        log_array.p_texture.array.push(u32(patchlistoffset + (i * 8)))
    }
    patchlistoffset += u32(o + 16) * 8
    log_array.p_animation.offset = patchlistoffset
    for (let i = 0; i < u32(o + 52); i++) {
        log_array.p_animation.array.push(u32(patchlistoffset + (i * 8)))
    }
    patchlistoffset += u32(o + 52) * 8
    log_array.p_sound.offset = patchlistoffset
    for (let i = 0; i < u32(o + 28); i++) {
        log_array.p_sound.array.push(u32(patchlistoffset + (i * 8)))
    }

}

function svtrb_get_offset_patch_list(o, patch_offset) {
    patchlistoffset = patch_offset
    log_array.p_model.offset = patchlistoffset
    for (let i = 0; i < u32(o + 56); i++) {
        log_array.p_model.array.push(u32(patchlistoffset + (i * 8)))
        log_array.p_model.array_type.push(u16(patchlistoffset + (i * 8) + 6))
    }
    patchlistoffset += u32(o + 56) * 8
    log_array.p_offset.offset = patchlistoffset
    for (let i = 0; i < u32(o + 12); i++) {
        log_array.p_offset.array.push(u32(patchlistoffset + (i * 4)))
    }

    let _2ndarray = []
    for (let patchoffset of log_array.p_offset.array) {
        _2ndarray.push(u32(patchoffset + offset_mid))
    }
    log_array.p_offset.pointers = _2ndarray.slice(0)

    log_array.multilinked = []
    let temp__2ndarray = _2ndarray.length
    for (let i = 0; i < temp__2ndarray; i++) {
        let temp = _2ndarray[i]
        _2ndarray[i] = '?'
        if (_2ndarray.indexOf(temp) !== -1) {
            log_array.multilinked.push(temp)
        }
    }

}

function get_svtrb_datapack_text_link(o) {
    // if (u32(o + 0))
        // ü(1, [u32, 0, u32, 4], o)

    ö(u32(o + 4), get_svtrb_datapack_text_link_0)

    // ä(svtrb_text, u32(o + 4), get_svtrb_text)
}
function get_svtrb_datapack_text_link_0(o) {
         // ü(1, [u32, 0, u32, 4], o)
   ö(u32(o + 0), get_svtrb_datapack_text_link_0_0)
}
function get_svtrb_datapack_text_link_0_0(o) {
// console.log(get_string(o, 0, false))
}

function get_svtrb_world(o) {
    // if (u32(o + 0) !== 288 || u32(o + 48) || u32(o + 52) || u32(o + 72) || u32(o + 76) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 180) || u32(o + 184) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 212) || u32(o + 216) || u32(o + 220))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u8, 224, u8, 225, u8, 226, u8, 227, u8, 228, u8, 229, u8, 230, u8, 231, u8, 232, u8, 233, u8, 234, u8, 235, u8, 236, u8, 237, u8, 238, u8, 239, u32, 240, u8, 244, u8, 245, u8, 246, u8, 247, u8, 248, u8, 249, u8, 250, u8, 251, u8, 252, u8, 253, u8, 254, u8, 255, u8, 256, u8, 257, u8, 258, u8, 259, u8, 260, u8, 261, u8, 262, u8, 263, u8, 264, u8, 265, u8, 266, u8, 267, u8, 268, u8, 269, u8, 270, u8, 271, u8, 272, u8, 273, u8, 274, u8, 275, u8, 276, u8, 277, u8, 278, u8, 279, u8, 280, u8, 281, u8, 282, u8, 283, f32, 284], o)

    ö(u32(o + 0), get_svtrb_world_0)
    ä(svtrb_world_4, u32(o + 4), get_svtrb_world_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ä(svtrb_world_12, u32(o + 12) + (i * 144), get_svtrb_world_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ä(svtrb_world_20, u32(o + 20) + (i * 112), get_svtrb_world_20)
    }

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 112), get_svtrb_world_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ä(svtrb_world_36, u32(o + 36) + (i * 64), get_svtrb_world_36)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ä(svtrb_world_44, u32(o + 44) + (i * 144), get_svtrb_world_44)
    }
    for (let i = 0; i < u32(o + 56); i++) {
        ä(svtrb_world_60, u32(o + 60) + (i * 80), get_svtrb_world_60)
    }

    for (let i = 0; i < u32(o + 64); i++) {
        ä(svtrb_world_68, u32(o + 68) + (i * 112), get_svtrb_world_68)
    }

    for (let i = 0; i < u32(o + 80); i++) {
        ä(svtrb_world_84, u32(o + 84) + (i * 80), get_svtrb_world_84)
    }

    for (let i = 0; i < u32(o + 88); i++) {
        ä(svtrb_world_92, u32(o + 92) + (i * 96), get_svtrb_world_92)
    }

    for (let i = 0; i < u32(o + 96); i++) {
        ä(svtrb_world_100, u32(o + 100) + (i * 80), get_svtrb_world_100)
    }

    for (let i = 0; i < u32(o + 104); i++) {
        ä(svtrb_world_108, u32(o + 108) + (i * 80), get_svtrb_world_108)
    }
    for (let i = 0; i < u32(o + 112); i++) {
        ä(svtrb_world_116, u32(o + 116) + (i * 112), get_svtrb_world_116)
    }

    ö(u32(o + 120), get_svtrb_world_120)
    ö(u32(o + 172), get_svtrb_world_settings)
    ö(u32(o + 176), get_svtrb_world_176)
    for (let i = 0; i < u32(o + 204); i++) {
        ö(u32(o + 208) + (i * 4), get_svtrb_world_208)
    }

}

function get_svtrb_world_0(o) {
    // if (f32(o + 12) !== 1 || f32(o + 28) !== 1 || u32(o + 36) !== 20 || u32(o + 72) || u32(o + 76) || u32(o + 84) !== 384 || u32(o + 88) !== 1 || u32(o + 92))
    ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, f32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 32) + (i * 48), get_svtrb_world_0_32)
    }
    let amt = u32(o + 52) + u32(o + 56) + u32(o + 60)
    for (let i = 0; i < amt; i++) {
        ä(svtrb_world_0_64, u32(o + 64) + (i * 4), get_svtrb_world_0_64)
    }
    if (u32(o + 80) === 0) {
        // check if 84 is still offset
        ö(u32(o + 84), get_svtrb_world_0_84t0)
    }
    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 64), get_svtrb_world_0_84)
    }

}
function get_svtrb_world_0_84t0(o) {
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
}

function get_svtrb_world_0_32(o) {
    /*  ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u8, 28,u8, 29,u8, 30,u8, 31, u32, 32, u32, 36, u32, 40, u32, 44], o) */
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)

    if (u32(o + 32)) {
        for (let i = 0; i < u32(o + 32); i++) {
            ö(u32(o + 36) + (i * 2), get_svtrb_world_0_32_36)
        }
    } else {
        ö(u32(o + 36), get_svtrb_world_0_32_36t0)
    }
    for (let i = 0; i < u32(o + 44); i++) {
        ä(svtrb_world_0_32_40, u32(o + 40) + (i * 16), get_svtrb_world_0_32_40)

    }

}
function get_svtrb_world_0_32_36t0(o) {
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
}

function get_svtrb_world_0_32_36(o) {
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
    /*ü(1, [u8, 0, u8, 1], o)*/
}
function get_svtrb_world_0_32_40(o) {
    // if (u8(o + 10) || u8(o + 11) || u8(o + 13) || u8(o + 14) || u8(o + 15))
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 0) + (i * 32), get_svtrb_world_0_32_40_0)
    }

}

function get_svtrb_world_0_32_40_0(o) {
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
    /*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, f32, 24, f32, 28], o)*/
}

function get_svtrb_world_0_64(o) {
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
    /*ü(1, [u32, 0], o)*/
}
function get_svtrb_world_0_84(o) {
    // if (f32(o + 28) !== 1 || f32(o + 44) !== 1 || u8(o + 49) || u8(o + 50) || u8(o + 51))
    ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u8, 56, u8, 57, u8, 58, u8, 59, u8, 60, u8, 61, u8, 62, u8, 63], o)
}

function get_svtrb_world_4(o) {
    // if (u32(o + 12) || f32(o + 32) !== 500 || f32(o + 40) !== 500 || u32(o + 48) !== 1 || u32(o + 56) || u32(o + 60))
    ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 16) + (i * 88), get_svtrb_world_4_16)
    }
    if (u32(o + 24) === 0) {
        ö(u32(o + 20), get_svtrb_world_4_20t0)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 20) + (i * 4), get_svtrb_world_4_20)
    }

}

function get_svtrb_world_4_20t0(o) {
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
    // temp offset?
}

function get_svtrb_world_4_16(o) {
    // if (u32(o + 0) || u32(o + 4) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84], o)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_svtrb_world_4_16_12)
    }
    ö(u32(o + 20), get_svtrb_world_4_16_12)
    ö(u32(o + 84), get_svtrb_world_4_16_12)

}

function get_svtrb_world_4_16_12(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)

    ä(svtrb_world_60, u32(o + 0), get_svtrb_world_60)

}

function get_svtrb_world_4_20(o) {
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
    /*ü(1, [u32, 0], o)*/
}

function get_svtrb_world_12(o) {
    // if (u16(o + 4) || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u8(o + 68) || u8(o + 69) || u8(o + 70) !== 1 || u8(o + 71) !== 1 || f32(o + 72) !== 500 || f32(o + 76) !== 1000 || u32(o + 96) || u32(o + 100) || u32(o + 104) || u8(o + 110) !== 255 || u8(o + 111) !== 255 || u8(o + 112) || u8(o + 113) || u8(o + 114) !== 1 || u8(o + 115) || u32(o + 116) || u32(o + 128) || u32(o + 136) || u32(o + 140))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u8, 68, u8, 69, u8, 70, u8, 71, f32, 72, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u8, 108, u8, 109, u8, 110, u8, 111, u8, 112, u8, 113, u8, 114, u8, 115, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ä(svtrb_car, u32(o + 60), get_svtrb_car)

    ä(svtrb_world_idk, u32(o + 80), get_svtrb_world_idk)
    ä(svtrb_world_idk, u32(o + 84), get_svtrb_world_idk)
    ä(svtrb_world_idk, u32(o + 88), get_svtrb_world_idk)
    ä(svtrb_world_idk, u32(o + 92), get_svtrb_world_idk)

}

function get_svtrb_world_20(o) {
    // if (u16(o + 4) !== 1 || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 48) || u32(o + 56) || u8(o + 79) || f32(o + 80) !== 1000 || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u8, 76, u8, 77, u8, 78, u8, 79, f32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    ä(svtrb_model_anims_1, u32(o + 64), get_svtrb_model_anims_1)
    ä(svtrb_idk, u32(o + 72), get_svtrb_idk)

}

function get_svtrb_world_28(o) {
    // if (u16(o + 4) !== 2 || u16(o + 6) !== 1 || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u16(o + 16) !== 1 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 44) || u32(o + 48) || u32(o + 68) || u32(o + 80) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 108))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    for (let i = 0; i < u32(o + 52); i += 32) {
        ö(u32(o + 56) + i, get_svtrb_world_28_56)
    }
    // size prob 32 bytes ?
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 4), get_svtrb_world_28_64)
    }
    globalThis.get_svtrb_world_28_72_count = u32(o + 40);
    ö(u32(o + 72), get_svtrb_world_28_72)
    delete get_svtrb_world_28_72_count

    ö(u32(o + 76), get_svtrb_world_28_76)
    for (let i = 0; i < u32(o + 104); i++) {
        ö(u32(o + 100), get_svtrb_world_28_100)
    }

}

function get_svtrb_world_28_56(o) {
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
    /*ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)*/
}
function get_svtrb_world_28_64(o) {
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
    /*ü(1, [u32, 0], o)*/
}
function get_svtrb_world_28_72(o) {
    // if (u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < get_svtrb_world_28_72_count; i++) {
        ö(u32(o + 0) + (i * 4), get_svtrb_world_28_72_0)
    }

}

function get_svtrb_world_28_72_0(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)

    ä(svtrb_world_116, u32(o + 0), get_svtrb_world_116)

}

function get_svtrb_world_28_76(o) {
    // if (u32(o + 0) || u32(o + 28))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_svtrb_world_28_76_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 4), get_svtrb_world_28_76_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 4), get_svtrb_world_28_76_24)
    }

}

function get_svtrb_world_28_76_8(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)

    ä(svtrb_world_92, u32(o + 0), get_svtrb_world_92)

}

function get_svtrb_world_28_76_16(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)

    ä(svtrb_world_100, u32(o + 0), get_svtrb_world_100)

}

function get_svtrb_world_28_76_24(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)

    ä(svtrb_world_108, u32(o + 0), get_svtrb_world_108)

}

function get_svtrb_world_28_100(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
}

function get_svtrb_world_36(o) {
    // if (u16(o + 4) !== 3 || u16(o + 6) || u32(o + 8) || u16(o + 12) || u16(o + 14) !== 8 || u16(o + 16) || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ä(svtrb_sound_controls, u32(o + 48), get_svtrb_sound_controls)

}

function get_svtrb_world_44(o) {
    // if (u16(o + 4) !== 4 || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 36) || u32(o + 44) || u32(o + 60) || u32(o + 76) || f32(o + 92) !== 1 || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 10 || u32(o + 120) || u32(o + 132) || u32(o + 136) || u32(o + 140))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, f32, 64, f32, 68, f32, 72, u32, 76, f32, 80, f32, 84, f32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ä(svtrb_world_44, u32(o + 128), get_svtrb_world_44)

}

function get_svtrb_world_60(o) {
    // if (u16(o + 4) !== 8 || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1)
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, u32, 76], o)

    // let amt = 12
    // switch (offset_mid + u32(o + 72)) {
    // case 1390656:
    // case 1398160:
    // case 4553600:
    //     amt = 32
    //     ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, u32, 76], o)
    //     break
    // default:
    //     ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, u32, 76], o)
    // }
    // for (let i = 0; i < amt; i++) {
    //     ö(u32(o + 72) + (i * 32), get_svtrb_world_60_72)
    // }
    //only CBN_01 1024 bytes
    ö(u32(o + 72), get_svtrb_world_60_72)
    ö(u32(o + 76), get_svtrb_world_60_76)

}

function get_svtrb_world_60_72(o) {
    // ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, f32, 20, f32, 24, f32, 28], o)
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
}
function get_svtrb_world_60_76(o) {
    // if (u8(o + 4) || u8(o + 5) || u8(o + 7))
    ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, f32, 28], o)
}

function get_svtrb_world_68(o) {
    // if (u16(o + 4) !== 10 || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || f32(o + 60) !== 1 || u32(o + 80) !== 5000 || u32(o + 88) || u32(o + 108))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, f32, 68, f32, 72, u8, 76, u8, 77, u8, 78, u8, 79, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, f32, 100, f32, 104, u32, 108], o)

    ä(svtrb_activator, u32(o + 64), get_svtrb_activator)
}

function get_svtrb_world_84(o) {
    // if (u16(o + 4) !== 11 || u32(o + 8) || u16(o + 14) !== 8 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 68) || u32(o + 72) || u32(o + 76))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ä(svtrb_world_12, u32(o + 64), get_svtrb_world_12)

}

function get_svtrb_world_92(o) {
    // if (u16(o + 4) !== 13 || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u8(o + 75) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, f32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ä(svtrb_idk, u32(o + 64), get_svtrb_idk)

}

function get_svtrb_world_100(o) {
    // if (u16(o + 4) !== 14 || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 68))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, f32, 72, u32, 76], o)

    ä(svtrb_strange, u32(o + 64), get_svtrb_strange)

}

function get_svtrb_world_108(o) {
    // if (u16(o + 4) !== 15 || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) || u8(o + 71) || u8(o + 74) || u8(o + 75) || u32(o + 76))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76], o)

    ä(svtrb_object, u32(o + 56), get_svtrb_object)

}

function get_svtrb_world_116(o) {
    // if (u16(o + 4) !== 5 || u32(o + 8) || u16(o + 14) !== 8 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || f32(o + 52) !== 1 || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || f32(o + 72) !== 1 || u32(o + 76) || f32(o + 92) !== 1 || u32(o + 96) || u32(o + 104) || u32(o + 108))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, u32, 76, f32, 80, f32, 84, f32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)
    ß('p_model', o, 100)
}
function get_svtrb_world_120(o) {
    // if (u32(o + 12))
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ä(svtrb_world_120_0, u32(o + 0) + (i * 128), get_svtrb_world_120_0)
    }

}

function get_svtrb_world_120_0(o) {
    // if (u16(o + 4) !== 16 || u32(o + 8) || u16(o + 14) || u16(o + 18) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 120) || u32(o + 124))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)

    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 4), get_svtrb_world_120_0_52)
        ö(u32(o + 56) + (i * 4), get_svtrb_world_120_0_56)
    }
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 4), get_svtrb_world_120_0_64)
    }

}

function get_svtrb_world_120_0_52(o) {
    /*ü(1, [f32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
}
function get_svtrb_world_120_0_56(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
}
function get_svtrb_world_120_0_64(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
}

function get_svtrb_world_176(o) {
    // if (u32(o + 48) || u32(o + 52) || u32(o + 72) || u32(o + 76) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_world_176_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_svtrb_world_176_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 4), get_svtrb_world_176_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 4), get_svtrb_world_176_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 4), get_svtrb_world_176_36)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 4), get_svtrb_world_176_44)
    }
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 4), get_svtrb_world_176_60)
    }
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 4), get_svtrb_world_176_68)
    }

    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 4), get_svtrb_world_176_84)
    }
    for (let i = 0; i < u32(o + 88); i++) {
        ö(u32(o + 92) + (i * 4), get_svtrb_world_176_92)
    }

}

function get_svtrb_world_176_4(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    ä(svtrb_flag, u32(o + 0), get_svtrb_flag)

}

function get_svtrb_world_176_12(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    ä(svtrb_var, u32(o + 0), get_svtrb_var)

}

function get_svtrb_world_176_20(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    ä(svtrb_something, u32(o + 0), get_svtrb_something)

}

function get_svtrb_world_176_28(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    globalThis.svtrbtemptype = 28
    ö(u32(o + 0), get_svtrb_world_mode)

}

function get_svtrb_world_176_36(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    alert("a")
    globalThis.svtrbtemptype = 36
    ö(u32(o + 0), get_svtrb_world_mode)

}

function get_svtrb_world_176_44(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    globalThis.svtrbtemptype = 44
    ö(u32(o + 0), get_svtrb_world_mode)
}

function get_svtrb_world_176_60(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    globalThis.svtrbtemptype = 60
    ö(u32(o + 0), get_svtrb_world_mode)

}

function get_svtrb_world_176_68(o) {
    // if (u32(o + 0) !== 8642400)
    ü(1, [u32, 0], o)

    globalThis.svtrbtemptype = 68
    ö(u32(o + 0), get_svtrb_world_mode)

}

function get_svtrb_world_176_84(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    globalThis.svtrbtemptype = 84
    ö(u32(o + 0), get_svtrb_world_mode)

}

function get_svtrb_world_176_92(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    globalThis.svtrbtemptype = 92
    ö(u32(o + 0), get_svtrb_world_mode)

}

function get_svtrb_world_208(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_gate, u32(o + 0), get_svtrb_gate)

}

function get_svtrb_basic(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 16 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_basic_4)

}

function get_svtrb_basic_4(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    switch (g.type) {
    case 0:
        ä(svtrb_car, u32(o), get_svtrb_car)
        break
    case 1:
        ä(svtrb_interface, u32(o), get_svtrb_interface)
        break
    case 3:
        ö(u32(o), get_svtrb_link)
        break
    default:
        if (u32(o))
            ü(1, [u32, 0, u32, 4], o)
    }

}

function get_svtrb_car(o) {
    if (u32(o + 4) !== 10 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_car_0)

}

function get_svtrb_car_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 20) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 100) || u32(o + 104) || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)

    ä(svtrb_model_anims_2, u32(o + 24), get_svtrb_model_anims_2)
    ä(svtrb_model_anims_2, u32(o + 28), get_svtrb_model_anims_2)
    ö(u32(o + 32), get_svtrb_car_0_32)
    ä(svtrb_car_link_model, u32(o + 36), get_svtrb_car_link_model)

    ö(u32(o + 40), get_svtrb_car_0_40)
    ö(u32(o + 44), get_svtrb_car_0_44)
    ö(u32(o + 48), get_svtrb_car_0_48)
    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 12), get_svtrb_car_0_56)
    }
    ö(u32(o + 76), get_svtrb_car_0_76)
    ö(u32(o + 80), get_svtrb_car_0_80)
    ö(u32(o + 84), get_svtrb_car_0_84)
    ö(u32(o + 88), get_svtrb_car_0_88)
    for (let i = 0; i < u32(o + 92); i++) {
        ö(u32(o + 96) + (i * 4), get_svtrb_car_0_96)
    }
    ö(u32(o + 112), get_svtrb_car_0_112)

}

function get_svtrb_car_0_32(o) {
    if (u32(o + 16) || u32(o + 20))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_model_link, u32(o + 0), get_svtrb_model_link)

    ö(u32(o + 4), get_svtrb_car_0_32_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_svtrb_car_0_32_12)
    }

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 8), get_svtrb_car_0_32_28)
    }

}

function get_svtrb_model_link(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44], o)*/

    ö(u32(o + 4), get_svtrb_model_link_4)
    ö(u32(o + 8), get_svtrb_model_link_8)
    ä(svtrb_model_anims_1, u32(o + 12), get_svtrb_model_anims_1)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 64), get_svtrb_mysterious)
    }

    ö(u32(o + 32), get_svtrb_model_link_32)
    ö(u32(o + 36), get_svtrb_model_link_36)
    ö(u32(o + 40), get_svtrb_model_link_40)
    ö(u32(o + 44), get_svtrb_model_link_44)

}

function get_svtrb_model_link_4(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_model_link_8(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_model_anims_2, u32(o + 0), get_svtrb_model_anims_2)
    ö(u32(o + 8), get_svtrb_model_link_8_8)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_svtrb_model_link_8_16)
    }

}
function get_svtrb_model_link_8_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_model', o, 0)
}

function get_svtrb_model_link_8_16(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/
    ß('p_model', o, 0)

}

function get_svtrb_model_link_32(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_link_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_link_40(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_link_44(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_svtrb_car_0_32_4(o) {
    if (f32(o + 28) !== 1 || f32(o + 72) !== 1.350000023841858 || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ö(u32(o + 4), get_svtrb_car_0_32_4_4)
    ö(u32(o + 20), get_svtrb_car_0_32_4_20)
    ö(u32(o + 36), get_svtrb_car_0_32_4_36)
    ö(u32(o + 44), get_svtrb_car_0_32_4_44)
    ö(u32(o + 60), get_svtrb_car_0_32_4_60)
    ö(u32(o + 68), get_svtrb_car_0_32_4_68)
    ö(u32(o + 80), get_svtrb_car_0_32_4_80)

}

function get_svtrb_car_0_32_4_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_32_4_20(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_32_4_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_32_4_44(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_32_4_60(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_32_4_68(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_32_4_80(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_32_12(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 64), get_svtrb_mysterious)
    }

    //mysterious ?
}

function get_svtrb_car_0_32_28(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_svtrb_car_0_32_28_4)

}
function get_svtrb_car_0_32_28_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_0_32_28_4_4)

}

function get_svtrb_car_0_32_28_4_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_model_link, u32(o + 0), get_svtrb_model_link)

}
function get_svtrb_car_0_32_28_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_0_32_28_12_4)

}

function get_svtrb_car_0_32_28_12_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_model_link, u32(o + 0), get_svtrb_model_link)

}

function get_svtrb_car_link_model(o) {
    if (u32(o + 0) || u8(o + 20) !== 255 || u8(o + 21) !== 255 || u8(o + 22) !== 255 || u8(o + 23) !== 255 || u8(o + 28) !== 255 || u8(o + 29) !== 255 || u8(o + 30) !== 255 || u8(o + 31) !== 255 || u8(o + 32) !== 255 || u8(o + 33) !== 255 || u8(o + 34) !== 255 || u8(o + 35) !== 255 || u8(o + 36) !== 255 || u8(o + 37) !== 255 || u8(o + 38) !== 255 || u8(o + 39) !== 255 || u8(o + 44) !== 255 || u8(o + 45) !== 255 || u8(o + 46) !== 255 || u8(o + 47) !== 255 || u32(o + 48) || u32(o + 76))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ä(svtrb_model_anims_2, u32(o + 52), get_svtrb_model_anims_2)

    ö(u32(o + 56), get_svtrb_car_link_model_56)
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 8), get_svtrb_car_link_model_64)
    }
    ö(u32(o + 72), get_svtrb_car_link_model_72)

}

function get_svtrb_car_link_model_56(o) {
    if (u32(o + 0) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_svtrb_car_link_model_56_4)
    ö(u32(o + 12), get_svtrb_car_link_model_56_12)

}

function get_svtrb_car_link_model_56_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_link_model_56_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_link_model_64(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_svtrb_car_link_model_64_4)

}

function get_svtrb_car_link_model_64_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_car_link_model_64_4_4)
    }

}

function get_svtrb_car_link_model_64_4_4(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ä(svtrb_model_link, u32(o + 0), get_svtrb_model_link)
    ä(svtrb_model_link, u32(o + 4), get_svtrb_model_link)

}

function get_svtrb_car_link_model_72(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_car_0_40(o) {
    if (f32(o + 0) !== 0.75 || f32(o + 4) !== 2)
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)

    ö(u32(o + 12), get_svtrb_car_0_40_12)

}

function get_svtrb_car_0_40_12(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_0_40_12_4)
    ö(u32(o + 8), get_svtrb_car_0_40_12_8)

}

function get_svtrb_car_0_40_12_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_car_0_40_12_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_car_0_40_12_8_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_svtrb_car_0_40_12_8_8)
    }

}

function get_svtrb_car_0_40_12_8_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_0_40_12_8_0_4)

}

function get_svtrb_car_0_40_12_8_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_40_12_8_8(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ö(u32(o + 0), get_svtrb_car_0_40_12_8_8_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 24), get_svtrb_car_0_40_12_8_8_8)
    }

}

function get_svtrb_car_0_40_12_8_8_0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_car_0_40_12_8_8_0_4)
    ö(u32(o + 12), get_svtrb_car_0_40_12_8_8_0_12)

}

function get_svtrb_car_0_40_12_8_8_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_40_12_8_8_0_12(o) {
    if (u8(o + 0) !== 182 || u8(o + 1) !== 111 || u8(o + 2) !== 154 || u8(o + 3) !== 18 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_40_12_8_8_8(o) {
    if (u8(o + 1) !== 2 || u8(o + 2) || u8(o + 3) || f32(o + 16) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20], o)

    ö(u32(o + 8), get_svtrb_car_0_40_12_8_8_8_8)
    ä(svtrb_gate, u32(o + 12), get_svtrb_gate)

}

function get_svtrb_car_0_40_12_8_8_8_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_svtrb_car_0_44(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 4)

    ä(svtrb_text, u32(o + 0), get_svtrb_text)

}

function get_svtrb_car_0_48(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_56(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_mysterious(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 12) || f32(o + 28) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60], o)

    switch (u8(o + 0)) {
    case 1:
        ä(svtrb_unknown, u32(o + 4), get_svtrb_unknown)
        break
    case 2:
        ä(svtrb_strange, u32(o + 4), get_svtrb_strange)
        break
    case 3:
        ä(svtrb_sound_controls, u32(o + 4), get_svtrb_sound_controls)
        break
    case 5:
    case 6:
        ö(u32(o + 4), get_svtrb_mysterious_4t5)
        break
    case 7:
        ö(u32(o + 4), get_svtrb_mysterious_4t7)
        break
    case 8:
        ä(svtrb_model_link, u32(o + 4), get_svtrb_model_link)
        break
    case 9:
        ä(svtrb_some_random_section, u32(o + 4), get_svtrb_some_random_section)
        break
    case 10:
        ö(u32(o + 4), get_svtrb_mysterious_4t10)
        break
    case 11:
        ä(svtrb_activator, u32(o + 4), get_svtrb_activator)
        break
    case 13:
        ä(svtrb_object, u32(o + 4), get_svtrb_object)
        break
    case 15:
        ä(svtrb_idk, u32(o + 4), get_svtrb_idk)
        break
    case 16:
        ö(u32(o + 4), get_svtrb_mysterious_4t16)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

    /*
    from ps2
    16 = offset
    */
    ö(u32(o + 8), get_svtrb_mysterious_8)

}

function get_svtrb_strange(o) {
    if (u8(o + 11) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_strange_4)
    }
    ä(svtrb_sound_controls, u32(o + 28), get_svtrb_sound_controls)

}

function get_svtrb_strange_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)
}

function get_svtrb_mysterious_4t5(o) {
    if (u8(o + 1) || u32(o + 8) || u8(o + 24) || u8(o + 25) || u8(o + 27) || u32(o + 28) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    switch (u8(o + 3)) {
    case 0:
        ö(u32(o + 16), get_svtrb_mysterious_4t5_16t0)
        break
    case 2:
    case 5:
        for (let i = 0; i < u32(o + 12); i++) {
            ö(u32(o + 16) + (i * 4), get_svtrb_mysterious_4t5_16t2)
        }
        break

    default:
        if (u32(o + 16)) {
            sü(u8, 3, o, 16)
        }
    }

    ö(u32(o + 36), get_svtrb_mysterious_4t5_36)
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 32), get_svtrb_mysterious_4t5_44)
    }
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 12), get_svtrb_mysterious_4t5_52)
    }
    ö(u32(o + 56), get_svtrb_mysterious_4t5_56)

}

function get_svtrb_mysterious_4t5_16t0(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_model', o, 0)

}
function get_svtrb_mysterious_4t5_16t2(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)
}

function get_svtrb_mysterious_4t5_36(o) {
    if (u32(o + 8) || u32(o + 12) || u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_mysterious_4t5_44(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_mysterious_4t5_52(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_svtrb_mysterious_4t5_56(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_mysterious_4t7(o) {
    if (u8(o + 0) || u32(o + 4) || u32(o + 16) !== 100 || f32(o + 20) !== 1 || u32(o + 40) !== 1 || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 12), get_svtrb_mysterious_4t7_12)
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_svtrb_mysterious_4t7_36)
    }
    ö(u32(o + 44), get_svtrb_mysterious_4t7_44)

}

function get_svtrb_mysterious_4t7_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 0)

}
function get_svtrb_mysterious_4t7_36(o) {/*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)*/
}
function get_svtrb_mysterious_4t7_44(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_some_random_section(o) {
    if (u8(o + 0))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_some_random_section_4)
    ö(u32(o + 8), get_svtrb_some_random_section_8)
    ö(u32(o + 12), get_svtrb_some_random_section_12)

}

function get_svtrb_some_random_section_4(o) {
    if (u8(o + 4) !== 5 || u32(o + 12) !== 100 || u8(o + 27) || u32(o + 28) !== 100 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_svtrb_some_random_section_4_8)
    ö(u32(o + 20), get_svtrb_some_random_section_4_20)

}

function get_svtrb_some_random_section_4_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_some_random_section_4_20(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_some_random_section_8(o) {
    if (u8(o + 4) !== 5 || u32(o + 12) !== 100 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_svtrb_some_random_section_8_8)

}

function get_svtrb_some_random_section_8_8(o) {
    if (u8(o + 0) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_some_random_section_12(o) {
    if (u8(o + 8) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_svtrb_some_random_section_12_4)
    ö(u32(o + 12), get_svtrb_some_random_section_12_12)
    ö(u32(o + 16), get_svtrb_some_random_section_12_16)

}

function get_svtrb_some_random_section_12_4(o) {
    if (f32(o + 16) !== 32 || u8(o + 36) || u8(o + 37) || u32(o + 40) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ß('p_texture', o, 0)

    ö(u32(o + 8), get_svtrb_some_random_section_12_4_8)
    ö(u32(o + 44), get_svtrb_some_random_section_12_4_44)
    ö(u32(o + 48), get_svtrb_some_random_section_12_4_48)

}

function get_svtrb_some_random_section_12_4_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_some_random_section_12_4_44(o) {
    if (u32(o + 4) !== 5 || u32(o + 16) !== 24 || u32(o + 20) !== 4 || u32(o + 24) || u32(o + 28) !== 6)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_svtrb_some_random_section_12_4_44_8)
    ö(u32(o + 12), get_svtrb_some_random_section_12_4_44_12)

}

function get_svtrb_some_random_section_12_4_44_8(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) || u8(o + 2) || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_some_random_section_12_4_44_12(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_some_random_section_12_4_48(o) {
    if (u32(o + 4) !== 5 || f32(o + 8) !== 0.5 || f32(o + 12) !== 0.5 || u32(o + 16) !== 100 || u32(o + 20) !== 200 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_font, u32(o + 0), get_svtrb_font)

}

function get_svtrb_some_random_section_12_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_some_random_section_12_12_4)

}

function get_svtrb_some_random_section_12_12_4(o) {
    if (u8(o + 4) !== 5 || u8(o + 5) !== 1 || u8(o + 6) !== 1 || u8(o + 7) || u32(o + 12) !== 60 || f32(o + 16) !== 256 || f32(o + 20) !== 20 || f32(o + 24) !== 100 || f32(o + 28) !== 1300 || f32(o + 32) !== 5500 || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_svtrb_some_random_section_12_12_4_8)

}

function get_svtrb_some_random_section_12_12_4_8(o) {
    if (u8(o + 0) || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_some_random_section_12_16(o) {
    if (u32(o + 0) || u32(o + 4) !== 5000 || u32(o + 8) !== 1000 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t10(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_mysterious_4t16(o) {
    if (u32(o + 16) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 8), get_svtrb_mysterious_4t16_8)
    ö(u32(o + 12), get_svtrb_mysterious_4t16_12)

    switch (u8(o + 3)) {
    case 0:
        ö(u32(o + 36), get_svtrb_mysterious_4t16_36t0)
        break
    case 1:
        ö(u32(o + 36), get_svtrb_mysterious_4t16_36t1)
        break
    default:
        if (u32(o + 36)) {
            sü(u8, 3, o, 36)
        }
    }

}
function get_svtrb_mysterious_4t16_36t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_mysterious_4t16_36t1_4)

}

function get_svtrb_mysterious_4t16_36t1_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 16) || u32(o + 24) || u32(o + 28) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_svtrb_mysterious_4t16_36t1_4_4)

}

function get_svtrb_mysterious_4t16_36t1_4_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_mysterious_4t16_36t1_4_4_4)

}

function get_svtrb_mysterious_4t16_36t1_4_4_4(o) {
    if (u8(o + 0) !== 9 || u8(o + 1) !== 147 || u8(o + 2) !== 14 || u8(o + 3) !== 30 || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_mysterious_4t16_36t1_4_4_4_4)

}

function get_svtrb_mysterious_4t16_36t1_4_4_4_4(o) {
    if (u8(o + 0) || u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_mysterious_4t16_8(o) {
    if (u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t16_12(o) {
    if (u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_mysterious_4t16_36t0(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_mysterious_4t16_36t0_8)

}

function get_svtrb_mysterious_4t16_36t0_8(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_activator(o) {
    if (u32(o + 16) || u32(o + 40) || u32(o + 44) || u32(o + 60) || u32(o + 76) || u8(o + 121) !== 1 || u8(o + 123) || u8(o + 152) || u8(o + 155) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 232) || u32(o + 252))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, u32, 76, f32, 80, f32, 84, f32, 88, f32, 92, f32, 96, f32, 100, f32, 104, u32, 108, u32, 112, u32, 116, u8, 120, u8, 121, u8, 122, u8, 123, u32, 124, f32, 128, f32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u8, 152, u8, 153, u8, 154, u8, 155, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, f32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252], o)

    ä(svtrb_model_anims_2, u32(o + 4), get_svtrb_model_anims_2)

    ö(u32(o + 8), get_svtrb_activator_8)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 24), get_svtrb_activator_24)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 24), get_svtrb_activator_32)
    }
    ö(u32(o + 36), get_svtrb_activator_36)
    ä(svtrb_gate, u32(o + 68), get_svtrb_gate)

    ö(u32(o + 108), get_svtrb_activator_108)
    ö(u32(o + 116), get_svtrb_activator_116)
    ö(u32(o + 124), get_svtrb_activator_124)
    for (let i = 0; i < u32(o + 140); i++) {
        ö(u32(o + 144) + (i * 16), get_svtrb_activator_144)
    }

    ö(u32(o + 148), get_svtrb_activator_148)
    for (let i = 0; i < u32(o + 156); i++) {
        ö(u32(o + 160) + (i * 20), get_svtrb_activator_160)
    }
    for (let i = 0; i < u32(o + 164); i++) {
        ö(u32(o + 168) + (i * 36), get_svtrb_activator_168)
    }

    for (let i = 0; i < u32(o + 172); i++) {
        ö(u32(o + 176) + (i * 20), get_svtrb_activator_176)
    }
    for (let i = 0; i < u32(o + 180); i++) {
        ö(u32(o + 184) + (i * 12), get_svtrb_activator_184)
    }
    for (let i = 0; i < u32(o + 208); i++) {
        ö(u32(o + 212) + (i * 4), get_svtrb_activator_212)
    }
    for (let i = 0; i < u32(o + 216); i++) {
        ö(u32(o + 220) + (i * 12), get_svtrb_activator_220)
    }
    ö(u32(o + 228), get_svtrb_activator_228)
    for (let i = 0; i < u32(o + 236); i++) {
        ö(u32(o + 240) + (i * 12), get_svtrb_activator_240)
    }

    for (let i = 0; i < u32(o + 244); i++) {
        ö(u32(o + 248) + (i * 36), get_svtrb_activator_248)
    }

}
function get_svtrb_activator_32(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)*/

    ö(u32(o + 4), get_svtrb_activator_32_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 8), get_svtrb_activator_32_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_svtrb_activator_32_20)
    }

}

function get_svtrb_activator_32_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, u32, 12], o)
}
function get_svtrb_activator_32_12(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_svtrb_activator_32_12_4)

}

function get_svtrb_activator_32_12_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, u32, 12], o)
}

function get_svtrb_activator_32_20(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t0)
        break
    case 1:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t1)
        break
    case 2:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t2)
        break
    case 7:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t7)
        break
    case 8:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t8)
        break
    case 12:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t12)
        break
    case 13:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t13)
        break
    case 15:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t15)
        break
    case 20:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t20)
        break
    case 25:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t25)
        break
    case 26:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t26)
        break
    case 28:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t28)
        break
    case 30:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t30)
        break
    case 35:
        ö(u32(o + 8), get_svtrb_activator_32_20_8t35)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 0, o, 8)
        }
    }

}
function get_svtrb_activator_32_20_8t20(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
    switch (u32(o + 8)) {
    case 0:
        // float
        break
    case 1:
        ö(u32(o + 0), get_svtrb_activator_32_20_8t20_0t1)
        break
    default:
        if (u32(o + 0)) {
            ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
            sü(u32, 8, o, 0)
        }
    }

}
function get_svtrb_activator_32_20_8t20_0t1(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}

function get_svtrb_activator_32_20_8t0(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_svtrb_activator_32_20_8t1(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_32_20_8t2(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_32_20_8t7(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_32_20_8t8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_activator_32_20_8t12(o) {
    if (u32(o + 0) !== 4 || f32(o + 4) !== -300 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_32_20_8t13(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_32_20_8t15(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 50 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_32_20_8t25(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_32_20_8t25_4)

}

function get_svtrb_activator_32_20_8t25_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_activator_32_20_8t25_4_8)

}

function get_svtrb_activator_32_20_8t25_4_8(o) {
    if (u32(o + 0) !== 4 || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_32_20_8t26(o) {
    if (u32(o + 0) !== 1 || u8(o + 8) || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_32_20_8t26_4)

}

function get_svtrb_activator_32_20_8t26_4(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_activator_32_20_8t26_4_8)

}

function get_svtrb_activator_32_20_8t26_4_8(o) {
    if (u32(o + 0) !== 4 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_32_20_8t28(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_32_20_8t30(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_32_20_8t35(o) {
    if (u32(o + 0) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_model', o, 4)
    ß('p_model', o, 8)

}

function get_svtrb_activator_36(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_svtrb_activator_36_8)

}

function get_svtrb_activator_36_8(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_svtrb_activator_116(o) {
    if (u8(o + 2) !== 154 || u8(o + 3) !== 18 || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
}
function get_svtrb_activator_124(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 10 || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 2 || f32(o + 24) !== 2 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_activator_144(o) {
    if (u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_svtrb_activator_144_12)
    }

}

function get_svtrb_activator_144_12(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/
    switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 8), get_svtrb_activator_144_12_8t0)
        break
    case 2:
        ö(u32(o + 8), get_svtrb_activator_144_12_8t2)
        break
    case 3:
        ö(u32(o + 8), get_svtrb_activator_144_12_8t3)
        break
    case 7:
        ö(u32(o + 8), get_svtrb_activator_144_12_8t7)
        break
    case 8:
        ö(u32(o + 8), get_svtrb_activator_144_12_8t8)
        break
    case 13:
        ö(u32(o + 8), get_svtrb_activator_144_12_8t13)
        break
    case 23:
        ö(u32(o + 8), get_svtrb_activator_144_12_8t23)
        break
    case 35:
        ö(u32(o + 8), get_svtrb_activator_144_12_8t35)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 0, o, 8)
        }
    }

    //maybe svtrb_activator_248_32_76
}

function get_svtrb_activator_144_12_8t0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_144_12_8t2(o) {
    if (u32(o + 0) !== 1 || f32(o + 4) !== 20 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_144_12_8t8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_activator_144_12_8t35(o) {
    if (u32(o + 0) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_model', o, 4)
    ß('p_model', o, 8)

}
function get_svtrb_activator_144_12_8t7(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_144_12_8t23(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_activator_144_12_8t13(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_144_12_8t3(o) {
    if (u32(o + 0) !== 4 || f32(o + 4) !== 100000 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_160(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 12), get_svtrb_activator_160_16)
    }

}

function get_svtrb_activator_160_16(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 8), get_svtrb_activator_160_16_8t0)
        break
    case 1:
        ö(u32(o + 8), get_svtrb_activator_160_16_8t1)
        break
    case 3:
        ö(u32(o + 8), get_svtrb_activator_160_16_8t3)
        break
    case 8:
        ö(u32(o + 8), get_svtrb_activator_160_16_8t8)
        break
    case 12:
        ö(u32(o + 8), get_svtrb_activator_160_16_8t12)
        break
    case 13:
        ö(u32(o + 8), get_svtrb_activator_160_16_8t13)
        break
    case 14:
        ö(u32(o + 8), get_svtrb_activator_160_16_8t14)
        break
    case 15:
        ö(u32(o + 8), get_svtrb_activator_160_16_8t15)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 0, o, 8)
        }
    }

}
function get_svtrb_activator_160_16_8t3(o) {
    if (u32(o + 0) !== 4 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_activator_160_16_8t8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_activator_160_16_8t12(o) {
    if (u32(o + 0) !== 4 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_160_16_8t15(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_160_16_8t0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_160_16_8t13(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_160_16_8t14(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== -1 || u32(o + 12) || u32(o + 20) || f32(o + 24) !== 1 || u32(o + 28) !== 100)
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28], o)
}

function get_svtrb_activator_160_16_8t1(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_168(o) {
    if (u8(o + 1) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32], o)
}
function get_svtrb_activator_184(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_activator_212(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)

}

function get_svtrb_activator_220(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 8), get_svtrb_activator_220_8t0)
        break
    case 3:
        ö(u32(o + 8), get_svtrb_activator_220_8t3)
        break
    case 12:
        ö(u32(o + 8), get_svtrb_activator_220_8t12)
        break
    case 13:
        ö(u32(o + 8), get_svtrb_activator_220_8t13)
        break
    case 15:
        ö(u32(o + 8), get_svtrb_activator_220_8t15)
        break
    case 25:
        ö(u32(o + 8), get_svtrb_activator_220_8t25)
        break
    case 26:
        ö(u32(o + 8), get_svtrb_activator_220_8t26)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 0, o, 8)
        }
    }

}
function get_svtrb_activator_220_8t25(o) {
    if (u32(o + 0) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_220_8t25_4)

}

function get_svtrb_activator_220_8t25_4(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_activator_220_8t25_4_8)

}

function get_svtrb_activator_220_8t25_4_8(o) {
    if (f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_220_8t0(o) {
    if (f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_220_8t13(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_220_8t3(o) {
    if (u32(o + 0) !== 4 || u8(o + 4) !== 40 || u8(o + 5) !== 107 || u8(o + 6) !== 238 || u8(o + 7) !== 78 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_activator_220_8t12(o) {
    if (u32(o + 0) !== 4 || f32(o + 4) !== 100 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_220_8t15(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 1500 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_220_8t26(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_220_8t26_4)

}

function get_svtrb_activator_220_8t26_4(o) {
    if (u32(o + 0) !== 4 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_228(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)

}

function get_svtrb_activator_228_0(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_svtrb_activator_240(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_activator_240_8)

}

function get_svtrb_activator_240_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 0)) {
    case 0:
        // value
        break
    case 1:
        ö(u32(o + 4), get_svtrb_activator_240_8_4t1)
        break
    default:
        if (u32(o + 4)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            sü(u32, 0, o, 4)
        }
    }

}
function get_svtrb_activator_240_8_4t1(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_activator_240_8_4t1_8)

}

function get_svtrb_activator_240_8_4t1_8(o) {
    if (u32(o + 0) !== 1 || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_8(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_activator_24(o) {
    if (u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20], o)

    switch (u8(o + 0)) {
    case 4:
        ö(u32(o + 4), get_svtrb_activator_24_4t4)
        break
    case 6:
        ö(u32(o + 4), get_svtrb_activator_24_4t6)
        break
    case 9:
        ö(u32(o + 4), get_svtrb_activator_24_4t9)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

}

function get_svtrb_activator_24_4t6(o) {
    if (u8(o + 12) !== 255 || u8(o + 13) !== 255 || u8(o + 14) !== 255 || u8(o + 15) !== 255)
        ü(1, [u32, 0, f32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)

    ö(u32(o + 8), get_svtrb_activator_24_4t6_8)

}

function get_svtrb_activator_24_4t6_8(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_activator_24_4t9(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_svtrb_activator_24_4t9_0)

}

function get_svtrb_activator_24_4t9_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_activator_24_4t4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_24_4t4_4)

}

function get_svtrb_activator_24_4t4_4(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_108(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_activator_108_8)

}

function get_svtrb_activator_108_8(o) {
    if (u32(o + 0) !== 4 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_148(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_148_4)
    ö(u32(o + 8), get_svtrb_activator_148_8)

}

function get_svtrb_activator_148_4(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_activator_148_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_activator_148_8_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_svtrb_activator_148_8_8)
    }

}

function get_svtrb_activator_148_8_0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    //maybe check
    ö(u32(o + 4), get_svtrb_activator_148_8_0_4)
    ö(u32(o + 12), get_svtrb_activator_148_8_0_12)

}

function get_svtrb_activator_148_8_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_activator_148_8_0_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_148_8_8(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/
    ö(u32(o + 0), get_svtrb_activator_148_8_8_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 24), get_svtrb_activator_148_8_8_8)
    }

}

function get_svtrb_activator_148_8_8_0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_activator_148_8_8_0_4)
    ö(u32(o + 12), get_svtrb_activator_148_8_8_0_12)

}

function get_svtrb_activator_148_8_8_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_activator_148_8_8_0_12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_svtrb_activator_148_8_8_8(o) {
    if (u8(o + 2) || u8(o + 3) || f32(o + 16) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20], o)

    ö(u32(o + 8), get_svtrb_activator_148_8_8_8_8)
    ä(svtrb_gate, u32(o + 12), get_svtrb_gate)

    switch (u8(o + 1)) {
    case 0:
        ö(u32(o + 20), get_svtrb_activator_148_8_8_8_20t0)
        break
    case 2:
        // float
        break
    case 8:
        ö(u32(o + 20), get_svtrb_activator_148_8_8_8_20t8)
        break
    default:
        if (u32(o + 20)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20], o)
            sü(u8, 1, o, 20)
        }
    }
}

function get_svtrb_activator_148_8_8_8_8(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_activator_148_8_8_8_20t0(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_svtrb_activator_148_8_8_8_20t8(o) {
    if (f32(o + 0) !== -101.9041748046875 || f32(o + 4) !== -0.17400455474853516 || f32(o + 8) !== -114.2802734375 || f32(o + 16) !== 104.5418701171875 || f32(o + 20) !== 68.897705078125 || f32(o + 24) !== 83.0986328125 || u32(o + 32) || u32(o + 36) || u32(o + 44) !== 1)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 40), get_svtrb_activator_148_8_8_8_20t8_40)

}

function get_svtrb_activator_148_8_8_8_20t8_40(o) {
    if (u32(o + 4) !== 84 || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 0) + (i * 32), get_svtrb_activator_148_8_8_8_20t8_40_0)
    }

}

function get_svtrb_activator_148_8_8_8_20t8_40_0(o) {
    if (u32(o + 16))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28], o)
}

function get_svtrb_activator_176(o) {
    if (u32(o + 4) !== 1 || u32(o + 12) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)

    ö(u32(o + 8), get_svtrb_activator_176_8)
    ö(u32(o + 16), get_svtrb_activator_176_16)

}

function get_svtrb_activator_176_8(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_activator_176_8_8)

}

function get_svtrb_activator_176_8_8(o) {
    if (u32(o + 0) !== 4 || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_176_16(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_activator_176_16_8)

}

function get_svtrb_activator_176_16_8(o) {
    if (u32(o + 0) !== 4 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_248(o) {
    if (u32(o + 20))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_svtrb_activator_248_4)
    }
    ö(u32(o + 8), get_svtrb_activator_248_8)
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 88), get_svtrb_activator_248_32)
    }

}

function get_svtrb_activator_248_4(o) {
    if (u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    switch (u8(o + 0)) {
    case 0:
        ö(u32(o + 4), get_svtrb_activator_248_4_4t0)
        break
    case 1:
        ö(u32(o + 4), get_svtrb_activator_248_4_4t1)
        break
    case 2:
        ö(u32(o + 4), get_svtrb_activator_248_4_4t2)
        break
    case 5:
        ö(u32(o + 4), get_svtrb_activator_248_4_4t5)
        break
    case 11:
        ö(u32(o + 4), get_svtrb_activator_248_4_4t11)
        break
    case 12:
        ö(u32(o + 4), get_svtrb_activator_248_4_4t12)
        break
    case 13:
        ö(u32(o + 4), get_svtrb_activator_248_4_4t13)
        break
    case 18:
        ö(u32(o + 4), get_svtrb_activator_248_4_4t18)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

}

function get_svtrb_activator_248_4_4t0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_248_4_4t0_4)

}

function get_svtrb_activator_248_4_4t0_4(o) {
    if (u8(o + 30) || u8(o + 31) || u8(o + 32) || u8(o + 34) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_svtrb_activator_248_4_4t0_4_4)
    }

}

function get_svtrb_activator_248_4_4t0_4_4(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_svtrb_activator_248_4_4t0_4_4_4)

}

function get_svtrb_activator_248_4_4t0_4_4_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_248_4_4t0_4_4_4_4)

}

function get_svtrb_activator_248_4_4t0_4_4_4_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_248_4_4t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_4_4t2(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_4_4t5(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_4_4t11(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_4_4t12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_248_4_4t12_4)

}

function get_svtrb_activator_248_4_4t12_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_248_4_4t13(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_activator_248_4_4t13_0)

}

function get_svtrb_activator_248_4_4t13_0(o) {
    if (u32(o + 0) !== 4075 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_248_4_4t13_0_4)

}

function get_svtrb_activator_248_4_4t13_0_4(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_248_4_4t18(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_248_4_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_activator_248_4_12_0)

}

function get_svtrb_activator_248_4_12_0(o) {
    if (u32(o + 0) !== 4075 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_248_4_12_0_4)

}

function get_svtrb_activator_248_4_12_0_4(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_248_8(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_activator_248_32(o) {
    if (u8(o + 12) || u32(o + 20) || u8(o + 41) || u8(o + 42) || u8(o + 60) || u8(o + 61) || u8(o + 63))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, f32, 28, f32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, f32, 48, f32, 52, u32, 56, u8, 60, u8, 61, u8, 62, u8, 63, f32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84], o)

    ö(u32(o + 0), get_svtrb_activator_248_32_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_svtrb_activator_248_32_8)
    }
    ö(u32(o + 16), get_svtrb_activator_248_32_16)
    ö(u32(o + 36), get_svtrb_activator_248_32_36)
    ö(u32(o + 44), get_svtrb_activator_248_32_44)
    ö(u32(o + 56), get_svtrb_activator_248_32_56)
    for (let i = 0; i < u32(o + 72); i++) {
        ö(u32(o + 76) + (i * 12), get_svtrb_activator_248_32_76)
    }

    ö(u32(o + 84), get_svtrb_activator_248_32_84)

}

function get_svtrb_activator_248_32_0(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_activator_248_32_8(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_model_link, u32(o + 0), get_svtrb_model_link)
}

function get_svtrb_activator_248_32_16(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_36(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_44(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_56(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_76(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t0)
        break
    case 1:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t1)
        break
    case 2:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t2)
        break
    case 3:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t3)
        break
    case 7:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t7)
        break
    case 8:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t8)
        break
    case 10:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t10)
        break
    case 12:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t12)
        break
    case 14:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t14)
        break
    case 15:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t15)
        break
    case 17:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t17)
        break
    case 18:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t18)
        break
    case 20:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t20)
        break
    case 23:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t23)
        break
    case 26:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t26)
        break
    case 28:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t28)
        break
    case 30:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t30)
        break
    case 33:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t33)
        break
    case 35:
        ö(u32(o + 8), get_svtrb_activator_248_32_76_8t35)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 0, o, 8)
        }
    }

}
function get_svtrb_activator_248_32_76_8t17(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_activator_248_32_76_8t0(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_76_8t8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_activator_248_32_76_8t20(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 8)) {
    case 0:
        //always float ?
        break
    case 1:
        ö(u32(o + 0), get_svtrb_activator_248_32_76_8t20_0t1)
        break
    default:
        if (u32(o + 0)) {
            sü(u32, 8, o, 0)
        }
    }

}
function get_svtrb_activator_248_32_76_8t20_0t1(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}

function get_svtrb_activator_248_32_76_8t23(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_activator_248_32_76_8t7(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_76_8t18(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_76_8t2(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_76_8t10(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_76_8t14(o) {
    if (u32(o + 0) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12) || f32(o + 16) !== 250 || u32(o + 20) || f32(o + 24) !== 1 || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28], o)
}

function get_svtrb_activator_248_32_76_8t15(o) {
    if (u32(o + 0) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_76_8t33(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_248_32_76_8t33_4)

}

function get_svtrb_activator_248_32_76_8t33_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_svtrb_activator_248_32_76_8t33_4_8)

}

function get_svtrb_activator_248_32_76_8t33_4_8(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_activator_248_32_76_8t12(o) {
    if (u32(o + 0) !== 4 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_76_8t1(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_76_8t35(o) {
    if (u32(o + 0) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_model', o, 4)
    ß('p_model', o, 8)

}
function get_svtrb_activator_248_32_76_8t3(o) {
    if (u32(o + 0) !== 4 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_76_8t28(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_76_8t26(o) {
    if (u32(o + 0) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_activator_248_32_76_8t26_4)

}

function get_svtrb_activator_248_32_76_8t26_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_activator_248_32_76_8t26_4_8)

}

function get_svtrb_activator_248_32_76_8t26_4_8(o) {
    if (u32(o + 0) !== 4 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_248_32_76_8t30(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_248_32_84(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_mysterious_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76(o) {
    if (u32(o + 24) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_svtrb_car_0_76_4)
    }
    ö(u32(o + 12), get_svtrb_car_0_76_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 16), get_svtrb_car_0_76_20)
    }
    ö(u32(o + 28), get_svtrb_car_0_76_28)

}

function get_svtrb_car_0_76_4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_car_extended_link, u32(o + 4), get_svtrb_car_extended_link)

}

function get_svtrb_car_extended_link(o) {
    if (u8(o + 4) !== 255 || u8(o + 5) !== 255 || u8(o + 6) !== 255 || u8(o + 7) !== 255 || u8(o + 24) !== 255 || u8(o + 25) !== 255 || u8(o + 26) !== 255 || u8(o + 27) !== 255 || u8(o + 28) !== 255 || u8(o + 29) !== 255 || u8(o + 30) !== 255 || u8(o + 31) !== 255 || u8(o + 32) !== 255 || u8(o + 33) !== 255 || u8(o + 34) !== 255 || u8(o + 35) !== 255 || u32(o + 44) || u8(o + 50) || u32(o + 60) || u32(o + 140))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u8, 84, u8, 85, u8, 86, u8, 87, f32, 88, u8, 92, u8, 93, u8, 94, u8, 95, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, f32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ä(svtrb_model_anims_2, u32(o + 52), get_svtrb_model_anims_2)
    ö(u32(o + 56), get_svtrb_car_extended_link_56)
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 12), get_svtrb_car_extended_link_68)
    }
    ä(svtrb_unknown, u32(o + 72), get_svtrb_unknown)
    ö(u32(o + 80), get_svtrb_car_extended_link_80)
    for (let i = 0; i < u32(o + 96); i++) {
        ö(u32(o + 100) + (i * 32), get_svtrb_car_extended_link_100)
    }
    ö(u32(o + 108), get_svtrb_car_extended_link_108)
    ä(svtrb_interface, u32(o + 112), get_svtrb_interface)

    ä(svtrb_car_extended_sub_link, u32(o + 128), get_svtrb_car_extended_sub_link)
    for (let i = 0; i < u32(o + 132); i++) {
        ö(u32(o + 136) + (i * 8), get_svtrb_car_extended_link_136)
    }

}

function get_svtrb_car_extended_link_56(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_extended_link_68(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ä(svtrb_asdf, u32(o + 0), get_svtrb_asdf)
    ä(svtrb_unknown, u32(o + 4), get_svtrb_unknown)

}

function get_svtrb_car_extended_link_80(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 20) || u8(o + 33) || u8(o + 35) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 64), get_svtrb_mysterious)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 64), get_svtrb_mysterious)
    }
    ö(u32(o + 36), get_svtrb_car_extended_link_80_36)

}
function get_svtrb_car_extended_link_80_36(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) !== 4 || u32(o + 48) !== 1 || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_svtrb_car_extended_link_80_36_16)
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 32), get_svtrb_car_extended_link_80_36_44)
    }
    ö(u32(o + 52), get_svtrb_car_extended_link_80_36_52)
    ö(u32(o + 56), get_svtrb_car_extended_link_80_36_56)

}

function get_svtrb_car_extended_link_80_36_16(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_model', o, 0)

}
function get_svtrb_car_extended_link_80_36_44(o) {
    if (u32(o + 12) || u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_car_extended_link_80_36_52(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u8(o + 4) || u8(o + 5) !== 1 || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_car_extended_link_80_36_56(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 1 || u32(o + 12) || f32(o + 16) !== 1000 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_car_extended_link_100(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_car_extended_link_108(o) {
    if (u32(o + 0) !== 1 || f32(o + 4) !== 20 || u32(o + 8) || f32(o + 12) !== 60 || u32(o + 16) || f32(o + 20) !== -180 || f32(o + 24) !== 180 || f32(o + 28) !== -180 || f32(o + 32) !== 180 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, u32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_svtrb_car_extended_sub_link(o) {
    if (u32(o + 8) || u8(o + 19) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_svtrb_car_extended_sub_link_4)
    ö(u32(o + 20), get_svtrb_car_extended_sub_link_20)
    ö(u32(o + 24), get_svtrb_car_extended_sub_link_24)
    ö(u32(o + 28), get_svtrb_car_extended_sub_link_28)
    ö(u32(o + 36), get_svtrb_car_extended_sub_link_36)

}

function get_svtrb_car_extended_sub_link_4(o) {
    if (u32(o + 0) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_extended_sub_link_4_4)
    ö(u32(o + 12), get_svtrb_car_extended_sub_link_4_12)

}

function get_svtrb_car_extended_sub_link_4_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_extended_sub_link_4_12(o) {
    if (u8(o + 3) !== 18 || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_svtrb_car_extended_sub_link_24(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_extended_sub_link_20(o) {
    if (u32(o + 0) || f32(o + 4) !== 75 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_extended_sub_link_28(o) {
    if (u32(o + 0) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    //always 16
    ö(u32(o + 4), get_svtrb_car_extended_sub_link_28_4)
    ö(u32(o + 12), get_svtrb_car_extended_sub_link_28_12)
}

function get_svtrb_car_extended_sub_link_28_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_extended_sub_link_28_12(o) {
    if (u8(o + 0) !== 196 || u8(o + 1) !== 113 || u8(o + 2) !== 154 || u8(o + 3) !== 18 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_extended_sub_link_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_extended_link_136(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_svtrb_car_extended_link_136_4)

}

function get_svtrb_car_extended_link_136_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_car_extended_link_136_4_4)
    }

}

function get_svtrb_car_extended_link_136_4_4(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ä(svtrb_model_link, u32(o + 0), get_svtrb_model_link)
    ä(svtrb_model_link, u32(o + 4), get_svtrb_model_link)

}

function get_svtrb_car_0_76_12(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12], o)*/
}
function get_svtrb_car_0_76_20(o) {
    /*ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ä(svtrb_single_car_sec, u32(o + 4), get_svtrb_single_car_sec)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_svtrb_car_0_76_20_12)
    }

}

function get_svtrb_single_car_sec(o) {
    if (f32(o + 8) !== 1 || f32(o + 12) !== 22 || u32(o + 40) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_svtrb_car_0_76_20_12(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_car_0_76_28(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_svtrb_car_0_76_28_0)
    ö(u32(o + 4), get_svtrb_car_0_76_28_0)
    ö(u32(o + 8), get_svtrb_car_0_76_28_0)

    ö(u32(o + 12), get_svtrb_car_0_76_28_12)
    ö(u32(o + 16), get_svtrb_car_0_76_28_16)
    ö(u32(o + 20), get_svtrb_car_0_76_28_20)

}

function get_svtrb_car_0_76_28_0(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_car_0_76_28_0_0)
    ö(u32(o + 4), get_svtrb_car_0_76_28_0_0)
    ö(u32(o + 8), get_svtrb_car_0_76_28_0_0)

}

function get_svtrb_car_0_76_28_0_0(o) {
    if (f32(o + 4) !== 41 || f32(o + 8) !== 10 || u32(o + 12) || f32(o + 16) !== 31.5 || f32(o + 20) !== 40.5 || f32(o + 24) !== 10 || u32(o + 28) || u32(o + 44) || f32(o + 76) !== 8)
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, f32, 88, f32, 92], o)
}

function get_svtrb_car_0_76_28_12(o) {
    if (f32(o + 4) !== 1.75 || f32(o + 8) !== 3 || f32(o + 12) !== 1.25 || f32(o + 20) !== 1.75 || f32(o + 24) !== 3 || f32(o + 28) !== 1.25 || f32(o + 36) !== 1.5499999523162842 || f32(o + 40) !== 3 || f32(o + 44) !== 2)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44], o)
}
function get_svtrb_car_0_76_28_16(o) {
    if (f32(o + 8) !== 22 || f32(o + 28) !== 122.5999984741211 || f32(o + 36) !== 1.2000000476837158 || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60], o)
}
function get_svtrb_car_0_76_28_20(o) {
    if (f32(o + 4) !== 6.900000095367432 || f32(o + 8) !== 2.5 || f32(o + 16) !== 1.25 || f32(o + 20) !== 7.5 || f32(o + 24) !== 11.5 || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_svtrb_car_0_80(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_car_extended_link, u32(o + 4), get_svtrb_car_extended_link)

}

function get_svtrb_car_0_84(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_car_0_88(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_svtrb_car_0_88_8)

}

function get_svtrb_car_0_88_8(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_svtrb_car_0_96(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)

}
function get_svtrb_car_0_112(o) {
    if (u32(o + 4) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_gate, u32(o + 0), get_svtrb_gate)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_unknown(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_svtrb_unknown_4)
    }
}

function get_svtrb_unknown_4(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    switch (u32(o + 0)) {
    case 1:
        ä(svtrb_unknown_thing, u32(o + 4), get_svtrb_unknown_thing)
        break
    case 2:
        ä(svtrb_asdf, u32(o + 4), get_svtrb_asdf)
        break
    case 3:
        ä(svtrb_unknown, u32(o + 4), get_svtrb_unknown)
        break
    case 4:
        ä(svtrb_strange, u32(o + 4), get_svtrb_strange)
        break
    case 5:
        ä(svtrb_unknown_idk_sec, u32(o + 4), get_svtrb_unknown_idk_sec)
        break
    case 6:
        ä(svtrb_idk, u32(o + 4), get_svtrb_idk)
        break
    case 9:
        ä(svtrb_sound_section, u32(o + 4), get_svtrb_sound_section)
        break
    case 25:
        ä(svtrb_object, u32(o + 4), get_svtrb_object)
        break
    case 26:
        ä(svtrb_sound_controls, u32(o + 4), get_svtrb_sound_controls)
        break
    case 31:
        ä(svtrb_activator, u32(o + 4), get_svtrb_activator)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

    switch (u32(o + 0)) {
    case 1:
        ö(u32(o + 8), get_svtrb_unknown_4_8t1)
        break
    case 2:
        ö(u32(o + 8), get_svtrb_unknown_4_8t1)
        break
    case 3:
        ö(u32(o + 8), get_svtrb_unknown_4_8t1)
        break
    case 4:
        ö(u32(o + 8), get_svtrb_unknown_4_8t1)
        break
    case 5:
        ö(u32(o + 8), get_svtrb_unknown_4_8t5)
        break
    case 6:
        ö(u32(o + 8), get_svtrb_unknown_4_8t6)
        break
    case 9:
        ö(u32(o + 8), get_svtrb_unknown_4_8t9)
        break
    case 25:
        ö(u32(o + 8), get_svtrb_unknown_4_8t25)
        break
    case 26:
        ö(u32(o + 8), get_svtrb_unknown_4_8t26)
        break
    case 31:
        ö(u32(o + 8), get_svtrb_unknown_4_8t1)
        break
    case 32:
        ö(u32(o + 8), get_svtrb_unknown_4_8t32)
        break
    case 34:
        ö(u32(o + 8), get_svtrb_unknown_4_8t34)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 0, o, 8)
        }
    }

}
function get_svtrb_unknown_thing(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    switch (u8(o + 0)) {
    case 0:
        ö(u32(o + 4), get_svtrb_unknown_thing_4t0)
        break
    case 1:
        ö(u32(o + 4), get_svtrb_unknown_thing_4t1)
        break
    case 2:
        ö(u32(o + 4), get_svtrb_unknown_thing_4t2)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_svtrb_unknown_thing_24)
    }
    ö(u32(o + 32), get_svtrb_unknown_thing_32)

}

function get_svtrb_unknown_thing_4t0(o) {
    if (u8(o + 9) || u32(o + 12) || u32(o + 52) !== 1 || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_unknown_thing_4t0_4)
    }
    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 32), get_svtrb_unknown_thing_4t0_40)
    }
    ö(u32(o + 48), get_svtrb_unknown_thing_4t0_48)
    ö(u32(o + 56), get_svtrb_unknown_thing_4t0_56)
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 8), get_svtrb_unknown_thing_4t0_64)
    }

}

function get_svtrb_unknown_thing_4t0_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_model', o, 0)
}
function get_svtrb_unknown_thing_4t0_40(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_thing_4t0_56(o) {
    if (u8(o + 9) || u8(o + 10) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_thing_4t0_48(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_thing_4t0_64(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_svtrb_unknown_thing_4t0_64_4)
    }

}

function get_svtrb_unknown_thing_4t0_64_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)
}

function get_svtrb_unknown_thing_4t1(o) {
    if (u8(o + 8) || u32(o + 12) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_unknown_thing_4t1_4)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 12), get_svtrb_unknown_thing_4t1_44)
    }
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 12), get_svtrb_unknown_thing_4t1_52)
    }
    ö(u32(o + 56), get_svtrb_unknown_thing_4t1_56)
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 8), get_svtrb_unknown_thing_4t1_64)
    }

}

function get_svtrb_unknown_thing_4t1_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)
}
function get_svtrb_unknown_thing_4t1_44(o) {/*ü(1, [f32, 0, u32, 4, f32, 8], o)*/
}
function get_svtrb_unknown_thing_4t1_52(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_svtrb_unknown_thing_4t1_56(o) {
    if (u8(o + 9) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_thing_4t1_64(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_svtrb_unknown_thing_4t1_64_4)
    }

}

function get_svtrb_unknown_thing_4t1_64_4(o) {
    if (u32(o + 12) || u32(o + 16))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16], o)
}

function get_svtrb_unknown_thing_4t2(o) {
    if (u8(o + 27) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_unknown_thing_4t2_4)
    }
    ö(u32(o + 20), get_svtrb_unknown_thing_4t2_20)

}

function get_svtrb_unknown_thing_4t2_4(o) {
    if (u8(o + 4) || u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_svtrb_unknown_thing_4t2_20(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [f32, 0, u32, 4, u32, 8, f32, 12], o)
}

function get_svtrb_unknown_thing_24(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_svtrb_unknown_thing_32(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)

}

function get_svtrb_asdf(o) {
    if (u32(o + 4) || u32(o + 36) || u32(o + 44) || u32(o + 48) || f32(o + 60) !== -1 || u32(o + 84) || f32(o + 96) !== 0.4000000059604645 || u32(o + 148) || u32(o + 152) || u32(o + 156))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, f32, 64, f32, 68, u8, 72, u8, 73, u8, 74, u8, 75, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156], o)

    ö(u32(o + 8), get_svtrb_asdf_8)
    ö(u32(o + 12), get_svtrb_asdf_12)
    ö(u32(o + 80), get_svtrb_asdf_80)
    ö(u32(o + 88), get_svtrb_asdf_88)

    ö(u32(o + 92), get_svtrb_asdf_92)
    ä(svtrb_unknown, u32(o + 100), get_svtrb_unknown)
    ö(u32(o + 104), get_svtrb_asdf_104)
    for (let i = 0; i < u32(o + 108); i++) {
        ö(u32(o + 112) + (i * 20), get_svtrb_asdf_112)
    }
    ä(svtrb_unknown, u32(o + 116), get_svtrb_unknown)
    ä(svtrb_unknown, u32(o + 120), get_svtrb_unknown)
    ö(u32(o + 124), get_svtrb_asdf_124)
    ö(u32(o + 128), get_svtrb_asdf_128)
    for (let i = 0; i < u32(o + 132); i++) {
        ö(u32(o + 136) + (i * 64), get_svtrb_mysterious)
    }
    ö(u32(o + 144), get_svtrb_asdf_144)

}

function get_svtrb_asdf_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 44), get_svtrb_asdf_8_4)
    }
}

function get_svtrb_asdf_8_4(o) {
    if (u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40], o)

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 64), get_svtrb_mysterious)
    }
    ö(u32(o + 36), get_svtrb_asdf_8_4_36)
    ö(u32(o + 40), get_svtrb_asdf_8_4_40)

}

function get_svtrb_asdf_8_4_36(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_asdf_8_4_40(o) {
    if (f32(o + 36) !== -360 || f32(o + 40) !== 360)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, f32, 36, f32, 40, f32, 44], o)
}

function get_svtrb_asdf_12(o) {
    if (u32(o + 4) !== 6 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_asdf_model, u32(o + 0), get_svtrb_asdf_model)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_svtrb_asdf_12_8)
    }
    ö(u32(o + 12), get_svtrb_asdf_12_12)
    ö(u32(o + 16), get_svtrb_asdf_12_16)
    ä(svtrb_model_link, u32(o + 20), get_svtrb_model_link)

    ö(u32(o + 24), get_svtrb_asdf_12_24)

}

function get_svtrb_asdf_model(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) !== 4 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_model_anims_2, u32(o + 0), get_svtrb_model_anims_2)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_svtrb_asdf_model_16)
    }

}

function get_svtrb_asdf_model_16(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/
    ß('p_model', o, 0)

}

function get_svtrb_asdf_12_8(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_asdf_12_12(o) {
    if (f32(o + 0) !== 5 || f32(o + 4) !== 1.2200000286102295 || f32(o + 8) !== 1.2000000476837158 || f32(o + 12) !== 0.8500000238418579 || f32(o + 16) !== 0.25 || f32(o + 20) !== 1.5 || f32(o + 24) !== 1.149999976158142 || f32(o + 28) !== 1.2999999523162842 || f32(o + 32) !== 0.6299999952316284 || f32(o + 36) !== 0.9300000071525574 || f32(o + 40) !== 0.9800000190734863 || f32(o + 44) !== 1 || f32(o + 48) !== 20 || f32(o + 52) !== 20 || f32(o + 56) !== 20 || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || f32(o + 84) !== 2 || f32(o + 88) !== -20 || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || f32(o + 112) !== 200 || f32(o + 116) !== 20 || f32(o + 120) !== 200 || f32(o + 124) !== 30 || u32(o + 128) || f32(o + 132) !== 2 || f32(o + 136) !== -20 || u32(o + 140) || f32(o + 144) !== 6 || u32(o + 148) || u32(o + 152) || u32(o + 156))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, f32, 84, f32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, f32, 112, f32, 116, f32, 120, f32, 124, u32, 128, f32, 132, f32, 136, u32, 140, f32, 144, u32, 148, u32, 152, u32, 156], o)
}
function get_svtrb_asdf_12_16(o) {
    if (f32(o + 0) !== 1.5 || f32(o + 4) !== 5 || f32(o + 8) !== 3 || f32(o + 12) !== 1.5 || f32(o + 16) !== 5 || f32(o + 20) !== 3 || f32(o + 24) !== 1.5 || f32(o + 28) !== 250 || f32(o + 32) !== 100 || f32(o + 36) !== 0.6000000238418579 || f32(o + 40) !== 100 || f32(o + 44) !== 300 || f32(o + 48) !== 2 || f32(o + 52) !== 6 || f32(o + 56) !== 2 || f32(o + 60) !== 0.5 || f32(o + 64) !== 1.7999999523162842 || f32(o + 68) !== 1 || f32(o + 72) !== 0.5 || f32(o + 76) !== 0.20000000298023224 || f32(o + 80) !== 0.699999988079071 || f32(o + 84) !== 40 || u32(o + 88) || u32(o + 92))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, u32, 88, u32, 92], o)
}
function get_svtrb_asdf_12_24(o) {
    if (u32(o + 0) !== 1 || f32(o + 8) !== 45 || f32(o + 12) !== 1.5 || u32(o + 16) !== 1 || u32(o + 24) !== 1 || f32(o + 32) !== 20 || f32(o + 36) !== 1.5 || f32(o + 40) !== 0.5 || u32(o + 44))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44], o)

    ö(u32(o + 4), get_svtrb_asdf_12_24_4)
    ö(u32(o + 20), get_svtrb_asdf_12_24_20)
    ö(u32(o + 28), get_svtrb_asdf_12_24_28)

}

function get_svtrb_asdf_12_24_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_asdf_12_24_20(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_asdf_12_24_28(o) {
    if (u32(o + 0) !== 3 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_asdf_80(o) {
    if (f32(o + 0) !== 1500 || f32(o + 4) !== 0.20000000298023224 || u32(o + 8) !== 260 || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_asdf_88(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_asdf_88_8)

}

function get_svtrb_asdf_88_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_asdf_112(o) {
    if (u32(o + 4) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)

    ä(svtrb_gate, u32(o + 0), get_svtrb_gate)
    ä(svtrb_unknown, u32(o + 8), get_svtrb_unknown)

}

function get_svtrb_gate(o) {
    if (f32(o + 4) !== 1 || f32(o + 12) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 70 || f32(o + 40) !== 1 || u32(o + 44) || f32(o + 48) !== 1 || u32(o + 52) || f32(o + 56) !== 1 || u32(o + 60) || u32(o + 64) || u32(o + 80) || u32(o + 84) || f32(o + 88) !== 300 || f32(o + 92) !== 200 || f32(o + 96) !== 1000 || u32(o + 100) || u8(o + 105) !== 1 || u8(o + 107) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 140))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, f32, 48, u32, 52, f32, 56, u32, 60, u32, 64, f32, 68, f32, 72, u32, 76, u32, 80, u32, 84, f32, 88, f32, 92, f32, 96, u32, 100, u8, 104, u8, 105, u8, 106, u8, 107, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ä(svtrb_unknown, u32(o + 36), get_svtrb_unknown)
    ä(svtrb_sound_section, u32(o + 76), get_svtrb_sound_section)

    ö(u32(o + 108), get_svtrb_gate_108)
    ö(u32(o + 116), get_svtrb_gate_116)

}

function get_svtrb_gate_108(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_gate_108_4)
    }

}

function get_svtrb_gate_108_4(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4, u32, 8], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_svtrb_gate_108_4_8)

}

function get_svtrb_gate_108_4_8(o) {
    if (u32(o + 0) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_gate_116(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)

}

function get_svtrb_asdf_124(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_asdf_128(o) {
    if (u32(o + 4) !== 1281 || u32(o + 12) || u32(o + 16) !== 1000 || u32(o + 20) !== 1000 || f32(o + 28) !== 100)
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28], o)
    ß('p_texture', o, 0)

    ö(u32(o + 24), get_svtrb_asdf_128_24)

}

function get_svtrb_asdf_128_24(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_asdf_144(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_asdf_92(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_asdf_92_4)
    ö(u32(o + 8), get_svtrb_asdf_92_8)

}

function get_svtrb_asdf_92_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_asdf_92_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_asdf_92_8_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_svtrb_asdf_92_8_8)
    }

}

function get_svtrb_asdf_92_8_0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_asdf_92_8_0_4)
    ö(u32(o + 12), get_svtrb_asdf_92_8_0_12)

}

function get_svtrb_asdf_92_8_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_asdf_92_8_0_12(o) {
    if (u8(o + 2) !== 154 || u8(o + 3) !== 18 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_asdf_92_8_8(o) {
    if (u32(o + 4) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_svtrb_asdf_92_8_8_0)
    ö(u32(o + 8), get_svtrb_asdf_92_8_8_8)

}

function get_svtrb_asdf_92_8_8_0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_asdf_92_8_8_0_4)
    ö(u32(o + 12), get_svtrb_asdf_92_8_8_0_12)

}

function get_svtrb_asdf_92_8_8_0_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_asdf_92_8_8_0_12(o) {
    if (u8(o + 0) !== 182 || u8(o + 1) !== 111 || u8(o + 2) !== 154 || u8(o + 3) !== 18 || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_svtrb_asdf_92_8_8_8(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 4) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_svtrb_asdf_92_8_8_8_8)
    ä(svtrb_gate, u32(o + 12), get_svtrb_gate)

}

function get_svtrb_asdf_92_8_8_8_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_asdf_104(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_asdf_104_0)

}

function get_svtrb_asdf_104_0(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)
    ä(svtrb_unknown, u32(o + 4), get_svtrb_unknown)
    ä(svtrb_unknown, u32(o + 12), get_svtrb_unknown)

}

function get_svtrb_unknown_idk_sec(o) {
    if (u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_svtrb_unknown_idk_sec_4)
    ö(u32(o + 12), get_svtrb_unknown_idk_sec_12)
    ö(u32(o + 20), get_svtrb_unknown_idk_sec_20)
    ö(u32(o + 28), get_svtrb_unknown_idk_sec_28)
    ö(u32(o + 36), get_svtrb_unknown_idk_sec_36)

}

function get_svtrb_unknown_idk_sec_4(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 16), get_svtrb_unknown_idk_sec_4_16)
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 64), get_svtrb_mysterious)
    }
}

function get_svtrb_unknown_idk_sec_4_16(o) {
    if (u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    //alwasy 16
}

function get_svtrb_unknown_idk_sec_12(o) {
    if (u32(o + 8) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_unknown_idk_sec_12_4)
    }

}

function get_svtrb_unknown_idk_sec_12_4(o) {
    if (u8(o + 4) || u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}

function get_svtrb_unknown_idk_sec_20(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_unknown_idk_sec_20_4)
    }

}

function get_svtrb_unknown_idk_sec_20_4(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}

function get_svtrb_unknown_idk_sec_28(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_idk_sec_28_4)

}

function get_svtrb_unknown_idk_sec_28_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_unknown_idk_sub_sec, u32(o + 0), get_svtrb_unknown_idk_sub_sec)

}

function get_svtrb_unknown_idk_sub_sec(o) {
    if (u32(o + 0) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_idk_sub_sec_4)

}

function get_svtrb_unknown_idk_sub_sec_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_idk_sec_36(o) {
    if (u8(o + 8) || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
}

function get_svtrb_unknown_4_8t1(o) {
    if (u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 48), get_svtrb_unknown_4_8t1_48)
    switch (u8(o + 42)) {
    case 1:
        ö(u32(o + 52), get_svtrb_unknown_4_8t1_52t1)
        break
    case 2:
        ö(u32(o + 52), get_svtrb_unknown_4_8t1_52t2)
        break
    case 3:
        ö(u32(o + 52), get_svtrb_unknown_4_8t1_52t3)
        break
    default:
        if (u32(o + 52)) {
            sü(u8, 42, o, 52)
        }
    }

}
function get_svtrb_unknown_4_8t1_48(o) {
    if (u32(o + 24) || u8(o + 31))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)
}
function get_svtrb_unknown_4_8t1_52t1(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_unknown_4_8t1_52t2_12t2(o) {
    if (f32(o + 0) !== 100 || f32(o + 4) !== -200 || u8(o + 8) !== 2 || u8(o + 9) !== 1 || u8(o + 10) || u8(o + 11) || f32(o + 12) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_unknown_4_8t1_52t2(o) {
    // ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 8)) {
    case 0:
        ö(u32(o + 12), get_svtrb_unknown_4_8t1_52t2_12t0)
        break
    case 1:
        ö(u32(o + 12), get_svtrb_unknown_4_8t1_52t2_12t1)
        break
    case 2:
        ö(u32(o + 12), get_svtrb_unknown_4_8t1_52t2_12t2)
        break
    default:
        if (u32(o + 12)) {
            sü(u32, 8, o, 12)
        }
    }

}
function get_svtrb_unknown_4_8t1_52t2_12t0(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_8t1_52t2_12t1(o) {
    if (f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_8t1_52t3(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_8t5(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_8t25(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_8t25_4)

}

function get_svtrb_unknown_4_8t25_4(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_unknown_4_8t34(o) {
    if (u8(o + 3) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_interface, u32(o + 4), get_svtrb_interface)
    ä(svtrb_interface, u32(o + 8), get_svtrb_interface)

    ö(u32(o + 16), get_svtrb_unknown_4_8t34_16)

}

function get_svtrb_unknown_4_8t34_16(o) {
    if (u32(o + 0) || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 12), get_svtrb_unknown_4_8t34_16_12)
    //maybe amount?
}

function get_svtrb_unknown_4_8t34_16_12(o) {/*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/
}

function get_svtrb_unknown_4_8t32(o) {
    if (u8(o + 2) || u8(o + 3) || u8(o + 12) !== 255 || u8(o + 13) !== 255 || u8(o + 14) !== 255 || u8(o + 15) !== 255 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_svtrb_unknown_4_8t32_8)

}

function get_svtrb_unknown_4_8t32_8(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_unknown_4_8t6(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_8t6_4)

}

function get_svtrb_unknown_4_8t6_4(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_unknown_4_8t9(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_8t9_4)

}

function get_svtrb_unknown_4_8t9_4(o) {
    if (u32(o + 4) || f32(o + 8) !== 32 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_unknown_4_8t26(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_8t26_4)

}

function get_svtrb_unknown_4_8t26_4(o) {
    if (f32(o + 0) !== -20 || f32(o + 4) !== 20 || f32(o + 8) !== -50 || f32(o + 12) !== 100 || f32(o + 16) !== -20 || f32(o + 20) !== 20 || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_world_idk(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_svtrb_world_idk_0)
    ö(u32(o + 4), get_svtrb_world_idk_4)
    ö(u32(o + 8), get_svtrb_world_idk_8)
    ö(u32(o + 16), get_svtrb_world_idk_16)

}

function get_svtrb_world_idk_0(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 16), get_svtrb_world_idk_0_8)
    }

}

function get_svtrb_world_idk_0_8(o) {
    if (u32(o + 4) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12], o)
}

function get_svtrb_world_idk_4(o) {
    if (u8(o + 26) || u8(o + 27) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28], o)

    ö(u32(o + 0), get_svtrb_world_idk_4_0)

}

function get_svtrb_world_idk_4_0(o) {
    if (u8(o + 22) || u8(o + 23))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28, u32, 32, u32, 36, f32, 40, f32, 44], o)

    ö(u32(o + 36), get_svtrb_world_idk_4_0_36)

}

function get_svtrb_world_idk_4_0_36(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 50 || u32(o + 8) !== 50 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_idk_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_idk_16(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_object(o) {
    if (u32(o + 0) || u8(o + 5) || u8(o + 7) || u32(o + 16) || u8(o + 37) || u8(o + 39) || u32(o + 52) || u32(o + 60) || u32(o + 72) || u8(o + 87) || u32(o + 108) || u8(o + 112) !== 255 || u8(o + 113) !== 255 || u8(o + 114) !== 255 || u8(o + 115) !== 255 || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, f32, 28, f32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, f32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u8, 112, u8, 113, u8, 114, u8, 115, u32, 116, u32, 120, u32, 124], o)

    ö(u32(o + 8), get_svtrb_object_8)

    ä(svtrb_model_anims_2, u32(o + 20), get_svtrb_model_anims_2)

    ö(u32(o + 40), get_svtrb_object_40)
    ä(svtrb_unknown, u32(o + 56), get_svtrb_unknown)

    ä(svtrb_text, u32(o + 64), get_svtrb_text)
    ö(u32(o + 68), get_svtrb_object_68)
    ä(svtrb_unknown, u32(o + 76), get_svtrb_unknown)

    ö(u32(o + 88), get_svtrb_object_88)
    ö(u32(o + 92), get_svtrb_object_92)
    ö(u32(o + 96), get_svtrb_object_96)
    for (let i = 0; i < u32(o + 100); i++) {
        ö(u32(o + 104) + (i * 64), get_svtrb_mysterious)
    }

}
function get_svtrb_object_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_svtrb_object_8_12)
    }

}

function get_svtrb_object_8_12(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28], o)

    ä(svtrb_object, u32(o + 4), get_svtrb_object)

}

function get_svtrb_object_40(o) {
    if (u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 4), get_svtrb_object_40_4t0)
        break
    case 1:
        ö(u32(o + 4), get_svtrb_object_40_4t1)
        break
    case 2:
        ö(u32(o + 4), get_svtrb_object_40_4t2)
        break
    case 3:
        ö(u32(o + 4), get_svtrb_object_40_4t3)
        break
    case 4:
        ö(u32(o + 4), get_svtrb_object_40_4t4)
        break
    case 6:
        ö(u32(o + 4), get_svtrb_object_40_4t6)
        break
    case 7:
        ö(u32(o + 4), get_svtrb_object_40_4t7)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

    ö(u32(o + 16), get_svtrb_object_40_16)
    ö(u32(o + 20), get_svtrb_object_40_20)
    ö(u32(o + 24), get_svtrb_object_40_24)

}

function get_svtrb_object_40_4t0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_object_40_4t1(o) {
    if (u32(o + 4) || u32(o + 8) !== 100 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_car_extended_link, u32(o + 0), get_svtrb_car_extended_link)

}

function get_svtrb_object_40_4t2(o) {
    if (u32(o + 0) !== 15000 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_object_40_4t3(o) {
    if (u32(o + 0) !== 30000 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_object_40_4t4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 100 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_object_40_4t6(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_object_40_4t7(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_object_40_16(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_object_40_20(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_model_link, u32(o + 0), get_svtrb_model_link)

}

function get_svtrb_object_40_24(o) {
    if (u32(o + 0) !== 30000 || u32(o + 4) !== 2 || u8(o + 8) !== 255 || u8(o + 9) !== 255 || u8(o + 10) !== 255 || u8(o + 11) !== 255 || u8(o + 12) !== 255 || u8(o + 13) !== 255 || u8(o + 14) !== 255 || u8(o + 15) !== 255 || u8(o + 16) !== 255 || u8(o + 17) !== 255 || u8(o + 18) !== 255 || u8(o + 19) !== 255 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_object_68(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 10 || u8(o + 36) !== 110 || u8(o + 37) || u8(o + 38) !== 1 || u8(o + 39) || f32(o + 44) !== 50 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 68) || u32(o + 72) || u32(o + 76) || f32(o + 80) !== 2000 || u8(o + 84) || u8(o + 85) !== 1 || u8(o + 86) || u8(o + 87) || u32(o + 88) || u32(o + 96) || u32(o + 100) !== 5 || u32(o + 108) || u8(o + 112) !== 255 || u8(o + 113) !== 255 || u8(o + 114) !== 255 || u8(o + 115) !== 255 || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, f32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u8, 112, u8, 113, u8, 114, u8, 115, u32, 116, u32, 120, u32, 124], o)

    ö(u32(o + 40), get_svtrb_object_68_40)
    ä(svtrb_text, u32(o + 64), get_svtrb_text)

    ö(u32(o + 92), get_svtrb_object_68_92)
    for (let i = 0; i < u32(o + 100); i++) {
        ö(u32(o + 104) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_object_68_40(o) {
    if (u32(o + 0) !== 4 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_svtrb_object_68_40_4)

}

function get_svtrb_object_68_40_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_object_68_92(o) {
    if (f32(o + 0) !== 100 || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_object_68_92_4)
    ö(u32(o + 8), get_svtrb_object_68_92_8)

}

function get_svtrb_object_68_92_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 50 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_object_68_92_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_object_68_92_8_0)

}

function get_svtrb_object_68_92_8_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_object_68_92_8_0_4)

}

function get_svtrb_object_68_92_8_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_object_88(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 1 || f32(o + 8) !== 10000)
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12], o)

    ä(svtrb_unknown, u32(o + 12), get_svtrb_unknown)

}

function get_svtrb_object_92(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_object_92_4)
    ö(u32(o + 8), get_svtrb_object_92_8)

}

function get_svtrb_object_92_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_object_92_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_object_92_8_0)
    ö(u32(o + 8), get_svtrb_object_92_8_8)

}

function get_svtrb_object_92_8_0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_object_92_8_0_4)
    ö(u32(o + 12), get_svtrb_object_92_8_0_12)

}

function get_svtrb_object_92_8_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_object_92_8_0_12(o) {
    if (u8(o + 0) !== 9 || u8(o + 1) !== 147 || u8(o + 2) !== 14 || u8(o + 3) !== 30 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_object_92_8_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_object_92_8_8_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 24), get_svtrb_object_92_8_8_8)
    }

}

function get_svtrb_object_92_8_8_0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_object_92_8_8_0_4)
    ö(u32(o + 12), get_svtrb_object_92_8_8_0_12)

}

function get_svtrb_object_92_8_8_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_object_92_8_8_0_12(o) {
    if (u8(o + 0) !== 9 || u8(o + 1) !== 147 || u8(o + 2) !== 14 || u8(o + 3) !== 30 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_object_92_8_8_8(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20], o)

    ö(u32(o + 8), get_svtrb_object_92_8_8_8_8)
    ä(svtrb_gate, u32(o + 12), get_svtrb_gate)

    switch (u8(o + 1)) {
    case 0:
        ö(u32(o + 20), get_svtrb_object_92_8_8_8_20t0)
        break
    case 2:
    case 10:
        //float?
        break
    case 3:
        ö(u32(o + 20), get_svtrb_object_92_8_8_8_20t3)
        break
    default:
        if (u32(o + 20)) {
            sü(u8, 1, o, 20)
        }
    }

}

function get_svtrb_object_92_8_8_8_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_object_92_8_8_8_20t3(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_svtrb_object_92_8_8_8_20t0(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_svtrb_object_96(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_svtrb_object_96_8)

}

function get_svtrb_object_96_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_world_settings(o) {
    if (u32(o + 0) !== 4 || f32(o + 28) !== 10000000 || f32(o + 32) !== 10000000 || u8(o + 49) || u8(o + 50) !== 100 || u8(o + 51) || u32(o + 76) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 0.0010000000474974513 || f32(o + 116) !== 1 || f32(o + 120) !== 1 || f32(o + 124) !== 1 || f32(o + 128) !== 0.5 || u32(o + 132) || u32(o + 136) || u32(o + 140) || f32(o + 156) !== 10000 || f32(o + 160) !== 10000 || u32(o + 172) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 200) || u32(o + 204))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28, f32, 32, u32, 36, f32, 40, f32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, f32, 120, f32, 124, f32, 128, u32, 132, u32, 136, u32, 140, u32, 144, f32, 148, f32, 152, f32, 156, f32, 160, f32, 164, f32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204], o)

    ß('p_texture', o, 16)
    ß('p_texture', o, 20)
    ß('p_texture', o, 24)
    ß('p_texture', o, 144)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_world_settings_4)
    }
    ö(u32(o + 12), get_svtrb_world_settings_12)
    ö(u32(o + 36), get_svtrb_world_settings_36)
    ö(u32(o + 52), get_svtrb_world_settings_52)
    ö(u32(o + 56), get_svtrb_world_settings_56)
    ö(u32(o + 60), get_svtrb_world_settings_60)
    ö(u32(o + 64), get_svtrb_world_settings_64)
    ö(u32(o + 68), get_svtrb_world_settings_68)
    ö(u32(o + 72), get_svtrb_world_settings_72)
    ä(svtrb_font, u32(o + 80), get_svtrb_font)

    for (let i = 0; i < u32(o + 100); i++) {
        ö(u32(o + 104) + (i * 4), get_svtrb_world_settings_104)
    }
    for (let i = 0; i < u32(o + 108); i++) {
        ö(u32(o + 112) + (i * 4), get_svtrb_world_settings_112)
    }
    ä(svtrb_some_random_section, u32(o + 188), get_svtrb_some_random_section)

    ö(u32(o + 192), get_svtrb_world_settings_192)
    ö(u32(o + 196), get_svtrb_world_settings_196)

}

function get_svtrb_world_settings_4(o) {
    if (u32(o + 4) || u8(o + 11) !== 255 || f32(o + 12) !== 50 || u32(o + 32) || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 1 || f32(o + 48) !== 100 || f32(o + 52) !== 0.5 || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, f32, 52, u32, 56, u32, 60], o)
}
function get_svtrb_world_settings_12(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_svtrb_world_settings_36(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_settings_52(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_settings_56(o) {
    if (u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_settings_60(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_settings_64(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_settings_68(o) {
    if (u32(o + 0) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_settings_72(o) {
    if (f32(o + 0) !== 105 || f32(o + 4) !== 15 || f32(o + 8) !== 0.5 || f32(o + 12) !== 2 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_world_settings_104(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_svtrb_world_settings_104_0)

}

function get_svtrb_world_settings_104_0(o) {// console.log(get_string(o, 0, false))

}

function get_svtrb_world_settings_112(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_svtrb_world_settings_112_0)

}

function get_svtrb_world_settings_112_0(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_world_settings_192(o) {
    if (u32(o + 8) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(svtrb_interface, u32(o), get_svtrb_interface)
    ä(svtrb_interface, u32(o + 4), get_svtrb_interface)

    ö(u32(o + 12), get_svtrb_world_settings_192_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 4), get_svtrb_world_settings_192_20)
    }
    ö(u32(o + 28), get_svtrb_world_settings_192_28)
    //maybe 8 bytes ?
    ä(svtrb_interface, u32(o + 32), get_svtrb_interface)
    ä(svtrb_interface, u32(o + 36), get_svtrb_interface)

}

function get_svtrb_world_settings_192_12(o) {// PLANE
// console.log(get_string(o, 0, false))
}
function get_svtrb_world_settings_192_20(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_car_extended_link, u32(o + 0), get_svtrb_car_extended_link)

}

function get_svtrb_world_settings_192_28(o) {
    if (u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(svtrb_gate, u32(o + 0), get_svtrb_gate)
    ä(svtrb_gate, u32(o + 4), get_svtrb_gate)
    ä(svtrb_gate, u32(o + 8), get_svtrb_gate)
    ä(svtrb_gate, u32(o + 12), get_svtrb_gate)
    ä(svtrb_gate, u32(o + 16), get_svtrb_gate)
    ä(svtrb_gate, u32(o + 20), get_svtrb_gate)
    ä(svtrb_gate, u32(o + 24), get_svtrb_gate)
    ä(svtrb_gate, u32(o + 28), get_svtrb_gate)
    ä(svtrb_gate, u32(o + 32), get_svtrb_gate)
    ä(svtrb_gate, u32(o + 36), get_svtrb_gate)

}

function get_svtrb_world_settings_196(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_flag(o) {
    if (u8(o + 9) || u8(o + 10) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u8(o + 50) !== 1 || u8(o + 51) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_svtrb_flag_4)
    //some type ?
    switch (u8(o + 8)) {
    case 2:
        ö(u32(o + 12), get_svtrb_flag_12t2)
        break
    case 3:
        ö(u32(o + 12), get_svtrb_flag_12t3)
        break
    case 4:
        ö(u32(o + 12), get_svtrb_flag_12t4)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 8, o, 12)
        }
    }

}

function get_svtrb_flag_4(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_flag_12t3(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_world_link)
    ö(u32(o + 12), get_svtrb_flag_12t3_12)

}

function get_svtrb_flag_12t3_12(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_flag_12t2(o) {
    if (u8(o + 1) || u8(o + 3) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_flag_12t4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_var(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 8) || u8(o + 9) || u8(o + 10) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 172))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172], o)

    ö(u32(o + 140), get_svtrb_var_140)
    for (let i = 0; i < u32(o + 144); i++) {
        ö(u32(o + 148) + (i * 4), get_svtrb_var_148)
    }
    ö(u32(o + 152), get_svtrb_var_152)
    for (let i = 0; i < u32(o + 156); i++) {
        ö(u32(o + 160) + (i * 24), get_svtrb_var_160)
    }
    ö(u32(o + 164), get_svtrb_var_164)
    ö(u32(o + 168), get_svtrb_var_168)

}

function get_svtrb_var_140(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_var_148(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_var, u32(o + 0), get_svtrb_var)

}

function get_svtrb_var_152(o) {
    if (u32(o + 0) !== 32 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_var_160(o) {
    if (u32(o + 16) || u32(o + 20))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)

    ö(u32(o + 0), get_svtrb_var_160_0)
    ö(u32(o + 8), get_svtrb_var_160_8)
    ö(u32(o + 12), get_svtrb_var_160_12)

}

function get_svtrb_var_160_0(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_var_160_8(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_var_160_12(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_var_160_12_0)
    ä(svtrb_world_44, u32(o + 8), get_svtrb_world_44)

}

function get_svtrb_var_160_12_0(o) {
    if (u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    //dif
    switch (u8(o + 4)) {
    case 0:
        ä(svtrb_interface, u32(o + 0), get_svtrb_interface)
        break
    case 11:
        ä(svtrb_world_84, u32(o + 0), get_svtrb_world_84)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 4, o, 0)
        }
    }

    switch (u8(o + 5)) {
    case 0:
        //value
        break
    case 1:
        ö(u32(o + 8), get_svtrb_var_160_12_0_8t1)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 5, o, 0)
        }
    }

}

function get_svtrb_var_160_12_0_8t1(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_var_164(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 24), get_svtrb_world_mode_28)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 8), get_svtrb_var_164_20)
    }

}

function get_svtrb_var_164_20(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    globalThis.get_svtrb_var_164_20_4_count = 0
    switch (u32(o + 0)) {
    case 13:
    case 1600:
    case 1602:
    case 1604:
    case 1608:
    case 1610:
    case 1616:
    case 1618:
    case 1620:
    case 1636:
        globalThis.get_svtrb_var_164_20_4_count = u32(o + 0)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

    ö(u32(o + 4), get_svtrb_var_164_20_4)
    delete get_svtrb_var_164_20_4_count
}

function get_svtrb_var_164_20_4(o) {
    if (u32(o + 0) || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    switch (get_svtrb_var_164_20_4_count) {
    case 13:
        ö(u32(o + 12), get_svtrb_var_164_20_4_12t13)
        break
    case 1600:
        ö(u32(o + 12), get_svtrb_var_164_20_4_12t1600)
        break
    case 1602:
        ö(u32(o + 12), get_svtrb_var_164_20_4_12t1602)
        break
    case 1604:
        ö(u32(o + 12), get_svtrb_var_164_20_4_12t1604)
        break
    case 1608:
        ö(u32(o + 12), get_svtrb_var_164_20_4_12t1608)
        break
    case 1610:
        ö(u32(o + 12), get_svtrb_var_164_20_4_12t1610)
        break
    case 1616:
        ö(u32(o + 12), get_svtrb_var_164_20_4_12t1616)
        break
    case 1618:
        ö(u32(o + 12), get_svtrb_var_164_20_4_12t1618)
        break
    case 1620:
        ö(u32(o + 12), get_svtrb_var_164_20_4_12t1620)
        break
    case 1636:
        ö(u32(o + 12), get_svtrb_var_164_20_4_12t1636)
        break
    default:
        if (u32(o + 4)) {
            console.log(get_svtrb_var_164_20_4_count)
        }
    }
    ö(u32(o + 8), get_svtrb_var_164_20_4_8)

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_svtrb_var_164_20_4_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 24), get_svtrb_world_mode_28)
    }

}

function get_svtrb_var_164_20_4_8(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_var_164_20_4_12t13(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_var_164_20_4_12t13_4)

}

function get_svtrb_var_164_20_4_12t13_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_var_164_20_4_12t1600(o) {
    if (u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 0:
        ö(u32(o + 0), get_svtrb_var_164_20_4_12t1600_0t0)
        break
    case 2:
        // float value
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 8, o, 0)
        }
    }
    ö(u32(o + 4), get_svtrb_world_link)

}
function get_svtrb_var_164_20_4_12t1600_0t0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_var_164_20_4_12t1602(o) {
    if (u8(o + 8) !== 4 || u8(o + 9) !== 3 || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_link)
    ö(u32(o + 4), get_svtrb_var_164_20_4_12t1602_4)

}

function get_svtrb_var_164_20_4_12t1602_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 4)) {
    case 1:
        ö(u32(o + 0), get_svtrb_world_link)
        break
    case 2:
        ä(svtrb_object, u32(o + 0), get_svtrb_object)
        break
    default:
        if (u32(o + 0)) {
            sü(u32, 4, o, 0)
        }
    }

}

function get_svtrb_var_164_20_4_12t1604(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_var_164_20_4_12t1608(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_world_20, u32(o + 8), get_svtrb_world_20)

}

function get_svtrb_var_164_20_4_12t1610(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_var_164_20_4_12t1610_4)

}

function get_svtrb_var_164_20_4_12t1610_4(o) {
    if (u32(o + 4) !== 3 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_link)

}

function get_svtrb_var_164_20_4_12t1616(o) {
    if (u8(o + 8) || u8(o + 9) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_svtrb_world_link)
    ö(u32(o + 4), get_svtrb_world_link)

}

function get_svtrb_var_164_20_4_12t1618(o) {
    if (u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 0:
        ä(svtrb_flag, u32(o + 0), get_svtrb_flag)
        break
    case 1:
        ö(u32(o + 0), get_svtrb_var_164_20_4_12t1618_0t1)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 8, o, 0)
        }
    }

    switch (u8(o + 10)) {
    case 0:
        // float value
        break
    case 1:
        ä(svtrb_flag, u32(o + 4), get_svtrb_flag)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 10, o, 4)
        }
    }
}
function get_svtrb_var_164_20_4_12t1618_0t1(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_world_link)
    ö(u32(o + 12), get_svtrb_var_164_20_4_12t1618_0t1_12)

}

function get_svtrb_var_164_20_4_12t1618_0t1_12(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

}

function get_svtrb_var_164_20_4_12t1620(o) {
    if (u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_link)
    ä(svtrb_world_60, u32(o + 8), get_svtrb_world_60)

}

function get_svtrb_var_164_20_4_12t1636(o) {
    if (u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_link)

}

function get_svtrb_var_164_20_4_20(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ö(u32(o + 4), get_svtrb_var_164_20_4_20_4)
    switch (u32(o + 0)) {
    case 1:
        ö(u32(o + 8), get_svtrb_var_164_20_4_20_8t1)
        break
    case 3:
        ö(u32(o + 8), get_svtrb_var_164_20_4_20_8t3)
        break
    case 4:
        ö(u32(o + 8), get_svtrb_var_164_20_4_20_8t4)
        break
    case 5:
        ö(u32(o + 8), get_svtrb_var_164_20_4_20_8t5)
        break
    case 12:
        ö(u32(o + 8), get_svtrb_var_164_20_4_20_8t12)
        break
    case 15:
        ö(u32(o + 8), get_svtrb_var_164_20_4_20_8t15)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 0, o, 8)
        }
    }

}
function get_svtrb_var_164_20_4_20_8t5(o) {
    if (u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 0:
        ä(svtrb_flag, u32(o + 0), get_svtrb_flag)
        break
    case 1:
        ö(u32(o + 0), get_svtrb_var_164_20_4_20_8t5_0t1)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 8, o, 0)
        }
    }

    switch (u8(o + 10)) {
    case 0:
        // float
        break
    case 1:
        ä(svtrb_flag, u32(o + 4), get_svtrb_flag)
        break
    case 2:
        ö(u32(o + 4), get_svtrb_var_164_20_4_20_8t5_4t2)
        break
    default:
        ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    }

}
function get_svtrb_var_164_20_4_20_8t5_0t1(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_world_link)
    ö(u32(o + 12), get_svtrb_var_164_20_4_20_8t5_0t1_12)

}

function get_svtrb_var_164_20_4_20_8t5_0t1_12(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_var_164_20_4_20_8t5_4t2(o) {
    if (u32(o + 0) || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 12), get_svtrb_var_164_20_4_20_8t5_4t2_12)

}

function get_svtrb_var_164_20_4_20_8t5_4t2_12(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_var_164_20_4_20_8t15(o) {
    if (u32(o + 8) !== 772 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_var_164_20_4_20_8t15_0)
    ö(u32(o + 4), get_svtrb_var_164_20_4_20_8t15_4)

}

function get_svtrb_var_164_20_4_20_8t15_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 5 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_var_164_20_4_20_8t15_4(o) {
    if (u32(o + 4) !== 2 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_object, u32(o + 0), get_svtrb_object)

}

function get_svtrb_var_164_20_4_20_8t3(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_var_164_20_4_20_8t3_4)

}

function get_svtrb_var_164_20_4_20_8t3_4(o) {
    if (u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_link)

}

function get_svtrb_var_164_20_4_20_8t12(o) {
    if (u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_link)

}

function get_svtrb_var_164_20_4_20_8t4(o) {
    if (u8(o + 8) || u8(o + 9) || u8(o + 10) !== 7 || u8(o + 11) !== 3 || f32(o + 12) !== 600 || f32(o + 16) !== 10000 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_svtrb_world_link)
    ö(u32(o + 4), get_svtrb_world_link)

}

function get_svtrb_var_164_20_4_20_8t1(o) {
    if (u32(o + 8) !== 1024 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_var_164_20_4_20_8t1_0)
    ö(u32(o + 4), get_svtrb_var_164_20_4_20_8t1_4)

}

function get_svtrb_var_164_20_4_20_8t1_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_var_164_20_4_20_8t1_4(o) {
    if (u32(o + 0) !== 21 || u32(o + 4) !== 13 || u32(o + 8) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_var_164_20_4_20_4(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_var_168(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 24), get_svtrb_world_mode_28)
    }

}
function get_svtrb_idk(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 36) || u32(o + 40) || u32(o + 60) || u8(o + 64) !== 255 || u8(o + 65) !== 255 || u8(o + 66) !== 255 || u8(o + 67) !== 255 || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, u32, 72, u32, 76], o)

    switch (u8(o + 0)) {
    case 0:
        ß('p_model', o, 4)
        break
    case 1:
        ä(svtrb_model_link, u32(o + 4), get_svtrb_model_link)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

    ä(svtrb_model_anims_2, u32(o + 8), get_svtrb_model_anims_2)

    ö(u32(o + 12), get_svtrb_idk_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_svtrb_idk_20)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 64), get_svtrb_mysterious)
    }
    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 16), get_svtrb_idk_48)
    }
    ö(u32(o + 52), get_svtrb_idk_52)
    ä(svtrb_idk, u32(o + 56), get_svtrb_idk)

}

function get_svtrb_idk_12(o) {
    if (u8(o + 14) || u8(o + 15) || u32(o + 20) || u32(o + 24) || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || f32(o + 48) !== 1 || f32(o + 52) !== 1 || f32(o + 56) !== 1 || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 16), get_svtrb_idk_12_16)
    ö(u32(o + 28), get_svtrb_idk_12_28)
    ä(svtrb_gate, u32(o + 44), get_svtrb_gate)
    ö(u32(o + 68), get_svtrb_idk_12_68)
    ö(u32(o + 76), get_svtrb_idk_12_76)

}
function get_svtrb_idk_12_16(o) {
    if (f32(o + 0) !== -0.5 || u32(o + 4) || f32(o + 8) !== -0.5 || u32(o + 12) || f32(o + 16) !== 0.5 || f32(o + 20) !== 1 || f32(o + 24) !== 0.5 || u32(o + 28) || f32(o + 32) !== 0.5 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_svtrb_idk_12_28(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_idk_12_28_4)
    ö(u32(o + 8), get_svtrb_idk_12_28_8)

}

function get_svtrb_idk_12_28_4(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_idk_12_28_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_idk_12_28_8_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_svtrb_idk_12_28_8_8)
    }

}

function get_svtrb_idk_12_28_8_0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_idk_12_28_8_0_4)
    ö(u32(o + 12), get_svtrb_idk_12_28_8_0_12)

}

function get_svtrb_idk_12_28_8_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_idk_12_28_8_0_12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_svtrb_idk_12_28_8_8(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ö(u32(o + 0), get_svtrb_idk_12_28_8_8_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 24), get_svtrb_idk_12_28_8_8_8)
    }

}

function get_svtrb_idk_12_28_8_8_0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_idk_12_28_8_8_0_4)
    ö(u32(o + 12), get_svtrb_idk_12_28_8_8_0_12)

}

function get_svtrb_idk_12_28_8_8_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_idk_12_28_8_8_0_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_idk_12_28_8_8_8(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 4) || f32(o + 16) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20], o)

    ö(u32(o + 8), get_svtrb_idk_12_28_8_8_8_8)
    ä(svtrb_gate, u32(o + 12), get_svtrb_gate)
    switch (u8(o + 1)) {
    case 0:
        ö(u32(o + 20), get_svtrb_idk_12_28_8_8_8_20t0)
        break
    case 2:
        // float
        break
    case 8:
        ö(u32(o + 20), get_svtrb_idk_12_28_8_8_8_20t8)
        break
    default:
        if (u32(o + 20)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20], o)
            sü(u8, 1, o, 20)
        }
    }

}

function get_svtrb_idk_12_28_8_8_8_8(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_idk_12_28_8_8_8_20t0(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_svtrb_idk_12_28_8_8_8_20t8(o) {
    if (u32(o + 32) || u32(o + 36) || u32(o + 44) !== 1)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 40), get_svtrb_idk_12_28_8_8_8_20t8_40)

}

function get_svtrb_idk_12_28_8_8_8_20t8_40(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 0) + (i * 32), get_svtrb_idk_12_28_8_8_8_20t8_40_0)
    }
}

function get_svtrb_idk_12_28_8_8_8_20t8_40_0(o) {
    if (u32(o + 16))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
}

function get_svtrb_idk_12_68(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)
}

function get_svtrb_idk_12_76(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)

}

function get_svtrb_idk_20(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)*/

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 32), get_svtrb_idk_20_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 32), get_svtrb_idk_20_8)
    }
    ö(u32(o + 20), get_svtrb_idk_20_20)

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_idk_20_8(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_idk_20_20(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_idk_20_20_8)

}

function get_svtrb_idk_20_20_8(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 10 || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 10 || f32(o + 24) !== -10 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_svtrb_idk_48(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_idk_52(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_svtrb_idk_52_8)

}

function get_svtrb_idk_52_8(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_something(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 24) !== 4000 || u32(o + 28) !== 4000 || u32(o + 36) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 20)

    ä(svtrb_text, u32(o + 16), get_svtrb_text)

    ä(svtrb_flag, u32(o + 32), get_svtrb_flag)

    ä(svtrb_object, u32(o + 44), get_svtrb_object)

}

function get_svtrb_world_mode(o) {
    if (u32(o + 0) || u32(o + 4))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_svtrb_world_mode_8)
    switch (svtrbtemptype) {
    case 28:
        ö(u32(o + 12), get_svtrb_world_mode_12t28)
        break
    case 36:
        ö(u32(o + 12), get_svtrb_world_mode_12t36)
        break
    case 44:
        ö(u32(o + 12), get_svtrb_world_mode_12t44)
        break
    case 60:
        ö(u32(o + 12), get_svtrb_world_mode_12t60)
        break
    case 68:
        ö(u32(o + 12), get_svtrb_world_mode_12t68)
        break
    case 84:
        ö(u32(o + 12), get_svtrb_world_mode_12t84)
        break
    case 92:
        ö(u32(o + 12), get_svtrb_world_mode_12t92)
        break
    default:
        console.log(svtrbtemptype)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_svtrb_world_mode_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 24), get_svtrb_world_mode_28)
    }

}

function get_svtrb_world_mode_8(o) {
    // console.log(get_string(o, 0, false))
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)
}
function get_svtrb_world_mode_12t28(o) {
    if (u8(o + 10) || u8(o + 11) || u32(o + 12))
    ü(1, [f32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 0:
        ö(u32(o + 0), get_svtrb_world_mode_12t28_0t0)
        break
    case 1:
        break
    case 2:
        //float
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 8, o, 0)
            ü(1, [f32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
        }
    }

    ö(u32(o + 4), get_svtrb_world_link)

}
function get_svtrb_world_mode_12t28_0t0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_mode_12t36(o) {
    if (u8(o + 8) !== 4 || u8(o + 9) !== 3 || u8(o + 10) !== 1 || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_link)
    ö(u32(o + 4), get_svtrb_world_mode_12t36_4)

}

function get_svtrb_world_mode_12t36_4(o) {
    if (u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_mode_12t36_4_0)

}

function get_svtrb_world_mode_12t36_4_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 15 || u32(o + 8) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_mode_12t44(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_mode_12t60(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_world_20, u32(o + 8), get_svtrb_world_20)

}

function get_svtrb_world_mode_12t68(o) {
    if (u32(o + 0) !== 8642496 || u32(o + 4) !== 8642512 || u8(o + 8) || u8(o + 9) || u8(o + 10) !== 4 || u8(o + 11) !== 8 || u32(o + 12) || f32(o + 16) !== 75 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_svtrb_world_mode_12t68_0)
    ö(u32(o + 4), get_svtrb_world_link)

}

function get_svtrb_world_mode_12t68_0(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) !== 13 || u32(o + 8) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_mode_12t84(o) {
    if (u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 0:
        ä(svtrb_flag, u32(o + 0), get_svtrb_flag)
        break
    case 1:
        ö(u32(o + 0), get_svtrb_world_mode_12t84_0t1)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 8, o, 0)
        }
    }

}
function get_svtrb_world_mode_12t84_0t1(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_world_link)
    ö(u32(o + 12), get_svtrb_world_mode_12t84_0t1_12)

}

function get_svtrb_world_mode_12t84_0t1_12(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_world_mode_12t92(o) {
    if (u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_link)
    ä(svtrb_world_60, u32(o + 8), get_svtrb_world_60)

}

function get_svtrb_world_mode_20(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ö(u32(o + 4), get_svtrb_world_mode_20_4)
    switch (u32(o + 0)) {
    case 3:
        ö(u32(o + 8), get_svtrb_world_mode_20_8t3)
        break
    case 5:
        ö(u32(o + 8), get_svtrb_world_mode_20_8t5)
        break
    case 12:
        ö(u32(o + 8), get_svtrb_world_mode_20_8t12)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 0, o, 8)
        }
    }

}

function get_svtrb_world_mode_20_4(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_world_mode_20_8t5(o) {
    if (u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 0:
        ä(svtrb_flag, u32(o + 0), get_svtrb_flag)
        break
    case 1:
        ö(u32(o + 0), get_svtrb_world_mode_20_8t5_0t1)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 8, o, 0)
        }
    }

}
function get_svtrb_world_mode_20_8t5_0t1(o) {
    if (u32(o + 0) || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 12), get_svtrb_world_mode_20_8t5_0t1_12)

}

function get_svtrb_world_mode_20_8t5_0t1_12(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_world_mode_20_8t3(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_world_mode_20_8t3_4)

}

function get_svtrb_world_mode_20_8t3_4(o) {
    if (u8(o + 5) !== 1 || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_link)

}

function get_svtrb_world_mode_20_8t12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_mode_20_8t12_0)

}

function get_svtrb_world_mode_20_8t12_0(o) {
    if (u32(o + 8) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_mode_28(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)*/

    ö(u32(o + 0), get_svtrb_world_mode_28_0)
    ö(u32(o + 8), get_svtrb_world_mode_28_8)
    switch (u32(o + 4)) {
    case 1:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t1)
        break
    case 2:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t2)
        break
    case 5:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t5)
        break
    case 6:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t6)
        break
    case 7:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t7)
        break
    case 8:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t8)
        break
    case 12:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t12)
        break
    case 14:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t14)
        break
    case 15:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t15)
        break
    case 16:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t16)
        break
    case 18:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t18)
        break
    case 19:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t19)
        break
    case 20:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t20)
        break
    case 21:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t21)
        break
    case 22:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t22)
        break
    case 23:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t23)
        break
    case 24:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t24)
        break
    case 25:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t25)
        break
    case 26:
        ö(u32(o + 12), get_svtrb_world_mode_28_12t26)
        break
    default:
        if (u32(o + 12)) {
            sü(u32, 4, o, 12)
        }
    }

}

function get_svtrb_world_mode_28_0(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_world_mode_28_8(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_world_mode_28_12t2(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 0)) {
    case 1:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t1)
        break
    case 4:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t4)
        break
    case 5:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t5)
        break
    case 6:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t6)
        break
    case 7:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t7)
        break
    case 8:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t8)
        break
    case 9:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t9)
        break
    case 11:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t11)
        break
    case 12:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t12)
        break
    case 14:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t14)
        break
    case 16:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t16)
        break
    case 17:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t17)
        break
    case 19:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t19)
        break
    case 20:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t20)
        break
    case 21:
        ö(u32(o + 4), get_svtrb_world_mode_28_12t2_4t21)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

}
function get_svtrb_world_mode_28_12t2_4t9(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t2_4t5(o) {
    if (u8(o + 0) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_svtrb_world_link)

}

function get_svtrb_world_link(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (u8(o + 8)) {
    case 1:
        switch (u32(o + 4)) {
        case 0:
            ä(svtrb_world_12, u32(o + 0), get_svtrb_world_12)
            break
        case 1:
            ä(svtrb_world_20, u32(o + 0), get_svtrb_world_20)
            break
        case 3:
            ä(svtrb_world_36, u32(o + 0), get_svtrb_world_36)
            break
        case 8:
            ä(svtrb_world_60, u32(o + 0), get_svtrb_world_60)
            break
        case 10:
            ä(svtrb_world_68, u32(o + 0), get_svtrb_world_68)
            break
        case 11:
            ä(svtrb_world_84, u32(o + 0), get_svtrb_world_84)
            break
        case 13:
            ä(svtrb_world_92, u32(o + 0), get_svtrb_world_92)
            break
        case 14:
            ä(svtrb_world_100, u32(o + 0), get_svtrb_world_100)
            break
        case 15:
            ä(svtrb_world_108, u32(o + 0), get_svtrb_world_108)
            break
        case 16:
            ä(svtrb_world_120_0, u32(o + 0), get_svtrb_world_120_0)
            break
        default:
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            if (u32(o + 0)) {
                sü(u32, 4, o, 0)
            }
        }
        break
    case 2:
        //value?
        break
    case 4:
        //value?
        break
    case 5:
        if (u32(o + 0)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
            sü(u8, 8, o, 0)
        }
        //value?
        break
    default:
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
        if (u32(o + 0)) {
            sü(u8, 8, o, 0)
        }
    }
}

function get_svtrb_world_mode_28_12t2_4t19(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t2_4t17(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u8(o + 40) || u8(o + 41) || u8(o + 43) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t2_4t8(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t2_4t1(o) {
    if (u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28], o)

    ä(svtrb_world_84, u32(o + 4), get_svtrb_world_84)
    ö(u32(o + 12), get_svtrb_world_mode_28_12t2_4t1_12)
    ö(u32(o + 16), get_svtrb_world_mode_28_12t2_4t1_16)
    ö(u32(o + 20), get_svtrb_world_mode_28_12t2_4t1_16)

}

function get_svtrb_world_mode_28_12t2_4t1_12(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_svtrb_world_mode_28_12t2_4t1_16(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)

    switch (u32(o + 4)) {
    case 0:
        ä(svtrb_world_12, u32(o + 0), get_svtrb_world_12)
        break
    case 1:
        ä(svtrb_world_20, u32(o + 0), get_svtrb_world_20)
        break
    case 10:
        ä(svtrb_world_68, u32(o + 0), get_svtrb_world_68)
        break
    case 11:
        ä(svtrb_world_84, u32(o + 0), get_svtrb_world_84)
        break
    case 13:
        ä(svtrb_world_92, u32(o + 0), get_svtrb_world_92)
        break
    case 15:
        ä(svtrb_world_108, u32(o + 0), get_svtrb_world_108)
        break
    case 16:
        ä(svtrb_world_120_0, u32(o + 0), get_svtrb_world_120_0)
        break
    default:
        if (u32(o + 0)) {
            sü(u32, 4, o, 0)
        }
    }

}

function get_svtrb_world_mode_28_12t2_4t21(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_world_link)
    ä(svtrb_some_random_section, u32(o + 8), get_svtrb_some_random_section)

}

function get_svtrb_world_mode_28_12t2_4t4(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u8(o + 22) || u8(o + 23) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t2_4t14(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t2_4t16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u8(o + 20) || u8(o + 21) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ä(svtrb_flag, u32(o + 36), get_svtrb_flag)

}

function get_svtrb_world_mode_28_12t2_4t7(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_svtrb_world_mode_28_12t2_4t20(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_svtrb_world_link)
    switch (u8(o + 3)) {
    case 13:
    case 14:
        ä(svtrb_maybe_car_related, u32(o + 24), get_svtrb_maybe_car_related)
        break
    case 15:
        ä(svtrb_world_mode_4_links, u32(o + 24), get_svtrb_world_mode_4_links)
        break
    default:
        if (u32(o + 24)) {
            sü(u8, 3, o, 24)
        }
    }

    ö(u32(o + 28), get_svtrb_world_mode_28_12t2_4t20_28)
    ö(u32(o + 32), get_svtrb_world_mode_28_12t2_4t20_32)

}
function get_svtrb_maybe_car_related(o) {
    if (u32(o + 0) || f32(o + 4) !== 0.5600000023841858 || f32(o + 8) !== -7.400000095367432 || u32(o + 12) || u32(o + 24) !== 1 || u32(o + 32) !== 9 || u32(o + 48) || f32(o + 52) !== 8.699999809265137 || f32(o + 56) !== -19.350000381469727 || u32(o + 60) || u32(o + 64) !== 7 || u32(o + 76))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, f32, 36, f32, 40, u32, 44, u32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ä(svtrb_model_anims_2, u32(o + 16), get_svtrb_model_anims_2)
    ö(u32(o + 20), get_svtrb_maybe_car_related_20)
    ö(u32(o + 28), get_svtrb_maybe_car_related_28)
    ö(u32(o + 44), get_svtrb_maybe_car_related_44)
    ö(u32(o + 68), get_svtrb_maybe_car_related_68)
    ö(u32(o + 72), get_svtrb_maybe_car_related_44)

}

function get_svtrb_maybe_car_related_20(o) {
    if (u32(o + 8) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_model_link, u32(o + 0), get_svtrb_model_link)
    ö(u32(o + 4), get_svtrb_maybe_car_related_20_4)
    ö(u32(o + 12), get_svtrb_maybe_car_related_20_12)

}

function get_svtrb_maybe_car_related_20_4(o) {
    if (u32(o + 0) !== 1 || f32(o + 8) !== 1.5 || f32(o + 12) !== 0.8999999761581421 || u32(o + 16) || u32(o + 20) || f32(o + 24) !== 1 || f32(o + 28) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 48) !== 0.30000001192092896 || f32(o + 52) !== 0.30000001192092896 || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || f32(o + 72) !== 1.350000023841858 || u32(o + 76) !== 2 || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ö(u32(o + 4), get_svtrb_maybe_car_related_20_4_4)
    ö(u32(o + 80), get_svtrb_maybe_car_related_20_4_80)

}

function get_svtrb_maybe_car_related_20_4_4(o) {
    if (u32(o + 0) !== 11 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_maybe_car_related_20_4_80(o) {
    if (u32(o + 0) !== 10 || u32(o + 4) !== 12 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_maybe_car_related_20_12(o) {
    if (u32(o + 0) !== 99 || u32(o + 4) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 64), get_svtrb_mysterious)
    }
}

function get_svtrb_maybe_car_related_28(o) {
    if (u32(o + 0) !== 2 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_maybe_car_related_44(o) {
    if (u32(o + 0) !== 589825 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_car_extended_link, u32(o + 4), get_svtrb_car_extended_link)

}

function get_svtrb_maybe_car_related_68(o) {
    if (u32(o + 0) || f32(o + 4) !== 10.779999732971191 || f32(o + 8) !== 30 || f32(o + 12) !== 0.6000000238418579 || f32(o + 16) !== 1.5 || u32(o + 20) !== 1 || f32(o + 24) !== 8.90999984741211 || f32(o + 28) !== 25.079999923706055 || f32(o + 32) !== 0.6000000238418579 || f32(o + 36) !== 1.5 || u32(o + 40) !== 2 || f32(o + 44) !== 7.5 || f32(o + 48) !== 20.860000610351562 || f32(o + 52) !== 0.6000000238418579 || f32(o + 56) !== 1.5 || u32(o + 60) !== 3 || f32(o + 64) !== 5.860000133514404 || f32(o + 68) !== 18.979999542236328 || f32(o + 72) !== 0.6000000238418579 || f32(o + 76) !== 1.5 || u32(o + 80) !== 4 || f32(o + 84) !== 3.9800000190734863 || f32(o + 88) !== 16.170000076293945 || f32(o + 92) !== 0.6000000238418579 || f32(o + 96) !== 1.5 || u32(o + 100) !== 5 || f32(o + 104) !== 2.3399999141693115 || f32(o + 108) !== 14.300000190734863 || f32(o + 112) !== 0.6000000238418579 || f32(o + 116) !== 1.5 || u32(o + 120) !== 6 || f32(o + 124) !== 0.9399999976158142 || f32(o + 128) !== 12.1899995803833 || f32(o + 132) !== 0.6000000238418579 || f32(o + 136) !== 1.5 || u32(o + 140))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60, f32, 64, f32, 68, f32, 72, f32, 76, u32, 80, f32, 84, f32, 88, f32, 92, f32, 96, u32, 100, f32, 104, f32, 108, f32, 112, f32, 116, u32, 120, f32, 124, f32, 128, f32, 132, f32, 136, u32, 140], o)
}

function get_svtrb_world_mode_4_links(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 0), get_svtrb_world_mode_4_links_0)
    ö(u32(o + 4), get_svtrb_world_mode_4_links_4)
    ö(u32(o + 8), get_svtrb_world_mode_4_links_8)
    ö(u32(o + 12), get_svtrb_world_mode_4_links_12)

}

function get_svtrb_world_mode_4_links_0(o) {
    if (f32(o + 0) !== 182 || f32(o + 4) !== 458 || f32(o + 8) !== 15 || f32(o + 12) !== 283 || f32(o + 16) !== 0.18000000715255737 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_world_mode_4_links_4(o) {
    if (f32(o + 0) !== -14.600000381469727 || f32(o + 4) !== 14.600000381469727 || f32(o + 8) !== -13.5 || f32(o + 12) !== 6.300000190734863 || f32(o + 16) !== 28 || f32(o + 20) !== 75 || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 0.5600000023841858 || f32(o + 36) !== 0.8299999833106995 || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28, f32, 32, f32, 36, u32, 40, u32, 44], o)
}
function get_svtrb_world_mode_4_links_8(o) {
    if (f32(o + 0) !== -26 || f32(o + 4) !== 26 || f32(o + 8) !== -19 || f32(o + 12) !== 17 || f32(o + 16) !== 37.5 || f32(o + 20) !== 80.5 || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 0.5600000023841858 || f32(o + 36) !== 0.8299999833106995 || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28, f32, 32, f32, 36, u32, 40, u32, 44], o)
}
function get_svtrb_world_mode_4_links_12(o) {
    if (f32(o + 0) !== -26 || f32(o + 4) !== 26 || f32(o + 8) !== -19 || f32(o + 12) !== 17 || f32(o + 16) !== 52 || f32(o + 20) !== 80.5 || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 0.7799999713897705 || f32(o + 36) !== 1.159999966621399 || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28, f32, 32, f32, 36, u32, 40, u32, 44], o)
}

function get_svtrb_world_mode_28_12t2_4t20_28(o) {
    /*ü(1, [u32, 0, u32, 4, f32, 8, u32, 12], o)*/

    ä(svtrb_world_20, u32(o + 4), get_svtrb_world_20)
    ö(u32(o + 12), get_svtrb_world_mode_28_12t2_4t20_28_12)

}

function get_svtrb_world_mode_28_12t2_4t20_28_12(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    switch (u32(o + 4)) {
    case 0:
        ä(svtrb_world_12, u32(o + 0), get_svtrb_world_12)
        break
    case 1:
        ä(svtrb_world_20, u32(o + 0), get_svtrb_world_20)
        break
    case 11:
        ä(svtrb_world_84, u32(o + 0), get_svtrb_world_84)
        break
    case 16:
        ä(svtrb_world_120_0, u32(o + 0), get_svtrb_world_120_0)
        break
    default:
        if (u32(o + 0)) {
            sü(u32, 4, o, 0)
        }
    }

}

function get_svtrb_world_mode_28_12t2_4t20_32(o) {
    /*ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28], o)*/

    ä(svtrb_world_20, u32(o + 0), get_svtrb_world_20)
    ä(svtrb_world_20, u32(o + 4), get_svtrb_world_20)

}

function get_svtrb_world_mode_28_12t2_4t11(o) {
    if (u8(o + 0) || u8(o + 1) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t2_4t12(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t2_4t6(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t6(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 4)) {
    case 1:
        ö(u32(o + 0), get_svtrb_world_mode_28_12t6_0t1)
        break
    case 2:
        ö(u32(o + 0), get_svtrb_world_mode_28_12t6_0t2)
        break
    default:
        if (u32(o + 0)) {
            sü(u32, 4, o, 0)
        }
    }

}

function get_svtrb_world_mode_28_12t6_0t1(o) {
    if (u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ä(svtrb_interface, u32(o + 0), get_svtrb_interface)

    ö(u32(o + 8), get_svtrb_world_mode_28_12t6_0t1_8)

}

function get_svtrb_world_mode_28_12t6_0t1_8(o) {
    if (u32(o + 0) || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 12), get_svtrb_world_mode_28_12t6_0t1_8_12)

}

function get_svtrb_world_mode_28_12t6_0t1_8_12(o) {/*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/
}

function get_svtrb_world_mode_28_12t6_0t2(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_interface, u32(o + 4), get_svtrb_interface)

}

function get_svtrb_world_mode_28_12t7(o) {
    if (u8(o + 8) !== 4 || u8(o + 9) !== 2 || u8(o + 10) !== 2 || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_mode_28_12t7_0)
    ä(svtrb_object, u32(o + 4), get_svtrb_object)

}

function get_svtrb_world_mode_28_12t7_0(o) {
    if (u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_world_12, u32(o + 0), get_svtrb_world_12)

}

function get_svtrb_world_mode_28_12t18(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_mode_28_12t19(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_something, u32(o + 4), get_svtrb_something)
    ö(u32(o + 8), get_svtrb_world_mode_28_12t19_8)

}

function get_svtrb_world_mode_28_12t19_8(o) {
    if (u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_text, u32(o + 0), get_svtrb_text)
    ä(svtrb_flag, u32(o + 8), get_svtrb_flag)

}

function get_svtrb_world_mode_28_12t20(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, f32, 12], o)*/

    ö(u32(o + 4), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t21(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_world_link)
    ä(svtrb_small_texture_link, u32(o + 12), get_svtrb_small_texture_link)

}

function get_svtrb_small_texture_link(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_svtrb_small_texture_link_8)

}

function get_svtrb_small_texture_link_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_world_mode_28_12t5(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_world_mode_28_12t5_4)

}

function get_svtrb_world_mode_28_12t5_4(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_world_mode_28_12t5_4_8)

}

function get_svtrb_world_mode_28_12t5_4_8(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_mode_28_12t8(o) {
    if (u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 1:
        ä(svtrb_flag, u32(o + 0), get_svtrb_flag)
        break
    case 2:
        ö(u32(o + 0), get_svtrb_world_mode_28_12t8_0t2)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 8, o, 0)
        }
    }

    switch (u8(o + 10)) {
    case 0:
        // value
        break
    case 2:
        ä(svtrb_flag, u32(o + 4), get_svtrb_flag)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 10, o, 4)
            ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
        }
    }

}

function get_svtrb_world_mode_28_12t8_0t2(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_world_link)
    ö(u32(o + 12), get_svtrb_world_mode_28_12t8_0t2_12)

}

function get_svtrb_world_mode_28_12t8_0t2_12(o) {
    if (u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_world_mode_28_12t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_mode_28_12t1_0)

}

function get_svtrb_world_mode_28_12t1_0(o) {
    if (u8(o + 5) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t12(o) {
    if (u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_svtrb_world_link)
    ö(u32(o + 4), get_svtrb_world_link)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 8), get_svtrb_world_mode_28_12t12_20)
    }

}

function get_svtrb_world_mode_28_12t12_20(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_svtrb_world_mode_28_12t12_20_4)
    }

}

function get_svtrb_world_mode_28_12t12_20_4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_svtrb_world_mode_28_12t15(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_mode_28_12t23(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t24(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)
    ö(u32(o + 4), get_svtrb_world_link)

}

function get_svtrb_world_mode_28_12t14(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_link)
    ä(svtrb_world_44, u32(o + 8), get_svtrb_world_44)

}

function get_svtrb_world_mode_28_12t25(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_world_120_0, u32(o + 0), get_svtrb_world_120_0)
    ä(svtrb_world_120_0, u32(o + 4), get_svtrb_world_120_0)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 24), get_svtrb_world_mode_28_12t25_16)
    }

}

function get_svtrb_world_mode_28_12t25_16(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20], o)

    ö(u32(o + 20), get_svtrb_world_mode_28_12t25_16_20)

}

function get_svtrb_world_mode_28_12t25_16_20(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_mode_28_12t26(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_world_108, u32(o + 0), get_svtrb_world_108)

}

function get_svtrb_world_mode_28_12t16(o) {
    if (u32(o + 4) !== 2 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_var, u32(o + 0), get_svtrb_var)

}

function get_svtrb_world_mode_28_12t22(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 0), get_svtrb_world_link)

    // [8] = 1 if [4] is an offset, else 0
    ö(u32(o + 4), get_svtrb_world_mode_28_12t22_4)
    // type 1,10,13 seen [4]
    ö(u32(o + 12), get_svtrb_world_mode_28_12t22_12)

}

function get_svtrb_world_mode_28_12t22_4(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// offset to world values
}
function get_svtrb_world_mode_28_12t22_12(o) {
    if (u8(o + 5) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 28))
    ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)

    ä(svtrb_model_anims_2, u32(o + 0), get_svtrb_model_anims_2)

}

function get_svtrb_interface(o) {
    if (u8(o + 7) || u32(o + 40) || u32(o + 52) !== 1 || u32(o + 76))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, f32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 0), get_svtrb_interface_0)
    ö(u32(o + 8), get_svtrb_interface_8)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 28), get_svtrb_interface_16)
    }
    ä(svtrb_sound_controls, u32(o + 36), get_svtrb_sound_controls)
    ä(svtrb_sound_controls, u32(o + 44), get_svtrb_sound_controls)
    ä(svtrb_sound_controls, u32(o + 48), get_svtrb_sound_controls)

    ö(u32(o + 56), get_svtrb_interface_56)
    ä(svtrb_sound_controls, u32(o + 60), get_svtrb_sound_controls)

    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 100), get_svtrb_interface_72)
    }

}

function get_svtrb_interface_0(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_interface_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 36), get_svtrb_interface_8_4)
    }

}

function get_svtrb_interface_8_4(o) {
    if (u8(o + 34) || u8(o + 35))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35], o)

    ö(u32(o + 0), get_svtrb_interface_8_4_0)
    switch (u8(o + 4)) {
    case 1:
        ö(u32(o + 12), get_svtrb_interface_8_4_12t1)
        break
    case 5:
        ö(u32(o + 12), get_svtrb_interface_8_4_12t5)
        break
    case 6:
        ö(u32(o + 12), get_svtrb_interface_8_4_12t6)
        break
    case 7:
        ö(u32(o + 12), get_svtrb_interface_8_4_12t7)
        break
    case 8:
        ö(u32(o + 12), get_svtrb_interface_8_4_12t8)
        break
    case 9:
        ö(u32(o + 12), get_svtrb_interface_8_4_12t9)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 4, o, 12)
        }
    }

}

function get_svtrb_interface_8_4_0(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_interface_8_4_12t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_8_4_12t1_4)

}

function get_svtrb_interface_8_4_12t1_4(o) {
    if (u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
}
function get_svtrb_interface_8_4_12t5(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_8_4_12t6(o) {
    if (u32(o + 0) !== 1000 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_8_4_12t7(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_8_4_12t8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_interface_8_4_12t8_4)
    }

}

function get_svtrb_interface_8_4_12t8_4(o) {
    if (u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8], o)

    ö(u32(o + 8), get_svtrb_interface_8_4_12t8_4_8)

}

function get_svtrb_interface_8_4_12t8_4_8(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_interface_8_4_12t9(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) !== 1 || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_8_4_12t9_4)
    ö(u32(o + 8), get_svtrb_interface_8_4_12t9_8)

}

function get_svtrb_interface_8_4_12t9_4(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_interface_8_4_12t9_8(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_interface_16(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)*/

    switch (u32(o + 0)) {
    case 1026:
        ö(u32(o + 4), get_svtrb_interface_16_4t1026)
        break
    case 1027:
        ö(u32(o + 4), get_svtrb_interface_16_4t1027)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_svtrb_interface_16_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 40), get_svtrb_interface_16_24)
    }

}
function get_svtrb_interface_16_4t1026(o) {
    if (u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_svtrb_interface_16_4t1026_8)

}

function get_svtrb_interface_16_4t1026_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_16_4t1026_8_4)

}

function get_svtrb_interface_16_4t1026_8_4(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_16_4t1027(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_16_4t1027_4)

}

function get_svtrb_interface_16_4t1027_4(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_interface_16_16(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_svtrb_interface_16_16_4)

}

function get_svtrb_interface_16_16_4(o) {
    if (u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_svtrb_interface_16_16_4_8)

}

function get_svtrb_interface_16_16_4_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_16_16_4_8_4)

}

function get_svtrb_interface_16_16_4_8_4(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_16_24(o) {
    if (u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 32) || u32(o + 36))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36], o)

    switch (u8(o + 0)) {
    case 1:
    case 31:
    case 48:
        ä(svtrb_interface, u32(o + 4), get_svtrb_interface)
        break
    case 11:
        ö(u32(o + 4), get_svtrb_interface_16_24_4t11)
        break
    default:
        if (u32(o + 4)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36], o)
            sü(u8, 0, o, 4)
        }
    }
    ö(u32(o + 8), get_svtrb_interface_16_24_8)

    ö(u32(o + 12), get_svtrb_interface_16_24_12)
    ä(svtrb_sound_controls, u32(o + 28), get_svtrb_sound_controls)

}

function get_svtrb_interface_16_24_4t11(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_interface_16_24_4t11_4)
    }

}

function get_svtrb_interface_16_24_4t11_4(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    switch (u32(o + 4)) {
    case 0:
        ö(u32(o + 8), get_svtrb_interface_16_24_4t11_4_8t0)
        break
    case 1:
        ö(u32(o + 8), get_svtrb_interface_16_24_4t11_4_8t1)
        break
    case 3:
        ä(svtrb_sound_controls, u32(o + 8), get_svtrb_sound_controls)
        break
    case 101:
        ä(svtrb_interface, u32(o + 8), get_svtrb_interface)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 4, o, 8)
        }
    }

}

function get_svtrb_interface_16_24_4t11_4_8t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_interface_16_24_4t11_4_8t1_0)
    ö(u32(o + 4), get_svtrb_interface_16_24_4t11_4_8t1_4)

}

function get_svtrb_interface_16_24_4t11_4_8t1_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_16_24_4t11_4_8t1_0_4)

}

function get_svtrb_interface_16_24_4t11_4_8t1_0_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_16_24_4t11_4_8t1_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_16_24_4t11_4_8t0(o) {
    if (u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_interface_16_24_8(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_interface_16_24_8_8)

}

function get_svtrb_interface_16_24_8_8(o) {
    if (u32(o + 0) !== 3 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_svtrb_interface_16_24_12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_interface_16_24_12_0)
    ö(u32(o + 4), get_svtrb_interface_16_24_12_4)

}

function get_svtrb_interface_16_24_12_0(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_16_24_12_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_sound_controls(o) {
    if (u32(o + 4) || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 11) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 16), get_svtrb_sound_controls_16)
    }

}

function get_svtrb_sound_controls_16(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_sound_controls_16_4)
    }

}

function get_svtrb_sound_controls_16_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_sound_section, u32(o), get_svtrb_sound_section)

}

function get_svtrb_sound_section(o) {
    if (u8(o + 7) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)

    ß('p_sound', o, 0)

    ö(u32(o + 8), get_svtrb_sound_section_8)

}

function get_svtrb_sound_section_8(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)
}

function get_svtrb_interface_56(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72(o) {
    if (u32(o + 4) || u8(o + 17) || u32(o + 64) || u8(o + 76) !== 255 || u8(o + 77) !== 255 || u8(o + 78) !== 255 || u8(o + 79) !== 255 || u8(o + 80) !== 255 || u8(o + 81) !== 255 || u8(o + 82) !== 255 || u8(o + 83) !== 255 || u8(o + 84) !== 255 || u8(o + 85) !== 255 || u8(o + 86) !== 255 || u8(o + 87) !== 255 || u8(o + 88) !== 255 || u8(o + 89) !== 255 || u8(o + 90) !== 255 || u8(o + 91) !== 255 || u8(o + 92) !== 255 || u8(o + 93) !== 255 || u8(o + 94) !== 255 || u8(o + 95) !== 255 || u8(o + 96) !== 255 || u8(o + 97) !== 255 || u8(o + 98) !== 255 || u8(o + 99) !== 255)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u8, 76, u8, 77, u8, 78, u8, 79, u8, 80, u8, 81, u8, 82, u8, 83, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u8, 96, u8, 97, u8, 98, u8, 99], o)

    ö(u32(o + 0), get_svtrb_interface_72_0)
    ö(u32(o + 8), get_svtrb_interface_72_8)
    ö(u32(o + 20), get_svtrb_interface_72_20)

    switch (u8(o + 19)) {
    case 0:
        ö(u32(o + 24), get_svtrb_interface_72_24t0)
        break
    case 1:
        ö(u32(o + 24), get_svtrb_interface_72_24t1)
        break
    case 2:
        ö(u32(o + 24), get_svtrb_interface_72_24t2)
        break
    case 5:
        ö(u32(o + 24), get_svtrb_interface_72_24t5)
        break
    case 6:
    case 7:
        ö(u32(o + 24), get_svtrb_interface_72_24t6)
        break
    case 10:
        ö(u32(o + 24), get_svtrb_interface_72_24t10)
        break
    case 12:
        ö(u32(o + 24), get_svtrb_interface_72_24t12)
        break
    case 13:
        ö(u32(o + 24), get_svtrb_interface_72_24t13)
        break
    case 14:
        ö(u32(o + 24), get_svtrb_interface_72_24t14)
        break
    case 15:
        ö(u32(o + 24), get_svtrb_interface_72_24t15)
        break
    default:
        if (u32(o + 24)) {
            sü(u8, 19, o, 24)
        }
    }

    ö(u32(o + 32), get_svtrb_interface_72_32)
    ö(u32(o + 44), get_svtrb_interface_72_44)
    ö(u32(o + 48), get_svtrb_interface_72_48)
    ö(u32(o + 52), get_svtrb_interface_72_52)
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 12), get_svtrb_interface_72_72)
    }

}

function get_svtrb_interface_72_20(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12], o)*/
// always 16 bytes
}

function get_svtrb_interface_72_0(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_interface_72_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_svtrb_interface_72_8_8)
    }

}

function get_svtrb_interface_72_8_8(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    switch (u32(o + 0)) {
    case 2:
        ö(u32(o + 4), get_svtrb_interface_72_8_8_4t2)
        break
    case 6:
        ö(u32(o + 4), get_svtrb_interface_72_8_8_4t6)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

}

function get_svtrb_interface_72_8_8_4t6(o) {
    if (u8(o + 3) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_interface_72_8_8_4t2(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_72_8_8_4t2_4)

}

function get_svtrb_interface_72_8_8_4t2_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72_24t0(o) {
    if (u8(o + 3) || u8(o + 14) || u8(o + 15))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_svtrb_interface_72_24t0_8)

}

function get_svtrb_interface_72_24t0_8(o) {
    if (u8(o + 8) || u8(o + 9) || u8(o + 10) || u32(o + 12) || u8(o + 17) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_interface_72_24t0_8_4)
    }

}

function get_svtrb_interface_72_24t0_8_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}

function get_svtrb_interface_72_24t1(o) {
    if (u8(o + 3) !== 5)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, f32, 28], o)

    ä(svtrb_text, u32(o + 4), get_svtrb_text)
    ö(u32(o + 8), get_svtrb_interface_72_24t1_8)
    switch (u8(o + 2)) {
    case 0:
        ä(svtrb_font, u32(o + 12), get_svtrb_font)
        break
    case 1:
        ä(svtrb_multi_font, u32(o + 12), get_svtrb_multi_font)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }

    ö(u32(o + 16), get_svtrb_interface_72_24t1_16)

}

function get_svtrb_text(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_text_0)

}

function get_svtrb_text_0(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_interface_72_24t1_8(o) {
    if (u8(o + 9) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 0:
        ö(u32(o + 4), get_svtrb_interface_72_24t1_8_4t0)
        break
    case 1:
        for (let i = 0; i < u32(o); i++) {
            ö(u32(o + 4) + (i * 8), get_svtrb_interface_72_24t1_8_4t1)
        }
        break
    default:
        if (u32(o + 4)) {
            ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
            sü(u8, 8, o, 4)
        }
    }

}
function get_svtrb_interface_72_24t1_8_4t1(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4], o)

    ä(svtrb_text, u32(o + 0), get_svtrb_text)

}

function get_svtrb_interface_72_24t1_8_4t0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    //16 bytes only
    ö(u32(o + 4), get_svtrb_interface_72_24t1_8_4t0_4)
    ö(u32(o + 12), get_svtrb_interface_72_24t1_8_4t0_12)

}

function get_svtrb_interface_72_24t1_8_4t0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_72_24t1_8_4t0_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_font(o) {
    if (u32(o + 20) || u32(o + 24) !== 1 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 0)

    ä(svtrb_some_model_anims_section, u32(o + 4), get_svtrb_some_model_anims_section)

    ö(u32(o + 28), get_svtrb_font_28)
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_svtrb_font_36)
    }

}

function get_svtrb_some_model_anims_section(o) {
    if (u8(o + 0) !== 5 || u8(o + 1) || u8(o + 2) !== 1 || u8(o + 3) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 2), get_svtrb_some_model_anims_section_24)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 24), get_svtrb_some_model_anims_section_32)
    }
    ö(u32(o + 36), get_svtrb_some_model_anims_section_36)

}

function get_svtrb_some_model_anims_section_24(o) {/*ü(1, [u16, 0], o)*/
}
function get_svtrb_some_model_anims_section_32(o) {
    if (u8(o + 18) || u8(o + 19) || u8(o + 21) || u8(o + 23))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23], o)
}
function get_svtrb_some_model_anims_section_36(o) {// console.log(get_string(o, 0, false))

}

function get_svtrb_font_28(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_font_36(o) {/*ü(1, [u32, 0, f32, 4, f32, 8], o)*/
}

function get_svtrb_multi_font(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_multi_font_4)

}

function get_svtrb_multi_font_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 16) || u32(o + 20) || f32(o + 24) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(svtrb_font, u32(o + 12), get_svtrb_font)
    ä(svtrb_font, u32(o + 28), get_svtrb_font)
    ä(svtrb_font, u32(o + 32), get_svtrb_font)

}

function get_svtrb_interface_72_24t1_16(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_72_24t1_16_4)

}

function get_svtrb_interface_72_24t1_16_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_72_24t2(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_svtrb_interface_72_24t2_4)
    }

}

function get_svtrb_interface_72_24t2_4(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 40), get_svtrb_interface_72_24t2_4_4)
    }

}

function get_svtrb_interface_72_24t2_4_4(o) {
    if (u8(o + 4) !== 1 || u8(o + 6) || u8(o + 7) || u8(o + 15) || u32(o + 16) || u32(o + 24))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36], o)

    ä(svtrb_interface_text_related, u32(o + 0), get_svtrb_interface_text_related)
    ä(svtrb_text, u32(o + 8), get_svtrb_text)
    ö(u32(o + 32), get_svtrb_interface_72_24t2_4_4_32)

}

function get_svtrb_interface_text_related(o) {
    if (u32(o + 4) || u32(o + 8) !== 1 || u32(o + 16) !== 1 || u32(o + 24) !== 1 || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ä(svtrb_text, u32(o + 0), get_svtrb_text)

    ö(u32(o + 12), get_svtrb_interface_text_related_12)
    ö(u32(o + 20), get_svtrb_interface_text_related_12)
    ö(u32(o + 28), get_svtrb_interface_text_related_12)
    ä(svtrb_font, u32(o + 32), get_svtrb_font)

    ö(u32(o + 36), get_svtrb_interface_text_related_36)
    ö(u32(o + 40), get_svtrb_interface_text_related_40)

}

function get_svtrb_interface_text_related_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) !== 1000 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_svtrb_interface_text_related_12_4)

}

function get_svtrb_interface_text_related_12_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 0)
}

function get_svtrb_interface_text_related_20(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_svtrb_interface_text_related_28(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_svtrb_interface_text_related_36(o) {
    if (u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_text_related_40(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}

function get_svtrb_interface_72_24t2_4_4_32(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_interface_72_24t2_4_4_32_8)

}

function get_svtrb_interface_72_24t2_4_4_32_8(o) {
    if (u32(o + 4) !== 4 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72_24t5(o) {
    if (u32(o + 4) !== 5 || f32(o + 8) !== 0.5 || f32(o + 12) !== 0.5)
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12], o)
    ß('p_texture', o, 0)

}

function get_svtrb_interface_72_24t6(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ä(svtrb_interface, u32(o), get_svtrb_interface)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 16), get_svtrb_interface_72_24t6_12)
    }

}

function get_svtrb_interface_72_24t6_12(o) {/*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/
}

function get_svtrb_interface_72_24t10(o) {
    if (u32(o + 8) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_72_24t12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_72_24t13(o) {
    if (u32(o + 0) !== 1280 || u32(o + 8) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_72_24t13_4)
    ö(u32(o + 12), get_svtrb_interface_72_24t13_12)

}

function get_svtrb_interface_72_24t13_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_72_24t13_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 0)
}

function get_svtrb_interface_72_24t14(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 204) || u32(o + 208) || u32(o + 212) || u32(o + 216) || u32(o + 220) || u32(o + 224) || u32(o + 228) || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u8(o + 274) || u8(o + 275) || u32(o + 280) || u32(o + 284))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u8, 272, u8, 273, u8, 274, u8, 275, u32, 276, u32, 280, u32, 284], o)

    ö(u32(o + 276), get_svtrb_interface_72_24t14_276)

}

function get_svtrb_interface_72_24t14_276(o) {
    if (u8(o + 1) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, f32, 12], o)
}
function get_svtrb_interface_72_24t15(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_interface_72_24t15_0)

}

function get_svtrb_interface_72_24t15_0(o) {
    if (u32(o + 8) !== 360 || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 16), get_svtrb_interface_72_24t15_0_16)

}

function get_svtrb_interface_72_24t15_0_16(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 0)

    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 12), get_svtrb_interface_72_24t15_0_16_48)
    }
    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 32), get_svtrb_interface_72_24t15_0_16_56)
    }

}

function get_svtrb_interface_72_24t15_0_16_48(o) {
    if (u8(o + 4) || u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_svtrb_interface_72_24t15_0_16_56(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_interface_72_32(o) {
    if (u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 12), get_svtrb_interface_72_32_12)
    ö(u32(o + 20), get_svtrb_interface_72_32_20)
    ö(u32(o + 28), get_svtrb_interface_72_32_28)
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 28), get_svtrb_interface_72_32_36)
    }

}

function get_svtrb_interface_72_32_12(o) {
    if (u8(o + 4) || u8(o + 28) || u8(o + 29))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)
}
function get_svtrb_interface_72_32_20(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_interface_72_32_20_8)

}

function get_svtrb_interface_72_32_20_8(o) {
    if (u8(o + 4) !== 4 || u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72_32_28(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_interface_72_32_28_8)

}

function get_svtrb_interface_72_32_28_8(o) {
    if (u32(o + 4) !== 4 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72_32_36(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    ö(u32(o + 4), get_svtrb_interface_72_32_36_4)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_svtrb_interface_72_32_36_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 40), get_svtrb_interface_72_32_36_24)
    }
    //it is 40 b

}
function get_svtrb_interface_72_32_36_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) !== 2 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_interface_72_32_36_16(o) {
    if (u32(o + 0) !== 2)
        ü(1, [u32, 0, u32, 4], o)

    ö(u32(o + 4), get_svtrb_interface_72_32_36_16_4)

}

function get_svtrb_interface_72_32_36_16_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_svtrb_interface_72_32_36_16_4_8)

}

function get_svtrb_interface_72_32_36_16_4_8(o) {
    if (u32(o + 0) !== 141 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_72_32_36_16_4_8_4)

}

function get_svtrb_interface_72_32_36_16_4_8_4(o) {
    if (u32(o + 0) || u32(o + 4) !== 6 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72_32_36_24(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 28) || u32(o + 32) || u32(o + 36))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36], o)

    switch (u8(o + 0)) {
    case 1:
        ä(svtrb_interface, u32(o + 4), get_svtrb_interface)
        break
    case 11:
        ö(u32(o + 4), get_svtrb_interface_72_32_36_24_4t11)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

    ö(u32(o + 12), get_svtrb_interface_72_32_36_24_12)

}

function get_svtrb_interface_72_32_36_24_4t11(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_interface_72_32_36_24_4t11_4)
    }

}

function get_svtrb_interface_72_32_36_24_4t11_4(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    switch (u32(o + 4)) {
    case 0:
        ö(u32(o + 8), get_svtrb_interface_72_32_36_24_4t11_4_8t0)
        break
    case 1:
        ö(u32(o + 8), get_svtrb_interface_72_32_36_24_4t11_4_8t1)
        break
    case 3:
        ä(svtrb_sound_controls, u32(o + 8), get_svtrb_sound_controls)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 4, o, 8)
        }
    }

}

function get_svtrb_interface_72_32_36_24_4t11_4_8t0(o) {
    if (u32(o + 4) !== 4 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_72_32_36_24_4t11_4_8t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_interface_72_32_36_24_4t11_4_8t1_0)
    ö(u32(o + 4), get_svtrb_interface_72_32_36_24_4t11_4_8t1_4)

}

function get_svtrb_interface_72_32_36_24_4t11_4_8t1_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_72_32_36_24_4t11_4_8t1_0_4)

}

function get_svtrb_interface_72_32_36_24_4t11_4_8t1_0_4(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72_32_36_24_4t11_4_8t1_4(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72_32_36_24_12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_interface_72_32_36_24_12_0)
    ö(u32(o + 4), get_svtrb_interface_72_32_36_24_12_4)

}

function get_svtrb_interface_72_32_36_24_12_0(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_72_32_36_24_12_4(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72_44(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_72_48(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_interface_72_52(o) {
    if (u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_svtrb_interface_72_52_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_svtrb_interface_72_52_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_svtrb_interface_72_52_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_svtrb_interface_72_52_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 32), get_svtrb_interface_72_52_36)
    }

}

function get_svtrb_interface_72_52_4(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_52_12(o) {
    if (u32(o + 4) || u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_52_20(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_52_28(o) {/*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)*/
}
function get_svtrb_interface_72_52_36(o) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u8, 24, u8, 25, u8, 26, u8, 27, f32, 28], o)
}

function get_svtrb_interface_72_72(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ö(u32(o + 4), get_svtrb_interface_72_72_4)

}

function get_svtrb_interface_72_72_4(o) {
    if (u32(o + 48) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_svtrb_interface_72_72_4_4)
    }
    //16 prob
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_svtrb_interface_72_72_4_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_svtrb_interface_72_72_4_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 32), get_svtrb_interface_72_72_4_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_svtrb_interface_72_72_4_36)
    }
    ö(u32(o + 44), get_svtrb_interface_72_72_4_44)
    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 12), get_svtrb_interface_72_72_4_56)
    }

}

function get_svtrb_interface_72_72_4_4(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16], o)
}
function get_svtrb_interface_72_72_4_12(o) {
    if (u32(o + 8) || u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_72_4_20(o) {
    if (u32(o + 4) || u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_72_4_28(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_72_4_36(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_svtrb_interface_72_72_4_44(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_svtrb_interface_72_72_4_56(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    switch (u32(o + 4)) {
    case 0:
        ö(u32(o + 8), get_svtrb_interface_72_72_4_56_8t0)
        break
    case 3:
        ä(svtrb_sound_controls, u32(o + 8), get_svtrb_sound_controls)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 4, o, 8)
        }
    }
}
function get_svtrb_interface_72_72_4_56_8t0(o) {
    if (u32(o + 4) !== 4 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_anims_1(o) {
    /*ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u8, 60, u8, 61, u8, 62, u8, 63], o)*/

    if (old_log_array.p_offset.array.includes(o + 24 - offset_mid)) {
        ö(u32(o + 24), get_svtrb_model_anims_1_24)
    }
    if (old_log_array.p_offset.array.includes(o + 28 - offset_mid)) {
        ö(u32(o + 28), get_svtrb_model_anims_1_28)
    }

    ö(u32(o + 32), get_svtrb_model_anims_1_32)
    if (old_log_array.p_offset.array.includes(o + 36 - offset_mid)) {
        ö(u32(o + 36), get_svtrb_model_anims_1_36)
    }
    if (old_log_array.p_offset.array.includes(o + 44 - offset_mid)) {
        ö(u32(o + 44), get_svtrb_model_anims_1_44)
    }

    if (old_log_array.p_offset.array.includes(o + 52 - offset_mid)) {
        switch (u32(o + 0)) {
        case 1:
            ö(u32(o + 52), get_svtrb_model_anims_1_52t1)
            break
        case 5:
            ö(u32(o + 52), get_svtrb_model_anims_1_52)
            break
        default:
            if (u32(o + 52)) {
                sü(u32, 0, o, 52)
            }
        }
    }

}

function get_svtrb_model_anims_1_24(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_anims_1_28(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_anims_1_32(o) {//8 - 484
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_anims_1_36(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_anims_1_44(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_anims_1_52t1(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 8), get_svtrb_model_anims_1_52t1_8)
    ö(u32(o + 12), get_svtrb_model_anims_1_52t1_12)

}

function get_svtrb_model_anims_1_52t1_8(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o) based on [4] bytelength
}
function get_svtrb_model_anims_1_52t1_12(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o) based on [0] bytelength
}

function get_svtrb_model_anims_1_52(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32], o)*/

    //2,15,18,19,47
    //0,2
    //0,76
    if (old_log_array.p_offset.array.includes(o + 12 - offset_mid)) {
        // ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32], o)
        ö(u32(o + 12), get_svtrb_model_anims_1_52_12)
    }
    if (old_log_array.p_offset.array.includes(o + 16 - offset_mid)) {
        // ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32], o)
        ö(u32(o + 16), get_svtrb_model_anims_1_52_16)
    }
    if (old_log_array.p_offset.array.includes(o + 20 - offset_mid)) {
        // ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32], o)
        ö(u32(o + 20), get_svtrb_model_anims_1_52_20)
    }
    if (old_log_array.p_offset.array.includes(o + 24 - offset_mid)) {
        // ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32], o)
        ö(u32(o + 24), get_svtrb_model_anims_1_52_24)
    }
    if (old_log_array.p_offset.array.includes(o + 28 - offset_mid)) {
        // ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32], o)
        ö(u32(o + 28), get_svtrb_model_anims_1_52_28)
    }
    if (old_log_array.p_offset.array.includes(o + 32 - offset_mid)) {
        // ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32], o)
        ö(u32(o + 32), get_svtrb_model_anims_1_52_32)
    }

}

function get_svtrb_model_anims_1_52_12(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// 4,32,36,40,96
}
function get_svtrb_model_anims_1_52_16(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//16,24,72,80,88,96,104,112,128,152
}
function get_svtrb_model_anims_1_52_20(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//  4,12,20,56,60,68,72,80,84,96,116
}
function get_svtrb_model_anims_1_52_24(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// 8,12,60,72,84,112,188
}
function get_svtrb_model_anims_1_52_28(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//  144,192,384,480,768,792,912,1152,1728,5184,5760,6336,7488,8064,8712,9216,34848
}
function get_svtrb_model_anims_1_52_32(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// 56,168,260,268,312,384,388,576,1740,1828,1920,2112,2500,2696,2916,3084,11616
}

function get_svtrb_model_anims_2(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 16) + (i * 32), get_svtrb_model_anims_2_16)
    }

}

function get_svtrb_model_anims_2_16(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)*/
}

function get_svtrb_link(o) {
    if (u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 60) !== 1 || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    ß('p_texture', o, 48)
    ß('p_texture', o, 52)

    ö(u32(o + 4), get_svtrb_link_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 16), get_svtrb_link_12)
    }
    ö(u32(o + 16), get_svtrb_link_16)
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 8), get_svtrb_link_36)
    }
    ö(u32(o + 44), get_svtrb_link_44)
    ö(u32(o + 56), get_svtrb_link_56)
    ö(u32(o + 64), get_svtrb_link_64)
    ö(u32(o + 68), get_svtrb_link_68)

}

function get_svtrb_link_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_link_12(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_link_12_4)
    ö(u32(o + 8), get_svtrb_link_12_8)
    ö(u32(o + 12), get_svtrb_link_12_12)

}

function get_svtrb_link_12_4(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_link_12_8(o) {
    if (u32(o + 0) !== 7680 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_link_12_12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_link_12_12_0)

}

function get_svtrb_link_12_12_0(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_link_16(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_link_36(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4], o)

    ö(u32(o + 0), get_svtrb_link_36_0)

}

function get_svtrb_link_36_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_svtrb_link_36_0_4)
    }

}

function get_svtrb_link_36_0_4(o) {
    if (u32(o + 24) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_link_36_0_4_4)
    }
    ö(u32(o + 8), get_svtrb_link_36_0_4_8)
    ö(u32(o + 12), get_svtrb_link_36_0_4_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_svtrb_link_36_0_4_20)
    }
    ö(u32(o + 28), get_svtrb_link_36_0_4_28)

}

function get_svtrb_link_36_0_4_4(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 4), get_svtrb_link_36_0_4_4_4t0)
        break
    case 1:
        ö(u32(o + 4), get_svtrb_link_36_0_4_4_4t1)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

    ö(u32(o + 8), get_svtrb_link_36_0_4_4_8)

}
function get_svtrb_link_36_0_4_4_4t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_link_36_0_4_4_4t1_0)

}

function get_svtrb_link_36_0_4_4_4t1_0(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_link_36_0_4_4_4t0(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_link_36_0_4_4_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_link_36_0_4_8(o) {
    if (u32(o + 4) !== 3 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_link_36_0_4_8_0)

}

function get_svtrb_link_36_0_4_8_0(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_link_36_0_4_12(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_link_36_0_4_20(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_link_36_0_4_20_4)
    }

}

function get_svtrb_link_36_0_4_20_4(o) {

    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 4), get_svtrb_link_36_0_4_20_4_4t0)
        break
    case 1:
        ö(u32(o + 4), get_svtrb_link_36_0_4_20_4_4t1)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

    ö(u32(o + 8), get_svtrb_link_36_0_4_20_4_8)

}

function get_svtrb_link_36_0_4_20_4_4t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_link_36_0_4_20_4_4t1_0)

}

function get_svtrb_link_36_0_4_20_4_4t1_0(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_link_36_0_4_20_4_4t0(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_link_36_0_4_20_4_8(o) {
    if (u32(o + 0) !== 13 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_link_36_0_4_28(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_link_36_0_4_28_4)

}

function get_svtrb_link_36_0_4_28_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_link_36_0_4_28_4_4)

}

function get_svtrb_link_36_0_4_28_4_4(o) {
    if (u32(o + 4) !== 6 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_link_36_0_4_28_4_4_0)

}

function get_svtrb_link_36_0_4_28_4_4_0(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_link_44(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_link_44_8)

}

function get_svtrb_link_44_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_link_44_8_4)

}

function get_svtrb_link_44_8_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 16) !== 1 || u32(o + 24) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_svtrb_link_44_8_4_8)
    ö(u32(o + 12), get_svtrb_link_44_8_4_12)
    ö(u32(o + 20), get_svtrb_link_44_8_4_20)
    ö(u32(o + 28), get_svtrb_link_44_8_4_28)

}

function get_svtrb_link_44_8_4_8(o) {
    if (u32(o + 4) !== 3 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_link_44_8_4_8_0)

}

function get_svtrb_link_44_8_4_8_0(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_link_44_8_4_12(o) {
    if (f32(o + 0) !== 13.955384254455566 || u32(o + 4) !== 77 || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_link_44_8_4_20(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 99 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_link_44_8_4_28(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 99 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_link_56(o) {
    if (u32(o + 4) || u32(o + 8) !== 6425 || f32(o + 12) !== 19 || u32(o + 16) || u32(o + 20) || u32(o + 24) !== 1 || u32(o + 32) !== 80 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 0)

    ö(u32(o + 28), get_svtrb_link_56_28)
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_svtrb_link_56_36)
    }

}

function get_svtrb_link_56_28(o) {
    if (f32(o + 0) !== -2 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_link_56_36(o) {/*ü(1, [u32, 0, f32, 4, f32, 8], o)*/
}

function get_svtrb_link_64(o) {
    if (u32(o + 0) !== 6 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_svtrb_link_64_4)
    }

}

function get_svtrb_link_64_4(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 24), get_svtrb_link_64_4_4)
    }

}

function get_svtrb_link_64_4_4(o) {
    if (u32(o + 0) !== 6 || u8(o + 19))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20], o)

    ö(u32(o + 4), get_svtrb_link_64_4_4_4)
    ö(u32(o + 12), get_svtrb_link_64_4_4_12)

}

function get_svtrb_link_64_4_4_4(o) {
    if (u32(o + 0) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_link_64_4_4_12(o) {
    if (u32(o + 0) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_link_68(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_model(o) {
    if (u8(o + 1) || u8(o + 2) !== 10 || u8(o + 3) || u32(o + 28) || f32(o + 60) !== 1 || f32(o + 76) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76], o)

    switch (g.console) {
    case "psp":
        //[0] = type 9
        break
    case "ps2":
        //[0] = type 4
        break
    case "pc":
        //[0] = type 1
        break
    }

    ö(u32(o + 4), get_svtrb_model_4)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 8), get_svtrb_model_20)
        ö(u32(o + 24) + (i * 4), get_svtrb_model_24)
    }

}

function get_svtrb_model_4(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_model_20(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_model_20_4)
    }

}

function get_svtrb_model_20_4(o) {
    /*ü(1, [u32, 0], o)*/

    switch (g.console) {
    case "psp":
        ö(u32(o + 0), get_svtrb_model_20_4_0tpsp)
        break
    case "ps2":
        ö(u32(o + 0), get_svtrb_model_20_4_0tps2)
        break
    case "pc":
        ö(u32(o + 0), get_svtrb_model_20_4_0tpc)
        break
    }

}

function get_svtrb_model_20_4_0tpsp(o) {
    if (u32(o + 4) || u8(o + 14) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u8(o + 50) !== 255 || u8(o + 51) !== 128 || u8(o + 74) || u8(o + 75) || u8(o + 76) || u8(o + 77) || u8(o + 79) || u32(o + 100) || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79, f32, 80, f32, 84, f32, 88, f32, 92, f32, 96, u32, 100, f32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)
    ß('p_texture', o, 40)
    ß('p_animation', o, 24)

    switch (u32(o + 60)) {
    case 0:
        ä(svtrb_model_20_4_0tpsp_108t0, u32(o + 108), get_svtrb_model_20_4_0tpsp_108t0)
        break
    default:
        for (let i = 0; i < u32(o + 60); i++) {
            ö(u32(o + 108) + (i * 36), get_svtrb_model_20_4_0tpsp_108ts)
        }
    }

    if (u32(o + 112)) {
        for (let i = 0; i < u32(o + 64); i++) {
            ö(u32(o + 112) + (i * 24), get_svtrb_model_20_4_0tpsp_112)
        }
    }

}
function get_svtrb_model_20_4_0tpsp_108t0(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_svtrb_model_20_4_0tpsp_108t0_0)
    // for (let i = 0; i < u32(o + 12); i++) {
    // ö(u32(o + 4) + (i * 20), get_svtrb_model_20_4_0tpsp_108t0_4)
    // }
    ö(u32(o + 4), get_svtrb_model_20_4_0tpsp_108t0_4)

    ö(u32(o + 8), get_svtrb_model_20_4_0tpsp_108t0_8)

}

function get_svtrb_model_20_4_0tpsp_108t0_0(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_20_4_0tpsp_108t0_4(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16], o)*/
}
function get_svtrb_model_20_4_0tpsp_108t0_8(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_20_4_0tpsp_108ts(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32], o)*/

    ö(u32(o + 32), get_svtrb_model_20_4_0tpsp_108ts_32)

}

function get_svtrb_model_20_4_0tpsp_108ts_32(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_20_4_0tpsp_112(o) {
    if (u32(o + 16))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20], o)

    for (let i = 0; i < u32(o + 12); i++) {// ö(u32(o + 20) + (i*4), get_svtrb_model_20_4_0tpsp_112_20)
    }
    ö(u32(o + 20), get_svtrb_model_20_4_0tpsp_112_20)

}

function get_svtrb_model_20_4_0tpsp_112_20(o) {// ü(1, [u32, 0], o)
}

function get_svtrb_model_20_4_0tps2(o) {
    switch (u32(o)) {
    case 0:
        get_svtrb_model_20_4_0tps2t0(o)
        break
    case 1:
        get_svtrb_model_20_4_0tps2t1(o)
        break
    case 2:
        get_svtrb_model_20_4_0tps2t2(o)
        break
    default:
        ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    }
    //somtimes 80 / 96 ???
}
function get_svtrb_model_20_4_0tps2t0(o) {
    if (u32(o + 0) || u8(o + 5) || u8(o + 7) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u8(o + 50) !== 255 || u8(o + 51) !== 128 || u8(o + 62))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u32, 56, u8, 60, u8, 61, u8, 62, u8, 63, u32, 64, u32, 68, u32, 72, u32, 76], o)
    ß('p_texture', o, 40)
    ß('p_animation', o, 24)

    ö(u32(o + 64), get_svtrb_model_20_4_0tps2t0_64)
    ö(u32(o + 68), get_svtrb_model_20_4_0tps2t0_68)
    ö(u32(o + 72), get_svtrb_model_20_4_0tps2t0_72)
    ö(u32(o + 76), get_svtrb_model_20_4_0tps2t0_76)

}

function get_svtrb_model_20_4_0tps2t0_64(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_20_4_0tps2t0_68(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_20_4_0tps2t0_72(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_20_4_0tps2t0_76(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_20_4_0tps2t1(o) {
    if (u32(o + 0) !== 1 || u8(o + 5) || u8(o + 6) !== 1 || u8(o + 7) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u8(o + 48) || u8(o + 50) !== 255 || u8(o + 51) !== 128 || u32(o + 52) || u32(o + 60) !== 1 || u32(o + 76) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)
    ß('p_texture', o, 40)

    // for (let i = 0; i < u32(o + 16); i++) {
    //     ö(u32(o + 64) + (i * 48), get_svtrb_model_20_4_0tps2t1_64)
    //     ö(u32(o + 68) + (i * 36), get_svtrb_model_20_4_0tps2t1_68)
    // }
    // if (u32(o + 72)) {
    //     for (let i = 0; i < u32(o + 16); i++) {
    //         ö(u32(o + 72) + (i * 12), get_svtrb_model_20_4_0tps2t1_72)
    //     }
    // }
    ö(u32(o + 64), get_svtrb_model_20_4_0tps2t1_64)
    ö(u32(o + 68), get_svtrb_model_20_4_0tps2t1_68)
    ö(u32(o + 72), get_svtrb_model_20_4_0tps2t1_72)
    ö(u32(o + 80), get_svtrb_model_20_4_0tps2t1_80)

}

function get_svtrb_model_20_4_0tps2t1_64(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44], o)*/
}
function get_svtrb_model_20_4_0tps2t1_68(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32], o)*/
}
function get_svtrb_model_20_4_0tps2t1_72(o) {/*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11], o)*/
}
function get_svtrb_model_20_4_0tps2t1_80(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + i, get_svtrb_model_20_4_0tps2t1_80_8)
    }

}

function get_svtrb_model_20_4_0tps2t1_80_8(o) {/*ü(1, [u8, 0], o)*/
}

function get_svtrb_model_20_4_0tps2t2(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || u32(o + 20) || u32(o + 24) !== 48 || u32(o + 28) !== 48 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u8(o + 48) || u8(o + 49) || u8(o + 50) !== 255 || u8(o + 51) !== 128 || u32(o + 52) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, f32, 56, f32, 60, f32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    //   for (let i = 0; i < u32(o + 68); i++) {
    //   ö(u32(o + 72) + (i*24), get_svtrb_model_20_4_0tps2t2_72)
    //   }
    //   for (let i = 0; i < u32(o + 76); i++) {
    //   ö(u32(o + 80) + (i*24), get_svtrb_model_20_4_0tps2t2_80)
    //     ö(u32(o + 84)+ (i*24), get_svtrb_model_20_4_0tps2t2_84)
    // }
    ö(u32(o + 72), get_svtrb_model_20_4_0tps2t2_72)
    ö(u32(o + 80), get_svtrb_model_20_4_0tps2t2_80)
    ö(u32(o + 84), get_svtrb_model_20_4_0tps2t2_84)

}

function get_svtrb_model_20_4_0tps2t2_72(o) {/*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)*/
}
function get_svtrb_model_20_4_0tps2t2_80(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20], o)*/
}
function get_svtrb_model_20_4_0tps2t2_84(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20], o)*/
}

function get_svtrb_model_20_4_0tpc(o) {
    if (u32(o + 4) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u8(o + 50) !== 255 || u8(o + 51) !== 128 || u32(o + 88) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ß('p_animation', o, 24)
    ß('p_texture', o, 40)

    ö(u32(o + 68), get_svtrb_model_20_4_0tpc_68)
    ö(u32(o + 72), get_svtrb_model_20_4_0tpc_72)
    ö(u32(o + 76), get_svtrb_model_20_4_0tpc_76)
    ö(u32(o + 80), get_svtrb_model_20_4_0tpc_80)
    ö(u32(o + 84), get_svtrb_model_20_4_0tpc_84)
    ö(u32(o + 92), get_svtrb_model_20_4_0tpc_92)

}

function get_svtrb_model_20_4_0tpc_68(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//48,80,112,144,192,224,256,288,336,368,400,432,480,512,544,576,624,656,720,768,800,832,864,912,944,976,1008,1056,1088,1120,1152,1232,1264,1296,1344,1376,1440,1488,1520,1552,1584,1664,1696,1728,1776,1808,1840,1872,1952,1984,2016,2096,2160,2240,2272,2304,2384,2416,2448,2496,2592,2640,2672,2704,2736,2784,2816,2880,2960,3024,3072,3104,3168,3248,3312,3456,3536,3568,3600,3648,3680,3744,3888,3968,4032,4112,4256,4320,4400,4464,4544,4608,4656,4752,4832,4896,4976,5088,5120,5184,5264,5408,5472,5552,5616,5696,5840,5904,5952,6048,6272,6416,6448,6560,6624,6704,6736,6912,6992,7280,7424,7488,7568,7632,7712,7776,8032,8144,8208,8288,8352,8544,8576,9072,9152,9504,9648,9696,9728,9792,9936,10128,10224,10304,10656,10704,11024,11168,11744,11808,11952,12096,12176,12464,12672,13104,13184,13328,13472,13680,13824,13904,13968,14688,14912,15200,15408,15632,16064,16272,17360,19872,21024,22464,22864,23552,23760,23808,23840,24528,24992,31328,32832,33200,34064,34848,35136,39456,39680,42336,57024,74528,77904,86832,91952,134208,146880
}
function get_svtrb_model_20_4_0tpc_72(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// 48 - 146880
}

function get_svtrb_model_20_4_0tpc_76(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//48,80,112,144,192,224,256,288,336,368,400,432,480,512,544,576,624,656,720,768,800,832,864,912,944,976,1008,1056,1088,1120,1152,1232,1264,1296,1344,1376,1440,1488,1520,1552,1584,1664,1696,1728,1776,1808,1840,1872,1952,1984,2016,2096,2160,2240,2272,2304,2384,2416,2448,2496,2592,2640,2672,2704,2736,2784,2816,2880,2960,3024,3072,3104,3168,3248,3312,3456,3536,3568,3600,3648,3680,3744,3888,3968,4032,4112,4256,4320,4400,4464,4544,4608,4656,4752,4832,4896,4976,5088,5120,5184,5264,5408,5472,5552,5616,5696,5840,5904,5952,6048,6272,6416,6448,6560,6624,6704,6736,6912,6992,7280,7424,7488,7568,7632,7712,7776,8032,8144,8208,8288,8352,8544,8576,9072,9152,9504,9648,9696,9728,9792,9936,10128,10224,10304,10656,10704,11024,11168,11744,11808,11952,12096,12176,12464,12672,13104,13184,13328,13472,13680,13824,13904,13968,14688,14912,15200,15408,15632,16064,16272,17360,19872,21024,22464,22864,23552,23760,23808,23840,24528,24992,31328,32832,33200,34064,34848,35136,39456,39680,42336,57024,74528,77904,86832,91952,134208,146880
}
function get_svtrb_model_20_4_0tpc_80(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// 48,80,96,128,144,176,192,240,272,288,320,336,368,384,416,432,480,512,528,560,576,608,624,656,672,704,720,752,768,816,848,864,896,912,960,1040,1056,1104,1152,1200,1248,1296,1328,1344,1392,1440,1488,1520,1536,1584,1616,1632,1664,1728,1760,1776,1808,1824,1872,1920,1968,2016,2048,2064,2112,2160,2208,2304,2352,2384,2400,2496,2688,2736,2832,2880,2928,2976,3024,3072,3104,3168,3312,3392,3408,3456,3504,3600,3696,3744,3792,3936,3968,4032,4304,4368,4608,4656,4848,4944,4992,5040,5136,5424,5520,5568,5696,5712,6048,6096,6336,6464,6480,6528,6752,6816,6864,7136,7344,7440,7824,7968,8112,8304,8448,8736,8784,8976,9264,9312,9792,9936,10128,10272,10416,10704,10848,11568,13248,14016,14976,15248,15840,15872,16352,16656,21888,22128,22704,23232,28224
}
function get_svtrb_model_20_4_0tpc_84(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//48,1088,1280,2016
}
function get_svtrb_model_20_4_0tpc_92(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    // 1 amt per byte
    ö(u32(o + 12), get_svtrb_model_20_4_0tpc_92_12)

}

function get_svtrb_model_20_4_0tpc_92_12(o) {/*ü(1, [u8, 0], o)*/
}

function get_svtrb_model_24(o) {/*ü(1, [f32, 0], o)*/
}

function get_svtrb_texture_anims_0(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_svtrb_texture_anims_0_4)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 16), get_svtrb_texture_anims_0_20)
    }

}

function get_svtrb_texture_anims_0_4(o) {
    if (u8(o + 8) || u8(o + 9) || u8(o + 10) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_texture_anims_0_4_4)
    }

}

function get_svtrb_texture_anims_0_4_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)
}

function get_svtrb_texture_anims_0_20(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)
}
