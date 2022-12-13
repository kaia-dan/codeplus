 //스크립트 위로 튕기는것 (a태그 눌렀을때 위로 튕기는거 막아줌)
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});


//scroll animation
$(function(){
  $('.animate').scrolla({  //$('.등록할클래스명')
      moblie : true,  //모바일버전시 활성화
      once: true //스크롤시 딱 한번만 하고 싶을 때 true, 반복하고 싶을 때 false
  });
});

//scroll header
var lastScrollTop = 0;

$(window).scroll(function(){
var scrollTop = $(this).scrollTop(); /* 스크롤바 수직 위치를 가져옴, 괄호 안에 값(value)이 있을 경우 수직 위치를 정한다. */
// scrollTop - 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정하는 메소드

if(scrollTop >= 20) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
  if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) { /* &&: AND, 두 값이 모두 참이어야 값이 출력 */
    /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
    $(".header_wrap").css("top","-80px");
    $(".header_inner .mainmenu .mainmenu_list > li > .submenu_list").removeClass("on"); // 스크롤 올렸을때 2depth영역 마우스리브 안해도 사라지게하기!
  } else {
    $(".header_wrap").css("top","0px").css("background","rgba(255, 255, 255, 0.712)");
  }
  lastScrollTop = scrollTop;
  }else{
    $(".header_wrap").css("top","0px").css("background","#fff");
  }
});

//2depth gnb
$(function(){
  $(".header_inner .mainmenu .mainmenu_list > li > a").on("mouseenter focus", function(){//마우스엔터
    var num = $(".header_inner .mainmenu .mainmenu_list > li > a").index($(this));//enter하는 인덱스 구하기
    //마우스올린 li 하나만 컬러유지
    $(".header_inner .mainmenu .mainmenu_list > li > a").removeClass("on"); //다음액션 전의 것들은 초기화
    $(".header_inner .mainmenu .mainmenu_list > li > a:eq(" + (num) + ")").addClass("on");
    //서브메뉴에 마우스 올려도 부모li컬러유지
    $(".header_inner .mainmenu .mainmenu_list li > .submenu_list").removeClass("on"); //항상 on클래스부터 지워주기
    $(this).next(".header_inner .mainmenu .mainmenu_list li > .submenu_list").addClass("on");
  });

  $(".header_inner .mainmenu .mainmenu_list > li > .submenu_list").on("mouseleave", function(){//마우스리브
    $(".header_inner .mainmenu .mainmenu_list > li > .submenu_list").removeClass("on");

    $(".header_inner .mainmenu .mainmenu_list > li > a").removeClass("on");
  });
});

// hamburger menuOpen
$(function(){
  $(".hamburger .open").on("click", function(){
    $(".hamburger").addClass("on");
  });
  $(".hamburger .close, .hamburger .blur_bg").on("click", function(){
    $(".hamburger").removeClass("on");
  });
});