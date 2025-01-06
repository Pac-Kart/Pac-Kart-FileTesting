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

    globalThis.bmg_interface = []
    globalThis.bmg_text = []
    globalThis.bmg_font = []
    globalThis.bmg_interface_16_20t2_4_20 = []
    globalThis.bmg_item_36_4_4t1 = []
    globalThis.bmg_sound_controls = []
    globalThis.bmg_sound_section = []
    globalThis.bmg_unknown = []
    globalThis.bmg_car_144 = []
    globalThis.bmg_car_228_8_24t2 = []
    globalThis.bmg_model = []
    globalThis.bmg_model_anims_1 = []
    globalThis.bmg_model_anims_2 = []
    globalThis.bmg_unknown_4_4t2 = []
    globalThis.bmg_unknown_4_4t5 = []
    globalThis.bmg_unknown_4_4t7 = []
    globalThis.bmg_world_100_4 = []
    globalThis.bmg_world_84_0 = []
    globalThis.bmg_world_36_36 = []
    globalThis.bmg_world_36_48 = []
    globalThis.bmg_world_36_48_8_36 = []
    globalThis.bmg_collision_92 = []
    globalThis.bmg_collision_32_68 = []
    globalThis.bmg_collision_32_48 = []
    globalThis.bmg_world_12 = []
    globalThis.bmg_world_12_64 = []
    globalThis.bmg_world_12_64_48_0 = []
    globalThis.bmg_datapack_68_4t2_4 = []
    globalThis.bmg_world_108_44t6 = []
    globalThis.bmg_world_120_0 = []
    globalThis.bmg_world_52 = []
    globalThis.bmg_world_108 = []
    globalThis.bmg_world_156_156 = []
    globalThis.bmg_world_36_48_8 = []
    globalThis.bmg_world_36_48_16 = []
    globalThis.bmg_world_36_48_24 = []
    globalThis.bmg_car_160 = []
    globalThis.bmg_car_160_48 = []
    globalThis.bmg_unknown_4_4t29_12_32 = []
    globalThis.bmg_datapack_68_12_4_4 = []
    globalThis.bmg_world_76 = []
    globalThis.bmg_world_84 = []
    globalThis.bmg_datapack_68_4t5_12t0 = []
    globalThis.bmg_datapack_68_4trest_1st = []
    globalThis.bmg_datapack_68_4trest_2nd = []
    globalThis.bmg_world_20 = []
    globalThis.bmg_datapack_132_4 = []
    globalThis.bmg_link_20_4_0 = []
    globalThis.bmg_interface = []
    globalThis.bmg_interface_84_24_4_4_12t1_12t4 = []
    globalThis.bmg_interface_84_24_24 = []
    globalThis.bmg_interface_92_36t16_0 = []
    globalThis.bmg_interface_92_36t16_32 = []
    globalThis.bmg_interface_92_36t1_12 = []
    globalThis.bmg_interface_84_16_4_12 = []
    globalThis.bmg_interface_92_36t1_12t1 = []
        globalThis.bmg_interface_92_36t1_12t0 = []

    director_offset = o
    g.type = u32(o + 4)

    /*types finished
    * 1 = interface
    * 3 = link [f]
    * 4 = world
    */

    switch (g.type) {
    case 1:
    case 3:
        // case 4:
        get_bmg_datapack(end_offset + u32(o + 20), u32(o + 16))
        break
    }

    print_logarray(log_array)

}

