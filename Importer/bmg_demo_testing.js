function get_x_bmg_demo() {

    globalThis.offset_mid = undefined

    for (let i = 0; i < u32(12); i++) {
        get_bmg_demo_directory(16 + (i * 24), 16 + (u32(12) * 24))
    }
}
function get_bmg_demo_directory(o, end_offset) {
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

    if (u32(o + 0) !== 288 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], 0)

    if (u32(o + 0) !== 288 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20], o)

    globalThis.bmg_demo_text = []
    globalThis.bmg_demo_sound_controls = []
    globalThis.bmg_demo_sound_section = []
    globalThis.bmg_demo_model = []
    globalThis.bmg_demo_text = []
    globalThis.bmg_demo_interface = []
    globalThis.bmg_demo_interface_92_36t16_0 = []
    globalThis.bmg_demo_interface_92_36t1_12t0 = []
    globalThis.bmg_demo_interface_92_36t1_12t1 = []
    globalThis.bmg_demo_model_anim_2 = []
    globalThis.bmg_demo_world_4 = []
    globalThis.bmg_demo_world_12 = []
    globalThis.bmg_demo_world_20 = []
    globalThis.bmg_demo_world_68 = []
    globalThis.bmg_demo_world_84 = []
    globalThis.bmg_demo_world_92 = []
    globalThis.bmg_demo_world_116 = []
    globalThis.bmg_demo_world_60 = []
    globalThis.bmg_demo_world_44 = []
    globalThis.bmg_demo_world_108 = []
    globalThis.bmg_demo_world_224 = []
    globalThis.bmg_demo_world_100 = []
    globalThis.bmg_demo_idk = []
    globalThis.bmg_demo_world_208_0 = []
    globalThis.bmg_demo_world_12_76 = []
    globalThis.bmg_demo_activator = []
    globalThis.bmg_demo_world_120_0 = []
    globalThis.bmg_demo_world_172_224 = []
    globalThis.bmg_demo_object = []
    globalThis.bmg_demo_strange = []
    globalThis.bmg_demo_world_36 = []
    globalThis.bmg_demo_var = []
    globalThis.bmg_demo_world_176_20_0 = []
    globalThis.bmg_demo_world_224_76 = []
    globalThis.bmg_demo_unknown = []
    globalThis.bmg_demo_flag = []
    globalThis.bmg_demo_sound_section = []
    globalThis.bmg_demo_model_link = []
    globalThis.bmg_demo_model_sub_link = []
    globalThis.bmg_demo_world_12_76_0t10_96 = []
    globalThis.bmg_demo_interface_84_24_4t11_4_12t116 = []
    globalThis.bmg_demo_some_model_anim = []
    globalThis.bmg_demo_unknown_4_4t1 = []
    globalThis.bmg_demo_unknown_4_4t5 = []
    globalThis.bmg_demo_world_12_76_0t10_100 = []
    globalThis.bmg_demo_mysterious_4t17 = []
    globalThis.bmg_demo_var_168_24_12t34 = []
    globalThis.bmg_demo_var_168_24_12t8_0 = []
    globalThis.bmg_demo_model_anims_2 = []
    globalThis.test_temp = []

    globalThis.bmg_demo_world_4 = []
    globalThis.bmg_demo_world_12 = []
    globalThis.bmg_demo_world_84 = []
    globalThis.bmg_demo_world_92 = []
    globalThis.bmg_demo_world_116 = []
    globalThis.bmg_demo_sound_controls = []
    globalThis.bmg_demo_world_4_20 = []
    globalThis.bmg_demo_world_20_64 = []
    globalThis.bmg_demo_world_20_72 = []
    globalThis.bmg_demo_world_0_64 = []
    globalThis.bmg_demo_world_68 = []
    globalThis.bmg_demo_world_208_0 = []
    globalThis.bmg_demo_world_172_176 = []
    globalThis.bmg_demo_world_84_64 = []
    globalThis.bmg_demo_world_20_76_16 = []
    globalThis.bmg_demo_world_20_76_12 = []
    globalThis.bmg_demo_model_link = []
    globalThis.bmg_demo_world_68_64 = []
    globalThis.bmg_demo_idk = []
    globalThis.bmg_demo_world_12_60_0_12 = []
    globalThis.bmg_demo_model_sub_link = []
    globalThis.bmg_demo_world_20_72_24_40 = []
    globalThis.bmg_demo_world_20_72_56_4 = []
    globalThis.bmg_demo_world_20_76_12_0 = []
    globalThis.bmg_demo_world_28_72_0_0 = []
    globalThis.bmg_demo_world_28_76_8_0 = []
    globalThis.bmg_demo_world_176_4_0 = []
    globalThis.bmg_demo_world_176_12_0 = []
    globalThis.bmg_demo_world_176_20_0 = []
    globalThis.bmg_demo_interface_80_36t1_4 = []
    globalThis.bmg_demo_interface_72_24_28 = []
    globalThis.bmg_demo_interface_80_36t1_12t0 = []
    globalThis.bmg_demo_interface_80_36t1_12t1 = []
    globalThis.bmg_demo_interface_80_36t1_8_4_0 = []
    globalThis.bmg_demo_interface_80_36t1_12t0_4 = []

    globalThis.bmg_demo_interface_80_36t1_12t1_4_20 = []
    globalThis.bmg_demo_interface_80_36t1_12t1_4_16 = []
    globalThis.bmg_demo_interface_80_36t1_12t1_4_12 = []
    globalThis.bmg_demo_datapack_108_4 = []
    globalThis.bmg_demo_idk_24_40 = []
    globalThis.bmg_demo_idk_4t1 = []
    globalThis.bmg_demo_idk_4t1_12 = []
    globalThis.bmg_demo_world_68_64_220_8_0 = []
    globalThis.bmg_demo_world_176_12_0_156_0 = []
    globalThis.bmg_demo_world_176_28_0 = []
    globalThis.bmg_demo_world_12_60_0_20_4_4_0 = []
    globalThis.bmg_demo_strange = []
    globalThis.bmg_demo_interface_80_36t1_12t1_4_28 = []
    globalThis.bmg_demo_idk_4t1_12_0 = []
    globalThis.bmg_demo_world_176_12_0_168_24_12 = []
    globalThis.bmg_demo_world_68_64_236_32_8_0 = []
    globalThis.bmg_demo_interface_64_4_12t10_0 = []
    globalThis.bmg_demo_interface_80_36t7_0 = []
    globalThis.bmg_demo_model_anims_2 = []
    globalThis.bmg_demo_mysterious_4t1 = []
    globalThis.bmg_demo_world_176_12_0_168_24_12t34 = []
    globalThis.bmg_demo_world_176_12_0_168_16_12t21 = []
    globalThis.bmg_demo_sound_section = []
    globalThis.bmg_demo_world_176_12_0_168_24_12t18_4 = []
    globalThis.bmg_demo_world_176_12_0_168_24_12t23_0 = []
    globalThis.bmg_demo_world_176_12_0_168_24_12t15_0 = []
    globalThis.bmg_demo_world_176_12_0_168_16_12t8_8 = []

    //both interface/mcp finished
    /*
    check these if same:
    get_bmg_demo_model_sub_link
get_bmg_demo_world_12_60_0_12
    16/11/2025
    */

    director_offset = o
    g.type = u32(o + 4)

    switch (g.type) {
    case 1:
    case 3:
    case 4:
        get_bmg_demo_datapack(end_offset + u32(o + 20), u32(o + 16))
        break
    }

    print_logarray(log_array)

}

function get_bmg_demo_datapack(o, e) {
    if (u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 148))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148], o)

    let end_datapack = o + e
    let offset_patch_list = end_datapack - (u32(o + 12) * 4 + (u32(o + 56) * 8))
    offset_mid = offset_patch_list - u32(o)
    let index_patch_list_amount = u32(o + 16) + u32(o + 52) + u32(o + 28)
    index_patch_list_amount *= 8

    index_patch_list_amount = divisible(index_patch_list_amount, 32)
    let index_patch_list = offset_mid - index_patch_list_amount

    bmg_demo_get_index_patch_list(o, index_patch_list)
    bmg_demo_get_offset_patch_list(o, offset_mid + u32(o))

    globalThis.old_log_array = structuredClone(log_array)

    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 60) + (i * 12), get_bmg_demo_texture_anim)
    }

    switch (g.type) {
    case 1:
    case 3:
        get_bmg_demo_basic(offset_mid)
        break
    case 4:
        get_bmg_demo_world(offset_mid)
        break
    default:
        console.log("?")
    }

    for (let i = 0; i < u32(o + 80); i++) {
        get_bmg_demo_datapack_108(offset_mid + u32(o + 108) + (i * 8))
    }

    // ö(u32(o + 24), get_test_temp)
    // if (u32(o + 24)) {
    //     get_test_temp(end_after_datapack + u32(o + 24))
    // }

    // if (u32(o + 4)) {
    //     // wii = padding
    //     let amt_offset = g.console === "pc" ? 188 : 192

    //     let after_datapack = amt_offset + o
    //     let end_after_datapack;

    //     if (g.console === "pc") {
    //     end_after_datapack = after_datapack + (u32(o + 8) * 4)
    //     } else {
    //         end_after_datapack = after_datapack + divisible((u32(o + 8) * 4), 32)
    //     }
    //     globalThis.pk_audio_end_offset = end_after_datapack

    //     for (let i = 0; i < u32(o + 32); i++) {
    //         get_bmg_demo_basic_audio(after_datapack + (i * 8), end_after_datapack)
    //     }

    //     // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188], o)
    //     // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188], o + after_datapack)
    //     // ö(u32(o + 24), get_test_temp)
    //     // ä(test_temp, u32(o + 24), get_test_temp)
    //     // ä(test_temp, u32(o + 24), get_test_temp)
    //     // get_bmg_demo_world_60 ?
    //     console.log(pk_audio_end_offset, "pk_audio_end_offset", pk_audio_end_offset - index_patch_list)
    // }

}

function get_bmg_demo_datapack_108(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4], o)

    // ö(u32(o + 4), get_bmg_demo_datapack_108_4)
    ä(bmg_demo_interface_80_36t1_8_4_0, u32(o + 4), get_bmg_demo_interface_80_36t1_8_4_0)

}

function get_bmg_demo_datapack_108_4(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_demo_basic_audio_pc(o, e) {
    ü(1, [u32, 0], o)
    get_bmg_demo_basic_audio_pc_0(e + u32(o), e)
}

function get_bmg_demo_basic_audio_pc_0(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188], o)
}

function get_test_temp(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188], o)
    // ü(3, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188], o)
}

function get_bmg_demo_basic_audio(o, e) {
    /*ü(1, [u32, 0, u32, 4], o)*/
    get_bmg_demo_basic_audio_0(e + u32(o), e)
    get_bmg_demo_basic_audio_4(e + u32(o + 4), e)
}
function get_bmg_demo_basic_audio_0(o, e) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/
    let start = e + u32(o + 0)
    let end = start + u32(o + 4)
    if (g.console === "pc") {
        get_bmg_demo_basic_audio_0_0tpc(start, end, e)
    } else {
        get_bmg_demo_basic_audio_0_0twii(start, end, e)
    }

    if (pk_audio_end_offset < end) {
        pk_audio_end_offset = end
    }
}
function get_bmg_demo_basic_audio_0_0twii(o, end, e) {
    if (u32(o + 0) !== 1179861555)
        ü(1, [u32, 0], o)
    // FSB3 file
}
function get_bmg_demo_basic_audio_0_0tpc(o, end, e) {
    if (u32(o + 0) !== 1179011410)
        ü(1, [u32, 0], o)
    // RIFF file
}
function get_bmg_demo_basic_audio_4(o, e) {
    if (u8(o + 8) !== 16 || u8(o + 9) || u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16], o)
    get_bmg_demo_basic_audio_4_0(e + u32(o + 0), e)
}
function get_bmg_demo_basic_audio_4_0(o) {
    // console.log(get_string(o, 0, false))
    /*ü(1, [u32, 0], o)*/
    if (pk_audio_end_offset < o) {
        pk_audio_end_offset = o
    }

}

function get_bmg_demo_audio_list(o, f, afteroffsetlist, end_datapack, datapackoffset) {
    if (u16(o + 16) !== 4096 || u16(o + 18) !== 32767 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28], o)

    if (f) {
        let end_audio = u32(o) + u32(o + 4) + afteroffsetlist
        let bmg_demo_datapack_72 = 0
        let bmg_demo_datapack_76 = 0
        if (u32(datapackoffset + 72)) {
            bmg_demo_datapack_72 = u32(datapackoffset + 72) + afteroffsetlist
        }
        if (u32(datapackoffset + 76)) {
            bmg_demo_datapack_76 = u32(datapackoffset + 76) + afteroffsetlist
        }
        console.log(`end_audio: ${end_audio}  filepatchers:${end_datapack}'dif:', ${end_datapack - end_audio} 
        ,'72:',${bmg_demo_datapack_72}, val ${u32(datapackoffset + 72)}, 72 - 76: ${bmg_demo_datapack_72 - bmg_demo_datapack_76}
         '76:',${bmg_demo_datapack_76} val ${u32(datapackoffset + 76)}
                   `)
        // ü(3, [u32, 0], o) //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28], o)
    }
}

function get_bmg_demo_texture_basic(o, textureoffset) {
    ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    // if (o === textureoffset) {
    //     //ignore this
    //     return
    // }
    // console.log(o - textureoffset,'type',o)
    // ü(3, [u32, 0], o) //ü(1, [u16, 0,u16, 2, u16, 4,u16, 6, u32, 8, u32, 12], o)

}

function get_bmg_demo_texture_anim(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_bmg_demo_texture_anim_0)

}

function get_bmg_demo_texture_anim_0(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 2 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_bmg_demo_texture_anim_0_4)

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 16), get_bmg_demo_texture_anim_0_20)
    }

}

function get_bmg_demo_texture_anim_0_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) !== 1 || u32(o + 12) || u32(o + 16) || u32(o + 20) !== 1000 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_demo_texture_anim_0_4_4)
    }

}

function get_bmg_demo_texture_anim_0_4_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)
}

function get_bmg_demo_texture_anim_0_20(o) {
    if (f32(o + 0) || u8(o + 8) || u8(o + 10) || u8(o + 11))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)
}

function get_bmg_demo_texture(o) {
    ö(u32(o + 8), get_bmg_demo_texture_8)

    // ü(1, [u8, 0], o)
}

function get_bmg_demo_texture_8(o) {//texture data
}

function bmg_demo_get_index_patch_list(o, patch_offset) {
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

function bmg_demo_get_offset_patch_list(o, patch_offset) {
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

function get_bmg_demo_world(o) {
    if (u32(o + 0) !== 320 || u32(o + 4) !== 144736 || u32(o + 8) !== 1 || u32(o + 12) !== 2976 || u32(o + 16) !== 233 || u32(o + 20) !== 3136 || u32(o + 24) !== 10 || u32(o + 28) !== 134944 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) !== 3 || u32(o + 68) !== 144288 || u32(o + 72) || u32(o + 76) || u32(o + 80) !== 1 || u32(o + 84) !== 144640 || u32(o + 88) !== 17 || u32(o + 92) !== 32960 || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) !== 896 || u32(o + 116) !== 34592 || u32(o + 120) !== 144896 || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 172) !== 10309856 || u32(o + 176) !== 144960 || u32(o + 180) || u32(o + 184) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 204) !== 1 || u32(o + 208) !== 144928 || u32(o + 212) || u32(o + 216) || u32(o + 220) || u32(o + 224) || u32(o + 228) || u32(o + 232) || u32(o + 236) || u8(o + 240) !== 126 || u8(o + 241) !== 65 || u8(o + 242) !== 135 || u8(o + 243) !== 52 || u32(o + 244) !== 5047958 || u32(o + 248) !== 71 || u32(o + 252) || u32(o + 256) !== 1235800 || u8(o + 260) !== 120 || u8(o + 261) !== 31 || u8(o + 262) !== 248 || u8(o + 263) !== 47 || u8(o + 264) !== 220 || u8(o + 265) !== 186 || u8(o + 266) !== 171 || u8(o + 267) !== 205 || u32(o + 268) || u32(o + 272) !== 1235604 || u8(o + 276) !== 120 || u8(o + 277) !== 31 || u8(o + 278) !== 248 || u8(o + 279) !== 47 || u32(o + 280) !== 1235648 || u8(o + 284) !== 126 || u8(o + 285) !== 65 || u8(o + 286) !== 136 || u8(o + 287) !== 22 || u8(o + 288) !== 127 || u8(o + 289) !== 253 || u8(o + 290) !== 208 || u8(o + 291) || u32(o + 292) !== 1235648 || u8(o + 296) !== 126 || u8(o + 297) !== 65 || u8(o + 298) !== 136 || u8(o + 299) !== 90 || u32(o + 300) !== 1235584 || u32(o + 304) || u32(o + 308) || u32(o + 312) || u32(o + 316))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u8, 240, u8, 241, u8, 242, u8, 243, u32, 244, u32, 248, u32, 252, u32, 256, u8, 260, u8, 261, u8, 262, u8, 263, u8, 264, u8, 265, u8, 266, u8, 267, u32, 268, u32, 272, u8, 276, u8, 277, u8, 278, u8, 279, u32, 280, u8, 284, u8, 285, u8, 286, u8, 287, u8, 288, u8, 289, u8, 290, u8, 291, u32, 292, u8, 296, u8, 297, u8, 298, u8, 299, u32, 300, u32, 304, u32, 308, u32, 312, u32, 316], o)

    ö(u32(o + 0), get_bmg_demo_world_0)
    ä(bmg_demo_world_4, u32(o + 4), get_bmg_demo_world_4)
    ä(bmg_demo_world_12, u32(o + 12), get_bmg_demo_world_12)
    ö(u32(o + 20), get_bmg_demo_world_20)
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 112), get_bmg_demo_world_28)
    }
    for (let i = 0; i < u32(o + 64); i++) {
        ä(bmg_demo_world_68, u32(o + 68) + (i * 112), get_bmg_demo_world_68)
        // ö(u32(o + 68) , get_bmg_demo_world_68)
    }
    ä(bmg_demo_world_84, u32(o + 84), get_bmg_demo_world_84)
    for (let i = 0; i < u32(o + 88); i++) {
        ä(bmg_demo_world_92, u32(o + 92) + (i * 96), get_bmg_demo_world_92)
    }
    for (let i = 0; i < u32(o + 112); i++) {
        ä(bmg_demo_world_116, u32(o + 116) + (i * 112), get_bmg_demo_world_116)
    }
    ö(u32(o + 120), get_bmg_demo_world_120)
    ö(u32(o + 172), get_bmg_demo_world_172)
    ö(u32(o + 176), get_bmg_demo_world_176)
    ö(u32(o + 208), get_bmg_demo_world_208)

}

