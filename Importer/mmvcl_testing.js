function x_mm() {
    globalThis.offset_mid = buffer.byteLength - u32(12)
    let patchlistoffset = 60

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
        p_model: 0,
        multilinked: [],
        ä_array: [],
        p_model: {
            offset: 0,
            array: [],
            array_type: [],
        },
        p_offset: {
            offset: 0,
            array: [],
            pointers: [],
        },
        print: show_debug.checked
    }
    globalThis.texts = []
    globalThis.fonts = []
    globalThis.mm_sound_section = []
    globalThis.mm_sound_controls = []
    globalThis.interface = []
    globalThis.models = []
    globalThis.mm_texture_anims = []
    globalThis.models_array = []
    globalThis.car2 = []
    globalThis.mm_unknown = []
    globalThis.car3_44_44 = []
    globalThis.model_anims_1 = []
    globalThis.model_anims_2 = []
    globalThis.car_120 = []
    globalThis.car_172_44_100_0 = []
    globalThis.car_144_0 = []
    globalThis.car_model_sec = []
    globalThis.mm_unknown_4_4t4 = []
    globalThis.car_model_sec_48_8t1 = []
    globalThis.mm_unknown_4_4t1 = []
    globalThis.mm_unknown_4_4t2 = []
    globalThis.mm_unknown_4_4t5 = []
    globalThis.mm_unknown_4_4t8 = []
    globalThis.mm_unknown_4_4t27 = []
    globalThis.mm_unknown_4_4t28 = []
    globalThis.car3_44 = []
    globalThis.mm_unknown_4_4t2_104 = []
    globalThis.car_model_sec_56_4_24 = []
    globalThis.car_140_16_56 = []
    globalThis.mm_world_52_64 = []
    globalThis.mm_world_164_72 = []
    globalThis.mm_world_148_40 = []
    globalThis.mm_world_132_36 = []
    globalThis.mm_world_132_36_20 = []
    globalThis.mm_unknown_4_4t4_20 = []
    globalThis.mm_model_anims_1_36 = []
    globalThis.mm_model_anims_1_44 = []
    globalThis.mm_unknown_4_4t29_4_32 = []
    globalThis.mm_car3_44_0 = []

    get_mm_patch_list(12, patchlistoffset)

    globalThis.old_log_array = structuredClone(log_array)

    let cals = (u32(20) * 8) + (u32(32) * 8) + (u32(16) * 4) + 60
    if (cals === offset_mid) {} else {
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], 0)
    }

    let texture_offset = offset_mid + u32(28)
    log_array.p_model = buffer.byteLength
    for (let i = 0; i < u32(24); i++) {
        get_mm_texture(texture_offset + (i * 16))
    }
    let text_2_offset = offset_mid + u32(40)
    for (let i = 0; i < u32(36); i++) {
        get_mm_sounds(text_2_offset + (i * 16))
    }

    if (u32(8) === 4) {
        get_mm_basic(offset_mid)
    } else {
        get_mm_world(offset_mid)
    }
    for (let i = 0; i < u32(52); i++) {
        get_mm_model_texture_anims_list(u32(56) + (i * 12) + offset_mid)
    }

    print_logarray(log_array)

}

function get_mm_patch_list(o, patch_offset) {
    patchlistoffset = patch_offset
    log_array.p_texture.offset = patchlistoffset
    for (let i = 0; i < u32(o + 8); i++) {
        log_array.p_texture.array.push(u32(patchlistoffset + (i * 8)))
    }
    patchlistoffset += u32(o + 8) * 8
    log_array.p_sound.offset = patchlistoffset
    for (let i = 0; i < u32(o + 20); i++) {
        log_array.p_sound.array.push(u32(patchlistoffset + (i * 8)))
    }
    patchlistoffset += u32(o + 20) * 8

    log_array.p_offset.offset = patchlistoffset
    for (let i = 0; i < u32(o + 4); i++) {
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

function get_mm_model_texture_anims_list(o) {
    if (u8(o + 11))
        ü(1, [u32, 0, u32, 4, u16, 8, u8, 10, u8, 11], o)

    ä(mm_texture_anims, u32(o + 0), get_mm_mm_texture_anims)
    ä(models, u32(o + 4), get_mm_model)

}

function get_mm_mm_texture_anims(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 12), get_mm_mm_texture_anims_8)
    }
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 16), get_mm_mm_texture_anims_16)
    }
    ö(u32(o + 20), get_mm_mm_texture_anims_20)

}

function get_mm_mm_texture_anims_16(o) {// ü(1, [f32, 0, f32, 4, f32, 8, u32, 12], o)
}
function get_mm_mm_texture_anims_20(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_mm_mm_texture_anims_20_4)
    }

}

function get_mm_mm_texture_anims_20_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}

function get_mm_mm_texture_anims_8(o) {
    if (u8(o + 3) !== 255)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}

function get_mm_model(o) {
    if (u16(o + 0) !== 4101 || u32(o + 44) || u32(o + 60))
        ü(1, [u16, 0, u16, 2, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u8, 52, u8, 53, u8, 54, u8, 55, u8, 56, u8, 57, u8, 58, u8, 59, u32, 60, ], o)

    globalThis.modeltypeval = u32(o + 4)

    for (let i = 0; i < u16(o + 2); i++) {
        ö(u32(o + 12) + (i * 4), get_mm_model_12)
    }
    for (let i = 0; i < u16(o + 2); i++) {
        ö(u32(o + 8) + (i * 24), get_mm_model_8)
    }

}

function get_mm_model_12(o) {//render
// ü(1, [f32, 0], o)
}
function get_mm_model_8(o) {
    if (u8(o + 1) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4,u8, 5,u8, 6,u8, 7, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20], o)

    globalThis.modeltypeval = u8(o + 0)

    if (old_log_array.p_offset.array.includes(o + 12 - offset_mid)) {

        for (let i = 0; i < u32(o + 4); i++) {
            ö(u32(o + 12) + (i * 48), get_mm_model_8_12)
        }
    }

    // if (o === 753788) {
    // ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20], o)
    // }

    for (let i = 0; i < u8(o + 2); i++) {
        ö(u32(o + 8) + (i * 32), get_mm_model_8_8)
    }

    /*
0 | u8 | 1 | 753789
1 | u8 | 2 | 753790
0 | u8 | 3 | 753791
20 | u32 | 4 | 753792
731216 | u32 | 8 | 753796
730240 | u32 | 12 | 753800
0 | u8 | 16 | 753804
0 | u8 | 17 | 753805
0 | u8 | 18 | 753806
0 | u8 | 19 | 753807
731200 | u32 | 20 | 753808


    */

    //     if (u32(o+12) > 1730240) {
    // ü(1, [u8, 0,u8, 1,u8, 2,u8, 3, u32, 4, u32, 8, u32, 12,u8, 16, u8, 17, u8, 18, u8, 19, u32, 20], o)
    //     }

    ö(u32(o + 20), get_mm_model_8_20)
    // //strings

}

