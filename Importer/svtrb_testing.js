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
    globalThis.svtrb_unknown_4_4t1 = []
    globalThis.svtrb_sound_controls = []
    globalThis.svtrb_sound_section = []
    globalThis.svtrb_unknown = []
    globalThis.svtrb_model = []
    globalThis.svtrb_model_anims_1 = []
    globalThis.svtrb_model_anims_2 = []
    globalThis.svtrb_unknown_4_4t2 = []
    globalThis.svtrb_world_12 = []
    globalThis.svtrb_interface_72_24t15_0 = []
    globalThis.svtrb_interface_72_24t3_4_0 = []
    globalThis.svtrb_interface_72_24t3_4_0_8 = []
    globalThis.svtrb_model_8 = []
    globalThis.svtrb_strange = []
    globalThis.svtrb_mysterious_4t9 = []
    globalThis.svtrb_world_0_32_48 = []
    globalThis.svtrb_world_20 = []
    globalThis.svtrb_world_20_40 = []
    globalThis.svtrb_world_116 = []
    globalThis.svtrb_world_44 = []
    globalThis.svtrb_unknown_4_4t31 = []
    globalThis.svtrb_unknown_4_4t5_28_4_0 = []
    globalThis.svtrb_car_0_180_4_84 = []
    globalThis.svtrb_unknown_4_4t31_248_4_4t0_4 = []
    globalThis.svtrb_world_60 = []
    globalThis.svtrb_world_92 = []
    globalThis.svtrb_world_100 = []
    globalThis.svtrb_world_108 = []
    globalThis.svtrb_world_108_56 = []
    globalThis.svtrb_world_100_64 = []
    globalThis.svtrb_world_92_64 = []
    globalThis.svtrb_world_192_0 = []
    globalThis.svtrb_world_160_4_0 = []
    globalThis.svtrb_world_60_76t8_8 = []
    globalThis.svtrb_world_60_76t8_4 = []
    globalThis.svtrb_world_108_56_20t15_12 = []
    globalThis.svtrb_world_108_56_20t15_4_4_0 = []
    globalThis.svtrb_sound_controls = []

    globalThis.svtrb_car_0_44_0 = []
    globalThis.svtrb_model_link = []
    globalThis.svtrb_car_0_36_52 = []
    globalThis.svtrb_interface_72_24t1_4 = []
    globalThis.svtrb_car_0_76_4_4 = []
    globalThis.svtrb_car_0_76_4_4_52 = []
    globalThis.svtrb_model_link_8_0 = []
    globalThis.svtrb_car_0_76_4_4_128 = []
    globalThis.svtrb_car_0_32_28_4_4_0 = []
    globalThis.svtrb_car_0_36_64_4_4_0 = []
    globalThis.svtrb_interface_72_24t1_12t1 = []
    globalThis.svtrb_interface_72_24t1_12t0 = []
    globalThis.svtrb_car_0_76_4_4_68_4 = []
    globalThis.svtrb_interface_72_24t1_12t0_4 = []
    globalThis.svtrb_interface_72_24t1_12t1_4_12 = []
    globalThis.svtrb_interface_72_24t1_8_4t1_0 = []
    globalThis.svtrb_car_0_40_12_8_8_8_12 = []
    globalThis.svtrb_car_0_36_64_4_4_0_8_0 = []
    globalThis.svtrb_strange = []
    globalThis.svtrb_unknown_4_4t5 = []
    globalThis.svtrb_unknown_4_4t2_92_8_8_8_12 = []
    globalThis.svtrb_mysterious_4t9_12_4_48_0 = []
    globalThis.svtrb_unknown_4_4t2_112_0 = []
    globalThis.svtrb_world_4 = []
    globalThis.svtrb_world_60 = []
    globalThis.svtrb_world_68 = []
    globalThis.svtrb_world_84 = []
    globalThis.svtrb_world_92 = []
    globalThis.svtrb_world_108 = []
    globalThis.svtrb_world_116 = []
    globalThis.svtrb_world_44 = []
    globalThis.svtrb_world_100 = []
    globalThis.svtrb_world_172_80 = []
    globalThis.svtrb_world_12_80 = []
    globalThis.svtrb_world_84_64 = []
    globalThis.svtrb_world_92_64 = []
    globalThis.svtrb_world_108_56 = []
    globalThis.svtrb_world_120_0 = []
    globalThis.svtrb_world_12 = []
    globalThis.svtrb_world_12_60 = []
    globalThis.svtrb_world_44_128 = []
    globalThis.svtrb_world_68_64 = []
    globalThis.svtrb_world_108_56_56 = []
    globalThis.svtrb_world_108_56_64 = []
    globalThis.svtrb_world_208_0 = []
    globalThis.svtrb_world_20 = []
    globalThis.svtrb_world_100_64 = []
    globalThis.svtrb_world_36 = []
    globalThis.svtrb_world_176_4_0 = []
    globalThis.svtrb_world_20_72 = []
    globalThis.svtrb_world_172_188 = []
    globalThis.svtrb_activator = []
    globalThis.svtrb_world_28_72_0_0 = []
    globalThis.svtrb_world_28_76_8_0 = []
    globalThis.svtrb_world_28_76_24_0 = []
    globalThis.svtrb_world_92_64_12_44 = []
    globalThis.svtrb_world_176_20_0 = []
    globalThis.svtrb_world_28_76_16_0 = []
    globalThis.svtrb_car = []
    globalThis.svtrb_mysterious_4t9 = []
    globalThis.svtrb_world_172_192_20_0 = []
    globalThis.svtrb_world_176_12_0 = []
    globalThis.svtrb_world_172_192_28_0 = []
    globalThis.svtrb_car_0_36 = []

    director_offset = o
    g.type = u32(o + 4)
    g.datapack_end = u32(director_offset + 16) + u32(director_offset + 20) + end_offset

    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)

    // if (g.console === "pc") {} else {
    //     return
    // }

    /*types finished
    * 0 = car
    * 1 = interface
    * 3 = link [f]
    * 4 = world
    * 8 = share
    */

    switch (g.type) {
    case 0:
    case 1:
        // case 2:
    case 3:
    case 4:
        // case 5:
        // case 6:
        // case 8:
        // case 9:
        // case 10:
        get_svtrb_datapack(end_offset + u32(o + 20))
        break
    default:
        return
    }

    print_logarray(log_array)

}

function get_svtrb_datapack(o) {
    if (u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 96) || u32(o + 104) || u32(o + 108) || u32(o + 116))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], o)
    let end_datapack;
    if (g.console === 'psp') {
        end_datapack = o + 120
        if (u32(o + 8) || u32(o + 4)) {
            end_datapack += divisible(u32(o + 8) * 4, 32)
            end_datapack += u32(o + 4)
        }
        offset_mid = end_datapack + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)
    } else if (g.console === 'ps2') {
        end_datapack = o + 120
        end_datapack = divisible(end_datapack, 2048)
        // console.log("sound list",end_datapack)
        if (u32(o + 8) || u32(o + 4)) {
            end_datapack += divisible(u32(o + 8) * 4, 32)
            // console.log("after sound list",end_datapack)
            end_datapack += u32(o + 4)
            end_datapack = divisible(end_datapack, 2048)
            // console.log("patch list",end_datapack)
        }
        offset_mid = end_datapack + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)
    } else {
        end_datapack = o + 128
        if (u32(o + 8) || u32(o + 4)) {
            end_datapack += divisible(u32(o + 8) * 4, 32)
            end_datapack += u32(o + 4)
        }
        offset_mid = end_datapack + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)
    }

    g.datapack_end = g.datapack_end - ((u32(o + 56) * 8) + (u32(o + 12) * 4))

    svtrb_get_index_patch_list(o, end_datapack)
    svtrb_get_offset_patch_list(o, offset_mid + u32(o))

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
    // console.log(g.type,'t')

    switch (g.type) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 9:
    case 10:
        get_svtrb_basic(offset_mid)
        break
    case 4:
        get_svtrb_world(offset_mid)
        break
    case 8:
        for (let i = 0; i < u32(o + 56); i++) {
            get_svtrb_share(offset_mid + (i * 4))
        }
        break
    default:
        console.log("?")
    }

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

function get_svtrb_audio_list(o, n) {
    get_svtrb_audio(u32(o) + n)
}

function get_svtrb_audio(o) {
    if (u32(o + 16) || u32(o + 20) !== 1081343 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_texture(o) {
    if (u8(o + 1) !== 2)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_texture_8)
    ö(u32(o + 12), get_svtrb_texture_12)

}

function get_svtrb_texture_8(o) {// texture data 
}
function get_svtrb_texture_12(o) {// console.log(get_string(o, 0, false))
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

function get_svtrb_world(o) {
    if (u32(o + 0) !== 288 || u32(o + 48) || u32(o + 52) || u32(o + 72) || u32(o + 76) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 180) || u32(o + 184) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 212) || u32(o + 216) || u32(o + 220))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u8, 224, u8, 225, u8, 226, u8, 227, u8, 228, u8, 229, u8, 230, u8, 231, u8, 232, u8, 233, u8, 234, u8, 235, u8, 236, u8, 237, u8, 238, u8, 239, u32, 240, u8, 244, u8, 245, u8, 246, u8, 247, u8, 248, u8, 249, u8, 250, u8, 251, u8, 252, u8, 253, u8, 254, u8, 255, u8, 256, u8, 257, u8, 258, u8, 259, u8, 260, u8, 261, u8, 262, u8, 263, u8, 264, u8, 265, u8, 266, u8, 267, u8, 268, u8, 269, u8, 270, u8, 271, u8, 272, u8, 273, u8, 274, u8, 275, u8, 276, u8, 277, u8, 278, u8, 279, u8, 280, u8, 281, u8, 282, u8, 283, f32, 284], o)

    ö(u32(o + 0), get_svtrb_world_0)
    ä(svtrb_world_4, u32(o + 4), get_svtrb_world_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ä(svtrb_world_12, u32(o + 12) + (i * 144), get_svtrb_world_12)
    }
    ä(svtrb_world_20, u32(o + 20), get_svtrb_world_20)

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 112), get_svtrb_world_28)
    }
    ä(svtrb_world_36, u32(o + 36), get_svtrb_world_36)

    for (let i = 0; i < u32(o + 40); i++) {
        ä(svtrb_world_44, u32(o + 44) + (i * 144), get_svtrb_world_44)
    }
    ä(svtrb_world_60, u32(o + 60), get_svtrb_world_60)

    for (let i = 0; i < u32(o + 64); i++) {
        ä(svtrb_world_68, u32(o + 68) + (i * 112), get_svtrb_world_68)
    }

    for (let i = 0; i < u32(o + 80); i++) {
        ä(svtrb_world_84, u32(o + 84) + (i * 80), get_svtrb_world_84)
    }

    ä(svtrb_world_92, u32(o + 92), get_svtrb_world_92)
    ä(svtrb_world_100, u32(o + 100), get_svtrb_world_100)
    ä(svtrb_world_108, u32(o + 108), get_svtrb_world_108)
    ä(svtrb_world_116, u32(o + 116), get_svtrb_world_116)

    ö(u32(o + 120), get_svtrb_world_120)
    ö(u32(o + 172), get_svtrb_world_172)
    ö(u32(o + 176), get_svtrb_world_176)
    for (let i = 0; i < u32(o + 204); i++) {
        ö(u32(o + 208) + (i * 4), get_svtrb_world_208)
    }

}

function get_svtrb_world_0(o) {
    if (f32(o + 12) !== 1 || f32(o + 28) !== 1 || u32(o + 36) !== 20 || u32(o + 72) || u32(o + 76) || u32(o + 84) !== 384 || u32(o + 88) !== 1 || u32(o + 92))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, f32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    // ö(u32(o + 32), get_svtrb_world_0_32)
    // ö(u32(o + 64), get_svtrb_world_0_64)
    // ö(u32(o + 84), get_svtrb_world_0_84)

}

