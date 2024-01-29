// ----------------------------- Dark-Mode ----------------------------
const darkModeToggle = document.querySelector('#toggleDark');
const svgDarkModeToggle = darkModeToggle.querySelector('svg');
const svgDarkModeTogglePath = darkModeToggle.querySelector('path');
const darkModeStateKey = "DarkMode";
const isDark = JSON.parse(localStorage.getItem(darkModeStateKey) || 'false')

// This slightly favours dark theme. Like overwriting of light happens if
// system (matchMedia())is set dark. But if system is set light and the
// user set dark mode previously on the site it stays dark. Makes
// more sense IMO than having this complicated 3 options like the
// tailwind docs has.
if (isDark || window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('theme-dark');
  svgDarkModeTogglePath.setAttribute('d', 'M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z')
  //adjust viewbox moon/sun different :o
  svgDarkModeToggle.setAttribute('viewBox', '0 0 512 512')
  //svgDarkModeTogglePath.setAttribute('d', svgDarkModeTogglePath.getAttribute('d') === 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' ? 'M6 18L18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5');
}
darkModeToggle.addEventListener('click', () => {
  if (document.documentElement.classList.contains('theme-dark')) {
    document.documentElement.classList.remove('theme-dark');
    svgDarkModeTogglePath.setAttribute('d', 'M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z')
    svgDarkModeToggle.setAttribute('viewBox', '0 0 384 512')
    localStorage.setItem(darkModeStateKey, false)
  } else {
    document.documentElement.classList.add('theme-dark');
    svgDarkModeTogglePath.setAttribute('d', 'M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z')
    svgDarkModeToggle.setAttribute('viewBox', '0 0 512 512')
    localStorage.setItem(darkModeStateKey, true)
  }
})
// ------------------------------ Sidebar -----------------------------
//const isRetina = () => window.devicePixelRatio > 1;
//TODO make an animation for closing/opening svg, right now just simple
const sidebar = document.querySelector('#sidebar');
const btnSidebar = document.querySelector('#btnSidebar');
const svgSidebarDesktop = document.querySelector('#svgSidebarDesktop');
const svgSidebarMobile = document.querySelector('#svgSidebarMobile');
const projectCards = document.querySelectorAll('.projectCard')
const projectContents = document.querySelectorAll('.projectContent')

btnSidebar.addEventListener('click', (e) => {
  //TODO try to solve this without the setTimout() func
  const width = window.innerWidth
  if (width > 1280) {
    sidebar.classList.toggle('xl:translate-x-0')
    //delay for smoothing out slidebar open/close animation:
    setTimeout(() => { sidebar.classList.toggle('xl:sticky') }, 150 )
    //change btn:
    svgSidebarDesktop.setAttribute('d', svgSidebarDesktop.getAttribute('d') === 'M6 18L18 6M6 6l12 12' ? 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' : 'M6 18L18 6M6 6l12 12');
    // adjust portfolio project to 3 img/row
    projectCards.forEach(projectCard =>  projectCard.classList.toggle("2xl:w-[calc(100%/3-0.1875rem)]") )
    projectContents.forEach(projectContent => projectContent.classList.toggle("justify-center") )
  } else {
    sidebar.classList.toggle('translate-x-0')
    //change btn:
    svgSidebarMobile.setAttribute('d', svgSidebarMobile.getAttribute('d') === 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' ? 'M6 18L18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5');
  }
})
// -------------------------- portfolio-page --------------------------
const userAgent = navigator.userAgent;
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
//const isDesktop = () => { return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.platform)) }

if(document.querySelector('#portfolio')) {
  console.log("You are on the portfolio page.")
// ------------------------------ meetme ------------------------------
  const btnMeetme = document.querySelector("#btnMeetme")
  const aboutIntro = document.querySelector("#aboutIntro")
  const aboutAbout = document.querySelector("#aboutAbout")

  // toggle between meetme content and about
  btnMeetme.addEventListener('click', (e) => {
    aboutIntro.classList.add('hidden')
    aboutAbout.classList.remove('hidden')
  })
// ----------------------------- projects -----------------------------
  const projects = document.querySelector("#projects")

  // Event Delegation: toggle classes when mobile info icon clicked
  projects.addEventListener('click', (e) => {
    //FIXME I think it's literally my fat fingers lol, try to increase trigger area of buttons
    const targetElement = event.target
    if ( targetElement.classList.contains("svgInfo") ) {
      // target path ele/ child of svg
      const svgInfoPath = targetElement.querySelector('.svgInfoPath');
      svgInfoPath.setAttribute('d', svgInfoPath.getAttribute('d') === 'M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z' ? 'M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z' : 'M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z');
      // traverse and select img
      const projectImg = targetElement.parentNode.parentNode.querySelector(".projectImg");
      //const projectImg = targetElement.parentNode.previousElementSibling
      projectImg.classList.toggle("blur")
      // select content section
      const projectContent = targetElement.parentNode.parentNode.querySelector(".projectContent");
      //const projectCard = targetElement.parentNode.nextElementSibling
      projectContent.classList.toggle("bottom-0")
      // select the card wrapper
      const projectCard = targetElement.parentNode.parentNode;
      projectCard.classList.toggle("outline-imgOutline")
      projectCard.classList.toggle("outline-black")
    }
  })

} else {
   console.log("You are not on the portfolio page.")
}

// ------------------------------ meetme ------------------------------
// FIXME rly small smartphones still have landscape mode img/text wrong layout
// Desktop has text/img next to each other until lg screen size, but
// mobile screens (phones) need to stay longer in that layout. Because
// of there isn't enough screen height.
if (document.querySelector('#portfolio') && !isMobile) {
  const portfolio = document.querySelector("#portfolio")
  const portfolioImg = document.querySelector("#portfolioImg")
  portfolio.classList.remove("md:flex-row", "md:order-last")
  portfolio.classList.add("lg:flex-row", "lg:order-last")
  portfolioImg.parentNode.classList.remove("md:order-last")
  portfolioImg.parentNode.classList.add("lg:order-last")
}

if (document.querySelector('#portfolio') && isMobile) {
// ------------------------------ meetme ------------------------------
  const portfolioImg = document.querySelector("#portfolioImg")
  portfolioImg.classList.remove("sm:h-[30vh]")


// adjusting projects gallery on mobile screens
// ----------------------------- projects -----------------------------
  const projectInfos = document.querySelectorAll(".projectInfo")
  const projectImgs = document.querySelectorAll(".projectImg")
  const projectTags = document.querySelectorAll('.projectTag')
  const projectParas = document.querySelectorAll('.projectPara')
  const projectUrls = document.querySelectorAll('.projectUrl')
  projectInfos.forEach(projectInfo =>  projectInfo.classList.remove("hidden") )
  projectCards.forEach(projectCard =>  projectCard.classList.remove("hover:outline-black", "md:landscape:h-[30vh]") )
  projectImgs.forEach(projectImg =>  projectImg.classList.remove("group-hover:blur") )
  projectContents.forEach(projectContent => {
    projectContent.classList.remove("group-hover:bottom-0")
    projectContent.classList.add("justify-center")
  })
  projectTags.forEach(projectTag =>  {
    projectTag.classList.remove("md:mt-6")
  })
  projectParas.forEach(projectPara =>  {
    projectPara.classList.remove("mt-4")
    projectPara.classList.add("mt-2")
  })
  projectUrls.forEach(projectUrl =>  {
    projectUrl.classList.remove("mt-4")
    projectUrl.classList.add("mt-2")
  })
}
