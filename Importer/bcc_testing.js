function get_x_bcc() {

    globalThis.offset_mid = undefined

    for (let i = 0; i < u32(12); i++) {
        get_bcc_directory(16 + (i * 24), 16 + (u32(12) * 24))
    }
}
function get_bcc_directory(o, end_offset) {
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

    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o);

    globalThis.bcc_interface = []
    globalThis.bcc_text = []
    globalThis.bcc_font = []
    globalThis.bcc_sound_controls = []
    globalThis.bcc_sound_section = []
    globalThis.bcc_unknown = []
    globalThis.bcc_model = []
    globalThis.bcc_model_anims_1 = []
    globalThis.bcc_model_anims_2 = []
    globalThis.bcc_unknown_idk_sec = []
    globalThis.bcc_world_12 = []
    globalThis.bcc_world_120_0 = []
    globalThis.bcc_car = []
    globalThis.bcc_world_84 = []
    globalThis.bcc_world_20 = []
    globalThis.bcc_font = []
    globalThis.bcc_text = []
    globalThis.bcc_emitter = []
    globalThis.bcc_model_link = []
    globalThis.bcc_multi_font = []
    globalThis.bcc_model_anim_2_type_c = []
    globalThis.bcc_model_anim_2_type_b = []
    globalThis.bcc_strange = []
    globalThis.bcc_unknown_idk_sec = []
    globalThis.bcc_unknown_thing = []
    globalThis.bcc_world_4 = []
    globalThis.bcc_world_92 = []
    globalThis.bcc_world_108 = []
    globalThis.bcc_world_116 = []
    globalThis.bcc_idk = []
    globalThis.bcc_object = []
    globalThis.bcc_world_thing = []
    globalThis.bcc_something = []
    globalThis.bcc_var = []
    globalThis.bcc_a_single_section = []
    globalThis.bcc_flag = []

    director_offset = o
    g.type = u32(o + 4)

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
        get_bcc_datapack(end_offset + u32(o + 20), u32(o + 16))
        break
    }

    print_logarray(log_array)

}

function get_bcc_datapack(o, e) {
    if (u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 144) || u32(o + 156) || u32(o + 164) || u32(o + 176) || u32(o + 184))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188], o)

    let end_datapack = o + e
    let offset_patch_list = end_datapack - (u32(o + 12) * 4 + (u32(o + 56) * 8))
    offset_mid = offset_patch_list - u32(o)
    let index_patch_list_amount = u32(o + 16) + u32(o + 52) + u32(o + 28)
    index_patch_list_amount *= 8
    if (g.console === 'wii') {
        index_patch_list_amount = divisible(index_patch_list_amount, 32)
    } else {
        index_patch_list_amount = divisible(index_patch_list_amount, 16)
    }
    let index_patch_list = offset_mid - index_patch_list_amount

    // bcc_get_index_patch_list(o, index_patch_list)
    // bcc_get_offset_patch_list(o, offset_mid + u32(o))

    globalThis.old_log_array = structuredClone(log_array)

    // if (u32(o + 132)) {
    //     ö(u32(o + 132), get_bcc_132)
    // }
    // switch (g.type) {
    // case 0:
    // case 1:
    // case 2:
    // case 3:
    // case 9:
    // case 10:
    //     get_bcc_basic(offset_mid)
    //     break
    // case 4:
    //     get_bcc_world(offset_mid)
    //     break
    // case 8:
    //     if (u32(o) !== 0) {
    //         get_bcc_share(offset_mid)
    //     }
    //     break
    // default:
    //     console.log("?")
    // }
    let amt_offset = g.console === "pc" ? 188 : 192

    let after_datapack = amt_offset + o
    let end_after_datapack = after_datapack

    if (u32(o + 4)) {
        if (g.console === "pc") {
            end_after_datapack = after_datapack + divisible((u32(o + 8) * 4), 16)
        } else {
            end_after_datapack = after_datapack + divisible((u32(o + 8) * 4), 32)
        }

        for (let i = 0; i < u32(o + 32); i++) {
            get_bcc_basic_audio(after_datapack + (i * 8), end_after_datapack)
        }

        if (g.console === "pc") {
            end_after_datapack = end_after_datapack + u32(o + 4)
        } else {
            end_after_datapack = divisible(end_after_datapack + u32(o + 4), 32)

        }

        // ö(u32(o + 24), get_test_temp)
        // ä(test_temp, u32(o + 24), get_test_temp)
        // ä(test_temp, u32(o + 24), get_test_temp)
        // get_bcc_world_60 ?
    }

    // after the audio section

    if (u32(o + 108)) {
        for (let i = 0; i < u32(o + 108); i++) {
            get_bcc_datapack_108(end_after_datapack + i * 4)
        }
        if (g.console === "pc") {
            end_after_datapack += divisible(u32(o + 108) * 4, 16)
        } else {
            end_after_datapack += divisible(u32(o + 108) * 4, 32)
        }
    }

    // what about texture offset ?
    if (u32(o + 20)) {
        for (let i = 0; i < u32(o + 20); i++) {
            get_bcc_texture_offset_list(end_after_datapack + i * 4, end_after_datapack)
        }
    }

    for (let i = 0; i < u32(o + 100); i++) {
        get_bcc_datapack_text_link(offset_mid + u32(o + 132) + (i * 8))
    }

}
function get_bcc_132(o) {
    ü(1, [u32, 0, u32, 4], o)
}
function get_bcc_136(o) {// ü(1, [u32, 0, u32, 4], o)
// not ordered offset
}
function get_bcc_140(o) {// ü(1, [u32, 0, u32, 4], o)
// not ordered offset
}
function get_bcc_basic_audio(o, e) {
    /*ü(1, [u32, 0, u32, 4], o)*/
    get_bcc_basic_audio_0(e + u32(o), e)
    get_bcc_basic_audio_4(e + u32(o + 4), e)
}
function get_bcc_basic_audio_0(o, e) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/
    let start = e + u32(o + 0)
    let end = start + u32(o + 4)
    if (g.console === "pc") {
        get_bcc_basic_audio_0_0tpc(start, end, e)
    } else {
        get_bcc_basic_audio_0_0twii(start, end, e)
    }

}
function get_bcc_basic_audio_0_0twii(o, end, e) {
    if (u32(o + 0) !== 1179861555)
        ü(1, [u32, 0], o)
}
function get_bcc_basic_audio_0_0tpc(o, end, e) {
    if (u32(o + 0) !== 1179011410)
        ü(1, [u32, 0], o)
    // RIFF file
}
function get_bcc_basic_audio_4(o, e) {
    if (u8(o + 8) !== 16 || u8(o + 9) || u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16], o)
    get_bcc_basic_audio_4_0(e + u32(o + 0), e)
}
function get_bcc_basic_audio_4_0(o) {// console.log(get_string(o, 0, false))
/*ü(1, [u32, 0], o)*/

}
function get_bcc_datapack_108(o) {/*ü(1, [u32, 0], o)*/
}

function get_bcc_texture_offset_list(o, section_offset) {
    /*ü(1, [u32, 0], o)*/

    get_bcc_texture_offset_list_0(u32(o) + section_offset, section_offset)

}

function get_bcc_texture_offset_list_0(o, section_offset) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    let x = Math.pow(2, u8(o + 6))
    let y = Math.pow(2, u8(o + 7))
    let total_length = 0
    switch (u8(o + 4)) {
    case 24:
        total_length = x * y * 3
        break
    case 69:
        total_length = x * y / 2
        break
    case 160:
        total_length = x * y * 4
        break
    case 197:
        total_length = x * y / 2
        break
    case 198:
        total_length = x * y / 2
        break
    case 202:
        total_length = x * y
        break
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    }
    let temp_pmwr_pc_texture_array;
    let temp_2 = total_length
    let start_texture = u32(o + 8)
    let mipmap_start = u32(o + 8)
    let calculate_12_length = total_length * 2
    let calculate_20_length = total_length
    // base line without mips its just x 2
    // create padding ???
    // 20 and 16 has mips
    // 12 no mips
    if (u8(o + 5)) {
        // ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

        let mipmap_end = mipmap_start + total_length

        let temp_mipmap_offset = 0

        for (let i = 0; i < u8(o + 5) + 1; i++) {

            // let temp_pmwr_pc_texture_array = convert_arraybuffer_base64(buffer.slice(mipmap_start, mipmap_end))

            // x[ti].pmwr_pc_texture.push(temp_pmwr_pc_texture_array)
            mipmap_start += temp_2
            temp_mipmap_offset += temp_2
            temp_2 = Math.round(temp_2 / 4)
            if (u8(o + 5) !== i) {
                total_length += temp_2
                calculate_20_length += temp_2
            }

        }

    }
    if (g.console === "pc") {
        if (u32(o + 16)) {
            get_bcc_pc_texture_offset_list_0_16(u32(o + 16) + section_offset, total_length, section_offset, start_texture)
        }
    } else {
        let string = get_bcc_wii_texture_offset_list_0_16(u32(o + 16) + section_offset)

        if (u32(o + 12)) {
            let length_12 = u32(o + 12)
            let length_8 = u32(o + 8)

            if (calculate_12_length - (length_8 - length_12) === 0) {} else {
                ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
                console.log(`| ${string} | section_offset ${section_offset} | 8: ${length_8} | 12: ${length_12} | total_length: ${total_length} | calculate_12_length ${calculate_12_length}
        diff: ${calculate_12_length - (length_8 - length_12)}`)
            }
        }
        if (u32(o + 8)) {// if 20 = type 197,198
        // if 12 = type 69,197
        // if 08 = type 69,197,198
        // get_bcc_texture_offset_list_0_20(u32(o + 20) + section_offset, section_offset)
        }
        if (u32(o + 20)) {
            calculate_20_length = total_length
            let length_20 = u32(o + 20)
            let length_8 = u32(o + 8)

            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
            console.log(`| ${string} | section_offset ${section_offset} | 8: ${length_8}, offset: ${length_8 + section_offset} | 20: ${length_20}, offset ${section_offset + length_20} | total_length: ${total_length} | calculate_12_length ${calculate_20_length}
        diff: ${calculate_20_length - (length_20 - length_8)}`)
        }
    }
    // 8064-8192

    // if (u8(o + 5) === 0) {
    // if (u32(o + 8)) {
    //     get_bcc_texture_offset_list_0_8(u32(o + 8) + section_offset, total_length)
    // }

    // if (u32(o + 12)) {
    //     get_bcc_texture_offset_list_0_12(u32(o + 12) + section_offset, section_offset)
    // }
    // if (u32(o + 20)) {
    //     get_bcc_texture_offset_list_0_20(u32(o + 20) + section_offset, section_offset)
    // }
    // }

}

function get_bcc_texture_offset_list_0_8(o, section_offset) {
    ü(1, [u32, 0], o)
    //start texture data prob

}
function get_bcc_texture_offset_list_0_12(o, section_offset) {
    ü(1, [u32, 0], o)

}
function get_bcc_pc_texture_offset_list_0_16(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

}
function get_bcc_wii_texture_offset_list_0_16(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

}
function get_bcc_share(o) {
    if (u32(o + 0) !== 32 || u32(o + 4) || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bcc_share_0)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 4), get_bcc_share_16)
    }

}

