const heading = document.querySelector(".text")
const audio = document.querySelector(".audio")
console.log(audio);

let off = 0

function inc() {
    if (off < 10) {
        off++
    }
    else if (off < 100) {
        off += 10
        audio.play()
    } else if (off < 1000) {
        off += 100
    }
    else {
        return null
    }

    heading.innerHTML = off
}

function dec() {
    if (off > 100) {
        off -= 100
        audio.play()
    } else if (off > 10) {
        off -= 10
    } else if (off > 0) {
        off--
    }

    heading.innerHTML = off
}