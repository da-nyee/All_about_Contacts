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

// 로컬 스토리지에 레코드 저장하기
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
    optical_type += optType[0].value;
    //콘택트렌즈 도수
    contacts_number += conNum[0].value;
    // 착용기간 시작
    contacts_start += conStart[0].value;
    // 착용기간 종료
    contacts_end += conEnd[0].value;

    // 레코드 저장
    localStorage.setItem("contacts_product", contacts_product);
    localStorage.setItem("contacts_type", contacts_type);
    localStorage.setItem("optical_type", optical_type);
    localStorage.setItem("contacts_number", contacts_number);
    localStorage.setItem("contacts_start", contacts_start);
    localStorage.setItem("contacts_end", contacts_end);

    alert("기록이 완료되었습니다!");
}

let conProductChk = document.getElementsByName("con_product_chk");
let conTypeChk = document.getElementsByName("con_type_chk");
let optTypeChk = document.getElementsByName("opt_type_chk");
let conNumChk= document.getElementsByName("con_num_chk");
let conStartChk = document.getElementsByName("con_start_chk");
let conEndChk = document.getElementsByName("con_end_chk");

let contacts_product_val;
let contacts_type_val;
let optical_type_val;
let contacts_number_val;
let contacts_start_val;
let contacts_end_val;

// 로컬 스토리지에서 레코드 로드하기
function loadRecord() {
    // 레코드 로드
    contacts_product_val = localStorage.getItem("contacts_product");
    contacts_type_val = localStorage.getItem("contacts_type");
    optical_type_val = localStorage.getItem("optical_type");
    contacts_number_val = localStorage.getItem("contacts_number");
    contacts_start_val = localStorage.getItem("contacts_start");
    contacts_end_val = localStorage.getItem("contacts_end");

    // 콘택트렌즈 제품
    conProductChk[0].value = contacts_product_val;
    // 콘택트렌즈 종류
    conTypeChk[0].value = contacts_type_val;
    // 시력교정 종류
    optTypeChk[0].value = optical_type_val;
    // 콘택트렌즈 도수
    conNumChk[0].value = contacts_number_val;
    // 착용기간 시작
    conStartChk[0].value = contacts_start_val;
    // 착용기간 종료
    conEndChk[0].value = contacts_end_val;

    alert("확인이 완료되었습니다!");
}