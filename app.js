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


// N1

// {
//     function digitize(n) {
//         return n.toString().split('').reverse().map(Number);
//     }
//     console.log(digitize(35231));
//     console.log(digitize(0));
// }


// N2
// {
//     function arrayPlusArray(arr1, arr2) {
//         const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
//         const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);
//         return sum1 + sum2;
//     }
//     console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
//     console.log(arrayPlusArray([1], [5]));

// }




// N3
// {
//     function stringToArray(string){

//         return string.split(" ")
//     }

//     console.log(stringToArray("Robin Singh"))
// }




// N3
// {
//     function switchItUp(number) {
//         switch (number) {
//             case 0:
//                 return 'Zero';
//             case 1:
//                 return 'One';
//             case 2:
//                 return 'Two';
//             case 3:
//                 return 'Three';
//             case 4:
//                 return 'Four';
//             case 5:
//                 return 'Five';
//             case 6:
//                 return 'Six';
//             case 7:
//                 return 'Seven';
//             case 8:
//                 return 'Eight';
//             case 9:
//                 return 'Nine';
//             default:
//                 return 'Unknown number';
//         }
//     }
//     console.log(numberToWord(0));
//     console.log(numberToWord(1));
//     console.log(numberToWord(2));
//     console.log(numberToWord(3));
//     console.log(numberToWord(4));
//     console.log(numberToWord(5));
//     console.log(numberToWord(6));
//     console.log(numberToWord(7));
//     console.log(numberToWord(8));
//     console.log(numberToWord(9));
// }