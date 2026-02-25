async function get_x_pmwr(index) {

    globalThis.offset_mid = undefined

    get_pmwr_file_header(0, 0)
}

function get_pmwr_file_header(o) {
    // ü(3, [u32, 0], o)
    ;let directory_offset = (u32(12) * 24) + 16

    for (let ii = 0; ii < u32(12); ii++) {
        get_pmwr_directory(16 + (ii * 24), directory_offset)
    }

    // 16 bytes;

}

function get_pmwr_directory(o, end_offset) {
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

    globalThis.pmwr_models = []
    globalThis.pmwr_car = []
    globalThis.pmwr_link = []
    globalThis.pmwr_idk = []
    globalThis.pmwr_interface = []
    globalThis.pmwr_frame_sparkler = []
    globalThis.pmwr_frame_font = []
    globalThis.pmwr_frame_multi_font = []
    globalThis.pmwr_frame_text = []
    globalThis.pmwr_sound_controls = []
    globalThis.pmwr_sound_section = []
    globalThis.pmwr_model_link = []
    globalThis.pmwr_model_sub_link = []
    globalThis.pmwr_wtf = []
    globalThis.pmwr_unknown = []
    globalThis.pmwr_unknown_00 = []
    globalThis.pmwr_unknown_00_04_04t1 = []
    globalThis.pmwr_unknown_00_04_04t5 = []
    globalThis.pmwr_unknown_00_04_04t5_28_04_00 = []
    globalThis.pmwr_activator = []
    globalThis.pmwr_activator_248_04_04t0_04 = []
    globalThis.pmwr_flag = []
    globalThis.pmwr_var = []
    globalThis.pmwr_gate = []
    globalThis.pmwr_strange = []
    globalThis.pmwr_object = []
    globalThis.pmwr_um = []
    globalThis.pmwr_world_settings = []
    globalThis.pmwr_world_20_12t0 = []
    globalThis.pmwr_world_20_12t1 = []
    globalThis.pmwr_world_20_12t4 = []
    globalThis.pmwr_world_20_12t8 = []
    globalThis.pmwr_world_20_12t10 = []
    globalThis.pmwr_world_20_12t11 = []
    globalThis.pmwr_world_20_12t13 = []
    globalThis.pmwr_world_20_12t14 = []
    globalThis.pmwr_world_20_12t15 = []
    globalThis.pmwr_world_20_12t8_76t8_04 = []
    globalThis.pmwr_world_20_12t8_76t8_08 = []
    globalThis.pmwr_model_animation_1 = []
    globalThis.pmwr_model_animation_2 = []
    globalThis.pmwr_models = []
    globalThis.pmwr_mysterious = []
    globalThis.pmwr_mysterious_04t9 = []
    globalThis.pmwr_world_20_12t0 = []
    globalThis.pmwr_world_20_12t1 = []
    globalThis.pmwr_world_20_12t2 = []
    globalThis.pmwr_world_20_12t3 = []
    globalThis.pmwr_world_20_12t4 = []
    globalThis.pmwr_world_20_12t5 = []
    globalThis.pmwr_world_20_12t8 = []
    globalThis.pmwr_world_20_12t10 = []
    globalThis.pmwr_world_20_12t11 = []
    globalThis.pmwr_world_20_12t13 = []
    globalThis.pmwr_world_20_12t14 = []
    globalThis.pmwr_world_20_12t15 = []
    globalThis.pmwr_car_00_180_04_84 = []
    globalThis.pmwr_car_00_180 = []
    globalThis.pmwr_car_00_192_16 = []
    globalThis.pmwr_car_00_184 = []
    globalThis.pmwr_unknown_00_04_04t2 = []
    globalThis.pmwr_activator_248_32_72_08t18_08_04t0 = []
    globalThis.pmwr_object_32t15 = []

    director_offset = o
    g.datapack_end = u32(director_offset + 16) + u32(director_offset + 20) + end_offset
    g.type = u32(o + 4)

    let next_offset = o + 24

    // g.file_dir_type = return_directory_type(u32(o + 4));

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
        get_pmwr_datapack(u32(o + 20) + end_offset)
        break
    }

    print_logarray(log_array)

}

function get_pmwr_datapack(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], o)
    offset_mid = 0
    let end_datapack = o + 120

    let offset_after_datapack = get_datapack_end(o)
    let offset_after_pmwr_audio = offset_after_datapack + divisible(u32(o + 8) * 4, 32)

    g.datapack_offset = o
    after_datapack = end_datapack
    if (g.console === 'psp') {
        end_datapack = o + 128
        if (u32(o + 8) || u32(o + 4)) {
            end_datapack += divisible(u32(o + 8) * 4, 32)
            end_audio = end_datapack
            end_datapack += u32(o + 4)
        }
        offset_mid = end_datapack + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)
    } else if (g.console === 'ps2') {
        end_datapack = divisible(end_datapack, 2048)
        after_datapack = end_datapack
        if (u32(o + 8) || u32(o + 4)) {
            end_datapack += divisible(u32(o + 8) * 4, 32)
            end_audio = end_datapack
            end_datapack += u32(o + 4)

            end_datapack = divisible(end_datapack, 2048)
        }
        offset_mid = end_datapack + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)
    } else {
        end_datapack = o + 120
        if (u32(o + 8) || u32(o + 4)) {
            end_datapack += divisible(u32(o + 8) * 4, 32)
            end_datapack += u32(o + 4)
        }
        //calulate end of datapack
        let offset_index_patch = offset_after_pmwr_audio + u32(o + 4)

        offset_mid = offset_index_patch + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)

    }

    //pmwr_audio
    let padding_test = get_pmwr_audio(offset_after_datapack, u32(o + 8))

    // psp only
    //pmwr_index_patch_list
    // get_pmwr_index_patch_list(offset_index_patch)

    pmwr_get_index_patch_list(o, end_datapack)
    pmwr_get_offset_patch_list(o, offset_mid + u32(o))

    globalThis.old_log_array = structuredClone(log_array)

    //ordered
    get_pmwr_ordered(offset_mid)

    if (g.console === "psp") {
        for (let i = 0; i < u32(o + 80); i++) {
            get_pmwr_datapack_84(u32(o + 84) + (i * 8) + offset_mid)
        }
    }

    return

    function get_datapack_end(o) {
        // ü(3, [u32, 0], o)
        if (g.console === "ps2") {
            o = divisible(o + 120, 2048)
        } else if (g.console === "psp") {
            o += 128
        } else if (g.game === "snoopy_vs_the_red_baron") {
            o += 128
        } else if (g.datapack_version === "geometry") {
            o += 84
        } else {
            o += 120
        }
        return o
    }

    function get_pmwr_index_patch_list(o) {
        // ü(3, [u32, 0], o)
        let pmwr_texture_animation_offset = o + (u32(g.datapack_offset + 16) * 8)
        let sound_offset = o + ((u32(g.datapack_offset + 16) + u32(g.datapack_offset + 52)) * 8)

    }
}

function get_pmwr_datapack_84(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4], o)

    ä(pmwr_frame_text, u32(o + 4), get_pmwr_frame_text)

}

function pmwr_get_index_patch_list(o, patch_offset) {
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

function pmwr_get_offset_patch_list(o, patch_offset) {
    patchlistoffset = patch_offset
    log_array.p_model.offset = patchlistoffset
    let type_offset = 6
    if (g.console === "gamecube") {
        type_offset = 4
    }

    for (let i = 0; i < u32(o + 56); i++) {
        log_array.p_model.array.push(u32(patchlistoffset + (i * 8)))
        log_array.p_model.array_type.push(u16(patchlistoffset + (i * 8) + type_offset))
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

function get_pmwr_ordered(o) {
    // ü(3, [u32, 0], o)

    get_pmwr_offset_patch_list(u32(g.datapack_offset) + offset_mid)
    if (g.console === "psp") {
        for (let i = 0; i < u32(g.datapack_offset + 20); i++) {
            get_pmwr_texture_psp(u32(g.datapack_offset + 24) + (i * 64) + offset_mid)
        }

    } else {
        get_pmwr_texture(u32(g.datapack_offset + 24) + offset_mid)
    }
    for (let i = 0; i < u32(g.datapack_offset + 48); i++) {
        get_pmwr_texture_animation_section(u32(g.datapack_offset + 60) + offset_mid + (i * 12))
    }
    get_pmwr_offset_patch_list(u32(g.datapack_offset) + offset_mid)

    switch (g.type) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 9:
    case 10:
        get_pmwr_basic(o)
        break
    case 8:
        get_pmwr_share(o)
        break
    case 4:
        get_pmwr_world(o, 0)
        break
    default:
        console.log("later")
    }

    return

}
function get_pmwr_offset_patch_list(o) {// ü(3, [u32, 0], o)}
}

function get_pmwr_basic(o) {
    if (u32(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_basic_4)

    return

    function get_pmwr_basic_4(o) {
        if (u32(o + 8) || u32(o + 12))
            ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
        switch (g.type) {
        case 0:
            ä(pmwr_car, u32(o), get_pmwr_car)
            break
        case 1:
            ä(pmwr_interface, u32(o), get_pmwr_interface)
            break
        case 3:
            ä(pmwr_link, u32(o), get_pmwr_link)
            break
        default:
            console.log("later")
        }

    }

}

function get_pmwr_world(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u8, 96, u8, 97, u8, 98, u8, 99, u8, 100, u8, 101, u8, 102, u8, 103, u8, 104, u8, 105, u8, 106, u8, 107, u8, 108, u8, 109, u8, 110, u8, 111, u8, 112, u8, 113, u8, 114, u8, 115, u32, 116, u32, 120, u8, 124, u8, 125, u8, 126, u8, 127, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u8, 152, u8, 153, u8, 154, u8, 155, u32, 156, ], o)
    ä(pmwr_world_settings, u32(o + 0), get_pmwr_world_settings)

    ö(u32(o + 4), get_pmwr_collision)
    ö(u32(o + 12), get_pmwr_world_12)

    for (let ii = 0; ii < u32(o + 16); ii++) {
        ö(u32(o + 20) + (ii * 16), get_pmwr_world_20)
    }

    ö(u32(o + 8), get_pmwr_world_08)

    // for (let i = 0; i < g.temp72arry.length; i++) {
    //     get_pmwr_world_20_12t8_72(g.temp72arry[i][0], g.temp72arry[i][1]['section_72'])
    // }

    ö(u32(o + 24), get_pmwr_world_24)
    for (let ii = 0; ii < u32(o + 28); ii++) {
        ö(u32(o + 32) + (ii * 4), get_pmwr_world_32)
    }

}
function get_pmwr_collision(o) {
    // ü(3, [u32, 0], o)
    ;// switch(u32(o + 88)){
    //    case 0:
    // ö(u32(o + 32), get_pmwr_collision_32t0)
    //    break;
    //    case 1:
    // ö(u32(o + 32), get_pmwr_collision_32t1)
    //    break;

    let typefunction
    switch (u32(o + 88)) {
    case 0:
        typefunction = get_pmwr_collision_32t0
        break;
    case 1:
        typefunction = get_pmwr_collision_32t1
        break;
    }

    for (let i = 0; i < u32(o + 68); i++) {
        ö(u32(o + 32) + (i * 48), typefunction)
    }

    for (let i = 0; i < (u32(o + 52) * u32(o + 56) * u32(o + 60)); i++) {
        ö(u32(o + 64) + (i * 4), get_pmwr_collision_64)
    }

    for (let i = 0; i < u32(o + 72); i++) {
        ö(u32(o + 76) + (i * 32), get_pmwr_collision_76)
    }

    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 64), get_pmwr_collision_84)
    }
}

function get_pmwr_collision_76(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 16), get_pmwr_collision_76_16)

}
function get_pmwr_collision_76_16(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_collision_84(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_collision_64(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_collision_32t0(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 44); ii++) {
        ö(u32(o + 40) + (ii * 4), get_pmwr_collision_32t0_40)
    }

}
function get_pmwr_collision_32t0_40(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_collision_32t1(o) {
    // ü(3, [u32, 0], o)
    if (u32(o + 32)) {
        for (let ii = 0; ii < u32(o + 32); ii++) {
            ö(u32(o + 36) + (ii * 2), get_pmwr_collision_32t1_36)
        }
    } else {
        ö(u32(o + 36), get_pmwr_collision_32t1_36Itemp)
    }

    if (u32(o + 44)) {
        for (let ii = 0; ii < u32(o + 44); ii++) {
            ö(u32(o + 40) + (ii * 12), get_pmwr_collision_32t1_40)
        }
    } else {
        ö(u32(o + 40), get_pmwr_collision_32t1_40temp)
    }

}
function get_pmwr_collision_32t1_36Itemp(o) {}
function get_pmwr_collision_32t1_40temp(o) {}

function get_pmwr_collision_32t1_40(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 4); ii++) {
        ö(u32(o + 0) + (ii * 32), get_pmwr_collision_32t1_40_00)
    }

}
function get_pmwr_collision_32t1_40_00(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_collision_32t1_36(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_world_20(o) {
    // ü(3, [u32, 0], o)
    if (u32(o + 4) && u32(o + 8)) {

        let typefunction
        let typeamount

        switch (u32(o + 0)) {
        case 0:
            typefunction = get_pmwr_world_20_12t0
            typeamount = 128
            break;
        case 1:
            typefunction = get_pmwr_world_20_12t1
            typeamount = 96
            break;
        case 2:
            typefunction = get_pmwr_world_20_12t2
            typeamount = 112
            break;
        case 3:
            typefunction = get_pmwr_world_20_12t3
            typeamount = 64
            break;
        case 4:
            typefunction = get_pmwr_world_20_12t4
            typeamount = 144
            break;
        case 5:
            typefunction = get_pmwr_world_20_12t5
            typeamount = 112
            break;
        case 8:
            typefunction = get_pmwr_world_20_12t8
            typeamount = 80
            break;
        case 10:
            typefunction = get_pmwr_world_20_12t10
            typeamount = 96
            break;
        case 11:
            typefunction = get_pmwr_world_20_12t11
            typeamount = 80
            break;
        case 13:
            typefunction = get_pmwr_world_20_12t13
            typeamount = 96
            break;
        case 14:
            typefunction = get_pmwr_world_20_12t14
            typeamount = 80
            break;
        case 15:
            typefunction = get_pmwr_world_20_12t15
            typeamount = 80
            break;
        default:
            console.log("??")
            break
        }
        for (let ii = 0; ii < u32(o + 8); ii++) {
            ö(u32(o + 12) + (ii * typeamount), typefunction)
        }

    }
}
function get_type_entry_header(o) {
    // ü(3, [u32, 0], o)
    return {
        u32_00: u32(o + 0),
        u16_04: u16(o + 4),
        u16_06: u16(o + 6),
        u16_12: u16(o + 12),
        u16_14: u16(o + 14),
        u16_16: u16(o + 16),
        u16_18: u16(o + 18),
    }
}

function get_pmwr_world_20_12t0(o) {// ü(3, [u32, 0], o)

}
function get_pmwr_world_20_12t1(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_model_animation_1, u32(o + 64), get_pmwr_model_animation_1)
    ä(pmwr_idk, u32(o + 72), get_pmwr_idk)

}
function get_pmwr_world_20_12t2(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 56), get_pmwr_world_20_12t2_56)

    for (let ii = 0; ii < u32(o + 60); ii++) {
        ö(u32(o + 64) + (ii * 4), get_pmwr_world_20_12t2_64)
    }
    globalThis.type_u32_get_pmwr_world_20_12t2_72 = u32(o + 40)
    ö(u32(o + 72), get_pmwr_world_20_12t2_72)
    ö(u32(o + 76), get_pmwr_world_20_12t2_76)

    for (let ii = 0; ii < u32(o + 104); ii++) {
        ö(u32(o + 100) + (ii * 4), get_pmwr_world_20_12t2_100)
    }

}
function get_pmwr_world_20_12t2_100(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_world_20_12t2_56(o, a) {

    ;// ;

}
function get_pmwr_world_20_12t2_64(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_world_20_12t2_76(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_pmwr_world_20_12t2_76_12)
    }

}
function get_pmwr_world_20_12t2_76_12(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_world_20_12t2_76_12_0)

}
function get_pmwr_world_20_12t2_76_12_0(o) {// ü(3, [u32, 0], o)
// let check_val = o
// if (pmwr_world_20_12t13.includes(check_val)) {
//     return
// }
// if (pmwr_world_20_12t14.includes(check_val)) {
//     return
// }
// if (pmwr_world_20_12t15.includes(check_val)) {
//     return
// }
// console.log(o)

}
function get_pmwr_world_20_12t2_72(o) {
    ;for (let i = 0; i < type_u32_get_pmwr_world_20_12t2_72; i++) {
        ö(u32(o + 0) + (i * 4), get_pmwr_world_20_12t2_72_00)
    }

}
function get_pmwr_world_20_12t2_72_00(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_world_20_12t5, u32(o + 0), get_pmwr_world_20_12t5)

}
function get_pmwr_world_20_12t3(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_sound_controls, u32(o + 48), get_pmwr_sound_controls)
}
function get_pmwr_world_20_12t4(o) {
    // ü(3, [u32, 0], o)

    ä(pmwr_unknown_00, u32(o + 96), get_pmwr_unknown_00)
    ä(pmwr_interface, u32(o + 104), get_pmwr_interface)
    switch (u32(o + 120)) {
    case 0:
        ä(pmwr_world_20_12t4, u32(o + 128), get_pmwr_world_20_12t4)
        break;
    case 1:
        ö(u32(o + 128), get_pmwr_world_20_12t4_128t1)
        break;
    }

}
function get_pmwr_world_20_12t4_128t1(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_world_20_12t5(o) {
    // ü(3, [u32, 0], o)
    ß('p_model', o, 100)

}
function get_pmwr_world_20_12t8(o) {
    // ü(3, [u32, 0], o)

    // console.log(u32(o + 36))

    switch (u32(o + 36)) {
    case 1:
        ö(u32(o + 76), get_pmwr_world_20_12t8_76t1)
        break;
    case 7:
        ö(u32(o + 76), get_pmwr_world_20_12t8_76t7)
        break;
    case 8:
        ö(u32(o + 76), get_pmwr_world_20_12t8_76t8)
        break;
    }

    ö(u32(o + 72), get_pmwr_world_20_12t8_72)

}
function get_pmwr_world_20_12t8_72(o) {// ü(3, [u32, 0], o)

}
function get_pmwr_world_20_12t8_76t1(o) {// ü(3, [u32, 0], o)

}
function get_pmwr_world_20_12t8_76t7(o) {// ü(3, [u32, 0], o)

}
function get_pmwr_world_20_12t8_76t8(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_world_20_12t8_76t8_04, u32(o + 4), get_pmwr_world_20_12t8_76t8_04)
    ä(pmwr_world_20_12t8_76t8_08, u32(o + 8), get_pmwr_world_20_12t8_76t8_08)

}
function get_pmwr_world_20_12t8_76t8_04(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}

