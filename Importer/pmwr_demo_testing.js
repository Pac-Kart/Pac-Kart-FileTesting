function get_x_pmwr_demo() {

    globalThis.offset_mid = undefined

    for (let i = 0; i < u32(12); i++) {
        get_pmwr_demo_directory(16 + (i * 24), 16 + (u32(12) * 24))
    }
}
function get_pmwr_demo_directory(o, end_offset) {
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

    globalThis.pmwr_demo_interface = []
    globalThis.pmwr_demo_text = []
    globalThis.pmwr_demo_font = []
    globalThis.pmwr_demo_unknown_4_4t1 = []
    globalThis.pmwr_demo_sound_controls = []
    globalThis.pmwr_demo_sound_section = []
    globalThis.pmwr_demo_unknown = []
    globalThis.pmwr_demo_model = []
    globalThis.pmwr_demo_model_anims_1 = []
    globalThis.pmwr_demo_model_anims_2 = []
    globalThis.pmwr_demo_unknown_4_4t2 = []
    globalThis.pmwr_demo_world_12 = []
    globalThis.pmwr_demo_interface_72_24t15_0 = []
    globalThis.pmwr_demo_interface_72_24t3_4_0 = []
    globalThis.pmwr_demo_interface_72_24t3_4_0_8 = []
    globalThis.pmwr_demo_strange = []
    globalThis.pmwr_demo_mysterious_4t9 = []
    globalThis.pmwr_demo_world_20 = []
    globalThis.pmwr_demo_idk = []
    globalThis.pmwr_demo_world_116 = []
    globalThis.pmwr_demo_world_44 = []
    globalThis.pmwr_demo_activator = []
    globalThis.pmwr_demo_unknown_4_4t5_28_4_0 = []
    globalThis.pmwr_demo_car_0_180_4_84 = []
    globalThis.pmwr_demo_activator_248_4_4t0_4 = []
    globalThis.pmwr_demo_world_60 = []
    globalThis.pmwr_demo_world_92 = []
    globalThis.pmwr_demo_world_100 = []
    globalThis.pmwr_demo_world_108 = []
    globalThis.pmwr_demo_object = []
    globalThis.pmwr_demo_world_100_64 = []
    globalThis.pmwr_demo_world_92_64 = []
    globalThis.pmwr_demo_gate = []
    globalThis.pmwr_demo_flag = []
    globalThis.pmwr_demo_world_60_76t8_8 = []
    globalThis.pmwr_demo_world_60_76t8_4 = []
    globalThis.pmwr_demo_object_20t15_12 = []
    globalThis.pmwr_demo_object_20t15_4_4_0 = []

    director_offset = o
    g.type = u32(o + 4)
    g.datapack_end = u32(director_offset + 16) + u32(director_offset + 20) + end_offset

    if (u32(o + 0) !== 249 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)

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
        get_pmwr_demo_datapack(end_offset + u32(o + 20))
        break
    }

    // print_logarray(log_array)

}

function get_pmwr_demo_datapack(o) {
    if (u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 84) || u32(o + 88) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 116))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], o)

    let end_datapack = o + 120
    end_datapack = divisible(end_datapack, 2048)
    if (u32(o + 8) || u32(o + 4)) {
        end_datapack += divisible(u32(o + 8) * 4, 32)
        end_datapack += u32(o + 4)
        end_datapack = divisible(end_datapack, 2048)
    }

    g.datapack_end = g.datapack_end - ((u32(o + 56) * 8) + (u32(o + 12) * 4))

    offset_mid = end_datapack + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)

    // pmwr_demo_get_index_patch_list(o, end_datapack)
    // pmwr_demo_get_offset_patch_list(o, offset_mid + u32(o))

    globalThis.old_log_array = structuredClone(log_array)

    if (u32(o + 8)) {
        let calc_audio = o + 120
        let afteroffsetlist = calc_audio + (u32(o + 8) * 4)
        afteroffsetlist = divisible(afteroffsetlist, 2048)
        let after_sound_list = divisible(afteroffsetlist + (u32(o + 8) * 4), 32)

        for (let i = 0; i < u32(o + 8); i++) {
            // get_pmwr_demo_audio_list(u32(calc_audio + (i * 4)) + afteroffsetlist, (i+1) == u32(o + 8),afteroffsetlist,end_datapack,o)
            get_pmwr_demo_audio_list(afteroffsetlist + (i * 4), after_sound_list)
        }
        // let final_audio = (u32(calc_audio + (u32(o + 8) * 4)) + afteroffsetlist)
        // console.log(final_audio,afteroffsetlist)
    }

    for (let i = 0; i < u32(o + 20); i++) {
        get_pmwr_demo_texture(offset_mid + u32(o + 24) + (i * 64))
    }

    for (let i = 0; i < u32(o + 48); i++) {
        get_pmwr_demo_texture_anims(offset_mid + u32(o + 60) + (i * 12))
    }

    switch (g.type) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 9:
    case 10:
        // get_pmwr_demo_basic(offset_mid)
        break
    case 4:
        get_pmwr_demo_world(offset_mid)
        break
    case 8:
        // for (let i = 0; i < u32(o + 56); i++) {
        //     get_pmwr_demo_share(offset_mid + (i * 4))
        // }
        break
    default:
        console.log("?")
    }

}
function get_pmwr_demo_share(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_model', o, 0)
}

function get_pmwr_demo_texture_anims(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_pmwr_demo_texture_anims_0)

}

function get_pmwr_demo_audio_list(o, o2) {
    /*ü(1, [u32, 0], o)*/
    get_pmwr_demo_audio(u32(o) + o2)
}

function get_pmwr_demo_audio(o) {
    if (u32(o + 16) || u32(o + 20) !== 1081343 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_texture(o) {
    if (u8(o + 4) || u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8], o)

    ö(u32(o + 8), get_pmwr_demo_texture_8)

}

function get_pmwr_demo_texture_8(o) {//texture data
}

function pmwr_demo_get_index_patch_list(o, patch_offset) {
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

function pmwr_demo_get_offset_patch_list(o, patch_offset) {
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

function get_pmwr_demo_world(o) {
    // if (u32(o + 0) !== 272 || u32(o + 48) || u32(o + 52) || u32(o + 72) || u32(o + 76) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 188) !== 3 || u32(o + 196) || u32(o + 200) || u32(o + 204) || u8(o + 208) !== 204 || u8(o + 209) !== 204 || u8(o + 210) !== 204 || u8(o + 211) !== 204 || u8(o + 212) !== 204 || u8(o + 213) !== 204 || u8(o + 214) !== 204 || u8(o + 215) !== 204 || u8(o + 216) !== 204 || u8(o + 217) !== 204 || u8(o + 218) !== 204 || u8(o + 219) !== 204 || u8(o + 220) !== 204 || u8(o + 221) !== 204 || u8(o + 222) !== 204 || u8(o + 223) !== 204 || u8(o + 224) !== 204 || u8(o + 225) !== 204 || u8(o + 226) !== 204 || u8(o + 227) !== 204 || u8(o + 228) !== 204 || u8(o + 229) !== 204 || u8(o + 230) !== 204 || u8(o + 231) !== 204 || u8(o + 232) !== 204 || u8(o + 233) !== 204 || u8(o + 234) !== 204 || u8(o + 235) !== 204 || u8(o + 236) !== 204 || u8(o + 237) !== 204 || u8(o + 238) !== 204 || u8(o + 239) !== 204 || u8(o + 240) !== 204 || u8(o + 241) !== 204 || u8(o + 242) !== 204 || u8(o + 243) !== 204 || u8(o + 244) !== 204 || u8(o + 245) !== 204 || u8(o + 246) !== 204 || u8(o + 247) !== 204 || u8(o + 248) !== 204 || u8(o + 249) !== 204 || u8(o + 250) !== 204 || u8(o + 251) !== 204 || u8(o + 252) !== 204 || u8(o + 253) !== 204 || u8(o + 254) !== 204 || u8(o + 255) !== 204 || u8(o + 256) !== 204 || u8(o + 257) !== 204 || u8(o + 258) !== 204 || u8(o + 259) !== 204 || u8(o + 260) !== 204 || u8(o + 261) !== 204 || u8(o + 262) !== 204 || u8(o + 263) !== 204 || u8(o + 264) !== 204 || u8(o + 265) !== 204 || u8(o + 266) !== 204 || u8(o + 267) !== 204 || u8(o + 268) !== 204 || u8(o + 269) !== 204 || u8(o + 270) !== 204 || u8(o + 271) !== 204)
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u8, 208, u8, 209, u8, 210, u8, 211, u8, 212, u8, 213, u8, 214, u8, 215, u8, 216, u8, 217, u8, 218, u8, 219, u8, 220, u8, 221, u8, 222, u8, 223, u8, 224, u8, 225, u8, 226, u8, 227, u8, 228, u8, 229, u8, 230, u8, 231, u8, 232, u8, 233, u8, 234, u8, 235, u8, 236, u8, 237, u8, 238, u8, 239, u8, 240, u8, 241, u8, 242, u8, 243, u8, 244, u8, 245, u8, 246, u8, 247, u8, 248, u8, 249, u8, 250, u8, 251, u8, 252, u8, 253, u8, 254, u8, 255, u8, 256, u8, 257, u8, 258, u8, 259, u8, 260, u8, 261, u8, 262, u8, 263, u8, 264, u8, 265, u8, 266, u8, 267, u8, 268, u8, 269, u8, 270, u8, 271], o)

    ö(u32(o + 0), get_pmwr_demo_world_0)
    ö(u32(o + 4), get_pmwr_demo_world_4)
    ä(pmwr_demo_world_12, u32(o + 12), get_pmwr_demo_world_12)

    ä(pmwr_demo_world_20, u32(o + 20), get_pmwr_demo_world_20)

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 112), get_pmwr_demo_world_28)
    }
    ö(u32(o + 36), get_pmwr_demo_world_36)
    for (let i = 0; i < u32(o + 40); i++) {
        ä(pmwr_demo_world_44, u32(o + 44) + (i * 144), get_pmwr_demo_world_44)
    }
    ä(pmwr_demo_world_60, u32(o + 60), get_pmwr_demo_world_60)

    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 96), get_pmwr_demo_world_68)
    }
    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 80), get_pmwr_demo_world_84)
    }
    ä(pmwr_demo_world_92, u32(o + 92), get_pmwr_demo_world_92)

    ä(pmwr_demo_world_100, u32(o + 100), get_pmwr_demo_world_100)

    ä(pmwr_demo_world_108, u32(o + 108), get_pmwr_demo_world_108)

    ä(pmwr_demo_world_116, u32(o + 116), get_pmwr_demo_world_116)

    ö(u32(o + 120), get_pmwr_demo_world_120)
    ö(u32(o + 156), get_pmwr_demo_world_settings)
    ö(u32(o + 160), get_pmwr_demo_world_160)
    for (let i = 0; i < u32(o + 188); i++) {
        ö(u32(o + 192) + (i * 4), get_pmwr_demo_world_192)
    }

}

function get_pmwr_demo_world_0(o) {
    // if (f32(o + 12) !== 1 || f32(o + 28) !== 1 || u32(o + 36) !== 18 || u32(o + 72) || u32(o + 76) || u32(o + 84) !== 368 || u32(o + 88) !== 1 || u32(o + 92))
    ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, f32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 32) + (i * 96), get_pmwr_demo_world_0_32)
    }
    let amt = u32(o + 52) + u32(o + 56) + u32(o + 60)
    for (let i = 0; i < amt; i++) {
        ö(u32(o + 64) + (i * 4), get_pmwr_demo_world_0_64)
    }
    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 64), get_pmwr_demo_world_0_84)
    }

}

function get_pmwr_demo_world_0_32(o) {
    // if (u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 76) || u32(o + 84) || u32(o + 88) || u32(o + 92))
    ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    for (let i = 0; i < u32(o + 72); i++) {
        ö(u32(o + 48) + (i * 16), get_pmwr_demo_world_0_32_48)
    }
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 2), get_pmwr_demo_world_0_32_68)
    }
    if (u32(o + 64)) {} else {
        //offset still exists if amount is 0 in xps
        ö(u32(o + 68), get_end_pmwr_demo_world_0_32_48)
    }

}

function get_pmwr_demo_world_0_32_48(o) {
    // if (u8(o + 10) || u8(o + 11) || u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205)
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 0) + (i * 32), get_pmwr_demo_world_0_32_48_0)
    }

}

function get_pmwr_demo_world_0_32_48_0(o) {
    // if (u8(o + 24) !== 205 || u8(o + 25) !== 205 || u8(o + 26) !== 205 || u8(o + 27) !== 205 || u8(o + 28) !== 205 || u8(o + 29) !== 205 || u8(o + 30) !== 205 || u8(o + 31) !== 205)
    ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
}

function get_end_pmwr_demo_world_0_32_48(o) {
    // ü(1, [u32, 0, u32, 4, u8, 8,u8, 9,u8, 10,u8, 11, u8, 12, u8, 13, u8, 14, u8, 15], o)
    ü(1, [u32, 0], o)
}

function get_pmwr_demo_world_0_32_68(o) {
    /*ü(1, [u8, 0, u8, 1], o)*/
    ü(1, [u32, 0], o)
}

function get_pmwr_demo_world_0_64(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0], o)
}
function get_pmwr_demo_world_0_84(o) {
    // if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u8(o + 48) !== 205 || u8(o + 49) !== 205 || u8(o + 50) !== 205 || u8(o + 51) !== 205 || u8(o + 56) !== 205 || u8(o + 57) !== 205 || u8(o + 58) !== 205 || u8(o + 59) !== 205 || u8(o + 60) !== 205 || u8(o + 61) !== 205 || u8(o + 62) !== 205 || u8(o + 63) !== 205)
    ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u8, 60, u8, 61, u8, 62, u8, 63], o)
}

function get_pmwr_demo_world_4(o) {
    // if (u32(o + 12) || f32(o + 32) !== 500 || f32(o + 40) !== 500 || u32(o + 48) !== 1 || u32(o + 56) || u32(o + 60))
    ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 16) + (i * 80), get_pmwr_demo_world_4_16)
        ö(u32(o + 20) + (i * 4), get_pmwr_demo_world_4_20)
    }

}

function get_pmwr_demo_world_4_16(o) {
    // if (u32(o + 0) || u32(o + 4) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 72) || u32(o + 76))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 12), get_pmwr_demo_world_4_16_12)
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 4), get_pmwr_demo_world_4_16_12)
    }
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 4), get_pmwr_demo_world_4_16_12)
    }

}

function get_pmwr_demo_world_4_16_12(o) {
    ü(1, [u32, 0], o)

    ä(pmwr_demo_world_60, u32(o + 0), get_pmwr_demo_world_60)

}

function get_pmwr_demo_world_4_20(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0], o)
}

function get_pmwr_demo_world_12(o) {
    // if (u8(o + 4) || u8(o + 5) || u8(o + 7) || u32(o + 8) || u8(o + 12) !== 1 || u8(o + 13) || u8(o + 14) !== 8 || u8(o + 15) || u8(o + 16) !== 1 || u8(o + 17) || u8(o + 18) !== 8 || u8(o + 19) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 56) || f32(o + 60) !== 1 || u32(o + 64) || u8(o + 72) || u8(o + 73) || u8(o + 74) !== 1 || u8(o + 75) !== 1 || f32(o + 76) !== 500 || f32(o + 80) !== 1000 || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u8(o + 113) !== 255 || u8(o + 114) !== 255 || u8(o + 115) || u32(o + 116) || u8(o + 120) !== 1 || u8(o + 122) || u8(o + 123) || u32(o + 124))
    ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, f32, 76, f32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u8, 112, u8, 113, u8, 114, u8, 115, u32, 116, u8, 120, u8, 121, u8, 122, u8, 123, u32, 124], o)
}
function get_pmwr_demo_world_20(o) {
    // if (u32(o + 4) !== 1 || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u16(o + 16) !== 1 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u8(o + 47) || f32(o + 48) !== 1000 || u32(o + 52) || u32(o + 56) || u32(o + 60))
    ü(1, [u32, 0, u32, 4, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, u32, 32, f32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, f32, 48, u32, 52, u32, 56, u32, 60], o)

    ä(pmwr_demo_model_anims_1, u32(o + 32), get_pmwr_demo_model_anims_1)

    ä(pmwr_demo_idk, u32(o + 40), get_pmwr_demo_idk)

}

function get_pmwr_demo_world_28(o) {
    // if (u16(o + 4) !== 2 || u16(o + 6) !== 1 || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u16(o + 16) !== 1 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 44) || u32(o + 48) || u32(o + 68) || u32(o + 80) || u8(o + 87) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 108))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    for (let i = 0; i < u32(o + 52); i += 32) {
        ö(u32(o + 56) + i, get_pmwr_demo_world_28_56)
    }
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 4), get_pmwr_demo_world_28_64)
    }
    globalThis.get_pmwr_demo_world_28_72_count = u32(o + 40);
    ö(u32(o + 72), get_pmwr_demo_world_28_72)
    delete get_pmwr_demo_world_28_72_count
    ö(u32(o + 76), get_pmwr_demo_world_28_76)
    ö(u32(o + 100), get_pmwr_demo_world_28_100)

}

function get_pmwr_demo_world_28_56(o) {
    // if (u8(o + 17) !== 205 || u8(o + 20) !== 205 || u8(o + 21) !== 205 || u8(o + 22) !== 205 || u8(o + 23) !== 205 || u8(o + 24) !== 205 || u8(o + 25) !== 205 || u8(o + 26) !== 205 || u8(o + 27) !== 205 || u8(o + 28) !== 205 || u8(o + 29) !== 205 || u8(o + 30) !== 205 || u8(o + 31) !== 205)
    ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
}
function get_pmwr_demo_world_28_64(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0], o)
}
function get_pmwr_demo_world_28_72(o) {
    // if (u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < get_pmwr_demo_world_28_72_count; i++) {
        ö(u32(o + 0) + (i * 4), get_pmwr_demo_world_28_72_0)
    }

}

function get_pmwr_demo_world_28_72_0(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0], o)
    ä(pmwr_demo_world_116, u32(o + 0), get_pmwr_demo_world_116)

}

