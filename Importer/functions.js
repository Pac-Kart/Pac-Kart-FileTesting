function get_string(begin, end, is_no_end) {

    let temp_string
    if (is_no_end === undefined) {
        for (temp_string = ""; begin < end; begin++) {
            temp_string += String.fromCharCode(u8(begin))
        }
    } else {
        temp_string = ''
        if (u8(begin) === 0) {
            is_no_end = true
        }
        while (is_no_end === false) {
            temp_string += String.fromCharCode(u8(begin))
            begin++
            if (u8(begin) === 0) {
                is_no_end = true
            }
        }

    }

    return temp_string
}

function _Tx(array, f, n, offset, is_3) {

    if (array === undefined) {
        console.log("broke", f.name)
        return
    }
    if (array.a.includes(f(offset + n))) {} else {
        if (is_3 === 1) {
            array.def.push(f)
            array.o.push(offset + n)
            if (f.name === "u8") {
                for (let i = 0; i < 4; i++) {
                    array.a.push(f(offset + n + i))
                }
            } else {
                array.a.push(f(offset + n))
            }
        } else {

            array.a.push(f(offset + n))
            array.o.push(offset + n)

        }
    }
}
function divisible(value, divisibility) {
    const remainder = value % divisibility;
    g.divisible_prev_value = [value, divisibility]
    return remainder === 0 ? value : value + (divisibility - remainder);
}