function get_pmwr_world_20_12t8_76t8_08(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_unknown_00, u32(o + 16), get_pmwr_unknown_00)
    ä(pmwr_unknown_00, u32(o + 20), get_pmwr_unknown_00)
    // offset? 

    // 32 bytes;

}

function get_pmwr_world_20_12t10(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_activator, u32(o + 64), get_pmwr_activator)

}
function get_pmwr_world_20_12t11(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_world_20_12t0, u32(o + 68), get_pmwr_world_20_12t0)

}
function get_pmwr_world_20_12t13(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_idk, u32(o + 64), get_pmwr_idk)

}
function get_pmwr_world_20_12t14(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_strange, u32(o + 64), get_pmwr_strange)

}
function get_pmwr_world_20_12t15(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_object, u32(o + 56), get_pmwr_object)

}
function get_pmwr_world_08(o) {
    // ü(3, [u32, 0], o)

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 16) + (i * 80), get_pmwr_world_08_16)
    }

    if (u32(o + 24)) {
        for (let i = 0; i < u32(o + 24); i++) {
            ö(u32(o + 20) + (i * 4), get_pmwr_world_08_20)
        }
    } else {
        ö(u32(o + 20), get_pmwr_world_08_20temp)
    }

}
function get_pmwr_world_08_20temp(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_world_08_20(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_world_08_16(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 8); ii++) {
        ö(u32(o + 12) + (ii * 4), get_pmwr_world_08_16_12)
    }

    for (let ii = 0; ii < u32(o + 56); ii++) {
        ö(u32(o + 60) + (ii * 4), get_pmwr_world_08_16_12)
    }

    for (let ii = 0; ii < u32(o + 64); ii++) {
        ö(u32(o + 68) + (ii * 4), get_pmwr_world_08_16_12)
    }

}

function get_pmwr_world_08_16_12(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_world_20_12t8, u32(o + 0), get_pmwr_world_20_12t8)

}
function get_pmwr_world_12(o) {
    // ü(3, [u32, 0], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 0) + (i * 128), get_pmwr_world_12_00)
    }

}
function get_pmwr_world_12_00(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 48); ii++) {
        ö(u32(o + 52) + (ii * 4), get_pmwr_world_12_00_52)
    }

    for (let ii = 0; ii < u32(o + 48); ii++) {
        ö(u32(o + 56) + (ii * 4), get_pmwr_world_12_00_56)
    }

    for (let ii = 0; ii < u32(o + 60); ii++) {
        ö(u32(o + 64) + (ii * 4), get_pmwr_world_12_00_64)
    }
}
function get_pmwr_world_12_00_64(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_world_12_00_52(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_world_12_00_56(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_world_32(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_gate, u32(o + 0), get_pmwr_gate)

}
function get_pmwr_world_24(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_world_24_04)
    }

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_pmwr_world_24_12)
    }

}
function get_pmwr_world_24_04(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_flag, u32(o + 0), get_pmwr_flag)

}
function get_pmwr_world_24_12(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_var, u32(o + 0), get_pmwr_var)

}

function get_pmwr_texture(o) {
    // if (g.console === "psp") {
    //     get_pmwr_texture_psp(o)
    //     return
    // }
    let e = o + (u32(g.datapack_offset + 20) * 64)
    for (let i = 0; i < u32(g.datapack_offset + 20); i++) {
        ö(u32(o + 4 + (i * 64)), get_pmwr_texture_4)
        ö(u32(o + 8 + (i * 64)), get_pmwr_texture_8)
    }
    return e

}
function get_pmwr_texture_4(o) {// ü(3, [u32, 0], o)
}
function get_pmwr_texture_8(o) {// ü(3, [u32, 0], o)
}

function get_pmwr_texture_psp(o) {
    // if (u8(o + 8) || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ö(u32(o + 4), get_pmwr_texture_psp_4)

}

function get_pmwr_texture_psp_4(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ö(u32(o + 0), get_pmwr_texture_psp_4_0)
    ö(u32(o + 4), get_pmwr_texture_psp_4_4)

}

function get_pmwr_texture_psp_4_0(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_texture_psp_4_4(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_texture_animation_section(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_pmwr_texture_anim_1)

}

function get_pmwr_pmwr_texture_anim_1(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_pmwr_texture_anim_1_1)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_pmwr_pmwr_texture_anim_1_2)
    }

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 16), get_pmwr_pmwr_texture_anim_1_3)
    }

    // 48 bytes;

}
function get_pmwr_pmwr_texture_anim_1_1(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_pmwr_texture_anim_1_1_1)
    }

    // 32 bytes;

}
function get_pmwr_pmwr_texture_anim_1_1_1(o) {
    // ü(3, [u32, 0], o)
    ;ß('p_texture', o, 0)

}
function get_pmwr_pmwr_texture_anim_1_2(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_pmwr_texture_anim_1_3(o) {
    // ü(3, [u32, 0], o)
    ;

}

function get_pmwr_audio(o, a) {

    const after_offset_list = o + divisible(a * 4, 32)
    let padding_test = after_offset_list + (a * 32)

    for (let i = 0; i < a; i++) {
        padding_test = get_pmwr_audio_00(after_offset_list + u32(o + (i * 4)), i)
    }

    return padding_test

    function get_pmwr_audio_00(o) {// ü(3, [u32, 0], o)

    // return start_offset + u32(o + 4)

    }

}

function get_pmwr_share(o) {
    for (let i = 0, ii = 0; i < u32(o) && u32(o + i) !== 0; i += 4,
    ii++) {
        ß('p_model', o, i)
    }

    if (g.file_name.toLowerCase().includes("gshared")) {
        let set_offset = 0
        if (g.console === "pc") {
            set_offset = 2380244
        } else if (g.console === "gamecube") {
            set_offset = 1076836
        } else if (g.console === "psp") {
            set_offset = 720012
        } else if (g.console === "ps2") {
            set_offset = 843056
        }

        get_pmwr_share_end(set_offset)
    }

}
function get_pmwr_share_end(o) {
    if (u32(o + 4) !== 62 || u32(o + 12) !== 14 || u32(o + 20) !== 7 || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_pmwr_share_end_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_pmwr_share_end_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 4), get_pmwr_share_end_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 4), get_pmwr_share_end_24)
    }

}

function get_pmwr_share_end_0(o) {// ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
// string
}
function get_pmwr_share_end_8(o) {
    /*ü(1,], o)*/
    ß('p_texture', o, 0)
}
function get_pmwr_share_end_16(o) {
    /*ü(1,], o)*/
    ß('p_sound', o, 0)
}
function get_pmwr_share_end_24(o) {
    /*ü(1,], o)*/
    ß('p_model', o, 0)
}

function get_pmwr_models(o, index) {
    ö(u32(o + 8), get_pmwr_frame_text_0)

    for (let i = 0; i < u16(o + 2); i++) {
        ö(u32(o + 4) + (i * 8), get_models_04)
        ö(u32(o + 12) + (i * 4), get_models_12)
    }

}

function get_models_04(o) {
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_models_04_4)
    }
}

function get_models_04_4(o) {
    if (g.console === "pc") {
        ö(u32(o + 0), get_models_04_4_0_pc)
    } else if (g.console === "gamecube") {
        ö(u32(o + 0), get_models_04_4_0_gc)
    } else if (g.console === "psp") {
        ö(u32(o + 0), get_models_04_4_0_psp)
    } else if (g.console === "ps2") {
        ö(u32(o + 0), get_models_04_4_0_ps2)
    }

}

function get_models_04_4_0_psp(o) {
    if (u32(o + 4) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u32(o + 96) || u32(o + 104) || u32(o + 108))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, f32, 76, f32, 80, f32, 84, f32, 88, f32, 92, u32, 96, u32, 100, u32, 104, u32, 108], o)
    ß('p_texture', o, 40)
    ß('p_animation', o, 24)

    // ö(u32(o + 100), get_models_04_4_0_psp_100)
    switch (u32(o + 60)) {
    case 0:
        ö(u32(o + 100), get_models_04_4_0_psp_100t0)
        break
    default:
        for (let i = 0; i < u32(o + 60); i++) {
            ö(u32(o + 100) + (i * 36), get_models_04_4_0_psp_100trest)
        }
    }

}
function get_models_04_4_0_psp_100t0(o) {
    if (u8(o + 19) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_models_04_4_0_psp_100t0_0)
    ö(u32(o + 4), get_models_04_4_0_psp_100t0_4)
    ö(u32(o + 8), get_models_04_4_0_psp_100t0_8)

}

function get_models_04_4_0_psp_100t0_0(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_psp_100t0_4(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_psp_100t0_8(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_models_04_4_0_psp_100trest(o) {
    if (u8(o + 5))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32], o)

    ö(u32(o + 32), get_models_04_4_0_psp_100trest_32)

}

function get_models_04_4_0_psp_100trest_32(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_models_04_4_0_psp_100t2(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
}
function get_models_04_4_0_psp_100t3(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u8, 80, u8, 81, u8, 82, u8, 83, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, ], o)
}

