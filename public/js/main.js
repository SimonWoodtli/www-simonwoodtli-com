console.log('hello world')
// Dark Mode: Switch Icon and change bg/font
const toggleDark = document.querySelector('#toggleDark');
toggleDark.onclick = () => {
  toggleDark.classList.toggle('toggleDark');
  console.log('clicked');
};

// Toggle sidebar/menu
// not sure if toggleMenu should not work direclty on aside, why put
// that on burger? TRY
const toggleHamburger= document.querySelector('#toggleHamburger');
const toggleMenu = document.querySelector('#toggleMenu');

toggleHamburger.addEventListener('click', (e) => {
  toggleHamburger.classList.toggle('toggleHamburger')
  toggleMenu.classList.toggle('toggleMenu')
  console.log('foo');
})
