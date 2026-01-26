function get_x_hwvx_proto() {
    globalThis.offset_mid = undefined

    switch (u32(0)) {
    case 33620128:
        break
    default:
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], 0);
    }
    switch (u32(4)) {
    case 67174574:
        break
    default:
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], 0);
    }

    for (let i = 0; i < u32(12); i++) {
        get_hwvx_proto_directory(16 + (i * 24))
    }
}
function get_hwvx_proto_directory(o) {
    let next_offset = o + 24
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

    globalThis.hwvx_proto_interface = []
    globalThis.hwvx_proto_text = []
    globalThis.hwvx_proto_font = []
    globalThis.hwvx_proto_interface_text_related = []
    globalThis.hwvx_proto_unknown_thing = []
    globalThis.hwvx_proto_sound_controls = []
    globalThis.hwvx_proto_sound_section = []
    globalThis.hwvx_proto_unknown = []
    globalThis.hwvx_proto_car_related = []
    globalThis.hwvx_proto_strange = []
    globalThis.hwvx_proto_model = []
    globalThis.hwvx_proto_model_anims_1 = []
    globalThis.hwvx_proto_model_anims_2 = []
    globalThis.hwvx_proto_asdf = []
    globalThis.hwvx_proto_unknown_idk_sec = []
    globalThis.hwvx_proto_grand_section = []
    globalThis.hwvx_proto_world_100_4 = []
    globalThis.hwvx_proto_world_small_section = []
    globalThis.hwvx_proto_world_36_36 = []
    globalThis.hwvx_proto_world_36_48 = []
    globalThis.hwvx_proto_world_model_related = []
    globalThis.hwvx_proto_collision_link = []
    globalThis.hwvx_proto_collision_32_68 = []
    globalThis.hwvx_proto_collision_32_48 = []
    globalThis.hwvx_proto_world_12 = []
    globalThis.hwvx_proto_world_idk = []
    globalThis.hwvx_proto_some_world_thing = []
    globalThis.hwvx_proto_datapack_68_4t2_4 = []
    globalThis.hwvx_proto_world_108_44t6 = []
    globalThis.hwvx_proto_world_120_0 = []
    globalThis.hwvx_proto_world_52 = []
    globalThis.hwvx_proto_world_108 = []
    globalThis.hwvx_proto_world_settings_156 = []
    globalThis.hwvx_proto_world_36_48_8 = []
    globalThis.hwvx_proto_world_36_48_16 = []
    globalThis.hwvx_proto_world_36_48_24 = []
    globalThis.hwvx_proto_car_link = []
    globalThis.hwvx_proto_car_link_48 = []
    globalThis.hwvx_proto_unknown_link_section = []
    globalThis.hwvx_proto_datapack_68_12_4_4 = []
    globalThis.hwvx_proto_world_76 = []
    globalThis.hwvx_proto_world_84 = []
    globalThis.hwvx_proto_datapack_68_4t5_12t0 = []
    globalThis.hwvx_proto_datapack_68_4trest_1st = []
    globalThis.hwvx_proto_datapack_68_4trest_2nd = []
    globalThis.hwvx_proto_world_20 = []
    globalThis.hwvx_model = []

    director_offset = o
    g.type = u32(o + 4)

    // switch (g.type) {
    // case 0:
    // case 1:
    // case 2:
    // case 3:
    // case 4:
    // case 5:
    // case 6:
    // case 7:
    // case 8:
    // case 9:
    // case 10:
    //     return
    //     break
    // }

    /*types finished
    * 0 = car [f]
    * 1 = interface [f]
    * 2 = item [f]
    * 3 = link [f]
    * 4 = world [f]
    * 5 = colliders [f]
    * 6 = world texture [f]
    * 7 = geometry [f]
    * 8 = share [f]
    * 9 = audio [f]
    * 10 = music [f]
    */

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
        get_hwvx_proto_datapack(next_offset + u32(o + 20))
        break
    case 7:
        get_hwvx_proto_geo_datapack(next_offset + u32(o + 20))
    }

    print_logarray(log_array)

}

function get_hwvx_proto_datapack(o) {
    if (u32(o + 36) || u32(o + 96) || u32(o + 108) || u32(o + 116))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], o)

    let end_datapack = o + 120

    if (u32(o + 8) || u32(o + 4)) {
        end_datapack += (u32(o + 8) * 4 + u32(o + 4))
    }

    if (u32(o + 8)) {
        let calc_audio = o + 120
        let afteroffsetlist = calc_audio + (u32(o + 8) * 4)
        for (let i = 0; i < u32(o + 8); i++) {// get_hwvx_proto_audio_list(u32(calc_audio + (i * 4)) + afteroffsetlist, (i+1) == u32(o + 8),afteroffsetlist,end_datapack,o)
        }
        // let final_audio = (u32(calc_audio + (u32(o + 8) * 4)) + afteroffsetlist)
        // console.log(final_audio,afteroffsetlist)
    }

    // console.log(end_datapack)
    offset_mid = end_datapack + (u32(o + 12) * 4) + ((u32(o + 16) + u32(o + 28) + u32(o + 52) + u32(o + 56)) * 8);

    // if (u32(o + 68)) {
    //     log_array.p_offset.array.push(u32(o + 68))
    // }

    // get_hwvx_proto_get_combined_patch_list(o, end_datapack)
    globalThis.old_log_array = structuredClone(log_array)
    for (let i = 0; i < u32(o + 20); i++) {
        get_hwvx_proto_texture(offset_mid + u32(o + 24) + (i * 16))
    }

    for (let i = 0; i < u32(o + 48); i++) {
        get_hwvx_proto_texture_anims(offset_mid + u32(o + 60) + (i * 12))
    }

    // let calcoffset = (u32(o + 8) * 4 + (o + 120))
    // if (u32(o + 72)) {//always type 4
    // // get_hwvx_proto_datapack_72(calcoffset + u32(o + 72) )
    // }
    // if (u32(o + 76)) {
    //     if (u32(o+72)) {
    //     console.log(calcoffset, calcoffset + u32(o + 76))
    //     }else{
    //     }
    //     //10 or 4
    //     //related to datapack somehow?
    //     get_hwvx_proto_datapack_76(calcoffset + u32(o + 76))
    // }

    // if (g.type === 10) {
    //     ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], o)
    //     console.log(o + 120)
    // }

    switch (g.type) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 9:
    case 10:
        // get_hwvx_proto_basic(offset_mid)
        break
    case 4:
        get_hwvx_proto_world(offset_mid)
        break
    case 5:
        // get_hwvx_proto_collision(offset_mid)
        break
    case 6:
        // if (u32(o+48)) {
        //     console.log("???",u32(o+48),u32(o+60))
        // }
        // if (u32(o + 24) !== 16) {
        // get_hwvx_proto_texture_basic(offset_mid,offset_mid + u32(o + 24))
        // }
        break
    case 8:
        for (let i = 0; i < u32(o + 56); i++) {
            get_hwvx_proto_share(offset_mid + (i * 4))
        }
        if (g.file_name === 'HW_SHARE_PROTO.XPS') {
            let get_end = (u32(o + 40) * 1024) + u32(o + 44) + offset_mid
            get_hwvx_proto_share_end(get_end)
        }
        break
    default:
        console.log("?")
    }
    if (u32(o + 68)) {
        for (let i = 0; i < u32(o + 64); i++) {
            get_hwvx_proto_datapack_68(offset_mid + u32(o + 68) + (i * 44))
        }
    }

}
function get_hwvx_proto_share(o) {
    ß('p_model', o, 0)
    // ü(1, [u32, 0, u32, 4, u32, 8], o)
}

function get_hwvx_proto_share_end(o) {
    if (u32(o + 0) !== 1066432 || u32(o + 4) !== 96 || u32(o + 8) !== 1066448 || u32(o + 12) || u16(o + 16) || u16(o + 18) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28], o)
    ö(u32(o + 0), get_hwvx_proto_string)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_hwvx_proto_share_end_8)
    }

}

function get_hwvx_proto_share_end_8(o) {
    // ü(1, [u32, 0], o)
    ß('p_texture', o, 0)

}

function get_hwvx_proto_texture_anims(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_hwvx_proto_texture_anims_0)

}

function get_hwvx_proto_audio_list(o, f, afteroffsetlist, end_datapack, datapackoffset) {
    if (u16(o + 16) !== 4096 || u16(o + 18) !== 32767 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28], o)

    if (f) {
        let end_audio = u32(o) + u32(o + 4) + afteroffsetlist
        let hwvx_proto_datapack_72 = 0
        let hwvx_proto_datapack_76 = 0
        if (u32(datapackoffset + 72)) {
            hwvx_proto_datapack_72 = u32(datapackoffset + 72) + afteroffsetlist
        }
        if (u32(datapackoffset + 76)) {
            hwvx_proto_datapack_76 = u32(datapackoffset + 76) + afteroffsetlist
        }
        console.log(`end_audio: ${end_audio}  filepatchers:${end_datapack}'dif:', ${end_datapack - end_audio} 
        ,'72:',${hwvx_proto_datapack_72}, val ${u32(datapackoffset + 72)}, 72 - 76: ${hwvx_proto_datapack_72 - hwvx_proto_datapack_76}
         '76:',${hwvx_proto_datapack_76} val ${u32(datapackoffset + 76)}
                   `)
        // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28], o)
    }
}

function get_hwvx_proto_datapack_72(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, ], o)
}
function get_hwvx_proto_datapack_76(o) {
    if (u32(o + 0) !== 12 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_hwvx_proto_datapack_68(o) {
    if (u32(o + 36))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40], o)

    switch (u32(o + 8)) {
        //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17, 22, 24, 28, 31, 33, 51, 64, 68, 104, 162, 269
    case 0:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_4t0)
        break
    case 1:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_4t1)
        break
    case 3:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_4t3)
        break
    case 5:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_4t5)
        break
    case 6:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_4t6)
        break
    default:

        ß('p_offset', u32(o + 4), offset_mid)
        get_hwvx_proto_datapack_68_4trest(u32(o + 4) + offset_mid, u32(o + 8))
    }

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 12) + (i * 44), get_hwvx_proto_datapack_68_12)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 20) + (i * 24), get_hwvx_proto_datapack_68_20)
    }
    ö(u32(o + 24), get_hwvx_proto_datapack_68_24)

}
function get_hwvx_proto_datapack_68_4t0(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_datapack_68_4t1(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    ä(hwvx_proto_interface, u32(o + 0), get_hwvx_proto_interface)

}

function get_hwvx_proto_datapack_68_4t2(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ä(hwvx_proto_datapack_68_4t2_4, u32(o + 4), get_hwvx_proto_datapack_68_4t2_4)

}

function get_hwvx_proto_datapack_68_4t2_4(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//some 64 byte strucute in world
}

function get_hwvx_proto_datapack_68_4t3(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_datapack_68_4t5(o) {
    if (u32(o + 0) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    ö(u32(o + 4), get_hwvx_proto_datapack_68_4t5_4)

    switch (u32(o + 16)) {
    case 0:
        ö(u32(o + 12), get_hwvx_proto_datapack_68_4t5_12t0)
        break
    case 22:
        break
    default:
        if (u32(o + 12)) {
            console.log(o)
        }
    }

}

function get_hwvx_proto_datapack_68_4t5_4(o) {
    let check_val = o
    if (hwvx_proto_world_108.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_76.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_36_48_24.includes(check_val)) {
        return
    }
    console.log(o)

    /*
    seen:
        hwvx_proto_world_108
        hwvx_proto_world_76
        hwvx_proto_world_36_48_24
    */
}

function get_hwvx_proto_datapack_68_4t5_12t0(o) {
    let check_val = o
    if (hwvx_proto_world_12.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_36_48_24.includes(check_val)) {
        return
    }
    console.log(o)

}

function get_hwvx_proto_datapack_68_4t6(o) {
    if (u32(o + 0) !== 21 || u32(o + 4) !== 2 || u32(o + 8) !== 1 || u32(o + 12) !== 256 || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
    ä(hwvx_proto_world_12, u32(o + 12), get_hwvx_proto_world_12)

}
function get_hwvx_proto_datapack_68_4trest(o, a) {
    let end_length = (a * 4) + o
    let _1st_amnt = u32(o)
    let _1st_length = (_1st_amnt * 4) + 4 + o

    for (let i = 0; i < _1st_amnt; i++) {
        // get_hwvx_proto_datapack_68_4trest_1st(u32(o+4) + (i*4))
        ö(u32(o + 4 + (i * 4)), get_hwvx_proto_datapack_68_4trest_1st)
    }

    let _2nd_amnt = 0
    let _2nd_length = 0
    if (_1st_length < end_length) {
        _2nd_amnt = u32(_1st_length)
        _2nd_length = (_2nd_amnt * 4) + _1st_length + 4
    }

    o = _1st_length
    for (let i = 0; i < _2nd_amnt; i++) {
        ö(u32(o + 4 + (i * 4)), get_hwvx_proto_datapack_68_4trest_2nd)
        // ä(hwvx_proto_datapack_68_4trest_2nd, u32(o + 4) + (i*4), get_hwvx_proto_datapack_68_4trest_2nd)
    }

    // console.log(`a:${o} e: ${end_length} | _1st_amnt: ${_1st_amnt} / ${_1st_length}  _2nd_amnt: ${_2nd_amnt} / ${_2nd_length}`)
}

function get_hwvx_proto_datapack_68_4trest_1st(o) {
    let check_val = o
    if (hwvx_proto_world_36_48.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_36_48_8.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_36_48_24.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_36_36.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_108.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_12.includes(check_val)) {
        return
    }
    // console.log(o)
    // ä(hwvx_proto_datapack_68_4trest_1st, o - offset_mid, get_hwvx_proto_datapack_68_4trest_2nd)

}
function get_hwvx_proto_datapack_68_4trest_2nd(o) {
    let check_val = o
    if (hwvx_proto_world_12.includes(check_val)) {
        return
    }
}

function get_hwvx_proto_datapack_68_12(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    ö(u32(o + 4), get_hwvx_proto_datapack_68_12_4)

}

function get_hwvx_proto_datapack_68_12_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    ö(u32(o + 4), get_hwvx_proto_datapack_68_12_4_4)
    //duplicate found: get_hwvx_proto_datapack_68_12_4_4 -> get_hwvx_proto_world_76
    //duplicate found: get_hwvx_proto_datapack_68_12_4_4 -> get_hwvx_proto_world_36_48_24

    // ä(hwvx_proto_datapack_68_12_4_4, u32(o + 4), get_hwvx_proto_datapack_68_12_4_4)
    if (u32(o + 16) === 0) {
        ä(hwvx_proto_world_12, u32(o + 12), get_hwvx_proto_world_12)
    }

}

function get_hwvx_proto_datapack_68_12_4_4(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//get_hwvx_proto_world_36_48_24 -> get_hwvx_proto_datapack_68_12_4_4
}

function get_hwvx_proto_datapack_68_20(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20], o)
    switch (u32(o)) {
    case 0:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t0)
        break
    case 1:
        switch (u32(o + 8)) {
        case 12:
            ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t1t12)
            break
        case 13:
            ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t1t13)
            break
        case 16:
            ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t1t16)
            break
        default:
            console.log(o)
        }
        //12,13,16
        break
    case 2:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t2)
        break
    case 3:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t3)
        //9,7,8,27,13,10,11,6,12,16,15,17,5,4,14
        break

    case 4:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t4)
        //1 
        break
    case 5:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t5)
        //4,16,6,13
        break

    case 6:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t6)
        //2 | u32 | 8 | 8439752
        break

    case 7:
    case 16:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t7)
        //5 | u32 | 8 | 4031608
        break

    case 8:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t8)
        //3 | u32 | 8 | 5444168
        break

    case 9:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t9)
        //6 | u32 | 8 | 12295156
        break
    case 10:
        switch (u32(o + 8)) {
        case 10:
            ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t10t10)
            break
        case 20:
            ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t10t20)
            break
        default:
            console.log(o)
        }
        //10,20 | u32 | 8 | 8440248
        break
    case 12:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t12)
        //5,4,116 | u32 | 8 | 11768200
        break
    case 15:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t15)
        //5,1 | u32 | 8 | 7827760
        break
    case 17:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t17)
        //4,6,5,18,14,13,20,7 | u32 | 8 | 14362444
        break
    case 20:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t20)
        //3 | u32 | 8 | 5444976
        break
    case 21:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t21)
        //5 | u32 | 8 | 11862820
        break
    case 22:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t22)
        //11,5,8,6,7,27,17,10,18 | u32 | 8 | 12293724
        break
    case 24:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t24)
        // 5 | u32 | 8 | 12322588
        break
    case 26:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t26)
        // 4 | u32 | 8 | 12322672
        break
    case 31:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t31)
        // 2 | u32 | 8 | 11302804
        break
    case 32:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t32)
        // 3 | u32 | 8 | 4575776
        break
    case 34:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t34)
        // 5 | u32 | 8 | 4107280
        break
    case 36:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t36)
        //1 | u32 | 8 | 11869836
        break
    case 38:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t38)
        // 3 | u32 | 8 | 4107096
        break
    case 39:
        ö(u32(o + 4), get_hwvx_proto_datapack_68_20_4t39)
        // 1 | u32 | 8 | 5443840
        break
    }
}