function array_log(array_index=0) {

    let if_section = 'if('
    let u_sec = 'ü(1, ['
    let vertical = ''
    let ismultilinked = ''
    let afterifhtml = ''

    if (temp_array__[0]?.line === 0) {
        if (temp_array__[0].lost_offsets !== "") {
            print_totals()
        } else {
            file_editor.innerHTML = "no values found"
            file_viewer.innerHTML = "no values found"
        }
        return
    }

    if (temp_array__[array_index].offset_check.multilink.includes(0)) {
        let prev_sec_array = temp_array__[array_index].name.split('_')
        let prev_sec = prev_sec_array
        let last_entry = prev_sec_array[prev_sec_array.length - 1]
        let istype = ''
        if (last_entry.split('t')?.length > 1) {
            istype = "t" + last_entry.split('t')[1]
            last_entry = last_entry?.split('t')[0]
        }

        prev_sec.pop()
        prev_sec = prev_sec.join('_')
        ismultilinked = `
<p>multi linked to by:<br>
    <a href="#${prev_sec}">${prev_sec} [${last_entry}]${istype} </a><br>
</p>`
    }
    let last = 0
    let html = `
<h2 id="${temp_array__[array_index].name}">${temp_array__[array_index].name}</h2>${ismultilinked}
<table class="h">
    <tbody>
        <tr>
            <th>Offset</th>
            <th>Type</th>
            <th>Description</th>
        </tr>`

    let is_above = (currentValue) => currentValue > 1000;
    let is_below = (currentValue) => currentValue < 0xfffffff;

    for (let i = 0; i < temp_array__[array_index].subarrays.length; i++) {
        last = log(temp_array__[array_index].subarrays[i], i)
    }

    last = divisible(last, 4)

    html += `
    </tbody>
    <tfoot>
        <tr>
            <th colspan="3">${last} bytes</th>
        </tr>
    </tfoot>
</table>
<hr/>
`
    if (last === 0) {} else {
        console.groupCollapsed('vertical')
        console.log(vertical)
        console.groupEnd()

        console.groupCollapsed('table')
        console.log(html)
        console.groupEnd()

    }

    u_sec = u_sec.substring(0, u_sec.length - 2)
    u_sec += `], o)`

    if (if_section === "if(") {
        u_sec = "/" + "*" + u_sec + "*" + "/"
        if_section = ""
    } else {
        u_sec = "\n" + u_sec
        if_section = if_section.substr(0, if_section.length - 2)

        if_section += `)`

        //after if

        if (temp_array__[array_index].offset_check.multilink.length) {
            let prev_sec_array = temp_array__[array_index].name.split('_')
            let last_entry = prev_sec_array[prev_sec_array.length - 1]
            last_entry = last_entry.split('t')[0]

            afterifhtml += `\n

// ä(${temp_array__[array_index].name}, u32(o + ${last_entry}), get_${temp_array__[array_index].name})
// globalThis.${temp_array__[array_index].name} = []`
        }

        let offarray = temp_array__[array_index].offset_check.offset?.sort(function(a, b) {
            return a - b;
        });
        if (offarray.length) {
            afterifhtml += '\n\n'
            if (offarray.length) {
                afterifhtml += `ö(u32(o + ${offarray[array_index]}), get_${temp_array__[array_index].name}_${offarray[array_index]})\n`
                for (let i = 1; i < offarray.length; i++) {
                    afterifhtml += `ö(u32(o + ${offarray[i]}), get_${temp_array__[array_index].name}_${offarray[i]})\n`
                }
            }
            afterifhtml += `\n    }\n\n`

            for (let i = 0; i < offarray.length; i++) {
                afterifhtml += `function get_${temp_array__[array_index].name}_${offarray[i]}(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}\n`
            }
        }

        console.groupCollapsed('if statement')
        console.log(if_section, u_sec, afterifhtml)
        console.groupEnd()

    }

    if (temp_array__[array_index].offset_check.multilink.length || temp_array__[array_index].offset_check.offset.length || temp_array__[array_index].offset_check.model.length || temp_array__[array_index].offset_check.sound.length || temp_array__[array_index].offset_check.texture.length || temp_array__[array_index].offset_check.texture_anim.length) {

        afterifhtml = ''
        //after if
        let texarray = temp_array__[array_index].offset_check.texture
        if (texarray.length) {
            for (let i = 0; i < texarray.length; i++) {
                afterifhtml += ` ß('p_texture', o, ${texarray[i]})\n`
            }
        }
        let modelarray = temp_array__[array_index].offset_check.model
        if (modelarray.length) {
            for (let i = 0; i < modelarray.length; i++) {
                afterifhtml += ` ß('p_model', o, ${modelarray[i]})\n`
            }
        }
        let texture_anim = temp_array__[array_index].offset_check.texture_anim
        if (texture_anim.length) {
            for (let i = 0; i < texture_anim.length; i++) {
                afterifhtml += ` ß('p_animation', o, ${texture_anim[i]})\n`
            }
        }
        let soundarray = temp_array__[array_index].offset_check.sound
        if (soundarray.length) {
            for (let i = 0; i < soundarray.length; i++) {
                afterifhtml += ` ß('p_sound', o, ${soundarray[i]})\n`
            }
        }

        if (temp_array__[array_index].offset_check.multilink.length) {
            let prev_sec_array = temp_array__[array_index].name.split('_')
            let last_entry = prev_sec_array[prev_sec_array.length - 1]
            last_entry = last_entry.split('t')[0]

            afterifhtml += `
// ä(${temp_array__[array_index].name}, u32(o + ${last_entry}), get_${temp_array__[array_index].name})
// globalThis.${temp_array__[array_index].name} = []`
        }

        let offarray = temp_array__[array_index].offset_check.offset?.sort(function(a, b) {
            return a - b;
        });
        if (offarray.length) {
            afterifhtml += '\n\n'
            // afterifhtml += `ö(u32(o + ${offarray[0]}), get_${temp_array__[array_index].name}_${offarray[array_index]})\n`

            for (let i = 0; i < offarray.length; i++) {
                afterifhtml += `ö(u32(o + ${offarray[i]}), get_${temp_array__[array_index].name}_${offarray[i]})\n`
            }
            afterifhtml += `\n    }\n\n`

            for (let i = 0; i < offarray.length; i++) {
                afterifhtml += `function get_${temp_array__[array_index].name}_${offarray[i]}(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}\n`
            }
        }

        console.groupCollapsed('offsets:')
        console.log(afterifhtml)
        console.groupEnd()

    }

    if (afterifhtml !== "") {
        afterifhtml = "\n" + afterifhtml
    }
    let switchhtml = ''
    if (temp_array__[array_index].switch.array.length) {
        let switchhtmlfuntions = ''
        switchhtml = `
        switch (${temp_array__[array_index].switch.type.name}(o + ${temp_array__[array_index].switch.type_offset})) {`

        for (let i = 0; i < temp_array__[array_index].switch.array.length; i++) {
            switchhtml += `
        case ${temp_array__[array_index].switch.array[i]}:
            ö(u32(o + ${temp_array__[array_index].switch.offset_val}), get_${temp_array__[array_index].name}_${temp_array__[array_index].switch.offset_val}t${temp_array__[array_index].switch.array[i]})
            break`
            switchhtmlfuntions += `function get_${temp_array__[array_index].name}_${temp_array__[array_index].switch.offset_val}t${temp_array__[array_index].switch.array[i]}(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}\n`
        }

        if (temp_array__[array_index].switch.no_val_array.length) {
            for (let i = 0; i < temp_array__[array_index].switch.no_val_array.length; i++) {
                if (temp_array__[array_index].switch.no_val_array[i] === 0) {} else {
                    switchhtml += `
        case ${temp_array__[array_index].switch.array[i]}:
        // not offset value seen? ${temp_array__[array_index].switch.no_val_array[i]}
            break`
                }
            }
        }

        switchhtml += `
        default:
            if (u32(o + ${temp_array__[array_index].switch.offset_val})) {
                 console.log(o)
             }
    `

        switchhtml += '}\n\n' + switchhtmlfuntions

        // console.log(switchhtml)
    }

    let printall = if_section + u_sec + switchhtml + afterifhtml

    let clickstructhtml = ''

    let struct_html = ''
    let structbox = ''
    let copy_name = `<a id="click_copytext" class="switch_view">copy</a><br>`

    if (temp_array__[array_index].struct_check.length) {
        let struct_sizes = temp_array__[array_index].struct_amount.sort(function(a, b) {
            return a - b;
        });

        struct_html = "ü(1, ["

        let struct_array = temp_array__[array_index].struct_check

        for (let i = 0; i < struct_array.length; i++) {

            if (struct_array[i].def.find( (e) => e.name === "f32")) {
                struct_html += `f32, ${struct_array[i].n}, `
            } else if (struct_array[i].def.find( (e) => e.name === "u8")) {
                struct_html += `u8, ${struct_array[i].n}, u8, ${struct_array[i].n + 1}, u8, ${struct_array[i].n + 2}, u8, ${struct_array[i].n + 3}, `
            } else {
                struct_html += `u32, ${struct_array[i].n}, `
            }
            if (struct_sizes[0] <= struct_array[i].n) {
                i = struct_array.length + 1
            }
        }

        struct_html += `], o)\n`

        if (temp_array__[array_index].struct_amount.length === 1) {
            log_3html = ''
            for (let i = 0; i < temp_array__[array_index].struct_check.length; i++) {
                last = log_3(temp_array__[array_index].struct_check[i], i)
            }
            last = divisible(last, 4)

            structbox = `
                <div style="height:100%;overflow:scroll;">${copy_name}
                ${generate_table_head()} ${log_3html} ${generate_table_end()}
            </div>`
        } else {
            structbox = `${copy_name} ${temp_array__[array_index].name}`
        }

        clickstructhtml = `
    <div id='copy_struct_parent'style="height:33%;overflow:scroll;background-color:white;">
        <a id='copy_struct'>click copy struct</a> size: ${struct_sizes}
    </div>`

        console.log(struct_html + `\n\n ${struct_sizes}`)
    }

    file_viewer.innerHTML = `
    <div id='copy_if_statement_parent'style="height:33%;overflow:scroll;background-color:white;">
        <a id='copy_if_statement'>click copy_if_statement</a>
    </div>
    <div id='copy_table_parent' style="height:33%;overflow:scroll;background-color:white;">
        <a id='copy_table'>click copy_table</a>
    </div>
    ${clickstructhtml}
    `

    copy_if_statement_parent.addEventListener("click", (e) => {
        if (document.getElementById("copy_if_statement").getElementsByTagName('Textarea')?.length) {}
        document.getElementById("copy_if_statement").innerHTML = `<textarea style="height:50%;" id='copy_to_clipboard_if'>${printall}\n</textarea>`
        document.getElementById("copy_to_clipboard_if").select()
        document.execCommand('copy')
        temp_array__[array_index].lines_clicked[1] = 1
    }
    )

    copy_table_parent.addEventListener("click", (e) => {
        document.getElementById("copy_table").innerHTML = `<textarea style="height:50%;" id='copy_to_clipboard_table'>${html}</textarea>`

        document.getElementById("copy_to_clipboard_table").select()
        document.execCommand('copy')
        document.execCommand('copy')
        temp_array__[array_index].lines_clicked[0] = 1

    }
    )

    if (document.getElementById('copy_struct_parent') !== null) {

        copy_struct_parent.addEventListener("click", (e) => {
            if (document.getElementById("copy_struct").getElementsByTagName('Textarea')?.length) {}
            document.getElementById("copy_struct").innerHTML = `<textarea style="height:50%;" id='copy_to_clipboard_struct'>${struct_html}</textarea>`
            document.getElementById("copy_to_clipboard_struct").select()
            document.execCommand('copy')
            temp_array__[array_index].lines_clicked[0] = 1
            temp_array__[array_index].lines_clicked[1] = 1

        }
        )
    }

    let patchhtml = ''
    if (temp_array__[array_index].offset_check.texture.length) {
        let offarray = temp_array__[array_index].offset_check.texture.sort(function(a, b) {
            return a - b;
        });
        patchhtml += `TEX0: ${offarray} | `
    }
    if (temp_array__[array_index].offset_check.sound.length) {
        patchhtml += `SND: ${temp_array__[array_index].offset_check.sound.sort(function(a, b) {
            return a - b;
        })} | `
    }
    if (temp_array__[array_index].offset_check.model.length) {
        patchhtml += `MDL: ${temp_array__[array_index].offset_check.model.sort(function(a, b) {
            return a - b;
        })} | `
    }
    if (temp_array__[array_index].offset_check.texture_anim.length) {
        patchhtml += `ANM: ${temp_array__[array_index].offset_check.texture_anim.sort(function(a, b) {
            return a - b;
        })} | `
    }
    if (temp_array__[array_index].offset_check.offset.length) {
        let offarray = temp_array__[array_index].offset_check.offset.sort(function(a, b) {
            return a - b;
        });
        patchhtml += `OFFS: ${temp_array__[array_index].offset_check.offset.sort(function(a, b) {
            return a - b;
        })} | `

    }
    if (temp_array__[array_index].offset_check.multilink.length) {
        patchhtml += `ML: ${temp_array__[array_index].offset_check.multilink.sort(function(a, b) {
            return a - b;
        })} | `
    }
    if (patchhtml !== "") {
        console.log(`PATCHERS %c${patchhtml}`, 'color:red')
    }

    // if (last === 0) {
    if (temp_array__[array_index].struct_amount.length) {
        if (temp_array__[array_index].struct_amount.length) {
            let consolehtml;
            if (globalThis?.packart_hide_console === true) {
                consolehtml = temp_array__[array_index].console?.length
            } else {
                if (temp_array__[array_index].console?.length < temp_array__[array_index].settings.console_limit) {
                    consolehtml = temp_array__[array_index].console?.replaceAll('\n', "<br>")
                    consolehtml = consolehtml?.replaceAll('P_O', "<a class='s'>P_O</a>")
                } else {
                    consolehtml = temp_array__[array_index].console?.length
                }
            }

            consolehtml += `LINE: <a class="M"> ${temp_array__[[array_index]]?.line[0]?.toString()}</a> - <a style="color:#3c1bb4">${temp_array__[[array_index]]?.name}</a><br>
        Files Seen: [ ${temp_array__[[array_index]]?.files} ]`

            file_editor.innerHTML = `
        <div style="height:66%;overflow:scroll;">
            <div stlye="padding:1%;">${consolehtml}<br><br>
            </div>
        </div>
        <div style="height:33%;overflow:scroll;">
            <div style="display:block;" id="htmltable">${structbox}</div>
        </div>
        `
            document.getElementById('click_copytext').addEventListener("click", function() {

                if (document.getElementById("click_copytext").getElementsByTagName('Textarea')?.length) {}
                document.getElementById("click_copytext").innerHTML = `<textarea style="height:50%;" id='click_copytext_if'>${temp_array__[[array_index]]?.name}\n</textarea>`
                document.getElementById("click_copytext_if").select()
                document.execCommand('copy')
                // temp_array__[array_index].lines_clicked[1] = 1
            })

        }
    } else {
        let verticalhtml = vertical?.replaceAll('\n', "<br>")
        let consolehtml;
        if (globalThis?.packart_hide_console === true) {
            consolehtml = temp_array__[array_index].console?.length
        } else {

            consolehtml = temp_array__[array_index].console?.replaceAll('\n', "<br>")
            if (temp_array__[0].settings.show_types === true) {
                consolehtml = consolehtml?.replaceAll('P_Ou32#', "<a class='s'>P_Ou32#</a>")
            } else {
                consolehtml = consolehtml?.replaceAll('u32#', "")
                consolehtml = consolehtml?.replaceAll('u8#', "")
                consolehtml = consolehtml?.replaceAll('f32#', "")
                consolehtml = consolehtml?.replaceAll('P_O', "<a class='s'>P_O</a>")
            }
            if (patchhtml !== "") {
                consolehtml += `PATCHERS <a class="O">${patchhtml}</a><br>`
            }
            if (switchhtml !== "") {
                consolehtml += switchhtml?.replaceAll('\n', "<br>")
            }
            consolehtml += `LINE: <a class="M"> ${temp_array__[[array_index]]?.line[0]?.toString()}</a> - <a style="color:#3c1bb4">${temp_array__[[array_index]]?.name}</a><br>
        Files Seen: [ ${temp_array__[[array_index]]?.files} ]`
        }
        file_editor.innerHTML = `
        <div style="height:66%;overflow:scroll;">
            <div stlye="padding:1%;">${consolehtml}<br><br>
                <a id="click_show_types" class="switch_view">List Types?</a>
            </div>
        </div>
        <div style="height:33%;overflow:scroll;">
            <a id="click_vertical" class="switch_view">Switch View</a> ||
            <a id="click_copytext" class="switch_view">copy</a>
            <div style="display:block;" id="htmltable">${html}</div>
            <div style="display:none;" id="verticaltable">${verticalhtml}</div>
        </div>
        `
        document.getElementById('click_show_types').addEventListener("click", function() {
            if (temp_array__[0].settings.show_types === true) {
                temp_array__[0].settings.show_types = false;
            } else {
                temp_array__[0].settings.show_types = true;
            }
            document.getElementsByClassName('bar')[0]?.childNodes[array_index]?.click()
        })
        document.getElementById('click_vertical').addEventListener("click", function() {
            if (htmltable.style.display === "block") {
                htmltable.style.display = "none"
                verticaltable.style.display = "block"
            } else {
                htmltable.style.display = "block"
                verticaltable.style.display = "none"
            }
        })
        document.getElementById('click_copytext').addEventListener("click", function() {

            if (document.getElementById("click_copytext").getElementsByTagName('Textarea')?.length) {}
            document.getElementById("click_copytext").innerHTML = `<textarea style="height:50%;" id='click_copytext_if'>${temp_array__[[array_index]]?.name}\n</textarea>`
            document.getElementById("click_copytext_if").select()
            document.execCommand('copy')
            // temp_array__[array_index].lines_clicked[1] = 1
        })
    }
    let total = temp_array__[0].totalnotfound
    if (total.TEX0.max || total.ANIM.max || total.MDL0.max || total.OFF0.max || total.SND0.max) {
        let totalhtml = printvals('OFF0')
        totalhtml += printvals('TEX0')
        totalhtml += printvals('ANIM')
        totalhtml += printvals('MDL0')
        totalhtml += printvals('SND0')
        let OFF0color = is_equal('OFF0')
        let tex0color = is_equal('TEX0')
        let ANIMcolor = is_equal('ANIM')
        let MDL0color = is_equal('MDL0')
        let SND0color = is_equal('SND0')
        function printvals(string) {
            return `%c ${string}: ${total[string].min}/${total[string].max} |`
        }
        function is_equal(type) {
            return total[type].min - total[type].max === 0 ? 'color:blue' : 'color:red'
        }

        console.log(`TOTAL REST: ${totalhtml}`, OFF0color, tex0color, ANIMcolor, MDL0color, SND0color)
    }

    if (temp_array__[0].line.length > 1) {
        let htmlbuttons = ''
        let color = ''
        for (let i = 0; i < temp_array__[0].line.length; i++) {
            let element = temp_array__[i]
            if (element.lines_clicked[0] && element.lines_clicked[1]) {
                if (array_index === i) {
                    color = "color:blue;"
                } else {
                    color = "color:grey;"
                }
            } else {
                if (element.struct_check.length !== 0) {
                    color = "color:red;text-decoration-line:underline;"
                } else {
                    color = 'text-decoration-line:underline;'
                }
                if (array_index === i) {
                    color = "color:blue;text-decoration-line:underline;"
                }
            }
            htmlbuttons += `<a data-val="${i}" class="test_line_click" style='${color}'>${temp_array__[0].line[i]}</a>`
        }

        let _2nd_array = temp_array__[0].line
        document.getElementsByClassName('bar')[0].innerHTML = htmlbuttons

        let sortedlines = temp_array__[0].line.sort(function(a, b) {
            return a - b;
        }).toString()

        console.log(`sorted lines: ${sortedlines} | T: ${temp_array__[0].line.length}`)

    } else {
        document.getElementsByClassName('bar')[0].innerHTML = `LINE: <a style="color:blue;">${temp_array__[array_index].line.toString()}</a><br><a style="color:red;">${patchhtml}</a>`
    }
    console.log(`LINE: %c ${temp_array__[[array_index]]?.line[0]?.toString()} \n%c${temp_array__[[array_index]]?.name}`, 'color:blue', 'color:cyan')

    // if (temp_array__[array_index].switch.array.length) {
    //     let switchhtmlfuntions = ''
    //     let switchhtml = `
    //     switch (${temp_array__[array_index].switch.type.name}(o + ${temp_array__[array_index].switch.type_offset})) {`

    //     for (let i = 0; i < temp_array__[array_index].switch.array.length; i++) {
    //         switchhtml += `
    //     case ${temp_array__[array_index].switch.array[i]}:
    //         ö(u32(o + ${temp_array__[array_index].switch.offset_val}), get_${temp_array__[array_index].name}_${temp_array__[array_index].switch.offset_val}t${temp_array__[array_index].switch.array[i]})
    //         break`
    //         switchhtmlfuntions += `function get_${temp_array__[array_index].name}_${temp_array__[array_index].switch.offset_val}t${temp_array__[array_index].switch.array[i]}(o){ü(3,[u32,0,u32,4,u32,8,u32,12],o)}\n`
    //     }

    //     if (temp_array__[array_index].switch.no_val_array.length) {
    //         for (let i = 0; i < temp_array__[array_index].switch.no_val_array.length; i++) {
    //             if (temp_array__[array_index].switch.no_val_array[i] === 0) {} else {
    //                 switchhtml += `
    //     case ${temp_array__[array_index].switch.array[i]}:
    //     // not offset value seen? ${temp_array__[array_index].switch.no_val_array[i]}
    //         break`
    //             }
    //         }
    //     }

    //     switchhtml += `
    //     default:
    //         if (u32(o + ${temp_array__[array_index].switch.offset_val})) {
    //              console.log(o)
    //          }
    // `

    //     switchhtml += '}\n\n' + switchhtmlfuntions

    //     // console.log(switchhtml)
    // }

    function log(a, i) {
        if (a.a.length) {
            vertical += `${a.a.toString()} | ${a.def} | ${a.number} | ${a.o[a.o.length - 1]}\n`
            let _1st = a.number
            let _2nd = a.def
            let _3rd = 'always ' + a.a[0]
            let isoffset = ''

            if (a.a.length === 1 && a.a[0] === 0) {
                if_section += `${a.def}(o+${a.number}) ||`
            } else if (a.a.length === 1) {
                if_section += `${a.def}(o+${a.number}) !==${a.a[0]} ||`
            }

            u_sec += `${a.def}, ${a.number}, `

            if (_1st < 10) {
                _1st = String(_1st).padStart(2, '0');
            }

            if (_2nd === "f32") {
                _2nd = "float"
            }

            if (a.a.length === 1 && a.a[0] === 0) {
                if (_2nd === "float") {
                    _2nd = "u32"
                }
                _3rd = "0"
            } else if (a.a.length !== 1) {
                if (a.a.length > 10 && a.def === "u32" && a.a.every(is_above) && a.a.every(is_below)) {
                    _3rd = ''
                } else {
                    if (a.a.length > 10) {
                        _3rd = `${a.a.reduce( (a, b) => Math.min(a, b), Infinity)} - ${a.a.reduce( (a, b) => Math.max(a, b), -Infinity)}`
                    } else {
                        _3rd = a.a.sort(function(a, b) {
                            return a - b;
                        }).toString()
                        // _3rd = a.a.toString()
                    }
                }
            }

            if (temp_array__[array_index].offset_check.offset.includes(a.number)) {
                isoffset = `<a href="#${temp_array__[array_index].name}_${a.number}">offset</a> `
            }
            if (temp_array__[array_index].offset_check.texture.includes(a.number)) {
                isoffset += `patch texture `
            }
            if (temp_array__[array_index].offset_check.sound.includes(a.number)) {
                isoffset += `patch sound `
            }
            if (temp_array__[array_index].offset_check.model.includes(a.number)) {
                isoffset += `patch model `
            }
            if (temp_array__[array_index].offset_check.texture_anim.includes(a.number)) {
                isoffset += `patch Animation `
            }

            html += `
        <tr class="u">
            <td>${_1st}</td>
            <td>${_2nd}</td>
            <td>${isoffset}${_3rd}</td>
        </tr>`
            return a.number + 1
        }
        return last
    }

    function generate_table_head() {
        return `
<h2 id="${temp_array__[array_index].name}">${temp_array__[array_index].name}</h2>${ismultilinked}
<table class="h">
    <tbody>
        <tr>
            <th>Offset</th>
            <th>Type</th>
            <th>Description</th>
        </tr>`
    }

    function generate_table_end() {
        return `
    </tbody>
    <tfoot>
        <tr>
            <th colspan="3">${last} bytes</th>
        </tr>
    </tfoot>
</table>
<hr/>
`
    }

    function log_3(a, i) {
        _2nd = u32;

        if (a.a.length) {
            if (a.def.find( (e) => e.name === "f32")) {
                _2nd = 'f32';
            } else if (a.def.find( (e) => e.name === "u8")) {
                _2nd = 'u8';
            } else {
                _2nd = 'u32'
            }

            let _1st = a.n
            // let _2nd = a.def
            let _3rd = 'always ' + a.a[0]
            let isoffset = ''

            if (_1st < 10) {
                _1st = String(_1st).padStart(2, '0');
            }

            if (_2nd === "f32") {
                _2nd = "float"
            }

            if (a.a.length === 1 && a.a[0] === 0) {
                if (_2nd === "float") {
                    _2nd = "u32"
                }
                _3rd = "0"
            } else if (a.a.length !== 1) {
                if (a.a.length > 10 && a.def === "u32" && a.a.every(is_above) && a.a.every(is_below)) {
                    _3rd = ''
                } else {
                    if (a.a.length > 10) {
                        _3rd = `${a.a.reduce( (a, b) => Math.min(a, b), Infinity)} - ${a.a.reduce( (a, b) => Math.max(a, b), -Infinity)}`
                    } else {
                        _3rd = a.a.sort(function(a, b) {
                            return a - b;
                        }).toString()
                        // _3rd = a.a.toString()
                    }
                }
            }

            if (temp_array__[array_index].offset_check.offset.includes(a.n)) {
                isoffset = `<a href="#${temp_array__[array_index].name}_${a.n}">offset</a> `
            }
            if (temp_array__[array_index].offset_check.texture.includes(a.n)) {
                isoffset += `patch texture `
            }
            if (temp_array__[array_index].offset_check.sound.includes(a.n)) {
                isoffset += `patch sound `
            }
            if (temp_array__[array_index].offset_check.model.includes(a.n)) {
                isoffset += `patch model `
            }
            if (temp_array__[array_index].offset_check.texture_anim.includes(a.n)) {
                isoffset += `patch Animation `
            }

            log_3html += `
        <tr class="u">
            <td>${_1st}</td>
            <td>${_2nd}</td>
            <td>${isoffset}${_3rd}</td>
        </tr>`
            return a.n + 1
        }
        return last
    }

    function print_totals() {
        let total = temp_array__[0].totalnotfound
        if (total.TEX0.max || total.ANIM.max || total.MDL0.max || total.OFF0.max || total.SND0.max) {
            let totalshtml = ''
            let totalhtml = printvals('OFF0')
            totalhtml += printvals('TEX0')
            totalhtml += printvals('ANIM')
            totalhtml += printvals('MDL0')
            totalhtml += printvals('SND0')
            let OFF0color = is_equal('OFF0')
            let tex0color = is_equal('TEX0')
            let ANIMcolor = is_equal('ANIM')
            let MDL0color = is_equal('MDL0')
            let SND0color = is_equal('SND0')
            function printvals(string) {
                return `%c ${string}: ${total[string].min}/${total[string].max} |`
            }
            function is_equal(type) {
                return total[type].min - total[type].max === 0 ? 'color:blue' : 'color:red'
            }

            console.log(`TOTAL REST: ${totalhtml}`, OFF0color, tex0color, ANIMcolor, MDL0color, SND0color)
            // temp_array__[array_index].console+= `TOTAL REST: ${totalhtml}`
            file_editor.innerHTML = totalhtml + temp_array__[0].lost_offsets
            file_viewer.innerHTML = ""
        }
    }

}

