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
    globalThis.svtrb_car_0_32_0 = []
    globalThis.svtrb_car_0_36_52 = []
    globalThis.svtrb_interface_72_24t1_4 = []
    globalThis.svtrb_car_0_76_4_4 = []
    globalThis.svtrb_car_0_76_4_4_52 = []
    globalThis.svtrb_car_0_32_0_8_0 = []
    globalThis.svtrb_car_0_76_4_4_128 = []
    globalThis.svtrb_car_0_32_28_4_4_0 = []
    globalThis.svtrb_car_0_36_64_4_4_0 = []
    globalThis.svtrb_car_0_76_4_4_68_0 = []
    globalThis.svtrb_interface_72_24t1_12t1 = []
    globalThis.svtrb_interface_72_24t1_12t0 = []
    globalThis.svtrb_car_0_76_4_4_68_4 = []
    globalThis.svtrb_interface_72_24t1_12t0_4 = []
    globalThis.svtrb_interface_72_24t1_12t1_4_12 = []
    globalThis.svtrb_interface_72_24t1_8_4t1_0 = []
    globalThis.svtrb_car_0_40_12_8_8_8_12 = []
    globalThis.svtrb_car_0_36_64_4_4_0_8_0 = []

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
        // case 4:
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

    // for (let i = 0; i < u32(o + 48); i++) {
    //     get_svtrb_texture_anims(offset_mid + u32(o + 60) + (i * 12))
    // }
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
    // if (u32(o + 4) || u32(o + 8))
    ü(1, [u32, 0, u32, 4, u32, 8], o)

    // ö(u32(o + 0), get_svtrb_texture_anims_0)

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
    // if (u32(o + 0) !== 272 || u32(o + 48) || u32(o + 52) || u32(o + 72) || u32(o + 76) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 188) !== 3 || u32(o + 196) || u32(o + 200) || u32(o + 204) || u8(o + 208) !== 204 || u8(o + 209) !== 204 || u8(o + 210) !== 204 || u8(o + 211) !== 204 || u8(o + 212) !== 204 || u8(o + 213) !== 204 || u8(o + 214) !== 204 || u8(o + 215) !== 204 || u8(o + 216) !== 204 || u8(o + 217) !== 204 || u8(o + 218) !== 204 || u8(o + 219) !== 204 || u8(o + 220) !== 204 || u8(o + 221) !== 204 || u8(o + 222) !== 204 || u8(o + 223) !== 204 || u8(o + 224) !== 204 || u8(o + 225) !== 204 || u8(o + 226) !== 204 || u8(o + 227) !== 204 || u8(o + 228) !== 204 || u8(o + 229) !== 204 || u8(o + 230) !== 204 || u8(o + 231) !== 204 || u8(o + 232) !== 204 || u8(o + 233) !== 204 || u8(o + 234) !== 204 || u8(o + 235) !== 204 || u8(o + 236) !== 204 || u8(o + 237) !== 204 || u8(o + 238) !== 204 || u8(o + 239) !== 204 || u8(o + 240) !== 204 || u8(o + 241) !== 204 || u8(o + 242) !== 204 || u8(o + 243) !== 204 || u8(o + 244) !== 204 || u8(o + 245) !== 204 || u8(o + 246) !== 204 || u8(o + 247) !== 204 || u8(o + 248) !== 204 || u8(o + 249) !== 204 || u8(o + 250) !== 204 || u8(o + 251) !== 204 || u8(o + 252) !== 204 || u8(o + 253) !== 204 || u8(o + 254) !== 204 || u8(o + 255) !== 204 || u8(o + 256) !== 204 || u8(o + 257) !== 204 || u8(o + 258) !== 204 || u8(o + 259) !== 204 || u8(o + 260) !== 204 || u8(o + 261) !== 204 || u8(o + 262) !== 204 || u8(o + 263) !== 204 || u8(o + 264) !== 204 || u8(o + 265) !== 204 || u8(o + 266) !== 204 || u8(o + 267) !== 204 || u8(o + 268) !== 204 || u8(o + 269) !== 204 || u8(o + 270) !== 204 || u8(o + 271) !== 204)
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u8, 224, u8, 225, u8, 226, u8, 227, u8, 228, u8, 229, u8, 230, u8, 231, u8, 232, u8, 233, u8, 234, u8, 235, u8, 236, u8, 237, u8, 238, u8, 239, u32, 240, u8, 244, u8, 245, u8, 246, u8, 247, u8, 248, u8, 249, u8, 250, u8, 251, u8, 252, u8, 253, u8, 254, u8, 255, u8, 256, u8, 257, u8, 258, u8, 259, u8, 260, u8, 261, u8, 262, u8, 263, u8, 264, u8, 265, u8, 266, u8, 267, u8, 268, u8, 269, u8, 270, u8, 271, u8, 272, u8, 273, u8, 274, u8, 275, u8, 276, u8, 277, u8, 278, u8, 279, u8, 280, u8, 281, u8, 282, u8, 283, f32, 284, ], o)

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
        ö(u32(o), get_svtrb_car)
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
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u8(o + 12) !== 255 || u8(o + 13) !== 255 || u8(o + 14) !== 255 || u8(o + 15) !== 255 || u8(o + 16) !== 255 || u8(o + 17) !== 255 || u8(o + 18) !== 255 || u8(o + 19) !== 255 || u32(o + 20) || u32(o + 24) || u32(o + 52) !== 11 || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 92) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)

    ä(svtrb_model_anims_2, u32(o + 28), get_svtrb_model_anims_2)
    ö(u32(o + 32), get_svtrb_car_0_32)
    ö(u32(o + 36), get_svtrb_car_0_36)
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
    ö(u32(o + 96), get_svtrb_car_0_96)

}

