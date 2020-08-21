const button1 = document.querySelector(".button1");
button1.onclick = function() {
    const section = document.querySelector(".section");
    const section_div1 = document.querySelector("#section_div1");
    section_div1.style.backgroundColor = "";
    section_div1.style.height ="400px";
    const head = section_div1.querySelector("h1");
    const p = section_div1.querySelector("p");
    head.innerHTML = "C";
    p.innerHTML = ` C 언어는 1972년 켄 톰슨과 데니스 리치가 벨 연구소에서 일할 당시 유닉스 운영체제를 만들기 위해
                    고안한 프로그래밍 언어입니다. 그런데 A 언어도 아니고 왜 C언어일까요? 
                    처음에 켄 톰슨은 BCPL 언어를 입맛에 맞게 고쳐서 B 언어(벨 연구소의 첫 글자 B를 따서 B 언어로 지음)를 
                    개발했는데 후에 데니스 리치가 B 언어를 개선하여 C 언어가 탄생했습니다.
                    C 언어는 이후의 프로그래밍 언어에 직간접적으로 많은 영향을 주었는데 C 언어를 배우면 다른 언어를 배우기 쉽다고 
                    하는 이유도 이 때문이죠. 프로그래밍 세계의 공통어라 할 수 있습니다. 
                    우리가 지금도 쓰고 있는 Windows, 리눅스, OS X와 iOS, Android, Windows Phone 모바일 운영체제의 
                    핵심 요소인 커널은 C 언어로 만들어져 있습니다(약간의 어셈블리가 포함됨). 
                    즉, 운영체제의 모든 기능을 이용할 수 있는 건 C 언어죠. 다른 언어들은 모두 
                    C 언어의 기능(라이브러리)을 가져다 쓰는 구조입니다.
                    그럼 운영체제 말고 C 언어는 또 어디에 쓸까요? 
                    Oracle, SQL Server, MySQL과 같은 데이터베이스도 C와 C++로 만들어져 있습니다
                    (C++은 C를 기반으로 객체지향 개념을 추가한 언어).
                    그리고 에어컨, 세탁기, 스마트 TV 같은가전 제품에는 작은 컴퓨터가 들어있는데 
                    이 컴퓨터는 주로 C 언어를 사용합니다. 또한, 자동차 ECU나 사물인터넷(IoT)도 C 언어를 많이 사용합니다.
                    C를 공부할 수 있는 무료 강의로는 '최호성의 C프로그래밍'이 있습니다.
                    C 언어를 공부할 수 있는 책으로는 '윤성우의 열혈 C 프로그래밍', 'Do it! C 언어 입문'이 있습니다.
                    <a href="https://www.youtube.com/results?search_query=%EC%B5%9C%ED%98%B8%EC%84%B1%EC%9D%98+c+%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D">강의 링크</a>' ` ;
    const nav_div1 = document.querySelector("#nav_div1");
    nav_div1.style.height = "400px";
}
const button2 = document.querySelector(".button2");
button2.onclick = function() {
    const section_div2 = document.querySelector("#section_div2");
    section_div2.style.backgroundColor = "";
    section_div2.style.height ="400px";
    const head = section_div2.querySelector("h1");
    const p = section_div2.querySelector("p");
    head.innerHTML = "JAVA";
    p.innerHTML = `Java는 기본적으로는 C와 C++의 문법을 차용한 언어입니다. 그러나 C와 C++에서 가장 이해하기 어려운 수준인 포인터, 다중
    상속 등의 개념을 없애 문법적인 난이도를 매우 낮췄습니다. 따라서 C 혹은 C++을 사용해본 프로그래머라면 자바에
    매우 쉽게 적응할 수 있을 겁니다.
    Java를 공부할 수 있는 책으로는 '윤성우의 열혈 Java 프로그래밍 개정판', 'Do it! 자바 프로그래밍 입문' 이 있습니다.
    Java를 공부할 수 있는 무료 강의로는 'Java 입문 수업(생활 코딩)'이 있습니다.
    <a href="https://www.youtube.com/watch?v=jdTsJzXmgU0&list=PLuHgQVnccGMCeAy-2-llhw3nWoQKUvQck">강의 링크</a>`;
    const nav_div2 = document.querySelector("#nav_div2");
    nav_div2.style.height = "400px";
}
const button3 = document.querySelector(".button3");
button3.onclick = function() {
    const section_div3 = document.querySelector("#section_div3");
    section_div3.style.backgroundColor = "";
    section_div3.style.height ="400px";
    const head = section_div3.querySelector("h1");
    const p = section_div3.querySelector("p");
    head.innerHTML = "HTML";
    p.innerHTML = `대부분 알고 있듯이 웹을 지탱하는 핵심 기술은 HTML 입니다.
    HTML5는 HTML의 새로운 버전으로 Client Side Technology 기술의 중심이 되는 마크업 언어입니다.
    가장 특징적인 것은 기존의 웹 문서에서는 HTML 만으로 웹 서비스를 구성하는 것이 불가능하였지만 
    HTML5 로 넘어오면서 클라이언트와 서버와의 통신이 가능하며 이에 대한 부가 기능을 제공함으로써 다른
    외부 Active-X와 같은 plug-ins 를 사용하지 않고도 웹 서비스를 제공할 수 있을 정도로 많은 기능이 추가되었다는 것입니다.
    HTML5 는 Client Side Technology 를 강력하게 지원하는 단순 표현 HTML을 그 이상의 의미를
    가지도록 더 높은 차원으로 발전시킨 기술입니다.
    즉, 기존의 HTML은 HTML 4.0 이후에도 W3C에 의해서 HTML 4.01, XHTML 1.0, 1.1, 2.0 등으로 발전해 왔지만
    이런 그동안의 HTML 에서 의 한계를 극복하기 위해 HTML5 가 탄생하게 된 것입니다.
    HTML5 의 등장으로 CSS3, 자바스크립트 API를 통한 기능의 확장과 결합을 통해 기존의 HTML 이상의 의미를
    부여하게 되었고 기존의 Active-X 와 같은 플러그인인 외부 기술에 의존했던 것을 걷어냄으로서 
    웹표준, 웹접근성을 한층 높여놓고 있습니다.
    HTML5를 공부할 수 있는 책으로는 'Do it HTML5+CSS3 웹 표준의 정석'이 있습니다.
    <a href="https://poiemaweb.com/">강의 링크</a>`;
    const nav_div3 = document.querySelector("#nav_div3");
    nav_div3.style.height = "400px";
}
const button4 = document.querySelector(".button4");
button4.onclick = function() {
    const section_div4 = document.querySelector("#section_div4");
    section_div4.style.backgroundColor = "";
    section_div4.style.height ="400px";
    const head = section_div4.querySelector("h1");
    const p = section_div4.querySelector("p");
    head.innerHTML = "CSS";
    p.innerHTML = `CSS는 Cascading Style Sheets 약자로, HTML, XHTML, XML 같은 문서의 스타일을 꾸밀 때 사용하는 스타일 시트 언어입니다.
    HTML로 문서의 뼈대를 만들면 CSS는 이 문서의 화장을 맡고 있는 셈인데요. 
    글꼴이나, 배경색, 너비와 높이, 위치 등을 지정하거나, 웹 브라우저, 스크린 크기, 장치에 따라서 화면을 다르게 표시될 
    수 있도록 지정할 수도 있습니다.
    CSS는 1996년 12월 W3C(웹 문서 표준을 만드는 기관)가 도입했는데 그 전엔 HTML언어 하나로 문서의 뼈대도 만들고, 
    꾸밈도 같이 했습니다.
    그러다 보니 HTML 문서를 수정할 때 모든 문서를 하나씩 수정해야하는 번거로움이 있었습니다.
    CSS는 문서의 내용(content)과 표현(presentation)을 분리하여 CSS 파일 하나만 수정하면 스타일에 해당하는 HTML
    문서가 한 번에 수정되는 엄청난 장점이 있습니다.
    CSS를 공부할 수 있는 책으로는 '새로운 CSS 레이아웃'이 있습니다.
    <a href="https://poiemaweb.com/">강의 링크</a>`;
    const nav_div4 = document.querySelector("#nav_div4");
    nav_div4.style.height = "400px";
}
const button5 = document.querySelector(".button5");
button5.onclick = function() {
    const section_div5 = document.querySelector("#section_div5");
    section_div5.style.backgroundColor = "";
    section_div5.style.height ="400px";
    const head = section_div5.querySelector("h1");
    const p = section_div5.querySelector("p");
    head.innerHTML = "javascript";
    p.innerHTML = `자바스크립트를 한마디로 요약하자면 웹을 풍부하게 만들어주는 작고 가벼운 언어입니다. 
    미국의 넷스케이프 커뮤니케이션즈사(Netscape Communications)가 개발한 스크립트 언어이며. 
    웹 브라우저에서 실행하는 스크립트 언어를 기술합니다. 작고도 빠르기 때문에 웹문서를 동적으로
    꾸밀 때 가장 널리 쓰입니다. 언어 규격은 자바의 부분 집합(subset)으로 되어 있습니다. 
    하이퍼텍스트 생성 언어(HTML) 문서를 작성하는 수준의 사용자가 사용하는 것을 주안점으로 하여
    자바의 언어 규격으로부터 변수의 형(정수형이나 문자열형 등)을 생략하거나 새로운 클래스
    정의를 할 수 없도록 하였습니다. 스크립트는 HTML 문서 속에 직접 기술하며, ‘script’라는 꼬리표를 사용합니다. 
    프로그래밍 입문자들은 자바스크립트와 자바가 서로 비슷한 기술이라고 생각하곤 합니다. 두 언어
    모두 자바라는 언어를 기반으로 하고 있기 때문이죠. 하지만 자바스크립트는 자바와는 다른점이 상당히 많습니다. 
    기능과 사용법까지 완전히 다릅니다.
    Javascript를 공부할 수 있는 책으로는 'Learning Javascript', 'Do it! 웹 프로그래밍을 위한 자바스크립트 기본 편' 이 있습니다.
    Javascript를 공부할 수 있는 무료 강의로는 'Javascript 입문 수업(생활 코딩)'
    이 있습니다.
    <a href="https://www.youtube.com/watch?v=PZIPsKgWJiw&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU">강의 링크</a>`;
    const nav_div5 = document.querySelector("#nav_div5");
    nav_div5.style.height = "400px";
}
//var coverbutton1 = document.querySelector("#cover1");
//coverbutton1.onmouseover = function(){
//  coverbutton1.style.border="5px black solid";
//};
//coverbutton1.onmouseout=function(){
//  coverbutton1.style.border="";
//};
//var coverbutton2 = document.querySelector("#cover2");
//coverbutton2.onmouseover = function(){
//  coverbutton2.style.border="5px black solid";
//};
//coverbutton2.onmouseout=function(){
//  coverbutton2.style.border="";
//};
//var coverbutton3 = document.querySelector("#cover3");
//coverbutton3.onmouseover = function(){
//  coverbutton3.style.border="5px black solid";
//};
//coverbutton3.onmouseout=function(){
//  coverbutton3.style.border="";
//};
//var coverbutton4 = document.querySelector("#cover4");
//coverbutton4.onmouseover = function(){
//  coverbutton4.style.border="5px black solid";
//};
//coverbutton4.onmouseout=function(){
//  coverbutton4.style.border="";
//};
//var coverbutton5 = document.querySelector("#cover5");
//coverbutton5.onmouseover = function(){
//  coverbutton5.style.border="5px black solid";
//};
//coverbutton5.onmouseout=function(){
//  coverbutton5.style.border="";
//};
//coverbutton1.onclick = function showDetail() {
//  document.querySelector('#desc').style.display = "block";
//  alert('클릭했습니다');
//  document.querySelector('#h4').innerHTML='C';
//};
//function hideDetail() {
//  document.querySelector('#desc').style.display = "none";
//}