function get_bmg_datapack(o, e) {
    if (u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 112) || u32(o + 116) || u32(o + 120) || u32(o + 124) || u32(o + 128) || u32(o + 144) || u32(o + 148) || u32(o + 152) || u32(o + 156) || u32(o + 164) || u32(o + 168) || u32(o + 172) || u32(o + 176) || u32(o + 184))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188], o)

    let end_datapack = o + e
    let offset_patch_list = end_datapack - (u32(o + 12) * 4 + (u32(o + 56) * 8))
    offset_mid = offset_patch_list - u32(o)
    let index_patch_list_amount = u32(o + 16) + u32(o + 52) + u32(o + 28)
    // let index_patch_list_amount = u32(o+16) + u32(o+52) + u32(o+28)
    index_patch_list_amount *= 8
    if (g.file_name !== 'mcp.xdx9') {
        index_patch_list_amount = divisible(index_patch_list_amount, 32)
    }
    let index_patch_list = offset_mid - index_patch_list_amount
    if (index_patch_list === 21680096 && g.file_name === 'mcp.xdx9') {
        index_patch_list = 21679952
    }
    // ü(0, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188], o)

    // console.log(end_datapack, offset_patch_list,index_patch_list,index_patch_list_amount)

    // let after_datapack = o + 192
    // for (let i = 0; i < u32(o+16); i++) {
    //     // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], after_datapack + (i *16))
    // }
    // after_datapack+= u32(o+16) * 16
    // for (let i = 0; i < u32(o+20); i++) {
    //     ü(1, [u32, 0], after_datapack + (i *4))
    // }

    // if (g.file_name === 'mcp.xdx9') {
    //     offset_mid = 177204
    //     end_datapack = 177108
    // } else {
    //     end_datapack = 177216
    //     offset_mid = 177312
    // }
    bmg_get_index_patch_list(o, index_patch_list)
    bmg_get_offset_patch_list(o, offset_mid + u32(o))

    globalThis.old_log_array = structuredClone(log_array)

    get_bmg_basic(offset_mid)

    // // ö(u32(o + 24), get_bmg_string)

    for (let i = 0; i < u32(o + 100); i++) {
        ö(u32(o + 132) + (i * 8), get_bmg_datapack_132)
    }

    //16 - 20 = either 

    //12 = end offsetes prob
    // let end_datapack = o + 120
    // if (g.console === 'ps2') {
    //     end_datapack = divisible(end_datapack, 2048)
    //     // console.log("sound list",end_datapack)
    //     if (u32(o + 8) || u32(o + 4)) {
    //         end_datapack += divisible(u32(o + 8) * 4, 32)
    //         // console.log("after sound list",end_datapack)
    //         end_datapack += u32(o + 4)
    //         end_datapack = divisible(end_datapack, 2048)
    //         // console.log("patch list",end_datapack)
    //     }
    //     // offset_mid = end_datapack + ((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8)
    //     // console.log("mid",offset_mid)

    // } else {
    //     if (u32(o + 8) || u32(o + 4)) {
    //         end_datapack += divisible(u32(o + 8) * 4, 32)
    //         // console.log("after sound list",end_datapack)
    //         end_datapack += u32(o + 4)
    //         // console.log("patch list",end_datapack)
    //     }
    //     // offset_mid = end_datapack + ((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8)
    //     // console.log("mid",offset_mid)
    // }

    // offset_mid = end_datapack + divisible(((u32(o + 16) + u32(o + 28) + u32(o + 52)) * 8), 32)
    // // console.log("mid",offset_mid)

    // // if (u32(o + 8)) {
    // //     let calc_audio = o + 120
    // //     let afteroffsetlist = calc_audio + (u32(o + 8) * 4)
    // //     for (let i = 0; i < u32(o + 8); i++) {// get_bmg_audio_list(u32(calc_audio + (i * 4)) + afteroffsetlist, (i+1) == u32(o + 8),afteroffsetlist,end_datapack,o)
    // //     }
    // //     let final_audio = (u32(calc_audio + (u32(o + 8) * 4)) + afteroffsetlist)
    // //     console.log(final_audio,afteroffsetlist)
    // // }

    // // // if (u32(o + 68)) {
    // // //     log_array.p_offset.array.push(u32(o + 68))
    // // // }

    // bmg_get_index_patch_list(o, end_datapack)
    // bmg_get_offset_patch_list(o, offset_mid + u32(o))

    // if (g.console === "gamecube") {
    //     for (let i = 0; i < u32(o + 20); i++) {
    //         get_bmg_texture(offset_mid + u32(o + 24) + (i * 32))
    //     }
    // } else {
    //     for (let i = 0; i < u32(o + 20); i++) {
    //         get_bmg_texture(offset_mid + u32(o + 24) + (i * 16))
    //     }
    // }

    // // for (let i = 0; i < u32(o + 48); i++) {
    // //     get_bmg_texture_anims(offset_mid + u32(o + 60) + (i * 12))
    // // }

    // // // let calcoffset = (u32(o + 8) * 4 + (o + 120))
    // // // if (u32(o + 72)) {//always type 4
    // // // // get_bmg_datapack_72(calcoffset + u32(o + 72) )
    // // // }
    // // // if (u32(o + 76)) {
    // // //     if (u32(o+72)) {
    // // //     console.log(calcoffset, calcoffset + u32(o + 76))
    // // //     }else{
    // // //     }
    // // //     //10 or 4
    // // //     //related to datapack somehow?
    // // //     get_bmg_datapack_76(calcoffset + u32(o + 76))
    // // // }

    // // // if (g.type === 10) {
    // // //     ü(3, [u32, 0], o) //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], o)
    // // //     console.log(o + 120)
    // // // }

    // switch (g.type) {
    // case 0:
    // case 1:
    // case 2:
    // case 3:
    // case 9:
    // case 10:
    //     get_bmg_basic(offset_mid)
    //     break
    // case 4:
    //     // get_bmg_world(offset_mid)
    //     break
    // case 5:
    //     // get_bmg_collision(offset_mid)
    //     break
    // case 6:
    //     // if (u32(o+48)) {
    //     //     console.log("???",u32(o+48),u32(o+60))
    //     // }
    //     // if (u32(o + 24) !== 16) {
    //     // get_bmg_texture_basic(offset_mid,offset_mid + u32(o + 24))
    //     // }
    //     break
    // case 8:
    //     // for (let i = 0; i < u32(o + 56); i++) {
    //     //     get_bmg_share(offset_mid + (i * 4))
    //     // }
    //     // if (g.file_name === 'HW_SHARE_PROTO.XPS') {
    //     //     let get_end = (u32(o + 40) * 1024) + u32(o + 44) + offset_mid
    //     //     get_bmg_share_end(get_end)
    //     // }
    //     break
    // default:
    //     console.log("?")
    // }

}
function get_bmg_share(o) {
    ß('p_model', o, 0)
    // ü(3, [u32, 0], o) //ü(1, [u32, 0, u32, 4, u32, 8], o)
}

function get_bmg_share_end(o) {
    if (u32(o + 0) !== 1066432 || u32(o + 4) !== 96 || u32(o + 8) !== 1066448 || u32(o + 12) || u16(o + 16) || u16(o + 18) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28], o)
    ö(u32(o + 0), get_bmg_string)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 4), get_bmg_share_end_8)
    }

}

function get_bmg_share_end_8(o) {
    // ü(3, [u32, 0], o) //ü(1, [u32, 0], o)
    ß('p_texture', o, 0)

}

function get_bmg_texture_anims(o) {
    if (u32(o + 4) || u32(o + 8))
        ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 0), get_bmg_texture_anims_0)

}

function get_bmg_audio_list(o, f, afteroffsetlist, end_datapack, datapackoffset) {
    if (u16(o + 16) !== 4096 || u16(o + 18) !== 32767 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28], o)

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
        console.log(`end_audio: ${end_audio}  filepatchers:${end_datapack}'dif:', ${end_datapack - end_audio} 
        ,'72:',${bmg_datapack_72}, val ${u32(datapackoffset + 72)}, 72 - 76: ${bmg_datapack_72 - bmg_datapack_76}
         '76:',${bmg_datapack_76} val ${u32(datapackoffset + 76)}
                   `)
        // ü(3, [u32, 0], o) //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u16, 18, u32, 20, u32, 24, u32, 28], o)
    }
}

