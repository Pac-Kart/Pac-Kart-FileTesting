function get_x_bmg() {

    globalThis.offset_mid = undefined

    for (let i = 0; i < u32(12); i++) {
        get_bmg_directory(16 + (i * 24), 16 + (u32(12) * 24))
    }
}
function get_bmg_directory(o, end_offset) {
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

    if (u32(o + 0) !== 312 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o);

    globalThis.bmg_sound_controls = []
    globalThis.bmg_sound_section = []
    globalThis.bmg_model = []
    globalThis.bmg_text = []
    globalThis.bmg_interface = []
    globalThis.bmg_interface_texture_related = []
    globalThis.bmg_font = []
    globalThis.bmg_multi_font = []
    globalThis.bmg_model_anim_2_type_c = []
    globalThis.bmg_world_4 = []
    globalThis.bmg_world_12 = []
    globalThis.bmg_world_20 = []
    globalThis.bmg_world_68 = []
    globalThis.bmg_world_84 = []
    globalThis.bmg_world_92 = []
    globalThis.bmg_world_116 = []
    globalThis.bmg_world_60 = []
    globalThis.bmg_world_44 = []
    globalThis.bmg_world_108 = []
    globalThis.bmg_world_224 = []
    globalThis.bmg_world_100 = []
    globalThis.bmg_idk = []
    globalThis.bmg_world_thing = []
    globalThis.bmg_world_link = []
    globalThis.bmg_activator = []
    globalThis.bmg_world_120_0 = []
    globalThis.bmg_some_random_section = []
    globalThis.bmg_object = []
    globalThis.bmg_strange = []
    globalThis.bmg_world_36 = []
    globalThis.bmg_var = []
    globalThis.bmg_something = []
    globalThis.bmg_another_world_section = []
    globalThis.bmg_unknown = []
    globalThis.bmg_flag = []
    globalThis.bmg_sound_section = []
    globalThis.bmg_model_link = []
    globalThis.bmg_model_sub_link = []
    globalThis.bmg_a_single_section = []
    globalThis.bmg_interface_small_sec = []
    globalThis.bmg_some_model_anim = []
    globalThis.bmg_unknown_thing = []
    globalThis.bmg_unknown_idk_sec = []
    globalThis.bmg_world_asdf = []
    globalThis.bmg_mysterious_type = []
    globalThis.bmg_var_recursive_link = []
    globalThis.bmg_var_link_type = []
    globalThis.bmg_model_anim_2_type_b = []
    globalThis.test_temp = []

    director_offset = o
    g.type = u32(o + 4)

    switch (g.type) {
    case 1:
    case 3:
    case 4:
        get_bmg_datapack(end_offset + u32(o + 20), u32(o + 16))
        break
    }

    print_logarray(log_array)

}

function get_bmg_datapack(o, e) {
    // if (u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) || u32(o + 184))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184], o)

    let end_datapack = o + e
    let offset_patch_list = end_datapack - (u32(o + 12) * 4 + (u32(o + 56) * 8))
    offset_mid = offset_patch_list - u32(o)
    let index_patch_list_amount = u32(o + 16) + u32(o + 52) + u32(o + 28)
    index_patch_list_amount *= 8
    if (g.file_name !== 'mcp.xdx9') {
        index_patch_list_amount = divisible(index_patch_list_amount, 32)
    }
    let index_patch_list = offset_mid - index_patch_list_amount
    if (index_patch_list === 21680096 && g.file_name === 'mcp.xdx9') {
        index_patch_list = 21679952
    }
    bmg_get_index_patch_list(o, index_patch_list)
    bmg_get_offset_patch_list(o, offset_mid + u32(o))

    globalThis.old_log_array = structuredClone(log_array)

    if (false) {

        for (let i = 0; i < u32(o + 100); i++) {
            ö(u32(o + 132) + (i * 8), get_bmg_datapack_132)
        }

        for (let i = 0; i < u32(o + 48); i++) {
            ö(u32(o + 60) + (i * 12), get_bmg_texture_anim)
        }

        switch (g.type) {
        case 1:
        case 3:
            get_bmg_basic(offset_mid)
            break
        case 4:
            get_bmg_world(offset_mid)
            break
        default:
            console.log("?")
        }

        if (u32(o + 24)) {// get_test_temp(offset_mid + u32(o + 24))
        }
    }

    if (u32(o + 4)) {
        // wii = padding
        let amt_offset = g.console === "pc" ? 188 : 192

        let after_datapack = amt_offset + o
        let end_after_datapack;

        if (g.console === "pc") {
            end_after_datapack = after_datapack + (u32(o + 8) * 4)
        } else {
            end_after_datapack = after_datapack + divisible((u32(o + 8) * 4), 32)
        }
        globalThis.pk_audio_end_offset = end_after_datapack

        let array_audio_test = []

        for (let i = 0; i < u32(o + 32); i++) {
            get_bmg_basic_audio(after_datapack + (i * 8), end_after_datapack)
        }

        for (let i = 0; i < u32(o + 20); i++) {
        get_bmg_texture_offset_list(2726336 + i*4,2726336)
        }


        // ö(u32(o + 24), get_test_temp)
        // ä(test_temp, u32(o + 24), get_test_temp)
        // ä(test_temp, u32(o + 24), get_test_temp)
        // get_bmg_world_60 ?
        console.log(`
        pk_audio_end_offset = ${pk_audio_end_offset},
        end_after_datapack = ${end_after_datapack}
        mid: ${offset_mid}

        pk_audio_end_offset - index_patch_list = ${pk_audio_end_offset - index_patch_list}
        `)
    }

}

function get_test_temp(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188], o)
}

function get_bmg_basic_audio(o, e) {
    /*ü(1, [u32, 0, u32, 4], o)*/
    get_bmg_basic_audio_0(e + u32(o), e)
    get_bmg_basic_audio_4(e + u32(o + 4), e)
}
function get_bmg_basic_audio_0(o, e) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/
    let start = e + u32(o + 0)
    let end = start + u32(o + 4)
    if (g.console === "pc") {
        get_bmg_basic_audio_0_0tpc(start, end, e)
    } else {
        get_bmg_basic_audio_0_0twii(start, end, e)
    }

    if (pk_audio_end_offset < end) {
        pk_audio_end_offset = end
    }
}
function get_bmg_basic_audio_0_0twii(o, end, e) {
    // if (u32(o + 0) !== 1179861555)
        ü(1, [u32, 0], o)
    // FSB3 file
}
function get_bmg_basic_audio_0_0tpc(o, end, e) {
    // if (u32(o + 0) !== 1179011410)
        ü(1, [u32, 0], o)
    // RIFF file
}
function get_bmg_basic_audio_4(o, e) {
    // if (u8(o + 8) !== 16 || u8(o + 9) || u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16], o)
    get_bmg_basic_audio_4_0(e + u32(o + 0), e)
}
function get_bmg_basic_audio_4_0(o) {
    // console.log(get_string(o, 0, false))
    /*ü(1, [u32, 0], o)*/
    if (pk_audio_end_offset < o) {
        pk_audio_end_offset = o
    }

}

function get_bmg_texture_offset_list(o,section_offset) {
    // ü(1, [u32, 0], o)

    get_bmg_texture_offset_list_0(u32(o) + section_offset, section_offset)

}

function get_bmg_texture_offset_list_0(o,section_offset) {
        ü(1, [u8, 0,u8, 1,u8, 2,u8, 3, u8, 4,u8, 5,u8, 6,u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    if (u32(o + 8)) {
    get_bmg_texture_offset_list_0_8(u32(o + 8) + section_offset, section_offset)
    }
    if (u32(o + 12)) {
    get_bmg_texture_offset_list_0_12(u32(o + 12) + section_offset, section_offset)
    }
    if (u32(o + 16)) {
    get_bmg_texture_offset_list_0_16(u32(o + 16) + section_offset, section_offset)
    }
    if (u32(o + 20)) {
    get_bmg_texture_offset_list_0_20(u32(o + 20) + section_offset, section_offset)
    }
}

function get_bmg_texture_offset_list_0_8(o,section_offset) {
    ü(1, [u32, 0], o)
    //start texture data prob

}
function get_bmg_texture_offset_list_0_12(o,section_offset) {
    ü(1, [u32, 0], o)

}
function get_bmg_texture_offset_list_0_16(o,section_offset) {
    // ü(1, [u32, 0], o)
    // offset string

    // console.log(get_string(o, 0, false))

}
function get_bmg_texture_offset_list_0_20(o,section_offset) {
    ü(1, [u32, 0], o)

}
// some talbe at 2721568
// table end 2726308
// could be 108 ?

// another table starts 2726336
// ends 2727467

function get_bmg_audio_list(o, f, afteroffsetlist, end_datapack, datapackoffset) {
    if (u16(o + 16) !== 4096 || u16(o + 18) !== 32767 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(3, [u32, 0], o)

    if (f) {
        let end_audio = u32(o) + u32(o + 4) + afteroffsetlist
        let bmg_datapack_72 = 0
        let bmg_datapack_76 = 0
        if (u32(datapackoffset + 72)) {
            bmg_datapack_72 = u32(datapackoffset + 72) + afteroffsetlist
        }
        if (u32(datapackoffset + 76)) {
            bmg_datapack_76 = u32(datapackoffset + 76) + afteroffsetlist
        }
    }
}

function bmg_get_index_patch_list(o, patch_offset) {
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

function get_bmg_world(o) {
    if (u32(o + 0) || u32(o + 48) || u32(o + 52) || u32(o + 72) || u32(o + 76) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 156) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 180) || u32(o + 184) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 204) !== 1 || u32(o + 212) || u32(o + 216) || u32(o + 228) || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u32(o + 272) || u32(o + 276) || u32(o + 280) || u32(o + 284) || u32(o + 288) || u32(o + 292) || u32(o + 296) || u32(o + 300))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300], o)

    ä(bmg_world_4, u32(o + 4), get_bmg_world_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ä(bmg_world_12, u32(o + 12) + (i * 160), get_bmg_world_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ä(bmg_world_20, u32(o + 20) + (i * 128), get_bmg_world_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 120), get_bmg_world_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ä(bmg_world_36, u32(o + 36) + (i * 80), get_bmg_world_36)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ä(bmg_world_44, u32(o + 44) + (i * 160), get_bmg_world_44)
    }
    for (let i = 0; i < u32(o + 56); i++) {
        ä(bmg_world_60, u32(o + 60) + (i * 96), get_bmg_world_60)
    }

    for (let i = 0; i < u32(o + 64); i++) {
        ä(bmg_world_68, u32(o + 68) + (i * 128), get_bmg_world_68)
    }
    for (let i = 0; i < u32(o + 80); i++) {
        ä(bmg_world_84, u32(o + 84) + (i * 96), get_bmg_world_84)
    }
    for (let i = 0; i < u32(o + 88); i++) {
        ä(bmg_world_92, u32(o + 92) + (i * 112), get_bmg_world_92)
    }

    for (let i = 0; i < u32(o + 96); i++) {
        ä(bmg_world_100, u32(o + 100) + (i * 96), get_bmg_world_100)
    }

    for (let i = 0; i < u32(o + 104); i++) {
        ä(bmg_world_108, u32(o + 108) + (i * 96), get_bmg_world_108)
    }

    for (let i = 0; i < u32(o + 112); i++) {
        ä(bmg_world_116, u32(o + 116) + (i * 128), get_bmg_world_116)
    }

    ö(u32(o + 120), get_bmg_world_120)
    ö(u32(o + 172), get_bmg_world_settings)
    ö(u32(o + 176), get_bmg_world_176)
    ö(u32(o + 208), get_bmg_world_208)
    for (let i = 0; i < u32(o + 220); i++) {
        ä(bmg_world_224, u32(o + 224) + (i * 96), get_bmg_world_224)
    }

}

function get_bmg_world_12(o) {
    if (u16(o + 4) || u32(o + 8) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || u32(o + 64) || u32(o + 72) || u8(o + 80) !== 255 || u8(o + 81) !== 255 || u8(o + 82) !== 255 || u8(o + 83) !== 255 || u32(o + 84) || f32(o + 88) !== 500 || f32(o + 92) !== 1000 || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u8(o + 124) || u8(o + 125) || u8(o + 126) !== 255 || u8(o + 127) !== 255 || u32(o + 128) || u32(o + 132) || u32(o + 140) !== 1000 || u32(o + 144) || u32(o + 148) !== 1 || u32(o + 152) || u32(o + 156))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u32, 84, f32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u8, 124, u8, 125, u8, 126, u8, 127, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156], o)

    ä(bmg_world_link, u32(o + 76), get_bmg_world_link_type)

}

function get_bmg_world_20(o) {
    if (u16(o + 4) !== 1 || u32(o + 8) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || u32(o + 64) || u32(o + 72) || u8(o + 92) || u8(o + 94) || u8(o + 95) || f32(o + 96) !== 1000 || u32(o + 100) || u32(o + 104) || u8(o + 108) !== 255 || u8(o + 109) !== 255 || u8(o + 110) !== 255 || u8(o + 111) !== 255 || u8(o + 112) !== 255 || u8(o + 113) !== 255 || u8(o + 114) !== 255 || u8(o + 115) !== 255 || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, f32, 68, u32, 72, f32, 76, f32, 80, u32, 84, u32, 88, u8, 92, u8, 93, u8, 94, u8, 95, f32, 96, u32, 100, u32, 104, u8, 108, u8, 109, u8, 110, u8, 111, u8, 112, u8, 113, u8, 114, u8, 115, u32, 116, u32, 120, u32, 124], o)

    ä(bmg_idk, u32(o + 84), get_bmg_idk)

    ä(bmg_model_link, u32(o + 88), get_bmg_model_link)

}

function get_bmg_world_92(o) {
    if (u16(o + 4) !== 13 || u32(o + 8) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || f32(o + 84) !== 500 || u8(o + 88) || u8(o + 91) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76, u32, 80, f32, 84, u8, 88, u8, 89, u8, 90, u8, 91, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    ä(bmg_idk, u32(o + 80), get_bmg_idk)

}

function get_bmg_world_100(o) {
    if (u16(o + 4) !== 14 || u16(o + 6) || u32(o + 8) || u32(o + 12) !== 8 || u32(o + 16) || u32(o + 20) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || f32(o + 64) || u32(o + 72) || u32(o + 80) !== 6831392 || u32(o + 84) || f32(o + 88) !== 500 || u32(o + 92))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, f32, 76, u32, 80, u32, 84, f32, 88, u32, 92], o)

    ä(bmg_strange, u32(o + 80), get_bmg_strange)

}

function get_bmg_world_108(o) {
    if (u16(o + 4) !== 15 || u32(o + 8) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || f32(o + 76) !== 500 || u32(o + 80) || u8(o + 84) !== 255 || u8(o + 85) !== 255 || u8(o + 86) || u8(o + 87) || u8(o + 88) || u8(o + 89) !== 1 || u8(o + 90) || u32(o + 92))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, f32, 76, u32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u32, 92], o)

    ä(bmg_object, u32(o + 72), get_bmg_object)

}

function get_bmg_world_116(o) {
    if (u16(o + 4) !== 5 || u32(o + 8) || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 60) || u32(o + 76) || u32(o + 92) || f32(o + 108) !== 1 || u32(o + 112) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, f32, 64, f32, 68, f32, 72, u32, 76, f32, 80, f32, 84, f32, 88, u32, 92, f32, 96, f32, 100, f32, 104, f32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)
    ß('p_model', o, 116)
}

function get_bmg_world_28(o) {
    if (u16(o + 4) !== 2 || u32(o + 8) || u16(o + 12) !== 1 || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 20) !== 1 || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 76) || u32(o + 88) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 116))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u8, 92, u8, 93, u8, 94, u8, 95, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], o)

    for (let i = 0; i < u32(o + 60); i += 32) {
        ö(u32(o + 64) + i, get_bmg_world_28_64)
    }
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 4), get_bmg_world_28_72)
    }
    globalThis.get_bmg_world_28_80_count = u32(o + 48)
    ö(u32(o + 80), get_bmg_world_28_80)
    delete globalThis.get_bmg_world_28_80_count

    ö(u32(o + 84), get_bmg_world_28_84)
    for (let i = 0; i < u32(o + 112); i++) {
        ö(u32(o + 108) + (i * 4), get_bmg_world_28_108)
    }

}

function get_bmg_world_28_80(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < get_bmg_world_28_80_count; i++) {
        ö(u32(o + 0) + (i * 4), get_bmg_world_28_80_0)
    }

}

function get_bmg_world_28_80_0(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_world_116, u32(o + 0), get_bmg_world_116)

}

function get_bmg_world_28_84(o) {
    if (u32(o + 0) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_bmg_world_28_84_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 4), get_bmg_world_28_84_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 4), get_bmg_world_28_84_24)
    }

}

function get_bmg_world_28_84_8(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_world_92, u32(o + 0), get_bmg_world_92)

}

function get_bmg_world_28_84_16(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_world_100, u32(o + 0), get_bmg_world_100)

}

function get_bmg_world_28_84_24(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_world_108, u32(o + 0), get_bmg_world_108)

}
function get_bmg_world_28_72(o) {/*ü(1, [u32, 0], o)*/
}
function get_bmg_world_28_108(o) {/*ü(1, [u32, 0], o)*/
}

function get_bmg_world_28_64(o) {
    if (u8(o + 17) !== 254 || u8(o + 20) !== 254 || u8(o + 21) !== 254 || u8(o + 22) !== 254 || u8(o + 23) !== 254 || u8(o + 24) !== 254 || u8(o + 25) !== 254 || u8(o + 26) !== 254 || u8(o + 27) !== 254 || u8(o + 28) !== 254 || u8(o + 29) !== 254 || u8(o + 30) !== 254 || u8(o + 31) !== 254)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
}

function get_bmg_world_68(o) {
    if (u16(o + 4) !== 10 || u32(o + 8) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || f32(o + 76) !== 1 || f32(o + 84) !== 90000 || f32(o + 88) !== 40000 || u8(o + 94) || u32(o + 104) || u32(o + 116) || u32(o + 124))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76, u32, 80, f32, 84, f32, 88, u8, 92, u8, 93, u8, 94, u8, 95, u32, 96, u32, 100, u32, 104, u32, 108, f32, 112, u32, 116, f32, 120, u32, 124], o)

    ä(bmg_activator, u32(o + 80), get_bmg_activator)

}

function get_bmg_world_36(o) {
    if (u16(o + 4) !== 3 || u16(o + 6) || u32(o + 8) || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ä(bmg_sound_controls, u32(o + 64), get_bmg_sound_controls)

}

function get_bmg_world_44(o) {
    if (u16(o + 4) !== 4 || u32(o + 8) || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 60) || u32(o + 76) || u32(o + 92) || f32(o + 108) !== 1 || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 136) || u32(o + 148) || u32(o + 152) || u32(o + 156))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, u32, 52, f32, 56, u32, 60, f32, 64, f32, 68, f32, 72, u32, 76, f32, 80, f32, 84, f32, 88, u32, 92, f32, 96, f32, 100, f32, 104, f32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, f32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156], o)

    ä(bmg_world_44, u32(o + 144), get_bmg_world_44)

}

function get_bmg_world_84(o) {
    if (u16(o + 4) !== 11 || u16(o + 6) || u32(o + 8) || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || u32(o + 64) || u32(o + 72) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ä(bmg_world_12, u32(o + 80), get_bmg_world_12)

}
function get_bmg_world_60(o) {
    if (u16(o + 4) !== 8 || u32(o + 8) || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || f32(o + 76) !== 1)
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, u32, 88, u32, 92], o)

    // 44 probably not amount
    ö(u32(o + 88), get_bmg_world_60_88)
    ö(u32(o + 92), get_bmg_world_60_92)

    // Struct Size: 1824 for C12.xwi
}
function get_bmg_world_60_92(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_world_60_88(o) {
    if (u8(o + 20) !== 254 || u8(o + 21) !== 254 || u8(o + 22) !== 254 || u8(o + 23) !== 254 || u8(o + 24) !== 254 || u8(o + 25) !== 254 || u8(o + 26) !== 254 || u8(o + 27) !== 254 || u8(o + 28) !== 254 || u8(o + 29) !== 254 || u8(o + 30) !== 254 || u8(o + 31) !== 254 || u32(o + 36) || u8(o + 52) !== 254 || u8(o + 53) !== 254 || u8(o + 54) !== 254 || u8(o + 55) !== 254 || u8(o + 56) !== 254 || u8(o + 57) !== 254 || u8(o + 58) !== 254 || u8(o + 59) !== 254 || u8(o + 60) !== 254 || u8(o + 61) !== 254 || u8(o + 62) !== 254 || u8(o + 63) !== 254 || f32(o + 64) || u8(o + 84) !== 254 || u8(o + 85) !== 254 || u8(o + 86) !== 254 || u8(o + 87) !== 254 || u8(o + 88) !== 254 || u8(o + 89) !== 254 || u8(o + 90) !== 254 || u8(o + 91) !== 254 || u8(o + 92) !== 254 || u8(o + 93) !== 254 || u8(o + 94) !== 254 || u8(o + 95) !== 254 || u32(o + 104) || u8(o + 116) !== 254 || u8(o + 117) !== 254 || u8(o + 118) !== 254 || u8(o + 119) !== 254 || u8(o + 120) !== 254 || u8(o + 121) !== 254 || u8(o + 122) !== 254 || u8(o + 123) !== 254 || u8(o + 124) !== 254 || u8(o + 125) !== 254 || u8(o + 126) !== 254 || u8(o + 127) !== 254 || u8(o + 148) !== 254 || u8(o + 149) !== 254 || u8(o + 150) !== 254 || u8(o + 151) !== 254 || u8(o + 152) !== 254 || u8(o + 153) !== 254 || u8(o + 154) !== 254 || u8(o + 155) !== 254 || u8(o + 156) !== 254 || u8(o + 157) !== 254 || u8(o + 158) !== 254 || u8(o + 159) !== 254 || u8(o + 180) !== 254 || u8(o + 181) !== 254 || u8(o + 182) !== 254 || u8(o + 183) !== 254 || u8(o + 184) !== 254 || u8(o + 185) !== 254 || u8(o + 186) !== 254 || u8(o + 187) !== 254 || u8(o + 188) !== 254 || u8(o + 189) !== 254 || u8(o + 190) !== 254 || u8(o + 191) !== 254 || u8(o + 212) !== 254 || u8(o + 213) !== 254 || u8(o + 214) !== 254 || u8(o + 215) !== 254 || u8(o + 216) !== 254 || u8(o + 217) !== 254 || u8(o + 218) !== 254 || u8(o + 219) !== 254 || u8(o + 220) !== 254 || u8(o + 221) !== 254 || u8(o + 222) !== 254 || u8(o + 223) !== 254 || u8(o + 244) !== 254 || u8(o + 245) !== 254 || u8(o + 246) !== 254 || u8(o + 247) !== 254 || u8(o + 248) !== 254 || u8(o + 249) !== 254 || u8(o + 250) !== 254 || u8(o + 251) !== 254 || u8(o + 252) !== 254 || u8(o + 253) !== 254 || u8(o + 254) !== 254 || u8(o + 255) !== 254 || u8(o + 276) !== 254 || u8(o + 277) !== 254 || u8(o + 278) !== 254 || u8(o + 279) !== 254 || u8(o + 280) !== 254 || u8(o + 281) !== 254 || u8(o + 282) !== 254 || u8(o + 283) !== 254 || u8(o + 284) !== 254 || u8(o + 285) !== 254 || u8(o + 286) !== 254 || u8(o + 287) !== 254 || u32(o + 292) || u32(o + 304) !== 16711422 || u8(o + 308) !== 254 || u8(o + 309) !== 254 || u8(o + 310) !== 254 || u8(o + 311) !== 254 || u8(o + 312) !== 254 || u8(o + 313) !== 254 || u8(o + 314) !== 254 || u8(o + 315) !== 254 || u8(o + 316) !== 254 || u8(o + 317) !== 254 || u8(o + 318) !== 254 || u8(o + 319) !== 254 || u8(o + 340) !== 254 || u8(o + 341) !== 254 || u8(o + 342) !== 254 || u8(o + 343) !== 254 || u8(o + 344) !== 254 || u8(o + 345) !== 254 || u8(o + 346) !== 254 || u8(o + 347) !== 254 || u8(o + 348) !== 254 || u8(o + 349) !== 254 || u8(o + 350) !== 254 || u8(o + 351) !== 254 || u8(o + 372) !== 254 || u8(o + 373) !== 254 || u8(o + 374) !== 254 || u8(o + 375) !== 254 || u8(o + 376) !== 254 || u8(o + 377) !== 254 || u8(o + 378) !== 254 || u8(o + 379) !== 254 || u8(o + 380) !== 254 || u8(o + 381) !== 254 || u8(o + 382) !== 254 || u8(o + 383) !== 254)
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, f32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, f32, 32, u32, 36, f32, 40, f32, 44, u32, 48, u8, 52, u8, 53, u8, 54, u8, 55, u8, 56, u8, 57, u8, 58, u8, 59, u8, 60, u8, 61, u8, 62, u8, 63, f32, 64, f32, 68, u32, 72, f32, 76, u32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u32, 96, f32, 100, u32, 104, f32, 108, u32, 112, u8, 116, u8, 117, u8, 118, u8, 119, u8, 120, u8, 121, u8, 122, u8, 123, u8, 124, u8, 125, u8, 126, u8, 127, f32, 128, f32, 132, f32, 136, f32, 140, u32, 144, u8, 148, u8, 149, u8, 150, u8, 151, u8, 152, u8, 153, u8, 154, u8, 155, u8, 156, u8, 157, u8, 158, u8, 159, f32, 160, f32, 164, f32, 168, f32, 172, u32, 176, u8, 180, u8, 181, u8, 182, u8, 183, u8, 184, u8, 185, u8, 186, u8, 187, u8, 188, u8, 189, u8, 190, u8, 191, f32, 192, f32, 196, f32, 200, f32, 204, u32, 208, u8, 212, u8, 213, u8, 214, u8, 215, u8, 216, u8, 217, u8, 218, u8, 219, u8, 220, u8, 221, u8, 222, u8, 223, f32, 224, f32, 228, f32, 232, f32, 236, u32, 240, u8, 244, u8, 245, u8, 246, u8, 247, u8, 248, u8, 249, u8, 250, u8, 251, u8, 252, u8, 253, u8, 254, u8, 255, f32, 256, f32, 260, f32, 264, f32, 268, u32, 272, u8, 276, u8, 277, u8, 278, u8, 279, u8, 280, u8, 281, u8, 282, u8, 283, u8, 284, u8, 285, u8, 286, u8, 287, f32, 288, u32, 292, f32, 296, f32, 300, u32, 304, u8, 308, u8, 309, u8, 310, u8, 311, u8, 312, u8, 313, u8, 314, u8, 315, u8, 316, u8, 317, u8, 318, u8, 319, f32, 320, f32, 324, f32, 328, f32, 332, u32, 336, u8, 340, u8, 341, u8, 342, u8, 343, u8, 344, u8, 345, u8, 346, u8, 347, u8, 348, u8, 349, u8, 350, u8, 351, f32, 352, f32, 356, f32, 360, f32, 364, u32, 368, u8, 372, u8, 373, u8, 374, u8, 375, u8, 376, u8, 377, u8, 378, u8, 379, u8, 380, u8, 381, u8, 382, u8, 383], o)
}
function get_bmg_world_224(o) {
    if (u16(o + 4) !== 10176 || u32(o + 8) || u16(o + 14) !== 8 || u32(o + 16) || u16(o + 22) !== 8 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || u8(o + 82) || u8(o + 83) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, u32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u32, 84, u32, 88, u32, 92], o)

    ä(bmg_another_world_section, u32(o + 76), get_bmg_another_world_section)

}

