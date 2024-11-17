function get_x_pmwr_ps2demo() {

    globalThis.offset_mid = undefined

    for (let i = 0; i < u32(12); i++) {
        get_pmwr_ps2demo_directory(16 + (i * 24), 16 + (u32(12) * 24))
    }
}
function get_pmwr_ps2demo_directory(o, end_offset) {
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
    // if(u32(o+0) !==33620128 ||u32(o+4) !==67174575 ||u32(o+8) !==249 )
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    globalThis.pmwr_ps2demo_interface = []
    globalThis.pmwr_ps2demo_text = []
    globalThis.pmwr_ps2demo_font = []
    globalThis.pmwr_ps2demo_unknown_4_4t1 = []
    globalThis.pmwr_ps2demo_sound_controls = []
    globalThis.pmwr_ps2demo_sound_section = []
    globalThis.pmwr_ps2demo_unknown = []
    globalThis.pmwr_ps2demo_model = []
    globalThis.pmwr_ps2demo_model_anims_1 = []
    globalThis.pmwr_ps2demo_model_anims_2 = []
    globalThis.pmwr_ps2demo_unknown_4_4t2 = []
    globalThis.pmwr_ps2demo_world_12 = []
    globalThis.pmwr_ps2demo_interface_72_24t15_0 = []
    globalThis.pmwr_ps2demo_interface_72_24t3_4_0 = []
    globalThis.pmwr_ps2demo_interface_72_24t3_4_0_8 = []
    globalThis.pmwr_ps2demo_model_8 = []
    globalThis.pmwr_ps2demo_car_0_156_0_16_12_4_4t2 = []
    globalThis.pmwr_ps2demo_car_0_156_4_84 = []
    globalThis.pmwr_ps2demo_strange = []
    globalThis.pmwr_ps2demo_mysterious_4t9 = []
    globalThis.pmwr_ps2demo_unknown_4_4t31_232_4_4t0_4 = []
    globalThis.pmwr_ps2demo_world_0_32_48 = []
    globalThis.pmwr_ps2demo_world_4_16_12_0 = []
    globalThis.pmwr_ps2demo_world_4_16_12_0_76t8_4 = []
    globalThis.pmwr_ps2demo_world_4_16_12_0_76t8_8 = []
    globalThis.pmwr_ps2demo_world_20 = []
    globalThis.pmwr_ps2demo_world_20_40 = []
    globalThis.pmwr_ps2demo_world_116 = []
    globalThis.pmwr_ps2demo_world_116_64 = []
    globalThis.pmwr_ps2demo_world_124 = []
    globalThis.pmwr_ps2demo_world_124_64 = []
    globalThis.pmwr_ps2demo_world_132 = []
    globalThis.pmwr_ps2demo_world_132_56 = []
    globalThis.pmwr_ps2demo_world_44 = []
    globalThis.pmwr_ps2demo_unknown_4_4t31 = []
    globalThis.pmwr_ps2demo_world_224_0 = []
    globalThis.pmwr_ps2demo_world_132_56_20t15_4_4_0 = []
    globalThis.pmwr_ps2demo_unknown_4_4t5_28_4_0 = []
    globalThis.pmwr_ps2demo_world_132_56_20t15_12 = []
    globalThis.pmwr_ps2demo_world_192_4_0 = []

    director_offset = o
    g.type = u32(o + 4)
    g.datapack_end = u32(director_offset + 16) + u32(director_offset + 20) + end_offset

    if (u32(o + 0) !== 249 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)

    /*
0 = car
1 = interface
3 = link [f]
4 = world
8 = share
    */

    switch (g.type) {
    case 0:
        // case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 8:
    case 9:
    case 10:
        return
        break
    }

    switch (g.type) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 8:
    case 9:
    case 10:
        get_pmwr_ps2demo_datapack(end_offset + u32(o + 20))
        break
    }

    print_logarray(log_array)

}