function get_bcc_share_0(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_share_16(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_sound', o, 0)
}

function get_bcc_datapack_text_link(o) {
    // if (u32(o + 0))
    ü(1, [u32, 0, u32, 4], o)

    ä(bcc_text, u32(o + 4), get_bcc_text)

}

function get_bcc_texture(o) {
    ö(u32(o + 8), get_bcc_texture_8)

    // ü(1, [u8, 0], o)
}

function get_bcc_texture_8(o) {//texture data
}

function bcc_get_index_patch_list(o, patch_offset) {
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

function bcc_get_offset_patch_list(o, patch_offset) {
    patchlistoffset = patch_offset
    log_array.p_model.offset = patchlistoffset

    let array_type_offset = 6
    if (g.console === "wii") {
        array_type_offset = 4
    }

    for (let i = 0; i < u32(o + 56); i++) {
        log_array.p_model.array.push(u32(patchlistoffset + (i * 8)))
        log_array.p_model.array_type.push(u16(patchlistoffset + (i * 8) + array_type_offset))
    }
    patchlistoffset += u32(o + 56) * 8
    log_array.p_offset.offset = patchlistoffset
    for (let i = 0; i < u32(o + 12); i++) {
        log_array.p_offset.array.push(u32(patchlistoffset + (i * 4)))
    }

    let _2ndarray = []
    for (let patchoffset of log_array.p_offset.array) {
        _2ndarray.push(u32(patchoffset + offset_mid))
        // if (u32(patchoffset + offset_mid) === 0) {
        //     console.log(patchoffset,offset_mid)
        // }
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

function get_bcc_world(o) {
    if (u32(o + 0) || u32(o + 8) !== 4 || u32(o + 16) || u32(o + 20) || u32(o + 24) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) !== 4 || u32(o + 96) || u32(o + 100) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 212) || u32(o + 216) || u32(o + 220) || u32(o + 224) || u32(o + 228) || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u32(o + 272) || u32(o + 276) || u32(o + 280) || u32(o + 284) || u32(o + 288) || u32(o + 292) || u32(o + 296) || u32(o + 300))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300], o)
    ß('p_sound', o, 0)

    ä(bcc_world_4, u32(o + 4), get_bcc_world_4)

    for (let i = 0; i < u32(o + 8); i++) {
        ä(bcc_world_12, u32(o + 12) + (i * 160), get_bcc_world_12)
    }

    ö(u32(o + 28), get_bcc_world_28)
    ö(u32(o + 60), get_bcc_world_60)
    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 96), get_bcc_world_84)
    }
    for (let i = 0; i < u32(o + 88); i++) {
        ä(bcc_world_92, u32(o + 92) + (i * 112), get_bcc_world_92)
    }

    for (let i = 0; i < u32(o + 104); i++) {
        ä(bcc_world_108, u32(o + 108) + (i * 96), get_bcc_world_108)
    }

    for (let i = 0; i < u32(o + 112); i++) {
        ä(bcc_world_116, u32(o + 116) + (i * 128), get_bcc_world_116)
    }

    ö(u32(o + 120), get_bcc_world_120)
    ö(u32(o + 172), get_bcc_world_settings)
    ö(u32(o + 176), get_bcc_world_176)
    ö(u32(o + 184), get_bcc_world_184)
    for (let i = 0; i < u32(o + 204); i++) {
        ö(u32(o + 208) + (i * 4), get_bcc_world_208)
    }

}

function get_bcc_world_4(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 28) !== 1 || f32(o + 32) !== 10000 || f32(o + 40) !== 10000 || u32(o + 48) !== 1 || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_bcc_world_4_16)
    switch (u32(o + 24)) {
    case 0:
        ä(bcc_world_4, u32(o + 20), get_bcc_world_4)
        break
    case 1:
        ö(u32(o + 20), get_bcc_world_4_20t1)
        break
    default:
        if (u32(o + 20)) {
            sü(u32, 24, o, 20)
        }
    }

}

function get_bcc_world_4_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)
}
function get_bcc_world_4_20t1(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_world_12(o) {
    if (u32(o + 4) || u32(o + 8) || u16(o + 12) !== 1 || u32(o + 16) || u16(o + 20) !== 1 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || u32(o + 84) || f32(o + 88) !== 500 || f32(o + 92) !== 1000 || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u8(o + 124) || u8(o + 125) || u8(o + 126) !== 255 || u8(o + 127) !== 255 || u8(o + 128) || u8(o + 129) || u8(o + 131) || u32(o + 132) || u32(o + 136) || u32(o + 140) !== 1000 || u32(o + 144) || u32(o + 148) !== 1 || u32(o + 152) || u32(o + 156))
        ü(1, [u32, 0, u32, 4, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, u32, 76, u32, 80, u32, 84, f32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u8, 124, u8, 125, u8, 126, u8, 127, u8, 128, u8, 129, u8, 130, u8, 131, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156], o)

    ä(bcc_car, u32(o + 76), get_bcc_car)

}

function get_bcc_world_28(o) {
    if (u32(o + 0) !== 2 || u16(o + 4) !== 2 || u16(o + 6) || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 20) !== 1 || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 88) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)

    globalThis.get_bcc_world_28_48_count = u32(o + 48)

    ö(u32(o + 80), get_bcc_world_28_80)
    ö(u32(o + 84), get_bcc_world_28_84)

    delete get_bcc_world_28_48_count

}

function get_bcc_world_28_80(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < get_bcc_world_28_48_count; i++) {
        ö(u32(o + 0) + (i * 4), get_bcc_world_28_80_0)
    }

}

function get_bcc_world_28_80_0(o) {
    /*ü(1, [u32, 0], o)*/
    ä(bcc_world_116, u32(o + 0), get_bcc_world_116)

}

function get_bcc_world_28_84(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 16) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_bcc_world_28_84_8)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 4), get_bcc_world_28_84_24)
    }

}

function get_bcc_world_28_84_8(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bcc_world_92, u32(o + 0), get_bcc_world_92)

}

function get_bcc_world_28_84_24(o) {
    /*ü(1, [u32, 0], o)*/
    ä(bcc_world_108, u32(o + 0), get_bcc_world_108)

}

function get_bcc_world_60(o) {
    if (u32(o + 0) !== 930 || u16(o + 4) !== 8 || u16(o + 6) || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 20) !== 1 || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) !== 1 || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || f32(o + 64) !== 430.0830078125 || f32(o + 68) !== 620.7155151367188 || f32(o + 72) !== 82.9781494140625 || f32(o + 76) !== 1 || f32(o + 80) !== 10000 || f32(o + 84) !== 250000 || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, u32, 88, u32, 92], o)
}
function get_bcc_world_84(o) {
    if (u16(o + 4) !== 11 || u16(o + 6) || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 20) !== 1 || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ä(bcc_world_12, u32(o + 80), get_bcc_world_12)

}

function get_bcc_world_92(o) {
    if (u16(o + 4) !== 13 || u16(o + 6) || u32(o + 8) || u16(o + 12) !== 1 || u32(o + 16) || u16(o + 20) !== 1 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || f32(o + 84) !== 500 || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76, u32, 80, f32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    ä(bcc_idk, u32(o + 80), get_bcc_idk)

}

function get_bcc_world_108(o) {
    if (u16(o + 4) !== 15 || u16(o + 6) || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 20) !== 1 || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || u32(o + 64) !== 10000 || u32(o + 68) !== 1 || f32(o + 76) !== 500 || u32(o + 80) || u8(o + 84) !== 255 || u8(o + 85) !== 255 || u8(o + 86) || u8(o + 87) || u8(o + 88) !== 1 || u8(o + 89) !== 1 || u8(o + 90) || u8(o + 91) !== 1 || u32(o + 92))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, f32, 76, u32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u32, 92], o)

    ä(bcc_object, u32(o + 72), get_bcc_object)

}

function get_bcc_world_116(o) {
    if (u16(o + 4) !== 5 || u16(o + 6) || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 20) !== 1 || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 48) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || f32(o + 68) !== 1 || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || f32(o + 88) !== 1 || u32(o + 92) || u32(o + 96) || u32(o + 100) || f32(o + 108) !== 1 || u32(o + 112) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84, f32, 88, u32, 92, u32, 96, u32, 100, f32, 104, f32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)
    ß('p_model', o, 116)

}
function get_bcc_world_120(o) {
    if (u8(o + 8) !== 255 || u8(o + 9) !== 255 || u8(o + 10) !== 255 || u8(o + 11) !== 255 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 0) + (i * 144), get_bcc_world_120_0)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 12) + (i * 8), get_bcc_world_120_12)
    }

}

function get_bcc_world_120_0(o) {
    if (u16(o + 4) !== 16 || u16(o + 6) || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) || u32(o + 16) || u16(o + 20) !== 1 || u16(o + 22) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || u32(o + 64) !== 1 || u32(o + 76) !== 1 || u8(o + 90) || u8(o + 91) || u8(o + 92) !== 100 || u8(o + 93) || u8(o + 94) || u8(o + 95) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 136) || u32(o + 140))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, f32, 84, u16, 88, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ö(u32(o + 68), get_bcc_world_120_0_68)
    ö(u32(o + 72), get_bcc_world_120_0_72)
    ö(u32(o + 80), get_bcc_world_120_0_80)

}

function get_bcc_world_120_0_68(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_world_120_0_72(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_world_120_0_80(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_world_120_12(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4], o)
}

function get_bcc_world_settings(o) {
    if (u32(o + 8) || f32(o + 12) !== 1 || f32(o + 16) !== 15000 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u8(o + 36) || u8(o + 38) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || f32(o + 72) !== 300 || u32(o + 80) || f32(o + 100) !== 10000000 || f32(o + 104) !== 10000000 || u8(o + 108) || u8(o + 109) || u16(o + 110) !== 100 || f32(o + 116) !== 200 || u32(o + 128) !== 1 || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) || f32(o + 160) !== 1 || f32(o + 164) !== 1 || f32(o + 168) !== 1 || f32(o + 172) !== 0.5 || f32(o + 176) !== 0.0010000000474974513 || u8(o + 180) || u8(o + 181) || u8(o + 182) !== 1 || u8(o + 183) || f32(o + 204) !== 256 || f32(o + 208) !== 10000 || f32(o + 212) !== 100 || f32(o + 216) !== 1 || u32(o + 220) || u32(o + 224) || u32(o + 232) || u32(o + 236))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, f32, 100, f32, 104, u8, 108, u8, 109, u16, 110, u32, 112, f32, 116, f32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, f32, 160, f32, 164, f32, 168, f32, 172, f32, 176, u8, 180, u8, 181, u8, 182, u8, 183, u32, 184, f32, 188, f32, 192, f32, 196, f32, 200, f32, 204, f32, 208, f32, 212, f32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236], o)
    ß('p_texture', o, 68)
    ß('p_texture', o, 88)
    ß('p_texture', o, 92)
    ß('p_texture', o, 96)
    ß('p_texture', o, 184)

    ö(u32(o + 0), get_bcc_world_settings_0)
    ö(u32(o + 4), get_bcc_world_settings_4)
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 64), get_bcc_world_settings_60)
    }
    ö(u32(o + 64), get_bcc_world_settings_64)
    ö(u32(o + 76), get_bcc_world_settings_76)
    ö(u32(o + 84), get_bcc_world_settings_84)
    ö(u32(o + 112), get_bcc_world_settings_112)
    ö(u32(o + 124), get_bcc_world_settings_124)
    ö(u32(o + 132), get_bcc_world_settings_132)
    ä(bcc_font, u32(o + 228), get_bcc_font)

}

function get_bcc_world_settings_0(o) {
    if (u32(o + 4) || u32(o + 8) !== 500 || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) !== 12 || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 20)

    ä(bcc_interface, u32(o), get_bcc_interface)

    ö(u32(o + 12), get_bcc_world_settings_0_12)
    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 8), get_bcc_world_settings_0_40)
    }

}

function get_bcc_world_settings_0_12(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_world_settings_0_40(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 0), get_bcc_world_settings_0_40_0)

}

function get_bcc_world_settings_0_40_0(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_world_settings_4(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bcc_world_settings_4_4)
    ö(u32(o + 8), get_bcc_world_settings_4_4)
    ö(u32(o + 12), get_bcc_world_settings_4_4)
    ö(u32(o + 16), get_bcc_world_settings_4_4)

}

function get_bcc_world_settings_4_4(o) {
    if (u32(o + 0) !== 3 || u32(o + 8) !== 3 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_bcc_world_settings_4_4_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 16), get_bcc_world_settings_4_4_12)
    }

}

function get_bcc_world_settings_4_4_4(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12], o)*/
}
function get_bcc_world_settings_4_4_12(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12], o)*/
}

function get_bcc_world_settings_60(o) {
    if (u8(o + 3) || u32(o + 4) || u8(o + 11) !== 255 || f32(o + 12) !== 50 || u32(o + 32) || u32(o + 40) || f32(o + 44) !== 1 || f32(o + 48) !== 100 || f32(o + 52) !== 0.5 || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, f32, 36, u32, 40, f32, 44, f32, 48, f32, 52, u32, 56, u32, 60], o)
}
function get_bcc_world_settings_64(o) {
    if (f32(o + 4) !== 2000000000 || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_bcc_world_settings_76(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_world_settings_84(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_world_settings_112(o) {
    if (u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_world_settings_124(o) {
    if (f32(o + 4) !== 50000 || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_bcc_world_settings_132(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_world_settings_132_0)

}

function get_bcc_world_settings_132_0(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_world_176(o) {
    if (u32(o + 8) !== 3 || u32(o + 16) !== 1 || u32(o + 24) !== 10 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    ö(u32(o + 4), get_bcc_world_176_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_bcc_world_176_12)
    }
    ö(u32(o + 20), get_bcc_world_176_20)
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 4), get_bcc_world_176_28)
    }

}

function get_bcc_world_176_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bcc_flag, u32(o + 0), get_bcc_flag)

}

function get_bcc_world_176_12(o) {
    /*ü(1, [u32, 0], o)*/
    ä(bcc_var, u32(o + 0), get_bcc_var)

}

function get_bcc_var(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 160) || u32(o + 172))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172], o)

    ö(u32(o + 148), get_bcc_var_148)
    ö(u32(o + 156), get_bcc_var_156)
    for (let i = 0; i < u32(o + 164); i++) {
        ö(u32(o + 168) + (i * 36), get_bcc_var_168)
    }

}

