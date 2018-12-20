// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let outp = document.getElementById('out2');
let outpBox = document.getElementById('outp');
convert = () => {
    let input = document.getElementById('inp').value;

    for(let i = 0; i < input.length / 4; i++){
        input = input.replace("{default}", ' <p style="color: #FEFEFE; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{red}", ' <p style="color: #FE4040; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{lightred}", ' <p style="color: #EA4B4B; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{darkred}", ' <p style="color: #CF0000; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{bluegray}", ' <p style="color: #AFC2D8; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{blue}", ' <p style="color: #5E97D8; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{darkblue}", ' <p style="color: #4B69FE; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{purple}", ' <p style="color: #B980EF; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{orchid}", ' <p style="color: #D22CE5; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{yellow}", ' <p style="color: #ECE37A; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{gold}", ' <p style="color: #E3AD39; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{lightgreen}", ' <p style="color: #BEFE8F; display: inline-block; margin:0; padding: 0;" ');
        input = input.replace("{lightgreen}", ' <p style="color: #BEFE8F; display: inline-block; margin:0; padding: 0;" ');
        input = input.replace("{green}", ' <p style="color: #40FE40; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{lime}", ' <p style="color: #A1FE47; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{grey}", ' <p style="color: #C4C9CF; display: inline-block; margin:0; padding: 0;"> ');
        input = input.replace("{grey2}", ' <p style="color: #AFC2D8; display: inline-block; margin:0; padding: 0;"> ');
    
    }

    outp.innerHTML = input;
    outpBox.innerHTML = input;
}