function ü(mode, array, offset) {
    // 0 = "print rows"
    // 1 = "generate table"
    // 2 = "log offsets"
    // 3 = "structure test"
    // 4 = "recursive"

    let html = ''
    let show_byte = false
    if (mode === 1) {
        show_byte = true
    }
    var caller_line = (new Error).stack.split("\n")[2].split('js:')[1].split(':')[0]
    var caller_name = (new Error).stack.split("\n")[2].split('(')[0].split('at get_')[1]?.trim()

    let temp_array_index;
    if (temp_array__[0].line === 0) {
        temp_array__[0].line = [caller_line]
        temp_array__[0].lines_clicked = [0, 0]
        temp_array__[0].name = caller_name
        temp_array_index = 0
    } else {
        if (temp_array__[0].line.includes(caller_line)) {
            temp_array_index = temp_array__[0].line.indexOf(caller_line)
        } else {
            temp_array_index = temp_array__[0].line.length
            temp_array__[0].line.push(caller_line)
            globalThis.temp_array__.push(generate_temp_array())
            temp_array__[temp_array_index].name = caller_name
            temp_array__[temp_array_index].line = [caller_line]
            temp_array__[temp_array_index].lines_clicked = [0, 0]
        }
    }

    if (temp_array__[temp_array_index].files.includes(g.file_name)) {} else {
        temp_array__[temp_array_index].files.push(g.file_name)
    }

    let is_first_line = false;

    if (temp_array__[0].line[0] === caller_line) {
        is_first_line = true;
    }

    for (let i = 0; i < array.length; i += 2) {
        let in_patchlist = ''
        if (array[i + 1] % 4 === 0) {
            if (log_array.multilinked.includes(offset + array[i + 1] - offset_mid)) {
                html += `ML`
                if (temp_array__[temp_array_index].offset_check.multilink.includes(array[i + 1])) {} else {
                    temp_array__[temp_array_index].offset_check.multilink.push(array[i + 1])
                }
            }
            if (log_array.p_offset.array.includes(offset + array[i + 1] - offset_mid)) {
                html += `P_O`
                if (temp_array__[temp_array_index].offset_check.offset.includes(array[i + 1])) {} else {
                    temp_array__[temp_array_index].offset_check.offset.push(array[i + 1])
                }
            } else if (log_array.p_sound.array.includes(offset + array[i + 1] - offset_mid)) {
                html += `P_S`
                if (temp_array__[temp_array_index].offset_check.sound.includes(array[i + 1])) {} else {
                    temp_array__[temp_array_index].offset_check.sound.push(array[i + 1])
                }
            } else if (log_array.p_model.array.includes(offset + array[i + 1] - offset_mid)) {
                html += `P_M`
                if (temp_array__[temp_array_index].offset_check.model.includes(array[i + 1])) {} else {
                    temp_array__[temp_array_index].offset_check.model.push(array[i + 1])
                }
            } else if (log_array.p_animation.array.includes(offset + array[i + 1] - offset_mid)) {
                html += `P_A`
                if (temp_array__[temp_array_index].offset_check.texture_anim.includes(array[i + 1])) {} else {
                    temp_array__[temp_array_index].offset_check.texture_anim.push(array[i + 1])
                }
            } else if (log_array.p_texture.array.includes(offset + array[i + 1] - offset_mid)) {
                html += `P_T`
                if (temp_array__[temp_array_index].offset_check.texture.includes(array[i + 1])) {} else {
                    temp_array__[temp_array_index].offset_check.texture.push(array[i + 1])
                }
            }
        }

        let set_type = false
        if (show_byte === true) {
            html += array[i].name + "#"
        }
        if (array[i].name === "u8" || array[i].name === "u16") {
            set_type = true
        }

        if (set_type && array[i + 1] === divisible(array[i + 1], 4)) {
            html += "[ " + array[i](array[i + 1] + offset) + ", "
        } else if (set_type && array[i + 1] + 1 !== divisible(array[i + 1], 4)) {
            if (array[i].name === "u16" && array[i + 1] + 2 === divisible(array[i + 1], 4)) {
                html += array[i](array[i + 1] + offset) + " ] | "
            } else {

                html += array[i](array[i + 1] + offset) + ", "
            }
        } else if (set_type && array[i + 1] + 1 === divisible(array[i + 1], 4)) {
            html += array[i](array[i + 1] + offset) + " ] | "
        } else {
            if (array[i].name === "f32" && array[i](array[i + 1] + offset)) {
                html += array[i](array[i + 1] + offset).toFixed(2) + " | "
            } else {
                html += array[i](array[i + 1] + offset) + " | "
            }
        }

    }
    html = html.substr(0, html.length - 1)
    let consolehtml = html
    if (offset_mid === null) {
        html += '| %cO ' + offset
        consolehtml += `<a class="O">O ${offset}</a>`
    } else {
        html += '| %cO ' + offset + " %cM " + offset_mid + " %cI " + (offset - offset_mid)
        consolehtml += `| <a class="O">O ${offset} </a><a class="M">M ${offset_mid} </a><a class="I">I ${(offset - offset_mid)}</a>`
    }
    if (is_first_line) {
        console.log(html, 'color:red;', 'color:blue;', 'color:green;')
    }
    temp_array__[temp_array_index].console += consolehtml + "<br>"

    if (mode === 1) {
        if (temp_array__[temp_array_index].subarrays.length === 0) {

            for (let i = 0; i < array.length; i += 2) {
                temp_array__[temp_array_index].subarrays.push({
                    a: [],
                    def: array[i].name,
                    number: array[i + 1],
                    o: []
                })
            }
        }

        for (let i = 0, ii = 0; i < array.length; i += 2,
        ii++) {
            _Tx(temp_array__[temp_array_index].subarrays[ii], array[i], array[i + 1], offset)
        }

    }

    if (mode === 2) {
        let same_offset = []

        for (let o = 0; o < array.length; o++) {
            same_offset.push({
                a: [],
                n: array[o],
            })
            if (array[o] % 4 === 0) {

                offset_act = (offset + array[o]) - offset_mid

                for (let i = log_array.p_texture.offset; i < buffer.byteLength - 4; i += 4) {
                    u32(i) === offset_act ? same_offset[o].a.push(i) : 0
                }
            }
        }

        let offsetlog = ''

        for (let i = 0; i < same_offset.length; i++) {
            let html = '?'
            if (same_offset[i].a.length) {
                for (let ii = 0; ii < same_offset[i].a.length; ii++) {

                    if (same_offset[i].a[ii] < offset) {
                        offsetlog += `B!#%*${same_offset[i].a[ii]}, `
                    } else {
                        offsetlog += `A-${same_offset[i].a[ii]}, `
                    }
                }
            }
            if (isFinite(same_offset[i].n)) {
                offsetlog += `| ${same_offset[i].n} \n`
            }

        }
        console.log(offsetlog)
    }

    if (mode === 3) {
        let outer_i = 0
        let o_limit = 1024

        let check_offset = offset - offset_mid
        let isfound = false
        let o = 0
        let end = g.datapack_end - offset_mid
        while (!isfound) {
            o += 1

            if (o > end) {
                isfound = true
            }
            if (log_array.p_offset.pointers.includes(check_offset + o)) {
                if (is_first_line) {
                    console.log(`%cStruct Size: %c ${o} %c| Init: %c ${o}`, 'color:blue;', 'color:red;', 'color:blue;', 'color:red;')
                }
                temp_array__[temp_array_index].console += `<a class="M">Struct Size: </a><a class="O"> ${o} </a><a class="M"> | Init: </a><a class="O"> ${o}</a><br><br>`

                isfound = true
            }
        }
        outer_i = o

        if (temp_array__[temp_array_index].struct_amount === 0) {

            for (let i = 0; i < outer_i; i += 4) {
                temp_array__[temp_array_index].struct_check.push({
                    a: [],
                    def: [],
                    n: i,
                    o: []
                })
            }
            temp_array__[temp_array_index].struct_amount = [outer_i]
        }

        if (temp_array__[temp_array_index].struct_amount.includes(outer_i)) {} else {
            temp_array__[temp_array_index].struct_amount.push(outer_i)
        }

        let _3_array = []

        for (ii = 0,
        i = 0; i < outer_i; i += 4,
        ii++) {
            offset_act = (offset + i)
            if (u32(offset_act) === 0) {
                _3_array.push(u32)
                _3_array.push(i)
            } else if (u32(offset_act) < 135883680) {
                _3_array.push(u32)
                _3_array.push(i)
            } else if (u32(offset_act) === 16777216) {
                _3_array.push(u8)
                _3_array.push(i)

            } else if (f32(offset_act) < 10000 && f32(offset_act) > -10000 && !f32(offset_act).toString().includes('e')) {
                _3_array.push(f32)
                _3_array.push(i)

            } else {
                _3_array.push(u8)
                _3_array.push(i)

            }

        }

        for (let i = 0, ii = 0; ii < temp_array__[temp_array_index].struct_check.length && _3_array[i + 1] !== undefined; i += 2,
        ii++) {

            _Tx(temp_array__[temp_array_index].struct_check[ii], _3_array[i], _3_array[i + 1], offset, 1)
        }
        return outer_i

    }

    function check_val(o) {
        let html = ''
        let array_temp = [{
            name: log_array.p_texture,
            s: "P_T"
        }, {
            name: log_array.p_animation,
            s: "P_A"
        }, {
            name: log_array.p_sound,
            s: "P_S"
        }, {
            name: log_array.order,
            s: "Or"
        }, {
            name: log_array.model,
            s: "Mo"
        }, {
            name: log_array.model_anim_1,
            s: "Ma1"
        }, {
            name: log_array.model_anim_2,
            s: "Ma2"
        }, {
            name: log_array.unordered,
            s: "Un"
        }, {
            name: log_array.p_model,
            s: "P_M"
        }, {
            name: log_array.p_offset,
            s: "P_O"
        }, ]

        for (let i = 0; i < array_temp.length; i++) {
            if (array_temp[i].name) {
                check_check(array_temp[i])
            }

        }

        function check_check(a) {
            for (let ii = 0; i < array_temp.length; ii++) {
                if (array_temp[ii].name) {
                    if (array_temp[i].name < array_temp[ii].name) {
                        html = array_temp[i].s
                    }
                }
            }
        }

        return html
    }

}

