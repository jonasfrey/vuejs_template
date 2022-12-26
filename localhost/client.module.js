import O_json_to_html from "https://unpkg.com/o_json_to_html@1.0.6/o_json_to_html.module.js"

var o_themes = 
{
    o_dark: {
        o_colors: {
            "o_background": {
                r: 22, 
                g: 22, 
                b: 22, 
                alpha: 0.9,
            },
            "o_foreground": {
                r: 222, 
                g: 222, 
                b: 222, 
                alpha: 0.9,
            },
            "o_alpha": {
                r: 0, 
                g: 0, 
                b: 0, 
                alpha: 0.9,
            },
            "o_beta": {
                r: 0, 
                g: 0, 
                b: 0, 
                alpha: 0.9,
            },
            "o_gamma": {
                r: 0, 
                g: 0, 
                b: 0, 
                alpha: 0.9,
            },
            "o_red": {
                r: 0, 
                g: 0, 
                b: 0, 
                alpha: 0.9,
            },
            "o_green": {
                r: 0, 
                g: 0, 
                b: 0, 
                alpha: 0.9,
            },
            "o_blue": {
                r: 0, 
                g: 0, 
                b: 0, 
                alpha: 0.9,
            },
        }
    }
}
var o_rulesets = {
    o_box_shadow: {
        "box-shadow":"0px 3px 4px 4px rgb(0 0 0 / 50%)"
    }
};
var a_o_ruleset_spacing = [1,2,3].reduce((a,n)=>
    {
        a.push(...[
            {
            "s_selector": ` .p-${n}`, 
            o_rules:{"padding": `${n/2}rem`}
            },
            {
                "s_selector": ` .px-${n}`, 
                o_rules:{"padding": `${n/2}rem 0`}
            },
            {
                "s_selector": ` .py-${n}`, 
                o_rules:{"padding": `0 ${n/2}rem`}
            },
        ]);
        ["t","r","b","l"].forEach((s,n_i) => {
            var a_s_padding = ["0", "0", "0", "0"];
            a_s_padding[n_i] = `${n/2}rem`
            a.push(
                {
                    "s_selector": ` .p${s}-${n}`, 
                    o_rules:{
                        "padding": a_s_padding.join(" ")
                    }   
                },
            )
        });
        return a
    },
    []
)
var o = {
    o_functions: {
        f_s_color_to_rgba(o_color){
            return `rgba(${o_color.r},${o_color.g},${o_color.b},${o_color.alpha})`
        }
    },
    o_colors: o_themes.o_dark.o_colors, 
    o_css: {
        o_ruleset: 
        {
            "s_selector": " body", 
                o_rules:{
                        "font-family": "arial",
                        "margin": 0, 
                        "padding": 0,
                        "font-size": "1.2rem", 
                        "background-color": "${o_functions.f_s_color_to_rgba(o_colors.o_background)}",
                        "color": "${o_functions.f_s_color_to_rgba(o_colors.o_foreground)}",
                        "display": "flex", 
                        "align-items": "center", 
                        "justify-content": "center", 
                },
                a_o_ruleset: [
                    {
                        "s_selector": " *", 
                        o_rules:{
                            "box-sizing": "border-box",
                            "background-color": "${o_functions.f_s_color_to_rgba(o_colors.o_background)}",
                            "color": "${o_functions.f_s_color_to_rgba(o_colors.o_foreground)}",
                        }
                    },
                    ...a_o_ruleset_spacing,
                    {
                        "s_selector": " div, img", 
                        o_rules:{
                            "width": "100%"
                        }
                    },
                    {
                        "s_selector": " .d_flex", 
                        o_rules:{
                            "display":"flex"
                        }
                    },
                    {
                        s_selector: ' .a_o_topic', 
                        o_rules: {
                            "align-items": "center",
                            "display": "flex", 
                            "flex-direction": "column"
                        },
                        a_o_ruleset: [
                            {
                                s_selector: " .o_user", 
                                o_rules: {
                                    "display": "flex",
                                }
                            },
                            {
                                s_selector: " .o_topic", 
                                o_rules: {
                                    "min-height": "100vh",
                                    "border-top": "2px solid white",
                                    "display":" flex",
                                    "align-items":" center",
                                    "justify-content":" center",
                                }, 
                                a_o_ruleset: [
                                    {
                                        s_selector: " .o_content", 
                                        o_rules: {
                                            "max-width": "500px",
                                        },  
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        s_selector: " #app", 
                        o_rules:{
                            "display": "flex",
                            "width": "100vw",
                        }
                    },
                    {
                        s_selector: " .o_top_bar",
                        a_o_ruleset: [
                            {
                                s_selector:".fixed",
                                o_rules: {
                                    "position": "fixed"
                                }
                            }, 
                            {
                                s_selector:".visibility_hidden",
                                o_rules: {
                                    "visibility": "hidden"
                                }
                            }, 
                            {
                                s_selector: " .o_scroll_progress", 
                                o_rules:{
                                    "height":" 3px",
                                    "background":" red",
                                    "position":" absolute",
                                    "left":" 0",
                                    "bottom":" 0",
                                }
                            }
                        ],
                        o_rules:{
                            "color": "black", 
                            width: "100%",
                            display: "flex", 
                            padding:"1rem", 
                            "justify-content":"space-between",
                            ...o_rulesets.o_box_shadow
                        },
                    },
                ]
        }
        
    }
}
import {O_json_to_css} from "https://deno.land/x/o_json_to_css@0.1/O_json_to_css.module.js";

import { f_s_json_b64__from_o} from "./f_s_json_b64__from_o.module.js";
import { f_a_o_missing_prop__recursive_in_first_arg_object } from "./f_a_o_missing_prop__recursive_in_first_arg_object.module.js";
import { f_o_from__s_json_b64} from "./f_o_from__s_json_b64.module.js";

var o_json_to_css = new O_json_to_css(o); 

await o_json_to_css.f_render();


//development mode vue
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js'
//production mode vue 
//  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.min.js'


var o_json_to_html = new O_json_to_html()


document.getElementById("app").append(
    o_json_to_html.f_json_to_html(
        {
            s_t:"div", 
            //'s_inner_html': "Innerhtml working!",
            a_c: [
                {
                    s_t:"button", 
                    "v-on:click": "(o_data.b_bool = !o_data.b_bool)",
                    'v-html': "(o_data.b_bool) ? 'true' : 'false'"
                },
            ]
        },
    )
);

class O_object_test{
    constructor(
        b_bool,
        n_num,
        s_string 
        ){
            this.b_bool = b_bool;
            this.n_num = n_num;
            this.s_string = s_string;
    }
}
// console.log(document.getElementById("app").innerHTML)
window.o_vue_object = new Vue({
    el: '#app',

    data (){
        return {
            o_data: {
                b_bool: true, 
                n_num: 1, 
                s_string: "hello world", 
                o_object: new O_object_test(false, 10, 'test')
            }
        }
    },
    updated: async function(){
        var o_self = this;
        o_self.f_write_o_to_url_fragment(o_self.o_data);
    },
    mounted:async function () {
        var o_self = this;
        var o_data_from_url_fragment = o_self.f_o_data__from_url_fragment();
        if(o_data_from_url_fragment){
            var b_o_data_compatible = o_self.f_b_o_data_compatible(o_data_from_url_fragment, o_self.o_data);
            if(b_o_data_compatible){
                o_self.o_data = o_data_from_url_fragment;
            }
        }
    },
    watch: {
    },
    methods: {
        f_b_o_data_compatible: function(
            o_data_from_url_fragment, 
            o_self_o_data
        ){
            // if you are developing and the url you are reloading does still contain old data(property names etc.)
            // it could overwrite your new developed data and 
            // lead to undefined behaviour 
            // so we have to check if the data is the same
            console.log(o_data_from_url_fragment);
            console.log(o_self_o_data);
            var a_o_missing_prop__recursive_in_first_arg_object = f_a_o_missing_prop__recursive_in_first_arg_object(
                o_data_from_url_fragment, 
                o_self_o_data
            );
            if(a_o_missing_prop__recursive_in_first_arg_object.length > 0){
                console.warn(`the object ${o_data_from_url_fragment} encoded in the url (...#${window.location.hash.substring(1,10)}...), is missing the following properties: `)
                console.warn(a_o_missing_prop__recursive_in_first_arg_object);
                return false;
            }
            return true;
        },
        f_write_o_to_url_fragment: function(o){
            var o_self = this;
            window.location.hash = o_self.f_s_json_b64__from_o(o);
        },
        f_o_data__from_url_fragment: function(){
            var o_self = this;
            if (window.location.hash != '') {
                var s_json_b64 = window.location.hash.substring(1,);
                var o_data = o_self.f_o_from__s_json_b64(s_json_b64);
            }
            return o_data;
        },
        f_s_json_b64__from_o: f_s_json_b64__from_o, 
        f_o_from__s_json_b64: f_o_from__s_json_b64
    },
    computed: {
    }
})