function get_bmg_datapack_72(o) {
    ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, ], o)
}
function get_bmg_datapack_76(o) {
    if (u32(o + 0) !== 12 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_texture_basic(o, textureoffset) {
    ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    // if (o === textureoffset) {
    //     //ignore this
    //     return
    // }
    // console.log(o - textureoffset,'type',o)
    // ü(3, [u32, 0], o) //ü(1, [u16, 0,u16, 2, u16, 4,u16, 6, u32, 8, u32, 12], o)

}

function get_bmg_texture(o) {
    ö(u32(o + 8), get_bmg_texture_8)

    // ü(1, [u8, 0], o)
}

function get_bmg_texture_8(o) {//texture data
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

function bmg_get_offset_patch_list(o, patch_offset) {
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

function get_bmg_world(o) {
    ü(3, [u32, 0], o)
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

function get_bmg_datapack_132(o) {
    if (u32(o + 0))
        ü(1, [u32, 0, u32, 4], o)
    ä(bmg_datapack_132_4, u32(o + 4), get_bmg_datapack_132_4)

}
function get_bmg_datapack_132_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 0), get_bmg_datapack_132_4_0)

}

function get_bmg_datapack_132_4_0(o) {// console.log(get_string(o, 0, false))
}

function get_bmg_model_anims_1(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 3)
        ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u8, 52, u8, 53, u8, 54, u8, 55, u8, 56, u8, 57, u8, 58, u8, 59, u8, 60, u8, 61, u8, 62, u8, 63, ], o)

    ö(u32(o + 24), get_bmg_model_anims_1_24)
    ö(u32(o + 28), get_bmg_model_anims_1_28)
    ö(u32(o + 32), get_bmg_model_anims_1_32)
    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 36) + (i * 16), get_bmg_model_anims_1_36)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 44) + (i * 28), get_bmg_model_anims_1_44)
    }

}

function get_bmg_model_anims_1_24(o) {// if (u8(o + 0) || u8(o + 6) || u8(o + 7))
//     ü(3, [u32, 0], o) //ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7], o)
// ü(3, [u8, 0], o)
}
function get_bmg_model_anims_1_28(o) {// if (u32(o + 0) !== 8323199 || u32(o + 4) !== 8323199 || u32(o + 8) !== 8323199 || u8(o + 12) !== 127 || u8(o + 13))
// ü(3, [u32, 0], o) //ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, ], o)
// console.log(get_string(o + 14, 0, false))

}
function get_bmg_model_anims_1_32(o) {// if (f32(o + 0) !== -10 || f32(o + 4) !== 10)
// ü(3, [u32, 0], o) //ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, ], o)

}
function get_bmg_model_anims_1_36(o) {// ü(3, [u32, 0], o) //ü(1, [f32, 0, f32, 4, f32, 8, f32, 12], o)
}
function get_bmg_model_anims_1_44(o) {// ü(3, [u32, 0], o) //ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20], o)
}

function get_bmg_link(o) {
    if (u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)

    ö(u32(o + 0), get_bmg_link_0)
    // string link whatever
    ö(u32(o + 20), get_bmg_link_20)
    ö(u32(o + 36), get_bmg_interface)
    ö(u32(o + 40), get_bmg_link_40)
    //string intrface_BETA
    ö(u32(o + 48), get_bmg_link_48)
    //string intrface_BETA
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
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_link_20(o) {
    if (u32(o + 0) !== 463 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_link_20_4)
    }

}

function get_bmg_link_20_4(o) {
    // ü(1, [u32, 0], o)
    ä(bmg_link_20_4_0, u32(o + 0), get_bmg_link_20_4_0)
}
function get_bmg_link_20_4_0(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 24) || u32(o + 32) || u32(o + 36) || u8(o + 41) || u8(o + 43) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, f32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44], o)
    ö(u32(o + 8), get_bmg_link_20_4_0_8)
    if (u32(o + 12) === 144) {
        ö(u32(o + 20), get_bmg_link_20_4_0_20t144)
    } else {
        ö(u32(o + 20), get_bmg_link_20_4_0_20)

    }

}

function get_bmg_link_20_4_0_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_link_20_4_0_20(o) {
    // ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12], o)
    ö(u32(o + 4), get_bmg_link_20_4_0_20_4)
}

function get_bmg_link_20_4_0_20t144(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_link_20_4_0_20_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)
}

function get_bmg_interface(o) {
    if (u32(o + 8) !== 1 || u32(o + 20) || u32(o + 28) || u32(o + 40) || u32(o + 44) || u32(o + 48) !== 1 || u32(o + 64) || u32(o + 72) !== 100)
        ü(1, [u32, 0, u16, 4, u16, 6, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, f32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u8, 56, u8, 57, u8, 58, u8, 59, u32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)

    ö(u32(o + 0), get_bmg_interface_0)
    //text
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

// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_sound_controls(o) {
    if (u32(o + 4) || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 11) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 16), get_bmg_sound_controls_16)
    }

}

function get_bmg_sound_controls_16(o) {
    if (u32(o + 0) !== 1 || u32(o + 8))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12], o)
    ö(u32(o + 4), get_bmg_sound_controls_16_4)

}

function get_bmg_sound_controls_16_4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_sound_controls_16_4_0)

}

function get_bmg_sound_controls_16_4_0(o) {
    if (u32(o + 4) || u8(o + 8) || u8(o + 9) !== 1 || u8(o + 10) !== 1 || u8(o + 11) || f32(o + 16) !== 1 || u32(o + 20) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ß('p_sound', o, 0)
    ö(u32(o + 24), get_bmg_sound_controls_16_4_0_24)

}

function get_bmg_sound_controls_16_4_0_24(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 8) !== 1 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_52(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_60(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_interface_60_0)

}

function get_bmg_interface_60_0(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
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
    case 0:
        ö(u32(o + 12), get_bmg_interface_76_4_12t0)
        break
    case 1:
        ö(u32(o + 12), get_bmg_interface_76_4_12t1)
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
            ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, ], o)
        }
    }

}

function get_bmg_interface_76_4_0(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_76_4_12t0(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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

function get_bmg_interface_76_4_12t7(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_76_4_12t8(o) {
if(u32(o+8) ||u32(o+12) ||u32(o+16) ||u32(o+20) ||u32(o+24) ||u32(o+28) )
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)


ö(u32(o + 4), get_bmg_interface_76_4_12t8_4)

    }

function get_bmg_interface_76_4_12t8_4(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}

function get_bmg_interface_76_4_12t10(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ä(bmg_link_20_4_0, u32(o + 0), get_bmg_link_20_4_0)

}

function get_bmg_interface_84(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)
    ö(u32(o + 4), get_bmg_interface_84_4)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 8), get_bmg_interface_84_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 36), get_bmg_interface_84_24)
    }

}

function get_bmg_interface_84_4(o) {
    if (u8(o + 3) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 8), get_bmg_interface_84_4_8)
    ö(u32(o + 12), get_bmg_interface_84_4_12)

}

function get_bmg_interface_84_4_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_84_4_12(o) {
    if (u32(o + 0) !== 144 || u32(o + 4) !== 704 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 4), get_bmg_interface_84_4_12_4)

}