function get_hwvx_proto_datapack_68_20_4t0(o) {
    let amt = u32(o + 4)

    for (let i = 0; i < amt; i++) {
        ä(hwvx_proto_world_108, u32(o + 8 + (i * 4)), get_hwvx_proto_world_108)
    }

}

function get_hwvx_proto_datapack_68_20_4t1t12(o) {
    if (u32(o + 0) !== 30 || u32(o + 32) || u32(o + 40) || u32(o + 44) !== 31)
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28, u32, 32, f32, 36, u32, 40, u32, 44, ], o)

    switch (u32(o + 4)) {
    case 1:
        ä(hwvx_proto_world_12, u32(o + 8), get_hwvx_proto_world_12)
        break
    case 2:
        ä(hwvx_proto_world_36_48_8, u32(o + 8), get_hwvx_proto_world_36_48_8)
        break
    case 6:
        ä(hwvx_proto_world_120_0, u32(o + 8), get_hwvx_proto_world_120_0)
        break
    }
    switch (u32(o + 24)) {
    case 1:
        ä(hwvx_proto_world_12, u32(o + 28), get_hwvx_proto_world_12)
        break
    case 2:
        ä(hwvx_proto_world_36_48_8, u32(o + 28), get_hwvx_proto_world_36_48_8)
        break
    case 6:
        ä(hwvx_proto_world_120_0, u32(o + 28), get_hwvx_proto_world_120_0)
        break
    }

}

function get_hwvx_proto_datapack_68_20_4t1t13(o) {
    if (u32(o + 0) !== 27 || u32(o + 36) || u32(o + 48) !== 31 || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    switch (u32(o + 8)) {
    case 1:
        ä(hwvx_proto_world_12, u32(o + 12), get_hwvx_proto_world_12)
        break
    case 2:
        ä(hwvx_proto_world_36_48_8, u32(o + 12), get_hwvx_proto_world_36_48_8)
        break
    case 6:
        ä(hwvx_proto_world_120_0, u32(o + 12), get_hwvx_proto_world_120_0)
        break
    }
    switch (u32(o + 28)) {
    case 1:
        ä(hwvx_proto_world_12, u32(o + 32), get_hwvx_proto_world_12)
        break
    case 2:
        ä(hwvx_proto_world_36_48_8, u32(o + 32), get_hwvx_proto_world_36_48_8)
        break
    case 6:
        ä(hwvx_proto_world_120_0, u32(o + 32), get_hwvx_proto_world_120_0)
        break
    }

}
function get_hwvx_proto_datapack_68_20_4t1t16(o) {
    if (u32(o + 0) !== 28 || u32(o + 36) || u32(o + 48) || u32(o + 56) || u32(o + 60) !== 31)
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, f32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, u32, 56, u32, 60, ], o)
    switch (u32(o + 20)) {
    case 1:
        ä(hwvx_proto_world_12, u32(o + 24), get_hwvx_proto_world_12)
        break
    case 2:
        ä(hwvx_proto_world_36_48_8, u32(o + 24), get_hwvx_proto_world_36_48_8)
        break
    case 6:
        ä(hwvx_proto_world_120_0, u32(o + 24), get_hwvx_proto_world_120_0)
        break
    }
    switch (u32(o + 40)) {
    case 1:
        ä(hwvx_proto_world_12, u32(o + 44), get_hwvx_proto_world_12)
        break
    case 2:
        ä(hwvx_proto_world_36_48_8, u32(o + 44), get_hwvx_proto_world_36_48_8)
        break
    case 6:
        ä(hwvx_proto_world_120_0, u32(o + 44), get_hwvx_proto_world_120_0)
        break
    }

}

function get_hwvx_proto_datapack_68_20_4t12(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    let amt = u32(o + 4)

    for (let i = 0; i < amt; i++) {
        ä(hwvx_proto_world_120_0, u32(o + 8 + (i * 4)), get_hwvx_proto_world_120_0)
    }
}

function get_hwvx_proto_datapack_68_20_4t17(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    let amt = u32(o + 4)

    for (let i = 0; i < amt; i++) {
        ä(hwvx_proto_world_12, u32(o + 8 + (i * 4)), get_hwvx_proto_world_12)
    }
}

function get_hwvx_proto_datapack_68_20_4t2(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    let amt = u32(o + 4)

    for (let i = 0; i < amt; i++) {
        ä(hwvx_proto_world_36_48_8, u32(o + 8 + (i * 4)), get_hwvx_proto_world_36_48_8)
    }

}

function get_hwvx_proto_datapack_68_20_4t4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ä(hwvx_proto_interface, u32(o + 0), get_hwvx_proto_interface)

}

function get_hwvx_proto_datapack_68_20_4t6(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_datapack_68_20_4t7(o) {
    if (u32(o + 4) !== 1 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ä(hwvx_proto_world_76, u32(o + 8), get_hwvx_proto_world_76)
}

function get_hwvx_proto_datapack_68_20_4t8(o) {
    if (u32(o + 8) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ä(hwvx_proto_world_76, u32(o + 12), get_hwvx_proto_world_76)

}

function get_hwvx_proto_datapack_68_20_4t9(o) {
    if (u32(o + 4) !== 6 || u32(o + 12) || u32(o + 16) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ä(hwvx_proto_world_20, u32(o + 20), get_hwvx_proto_world_20)
}

function get_hwvx_proto_datapack_68_20_4t10t10(o) {
    if (f32(o + 8) !== 1 || u32(o + 12) || f32(o + 16) !== 1 || u32(o + 20) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}
function get_hwvx_proto_datapack_68_20_4t10t20(o) {
    if (f32(o + 0) !== 1 || u32(o + 4) || f32(o + 8) !== 1 || u32(o + 12) || f32(o + 16) !== 1 || u32(o + 20) || u32(o + 24) !== 41 || u32(o + 32) !== 40 || u32(o + 36) !== 1 || u32(o + 40) || u32(o + 44) || u32(o + 48) !== 1 || f32(o + 52) !== 1 || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) !== 10)
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
}

function get_hwvx_proto_datapack_68_20_4t15(o) {
    // ü(1, [u32, 0, u32, 4], o)

    switch (u32(o)) {
    case 1:
        ä(hwvx_proto_world_12, u32(o + 4), get_hwvx_proto_world_12)
        break
    case 2:
        ä(hwvx_proto_world_36_48_8, u32(o + 4), get_hwvx_proto_world_36_48_8)
        break
    case 3:
        ä(hwvx_proto_world_36_48_24, u32(o + 4), get_hwvx_proto_world_36_48_24)
        break
    case 6:
        ä(hwvx_proto_world_120_0, u32(o + 4), get_hwvx_proto_world_120_0)
        break
    }

}

function get_hwvx_proto_datapack_68_20_4t20(o) {
    if (u32(o + 4) !== 60 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ä(hwvx_proto_text, u32(o + 8), get_hwvx_proto_text)

}

function get_hwvx_proto_datapack_68_20_4t21(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ä(hwvx_proto_world_52, u32(o + 4), get_hwvx_proto_world_52)
    ä(hwvx_proto_world_12, u32(o + 12), get_hwvx_proto_world_12)

}

function get_hwvx_proto_datapack_68_20_4t22(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    let amt = u32(o + 8)

    for (let i = 0; i < amt; i++) {
        ä(hwvx_proto_world_12, u32(o + 12 + (i * 4)), get_hwvx_proto_world_12)
    }

}

function get_hwvx_proto_datapack_68_20_4t24(o) {
    if (u32(o + 0) !== 36 || u32(o + 8) !== 1 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ä(hwvx_proto_world_36_48_24, u32(o + 4), get_hwvx_proto_world_36_48_24)
    ä(hwvx_proto_world_12, u32(o + 12), get_hwvx_proto_world_12)

}

function get_hwvx_proto_datapack_68_20_4t26(o) {
    if (u32(o + 4) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ä(hwvx_proto_world_76, u32(o + 8), get_hwvx_proto_world_76)

}

function get_hwvx_proto_datapack_68_20_4t31(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ä(hwvx_proto_interface, u32(o + 4), get_hwvx_proto_interface)

}

function get_hwvx_proto_datapack_68_20_4t32(o) {
    if (u32(o + 0) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_datapack_68_20_4t34(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_hwvx_proto_datapack_68_20_4t36(o) {
    if (u32(o + 0) !== 7 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_datapack_68_20_4t38(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_datapack_68_20_4t39(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_datapack_68_20_4t3(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    let amt = u32(o + 4)

    for (let i = 0; i < amt; i++) {
        ä(hwvx_proto_world_36_48_16, u32(o + 8 + (i * 4)), get_hwvx_proto_world_36_48_16)
    }

}

function get_hwvx_proto_datapack_68_20_4t5(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    let amt = u32(o + 4)

    for (let i = 0; i < amt; i++) {
        ä(hwvx_proto_world_36_48_24, u32(o + 8 + (i * 4)), get_hwvx_proto_world_36_48_24)
    }
}

function get_hwvx_proto_datapack_68_24(o) {
    if (u32(o + 0) !== 10 || u32(o + 8) !== 10 || u32(o + 12) || u8(o + 16) !== 255 || u8(o + 17) !== 255 || u8(o + 18) !== 255 || u8(o + 19) !== 255 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 4), get_hwvx_proto_datapack_68_24_4)

}

function get_hwvx_proto_datapack_68_24_4(o) {
    if (f32(o + 0) !== 1 || u32(o + 4) || f32(o + 8) !== 1 || u32(o + 12) || f32(o + 16) !== 1 || u32(o + 20) || u32(o + 24) !== 6 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}

function get_hwvx_proto_texture_basic(o, textureoffset) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    // if (o === textureoffset) {
    //     //ignore this
    //     return
    // }
    // console.log(o - textureoffset,'type',o)
    // ü(1, [u16, 0,u16, 2, u16, 4,u16, 6, u32, 8, u32, 12], o)

}

function get_hwvx_proto_texture(o) {
    ö(u32(o + 8), get_hwvx_proto_texture_8)

    // ü(1, [u16, 0,u16, 2, u16, 4,u16, 6, u32, 8, u32, 12], o)
}

function get_hwvx_proto_texture_8(o) {//texture data
}

function get_hwvx_proto_geo_datapack(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 32) || u32(o + 56) !== 1 || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76)) {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    }

    let list1 = u32(o + 8) * 8
    let list2 = u32(o + 40) * 8
    let list3 = u32(o + 28) * 8
    let list4 = u32(o + 4) * 4
    let padding = u32(o + 36)

    let indexpatchlistlength = list1 + list2 + list3 + list4 + padding

    if (g.console === 'gamecube') {
        indexpatchlistlength = divisible(indexpatchlistlength, 16)
    }
    offset_mid = indexpatchlistlength + o + 84
    // get_hwvx_proto_get_combined_geo_patch_list(o)
    globalThis.old_log_array = structuredClone(log_array)

    get_hwvx_proto_geo_basic(offset_mid, u32(o + 40))

}

function get_hwvx_proto_get_combined_patch_list(o, patch_offset) {
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
    patchlistoffset += u32(o + 28) * 8
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

function get_hwvx_proto_get_combined_geo_patch_list(o) {
    let patchlistoffset = o + 84
    log_array.p_texture.offset = patchlistoffset
    for (let i = 0; i < u32(o + 8); i++) {
        log_array.p_texture.array.push(u32(patchlistoffset + (i * 8)))
    }
    patchlistoffset += u32(o + 8) * 8
    log_array.p_animation.offset = patchlistoffset
    for (let i = 0; i < u32(o + 28); i++) {
        log_array.p_animation.array.push(u32(patchlistoffset + (i * 8)))
    }
    patchlistoffset += u32(o + 28) * 8
    log_array.p_model.offset = patchlistoffset
    for (let i = 0; i < u32(o + 40); i++) {
        log_array.p_model.array.push(u32(patchlistoffset + (i * 8)))
        log_array.p_model.array_type.push(u16(patchlistoffset + (i * 8) + 6))
    }
    patchlistoffset += u32(o + 40) * 8
    log_array.p_offset.offset = patchlistoffset
    for (let i = 0; i < u32(o + 4); i++) {
        log_array.p_offset.array.push(u32(patchlistoffset + (i * 4)))
    }

    let _2ndarray = []
    for (let patchoffset of log_array.p_offset.array) {
        _2ndarray.push(u32(patchoffset + offset_mid))
    }
    log_array.p_offset.pointers = _2ndarray.slice(0)
}
function get_hwvx_proto_world(o) {
    if (u32(o + 0) || u32(o + 12) !== 256 || u32(o + 24) || u32(o + 28) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 124) !== 160 || u32(o + 128) || u32(o + 132) !== 224 || u32(o + 136) || u32(o + 140) !== 192 || u32(o + 144) || u32(o + 148) || u32(o + 152))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, ], o)
    ö(u32(o + 4), get_hwvx_proto_world_4)
    // console.log(`[8]: ${u32(o+8)}  [32]: ${u32(o+32)} [48]: ${u32(o+48)} [104]: ${u32(o+104)}`)

    for (let i = 0; i < u32(o + 8); i++) {
        ä(hwvx_proto_world_12, u32(o + 12) + (i * 96), get_hwvx_proto_world_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ä(hwvx_proto_world_20, u32(o + 20) + (i * 20), get_hwvx_proto_world_20)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 64), get_hwvx_proto_world_36)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 64), get_hwvx_proto_world_44)
    }

    for (let i = 0; i < u32(o + 48); i++) {
        ä(hwvx_proto_world_52, u32(o + 52) + (i * 112), get_hwvx_proto_world_52)

    }
    for (let i = 0; i < u32(o + 72); i++) {
        ä(hwvx_proto_world_76, u32(o + 76) + (i * 4), get_hwvx_proto_world_76)
    }
    for (let i = 0; i < u32(o + 80); i++) {
        ä(hwvx_proto_world_76, u32(o + 84) + (i * 4), get_hwvx_proto_world_76)
    }
    for (let i = 0; i < u32(o + 88); i++) {
        ö(u32(o + 92) + (i * 8), get_hwvx_proto_world_92)
    }
    for (let i = 0; i < u32(o + 96); i++) {
        ö(u32(o + 100) + (i * 16), get_hwvx_proto_world_100)
    }
    for (let i = 0; i < u32(o + 104); i++) {
        ä(hwvx_proto_world_108, u32(o + 108) + (i * 48), get_hwvx_proto_world_108)
    }

    ö(u32(o + 116), get_hwvx_proto_world_116)
    ö(u32(o + 120), get_hwvx_proto_world_120)

    // ö(u32(o + 124), get_hwvx_proto_string)
    // ö(u32(o + 132), get_hwvx_proto_string)
    // ö(u32(o + 140), get_hwvx_proto_string)
    ö(u32(o + 124), get_hwvx_proto_world_124)
    ö(u32(o + 132), get_hwvx_proto_world_132)
    ö(u32(o + 140), get_hwvx_proto_world_140)
    // WORLDS_\*
    // WORLDS_\*
    // WORLDS_\*

    ö(u32(o + 156), get_hwvx_proto_world_settings)

}
function get_hwvx_proto_world_4(o) {
    if (u8(o + 12) !== 204 || u8(o + 13) !== 204 || u8(o + 14) !== 204 || u8(o + 15) !== 204 || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 16) + (i * 56), get_hwvx_proto_world_4_16)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 20) + (i * 4), get_hwvx_proto_world_4_20)
    }

}

function get_hwvx_proto_world_4_16(o) {
    if (u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_hwvx_proto_world_4_16_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_hwvx_proto_world_4_16_4)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 4), get_hwvx_proto_world_4_16_4)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 4), get_hwvx_proto_world_4_16_4)
    }
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 4), get_hwvx_proto_world_4_16_4)
    }

}

