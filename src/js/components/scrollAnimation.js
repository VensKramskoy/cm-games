import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import anime from "animejs";


// Анимация точки по траектории

const pathLine = document.querySelector('#dotPath')
const pathDot = document.querySelector('.path-dot')
const prompt1 = document.querySelector('.prompt1')
const prompt2 = document.querySelector('.prompt2')
const prompt3 = document.querySelector('.prompt3')
const prompt4 = document.querySelector('.prompt4')


gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
gsap.defaults({ease: "none"});

gsap.to('.path-dot', {
  scrollTrigger: {
    trigger: pathDot,
    start: "top 58%",
    end: '+=5480px',
    scrub: 1,
  },
  duration: 8,
  immediateRender: true,
  motionPath: {
    path: pathLine,
    align: pathLine,
    alignOrigin: [0.5, 0.5],
    start: 1,
    end: 0
  },
})

const trackCoord = (element, corrX, corrY, isReverse) => {
  let x = element.getBoundingClientRect().x
  let dotX = pathDot.getBoundingClientRect().x - corrX

  let y = element.getBoundingClientRect().y
  let dotY = pathDot.getBoundingClientRect().y + corrY

  if (isReverse) {
    if (dotX < x && dotY > y) {
      element.classList.add('_active')
    }
  } else if (dotX > x && dotY > y)  {
    element.classList.add('_active')
  }
}

if (prompt1) {
  window.addEventListener('scroll', function () {
    trackCoord(prompt1, 90, 0, true)
    trackCoord(prompt2, 0, 0, false)
    trackCoord(prompt3, 0, 0, false)
    trackCoord(prompt4, 0, 0, true)
  });
}

