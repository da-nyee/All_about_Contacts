let localStorage = window.localStorage;     // 로컬 스토리지

let conProduct = document.getElementsByName("con_product");     // 콘택트렌즈 제품
let conType = document.getElementsByName("con_type");           // 콘택트렌즈 종류
let optType = document.getElementsByName("opt_type");           // 시력교정 종류
let conNum = document.getElementsByName("con_num");             // 콘택트렌즈 도수
let conStart = document.getElementsByName("con_start");         // 착용기간 시작
let conEnd = document.getElementsByName("con_end");             // 착용기간 종료

let contacts_product = "";
let contacts_type = "";
let optical_type = "";
let contacts_number = "";
let contacts_start = "";
let contacts_end = "";

function getCheck() {
    
}

// 로컬 스토리지에 기록하기
function saveRecord() {
    // 콘택트렌즈 제품
    contacts_product += conProduct[0].value;
    // 콘택트렌즈 종류
    for (let i = 0; i < conType.length; i++) {
        if (conType[i].checked) {
            contacts_type += conType[i].value;
        }
    }
    // 시력교정 종류
    optical_type += opt_type.value;
    //콘택트렌즈 도수
    contacts_number += conNum[0].value;
    // 착용기간 시작
    contacts_start += conStart[0].value;
    // 착용기간 종료
    contacts_end += conEnd[0].value;

    // 로컬 스토리지 저장
    localStorage.setItem("contacts_product", contacts_product);
    localStorage.setItem("contacts_type", contacts_type);
    localStorage.setItem("optical_type", optical_type);
    localStorage.setItem("contacts_number", contacts_number);
    localStorage.setItem("contacts_start", contacts_start);
    localStorage.setItem("contacts_end", contacts_end);
}