function get_hwvx_proto_world_4_16_4(o) {
    // ü(1, [u32, 0], o)
    ä(hwvx_proto_world_108, u32(o + 0), get_hwvx_proto_world_108)

}

function get_hwvx_proto_world_4_20(o) {
    // ü(1, [u32, 0], o)
}

function get_hwvx_proto_world_12(o) {
    if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u8(o + 28) !== 205 || u8(o + 29) !== 205 || u8(o + 30) !== 205 || u8(o + 31) !== 205 || u32(o + 36) || u32(o + 40) || u32(o + 84) || u32(o + 88))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)
    ä(hwvx_proto_world_idk, u32(o + 64), get_hwvx_proto_world_idk)
    ä(hwvx_proto_world_idk, u32(o + 68), get_hwvx_proto_world_idk)
    ä(hwvx_proto_world_idk, u32(o + 72), get_hwvx_proto_world_idk)
    ä(hwvx_proto_world_idk, u32(o + 76), get_hwvx_proto_world_idk)

}

function get_hwvx_proto_world_20(o) {
    if (u32(o + 16))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16], o)
    //0 not amount
    ä(hwvx_proto_model_anims_1, u32(o + 4), get_hwvx_proto_model_anims_1)
    ö(u32(o + 12), get_hwvx_proto_world_20_12)

}

function get_hwvx_proto_world_20_12(o) {
    if (u8(o + 4) || u8(o + 5) !== 1 || u8(o + 6) || u8(o + 7) !== 1 || f32(o + 8) !== 9999.900390625 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ß('p_model', o, 0)
    ä(hwvx_proto_car_link, u32(o + 16), get_hwvx_proto_car_link)

}

function get_hwvx_proto_world_36(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    for (let i = 0; i < u32(o + 24); i += 32) {
        ö(u32(o + 28) + i, get_hwvx_proto_world_36_28)
    }
    ä(hwvx_proto_world_36_36, u32(o + 36), get_hwvx_proto_world_36_36)
    ä(hwvx_proto_world_36_48, u32(o + 48), get_hwvx_proto_world_36_48)

}

function get_hwvx_proto_world_36_28(o) {
    if (u8(o + 17) !== 205 || u8(o + 20) !== 205 || u8(o + 21) !== 205 || u8(o + 22) !== 205 || u8(o + 23) !== 205 || u8(o + 24) !== 205 || u8(o + 25) !== 205 || u8(o + 26) !== 205 || u8(o + 27) !== 205 || u8(o + 28) !== 205 || u8(o + 29) !== 205 || u8(o + 30) !== 205 || u8(o + 31) !== 205)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
}
function get_hwvx_proto_world_36_36(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_world_36_48(o) {
    if (u32(o + 0) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ä(hwvx_proto_world_36_48_8, u32(o + 8) + (i * 64), get_hwvx_proto_world_36_48_8)
    }

    for (let i = 0; i < u32(o + 12); i++) {
        ä(hwvx_proto_world_36_48_16, u32(o + 16) + (i * 64), get_hwvx_proto_world_36_48_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ä(hwvx_proto_world_36_48_24, u32(o + 24) + (i * 64), get_hwvx_proto_world_36_48_24)

    }

}

function get_hwvx_proto_world_36_48_8(o) {
    if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u32(o + 44) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ä(hwvx_proto_world_model_related, u32(o + 36), get_hwvx_proto_world_model_related)

}

function get_hwvx_proto_world_36_48_16(o) {
    if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u32(o + 40) || u32(o + 48) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
    ä(hwvx_proto_strange, u32(o + 36), get_hwvx_proto_strange)

}
function get_hwvx_proto_world_36_48_24(o) {
    if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u32(o + 28) || f32(o + 32) !== 500 || u32(o + 36) || u32(o + 44) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)
}
function get_hwvx_proto_world_44(o) {
    // if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u32(o + 24) || u32(o + 28) !== 1 || u32(o + 32) !== 1 || u32(o + 44) || f32(o + 48) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, f32, 36, f32, 40, u32, 44, f32, 48, u32, 52, u32, 56, u32, 60], o)
    ä(hwvx_proto_sound_section, u32(o + 20), get_hwvx_proto_sound_section)

}

function get_hwvx_proto_world_52(o) {
    // if (u32(o + 12) || u32(o + 28) || u32(o + 44) || f32(o + 60) !== 1 || u32(o + 68) || u32(o + 72) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, ], o)

    switch (u32(o + 80)) {
    case 0:
        ä(hwvx_proto_world_52, u32(o + 88), get_hwvx_proto_world_52)
        break
    case 1:
        ö(u32(o + 88), get_hwvx_proto_world_52_88t1)
        break
    default:
        if (u32(o + 88)) {
            console.log(o)
        }
    }

}

function get_hwvx_proto_world_52_88t1(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_world_76(o) {
    // ü(1, [u32, 0], o)
    ä(hwvx_proto_world_small_section, u32(o + 0), get_hwvx_proto_world_small_section)

}

function get_hwvx_proto_world_84(o) {
    ü(1, [u32, 0], o) // ML ???
    ä(hwvx_proto_world_small_section, u32(o + 0), get_hwvx_proto_world_small_section)

}

function get_hwvx_proto_world_92(o) {
    // if (u32(o + 0))
        ü(1, [u32, 0, u32, 4], o)
    ö(u32(o + 4), get_hwvx_proto_world_text_link)

}

function get_hwvx_proto_world_100(o) {
    // if (u32(o + 8) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ä(hwvx_proto_world_100_4, u32(o + 4), get_hwvx_proto_world_100_4)

}

function get_hwvx_proto_world_100_4(o) {
    // if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 12), get_hwvx_proto_world_100_4_4)
    }

}

function get_hwvx_proto_world_100_4_4(o) {
    // if (u8(o + 3) !== 255)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)

}

function get_hwvx_proto_world_108(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31, f32, 32, f32, 36, u32, 40, u32, 44, ], o)

    ö(u32(o + 40), get_hwvx_proto_world_108_40)

    switch (u32(o + 12)) {
    case 1:
        ö(u32(o + 44), get_hwvx_proto_world_108_44t1)
        break
    case 2:
        ö(u32(o + 44), get_hwvx_proto_world_108_44t2)
        break
    case 3:
        ö(u32(o + 44), get_hwvx_proto_world_108_44t3)
        break
    case 6:
        ä(hwvx_proto_world_108_44t6, u32(o + 44), get_hwvx_proto_world_108_44t6)
        break
    default:
        if (u32(o + 44)) {
            console.log(o)
        }
    }

}
function get_hwvx_proto_world_108_40(o) {
    // if (u8(o + 17) !== 205 || u8(o + 20) !== 205 || u8(o + 21) !== 205 || u8(o + 22) !== 205 || u8(o + 23) !== 205 || u8(o + 24) !== 205 || u8(o + 25) !== 205 || u8(o + 26) !== 205 || u8(o + 27) !== 205 || u8(o + 28) !== 205 || u8(o + 29) !== 205 || u8(o + 30) !== 205 || u8(o + 31) !== 205 || u8(o + 49) !== 205 || u8(o + 52) !== 205 || u8(o + 53) !== 205 || u8(o + 54) !== 205 || u8(o + 55) !== 205 || u8(o + 56) !== 205 || u8(o + 57) !== 205 || u8(o + 58) !== 205 || u8(o + 59) !== 205 || u8(o + 60) !== 205 || u8(o + 61) !== 205 || u8(o + 62) !== 205 || u8(o + 63) !== 205 || u8(o + 81) !== 205 || u8(o + 84) !== 205 || u8(o + 85) !== 205 || u8(o + 86) !== 205 || u8(o + 87) !== 205 || u8(o + 88) !== 205 || u8(o + 89) !== 205 || u8(o + 90) !== 205 || u8(o + 91) !== 205 || u8(o + 92) !== 205 || u8(o + 93) !== 205 || u8(o + 94) !== 205 || u8(o + 95) !== 205 || u8(o + 113) !== 205 || u8(o + 116) !== 205 || u8(o + 117) !== 205 || u8(o + 118) !== 205 || u8(o + 119) !== 205 || u8(o + 120) !== 205 || u8(o + 121) !== 205 || u8(o + 122) !== 205 || u8(o + 123) !== 205 || u8(o + 124) !== 205 || u8(o + 125) !== 205 || u8(o + 126) !== 205 || u8(o + 127) !== 205 || u8(o + 145) !== 205 || u8(o + 148) !== 205 || u8(o + 149) !== 205 || u8(o + 150) !== 205 || u8(o + 151) !== 205 || u8(o + 152) !== 205 || u8(o + 153) !== 205 || u8(o + 154) !== 205 || u8(o + 155) !== 205 || u8(o + 156) !== 205 || u8(o + 157) !== 205 || u8(o + 158) !== 205 || u8(o + 159) !== 205 || u8(o + 177) !== 205 || u8(o + 178) !== 205 || u8(o + 179) !== 205 || u8(o + 180) !== 205 || u8(o + 181) !== 205 || u8(o + 182) !== 205 || u8(o + 183) !== 205 || u8(o + 184) !== 205 || u8(o + 185) !== 205 || u8(o + 186) !== 205 || u8(o + 187) !== 205 || u8(o + 188) !== 205 || u8(o + 189) !== 205 || u8(o + 190) !== 205 || u8(o + 191) !== 205 || u8(o + 209) !== 205 || u8(o + 212) !== 205 || u8(o + 213) !== 205 || u8(o + 214) !== 205 || u8(o + 215) !== 205 || u8(o + 216) !== 205 || u8(o + 217) !== 205 || u8(o + 218) !== 205 || u8(o + 219) !== 205 || u8(o + 220) !== 205 || u8(o + 221) !== 205 || u8(o + 222) !== 205 || u8(o + 223) !== 205 || u8(o + 241) !== 205 || u8(o + 242) !== 205 || u8(o + 243) !== 205 || u8(o + 244) !== 205 || u8(o + 245) !== 205 || u8(o + 246) !== 205 || u8(o + 247) !== 205 || u8(o + 248) !== 205 || u8(o + 249) !== 205 || u8(o + 250) !== 205 || u8(o + 251) !== 205 || u8(o + 252) !== 205 || u8(o + 253) !== 205 || u8(o + 254) !== 205 || u8(o + 255) !== 205 || u8(o + 273) !== 205 || u8(o + 276) !== 205 || u8(o + 277) !== 205 || u8(o + 278) !== 205 || u8(o + 279) !== 205 || u8(o + 280) !== 205 || u8(o + 281) !== 205 || u8(o + 282) !== 205 || u8(o + 283) !== 205 || u8(o + 284) !== 205 || u8(o + 285) !== 205 || u8(o + 286) !== 205 || u8(o + 287) !== 205 || u8(o + 305) !== 205 || u8(o + 306) !== 205 || u8(o + 307) !== 205 || u8(o + 308) !== 205 || u8(o + 309) !== 205 || u8(o + 310) !== 205 || u8(o + 311) !== 205 || u8(o + 312) !== 205 || u8(o + 313) !== 205 || u8(o + 314) !== 205 || u8(o + 315) !== 205 || u8(o + 316) !== 205 || u8(o + 317) !== 205 || u8(o + 318) !== 205 || u8(o + 319) !== 205 || u8(o + 337) !== 205 || u8(o + 340) !== 205 || u8(o + 341) !== 205 || u8(o + 342) !== 205 || u8(o + 343) !== 205 || u8(o + 344) !== 205 || u8(o + 345) !== 205 || u8(o + 346) !== 205 || u8(o + 347) !== 205 || u8(o + 348) !== 205 || u8(o + 349) !== 205 || u8(o + 350) !== 205 || u8(o + 351) !== 205 || u8(o + 368) || u8(o + 369) !== 205 || u8(o + 370) !== 205 || u8(o + 371) !== 205 || u8(o + 372) !== 205 || u8(o + 373) !== 205 || u8(o + 374) !== 205 || u8(o + 375) !== 205 || u8(o + 376) !== 205 || u8(o + 377) !== 205 || u8(o + 378) !== 205 || u8(o + 379) !== 205 || u8(o + 380) !== 205 || u8(o + 381) !== 205 || u8(o + 382) !== 205 || u8(o + 383) !== 205)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, f32, 32, f32, 36, f32, 40, f32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u8, 56, u8, 57, u8, 58, u8, 59, u8, 60, u8, 61, u8, 62, u8, 63, f32, 64, f32, 68, f32, 72, f32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, f32, 96, f32, 100, f32, 104, f32, 108, u8, 112, u8, 113, u8, 114, u8, 115, u8, 116, u8, 117, u8, 118, u8, 119, u8, 120, u8, 121, u8, 122, u8, 123, u8, 124, u8, 125, u8, 126, u8, 127, f32, 128, f32, 132, f32, 136, f32, 140, u8, 144, u8, 145, u8, 146, u8, 147, u8, 148, u8, 149, u8, 150, u8, 151, u8, 152, u8, 153, u8, 154, u8, 155, u8, 156, u8, 157, u8, 158, u8, 159, f32, 160, f32, 164, f32, 168, f32, 172, u8, 176, u8, 177, u8, 178, u8, 179, u8, 180, u8, 181, u8, 182, u8, 183, u8, 184, u8, 185, u8, 186, u8, 187, u8, 188, u8, 189, u8, 190, u8, 191, f32, 192, f32, 196, f32, 200, f32, 204, u8, 208, u8, 209, u8, 210, u8, 211, u8, 212, u8, 213, u8, 214, u8, 215, u8, 216, u8, 217, u8, 218, u8, 219, u8, 220, u8, 221, u8, 222, u8, 223, f32, 224, f32, 228, f32, 232, f32, 236, u8, 240, u8, 241, u8, 242, u8, 243, u8, 244, u8, 245, u8, 246, u8, 247, u8, 248, u8, 249, u8, 250, u8, 251, u8, 252, u8, 253, u8, 254, u8, 255, f32, 256, f32, 260, f32, 264, f32, 268, u8, 272, u8, 273, u8, 274, u8, 275, u8, 276, u8, 277, u8, 278, u8, 279, u8, 280, u8, 281, u8, 282, u8, 283, u8, 284, u8, 285, u8, 286, u8, 287, f32, 288, f32, 292, f32, 296, f32, 300, u8, 304, u8, 305, u8, 306, u8, 307, u8, 308, u8, 309, u8, 310, u8, 311, u8, 312, u8, 313, u8, 314, u8, 315, u8, 316, u8, 317, u8, 318, u8, 319, f32, 320, f32, 324, f32, 328, f32, 332, u8, 336, u8, 337, u8, 338, u8, 339, u8, 340, u8, 341, u8, 342, u8, 343, u8, 344, u8, 345, u8, 346, u8, 347, u8, 348, u8, 349, u8, 350, u8, 351, f32, 352, f32, 356, f32, 360, f32, 364, u8, 368, u8, 369, u8, 370, u8, 371, u8, 372, u8, 373, u8, 374, u8, 375, u8, 376, u8, 377, u8, 378, u8, 379, u8, 380, u8, 381, u8, 382, u8, 383, ], o)
}
function get_hwvx_proto_world_108_44t1(o) {
    // if (u32(o + 8) || u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_hwvx_proto_world_108_44t2(o) {
    // if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_world_108_44t3(o) {
    // if (f32(o + 0) !== 100 || f32(o + 4) !== 100 || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_world_108_44t6(o) {
    if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u8(o + 19) !== 255 || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, ], o)
}

