import cartesianGrid from './cartesianGrid.js'
import createSVGElement from './createSVGElement.js'
import createMarkers from './clockFace.js'
 // lines for mins and hours
import drawDesign from './drawDesign.js'
const clock = document.querySelector(".clock")
const clockFace = createSVGElement({
    attributes: {
        r: 140,
        fill: "#f00"
    },
    type: "circle"
})


// function drawDesign() {
//     // const clockDesign = createSVGElement({
//     //     type: "svg",
//     //     attributes: {
//     //         class: "design"
//     //     }
//     // })
//     const backgroundClock = createSVGElement({
//         type: "text",
//         attributes: {
//             x: -20,
//             y: 0,
//             fill: 'yellow'
//         }
//     })
//    let date = new Date();
//     let hg = date.getHours();
//     console.log(hg,'<<<<<<<<<<<<<<<<<<<<<<<');
//     backgroundClock.textContent = "CODE YOUR FUTURE"
//     //clockDesign.appendChild(backgroundClock)
// if (hg>12){backgroundClock.textContent = "DAY"} else
//  {backgroundClock.textContent = "NIGHT"}
//     return backgroundClock;


// }
const design = drawDesign();
const markers = createMarkers()


const handsSVG = drawHands();
// setInterval(runClock,1000);
requestAnimationFrame(runClock);


let secDeg = 0;
function drawHands() {
    const handsSVG = createSVGElement({
        type: "svg",
        attributes: {
            id: "handsSVG"
        }
    })

    const sec = createSVGElement({
        type: "line",
        attributes: {
            id: "sec",
            x1: 0,
            y1: 0,
            x2: 0,
            y2: -140,
            stroke: '#fff',
            "stroke-width": "3"
        }
    })


    const min = createSVGElement({
        type: "line",
        attributes: {
            id: "min",
            x1: 0,
            y1: 0,
            x2: 0,
            y2: -120,
            stroke: '#fff',
            "stroke-width": "3"
        }
    })


    const hour = createSVGElement({
        type: "line",
        attributes: {
            id: "hour",
            x1: 0,
            y1: 0,
            x2: 0,
            y2: -100,
            stroke: '#fff',
            "stroke-width": "3"
        }
    })

    handsSVG.appendChild(sec);
    handsSVG.appendChild(min);
    handsSVG.appendChild(hour);
    return handsSVG;
}
function runClock() {
    const date = new Date();
    const hourdeg = date.getHours() * 30
    const minutes = date.getMinutes() * 6
    const second = date.getSeconds() * 6;


    secDeg = (secDeg + 6);
    const sec = document.getElementById('sec');
    const min = document.getElementById('min');
    const hours = document.getElementById('hour');

    sec.setAttributeNS(null, "transform", `rotate(${second})`);
    min.setAttributeNS(null, "transform", `rotate(${minutes})`);
    hours.setAttributeNS(null, "transform", `rotate(${hourdeg})`);
    requestAnimationFrame(runClock)
}


clock.appendChild(clockFace)
clock.appendChild(design)
clock.appendChild(markers)
clock.appendChild(handsSVG)
clock.appendChild(cartesianGrid)
// runClock();