function get_bmg_world_4(o) {
    if (f32(o + 12) || f32(o + 32) !== 10000 || f32(o + 40) !== 10000 || u32(o + 48) !== 1 || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 16) + (i * 96), get_bmg_world_4_16)
    }
    if (u32(o + 24)) {
        for (let i = 0; i < u32(o + 24); i++) {
            ö(u32(o + 20) + (i * 4), get_bmg_world_4_20)
        }
    } else {
        ö(u32(o + 20), get_bmg_world_4_20t0)
    }

}

function get_bmg_world_4_20(o) {/*ü(1, [u32, 0], o)*/
}

function get_bmg_world_4_20t0(o) {// 0 bytes ?
}

function get_bmg_world_4_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 48) || u32(o + 52) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 4), get_bmg_world_4_16_36)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 4), get_bmg_world_4_16_36)
    }
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 4), get_bmg_world_4_16_36)
    }
    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 4), get_bmg_world_4_16_36)
    }

}

function get_bmg_world_4_16_36(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_world_60, u32(o + 0), get_bmg_world_60)

}

function get_bmg_world_120(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ä(bmg_world_120_0, u32(o + 0) + (i * 144), get_bmg_world_120_0)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 12) + (i * 8), get_bmg_world_120_12)
    }

}

function get_bmg_world_120_0(o) {
    if (u16(o + 4) !== 16 || u32(o + 8) || u16(o + 14) || u32(o + 16) || u16(o + 22) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || f32(o + 60) !== 1 || u8(o + 88) || u8(o + 90) || u8(o + 91) || u8(o + 92) !== 100 || u8(o + 93) || u8(o + 94) || u8(o + 95) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 136) || u32(o + 140))
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u16, 12, u16, 14, u32, 16, u16, 20, u16, 22, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, f32, 84, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 4), get_bmg_world_120_0_68)
        ö(u32(o + 72) + (i * 4), get_bmg_world_120_0_72)
    }
    for (let i = 0; i < u32(o + 76); i++) {
        ö(u32(o + 80) + (i * 4), get_bmg_world_120_0_80)
    }

}

function get_bmg_world_120_0_80(o) {/*ü(1, [u32, 0], o)*/
}
function get_bmg_world_120_0_68(o) {/*ü(1, [f32, 0], o)*/
}
function get_bmg_world_120_0_72(o) {/*ü(1, [u32, 0], o)*/
}

function get_bmg_world_120_12(o) {/*ü(1, [u32, 0, u32, 4], o)*/
}

function get_bmg_world_208(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_world_thing, u32(o + 0), get_bmg_world_thing)

}

function get_bmg_world_176(o) {
    if (u32(o + 24) !== 463 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_world_176_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_bmg_world_176_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 4), get_bmg_world_176_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 4), get_bmg_world_176_28)
    }

}

function get_bmg_world_176_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_flag, u32(o + 0), get_bmg_flag)

}

function get_bmg_world_176_12(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_var, u32(o + 0), get_bmg_var)

}

function get_bmg_world_176_20(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_something, u32(o + 0), get_bmg_something)

}

function get_bmg_world_176_28(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_flag, u32(o + 0), get_bmg_flag)

}

function get_bmg_basic(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_basic_4)

}

function get_bmg_basic_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    switch (g.type) {
    case 1:
        ä(bmg_interface, u32(o + 0), get_bmg_interface)
        break
    case 3:
        ö(u32(o), get_bmg_link)
        break
    default:
        if (u32(o))
            console.log("?")

    }

}

function get_bmg_model(o) {
    if (u32(o + 28))
        ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76], o)

    ö(u32(o + 4), get_bmg_model_4)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 8), get_bmg_model_20)
        ö(u32(o + 24) + (i * 4), get_bmg_model_24)
    }

}

function get_bmg_model_4(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_model_20(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_model_20_4)
    }

}

function get_bmg_model_20_4(o) {
    /*ü(1, [u32, 0], o)*/

    switch (g.console) {
    case "wii":
        ö(u32(o + 0), get_bmg_model_20_4_0twii)
        break
    case "pc":
        ö(u32(o + 0), get_bmg_model_20_4_0tpc)
        break
    }

}

function get_bmg_model_20_4_0twii(o) {
    switch (u32(o)) {
    case 0:
        get_bmg_model_20_4_0twiit0(o)
        break
    case 1:
        get_bmg_model_20_4_0twiit1(o)
        break
    case 2:
        get_bmg_model_20_4_0twiit2(o)
        break
    case 3:
        get_bmg_model_20_4_0twiit3(o)
        break
    default:
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212], o)
    }

}

function get_bmg_model_20_4_0twiit0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 60) || u32(o + 64) || u8(o + 71) !== 255 || u8(o + 74) !== 255 || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) !== 32831 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 184) || u32(o + 204) || u32(o + 212) !== 1 || u8(o + 218) || u8(o + 219))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u16, 176, u16, 178, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u8, 216, u8, 217, u8, 218, u8, 219, f32, 220], o)
    ß('p_animation', o, 32)
    ß('p_texture', o, 48)
    ß('p_texture', o, 56)

    ö(u32(o + 180), get_bmg_model_20_4_0twiit0_180)
    ö(u32(o + 188), get_bmg_model_20_4_0twiit0_188)
    ö(u32(o + 192), get_bmg_model_20_4_0twiit0_192)
    ö(u32(o + 196), get_bmg_model_20_4_0twiit0_196)
    ö(u32(o + 200), get_bmg_model_20_4_0twiit0_200)
    ö(u32(o + 208), get_bmg_model_20_4_0twiit0_208)

}

function get_bmg_model_20_4_0twiit0_180(o) {// floats
}
function get_bmg_model_20_4_0twiit0_188(o) {// u8s
}
function get_bmg_model_20_4_0twiit0_192(o) {// floats sometimes ?
}
function get_bmg_model_20_4_0twiit0_196(o) {// idk
}
function get_bmg_model_20_4_0twiit0_200(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {// ö(u32(o + 8) + i, get_bmg_model_20_4_0twiit0_200_8)
    }
    ö(u32(o + 8), get_bmg_model_20_4_0twiit0_200_8)

}

function get_bmg_model_20_4_0twiit0_200_8(o) {// 1 byter per entry
//also string after
}

function get_bmg_model_20_4_0twiit0_208(o) {// floats
}

function get_bmg_model_20_4_0twiit1(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) !== 32831 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u16, 176, u16, 178, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u16, 212, u16, 214, u32, 216, f32, 220], o)
    ß('p_texture', o, 48)
    ß('p_texture', o, 60)
    ß('p_texture', o, 56)

    ö(u32(o + 180), get_bmg_model_20_4_0twiit1_180)
    ö(u32(o + 184), get_bmg_model_20_4_0twiit1_184)
    ö(u32(o + 188), get_bmg_model_20_4_0twiit1_188)
    ö(u32(o + 192), get_bmg_model_20_4_0twiit1_192)
    ö(u32(o + 196), get_bmg_model_20_4_0twiit1_196)
    ö(u32(o + 200), get_bmg_model_20_4_0twiit1_200)
    for (let i = 0; i < u16(o + 212); i++) {
        ö(u32(o + 204) + (i * 8), get_bmg_model_20_4_0twiit1_204)
    }
    ö(u32(o + 208), get_bmg_model_20_4_0twiit1_208)

}

function get_bmg_model_20_4_0twiit1_180(o) {// float
}
function get_bmg_model_20_4_0twiit1_184(o) {// 4 u8s ?
}
function get_bmg_model_20_4_0twiit1_188(o) {// u8
}
function get_bmg_model_20_4_0twiit1_192(o) {// floats
}
function get_bmg_model_20_4_0twiit1_196(o) {// u16's ?
}
function get_bmg_model_20_4_0twiit1_200(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_bmg_model_20_4_0twiit1_200_8)

}

function get_bmg_model_20_4_0twiit1_200_8(o) {// u8s
}

function get_bmg_model_20_4_0twiit1_204(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    ö(u32(o + 4), get_bmg_model_20_4_0twiit1_204_4)

}

function get_bmg_model_20_4_0twiit1_204_4(o) {// ??
}

function get_bmg_model_20_4_0twiit1_208(o) {// floats ?
}

function get_bmg_model_20_4_0twiit2(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) !== 32831 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 208) || u32(o + 212) || u32(o + 216) || u32(o + 220))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220], o)
    ß('p_texture', o, 48)

    ö(u32(o + 180), get_bmg_model_20_4_0twiit2_180)
    ö(u32(o + 188), get_bmg_model_20_4_0twiit2_188)
    ö(u32(o + 196), get_bmg_model_20_4_0twiit2_196)
    ö(u32(o + 204), get_bmg_model_20_4_0twiit2_204)

}

function get_bmg_model_20_4_0twiit2_180(o) {//floats
}
function get_bmg_model_20_4_0twiit2_188(o) {//floats
}
function get_bmg_model_20_4_0twiit2_196(o) {// bytes ?
}
function get_bmg_model_20_4_0twiit2_204(o) {// bytes ?
}

function get_bmg_model_20_4_0twiit3(o) {
    if (u32(o + 0) !== 3 || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) !== 32831 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) !== 655403 || u32(o + 184) || u32(o + 188))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u16, 212, u16, 214, u32, 216, f32, 220], o)
    ß('p_texture', o, 48)

    ö(u32(o + 180), get_bmg_model_20_4_0twiit3_180)
    ö(u32(o + 192), get_bmg_model_20_4_0twiit3_192)
    ö(u32(o + 196), get_bmg_model_20_4_0twiit3_196)
    ö(u32(o + 200), get_bmg_model_20_4_0twiit3_200)
    for (let i = 0; i < u16(o + 212); i++) {
        ö(u32(o + 204) + (i * 8), get_bmg_model_20_4_0twiit3_204)
    }

    ö(u32(o + 208), get_bmg_model_20_4_0twiit3_208)

}

function get_bmg_model_20_4_0twiit3_180(o) {// float
}
function get_bmg_model_20_4_0twiit3_192(o) {// non floats
}
function get_bmg_model_20_4_0twiit3_196(o) {// non floats
}
function get_bmg_model_20_4_0twiit3_200(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_bmg_model_20_4_0twiit3_200_8)

}

function get_bmg_model_20_4_0twiit3_200_8(o) {// bytes
}

function get_bmg_model_20_4_0twiit3_204(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    ö(u32(o + 4), get_bmg_model_20_4_0twiit3_204_4)

}

function get_bmg_model_20_4_0twiit3_204_4(o) {// floats?
}

function get_bmg_model_20_4_0twiit3_208(o) {// floats
}

function get_bmg_model_20_4_0tpc(o) {
    switch (u32(o)) {
    case 0:
        get_bmg_model_20_4_0tpct0(o)
        break
    case 1:
        get_bmg_model_20_4_0tpct1(o)
        break
    case 2:
        get_bmg_model_20_4_0tpct2(o)
        break
    default:
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300], o)
    }

    // if(u32(o+4) ||u32(o+20) ||u32(o+24) ||u32(o+28) ||u32(o+40) ||u32(o+44) ||u32(o+52) ||u32(o+64) ||u8(o+68) !==255 ||u8(o+69) !==255 ||u8(o+70) !==255 ||u8(o+71) !==255 ||u8(o+74) !==255 ||u32(o+76) ||u32(o+80) ||u32(o+84) ||u32(o+88) ||u32(o+92) ||f32(o+96) !==1 ||u32(o+100) ||u32(o+104) ||u32(o+108) ||u32(o+112) ||f32(o+116) !==1 ||u32(o+120) ||u32(o+124) ||u32(o+128) ||u32(o+132) ||f32(o+136) !==1 ||u32(o+140) ||u32(o+144) ||u32(o+148) ||u32(o+152) ||f32(o+156) !==1 ||u32(o+164) ||u32(o+168) ||u32(o+172) ||u32(o+208) ||u32(o+216) !==1 ||u32(o+240) ||u32(o+244) ||u32(o+248) ||u32(o+252) ||u32(o+256) ||u32(o+260) ||u32(o+264) ||u32(o+268) ||u32(o+272) ||u32(o+276) ||u32(o+280) ||u32(o+284) ||u32(o+288) ||u32(o+292) ||u32(o+296) ||u32(o+300) )
    //  ß('p_texture', o, 48)
    //  ß('p_texture', o, 32)
    //  ß('p_texture', o, 60)
    //  ß('p_texture', o, 160)
    //  ß('p_texture', o, 56)
    //  ß('p_animation', o, 160)
    // //maybe type o god
    //     if (u32(o + 188)) {// for (let i = 0; i < u32(o + 176); i++) {
    //     //     ö(u32(o + 188) + (i * 12), get_bmg_model_20_4_0tpc_188)
    //     // }
    //     }
    //     if (u32(o + 196)) {// for (let i = 0; i < u32(o + 176); i++) {
    //     //     ö(u32(o + 196) + (i * 12), get_bmg_model_20_4_0tpc_196)
    //     // }
    //     }
    //     if (u32(o + 200)) {// for (let i = 0; i < u32(o + 176); i++) {
    //     //     ö(u32(o + 200) + (i * 8), get_bmg_model_20_4_0tpc_200)
    //     // }
    //     }
    //     if (u32(o + 204)) {// for (let i = 0; i < u32(o + 176); i++) {
    //     //     ö(u32(o + 204) + (i * 8), get_bmg_model_20_4_0tpc_204)
    //     // }
    //     }
    //     if (u32(o + 212)) {// for (let i = 0; i < u32(o + 176); i++) {
    //     //     ö(u32(o + 212) + (i * 96), get_bmg_model_20_4_0tpc_212)
    //     // }
    //     }
    //     // for (let i = 0; i < u32(o + 224); i++) {
    //     //     ö(u32(o + 228) + (i * 64), get_bmg_model_20_4_0tpc_228)
    //     // }
    ö(u32(o + 188), get_bmg_model_20_4_0tpc_188)
    ö(u32(o + 192), get_bmg_model_20_4_0tpc_192)
    ö(u32(o + 196), get_bmg_model_20_4_0tpc_196)
    ö(u32(o + 200), get_bmg_model_20_4_0tpc_200)
    ö(u32(o + 204), get_bmg_model_20_4_0tpc_204)
    ö(u32(o + 212), get_bmg_model_20_4_0tpc_212)
    ö(u32(o + 220), get_bmg_model_20_4_0tpc_220)
    ö(u32(o + 228), get_bmg_model_20_4_0tpc_228)
    ö(u32(o + 236), get_bmg_model_20_4_0tpc_236)

}

function get_bmg_model_20_4_0tpct0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u8(o + 74) !== 255 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || f32(o + 156) !== 1 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 184) || u32(o + 204) || u32(o + 208) || u32(o + 212) || u32(o + 216) !== 1 || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u32(o + 272) || u32(o + 276) || u32(o + 280) || u32(o + 284) || u32(o + 288) || u32(o + 292) || u32(o + 296) || u32(o + 300))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300], o)
    ß('p_texture', o, 48)
    ß('p_texture', o, 32)

    // ö(u32(o + 188), get_bmg_model_20_4_0tpct0_188)
    // ö(u32(o + 192), get_bmg_model_20_4_0tpct0_192)
    // ö(u32(o + 196), get_bmg_model_20_4_0tpct0_196)
    // ö(u32(o + 200), get_bmg_model_20_4_0tpct0_200)
    // ö(u32(o + 220), get_bmg_model_20_4_0tpct0_220)
    // ö(u32(o + 228), get_bmg_model_20_4_0tpct0_228)

}

function get_bmg_model_20_4_0tpct0_188(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct0_192(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct0_196(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct0_200(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct0_220(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct0_228(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_model_20_4_0tpct1(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u8(o + 74) !== 255 || u8(o + 75) !== 128 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || f32(o + 156) !== 1 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 184) !== 4 || u32(o + 208) || u32(o + 216) !== 1 || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u32(o + 272) || u32(o + 276) || u32(o + 280) || u32(o + 284) || u32(o + 288) || u32(o + 292) || u32(o + 296) || u32(o + 300))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300], o)
    ß('p_texture', o, 48)
    ß('p_texture', o, 60)
    ß('p_texture', o, 160)
    ß('p_texture', o, 56)
    ß('p_animation', o, 160)

    // ö(u32(o + 188), get_bmg_model_20_4_0tpct1_188)
    // ö(u32(o + 192), get_bmg_model_20_4_0tpct1_192)
    // ö(u32(o + 196), get_bmg_model_20_4_0tpct1_196)
    // ö(u32(o + 200), get_bmg_model_20_4_0tpct1_200)
    // ö(u32(o + 204), get_bmg_model_20_4_0tpct1_204)
    // ö(u32(o + 212), get_bmg_model_20_4_0tpct1_212)
    // ö(u32(o + 220), get_bmg_model_20_4_0tpct1_220)
    // ö(u32(o + 228), get_bmg_model_20_4_0tpct1_228)
    // ö(u32(o + 236), get_bmg_model_20_4_0tpct1_236)

}

function get_bmg_model_20_4_0tpct1_188(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct1_192(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct1_196(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct1_200(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct1_204(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct1_212(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct1_220(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct1_228(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_20_4_0tpct1_236(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_model_20_4_0tpct2(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u8(o + 72) || u8(o + 73) || u8(o + 74) !== 255 || u8(o + 75) !== 128 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || f32(o + 156) !== 1 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 180) !== 3 || u32(o + 184) || u32(o + 192) || u32(o + 200) || u32(o + 204) || u32(o + 208) || u32(o + 212) || u32(o + 216) !== 1 || u32(o + 224) || u32(o + 228) || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u32(o + 272) || u32(o + 276) || u32(o + 280) || u32(o + 284) || u32(o + 288) || u32(o + 292) || u32(o + 296) || u32(o + 300))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300], o)

    // ö(u32(o + 188), get_bmg_model_20_4_0tpct2_188)
    // ö(u32(o + 196), get_bmg_model_20_4_0tpct2_196)
    // ö(u32(o + 220), get_bmg_model_20_4_0tpct2_220)

}

function get_bmg_model_20_4_0tpct2_188(o) {// 1152 - 30816
// 1071171200 | 1093448414 | 1084282688 | 1071961376 || O 22261680 M 21696928 I 564752
// Struct Size: 6912 | Init: 6912
}
function get_bmg_model_20_4_0tpct2_196(o) {// 1152,2016,2880,3456,4032,4896,5760,6912,8064,8352,9216,10656,12096,12672,30816
// 1039038858 | 1061259494 | 1059382825 | 1039038858 || O 22268592 M 21696928 I 571664
// Struct Size: 6912 | Init: 6912
}
function get_bmg_model_20_4_0tpct2_220(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_model_20_4_0tpc_188(o) {/*ü(1, [f32, 0, f32, 4, f32, 8], o)*/
}
function get_bmg_model_20_4_0tpc_192(o) {// ????
}
function get_bmg_model_20_4_0tpc_196(o) {/*ü(1, [f32, 0, f32, 4, f32, 8], o)*/
}
function get_bmg_model_20_4_0tpc_200(o) {/*ü(1, [f32, 0, f32, 4], o)*/
}
function get_bmg_model_20_4_0tpc_204(o) {/*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7], o)*/
}
function get_bmg_model_20_4_0tpc_212(o) {
    if (f32(o + 12) || f32(o + 16) || f32(o + 20) || f32(o + 36) || f32(o + 40) || f32(o + 44) || f32(o + 60) || f32(o + 64) || f32(o + 68) || f32(o + 84) || f32(o + 88) || f32(o + 92))
        ü(1, [f32, 0, f32, 4, f32, 6, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, f32, 88, f32, 92], o)
}
function get_bmg_model_20_4_0tpc_220(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    // for (let i = 0; i < u32(o + 8); i++) {
    //     ö(u32(o + 12) + i, get_bmg_model_20_4_0tpc_220_12)
    // }
    ö(u32(o + 12), get_bmg_model_20_4_0tpc_220_12)

}

function get_bmg_model_20_4_0tpc_220_12(o) {/*ü(1, [u8, 0], o)*/
}

function get_bmg_model_20_4_0tpc_228(o) {
    if (f32(o + 60) !== 1)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60], o)
}
function get_bmg_model_20_4_0tpc_236(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 8) !== 2 || u32(o + 12) !== 3)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_model_24(o) {/*ü(1, [f32, 0], o)*/
}

function get_bmg_texture_anim(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_bmg_texture_anim_0)

}

function get_bmg_datapack_132(o) {
    // if (u32(o + 0))
    ü(1, [u32, 0, u32, 4], o)
    ä(bmg_text, u32(o + 4), get_bmg_text)

}

function get_bmg_model_anim_2_type_b(o) {
    if (u32(o + 0) !== 2852208671 || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_model_anim_2_type_b_8)
    ö(u32(o + 16), get_bmg_model_anim_2_type_b_16)
    ö(u32(o + 20), get_bmg_model_anim_2_type_b_20)

}

function get_bmg_model_anim_2_type_b_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_model_anim_2_type_b_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_anim_2_type_b_20(o) {
    if (u8(o + 4) !== 255 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 44))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 0), get_bmg_model_anim_2_type_b_20_0)
    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 4), get_bmg_model_anim_2_type_b_20_40)
    }

}

function get_bmg_model_anim_2_type_b_20_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_model_anim_2_type_b_20_40(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_bmg_model_anim_2_type_b_20)

}

function get_bmg_model_anim_2_type_c(o) {
    if (u32(o + 0) !== 131077 || u32(o + 12) || u32(o + 16) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 2), get_bmg_model_anim_2_type_c_24)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 24), get_bmg_model_anim_2_type_c_32)
    }
    ö(u32(o + 36), get_bmg_model_anim_2_type_c_36)

}

function get_bmg_model_anim_2_type_c_24(o) {/*ü(1, [u16, 0], o)*/
}
function get_bmg_model_anim_2_type_c_32(o) {
    if (u8(o + 17) || u32(o + 20))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20], o)
}
function get_bmg_model_anim_2_type_c_36(o) {// console.log(get_string(o, 0, false))
}

/* unordered start */

function get_bmg_something(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 11) || u32(o + 24) || u32(o + 40) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ä(bmg_text, u32(o + 20), get_bmg_text)
    ä(bmg_flag, u32(o + 36), get_bmg_flag)

    ä(bmg_object, u32(o + 44), get_bmg_object)

}

function get_bmg_world_thing(o) {
    if (u8(o + 4) || u8(o + 5) || u8(o + 6) || u8(o + 7) !== 1 || u32(o + 8) || f32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) !== 5 || u32(o + 28) !== 10 || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 70 || f32(o + 52) !== 1 || u32(o + 56) || f32(o + 60) !== 1 || u32(o + 64) || f32(o + 68) !== 1 || u32(o + 92) || u32(o + 96) || f32(o + 100) !== 300 || f32(o + 104) !== 200 || f32(o + 108) !== 1000 || u32(o + 112) || u32(o + 116) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, f32, 80, f32, 84, u32, 88, u32, 92, u32, 96, f32, 100, f32, 104, f32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ä(bmg_unknown, u32(o + 48), get_bmg_unknown)

    ö(u32(o + 76), get_bmg_world_thing_76)
    ä(bmg_sound_section, u32(o + 88), get_bmg_sound_section)
    ö(u32(o + 124), get_bmg_world_thing_124)

}

function get_bmg_world_thing_76(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_unknown, u32(o + 0), get_bmg_unknown)
}

function get_bmg_world_thing_124(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_unknown, u32(o + 0), get_bmg_unknown)
}

function get_bmg_text(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 0), get_bmg_text_0)

}

function get_bmg_text_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_link(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 0), get_bmg_link_0)
    ö(u32(o + 20), get_bmg_link_20)
    ä(bmg_interface, u32(o + 36), get_bmg_interface)
    ö(u32(o + 40), get_bmg_link_40)
    ö(u32(o + 48), get_bmg_link_48)
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 16), get_bmg_link_60)
    }
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 4), get_bmg_link_68)
    }
    ö(u32(o + 72), get_bmg_link_72)
    ö(u32(o + 76), get_bmg_link_76)

}

function get_bmg_link_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 3904 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 4), get_bmg_link_0_4)

}

function get_bmg_link_0_4(o) {
    if (u32(o + 0) !== 3936 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_link_0_4_0)

}

function get_bmg_link_0_4_0(o) {// console.log(get_string(o, 0, false))
// MX_MENU_NAVIGATING_LP
}

function get_bmg_link_20(o) {
    if (u32(o + 0) !== 463 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_link_20_4)
    }

}

function get_bmg_link_20_4(o) {
    /*ü(1, [u32, 0], o)*/
    ä(bmg_flag, u32(o + 0), get_bmg_flag)
}

