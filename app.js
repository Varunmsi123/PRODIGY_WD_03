let a = document.querySelector("#box1");
let b = document.querySelector("#box2");
let c = document.querySelector("#box3");
let d = document.querySelector("#box4");
let e = document.querySelector("#box5");
let f = document.querySelector("#box6");
let g = document.querySelector("#box7");
let h = document.querySelector("#box8");
let i = document.querySelector("#box9");
let j = document.querySelector("#reset");
let k = document.querySelector("#player1");
let l = document.querySelector("#player2");
let m = document.querySelector("#win");

let str = prompt("Enter name of 1st Player :- ");
let str1 = prompt("Enter name of 2nd Player :- ");

k.innerText = str;
l.innerText = str1;

var count = 0;
a.onclick = ()=>{
    if(count%2==0){
        a.innerText = "X";
        count++;
        box1.disabled = true;
        check();
    }else{
        a.innerText = "O";
        count++;
        box1.disabled = true;
        check();
    }
}

b.onclick = ()=>{
    if(count%2==0){
        b.innerText = "X";
        count++;
        box2.disabled = true;
        check();
    }else{
        b.innerText = "O";
        count++;
        box2.disabled = true;
        check();
    }
}

c.onclick = ()=>{
    if(count%2==0){
        c.innerText = "X";
        count++;
        box3.disabled = true;
        check();
    }else{
        c.innerText = "O";
        count++;
        box3.disabled = true;
        check();
    }
}

d.onclick = ()=>{
    if(count%2==0){
        d.innerText = "X";
        count++;
        box4.disabled = true;
        check();
    }else{
        d.innerText = "O";
        count++;
        box4.disabled = true;
        check();
    }
}

e.onclick = ()=>{
    if(count%2==0){
        e.innerText = "X";
        count++;
        box5.disabled = true;
        check();
    }else{
        e.innerText = "O";
        count++;
        box5.disabled = true;
        check();
    }
}

f.onclick = ()=>{
    if(count%2==0){
        f.innerText = "X";
        count++;
        box6.disabled = true;
        check();
    }else{
        f.innerText = "O";
        count++;
        box6.disabled = true;
        check();
    }
}

g.onclick = ()=>{
    if(count%2==0){
        g.innerText = "X";
        count++;
        box7.disabled = true;
        check();
    }else{
        g.innerText = "O";
        count++;
        box7.disabled = true;
        check();
    }
}

h.onclick = ()=>{
    if(count%2==0){
        h.innerText = "X";
        count++;
        box8.disabled = true;
        check();
    }else{
        h.innerText = "O";
        count++;
        box8.disabled = true;
        check();
    }
}

i.onclick = ()=>{
    if(count%2==0){
        i.innerText = "X";
        count++;
        box9.disabled = true;
        check();
    }else{
        i.innerText = "O";
        count++;
        box9.disabled = true;
        check();
    }
}

j.onclick = ()=> {
    location.reload();
}

// function Animaye(){
//     if(count%2==0){
//         k.style.backgroundColor = "green";
//         k.style.fontSize = "20px";
//     }else{
//         l.style.backgroundColor = "green";
//         l.style.fontSize = "20px";
//     }
// }

function check(){
    if(a.innerText=="X" && e.innerText=="X" && i.innerText=="X"){
        m.innerText = str+" Win";
        a.style.backgroundColor = "green";
        e.style.backgroundColor = "green";
        i.style.backgroundColor = "green";
    }else if(d.innerText=="X" && g.innerText=="X" && a.innerText=="X"){
        m.innerText = str+" Win";
        d.style.backgroundColor = "green";
        g.style.backgroundColor = "green";
        a.style.backgroundColor = "green";
    }else if(b.innerText=="X" && e.innerText=="X" && h.innerText=="X"){
        m.innerText = str+" Win";
        b.style.backgroundColor = "green";
        e.style.backgroundColor = "green";
        h.style.backgroundColor = "green";
    }else if(c.innerText=="X" && f.innerText=="X" && i.innerText=="X"){
        m.innerText = str+" Win";
        c.style.backgroundColor = "green";
        f.style.backgroundColor = "green";
        i.style.backgroundColor = "green";
    }else if(a.innerText=="X" && b.innerText=="X" && c.innerText=="X"){
        m.innerText = str+" Win";
        a.style.backgroundColor = "green";
        b.style.backgroundColor = "green";
        c.style.backgroundColor = "green";
    }else if(d.innerText=="X" && e.innerText=="X" && f.innerText=="X"){
        m.innerText = str+" Win";
        d.style.backgroundColor = "green";
        e.style.backgroundColor = "green";
        f.style.backgroundColor = "green";
    }else if(g.innerText=="X" && h.innerText=="X" && i.innerText=="X"){
        m.innerText = str+" Win";
        g.style.backgroundColor = "green";
        h.style.backgroundColor = "green";
        i.style.backgroundColor = "green";
    }else if(g.innerText=="X" && e.innerText=="X" && c.innerText=="X"){
        m.innerText = str+" Win";
        g.style.backgroundColor = "green";
        e.style.backgroundColor = "green";
        c.style.backgroundColor = "green";
    }else if(a.innerText=="O" && e.innerText=="O" && i.innerText=="O"){
        m.innerText = str1+" Win";
        a.style.backgroundColor = "green";
        e.style.backgroundColor = "green";
        i.style.backgroundColor = "green";
    }else if(d.innerText=="O" && g.innerText=="O" && a.innerText=="O"){
        m.innerText = str1+" Win";
        d.style.backgroundColor = "green";
        g.style.backgroundColor = "green";
        a.style.backgroundColor = "green";
    }else if(b.innerText=="O" && e.innerText=="O" && h.innerText=="O"){
        m.innerText = str1+" Win";
        b.style.backgroundColor = "green";
        e.style.backgroundColor = "green";
        h.style.backgroundColor = "green";
    }else if(c.innerText=="O" && f.innerText=="O" && i.innerText=="O"){
        m.innerText = str1+" Win";
        c.style.backgroundColor = "green";
        f.style.backgroundColor = "green";
        i.style.backgroundColor = "green";
    }else if(a.innerText=="O" && b.innerText=="O" && c.innerText=="O"){
        m.innerText = str1+" Win";
        a.style.backgroundColor = "green";
        b.style.backgroundColor = "green";
        c.style.backgroundColor = "green";
    }else if(d.innerText=="O" && e.innerText=="O" && f.innerText=="O"){
        m.innerText = str1+" Win";
        d.style.backgroundColor = "green";
        e.style.backgroundColor = "green";
        f.style.backgroundColor = "green";
    }else if(g.innerText=="O" && h.innerText=="O" && i.innerText=="O"){
        m.innerText = str1+" Win";
        g.style.backgroundColor = "green";
        h.style.backgroundColor = "green";
        i.style.backgroundColor = "green";
    }else if(g.innerText=="O" && e.innerText=="O" && c.innerText=="O"){
        m.innerText = str1+" Win";
        g.style.backgroundColor = "green";
        e.style.backgroundColor = "green";
        c.style.backgroundColor = "green";
    }else{
        if(count==9){
            m.innerText = "DRAW";
        }
        
    }
}