function get_svtrb_car_0_32(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_car_0_32_0, u32(o + 0), get_svtrb_car_0_32_0)

    ö(u32(o + 4), get_svtrb_car_0_32_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_svtrb_car_0_32_12)
    }

    ö(u32(o + 28), get_svtrb_car_0_32_28)

}

function get_svtrb_car_0_32_0(o) {
    if (f32(o + 16) !== 30 || u32(o + 20) || u32(o + 24) || u32(o + 40))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_svtrb_car_0_32_0_4)
    ö(u32(o + 8), get_svtrb_car_0_32_0_8)
    ä(svtrb_model_anims_1, u32(o + 12), get_svtrb_model_anims_1)

    ö(u32(o + 32), get_svtrb_car_0_32_0_32)
    ö(u32(o + 36), get_svtrb_car_0_32_0_36)
    ö(u32(o + 44), get_svtrb_car_0_32_0_44)

}

function get_svtrb_car_0_32_0_4(o) {// console.log(get_string(o, 0, false))
}
function get_svtrb_car_0_32_0_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(svtrb_model_anims_2, u32(o + 0), get_svtrb_model_anims_2)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_svtrb_car_0_32_0_8_16)
    }

}

function get_svtrb_car_0_32_0_8_16(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/
    ß('p_model', o, 0)

}

function get_svtrb_car_0_32_0_32(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 24 || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_32_0_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_32_0_44(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
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
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

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

    ä(svtrb_car_0_32_0, u32(o + 0), get_svtrb_car_0_32_0)

}

function get_svtrb_car_0_36(o) {
    if (u32(o + 0) || u8(o + 4) !== 255 || u8(o + 5) !== 255 || u8(o + 6) !== 255 || u8(o + 7) !== 255 || u8(o + 12) !== 255 || u8(o + 13) !== 255 || u8(o + 14) !== 255 || u8(o + 15) !== 255 || u8(o + 16) !== 255 || u8(o + 17) !== 255 || u8(o + 18) !== 255 || u8(o + 19) !== 255 || u8(o + 20) !== 255 || u8(o + 21) !== 255 || u8(o + 22) !== 255 || u8(o + 23) !== 255 || u8(o + 24) !== 255 || u8(o + 25) !== 255 || u8(o + 26) !== 255 || u8(o + 27) !== 255 || u8(o + 28) !== 255 || u8(o + 29) !== 255 || u8(o + 30) !== 255 || u8(o + 31) !== 255 || u8(o + 32) !== 255 || u8(o + 33) !== 255 || u8(o + 34) !== 255 || u8(o + 35) !== 255 || u8(o + 36) !== 255 || u8(o + 37) !== 255 || u8(o + 38) !== 255 || u8(o + 39) !== 255 || u8(o + 40) !== 255 || u8(o + 41) !== 255 || u8(o + 42) !== 255 || u8(o + 43) !== 255 || u8(o + 44) !== 255 || u8(o + 45) !== 255 || u8(o + 46) !== 255 || u8(o + 47) !== 255 || u32(o + 48) || u32(o + 76))
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
    if (u32(o + 8) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_svtrb_car_0_36_64_4_4)
    }

}

