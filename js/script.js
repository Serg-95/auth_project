let st_1_btn = document.getElementById("station_1_btn")
st_1_btn.addEventListener("click", () => {
    let first_st_div = document.getElementById("station_1")
    let initialText = "Світло Є"
    if(st_1_btn.innerHTML.includes(initialText)) {
        st_1_btn.innerHTML = "Світла немає"
        first_st_div.style.backgroundColor = "red"
    } else {
        st_1_btn.innerHTML = initialText
        first_st_div.style.backgroundColor = "rgb(173, 241, 194)"
    }
})

let st_2_btn = document.getElementById("station_2_btn")
st_2_btn.addEventListener("click", () => {
    let second_st_div = document.getElementById("station_2")
    let initialText = "Світло Є"
    if(st_2_btn.innerHTML.includes(initialText)) {
        st_2_btn.innerHTML = "Світла немає"
        second_st_div.style.backgroundColor = "red"
    } else {
        st_2_btn.innerHTML = initialText
        second_st_div.style.backgroundColor = "rgb(173, 241, 194)"
    }
})

let st_3_btn = document.getElementById("station_3_btn")
st_3_btn.addEventListener("click", () => {
    let third_st_div = document.getElementById("station_3")
    let initialText = "Світло Є"
    if(st_3_btn.innerHTML.includes(initialText)) {
        st_3_btn.innerHTML = "Світла немає"
        third_st_div.style.backgroundColor = "red"
    } else {
        st_3_btn.innerHTML = initialText
        third_st_div.style.backgroundColor = "rgb(173, 241, 194)"
    }
})

let st_4_btn = document.getElementById("station_4_btn")
st_4_btn.addEventListener("click", () => {
    let fourth_st_div = document.getElementById("station_4")
    let initialText = "Світло Є"
    if(st_4_btn.innerHTML.includes(initialText)) {
        st_4_btn.innerHTML = "Світла немає"
        fourth_st_div.style.backgroundColor = "red"
    } else {
        st_4_btn.innerHTML = initialText
        fourth_st_div.style.backgroundColor = "rgb(173, 241, 194)"
    }
})

let st_5_btn = document.getElementById("station_5_btn")
st_5_btn.addEventListener("click", () => {
    let fifth_st_div = document.getElementById("station_5")
    let initialText = "Світло Є"
    if(st_5_btn.innerHTML.includes(initialText)) {
        st_5_btn.innerHTML = "Світла немає"
        fifth_st_div.style.backgroundColor = "red"
    } else {
        st_5_btn.innerHTML = initialText
        fifth_st_div.style.backgroundColor = "rgb(173, 241, 194)"
    }
})