function get_bcc_var_148(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_var_156(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bcc_var, u32(o + 0), get_bcc_var)

}

function get_bcc_var_168(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) !== 1 || u32(o + 28) || u32(o + 32))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    ö(u32(o + 16), get_bcc_var_168_16)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 24), get_bcc_var_168_24)
    }

}

function get_bcc_var_168_16(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    switch (u32(o + 4)) {
    case 7:
        ö(u32(o + 12), get_bcc_var_168_16_12t7)
        break
    case 21:
        ä(bcc_interface, u32(o + 12), get_bcc_interface)
        break
    default:
        if (u32(o + 12)) {
            sü(u32, 4, o, 12)
        }
    }

    ö(u32(o + 16), get_bcc_var_168_16_16)

}

function get_bcc_var_168_16_12t7(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_var_168_16_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_var_168_24(o) {
    if (u32(o + 0) || u8(o + 4) !== 1 || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20], o)

    switch (u32(o + 8)) {
    case 1:
        ö(u32(o + 12), get_bcc_var_168_24_12t1)
        break
    case 5:
        ö(u32(o + 12), get_bcc_var_168_24_12t5)
        break
    case 15:
        ö(u32(o + 12), get_bcc_var_168_24_12t15)
        break
    case 17:
        ö(u32(o + 12), get_bcc_var_168_24_12t17)
        break
    case 18:
        ö(u32(o + 12), get_bcc_var_168_24_12t18)
        break
    default:
        if (u32(o + 12)) {
            sü(u32, 8, o, 12)
        }
    }

}

function get_bcc_var_168_24_12t1(o) {
    if (u8(o + 4) !== 2 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_var_168_24_12t1_0)

}

function get_bcc_var_168_24_12t1_0(o) {
    if (u8(o + 5) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bcc_var_168_24_12t1_0_0)

}

function get_bcc_var_168_24_12t1_0_0(o) {
    if (u32(o + 0) || u32(o + 4) !== 11 || u8(o + 8) !== 4 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
}

function get_bcc_var_168_24_12t5(o) {
    if (u8(o + 4) !== 1 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_var_168_24_12t5_0)

}

function get_bcc_var_168_24_12t5_0(o) {
    if (u8(o + 4) || u8(o + 5) !== 1 || u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ä(bcc_interface, u32(o), get_bcc_interface)

    ö(u32(o + 8), get_bcc_var_168_24_12t5_0_8)

}

function get_bcc_var_168_24_12t5_0_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_var_168_24_12t15(o) {
    if (u32(o + 4) !== 2 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bcc_var, u32(o + 0), get_bcc_var)

}

function get_bcc_var_168_24_12t17(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_var_168_24_12t18(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 16) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bcc_something, u32(o + 4), get_bcc_something)
    ö(u32(o + 8), get_bcc_var_168_24_12t18_8)

}

function get_bcc_var_168_24_12t18_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_world_176_20(o) {
    /*ü(1, [u32, 0], o)*/
    ä(bcc_something, u32(o + 0), get_bcc_something)

}

function get_bcc_world_176_28(o) {
    /*ü(1, [u32, 0], o)*/
    ä(bcc_flag, u32(o + 0), get_bcc_flag)

}

function get_bcc_world_184(o) {
    if (u32(o + 0) !== 446 || u16(o + 4) !== 19 || u16(o + 6) || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 20) !== 1 || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || f32(o + 60) !== 1 || u32(o + 64) || u32(o + 68) || u32(o + 72) || f32(o + 76) !== 1 || u8(o + 80) !== 1 || u8(o + 81) || u8(o + 82) || u8(o + 83) || u32(o + 84) || u32(o + 88) || f32(o + 92) !== 1)
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, f32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u32, 84, u32, 88, f32, 92], o)
}
function get_bcc_world_208(o) {
    /*ü(1, [u32, 0], o)*/
    ä(bcc_world_thing, u32(o + 0), get_bcc_world_thing)

}

function get_bcc_world_thing(o) {
    if (u8(o + 4) || u8(o + 5) || u8(o + 7) !== 1 || u32(o + 8) || u32(o + 56) || u32(o + 64) || u32(o + 92) || u32(o + 96) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, f32, 80, f32, 84, u32, 88, u32, 92, u32, 96, f32, 100, f32, 104, f32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ö(u32(o + 20), get_bcc_world_thing_20)
    ä(bcc_unknown, u32(o + 40), get_bcc_unknown)
    ä(bcc_unknown, u32(o + 48), get_bcc_unknown)

    for (let i = 0; i < u32(o + 72); i++) {
        ö(u32(o + 76) + (i * 4), get_bcc_world_thing_76)
    }
    ä(bcc_sound_section, u32(o + 88), get_bcc_sound_section)

}

function get_bcc_world_thing_20(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 2 || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_bcc_world_thing_48(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_bcc_world_thing_76(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bcc_unknown, u32(o + 0), get_bcc_unknown)

}

function get_bcc_basic(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_basic_4)

}

function get_bcc_basic_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (g.type) {
    case 0:
        ä(bcc_car, u32(o), get_bcc_car)
        break
    case 1:
        ä(bcc_interface, u32(o), get_bcc_interface)
        break
    case 3:
        ö(u32(o), get_bcc_link)
        break
    default:
        if (u32(o))
            console.log("?")

    }

}

function get_bcc_car(o) {
    if (u8(o + 4) !== 4 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_car_0)

}

function get_bcc_car_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 44) !== 8 || u32(o + 52) !== 13 || u32(o + 60) !== 5 || u32(o + 68) !== 1 || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ä(bcc_model_anim_2_type_b, u32(o + 16), get_bcc_model_anim_2_type_b)
    ö(u32(o + 20), get_bcc_car_0_20)
    ö(u32(o + 24), get_bcc_car_0_24)
    ö(u32(o + 28), get_bcc_car_0_28)
    ö(u32(o + 32), get_bcc_car_0_32)
    ö(u32(o + 36), get_bcc_car_0_36)
    ö(u32(o + 40), get_bcc_car_0_40)
    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 8), get_bcc_car_0_48)
    }
    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 12), get_bcc_car_0_56)
    }
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 12), get_bcc_car_0_64)
    }
    ö(u32(o + 72), get_bcc_car_0_72)

}

function get_bcc_model_anim_2_type_b(o) {
    if (u32(o + 0) !== 2852208671 || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bcc_model_anim_2_type_b_8)
    ö(u32(o + 16), get_bcc_model_anim_2_type_b_16)
    ö(u32(o + 20), get_bcc_model_anim_2_type_b_20)

}

function get_bcc_model_anim_2_type_b_8(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_model_anim_2_type_b_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_model_anim_2_type_b_20(o) {
    if (u8(o + 4) !== 255 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 1 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) !== 7 || u32(o + 44))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 0), get_bcc_model_anim_2_type_b_20_0)
    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 4), get_bcc_model_anim_2_type_b_20_40)
    }

}

function get_bcc_model_anim_2_type_b_20_0(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_model_anim_2_type_b_20_40(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_bcc_model_anim_2_type_b_20_40_0)

}

function get_bcc_model_anim_2_type_b_20_40_0(o) {
    if (u8(o + 4) !== 255 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 1 || u32(o + 44))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 0), get_bcc_model_anim_2_type_b_20_40_0_0)
    ö(u32(o + 40), get_bcc_model_anim_2_type_b_20_40_0_40)

}

function get_bcc_model_anim_2_type_b_20_40_0_0(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_model_anim_2_type_b_20_40_0_40(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_model_anim_2_type_b_20_40_0_40_0)

}

function get_bcc_model_anim_2_type_b_20_40_0_40_0(o) {
    if (u8(o + 4) !== 255 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 16) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 0), get_bcc_model_anim_2_type_b_20_40_0_40_0_0)

}

function get_bcc_model_anim_2_type_b_20_40_0_40_0_0(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_car_0_20(o) {
    if (u32(o + 16) !== 4 || u32(o + 24) !== 4 || u32(o + 32) !== 4 || u32(o + 40) !== 4)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 0), get_bcc_car_0_20_0)
    ö(u32(o + 4), get_bcc_car_0_20_4)
    ä(bcc_sound_section, u32(o + 8), get_bcc_sound_section)
    ä(bcc_sound_section, u32(o + 12), get_bcc_sound_section)

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 8), get_bcc_car_0_20_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 8), get_bcc_car_0_20_20)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 8), get_bcc_car_0_20_20)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 8), get_bcc_car_0_20_20)
    }

}

function get_bcc_car_0_20_0(o) {
    if (f32(o + 0) !== 0.2199999988079071 || u8(o + 4) || u8(o + 5) || u8(o + 6) !== 204 || u8(o + 7) !== 204 || u32(o + 12) !== 5 || u32(o + 20) || u32(o + 24) !== 200 || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_bcc_car_0_20_0_8)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 20), get_bcc_car_0_20_0_16)
    }
    ä(bcc_unknown, u32(o + 28), get_bcc_unknown)
    ä(bcc_unknown, u32(o + 32), get_bcc_unknown)
    ä(bcc_unknown, u32(o + 36), get_bcc_unknown)

}

function get_bcc_car_0_20_0_8(o) {
    if (u8(o + 0) !== 10 || u8(o + 1) !== 10 || u8(o + 2) !== 10 || u8(o + 3) !== 128 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_car_0_20_0_16(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)*/

    ä(bcc_a_single_section, u32(o + 8), get_bcc_a_single_section)
    ö(u32(o + 12), get_bcc_car_0_20_0_16_12)
    ö(u32(o + 16), get_bcc_car_0_20_0_16_16)

}

function get_bcc_car_0_20_0_16_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bcc_mysterious)
    }
}

function get_bcc_car_0_20_0_16_16(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bcc_mysterious)
    }

}

function get_bcc_unknown_thing(o) {
    if (u8(o + 22) || u8(o + 23) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 12), get_bcc_unknown_thing_16)
    }

    switch (u8(o + 20)) {
    case 1:
        ö(u32(o + 24), get_bcc_unknown_thing_24t1)
        break
    case 2:
        ö(u32(o + 24), get_bcc_unknown_thing_24t2)
        break
    default:
        if (u32(o + 24)) {
            sü(u8, 20, o, 24)
        }
    }
    ö(u32(o + 32), get_bcc_unknown_thing_32)

}

function get_bcc_unknown_thing_16(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bcc_unknown_thing_24t1(o) {
    if (u8(o + 10) || u32(o + 32) || u32(o + 36) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bcc_unknown_thing_24t1_4)
    }
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 12), get_bcc_unknown_thing_24t1_52)
    }
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 12), get_bcc_unknown_thing_24t1_60)
    }
    ö(u32(o + 64), get_bcc_unknown_thing_24t1_64)
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 8), get_bcc_unknown_thing_24t1_72)
    }

}

function get_bcc_unknown_thing_24t1_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}
function get_bcc_unknown_thing_24t1_52(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bcc_unknown_thing_24t1_60(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bcc_unknown_thing_24t1_64(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_bcc_unknown_thing_24t1_72(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_bcc_unknown_thing_24t1_72_4)
    }

}

function get_bcc_unknown_thing_24t1_72_4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16], o)
}
function get_bcc_unknown_thing_24t2(o) {
    if (u32(o + 12) || u32(o + 16) !== 1 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bcc_unknown_thing_24t2_4)
    }
    ö(u32(o + 20), get_bcc_unknown_thing_24t2_20)

}

function get_bcc_unknown_thing_24t2_4(o) {
    if (u8(o + 3) !== 255 || u8(o + 4) || u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bcc_unknown_thing_24t2_20(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_unknown_thing_32(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_unknown(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_bcc_unknown_4)
    }

}

function get_bcc_unknown_4(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    switch (u32(o + 0)) {
    case 1:
        ä(bcc_unknown_thing, u32(o + 4), get_bcc_unknown_thing)
        break
    case 4:
        ä(bcc_strange, u32(o + 4), get_bcc_strange)
        break
    case 5:
        ä(bcc_unknown_idk_sec, u32(o + 4), get_bcc_unknown_idk_sec)
        break
    case 9:
        ä(bcc_sound_section, u32(o + 4), get_bcc_sound_section)
        break
    case 26:
        ä(bcc_sound_controls, u32(o + 4), get_bcc_sound_controls)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }
    switch (u32(o + 0)) {
    case 1:
        ö(u32(o + 8), get_bcc_unknown_4_8t1)
        break
    case 4:
        ö(u32(o + 8), get_bcc_unknown_4_8t4)
        break
    case 5:
        ö(u32(o + 8), get_bcc_unknown_4_8t5)
        break
    case 9:
        ö(u32(o + 8), get_bcc_unknown_4_8t9)
        break
    case 26:
        ö(u32(o + 8), get_bcc_unknown_4_8t26)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 0, o, 8)
        }
    }

}