function get_hwvx_proto_world_116(o) {
    // if (f32(o + 0) !== 2034.0966796875 || f32(o + 4) !== -87.50000762939453 || f32(o + 8) !== 3475.563720703125 || u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u32(o + 16) !== 4577 || u32(o + 20) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_hwvx_proto_world_120(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ä(hwvx_proto_world_120_0, u32(o + 0) + (i * 112), get_hwvx_proto_world_120_0)

    }

}

function get_hwvx_proto_world_120_0(o) {
    if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u8(o + 84) || u8(o + 85) !== 128 || u8(o + 86) !== 255 || u8(o + 87) !== 255 || u32(o + 88) || u32(o + 92) || u32(o + 104) || u32(o + 108))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, f32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u8, 56, u8, 57, u8, 58, u8, 59, u8, 60, u8, 61, u8, 62, u8, 63, f32, 64, u32, 68, u32, 72, f32, 76, u32, 80, u8, 84, u8, 85, u8, 86, u8, 87, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)

}

function get_hwvx_proto_world_124(o) {
        // ü(1, [u32, 0, f32, 4, f32, 8, f32, 12], o)
}
function get_hwvx_proto_world_132(o) {
        // ü(1, [u32, 0, f32, 4, f32, 8, f32, 12], o)
}
function get_hwvx_proto_world_140(o) {
        // ü(1, [u32, 0, f32, 4, f32, 8, f32, 12], o)
}

function get_hwvx_proto_collision(o) {
    // if (u32(o + 12) || u32(o + 28) || u32(o + 36) !== 13)
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, f32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)

    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 32) + (i * 80), get_hwvx_proto_collision_32)
    }
    let collision_amount = u32(o + 52) * u32(o + 56) * u32(o + 60)
    for (let i = 0; i < collision_amount; i++) {
        ö(u32(o + 64) + (i * 4), get_hwvx_proto_collision_64)
    }
    for (let i = 0; i < u32(o + 72); i++) {
        ö(u32(o + 76) + (i * 32), get_hwvx_proto_collision_76)
    }
    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 48), get_hwvx_proto_collision_84)
    }
    ä(hwvx_proto_collision_link, u32(o + 92), get_hwvx_proto_collision_link)

}

function get_hwvx_proto_collision_32(o) {
    if (u32(o + 52) || u32(o + 72) || u32(o + 76))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    if (u32(o + 48)) {
        for (let i = 0; i < u32(o + 60); i++) {
            ä(hwvx_proto_collision_32_68, u32(o + 48) + (i * 32), get_hwvx_proto_collision_32_68)
        }
    }

    if (u32(o + 56)) {
        for (let i = 0; i < u32(o + 60); i++) {
            ö(u32(o + 56) + (i * 4), get_hwvx_proto_collision_32_56)
        }
    }
    ö(u32(o + 68), get_hwvx_proto_collision_32_688)
    // console.log(u32(o+64))
    // ä(hwvx_proto_collision_32_68, u32(o + 68), get_hwvx_proto_collision_32_68)

}

function get_hwvx_proto_collision_32_688(o) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
}

function get_hwvx_proto_collision_32_56(o) {// ü(1, [u32, 0], o)
}

function get_hwvx_proto_collision_32_68(o) {// if (u8(o + 19))
//     ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
}

function get_hwvx_proto_collision_64(o) {// ü(1, [u32, 0], o)
}
function get_hwvx_proto_collision_76(o) {
    if (u32(o + 20) !== 3 || u32(o + 24))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    ö(u32(o + 16), get_hwvx_proto_collision_76_16)

}

function get_hwvx_proto_collision_76_16(o) {
    if (f32(o + 12) !== 1 || f32(o + 28) !== 2 || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, u32, 44, ], o)
}

function get_hwvx_proto_collision_84(o) {
    if (u32(o + 12) || u32(o + 28) || u8(o + 32) !== 205 || u8(o + 33) !== 205 || u8(o + 34) !== 205 || u8(o + 35) !== 205 || u32(o + 36) || u8(o + 40) !== 205 || u8(o + 41) !== 205 || u8(o + 42) !== 205 || u8(o + 43) !== 205 || u8(o + 44) !== 205 || u8(o + 45) !== 205 || u8(o + 46) !== 205 || u8(o + 47) !== 205)
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47], o)
}
function get_hwvx_proto_collision_link(o) {
    // if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_hwvx_proto_collision_settings)
    ö(u32(o + 4), get_hwvx_proto_collision_settings)
}

function get_hwvx_proto_collision_settings(o) {
    // if (f32(o + 4) !== 5 || f32(o + 32) !== 1 || f32(o + 36) !== 1 || u32(o + 40) || u32(o + 44) || u32(o + 56) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)

    ä(hwvx_proto_unknown, u32(o + 48), get_hwvx_proto_unknown)
    ä(hwvx_proto_unknown_thing, u32(o + 52), get_hwvx_proto_unknown_thing)
    ä(hwvx_proto_sound_section, u32(o + 60), get_hwvx_proto_sound_section)
    ä(hwvx_proto_unknown, u32(o + 64), get_hwvx_proto_unknown)
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 4), get_hwvx_proto_collision_settings_72)
    }
    for (let i = 0; i < u32(o + 76); i++) {
        ö(u32(o + 80) + (i * 4), get_hwvx_proto_collision_settings_72)
    }

}

function get_hwvx_proto_collision_settings_72(o) {
    // ü(1, [u32, 0], o)
    ä(hwvx_proto_unknown, u32(o + 0), get_hwvx_proto_unknown)

}

function get_hwvx_proto_geo_basic(o, geo_model_amt) {
    /* ü(1, [u32, 0, u32, 4], o) */

    for (let i = 0; i < geo_model_amt; i++) {
        ö(u32(o) + (i * 12), get_hwvx_proto_geo_basic_0)
    }
    ö(u32(o + 4), get_hwvx_proto_geo_basic_4)

}

function get_hwvx_proto_basic(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 16 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_hwvx_proto_basic_4)

}

function get_hwvx_proto_basic_4(o) {
    // ü(1, [u32, 0, u32, 4], o)
    switch (g.type) {
    case 0:
        ö(u32(o), get_hwvx_proto_car)
        break
    case 1:
        ä(hwvx_proto_interface, u32(o), get_hwvx_proto_interface)
        break
    case 2:
        ö(u32(o), get_hwvx_proto_item)
        break
    case 3:
        ö(u32(o), get_hwvx_proto_link)
        break
    case 9:
        ä(hwvx_proto_sound_controls, u32(o), get_hwvx_proto_sound_controls)
        break
    default:
        if (u32(o))
            console.log("?")

    }

}

function get_hwvx_proto_car(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 355 || u32(o + 20) !== 600 || u32(o + 24) !== 1 || f32(o + 40) !== 1000 || f32(o + 48) !== 1.25 || f32(o + 56) !== 1 || u32(o + 64) || u8(o + 68) !== 2 || u8(o + 69) || u8(o + 70) !== 204 || u8(o + 71) !== 204 || u8(o + 80) !== 3 || u8(o + 81) || u8(o + 82) !== 204 || u8(o + 83) !== 204 || u32(o + 88) || u32(o + 100) || u32(o + 104) || u32(o + 112) || u32(o + 116) || u32(o + 168) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) || u32(o + 204) || u32(o + 208) !== 4 || u32(o + 216) !== 5 || u32(o + 224) !== 10 || u32(o + 232) !== 5 || u32(o + 248) !== 1 || u32(o + 256) !== 1 || u32(o + 272) || u32(o + 276) || u32(o + 280) !== 5)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u32, 72, u32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, ], o)
    ß('p_texture', o, 68)
    ß('p_texture', o, 80)
    ß('p_model', o, 84)

    ä(hwvx_proto_model_anims_1, u32(o + 72), get_hwvx_proto_model_anims_1)
    ä(hwvx_proto_model_anims_2, u32(o + 76), get_hwvx_proto_model_anims_2)

    ä(hwvx_proto_sound_section, u32(o + 92), get_hwvx_proto_sound_section)
    ä(hwvx_proto_sound_section, u32(o + 96), get_hwvx_proto_sound_section)
    ö(u32(o + 108), get_hwvx_proto_car_108)
    ö(u32(o + 120), get_hwvx_proto_car_120)
    ö(u32(o + 124), get_hwvx_proto_car_124)
    ö(u32(o + 128), get_hwvx_proto_car_128)
    ö(u32(o + 132), get_hwvx_proto_car_132)
    ö(u32(o + 136), get_hwvx_proto_car_136)
    ö(u32(o + 140), get_hwvx_proto_car_140)
    ä(hwvx_proto_car_related, u32(o + 144), get_hwvx_proto_car_related)
    ä(hwvx_proto_car_related, u32(o + 148), get_hwvx_proto_car_related)
    ä(hwvx_proto_car_related, u32(o + 152), get_hwvx_proto_car_related)
    ä(hwvx_proto_car_related, u32(o + 156), get_hwvx_proto_car_related)
    ö(u32(o + 160), get_hwvx_proto_car_link)
    ö(u32(o + 164), get_hwvx_proto_car_164)
    ö(u32(o + 172), get_hwvx_proto_car_172)
    for (let i = 0; i < u32(o + 208); i++) {
        ö(u32(o + 212) + (i * 80), get_hwvx_proto_car_212)
    }
    for (let i = 0; i < u32(o + 216); i++) {
        ö(u32(o + 220) + (i * 8), get_hwvx_proto_car_220)
    }
    for (let i = 0; i < u32(o + 224); i++) {
        ö(u32(o + 228) + (i * 12), get_hwvx_proto_car_228)
    }
    for (let i = 0; i < u32(o + 232); i++) {
        ö(u32(o + 236) + (i * 12), get_hwvx_proto_car_228)
    }
    for (let i = 0; i < u32(o + 240); i++) {
        ö(u32(o + 244) + (i * 12), get_hwvx_proto_car_228)
    }
    ö(u32(o + 252), get_hwvx_proto_car_252)
    ö(u32(o + 260), get_hwvx_proto_car_260)
    ö(u32(o + 268), get_hwvx_proto_car_268)
    for (let i = 0; i < u32(o + 280); i++) {
        ö(u32(o + 284) + (i * 8), get_hwvx_proto_car_220)
    }

}

function get_hwvx_proto_car_108(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_car_120(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, ], o)
    ö(u32(o + 16), get_hwvx_proto_model_link)

}

function get_hwvx_proto_model_link(o) {
    if (u8(o + 29) !== 1 || u8(o + 30) || u32(o + 40) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ö(u32(o + 4), get_hwvx_proto_model_link_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 8), get_hwvx_proto_model_link_12)
    }
    ä(hwvx_proto_model_anims_1, u32(o + 16), get_hwvx_proto_model_anims_1)
    ä(hwvx_proto_model_anims_2, u32(o + 20), get_hwvx_proto_model_anims_2)

    ö(u32(o + 32), get_hwvx_proto_model_link_32)
    ö(u32(o + 36), get_hwvx_proto_model_link_36)
    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 32), get_hwvx_proto_mysterious)
    }
    ö(u32(o + 52), get_hwvx_proto_model_link_52)
    ö(u32(o + 56), get_hwvx_proto_model_link_56)

}
function get_hwvx_proto_model_link_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ß('p_model', o, 0)

}

function get_hwvx_proto_model_link_12(o) {
    // ü(1, [u32, 0, u32, 4], o)
    ß('p_model', o, 0)

}
function get_hwvx_proto_model_anims_1(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 3)
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u8, 52, u8, 53, u8, 54, u8, 55, u8, 56, u8, 57, u8, 58, u8, 59, u8, 60, u8, 61, u8, 62, u8, 63, ], o)

    ö(u32(o + 24), get_hwvx_proto_model_anims_1_24)
    ö(u32(o + 28), get_hwvx_proto_model_anims_1_28)
    ö(u32(o + 32), get_hwvx_proto_model_anims_1_32)
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 36) + (i * 16), get_hwvx_proto_model_anims_1_36)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 44) + (i * 28), get_hwvx_proto_model_anims_1_44)
    }

}

function get_hwvx_proto_model_anims_1_24(o) {// if (u8(o + 0) || u8(o + 6) || u8(o + 7))
//     ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7], o)
// ü(3, [u8, 0], o)
}
function get_hwvx_proto_model_anims_1_28(o) {// if (u32(o + 0) !== 8323199 || u32(o + 4) !== 8323199 || u32(o + 8) !== 8323199 || u8(o + 12) !== 127 || u8(o + 13))
// ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, ], o)
// console.log(get_string(o + 14, 0, false))

}
function get_hwvx_proto_model_anims_1_32(o) {// if (f32(o + 0) !== -10 || f32(o + 4) !== 10)
// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, ], o)

}
function get_hwvx_proto_model_anims_1_36(o) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12], o)
}
function get_hwvx_proto_model_anims_1_44(o) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20], o)
}

function get_hwvx_proto_model_link_32(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_model_link_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_model_link_52(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}
function get_hwvx_proto_model_link_56(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 28), get_hwvx_proto_model_link_56_4)
    }
    ä(hwvx_proto_model_anims_2, u32(o + 8), get_hwvx_proto_model_anims_2)

}

function get_hwvx_proto_model_link_56_4(o) {
    if (u8(o + 1) !== 1 || u8(o + 3) || u32(o + 20) || u32(o + 24))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)
    ß('p_model', o, 8)
    ö(u32(o + 12), get_hwvx_proto_model_link_56_4_12)
    ö(u32(o + 16), get_hwvx_proto_model_link_56_4_16)

}

function get_hwvx_proto_model_link_56_4_12(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, ], o)
}
function get_hwvx_proto_model_link_56_4_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_model_anims_2(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 16) + (i * 32), get_hwvx_proto_model_anims_2_16)
    }

}

function get_hwvx_proto_model_anims_2_16(o) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)
}

function get_hwvx_proto_car_124(o) {
    if (u32(o + 8) || f32(o + 12) !== 100 || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_hwvx_proto_car_128(o) {
    if (f32(o + 12) !== 1 || u32(o + 16) !== 200 || u32(o + 24) || u32(o + 28) || f32(o + 32) !== 5000 || f32(o + 36) !== 0.20000000298023224 || f32(o + 40) !== 0.30000001192092896 || f32(o + 44) !== 0.0010000000474974513 || u32(o + 48) || f32(o + 64) !== 1 || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || f32(o + 100) !== 1 || f32(o + 104) !== 1 || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) !== 6 || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, f32, 92, u32, 96, f32, 100, f32, 104, f32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, ], o)
    ä(hwvx_proto_model_anims_2, u32(o + 96), get_hwvx_proto_model_anims_2)

    for (let i = 0; i < u32(o + 128); i++) {
        ö(u32(o + 132) + (i * 12), get_hwvx_proto_car_128_132)
    }
    for (let i = 0; i < u32(o + 136); i++) {
        ö(u32(o + 140) + (i * 12), get_hwvx_proto_car_128_132)
    }

}
function get_hwvx_proto_car_128_132(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    switch (u32(o)) {
    case 1:
        ö(u32(o + 4), get_hwvx_proto_car_128_132_4t1)
        break
    case 2:
        ö(u32(o + 4), get_hwvx_proto_car_128_132_4t2)
        break
    case 3:
        ö(u32(o + 4), get_hwvx_proto_car_128_132_4t3)
        break
    case 4:
        ö(u32(o + 4), get_hwvx_proto_car_128_132_4t4)
        break
    default:
        console.log("?")
    }

}

function get_hwvx_proto_car_128_132_4t1(o) {
    if (f32(o + 4) !== 230 || f32(o + 8) !== 50 || f32(o + 12) !== 3 || f32(o + 16) !== 6 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, f32, 32, f32, 36, f32, 40, f32, 44, ], o)
}
function get_hwvx_proto_car_128_132_4t2(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || f32(o + 16) !== 0.13699999451637268 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_hwvx_proto_car_128_132_4t3(o) {
    if (u32(o + 0) || f32(o + 4) !== 3 || u32(o + 8) || u32(o + 12) || f32(o + 16) !== 105 || f32(o + 20) !== 21 || f32(o + 24) !== 7 || f32(o + 28) !== 0.5)
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, ], o)
}
function get_hwvx_proto_car_128_132_4t4(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_hwvx_proto_car_132(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 48) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    ä(hwvx_proto_interface, u32(o + 16), get_hwvx_proto_interface)
    ä(hwvx_proto_interface, u32(o + 24), get_hwvx_proto_interface)
    ä(hwvx_proto_interface, u32(o + 28), get_hwvx_proto_interface)
    ö(u32(o + 44), get_hwvx_proto_car_132_44)

}

