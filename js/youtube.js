// Youtube IFrame API를 비동기로 로드
var tag = document.createElement('script');
//요소 생성
tag.src = "https://www.youtube.com/iframe_api";
//tag의 src 속성에 외부 자바스크립트 라이브러리 할당
var firstScriptTag = document.getElementsByTagName('script')[0];
//script 요소 중 첫 번째 요소를 firstScriptTag 변수에 할당
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//firstScriptTag의 부모 요소 이전 부분에 tag 요소 삽입


function onYouTubePlayerAPIReady() {
	new YT.Player('player', { //player 요소
		videoId: 'An6LvWQuj_8', // 재생할 유튜브 영상 ID
		playerVars: {
			autoplay: true, // 자동 재생 유무
			loop: true, // 반복 재생 유무
			playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
		},
		events: {
		    // 영상이 준비되었을 때,
			onReady: function (event) {
			    event.target.mute(); // 음소거
			}
		}
	});
}