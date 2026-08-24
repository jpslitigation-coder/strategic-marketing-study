(function(){
  'use strict';
  document.querySelectorAll('[data-print-sheet]').forEach(function(button){
    button.addEventListener('click',function(){
      var id=button.getAttribute('data-print-sheet');
      var size=button.getAttribute('data-size')||'A4 landscape';
      var target=document.getElementById(id); if(!target)return;
      document.body.classList.add('printing-one'); target.classList.add('print-target');
      var style=document.createElement('style'); style.id='dynamic-print-size';
      style.textContent='@page{size:'+size+';margin:7mm}'; document.head.appendChild(style);
      var clean=function(){document.body.classList.remove('printing-one');target.classList.remove('print-target');style.remove();window.removeEventListener('afterprint',clean);};
      window.addEventListener('afterprint',clean); window.print(); setTimeout(clean,1500);
    });
  });
})();