function get_pmwr_ps2demo_datapack(o) {
    if (u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 84) || u32(o + 88) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 116))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], o)

    let end_datapack = o + 120
    end_datapack = divisible(end_datapack, 2048)
    // console.log("sound list",end_datapack)
    if (u32(o + 8) || u32(o + 4)) {
        end_datapack += divisible(u32(o + 8) * 4, 32)
        // console.log("after sound list",end_datapack)
        end_datapack += u32(o + 4)
        end_datapack = divisible(end_datapack, 2048)
        // console.log("patch list",end_datapack)
    }
    // offset_mid = end_datapack + ((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8)
    // console.log("mid",offset_mid)

    // if (u32(o + 8) || u32(o + 4)) {
    //     end_datapack += divisible(u32(o + 8) * 4, 32)
    //     end_datapack += u32(o + 4)
    // }

    offset_mid = end_datapack + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)

    // if (u32(o + 8)) {
    //     let calc_audio = o + 120
    //     let afteroffsetlist = calc_audio + divisible((u32(o + 8) * 4), 32)
    //     for (let i = 0; i < u32(o + 8); i++) {
    //         get_pmwr_ps2demo_audio_list(calc_audio + (i * 4), afteroffsetlist)
    //     }
    // }

    pmwr_ps2demo_get_index_patch_list(o, end_datapack)
    pmwr_ps2demo_get_offset_patch_list(o, offset_mid + u32(o))

    globalThis.old_log_array = structuredClone(log_array)

    for (let i = 0; i < u32(o + 20); i++) {
        get_pmwr_ps2demo_texture(offset_mid + u32(o + 24) + (i * 64))
    }

    // for (let i = 0; i < u32(o + 48); i++) {
    //     get_pmwr_ps2demo_texture_anims(offset_mid + u32(o + 60) + (i * 12))
    // }

    switch (g.type) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 9:
    case 10:
        get_pmwr_ps2demo_basic(offset_mid)
        break
    case 4:
        // get_pmwr_ps2demo_world(offset_mid)
        break
    case 8:
        // for (let i = 0; i < u32(o + 56); i++) {
        // get_pmwr_ps2demo_share(offset_mid + (i * 4))
        // }
        break
    default:
        console.log("?")
    }

}
function get_pmwr_ps2demo_share(o) {
    ß('p_model', o, 0)
}

function get_pmwr_ps2demo_texture_anims(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_pmwr_ps2demo_texture_anims_0)

}

function get_pmwr_ps2demo_audio_list(o, n) {
    get_pmwr_ps2demo_audio(u32(o) + n)
}

