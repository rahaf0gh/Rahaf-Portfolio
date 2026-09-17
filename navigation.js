const menuToggle=document.querySelector('.menu-toggle');
const mainNav=document.getElementById('main-nav');
const mobileMenu=window.matchMedia('(max-width: 820px)');
function setMenu(open,restoreFocus=false){mainNav.classList.toggle('is-open',open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',document.documentElement.lang==='ar'?(open?'إغلاق القائمة':'فتح القائمة'):(open?'Close menu':'Open menu'));if(restoreFocus)menuToggle.focus()}
menuToggle.addEventListener('click',()=>setMenu(menuToggle.getAttribute('aria-expanded')!=='true'));
mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('click',e=>{if(!mainNav.contains(e.target)&&!menuToggle.contains(e.target))setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuToggle.getAttribute('aria-expanded')==='true')setMenu(false,true)});
mobileMenu.addEventListener('change',()=>setMenu(false));
new MutationObserver(()=>setMenu(false)).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