function get_bmg_link_40(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_link_48(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_link_60(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_link_60_4)
    ö(u32(o + 8), get_bmg_link_60_8)
    ö(u32(o + 12), get_bmg_link_60_12)

}

function get_bmg_link_60_4(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_link_60_8(o) {
    if (u32(o + 0) !== 1966080 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_bmg_link_60_12(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_link_60_12_0)

}

function get_bmg_link_60_12_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_link_68(o) {
    /*ü(1, [u32, 0], o)*/
    ö(u32(o + 0), get_bmg_link_68_0)

}

function get_bmg_link_68_0(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_bmg_link_68_0_4)
    }

}

function get_bmg_link_68_0_4(o) {
    /* ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)*/
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_bmg_link_68_0_4_4)
    }
    ö(u32(o + 8), get_bmg_link_68_0_4_8)
    ö(u32(o + 12), get_bmg_link_68_0_4_12)
    ö(u32(o + 20), get_bmg_link_68_0_4_20)
    ö(u32(o + 28), get_bmg_link_68_0_4_28)

}

function get_bmg_link_68_0_4_4(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    switch (u8(o)) {
    case 0:
        ö(u32(o + 4), get_bmg_link_68_0_4_4_4t0)
        break
    case 1:
        ö(u32(o + 4), get_bmg_link_68_0_4_4_4t1)
        break
    }
    ö(u32(o + 8), get_bmg_link_68_0_4_4_8)

}

function get_bmg_link_68_0_4_4_4t0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_link_68_0_4_4_4t1(o) {
    if (u32(o + 0) !== 90208 || u32(o + 4) !== 11 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_link_68_0_4_4_4t1_0)

}

function get_bmg_link_68_0_4_4_4t1_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_link_68_0_4_4_8(o) {
    if (u32(o + 0) !== 1966080 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_link_68_0_4_8(o) {
    if (u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_link_68_0_4_8_0)
    //text

}

function get_bmg_link_68_0_4_8_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_link_68_0_4_12(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_link_68_0_4_20(o) {
    if (u8(o + 8) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_bmg_link_68_0_4_20_4)
    }

}

function get_bmg_link_68_0_4_20_4(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    switch (u8(o)) {
    case 0:
        ö(u32(o + 4), get_bmg_link_68_0_4_20_4_4t0)
        break
    case 1:
        ö(u32(o + 4), get_bmg_link_68_0_4_20_4_4t1)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }
    ö(u32(o + 8), get_bmg_link_68_0_4_20_4_8)
    ö(u32(o + 12), get_bmg_link_68_0_4_20_4_12)

}
function get_bmg_link_68_0_4_20_4_4t0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_link_68_0_4_20_4_4t1(o) {
    if (u32(o + 4) !== 5 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_link_68_0_4_20_4_4t1_0)

}

function get_bmg_link_68_0_4_20_4_4t1_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_link_68_0_4_20_4_8(o) {
    if (u32(o + 0) !== 1966080 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_bmg_link_68_0_4_20_4_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_link_68_0_4_28(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 4), get_bmg_link_68_0_4_28_4)

}

function get_bmg_link_68_0_4_28_4(o) {
    if (u32(o + 0) !== 50331648 || u32(o + 4) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 12), get_bmg_link_68_0_4_28_4_12)

}

function get_bmg_link_68_0_4_28_4_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_link_72(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) !== 30000 || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 8), get_bmg_link_72_8)

}

function get_bmg_link_72_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_link_76(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_var(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 160) || u32(o + 172))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172], o)

    ö(u32(o + 148), get_bmg_var_148)
    for (let i = 0; i < u32(o + 152); i++) {
        ö(u32(o + 156) + (i * 4), get_bmg_var_156)
    }
    for (let i = 0; i < u32(o + 164); i++) {
        ö(u32(o + 168) + (i * 36), get_bmg_var_168)
    }

}

function get_bmg_var_148(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_var_156(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_var, u32(o + 0), get_bmg_var)

}

function get_bmg_var_168(o) {
    if (u32(o + 0) || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    ö(u32(o + 8), get_bmg_var_168_8)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 20), get_bmg_var_168_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 28), get_bmg_var_168_24)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 28), get_bmg_var_168_24)
    }

}

function get_bmg_var_168_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_var_168_16(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16], o)

    ö(u32(o + 0), get_bmg_var_168_16_0)
    switch (u32(o + 4)) {
    case 4:
        ö(u32(o + 12), get_bmg_var_168_16_12t4)
        break
    case 5:
        ö(u32(o + 12), get_bmg_var_168_16_12t5)
        break
    case 6:
        ö(u32(o + 12), get_bmg_var_168_16_12t6)
        break
    case 7:
        ö(u32(o + 12), get_bmg_var_168_16_12t7)
        break
    case 8:
        ö(u32(o + 12), get_bmg_var_168_16_12t8)
        break
    case 9:
        ö(u32(o + 12), get_bmg_var_168_16_12t9)
        break
    case 10:
        ö(u32(o + 12), get_bmg_var_168_16_12t10)
        break
    case 11:
        ö(u32(o + 12), get_bmg_var_168_16_12t11)
        break
    case 12:
        ö(u32(o + 12), get_bmg_var_168_16_12t12)
        break
    case 13:
        ö(u32(o + 12), get_bmg_var_168_16_12t13)
        break
    case 14:
        ö(u32(o + 12), get_bmg_var_168_16_12t14)
        break
    case 15:
        ö(u32(o + 12), get_bmg_var_168_16_12t15)
        break
    case 18:
        ö(u32(o + 12), get_bmg_var_168_16_12t18)
        break
    case 19:
        ö(u32(o + 12), get_bmg_var_168_16_12t19)
        break
    case 20:
        ä(bmg_interface, u32(o + 12), get_bmg_interface)
        break
    case 21:
        ä(bmg_interface, u32(o + 12), get_bmg_interface)
        break
    case 22:
        ö(u32(o + 12), get_bmg_var_168_16_12t22)
        break
    case 24:
        ö(u32(o + 12), get_bmg_var_168_16_12t24)
        break
    case 26:
        ö(u32(o + 12), get_bmg_var_168_16_12t26)
        break
    default:
        if (u32(o + 12)) {
            sü(u32, 4, o, 12)
        }
    }

    ö(u32(o + 16), get_bmg_var_168_16_16)

}

function get_bmg_var_168_16_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_var_168_16_12t4(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || f32(o + 8) !== 1 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_var, u32(o + 0), get_bmg_var)

}

function get_bmg_var_168_16_12t5(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_var_168_16_12t5_4)

}

function get_bmg_var_168_16_12t5_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_var_168_16_12t6(o) {
    if (u8(o + 8) !== 3 || u8(o + 9) !== 3 || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_var_168_16_12t6_0)
    ö(u32(o + 4), get_bmg_var_168_16_12t6_4)

}

function get_bmg_var_168_16_12t6_0(o) {
    if (u32(o + 4) !== 11 || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_world_84, u32(o + 0), get_bmg_world_84)

}

function get_bmg_var_168_16_12t6_4(o) {
    if (u8(o + 4) !== 1 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_var_168_16_12t6_4_0)

}

function get_bmg_var_168_16_12t6_4_0(o) {
    if (u32(o + 4) !== 15 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    switch (u8(o + 8)) {
    case 1:
        ä(bmg_world_108, u32(o + 0), get_bmg_world_108)
        break
    case 2:
        //value
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 8, o, 0)
        }
    }

}

function get_bmg_var_168_16_12t7(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_var_168_16_12t8(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_world_20, u32(o + 8), get_bmg_world_20)

}

function get_bmg_var_168_16_12t9(o) {
    if (u8(o + 4) !== 3 || u8(o + 5) !== 2 || u8(o + 6) !== 2 || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_var_168_16_12t9_0)

}

function get_bmg_var_168_16_12t9_0(o) {
    if (u32(o + 4) !== 10 || u8(o + 8) !== 2 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_var_168_16_12t10(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_var_168_16_12t10_4)

}

function get_bmg_var_168_16_12t10_4(o) {
    if (u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_extended_world_link)

}

function get_bmg_var_168_16_12t11(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u8(o + 29) || u8(o + 30) || u8(o + 31))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)

    ö(u32(o + 0), get_bmg_var_168_16_12t11_0)
    ö(u32(o + 4), get_bmg_world_link)

}

function get_bmg_var_168_16_12t11_0(o) {
    if (u32(o + 4) !== 11 || u8(o + 9) || u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11], o)

    ä(bmg_world_84, u32(o + 0), get_bmg_world_84)

}

function get_bmg_var_168_16_12t12(o) {
    if (u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12], o)

    switch (u8(o + 0)) {
    case 4:
        ä(bmg_flag, u32(o + 4), get_bmg_flag)
        break
    case 7:
        ö(u32(o + 4), get_bmg_var_168_16_12t12_4t7)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

    switch (u8(o + 0)) {
    case 4:
        ä(bmg_flag, u32(o + 12), get_bmg_flag)
        break
    case 7:
        ö(u32(o + 12), get_bmg_var_168_16_12t12_12t7)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }

}

function get_bmg_var_168_16_12t12_4t7(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_var_168_16_12t12_4t7_4)
    ö(u32(o + 12), get_bmg_var_168_16_12t12_4t7_12)

}

function get_bmg_var_168_16_12t12_4t7_4(o) {
    if (u32(o + 4) !== 11 || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_world_84, u32(o + 0), get_bmg_world_84)

}

function get_bmg_var_168_16_12t12_4t7_12(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_var_168_16_12t12_12t7(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 4010 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 12), get_bmg_var_168_16_12t12_12t7_12)

}

function get_bmg_var_168_16_12t12_12t7_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_var_168_16_12t13(o) {
    if (u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_var_168_16_12t13_0)
    ä(bmg_world_60, u32(o + 8), get_bmg_world_60)

}

function get_bmg_var_168_16_12t13_0(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 1:
        switch (u32(o + 4)) {
        case 11:
            ä(bmg_world_84, u32(o + 0), get_bmg_world_84)
            break
        default:
            if (u32(o + 0)) {
                sü(u32, 4, o, 0)
            }
        }
        break
    case 2:
    case 4:
        //value ?
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 8, o, 0)
        }
    }

}

function get_bmg_var_168_16_12t14(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_bmg_var_168_16)
    }

}

function get_bmg_var_168_16_12t15(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_bmg_var_168_16)
    }

}

function get_bmg_var_168_16_12t18(o) {
    if (u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_var_168_16_12t18_0)

}

function get_bmg_var_168_16_12t18_0(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_var_168_16_12t18_0_4)

}

function get_bmg_var_168_16_12t18_0_4(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 1:
        switch (u32(o + 4)) {
        case 10:
            ö(u32(o + 0), get_bmg_var_168_16_12t18_0_4_0t10)
            break
        case 11:
            ä(bmg_world_84, u32(o + 0), get_bmg_world_84)
            break
            // case 16:
            //     // ä(bmg_flag, u32(o + 0), get_bmg_flag) ??
            //     break
        default:
            if (u32(o + 0)) {
                sü(u32, 4, o, 0)
            }
        }
        break
    case 2:
    case 4:
        //value
        break
    case 7:
        switch (u32(o + 4)) {
        default:
        case 16:
            ä(bmg_flag, u32(o + 0), get_bmg_flag)
            break
            if (u32(o + 0)) {
                sü(u32, 4, o, 0)
            }
        }
        break
    default:
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
    }

}

function get_bmg_var_168_16_12t18_0_4_0t10(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 11 || u32(o + 12) !== 63296 || u32(o + 16) || u32(o + 20) || u32(o + 24) !== 7 || u32(o + 28) !== 65152 || u32(o + 32) !== 39 || u32(o + 36) !== 58304 || u32(o + 40) || u32(o + 44) || u32(o + 48) !== 1 || u32(o + 52) !== 65056 || u32(o + 56) !== 3 || u32(o + 60) !== 8960 || u32(o + 64) || u32(o + 68) || u32(o + 72) !== 51 || u32(o + 76) !== 9312 || u32(o + 80) !== 297 || u32(o + 84) !== 14208 || u32(o + 88) !== 81984 || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) !== 6 || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) !== 10614304 || u32(o + 144) !== 87872 || u32(o + 148) || u32(o + 152) || u32(o + 156) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 172) !== 1 || u32(o + 176) !== 87840 || u32(o + 180) || u32(o + 184) || u32(o + 188) !== 76 || u32(o + 192) !== 68032 || u32(o + 196) || u32(o + 200) || u32(o + 204) || u32(o + 208) || u32(o + 212) || u32(o + 216) || u32(o + 220) || u32(o + 224) || u32(o + 228) || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u32(o + 272) || u32(o + 276) || u32(o + 280) || u32(o + 284))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284], o)

    ä(bmg_world_44, u32(o + 12), get_bmg_world_44)
    ä(bmg_world_60, u32(o + 28), get_bmg_world_60)

    for (let i = 0; i < u32(o + 32); i++) {
        ä(bmg_world_68, u32(o + 36) + (i * 128), get_bmg_world_68)
    }
    ä(bmg_world_84, u32(o + 52), get_bmg_world_84)
    ä(bmg_world_92, u32(o + 60), get_bmg_world_92)
    ä(bmg_world_108, u32(o + 76), get_bmg_world_108)
    ä(bmg_world_116, u32(o + 84), get_bmg_world_116)

    ö(u32(o + 88), get_bmg_world_120)
    ö(u32(o + 140), get_bmg_world_settings)
    ö(u32(o + 144), get_bmg_world_176)
    ö(u32(o + 176), get_bmg_world_208)

    for (let i = 0; i < u32(o + 188); i++) {
        ä(bmg_world_224, u32(o + 192) + (i * 96), get_bmg_world_224)
    }

}

function get_bmg_var_168_16_12t19(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_var_168_16_12t19_0)

}

function get_bmg_var_168_16_12t19_0(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_world_link)

}

function get_bmg_var_168_16_12t22(o) {
    if (u8(o + 0) !== 4 || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_flag, u32(o + 4), get_bmg_flag)

}
function get_bmg_var_168_16_12t24(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_var_168_16_12t24_0)
    ö(u32(o + 4), get_bmg_var_168_16_12t24_4)

}

function get_bmg_var_168_16_12t24_0(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_var_168_16_12t24_0_4)

}

function get_bmg_var_168_16_12t24_0_4(o) {
    if (u32(o + 4) !== 10 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_var_168_16_12t24_4(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_var_168_16_12t24_4_4)

}

function get_bmg_var_168_16_12t24_4_4(o) {
    if (u32(o + 4) !== 11 || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_world_84, u32(o + 0), get_bmg_world_84)

}

function get_bmg_var_168_16_12t26(o) {
    if (u8(o + 1) !== 10 || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_var_168_16_12t26_4)

}

function get_bmg_var_168_16_12t26_4(o) {
    if (u32(o + 4) !== 1 || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    ä(bmg_world_20, u32(o + 0), get_bmg_world_20)

}

function get_bmg_world_link(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    switch (u8(o + 8)) {
    case 1:
        switch (u32(o + 4)) {
        case 0:
            ä(bmg_world_12, u32(o + 0), get_bmg_world_12)
            break
        case 1:
            ä(bmg_world_20, u32(o + 0), get_bmg_world_20)
            break
        case 8:
            ä(bmg_world_60, u32(o + 0), get_bmg_world_60)
            break
        case 10:
            ä(bmg_world_68, u32(o + 0), get_bmg_world_68)
            break
        case 11:
            ä(bmg_world_84, u32(o + 0), get_bmg_world_84)
            break
        case 13:
            ä(bmg_world_92, u32(o + 0), get_bmg_world_92)
            break
        case 10176:
            ä(bmg_world_224, u32(o + 0), get_bmg_world_224)
            break
        default:
            if (u32(o + 0)) {
                sü(u32, 4, o, 0)
            }
        }
        break
    case 2:
    case 4:
        //value?
        break
    case 7:
        switch (u32(o + 4)) {
        case 10:
            ä(bmg_flag, u32(o + 0), get_bmg_flag)
            break
        default:
            if (u32(o + 0)) {
                sü(u32, 4, o, 0)
            }
        }
        break
    default:
        if (u32(o + 0)) {
            ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
        }
    }

}

function get_bmg_extended_world_link(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    switch (u8(o + 8)) {
    case 1:
        switch (u32(o + 4)) {
        case 0:
            ä(bmg_world_12, u32(o + 0), get_bmg_world_12)
            break
        case 3:
            ä(bmg_world_36, u32(o + 0), get_bmg_world_36)
            break
            // case 10:
            //     // ä(bmg_extended_world_link_0tt110, u32(o + 0), get_bmg_extended_world_link_0tt110)
            //     break
        case 11:
            ä(bmg_world_84, u32(o + 0), get_bmg_world_84)
            break
        case 13:
            ä(bmg_world_92, u32(o + 0), get_bmg_world_92)
            break
        case 14:
            ä(bmg_world_100, u32(o + 0), get_bmg_world_100)
            break
        case 15:
            ä(bmg_world_108, u32(o + 0), get_bmg_world_108)
            break
        case 16:
            ä(bmg_world_120_0, u32(o + 0), get_bmg_world_120_0)
            break
        default:
            if (u32(o + 0)) {
                ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
                sü(u32, 4, o, 0)
            }
        }
        break
    case 2:
        //value
        break
    case 7:
        switch (u32(o + 4)) {
        case 10:
            ä(bmg_flag, u32(o + 0), get_bmg_flag)
            break
        case 16:
            ä(bmg_flag, u32(o + 0), get_bmg_flag)
            break
        default:
            if (u32(o + 0)) {
                ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
                sü(u32, 4, o, 0)
            }
        }
        break
    default:
        if (u32(o + 0)) {
            ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
        }
    }

}

function get_bmg_var_168_16_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_var_168_24(o) {
    if (u8(o + 6) || u8(o + 7) || u32(o + 16))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    ö(u32(o + 0), get_bmg_var_168_24_0)

    switch (u32(o + 8)) {
    case 1:
        ö(u32(o + 12), get_bmg_var_168_24_12t1)
        break
    case 2:
        ö(u32(o + 12), get_bmg_var_168_24_12t2)
        break
    case 4:
        ö(u32(o + 12), get_bmg_var_168_24_12t4)
        break
    case 5:
        ö(u32(o + 12), get_bmg_var_168_24_12t5)
        break
    case 6:
        ö(u32(o + 12), get_bmg_var_168_24_12t6)
        break
    case 7:
        ö(u32(o + 12), get_bmg_var_168_24_12t7)
        break
    case 8:
        ö(u32(o + 12), get_bmg_var_168_24_12t8)
        break
    case 13:
        ö(u32(o + 12), get_bmg_var_168_24_12t13)
        break
    case 14:
        ö(u32(o + 12), get_bmg_var_168_24_12t14)
        break
    case 15:
        ö(u32(o + 12), get_bmg_var_168_24_12t15)
        break
    case 16:
        ö(u32(o + 12), get_bmg_var_168_24_12t16)
        break
    case 17:
        ö(u32(o + 12), get_bmg_var_168_24_12t17)
        break
    case 18:
        ö(u32(o + 12), get_bmg_var_168_24_12t18)
        break
    case 19:
        ö(u32(o + 12), get_bmg_var_168_24_12t19)
        break
    case 21:
        ö(u32(o + 12), get_bmg_var_168_24_12t21)
        break
    case 22:
        ö(u32(o + 12), get_bmg_var_168_24_12t22)
        break
    case 23:
        ö(u32(o + 12), get_bmg_var_168_24_12t23)
        break
    case 26:
        ö(u32(o + 12), get_bmg_var_168_24_12t26)
        break
    case 33:
        ö(u32(o + 12), get_bmg_var_168_24_12t33)
        break
    case 34:
        ä(bmg_var_recursive_link, u32(o + 12), get_bmg_var_recursive_link)
        break
    case 36:
        ö(u32(o + 12), get_bmg_var_168_24_12t36)
        break
    case 39:
        ö(u32(o + 12), get_bmg_var_168_24_12t39)
        break
    case 41:
        ö(u32(o + 12), get_bmg_var_168_24_12t41)
        break
    case 42:
        ö(u32(o + 12), get_bmg_var_168_24_12t42)
        break
    case 43:
        ö(u32(o + 12), get_bmg_var_168_24_12t43)
        break
    case 44:
        ö(u32(o + 12), get_bmg_var_168_24_12t44)
        break
    default:
        if (u32(o + 12)) {
            sü(u32, 8, o, 12)
        }
    }

}
function get_bmg_var_168_24_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_var_168_24_12t1(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_var_168_24_12t1_0)

}

function get_bmg_var_168_24_12t1_0(o) {
    if (u8(o + 5) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_var_168_24_12t1_0_0)

}

function get_bmg_var_168_24_12t1_0_0(o) {
    if (u8(o + 9) || u8(o + 10) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 1, u32, 12], o)

    switch (u8(o + 8)) {
    case 1:
        switch (u32(o + 4)) {
        case 0:
            ä(bmg_world_12, u32(o + 0), get_bmg_world_12)
            break
        case 11:
            ä(bmg_world_84, u32(o + 0), get_bmg_world_84)
            break
        default:
            if (u32(o + 0)) {
                sü(u32, 4, o, 0)
            }
        }
        break
    case 4:
        //value?
        break
    default:
        if (u32(o + 0)) {
            ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 1, u32, 12], o)
        }
    }
}

function get_bmg_var_168_24_12t2(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    switch (u32(o + 0)) {
    case 1:
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t1)
        break
    case 4:
        //worldlink
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t4)
        break
    case 5:
        //worldlink
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t4)
        break
    case 6:
        //extended worldlink
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t6)
        break
    case 7:
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t7)
        break
    case 8:
        //worldlink
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t4)
        break
    case 9:
        //extended worldlink
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t6)
        break
    case 11:
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t11)
        break
    case 12:
        //worldlink
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t4)
        break
    case 14:
        //extended worldlink
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t6)
        break
    case 16:
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t16)
        break
    case 17:
        //worldlink
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t4)
        break
    case 19:
        //worldlink
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t4)
        break
    case 20:
        //worldlink
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t4)
        break
    case 21:
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t21)
        break
    case 100:
        //worldlink
        ö(u32(o + 4), get_bmg_var_168_24_12t2_4t4)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

}

function get_bmg_var_168_24_12t2_4t1(o) {
    if (u8(o + 1) !== 1 || u32(o + 12) || u8(o + 22) || u8(o + 23) || f32(o + 32) !== 100 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(bmg_world_84, u32(o + 4), get_bmg_world_84)
    switch (u8(o + 3)) {
    case 0:
        ö(u32(o + 16), get_bmg_var_168_24_12t2_4t1_16t0)
        break
    case 1:
        ö(u32(o + 16), get_bmg_var_168_24_12t2_4t1_16t1)
        break
    default:
        if (u32(o + 16)) {
            sü(u8, 0, o, 16)
        }
    }
    switch (u8(o + 20)) {
    case 0:
        ö(u32(o + 24), get_bmg_var_168_24_12t2_4t1_24t0)
        break
    case 1:
        ö(u32(o + 24), get_bmg_var_168_24_12t2_4t1_24t1)
        break
    default:
        if (u32(o + 24)) {
            sü(u8, 20, o, 24)
        }
    }
    //21 not work

}
function get_bmg_var_168_24_12t2_4t1_16t0(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
    switch (u8(o + 4)) {
    case 0:
        ä(bmg_world_12, u32(o + 0), get_bmg_world_12)
        break
    case 1:
        ä(bmg_world_20, u32(o + 0), get_bmg_world_20)
        break
    case 10:
        ä(bmg_world_68, u32(o + 0), get_bmg_world_68)
        break
    case 11:
        ä(bmg_world_84, u32(o + 0), get_bmg_world_84)
        break
    case 16:
        ä(bmg_world_120_0, u32(o + 0), get_bmg_world_120_0)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 4, o, 0)
        }
    }

}

function get_bmg_var_168_24_12t2_4t1_16t1(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_var_168_24_12t2_4t1_16t1_4)

}

function get_bmg_var_168_24_12t2_4t1_16t1_4(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 4), get_bmg_var_168_24_12t2_4t1_16t1_4_4)
    ö(u32(o + 4), get_bmg_extended_world_link)

}

function get_bmg_var_168_24_12t2_4t1_16t1_4_4(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_var_168_24_12t2_4t1_24t0(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28], o)

    switch (u8(o + 4)) {
    case 1:
        ä(bmg_world_20, u32(o + 0), get_bmg_world_20)
        break
    case 10:
        ä(bmg_world_68, u32(o + 0), get_bmg_world_68)
        break
    case 11:
        ä(bmg_world_84, u32(o + 0), get_bmg_world_84)
        break
    case 13:
        ä(bmg_world_92, u32(o + 0), get_bmg_world_92)
        break
    case 16:
        ä(bmg_world_120_0, u32(o + 0), get_bmg_world_120_0)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 4, o, 0)
        }
    }

}

function get_bmg_var_168_24_12t2_4t1_24t1(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_bmg_var_168_24_12t2_4t1_24t1_4)
    }

}

function get_bmg_var_168_24_12t2_4t1_24t1_4(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    ö(u32(o + 4), get_bmg_extended_world_link)

}

function get_bmg_var_168_24_12t2_4t4(o) {
    if (u8(o + 1) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u8(o + 21) || u8(o + 22) || u8(o + 23) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u8(o + 52) || u8(o + 54) || u8(o + 55) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_bmg_world_link)

}

function get_bmg_var_168_24_12t2_4t6(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_bmg_extended_world_link)

}

function get_bmg_var_168_24_12t2_4t7(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_var_168_24_12t2_4t11(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_bmg_world_link)
    ä(bmg_flag, u32(o + 48), get_bmg_flag)

}

function get_bmg_var_168_24_12t2_4t16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ä(bmg_flag, u32(o + 36), get_bmg_flag)

}

function get_bmg_var_168_24_12t2_4t21(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_extended_world_link)
    ä(bmg_some_random_section, u32(o + 12), get_bmg_some_random_section)

}

function get_bmg_var_168_24_12t4(o) {
    if (u32(o + 0) !== 16777216 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_var_168_24_12t4_4)

}

function get_bmg_var_168_24_12t4_4(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_var_168_24_12t4_4_8)

}

function get_bmg_var_168_24_12t4_4_8(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_var_168_24_12t5(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    // duplicate of another thing ?
    switch (u8(o + 4)) {
    case 1:
        ö(u32(o + 0), get_bmg_var_168_24_12t5_0t1)
        break
    case 2:
        ö(u32(o + 0), get_bmg_var_168_24_12t5_0t2)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 4, o, 0)
        }
    }
}
function get_bmg_var_168_24_12t5_0t1(o) {
    if (u8(o + 5) !== 1 || u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ä(bmg_interface, u32(o + 0), get_bmg_interface)
    ö(u32(o + 8), get_bmg_var_168_24_12t5_0t1_8)

}

function get_bmg_var_168_24_12t5_0t1_8(o) {
    if (u32(o + 0) || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 12), get_bmg_var_168_24_12t5_0t1_8_12)

}