function get_pmwr_ps2demo_audio(o) {
    if (u32(o + 16) || u32(o + 20) !== 1081343 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_ps2demo_texture(o) {
    if (u8(o + 4) || u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8], o)

    ö(u32(o + 8), get_pmwr_ps2demo_texture_8)

}

function get_pmwr_ps2demo_texture_8(o) {//texture data
}

function pmwr_ps2demo_get_index_patch_list(o, patch_offset) {
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

function pmwr_ps2demo_get_offset_patch_list(o, patch_offset) {
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

function get_pmwr_ps2demo_world(o) {
    if (u32(o + 0) !== 304 || u32(o + 32) || u32(o + 36) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 80) || u32(o + 84) || u32(o + 104) || u32(o + 108) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 156) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 196) || u32(o + 200) || u32(o + 204) || u32(o + 208) || u32(o + 212) || u32(o + 216) || u32(o + 228) || u32(o + 232) || u32(o + 236))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u8, 240, u8, 241, u8, 242, u8, 243, u8, 244, u8, 245, u8, 246, u8, 247, u8, 248, u8, 249, u8, 250, u8, 251, u8, 252, u8, 253, u8, 254, u8, 255, u8, 256, u8, 257, u8, 258, u8, 259, u8, 260, u8, 261, u8, 262, u8, 263, u8, 264, u8, 265, u8, 266, u8, 267, u8, 268, u8, 269, u8, 270, u8, 271, u8, 272, u8, 273, u8, 274, u8, 275, u8, 276, u8, 277, u8, 278, u8, 279, u8, 280, u8, 281, u8, 282, u8, 283, u8, 284, u8, 285, u8, 286, u8, 287, u8, 288, u8, 289, u8, 290, u8, 291, u8, 292, u8, 293, u8, 294, u8, 295, u8, 296, u8, 297, u8, 298, u8, 299, u8, 300, u8, 301, u8, 302, u8, 303], o)

    ö(u32(o + 0), get_pmwr_ps2demo_world_0)
    ö(u32(o + 4), get_pmwr_ps2demo_world_4)
    ä(pmwr_ps2demo_world_12, u32(o + 12), get_pmwr_ps2demo_world_12)
    ä(pmwr_ps2demo_world_20, u32(o + 20), get_pmwr_ps2demo_world_20)

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 112), get_pmwr_ps2demo_world_28)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ä(pmwr_ps2demo_world_44, u32(o + 44) + (i * 144), get_pmwr_ps2demo_world_44)
    }
    ä(pmwr_ps2demo_world_4_16_12_0, u32(o + 76), get_pmwr_ps2demo_world_4_16_12_0)
    for (let i = 0; i < u32(o + 88); i++) {
        ö(u32(o + 92) + (i * 96), get_pmwr_ps2demo_world_92)
    }
    for (let i = 0; i < u32(o + 96); i++) {
        ö(u32(o + 100) + (i * 80), get_pmwr_ps2demo_world_100)
    }
    ä(pmwr_ps2demo_world_116, u32(o + 116), get_pmwr_ps2demo_world_116)
    ä(pmwr_ps2demo_world_124, u32(o + 124), get_pmwr_ps2demo_world_124)
    ä(pmwr_ps2demo_world_132, u32(o + 132), get_pmwr_ps2demo_world_132)
    ö(u32(o + 152), get_pmwr_ps2demo_world_152)
    ö(u32(o + 188), get_pmwr_ps2demo_world_188)
    ö(u32(o + 192), get_pmwr_ps2demo_world_192)
    for (let i = 0; i < u32(o + 220); i++) {
        ö(u32(o + 224) + (i * 4), get_pmwr_ps2demo_world_224)
    }

}

function get_pmwr_ps2demo_basic(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 16 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    ö(u32(o + 4), get_pmwr_ps2demo_basic_4)

}

function get_pmwr_ps2demo_basic_4(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)
    switch (g.type) {
    case 0:
        ö(u32(o), get_pmwr_ps2demo_car)
        break
    case 1:
        ä(pmwr_ps2demo_interface, u32(o), get_pmwr_ps2demo_interface)
        break
    case 3:
        ö(u32(o), get_pmwr_ps2demo_link)
        break
    default:
        if (u32(o))
            console.log("?")
    }

}

function get_pmwr_ps2demo_car(o) {
    if (u32(o + 4) !== 4 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    ö(u32(o + 0), get_pmwr_ps2demo_car_0)

}

function get_pmwr_ps2demo_interface(o) {
    if (u32(o + 24) || u32(o + 32) || u32(o + 36) || u32(o + 44) !== 1 || u32(o + 52) || u32(o + 64) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 4), get_pmwr_ps2demo_interface_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 28), get_pmwr_ps2demo_interface_12)
    }
    ö(u32(o + 28), get_pmwr_ps2demo_interface_28)
    ö(u32(o + 40), get_pmwr_ps2demo_interface_40)
    ö(u32(o + 48), get_pmwr_ps2demo_interface_48)
    ö(u32(o + 56), get_pmwr_ps2demo_interface_56)
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 104), get_pmwr_ps2demo_interface_72)
    }

}

function get_pmwr_ps2demo_interface_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 36), get_pmwr_ps2demo_interface_4_4)
    }

}

function get_pmwr_ps2demo_interface_4_4(o) {
    // if (u8(o + 5) || u32(o + 20) || u8(o + 34) || u8(o + 35))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35], o)

    ö(u32(o + 0), get_pmwr_ps2demo_interface_4_4_0)
    // sü(u8, 4, o, 12)
switch (u8(o + 4)) {
case 5:
ö(u32(o + 12), get_pmwr_ps2demo_interface_4_4_12t5)
break
case 1:
ö(u32(o + 12), get_pmwr_ps2demo_interface_4_4_12t1)
break
case 8:
ö(u32(o + 12), get_pmwr_ps2demo_interface_4_4_12t8)
break
case 7:
ö(u32(o + 12), get_pmwr_ps2demo_interface_4_4_12t7)
break
case 1:
// not offset value seen? 3
break
case 8:
// not offset value seen? 2
break
default:
if (u32(o + 12)) {
console.log(o)
}
}

}