function get_bmg_demo_world_0(o) {
    if (f32(o + 0) !== -5 || f32(o + 4) !== -5 || f32(o + 8) !== -5 || f32(o + 12) !== 1 || f32(o + 16) !== 5 || f32(o + 20) !== 5 || f32(o + 24) !== 5 || f32(o + 28) !== 1 || u32(o + 32) !== 2928 || u32(o + 36) !== 20 || f32(o + 40) !== 0.4000000059604645 || f32(o + 44) !== 10 || f32(o + 48) !== 0.4000000059604645 || u32(o + 52) !== 25 || u32(o + 56) !== 1 || u32(o + 60) !== 25 || u32(o + 64) !== 416 || u32(o + 68) !== 1 || u32(o + 72) || u32(o + 76) !== 416 || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, f32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ö(u32(o + 32), get_bmg_demo_world_0_32)

    let amt = u32(o + 52) * u32(o + 56) * u32(o + 60)

    for (let i = 0; i < amt; i++) {
        ä(bmg_demo_world_0_64, u32(o + 64) + (i * 4), get_bmg_demo_world_0_64)
    }
    ö(u32(o + 76), get_bmg_demo_world_0_76)

}

function get_bmg_demo_world_0_32(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
}
function get_bmg_demo_world_0_64(o) {
    if (u32(o + 0))
        ü(1, [u32, 0], o)
}
function get_bmg_demo_world_0_76(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// same offset as 64 seen
}

function get_bmg_demo_world_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 144800 || u32(o + 20) !== 144736 || u32(o + 24) || u32(o + 28) !== 1 || f32(o + 32) !== 500 || f32(o + 36) !== 1 || f32(o + 40) !== 500 || u32(o + 44) || u32(o + 48) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 16), get_bmg_demo_world_4_16)
    // ö(u32(o + 20), get_bmg_demo_world_4_20)
    // ä(bmg_demo_world_4_20, u32(o + 20), get_bmg_demo_world_4_20)
    ä(bmg_demo_world_4, u32(o + 20), get_bmg_demo_world_4)

}

function get_bmg_demo_world_4_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)
}
function get_bmg_demo_world_4_20(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
}

function get_bmg_demo_world_12(o) {
    if (u32(o + 0) !== 728 || u32(o + 4) || u32(o + 8) || u32(o + 12) !== 65544 || u32(o + 16) !== 65544 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 1 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) !== 10083456 || u8(o + 64) !== 255 || u8(o + 65) !== 255 || u8(o + 66) !== 255 || u8(o + 67) !== 255 || u32(o + 68) !== 257 || f32(o + 72) !== 500 || f32(o + 76) !== 1000 || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) !== 65535 || u32(o + 112) !== 256 || u32(o + 116) || u32(o + 120) !== 1 || u32(o + 124) !== 1000 || u32(o + 128) || u32(o + 132) !== 1 || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, f32, 72, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156], o)

    ö(u32(o + 60), get_bmg_demo_world_12_60)

}

function get_bmg_demo_world_12_60(o) {
    if (u32(o + 0) !== 10083488 || u8(o + 4) !== 13 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_world_12_60_0)

}

function get_bmg_demo_world_12_60_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) !== 10083584 || u32(o + 16) !== 2 || u32(o + 20) !== 10083744 || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 5000 || f32(o + 36) !== 10 || f32(o + 40) !== 380 || f32(o + 44) !== 75 || u32(o + 48) || u32(o + 52) || u32(o + 56) !== 10088128 || u32(o + 60) !== 50 || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u8(o + 84) !== 70 || u8(o + 85) !== 28 || u8(o + 86) !== 64 || u8(o + 87) || u32(o + 88) !== 1000 || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u32, 88, u32, 92], o)

    // ä(bmg_demo_world_12_60_0_12, u32(o + 12), get_bmg_demo_world_12_60_0_12)
    ä(bmg_demo_model_sub_link, u32(o + 12), get_bmg_demo_model_sub_link)
    // ö(u32(o + 12), get_bmg_demo_world_12_60_0_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 8), get_bmg_demo_world_12_60_0_20)
    }
    // ö(u32(o + 20), get_bmg_demo_world_12_60_0_20)

    ö(u32(o + 56), get_bmg_demo_world_12_60_0_56)

}

function get_bmg_demo_world_12_60_0_12(o) {
    if (u32(o + 0) !== 10062144 || u32(o + 4) !== 1 || u32(o + 8) !== 10083616 || u32(o + 12) !== 10 || u32(o + 16) !== 10083648 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ä(bmg_demo_world_12_60_0_12, u32(o + 12), get_bmg_demo_world_12_60_0_12)
    // globalThis.bmg_demo_world_12_60_0_12 = []

    // ö(u32(o + 0), get_bmg_demo_world_12_60_0_12_0)
    ä(bmg_demo_model_anims_2, u32(o + 0), get_bmg_demo_model_anims_2)
    ö(u32(o + 8), get_bmg_demo_world_12_60_0_12_8)
    // patch sound
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_bmg_demo_world_12_60_0_12_16)
    }

}

// function get_bmg_demo_world_12_60_0_12_0(o) {
//     if (u32(o + 8) !== 1 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

//     for (let i = 0; i < u32(o); i++) {
//         ö(u32(o + 16) + (i * 32), get_bmg_demo_world_12_60_0_12_0_16)
//     }

// }

// function get_bmg_demo_world_12_60_0_12_0_16(o) {/*ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)*/
// }

// function get_bmg_demo_world_12_60_0_12_8(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
//     ß('p_model', o, 0)

// }
// function get_bmg_demo_world_12_60_0_12_16(o) {
//     if (u8(o + 4) || u8(o + 6) || u8(o + 7))
//         ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7], o)
//     ß('p_model', o, 0)

// }

function get_bmg_demo_world_12_60_0_20(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4], o)

    ö(u32(o + 4), get_bmg_demo_world_12_60_0_20_4)

}

function get_bmg_demo_world_12_60_0_20_4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_demo_world_12_60_0_20_4_4)
    }

}

function get_bmg_demo_world_12_60_0_20_4_4(o) {
    /*ü(1, [u32, 0], o)*/

    // ö(u32(o + 0), get_bmg_demo_world_12_60_0_20_4_4_0)
    // ä(bmg_demo_world_12_60_0_20_4_4_0, u32(o + 0), get_bmg_demo_world_12_60_0_20_4_4_0)
    // ä(bmg_demo_world_12_60_0_20_4_4_0, u32(o + 0), get_bmg_demo_world_12_60_0_20_4_4_0)
    ä(bmg_demo_model_link, u32(o + 0), get_bmg_demo_model_link)

}

function get_bmg_demo_world_12_60_0_56(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 10088160 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_world_12_60_0_56_4)

}

function get_bmg_demo_world_12_60_0_56_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_world_20(o) {
    if (u32(o + 0) !== 2799 || u32(o + 4) !== 65555 || u32(o + 8) || u32(o + 12) !== 8 || u32(o + 16) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 1 || u32(o + 48) || u32(o + 52) || u32(o + 56) || f32(o + 60) !== 1 || u32(o + 64) !== 1407776 || f32(o + 68) !== 20 || u32(o + 72) !== 10088192 || u32(o + 76) !== 10089952 || u32(o + 80) || f32(o + 84) !== 1000 || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, f32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)

    ä(bmg_demo_world_20_64, u32(o + 64), get_bmg_demo_world_20_64)
    // ö(u32(o + 64), get_bmg_demo_world_20_64)
    // ä(bmg_demo_world_20_72, u32(o + 72), get_bmg_demo_world_20_72)
    ä(bmg_demo_idk, u32(o + 72), get_bmg_demo_idk)
    // ö(u32(o + 72), get_bmg_demo_world_20_72)
    // ö(u32(o + 76), get_bmg_demo_world_20_76)
    // ö(u32(o + 76), get_bmg_demo_world_20_76)
    ä(bmg_demo_model_link, u32(o + 76), get_bmg_demo_model_link)

}

function get_bmg_demo_world_20_64(o) {
    if (u32(o + 0) !== 5 || u32(o + 4) !== 35 || f32(o + 8) !== 1 || f32(o + 12) !== 259 || u32(o + 16) !== 1 || u32(o + 20) !== 7 || u32(o + 24) || u32(o + 28) || u32(o + 32) !== 1407840 || u32(o + 36) || u32(o + 40) !== 92 || u32(o + 44) || u32(o + 48) || u32(o + 52) !== 1408208 || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    // model_anims 1
    // ö(u32(o + 32), get_bmg_demo_world_20_64_32)
    // ö(u32(o + 52), get_bmg_demo_world_20_64_52)

}

function get_bmg_demo_world_20_64_32(o) {
    ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, f32, 88, f32, 92, f32, 96, f32, 100, f32, 104, f32, 108, f32, 112, f32, 116, f32, 120, f32, 124, f32, 128, f32, 132, f32, 136, f32, 140, f32, 144, f32, 148, f32, 152, f32, 156, f32, 160, f32, 164, f32, 168, f32, 172, f32, 176, f32, 180, f32, 184, f32, 188, f32, 192, f32, 196, f32, 200, f32, 204, f32, 208, f32, 212, f32, 216, f32, 220, f32, 224, f32, 228, f32, 232, f32, 236, f32, 240, f32, 244, f32, 248, f32, 252, f32, 256, f32, 260, f32, 264, f32, 268, f32, 272, f32, 276, f32, 280, f32, 284, f32, 288, f32, 292, f32, 296, f32, 300, f32, 304, f32, 308, f32, 312, f32, 316, f32, 320, f32, 324, f32, 328, f32, 332, f32, 336, f32, 340, f32, 344, f32, 348, f32, 352, f32, 356, f32, 360, f32, 364, ], o)
}
function get_bmg_demo_world_20_64_52(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, ], o)
}

// function get_bmg_demo_world_20_72(o) {
//     if (u32(o + 0) !== 16842752 || u32(o + 4) !== 10088288 || u32(o + 8) || u8(o + 12) !== 73 || u8(o + 13) !== 116 || u8(o + 14) !== 36 || u8(o + 15) || u32(o + 16) || u32(o + 20) || u32(o + 24) !== 10088640 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) !== 1 || u32(o + 56) !== 10089664 || u32(o + 60) || u8(o + 64) !== 255 || u8(o + 65) !== 255 || u8(o + 66) !== 255 || u8(o + 67) !== 255 || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
//         ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

//     ä(bmg_demo_model_link, u32(o + 4), get_bmg_demo_model_link)
//     // ö(u32(o + 4), get_bmg_demo_model_link)
//     ö(u32(o + 24), get_bmg_demo_world_20_72_24)
//     ö(u32(o + 56), get_bmg_demo_world_20_72_56)

// }

function get_bmg_demo_model_link(o) {
    if (u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_bmg_demo_model_link_4)
    ö(u32(o + 8), get_bmg_demo_model_link_8)
    ä(bmg_demo_model_sub_link, u32(o + 12), get_bmg_demo_model_sub_link)
    // ö(u32(o + 12), get_bmg_demo_model_sub_link)
    ö(u32(o + 16), get_bmg_demo_model_link_16)
    //model anims
    ö(u32(o + 28), get_bmg_demo_model_link_28)
    ö(u32(o + 32), get_bmg_demo_model_link_32)
    ö(u32(o + 48), get_bmg_demo_model_link_48)

    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 64), get_bmg_demo_mysterious)
        // ö(u32(o + 56) + (i*64), get_bmg_demo_model_link_56)
    }

}

function get_bmg_demo_model_link_4(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_model_link_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_model_sub_link(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ä(bmg_demo_model_sub_link, u32(o + link), get_bmg_demo_model_sub_link)
    // globalThis.bmg_demo_model_sub_link = []

    ä(bmg_demo_model_anims_2, u32(o + 0), get_bmg_demo_model_anims_2)
    // ö(u32(o + 0), get_bmg_demo_model_anims_2)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_bmg_demo_model_sub_link_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_bmg_demo_model_sub_link_16)
    }

}

function get_bmg_demo_model_anims_2(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 16) + (i * 32), get_bmg_demo_model_anims_2_16)
    }

}

function get_bmg_demo_model_anims_2_16(o) {/*ü(1, [f32, 0, f32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)*/
}
function get_bmg_demo_model_sub_link_8(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_model', o, 0)

}

function get_bmg_demo_model_sub_link_16(o) {
    if (u8(o + 4) || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7], o)
    ß('p_model', o, 0)

}