function get_bmg_var_168_24_12t5_0t1_8_12(o) {
    if (u16(o + 14) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u16, 12, u16, 14, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_flag, u32(o + 8), get_bmg_flag)

}

function get_bmg_var_168_24_12t5_0t2(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_interface, u32(o + 4), get_bmg_interface)

}

function get_bmg_var_168_24_12t6(o) {
    if (u8(o + 8) !== 4 || u8(o + 9) !== 2 || u8(o + 10) !== 1 || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_var_168_24_12t6_0)
    ä(bmg_object, u32(o + 4), get_bmg_object)

}

function get_bmg_var_168_24_12t6_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 83886080 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_var_168_24_12t7(o) {
    if (u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    switch (u8(o + 0)) {
    case 4:
        ä(bmg_flag, u32(o + 4), get_bmg_flag)
        break
    case 7:
        ö(u32(o + 4), get_bmg_var_168_24_12t7_4t7)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

    switch (u8(o + 2)) {
    case 4:
        ä(bmg_flag, u32(o + 12), get_bmg_flag)
        break
    case 6:
        ö(u32(o + 12), get_bmg_var_168_24_12t7_12t6)
        break
    case 7:
        ö(u32(o + 12), get_bmg_var_168_24_12t7_12t7)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 2, o, 12)
        }
    }

}

function get_bmg_var_168_24_12t7_12t6(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 2 || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
}

function get_bmg_var_168_24_12t7_4t7(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_bmg_extended_world_link)
    ö(u32(o + 12), get_bmg_var_168_24_12t7_4t7_12)

}

function get_bmg_var_168_24_12t7_4t7_12(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_var_168_24_12t7_12t7(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 4027 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 12), get_bmg_var_168_24_12t7_12t7_12)

}

function get_bmg_var_168_24_12t7_12t7_12(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_var_168_24_12t8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_var_link_type, u32(o + 0), get_bmg_var_link_type)

}

function get_bmg_var_168_24_12t13(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_world_link)
    ä(bmg_world_44, u32(o + 8), get_bmg_world_44)

}

function get_bmg_var_168_24_12t14(o) {
    if (u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_flag, u32(o + 8), get_bmg_flag)

}

function get_bmg_var_168_24_12t15(o) {
    if (u32(o + 4) !== 2 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_var, u32(o + 0), get_bmg_var)

}

function get_bmg_var_168_24_12t16(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_extended_world_link)
    ä(bmg_world_12, u32(o + 12), get_bmg_world_12)
}

function get_bmg_var_168_24_12t17(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_var_168_24_12t18(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_something, u32(o + 4), get_bmg_something)
    ö(u32(o + 8), get_bmg_var_168_24_12t18_8)

}

function get_bmg_var_168_24_12t18_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_text, u32(o + 0), get_bmg_text)

}

function get_bmg_var_168_24_12t19(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)

    ö(u32(o + 4), get_bmg_world_link)

}

function get_bmg_var_168_24_12t21(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_var_168_24_12t21_0)
    ä(bmg_world_12, u32(o + 4), get_bmg_world_12)
    // 4 = something else? get_bmg_var_168_24_12t21_4
    ö(u32(o + 12), get_bmg_var_168_24_12t21_12)

}

function get_bmg_var_168_24_12t21_0(o) {
    if (u32(o + 0) !== 15859168 || u32(o + 4) !== 10 || u32(o + 8) !== 117440512 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_flag, u32(o + 0), get_bmg_flag)

}

function get_bmg_var_168_24_12t21_12(o) {
    if (u32(o + 0) !== 15392640 || u8(o + 4) !== 1 || u8(o + 5) || u8(o + 6) || u8(o + 7) !== 3 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || f32(o + 36) !== 180 || u32(o + 40) || f32(o + 44) !== 1 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, f32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ä(bmg_model_anim_2_type_b, u32(o + 0), get_bmg_model_anim_2_type_b)

}

function get_bmg_var_168_24_12t22(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    switch (u8(o + 0)) {
    case 0:
        ö(u32(o + 4), get_bmg_world_link)
        break
    case 1:
        ö(u32(o + 4), get_bmg_extended_world_link)
        break
    case 2:
        ö(u32(o + 4), get_bmg_extended_world_link)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

}

function get_bmg_var_168_24_12t23(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_unknown, u32(o + 0), get_bmg_unknown)
    ö(u32(o + 4), get_bmg_extended_world_link)

}

function get_bmg_var_168_24_12t26(o) {
    if (u8(o + 12) !== 1 || u8(o + 15) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_var_168_24_12t26_0)
    ö(u32(o + 8), get_bmg_var_168_24_12t26_8)
    ö(u32(o + 16), get_bmg_var_168_24_12t26_16)

}

function get_bmg_var_168_24_12t26_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_var_168_24_12t26_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_flag, u32(o + 0), get_bmg_flag)

}

function get_bmg_var_168_24_12t26_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 257 || u8(o + 12) !== 1 || u8(o + 13) || u8(o + 14) || u8(o + 15) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_var_168_24_12t33(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_var_168)

}

function get_bmg_var_168_24_12t36(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_world_12, u32(o + 0), get_bmg_world_12)
    ä(bmg_world_12, u32(o + 4), get_bmg_world_12)

}

function get_bmg_var_168_24_12t39(o) {
    if (u32(o + 0) !== 15859168 || u8(o + 4) !== 50 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_flag, u32(o + 0), get_bmg_flag)

}

function get_bmg_var_168_24_12t41(o) {
    if (u32(o + 12) !== 2 || u32(o + 20) || u32(o + 24) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 0), get_bmg_var_168_24_12t41_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_bmg_var_168_24_12t41_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 4), get_bmg_var_168_24_12t41_16)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 4), get_bmg_var_168_24_12t41_32)
    }

}

function get_bmg_var_168_24_12t41_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_var_168_24_12t41_8(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8], o)

    ö(u32(o + 0), get_bmg_var_168_24_12t41_8_0)
    switch (u8(o + 4)) {
    case 0:
        ö(u32(o + 8), get_bmg_var_168_24_12t41_8_8t0)
        break
    case 1:
        ö(u32(o + 8), get_bmg_var_168_24_12t41_8_8t1)
        break
    default:
        if (u32(o + 8)) {
            sü(u8, 4, o, 8)
        }
    }

}

function get_bmg_var_168_24_12t41_8_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_var_168_24_12t41_8_8t0(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_bmg_var_168_24_12t41_8_8t0_4)
    }

}

function get_bmg_var_168_24_12t41_8_8t0_4(o) {
    if (u32(o + 8) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_var_168_24_12t41_8_8t0_4_4)
    }
    ö(u32(o + 12), get_bmg_var_168_24_12t41_8_8t0_4_12)

}

function get_bmg_var_168_24_12t41_8_8t0_4_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}
function get_bmg_var_168_24_12t41_8_8t0_4_12(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 1 || f32(o + 12) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_var_168_24_12t41_8_8t1(o) {
    if (u32(o + 0) !== 1105280 || u32(o + 4) !== 1105408 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_font, u32(o + 0), get_bmg_font)
    ä(bmg_text, u32(o + 4), get_bmg_text)

}

function get_bmg_var_168_24_12t41_16(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_text, u32(o + 0), get_bmg_text)

}

function get_bmg_var_168_24_12t41_32(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_sound_controls, u32(o + 0), get_bmg_sound_controls)

}

function get_bmg_var_168_24_12t42(o) {
    if (u32(o + 4) || f32(o + 8) !== 30 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_var_168_24_12t42_0)

}

function get_bmg_var_168_24_12t42_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_var_168_24_12t43(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_flag, u32(o + 0), get_bmg_flag)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 20), get_bmg_var_168_24_12t43_8)
    }

}

function get_bmg_var_168_24_12t43_8(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, u32, 16], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 28), get_bmg_var_168_24)
    }

}

function get_bmg_var_168_24_12t44(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_var_168_24_12t44_0)
    ä(bmg_model_sub_link, u32(o + 4), get_bmg_model_sub_link)

}

function get_bmg_var_168_24_12t44_0(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_extended_world_link)

}

function get_bmg_var_link_type(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    switch (u8(o + 4)) {
    case 0:
        ö(u32(o + 0), get_bmg_var_link_type_0t0)
        break
    case 2:
        ö(u32(o + 0), get_bmg_var_link_type_0t2)
        break
    case 4:
        ö(u32(o + 0), get_bmg_var_link_type_0t4)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 4, o, 0)
        }
    }

}
function get_bmg_var_link_type_0t0(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_var_link_type_0t2(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_sound_controls, u32(o + 4), get_bmg_sound_controls)

}
function get_bmg_var_link_type_0t4(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_var_recursive_link(o) {
    if (u8(o + 4) !== 1 || u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_var_recursive_link_0)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 28), get_bmg_var_168_24)
    }

}

function get_bmg_var_recursive_link_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_flag(o) {
    if (u32(o + 4) || u8(o + 24) || u32(o + 32) || u32(o + 36) || u8(o + 41) || u8(o + 43) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, f32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44], o)

    ö(u32(o + 8), get_bmg_flag_8)

    switch (u32(o + 16)) {
    case 0:
        ö(u32(o + 20), get_bmg_flag_20t0)
        break
    case 1:
        ö(u32(o + 20), get_bmg_flag_20t1)
        break
    case 2:
        ö(u32(o + 20), get_bmg_flag_20t2)
        break
    case 3:
        ö(u32(o + 20), get_bmg_flag_20t3)
        break
    case 4:
        ö(u32(o + 20), get_bmg_flag_20t4)
        break
    case 6:
        ö(u32(o + 20), get_bmg_flag_20t6)
        break
    case 8:
        ö(u32(o + 20), get_bmg_flag_20t8)
        break
    case 9:
        ö(u32(o + 20), get_bmg_flag_20t9)
        break
    case 10:
        ö(u32(o + 20), get_bmg_flag_20t10)
        break
    default:
        if (u32(o + 20)) {
            sü(u32, 16, o, 20)
        }
    }

}

function get_bmg_flag_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_flag_20t0(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)
}
function get_bmg_flag_20t1(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_flag_20t2(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_flag_20t3(o) {
    if (u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_flag_20t3_4)

}

function get_bmg_flag_20t3_4(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_flag_20t4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bmg_flag_20t4_4)
    }

}

function get_bmg_flag_20t4_4(o) {
    /*ü(1, [u32, 0, f32, 4, u32, 8], o)*/

    ä(bmg_flag, u32(o + 8), get_bmg_flag)

}
function get_bmg_flag_20t6(o) {
    if (u8(o + 10) || u8(o + 11) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_flag, u32(o + 16), get_bmg_flag)

}
function get_bmg_flag_20t8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_flag, u32(o + 0), get_bmg_flag)

}
function get_bmg_flag_20t9(o) {
    if (u32(o + 0) || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 12), get_bmg_flag_20t9_12)

}

function get_bmg_flag_20t9_12(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_flag_20t10(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_flag_20t10_4)

}

function get_bmg_flag_20t10_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    //yes Z
}

function get_bmg_another_world_section(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    // unordered
    switch (u8(o + 4)) {
    case 1:
        ö(u32(o + 0), get_bmg_another_world_section_0t1)
        break
    case 2:
        ö(u32(o + 0), get_bmg_another_world_section_0t2)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 4, o, 0)
        }
    }

}

function get_bmg_another_world_section_0t1(o) {
    if (u32(o + 4) !== 4 || f32(o + 20) !== 750 || f32(o + 24) !== 100 || u32(o + 28) !== 1 || u32(o + 36) !== 5 || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(bmg_model_sub_link, u32(o + 0), get_bmg_model_sub_link)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_bmg_another_world_section_0t1_8)
    }
    ö(u32(o + 32), get_bmg_another_world_section_0t1_32)
    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 12), get_bmg_another_world_section_0t1_40)
    }

}

function get_bmg_another_world_section_0t1_8(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)

}

function get_bmg_another_world_section_0t1_32(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_another_world_section_0t1_40(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_another_world_section_0t2(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_model_sub_link, u32(o + 4), get_bmg_model_sub_link)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 8), get_bmg_another_world_section_0t2_12)
    }
    ö(u32(o + 16), get_bmg_another_world_section_0t2_16)

}

function get_bmg_another_world_section_0t2_12(o) {
    if (u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    switch (u8(o + 1)) {
    case 0:
        ö(u32(o + 4), get_bmg_another_world_section_0t2_12_4t0)
        break
    case 1:
        ö(u32(o + 4), get_bmg_another_world_section_0t2_12_4t1)
        break
    case 2:
        ö(u32(o + 4), get_bmg_another_world_section_0t2_12_4t2)
        break
    case 3:
        ö(u32(o + 4), get_bmg_another_world_section_0t2_12_4t3)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 1, o, 4)
        }
    }

}

function get_bmg_another_world_section_0t2_12_4t0(o) {
    if (u8(o + 10) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, u8, 20, u8, 21, u8, 22, u8, 23, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u32, 60, u32, 64, u32, 68, u32, 72, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_bmg_another_world_section_0t2_12_4t0_4)
    }
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 12), get_bmg_another_world_section_0t2_12_4t0_72)
    }
    ö(u32(o + 84), get_bmg_another_world_section_0t2_12_4t0_84)
    ö(u32(o + 88), get_bmg_another_world_section_0t2_12_4t0_88)

}

function get_bmg_another_world_section_0t2_12_4t0_4(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_bmg_another_world_section_0t2_12_4t0_4_4)

}

function get_bmg_another_world_section_0t2_12_4t0_4_4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_another_world_section_0t2_12_4t0_4_4_4)
    }

}

function get_bmg_another_world_section_0t2_12_4t0_4_4_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)

}

function get_bmg_another_world_section_0t2_12_4t0_72(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_another_world_section_0t2_12_4t0_84(o) {
    if (u32(o + 12) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_bmg_another_world_section_0t2_12_4t0_88(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_another_world_section_0t2_12_4t1(o) {
    if (u32(o + 28) !== 1 || u32(o + 60) || u32(o + 108))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u8, 36, u8, 37, u8, 38, u8, 39, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60, f32, 64, f32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_bmg_another_world_section_0t2_12_4t1_4)
    }
    for (let i = 0; i < u32(o + 84); i++) {
        ö(u32(o + 88) + (i * 12), get_bmg_another_world_section_0t2_12_4t1_88)
    }
    ö(u32(o + 100), get_bmg_another_world_section_0t2_12_4t1_100)
    ö(u32(o + 104), get_bmg_another_world_section_0t2_12_4t1_104)

}

function get_bmg_another_world_section_0t2_12_4t1_4(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_bmg_another_world_section_0t2_12_4t1_4_4)

}

function get_bmg_another_world_section_0t2_12_4t1_4_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_another_world_section_0t2_12_4t1_4_4_4)
    }

}

function get_bmg_another_world_section_0t2_12_4t1_4_4_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)
}

function get_bmg_another_world_section_0t2_12_4t1_88(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_another_world_section_0t2_12_4t1_100(o) {
    if (u32(o + 12) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_bmg_another_world_section_0t2_12_4t1_104(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28) || f32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44], o)
}

function get_bmg_another_world_section_0t2_12_4t2(o) {
    if (u8(o + 10) || u8(o + 38) || u8(o + 39) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u8, 36, u8, 37, u8, 38, u8, 39, f32, 40, f32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u32, 56, u32, 60, u32, 64, f32, 68, f32, 72, f32, 76, f32, 80, u32, 84, u32, 88, u32, 92], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_bmg_another_world_section_0t2_12_4t2_4)
    }
    ö(u32(o + 64), get_bmg_another_world_section_0t2_12_4t2_64)

}

function get_bmg_another_world_section_0t2_12_4t2_4(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_bmg_another_world_section_0t2_12_4t2_4_4)

}

function get_bmg_another_world_section_0t2_12_4t2_4_4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_another_world_section_0t2_12_4t2_4_4_4)
    }

}

function get_bmg_another_world_section_0t2_12_4t2_4_4_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)

}

function get_bmg_another_world_section_0t2_12_4t2_64(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_another_world_section_0t2_12_4t3(o) {
    if (u8(o + 13) || u8(o + 14) || u8(o + 15))
        ü(1, [u32, 0, u32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 80), get_bmg_another_world_section_0t2_12_4t3_4)
    }

}

function get_bmg_another_world_section_0t2_12_4t3_4(o) {
    if (u32(o + 28) || u8(o + 45) || u8(o + 46) || u8(o + 47) || u32(o + 60) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 0), get_bmg_another_world_section_0t2_12_4t3_4_0)
    ö(u32(o + 4), get_bmg_another_world_section_0t2_12_4t3_4_0)
    ö(u32(o + 8), get_bmg_another_world_section_0t2_12_4t3_4_0)
    ä(bmg_model_link, u32(o + 12), get_bmg_model_link)
    ä(bmg_model_link, u32(o + 32), get_bmg_model_link)
    //
    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 20), get_bmg_another_world_section_0t2_12_4t3_4_40)
    }
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 20), get_bmg_another_world_section_0t2_12_4t3_4_40)
    }
    ö(u32(o + 72), get_bmg_another_world_section_0t2_12_4t3_4_72)

}

function get_bmg_another_world_section_0t2_12_4t3_4_0(o) {
    if (u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(bmg_model_sub_link, u32(o + 0), get_bmg_model_sub_link)
    ä(bmg_model_link, u32(o + 4), get_bmg_model_link)
    ö(u32(o + 12), get_bmg_another_world_section_0t2_12_4t3_4_0_12)

}

function get_bmg_another_world_section_0t2_12_4t3_4_0_12(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || f32(o + 28) !== 1 || u32(o + 32) || f32(o + 36) !== 1 || u32(o + 40) || u8(o + 44) !== 179 || u8(o + 45) !== 59 || u8(o + 46) !== 189 || u8(o + 47) !== 46 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28, u32, 32, f32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ä(bmg_model_link, u32(o + 4), get_bmg_model_link)
    ö(u32(o + 8), get_bmg_another_world_section_0t2_12_4t3_4_0_12_8)

}

function get_bmg_another_world_section_0t2_12_4t3_4_0_12_8(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_another_world_section_0t2_12_4t3_4_40(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)*/
    ä(bmg_interface, u32(o + 8), get_bmg_interface)
    ä(bmg_flag, u32(o + 12), get_bmg_flag)

}

function get_bmg_another_world_section_0t2_12_4t3_4_72(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_another_world_section_0t2_16(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_another_world_section_0t2_16_4)
    ö(u32(o + 8), get_bmg_another_world_section_0t2_16_8)

}

function get_bmg_another_world_section_0t2_16_4(o) {
    if (u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bmg_another_world_section_0t2_16_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_another_world_section_0t2_16_8_4)

}

function get_bmg_another_world_section_0t2_16_8_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_another_world_section_0t2_16_8_4_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 24), get_bmg_another_world_section_0t2_16_8_4_8)
    }

}

function get_bmg_another_world_section_0t2_16_8_4_0(o) {
    if (u32(o + 0) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_another_world_section_0t2_16_8_4_0_4)
    ö(u32(o + 12), get_bmg_another_world_section_0t2_16_8_4_0_12)

}

function get_bmg_another_world_section_0t2_16_8_4_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_another_world_section_0t2_16_8_4_0_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_another_world_section_0t2_16_8_4_8(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12) || f32(o + 16) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20], o)

    ö(u32(o + 8), get_bmg_another_world_section_0t2_16_8_4_8_8)
    switch (u8(o + 1)) {
    case 0:
        ö(u32(o + 20), get_bmg_another_world_section_0t2_16_8_4_8_20t0)
        break
    case 2:
        // value
        break
    default:
        if (u32(o + 20)) {
            sü(u8, 1, o, 20)
        }
    }

}

function get_bmg_another_world_section_0t2_16_8_4_8_8(o) {
    if (u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44], o)
}
function get_bmg_another_world_section_0t2_16_8_4_8_20t0(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_world_settings(o) {
    if (u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u8(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 68) || f32(o + 72) !== 300 || f32(o + 100) !== 10000000 || f32(o + 104) !== 10000000 || u8(o + 109) || u32(o + 152) || u32(o + 156) || f32(o + 164) !== 1 || f32(o + 168) !== 1 || f32(o + 172) !== 0.5 || f32(o + 176) !== 0.0010000000474974513 || u8(o + 180) || u8(o + 182) !== 1 || f32(o + 212) !== 100 || f32(o + 216) !== 1 || u32(o + 232) || u32(o + 236))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, f32, 100, f32, 104, u8, 108, u8, 109, u8, 110, u8, 111, u32, 112, f32, 116, f32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, f32, 160, f32, 164, f32, 168, f32, 172, f32, 176, u8, 180, u8, 181, u8, 182, u8, 183, u32, 184, f32, 188, f32, 192, f32, 196, f32, 200, f32, 204, f32, 208, f32, 212, f32, 216, f32, 220, u32, 224, u32, 228, u32, 232, u32, 236], o)
    ß('p_texture', o, 88)
    ß('p_texture', o, 92)
    ß('p_texture', o, 96)
    ß('p_texture', o, 184)

    ö(u32(o + 0), get_bmg_world_settings_0)
    ö(u32(o + 4), get_bmg_world_settings_4)
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 64), get_bmg_world_settings_60)
    }
    ö(u32(o + 64), get_bmg_world_settings_64)
    ö(u32(o + 76), get_bmg_world_settings_76)
    ö(u32(o + 80), get_bmg_world_settings_80)
    ö(u32(o + 84), get_bmg_world_settings_84)
    ö(u32(o + 112), get_bmg_world_settings_112)
    ö(u32(o + 124), get_bmg_world_settings_124)
    for (let i = 0; i < u32(o + 128); i++) {
        ö(u32(o + 132) + (i * 4), get_bmg_world_settings_132)
    }
    for (let i = 0; i < u32(o + 136); i++) {
        ö(u32(o + 140) + (i * 4), get_bmg_world_settings_132)
    }
    for (let i = 0; i < u32(o + 144); i++) {
        ö(u32(o + 148) + (i * 4), get_bmg_world_settings_132)
    }
    ä(bmg_some_random_section, u32(o + 224), get_bmg_some_random_section)
    ä(bmg_font, u32(o + 228), get_bmg_font)

}

function get_bmg_world_settings_0(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_interface, u32(o + 0), get_bmg_interface)

}

function get_bmg_world_settings_4(o) {
    if (u32(o + 8) || u8(o + 23) || u32(o + 28) || f32(o + 40) !== 100 || f32(o + 44) !== 360 || u32(o + 48) || f32(o + 52) !== 1000 || f32(o + 56) !== 1000 || f32(o + 60) !== -180 || f32(o + 64) !== 180 || f32(o + 68) !== 3000 || f32(o + 72) !== 300 || f32(o + 76) !== 70)
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, f32, 24, u32, 28, u32, 32, u32, 36, f32, 40, f32, 44, u32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76], o)

    ä(bmg_interface, u32(o + 0), get_bmg_interface)
    ä(bmg_interface, u32(o + 4), get_bmg_interface)
    ä(bmg_interface, u32(o + 16), get_bmg_interface)

    ö(u32(o + 32), get_bmg_world_settings_4_32)
    ö(u32(o + 36), get_bmg_world_settings_4_36)

}

function get_bmg_world_settings_4_32(o) {
    if (u32(o + 12) || u32(o + 16) || u8(o + 20) !== 70 || u8(o + 21) !== 28 || u8(o + 22) !== 64 || u8(o + 23) || f32(o + 24) !== 3000 || f32(o + 28) !== 1500 || f32(o + 32) !== 0.15000000596046448 || f32(o + 36) !== 1 || f32(o + 40) !== 3 || f32(o + 44) !== 1 || f32(o + 48) !== 0.5 || f32(o + 52) !== 0.5 || u32(o + 56) !== 20 || u32(o + 60) !== 1000)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, u32, 56, u32, 60], o)
    ß('p_model', o, 0)
    ß('p_model', o, 4)

    ä(bmg_unknown, u32(o + 8), get_bmg_unknown)

}

function get_bmg_world_settings_4_36(o) {
    if (u32(o + 20) || f32(o + 28) !== 5000 || f32(o + 32) !== 5000 || f32(o + 36) !== 5000 || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_bmg_world_settings_4_36_4)
    }

}

function get_bmg_world_settings_4_36_4(o) {
    if (u32(o + 4) !== 2 || u32(o + 12) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)

    ä(bmg_model_sub_link, u32(o + 0), get_bmg_model_sub_link)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 8), get_bmg_world_settings_4_36_4_8)
    }

}

function get_bmg_world_settings_4_36_4_8(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4], o)

    ö(u32(o + 4), get_bmg_world_settings_4_36_4_8_4)

}

function get_bmg_world_settings_4_36_4_8_4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_world_settings_4_36_4_8_4_4)
    }

}

function get_bmg_world_settings_4_36_4_8_4_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)

}