function get_mm_model_8_20(o) {// console.log(get_string(o, 0, false))
}
function get_mm_model_8_12(o) {
    if (f32(o + 28) !== 1.9999998807907104 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_mm_model_8_8(o) {
    if (u16(o + 0) || u32(o + 8) || u8(o + 18) || u8(o + 19) || u8(o + 21))
        ü(1, [u16, 0, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)
    ß('p_texture', o, 24)

    // probably
    // switch (modeltypeval) {
    // case 0:
    //     ü(1, [u16, 0, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)
    //     // ö(u32(o + 12), get_mm_model_8_8_12t0)
    //     break
    // case 4:
    //     // ö(u32(o + 12), get_mm_model_8_8_12t4)
    //     break
    // case 9:
    //     // ö(u32(o + 12), get_mm_model_8_8_12t9)
    //     break
    // case 36:
    //     // ö(u32(o + 12), get_mm_model_8_8_12t36)
    //     break
    // case 37:
    //     // ö(u32(o + 12), get_mm_model_8_8_12t37)
    //     break
    // case 45:
    //     // ö(u32(o + 12), get_mm_model_8_8_12t45)
    //     break
    // case 46:
    //     // ö(u32(o + 12), get_mm_model_8_8_12t46)
    //     break
    // case 47:
    //     // ö(u32(o + 12), get_mm_model_8_8_12t47)
    //     break
    // case 48:
    //     // ö(u32(o + 12), get_mm_model_8_8_12t48)
    //     break
    // case 55:
    //     // ö(u32(o + 12), get_mm_model_8_8_12t55)
    //     break
    // default:
    //     console.log(modeltypeval)
    //     // ,9,4,46,36,45,37,48,47,55
    // }

    switch (modeltypeval) {
    case 0:
        ü(1, [u16, 0, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)
        ö(u32(o + 12), get_mm_model_8_8_12t0)
        break
    case 1:
            /*176,208,240,256,272,288,304,320,352,368,384,400,416,432,448,464,480,496,512,528,544,560,576,592,624,640,656,672,688,704,736,768,784,800,816,832,848,864,880,912,928,960,992,1024,1040,1072,1104,1120,1136,1152,1168,1184,1216,1248,1264,1280,1296,1312,1328,1360,1376,1392,1408,1424,1440,1456,1472,1488,1504,1520,1536,1552,1568,1584,1600,1632,1648,1664,1680,1696,1712,1728,1744,1776,1792,1808,1824,1856,1888,1920,1936,1968,2000,2032,2048,2080,2112,2144,2160,2176,2192,2224,2256,2272,2288,2304,2320,2368,2400,2432,2464,2496,2512,2544,2576,2608,2624,2656,2688,2720,2736,2752,2768,2800,2832,2848,2864,2880,2896,2912,2944,2960,2992,3024,3056,3072,3088,3104,3120,3136,3168,3184,3200,3216,3232,3248,3280,3296,3312,3328,3344,3360,3376,3392,3408,3440,3456,3472,3488,3504,3520,3552,3584,3600,3616,3632,3664,3696,3728,3744,3776,3808,3840,3856,3888,3920,3952,3968,3984,4000,4032,4064,4080,4096,4112,4176,4192,4208,4224,4240,4256,4272,4288,4304,4320,4336,4352,4368,4384,4400,4416,4448,4464,4480,4496,4512,4528,4560,4608,4640,4672,4688,4704,4720,4752,4768,4784,4800,4816,4848,4864,4880,4896,4928,4944,4960,4976,4992,5024,5056,5072,5088,5104,5136,5168,5184,5200,5216,5248,5280,5312,5328,5360,5392,5424,5440,5472,5504,5536,5552,5568,5584,5616,5648,5664,5680,5696,5712,5728,5760,5776,5792,5824,5840,5872,5888,5920,5984,6000,6016,6032,6064,6080,6096,6112,6128,6160,6176,6208,6224,6288,6304,6336,6448,6480,6512,6544,6560,6592,6624,6656,6672,6704,6736,6768,6784,6800,6848,6880,6944,6992,7024,7056,7088,7120,7136,7168,7200,7232,7248,7280,7312,7344,7392,7456,7472,7488,7504,7520,7536,7568,7600,7616,7664,7680,7744,7776,7808,7872,7888,7904,7920,7952,8000,8032,8064,8096,8128,8144,8208,8240,8256,8288,8320,8384,8400,8432,8464,8512,8528,8576,8672,8688,8816,8912,8944,8960,9008,9024,9040,9088,9120,9152,9232,9264,9296,9328,9376,9392,9408,9440,9504,9808,10016,10096,10128,10160,10192,10288,10384,10416,10432,10512,10912,11136,11280,11600,11680,11856,11936,12112,12128,12912,12976,13024,13120,13136,13360,13712,14416,14640,15072,15104,15184,15312,15328,15360,15456,15504,15936,15968,16400,16832,17024,17168,17200,17344,17376,17424,17776,17824,18256,18480,18928,19568,20240,20480,20624,21744,22320,23632,23776,30736,35104,38896,39568,40016,42864,47840,49632,50128,57440,72208*/
        // ü(1, [u16, 0, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)
        ö(u32(o + 12), get_mm_model_8_8_12t1)
        break
    case 2:
        // ü(1, [u16, 0, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)
        ö(u32(o + 12), get_mm_model_8_8_12t2)
        // could be this type ???
        // if so what is type ?
        /*32,48,64,80,96,112,192*/
        break
    case 4:
        // ö(u32(o + 12), get_mm_model_8_8_12t4)
        break
    case 9:
        // ö(u32(o + 12), get_mm_model_8_8_12t9)
        break
    case 36:
        // ö(u32(o + 12), get_mm_model_8_8_12t36)
        break
    case 37:
        // ö(u32(o + 12), get_mm_model_8_8_12t37)
        break
    case 45:
        // ö(u32(o + 12), get_mm_model_8_8_12t45)
        break
    case 46:
        // ö(u32(o + 12), get_mm_model_8_8_12t46)
        break
    case 47:
        // ö(u32(o + 12), get_mm_model_8_8_12t47)
        break
    case 48:
        // ö(u32(o + 12), get_mm_model_8_8_12t48)
        break
    case 55:
        // ö(u32(o + 12), get_mm_model_8_8_12t55)
        break
    default:
        console.log(modeltypeval)
        // ,9,4,46,36,45,37,48,47,55
    }


    // ö(u32(o + 12), get_mm_model_8_8_12)

    // offset [12] not type 20
    // offset [12] not type 2 prob?
    // switch (u8(o + 2)) {
    // case 0:
    //     ö(u32(o + 12), get_mm_model_8_8_12t0)
    //     break
    // case 1:
    //     ö(u32(o + 12), get_mm_model_8_8_12t1)
    //     break
    // case 65:
    //     ö(u32(o + 12), get_mm_model_8_8_12t65)
    //     break
    // case 2:
    //     ö(u32(o + 12), get_mm_model_8_8_12t2)
    //     break
    // case 4:
    //     ö(u32(o + 12), get_mm_model_8_8_12t4)
    //     break
    // case 5:
    //     ö(u32(o + 12), get_mm_model_8_8_12t5)
    //     break
    // case 16:
    //     ö(u32(o + 12), get_mm_model_8_8_12t16)
    //     break
    // case 69:
    //     ö(u32(o + 12), get_mm_model_8_8_12t69)
    //     break
    // case 20:
    //     ö(u32(o + 12), get_mm_model_8_8_12t20)
    //     break
    // case 6:
    //     ö(u32(o + 12), get_mm_model_8_8_12t6)
    //     break
    // default:
    //     if (u32(o + 12)) {
    //         sü(u8, 2, o, 12)
    //     }
    // }
    // switch (u8(o + 17)) {
    // case 0:
    //     // ö(u32(o + 12), get_mm_model_8_8_12t0)
    //     break
    // case 1:
    //     ö(u32(o + 12), get_mm_model_8_8_12t1)
    //     break
    // case 2:
    //     ö(u32(o + 12), get_mm_model_8_8_12t2)
    //     break
    // case 3:
    //     ö(u32(o + 12), get_mm_model_8_8_12t3)
    //     break
    // case 4:
    //     ö(u32(o + 12), get_mm_model_8_8_12t4)
    //     break
    // default:
    //     if (u32(o + 12)) {
    //         sü(u8, 17, o, 12)
    //     }
    // }

    switch (u8(o + 3)) {
    case 0:
        // u8
        break
    case 4:
        ö(u32(o + 28), get_mm_model_8_8_28t4)
        break
    }

}
function get_mm_model_8_8_12t0(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_mm_model_8_8_12t1(o) {
    // probably
        // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u16, 52, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71], o)
}
function get_mm_model_8_8_12t2(o) {
        // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16,u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28], o)

    // probably not same sections prob
    // if (old_log_array.p_offset.array.includes(o + 28 - offset_mid)) {
    //     ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16,u8, 17, u8, 18, u8, 19, u32, 20, u8, 24,u8, 25,u8, 26,u8, 27, u32, 28], o)
    //     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16,u8, 17, u8, 18, u8, 19, u32, 20, u8, 24,u8, 25,u8, 26,u8, 27, u32, 28], o)
    // }else{
    //     ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16,u8, 17, u8, 18, u8, 19, u32, 20, u8, 24,u8, 25,u8, 26,u8, 27, u32, 28], o)
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16,u8, 17, u8, 18, u8, 19, u32, 20, u8, 24,u8, 25,u8, 26,u8, 27, u32, 28], o)
    // }

}
function get_mm_model_8_8_12t3(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_mm_model_8_8_12t4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

// function get_mm_model_8_8_12t0(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_mm_model_8_8_12t1(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_mm_model_8_8_12t65(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_mm_model_8_8_12t2(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_mm_model_8_8_12t4(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_mm_model_8_8_12t5(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_mm_model_8_8_12t16(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_mm_model_8_8_12t69(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_mm_model_8_8_12t20(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_mm_model_8_8_12t6(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }

// function get_mm_model_8_8_12t0(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     // model_data
// }
// function get_mm_model_8_8_12t4(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// // 32,48 bytes
// }
// function get_mm_model_8_8_12t9(o) {
//     if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) !== 459008 || u32(o + 20) !== 612624 || u32(o + 24) !== 524544 || u32(o + 28) !== 614976 || u32(o + 32) !== 132608 || u32(o + 36) !== 615808 || u32(o + 40) !== 131841 || u32(o + 44) !== 618256 || u32(o + 48) !== 16712452 || u32(o + 52) !== 621136 || u32(o + 56) || u32(o + 60))
//         ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

//     ö(u32(o + 20), get_mm_model_8_8_12t9_20)
//     ö(u32(o + 28), get_mm_model_8_8_12t9_28)
//     ö(u32(o + 36), get_mm_model_8_8_12t9_36)
//     ö(u32(o + 44), get_mm_model_8_8_12t9_44)
//     ö(u32(o + 52), get_mm_model_8_8_12t9_52)

// }

// function get_mm_model_8_8_12t9_20(o) {
//     // 2352
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// }
// function get_mm_model_8_8_12t9_28(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     // 832 bytes
// }
// function get_mm_model_8_8_12t9_36(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     // 2448 bytes
// }
// function get_mm_model_8_8_12t9_44(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     // 2880 bytes
// }
// function get_mm_model_8_8_12t9_52(o) {
//     ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
//     // 2240 bytes
// }

// function get_mm_model_8_8_12t36(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// // 32,192
// }
// function get_mm_model_8_8_12t37(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// // 96,112
// }
// function get_mm_model_8_8_12t45(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// // 48,64,80
// }
// function get_mm_model_8_8_12t46(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// // 
// }
// function get_mm_model_8_8_12t47(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// // 32,48,64,80,96
// }
// function get_mm_model_8_8_12t48(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// // 48,64,96
// }
// function get_mm_model_8_8_12t55(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// // 32,48,64
// }

function get_mm_model_8_8_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u16, 52, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71], o)
    // ü(3, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u16, 52, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71], o)

    // 32-72208 bytes

    if (old_log_array.p_offset.array.includes(o + 20 - offset_mid)) {
        ö(u32(o + 20), get_mm_model_8_8_12_20)
        ü(3, [u32, 0, u32, 4, u32, 8, u32, 12, u16, 16, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, u16, 52, u8, 54, u8, 55, u32, 56, u32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71], o)

    }
    if (old_log_array.p_offset.array.includes(o + 28 - offset_mid)) {
        ö(u32(o + 28), get_mm_model_8_8_12_28)
    }
    if (old_log_array.p_offset.array.includes(o + 36 - offset_mid)) {
        ö(u32(o + 36), get_mm_model_8_8_12_36)
    }
    if (old_log_array.p_offset.array.includes(o + 44 - offset_mid)) {
        ö(u32(o + 44), get_mm_model_8_8_12_44)
    }
    if (old_log_array.p_offset.array.includes(o + 52 - offset_mid)) {
        ö(u32(o + 52), get_mm_model_8_8_12_52)
    }
    if (old_log_array.p_offset.array.includes(o + 60 - offset_mid)) {
        ö(u32(o + 60), get_mm_model_8_8_12_60)
    }
    if (old_log_array.p_offset.array.includes(o + 68 - offset_mid)) {
        ö(u32(o + 68), get_mm_model_8_8_12_68)
    }
}

function get_mm_model_8_8_12_20(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_mm_model_8_8_12_28(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
// 720 bytes?
}
function get_mm_model_8_8_12_36(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_mm_model_8_8_12_44(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_mm_model_8_8_12_52(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_mm_model_8_8_12_60(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_mm_model_8_8_12_68(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_mm_model_8_8_28t4(o) {
    if (u16(o + 0) !== 1 || u16(o + 2) !== 2 || u16(o + 4) || u16(o + 6) || u16(o + 8) !== 2 || u16(o + 10) !== 3 || u16(o + 12) !== 5 || u16(o + 14) !== 6 || u16(o + 16) !== 4 || u16(o + 18) !== 4 || u16(o + 20) !== 6 || u16(o + 22) !== 7 || u16(o + 24) !== 9 || u16(o + 26) !== 10 || u16(o + 28) !== 8 || u16(o + 30) !== 8 || u16(o + 32) !== 10 || u16(o + 34) !== 11 || u16(o + 36) !== 13 || u16(o + 38) !== 14 || u16(o + 40) !== 12 || u16(o + 42) !== 12 || u16(o + 44) !== 14 || u16(o + 46) !== 15 || u16(o + 48) !== 13 || u16(o + 50) !== 6 || u16(o + 52) !== 16 || u16(o + 54) !== 16 || u16(o + 56) !== 6 || u16(o + 58) !== 17 || u16(o + 60) !== 18 || u16(o + 62) !== 19 || u16(o + 64) !== 12 || u16(o + 66) !== 12 || u16(o + 68) !== 19 || u16(o + 70) !== 7 || u16(o + 72) || u16(o + 74) || u16(o + 76) || u16(o + 78))
        ü(1, [u16, 0, u16, 2, u16, 4, u16, 6, u16, 8, u16, 10, u16, 12, u16, 14, u16, 16, u16, 18, u16, 20, u16, 22, u16, 24, u16, 26, u16, 28, u16, 30, u16, 32, u16, 34, u16, 36, u16, 38, u16, 40, u16, 42, u16, 44, u16, 46, u16, 48, u16, 50, u16, 52, u16, 54, u16, 56, u16, 58, u16, 60, u16, 62, u16, 64, u16, 66, u16, 68, u16, 70, u16, 72, u16, 74, u16, 76, u16, 78], o)
}

function get_mm_model_anims_1(o) {
    // ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u8, 52, u8, 53, u8, 54, u8, 55, u8, 56, u8, 57, u8, 58, u8, 59, u8, 60, u8, 61, u8, 62, u8, 63], o)

    if (old_log_array.p_offset.array.includes(o + 24 - offset_mid)) {
        ö(u32(o + 24), get_mm_model_anims_1_24)
    }
    if (old_log_array.p_offset.array.includes(o + 28 - offset_mid)) {
        ö(u32(o + 28), get_mm_model_anims_1_28)
    }
    if (old_log_array.p_offset.array.includes(o + 32 - offset_mid)) {
        ö(u32(o + 32), get_mm_model_anims_1_32)
    }
    if (old_log_array.p_offset.array.includes(o + 36 - offset_mid)) {
        // ä(mm_model_anims_1_36, u32(o + 36), get_mm_model_anims_1_36)
        // sometimes get_mm_model_anims_1_36
        ö(u32(o + 36), get_mm_model_anims_1_36)
    }
    if (old_log_array.p_offset.array.includes(o + 44 - offset_mid)) {
        // ä(mm_model_anims_1_44, u32(o + 44), get_mm_model_anims_1_44)
        // sometimes get_mm_model_anims_1?
        ö(u32(o + 44), get_mm_model_anims_1_44)
    }

}

function get_mm_model_anims_1_24(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_mm_model_anims_1_28(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_mm_model_anims_1_32(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_mm_model_anims_1_44(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_mm_model_anims_1_36(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_mm_model_anims_2(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 16) + (i * 32), get_mm_model_anims_2_16)
    }

}

function get_mm_model_anims_2_16(o) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31], o)
}

function get_mm_texture(o) {
    // ü(1, [u16, 0, u16, 2, u16, 4, u16, 6, u32, 8, u32, 12], o)

    ö(u32(o + 8), get_mm_texture_8)

}

function get_mm_texture_8(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_mm_sounds(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    //vag file
    ö(u32(o + 4), get_mm_sound_vag)
}

function get_mm_sound_vag(o) {// g.endian = false
// ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76], o)
// g.endian = true
}

function get_mm_basic(o) {
    if (u32(o + 4) !== 16 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 8), get_mm_basic_04)
    }

}

function get_mm_basic_04(o) {
    if (g.file_name === "VEHICLES.XPS") {
        if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(u32(o + 4))) {
            ö(u32(o), get_mm_car)
        } else if ([10, 11, 101, 102, 103].includes(u32(o + 4))) {
            ä(interface, u32(o), get_mm_interface)
        } else if ([200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220].includes(u32(o + 4))) {
            ä(car2, u32(o), get_mm_car2)
        } else if ([100].includes(u32(o + 4))) {
            ö(u32(o), get_mm_car3)
        } else {
            console.log('?')
        }
    } else {
        ä(interface, u32(o), get_mm_interface)
    }

}

function get_mm_car(o) {
    if (u32(o + 12) || f32(o + 60) !== 5000 || f32(o + 64) !== 10 || u32(o + 72) || u32(o + 80) || u32(o + 116) || u32(o + 128) !== 14711136 || u32(o + 148) || u32(o + 168) || u32(o + 188) || u32(o + 192) || u32(o + 196) || u32(o + 200) !== 3 || u32(o + 216) || u32(o + 220) || u32(o + 224) !== 5 || u32(o + 232) !== 7 || u32(o + 240) !== 4 || u32(o + 248) || u32(o + 252))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, f32, 64, f32, 68, u32, 72, f32, 76, u32, 80, f32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, u32, 192, u32, 196, u32, 200, u32, 204, u32, 208, u32, 212, u32, 216, u32, 220, u32, 224, u32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, ], o)
    ß('p_texture', o, 88)
    ß('p_texture', o, 100)

    ä(model_anims_1, u32(o + 92), get_mm_model_anims_1)
    ä(model_anims_2, u32(o + 96), get_mm_model_anims_2)

    ä(mm_unknown, u32(o + 104), get_mm_unknown)
    ä(mm_unknown, u32(o + 108), get_mm_unknown)
    ä(mm_unknown, u32(o + 112), get_mm_unknown)
    ä(mm_sound_section, u32(o + 120), get_mm_sound_section)
    ä(mm_sound_section, u32(o + 124), get_mm_sound_section)
    ä(mm_sound_section, u32(o + 128), get_mm_sound_section)
    ö(u32(o + 132), get_mm_car_132)
    ö(u32(o + 136), get_mm_car_136)
    ö(u32(o + 140), get_mm_car_140)
    ö(u32(o + 144), get_mm_car_144)
    ö(u32(o + 152), get_mm_car_152)
    ö(u32(o + 156), get_mm_car_156)
    ö(u32(o + 160), get_mm_car_160)
    ö(u32(o + 164), get_mm_car_164)
    ö(u32(o + 172), get_mm_car_172)
    ö(u32(o + 176), get_mm_car_172)
    //same as 172
    ö(u32(o + 180), get_mm_car_172)
    //same as 172
    ö(u32(o + 184), get_mm_car_172)
    //same as 172
    for (let i = 0; i < u32(o + 200); i++) {
        ö(u32(o + 204) + (i * 8), get_mm_car_204)
    }
    for (let i = 0; i < u32(o + 208); i++) {
        ö(u32(o + 212) + (i * 48), get_mm_car_212)
    }
    ö(u32(o + 228), get_mm_car_228)
    for (let i = 0; i < u32(o + 232); i++) {
        ö(u32(o + 236) + (i * 12), get_mm_car_236)
    }
    for (let i = 0; i < u32(o + 240); i++) {
        ö(u32(o + 244) + (i * 8), get_mm_car_244)
    }

}

function get_mm_unknown(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_mm_unknown_4)
    }
}

