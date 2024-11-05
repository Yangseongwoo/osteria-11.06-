document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var images = [
        { src: 'images/cookies1soldout.jpg', title: 'Chocolate Hazelnut Cookies', description: '초콜릿 헤이즐넛 쿠키', price: '40,000 ₩' },
        { src: 'images/cookies2.jpg', title: 'Espresso Cookies', description: '에스프레소 쿠키', price: '30,000 ₩' },
        { src: 'images/cookies3.jpg', title: 'Parmigiano Reggiano Cookies', description: '파르미지아노 레지아노<br>& 블랙 페퍼 쿠키', price: '20,000 ₩' },
    ];

    function updateContent() {
        document.querySelectorAll('.image-wrap').forEach(function(imgWrap, index) {
            if (index === currentIndex) {
                imgWrap.style.display = 'block'; // 현재 인덱스의 이미지만 보여줍니다.
                imgWrap.querySelector('.chocoimg').src = images[currentIndex].src;
            } else {
                imgWrap.style.display = 'none'; // 나머지 이미지는 숨깁니다.
            }
        });

        document.querySelector('.chocolate1').innerHTML = images[currentIndex].title;
        document.querySelector('.chocolate2').innerHTML = images[currentIndex].description;
        document.querySelector('.chocolate3').innerHTML = images[currentIndex].price;
    }

    document.querySelector('.chocolate_img').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length; // 다음 이미지로 전환
        updateContent(); // 콘텐츠 업데이트
    });

    updateContent(); // 초기 콘텐츠 설정
});