function get_models_04_4_0_psp_100(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_models_04_4_0_ps2(o) {
    switch (u32(o)) {
    case 0:
        get_models_04_4_0_ps2_t0(o)
        break
    case 1:
        get_models_04_4_0_ps2_t1(o)
        break
    case 2:
        get_models_04_4_0_ps2_t2(o)
        break
    }
}
function get_models_04_4_0_ps2_t0(o) {
    if (u32(o + 0) || u32(o + 20) || u32(o + 32) || u32(o + 36))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    ß('p_texture', o, 40)
    ß('p_animation', o, 24)

    ö(u32(o + 64), get_models_04_4_0_ps2_t0_64)
    ö(u32(o + 68), get_models_04_4_0_ps2_t0_68)
    ö(u32(o + 72), get_models_04_4_0_ps2_t0_72)
    ö(u32(o + 76), get_models_04_4_0_ps2_t0_76)

}

function get_models_04_4_0_ps2_t0_64(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_ps2_t0_68(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_ps2_t0_72(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_ps2_t0_76(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_models_04_4_0_ps2_t1(o) {
    if (u32(o + 0) !== 1 || u8(o + 14) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u32(o + 56) !== 224 || u32(o + 60) !== 1 || u32(o + 76) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)
    ß('p_animation', o, 24)
    ß('p_texture', o, 40)

    ö(u32(o + 64), get_models_04_4_0_ps2_t1_64)
    ö(u32(o + 68), get_models_04_4_0_ps2_t1_68)
    ö(u32(o + 72), get_models_04_4_0_ps2_t1_72)
    ö(u32(o + 80), get_models_04_4_0_ps2_t1_80)

}

function get_models_04_4_0_ps2_t1_64(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_ps2_t1_68(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_ps2_t1_72(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_ps2_t1_80(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_models_04_4_0_ps2_t1_80_8)

}

function get_models_04_4_0_ps2_t1_80_8(o) {// ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, ], o)
}

function get_models_04_4_0_ps2_t2(o) {
    if (u32(o + 0) !== 2 || u32(o + 4) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u32(o + 40) !== 65535 || u32(o + 52) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, f32, 56, f32, 60, f32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)

    ö(u32(o + 72), get_models_04_4_0_ps2_t2_72)
    ö(u32(o + 80), get_models_04_4_0_ps2_t2_80)
    ö(u32(o + 84), get_models_04_4_0_ps2_t2_84)

}

function get_models_04_4_0_ps2_t2_72(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_ps2_t2_80(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_ps2_t2_84(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_models_04_4_0_pc(o) {
    ß('p_animation', o, 24)
    ß('p_animation', o, 36)
    ß('p_texture', o, 40)

    ö(u32(o + 68), get_models_04_4_0_pc_68)
    ö(u32(o + 72), get_models_04_4_0_pc_72)
    ö(u32(o + 76), get_models_04_4_0_pc_76)
    ö(u32(o + 80), get_models_04_4_0_pc_80)
    ö(u32(o + 84), get_models_04_4_0_pc_84)
    ö(u32(o + 92), get_models_04_4_0_pc_92)
}
function get_models_04_4_0_pc_68(o) {// ?
}
function get_models_04_4_0_pc_72(o) {// ?
}
function get_models_04_4_0_pc_76(o) {// ?
}
function get_models_04_4_0_pc_80(o) {// ?
}
function get_models_04_4_0_pc_84(o) {// ?
}
function get_models_04_4_0_pc_92(o) {
    ö(u32(o + 12), get_models_04_4_0_pc_92_12)
}

function get_models_04_4_0_pc_92_12(o) {// ?
}

function get_models_04_4_0_gc(o) {
    if (u32(o + 4) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u16, 84, u16, 86, u32, 88, u32, 92], o)
    ß('p_texture', o, 40)
    ß('p_animation', o, 24)

    ö(u32(o + 60), get_models_04_4_0_gc_60)
    ö(u32(o + 64), get_models_04_4_0_gc_64)
    ö(u32(o + 68), get_models_04_4_0_gc_68)
    ö(u32(o + 72), get_models_04_4_0_gc_72)
    for (let i = 0; i < u16(o + 84); i++) {
        ö(u32(o + 76) + (i * 24), get_models_04_4_0_gc_76)
    }
    ö(u32(o + 80), get_models_04_4_0_gc_80)

}

function get_models_04_4_0_gc_60(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_gc_64(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_gc_68(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_gc_72(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_gc_76(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23], o)

    ö(u32(o + 8), get_models_04_4_0_gc_76_8)
    ö(u32(o + 12), get_models_04_4_0_gc_76_12)
    ö(u32(o + 16), get_models_04_4_0_gc_76_16)

}

function get_models_04_4_0_gc_76_8(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_gc_76_12(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_models_04_4_0_gc_76_16(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_gc_80(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_models_04_4_0_gc_80_0)
    ö(u32(o + 4), get_models_04_4_0_gc_80_4)

}

function get_models_04_4_0_gc_80_0(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_models_04_4_0_gc_80_4(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_models_12(o) {// ?
}

function get_pmwr_model_animation_2(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 16) + (ii * 32), get_pmwr_model_animation_2_1)
    }

}

function get_pmwr_model_animation_2_1(o) {
    // ü(3, [u32, 0], o)
    ;

}
//

function get_pmwr_model_animation_1(o) {
    // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, f32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, f32, 48, u32, 52, f32, 56, u8, 60, u8, 61, u8, 62, u8, 63, ], o)
    if (old_log_array.p_offset.array.includes(o + 24 - offset_mid)) {
        ö(u32(o + 24), get_pmwr_model_animation_1_24)
    }
    if (old_log_array.p_offset.array.includes(o + 28 - offset_mid)) {
        ö(u32(o + 28), get_pmwr_model_animation_1_28)
    }
    if (old_log_array.p_offset.array.includes(o + 32 - offset_mid)) {
        ö(u32(o + 32), get_pmwr_model_animation_1_32)
    }
    if (old_log_array.p_offset.array.includes(o + 36 - offset_mid)) {
        ö(u32(o + 36), get_pmwr_model_animation_1_36)
    }
    if (old_log_array.p_offset.array.includes(o + 44 - offset_mid)) {
        ö(u32(o + 44), get_pmwr_model_animation_1_44)
    }
    if (old_log_array.p_offset.array.includes(o + 52 - offset_mid)) {
        if (g.console === "gamecube") {
            switch (u32(o + 0)) {
            case 1:
                ö(u32(o + 52), get_pmwr_model_animation_1_52t1_gc)
                break
            case 5:
                ö(u32(o + 52), get_pmwr_model_animation_1_52t5_gc)
                break
            default:
                if (u32(o + 52)) {
                    sü(u32, 0, o, 52)
                }
            }

        } else {
            switch (u32(o + 4)) {
            case 291:
            case 35:
                ö(u32(o + 52), get_pmwr_model_animation_1_52t35)
                break;
            case 163:
            case 419:
                ö(u32(o + 52), get_pmwr_model_animation_1_52t163)
                break;
            default:
                console.log(o, "?", u32(o + 4))
            }
        }

    }

}
function get_pmwr_model_animation_1_52t1_gc(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)

    if (old_log_array.p_offset.array.includes(o + 8 - offset_mid)) {
        ö(u32(o + 8), get_pmwr_model_animation_1_52t1_gc_8)
    }
    if (old_log_array.p_offset.array.includes(o + 12 - offset_mid)) {
        ö(u32(o + 12), get_pmwr_model_animation_1_52t1_gc_12)
    }

}

function get_pmwr_model_animation_1_52t1_gc_8(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_model_animation_1_52t1_gc_12(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_model_animation_1_52t5_gc(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32], o)*/

    if (old_log_array.p_offset.array.includes(o + 12 - offset_mid)) {
        ö(u32(o + 12), get_pmwr_model_animation_1_52t5_gc_12)
    }
    if (old_log_array.p_offset.array.includes(o + 16 - offset_mid)) {
        ö(u32(o + 16), get_pmwr_model_animation_1_52t5_gc_16)
    }
    if (old_log_array.p_offset.array.includes(o + 20 - offset_mid)) {
        ö(u32(o + 20), get_pmwr_model_animation_1_52t5_gc_20)
    }
    if (old_log_array.p_offset.array.includes(o + 24 - offset_mid)) {
        ö(u32(o + 24), get_pmwr_model_animation_1_52t5_gc_24)
    }
    if (old_log_array.p_offset.array.includes(o + 28 - offset_mid)) {
        ö(u32(o + 28), get_pmwr_model_animation_1_52t5_gc_28)
    }
    if (old_log_array.p_offset.array.includes(o + 32 - offset_mid)) {
        ö(u32(o + 32), get_pmwr_model_animation_1_52t5_gc_32)
    }

}

function get_pmwr_model_animation_1_52t5_gc_12(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_model_animation_1_52t5_gc_16(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_model_animation_1_52t5_gc_20(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_model_animation_1_52t5_gc_24(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_model_animation_1_52t5_gc_28(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_pmwr_model_animation_1_52t5_gc_32(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_pmwr_model_animation_1_24(o) {// ü(3, [u32, 0], o)
}
function get_pmwr_model_animation_1_28(o) {// ü(3, [u32, 0], o)
}
function get_pmwr_model_animation_1_32(o) {// ü(3, [u32, 0], o)
}
function get_pmwr_model_animation_1_36(o) {// ü(3, [u32, 0], o)
}
function get_pmwr_model_animation_1_44(o) {// ü(3, [u32, 0], o)
}
function get_pmwr_model_animation_1_52t35(o) {
    // ü(3, [u32, 0], o)

    if (old_log_array.p_offset.array.includes(o + 12 - offset_mid)) {
        ö(u32(o + 12), get_pmwr_model_animation_1_52t35_12)
    }
    if (old_log_array.p_offset.array.includes(o + 24 - offset_mid)) {
        ö(u32(o + 24), get_pmwr_model_animation_1_52t35_24)
    }
    if (old_log_array.p_offset.array.includes(o + 20 - offset_mid)) {
        ö(u32(o + 20), get_pmwr_model_animation_1_52t35_20)
    }
    if (old_log_array.p_offset.array.includes(o + 28 - offset_mid)) {
        ö(u32(o + 28), get_pmwr_model_animation_1_52t35_28)
    }
    if (old_log_array.p_offset.array.includes(o + 16 - offset_mid)) {
        ö(u32(o + 16), get_pmwr_model_animation_1_52t35_16)
    }
    if (old_log_array.p_offset.array.includes(o + 32 - offset_mid)) {
        ö(u32(o + 32), get_pmwr_model_animation_1_52t35_32)
    }
}
function get_pmwr_model_animation_1_52t35_12(o) {// ü(3, [u32, 0], o)
}
function get_pmwr_model_animation_1_52t35_24(o) {// ü(3, [u32, 0], o)
}
function get_pmwr_model_animation_1_52t35_20(o) {// ü(3, [u32, 0], o)
}
function get_pmwr_model_animation_1_52t35_28(o) {// ü(3, [u32, 0], o)
}
function get_pmwr_model_animation_1_52t35_16(o) {// ü(3, [u32, 0], o)
}
function get_pmwr_model_animation_1_52t35_32(o) {// ü(3, [u32, 0], o)
}
function get_pmwr_model_animation_1_52t163(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, ], o)
    // ü(3, [u32, 0], o)
    if (old_log_array.p_offset.array.includes(o + 8 - offset_mid)) {
        ö(u32(o + 8), get_pmwr_model_animation_1_52t163_08)
    }
    if (old_log_array.p_offset.array.includes(o + 12 - offset_mid)) {
        ö(u32(o + 12), get_pmwr_model_animation_1_52t163_12)
    }

    // ü(3, [u32, 0], o)
}
function get_pmwr_model_animation_1_52t163_08(o) {// ü(3, [u32, 0], o);
}
function get_pmwr_model_animation_1_52t163_12(o) {// ü(3, [u32, 0], o);
}

function get_pmwr_activator(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_frame_text_0)
    ä(pmwr_model_animation_2, u32(o + 4), get_pmwr_model_animation_2)

    for (let ii = 0; ii < u32(o + 20); ii++) {
        ö(u32(o + 24) + (ii * 24), get_pmwr_activator_24)
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        ö(u32(o + 32) + (ii * 24), get_pmwr_activator_32)
    }
    ö(u32(o + 108), get_pmwr_activator_108)
    ö(u32(o + 116), get_pmwr_activator_116)
    ö(u32(o + 124), get_pmwr_activator_124)
    ö(u32(o + 144), get_pmwr_activator_144)
    ä(pmwr_wtf, u32(o + 148), get_pmwr_wtf)

    for (let ii = 0; ii < u32(o + 172); ii++) {
        ö(u32(o + 176) + (ii * 20), get_pmwr_activator_176)
    }

    for (let ii = 0; ii < u32(o + 180); ii++) {
        ö(u32(o + 184) + (ii * 12), get_pmwr_activator_184)
    }

    for (let ii = 0; ii < u32(o + 188); ii++) {
        ö(u32(o + 192) + (ii * 12), get_pmwr_activator_184)
    }

    for (let ii = 0; ii < u32(o + 208); ii++) {
        ö(u32(o + 212) + (ii * 4), get_pmwr_unknown)
    }

    for (let ii = 0; ii < u32(o + 224); ii++) {
        ö(u32(o + 228) + (ii * 4), get_pmwr_unknown)
    }

    for (let ii = 0; ii < u32(o + 244); ii++) {
        ö(u32(o + 248) + (ii * 36), get_pmwr_activator_248)
    }

    // 256 bytes;

}
function get_pmwr_activator_24(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 0)) {
    case 4:
        ö(u32(o + 4), get_pmwr_activator_24_04t4)
        break;
    case 6:
        ö(u32(o + 4), get_pmwr_activator_24_04t6)
        break;
    }
}
function get_pmwr_activator_24_04t4(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_activator_24_04t4_04)

    // 16 bytes;

}
function get_pmwr_activator_24_04t4_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_24_04t6(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;
    ö(u32(o + 8), get_pmwr_frame_text_0)

}
function get_pmwr_activator_32(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_activator_32_04)

    for (let ii = 0; ii < u32(o + 16); ii++) {
        ö(u32(o + 20) + (ii * 12), get_pmwr_activator_32_20)
    }

}
function get_pmwr_activator_32_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_32_20(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_activator_32_20_08)

}
function get_pmwr_activator_32_20_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_108(o) {
    // ü(3, [u32, 0], o)
    ;switch (u32(o + 4)) {
    case 1:
        ö(u32(o + 8), get_pmwr_activator_108_08t1)
        break;
    case 2:
        ö(u32(o + 8), get_pmwr_activator_108_08t2)
        break;
    }
    // 16 bytes;

}
function get_pmwr_activator_108_08t1(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_108_08t2(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_activator_108_08t2_08)

    // 32 bytes;

}
function get_pmwr_activator_108_08t2_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_116(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_124(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_activator_144(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}
function get_pmwr_activator_176(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 4); ii++) {
        ö(u32(o + 8) + (ii * 12), get_pmwr_activator_176_08)
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        ö(u32(o + 16) + (ii * 12), get_pmwr_activator_176_08)
    }

}
function get_pmwr_activator_176_08(o) {
    // ü(3, [u32, 0], o)
    ;switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 8), get_pmwr_activator_176_08t0)
        break;
    case 13:
        ö(u32(o + 8), get_pmwr_activator_176_08t13)
        break;
    case 19:
        ö(u32(o + 8), get_pmwr_activator_176_08t19)
        break;
    }
}
function get_pmwr_activator_176_08t0(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_176_08t13(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_176_08t19(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_184(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 64), get_pmwr_mysterious)
    }

}
function get_pmwr_activator_248(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 8), get_pmwr_activator_248_04)
    }
    ö(u32(o + 8), get_pmwr_frame_text_0)
    ä(pmwr_sound_controls, u32(o + 20), get_pmwr_sound_controls)

    for (let ii = 0; ii < u32(o + 28); ii++) {
        ö(u32(o + 32) + (ii * 80), get_pmwr_activator_248_32)
    }

}
function get_pmwr_activator_248_04(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 0)) {
    case 0:
        ö(u32(o + 4), get_pmwr_activator_248_04_04t0)
        break;
    case 1:
        ö(u32(o + 4), get_pmwr_activator_248_04_04t1)
        break;
    case 2:
        ö(u32(o + 4), get_pmwr_activator_248_04_04t2)
        break;
    case 3:
        ö(u32(o + 4), get_pmwr_activator_248_04_04t3)
        break;
    case 4:
        ö(u32(o + 4), get_pmwr_activator_248_04_04t4)
        break;
    case 5:
        ö(u32(o + 4), get_pmwr_activator_248_04_04t5)
        break;
    case 6:
        ö(u32(o + 4), get_pmwr_activator_248_04_04t6)
        break;
    case 9:
        ö(u32(o + 4), get_pmwr_activator_248_04_04t9)
        break;
    case 11:
        ö(u32(o + 4), get_pmwr_activator_248_04_04t11)
        break;
    case 12:
        ö(u32(o + 4), get_pmwr_activator_248_04_04t12)
        break;
    case 13:
        ö(u32(o + 4), get_pmwr_activator_248_04_04t13)
        break;
    case 15:
        ö(u32(o + 4), get_pmwr_activator_248_04_04t15)
        break;
    }
}
function get_pmwr_activator_248_04_04t0(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_activator_248_04_04t0_04, u32(o + 4), get_pmwr_activator_248_04_04t0_04)

    // 16 bytes;

}

function get_pmwr_activator_248_04_04t1(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_04_04t2(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_04_04t3(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_04_04t4(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_04_04t5(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_04_04t6(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_04_04t9(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_activator_248_04_04t11(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_04_04t12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_04_04t13(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_activator_248_04_04t13_00)

    // 16 bytes;

}
function get_pmwr_activator_248_04_04t13_00(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_activator_248_04_04t13_00_04)

    // 16 bytes;

}
function get_pmwr_activator_248_04_04t13_00_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_04_04t15(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_frame_text_0);
    for (let ii = 0; ii < u32(o + 4); ii++) {
        ö(u32(o + 8) + (ii * 4), get_pmwr_activator_248_32_08)
    }
    ö(u32(o + 16), get_pmwr_activator_248_32_16)
    ö(u32(o + 32), get_pmwr_activator_248_32_32)
    ö(u32(o + 36), get_pmwr_activator_248_32_36)
    // offset? 
    ö(u32(o + 52), get_pmwr_activator_248_32_52)

    for (let ii = 0; ii < u32(o + 68); ii++) {
        ö(u32(o + 72) + (ii * 12), get_pmwr_activator_248_32_72)
    }
    ö(u32(o + 76), get_pmwr_activator_248_32_76)

}
function get_pmwr_activator_248_32_08(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_model_link, u32(o + 0), get_pmwr_model_link)

}
function get_pmwr_activator_248_32_16(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_32(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_36(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_52(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_72(o) {
    // ü(3, [u32, 0], o)
    ;switch (u32(o + 0)) {
    case 0:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t0)
        break;
    case 2:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t2)
        break;
    case 4:
        ä(pmwr_activator, u32(o + 8), get_pmwr_activator)
        break;
    case 5:
        ä(pmwr_activator, u32(o + 8), get_pmwr_activator)
        break;
    case 8:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t08)
        break;
    case 10:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t10)
        break;
    case 12:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t12)
        break;
    case 13:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t13)
        break;
    case 14:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t14)
        break;
    case 15:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t15)
        break;
    case 16:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t16)
        break;
    case 17:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t17)
        break;
    case 18:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t18)
        break;
    case 20:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t20)
        break;
    case 22:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t22)
        break;
    case 23:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t23)
        break;
    case 25:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t25)
        break;
    case 32:
        ö(u32(o + 8), get_pmwr_activator_248_32_72_08t32)
        break;
    }
}
function get_pmwr_activator_248_32_72_08t0(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_72_08t2(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_72_08t08(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 64), get_pmwr_mysterious)
    }

    // 16 bytes;

}
function get_pmwr_activator_248_32_72_08t10(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_72_08t12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_72_08t13(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_72_08t14(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_activator_248_32_72_08t15(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_72_08t16(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_72_08t17(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 64), get_pmwr_mysterious)
    }

    // 16 bytes;

}
function get_pmwr_activator_248_32_72_08t18(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_activator_248_32_72_08t18_08)

    // 16 bytes;

}
function get_pmwr_activator_248_32_72_08t18_08(o) {
    // ü(3, [u32, 0], o)
    ;switch (u32(o + 0)) {
    case 0:
        ä(pmwr_activator_248_32_72_08t18_08_04t0, u32(o + 4), get_pmwr_activator_248_32_72_08t18_08_04t0)
        break;
    case 6:
        ö(u32(o + 4), get_pmwr_activator_248_32_72_08t18_08_04t6)
        break;
    }
    // 16 bytes;

}
function get_pmwr_activator_248_32_72_08t18_08_04t0(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}

function get_pmwr_activator_248_32_72_08t18_08_04t6(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_activator_248_32_72_08t18_08_04t6_08)

    // 16 bytes;

}
function get_pmwr_activator_248_32_72_08t18_08_04t6_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_72_08t20(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 8)) {
    case 0:
        break;
    case 1:
        ö(u32(o + 0), get_pmwr_activator_248_32_72_08t20_00t1)
        break;
    }
    // 16 bytes;

}