// function get_bcc_unknown_4_4t4(o) {
//     if (u32(o + 0) !== 1 || u32(o + 8) !== 16843009 || u32(o + 12) !== 8 || u32(o + 16) !== 100 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 1000 || u32(o + 36) || u32(o + 40) || u32(o + 44))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)

//     ö(u32(o + 4), get_bcc_unknown_4_4t4_4)

// }

// function get_bcc_unknown_4_4t4_4(o) {
//     if (u32(o + 4) || u32(o + 8) || u32(o + 12))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

//     ä(bcc_unknown, u32(o + 0), get_bcc_unknown)

// }bcc_unknown_4_4t4

function get_bcc_unknown_idk_sec(o) {
    if (u32(o + 0) || u8(o + 5) || u32(o + 12) || u32(o + 16) || u32(o + 36) !== 1 || u8(o + 44) !== 2 || u8(o + 45) || u8(o + 46) || u8(o + 47))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47], o)

    ö(u32(o + 8), get_bcc_unknown_idk_sec_8)
    ö(u32(o + 24), get_bcc_unknown_idk_sec_24)
    ö(u32(o + 32), get_bcc_unknown_idk_sec_32)
    ö(u32(o + 40), get_bcc_unknown_idk_sec_40)

}

function get_bcc_unknown_idk_sec_8(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 8) !== 105 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 16) !== 1 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 12), get_bcc_unknown_idk_sec_8_12)
    ö(u32(o + 20), get_bcc_unknown_idk_sec_8_20)

}

function get_bcc_unknown_idk_sec_8_12(o) {
    if (u32(o + 0) !== 3000 || u32(o + 4) !== 2 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 64), get_bcc_mysterious)
    }

}

function get_bcc_unknown_idk_sec_8_20(o) {
    if (u32(o + 0) !== 410131222 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_unknown_idk_sec_24(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_unknown_idk_sec_24_4)

}

function get_bcc_unknown_idk_sec_24_4(o) {
    if (f32(o + 0) !== 15 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_unknown_idk_sec_32(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_unknown_idk_sec_32_4)

}

function get_bcc_unknown_idk_sec_32_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_unknown_idk_sec_32_4_0)

}

function get_bcc_unknown_idk_sec_32_4_0(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    switch (u8(o + 0)) {
    case 1:
        ö(u32(o + 4), get_bcc_unknown_idk_sec_32_4_0_4t1)
        break
    case 2:
        ö(u32(o + 4), get_bcc_unknown_idk_sec_32_4_0_4t2)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

}
function get_bcc_unknown_idk_sec_32_4_0_4t1(o) {
    if (u8(o + 0) !== 3 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) !== 1 || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_unknown_idk_sec_32_4_0_4t2(o) {
    if (u32(o + 0) !== 50 || u8(o + 4) !== 1 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_bcc_unknown_idk_sec_40(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_bcc_sound_section(o) {
    if (u8(o + 8) || u8(o + 11) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
    ß('p_sound', o, 0)

    ö(u32(o + 24), get_bcc_sound_section_24)

}

function get_bcc_sound_section_24(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
}

function get_bcc_unknown_4_8t1(o) {
    if (u32(o + 20) || u32(o + 44) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 48), get_bcc_unknown_4_8t1_48)

    switch (u8(o + 42)) {
    case 1:
        ö(u32(o + 52), get_bcc_unknown_4_8t1_52t1)
        break
    case 2:
        ö(u32(o + 52), get_bcc_unknown_4_8t1_52t2)
        break
    case 3:
        ö(u32(o + 52), get_bcc_unknown_4_8t1_52t3)
        break
    default:
        if (u32(o + 52)) {
            sü(u8, 42, o, 52)
        }
    }

}

function get_bcc_unknown_4_8t1_48(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_bcc_unknown_4_8t1_52t2(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 0:
        ö(u32(o + 12), get_bcc_unknown_4_8t1_52t2_12t0)
        break
    case 2:
        ö(u32(o + 12), get_bcc_unknown_4_8t1_52t2_12t2)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 8, o, 12)
        }
    }

}
function get_bcc_unknown_4_8t1_52t2_12t0(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 1 || f32(o + 8) !== 1 || u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_bcc_unknown_4_8t1_52t2_12t2(o) {
    if (u8(o + 8) !== 1 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bcc_unknown_4_8t1_52t3(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_bcc_unknown_4_8t1_52t1(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_bcc_unknown_4_8t4(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bcc_unknown_4_8t5(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_unknown_4_8t9(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_unknown_4_8t26(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_car_0_20_4(o) {
    if (f32(o + 0) !== -250 || f32(o + 4) !== 45 || f32(o + 8) !== 6000 || f32(o + 12) !== 1120 || u32(o + 16) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 16 || f32(o + 36) !== 500 || f32(o + 40) !== 1000 || f32(o + 44) !== 25 || f32(o + 48) !== 50 || f32(o + 52) !== 75 || u32(o + 56) || u32(o + 60) !== 800 || f32(o + 72) !== 8 || f32(o + 76) !== 50)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ä(bcc_a_single_section, u32(o + 64), get_bcc_a_single_section)
    // ö(u32(o + ), get_bcc_car_0_20_4_64)
    ö(u32(o + 68), get_bcc_car_0_20_4_68)
    ö(u32(o + 80), get_bcc_car_0_20_4_80)
    ö(u32(o + 84), get_bcc_car_0_20_4_84)
    ö(u32(o + 88), get_bcc_car_0_20_4_88)
    ö(u32(o + 92), get_bcc_car_0_20_4_92)

}

function get_bcc_car_0_20_4_68(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_car_0_20_4_80(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || f32(o + 8) !== -50 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bcc_unknown, u32(o + 16), get_bcc_unknown)

}

function get_bcc_car_0_20_4_80_16(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_car_0_20_4_84(o) {
    if (u32(o + 0) !== 3000 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_car_0_20_4_88(o) {
    if (u32(o + 0) !== 3000 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_car_0_20_4_92(o) {
    if (f32(o + 0) !== 0.25 || f32(o + 4) !== 1.600000023841858 || f32(o + 8) !== 0.6000000238418579 || u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}

function get_bcc_car_0_20_20(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    switch (u8(o + 0)) {
    case 1:
        ö(u32(o + 4), get_bcc_car_0_20_20_4t1)
        break
    case 3:
        ö(u32(o + 4), get_bcc_car_0_20_20_4t3)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

}
function get_bcc_car_0_20_20_4t1(o) {
    if (f32(o + 0) !== 106.72000122070312 || f32(o + 12) !== 10.149999618530273 || f32(o + 16) !== 6 || f32(o + 24) !== 0.10000000149011612 || f32(o + 28) !== 1 || u8(o + 32) !== 1 || u8(o + 33) || u8(o + 34) || u8(o + 35) || f32(o + 40) !== 20 || f32(o + 44) !== 5 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || f32(o + 64) !== 5000 || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u8, 32, u8, 33, u8, 34, u8, 35, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, f32, 64, u32, 68, u32, 72, u32, 76], o)
}
function get_bcc_car_0_20_20_4t3(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_car_0_24(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_car_0_24_4)

}

function get_bcc_car_0_24_4(o) {
    if (f32(o + 12) !== 200 || f32(o + 20) !== 220 || f32(o + 24) !== 60 || u32(o + 28) || u32(o + 32) || f32(o + 36) !== 70 || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, f32, 36, f32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 0), get_bcc_car_0_24_4_0)
    ö(u32(o + 4), get_bcc_car_0_24_4_4)
    ö(u32(o + 8), get_bcc_car_0_24_4_8)

}

function get_bcc_car_0_24_4_0(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 50 || u32(o + 12) || f32(o + 16) !== 1 || f32(o + 20) !== 1 || f32(o + 24) !== 1 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 40), get_bcc_car_0_24_4_0_40)
    ö(u32(o + 48), get_bcc_car_0_24_4_0_48)

}

function get_bcc_car_0_24_4_0_40(o) {
    if (u32(o + 0) !== 2 || u8(o + 4) || u8(o + 5) || u8(o + 6) || u8(o + 7) !== 1 || u32(o + 8) || f32(o + 12) !== 0.800000011920929 || f32(o + 16) !== 0.6000000238418579 || u32(o + 20) || u32(o + 24) !== 5 || u32(o + 28) !== 10 || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 70 || u32(o + 48) || f32(o + 52) !== 1 || u32(o + 56) || f32(o + 60) !== 1 || u32(o + 64) || f32(o + 68) !== 1 || u32(o + 72) !== 1 || f32(o + 80) !== 10 || f32(o + 84) !== 75 || u32(o + 92) || u32(o + 96) || f32(o + 100) !== 300 || f32(o + 104) !== 200 || f32(o + 108) !== 1000 || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, f32, 80, f32, 84, u32, 88, u32, 92, u32, 96, f32, 100, f32, 104, f32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ö(u32(o + 76), get_bcc_car_0_24_4_0_40_76)
    ä(bcc_sound_section, u32(o + 88), get_bcc_sound_section)

}

function get_bcc_car_0_24_4_0_40_76(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_car_0_24_4_0_48(o) {
    if (f32(o + 0) !== -5.639999866485596 || f32(o + 4) !== 1.7000000476837158 || u32(o + 12) || f32(o + 16) !== 5.639999866485596 || f32(o + 20) !== 1.899999976158142 || u32(o + 28) || f32(o + 32) !== 5.639999866485596 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_bcc_car_0_24_4_4(o) {
    if (f32(o + 0) !== 0.8999999761581421 || f32(o + 4) !== 2.3499999046325684 || f32(o + 8) !== 0.07000000029802322 || u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_bcc_car_0_24_4_8(o) {
    if (f32(o + 0) !== -3.5999999046325684 || f32(o + 4) !== 1 || f32(o + 8) !== -6 || u32(o + 12) || f32(o + 16) !== 3.5999999046325684 || f32(o + 20) !== 1 || f32(o + 24) !== -6 || u32(o + 28) || f32(o + 32) !== -3.5999999046325684 || f32(o + 36) !== 1 || f32(o + 40) !== 6 || u32(o + 44) || f32(o + 48) !== 3.5999999046325684 || f32(o + 52) !== 1 || f32(o + 56) !== 6 || u32(o + 60) || f32(o + 68) !== 1.2000000476837158 || f32(o + 72) !== 1 || f32(o + 84) !== 60 || u32(o + 88))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, u32, 88], o)
}

function get_bcc_car_0_28(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u8(o + 20) !== 25 || u8(o + 21) || u8(o + 22) || u8(o + 23) || u32(o + 24) || f32(o + 28) !== 0.699999988079071 || f32(o + 32) !== -0.07999999821186066 || f32(o + 36) !== -0.10000000149011612 || f32(o + 40) !== -0.06499999761581421 || u32(o + 44) || u32(o + 48) !== 4 || u32(o + 64) !== 1 || u32(o + 72) !== 1 || u32(o + 80) !== 2 || f32(o + 92) !== 0.699999988079071 || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, f32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, f32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    ä(bcc_model_anim_2_type_b, u32(o + 0), get_bcc_model_anim_2_type_b)

    ä(bcc_model_link, u32(o + 4), get_bcc_model_link)
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 24), get_bcc_car_0_28_52)
    }
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 8), get_bcc_car_0_28_60)
    }
    ö(u32(o + 68), get_bcc_car_0_28_68)
    ö(u32(o + 76), get_bcc_car_0_28_76)
    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 32), get_bcc_car_0_28_84)
    }

}

function get_bcc_car_0_28_52(o) {
    if (u8(o + 2) !== 1 || f32(o + 8) !== 1.899999976158142 || u8(o + 21) || u8(o + 22) || u8(o + 23))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12, f32, 16, u8, 20, u8, 21, u8, 22, u8, 23], o)
}
function get_bcc_car_0_28_60(o) {
    if (u16(o + 6))
        ü(1, [u16, 0, u16, 2, u16, 4, u16, 6], o)
}
function get_bcc_car_0_28_68(o) {
    if (u32(o + 0) !== 6 || u32(o + 4) || u32(o + 8) || u32(o + 12) || f32(o + 16) !== 1.5 || f32(o + 20) !== -1.9529999494552612 || f32(o + 24) !== -1.2999999523162842 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_bcc_car_0_28_76(o) {
    if (u32(o + 0) !== 8 || u32(o + 4) || u32(o + 8) || u32(o + 12) || f32(o + 16) !== -1.5 || f32(o + 20) !== -1.9529999494552612 || f32(o + 24) !== -1.2999999523162842 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_bcc_car_0_28_84(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_bcc_car_0_32(o) {
    if (f32(o + 12) !== 0.5 || u32(o + 20) !== 2 || u8(o + 28) !== 1 || u8(o + 29) || u8(o + 30) || u8(o + 31) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(bcc_a_single_section, u32(o + 16), get_bcc_a_single_section)
    // ö(u32(o + 16), get_bcc_car_0_32_16)
    // ö(u32(o + 16), get_bcc_car_0_32_16)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_bcc_car_0_32_24)
    }
    ö(u32(o + 32), get_bcc_car_0_32_32)

}

function get_bcc_car_0_32_16(o) {
    if (u32(o + 0) || u32(o + 4) !== 1000 || u32(o + 8) || u8(o + 14) || u8(o + 15) || u32(o + 16) || u32(o + 20) !== 2 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
    ü(1, [u32, 0, u32, 4, u32, 8, u16, 12, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bcc_car_0_32_24(o) {/*ü(1, [f32, 0, f32, 4, f32, 8], o)*/
}
function get_bcc_car_0_32_32(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_car_0_32_32_4)
    ö(u32(o + 8), get_bcc_car_0_32_32_8)

}

function get_bcc_car_0_32_32_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 5 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bcc_car_0_32_32_8(o) {
    if (u32(o + 0) !== 2 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bcc_car_0_32_32_8_4)
    }

}

function get_bcc_car_0_32_32_8_4(o) {
    if (u32(o + 4) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_bcc_car_0_32_32_8_4_0)
    ö(u32(o + 8), get_bcc_car_0_32_32_8_4_8)

}

function get_bcc_car_0_32_32_8_4_0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_bcc_car_0_32_32_8_4_0_4)
    ö(u32(o + 12), get_bcc_car_0_32_32_8_4_0_12)

}

function get_bcc_car_0_32_32_8_4_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_car_0_32_32_8_4_0_12(o) {
    if (u32(o + 0) !== 410131222 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_car_0_32_32_8_4_8(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bcc_car_0_32_32_8_4_8_8)
    switch (u8(o)) {
    case 0:
        ö(u32(o + 20), get_bcc_car_0_32_32_8_4_8_20t0)
        break
    case 1:
        //value
        break
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
    }

}

function get_bcc_car_0_32_32_8_4_8_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bcc_car_0_32_32_8_4_8_20t0(o) {
    if (f32(o + 0) !== -4.699999809265137 || f32(o + 4) !== 1.7000000476837158 || u32(o + 12) || f32(o + 16) !== 4.699999809265137 || f32(o + 20) !== 1.899999976158142 || u32(o + 28) || f32(o + 32) !== 4.699999809265137 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_bcc_car_0_36(o) {
    if (f32(o + 4) !== 60 || f32(o + 12) !== 1000 || f32(o + 16) !== 0.5 || f32(o + 20) !== 2.5 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ä(bcc_sound_section, u32(o + 0), get_bcc_sound_section)
    ä(bcc_sound_section, u32(o + 8), get_bcc_sound_section)

}

function get_bcc_car_0_40(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bcc_interface, u32(o + 0), get_bcc_interface)
    ä(bcc_interface, u32(o + 4), get_bcc_interface)
    ä(bcc_interface, u32(o + 8), get_bcc_interface)
    ä(bcc_interface, u32(o + 12), get_bcc_interface)
    ä(bcc_interface, u32(o + 16), get_bcc_interface)
    ä(bcc_interface, u32(o + 20), get_bcc_interface)

}

function get_bcc_car_0_48(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_bcc_car_0_48_4)
    }

}

function get_bcc_car_0_48_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_bcc_car_0_56(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bcc_mysterious)
    }

}
function get_bcc_car_0_64(o) {
    if (u32(o + 0) !== 1 || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bcc_mysterious)
    }

}

function get_bcc_car_0_72(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bcc_unknown, u32(o + 0), get_bcc_unknown)

}

function get_bcc_mysterious(o) {
    if (u8(o + 1) || u32(o + 8) || f32(o + 28) !== 1 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    switch (u8(o + 0)) {
    case 1:
        ä(bcc_unknown, u32(o + 4), get_bcc_unknown)
        break
    case 2:
        ä(bcc_strange, u32(o + 4), get_bcc_strange)
        break
    case 3:
        ä(bcc_sound_controls, u32(o + 4), get_bcc_sound_controls)
        // ö(u32(o + ), get_bcc_mysterious_4t3)
        break
    case 5:
    case 6:
        ö(u32(o + 4), get_bcc_mysterious_4t6)
        break
    case 9:
        ö(u32(o + 4), get_bcc_mysterious_4t9)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

}
function get_bcc_mysterious_4t3(o) {
    if (u32(o + 4) || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 11) || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 16), get_bcc_mysterious_4t3_16)

}

function get_bcc_mysterious_4t3_16(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_mysterious_4t3_16_4)

}

function get_bcc_mysterious_4t3_16_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_mysterious_4t3_16_4_0)

}

function get_bcc_mysterious_4t3_16_4_0(o) {
    if (u32(o + 4) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
    ß('p_sound', o, 0)

    ö(u32(o + 24), get_bcc_mysterious_4t3_16_4_0_24)

}

function get_bcc_mysterious_4t3_16_4_0_24(o) {
    if (f32(o + 0) !== 1000 || u8(o + 4) !== 25 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_bcc_strange(o) {
    if (u8(o + 8) !== 1 || u8(o + 10) !== 1 || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bcc_strange_4)
    }

}

function get_bcc_strange_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bcc_unknown, u32(o + 0), get_bcc_unknown)

}

function get_bcc_mysterious_4t6(o) {
    if (u8(o + 1) || u8(o + 2) || u32(o + 8) || u32(o + 12) !== 1 || u32(o + 20) || u8(o + 24) || u8(o + 26) || u8(o + 27) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    switch (u8(o + 3)) {
    case 0:
        ö(u32(o + 16), get_bcc_mysterious_4t6_16t0)
        break
    case 2:
        ö(u32(o + 16), get_bcc_mysterious_4t6_16t2)
        break
    default:
        if (u32(o + 16)) {
            sü(u8, 3, o, 16)
        }
    }

    ö(u32(o + 28), get_bcc_mysterious_4t6_28)
    ö(u32(o + 36), get_bcc_mysterious_4t6_36)
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 32), get_bcc_mysterious_4t6_44)
    }
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 12), get_bcc_mysterious_4t6_52)
    }
    ö(u32(o + 56), get_bcc_mysterious_4t6_56)

}
function get_bcc_mysterious_4t6_16t0(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_model', o, 0)
}
function get_bcc_mysterious_4t6_16t2(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 0)
}

function get_bcc_mysterious_4t6_28(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== -1 || u32(o + 12) || f32(o + 16) !== 90 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bcc_mysterious_4t6_36(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bcc_mysterious_4t6_44(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_bcc_mysterious_4t6_52(o) {
    if (u8(o + 3) !== 255 || u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_bcc_mysterious_4t6_56(o) {
    if (u32(o + 0) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12) || f32(o + 16) !== 250 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_mysterious_4t9(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) !== 1 || u8(o + 3) || u32(o + 4) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_bcc_mysterious_4t9_8)

}

function get_bcc_mysterious_4t9_8(o) {
    if (u8(o + 4) !== 5 || u8(o + 7) !== 1 || u32(o + 12) !== 50 || f32(o + 16) !== 32 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_bcc_mysterious_4t9_8_8)

}

function get_bcc_mysterious_4t9_8_8(o) {
    if (u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_link(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 48) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    ö(u32(o + 16), get_bcc_link_16)
    ä(bcc_font, u32(o + 28), get_bcc_font)

    ö(u32(o + 32), get_bcc_interface)
    ö(u32(o + 36), get_bcc_link_36)
    ö(u32(o + 44), get_bcc_link_44)
    ö(u32(o + 56), get_bcc_link_56)
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 4), get_bcc_link_64)
    }
    ö(u32(o + 68), get_bcc_link_68)
    ö(u32(o + 72), get_bcc_link_72)

}

function get_bcc_link_16(o) {
    if (u32(o + 0) !== 10 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bcc_link_16_4)
    }

}

function get_bcc_link_16_4(o) {
    // ü(1, [u32, 0], o)
    // ö(u32(o + 0), get_bcc_flag)
    // ö(u32(o + 0), get_bcc_flag)
    ä(bcc_flag, u32(o + 0), get_bcc_flag)

}

function get_bcc_flag(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 24) || u8(o + 26) || u8(o + 27) !== 1 || u8(o + 28) || u8(o + 29) || u32(o + 32) || u32(o + 36) || u8(o + 40) !== 1 || u8(o + 41) || u8(o + 43) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44], o)

    ö(u32(o + 8), get_bcc_flag_8)
    switch (u32(o + 16)) {
    case 0:
        ö(u32(o + 20), get_bcc_flag_20t0)
        break
    case 2:
        ö(u32(o + 20), get_bcc_flag_20t2)
        break
    case 3:
        ö(u32(o + 20), get_bcc_flag_20t3)
        break
    case 7:
        ö(u32(o + 20), get_bcc_flag_20t7)
        break
    }

}