function get_mm_unknown_4(o) {
    switch (u32(o)) {
    case 1:
        ä(mm_unknown_4_4t1, u32(o + 4), get_mm_unknown_4_4t1)
        ö(u32(o + 8), get_mm_unknown_4_8t1)
        break
    case 2:
        ä(mm_unknown_4_4t2, u32(o + 4), get_mm_unknown_4_4t2)
        ö(u32(o + 8), get_mm_unknown_4_8t1)
        break
    case 3:
        ä(mm_unknown, u32(o + 4), get_mm_unknown)
        ö(u32(o + 8), get_mm_unknown_4_8t1)
        break
    case 4:
        ä(mm_unknown_4_4t4, u32(o + 4), get_mm_unknown_4_4t4)
        ö(u32(o + 8), get_mm_unknown_4_8t1)
        break
    case 5:
        ä(mm_unknown_4_4t5, u32(o + 4), get_mm_unknown_4_4t5)
        ö(u32(o + 8), get_mm_unknown_4_8t8)
        break
    case 6:
        ä(car3_44, u32(o + 4), get_mm_car3_44)
        ö(u32(o + 8), get_mm_unknown_4_8t1)
        break
    case 8:
        ä(mm_unknown_4_4t8, u32(o + 4), get_mm_unknown_4_4t8)
        ö(u32(o + 8), get_mm_unknown_4_8t8)
        break
    case 10:
        ä(mm_sound_section, u32(o + 4), get_mm_sound_section)
        ö(u32(o + 8), get_mm_unknown_4_8t8)
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
    case 25:
        ä(car2, u32(o + 4), get_mm_car2)
        ö(u32(o + 8), get_mm_unknown_4_8t1)
        break
    case 26:
        ä(mm_sound_controls, u32(o + 4), get_mm_sound_controls)
        ö(u32(o + 8), get_mm_unknown_4_8t8)
        break
    case 27:
        ä(mm_unknown_4_4t27, u32(o + 4), get_mm_unknown_4_4t27)
        ö(u32(o + 8), get_mm_unknown_4_8t8)
        break
    case 28:
        ä(mm_unknown_4_4t28, u32(o + 4), get_mm_unknown_4_4t28)
        ö(u32(o + 8), get_mm_unknown_4_8t1)
        break
    case 29:
        ö(u32(o + 4), get_mm_unknown_4_4t29)
        ö(u32(o + 8), get_mm_unknown_4_8t1)
        break
    default:
        ü(1, [u32, 0, u32, 4, u32, 8], o)
        console.log(u32(o), 'dif')
    }

}

function get_mm_unknown_4_4t1(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u16(o + 18) || u32(o + 56) || u32(o + 72) || u32(o + 84) || u8(o + 88))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, f32, 76, f32, 80, u32, 84, u8, 88, u8, 89, u8, 90, u8, 91, f32, 92, ], o)

    switch (u8(o + 16)) {
    case 0:
        ö(u32(o + 20), get_mm_unknown_4_4t1_20t0)
        ä(models, u32(o + 52), get_mm_model)
        break
    case 1:
        ö(u32(o + 20), get_mm_unknown_4_4t1_20t1)
        ß('p_texture', o, 52)
        break
    default:
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u16, 18, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, f32, 76, f32, 80, u32, 84, u8, 88, u8, 89, u8, 90, u8, 91, f32, 92, ], o)
    }
    for (let i = 0; i < u32(o + 36); i++) {
        ö(u32(o + 40) + (i * 32), get_mm_unknown_4_4t1_40)
    }
    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 12), get_mm_unknown_4_4t1_48)
    }
    ö(u32(o + 48), get_mm_unknown_4_4t1_48)
    ö(u32(o + 60), get_mm_unknown_4_4t1_60)
    ä(mm_unknown, u32(o + 64), get_mm_unknown)
    ä(mm_unknown, u32(o + 68), get_mm_unknown)

}