function get_pmwr_demo_world_28_76(o) {
    // if (u32(o + 0) || u32(o + 28))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_pmwr_demo_world_28_76_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 4), get_pmwr_demo_world_28_76_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 4), get_pmwr_demo_world_28_76_24)
    }

}

function get_pmwr_demo_world_28_76_8(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0], o)
    ä(pmwr_demo_world_92, u32(o + 0), get_pmwr_demo_world_92)

}

function get_pmwr_demo_world_28_76_16(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0], o)
    ä(pmwr_demo_world_100, u32(o + 0), get_pmwr_demo_world_100)

}

function get_pmwr_demo_world_28_76_24(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0], o)
    ä(pmwr_demo_world_108, u32(o + 0), get_pmwr_demo_world_108)

}

function get_pmwr_demo_world_28_100(o) {
    // if (u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_world_36(o) {
    // if (u32(o + 0) !== 8321 || u32(o + 4) !== 3 || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u16(o + 16) !== 1 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 258.10308837890625 || f32(o + 36) !== 40.60390090942383 || f32(o + 40) !== 2000.13037109375 || f32(o + 44) !== 1 || u32(o + 48) !== 7188000 || u32(o + 52) || u32(o + 56) || u32(o + 60))
    ü(1, [u32, 0, u32, 4, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ä(pmwr_demo_sound_controls, u32(o + 48), get_pmwr_demo_sound_controls)

}

function get_pmwr_demo_world_44(o) {
    // if (u32(o + 4) !== 4 || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u16(o + 16) !== 1 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 36) || u32(o + 44) || f32(o + 48) || f32(o + 52) !== 1 || f32(o + 56) || u32(o + 60) || u32(o + 68) || u32(o + 76) || f32(o + 92) !== 1 || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 10 || u32(o + 120) || u32(o + 132) || u32(o + 136) || u32(o + 140))
    ü(1, [u32, 0, u32, 4, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, f32, 64, u32, 68, f32, 72, u32, 76, f32, 80, f32, 84, f32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ä(pmwr_demo_world_44, u32(o + 128), get_pmwr_demo_world_44)

}

function get_pmwr_demo_world_60(o) {
    // if (u16(o + 4) !== 8 || u32(o + 8) || u16(o + 14) !== 8 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 72), get_pmwr_demo_world_60_72)

    switch (u32(o + 36)) {
    case 1:
        ö(u32(o + 76), get_pmwr_demo_world_60_76t1)
        break
    case 7:
        ö(u32(o + 76), get_pmwr_demo_world_60_76t7)
        break
    case 8:
        ö(u32(o + 76), get_pmwr_demo_world_60_76t8)
        break
    default:
        if (u32(o + 76)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
        }
    }

}

function get_pmwr_demo_world_60_72(o) {
    // if (u8(o + 20) !== 205 || u8(o + 21) !== 205 || u8(o + 22) !== 205 || u8(o + 23) !== 205 || u8(o + 24) !== 205 || u8(o + 25) !== 205 || u8(o + 26) !== 205 || u8(o + 27) !== 205 || u8(o + 28) !== 205 || u8(o + 29) !== 205 || u8(o + 30) !== 205 || u8(o + 31) !== 205 || u8(o + 49) !== 205 || u8(o + 52) !== 205 || u8(o + 53) !== 205 || u8(o + 54) !== 205 || u8(o + 55) !== 205 || u8(o + 56) !== 205 || u8(o + 57) !== 205 || u8(o + 58) !== 205 || u8(o + 59) !== 205 || u8(o + 60) !== 205 || u8(o + 61) !== 205 || u8(o + 62) !== 205 || u8(o + 63) !== 205 || u8(o + 84) !== 205 || u8(o + 85) !== 205 || u8(o + 86) !== 205 || u8(o + 87) !== 205 || u8(o + 88) !== 205 || u8(o + 89) !== 205 || u8(o + 90) !== 205 || u8(o + 91) !== 205 || u8(o + 92) !== 205 || u8(o + 93) !== 205 || u8(o + 94) !== 205 || u8(o + 95) !== 205 || u8(o + 113) !== 205 || u8(o + 114) !== 205 || u8(o + 115) !== 205 || u8(o + 116) !== 205 || u8(o + 117) !== 205 || u8(o + 118) !== 205 || u8(o + 119) !== 205 || u8(o + 120) !== 205 || u8(o + 121) !== 205 || u8(o + 122) !== 205 || u8(o + 123) !== 205 || u8(o + 124) !== 205 || u8(o + 125) !== 205 || u8(o + 126) !== 205 || u8(o + 127) !== 205 || u8(o + 148) !== 205 || u8(o + 149) !== 205 || u8(o + 150) !== 205 || u8(o + 151) !== 205 || u8(o + 152) !== 205 || u8(o + 153) !== 205 || u8(o + 154) !== 205 || u8(o + 155) !== 205 || u8(o + 156) !== 205 || u8(o + 157) !== 205 || u8(o + 158) !== 205 || u8(o + 159) !== 205 || u8(o + 177) !== 205 || u8(o + 178) !== 205 || u8(o + 179) !== 205 || u8(o + 180) !== 205 || u8(o + 181) !== 205 || u8(o + 182) !== 205 || u8(o + 183) !== 205 || u8(o + 184) !== 205 || u8(o + 185) !== 205 || u8(o + 186) !== 205 || u8(o + 187) !== 205 || u8(o + 188) !== 205 || u8(o + 189) !== 205 || u8(o + 190) !== 205 || u8(o + 191) !== 205 || u8(o + 212) !== 205 || u8(o + 213) !== 205 || u8(o + 214) !== 205 || u8(o + 215) !== 205 || u8(o + 216) !== 205 || u8(o + 217) !== 205 || u8(o + 218) !== 205 || u8(o + 219) !== 205 || u8(o + 220) !== 205 || u8(o + 221) !== 205 || u8(o + 222) !== 205 || u8(o + 223) !== 205 || u8(o + 240) || u8(o + 241) !== 205 || u8(o + 242) !== 205 || u8(o + 243) !== 205 || u8(o + 244) !== 205 || u8(o + 245) !== 205 || u8(o + 246) !== 205 || u8(o + 247) !== 205 || u8(o + 248) !== 205 || u8(o + 249) !== 205 || u8(o + 250) !== 205 || u8(o + 251) !== 205 || u8(o + 252) !== 205 || u8(o + 253) !== 205 || u8(o + 254) !== 205 || u8(o + 255) !== 205 || u8(o + 276) !== 205 || u8(o + 277) !== 205 || u8(o + 278) !== 205 || u8(o + 279) !== 205 || u8(o + 280) !== 205 || u8(o + 281) !== 205 || u8(o + 282) !== 205 || u8(o + 283) !== 205 || u8(o + 284) !== 205 || u8(o + 285) !== 205 || u8(o + 286) !== 205 || u8(o + 287) !== 205 || u8(o + 305) !== 205 || u8(o + 308) !== 205 || u8(o + 309) !== 205 || u8(o + 310) !== 205 || u8(o + 311) !== 205 || u8(o + 312) !== 205 || u8(o + 313) !== 205 || u8(o + 314) !== 205 || u8(o + 315) !== 205 || u8(o + 316) !== 205 || u8(o + 317) !== 205 || u8(o + 318) !== 205 || u8(o + 319) !== 205 || u8(o + 337) !== 205 || u8(o + 340) !== 205 || u8(o + 341) !== 205 || u8(o + 342) !== 205 || u8(o + 343) !== 205 || u8(o + 344) !== 205 || u8(o + 345) !== 205 || u8(o + 346) !== 205 || u8(o + 347) !== 205 || u8(o + 348) !== 205 || u8(o + 349) !== 205 || u8(o + 350) !== 205 || u8(o + 351) !== 205 || u8(o + 369) !== 205 || u8(o + 370) !== 205 || u8(o + 371) !== 205 || u8(o + 372) !== 205 || u8(o + 373) !== 205 || u8(o + 374) !== 205 || u8(o + 375) !== 205 || u8(o + 376) !== 205 || u8(o + 377) !== 205 || u8(o + 378) !== 205 || u8(o + 379) !== 205 || u8(o + 380) !== 205 || u8(o + 381) !== 205 || u8(o + 382) !== 205 || u8(o + 383) !== 205)
    ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, f32, 32, f32, 36, f32, 40, f32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u8, 56, u8, 57, u8, 58, u8, 59, u8, 60, u8, 61, u8, 62, u8, 63, f32, 64, f32, 68, u32, 72, f32, 76, u32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u32, 96, f32, 100, u32, 104, f32, 108, u8, 112, u8, 113, u8, 114, u8, 115, u8, 116, u8, 117, u8, 118, u8, 119, u8, 120, u8, 121, u8, 122, u8, 123, u8, 124, u8, 125, u8, 126, u8, 127, f32, 128, u8, 132, u8, 133, u8, 134, u8, 135, f32, 136, f32, 140, u32, 144, u8, 148, u8, 149, u8, 150, u8, 151, u8, 152, u8, 153, u8, 154, u8, 155, u8, 156, u8, 157, u8, 158, u8, 159, f32, 160, f32, 164, f32, 168, f32, 172, u8, 176, u8, 177, u8, 178, u8, 179, u8, 180, u8, 181, u8, 182, u8, 183, u8, 184, u8, 185, u8, 186, u8, 187, u8, 188, u8, 189, u8, 190, u8, 191, u32, 192, f32, 196, u32, 200, f32, 204, u32, 208, u8, 212, u8, 213, u8, 214, u8, 215, u8, 216, u8, 217, u8, 218, u8, 219, u8, 220, u8, 221, u8, 222, u8, 223, u32, 224, f32, 228, u32, 232, f32, 236, u8, 240, u8, 241, u8, 242, u8, 243, u8, 244, u8, 245, u8, 246, u8, 247, u8, 248, u8, 249, u8, 250, u8, 251, u8, 252, u8, 253, u8, 254, u8, 255, f32, 256, f32, 260, f32, 264, f32, 268, u32, 272, u8, 276, u8, 277, u8, 278, u8, 279, u8, 280, u8, 281, u8, 282, u8, 283, u8, 284, u8, 285, u8, 286, u8, 287, f32, 288, f32, 292, f32, 296, f32, 300, u8, 304, u8, 305, u8, 306, u8, 307, u8, 308, u8, 309, u8, 310, u8, 311, u8, 312, u8, 313, u8, 314, u8, 315, u8, 316, u8, 317, u8, 318, u8, 319, f32, 320, f32, 324, f32, 328, f32, 332, u8, 336, u8, 337, u8, 338, u8, 339, u8, 340, u8, 341, u8, 342, u8, 343, u8, 344, u8, 345, u8, 346, u8, 347, u8, 348, u8, 349, u8, 350, u8, 351, f32, 352, f32, 356, f32, 360, f32, 364, u8, 368, u8, 369, u8, 370, u8, 371, u8, 372, u8, 373, u8, 374, u8, 375, u8, 376, u8, 377, u8, 378, u8, 379, u8, 380, u8, 381, u8, 382, u8, 383], o)
}
function get_pmwr_demo_world_60_76t1(o) {
    // if (u32(o + 0) || u8(o + 4) || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205)
    ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)
}
function get_pmwr_demo_world_60_76t7(o) {
    // if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_pmwr_demo_world_60_76t8(o) {
    // if (u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_world_60_76t8_4, u32(o + 4), get_pmwr_demo_world_60_76t8_4)
    ä(pmwr_demo_world_60_76t8_8, u32(o + 8), get_pmwr_demo_world_60_76t8_8)

}

function get_pmwr_demo_world_68(o) {
    // if (u16(o + 2) || u8(o + 4) !== 10 || u8(o + 5) || u8(o + 7) || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u16(o + 16) !== 1 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || f32(o + 60) !== 1 || u8(o + 68) || u8(o + 69) !== 200 || u8(o + 70) !== 175 || u8(o + 71) !== 71 || u8(o + 72) || u8(o + 73) !== 64 || u8(o + 74) !== 28 || u8(o + 75) !== 71 || u32(o + 80) !== 5000 || u32(o + 88) || u32(o + 92))
    ü(1, [u16, 0, u16, 2, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ä(pmwr_demo_activator, u32(o + 64), get_pmwr_demo_activator)

}

function get_pmwr_demo_world_84(o) {
    // if (u16(o + 4) !== 11 || u16(o + 6) !== 1 || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u16(o + 16) !== 1 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 48) || u32(o + 56) || f32(o + 60) !== 1 || u32(o + 72) || u32(o + 76))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ä(pmwr_demo_world_12, u32(o + 68), get_pmwr_demo_world_12)

}

function get_pmwr_demo_world_92(o) {
    // if (u8(o + 4) !== 13 || u8(o + 5) || u8(o + 7) || u32(o + 8) || u16(o + 14) !== 8 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || f32(o + 68) !== 500 || u8(o + 72) || u8(o + 74) || u8(o + 75) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
    ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, f32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ä(pmwr_demo_world_92_64, u32(o + 64), get_pmwr_demo_world_92_64)

}
function get_pmwr_demo_world_100(o) {
    // if (u32(o + 4) !== 14 || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u16(o + 16) !== 1 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 48) || u32(o + 52) || u32(o + 56) || f32(o + 60) !== 1 || u32(o + 68) || u32(o + 76) !== 1)
    ü(1, [u32, 0, u32, 4, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, f32, 72, u32, 76], o)

    ä(pmwr_demo_world_100_64, u32(o + 64), get_pmwr_demo_world_100_64)

}


function get_pmwr_demo_world_108(o) {
    // if (u16(o + 4) !== 15 || u32(o + 8) || u16(o + 14) !== 8 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 52) !== 1 || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) || u8(o + 71) || u8(o + 72) !== 1 || u8(o + 74) !== 1 || u8(o + 75) !== 1 || u32(o + 76))
    ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76], o)

    ä(pmwr_demo_object, u32(o + 56), get_pmwr_demo_object)

}

function get_pmwr_demo_world_116(o) {
    // if (u8(o + 4) !== 5 || u8(o + 5) || u8(o + 7) || u32(o + 8) || u16(o + 14) !== 8 || u16(o + 18) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || f32(o + 52) !== 1 || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || f32(o + 72) !== 1 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || f32(o + 92) !== 1 || u32(o + 96) || u32(o + 104) || u32(o + 108))
    ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u16, 12, u16, 14, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, u32, 76, u32, 80, u32, 84, u32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)
    ß('p_model', o, 100)
}
function get_pmwr_demo_world_120(o) {
    // if (u8(o + 8) !== 255 || u8(o + 9) !== 255 || u8(o + 10) !== 255 || u8(o + 11) !== 255 || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 0) + (i * 128), get_pmwr_demo_world_120_0)
    }

}

function get_pmwr_demo_world_120_0(o) {
    // if (u32(o + 4) !== 16 || u32(o + 8) || u32(o + 12) !== 1 || u32(o + 16) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 120) || u32(o + 124))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, f32, 68, u32, 72, u32, 76, f32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)

    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 4), get_pmwr_demo_world_120_0_52)
        ö(u32(o + 56) + (i * 4), get_pmwr_demo_world_120_0_56)
    }
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 4), get_pmwr_demo_world_120_0_64)
    }

}

function get_pmwr_demo_world_120_0_52(o) {
    /*ü(1, [f32, 0], o)*/
    ü(1, [u32, 0], o)
}
function get_pmwr_demo_world_120_0_56(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0], o)
}
function get_pmwr_demo_world_120_0_64(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0], o)
}

function get_pmwr_demo_world_160(o) {
    // if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) !== 2 || u32(o + 48) || u32(o + 52) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_demo_world_160_4)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 4), get_pmwr_demo_world_160_44)
    }
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 4), get_pmwr_demo_world_160_60)
    }
    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 4), get_pmwr_demo_world_160_84)
    }
    for (let i = 0; i < u32(o + 88); i++) {
        ö(u32(o + 92) + (i * 4), get_pmwr_demo_world_160_92)
    }

}

function get_pmwr_demo_world_160_4(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0], o)
    ä(pmwr_demo_flag, u32(o + 0), get_pmwr_demo_flag)

}

function get_pmwr_demo_world_160_44(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0], o)
    globalThis.xpstemptype = 44
    ö(u32(o + 0), get_pmwr_xdx_world_mode)

}

function get_pmwr_xdx_world_mode(o) {
    if (u32(o + 0) || u32(o + 4))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_pmwr_xdx_world_mode_8)
    switch (xpstemptype) {
    case 44:
        ö(u32(o + 12), get_pmwr_xdx_world_mode_12t44)
        break
    case 60:
        ö(u32(o + 12), get_pmwr_xdx_world_mode_12t60)
        break
    case 84:
        ö(u32(o + 12), get_pmwr_xdx_world_mode_12t84)
        break
    case 92:
        ö(u32(o + 12), get_pmwr_xdx_world_mode_12t92)
        break
    default:
        console.log(xpstemptype)
    }

    ö(u32(o + 20), get_pmwr_xdx_world_mode_20)
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 24), get_pmwr_xdx_world_mode_28)
    }

}

function get_pmwr_xdx_world_mode_8(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_xdx_world_mode_12t44(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_xdx_world_mode_12t60(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_interface, u32(o + 4), get_pmwr_demo_interface)
    ä(pmwr_demo_world_20, u32(o + 8), get_pmwr_demo_world_20)

}

function get_pmwr_xdx_world_mode_12t84(o) {
    if (u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 0:
        ä(pmwr_demo_flag, u32(o + 0), get_pmwr_demo_flag)
        break
    case 1:
        ö(u32(o + 0), get_pmwr_xdx_world_mode_12t84_0t1)
        break
    default:
        if (u32(o)) {
            ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
        }
    }

}

function get_pmwr_xdx_world_mode_12t84_0t1(o) {
    if (u32(o + 0) || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 12), get_pmwr_xdx_world_mode_12t84_0t1_12)

}