function get_pmwr_ps2demo_interface_4_4_0(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_ps2demo_interface_4_4_12t5(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_pmwr_ps2demo_interface_4_4_12t1(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_pmwr_ps2demo_interface_4_4_12t8(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_pmwr_ps2demo_interface_4_4_12t7(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_pmwr_ps2demo_interface_12(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    ö(u32(o + 4), get_pmwr_ps2demo_interface_12_4)
    ö(u32(o + 24), get_pmwr_ps2demo_interface_12_24)

}

function get_pmwr_ps2demo_interface_12_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) !== 2 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_ps2demo_interface_12_24(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_pmwr_ps2demo_interface_12_24_4)

}

function get_pmwr_ps2demo_interface_12_24_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_pmwr_ps2demo_interface_12_24_4_4)
    }

}

function get_pmwr_ps2demo_interface_12_24_4_4(o) {
    if (u32(o + 0) !== 1)
        ü(1, [u32, 0, u32, 4], o)

    // sü(u32,0,o,4)

    switch (u32(o + 0)) {
    case 1:
        ö(u32(o + 4), get_pmwr_ps2demo_interface_12_24_4_4_4t1)
        break
    case 0:
        ö(u32(o + 4), get_pmwr_ps2demo_interface_12_24_4_4_4t0)
        break
    case 3:
        ö(u32(o + 4), get_pmwr_ps2demo_interface_12_24_4_4_4t3)
        break
    default:
        if (u32(o + 4)) {
            console.log(o)
        }
    }

}

function get_pmwr_ps2demo_interface_12_24_4_4_4t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_ps2demo_interface_12_24_4_4_4t1_0)
    ö(u32(o + 4), get_pmwr_ps2demo_interface_12_24_4_4_4t1_4)

}

function get_pmwr_ps2demo_interface_12_24_4_4_4t1_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_ps2demo_interface_12_24_4_4_4t1_0_4)

}

function get_pmwr_ps2demo_interface_12_24_4_4_4t1_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_interface_12_24_4_4_4t1_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_12_24_4_4_4t0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_12_24_4_4_4t3(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_interface_28(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_pmwr_ps2demo_interface_40(o) {
    // if (u32(o + 0) !== 10000 || u32(o + 4) || u32(o + 8) !== 1 || u32(o + 12) !== 1 || u32(o + 16) !== 68656 || u32(o + 20) || u32(o + 24) || u32(o + 28))
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 16), get_pmwr_ps2demo_interface_40_16)

}

function get_pmwr_ps2demo_interface_40_16(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_ps2demo_interface_40_16_4)

}

function get_pmwr_ps2demo_interface_40_16_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_interface_48(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_56(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_ps2demo_interface_56_0)

}

