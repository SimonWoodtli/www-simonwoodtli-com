// ----------------------------- Dark-Mode ----------------------------
const darkModeToggle = document.querySelector('#toggleDark');
const darkModeStateKey = "DarkMode";
const isDark = JSON.parse(localStorage.getItem(darkModeStateKey) || 'false')

// This slightly favours dark theme. Like overwriting of light happens if
// system (matchMedia())is set dark. But if system is set light and the
// user set dark mode previously on the site it stays dark. Makes
// more sense IMO than having this complicated 3 options like the
// tailwind docs has.
if (isDark || window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('theme-dark');
  // would be nice to have 'add' here for the icon switch. But only works
  // with '.toggleDark:before {...}' because ':after' adds both icons :(
  darkModeToggle.classList.remove('toggleDark')
}
darkModeToggle.addEventListener('click', () => {
  if (document.documentElement.classList.contains('theme-dark')) {
    document.documentElement.classList.remove('theme-dark');
    darkModeToggle.classList.add('toggleDark')
    localStorage.setItem(darkModeStateKey, false)
  } else {
    document.documentElement.classList.add('theme-dark');
    darkModeToggle.classList.remove('toggleDark')
    localStorage.setItem(darkModeStateKey, true)

  }
})

// ------------------------------ Sidebar -----------------------------
//const isRetina = () => window.devicePixelRatio > 1;
//TODO make an animation for closing/opening svg, right now just simple
const btnSidebar = document.querySelector('#btnSidebar');
const svgSidebar = document.querySelector('#svgSidebar');
const svgSidebarPath = svgSidebar.querySelector('path');
const sidebar = document.querySelector('#sidebar');

const btnSidebarMobile = document.querySelector('#btnSidebarMobile');
const svgSidebarMobile = document.querySelector('#svgSidebarMobile');
const svgSidebarMobilePath = svgSidebarMobile.querySelector('path');
const sidebarMobile = document.querySelector('#sidebarMobile');

btnSidebarMobile.addEventListener('click', (e) => {
  //toggle between hamburger and X:
  svgSidebarMobilePath.setAttribute('d', svgSidebarMobilePath.getAttribute('d') === 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' ? 'M6 18L18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5');
  //initiate closing/opening:
  sidebarMobile.classList.toggle('-translate-x-full')
})

btnSidebar.addEventListener('click', (e) => {
  //TODO try to solve this without the setTimout() func
  sidebar.classList.toggle('xl:translate-x-0')
  //delay toggle hiddden for smoothing out slidebar open/close animation:
  //setTimeout(() => { sidebar.classList.toggle('xl:relative')}, 100 )
  setTimeout(() => { document.querySelector("#layoutFix").classList.toggle("hidden") }, 100 )
  //change btn:
  svgSidebarPath.setAttribute('d', svgSidebarPath.getAttribute('d') === 'M6 18L18 6M6 6l12 12' ? 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' : 'M6 18L18 6M6 6l12 12');
})