function get_pmwr_xdx_world_mode_12t84_0t1_12(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_xdx_world_mode_12t92(o) {
    if (u32(o + 4) !== 1792 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_xdx_world_mode_12t92_0)
    ä(pmwr_demo_world_60, u32(o + 8), get_pmwr_demo_world_60)
}

function get_pmwr_xdx_world_mode_12t92_0(o) {
    if (u32(o + 0) || u32(o + 4) !== 11 || u32(o + 8) !== 4 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_xdx_world_mode_20(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_xdx_world_mode_20_4)
    switch (u32(o + 0)) {
    case 5:
        ö(u32(o + 8), get_pmwr_xdx_world_mode_20_8t5)
        break
    case 6:
        ö(u32(o + 8), get_pmwr_xdx_world_mode_20_8t6)
        break
    default:
        if (u32(o + 8)) {
            console.log(o)
        }
    }

}

function get_pmwr_xdx_world_mode_20_4(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_xdx_world_mode_20_8t5(o) {
    if (u8(o + 9) !== 2 || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 0:
        ä(pmwr_demo_flag, u32(o + 0), get_pmwr_demo_flag)
        break
    case 1:
        ö(u32(o + 0), get_pmwr_xdx_world_mode_20_8t5_0t1)
        break
    default:
        if (u32(o + 0)) {
            console.log(o)
        }
    }

}

function get_pmwr_xdx_world_mode_20_8t5_0t1(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_pmwr_xdx_world_mode_20_8t5_0t1_4)
    ö(u32(o + 12), get_pmwr_xdx_world_mode_20_8t5_0t1_12)

}

function get_pmwr_xdx_world_mode_20_8t5_0t1_4(o) {
    if (u32(o + 0) || u32(o + 4) !== 11 || u32(o + 8) !== 5 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_xdx_world_mode_20_8t5_0t1_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_xdx_world_mode_20_8t6(o) {
    if (u32(o + 0) !== 7230928 || u32(o + 4) !== 2048 || u32(o + 8) !== 501328 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_xdx_world_mode_20_8t6_0)
    ä(pmwr_demo_world_60, u32(o + 8), get_pmwr_demo_world_60)

}

function get_pmwr_xdx_world_mode_20_8t6_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 4 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_xdx_world_mode_28(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)*/

    ö(u32(o + 0), get_pmwr_xdx_world_mode_28_0)
    ö(u32(o + 8), get_pmwr_xdx_world_mode_28_8)
    switch (u32(o + 4)) {
    case 1:
        ö(u32(o + 12), get_pmwr_xdx_world_mode_28_12t1)
        break
    case 2:
        ö(u32(o + 12), get_pmwr_xdx_world_mode_28_12t2)
        break
    case 6:
        ö(u32(o + 12), get_pmwr_xdx_world_mode_28_12t6)
        break
    case 8:
        ö(u32(o + 12), get_pmwr_xdx_world_mode_28_12t8)
        break
    case 15:
        ö(u32(o + 12), get_pmwr_xdx_world_mode_28_12t15)
        break
    default:
        if (u32(o + 12)) {
            console.log(o)
        }
    }

}

function get_pmwr_xdx_world_mode_28_0(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_xdx_world_mode_28_8(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_xdx_world_mode_28_12t1(o) {
    if (u32(o + 4) !== 5 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_xdx_world_mode_28_12t1_0)

}

function get_pmwr_xdx_world_mode_28_12t1_0(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_pmwr_xdx_world_mode_28_12t1_0_0)

}

function get_pmwr_xdx_world_mode_28_12t1_0_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 4 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_xdx_world_mode_28_12t6(o) {
    if (u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_xdx_world_mode_28_12t6_0)

}

function get_pmwr_xdx_world_mode_28_12t6_0(o) {
    if (u8(o + 4) || u8(o + 5) !== 1 || u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ä(pmwr_demo_interface, u32(o + 0), get_pmwr_demo_interface)
    ö(u32(o + 8), get_pmwr_xdx_world_mode_28_12t6_0_8)

}

function get_pmwr_xdx_world_mode_28_12t6_0_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_xdx_world_mode_28_12t2(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 0)) {
    case 1:
        ö(u32(o + 4), get_pmwr_xdx_world_mode_28_12t2_4t1)
        break
    case 4:
        ö(u32(o + 4), get_pmwr_xdx_world_mode_28_12t2_4t4)
        break
    case 5:
        ö(u32(o + 4), get_pmwr_xdx_world_mode_28_12t2_4t5)
        break
    case 7:
        ö(u32(o + 4), get_pmwr_xdx_world_mode_28_12t2_4t7)
        break
    case 8:
        ö(u32(o + 4), get_pmwr_xdx_world_mode_28_12t2_4t8)
        break
    case 9:
        ö(u32(o + 4), get_pmwr_xdx_world_mode_28_12t2_4t9)
        break
    case 11:
        ö(u32(o + 4), get_pmwr_xdx_world_mode_28_12t2_4t11)
        break
    case 19:
        ö(u32(o + 4), get_pmwr_xdx_world_mode_28_12t2_4t19)
        break
    default:
        if (u32(o + 4)) {
            console.log(o)
        }
    }

}

function get_pmwr_xdx_world_mode_28_12t2_4t8(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 16), get_pmwr_xdx_world_mode_28_12t2_4t8_16)

}

function get_pmwr_xdx_world_mode_28_12t2_4t8_16(o) {
    if (u32(o + 0) || u32(o + 4) !== 11 || u32(o + 8) !== 4 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_xdx_world_mode_28_12t2_4t1(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12) || u32(o + 24) || f32(o + 28) !== 100)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28], o)

    ö(u32(o + 16), get_pmwr_xdx_world_mode_28_12t2_4t1_16)
    ö(u32(o + 20), get_pmwr_xdx_world_mode_28_12t2_4t1_16)

}

function get_pmwr_xdx_world_mode_28_12t2_4t1_16(o) {
    if (u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(pmwr_demo_world_20, u32(o + 0), get_pmwr_demo_world_20)

}

function get_pmwr_xdx_world_mode_28_12t2_4t7(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_pmwr_xdx_world_mode_28_12t2_4t5(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 16), get_pmwr_xdx_world_mode_28_12t2_4t5_16)

}

function get_pmwr_xdx_world_mode_28_12t2_4t5_16(o) {
    if (u32(o + 4) !== 13 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 8)) {
    case 1:
        ä(pmwr_demo_world_92, u32(o + 0), get_pmwr_demo_world_92)
        break
    case 2:
        break
    default:
        if (u32(o)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
        }
    }

}

function get_pmwr_xdx_world_mode_28_12t2_4t19(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 16), get_pmwr_xdx_world_mode_28_12t2_4t19_16)

}

function get_pmwr_xdx_world_mode_28_12t2_4t19_16(o) {
    if (u32(o + 0) !== 501328 || u32(o + 4) !== 8 || u32(o + 8) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_world_60, u32(o + 0), get_pmwr_demo_world_60)

}

function get_pmwr_xdx_world_mode_28_12t2_4t9(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 16), get_pmwr_xdx_world_mode_28_12t2_4t9_16)

}

function get_pmwr_xdx_world_mode_28_12t2_4t9_16(o) {
    if (u32(o + 4) !== 15 || u32(o + 8) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_xdx_world_mode_28_12t2_4t4(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 16), get_pmwr_xdx_world_mode_28_12t2_4t4_16)

}

function get_pmwr_xdx_world_mode_28_12t2_4t4_16(o) {
    if (u32(o + 4) !== 10 || u32(o + 8) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_xdx_world_mode_28_12t2_4t11(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u8(o + 3) !== 8 || f32(o + 4) !== 20 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 16), get_pmwr_xdx_world_mode_28_12t2_4t11_16)

}

function get_pmwr_xdx_world_mode_28_12t2_4t11_16(o) {
    if (u32(o + 4) !== 1 || u32(o + 8) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_world_20, u32(o + 0), get_pmwr_demo_world_20)
}

function get_pmwr_xdx_world_mode_28_12t8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 8)) {
    case 1025:
        ä(pmwr_demo_flag, u32(o + 0), get_pmwr_demo_flag)
        break
    case 1026:
        ö(u32(o + 0), get_pmwr_xdx_world_mode_28_12t8_0t1026)
        break
    default:
        if (u32(o + 0)) {
            console.log(o)
        }
    }

}

function get_pmwr_xdx_world_mode_28_12t8_0t1026(o) {
    if (u32(o + 0) !== 6 || u32(o + 8) !== 2022)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_xdx_world_mode_28_12t8_0t1026_4)
    ö(u32(o + 12), get_pmwr_xdx_world_mode_28_12t8_0t1026_12)

}

function get_pmwr_xdx_world_mode_28_12t8_0t1026_4(o) {
    if (u32(o + 0) || u32(o + 4) !== 11 || u32(o + 8) !== 5 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_xdx_world_mode_28_12t8_0t1026_12(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_xdx_world_mode_28_12t15(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_world_160_60(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    globalThis.xpstemptype = 60
    ö(u32(o + 0), get_pmwr_xdx_world_mode)

}

function get_pmwr_demo_world_160_84(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    globalThis.xpstemptype = 84
    ö(u32(o + 0), get_pmwr_xdx_world_mode)

}

function get_pmwr_demo_world_160_92(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    globalThis.xpstemptype = 92
    ö(u32(o + 0), get_pmwr_xdx_world_mode)

}

function get_pmwr_demo_world_192(o) {
    /*ü(1, [u32, 0], o)*/
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_gate, u32(o + 0), get_pmwr_demo_gate)

}

function get_pmwr_demo_basic(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 16 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    ö(u32(o + 4), get_pmwr_demo_basic_4)

}

function get_pmwr_demo_basic_4(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)
    switch (g.type) {
    case 0:
        ö(u32(o), get_pmwr_demo_car)
        break
    case 1:
        ä(pmwr_demo_interface, u32(o), get_pmwr_demo_interface)
        break
    case 3:
        ö(u32(o), get_pmwr_demo_link)
        break
    default:
        if (u32(o))
            console.log("?")
    }

}

function get_pmwr_demo_car(o) {
    if (u32(o + 4) !== 4 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_car_0)

}
function get_pmwr_demo_car_0(o) {
    if (u32(o + 0) || u8(o + 4) !== 255 || u8(o + 5) !== 255 || u8(o + 6) !== 255 || u8(o + 7) !== 255 || u8(o + 36) !== 255 || u8(o + 37) !== 255 || u8(o + 38) !== 255 || u8(o + 39) !== 255 || u32(o + 164) || u32(o + 204) !== 8 || u32(o + 212) !== 11 || u32(o + 220) !== 11 || u32(o + 236))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79, u8, 80, u8, 81, u8, 82, u8, 83, u32, 84, u32, 88, u8, 92, u8, 93, u8, 94, u8, 95, u8, 96, u8, 97, u8, 98, u8, 99, u8, 100, u8, 101, u8, 102, u8, 103, u8, 104, u8, 105, u8, 106, u8, 107, u32, 108, u32, 112, u8, 116, u8, 117, u8, 118, u8, 119, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u8, 140, u8, 141, u8, 142, u8, 143, u8, 144, u8, 145, u8, 146, u8, 147, u8, 148, u8, 149, u8, 150, u8, 151, u8, 152, u8, 153, u8, 154, u8, 155, u8, 156, u8, 157, u8, 158, u8, 159, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236], o)

    ä(pmwr_demo_model_anims_2, u32(o + 176), get_pmwr_demo_model_anims_2)

    ö(u32(o + 180), get_pmwr_demo_car_0_180)
    ö(u32(o + 184), get_pmwr_demo_car_0_184)
    ö(u32(o + 188), get_pmwr_demo_car_0_188)
    ö(u32(o + 192), get_pmwr_demo_car_0_192)
    ö(u32(o + 196), get_pmwr_demo_car_0_196)
    ö(u32(o + 200), get_pmwr_demo_car_0_200)
    for (let i = 0; i < u32(o + 204); i++) {
        ö(u32(o + 208) + (i * 8), get_pmwr_demo_car_0_208)
    }
    for (let i = 0; i < u32(o + 212); i++) {
        ö(u32(o + 216) + (i * 12), get_pmwr_demo_car_0_216)
    }
    for (let i = 0; i < u32(o + 220); i++) {
        ö(u32(o + 224) + (i * 12), get_pmwr_demo_car_0_216)
    }
    ö(u32(o + 232), get_pmwr_demo_car_0_232)

}

function get_pmwr_demo_car_0_180(o) {
    if (u32(o + 12) !== 4 || u32(o + 20) !== 4 || u32(o + 28) !== 4 || u32(o + 36) !== 4 || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 0), get_pmwr_demo_car_0_180_0)
    ö(u32(o + 4), get_pmwr_demo_car_0_180_4)
    ä(pmwr_demo_sound_section, u32(o + 8), get_pmwr_demo_sound_section)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_pmwr_demo_car_0_180_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 8), get_pmwr_demo_car_0_180_16)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 8), get_pmwr_demo_car_0_180_16)
    }
    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 8), get_pmwr_demo_car_0_180_16)
    }

}

function get_pmwr_demo_car_0_180_0(o) {
    if (f32(o + 0) !== 0.2199999988079071 || u32(o + 12) !== 5 || u32(o + 24) !== 200 || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_pmwr_demo_car_0_180_0_8)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 20), get_pmwr_demo_car_0_180_0_16)
    }
    ä(pmwr_demo_unknown, u32(o + 20), get_pmwr_demo_unknown)
    ä(pmwr_demo_unknown, u32(o + 28), get_pmwr_demo_unknown)
    ä(pmwr_demo_unknown, u32(o + 32), get_pmwr_demo_unknown)
    ä(pmwr_demo_unknown, u32(o + 36), get_pmwr_demo_unknown)

}

function get_pmwr_demo_car_0_180_0_8(o) {
    if (u8(o + 0) !== 10 || u8(o + 1) !== 10 || u8(o + 2) !== 10 || u8(o + 3) !== 128 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_car_0_180_0_16(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)*/

    ö(u32(o + 8), get_pmwr_demo_car_0_180_0_16_8)
    ö(u32(o + 12), get_pmwr_demo_car_0_180_0_16_12)
    ö(u32(o + 16), get_pmwr_demo_car_0_180_0_16_12)

}

function get_pmwr_demo_car_0_180_0_16_8(o) {
    if (u32(o + 0) || u32(o + 8) || u8(o + 13) || u8(o + 14) !== 232 || u8(o + 15) !== 3 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u8(o + 28) !== 255 || u8(o + 29) !== 255 || u8(o + 30) !== 255 || u8(o + 31) !== 255 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_pmwr_demo_car_0_180_0_16_12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_pmwr_demo_mysterious)
    }

}

function get_pmwr_demo_mysterious(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 12) || f32(o + 28) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60], o)

    switch (u8(o + 0)) {
    case 1:
        ä(pmwr_demo_unknown, u32(o + 4), get_pmwr_demo_unknown)
        break
    case 2:
        ä(pmwr_demo_strange, u32(o + 4), get_pmwr_demo_strange)
        break
    case 3:
        ä(pmwr_demo_sound_controls, u32(o + 4), get_pmwr_demo_sound_controls)
        break
    case 5:
    case 6:
        ö(u32(o + 4), get_pmwr_demo_mysterious_4t5)
        break
    case 7:
        ö(u32(o + 4), get_pmwr_demo_mysterious_4t7)
        break
    case 8:
        ä(pmwr_demo_interface_72_24t3_4_0, u32(o + 4), get_pmwr_demo_interface_72_24t3_4_0)
        break
    case 9:
        ä(pmwr_demo_mysterious_4t9, u32(o + 4), get_pmwr_demo_mysterious_4t9)
        break
    case 11:
        ä(pmwr_demo_activator, u32(o + 4), get_pmwr_demo_activator)
        break
    case 16:
        ö(u32(o + 4), get_pmwr_demo_mysterious_4t16)
        break
    default:
        if (u32(o + 4)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60], o)
        }
    }
    ö(u32(o + 8), get_pmwr_demo_mysterious_8)

}

function get_pmwr_demo_strange(o) {
    if (u8(o + 8) !== 1 || u8(o + 11) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_demo_strange_4)
    }

}

function get_pmwr_demo_strange_4(o) {
    /*ü(1, [u32, 0], o)*/
    ä(pmwr_demo_unknown, u32(o + 0), get_pmwr_demo_unknown)

}

function get_pmwr_demo_mysterious_4t5(o) {
    if (u8(o + 1) || u32(o + 8) || u8(o + 24) || u8(o + 27) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    switch (u8(o + 3)) {
    case 0:
        for (let i = 0; i < u32(o + 12); i++) {
            ö(u32(o + 16) + (i * 4), get_pmwr_demo_mysterious_4t5_16t0)
        }
        break
    case 2:
    case 3:
    case 5:
        for (let i = 0; i < u32(o + 12); i++) {
            ö(u32(o + 16) + (i * 4), get_pmwr_demo_mysterious_4t5_16t2)
        }
        break
    default:
        if (u32(o + 16)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
        }
    }
    ö(u32(o + 28), get_pmwr_demo_mysterious_4t5_28)
    ö(u32(o + 36), get_pmwr_demo_mysterious_4t5_36)
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 32), get_pmwr_demo_mysterious_4t5_44)
    }
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 12), get_pmwr_demo_mysterious_4t5_52)
    }
    ö(u32(o + 56), get_pmwr_demo_mysterious_4t5_56)

}
function get_pmwr_demo_mysterious_4t5_16t0(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_model', o, 0)
}
function get_pmwr_demo_mysterious_4t5_16t2(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)
}

function get_pmwr_demo_mysterious_4t5_28(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== -1 || u32(o + 12) || f32(o + 16) !== 90 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_mysterious_4t5_36(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_mysterious_4t5_44(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_mysterious_4t5_52(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_pmwr_demo_mysterious_4t5_56(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_mysterious_4t7(o) {
    if (u8(o + 3) || u32(o + 8) !== 15 || u32(o + 12) !== 1 || f32(o + 24) !== 1 || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, f32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, f32, 56, u32, 60], o)

    ö(u32(o + 16), get_pmwr_demo_mysterious_4t7_16)
    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 12), get_pmwr_demo_mysterious_4t7_40)
    }
    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 12), get_pmwr_demo_mysterious_4t7_40)
    }

}