function get_pmwr_activator_248_32_72_08t20_00t1(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_72_08t22(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_activator_248_32_72_08t22_00)

    // 16 bytes;

}
function get_pmwr_activator_248_32_72_08t22_00(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_activator_248_32_72_08t22_00_04)

    // 16 bytes;

}
function get_pmwr_activator_248_32_72_08t22_00_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_72_08t23(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 64), get_pmwr_mysterious)
    }

    // 16 bytes;

}

function get_pmwr_activator_248_32_72_08t25(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_activator_248_32_72_08t25_04)

    // 16 bytes;

}
function get_pmwr_activator_248_32_72_08t25_04(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_activator_248_32_72_08t25_04_08)

    // 16 bytes;

}
function get_pmwr_activator_248_32_72_08t25_04_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_72_08t32(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_activator_248_32_76(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_activator_248_04_04t0_04(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 8), get_pmwr_activator_248_04_04t0_04_04)
    }

    // 48 bytes;

}
function get_pmwr_activator_248_04_04t0_04_04(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_activator_248_04_04t0_04_04_04)

}
function get_pmwr_activator_248_04_04t0_04_04_04(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_activator_248_04_04t0_04_04_04_04)

    // 16 bytes;

}
function get_pmwr_activator_248_04_04t0_04_04_04_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_car(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_car_00)
    // 16 bytes;

}
function get_pmwr_car_00(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_model_animation_2, u32(o + 176), get_pmwr_model_animation_2)

    ä(pmwr_car_00_180, u32(o + 180), get_pmwr_car_00_180)
    ä(pmwr_car_00_184, u32(o + 184), get_pmwr_car_00_184)
    ö(u32(o + 188), get_pmwr_car_00_188)
    ö(u32(o + 192), get_pmwr_car_00_192)
    ö(u32(o + 196), get_pmwr_car_00_196)
    ö(u32(o + 200), get_pmwr_car_00_200)

    for (let i = 0; i < u32(o + 204); i++) {
        ö(u32(o + 208) + (i * 8), get_pmwr_car_00_208)
    }

    for (let i = 0; i < u32(o + 212); i++) {
        ö(u32(o + 216) + (i * 12), get_pmwr_car_00_216)
    }

    for (let i = 0; i < u32(o + 220); i++) {
        ö(u32(o + 224) + (i * 12), get_pmwr_car_00_216)
    }

    for (let i = 0; i < u32(o + 228); i++) {
        ö(u32(o + 232) + (i * 4), get_pmwr_unknown)
    }

    // 240 bytes;

}
function get_pmwr_car_00_180(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_car_00_180_00)
    ö(u32(o + 4), get_pmwr_car_00_180_04)
    ä(pmwr_sound_section, u32(o + 8), get_pmwr_sound_section)
    ä(pmwr_sound_section, u32(o + 12), get_pmwr_sound_section)

    for (let ii = 0; ii < u32(o + 16); ii++) {
        ö(u32(o + 20) + (ii * 8), get_pmwr_car_00_180_20)
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        ö(u32(o + 28) + (ii * 8), get_pmwr_car_00_180_20)
    }

    for (let ii = 0; ii < u32(o + 32); ii++) {
        ö(u32(o + 36) + (ii * 8), get_pmwr_car_00_180_20)
    }

    for (let ii = 0; ii < u32(o + 40); ii++) {
        ö(u32(o + 44) + (ii * 8), get_pmwr_car_00_180_20)
    }

    // 48 bytes;

}
function get_pmwr_car_00_180_00(o) {
    // ü(3, [u32, 0], o)
    ß('p_texture', o, 4)
    ö(u32(o + 8), get_pmwr_car_00_180_00_08)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 20), get_pmwr_car_00_180_00_16)
    }
    ä(pmwr_unknown_00, u32(o + 20), get_pmwr_unknown_00)
    ä(pmwr_unknown_00, u32(o + 28), get_pmwr_unknown_00)
    ä(pmwr_unknown_00, u32(o + 32), get_pmwr_unknown_00)
    ä(pmwr_unknown_00, u32(o + 36), get_pmwr_unknown_00)

    // 48 bytes;

}
function get_pmwr_car_00_180_00_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_car_00_180_00_16(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_car_00_180_00_16_08)
    ö(u32(o + 12), get_pmwr_car_00_180_00_16_12)
    ö(u32(o + 16), get_pmwr_car_00_180_00_16_12)

}
function get_pmwr_car_00_180_00_16_08(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}
function get_pmwr_car_00_180_00_16_12(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 64), get_pmwr_mysterious)
    }

    // 16 bytes;

}
function get_pmwr_car_00_180_04(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 56), get_pmwr_car_00_180_04_56)
    ö(u32(o + 64), get_pmwr_car_00_180_04_56)
    ä(pmwr_unknown_00, u32(o + 68), get_pmwr_unknown_00)
    ö(u32(o + 80), get_pmwr_car_00_180_04_80)

    ä(pmwr_car_00_180_04_84, u32(o + 84), get_pmwr_car_00_180_04_84)
    ä(pmwr_car_00_180_04_84, u32(o + 88), get_pmwr_car_00_180_04_84)

    ö(u32(o + 92), get_pmwr_car_00_180_04_92)

    // 96 bytes;

}
function get_pmwr_car_00_180_04_56(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}
function get_pmwr_car_00_180_04_80(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_unknown_00, u32(o + 16), get_pmwr_unknown_00)

    // 32 bytes;

}
function get_pmwr_car_00_180_04_84(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_car_00_180_04_92(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_car_00_180_20(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 0)) {
    case 1:
        ö(u32(o + 4), get_pmwr_car_00_180_20_04t1)
        break;
    case 3:
        ö(u32(o + 4), get_pmwr_car_00_180_20_04t3)
        break;
    }
}
function get_pmwr_car_00_180_20_04t1(o) {
    // ü(3, [u32, 0], o)
    ;// 64 bytes;

}
function get_pmwr_car_00_180_20_04t3(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_car_00_184(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_car_00_184_04)

    // 16 bytes;

}
function get_pmwr_car_00_184_04(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_car_00_184_04_00)
    ö(u32(o + 4), get_pmwr_car_00_184_04_04)
    ö(u32(o + 8), get_pmwr_car_00_184_04_08)

    // 64 bytes;

}
function get_pmwr_car_00_184_04_00(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 16), get_pmwr_car_00_184_04_00_16)
    ä(pmwr_gate, u32(o + 44), get_pmwr_gate)

    // 80 bytes;

}
function get_pmwr_car_00_184_04_00_16(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}
function get_pmwr_car_00_184_04_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_car_00_184_04_08(o) {
    // ü(3, [u32, 0], o)
    ;// 96 bytes;

}
function get_pmwr_car_00_188(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_model_animation_2, u32(o + 0), get_pmwr_model_animation_2)
    ä(pmwr_model_link, u32(o + 4), get_pmwr_model_link)
    ä(pmwr_model_animation_1, u32(o + 8), get_pmwr_model_animation_1)
    ä(pmwr_model_animation_1, u32(o + 12), get_pmwr_model_animation_1)
    ä(pmwr_model_animation_1, u32(o + 16), get_pmwr_model_animation_1)
    ä(pmwr_model_animation_1, u32(o + 24), get_pmwr_model_animation_1)

    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 8), get_pmwr_car_00_188_52)
    }

    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 20), get_pmwr_car_00_188_60)
    }

    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 32), get_pmwr_car_00_188_68)
    }

    for (let i = 0; i < u32(o + 72); i++) {
        ö(u32(o + 76) + (i * 32), get_pmwr_car_00_188_68)
    }

    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 32), get_pmwr_car_00_188_68)
    }

    // 128 bytes;

}
function get_pmwr_car_00_188_52(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_car_00_188_52_04)

}
function get_pmwr_car_00_188_52_04(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_car_00_188_52_04_04)
    }

    // 16 bytes;

}
function get_pmwr_car_00_188_52_04_04(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_model_link, u32(o + 0), get_pmwr_model_link)

}
function get_pmwr_car_00_188_60(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_car_00_188_68(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_car_00_192(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_car_00_192_16, u32(o + 16), get_pmwr_car_00_192_16)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_pmwr_car_00_192_24)
    }
    ä(pmwr_wtf, u32(o + 32), get_pmwr_wtf)

    // 48 bytes;

}
function get_pmwr_car_00_192_16(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}

function get_pmwr_car_00_192_24(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_car_00_196(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_sound_section, u32(o + 0), get_pmwr_sound_section)
    ä(pmwr_sound_section, u32(o + 8), get_pmwr_sound_section)

    // 32 bytes;

}
function get_pmwr_car_00_200(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_interface, u32(o + 0), get_pmwr_interface)
    ä(pmwr_interface, u32(o + 4), get_pmwr_interface)
    ä(pmwr_interface, u32(o + 8), get_pmwr_interface)
    ä(pmwr_interface, u32(o + 12), get_pmwr_interface)
    ä(pmwr_interface, u32(o + 16), get_pmwr_interface)
    ä(pmwr_interface, u32(o + 20), get_pmwr_interface)

    // 32 bytes;

}
function get_pmwr_car_00_208(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 32), get_pmwr_car_00_208_04)
    }

}
function get_pmwr_car_00_208_04(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_car_00_216(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 64), get_pmwr_mysterious)
    }

}

function get_pmwr_flag(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_frame_text_0);
    switch (u8(o + 8)) {
    case 2:
        ö(u32(o + 12), get_pmwr_flag_12t2)
        break;
    case 3:
        ö(u32(o + 12), get_pmwr_flag_12t3)
        break;
    case 4:
        ö(u32(o + 12), get_pmwr_flag_12t4)
        break;
    }

    // 48 bytes;

}
function get_pmwr_flag_12t2(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_flag_12t3(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 12), get_pmwr_flag_12t3_12)

    // 16 bytes;

}
function get_pmwr_flag_12t3_12(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_flag_12t4(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_frame_font(o) {
    // ü(3, [u32, 0], o)
    ß('p_texture', o, 0)

    ö(u32(o + 28), get_pmwr_frame_font_28)

    for (let ii = 0; ii < u32(o + 32); ii++) {
        ö(u32(o + 36) + (ii * 12), get_pmwr_frame_font_36)
    }

    // 48 bytes;

}
function get_pmwr_frame_font_28(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_frame_font_36(o) {
    // ü(3, [u32, 0], o)
    ;

}

function get_pmwr_frame_multi_font(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_frame_multi_font_04)

    // 16 bytes;

}
function get_pmwr_frame_multi_font_04(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_frame_font, u32(o + 12), get_pmwr_frame_font)
    ä(pmwr_frame_font, u32(o + 28), get_pmwr_frame_font)
    ä(pmwr_frame_font, u32(o + 32), get_pmwr_frame_font)

    // 48 bytes;

}

function get_pmwr_frame_sparkler(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 16), get_pmwr_frame_sparkler_16)

    // 32 bytes;

}
function get_pmwr_frame_sparkler_16(o) {
    // ü(3, [u32, 0], o)
    ß('p_texture', o, 0);
    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 12), get_pmwr_frame_sparkler_16_48)
    }

    for (let i = 0; i < u32(o + 52); i++) {
        ö(u32(o + 56) + (i * 32), get_pmwr_frame_sparkler_16_56)
    }

    // 64 bytes;

}
function get_pmwr_frame_sparkler_16_48(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_frame_sparkler_16_56(o) {
    // ü(3, [u32, 0], o)
    ;

}

function get_pmwr_frame_text(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;
    ö(u32(o + 0), get_pmwr_frame_text_0)

}

function get_pmwr_frame_text_0(o) {// string
}

function get_pmwr_gate(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 24), get_pmwr_gate_24)
    ä(pmwr_unknown_00, u32(o + 28), get_pmwr_unknown_00)
    ä(pmwr_unknown_00, u32(o + 36), get_pmwr_unknown_00)

    for (let ii = 0; ii < u32(o + 60); ii++) {
        ö(u32(o + 64) + (ii * 4), get_pmwr_unknown)
    }
    ä(pmwr_sound_section, u32(o + 76), get_pmwr_sound_section)
    ä(pmwr_sound_controls, u32(o + 80), get_pmwr_sound_controls)
    ö(u32(o + 84), get_pmwr_gate_84)

    // 128 bytes;

}
function get_pmwr_gate_24(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_gate_84(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_gate_84_04)

    // 16 bytes;

}
function get_pmwr_gate_84_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_idk(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 0)) {
    case 0:
        ß('p_model', o, 4)
        break;
    case 1:
        ä(pmwr_model_link, u32(o + 4), get_pmwr_model_link)
        break;
    }
    ä(pmwr_model_animation_2, u32(o + 8), get_pmwr_model_animation_2)
    ö(u32(o + 12), get_pmwr_idk_12)

    for (let ii = 0; ii < u32(o + 16); ii++) {
        ö(u32(o + 20) + (ii * 32), get_pmwr_idk_20)
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        ö(u32(o + 32) + (ii * 64), get_pmwr_mysterious)
    }

    // 80 bytes;

}
function get_pmwr_idk_12(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 16), get_pmwr_idk_12_16)
    ß('p_model', o, 20)
    ä(pmwr_wtf, u32(o + 28), get_pmwr_wtf)
    ä(pmwr_gate, u32(o + 44), get_pmwr_gate)

    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 4), get_pmwr_unknown)
    }

    // 80 bytes;

}
function get_pmwr_idk_12_16(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}
function get_pmwr_idk_20(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 4); ii++) {
        ö(u32(o + 8) + (ii * 32), get_pmwr_idk_20_08)
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        ö(u32(o + 16) + (ii * 32), get_pmwr_idk_20_16)
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        ö(u32(o + 28) + (ii * 64), get_pmwr_mysterious)
    }

}
function get_pmwr_idk_20_08(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_idk_20_16(o) {
    // ü(3, [u32, 0], o)
    ;

}

function get_pmwr_interface(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_interface_04)

    for (let ii = 0; ii < u32(o + 8); ii++) {
        ö(u32(o + 12) + (ii * 28), get_pmwr_interface_12)
    }
    ä(pmwr_sound_controls, u32(o + 28), get_pmwr_sound_controls)
    ä(pmwr_sound_controls, u32(o + 36), get_pmwr_sound_controls)
    ä(pmwr_sound_controls, u32(o + 40), get_pmwr_sound_controls)
    ö(u32(o + 48), get_pmwr_interface_48)
    ä(pmwr_sound_controls, u32(o + 52), get_pmwr_sound_controls)
    ö(u32(o + 56), get_pmwr_interface_56)

    for (let ii = 0; ii < u32(o + 68); ii++) {
        ö(u32(o + 72) + (ii * 100), get_pmwr_interface_72)
    }
    // 80 bytes;

}

