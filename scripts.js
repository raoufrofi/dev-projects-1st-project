const parts = document.getElementById("part");
const partsBtn = parts.querySelectorAll("button");

let previous = 'backgrounds';
let current = 'backgrounds';

function previousGet(father) {
    father.forEach(e => {
        if (e.classList.contains("selected")) {
            previous = e.innerText;
            e.classList.remove("selected");
            return;
        }
    })
}

partsBtn.forEach(item => {
    item.addEventListener('click', () => {
        current = item.innerText;
        previousGet(partsBtn);
        console.log(current);
        item.classList.add("selected");
        if (previous === current) {
            return;
        }
        removeHidden(previous, current);
    })
})

function removeHidden(pre, curr) {
    document.getElementById(curr).classList.remove("hidden");
    document.getElementById(pre).classList.add("hidden");
}


// STYLE CHANGING

let styleBtns = style.querySelectorAll("#style > *");

styleBtns.forEach(childNode => {
    let btns = childNode.querySelectorAll("button");
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            previousGet(btns);
            btn.classList.add("selected");

            setStyleLinks(btn.innerText);
            setTimeout(creatCanvas, 1000);


        })
    })
})

function setStyleLinks(text) {

    let img = document.querySelector(`[name="${current}"]`)

    img.setAttribute("src", `assets/img//${current}/${text}.png`)


}

let url = '';
const canvas = document.getElementById("canvas");
const download = document.querySelector(".download");
canvas.height = 720;
canvas.width = 720;
// Creating Image
function creatCanvas() {
    const images = document.querySelectorAll(".image");
    var c = canvas.getContext('2d');
    c.drawImage(images[0], 0, 0);
    c.drawImage(images[1], 0, 0);
    c.drawImage(images[2], 0, 0);
    c.drawImage(images[3], 0, 0);
    c.drawImage(images[4], 0, 0);
    c.drawImage(images[5], 0, 0);
    c.drawImage(images[6], 0, 0);
    c.drawImage(images[7], 0, 0);
    url = canvas.toDataURL();
    download.setAttribute("href", url);
}

// DOWNLOADING IMAGE
// function downloadingImage() {
//     creatCanvas();
// }




/* DOWNLOADING THE IMAGE
 for downlaoding the image first of all create an anchor tag and having 2 attributes
1. href
2. download

when that link will be clicked then the image reffered to href will be downloaded
*/