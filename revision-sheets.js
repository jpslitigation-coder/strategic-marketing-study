(function(){
  'use strict';

  var printStyle=null;
  var printTarget=null;
  var cleanPrint=function(){
    document.body.classList.remove('printing-one');
    if(printTarget) printTarget.classList.remove('print-target');
    if(printStyle) printStyle.remove();
    printStyle=null; printTarget=null;
    window.removeEventListener('afterprint',cleanPrint);
  };

  document.querySelectorAll('[data-print-sheet]').forEach(function(button){
    button.addEventListener('click',function(){
      cleanPrint();
      var id=button.getAttribute('data-print-sheet');
      var size=button.getAttribute('data-size')||'A4 landscape';
      printTarget=document.getElementById(id);
      if(!printTarget) return;
      document.body.classList.add('printing-one');
      printTarget.classList.add('print-target');
      printStyle=document.createElement('style');
      printStyle.id='dynamic-print-size';
      printStyle.textContent='@page{size:'+size+';margin:7mm}';
      document.head.appendChild(printStyle);
      window.addEventListener('afterprint',cleanPrint);
      window.print();
      window.setTimeout(cleanPrint,2000);
    });
  });

  var index=document.getElementById('sheetIndex');
  if(!index) return;
  var links=Array.prototype.slice.call(index.querySelectorAll('a[href^="#sheet-"]'));
  var sections=links.map(function(link){return document.querySelector(link.getAttribute('href'));}).filter(Boolean);
  var ticking=false;

  function setCurrent(id){
    links.forEach(function(link){
      if(link.getAttribute('href')==='#'+id) link.setAttribute('aria-current','true');
      else link.removeAttribute('aria-current');
    });
  }

  function updateCurrent(){
    ticking=false;
    var offset=Math.min(window.innerHeight*.38,220);
    var current=sections[0];
    sections.forEach(function(section){
      if(section.getBoundingClientRect().top<=offset) current=section;
    });
    if(current) setCurrent(current.id);
  }

  function requestUpdate(){
    if(ticking) return;
    ticking=true;
    window.requestAnimationFrame(updateCurrent);
  }

  links.forEach(function(link){
    link.addEventListener('click',function(){
      var section=document.querySelector(link.getAttribute('href'));
      if(section) setCurrent(section.id);
    });
  });
  window.addEventListener('scroll',requestUpdate,{passive:true});
  window.addEventListener('resize',requestUpdate);
  updateCurrent();
})();