function get_pmwr_demo_mysterious_4t7_16(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 0)
}
function get_pmwr_demo_mysterious_4t7_40(o) {
    if (u8(o + 4) || u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_pmwr_demo_mysterious_4t16(o) {
    if (u8(o + 3) !== 1 || u32(o + 4) || u32(o + 16) || f32(o + 20) !== 5 || u32(o + 28) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 8), get_pmwr_demo_mysterious_4t16_8)
    ö(u32(o + 12), get_pmwr_demo_mysterious_4t16_12)
    ö(u32(o + 36), get_pmwr_demo_mysterious_4t16_36)

}

function get_pmwr_demo_mysterious_4t16_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_mysterious_4t16_12(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_mysterious_4t16_36(o) {
    if (u32(o + 0) !== 5000 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_mysterious_4t16_36_4)

}

function get_pmwr_demo_mysterious_4t16_36_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || f32(o + 12) !== 200 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_pmwr_demo_mysterious_4t16_36_4_4)

}

function get_pmwr_demo_mysterious_4t16_36_4_4(o) {
    if (u32(o + 0) !== 4 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_mysterious_4t16_36_4_4_4)

}

function get_pmwr_demo_mysterious_4t16_36_4_4_4(o) {
    if (u8(o + 0) !== 22 || u8(o + 1) !== 27 || u8(o + 2) !== 114 || u8(o + 3) !== 24 || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_mysterious_4t16_36_4_4_4_4)

}

function get_pmwr_demo_mysterious_4t16_36_4_4_4_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_mysterious_4t9(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 3) !== 1 || u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_pmwr_demo_mysterious_4t9_8)
    ö(u32(o + 12), get_pmwr_demo_mysterious_4t9_12)

}

function get_pmwr_demo_mysterious_4t9_8(o) {
    if (u8(o + 4) !== 5 || f32(o + 16) !== 32 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_pmwr_demo_mysterious_4t9_8_8)

}

function get_pmwr_demo_mysterious_4t9_8_8(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_mysterious_4t9_12(o) {
    if (u8(o + 8) || u8(o + 10) !== 2 || u8(o + 11) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_pmwr_demo_mysterious_4t9_12_4)
    ö(u32(o + 12), get_pmwr_demo_mysterious_4t9_12_12)

}

function get_pmwr_demo_mysterious_4t9_12_4(o) {
    if (u8(o + 4) !== 5 || u8(o + 7) || u8(o + 28) || u8(o + 32) || u8(o + 36) || u8(o + 37) || u8(o + 39) || u32(o + 40) || u32(o + 48))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48], o)
    ß('p_texture', o, 0)
    ö(u32(o + 8), get_pmwr_demo_mysterious_4t9_12_4_8)
    ö(u32(o + 44), get_pmwr_demo_mysterious_4t9_12_4_44)

}

function get_pmwr_demo_mysterious_4t9_12_4_8(o) {
    if (u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_mysterious_4t9_12_4_44(o) {
    if (u32(o + 4) !== 5 || u32(o + 16) !== 24 || u32(o + 20) !== 6 || u32(o + 24) || u32(o + 28) !== 24)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_pmwr_demo_mysterious_4t9_12_4_44_8)
    ö(u32(o + 12), get_pmwr_demo_mysterious_4t9_12_4_44_12)

}

function get_pmwr_demo_mysterious_4t9_12_4_44_8(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) || u8(o + 2) || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_mysterious_4t9_12_4_44_12(o) {
    if (u8(o + 0) || u8(o + 1) !== 255 || u8(o + 2) || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_mysterious_4t9_12_12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 52), get_pmwr_demo_mysterious_4t9_12_4)
    }

}

function get_pmwr_demo_mysterious_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_car_0_180_4(o) {
    if (f32(o + 0) !== -250 || f32(o + 4) !== 15 || f32(o + 8) !== 6000 || f32(o + 12) !== 1120 || u32(o + 16) || f32(o + 20) !== -1.7999999523162842 || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 16 || f32(o + 36) !== 500 || f32(o + 40) !== 1000 || f32(o + 44) !== 25 || f32(o + 48) !== 50 || f32(o + 52) !== 75 || u32(o + 60) !== 800 || f32(o + 72) !== 8 || f32(o + 76) !== 50)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ö(u32(o + 56), get_pmwr_demo_car_0_180_4_56)
    ö(u32(o + 64), get_pmwr_demo_car_0_180_4_64)
    ä(pmwr_demo_unknown, u32(o + 68), get_pmwr_demo_unknown)

    ö(u32(o + 80), get_pmwr_demo_car_0_180_4_80)

    ä(pmwr_demo_car_0_180_4_84, u32(o + 84), get_pmwr_demo_car_0_180_4_84)
    ä(pmwr_demo_car_0_180_4_84, u32(o + 88), get_pmwr_demo_car_0_180_4_84)
    ö(u32(o + 92), get_pmwr_demo_car_0_180_4_92)

}

function get_pmwr_demo_car_0_180_4_56(o) {
    if (u32(o + 0) || u32(o + 4) !== 500 || u32(o + 8) || u8(o + 12) !== 103 || u8(o + 13) || u8(o + 14) !== 238 || u8(o + 15) !== 2 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u8(o + 28) !== 255 || u8(o + 29) !== 255 || u8(o + 30) !== 255 || u8(o + 31) !== 255 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_pmwr_demo_car_0_180_4_64(o) {
    if (u32(o + 0) || u32(o + 4) !== 1000 || u32(o + 8) || u32(o + 12) !== 110 || u32(o + 16) || u32(o + 20) !== 2 || u32(o + 24) || u8(o + 28) !== 255 || u8(o + 29) !== 255 || u8(o + 30) !== 255 || u8(o + 31) !== 255 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_pmwr_demo_car_0_180_4_80(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || f32(o + 8) !== -50 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(pmwr_demo_unknown, u32(o + 16), get_pmwr_demo_unknown)

}

function get_pmwr_demo_car_0_180_4_84(o) {
    if (u32(o + 0) !== 3000 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_car_0_180_4_92(o) {
    if (f32(o + 0) !== 0.25 || f32(o + 4) !== 1.600000023841858 || f32(o + 8) !== 0.6000000238418579 || u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}

function get_pmwr_demo_car_0_180_16(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_pmwr_demo_car_0_180_16_4)

}

function get_pmwr_demo_car_0_180_16_4(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28], o)*/
}

function get_pmwr_demo_car_0_184(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_car_0_184_4)

}

function get_pmwr_demo_car_0_184_4(o) {
    if (f32(o + 16) !== 60 || f32(o + 24) !== 60 || f32(o + 28) !== -30 || f32(o + 32) !== -1000 || f32(o + 36) !== 70 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 0), get_pmwr_demo_car_0_184_4_0)
    ö(u32(o + 4), get_pmwr_demo_car_0_184_4_4)
    ö(u32(o + 8), get_pmwr_demo_car_0_184_4_8)

}

function get_pmwr_demo_car_0_184_4_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 15 || u32(o + 36) || f32(o + 40) !== 50 || f32(o + 48) !== 1 || f32(o + 52) !== 1 || f32(o + 56) !== 1 || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 16), get_pmwr_demo_car_0_184_4_0_16)
    ä(pmwr_demo_gate, u32(o + 44), get_pmwr_demo_gate)

}

function get_pmwr_demo_car_0_184_4_0_16(o) {
    if (f32(o + 4) !== 1.7000000476837158 || u32(o + 12) || f32(o + 20) !== 1.899999976158142 || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_pmwr_demo_car_0_184_4_4(o) {
    if (f32(o + 0) !== 0.8999999761581421 || f32(o + 4) !== 2.3499999046325684 || u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_pmwr_demo_car_0_184_4_8(o) {
    if (f32(o + 4) !== 1 || u32(o + 12) || f32(o + 20) !== 1 || u32(o + 28) || f32(o + 36) !== 1 || u32(o + 44) || f32(o + 52) !== 1 || u32(o + 60) || f32(o + 64) !== 1.5 || f32(o + 68) !== 1.2000000476837158 || f32(o + 72) !== 1 || f32(o + 76) !== 2.5 || f32(o + 80) !== 2000 || f32(o + 84) !== 60 || u32(o + 88) || u32(o + 92))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, u32, 88, u32, 92], o)
}

function get_pmwr_demo_car_0_188(o) {
    if (u32(o + 20) !== 25 || u32(o + 44) || u32(o + 96) || u32(o + 100) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, f32, 88, f32, 92, u32, 96, u32, 100, f32, 104, f32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)

    ä(pmwr_demo_model_anims_2, u32(o + 0), get_pmwr_demo_model_anims_2)

    ä(pmwr_demo_interface_72_24t3_4_0, u32(o + 4), get_pmwr_demo_interface_72_24t3_4_0)

    ä(pmwr_demo_model_anims_1, u32(o + 8), get_pmwr_demo_model_anims_1)
    ä(pmwr_demo_model_anims_1, u32(o + 12), get_pmwr_demo_model_anims_1)
    ä(pmwr_demo_model_anims_1, u32(o + 16), get_pmwr_demo_model_anims_1)
    ä(pmwr_demo_model_anims_1, u32(o + 24), get_pmwr_demo_model_anims_1)

    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 8), get_pmwr_demo_car_0_188_52)
    }
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 20), get_pmwr_demo_car_0_188_60)
    }
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 32), get_pmwr_demo_car_0_188_68)
    }
    for (let i = 0; i < u32(o + 72); i++) {
        ö(u32(o + 76) + (i * 32), get_pmwr_demo_car_0_188_68)
    }
    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 32), get_pmwr_demo_car_0_188_68)
    }

}

function get_pmwr_demo_car_0_188_52(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_pmwr_demo_car_0_188_52_4)

}

function get_pmwr_demo_car_0_188_52_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_demo_car_0_188_52_4_4)
    }

}

function get_pmwr_demo_car_0_188_52_4_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(pmwr_demo_interface_72_24t3_4_0, u32(o + 0), get_pmwr_demo_interface_72_24t3_4_0)

}

function get_pmwr_demo_car_0_188_60(o) {
    if (u8(o + 1))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12, u32, 16], o)
}
function get_pmwr_demo_car_0_188_68(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_pmwr_demo_car_0_192(o) {
    if (u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 16), get_pmwr_demo_car_0_192_16)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_pmwr_demo_car_0_192_24)
    }
    ö(u32(o + 32), get_pmwr_demo_car_0_192_32)

}

function get_pmwr_demo_car_0_192_16(o) {
    if (u32(o + 0) || u32(o + 4) !== 500 || u32(o + 8) || u32(o + 12) !== 200 || u32(o + 16) || u32(o + 20) !== 2 || u32(o + 24) || u32(o + 28) !== 12 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_pmwr_demo_car_0_192_24(o) {// ü(1, [f32, 0, f32, 4, f32, 8], o)
}
function get_pmwr_demo_car_0_192_32(o) {
    if (f32(o + 0) !== 10)
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_car_0_192_32_4)
    ö(u32(o + 8), get_pmwr_demo_car_0_192_32_8)
    ö(u32(o + 12), get_pmwr_demo_car_0_192_32_12)

}

function get_pmwr_demo_car_0_192_32_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_car_0_192_32_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_car_0_192_32_8_0)
    ö(u32(o + 8), get_pmwr_demo_car_0_192_32_8_8)

}

function get_pmwr_demo_car_0_192_32_8_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_car_0_192_32_8_0_4)

}

function get_pmwr_demo_car_0_192_32_8_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_car_0_192_32_8_8(o) {
    if (u32(o + 0) !== 841696 || u32(o + 4) !== 1 || u32(o + 8) !== 841728 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_car_0_192_32_8_8_0)
    ö(u32(o + 8), get_pmwr_demo_car_0_192_32_8_8_8)

}

function get_pmwr_demo_car_0_192_32_8_8_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 841712 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_car_0_192_32_8_8_0_4)

}

function get_pmwr_demo_car_0_192_32_8_8_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_car_0_192_32_8_8_8(o) {
    if (u32(o + 0) !== 512 || u32(o + 4) || u32(o + 8) !== 841760 || u32(o + 12) || f32(o + 16) !== 1 || f32(o + 20) !== 8 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_pmwr_demo_car_0_192_32_8_8_8_8)

}

function get_pmwr_demo_car_0_192_32_8_8_8_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 10 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_car_0_192_32_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_car_0_192_32_12_0)

}

function get_pmwr_demo_car_0_192_32_12_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_car_0_192_32_12_0_4)

}

function get_pmwr_demo_car_0_192_32_12_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_car_0_196(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ä(pmwr_demo_sound_section, u32(o + 0), get_pmwr_demo_sound_section)
    ä(pmwr_demo_sound_section, u32(o + 8), get_pmwr_demo_sound_section)

}

function get_pmwr_demo_car_0_200(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(pmwr_demo_interface, u32(o + 0), get_pmwr_demo_interface)
    ä(pmwr_demo_interface, u32(o + 4), get_pmwr_demo_interface)
    ä(pmwr_demo_interface, u32(o + 8), get_pmwr_demo_interface)
    ä(pmwr_demo_interface, u32(o + 12), get_pmwr_demo_interface)
    ä(pmwr_demo_interface, u32(o + 16), get_pmwr_demo_interface)
    ä(pmwr_demo_interface, u32(o + 20), get_pmwr_demo_interface)

}

function get_pmwr_demo_car_0_208(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_pmwr_demo_car_0_208_4)
    }

}

function get_pmwr_demo_car_0_208_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_pmwr_demo_car_0_216(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_pmwr_demo_mysterious)
    }

}

function get_pmwr_demo_car_0_232(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_unknown, u32(o + 0), get_pmwr_demo_unknown)

}

function get_pmwr_demo_unknown(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_pmwr_demo_unknown_4)
    }

}

function get_pmwr_demo_unknown_4(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    switch (u32(o + 0)) {
    case 1:
        ä(pmwr_demo_unknown_4_4t1, u32(o + 4), get_pmwr_demo_unknown_4_4t1)
        ö(u32(o + 8), get_pmwr_demo_unknown_4_8t1)
        break
    case 2:
        ä(pmwr_demo_unknown_4_4t2, u32(o + 4), get_pmwr_demo_unknown_4_4t2)
        ö(u32(o + 8), get_pmwr_demo_unknown_4_8t2)
        break
    case 3:
        ä(pmwr_demo_unknown, u32(o + 4), get_pmwr_demo_unknown)
        ö(u32(o + 8), get_pmwr_demo_unknown_4_8t3)
        break
    case 4:
        ä(pmwr_demo_strange, u32(o + 4), get_pmwr_demo_strange)
        ö(u32(o + 8), get_pmwr_demo_unknown_4_8t4)
        break
    case 5:
        ö(u32(o + 4), get_pmwr_demo_unknown_4_4t5)
        ö(u32(o + 8), get_pmwr_demo_unknown_4_8t5)
        break
    case 6:
        ä(pmwr_demo_world_92_64, u32(o + 4), get_pmwr_demo_world_92_64)
        ö(u32(o + 8), get_pmwr_demo_unknown_4_8t6)
        break
    case 26:
        ä(pmwr_demo_sound_controls, u32(o + 4), get_pmwr_demo_sound_controls)
        ö(u32(o + 8), get_pmwr_demo_unknown_4_8t26)
        break
    case 29:
        ö(u32(o + 4), get_pmwr_demo_unknown_4_4t29)
        ö(u32(o + 8), get_pmwr_demo_unknown_4_8t29)
        break
    case 31:
        ä(pmwr_demo_activator, u32(o + 4), get_pmwr_demo_activator)
        ö(u32(o + 8), get_pmwr_demo_unknown_4_8t31)
        break
    default:
        if (u32(o + 4) || u32(o + 8)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
        }
    }

}
function get_pmwr_demo_unknown_4_4t1(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    switch (u8(o + 0)) {
    case 0:
        ö(u32(o + 4), get_pmwr_demo_unknown_4_4t1_4t0)
        break
    case 1:
        ö(u32(o + 4), get_pmwr_demo_unknown_4_4t1_4t1)
        break
    case 2:
        ö(u32(o + 4), get_pmwr_demo_unknown_4_4t1_4t2)
        break
    default:
        if (u32(o + 4)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
        }
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_pmwr_demo_unknown_4_4t1_24)
    }

    ö(u32(o + 32), get_pmwr_demo_unknown_4_4t1_32)

}

function get_pmwr_demo_unknown_4_4t1_4t2(o) {
    if (u8(o + 25) || u8(o + 27) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_pmwr_demo_unknown_4_4t1_4t2_4)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_pmwr_demo_unknown_4_4t1_4t2_20)
    }

}

function get_pmwr_demo_unknown_4_4t1_4t2_4(o) {
    if (u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_pmwr_demo_unknown_4_4t1_4t2_20(o) {// ü(1, [f32, 0, u32, 4, f32, 8], o)
}

function get_pmwr_demo_unknown_4_4t1_4t0(o) {
    if (u32(o + 12) || u32(o + 52) !== 1 || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_demo_unknown_4_4t1_4t0_4)
    }
    ö(u32(o + 40), get_pmwr_demo_unknown_4_4t1_4t0_40)
    ö(u32(o + 48), get_pmwr_demo_unknown_4_4t1_4t0_48)
    ö(u32(o + 56), get_pmwr_demo_unknown_4_4t1_4t0_56)
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 8), get_pmwr_demo_unknown_4_4t1_4t0_64)
    }

}

function get_pmwr_demo_unknown_4_4t1_4t0_4(o) {
    // ü(1, [u32, 0], o)
    ß('p_model', o, 0)

}
function get_pmwr_demo_unknown_4_4t1_4t0_40(o) {
    if (u32(o + 12) || u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_unknown_4_4t1_4t0_48(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [f32, 0, u32, 4, u32, 8, f32, 12], o)
}

function get_pmwr_demo_unknown_4_4t1_4t0_56(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_unknown_4_4t1_4t0_64(o) {
    // ü(1, [u32, 0, u32, 4], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_pmwr_demo_unknown_4_4t1_4t0_64_4)
    }

}

function get_pmwr_demo_unknown_4_4t1_4t0_64_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)
}

function get_pmwr_demo_unknown_4_4t1_4t1(o) {
    if (u8(o + 10) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_demo_unknown_4_4t1_4t1_4)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 12), get_pmwr_demo_unknown_4_4t1_4t1_44)
    }
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 12), get_pmwr_demo_unknown_4_4t1_4t1_52)
    }
    ö(u32(o + 56), get_pmwr_demo_unknown_4_4t1_4t1_56)
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 8), get_pmwr_demo_unknown_4_4t1_4t1_64)
    }

}