function get_svtrb_car_0_36_64_4_4(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ä(svtrb_car_0_36_64_4_4_0, u32(o + 0), get_svtrb_car_0_36_64_4_4_0)
    //model 1

}

function get_svtrb_car_0_36_64_4_4_0(o) {
    if (f32(o + 16) !== 30 || u32(o + 20) || u32(o + 24) || u32(o + 28) !== 65792 || u32(o + 32) || u32(o + 40))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    // ä(svtrb_car_0_36_64_4_4_0, u32(o + 0), get_svtrb_car_0_36_64_4_4_0)
    // globalThis.svtrb_car_0_36_64_4_4_0 = []

    ö(u32(o + 4), get_svtrb_car_0_36_64_4_4_0_4)
    ö(u32(o + 8), get_svtrb_car_0_36_64_4_4_0_8)
    ä(svtrb_model_anims_1, u32(o + 12), get_svtrb_model_anims_1)

    ö(u32(o + 36), get_svtrb_car_0_36_64_4_4_0_36)
    ö(u32(o + 44), get_svtrb_car_0_36_64_4_4_0_44)

}

function get_svtrb_car_0_36_64_4_4_0_4(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// console.log(get_string(o, 0, false))
}
function get_svtrb_car_0_36_64_4_4_0_8(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 0), get_svtrb_car_0_36_64_4_4_0_8_0)
    ä(svtrb_car_0_36_64_4_4_0_8_0, u32(o + 0), get_svtrb_car_0_36_64_4_4_0_8_0)
    ö(u32(o + 8), get_svtrb_car_0_36_64_4_4_0_8_8)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_svtrb_car_0_36_64_4_4_0_8_16)
    }

}

function get_svtrb_car_0_36_64_4_4_0_8_0(o) {
    ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_svtrb_car_0_36_64_4_4_0_8_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_model', o, 0)
}
function get_svtrb_car_0_36_64_4_4_0_8_16(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/
    ß('p_model', o, 0)

}