function get_svtrb_world_0_32(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_0_64(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_0_84(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_4(o) {
    if (u32(o + 12) || f32(o + 32) !== 500 || f32(o + 40) !== 500 || u32(o + 48) !== 1 || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    // ö(u32(o + 16), get_svtrb_world_4_16)
    // ö(u32(o + 20), get_svtrb_world_4_20)

}

function get_svtrb_world_4_16(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_4_20(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_12(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 68) !== 16842752 || f32(o + 72) !== 500 || f32(o + 76) !== 1000 || u32(o + 96) || u32(o + 100) || u32(o + 104) || u8(o + 110) !== 255 || u8(o + 111) !== 255 || u32(o + 112) !== 65536 || u32(o + 116) || u32(o + 128) || u32(o + 136) || u32(o + 140))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, f32, 72, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u8, 108, u8, 109, u8, 110, u8, 111, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ä(svtrb_car, u32(o + 60), get_svtrb_car)

    ä(svtrb_world_12_80, u32(o + 80), get_svtrb_world_12_80)
    ä(svtrb_world_12_80, u32(o + 84), get_svtrb_world_12_80)
    ä(svtrb_world_12_80, u32(o + 88), get_svtrb_world_12_80)
    ä(svtrb_world_12_80, u32(o + 92), get_svtrb_world_12_80)

}

function get_svtrb_world_12_60(o) {
    if (u32(o + 4) !== 10 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_12_60_0)

}

function get_svtrb_world_12_60_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 20) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 100) || u32(o + 104) || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)

    ö(u32(o + 24), get_svtrb_world_12_60_0_24)
    ö(u32(o + 28), get_svtrb_world_12_60_0_28)
    ö(u32(o + 32), get_svtrb_world_12_60_0_32)
    ö(u32(o + 36), get_svtrb_world_12_60_0_36)
    ö(u32(o + 40), get_svtrb_world_12_60_0_40)
    ö(u32(o + 44), get_svtrb_world_12_60_0_44)
    ö(u32(o + 48), get_svtrb_world_12_60_0_48)
    ö(u32(o + 56), get_svtrb_world_12_60_0_56)
    ö(u32(o + 76), get_svtrb_world_12_60_0_76)
    ö(u32(o + 80), get_svtrb_world_12_60_0_80)
    ö(u32(o + 84), get_svtrb_world_12_60_0_84)
    ö(u32(o + 88), get_svtrb_world_12_60_0_88)
    ö(u32(o + 96), get_svtrb_world_12_60_0_96)
    ö(u32(o + 112), get_svtrb_world_12_60_0_112)

}

function get_svtrb_world_12_60_0_24(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_28(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_32(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_36(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_40(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_44(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_48(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_56(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_76(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_80(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_84(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_88(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_96(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_60_0_112(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_12_80(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_svtrb_world_12_80_0)
    ö(u32(o + 4), get_svtrb_world_12_80_4)
    ö(u32(o + 8), get_svtrb_world_12_80_8)
    ö(u32(o + 16), get_svtrb_world_12_80_16)

}

function get_svtrb_world_12_80_0(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 16), get_svtrb_world_12_80_0_8)
    }

}

function get_svtrb_world_12_80_0_8(o) {
    if (u32(o + 4) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12], o)
}

function get_svtrb_world_12_80_4(o) {
    if (u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_svtrb_world_12_80_4_0)

}

function get_svtrb_world_12_80_4_0(o) {
    /*ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, f32, 40, f32, 44], o)*/

    ö(u32(o + 36), get_svtrb_world_12_80_4_0_36)

}

function get_svtrb_world_12_80_4_0_36(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_12_80_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_12_80_16(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_12_84(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_svtrb_world_12_88(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_svtrb_world_12_92(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_svtrb_world_20(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 48) || u32(o + 52) || u32(o + 56) || f32(o + 60) !== 1 || f32(o + 80) !== 1000 || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, f32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    ä(svtrb_model_anims_1, u32(o + 64), get_svtrb_model_anims_1)
    ä(svtrb_world_92_64, u32(o + 72), get_svtrb_world_92_64)

}

function get_svtrb_world_28(o) {
    if (u32(o + 4) !== 65538 || u32(o + 8) || u32(o + 12) !== 524289 || u32(o + 16) !== 524289 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 44) || u32(o + 48) || u32(o + 68) || u32(o + 80) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 108))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

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

function get_svtrb_world_28_56(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)*/
}
function get_svtrb_world_28_64(o) {/*ü(1, [u32, 0], o)*/
}
function get_svtrb_world_28_72(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < get_svtrb_world_28_72_count; i++) {
        ö(u32(o + 0) + (i * 4), get_svtrb_world_28_72_0)
    }

}

function get_svtrb_world_28_72_0(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_world_116, u32(o + 0), get_svtrb_world_116)

}

function get_svtrb_world_28_76(o) {
    if (u32(o + 0) || u32(o + 28))
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

    ä(svtrb_world_92, u32(o + 0), get_svtrb_world_92)

}

function get_svtrb_world_28_76_16(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_world_100, u32(o + 0), get_svtrb_world_100)

}

function get_svtrb_world_28_76_24(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_world_108, u32(o + 0), get_svtrb_world_108)

}

function get_svtrb_world_28_100(o) {/*ü(1, [u32, 0], o)*/
}

function get_svtrb_world_36(o) {
    if (u32(o + 4) !== 3 || u32(o + 8) || u32(o + 12) !== 524288 || u32(o + 16) !== 524288 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ä(svtrb_sound_controls, u32(o + 48), get_svtrb_sound_controls)

}

function get_svtrb_world_44(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 36) || u32(o + 44) || u32(o + 60) || u32(o + 76) || f32(o + 92) !== 1 || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 10 || u32(o + 120) || u32(o + 132) || u32(o + 136) || u32(o + 140))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, u32, 48, f32, 52, f32, 56, u32, 60, f32, 64, u32, 68, f32, 72, u32, 76, f32, 80, f32, 84, f32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ä(svtrb_world_44, u32(o + 128), get_svtrb_world_44)

}

function get_svtrb_world_60(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, u32, 76], o)

    // ö(u32(o + 72), get_svtrb_world_60_72) //384 / 1024
    ö(u32(o + 76), get_svtrb_world_60_76)

}

function get_svtrb_world_60_72(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_60_76(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_world_68(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || f32(o + 60) !== 1 || u32(o + 80) !== 5000 || u32(o + 88) || u32(o + 108))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, f32, 104, u32, 108], o)

    ä(svtrb_activator, u32(o + 64), get_svtrb_activator)
}

function get_svtrb_world_84(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    // ä(svtrb_world_84_64, u32(o + 64), get_svtrb_world_84_64)
    ä(svtrb_world_12, u32(o + 64), get_svtrb_world_12)

}

function get_svtrb_world_84_64(o) {
    // world_20_12t0
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

}

function get_svtrb_world_92(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ä(svtrb_world_92_64, u32(o + 64), get_svtrb_world_92_64)

}

function get_svtrb_world_92_64(o) {
    // if (u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 36) || u32(o + 40) || u32(o + 60) || u8(o + 64) !== 255 || u8(o + 65) !== 255 || u8(o + 66) !== 255 || u8(o + 67) !== 255 || u32(o + 68) || u32(o + 72) || u32(o + 76))
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

    ö(u32(o + 12), get_svtrb_world_92_64_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_svtrb_world_92_64_20)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 64), get_svtrb_mysterious)
    }
    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 16), get_svtrb_world_92_64_48)
    }
    ö(u32(o + 52), get_svtrb_world_92_64_52)
    ä(svtrb_world_92_64, u32(o + 56), get_svtrb_world_92_64)

}

function get_svtrb_world_92_64_12(o) {
    // if (u8(o + 8) !== 255 || u8(o + 9) !== 255 || u8(o + 10) !== 255 || u8(o + 11) !== 255 || u32(o + 16) || u32(o + 20) || u32(o + 24) || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || f32(o + 48) !== 1 || f32(o + 52) !== 1 || f32(o + 56) !== 1 || u32(o + 60) || u32(o + 72) || u32(o + 76))
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 28), get_svtrb_world_92_64_12_28)
    ä(svtrb_unknown_4_4t2_112_0, u32(o + 44), get_svtrb_unknown_4_4t2_112_0)
    ö(u32(o + 68), get_svtrb_world_92_64_12_68)

}

function get_svtrb_world_92_64_12_28(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_world_92_64_12_28_4)
    ö(u32(o + 8), get_svtrb_world_92_64_12_28_8)

}

function get_svtrb_world_92_64_12_28_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_92_64_12_28_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_92_64_12_68(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_92_64_12_68_0)

}

function get_svtrb_world_92_64_12_68_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_92_64_20(o) {
    // if (u32(o + 20))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 32), get_svtrb_world_92_64_20_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 32), get_svtrb_world_92_64_20_16)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 64), get_svtrb_world_92_64_20_28)
    }

}

function get_svtrb_world_92_64_20_8(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_world_92_64_20_16(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_world_92_64_20_28(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 1 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_svtrb_world_92_64_20_28_4)
    ö(u32(o + 8), get_svtrb_world_92_64_20_28_8)

}

function get_svtrb_world_92_64_20_28_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_92_64_20_28_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_92_64_48(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 64), get_svtrb_world_92_64_48_12)
    }

}

function get_svtrb_world_92_64_48_12(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 28) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_svtrb_world_92_64_48_12_4)

}

function get_svtrb_world_92_64_48_12_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_92_64_52(o) {
    // if (u8(o + 0) !== 1 || u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 12))
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_svtrb_world_92_64_52_8)

}

function get_svtrb_world_92_64_52_8(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}


function get_svtrb_world_100(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 68))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, f32, 72, u32, 76], o)

    ä(svtrb_world_100_64, u32(o + 64), get_svtrb_world_100_64)

}

function get_svtrb_world_100_64(o) {
    // if (u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_world_100_64_4)
    }

}

function get_svtrb_world_100_64_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)

}

function get_svtrb_world_108(o) {
    // if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 64) || u32(o + 68) !== 65535 || u32(o + 76))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76], o)

    ä(svtrb_world_108_56, u32(o + 56), get_svtrb_world_108_56)

}

function get_svtrb_world_108_56(o) {
    // if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 52) || u32(o + 60) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 108) || u8(o + 112) !== 255 || u8(o + 113) !== 255 || u8(o + 114) !== 255 || u8(o + 115) !== 255 || u32(o + 116) || u32(o + 120) || u32(o + 124))
    ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, f32, 28, f32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, f32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u8, 112, u8, 113, u8, 114, u8, 115, u32, 116, u32, 120, u32, 124], o)

    ö(u32(o + 40), get_svtrb_world_108_56_40)
    ä(svtrb_unknown, u32(o + 56), get_svtrb_unknown)

    ä(svtrb_interface_72_24t1_4, u32(o + 64), get_svtrb_interface_72_24t1_4)

    ö(u32(o + 88), get_svtrb_world_108_56_88)
    ö(u32(o + 92), get_svtrb_world_108_56_92)
    ö(u32(o + 96), get_svtrb_world_108_56_96)
    for (let i = 0; i < u32(o + 100); i++) {
        ö(u32(o + 104) + (i * 64), get_svtrb_mysterious)
    }

}

function get_svtrb_world_108_56_40(o) {
    // if (u32(o + 12) || u32(o + 24) || u32(o + 28))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_svtrb_world_108_56_40_4)
    ö(u32(o + 16), get_svtrb_world_108_56_40_16)
    ö(u32(o + 20), get_svtrb_world_108_56_40_20)

}

