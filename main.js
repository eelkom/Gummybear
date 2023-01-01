(() => {

    const container = document.querySelector('body');
    const MIN_DURATION = 10;
    const MIN_OPACITY = 0.2;
    // 이미지 크기(130px) 만큼 빼준다
    let width = window.innerWidth - 130;

    function makeGummybear() {

        /* html control -> make <img class="gummybear"></img>  */
        const gummybear = document.createElement('img');
        gummybear.src = './images/gummybear.png';
        gummybear.classList.add('gummybear');

        /* constant values */
        const delay = Math.random() * 10;
        //duration => max=40 , min=20
        const duration = Math.random() * 15 + MIN_DURATION + 5;

        /* css control */
        gummybear.style.left = `${Math.random() * width}px`;
        gummybear.style.animationDelay = `${delay}s`;
        gummybear.style.animation = `fall_bear ${duration}s linear`;

        container.appendChild(gummybear);

        setTimeout(() => {
            container.removeChild(gummybear);
            makeGummybear();
        }, (duration + delay) * 1000);
        // (duration + delay) 초가 지나면(화면에서 사라지면) element 삭제
    }

    function makeSnowflake() {

        /* html control -> make <div class="snowflake"></div>  */
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        /* constant values */
        const delay = Math.random() * 10;
        const initOpacity = Math.random() + MIN_OPACITY;
        //duration => max=30 , min=10
        const duration = Math.random() * 10 + MIN_DURATION;

        /* css control */
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.animation = `fall_snow ${duration}s linear`;
        snowflake.style.opacity = initOpacity;

        container.appendChild(snowflake);

        setTimeout(() => {
            container.removeChild(snowflake);
            makeSnowflake();
        }, (duration + delay) * 1000);
        // (duration + delay) 초가 지나면(화면에서 사라지면) element 삭제
    }

    function resize() {
        width = window.innerWidth - 130;
        console.log(width);
    }

    // window.addEventListener('mousemove', function(e) {
    //     /* 마우스의 위치 값을 px로 나타낸것 */
    //     // console.log(e.clientX, e.clientY);
    //     const snowflake = document.querySelector('.snowflake');
    //     /* 화면 정가운데 0점 맞춰주는 식 */
    //     mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    //     mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;

    //     /* rotateX == X축을 기준으로 회전해야 하기 때문에 mousePos.y 값을 줘야하고
    //        rotateY == Y축을 기준으로 회전해야 하기 때문에 mousePos.x 값을 줘야한다
    //        가시적인 값을 얻기 위해 * 5  */
    //     snowflake.style.transform = `translate3D(${mousePos.x}* 0.2px, 0, 0)`;
    // });

    window.addEventListener('load', () => {
        for (let i = 0; i < 40/* A */; i++) {
            // 0.5초 간격을 두고 구미베어 생성
            setTimeout(makeGummybear, 700 * i);
        }
        for (let i = 0; i < 60; i++) {
            // 0.5초 간격을 두고 눈송이 생성
            setTimeout(makeSnowflake, 500 * i);
        }
    });

    window.addEventListener('resize', resize);

})();