function get_hwvx_proto_car_132_44(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_car_136(o) {
    if (u32(o + 0) || f32(o + 4) !== 2 || u32(o + 12) || u32(o + 16) || f32(o + 24) !== 1 || f32(o + 28) !== 0.25 || f32(o + 32) !== 1 || f32(o + 36) !== 600 || f32(o + 44) !== 2000 || u32(o + 48) !== 200 || f32(o + 56) !== 1000 || u32(o + 64) || u32(o + 68) || f32(o + 72) !== 1 || u32(o + 76))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, f32, 72, u32, 76, ], o)
}
function get_hwvx_proto_car_140(o) {
    if (f32(o + 12) !== 400 || f32(o + 16) !== 0.5 || f32(o + 20) !== 20 || f32(o + 32) !== 1 || f32(o + 36) !== 5 || u32(o + 40) !== 100 || f32(o + 44) !== 10 || f32(o + 48) !== 650 || u32(o + 52) !== 9 || u32(o + 68) || u32(o + 72) || u32(o + 76) !== 1 || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, f32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, ], o)

    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 4), get_hwvx_proto_car_140_56)
    }
    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 4), get_hwvx_proto_car_140_64)
    }
    for (let i = 0; i < u32(o + 76); i++) {
        ö(u32(o + 80) + (i * 4), get_hwvx_proto_car_140_56)
    }

}

function get_hwvx_proto_car_140_56(o) {
    ä(hwvx_proto_unknown, u32(o + 0), get_hwvx_proto_unknown)
}

function get_hwvx_proto_car_140_64(o) {
    ä(hwvx_proto_text, u32(o + 0), get_hwvx_proto_text)

}

function get_hwvx_proto_car_related(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 1 || f32(o + 8) !== 1 || f32(o + 16) !== 1 || f32(o + 20) !== 1 || u32(o + 24) || u32(o + 28) || u8(o + 32) !== 255 || u8(o + 33) !== 255 || u8(o + 34) || u8(o + 35) || u8(o + 36) !== 3 || u8(o + 37) || u8(o + 38) !== 1 || u8(o + 39) !== 100 || u32(o + 40) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 12), get_hwvx_proto_car_related_48)
    }

}

function get_hwvx_proto_car_related_48(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)
    ö(u32(o + 0), get_hwvx_proto_car_related_48_0)

}

function get_hwvx_proto_car_related_48_0(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 28) || u32(o + 44) || u32(o + 48) || u32(o + 56) || u32(o + 60) || u32(o + 64) !== 300 || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 120) || u32(o + 124))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, ], o)
    ö(u32(o + 116), get_hwvx_proto_string)

}

function get_hwvx_proto_car_link(o) {
    if (u32(o + 12) || u32(o + 72) || u32(o + 76))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, f32, 32, f32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    ä(hwvx_proto_car_link_48, u32(o + 48), get_hwvx_proto_car_link_48)

    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 4), get_hwvx_proto_car_link_56)
    }
    ö(u32(o + 64), get_hwvx_proto_car_link_64)
    ö(u32(o + 68), get_hwvx_proto_car_link_68)

}

function get_hwvx_proto_car_link_48(o) {
    if (u32(o + 0) || f32(o + 32) !== 1 || f32(o + 36) !== 1 || u32(o + 40) || u32(o + 44) || u32(o + 52) || u32(o + 56) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)
    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 4), get_hwvx_proto_car_link_48_72)
    }
    for (let i = 0; i < u32(o + 76); i++) {
        ö(u32(o + 80) + (i * 4), get_hwvx_proto_car_link_48_72)
    }

    ä(hwvx_proto_unknown, u32(o + 48), get_hwvx_proto_unknown)
    ä(hwvx_proto_sound_section, u32(o + 60), get_hwvx_proto_sound_section)
    ä(hwvx_proto_unknown, u32(o + 64), get_hwvx_proto_unknown)

}

function get_hwvx_proto_car_link_48_72(o) {
    // ü(1, [u32, 0], o)
    ä(hwvx_proto_unknown, u32(o + 0), get_hwvx_proto_unknown)

}

function get_hwvx_proto_car_link_56(o) {
    // ü(1, [u32, 0], o)
    ä(hwvx_proto_unknown, u32(o + 0), get_hwvx_proto_unknown)

}

function get_hwvx_proto_car_link_64(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    ä(hwvx_proto_unknown, u32(o + 0), get_hwvx_proto_unknown)
}
function get_hwvx_proto_car_link_68(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, ], o)
}

function get_hwvx_proto_car_164(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 8), get_hwvx_proto_car_164_8)

}

function get_hwvx_proto_car_164_8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}

function get_hwvx_proto_car_172(o) {
    if (u8(o + 0) || u8(o + 1) !== 16 || u8(o + 2) !== 61 || u8(o + 3) !== 70 || f32(o + 4) !== 900 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}
function get_hwvx_proto_car_212(o) {
    if (f32(o + 4) !== 1.2000000476837158 || f32(o + 8) !== 1.2000000476837158 || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u8(o + 60) !== 1 || u8(o + 61) || u8(o + 62) !== 1 || u8(o + 65) || u8(o + 66) !== 1 || u8(o + 67) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u8, 60, u8, 61, u8, 62, u8, 63, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, u32, 72, u32, 76], o)
}
function get_hwvx_proto_car_220(o) {
    // ü(1, [f32, 0, u32, 4], o)
    ä(hwvx_proto_sound_section, u32(o + 4), get_hwvx_proto_sound_section)

}
function get_hwvx_proto_car_228(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8], o)
    ä(hwvx_proto_model_anims_2, u32(o + 0), get_hwvx_proto_model_anims_2)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 32), get_hwvx_proto_mysterious)
    }

}
function get_hwvx_proto_mysterious(o) {
    if (u32(o + 12) || u8(o + 19) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)

    switch (u8(o + 16)) {
    case 1:
        ä(hwvx_proto_unknown, u32(o + 24), get_hwvx_proto_unknown)
        break
    case 2:
        ä(hwvx_proto_strange, u32(o + 24), get_hwvx_proto_strange)
        break
    case 3:
        ä(hwvx_proto_sound_controls, u32(o + 24), get_hwvx_proto_sound_controls)
        break
    case 4:
        if (u32(o + 24)) {
            console.log("?")
        }
        break
    case 5:
        ö(u32(o + 24), get_hwvx_proto_mysterious_24t5)
        break
    case 6:
        ö(u32(o + 24), get_hwvx_proto_mysterious_24t6)
        break
    case 7:
        ö(u32(o + 24), get_hwvx_proto_mysterious_24t7)
        break
    case 9:
        ö(u32(o + 24), get_hwvx_proto_mysterious_24t9)
        break
    case 99:
        ö(u32(o + 24), get_hwvx_proto_mysterious_24t99)
        break
    default:
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
    }
}

function get_hwvx_proto_strange(o) {
    if (u32(o + 0) !== 256 || u32(o + 4) || u32(o + 16) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 4), get_hwvx_proto_strange_28)
    }
    ä(hwvx_proto_sound_controls, u32(o + 32), get_hwvx_proto_sound_controls)

}

function get_hwvx_proto_strange_28(o) {
    // ü(1, [u32, 0], o)
    ä(hwvx_proto_unknown, u32(o + 0), get_hwvx_proto_unknown)

}

function get_hwvx_proto_strange_32(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], o)
}

function get_hwvx_proto_mysterious_24t5(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 36) || u32(o + 40))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    ß('p_model', o, 8)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 32), get_hwvx_proto_mysterious_24t5_24)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 12), get_hwvx_proto_mysterious_24t5_32)
    }
    ö(u32(o + 44), get_hwvx_proto_mysterious_24t5_44)

}

function get_hwvx_proto_mysterious_24t5_24(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_hwvx_proto_mysterious_24t5_32(o) {// ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_hwvx_proto_mysterious_24t5_44(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
}

function get_hwvx_proto_mysterious_24t6(o) {
    if (u32(o + 4) !== 1 || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    ß('p_texture', o, 8)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 32), get_hwvx_proto_mysterious_24t6_16)
    }

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 32), get_hwvx_proto_mysterious_24t6_24)
    }

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 12), get_hwvx_proto_mysterious_24t6_32)
    }
    ö(u32(o + 36), get_hwvx_proto_mysterious_24t6_36)

}
function get_hwvx_proto_mysterious_24t6_36(o) {
    if (f32(o + 0) !== 100 || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_mysterious_24t6_16(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_hwvx_proto_mysterious_24t6_24(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}
function get_hwvx_proto_mysterious_24t6_32(o) {// ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}

function get_hwvx_proto_mysterious_24t7(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 36) !== 100 || u32(o + 40) || u32(o + 44) || u32(o + 56) || f32(o + 60) !== 1 || f32(o + 64) !== 1 || u32(o + 76) !== 1 || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, u32, 56, f32, 60, f32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)

    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 72) + (i * 12), get_hwvx_proto_mysterious_24t7_72)
    }
    ö(u32(o + 80), get_hwvx_proto_mysterious_24t7_80)
    ö(u32(o + 88), get_hwvx_proto_mysterious_24t7_88)

}

function get_hwvx_proto_mysterious_24t7_72(o) {
    if (u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_hwvx_proto_mysterious_24t7_80(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)
}
function get_hwvx_proto_mysterious_24t7_88(o) {
    if (u32(o + 0) !== 3435921419 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ß('p_texture', o, 0)
}

function get_hwvx_proto_mysterious_24t9(o) {
    if (u8(o + 0) !== 2 || u8(o + 1) !== 2 || u32(o + 12) || u32(o + 16) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ß('p_texture', o, 20)
    ß('p_texture', o, 24)

    ö(u32(o + 28), get_hwvx_proto_mysterious_24t9_28)
    ö(u32(o + 32), get_hwvx_proto_mysterious_24t9_32)

}

function get_hwvx_proto_mysterious_24t9_28(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_mysterious_24t9_32(o) {
    if (u8(o + 0))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3], o)
}
function get_hwvx_proto_mysterious_24t99(o) {
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_car_252(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 4), get_hwvx_proto_car_252_4)

}

function get_hwvx_proto_car_252_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 4), get_hwvx_proto_car_252_4_4)

}

function get_hwvx_proto_car_252_4_4(o) {
    if (u32(o + 0) !== 64 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_car_260(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) !== 1 || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    ö(u32(o + 56), get_hwvx_proto_car_260_56)

}

function get_hwvx_proto_car_260_56(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_car_268(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_world_idk(o) {
    if (f32(o + 4) !== 1 || f32(o + 8) !== 1 || f32(o + 16) !== 1 || u32(o + 28) || u32(o + 32) !== 65535 || u8(o + 36) !== 3 || u8(o + 37) || u8(o + 38) !== 1 || u8(o + 39) !== 100 || u32(o + 40) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 12), get_hwvx_proto_world_idk_48)
    }

}

function get_hwvx_proto_world_idk_48(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8], o)
    ä(hwvx_proto_some_world_thing, u32(o + 0), get_hwvx_proto_some_world_thing)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_hwvx_proto_world_idk_48_8)
    }

}

function get_hwvx_proto_some_world_thing(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 28) || u32(o + 48) || u32(o + 80) || u32(o + 84) || u32(o + 92) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 112) || u32(o + 120) || u32(o + 124))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, ], o)
    ö(u32(o + 116), get_hwvx_proto_string)
    // HW_Cars
    ö(u32(o + 88), get_hwvx_proto_some_world_thing_88)

}
function get_hwvx_proto_some_world_thing_88(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_hwvx_proto_world_idk_48_8(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ä(hwvx_proto_some_world_thing, u32(o + 0), get_hwvx_proto_some_world_thing)

}

function get_hwvx_proto_world_model_related(o) {
    if (u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    switch (u8(o + 4)) {
    case 0:
        ß('p_model', o, 0)
        break
    case 1:
        ö(u32(o + 0), get_hwvx_proto_model_link)
        break

    }

    ä(hwvx_proto_sound_controls, u32(o + 12), get_hwvx_proto_sound_controls)

    ö(u32(o + 16), get_hwvx_proto_car_link)
    ä(hwvx_proto_model_anims_2, u32(o + 20), get_hwvx_proto_model_anims_2)

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 32), get_hwvx_proto_mysterious)
    }

}

function get_hwvx_proto_world_small_section(o) {
    // ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, ], o)
    ö(u32(o + 12), get_hwvx_proto_world_small_section_12)

}
function get_hwvx_proto_world_small_section_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_world_settings(o) {
    if (u32(o + 0) || f32(o + 12) !== 100 || f32(o + 16) !== 100 || u32(o + 28) || u8(o + 32) || u8(o + 33) !== 96 || u8(o + 34) !== 106 || u8(o + 35) !== 70 || u32(o + 36) || f32(o + 40) !== 200 || f32(o + 48) !== 0.5 || f32(o + 52) !== 1 || f32(o + 56) !== 1 || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 84) || f32(o + 112) !== 5 || f32(o + 116) !== 100 || u32(o + 168) || u32(o + 172) || u32(o + 176) || u32(o + 180) || u32(o + 184) || u32(o + 188) || u32(o + 208) || u32(o + 212) || u32(o + 216) || u32(o + 220) || u32(o + 240) !== 3 || u32(o + 248) !== 2 || u32(o + 264) || u32(o + 268) || u32(o + 272) || u32(o + 276) || u32(o + 280) || u32(o + 284) || u32(o + 288) || u32(o + 292) || u32(o + 296) || u32(o + 300))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, f32, 88, f32, 92, f32, 96, f32, 100, f32, 104, f32, 108, f32, 112, f32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, u32, 256, u32, 260, u32, 264, u32, 268, u32, 272, u32, 276, u32, 280, u32, 284, u32, 288, u32, 292, u32, 296, u32, 300, ], o)
    ß('p_texture', o, 120)
    ß('p_texture', o, 124)
    ß('p_texture', o, 128)
    ß('p_texture', o, 132)
    ß('p_texture', o, 136)
    ß('p_texture', o, 140)
    ß('p_texture', o, 144)
    ß('p_texture', o, 148)
    ß('p_texture', o, 152)

    ö(u32(o + 160), get_hwvx_proto_string)
    // HW_Cars
    ö(u32(o + 164), get_hwvx_proto_string)
    // HW_Items
    ö(u32(o + 192), get_hwvx_proto_world_settings_192)
    ö(u32(o + 196), get_hwvx_proto_world_settings_196)
    ä(hwvx_proto_font, u32(o + 200), get_hwvx_proto_font)

    ä(hwvx_proto_interface, u32(o + 204), get_hwvx_proto_interface)
    ö(u32(o + 224), get_hwvx_proto_world_settings_224)
    ö(u32(o + 228), get_hwvx_proto_world_settings_228)
    for (let i = 0; i < u32(o + 232); i++) {
        ö(u32(o + 236) + (i * 4), get_hwvx_proto_world_settings_236)
    }
    for (let i = 0; i < u32(o + 240); i++) {
        ö(u32(o + 244) + (i * 4), get_hwvx_proto_world_settings_244)
    }
    for (let i = 0; i < u32(o + 248); i++) {
        ö(u32(o + 252) + (i * 4), get_hwvx_proto_world_settings_244)
    }
    for (let i = 0; i < u32(o + 256); i++) {
        ö(u32(o + 260) + (i * 12), get_hwvx_proto_world_settings_260)
    }
    if (old_log_array.p_offset.array.includes(o + 156 - offset_mid)) {
        ß('p_offset', u32(o + 156), offset_mid)
        ö(u32(o + 156), get_hwvx_proto_world_settings_156)
    }

}