function get_svtrb_world_108_56_40_4(o) {
    if (u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_108_56_40_4_0)

}

function get_svtrb_world_108_56_40_4_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_108_56_40_16(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_108_56_40_20(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_108_56_40_20_0)

}

function get_svtrb_world_108_56_40_20_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}


function get_svtrb_world_108_56_88(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 1 || u8(o + 8) || u8(o + 9) !== 64 || u8(o + 10) !== 28 || u8(o + 11) !== 70)
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    ä(svtrb_unknown, u32(o + 12), get_svtrb_unknown)

}

function get_svtrb_world_108_56_92(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_world_108_56_92_4)
    ö(u32(o + 8), get_svtrb_world_108_56_92_8)

}

function get_svtrb_world_108_56_92_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_world_108_56_92_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_world_108_56_92_8_0)
    ö(u32(o + 8), get_svtrb_world_108_56_92_8_8)

}

function get_svtrb_world_108_56_92_8_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_108_56_92_8_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_108_56_96(o) {
    // if (u8(o + 0) !== 1 || u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12))
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_world_108_56_96_8)

}

function get_svtrb_world_108_56_96_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_world_116(o) {
    // if (u32(o + 8) || u32(o + 12) !== 524289 || u32(o + 16) !== 524289 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || f32(o + 52) !== 1 || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || f32(o + 72) !== 1 || u32(o + 76) || f32(o + 92) !== 1 || u32(o + 96) || u32(o + 104) || u32(o + 108))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, u32, 76, u8, 80, u8, 81, u8, 82, u8, 83, f32, 84, u8, 88, u8, 89, u8, 90, u8, 91, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)
    ß('p_model', o, 100)
}
function get_svtrb_world_120(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ä(svtrb_world_120_0, u32(o + 0) + (i * 128), get_svtrb_world_120_0)
    }

}

function get_svtrb_world_120_0(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)

    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 4), get_svtrb_world_120_0_52)
        ö(u32(o + 56) + (i * 4), get_svtrb_world_120_0_56)
    }
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 4), get_svtrb_world_120_0_64)
    }

}

function get_svtrb_world_120_0_52(o) {/*ü(1, [f32, 0], o)*/
}
function get_svtrb_world_120_0_56(o) {/*ü(1, [u32, 0], o)*/
}
function get_svtrb_world_120_0_64(o) {/*ü(1, [u32, 0], o)*/
}

function get_svtrb_world_172(o) {
    if (u32(o + 0) !== 4 || u8(o + 28) !== 128 || u8(o + 29) !== 150 || u8(o + 30) !== 24 || u8(o + 31) !== 75 || u8(o + 32) !== 128 || u8(o + 33) !== 150 || u8(o + 34) !== 24 || u8(o + 35) !== 75 || u32(o + 76) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 0.0010000000474974513 || f32(o + 116) !== 1 || f32(o + 120) !== 1 || f32(o + 124) !== 1 || f32(o + 128) !== 0.5 || u32(o + 132) || u32(o + 136) || u32(o + 140) || u8(o + 156) || u8(o + 157) !== 64 || u8(o + 158) !== 28 || u8(o + 159) !== 70 || u8(o + 160) || u8(o + 161) !== 64 || u8(o + 162) !== 28 || u8(o + 163) !== 70 || u32(o + 172) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 200) || u32(o + 204))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, f32, 120, f32, 124, f32, 128, u32, 132, u32, 136, u32, 140, u32, 144, f32, 148, f32, 152, u8, 156, u8, 157, u8, 158, u8, 159, u8, 160, u8, 161, u8, 162, u8, 163, f32, 164, f32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204], o)
    ß('p_texture', o, 16)
    ß('p_texture', o, 20)
    ß('p_texture', o, 24)
    ß('p_texture', o, 144)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_svtrb_world_172_4)
    }
    ö(u32(o + 12), get_svtrb_world_172_12)
    ö(u32(o + 36), get_svtrb_world_172_36)
    ö(u32(o + 52), get_svtrb_world_172_52)
    ö(u32(o + 56), get_svtrb_world_172_56)
    ö(u32(o + 60), get_svtrb_world_172_60)
    ö(u32(o + 64), get_svtrb_world_172_64)
    ö(u32(o + 68), get_svtrb_world_172_68)
    ö(u32(o + 72), get_svtrb_world_172_72)
    ä(svtrb_interface_72_24t1_12t0, u32(o + 80), get_svtrb_interface_72_24t1_12t0)

    for (let i = 0; i < u32(o + 100); i++) {
        ö(u32(o + 104) + (i * 4), get_svtrb_world_172_104)
    }
    for (let i = 0; i < u32(o + 108); i++) {
        ö(u32(o + 112) + (i * 4), get_svtrb_world_172_112)
    }
    // ä(svtrb_world_172_188, u32(o + 188), get_svtrb_world_172_188)
    ä(svtrb_mysterious_4t9, u32(o + 188), get_svtrb_mysterious_4t9)

    ö(u32(o + 192), get_svtrb_world_172_192)
    ö(u32(o + 196), get_svtrb_world_172_196)

}

