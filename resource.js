
function init(type) {
    sessionStorage.setItem("data", "");
    sessionStorage.setItem("detail", "");
switch (localStorage.getItem("type")) {
case "2":
        sessionStorage.data += "9KwUQbfa-FA";
        sessionStorage.detail += "난이도<meter value=\"0.9\">90%</meter><h2>바벨로우 </h2>";
        sessionStorage.detail += ":";
        sessionStorage.data += "abMicJMCjFg";
        sessionStorage.detail += "난이도 <meter value=\"0.9\">90%</meter><h2>랫풀다운 </h2>";
        sessionStorage.detail += ":";
        sessionStorage.data += "NE6z8CJFygI";
        sessionStorage.detail += "난이도<meter value=\"0.9\">90%</meter><h2>덤벨로우 </h2>";
break;
case "3":
        sessionStorage.data += "3141MY-PIDs";
        sessionStorage.detail += "난이도<meter value=\"0.9\">90%</meter><h2>팔굽혀펴기 </h2>";
        sessionStorage.detail += ":";
        sessionStorage.data += "sVPYH5TPu5A";
        sessionStorage.detail += "난이도<meter value=\"0.9\">90%</meter><h2>턱걸이 </h2>";
        sessionStorage.detail += ":";
        sessionStorage.data += "D206MiA8OqQ";
        sessionStorage.detail += "난이도<meter value=\"0.9\">90%</meter ><h2>데드리프트 </h2>";
break;
case "0":
        sessionStorage.data += "yvb7QU9-LbU";
        sessionStorage.detail += "난이도 <meter value=\"0.3\">30%</meter><h2>플랭크</h2>";
        sessionStorage.detail += ":";
        sessionStorage.data += "dRzW1tIrKcY";
        sessionStorage.detail += "난이도 <meter value=\"0.6\">60%</meter><h2>리버스 크런치 </h2>";
        sessionStorage.detail += ":";
        sessionStorage.data += "MzV6G47VL10";
        sessionStorage.detail += "난이도 <meter value=\"0.9\">90%</meter><h2>V 크런치 </h2>";
break;
case "1":
        sessionStorage.data += "CHfw5SaUGLE";
        sessionStorage.detail += "난이도 <meter value=\"0.3\">30%</meter><h2>숄더프레스</h2>";
        sessionStorage.detail += ":";
        sessionStorage.data += "TbT_Jrhk5sI"
        sessionStorage.detail += "난이도 <meter value=\"0.6\">60%</meter><h2>밀리터리 프레스 </h2>";
        sessionStorage.detail += ":";
        sessionStorage.data += "19fxz1EizWM"
        sessionStorage.detail += "난이도 <meter value=\"0.9\">90%</meter><h2>레터럴 레이즈 </h2>";
break;

    }
sessionStorage.MAX = String(sessionStorage.data.length / 11);
}