function get_bmg_world_settings_60(o) {
    if (u8(o + 3) || u32(o + 4) || f32(o + 12) !== 50 || u32(o + 32) || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 1 || f32(o + 48) !== 100 || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, f32, 52, u32, 56, u32, 60], o)
}
function get_bmg_world_settings_64(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_world_settings_76(o) {
    if (u8(o + 0) !== 7 || u8(o + 1) !== 11 || u8(o + 2) !== 24 || u8(o + 3) !== 84 || f32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
}
function get_bmg_world_settings_80(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_bmg_world_settings_84(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_world_settings_112(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_world_settings_124(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_bmg_world_settings_132(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_bmg_world_settings_132_0)

}

function get_bmg_world_settings_132_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_some_random_section(o) {
    /*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_bmg_some_random_section_4)
    ö(u32(o + 8), get_bmg_some_random_section_8)
    ö(u32(o + 12), get_bmg_some_random_section_12)

}

function get_bmg_some_random_section_4(o) {
    if (u8(o + 1) !== 5 || u32(o + 12) !== 100 || u8(o + 21) !== 1 || u8(o + 22) || u8(o + 29) || u8(o + 30) || u8(o + 31) || u32(o + 32) !== 100 || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, f32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_bmg_some_random_section_4_8)
    ö(u32(o + 24), get_bmg_some_random_section_4_8)

}

function get_bmg_some_random_section_4_8(o) {
    if (u8(o + 2) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_some_random_section_8(o) {
    if (u8(o + 4) !== 5 || u32(o + 12) !== 100 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_bmg_some_random_section_8_8)

}

function get_bmg_some_random_section_8_8(o) {
    if (u8(o + 2) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_some_random_section_12(o) {
    if (u32(o + 0) !== 1 || u8(o + 8) || u8(o + 11) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_some_random_section_12_4)
    ö(u32(o + 12), get_bmg_some_random_section_12_12)

}

function get_bmg_some_random_section_12_4(o) {
    if (u8(o + 4) !== 5 || u8(o + 7) || u8(o + 37) || u8(o + 38) || u8(o + 39) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_bmg_some_random_section_12_4_8)

}

function get_bmg_some_random_section_12_4_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_some_random_section_12_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 4), get_bmg_some_random_section_12_12_4)

}

function get_bmg_some_random_section_12_12_4(o) {
    if (u8(o + 4) !== 5 || u8(o + 5) !== 2 || u8(o + 6) !== 2 || u8(o + 7) || u32(o + 12) !== 33 || f32(o + 16) !== 20 || f32(o + 20) !== 150 || f32(o + 24) !== 200 || f32(o + 28) !== 9900 || f32(o + 32) !== 10000 || u8(o + 36) !== 1 || u8(o + 37) || u8(o + 38) || u8(o + 39) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 0)

    ö(u32(o + 8), get_bmg_some_random_section_12_12_4_8)

}

function get_bmg_some_random_section_12_12_4_8(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) || u8(o + 2) || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_object(o) {
    if (u32(o + 0) || u32(o + 8) || u8(o + 16) || u8(o + 17) || u8(o + 18) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u8(o + 60) || u8(o + 63) || u32(o + 64) || u32(o + 68) || u32(o + 92) || u8(o + 96) || u8(o + 97) !== 1 || u8(o + 98) || u32(o + 112) || u8(o + 116) !== 255 || u8(o + 117) !== 255 || u8(o + 118) !== 255 || u8(o + 119) !== 255 || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u8, 60, u8, 61, u8, 62, u8, 63, u32, 64, u32, 68, u32, 72, f32, 76, f32, 80, f32, 84, u32, 88, u32, 92, u8, 96, u8, 97, u8, 98, u8, 99, u32, 100, u32, 104, u32, 108, u32, 112, u8, 116, u8, 117, u8, 118, u8, 119, u32, 120, u32, 124], o)

    switch (u8(o + 19)) {
    case 150:
        ö(u32(o + 4), get_bmg_object_4t150)
        break
    case 151:
        ö(u32(o + 4), get_bmg_object_4t151)
        break
    case 153:
        ö(u32(o + 4), get_bmg_object_4t153)
        break
    case 155:
        ö(u32(o + 4), get_bmg_object_4t155)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 19, o, 4)
        }
    }

    ö(u32(o + 44), get_bmg_object_44)
    ö(u32(o + 72), get_bmg_object_72)
    ä(bmg_unknown, u32(o + 88), get_bmg_unknown)

    ä(bmg_text, u32(o + 100), get_bmg_text)

    for (let i = 0; i < u32(o + 104); i++) {
        ö(u32(o + 108) + (i * 64), get_bmg_mysterious)
    }

}
function get_bmg_object_4t150(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_object_4t151(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_object_4t153(o) {
    if (u32(o + 0) !== 1 || u32(o + 12) || f32(o + 16) !== 2000 || u32(o + 20) !== 50 || u32(o + 24) !== 3 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_object_4t153_4)
    ö(u32(o + 8), get_bmg_object_4t153_8)

}

function get_bmg_object_4t153_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_world_asdf, u32(o + 0), get_bmg_world_asdf)

}

function get_bmg_object_4t153_8(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_object_4t153_8_4)

}

function get_bmg_object_4t153_8_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_object_4t155(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_bmg_object_4t155_8)

}

function get_bmg_object_4t155_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_object_44(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_object_44_4)
    ö(u32(o + 8), get_bmg_object_44_8)

}

function get_bmg_object_44_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bmg_object_44_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_object_72(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_flag, u32(o + 0), get_bmg_flag)

}

function get_bmg_strange(o) {
    if (u8(o + 8) !== 1 || u8(o + 10) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_bmg_strange_4)
    ä(bmg_sound_controls, u32(o + 28), get_bmg_sound_controls)

}

function get_bmg_strange_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_unknown, u32(o + 0), get_bmg_unknown)

}

function get_bmg_unknown(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_bmg_unknown_4)
    }

}

function get_bmg_unknown_4(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    switch (u32(o + 0)) {
    case 1:
        ä(bmg_unknown_thing, u32(o + 4), get_bmg_unknown_thing)
        break
    case 2:
        ä(bmg_world_asdf, u32(o + 4), get_bmg_world_asdf)
        break
    case 3:
        ä(bmg_unknown, u32(o + 4), get_bmg_unknown)
        break
    case 4:
        ö(u32(o + 4), get_bmg_unknown_4_4t4)
        break
    case 5:
        ä(bmg_unknown_idk_sec, u32(o + 4), get_bmg_unknown_idk_sec)
        break
    case 6:
        ä(bmg_idk, u32(o + 4), get_bmg_idk)
        break
    case 9:
        ä(bmg_sound_section, u32(o + 4), get_bmg_sound_section)
        break
    case 25:
        ä(bmg_object, u32(o + 4), get_bmg_object)
        break
    case 26:
        ä(bmg_sound_controls, u32(o + 4), get_bmg_sound_controls)
        break
    case 31:
        ä(bmg_activator, u32(o + 4), get_bmg_activator)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

    switch (u32(o + 0)) {
    case 1:
        ö(u32(o + 8), get_bmg_unknown_4_8t1)
        break
    case 2:
        ö(u32(o + 8), get_bmg_unknown_4_8t2)
        break
    case 3:
        ö(u32(o + 8), get_bmg_unknown_4_8t3)
        break
    case 4:
        ö(u32(o + 8), get_bmg_unknown_4_8t4)
        break
    case 5:
        ö(u32(o + 8), get_bmg_unknown_4_8t5)
        break
    case 6:
        ö(u32(o + 8), get_bmg_unknown_4_8t6)
        break
    case 9:
        ö(u32(o + 8), get_bmg_unknown_4_8t9)
        break
    case 25:
        ö(u32(o + 8), get_bmg_unknown_4_8t25)
        break
    case 26:
        ö(u32(o + 8), get_bmg_unknown_4_8t26)
        break
    case 31:
        ö(u32(o + 8), get_bmg_unknown_4_8t31)
        break
    case 33:
        ö(u32(o + 8), get_bmg_unknown_4_8t33)
        break
    case 34:
        ö(u32(o + 8), get_bmg_unknown_4_8t34)
        break
    case 35:
        ö(u32(o + 8), get_bmg_unknown_4_8t35)
        break
    case 36:
        ö(u32(o + 8), get_bmg_unknown_4_8t36)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 0, o, 8)
        }
    }

}

function get_bmg_unknown_4_4t4(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 8905024 || u8(o + 8) !== 1 || u8(o + 9) !== 1 || u8(o + 10) !== 1 || u8(o + 11) || u32(o + 12) !== 10 || u32(o + 16) !== 400 || u32(o + 20) !== 200 || u32(o + 24) || u32(o + 28) || u8(o + 32) !== 72 || u8(o + 33) !== 244 || u8(o + 34) !== 36 || u8(o + 35) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_bmg_unknown_4_4t4_4)

}

function get_bmg_unknown_4_4t4_4(o) {
    if (u32(o + 0) !== 8905056 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_unknown, u32(o + 0), get_bmg_unknown)

}

function get_bmg_unknown_4_8t1(o) {
    if (u32(o + 20) || u8(o + 41) || u8(o + 43) || u32(o + 44) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 48), get_bmg_unknown_4_8t1_48)
    switch (u8(o + 42)) {
    case 1:
        ö(u32(o + 52), get_bmg_unknown_4_8t1_52t1)
        break
    case 2:
        ö(u32(o + 52), get_bmg_unknown_4_8t1_52t2)
        break
    default:
        if (u32(o + 52)) {
            sü(u8, 42, o, 52)
        }
    }

}
function get_bmg_unknown_4_8t1_48(o) {
    if (u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_unknown_4_8t1_52t1(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_unknown_4_8t1_52t2(o) {
    if (u32(o + 8))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 12), get_bmg_unknown_4_8t1_52t2_12)

}

function get_bmg_unknown_4_8t1_52t2_12(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 1 || f32(o + 8) !== 1 || u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}

function get_bmg_unknown_4_8t2(o) {
    if (u32(o + 4) || u32(o + 16) || u32(o + 20) || u32(o + 28) || u32(o + 36) || u8(o + 41) || u8(o + 43) || u32(o + 44) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 48), get_bmg_unknown_4_8t2_48)
    switch (u8(o + 42)) {
    case 1:
        ö(u32(o + 52), get_bmg_unknown_4_8t2_52t1)
        break
    case 2:
        ö(u32(o + 52), get_bmg_unknown_4_8t2_52t2)
        break
    default:
        if (u32(o + 52)) {
            sü(u8, 42, o, 52)
        }
    }

}

function get_bmg_unknown_4_8t2_48(o) {
    if (u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_unknown_4_8t2_52t1(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_unknown_4_8t2_52t2(o) {
    if (f32(o + 0) !== 250 || u32(o + 4) || u32(o + 8) || u32(o + 12) !== 6613152 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 12), get_bmg_unknown_4_8t2_52t2_12)

}

function get_bmg_unknown_4_8t2_52t2_12(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 1 || f32(o + 8) !== 1 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_unknown_4_8t3(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 12) || u32(o + 20) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_bmg_unknown_4_8t4(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_bmg_unknown_4_8t5(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_unknown_4_8t6(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_unknown_4_8t9(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_unknown_4_8t25(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_unknown_4_8t25_4)

}

function get_bmg_unknown_4_8t25_4(o) {
    if (f32(o + 0) !== -200 || f32(o + 4) !== 400 || f32(o + 8) !== -200 || f32(o + 12) !== 400 || f32(o + 16) !== -200 || f32(o + 20) !== 400 || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_bmg_unknown_4_8t26(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_unknown_4_8t31(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_unknown_4_8t33(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12], o)

    ä(bmg_flag, u32(o + 0), get_bmg_flag)

}
function get_bmg_unknown_4_8t34(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_interface, u32(o + 4), get_bmg_interface)
    ä(bmg_interface, u32(o + 8), get_bmg_interface)

    ö(u32(o + 16), get_bmg_unknown_4_8t34_16)

}

function get_bmg_unknown_4_8t34_16(o) {
    if (u32(o + 0) || u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 12), get_bmg_unknown_4_8t34_16_12)

}

function get_bmg_unknown_4_8t34_16_12(o) {
    if (u8(o + 0) || u8(o + 1) !== 4 || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_unknown_4_8t35(o) {
    if (u32(o + 0) !== 7755072 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_flag, u32(o + 0), get_bmg_flag)

}

function get_bmg_unknown_4_8t36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_unknown_4_8t36_4)
    //amount ? or maybe just 
}

function get_bmg_unknown_4_8t36_4(o) {
    if (u32(o + 0) || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    switch (u8(o + 4)) {
    case 0:
        ö(u32(o + 8), get_bmg_unknown_4_8t36_4_8t0)
        break
    case 2:
        ö(u32(o + 8), get_bmg_unknown_4_8t36_4_8t2)
        break
    default:
        if (u32(o + 8)) {
            sü(u8, 4, o, 8)
        }
    }

}

function get_bmg_unknown_4_8t36_4_8t0(o) {
    if (u32(o + 0) !== 117440512 || u32(o + 4) !== 2477088 || f32(o + 8) !== 1 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_unknown_4_8t36_4_8t0_4)

}

function get_bmg_unknown_4_8t36_4_8t0_4(o) {
    if (u32(o + 0) !== 4022 || u32(o + 4) !== 2477120 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_unknown_4_8t36_4_8t0_4_4)

}

function get_bmg_unknown_4_8t36_4_8t0_4_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_unknown_4_8t36_4_8t2(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_unknown_4_8t36_4_8t2_0)

}

function get_bmg_unknown_4_8t36_4_8t2_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_unknown_idk_sec(o) {
    if (u8(o + 4) || u8(o + 5) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u8(o + 46) || u8(o + 47))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47], o)

    ö(u32(o + 0), get_bmg_unknown_idk_sec_0)
    ö(u32(o + 24), get_bmg_unknown_idk_sec_24)
    ö(u32(o + 32), get_bmg_unknown_idk_sec_32)
    ö(u32(o + 40), get_bmg_unknown_idk_sec_40)

}
function get_bmg_unknown_idk_sec_0(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_unknown_idk_sec_24(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bmg_unknown_idk_sec_24_4)
    }
}

function get_bmg_unknown_idk_sec_24_4(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}

function get_bmg_unknown_idk_sec_32(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_unknown_idk_sec_32_4)

}

function get_bmg_unknown_idk_sec_32_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_interface_small_sec, u32(o + 0), get_bmg_interface_small_sec)

}

function get_bmg_unknown_idk_sec_40(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_bmg_unknown_thing(o) {
    if (u8(o + 21) !== 10 || u8(o + 22) || u8(o + 23) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 12), get_bmg_unknown_thing_16)
    }
    switch (u8(o + 20)) {
    case 0:
        ö(u32(o + 24), get_bmg_unknown_thing_24t0)
        break
    case 1:
        ö(u32(o + 24), get_bmg_unknown_thing_24t1)
        break
    case 2:
        ö(u32(o + 24), get_bmg_unknown_thing_24t2)
        break
    default:
        if (u32(o + 24)) {
            sü(u8, 20, o, 24)
        }
    }
    ö(u32(o + 32), get_bmg_unknown_thing_32)

}

function get_bmg_unknown_thing_16(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bmg_unknown_thing_24t0(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 9826656 || u32(o + 8) !== 131328 || f32(o + 12) !== -100 || f32(o + 16) !== 200 || f32(o + 20) !== 5 || u32(o + 24) || u32(o + 28) !== 2 || u32(o + 32) !== 9826688 || u32(o + 36) || u32(o + 40) || u32(o + 44) !== 9826752 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ö(u32(o + 4), get_bmg_unknown_thing_24t0_4)
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 32), get_bmg_unknown_thing_24t0_32)
    }
    ö(u32(o + 44), get_bmg_unknown_thing_24t0_44)

}

function get_bmg_unknown_thing_24t0_4(o) {
    if (u32(o + 0) !== 1280352 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    ß('p_model', o, 0)

}
function get_bmg_unknown_thing_24t0_32(o) {
    if (f32(o + 12) || f32(o + 16) || f32(o + 24) || f32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28], o)
}
function get_bmg_unknown_thing_24t0_44(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_unknown_thing_24t1(o) {
    if (u8(o + 8) || u32(o + 12) || u32(o + 32) || u32(o + 36) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_unknown_thing_24t1_4)
    }
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 12), get_bmg_unknown_thing_24t1_52)
    }
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 12), get_bmg_unknown_thing_24t1_60)
    }
    ö(u32(o + 64), get_bmg_unknown_thing_24t1_64)
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 8), get_bmg_unknown_thing_24t1_72)
    }

}

function get_bmg_unknown_thing_24t1_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}
function get_bmg_unknown_thing_24t1_52(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bmg_unknown_thing_24t1_60(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [f32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bmg_unknown_thing_24t1_64(o) {
    if (u8(o + 9) || u8(o + 10) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_unknown_thing_24t1_72(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_bmg_unknown_thing_24t1_72_4)
    }

}

function get_bmg_unknown_thing_24t1_72_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)
}

function get_bmg_unknown_thing_24t2(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 15669152 || f32(o + 8) !== 60 || u32(o + 12) || u32(o + 16) !== 1 || u32(o + 20) !== 15669184 || u8(o + 24) !== 1 || u8(o + 25) || u8(o + 26) || u8(o + 27) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28], o)

    ö(u32(o + 4), get_bmg_unknown_thing_24t2_4)
    ö(u32(o + 20), get_bmg_unknown_thing_24t2_20)

}

function get_bmg_unknown_thing_24t2_4(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 192 || u8(o + 2) || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_unknown_thing_24t2_20(o) {
    if (f32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_unknown_thing_32(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_unknown, u32(o + 0), get_bmg_unknown)

}
function get_bmg_mysterious(o) {
    if (f32(o + 28) !== 1 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    switch (u8(o + 0)) {
    case 1:
        ä(bmg_unknown, u32(o + 4), get_bmg_unknown)
        break
    case 2:
        ä(bmg_strange, u32(o + 4), get_bmg_strange)
        break
    case 3:
        ä(bmg_sound_controls, u32(o + 4), get_bmg_sound_controls)
        break
    case 5:
    case 6:
        ö(u32(o + 4), get_bmg_mysterious_4t5)
        break
    case 7:
        ö(u32(o + 4), get_bmg_mysterious_4t7)
        break
    case 8:
        ä(bmg_model_link, u32(o + 4), get_bmg_model_link)
        break
    case 9:
        ä(bmg_some_random_section, u32(o + 4), get_bmg_some_random_section)
        break
    case 11:
        ä(bmg_activator, u32(o + 4), get_bmg_activator)
        break
    case 17:
        ä(bmg_mysterious_type, u32(o + 4), get_bmg_mysterious_type)
        break
    case 19:
        ä(bmg_another_world_section, u32(o + 4), get_bmg_another_world_section)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }
    ö(u32(o + 8), get_bmg_mysterious_8)

}

function get_bmg_mysterious_4t5(o) {
    if (u8(o + 2) || u32(o + 4) || u32(o + 20) || u8(o + 24) || u8(o + 27) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 8), get_bmg_mysterious_4t5_8)
    switch (u8(o + 3)) {
    case 0:
        for (let i = 0; i < u32(o + 12); i++) {
            ö(u32(o + 16) + (i * 4), get_bmg_mysterious_4t5_16t0)
        }
        break
    case 2:
    case 5:
        for (let i = 0; i < u32(o + 12); i++) {
            ö(u32(o + 16) + (i * 4), get_bmg_mysterious_4t5_16t2)
        }
        break
    default:
        if (u32(o + 16)) {
            sü(u8, 3, o, 16)
        }
    }

    ö(u32(o + 28), get_bmg_mysterious_4t5_28)
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 32), get_bmg_mysterious_4t5_36)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 32), get_bmg_mysterious_4t5_44)
    }
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 12), get_bmg_mysterious_4t5_52)
    }
    ö(u32(o + 56), get_bmg_mysterious_4t5_56)

}
function get_bmg_mysterious_4t5_8(o) {
    if (f32(o + 0) !== 100 || f32(o + 4) !== 300 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_mysterious_4t5_16t0(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_model', o, 0)

}
function get_bmg_mysterious_4t5_16t2(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}

function get_bmg_mysterious_4t5_28(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 1 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_mysterious_4t5_36(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}

function get_bmg_mysterious_4t5_44(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_mysterious_4t5_52(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bmg_mysterious_4t5_56(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_bmg_mysterious_4t7(o) {
    if (u8(o + 0) || u32(o + 4) || u32(o + 8) !== 1 || u32(o + 16) !== 100 || f32(o + 24) !== 1 || u32(o + 32) !== 1 || u32(o + 40) !== 1 || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 12), get_bmg_mysterious_4t7_12)
    ö(u32(o + 36), get_bmg_mysterious_4t7_36)
    ö(u32(o + 44), get_bmg_mysterious_4t7_44)

}

function get_bmg_mysterious_4t7_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 0)

}
function get_bmg_mysterious_4t7_36(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_mysterious_4t7_44(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_mysterious_8(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_mysterious_type(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bmg_mysterious_type_4)
    }

}

function get_bmg_mysterious_type_4(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8], o)

    ö(u32(o + 0), get_bmg_mysterious_type_4_0)
    switch (u8(o + 4)) {
    case 0:
        ö(u32(o + 8), get_bmg_mysterious_type_4_8t0)
        break
    case 2:
        ö(u32(o + 8), get_bmg_mysterious_type_4_8t2)
        break
    default:
        if (u32(o + 8)) {
            sü(u8, 4, o, 8)
        }
    }

}
function get_bmg_mysterious_type_4_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_mysterious_type_4_8t0(o) {
    if (u8(o + 0) !== 4 || u8(o + 2) || u8(o + 3) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_flag, u32(o + 4), get_bmg_flag)

}

function get_bmg_mysterious_type_4_8t2(o) {
    if (u32(o + 0) !== 10024352 || u32(o + 4) || u32(o + 8) || u8(o + 12) !== 1 || u8(o + 13) || u8(o + 14) || u8(o + 15) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_mysterious_type_4_8t2_0)

}

function get_bmg_mysterious_type_4_8t2_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_activator(o) {
    if (u32(o + 4) || u32(o + 20) !== 2000000000 || u32(o + 24) || u8(o + 33) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || f32(o + 52) !== 5 || f32(o + 64) !== 10 || u8(o + 72) !== 1 || u8(o + 74) || u8(o + 75) || u32(o + 84) || u32(o + 104) || u32(o + 128) || f32(o + 132) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 172) || u8(o + 185) || u8(o + 186) || u8(o + 187) || u32(o + 196) || u32(o + 200) || u32(o + 228) || u32(o + 232) || u32(o + 260) || u32(o + 264) || u32(o + 268))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, u32, 56, f32, 60, f32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, f32, 76, u32, 80, u32, 84, f32, 88, u32, 92, u32, 96, f32, 100, u32, 104, f32, 108, f32, 112, f32, 116, f32, 120, f32, 124, u32, 128, f32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u8, 184, u8, 185, u8, 186, u8, 187, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268], o)

    ö(u32(o + 0), get_bmg_activator_0)
    ä(bmg_model_sub_link, u32(o + 12), get_bmg_model_sub_link)
    ö(u32(o + 28), get_bmg_activator_28)
    ö(u32(o + 56), get_bmg_activator_56)
    ö(u32(o + 68), get_bmg_activator_68)
    ä(bmg_world_thing, u32(o + 136), get_bmg_world_thing)

    ö(u32(o + 152), get_bmg_activator_152)
    ö(u32(o + 156), get_bmg_activator_156)
    for (let i = 0; i < u32(o + 176); i++) {
        ö(u32(o + 180) + (i * 4), get_bmg_activator_180)
    }
    for (let i = 0; i < u32(o + 188); i++) {
        ö(u32(o + 192) + (i * 16), get_bmg_activator_192)
    }
    for (let i = 0; i < u32(o + 204); i++) {
        ö(u32(o + 208) + (i * 12), get_bmg_activator_208)
    }
    for (let i = 0; i < u32(o + 212); i++) {
        ö(u32(o + 216) + (i * 20), get_bmg_activator_216)
    }
    for (let i = 0; i < u32(o + 220); i++) {
        ö(u32(o + 224) + (i * 36), get_bmg_activator_224)
    }
    for (let i = 0; i < u32(o + 236); i++) {
        ö(u32(o + 240) + (i * 28), get_bmg_activator_240)
    }
    for (let i = 0; i < u32(o + 244); i++) {
        ö(u32(o + 248) + (i * 24), get_bmg_activator_248)
    }
    for (let i = 0; i < u32(o + 252); i++) {
        ö(u32(o + 256) + (i * 36), get_bmg_activator_256)
    }

}

function get_bmg_activator_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_activator_28(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_bmg_activator_28_8)

}

function get_bmg_activator_28_8(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}

function get_bmg_activator_56(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_activator_68(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || f32(o + 8) !== 10 || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 2 || f32(o + 24) !== 2 || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_bmg_activator_152(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 12), get_bmg_activator_152_12)

}

function get_bmg_activator_152_12(o) {
    if (u32(o + 0) || u32(o + 4) !== 2 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_activator_152_12_8)

}

function get_bmg_activator_152_12_8(o) {
    if (u32(o + 0) !== 67108864 || f32(o + 4) !== 30 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_156(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_activator_156_4)
    ö(u32(o + 8), get_bmg_activator_156_8)

}

function get_bmg_activator_156_4(o) {
    if (u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bmg_activator_156_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bmg_activator_156_8_4)
    }

}

function get_bmg_activator_156_8_4(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ö(u32(o + 0), get_bmg_activator_156_8_4_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 24), get_bmg_activator_156_8_4_8)
    }

}

function get_bmg_activator_156_8_4_0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_bmg_activator_156_8_4_0_4)
    ö(u32(o + 12), get_bmg_activator_156_8_4_0_12)

}

function get_bmg_activator_156_8_4_0_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_activator_156_8_4_0_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_156_8_4_8(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || f32(o + 16) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20], o)

    ö(u32(o + 8), get_bmg_activator_156_8_4_8_8)
    ä(bmg_world_thing, u32(o + 12), get_bmg_world_thing)
    switch (u8(o + 1)) {
    case 0:
        ö(u32(o + 20), get_bmg_activator_156_8_4_8_20t0)
        break
    case 2:
        //value
        break
    case 8:
        ö(u32(o + 20), get_bmg_activator_156_8_4_8_20t8)
        break
    default:
        if (u32(o + 20)) {
            sü(u8, 1, o, 20)
        }
    }

}

function get_bmg_activator_156_8_4_8_8(o) {
    if (u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44], o)
}
function get_bmg_activator_156_8_4_8_20t0(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_bmg_activator_156_8_4_8_20t8(o) {
    if (f32(o + 0) !== -1703.887939453125 || f32(o + 4) !== -198.50485229492188 || f32(o + 8) !== -1703.8837890625 || u8(o + 12) !== 254 || u8(o + 13) !== 254 || u8(o + 14) !== 254 || u8(o + 15) !== 254 || f32(o + 16) !== 1703.881103515625 || f32(o + 20) !== 2620.52294921875 || f32(o + 24) !== 1703.88525390625 || u8(o + 28) !== 254 || u8(o + 29) !== 254 || u8(o + 30) !== 254 || u8(o + 31) !== 254 || u32(o + 32) || u32(o + 36) || u32(o + 44) !== 1)
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 40), get_bmg_activator_156_8_4_8_20t8_40)

}

function get_bmg_activator_156_8_4_8_20t8_40(o) {
    if (u32(o + 4) !== 241 || u32(o + 8) || u8(o + 12) !== 254 || u8(o + 13) !== 254 || u8(o + 14) !== 254 || u8(o + 15) !== 254)
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 0) + (i * 32), get_bmg_activator_156_8_4_8_20t8_40_0)
    }

}

function get_bmg_activator_156_8_4_8_20t8_40_0(o) {
    if (u32(o + 16) || u8(o + 24) !== 254 || u8(o + 25) !== 254 || u8(o + 26) !== 254 || u8(o + 27) !== 254 || u8(o + 28) !== 254 || u8(o + 29) !== 254 || u8(o + 30) !== 254 || u8(o + 31) !== 254)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
}

function get_bmg_activator_180(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_unknown, u32(o + 0), get_bmg_unknown)

}

function get_bmg_activator_192(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_activator_192_0)
    ö(u32(o + 8), get_bmg_activator_192_8)

}

function get_bmg_activator_192_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_activator_192_8(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_flag, u32(o + 12), get_bmg_flag)

}

function get_bmg_activator_208(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_activator_216(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 16), get_bmg_activator_216_16)
    }

}

function get_bmg_activator_216_16(o) {
    if (u8(o + 13) || u8(o + 14) || u8(o + 15))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)

    ö(u32(o + 0), get_bmg_activator_216_16_0)

    switch (u32(o + 4)) {
    case 0:
        ö(u32(o + 8), get_bmg_activator_216_16_8t0)
        break
    case 8:
        ö(u32(o + 8), get_bmg_activator_216_16_8t8)
        break
    case 13:
        ö(u32(o + 8), get_bmg_activator_216_16_8t13)
        break
    case 30:
        ö(u32(o + 8), get_bmg_activator_216_16_8t30)
        break
    case 33:
        ö(u32(o + 8), get_bmg_activator_216_16_8t33)
        break
    case 38:
        ö(u32(o + 8), get_bmg_activator_216_16_8t38)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 4, o, 8)
        }
    }

}

function get_bmg_activator_216_16_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_activator_216_16_8t0(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
}
function get_bmg_activator_216_16_8t8(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }
}

function get_bmg_activator_216_16_8t13(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_activator_216_16_8t30(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_216_16_8t33(o) {
    if (u32(o + 0) || u32(o + 4) !== 2483424 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_activator_216_16_8t33_4)

}

function get_bmg_activator_216_16_8t33_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 2483456 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_activator_216_16_8t33_4_8)

}

function get_bmg_activator_216_16_8t33_4_8(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 0.0010000000474974513 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_216_16_8t38(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_activator_216_16_8t38_4)
    ä(bmg_flag, u32(o + 12), get_bmg_flag)

}

function get_bmg_activator_216_16_8t38_4(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_activator_224(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || f32(o + 4) !== 2000000000 || u32(o + 8) || f32(o + 12) !== 2000000000 || u32(o + 16))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, f32, 12, u32, 16, f32, 20, f32, 24, f32, 28, f32, 32], o)
}
function get_bmg_activator_240(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24], o)

    ö(u32(o + 0), get_bmg_activator_240_0)
    switch (u8(o + 4)) {
    case 4:
        ö(u32(o + 8), get_bmg_activator_240_8t4)
        break
    case 7:
        ö(u32(o + 8), get_bmg_activator_240_8t7)
        break
    case 9:
        ö(u32(o + 8), get_bmg_activator_240_8t9)
        break
    default:
        if (u32(o + 8)) {
            sü(u8, 4, o, 8)
        }
    }

}

function get_bmg_activator_240_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_activator_240_8t4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_activator_240_8t4_4)

}

function get_bmg_activator_240_8t4_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_240_8t7(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_flag, u32(o + 0), get_bmg_flag)

}

function get_bmg_activator_240_8t9(o) {
    if (u32(o + 4) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_activator_240_8t9_0)

}

function get_bmg_activator_240_8t9_0(o) {
    if (u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_248(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)

    switch (u8(o + 0)) {
    case 0:
        ö(u32(o + 4), get_bmg_activator_248_4t0)
        break
    case 1:
        ö(u32(o + 4), get_bmg_activator_248_4t1)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 8), get_bmg_activator_248_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 16), get_bmg_activator_248_20)
    }

}
function get_bmg_activator_248_4t0(o) {
    if (u32(o + 0) || u8(o + 4) !== 2 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) !== 3 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_activator_248_4t1(o) {
    if (u8(o + 3) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_activator_248_4t1_8)
    switch (u8(o + 0)) {
    case 4:
        ä(bmg_flag, u32(o + 12), get_bmg_flag)
        break
    case 7:
        ö(u32(o + 12), get_bmg_activator_248_4t1_12t7)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }

    ö(u32(o + 20), get_bmg_activator_248_4t1_20)

}

function get_bmg_activator_248_4t1_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_activator_248_4t1_12t7(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_activator_248_4t1_12t7_4)

}

function get_bmg_activator_248_4t1_12t7_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_248_4t1_20(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_activator_248_12(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    switch (u8(o + 0)) {
    case 0:
        ö(u32(o + 4), get_bmg_activator_248_12_4t0)
        break
    case 1:
        ö(u32(o + 4), get_bmg_activator_248_12_4t1)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

}
function get_bmg_activator_248_12_4t0(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_activator_248_12_4t0_8)
    switch (u8(o + 0)) {
    case 4:
        ä(bmg_flag, u32(o + 12), get_bmg_flag)
        break
    case 7:
        ö(u32(o + 12), get_bmg_activator_248_12_4t0_12t7)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }

}
function get_bmg_activator_248_12_4t0_12t7(o) {
    if (u32(o + 0) !== 106 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_activator_248_12_4t0_12t7_4)

}

function get_bmg_activator_248_12_4t0_12t7_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_248_12_4t0_8(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_activator_248_12_4t1(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_248_20(o) {
    if (u8(o + 13) || u8(o + 14) || u8(o + 15))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)

    ö(u32(o + 0), get_bmg_activator_248_20_0)
    switch (u32(o + 4)) {
    case 0:
        ö(u32(o + 8), get_bmg_activator_248_20_8t0)
        break
    case 1:
        ö(u32(o + 8), get_bmg_activator_248_20_8t1)
        break
    case 2:
        ö(u32(o + 8), get_bmg_activator_248_20_8t2)
        break
    case 3:
        ö(u32(o + 8), get_bmg_activator_248_20_8t3)
        break
    case 8:
        ö(u32(o + 8), get_bmg_activator_248_20_8t8)
        break
    case 13:
        ö(u32(o + 8), get_bmg_activator_248_20_8t13)
        break
    case 14:
        ö(u32(o + 8), get_bmg_activator_248_20_8t14)
        break
    case 23:
        ö(u32(o + 8), get_bmg_activator_248_20_8t23)
        break
    case 26:
        ö(u32(o + 8), get_bmg_activator_248_20_8t26)
        break
    case 30:
        ö(u32(o + 8), get_bmg_activator_248_20_8t30)
        break
    case 33:
        ö(u32(o + 8), get_bmg_activator_248_20_8t33)
        break
    case 38:
        ö(u32(o + 8), get_bmg_activator_248_20_8t38)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 4, o, 8)
        }
    }

}

function get_bmg_activator_248_20_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_activator_248_20_8t0(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_activator_248_20_8t1(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_248_20_8t2(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
}
function get_bmg_activator_248_20_8t3(o) {
    if (u8(o + 0) !== 4 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
}

function get_bmg_activator_248_20_8t8(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_activator_248_20_8t13(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_248_20_8t14(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || f32(o + 16) !== 2000 || u32(o + 20) || f32(o + 24) !== 1 || u32(o + 28) !== 10)
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28], o)
}

function get_bmg_activator_248_20_8t23(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_activator_248_20_8t26(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_activator_248_20_8t26_4)

}

function get_bmg_activator_248_20_8t26_4(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_activator_248_20_8t26_4_8)

}

function get_bmg_activator_248_20_8t26_4_8(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_248_20_8t30(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_activator_248_20_8t33(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_activator_248_20_8t38(o) {
    if (u8(o + 3) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_activator_248_20_8t38_4)
    ä(bmg_flag, u32(o + 12), get_bmg_flag)

    ö(u32(o + 20), get_bmg_activator_248_20_8t38_20)

}

function get_bmg_activator_248_20_8t38_4(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_activator_248_20_8t38_20(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_activator_256(o) {
    if (u32(o + 20) || u8(o + 25) || u8(o + 26) || u8(o + 27))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_bmg_activator_256_4)
    }
    ö(u32(o + 8), get_bmg_activator_256_8)
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 92), get_bmg_activator_256_32)
    }

}

function get_bmg_activator_256_4(o) {
    if (u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    switch (u8(o + 0)) {
    case 0:
        ö(u32(o + 4), get_bmg_activator_256_4_4t0)
        break
    case 1:
        ö(u32(o + 4), get_bmg_activator_256_4_4t1)
        break
    case 2:
        ö(u32(o + 4), get_bmg_activator_256_4_4t2)
        break
    case 11:
        ö(u32(o + 4), get_bmg_activator_256_4_4t11)
        break
    case 12:
        ö(u32(o + 4), get_bmg_activator_256_4_4t12)
        break
    case 19:
        ö(u32(o + 4), get_bmg_activator_256_4_4t19)
        break
    case 20:
        ö(u32(o + 4), get_bmg_activator_256_4_4t20)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

}

function get_bmg_activator_256_4_4t0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_activator_256_4_4t0_4)

}

function get_bmg_activator_256_4_4t0_4(o) {
    if (u32(o + 16) || u8(o + 25) || u8(o + 26) || u8(o + 30) || u8(o + 31) || u8(o + 32) || u8(o + 34) || u8(o + 35) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, f32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_bmg_activator_256_4_4t0_4_4)
    }

}

function get_bmg_activator_256_4_4t0_4_4(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    ö(u32(o + 4), get_bmg_activator_256_4_4t0_4_4_4)

}

function get_bmg_activator_256_4_4t0_4_4_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_activator_256_4_4t0_4_4_4_4)

}

function get_bmg_activator_256_4_4t0_4_4_4_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_activator_256_4_4t1(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
}

function get_bmg_activator_256_4_4t2(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
}

function get_bmg_activator_256_4_4t11(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_256_4_4t12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_activator_256_4_4t12_4)

}

function get_bmg_activator_256_4_4t12_4(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_256_4_4t19(o) {
    if (u8(o + 3) || u32(o + 20) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_activator_256_4_4t19_8)
    ä(bmg_flag, u32(o + 12), get_bmg_flag)
    ä(bmg_flag, u32(o + 24), get_bmg_flag)

}

function get_bmg_activator_256_4_4t19_8(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_activator_256_4_4t20(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_256_8(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_activator_256_32(o) {
    if (u8(o + 14) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u8(o + 46) || u8(o + 64) || u8(o + 65) || u8(o + 67))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, f32, 52, f32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, f32, 68, f32, 72, u32, 76, u32, 80, u32, 84, u32, 88], o)

    ö(u32(o + 0), get_bmg_activator_256_32_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_bmg_activator_256_32_8)
    }
    ö(u32(o + 16), get_bmg_activator_256_32_16)
    ö(u32(o + 48), get_bmg_activator_256_32_48)
    ö(u32(o + 60), get_bmg_activator_256_32_60)
    for (let i = 0; i < u32(o + 76); i++) {
        ö(u32(o + 80) + (i * 16), get_bmg_activator_256_32_80)
    }
    ö(u32(o + 88), get_bmg_activator_256_32_88)

}

function get_bmg_activator_256_32_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_activator_256_32_8(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)

}

function get_bmg_activator_256_32_16(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_activator_256_32_48(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_activator_256_32_60(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_bmg_activator_256_32_80(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 0), get_bmg_activator_256_32_80_0)
    switch (u32(o + 4)) {
    case 0:
        ö(u32(o + 8), get_bmg_activator_256_32_80_8t0)
        break
    case 1:
        ö(u32(o + 8), get_bmg_activator_256_32_80_8t1)
        break
    case 2:
        ö(u32(o + 8), get_bmg_activator_256_32_80_8t2)
        break
    case 7:
        ö(u32(o + 8), get_bmg_activator_256_32_80_8t7)
        break
    case 8:
        ö(u32(o + 8), get_bmg_activator_256_32_80_8t8)
        break
    case 18:
        ö(u32(o + 8), get_bmg_activator_256_32_80_8t18)
        break
    case 23:
        ö(u32(o + 8), get_bmg_activator_256_32_80_8t23)
        break
    case 26:
        ö(u32(o + 8), get_bmg_activator_256_32_80_8t26)
        break
    case 33:
        ö(u32(o + 8), get_bmg_activator_256_32_80_8t33)
        break
    case 34:
        ö(u32(o + 8), get_bmg_activator_256_32_80_8t34)
        break
    case 38:
        ö(u32(o + 8), get_bmg_activator_256_32_80_8t38)
        break
    default:
        if (u32(o + 8)) {
            sü(u32, 4, o, 8)
        }
    }

}

function get_bmg_activator_256_32_80_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_activator_256_32_80_8t0(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
}
function get_bmg_activator_256_32_80_8t1(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_activator_256_32_80_8t2(o) {
    if (u32(o + 0) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_activator_256_32_80_8t7(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_activator_256_32_80_8t8(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_activator_256_32_80_8t18(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_256_32_80_8t23(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_activator_256_32_80_8t26(o) {
    if (u8(o + 8) !== 1 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_bmg_activator_256_32_80_8t26_4)
    }

}

function get_bmg_activator_256_32_80_8t26_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_activator_256_32_80_8t26_4_0)
    ö(u32(o + 8), get_bmg_activator_256_32_80_8t26_4_8)

}

function get_bmg_activator_256_32_80_8t26_4_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_activator_256_32_80_8t26_4_8(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_256_32_80_8t33(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_activator_256_32_80_8t33_4)

}

function get_bmg_activator_256_32_80_8t33_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_bmg_activator_256_32_80_8t33_4_8)

}

function get_bmg_activator_256_32_80_8t33_4_8(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_256_32_80_8t34(o) {
    if (u8(o + 0) !== 11 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_activator_256_32_80_8t38(o) {
    if (u8(o + 3) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_activator_256_32_80_8t38_4)
    ä(bmg_flag, u32(o + 12), get_bmg_flag)
    ö(u32(o + 20), get_bmg_activator_256_32_80_8t38_20)
    ä(bmg_flag, u32(o + 24), get_bmg_flag)

}

function get_bmg_activator_256_32_80_8t38_4(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_activator_256_32_80_8t38_20(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_activator_256_32_88(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_model_link(o) {
    if (u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_bmg_model_link_4)
    ö(u32(o + 8), get_bmg_model_link_8)
    ä(bmg_model_sub_link, u32(o + 12), get_bmg_model_sub_link)
    ä(bmg_some_model_anim, u32(o + 16), get_bmg_some_model_anim)

    ö(u32(o + 28), get_bmg_model_link_28)
    ö(u32(o + 32), get_bmg_model_link_32)
    ö(u32(o + 36), get_bmg_model_link_36)
    ö(u32(o + 48), get_bmg_model_link_48)
    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_model_link_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_link_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_model_link_28(o) {
    if (u32(o + 8) || u32(o + 12) || f32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28], o)
}
function get_bmg_model_link_32(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_bmg_model_link_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_bmg_model_link_48(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_bmg_model_sub_link(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_model_anim_2_type_b, u32(o + 0), get_bmg_model_anim_2_type_b)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_bmg_model_sub_link_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_bmg_model_sub_link_16)
    }

}

function get_bmg_model_sub_link_8(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_model', o, 0)

}

function get_bmg_model_sub_link_16(o) {
    if (u8(o + 4) || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7], o)
    ß('p_model', o, 0)

}

function get_bmg_some_model_anim(o) {
    if (u32(o + 0) !== 2860548033 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 24) || f32(o + 28) !== 1 || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, f32, 16, f32, 20, u32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 32) + (i * 4), get_bmg_some_model_anim_32)
    }
    //no u8[08]
    //no u32[04]
    ö(u32(o + 36), get_bmg_some_model_anim_36)

    ö(u32(o + 40), get_bmg_some_model_anim_40)

}

function get_bmg_some_model_anim_32(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_bmg_some_model_anim_32_0)

}

function get_bmg_some_model_anim_32_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_some_model_anim_36(o) {
    if (u8(o + 0) !== 6 || u8(o + 1) !== 255 || u8(o + 3) || f32(o + 8) !== 1 || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_some_model_anim_36_4)

}

function get_bmg_some_model_anim_36_4(o) {
    /*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, f32, 12], o)*/
    switch (u8(o)) {
    case 0:
        get_bmg_some_model_anim_36_4t0(o)
        break
    case 3:
        get_bmg_some_model_anim_36_4t3(o)
        break
    case 5:
        get_bmg_some_model_anim_36_4t5(o)
        break
    case 6:
        get_bmg_some_model_anim_36_4t6(o)
        break
    default:
        ü(3, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    }

}

function get_bmg_some_model_anim_36_4t0(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_some_model_anim_36_4)

}

function get_bmg_some_model_anim_36_4t3(o) {
    if (u8(o + 0) !== 3 || f32(o + 12) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, f32, 12], o)

    ö(u32(o + 4), get_bmg_some_model_anim_36_4)
    ö(u32(o + 8), get_bmg_some_model_anim_36_4t3_8)

}

function get_bmg_some_model_anim_36_4t3_8(o) {//float list, unknown amount
}

function get_bmg_some_model_anim_36_4t5(o) {
    if (u8(o + 0) !== 5 || f32(o + 20) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_some_model_anim_36_4)
    //recursive
    ö(u32(o + 16), get_bmg_some_model_anim_36_4t5_16)
    //buffer string

}

function get_bmg_some_model_anim_36_4t5_16(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_some_model_anim_36_4t6(o) {
    if (u8(o + 0) !== 6 || u8(o + 1) !== 255 || u8(o + 3) || f32(o + 8) !== 1 || f32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, f32, 12], o)

    ö(u32(o + 4), get_bmg_some_model_anim_36_4)

}

function get_bmg_some_model_anim_40(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_idk(o) {
    if (u8(o + 13) !== 1 || u8(o + 14) || u8(o + 15) || u32(o + 20) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 72) || u8(o + 76) !== 255 || u8(o + 77) !== 255 || u8(o + 78) !== 255 || u8(o + 79) !== 255)
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u8, 76, u8, 77, u8, 78, u8, 79], o)

    ö(u32(o + 0), get_bmg_idk_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 28), get_bmg_idk_8)
    }
    switch (u8(o + 12)) {
    case 0:
        ß('p_model', o, 16)
        break
    case 1:
        ä(bmg_model_link, u32(o + 16), get_bmg_model_link)
        break
    default:
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u8, 76, u8, 77, u8, 78, u8, 79], o)
        if (u32(o + 16)) {
            sü(u8, 12, o, 16)
        }
    }

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 32), get_bmg_idk_32)
    }
    ö(u32(o + 36), get_bmg_idk_36)
    ö(u32(o + 40), get_bmg_idk_40)
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_idk_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_idk_8(o) {
    if (u32(o + 4) !== 2 || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    ö(u32(o + 0), get_bmg_idk_8_0)
    ö(u32(o + 8), get_bmg_idk_8_8)
    ö(u32(o + 16), get_bmg_idk_8_16)

}

function get_bmg_idk_8_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_idk_8_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) !== 8 || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_idk_8_8_8)
    ö(u32(o + 20), get_bmg_idk_8_8_20)

}