function get_mm_unknown_4_4t1_20t0(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    ö(u32(o + 4), get_mm_unknown_4_4t1_20t0_4)
    ö(u32(o + 36), get_mm_unknown_4_4t1_20t0_36)

}
function get_mm_unknown_4_4t1_20t0_4(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_unknown_4_4t1_20t0_36(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_unknown_4_4t1_20t1(o) {
    if (u32(o + 4) || f32(o + 8) !== 360 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_unknown_4_4t1_40(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_mm_unknown_4_4t1_48(o) {// ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_mm_unknown_4_4t1_60(o) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, ], o)
}

function get_mm_unknown_4_4t2(o) {
    if (u32(o + 36) || u32(o + 40) || u32(o + 56) !== 100 || u8(o + 68) || u32(o + 108) || u32(o + 144) || u32(o + 148) || u32(o + 164) || u32(o + 168) || u32(o + 172))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, f32, 52, u32, 56, f32, 60, f32, 64, u8, 68, u8, 69, u8, 70, u8, 71, f32, 72, f32, 76, f32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, ], o)

    switch (u8(o + 1)) {
    case 0:
        ä(models, u32(o + 16), get_mm_model)
        break
    case 1:
        ß('p_texture', o, 16)
        break
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, f32, 44, f32, 48, f32, 52, u32, 56, f32, 60, f32, 64, u8, 68, u8, 69, u8, 70, u8, 71, f32, 72, f32, 76, f32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, ], o)
    }
    ö(u32(o + 12), get_mm_unknown_4_4t2_12)

    ß('p_texture', o, 92)
    ö(u32(o + 96), get_mm_unknown_4_4t2_96)
    ö(u32(o + 100), get_mm_unknown_4_4t2_100)

    ä(mm_unknown_4_4t2_104, u32(o + 104), get_mm_unknown_4_4t2_104)

    ä(mm_unknown, u32(o + 112), get_mm_unknown)
    ä(mm_unknown, u32(o + 116), get_mm_unknown)
    ä(mm_unknown, u32(o + 120), get_mm_unknown)
    ä(mm_unknown, u32(o + 124), get_mm_unknown)

    for (let i = 0; i < u32(o + 128); i++) {
        ö(u32(o + 132) + (i * 32), get_mm_unknown_4_4t2_132)
    }
    for (let i = 0; i < u32(o + 136); i++) {
        ö(u32(o + 140) + (i * 12), get_mm_unknown_4_4t2_140)
    }

    ö(u32(o + 152), get_mm_unknown_4_4t2_152)
    ö(u32(o + 156), get_mm_unknown_4_4t2_156)
    ö(u32(o + 160), get_mm_unknown_4_4t2_160)

}
function get_mm_unknown_4_4t2_100(o) {
    if (u32(o + 0) !== 7 || u32(o + 4) !== 14445632 || u32(o + 8) !== 257 || f32(o + 12) !== 500 || f32(o + 16) !== 600 || u32(o + 20) !== 14445776 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_mm_unknown_4_4t2_100_4)
    }
    ö(u32(o + 20), get_mm_unknown_4_4t2_100_20)

}

function get_mm_unknown_4_4t2_100_20(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) !== 2 || f32(o + 8) !== 0.25 || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, ], o)
}
function get_mm_unknown_4_4t2_100_4(o) {
    /*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, u32, 12, u32, 16], o)*/
    ß('p_texture', o, 12)
}

function get_mm_unknown_4_4t2_156(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, ], o)
}

function get_mm_unknown_4_4t2_104(o) {
    if (u8(o + 0) || u8(o + 2) || u8(o + 3) !== 2 || u32(o + 8) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + i * 12, get_mm_unknown_4_4t2_104_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + i * 12, get_mm_unknown_4_4t2_104_24)
    }

}

function get_mm_unknown_4_4t2_104_16(o) {
    if (u32(o + 4))
        ü(1, [f32, 0, u32, 4, f32, 8], o)
}
function get_mm_unknown_4_4t2_104_24(o) {
    if (u8(o + 3) !== 255 || u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}

function get_mm_unknown_4_4t2_12(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_unknown_4_4t2_132(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_unknown_4_4t2_140(o) {// ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_mm_unknown_4_4t2_152(o) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, f32, 44, ], o)
}
function get_mm_unknown_4_4t2_160(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_unknown_4_4t2_96(o) {
    if (u8(o + 2) || u8(o + 3) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 68) || u32(o + 72) || u32(o + 76))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    ö(u32(o + 4), get_mm_unknown_4_4t2_96_4)
    switch (u8(o)) {
    case 0:
    case 1:
        ö(u32(o + 36), get_mm_unknown_4_4t2_96_36)
        break
    case 5:
        //floats?
        break
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    }

}
function get_mm_unknown_4_4t2_96_4(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_unknown_4_4t2_96_36(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_unknown_4_4t4(o) {
    if (u8(o + 1) || u8(o + 3) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ä(mm_unknown, u32(o + 4), get_mm_unknown)
    ö(u32(o + 8), get_mm_unknown_4_4t4_8)
    ä(mm_sound_controls, u32(o + 20), get_mm_sound_controls)

}

function get_mm_unknown_4_4t4_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

}

function get_mm_unknown_4_4t5(o) {
    if (u8(o + 2) || u8(o + 4) || u32(o + 16) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}

function get_mm_unknown_4_4t6(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
}

function get_mm_unknown_4_8t6(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, u32, 56, u32, 60, ], o)
}

function get_mm_unknown_4_4t8(o) {
    if (u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 12), get_mm_unknown_4_4t8_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_mm_unknown_4_4t8_24)
    }

}
function get_mm_unknown_4_4t8_16(o) {// ü(1, [f32, 0, u32, 4, f32, 8], o)
}
function get_mm_unknown_4_4t8_24(o) {// ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}

function get_mm_unknown_4_4t27(o) {
    if (u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 24), get_mm_unknown_4_4t27_24)
    ö(u32(o + 28), get_mm_unknown_4_4t27_28)

}

function get_mm_unknown_4_4t27_24(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + i * 12, get_mm_unknown_4_4t27_24_4)
    }

}
function get_mm_unknown_4_4t27_24_4(o) {// ü(1, [f32, 0, u32, 4, f32, 8], o)
}

function get_mm_unknown_4_4t27_28(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 12), get_mm_unknown_4_4t27_28_4)
    }

}

function get_mm_unknown_4_4t27_28_4(o) {// ü(1, [f32, 0, u32, 4, f32, 8], o)
}

function get_mm_unknown_4_4t28(o) {
    if (u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_mm_unknown_4_4t28_28)
    }
    for (let i = 0; i < u32(o + 32); i++) {
        ö(u32(o + 36) + (i * 12), get_mm_unknown_4_4t28_36)
    }

}

function get_mm_unknown_4_4t28_28(o) {
    if (u8(o + 3) !== 255 || u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_mm_unknown_4_4t28_36(o) {
    if (u8(o + 3) !== 255 || u32(o + 4))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}

function get_mm_unknown_4_4t29(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 48), get_mm_unknown_4_4t29_4)
    }

}

function get_mm_unknown_4_4t29_4(o) {
    if (u32(o + 12) || f32(o + 16) !== 100 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)

    ä(models, u32(o + 28), get_mm_model)
    ä(mm_unknown_4_4t29_4_32, u32(o + 32), get_mm_unknown_4_4t29_4_32)

}

function get_mm_unknown_4_4t29_4_32(o) {
    if (u32(o + 0) !== 1 || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28], o)

    ä(mm_unknown, u32(o + 4), get_mm_unknown)
    ö(u32(o + 8), get_mm_unknown_4_4t29_4_32_8)

}

function get_mm_unknown_4_4t29_4_32_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)

    ö(u32(o + 4), get_mm_unknown_4_4t29_4_32_4_4)

}

function get_mm_unknown_4_4t29_4_32_4_4(o) {
    ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_mm_unknown_4_4t29_4_32_8(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}

function get_mm_unknown_4_8t1(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u8(o + 51))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u8, 48, u8, 49, u8, 50, u8, 51, f32, 52, u32, 56, u32, 60, ], o)

    ö(u32(o + 56), get_mm_unknown_4_8t1_56)

    switch (u8(o + 50)) {
    case 0:
    case 1:
        if (u32(o + 60)) {
            console.log("?")
        }
        break
    case 2:
        ö(u32(o + 60), get_mm_unknown_4_8t1_60t2)
        break
    case 4:
        ö(u32(o + 60), get_mm_unknown_4_8t1_60t4)
        break
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    }

}

function get_mm_unknown_4_8t1_56(o) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24], o)
}
function get_mm_unknown_4_8t1_60t2(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_unknown_4_8t1_60t4(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_mm_unknown_4_8t2(o) {
    ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, u32, 56, u32, 60, ], o)
}
function get_mm_unknown_4_8t3(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, u32, 56, u32, 60, ], o)
}
function get_mm_unknown_4_8t4(o) {
    ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
}
function get_mm_unknown_4_8t8(o) {// ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24], o)
}

function get_mm_car_132(o) {
    if (u8(o + 2) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_car_136(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_car_140(o) {
    if (u32(o + 12) || u32(o + 32) || u32(o + 48) || u32(o + 56) || u32(o + 64) || u32(o + 68) || u32(o + 72) || u32(o + 76) || u32(o + 104) || u32(o + 108))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, f32, 40, f32, 44, u32, 48, f32, 52, u32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, f32, 80, f32, 84, f32, 88, f32, 92, f32, 96, u32, 100, u32, 104, u32, 108, ], o)
    ä(car_model_sec, u32(o + 16), get_mm_car_model_sec)

    ä(model_anims_1, u32(o + 20), get_mm_model_anims_1)
    ä(model_anims_1, u32(o + 24), get_mm_model_anims_1)
    ä(model_anims_1, u32(o + 28), get_mm_model_anims_1)

    ä(texts, u32(o + 100), get_mm_text)

}

function get_mm_car_model_sec(o) {
    if (u8(o + 29) !== 1 || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    for (let i = 0; i < u32(o + 0); i++) {
        ö(u32(o + 4) + (i * 4), get_mm_car_model_sec_4)
    }

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 8), get_mm_car_model_sec_12)
    }

    ä(model_anims_1, u32(o + 16), get_mm_model_anims_1)
    ä(model_anims_2, u32(o + 20), get_mm_model_anims_2)
    ö(u32(o + 32), get_mm_car_model_sec_32)
    ö(u32(o + 36), get_mm_car_model_sec_36)
    ö(u32(o + 40), get_mm_car_model_sec_40)

    for (let i = 0; i < u32(o + 44); i++) {
        ö(u32(o + 48) + (i * 20), get_mm_car_model_sec_48)
    }
    ö(u32(o + 52), get_mm_car_model_sec_52)

    ä(car_140_16_56, u32(o + 56), get_mm_car_model_sec_56)

}