function get_svtrb_world_172_4(o) {
    if (u32(o + 4) || u8(o + 11) !== 255 || f32(o + 12) !== 50 || u32(o + 32) || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 1 || f32(o + 48) !== 100 || f32(o + 52) !== 0.5 || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, u32, 16, u32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, f32, 52, u32, 56, u32, 60], o)
}
function get_svtrb_world_172_12(o) {
    if (u8(o + 4) || u32(o + 12))
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_svtrb_world_172_36(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_172_52(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_172_56(o) {
    if (u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_172_60(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_172_64(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_172_68(o) {
    if (u32(o + 0) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_172_72(o) {
    if (f32(o + 0) !== 105 || f32(o + 4) !== 15 || f32(o + 8) !== 0.5 || f32(o + 12) !== 2 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_world_172_80(o) {
    if (u32(o + 4) || u32(o + 8) !== 3084 || f32(o + 12) !== 12 || u32(o + 16) || u32(o + 20) || u32(o + 24) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 0)

    ö(u32(o + 28), get_svtrb_world_172_80_28)

}

function get_svtrb_world_172_80_28(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_world_172_104(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_svtrb_world_172_104_0)

}

function get_svtrb_world_172_104_0(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// console.log(get_string(o, 0, false))

}

function get_svtrb_world_172_112(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_svtrb_world_172_112_0)

}

function get_svtrb_world_172_112_0(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_world_172_188(o) {
    if (u8(o + 0) || u8(o + 1) !== 1 || u8(o + 2) !== 1 || u8(o + 3) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_world_172_188_4)
    ö(u32(o + 8), get_svtrb_world_172_188_8)
    ö(u32(o + 12), get_svtrb_world_172_188_12)

}

function get_svtrb_world_172_188_4(o) {
    if (u32(o + 12) !== 100 || f32(o + 16) !== 40 || u32(o + 28) !== 100 || f32(o + 32) !== 40 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_svtrb_world_172_188_4_8)
    ö(u32(o + 20), get_svtrb_world_172_188_4_20)

}

function get_svtrb_world_172_188_4_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_172_188_4_20(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_172_188_8(o) {
    if (u32(o + 12) !== 100 || f32(o + 16) !== 40 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_svtrb_world_172_188_8_8)

}

function get_svtrb_world_172_188_8_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_172_188_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_svtrb_world_172_188_12_4)
    ö(u32(o + 16), get_svtrb_world_172_188_12_16)

}

function get_svtrb_world_172_188_12_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_172_188_12_16(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_172_192(o) {
    if (u32(o + 8) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(svtrb_interface, u32(o), get_svtrb_interface)
    ä(svtrb_interface, u32(o + 4), get_svtrb_interface)

    ö(u32(o + 12), get_svtrb_world_172_192_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 4), get_svtrb_world_172_192_20)
    }
    ö(u32(o + 28), get_svtrb_world_172_192_28)
    //maybe 8 bytes ?
    ä(svtrb_interface, u32(o + 32), get_svtrb_interface)
    ä(svtrb_interface, u32(o + 36), get_svtrb_interface)

}

function get_svtrb_world_172_192_12(o) {// PLANE
// console.log(get_string(o, 0, false))
}
function get_svtrb_world_172_192_20(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_car_0_76_4_4, u32(o + 0), get_svtrb_car_0_76_4_4)

}

function get_svtrb_world_172_192_28(o) {
    if (u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(svtrb_unknown_4_4t2_112_0, u32(o + 0), get_svtrb_unknown_4_4t2_112_0)
    ä(svtrb_unknown_4_4t2_112_0, u32(o + 4), get_svtrb_unknown_4_4t2_112_0)
    ä(svtrb_unknown_4_4t2_112_0, u32(o + 8), get_svtrb_unknown_4_4t2_112_0)
    ä(svtrb_unknown_4_4t2_112_0, u32(o + 12), get_svtrb_unknown_4_4t2_112_0)
    ä(svtrb_unknown_4_4t2_112_0, u32(o + 16), get_svtrb_unknown_4_4t2_112_0)
    ä(svtrb_unknown_4_4t2_112_0, u32(o + 20), get_svtrb_unknown_4_4t2_112_0)
    ä(svtrb_unknown_4_4t2_112_0, u32(o + 24), get_svtrb_unknown_4_4t2_112_0)
    ä(svtrb_unknown_4_4t2_112_0, u32(o + 28), get_svtrb_unknown_4_4t2_112_0)
    ä(svtrb_unknown_4_4t2_112_0, u32(o + 32), get_svtrb_unknown_4_4t2_112_0)
    ä(svtrb_unknown_4_4t2_112_0, u32(o + 36), get_svtrb_unknown_4_4t2_112_0)

}

function get_svtrb_world_172_196(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_world_176(o) {
    if (u32(o + 48) || u32(o + 52) || u32(o + 72) || u32(o + 76) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
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

    ä(svtrb_world_176_4_0, u32(o + 0), get_svtrb_world_176_4_0)

}

function get_svtrb_world_176_4_0(o) {
    if (u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_svtrb_world_176_4_0_4)
    // ö(u32(o + 12), get_svtrb_world_176_4_0_12) //some type ?

}

function get_svtrb_world_176_4_0_4(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_world_176_4_0_12(o) {
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, ], o)
}

function get_svtrb_world_176_12(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_world_176_12_0, u32(o + 0), get_svtrb_world_176_12_0)

}

function get_svtrb_world_176_12_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 172))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172], o)

    ö(u32(o + 140), get_svtrb_world_176_12_0_140)
    ö(u32(o + 148), get_svtrb_world_176_12_0_148)
    ö(u32(o + 152), get_svtrb_world_176_12_0_152)
    ö(u32(o + 160), get_svtrb_world_176_12_0_160)
    ö(u32(o + 164), get_svtrb_world_176_12_0_164)
    ö(u32(o + 168), get_svtrb_world_176_12_0_168)

}

function get_svtrb_world_176_12_0_140(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_176_12_0_148(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_176_12_0_152(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_176_12_0_160(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_176_12_0_164(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_176_12_0_168(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_176_20(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_world_176_20_0, u32(o + 0), get_svtrb_world_176_20_0)

}

function get_svtrb_world_176_20_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 24) !== 4000 || u32(o + 28) !== 4000 || u32(o + 36) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 20)

    // ä(svtrb_world_176_20_0, u32(o + 0), get_svtrb_world_176_20_0)
    // globalThis.svtrb_world_176_20_0 = []

    ö(u32(o + 16), get_svtrb_world_176_20_0_16)
    ö(u32(o + 32), get_svtrb_world_176_20_0_32)
    ö(u32(o + 44), get_svtrb_world_176_20_0_44)

}

function get_svtrb_world_176_20_0_16(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_176_20_0_32(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_176_20_0_44(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_176_28(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_svtrb_world_176_28_0)

}

function get_svtrb_world_176_28_0(o) {
    if (u32(o + 0) || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_svtrb_world_176_28_0_8)
    ö(u32(o + 12), get_svtrb_world_176_28_0_12)
    ö(u32(o + 20), get_svtrb_world_176_28_0_20)
    ö(u32(o + 28), get_svtrb_world_176_28_0_28)

}

function get_svtrb_world_176_28_0_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_176_28_0_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_176_28_0_20(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_176_28_0_28(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_world_176_36(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_svtrb_world_176_28_0)

}

function get_svtrb_world_176_44(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_svtrb_world_176_28_0)

}

function get_svtrb_world_176_60(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_svtrb_world_176_28_0)

}

function get_svtrb_world_176_68(o) {
    if (u32(o + 0) !== 8642400)
        ü(1, [u32, 0], o)

    ö(u32(o + 0), get_svtrb_world_176_28_0)

}

function get_svtrb_world_176_84(o) {
    /*ü(1, [u32, 0], o)*/

    // ö(u32(o + 0), get_svtrb_world_176_84_0)
    ö(u32(o + 0), get_svtrb_world_176_28_0)

}

function get_svtrb_world_176_84_0(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_svtrb_world_176_92(o) {
    /*ü(1, [u32, 0], o)*/

    // ö(u32(o + 0), get_svtrb_world_176_92_0)
    ö(u32(o + 0), get_svtrb_world_176_28_0)

}

function get_svtrb_world_176_92_0(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_svtrb_world_208(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_unknown_4_4t2_112_0, u32(o + 0), get_svtrb_unknown_4_4t2_112_0)

}

function get_svtrb_world_208_0(o) {
    if (f32(o + 4) !== 1 || f32(o + 12) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 70 || f32(o + 40) !== 1 || u32(o + 44) || f32(o + 48) !== 1 || u32(o + 52) || f32(o + 56) !== 1 || u32(o + 60) || u32(o + 64) || u32(o + 80) || u32(o + 84) || f32(o + 88) !== 300 || f32(o + 92) !== 200 || f32(o + 96) !== 1000 || u32(o + 100) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 140))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, f32, 48, u32, 52, f32, 56, u32, 60, u32, 64, f32, 68, f32, 72, u32, 76, u32, 80, u32, 84, f32, 88, f32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ä(svtrb_unknown, u32(o + 36), get_svtrb_unknown)
    ä(svtrb_sound_section, u32(o + 76), get_svtrb_sound_section)
    ö(u32(o + 108), get_svtrb_world_208_0_108)

}

function get_svtrb_world_208_0_36(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_svtrb_world_208_0_76(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_world_208_0_108(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
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
if(u32(o+0) ||u32(o+4) ||u32(o+8) ||u32(o+20) ||u32(o+60) ||u32(o+64) ||u32(o+68) ||u32(o+72) ||u32(o+100) ||u32(o+104) ||u32(o+116) ||u32(o+120) ||u32(o+124) )
ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)


ö(u32(o + 24), get_svtrb_car_0_24)



    ä(svtrb_model_anims_2, u32(o + 28), get_svtrb_model_anims_2)
    ö(u32(o + 32), get_svtrb_car_0_32)
    // ö(u32(o + 36), get_svtrb_car_0_36)
ä(svtrb_car_0_36, u32(o + 36), get_svtrb_car_0_36)

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
function get_svtrb_car_0_24(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_svtrb_car_0_32(o) {
if(u32(o+16) ||u32(o+20) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_model_link, u32(o + 0), get_svtrb_model_link)

    ö(u32(o + 4), get_svtrb_car_0_32_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_svtrb_car_0_32_12)
    }

    ö(u32(o + 28), get_svtrb_car_0_32_28)

}

function get_svtrb_model_link(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44], o)*/

    ö(u32(o + 4), get_svtrb_model_link_4)
    ö(u32(o + 8), get_svtrb_model_link_8)
    ä(svtrb_model_anims_1, u32(o + 12), get_svtrb_model_anims_1)
    for (let i = 0; i < u32(o + 20); i++) {
    // ö(u32(o + 24) + (i*64), get_svtrb_model_link_24)
    ö(u32(o + 24) + (i*64), get_svtrb_mysterious)
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
function get_svtrb_model_link_24(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_link_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_link_40(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
if(u32(o+0) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_0_32_28_4)
    ö(u32(o + 12), get_svtrb_car_0_32_28_12)

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
function get_svtrb_car_0_32_28_12(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_svtrb_car_0_36(o) {
if(u32(o+0) ||u8(o+20) !==255 ||u8(o+21) !==255 ||u8(o+22) !==255 ||u8(o+23) !==255 ||u8(o+28) !==255 ||u8(o+29) !==255 ||u8(o+30) !==255 ||u8(o+31) !==255 ||u8(o+32) !==255 ||u8(o+33) !==255 ||u8(o+34) !==255 ||u8(o+35) !==255 ||u8(o+36) !==255 ||u8(o+37) !==255 ||u8(o+38) !==255 ||u8(o+39) !==255 ||u8(o+44) !==255 ||u8(o+45) !==255 ||u8(o+46) !==255 ||u8(o+47) !==255 ||u32(o+48) ||u32(o+76) )
ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ä(svtrb_model_anims_2, u32(o + 52), get_svtrb_model_anims_2)

    ö(u32(o + 56), get_svtrb_car_0_36_56)
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 8), get_svtrb_car_0_36_64)
    }
    ö(u32(o + 72), get_svtrb_car_0_36_72)

}

function get_svtrb_car_0_36_56(o) {
    if (u32(o + 0) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_svtrb_car_0_36_56_4)
    ö(u32(o + 12), get_svtrb_car_0_36_56_12)

}

function get_svtrb_car_0_36_56_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_36_56_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_36_64(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_svtrb_car_0_36_64_4)

}

function get_svtrb_car_0_36_64_4(o) {
if(u32(o+12) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_car_0_36_64_4_4)
    }

}

function get_svtrb_car_0_36_64_4_4(o) {
if(u32(o+8) )
ü(1, [u32, 0, u32, 4, u32, 8], o)





    ä(svtrb_model_link, u32(o + 0), get_svtrb_model_link)
ö(u32(o + 4), get_svtrb_car_0_36_64_4_4_4)

}
function get_svtrb_car_0_36_64_4_4_4(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_svtrb_car_0_36_72(o) {
if(u32(o+8) ||u32(o+12) )
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
    ö(u32(o + 8) + (i*24), get_svtrb_car_0_40_12_8_8_8)
    }

}

function get_svtrb_car_0_40_12_8_8_0(o) {
/*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_svtrb_car_0_40_12_8_8_0_4)
    ö(u32(o + 12), get_svtrb_car_0_40_12_8_8_0_12)

}

function get_svtrb_car_0_40_12_8_8_0_4(o) {
if(u32(o+8) ||u32(o+12) )
ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_40_12_8_8_0_12(o) {
    if (u8(o + 0) !== 182 || u8(o + 1) !== 111 || u8(o + 2) !== 154 || u8(o + 3) !== 18 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_40_12_8_8_8(o) {
    // if (f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28))
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20], o)

    ö(u32(o + 8), get_svtrb_car_0_40_12_8_8_8_8)
    ä(svtrb_unknown_4_4t2_112_0, u32(o + 12), get_svtrb_unknown_4_4t2_112_0)

}

function get_svtrb_car_0_40_12_8_8_8_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_car_0_40_12_8_8_8_12(o) {
    if (u32(o + 0) !== 29 || f32(o + 4) !== 1 || f32(o + 8) !== 0.30000001192092896 || f32(o + 12) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 70 || u32(o + 36) || f32(o + 40) !== 1 || u32(o + 44) || f32(o + 48) !== 1 || u32(o + 52) || f32(o + 56) !== 1 || u32(o + 60) || u32(o + 64) || f32(o + 68) !== 30 || f32(o + 72) !== 75 || u32(o + 76) || u32(o + 80) || u32(o + 84) || f32(o + 88) !== 300 || f32(o + 92) !== 200 || f32(o + 96) !== 1000 || u32(o + 100) || u32(o + 104) !== 256 || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) !== 5 || u32(o + 136) !== 10 || u32(o + 140))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, f32, 48, u32, 52, f32, 56, u32, 60, u32, 64, f32, 68, f32, 72, u32, 76, u32, 80, u32, 84, f32, 88, f32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)
}

function get_svtrb_car_0_44(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 4)

    ä(svtrb_car_0_44_0, u32(o + 0), get_svtrb_car_0_44_0)

}

function get_svtrb_car_0_44_0(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_car_0_44_0_0)

}

function get_svtrb_car_0_44_0_0(o) {// console.log(get_string(o, 0, false))
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
    if (u8(o + 1) || u8(o + 3) || u32(o + 12) || u32(o + 28) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, f32, 36, f32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60], o)

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
        ä(svtrb_mysterious_4t9, u32(o + 4), get_svtrb_mysterious_4t9)
        break
    case 10:
        ö(u32(o + 4), get_svtrb_mysterious_4t10)
        break

    case 11:
        ä(svtrb_activator, u32(o + 4), get_svtrb_activator)
        break
    case 13:
        ö(u32(o + 4), get_svtrb_mysterious_4t13)
        break
    case 15:
        ö(u32(o + 4), get_svtrb_mysterious_4t15)
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
    ö(u32(o + 28), get_svtrb_strange_28)

}

function get_svtrb_strange_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)
}
function get_svtrb_strange_28(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_mysterious_4t5(o) {
    if (u8(o + 1) || u32(o + 8) || u32(o + 28) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

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
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_mysterious_4t5_52(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_svtrb_mysterious_4t5_56(o) {
if(u32(o+12) ||u32(o+24) ||u32(o+28) )
ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_mysterious_4t7(o) {
    // if (u32(o + 4) || u32(o + 8) !== 1 || u32(o + 16) !== 100 || f32(o + 20) !== 1 || u32(o + 32) !== 1 || u32(o + 40) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60))
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 12), get_svtrb_mysterious_4t7_12)
    ö(u32(o + 36), get_svtrb_mysterious_4t7_36)
    ö(u32(o + 44), get_svtrb_mysterious_4t7_44)

}

function get_svtrb_mysterious_4t7_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 0)

}
function get_svtrb_mysterious_4t7_36(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t7_44(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_mysterious_4t9(o) {
    if (u8(o + 0))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_mysterious_4t9_4)
    ö(u32(o + 8), get_svtrb_mysterious_4t9_8)
    ö(u32(o + 12), get_svtrb_mysterious_4t9_12)

}

function get_svtrb_mysterious_4t9_4(o) {
    if (u32(o + 12) !== 100 || u32(o + 28) !== 100 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_svtrb_mysterious_4t9_4_8)
    ö(u32(o + 20), get_svtrb_mysterious_4t9_4_20)

}

function get_svtrb_mysterious_4t9_4_8(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t9_4_20(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_mysterious_4t9_8(o) {
    if (u32(o + 12) !== 100 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_svtrb_mysterious_4t9_8_8)

}

function get_svtrb_mysterious_4t9_8_8(o) {
    if (u8(o + 0) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_mysterious_4t9_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_svtrb_mysterious_4t9_12_4)
    ö(u32(o + 16), get_svtrb_mysterious_4t9_12_16)

}

function get_svtrb_mysterious_4t9_12_4(o) {
    if (f32(o + 16) !== 32 || u8(o + 36) || u8(o + 37) || u32(o + 40) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ß('p_texture', o, 0)

    ö(u32(o + 8), get_svtrb_mysterious_4t9_12_4_8)
    ö(u32(o + 44), get_svtrb_mysterious_4t9_12_4_44)
    ö(u32(o + 48), get_svtrb_mysterious_4t9_12_4_48)

}

function get_svtrb_mysterious_4t9_12_4_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t9_12_4_44(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_mysterious_4t9_12_4_48(o) {
    if (u32(o + 4) !== 5 || f32(o + 8) !== 0.5 || f32(o + 12) !== 0.5 || u32(o + 16) !== 100 || u32(o + 20) !== 200 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_interface_72_24t1_12t0, u32(o + 0), get_svtrb_interface_72_24t1_12t0)

}

function get_svtrb_mysterious_4t9_12_4_48_0(o) {
    if (u32(o + 8) !== 5140 || f32(o + 12) !== 20 || u32(o + 16) || u32(o + 20) || u32(o + 24) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 0)

    ö(u32(o + 4), get_svtrb_mysterious_4t9_12_4_48_0_4)
    ö(u32(o + 28), get_svtrb_mysterious_4t9_12_4_48_0_28)

}

function get_svtrb_mysterious_4t9_12_4_48_0_4(o) {
    if (u32(o + 0) !== 65541 || f32(o + 4) !== 50 || f32(o + 8) !== 48 || f32(o + 12) !== 1 || f32(o + 16) !== 1 || u32(o + 20) !== 123 || u32(o + 28) !== 44 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 2), get_svtrb_mysterious_4t9_12_4_48_0_4_24)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 24), get_svtrb_mysterious_4t9_12_4_48_0_4_32)
    }
    ö(u32(o + 36), get_svtrb_mysterious_4t9_12_4_48_0_4_36)

}

function get_svtrb_mysterious_4t9_12_4_48_0_4_24(o) {
    if (u8(o + 1))
        ü(1, [u8, 0, u8, 1], o)
}
function get_svtrb_mysterious_4t9_12_4_48_0_4_32(o) {
    if (u8(o + 17) !== 255 || u8(o + 18) || u8(o + 19) || u8(o + 21) || u8(o + 23))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23], o)
}
function get_svtrb_mysterious_4t9_12_4_48_0_4_36(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_mysterious_4t9_12_4_48_0_28(o) {
    if (f32(o + 0) !== 6 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_mysterious_4t9_12_16(o) {
    if (u32(o + 0) || u32(o + 4) !== 5000 || u32(o + 8) !== 1000 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t10(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_svtrb_mysterious_4t13(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, f32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u8, 112, u8, 113, u8, 114, u8, 115, u32, 116, u32, 120, u32, 124, ], o)
}
function get_svtrb_mysterious_4t15(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator(o) {
    if (u32(o + 16) || u32(o + 40) || u32(o + 44) || u32(o + 60) || u32(o + 76) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 252))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, f32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, f32, 128, f32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, f32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252], o)

    // ä(svtrb_activator, u32(o + ac), get_svtrb_activator)
    // globalThis.svtrb_activator = []

    ö(u32(o + 4), get_svtrb_activator_4)
    ö(u32(o + 8), get_svtrb_activator_8)
    for (let i = 0; i < u32(o + 28); i++) {
    ö(u32(o + 32) + (i*24), get_svtrb_activator_32)
    }
    ö(u32(o + 36), get_svtrb_activator_36)
    ö(u32(o + 68), get_svtrb_activator_68)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 24), get_svtrb_activator_24)
    }
    ö(u32(o + 108), get_svtrb_activator_108)
    ö(u32(o + 116), get_svtrb_activator_116)
    ö(u32(o + 124), get_svtrb_activator_124)
    ö(u32(o + 144), get_svtrb_activator_144)

    ö(u32(o + 148), get_svtrb_activator_148)
    ö(u32(o + 160), get_svtrb_activator_160)
    ö(u32(o + 168), get_svtrb_activator_168)

    for (let i = 0; i < u32(o + 172); i++) {
        ö(u32(o + 176) + (i * 20), get_svtrb_activator_176)
    }
    ö(u32(o + 184), get_svtrb_activator_184)
    ö(u32(o + 212), get_svtrb_activator_212)
    ö(u32(o + 220), get_svtrb_activator_220)
    ö(u32(o + 228), get_svtrb_activator_228)

    for (let i = 0; i < u32(o + 244); i++) {
        ö(u32(o + 248) + (i * 36), get_svtrb_activator_248)
    }

}
function get_svtrb_activator_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_32(o) {
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20 ], o)
}
function get_svtrb_activator_36(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_68(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_116(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_124(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_144(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_160(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_168(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_184(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_212(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_220(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_228(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_8(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_activator_24(o) {
    if (u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20], o)

    ö(u32(o + 4), get_svtrb_activator_24_4)

}

function get_svtrb_activator_24_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_108(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
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
    ö(u32(o + 8), get_svtrb_activator_148_8_8)

}

function get_svtrb_activator_148_8_0(o) {
    // if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    //maybe check
    // ö(u32(o + 4), get_svtrb_activator_148_8_0_4)

}

function get_svtrb_activator_148_8_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_svtrb_activator_148_8_8(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 0), get_svtrb_activator_148_8_8_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 24), get_svtrb_activator_148_8_8_8)
    }
    ö(u32(o + 12), get_svtrb_activator_148_8_8_12)

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
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_148_8_8_8(o) {
if(f32(o+16) !==1 )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20], o)


ö(u32(o + 8), get_svtrb_activator_148_8_8_8_8)
ö(u32(o + 12), get_svtrb_activator_148_8_8_8_12)
// ö(u32(o + 20), get_svtrb_activator_148_8_8_8_20)

    }

function get_svtrb_activator_148_8_8_8_8(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_svtrb_activator_148_8_8_8_12(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_svtrb_activator_148_8_8_8_20(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}


function get_svtrb_activator_148_8_8_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
    ö(u32(o + 32), get_svtrb_activator_248_32)

}

function get_svtrb_activator_248_4(o) {
if(u8(o+2) ||u8(o+3) )
ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

sü(u8, 0, o, 4)
// ö(u32(o + 4), get_svtrb_activator_248_4_4)

    }

function get_svtrb_activator_248_4_4(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}


function get_svtrb_activator_248_4_4(o) {
    // if (u32(o + 0) !== 2 || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
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

    // ö(u32(o + 4), get_svtrb_activator_248_4_12_0_4)

}

function get_svtrb_activator_248_4_12_0_4(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_248_8(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_activator_248_32(o) {
    if (u32(o + 20) || u8(o + 41) || u8(o + 42) || u8(o + 60) || u8(o + 61) || u8(o + 63))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28, f32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, f32, 48, f32, 52, u32, 56, u8, 60, u8, 61, u8, 62, u8, 63, f32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ö(u32(o + 0), get_svtrb_activator_248_32_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_svtrb_activator_248_32_8)
    }
    ö(u32(o + 16), get_svtrb_activator_248_32_16)
    ö(u32(o + 36), get_svtrb_activator_248_32_36)
    ö(u32(o + 44), get_svtrb_activator_248_32_44)
    ö(u32(o + 56), get_svtrb_activator_248_32_56)
    ö(u32(o + 76), get_svtrb_activator_248_32_76)

    ö(u32(o + 84), get_svtrb_activator_248_32_84)
    ö(u32(o + 88), get_svtrb_activator_248_32_88)

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
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_44(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_56(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_76(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_activator_248_32_84(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_activator_248_32_88(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_mysterious_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76(o) {
if(u32(o+24) !==1 )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_svtrb_car_0_76_4)
    }
    ö(u32(o + 12), get_svtrb_car_0_76_12)
    ö(u32(o + 20), get_svtrb_car_0_76_20)
    ö(u32(o + 28), get_svtrb_car_0_76_28)

}

function get_svtrb_car_0_76_4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_car_0_76_4_4, u32(o + 4), get_svtrb_car_0_76_4_4)

}

function get_svtrb_car_0_76_4_4(o) {
if(u8(o+4) !==255 ||u8(o+5) !==255 ||u8(o+6) !==255 ||u8(o+7) !==255 ||u8(o+8) !==255 ||u8(o+9) !==255 ||u8(o+10) !==255 ||u8(o+11) !==255 ||u8(o+24) !==255 ||u8(o+25) !==255 ||u8(o+26) !==255 ||u8(o+27) !==255 ||u8(o+28) !==255 ||u8(o+29) !==255 ||u8(o+30) !==255 ||u8(o+31) !==255 ||u8(o+32) !==255 ||u8(o+33) !==255 ||u8(o+34) !==255 ||u8(o+35) !==255 ||u32(o+44) ||u8(o+50) ||u32(o+60) ||u32(o+104) ||u32(o+108) ||u32(o+140) )
ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u8, 84, u8, 85, u8, 86, u8, 87, f32, 88, u8, 92, u8, 93, u8, 94, u8, 95, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, f32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ä(svtrb_model_anims_2, u32(o + 52), get_svtrb_model_anims_2)
    ö(u32(o + 56), get_svtrb_car_0_76_4_4_56)
    ö(u32(o + 68), get_svtrb_car_0_76_4_4_68)
    ä(svtrb_unknown, u32(o + 72), get_svtrb_unknown)
     ö(u32(o + 80), get_svtrb_car_0_76_4_4_80)
   for (let i = 0; i < u32(o + 96); i++) {
        ö(u32(o + 100) + (i * 32), get_svtrb_car_0_76_4_4_100)
    }
    ä(svtrb_interface, u32(o + 112), get_svtrb_interface)

    ä(svtrb_car_0_76_4_4_128, u32(o + 128), get_svtrb_car_0_76_4_4_128)
ö(u32(o + 136), get_svtrb_car_0_76_4_4_136)

}

function get_svtrb_car_0_76_4_4_56(o) {
if(u8(o+2) ||u8(o+3) ||u32(o+4) ||u32(o+8) ||u32(o+12) )
ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_76_4_4_68(o) {
/*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/





    ä(svtrb_unknown_4_4t2, u32(o + 0), get_svtrb_unknown_4_4t2)
    ä(svtrb_unknown, u32(o + 4), get_svtrb_unknown)
    ö(u32(o + 12), get_svtrb_car_0_76_4_4_68_12)

}
function get_svtrb_car_0_76_4_4_68_12(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_svtrb_car_0_76_4_4_80(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_svtrb_car_0_76_4_4_100(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_car_0_76_4_4_128(o) {
if(u32(o+8) ||u8(o+16) !==1 ||u8(o+17) !==1 ||u8(o+18) ||u8(o+19) ||u32(o+20) ||u32(o+40) ||u32(o+44) )
ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)


    ö(u32(o + 4), get_svtrb_car_0_76_4_4_128_4)
    ö(u32(o + 24), get_svtrb_car_0_76_4_4_128_24)
    ö(u32(o + 28), get_svtrb_car_0_76_4_4_128_28)
    ö(u32(o + 36), get_svtrb_car_0_76_4_4_128_36)

}

function get_svtrb_car_0_76_4_4_128_4(o) {
    // if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    //always 16

    ö(u32(o + 4), get_svtrb_car_0_76_4_4_128_4_4)

}

function get_svtrb_car_0_76_4_4_128_4_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76_4_4_128_24(o) {
if(u32(o+4) ||u32(o+8) ||u32(o+12) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_76_4_4_128_28(o) {
    // if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    //always 16
    ö(u32(o + 4), get_svtrb_car_0_76_4_4_128_28_4)

}

function get_svtrb_car_0_76_4_4_128_28_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76_4_4_128_36(o) {
    // if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_76_4_4_136(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_svtrb_car_0_76_12(o) {
    // if (u32(o + 4) || u32(o + 8) || u32(o + 12))
    // ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, ], o)
}
function get_svtrb_car_0_76_20(o) {
    // if (u32(o + 8) || u32(o + 12))
    ü(3, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_0_76_20_4)

}

function get_svtrb_car_0_76_20_4(o) {
    // if (f32(o + 0) !== 11 || f32(o + 4) !== 2.3694278276172396e-38 || f32(o + 8) !== 1 || f32(o + 12) !== 22 || f32(o + 16) !== 0.0010000000474974513 || f32(o + 20) !== 1 || u32(o + 40) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60))
    ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60], o)
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
function get_svtrb_car_0_76_28_0_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_76_28_0_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76_28_4(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_svtrb_car_0_76_28_8(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_svtrb_car_0_76_28_12(o) {
    // if (f32(o + 0) !== 0.949999988079071 || f32(o + 4) !== 1.75 || f32(o + 8) !== 3 || f32(o + 12) !== 1.25 || f32(o + 16) !== 0.949999988079071 || f32(o + 20) !== 1.75 || f32(o + 24) !== 3 || f32(o + 28) !== 1.25 || f32(o + 32) !== 2.3499999046325684 || f32(o + 36) !== 1.5499999523162842 || f32(o + 40) !== 3 || f32(o + 44) !== 2)
    ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44], o)
}
function get_svtrb_car_0_76_28_16(o) {
    // if (f32(o + 4) !== 40 || f32(o + 8) !== 22 || u8(o + 16) !== 40 || u8(o + 17) !== 107 || u8(o + 18) !== 238 || u8(o + 19) !== 78 || f32(o + 20) !== 1 || f32(o + 28) !== 122.5999984741211 || f32(o + 32) !== 1.2000000476837158 || f32(o + 36) !== 1.2000000476837158 || f32(o + 40) !== 0.5 || u32(o + 60))
    ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60], o)
}
function get_svtrb_car_0_76_28_20(o) {
    // if (f32(o + 4) !== 6.900000095367432 || f32(o + 8) !== 2.5 || f32(o + 12) !== 2.75 || f32(o + 16) !== 1.25 || f32(o + 20) !== 7.5 || f32(o + 24) !== 11.5 || u32(o + 28))
    ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_svtrb_car_0_80(o) {
    // if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_car_0_84(o) {
    // if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_car_0_88(o) {
    if (u32(o + 0) !== 257 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_svtrb_car_0_88_8)

}

function get_svtrb_car_0_88_8(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_svtrb_car_0_96(o) {
    // if (u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0], o)

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)

}
function get_svtrb_car_0_112(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_svtrb_unknown(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_svtrb_unknown_4)
    }
    //unknown ?
}

function get_svtrb_unknown_4(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    /*
based on type [0]
1 = offset (pmwr_ps2demo_unknown_4_4t1)
3 = offset (pmwr_ps2demo_unknown)
4 = offset (pmwr_ps2demo_strange)
5 = offset
6 = offset (pmwr_ps2demo_world_92_64)
29 = offset
31 = offset (pmwr_ps2demo_unknown_4_4t31)
*/

    switch (u32(o + 0)) {
    case 1:
        ä(svtrb_unknown_4_4t1, u32(o + 4), get_svtrb_unknown_4_4t1)
        break
    case 2:
        ä(svtrb_unknown_4_4t2, u32(o + 4), get_svtrb_unknown_4_4t2)
        break
    case 3:
        ä(svtrb_unknown, u32(o + 4), get_svtrb_unknown)
        break
    case 4:
        ä(svtrb_strange, u32(o + 4), get_svtrb_strange)
        break
    case 5:
        ä(svtrb_unknown_4_4t5, u32(o + 4), get_svtrb_unknown_4_4t5)
        break
    case 6:
        ö(u32(o + 4), get_svtrb_unknown_4_4t6)
        break
    case 9:
        ä(svtrb_sound_section, u32(o + 4), get_svtrb_sound_section)
        break
    case 25:
        ö(u32(o + 4), get_svtrb_unknown_4_4t25)
        break
    case 26:
        ä(svtrb_sound_controls, u32(o + 4), get_svtrb_sound_controls)
        break
    case 31:
        ö(u32(o + 4), get_svtrb_unknown_4_4t31)
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
        ö(u32(o + 8), get_svtrb_unknown_4_8t2)
        break
    case 3:
        ö(u32(o + 8), get_svtrb_unknown_4_8t3)
        break
    case 4:
        ö(u32(o + 8), get_svtrb_unknown_4_8t4)
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
        ö(u32(o + 8), get_svtrb_unknown_4_8t31)
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
function get_svtrb_unknown_4_4t1(o) {
if(u8(o+2) ||u8(o+3) ||u32(o+36) ||u32(o+40) ||u32(o+44) )
ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    switch (u8(o + 0)) {
    case 0:
        ö(u32(o + 4), get_svtrb_unknown_4_4t1_4t0)
        break
    case 1:
        ö(u32(o + 4), get_svtrb_unknown_4_4t1_4t1)
        break
    case 2:
        ö(u32(o + 4), get_svtrb_unknown_4_4t1_4t2)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_svtrb_unknown_4_4t1_24)
    }
    ö(u32(o + 32), get_svtrb_unknown_4_4t1_32)

}

function get_svtrb_unknown_4_4t1_4t0(o) {
    if (u32(o + 12) || u32(o + 52) !== 1 || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_unknown_4_4t1_4t0_4)
    }
    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 32), get_svtrb_unknown_4_4t1_4t0_40)
    }
    ö(u32(o + 48), get_svtrb_unknown_4_4t1_4t0_48)
    ö(u32(o + 56), get_svtrb_unknown_4_4t1_4t0_56)
    ö(u32(o + 64), get_svtrb_unknown_4_4t1_4t0_64)

}

function get_svtrb_unknown_4_4t1_4t0_4(o) {
    // if (u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0], o)
    ß('p_model', o, 0)

}
function get_svtrb_unknown_4_4t1_4t0_40(o) {
    // if (u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
    ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_4_4t1_4t0_56(o) {
    // if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
    ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_4_4t1_4t0_48(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_4t1_4t0_64(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t1_4t1(o) {
if(u8(o+8) ||u32(o+12) ||u32(o+16) ||u32(o+68) ||u32(o+72) ||u32(o+76) )
ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_unknown_4_4t1_4t1_4)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 12), get_svtrb_unknown_4_4t1_4t1_44)
    }
    ö(u32(o + 52), get_svtrb_unknown_4_4t1_4t1_52)
    ö(u32(o + 56), get_svtrb_unknown_4_4t1_4t1_56)
    ö(u32(o + 64), get_svtrb_unknown_4_4t1_4t1_64)

}

function get_svtrb_unknown_4_4t1_4t1_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)
}
function get_svtrb_unknown_4_4t1_4t1_44(o) {/*ü(1, [f32, 0, u32, 4, f32, 8], o)*/
}
function get_svtrb_unknown_4_4t1_4t1_52(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_4_4t1_4t1_56(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_4_4t1_4t1_64(o) {
    // if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    //this may be 2x
    ö(u32(o + 4), get_svtrb_unknown_4_4t1_4t1_64_4)

}

function get_svtrb_unknown_4_4t1_4t1_64_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_unknown_4_4t1_4t2(o) {
    if (u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_unknown_4_4t1_4t2_4)
    }
    ö(u32(o + 20), get_svtrb_unknown_4_4t1_4t2_20)

}

function get_svtrb_unknown_4_4t1_4t2_4(o) {
if(u8(o+4) ||u8(o+6) ||u8(o+7) )
ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_svtrb_unknown_4_4t1_4t2_20(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [f32, 0, u32, 4, u32, 8, f32, 12], o)
}

function get_svtrb_unknown_4_4t1_24(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_svtrb_unknown_4_4t1_32(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_unknown_4_4t1_32_0)

}

function get_svtrb_unknown_4_4t1_32_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t2(o) {
if(u32(o+4) ||u32(o+20) ||u32(o+28) ||u32(o+36) ||u32(o+44) ||u32(o+48) ||f32(o+60) !==-1 ||f32(o+64) !==1 ||u32(o+68) ||u8(o+74) ||u32(o+84) ||u32(o+88) ||f32(o+96) !==0.4000000059604645 ||u32(o+120) ||u32(o+124) ||u32(o+148) ||u32(o+152) ||u32(o+156) )
ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, f32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156], o)

    ö(u32(o + 8), get_svtrb_unknown_4_4t2_8)
    ö(u32(o + 12), get_svtrb_unknown_4_4t2_12)
    ö(u32(o + 80), get_svtrb_unknown_4_4t2_80)

    ö(u32(o + 92), get_svtrb_unknown_4_4t2_92)
    ä(svtrb_unknown, u32(o + 100), get_svtrb_unknown)
    ö(u32(o + 104), get_svtrb_unknown_4_4t2_104)
    for (let i = 0; i < u32(o + 108); i++) {
        ö(u32(o + 112) + (i * 20), get_svtrb_unknown_4_4t2_112)
    }
    ä(svtrb_unknown, u32(o + 116), get_svtrb_unknown)
    ö(u32(o + 128), get_svtrb_unknown_4_4t2_128)
    for (let i = 0; i < u32(o + 132); i++) {
        ö(u32(o + 136) + (i * 64), get_svtrb_mysterious)
    }
    ö(u32(o + 144), get_svtrb_unknown_4_4t2_144)

}

function get_svtrb_unknown_4_4t2_8(o) {
if(u32(o+8) ||u32(o+12) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t2_8_4)

}

function get_svtrb_unknown_4_4t2_8_4(o) {
    // if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 10000 || f32(o + 12) !== 1 || f32(o + 16) !== 100 || f32(o + 20) !== 300 || f32(o + 24) !== 20 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
    // ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47], o)
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_4t2_12(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_svtrb_unknown_4_4t2_80(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_svtrb_unknown_4_4t2_112(o) {
    if (u32(o + 4) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)

    ä(svtrb_unknown_4_4t2_112_0, u32(o + 0), get_svtrb_unknown_4_4t2_112_0)
    ä(svtrb_unknown, u32(o + 8), get_svtrb_unknown)

}

function get_svtrb_unknown_4_4t2_112_0(o) {
if(f32(o+4) !==1 ||f32(o+12) !==1 ||u32(o+16) ||u32(o+20) ||u32(o+24) ||u32(o+28) ||f32(o+32) !==70 ||f32(o+40) !==1 ||u32(o+44) ||f32(o+48) !==1 ||u32(o+52) ||f32(o+56) !==1 ||u32(o+60) ||u32(o+64) ||u32(o+80) ||u32(o+84) ||f32(o+88) !==300 ||f32(o+92) !==200 ||f32(o+96) !==1000 ||u32(o+100) ||u32(o+120) ||u32(o+124) ||u32(o+128) ||u32(o+140) )
ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, f32, 48, u32, 52, f32, 56, u32, 60, u32, 64, f32, 68, f32, 72, u32, 76, u32, 80, u32, 84, f32, 88, f32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

ö(u32(o + 36), get_svtrb_unknown_4_4t2_112_0_36)
ö(u32(o + 76), get_svtrb_unknown_4_4t2_112_0_76)



    ö(u32(o + 108), get_svtrb_unknown_4_4t2_112_0_108)
ö(u32(o + 116), get_svtrb_unknown_4_4t2_112_0_116)

}
function get_svtrb_unknown_4_4t2_112_0_36(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_svtrb_unknown_4_4t2_112_0_76(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_svtrb_unknown_4_4t2_112_0_108(o) {
if(u32(o+12) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t2_112_0_108_4)

}

function get_svtrb_unknown_4_4t2_112_0_108_4(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_svtrb_unknown_4_4t2_112_0_108_4_8)

}

function get_svtrb_unknown_4_4t2_112_0_108_4_8(o) {
if(u32(o+0) ||u32(o+20) ||u32(o+24) ||u32(o+28) )
ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_4_4t2_112_0_116(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_svtrb_unknown_4_4t2_128(o) {
    if (u32(o + 4) !== 1281 || f32(o + 8) !== 1 || u32(o + 12) || u32(o + 16) !== 1000 || u32(o + 20) !== 1000 || f32(o + 28) !== 100)
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28], o)
    ß('p_texture', o, 0)

    ö(u32(o + 24), get_svtrb_unknown_4_4t2_128_24)

}

function get_svtrb_unknown_4_4t2_128_24(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t2_144(o) {
if(u32(o+4) ||u32(o+8) ||u32(o+12) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t2_92(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t2_92_4)
    ö(u32(o + 8), get_svtrb_unknown_4_4t2_92_8)

}

function get_svtrb_unknown_4_4t2_92_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_4_4t2_92_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_unknown_4_4t2_92_8_0)
    ö(u32(o + 8), get_svtrb_unknown_4_4t2_92_8_8)

}

function get_svtrb_unknown_4_4t2_92_8_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t2_92_8_0_4)

}

function get_svtrb_unknown_4_4t2_92_8_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t2_92_8_8(o) {
    if (u32(o + 4) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_unknown_4_4t2_92_8_8_0)
    ö(u32(o + 8), get_svtrb_unknown_4_4t2_92_8_8_8)

}

function get_svtrb_unknown_4_4t2_92_8_8_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t2_92_8_8_0_4)

}

function get_svtrb_unknown_4_4t2_92_8_8_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t2_92_8_8_8(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 4) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_svtrb_unknown_4_4t2_92_8_8_8_8)
    ä(svtrb_unknown_4_4t2_112_0, u32(o + 12), get_svtrb_unknown_4_4t2_112_0)

}