function get_bmg_idk_8_8_8(o) {
    if (u8(o + 0) !== 5 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_idk_8_8_20(o) {
    if (u32(o + 0) !== 9969024 || u8(o + 4) !== 2 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_flag, u32(o + 0), get_bmg_flag)

}

function get_bmg_idk_8_16(o) {
    if (u32(o + 4) !== 4 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_idk_8_16_0)
    ö(u32(o + 8), get_bmg_idk_8_16_8)

}

function get_bmg_idk_8_16_0(o) {
    if (u8(o + 0) !== 48 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_idk_8_16_8(o) {
    if (u8(o + 0) !== 4 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_idk_32(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 20))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 32), get_bmg_idk_32_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 32), get_bmg_idk_32_8)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_idk_32_8(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_idk_36(o) {
    if (u32(o + 0) || f32(o + 4) !== 1 || u32(o + 8) || f32(o + 16) !== 1 || f32(o + 20) !== 1 || f32(o + 24) !== 1 || u32(o + 28) || u8(o + 46) || u8(o + 47) || u32(o + 52) || u32(o + 56) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ä(bmg_world_thing, u32(o + 40), get_bmg_world_thing)

    ö(u32(o + 48), get_bmg_idk_36_48)
    ö(u32(o + 60), get_bmg_idk_36_60)
    ö(u32(o + 68), get_bmg_idk_36_68)

}

function get_bmg_idk_36_48(o) {
    if (f32(o + 0) !== -0.5 || u32(o + 4) || f32(o + 8) !== -0.5 || u32(o + 12) || f32(o + 16) !== 0.5 || f32(o + 20) !== 1 || f32(o + 24) !== 0.5 || u32(o + 28) || f32(o + 32) !== 0.5 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_bmg_idk_36_60(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_idk_36_60_4)
    ö(u32(o + 8), get_bmg_idk_36_60_8)

}

function get_bmg_idk_36_60_4(o) {
    if (u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bmg_idk_36_60_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_idk_36_60_8_4)

}

function get_bmg_idk_36_60_8_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_idk_36_60_8_4_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 24), get_bmg_idk_36_60_8_4_8)
    }

}

function get_bmg_idk_36_60_8_4_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_idk_36_60_8_4_0_4)

}

function get_bmg_idk_36_60_8_4_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_idk_36_60_8_4_8(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 4) || f32(o + 16) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20], o)

    ö(u32(o + 8), get_bmg_idk_36_60_8_4_8_8)
    ä(bmg_world_thing, u32(o + 12), get_bmg_world_thing)

    switch (u8(o + 1)) {
    case 0:
        ö(u32(o + 20), get_bmg_idk_36_60_8_4_8_20t0)
        break
    case 2:
        //value ?
        break
    default:
        if (u32(o + 20)) {
            sü(u8, 1, o, 20)
        }
    }

}

function get_bmg_idk_36_60_8_4_8_8(o) {
    if (u8(o + 1) || u8(o + 2) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bmg_idk_36_60_8_4_8_20t0(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_idk_36_68(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ä(bmg_unknown, u32(o + 0), get_bmg_unknown)

}

function get_bmg_idk_40(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_bmg_idk_40_8)

}

function get_bmg_idk_40_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_world_link_type(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    switch (u8(o + 4)) {
    case 10:
        ö(u32(o + 0), get_bmg_world_link_type_0t10)
        break
    case 11:
        ö(u32(o + 0), get_bmg_world_link_type_0t11)
        break
    case 12:
        ö(u32(o + 0), get_bmg_world_link_type_0t12)
        break
    case 13:
        ö(u32(o + 0), get_bmg_world_link_type_0t13)
        break
    case 14:
        ö(u32(o + 0), get_bmg_world_link_type_0t14)
        break
    case 16:
        ö(u32(o + 0), get_bmg_world_link_type_0t16)
        break
    default:
        if (u32(o + 0)) {
            sü(u8, 4, o, 0)
        }
    }

}

function get_bmg_world_link_type_0t10(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u8(o + 16) || u8(o + 17) || f32(o + 32) !== 2 || f32(o + 36) !== 10 || f32(o + 40) !== 5 || f32(o + 44) !== 8000 || f32(o + 52) !== 70 || f32(o + 56) !== 90 || f32(o + 64) !== 50 || f32(o + 68) !== 60 || u32(o + 76) !== 6 || u32(o + 88) !== 3 || u32(o + 112) || u32(o + 132) || u32(o + 140) || u32(o + 156))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, f32, 144, u32, 148, u32, 152, u32, 156], o)

    ä(bmg_model_sub_link, u32(o + 12), get_bmg_model_sub_link)

    ö(u32(o + 20), get_bmg_world_link_type_0t10_20)
    for (let i = 0; i < u32(o + 76); i++) {
        ö(u32(o + 80) + (i * 8), get_bmg_world_link_type_0t10_80)
    }
    ö(u32(o + 84), get_bmg_world_link_type_0t10_84)
    for (let i = 0; i < u32(o + 88); i++) {
        ö(u32(o + 92) + (i * 12), get_bmg_world_link_type_0t10_92)
    }
    ä(bmg_a_single_section, u32(o + 96), get_bmg_a_single_section)

    ä(bmg_world_asdf, u32(o + 100), get_bmg_world_asdf)
    ä(bmg_world_asdf, u32(o + 104), get_bmg_world_asdf)
    ö(u32(o + 108), get_bmg_world_link_type_0t10_108)
    ä(bmg_world_asdf, u32(o + 128), get_bmg_world_asdf)
    ö(u32(o + 136), get_bmg_world_link_type_0t10_136)

}
function get_bmg_world_link_type_0t10_20(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t10_20_4)
    ö(u32(o + 8), get_bmg_world_link_type_0t10_20_8)

}

function get_bmg_world_link_type_0t10_20_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bmg_world_link_type_0t10_20_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bmg_world_link_type_0t10_20_8_4)
    }

}

function get_bmg_world_link_type_0t10_20_8_4(o) {
    if (u32(o + 4) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_bmg_world_link_type_0t10_20_8_4_0)
    ö(u32(o + 8), get_bmg_world_link_type_0t10_20_8_4_8)

}

function get_bmg_world_link_type_0t10_20_8_4_0(o) {
    if (u32(o + 0) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t10_20_8_4_0_4)
    ö(u32(o + 12), get_bmg_world_link_type_0t10_20_8_4_0_12)

}

function get_bmg_world_link_type_0t10_20_8_4_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_world_link_type_0t10_20_8_4_0_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_world_link_type_0t10_20_8_4_8(o) {
    if (u8(o + 1) !== 2 || u8(o + 2) || u8(o + 3) || u32(o + 4) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_world_link_type_0t10_20_8_4_8_8)
    ä(bmg_world_thing, u32(o + 12), get_bmg_world_thing)

}

function get_bmg_world_link_type_0t10_20_8_4_8_8(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_bmg_world_link_type_0t10_80(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t10_80_4)

}

function get_bmg_world_link_type_0t10_80_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_world_link_type_0t10_80_4_4)
    }

}

function get_bmg_world_link_type_0t10_80_4_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)

}