function get_bmg_interface_84_4_12_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_84_16(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4], o)
    ö(u32(o + 4), get_bmg_interface_84_16_4)

}

function get_bmg_interface_84_16_4(o) {
    if (u8(o + 3) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 8), get_bmg_interface_84_16_4_8)
    // ö(u32(o + 12), get_bmg_interface_84_16_4_12)
    if (u32(o+12)) {
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
    // ä(bmg_interface_84_16_4_12, u32(o + 12), get_bmg_interface_84_16_4_12)

}

function get_bmg_interface_84_16_4_8(o) {//sgring
}
function get_bmg_interface_84_16_4_12(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u32, 28, ], o)
    ö(u32(o + 4), get_bmg_interface_84_16_4_12_4)
    ö(u32(o + 8), get_bmg_interface_84_16_4_12_8)
    ö(u32(o + 20), get_bmg_interface_84_16_4_12_20)

}

function get_bmg_interface_84_16_4_12_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_bmg_interface_84_16_4_12_8(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_84_16_4_12_20(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_interface_84_24(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 16) || u32(o + 20) || u32(o + 28) || u32(o + 32))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32], o)

    switch (u8(o)) {
    case 1:
        ä(bmg_interface, u32(o + 4), get_bmg_interface)
        break
    case 3:
        ö(u32(o + 4), get_bmg_interface_84_24_4t3)
        break
    case 6:

        ö(u32(o + 4), get_bmg_interface_84_24_4t6)
        ö(u32(o + 12), get_bmg_interface_84_24_12t6)

        break
    case 9:

        ö(u32(o + 4), get_bmg_interface_84_24_4t9)
        break
    case 11:

        ö(u32(o + 4), get_bmg_interface_84_24_4t11)
        break
    case 41:

        ö(u32(o + 4), get_bmg_interface_84_24_4t41)
        ö(u32(o + 12), get_bmg_interface_84_24_12t41)
        break
    default:
        console.log(o)
    }
    //sound
    ä(bmg_sound_controls, u32(o + 24), get_bmg_sound_controls)

}

function get_bmg_interface_84_24_4t3(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_84_24_4t6(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_84_24_4t9(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_84_24_4t41(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_interface_84_24_4t11(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_bmg_interface_84_24_4_4)
    }

}

function get_bmg_interface_84_24_4_4(o) {
    if (u32(o + 4) || u8(o + 10) || u8(o + 11))
        ü(1, [u32, 0, u32, 4, u16, 8, u8, 10, u8, 11, u32, 12, u32, 16], o)
    ö(u32(o + 0), get_bmg_interface_84_24_4_4_0)
    // //text

    switch (u16(o + 8)) {
    case 1:
        ö(u32(o + 12), get_bmg_interface_84_24_4_4_12t1)
        break
    case 2:
        ö(u32(o + 12), get_bmg_interface_84_24_4_4_12t2)
        break
    case 102:
        ö(u32(o + 12), get_bmg_interface_84_24_4_4_12t102)
        break
    case 105:
        ö(u32(o + 12), get_bmg_interface_84_24_4_4_12t105)
        break
    case 112:
        ö(u32(o + 12), get_bmg_interface_84_24_4_4_12t112)
        break
    case 113:
        ö(u32(o + 12), get_bmg_interface_84_24_4_4_12t113)
        break
    case 114:
        ö(u32(o + 12), get_bmg_interface_84_24_4_4_12t114)
        break
    case 115:
        ö(u32(o + 12), get_bmg_interface_84_24_4_4_12t115)
        break
    default:
        console.log(o)
    }

}

function get_bmg_interface_84_24_4_4_0(o) {// console.log(get_string(o, 0, false))

}
function get_bmg_interface_84_24_4_4_12(o) {
    // if (u8(o + 0) !== 1 || u8(o + 1) !== 4 || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
    ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_bmg_interface_84_24_4_4_12t1(o) {
    if (u8(o + 3) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 8), get_bmg_interface_84_24_4_4_12t1_8)
    //string

    switch (u8(o)) {
    case 1:
        ö(u32(o + 12), get_bmg_interface_84_24_4_4_12t1_12t1)
        break
    case 4:
        // ä(bmg_interface_84_24_4_4_12t1_12t4, u32(o + 12), get_bmg_interface_84_24_4_4_12t1_12t4)
        ä(bmg_link_20_4_0, u32(o + 12), get_bmg_link_20_4_0)
        break
    case 7:
        ö(u32(o + 12), get_bmg_interface_84_24_4_4_12t1_12t7)
        break
    }

}

function get_bmg_interface_84_24_4_4_12t1_8(o) {//string
}
function get_bmg_interface_84_24_4_4_12t1_12t1(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_84_24_4_4_12t1_12t4(o) {
    if (u32(o + 0) || u32(o + 4) || u8(o + 24) || u8(o + 25) !== 1 || u8(o + 27) !== 1 || u32(o + 28) || u32(o + 32) || u32(o + 36) || u8(o + 40) !== 1 || u8(o + 41) || u8(o + 43) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ö(u32(o + 8), get_bmg_interface_84_24_4_4_12t1_12t4_8)
    //string
    ö(u32(o + 20), get_bmg_interface_84_24_4_4_12t1_12t4_20)

}

function get_bmg_interface_84_24_4_4_12t1_12t4_8(o) {}
function get_bmg_interface_84_24_4_4_12t1_12t4_20(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_84_24_4_4_12t1_12t7(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 4), get_bmg_interface_84_24_4_4_12t1_12t7_4)

}

function get_bmg_interface_84_24_4_4_12t1_12t7_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_84_24_4_4_12t2(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_interface_84_24_4_4_12t2_0)
    ö(u32(o + 4), get_bmg_interface_84_24_4_4_12t2_4)

}

function get_bmg_interface_84_24_4_4_12t2_0(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 4), get_bmg_interface_84_24_4_4_12t2_0_4)

}

function get_bmg_interface_84_24_4_4_12t2_0_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_84_24_4_4_12t2_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_84_24_4_4_12t102(o) {
    if (u8(o + 13) || u8(o + 15) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_interface_84_24_4_4_12t102_0)
    //string
    ö(u32(o + 8), get_bmg_interface_84_24_4_4_12t102_8)
    ö(u32(o + 16), get_bmg_interface_84_24_4_4_12t102_16)

}