function get_pmwr_interface_04(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 36), get_pmwr_interface_04_04)
    }
    // 16 bytes;

}
function get_pmwr_interface_04_04(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_frame_text_0);
    switch (u8(o + 4)) {
    case 1:
        ö(u32(o + 12), get_pmwr_interface_04_04_12t1)
        break;
    case 5:
        ö(u32(o + 12), get_pmwr_interface_04_04_12t5)
        break;
    case 7:
        ö(u32(o + 12), get_pmwr_interface_04_04_12t7)
        break;
    case 8:
        ö(u32(o + 12), get_pmwr_interface_04_04_12t8)
        break;
    case 9:
        ö(u32(o + 12), get_pmwr_interface_04_04_12t9)
        break;
    }
}
function get_pmwr_interface_04_04_12t1(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_interface_04_04_12t1_04)
    // 16 bytes;

}
function get_pmwr_interface_04_04_12t1_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_interface_04_04_12t5(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_04_04_12t7(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_04_04_12t8(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 12), get_pmwr_interface_04_04_12t8_04)
    }
    // 16 bytes;

}
function get_pmwr_interface_04_04_12t8_04(o) {
    // ü(3, [u32, 0], o)
    ;ö(u32(o + 8), get_pmwr_frame_text_0)

}
function get_pmwr_interface_04_04_12t9(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;
    ö(u32(o + 4), get_pmwr_frame_text_0)
    ö(u32(o + 8), get_pmwr_frame_text_0)

}
function get_pmwr_interface_12(o) {
    // ü(3, [u32, 0], o)
    ;switch (u32(o + 0)) {
    case 1026:
        ö(u32(o + 4), get_pmwr_interface_12_04t1026)
        break;
    case 1027:
        ö(u32(o + 4), get_pmwr_interface_12_04t1027)
        break;
    }
    for (let ii = 0; ii < u32(o + 12); ii++) {
        ö(u32(o + 16) + (ii * 8), get_pmwr_interface_12_16)
    }

    for (let ii = 0; ii < u32(o + 20); ii++) {
        ö(u32(o + 24) + (ii * 36), get_pmwr_interface_12_24)
    }

}
function get_pmwr_interface_12_04t1026(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_interface_12_04t1026_08)
    // offset? 
    // 32 bytes;

}
function get_pmwr_interface_12_04t1026_08(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_interface_12_04t1026_08_04)
    // 16 bytes;

}
function get_pmwr_interface_12_04t1026_08_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_12_04t1027(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_12_16(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_interface_12_04t1026)

}
function get_pmwr_interface_12_24(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 0)) {
    case 1:
    case 31:
        ä(pmwr_interface, u32(o + 4), get_pmwr_interface)
        break;
    case 11:
        ö(u32(o + 4), get_pmwr_interface_12_24_04t11)
        break;
    }
    ö(u32(o + 8), get_pmwr_interface_12_24_08)
    // offset? 
    ä(pmwr_sound_controls, u32(o + 24), get_pmwr_sound_controls)

}
function get_pmwr_interface_12_24_04t11(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 12), get_pmwr_interface_12_24_04t11_04)
    }
    // 16 bytes;

}
function get_pmwr_interface_12_24_04t11_04(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_interface_12_24_04t11_04_00)
    switch (u16(o + 4)) {
    case 0:
        ö(u32(o + 8), get_pmwr_interface_12_24_04t11_04_08t0)
        break;
    case 1:
        ö(u32(o + 8), get_pmwr_interface_12_24_04t11_04_08t1)
        break;
    case 3:
        ä(pmwr_sound_controls, u32(o + 8), get_pmwr_sound_controls)
        break;
    case 100:
        ä(pmwr_interface, u32(o + 8), get_pmwr_interface)
        break;
    case 101:
        ä(pmwr_interface, u32(o + 8), get_pmwr_interface)
        break;
    }
}

function get_pmwr_interface_12_24_04t11_04_00(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_interface_12_24_04t11_04_08t0(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_12_24_04t11_04_08t1(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_interface_12_24_04t11_04_08t1_00)
    ö(u32(o + 4), get_pmwr_interface_12_24_04t11_04_08t1_00_04)
    // 16 bytes;

}
function get_pmwr_interface_12_24_04t11_04_08t1_00(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_interface_12_24_04t11_04_08t1_00_04)
    // 16 bytes;

}
function get_pmwr_interface_12_24_04t11_04_08t1_00_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_12_24_08(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_interface_12_24_08_00)
    ö(u32(o + 4), get_pmwr_interface_12_24_08_00)
    // offset? 
    // 16 bytes;

}
function get_pmwr_interface_12_24_08_00(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_48(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_56(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_frame_text_0)
    ö(u32(o + 48), get_pmwr_frame_text_0)
    ö(u32(o + 8), get_pmwr_interface_72_08)
    switch (u32(o + 12)) {
    case 4:
        ö(u32(o + 20), get_pmwr_interface_72_20t4)
        break;
    case 7:
        ö(u32(o + 20), get_pmwr_interface_72_20t7)
        break;
    case 38:
    case 106:
    case 107:
        ö(u32(o + 20), get_pmwr_interface_72_20t38)
        break;
    }
    switch (u8(o + 19)) {
    case 0:
        ö(u32(o + 24), get_pmwr_interface_72_24t0)
        break;
    case 1:
        ö(u32(o + 24), get_pmwr_interface_72_24t1)
        break;
    case 3:
        ö(u32(o + 24), get_pmwr_interface_72_24t3)
        break;
    case 5:
        ö(u32(o + 24), get_pmwr_interface_72_24t5)
        break;
    case 6:
    case 7:
        ö(u32(o + 24), get_pmwr_interface_72_24t6)
        break;
    case 10:
        ö(u32(o + 24), get_pmwr_interface_72_24t10)
        break;
    case 12:
        ö(u32(o + 24), get_pmwr_interface_72_24t12)
        break;
    case 13:
        ö(u32(o + 24), get_pmwr_interface_72_24t13)
        break;
    case 14:
        ö(u32(o + 24), get_pmwr_interface_72_24t14)
        break;
    case 15:
        ö(u32(o + 24), get_pmwr_interface_72_24t15)
        break;
    }
    ö(u32(o + 32), get_pmwr_interface_72_32)
    ö(u32(o + 44), get_pmwr_interface_72_44)
    ö(u32(o + 52), get_pmwr_interface_72_52)

    for (let ii = 0; ii < u32(o + 68); ii++) {
        ö(u32(o + 72) + (ii * 12), get_pmwr_interface_72_72)
    }

}

function get_pmwr_interface_72_08(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_pmwr_interface_72_08_08)
    }
    // 16 bytes;

}
function get_pmwr_interface_72_08_08(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 0)) {
    case 2:
        ö(u32(o + 4), get_pmwr_interface_72_08_08_04t2)
        break;
    case 6:
        ö(u32(o + 4), get_pmwr_interface_72_08_08_04t6)
        break;
    }
}
function get_pmwr_interface_72_08_08_04t2(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_interface_72_08_08_04t2_04)
    // 16 bytes;

}
function get_pmwr_interface_72_08_08_04t2_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_08_08_04t6(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_20t4(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_interface_72_20t7(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_20t38(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_24t0(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 0)) {
    case 0:
        ß('p_texture', o, 4)
        break;
    case 1:
        ß('p_model', o, 4)
        break;
    case 3:
        ö(u32(o + 8), get_pmwr_interface_72_24t0_08)
        break;
    }
    // 16 bytes;

}
function get_pmwr_interface_72_24t0_08(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_interface_72_24t0_08_04)
    }
    // 32 bytes;

}
function get_pmwr_interface_72_24t0_08_04(o) {
    // ü(3, [u32, 0], o)
    ß('p_texture', o, 0);

}
function get_pmwr_interface_72_24t1(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 0)) {
    case 0:
        ä(pmwr_frame_text, u32(o + 4), get_pmwr_frame_text)
        break;
    }
    switch (u8(o + 0)) {
    case 1:
        ö(u32(o + 8), get_pmwr_interface_72_24t1_08t1)
        break;
    case 3:
        ö(u32(o + 8), get_pmwr_interface_72_24t1_08t3)
        break;
    }
    switch (u8(o + 2)) {
    case 0:
        ä(pmwr_frame_font, u32(o + 12), get_pmwr_frame_font)
        break;
    case 1:
        ä(pmwr_frame_multi_font, u32(o + 12), get_pmwr_frame_multi_font)
        break;
    }
    // 32 bytes;

}
function get_pmwr_interface_72_24t1_08t1(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 8), get_pmwr_interface_72_24t1_08t1_04)
    }
    // 16 bytes;

}
function get_pmwr_interface_72_24t1_08t1_04(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_frame_text, u32(o + 0), get_pmwr_frame_text)

}
function get_pmwr_interface_72_24t1_08t3(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_24t3(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 8), get_pmwr_interface_72_24t3_04)
    }
    ö(u32(o + 16), get_pmwr_interface_72_24t3_16)
    // 32 bytes;

}
function get_pmwr_interface_72_24t3_04(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_model_link, u32(o + 0), get_pmwr_model_link)
    ä(pmwr_sound_controls, u32(o + 4), get_pmwr_sound_controls)

}
function get_pmwr_interface_72_24t3_16(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_interface_72_24t3_16_08)
    // 16 bytes;

}
function get_pmwr_interface_72_24t3_16_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_24t5(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;
    ß('p_texture', o, 0)

}
function get_pmwr_interface_72_24t6(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_interface, u32(o + 0), get_pmwr_interface)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_pmwr_interface_72_24t6_12)
    }
    // 16 bytes;

}
function get_pmwr_interface_72_24t6_12(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_interface_72_24t10(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_24t12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_24t13(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_interface_72_24t13_04)
    ö(u32(o + 12), get_pmwr_interface_72_24t13_12)
    // 16 bytes;

}
function get_pmwr_interface_72_24t13_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_24t13_12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;
    ß('p_texture', o, 0)

}
function get_pmwr_interface_72_24t14(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 276), get_pmwr_interface_72_24t14_276)

    // 288 bytes;

}
function get_pmwr_interface_72_24t14_276(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_24t15(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_frame_sparkler, u32(o + 0), get_pmwr_frame_sparkler)
    // 16 bytes;

}
function get_pmwr_interface_72_32(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 24), get_pmwr_interface_72_32_12)
    }

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_pmwr_interface_72_32_20)
    }

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_pmwr_interface_72_32_20)
    }

    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 28), get_pmwr_interface_12)
    }
    // 48 bytes;

}
function get_pmwr_interface_72_32_12(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_interface_72_32_20(o) {
    // ü(3, [u32, 0], o)
    ;switch (u16(o + 4)) {
    case 0:
        ö(u32(o + 8), get_pmwr_interface_72_32_20_08t0)
        break;
    case 1:
        ö(u32(o + 8), get_pmwr_interface_72_32_20_08t1)
        break;
    }
}
function get_pmwr_interface_72_32_20_08t0(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_32_20_08t1(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_interface_72_32_20_08t1_00)
    ö(u32(o + 4), get_pmwr_interface_72_32_20_08t1_04)
    // 16 bytes;

}
function get_pmwr_interface_72_32_20_08t1_00(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_interface_72_32_20_08t1_00_04)
    // 16 bytes;

}
function get_pmwr_interface_72_32_20_08t1_00_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_32_20_08t1_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_44(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_52(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 32), get_pmwr_interface_72_52_04)
    }

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_pmwr_interface_72_52_04)
    }

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_pmwr_interface_72_52_04)
    }

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_pmwr_interface_72_52_28)
    }

    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 40), get_pmwr_interface_72_52_36)
    }
    // 48 bytes;

}
function get_pmwr_interface_72_52_04(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_interface_72_52_28(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_interface_72_52_36(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_interface_72_72(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_interface_72_72_04)

}
function get_pmwr_interface_72_72_04(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 20), get_pmwr_interface_72_72_04_04)
    }

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_pmwr_interface_72_72_04_12)
    }

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_pmwr_interface_72_72_04_12)
    }

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 32), get_pmwr_interface_72_72_04_12)
    }

    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_pmwr_interface_72_72_04_36)
    }
    ö(u32(o + 44), get_pmwr_interface_72_72_04_44)
    ä(pmwr_sound_controls, u32(o + 48), get_pmwr_sound_controls)
    // 64 bytes;

}
function get_pmwr_interface_72_72_04_04(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 12); ii++) {
        ö(u32(o + 16) + (ii * 12), get_pmwr_interface_72_72_04_04_16)
    }

}
function get_pmwr_interface_72_72_04_04_16(o) {
    // ü(3, [u32, 0], o)
    ;switch (u32(o + 4)) {
    case 0:
        ö(u32(o + 8), get_pmwr_interface_72_72_04_04_16_08t0)
        break;
    case 3:
        ä(pmwr_sound_controls, u32(o + 8), get_pmwr_sound_controls)
        break;
    }
}
function get_pmwr_interface_72_72_04_04_16_08t0(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_interface_72_72_04_12(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_interface_72_72_04_36(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_interface_72_72_04_44(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}

function get_pmwr_link(o) {
    if (u32(o + 24) || u32(o + 44) || u32(o + 76))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u8, 52, u8, 53, u8, 54, u8, 55, u8, 56, u8, 57, u8, 58, u8, 59, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
    ß('p_texture', o, 52)
    ß('p_texture', o, 56)

    ö(u32(o + 0), get_pmwr_link_00)

    for (let ii = 0; ii < u32(o + 4); ii++) {
        ö(u32(o + 8) + (ii * 16), get_pmwr_link_intro)
    }

    ö(u32(o + 12), get_pmwr_link_12)
    ö(u32(o + 20), get_pmwr_link_20)
    for (let ii = 0; ii < u32(o + 28); ii++) {
        ö(u32(o + 32) + (ii * 8), get_pmwr_link_32)
    }
    ö(u32(o + 36), get_pmwr_link_36)
    ö(u32(o + 40), get_pmwr_link_40)

    ö(u32(o + 48), get_pmwr_link_demo)
    ä(pmwr_frame_font, u32(o + 60), get_pmwr_frame_font)
    ö(u32(o + 68), get_pmwr_link_68)
    ö(u32(o + 72), get_pmwr_link_72)

}

function get_pmwr_link_12(o) {/*ü(3,[u32,0,u32,4,u32,8,u32,12],o)*/
}
function get_pmwr_link_20(o) {/*ü(3,[u32,0,u32,4,u32,8,u32,12],o)*/
}

function get_pmwr_link_36(o) {/*ü(3,[u32,0,u32,4,u32,8,u32,12],o)*/
}
function get_pmwr_link_40(o) {/*ü(3,[u32,0,u32,4,u32,8,u32,12],o)*/
}

function get_pmwr_link_68(o) {/*ü(3,[u32,0,u32,4,u32,8,u32,12],o)*/
}
function get_pmwr_link_72(o) {/*ü(3,[u32,0,u32,4,u32,8,u32,12],o)*/
}

function get_pmwr_link_00(o) {
    if (u8(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_link_00_04)
    // 16 bytes;

}
function get_pmwr_link_00_04(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_link_00_04_00)
    // 16 bytes;

}
function get_pmwr_link_00_04_00(o) {
    if (u32(o + 0) || u8(o + 8) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_pmwr_link_00_04_00_04)
    // 16 bytes;

}
function get_pmwr_link_00_04_00_04(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28], o);
    // 32 bytes;

}

function get_pmwr_link_intro(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)*/
    ö(u32(o + 4), get_pmwr_link_intro_4)
    ö(u32(o + 8), get_pmwr_link_intro_08)
    ö(u32(o + 12), get_pmwr_link_offset_index)

}
function get_pmwr_link_intro_4(o) {/*ü(3,[u32,0,u32,4,u32,8,u32,12],o)*/
}