function get_hwvx_proto_world_settings_156(o) {
    let check_val = o
    if (hwvx_proto_car_link.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_36_36.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_36_48.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_36_48_8.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_36_48_24.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_108_44t6.includes(check_val)) {
        return
    }
    if (hwvx_proto_world_76.includes(check_val)) {
        return
    }
    // console.log('left', o)
    // ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)

    /*
        left:
        BAT8_L1_PROTO.XPS
        BAT5_L1_PROTO.XPS
        BAT7_L1_PROTO.XPS
        BAT4_L1_PROTO.XPS
        CH5_L3_PROTO.XPS
        CH5_L4_PROTO.XPS
        CH5_L5_PROTO.XPS
        CH2_L1_PROTO.XPS
        CH2_L4_PROTO.XPS
        CH2_L2_PROTO.XPS
        WORLD1L1_PROTO.XPS
        WORLD1L2_PROTO.XPS
        WORLD3L3_PROTO.XPS
    */
    // ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, f32, 28, ], o)
}
function get_hwvx_proto_world_settings_192(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_world_settings_196(o) {
    if (u32(o + 0) !== 256 || u32(o + 4) || u32(o + 12) || u32(o + 16) || u32(o + 24) !== 1 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    ö(u32(o + 28), get_hwvx_proto_world_settings_196_28)
    ä(hwvx_proto_sound_controls, u32(o + 32), get_hwvx_proto_sound_controls)

}

function get_hwvx_proto_world_settings_196_28(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ä(hwvx_proto_unknown, u32(o + 0), get_hwvx_proto_unknown)

}

function get_hwvx_proto_world_settings_224(o) {
    if (f32(o + 0) !== 0.18000000715255737 || f32(o + 4) !== 1 || f32(o + 8) !== 1 || f32(o + 12) !== 1 || f32(o + 16) !== 1 || f32(o + 20) !== 160000 || f32(o + 24) !== 490000 || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, ], o)
}
function get_hwvx_proto_world_settings_228(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_world_settings_236(o) {
    // ü(1, [u32, 0], o)
    ö(u32(o + 0), get_hwvx_proto_world_settings_236_0)

}
function get_hwvx_proto_world_settings_236_0(o) {
    if (u32(o + 16) || u32(o + 24) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    ö(u32(o + 28), get_hwvx_proto_world_settings_236_0_28)

}

function get_hwvx_proto_world_settings_236_0_28(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ä(hwvx_proto_unknown, u32(o + 0), get_hwvx_proto_unknown)
}

function get_hwvx_proto_world_settings_244(o) {
    // ü(1, [u32, 0], o)
    ä(hwvx_proto_unknown, u32(o + 0), get_hwvx_proto_unknown)

}
function get_hwvx_proto_world_settings_260(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8], o)
    ö(u32(o + 4), get_hwvx_proto_world_settings_260_4)

}

function get_hwvx_proto_world_settings_260_4(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 4) || u8(o + 5) || u8(o + 8) || u8(o + 9) || u8(o + 12) || u8(o + 13) || u8(o + 16) || u8(o + 17) || u8(o + 20) || u8(o + 21) || u8(o + 24) || u8(o + 25))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, ], o)
}

function get_hwvx_proto_world_text_link(o) {
    if (u32(o + 4) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ä(hwvx_proto_world_small_section, u32(o + 12), get_hwvx_proto_world_small_section)
    ä(hwvx_proto_world_small_section, u32(o + 16), get_hwvx_proto_world_small_section)
    ä(hwvx_proto_text, u32(o + 20), get_hwvx_proto_text)
    ä(hwvx_proto_text, u32(o + 24), get_hwvx_proto_text)

}

function get_hwvx_proto_interface(o) {
    if (u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 108), get_hwvx_proto_interface_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_hwvx_proto_interface_24)
    }
    ö(u32(o + 28), get_hwvx_proto_interface_28)
    ä(hwvx_proto_sound_controls, u32(o + 32), get_hwvx_proto_sound_controls)
    ä(hwvx_proto_sound_controls, u32(o + 36), get_hwvx_proto_sound_controls)
    ä(hwvx_proto_sound_controls, u32(o + 40), get_hwvx_proto_sound_controls)
    ä(hwvx_proto_sound_controls, u32(o + 44), get_hwvx_proto_sound_controls)
    ö(u32(o + 48), get_hwvx_proto_interface_48)

}

function get_hwvx_proto_interface_16(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 4) || u8(o + 11) || u8(o + 14) || u8(o + 15) || u8(o + 24) !== 255 || u8(o + 25) !== 255 || u8(o + 26) !== 255 || u8(o + 27) !== 255 || u8(o + 28) !== 255 || u8(o + 29) !== 255 || u8(o + 30) !== 255 || u8(o + 31) !== 255 || u8(o + 32) !== 255 || u8(o + 33) !== 255 || u8(o + 34) !== 255 || u8(o + 35) !== 255 || u8(o + 36) !== 255 || u8(o + 37) !== 255 || u8(o + 38) !== 255 || u8(o + 39) !== 255 || u8(o + 40) !== 255 || u8(o + 41) !== 255 || u8(o + 42) !== 255 || u8(o + 43) !== 255 || u8(o + 44) !== 255 || u8(o + 45) !== 255 || u8(o + 46) !== 255 || u8(o + 47) !== 255 || u32(o + 56) || u32(o + 64) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u8, 32, u8, 33, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47, f32, 48, f32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104], o)

    switch (u8(o + 1)) {
    case 0:
        ö(u32(o + 20), get_hwvx_proto_interface_16_20t0)
        break
    case 1:
    case 12:
        ö(u32(o + 20), get_hwvx_proto_interface_16_20t1)
        break
    case 2:
        ö(u32(o + 20), get_hwvx_proto_interface_16_20t2)
        break
    case 4:
        ö(u32(o + 20), get_hwvx_proto_interface_16_20t4)
        break
    case 6:
        if (u32(o + 20)) {
            console.log('?')
        }
        break
    case 10:
        ö(u32(o + 20), get_hwvx_proto_interface_16_20t10)
        break
    case 11:
        ö(u32(o + 20), get_hwvx_proto_interface_16_20t11)
        break
    default:
        console.log("?", u8(o + 1))
    }

    ö(u32(o + 60), get_hwvx_proto_interface_16_60)
    ö(u32(o + 68), get_hwvx_proto_interface_16_68)
    ö(u32(o + 72), get_hwvx_proto_interface_16_72)
    ö(u32(o + 96), get_hwvx_proto_interface_16_96)
    for (let i = 0; i < u32(o + 100); i++) {
        ö(u32(o + 104) + (i * 12), get_hwvx_proto_interface_16_104)
    }

}

function get_hwvx_proto_interface_16_20t0(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    switch (u8(o)) {
    case 0:
        ß('p_texture', o, 4)
        break
    case 1:
        ß('p_model', o, 4)
        break
    case 3:
        //nothing
        break
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
        // console.log(o)
    }
    ö(u32(o + 16), get_hwvx_proto_interface_16_20t0_16)

}

function get_hwvx_proto_interface_16_20t0_16(o) {
    if (u32(o + 8) !== 1000)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_hwvx_proto_interface_16_20t0_16_4)
    }

}

function get_hwvx_proto_interface_16_20t0_16_4(o) {
    ß('p_texture', o, 0)
    // ü(1, [u32, 0], o)
}

function get_hwvx_proto_interface_16_20t1(o) {
    if (u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, ], o)

    ä(hwvx_proto_text, u32(o + 0), get_hwvx_proto_text)
    ä(hwvx_proto_font, u32(o + 4), get_hwvx_proto_font)
    ö(u32(o + 8), get_hwvx_proto_interface_16_20t1_8)

}

function get_hwvx_proto_text(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 0), get_hwvx_proto_text_0)

}

function get_hwvx_proto_text_0(o) {// console.log(get_string(o, 0, false))
}

function get_hwvx_proto_font(o) {
    if (u8(o + 1) || u8(o + 2) !== 204 || u8(o + 3) !== 204 || u32(o + 12) || u32(o + 16) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, f32, 40, u32, 44, ], o)

    ß('p_texture', o, 0)

    ä(hwvx_proto_sound_section, u32(o + 4), get_hwvx_proto_sound_section)
    ö(u32(o + 28), get_hwvx_proto_font_28)
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_hwvx_proto_font_36)
    }

}

function get_hwvx_proto_font_28(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_hwvx_proto_font_36(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, f32, 4, u32, 8], o)
}
function get_hwvx_proto_font_4(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) !== 1 || u8(o + 2) !== 1 || u8(o + 3) || u32(o + 4) || f32(o + 8) !== 0.699999988079071 || f32(o + 12) !== 0.9750000238418579 || f32(o + 16) !== 0.02500000037252903 || u32(o + 20) || u32(o + 24) !== 440224 || u32(o + 28) !== 1 || u32(o + 32) !== 440240 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    ö(u32(o + 24), get_hwvx_proto_font_4_24)
    ö(u32(o + 32), get_hwvx_proto_font_4_32)

}

function get_hwvx_proto_font_4_24(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_font_4_32(o) {
    if (f32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_interface_16_20t1_8(o) {
    if (u8(o + 8) !== 1 || u8(o + 9) || u8(o + 11) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_hwvx_proto_interface_16_20t1_8_4)
    }

}

function get_hwvx_proto_interface_16_20t1_8_4(o) {
    ä(hwvx_proto_text, u32(o + 0), get_hwvx_proto_text)
}

function get_hwvx_proto_interface_16_20t2(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_hwvx_proto_interface_16_20t2_4)
    }

}

function get_hwvx_proto_interface_16_20t2_4(o) {
    if (u8(o + 0) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 12), get_hwvx_proto_text_0)
    ä(hwvx_proto_text, u32(o + 16), get_hwvx_proto_text)

    ä(hwvx_proto_interface_text_related, u32(o + 20), get_hwvx_proto_interface_text_related)

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 8), get_hwvx_proto_interface_16_20t2_4_28)
    }

}

function get_hwvx_proto_interface_text_related(o) {
    if (u32(o + 4) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ä(hwvx_proto_text, u32(o + 0), get_hwvx_proto_text)
    ä(hwvx_proto_font, u32(o + 8), get_hwvx_proto_font)
    ö(u32(o + 12), get_hwvx_proto_interface_text_related_12)
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 16), get_hwvx_proto_interface_text_related_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 16), get_hwvx_proto_interface_text_related_20)
    }
    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 16), get_hwvx_proto_interface_text_related_20)
    }
    ö(u32(o + 52), get_hwvx_proto_interface_text_related_52)

}

function get_hwvx_proto_interface_text_related_12(o) {
    if (u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_interface_text_related_20(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_hwvx_proto_interface_text_related_20_4)
    }

}

function get_hwvx_proto_interface_text_related_20_4(o) {
    ß('p_texture', o, 0)

    // ü(1, [u32, 0], o)
}

function get_hwvx_proto_interface_text_related_52(o) {
    if (f32(o + 0) !== 1 || f32(o + 4) !== 1 || f32(o + 8) !== 1 || u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, ], o)
}
function get_hwvx_proto_interface_16_20t2_4_28(o) {
    if (u32(o + 0) !== 3)
        ü(1, [u32, 0, u32, 4], o)
    ö(u32(o + 4), get_hwvx_proto_interface_16_20t2_4_28_4)

}

function get_hwvx_proto_interface_16_20t2_4_28_4(o) {
    if (u8(o + 0) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_interface_16_20t4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_hwvx_proto_interface_16_20t4_4)
    }

}

function get_hwvx_proto_interface_16_20t4_4(o) {
    if (u32(o + 8) || u32(o + 12) || u8(o + 16) !== 255 || u8(o + 17) !== 255 || u8(o + 18) !== 255 || u8(o + 19) !== 255 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)
}

function get_hwvx_proto_interface_16_20t10(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ä(hwvx_proto_font, u32(o + 16), get_hwvx_proto_font)

}

function get_hwvx_proto_interface_16_20t11(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_hwvx_proto_interface_16_60(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ä(hwvx_proto_interface, u32(o), get_hwvx_proto_interface)

}

function get_hwvx_proto_interface_16_68(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 20), get_hwvx_proto_interface_16_68_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_hwvx_proto_interface_16_68_20)
    }

}

function get_hwvx_proto_interface_16_68_12(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16], o)
}
function get_hwvx_proto_interface_16_68_20(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8], o)
    ö(u32(o + 8), get_hwvx_proto_interface_16_68_20_8)

}

function get_hwvx_proto_interface_16_68_20_8(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    switch (u8(o + 5)) {
    case 1:
        ä(hwvx_proto_interface, u32(o), get_hwvx_proto_interface)
        break
    case 11:
        ö(u32(o + 0), get_hwvx_proto_interface_16_68_20_8_0t11)
        break
    default:
        if (u32(o))
            console.log('?')

    }

    ö(u32(o + 8), get_hwvx_proto_interface_16_68_20_8_8)
    ö(u32(o + 24), get_hwvx_proto_interface_16_68_20_8_24)
    ö(u32(o + 32), get_hwvx_proto_interface_16_68_20_8_32)

}

function get_hwvx_proto_interface_16_68_20_8_0t11(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_hwvx_proto_interface_16_68_20_8_0t11_4)
    }

}

function get_hwvx_proto_interface_16_68_20_8_0t11_4(o) {
    if (u32(o + 0) !== 2)
        ü(1, [u32, 0, u32, 4], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_hwvx_proto_interface_16_68_20_8_0t11_4_4)
    }

}

function get_hwvx_proto_interface_16_68_20_8_0t11_4_4(o) {
    // ü(1, [u32, 0], o)
    ö(u32(o + 0), get_hwvx_proto_interface_16_68_20_8_0t11_4_4_0)

}
function get_hwvx_proto_interface_16_68_20_8_0t11_4_4_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 4), get_hwvx_proto_interface_16_68_20_8_0t11_4_4_0_4)

}

function get_hwvx_proto_interface_16_68_20_8_0t11_4_4_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_interface_16_68_20_8_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 0), get_hwvx_proto_interface_16_68_20_8_8_0)
    ö(u32(o + 4), get_hwvx_proto_interface_16_68_20_8_8_4)

}

function get_hwvx_proto_interface_16_68_20_8_8_0(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_interface_16_68_20_8_8_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_interface_16_68_20_8_32(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_interface_16_68_20_8_24(o) {
    if (u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_interface_16_72(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_hwvx_proto_interface_16_72_8)
    }

}

function get_hwvx_proto_interface_16_72_8(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8], o)
    ö(u32(o + 8), get_hwvx_proto_interface_16_72_8_8)

}

function get_hwvx_proto_interface_16_72_8_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 4), get_hwvx_proto_interface_16_72_8_8_4)

}

function get_hwvx_proto_interface_16_72_8_8_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_interface_16_96(o) {
    if (u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_hwvx_proto_interface_16_96_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_hwvx_proto_interface_16_96_4)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_hwvx_proto_interface_16_96_4)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_hwvx_proto_interface_16_96_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 40), get_hwvx_proto_interface_16_96_36)
    }

}

function get_hwvx_proto_interface_16_96_12(o) {
    ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}
function get_hwvx_proto_interface_16_96_28(o) {// ü(1, [u8, 0,u8, 1,u8, 2,u8, 3, u32, 4, f32, 8], o)
}
function get_hwvx_proto_interface_16_96_36(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, f32, 28, u32, 32, f32, 36], o)
}
function get_hwvx_proto_interface_16_96_4(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}

function get_hwvx_proto_interface_16_104(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8], o)
    ö(u32(o + 8), get_hwvx_proto_interface_16_104_8)

}

function get_hwvx_proto_interface_16_104_8(o) {
    if (u32(o + 48))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_hwvx_proto_interface_16_104_8_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_hwvx_proto_interface_16_104_8_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_hwvx_proto_interface_16_104_8_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 32), get_hwvx_proto_interface_16_104_8_28)
    }

    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 40), get_hwvx_proto_interface_16_104_8_36)
    }

    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 32), get_hwvx_proto_interface_16_104_8_44)
    }
    ö(u32(o + 56), get_hwvx_proto_interface_16_104_8_56)

}
function get_hwvx_proto_interface_16_104_8_4(o) {// ü(1, [u32, 0, f32, 4], o)
}
function get_hwvx_proto_interface_16_104_8_12(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_hwvx_proto_interface_16_104_8_20(o) {// ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_hwvx_proto_interface_16_104_8_28(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_hwvx_proto_interface_16_104_8_36(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, f32, 28, u32, 32, f32, 36], o)
}
function get_hwvx_proto_interface_16_104_8_44(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_hwvx_proto_interface_16_104_8_56(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 4), get_hwvx_proto_interface_16_104_8_56_4)

}

