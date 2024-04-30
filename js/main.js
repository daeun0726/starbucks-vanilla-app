const searchEl = document.querySelector('.search');
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
// TweenMax.to(요소, 시간, 옵션) => 애니메이션 처리를 할 요소, 요소 지속시간(초단위), 실제 처리 옵션



/*
document도 하나의 요소 => <!DOCTYPE html> 즉, html 자체
*/ 