function get_pmwr_link_intro_08(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o);
    // 16 bytes;

}
function get_pmwr_link_offset_index(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 0), get_pmwr_link_offset_index_0)

}

function get_pmwr_link_offset_index_0(o) {/*ü(3,[u32,0,u32,4,u32,8,u32,12],o)*/
}

function get_pmwr_link_32(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_pmwr_link_32_00)
    ö(u32(o + 8), get_pmwr_link_32_8)

}
function get_pmwr_link_32_00(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o);
    for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 32), get_pmwr_link_32_00_04)
    }
    // 16 bytes;

}
function get_pmwr_link_32_00_04(o) {
    if (u32(o + 24) !== 1)
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 4), get_pmwr_link_32_00_04_04)
    ö(u32(o + 8), get_pmwr_link_offset_index)
    ö(u32(o + 12), get_pmwr_link_32_00_04_12)

    for (let ii = 0; ii < u32(o + 16); ii++) {
        ö(u32(o + 20) + (ii * 12), get_pmwr_link_32_00_04_20)
    }

    for (let ii = 0; ii < u32(o + 24); ii++) {
        ö(u32(o + 28) + (ii * 12), get_pmwr_link_32_00_04_20)
    }

}
function get_pmwr_link_32_00_04_04(o) {
    if (u8(o + 0) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 4), get_pmwr_link_offset_index)
    // 16 bytes;

}
function get_pmwr_link_32_00_04_12(o) {/*ü(3,[u32,0,u32,4,u32,8,u32,12],o)*/
}

function get_pmwr_link_32_00_04_20(o) {
    /*ü(1, [u32, 0, u32, 4, u32, 8], o)*/
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 8), get_pmwr_link_32_00_04_20_04)
    }

}
function get_pmwr_link_32_00_04_20_04(o) {
    if (u8(o + 0) !== 1)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)
    ö(u32(o + 4), get_pmwr_link_offset_index)

}
function get_pmwr_link_32_8(o) {/*ü(3,[u32,0,u32,4,u32,8,u32,12],o)*/
}

function get_pmwr_link_demo(o) {
    if (u8(o + 0) !== 1 || u32(o + 12))
        ü(1, [u8, 0, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 8), get_pmwr_link_32_00)
    // 16 bytes;

}

function get_pmwr_model_link(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    ö(u32(o + 4), get_pmwr_frame_text_0)
    ä(pmwr_model_sub_link, u32(o + 8), get_pmwr_model_sub_link)
    ä(pmwr_model_animation_1, u32(o + 12), get_pmwr_model_animation_1)
    ä(pmwr_model_animation_2, u32(o + 16), get_pmwr_model_animation_2)

    for (let ii = 0; ii < u32(o + 20); ii++) {
        ö(u32(o + 24) + (ii * 4), get_pmwr_model_link_24)
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        ö(u32(o + 32) + (ii * 8), get_pmwr_model_link_32)
    }

    for (let ii = 0; ii < u32(o + 40); ii++) {
        ö(u32(o + 44) + (ii * 64), get_pmwr_mysterious)
    }
    ö(u32(o + 52), get_pmwr_model_link_52)
    ö(u32(o + 56), get_pmwr_model_link_56)
    ö(u32(o + 64), get_pmwr_model_link_64)

    // 80 bytes;

}
function get_pmwr_model_link_24(o) {
    ß('p_model', o, 0)
}
function get_pmwr_model_link_32(o) {
    ß('p_model', o, 0)

}
function get_pmwr_model_link_52(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_model_link_56(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_model_link_64(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}

function get_pmwr_model_sub_link(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ä(pmwr_model_animation_2, u32(o + 0), get_pmwr_model_animation_2)
    for (let ii = 0; ii < u32(o + 4); ii++) {
        ö(u32(o + 8) + (ii * 4), get_pmwr_model_link_24)
    }

    for (let ii = 0; ii < u32(o + 12); ii++) {
        ö(u32(o + 16) + (ii * 8), get_pmwr_model_link_32)
    }

    // 32 bytes;

}

function get_pmwr_mysterious(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 0)) {
    case 1:
        ä(pmwr_unknown_00, u32(o + 4), get_pmwr_unknown_00)
        break;
    case 2:
        ä(pmwr_strange, u32(o + 4), get_pmwr_strange)
        break;
    case 3:
        ä(pmwr_sound_controls, u32(o + 4), get_pmwr_sound_controls)
        break;
    case 5:
    case 6:
        ö(u32(o + 4), get_pmwr_mysterious_04t5)
        break;
    case 7:
        ö(u32(o + 4), get_pmwr_mysterious_04t7)
        break;
    case 8:
        ä(pmwr_model_link, u32(o + 4), get_pmwr_model_link)
        break;
    case 9:
        ä(pmwr_mysterious_04t9, u32(o + 4), get_pmwr_mysterious_04t9)
        break;
    case 10:
        ö(u32(o + 4), get_pmwr_mysterious_04t10)
        break;
    case 11:
        ä(pmwr_activator, u32(o + 4), get_pmwr_activator)
        break;
    case 13:
        ä(pmwr_object, u32(o + 4), get_pmwr_object)
        break;
    case 16:
        ö(u32(o + 4), get_pmwr_mysterious_04t16)
        break;
    }
    switch (u8(o + 0)) {
    case 8:
        ö(u32(o + 8), get_pmwr_mysterious_08t8)
        break;
    case 13:
        ö(u32(o + 8), get_pmwr_mysterious_08t8t13)
        break;
    }

    // 64 bytes;

}
function get_pmwr_mysterious_04t5(o) {
    // ü(3, [u32, 0], o)
    ;let temp_function
    switch (u8(o + 3)) {
    case 0:
        temp_function = get_pmwr_mysterious_04t5_16t0
        break;
    case 2:
        temp_function = get_pmwr_mysterious_04t5_16t2
        break;
    case 3:
        temp_function = get_pmwr_mysterious_04t5_16t3
        break;
    case 5:
        temp_function = get_pmwr_mysterious_04t5_16t5
        break;
    }

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 4), temp_function)
    }

    ö(u32(o + 28), get_pmwr_mysterious_04t5_28)

    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 32), get_pmwr_mysterious_04t5_36)
    }

    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 32), get_pmwr_mysterious_04t5_44)
    }
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 12), get_pmwr_mysterious_04t5_52)
    }
    ö(u32(o + 56), get_pmwr_mysterious_04t5_56)

    // 64 bytes;

}
function get_pmwr_mysterious_04t5_56(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_mysterious_04t5_16t0(o) {
    // ü(3, [u32, 0], o)
    ß('p_model', o, 0)
}
function get_pmwr_mysterious_04t5_16t2(o) {
    // ü(3, [u32, 0], o)
    ;ß('p_texture', o, 0)

}
function get_pmwr_mysterious_04t5_16t3(o) {
    // ü(3, [u32, 0], o)
    ;ß('p_texture', o, 0)

}
function get_pmwr_mysterious_04t5_16t5(o) {
    // ü(3, [u32, 0], o)
    ;ß('p_texture', o, 0)

}
function get_pmwr_mysterious_04t5_28(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_mysterious_04t5_36(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_mysterious_04t5_44(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_mysterious_04t5_52(o) {
    // ü(3, [u32, 0], o)
    ;// 12 bytes;

}
function get_pmwr_mysterious_04t7(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 12), get_pmwr_mysterious_04t7_12)

    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_pmwr_mysterious_04t7_36)
    }

    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 12), get_pmwr_mysterious_04t7_36)
    }

    // 64 bytes;

}
function get_pmwr_mysterious_04t7_12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;
    ß('p_texture', o, 0)

}
function get_pmwr_mysterious_04t7_36(o) {
    // ü(3, [u32, 0], o)
    ;

}

function get_pmwr_mysterious_04t10(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 64), get_pmwr_mysterious)
    }

    // 16 bytes;

}
function get_pmwr_mysterious_04t16(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_mysterious_04t16_08)
    ö(u32(o + 12), get_pmwr_mysterious_04t16_12)
    ö(u32(o + 36), get_pmwr_mysterious_04t16_36)

    // 48 bytes;

}
function get_pmwr_mysterious_04t16_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_mysterious_04t16_12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_mysterious_04t16_36(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_mysterious_04t16_36_04)

    // 16 bytes;

}
function get_pmwr_mysterious_04t16_36_04(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_mysterious_04t16_36_04_04)

    // 48 bytes;

}
function get_pmwr_mysterious_04t16_36_04_04(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_mysterious_04t16_36_04_04_04)

    // 16 bytes;

}
function get_pmwr_mysterious_04t16_36_04_04_04(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_mysterious_04t16_36_04_04_04_04)
    ö(u32(o + 12), get_pmwr_mysterious_04t16_36_04_04_04_12)

    // 16 bytes;

}
function get_pmwr_mysterious_04t16_36_04_04_04_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_mysterious_04t16_36_04_04_04_12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_mysterious_08t8(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_mysterious_08t8t13(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_mysterious_04t9(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_mysterious_04t9_08)
    ö(u32(o + 12), get_pmwr_mysterious_04t9_12)

    // 16 bytes;

}
function get_pmwr_mysterious_04t9_08(o) {
    // ü(3, [u32, 0], o)
    ß('p_texture', o, 0)
    ö(u32(o + 8), get_pmwr_mysterious_04t9_08_08)

    // 32 bytes;

}
function get_pmwr_mysterious_04t9_08_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_mysterious_04t9_12(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 56), get_pmwr_mysterious_04t9_12_04)
    }
    ö(u32(o + 12), get_pmwr_mysterious_04t9_12_12)

    // 32 bytes;

}
function get_pmwr_mysterious_04t9_12_04(o) {
    // ü(3, [u32, 0], o)
    ß('p_texture', o, 0)
    ö(u32(o + 8), get_pmwr_mysterious_04t9_12_04_08)
    ö(u32(o + 44), get_pmwr_mysterious_04t9_12_04_44)

}
function get_pmwr_mysterious_04t9_12_04_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_mysterious_04t9_12_04_44(o) {
    // ü(3, [u32, 0], o)
    ß('p_texture', o, 0)
    ö(u32(o + 8), get_pmwr_mysterious_04t9_12_04_44_08)
    ö(u32(o + 12), get_pmwr_mysterious_04t9_12_04_44_12)

    // 32 bytes;

}
function get_pmwr_mysterious_04t9_12_04_44_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_mysterious_04t9_12_04_44_12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_mysterious_04t9_12_12(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 56), get_pmwr_mysterious_04t9_12_04)
    }

    // 16 bytes;

}

function get_pmwr_object(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 12), get_pmwr_object_12)
    ä(pmwr_model_animation_2, u32(o + 16), get_pmwr_model_animation_2)
    switch (u8(o + 11)) {
    case 15:
        ä(pmwr_object_32t15, u32(o + 32), get_pmwr_object_32t15)
        break;
    case 16:
        ö(u32(o + 32), get_pmwr_object_32t16)
        break;
    case 17:
        ö(u32(o + 32), get_pmwr_object_32t17)
        break;
    case 18:
        ö(u32(o + 32), get_pmwr_object_32t18)
        break;
    }
    ä(pmwr_unknown_00, u32(o + 48), get_pmwr_unknown_00)
    ä(pmwr_frame_text, u32(o + 60), get_pmwr_frame_text)
    ä(pmwr_unknown_00, u32(o + 68), get_pmwr_unknown_00)
    ä(pmwr_wtf, u32(o + 88), get_pmwr_wtf)

    for (let ii = 0; ii < u32(o + 96); ii++) {
        ö(u32(o + 100) + (ii * 64), get_pmwr_mysterious)
    }

    // 112 bytes;

}
function get_pmwr_object_12(o) {
    // ü(3, [u32, 0], o)
    ß('p_texture', o, 0)
    ö(u32(o + 16), get_pmwr_object_12_16)

    // 32 bytes;

}
function get_pmwr_object_12_16(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_object_32t15(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 28), get_pmwr_object_32t15_04)
    }
    ä(pmwr_unknown_00, u32(o + 8), get_pmwr_unknown_00)
    ä(pmwr_unknown_00, u32(o + 12), get_pmwr_unknown_00)

    // 16 bytes;

}
function get_pmwr_object_32t15_04(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 12), get_pmwr_object_32t15_04_04)
    }

    for (let ii = 0; ii < u32(o + 8); ii++) {
        ö(u32(o + 12) + (ii * 12), get_pmwr_object_32t15_04_04)
    }

    for (let ii = 0; ii < u32(o + 16); ii++) {
        ö(u32(o + 20) + (ii * 12), get_pmwr_object_32t15_04_04)
    }

}
function get_pmwr_object_32t15_04_04(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_um, u32(o + 0), get_pmwr_um)
    ä(pmwr_um, u32(o + 4), get_pmwr_um)

}
function get_pmwr_object_32t16(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_object_32t17(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_object_32t18(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_object_32t18_00)

    // 16 bytes;

}
function get_pmwr_object_32t18_00(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 64), get_pmwr_mysterious)
    }

    // 16 bytes;

}

function get_pmwr_sound_controls(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 12); ii++) {
        ö(u32(o + 16) + (ii * 16), get_pmwr_sound_controls_16)
    }

    // 32 bytes;

}
function get_pmwr_sound_controls_16(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 4), get_pmwr_sound_controls_16_04)
    }

    // 16 bytes;

}
function get_pmwr_sound_controls_16_04(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_sound_section, u32(o + 0), get_pmwr_sound_section)

}

function get_pmwr_sound_section(o) {
    // ü(3, [u32, 0], o)
    ß('p_sound', o, 0)
    ö(u32(o + 8), get_pmwr_sound_section_08)

    // 32 bytes;

}
function get_pmwr_sound_section_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_strange(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 4), get_pmwr_unknown)
    }

    ä(pmwr_sound_controls, u32(o + 28), get_pmwr_sound_controls)
    // 48 bytes;

}

function get_pmwr_um(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 64), get_pmwr_mysterious)
    }

    // 32 bytes;

}

function get_pmwr_unknown(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_unknown_00, u32(o + 0), get_pmwr_unknown_00)

}

function get_pmwr_unknown_00(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 16), get_pmwr_unknown_00_04)
    }

    // 16 bytes;

}
function get_pmwr_unknown_00_04(o) {
    // ü(3, [u32, 0], o)
    ;switch (u32(o + 0)) {
    case 1:
        ä(pmwr_unknown_00_04_04t1, u32(o + 4), get_pmwr_unknown_00_04_04t1)
        break;
    case 2:
        ä(pmwr_unknown_00_04_04t2, u32(o + 4), get_pmwr_unknown_00_04_04t2)
        break;
    case 3:
        ä(pmwr_unknown_00, u32(o + 4), get_pmwr_unknown_00)
        break;
    case 4:
        ä(pmwr_strange, u32(o + 4), get_pmwr_strange)
        break;
    case 5:
        ä(pmwr_unknown_00_04_04t5, u32(o + 4), get_pmwr_unknown_00_04_04t5)
        break;
    case 6:
        ä(pmwr_idk, u32(o + 4), get_pmwr_idk)
        break;
    case 26:
        ä(pmwr_sound_controls, u32(o + 4), get_pmwr_sound_controls)
        break;
    case 29:
        ö(u32(o + 4), get_pmwr_unknown_00_04_04t29)
        break;
    case 31:
        ä(pmwr_activator, u32(o + 4), get_pmwr_activator)
        break;
    }
    switch (u32(o + 0)) {
    case 1:
        ö(u32(o + 8), get_pmwr_unknown_00_04_08t1)
        break;
    case 2:
        ö(u32(o + 8), get_pmwr_unknown_00_04_08t2)
        break;
    case 3:
        ö(u32(o + 8), get_pmwr_unknown_00_04_08t3)
        break;
    case 4:
        ö(u32(o + 8), get_pmwr_unknown_00_04_08t4)
        break;
    case 5:
        ö(u32(o + 8), get_pmwr_unknown_00_04_08t5)
        break;
    case 6:
        ö(u32(o + 8), get_pmwr_unknown_00_04_08t6)
        break;
    case 26:
        ö(u32(o + 8), get_pmwr_unknown_00_04_08t26)
        break;
    case 29:
        ö(u32(o + 8), get_pmwr_unknown_00_04_08t29)
        break;
    case 31:
        ö(u32(o + 8), get_pmwr_unknown_00_04_08t31)
        break;
    case 32:
        ö(u32(o + 8), get_pmwr_unknown_00_04_08t32)
        break;
    case 34:
        ö(u32(o + 8), get_pmwr_unknown_00_04_08t34)
        break;
    }
}