function get_mm_car_model_sec_12(o) {
    // ü(1, [u32, 0, u32, 4], o)
    ä(models, u32(o + 0), get_mm_model)

}

function get_mm_car_model_sec_32(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_car_model_sec_36(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_car_model_sec_4(o) {
    // ü(1, [u32, 0], o)
    ä(models, u32(o + 0), get_mm_model)

}
function get_mm_car_model_sec_40(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_car_model_sec_48(o) {
    // ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)
    switch (u32(o + 4)) {
    case 0:
        ä(mm_unknown, u32(o + 8), get_mm_unknown)
        break
    case 1:
        ä(mm_unknown_4_4t4, u32(o + 8), get_mm_unknown_4_4t4)
        break
    case 6:
        ö(u32(o + 8), get_mm_car_model_sec_48_8t6)
        break
    case 7:
    case 10:
    case 99:
        break
    default:
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)
    }

    ö(u32(o + 12), get_mm_car_model_sec_48_12)
    ö(u32(o + 16), get_mm_car_model_sec_48_16)
}

function get_mm_car_model_sec_48_8t6(o) {
    if (u8(o + 0) || u8(o + 1) !== 1 || u8(o + 2) || u8(o + 3) !== 1 || u8(o + 4) !== 1 || u8(o + 5) !== 3 || u8(o + 6) !== 10 || u8(o + 7) !== 1 || f32(o + 8) !== 50 || f32(o + 12) !== 500 || u32(o + 16) !== 10000 || u32(o + 20) || u32(o + 24) || f32(o + 28) !== -300 || u32(o + 32) || u32(o + 36) || u32(o + 40) !== 14185856 || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    ö(u32(o + 40), get_mm_car_model_sec_48_8t6_40)

}

function get_mm_car_model_sec_48_8t6_40(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 1 || u32(o + 12) || f32(o + 16) !== 60 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_car_model_sec_48_12(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 24), get_mm_car_model_sec_48_12_24)

}

function get_mm_car_model_sec_48_12_24(o) {
    if (u8(o + 3) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    switch (u8(o + 1)) {
    case 0:
        ä(models, u32(o + 4), get_mm_model)
        break
    case 2:
    case 5:
        ß('p_texture', o, 4)
        break
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    }

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_mm_car_model_sec_48_12_24_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_mm_car_model_sec_48_12_24_20)
    }

    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_mm_car_model_sec_48_12_24_28)
    }

    ö(u32(o + 32), get_mm_car_model_sec_48_12_24_32)
    ö(u32(o + 36), get_mm_car_model_sec_48_12_24_36)
    ö(u32(o + 40), get_mm_car_model_sec_48_12_24_40)

}

function get_mm_car_model_sec_48_12_24_32(o) {
    if (f32(o + 0) !== 100 || f32(o + 4) !== 300 || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_car_model_sec_48_12_24_36(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_car_model_sec_48_12_24_40(o) {
    if (u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_car_model_sec_48_12_24_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_car_model_sec_48_12_24_20(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_car_model_sec_48_12_24_28(o) {
    if (u8(o + 3) !== 255)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}

function get_mm_car_model_sec_48_16(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_car_model_sec_52(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}
function get_mm_car_model_sec_56(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 28), get_mm_car_model_sec_56_4)
    }
    ä(model_anims_2, u32(o + 8), get_mm_model_anims_2)

}

function get_mm_car_model_sec_56_4(o) {
    if (u8(o + 1) !== 1 || u8(o + 3) || u32(o + 20))
        ü(1, [u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    ä(models, u32(o + 8), get_mm_model)

    ö(u32(o + 12), get_mm_car_model_sec_56_4_12)
    ö(u32(o + 16), get_mm_car_model_sec_56_4_16)
    ä(mm_unknown_4_4t4, u32(o + 24), get_mm_unknown_4_4t4)

}

function get_mm_car_model_sec_56_4_12(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, ], o)
}
function get_mm_car_model_sec_56_4_16(o) {
    if (u32(o + 12))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, ], o)
}

function get_mm_car_144(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u16(o + 44) || u32(o + 48) || u32(o + 52) !== 14 || u32(o + 56) || f32(o + 60) !== 2000 || u32(o + 64) || f32(o + 68) !== 90 || f32(o + 72) !== 30 || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u16, 44, u16, 46, u32, 48, u32, 52, u32, 56, f32, 60, u32, 64, f32, 68, f32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, ], o)

    ä(car_model_sec, u32(o + 0), get_mm_car_model_sec)
    ä(car_model_sec, u32(o + 4), get_mm_car_model_sec)
    ä(car_model_sec, u32(o + 8), get_mm_car_model_sec)
    ä(car_model_sec, u32(o + 12), get_mm_car_model_sec)
}

function get_mm_car_152(o) {
    if (f32(o + 0) !== 50 || f32(o + 4) !== 2 || u32(o + 8) || f32(o + 12) !== 100 || u32(o + 16) !== 14834272 || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ä(mm_unknown, u32(o + 16), get_mm_unknown)

}

function get_mm_car_156(o) {
    if (u32(o + 0) || u32(o + 4) !== 120 || u32(o + 8) || f32(o + 12) !== 2 || f32(o + 16) !== 1 || f32(o + 20) !== 0.30000001192092896 || f32(o + 24) !== 150 || f32(o + 28) !== 30 || f32(o + 32) !== 30 || u32(o + 36) || f32(o + 44) !== 1.5 || f32(o + 48) !== 10 || f32(o + 52) !== 10 || f32(o + 56) !== 4 || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, u32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, u32, 60, ], o)
}
function get_mm_car_160(o) {
    if (u32(o + 12) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 60) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92) || f32(o + 100) !== 0.004999999888241291 || u32(o + 124) || f32(o + 132) !== 0.699999988079071 || f32(o + 136) !== 0.8999999761581421 || f32(o + 212) !== 0.6000000238418579 || u32(o + 244) || u32(o + 248) || u32(o + 252))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, f32, 48, f32, 52, f32, 56, u32, 60, f32, 64, f32, 68, f32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, f32, 96, f32, 100, f32, 104, f32, 108, f32, 112, f32, 116, u32, 120, u32, 124, f32, 128, f32, 132, f32, 136, f32, 140, f32, 144, f32, 148, f32, 152, f32, 156, f32, 160, f32, 164, f32, 168, f32, 172, f32, 176, f32, 180, f32, 184, f32, 188, f32, 192, f32, 196, f32, 200, f32, 204, f32, 208, f32, 212, u32, 216, u32, 220, u32, 224, f32, 228, u32, 232, u32, 236, u32, 240, u32, 244, u32, 248, u32, 252, ], o)

    ä(car3_44_44, u32(o + 216), get_mm_car3_44_44)
    ö(u32(o + 220), get_mm_car_160_220)
    ö(u32(o + 224), get_mm_car_160_220)

}

function get_mm_car_160_220(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 16) || u32(o + 28) || u32(o + 32) || u32(o + 44) || u32(o + 48) || u32(o + 60) || u32(o + 64) || u32(o + 72) || u32(o + 76) || u32(o + 80) || u32(o + 92) || u32(o + 96) || u32(o + 108) || u32(o + 112) || u32(o + 124) || f32(o + 132) !== 90 || f32(o + 136) !== 90 || f32(o + 140) !== 45)
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, u32, 28, u32, 32, f32, 36, f32, 40, u32, 44, u32, 48, f32, 52, f32, 56, u32, 60, u32, 64, f32, 68, u32, 72, u32, 76, u32, 80, f32, 84, f32, 88, u32, 92, u32, 96, f32, 100, f32, 104, u32, 108, u32, 112, f32, 116, f32, 120, u32, 124, f32, 128, f32, 132, f32, 136, f32, 140, f32, 144, f32, 148, f32, 152, f32, 156, f32, 160, f32, 164, f32, 168, f32, 172, ], o)
}

function get_mm_car_164(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 20) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ä(interface, u32(o + 16), get_mm_interface)
    ä(interface, u32(o + 24), get_mm_interface)
    ä(texts, u32(o + 40), get_mm_text)
    ö(u32(o + 44), get_mm_car_164_44)

}

function get_mm_car_164_44(o) {
    if (u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}

function get_mm_car_172(o) {
    if (f32(o + 4) !== 1 || u32(o + 28) || u8(o + 34) || u8(o + 35))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, u32, 28, u8, 32, u8, 33, u8, 34, u8, 35, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44], o)

    for (let i = 0; i < u32(o + 40); i++) {
        ö(u32(o + 44) + (i * 120), get_mm_car_172_44)
    }

}

function get_mm_car_172_44(o) {
    if (u8(o + 7) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 92))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116], o)
    for (let i = 0; i < u32(o + 96); i++) {
        ö(u32(o + 100) + (i * 4), get_mm_car_172_44_100)
    }
    ö(u32(o + 104), get_mm_car_172_44_104)
    ö(u32(o + 108), get_mm_car_172_44_108)
    ö(u32(o + 112), get_mm_car_172_44_112)
    ö(u32(o + 116), get_mm_car_172_44_116)
    ö(u32(o + 88), get_mm_car_172_44_88)

}

function get_mm_car_172_44_100(o) {
    // ü(1, [u32, 0], o)
    ä(car_172_44_100_0, u32(o + 0), get_mm_car_172_44_100_0)

}

function get_mm_car_172_44_100_0(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ö(u32(o + 0), get_mm_car_172_44_100_0_0)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 32), get_mm_car_172_44_100_0_8)
    }

}

