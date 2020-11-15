let authLocalStorage = window.localStorage;     // 로컬 스토리지

let home = document.getElementById("home");

let authIdUp = document.getElementsByName("id");        // 아이디
let authPwdUp = document.getElementsByName("pwd");      // 비밀번호

let auth_id_up = "";
let auth_pwd_up = "";

// 회원가입
function signUp() {
    // 아이디
    auth_id_up = authIdUp[0].value;
    // 비밀번호
    auth_pwd_up = authPwdUp[0].value;

    if (auth_id_up == "" || auth_pwd_up == "") {
        alert("아이디 또는 비밀번호를 입력해주세요!");
    }
    else {
        // 유저 저장
        authLocalStorage.setItem("auth_id", auth_id_up);
        authLocalStorage.setItem("auth_pwd", auth_pwd_up);

        alert("회원가입 되었습니다!");
        history.go(home);
    }
}

let authIdIn = document.getElementsByName("name");
let authPwdIn = document.getElementsByName("password");

let auth_id_in = "";
let auth_pwd_in = "";

let auth_id_val;
let auth_pwd_val;

// 로그인
function signIn() {
    // 아이디
    auth_id_in = authIdIn[0].value;
    // 비밀번호
    auth_pwd_in = authPwdIn[0].value;

    // 유저 로드
    auth_id_val = authLocalStorage.getItem("auth_id");
    auth_pwd_val = authLocalStorage.getItem("auth_pwd");

    if (auth_id_in != auth_id_val || auth_pwd_in != auth_pwd_val) {
        alert("아이디 또는 비밀번호를 확인해주세요!");
    }
    else {
        alert("로그인 되었습니다!");
        history.go(home);
    }
}