function get_pmwr_demo_unknown_4_4t1_4t1_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}
function get_pmwr_demo_unknown_4_4t1_4t1_44(o) {/*ü(1, [f32, 0, u32, 4, f32, 8, f32, 12], o)*/
}
function get_pmwr_demo_unknown_4_4t1_4t1_52(o) {/*ü(1, [f32, 0, u32, 4, f32, 8], o)*/
}
function get_pmwr_demo_unknown_4_4t1_4t1_56(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_unknown_4_4t1_4t1_64(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_pmwr_demo_unknown_4_4t1_4t1_64_4)
    }

}

function get_pmwr_demo_unknown_4_4t1_4t1_64_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)
}

function get_pmwr_demo_unknown_4_4t1_24(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_pmwr_demo_unknown_4_4t1_32(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_unknown, u32(o + 0), get_pmwr_demo_unknown)

}

function get_pmwr_demo_unknown_4_4t2(o) {
    if (u8(o + 1) !== 1 || u8(o + 3) || u32(o + 12) || u32(o + 16) || u8(o + 24) || u32(o + 36) || u8(o + 53) || u32(o + 76) || u32(o + 80) || u32(o + 92) || u32(o + 96) || u32(o + 108))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u8, 24, u8, 25, u8, 26, u8, 27, f32, 28, u32, 32, u32, 36, f32, 40, u32, 44, f32, 48, u8, 52, u8, 53, u8, 54, u8, 55, f32, 56, u32, 60, f32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    ä(pmwr_demo_unknown, u32(o + 32), get_pmwr_demo_unknown)

    ö(u32(o + 60), get_pmwr_demo_unknown_4_4t2_60)
    ä(pmwr_demo_unknown, u32(o + 68), get_pmwr_demo_unknown)
    ä(pmwr_demo_unknown, u32(o + 72), get_pmwr_demo_unknown)
    ä(pmwr_demo_unknown, u32(o + 84), get_pmwr_demo_unknown)

    switch (u8(o + 55)) {
    case 1:
        ö(u32(o + 88), get_pmwr_demo_unknown_4_4t2_88t1)
        break
    case 2:
        ö(u32(o + 88), get_pmwr_demo_unknown_4_4t2_88t2)
        break
    default:
        if (u32(o + 88)) {
            console.log(o)
        }
    }

    for (let i = 0; i < u32(o + 100); i++) {
        ö(u32(o + 104) + (i * 64), get_pmwr_demo_mysterious)
    }

}

function get_pmwr_demo_unknown_4_4t2_60(o) {
    if (f32(o + 0) !== 10)
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_unknown_4_4t2_60_4)
    ö(u32(o + 8), get_pmwr_demo_unknown_4_4t2_60_8)
    ö(u32(o + 12), get_pmwr_demo_unknown_4_4t2_60_12)

}

function get_pmwr_demo_unknown_4_4t2_60_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_unknown_4_4t2_60_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_unknown_4_4t2_60_8_0)

}

function get_pmwr_demo_unknown_4_4t2_60_8_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_unknown_4_4t2_60_8_0_4)

}

function get_pmwr_demo_unknown_4_4t2_60_8_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_unknown_4_4t2_60_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_unknown_4_4t2_60_12_0)

}

function get_pmwr_demo_unknown_4_4t2_60_12_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_unknown_4_4t2_60_12_0_4)

}

function get_pmwr_demo_unknown_4_4t2_60_12_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_unknown_4_4t2_88t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_unknown_4_4t2_88t2(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_unknown_4_8t3(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u8(o + 41) || u8(o + 42) !== 1 || u8(o + 43) || u32(o + 44) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 48), get_pmwr_demo_unknown_4_8t3_48)
    ö(u32(o + 52), get_pmwr_demo_unknown_4_8t3_52)

}

function get_pmwr_demo_unknown_4_8t3_48(o) {
    if (f32(o + 0) !== -50 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_unknown_4_8t3_52(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_unknown_4_4t5(o) {
    if (u32(o + 32) !== 1 || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_pmwr_demo_unknown_4_4t5_4)
    ö(u32(o + 12), get_pmwr_demo_unknown_4_4t5_12)
    ö(u32(o + 20), get_pmwr_demo_unknown_4_4t5_20)
    ö(u32(o + 28), get_pmwr_demo_unknown_4_4t5_28)
    ö(u32(o + 36), get_pmwr_demo_unknown_4_4t5_36)

}

function get_pmwr_demo_unknown_4_4t5_12(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_pmwr_demo_unknown_4_4t5_12_4)
    }

}

function get_pmwr_demo_unknown_4_4t5_12_4(o) {/*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)*/
}

function get_pmwr_demo_unknown_4_4t5_20(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_unknown_4_4t5_20_4)

}

function get_pmwr_demo_unknown_4_4t5_20_4(o) {
    if (u32(o + 4) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12], o)
}

function get_pmwr_demo_unknown_4_4t5_28(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_unknown_4_4t5_28_4)

}

function get_pmwr_demo_unknown_4_4t5_28_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_unknown_4_4t5_28_4_0, u32(o + 0), get_pmwr_demo_unknown_4_4t5_28_4_0)

}

function get_pmwr_demo_unknown_4_4t5_28_4_0(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_unknown_4_4t5_28_4_0_4)

}

function get_pmwr_demo_unknown_4_4t5_28_4_0_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_unknown_4_4t5_4(o) {
    if (u32(o + 4) || u32(o + 24) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 12), get_pmwr_demo_unknown_4_4t5_4_12)
    ö(u32(o + 20), get_pmwr_demo_unknown_4_4t5_4_20)
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 64), get_pmwr_demo_mysterious)
    }
}
function get_pmwr_demo_unknown_4_4t5_4_12(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 8) || u8(o + 12) !== 100 || u8(o + 13) || u8(o + 14) !== 100 || u8(o + 15) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u8(o + 28) !== 255 || u8(o + 29) !== 255 || u8(o + 30) !== 255 || u8(o + 31) !== 255 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_pmwr_demo_unknown_4_4t5_4_20(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_pmwr_demo_unknown_4_4t5_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_activator(o) {
    if (u32(o + 16) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 60) || u32(o + 68) || u32(o + 76) || u32(o + 84) || u8(o + 122) || u8(o + 152) || u32(o + 156) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 188) || u32(o + 192) || u32(o + 216) || u32(o + 220) || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 252))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, u32, 76, f32, 80, u32, 84, f32, 88, f32, 92, f32, 96, f32, 100, f32, 104, u32, 108, u32, 112, u32, 116, u8, 120, u8, 121, u8, 122, u8, 123, u32, 124, f32, 128, f32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u8, 152, u8, 153, u8, 154, u8, 155, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, f32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252], o)

    ä(pmwr_demo_model_anims_2, u32(o + 4), get_pmwr_demo_model_anims_2)

    ö(u32(o + 8), get_pmwr_demo_activator_8)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 24), get_pmwr_demo_activator_24)
    }
    ö(u32(o + 108), get_pmwr_demo_activator_108)
    ö(u32(o + 116), get_pmwr_demo_activator_116)
    ö(u32(o + 124), get_pmwr_demo_activator_124)

    ö(u32(o + 144), get_pmwr_demo_activator_144)

    ö(u32(o + 148), get_pmwr_demo_activator_148)
    for (let i = 0; i < u32(o + 172); i++) {
        ö(u32(o + 176) + (i * 20), get_pmwr_demo_activator_176)
    }
    for (let i = 0; i < u32(o + 180); i++) {
        ö(u32(o + 184) + (i * 12), get_pmwr_demo_activator_184)
    }
    for (let i = 0; i < u32(o + 196); i++) {
        ö(u32(o + 200) + (i * 12), get_pmwr_demo_activator_200)
    }
    for (let i = 0; i < u32(o + 208); i++) {
        ö(u32(o + 212) + (i * 4), get_pmwr_demo_activator_212)
    }
    ö(u32(o + 228), get_pmwr_demo_activator_228)
    for (let i = 0; i < u32(o + 244); i++) {
        ö(u32(o + 248) + (i * 36), get_pmwr_demo_activator_248)
    }

}
function get_pmwr_demo_activator_116(o) {
    if (u8(o + 0) !== 126 || u8(o + 1) !== 74 || u8(o + 2) !== 154 || u8(o + 3) !== 18 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_124(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 20) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28], o)
}
function get_pmwr_demo_activator_176(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)*/

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_pmwr_demo_activator_176_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 12), get_pmwr_demo_activator_176_8)
    }

}

function get_pmwr_demo_activator_176_8(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ö(u32(o + 8), get_pmwr_demo_activator_176_8_8)

}

function get_pmwr_demo_activator_176_8_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_activator_228(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_unknown, u32(o + 0), get_pmwr_demo_unknown)

}

function get_pmwr_demo_activator_8(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_activator_24(o) {
    if (u32(o + 12) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23], o)

    ö(u32(o + 4), get_pmwr_demo_activator_24_4)

}

function get_pmwr_demo_activator_24_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_activator_24_4_4)

}

function get_pmwr_demo_activator_24_4_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_activator_108(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_pmwr_demo_activator_108_8)

}

function get_pmwr_demo_activator_108_8(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 8), get_pmwr_demo_activator_108_8_8)

}

function get_pmwr_demo_activator_108_8_8(o) {
    if (u32(o + 0) !== 4 || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_activator_144(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_pmwr_demo_activator_148(o) {
    if (f32(o + 0) !== 10)
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_activator_148_4)
    ö(u32(o + 8), get_pmwr_demo_activator_148_8)
    ö(u32(o + 12), get_pmwr_demo_activator_148_12)

}

function get_pmwr_demo_activator_148_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_activator_148_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_activator_148_8_0)

}

function get_pmwr_demo_activator_148_8_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_activator_148_8_0_4)

}

function get_pmwr_demo_activator_148_8_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_activator_148_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_activator_148_12_0)

}

function get_pmwr_demo_activator_148_12_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_activator_148_12_0_4)

}

function get_pmwr_demo_activator_148_12_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_activator_184(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_pmwr_demo_mysterious)
    }

}

function get_pmwr_demo_activator_200(o) {
    if (u32(o + 0) !== 3 || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_pmwr_demo_mysterious)
    }

}

function get_pmwr_demo_activator_212(o) {
    /*ü(1, [u32, 0], o)*/

    ä(pmwr_demo_unknown, u32(o + 0), get_pmwr_demo_unknown)

}

function get_pmwr_demo_activator_248(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_pmwr_demo_activator_248_4)
    }
    ö(u32(o + 8), get_pmwr_demo_activator_248_8)
    ä(pmwr_demo_sound_controls, u32(o + 20), get_pmwr_demo_sound_controls)

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 80), get_pmwr_demo_activator_248_32)
    }

}

function get_pmwr_demo_activator_248_4(o) {
    if (u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    switch (u8(o + 0)) {
    case 0:
        ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t0)
        break
    case 1:
        ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t1)
        break
    case 2:
        ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t2)
        break
    case 3:
        ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t3)
        break
    case 4:
        ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t4)
        break
    case 5:
        ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t5)
        break
    case 6:
        ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t6)
        break
    case 9:
        ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t9)
        break
    case 11:
        ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t11)
        break
    case 12:
        ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t12)
        break
    case 13:
        ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t13)
        break
    case 15:
        ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t15)
        break
    default:
        if (u32(o + 4)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)
        }
    }

}
function get_pmwr_demo_activator_248_4_4t0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_activator_248_4_4t0_4, u32(o + 4), get_pmwr_demo_activator_248_4_4t0_4)

}

function get_pmwr_demo_activator_248_4_4t0_4(o) {
    if (u8(o + 25) || u8(o + 34) || u8(o + 35) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_pmwr_demo_activator_248_4_4t0_4_4)
    }

}

function get_pmwr_demo_activator_248_4_4t0_4_4(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t0_4_4_4)

}

function get_pmwr_demo_activator_248_4_4t0_4_4_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t0_4_4_4_4)

}

function get_pmwr_demo_activator_248_4_4t0_4_4_4_4(o) {
    if (u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_activator_248_4_4t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_4_4t2(o) {
    if (u32(o + 0) !== 2 || f32(o + 4) !== 2 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_4_4t3(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_4_4t4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_4_4t5(o) {
    if (u32(o + 0) || f32(o + 4) !== 2 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_4_4t6(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_4_4t9(o) {
    if (u32(o + 0) || f32(o + 4) !== -1 || u32(o + 8) || f32(o + 12) !== 1 || u8(o + 20) !== 1 || u8(o + 21) || u8(o + 23) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, f32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28], o)
}
function get_pmwr_demo_activator_248_4_4t11(o) {
    if (u32(o + 0) !== 7 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_4_4t12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_4_4t13(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_activator_248_4_4t13_0)

}

function get_pmwr_demo_activator_248_4_4t13_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_activator_248_4_4t13_0_4)

}

function get_pmwr_demo_activator_248_4_4t13_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_4_4t15(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_activator_248_8(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_demo_activator_248_32(o) {
    if (u32(o + 20) || u8(o + 43) || u8(o + 60) || u8(o + 62) || u8(o + 63))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, f32, 44, f32, 48, u32, 52, f32, 56, u8, 60, u8, 61, u8, 62, u8, 63, f32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 0), get_pmwr_demo_activator_248_32_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_pmwr_demo_activator_248_32_8)
    }
    ö(u32(o + 16), get_pmwr_demo_activator_248_32_16)
    ö(u32(o + 32), get_pmwr_demo_activator_248_32_32)
    ö(u32(o + 36), get_pmwr_demo_activator_248_32_36)
    ö(u32(o + 52), get_pmwr_demo_activator_248_32_52)
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 12), get_pmwr_demo_activator_248_32_72)
    }
    ö(u32(o + 76), get_pmwr_demo_activator_248_32_76)

}
function get_pmwr_demo_activator_248_32_32(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_activator_248_32_0(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_activator_248_32_8(o) {
    /*ü(1, [u32, 0], o)*/

    ä(pmwr_demo_interface_72_24t3_4_0, u32(o + 0), get_pmwr_demo_interface_72_24t3_4_0)

}

function get_pmwr_demo_activator_248_32_16(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_32_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_32_52(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_32_72(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t0)
        break
    case 2:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t2)
        break
    case 4:
    case 5:
        ä(pmwr_demo_activator, u32(o + 8), get_pmwr_demo_activator)
        break
    case 8:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t8)
        break
    case 10:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t10)
        break
    case 12:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t12)
        break
    case 13:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t13)
        break
    case 14:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t14)
        break
    case 15:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t15)
        break
    case 16:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t16)
        break
    case 17:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t17)
        break
    case 18:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t18)
        break
    case 20:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t20)
        break
    case 22:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t22)
        break
    case 23:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t23)
        break
    case 32:
        ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t32)
        break
    default:
        if (u32(o + 8)) {
            ü(1, [u32, 0, u32, 4, u32, 8], o)
        }
    }

}
function get_pmwr_demo_activator_248_32_72_8t0(o) {
    if (u32(o + 0) !== 4 || u32(o + 12))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_32_72_8t2(o) {
    if (u32(o + 0) !== 1 || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_32_72_8t8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_pmwr_demo_mysterious)
    }

}

function get_pmwr_demo_activator_248_32_72_8t10(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_32_72_8t12(o) {
    if (u32(o + 0) !== 4 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_32_72_8t13(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_32_72_8t14(o) {
    if (u32(o + 0) || f32(o + 4) !== 0.4472135901451111 || f32(o + 8) !== 0.8944271802902222 || u32(o + 12) || f32(o + 16) !== 200 || u32(o + 20) || f32(o + 24) !== 1 || u32(o + 28) !== 500)
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28], o)
}

function get_pmwr_demo_activator_248_32_72_8t15(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_32_72_8t16(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_32_72_8t17(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 64), get_pmwr_demo_mysterious)
    }

}

function get_pmwr_demo_activator_248_32_72_8t18(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t18_8)

}

function get_pmwr_demo_activator_248_32_72_8t18_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_activator_248_32_72_8t18_8_4)

}

