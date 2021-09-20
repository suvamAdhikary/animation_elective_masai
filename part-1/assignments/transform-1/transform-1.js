let el = document.querySelector("main");


function rotate() {
    
    let rotate45 = document.getElementById("rotate__45");
    rotate45.onclick = function () {
        el.classList.toggle("rotate-45");
    }

    let rotate90 = document.getElementById("rotate__90");
    rotate90.onclick = function () {
        el.classList.toggle("rotate-90");
    }

    let rotate180 = document.getElementById("rotate__180");
    rotate180.onclick = function () {
        el.classList.toggle("rotate-180");
    }

    let rotate270 = document.getElementById("rotate__270");
    rotate270.onclick = function () {
        el.classList.toggle("rotate-270");
    }
}
rotate()

function translate() {
    let translate1 = document.getElementById("translate__1");
    translate1.onclick = function () {
        el.classList.toggle("translate-1")
    }

    let translate2 = document.getElementById("translate__2");
    translate2.onclick = function () {
        el.classList.toggle("translate-2")
    }

    let translate4 = document.getElementById("translate__4");
    translate4.onclick = function () {
        el.classList.toggle("translate-4")
    }

    let translate8 = document.getElementById("translate__8");
    translate8.onclick = function () {
        el.classList.toggle("translate-8")
    }
}
translate()

function scale() {
    let scale1 = document.getElementById("scale__1");
    scale1.onclick = function () {
        el.classList.toggle("scale-1")
    }
    let scale2 = document.getElementById("scale__2");
    scale2.onclick = function () {
        el.classList.toggle("scale-2")
    }
    let scale3 = document.getElementById("scale__3");
    scale3.onclick = function () {
        el.classList.toggle("scale-3")
    }
    let scale4 = document.getElementById("scale__4");
    scale4.onclick = function () {
        el.classList.toggle("scale-4")
    }
    let scale5 = document.getElementById("scale__5");
    scale5.onclick = function () {
        el.classList.toggle("scale-5")
    }
    let scale6 = document.getElementById("scale__6");
    scale6.onclick = function () {
        el.classList.toggle("scale-6")
    }
    let scale7 = document.getElementById("scale__7");
    scale7.onclick = function () {
        el.classList.toggle("scale-7")
    }
    let scale8 = document.getElementById("scale__8");
    scale8.onclick = function () {
        el.classList.toggle("scale-8")
    }
    let scale9 = document.getElementById("scale__9");
    scale9.onclick = function () {
        el.classList.toggle("scale-9")
    }
    let scale10 = document.getElementById("scale__10");
    scale10.onclick = function () {
        el.classList.toggle("scale-10")
    }
}
scale()

function scaleXY() {

    let scaleX1 = document.getElementById("scaleX__1");
    scaleX1.onclick = function () {
        el.classList.toggle("scale-x-1");
    }
    let scaleX2 = document.getElementById("scaleX__2");
    scaleX2.onclick = function () {
        el.classList.toggle("scale-x-2");
    }
    let scaleX3 = document.getElementById("scaleX__3");
    scaleX3.onclick = function () {
        el.classList.toggle("scale-x-3");
    }
    let scaleX4 = document.getElementById("scaleX__4");
    scaleX4.onclick = function () {
        el.classList.toggle("scale-x-4");
    }
    let scaleX5 = document.getElementById("scaleX__5");
    scaleX5.onclick = function () {
        el.classList.toggle("scale-x-5");
    }


    let scaleY1 = document.getElementById("scaleY__1");
    scaleY1.onclick = function () {
        el.classList.toggle("scale-y-1");
    }
    let scaleY2 = document.getElementById("scaleY__2");
    scaleY2.onclick = function () {
        el.classList.toggle("scale-y-2");
    }
    let scaleY3 = document.getElementById("scaleY__3");
    scaleY3.onclick = function () {
        el.classList.toggle("scale-y-3");
    }
    let scaleY4 = document.getElementById("scaleY__4");
    scaleY4.onclick = function () {
        el.classList.toggle("scale-y-4");
    }
    let scaleY5 = document.getElementById("scaleY__5");
    scaleY5.onclick = function () {
        el.classList.toggle("scale-y-5");
    }

}
scaleXY()