function get_hwvx_proto_interface_16_104_8_56_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_interface_24(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8], o)
    ö(u32(o + 8), get_hwvx_proto_interface_24_8)

}
function get_hwvx_proto_interface_24_8(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    //17,15
    switch (u8(o + 5)) {
    case 1:
        ä(hwvx_proto_interface, u32(o), get_hwvx_proto_interface)
        break
    case 11:
        ö(u32(o + 0), get_hwvx_proto_interface_24_8_0t11)
        break
    case 15:
        ö(u32(o + 8), get_hwvx_proto_interface_24_8_8t15)
        break
    case 17:
        ö(u32(o + 8), get_hwvx_proto_interface_24_8_8t17)
        break
    default:
        if (u32(o))
            console.log(u8(o + 5))
        if (u32(o + 8))
            console.log(u8(o + 5))
    }

}

function get_hwvx_proto_interface_24_8_0t11(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_hwvx_proto_interface_24_8_0t11_4)
    }

}

function get_hwvx_proto_interface_24_8_0t11_4(o) {
    if (u32(o + 0) !== 2)
        ü(1, [u32, 0, u32, 4], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_hwvx_proto_interface_24_8_0t11_4_4)
    }

}

function get_hwvx_proto_interface_24_8_0t11_4_4(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 0), get_hwvx_proto_interface_24_8_0t11_4_4_0)

}
function get_hwvx_proto_interface_24_8_0t11_4_4_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 4), get_hwvx_proto_interface_24_8_0t11_4_4_0_4)

}

function get_hwvx_proto_interface_24_8_0t11_4_4_0_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_interface_24_8_8t15(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 0), get_hwvx_proto_interface_24_8_8t15_0)
    ö(u32(o + 4), get_hwvx_proto_interface_24_8_8t15_4)

}

function get_hwvx_proto_interface_24_8_8t15_0(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) !== 4 || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_interface_24_8_8t15_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_interface_24_8_8t17(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_interface_28(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 52), get_hwvx_proto_interface_28_4)
    }

}

function get_hwvx_proto_interface_28_4(o) {
    if (u16(o + 2) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48))
        ü(1, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48], o)
    ö(u32(o + 16), get_hwvx_proto_interface_28_4_16)

}

function get_hwvx_proto_interface_28_4_16(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 4), get_hwvx_proto_interface_28_4_16_4)

}

function get_hwvx_proto_interface_28_4_16_4(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_interface_48(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 0), get_hwvx_proto_string)

}

function get_hwvx_proto_unknown(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_hwvx_proto_unknown_4)
    }

}

function get_hwvx_proto_unknown_4(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8], o)
    switch (u32(o)) {
    case 1:
        ä(hwvx_proto_unknown_thing, u32(o + 4), get_hwvx_proto_unknown_thing)
        ö(u32(o + 8), get_hwvx_proto_unknown_4_8t1)
        break
    case 2:
        ä(hwvx_proto_asdf, u32(o + 4), get_hwvx_proto_asdf)
        ö(u32(o + 8), get_hwvx_proto_unknown_4_8t1)
        break
    case 3:
        ä(hwvx_proto_unknown, u32(o + 4), get_hwvx_proto_unknown)
        ö(u32(o + 8), get_hwvx_proto_unknown_4_8t1)
        break
    case 4:
        ö(u32(o + 4), get_hwvx_proto_unknown_4_4t4)
        ö(u32(o + 8), get_hwvx_proto_unknown_4_8t1)
        break
    case 5:
        ä(hwvx_proto_unknown_idk_sec, u32(o + 4), get_hwvx_proto_unknown_idk_sec)
        ö(u32(o + 8), get_hwvx_proto_unknown_4_8t5)
        break
    case 6:
        ä(hwvx_proto_world_model_related, u32(o + 4), get_hwvx_proto_world_model_related)
        ö(u32(o + 8), get_hwvx_proto_unknown_4_8t5)
        break
    case 7:
        ä(hwvx_proto_grand_section, u32(o + 4), get_hwvx_proto_grand_section)
        ö(u32(o + 8), get_hwvx_proto_unknown_4_8t1)
        break
    case 8:
        ö(u32(o + 4), get_hwvx_proto_unknown_4_4t8)
        ö(u32(o + 8), get_hwvx_proto_unknown_4_8t5)
        break
    case 10:
        ä(hwvx_proto_sound_section, u32(o + 4), get_hwvx_proto_sound_section)
        ö(u32(o + 8), get_hwvx_proto_unknown_4_8t1)
        break
    case 11:
        break
    case 12:
        break
    case 13:
        break
    case 14:
        break
    case 15:
        break
    case 26:
        ä(hwvx_proto_sound_controls, u32(o + 4), get_hwvx_proto_sound_controls)
        ö(u32(o + 8), get_hwvx_proto_unknown_4_8t5)
        break
    case 29:
        ö(u32(o + 4), get_hwvx_proto_unknown_4_4t29)
        ö(u32(o + 8), get_hwvx_proto_unknown_4_8t1)
        break
    case 30:
        break
    default:
        console.log("?", u32(o))
    }

}

function get_hwvx_proto_unknown_4_8t1(o) {
    // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u8, 32, u8, 33, u8, 34, u8, 35, f32, 36, u32, 40, u32, 44, ], o)

    switch (u8(o + 33)) {
    case 0:
        break
    case 1:
        ö(u32(o + 40), get_hwvx_proto_unknown_4_8t1_40t1)
        break
    case 2:
        ö(u32(o + 40), get_hwvx_proto_unknown_4_8t1_40t2)
        break
    default:
        console.log('/')
    }
    ö(u32(o + 44), get_hwvx_proto_unknown_4_8t1_44)

}

function get_hwvx_proto_unknown_4_8t1_40t1(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
}

function get_hwvx_proto_unknown_4_8t1_40t2(o) {
    if (u8(o + 8))
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, ], o)

    switch (u8(o + 9)) {
    case 0:
        ö(u32(o + 12), get_hwvx_proto_unknown_4_8t1_40t2_12t0)
        break
    case 1:
        ö(u32(o + 12), get_hwvx_proto_unknown_4_8t1_40t2_12t1)
        break
    case 2:
        ö(u32(o + 12), get_hwvx_proto_unknown_4_8t1_40t2_12t2)
        break
        if (u32(o + 12)) {
            console.log(o)
        }
    }

}

function get_hwvx_proto_unknown_4_8t1_40t2_12t0(o) {
    if (f32(o + 0) !== 1 || u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, ], o)
}
function get_hwvx_proto_unknown_4_8t1_40t2_12t1(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_hwvx_proto_unknown_4_8t1_40t2_12t2(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_hwvx_proto_unknown_4_8t1_44(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}

function get_hwvx_proto_unknown_4_8t5(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    ö(u32(o + 28), get_hwvx_proto_unknown_4_8t5_28)

}

function get_hwvx_proto_unknown_4_8t5_28(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_hwvx_proto_unknown_4_8t8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) !== 256 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    ö(u32(o + 28), get_hwvx_proto_unknown_4_8t8_28)

}

function get_hwvx_proto_unknown_4_8t8_28(o) {
    ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_hwvx_proto_unknown_thing(o) {
    if (u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    switch (u32(o)) {
    case 0:
        ö(u32(o + 4), get_hwvx_proto_unknown_thing_4t0)
        break
    case 1:
        ö(u32(o + 4), get_hwvx_proto_unknown_thing_4t1)
        break
    case 2:
        ö(u32(o + 4), get_hwvx_proto_unknown_thing_4t2)
        break
    default:
        if (u32(o + 4)) {
            console.log(o)
        }
    }

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + i * 12, get_hwvx_proto_unknown_thing_24)
    }
    ö(u32(o + 32), get_hwvx_proto_unknown_thing_32)

}

function get_hwvx_proto_unknown_thing_4t0(o) {
    if (u32(o + 28) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    ä(hwvx_proto_sound_controls, u32(o + 24), get_hwvx_proto_sound_controls)

    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 4), get_hwvx_proto_unknown_thing_4t0_36)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 32), get_hwvx_proto_unknown_thing_4t0_44)
    }

}

function get_hwvx_proto_unknown_thing_4t0_36(o) {
    // ü(1, [u32, 0 ], o)
    ß('p_model', o, 0)

}
function get_hwvx_proto_unknown_thing_4t0_44(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}

function get_hwvx_proto_unknown_thing_4t1(o) {
    if (u32(o + 28))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 4), get_hwvx_proto_unknown_thing_4t1_36)
    }
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 12), get_hwvx_proto_unknown_thing_4t1_44)
    }

}

function get_hwvx_proto_unknown_thing_4t1_36(o) {
    ß('p_texture', o, 0)

    // ü(1, [u8, 0], o)
}
function get_hwvx_proto_unknown_thing_4t1_44(o) {// ü(1, [f32, 0, u32, 4, f32, 8], o)
}

function get_hwvx_proto_unknown_thing_4t2(o) {
    if (u32(o + 28))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 12), get_hwvx_proto_unknown_thing_4t2_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_hwvx_proto_unknown_thing_4t2_24)
    }

}

function get_hwvx_proto_unknown_thing_4t2_16(o) {
    if (f32(o + 4))
        ü(1, [f32, 0, f32, 4, f32, 8], o)
}
function get_hwvx_proto_unknown_thing_4t2_24(o) {
    if (u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}

function get_hwvx_proto_unknown_thing_24(o) {// ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_hwvx_proto_unknown_thing_32(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ä(hwvx_proto_unknown, u32(o + 0), get_hwvx_proto_unknown)

}
function get_hwvx_proto_unknown_4_4t4(o) {
    if (u32(o + 12) !== 200 || u32(o + 16) || u32(o + 20) || u32(o + 24) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    ö(u32(o + 28), get_hwvx_proto_unknown_4_4t4_28)

}

function get_hwvx_proto_unknown_4_4t4_28(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ä(hwvx_proto_unknown, u32(o + 0), get_hwvx_proto_unknown)

}

function get_hwvx_proto_unknown_idk_sec(o) {
    if (u32(o + 8) !== 1 || u32(o + 44) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)

    ö(u32(o + 28), get_hwvx_proto_unknown_idk_sec_28)
    ö(u32(o + 32), get_hwvx_proto_unknown_idk_sec_32)
    ö(u32(o + 36), get_hwvx_proto_unknown_idk_sec_36)
    ö(u32(o + 40), get_hwvx_proto_unknown_idk_sec_40)
    ö(u32(o + 48), get_hwvx_proto_unknown_idk_sec_48)

}

function get_hwvx_proto_unknown_idk_sec_28(o) {
    if (u8(o + 1) || u8(o + 2) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ä(hwvx_proto_unknown, u32(o + 24), get_hwvx_proto_unknown)

}

function get_hwvx_proto_unknown_idk_sec_32(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_hwvx_proto_unknown_idk_sec_32_8)
    }

}

function get_hwvx_proto_unknown_idk_sec_32_8(o) {
    if (u8(o + 3) !== 255 || u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_hwvx_proto_unknown_idk_sec_36(o) {
    if (u32(o + 0) !== 2 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 4), get_hwvx_proto_unknown_idk_sec_36_4)

}

function get_hwvx_proto_unknown_idk_sec_36_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}

function get_hwvx_proto_unknown_idk_sec_40(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_hwvx_proto_unknown_idk_sec_40_4)
    }

}

function get_hwvx_proto_unknown_idk_sec_40_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12], o)
}

function get_hwvx_proto_unknown_idk_sec_48(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_grand_section(o) {
    if (u32(o + 4) !== 256 || f32(o + 8) !== 500 || u32(o + 12) || u32(o + 20) || u32(o + 24) !== 1)
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ß('p_model', o, 0)

    ö(u32(o + 16), get_hwvx_proto_car_link)
    ö(u32(o + 28), get_hwvx_proto_mysterious)

}
function get_hwvx_proto_unknown_4_4t8(o) {
    if (u8(o + 0) || u8(o + 1) !== 1 || u8(o + 2) || u32(o + 8) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 12), get_hwvx_proto_unknown_4_4t8_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_hwvx_proto_unknown_4_4t8_24)
    }

}

function get_hwvx_proto_unknown_4_4t8_16(o) {
    if (u32(o + 4))
        ü(1, [f32, 0, u32, 4, f32, 8], o)
}
function get_hwvx_proto_unknown_4_4t8_24(o) {
    if (u8(o + 3) !== 255 || u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}

function get_hwvx_proto_asdf(o) {
    if (u32(o + 32) || u32(o + 36) || u32(o + 40) || u8(o + 68) || u32(o + 80) || u32(o + 88) || u32(o + 96) || u32(o + 100) || u32(o + 104) || u32(o + 108) || u32(o + 124) || u32(o + 128) || u32(o + 132) || u32(o + 136))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, f32, 52, u32, 56, f32, 60, f32, 64, u8, 68, u8, 69, u8, 70, u8, 71, f32, 72, f32, 76, u32, 80, u32, 84, u32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, ], o)

    switch (u8(o + 4)) {
    case 1:
        ö(u32(o + 12), get_hwvx_proto_asdf_12t1)
        break
    case 2:
        ö(u32(o + 12), get_hwvx_proto_asdf_12t2)
        break
    default:
        if (u32(o + 12)) {
            console.log("?")
        }
    }
    ß('p_model', o, 16)
    ß('p_texture', o, 92)

    ä(hwvx_proto_unknown, u32(o + 112), get_hwvx_proto_unknown)
    ä(hwvx_proto_unknown, u32(o + 116), get_hwvx_proto_unknown)
    ä(hwvx_proto_unknown, u32(o + 120), get_hwvx_proto_unknown)

    for (let i = 0; i < u32(o + 140); i++) {
        ö(u32(o + 144) + (i * 32), get_hwvx_proto_asdf_144)
    }

    for (let i = 0; i < u32(o + 148); i++) {
        ö(u32(o + 152) + (i * 12), get_hwvx_proto_asdf_152)
    }
    for (let i = 0; i < u32(o + 156); i++) {
        ö(u32(o + 160) + (i * 32), get_hwvx_proto_mysterious)
    }
    ö(u32(o + 164), get_hwvx_proto_asdf_164)
    ö(u32(o + 168), get_hwvx_proto_asdf_168)
    ö(u32(o + 172), get_hwvx_proto_asdf_172)

}

function get_hwvx_proto_asdf_12t1(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_asdf_12t2(o) {
    if (f32(o + 0) !== 50 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_asdf_164(o) {
    if (u32(o + 4) || u32(o + 20))
        ü(1, [f32, 0, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, ], o)
}
function get_hwvx_proto_asdf_168(o) {
    if (f32(o + 4) !== 5 || u32(o + 40) || f32(o + 44) !== 180)
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u32, 40, f32, 44, ], o)
}

function get_hwvx_proto_asdf_144(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}
function get_hwvx_proto_asdf_152(o) {
    if (u8(o + 3) !== 255 || u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}

function get_hwvx_proto_asdf_172(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_unknown_4_4t29(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 48), get_hwvx_proto_unknown_4_4t29_12)
    }

}

function get_hwvx_proto_unknown_4_4t29_12(o) {
    if (u32(o + 12) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ß('p_model', o, 28)
    ä(hwvx_proto_unknown_link_section, u32(o + 32), get_hwvx_proto_unknown_link_section)

}

function get_hwvx_proto_unknown_link_section(o) {
    if (u32(o + 0) !== 256 || u32(o + 4) || u32(o + 16) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 4), get_hwvx_proto_unknown_link_section_28)
    }

}

function get_hwvx_proto_unknown_link_section_28(o) {
    // ü(1, [u32, 0 ], o)
    ä(hwvx_proto_unknown, u32(o + 0), get_hwvx_proto_unknown)

}