function get_bmg_interface_84_24_4_4_12t102_0(o) {}

function get_bmg_interface_84_24_4_4_12t102_8(o) {
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_84_24_4_4_12t102_16(o) {
    if (u8(o + 0) !== 1 || u8(o + 1) || u8(o + 2) || u8(o + 3) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_84_24_4_4_12t105(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_84_24_4_4_12t112(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_84_24_4_4_12t113(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_84_24_4_4_12t114(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_84_24_4_4_12t115(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_interface_84_24_12t6(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_interface_84_24_12t6_0)
    ö(u32(o + 4), get_bmg_interface_84_24_12t6_4)

}

function get_bmg_interface_84_24_12t6_0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_bmg_interface_84_24_12t6_4(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_bmg_interface_84_24_12t41(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 4), get_bmg_interface_84_24_12t41_4)
    //stin

}

function get_bmg_interface_84_24_12t41_4(o) {}

function get_bmg_interface_92(o) {
    if (u32(o + 4) || u8(o + 9) || u8(o + 24) || u8(o + 25) || u32(o + 28) || u32(o + 60) || u8(o + 72) !== 255 || u8(o + 73) !== 255 || u8(o + 74) !== 255 || u8(o + 75) !== 255 || u8(o + 76) !== 255 || u8(o + 77) !== 255 || u8(o + 78) !== 255 || u8(o + 79) !== 255 || u8(o + 80) !== 255 || u8(o + 81) !== 255 || u8(o + 82) !== 255 || u8(o + 83) !== 255 || u8(o + 84) !== 255 || u8(o + 85) !== 255 || u8(o + 86) !== 255 || u8(o + 87) !== 255 || u8(o + 88) !== 255 || u8(o + 89) !== 255 || u8(o + 90) !== 255 || u8(o + 91) !== 255 || u8(o + 92) !== 255 || u8(o + 93) !== 255 || u8(o + 94) !== 255 || u8(o + 95) !== 255 || u32(o + 96))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79, u8, 80, u8, 81, u8, 82, u8, 83, u8, 84, u8, 85, u8, 86, u8, 87, u8, 88, u8, 89, u8, 90, u8, 91, u8, 92, u8, 93, u8, 94, u8, 95, u32, 96], o)
    ö(u32(o + 0), get_bmg_interface_92_0)
    ö(u32(o + 12), get_bmg_interface_92_12)
    ö(u32(o + 16), get_bmg_interface_92_16)
    ö(u32(o + 32), get_bmg_interface_92_32)
    switch (u8(o + 26)) {
    case 0:
        ö(u32(o + 36), get_bmg_interface_92_36t0)
        break
    case 1:
        ö(u32(o + 36), get_bmg_interface_92_36t1)
        break
    case 6:
        ö(u32(o + 36), get_bmg_interface_92_36t6)
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
        console.log(u8(o + 26))
    }
    ö(u32(o + 40), get_bmg_interface_92_40)

    ö(u32(o + 52), get_bmg_interface_92_52)
    ö(u32(o + 68), get_bmg_interface_92_68)

}

function get_bmg_interface_92_0(o) {// console.log(get_string(o, 0, false))
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_92_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_92_16(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_92_32(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 8), get_bmg_interface_92_32_8)

}

function get_bmg_interface_92_32_8(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 4), get_bmg_interface_92_32_8_4)

}

function get_bmg_interface_92_32_8_4(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 8), get_bmg_interface_92_32_8_4_8)
    ö(u32(o + 12), get_bmg_interface_92_32_8_4_12)

}

function get_bmg_interface_92_32_8_4_8(o) {// console.log(get_string(o, 0, false))
}
function get_bmg_interface_92_32_8_4_12(o) {
ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_92_36t0(o) {
    if (u8(o + 3) || u8(o + 14) || u8(o + 15))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, ], o)
    ß('p_texture', o, 4)
    ö(u32(o + 8), get_bmg_interface_92_36t0_8)

}

function get_bmg_interface_92_36t0_8(o) {
    if (u32(o + 0) !== 2 || u32(o + 8) !== 1 || u32(o + 12) || u8(o + 16) !== 1 || u8(o + 17) || u8(o + 18) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_interface_92_36t0_8_4)
    }

}

function get_bmg_interface_92_36t0_8_4(o) {
/*ü(1, [u32, 0], o)*/
 ß('p_texture', o, 0)

}

function get_bmg_interface_92_36t1(o) {
    if (u8(o + 1) || u8(o + 3) !== 5)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u16, 22, u16, 24, u8, 26, u8, 27, f32, 28, ], o)

    // ö(u32(o + 4), get_bmg_interface_92_36t1_4)
    ä(bmg_datapack_132_4, u32(o + 4), get_bmg_datapack_132_4)

    // ö(u32(o + 8), get_bmg_interface_92_36t1_8)
    // ö(u32(o + 12), get_bmg_interface_92_36t1_12t1)
    // sü(u8, 0, o, 12)
    switch (u8(o + 2)) {
    case 0:
    ä(bmg_interface_92_36t1_12t0, u32(o + 12), get_bmg_interface_92_36t1_12t0)
        // ö(u32(o + 12), get_bmg_interface_92_36t1_12t1t0)
        break
    case 1:
    ä(bmg_interface_92_36t1_12t1, u32(o + 12), get_bmg_interface_92_36t1_12t1)
    // ö(u32(o + 12), get_bmg_interface_92_36t1_12t1t1)
        break
    default:
        if (u32(o + 12)) {
            console.log(o)
        }
    }

    // ä(bmg_interface_92_36t1_12, u32(o + 12), get_bmg_interface_92_36t1_12t1t0)

    ö(u32(o + 16), get_bmg_interface_92_36t1_16)

}

function get_bmg_interface_92_36t1_12t0(o) {
ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
}

function get_bmg_interface_92_36t1_8(o) {
    if (u32(o + 0) !== 6 || u8(o + 8) !== 1 || u8(o + 9) || u16(o + 10) !== 1 || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u16, 10, u32, 12], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_interface_92_36t1_8_4)
    }

}

function get_bmg_interface_92_36t1_8_4(o) {
    // ü(1, [u32, 0], o)
    ä(bmg_datapack_132_4, u32(o + 0), get_bmg_datapack_132_4)

}

