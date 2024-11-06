const msg = document.getElementById("msg");

const num =(i)=>{
    msg.textContent = msg.textContent + i;
}

const delet =()=>{
    const newMsg = msg.textContent;
    const ArryMag = newMsg.split('');
    ArryMag.pop();
    msg.textContent = ArryMag.join("")



}

const shift=()=>{
    document.getElementById("q-row").setAttribute("style","display:flex")
    document.getElementById("a-row").setAttribute("style","display:flex")
    document.getElementById("z-row").setAttribute("style","display:flex")
    document.getElementById("Q-row").setAttribute("style","display:none;")
    document.getElementById("A-row").setAttribute("style","display:none;")
    document.getElementById("Z-row").setAttribute("style","display:none;")

    document.getElementById("shift").setAttribute("style","display:none;")
    document.getElementById("hshift").setAttribute("style","display:block;font-weight:700;")
}
const hshift=()=>{
    document.getElementById("q-row").setAttribute("style","display:none")
    document.getElementById("a-row").setAttribute("style","display:none")
    document.getElementById("z-row").setAttribute("style","display:none")
    document.getElementById("Q-row").setAttribute("style","display:flex;")
    document.getElementById("A-row").setAttribute("style","display:flex;")
    document.getElementById("Z-row").setAttribute("style","display:flex;")

    document.getElementById("shift").setAttribute("style","display:block;")
    document.getElementById("hshift").setAttribute("style","display:none;")
}