function get_mm_car_172_44_100_0_0(o) {// console.log(get_string(o, 0, false))
}
function get_mm_car_172_44_100_0_8(o) {
    if (u32(o + 4) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_car_172_44_104(o) {
    if (u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}
function get_mm_car_172_44_108(o) {
    if (u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_car_172_44_112(o) {
    if (u32(o + 4) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_car_172_44_116(o) {// console.log(get_string(o, 0, false))
}
function get_mm_car_172_44_88(o) {
    if (u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    switch (u8(o + 1)) {
    case 0:
        // ü(1, [u8, 0,u8, 1,u8, 2,u8, 3, u8, 4,u8, 5,u8, 6,u8, 7, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
        break
    case 1:
    case 2:
        // ü(1, [u8, 0,u8, 1,u8, 2,u8, 3, u8, 4,u8, 5,u8, 6,u8, 7, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
        break
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    }
}
function get_mm_car_204(o) {
    // ü(1, [u32, 0, u32, 4], o)
    ö(u32(o + 4), get_mm_car_140)

}

function get_mm_car_212(o) {
    if (u32(o + 8) || u32(o + 12) || u8(o + 43))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, f32, 16, f32, 20, f32, 24, f32, 28, f32, 32, f32, 36, u8, 40, u8, 41, u8, 42, u8, 43, u32, 44], o)
}
function get_mm_car_228(o) {
    if (u32(o + 0) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_car_236(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_mm_car_model_sec_48)
    }
    ä(model_anims_2, u32(o + 8), get_mm_model_anims_2)

}

function get_mm_car_244(o) {
    // ü(1, [u32, 0, u32, 4], o)
    ö(u32(o + 4), get_mm_car_244_4)
}

function get_mm_car_244_4(o) {
    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_mm_car_244_4_4)
    }

}

function get_mm_car_244_4_4(o) {
    if (u8(o + 2) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3], o)
}

function get_mm_car2(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u32(o + 36) || u32(o + 64) || u32(o + 68) || u32(o + 84) || u32(o + 104) || u32(o + 108))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, f32, 40, f32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, ], o)
    ä(models, u32(o + 20), get_mm_model)
    ä(texts, u32(o + 72), get_mm_text)
    ä(mm_unknown, u32(o + 76), get_mm_unknown)
    ä(mm_unknown, u32(o + 80), get_mm_unknown)

    ö(u32(o + 88), get_mm_car2_88)
    ö(u32(o + 92), get_mm_car2_92)
    for (let i = 0; i < u32(o + 96); i++) {
        ö(u32(o + 100) + (i * 20), get_mm_car2_100)
    }

}

function get_mm_car2_88(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) !== 14922304 || u8(o + 47) || u32(o + 56) || u32(o + 76) || u32(o + 80) || u32(o + 84) || u32(o + 88) || u32(o + 92))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u8, 44, u8, 45, u8, 46, u8, 47, u32, 48, u32, 52, u32, 56, f32, 60, f32, 64, f32, 68, f32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)
    ß('p_texture', o, 24)
    //maybe? car2_88 = car_144
    ä(car_model_sec, u32(o + 0), get_mm_car_model_sec)
    ä(texts, u32(o + 16), get_mm_text)

    ä(mm_unknown, u32(o + 20), get_mm_unknown)
    ä(model_anims_2, u32(o + 28), get_mm_model_anims_2)

}

function get_mm_car2_92(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_car2_100(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16], o)
    ö(u32(o + 12), get_mm_car2_100_12)

}

function get_mm_car2_100_12(o) {
    if (u32(o + 0) || u32(o + 8) || u32(o + 12) || u8(o + 16) || u8(o + 17) || u8(o + 18) || u8(o + 19) !== 1 || u32(o + 20) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 24), get_mm_car2_100_12_24)

}

function get_mm_car2_100_12_24(o) {
    if (u8(o + 0) || u16(o + 2) || u32(o + 16) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 44))
        ü(1, [u8, 0, u8, 1, u16, 2, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    ö(u32(o + 12), get_mm_car2_100_12_24_12)
    ö(u32(o + 20), get_mm_car2_100_12_24_20)
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_mm_car2_100_12_24_28)
    }

    switch (u8(o + 1)) {
    case 0:
        ä(models, u32(o + 4), get_mm_model)
        break
    case 2:
        ß('p_texture', o, 4)
        break
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    }

    ö(u32(o + 40), get_mm_car2_100_12_24_40)

}

function get_mm_car2_100_12_24_12(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_car2_100_12_24_20(o) {
    if (u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_car2_100_12_24_28(o) {
    if (u8(o + 3) !== 255)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_mm_car2_100_12_24_40(o) {
    if (u32(o + 0) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, f32, 4, f32, 8, u32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_car3(o) {
    if (f32(o + 0) !== 1000 || f32(o + 4) !== 1500 || u32(o + 8) !== 111 || u32(o + 12) !== 72 || u32(o + 16) !== 113 || u32(o + 20) !== 114 || u32(o + 24) !== 112 || u32(o + 28) || u32(o + 32) !== 14207344 || u32(o + 36) !== 14372560 || u32(o + 40) !== 14387712 || u32(o + 44) !== 14197072)
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 8)
    ß('p_texture', o, 12)
    ß('p_texture', o, 16)
    ß('p_texture', o, 20)
    ß('p_texture', o, 24)

    ö(u32(o + 32), get_mm_car3_32)

    ä(interface, u32(o + 36), get_mm_interface)
    ä(interface, u32(o + 40), get_mm_interface)

    ä(car3_44, u32(o + 44), get_mm_car3_44)

}

function get_mm_car3_32(o) {
    if (u32(o + 0) !== 110 || u32(o + 4) || u32(o + 8) !== 1052672 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) !== 1 || u32(o + 28) !== 14207392 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44], o)
    ß('p_texture', o, 0)

    ö(u32(o + 28), get_mm_car3_32_28)

}

function get_mm_car3_32_28(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_car3_44(o) {
    if (u8(o + 10) || u8(o + 11) || u32(o + 24) || u32(o + 28) || u32(o + 52))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)

    switch (u8(o + 4)) {
    case 0:
        if (old_log_array.p_offset.array.includes(o + 0 - offset_mid)) {
            ä(models, u32(o + 0), get_mm_model)
        }
        break
    case 1:
        ä(car_model_sec, u32(o + 0), get_mm_car_model_sec)
        break
    default:
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
    }
    ö(u32(o + 20), get_mm_car3_44_20)

    ä(mm_unknown, u32(o + 32), get_mm_unknown)
    ä(mm_unknown, u32(o + 36), get_mm_unknown)
    ä(mm_sound_controls, u32(o + 40), get_mm_sound_controls)

    ä(car3_44_44, u32(o + 44), get_mm_car3_44_44)
    ö(u32(o + 48), get_mm_car3_44_48)

    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 20), get_mm_car_model_sec_48)
    }
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 4), get_mm_car3_44_68)
    }

    ä(model_anims_2, u32(o + 72), get_mm_model_anims_2)
    ä(models, u32(o + 76), get_mm_model)

}

function get_mm_car3_44_48(o) {
    if (f32(o + 0) !== 100 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_mm_car3_44_20(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_mm_car3_44_68(o) {
    // ü(1, [u32, 0], o)
    ä(mm_unknown, u32(o + 0), get_mm_unknown)

}

function get_mm_car3_44_44(o) {
    if (u32(o + 4) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    ä(mm_unknown, u32(o + 48), get_mm_unknown)
    ä(mm_unknown_4_4t1, u32(o + 52), get_mm_unknown_4_4t1)

}

function get_mm_interface(o) {

    if (u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 72), get_mm_interface_16)
    }

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_mm_interface_24)
    }

    ä(mm_sound_controls, u32(o + 28), get_mm_sound_controls)
    ä(mm_sound_controls, u32(o + 32), get_mm_sound_controls)
    ä(mm_sound_controls, u32(o + 36), get_mm_sound_controls)
    ä(mm_sound_controls, u32(o + 40), get_mm_sound_controls)
}

function get_mm_sound_controls(o) {

    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 8) + (i * 16), get_mm_sound_controls_8)
    }

}

function get_mm_sound_controls_8(o) {
    // ü(1, [f32, 0, u32, 4, u32, 8, u32, 12], o)
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 4), get_mm_sound_controls_8_12)
    }

}

function get_mm_sound_controls_8_12(o) {
    // ü(1, [u32, 0], o)

    ä(mm_sound_section, u32(o), get_mm_sound_section)
}

function get_mm_sound_section(o) {
    if (u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ß('p_sound', o, 24)
}

function get_mm_interface_24(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8], o)
    ö(u32(o + 08), get_mm_interface_24_08)
}

function get_mm_interface_24_08(o) {

    if (u32(o + 8))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12], o)

    ä(interface, u32(o), get_mm_interface)
    ä(mm_sound_controls, u32(o + 12), get_mm_sound_controls)

}

function get_mm_interface_16(o) {
    if (u8(o + 6) || u8(o + 11) || u16(o + 14) || u32(o + 28) || u32(o + 60))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u8, 6, u8, 7, u8, 8, u8, 9, u8, 10, u8, 11, u8, 12, u8, 13, u16, 14, u32, 16, f32, 20, f32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68], o)

    switch (u8(o + 1)) {
    case 0:
        ö(u32(o + 16), get_mm_interface_16_16t0)
        break
    case 1:
        ö(u32(o + 16), get_mm_interface_16_16t1)
        break
    default:
        if (u32(o + 16)) {
            ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, ], o)
        }
    }
    ö(u32(o + 32), get_mm_interface_16_32)
    ö(u32(o + 36), get_mm_interface_16_36)
    ö(u32(o + 40), get_mm_interface_16_40)
    ö(u32(o + 44), get_mm_interface_16_44)
    ö(u32(o + 48), get_mm_interface_16_48)
    ö(u32(o + 52), get_mm_interface_16_52)
    ö(u32(o + 56), get_mm_interface_16_56)
    ö(u32(o + 64), get_mm_interface_16_64)

    ö(u32(o + 68), get_mm_interface_16_68)

}

function get_mm_interface_16_16t0(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)

    ß('p_texture', o, 4)
    ö(u32(o + 16), get_mm_interface_16_16t0_16)

}

function get_mm_interface_16_16t0_16(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_mm_interface_16_16t0_16_4)

    }

}

function get_mm_interface_16_16t0_16_4(o) {
    /*ü(1, [u32, 0], o)*/
    ß('p_texture', o, 0)

}

function get_mm_interface_16_16t1(o) {

    if (u16(o + 12) || u16(o + 18) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u16, 12, u8, 14, u8, 15, u8, 16, u8, 17, u16, 18, u16, 20, u16, 22, f32, 24, u32, 28, ], o)
    ä(texts, u32(o), get_mm_text)
    ä(fonts, u32(o + 4), get_mm_font)
    ö(u32(o + 8), get_mm_interface_16_16t1_8)

}

function get_mm_text(o) {
    if (u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    ö(u32(o + 0), get_mm_text_0)
    ö(u32(o + 4), get_mm_text_0)
    ö(u32(o + 8), get_mm_text_0)
    ö(u32(o + 12), get_mm_text_0)

}

function get_mm_text_0(o) {// console.log(get_string(o, 0, false))
}

function get_mm_font(o) {
    if (u8(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u8, 8, u8, 9, u8, 10, u8, 11, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    ß('p_texture', o, 0)
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 32), get_mm_font_32)
    }

    ä(mm_sound_section, u32(o + 4), get_mm_sound_section)
}

function get_mm_font_32(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u16(o + 18) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u8, 16, u8, 17, u16, 18, f32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_interface_16_16t1_8(o) {

    if (u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 4), get_mm_interface_16_16t1_8_4)
    }

}