function get_svtrb_unknown_4_4t2_92_8_8_8_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_4_4t2_92_8_8_8_12(o) {
    if (u32(o + 0) !== 2 || f32(o + 4) !== 1 || f32(o + 8) !== 0.30000001192092896 || f32(o + 12) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 70 || f32(o + 40) !== 1 || u32(o + 44) || f32(o + 48) !== 1 || u32(o + 52) || f32(o + 56) !== 1 || u32(o + 60) || u32(o + 64) || f32(o + 68) !== 30 || f32(o + 72) !== 75 || u32(o + 80) || u32(o + 84) || f32(o + 88) !== 300 || f32(o + 92) !== 200 || f32(o + 96) !== 1000 || u32(o + 100) || u32(o + 104) !== 256 || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) !== 5 || u32(o + 136) !== 10 || u32(o + 140))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, f32, 48, u32, 52, f32, 56, u32, 60, u32, 64, f32, 68, f32, 72, u32, 76, u32, 80, u32, 84, f32, 88, f32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ä(svtrb_unknown, u32(o + 36), get_svtrb_unknown)
    ä(svtrb_sound_section, u32(o + 76), get_svtrb_sound_section)

}

function get_svtrb_unknown_4_4t2_104(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_unknown_4_4t2_104_0)

}