function get_pmwr_ps2demo_interface_56_0(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_ps2demo_interface_72(o) {
    if (u32(o + 4) || u8(o + 17) || u8(o + 18) || u32(o + 20) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u8(o + 80) !== 255 || u8(o + 81) !== 255 || u8(o + 82) !== 255 || u8(o + 83) !== 255 || u8(o + 84) !== 255 || u8(o + 85) !== 255 || u8(o + 86) !== 255 || u8(o + 87) !== 255 || u8(o + 88) !== 255 || u8(o + 89) !== 255 || u8(o + 90) !== 255 || u8(o + 91) !== 255 || u8(o + 92) !== 255 || u8(o + 93) !== 255 || u8(o + 94) !== 255 || u8(o + 95) !== 255 || u8(o + 96) !== 255 || u8(o + 97) !== 255 || u8(o + 98) !== 255 || u8(o + 99) !== 255 || u8(o + 100) !== 255 || u8(o + 101) !== 255 || u8(o + 102) !== 255 || u8(o + 103) !== 255)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u8, 96, u8, 97, u8, 98, u8, 99, u8, 100, u8, 101, u8, 102, u8, 103], o)

    ö(u32(o + 0), get_pmwr_ps2demo_interface_72_0)
    ö(u32(o + 8), get_pmwr_ps2demo_interface_72_8)
    // sü(u8,19,o,24)
    switch (u8(o + 19)) {
    case 0:
        ö(u32(o + 24), get_pmwr_ps2demo_interface_72_24t0)
        break
    case 5:
        ö(u32(o + 24), get_pmwr_ps2demo_interface_72_24t5)
        break
    case 1:
        ö(u32(o + 24), get_pmwr_ps2demo_interface_72_24t1)
        break
    case 15:
        ö(u32(o + 24), get_pmwr_ps2demo_interface_72_24t15)
        break
    case 6:
    case 7:
        ö(u32(o + 24), get_pmwr_ps2demo_interface_72_24t6)
        break
    case 10:
        ö(u32(o + 24), get_pmwr_ps2demo_interface_72_24t10)
        break
    case 13:
        ö(u32(o + 24), get_pmwr_ps2demo_interface_72_24t13)
        break
    case 12:
        ö(u32(o + 24), get_pmwr_ps2demo_interface_72_24t12)
        break
    default:
        if (u32(o + 24)) {
            console.log(o)
        }
    }

    ö(u32(o + 36), get_pmwr_ps2demo_interface_72_36)
    ö(u32(o + 48), get_pmwr_ps2demo_interface_72_48)
    ö(u32(o + 52), get_pmwr_ps2demo_interface_72_52)
    ö(u32(o + 56), get_pmwr_ps2demo_interface_72_56)
    for (let i = 0; i < u32(o + 72); i++) {
        ö(u32(o + 76) + (i * 12), get_pmwr_ps2demo_interface_72_76)
    }

}

function get_pmwr_ps2demo_interface_72_0(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_ps2demo_interface_72_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_pmwr_ps2demo_interface_72_8_8)
    }

}

function get_pmwr_ps2demo_interface_72_8_8(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ö(u32(o + 4), get_pmwr_ps2demo_interface_72_8_8_4)

}

function get_pmwr_ps2demo_interface_72_8_8_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_interface_72_24t0(o) {
    if (u8(o + 2) || u8(o + 3) || u8(o + 14) || u8(o + 15))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)

    switch (u8(o)) {
    }
    // ß('p_texture', o, 4)
    //  ß('p_model', o, 4)

    ö(u32(o + 8), get_pmwr_ps2demo_interface_72_24t0_8)

}

function get_pmwr_ps2demo_interface_72_24t0_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_interface_72_24t5(o) {
    if (u32(o + 4) !== 261 || f32(o + 8) !== 0.5 || f32(o + 12) !== 0.5)
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12], o)
    ß('p_texture', o, 0)

}
function get_pmwr_ps2demo_interface_72_24t1(o) {
    if (u8(o + 23) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, f32, 24, u32, 28], o)

    ö(u32(o + 4), get_pmwr_ps2demo_interface_72_24t1_4)
    ö(u32(o + 8), get_pmwr_ps2demo_interface_72_24t1_8)
    ö(u32(o + 12), get_pmwr_ps2demo_interface_72_24t1_12)

}

function get_pmwr_ps2demo_interface_72_24t1_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_24t1_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_24t1_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_interface_72_24t15(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_ps2demo_interface_72_24t15_0)

}

