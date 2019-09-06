
import VideoScroller from 'video-scroller';

const processScroll = () => {
  const videosScroll = document.querySelectorAll(".js--video-scroll");
  const scrollVideoContainer = document.querySelector(".js--scroll-video-container");

    videosScroll.forEach(video => {
      const box = video.parentNode.getBoundingClientRect();
      //const scrollCoeficientDivider = window.innerWidth > 768 ? 2.5 : 1.5
      const scrollCoeficientDivider = window.innerWidth < 361 ? 3 : window.innerWidth < 769 ? 1.4 : 2.5;
      console.log('scrollCoeficientDivider', scrollCoeficientDivider);
      const scrollCoeficient = Math.trunc(scrollVideoContainer.offsetWidth / scrollCoeficientDivider);
      console.log('scrollCoeficient', scrollCoeficient);
      const heightPosition = box.height + scrollCoeficient;
      const topPosition = box.top - heightPosition;
      let scrollHeight = 0;
       if (topPosition < 0) {
          scrollHeight = Math.abs(topPosition);
          const frameNumber = scrollHeight * (video.duration / (video.offsetWidth * 2));
           window.requestAnimationFrame(() => {
            video.currentTime = frameNumber;
          });
       }
    })
}

const videoScroll = () => {
  // processScroll();
  // window.addEventListener('scroll', () => {
  //   processScroll();
  // });

  const videosScroll = document.querySelectorAll(".js--video-scroll");

   videosScroll.forEach(video => {
    console.log('video', video);
      new VideoScroller({
          el: video,
          invert: true,
      });
   });

}

export default videoScroll;