function get_mm_interface_16_16t1_8_4(o) {
    // ü(1, [u32, 0], o)
    ä(texts, u32(o), get_mm_text)
}

function get_mm_interface_16_32(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
    ä(interface, u32(o), get_mm_interface)
}

function get_mm_interface_16_36(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_interface_16_40(o) {
    // ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)

    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 12), get_mm_interface_16_40_12)
    }

}

function get_mm_interface_16_40_12(o) {
    if (u32(o + 4))
        ü(1, [u32, 0, u32, 4, u32, 8], o)

    ö(u32(o + 8), get_mm_interface_16_40_12_8)

}

function get_mm_interface_16_40_12_8(o) {
    if (u32(o + 8))
        ü(1, [u32, 0, u8, 4, u8, 5, u8, 6, u8, 7, u32, 8, u32, 12, ], o)

    ä(interface, u32(o), get_mm_interface)
    ä(mm_sound_controls, u32(o + 12), get_mm_sound_controls)

}

function get_mm_interface_16_44(o) {
    if (u32(o + 0) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    ö(u32(o + 8), get_mm_interface_16_44_8)
    for (let i = 0; i < u32(o + 12); i++) {
        ö(u32(o + 16) + (i * 32), get_mm_interface_16_44_16)
    }
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_mm_interface_16_44_24)
    }

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 32), get_mm_interface_16_44_32)
    }

    ö(u32(o + 40), get_mm_interface_16_44_40)
    ö(u32(o + 48), get_mm_interface_16_44_48)

}
function get_mm_interface_16_44_8(o) {
    if (u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_interface_16_44_16(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_interface_16_44_24(o) {
    if (u16(o + 6))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u16, 6, f32, 8], o)
}
function get_mm_interface_16_44_32(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_mm_interface_16_44_40(o) {
    if (u32(o + 0) || f32(o + 8) !== 1 || u32(o + 16) || f32(o + 24) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}
function get_mm_interface_16_44_48(o) {

    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_interface_16_48(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    ö(u32(o + 8), get_mm_interface_16_48_8)
    ö(u32(o + 16), get_mm_interface_16_48_16)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_mm_interface_16_48_24)
    }
    ö(u32(o + 32), get_mm_interface_16_48_32)
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 32), get_mm_interface_16_48_32)
    }

    ö(u32(o + 40), get_mm_interface_16_48_40)
    ö(u32(o + 48), get_mm_interface_16_48_48)

}
function get_mm_interface_16_48_8(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}

function get_mm_interface_16_48_16(o) {

    if (u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_interface_16_48_24(o) {
    if (u16(o + 6))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u16, 6, f32, 8], o)
}
function get_mm_interface_16_48_32(o) {

    if (f32(o + 8) !== 1 || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_interface_16_48_40(o) {
    if (u32(o + 32) || u32(o + 36))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, f32, 40, f32, 44, ], o)
}
function get_mm_interface_16_48_48(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_interface_16_52(o) {

    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    ö(u32(o + 8), get_mm_interface_16_52_8)
    ö(u32(o + 16), get_mm_interface_16_52_16)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_mm_interface_16_52_24)
    }
    ö(u32(o + 32), get_mm_interface_16_52_32)
    ö(u32(o + 40), get_mm_interface_16_52_40)
    ö(u32(o + 48), get_mm_interface_16_52_48)

}
function get_mm_interface_16_52_16(o) {
    if (f32(o + 0) !== 480 || f32(o + 4) !== 120 || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_interface_16_52_24(o) {
    if (u8(o + 3) !== 255)
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8], o)
}
function get_mm_interface_16_52_8(o) {

    if (u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_interface_16_52_32(o) {

    if (f32(o + 8) !== 1 || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_interface_16_52_40(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 1 || u32(o + 12) || u32(o + 16) || f32(o + 20) !== 1 || f32(o + 24) !== 1 || f32(o + 28) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}
function get_mm_interface_16_52_48(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_interface_16_56(o) {

    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)

    ö(u32(o + 8), get_mm_interface_16_56_8)
    ö(u32(o + 16), get_mm_interface_16_56_16)

    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_mm_interface_16_56_24)
    }

    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 32), get_mm_interface_16_56_32)
    }
    ö(u32(o + 40), get_mm_interface_16_56_40)
    ö(u32(o + 48), get_mm_interface_16_56_48)
    ä(mm_sound_controls, u32(o + 52), get_mm_sound_controls)

}
function get_mm_interface_16_56_8(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_interface_16_56_16(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_interface_16_56_24(o) {
    if (u16(o + 6))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u16, 6, f32, 8], o)
}

function get_mm_interface_16_56_32(o) {
    if (f32(o + 8) !== 1 || u32(o + 12) || u8(o + 16) || u16(o + 18) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u16, 18, f32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_interface_16_56_40(o) {
    if (u32(o + 0) || f32(o + 8) !== 1 || u32(o + 16) || f32(o + 24) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, f32, 4, f32, 8, f32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}
function get_mm_interface_16_56_48(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_interface_16_64(o) {
    if (u32(o + 0) || u32(o + 4) !== 1 || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, ], o)
    ö(u32(o + 8), get_mm_interface_16_64_8)
    ö(u32(o + 16), get_mm_interface_16_64_16)
    for (let i = 0; i < u32(o + 20); i++) {
        ö(u32(o + 24) + (i * 12), get_mm_interface_16_64_24)
    }
    for (let i = 0; i < u32(o + 28); i++) {
        ö(u32(o + 32) + (i * 32), get_mm_interface_16_64_32)
    }
    ö(u32(o + 40), get_mm_interface_16_64_40)
    ö(u32(o + 48), get_mm_interface_16_64_48)

}
function get_mm_interface_16_64_8(o) {
    if (u32(o + 0) !== 1 || u32(o + 4) || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_interface_16_64_16(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_interface_16_64_24(o) {
    if (u8(o + 4) || u8(o + 5) || u16(o + 6))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u16, 6, f32, 8], o)
}
function get_mm_interface_16_64_32(o) {
    if (f32(o + 8) !== 1 || u32(o + 12) || u32(o + 16) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28], o)
}
function get_mm_interface_16_64_40(o) {
    if (u32(o + 0) || u32(o + 4) || f32(o + 8) !== 1 || u32(o + 12) || u32(o + 16) || f32(o + 24) !== 1 || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}
function get_mm_interface_16_64_48(o) {
    if (u32(o + 0) || u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_interface_16_68(o) {

    if (u32(o + 32) !== 1 || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 32), get_mm_interface_16_68_4)
    }
    for (let i = 0; i < u32(o + 8); i++) {
        ö(u32(o + 12) + (i * 32), get_mm_interface_16_68_12)
    }
    for (let i = 0; i < u32(o + 16); i++) {
        ö(u32(o + 20) + (i * 32), get_mm_interface_16_68_20)
    }
    for (let i = 0; i < u32(o + 24); i++) {
        ö(u32(o + 28) + (i * 12), get_mm_interface_16_68_28)
    }
    ö(u32(o + 36), get_mm_interface_16_68_36)

}
function get_mm_interface_16_68_4(o) {
    if (u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}

function get_mm_interface_16_68_12(o) {
    if (u32(o + 4) || u32(o + 8) || u32(o + 12) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, u32, 4, u32, 8, u32, 12, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_interface_16_68_20(o) {
    if (u32(o + 12) || u16(o + 18) || u32(o + 24) || u32(o + 28))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u8, 16, u8, 17, u16, 18, f32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_interface_16_68_28(o) {
    if (u16(o + 6))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u8, 4, u8, 5, u16, 6, f32, 8], o)
}
function get_mm_interface_16_68_36(o) {
    if (u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
}

function get_mm_world(o) {
    if (u8(o + 12) !== 204 || u8(o + 13) !== 204 || u8(o + 14) !== 204 || u8(o + 15) !== 204 || u8(o + 28) !== 204 || u8(o + 29) !== 204 || u8(o + 30) !== 204 || u8(o + 31) !== 204 || u32(o + 72) || u32(o + 76) || u32(o + 84) !== 192 || u32(o + 104) || u32(o + 108) || u32(o + 152) || u32(o + 156) || u32(o + 168) || u32(o + 172) || u32(o + 184) || u32(o + 188))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, f32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72, u32, 76, u32, 80, u32, 84, u32, 88, u32, 92, u32, 96, u32, 100, u32, 104, u32, 108, u32, 112, u32, 116, u32, 120, u32, 124, u32, 128, u32, 132, u32, 136, u32, 140, u32, 144, u32, 148, u32, 152, u32, 156, u32, 160, u32, 164, u32, 168, u32, 172, u32, 176, u32, 180, u32, 184, u32, 188, ], o)

    for (let i = 0; i < u32(o + 48); i++) {
        ö(u32(o + 52) + (i * 80), get_mm_world_52)
    }
    for (let i = 0; i < u32(o + 56); i++) {
        ö(u32(o + 60) + (i * 4), get_mm_world_60)
    }
    for (let i = 0; i < u32(o + 64); i++) {
        ö(u32(o + 68) + (i * 4), get_mm_world_68)
    }
    for (let i = 0; i < u32(o + 80); i++) {
        ö(u32(o + 84) + (i * 76), get_mm_world_84)
    }
    for (let i = 0; i < u32(o + 88); i++) {
        ö(u32(o + 92) + (i * 48), get_mm_world_92)
    }

    for (let i = 0; i < u32(o + 96); i++) {
        ö(u32(o + 100) + i * 44, get_mm_world_100)
    }
    for (let i = 0; i < u32(o + 112); i++) {
        ö(u32(o + 116) + (i * 28), get_mm_world_116)
    }
    for (let i = 0; i < u32(o + 120); i++) {
        ö(u32(o + 124) + (i * 48), get_mm_world_124)
    }
    for (let i = 0; i < u32(o + 128); i++) {
        ö(u32(o + 132) + (i * 64), get_mm_world_132)
    }
    for (let i = 0; i < u32(o + 136); i++) {
        ö(u32(o + 140) + (i * 64), get_mm_world_140)
    }
    for (let i = 0; i < u32(o + 144); i++) {
        ö(u32(o + 148) + (i * 48), get_mm_world_148)
    }
    for (let i = 0; i < u32(o + 160); i++) {
        ö(u32(o + 164) + (i * 96), get_mm_world_164)
    }
    // ä(mm_world_164, u32(o + 164), get_mm_world_164)
    // globalThis.mm_world_164 = []

    ö(u32(o + 176), get_mm_world_176)
    ö(u32(o + 180), get_mm_world_180)

}
function get_mm_world_52(o) {
    if (u8(o + 15) !== 255 || u8(o + 31) !== 255 || u8(o + 47) !== 255 || u8(o + 68) !== 205 || u8(o + 69) !== 205 || u8(o + 70) !== 205 || u8(o + 71) !== 205 || u8(o + 72) !== 205 || u8(o + 73) !== 205 || u8(o + 74) !== 205 || u8(o + 75) !== 205 || u8(o + 76) !== 205 || u8(o + 77) !== 205 || u8(o + 78) !== 205 || u8(o + 79) !== 205)
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, u8, 28, u8, 29, u8, 30, u8, 31, f32, 32, f32, 36, f32, 40, u8, 44, u8, 45, u8, 46, u8, 47, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u8, 68, u8, 69, u8, 70, u8, 71, u8, 72, u8, 73, u8, 74, u8, 75, u8, 76, u8, 77, u8, 78, u8, 79], o)
    ä(car3_44_44, u32(o + 64), get_mm_car3_44_44)

}

function get_mm_world_60(o) {// ü(1, [u32, 0], o)
}
function get_mm_world_68(o) {// ü(1, [u32, 0], o)
}
function get_mm_world_84(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28) || u32(o + 32) || u32(o + 36) || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 52) || u32(o + 56) || u32(o + 60) || u32(o + 64) || u32(o + 68))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, u32, 52, u32, 56, u32, 60, u32, 64, u32, 68, u32, 72], o)
    ä(models, u32(o + 0), get_mm_model)

}