function get_svtrb_car_0_36_64_4_4_0_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_36_64_4_4_0_44(o) {
    if (f32(o + 0) !== -0.5 || u32(o + 4) || f32(o + 8) !== -0.5 || u32(o + 12) || f32(o + 16) !== 0.5 || f32(o + 20) !== 1 || f32(o + 24) !== 0.5 || u32(o + 28) || f32(o + 32) !== 0.5 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_svtrb_car_0_36_72(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_mysterious)

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
    if (u32(o + 4) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_svtrb_car_0_40_12_8_8_0)
    ö(u32(o + 8), get_svtrb_car_0_40_12_8_8_8)

}

function get_svtrb_car_0_40_12_8_8_0(o) {
    if (u32(o + 0) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_0_40_12_8_8_0_4)
    ö(u32(o + 12), get_svtrb_car_0_40_12_8_8_0_12)

}

function get_svtrb_car_0_40_12_8_8_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_40_12_8_8_0_12(o) {
    if (u8(o + 0) !== 182 || u8(o + 1) !== 111 || u8(o + 2) !== 154 || u8(o + 3) !== 18 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_40_12_8_8_8(o) {
    if (f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_svtrb_car_0_40_12_8_8_8_8)
    // ö(u32(o + 12), get_svtrb_car_0_40_12_8_8_8_12)
    ä(svtrb_car_0_40_12_8_8_8_12, u32(o + 12), get_svtrb_car_0_40_12_8_8_8_12)

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
    case 2:
        ö(u32(o + 4), get_svtrb_mysterious_4t2)
        break
    case 3:
        ö(u32(o + 4), get_svtrb_mysterious_4t3)
        break
    case 5:
        ö(u32(o + 4), get_svtrb_mysterious_4t5)
        break
    case 6:
        ö(u32(o + 4), get_svtrb_mysterious_4t6)
        break
    case 7:
        ö(u32(o + 4), get_svtrb_mysterious_4t7)
        break
    case 8:
        ö(u32(o + 4), get_svtrb_mysterious_4t8)
        break
    case 9:
        ö(u32(o + 4), get_svtrb_mysterious_4t9)
        break
    case 11:
        ö(u32(o + 4), get_svtrb_mysterious_4t11)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

    // ö(u32(o + 4), get_svtrb_mysterious_4)
    ö(u32(o + 8), get_svtrb_mysterious_8)

}

function get_svtrb_mysterious_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t2(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t11(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t3(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t5(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t7(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t9(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t6(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_mysterious_4t8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_mysterious_8(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_svtrb_car_0_76(o) {
    if (u32(o + 0) !== 3 || u32(o + 8) !== 1 || u32(o + 16) !== 1 || u32(o + 24) !== 1)
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
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u8(o + 4) !== 255 || u8(o + 5) !== 255 || u8(o + 6) !== 255 || u8(o + 7) !== 255 || u8(o + 8) !== 255 || u8(o + 9) !== 255 || u8(o + 10) !== 255 || u8(o + 11) !== 255 || u8(o + 12) !== 255 || u8(o + 13) !== 255 || u8(o + 14) !== 255 || u8(o + 15) !== 255 || u8(o + 16) !== 255 || u8(o + 17) !== 255 || u8(o + 18) !== 255 || u8(o + 19) !== 255 || u8(o + 20) !== 255 || u8(o + 21) !== 255 || u8(o + 22) !== 255 || u8(o + 23) !== 255 || u8(o + 24) !== 255 || u8(o + 25) !== 255 || u8(o + 26) !== 255 || u8(o + 27) !== 255 || u8(o + 28) !== 255 || u8(o + 29) !== 255 || u8(o + 30) !== 255 || u8(o + 31) !== 255 || u8(o + 32) !== 255 || u8(o + 33) !== 255 || u8(o + 34) !== 255 || u8(o + 35) !== 255 || u8(o + 36) !== 255 || u8(o + 37) !== 255 || u8(o + 38) !== 255 || u8(o + 39) !== 255 || u8(o + 40) !== 255 || u8(o + 41) !== 255 || u8(o + 42) !== 255 || u8(o + 43) !== 255 || u32(o + 44) || u32(o + 48) !== 256 || u32(o + 60) || u32(o + 64) !== 1 || u32(o + 76) || u32(o + 80) || u8(o + 84) || u8(o + 85) !== 148 || u8(o + 86) !== 53 || u8(o + 87) !== 119 || u32(o + 88) || u32(o + 92) !== 16843009 || u32(o + 104) || u32(o + 108) || f32(o + 124) !== 5 || u32(o + 132) || u32(o + 136) || u32(o + 140))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, f32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ä(svtrb_model_anims_2, u32(o + 52), get_svtrb_model_anims_2)
    ö(u32(o + 56), get_svtrb_car_0_76_4_4_56)
    ö(u32(o + 68), get_svtrb_car_0_76_4_4_68)
    ä(svtrb_unknown, u32(o + 72), get_svtrb_unknown)
    for (let i = 0; i < u32(o + 96); i++) {
        ö(u32(o + 100) + (i * 32), get_svtrb_car_0_76_4_4_100)
    }
    ä(svtrb_interface, u32(o + 112), get_svtrb_interface)

    ä(svtrb_car_0_76_4_4_128, u32(o + 128), get_svtrb_car_0_76_4_4_128)

}

function get_svtrb_car_0_76_4_4_56(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_76_4_4_68(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    // ä(svtrb_car_0_76_4_4_68_0, u32(o + ), get_svtrb_car_0_76_4_4_68_0)
    ä(svtrb_unknown_4_4t2, u32(o + 0), get_svtrb_unknown_4_4t2)
    //t2
    // ä(svtrb_car_0_76_4_4_68_4, u32(o + ), get_svtrb_car_0_76_4_4_68_4)
    ä(svtrb_unknown, u32(o + 4), get_svtrb_unknown)

    //unkno

}

function get_svtrb_car_0_76_4_4_68_0(o) {
    if (u32(o + 4) || u32(o + 12) || f32(o + 16) !== 4000 || u32(o + 20) || f32(o + 24) !== 1500 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) !== 5 || u32(o + 44) || u32(o + 48) || u32(o + 52) !== 750 || u32(o + 56) || f32(o + 60) !== -1 || f32(o + 64) !== 1 || u32(o + 68) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || f32(o + 96) !== 0.4000000059604645 || u32(o + 108) !== 12 || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 132) !== 3 || u32(o + 140) !== 1 || u32(o + 148) || u32(o + 152) || u32(o + 156))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, f32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156], o)

    ö(u32(o + 8), get_svtrb_car_0_76_4_4_68_0_8)
    ö(u32(o + 92), get_svtrb_car_0_76_4_4_68_0_92)
    // ö(u32(o + ), get_svtrb_car_0_76_4_4_68_0_100) //unkn
    ä(svtrb_unknown, u32(o + 100), get_svtrb_unknown)

    ö(u32(o + 104), get_svtrb_car_0_76_4_4_68_0_104)
    for (let i = 0; i < u32(o + 108); i++) {
        ö(u32(o + 112) + (i * 20), get_svtrb_car_0_76_4_4_68_0_112)
    }
    ö(u32(o + 128), get_svtrb_car_0_76_4_4_68_0_128)
    for (let i = 0; i < u32(o + 132); i++) {
        ö(u32(o + 136) + (i * 64), get_svtrb_mysterious)
        // ö(u32(o + 136) + (i * 64), get_svtrb_car_0_76_4_4_68_0_136)
    }
    ö(u32(o + 144), get_svtrb_car_0_76_4_4_68_0_144)

}

function get_svtrb_car_0_76_4_4_68_0_8(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_0_76_4_4_68_0_8_4)

}

function get_svtrb_car_0_76_4_4_68_0_8_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76_4_4_68_0_92(o) {
    if (f32(o + 0) !== 10 || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_0_76_4_4_68_0_92_4)
    ö(u32(o + 8), get_svtrb_car_0_76_4_4_68_0_92_8)

}

function get_svtrb_car_0_76_4_4_68_0_92_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_76_4_4_68_0_92_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76_4_4_68_0_100(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_svtrb_car_0_76_4_4_68_0_104(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_car_0_76_4_4_68_0_104_0)

}

function get_svtrb_car_0_76_4_4_68_0_104_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76_4_4_68_0_112(o) {
    if (u32(o + 4) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)

    ö(u32(o + 0), get_svtrb_car_0_76_4_4_68_0_112_0)
    ö(u32(o + 8), get_svtrb_car_0_76_4_4_68_0_112_8)

}

function get_svtrb_car_0_76_4_4_68_0_112_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_76_4_4_68_0_112_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76_4_4_68_0_128(o) {
    if (u32(o + 4) !== 1281 || f32(o + 8) !== 1 || u32(o + 12) || u32(o + 16) !== 1000 || u32(o + 20) !== 1000 || f32(o + 28) !== 100)
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28], o)
    ß('p_texture', o, 0)

    ö(u32(o + 24), get_svtrb_car_0_76_4_4_68_0_128_24)

}

function get_svtrb_car_0_76_4_4_68_0_128_24(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76_4_4_68_0_136(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_svtrb_car_0_76_4_4_68_0_144(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_svtrb_car_0_76_4_4_68_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_svtrb_car_0_76_4_4_68_4_4)
    }

}

function get_svtrb_car_0_76_4_4_68_4_4(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76_4_4_100(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_svtrb_car_0_76_4_4_128(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || f32(o + 12) !== 1000 || u32(o + 16) !== 257 || u32(o + 20) || u32(o + 32) !== 1 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_svtrb_car_0_76_4_4_128_4)
    ö(u32(o + 24), get_svtrb_car_0_76_4_4_128_24)
    ö(u32(o + 28), get_svtrb_car_0_76_4_4_128_28)
    ö(u32(o + 36), get_svtrb_car_0_76_4_4_128_36)

}

function get_svtrb_car_0_76_4_4_128_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_0_76_4_4_128_4_4)

}

function get_svtrb_car_0_76_4_4_128_4_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76_4_4_128_24(o) {
    if (u32(o + 0) !== 20 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_76_4_4_128_28(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_0_76_4_4_128_28_4)

}

function get_svtrb_car_0_76_4_4_128_28_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76_4_4_128_36(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_car_0_76_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_car_0_76_20(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_car_0_76_20_4)

}

function get_svtrb_car_0_76_20_4(o) {
    if (f32(o + 0) !== 11 || f32(o + 4) !== 2.3694278276172396e-38 || f32(o + 8) !== 1 || f32(o + 12) !== 22 || f32(o + 16) !== 0.0010000000474974513 || f32(o + 20) !== 1 || u32(o + 40) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60))
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
    if (f32(o + 0) !== 0.949999988079071 || f32(o + 4) !== 1.75 || f32(o + 8) !== 3 || f32(o + 12) !== 1.25 || f32(o + 16) !== 0.949999988079071 || f32(o + 20) !== 1.75 || f32(o + 24) !== 3 || f32(o + 28) !== 1.25 || f32(o + 32) !== 2.3499999046325684 || f32(o + 36) !== 1.5499999523162842 || f32(o + 40) !== 3 || f32(o + 44) !== 2)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44], o)
}
function get_svtrb_car_0_76_28_16(o) {
    if (f32(o + 4) !== 40 || f32(o + 8) !== 22 || u8(o + 16) !== 40 || u8(o + 17) !== 107 || u8(o + 18) !== 238 || u8(o + 19) !== 78 || f32(o + 20) !== 1 || f32(o + 28) !== 122.5999984741211 || f32(o + 32) !== 1.2000000476837158 || f32(o + 36) !== 1.2000000476837158 || f32(o + 40) !== 0.5 || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60], o)
}
function get_svtrb_car_0_76_28_20(o) {
    if (f32(o + 4) !== 6.900000095367432 || f32(o + 8) !== 2.5 || f32(o + 12) !== 2.75 || f32(o + 16) !== 1.25 || f32(o + 20) !== 7.5 || f32(o + 24) !== 11.5 || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_svtrb_car_0_80(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_svtrb_car_0_84(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
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
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(svtrb_unknown, u32(o + 0), get_svtrb_unknown)

}

function get_svtrb_unknown(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_svtrb_unknown_4)
    }
    //unknown ?
}

function get_svtrb_unknown_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 0)) {
    case 26:
        ö(u32(o + 4), get_svtrb_unknown_4_4t26)
        break
    case 1:
        ö(u32(o + 4), get_svtrb_unknown_4_4t1)
        break
    case 2:
        ä(svtrb_unknown_4_4t2, u32(o + 4), get_svtrb_unknown_4_4t2)
        // ö(u32(o + 4), get_svtrb_unknown_4_4t2)
        break
    case 5:
        ö(u32(o + 4), get_svtrb_unknown_4_4t5)
        break
    case 9:
        ä(svtrb_sound_section, u32(o + 4), get_svtrb_sound_section)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

    switch (u32(o + 0)) {
    case 26:
        ö(u32(o + 8), get_svtrb_unknown_4_8t26)
        break
    case 1:
        ö(u32(o + 8), get_svtrb_unknown_4_8t1)
        break
    case 2:
        ö(u32(o + 8), get_svtrb_unknown_4_8t2)
        break
    case 5:
        ö(u32(o + 8), get_svtrb_unknown_4_8t5)
        break
    case 9:
        ö(u32(o + 8), get_svtrb_unknown_4_8t9)
        break

    default:
        if (u32(o + 8)) {
            sü(u32, 0, o, 8)
        }
    }

}
function get_svtrb_unknown_4_4t1(o) {
    if (u8(o + 1) !== 10 || u8(o + 2) || u8(o + 3) || u32(o + 12) || f32(o + 16) !== 3000 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    sü(u8, 0, o, 4)
    // ö(u32(o + 4), get_svtrb_unknown_4_4t1_4)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_svtrb_unknown_4_4t1_24)
    }

}