function get_pmwr_ps2demo_interface_72_24t15_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_interface_72_24t6(o) {
    if (u32(o + 4) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_ps2demo_interface, u32(o), get_pmwr_ps2demo_interface)
    ö(u32(o + 12), get_pmwr_ps2demo_interface_72_24t6_12)

}
function get_pmwr_ps2demo_interface_72_24t6_12(o) {
    if (u32(o + 0) || u32(o + 12) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_ps2demo_interface_72_24t10(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_pmwr_ps2demo_interface_72_24t13(o) {
    if (u32(o + 0) !== 1280 || u32(o + 8) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_ps2demo_interface_72_24t13_4)
    ö(u32(o + 12), get_pmwr_ps2demo_interface_72_24t13_12)

}

function get_pmwr_ps2demo_interface_72_24t13_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_24t13_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_interface_72_24t12(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) !== 5 || u8(o + 3) !== 1 || u32(o + 8) || u8(o + 22) || u8(o + 23) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_pmwr_ps2demo_interface_72_24t12_4)
    ö(u32(o + 12), get_pmwr_ps2demo_interface_72_24t12_12)

}

function get_pmwr_ps2demo_interface_72_24t12_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_24t12_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_interface_72_36(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 12), get_pmwr_ps2demo_interface_72_36_12)
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 28), get_pmwr_ps2demo_interface_72_36_36)
    }

}

function get_pmwr_ps2demo_interface_72_36_12(o) {
    if (u32(o + 4) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_ps2demo_interface_72_36_36(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 36), get_pmwr_ps2demo_interface_72_36_36_24)
    }

}

function get_pmwr_ps2demo_interface_72_36_36_24(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    // sü(u32,0,o,4)
    switch (u32(o + 0)) {
    case 1:
        ä(pmwr_ps2demo_interface, u32(o + 4), get_pmwr_ps2demo_interface)
        break
    case 11:
        ö(u32(o + 4), get_pmwr_ps2demo_interface_72_36_36_24_4t11)
        break
        // case 1:
        // // not offset value seen? 6
        // break
        // case 11:
        // // not offset value seen? 9
        // break
        // case undefined:
        // // not offset value seen? 7
        // break
        // case undefined:
        // // not offset value seen? 38
        // break
    default:
        if (u32(o + 4)) {
            console.log(o)
        }
    }

    // ö(u32(o + 8), get_pmwr_ps2demo_interface_72_36_36_24_8)
    // ä(pmwr_ps2demo_interface, u32(o + 40), get_pmwr_ps2demo_interface)

    // ö(u32(o + 40), get_pmwr_ps2demo_interface_72_36_36_24_40)

}

function get_pmwr_ps2demo_interface_72_36_36_24_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_36_36_24_8(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_pmwr_ps2demo_interface_72_36_36_24_40(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_interface_72_36_36_24_4t11(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
    ö(u32(o + 4) + (i*8), get_pmwr_ps2demo_interface_72_36_36_24_4t11_4)
    }

}

function get_pmwr_ps2demo_interface_72_36_36_24_4t11_4(o) {
ü(1, [u32, 0, u32, 4], o)
}

function get_pmwr_ps2demo_interface_72_48(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_52(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_ps2demo_interface_72_56(o) {
    if (u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_pmwr_ps2demo_interface_72_56_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_pmwr_ps2demo_interface_72_56_4)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_pmwr_ps2demo_interface_72_56_4)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_pmwr_ps2demo_interface_72_56_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 40), get_pmwr_ps2demo_interface_72_56_36)
    }

}