function get_pmwr_unknown_00_04_04t2(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_unknown_00, u32(o + 32), get_pmwr_unknown_00)
    ä(pmwr_wtf, u32(o + 48), get_pmwr_wtf)
    ä(pmwr_unknown_00, u32(o + 56), get_pmwr_unknown_00)
    ä(pmwr_unknown_00, u32(o + 68), get_pmwr_unknown_00)
    ä(pmwr_unknown_00, u32(o + 76), get_pmwr_unknown_00)
    ö(u32(o + 80), get_pmwr_unknown_00_04_04t2_80)

    for (let ii = 0; ii < u32(o + 96); ii++) {
        ö(u32(o + 100) + (ii * 64), get_pmwr_mysterious)
    }

    // 112 bytes;

}
function get_pmwr_unknown_00_04_04t2_80(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_unknown_00_04_04t29(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 48), get_pmwr_unknown_00_04_04t29_04)
    }

    // 32 bytes;

}
function get_pmwr_unknown_00_04_04t29_04(o) {
    // ü(3, [u32, 0], o)
    ß('p_model', o, 0)

}
function get_pmwr_unknown_00_04_08t1(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 48), get_pmwr_unknown_00_04_08t1_48)
    // offset? 
    switch (u8(o + 42)) {
    case 1:
        ö(u32(o + 52), get_pmwr_unknown_00_04_08t1_52t1)
        break;
    case 2:
        ö(u32(o + 52), get_pmwr_unknown_00_04_08t1_52t2)
        break;
    }
    // 64 bytes;

}
function get_pmwr_unknown_00_04_08t1_48(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_08t1_52t1(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_08t1_52t2(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 8)) {
    case 0:
        ö(u32(o + 12), get_pmwr_unknown_00_04_08t1_52t2_12t0)
        break;
    case 1:
        ö(u32(o + 12), get_pmwr_unknown_00_04_08t1_52t2_12t1)
        break;
    case 2:
        ö(u32(o + 12), get_pmwr_unknown_00_04_08t1_52t2_12t2)
        break;
    }
    // 16 bytes;

}
function get_pmwr_unknown_00_04_08t1_52t2_12t0(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_unknown_00_04_08t1_52t2_12t1(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_unknown_00_04_08t1_52t2_12t2(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_08t2(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 48), get_pmwr_unknown_00_04_08t2_48)
    switch (u8(o + 42)) {
    case 1:
        ö(u32(o + 52), get_pmwr_unknown_00_04_08t2_52t1)
        break;
    case 2:
        ö(u32(o + 52), get_pmwr_unknown_00_04_08t2_52t2)
        break;
    }
    // 64 bytes;

}
function get_pmwr_unknown_00_04_08t2_48(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_08t2_52t1(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_08t2_52t2(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 12), get_pmwr_unknown_00_04_08t2_52t2_12)

    // 16 bytes;

}
function get_pmwr_unknown_00_04_08t2_52t2_12(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_08t3(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 40)) {
    case 2:
        ö(u32(o + 48), get_pmwr_unknown_00_04_08t3_48)
        break;
    }
    ö(u32(o + 52), get_pmwr_unknown_00_04_08t3_52)

    // 64 bytes;

}
function get_pmwr_unknown_00_04_08t3_48(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_08t3_52(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_08t4(o) {
    // ü(3, [u32, 0], o)
    ;// 64 bytes;

}
function get_pmwr_unknown_00_04_08t5(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_unknown_00_04_08t5_04)

    // 16 bytes;

}
function get_pmwr_unknown_00_04_08t5_04(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_08t6(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_unknown_00_04_08t26(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_unknown_00_04_08t29(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 52), get_pmwr_unknown_00_04_08t29_52)

    // 64 bytes;

}
function get_pmwr_unknown_00_04_08t29_52(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_08t31(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 52), get_pmwr_unknown_00_04_08t31_52)

    // 64 bytes;

}
function get_pmwr_unknown_00_04_08t31_52(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_08t32(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;
    ö(u32(o + 8), get_pmwr_frame_text_0)

}
function get_pmwr_unknown_00_04_08t34(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_interface, u32(o + 4), get_pmwr_interface)
    ä(pmwr_interface, u32(o + 8), get_pmwr_interface)
    ä(pmwr_interface, u32(o + 12), get_pmwr_interface)
    ö(u32(o + 16), get_pmwr_unknown_00_04_08t34_16)

    // 32 bytes;

}
function get_pmwr_unknown_00_04_08t34_16(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_unknown_00_04_04t1(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 0)) {
    case 0:
        ö(u32(o + 4), get_pmwr_unknown_00_04_04t1_04t0)
        break;
    case 1:
        ö(u32(o + 4), get_pmwr_unknown_00_04_04t1_04t1)
        break;
    case 2:
        ö(u32(o + 4), get_pmwr_unknown_00_04_04t1_04t2)
        break;
    }
    for (let ii = 0; ii < u32(o + 20); ii++) {
        ö(u32(o + 24) + (ii * 12), get_pmwr_unknown_00_04_04t1_24)
    }

    for (let ii = 0; ii < u32(o + 28); ii++) {
        ö(u32(o + 32) + (ii * 4), get_pmwr_unknown)
    }

    // 48 bytes;

}
function get_pmwr_unknown_00_04_04t1_04t0(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_unknown_00_04_04t1_04t0_04)
    }

    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 32), get_pmwr_unknown_00_04_04t1_04t0_40)
    }

    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 16), get_pmwr_unknown_00_04_04t1_04t0_48)
    }

    ö(u32(o + 56), get_pmwr_unknown_00_04_04t1_04t0_56)

    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 8), get_pmwr_unknown_00_04_04t1_04t0_64)
    }

    // 80 bytes;

}
function get_pmwr_unknown_00_04_04t1_04t0_04(o, i, tempoffset) {
    ß('p_model', o, 0)

}
function get_pmwr_unknown_00_04_04t1_04t0_40(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_unknown_00_04_04t1_04t0_48(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_unknown_00_04_04t1_04t0_56(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_04t1_04t0_64(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 20), get_pmwr_unknown_00_04_04t1_04t0_64_04)
    }

}
function get_pmwr_unknown_00_04_04t1_04t0_64_04(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_unknown_00_04_04t1_04t1(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 4), get_pmwr_unknown_00_04_04t1_04t1_04)
    }

    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 12), get_pmwr_unknown_00_04_04t1_04t1_44)
    }

    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 12), get_pmwr_unknown_00_04_04t1_04t1_44)
    }
    ö(u32(o + 56), get_pmwr_unknown_00_04_04t1_04t1_56)

    for (let i = 0; i < u32(o + 60); i++) {
        ö(u32(o + 64) + (i * 8), get_pmwr_unknown_00_04_04t1_04t1_64)
    }

    // 80 bytes;

}
function get_pmwr_unknown_00_04_04t1_04t1_04(o) {
    // ü(3, [u32, 0], o)
    ;ß('p_texture', o, 0)

}
function get_pmwr_unknown_00_04_04t1_04t1_44(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_unknown_00_04_04t1_04t1_56(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_unknown_00_04_04t1_04t1_64(o) {
    // ü(3, [u32, 0], o)
    ;for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 20), get_pmwr_unknown_00_04_04t1_04t1_64_04)
    }

}
function get_pmwr_unknown_00_04_04t1_04t1_64_04(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_unknown_00_04_04t1_04t2(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 12), get_pmwr_unknown_00_04_04t1_04t2_04)
    }

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 16), get_pmwr_unknown_00_04_04t1_04t2_20)
    }

    // 32 bytes;

}
function get_pmwr_unknown_00_04_04t1_04t2_04(o) {
    // ü(3, [u32, 0], o)
    ;// 12 bytes;

}
function get_pmwr_unknown_00_04_04t1_04t2_20(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_unknown_00_04_04t1_24(o) {
    // ü(3, [u32, 0], o)
    ;// 12 bytes;

}
function get_pmwr_unknown_00_04_04t1_32(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_unknown_00_04_04t5(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_unknown_00_04_04t5_04)
    ö(u32(o + 12), get_pmwr_unknown_00_04_04t5_12)
    ö(u32(o + 20), get_pmwr_unknown_00_04_04t5_20)
    ö(u32(o + 28), get_pmwr_unknown_00_04_04t5_28)
    ö(u32(o + 36), get_pmwr_unknown_00_04_04t5_36)

    // 48 bytes;

}
function get_pmwr_unknown_00_04_04t5_04(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 8)) {
    case 103:
        ö(u32(o + 12), get_pmwr_unknown_00_04_04t5_04_12t103)
        break;
    case 105:
        ö(u32(o + 12), get_pmwr_unknown_00_04_04t5_04_12t105)
        break;
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 4), get_pmwr_unknown_00_04_04t5_04_20)
    }

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 64), get_pmwr_mysterious)
    }

    // 48 bytes;

}
function get_pmwr_unknown_00_04_04t5_04_12t103(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}
function get_pmwr_unknown_00_04_04t5_04_12t105(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 64), get_pmwr_mysterious)
    }

    // 16 bytes;

}
function get_pmwr_unknown_00_04_04t5_04_20(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_unknown_00_04_04t5_12(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 12), get_pmwr_unknown_00_04_04t5_12_04)
    }

    // 16 bytes;

}
function get_pmwr_unknown_00_04_04t5_12_04(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_unknown_00_04_04t5_20(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 12), get_pmwr_unknown_00_04_04t5_20_04)
    }

    // 16 bytes;

}
function get_pmwr_unknown_00_04_04t5_20_04(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_unknown_00_04_04t5_28(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_unknown_00_04_04t5_28_04)

    // 16 bytes;

}
function get_pmwr_unknown_00_04_04t5_28_04(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_unknown_00_04_04t5_28_04_00, u32(o + 0), get_pmwr_unknown_00_04_04t5_28_04_00)

    // 16 bytes;

}

// function get_pmwr_unknown_00_04_04t5_28_04_00(o) {
// ü(3, [u32, 0], o)
//     ;

//     switch (u8(o + 0)) {
//     case 1:
// ö(u32(o + 4), get_pmwr_unknown_00_04_04t5_28_04_00_04t1)

//         break;
//     case 2:
// ö(u32(o + 4), get_pmwr_unknown_00_04_04t5_28_04_00_04t2)
//         break;
//     }
//     // 16 bytes;

// }
// function get_pmwr_unknown_00_04_04t5_28_04_00_04t1(o) {
// ü(3, [u32, 0], o)
//     ;

//     // 16 bytes;

// }
// function get_pmwr_unknown_00_04_04t5_28_04_00_04t2(o) {
// ü(3, [u32, 0], o)
//     ;

//     // 16 bytes;