function get_bcc_flag_8(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_flag_20t0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_flag_20t2(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_flag_20t3(o) {
    if (u8(o + 0) || u8(o + 1) !== 1 || u8(o + 2) !== 2 || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 4), get_bcc_flag_20t3_4)

}

function get_bcc_flag_20t3_4(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_flag_20t7(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 2000000000 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}

function get_bcc_font(o) {
    if (u8(o + 11) || u32(o + 16) !== 1 || u8(o + 32) || u8(o + 33) || u8(o + 34) || u8(o + 35) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u8, 8, u16, 9, u8, 11, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 0)

    ä(bcc_model_anim_2_type_c, u32(o + 4), get_bcc_model_anim_2_type_c)
    ö(u32(o + 20), get_bcc_font_20)
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_bcc_font_28)
    }

}
function get_bcc_font_20(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_font_28(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8], o)
}

function get_bcc_model_anim_2_type_c(o) {
    if (u32(o + 0) !== 131077 || f32(o + 4) !== 35 || f32(o + 8) !== 33 || f32(o + 12) !== 1 || f32(o + 16) !== 1 || u32(o + 20) !== 384 || u32(o + 28) !== 353 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 2), get_bcc_model_anim_2_type_c_24)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 24), get_bcc_model_anim_2_type_c_32)
    }
    ö(u32(o + 36), get_bcc_model_anim_2_type_c_36)

}

function get_bcc_model_anim_2_type_c_24(o) {// ü(1, [u16, 0], o)
}
function get_bcc_model_anim_2_type_c_32(o) {
    if (u8(o + 17) || u32(o + 20))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20], o)
}
function get_bcc_model_anim_2_type_c_36(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_idk(o) {
    if (u32(o + 4) || u32(o + 8) || u8(o + 12) || u8(o + 13) || u32(o + 20) || f32(o + 24) !== 50000 || u32(o + 28) || u32(o + 32) || u32(o + 40) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u8(o + 80) !== 255 || u8(o + 81) !== 255 || u8(o + 82) !== 255 || u8(o + 83) !== 255 || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u32, 84, u32, 88, u32, 92], o)

    ß('p_model', o, 16)

    ö(u32(o + 0), get_bcc_idk_0)
    ö(u32(o + 36), get_bcc_idk_36)
    ä(bcc_idk, u32(o + 44), get_bcc_idk)

}

function get_bcc_idk_0(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_idk_36(o) {
    if (u32(o + 0) || u32(o + 8) || f32(o + 16) !== 1 || f32(o + 20) !== 1 || f32(o + 24) !== 1 || u32(o + 28) || u8(o + 36) !== 255 || u8(o + 37) !== 255 || u8(o + 38) !== 255 || u8(o + 39) !== 255 || u8(o + 45) !== 12 || u8(o + 46) || u8(o + 47) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ä(bcc_world_thing, u32(o + 40), get_bcc_world_thing)
    ö(u32(o + 60), get_bcc_idk_36_60)
    ö(u32(o + 68), get_bcc_idk_36_68)

}

function get_bcc_idk_36_60(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_idk_36_60_4)
    ö(u32(o + 8), get_bcc_idk_36_60_8)

}

function get_bcc_idk_36_60_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bcc_idk_36_60_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_idk_36_60_8_4)

}

function get_bcc_idk_36_60_8_4(o) {
    if (u32(o + 4) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_idk_36_60_8_4_0)
    ö(u32(o + 8), get_bcc_idk_36_60_8_4_8)

}

function get_bcc_idk_36_60_8_4_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_idk_36_60_8_4_0_4)

}

function get_bcc_idk_36_60_8_4_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_idk_36_60_8_4_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bcc_idk_36_60_8_4_8_8)
    ä(bcc_world_thing, u32(o + 12), get_bcc_world_thing)
    ö(u32(o + 20), get_bcc_idk_36_60_8_4_8_20)

}

