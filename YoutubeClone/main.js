const moreBtn = document.querySelector('.Youtube_video_info .metadata .moreBtn');
const title = document.querySelector('.Youtube_video_info .metadata .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})