function get_bmg_demo_model_link_16(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// prob model_anim
}
function get_bmg_demo_model_link_28(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_model_link_32(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_model_link_48(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
// function get_bmg_demo_model_link_56(o) {
// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, f32, 36, u32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, ], o)
// }

// function get_bmg_demo_world_20_72_24(o) {
//     if (u32(o + 0) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12) !== 1000 || f32(o + 16) !== 1 || f32(o + 20) !== 1 || f32(o + 24) !== 1 || u32(o + 28) || u32(o + 32) || u8(o + 36) !== 255 || u8(o + 37) !== 255 || u8(o + 38) !== 255 || u8(o + 39) !== 255 || u32(o + 40) !== 10088736 || u32(o + 44) !== 786432 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) !== 10089504 || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
//         ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

//     // ä(bmg_demo_world_20_72_24_40, u32(o + 40), get_bmg_demo_world_20_72_24_40)
//     ä(bmg_demo_world_208_0, u32(o + 40), get_bmg_demo_world_208_0)
//     // ö(u32(o + 40), get_bmg_demo_world_20_72_24_40)
//     ö(u32(o + 60), get_bmg_demo_world_20_72_24_60)

// }

// function get_bmg_demo_world_20_72_24_40(o) {// ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, f32, 80, f32, 84, u32, 88, u32, 92, u32, 96, f32, 100, f32, 104, f32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, ], o)
// }
// function get_bmg_demo_world_20_72_24_60(o) {
//     if (f32(o + 0) !== 10000 || u32(o + 4) !== 10089536 || u32(o + 8) !== 10089568 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

//     ö(u32(o + 4), get_bmg_demo_world_20_72_24_60_4)
//     ö(u32(o + 8), get_bmg_demo_world_20_72_24_60_8)

// }

// function get_bmg_demo_world_20_72_24_60_4(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
// }
// function get_bmg_demo_world_20_72_24_60_8(o) {
//     if (u32(o + 0) !== 10089600 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

//     ö(u32(o + 0), get_bmg_demo_world_20_72_24_60_8_0)

// }

// function get_bmg_demo_world_20_72_24_60_8_0(o) {
//     if (u32(o + 0) !== 1 || u32(o + 4) !== 10089632 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

//     ö(u32(o + 4), get_bmg_demo_world_20_72_24_60_8_0_4)

// }

// function get_bmg_demo_world_20_72_24_60_8_0_4(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
// }

// function get_bmg_demo_world_20_76(o) {
//     if (u32(o + 0) !== 7740 || u32(o + 4) !== 10090016 || u32(o + 8) !== 10090048 || u32(o + 12) !== 10090112 || u32(o + 16) !== 1407776 || f32(o + 20) !== 30 || u32(o + 24) !== 65792 || u32(o + 28) || u32(o + 32) !== 10090144 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) !== 10090176 || u32(o + 52) || u32(o + 56) || u32(o + 60))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

//     ö(u32(o + 4), get_bmg_demo_world_20_76_4)
//     ö(u32(o + 8), get_bmg_demo_world_20_76_8)
//     ä(bmg_demo_world_20_76_12, u32(o + 12), get_bmg_demo_world_20_76_12)
//     // ö(u32(o + 12), get_bmg_demo_world_20_76_12)
//     // ä(bmg_demo_world_20_76_16, u32(o + 16), get_bmg_demo_world_20_76_16)
//     ä(bmg_demo_world_20_64, u32(o + 16), get_bmg_demo_world_20_64)
//     // ö(u32(o + 16), get_bmg_demo_world_20_76_16)
//     ö(u32(o + 32), get_bmg_demo_world_20_76_32)
//     ö(u32(o + 48), get_bmg_demo_world_20_76_48)

// }

// function get_bmg_demo_world_20_76_4(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
// }
// function get_bmg_demo_world_20_76_8(o) {// console.log(get_string(o, 0, false))

// // ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_20_76_12(o) {
//     if (u32(o + 0) !== 10064288 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

//     // ö(u32(o + 0), get_bmg_demo_world_20_76_12_0)
//     // ä(bmg_demo_world_20_76_12_0, u32(o + 0), get_bmg_demo_world_20_76_12_0)
//     ä(bmg_demo_model_anims_2, u32(o + 0), get_bmg_demo_model_anims_2)

// }

// function get_bmg_demo_world_20_76_12_0(o) {
//     if (u32(o + 0) !== 1 || u32(o + 4) !== 101283572 || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 10064320 || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

//     // ä(bmg_demo_world_20_76_12_0, u32(o + 0), get_bmg_demo_world_20_76_12_0)
//     // globalThis.bmg_demo_world_20_76_12_0 = []

//     ö(u32(o + 16), get_bmg_demo_world_20_76_12_0_16)

// }

// function get_bmg_demo_world_20_76_12_0_16(o) {
//     if (f32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) !== 65280)
//         ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
// }

// function get_bmg_demo_world_20_76_16(o) {
//     ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
// }
// function get_bmg_demo_world_20_76_32(o) {
//     if (f32(o + 0) !== 1 || f32(o + 4) !== 259 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
// }
// function get_bmg_demo_world_20_76_48(o) {
//     if (f32(o + 0) !== -0.5 || u32(o + 4) || f32(o + 8) !== -0.5 || u32(o + 12) || f32(o + 16) !== 0.5 || f32(o + 20) !== 1 || f32(o + 24) !== 0.5 || u32(o + 28) || f32(o + 32) !== 0.5 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
//         ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
// }

function get_bmg_demo_world_28(o) {
    if (u8(o + 4) || u8(o + 5) !== 2 || u8(o + 6) || u8(o + 7) !== 1 || u32(o + 8) || u8(o + 12) || u8(o + 13) !== 1 || u8(o + 14) || u8(o + 15) !== 8 || u8(o + 16) || u8(o + 17) !== 1 || u8(o + 18) || u8(o + 19) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 44) || u32(o + 48) || u32(o + 68) || u32(o + 80) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    // 52 = bytelength 32 bytes
    let bytelength = u32(o + 52)
    for (let i = 0; i < bytelength; i += 32) {
        ö(u32(o + 56) + i, get_bmg_demo_world_28_56)
    }
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 4), get_bmg_demo_world_28_64)
    }
    globalThis.get_bmg_demo_world_28_72_count = u32(o + 40)
    ö(u32(o + 72), get_bmg_demo_world_28_72)
    delete globalThis.get_bmg_demo_world_28_72_count
    ö(u32(o + 76), get_bmg_demo_world_28_76)

}

function get_bmg_demo_world_28_56(o) {
    if (u8(o + 17) !== 254 || u8(o + 20) !== 254 || u8(o + 21) !== 254 || u8(o + 22) !== 254 || u8(o + 23) !== 254 || u8(o + 24) !== 254 || u8(o + 25) !== 254 || u8(o + 26) !== 254 || u8(o + 27) !== 254 || u8(o + 28) !== 254 || u8(o + 29) !== 254 || u8(o + 30) !== 254 || u8(o + 31) !== 254)
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
}
function get_bmg_demo_world_28_64(o) {/*ü(1, [u32, 0], o)*/
}
function get_bmg_demo_world_28_72(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < get_bmg_demo_world_28_72_count; i++) {
        ö(u32(o + 0) + (i * 4), get_bmg_demo_world_28_72_0)
    }

}

function get_bmg_demo_world_28_72_0(o) {
    /*ü(1, [u32, 0], o)*/

    // ö(u32(o + 0), get_bmg_demo_world_28_72_0_0)
    // ä(bmg_demo_world_28_72_0_0, u32(o + 0), get_bmg_demo_world_28_72_0_0)
    ä(bmg_demo_world_116, u32(o + 0), get_bmg_demo_world_116)

}

// function get_bmg_demo_world_28_72_0_0(o) {
//     ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, u32, 76, u32, 80, u32, 84, u32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108, ], o)
// }

function get_bmg_demo_world_28_76(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_bmg_demo_world_28_76_8)
    }

}

function get_bmg_demo_world_28_76_8(o) {
    /*ü(1, [u32, 0], o)*/

    // ö(u32(o + 0), get_bmg_demo_world_28_76_8_0)
    // ä(bmg_demo_world_28_76_8_0, u32(o + 0), get_bmg_demo_world_28_76_8_0)
    ä(bmg_demo_world_92, u32(o + 0), get_bmg_demo_world_92)

}

// function get_bmg_demo_world_28_76_8_0(o) {
//     ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)
// }

function get_bmg_demo_world_68(o) {
    if (u8(o + 4) || u8(o + 5) !== 10 || u8(o + 6) || u32(o + 8) || u8(o + 12) || u8(o + 13) || u8(o + 14) || u8(o + 16) || u8(o + 17) || u8(o + 18) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 1 || u32(o + 48) || f32(o + 52) !== 3.1415927410125732 || u32(o + 56) || f32(o + 60) !== 1 || u8(o + 68) !== 71 || u8(o + 69) !== 175 || u8(o + 70) !== 200 || u8(o + 71) || u8(o + 72) !== 71 || u8(o + 73) !== 28 || u8(o + 74) !== 64 || u8(o + 75) || u32(o + 76) || u32(o + 80) !== 5000 || u32(o + 84) !== 1000 || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

    // ö(u32(o + 64), get_bmg_demo_world_68_64)
    ä(bmg_demo_world_68_64, u32(o + 64), get_bmg_demo_world_68_64)

}

function get_bmg_demo_world_68_64(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) !== 196864 || u8(o + 16) !== 71 || u8(o + 17) !== 195 || u8(o + 18) !== 80 || u8(o + 19) || u32(o + 20) || f32(o + 24) !== 10 || f32(o + 32) !== 2 || u32(o + 36) !== 1 || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 112) || u32(o + 116) || u32(o + 120) !== 1 || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u8(o + 148) !== 119 || u8(o + 149) !== 53 || u8(o + 150) !== 148 || u8(o + 151) || u32(o + 152) || u32(o + 156) !== 768 || u32(o + 160) || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) || f32(o + 184) !== 5 || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 204) || u32(o + 208) || u32(o + 212) || u32(o + 216) !== 1 || u32(o + 224) || u32(o + 228) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u8, 148, u8, 149, u8, 150, u8, 151, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, f32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252], o)

    // ä(bmg_demo_world_68_64, u32(o + 64), get_bmg_demo_world_68_64)
    // globalThis.bmg_demo_world_68_64 = []

    ö(u32(o + 0), get_bmg_demo_world_68_64_0)
    ö(u32(o + 28), get_bmg_demo_world_68_64_28)
    ö(u32(o + 108), get_bmg_demo_world_68_64_108)
    ö(u32(o + 188), get_bmg_demo_world_68_64_188)
    ö(u32(o + 220), get_bmg_demo_world_68_64_220)
    for (let i = 0; i < u32(o + 232); i++) {
        ö(u32(o + 236) + (i * 36), get_bmg_demo_world_68_64_236)
    }

}

function get_bmg_demo_world_68_64_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_world_68_64_28(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 10 || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 2 || f32(o + 24) !== 2 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_bmg_demo_world_68_64_108(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_world_68_64_108_4)
    ö(u32(o + 8), get_bmg_demo_world_68_64_108_8)

}

function get_bmg_demo_world_68_64_108_4(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_68_64_108_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_world_68_64_108_8_0)

}

function get_bmg_demo_world_68_64_108_8_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_world_68_64_108_8_0_4)

}

function get_bmg_demo_world_68_64_108_8_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_world_68_64_188(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_68_64_220(o) {
    if (u8(o + 4) !== 7 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u8(o + 24) !== 78 || u8(o + 25) !== 238 || u8(o + 26) !== 107 || u8(o + 27) !== 40 || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_world_68_64_220_0)
    ö(u32(o + 8), get_bmg_demo_world_68_64_220_8)

}

function get_bmg_demo_world_68_64_220_0(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// console.log(get_string(o, 0, false))
}
function get_bmg_demo_world_68_64_220_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_demo_flag, u32(o + 0), get_bmg_demo_flag)

}

// function get_bmg_demo_world_68_64_220_8_0(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 16) || u32(o + 24) !== 1 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) !== 16777216 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

//     ö(u32(o + 8), get_bmg_demo_world_68_64_220_8_0_8)
//     ö(u32(o + 20), get_bmg_demo_world_68_64_220_8_0_20)

// }

// function get_bmg_demo_world_68_64_220_8_0_8(o) {// console.log(get_string(o, 0, false))
// }
// function get_bmg_demo_world_68_64_220_8_0_20(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
// }

function get_bmg_demo_world_68_64_236(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    ö(u32(o + 4), get_bmg_demo_world_68_64_236_4)
    ö(u32(o + 8), get_bmg_demo_world_68_64_236_8)
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 88), get_bmg_demo_world_68_64_236_32)
    }

}

function get_bmg_demo_world_68_64_236_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_world_68_64_236_4_4)

}

function get_bmg_demo_world_68_64_236_4_4(o) {
    if (u32(o + 0) !== 33554432 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_world_68_64_236_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_world_68_64_236_32(o) {
    if (u32(o + 4) !== 1 || u32(o + 12) || u32(o + 20) || u32(o + 24) || f32(o + 28) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) !== 6 || u32(o + 44) || f32(o + 48) !== 1 || f32(o + 52) !== 1 || u32(o + 56) || f32(o + 64) !== 1 || f32(o + 68) !== 1 || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, u32, 56, u32, 60, f32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84], o)

    ö(u32(o + 0), get_bmg_demo_world_68_64_236_32_0)
    ö(u32(o + 8), get_bmg_demo_world_68_64_236_32_8)
    ö(u32(o + 16), get_bmg_demo_world_68_64_236_32_16)
    ö(u32(o + 84), get_bmg_demo_world_68_64_236_32_84)

}

function get_bmg_demo_world_68_64_236_32_0(o) {// console.log(get_string(o, 0, false))
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_world_68_64_236_32_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 0), get_bmg_demo_world_68_64_236_32_8_0)
    // ä(bmg_demo_world_68_64_236_32_8_0, u32(o + 0), get_bmg_demo_world_68_64_236_32_8_0)
    ä(bmg_demo_model_link, u32(o + 0), get_bmg_demo_model_link)

}

function get_bmg_demo_world_68_64_236_32_8_0(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
}

function get_bmg_demo_world_68_64_236_32_16(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_68_64_236_32_84(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_world_84(o) {
    if (u32(o + 0) !== 746 || u8(o + 4) || u8(o + 5) !== 11 || u8(o + 6) || u8(o + 7) || u32(o + 8) || u8(o + 12) || u8(o + 13) !== 1 || u8(o + 14) || u8(o + 15) !== 8 || u8(o + 16) || u8(o + 17) !== 1 || u8(o + 18) || u8(o + 19) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 1 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) !== 1 || u32(o + 64) !== 2976 || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    // ö(u32(o + 64), get_bmg_demo_world_84_64)
    // ä(bmg_demo_world_84_64, u32(o + 64), get_bmg_demo_world_84_64)
    ä(bmg_demo_world_12, u32(o + 64), get_bmg_demo_world_12)

}

function get_bmg_demo_world_84_64(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, f32, 72, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, ], o)
}

function get_bmg_demo_world_92(o) {
    if (u8(o + 4) || u8(o + 5) !== 13 || u8(o + 6) || u32(o + 8) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 44) !== 1 || u32(o + 48) || u32(o + 56) || f32(o + 68) !== 500 || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ä(bmg_demo_idk, u32(o + 64), get_bmg_demo_idk)

}

function get_bmg_demo_idk(o) {
    if (u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) || u32(o + 8) || u8(o + 15) || u32(o + 16) || u32(o + 20) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 60) || u8(o + 64) !== 255 || u8(o + 65) !== 255 || u8(o + 66) !== 255 || u8(o + 67) !== 255 || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)
    ß('p_model', o, 4)

    // ß('p_model', o, 4)
    switch (u8(o + 0)) {
    case 0:
        ß('p_model', o, 4)
        break
    case 1:
        // ä(bmg_demo_idk_4t1, u32(o + 4), get_bmg_demo_idk_4t1)
        ä(bmg_demo_model_link, u32(o + 4), get_bmg_demo_model_link)
        // ö(u32(o + 4), get_bmg_demo_idk_4t1)
        break
    default:
        if (u32(o + 4)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)
            sü(u8, 0, o, 4)
        }
    }

    // ö(u32(o + 4), get_bmg_demo_idk_4)

    ö(u32(o + 24), get_bmg_demo_idk_24)
    // myst
    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 64), get_bmg_demo_mysterious)
    }

}

function get_bmg_demo_idk_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_idk_24(o) {
    if (u32(o + 0) || f32(o + 4) !== 1 || u32(o + 8) || f32(o + 16) !== 1 || f32(o + 20) !== 1 || f32(o + 24) !== 1 || u32(o + 28) || u32(o + 32) || u8(o + 36) !== 255 || u8(o + 37) !== 255 || u8(o + 38) !== 255 || u8(o + 39) !== 255 || u32(o + 40) !== 10088736 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    // ä(bmg_demo_idk_24_40, u32(o + 40), get_bmg_demo_idk_24_40)
    ä(bmg_demo_world_208_0, u32(o + 40), get_bmg_demo_world_208_0)
    // ö(u32(o + 40), get_bmg_demo_idk_24_40)
    ö(u32(o + 60), get_bmg_demo_idk_24_60)

}

function get_bmg_demo_idk_24_40(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, f32, 80, f32, 84, u32, 88, u32, 92, u32, 96, f32, 100, f32, 104, f32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, ], o)
}
function get_bmg_demo_idk_24_60(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_idk_24_60_4)
    ö(u32(o + 8), get_bmg_demo_idk_24_60_8)

}

function get_bmg_demo_idk_24_60_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28], o)
}
function get_bmg_demo_idk_24_60_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_idk_24_60_8_0)

}

function get_bmg_demo_idk_24_60_8_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_idk_24_60_8_0_4)

}

function get_bmg_demo_idk_24_60_8_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_mysterious(o) {
    if (u8(o + 1) || u8(o + 2) || u32(o + 12) || f32(o + 28) || u32(o + 32) || u32(o + 40) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, f32, 36, u32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60], o)

    switch (u8(o + 0)) {
    case 1:
        ä(bmg_demo_mysterious_4t1, u32(o + 4), get_bmg_demo_mysterious_4t1)
        // ö(u32(o + 4), get_bmg_demo_mysterious_4t1)
        break
    case 2:
        ä(bmg_demo_strange, u32(o + 4), get_bmg_demo_strange)
        // ö(u32(o + 4), get_bmg_demo_strange)
        break
    case 3:
        ä(bmg_demo_sound_controls, u32(o + 4), get_bmg_demo_sound_controls)
        // ö(u32(o + 4), get_bmg_demo_mysterious_4t3)
        break
    case 8:
        ä(bmg_demo_model_link, u32(o + 4), get_bmg_demo_model_link)
        // ö(u32(o + 4), get_bmg_demo_mysterious_4t8)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }
    // ö(u32(o + 4), get_bmg_demo_mysterious_4)
    ö(u32(o + 8), get_bmg_demo_mysterious_8)

}
function get_bmg_demo_mysterious_4t1(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ä(bmg_demo_mysterious_4t1, u32(o + 4), get_bmg_demo_mysterious_4t1)
    // globalThis.bmg_demo_mysterious_4t1 = []

    for (let i = 0; i < u32(o); i++) {
    ö(u32(o + 4) + (i*16), get_bmg_demo_mysterious_4t1_4)
    }

}

function get_bmg_demo_mysterious_4t1_4(o) {
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12 ], o)
}

function get_bmg_demo_strange(o) {
    if (u8(o + 8) !== 1 || u8(o + 11) || u32(o + 24) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_bmg_demo_strange_4)
    ä(bmg_demo_sound_controls, u32(o + 28), get_bmg_demo_sound_controls)

}

function get_bmg_demo_strange_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_strange_4_0)

}

function get_bmg_demo_strange_4_0(o) {
if(u32(o+8) ||u32(o+12) ||u32(o+16) ||u32(o+20) ||u32(o+24) ||u32(o+28) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)


ö(u32(o + 4), get_bmg_demo_strange_4_0_4)

    }

