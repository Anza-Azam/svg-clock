import createSVGElement from './createSVGElement.js'
export default function drawDesign() {
    // const clockDesign = createSVGElement({
    //     type: "svg",
    //     attributes: {
    //         class: "design"
    //     }
    // })
    const backgroundClock = createSVGElement({
        type: "text",
        attributes: {
            x: -20,
            y: 0,
            fill: 'yellow'
        }
    })
   let date = new Date();
    let hg = date.getHours();
    console.log(hg,'<<<<<<<<<<<<<<<<<<<<<<<');
    backgroundClock.textContent = "CODE YOUR FUTURE"
    //clockDesign.appendChild(backgroundClock)
if (hg<18&&hg>6){backgroundClock.textContent = "DAY"} else
 {backgroundClock.textContent = "NIGHT"}
    return backgroundClock;


}