function get_pmwr_ps2demo_interface_72_56_4(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_ps2demo_interface_72_56_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_56_20(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_56_28(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_pmwr_ps2demo_interface_72_56_36(o) {
    ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36], o)
}

function get_pmwr_ps2demo_interface_72_76(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ö(u32(o + 4), get_pmwr_ps2demo_interface_72_76_4)

}

function get_pmwr_ps2demo_interface_72_76_4(o) {
    if (u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    // ö(u32(o + 4), get_pmwr_ps2demo_interface_72_76_4_4)
    ö(u32(o + 12), get_pmwr_ps2demo_interface_72_76_4_12)
    ö(u32(o + 20), get_pmwr_ps2demo_interface_72_76_4_20)
    ö(u32(o + 28), get_pmwr_ps2demo_interface_72_76_4_28)
    ö(u32(o + 36), get_pmwr_ps2demo_interface_72_76_4_36)
    ö(u32(o + 44), get_pmwr_ps2demo_interface_72_76_4_44)
    ö(u32(o + 48), get_pmwr_ps2demo_interface_72_76_4_48)

}

function get_pmwr_ps2demo_interface_72_76_4_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_76_4_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_76_4_20(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_76_4_28(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_76_4_36(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_76_4_44(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_ps2demo_interface_72_76_4_48(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_link(o) {
    if (u32(o + 36) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 44)
    ß('p_texture', o, 48)

    ö(u32(o + 0), get_pmwr_ps2demo_link_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_pmwr_ps2demo_link_8)
    }
    ö(u32(o + 12), get_pmwr_ps2demo_link_12)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 8), get_pmwr_ps2demo_link_24)
    }
    ö(u32(o + 28), get_pmwr_ps2demo_link_28)
    ö(u32(o + 32), get_pmwr_ps2demo_link_32)
    ö(u32(o + 40), get_pmwr_ps2demo_link_40)

}

function get_pmwr_ps2demo_link_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_ps2demo_link_0_4)

}

function get_pmwr_ps2demo_link_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_ps2demo_link_0_4_0)

}

function get_pmwr_ps2demo_link_0_4_0(o) {
    if (u32(o + 0) || u32(o + 8) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_ps2demo_link_0_4_0_4)

}

function get_pmwr_ps2demo_link_0_4_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) !== 2000000000 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_ps2demo_link_8(o) {
    if (u32(o + 0) !== 4 || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 8), get_pmwr_ps2demo_link_8_8)

}

function get_pmwr_ps2demo_link_8_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_ps2demo_link_8_8_0)

}

function get_pmwr_ps2demo_link_8_8_0(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_ps2demo_link_12(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_ps2demo_link_24(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4], o)

    ö(u32(o + 0), get_pmwr_ps2demo_link_24_0)

}

function get_pmwr_ps2demo_link_24_0(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_pmwr_ps2demo_link_24_0_4)
    }

}

function get_pmwr_ps2demo_link_24_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 16) !== 1 || u32(o + 24) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_pmwr_ps2demo_link_24_0_4_8)
    ö(u32(o + 12), get_pmwr_ps2demo_link_24_0_4_12)
    ö(u32(o + 20), get_pmwr_ps2demo_link_24_0_4_20)
    ö(u32(o + 28), get_pmwr_ps2demo_link_24_0_4_28)

}

function get_pmwr_ps2demo_link_24_0_4_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_ps2demo_link_24_0_4_8_0)

}

function get_pmwr_ps2demo_link_24_0_4_8_0(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_ps2demo_link_24_0_4_12(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_ps2demo_link_24_0_4_20(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_ps2demo_link_24_0_4_20_4)

}

function get_pmwr_ps2demo_link_24_0_4_20_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_ps2demo_link_24_0_4_20_4_4)

}

function get_pmwr_ps2demo_link_24_0_4_20_4_4(o) {
    if (u32(o + 4) !== 5 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_ps2demo_link_24_0_4_20_4_4_0)

}

function get_pmwr_ps2demo_link_24_0_4_20_4_4_0(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_ps2demo_link_24_0_4_28(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_link_28(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_ps2demo_link_32(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_ps2demo_link_40(o) {
    if (u32(o + 0) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_pmwr_ps2demo_link_24_0)

}

function get_pmwr_ps2demo_model(o) {
    ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60, ], o)

}

function get_pmwr_ps2demo_texture_anims_0(o) {
    if (u32(o + 0) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    ö(u32(o + 4), get_pmwr_ps2demo_texture_anims_0_4)
    ö(u32(o + 12), get_pmwr_ps2demo_texture_anims_0_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 16), get_pmwr_ps2demo_texture_anims_0_20)
    }

}

function get_pmwr_ps2demo_texture_anims_0_4(o) {
    if (u8(o + 8) || u8(o + 9) || u8(o + 10) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_ps2demo_texture_anims_0_4_4)
    }

}

function get_pmwr_ps2demo_texture_anims_0_4_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}
function get_pmwr_ps2demo_texture_anims_0_12(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12], o)
}

function get_pmwr_ps2demo_texture_anims_0_20(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)
}