function get_bmg_demo_strange_4_0_4(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}


function get_bmg_demo_strange_28(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148], o)
    // sound ?
}

// function get_bmg_demo_mysterious_4t3(o) {
//     if (u32(o + 0) !== 30000 || u32(o + 4) || u32(o + 8) !== 16777216 || u32(o + 12) !== 2 || u32(o + 16) !== 10289184 || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

//     ö(u32(o + 16), get_bmg_demo_mysterious_4t3_16)
// // bmg_demo_mysterious_4t3_16 = sound maybe

// }

// function get_bmg_demo_mysterious_4t3_16(o) {
// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28, ], o)
// }

function get_bmg_demo_mysterious_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_mysterious_8(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_world_116(o) {
    if (u8(o + 4) || u8(o + 5) !== 5 || u8(o + 6) || u32(o + 8) || u8(o + 12) || u8(o + 13) !== 1 || u8(o + 14) || u8(o + 15) !== 8 || u8(o + 16) || u8(o + 17) !== 1 || u8(o + 18) || u8(o + 19) !== 8 || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || f32(o + 52) !== 1 || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || f32(o + 72) !== 1 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || f32(o + 92) !== 1 || u32(o + 96) || u32(o + 104) || u32(o + 108))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, f32, 72, u32, 76, u32, 80, u32, 84, u32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)
    ß('p_model', o, 100)
}
function get_bmg_demo_world_120(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_172(o) {
    if (u32(o + 0) !== 10310048 || u32(o + 4) !== 10419680 || f32(o + 8) !== 40 || u8(o + 12) !== 73 || u8(o + 13) !== 116 || u8(o + 14) !== 36 || u8(o + 15) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) !== 131072 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) !== 6 || u32(o + 56) !== 10443584 || u32(o + 60) !== 10443968 || u32(o + 64) || u32(o + 68) !== 2424832 || u32(o + 72) !== 2490368 || u32(o + 76) !== 2490368 || u8(o + 80) !== 75 || u8(o + 81) !== 24 || u8(o + 82) !== 150 || u8(o + 83) !== 128 || u8(o + 84) !== 75 || u8(o + 85) !== 24 || u8(o + 86) !== 150 || u8(o + 87) !== 128 || u32(o + 88) !== 10444000 || f32(o + 92) !== 5000 || u8(o + 96) !== 73 || u8(o + 97) !== 244 || u8(o + 98) !== 36 || u8(o + 99) || u32(o + 100) !== 10444032 || u32(o + 104) !== 2 || u32(o + 108) !== 10444064 || u32(o + 112) || u32(o + 116) || f32(o + 120) !== 1 || f32(o + 124) !== 1 || f32(o + 128) !== 1 || f32(o + 132) !== 0.5 || u32(o + 136) !== 6553600 || f32(o + 140) !== 0.0010000000474974513 || u32(o + 144) !== 1572864 || f32(o + 148) !== 0.5619999766349792 || f32(o + 152) !== 0.22599999606609344 || u8(o + 156) !== 70 || u8(o + 157) !== 28 || u8(o + 158) !== 64 || u8(o + 159) || u8(o + 160) !== 70 || u8(o + 161) !== 28 || u8(o + 162) !== 64 || u8(o + 163) || f32(o + 164) !== 1000 || f32(o + 168) !== 1000 || u32(o + 172) || u32(o + 176) !== 10426624 || u32(o + 180) || u32(o + 184) || u32(o + 188))
        ü(1, [u32, 0, u32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u8, 84, u8, 85, u8, 86, u8, 87, u32, 88, f32, 92, u8, 96, u8, 97, u8, 98, u8, 99, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, f32, 120, f32, 124, f32, 128, f32, 132, u32, 136, f32, 140, u32, 144, f32, 148, f32, 152, u8, 156, u8, 157, u8, 158, u8, 159, u8, 160, u8, 161, u8, 162, u8, 163, f32, 164, f32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188], o)
    ß('p_texture', o, 68)
    ß('p_texture', o, 72)
    ß('p_texture', o, 76)
    ß('p_texture', o, 144)

    ö(u32(o + 0), get_bmg_demo_world_172_0)
    ö(u32(o + 4), get_bmg_demo_world_172_4)
    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 64), get_bmg_demo_world_172_56)
    }
    ö(u32(o + 60), get_bmg_demo_world_172_60)
    ö(u32(o + 88), get_bmg_demo_world_172_88)
    ö(u32(o + 100), get_bmg_demo_world_172_100)
    for (let i = 0; i < u32(o + 104); i++) {
        ö(u32(o + 108) + (i * 4), get_bmg_demo_world_172_108)
    }
    // ö(u32(o + 176), get_bmg_demo_world_172_176)
    // ä(bmg_demo_world_172_176, u32(o + 176), get_bmg_demo_world_172_176)
    ä(bmg_demo_interface_80_36t1_12t0, u32(o + 176), get_bmg_demo_interface_80_36t1_12t0)

}

function get_bmg_demo_world_172_0(o) {
    if (u32(o + 0) !== 10310080 || u32(o + 4) !== 10357440 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 0), get_bmg_demo_world_172_0_0)
    // int
    ä(bmg_demo_interface, u32(o + 0), get_bmg_demo_interface)
    ä(bmg_demo_interface, u32(o + 4), get_bmg_demo_interface)

    // ö(u32(o + 4), get_bmg_demo_world_172_0_4)

}

// function get_bmg_demo_world_172_0_0(o) {
//     if (u32(o + 0) !== 10310176 || u32(o + 4) !== 65540 || u32(o + 8) !== 5 || u32(o + 12) !== 16842752 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) !== 10310208 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) !== 1 || u32(o + 48) !== 10310368 || u32(o + 52) !== 10310400 || u32(o + 56) || f32(o + 60) !== 500 || u32(o + 64) !== 10310464 || u32(o + 68) !== 7 || u32(o + 72) !== 10310912 || u32(o + 76) !== 14 || u32(o + 80) !== 10312800 || u32(o + 84) || u32(o + 88) || u32(o + 92))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

//     ö(u32(o + 0), get_bmg_demo_world_172_0_0_0)
//     ö(u32(o + 28), get_bmg_demo_world_172_0_0_28)
//     ö(u32(o + 48), get_bmg_demo_world_172_0_0_48)
//     ö(u32(o + 52), get_bmg_demo_world_172_0_0_52)
//     ö(u32(o + 64), get_bmg_demo_world_172_0_0_64)
//     ö(u32(o + 72), get_bmg_demo_world_172_0_0_72)
//     ö(u32(o + 80), get_bmg_demo_world_172_0_0_80)

// }

// function get_bmg_demo_world_172_0_0_0(o) {
//     // ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     // string
// }
// function get_bmg_demo_world_172_0_0_28(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_172_0_0_48(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_172_0_0_52(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_172_0_0_64(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_172_0_0_72(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_172_0_0_80(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }

// function get_bmg_demo_world_172_0_4(o) {
//     if (u32(o + 0) !== 10357536 || u32(o + 4) || u32(o + 8) !== 1 || u32(o + 12) !== 16777216 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44) !== 1 || u32(o + 48) !== 10357568 || u32(o + 52) || u32(o + 56) || f32(o + 60) !== 500 || u32(o + 64) !== 10357600 || u32(o + 68) !== 21 || u32(o + 72) !== 10360832 || u32(o + 76) !== 18 || u32(o + 80) !== 10368320 || u32(o + 84) || u32(o + 88) || u32(o + 92))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

//     ö(u32(o + 0), get_bmg_demo_world_172_0_4_0)
//     ö(u32(o + 48), get_bmg_demo_world_172_0_4_48)
//     ö(u32(o + 64), get_bmg_demo_world_172_0_4_64)
//     ö(u32(o + 72), get_bmg_demo_world_172_0_4_72)
//     ö(u32(o + 80), get_bmg_demo_world_172_0_4_80)

// }

// function get_bmg_demo_world_172_0_4_0(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_172_0_4_48(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_172_0_4_64(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_172_0_4_72(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_172_0_4_80(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }

function get_bmg_demo_world_172_4(o) {
    if (u32(o + 0) !== 10419744 || u32(o + 4) || u32(o + 8) || f32(o + 12) !== 240 || u32(o + 16) || u32(o + 20) !== 16777216 || f32(o + 24) !== 320 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    // ö(u32(o + 0), get_bmg_demo_world_172_4_0)
    ä(bmg_demo_interface, u32(o + 0), get_bmg_demo_interface)

}

// function get_bmg_demo_world_172_4_0(o) {
//     if (u32(o + 0) !== 10419840 || u32(o + 4) || u32(o + 8) !== 2 || u32(o + 12) !== 16777216 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44) !== 1 || u32(o + 48) !== 10419872 || u32(o + 52) || u32(o + 56) || f32(o + 60) !== 500 || u32(o + 64) !== 10419904 || u32(o + 68) || u32(o + 72) || u32(o + 76) !== 7 || u32(o + 80) !== 10420256 || u32(o + 84) || u32(o + 88) || u32(o + 92))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

//     ö(u32(o + 0), get_bmg_demo_world_172_4_0_0)
//     ö(u32(o + 48), get_bmg_demo_world_172_4_0_48)
//     ö(u32(o + 64), get_bmg_demo_world_172_4_0_64)
//     ö(u32(o + 80), get_bmg_demo_world_172_4_0_80)

// }

// function get_bmg_demo_world_172_4_0_0(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_172_4_0_48(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_172_4_0_64(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_172_4_0_80(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }

function get_bmg_demo_world_172_56(o) {
    if (u8(o + 3) || u32(o + 4) || u8(o + 11) !== 255 || f32(o + 12) !== 50 || u32(o + 32) || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 1 || f32(o + 48) !== 100 || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, f32, 52, u32, 56, u32, 60], o)
}
function get_bmg_demo_world_172_60(o) {
    if (u8(o + 0) !== 73 || u8(o + 1) !== 17 || u8(o + 2) !== 185 || u8(o + 3) !== 208 || u8(o + 4) !== 73 || u8(o + 5) !== 87 || u8(o + 6) !== 224 || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_172_88(o) {
    if (u8(o + 0) !== 218 || u8(o + 1) !== 206 || u8(o + 2) !== 198 || u8(o + 3) !== 21 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_172_100(o) {
    if (f32(o + 0) !== 300 || f32(o + 4) !== 1200000 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_172_108(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_bmg_demo_world_172_108_0)

}

function get_bmg_demo_world_172_108_0(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// console.log(get_string(o, 0, false))
}

function get_bmg_demo_world_172_176(o) {
    if (u32(o + 0) !== 2228224 || u32(o + 4) || u32(o + 8) !== 789504 || f32(o + 12) !== 12 || u32(o + 16) !== 1 || u32(o + 20) !== 10426688 || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 0)

    // ä(bmg_demo_world_172_176, u32(o + 176), get_bmg_demo_world_172_176)
    // globalThis.bmg_demo_world_172_176 = []

    ö(u32(o + 20), get_bmg_demo_world_172_176_20)

}

function get_bmg_demo_world_172_176_20(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_world_176(o) {
    if (u32(o + 0) !== 37 || u32(o + 4) !== 145088 || u32(o + 8) !== 31 || u32(o + 12) !== 145248 || u32(o + 16) !== 2 || u32(o + 20) !== 145376 || u32(o + 24) !== 109 || u32(o + 28) !== 145408 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_demo_world_176_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_bmg_demo_world_176_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 4), get_bmg_demo_world_176_20)
    }
    let temp_amt = u32(o + 24) - 1;

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 4), get_bmg_demo_world_176_28)
    }
    // ö(u32(o + 28), get_bmg_demo_world_176_28test)

}

function get_bmg_demo_world_176_4(o) {
    /*ü(1, [u32, 0], o)*/

    // ö(u32(o + 0), get_bmg_demo_world_176_4_0)
    // ä(bmg_demo_world_176_4_0, u32(o + 0), get_bmg_demo_world_176_4_0)
    ä(bmg_demo_flag, u32(o + 0), get_bmg_demo_flag)

}

// function get_bmg_demo_world_176_4_0(o) {
//     if (u32(o + 4) || u8(o + 12) !== 255 || u8(o + 13) !== 255 || u8(o + 14) !== 253 || u32(o + 36) || u32(o + 40) || u32(o + 44) !== 16777216 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
//         ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

//     ö(u32(o + 8), get_bmg_demo_world_176_4_0_8)
//     ö(u32(o + 20), get_bmg_demo_world_176_4_0_20)

// }

// function get_bmg_demo_world_176_4_0_8(o) {// console.log(get_string(o, 0, false))
// // ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_176_4_0_20(o) {
//     // if (u32(o + 4) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

//     // flag
// }

function get_bmg_demo_world_176_12(o) {
    /*ü(1, [u32, 0], o)*/

    // ö(u32(o + 0), get_bmg_demo_world_176_12_0)
    ä(bmg_demo_world_176_12_0, u32(o + 0), get_bmg_demo_world_176_12_0)

}

function get_bmg_demo_world_176_12_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 160) || u32(o + 172) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 188))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188], o)

    // ä(bmg_demo_world_176_12_0, u32(o + 0), get_bmg_demo_world_176_12_0)
    // globalThis.bmg_demo_world_176_12_0 = []

    ö(u32(o + 148), get_bmg_demo_world_176_12_0_148)
    ö(u32(o + 156), get_bmg_demo_world_176_12_0_156)
    for (let i = 0; i < u32(o + 164); i++) {
        ö(u32(o + 168) + (i * 36), get_bmg_demo_world_176_12_0_168)
    }

}

function get_bmg_demo_world_176_12_0_148(o) {// console.log(get_string(o, 0, false))
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_world_176_12_0_156(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 0), get_bmg_demo_world_176_12_0_156_0)
    // ä(bmg_demo_world_176_12_0_156_0, u32(o + 0), get_bmg_demo_world_176_12_0_156_0)
    ä(bmg_demo_world_176_12_0, u32(o + 0), get_bmg_demo_world_176_12_0)

}

// function get_bmg_demo_world_176_12_0_156_0(o) {
//     ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, ], o)
// }

function get_bmg_demo_world_176_12_0_168(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 28) || u32(o + 32))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    ö(u32(o + 8), get_bmg_demo_world_176_12_0_168_8)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 20), get_bmg_demo_world_176_12_0_168_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 28), get_bmg_demo_world_176_12_0_168_24)
    }

}

function get_bmg_demo_world_176_12_0_168_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_world_176_12_0_168_16(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)

    ö(u32(o + 0), get_bmg_demo_world_176_12_0_168_16_0)
    switch (u32(o + 4)) {
    case 7:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_16_12t7)
        break
    case 12:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_16_12t12)
        break
    case 18:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_16_12t18)
        break
    case 15:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_16_12t15)
        break
    case 21:
        ä(bmg_demo_interface, u32(o + 12), get_bmg_demo_interface)
        // ä(bmg_demo_world_176_12_0_168_16_12t21, u32(o + 12), get_bmg_demo_world_176_12_0_168_16_12t21)
        // ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_16_12t21)
        break
    case 25:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_16_12t25)
        break
    case 8:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_16_12t8)
        break
    case 7:
        // not offset value seen? 17
        break
    case 12:
        // not offset value seen? 2
        break
    default:
        if (u32(o + 12)) {
            sü(u32, 4, o, 12)
        }
    }

    // ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_16_12)
    ö(u32(o + 16), get_bmg_demo_world_176_12_0_168_16_16)

}

function get_bmg_demo_world_176_12_0_168_16_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_world_176_12_0_168_16_12t7(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_176_12_0_168_16_12t12(o) {
if(u8(o+2) ||u8(o+3) ||u32(o+12) ||u32(o+16) ||u32(o+20) ||u32(o+24) ||u32(o+28) )
ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

            sü(u8, 0, o, 4)
    ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_16_12t12_4)

}

function get_bmg_demo_world_176_12_0_168_16_12t12_4(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_world_176_12_0_168_16_12t18(o) {
    if (u32(o + 4) !== 16973824 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_world_176_12_0_168_16_12t18_0)

}

function get_bmg_demo_world_176_12_0_168_16_12t18_0(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_demo_world_176_12_0_168_16_12t15(o) {
    if (u32(o + 0) !== 2 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_bmg_demo_world_176_12_0_168_16_12t15_4)
    }

}

function get_bmg_demo_world_176_12_0_168_16_12t15_4(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)
}

// function get_bmg_demo_world_176_12_0_168_16_12t21(o) {
//     if (u32(o + 8) !== 5 || u32(o + 12) !== 16777216 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 1 || u32(o + 44) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 84) || u32(o + 88) || u32(o + 92))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

//     ö(u32(o + 0), get_bmg_demo_world_176_12_0_168_16_12t21_0)
//     ö(u32(o + 48), get_bmg_demo_world_176_12_0_168_16_12t21_48)
//     ö(u32(o + 64), get_bmg_demo_world_176_12_0_168_16_12t21_64)
//     ö(u32(o + 72), get_bmg_demo_world_176_12_0_168_16_12t21_72)
//     ö(u32(o + 80), get_bmg_demo_world_176_12_0_168_16_12t21_80)

