// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var open = require("open");

let outp = document.getElementById('out2');
let outpBox = document.getElementById('outp');
let inp = document.getElementById('inp');

convert = () => {
    let input = document.getElementById('inp').value;
    input = input.toUpperCase();
    for(let i = 0; i < input.length / 4; i++){
        input = input.replace("{DEFAULT}", ' <p style="color: #FEFEFE; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
        input = input.replace("{RED}", ' <p style="color: #FE4040; display: inline-block; margin:0; padding: 0; margin-right: 5px;"> ');
        input = input.replace("{LIGHTRED}", ' <p style="color: #EA4B4B; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
        input = input.replace("{DARKRED}", ' <p style="color: #CF0000; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
        input = input.replace("{BLUEGRAY}", ' <p style="color: #AFC2D8; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
        input = input.replace("{BLUE}", ' <p style="color: #5E97D8; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
        input = input.replace("{DARKBLUE}", ' <p style="color: #4B69FE; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
        input = input.replace("{PURPLE}", ' <p style="color: #B980EF; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
        input = input.replace("{ORCHID}", ' <p style="color: #D22CE5; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
        input = input.replace("{YELLOW}", ' <p style="color: #ECE37A; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
        input = input.replace("{GOLD}", ' <p style="color: #E3AD39; display: inline-block; margin:0; padding: 0; margin-right: 5px;"> ');
        input = input.replace("{LIGHTGREEN}", ' <p style="color: #BEFE8F; display: inline-block; margin:0; padding: 0; margin-right: 5px;"  ');
        input = input.replace("{GREEN}", ' <p style="color: #40FE40; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
        input = input.replace("{LIME}", ' <p style="color: #A1FE47; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
        input = input.replace("{GREY}", ' <p style="color: #C4C9CF; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
        input = input.replace("{GREY2}", ' <p style="color: #AFC2D8; display: inline-block; margin:0; padding: 0; margin-right: 5px;">  ');
    
    }

    outp.innerHTML = input;
    outpBox.innerHTML = input;
}

openGitHub = () =>{
    open("https://github.com/ThunbergOlle/colorvariables-preview-sourcemod/issues");
}