function get_bmg_world_link_type_0t10_84(o) {
    if (f32(o + 8) !== 10 || f32(o + 12) !== 70 || f32(o + 16) !== 270 || f32(o + 20) !== 50 || f32(o + 28) !== 3 || f32(o + 32) !== 250 || f32(o + 36) !== 0.04500000178813934 || f32(o + 40) !== 70 || f32(o + 44) !== 70 || f32(o + 48) !== 3 || f32(o + 52) !== 0.04500000178813934 || f32(o + 56) !== 70 || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60], o)
}
function get_bmg_world_link_type_0t10_92(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_world_link_type_0t10_108(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t10_108_4)

}

function get_bmg_world_link_type_0t10_108_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_world_link_type_0t10_136(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t10_136_4)

}

function get_bmg_world_link_type_0t10_136_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_world_link_type_0t11(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || f32(o + 20) !== 10 || f32(o + 24) !== 10 || f32(o + 28) !== 10 || f32(o + 32) !== 10 || f32(o + 40) !== 10 || f32(o + 44) !== 10 || f32(o + 48) !== 10 || f32(o + 52) !== 12 || f32(o + 56) !== 12 || u32(o + 60) !== 2 || u32(o + 68) !== 1 || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ä(bmg_model_sub_link, u32(o + 12), get_bmg_model_sub_link)

    ö(u32(o + 16), get_bmg_world_link_type_0t11_16)
    ö(u32(o + 64), get_bmg_world_link_type_0t11_64)
    ö(u32(o + 72), get_bmg_world_link_type_0t11_72)
    for (let i = 0; i < u32(o + 76); i++) {
        ö(u32(o + 80) + (i * 12), get_bmg_world_link_type_0t11_80)
    }

}

function get_bmg_world_link_type_0t11_16(o) {
    if (u32(o + 0) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12) || f32(o + 16) !== 1 || f32(o + 20) !== 1 || f32(o + 24) !== 1 || u32(o + 28) || u32(o + 32) || u8(o + 36) !== 255 || u8(o + 37) !== 255 || u8(o + 38) !== 255 || u8(o + 39) !== 255 || u32(o + 40) || u8(o + 44) !== 1 || u8(o + 45) !== 12 || u8(o + 46) || u8(o + 47) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    //check if 44 same consols
    ö(u32(o + 60), get_bmg_world_link_type_0t11_16_60)

}

function get_bmg_world_link_type_0t11_16_60(o) {
    if (f32(o + 0) !== 80 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t11_16_60_4)
    ö(u32(o + 8), get_bmg_world_link_type_0t11_16_60_8)

}

function get_bmg_world_link_type_0t11_16_60_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 60 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_bmg_world_link_type_0t11_16_60_8(o) {
    if (u32(o + 0) !== 3 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bmg_world_link_type_0t11_16_60_8_4)
    }

}

function get_bmg_world_link_type_0t11_16_60_8_4(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/

    ö(u32(o + 0), get_bmg_world_link_type_0t11_16_60_8_4_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 24), get_bmg_world_link_type_0t11_16_60_8_4_8)
    }

}

function get_bmg_world_link_type_0t11_16_60_8_4_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t11_16_60_8_4_0_4)
    ö(u32(o + 12), get_bmg_world_link_type_0t11_16_60_8_4_0_12)

}

function get_bmg_world_link_type_0t11_16_60_8_4_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_world_link_type_0t11_16_60_8_4_0_12(o) {
    if (u32(o + 0) !== 1 || u8(o + 4) !== 18 || u8(o + 5) !== 154 || u8(o + 6) !== 111 || u8(o + 7) !== 182 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_world_link_type_0t11_16_60_8_4_8(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12) || f32(o + 16) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20], o)

    ö(u32(o + 8), get_bmg_world_link_type_0t11_16_60_8_4_8_8)

}

function get_bmg_world_link_type_0t11_16_60_8_4_8_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_world_link_type_0t11_64(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t11_64_4)
    ö(u32(o + 12), get_bmg_world_link_type_0t11_64_12)

}

function get_bmg_world_link_type_0t11_64_4(o) {
    if (u32(o + 0) !== 3 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_world_link_type_0t11_64_4_4)
    }

}

function get_bmg_world_link_type_0t11_64_4_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)

}

function get_bmg_world_link_type_0t11_64_12(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_world_link_type_0t11_64_12_4)
    }

}

function get_bmg_world_link_type_0t11_64_12_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)

}

function get_bmg_world_link_type_0t11_72(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t11_72_4)

}

function get_bmg_world_link_type_0t11_72_4(o) {
    if (u32(o + 20) || u8(o + 33) || u8(o + 34) || u8(o + 35) || u32(o + 36) || u32(o + 48) || u32(o + 56) || u32(o + 60) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, f32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, f32, 40, f32, 44, u32, 48, f32, 52, u32, 56, u32, 60, f32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)
}

function get_bmg_world_link_type_0t11_80(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}
function get_bmg_world_link_type_0t12(o) {
    if (f32(o + 20) !== 1000 || u32(o + 32) !== 1 || u32(o + 40) !== 1 || u32(o + 68) || u8(o + 72) || u8(o + 74) || u32(o + 76) || f32(o + 132) !== 2000 || f32(o + 136) !== 650 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, f32, 104, f32, 108, f32, 112, f32, 116, f32, 120, f32, 124, f32, 128, f32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156], o)
    ß('p_texture', o, 80)

    ä(bmg_model_sub_link, u32(o + 0), get_bmg_model_sub_link)
    ö(u32(o + 4), get_bmg_world_link_type_0t14_16)
    ö(u32(o + 36), get_bmg_world_link_type_0t12_36)
    ö(u32(o + 44), get_bmg_world_link_type_0t12_44)
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 12), get_bmg_world_link_type_0t12_52)
    }
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 20), get_bmg_world_link_type_0t12_60)
    }
    ö(u32(o + 64), get_bmg_world_link_type_0t12_64)
    ö(u32(o + 84), get_bmg_world_link_type_0t12_84)
    ä(bmg_sound_section, u32(o + 88), get_bmg_sound_section)
    ä(bmg_sound_section, u32(o + 92), get_bmg_sound_section)
    ä(bmg_sound_section, u32(o + 100), get_bmg_sound_section)

}

function get_bmg_world_link_type_0t12_36(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)
    // model link ?
}

function get_bmg_world_link_type_0t12_44(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t12_44_4)

}

function get_bmg_world_link_type_0t12_44_4(o) {
    if (f32(o + 20) !== 0.30000001192092896 || f32(o + 24) !== 0.10000000149011612 || f32(o + 28) !== 0.5 || u32(o + 32) !== 16777216 || f32(o + 36) !== 20 || f32(o + 40) !== 20 || f32(o + 44) !== 5 || u32(o + 48) || u32(o + 56) || u32(o + 60) || f32(o + 64) !== 5000 || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, f32, 36, f32, 40, f32, 44, u32, 48, f32, 52, u32, 56, u32, 60, f32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)
}

function get_bmg_world_link_type_0t12_52(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }
}

function get_bmg_world_link_type_0t12_60(o) {
    if (u8(o + 0) || u8(o + 2) !== 1 || f32(o + 4) !== 11.699999809265137 || f32(o + 8) !== 3 || f32(o + 12) !== 0.15000000596046448 || u8(o + 17) || u8(o + 18) || u8(o + 19))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19], o)
}
function get_bmg_world_link_type_0t12_64(o) {
    if (f32(o + 0) !== -50 || f32(o + 4) !== 20 || f32(o + 8) !== -90 || u32(o + 12) || f32(o + 16) !== 50 || f32(o + 20) !== 20 || f32(o + 24) !== -90 || u32(o + 28) || f32(o + 32) !== -50 || f32(o + 36) !== 20 || f32(o + 40) !== 90 || u32(o + 44) || f32(o + 48) !== 50 || f32(o + 52) !== 20 || f32(o + 56) !== 90 || u32(o + 60) || f32(o + 64) !== 11.699999809265137 || f32(o + 68) !== 24 || f32(o + 72) !== 1 || f32(o + 76) !== 12 || f32(o + 80) !== 80 || f32(o + 84) !== 1 || u32(o + 88) || u32(o + 92))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, u32, 88, u32, 92], o)
}
function get_bmg_world_link_type_0t12_84(o) {
    if (u8(o + 0) !== 90 || u8(o + 1) !== 90 || u8(o + 2) !== 90 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_world_link_type_0t13(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || f32(o + 36) !== 10 || f32(o + 44) !== 75 || u8(o + 52) || u8(o + 54) || u8(o + 55) || u32(o + 60) !== 50 || u32(o + 76) || u32(o + 80) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, f32, 64, f32, 68, f32, 72, u32, 76, u32, 80, f32, 84, u32, 88, u32, 92], o)

    ä(bmg_model_sub_link, u32(o + 12), get_bmg_model_sub_link)

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_bmg_world_link_type_0t13_20)
    }
    ö(u32(o + 28), get_bmg_world_link_type_0t13_28)
    ä(bmg_world_asdf, u32(o + 48), get_bmg_world_asdf)

    ö(u32(o + 56), get_bmg_world_link_type_0t13_56)

}

function get_bmg_world_link_type_0t13_20(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_bmg_world_link_type_0t13_20_0)
    ö(u32(o + 4), get_bmg_world_link_type_0t13_20_4)

}

function get_bmg_world_link_type_0t13_20_0(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_world_link_type_0t13_20_0_4)
    }

}

function get_bmg_world_link_type_0t13_20_0_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)
}

function get_bmg_world_link_type_0t13_20_4(o) {
    if (u32(o + 0) !== 7 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_world_link_type_0t13_20_4_4)
    }

}

function get_bmg_world_link_type_0t13_20_4_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)
}

function get_bmg_world_link_type_0t13_28(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }
}

function get_bmg_world_link_type_0t13_56(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t13_56_4)
    ö(u32(o + 12), get_bmg_world_link_type_0t13_56_12)

}

function get_bmg_world_link_type_0t13_56_4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_world_link_type_0t13_56_12(o) {
    if (u8(o + 0) !== 18 || u8(o + 1) !== 154 || u8(o + 2) !== 111 || u8(o + 3) !== 182 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_world_link_type_0t14(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || f32(o + 20) !== 5 || f32(o + 24) !== 350 || f32(o + 28) !== 5 || f32(o + 32) !== 350 || f32(o + 36) !== 5 || f32(o + 40) !== 350 || f32(o + 44) !== 10 || f32(o + 48) !== 10 || f32(o + 52) !== 12 || f32(o + 56) !== 12 || u32(o + 60) !== 3 || u32(o + 68) !== 1 || u32(o + 76) !== 1 || u32(o + 88) || u32(o + 92) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)
    //check if same as t11
    ä(bmg_model_sub_link, u32(o + 12), get_bmg_model_sub_link)

    ö(u32(o + 16), get_bmg_world_link_type_0t14_16)
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 8), get_bmg_world_link_type_0t14_64)
    }
    ö(u32(o + 72), get_bmg_world_link_type_0t14_72)
    ö(u32(o + 80), get_bmg_world_link_type_0t14_80)

}

function get_bmg_world_link_type_0t14_16(o) {
    if (f32(o + 4) !== 1 || u32(o + 8) || f32(o + 16) !== 1 || f32(o + 20) !== 1 || f32(o + 24) !== 1 || u32(o + 28) || u32(o + 32) || u8(o + 36) !== 255 || u8(o + 37) !== 255 || u8(o + 38) !== 255 || u8(o + 39) !== 255 || u8(o + 44) !== 1 || u8(o + 45) !== 12 || u8(o + 46) || u8(o + 47) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ä(bmg_world_thing, u32(o + 40), get_bmg_world_thing)
    ö(u32(o + 60), get_bmg_world_link_type_0t14_16_60)

}

function get_bmg_world_link_type_0t14_16_60(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t14_16_60_4)
    ö(u32(o + 8), get_bmg_world_link_type_0t14_16_60_8)

}

function get_bmg_world_link_type_0t14_16_60_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_bmg_world_link_type_0t14_16_60_8(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bmg_world_link_type_0t14_16_60_8_4)
    }

}

function get_bmg_world_link_type_0t14_16_60_8_4(o) {
    if (u32(o + 4) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_bmg_world_link_type_0t14_16_60_8_4_0)
    ö(u32(o + 8), get_bmg_world_link_type_0t14_16_60_8_4_8)

}

function get_bmg_world_link_type_0t14_16_60_8_4_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t14_16_60_8_4_0_4)
    ö(u32(o + 12), get_bmg_world_link_type_0t14_16_60_8_4_0_12)

}

function get_bmg_world_link_type_0t14_16_60_8_4_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_world_link_type_0t14_16_60_8_4_0_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_world_link_type_0t14_16_60_8_4_8(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_world_link_type_0t14_16_60_8_4_8_8)
    ä(bmg_world_thing, u32(o + 12), get_bmg_world_thing)

    switch (u8(o + 1)) {
    case 0:
        ö(u32(o + 20), get_bmg_world_link_type_0t14_16_60_8_4_8_20t0)
        break
    case 1:
    case 2:
        //float ?
        break
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
    }

}
function get_bmg_world_link_type_0t14_16_60_8_4_8_8(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_world_link_type_0t14_16_60_8_4_8_20t0(o) {
    if (f32(o + 4) !== -10 || u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_world_link_type_0t14_64(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t14_64_4)

}

function get_bmg_world_link_type_0t14_64_4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_world_link_type_0t14_64_4_4)
    }

}

function get_bmg_world_link_type_0t14_64_4_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)

}

function get_bmg_world_link_type_0t14_72(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t14_72_4)

}

function get_bmg_world_link_type_0t14_72_4(o) {
    if (f32(o + 0) !== 75 || f32(o + 4) !== 20 || f32(o + 8) !== 5 || f32(o + 12) !== 40 || f32(o + 16) !== 20 || u32(o + 20) || f32(o + 24) !== 0.5 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_world_link_type_0t14_80(o) {
    if (u32(o + 0) !== 2 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_world_link_type_0t16(o) {
    if (u32(o + 4) !== 2 || u32(o + 12) !== 1 || f32(o + 24) !== 300 || f32(o + 28) !== 500 || f32(o + 32) !== 300 || f32(o + 36) !== 500 || f32(o + 40) !== 150 || f32(o + 44) !== 300 || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 84) || f32(o + 88) !== 90 || f32(o + 100) !== 0.5 || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, f32, 88, u32, 92, f32, 96, f32, 100, f32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)

    ä(bmg_model_sub_link, u32(o + 0), get_bmg_model_sub_link)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_bmg_world_link_type_0t16_8)
    }
    ö(u32(o + 16), get_bmg_world_link_type_0t16_16)
    ö(u32(o + 20), get_bmg_world_link_type_0t16_20)
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 20), get_bmg_world_link_type_0t16_52)
    }
    ö(u32(o + 56), get_bmg_world_link_type_0t16_56)
    ö(u32(o + 76), get_bmg_world_link_type_0t16_76)
    ä(bmg_sound_section, u32(o + 80), get_bmg_sound_section)
    ä(bmg_sound_section, u32(o + 92), get_bmg_sound_section)

}

function get_bmg_world_link_type_0t16_8(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_model_link, u32(o + 0), get_bmg_model_link)

}

function get_bmg_world_link_type_0t16_16(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_world_link_type_0t16_20(o) {
    if (f32(o + 0) !== -990 || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12) || f32(o + 16) !== 1 || f32(o + 20) !== 1 || f32(o + 24) !== 1 || u32(o + 28) || u32(o + 32) || u8(o + 36) !== 255 || u8(o + 37) !== 255 || u8(o + 38) !== 255 || u8(o + 39) !== 255 || u32(o + 44) !== 17563648 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ä(bmg_world_thing, u32(o + 40), get_bmg_world_thing)
    ö(u32(o + 60), get_bmg_world_link_type_0t16_20_60)

}

function get_bmg_world_link_type_0t16_20_60(o) {
    if (u8(o + 0) !== 71 || u8(o + 1) !== 195 || u8(o + 2) !== 80 || u8(o + 3) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t16_20_60_4)
    ö(u32(o + 8), get_bmg_world_link_type_0t16_20_60_8)

}

function get_bmg_world_link_type_0t16_20_60_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_bmg_world_link_type_0t16_20_60_8(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bmg_world_link_type_0t16_20_60_8_4)
    }

}

function get_bmg_world_link_type_0t16_20_60_8_4(o) {
    if (u32(o + 4) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_bmg_world_link_type_0t16_20_60_8_4_0)
    ö(u32(o + 8), get_bmg_world_link_type_0t16_20_60_8_4_8)

}

function get_bmg_world_link_type_0t16_20_60_8_4_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_world_link_type_0t16_20_60_8_4_0_4)
    ö(u32(o + 12), get_bmg_world_link_type_0t16_20_60_8_4_0_12)

}

function get_bmg_world_link_type_0t16_20_60_8_4_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_world_link_type_0t16_20_60_8_4_0_12(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_world_link_type_0t16_20_60_8_4_8(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_world_link_type_0t16_20_60_8_4_8_8)
    switch (u8(o + 0)) {
    case 0:
        // value
        break
    case 1:
        ö(u32(o + 20), get_bmg_world_link_type_0t16_20_60_8_4_8_20t1)
        break
    default:
        if (u32(o + 20)) {
            sü(u8, 0, o, 20)
        }
    }

}

function get_bmg_world_link_type_0t16_20_60_8_4_8_8(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_bmg_world_link_type_0t16_20_60_8_4_8_20t1(o) {
    if (f32(o + 4) !== -10 || u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_world_link_type_0t16_52(o) {
    if (f32(o + 4) !== 11.699999809265137 || f32(o + 8) !== 3 || f32(o + 12) !== 0.15000000596046448)
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, u32, 16], o)
}
function get_bmg_world_link_type_0t16_56(o) {
    if (f32(o + 4) !== 20 || u32(o + 12) || f32(o + 20) !== 20 || u32(o + 28) || f32(o + 36) !== 20 || u32(o + 44) || f32(o + 52) !== 20 || u32(o + 60) || f32(o + 64) !== 11.699999809265137 || f32(o + 68) !== 2.4000000953674316 || f32(o + 72) !== 1 || f32(o + 76) !== 12 || f32(o + 80) !== 80 || f32(o + 84) !== 1 || u32(o + 88) || u32(o + 92))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, u32, 88, u32, 92], o)
}
function get_bmg_world_link_type_0t16_76(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_world_asdf(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 9) || u8(o + 10) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 32) || u32(o + 40) || f32(o + 44) !== -1 || u8(o + 52) !== 1 || u8(o + 53) || u8(o + 54) || u32(o + 76) || f32(o + 84) !== 1 || u32(o + 96) || u32(o + 100) || u32(o + 104) || u8(o + 113) || u8(o + 114) || u8(o + 115))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, u8, 52, u8, 53, u8, 54, u8, 55, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, u32, 76, f32, 80, f32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, f32, 108, u8, 112, u8, 113, u8, 114, u8, 115, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140], o)

    ö(u32(o + 16), get_bmg_world_asdf_16)
    ö(u32(o + 28), get_bmg_world_asdf_28)
    ö(u32(o + 88), get_bmg_world_asdf_88)
    ä(bmg_unknown, u32(o + 116), get_bmg_unknown)
    for (let i = 0; i < u32(o + 120); i++) {
        ö(u32(o + 124) + (i * 20), get_bmg_world_asdf_124)
    }
    ä(bmg_unknown, u32(o + 128), get_bmg_unknown)

    ö(u32(o + 132), get_bmg_world_asdf_132)
    for (let i = 0; i < u32(o + 136); i++) {
        ö(u32(o + 140) + (i * 64), get_bmg_mysterious)
    }

}

function get_bmg_world_asdf_16(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_world_asdf_16_4)

}

function get_bmg_world_asdf_16_4(o) {
    if (u8(o + 3) || u32(o + 4) || u32(o + 8) !== 10000 || u32(o + 28) || u32(o + 32) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 36), get_bmg_world_asdf_16_4_36)
    ö(u32(o + 40), get_bmg_world_asdf_16_4_40)

}
function get_bmg_world_asdf_16_4_36(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 3000 || f32(o + 12) !== 3000 || u32(o + 16) !== 1000 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_world_asdf_16_4_40(o) {
    if (f32(o + 0) !== -100 || f32(o + 4) !== 100 || f32(o + 8) !== -100 || f32(o + 12) !== 100 || f32(o + 16) !== 100 || u32(o + 20) || f32(o + 24) !== 100 || u32(o + 28) || u32(o + 32) !== 1000 || f32(o + 36) !== -360 || f32(o + 40) !== 360 || f32(o + 44) !== 1)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, u32, 28, u32, 32, f32, 36, f32, 40, f32, 44], o)
}
function get_bmg_world_asdf_28(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_world_asdf_28_8)

}

function get_bmg_world_asdf_28_8(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 125 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_world_asdf_88(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_world_asdf_88_4)
    ö(u32(o + 8), get_bmg_world_asdf_88_8)

}

function get_bmg_world_asdf_88_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bmg_world_asdf_88_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_world_asdf_88_8_4)

}

function get_bmg_world_asdf_88_8_4(o) {
    if (u32(o + 4) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_world_asdf_88_8_4_0)
    ö(u32(o + 8), get_bmg_world_asdf_88_8_4_8)

}

function get_bmg_world_asdf_88_8_4_0(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/

    ö(u32(o + 4), get_bmg_world_asdf_88_8_4_0_4)
    ö(u32(o + 12), get_bmg_world_asdf_88_8_4_0_12)

}

function get_bmg_world_asdf_88_8_4_0_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_world_asdf_88_8_4_0_12(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_world_asdf_88_8_4_8(o) {
    if (u8(o + 0) || u8(o + 1) !== 2 || u8(o + 2) || u8(o + 3) || u32(o + 4) || f32(o + 16) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_world_asdf_88_8_4_8_8)
    ä(bmg_world_thing, u32(o + 12), get_bmg_world_thing)

}

function get_bmg_world_asdf_88_8_4_8_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_bmg_world_asdf_124(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 16))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16], o)

    ä(bmg_world_thing, u32(o + 4), get_bmg_world_thing)
    ä(bmg_unknown, u32(o + 8), get_bmg_unknown)

}

function get_bmg_world_asdf_132(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_world_asdf_132_0)

}

function get_bmg_world_asdf_132_0(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 100 || u32(o + 12) || f32(o + 16) !== 100 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_interface(o) {
    if (u32(o + 8) !== 1 || u32(o + 28) || u32(o + 48) !== 1 || u8(o + 58) || u8(o + 59) || u32(o + 64) || u32(o + 72) !== 100)
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ö(u32(o + 0), get_bmg_interface_0)
    ä(bmg_sound_controls, u32(o + 20), get_bmg_sound_controls)
    ä(bmg_sound_controls, u32(o + 24), get_bmg_sound_controls)
    ä(bmg_sound_controls, u32(o + 32), get_bmg_sound_controls)

    ö(u32(o + 52), get_bmg_interface_52)
    ö(u32(o + 60), get_bmg_interface_60)
    ö(u32(o + 76), get_bmg_interface_76)
    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 28), get_bmg_interface_84)
    }
    for (let i = 0; i < u32(o + 88); i++) {
        ö(u32(o + 92) + (i * 100), get_bmg_interface_92)
    }

}

function get_bmg_interface_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_52(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_60(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 0), get_bmg_interface_60_0)

}

function get_bmg_interface_60_0(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_interface_76(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 36), get_bmg_interface_76_4)
    }

}
function get_bmg_interface_76_4(o) {
    if (u8(o + 5) || u8(o + 6) || u32(o + 20) || u32(o + 28) || u8(o + 34) || u8(o + 35))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, ], o)
    ö(u32(o + 0), get_bmg_interface_76_4_0)
    //text
    switch (u8(o + 4)) {
    case 1:
        ö(u32(o + 12), get_bmg_interface_76_4_12t1)
        break
    case 5:
        ö(u32(o + 12), get_bmg_interface_76_4_12t5)
        break
    case 7:
        ö(u32(o + 12), get_bmg_interface_76_4_12t7)
        break
    case 8:
        ö(u32(o + 12), get_bmg_interface_76_4_12t8)
        break
    case 10:
        ö(u32(o + 12), get_bmg_interface_76_4_12t10)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 4, o, 12)
        }
    }

}

function get_bmg_interface_76_4_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_76_4_12t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 4), get_bmg_interface_76_4_12t1_4)

}

function get_bmg_interface_76_4_12t1_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u8(o + 14) || u8(o + 15) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_76_4_12t5(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

}

function get_bmg_interface_76_4_12t7(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_76_4_12t8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bmg_interface_76_4_12t8_4)
    }

}

function get_bmg_interface_76_4_12t8_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8], o)
}

function get_bmg_interface_76_4_12t10(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ä(bmg_flag, u32(o + 0), get_bmg_flag)

}

function get_bmg_interface_84(o) {
    /* ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)*/
    switch (u32(o + 0)) {
    case 1026:
        ö(u32(o + 4), get_bmg_interface_84_4t1026)
        break
    case 1027:
        ö(u32(o + 4), get_bmg_interface_84_4t1027)
        break
    default:
        if (u32(o + 4)) {
            sü(u32, 0, o, 4)
        }
    }

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_bmg_interface_84_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 36), get_bmg_interface_84_24)
    }

}
function get_bmg_interface_84_4t1026(o) {
    if (u8(o + 3) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_interface_84_4t1026_8)
    switch (u8(o + 0)) {
    case 4:
        ä(bmg_flag, u32(o + 12), get_bmg_flag)
        break
    case 7:
        ö(u32(o + 12), get_bmg_interface_84_4t1026_12t7)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }
    ö(u32(o + 20), get_bmg_interface_84_4t1026_20)

}

function get_bmg_interface_84_4t1026_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_84_4t1026_12t7(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_interface_84_4t1026_12t7_4)

}

function get_bmg_interface_84_4t1026_12t7_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_interface_84_4t1026_20(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_84_4t1027(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_interface_84_4t1027_4)

}