function get_bcc_idk_36_60_8_4_8_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bcc_idk_36_60_8_4_8_20(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_bcc_idk_36_68(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bcc_unknown, u32(o + 0), get_bcc_unknown)

}

function get_bcc_idk_44(o) {
    if (u32(o + 4) || u32(o + 8) || u8(o + 12) || u8(o + 13) || u8(o + 14) !== 1 || u8(o + 15) || u32(o + 20) || u32(o + 28) || u32(o + 32) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u8(o + 80) !== 255 || u8(o + 81) !== 255 || u8(o + 82) !== 255 || u8(o + 83) !== 255 || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u32, 84, u32, 88, u32, 92], o)
    ß('p_model', o, 16)

    ö(u32(o + 0), get_bcc_idk_44_0)
    ö(u32(o + 36), get_bcc_idk_44_36)

}

function get_bcc_idk_44_0(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_idk_44_36(o) {
    if (u32(o + 0) || f32(o + 4) !== 1 || u32(o + 8) || f32(o + 16) !== 1 || f32(o + 20) !== 1 || f32(o + 24) !== 1 || u32(o + 28) || u32(o + 32) || u8(o + 36) !== 255 || u8(o + 37) !== 255 || u8(o + 38) !== 255 || u8(o + 39) !== 255 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ä(bcc_world_thing, u32(o + 40), get_bcc_world_thing)
    ö(u32(o + 60), get_bcc_idk_44_36_60)

}

function get_bcc_idk_44_36_60(o) {
    if (f32(o + 0) !== 100000 || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_idk_44_36_60_4)
    ö(u32(o + 8), get_bcc_idk_44_36_60_8)

}

function get_bcc_idk_44_36_60_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bcc_idk_44_36_60_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_object(o) {
    if (u32(o + 0) || u32(o + 8) || f32(o + 12) !== 500 || u8(o + 16) || u8(o + 17) || u8(o + 18) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u8(o + 60) || u8(o + 61) || u8(o + 62) !== 1 || u8(o + 63) || u32(o + 64) || u32(o + 68) || u32(o + 72) || f32(o + 76) !== 12 || u32(o + 80) || f32(o + 84) !== 10 || u32(o + 92) || u8(o + 96) || u8(o + 97) !== 1 || u8(o + 98) || u8(o + 99) !== 1 || u32(o + 104) !== 1 || u32(o + 112) || u8(o + 116) !== 255 || u8(o + 117) !== 255 || u8(o + 118) !== 255 || u8(o + 119) !== 255 || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u8, 60, u8, 61, u8, 62, u8, 63, u32, 64, u32, 68, u32, 72, f32, 76, u32, 80, f32, 84, u32, 88, u32, 92, u8, 96, u8, 97, u8, 98, u8, 99, u32, 100, u32, 104, u32, 108, u32, 112, u8, 116, u8, 117, u8, 118, u8, 119, u32, 120, u32, 124], o)

    switch (u8(o + 19)) {
    case 17:
        ö(u32(o + 4), get_bcc_object_4t17)
        break
    case 20:
        ä(bcc_a_single_section, u32(o + 4), get_bcc_a_single_section)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 19, o, 4)
        }
    }

    ö(u32(o + 44), get_bcc_object_44)
    ä(bcc_unknown, u32(o + 88), get_bcc_unknown)

    ä(bcc_text, u32(o + 100), get_bcc_text)

    for (let i = 0; i < u32(o + 104); i++) {
        ö(u32(o + 108) + (i * 64), get_bcc_mysterious)
    }

}
function get_bcc_object_4t17(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) !== 5 || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_a_single_section(o) {
    if (u32(o + 0) || u32(o + 4) !== 1000 || u32(o + 8) || u16(o + 14) || u32(o + 16) || u32(o + 20) !== 2 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u16, 12, u16, 14, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_object_44(o) {
    if (f32(o + 0) !== 100 || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_object_44_4)
    ö(u32(o + 8), get_bcc_object_44_8)

}

function get_bcc_object_44_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bcc_object_44_8(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_object_44_8_4)

}

function get_bcc_object_44_8_4(o) {
    if (u32(o + 4) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_object_44_8_4_0)
    ö(u32(o + 8), get_bcc_object_44_8_4_8)

}

function get_bcc_object_44_8_4_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_object_44_8_4_0_4)

}

function get_bcc_object_44_8_4_0_4(o) {
    if (u32(o + 0) !== 410131222 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_object_44_8_4_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bcc_object_44_8_4_8_8)
    ö(u32(o + 20), get_bcc_object_44_8_4_8_20)

}

function get_bcc_object_44_8_4_8_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bcc_object_44_8_4_8_20(o) {
    if (f32(o + 0) !== -0.5 || u32(o + 4) || f32(o + 8) !== -0.5 || u32(o + 12) || f32(o + 16) !== 0.5 || f32(o + 20) !== 1 || f32(o + 24) !== 0.5 || u32(o + 28) || f32(o + 32) !== 0.5 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_bcc_something(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 8) !== 1 || u8(o + 9) !== 1 || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) !== 4000 || u32(o + 32) !== 4000 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bcc_text(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_text_0)

}

function get_bcc_text_0(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_multi_font(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 4), get_bcc_multi_font_4t0)
        break
    case 1:
        ö(u32(o + 4), get_bcc_multi_font_4t1)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }

    }
}
function get_bcc_multi_font_4t0(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(bcc_font, u32(o + 12), get_bcc_font)
    ä(bcc_font, u32(o + 28), get_bcc_font)
    ä(bcc_font, u32(o + 32), get_bcc_font)

}

function get_bcc_multi_font_4t1(o) {
    if (u8(o + 0) || u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) !== 4 || u32(o + 8) !== 4 || f32(o + 24) !== 1.2000000476837158 || f32(o + 28) !== 0.5)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, f32, 28], o)

    ä(bcc_font, u32(o + 12), get_bcc_font)
    ä(bcc_font, u32(o + 16), get_bcc_font)
    ä(bcc_font, u32(o + 20), get_bcc_font)

}

function get_bcc_emitter(o) {
    if (u32(o + 4) || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 16), get_bcc_emitter_16)

}

function get_bcc_emitter_16(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12) || u32(o + 20) || u32(o + 60))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 0)

    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 12), get_bcc_emitter_16_48)
    }
    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 32), get_bcc_emitter_16_56)
    }

}

function get_bcc_emitter_16_48(o) {
    if (u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_bcc_emitter_16_56(o) {
    if (u32(o + 12) || u8(o + 17) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bcc_model_link(o) {
    if (u32(o + 0) || f32(o + 20) !== 30 || u8(o + 24) || u8(o + 25) !== 3 || u8(o + 26) || u8(o + 27) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_bcc_model_link_4)
    ö(u32(o + 8), get_bcc_model_link_8)
    ö(u32(o + 12), get_bcc_model_link_12)
    ö(u32(o + 16), get_bcc_some_model_anim)
    ö(u32(o + 48), get_bcc_model_link_48)

}

function get_bcc_model_link_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_model_link_8(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_model_link_12(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bcc_model_anim_2_type_b, u32(o + 0), get_bcc_model_anim_2_type_b)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_bcc_model_link_12_8)
    }

}

function get_bcc_model_link_12_8(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_model', o, 0)

}

function get_bcc_model_link_48(o) {
    if (f32(o + 0) !== -0.5 || u32(o + 4) || f32(o + 8) !== -0.5 || u32(o + 12) || f32(o + 16) !== 0.5 || f32(o + 20) !== 1 || f32(o + 24) !== 0.5 || u32(o + 28) || f32(o + 32) !== 0.5 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_bcc_some_model_anim(o) {
    if (u32(o + 0) !== 2860548033 || u8(o + 4) !== 1 || u8(o + 5) !== 2 || u8(o + 6) !== 7 || u8(o + 7) !== 1 || u32(o + 8) || u32(o + 12) !== 12 || u32(o + 24) || f32(o + 28) !== 1 || u32(o + 44))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 32) + (i * 4), get_bcc_some_model_anim_32)
    }
    ö(u32(o + 36), get_bcc_some_model_anim_36)
    ö(u32(o + 40), get_bcc_some_model_anim_40)

}

function get_bcc_some_model_anim_32(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)*/

    ö(u32(o + 0), get_bcc_some_model_anim_32_0)
}

function get_bcc_some_model_anim_32_0(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_some_model_anim_36(o) {
    if (u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_some_model_anim_36)

}

function get_bcc_some_model_anim_40(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_sound_controls(o) {
    if (u32(o + 4) || u8(o + 8) !== 1 || u8(o + 11) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 16), get_bcc_sound_controls_16)
    }

}

function get_bcc_sound_controls_16(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, f32, 12], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bcc_sound_controls_16_4)
    }

}

function get_bcc_sound_controls_16_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bcc_sound_section, u32(o + 0), get_bcc_sound_section)

}

function get_bcc_interface(o) {
    if (u8(o + 4) || u32(o + 8) !== 1 || u8(o + 16) !== 1 || u8(o + 18) !== 1 || u8(o + 19) !== 1 || u32(o + 28) || f32(o + 36) !== 1 || u32(o + 48) !== 1 || u8(o + 56) || u8(o + 57) !== 1 || u8(o + 58) || u8(o + 59) || u32(o + 60) || u32(o + 64) || f32(o + 68) !== 500 || u32(o + 72) !== 100)
        ü(1, [u32, 0, u8, 4, u8, 5, u16, 6, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    //interface
    ö(u32(o + 0), get_bcc_interface_0)
    ä(bcc_sound_controls, u32(o + 20), get_bcc_sound_controls)
    ä(bcc_sound_controls, u32(o + 24), get_bcc_sound_controls)
    ä(bcc_sound_controls, u32(o + 32), get_bcc_sound_controls)

    ö(u32(o + 52), get_bcc_interface_52)
    ö(u32(o + 76), get_bcc_interface_76)
    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 28), get_bcc_interface_84)
    }
    for (let i = 0; i < u32(o + 88); i++) {
        ö(u32(o + 92) + (i * 100), get_bcc_interface_92)
    }

}

function get_bcc_interface_0(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_52(o) {
    if (u8(o + 4) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}
function get_bcc_interface_76(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 36), get_bcc_interface_76_4)
    }

}

function get_bcc_interface_76_4(o) {
    if (u8(o + 34) || u8(o + 35))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35], o)

    ö(u32(o + 0), get_bcc_interface_76_4_0)
    switch (u8(o + 4)) {
    case 1:
        ö(u32(o + 12), get_bcc_interface_76_4_12t1)
        break
    case 5:
        ö(u32(o + 12), get_bcc_interface_76_4_12t5)
        break
    case 7:
        ö(u32(o + 12), get_bcc_interface_76_4_12t7)
        break
    case 8:
        ö(u32(o + 12), get_bcc_interface_76_4_12t8)
        break
    case 9:
        ö(u32(o + 12), get_bcc_interface_76_4_12t9)
        break
    case 10:
        ö(u32(o + 12), get_bcc_interface_76_4_12t10)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 4, o, 12)
        }
    }

}

function get_bcc_interface_76_4_0(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_76_4_12t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_interface_76_4_12t1_4)

}

function get_bcc_interface_76_4_12t1_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u8(o + 14) || u8(o + 15) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_interface_76_4_12t5(o) {
    if (u32(o + 0) || u32(o + 4) !== 4 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_interface_76_4_12t7(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_interface_76_4_12t8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bcc_interface_76_4_12t8_4)
    }

}

function get_bcc_interface_76_4_12t8_4(o) {
    if (u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8], o)

    ö(u32(o + 8), get_bcc_interface_76_4_12t8_4_8)

}

function get_bcc_interface_76_4_12t8_4_8(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_interface_76_4_12t9(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) !== 1 || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_interface_76_4_12t9_4)
    ö(u32(o + 8), get_bcc_interface_76_4_12t9_8)

}

function get_bcc_interface_76_4_12t9_4(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_76_4_12t9_8(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_76_4_12t10(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bcc_flag, u32(o + 0), get_bcc_flag)

}

function get_bcc_interface_84(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)*/

    ö(u32(o + 4), get_bcc_interface_84_4)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_bcc_interface_84_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 36), get_bcc_interface_84_24)
    }

}

function get_bcc_interface_84_4(o) {
    if (u8(o + 3) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bcc_interface_84_4_8)
    ö(u32(o + 12), get_bcc_interface_84_4_12)
    ö(u32(o + 20), get_bcc_interface_84_4_20)

}

