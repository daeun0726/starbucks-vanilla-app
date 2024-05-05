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
    }else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display:'block'
        });
        //배지 보이기 => badge의 dispaly css 속성을 block으로 & 요소가 다시 배치
    }
}, 300));

// gsap.to(요소, 시간, 옵션) => 애니메이션 처리를 할 요소, 요소 지속시간(초단위), 실제 처리 옵션



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