// }

// function get_bmg_demo_world_176_12_0_168_16_12t21_0(o) {
//     // ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     // string
// }
// function get_bmg_demo_world_176_12_0_168_16_12t21_48(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_176_12_0_168_16_12t21_64(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_176_12_0_168_16_12t21_72(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_world_176_12_0_168_16_12t21_80(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }

function get_bmg_demo_world_176_12_0_168_16_12t25(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_16_12t25_4)

}

function get_bmg_demo_world_176_12_0_168_16_12t25_4(o) {
    ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_demo_world_176_12_0_168_16_12t8(o) {
    if (u32(o + 0) !== 33554432 || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 8), get_bmg_demo_world_176_12_0_168_16_12t8_8)
    ä(bmg_demo_world_176_12_0_168_16_12t8_8, u32(o + 8), get_bmg_demo_world_176_12_0_168_16_12t8_8)

}

function get_bmg_demo_world_176_12_0_168_16_12t8_8(o) {
    ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, f32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, ], o)
}

function get_bmg_demo_world_176_12_0_168_16_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_world_176_12_0_168_16_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_world_176_12_0_168_24(o) {
    if (u8(o + 4) !== 1 || u8(o + 6) || u8(o + 7) || u32(o + 16))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    ö(u32(o + 0), get_bmg_demo_world_176_12_0_168_24_0)
    switch (u32(o + 8)) {
    case 2:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12t2)
        break
    case 18:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12t18)
        break
    case 7:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12t7)
        break
    case 23:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12t23)
        break
    case 14:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12t14)
        break
    case 17:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12t17)
        break
    case 5:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12t5)
        break
    case 34:
        ä(bmg_demo_world_176_12_0_168_24_12t34, u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12t34)
        // ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12t34)
        break
    case 15:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12t15)
        break
    case 33:
        ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12t33)
        break
    default:
        if (u32(o + 12)) {
            sü(u32, 8, o, 12)
        }
    }

    // ä(bmg_demo_world_176_12_0_168_24_12, u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12)
    // ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12)

}

function get_bmg_demo_world_176_12_0_168_24_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_world_176_12_0_168_24_12t2(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t2_4)
switch (u32(o + 0)) {
case 7:
ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t2_4t7)
break
case 11:
ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t2_4t11)
break
case 1:
ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t2_4t1)
break
case 5:
ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t2_4t5)
break
case 4:
ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t2_4t4)
break
case 12:
ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t2_4t12)
break
case 17:
ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t2_4t17)
break
default:
if (u32(o + 4)) {
    sü(u32, 0, o, 4)
}
}

}
function get_bmg_demo_world_176_12_0_168_24_12t2_4t7(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_bmg_demo_world_176_12_0_168_24_12t2_4t11(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_bmg_demo_world_176_12_0_168_24_12t2_4t1(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_bmg_demo_world_176_12_0_168_24_12t2_4t5(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_bmg_demo_world_176_12_0_168_24_12t2_4t4(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_bmg_demo_world_176_12_0_168_24_12t2_4t12(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}
function get_bmg_demo_world_176_12_0_168_24_12t2_4t17(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_bmg_demo_world_176_12_0_168_24_12t2_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_world_176_12_0_168_24_12t18(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ä(bmg_demo_world_176_12_0_168_24_12t18_4, u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t18_4)
    ä(bmg_demo_world_176_20_0, u32(o + 4), get_bmg_demo_world_176_20_0)
    // ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t18_4)
    ö(u32(o + 8), get_bmg_demo_world_176_12_0_168_24_12t18_8)

}

// function get_bmg_demo_world_176_12_0_168_24_12t18_4(o) {
//     ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
// }
function get_bmg_demo_world_176_12_0_168_24_12t18_8(o) {
if(u32(o+0) ||u32(o+4) ||u32(o+8) ||u32(o+12) ||u32(o+16) ||u32(o+20) ||u32(o+24) ||u32(o+28) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_world_176_12_0_168_24_12t7(o) {
if(u8(o+2) ||u8(o+3) ||u32(o+12) ||u32(o+16) ||u32(o+20) ||u32(o+24) ||u32(o+28) )
ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    sü(u8, 0, o, 4)
    // type
    // ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t7_4)

}

function get_bmg_demo_world_176_12_0_168_24_12t7_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_world_176_12_0_168_24_12t23(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(bmg_demo_world_176_12_0_168_24_12t23_0, u32(o + 0), get_bmg_demo_world_176_12_0_168_24_12t23_0)
    // ö(u32(o + 0), get_bmg_demo_world_176_12_0_168_24_12t23_0)
    ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t23_4)

}

function get_bmg_demo_world_176_12_0_168_24_12t23_0(o) {
if(u32(o+8) ||u32(o+12) ||u32(o+16) ||u32(o+20) ||u32(o+24) ||u32(o+28) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

// ä(bmg_demo_world_176_12_0_168_24_12t23_0, u32(o + 0), get_bmg_demo_world_176_12_0_168_24_12t23_0)
// globalThis.bmg_demo_world_176_12_0_168_24_12t23_0 = []

ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t23_0_4)

    }

function get_bmg_demo_world_176_12_0_168_24_12t23_0_4(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_bmg_demo_world_176_12_0_168_24_12t23_4(o) {
if(u32(o+0) !==144640 ||u32(o+4) !==11 ||u32(o+8) !==16777216 ||u32(o+12) ||u32(o+16) ||u32(o+20) ||u32(o+24) ||u32(o+28) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)


ö(u32(o + 0), get_bmg_demo_world_176_12_0_168_24_12t23_4_0)

    }

function get_bmg_demo_world_176_12_0_168_24_12t23_4_0(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}


function get_bmg_demo_world_176_12_0_168_24_12t14(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_176_12_0_168_24_12t17(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_176_12_0_168_24_12t5(o) {
if(u8(o+5) ||u8(o+6) ||u8(o+7) ||u32(o+8) ||u32(o+12) ||u32(o+16) ||u32(o+20) ||u32(o+24) ||u32(o+28) )
ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    sü(u8, 4, o, 0)
    // ö(u32(o + 0), get_bmg_demo_world_176_12_0_168_24_12t5_0)

}

function get_bmg_demo_world_176_12_0_168_24_12t5_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_world_176_12_0_168_24_12t34(o) {
    if (u32(o + 4) !== 16777216 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_world_176_12_0_168_24_12t34_0)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_bmg_demo_world_176_12_0_168_24_12t34_12)
    }

}

function get_bmg_demo_world_176_12_0_168_24_12t34_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_world_176_12_0_168_24_12t34_12(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_world_176_12_0_168_24_12t15(o) {
    if (u32(o + 4) !== 2 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 0), get_bmg_demo_world_176_12_0_168_24_12t15_0)
    ä(bmg_demo_world_176_12_0, u32(o + 0), get_bmg_demo_world_176_12_0)

}

// function get_bmg_demo_world_176_12_0_168_24_12t15_0(o) {
//     ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, ], o)
// }

function get_bmg_demo_world_176_12_0_168_24_12t33(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 10672096 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12t33_4)

}

function get_bmg_demo_world_176_12_0_168_24_12t33_4(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
}

function get_bmg_demo_world_176_12_0_168_24_12(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ä(bmg_demo_world_176_12_0_168_24_12, u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12)
    // globalThis.bmg_demo_world_176_12_0_168_24_12 = []

    ö(u32(o + 0), get_bmg_demo_world_176_12_0_168_24_12_0)
    ö(u32(o + 4), get_bmg_demo_world_176_12_0_168_24_12_4)
    ö(u32(o + 8), get_bmg_demo_world_176_12_0_168_24_12_8)
    ö(u32(o + 12), get_bmg_demo_world_176_12_0_168_24_12_12)

}

function get_bmg_demo_world_176_12_0_168_24_12_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_world_176_12_0_168_24_12_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_world_176_12_0_168_24_12_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_world_176_12_0_168_24_12_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_world_176_20(o) {
    /*ü(1, [u32, 0], o)*/

    // ö(u32(o + 0), get_bmg_demo_world_176_20_0)
    ä(bmg_demo_world_176_20_0, u32(o + 0), get_bmg_demo_world_176_20_0)

}

function get_bmg_demo_world_176_20_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) !== 16842752 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) !== 4000 || u32(o + 32) !== 4000 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    // ä(bmg_demo_world_176_20_0, u32(o + 0), get_bmg_demo_world_176_20_0)
    // globalThis.bmg_demo_world_176_20_0 = []
}

function get_bmg_demo_world_176_28(o) {
    /*ü(1, [u32, 0], o)*/

    ä(bmg_demo_flag, u32(o + 0), get_bmg_demo_flag)

}

function get_bmg_demo_world_176_28_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_world_208(o) {
    if (u32(o + 0) !== 10088736 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 0), get_bmg_demo_world_208_0)
    ä(bmg_demo_world_208_0, u32(o + 0), get_bmg_demo_world_208_0)

}

function get_bmg_demo_world_208_0(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 1 || u32(o + 8) || f32(o + 12) !== 1 || f32(o + 16) !== 0.30000001192092896 || u32(o + 20) || u32(o + 24) !== 5 || u32(o + 28) !== 10 || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) || f32(o + 44) !== 70 || u32(o + 48) !== 10088896 || f32(o + 52) !== 1 || u32(o + 56) || f32(o + 60) !== 1 || u32(o + 64) || f32(o + 68) !== 1 || u32(o + 72) || u32(o + 76) || f32(o + 80) !== 30 || f32(o + 84) !== 75 || u32(o + 88) !== 10089440 || u32(o + 92) || u32(o + 96) || f32(o + 100) !== 300 || f32(o + 104) !== 200 || f32(o + 108) !== 1000 || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136) || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, f32, 68, u32, 72, u32, 76, f32, 80, f32, 84, u32, 88, u32, 92, u32, 96, f32, 100, f32, 104, f32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156], o)

    // ä(bmg_demo_world_208_0, u32(o + 0), get_bmg_demo_world_208_0)
    // globalThis.bmg_demo_world_208_0 = []

    ö(u32(o + 48), get_bmg_demo_world_208_0_48)
    // ö(u32(o + 88), get_bmg_demo_world_208_0_88)
    // ö(u32(o + ), get_bmg_demo_sound_section)
    ä(bmg_demo_sound_section, u32(o + 88), get_bmg_demo_sound_section)

}

function get_bmg_demo_world_208_0_48(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 10088928 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_world_208_0_48_4)

}

function get_bmg_demo_world_208_0_48_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 10088960 || u32(o + 8) !== 10089344 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_world_208_0_48_4_4)
    ö(u32(o + 8), get_bmg_demo_world_208_0_48_4_8)

}

function get_bmg_demo_world_208_0_48_4_4(o) {
    if (u32(o + 0) !== 300 || u32(o + 4) !== 150 || f32(o + 8) !== 300 || u32(o + 12) !== 2 || u32(o + 16) !== 10089024 || u32(o + 20) !== 17432576 || u32(o + 24) !== 10089056 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    // maybe amt
    ö(u32(o + 16), get_bmg_demo_world_208_0_48_4_4_16)
    ö(u32(o + 24), get_bmg_demo_world_208_0_48_4_4_24)

}

function get_bmg_demo_world_208_0_48_4_4_16(o) {
    if (f32(o + 0) !== -0.0000012854984561272431 || u32(o + 4) || f32(o + 8) !== 150 || f32(o + 12) !== -0.000001285487087443471 || u32(o + 16) || f32(o + 20) !== 150 || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, f32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_208_0_48_4_4_24(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) !== 10089152 || u32(o + 8) !== 327682 || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 180 || u32(o + 24) || f32(o + 28) !== 60 || u32(o + 32) || u32(o + 36) || f32(o + 40) !== 1 || u32(o + 44) || u32(o + 48) !== 2 || u32(o + 52) !== 10089184 || u32(o + 56) !== 2 || u32(o + 60) !== 10089216 || u32(o + 64) !== 10089248 || u32(o + 68) !== 1 || u32(o + 72) !== 10089280 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, f32, 28, u32, 32, u32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_demo_world_208_0_48_4_4_24_4)
    }
    ö(u32(o + 52), get_bmg_demo_world_208_0_48_4_4_24_52)
    // amt maybe
    ö(u32(o + 60), get_bmg_demo_world_208_0_48_4_4_24_60)
    // amt maybe
    ö(u32(o + 64), get_bmg_demo_world_208_0_48_4_4_24_64)
    ö(u32(o + 72), get_bmg_demo_world_208_0_48_4_4_24_72)

}

function get_bmg_demo_world_208_0_48_4_4_24_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}
function get_bmg_demo_world_208_0_48_4_4_24_52(o) {
    if (f32(o + 0) !== 2 || u32(o + 4) || u32(o + 8) || f32(o + 12) !== 9 || u32(o + 16) !== 33554432 || f32(o + 20) !== 70 || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_208_0_48_4_4_24_60(o) {
    if (f32(o + 0) !== 2 || u32(o + 4) || u32(o + 8) || f32(o + 12) !== 9 || u8(o + 16) !== 2 || u8(o + 17) || u8(o + 18) || u8(o + 19) || f32(o + 20) !== 70 || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_208_0_48_4_4_24_64(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 0.5 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_world_208_0_48_4_4_24_72(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 10089312 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_world_208_0_48_4_4_24_72_4)

}

function get_bmg_demo_world_208_0_48_4_4_24_72_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_world_208_0_48_4_8(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || f32(o + 8) !== 6 || f32(o + 12) !== 3 || f32(o + 16) !== -20 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u8(o + 40) !== 2 || u8(o + 41) || u8(o + 42) || u8(o + 43) || u32(o + 44) || u8(o + 48) || u8(o + 49) !== 153 || u8(o + 50) !== 243 || u8(o + 51) !== 192 || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 48), get_bmg_demo_world_208_0_48_4_8_48)

}

function get_bmg_demo_world_208_0_48_4_8_48(o) {
    if (f32(o + 0) !== 90 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_world_208_0_88(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_demo_basic(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 32 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_basic_4)

}

function get_bmg_demo_basic_4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // 64/160 also seen, may be unrelated tho

    switch (g.type) {
    case 1:
        ä(bmg_demo_interface, u32(o + 0), get_bmg_demo_interface)
        break
    case 3:
        ö(u32(o), get_bmg_demo_link)
        break
    default:
        if (u32(o))
            console.log("?")

    }

}

function get_bmg_demo_link(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 16) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ö(u32(o + 12), get_bmg_demo_link_12)
    ö(u32(o + 20), get_bmg_demo_link_20)
    ö(u32(o + 24), get_bmg_demo_link_24)
    ö(u32(o + 32), get_bmg_demo_link_32)
    ö(u32(o + 44), get_bmg_demo_link_44)
    ö(u32(o + 52), get_bmg_demo_link_52)
    ö(u32(o + 56), get_bmg_demo_link_56)
    ö(u32(o + 72), get_bmg_demo_link_72)

}

function get_bmg_demo_link_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_link_20(o) {
    if (u32(o + 0) !== 109 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_demo_link_20_4)
    }

}

function get_bmg_demo_link_20_4(o) {
    /*ü(1, [u32, 0], o)*/

    ö(u32(o + 0), get_bmg_demo_flag)

}

function get_bmg_demo_flag(o) {
    if (u32(o + 4) || u8(o + 24) || u32(o + 36) || u32(o + 40) || u8(o + 45) || u8(o + 46) || u8(o + 47) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, f32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 8), get_bmg_demo_flag_8)

    switch (u32(o + 16)) {
    case 0:
        ö(u32(o + 20), get_bmg_demo_flag_20t0)
        break
    case 1:
        ö(u32(o + 20), get_bmg_demo_flag_20t1)
        break
    case 2:
        ö(u32(o + 20), get_bmg_demo_flag_20t2)
        break
    case 3:
        ö(u32(o + 20), get_bmg_demo_flag_20t3)
        break
    case 8:
        ö(u32(o + 20), get_bmg_demo_flag_20t8)
        break
    case 9:
        ö(u32(o + 20), get_bmg_demo_flag_20t9)
        break
    case 10:
        ö(u32(o + 20), get_bmg_demo_flag_20t10)
        break
    default:
        if (u32(o + 20)) {
            sü(u32, 16, o, 20)
        }
    }

}