function get_pmwr_demo_activator_248_32_72_8t18_8_4(o) {
    /*ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 8), get_pmwr_demo_activator_248_32_72_8t18_8_4_8)

}

function get_pmwr_demo_activator_248_32_72_8t18_8_4_8(o) {
    if (u32(o + 0) !== 5000 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_activator_248_32_72_8t20(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_32_72_8t22(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_activator_248_32_72_8t22_0)

}

function get_pmwr_demo_activator_248_32_72_8t22_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_activator_248_32_72_8t22_0_4)

}

function get_pmwr_demo_activator_248_32_72_8t22_0_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_activator_248_32_72_8t32(o) {
    if (u32(o + 4) || u32(o + 8) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_activator_248_32_72_8t23(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_pmwr_demo_mysterious)
    }

}

function get_pmwr_demo_activator_248_32_76(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_unknown_4_8t1(o) {
    if (u32(o + 20) || u8(o + 43) || u32(o + 44) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 48), get_pmwr_demo_unknown_4_8t1_48)
    switch (u8(o + 42)) {
    case 1:
        ö(u32(o + 52), get_pmwr_demo_unknown_4_8t1_52t1)
        break
    case 2:
        ö(u32(o + 52), get_pmwr_demo_unknown_4_8t1_52t2)
        break
    default:
        if (u32(o + 52)) {
            ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
        }
    }

}
function get_pmwr_demo_unknown_4_8t1_48(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_unknown_4_8t1_52t0(o) {
    ü(3, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_unknown_4_8t1_52t1(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_unknown_4_8t1_52t2(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 1:
        ö(u32(o + 12), get_pmwr_demo_unknown_4_8t1_52t2_12t1)
        break
    case 0:
        ö(u32(o + 12), get_pmwr_demo_unknown_4_8t1_52t2_12t0)
        break
    case 2:
        ö(u32(o + 12), get_pmwr_demo_unknown_4_8t1_52t2_12t2)
        break
    default:
        if (u32(o + 12)) {
            ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
        }
    }

}
function get_pmwr_demo_unknown_4_8t1_52t2_12t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_unknown_4_8t1_52t2_12t0(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 1 || f32(o + 8) !== 1 || u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_pmwr_demo_unknown_4_8t1_52t2_12t2(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_unknown_4_8t2(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 12) || u32(o + 20) || u8(o + 41) || u8(o + 43) || u32(o + 44) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 48), get_pmwr_demo_unknown_4_8t2_48)
    ö(u32(o + 52), get_pmwr_demo_unknown_4_8t2_52)

}
function get_pmwr_demo_unknown_4_8t2_48(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_unknown_4_8t2_52(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_unknown_4_8t4(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u8(o + 40) || u8(o + 43) || u32(o + 44) || u32(o + 48) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 52), get_pmwr_demo_unknown_4_8t4_52)

}

function get_pmwr_demo_unknown_4_8t4_52(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 10 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)
}

function get_pmwr_demo_unknown_4_8t5(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_unknown_4_8t26(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_unknown_4_8t6(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_unknown_4_4t29(o) {
    if (u8(o + 9) || u8(o + 10) !== 1 || u8(o + 11) || f32(o + 12) !== 0.10000000149011612 || f32(o + 16) !== 0.5 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 48), get_pmwr_demo_unknown_4_4t29_4)
    }

}

function get_pmwr_demo_unknown_4_4t29_4(o) {
    if (f32(o + 4) !== 100 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_model', o, 0)
}

function get_pmwr_demo_unknown_4_8t29(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 20) || u8(o + 40) || u8(o + 41) || u8(o + 43) || u32(o + 44) || u32(o + 48) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 52), get_pmwr_demo_unknown_4_8t29_52)

}

function get_pmwr_demo_unknown_4_8t29_52(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_unknown_4_8t31(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u8(o + 40) || u8(o + 41) || u8(o + 43) || u32(o + 44) || u32(o + 48) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 52), get_pmwr_demo_unknown_4_8t31_52)

}

function get_pmwr_demo_unknown_4_8t31_52(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_world_settings(o) {
    if (u32(o + 0) !== 4 || u8(o + 8) || u8(o + 9) !== 96 || u8(o + 10) !== 106 || u8(o + 11) !== 70 || u8(o + 16) || u8(o + 17) || u8(o + 18) !== 204 || u8(o + 19) !== 204 || u8(o + 20) !== 1 || u8(o + 21) || u8(o + 22) !== 204 || u8(o + 23) !== 204 || u8(o + 24) || u8(o + 25) || u8(o + 26) !== 204 || u8(o + 27) !== 204 || u8(o + 28) !== 128 || u8(o + 29) !== 150 || u8(o + 30) !== 24 || u8(o + 31) !== 75 || u8(o + 32) !== 128 || u8(o + 33) !== 150 || u8(o + 34) !== 24 || u8(o + 35) !== 75 || u8(o + 76) || u8(o + 77) || u8(o + 78) !== 100 || u8(o + 79) || u32(o + 80) || u32(o + 88) || u32(o + 92) || u32(o + 96) || f32(o + 100) !== 0.0010000000474974513 || f32(o + 104) !== 1 || f32(o + 108) !== 1 || f32(o + 112) !== 1 || f32(o + 116) !== 0.5 || u8(o + 120) || u8(o + 121) || u8(o + 123) || u32(o + 124) || u32(o + 128) || u8(o + 132) !== 3 || u8(o + 133) || u8(o + 134) !== 204 || u8(o + 135) !== 204 || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) || u32(o + 188))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u8, 76, u8, 77, u8, 78, u8, 79, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, f32, 100, f32, 104, f32, 108, f32, 112, f32, 116, u8, 120, u8, 121, u8, 122, u8, 123, u32, 124, u32, 128, u8, 132, u8, 133, u8, 134, u8, 135, f32, 136, f32, 140, f32, 144, f32, 148, f32, 152, f32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188], o)
    ß('p_texture', o, 16)
    ß('p_texture', o, 20)
    ß('p_texture', o, 24)
    ß('p_texture', o, 132)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_pmwr_demo_world_settings_4)
    }
    ö(u32(o + 12), get_pmwr_demo_world_settings_12)
    ö(u32(o + 36), get_pmwr_demo_world_settings_36)
    ö(u32(o + 48), get_pmwr_demo_world_settings_48)
    ö(u32(o + 52), get_pmwr_demo_world_settings_52)
    ö(u32(o + 56), get_pmwr_demo_world_settings_56)
    ö(u32(o + 60), get_pmwr_demo_world_settings_60)
    ö(u32(o + 64), get_pmwr_demo_world_settings_64)
    ö(u32(o + 68), get_pmwr_demo_world_settings_68)
    ö(u32(o + 72), get_pmwr_demo_world_settings_72)

    ä(pmwr_demo_font, u32(o + 84), get_pmwr_demo_font)
    ö(u32(o + 180), get_pmwr_demo_world_settings_180)
    ö(u32(o + 184), get_pmwr_demo_world_settings_184)

}

function get_pmwr_demo_world_settings_4(o) {
    if (u32(o + 4) || u8(o + 11) !== 255 || f32(o + 12) !== 50 || u32(o + 32) || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 1 || f32(o + 48) !== 100 || f32(o + 52) !== 0.5 || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, f32, 52, u32, 56, u32, 60], o)
}
function get_pmwr_demo_world_settings_12(o) {
    if (u32(o + 0) || u8(o + 4) !== 40 || u8(o + 5) !== 107 || u8(o + 6) !== 238 || u8(o + 7) !== 78 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_pmwr_demo_world_settings_36(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_world_settings_48(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_world_settings_52(o) {
    if (u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_world_settings_56(o) {
    if (u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_world_settings_60(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_pmwr_demo_world_settings_64(o) {
    if (f32(o + 0) !== 105 || f32(o + 4) !== 15 || f32(o + 8) !== 0.5 || f32(o + 12) !== 2 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_world_settings_68(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_world_settings_72(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_world_settings_180(o) {
    if (u32(o + 8) !== 500 || u32(o + 20) || u32(o + 36) !== 11 || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(pmwr_demo_interface, u32(o + 0), get_pmwr_demo_interface)
    ä(pmwr_demo_interface, u32(o + 4), get_pmwr_demo_interface)

    ö(u32(o + 12), get_pmwr_demo_world_settings_180_12)
    ö(u32(o + 16), get_pmwr_demo_world_settings_180_16)

    ö(u32(o + 24), get_pmwr_demo_car)
    ö(u32(o + 28), get_pmwr_demo_car)
    ö(u32(o + 32), get_pmwr_demo_car)

    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 8), get_pmwr_demo_world_settings_180_40)
    }

}

function get_pmwr_demo_world_settings_180_12(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_world_settings_180_16(o) {// console.log(get_string(o, 0, false))

}
function get_pmwr_demo_world_settings_180_40(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 0), get_pmwr_demo_world_settings_180_40_0)

}

function get_pmwr_demo_world_settings_180_40_0(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_demo_world_settings_184(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_pmwr_demo_world_settings_184_4)
    ö(u32(o + 8), get_pmwr_demo_world_settings_184_4)
    ö(u32(o + 12), get_pmwr_demo_world_settings_184_4)
    ö(u32(o + 16), get_pmwr_demo_world_settings_184_4)

}

function get_pmwr_demo_world_settings_184_4(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_pmwr_demo_world_settings_184_4_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_pmwr_demo_world_settings_184_4_4)
    }

}

function get_pmwr_demo_world_settings_184_4_4(o) {/*ü(1, [f32, 0, f32, 4, f32, 8], o)*/
}

function get_pmwr_demo_idk(o) {
    if (u8(o + 0) || u8(o + 3) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u8(o + 64) !== 255 || u8(o + 65) !== 255 || u8(o + 66) !== 255 || u8(o + 67) !== 255 || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, u32, 72, u32, 76], o)
    ß('p_model', o, 4)

    ö(u32(o + 12), get_pmwr_demo_idk_12)
    ö(u32(o + 32), get_pmwr_demo_mysterious)

}

function get_pmwr_demo_idk_12(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 8) !== 255 || u8(o + 9) !== 255 || u8(o + 10) !== 255 || u8(o + 11) !== 255 || u32(o + 12) !== 260 || u32(o + 16) || u32(o + 20) || u32(o + 24) || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || f32(o + 48) !== 1 || f32(o + 52) !== 1 || f32(o + 56) !== 1 || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 28), get_pmwr_demo_idk_12_28)
    ä(pmwr_demo_gate, u32(o + 44), get_pmwr_demo_gate)

}

function get_pmwr_demo_idk_12_28(o) {
    if (f32(o + 0) !== 10)
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_idk_12_28_4)
    ö(u32(o + 8), get_pmwr_demo_idk_12_28_8)
    ö(u32(o + 12), get_pmwr_demo_idk_12_28_12)

}

function get_pmwr_demo_idk_12_28_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_idk_12_28_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_idk_12_28_8_0)

}

function get_pmwr_demo_idk_12_28_8_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_idk_12_28_8_0_4)

}

function get_pmwr_demo_idk_12_28_8_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_idk_12_28_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_idk_12_28_12_0)

}

function get_pmwr_demo_idk_12_28_12_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_idk_12_28_12_0_4)

}

function get_pmwr_demo_idk_12_28_12_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_gate(o) {
    if (u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 20) || f32(o + 40) !== 1 || u32(o + 44) || f32(o + 48) !== 1 || u32(o + 52) || f32(o + 56) !== 1 || f32(o + 84) !== 300 || u32(o + 96) || u8(o + 100) || u8(o + 102) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124))
    ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, f32, 48, u32, 52, f32, 56, u32, 60, u32, 64, f32, 68, f32, 72, u32, 76, u32, 80, f32, 84, f32, 88, f32, 92, u32, 96, u8, 100, u8, 101, u8, 102, u8, 103, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)

    ö(u32(o + 24), get_pmwr_demo_gate_24)
    ä(pmwr_demo_unknown, u32(o + 28), get_pmwr_demo_unknown)

    ä(pmwr_demo_unknown, u32(o + 36), get_pmwr_demo_unknown)

    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 4), get_pmwr_demo_gate_64)
    }
    ä(pmwr_demo_sound_section, u32(o + 76), get_pmwr_demo_sound_section)

    ä(pmwr_demo_sound_controls, u32(o + 80), get_pmwr_demo_sound_controls)

}

function get_pmwr_demo_gate_24(o) {
    if (f32(o + 0) !== 0.3499999940395355 || f32(o + 4) !== 1.2999999523162842 || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_gate_64(o) {
    /*ü(1, [u32, 0], o)*/

    ä(pmwr_demo_unknown, u32(o + 0), get_pmwr_demo_unknown)

}
function get_pmwr_demo_flag(o) {
    if (u32(o + 0) || u8(o + 9) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u8(o + 31) !== 78 || u32(o + 32) || u32(o + 36) || u32(o + 40) !== 1 || u32(o + 44))
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_pmwr_demo_flag_4)
    ö(u32(o + 12), get_pmwr_demo_flag_12)

}

function get_pmwr_demo_flag_4(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_flag_12(o) {
    /*ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 12), get_pmwr_demo_flag_12_12)

}

function get_pmwr_demo_flag_12_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_world_60_76t8_4(o) {
    if (u32(o + 0) || u32(o + 8) !== 1 || u32(o + 12) || u32(o + 20) !== 2 || u32(o + 24) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_pmwr_demo_world_60_76t8_8(o) {
    if (u32(o + 24) || u32(o + 28))
    ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(pmwr_demo_unknown, u32(o + 16), get_pmwr_demo_unknown)
    ä(pmwr_demo_unknown, u32(o + 20), get_pmwr_demo_unknown)

}

function get_pmwr_demo_object(o) {
    if (u32(o + 0) || u8(o + 5) !== 1 || u8(o + 6) || u8(o + 44) || u8(o + 45) !== 1 || u8(o + 47) || u32(o + 52) || u32(o + 64) || u8(o + 68) !== 1 || u8(o + 70) || u8(o + 71) || u32(o + 76) || u32(o + 88) || u8(o + 92) !== 255 || u8(o + 93) !== 255 || u8(o + 94) !== 255 || u8(o + 95) !== 255)
    ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, u32, 36, f32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u8, 92, u8, 93, u8, 94, u8, 95], o)

    ö(u32(o + 8), get_pmwr_demo_object_8)
    ä(pmwr_demo_model_anims_2, u32(o + 12), get_pmwr_demo_model_anims_2)
    switch (u8(o + 7)) {
    case 15:
        ö(u32(o + 20), get_pmwr_demo_object_20t15)
        break
    case 16:
        ö(u32(o + 20), get_pmwr_demo_object_20t16)
        break
    case 17:
        ö(u32(o + 20), get_pmwr_demo_object_20t17)
        break
    case 18:
        ö(u32(o + 20), get_pmwr_demo_object_20t18)
        break
    default:
        if (u32(o + 20)) {
            ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, u32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u8, 92, u8, 93, u8, 94, u8, 95], o)
        }
    }
    ä(pmwr_demo_unknown, u32(o + 36), get_pmwr_demo_unknown)

    ä(pmwr_demo_text, u32(o + 48), get_pmwr_demo_text)

    ä(pmwr_demo_unknown, u32(o + 56), get_pmwr_demo_unknown)

    ö(u32(o + 72), get_pmwr_demo_object_72)

    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 64), get_pmwr_demo_mysterious)
    }

}

function get_pmwr_demo_object_8(o) {
    if (u8(o + 0) !== 26 || u8(o + 1) || u8(o + 2) !== 204 || u8(o + 3) !== 204 || u32(o + 4) !== 5 || f32(o + 8) !== 8 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    ß('p_texture', o, 0)

    ö(u32(o + 16), get_pmwr_demo_object_8_16)

}

function get_pmwr_demo_object_8_16(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_object_20t15(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_pmwr_demo_object_20t15_4)
    }
    ä(pmwr_demo_unknown, u32(o + 8), get_pmwr_demo_unknown)
    ä(pmwr_demo_object_20t15_12, u32(o + 12), get_pmwr_demo_object_20t15_12)

}

function get_pmwr_demo_object_20t15_4(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16], o)*/
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_pmwr_demo_object_20t15_4_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 8), get_pmwr_demo_object_20t15_4_4)
    }

}

function get_pmwr_demo_object_20t15_4_4(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/
    ä(pmwr_demo_object_20t15_4_4_0, u32(o + 0), get_pmwr_demo_object_20t15_4_4_0)

}

function get_pmwr_demo_object_20t15_4_4_0(o) {
    if (u32(o + 8) !== 1500 || u32(o + 12) || u32(o + 16) || u32(o + 28))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_pmwr_demo_mysterious)
    }
}

function get_pmwr_demo_object_20t15_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_object_20t16(o) {
    if (u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_object_20t17(o) {
    if (u32(o + 0) || u32(o + 4) !== 100 || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_object_20t18(o) {
    if (u32(o + 0) !== 4714272 || u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_object_20t18_0)

}

function get_pmwr_demo_object_20t18_0(o) {
    if (u32(o + 0) !== 10000 || u32(o + 4) !== 1 || u32(o + 8) !== 4714288 || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 64), get_pmwr_demo_mysterious)
    }

}

function get_pmwr_demo_object_72(o) {
    if (f32(o + 0) !== 10)
    ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_object_72_4)
    ö(u32(o + 8), get_pmwr_demo_object_72_8)
    ö(u32(o + 12), get_pmwr_demo_object_72_12)

}

function get_pmwr_demo_object_72_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_object_72_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_object_72_8_0)

}

function get_pmwr_demo_object_72_8_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_object_72_8_0_4)

}

function get_pmwr_demo_object_72_8_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_object_72_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_object_72_12_0)

}

function get_pmwr_demo_object_72_12_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_object_72_12_0_4)

}

function get_pmwr_demo_object_72_12_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}


function get_pmwr_demo_world_100_64(o) {
    if (u8(o + 8) !== 1 || u8(o + 9) || u8(o + 11) || u32(o + 12) || u32(o + 24) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_demo_world_100_64_4)
    }

}

function get_pmwr_demo_world_100_64_4(o) {
    /*ü(1, [u32, 0], o)*/
    ä(pmwr_demo_unknown, u32(o + 0), get_pmwr_demo_unknown)

}

function get_pmwr_demo_world_92_64(o) {
    if (u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u8(o + 64) !== 255 || u8(o + 65) !== 255 || u8(o + 66) !== 255 || u8(o + 67) !== 255 || u32(o + 68) || u32(o + 72) || u32(o + 76))
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, u32, 72, u32, 76], o)

    switch (u8(o)) {
    case 0:
        ß('p_model', o, 4)
        break
    case 1:
        ä(pmwr_demo_interface_72_24t3_4_0, u32(o + 4), get_pmwr_demo_interface_72_24t3_4_0)
        break
    default:
        if (u32(o + 4)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, u32, 72, u32, 76], o)
        }
    }

    ä(pmwr_demo_model_anims_2, u32(o + 8), get_pmwr_demo_model_anims_2)

    ö(u32(o + 12), get_pmwr_demo_world_92_64_12)
    ö(u32(o + 20), get_pmwr_demo_world_92_64_20)
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 64), get_pmwr_demo_mysterious)
    }
}

function get_pmwr_demo_world_92_64_20(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 5 || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 32), get_pmwr_demo_world_92_64_20_8)
    }
    ö(u32(o + 16), get_pmwr_demo_world_92_64_20_16)

}

function get_pmwr_demo_world_92_64_20_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
    ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_world_92_64_20_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_world_92_64_12(o) {
    if (u8(o + 8) !== 255 || u8(o + 9) !== 255 || u8(o + 10) !== 255 || u8(o + 11) !== 255 || u8(o + 14) || u8(o + 15) || u32(o + 24) || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || f32(o + 48) !== 1 || f32(o + 52) !== 1 || f32(o + 56) !== 1 || u32(o + 60) || u32(o + 72) || u32(o + 76))
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ß('p_model', o, 20)

    ö(u32(o + 16), get_pmwr_demo_world_92_64_12_16)
    ö(u32(o + 28), get_pmwr_demo_world_92_64_12_28)
    ä(pmwr_demo_gate, u32(o + 44), get_pmwr_demo_gate)

    ö(u32(o + 68), get_pmwr_demo_world_92_64_12_68)

}

