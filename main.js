let input_box = document.querySelector('#inputnumber')
let background = document.querySelector('#body')
let header_main = document.querySelector('.header-main')
let button = document.querySelectorAll('.btn')
let darkmode = false;

function insert(number) {
    input_box.value = input_box.value + number
}

function clr() {
    input_box.value = ""
}

function del_calc() {
    input_box.value = input_box.value.substring(0, input_box.value.length-1)
}

function equal() {
    input_box.value = eval(input_box.value)
}

function toggle() {
    if (!darkmode) {
        darkmode = true
        input_box.classList.add('darkmode-whiteText', 'darkmode-background')
        background.classList.add('darkmode-background')
        header_main.classList.add('darkmode-inside')
        button.forEach(x => {
            x.classList.add('darkmode-inside','darkmode-background')
        })
    }
    else {
        darkmode = false
        input_box.classList.remove('darkmode-whiteText','darkmode-background')
        background.classList.remove('darkmode-background')
        header_main.classList.remove('darkmode-inside')
        button.forEach(x => {
            x.classList.remove('darkmode-inside', 'darkmode-background')
        })
    }
}

