const searchEl = document.querySelector('.search');
/*
document도 하나의 요소 => <!DOCTYPE html> 즉, html 자체
*/ 

const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});


searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window.addEventListener('scroll', function(){
//     console.log('scroll!');
// })
//윈도우 객체 => 브라우저의 하나의 탭 즉, 화면 자체
// 화면 자체에다가 스크롤 이벤트를 추가해서 화면이 스크롤될 때마다 익명의 함수를 실행 => 무수하게 많이 실행


// window.addEventListener('scroll', _.throttle(function(){
//         if(window.scrollY > 500){
//         // window를 scroll하면 scrollY(화면이 위에서부터 몇 픽셀 지점에 위치하는지 표시) 값이 그때그때 갱신이 됨
//             badgeEl.style.display = 'none';
//             //배지 숨기기 => badge의 display css속성을 none으로
//         }else{
//             badgeEl.style.display = 'block';
//             //배지 보이기 => badge의 dispaly css 속성을 block으로 
//         }
// }, 300));

// 300은 0.3초를 의미
// 화면 자체에다가 스크롤 이벤트를 추가해서 화면이 스크롤되면 0.3초 단위로 익명의 함수를 실행
//_.throttle(함수, 시간) => 시간 단위로 함수가 실행되게한다.

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
    // window를 scroll하면 scrollY(화면이 위에서부터 몇 픽셀 지점에 위치하는지 표시) 값이 그때그때 갱신이 됨
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //배지 숨기기 => badge의 0.6초 동안 투명해짐& 요소가 사라짐
        gsap.to(toTopEl, .2, {
            x:0
        });
    }else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display:'block'
        });
        //배지 보이기 => badge의 dispaly css 속성을 block으로 & 요소가 다시 배치
        gsap.to(toTopEl, .2, {
            x:100
        });
    }
}, 300));

// gsap.to(요소, 시간, 옵션) => 애니메이션 처리를 할 요소, 요소 지속시간(초단위), 실제 처리 옵션

toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});




const fadeEls = document.querySelectorAll('.visual .fade-in');
// fade in 클래스 요소 전체 선택 

fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl,1,{
        delay: (index+1)*.7, //요소들 각각 0.7 1.4 2.1 2.8초 뒤 실행
        opacity:1
    });
});
// fade-in 요소들을 순차적으로 처리
// fadeEL: 각각의 반복되는 요소
// index: 반복되는 횟수
// gsap.to(요소, 시간, 옵션) => 애니메이션 처리를 할 요소, 요소 지속시간(초단위), 실제 처리 옵션
//delay: 몇 초에 한 번씩 실행되는지 


new Swiper('.notice-line .swiper-container', { //new : 생성자
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
  });


new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백 (px)
    centeredSlides: true, //1번 슬라이드가 가운데 보이게
    loop: true, // 반복 재생 여부
    autoplay: {
        delay: 5000 //자동 재생 - 밀리초 단위로 슬라이드
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true, //사용자의 페이지 번호 요소 제어 여부
    },
    navigation:{
        prevEl: '.promotion .swiper-prev', //현재 페이지 다음 요소
        nextEl: '.promotion .swiper-next' //현재 페이지 이전 요소
    }
});


new Swiper('.awards .swiper-container', { //new : 생성자
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30,
    slidesPerView: 5,
    navigation:{
        prevEl: '.awards .swiper-prev', //현재 페이지 다음 요소
        nextEl: '.awards .swiper-next' //현재 페이지 이전 요소
    }
  });






const promotionEl = document.querySelector('.promotion');
// promotion 클래스 요소 선택
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// toggle-promotion 클래스 요소 선택
let isHidePromotion = false;
// let으로 변수 선언 => 값 변화 O (프로모션 요소가 화면에 보이는지 여부)

promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion;
    // 값 반대로 => 화면에 보이면(false) 안보이게(true), 안보이면(true) 보이게(false)
    if(isHidePromotion){ //true일 때 숨김 처리
        promotionEl.classList.add('hide'); 
        //hide 클래스 추가 => css에서 안보이게 스타일 추가
    }else{ //false일 때 보임 처리
        promotionEl.classList.remove('hide'); //hide 클래스 삭제
    }
});

// 요소가 화면에 보이는지를 제어하는 것은
// js를 통해서 클래스만 추가/제거하고 css를 통해 제어해주는 것이 좋음


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }


function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5), {
        y:size, //y축을 기분으로 얼만큼 움직이는지
        repeat: -1, //반복 횟수 => -1이면 무한 반복
        yoyo: true, //한 번 재생된 애니메이션을 다시 뒤로 재생 => 아래로 내려온 요소를 다시 위로
        ease: Power1.easeInOut, //애니메이션 움직임 제어
        delay: random(0,delay) //지연 시간
    });
}
// gsap.to(요소, 시간, 옵션) => 애니메이션 처리를 할 요소, 요소 지속시간(초단위), 실제 처리 옵션

floatingObject('.floating1',1,15);
//floating1 요소에 대해 1초에 한 번씩 15px씩 위아래로 움직이게
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);



const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();