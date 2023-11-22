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
//SIDEBAR Mobile Issue:
//If you want the sidebar to close not only if the user
//clicks on the close btn, but anywhere on the screen (outside of the
//sidebar). I tried to implement that into the same desktop sidebar. But
//this won't work as we need inset-0 and give a mobile width *because my
//desktop sidebar is setup to have a width for each screen size*. But at that
//point the container no longer spans over whole canvas. And since the
//closing button is a child it cannot span over whole canvas too, which
//is required.
//
//1. I could try to add the btn outside of the sidebar and make that
//work *challenge how to position it relative, if parent is no longer
//sidebar* => failed
//2. I could add a whole new sidebar just for mobile => current solution
//3. I could use Go template lang to use the same sidebar twice but
//adjust the classes where needed (IMO better than 2. but still a lot of
//work)
//4. I could use JS to solve the issue to just listen on clicks outside
//the sidebar and act accordingly. (a little too nasty, fun idea but
//unacceptable)
//Currently went with 2. but I am not super happy as it added a lot of
//complexity for a simple feature. I might skip this feature altogether
//unless I can get rid of the JS hack I had to introduce. See
//btnSidebarMobile event Listener
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

  //Obsolete: Method that should have closed sidebar on mobile when
  //touched outside sidebar (worked on PC with clicks but on phone it
  //did not)

  //btnSidebarMobile.classList.toggle('md:-right-[2.6rem]')
  //btnSidebarMobile.classList.toggle('-right-[4.1rem]')
  //btnSidebarMobile.classList.toggle('left-[17.6rem]')

  //This is a bit of a hack to avoid the burger sliding all the way from
  //the offcanvas right position to the canvas left position when
  //sidebar is closing
  //TODO find a better way to deal with this cosmetic issue, I tried to
  //use 'transition-none' on the btn but that didn't work :(
  //
  //This issue only exists because of wanting the mobile sidebar to be
  //closable while tapping anywhere outside of the sidebar. This feature
  //added a lot of dept. As I had to create two seperate sidebars and
  //this JS hack on top of it.
  //btnSidebarMobile.classList.toggle('hidden')
  //setTimeout(() => {btnSidebarMobile.classList.toggle('hidden')}, 200)
})

btnSidebar.addEventListener('click', (e) => {
  //TODO try to solve this without the setTimout() func
  sidebar.classList.toggle('xl:translate-x-0')
  setTimeout(() => { sidebar.classList.toggle('xl:relative')}, 100 )
  svgSidebarPath.setAttribute('d', svgSidebarPath.getAttribute('d') === 'M6 18L18 6M6 6l12 12' ? 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' : 'M6 18L18 6M6 6l12 12');
})