function get_svtrb_unknown_4_4t2_104_0(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 100 || u32(o + 12) || f32(o + 16) !== 100 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_unknown_4_8t3(o) {
if(u32(o+8) ||u32(o+12) ||u32(o+16) ||u32(o+20) ||u32(o+24) ||u32(o+28) ||u32(o+32) ||u32(o+36) ||u8(o+40) ||u8(o+41) ||u8(o+43) ||u32(o+44) ||u32(o+48) ||u32(o+56) ||u32(o+60) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)


ö(u32(o + 52), get_svtrb_unknown_4_8t3_52)

    }

function get_svtrb_unknown_4_8t3_52(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_svtrb_unknown_4_8t4(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || f32(o + 8) !== 5 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== -3 || u32(o + 36) || u32(o + 40) !== 2 || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 48), get_svtrb_unknown_4_8t4_48)

}

function get_svtrb_unknown_4_8t4_48(o) {
    if (u32(o + 0) || f32(o + 4) !== 2 || u32(o + 8) || f32(o + 12) !== 2 || u32(o + 16) || f32(o + 20) !== 2 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_unknown_4_4t5(o) {
    if (u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t5_4)
    ö(u32(o + 12), get_svtrb_unknown_4_4t5_12)
    ö(u32(o + 20), get_svtrb_unknown_4_4t5_20)
    ö(u32(o + 28), get_svtrb_unknown_4_4t5_28)
    ö(u32(o + 36), get_svtrb_unknown_4_4t5_36)

}

function get_svtrb_unknown_4_4t5_4(o) {
    // if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 16), get_svtrb_unknown_4_4t5_4_16)

}

function get_svtrb_unknown_4_4t5_4_16(o) {
    // if (u8(o + 0) !== 9 || u8(o + 1) !== 147 || u8(o + 2) !== 14 || u8(o + 3) !== 30 || u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t5_12(o) {
    if (u32(o + 0) !== 2 || u32(o + 8) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t5_12_4)

}

function get_svtrb_unknown_4_4t5_12_4(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u8(o + 12) || u8(o + 13) || u8(o + 14) || u8(o + 15) !== 255 || u32(o + 16) || f32(o + 20) !== 500 || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_svtrb_unknown_4_4t5_20(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t5_20_4)

}

function get_svtrb_unknown_4_4t5_20_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t5_28(o) {
if(u32(o+0) !==1 ||u32(o+8) ||u32(o+12) ||u32(o+20) ||u32(o+24) ||f32(o+28) ||u32(o+44) ||u32(o+60) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)

// ä(svtrb_unknown_4_4t5_28, u32(o + 28), get_svtrb_unknown_4_4t5_28)
// globalThis.svtrb_unknown_4_4t5_28 = []

    // ö(u32(o + 4), get_svtrb_unknown_4_4t5_28_4)
    // ö(u32(o + 16), get_svtrb_unknown_4_4t5_28_16)
    // ö(u32(o + 36), get_svtrb_unknown_4_4t5_28_36)

}

function get_svtrb_unknown_4_4t5_28_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_unknown_4_4t5_28_4_0)

}