function get_svtrb_unknown_4_4t1_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 1000 || f32(o + 24) !== 500 || f32(o + 28) !== 1 || f32(o + 32) !== 2 || f32(o + 36) !== 4.203895392974451e-45 || u32(o + 44) || u32(o + 48) || u32(o + 52) !== 1 || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t1_4_4)
    // ö(u32(o + 40), get_svtrb_unknown_4_4t1_4_40) //based on some type
    if (old_log_array.p_offset.array.includes(o + 40 - offset_mid)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    }

    // ö(u32(o + 44), get_svtrb_unknown_4_4t1_4_44) ..type 32 / 48
    ö(u32(o + 56), get_svtrb_unknown_4_4t1_4_56)

}

function get_svtrb_unknown_4_4t1_4_4(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_svtrb_unknown_4_4t1_4_40(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_4t1_4_44(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_4t1_4_56(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_svtrb_unknown_4_4t1_24(o) {
    // if(u32(o+4) )
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}

function get_svtrb_unknown_4_4t2(o) {
    if (u8(o + 2) !== 1 || u8(o + 3) || u32(o + 4) || u32(o + 12) || u32(o + 20) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 44) || u32(o + 48) || f32(o + 60) !== -1 || f32(o + 64) !== 1 || u32(o + 68) || u32(o + 80) || u32(o + 84) || u32(o + 88) || f32(o + 96) !== 0.4000000059604645 || u32(o + 120) || u32(o + 124) || u32(o + 148) || u32(o + 152) || u32(o + 156))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, f32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156], o)

    ö(u32(o + 8), get_svtrb_unknown_4_4t2_8)

    ö(u32(o + 92), get_svtrb_unknown_4_4t2_92)
    ö(u32(o + 100), get_svtrb_unknown_4_4t2_100)
    ö(u32(o + 104), get_svtrb_unknown_4_4t2_104)
    ö(u32(o + 112), get_svtrb_unknown_4_4t2_112)
    ä(svtrb_unknown, u32(o + 116), get_svtrb_unknown)
    // ö(u32(o + ), get_svtrb_unknown_4_4t2_116) // unknown
    ö(u32(o + 128), get_svtrb_unknown_4_4t2_128)
    for (let i = 0; i < u32(o + 132); i++) {
        ö(u32(o + 136) + (i * 64), get_svtrb_mysterious)
        // ö(u32(o + ) + (i * 64), get_svtrb_unknown_4_4t2_136)
    }
    ö(u32(o + 144), get_svtrb_unknown_4_4t2_144)

}

function get_svtrb_unknown_4_4t2_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_4t2_100(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_4t2_112(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_4t2_128(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_4t2_144(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_unknown_4_4t2_92_8_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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

function get_svtrb_unknown_4_4t2_116(o) {
    if (u32(o + 0) !== 5 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t2_116_4)

}

function get_svtrb_unknown_4_4t2_116_4(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
}

function get_svtrb_unknown_4_4t2_136(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    //mysterious maybe
    // ö(u32(o + 4), get_svtrb_unknown_4_4t2_136_4)

}

function get_svtrb_unknown_4_4t2_136_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t5(o) {
    // if (u32(o + 0) !== 16843009 || u32(o + 8) !== 500 || u32(o + 16) !== 500 || u32(o + 24) !== 500 || u32(o + 32) !== 1 || u32(o + 40) || u32(o + 44))
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t5_4)
    ö(u32(o + 12), get_svtrb_unknown_4_4t5_12)
    ö(u32(o + 20), get_svtrb_unknown_4_4t5_20)
    ö(u32(o + 28), get_svtrb_unknown_4_4t5_28)
    ö(u32(o + 36), get_svtrb_unknown_4_4t5_36)

}

function get_svtrb_unknown_4_4t5_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 16), get_svtrb_unknown_4_4t5_4_16)

}

function get_svtrb_unknown_4_4t5_4_16(o) {
    if (u8(o + 0) !== 9 || u8(o + 1) !== 147 || u8(o + 2) !== 14 || u8(o + 3) !== 30 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
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
    if (f32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t5_28(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || f32(o + 28) || u32(o + 32) !== 2 || u32(o + 40) !== 250 || u32(o + 44) || u32(o + 48) !== 100 || u32(o + 52) || u32(o + 56) !== 180 || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28, u32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t5_28_4)
    ö(u32(o + 16), get_svtrb_unknown_4_4t5_28_16)
    ö(u32(o + 36), get_svtrb_unknown_4_4t5_28_36)

}

function get_svtrb_unknown_4_4t5_28_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_svtrb_unknown_4_4t5_28_4_0)

}

function get_svtrb_unknown_4_4t5_28_4_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t5_28_16(o) {
    if (u32(o + 0) !== 2 || u32(o + 8) !== 250 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_unknown_4_4t5_28_16_4)

}

function get_svtrb_unknown_4_4t5_28_16_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t5_28_36(o) {
    if (u32(o + 0) !== 100 || u32(o + 4) || u32(o + 8) !== 180 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t5_36(o) {
    // if (u32(o + 0) || f32(o + 4) !== 500 || u32(o + 8) || u32(o + 12))
    ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_4t26(o) {
    if (u32(o + 0) !== 2000 || u32(o + 4) || u32(o + 8) !== 1 || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 16), get_svtrb_unknown_4_4t26_16)

}

function get_svtrb_unknown_4_4t26_16(o) {
    // if (u32(o + 0) !== 5 || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_unknown_4_4t26_16_4)
    }

}

function get_svtrb_unknown_4_4t26_16_4(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_svtrb_unknown_4_4t26_16_4_0)

}

function get_svtrb_unknown_4_4t26_16_4_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_8t1(o) {
    // if (u32(o + 4) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 36) || u32(o + 44) || u32(o + 48) || u32(o + 56) || u32(o + 60))
    ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 52), get_svtrb_unknown_4_8t1_52)

}

