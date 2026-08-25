(function(){
  'use strict';
  var D=window.SM, PD=window.SM_PRACTICE;
  if(!D||!PD) return;

  var KEY='sm_practice_v1';
  var DAY=Math.floor(Date.now()/86400000);
  var intervals=[3,7,14,30];
  var sessionView=document.getElementById('sessionView');
  var startButton=document.getElementById('startSession');
  var statsRoot=document.getElementById('practiceStats');
  var ladderNav=document.getElementById('ladderNav');
  var ladderView=document.getElementById('ladderView');

  function read(){
    try{return JSON.parse(localStorage.getItem(KEY))||{};}catch(e){return {};}
  }
  function write(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}}
  function esc(value){return String(value==null?'':value).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function cleanState(raw){
    return {version:1,items:raw.items||{},ladders:raw.ladders||{},history:Array.isArray(raw.history)?raw.history.slice(-250):[],active:raw.active||null,lastSummary:raw.lastSummary||null};
  }
  var state=cleanState(read());

  function sectionName(sec){
    if(sec==='all') return 'Exam toolkit';
    return D.SECTIONS[sec]?D.SECTIONS[sec].title:sec;
  }
  function recordFor(id){
    if(!state.items[id]) state.items[id]={attempts:0,correct:0,wrong:0,streak:0,due:0,last:0,sec:''};
    return state.items[id];
  }
  function sectionPerformance(sec){
    var rows=Object.keys(state.items).map(function(k){return state.items[k];}).filter(function(r){return r.sec===sec&&r.attempts;});
    var attempts=rows.reduce(function(n,r){return n+r.attempts;},0);
    var correct=rows.reduce(function(n,r){return n+r.correct;},0);
    return {attempts:attempts,correct:correct,rate:attempts?correct/attempts:.5};
  }
  function weakestSection(){
    var measured=Object.keys(D.SECTIONS).map(function(sec){return {sec:sec,perf:sectionPerformance(sec)};}).filter(function(x){return x.perf.attempts>0;});
    measured.sort(function(a,b){return a.perf.rate-b.perf.rate||b.perf.attempts-a.perf.attempts;});
    return measured[0]||null;
  }
  function renderStats(){
    var rows=Object.keys(state.items).map(function(k){return state.items[k];});
    var attempts=rows.reduce(function(n,r){return n+(r.attempts||0);},0);
    var correct=rows.reduce(function(n,r){return n+(r.correct||0);},0);
    var mastered=rows.filter(function(r){return r.streak>=2;}).length;
    var due=rows.filter(function(r){return r.attempts&&r.due<=DAY;}).length;
    var weak=weakestSection();
    statsRoot.innerHTML='<div class="practice-stat"><b>'+mastered+'</b><span>items recalled correctly twice</span></div>'+
      '<div class="practice-stat"><b>'+due+'</b><span>reviews currently due</span></div>'+
      '<div class="practice-stat"><b>'+(attempts?Math.round(correct/attempts*100)+'%':'—')+'</b><span>retrieval accuracy</span></div>'+
      '<div class="practice-stat'+(weak?' weak':'')+'"><b>'+(weak?esc(D.SECTIONS[weak.sec].tab):'—')+'</b><span>'+(weak?'priority: '+esc(D.SECTIONS[weak.sec].title):'complete a session to identify priorities')+'</span></div>';
  }

  function updateRecord(item,correct,origin){
    var rec=recordFor(item.id);
    rec.sec=item.sec; rec.attempts+=1; rec.last=DAY;
    if(correct){
      rec.correct+=1;
      if(item.retry){rec.streak=0;rec.due=DAY+1;}else{rec.streak+=1;rec.due=DAY+intervals[Math.min(rec.streak-1,intervals.length-1)];}
    }else{
      rec.wrong+=1;rec.streak=0;rec.due=DAY+1;
    }
    state.history.push({id:item.id,sec:item.sec,correct:!!correct,day:DAY,origin:origin||'session'});
    state.history=state.history.slice(-250);
    write(); renderStats();
  }

  function priority(id,sec){
    var rec=recordFor(id), perf=sectionPerformance(sec);
    var score=Math.random()*8+(1-perf.rate)*30;
    if(!rec.attempts) score+=24;
    else{
      if(rec.due<=DAY) score+=70+Math.min(25,(DAY-rec.due)*4);
      score+=(rec.wrong/rec.attempts)*35-rec.streak*8;
    }
    return score;
  }
  function selectMixed(pool,count,maxPerSection){
    pool.sort(function(a,b){return b.score-a.score;});
    var selected=[],per={};
    pool.forEach(function(item){
      if(selected.length>=count) return;
      per[item.sec]=per[item.sec]||0;
      if(per[item.sec]<(maxPerSection||count)){selected.push(item);per[item.sec]+=1;}
    });
    if(selected.length<count){pool.forEach(function(item){if(selected.length<count&&selected.indexOf(item)<0)selected.push(item);});}
    return selected;
  }
  function buildSession(){
    var cards=D.FLASHCARDS.map(function(card,index){var id='flash:'+index;return {kind:'flash',id:id,sec:card.sec,index:index,score:priority(id,card.sec)};});
    var quizzes=[];
    Object.keys(D.QUIZ).forEach(function(sec){D.QUIZ[sec].forEach(function(q,index){var id='quiz:'+sec+':'+index;quizzes.push({kind:'quiz',id:id,sec:sec,index:index,score:priority(id,sec)});});});
    var chosen=selectMixed(cards,5,2).concat(selectMixed(quizzes,2,1));
    var weak=weakestSection();
    var ladder=PD.ladders.find(function(l){return l.sec===(weak&&weak.sec);})||PD.ladders[Math.floor(Math.random()*5)];
    var appliedStep=ladder.steps[(DAY%2)?2:3];
    chosen.push({kind:'application',id:'ladder:'+ladder.id+':'+appliedStep.level,sec:ladder.sec,ladder:ladder.id,level:appliedStep.level,score:0});
    var exam=PD.ladders.find(function(l){return l.id==='exam';});
    var examStep=exam.steps[(DAY%2)?2:3];
    chosen.push({kind:'application',id:'ladder:exam:'+examStep.level,sec:'all',ladder:'exam',level:examStep.level,score:0});
    state.active={created:Date.now(),position:0,items:chosen,responses:{},correct:0,attempted:0};
    write();
  }
  function activeItem(){return state.active&&state.active.items[state.active.position];}
  function sessionProgress(){
    var a=state.active,total=a.items.length,current=Math.min(a.position+1,total);
    return '<div class="session-progress"><div class="session-progress-meta"><span>Activity '+current+' of '+total+'</span><span>'+Math.round(a.position/total*100)+'% complete</span></div><div class="session-track"><span style="width:'+Math.round(a.position/total*100)+'%"></span></div></div>';
  }
  function itemMeta(item,label){return '<div class="item-meta"><span class="item-chip">'+esc(label)+'</span><span class="item-chip sec">'+esc(item.sec==='all'?'Exam':(D.SECTIONS[item.sec]||{}).tab)+'</span></div>';}
  function findStep(item){var ladder=PD.ladders.find(function(l){return l.id===item.ladder;});return {ladder:ladder,step:ladder.steps.find(function(s){return s.level===item.level;})};}

  function addRetry(item){
    if(item.retry) return;
    var exists=state.active.items.some(function(x,i){return i>state.active.position&&x.id===item.id&&x.retry;});
    if(!exists){var retry=Object.assign({},item,{retry:true});state.active.items.push(retry);}
  }
  function finishResponse(item,correct,details){
    if(state.active.responses[state.active.position]) return;
    state.active.responses[state.active.position]={correct:!!correct,details:details||{}};
    state.active.attempted+=1;if(correct)state.active.correct+=1;else addRetry(item);
    updateRecord(item,correct,'session');write();
  }
  function nextItem(){
    state.active.position+=1;write();
    if(state.active.position>=state.active.items.length) finishSession(); else renderSession();
  }
  function nextButton(){return '<button class="btn btn-dark" type="button" data-next>Next activity →</button>';}

  function renderFlash(item){
    var card=D.FLASHCARDS[item.index],response=state.active.responses[state.active.position];
    sessionView.innerHTML=sessionProgress()+'<article class="practice-item">'+itemMeta(item,item.retry?'Correction round · flashcard':'Active recall · flashcard')+'<h3>'+esc(card.q)+'</h3><p class="prompt">Write or say the answer from memory before revealing it.</p><textarea class="response-box" aria-label="Your recalled answer" placeholder="Explain it in your own words…"></textarea><div class="item-actions"><button class="btn btn-dark" type="button" data-reveal>Reveal answer</button></div><div data-answer></div></article>';
    if(response){showFlashAnswer(card,response);return;}
    sessionView.querySelector('[data-reveal]').addEventListener('click',function(){showFlashAnswer(card,null);});
  }
  function showFlashAnswer(card,response){
    var answer=sessionView.querySelector('[data-answer]'),actions=sessionView.querySelector('.item-actions');
    answer.innerHTML='<div class="answer-panel"><h4>Model answer</h4><p>'+card.a+'</p></div>';
    if(response){actions.innerHTML=nextButton();bindNext();return;}
    actions.innerHTML='<button class="btn btn-review" type="button" data-grade="0">Needs review</button><button class="btn btn-solid" type="button" data-grade="1">Recalled accurately</button>';
    actions.querySelectorAll('[data-grade]').forEach(function(button){button.addEventListener('click',function(){var item=activeItem();finishResponse(item,button.getAttribute('data-grade')==='1');actions.innerHTML=nextButton();bindNext();});});
  }

  function renderQuiz(item){
    var q=D.QUIZ[item.sec][item.index],response=state.active.responses[state.active.position];
    var options=q.options.map(function(option,index){return '<button class="quiz-option" type="button" data-choice="'+index+'"><b>'+String.fromCharCode(65+index)+'</b><span>'+esc(option)+'</span></button>';}).join('');
    sessionView.innerHTML=sessionProgress()+'<article class="practice-item">'+itemMeta(item,item.retry?'Correction round · applied question':'Applied multiple choice')+'<h3>'+esc(q.q)+'</h3><div class="quiz-options">'+options+'</div><div data-feedback></div><div class="item-actions"></div></article>';
    if(response){showQuizFeedback(q,response.details.choice,response.correct);return;}
    sessionView.querySelectorAll('[data-choice]').forEach(function(button){button.addEventListener('click',function(){var choice=Number(button.getAttribute('data-choice')),correct=choice===q.answer;finishResponse(item,correct,{choice:choice});showQuizFeedback(q,choice,correct);});});
  }
  function showQuizFeedback(q,choice,correct){
    var buttons=sessionView.querySelectorAll('[data-choice]');
    buttons.forEach(function(button){button.disabled=true;var n=Number(button.getAttribute('data-choice'));if(n===q.answer)button.classList.add('correct');else if(n===choice)button.classList.add('incorrect');});
    sessionView.querySelector('[data-feedback]').innerHTML='<div class="feedback '+(correct?'correct':'incorrect')+'"><strong>'+(correct?'Correct.':'Not yet.')+'</strong> '+esc(q.explain)+'</div>';
    sessionView.querySelector('.item-actions').innerHTML=nextButton();bindNext();
  }

  function renderApplication(item){
    var found=findStep(item),step=found.step,ladder=found.ladder,response=state.active.responses[state.active.position];
    sessionView.innerHTML=sessionProgress()+'<article class="practice-item">'+itemMeta(item,item.retry?'Correction round · application':'Application ladder · '+step.label)+'<h3>'+esc(ladder.title)+'</h3><p class="prompt">'+esc(step.prompt)+'</p><textarea class="response-box" aria-label="Your application response" placeholder="Build your reasoning before revealing the model…"></textarea><div class="item-actions"><button class="btn btn-ghost" type="button" data-hint>Show a hint</button><button class="btn btn-dark" type="button" data-reveal>Reveal model reasoning</button></div><div data-hint-panel></div><div data-answer></div></article>';
    if(response){showApplicationModel(step,response);return;}
    sessionView.querySelector('[data-hint]').addEventListener('click',function(){sessionView.querySelector('[data-hint-panel]').innerHTML='<div class="hint-panel"><h4>Planning hint</h4>'+esc(step.hint)+'</div>';this.remove();});
    sessionView.querySelector('[data-reveal]').addEventListener('click',function(){showApplicationModel(step,null);});
  }
  function showApplicationModel(step,response){
    var answer=sessionView.querySelector('[data-answer]'),actions=sessionView.querySelector('.item-actions');
    answer.innerHTML='<div class="answer-panel"><h4>Model reasoning</h4>'+step.model+'<h4>Self-marking rubric</h4><ul class="model-rubric">'+step.rubric.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>';
    if(response){actions.innerHTML=nextButton();bindNext();return;}
    actions.innerHTML='<button class="btn btn-review" type="button" data-grade="0">Needs another attempt</button><button class="btn btn-solid" type="button" data-grade="1">Meets the rubric</button>';
    actions.querySelectorAll('[data-grade]').forEach(function(button){button.addEventListener('click',function(){var item=activeItem();finishResponse(item,button.getAttribute('data-grade')==='1');actions.innerHTML=nextButton();bindNext();});});
  }
  function bindNext(){var button=sessionView.querySelector('[data-next]');if(button)button.addEventListener('click',nextItem);}
  function renderSession(){
    var item=activeItem();
    startButton.textContent='Resume current session →';
    if(!item){finishSession();return;}
    if(item.kind==='flash')renderFlash(item);else if(item.kind==='quiz')renderQuiz(item);else renderApplication(item);
  }
  function finishSession(){
    var a=state.active;
    var weakSecs={};
    a.items.forEach(function(item,index){var response=a.responses[index];if(response&&!response.correct&&item.sec!=='all')weakSecs[item.sec]=true;});
    state.lastSummary={day:DAY,correct:a.correct,attempted:a.attempted,weak:Object.keys(weakSecs)};
    state.active=null;write();renderStats();startButton.textContent='Start another adaptive session →';
    var links=Object.keys(weakSecs).map(function(sec){var ladder=PD.ladders.find(function(l){return l.sec===sec;});return ladder?'<a href="?ladder='+ladder.id+'#ladders">'+esc(D.SECTIONS[sec].tab)+' · '+esc(ladder.short)+'</a>':'';}).join('');
    sessionView.innerHTML='<div class="session-complete"><span class="eyebrow">Session complete</span><h3>'+a.correct+' of '+a.attempted+' activities met the answer standard</h3><p>Items that need work have been scheduled sooner. Strong items will return after a longer interval.</p>'+(links?'<div class="weak-list">'+links+'</div>':'<p><strong>No priority section emerged in this session.</strong></p>')+'<button class="btn btn-dark" type="button" data-new-session>Build another session</button></div>';
    sessionView.querySelector('[data-new-session]').addEventListener('click',startNewSession);
  }
  function startNewSession(){buildSession();renderSession();document.getElementById('dailySession').scrollIntoView({behavior:'smooth',block:'start'});}

  function renderLadderNav(active){
    ladderNav.innerHTML=PD.ladders.map(function(l){return '<button type="button" role="tab" data-ladder="'+l.id+'" aria-selected="'+(l.id===active?'true':'false')+'"><span>'+esc(l.tab)+'</span>'+esc(l.short)+'</button>';}).join('');
    ladderNav.querySelectorAll('[data-ladder]').forEach(function(button){button.addEventListener('click',function(){renderLadder(button.getAttribute('data-ladder'),null,true);});});
  }
  function renderLadder(id,openLevel,updateUrl){
    var ladder=PD.ladders.find(function(l){return l.id===id;})||PD.ladders[0];
    var progress=state.ladders[ladder.id]||{};
    renderLadderNav(ladder.id);
    var done=ladder.steps.filter(function(s){return progress[s.level];}).length;
    var steps=ladder.steps.map(function(step){var complete=!!progress[step.level],open=openLevel===step.level||(!openLevel&&!complete&&step.level===done+1);return '<details class="ladder-step'+(complete?' complete':'')+'" data-level="'+step.level+'"'+(open?' open':'')+'><summary><span class="level-number">'+step.level+'</span><span><b>'+esc(step.label)+'</b><small>'+esc(step.prompt)+'</small></span><span class="step-status">'+(complete?'Completed':'Try it')+'</span></summary><div class="step-body"><p class="prompt">'+esc(step.prompt)+'</p><textarea class="response-box" aria-label="Your answer for '+esc(step.label)+'" placeholder="Write your response before revealing the guidance…"></textarea><div class="item-actions"><button class="btn btn-ghost btn-sm" type="button" data-ladder-hint>Hint</button><button class="btn btn-dark btn-sm" type="button" data-ladder-model>Reveal model reasoning</button></div><div data-ladder-hint-panel></div><div data-ladder-model-panel></div></div></details>';}).join('');
    ladderView.innerHTML='<section class="ladder-summary"><div><span class="eyebrow">'+esc(ladder.tab)+' application ladder</span><h3>'+esc(ladder.title)+'</h3><p>'+esc(ladder.source)+'</p><div class="ladder-progress" aria-label="'+done+' of 5 levels completed">'+ladder.steps.map(function(s){return '<span class="'+(progress[s.level]?'done':'')+'"></span>';}).join('')+'</div></div><div class="ladder-memory">'+esc(ladder.memory)+'</div></section><div class="ladder-steps">'+steps+'</div>';
    ladderView.querySelectorAll('.ladder-step').forEach(function(root){
      var level=Number(root.getAttribute('data-level')),step=ladder.steps.find(function(s){return s.level===level;});
      root.querySelector('[data-ladder-hint]').addEventListener('click',function(){root.querySelector('[data-ladder-hint-panel]').innerHTML='<div class="hint-panel"><h4>Planning hint</h4>'+esc(step.hint)+'</div>';this.remove();});
      root.querySelector('[data-ladder-model]').addEventListener('click',function(){
        root.querySelector('[data-ladder-model-panel]').innerHTML='<div class="step-model"><h4>Model reasoning</h4>'+step.model+'<h4>Use this rubric</h4><ul class="model-rubric">'+step.rubric.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul><div class="source-actions"><a href="'+ladder.deep+'">Open linked deep note</a><a href="'+(D.SECTIONS[ladder.sec]?D.SECTIONS[ladder.sec].file+'#cards':'flashcards.html')+'">Related flashcards</a><a href="tests.html'+(ladder.id==='exam'?'#exam':'')+'">Related tests</a></div></div>';
        var actions=root.querySelector('.item-actions');
        actions.innerHTML='<button class="btn btn-review btn-sm" type="button" data-ladder-grade="0">Needs work</button><button class="btn btn-solid btn-sm" type="button" data-ladder-grade="1">Meets the rubric</button>';
        actions.querySelectorAll('[data-ladder-grade]').forEach(function(button){button.addEventListener('click',function(){var correct=button.getAttribute('data-ladder-grade')==='1';state.ladders[ladder.id]=state.ladders[ladder.id]||{};state.ladders[ladder.id][level]=correct;updateRecord({id:'ladder:'+ladder.id+':'+level,sec:ladder.sec},correct,'ladder');write();renderLadder(ladder.id,level,true);});});
      });
    });
    if(updateUrl){var nextUrl='?ladder='+ladder.id+'#ladders';history.replaceState(null,'',nextUrl);}
  }

  startButton.addEventListener('click',function(){if(state.active&&state.active.position<state.active.items.length)renderSession();else startNewSession();document.getElementById('dailySession').scrollIntoView({behavior:'smooth',block:'start'});});
  document.getElementById('resetPractice').addEventListener('click',function(){if(confirm('Reset adaptive-session and application-ladder progress on this device?')){localStorage.removeItem(KEY);state=cleanState({});renderStats();renderLadder(PD.ladders[0].id);sessionView.innerHTML='';startButton.textContent='Start today’s session →';}});

  renderStats();
  var requested=new URLSearchParams(location.search).get('ladder');
  renderLadder(requested||PD.ladders[0].id,null,false);
  if(state.active&&state.active.position<state.active.items.length){startButton.textContent='Resume current session →';renderSession();}
})();