function get_pmwr_demo_world_92_64_12_16(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
    ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_pmwr_demo_world_92_64_12_28(o) {
    /*ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)*/
    ö(u32(o + 4), get_pmwr_demo_world_92_64_12_28_4)
    ö(u32(o + 8), get_pmwr_demo_world_92_64_12_28_8)
    ö(u32(o + 12), get_pmwr_demo_world_92_64_12_28_12)

}

function get_pmwr_demo_world_92_64_12_28_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_world_92_64_12_28_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_world_92_64_12_28_8_0)

}

function get_pmwr_demo_world_92_64_12_28_8_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_world_92_64_12_28_8_0_4)

}

function get_pmwr_demo_world_92_64_12_28_8_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_world_92_64_12_28_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_world_92_64_12_28_12_0)

}

function get_pmwr_demo_world_92_64_12_28_12_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_world_92_64_12_28_12_0_4)

}

function get_pmwr_demo_world_92_64_12_28_12_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_world_92_64_12_68(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_unknown, u32(o + 0), get_pmwr_demo_unknown)
}

function get_pmwr_demo_interface(o) {
    if (u32(o + 32) || u32(o + 44) !== 1 || u32(o + 64) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 4), get_pmwr_demo_interface_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 28), get_pmwr_demo_interface_12)
    }
    ä(pmwr_demo_sound_controls, u32(o + 28), get_pmwr_demo_sound_controls)
    ä(pmwr_demo_sound_controls, u32(o + 36), get_pmwr_demo_sound_controls)
    ä(pmwr_demo_sound_controls, u32(o + 40), get_pmwr_demo_sound_controls)
    ö(u32(o + 48), get_pmwr_demo_interface_48)
    ä(pmwr_demo_sound_controls, u32(o + 52), get_pmwr_demo_sound_controls)

    ö(u32(o + 56), get_pmwr_demo_interface_56)
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 104), get_pmwr_demo_interface_72)
    }

}

function get_pmwr_demo_interface_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 36), get_pmwr_demo_interface_4_4)
    }

}

function get_pmwr_demo_interface_4_4(o) {
    if (u8(o + 34) || u8(o + 35))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35], o)

    ö(u32(o + 0), get_pmwr_demo_interface_4_4_0)
    switch (u8(o + 4)) {
    case 1:
        ö(u32(o + 12), get_pmwr_demo_interface_4_4_12t1)
        break
    case 5:
        ö(u32(o + 12), get_pmwr_demo_interface_4_4_12t5)
        break
    case 7:
        ö(u32(o + 12), get_pmwr_demo_interface_4_4_12t7)
        break
    case 8:
        ö(u32(o + 12), get_pmwr_demo_interface_4_4_12t8)
        break
    default:
        if (u32(o + 12)) {
            console.log(o)
        }
    }

}

function get_pmwr_demo_interface_4_4_0(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_interface_4_4_12t5(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_4_4_12t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_4_4_12t1_4)

}

function get_pmwr_demo_interface_4_4_12t1_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_4_4_12t8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_pmwr_demo_interface_4_4_12t8_4)
    }

}

function get_pmwr_demo_interface_4_4_12t8_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_pmwr_demo_interface_4_4_12t8_4_8)

}

function get_pmwr_demo_interface_4_4_12t8_4_8(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_demo_interface_4_4_12t7(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_12(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)*/

    ö(u32(o + 4), get_pmwr_demo_interface_12_4)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_pmwr_demo_interface_12_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 36), get_pmwr_demo_interface_12_24)
    }

}

function get_pmwr_demo_interface_12_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_pmwr_demo_interface_12_4_8)

}

function get_pmwr_demo_interface_12_4_8(o) {
    if (u32(o + 0) !== 704 || u32(o + 4) !== 16581712 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_12_4_8_4)

}

function get_pmwr_demo_interface_12_4_8_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_12_16(o) {
    if (u32(o + 0) !== 2)
        ü(1, [u32, 0, u32, 4], o)

    ö(u32(o + 4), get_pmwr_demo_interface_12_16_4)

}

function get_pmwr_demo_interface_12_16_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_pmwr_demo_interface_12_16_4_8)

}

function get_pmwr_demo_interface_12_16_4_8(o) {
    if (u32(o + 0) !== 218 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_12_16_4_8_4)

}

function get_pmwr_demo_interface_12_16_4_8_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_12_24(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    switch (u8(o + 0)) {
    case 1:
        ä(pmwr_demo_interface, u32(o + 4), get_pmwr_demo_interface)
        break
    case 11:
        ö(u32(o + 4), get_pmwr_demo_interface_12_24_4t11)
        break
    default:
        if (u32(o + 4)) {
            console.log(o)
        }
    }

    ö(u32(o + 8), get_pmwr_demo_interface_12_24_8)

}

function get_pmwr_demo_interface_12_24_4t11(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_pmwr_demo_interface_12_24_4t11_4)
    }

}

function get_pmwr_demo_interface_12_24_4t11_4(o) {
    // ü(1, [u32, 0, u32, 4], o)

    switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 4), get_pmwr_demo_interface_12_24_4t11_4_4t0)
        break
    case 1:
        ö(u32(o + 4), get_pmwr_demo_interface_12_24_4t11_4_4t1)
        break
    case 3:
        ä(pmwr_demo_sound_controls, u32(o + 4), get_pmwr_demo_sound_controls)
        break
    default:
        if (u32(o + 4)) {
            ü(1, [u32, 0, u32, 4], o)
        }
    }

}

function get_pmwr_demo_interface_12_24_4t11_4_4t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_interface_12_24_4t11_4_4t1_0)
    ö(u32(o + 4), get_pmwr_demo_interface_12_24_4t11_4_4t1_4)

}

function get_pmwr_demo_interface_12_24_4t11_4_4t1_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_12_24_4t11_4_4t1_0_4)

}

function get_pmwr_demo_interface_12_24_4t11_4_4t1_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_12_24_4t11_4_4t1_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_12_24_4t11_4_4t0(o) {
    if (u8(o + 5) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_12_24_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_interface_12_24_8_0)
    ö(u32(o + 4), get_pmwr_demo_interface_12_24_8_4)

}

function get_pmwr_demo_interface_12_24_8_0(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_12_24_8_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_pmwr_demo_sound_controls(o) {
    if (u32(o + 4) || u8(o + 8) !== 1 || u8(o + 11) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 16), get_pmwr_demo_sound_controls_16)
    }

}

function get_pmwr_demo_sound_controls_16(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, f32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_demo_sound_controls_16_4)
    }

}

function get_pmwr_demo_sound_controls_16_4(o) {
    // ü(1, [u32, 0], o)

    ä(pmwr_demo_sound_section, u32(o + 0), get_pmwr_demo_sound_section)

}

function get_pmwr_demo_sound_section(o) {
    if (u8(o + 7) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, u32, 28], o)
    ß('p_sound', o, 0)

    ö(u32(o + 8), get_pmwr_demo_sound_section_8)

}

function get_pmwr_demo_sound_section_8(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)
}

function get_pmwr_demo_interface_48(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_56(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_interface_56_0)

}

function get_pmwr_demo_interface_56_0(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_demo_interface_72(o) {
    if (u8(o + 17) || u32(o + 68) || u8(o + 80) !== 255 || u8(o + 81) !== 255 || u8(o + 82) !== 255 || u8(o + 83) !== 255 || u8(o + 84) !== 255 || u8(o + 85) !== 255 || u8(o + 86) !== 255 || u8(o + 87) !== 255 || u8(o + 88) !== 255 || u8(o + 89) !== 255 || u8(o + 90) !== 255 || u8(o + 91) !== 255 || u8(o + 92) !== 255 || u8(o + 93) !== 255 || u8(o + 94) !== 255 || u8(o + 95) !== 255 || u8(o + 96) !== 255 || u8(o + 97) !== 255 || u8(o + 98) !== 255 || u8(o + 99) !== 255 || u8(o + 100) !== 255 || u8(o + 101) !== 255 || u8(o + 102) !== 255 || u8(o + 103) !== 255)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u8, 96, u8, 97, u8, 98, u8, 99, u8, 100, u8, 101, u8, 102, u8, 103], o)

    ö(u32(o + 0), get_pmwr_demo_interface_72_0)
    ö(u32(o + 8), get_pmwr_demo_interface_72_8)

    switch (u32(o + 12)) {
    case 4:
        ö(u32(o + 20), get_pmwr_demo_interface_72_20t4)
        break
    case 38:
        ö(u32(o + 20), get_pmwr_demo_interface_72_20t38)
        break
    case 7:
        ö(u32(o + 20), get_pmwr_demo_interface_72_20t7)
        break
    default:
        if (u32(o + 20)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u8, 96, u8, 97, u8, 98, u8, 99, u8, 100, u8, 101, u8, 102, u8, 103], o)
        }
    }

    switch (u8(o + 19)) {
    case 0:
        ö(u32(o + 24), get_pmwr_demo_interface_72_24t0)
        break
    case 1:
    case 12:
        ö(u32(o + 24), get_pmwr_demo_interface_72_24t1)
        break
    case 3:
        ö(u32(o + 24), get_pmwr_demo_interface_72_24t3)
        break
    case 5:
        ö(u32(o + 24), get_pmwr_demo_interface_72_24t5)
        break
    case 6:
    case 7:
        ö(u32(o + 24), get_pmwr_demo_interface_72_24t6)
        break
    case 10:
        ö(u32(o + 24), get_pmwr_demo_interface_72_24t10)
        break
    case 11:
        ö(u32(o + 24), get_pmwr_demo_interface_72_24t11)
        break
    case 13:
        ö(u32(o + 24), get_pmwr_demo_interface_72_24t13)
        break
    case 14:
        ö(u32(o + 24), get_pmwr_demo_interface_72_24t14)
        break
    case 15:
        ö(u32(o + 24), get_pmwr_demo_interface_72_24t15)
        break
    default:
        if (u32(o + 24)) {
            ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u8, 96, u8, 97, u8, 98, u8, 99, u8, 100, u8, 101, u8, 102, u8, 103], o)
        }
    }

    ö(u32(o + 36), get_pmwr_demo_interface_72_36)
    ö(u32(o + 48), get_pmwr_demo_interface_72_48)
    ö(u32(o + 52), get_pmwr_demo_interface_72_52)
    ö(u32(o + 56), get_pmwr_demo_interface_72_56)
    for (let i = 0; i < u32(o + 72); i++) {
        ö(u32(o + 76) + (i * 12), get_pmwr_demo_interface_72_76)
    }

}

function get_pmwr_demo_interface_72_0(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_interface_72_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_pmwr_demo_interface_72_8_8)
    }

}

function get_pmwr_demo_interface_72_8_8(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    switch (u32(o + 0)) {
    case 1:
    case 6:
        ö(u32(o + 4), get_pmwr_demo_interface_72_8_8_4t1)
        break
    case 2:
        ö(u32(o + 4), get_pmwr_demo_interface_72_8_8_4t2)
        break
    default:
        if (u32(o + 4)) {
            console.log(o)
        }
    }

}
function get_pmwr_demo_interface_72_8_8_4t1(o) {
    if (u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_72_8_8_4t2(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_72_8_8_4t2_4)

}

function get_pmwr_demo_interface_72_8_8_4t2_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_20t4(o) {
    if (f32(o + 0) !== 12.680000305175781 || u32(o + 4) || u32(o + 8) || u32(o + 12) || f32(o + 16) !== 5000 || u8(o + 20) || u8(o + 21) !== 64 || u8(o + 22) !== 28 || u8(o + 23) !== 70 || f32(o + 24) !== -7000 || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u8, 20, u8, 21, u8, 22, u8, 23, f32, 24, u32, 28], o)
}
function get_pmwr_demo_interface_72_20t38(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_72_20t7(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_24t0(o) {
    if (u8(o + 2) || u8(o + 3) || u8(o + 14) || u8(o + 15))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)

    switch (u8(o)) {
    case 0:
        ß('p_texture', o, 4)
        break
    case 1:
        ß('p_model', o, 4)
        break
    default:
        if (u32(o + 4)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)
        }
    }
    ö(u32(o + 8), get_pmwr_demo_interface_72_24t0_8)

}

function get_pmwr_demo_interface_72_24t0_8(o) {
    if (u8(o + 8) || u8(o + 9) || u32(o + 12) || u8(o + 17) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_demo_interface_72_24t0_8_4)
    }

}

function get_pmwr_demo_interface_72_24t0_8_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}

function get_pmwr_demo_interface_72_24t5(o) {
    if (u8(o + 4) !== 5 || u8(o + 6) || u8(o + 7) || f32(o + 8) !== 0.5 || f32(o + 12) !== 0.5)
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, f32, 12], o)
    ß('p_texture', o, 0)

}
function get_pmwr_demo_interface_72_24t1(o) {
    if (u8(o + 23) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, f32, 24, u32, 28], o)

    ä(pmwr_demo_text, u32(o + 4), get_pmwr_demo_text)

    switch (u8(o + 0)) {
    case 3:
        ö(u32(o + 8), get_pmwr_demo_interface_72_24t1_8t3)
        break
    case 1:
        ö(u32(o + 8), get_pmwr_demo_interface_72_24t1_8t1)
        break
    default:
        if (u32(o + 8)) {
            console.log(o)
        }
    }

    ä(pmwr_demo_font, u32(o + 12), get_pmwr_demo_font)

}

function get_pmwr_demo_interface_72_24t1_8t3(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_24t1_8t1(o) {
    if (u8(o + 8) !== 1 || u8(o + 9) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_pmwr_demo_interface_72_24t1_8t1_4)
    }

}

function get_pmwr_demo_interface_72_24t1_8t1_4(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4], o)

    ä(pmwr_demo_text, u32(o + 0), get_pmwr_demo_text)

}

function get_pmwr_demo_text(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_text_0)
}

function get_pmwr_demo_text_0(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_demo_font(o) {
    if (u32(o + 4) || u8(o + 11) || u32(o + 16) || u32(o + 20) || u32(o + 24) !== 1 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 0)

    ö(u32(o + 28), get_pmwr_demo_font_28)
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_pmwr_demo_font_36)
    }

}

function get_pmwr_demo_font_28(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_font_36(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, f32, 4, u32, 8], o)
}

function get_pmwr_demo_interface_72_24t15(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_interface_72_24t15_0, u32(o + 0), get_pmwr_demo_interface_72_24t15_0)

}

function get_pmwr_demo_interface_72_24t15_0(o) {
    if (u32(o + 4) || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 16), get_pmwr_demo_interface_72_24t15_0_16)

}

function get_pmwr_demo_interface_72_24t15_0_16(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 0)

    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 12), get_pmwr_demo_interface_72_24t15_0_16_48)
    }
    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 32), get_pmwr_demo_interface_72_24t15_0_16_56)
    }

}

function get_pmwr_demo_interface_72_24t15_0_16_48(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_pmwr_demo_interface_72_24t15_0_16_56(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_interface_72_24t6(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(pmwr_demo_interface, u32(o), get_pmwr_demo_interface)
    ö(u32(o + 12), get_pmwr_demo_interface_72_24t6_12)

}
function get_pmwr_demo_interface_72_24t6_12(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_interface_72_24t10(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(pmwr_demo_font, u32(o + 16), get_pmwr_demo_font)

}

function get_pmwr_demo_interface_72_24t11(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_24t13(o) {
    if (u32(o + 0) !== 1280 || u32(o + 8) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_72_24t13_4)
    ö(u32(o + 12), get_pmwr_demo_interface_72_24t13_12)

}

function get_pmwr_demo_interface_72_24t13_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_72_24t13_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 0)
}
function get_pmwr_demo_interface_72_24t14(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 204) || u32(o + 208) || u32(o + 212) || u32(o + 216) || u32(o + 220) || u32(o + 224) || u32(o + 228) || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u32(o + 272) || u32(o + 276) || u32(o + 280) || u32(o + 284) || u32(o + 288) || u32(o + 292) || u32(o + 296) || u32(o + 300) || u32(o + 304) || u32(o + 308) || u32(o + 312) || u32(o + 316) || u32(o + 320) || u32(o + 324) || u32(o + 328) || u32(o + 332) || u32(o + 336) || u32(o + 340) || u32(o + 344) || u32(o + 348) || u32(o + 352) || u32(o + 356) || u32(o + 360) || u32(o + 364) || u32(o + 368) || u32(o + 372) || u32(o + 376) || u32(o + 380) || u32(o + 384) || u32(o + 388) || u32(o + 392) || u32(o + 396) || u32(o + 400) || u32(o + 404) || u32(o + 408) || u32(o + 412) || u32(o + 416) || u32(o + 420) || u32(o + 424) || u32(o + 428) || u32(o + 432) || u32(o + 436) || u32(o + 440) || u32(o + 444) || u32(o + 448) || u32(o + 452) || u32(o + 456) || u32(o + 460) || u32(o + 464) || u32(o + 468) || u32(o + 472) || u32(o + 476) || u32(o + 480) || u32(o + 484) || u32(o + 488) || u32(o + 492) || u32(o + 496) || u32(o + 500) || u32(o + 504) || u32(o + 508) || u32(o + 512) || u32(o + 516) || u32(o + 520) || u32(o + 524) || u8(o + 528) || u8(o + 530) !== 1 || u8(o + 531) || u32(o + 536) || u32(o + 540))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300, u32, 304, u32, 308, u32, 312, u32, 316, u32, 320, u32, 324, u32, 328, u32, 332, u32, 336, u32, 340, u32, 344, u32, 348, u32, 352, u32, 356, u32, 360, u32, 364, u32, 368, u32, 372, u32, 376, u32, 380, u32, 384, u32, 388, u32, 392, u32, 396, u32, 400, u32, 404, u32, 408, u32, 412, u32, 416, u32, 420, u32, 424, u32, 428, u32, 432, u32, 436, u32, 440, u32, 444, u32, 448, u32, 452, u32, 456, u32, 460, u32, 464, u32, 468, u32, 472, u32, 476, u32, 480, u32, 484, u32, 488, u32, 492, u32, 496, u32, 500, u32, 504, u32, 508, u32, 512, u32, 516, u32, 520, u32, 524, u8, 528, u8, 529, u8, 530, u8, 531, u32, 532, u32, 536, u32, 540], o)

    ö(u32(o + 532), get_pmwr_demo_interface_72_24t14_532)

}