function get_hwvx_proto_item(o) {
    if (u8(o + 4) !== 255 || u8(o + 5) !== 255 || u8(o + 6) !== 255 || u8(o + 7) !== 255 || u32(o + 20) || u32(o + 40))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, f32, 12, f32, 16, u32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ä(hwvx_proto_text, u32(o + 32), get_hwvx_proto_text)
    ä(hwvx_proto_unknown, u32(o + 36), get_hwvx_proto_unknown)
    ä(hwvx_proto_unknown, u32(o + 44), get_hwvx_proto_unknown)
    ö(u32(o + 48), get_hwvx_proto_item_48)
    ä(hwvx_proto_model_anims_2, u32(o + 52), get_hwvx_proto_model_anims_2)

    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 32), get_hwvx_proto_mysterious)
    }

}

function get_hwvx_proto_item_44(o) {
    if (u32(o + 0) !== 8 || u32(o + 4) !== 137440 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 4), get_hwvx_proto_item_44_4)

}

function get_hwvx_proto_item_44_4(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)
}

function get_hwvx_proto_item_48(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u8(o + 24) || u8(o + 25) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, f32, 56, f32, 60, f32, 64, f32, 68, f32, 72, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)
    ß('p_texture', o, 24)

    ö(u32(o + 0), get_hwvx_proto_item_48_0)
    ä(hwvx_proto_text, u32(o + 16), get_hwvx_proto_text)
    ä(hwvx_proto_model_anims_2, u32(o + 28), get_hwvx_proto_model_anims_2)

}

function get_hwvx_proto_item_48_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 28) !== 33620225 || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    //maybe hwvx_proto_model_link?
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 8), get_hwvx_proto_item_48_0_12)
    }
    ä(hwvx_proto_model_anims_1, u32(o + 16), get_hwvx_proto_model_anims_1)
    ä(hwvx_proto_model_anims_2, u32(o + 20), get_hwvx_proto_model_anims_2)

    ö(u32(o + 32), get_hwvx_proto_item_48_0_32)
    ö(u32(o + 36), get_hwvx_proto_item_48_0_36)
    ö(u32(o + 40), get_hwvx_proto_item_48_0_40)
    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 32), get_hwvx_proto_mysterious)
    }
    ö(u32(o + 52), get_hwvx_proto_item_48_0_52)

}

function get_hwvx_proto_item_48_0_12(o) {
    ß('p_model', o, 0)
}
function get_hwvx_proto_item_48_0_32(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_item_48_0_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_item_48_0_40(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_item_48_0_52(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}

function get_hwvx_proto_link(o) {
    if (u32(o + 0) || u32(o + 4) !== 111600 || u32(o + 8) !== 120224 || u32(o + 12) !== 120240 || u8(o + 16) || u8(o + 17) || u8(o + 18) !== 204 || u8(o + 19) !== 204 || u8(o + 20) !== 1 || u8(o + 21) || u8(o + 22) !== 204 || u8(o + 23) !== 204 || f32(o + 24) !== 100 || f32(o + 28) !== 100 || u32(o + 32) || u32(o + 36) !== 1 || u32(o + 40) !== 5 || u32(o + 44) !== 111424 || u32(o + 48) !== 8 || u32(o + 52) !== 111616 || u32(o + 56) !== 6 || u32(o + 60) !== 120256)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ß('p_texture', o, 16)
    ß('p_texture', o, 20)

    ö(u32(o + 4), get_hwvx_proto_string)
    /* 04 string HW_IPack */
    ö(u32(o + 8), get_hwvx_proto_string)
    /* 08 string HW_Cars */
    ö(u32(o + 12), get_hwvx_proto_string)
    /* 12 string HW_Items */
    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 12), get_hwvx_proto_link_44)
    }
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 4), get_hwvx_proto_link_52)
    }
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 4), get_hwvx_proto_link_60)
    }

}

function get_hwvx_proto_link_44(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8], o)
    if (u32(o) === 0) {
        ö(u32(o + 4), get_hwvx_proto_string)
    } else {
        ö(u32(o + 8), get_hwvx_proto_link_44_8)
    }

}
function get_hwvx_proto_link_44_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 0), get_hwvx_proto_string)
}

function get_hwvx_proto_link_52(o) {
    /* ü(1, [u32, 0], o */
    ö(u32(o), get_hwvx_proto_link_52_0)

}
function get_hwvx_proto_link_52_0(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_hwvx_proto_link_52_0_4)
    }

}

function get_hwvx_proto_link_52_0_4(o) {
    if (u32(o + 16) !== 1 || u32(o + 24) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_hwvx_proto_link_52_0_4_4)
    }
    ö(u32(o + 8), get_hwvx_proto_link_52_0_4_8)
    ö(u32(o + 12), get_hwvx_proto_link_52_0_4_12)
    ö(u32(o + 20), get_hwvx_proto_link_52_0_4_20)
    ö(u32(o + 28), get_hwvx_proto_link_52_0_4_28)

}

function get_hwvx_proto_string(o) {// console.log(get_string(o, 0, false))
}

function get_hwvx_proto_link_52_0_4_12(o) {}
function get_hwvx_proto_link_52_0_4_20(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_link_52_0_4_28(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_link_52_0_4_4(o) {
    /* ü(1, [u32, 0, u32, 4], o) */
    if (u32(o) === 1) {
        ö(u32(o + 4), get_hwvx_proto_link_52_0_4_4_4)
    } else {
        ö(u32(o + 4), get_hwvx_proto_string)
    }

}

function get_hwvx_proto_link_52_0_4_4_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 0), get_hwvx_proto_string)

}

function get_hwvx_proto_link_52_0_4_8(o) {
    if (u32(o + 4) !== 2 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 0), get_hwvx_proto_string)

}

function get_hwvx_proto_link_60(o) {
    /* ü(1, [u32, 0], o) */
    ö(u32(o), get_hwvx_proto_link_60_0)

}

function get_hwvx_proto_link_60_0(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 0), get_hwvx_proto_link_60_0_0)

}

function get_hwvx_proto_link_60_0_0(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 0), get_hwvx_proto_link_60_0_0_0)
    ö(u32(o + 4), get_hwvx_proto_link_60_0_0_4)
    ö(u32(o + 8), get_hwvx_proto_link_60_0_0_8)

}

function get_hwvx_proto_link_60_0_0_0(o) {
    if (u8(o + 0) !== 1 || u8(o + 6) !== 12 || u32(o + 8) !== 117769732)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_link_60_0_0_4(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) !== 36 || u8(o + 3) !== 35 || u8(o + 4) !== 88 || u8(o + 5) !== 67 || u8(o + 6) !== 83 || u8(o + 7) !== 90 || u8(o + 8) !== 38 || u8(o + 9) !== 40 || u8(o + 10) !== 39 || u8(o + 11) !== 37 || u8(o + 12) !== 34 || u8(o + 13) !== 83 || u8(o + 14) !== 17 || u8(o + 15) !== 16)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, ], o)
}
function get_hwvx_proto_link_60_0_0_8(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) !== 10 || u8(o + 3) !== 255 || u8(o + 4) !== 14 || u8(o + 5) !== 13 || u8(o + 6) !== 12 || u8(o + 7) !== 15 || u8(o + 8) !== 4 || u8(o + 9) !== 6 || u8(o + 10) !== 5 || u8(o + 11) !== 7 || u8(o + 12) !== 11 || u8(o + 13) !== 12 || u8(o + 14) !== 8 || u8(o + 15) !== 255)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, ], o)
}

function get_hwvx_proto_sound_controls(o) {
    /* ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o) */
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 16), get_hwvx_proto_sound_controls_12)
    }

}

function get_hwvx_proto_sound_controls_12(o) {
    /* ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, ], o) */
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_hwvx_proto_sound_controls_12_12)
    }

}

function get_hwvx_proto_sound_controls_12_12(o) {
    // ü(1, [u32, 0], o)
    ä(hwvx_proto_sound_section, u32(o + 0), get_hwvx_proto_sound_section)
}

function get_hwvx_proto_sound_section(o) {
    if (u8(o + 3) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    ß('p_sound', o, 20)

    ö(u32(o + 24), get_hwvx_proto_sound_section_24)
    ö(u32(o + 32), get_hwvx_proto_sound_section_32)

}

function get_hwvx_proto_sound_section_24(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, f32, 4, u32, 8], o)
}
function get_hwvx_proto_sound_section_32(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_hwvx_proto_geo_basic_0(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ß('p_model', o, 8)

}

function get_hwvx_proto_geo_basic_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_hwvx_proto_geo_basic_4_4)
    }

}

function get_hwvx_proto_geo_basic_4_4(o) {
    if (u8(o + 15) !== 255)
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 8) + (i * 4), get_hwvx_proto_geo_basic_4_4_8)
    }
    ö(u32(o + 4), get_hwvx_proto_geo_basic_4_4_4)
    ö(u32(o + 16), get_hwvx_proto_geo_basic_4_4_16)

}

function get_hwvx_proto_geo_basic_4_4_4(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_hwvx_proto_geo_basic_4_4_8(o) {// ü(1, [f32, 0], o)
}
function get_hwvx_proto_geo_basic_4_4_16(o) {
    // ü(1, [u8, 0], o)
//random parts in model data?
}

function get_hwvx_proto_model(o) {
    if (u16(o + 0) !== 4101 || u32(o + 44) || u32(o + 60))
        ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, ], o)

    //gc = always 8195
    //ps2 = always 4101
    //pc = 2
    globalThis.modeltypeval = u32(o + 4)

    for (let i = 0; i < u16(o + 2); i++) {
        ö(u32(o + 8) + (i * 24), get_hwvx_proto_model_8)
        ö(u32(o + 12) + (i * 4), get_hwvx_proto_model_12)

    }

}

function get_hwvx_proto_model_8(o) {
    if (u8(o + 1) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20], o)

    for (let i = 0; i < u16(o + 2); i++) {
        ö(u32(o + 8) + (i * 32), get_hwvx_proto_model_8_8)
    }
    ö(u32(o + 20), get_hwvx_proto_string)

}

function get_hwvx_proto_model_8_20(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_hwvx_proto_model_8_8(o) {
    if (u32(o + 8) || u8(o + 25))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
    ß('p_texture', o, 24)
    ß('p_animation', o, 0)

    switch (modeltypeval) {
    case 0:
        ö(u32(o + 12), get_hwvx_proto_model_8_8_12t0)
        break
    case 7:
        ö(u32(o + 12), get_hwvx_proto_model_8_8_12t7)
        break
    case 8:
        ö(u32(o + 12), get_hwvx_proto_model_8_8_12t8)
        break
    }
}

function get_hwvx_proto_model_8_8_12t0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u8(o + 18) || u8(o + 19) !== 96 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u16(o + 32) || u8(o + 34) || u8(o + 35) !== 3 || u8(o + 36) !== 220 || u8(o + 37) !== 1 || u8(o + 38) || u8(o + 39) !== 2 || u8(o + 40) !== 4 || u8(o + 41) !== 4 || u8(o + 42) || u8(o + 43) !== 1 || u8(o + 44) || u8(o + 45) !== 128 || u8(o + 46) !== 1 || u8(o + 47) !== 108 || u8(o + 49) !== 128 || u8(o + 50) || u8(o + 51) || u8(o + 52) || u8(o + 53) !== 64 || u8(o + 55) !== 48 || u16(o + 56) !== 1298 || u16(o + 58) || u8(o + 60) || u8(o + 61) || u8(o + 62) || u8(o + 63) || u8(o + 64) !== 3 || u8(o + 65) !== 1 || u8(o + 66) || u8(o + 67) !== 1 || u8(o + 68) !== 1 || u8(o + 69) !== 128 || u8(o + 71) !== 108)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u16, 32, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u16, 56, u16, 58, u8, 60, u8, 61, u8, 62, u8, 63, u8, 64, u8, 65, u8, 66, u8, 67, u8, 68, u8, 69, u8, 70, u8, 71], o)

}

function get_hwvx_proto_model_8_8_12t7(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 196609 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 20), get_hwvx_proto_model_8_8_12t7_20)

}

function get_hwvx_proto_model_8_8_12t7_20(o) {
    if (u16(o + 2) !== 24576 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 50331648 || u32(o + 20) !== 33554928 || u32(o + 24) !== 16778244 || u32(o + 28) !== 1812037632 || u32(o + 36) !== 2416820224 || u32(o + 40) !== 307307794 || u32(o + 44) !== 5 || u8(o + 48) !== 3 || u8(o + 49) !== 1 || u8(o + 50) || u8(o + 51) !== 1 || u8(o + 52) !== 1 || u8(o + 53) !== 128 || u8(o + 55) !== 108)
        ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55], o)
    let model_data = o + 56
    //81 or 36
    for (let i = 0; i < u8(o + 54); i++) {// ü(1, [f32, 0,f32, 4, u8, 8,u8, 9,u8, 10,u8, 11, u8, 12,u8, 13,u8, 14,u8, 15,], model_data + i*16)
    }
    model_data += u8(o + 54) * 16
    // if(u32(o+0) !==1680900098 ) 
    // ü(1, [u8, 0,u8, 1,u8, 2,u8, 3,], model_data + u8(o+54)*16)

    for (let i = 0; i < u8(model_data + 2); i++) {// ü(1, [f32, 0,f32, 4], (model_data+4) + i*8)
    }
    model_data += u8(model_data + 2) * 8 + 4

    //     (model_data+4)
    // ü(1, [u8, 0,u8, 1,u8, 2,u8, 3,], model_data)
    for (let i = 0; i < u8(model_data + 2); i++) {// ü(1, [f32, 0,f32, 4,f32, 8], (model_data+4) + i*12)
    }
}

function get_hwvx_proto_model_8_8_12t8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 197121 || u32(o + 24) !== 197892 || u32(o + 32) !== 460038 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    ö(u32(o + 20), get_hwvx_proto_model_8_8_12t7_20)
    ö(u32(o + 28), get_hwvx_proto_model_8_8_12t7_20)
    ö(u32(o + 36), get_hwvx_proto_model_8_8_12t7_20)

}

function get_hwvx_proto_model_8_8_12t8_20(o) {
    // if(u16(o+0) !==112 ||u16(o+2) !==24576 ||u32(o+4) ||u32(o+8) ||u32(o+12) ||u32(o+16) !==50331648 ||u32(o+20) !==33554928 ||u32(o+24) !==16778244 ||u32(o+28) !==1812037632 ||u32(o+32) !==32784 ||u32(o+36) !==2416820224 ||u32(o+40) !==307307794 ||u32(o+44) !==5 ||u8(o+48) !==3 ||u8(o+49) !==1 ||u8(o+50) ||u8(o+51) !==1 ||u8(o+52) !==1 ||u8(o+53) !==128 ||u8(o+54) !==48 ||u8(o+55) !==108 ) 
    // ü(1, [u16, 0,u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44,u8, 48,u8, 49,u8, 50,u8, 51, u8, 52,u8, 53,u8, 54,u8, 55], o)
    //1808 bytes
    let model_data = o + 56
    for (let i = 0; i < 48; i++) {
        ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, ], model_data + i * 16)
    }

    // if(u32(o+0) !==1680900098 ) 
    // ü(1, [u32, 0], model_data + 48*16)
}
function get_hwvx_proto_model_8_8_12t8_28(o) {
    ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55], o)
    //1808 bytes
}
function get_hwvx_proto_model_8_8_12t8_36(o) {
    ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55], o)
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o) 
    //1872 bytes
}

function get_hwvx_proto_model_12(o) {// ü(1, [f32, 0], o)
}

function get_hwvx_proto_texture_anims_0(o) {
    if (u32(o + 0) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_hwvx_proto_texture_anims_0_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 16), get_hwvx_proto_texture_anims_0_16)
    }
    ö(u32(o + 20), get_hwvx_proto_texture_anims_0_20)

}

function get_hwvx_proto_texture_anims_0_8(o) {
    if (u8(o + 3) !== 255)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_hwvx_proto_texture_anims_0_16(o) {// ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_hwvx_proto_texture_anims_0_20(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_hwvx_proto_texture_anims_0_20_4)
    }

}

function get_hwvx_proto_texture_anims_0_20_4(o) {
    // ü(1, [u32,0], o)
    ß('p_texture', o, 0)
}