function get_mm_world_92(o) {
    if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u32(o + 24) || u8(o + 28) !== 205 || u8(o + 29) !== 205 || u8(o + 30) !== 205 || u8(o + 31) !== 205 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, u32, 44], o)
}

function get_mm_world_100(o) {
    if (u32(o + 16) || u8(o + 21) || u8(o + 22) !== 63 || u8(o + 23) || u32(o + 32) || u32(o + 36))
        ü(1, [u32, 0, u32, 4, f32, 8, f32, 12, u32, 16, u8, 20, u8, 21, u8, 22, u8, 23, u32, 24, f32, 28, u32, 32, u32, 36, u32, 40], o)

    ö(u32(o + 24), get_mm_world_100_24)
    ä(car3_44, u32(o + 40), get_mm_car3_44)

}

function get_mm_world_100_24(o) {
    if (u8(o + 1) || u8(o + 3))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32], o)
}

function get_mm_world_116(o) {
    if (u32(o + 12) || u32(o + 16))
        ü(1, [u32, 0, u32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24], o)

    for (let i = 0; i < u32(o + 20); i += 32) {
        ö(u32(o + 24) + i, get_mm_world_116_24)
    }

}

function get_mm_world_116_24(o) {
    if (u8(o + 17) !== 205 || u8(o + 20) !== 205 || u8(o + 21) !== 205 || u8(o + 22) !== 205 || u8(o + 23) !== 205 || u8(o + 24) !== 205 || u8(o + 25) !== 205 || u8(o + 26) !== 205 || u8(o + 27) !== 205 || u8(o + 28) !== 205 || u8(o + 29) !== 205 || u8(o + 30) !== 205 || u8(o + 31) !== 205)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
}

function get_mm_world_124(o) {
    if (u32(o + 12) || u8(o + 28) || u8(o + 29) !== 64 || u8(o + 30) !== 28 || u8(o + 31) !== 70 || u32(o + 36))
        ü(1, [f32, 0, f32, 4, f32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u8, 28, u8, 29, u8, 30, u8, 31, u32, 32, u32, 36, u32, 40, f32, 44], o)

    for (let i = 0; i < u32(o + 20); i += 32) {
        ö(u32(o + 32) + i, get_mm_world_124_32)
    }
}

function get_mm_world_124_32(o) {
    if (u8(o + 17) !== 205 || u8(o + 20) !== 205 || u8(o + 21) !== 205 || u8(o + 22) !== 205 || u8(o + 23) !== 205 || u8(o + 24) !== 205 || u8(o + 25) !== 205 || u8(o + 26) !== 205 || u8(o + 27) !== 205 || u8(o + 28) !== 205 || u8(o + 29) !== 205 || u8(o + 30) !== 205 || u8(o + 31) !== 205)
        ü(1, [f32, 0, f32, 4, f32, 8, f32, 12, u8, 16, u8, 17, u8, 18, u8, 19, u8, 20, u8, 21, u8, 22, u8, 23, u8, 24, u8, 25, u8, 26, u8, 27, u8, 28, u8, 29, u8, 30, u8, 31], o)
}

function get_mm_world_132(o) {
    if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u32(o + 24) || u32(o + 52) || u32(o + 56) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, f32, 20, u32, 24, f32, 28, u32, 32, u32, 36, u32, 40, f32, 44, u32, 48, u32, 52, u32, 56, u32, 60], o)

    ä(mm_unknown_4_4t4, u32(o + 36), get_mm_unknown_4_4t4)
    ö(u32(o + 40), get_mm_world_later)

}

function get_mm_world_later(o) {
    if (u32(o + 0) !== 32768258 || u32(o + 4) || u32(o + 8) || f32(o + 12) !== 200 || u32(o + 16) !== 45 || u32(o + 24) !== 2 || u32(o + 36) || u32(o + 40) || u32(o + 44))
        ü(1, [u32, 0, u32, 4, u32, 8, f32, 12, u32, 16, u32, 20, u32, 24, u32, 28, u32, 32, u32, 36, u32, 40, u32, 44, ], o)
    ß('p_texture', o, 20)
    ö(u32(o + 28), get_mm_world_later_28)
    ö(u32(o + 32), get_mm_world_later_32)

}

function get_mm_world_later_28(o) {
    if (u8(o + 0) || u8(o + 1) || u8(o + 2) || u8(o + 3) !== 255 || u32(o + 4) || u32(o + 8) || u8(o + 12) !== 192 || u8(o + 13) !== 192 || u8(o + 14) || u8(o + 15) !== 128 || u32(o + 16) || f32(o + 20) !== 1000 || u32(o + 24) || u32(o + 28))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, f32, 20, u32, 24, u32, 28, ], o)
}
function get_mm_world_later_32(o) {
    if (u32(o + 0) !== 14 || u32(o + 8) !== 257 || u8(o + 12) || u8(o + 13) !== 80 || u8(o + 14) !== 195 || u8(o + 15) !== 71 || u8(o + 16) || u8(o + 17) !== 80 || u8(o + 18) !== 195 || u8(o + 19) !== 71 || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u8, 16, u8, 17, u8, 18, u8, 19, u32, 20, u32, 24, u32, 28, ], o)

    for (let i = 0; i < u32(o); i++) {
        ö(u32(o + 4) + (i * 20), get_mm_world_later_32_4)
    }
    ö(u32(o + 20), get_mm_world_later_32_20)

}

function get_mm_world_later_32_20(o) {
    if (u8(o + 0) !== 255 || u8(o + 1) !== 255 || u8(o + 2) !== 255 || u8(o + 3) !== 255 || u32(o + 4) !== 2 || f32(o + 8) !== 1 || u32(o + 12))
        ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, u32, 4, f32, 8, u32, 12, ], o)
}
function get_mm_world_later_32_4(o) {
    /*ü(1, [u8, 0, u8, 1, u8, 2, u8, 3, f32, 4, f32, 8, u32, 12, u32, 16], o)*/
    ß('p_texture', o, 12)

}

function get_mm_world_140(o) {
    if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u32(o + 40) || u32(o + 44) || u32(o + 48) || u32(o + 60))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u32, 36, u32, 40, u32, 44, u32, 48, f32, 52, u32, 56, u32, 60], o)
    ä(car3_44, u32(o + 36), get_mm_car3_44)
}

function get_mm_world_148(o) {
    if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u32(o + 28) || u8(o + 36) !== 1 || u8(o + 39))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, u32, 16, u32, 20, u32, 24, u32, 28, f32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u32, 40, u32, 44], o)
    ä(car3_44, u32(o + 40), get_mm_car3_44)

}

function get_mm_world_164(o) {
    if (u32(o + 4) || u32(o + 12) || f32(o + 16) || f32(o + 20) !== 1 || f32(o + 24) || u32(o + 28) || u32(o + 36) || u32(o + 44) || f32(o + 60) !== 1)
        ü(1, [f32, 0, u32, 4, f32, 8, u32, 12, f32, 16, f32, 20, f32, 24, u32, 28, f32, 32, u32, 36, f32, 40, u32, 44, f32, 48, f32, 52, f32, 56, f32, 60, u32, 64, u32, 68, u32, 72, f32, 76, u32, 80, u32, 84, u32, 88, u32, 92], o)
    ä(mm_unknown, u32(o + 68), get_mm_unknown)
    ä(mm_unknown_4_4t4, u32(o + 72), get_mm_unknown_4_4t4)

    // console.log(u32(o+64),u32(o+80),u32(o+84),u32(o+92))
    ö(u32(o + 88), get_mm_world_164_88)

}

function get_mm_world_164_88(o) {// ü(3, [u32, 0, u32, 4, u32, 8, u32, 12], o)
}
function get_mm_world_176(o) {
    if (u32(o + 0) || f32(o + 4) !== 0.0010000000474974513 || u32(o + 8) || u32(o + 12))
        ü(1, [u32, 0, f32, 4, u32, 8, u32, 12, ], o)
}
function get_mm_world_180(o) {
    if (u32(o + 8) || u32(o + 12) || u32(o + 16) || u32(o + 20) || u32(o + 24) || u32(o + 28))
        ü(1, [u32, 0, u32, 4, u32, 8, u32, 12, u32, 16, u32, 20, u32, 24, u32, 28, ], o)
    for (let i = 0; i < u32(o + 4); i++) {
        ö(u32(o + 0) + (i * 80), get_mm_world_180_0)
    }
}

function get_mm_world_180_0(o) {
    if (u8(o + 12) !== 205 || u8(o + 13) !== 205 || u8(o + 14) !== 205 || u8(o + 15) !== 205 || u8(o + 64) || u8(o + 65) !== 128 || u8(o + 66) !== 255 || u8(o + 67) !== 255 || u32(o + 68) || u32(o + 72))
        ü(1, [f32, 0, f32, 4, f32, 8, u8, 12, u8, 13, u8, 14, u8, 15, f32, 16, f32, 20, f32, 24, f32, 28, u32, 32, u8, 36, u8, 37, u8, 38, u8, 39, u8, 40, u8, 41, u8, 42, u8, 43, u8, 44, u8, 45, u8, 46, u8, 47, f32, 48, u32, 52, u32, 56, u32, 60, u8, 64, u8, 65, u8, 66, u8, 67, u32, 68, u32, 72, u32, 76], o)
}