function get_bmg_interface_92_36t1_12t1(o) {
    if (u32(o + 8) !== 1052672 || f32(o + 12) !== 16 || u32(o + 16) !== 1 || u32(o + 24) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u8, 32,u8, 33,u8, 34,u8, 35, u32, 36, u32, 40, u32, 44], o)
        ü(3, [u32, 0, u32, 4, u32, 8, f32, 12], o)
    ß('p_texture', o, 0)
    // ö(u32(o + 4), get_bmg_interface_92_36t1_12t1_4)
    ö(u32(o + 20), get_bmg_interface_92_36t1_12t1_20)
    ö(u32(o + 28), get_bmg_interface_92_36t1_12t1_28)

}

function get_bmg_interface_92_36t1_12t1_4(o) {
    if (u32(o + 0) !== 131077 || f32(o + 4) !== 41 || f32(o + 8) !== 41 || u32(o + 12) || u32(o + 16) || u32(o + 20) !== 253 || u32(o + 28) !== 125 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 2), get_bmg_interface_92_36t1_12t1_4_24)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 24), get_bmg_interface_92_36t1_12t1_4_32)
    }
    ö(u32(o + 36), get_bmg_interface_92_36t1_12t1_4_36)

}

function get_bmg_interface_92_36t1_12t1_4_24(o) {// ü(1, [u16, 0], o)
}
function get_bmg_interface_92_36t1_12t1_4_32(o) {
    if (u8(o + 17) || u32(o + 20))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20], o)
}
function get_bmg_interface_92_36t1_12t1_4_36(o) {// console.log(get_string(o, 0, false))
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_bmg_interface_92_36t1_12t1_20(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_bmg_interface_92_36t1_12t1_28(o) {
    if (u8(o + 0) !== 32 || u8(o + 1) || u8(o + 2) || u8(o + 3) || f32(o + 4) !== 1 || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, u32, 8, u32, 12], o)
}
function get_bmg_interface_92_36t1_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_interface_92_36t6(o) {
    if (u8(o + 4) !== 1 || u8(o + 6) || u8(o + 7) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ä(bmg_interface, u32(o + 0), get_bmg_interface)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_bmg_interface_92_36t6_12)
    }

}

function get_bmg_interface_92_36t6_12(o) {
    if (u8(o + 5) || u8(o + 6) || u8(o + 7))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8], o)
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
    // ü(1, [u32, 0], o)
    ß('p_texture', o, 0)
}

function get_bmg_interface_92_36t14(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    ö(u32(o + 4), get_bmg_interface_92_36t14_4)

}

function get_bmg_interface_92_36t14_4(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) !== 1 || u8(o + 3) || u32(o + 4) || u8(o + 8) !== 3 || u8(o + 9) || u8(o + 10) || u8(o + 11) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
}

function get_bmg_interface_92_36t15(o) {
    if (u32(o + 0) !== 36000 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)

    ö(u32(o + 0), get_bmg_interface_92_36t15_0)

}

function get_bmg_interface_92_36t15_0(o) {
if(u32(o+4) ||u32(o+8) !==360 ||u32(o+12) !==1 ||u32(o+20) ||u32(o+24) ||u32(o+28) )
ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)


ö(u32(o + 16), get_bmg_interface_92_36t15_0_16)

    }

function get_bmg_interface_92_36t15_0_16(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}


function get_bmg_interface_92_36t16(o) {
    if (u32(o + 0) !== 370784 || u8(o + 4) !== 1 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) !== 1 || u32(o + 16) || u32(o + 20) !== 5 || u32(o + 24) || u32(o + 28) || u32(o + 32) !== 25376 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ä(bmg_interface_92_36t16_0, u32(o + 0), get_bmg_interface_92_36t16_0)

    // ä(bmg_interface_92_36t16_32, u32(o + 32), get_bmg_interface_92_36t16_32)
    ä(bmg_datapack_132_4, u32(o + 32), get_bmg_datapack_132_4)

}

function get_bmg_interface_92_36t16_0(o) {
    if (u32(o + 0) || u32(o + 4) !== 370816 || f32(o + 8) !== -15 || f32(o + 12) !== -4 || u32(o + 16) || u32(o + 20) !== 370944 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 4), get_bmg_interface_92_36t16_0_4)
    ö(u32(o + 20), get_bmg_interface_92_36t16_0_20)

}

function get_bmg_interface_92_36t16_0_4(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) !== 370880 || u32(o + 8) !== 3 || u32(o + 12) !== 370912 || u32(o + 16) || f32(o + 20) !== -18 || f32(o + 24) !== 1.100000023841858 || f32(o + 28) !== 1 || u32(o + 32) !== 100 || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ö(u32(o + 4), get_bmg_interface_92_36t16_0_4_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_bmg_interface_92_36t16_0_4_12)
    }

}

function get_bmg_interface_92_36t16_0_4_4(o) {
    if (u32(o + 0) !== 4128768 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_bmg_interface_92_36t16_0_4_12(o) {
    // ü(1, [u32, 0], o)
    ß('p_texture', o, 0)
}

function get_bmg_interface_92_36t16_0_20(o) {
    if (u32(o + 0) !== 370976 || u32(o + 4) !== 371040 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_interface_92_36t16_0_20_0)
    ö(u32(o + 4), get_bmg_interface_92_36t16_0_20_4)

}

function get_bmg_interface_92_36t16_0_20_0(o) {
    if (u32(o + 0) !== 4 || u32(o + 4) !== 371008 || f32(o + 8) !== -93 || u32(o + 12) || f32(o + 16) !== 1.399999976158142 || f32(o + 20) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_interface_92_36t16_0_20_0_4)
    }

}

function get_bmg_interface_92_36t16_0_20_0_4(o) {
    // ü(1, [u32, 0], o)
    ß('p_texture', o, 0)
}

function get_bmg_interface_92_36t16_0_20_4(o) {
    if (u32(o + 0) !== 4 || u32(o + 4) !== 371072 || f32(o + 8) !== 93 || f32(o + 12) !== -1 || f32(o + 16) !== 1.399999976158142 || f32(o + 20) !== 1 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_interface_92_36t16_0_20_4_4)
    }

}

function get_bmg_interface_92_36t16_0_20_4_4(o) {
    // ü(1, [u32, 0], o)
    ß('p_texture', o, 0)
}