function generate_temp_array() {
    return {
        totalnotfound: {
            TEX0: {
                min: 0,
                max: 0,
            },
            MDL0: {
                min: 0,
                max: 0,
            },
            SND0: {
                min: 0,
                max: 0,
            },
            ANIM: {
                min: 0,
                max: 0,
            },
            OFF0: {
                min: 0,
                max: 0,
            },
        },
        subarrays: [],
        recursive: [],
        console: '',
        lost_offsets: '',
        files: [],
        switch: {
            type: null,
            offset_val: null,
            array: [],
            no_offset_array: [],
            no_val_array: [],
        },
        struct_check: [],
        offset_check: {
            model: [],
            texture_anim: [],
            texture: [],
            sound: [],
            offset: [],
            multilink: [],
        },
        struct_amount: 0,
        settings: {
            show_types: true,
            console_limit: 1000000,
        },
        line: 0,
        lines_clicked: 0,
        name: 0,
    }
}

globalThis.temp_array__ = [generate_temp_array()]

function ö(o, f, t) {
    if (o) {
        ß('p_offset', o, offset_mid)
        f(o + offset_mid)
    }

}
function ä(a, o, f) {
    if (o) {
        ß('p_offset', o, offset_mid)
        if (log_array.ä_array.includes(o + offset_mid)) {
            if (a.includes(o + offset_mid)) {} else {
                let index = log_array.ä_array.indexOf(o + offset_mid)
                temp_array__[0].console += `duplicate found: ${f.name} -> ${log_array.ä_array[index + 1]}<br>`
                console.log(`duplicate found: ${f.name} -> ${log_array.ä_array[index + 1]}`)
                console.groupCollapsed('stack')
                console.log((new Error).stack)
                console.groupEnd()
            }
            //nothing
        } else {
            log_array.ä_array.push(o + offset_mid, f.name)
            a.push(o + offset_mid)
            f(o + offset_mid)
        }
    }
}