function get_bmg_demo_flag_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_flag_20t0(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_flag_20t1(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_flag_20t2(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_flag_20t3(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_flag_20t8(o) {
if(u32(o+4) ||u32(o+8) ||u32(o+12) ||u32(o+16) ||u32(o+20) ||u32(o+24) ||u32(o+28) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)


ö(u32(o + 0), get_bmg_demo_flag_20t8_0)

    }

function get_bmg_demo_flag_20t8_0(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_bmg_demo_flag_20t9(o) {
if(u32(o+0) ||u32(o+4) ||u32(o+16) ||u32(o+20) ||u32(o+24) ||u32(o+28) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)


ö(u32(o + 12), get_bmg_demo_flag_20t9_12)

    }

function get_bmg_demo_flag_20t9_12(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}


function get_bmg_demo_flag_20t10(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_flag_20t10_4)

}

function get_bmg_demo_flag_20t10_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_link_24(o) {// console.log(get_string(o, 0, false))
// intrface
}
function get_bmg_demo_link_32(o) {// intrface
// console.log(get_string(o, 0, false))
}
function get_bmg_demo_link_44(o) {
    if (u8(o + 0) !== 4 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) !== 15552 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 12), get_bmg_demo_link_44_12)

}

function get_bmg_demo_link_44_12(o) {
    if (u32(o + 0) !== 15584 || u32(o + 4) !== 4 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_link_44_12_0)

}

function get_bmg_demo_link_44_12_0(o) {// console.log(get_string(o, 0, false))
// intrface
}

function get_bmg_demo_link_52(o) {
    if (u32(o + 0) !== 15648 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_link_52_0)

}

function get_bmg_demo_link_52_0(o) {
    if (u32(o + 0) !== 8 || u32(o + 4) !== 15680 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_bmg_demo_link_52_0_4)
    }

}

function get_bmg_demo_link_52_0_4(o) {
    if (u32(o + 16) !== 1 || u32(o + 24) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_bmg_demo_link_52_0_4_4)
    }
    ö(u32(o + 8), get_bmg_demo_link_52_0_4_8)
    ö(u32(o + 12), get_bmg_demo_link_52_0_4_12)
    ö(u32(o + 20), get_bmg_demo_link_52_0_4_20)
    ö(u32(o + 28), get_bmg_demo_link_52_0_4_28)

}

function get_bmg_demo_link_52_0_4_4(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    switch (u8(o + 0)) {
    case 0:
        ö(u32(o + 4), get_bmg_demo_link_52_0_4_4_4t0)
        break
    case 1:
        ö(u32(o + 4), get_bmg_demo_link_52_0_4_4_4t1)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }

    ö(u32(o + 8), get_bmg_demo_link_52_0_4_4_8)

}
function get_bmg_demo_link_52_0_4_4_4t0(o) {// console.log(get_string(o, 0, false))
// string
}
function get_bmg_demo_link_52_0_4_4_4t1(o) {
    if (u32(o + 4) !== 6 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_link_52_0_4_4_4t1_0)

}

function get_bmg_demo_link_52_0_4_4_4t1_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_demo_link_52_0_4_4_8(o) {
    if (u8(o + 1) !== 30 || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_link_52_0_4_8(o) {
    if (u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_link_52_0_4_8_0)

}

function get_bmg_demo_link_52_0_4_8_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_demo_link_52_0_4_12(o) {// console.log(get_string(o, 0, false))
// DTC
}
function get_bmg_demo_link_52_0_4_20(o) {
    if (u8(o + 8) || u8(o + 9) !== 99 || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_link_52_0_4_20_4)

}

function get_bmg_demo_link_52_0_4_20_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_link_52_0_4_20_4_4)

}

function get_bmg_demo_link_52_0_4_20_4_4(o) {
    if (u32(o + 4) !== 9 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_link_52_0_4_20_4_4_0)

}

function get_bmg_demo_link_52_0_4_20_4_4_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_demo_link_52_0_4_28(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 8) || u8(o + 9) !== 99 || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_link_56(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) !== 30000 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 8), get_bmg_demo_link_56_8)

}

function get_bmg_demo_link_56_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_link_72(o) {// console.log(get_string(o, 0, false))
// xa37dd45ffe100bfffcc9753aabac325f07cb3fa231144fe2e33ae4783feead2b8a73ff021fac326df0ef9753ab9cdf6573ddff0312fab0b0ff39779eaff312x
}

function get_bmg_demo_interface(o) {
    if (u8(o + 4) || u8(o + 6) || u8(o + 14) || u8(o + 15) || u32(o + 16) || u32(o + 24) || u32(o + 44) !== 1 || u32(o + 56) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ö(u32(o + 0), get_bmg_demo_interface_0)
    // ö(u32(o + 20), get_bmg_demo_interface_20)
    // ö(u32(o + 20), get_bmg_demo_interface_20)
    ä(bmg_demo_sound_controls, u32(o + 20), get_bmg_demo_sound_controls)
    ä(bmg_demo_sound_controls, u32(o + 28), get_bmg_demo_sound_controls)
    // ö(u32(o + 28), get_bmg_demo_sound_controls)
    ö(u32(o + 48), get_bmg_demo_interface_48)
    ö(u32(o + 52), get_bmg_demo_interface_52)
    ö(u32(o + 64), get_bmg_demo_interface_64)
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 28), get_bmg_demo_interface_72)
    }
    for (let i = 0; i < u32(o + 76); i++) {
        ö(u32(o + 80) + (i * 100), get_bmg_demo_interface_80)
    }

}

function get_bmg_demo_interface_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_interface_20(o) {
    if (u32(o + 0) !== 2850 || u32(o + 4) || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 10) !== 1 || u8(o + 11) || u32(o + 12) !== 2 || u32(o + 16) !== 2624 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 16), get_bmg_demo_interface_20_16)

}

function get_bmg_demo_interface_20_16(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 2656 || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 1 || u32(o + 20) !== 2752 || u32(o + 24) || f32(o + 28) !== 800)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28], o)

    ö(u32(o + 4), get_bmg_demo_interface_20_16_4)
    ö(u32(o + 20), get_bmg_demo_interface_20_16_20)

}

function get_bmg_demo_interface_20_16_4(o) {
    if (u32(o + 0) !== 2688 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_interface_20_16_4_0)

}

function get_bmg_demo_interface_20_16_4_0(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_demo_interface_20_16_20(o) {
    if (u32(o + 0) !== 2784 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_interface_20_16_20_0)

}

function get_bmg_demo_interface_20_16_20_0(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_demo_sound_controls(o) {
    if (u32(o + 4) || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 11) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 16), get_bmg_demo_sound_controls_16)
    }

}

function get_bmg_demo_sound_controls_16(o) {
    if (u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_demo_sound_controls_16_4)
    }

}

function get_bmg_demo_sound_controls_16_4(o) {
    /*ü(1, [u32, 0], o)*/

    // ö(u32(o + 0), get_bmg_demo_sound_section)
    ä(bmg_demo_sound_section, u32(o + 0), get_bmg_demo_sound_section)

}

function get_bmg_demo_sound_section(o) {
    if (u32(o + 4) || u8(o + 8) || u8(o + 11) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28], o)
    ß('p_sound', o, 0)

    ö(u32(o + 24), get_bmg_demo_sound_section_24)

}

function get_bmg_demo_sound_section_24(o) {
    if (u8(o + 10) || u8(o + 11) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_interface_48(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_52(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_interface_52_0)

}

function get_bmg_demo_interface_52_0(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_interface_64(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 36), get_bmg_demo_interface_64_4)
    }

}

function get_bmg_demo_interface_64_4(o) {
    if (u8(o + 5) || u8(o + 6) || u32(o + 20) || u32(o + 28) || u8(o + 34) || u8(o + 35))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35], o)

    ö(u32(o + 0), get_bmg_demo_interface_64_4_0)
    switch (u8(o + 4)) {
    case 1:
        ö(u32(o + 12), get_bmg_demo_interface_64_4_12t1)
        break
    case 7:
        ö(u32(o + 12), get_bmg_demo_interface_64_4_12t7)
        break
    case 8:
        ö(u32(o + 12), get_bmg_demo_interface_64_4_12t8)
        break
    case 10:
        ö(u32(o + 12), get_bmg_demo_interface_64_4_12t10)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 4, o, 12)
        }
    }

}

function get_bmg_demo_interface_64_4_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_interface_64_4_12t1(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_interface_64_4_12t1_4)

}

function get_bmg_demo_interface_64_4_12t1_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u8(o + 13) || u8(o + 14) || u8(o + 15) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_interface_64_4_12t7(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_64_4_12t8(o) {
    if (u32(o + 0) !== 3 || u32(o + 4) !== 10360768 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_interface_64_4_12t8_4)

}

function get_bmg_demo_interface_64_4_12t8_4(o) {
    if (u32(o + 0) !== 67174400 || u32(o + 4) !== 26 || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 999 || u32(o + 20) || u32(o + 24) !== 50331648 || u32(o + 28) !== 1000 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_demo_interface_64_4_12t10(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 0), get_bmg_demo_interface_64_4_12t10_0)
    // ä(bmg_demo_interface_64_4_12t10_0, u32(o + 0), get_bmg_demo_interface_64_4_12t10_0)
    ä(bmg_demo_flag, u32(o + 0), get_bmg_demo_flag)
    // ä(bmg_demo_world_68_64_220_8_0, u32(o + 0), get_bmg_demo_world_68_64_220_8_0)

}

// function get_bmg_demo_interface_64_4_12t10_0(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 24) !== 1 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) !== 16777216 || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

//     // ä(bmg_demo_interface_64_4_12t10_0, u32(o + 0), get_bmg_demo_interface_64_4_12t10_0)
//     // globalThis.bmg_demo_interface_64_4_12t10_0 = []

//     ö(u32(o + 8), get_bmg_demo_interface_64_4_12t10_0_8)
//     ö(u32(o + 20), get_bmg_demo_interface_64_4_12t10_0_20)

// }

// function get_bmg_demo_interface_64_4_12t10_0_8(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_interface_64_4_12t10_0_20(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }

function get_bmg_demo_interface_64_4_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_interface_72(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)*/

    ö(u32(o + 4), get_bmg_demo_interface_72_4)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_bmg_demo_interface_72_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 40), get_bmg_demo_interface_72_24)
    }

}

function get_bmg_demo_interface_72_4(o) {
    if (u8(o + 3) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_72_16(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    ö(u32(o + 4), get_bmg_demo_interface_72_16_4)

}

function get_bmg_demo_interface_72_16_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 3) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 4), get_bmg_demo_interface_72_16_4_4)
    // switch (u8(o + 2)) {
    // case 0:
    //     ö(u32(o + 4), get_bmg_demo_interface_72_16_4_4t0)
    //     break
    // default:
    //     if (u32(o + 4)) {
    //     }
    // }
    // switch (u8(o + 12)) {
    // case 0:
    //     ö(u32(o + 4), get_bmg_demo_interface_72_16_4_4t0)
    //     break
    // default:
    //     if (u32(o + 4)) {
    //         sü(u8, 12, o, 4)
    //     }
    // }
    switch (u8(o + 1)) {
    case 6:
        ö(u32(o + 4), get_bmg_demo_interface_72_16_4_4t6)
        break
    case 7:
        ö(u32(o + 4), get_bmg_demo_interface_72_16_4_4t7)
        break
    case 9:
        ö(u32(o + 4), get_bmg_demo_interface_72_16_4_4t9)
        break
    case 0:
    case 1:
    case 2:
    case 3:
    case 5:
        // not offset value seen? 5
        break
    default:
        if (u32(o + 4)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
            // sü(u8, 1, o, 4)
        }
    }

}

function get_bmg_demo_interface_72_16_4_4t9(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// console.log(get_string(o, 0, false))

}
function get_bmg_demo_interface_72_16_4_4t7(o) {// console.log(get_string(o, 0, false))
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_interface_72_16_4_4t6(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_demo_interface_72_16_4_4t0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_interface_72_16_4_4t0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_interface_72_16_4_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_interface_72_24(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 32) || u32(o + 36))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36], o)

    // ö(u32(o + 4), get_bmg_demo_interface_72_24_4)
    ö(u32(o + 12), get_bmg_demo_interface_72_24_12)
    switch (u8(o + 0)) {
    case 1:
        ä(bmg_demo_interface, u32(o + 4), get_bmg_demo_interface)
        // ö(u32(o + 4), get_bmg_demo_interface_72_24_4t1)
        break
    case 11:
        ö(u32(o + 4), get_bmg_demo_interface_72_24_4t11)
        break
    default:
        if (u32(o + 4)) {
            sü(u8, 0, o, 4)
        }
    }
    // ö(u32(o + 28), get_bmg_demo_interface_72_24_28)
    // ä(bmg_demo_interface_72_24_28, u32(o + 28), get_bmg_demo_interface_72_24_28)
    ä(bmg_demo_sound_controls, u32(o + 28), get_bmg_demo_sound_controls)

}

function get_bmg_demo_interface_72_24_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_interface_72_24_4t1(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_interface_72_24_4t11(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_bmg_demo_interface_72_24_4t11_4)
    }

}

function get_bmg_demo_interface_72_24_4t11_4(o) {
    if (u32(o + 4) || u8(o + 8) || u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12], o)

    ö(u32(o + 0), get_bmg_demo_interface_72_24_4t11_4_0)
    // ö(u32(o + 12), get_bmg_demo_interface_72_24_4t11_4_12)
    switch (u8(o + 9)) {
    case 0:
        ö(u32(o + 12), get_bmg_demo_interface_72_24_4t11_4_12t0)
        break
    case 1:
        ö(u32(o + 12), get_bmg_demo_interface_72_24_4t11_4_12t1)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 9, o, 12)
        }
    }

}

function get_bmg_demo_interface_72_24_4t11_4_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_interface_72_24_4t11_4_12(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_bmg_demo_interface_72_24_4t11_4_12t0(o) {
    if (u8(o + 6) || u8(o + 7) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_72_24_4t11_4_12t1(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_interface_72_24_4t11_4_12t1_0)
    ö(u32(o + 4), get_bmg_demo_interface_72_24_4t11_4_12t1_4)

}

function get_bmg_demo_interface_72_24_4t11_4_12t1_0(o) {
    if (u32(o + 0) !== 141 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_interface_72_24_4t11_4_12t1_0_4)

}

function get_bmg_demo_interface_72_24_4t11_4_12t1_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_interface_72_24_4t11_4_12t1_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_interface_72_24_12(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_interface_72_24_12_0)
    ö(u32(o + 4), get_bmg_demo_interface_72_24_12_4)

}

function get_bmg_demo_interface_72_24_12_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_72_24_12_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_72_24_28(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_demo_interface_80(o) {
    if (u32(o + 4) || u8(o + 9) || u8(o + 24) || u32(o + 28) || u32(o + 60) || u8(o + 72) !== 255 || u8(o + 73) !== 255 || u8(o + 74) !== 255 || u8(o + 75) !== 255 || u8(o + 76) !== 255 || u8(o + 77) !== 255 || u8(o + 78) !== 255 || u8(o + 79) !== 255 || u8(o + 80) !== 255 || u8(o + 81) !== 255 || u8(o + 82) !== 255 || u8(o + 83) !== 255 || u8(o + 84) !== 255 || u8(o + 85) !== 255 || u8(o + 86) !== 255 || u8(o + 87) !== 255 || u8(o + 88) !== 255 || u8(o + 89) !== 255 || u8(o + 90) !== 255 || u8(o + 91) !== 255 || u8(o + 92) !== 255 || u8(o + 93) !== 255 || u8(o + 94) !== 255 || u8(o + 95) !== 255 || u32(o + 96))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79, u8, 80, u8, 81, u8, 82, u8, 83, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u32, 96], o)

    ö(u32(o + 0), get_bmg_demo_interface_80_0)
    ö(u32(o + 12), get_bmg_demo_interface_80_12)
    ö(u32(o + 16), get_bmg_demo_interface_80_16)
    ö(u32(o + 32), get_bmg_demo_interface_80_32)

    switch (u8(o + 26)) {
    case 0:
        ö(u32(o + 36), get_bmg_demo_interface_80_36t0)
        break
    case 1:
        ö(u32(o + 36), get_bmg_demo_interface_80_36t1)
        break
    case 7:
        ö(u32(o + 36), get_bmg_demo_interface_80_36t7)
        break
    case 6:
        ö(u32(o + 36), get_bmg_demo_interface_80_36t6)
        break
    case 12:
        ö(u32(o + 36), get_bmg_demo_interface_80_36t12)
        break
    case 13:
        ö(u32(o + 36), get_bmg_demo_interface_80_36t13)
        break
    case 14:
        ö(u32(o + 36), get_bmg_demo_interface_80_36t14)
        break
    case 15:
        ö(u32(o + 36), get_bmg_demo_interface_80_36t15)
        break
    default:
        if (u32(o + 36)) {
            sü(u8, 26, o, 36)
        }
    }

    ö(u32(o + 40), get_bmg_demo_interface_80_40)
    ö(u32(o + 52), get_bmg_demo_interface_80_52)
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 12), get_bmg_demo_interface_80_68)
    }

}

function get_bmg_demo_interface_80_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_interface_80_12(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_80_16(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_interface_80_32(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    // maybe amt 16/11/2025 c
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_bmg_demo_interface_80_32_8)
    }

}

function get_bmg_demo_interface_80_32_8(o) {
    if (u8(o + 0) !== 6 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8], o)

    ö(u32(o + 4), get_bmg_demo_interface_80_32_8_4)

}

function get_bmg_demo_interface_80_32_8_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
// function get_bmg_demo_interface_80_32_8_16(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_interface_80_32_8_28(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }

function get_bmg_demo_interface_80_36t6(o) {
    if (u8(o + 4) !== 1 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 0), get_bmg_demo_interface_80_36t6_0)
    ä(bmg_demo_interface, u32(o + 0), get_bmg_demo_interface)
    ö(u32(o + 12), get_bmg_demo_interface_80_36t6_12)

}