function get_bmg_interface_92_36t16_32(o) {
    if (u32(o + 0) !== 25408 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_interface_92_36t16_32_0)

}

function get_bmg_interface_92_36t16_32_0(o) {//srting
}

function get_bmg_interface_92_40(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 4) || u32(o + 8) || u8(o + 13) || u8(o + 14) || u8(o + 15) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u8(o + 76) || u8(o + 77) || u8(o + 80) || u8(o + 81) || u8(o + 82) || u8(o + 83) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u8, 76, u8, 77, u8, 78, u8, 79, u8, 80, u8, 81, u8, 82, u8, 83, u32, 84, u32, 88, u32, 92], o)
}

function get_bmg_interface_92_52(o) {
    if (u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ö(u32(o + 4), get_bmg_interface_92_52_4)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_bmg_interface_92_52_12)
    }
    ö(u32(o + 20), get_bmg_interface_92_52_20)
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_bmg_interface_92_52_28)
    }
    ö(u32(o + 36), get_bmg_interface_92_52_36)

}

function get_bmg_interface_92_52_4(o) {
    if (u32(o + 8) || u32(o + 12) || u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_interface_92_52_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u8(o + 16) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_interface_92_52_20(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28, ], o)
}
function get_bmg_interface_92_52_28(o) {
    if (u8(o + 4) || u8(o + 6) || u8(o + 7))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}
function get_bmg_interface_92_52_36(o) {
ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
}

function get_bmg_interface_92_68(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u8(o + 13) || u8(o + 14) || u8(o + 15))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15], o)
    ö(u32(o + 4), get_bmg_interface_92_68_4)

}

function get_bmg_interface_92_68_4(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ö(u32(o + 4), get_bmg_interface_92_68_4_4)
    ö(u32(o + 12), get_bmg_interface_92_68_4_12)

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 32), get_bmg_interface_92_68_4_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_bmg_interface_92_68_4_36)
    }

}

function get_bmg_interface_92_68_4_4(o) {
    if (u32(o + 0) || u8(o + 4) !== 1 || u8(o + 5) || u8(o + 6) || u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, u32, 12, u32, 16, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, f32, 28, ], o)
}
function get_bmg_interface_92_68_4_12(o) {
    ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_bmg_interface_92_68_4_28(o) {
    if (f32(o + 8) !== 1 || u32(o + 12) || u8(o + 18) || u8(o + 19) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, f32, 20, u32, 24, u32, 28], o)
}
function get_bmg_interface_92_68_4_36(o) {
    if (u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8], o)
}

function get_bmg_link_40(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_link_48(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_link_60(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_bmg_link_60_4)
    //string
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
    // ü(1, [u32, 0], o)
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
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 16), get_bmg_link_68_0_4_4)
    }
    ö(u32(o + 8), get_bmg_link_68_0_4_8)
    ö(u32(o + 12), get_bmg_link_68_0_4_12)
    //string
    ö(u32(o + 20), get_bmg_link_68_0_4_20)
    ö(u32(o + 28), get_bmg_link_68_0_4_28)

}

function get_bmg_link_68_0_4_4(o) {
    if (u8(o + 1) || u8(o + 2) || u8(o + 3) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12], o)
    switch (u8(o)) {
    case 0:
        //string
        ö(u32(o + 4), get_bmg_link_68_0_4_4_4)
        break
    case 1:
        ö(u32(o + 4), get_bmg_link_68_0_4_4_4t1)
        break
    }
    ö(u32(o + 8), get_bmg_link_68_0_4_4_8)

}

function get_bmg_link_68_0_4_4_4(o) {// console.log(get_string(o, 0, false))
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_link_68_0_4_4_4t1(o) {
    if (u32(o + 0) !== 90208 || u32(o + 4) !== 11 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_bmg_link_68_0_4_4_4t1_0)

}

function get_bmg_link_68_0_4_4_4t1_0(o) {//string
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

function get_bmg_link_68_0_4_8_0(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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
        //string
        ö(u32(o + 4), get_bmg_link_68_0_4_20_4_4t0)
        break
    case 1:
        ö(u32(o + 4), get_bmg_link_68_0_4_20_4_4t1)
        break
    case 3:
        ö(u32(o + 4), get_bmg_link_68_0_4_20_4_4t3)
        break
    default:
        console.log(o)
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

function get_bmg_link_68_0_4_20_4_4t1_0(o) {//string
// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// console.log(get_string(o, 0, false))

}

function get_bmg_link_68_0_4_20_4_4t3(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
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

function get_bmg_link_76(o) {// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// console.log(get_string(o, 0, false))
}

function get_bmg_model(o) {
    if (u16(o + 0) !== 4101 || u32(o + 44) || u32(o + 60))
        ü(3, [u32, 0], o)
    //ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, ], o)

    //gc = always 8195
    //ps2 = always 4101
    //pc = 2
    globalThis.modeltypeval = u32(o + 4)

    for (let i = 0; i < u16(o + 2); i++) {
        ö(u32(o + 8) + (i * 24), get_bmg_model_8)
        ö(u32(o + 12) + (i * 4), get_bmg_model_12)

    }

}

function get_bmg_model_8(o) {
    if (u8(o + 1) || u8(o + 3))
        ü(3, [u32, 0], o)
    //ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20], o)

    for (let i = 0; i < u16(o + 2); i++) {
        ö(u32(o + 8) + (i * 32), get_bmg_model_8_8)
    }
    ö(u32(o + 20), get_bmg_string)

}

function get_bmg_model_8_20(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_bmg_model_8_8(o) {
    if (u32(o + 8) || u8(o + 25))
        ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
    ß('p_texture', o, 24)
    ß('p_animation', o, 0)

    switch (modeltypeval) {
    case 0:
        ö(u32(o + 12), get_bmg_model_8_8_12t0)
        break
    case 7:
        ö(u32(o + 12), get_bmg_model_8_8_12t7)
        break
    case 8:
        ö(u32(o + 12), get_bmg_model_8_8_12t8)
        break
    }
}

function get_bmg_model_8_8_12t0(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u8(o + 18) || u8(o + 19) !== 96 || u32(o + 20) || u32(o + 24) || u32(o + 28) || u16(o + 32) || u8(o + 34) || u8(o + 35) !== 3 || u8(o + 36) !== 220 || u8(o + 37) !== 1 || u8(o + 38) || u8(o + 39) !== 2 || u8(o + 40) !== 4 || u8(o + 41) !== 4 || u8(o + 42) || u8(o + 43) !== 1 || u8(o + 44) || u8(o + 45) !== 128 || u8(o + 46) !== 1 || u8(o + 47) !== 108 || u8(o + 49) !== 128 || u8(o + 50) || u8(o + 51) || u8(o + 52) || u8(o + 53) !== 64 || u8(o + 55) !== 48 || u16(o + 56) !== 1298 || u16(o + 58) || u8(o + 60) || u8(o + 61) || u8(o + 62) || u8(o + 63) || u8(o + 64) !== 3 || u8(o + 65) !== 1 || u8(o + 66) || u8(o + 67) !== 1 || u8(o + 68) !== 1 || u8(o + 69) !== 128 || u8(o + 71) !== 108)
        ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u16, 32, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u16, 56, u16, 58, u8, 60, u8, 61, u8, 62, u8, 63, u8, 64, u8, 65, u8, 66, u8, 67, u8, 68, u8, 69, u8, 70, u8, 71], o)

}

function get_bmg_model_8_8_12t7(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 196609 || u32(o + 24) || u32(o + 28))
        ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 20), get_bmg_model_8_8_12t7_20)

}