function get_bcc_interface_84_4_8(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_84_4_12(o) {
    if (u32(o + 0) !== 2005 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_interface_84_4_12_4)

}

function get_bcc_interface_84_4_12_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_interface_84_4_20(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_interface_84_16(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    ö(u32(o + 4), get_bcc_interface_84_16_4)

}

function get_bcc_interface_84_16_4(o) {
    if (u8(o + 3) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bcc_interface_84_16_4_8)
    switch (u8(o + 0)) {
    case 4:
        ä(bcc_flag, u32(o + 12), get_bcc_flag)
        break
    case 7:
        ö(u32(o + 12), get_bcc_interface_84_16_4_12t7)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }

    ö(u32(o + 20), get_bcc_interface_84_16_4_20)

}

function get_bcc_interface_84_16_4_8(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_interface_84_16_4_12t7(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_interface_84_16_4_12t7_4)

}

function get_bcc_interface_84_16_4_12t7_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_interface_84_16_4_20(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_interface_84_24(o) {
    if (u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 28) || u32(o + 32))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    switch (u8(o + 0)) {
    case 1:
    case 31:
        ä(bcc_interface, u32(o + 4), get_bcc_interface)
        break
    case 11:
        ö(u32(o + 4), get_bcc_interface_84_24_4t11)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }
    switch (u8(o + 0)) {
    case 6:
        ö(u32(o + 12), get_bcc_interface_84_24_12t6)
        break
    case 15:
        ö(u32(o + 12), get_bcc_interface_84_24_12t15)
        break
    case 41:
        ö(u32(o + 12), get_bcc_interface_84_24_12t41)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }

    ä(bcc_sound_controls, u32(o + 24), get_bcc_sound_controls)

}

function get_bcc_interface_84_24_4t11(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_bcc_interface_84_24_4t11_4)
    }

}

function get_bcc_interface_84_24_4t11_4(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u16, 8, u8, 10, u8, 11, u32, 12, u32, 16], o)

    ö(u32(o + 0), get_bcc_interface_84_24_4t11_4_0)
    ö(u32(o + 4), get_bcc_interface_84_24_4t11_4_4)

    switch (u16(o + 8)) {
    case 1:
        ö(u32(o + 12), get_bcc_interface_84_24_4t11_4_12t1)
        break
    case 2:
        ö(u32(o + 12), get_bcc_interface_84_24_4t11_4_12t2)
        break
    case 4:
        ä(bcc_sound_controls, u32(o + 12), get_bcc_sound_controls)
        break
    case 100:
    case 101:
        ä(bcc_interface, u32(o + 12), get_bcc_interface)
        break
    case 102:
        ö(u32(o + 12), get_bcc_interface_84_24_4t11_4_12t102)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 8, o, 12)
        }
    }

}

function get_bcc_interface_84_24_4t11_4_0(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_84_24_4t11_4_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_interface_84_24_4t11_4_12t1(o) {
    if (u8(o + 3) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bcc_interface_84_24_4t11_4_12t1_8)
    ä(bcc_flag, u32(o + 12), get_bcc_flag)

    ö(u32(o + 20), get_bcc_interface_84_24_4t11_4_12t1_20)

}

function get_bcc_interface_84_24_4t11_4_12t1_8(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_interface_84_24_4t11_4_12t1_20(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_84_24_4t11_4_12t2(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_interface_84_24_4t11_4_12t2_0)
    ö(u32(o + 4), get_bcc_interface_84_24_4t11_4_12t2_4)

}

function get_bcc_interface_84_24_4t11_4_12t2_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_interface_84_24_4t11_4_12t2_0_4)

}

function get_bcc_interface_84_24_4t11_4_12t2_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u8(o + 13) || u8(o + 14) || u8(o + 15) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_interface_84_24_4t11_4_12t2_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u8(o + 13) || u8(o + 14) || u8(o + 15) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_interface_84_24_4t11_4_12t102(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bcc_interface_84_24_4t11_4_12t102_0)
    ö(u32(o + 8), get_bcc_interface_84_24_4t11_4_12t102_8)

}

function get_bcc_interface_84_24_4t11_4_12t102_0(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_84_24_4t11_4_12t102_8(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_interface_84_24_4t11_4_12t102_8_4)

}

function get_bcc_interface_84_24_4t11_4_12t102_8_4(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_84_24_12t6(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_interface_84_24_12t6_0)
    ö(u32(o + 4), get_bcc_interface_84_24_12t6_4)

}

function get_bcc_interface_84_24_12t6_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bcc_interface_84_24_12t6_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u8(o + 12) !== 1 || u8(o + 13) !== 1 || u8(o + 14) !== 1 || u8(o + 15) || u32(o + 16) !== 3 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_interface_84_24_12t15(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_interface_84_24_12t15_0)
    ö(u32(o + 4), get_bcc_interface_84_24_12t15_4)

}

function get_bcc_interface_84_24_12t15_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bcc_interface_84_24_12t15_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_interface_84_24_12t41(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_interface_84_24_12t41_4)

}

function get_bcc_interface_84_24_12t41_4(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_interface_92(o) {
    if (u32(o + 60) || u8(o + 72) !== 255 || u8(o + 73) !== 255 || u8(o + 74) !== 255 || u8(o + 75) !== 255 || u8(o + 76) !== 255 || u8(o + 77) !== 255 || u8(o + 78) !== 255 || u8(o + 79) !== 255 || u8(o + 80) !== 255 || u8(o + 81) !== 255 || u8(o + 82) !== 255 || u8(o + 83) !== 255 || u8(o + 84) !== 255 || u8(o + 85) !== 255 || u8(o + 86) !== 255 || u8(o + 87) !== 255 || u8(o + 88) !== 255 || u8(o + 89) !== 255 || u8(o + 90) !== 255 || u8(o + 91) !== 255 || u8(o + 92) !== 255 || u8(o + 93) !== 255 || u8(o + 94) !== 255 || u8(o + 95) !== 255 || u32(o + 96))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79, u8, 80, u8, 81, u8, 82, u8, 83, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u32, 96], o)

    ö(u32(o + 0), get_bcc_interface_92_0)
    ö(u32(o + 12), get_bcc_interface_92_12)
    ö(u32(o + 16), get_bcc_interface_92_16)
    ö(u32(o + 28), get_bcc_interface_92_28)
    ö(u32(o + 32), get_bcc_interface_92_32)
    switch (u8(o + 26)) {
    case 0:
        ö(u32(o + 36), get_bcc_interface_92_36t0)
        break
    case 1:
        ö(u32(o + 36), get_bcc_interface_92_36t1)
        break
    case 3:
        ö(u32(o + 36), get_bcc_interface_92_36t3)
        break
    case 6:
        ö(u32(o + 36), get_bcc_interface_92_36t6)
        break
    case 10:
        ö(u32(o + 36), get_bcc_interface_92_36t10)
        break
    case 12:
        ö(u32(o + 36), get_bcc_interface_92_36t12)
        break
    case 13:
        ö(u32(o + 36), get_bcc_interface_92_36t13)
        break
    case 14:
        ö(u32(o + 36), get_bcc_interface_92_36t14)
        break
    case 15:
        ö(u32(o + 36), get_bcc_interface_92_36t15)
        break
    default:
        if (u32(o + 36)) {
            sü(u8, 26, o, 36)
        }
    }
    ö(u32(o + 40), get_bcc_interface_92_40)
    ö(u32(o + 52), get_bcc_interface_92_52)
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 12), get_bcc_interface_92_68)
    }

}
function get_bcc_interface_92_0(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_92_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_bcc_interface_92_16(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_92_28(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_interface_92_32(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_bcc_interface_92_32_8)
    }

}

function get_bcc_interface_92_32_8(o) {
    if (u32(o + 0) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 4), get_bcc_interface_92_32_8_4)

}

function get_bcc_interface_92_32_8_4(o) {
    if (u8(o + 3) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bcc_interface_92_32_8_4_8)
    ö(u32(o + 12), get_bcc_interface_92_32_8_4_12)
    ö(u32(o + 20), get_bcc_interface_92_32_8_4_20)

}

function get_bcc_interface_92_32_8_4_8(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_92_32_8_4_12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_interface_92_32_8_4_12_4)

}

function get_bcc_interface_92_32_8_4_12_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u8(o + 13) || u8(o + 14) || u8(o + 15) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_interface_92_32_8_4_20(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_interface_92_36t0(o) {
    if (u8(o + 2) || u8(o + 14) || u8(o + 15))
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

    ö(u32(o + 8), get_bcc_interface_92_36t0_8)

}

function get_bcc_interface_92_36t0_8(o) {
    if (u8(o + 10) || u32(o + 12) || u8(o + 17) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bcc_interface_92_36t0_8_4)
    }

}

function get_bcc_interface_92_36t0_8_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}

function get_bcc_interface_92_36t1(o) {
    if (u8(o + 3) !== 5)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u16, 22, u16, 24, u8, 26, u8, 27, f32, 28], o)

    ä(bcc_text, u32(o + 4), get_bcc_text)
    switch (u8(o + 0)) {
    case 1:
        ö(u32(o + 8), get_bcc_interface_92_36t1_8t1)
        break
    case 3:
        ö(u32(o + 8), get_bcc_interface_92_36t1_8t3)
        break
    default:
        if (u32(o + 8)) {
            sü(u8, 0, o, 8)
        }
    }

    switch (u8(o + 2)) {
    case 0:
        ä(bcc_font, u32(o + 12), get_bcc_font)
        break
    case 1:
        ä(bcc_multi_font, u32(o + 12), get_bcc_multi_font)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 2, o, 12)
        }
    }

    ö(u32(o + 16), get_bcc_interface_92_36t1_16)

}
function get_bcc_interface_92_36t1_8t1(o) {
    if (u8(o + 8) !== 1 || u8(o + 9) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u16, 10, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bcc_interface_92_36t1_8t1_4)
    }
}

function get_bcc_interface_92_36t1_8t1_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bcc_text, u32(o + 0), get_bcc_text)
}

function get_bcc_interface_92_36t1_8t3(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_interface_92_36t1_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_interface_92_36t3(o) {
    if (u32(o + 0) !== 170 || u8(o + 8) !== 1 || u8(o + 9) !== 16 || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_bcc_interface_92_36t3_4)
    }

}

function get_bcc_interface_92_36t3_4(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4], o)

    ä(bcc_model_link, u32(o + 0), get_bcc_model_link)

}

function get_bcc_interface_92_36t6(o) {
    if (u8(o + 5) !== 1 || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ä(bcc_interface, u32(o), get_bcc_interface)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 16), get_bcc_interface_92_36t6_12)
    }

}

function get_bcc_interface_92_36t6_12(o) {
    if (u8(o + 1) || u8(o + 2))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_interface_92_36t10(o) {
    if (u32(o + 0) !== 300 || u32(o + 4) !== 220 || u32(o + 8) !== 1 || u32(o + 12) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_interface_92_36t12(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_interface_92_36t13(o) {
    if (u8(o + 0) || u8(o + 1) !== 5 || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_interface_92_36t13_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_bcc_interface_92_36t13_12)
    }

}

function get_bcc_interface_92_36t13_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_bcc_interface_92_36t13_12(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}

function get_bcc_interface_92_36t14(o) {
    if (u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_interface_92_36t14_4)

}

function get_bcc_interface_92_36t14_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) !== 3 || u8(o + 3) || u32(o + 4) || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
}

function get_bcc_interface_92_36t15(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bcc_emitter, u32(o + 0), get_bcc_emitter)

}

function get_bcc_interface_92_40(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u8(o + 13) || u8(o + 15) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ö(u32(o + 48), get_bcc_interface_92_40_48)
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 28), get_bcc_interface_92_40_72)
    }

}
function get_bcc_interface_92_40_48(o) {
    if (u8(o + 4) || u8(o + 5) || u8(o + 7) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_interface_92_40_72(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    ö(u32(o + 16), get_bcc_interface_92_40_72_16)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 36), get_bcc_interface_92_40_72_24)
    }

}

function get_bcc_interface_92_40_72_16(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_interface_92_40_72_16_4)

}

function get_bcc_interface_92_40_72_16_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) !== 2 || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_interface_92_40_72_24(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 28) || u32(o + 32))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    switch (u8(o + 0)) {
    case 1:
        ä(bcc_interface, u32(o + 4), get_bcc_interface)
        break
    case 11:
        ö(u32(o + 4), get_bcc_interface_92_40_72_24_4t11)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }
    ä(bcc_sound_controls, u32(o + 24), get_bcc_sound_controls)

}
function get_bcc_interface_92_40_72_24_4t11(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_bcc_interface_92_40_72_24_4t11_4)
    }

}

function get_bcc_interface_92_40_72_24_4t11_4(o) {
    if (u32(o + 4) || u8(o + 10) || u8(o + 11) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, u16, 8, u8, 10, u8, 11, u32, 12, u32, 16], o)

    ö(u32(o + 0), get_bcc_interface_92_40_72_24_4t11_4_0)
    switch (u16(o + 8)) {
    case 1:
        ö(u32(o + 12), get_bcc_interface_92_40_72_24_4t11_4_12t1)
        break
    case 101:
        ä(bcc_interface, u32(o + 12), get_bcc_interface)
        break
    default:
        if (u32(o + 12)) {
            sü(u16, 8, o, 12)
        }
    }

}

