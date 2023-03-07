
function selectEmail() {
  const se = document.getElementById("email3").value;
  const se2 = document.getElementById("email2");
  //console.log(se);
  if (se == "") {
    se2.removeAttribute("disabled");
    se2.value = "";
    se2.focus();
  } else {
    se2.value = se; // email3의 value값을 두번째 칸에 넣어라
    se2.setAttribute("disabled", true);
  }
}

$(function () {
  $(".datepicker").datepicker({
    dateFormat: "yy-mm-dd", //달력 날짜 형태
    showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시
    showMonthAfterYear: true, // 월- 년 순서가아닌 년도 - 월 순서
    changeYear: true, //option값 년 선택 가능
    changeMonth: true, //option값  월 선택 가능
    showOn: "both", //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
    buttonImage:
      "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif", //버튼 이미지 경로
    buttonImageOnly: true, //버튼 이미지만 깔끔하게 보이게함
    buttonText: "선택", //버튼 호버 텍스트
    yearSuffix: "년", //달력의 년도 부분 뒤 텍스트
    monthNamesShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ], //달력의 월 부분 텍스트
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ], //달력의 월 부분 Tooltip
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"], //달력의 요일 텍스트
    dayNames: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ], //달력의 요일 Tooltip
    minDate: "-5Y", //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
    maxDate: "+5y", //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
  });
  //초기값을 오늘 날짜로 설정해줘야 합니다.
  $(".datepicker").datepicker("setDate", "today"); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)

});

function check() {
  var frm = document.frm; //frm 은 폼 이름
  var email1 = document.getElementById("email1");
  var email2 = document.getElementById("email2");
  var noalert = document.getElementById("noalert");
  var mail = email1 + "@" + email2;
  var reg_m_id = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
  var reg_password =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  var reg_call = /^(01[016789]{1})[0-9]{4}[0-9]{4}$/;
  var reg_email1 = /^[A-z|0-9]([A-z|0-9]*)$/;
  var reg_email2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
  //아이디검수
  if (!frm.m_id.value) {
    /* noalert.innerText = '아이디를 입력해 주세요!';
    noalert.style.color = 'red'; */
    alert("아이디를 입력해 주세요!");
    frm.m_id.focus();
    return false; 
  }

  if (!reg_m_id.test(frm.id.value)) {
    alert("아이디는 6자 이상, 영문, 숫자를 포함해야 합니다.");
    frm.m_id.focus();
    return false;
  }

  //비밀번호 검수
  if (!frm.password.value) {
    alert("비밀번호를 입력하세요!"); 
    frm.password.focus();
    return false;
  }
  if (!reg_password.test(frm.password.value)) {
    alert("비밀번호는 8자이상, 영문, 숫자, 특수문자를 포함해야합니다.");
    frm.password.focus();
    return false;
  }

  // 비밀번호 재입력 검수
  if (!frm.re_password.value) {
    alert("비밀번호를 입력하세요!");
    frm.re_password.focus();
    return false;
  }
  if (frm.password.value != frm.re_password.value) {
    //같지않을때 비교연산자써주기!
    alert("비밀번호가 같지않습니다. 다시 입력해주세요.");
    frm.re_password.focus();
    return false;
  }

  //회사명과 회원명은 안쓴것에 대한 내용만 써줄것!
  if (!frm.name.value) {
    alert("회원명을 입력하세요!");
    frm.name.focus();
    return false;
  }

  if (!frm.email1.value) {
    alert("본인 확인 이메일 아이디를 입력해 주세요.");
    frm.email1.focus();
    return false; 
  }

  if (!reg_email1.test(frm.email1.value)) {
    alert("아이디는 6자 이상, 영문, 숫자를 포함해야 합니다.");
    frm.email1.focus();
    return false;
  }

  if (!frm.email2.value) {
    alert("직접입력 이메일을 입력해 주세요.");
    frm.email2.focus();
    return false; //
  }

  if (!reg_email2.test(frm.email2.value)) {
    alert("소문자, 숫자, .(dot)을 사용한 6자리 이상인지 확인하세요!");
    frm.email2.focus();
    return false; //
  }

  // 핸드폰 번호 검수
  if (!frm.call.value) {
    alert("핸드폰번호를 입력하세요!");
    frm.call.focus();
    return false;
  }
  if (!reg_call.test(frm.call.value)) {
    alert("핸드폰 번호 형식을 맞춰주세요.");
    frm.call.focus();
    return false;
  }
}