// }
function get_pmwr_unknown_00_04_04t5_36(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_unknown_00_04_04t5_28_04_00(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 0)) {
    case 1:
        ö(u32(o + 4), get_pmwr_unknown_00_04_04t5_28_04_00_04t1)
        break;
    case 2:
        ö(u32(o + 4), get_pmwr_unknown_00_04_04t5_28_04_00_04t2)
        break;
    }

    // 16 bytes;

}
function get_pmwr_unknown_00_04_04t5_28_04_00_04t1(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_unknown_00_04_04t5_28_04_00_04t2(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}

function get_pmwr_var(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 140), get_pmwr_frame_text_0)
    ö(u32(o + 148), get_pmwr_var_148)
    ö(u32(o + 152), get_pmwr_frame_text_0)
    ö(u32(o + 164), get_pmwr_var_164)
    ö(u32(o + 168), get_pmwr_var_168)

    // 176 bytes;

}
function get_pmwr_var_148(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_var, u32(o + 0), get_pmwr_var)

    // 16 bytes;

}
function get_pmwr_var_164(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 24), get_pmwr_var_164_12)
    }

    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 8), get_pmwr_var_164_20)
    }

    // 32 bytes;

}
function get_pmwr_var_164_12(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_frame_text_0)
    ö(u32(o + 8), get_pmwr_frame_text_0);
    switch (u32(o + 4)) {
    case 1:
        ö(u32(o + 12), get_pmwr_var_164_12_12t1)
        break;
    case 2:
        ö(u32(o + 12), get_pmwr_var_164_12_12t2)
        break;
    case 5:
        ö(u32(o + 12), get_pmwr_var_164_12_12t5)
        break;
    case 6:
        ö(u32(o + 12), get_pmwr_var_164_12_12t6)
        break;
    case 7:
        ö(u32(o + 12), get_pmwr_var_164_12_12t7)
        break;
    case 8:
        ö(u32(o + 12), get_pmwr_var_164_12_12t8)
        break;
    case 14:
        ö(u32(o + 12), get_pmwr_var_164_12_12t14)
        break;
    case 15:
        ö(u32(o + 12), get_pmwr_var_164_12_12t15)
        break;
    case 16:
        ö(u32(o + 12), get_pmwr_var_164_12_12t16)
        break;
    case 24:
        ö(u32(o + 12), get_pmwr_var_164_12_12t24)
        break;
    }
}
function get_pmwr_var_164_12_12t1(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_var_164_12_12t1_00)

    // 16 bytes;

}
function get_pmwr_var_164_12_12t1_00(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_var_164_12_12t1_00_00)

    // 32 bytes;

}
function get_pmwr_var_164_12_12t1_00_00(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_12_12t2(o) {
    // ü(3, [u32, 0], o)
    ;switch (u32(o + 0)) {
    case 1:
        ö(u32(o + 4), get_pmwr_var_164_12_12t2_04t1)
        break;
    case 4:
    case 5:
    case 6:
    case 9:
    case 11:
    case 19:
        ö(u32(o + 4), get_pmwr_var_164_12_12t2_04t4)
        break;
    case 7:
        ö(u32(o + 4), get_pmwr_var_164_12_12t2_04t7)
        break;
    case 8:
        ö(u32(o + 4), get_pmwr_var_164_12_12t2_04t8)
        break;
    case 16:
        ö(u32(o + 4), get_pmwr_var_164_12_12t2_04t16)
        break;
    }
    // 16 bytes;

}
function get_pmwr_var_164_12_12t2_04t1(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 12), get_pmwr_var_164_12_12t2_04t1_12)
    ö(u32(o + 16), get_pmwr_var_164_12_12t2_04t1_16)
    ö(u32(o + 20), get_pmwr_var_164_12_12t2_04t1_16)

    // 32 bytes;

}
function get_pmwr_var_164_12_12t2_04t1_12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_12_12t2_04t1_16(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 4)) {
    case 1:
        ä(pmwr_world_20_12t1, u32(o + 0), get_pmwr_world_20_12t1)
        break;
    case 10:
        ä(pmwr_world_20_12t10, u32(o + 0), get_pmwr_world_20_12t10)
        break;
    case 11:
        ä(pmwr_world_20_12t11, u32(o + 0), get_pmwr_world_20_12t11)
        break;
    }
    // 32 bytes;

}
function get_pmwr_var_164_12_12t2_04t4(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 16), get_pmwr_var_164_12_12t2_04t4_16)

    // 32 bytes;

}
function get_pmwr_var_164_12_12t2_04t4_16(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 8)) {
    case 1:
        switch (u32(o + 4)) {
        case 1:
            ä(pmwr_world_20_12t1, u32(o + 0), get_pmwr_world_20_12t1)
            break;
        case 8:
            ä(pmwr_world_20_12t8, u32(o + 0), get_pmwr_world_20_12t8)
            break;
        case 10:
            ä(pmwr_world_20_12t10, u32(o + 0), get_pmwr_world_20_12t10)
            break;
        case 13:
            ä(pmwr_world_20_12t13, u32(o + 0), get_pmwr_world_20_12t13)
            break;
        case 14:
            ä(pmwr_world_20_12t14, u32(o + 0), get_pmwr_world_20_12t14)
            break;
        case 15:
            ä(pmwr_world_20_12t15, u32(o + 0), get_pmwr_world_20_12t15)
            break;
        }
        break
    case 2:
        break
    }
    // 16 bytes;

}
function get_pmwr_var_164_12_12t2_04t7(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_var_164_12_12t2_04t8(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 16), get_pmwr_var_164_12_12t2_04t8_16)

    // 32 bytes;

}
function get_pmwr_var_164_12_12t2_04t8_16(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_12_12t2_04t16(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_flag, u32(o + 24), get_pmwr_flag)

    // 32 bytes;

}
function get_pmwr_var_164_12_12t5(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_var_164_12_12t5_04)

    // 16 bytes;

}
function get_pmwr_var_164_12_12t5_04(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_var_164_12_12t5_04_08)

    // 16 bytes;

}
function get_pmwr_var_164_12_12t5_04_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_12_12t6(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 4)) {
    case 1:
        ö(u32(o + 0), get_pmwr_var_164_12_12t6_00t1)
        break;
    case 2:
        ö(u32(o + 0), get_pmwr_var_164_12_12t6_00t2)
        break;
    }
    // 16 bytes;

}
function get_pmwr_var_164_12_12t6_00t1(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_interface, u32(o + 0), get_pmwr_interface)
    ö(u32(o + 8), get_pmwr_var_164_12_12t6_00t1_08)

    // 16 bytes;

}
function get_pmwr_var_164_12_12t6_00t1_08(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_12_12t6_00t2(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_interface, u32(o + 4), get_pmwr_interface)

    // 16 bytes;

}
function get_pmwr_var_164_12_12t7(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_var_164_12_12t7_00)
    ä(pmwr_object, u32(o + 4), get_pmwr_object)

    // 16 bytes;

}
function get_pmwr_var_164_12_12t7_00(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_12_12t8(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 8)) {
    case 1:
        ä(pmwr_flag, u32(o + 0), get_pmwr_flag)
        break;
    case 2:
        ö(u32(o + 0), get_pmwr_var_164_12_12t8_00t2)
        break;
    }

    switch (u8(o + 10)) {
    case 0:
        break;
    case 2:
        ä(pmwr_flag, u32(o + 4), get_pmwr_flag)
        break;
    case 3:
        ö(u32(o + 4), get_pmwr_var_164_12_12t8_04t3)
        break;
    }

    // 16 bytes;

}
function get_pmwr_var_164_12_12t8_00t2(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_var_164_12_12t8_00t2_04)
    ö(u32(o + 12), get_pmwr_var_164_12_12t8_00t2_12)

    // 16 bytes;

}
function get_pmwr_var_164_12_12t8_00t2_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_12_12t8_00t2_12(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_var_164_12_12t8_04t3(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 12), get_pmwr_var_164_12_12t8_04t3_12)

    // 16 bytes;

}
function get_pmwr_var_164_12_12t8_04t3_12(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_var_164_12_12t14(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_var_164_12_12t14_00)
    ä(pmwr_world_20_12t4, u32(o + 8), get_pmwr_world_20_12t4)

    // 16 bytes;

}
function get_pmwr_var_164_12_12t14_00(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 8)) {
    case 1:
        ä(pmwr_world_20_12t0, u32(o + 0), get_pmwr_world_20_12t0)
        break;
    case 5:
        break;
    }
    // 16 bytes;

}
function get_pmwr_var_164_12_12t15(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_12_12t16(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_var, u32(o + 0), get_pmwr_var)

    // 16 bytes;

}
function get_pmwr_var_164_12_12t24(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_unknown_00, u32(o + 0), get_pmwr_unknown_00)
    ö(u32(o + 4), get_pmwr_var_164_12_12t24_04)

    // 16 bytes;

}
function get_pmwr_var_164_12_12t24_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_20(o) {
    // ü(3, [u32, 0], o)
    globalThis.type_0 = u32(o + 0)
    ö(u32(o + 4), get_pmwr_var_164_20_04)

}
function get_pmwr_var_164_20_04(o, t) {
    ö(u32(o + 8), get_pmwr_frame_text_0);
    switch (globalThis.type_0) {
    case 1604:
        ö(u32(o + 12), get_pmwr_var_164_20_04_12t1604)
        break;
    case 1608:
        ö(u32(o + 12), get_pmwr_var_164_20_04_12t1608)
        break;
    case 1618:
        ö(u32(o + 12), get_pmwr_var_164_20_04_12t1618)
        break;
    case 1620:
        ö(u32(o + 12), get_pmwr_var_164_20_04_12t1620)
        break;
    case 1636:
        ö(u32(o + 12), get_pmwr_var_164_20_04_12t1636)
        break;
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 12), get_pmwr_var_164_20_04_20)
    }

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 24), get_pmwr_var_164_12)
    }

    // 32 bytes;

}
function get_pmwr_var_164_20_04_12t1604(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_20_04_12t1608(o) {
    // ü(3, [u32, 0], o)
    ä(pmwr_interface, u32(o + 4), get_pmwr_interface)
    ä(pmwr_world_20_12t1, u32(o + 8), get_pmwr_world_20_12t1)

    // 16 bytes;

}
function get_pmwr_var_164_20_04_12t1618(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 8)) {
    case 0:
        ä(pmwr_flag, u32(o + 0), get_pmwr_flag)
        break;
    case 1:
        ö(u32(o + 0), get_pmwr_var_164_20_04_12t1618_00t1)
        break;
    }

    switch (u8(o + 10)) {
    case 0:
        break;
    case 1:
        ä(pmwr_flag, u32(o + 4), get_pmwr_flag)
        break;
    case 3:
        ö(u32(o + 4), get_pmwr_var_164_12_12t8_04t3)
        break;
    }

    // 16 bytes;

}
function get_pmwr_var_164_20_04_12t1618_00t1(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 12), get_pmwr_var_164_20_04_12t1618_00t1_12)

    // 16 bytes;

}
function get_pmwr_var_164_20_04_12t1618_00t1_12(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_var_164_20_04_12t1620(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_var_164_20_04_12t1620_00)
    ä(pmwr_world_20_12t8, u32(o + 8), get_pmwr_world_20_12t8)

    // 16 bytes;

}
function get_pmwr_var_164_20_04_12t1620_00(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_20_04_12t1636(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_var_164_20_04_12t1636_00)

    // 16 bytes;

}
function get_pmwr_var_164_20_04_12t1636_00(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_20_04_20(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_frame_text_0);
    switch (u32(o + 0)) {
    case 5:
        ö(u32(o + 8), get_pmwr_var_164_20_04_20_08t5)
        break;
    case 6:
        ö(u32(o + 8), get_pmwr_var_164_20_04_20_08t6)
        break;
    }
}
function get_pmwr_var_164_20_04_20_08t5(o) {
    // ü(3, [u32, 0], o)
    ;switch (u8(o + 8)) {
    case 0:
        ä(pmwr_flag, u32(o + 0), get_pmwr_flag)
        break;
    case 1:
        ö(u32(o + 0), get_pmwr_var_164_20_04_20_08t5_00t1)
        break;
    }

    switch (u8(o + 10)) {
    case 0:
        break;
    case 1:
        ä(pmwr_flag, u32(o + 4), get_pmwr_flag)
        break;
    case 3:
        ö(u32(o + 4), get_pmwr_var_164_12_12t8_04t3)
        break;
    }

    // 16 bytes;

}
function get_pmwr_var_164_20_04_20_08t5_00t1(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_var_164_20_04_20_08t5_00t1_04)
    ö(u32(o + 12), get_pmwr_var_164_20_04_20_08t5_00t1_12)

    // 16 bytes;

}
function get_pmwr_var_164_20_04_20_08t5_00t1_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_164_20_04_20_08t5_00t1_12(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_var_164_20_04_20_08t6(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_var_164_20_04_20_08t6_00)
    ä(pmwr_world_20_12t8, u32(o + 8), get_pmwr_world_20_12t8)

    // 16 bytes;

}
function get_pmwr_var_164_20_04_20_08t6_00(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_var_168(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 24), get_pmwr_var_164_12)
    }

    // 16 bytes;

}

function get_pmwr_world_settings(o) {
    // ü(3, [u32, 0], o)
    ß('p_texture', o, 16)
    ß('p_texture', o, 20)
    ß('p_texture', o, 24)
    ß('p_texture', o, 136);
    for (let ii = 0; ii < u32(o + 0); ii++) {
        ö(u32(o + 4) + (ii * 64), get_pmwr_world_settings_04)
    }
    ö(u32(o + 12), get_pmwr_world_settings_12)
    ö(u32(o + 36), get_pmwr_world_settings_36)
    ö(u32(o + 48), get_pmwr_world_settings_48)
    ö(u32(o + 52), get_pmwr_world_settings_52)
    ö(u32(o + 56), get_pmwr_world_settings_56)
    ö(u32(o + 60), get_pmwr_world_settings_60)
    ö(u32(o + 64), get_pmwr_world_settings_64)
    ö(u32(o + 68), get_pmwr_world_settings_68)
    ö(u32(o + 72), get_pmwr_world_settings_72)
    ö(u32(o + 76), get_pmwr_frame_text_0)

    ä(pmwr_frame_font, u32(o + 88), get_pmwr_frame_font)
    ö(u32(o + 192), get_pmwr_world_settings_192)
    ö(u32(o + 196), get_pmwr_world_settings_196)

    // 208 bytes;

}
function get_pmwr_world_settings_04(o) {
    // ü(3, [u32, 0], o)
    ;

}
function get_pmwr_world_settings_12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_world_settings_36(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_world_settings_48(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_world_settings_48_00)

    // 16 bytes;

}
function get_pmwr_world_settings_48_00(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_world_settings_52(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_world_settings_56(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_world_settings_60(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_world_settings_64(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_world_settings_68(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_world_settings_72(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_world_settings_192(o) {
    // ü(3, [u32, 0], o)
    ß('p_texture', o, 20)
    ä(pmwr_interface, u32(o + 0), get_pmwr_interface)
    ä(pmwr_interface, u32(o + 4), get_pmwr_interface)
    ö(u32(o + 12), get_pmwr_frame_text_0)
    ö(u32(o + 16), get_pmwr_frame_text_0)
    ä(pmwr_car, u32(o + 24), get_pmwr_car)
    ä(pmwr_car, u32(o + 28), get_pmwr_car)
    ä(pmwr_car, u32(o + 32), get_pmwr_car)

    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 8), get_pmwr_world_settings_192_40)
    }

    // 48 bytes;

}
function get_pmwr_world_settings_192_40(o) {
    // ü(3, [u32, 0], o)
    ;ö(u32(o + 0), get_pmwr_frame_text_0)

}
function get_pmwr_world_settings_196(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_world_settings_196_04)
    ö(u32(o + 8), get_pmwr_world_settings_196_04)
    ö(u32(o + 12), get_pmwr_world_settings_196_04)
    ö(u32(o + 16), get_pmwr_world_settings_196_04)

    // 32 bytes;

}
function get_pmwr_world_settings_196_04(o) {
    // ü(3, [u32, 0], o)
    ;for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 12), get_pmwr_world_settings_196_04_04)
    }

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_pmwr_world_settings_196_04_04)
    }

    // 32 bytes;

}
function get_pmwr_world_settings_196_04_04(o) {
    // ü(3, [u32, 0], o)
    ;

}

function get_pmwr_wtf(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_wtf_04)
    ö(u32(o + 8), get_pmwr_wtf_08)
    ö(u32(o + 12), get_pmwr_wtf_12)

    // 16 bytes;

}
function get_pmwr_wtf_04(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_wtf_08(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_wtf_08_00)
    switch (u32(o + 4)) {
    case 1:
        ö(u32(o + 8), get_pmwr_wtf_08_08t1)
        break;
    case 3:
        ö(u32(o + 8), get_pmwr_wtf_08_08t3)
        break;
    }
    // 16 bytes;

}
function get_pmwr_wtf_08_00(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_wtf_08_00_04)
    ö(u32(o + 12), get_pmwr_wtf_08_00_12)

    // 16 bytes;

}
function get_pmwr_wtf_08_00_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_wtf_08_00_12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_wtf_08_08t1(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_wtf_08_08t1_00)
    ö(u32(o + 8), get_pmwr_wtf_08_08t1_08)

    // 16 bytes;

}
function get_pmwr_wtf_08_08t1_00(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_wtf_08_08t1_00_04)
    ö(u32(o + 12), get_pmwr_wtf_08_08t1_00_12)

    // 16 bytes;

}
function get_pmwr_wtf_08_08t1_00_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_wtf_08_08t1_00_12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_wtf_08_08t1_08(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_wtf_08_08t1_08_08)
    ä(pmwr_gate, u32(o + 12), get_pmwr_gate)

    switch (u8(o + 1)) {
    case 0:
        ö(u32(o + 20), get_pmwr_wtf_08_08t1_08_20t0)
        break;
    case 2:
        break
    }
    // 32 bytes;

}
function get_pmwr_wtf_08_08t1_08_08(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}

function get_pmwr_wtf_08_08t1_08_20t0(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}

function get_pmwr_wtf_08_08t3(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_wtf_08_08t3_00)
    ö(u32(o + 8), get_pmwr_wtf_08_08t3_08)
    ö(u32(o + 12), get_pmwr_wtf_08_08t3_12)
    ö(u32(o + 20), get_pmwr_wtf_08_08t3_20)
    ö(u32(o + 24), get_pmwr_wtf_08_08t3_24)
    ö(u32(o + 32), get_pmwr_wtf_08_08t3_32)

    // 48 bytes;

}
function get_pmwr_wtf_08_08t3_00(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_wtf_08_08t3_00_04)
    ö(u32(o + 12), get_pmwr_wtf_08_08t3_00_12)

    // 16 bytes;

}
function get_pmwr_wtf_08_08t3_00_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_wtf_08_08t3_00_12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_wtf_08_08t3_08(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_wtf_08_08t3_08_08)
    ö(u32(o + 20), get_pmwr_wtf_08_08t3_08_20)

    // 32 bytes;

}
function get_pmwr_wtf_08_08t3_08_08(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_wtf_08_08t3_08_20(o) {
    // ü(3, [u32, 0], o)
    ;// 48 bytes;

}
function get_pmwr_wtf_08_08t3_12(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_wtf_08_08t3_12_04)

    // 16 bytes;

}
function get_pmwr_wtf_08_08t3_12_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_wtf_08_08t3_20(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_wtf_08_08t3_20_08)

    // 32 bytes;

}
function get_pmwr_wtf_08_08t3_20_08(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_wtf_08_08t3_24(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_wtf_08_08t3_24_04)
    switch (u32(o + 8)) {
    case 3:
        ö(u32(o + 12), get_pmwr_wtf_08_08t3_24_12)
        break;
    }
    // 16 bytes;

}
function get_pmwr_wtf_08_08t3_24_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_wtf_08_08t3_24_12(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
function get_pmwr_wtf_08_08t3_32(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 8), get_pmwr_wtf_08_08t3_32_08)

    // 32 bytes;

}
function get_pmwr_wtf_08_08t3_32_08(o) {
    // ü(3, [u32, 0], o)
    ;// 32 bytes;

}
function get_pmwr_wtf_12(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 0), get_pmwr_wtf_12_00)

    // 16 bytes;

}
function get_pmwr_wtf_12_00(o) {
    // ü(3, [u32, 0], o)
    ö(u32(o + 4), get_pmwr_wtf_12_00_04)

    // 16 bytes;

}
function get_pmwr_wtf_12_00_04(o) {
    // ü(3, [u32, 0], o)
    ;// 16 bytes;

}