function get_bmg_demo_interface_80_36t6_0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_interface_80_36t6_12(o) {
    if (u32(o + 0) || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_interface_80_36t7(o) {
    if (u32(o + 0) !== 10370368 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ö(u32(o + 0), get_bmg_demo_interface_80_36t7_0)
    // ä(bmg_demo_interface_80_36t7_0, u32(o + 0), get_bmg_demo_interface_80_36t7_0)
    ä(bmg_demo_interface, u32(o + 0), get_bmg_demo_interface)
    // ä(bmg_demo_interface_80_36t7_0, u32(o + 0), get_bmg_demo_interface_80_36t7_0)

}

// function get_bmg_demo_interface_80_36t7_0(o) {
//     if (u32(o + 0) !== 10370464 || u32(o + 4) || u32(o + 8) !== 4 || u32(o + 12) !== 16777216 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 1 || u32(o + 36) || u32(o + 40) !== 500 || u32(o + 44) !== 1 || u32(o + 48) !== 10370528 || u32(o + 52) || u32(o + 56) || f32(o + 60) !== 500 || u32(o + 64) !== 10370560 || u32(o + 68) || u32(o + 72) || u32(o + 76) !== 3 || u32(o + 80) !== 10370592 || u32(o + 84) || u32(o + 88) || u32(o + 92))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

//     // ä(bmg_demo_interface_80_36t7_0, u32(o + 0), get_bmg_demo_interface_80_36t7_0)
//     // globalThis.bmg_demo_interface_80_36t7_0 = []

//     ö(u32(o + 0), get_bmg_demo_interface_80_36t7_0_0)
//     ö(u32(o + 48), get_bmg_demo_interface_80_36t7_0_48)
//     ö(u32(o + 64), get_bmg_demo_interface_80_36t7_0_64)
//     ö(u32(o + 80), get_bmg_demo_interface_80_36t7_0_80)

// }

// function get_bmg_demo_interface_80_36t7_0_0(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_interface_80_36t7_0_48(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_bmg_demo_interface_80_36t7_0_64(o) {
// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
// }
// function get_bmg_demo_interface_80_36t7_0_80(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }

function get_bmg_demo_interface_80_36t13(o) {
    if (u32(o + 0) !== 327680 || u32(o + 8) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_interface_80_36t13_4)
    ö(u32(o + 12), get_bmg_demo_interface_80_36t13_12)

}

function get_bmg_demo_interface_80_36t13_4(o) {
    if (f32(o + 4) !== 0.03200000151991844 || u32(o + 8) !== 1 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_80_36t13_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    ß('p_texture', o, 0)

}

function get_bmg_demo_interface_80_36t14(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_interface_80_36t14_4)

}

function get_bmg_demo_interface_80_36t14_4(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) !== 1 || u8(o + 3) || u32(o + 4) || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_interface_80_36t15(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_interface_80_36t15_0)

}

function get_bmg_demo_interface_80_36t15_0(o) {
    if (u32(o + 4) || u32(o + 8) !== 360 || u32(o + 12) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 16), get_bmg_demo_interface_80_36t15_0_16)

}

function get_bmg_demo_interface_80_36t15_0_16(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 32) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28, u32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 0)

    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 12), get_bmg_demo_interface_80_36t15_0_16_48)
    }
    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 32), get_bmg_demo_interface_80_36t15_0_16_56)
    }

}

function get_bmg_demo_interface_80_36t15_0_16_48(o) {
    if (u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_bmg_demo_interface_80_36t15_0_16_56(o) {
    if (u32(o + 12) || u8(o + 17) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_interface_80_36t1(o) {
    if (u8(o + 3) !== 5)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, f32, 28], o)

    // ä(bmg_demo_interface_80_36t1_4, u32(o + 4), get_bmg_demo_interface_80_36t1_4)
    ä(bmg_demo_interface_80_36t1_8_4_0, u32(o + 4), get_bmg_demo_interface_80_36t1_8_4_0)
    // ö(u32(o + 4), get_bmg_demo_interface_80_36t1_4)
    ö(u32(o + 8), get_bmg_demo_interface_80_36t1_8)

    switch (u8(o + 2)) {
    case 0:
        ä(bmg_demo_interface_80_36t1_12t0, u32(o + 12), get_bmg_demo_interface_80_36t1_12t0)
        // ö(u32(o + 12), get_bmg_demo_interface_80_36t1_12t0)
        break
    case 1:
        ä(bmg_demo_interface_80_36t1_12t1, u32(o + 12), get_bmg_demo_interface_80_36t1_12t1)
        // ö(u32(o + 12), get_bmg_demo_interface_80_36t1_12t1)
        break
    default:
        if (u32(o + 12)) {
            sü(u8, 2, o, 12)
        }
    }

    // switch (u8(o + 0)) {
    // case 0:
    //     ö(u32(o + 12), get_bmg_demo_interface_80_36t1_12t0)
    //     break
    // case 1:
    //     ö(u32(o + 12), get_bmg_demo_interface_80_36t1_12t1)
    //     break
    // case 3:
    //     ö(u32(o + 12), get_bmg_demo_interface_80_36t1_12t3)
    //     break
    // default:
    //     if (u32(o + 12)) {
    //     }
    // }

    // ö(u32(o + 12), get_bmg_demo_interface_80_36t1_12)
    ö(u32(o + 16), get_bmg_demo_interface_80_36t1_16)

}

function get_bmg_demo_interface_80_36t1_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_demo_interface_80_36t1_4_0)

}

function get_bmg_demo_interface_80_36t1_4_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_demo_interface_80_36t1_8(o) {
    if (u8(o + 9) || u8(o + 10) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_demo_interface_80_36t1_8_4)
    }

}

function get_bmg_demo_interface_80_36t1_8_4(o) {
    /*ü(1, [u32, 0], o)*/

    // ö(u32(o + 0), get_bmg_demo_interface_80_36t1_8_4_0)
    ä(bmg_demo_interface_80_36t1_8_4_0, u32(o + 0), get_bmg_demo_interface_80_36t1_8_4_0)

}

function get_bmg_demo_interface_80_36t1_8_4_0(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    // ä(bmg_demo_interface_80_36t1_8_4_0, u32(o + 0), get_bmg_demo_interface_80_36t1_8_4_0)
    // globalThis.bmg_demo_interface_80_36t1_8_4_0 = []

    ö(u32(o + 0), get_bmg_demo_interface_80_36t1_8_4_0_0)

}

function get_bmg_demo_interface_80_36t1_8_4_0_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_demo_interface_80_36t1_12(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_interface_80_36t1_12t0(o) {
    if (u8(o + 11) || u32(o + 16) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ß('p_texture', o, 0)

    ä(bmg_demo_interface_80_36t1_12t0_4, u32(o + 4), get_bmg_demo_interface_80_36t1_12t0_4)
    // ö(u32(o + 4), get_bmg_demo_interface_80_36t1_12t0_4)
    ö(u32(o + 20), get_bmg_demo_interface_80_36t1_12t0_20)
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_bmg_demo_interface_80_36t1_12t0_28)
    }

}

function get_bmg_demo_interface_80_36t1_12t0_4(o) {
    if (u8(o + 0) || u8(o + 1) !== 2 || u8(o + 2) || u8(o + 3) !== 5 || f32(o + 4) !== 40 || f32(o + 8) !== 40 || u32(o + 12) || u32(o + 16) || u32(o + 20) !== 253 || u32(o + 28) !== 130 || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 2), get_bmg_demo_interface_80_36t1_12t0_4_24)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 24), get_bmg_demo_interface_80_36t1_12t0_4_32)
    }
    ö(u32(o + 36), get_bmg_demo_interface_80_36t1_12t0_4_36)

}

function get_bmg_demo_interface_80_36t1_12t0_4_24(o) {/*ü(1, [u16, 0], o)*/
}
function get_bmg_demo_interface_80_36t1_12t0_4_32(o) {
    if (u8(o + 17) || u32(o + 20))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20], o)
}
function get_bmg_demo_interface_80_36t1_12t0_4_36(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_demo_interface_80_36t1_12t0_20(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_80_36t1_12t0_28(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, f32, 12, f32, 16, u32, 20, f32, 24, f32, 28], o)
}

function get_bmg_demo_interface_80_36t1_12t1(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_bmg_demo_interface_80_36t1_12t1_4)

}

function get_bmg_demo_interface_80_36t1_12t1_4(o) {
    if (u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28], o)

    // ä(bmg_demo_interface_80_36t1_12t1_4_12, u32(o + 12), get_bmg_demo_interface_80_36t1_12t1_4_12)
    ä(bmg_demo_interface_80_36t1_12t0, u32(o + 12), get_bmg_demo_interface_80_36t1_12t0)
    ä(bmg_demo_interface_80_36t1_12t0, u32(o + 16), get_bmg_demo_interface_80_36t1_12t0)
    ä(bmg_demo_interface_80_36t1_12t0, u32(o + 20), get_bmg_demo_interface_80_36t1_12t0)
    ä(bmg_demo_interface_80_36t1_12t0, u32(o + 28), get_bmg_demo_interface_80_36t1_12t0)
    // ö(u32(o + 28), get_bmg_demo_interface_80_36t1_12t1_4_28)
    // ö(u32(o + 12), get_bmg_demo_interface_80_36t1_12t1_4_12)
    // ä(bmg_demo_interface_80_36t1_12t1_4_16, u32(o + 16), get_bmg_demo_interface_80_36t1_12t1_4_16)
    // ö(u32(o + 16), get_bmg_demo_interface_80_36t1_12t1_4_16)
    // ö(u32(o + 20), get_bmg_demo_interface_80_36t1_12t1_4_20)
    // ä(bmg_demo_interface_80_36t1_12t1_4_20, u32(o + 20), get_bmg_demo_interface_80_36t1_12t1_4_20)

}

function get_bmg_demo_interface_80_36t1_12t1_4_12(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
}
function get_bmg_demo_interface_80_36t1_12t1_4_16(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
}
function get_bmg_demo_interface_80_36t1_12t1_4_20(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
}
// function get_bmg_demo_interface_80_36t1_12t1_4_28(o) {
//     ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
// }

function get_bmg_demo_interface_80_36t1_12t3(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_interface_80_36t1_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_interface_80_36t12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_80_36t0(o) {
    if (u8(o + 2) || u8(o + 3) || u8(o + 14) || u8(o + 15) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28], o)
    ß('p_texture', o, 4)

    ö(u32(o + 8), get_bmg_demo_interface_80_36t0_8)

}

function get_bmg_demo_interface_80_36t0_8(o) {
    if (u32(o + 0) !== 2 || u32(o + 8) !== 1 || u32(o + 12) || u8(o + 16) !== 1 || u8(o + 17) || u8(o + 18) || u8(o + 19) !== 2 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_demo_interface_80_36t0_8_4)
    }

}

function get_bmg_demo_interface_80_36t0_8_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}

function get_bmg_demo_interface_80_36(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_interface_80_40(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 36), get_bmg_demo_interface_80_40_36)

}

function get_bmg_demo_interface_80_40_36(o) {
    if (u32(o + 0) !== 23 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) !== 1 || u32(o + 24) !== 10338080 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 24), get_bmg_demo_interface_80_40_36_24)

}

function get_bmg_demo_interface_80_40_36_24(o) {
    if (u8(o + 0) !== 9 || u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_demo_interface_80_52(o) {
    if (u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_bmg_demo_interface_80_52_4)
    }
    ö(u32(o + 12), get_bmg_demo_interface_80_52_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_bmg_demo_interface_80_52_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_bmg_demo_interface_80_52_28)
    }
    ö(u32(o + 36), get_bmg_demo_interface_80_52_36)

}

function get_bmg_demo_interface_80_52_4(o) {
    if (u32(o + 8) || u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_80_52_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_80_52_20(o) {
    if (u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_80_52_28(o) {
    if (u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bmg_demo_interface_80_52_36(o) {
    if (u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}

function get_bmg_demo_interface_80_68(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8], o)

    ö(u32(o + 4), get_bmg_demo_interface_80_68_4)

}

function get_bmg_demo_interface_80_68_4(o) {
    if (u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_bmg_demo_interface_80_68_4_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_bmg_demo_interface_80_68_4_12)
    }
    ö(u32(o + 20), get_bmg_demo_interface_80_68_4_20)

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 32), get_bmg_demo_interface_80_68_4_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_bmg_demo_interface_80_68_4_36)
    }

}

function get_bmg_demo_interface_80_68_4_4(o) {
    if (u32(o + 0) || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 12) || u32(o + 16) || u32(o + 20))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16, u32, 20], o)
}
function get_bmg_demo_interface_80_68_4_12(o) {
    if (u32(o + 8) || u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_80_68_4_20(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_interface_80_68_4_28(o) {
    if (f32(o + 8) !== 1 || u32(o + 12) || u8(o + 17) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_demo_interface_80_68_4_36(o) {
    if (u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}

function get_bmg_demo_model(o) {
    if (u32(o + 28))
        ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76], o)

    ö(u32(o + 4), get_bmg_demo_model_4)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 8), get_bmg_demo_model_20)
        ö(u32(o + 24) + (i * 4), get_bmg_demo_model_24)
    }

}

function get_bmg_demo_model_4(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_demo_model_20(o) {
    /*ü(1, [u32, 0, u32, 4], o)*/

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_demo_model_20_4)
    }

}

function get_bmg_demo_model_20_4(o) {
    /*ü(1, [u32, 0], o)*/

    switch (g.console) {
    case "wii":
        ö(u32(o + 0), get_bmg_demo_model_20_4_0twii)
        break
    case "pc":
        ö(u32(o + 0), get_bmg_demo_model_20_4_0tpc)
        break
    }

}

function get_bmg_demo_model_20_4_0twii(o) {
    switch (u32(o)) {
    case 0:
        get_bmg_demo_model_20_4_0twiit0(o)
        break
    case 1:
        get_bmg_demo_model_20_4_0twiit1(o)
        break
    case 2:
        get_bmg_demo_model_20_4_0twiit2(o)
        break
    case 3:
        get_bmg_demo_model_20_4_0twiit3(o)
        break
    default:
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212], o)
    }
    // if (u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 64) || u8(o + 71) !== 255 || u8(o + 74) !== 255 || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || f32(o + 156) !== 4.600602988224807e-41 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172))
    // ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212], o)
    // // ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212], o)
    // ß('p_texture', o, 48)
    // ß('p_texture', o, 56)
    // ß('p_texture', o, 60)
    // ß('p_animation', o, 32)

    //u32#1 | u32#0 | f32#-269609270561996800.00 | u32#16777239 | u32#256 | u32#0 | u32#0 | u32#0 | u32#17 | u32#17 | u32#0 | u32#0 | P_Tu32#18415616 | u32#0 | u32#0 | u32#0 | u32#0 | u8#[ 255, u8#255, u8#255, u8#255 ] | u8#[ 0, u8#0, u8#255, u8#128 ] | u32#0 | u32#0 | u32#0 | u32#0 | u32#0 | f32#1.00 | u32#0 | u32#0 | u32#0 | u32#0 | f32#1.00 | u32#0 | u32#0 | u32#0 | u32#0 | f32#1.00 | u32#0 | u32#0 | u32#0 | u32#0 | f32#0.00 | u8#[ 255, u8#255, u8#255, u8#255 ] | u32#0 | u32#0 | u32#0 | u32#524315 | P_Ou32#369968 | P_Ou32#371792 | u32#0 | P_Ou32#373008 | P_Ou32#374832 | P_Ou32#375392 | u32#0 | P_Ou32#368496 | u32#1 || O 7946928 M 7578656 I 368272

    // ö(u32(o + 180), get_bmg_demo_model_20_4_0twii_180) /1812 bytes ? 
    // ö(u32(o + 184), get_bmg_demo_model_20_4_0twii_184) // 1208 bytes
    // ö(u32(o + 188), get_bmg_demo_model_20_4_0twii_188)
    // ö(u32(o + 192), get_bmg_demo_model_20_4_0twii_192) // /1812 bytes ? 
    // ö(u32(o + 196), get_bmg_demo_model_20_4_0twii_196) // 560 bytes ?
    // ö(u32(o + 200), get_bmg_demo_model_20_4_0twii_200)
    // ö(u32(o + 204), get_bmg_demo_model_20_4_0twii_204) 
    // ö(u32(o + 208), get_bmg_demo_model_20_4_0twii_208)//1472 bytes

}

function get_bmg_demo_model_20_4_0twiit0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 60) || u32(o + 64) || u8(o + 71) !== 255 || u8(o + 74) !== 255 || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) !== 32831 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 184) || u32(o + 204) || u32(o + 212) !== 1 || u8(o + 218) || u8(o + 219))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u16, 176, u16, 178, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u8, 216, u8, 217, u8, 218, u8, 219, f32, 220], o)
    ß('p_animation', o, 32)
    ß('p_texture', o, 48)
    ß('p_texture', o, 56)

    ö(u32(o + 180), get_bmg_demo_model_20_4_0twiit0_180)
    ö(u32(o + 188), get_bmg_demo_model_20_4_0twiit0_188)
    ö(u32(o + 192), get_bmg_demo_model_20_4_0twiit0_192)
    ö(u32(o + 196), get_bmg_demo_model_20_4_0twiit0_196)
    ö(u32(o + 200), get_bmg_demo_model_20_4_0twiit0_200)
    ö(u32(o + 208), get_bmg_demo_model_20_4_0twiit0_208)

}