function get_svtrb_unknown_4_4t5_28_4_0(o) {
    if (u32(o + 0) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t5_28_4_0_4)

}

function get_svtrb_unknown_4_4t5_28_4_0_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t5_28_16(o) {
    if (u32(o + 0) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t5_28_16_4)

}

function get_svtrb_unknown_4_4t5_28_16_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t5_28_36(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t5_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_4t6(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_4t25(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_4t31(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_8t1(o) {
if(u32(o+28) ||u8(o+41) ||u32(o+44) ||u32(o+56) ||u32(o+60) )
ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, u32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

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
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_4_8t1_52t1(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_unknown_4_8t1_52t2(o) {
/*ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 12), get_svtrb_unknown_4_8t1_52t2_12)

}

function get_svtrb_unknown_4_8t1_52t2_12(o) {
if(u32(o+12) )
ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_8t1_52t3(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_8t2(o) {
    // if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 36) || u32(o + 44) || u32(o + 56) || u32(o + 60))
    ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, u32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 48), get_svtrb_unknown_4_8t2_48)
    // very long idk
    ö(u32(o + 52), get_svtrb_unknown_4_8t2_52)
    //this may be ????

}

function get_svtrb_unknown_4_8t2_48(o) {
    if (f32(o + 0) !== 90 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_8t2_52(o) {
    // if (f32(o + 0) !== 10 || u32(o + 4) || u32(o + 8))
    ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)

    ö(u32(o + 12), get_svtrb_unknown_4_8t2_52_12)

}

function get_svtrb_unknown_4_8t2_52_12(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 1 || f32(o + 8) !== 1 || u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_8t5(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_8t31(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_8t25(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_8t34(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_8t32(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_8t6(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_8t9(o) {
if(u8(o+0) ||u8(o+2) ||u8(o+3) ||u32(o+8) ||u32(o+12) )
ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)


ö(u32(o + 4), get_svtrb_unknown_4_8t9_4)

    }

function get_svtrb_unknown_4_8t9_4(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}


function get_svtrb_unknown_4_8t26(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface(o) {
    if (u8(o + 7) || u32(o + 40) || u32(o + 52) !== 1 || u32(o + 60) || u32(o + 76))
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
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 100), get_svtrb_interface_72)
    }

}
function get_svtrb_interface_44(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
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
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

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
    if (u32(o + 0) !== 513 || u32(o + 4) || u32(o + 8) !== 5 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
        ä(svtrb_interface, u32(o + 4), get_svtrb_interface)
        break
    case 0:
        ö(u32(o + 4), get_svtrb_interface_16_24_4t0)
        break
    case 3:
        ö(u32(o + 4), get_svtrb_interface_16_24_4t3)
        break
    case 11:
        ö(u32(o + 4), get_svtrb_interface_16_24_4t11)
        break
    case 31:
        ä(svtrb_interface, u32(o + 4), get_svtrb_interface)
        break
    case 48:
        ä(svtrb_interface, u32(o + 4), get_svtrb_interface)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }
    ö(u32(o + 8), get_svtrb_interface_16_24_8)

    ö(u32(o + 12), get_svtrb_interface_16_24_12)
    ä(svtrb_sound_controls, u32(o + 28), get_svtrb_sound_controls)

}

function get_svtrb_interface_16_24_4t0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_16_24_4t3(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
    case 1:
        ö(u32(o + 8), get_svtrb_interface_16_24_4t11_4_8t1)
        break
    case 0:
        ö(u32(o + 8), get_svtrb_interface_16_24_4t11_4_8t0)
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
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_16_24_4t11_4_8t1_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_16_24_4t11_4_8t0(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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

    ö(u32(o + 16), get_svtrb_sound_controls_16)

}

function get_svtrb_sound_controls_16(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

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
    case 5:
        ö(u32(o + 24), get_svtrb_interface_72_24t5)
        break
    case 6:
        ö(u32(o + 24), get_svtrb_interface_72_24t6)
        break
    case 7:
        ö(u32(o + 24), get_svtrb_interface_72_24t7)
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
    case 6:
        ö(u32(o + 4), get_svtrb_interface_72_8_8_4t6)
        break
    case 2:
        ö(u32(o + 4), get_svtrb_interface_72_8_8_4t2)
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
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
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
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28], o)

    ä(svtrb_interface_72_24t1_4, u32(o + 4), get_svtrb_interface_72_24t1_4)
    ö(u32(o + 8), get_svtrb_interface_72_24t1_8)
    switch (u8(o + 2)) {
    case 0:
        ä(svtrb_interface_72_24t1_12t0, u32(o + 12), get_svtrb_interface_72_24t1_12t0)
        break
    case 1:
        ä(svtrb_interface_72_24t1_12t1, u32(o + 12), get_svtrb_interface_72_24t1_12t1)
        break
    case 3:
        ö(u32(o + 12), get_svtrb_interface_72_24t1_12t3)
        break
    case 4:
        ö(u32(o + 12), get_svtrb_interface_72_24t1_12t4)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }

    ö(u32(o + 16), get_svtrb_interface_72_24t1_16)

}

function get_svtrb_interface_72_24t1_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_interface_72_24t1_4_0)

}

function get_svtrb_interface_72_24t1_4_0(o) {// console.log(get_string(o, 0, false))
}

function get_svtrb_interface_72_24t1_8(o) {
    if (u8(o + 9) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    // sü(u8, 8, o, 4)
    switch (u8(o + 8)) {
    case 1:
        for (let i = 0; i < u32(o); i++) {
            ö(u32(o + 4) + (i * 8), get_svtrb_interface_72_24t1_8_4t1)
        }
        break
    case 0:
        ö(u32(o + 4), get_svtrb_interface_72_24t1_8_4t0)
        break
    default:
        if (u32(o + 4)) {
            ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
        }
    }

}
function get_svtrb_interface_72_24t1_8_4t1(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4], o)

    ä(svtrb_interface_72_24t1_4, u32(o + 0), get_svtrb_interface_72_24t1_4)

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
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72_24t1_12t0(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) !== 1 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 0)

    ä(svtrb_interface_72_24t1_12t0_4, u32(o + 4), get_svtrb_interface_72_24t1_12t0_4)

    ö(u32(o + 28), get_svtrb_interface_72_24t1_12t0_28)
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_svtrb_interface_72_24t1_12t0_36)
    }

}

function get_svtrb_interface_72_24t1_12t0_4(o) {
    if (u32(o + 0) !== 65541 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 2), get_svtrb_interface_72_24t1_12t0_4_24)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 24), get_svtrb_interface_72_24t1_12t0_4_32)
    }
    ö(u32(o + 36), get_svtrb_interface_72_24t1_12t0_4_36)

}

function get_svtrb_interface_72_24t1_12t0_4_24(o) {/*ü(1, [u16, 0], o)*/
}
function get_svtrb_interface_72_24t1_12t0_4_32(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20], o)*/
}
function get_svtrb_interface_72_24t1_12t0_4_36(o) {
    if (u8(o + 6) !== 114)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28], o)
}

function get_svtrb_interface_72_24t1_12t0_28(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_24t1_12t0_36(o) {/*ü(1, [u32, 0, f32, 4, f32, 8], o)*/
}

function get_svtrb_interface_72_24t1_12t1(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_72_24t1_12t1_4)

}

function get_svtrb_interface_72_24t1_12t1_4(o) {
    if (u32(o + 16) || u32(o + 20) || f32(o + 24) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(svtrb_interface_72_24t1_12t0, u32(o + 12), get_svtrb_interface_72_24t1_12t0)
    ä(svtrb_interface_72_24t1_12t0, u32(o + 28), get_svtrb_interface_72_24t1_12t0)
    ä(svtrb_interface_72_24t1_12t0, u32(o + 32), get_svtrb_interface_72_24t1_12t0)

}

function get_svtrb_interface_72_24t1_12t3(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_interface_72_24t1_12t4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
function get_svtrb_interface_72_24t7(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    //prob just t6

    ö(u32(o + 0), get_svtrb_interface_72_24t7_0)

}

function get_svtrb_interface_72_24t7_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 204) || u32(o + 208) || u32(o + 212) || u32(o + 216) || u32(o + 220) || u32(o + 224) || u32(o + 228) || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u32(o + 280) || u32(o + 284))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284], o)

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
    if (u8(o + 4))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_32_20(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_svtrb_interface_72_32_20_8)

}