function html_to_import(inputHtml) {
    // Parse the input HTML string into a DOM object
    const parser = new DOMParser();
    doc = parser.parseFromString(inputHtml, 'text/html');

    let jsFunction = ''

    const h2_amount = doc.getElementsByTagName('h2');
    const table_amount = doc.getElementsByTagName('table');
    for (let i = 0; i < h2_amount.length; i++) {
        h2Element = h2_amount[i]
        const table = table_amount[i]

        // Find the <h2> element to extract the function name
        // const h2Element = doc.querySelector('h2');
        if (!h2Element) {
            return "Failed to find the function name";
        }

        const functionName = h2Element.id;

        // Find all the <tr> elements within the <table> for data extraction
        // const table = doc.querySelector('table');
        const rows = table.querySelectorAll('tr');

        // Initialize the JavaScript function string
        jsFunction += "function im_" + functionName + "(o, ";
        let is_i = 0
        if (table.children[1].children[0].children[0].innerText.includes('per') || i === 0) {
            is_i = 'i'
            jsFunction += `i ,`
        }
        let am_bytes = `\n// ${table.children[1].children[0].children[0].innerText.split('byte')[0].trim()} bytes;\n`
        jsFunction += `x) {\n`

        // Initialize an empty object for storing the data
        jsFunction += 'x.push({\n';

        let offsets = ''

        if (is_i === "i") {
            jsFunction += `    id: gen_id(),\n`
        }

        // Loop through the table rows to extract data
        rows.forEach( (row, index) => {
            if (index === 0) {
                // Skip the header row
                return;
            }
            let multilink_amount = 0

            const cells = row.querySelectorAll('td');
            if (cells.length === 3) {
                const offset = cells[0].textContent;
                let type;
                switch (cells[1].textContent) {
                case "u32":
                case "u16":
                case "u8":
                    type = cells[1].textContent;
                    break;
                case "float":
                    type = "f32"
                    break;
                default:
                    type = "// unknown"
                }

                // const type = cells[1].textContent;
                let description
                let ishook = false

                if (cells[2].children.length) {
                    if (cells[2].children.length === 1 && cells[2].children[0].tagName === "A") {
                        let href = cells[2].children[0].href.split("#")[1]
                        doc.getElementById(href)
                        let t_h2_amount = doc.getElementsByTagName('h2');
                        let ttable_amount = doc.getElementsByTagName('table');
                        for (let ii = 1; ii < h2_amount.length; ii++) {
                            t_h2_amount = h2_amount[ii]
                            const table = ttable_amount[ii]

                            if (t_h2_amount.id === href) {
                                if (table.children[1].children[0].children[0].innerText.includes('per')) {
                                    description = 'multi offset'
                                    multilink_amount = parseInt(table.children[1].children[0].children[0].innerText.split("b")[0].trim())
                                } else {
                                    description = 'offset'
                                }
                                ii += 1000

                            } else {
                                switch (cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()) {
                                case "unknown":
                                case "mysterious":
                                    description = 'multi offset'
                                    ishook = cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()
                                    break
                                default:
                                    description = 'unordered'
                                }

                            }

                        }

                        // description = 'offset'
                    } else {
                        description = 'unknown'
                    }
                } else {
                    if (cells[2].innerText.trim() === "0") {
                        description = '0'
                    } else {
                        description = 'normal'
                    }
                }

                let is_case = false

                if (cells[2].innerHTML.includes("based on type")) {
                    let cases = cells[2].innerHTML.split('\n')
                    is_case = ""
                    for (let i = 0; i < cases.length; i++) {
                        if (cases[i].includes("href")) {
                            let casescomma = cases[i].split(`">`)[1].split("=")[0].trim().split(",")
                            for (let ii = 0; ii < casescomma.length; ii++) {
                                is_case += `    case ${casescomma[ii].trim()}:\n`
                            }
                            let tableid = cases[i].split("#")[1].split(`">`)[0].trim()
                            let is_un = is_unordered(cases[i])
                            // let is_un = "unknown"
                            if (is_un === 'y') {
                                is_case += `        u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;

                            } else {
                                let is_ordered = getisordered(tableid)

                                is_case += `x[${is_i}].section_` + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
                            }
                            is_case += "    break;\n"

                        }

                    }
                    if (is_case === "") {
                        is_case = false
                    } else {
                        let typeoffset = cells[2].innerHTML.split("based on type [")[1].split("<br>")[0].split("]")[0].trim()
                        typeoffset = typeoffset.replace(/[^0-9]*/, '')

                        let tabletds = table.getElementsByTagName("TD");
                        let bintype = "//"

                        for (let i = 0; i < tabletds.length; i += 3) {
                            if (tabletds[i].innerText.trim() === typeoffset) {
                                bintype = tabletds[i + 1].innerText
                                i += 10000
                            }
                        }
                        is_case = "switch(" + bintype + "(o + " + typeoffset + ")){\n" + is_case + "}"
                    }

                }

                if (description === "normal") {

                    if (cells[2].innerHTML.includes("string")) {
                        let propertyName = "section_" + offset;

                        jsFunction += `    ${propertyName}: [im_string(u32(o + ${offset}), 0, false)],\n`;

                    } else if (cells[2].innerHTML.includes("amount")) {
                        let propertyName = type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//amount?\n`;
                    } else if (cells[2].innerHTML.includes("patch")) {
                        let propertyName = type + "_" + offset;
                        getpatch(cells[2].innerHTML, offset, propertyName, type)

                    } else {

                        // Generate the property name for the data
                        let propertyName = type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `    ${propertyName}: ${type}(o + ${offset}),\n`;
                    }

                } else if (description === 'offset') {
                    let tableid = cells[2].children[0].href.split("#")[1]

                    jsFunction += "    section_" + offset + ": [],\n";

                    if (is_case !== false) {
                        offsets += is_case
                    } else {
                        offsets += `u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
                    }

                } else if (description === 'unordered') {
                    let tableid = cells[2].children[0].href.split("#")[1].trim()
                    let is_ordered = getisordered(tableid)

                    jsFunction += `    ` + is_ordered + `ordered_` + tableid + "_" + offset + `: 0,\n`;

                    offsets += `x[${is_i}].` + is_ordered + `ordered_` + tableid + "_" + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
                } else if (description === 'multi offset') {

                    switch (ishook) {
                    case "unknown":
                        multilink_amount = "04"
                        break
                    case "mysterious":
                        multilink_amount = "64"
                        break
                    }

                    console.log('/?')
                    let tableid = cells[2].children[0].href.split("#")[1]

                    jsFunction += `    section_` + offset + `: [],\n`;

                    let is_ii = 'ii'
                    is_i === 0 ? is_ii = 'i' : 0;

                    if (is_case !== false) {
                        offsets += is_case
                    }

                    let offsetamount = "___$$$___"
                    if (cells[2].innerHTML.includes("based on amount")) {
                        offsetamount = cells[2].innerHTML.split("based on amount [")[1].split("]")[0].trim()
                    }

                    offsets += `
for (let ${is_ii} = 0; ${is_ii} < u32(o + ${offsetamount}); ${is_ii}++) {
    im_` + tableid + `(u32(o + ${offset}) + (${is_ii} * ${multilink_amount}) + g.m, ${is_ii}, x[${is_i}].section_` + offset + `);
}\n`;
                } else if (description === '0') {} else {

                    if (cells[2].innerHTML.includes("based on type")) {
                        offsets += is_case
                        jsFunction += `    section_` + offset + `: [],\n`;
                    } else if (cells[2].innerHTML.includes("href")) {
                        let tableid = cells[2].innerHTML.split("href")[1].split("#")[1].split(`"`)[0].trim()
                        jsFunction += `    section_` + offset + `: [],\n`;
                        offsets += `u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; // offset? \n`;
                    } else if (cells[2].innerHTML.includes("amount")) {
                        let propertyName = type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//amount?\n`;

                    } else {
                        let propertyName = type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//check this\n`;
                    }
                }
            }

        }
        );

        if (i === 0) {
            offsets += `return x[${is_i}].id`
        }

        // return x[0].id

        // Close the data object and the function
        jsFunction += '});\n';
        if (offsets === '') {
            if (is_i === 0) {
                jsFunction += am_bytes + `\n}\n`
            } else {
                jsFunction += `\n}\n`
            }
        } else {
            if (is_i === 0 || i === 0) {
                jsFunction += `\n ${offsets} ${am_bytes}\n}\n`
            } else {
                jsFunction += `\n ${offsets}\n}\n`
            }

        }

    }
    console.log(jsFunction)

    function is_unordered(cases) {
        let href = cases.split("href")[1].split("#")[1].split(`"`)[0]
        doc.getElementById(href)
        let t_h2_amount = doc.getElementsByTagName('h2');
        let ttable_amount = doc.getElementsByTagName('table');
        let temp = ''
        for (let ii = 1; ii < h2_amount.length; ii++) {
            t_h2_amount = h2_amount[ii]
            const table = ttable_amount[ii]

            if (t_h2_amount.id === href) {
                if (table.children[1].children[0].children[0].innerText.includes('per')) {
                    temp = 'y'
                    multilink_amount = parseInt(table.children[1].children[0].children[0].innerText.split("b")[0].trim())
                } else {
                    temp = 'y'
                }
                ii += 1000

            } else {
                temp = 'unordered'
            }

        }

        // description = 'offset'
        return temp
    }
    function getisordered(html) {
        let a = 'un'
        switch (html) {
        case "model_animation_1":
        case "model_animation_2":
        case "models":
            a = ''
            break;
        }
        return a
    }
    function getpatch(cells, offset, propertyName, type) {
        if (cells.toLowerCase().includes("texture")) {
            jsFunction += `    texture_` + offset + `: im_patch(g.texture_patch_ref, o + ${offset}),\n`;
        } else if (cells.toLowerCase().includes("animation")) {
            jsFunction += `    animation_` + offset + `: im_patch(g.animation_patch_ref, o + ${offset}),\n`;
        } else if (cells.toLowerCase().includes("sound")) {
            jsFunction += `    sound_` + offset + `: im_patch(g.sound_patch_ref, o + ${offset}),\n`;
        } else if (cells.toLowerCase().includes("model")) {
            jsFunction += `    model_` + offset + `: im_patch(g.model_ref, o + ${offset}),\n`;
        } else {
            jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//patch?\n`;
        }
    }

}

function html_to_export(inputHtml) {
    let html = inputHtml.split("function")
    // console.log(html)
    let backtostring = ''
    html.forEach( (e) => {
        if (e) {
            console.log(e)
            let function_name = "ex" + e.split("(")[0].trim().split('im')[1]
            aaa = e.replaceAll("\n", '')
            let para_i = ' e,'
            e.split(")")[0].split("(o, ")[1] === "x" ? para_i = "" : 0;
            let isend = ''
            if (para_i !== ' e,') {
                isend = "    let e = o + " + e.split("//")[1].split("bytes")[0].trim() + "\n"
            }
            let xtable
            if (e.split('x.push')[1].includes('({})')) {
                xtable = ['//nothing']
            } else {
                xtable = e.split('x.push')[1].split('});')[0].split('({\n')[1].trim().split('\n')

            }
            let xhtml = ''
            let xstring = ''
            let xpatch = ''

            let xdebug = `\n    g.debug ? ex_debug(o, "`
            for (let i = 0; i < 4; i++) {
                let a = Math.floor(Math.random() * 255)
                while (a < 48 || a > 122) {
                    a = Math.floor(Math.random() * 255)
                }
                xdebug += String.fromCharCode(a)
            }
            xdebug += `") : 0;\n`
            let xlinks = ''
            let xfor = ''
            let xml = ''

            for (let i = 0; i < xtable.length; i++) {
                let tablesplit = xtable[i].split(":")
                if (tablesplit[0].includes("//")) {//Skip
                } else if (tablesplit[1].includes("o +")) {

                    if (tablesplit[1].includes("im_patch")) {
                        console.log(tablesplit)
                        let xpatchoffset = (tablesplit[1].split(", o + ")[1].split(')')[0].trim())
                        let xpatchtype = (tablesplit[1].split("im_patch(g.")[1].split(',')[0].trim())
                        let xpatchname = (tablesplit[0].trim())

                        if (xpatchtype === "texture_patch_ref") {
                            xpatchtype = "g.texture_patch_array"
                        } else if (xpatchtype === "animation_patch_ref") {
                            xpatchtype = "g.animation_patch_array"
                        } else if (xpatchtype === "sound_patch_ref") {
                            xpatchtype = "g.sound_patch_array"
                        } else if (xpatchtype === "model_patch_ref") {
                            xpatchtype = "g.model_patch_array"
                        } else {
                            xpatchtype = '// xpatchtype unknown \n'
                        }

                        xpatch += '    ex_patch(o + ' + xpatchoffset + ", " + xpatchtype + ", x." + xpatchname + ");\n"

                        //patch
                    } else if (tablesplit[1].includes("im_string")) {
                        //string offset
                        let xstingoffset = (tablesplit[1].split("(o + ")[1].split(')')[0])
                        let xstingname = (tablesplit[0].trim())
                        xstring += "    e = ex_string(o + " + xstingoffset + ", e, x." + xstingname + ")\n"

                    } else {

                        let xobj;
                        let offset = tablesplit[1].split("+")[1].split(")")[0].trim()
                        let xname = tablesplit[0].trim()
                        if (tablesplit[1].includes("u32")) {
                            xobj = "u32"
                        } else if (tablesplit[1].includes("u16")) {
                            xobj = "u16"
                        } else if (tablesplit[1].includes("u8")) {
                            xobj = "u8"
                        } else if (tablesplit[1].includes("f32")) {
                            xobj = "f32"
                        } else {
                            xobj = 'xobj un'
                        }
                        tablesplit[0].split("u")
                        xhtml += `    s` + xobj + `(o + ${offset}, x.${xname})\n`
                    }
                }
                // offsets

            }
            next = e.split("x.push")[1].split("});")[1].trim().split('\n')

            for (let i = 0; i < next.length; i++) {
                if (next[i].includes("?") && next[i].includes(":")) {
                    let functionname = next[i].split('im')[1].split('(')[0].trim()
                    let offset = next[i].split('u32(o + ')[1].split(')')[0].trim()
                    let sectiontype = next[i].split(']')[1].split(')')[0].trim()

                    // offset
                    // e = ex_s_offset(o + 56,e,dyn_frame_section_56,x.section_56,'up')
                    xlinks += '\n    e = ex_s_offset(o + ' + offset + ", e, ex" + functionname + ", x" + sectiontype + `,'up')`
                }
            }
            xlinks.length ? xlinks += "\n" : 0;

            if (e.split("x.push")[1].split("});")[1].trim().includes('for')) {
                xfor = '\n'
                xis = e.split("x.push")[1].split("});")[1].trim().split('for')
                for (let i = 0; i < xis.length; i++) {
                    if (xis[i].includes("let")) {

                        xis1 = xis[i].split('\n')
                        let name = xis1[1].split("im")[1].split("(u")[0].trim()
                        // functionname
                        let offsetx = xis1[1].split('u32(o +')[1].split(")")[0].trim()
                        // offset
                        let amount = xis1[1].split('*')[1].split(')')[0].trim()
                        // amount
                        let amount_position = xis1[0].split('\n')[0].split("u32(o + ")[1].split(")")[0].trim()
                        // amount offsets
                        // position
                        let x_ = xis1[1].split(');')[0].split("]")[1].trim()
                        // x

                        xfor += '    if(x' + x_ + ".length){\n"
                        xfor += "        su32(o + " + amount_position + ", x" + x_ + ".length)\n"
                        xfor += "        su32(o + " + offsetx + ", e - g.m)\n"
                        xfor += "        g.oa.push(o + " + offsetx + ")\n"
                        xfor += "        let temp_offset = e \n"
                        xfor += "        e += divisible(x" + x_ + ".length * " + amount + ", 16) \n"
                        xfor += "        for (let i = 0; i < x" + x_ + ".length; i++) { \n"
                        xfor += "            e = ex" + name + "(temp_offset + (i * " + amount + "), e, x" + x_ + "[i])\n"
                        xfor += "        };\n};\n\n"

                    }
                }

            }

            let xswitchhtml = ''

            let xnextswitch = e.split("x.push")[1].split("});")[1].trim()
            let checkswitch = xnextswitch.split('switch')

            for (let switchi = 1; switchi < checkswitch.length; switchi++) {
                let checkswitch_2 = checkswitch[switchi].split('}')[0]
                xswitchhtml += checkswitch_2
                let breakcheck = checkswitch_2.split('break')
                let switchtype = breakcheck[0].split('{')[0].trim()

                for (let breaki = 1; breaki < breakcheck.length; breaki++) {

                    let casecheck = breakcheck[breaki].split('case')

                    for (let casei = 1; casei < casecheck.length; casei++) {
                        casecheck[casei].split(':')
                    }

                }

            }

            xnext = e.split("x.push")[1].split("});")[1].trim().split("\n")

            for (let i = 0; i < xnext.length; i++) {
                if (xnext[i].includes('in_ml')) {
                    let xname = xnext[i].split('].')[1].split('=')[0].trim()
                    let xarray = xnext[i].split('array')[0].split('g.')[1].split(",")[0].trim()
                    let xfunction = xnext[i].split('array')[1].split('g.')[0].split(",")[1].split('im')[1].trim()
                    let xref = xnext[i].split('array')[1].split('g.unordered_ref')[1].split(")")[0].trim()
                    let xoffset = xnext[i].split('u32(o +')[1].split(')')[0].trim()
                    xml += '    e = ex_ml(x.' + xname + ', g.' + xarray + 'array, ex' + xfunction + ', g.unordered_ref' + xref + ', o + ' + xoffset + ', e);\n'
                }

            }

            backtostring += `
function ${function_name}(o,${para_i} x){
${isend}${xhtml}${xstring}${xpatch}${xlinks}${xfor}${xml}${xswitchhtml}${xdebug}
    return e

}
`
        }
    }
    )
    console.log(backtostring)
}

function html_to_eximport(inputHtml) {
    // Parse the input HTML string into a DOM object
    const parser = new DOMParser();
    doc = parser.parseFromString(inputHtml, 'text/html');

    let jsFunction = ''

    const h2_amount = doc.getElementsByTagName('h2');
    const table_amount = doc.getElementsByTagName('table');
    for (let i = 0; i < h2_amount.length; i++) {
        h2Element = h2_amount[i]
        const table = table_amount[i]

        // Find the <h2> element to extract the function name
        // const h2Element = doc.querySelector('h2');
        if (!h2Element) {
            return "Failed to find the function name";
        }

        const functionName = h2Element.id;

        // Find all the <tr> elements within the <table> for data extraction
        // const table = doc.querySelector('table');
        const rows = table.querySelectorAll('tr');

        // Initialize the JavaScript function string
        jsFunction += "function ex_" + functionName + "(o, ";
        let is_i = 0
        if (table.children[1].children[0].children[0].innerText.includes('per')) {
            is_i = 'i'
            jsFunction += `e ,`
        }
        jsFunction += `x) {\n`

        if (is_i === 0) {
            jsFunction += `    let e = o + ${table.children[1].children[0].children[0].innerText.split('byte')[0].trim()}\n`
        }

        // Initialize an empty object for storing the data

        let offsets = ''

        // Loop through the table rows to extract data
        rows.forEach( (row, index) => {
            if (index === 0) {
                // Skip the header row
                return;
            }
            let multilink_amount = 0

            const cells = row.querySelectorAll('td');
            if (cells.length === 3) {
                const offset = cells[0].textContent;
                let type;
                switch (cells[1].textContent) {
                case "u32":
                case "u16":
                case "u8":
                    type = cells[1].textContent;
                    break;
                case "float":
                    type = "f32"
                    break;
                default:
                    type = "// unknown"
                }

                // const type = cells[1].textContent;
                let description
                let ishook = false

                if (cells[2].children.length) {
                    if (cells[2].children.length === 1 && cells[2].children[0].tagName === "A") {
                        let href = cells[2].children[0].href.split("#")[1]
                        doc.getElementById(href)
                        let t_h2_amount = doc.getElementsByTagName('h2');
                        let ttable_amount = doc.getElementsByTagName('table');
                        for (let ii = 1; ii < h2_amount.length; ii++) {
                            t_h2_amount = h2_amount[ii]
                            const table = ttable_amount[ii]

                            if (t_h2_amount.id === href) {
                                if (table.children[1].children[0].children[0].innerText.includes('per')) {
                                    description = 'multi offset'
                                    multilink_amount = parseInt(table.children[1].children[0].children[0].innerText.split("b")[0].trim())
                                } else {
                                    description = 'offset'
                                }
                                ii += 1000

                            } else {
                                switch (cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()) {
                                case "unknown":
                                case "mysterious":
                                    description = 'multi offset'
                                    ishook = cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()
                                    break
                                default:
                                    description = 'unordered'
                                }

                            }

                        }

                        // description = 'offset'
                    } else {
                        description = 'unknown'
                    }
                } else {
                    if (cells[2].innerText.trim() === "0") {
                        description = '0'
                    } else {
                        description = 'normal'
                    }
                }

                let is_case = false

                if (cells[2].innerHTML.includes("based on type")) {
                    let cases = cells[2].innerHTML.split('\n')
                    is_case = ""
                    for (let i = 0; i < cases.length; i++) {
                        if (cases[i].includes("href")) {
                            let casescomma = cases[i].split(`">`)[1].split("=")[0].trim().split(",")
                            for (let ii = 0; ii < casescomma.length; ii++) {
                                is_case += `    case ${casescomma[ii].trim()}:\n`
                            }
                            let tableid = cases[i].split("#")[1].split(`">`)[0].trim()
                            let is_un = is_unordered(cases[i])
                            // let is_un = "unknown"
                            if (is_un === 'y') {
                                is_case += `e = ex_s_offset(o + ${offset}, e, ex_` + tableid + `,x.section_` + offset + `, 'down');\n`

                                // is_case += `        u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;

                            } else {
                                let is_ordered = getisordered(tableid)
                                is_case += `    e = ex_ml(x.section_` + offset + `,g.` + tableid + `_array ,ex_` + tableid + `,g.` + is_ordered + `ordered_ref.` + tableid + `, o + ${offset}, e, 'down');\n`

                                // is_case += `x[${is_i}].section_` + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
                            }
                            is_case += "    break;\n"

                        }

                    }
                    if (is_case === "") {
                        is_case = false
                    } else {
                        let typeoffset = cells[2].innerHTML.split("based on type [")[1].split("<br>")[0].split("]")[0].trim()
                        typeoffset = typeoffset.replace(/[^0-9]*/, '')

                        let tabletds = table.getElementsByTagName("TD");
                        let bintype = "//"

                        for (let i = 0; i < tabletds.length; i += 3) {
                            if (tabletds[i].innerText.trim() === typeoffset) {
                                bintype = tabletds[i + 1].innerText
                                i += 10000
                            }
                        }
                        is_case = "switch(x." + bintype + "_" + typeoffset + "){\n" + is_case + "}"
                    }

                }

                if (description === "normal") {

                    if (cells[2].innerHTML.includes("string")) {
                        let propertyName = "section_" + offset;
                        //     e = ex_string(o + 36, e, x.section_36)

                        offsets += `    e = ex_string(o + ${offset}, e, x.` + propertyName + `)\n`

                    } else if (cells[2].innerHTML.includes("amount")) {
                        let propertyName = "x." + type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `//amount?   s` + type + `(o +` + offset + `, ${propertyName})\n`;
                    } else if (cells[2].innerHTML.includes("patch")) {
                        let propertyName = type + "_" + offset;
                        getpatch(cells[2].innerHTML, offset, propertyName, type)

                    } else {

                        // Generate the property name for the data
                        let propertyName = "x." + type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `   s` + type + `(o +` + offset + `, ${propertyName})\n`;

                        // jsFunction += `    ${propertyName}: ${type}(o + ${offset}),\n`;
                    }

                } else if (description === 'offset') {
                    let tableid = cells[2].children[0].href.split("#")[1]

                    // jsFunction += "    section_" + offset + ": [],\n";

                    if (is_case !== false) {
                        offsets += is_case
                    } else {
                        offsets += `e = ex_s_offset(o + ${offset}, e, ex_` + tableid + `,x.section_` + offset + `, 'down');\n`
                    }

                } else if (description === 'unordered') {
                    let tableid = cells[2].children[0].href.split("#")[1].trim()
                    let is_ordered = getisordered(tableid)

                    offsets += `    e = ex_ml(x.` + is_ordered + `ordered_` + tableid + "_" + offset + `,g.` + tableid + `_array ,ex_` + tableid + `,g.` + is_ordered + `ordered_ref.` + tableid + `, o + ${offset}, e, 'down');\n`

                } else if (description === 'multi offset') {

                    switch (ishook) {
                    case "unknown":
                        multilink_amount = "04"
                        break
                    case "mysterious":
                        multilink_amount = "64"
                        break
                    }

                    let tableid = cells[2].children[0].href.split("#")[1]

                    let is_ii = 'ii'
                    is_i === 0 ? is_ii = 'i' : 0;

                    if (is_case !== false) {
                        offsets += is_case
                    }
                    let offsetamount = "___$$$___"
                    if (cells[2].innerHTML.includes("based on amount")) {
                        offsetamount = cells[2].innerHTML.split("based on amount [")[1].split("]")[0].trim()
                    }

                    let xsec = "x.section_" + offset

                    offsets += '    if(' + xsec + ".length){\n"
                    offsets += "        su32(o + " + offsetamount + "," + xsec + ".length)\n"
                    offsets += "        su32(o + " + offset + ", e - g.m)\n"
                    offsets += "        g.oa.push(o + " + offset + ")\n"
                    offsets += "        let temp_offset = e \n"
                    offsets += "        e += divisible(" + xsec + ".length * " + multilink_amount + ", 16) \n"
                    offsets += "        for (let i = 0; i < " + xsec + ".length; i++) { \n"
                    offsets += "            e = ex_" + tableid + "(temp_offset + (i * " + multilink_amount + "), e, " + xsec + "[i])\n"
                    offsets += "        };\n};\n\n"

                } else if (description === '0') {} else {

                    if (cells[2].innerHTML.includes("based on type")) {
                        offsets += is_case
                    } else if (cells[2].innerHTML.includes("href")) {
                        let tableid = cells[2].innerHTML.split("href")[1].split("#")[1].split(`"`)[0].trim()
                        offsets += `e = ex_s_offset(o + ${offset}, e, ex_` + tableid + `,x.section_` + offset + `, 'down');\n`
                    } else if (cells[2].innerHTML.includes("amount")) {
                        let propertyName = "x." + type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `   s` + type + `(o +` + offset + `, ${propertyName}) //amount?\n`;

                    } else {
                        let propertyName = "x." + type + "_" + offset;
                        jsFunction += `   s` + type + `(o +` + offset + `, ${propertyName}) //?\n`;

                        // Add the data extraction code to the function string
                    }
                }
            }

        }
        );

        let xdebug = `\n    g.debug ? ex_debug(o, "`
        for (let i = 0; i < 4; i++) {
            let a = Math.floor(Math.random() * 255)
            while (a < 48 || a > 122 || a === 92 || a === 96) {
                a = Math.floor(Math.random() * 255)
            }
            xdebug += String.fromCharCode(a)
        }
        xdebug += `") : 0;\n`

        offsets += xdebug + `    return e`

        // Close the data object and the function
        jsFunction += '\n';
        if (offsets === '') {
            if (is_i === 0) {
                jsFunction += `\n}\n`
            } else {
                jsFunction += `\n}\n`
            }
        } else {
            if (is_i === 0 || i === 0) {
                jsFunction += `\n ${offsets} \n}\n`
            } else {
                jsFunction += `\n ${offsets}\n}\n`
            }

        }

    }
    console.log(jsFunction)

    function is_unordered(cases) {
        let href = cases.split("href")[1].split("#")[1].split(`"`)[0]
        doc.getElementById(href)
        let t_h2_amount = doc.getElementsByTagName('h2');
        let ttable_amount = doc.getElementsByTagName('table');
        let temp = ''
        for (let ii = 1; ii < h2_amount.length; ii++) {
            t_h2_amount = h2_amount[ii]
            const table = ttable_amount[ii]

            if (t_h2_amount.id === href) {
                if (table.children[1].children[0].children[0].innerText.includes('per')) {
                    temp = 'y'
                    multilink_amount = parseInt(table.children[1].children[0].children[0].innerText.split("b")[0].trim())
                } else {
                    temp = 'y'
                }
                ii += 1000

            } else {
                temp = 'unordered'
            }

        }

        // description = 'offset'
        return temp
    }
    function getisordered(html) {
        let a = 'un'
        switch (html) {
        case "model_animation_1":
        case "model_animation_2":
        case "models":
            a = ''
            break;
        }
        return a
    }
    function getpatch(cells, offset, propertyName, type) {
        if (cells.toLowerCase().includes("texture")) {
            jsFunction += `    ex_patch(o + ${offset},g.texture_patch_array, x.texture_` + offset + `)\n`;
        } else if (cells.toLowerCase().includes("animation")) {
            jsFunction += `    ex_patch(o + ${offset},g.animation_patch_array, x.animation_` + offset + `)\n`;
        } else if (cells.toLowerCase().includes("sound")) {
            jsFunction += `    ex_patch(o + ${offset},g.sound_patch_array, x.sound_` + offset + `)\n`;
        } else if (cells.toLowerCase().includes("model")) {
            jsFunction += `    ex_patch(o + ${offset},g.model_array, x.model_` + offset + `)\n`;
        } else {
            jsFunction += `    //patch? ${propertyName} / ${type} / ${offset})\n`;
        }
    }

}
function ß(type, o, n) {
    if (Number(check_offset.value)) {
        if ([Number(check_offset.value)].includes(o + n)) {
            var caller_name = (new Error).stack
            console.log(type, o, n, caller_name)
        }
    }
    if (type === "p_model") {
        if (old_log_array.p_model.array.includes((o + n) - offset_mid)) {
            let model_index = old_log_array.p_model.array.indexOf((o + n) - offset_mid)
            if (model_index === -1) {
                return
            }
            if (old_log_array.p_model.array_type[model_index] !== 0) {} else {
                switch (g.game) {
                case 'bigfoot_collision_course':
                    ä(bcc_model, u32(o + n), get_bcc_model)
                    break
                case 'snoopy_vs_the_red_baron':
                    ä(svtrb_model, u32(o + n), get_svtrb_model)
                    break
                case 'pac_man_world_rally':
                    ä(pmwr_ps2demo_model, u32(o + n), get_pmwr_ps2demo_model)
                    break
                }


                // ä(hwvx_model, u32(o + n), get_hwvx_model)
                // ä(pmwr_xdx_model, u32(o + n), get_pmwr_xdx_model)
            }
        } else {
            if (o - (offset_mid + u32(o + n)) === false) {
                return
            }
        }

    }
    if (log_array.print === false) {
        return
    }
    let new_o = (o + n) - offset_mid
    let array
    if (type === 'p_offset') {
        array = log_array[type].pointers
    } else {
        array = log_array[type].array
    }
    if (array.includes(new_o)) {
        let index = array.indexOf(new_o)
        array[index] = array[array.length - 1];
        array.pop();
    }

}

function print_logarray(log) {
    if (log.print === false) {
        return
    }
    log_array.order = offset_mid
    let html = ''
    let new_a, old_a;
    let diff

    new_a = log_array.p_offset.pointers.length
    old_a = old_log_array.p_offset.pointers.length

    if (new_a) {
        html += `OFF0: ${old_a - new_a}/${old_a} | `
        diff = true
    }
    if (old_a) {
        temp_array__[0].totalnotfound.OFF0.min += old_a - new_a
        temp_array__[0].totalnotfound.OFF0.max += old_a
    }

    new_a = log_array.p_sound.array.length
    old_a = old_log_array.p_sound.array.length

    if (new_a) {
        html += `SND0: ${old_a - new_a}/${old_a} | `
        diff = true
    }
    if (old_a) {
        temp_array__[0].totalnotfound.SND0.min += old_a - new_a
        temp_array__[0].totalnotfound.SND0.max += old_a
    }

    new_a = log_array.p_texture.array.length
    old_a = old_log_array.p_texture.array.length
    if (log_array.p_texture.array.length) {
        html += `TEX0: ${old_a - new_a}/${old_a} | `
        diff = true
    }
    if (old_a) {
        temp_array__[0].totalnotfound.TEX0.min += old_a - new_a
        temp_array__[0].totalnotfound.TEX0.max += old_a
    }

    new_a = log_array.p_animation.array.length
    old_a = old_log_array.p_animation.array.length
    if (log_array.p_animation.array.length) {
        html += `ANIM: ${old_a - new_a}/${old_a} | `
        diff = true
    }
    if (old_a) {
        temp_array__[0].totalnotfound.ANIM.min += old_a - new_a
        temp_array__[0].totalnotfound.ANIM.max += old_a
    }
    new_a = log_array.p_model.array.length
    old_a = old_log_array.p_model.array.length
    if (log_array.p_model.array.length) {
        html += `MDL0: ${old_a - new_a}/${old_a} | `
        diff = true
    }
    if (old_a) {
        temp_array__[0].totalnotfound.MDL0.min += old_a - new_a
        temp_array__[0].totalnotfound.MDL0.max += old_a

    }
    if (html === '') {
        html = '✔'
    }

    if (diff) {
        console.log(`REST: ` + html, log_array)
        logsearch()
    } else {
        console.log(`REST: ` + html)
    }
}
function logsearch() {
    let html = ''
    let lowest_search = 0
    // let lowest_search = 0
    html += get_log(log_array.p_offset.pointers, 'offsets')
    html += get_log(log_array.p_model.array, 'models')
    html += get_log(log_array.p_texture.array, 'tex0')
    temp_array__[0].lost_offsets += html.replaceAll('\n', "<br>")
    function get_log(rest_of_them, s) {
        let html = s + '\n'
        for (let array_entry of rest_of_them) {
            let value_notfount = true
            let i
            if (array_entry) {
                i = array_entry - 1
            } else {
                i = 0
            }
            let true_i = 0
            while (i) {
                if (old_log_array.p_offset.pointers.includes(i)) {
                    value_notfount = false
                    true_i = i
                    i = 0
                } else {
                    i--
                }
            }
            let is_inlist = 'n'
            if (old_log_array.p_offset.pointers.includes(true_i)) {
                is_inlist = ''
            }
            if (true_i !== 0) {
                if (array_entry < lowest_search) {} else {
                    html += `ENTRY: ${array_entry} / ${array_entry + offset_mid} | PREV: ${true_i} / ${true_i + offset_mid} ${is_inlist} dif:${array_entry - true_i}\n`
                }
            }

        }
        return html
    }

    console.log(html)

}

function sü(type, type_offset, o, offset_val) {
    var caller_line = (new Error).stack.split("\n")[2].split('js:')[1].split(':')[0]
    var caller_name = (new Error).stack.split("\n")[2].split('(')[0].split('at get_')[1]?.trim()

    let temp_array_index;
    if (temp_array__[0].line === 0) {
        temp_array__[0].line = [caller_line]
        temp_array__[0].lines_clicked = [0, 0]
        temp_array__[0].name = caller_name
        temp_array_index = 0
    } else {
        if (temp_array__[0].line.includes(caller_line)) {
            temp_array_index = temp_array__[0].line.indexOf(caller_line)
        } else {
            temp_array_index = temp_array__[0].line.length
            temp_array__[0].line.push(caller_line)
            globalThis.temp_array__.push(generate_temp_array())
            temp_array__[temp_array_index].name = caller_name
            temp_array__[temp_array_index].line = [caller_line]
            temp_array__[temp_array_index].lines_clicked = [0, 0]
        }
    }

    if (temp_array__[temp_array_index].files.includes(g.file_name)) {} else {
        temp_array__[temp_array_index].files.push(g.file_name)
    }

    let is_first_line = false;

    if (temp_array__[0].line[0] === caller_line) {
        is_first_line = true;
    }

    let type_offset_val = type(o + type_offset)

    temp_array__[temp_array_index].switch.type = type
    temp_array__[temp_array_index].switch.type_offset = type_offset
    temp_array__[temp_array_index].switch.offset_val = offset_val
    if (u32(o + offset_val)) {
        //not 0
        if (log_array.p_offset.array.includes((o + offset_val) - offset_mid)) {
            if (temp_array__[temp_array_index].switch.array.includes(type_offset_val)) {} else {
                temp_array__[temp_array_index].switch.array.push(type_offset_val)
            }
        } else {}
        if (temp_array__[temp_array_index].switch.no_offset_array.includes(type_offset_val)) {} else {
            temp_array__[temp_array_index].switch.no_offset_array.push(type_offset_val)
        }
    } else {
        if (temp_array__[temp_array_index].switch.no_val_array.includes(type_offset_val)) {} else {
            temp_array__[temp_array_index].switch.no_val_array.push(type_offset_val)
        }
    }

}

function print_multilink(s) {
    let s_replace = s.replaceAll("get_", '')
    let s_split = s_replace.split('\n')
    let html = ''
    for (let s_element of s_split) {
        html += `<a href="#${s_element.split(" ")[0]}">${s_element}</a><br>\n`
    }
    console.log(html)
}
function compare_if_2_table(s) {
    let splitarray = s.split('||')
    splitarray[0] = splitarray[0].replace('if', '')
    splitarray[splitarray.length - 1] = splitarray[splitarray.length - 1].replace('\n', '')
    console.log(splitarray)

    let index_array = []
    for (let i = 0; i < temp_array__[7].subarrays.length; i++) {
        index_array.push(temp_array__[7].subarrays[i].number)
    }

    let found_diff = []

    for (let i = 0; i < splitarray.length; i++) {
        let not_0 = false
        let value = Number(splitarray[0].split('o +')[1].split(')')[0])
        let tableindex = index_array.indexOf(value)

        let temptable = temp_array__[7].subarrays[tableindex]

        for (let table_array_entry of temptable.a) {
            if (table_array_entry !== 0) {
                not_0 = true
            }
        }
        if (not_0) {
            found_diff.push(value)
        }
    }
    console.log(found_diff)
}