function get_bmg_demo_model_20_4_0twiit0_180(o) {// floats
}
function get_bmg_demo_model_20_4_0twiit0_188(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// u8s
}
function get_bmg_demo_model_20_4_0twiit0_192(o) {// floats sometimes ?
}
function get_bmg_demo_model_20_4_0twiit0_196(o) {// idk
}
function get_bmg_demo_model_20_4_0twiit0_200(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    for (let i = 0; i < u32(o + 4); i++) {// ö(u32(o + 8) + i, get_bmg_demo_model_20_4_0twiit0_200_8)
    }
    ö(u32(o + 8), get_bmg_demo_model_20_4_0twiit0_200_8)

}

function get_bmg_demo_model_20_4_0twiit0_200_8(o) {// 1 byter per entry
//also string after
}

function get_bmg_demo_model_20_4_0twiit0_208(o) {// floats
}

function get_bmg_demo_model_20_4_0twiit1(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) !== 32831 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u16, 176, u16, 178, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u16, 212, u16, 214, u32, 216, f32, 220], o)
    ß('p_texture', o, 48)
    ß('p_texture', o, 60)
    ß('p_texture', o, 56)

    ö(u32(o + 180), get_bmg_demo_model_20_4_0twiit1_180)
    ö(u32(o + 184), get_bmg_demo_model_20_4_0twiit1_184)
    ö(u32(o + 188), get_bmg_demo_model_20_4_0twiit1_188)
    ö(u32(o + 192), get_bmg_demo_model_20_4_0twiit1_192)
    ö(u32(o + 196), get_bmg_demo_model_20_4_0twiit1_196)
    ö(u32(o + 200), get_bmg_demo_model_20_4_0twiit1_200)
    for (let i = 0; i < u16(o + 212); i++) {
        ö(u32(o + 204) + (i * 8), get_bmg_demo_model_20_4_0twiit1_204)
    }
    ö(u32(o + 208), get_bmg_demo_model_20_4_0twiit1_208)

}

function get_bmg_demo_model_20_4_0twiit1_180(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// float
}
function get_bmg_demo_model_20_4_0twiit1_184(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// 4 u8s ?
}
function get_bmg_demo_model_20_4_0twiit1_188(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// u8
}
function get_bmg_demo_model_20_4_0twiit1_192(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// floats
}
function get_bmg_demo_model_20_4_0twiit1_196(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// u16's ?
}
function get_bmg_demo_model_20_4_0twiit1_200(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_bmg_demo_model_20_4_0twiit1_200_8)

}

function get_bmg_demo_model_20_4_0twiit1_200_8(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// u8s
}

function get_bmg_demo_model_20_4_0twiit1_204(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    ö(u32(o + 4), get_bmg_demo_model_20_4_0twiit1_204_4)

}

function get_bmg_demo_model_20_4_0twiit1_204_4(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_model_20_4_0twiit1_208(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// floats ?
}

function get_bmg_demo_model_20_4_0twiit2(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) !== 32831 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 208) || u32(o + 212) || u32(o + 216) || u32(o + 220))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220], o)
    ß('p_texture', o, 48)

    ö(u32(o + 180), get_bmg_demo_model_20_4_0twiit2_180)
    ö(u32(o + 188), get_bmg_demo_model_20_4_0twiit2_188)
    ö(u32(o + 196), get_bmg_demo_model_20_4_0twiit2_196)
    ö(u32(o + 204), get_bmg_demo_model_20_4_0twiit2_204)

}

function get_bmg_demo_model_20_4_0twiit2_180(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//floats
}
function get_bmg_demo_model_20_4_0twiit2_188(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//floats
}
function get_bmg_demo_model_20_4_0twiit2_196(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// bytes ?
}
function get_bmg_demo_model_20_4_0twiit2_204(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// bytes ?
}

function get_bmg_demo_model_20_4_0twiit3(o) {
    if (u32(o + 0) !== 3 || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) !== 32831 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) !== 655403 || u32(o + 184) || u32(o + 188))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, f32, 220], o)
    ß('p_texture', o, 48)

    ö(u32(o + 180), get_bmg_demo_model_20_4_0twiit3_180)
    ö(u32(o + 192), get_bmg_demo_model_20_4_0twiit3_192)
    ö(u32(o + 196), get_bmg_demo_model_20_4_0twiit3_196)
    ö(u32(o + 200), get_bmg_demo_model_20_4_0twiit3_200)
    for (let i = 0; i < u16(o + 212); i++) {
        ö(u32(o + 204) + (i * 8), get_bmg_demo_model_20_4_0twiit3_204)
    }

    ö(u32(o + 208), get_bmg_demo_model_20_4_0twiit3_208)

}

function get_bmg_demo_model_20_4_0twiit3_180(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// float
}
function get_bmg_demo_model_20_4_0twiit3_192(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// non floats
}
function get_bmg_demo_model_20_4_0twiit3_196(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// non floats
}
function get_bmg_demo_model_20_4_0twiit3_200(o) {
    if (u32(o + 0) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_bmg_demo_model_20_4_0twiit3_200_8)

}

function get_bmg_demo_model_20_4_0twiit3_200_8(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// bytes
}

function get_bmg_demo_model_20_4_0twiit3_204(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)

    ö(u32(o + 4), get_bmg_demo_model_20_4_0twiit3_204_4)

}

function get_bmg_demo_model_20_4_0twiit3_204_4(o) {// floats?
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_model_20_4_0twiit3_208(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// floats
}

function get_bmg_demo_model_20_4_0twii_180(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0twii_184(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0twii_188(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0twii_192(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0twii_196(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0twii_200(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0twii_204(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0twii_208(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_model_20_4_0tpc(o) {
    switch (u32(o)) {
    case 0:
        get_bmg_demo_model_20_4_0tpct0(o)
        break
    case 1:
        get_bmg_demo_model_20_4_0tpct1(o)
        break
    case 2:
        get_bmg_demo_model_20_4_0tpct2(o)
        break
    default:
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300], o)
    }

    // if(u32(o+4) ||u32(o+20) ||u32(o+24) ||u32(o+28) ||u32(o+40) ||u32(o+44) ||u32(o+52) ||u32(o+64) ||u8(o+68) !==255 ||u8(o+69) !==255 ||u8(o+70) !==255 ||u8(o+71) !==255 ||u8(o+74) !==255 ||u32(o+76) ||u32(o+80) ||u32(o+84) ||u32(o+88) ||u32(o+92) ||f32(o+96) !==1 ||u32(o+100) ||u32(o+104) ||u32(o+108) ||u32(o+112) ||f32(o+116) !==1 ||u32(o+120) ||u32(o+124) ||u32(o+128) ||u32(o+132) ||f32(o+136) !==1 ||u32(o+140) ||u32(o+144) ||u32(o+148) ||u32(o+152) ||f32(o+156) !==1 ||u32(o+164) ||u32(o+168) ||u32(o+172) ||u32(o+208) ||u32(o+216) !==1 ||u32(o+240) ||u32(o+244) ||u32(o+248) ||u32(o+252) ||u32(o+256) ||u32(o+260) ||u32(o+264) ||u32(o+268) ||u32(o+272) ||u32(o+276) ||u32(o+280) ||u32(o+284) ||u32(o+288) ||u32(o+292) ||u32(o+296) ||u32(o+300) )
    // ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300], o)
    //  ß('p_texture', o, 48)
    //  ß('p_texture', o, 32)
    //  ß('p_texture', o, 60)
    //  ß('p_texture', o, 160)
    //  ß('p_texture', o, 56)
    //  ß('p_animation', o, 160)
    // //maybe type o god
    //     if (u32(o + 188)) {// for (let i = 0; i < u32(o + 176); i++) {
    //     //     ö(u32(o + 188) + (i * 12), get_bmg_demo_model_20_4_0tpc_188)
    //     // }
    //     }
    //     if (u32(o + 196)) {// for (let i = 0; i < u32(o + 176); i++) {
    //     //     ö(u32(o + 196) + (i * 12), get_bmg_demo_model_20_4_0tpc_196)
    //     // }
    //     }
    //     if (u32(o + 200)) {// for (let i = 0; i < u32(o + 176); i++) {
    //     //     ö(u32(o + 200) + (i * 8), get_bmg_demo_model_20_4_0tpc_200)
    //     // }
    //     }
    //     if (u32(o + 204)) {// for (let i = 0; i < u32(o + 176); i++) {
    //     //     ö(u32(o + 204) + (i * 8), get_bmg_demo_model_20_4_0tpc_204)
    //     // }
    //     }
    //     if (u32(o + 212)) {// for (let i = 0; i < u32(o + 176); i++) {
    //     //     ö(u32(o + 212) + (i * 96), get_bmg_demo_model_20_4_0tpc_212)
    //     // }
    //     }
    //     // for (let i = 0; i < u32(o + 224); i++) {
    //     //     ö(u32(o + 228) + (i * 64), get_bmg_demo_model_20_4_0tpc_228)
    //     // }
    ö(u32(o + 188), get_bmg_demo_model_20_4_0tpc_188)
    ö(u32(o + 192), get_bmg_demo_model_20_4_0tpc_192)
    ö(u32(o + 196), get_bmg_demo_model_20_4_0tpc_196)
    ö(u32(o + 200), get_bmg_demo_model_20_4_0tpc_200)
    ö(u32(o + 204), get_bmg_demo_model_20_4_0tpc_204)
    ö(u32(o + 212), get_bmg_demo_model_20_4_0tpc_212)
    ö(u32(o + 220), get_bmg_demo_model_20_4_0tpc_220)
    ö(u32(o + 228), get_bmg_demo_model_20_4_0tpc_228)
    ö(u32(o + 236), get_bmg_demo_model_20_4_0tpc_236)

}

function get_bmg_demo_model_20_4_0tpct0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u8(o + 74) !== 255 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || f32(o + 156) !== 1 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 184) || u32(o + 204) || u32(o + 208) || u32(o + 212) || u32(o + 216) !== 1 || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u32(o + 272) || u32(o + 276) || u32(o + 280) || u32(o + 284) || u32(o + 288) || u32(o + 292) || u32(o + 296) || u32(o + 300))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300], o)
    ß('p_texture', o, 48)
    ß('p_texture', o, 32)

    // ö(u32(o + 188), get_bmg_demo_model_20_4_0tpct0_188)
    // ö(u32(o + 192), get_bmg_demo_model_20_4_0tpct0_192)
    // ö(u32(o + 196), get_bmg_demo_model_20_4_0tpct0_196)
    // ö(u32(o + 200), get_bmg_demo_model_20_4_0tpct0_200)
    // ö(u32(o + 220), get_bmg_demo_model_20_4_0tpct0_220)
    // ö(u32(o + 228), get_bmg_demo_model_20_4_0tpct0_228)

}

function get_bmg_demo_model_20_4_0tpct0_188(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct0_192(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct0_196(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct0_200(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct0_220(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct0_228(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_model_20_4_0tpct1(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u8(o + 74) !== 255 || u8(o + 75) !== 128 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || f32(o + 156) !== 1 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 184) !== 4 || u32(o + 208) || u32(o + 216) !== 1 || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u32(o + 272) || u32(o + 276) || u32(o + 280) || u32(o + 284) || u32(o + 288) || u32(o + 292) || u32(o + 296) || u32(o + 300))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300], o)
    ß('p_texture', o, 48)
    ß('p_texture', o, 60)
    ß('p_texture', o, 160)
    ß('p_texture', o, 56)
    ß('p_animation', o, 160)

    // ö(u32(o + 188), get_bmg_demo_model_20_4_0tpct1_188)
    // ö(u32(o + 192), get_bmg_demo_model_20_4_0tpct1_192)
    // ö(u32(o + 196), get_bmg_demo_model_20_4_0tpct1_196)
    // ö(u32(o + 200), get_bmg_demo_model_20_4_0tpct1_200)
    // ö(u32(o + 204), get_bmg_demo_model_20_4_0tpct1_204)
    // ö(u32(o + 212), get_bmg_demo_model_20_4_0tpct1_212)
    // ö(u32(o + 220), get_bmg_demo_model_20_4_0tpct1_220)
    // ö(u32(o + 228), get_bmg_demo_model_20_4_0tpct1_228)
    // ö(u32(o + 236), get_bmg_demo_model_20_4_0tpct1_236)

}

function get_bmg_demo_model_20_4_0tpct1_188(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct1_192(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct1_196(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct1_200(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct1_204(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct1_212(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct1_220(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct1_228(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct1_236(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_model_20_4_0tpct2(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u8(o + 68) !== 255 || u8(o + 69) !== 255 || u8(o + 70) !== 255 || u8(o + 71) !== 255 || u8(o + 72) || u8(o + 73) || u8(o + 74) !== 255 || u8(o + 75) !== 128 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 96) !== 1 || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || f32(o + 116) !== 1 || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 132) || f32(o + 136) !== 1 || u32(o + 140) || u32(o + 144) || u32(o + 148) || u32(o + 152) || f32(o + 156) !== 1 || u8(o + 160) !== 255 || u8(o + 161) !== 255 || u8(o + 162) !== 255 || u8(o + 163) !== 255 || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 180) !== 3 || u32(o + 184) || u32(o + 192) || u32(o + 200) || u32(o + 204) || u32(o + 208) || u32(o + 212) || u32(o + 216) !== 1 || u32(o + 224) || u32(o + 228) || u32(o + 232) || u32(o + 236) || u32(o + 240) || u32(o + 244) || u32(o + 248) || u32(o + 252) || u32(o + 256) || u32(o + 260) || u32(o + 264) || u32(o + 268) || u32(o + 272) || u32(o + 276) || u32(o + 280) || u32(o + 284) || u32(o + 288) || u32(o + 292) || u32(o + 296) || u32(o + 300))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, u32, 100, u32, 104, u32, 108, u32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, f32, 136, u32, 140, u32, 144, u32, 148, u32, 152, f32, 156, u8, 160, u8, 161, u8, 162, u8, 163, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300], o)

    // ö(u32(o + 188), get_bmg_demo_model_20_4_0tpct2_188)
    // ö(u32(o + 196), get_bmg_demo_model_20_4_0tpct2_196)
    // ö(u32(o + 220), get_bmg_demo_model_20_4_0tpct2_220)

}

function get_bmg_demo_model_20_4_0tpct2_188(o) {// 1152 - 30816
// 1071171200 | 1093448414 | 1084282688 | 1071961376 || O 22261680 M 21696928 I 564752
// Struct Size: 6912 | Init: 6912
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct2_196(o) {// 1152,2016,2880,3456,4032,4896,5760,6912,8064,8352,9216,10656,12096,12672,30816
// 1039038858 | 1061259494 | 1059382825 | 1039038858 || O 22268592 M 21696928 I 571664
// Struct Size: 6912 | Init: 6912
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_demo_model_20_4_0tpct2_220(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_demo_model_20_4_0tpc_188(o) {/*ü(1, [f32, 0, f32, 4, f32, 8], o)*/
}
function get_bmg_demo_model_20_4_0tpc_192(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
// ????
}
function get_bmg_demo_model_20_4_0tpc_196(o) {/*ü(1, [f32, 0, f32, 4, f32, 8], o)*/
}
function get_bmg_demo_model_20_4_0tpc_200(o) {/*ü(1, [f32, 0, f32, 4], o)*/
}
function get_bmg_demo_model_20_4_0tpc_204(o) {/*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7], o)*/
}
function get_bmg_demo_model_20_4_0tpc_212(o) {
    if (f32(o + 12) || f32(o + 16) || f32(o + 20) || f32(o + 36) || f32(o + 40) || f32(o + 44) || f32(o + 60) || f32(o + 64) || f32(o + 68) || f32(o + 84) || f32(o + 88) || f32(o + 92))
        ü(1, [f32, 0, f32, 4, f32, 6, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76, f32, 80, f32, 84, f32, 88, f32, 92], o)
}
function get_bmg_demo_model_20_4_0tpc_220(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    // for (let i = 0; i < u32(o + 8); i++) {
    //     ö(u32(o + 12) + i, get_bmg_demo_model_20_4_0tpc_220_12)
    // }
    ö(u32(o + 12), get_bmg_demo_model_20_4_0tpc_220_12)

}

function get_bmg_demo_model_20_4_0tpc_220_12(o) {/*ü(1, [u8, 0], o)*/
}

function get_bmg_demo_model_20_4_0tpc_228(o) {
    if (f32(o + 60) !== 1)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60], o)
}
function get_bmg_demo_model_20_4_0tpc_236(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 8) !== 2 || u32(o + 12) !== 3)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_demo_model_24(o) {/*ü(1, [f32, 0], o)*/
}
