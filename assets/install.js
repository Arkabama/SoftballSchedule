const help=document.querySelector('#install-help');
const button=document.querySelector('#install-button');
const shortcutKey=`softball-installed:${location.pathname}`;
let installPrompt;
const isStandalone=()=>window.matchMedia('(display-mode: standalone)').matches||window.matchMedia('(display-mode: minimal-ui)').matches||window.navigator.standalone===true||document.referrer.startsWith('android-app://');
const isPhone=()=>window.matchMedia('(max-width: 900px) and (pointer: coarse)').matches;
const updateHelp=()=>{
  if(isStandalone())localStorage.setItem(shortcutKey,'1');
  if(isStandalone()||localStorage.getItem(shortcutKey)==='1'){
    help?.remove();
    return;
  }
  const show=isPhone();
  help?.classList.toggle('is-visible',show);
  if(button)button.hidden=!show||!installPrompt;
};
updateHelp();
window.addEventListener('resize',updateHelp);
window.matchMedia('(display-mode: standalone)').addEventListener('change',updateHelp);
window.addEventListener('beforeinstallprompt',event=>{
  event.preventDefault();
  installPrompt=event;
  updateHelp();
});
window.addEventListener('appinstalled',()=>{
  localStorage.setItem(shortcutKey,'1');
  installPrompt=null;
  updateHelp();
});
button?.addEventListener('click',async()=>{
  if(!installPrompt)return;
  const prompt=installPrompt;
  installPrompt=null;
  await prompt.prompt();
  if((await prompt.userChoice).outcome==='accepted')localStorage.setItem(shortcutKey,'1');
  updateHelp();
});