function get_bcc_interface_92_40_72_24_4t11_4_0(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_interface_92_40_72_24_4t11_4_12t1(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bcc_interface_92_40_72_24_4t11_4_12t1_8)

}

function get_bcc_interface_92_40_72_24_4t11_4_12t1_8(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_interface_92_52(o) {
    if (u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_bcc_interface_92_52_4)
    ö(u32(o + 12), get_bcc_interface_92_52_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_bcc_interface_92_52_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_bcc_interface_92_52_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 40), get_bcc_interface_92_52_36)
    }

}

function get_bcc_interface_92_52_4(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bcc_interface_92_52_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bcc_interface_92_52_20(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bcc_interface_92_52_28(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bcc_interface_92_52_36(o) {
    if (u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36], o)
}

function get_bcc_interface_92_68(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8], o)

    ö(u32(o + 4), get_bcc_interface_92_68_4)

}

function get_bcc_interface_92_68_4(o) {
    if (u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_bcc_interface_92_68_4_4)
    }

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_bcc_interface_92_68_4_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_bcc_interface_92_68_4_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 32), get_bcc_interface_92_68_4_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_bcc_interface_92_68_4_36)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 40), get_bcc_interface_92_68_4_44)
    }

}

function get_bcc_interface_92_68_4_4(o) {
    if (u32(o + 0) || u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 20), get_bcc_interface_92_68_4_4_16)
    }

}

function get_bcc_interface_92_68_4_4_16(o) {
    if (u32(o + 4) || u8(o + 10) || u8(o + 11) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, u16, 8, u8, 10, u8, 11, u32, 12, u32, 16], o)

    ö(u32(o + 0), get_bcc_interface_92_68_4_4_16_0)
    switch (u16(o + 8)) {
    case 1:
        ö(u32(o + 12), get_bcc_interface_92_68_4_4_16_12t1)
        break
    case 4:
        ä(bcc_sound_controls, u32(o + 12), get_bcc_sound_controls)
        break
    default:
        if (u32(o + 12)) {
            sü(u16, 8, o, 12)
        }
    }

    // 12 = type maybe
}
function get_bcc_interface_92_68_4_4_16_12t1(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bcc_interface_92_68_4_4_16_0(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_interface_92_68_4_12(o) {
    if (u32(o + 8) || u32(o + 12) || u8(o + 17) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bcc_interface_92_68_4_20(o) {
    if (u32(o + 8) || u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bcc_interface_92_68_4_28(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bcc_interface_92_68_4_44(o) {
    if (f32(o + 0) || f32(o + 4) || f32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36], o)
}

function get_bcc_interface_92_68_4_36(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}

function get_bcc_link_36(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_link_44(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_link_56(o) {
    if (u8(o + 0) !== 4 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 12), get_bcc_link_56_12)

}

function get_bcc_link_56_12(o) {
    if (u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_link_56_12_0)

}

function get_bcc_link_56_12_0(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_link_64(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_bcc_link_64_0)

}

function get_bcc_link_64_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_bcc_link_64_0_4)
    }

}

function get_bcc_link_64_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 24) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bcc_link_64_0_4_8)
    ö(u32(o + 12), get_bcc_link_64_0_4_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_bcc_link_64_0_4_20)
    }
    ö(u32(o + 28), get_bcc_link_64_0_4_28)

}

function get_bcc_link_64_0_4_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_link_64_0_4_8_0)

}

function get_bcc_link_64_0_4_8_0(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_link_64_0_4_12(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_link_64_0_4_20(o) {
    if (u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u16, 8, u8, 10, u8, 11, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_bcc_link_64_0_4_20_4)
    }

}

function get_bcc_link_64_0_4_20_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bcc_link_64_0_4_20_4_4)

}

function get_bcc_link_64_0_4_20_4_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bcc_link_64_0_4_20_4_4_0)

}

function get_bcc_link_64_0_4_20_4_4_0(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_link_64_0_4_28(o) {
    if (u32(o + 0) || u32(o + 4) || u16(o + 8) !== 99 || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u16, 8, u8, 10, u8, 11, u32, 12], o)
}

function get_bcc_link_68(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) !== 30000 || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_bcc_link_68_8)

}

function get_bcc_link_68_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_link_72(o) {// console.log(get_string(o, 0, false))
}

function get_bcc_model(o) {
    if (u32(o + 12) || u32(o + 16) !== 1 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u8, 60, u8, 61, u8, 62, u8, 63, f32, 64, f32, 68, f32, 72, u8, 76, u8, 77, u8, 78, u8, 79], o)

    ö(u32(o + 4), get_bcc_model_4)
    ö(u32(o + 20), get_bcc_model_20)
    ö(u32(o + 24), get_bcc_model_24)

}

function get_bcc_model_4(o) {// console.log(get_string(o, 0, false))
}
function get_bcc_model_20(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bcc_model_20_4)
    }

}

function get_bcc_model_20_4(o) {
    /*ü(1, [u32, 0], o)*/

    switch (g.console) {
    case "wii":
        ö(u32(o + 0), get_bcc_model_20_4_0twii)
        break
    case "pc":
        ö(u32(o + 0), get_bcc_model_20_4_0tpc)
        break
    }

}

function get_bcc_model_20_4_0tpc(o) {
    if (u32(o + 4) || u8(o + 12) || u8(o + 15) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u8(o + 72) || u8(o + 74) !== 255 || u8(o + 75) !== 128 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || f32(o + 156) !== 1 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 208) || u32(o + 212) || u32(o + 216) !== 1 || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u32(o + 272) || u32(o + 276) || u32(o + 280) || u32(o + 284) || u32(o + 288) || u32(o + 292) || u32(o + 296) || u32(o + 300))
        ü(1, [u32, 0, u32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300], o)
    ß('p_texture', o, 48)

    ö(u32(o + 188), get_bcc_model_20_4_0tpc_188)
    ö(u32(o + 192), get_bcc_model_20_4_0tpc_192)
    ö(u32(o + 196), get_bcc_model_20_4_0tpc_196)
    ö(u32(o + 200), get_bcc_model_20_4_0tpc_200)
    ö(u32(o + 204), get_bcc_model_20_4_0tpc_204)
    ö(u32(o + 220), get_bcc_model_20_4_0tpc_220)
    for (let i = 0; i < u32(o + 224); i++) {
        ö(u32(o + 228) + (i * 64), get_bcc_model_20_4_0tpc_228)
    }

}

function get_bcc_model_20_4_0tpc_188(o) {//float
// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bcc_model_20_4_0tpc_192(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//colors byte?4
}
function get_bcc_model_20_4_0tpc_196(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//float
}
function get_bcc_model_20_4_0tpc_200(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//float
}
function get_bcc_model_20_4_0tpc_204(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//8 bytes ?
}
function get_bcc_model_20_4_0tpc_220(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 12), get_bcc_model_20_4_0tpc_220_12)

}

function get_bcc_model_20_4_0tpc_220_12(o) {
    if (u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_model_20_4_0tpc_228(o) {
    if (f32(o + 0) !== 1 || f32(o + 12) || f32(o + 60) !== 1)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60], o)
}

function get_bcc_model_20_4_0twii(o) {
    // ü(3, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u8, 220, u8, 221, u8, 222, u8, 223], o)

    switch (u32(o)) {
    case 0:
        get_bcc_model_20_4_0twiit0(o)
        break
    case 1:
        get_bcc_model_20_4_0twiit1(o)
        break
    case 2:
        get_bcc_model_20_4_0twiit2(o)
        break
    default:
        console.log(o)
    }

}
function get_bcc_model_20_4_0twiit0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) !== 32831 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 184) || u32(o + 204) || u32(o + 212) !== 1 || u8(o + 222) || u8(o + 223))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u8, 220, u8, 221, u8, 222, u8, 223], o)
    ß('p_texture', o, 48)

    ö(u32(o + 180), get_bcc_model_20_4_0twiit0_180)
    ö(u32(o + 188), get_bcc_model_20_4_0twiit0_188)
    ö(u32(o + 192), get_bcc_model_20_4_0twiit0_192)
    ö(u32(o + 196), get_bcc_model_20_4_0twiit0_196)
    ö(u32(o + 200), get_bcc_model_20_4_0twiit0_200)
    // for (let i = 0; i < u32(o + 220); i++) {
    // ö(u32(o + 208) + (i * 64), get_bcc_model_20_4_0twiit0_208)
    // }
    ö(u32(o + 208), get_bcc_model_20_4_0twiit0_208)

}

function get_bcc_model_20_4_0twiit0_180(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//flost
}
function get_bcc_model_20_4_0twiit0_188(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//color?
}
function get_bcc_model_20_4_0twiit0_192(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// ????
}
function get_bcc_model_20_4_0twiit0_196(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// 2 bytes per entry?
}
function get_bcc_model_20_4_0twiit0_200(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_bcc_model_20_4_0twiit0_200_8)

}

function get_bcc_model_20_4_0twiit0_200_8(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bcc_model_20_4_0twiit0_208(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) || f32(o + 8) || f32(o + 12) || f32(o + 16) || f32(o + 20) !== 1 || f32(o + 24) || f32(o + 28) || f32(o + 32) || f32(o + 36) || f32(o + 40) !== 1 || f32(o + 44) || f32(o + 48) || f32(o + 52) || f32(o + 56) || f32(o + 60) !== 1)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60], o)
}

function get_bcc_model_20_4_0twiit1(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) !== 17 || u32(o + 36) !== 17 || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u32(o + 72) !== 65408 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) !== 32831 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) !== 524315 || u32(o + 188) || u32(o + 204) || u32(o + 212) !== 1 || u8(o + 220) !== 12 || u8(o + 222) || u8(o + 223))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u8, 220, u8, 221, u8, 222, u8, 223], o)
    ß('p_texture', o, 48)
    ö(u32(o + 180), get_bcc_model_20_4_0twiit1_180)
    ö(u32(o + 184), get_bcc_model_20_4_0twiit1_184)
    ö(u32(o + 192), get_bcc_model_20_4_0twiit1_192)
    ö(u32(o + 196), get_bcc_model_20_4_0twiit1_196)
    ö(u32(o + 200), get_bcc_model_20_4_0twiit1_200)
    ö(u32(o + 208), get_bcc_model_20_4_0twiit1_208)
}

function get_bcc_model_20_4_0twiit1_180(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//6752 bytes seen
//floats
}
function get_bcc_model_20_4_0twiit1_184(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//4496 bytes seen
//8 byters per entry?
}
function get_bcc_model_20_4_0twiit1_192(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//7024 bytes 
// floats?
}
function get_bcc_model_20_4_0twiit1_196(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//u16s
//1168 bytes
}
function get_bcc_model_20_4_0twiit1_200(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    // for (let i = 0; i < u32(o + 4); i++) {// ö(u32(o + 8) + (i*1), get_bcc_model_20_4_0twiit1_200_8)
    // }
    ö(u32(o + 8), get_bcc_model_20_4_0twiit1_200_8)

}

function get_bcc_model_20_4_0twiit1_200_8(o) {/*ü(1, [u8, 0], o)*/
}

function get_bcc_model_20_4_0twiit1_208(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//768
//64 bytes per entry? maybe [12]?
}

function get_bcc_model_20_4_0twiit2(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u32(o + 72) !== 65408 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) !== 32831 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 208) || u32(o + 212) || u32(o + 216) || u8(o + 220) || u8(o + 221) || u8(o + 222) || u8(o + 223))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u8, 220, u8, 221, u8, 222, u8, 223], o)

    for (let i = 0; i < u32(o + 176); i++) {
        ö(u32(o + 180) + (i * 12), get_bcc_model_20_4_0twiit2_180)
    }
    for (let i = 0; i < u32(o + 184); i++) {
        ö(u32(o + 188) + (i * 12), get_bcc_model_20_4_0twiit2_188)
    }
    for (let i = 0; i < u32(o + 192); i++) {
        ö(u32(o + 196) + (i * 8), get_bcc_model_20_4_0twiit2_196)
    }
    for (let i = 0; i < u32(o + 200); i++) {
        ö(u32(o + 204) + (i * 8), get_bcc_model_20_4_0twiit2_204)
    }

}

function get_bcc_model_20_4_0twiit2_180(o) {/*ü(1, [f32, 0, f32, 4, f32, 8], o)*/
}
function get_bcc_model_20_4_0twiit2_188(o) {/*ü(1, [f32, 0, f32, 4, f32, 8], o)*/
}
function get_bcc_model_20_4_0twiit2_196(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 4) || u8(o + 6))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7], o)
}
function get_bcc_model_20_4_0twiit2_204(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 4) || u8(o + 6))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7], o)
}

function get_bcc_model_24(o) {
    if (f32(o + 0) !== 1000000000 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}