function get_svtrb_interface_72_32_20_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
    if (u32(o + 0) !== 513 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
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
    if (u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 28) || u32(o + 32) || u32(o + 36))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36], o)

    switch (u32(o + 0)) {
    case 1:
        ä(svtrb_interface, u32(o + 4), get_svtrb_interface)
        break
    case 11:
        ö(u32(o + 4), get_svtrb_interface_72_32_36_24_4t11)
        break
    case 769:
        ä(svtrb_interface, u32(o + 4), get_svtrb_interface)
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
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 4)) {
    case 0:
        ö(u32(o + 8), get_svtrb_interface_72_32_36_24_4t11_4_8t0)
        break
    case 1:
        ö(u32(o + 8), get_svtrb_interface_72_32_36_24_4t11_4_8t1)
        break
    case 3:
        ä(svtrb_sound_controls, u32(o + 8), get_svtrb_sound_controls)

        // ö(u32(o + ), get_svtrb_interface_72_32_36_24_4t11_4_8t3)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 4, o, 8)
        }
    }

    switch (u32(o + 4)) {
    case 1:
        ö(u32(o + 12), get_svtrb_interface_72_32_36_24_4t11_4_12t1)
        break
    case 0:
        // 7
        break
    default:
        if (u32(o + 12)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
function get_svtrb_interface_72_32_36_24_4t11_4_8t3(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72_32_36_24_4t11_4_12t1(o) {
    if (u32(o + 0) !== 131 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_72_32_36_24_4t11_4_12t1_4)

}

function get_svtrb_interface_72_32_36_24_4t11_4_12t1_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72_32_36_24_4t11_4_8_0t0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface_72_32_36_24_4t11_4_8_4t0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
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
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_52_12(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_52_20(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_52_28(o) {/*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)*/
}
function get_svtrb_interface_72_52_36(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u8, 24, u8, 25, u8, 26, u8, 27, f32, 28], o)*/
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
    ö(u32(o + 56), get_svtrb_interface_72_72_4_56)

}

function get_svtrb_interface_72_72_4_4(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16], o)
}
function get_svtrb_interface_72_72_4_12(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_72_4_20(o) {
    if (u32(o + 4) || u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_interface_72_72_4_28(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
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
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_svtrb_model_anims_1(o) {
    /*ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u8, 60, u8, 61, u8, 62, u8, 63], o)*/

    // ä(svtrb_model_anims_1, u32(o + 1), get_svtrb_model_anims_1)
    // globalThis.svtrb_model_anims_1 = []

    // ö(u32(o + 24), get_svtrb_model_anims_1_24)
    // ö(u32(o + 28), get_svtrb_model_anims_1_28)
    ö(u32(o + 32), get_svtrb_model_anims_1_32)
    // ö(u32(o + 36), get_svtrb_model_anims_1_36)
    // ö(u32(o + 44), get_svtrb_model_anims_1_44)
    if (old_log_array.p_offset.array.includes(o + 52 - offset_mid)) {
        ö(u32(o + 52), get_svtrb_model_anims_1_52)
    }

}
function get_svtrb_model_anims_1_24(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_anims_1_28(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_anims_1_32(o) {//8 - 484
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_anims_1_36(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_anims_1_44(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_anims_1_52(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32], o)*/
    // ü(3, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32], o)

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
    case 1:
        ö(u32(o + 4), get_svtrb_link_36_0_4_4_4t1)
        break
    case 0:
        ö(u32(o + 4), get_svtrb_link_36_0_4_4_4t0)
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
    case 1:
        ö(u32(o + 4), get_svtrb_link_36_0_4_20_4_4t1)
        break
    case 0:
        ö(u32(o + 4), get_svtrb_link_36_0_4_20_4_4t0)
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
    if (u32(o + 0) !== 6)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)

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
    // if (u8(o + 1) || u8(o + 2) !== 10 || u8(o + 3) || u8(o + 8) !== 255 || u8(o + 9) !== 255 || u8(o + 10) !== 127 || u8(o + 11) !== 127 || u32(o + 12) || u32(o + 28) || f32(o + 60) !== 1 || f32(o + 76) !== 1)
    //     ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76], o)

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

    // ö(u32(o + 4), get_svtrb_model_4)
    // for (let i = 0; i < u32(o + 16); i++) {
    //     ö(u32(o + 20) + (i * 8), get_svtrb_model_20)
    //     ö(u32(o + 24) + (i * 4), get_svtrb_model_24)
    // }

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
        // ö(u32(o + 0), get_svtrb_model_20_4_0tps2)
        break
    case "pc":
        ö(u32(o + 0), get_svtrb_model_20_4_0tpc)
        break
    }

}

function get_svtrb_model_20_4_0tpsp(o) {
    // if (u32(o + 4) || u8(o + 14) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u8(o + 50) !== 255 || u8(o + 51) !== 128 || u32(o + 64) || u8(o + 74) || u8(o + 75) || u8(o + 76) || u8(o + 77) || u8(o + 79) || u32(o + 100) || u32(o + 104) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124))
    //     ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79, f32, 80, f32, 84, f32, 88, f32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)
    // ß('p_texture', o, 40)

    if (old_log_array.p_offset.array.includes(o + 108 - offset_mid)) {/*
00	u32	0,2
04	u32	0
08	u8	0 - 255
09	u8	0 - 255
10	u8	0 - 255
11	u8	0 - 255
12	u8	0,1,2,3
13	u8	0 - 15
14	u8	0
15	u8	0
16	u32	1 - 1176
20	u32	0
24	u32	17,48,145,209,3120,3121,16432
28	u32	17,48,49,145,209,16432
32	u32	0
36	u32	0
40	u32	patch texture 0 - 3276840
44	u8	0 - 255
45	u8	0 - 255
46	u8	0 - 255
47	u8	60,90,107,122,127,128,130,145,255
48	u8	0,1
49	u8	0,6
50	u8	always 255
51	u8	always 128
52	u8	0 - 255
53	u8	0 - 255
54	u8	0,5,14,29,55,69,127,146,204,255
55	u8	0,60,127,255
56	u32	0 - 3528
60	u32	0,1
64	u32	0
68	u32	0,18,50
72	u8	32,34,128
73	u8	always 1
74	u8	0
75	u8	0
76	u8	0
77	u8	0
78	u8	0,4
79	u8	0
80	float	0,51
84	float	0,51
88	float	0,51
92	float	0,1,2,4,8,16,32
96	float	0,1,2,4,8,16
100	u32	0
104	u32	0
108	u32	offset 288 - 308960
112	u32	0
116	u32	0
120	u32	0
124	u32	0
*/
    // ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79, f32, 80, f32, 84, f32, 88, f32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)
    } else {
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79, f32, 80, f32, 84, f32, 88, f32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)
    }
    // ö(u32(o + 108), get_svtrb_model_20_4_0tpsp_108)

}

function get_svtrb_model_20_4_0tpsp_108(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_20_4_0tps2(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    //somtimes 80 / 96 ???
}
function get_svtrb_model_20_4_0tpc(o) {
    if (u32(o + 4) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u8(o + 50) !== 255 || u8(o + 51) !== 128 || u32(o + 72) || u32(o + 88) !== 1)
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)
    ß('p_texture', o, 40)

    ö(u32(o + 68), get_svtrb_model_20_4_0tpc_68)
    ö(u32(o + 76), get_svtrb_model_20_4_0tpc_76)
    ö(u32(o + 80), get_svtrb_model_20_4_0tpc_80)
    ö(u32(o + 84), get_svtrb_model_20_4_0tpc_84)
    ö(u32(o + 92), get_svtrb_model_20_4_0tpc_92)

}

function get_svtrb_model_20_4_0tpc_68(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//48,80,112,144,192,224,256,288,336,368,400,432,480,512,544,576,624,656,720,768,800,832,864,912,944,976,1008,1056,1088,1120,1152,1232,1264,1296,1344,1376,1440,1488,1520,1552,1584,1664,1696,1728,1776,1808,1840,1872,1952,1984,2016,2096,2160,2240,2272,2304,2384,2416,2448,2496,2592,2640,2672,2704,2736,2784,2816,2880,2960,3024,3072,3104,3168,3248,3312,3456,3536,3568,3600,3648,3680,3744,3888,3968,4032,4112,4256,4320,4400,4464,4544,4608,4656,4752,4832,4896,4976,5088,5120,5184,5264,5408,5472,5552,5616,5696,5840,5904,5952,6048,6272,6416,6448,6560,6624,6704,6736,6912,6992,7280,7424,7488,7568,7632,7712,7776,8032,8144,8208,8288,8352,8544,8576,9072,9152,9504,9648,9696,9728,9792,9936,10128,10224,10304,10656,10704,11024,11168,11744,11808,11952,12096,12176,12464,12672,13104,13184,13328,13472,13680,13824,13904,13968,14688,14912,15200,15408,15632,16064,16272,17360,19872,21024,22464,22864,23552,23760,23808,23840,24528,24992,31328,32832,33200,34064,34848,35136,39456,39680,42336,57024,74528,77904,86832,91952,134208,146880
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
function get_svtrb_model_20_4_0tpc_92(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// 16,32,48,64,80,96,112,128,144,352
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
if(u8(o+10) ||u8(o+11) )
ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)
}