function get_bmg_interface_84_4t1027_4(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_84_16(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    switch (u8(o + 0)) {
    case 2:
        ö(u32(o + 4), get_bmg_interface_84_16_4t2)
        break
    case 3:
        ö(u32(o + 4), get_bmg_interface_84_16_4t3)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

}
function get_bmg_interface_84_16_4t2(o) {
    if (u8(o + 3) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_interface_84_16_4t2_8)

    switch (u8(o + 0)) {
    case 4:
        ä(bmg_flag, u32(o + 12), get_bmg_flag)
        break
    case 7:
        ö(u32(o + 12), get_bmg_interface_84_16_4t2_12t7)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }
    ö(u32(o + 20), get_bmg_interface_84_16_4t2_20)

}

function get_bmg_interface_84_16_4t2_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_84_16_4t2_12t7(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_interface_84_16_4t2_12t7_4)

}

function get_bmg_interface_84_16_4t2_12t7_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_interface_84_16_4t2_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_84_16_4t2_20(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_84_16_4t3(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_interface_84_16_4t3_4)

}

function get_bmg_interface_84_16_4t3_4(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_84_24(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 16) || u32(o + 28) || u32(o + 32))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    switch (u8(o)) {
    case 1:
    case 31:
        ä(bmg_interface, u32(o + 4), get_bmg_interface)
        break
    case 11:
        ö(u32(o + 4), get_bmg_interface_84_24_4t11)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

    switch (u8(o)) {
    case 6:
        ö(u32(o + 12), get_bmg_interface_84_24_12t6)
        break
    case 15:
        ö(u32(o + 12), get_bmg_interface_84_24_12t15)
        break
    case 41:
        ö(u32(o + 12), get_bmg_interface_84_24_12t41)
        break
    case 46:
        ö(u32(o + 12), get_bmg_interface_84_24_12t46)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }
    ä(bmg_sound_controls, u32(o + 24), get_bmg_sound_controls)

}

function get_bmg_interface_84_24_4t11(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_bmg_interface_84_24_4t11_4)
    }

}

function get_bmg_interface_84_24_4t11_4(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u16, 8, u8, 10, u8, 11, u32, 12, u32, 16], o)

    ö(u32(o + 0), get_bmg_interface_84_24_4t11_4_0)
    //text
    ö(u32(o + 4), get_bmg_interface_84_24_4t11_4_4)

    switch (u16(o + 8)) {
    case 1:
        ö(u32(o + 12), get_bmg_interface_84_24_4t11_4_12t1)
        break
    case 2:
        ö(u32(o + 12), get_bmg_interface_84_24_4t11_4_12t2)
        break
    case 102:
        ö(u32(o + 12), get_bmg_interface_84_24_4t11_4_12t102)
        break
    case 105:
        ö(u32(o + 12), get_bmg_interface_84_24_4t11_4_12t105)
        break
    case 107:
        ö(u32(o + 12), get_bmg_interface_84_24_4t11_4_12t107)
        break
    case 109:
        ö(u32(o + 12), get_bmg_interface_84_24_4t11_4_12t109)
        break
    case 116:
        ä(bmg_interface_small_sec, u32(o + 12), get_bmg_interface_small_sec)
        break
    default:
        if (u32(o + 12)) {
            sü(u16, 8, o, 12)
        }
    }

}

function get_bmg_interface_84_24_4t11_4_0(o) {// console.log(get_string(o, 0, false))

}
function get_bmg_interface_84_24_4t11_4_4(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_interface_84_24_4t11_4_12t1(o) {
    if (u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_interface_84_24_4t11_4_12t1_8)

    switch (u8(o)) {
    case 4:
        ä(bmg_flag, u32(o + 12), get_bmg_flag)
        break
    case 7:
        ö(u32(o + 12), get_bmg_interface_84_24_4t11_4_12t1_12t7)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }
    ö(u32(o + 20), get_bmg_interface_84_24_4t11_4_12t1_20)
    ä(bmg_flag, u32(o + 24), get_bmg_flag)

}

function get_bmg_interface_84_24_4t11_4_12t1_8(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_84_24_4t11_4_12t1_12t7(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 4), get_bmg_interface_84_24_4t11_4_12t1_12t7_4)

}

function get_bmg_interface_84_24_4t11_4_12t1_12t7_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_bmg_interface_84_24_4t11_4_12t1_20(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_84_24_4t11_4_12t2(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 0), get_bmg_interface_84_24_4t11_4_12t2_0)
    ö(u32(o + 4), get_bmg_interface_84_24_4t11_4_12t2_4)

}

function get_bmg_interface_84_24_4t11_4_12t2_0(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 4), get_bmg_interface_84_24_4t11_4_12t2_0_4)

}

function get_bmg_interface_84_24_4t11_4_12t2_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_84_24_4t11_4_12t2_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_84_24_4t11_4_12t102(o) {
    if (u8(o + 15) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
    ö(u32(o + 0), get_bmg_interface_84_24_4t11_4_12t102_0)
    ö(u32(o + 8), get_bmg_interface_84_24_4t11_4_12t102_8)
    ö(u32(o + 16), get_bmg_interface_84_24_4t11_4_12t102_16)

}

function get_bmg_interface_84_24_4t11_4_12t102_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_84_24_4t11_4_12t102_8(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_interface_84_24_4t11_4_12t102_8_4)

}

function get_bmg_interface_84_24_4t11_4_12t102_8_4(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_84_24_4t11_4_12t102_16(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_84_24_4t11_4_12t105(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_84_24_4t11_4_12t107(o) {
    if (u32(o + 12) !== 2 || u32(o + 20) || u32(o + 24) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 0), get_bmg_interface_84_24_4t11_4_12t107_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_bmg_interface_84_24_4t11_4_12t107_8)
    }

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 4), get_bmg_interface_84_24_4t11_4_12t107_16)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 4), get_bmg_interface_84_24_4t11_4_12t107_32)
    }

}

function get_bmg_interface_84_24_4t11_4_12t107_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_84_24_4t11_4_12t107_8(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8], o)

    ö(u32(o + 0), get_bmg_interface_84_24_4t11_4_12t107_8_0)
    switch (u8(o + 4)) {
    case 0:
        ö(u32(o + 8), get_bmg_interface_84_24_4t11_4_12t107_8_8t0)
        break
    case 1:
        ö(u32(o + 8), get_bmg_interface_84_24_4t11_4_12t107_8_8t1)
        break
    default:
        if (u32(o + 8)) {
            sü(u8, 4, o, 8)
        }
    }

}

function get_bmg_interface_84_24_4t11_4_12t107_8_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_84_24_4t11_4_12t107_8_8t0(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_bmg_interface_84_24_4t11_4_12t107_8_8t0_4)
    }

}

function get_bmg_interface_84_24_4t11_4_12t107_8_8t0_4(o) {
    if (u32(o + 8) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_interface_84_24_4t11_4_12t107_8_8t0_4_4)
    }
    ö(u32(o + 12), get_bmg_interface_84_24_4t11_4_12t107_8_8t0_4_12)

}

function get_bmg_interface_84_24_4t11_4_12t107_8_8t0_4_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}
function get_bmg_interface_84_24_4t11_4_12t107_8_8t0_4_12(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 1 || f32(o + 12) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_interface_84_24_4t11_4_12t107_8_8t1(o) {
    if (u32(o + 0) !== 2068800 || u32(o + 4) !== 2068928 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_font, u32(o + 0), get_bmg_font)
    ä(bmg_text, u32(o + 4), get_bmg_text)

}

function get_bmg_interface_84_24_4t11_4_12t107_16(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_text, u32(o + 0), get_bmg_text)

}

function get_bmg_interface_84_24_4t11_4_12t107_32(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_sound_controls, u32(o + 0), get_bmg_sound_controls)

}

function get_bmg_interface_84_24_4t11_4_12t109(o) {
    if (u32(o + 4) || f32(o + 8) !== 30 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_interface_84_24_4t11_4_12t109_0)

}

function get_bmg_interface_84_24_4t11_4_12t109_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_84_24_12t6(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_interface_84_24_12t6_0)
    ö(u32(o + 4), get_bmg_interface_84_24_12t6_0)

}

function get_bmg_interface_84_24_12t6_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_bmg_interface_84_24_12t15(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_interface_84_24_12t15_0)
    ö(u32(o + 4), get_bmg_interface_84_24_12t15_4)

}

function get_bmg_interface_84_24_12t15_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_interface_84_24_12t15_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_interface_84_24_12t41(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 4), get_bmg_interface_84_24_12t41_4)

}

function get_bmg_interface_84_24_12t41_4(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_84_24_12t46(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 0, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_interface_84_24_12t46_4)

}

function get_bmg_interface_84_24_12t46_4(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_92(o) {
    if (u32(o + 4) || u8(o + 9) || u32(o + 60) || u8(o + 72) !== 255 || u8(o + 73) !== 255 || u8(o + 74) !== 255 || u8(o + 75) !== 255 || u8(o + 76) !== 255 || u8(o + 77) !== 255 || u8(o + 78) !== 255 || u8(o + 79) !== 255 || u8(o + 80) !== 255 || u8(o + 81) !== 255 || u8(o + 82) !== 255 || u8(o + 83) !== 255 || u8(o + 84) !== 255 || u8(o + 85) !== 255 || u8(o + 86) !== 255 || u8(o + 87) !== 255 || u8(o + 88) !== 255 || u8(o + 89) !== 255 || u8(o + 90) !== 255 || u8(o + 91) !== 255 || u8(o + 92) !== 255 || u8(o + 93) !== 255 || u8(o + 94) !== 255 || u8(o + 95) !== 255 || u32(o + 96))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u16, 10, u32, 12, u32, 16, u32, 20, u16, 24, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79, u8, 80, u8, 81, u8, 82, u8, 83, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u32, 96], o)
    ö(u32(o + 0), get_bmg_interface_92_0)
    ö(u32(o + 12), get_bmg_interface_92_12)
    ö(u32(o + 16), get_bmg_interface_92_16)

    switch (u32(o + 20)) {
    case 7:
        ö(u32(o + 28), get_bmg_interface_92_28t7)
        break
    case 32:
        ö(u32(o + 28), get_bmg_interface_92_28t32)
        break
    case 87:
        ö(u32(o + 28), get_bmg_interface_92_28t87)
        break
    default:
        if (u32(o + 28)) {
            sü(u32, 20, o, 28)
        }
    }

    ö(u32(o + 32), get_bmg_interface_92_32)
    switch (u8(o + 26)) {
    case 0:
        ö(u32(o + 36), get_bmg_interface_92_36t0)
        break
    case 1:
        ö(u32(o + 36), get_bmg_interface_92_36t1)
        break
    case 2:
        ö(u32(o + 36), get_bmg_interface_92_36t2)
        break
    case 5:
        ö(u32(o + 36), get_bmg_interface_92_36t5)
        break
    case 6:
        ö(u32(o + 36), get_bmg_interface_92_36t6)
        break
    case 10:
        ö(u32(o + 36), get_bmg_interface_92_36t10)
        break
    case 12:
        ö(u32(o + 36), get_bmg_interface_92_36t12)
        break
    case 13:
        ö(u32(o + 36), get_bmg_interface_92_36t13)
        break
    case 14:
        ö(u32(o + 36), get_bmg_interface_92_36t14)
        break
    case 15:
        ö(u32(o + 36), get_bmg_interface_92_36t15)
        break
    case 16:
        ö(u32(o + 36), get_bmg_interface_92_36t16)
        break
    default:
        if (u32(o + 36)) {
            sü(u8, 26, o, 36)
        }
    }
    ö(u32(o + 40), get_bmg_interface_92_40)

    ö(u32(o + 52), get_bmg_interface_92_52)
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 12), get_bmg_interface_92_68)
    }

}

function get_bmg_interface_92_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_92_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_92_16(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_92_28t7(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_92_28t32(o) {
    if (u8(o + 0) !== 12 || u8(o + 1) || u8(o + 2) || u8(o + 3) || f32(o + 4) !== 1 || f32(o + 8) !== 1 || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, u32, 12], o)
}
function get_bmg_interface_92_28t87(o) {
    if (f32(o + 8) !== 4000000 || f32(o + 12) !== 100000000 || u8(o + 25) || u8(o + 26) || u8(o + 27) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28], o)
}

function get_bmg_interface_92_32(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_bmg_interface_92_32_8)
    }

}

function get_bmg_interface_92_32_8(o) {
    if (u32(o + 0) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 4), get_bmg_interface_92_32_8_4)

}

function get_bmg_interface_92_32_8_4(o) {
    if (u8(o + 3) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_interface_92_32_8_4_8)
    switch (u8(o + 0)) {
    case 4:
        ä(bmg_flag, u32(o + 12), get_bmg_flag)
        break
    case 7:
        ö(u32(o + 12), get_bmg_interface_92_32_8_4_12t7)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }
    ö(u32(o + 20), get_bmg_interface_92_32_8_4_20)

}

function get_bmg_interface_92_32_8_4_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_92_32_8_4_12t7(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_interface_92_32_8_4_12t7_4)

}

function get_bmg_interface_92_32_8_4_12t7_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_interface_92_32_8_4_20(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_92_36t0(o) {
    if (u8(o + 3) || u8(o + 14) || u8(o + 15))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, ], o)
    ö(u32(o + 8), get_bmg_interface_92_36t0_8)
    switch (u8(o + 0)) {
    case 0:
        ß('p_texture', o, 4)
        break
    case 1:
        ß('p_model', o, 4)
        break
    case 3:
        // always 0
        break
    default:
        if (u32(o + 0)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, ], o)
        }
    }

}

function get_bmg_interface_92_36t0_8(o) {
    if (u8(o + 8) || u8(o + 10) || u32(o + 12) || u8(o + 17) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u8, 16, u8, 17, u16, 18, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_interface_92_36t0_8_4)
    }

}

function get_bmg_interface_92_36t0_8_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}

function get_bmg_interface_92_36t1(o) {
    if (u8(o + 3) !== 5)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u16, 22, u16, 24, u8, 26, u8, 27, f32, 28], o)

    ä(bmg_text, u32(o + 4), get_bmg_text)

    switch (u8(o + 0)) {
    case 1:
        ö(u32(o + 8), get_bmg_interface_92_36t1_8t1)
        break
    case 3:
        ö(u32(o + 8), get_bmg_interface_92_36t1_8t3)
        break
    case 4:
        ö(u32(o + 8), get_bmg_interface_92_36t1_8t4)
        break
    default:
        if (u32(o + 8)) {
            sü(u8, 0, o, 8)
        }
    }

    switch (u8(o + 2)) {
    case 0:
        ä(bmg_font, u32(o + 12), get_bmg_font)
        break
    case 1:
        ä(bmg_multi_font, u32(o + 12), get_bmg_multi_font)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 0, o, 12)
        }
    }

    ö(u32(o + 16), get_bmg_interface_92_36t1_16)

}
function get_bmg_interface_92_36t1_8t1(o) {
    if (u8(o + 8) !== 1 || u8(o + 9) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_interface_92_36t1_8t1_4)
    }

}

function get_bmg_interface_92_36t1_8t1_4(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_text, u32(o + 0), get_bmg_text)

}
function get_bmg_interface_92_36t1_8t3(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_interface_92_36t1_8t4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_bmg_interface_92_36t1_8t4_4)
    }

}

function get_bmg_interface_92_36t1_8t4_4(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    ö(u32(o + 4), get_bmg_interface_92_36t1_8t4_4_4)

}

function get_bmg_interface_92_36t1_8t4_4_4(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_interface_92_36t1_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_92_36t2(o) {
    if (u32(o + 0) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_interface_92_36t2_4)

}

function get_bmg_interface_92_36t2_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_interface_92_36t2_4_4)

}

function get_bmg_interface_92_36t2_4_4(o) {
    if (u32(o + 0) || u8(o + 4) !== 1 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u8(o + 12) !== 1 || u8(o + 14) !== 1 || u8(o + 15) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) !== 3000 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_bmg_interface_92_36t5(o) {
    if (u8(o + 4) !== 5 || u8(o + 5) || u8(o + 6) || u8(o + 7) || f32(o + 8) !== 0.5 || f32(o + 12) !== 0.5)
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, f32, 12], o)
    ß('p_texture', o, 0)

}

function get_bmg_interface_92_36t6(o) {
    if (u8(o + 4) !== 1 || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
    ä(bmg_interface, u32(o + 0), get_bmg_interface)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_bmg_interface_92_36t6_12)
    }

}

function get_bmg_interface_92_36t6_12(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8], o)
}
function get_bmg_interface_92_36t10(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_interface_92_36t12(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_92_36t13(o) {
    if (u8(o + 0) || u8(o + 1) !== 5 || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 4), get_bmg_interface_92_36t13_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_bmg_interface_92_36t13_12)
    }

}

function get_bmg_interface_92_36t13_4(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_92_36t13_12(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)
}

function get_bmg_interface_92_36t14(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 4), get_bmg_interface_92_36t14_4)

}

function get_bmg_interface_92_36t14_4(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 4) || u8(o + 9) || u8(o + 10) || u8(o + 11))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11], o)
}

function get_bmg_interface_92_36t15(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_bmg_interface_92_36t15_0)

}

function get_bmg_interface_92_36t15_0(o) {
    if (u32(o + 4) || u32(o + 8) !== 360 || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 16), get_bmg_interface_92_36t15_0_16)

}

function get_bmg_interface_92_36t15_0_16(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 60))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 0)

    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 12), get_bmg_interface_92_36t15_0_16_48)
    }
    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 32), get_bmg_interface_92_36t15_0_16_56)
    }

}

function get_bmg_interface_92_36t15_0_16_48(o) {
    if (u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_bmg_interface_92_36t15_0_16_56(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_bmg_interface_92_36t16(o) {
    if (u8(o + 4) !== 1 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) !== 1 || u32(o + 16) || u32(o + 20) !== 5 || u32(o + 24) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(bmg_interface_texture_related, u32(o + 0), get_bmg_interface_texture_related)
    ä(bmg_text, u32(o + 32), get_bmg_text)

}

function get_bmg_interface_92_40(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u8(o + 13) || u8(o + 15) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u8(o + 33) || u8(o + 34) || u8(o + 35) || u32(o + 36) || u32(o + 40) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u8, 76, u8, 77, u8, 78, u8, 79, u8, 80, u8, 81, u8, 82, u8, 83, u32, 84, u32, 88, u32, 92], o)

    ö(u32(o + 48), get_bmg_interface_92_40_48)
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 28), get_bmg_interface_92_40_72)
    }

}

function get_bmg_interface_92_40_48(o) {
    if (u32(o + 0) !== 8 || u32(o + 4) !== 256 || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 1 || u32(o + 20) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_interface_92_40_72(o) {
    if (u32(o + 0) !== 23 || u32(o + 4) || u32(o + 8) || u32(o + 12) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    ö(u32(o + 16), get_bmg_interface_92_40_72_16)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 36), get_bmg_interface_92_40_72_24)
    }

}

function get_bmg_interface_92_40_72_16(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_interface_92_40_72_16_4)

}

function get_bmg_interface_92_40_72_16_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) !== 5 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_interface_92_40_72_16_4_8)

}

function get_bmg_interface_92_40_72_16_4_8(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_92_40_72_24(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 28) || u32(o + 32))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    ö(u32(o + 4), get_bmg_interface_92_40_72_24_4)
    ä(bmg_sound_controls, u32(o + 24), get_bmg_sound_controls)

}

function get_bmg_interface_92_40_72_24_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_bmg_interface_92_40_72_24_4_4)
    }

}

function get_bmg_interface_92_40_72_24_4_4(o) {
    if (u32(o + 4) || u8(o + 10) || u8(o + 11) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, u16, 8, u8, 10, u8, 11, u32, 12, u32, 16], o)

    ö(u32(o + 0), get_bmg_interface_92_40_72_24_4_4_0)
    switch (u16(o + 8)) {
    case 1:
        ö(u32(o + 12), get_bmg_interface_92_40_72_24_4_4_12t1)
        break
    case 102:
        ö(u32(o + 12), get_bmg_interface_92_40_72_24_4_4_12t102)
        break
    default:
        if (u32(o + 12)) {
            sü(u16, 8, o, 12)
        }
    }

}

function get_bmg_interface_92_40_72_24_4_4_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_92_40_72_24_4_4_12t1(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 12), get_bmg_interface_92_40_72_24_4_4_12t1_12)

}

function get_bmg_interface_92_40_72_24_4_4_12t1_12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_interface_92_40_72_24_4_4_12t1_12_4)

}

function get_bmg_interface_92_40_72_24_4_4_12t1_12_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_interface_92_40_72_24_4_4_12t102(o) {
    if (u32(o + 4) || u32(o + 8) || u8(o + 12) !== 1 || u8(o + 13) || u8(o + 14) || u8(o + 15) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_interface_92_40_72_24_4_4_12t102_0)

}

function get_bmg_interface_92_40_72_24_4_4_12t102_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_interface_92_52(o) {
    if (u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_bmg_interface_92_52_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_bmg_interface_92_52_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_bmg_interface_92_52_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_bmg_interface_92_52_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 40), get_bmg_interface_92_52_36)
    }

}

function get_bmg_interface_92_52_4(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_interface_92_52_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_interface_92_52_20(o) {
    if (f32(o + 12) || u8(o + 18) || u8(o + 19) || f32(o + 24) || f32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, f32, 24, f32, 28], o)
}
function get_bmg_interface_92_52_28(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bmg_interface_92_52_36(o) {
    if (u8(o + 17) || u8(o + 18) || u8(o + 19) || f32(o + 24) || f32(o + 28) || u32(o + 32) || u32(o + 36))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36], o)
}

function get_bmg_interface_92_68(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8], o)
    ö(u32(o + 4), get_bmg_interface_92_68_4)

}

function get_bmg_interface_92_68_4(o) {
    if (u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_bmg_interface_92_68_4_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_bmg_interface_92_68_4_12)
    }
    ö(u32(o + 20), get_bmg_interface_92_68_4_20)

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 32), get_bmg_interface_92_68_4_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_bmg_interface_92_68_4_36)
    }
    ö(u32(o + 44), get_bmg_interface_92_68_4_44)
    ö(u32(o + 52), get_bmg_interface_92_68_4_52)

}

function get_bmg_interface_92_68_4_4(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bmg_interface_92_68_4_12(o) {
    if (u32(o + 8) || u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_interface_92_68_4_20(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_interface_92_68_4_28(o) {
    if (f32(o + 8) !== 1 || u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_interface_92_68_4_36(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bmg_interface_92_68_4_44(o) {
    if (u32(o + 4) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_bmg_interface_92_68_4_52(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 10) || u8(o + 11) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_sound_controls, u32(o + 12), get_bmg_sound_controls)
}

function get_bmg_interface_small_sec(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) !== 250 || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_interface_small_sec_4)

}

function get_bmg_interface_small_sec_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_interface_texture_related(o) {
    if (u32(o + 0) || f32(o + 8) !== -15 || f32(o + 12) !== -4 || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_interface_texture_related_4)
    ö(u32(o + 20), get_bmg_interface_texture_related_20)

}

function get_bmg_interface_texture_related_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) !== 3 || u32(o + 16) || f32(o + 20) !== -18 || f32(o + 24) !== 1.100000023841858 || f32(o + 28) !== 1 || u32(o + 32) !== 100 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_bmg_interface_texture_related_4_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_bmg_interface_texture_related_4_12)
    }

}

function get_bmg_interface_texture_related_4_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ß('p_texture', o, 0)
}
function get_bmg_interface_texture_related_4_12(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)
}

function get_bmg_interface_texture_related_20(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 0), get_bmg_interface_texture_related_20_0)
    ö(u32(o + 4), get_bmg_interface_texture_related_20_4)

}

function get_bmg_interface_texture_related_20_0(o) {
    if (u32(o + 0) !== 4 || f32(o + 8) !== -93 || u32(o + 12) || f32(o + 16) !== 1.399999976158142 || f32(o + 20) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_interface_texture_related_20_0_4)
    }

}

function get_bmg_interface_texture_related_20_0_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)
}

function get_bmg_interface_texture_related_20_4(o) {
    if (u32(o + 0) !== 4 || f32(o + 8) !== 93 || f32(o + 12) !== -1 || f32(o + 16) !== 1.399999976158142 || f32(o + 20) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_interface_texture_related_20_4_4)
    }

}

function get_bmg_interface_texture_related_20_4_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)
}

function get_bmg_a_single_section(o) {
    if (f32(o + 8) !== 100 || u32(o + 12) !== 100 || f32(o + 24) !== 80 || u32(o + 28) !== 2000)
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, f32, 24, u32, 28], o)
}

function get_bmg_font(o) {
    if (u32(o + 16) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 0)

    ä(bmg_model_anim_2_type_c, u32(o + 4), get_bmg_model_anim_2_type_c)
    ö(u32(o + 20), get_bmg_font_20)
    ö(u32(o + 28), get_bmg_font_28)

}

function get_bmg_font_20(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_font_28(o) {
    if (u8(o + 0) !== 32 || u8(o + 1) || u8(o + 2) || u8(o + 3) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
}

function get_bmg_multi_font(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    // ß('p_texture', o, 0) ?
    ö(u32(o + 4), get_bmg_multi_font_4)

}
function get_bmg_multi_font_4(o) {
    if (u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 4) !== 4 || u32(o + 8) !== 4)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, f32, 28], o)

    ä(bmg_font, u32(o + 12), get_bmg_font)
    ä(bmg_font, u32(o + 16), get_bmg_font)
    ä(bmg_font, u32(o + 20), get_bmg_font)

}

function get_bmg_sound_controls(o) {
    if (u8(o + 9) || u8(o + 11) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 16), get_bmg_sound_controls_16)
    }

}

function get_bmg_sound_controls_16(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_sound_controls_16_4)
    }

}

function get_bmg_sound_controls_16_4(o) {
    /*ü(1, [u32, 0], o)*/
    ä(bmg_sound_section, u32(o + 0), get_bmg_sound_section)

}

function get_bmg_sound_section(o) {
    if (u8(o + 8) || u8(o + 11) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
    ß('p_sound', o, 0)
    ö(u32(o + 24), get_bmg_sound_section_24)

}

function get_bmg_sound_section_24(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)
}
/* unordered end */

function get_bmg_texture_anim_0(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 4), get_bmg_texture_anim_0_4)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 16), get_bmg_texture_anim_0_20)
    }

}

function get_bmg_texture_anim_0_4(o) {
    if (u32(o + 0) !== 1 || u8(o + 9) || u8(o + 10) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_texture_anim_0_4_4)
    }

}

function get_bmg_texture_anim_0_4_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)
}

function get_bmg_texture_anim_0_20(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)
}

function bmg_get_offset_patch_list(o, patch_offset) {
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