function get_svtrb_unknown_4_8t1_52(o) {
    // if (u32(o + 4) || u32(o + 8))
    ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)

    ö(u32(o + 12), get_svtrb_unknown_4_8t1_52_12)

}

function get_svtrb_unknown_4_8t1_52_12(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 1 || f32(o + 8) !== 1 || u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_8t2(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 36) || u32(o + 44) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

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
    if (f32(o + 0) !== 10 || u32(o + 4) || u32(o + 8))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

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
function get_svtrb_unknown_4_8t9(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_unknown_4_8t26(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_interface(o) {
    if (u8(o + 7) || u32(o + 40) || u32(o + 52) !== 1 || u32(o + 60) || f32(o + 64) !== 1 || u32(o + 76))
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
    if (u32(o + 12) || u32(o + 28))
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
    case 6:
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

function get_svtrb_interface_72_20(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
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
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_svtrb_interface_72_24t1_8_4t0_4)

}

function get_svtrb_interface_72_24t1_8_4t0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
    if (u32(o + 8) !== 1 || u32(o + 12))
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
    if (u32(o + 4) !== 2 || u32(o + 16) || u32(o + 20) || u32(o + 44) !== 7 || u32(o + 52) !== 3 || u32(o + 60))
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
    if (u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
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

function get_svtrb_model_anims_1(o) {
    if (u32(o + 0) !== 5 || u32(o + 4) !== 291)
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u8, 60, u8, 61, u8, 62, u8, 63], o)

    ö(u32(o + 32), get_svtrb_model_anims_1_32)

    if (old_log_array.p_offset.array.includes(o + 52 - offset_mid)) {
        ö(u32(o + 52), get_svtrb_model_anims_1_52)
    }

}
function get_svtrb_model_anims_1_32(o) {//8 - 484
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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

    // ö(u32(o + 16), get_svtrb_model_anims_1_52_16)
    // ö(u32(o + 20), get_svtrb_model_anims_1_52_20)
    // ö(u32(o + 24), get_svtrb_model_anims_1_52_24)
    // ö(u32(o + 28), get_svtrb_model_anims_1_52_28)
    // ö(u32(o + 32), get_svtrb_model_anims_1_52_32)

}

function get_svtrb_model_anims_1_52_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_anims_1_52_16(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_anims_1_52_20(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_anims_1_52_24(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_anims_1_52_28(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_svtrb_model_anims_1_52_32(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_anims_2(o) {
    if (u32(o + 8) !== 1 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
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
    if (u8(o + 1) || u8(o + 2) !== 10 || u8(o + 3) || u8(o + 8) !== 255 || u8(o + 9) !== 255 || u8(o + 10) !== 127 || u8(o + 11) !== 127 || u32(o + 12) || u32(o + 28) || f32(o + 60) !== 1 || f32(o + 76) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76], o)

    // ö(u32(o + 4), get_svtrb_model_4)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 8), get_svtrb_model_20)
        ö(u32(o + 24) + (i * 4), get_svtrb_model_24)
    }

}

function get_svtrb_model_4(o) {// ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, f32, 88, f32, 92, f32, 96, f32, 100, f32, 104, f32, 108, f32, 112, ], o)
//maybe string ??? / 112,128,144 bytes
}
function get_svtrb_model_20(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_svtrb_model_20_4)
    }

}

function get_svtrb_model_20_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_svtrb_model_24(o) {/*ü(1, [f32, 0], o)*/
}

function get_svtrb_texture_anims_0(o) {// if (u32(o + 0) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
//     ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

}
