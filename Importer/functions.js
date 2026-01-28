function format_button_clicked() {
    file_editor.innerHTML = ''

    file_viewer.innerHTML = `
<div style="
    height: 100%;
    width: 100%;
"> <p>format text</p>
<span style="
    width: 100%;
    height: 93%;
    display: inline-grid;
    align-content: start;
">
<a id="generate_all_ordered_tables" class="test_line_click">generate_all_ordered_tables</a>
<a id="generate_unordered_tables" class="test_line_click">generate_unordered_tables</a>
<a id="generate_ordered_tables" class="test_line_click">generate_ordered_tables</a>
<a id="generate_world_tables" class="test_line_click">generate_world_tables</a>
<a id="generate_sec_tables" class="test_line_click">generate_sec_tables</a></a>
<a id="generate_ordered_section" class="test_line_click">generate_ordered_section</a></a>
<a id="format_table" class="test_line_click">format_table</a></a>
<a id="format_switch" class="test_line_click">format_switch</a>
<a id="print_string_locations" class="test_line_click">print_string_locations</a>
<a id="linked_to_by_doc_table" class="test_line_click">linked_to_by_doc_table</a>
<a id="unordered_linked_to_sections" class="test_line_click">unordered_linked_to_sections</a>
<a id="generate_sha1_array" class="test_line_click">generate_sha1_array</a>
<a id="generate_array_view_top_functions" class="test_line_click">generate_array_view_top_functions</a>
<a id="generate_array_view_file_header_functions" class="test_line_click">generate_array_view_file_header_functions</a>
<a id="generate_array_view_directory_functions" class="test_line_click">generate_array_view_directory_functions</a>
<a id="format_sec_id_from_ex_debug" class="test_line_click">format_sec_id_from_ex_debug</a>
<a id="format_replace_debug_id_with_sec_id" class="test_line_click">format_replace_debug_id_with_sec_id</a>
<a id="format_pmwr_pc_add_sec_id" class="test_line_click">format_pmwr_pc_add_sec_id</a>
</span>
</div>
`

    document.getElementById("generate_all_ordered_tables").addEventListener("click", format_generate_all_ordered_tables);
    document.getElementById("generate_unordered_tables").addEventListener("click", format_text_editor_generate);
    document.getElementById("generate_ordered_tables").addEventListener("click", format_text_editor_generate_ordered);
    document.getElementById("generate_world_tables").addEventListener("click", format_generate_world_tables);
    document.getElementById("generate_sec_tables").addEventListener("click", format_generate_sec_tables);
    document.getElementById("generate_ordered_section").addEventListener("click", format_generate_ordered_section);
    document.getElementById("format_table").addEventListener("click", format_text_editor_table);
    document.getElementById("format_switch").addEventListener("click", format_text_editor_switch);
    document.getElementById("print_string_locations").addEventListener("click", print_string_locations_click);
    document.getElementById("linked_to_by_doc_table").addEventListener("click", print_linked_to_by_doc_table);
    document.getElementById("unordered_linked_to_sections").addEventListener("click", print_unordered_linked_to_sections);
    document.getElementById("generate_sha1_array").addEventListener("click", print_generate_sha1_array);
    document.getElementById("generate_array_view_top_functions").addEventListener("click", print_generate_array_view_top_functions);
    document.getElementById("generate_array_view_file_header_functions").addEventListener("click", print_generate_array_view_file_header_functions);
    document.getElementById("generate_array_view_directory_functions").addEventListener("click", print_generate_array_view_directory_functions);
    document.getElementById("format_sec_id_from_ex_debug").addEventListener("click", print_format_sec_id_from_ex_debug);
    document.getElementById("format_replace_debug_id_with_sec_id").addEventListener("click", print_format_replace_debug_id_with_sec_id);
    document.getElementById("format_pmwr_pc_add_sec_id").addEventListener("click", print_format_pmwr_pc_add_sec_id);

    function format_text_editor_generate() {

        file_editor.innerHTML = `
        <div style="height:22%;overflow:scroll;">
        <p>generate tables<br>
        paste a full html table from the docs<br>
        this will paste all sections in the unordered list</p>
            <div stlye="padding:1%;"><textarea id="paste_html"></textarea><br><br>
            </div>
        </div>
        <div style="height:77%;overflow:scroll;">
            <p>copy_all</p>
            <textarea id="copy_all"></textarea><br><hr>
            <p>copy_sec</p>
            <textarea id="copy_sec"></textarea><br><hr>
            <p>copy_import</p>
            <textarea id="copy_import"></textarea><br><hr>
            <p>copy_add</p>
            <textarea id="copy_add"></textarea><br><hr>
            <p>copy_edit</p>
            <textarea id="copy_edit"></textarea><br><hr>
            <p>copy_export</p>
            <textarea id="copy_export"></textarea><br><hr>
        </div>
        `

        document.getElementById("paste_html").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_html.value

            if (html === "") {
                return
            }

            let object_html = html_to_all_unordered_sec(html)

            copy_all.value = `
/* start sec id list */
${object_html.sec_id_html}
/* end sec id list */
/////////////////////
/* start import list */
${object_html.import_html}
/* end import list */
/////////////////////
/* start add list */
${object_html.edit_html}
/* end add list */
/////////////////////
/* start info list */
${object_html.info_html}
/* end info list */
/////////////////////
/* start export list */
${object_html.export_id_html}
/* end export list */
`

            copy_sec.value = object_html.sec_id_html
            copy_import.value = object_html.import_html
            copy_add.value = object_html.edit_html
            copy_edit.value = object_html.info_html
            copy_export.value = object_html.export_id_html

        }
        // paste_html

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))
        copy_sec.addEventListener("click", (e) => copy_from_textarea(e))
        copy_import.addEventListener("click", (e) => copy_from_textarea(e))
        copy_add.addEventListener("click", (e) => copy_from_textarea(e))
        copy_edit.addEventListener("click", (e) => copy_from_textarea(e))
        copy_export.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function format_generate_all_ordered_tables() {

        file_editor.innerHTML = `
        <div style="height:22%;overflow:scroll;">
        <p>generate tables<br>
        paste a full html table from the docs<br>
        this will paste all sections in the ordered list</p>
            <div stlye="padding:1%;"><textarea id="paste_html"></textarea><br><br>
            </div>
        </div>
        <div style="height:77%;overflow:scroll;">
            <p>copy_all</p>
            <textarea id="copy_all"></textarea><br><hr>
        </div>
        `

        document.getElementById("paste_html").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_html.value

            if (html === "") {
                return
            }

            let object_html = html_to_all_ordered(html)

            copy_all.value = `
/* start sec id list */
${object_html.sec_id_html}
/* end sec id list */
/////////////////////
/* start import list */
${object_html.import_html}
/* end import list */
/////////////////////
/* start add list */
${object_html.edit_html}
/* end add list */
/////////////////////
/* start info list */
${object_html.info_html}
/* end info list */
/////////////////////
/* start export list */
${object_html.export_id_html}
/* end export list */
/* start list */
${object_html.list}
/* end list */
/* start world list */
${object_html.world}
/* end world list */
`

            // copy_all.value = object_html.sec_id_html

        }
        // paste_html

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function format_text_editor_generate_ordered() {

        file_editor.innerHTML = `
        <div style="height:22%;overflow:scroll;">
        <p>generate tables<br>
        paste a full html table from the docs<br>
        this will paste all sections in the unordered list</p>
            <div stlye="padding:1%;"><textarea id="paste_html"></textarea><br><br>
            </div>
        </div>
        <div style="height:77%;overflow:scroll;">
            <p>copy_all</p>
            <textarea id="copy_all"></textarea><br><hr>
            <p>copy_sec</p>
            <textarea id="copy_sec"></textarea><br><hr>
            <p>copy_import</p>
            <textarea id="copy_import"></textarea><br><hr>
            <p>copy_add</p>
            <textarea id="copy_add"></textarea><br><hr>
            <p>copy_edit</p>
            <textarea id="copy_edit"></textarea><br><hr>
            <p>copy_export</p>
            <textarea id="copy_export"></textarea><br><hr>
        </div>
        `

        document.getElementById("paste_html").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_html.value

            if (html === "") {
                return
            }

            let object_html = html_to_all_ordered_sec(html)

            copy_all.value = `
/* start sec id list */
${object_html.sec_id_html}
/* end sec id list */
/////////////////////
/* start import list */
${object_html.import_html}
/* end import list */
/////////////////////
/* start add list */
${object_html.edit_html}
/* end add list */
/////////////////////
/* start info list */
${object_html.info_html}
/* end info list */
/////////////////////
/* start export list */
${object_html.export_id_html}
/* end export list */
`

            copy_sec.value = object_html.sec_id_html
            copy_import.value = object_html.import_html
            copy_add.value = object_html.edit_html
            copy_edit.value = object_html.info_html
            copy_export.value = object_html.export_id_html

        }
        // paste_html

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))
        copy_sec.addEventListener("click", (e) => copy_from_textarea(e))
        copy_import.addEventListener("click", (e) => copy_from_textarea(e))
        copy_add.addEventListener("click", (e) => copy_from_textarea(e))
        copy_edit.addEventListener("click", (e) => copy_from_textarea(e))
        copy_export.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function format_generate_world_tables() {

        file_editor.innerHTML = `
        <div style="height:22%;overflow:scroll;">
        <p>generate tables<br>
        paste a full html table from the docs<br>
        this will paste all sections from the world list</p>
            <div stlye="padding:1%;"><textarea id="paste_html"></textarea><br><br>
            </div>
        </div>
        <div style="height:77%;overflow:scroll;">
            <p>copy_all</p>
            <textarea id="copy_all"></textarea><br><hr>
            <p>copy_sec</p>
            <textarea id="copy_sec"></textarea><br><hr>
            <p>copy_import</p>
            <textarea id="copy_import"></textarea><br><hr>
            <p>copy_add</p>
            <textarea id="copy_add"></textarea><br><hr>
            <p>copy_edit</p>
            <textarea id="copy_edit"></textarea><br><hr>
            <p>copy_export</p>
            <textarea id="copy_export"></textarea><br><hr>
        </div>
        `

        document.getElementById("paste_html").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_html.value

            if (html === "") {
                return
            }

            let object_html = html_to_world_sec(html)

            copy_all.value = `
/* start sec id list */
${object_html.sec_id_html}
/* end sec id list */
/////////////////////
/* start import list */
${object_html.import_html}
/* end import list */
/////////////////////
/* start add list */
${object_html.edit_html}
/* end add list */
/////////////////////
/* start info list */
${object_html.info_html}
/* end info list */
/////////////////////
/* start export list */
${object_html.export_id_html}
/* end export list */
`

            copy_sec.value = object_html.sec_id_html
            copy_import.value = object_html.import_html
            copy_add.value = object_html.edit_html
            copy_edit.value = object_html.info_html
            copy_export.value = object_html.export_id_html

        }
        // paste_html

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))
        copy_sec.addEventListener("click", (e) => copy_from_textarea(e))
        copy_import.addEventListener("click", (e) => copy_from_textarea(e))
        copy_add.addEventListener("click", (e) => copy_from_textarea(e))
        copy_edit.addEventListener("click", (e) => copy_from_textarea(e))
        copy_export.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function format_generate_sec_tables() {
        // file_editor.innerHTML = `<div style:inline-flex:>
        // </div>`

        file_editor.innerHTML = `
        <div style="height:22%;overflow:scroll;">
        <p>generate tables<br>
        paste a section table from the docs</p>
            <div stlye="padding:1%;"><textarea id="paste_html"></textarea><br><br>
            </div>
        </div>
        <div style="height:77%;overflow:scroll;">
            <p>copy_all</p>
            <textarea id="copy_all"></textarea><br><hr>
            <p>copy_sec</p>
            <textarea id="copy_sec"></textarea><br><hr>
            <p>copy_import</p>
            <textarea id="copy_import"></textarea><br><hr>
            <p>copy_add</p>
            <textarea id="copy_add"></textarea><br><hr>
            <p>copy_edit</p>
            <textarea id="copy_edit"></textarea><br><hr>
            <p>copy_export</p>
            <textarea id="copy_export"></textarea><br><hr>
        </div>
        `

        document.getElementById("paste_html").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_html.value

            if (html === "") {
                return
            }

            let object_html = html_to_listed_sec(html)

            copy_all.value = `
/* start sec id list */
${object_html.sec_id_html}
/* end sec id list */
/////////////////////
/* start import list */
${object_html.import_html}
/* end import list */
/////////////////////
/* start add list */
${object_html.edit_html}
/* end add list */
/////////////////////
/* start info list */
${object_html.info_html}
/* end info list */
/////////////////////
/* start export list */
${object_html.export_id_html}
/* end export list */
`

            copy_sec.value = object_html.sec_id_html
            copy_import.value = object_html.import_html
            copy_add.value = object_html.edit_html
            copy_edit.value = object_html.info_html
            copy_export.value = object_html.export_id_html

        }
        // paste_html

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))
        copy_sec.addEventListener("click", (e) => copy_from_textarea(e))
        copy_import.addEventListener("click", (e) => copy_from_textarea(e))
        copy_add.addEventListener("click", (e) => copy_from_textarea(e))
        copy_edit.addEventListener("click", (e) => copy_from_textarea(e))
        copy_export.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function format_text_editor_table() {
        file_editor.innerHTML = `
        <div style="height:22%;overflow:scroll;">
        <p>update tables<br>
        </p>
            <div stlye="padding:1%;"><textarea id="paste_html"></textarea><br><br>
            </div>
        </div>
        <div style="height:77%;overflow:scroll;">
            <p>copy_all</p>
            <textarea id="copy_all"></textarea><br><hr>
        </div>
        `

        document.getElementById("paste_html").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_html.value

            if (html === "") {
                return
            }

            let object_html = remove_hr_space(html)

            copy_all.value = object_html

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }
    function format_generate_ordered_section() {
        file_editor.innerHTML = `
        <div style="height:22%;overflow:scroll;">
        <p>generate ordered list<br>
        </p>
            <div stlye="padding:1%;"><textarea id="paste_html"></textarea><br><br>
            </div>
        </div>
        <div style="height:77%;overflow:scroll;">
            <p>copy_all</p>
            <textarea id="copy_all"></textarea><br><hr>
        </div>
        `

        document.getElementById("paste_html").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_html.value

            if (html === "") {
                return
            }

            let object_html = get_print_ordered_list_functions(html)

            copy_all.value = object_html

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }
    function format_text_editor_switch() {

        file_editor.innerHTML = `
        <div style="height:22%;overflow:scroll;">
        <p>replace switch<br>
        </p>
            <div stlye="padding:1%;"><textarea id="paste_html"></textarea><br><br>
            </div>
        </div>
        <div style="height:77%;overflow:scroll;">
            <p>copy_all</p>
            <textarea id="copy_all"></textarea><br><hr>
        </div>
        `

        document.getElementById("paste_html").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_html.value

            if (html === "") {
                return
            }

            let object_html = replace_switch(html)

            copy_all.value = object_html

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function print_string_locations_click() {

        file_editor.innerHTML = `
        <div style="height:44%;overflow:scroll;">
        <p>js file in first textarea<br> html document in 2<br>
        this will replace <br>&lt;a href="#some_section"&gt;offset&lt;/a&gt;<br>with offset string based on js file<br>
        </p>
            <div stlye="padding:1%;"><textarea id="paste_js_string"></textarea><br><br>
            </div>
            <div stlye="padding:1%;"><textarea id="paste_docs"></textarea><br><br>
            </div>
        </div>
        <div style="height:55%;overflow:scroll;">
            <p>copy_table</p>
            <textarea id="copy_all"></textarea><br><hr>
            <p>copy_string</p>
            <textarea id="js_string"></textarea><br><hr>
        </div>
        `

        // document.getElementById("paste_js_string").addEventListener("change", paste_html_changed);
        document.getElementById("paste_docs").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_js_string.value
            let docs_html = paste_docs.value

            if (html === "") {
                return
            }

            let string_from_js = find_get_string_from_js_file(html)
            let object_html = doc_replace_offsets_to_string(docs_html, string_from_js)

            js_string.value = string_from_js
            copy_all.value = object_html

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function print_linked_to_by_doc_table() {

        file_editor.innerHTML = `
        <div style="height:44%;overflow:scroll;">
        <p>name of section to print<br> html document in 2<br>
        this will generate a linked to by section<br>
        </p>
            <div stlye="padding:1%;"><textarea id="paste_name"></textarea><br><br>
            </div>
            <div stlye="padding:1%;"><textarea id="paste_docs"></textarea><br><br>
            </div>
        </div>
        <div style="height:55%;overflow:scroll;">
            <p>copy_table</p>
            <textarea id="copy_all"></textarea><br><hr>
            <p>copy_string</p>
            <textarea id="js_string"></textarea><br><hr>
        </div>
        `

        // document.getElementById("paste_js_string").addEventListener("change", paste_html_changed);
        document.getElementById("paste_docs").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_name.value
            let docs_html = paste_docs.value

            if (html === "") {
                return
            }

            let object_html = doc_generate_linked_to_string(docs_html, html)

            copy_all.value = object_html

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function print_generate_sha1_array() {

        file_editor.innerHTML = `
        <div style="height:44%;overflow:scroll;">
        <p>print from sha1 docs<br>
        </p>
            <div stlye="padding:1%;"><textarea id="paste_doc_string"></textarea><br><br>
            </div>
        </div>
        <div style="height:55%;overflow:scroll;">
            <p>copy_table</p>
            <textarea id="copy_all"></textarea><br><hr>
        </div>
        `

        // document.getElementById("paste_js_string").addEventListener("change", paste_html_changed);
        document.getElementById("paste_doc_string").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_doc_string.value

            if (html === "") {
                return
            }

            let string_from_docs = get_sha1_array_from_docs(html)

            copy_all.value = string_from_docs

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function print_unordered_linked_to_sections() {

        file_editor.innerHTML = `
        <div style="height:44%;overflow:scroll;">
        <p>check docs to see if unordered has sections not correctly listed<br>
        </p>
            <div stlye="padding:1%;"><textarea id="paste_doc_string"></textarea><br><br>
            </div>
        </div>
        <div style="height:55%;overflow:scroll;">
            <p>copy_table</p>
            <textarea id="copy_all"></textarea><br><hr>
        </div>
        `

        // document.getElementById("paste_js_string").addEventListener("change", paste_html_changed);
        document.getElementById("paste_doc_string").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_doc_string.value

            if (html === "") {
                return
            }

            let string_from_docs = check_unordered_linked_to_sections(html)

            copy_all.value = string_from_docs

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function print_generate_array_view_top_functions() {

        file_editor.innerHTML = `
        <div style="height:44%;overflow:scroll;">
        <p>print_generate_array_view_top_functions<br>
        </p>
        </div>
        <div style="height:55%;overflow:scroll;">
            <p>copy_table</p>
            <textarea id="copy_all"></textarea><br><hr>
        </div>
        `

        paste_html_changed()

        function paste_html_changed() {
            let string = get_array_view_functions()

            copy_all.value = string

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function print_generate_array_view_file_header_functions() {

        file_editor.innerHTML = `
        <div style="height:44%;overflow:scroll;">
        <p>print_generate_array_view_file_header_functions<br>
        </p>
        </div>
        <div style="height:55%;overflow:scroll;">
            <p>copy_table</p>
            <textarea id="copy_all"></textarea><br><hr>
        </div>
        `

        paste_html_changed()

        function paste_html_changed() {
            let string = generate_file_table_for_array_view()

            copy_all.value = string

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function print_generate_array_view_directory_functions() {

        file_editor.innerHTML = `
        <div style="height:44%;overflow:scroll;">
        <p>print_generate_array_view_file_header_functions<br>
        </p>
        </div>
        <div style="height:55%;overflow:scroll;">
            <p>copy_table</p>
            <textarea id="copy_all"></textarea><br><hr>
        </div>
        `

        paste_html_changed()

        function paste_html_changed() {
            let string = generate_directory_table_for_file_view()

            copy_all.value = string

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function print_format_sec_id_from_ex_debug() {

        file_editor.innerHTML = `
        <div style="height:44%;overflow:scroll;">
        <p>format pmwr pc to add sec_id list<br>
        </p>
            <div stlye="padding:1%;"><textarea id="paste_doc_string"></textarea><br><br>
            </div>
        </div>
        <div style="height:55%;overflow:scroll;">
            <p>copy_table</p>
            <textarea id="copy_all"></textarea><br><hr>
        </div>
        `

        // document.getElementById("paste_js_string").addEventListener("change", paste_html_changed);
        document.getElementById("paste_doc_string").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_doc_string.value

            if (html === "") {
                return
            }

            let string_from_docs = get_sec_id_from_exdebug_funtion(html)

            copy_all.value = string_from_docs

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function print_format_replace_debug_id_with_sec_id() {

        file_editor.innerHTML = `
        <div style="height:44%;overflow:scroll;">
        <p>format pmwr pc to edit debug function<br>
        </p>
            <div stlye="padding:1%;"><textarea id="paste_doc_string"></textarea><br><br>
            </div>
        </div>
        <div style="height:55%;overflow:scroll;">
            <p>copy_table</p>
            <textarea id="copy_all"></textarea><br><hr>
        </div>
        `

        // document.getElementById("paste_js_string").addEventListener("change", paste_html_changed);
        document.getElementById("paste_doc_string").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let html = paste_doc_string.value

            if (html === "") {
                return
            }

            let string_from_docs = get_format_replace_debug_id_with_sec_id(html)

            copy_all.value = string_from_docs

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function print_format_pmwr_pc_add_sec_id() {

        file_editor.innerHTML = `
        <div style="height:44%;overflow:scroll;">
        <p>js import tables in first textarea<br> array in 2nd<br>
        </p>
            <div stlye="padding:1%;"><textarea id="paste_js_import_string"></textarea><br><br>
            </div>
            <div stlye="padding:1%;"><textarea id="paste_js_export_string"></textarea><br><br>
            </div>
        </div>
        <div style="height:55%;overflow:scroll;">
            <p>copy_table</p>
            <textarea id="copy_all"></textarea><br><hr>
            <p>copy_string</p>
            <textarea id="js_string"></textarea><br><hr>
        </div>
        `

        // document.getElementById("paste_js_string").addEventListener("change", paste_html_changed);
        document.getElementById("paste_js_export_string").addEventListener("change", paste_html_changed);

        function paste_html_changed() {
            let string_import = paste_js_import_string.value
            let string_export = paste_js_export_string.value

            let string_from_js = get_format_replace_x_with_sec_id(string_import, string_export)

            copy_all.value = string_from_js

        }

        copy_all.addEventListener("click", (e) => copy_from_textarea(e))

    }

    function copy_from_textarea(e) {
        let element = e.srcElement
        let string_value = element.value
        string_value.replace('    ', '\n')
        document.getElementById("format_text_button").innerHTML += `<textarea style="height:50%;" id='copy_remove_element'>${string_value}</textarea>`
        document.getElementById("copy_remove_element").select()
        document.execCommand('copy')

        element.style.color = 'blue'
        document.getElementById("copy_remove_element").remove()

    }

    // document.getElementById("generate_tables").addEventListener("click", generate_tables_clicked);

}

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

function print_sha1_files() {
    let str_table_start = `<plaintext><table class="h">
    <tbody>
        <tr>
            <th>file name</th>
            <th>hash</th>
        </tr>`
    let str_table_end = `</tbody>
    <tfoot>
        <tr>
            <th colspan="2">${sha1_array.length} files Seen</th>
        </tr>
    </tfoot>
</table>
<hr>
`

    sha1_array.sort( (a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    }
    );

    let str_table = ''
    for (let i = 0; i < sha1_array.length; i++) {
        str_table += `<tr>
            <td>${sha1_array[i].name}</td>
            <td>${sha1_array[i].hash}</td>
        </tr>`
    }
    file_editor.innerHTML = str_table_start + str_table + str_table_end

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
<hr>
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
        temp_array__[array_index].switch.array.sort( (a, b) => a - b)
        temp_array__[array_index].switch.no_offset_array.sort( (a, b) => a - b)
        temp_array__[array_index].switch.no_val_array.sort( (a, b) => a - b)
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
                        // _3rd = a.a.sort(function(a, b) {
                        //     return a - b;
                        // }).toString()
                        // // _3rd = a.a.toString()
                        _3rd = a.a.sort(function(a, b) {
                            return a - b;
                        })
                        if (_3rd.toString().length > 75) {
                            let new_3rd = []
                            new_3rd.push(_3rd[0])
                            new_3rd.push(_3rd[_3rd.length - 1])
                            _3rd = new_3rd.toString().replace(',', ' - ')
                        } else {
                            _3rd = a.a.toString()
                        }

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
<hr>
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
                        })
                        if (_3rd.toString().length > 75) {
                            let new_3rd = []
                            new_3rd.push(_3rd[0])
                            new_3rd.push(_3rd[_3rd.length - 1])
                            _3rd = new_3rd.toString()
                        } else {
                            _3rd = a.a.toString()
                        }

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
            } else if (log_array?.p_model?.array?.includes(offset + array[i + 1] - offset_mid)) {
                html += `P_M`
                if (temp_array__[temp_array_index].offset_check.model.includes(array[i + 1])) {} else {
                    temp_array__[temp_array_index].offset_check.model.push(array[i + 1])
                }
            } else if (log_array?.p_animation?.array?.includes(offset + array[i + 1] - offset_mid)) {
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
                temp_array__[0].console += `duplicate found: ${f.name} -> ${log_array.ä_array[index + 1]} || O: ${log_array.ä_array[index + 0]}<br>`
                console.log(`duplicate found: ${f.name} -> ${log_array.ä_array[index + 1]} || O: ${log_array.ä_array[index + 0]}`)
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

// function html_to_import(inputHtml) {
//     // Parse the input HTML string into a DOM object
//     const parser = new DOMParser();
//     doc = parser.parseFromString(inputHtml, 'text/html');

//     let jsFunction = ''

//     const h2_amount = doc.getElementsByTagName('h2');
//     const table_amount = doc.getElementsByTagName('table');
//     for (let i = 0; i < h2_amount.length; i++) {
//         h2Element = h2_amount[i]
//         const table = table_amount[i]

//         // Find the <h2> element to extract the function name
//         // const h2Element = doc.querySelector('h2');
//         if (!h2Element) {
//             return "Failed to find the function name";
//         }

//         const functionName = h2Element.id;

//         // Find all the <tr> elements within the <table> for data extraction
//         // const table = doc.querySelector('table');
//         const rows = table.querySelectorAll('tr');

//         // Initialize the JavaScript function string
//         jsFunction += "function im_" + functionName + "(o, ";
//         let is_i = 0
//         if (table.children[1].children[0].children[0].innerText.includes('per') || i === 0) {
//             is_i = 'i'
//             jsFunction += `i ,`
//         }
//         let am_bytes = `\n// ${table.children[1].children[0].children[0].innerText.split('byte')[0].trim()} bytes;\n`
//         jsFunction += `x) {\n`

//         // Initialize an empty object for storing the data
//         jsFunction += 'x.push({\n';

//         let offsets = ''

//         if (is_i === "i") {
//             jsFunction += `    id: gen_id(),\n`
//         }

//         // Loop through the table rows to extract data
//         rows.forEach( (row, index) => {
//             if (index === 0) {
//                 // Skip the header row
//                 return;
//             }
//             let multilink_amount = 0

//             const cells = row.querySelectorAll('td');
//             if (cells.length === 3) {
//                 const offset = cells[0].textContent;
//                 let type;
//                 switch (cells[1].textContent) {
//                 case "u32":
//                 case "u16":
//                 case "u8":
//                     type = cells[1].textContent;
//                     break;
//                 case "float":
//                     type = "f32"
//                     break;
//                 default:
//                     type = "// unknown"
//                 }

//                 // const type = cells[1].textContent;
//                 let description
//                 let ishook = false

//                 if (cells[2].children.length) {
//                     if (cells[2].children.length === 1 && cells[2].children[0].tagName === "A") {
//                         let href = cells[2].children[0].href.split("#")[1]
//                         doc.getElementById(href)
//                         let t_h2_amount = doc.getElementsByTagName('h2');
//                         let ttable_amount = doc.getElementsByTagName('table');
//                         for (let ii = 1; ii < h2_amount.length; ii++) {
//                             t_h2_amount = h2_amount[ii]
//                             const table = ttable_amount[ii]

//                             if (t_h2_amount.id === href) {
//                                 if (table.children[1].children[0].children[0].innerText.includes('per')) {
//                                     description = 'multi offset'
//                                     multilink_amount = parseInt(table.children[1].children[0].children[0].innerText.split("b")[0].trim())
//                                 } else {
//                                     description = 'offset'
//                                 }
//                                 ii += 1000

//                             } else {
//                                 switch (cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()) {
//                                 case "mysterious":
//                                     description = 'multi offset'
//                                     ishook = cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()
//                                     break
//                                 default:
//                                     description = 'unordered'
//                                 }

//                             }

//                         }

//                         // description = 'offset'
//                     } else {
//                         description = 'unknown'
//                     }
//                 } else {
//                     if (cells[2].innerText.trim() === "0") {
//                         description = '0'
//                     } else {
//                         description = 'normal'
//                     }
//                 }

//                 let is_case = false

//                 if (cells[2].innerHTML.includes("based on type")) {
//                     let cases = cells[2].innerHTML.split('\n')
//                     is_case = ""
//                     for (let i = 0; i < cases.length; i++) {
//                         if (cases[i].includes("href")) {
//                             let casescomma = cases[i].split(`">`)[1].split("=")[0].trim().split(",")
//                             for (let ii = 0; ii < casescomma.length; ii++) {
//                                 is_case += `    case ${casescomma[ii].trim()}:\n`
//                             }
//                             let tableid = cases[i].split("#")[1].split(`">`)[0].trim()
//                             let is_un = is_unordered(cases[i])
//                             // let is_un = "unknown"
//                             if (is_un === 'y') {
//                                 is_case += `        u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;

//                             } else {
//                                 let is_ordered = getisordered(tableid)

//                                 is_case += `x[${is_i}].section_` + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
//                             }
//                             is_case += "    break;\n"

//                         }

//                     }
//                     if (is_case === "") {
//                         is_case = false
//                     } else {
//                         let typeoffset = cells[2].innerHTML.split("based on type [")[1].split("<br>")[0].split("]")[0].trim()
//                         typeoffset = typeoffset.replace(/[^0-9]*/, '')

//                         let tabletds = table.getElementsByTagName("TD");
//                         let bintype = "//"

//                         for (let i = 0; i < tabletds.length; i += 3) {
//                             if (String(parseInt(tabletds[i].innerText.trim(), 10)) === typeoffset) {
//                                 bintype = tabletds[i + 1].innerText
//                                 i += 10000
//                             }
//                         }
//                         is_case = "switch(" + bintype + "(o + " + typeoffset + ")){\n" + is_case + "}"
//                     }

//                 }

//                 if (description === "normal") {

//                     if (cells[2].innerHTML.includes("string")) {
//                         let propertyName = "section_" + offset;

//                         jsFunction += `    ${propertyName}: im_string(u32(o + ${offset}), 0, false),\n`;

//                     } else if (cells[2].innerHTML.includes("amount")) {
//                         let propertyName = type + "_" + offset;

//                         // Add the data extraction code to the function string
//                         jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//amount?\n`;
//                     } else if (cells[2].innerHTML.includes("patch")) {
//                         let propertyName = type + "_" + offset;
//                         getpatch(cells[2].innerHTML, offset, propertyName, type)

//                     } else {

//                         // Generate the property name for the data
//                         let propertyName = type + "_" + offset;

//                         // Add the data extraction code to the function string
//                         jsFunction += `    ${propertyName}: ${type}(o + ${offset}),\n`;
//                     }

//                 } else if (description === 'offset') {
//                     let tableid = cells[2].children[0].href.split("#")[1]

//                     jsFunction += "    section_" + offset + ": [],\n";

//                     if (is_case !== false) {
//                         offsets += is_case
//                     } else {
//                         offsets += `u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
//                     }

//                 } else if (description === 'unordered') {
//                     let tableid = cells[2].children[0].href.split("#")[1].trim()
//                     let is_ordered = getisordered(tableid)

//                     jsFunction += `    ` + is_ordered + `ordered_` + tableid + "_" + offset + `: 0,\n`;

//                     offsets += `x[${is_i}].` + is_ordered + `ordered_` + tableid + "_" + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
//                 } else if (description === 'multi offset') {

//                     switch (ishook) {
//                     case "mysterious":
//                         multilink_amount = "64"
//                         break
//                     }

//                     console.log('/?')
//                     let tableid = cells[2].children[0].href.split("#")[1]

//                     jsFunction += `    section_` + offset + `: [],\n`;

//                     let is_ii = 'ii'
//                     is_i === 0 ? is_ii = 'i' : 0;

//                     if (is_case !== false) {
//                         offsets += is_case
//                     }

//                     let offsetamount = "___$$$___"
//                     if (cells[2].innerHTML.includes("based on amount")) {
//                         let split_array = cells[2].innerHTML.split("based on amount [")
//                         if (split_array.length === 1) {
//                             offsetamount = '???'
//                         } else {
//                             offsetamount = split_array[1].split("]")[0].trim()
//                         }
//                     }

//                     offsets += `
// for (let ${is_ii} = 0; ${is_ii} < u32(o + ${offsetamount}); ${is_ii}++) {
//     im_` + tableid + `(u32(o + ${offset}) + (${is_ii} * ${multilink_amount}) + g.m, ${is_ii}, x[${is_i}].section_` + offset + `);
// }\n`;
//                 } else if (description === '0') {} else {

//                     if (cells[2].innerHTML.includes("based on type")) {
//                         offsets += is_case
//                         jsFunction += `    section_` + offset + `: [],\n`;
//                     } else if (cells[2].innerHTML.includes("href")) {
//                         let tableid = cells[2].innerHTML.split("href")[1].split("#")[1].split(`"`)[0].trim()
//                         jsFunction += `    section_` + offset + `: [],\n`;
//                         offsets += `u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; // offset? \n`;
//                     } else if (cells[2].innerHTML.includes("amount")) {
//                         let propertyName = type + "_" + offset;

//                         // Add the data extraction code to the function string
//                         jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//amount?\n`;

//                     } else {
//                         let propertyName = type + "_" + offset;

//                         // Add the data extraction code to the function string
//                         jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//check this\n`;
//                     }
//                 }
//             }

//         }
//         );

//         if (i === 0) {
//             offsets += `return x[${is_i}].id`
//         }

//         // return x[0].id

//         // Close the data object and the function
//         jsFunction += '});\n';
//         if (offsets === '') {
//             if (is_i === 0) {
//                 jsFunction += am_bytes + `\n}\n`
//             } else {
//                 jsFunction += `\n}\n`
//             }
//         } else {
//             if (is_i === 0 || i === 0) {
//                 jsFunction += `\n ${offsets} ${am_bytes}\n}\n`
//             } else {
//                 jsFunction += `\n ${offsets}\n}\n`
//             }

//         }

//     }
//     console.log(jsFunction)

//     function is_unordered(cases) {
//         let href = cases.split("href")[1].split("#")[1].split(`"`)[0]
//         doc.getElementById(href)
//         let t_h2_amount = doc.getElementsByTagName('h2');
//         let ttable_amount = doc.getElementsByTagName('table');
//         let temp = ''
//         for (let ii = 1; ii < h2_amount.length; ii++) {
//             t_h2_amount = h2_amount[ii]
//             const table = ttable_amount[ii]

//             if (t_h2_amount.id === href) {
//                 if (table.children[1].children[0].children[0].innerText.includes('per')) {
//                     temp = 'y'
//                     multilink_amount = parseInt(table.children[1].children[0].children[0].innerText.split("b")[0].trim())
//                 } else {
//                     temp = 'y'
//                 }
//                 ii += 1000

//             } else {
//                 temp = 'unordered'
//             }

//         }

//         // description = 'offset'
//         return temp
//     }
//     function getisordered(html) {
//         let a = 'un'
//         switch (html) {
//         case "model_animation_1":
//         case "model_animation_2":
//         case "models":
//             a = ''
//             break;
//         }
//         return a
//     }
//     function getpatch(cells, offset, propertyName, type) {
//         if (cells.toLowerCase().includes("texture")) {
//             jsFunction += `    texture_` + offset + `: im_patch(g.texture_patch_ref, o + ${offset}),\n`;
//         } else if (cells.toLowerCase().includes("animation")) {
//             jsFunction += `    animation_` + offset + `: im_patch(g.animation_patch_ref, o + ${offset}),\n`;
//         } else if (cells.toLowerCase().includes("sound")) {
//             jsFunction += `    sound_` + offset + `: im_patch(g.sound_patch_ref, o + ${offset}),\n`;
//         } else if (cells.toLowerCase().includes("model")) {
//             jsFunction += `    model_` + offset + `: im_patch(g.model_ref, o + ${offset}),\n`;
//         } else {
//             jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//patch?\n`;
//         }
//     }

// }

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
                                let check_if_mys = cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()
                                if (check_if_mys.endsWith("mysterious")) {
                                    description = 'multi offset'
                                    ishook = "mysterious"
                                } else {
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
                            if (String(parseInt(tabletds[i].innerText.trim(), 10)) === typeoffset) {
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
                        let split_array = cells[2].innerHTML.split("based on amount [")
                        if (split_array.length === 1) {
                            offsetamount = '???'
                        } else {
                            offsetamount = split_array[1].split("]")[0].trim()
                        }
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
                case 'bee_movie_game':
                    ä(bmg_model, u32(o + n), get_bmg_model)
                    break
                case 'snoopy_vs_the_red_baron':
                    ä(svtrb_model, u32(o + n), get_svtrb_model)
                    break
                case 'pac_man_world_rally':
                    switch (g.version) {
                    case 243:
                        ä(pmwr_xdx_model, u32(o + n), get_pmwr_xdx_model)
                        break
                    case 249:
                        ä(pmwr_ps2demo_model, u32(o + n), get_pmwr_ps2demo_model)
                        break
                    default:
                        ä(pmwr_model, u32(o + n), get_pmwr_model)

                    }
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
    new_a = log_array?.p_model?.array?.length
    old_a = old_log_array?.p_model?.array?.length
    if (log_array?.p_model?.array?.length) {
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
    html += get_log(log_array.p_sound.array, 'snd')
    html += get_log(log_array.p_animation.array, 'anim0')
    temp_array__[0].lost_offsets += html.replaceAll('\n', "<br>")
    function get_log(rest_of_them, s) {
        let html = s + '\n'
        if (rest_of_them == undefined) {
            return html
        }
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

        jsFunction += `    sec_id: "${check_if_in_list_sec_id_list(functionName)}",\n`

        // Loop through the table rows to extract data
        rows.forEach( (row, index) => {
            if (index === 0) {
                // Skip the header row
                return;
            }
            let multilink_amount = 0

            const cells = row.querySelectorAll('td');
            if (cells.length === 3) {
                const offset = String(parseInt(cells[0].textContent));
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
                                let check_if_mys = cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()
                                if (check_if_mys.endsWith("mysterious")) {
                                    description = 'multi offset'
                                    ishook = "mysterious"
                                } else {
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
                            if (String(parseInt(tabletds[i].innerText.trim(), 10)) === typeoffset) {
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

                        jsFunction += `    ${propertyName}: im_string(u32(o + ${offset}), 0, false),\n`;

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
                    // if (cells[2].innerHTML.includes("based on type")) {
                    // offsets += `// CASE // u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
                    // }else{
                    // }

                } else if (description === 'unordered') {
                    let tableid = cells[2].children[0].href.split("#")[1].trim()
                    let is_ordered = getisordered(tableid)

                    jsFunction += `    ` + is_ordered + `ordered_` + tableid + "_" + offset + `: 0,\n`;

                    offsets += `x[${is_i}].` + is_ordered + `ordered_` + tableid + "_" + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
                } else if (description === 'multi offset') {

                    switch (ishook) {
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

                    // if (cells[2].innerHTML.includes("based on type")) {
                    // offsets+= "// CASE"
                    // }
                    let offsetamount = "___$$$___"
                    if (cells[2].innerHTML.includes("based on amount")) {
                        let split_array = cells[2].innerHTML.split("based on amount [")
                        if (split_array.length === 1) {
                            offsetamount = '???'
                        } else {
                            offsetamount = split_array[1].split("]")[0].trim()
                        }
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
    // console.log(jsFunction)

    return jsFunction

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

function html_to_edit(inputHtml) {
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
        jsFunction += "function add_" + functionName + "(){\n";
        let is_i = 0
        if (table.children[1].children[0].children[0].innerText.includes('per') || i === 0) {
            is_i = 'i'
            // jsFunction += `i ,`
        }
        let am_bytes = `\n// ${table.children[1].children[0].children[0].innerText.split('byte')[0].trim()} bytes;\n`
        // jsFunction += `x) {\n`

        // Initialize an empty object for storing the data
        jsFunction += 'return {\n';

        let offsets = ''

        if (is_i === "i") {
            jsFunction += `    id: gen_id(),\n`
        }

        jsFunction += `    sec_id: "${check_if_in_list_sec_id_list(functionName)}",\n`

        // Loop through the table rows to extract data
        rows.forEach( (row, index) => {
            if (index === 0) {
                // Skip the header row
                return;
            }
            let multilink_amount = 0

            const cells = row.querySelectorAll('td');
            if (cells.length === 3) {
                const offset = String(parseInt(cells[0].textContent));
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
                                let check_if_mys = cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()
                                if (check_if_mys.endsWith("mysterious")) {
                                    description = 'multi offset'
                                    ishook = "mysterious"
                                } else {
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
                            if (String(parseInt(tabletds[i].innerText.trim(), 10)) === typeoffset) {
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

                        jsFunction += `    ${propertyName}: ["Pac-Kart"],\n`;

                    } else if (cells[2].innerHTML.includes("amount")) {
                        let propertyName = type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `    ${propertyName}: 0,\n`;
                    } else if (cells[2].innerHTML.includes("patch")) {
                        let propertyName = type + "_" + offset;
                        getpatch(cells[2].innerHTML, offset, propertyName, type)

                    } else {

                        // Generate the property name for the data
                        let propertyName = type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `    ${propertyName}: 0,\n`;
                    }

                } else if (description === 'offset') {
                    let tableid = cells[2].children[0].href.split("#")[1]

                    jsFunction += "    section_" + offset + ": [],\n";

                    if (is_case !== false) {
                        offsets += is_case
                    } else {
                        offsets += `u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
                    }
                    // if (cells[2].innerHTML.includes("based on type")) {
                    // offsets += `// CASE // u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
                    // }else{
                    // }

                } else if (description === 'unordered') {
                    let tableid = cells[2].children[0].href.split("#")[1].trim()
                    let is_ordered = getisordered(tableid)

                    jsFunction += `    ` + is_ordered + `ordered_` + tableid + "_" + offset + `: 0,\n`;

                    offsets += `x[${is_i}].` + is_ordered + `ordered_` + tableid + "_" + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
                } else if (description === 'multi offset') {

                    switch (ishook) {
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

                    // if (cells[2].innerHTML.includes("based on type")) {
                    // offsets+= "// CASE"
                    // }
                    let offsetamount = "___$$$___"
                    if (cells[2].innerHTML.includes("based on amount")) {
                        let split_array = cells[2].innerHTML.split("based on amount [")
                        if (split_array.length === 1) {
                            offsetamount = '???'
                        } else {
                            offsetamount = split_array[1].split("]")[0].trim()
                        }
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
                        jsFunction += `    ${propertyName}: 0,\n`;

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
        jsFunction += '};\n';
        if (offsets === '') {
            if (is_i === 0) {
                // jsFunction += am_bytes + `\n}\n`
                jsFunction += `\n}\n`
            } else {
                jsFunction += `\n}\n`
            }
        } else {
            if (is_i === 0 || i === 0) {
                // jsFunction += `\n ${offsets} ${am_bytes}\n}\n`
                jsFunction += `\n}\n`
            } else {
                // jsFunction += `\n ${offsets}\n}\n`
                jsFunction += `\n}\n`
            }

        }

    }
    // console.log(jsFunction)

    return jsFunction

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
            jsFunction += `    texture_` + offset + `: [0, 0, 0, 't'],\n`;
        } else if (cells.toLowerCase().includes("animation")) {
            jsFunction += `    animation_` + offset + `: [0, 0, 0, 'a'],\n`;
        } else if (cells.toLowerCase().includes("sound")) {
            jsFunction += `    sound_` + offset + `: [0, 0, 0, 's'],\n`;
        } else if (cells.toLowerCase().includes("model")) {
            jsFunction += `    model_` + offset + `: [0, 0, 0, 'm'],\n`;
        } else {
            jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//patch?\n`;
        }
    }
}
function html_to_info(inputHtml) {
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
        jsFunction += "function info_" + functionName + "(){\n";
        let is_i = 0
        if (table.children[1].children[0].children[0].innerText.includes('per') || i === 0) {
            is_i = 'i'
            // jsFunction += `i ,`
        }
        let am_bytes = `\n// ${table.children[1].children[0].children[0].innerText.split('byte')[0].trim()} bytes;\n`
        // jsFunction += `x) {\n`

        // Initialize an empty object for storing the data
        jsFunction += 'return {\n';

        let offsets = ''

        if (is_i === "i") {// jsFunction += `    id: gen_id(),\n`
        }

        jsFunction += `    sec_id: "${check_if_in_list_sec_id_list(functionName)}",\n`

        // Loop through the table rows to extract data
        rows.forEach( (row, index) => {
            if (index === 0) {
                // Skip the header row
                return;
            }
            let multilink_amount = 0

            const cells = row.querySelectorAll('td');
            if (cells.length === 3) {
                const offset = String(parseInt(cells[0].textContent));
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
                                let check_if_mys = cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()
                                if (check_if_mys.endsWith("mysterious")) {
                                    description = 'multi offset'
                                    ishook = "mysterious"
                                } else {
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
                            if (String(parseInt(tabletds[i].innerText.trim(), 10)) === typeoffset) {
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

                        jsFunction += `    ${propertyName}: ["Pac-Kart"],\n`;

                    } else if (cells[2].innerHTML.includes("amount")) {
                        let propertyName = type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `    ${propertyName}: {a:null},\n`;
                    } else if (cells[2].innerHTML.includes("patch")) {
                        let propertyName = type + "_" + offset;
                        getpatch(cells[2].innerHTML, offset, propertyName, type)

                    } else {

                        // Generate the property name for the data
                        let propertyName = type + "_" + offset;

                        // Add the data extraction code to the function string
                        jsFunction += `    ${propertyName}: 0,\n`;
                    }

                } else if (description === 'offset') {
                    let tableid = cells[2].children[0].href.split("#")[1]
                    // offset
                    // function_sec_id_name

                    jsFunction += `    section_${offset} : ["${check_if_in_list_sec_id_list(tableid, true)}"],\n`;

                    if (is_case !== false) {
                        offsets += is_case
                    } else {
                        offsets += `u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
                    }
                    // if (cells[2].innerHTML.includes("based on type")) {
                    // offsets += `// CASE // u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
                    // }else{
                    // }

                } else if (description === 'unordered') {
                    let tableid = cells[2].children[0].href.split("#")[1].trim()
                    let is_ordered = getisordered(tableid)

                    jsFunction += `    ` + is_ordered + `ordered_` + tableid + "_" + offset + `: 0,\n`;

                    offsets += `x[${is_i}].` + is_ordered + `ordered_` + tableid + "_" + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
                } else if (description === 'multi offset') {

                    switch (ishook) {
                    case "mysterious":
                        multilink_amount = "64"
                        break
                    }

                    console.log('/?')
                    let tableid = cells[2].children[0].href.split("#")[1]

                    // jsFunction += `    section_` + offset + `: [???? 1],\n`;
                    jsFunction += `    section_${offset} : ["${check_if_in_list_sec_id_list(tableid, true)}"],\n`;

                    let is_ii = 'ii'
                    is_i === 0 ? is_ii = 'i' : 0;

                    if (is_case !== false) {
                        offsets += is_case
                    }

                    // if (cells[2].innerHTML.includes("based on type")) {
                    // offsets+= "// CASE"
                    // }
                    let offsetamount = "___$$$___"
                    if (cells[2].innerHTML.includes("based on amount")) {
                        let split_array = cells[2].innerHTML.split("based on amount [")
                        if (split_array.length === 1) {
                            offsetamount = '???'
                        } else {
                            offsetamount = split_array[1].split("]")[0].trim()
                        }
                    }

                    offsets += `
for (let ${is_ii} = 0; ${is_ii} < u32(o + ${offsetamount}); ${is_ii}++) {
    im_` + tableid + `(u32(o + ${offset}) + (${is_ii} * ${multilink_amount}) + g.m, ${is_ii}, x[${is_i}].section_` + offset + `);
}\n`;
                } else if (description === '0') {} else {

                    if (cells[2].innerHTML.includes("based on type")) {
                        offsets += is_case
                        jsFunction += `    section_` + offset + `: {s:0},\n`;
                    } else if (cells[2].innerHTML.includes("href")) {
                        let tableid = cells[2].innerHTML.split("href")[1].split("#")[1].split(`"`)[0].trim()
                        // jsFunction += `    section_` + offset + `: [???? 3],\n`;
                        jsFunction += `    section_${offset} : ["${check_if_in_list_sec_id_list(tableid, true)}"],\n`;
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
        jsFunction += '};\n';
        if (offsets === '') {
            if (is_i === 0) {
                // jsFunction += am_bytes + `\n}\n`
                jsFunction += `\n}\n`
            } else {
                jsFunction += `\n}\n`
            }
        } else {
            if (is_i === 0 || i === 0) {
                // jsFunction += `\n ${offsets} ${am_bytes}\n}\n`
                jsFunction += `\n}\n`
            } else {
                // jsFunction += `\n ${offsets}\n}\n`
                jsFunction += `\n}\n`
            }

        }

    }
    // console.log(jsFunction)

    return jsFunction

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
            jsFunction += `    texture_` + offset + `: "texture_patch",\n`;
        } else if (cells.toLowerCase().includes("animation")) {
            jsFunction += `    animation_` + offset + `: "animation_patch",\n`;
        } else if (cells.toLowerCase().includes("sound")) {
            jsFunction += `    sound_` + offset + `: "sound_patch",\n`;
        } else if (cells.toLowerCase().includes("model")) {
            jsFunction += `    model_` + offset + `: "model_patch",\n`;
        } else {
            jsFunction += `    ${propertyName}: ${type}(o + ${offset}),//patch?\n`;
        }
    }

}

function html_to_sec_list() {
    let html = ""
    for (let section of function_sec_id_name) {
        html += `
    case '${section.sec_id}':
        return "${section.name}"
    break`
    }
    html += ""
    return html
}

function html_to_export(inputHtml) {
    // also importer
    // globalThis.function_sec_id_name = []
    // let import_html = html_to_import(inputHtml)
    // let edit_html = html_to_edit(inputHtml)
    // let info_html = html_to_info(inputHtml)
    // let sec_id_html = html_to_sec_list(inputHtml)
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
                const offset = String(parseInt(cells[0].textContent));
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
                                let check_if_mys = cells[2].innerHTML.split(`href="#`)[1].split(`"`)[0].trim()
                                if (check_if_mys.endsWith("mysterious")) {
                                    description = 'multi offset'
                                    ishook = "mysterious"
                                } else {
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
                            if (String(parseInt(tabletds[i].innerText.trim(), 10)) === typeoffset) {
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

                        // offsets += `u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
                    }
                    // if (cells[2].innerHTML.includes("based on type")) {
                    // offsets += `// CASE // u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; \n`;
                    // }else{
                    // }

                } else if (description === 'unordered') {
                    let tableid = cells[2].children[0].href.split("#")[1].trim()
                    let is_ordered = getisordered(tableid)

                    //     e = ex_ml(x.unordered_frame_font_60, 
                    // g.frame_font_array,
                    // ex_frame_font, 
                    // g.unordered_ref.frame_font, o + 60,
                    // e,'down');

                    offsets += `    e = ex_ml(x.` + is_ordered + `ordered_` + tableid + "_" + offset + `,g.` + tableid + `_array ,ex_` + tableid + `,g.` + is_ordered + `ordered_ref.` + tableid + `, o + ${offset}, e, 'down');\n`

                    // offsets += `    e = ex_ml(x.` + is_ordered + `ordered_` + tableid + "_" + offset + `,ex_` + tableid + `,g.`  + is_ordered + `ordered_ref.` + tableid + `, o + ${offset}, e, 'down');\n`
                    // offsets += `x[${is_i}].` + is_ordered + `ordered_` + tableid + "_" + offset + ` = in_ml(u32(o + ${offset}), g.${tableid}_array, im_` + tableid + `, g.` + is_ordered + `ordered_ref.${tableid});\n`;
                } else if (description === 'multi offset') {

                    switch (ishook) {
                    case "mysterious":
                        multilink_amount = "64"
                        break
                    }

                    let tableid = cells[2].children[0].href.split("#")[1]

                    // jsFunction += `    section_` + offset + `: [],\n`;

                    let is_ii = 'ii'
                    is_i === 0 ? is_ii = 'i' : 0;

                    if (is_case !== false) {
                        offsets += is_case
                    }

                    // if (cells[2].innerHTML.includes("based on type")) {
                    // offsets+= "// CASE"
                    // }
                    let offsetamount = "___$$$___"
                    if (cells[2].innerHTML.includes("based on amount")) {
                        let split_array = cells[2].innerHTML.split("based on amount [")
                        if (split_array.length === 1) {
                            offsetamount = '???'
                        } else {
                            offsetamount = split_array[1].split("]")[0].trim()
                        }
                    }
                    // offsets+=''

                    // xfor = '\n'
                    // xis = e.split("x.push")[1].split("});")[1].trim().split('for')
                    // for (let i = 0; i < xis.length; i++) {
                    //     if (xis[i].includes("let")) {

                    //         xis1 = xis[i].split('\n')
                    //         let name = xis1[1].split("im")[1].split("(u")[0].trim()
                    //         // functionname
                    //         let offsetx = xis1[1].split('u32(o +')[1].split(")")[0].trim()
                    //         // offset
                    //         let amount = xis1[1].split('*')[1].split(')')[0].trim()
                    //         // amount
                    //         let amount_position = xis1[0].split('\n')[0].split("u32(o + ")[1].split(")")[0].trim()
                    //         // amount offsets
                    //         // position
                    //         let x_ = xis1[1].split(');')[0].split("]")[1].trim()
                    //         // x
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

                    //                     offsets += `
                    // for (let ${is_ii} = 0; ${is_ii} < u32(o + ${offsetamount}); ${is_ii}++) {
                    //     im_` + tableid + `(u32(o + ${offset}) + (${is_ii} * ${multilink_amount}) + g.m, ${is_ii}, x[${is_i}].section_` + offset + `);
                    // }\n`;
                } else if (description === '0') {} else {

                    if (cells[2].innerHTML.includes("based on type")) {
                        offsets += is_case
                        // jsFunction += `    section_` + offset + `: [],\n`;
                    } else if (cells[2].innerHTML.includes("href")) {
                        let tableid = cells[2].innerHTML.split("href")[1].split("#")[1].split(`"`)[0].trim()
                        // jsFunction += `    section_` + offset + `: [],\n`;
                        //     e = ex_s_offset(o + 48, e, ex_link_demo, x.section_48, 'down')
                        offsets += `e = ex_s_offset(o + ${offset}, e, ex_` + tableid + `,x.section_` + offset + `, 'down');\n`
                        // offsets += `u32(o + ${offset}) ? im_` + tableid + `(u32(o + ${offset}) + g.m,x[${is_i}]` + ".section_" + offset + `) : 0; // offset? \n`;
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

        let xdebug = `\n    g.debug ? ex_debug(o, x.sec_id) : 0;\n`
        // for (let i = 0; i < 4; i++) {
        //     let a = Math.floor(Math.random() * 255)
        //     while (a < 48 || a > 122 || a === 92 || a === 96) {
        //         a = Math.floor(Math.random() * 255)
        //     }
        //     xdebug += String.fromCharCode(a)
        // }
        // xdebug += `") : 0;\n`

        offsets += xdebug + `    return e`

        // return x[0].id

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
    // console.log(edit_html)
    return jsFunction

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

function html_to_all_ordered(inputHtml) {
    let ordered = inputHtml.split('<p>The first part of the ordered list depends on the type of file</p>')[1]
    unordered = ordered.split('unordered_list">Unordered List</h2>')[0]
    let array_h2_split = unordered.split('<h2 id=')
    let array_list_first_entry = true;
    let first_table = true
    let array_list_of_sections = []
    let string_html_section = ''
    for (let string_table of array_h2_split) {
        if (string_table.includes("<table")) {
            if (string_table.includes("linked to by:<br>")) {
                if (array_list_first_entry) {
                    array_list_first_entry = false
                    string_html_section += "<h2 id=" + string_table
                } else {
                    array_list_of_sections.push(string_html_section)
                    string_html_section = ''
                    string_html_section += "<h2 id=" + string_table
                }

            } else {
                if (first_table === true) {
                    first_table = false
                } else {
                    string_html_section += "<h2 id=" + string_table
                }
            }
        }
    }
    array_list_of_sections.push(string_html_section)

    unordered = inputHtml.split('unordered_list">Unordered List</h2>')[1]
    unordered = unordered.split('offset_patch_list">Offset Patch List')[0]

    array_h2_split = unordered.split('<h2 id=')
    array_list_first_entry = true;
    string_html_section = ''
    for (let string_table of array_h2_split) {
        if (string_table.includes("<table")) {
            if (string_table.includes("linked to by:<br>")) {
                if (array_list_first_entry) {
                    array_list_first_entry = false
                    string_html_section += "<h2 id=" + string_table
                } else {
                    array_list_of_sections.push(string_html_section)
                    string_html_section = ''
                    string_html_section += "<h2 id=" + string_table
                }

            } else {
                string_html_section += "<h2 id=" + string_table
            }
        }
    }
    array_list_of_sections.push(string_html_section)

    let import_html = ''
    let edit_html = ''
    let info_html = ''
    let sec_id_html = ''
    let export_id_html = ''
    for (let section of array_list_of_sections) {
        globalThis.function_sec_id_name = []
        import_html += html_to_import(section)
        edit_html += html_to_edit(section)
        info_html += html_to_info(section)
        sec_id_html += html_to_sec_list(section)
        export_id_html += html_to_export(section)
    }

    let list = get_print_ordered_list_functions(inputHtml)
    let world = html_to_world_sec(inputHtml)

    let world_html = world.import_html + world.export_id_html

    return {
        import_html: import_html,
        edit_html: edit_html,
        info_html: info_html,
        sec_id_html: sec_id_html,
        export_id_html: export_id_html,
        list: list,
        world: world_html,
    }

}

function html_to_all_ordered_sec(inputHtml) {
    let ordered = inputHtml.split('<p>The first part of the ordered list depends on the type of file</p>')[1]
    unordered = ordered.split('unordered_list">Unordered List</h2>')[0]
    let array_h2_split = unordered.split('<h2 id=')
    let array_list_first_entry = true;
    let first_table = true
    let array_list_of_sections = []
    let string_html_section = ''
    for (let string_table of array_h2_split) {
        if (string_table.includes("<table")) {
            if (string_table.includes("linked to by:<br>")) {
                if (array_list_first_entry) {
                    array_list_first_entry = false
                    string_html_section += "<h2 id=" + string_table
                } else {
                    array_list_of_sections.push(string_html_section)
                    string_html_section = ''
                    string_html_section += "<h2 id=" + string_table
                }

            } else {
                if (first_table === true) {
                    first_table = false
                } else {
                    string_html_section += "<h2 id=" + string_table
                }
            }
        }
    }
    array_list_of_sections.push(string_html_section)
    let import_html = ''
    let edit_html = ''
    let info_html = ''
    let sec_id_html = ''
    let export_id_html = ''
    for (let section of array_list_of_sections) {
        globalThis.function_sec_id_name = []
        import_html += html_to_import(section)
        edit_html += html_to_edit(section)
        info_html += html_to_info(section)
        sec_id_html += html_to_sec_list(section)
        export_id_html += html_to_export(section)
    }

    return {
        import_html: import_html,
        edit_html: edit_html,
        info_html: info_html,
        sec_id_html: sec_id_html,
        export_id_html: export_id_html,
    }

}
function html_to_all_unordered_sec(inputHtml) {
    let unordered = inputHtml.split('unordered_list">Unordered List</h2>')[1]
    // unordered = unordered.split('</section>')[0]
    unordered = unordered.split('offset_patch_list">Offset Patch List')[0]

    let array_h2_split = unordered.split('<h2 id=')
    let array_list_first_entry = true;
    let array_list_of_sections = []
    let string_html_section = ''
    for (let string_table of array_h2_split) {
        if (string_table.includes("<table")) {
            if (string_table.includes("linked to by:<br>")) {
                if (array_list_first_entry) {
                    array_list_first_entry = false
                    string_html_section += "<h2 id=" + string_table
                } else {
                    array_list_of_sections.push(string_html_section)
                    string_html_section = ''
                    string_html_section += "<h2 id=" + string_table
                }

            } else {
                string_html_section += "<h2 id=" + string_table
            }
        }
    }
    array_list_of_sections.push(string_html_section)

    // console.log(string_html_section)

    let import_html = ''
    let edit_html = ''
    let info_html = ''
    let sec_id_html = ''
    let export_id_html = ''
    for (let section of array_list_of_sections) {
        globalThis.function_sec_id_name = []
        import_html += html_to_import(section)
        edit_html += html_to_edit(section)
        info_html += html_to_info(section)
        sec_id_html += html_to_sec_list(section)
        export_id_html += html_to_export(section)
    }

    return {
        import_html: import_html,
        edit_html: edit_html,
        info_html: info_html,
        sec_id_html: sec_id_html,
        export_id_html: export_id_html,
    }

}

function html_to_world_sec(inputHtml) {
    let ordered = inputHtml.split('File Specific Section</h2>')[1]
    ordered = ordered.split('unordered_list">Unordered List</h2>')[0]

    let array_h2_split = ordered.split('<h2 id=')
    let array_list_first_entry = true;
    let array_list_of_sections = []
    let string_html_section = ''
    for (let string_table of array_h2_split) {
        let string_check_first_line = string_table.split('\n')[0]
        if (string_check_first_line.includes("world")) {
            if (string_table.includes("<table")) {
                string_html_section += "<h2 id=" + string_table
            }
        }

    }
    array_list_of_sections.push(string_html_section)

    // console.log(string_html_section)

    let import_html = ''
    let edit_html = ''
    let info_html = ''
    let sec_id_html = ''
    let export_id_html = ''
    for (let section of array_list_of_sections) {
        globalThis.function_sec_id_name = []
        import_html += html_to_import(section)
        edit_html += html_to_edit(section)
        info_html += html_to_info(section)
        sec_id_html += html_to_sec_list(section)
        export_id_html += html_to_export(section)
    }

    return {
        import_html: import_html,
        edit_html: edit_html,
        info_html: info_html,
        sec_id_html: sec_id_html,
        export_id_html: export_id_html,
    }

}

function html_to_listed_sec(inputHtml) {
    globalThis.function_sec_id_name = []
    let import_html = html_to_import(inputHtml)
    let edit_html = html_to_edit(inputHtml)
    let info_html = html_to_info(inputHtml)
    let sec_id_html = html_to_sec_list(inputHtml)
    let export_id_html = html_to_export(inputHtml)

    return {
        import_html: import_html,
        edit_html: edit_html,
        info_html: info_html,
        sec_id_html: sec_id_html,
        export_id_html: export_id_html,
    }

}

function check_if_in_list_sec_id_list(str_functionName, is_info=false) {

    let str_random = ''
    let in_list = false
    let in_list_i = 0
    for (let i = 0; i < function_sec_id_name.length; i++) {
        if (function_sec_id_name[i].name === str_functionName) {
            in_list_i = i
            i = function_sec_id_name.length + 1
            in_list = true;
        }
    }

    if (in_list) {
        str_random += function_sec_id_name[in_list_i].sec_id
    } else {
        if (is_info === true) {
            return "change this"
        } else {

            let str_temp_random = ''
            for (let i = 0; i < 4; i++) {
                let a = Math.floor(Math.random() * 255)
                while (a < 48 || a > 122 || a === 92 || a === 96) {
                    a = Math.floor(Math.random() * 255)
                }
                str_temp_random += String.fromCharCode(a)
            }
            str_random = str_temp_random

            function_sec_id_name.push({
                name: str_functionName,
                sec_id: str_temp_random,
            })
        }
    }
    return str_random
}

function format_full_doc(string) {

    return
}

function remove_hr_space(html) {

    let if_extra_lines = true;
    let new_html = html
    while (if_extra_lines) {
        if (html.includes("<hr>\n\n")) {
            new_html = html.replaceAll('<hr>\n\n', '<hr>\n')
        } else {
            if_extra_lines = false
        }
    }

    return new_html

}

function replace_switch(str_html) {
    let split = str_html.split('\n')
    let new_html = ""
    for (let i = 0; i < split.length; i++) {
        if (split[i].includes('<a')) {
            let padding = "                "
            if (split[i].includes("&nbsp;")) {

                let temp_split = split[i].split("&nbsp;")
                temp_split = temp_split[1].split("<a")

                new_html += padding + "&nbsp;<a" + temp_split[1].replace(`">`, `">${temp_split[0].trim()} `)

            } else {
                let temp_split = split[i].split("<a")

                new_html += padding + "<a" + temp_split[1].replace(`">`, `">${temp_split[0].trim()} `)
            }

        } else {
            new_html += split[i]
            // null
        }
        new_html += "\n"

    }
    return new_html
}

function find_get_string_from_js_file(string) {

    let string_new_value = string.split('\n')

    let string_return = ''
    let i = 0
    for (let line of string_new_value) {

        if (line !== "") {
            if (line.includes("get_string")) {
                let new_line = line?.replace('function get_', '')
                // new_line = new_line.replace('(o) {','')
                new_line = new_line.split('(o)')[0]
                let split_line = new_line.split('_')
                let last_num = split_line[split_line.length - 1]
                split_line.pop()
                split_line = split_line.join('_')
                string_return += `LINE: ${i} - ${split_line} [${last_num}]\n`
            }
        }

        i++
    }
    return string_return
}

function doc_replace_offsets_to_string(doc_string, js_string) {
    let something_changed = false
    let split_js_string = js_string.split('\n')
    for (let line of split_js_string) {
        if (line !== "") {

            line = line.split(' - ')[1].trim()
            let split_line = line.split('[')
            let last_line = split_line[1].replace(']', '')
            let final_line = split_line[0].trim() + "_" + last_line

            let match_string = `<a href="#${final_line}">offset</a>`

            if (doc_string.includes(match_string)) {
                something_changed = true
                doc_string = doc_string.replace(match_string, "offset string")

            }

        }

    }
    if (something_changed === true) {
        return doc_string
    } else {
        return "no change"
    }

}

function doc_generate_linked_to_string(doc_string, string_name) {
    // split on <h2
    // if includes (value)
    //     split on <tr>
    //     end </tr>
    let html_string = ''
    array_hr_list = doc_string.split('<hr>')
    for (let string_hr of array_hr_list) {
        if (string_hr.includes(`(${string_name})`)) {
            let table_name = string_hr.split('<h2 id="')[1]
            table_name = table_name.split(`">`)[0]
            let array_tr_list = string_hr.split('<tr>')
            for (let string_tr of array_tr_list) {
                if (string_tr.includes(`(${string_name})`)) {
                    let offset = string_tr.split('<td>')[1]
                    offset = offset.split('</td>')[0]

                    html_string += `<a href="#${table_name}">${table_name} [${offset}]</a><br>\n`

                }
            }
        }
    }
    let html = `
<p>multi linked to by:<br>
    ${html_string}</p>`
    return html

}

function get_sha1_array_from_docs(string) {
    let tr_split = string.split("<tr>")

    let array_name = []
    let array_sha1 = []
    for (let tr_table of tr_split) {
        let section = tr_table.split('</tr>')[0]
        if (section.includes('<td>')) {
            let split_td = section.split('<td>')
            let td_name = split_td[1].split("</td>")[0]
            let td_sha1 = split_td[2].split("</td>")[0]

            array_name.push(`"${td_name}"`)
            array_sha1.push(`"${td_sha1}"`)
        } else {}
    }
    let html = `{
    name:[${array_name}],
    sha1:[${array_sha1}],
    }`

    return html

}

function get_array_view_functions() {
    let html = ''

    let array_versions = ['mm', 'hwvx_proto', 'hwvx_gc', 'hwvx_pc', 'hwvx_ps2', 'svtrb_pc', 'svtrb_psp', 'svtrb_ps2', 'pmwr_gc', 'pmwr_pc', 'pmwr_ps2_demo', 'pmwr_ps2', 'pmwr_psp', 'pmwr_xbox', 'bmg_demo', 'bmg_pc', 'bmg_wii', 'bcc_pc', 'bcc_wii']

    for (let string of array_versions) {

        html += `
function get_${string}_sec_id(string) {
    switch (string) {
    default:
        return null
    }
}
async function im_${string}_x(index) {
    x.push({
        sec_id: "AAAA",
        format: [],
        game: g.game,
        console: g.console,
        name: g.file_name,
    })

    // im_${string}_file_header(0, 0, x[index].format)
}

function ex_${string}_x(o, x) {

    g = {
        divisibility: 16,
        divisible_prev_value: [],
        type_string:g.type_string,
        debug: pk_debug,
        endian: g.endian,
        file_dir_type: 0,
        ordered_ref: 0,
        unordered_ref: 0,
        m: 0,
        oa: [],
        texture_patch_array: [],
        animation_patch_array: [],
        sound_patch_array: [],
        model_patch_array: [],
        tex_anims: 0,
        /*
        need to get arrays here
        */
    }

    globalThis.directory_buffer = new ArrayBuffer(268435455)

    buffer_array.push(directory_buffer)
    dynamic_buffer = directory_buffer

    let time_array = []
    let a = Date.now()

    // ex_${string}_file_header(o,x)

    time_array.push(Date.now() - a)

    console.pk_log("saved in " + time_array)

}

///////////////////////////////////////////////
`

    }

    return html
}

function generate_file_table_for_array_view() {
    let html = ''

    let array_versions = ['hwvx_proto', 'hwvx_gc', 'hwvx_pc', 'hwvx_ps2', 'svtrb_pc', 'svtrb_psp', 'svtrb_ps2', 'pmwr_gc', 'pmwr_pc', 'pmwr_ps2_demo', 'pmwr_ps2', 'pmwr_psp', 'pmwr_xbox', 'bmg_demo', 'bmg_pc', 'bmg_wii', 'bcc_pc', 'bcc_wii']

    for (let string of array_versions) {
        html += `   case 'gjbf':
        return "${string}_file_header"
        break


function im_${string}_file_header(o, i, x) {
    x.push({
        id: gen_id(),
        sec_id: "gjbf",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        directory: [],
    });

    let directory_offset = (u32(12) * 24) + 16

    let time_array = []
    for (let i = 0; i < u32(12); i++) {
        let a = Date.now()
        im_${string}_directory(16 + (i * 24), i, x[i].directory, directory_offset)
        time_array.push(Date.now() - a)
    }
    console.pk_log("saved in " + time_array)

    return x[i].id
    // 16 bytes;

}

function add_${string}_file_header() {
    return {
        id: gen_id(),
        sec_id: "gjbf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        directory: [],
    };

}

// 
function info_${string}_file_header() {
    return {
        sec_id: "gjbf",
        multi: 0,
        u32_0: {n:"magic 1"},
        u32_4: {n:"magic 2"},
        u32_8: {n:"version"},
        section_12: ["]7Zf"],
    };

}

function ex_${string}_file_header(o, x) {
    let e = o + 16
    su32(0, x.u32_0)
    su32(4, x.u32_4)
    su32(8, x.u32_8)
    su32(12, x[0].directory.length)

    let global = ((x[0].directory.length) * 24) + 16
    e = e + (x[0].directory.length * 24)

    let time_array = []
    for (let i = 0; i < x[0].directory.length; i++) {
        let a = Date.now()

        e = ex_${string}_directory(16 + (i * 24), e, x[0].directory[i], global)
        time_array.push(Date.now() - a)

    }

    console.pk_log("saved in " + time_array)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
//////////

`
    }
    return html

}

function generate_directory_table_for_file_view() {
    let html = ''

    let array_versions = ['hwvx_proto', 'hwvx_gc', 'svtrb_pc', ]

    for (let string of array_versions) {
        let is_geo_patch;
        let is_geo_patch_info;
        let is_geo_patch_export;
        if (string === "svtrb_pc") {
            is_geo_patch_import = `u32(o + 16) ? im_${string}_datapack(next_offset + u32(o + 20), 0, x[i].section_datapack) : 0;`
            is_geo_patch_info = "['E@3Z']"
            is_geo_patch_export = `e = ex_${string}_datapack(16 + (i * 24), e, x[0].section_datapack[i], global)
`
        } else {
            is_geo_patch_import = `
    switch (u32(o + 4)) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 8:
    case 9:
    case 10:
        u32(o + 16) ? im_${string}_datapack(next_offset + u32(o + 20), 0, x[i].section_datapack) : 0;
        break;
    case 7:
        u32(o + 16) ? im_${string}_geo_datapack(next_offset + u32(o + 20), 0, x[i].section_datapack) : 0;
        break;
    }
`
            is_geo_patch_info = "{s: null}"
            is_geo_patch_export = `
switch (x.u32_4) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 8:
    case 9:
    case 10:
        e = ex_${string}_datapack(16 + (i * 24), e, x[0].section_datapack[i], global)
        break;
    case 7:
        e = ex_${string}_geo_datapack(16 + (i * 24), e, x[0].section_datapack[i], global)
        break;
    }

`
        }
        html += `    case ']7Zf':
        return "${string}_directory"
        break

function im_${string}_directory(o, i, x, global) {
    let next_offset = o + 24

       g = {
            divisible_prev_value: [],
            debug: pk_debug,
            type_string:g.type_string,
            game: g.game,
            console: g.console,
            file_version: u32(8),
            file_dir_type: 0,
            file_name: g.file_name,
            endian: g.endian,
            datapack_offset: 0,
            datapack_ref: 0,
            ordered_ref: 0,
            unordered_ref: 0,
            m: 0,
            texture_patch_ref: 0,
            animation_patch_ref: 0,
            sound_patch_ref: 0,
            model_patch_ref: 0,
            models_array: [],
               // other arrays heres 
          }

    g.file_dir_type = return_directory_type(u32(o + 4))

    x.push({
        id: gen_id(),
        sec_id: "]7Zf",
        u32_0: u32(o + 0),
        u32_4: u32(o + 4),
        u32_8: u32(o + 8),
        u32_12: u32(o + 12),
        u32_16: u32(o + 16),
        section_datapack: [],
    });

    ${is_geo_patch_import}
    return x[i].id
    // 24 bytes;

}

function add_${string}_directory() {
    return {
        id: gen_id(),
        sec_id: "]7Zf",
        u32_0: 0,
        u32_4: 0,
        u32_8: 0,
        u32_12: 0,
        u32_16: 0,
        section_datapack: [],
    };

}

function info_${string}_directory() {
    return {
        sec_id: "]7Zf",
        multi: 1,
        u32_0: {n:"version"},
        u32_4: {n:"file type"},
        u32_8:  {n:"index"},
        u32_12: 0,
        u32_16: {
             {n:"length"},
        },
        section_datapack: ${is_geo_patch_info},
    };

}


function ex_${string}_directory(o, e, x, global) {
    g.oa = []
    g.texture_patch_array = []
    g.animation_patch_array = []
    g.sound_patch_array = []
    g.model_patch_array = []
    // add other arrays heres later

    let ce = e
    g.file_dir_type = return_directory_type(x.u32_4)

    su32(o + 0, x.u32_0)
    su32(o + 4, x.u32_4)
    su32(o + 8, x.u32_8)
    su32(o + 12, x.u32_12)
    su32(o + 20, e - global)

    ${is_geo_patch_export}
    dynamic_buffer = directory_buffer
    su32(o + 16, datapack_buffer.byteLength + patch_buffer.byteLength + ordered_buffer.byteLength)

    g.debug ? ex_debug(o, x.sec_id) : 0;
    return e
}
///////////
`
    }
    return html

}

function get_sec_id_from_exdebug_funtion(string) {
    let string_sec_id_function = ''
    let array_functions = string.split("function ex_")

    let array_name = []
    let array_sec_id = []
    for (let string_function of array_functions) {
        if (string_function.includes(`g.debug ? ex_debug(o, "`)) {
            string_function = string_function.split(`") : 0;`)[0]
            let string_name = string_function.split(`(o,`)[0]
            let string_sec_id = string_function.split(`g.debug ? ex_debug(o, "`)[1]

            array_name.push(`"${string_name}"`)
            array_sec_id.push(`"${string_sec_id}"`)

            string_sec_id_function += `
    case '${string_sec_id}':
        return "pmwr_pc_${string_name}"
        break`
        }
    }

    let html = `{
    name:[${array_name}],
    sec_id:[${array_sec_id}],
    }`

    return html + string_sec_id_function

}

function get_format_replace_debug_id_with_sec_id(string) {
    let array_lines = string.split("\n")
    let string_new = ""

    for (let line of array_lines) {
        if (line.includes(`g.debug ? ex_debug(o, "`)) {
            line = `g.debug ? ex_debug(o, x.sec_id) : 0;`
        }
        string_new += line + "\n"
    }

    return string_new

}

function get_format_replace_x_with_sec_id(string_html, array_sec_ids) {

    let string_new = ''
    let array_split_html = string_html.split('function im_')

    for (let string_function of array_split_html) {
        let string_end = string_function.split('}')[0]
        let name = string_end.split('(o')[0]
        let index = array_sec_ids.name.indexOf(name)

        let sec_id = array_sec_ids.sec_id[index]

        string_function = string_function.replace('x.push({', `x.push({sec_id: "${sec_id}",`)

        string_new += `function im_${string_function}`
    }

    return string_new

}

function get_print_ordered_list_functions(string_html) {
    let get_type_string = string_html.split('<a class="link" href="#')[1]
    let string_type = get_type_string.split(`_file_header">`)[0]

    let ordered_list = string_html.split('in order the sections contained are:<br>')[1]
    ordered_list = ordered_list.split("<hr>")[0]
    let array_ordered_list = ordered_list.split(`<a href="#`)
    let string_ordered_list_arrays = ''
    let string_ordered_list_ex_function = ''
    let string_unordered_section_name = ''
    let string_file_specific_section_name = ''
    for (let tag of array_ordered_list) {
        if (tag.includes(string_type)) {
            let string_tag = tag.split(`">`)[0]
            string_ordered_list_arrays += `        ${string_tag}: [],\n`

            if (string_tag.includes('unordered')) {
                string_unordered_section_name = string_tag

            } else if (string_tag.includes('offset_patch_list')) {} else if (string_tag.includes('file_specific_section')) {
                string_file_specific_section_name = string_tag
            } else {
                string_ordered_list_ex_function += `
    if (g.ordered_ref.${string_tag}.length) {
        e = ex_ma(g.ordered_ref.${string_tag}, g.${string_tag}_array, ex_${string_tag}, e, g.m)
    }
`
            }

        }
    }

    let file_specific = string_html.split('Ordered List File Specific Section')[1]
    file_specific = file_specific.split('<hr>')[0]
    file_specific_tr = file_specific.split('<tr>')
    let string_file_type = ''
    let string_ex_file_type = ''
    let string_basic = ''
    for (let string_tr of file_specific_tr) {
        array_td = string_tr.split("<td>")
        if (array_td.length === 1) {// skip
        } else {

            let string_case = array_td[1]
            string_case = string_case.split('</td>')[0]
            string_case = string_case.split('=')[1].trim()

            if (array_td[2].includes('href="#')) {
                let string_function = array_td[2]
                string_function = string_function.split(`href="#`)[1]
                string_function = string_function.split(`">`)[0]
                if (string_basic.includes("basic")) {
                string_basic += `
        case "${string_case}":
            im_${string_function}(o, x[0].${string_file_specific_section_name})
            break
            `
                string_basic += `
        case "${string_case}":
                e = ex_${string_function}(o, x.${string_file_specific_section_name}[0])
            break
`                }
                string_file_type += `
        case "${string_case}":
            im_${string_function}(o, x[0].${string_file_specific_section_name})
            break
`
                string_ex_file_type += `
        case "${string_case}":
                e = ex_${string_function}(o, x.${string_file_specific_section_name}[0])
            break
`

            } else {// skip
            }
        }
    }

    let array_h2_split = string_html.split('<h2 id="')
    let string_unordered_list = ''
    let string_ex_unorderd_arrays = ''
    let string_g_array_ex = ''
    let string_generate_id_offset = ''
    for (let string_table of array_h2_split) {
        if (string_table.includes("<table")) {
            if (string_table.includes("linked to by:<br>")) {
                string_table = string_table.split(`">`)[0]
                string_unordered_list += `            ${string_table}: [],\n`
                string_ex_unorderd_arrays += `            ${string_table}_array: [],\n`
                string_g_array_ex += `            g.${string_table}_array = []\n`
                string_generate_id_offset += `            generate_id_offset_array(g.${string_table}_array = [], x.${string_table})\n`
            }
        }
    }

    let string_ordered_list_function = `
function im_${string_type}_ordered(o, x) {

    x.push({
        sec_id: "ordr",
        id: gen_id(),
    ${string_ordered_list_arrays}
    })

    im_${string_type}_unordered(o,x[0].${string_unordered_section_name})
    g.ordered_ref = x[0]

    switch (g.file_dir_type) {
    ${string_file_type}
    default:
        console.pk_log('file type is not set')
    }


}

function im_${string_type}_unordered(o,x) {
    x.push({
            sec_id: "4unr",
            ${string_unordered_list}
        })
    g.unordered_ref = x[0]

}

/*
in baisc
    switch (g.file_dir_type) {
    ${string_basic}
    default:
        console.pk_log('file type is not set')
    }
*/
export list:
${string_ex_unorderd_arrays}

g list:
${string_g_array_ex}

ex_ordered:

function ex_${string_type}_ordered(o, x) {
    globalThis.ordered_buffer = new ArrayBuffer(268435455)

    buffer_array.push(ordered_buffer)
    dynamic_buffer = ordered_buffer

    let aftero = o
    let e = o
    o = 0
    g.m = o
    g.unordered_ref = x.unordered[0]
    g.ordered_ref = x

    ex_${string_type}_unordered(x.unordered[0])

    switch (g.file_dir_type) {
    ${string_ex_file_type}
    default:
        console.pk_log('file type is not set')
    }

    let current_patch_list_divis = divisible(g.divisible_prev_value[0], g.divisible_prev_value[1])
    let patch_list_divis = divisible(g.divisible_prev_value[0] + 1, 4)
    e -= current_patch_list_divis
    e += patch_list_divis

    ordered_buffer = ordered_buffer.slice(0, e)

    buffer_array[buffer_array.length - 1] = ordered_buffer

    return e + aftero
}
function ex_${string_type}_unordered(x) {
${string_generate_id_offset}

}
function ex_${string_type}_ordered_list_layout(o) {

${string_ordered_list_ex_function}

}
/*
e = ex_${string_type}_ordered_list_layout(e)
place in basic_04 & world functions
`
    return string_ordered_list_function

}

function check_unordered_linked_to_sections(inputHtml) {
    let unordered = inputHtml.split('unordered_list">Unordered List</h2>')[1]
    // unordered = unordered.split('</section>')[0]
    unordered = unordered.split('offset_patch_list">Offset Patch List')[0]

    let array_h2_split = unordered.split('<h2 id=')
    let array_list_first_entry = true;
    let array_list_of_sections = []
    let string_html_section = ''
    for (let string_table of array_h2_split) {
        if (string_table.includes("<table")) {
            if (string_table.includes("linked to by:<br>")) {
                if (array_list_first_entry) {
                    array_list_first_entry = false
                    string_html_section += "<h2 id=" + string_table
                } else {
                    array_list_of_sections.push(string_html_section)
                    string_html_section = ''
                    string_html_section += "<h2 id=" + string_table
                }

            } else {
                string_html_section += "<h2 id=" + string_table
            }
        }
    }
    array_list_of_sections.push(string_html_section)

    let broke_array = 'broke list:'
    let list_of_linked_sections = '\n  <h4>just linked</h4> \n'
    let list_of_multi_linked_sections = '\n <h4>multi linked</h4> \n'
    for (let string_section of array_list_of_sections) {
        let array_h2_split = string_section.split('<h2 id="')
        let section_name = array_h2_split[1].split(`">`)[0]

        if (string_section.includes('multi linked to by:')) {
            list_of_multi_linked_sections += `<a href="#${section_name}">${section_name}</a><br>\n`
        } else {
            list_of_linked_sections += `<a href="#${section_name}">${section_name}</a><br>\n`
        }

        for (let string_table of array_h2_split) {
            if (string_table === "") {} else {

                let table_name = string_table.split(`">`)[0]

                if (table_name.includes(section_name)) {// skip
                } else {
                    broke_array += `table_name: ${table_name} | section_name: ${section_name}\n`
                }
            }
        }

    }
    return broke_array + list_of_multi_linked_sections + list_of_linked_sections
}

document.getElementById("format_text_button").addEventListener("click", format_button_clicked);