function get_bmg_model_8_8_12t7_20(o) {
    if (u16(o + 2) !== 24576 || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 50331648 || u32(o + 20) !== 33554928 || u32(o + 24) !== 16778244 || u32(o + 28) !== 1812037632 || u32(o + 36) !== 2416820224 || u32(o + 40) !== 307307794 || u32(o + 44) !== 5 || u8(o + 48) !== 3 || u8(o + 49) !== 1 || u8(o + 50) || u8(o + 51) !== 1 || u8(o + 52) !== 1 || u8(o + 53) !== 128 || u8(o + 55) !== 108)
        ü(3, [u32, 0], o)
    //ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55], o)
    let model_data = o + 56
    //81 or 36
    for (let i = 0; i < u8(o + 54); i++) {// ü(3, [u32, 0], o) //ü(1, [f32, 0,f32, 4, u8, 8,u8, 9,u8, 10,u8, 11, u8, 12,u8, 13,u8, 14,u8, 15,], model_data + i*16)
    }
    model_data += u8(o + 54) * 16
    // if(u32(o+0) !==1680900098 ) 
    // ü(3, [u32, 0], o) //ü(1, [u8, 0,u8, 1,u8, 2,u8, 3,], model_data + u8(o+54)*16)

    for (let i = 0; i < u8(model_data + 2); i++) {// ü(3, [u32, 0], o) //ü(1, [f32, 0,f32, 4], (model_data+4) + i*8)
    }
    model_data += u8(model_data + 2) * 8 + 4

    //     (model_data+4)
    // ü(3, [u32, 0], o) //ü(1, [u8, 0,u8, 1,u8, 2,u8, 3,], model_data)
    for (let i = 0; i < u8(model_data + 2); i++) {// ü(3, [u32, 0], o) //ü(1, [f32, 0,f32, 4,f32, 8], (model_data+4) + i*12)
    }
}

function get_bmg_model_8_8_12t8(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 197121 || u32(o + 24) !== 197892 || u32(o + 32) !== 460038 || u32(o + 40) || u32(o + 44))
        ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    ö(u32(o + 20), get_bmg_model_8_8_12t7_20)
    ö(u32(o + 28), get_bmg_model_8_8_12t7_20)
    ö(u32(o + 36), get_bmg_model_8_8_12t7_20)

}

function get_bmg_model_8_8_12t8_20(o) {
    // if(u16(o+0) !==112 ||u16(o+2) !==24576 ||u32(o+4) ||u32(o+8) ||u32(o+12) ||u32(o+16) !==50331648 ||u32(o+20) !==33554928 ||u32(o+24) !==16778244 ||u32(o+28) !==1812037632 ||u32(o+32) !==32784 ||u32(o+36) !==2416820224 ||u32(o+40) !==307307794 ||u32(o+44) !==5 ||u8(o+48) !==3 ||u8(o+49) !==1 ||u8(o+50) ||u8(o+51) !==1 ||u8(o+52) !==1 ||u8(o+53) !==128 ||u8(o+54) !==48 ||u8(o+55) !==108 ) 
    // ü(3, [u32, 0], o) //ü(1, [u16, 0,u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44,u8, 48,u8, 49,u8, 50,u8, 51, u8, 52,u8, 53,u8, 54,u8, 55], o)
    //1808 bytes
    let model_data = o + 56
    for (let i = 0; i < 48; i++) {
        ü(3, [u32, 0], o)
        //ü(1, [f32, 0, f32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, ], model_data + i * 16)
    }

    // if(u32(o+0) !==1680900098 ) 
    // ü(3, [u32, 0], o) //ü(1, [u32, 0], model_data + 48*16)
}
function get_bmg_model_8_8_12t8_28(o) {
    ü(3, [u32, 0], o)
    //ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55], o)
    //1808 bytes
}
function get_bmg_model_8_8_12t8_36(o) {
    ü(3, [u32, 0], o)
    //ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55], o)
    // ü(3, [u32, 0], o) //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o) 
    //1872 bytes
}

function get_bmg_model_12(o) {// ü(3, [u32, 0], o) //ü(1, [f32, 0], o)
}

function get_bmg_texture_anims_0(o) {
    if (u32(o + 0) || u32(o + 24) || u32(o + 28))
        ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_bmg_texture_anims_0_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 16), get_bmg_texture_anims_0_16)
    }
    ö(u32(o + 20), get_bmg_texture_anims_0_20)

}

function get_bmg_texture_anims_0_8(o) {
    if (u8(o + 3) !== 255)
        ü(3, [u32, 0], o)
    //ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_bmg_texture_anims_0_16(o) {// ü(3, [u32, 0], o) //ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_bmg_texture_anims_0_20(o) {
    if (u32(o + 12))
        ü(3, [u32, 0], o)
    //ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_bmg_texture_anims_0_20_4)
    }

}

function get_bmg_texture_anims_0_20_4(o) {
    // ü(3, [u32, 0], o) //ü(1, [u32,0], o)
    ß('p_texture', o, 0)
}