function get_pmwr_demo_interface_72_24t14_532(o) {
    if (u8(o + 3) || u32(o + 4) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_24t3(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_pmwr_demo_interface_72_24t3_4)
    }
    ö(u32(o + 16), get_pmwr_demo_interface_72_24t3_16)

}

function get_pmwr_demo_interface_72_24t3_4(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ä(pmwr_demo_interface_72_24t3_4_0, u32(o + 0), get_pmwr_demo_interface_72_24t3_4_0)
    ä(pmwr_demo_sound_controls, u32(o + 4), get_pmwr_demo_sound_controls)

}

function get_pmwr_demo_interface_72_24t3_4_0(o) {
    if (u8(o + 51) || u32(o + 60) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, f32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 4), get_pmwr_demo_interface_72_24t3_4_0_4)
    ä(pmwr_demo_interface_72_24t3_4_0_8, u32(o + 8), get_pmwr_demo_interface_72_24t3_4_0_8)
    ä(pmwr_demo_model_anims_1, u32(o + 12), get_pmwr_demo_model_anims_1)
    ä(pmwr_demo_model_anims_2, u32(o + 16), get_pmwr_demo_model_anims_2)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 4), get_pmwr_demo_interface_72_24t3_4_0_24)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 8), get_pmwr_demo_interface_72_24t3_4_0_32)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 64), get_pmwr_demo_mysterious)
    }
    ö(u32(o + 52), get_pmwr_demo_interface_72_24t3_4_0_52)
    ö(u32(o + 56), get_pmwr_demo_interface_72_24t3_4_0_56)
    ö(u32(o + 64), get_pmwr_demo_interface_72_24t3_4_0_64)

}

function get_pmwr_demo_interface_72_24t3_4_0_4(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_interface_72_24t3_4_0_8(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(pmwr_demo_model_anims_2, u32(o + 0), get_pmwr_demo_model_anims_2)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_pmwr_demo_interface_72_24t3_4_0_8_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_pmwr_demo_interface_72_24t3_4_0_8_16)
    }

}

function get_pmwr_demo_interface_72_24t3_4_0_8_8(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_model', o, 0)

}
function get_pmwr_demo_interface_72_24t3_4_0_8_16(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/
    ß('p_model', o, 0)

}

function get_pmwr_demo_model_anims_1(o) {
    // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, f32, 56, f32, 60], o)

    ö(u32(o + 24), get_pmwr_demo_model_anims_1_24)
    ö(u32(o + 28), get_pmwr_demo_model_anims_1_28)
    ö(u32(o + 32), get_pmwr_demo_model_anims_1_32)
    ö(u32(o + 36), get_pmwr_demo_model_anims_1_36)
    ö(u32(o + 44), get_pmwr_demo_model_anims_1_44)
    if (old_log_array.p_offset.array.includes(o + 52 - offset_mid)) {
        ö(u32(o + 52), get_pmwr_demo_model_anims_1_52)
    }

}

function get_pmwr_demo_model_anims_1_24(o) {// ü(1, [f32, 0, f32, 4, ], o)
}
function get_pmwr_demo_model_anims_1_28(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_pmwr_demo_model_anims_1_32(o) {// ü(1, [f32, 0], o)
}
function get_pmwr_demo_model_anims_1_36(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_model_anims_1_44(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_model_anims_1_52(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 12) + (i * 1), get_pmwr_demo_model_anims_1_52_12)
    }
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 1), get_pmwr_demo_model_anims_1_52_8)
    }

}

function get_pmwr_demo_model_anims_1_52_8(o) {/*ü(1, [u8, 0], o)*/
}
function get_pmwr_demo_model_anims_1_52_12(o) {/*ü(1, [u8, 0], o)*/
}

function get_pmwr_demo_model_anims_2(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 16) + (i * 32), get_pmwr_demo_model_anims_2_16)
    }

}

function get_pmwr_demo_model_anims_2_16(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)*/
}

function get_pmwr_demo_interface_72_24t3_4_0_24(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_model', o, 0)

}
function get_pmwr_demo_interface_72_24t3_4_0_32(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/
    ß('p_model', o, 0)

}

function get_pmwr_demo_interface_72_24t3_4_0_52(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_72_24t3_4_0_56(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_72_24t3_4_0_64(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_pmwr_demo_interface_72_24t3_16(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_72_24t3_16_4)

}

function get_pmwr_demo_interface_72_24t3_16_4(o) {
    if (u32(o + 0) !== 1 || u8(o + 4) !== 4 || u8(o + 5) || u8(o + 6) !== 1 || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_36(o) {
    if (u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 12), get_pmwr_demo_interface_72_36_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 8), get_pmwr_demo_interface_72_36_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 8), get_pmwr_demo_interface_72_36_20)
    }

    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 28), get_pmwr_demo_interface_72_36_36)
    }

}

function get_pmwr_demo_interface_72_36_12(o) {
    if (u32(o + 4) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_interface_72_36_20(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/
    switch (u32(o + 0)) {
    case 1:
        ö(u32(o + 4), get_pmwr_demo_interface_72_36_20_4t1)
        break
    case 0:
        ö(u32(o + 4), get_pmwr_demo_interface_72_36_20_4t0)
        break
    default:
        if (u32(o + 4)) {
            console.log(o)
        }
    }

}

function get_pmwr_demo_interface_72_36_20_4t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_interface_72_36_20_4t1_0)
    ö(u32(o + 4), get_pmwr_demo_interface_72_36_20_4t1_4)

}

function get_pmwr_demo_interface_72_36_20_4t1_0(o) {
    if (u32(o + 0) !== 412 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_72_36_20_4t1_0_4)

}

function get_pmwr_demo_interface_72_36_20_4t1_0_4(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_36_20_4t1_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_36_20_4t0(o) {
    if (u8(o + 4) !== 4 || u8(o + 5) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_36_36(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_pmwr_demo_interface_72_36_36_16)
    }

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 36), get_pmwr_demo_interface_72_36_36_24)
    }

}
function get_pmwr_demo_interface_72_36_36_16(o) {
    if (u32(o + 0) !== 2)
        ü(1, [u32, 0, u32, 4], o)

    ö(u32(o + 4), get_pmwr_demo_interface_72_36_36_16_4)

}

function get_pmwr_demo_interface_72_36_36_16_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_pmwr_demo_interface_72_36_36_16_4_8)

}

function get_pmwr_demo_interface_72_36_36_16_4_8(o) {
    if (u32(o + 0) !== 218 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_72_36_36_16_4_8_4)

}

function get_pmwr_demo_interface_72_36_36_16_4_8_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_36_36_24(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    switch (u32(o + 0)) {
    case 1:
        ä(pmwr_demo_interface, u32(o + 4), get_pmwr_demo_interface)
        break
    case 11:
        ö(u32(o + 4), get_pmwr_demo_interface_72_36_36_24_4t11)
        break
    default:
        if (u32(o + 4)) {
            console.log(o)
        }
    }

    ö(u32(o + 8), get_pmwr_demo_interface_72_36_36_24_8)

}

function get_pmwr_demo_interface_72_36_36_24_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_interface_72_36_36_24_8_0)
    ö(u32(o + 4), get_pmwr_demo_interface_72_36_36_24_8_4)

}

function get_pmwr_demo_interface_72_36_36_24_8_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_72_36_36_24_8_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_36_36_24_4t11(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_pmwr_demo_interface_72_36_36_24_4t11_4)
    }

}

function get_pmwr_demo_interface_72_36_36_24_4t11_4(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    switch (u32(o + 0)) {
    case 1:
        ö(u32(o + 4), get_pmwr_demo_interface_72_36_36_24_4t11_4_4t1)
        break
    case 0:
        ö(u32(o + 4), get_pmwr_demo_interface_72_36_36_24_4t11_4_4t0)
        break
    default:
        if (u32(o + 4)) {
            console.log(o)
        }
    }

}
function get_pmwr_demo_interface_72_36_36_24_4t11_4_4t0(o) {
    if (u8(o + 5) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_36_36_24_4t11_4_4t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_interface_72_36_36_24_4t11_4_4t1_0)
    ö(u32(o + 4), get_pmwr_demo_interface_72_36_36_24_4t11_4_4t1_4)

}

function get_pmwr_demo_interface_72_36_36_24_4t11_4_4t1_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_72_36_36_24_4t11_4_4t1_0_4)

}

function get_pmwr_demo_interface_72_36_36_24_4t11_4_4t1_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_36_36_24_4t11_4_4t1_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_48(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_72_52(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_interface_72_56(o) {
    if (u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_pmwr_demo_interface_72_56_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_pmwr_demo_interface_72_56_4)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_pmwr_demo_interface_72_56_4)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_pmwr_demo_interface_72_56_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 40), get_pmwr_demo_interface_72_56_36)
    }

}

function get_pmwr_demo_interface_72_56_4(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_interface_72_56_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_72_56_20(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_demo_interface_72_56_28(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_pmwr_demo_interface_72_56_36(o) {
    if (u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36], o)
}

function get_pmwr_demo_interface_72_76(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ö(u32(o + 4), get_pmwr_demo_interface_72_76_4)

}

function get_pmwr_demo_interface_72_76_4(o) {
    if (u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_pmwr_demo_interface_72_76_4_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_pmwr_demo_interface_72_76_4_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_pmwr_demo_interface_72_76_4_12)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 32), get_pmwr_demo_interface_72_76_4_12)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_pmwr_demo_interface_72_76_4_36)
    }
    ö(u32(o + 44), get_pmwr_demo_interface_72_76_4_44)
    ä(pmwr_demo_sound_controls, u32(o + 48), get_pmwr_demo_sound_controls)
    ö(u32(o + 56), get_pmwr_demo_interface_72_76_4_56)

}

function get_pmwr_demo_interface_72_76_4_4(o) {
    if (u32(o + 0) || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16], o)

    ö(u32(o + 16), get_pmwr_demo_interface_72_76_4_4_16)

}

function get_pmwr_demo_interface_72_76_4_4_16(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_72_76_4_4_16_4)

}

function get_pmwr_demo_interface_72_76_4_4_16_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_76_4_12(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_pmwr_demo_interface_72_76_4_36(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_pmwr_demo_interface_72_76_4_44(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_pmwr_demo_interface_72_76_4_56(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_72_76_4_56_4)

}

function get_pmwr_demo_interface_72_76_4_56_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_interface_72_76_4_56_4_0)
    ö(u32(o + 4), get_pmwr_demo_interface_72_76_4_56_4_4)

}

function get_pmwr_demo_interface_72_76_4_56_4_0(o) {
    if (u32(o + 0) !== 2007 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_interface_72_76_4_56_4_0_4)

}

function get_pmwr_demo_interface_72_76_4_56_4_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_interface_72_76_4_56_4_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_link(o) {
    if (u32(o + 36) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 44)
    ß('p_texture', o, 48)

    ö(u32(o + 0), get_pmwr_demo_link_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_pmwr_demo_link_8)
    }
    ö(u32(o + 12), get_pmwr_demo_link_12)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 8), get_pmwr_demo_link_24)
    }
    ö(u32(o + 28), get_pmwr_demo_link_28)
    ö(u32(o + 32), get_pmwr_demo_link_32)
    ö(u32(o + 40), get_pmwr_demo_link_40)

}

function get_pmwr_demo_link_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_link_0_4)

}

function get_pmwr_demo_link_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_link_0_4_0)

}

function get_pmwr_demo_link_0_4_0(o) {
    if (u32(o + 0) || u32(o + 8) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_link_0_4_0_4)

}

function get_pmwr_demo_link_0_4_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) !== 2000000000 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_pmwr_demo_link_8(o) {
    if (u32(o + 0) !== 4 || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 8), get_pmwr_demo_link_8_8)

}

function get_pmwr_demo_link_8_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_link_8_8_0)

}

function get_pmwr_demo_link_8_8_0(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_demo_link_12(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_link_24(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4], o)

    ö(u32(o + 0), get_pmwr_demo_link_24_0)

}

function get_pmwr_demo_link_24_0(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_pmwr_demo_link_24_0_4)
    }

}

function get_pmwr_demo_link_24_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 16) !== 1 || u32(o + 24) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_pmwr_demo_link_24_0_4_8)
    ö(u32(o + 12), get_pmwr_demo_link_24_0_4_12)
    ö(u32(o + 20), get_pmwr_demo_link_24_0_4_20)
    ö(u32(o + 28), get_pmwr_demo_link_24_0_4_28)

}

function get_pmwr_demo_link_24_0_4_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_link_24_0_4_8_0)

}

function get_pmwr_demo_link_24_0_4_8_0(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_demo_link_24_0_4_12(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_link_24_0_4_20(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_link_24_0_4_20_4)

}

function get_pmwr_demo_link_24_0_4_20_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_demo_link_24_0_4_20_4_4)

}

function get_pmwr_demo_link_24_0_4_20_4_4(o) {
    if (u32(o + 4) !== 5 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_demo_link_24_0_4_20_4_4_0)

}

function get_pmwr_demo_link_24_0_4_20_4_4_0(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_demo_link_24_0_4_28(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_demo_link_28(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_link_32(o) {// console.log(get_string(o, 0, false))
}
function get_pmwr_demo_link_40(o) {
    if (u32(o + 0) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_pmwr_demo_link_24_0)

}

function get_pmwr_demo_model(o) {
    if (u16(o + 0) !== 4101 || u32(o + 60))
        ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60], o)

    for (let i = 0; i < u16(o + 2); i++) {
        ö(u32(o + 8) + (i * 24), get_pmwr_demo_model_8)
        ö(u32(o + 12) + (i * 4), get_pmwr_demo_model_12)
    }

}

function get_pmwr_demo_model_8(o) {
    if (u8(o + 1) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20], o)

    for (let i = 0; i < u8(o + 2); i++) {
        ö(u32(o + 8) + (i * 32), get_pmwr_demo_model_8_8)
    }
    ö(u32(o + 20), get_pmwr_demo_model_8_20)

}

function get_pmwr_demo_model_8_8(o) {
    if (u8(o + 21))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)
    ß('p_texture', o, 24)
    ß('p_animation', o, 0)

    ö(u32(o + 12), get_pmwr_demo_model_8_8_12)

}

function get_pmwr_demo_model_8_8_12(o) {
    switch (u32(o + 16)) {
    case 0:
        get_pmwr_demo_model_8_8_12t0(o)
        break
    case 1:
        get_pmwr_demo_model_8_8_12t1(o)
        break
    case 2:
        get_pmwr_demo_model_8_8_12t2(o)
        break
    default:
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    }
}

function get_pmwr_demo_model_8_8_12t0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    // for (let i = 0; i < u32(o+20); i++) {
    // ö(u32(o + 24) + (i*16), get_pmwr_demo_model_8_8_12t0_24)
    // ö(u32(o + 28) + (i*8), get_pmwr_demo_model_8_8_12t0_28)
    // ö(u32(o + 32) + (i*1), get_pmwr_demo_model_8_8_12t0_32)
    // ö(u32(o + 36) + (i*1), get_pmwr_demo_model_8_8_12t0_36)
    // }
    ö(u32(o + 24), get_pmwr_demo_model_8_8_12t0_24)
    ö(u32(o + 28), get_pmwr_demo_model_8_8_12t0_28)
    ö(u32(o + 32), get_pmwr_demo_model_8_8_12t0_32)
    ö(u32(o + 36), get_pmwr_demo_model_8_8_12t0_36)

}

function get_pmwr_demo_model_8_8_12t0_24(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)*/
}
function get_pmwr_demo_model_8_8_12t0_28(o) {/*ü(1, [f32, 0, f32, 4, f32, 8], o)*/
}
function get_pmwr_demo_model_8_8_12t0_32(o) {// ü(1, [u8, 0], o)
}
function get_pmwr_demo_model_8_8_12t0_36(o) {// ü(1, [u8, 0], o)
}

function get_pmwr_demo_model_8_8_12t1(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    // for (let i = 0; i < u32(o+20); i++) {
    // ö(u32(o + 24) + (i*16), get_pmwr_demo_model_8_8_12t1_24)
    // ö(u32(o + 28) + (i*12), get_pmwr_demo_model_8_8_12t1_28)
    // ö(u32(o + 32) + (i*1), get_pmwr_demo_model_8_8_12t1_32)
    // }

    ö(u32(o + 24), get_pmwr_demo_model_8_8_12t1_24)
    ö(u32(o + 28), get_pmwr_demo_model_8_8_12t1_28)
    ö(u32(o + 32), get_pmwr_demo_model_8_8_12t1_32)

}

function get_pmwr_demo_model_8_8_12t1_24(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)*/
}
function get_pmwr_demo_model_8_8_12t1_28(o) {/*ü(1, [f32, 0, f32, 4, f32, 8], o)*/
}
function get_pmwr_demo_model_8_8_12t1_32(o) {// ü(1, [u8, 0], o)
}

function get_pmwr_demo_model_8_8_12t2(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 2)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 24), get_pmwr_demo_model_8_8_12t2_36)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 24), get_pmwr_demo_model_8_8_12t2_44)
    }

}

function get_pmwr_demo_model_8_8_12t2_36(o) {/*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23], o)*/
}
function get_pmwr_demo_model_8_8_12t2_44(o) {/*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23], o)*/
}

function get_pmwr_demo_model_8_20(o) {// console.log(get_string(o, 0, false))
}

function get_pmwr_demo_model_12(o) {/*ü(1, [f32, 0], o)*/
}

function get_pmwr_demo_texture_anims_0(o) {
    if (u32(o + 0) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_pmwr_demo_texture_anims_0_4)
    ö(u32(o + 12), get_pmwr_demo_texture_anims_0_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 16), get_pmwr_demo_texture_anims_0_20)
    }

}

function get_pmwr_demo_texture_anims_0_4(o) {
    if (u8(o + 8) || u8(o + 9) || u8(o + 10) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_demo_texture_anims_0_4_4)
    }

}

function get_pmwr_demo_texture_anims_0_4_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)
}
function get_pmwr_demo_texture_anims_0_12(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12], o)
}

function get_pmwr_demo_texture_anims_0_20(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)
}
