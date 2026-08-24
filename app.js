/* =========================================================
   STRATEGIC MARKETING — app logic
   ========================================================= */
(function(){
  "use strict";
  const D = (typeof window!=="undefined" && window.SM) ? window.SM : {};
  const store = {
    get(k,f){ try{ const v=localStorage.getItem(k); return v===null?f:JSON.parse(v);}catch(e){return f;} },
    set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} }
  };

  /* ---------- Mobile nav toggle + active link ---------- */
  function initNav(){
    const t=document.querySelector('.navtoggle');
    const links=document.querySelector('.navlinks');
    if(t&&links){ t.addEventListener('click',()=>links.classList.toggle('open')); }
    const here=location.pathname.split('/').pop()||'index.html';
    document.querySelectorAll('.navlinks a').forEach(a=>{
      const href=a.getAttribute('href');
      if(href===here) a.classList.add('active');
    });
  }

  /* ---------- Spine scroll-spy ---------- */
  function initSpine(){
    const spineLinks=[...document.querySelectorAll('.spine a')];
    if(!spineLinks.length) return;
    const map=spineLinks.map(a=>({a,el:document.querySelector(a.getAttribute('href'))})).filter(x=>x.el);
    function onScroll(){
      let cur=map[0];
      const y=window.scrollY+120;
      for(const m of map){ if(m.el.offsetTop<=y) cur=m; }
      spineLinks.forEach(a=>a.classList.remove('active'));
      if(cur) cur.a.classList.add('active');
    }
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  }

  /* ---------- Flashcards ---------- */
  function cardHTML(c,i){
    const secTab = (D.SECTIONS&&D.SECTIONS[c.sec]) ? D.SECTIONS[c.sec].tab+' · '+D.SECTIONS[c.sec].title : '';
    return `<button class="flip" data-sec="${c.sec}" aria-label="Flashcard: ${c.q.replace(/"/g,'')}">
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <div class="sec">${secTab}</div>
          <div class="q">${c.q}</div>
          <div class="hint">Tap to reveal ▸</div>
        </div>
        <div class="flip-face flip-back"><div class="a">${c.a}</div></div>
      </div></button>`;
  }
  function initFlashcards(){
    const deck=document.querySelector('[data-flashdeck]');
    if(!deck||!D.FLASHCARDS) return;
    const only=deck.getAttribute('data-flashdeck'); // "" for all, or "s1"
    let cards = only ? D.FLASHCARDS.filter(c=>c.sec===only) : D.FLASHCARDS.slice();
    let filter="all";
    function render(){
      const list = filter==="all"?cards:cards.filter(c=>c.sec===filter);
      deck.innerHTML=list.map(cardHTML).join('');
      deck.querySelectorAll('.flip').forEach(b=>b.addEventListener('click',()=>b.classList.toggle('flipped')));
    }
    // filter pills (only on the full hub)
    const pills=document.querySelector('[data-flashfilter]');
    if(pills){
      const secs=[["all","All"],["s1","3.2 Intro"],["s2","3.3 Ethics"],["s3","3.4 Markets"],["s4","3.5 Strategies"],["s5","3.6 Implementation"]];
      pills.innerHTML=secs.map(([v,l])=>`<button class="filter-pill${v==='all'?' active':''}" data-f="${v}">${l}</button>`).join('');
      pills.querySelectorAll('.filter-pill').forEach(p=>p.addEventListener('click',()=>{
        filter=p.dataset.f; pills.querySelectorAll('.filter-pill').forEach(x=>x.classList.remove('active')); p.classList.add('active'); render();
      }));
    }
    const shuffleBtn=document.querySelector('[data-shuffle]');
    if(shuffleBtn) shuffleBtn.addEventListener('click',()=>{ cards=cards.map(c=>[Math.random(),c]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]); render(); });
    const flipAll=document.querySelector('[data-flipall]');
    if(flipAll) flipAll.addEventListener('click',()=>deck.querySelectorAll('.flip').forEach(b=>b.classList.toggle('flipped')));
    render();
  }

  /* ---------- Quiz engine ---------- */
  function initQuizzes(){
    if(!D.QUIZ) return;
    document.querySelectorAll('[data-quiz]').forEach(root=>{
      const key=root.getAttribute('data-quiz');
      const qs=D.QUIZ[key]; if(!qs) return;
      const state=new Array(qs.length).fill(-1);
      const body=document.createElement('div');
      body.innerHTML=qs.map((q,qi)=>`
        <div class="q-item" data-qi="${qi}">
          <div class="q-num">Q${qi+1} / ${qs.length}</div>
          <div class="q-text">${q.q}</div>
          <div class="opts">${q.options.map((o,oi)=>`<button class="opt" data-oi="${oi}"><span class="mk">${String.fromCharCode(65+oi)}</span>${o}</button>`).join('')}</div>
          <div class="explain"><b>Why:</b> ${q.explain}</div>
        </div>`).join('');
      root.appendChild(body);
      const actions=document.createElement('div');
      actions.className='quiz-actions';
      actions.innerHTML=`<button class="btn btn-dark btn-sm" data-check>Check answers</button>
        <button class="btn btn-ghost btn-sm" style="color:var(--ink);border-color:var(--line-strong)" data-reset>Reset</button>
        <span class="score">—</span>`;
      root.appendChild(actions);

      root.querySelectorAll('.q-item').forEach(item=>{
        const qi=+item.dataset.qi;
        item.querySelectorAll('.opt').forEach(opt=>opt.addEventListener('click',()=>{
          state[qi]=+opt.dataset.oi;
          item.querySelectorAll('.opt').forEach(o=>o.classList.remove('chosen'));
          opt.classList.add('chosen');
        }));
      });
      const scoreEl=actions.querySelector('.score');
      actions.querySelector('[data-check]').addEventListener('click',()=>{
        let correct=0;
        root.querySelectorAll('.q-item').forEach(item=>{
          const qi=+item.dataset.qi, ans=qs[qi].answer;
          item.querySelectorAll('.opt').forEach(o=>{
            const oi=+o.dataset.oi; o.classList.remove('correct','wrong');
            if(oi===ans) o.classList.add('correct');
            else if(oi===state[qi]) o.classList.add('wrong');
          });
          item.querySelector('.explain').classList.add('show');
          if(state[qi]===ans) correct++;
        });
        const pct=Math.round(correct/qs.length*100);
        scoreEl.textContent=`Score: ${correct}/${qs.length} · ${pct}%`;
        scoreEl.classList.add('show');
        scoreEl.style.background = pct>=80?'var(--teal-soft)':pct>=50?'var(--amber-soft)':'var(--coral-soft)';
        // record best score for progress hub
        const best=store.get('sm_quizbest',{}); if(!best[key]||pct>best[key]){best[key]=pct;store.set('sm_quizbest',best);}
      });
      actions.querySelector('[data-reset]').addEventListener('click',()=>{
        state.fill(-1);
        root.querySelectorAll('.opt').forEach(o=>o.classList.remove('chosen','correct','wrong'));
        root.querySelectorAll('.explain').forEach(e=>e.classList.remove('show'));
        scoreEl.classList.remove('show');
      });
    });
  }

  /* ---------- Exam Q&A ---------- */
  function initExam(){
    const root=document.querySelector('[data-exam]');
    if(!root||!D.EXAM) return;
    const only=root.getAttribute('data-exam'); // "" all, or section id
    const list = only?D.EXAM.filter(e=>e.sec===only):D.EXAM;
    root.innerHTML=list.map(e=>{
      const s=D.SECTIONS[e.sec]; const label=s?`${s.tab} ${s.title}`:'';
      return `<details class="qa">
        <summary><span class="qtag">${e.tag}</span><span>${e.q}</span><span class="marks">${e.marks}</span></summary>
        <div class="answer"><div class="chip" style="margin:.9rem 0 .2rem">${e.type?e.type+' · ':''}${label}</div>${e.source?`<div class="answer-source"><strong>Source direction:</strong> ${e.source}</div>`:''}${e.model}</div>
      </details>`;
    }).join('');
    const openAll=document.querySelector('[data-examopen]');
    if(openAll) openAll.addEventListener('click',()=>{
      const open=root.querySelectorAll('details[open]').length<list.length;
      root.querySelectorAll('details').forEach(d=>d.open=open);
      openAll.textContent=open?'Collapse all model answers':'Expand all model answers';
    });
  }

  /* ---------- 30-day calendar + progress ---------- */
  function initCalendar(){
    const root=document.querySelector('[data-calendar]');
    if(!root||!D.CALENDAR) return;
    let done=store.get('sm_days',{});
    const weeks={};
    D.CALENDAR.forEach(d=>{ (weeks[d.week]=weeks[d.week]||[]).push(d); });
    const secName=id=>id==='all'?'Full module':(D.SECTIONS[id]?D.SECTIONS[id].tab+' '+D.SECTIONS[id].title:'');
    let html='';
    Object.keys(weeks).forEach(w=>{
      html+=`<div class="week-label">Week ${w}</div>`;
      weeks[w].forEach(d=>{
        const isDone=!!done[d.day];
        html+=`<div class="day${isDone?' done':''}" data-day="${d.day}">
          <div class="daynum">${d.day}</div>
          <div class="dbody">
            <div class="chip">${secName(d.sec)}</div>
            <h4>${d.focus}</h4>
            <div class="dmeta"><span><b>Study time:</b> ${d.hours}</span><span><b>Guide:</b> ${d.sg}</span></div>
            <div class="reads">${d.tb.map(t=>`<span class="r">${t}</span>`).join('')}</div>
            <ul class="note-list" style="margin-top:.5rem">${d.tasks.map(t=>`<li>${t}</li>`).join('')}</ul>
          </div>
          <input type="checkbox" class="check" ${isDone?'checked':''} aria-label="Mark day ${d.day} complete">
        </div>`;
      });
    });
    root.innerHTML=html;

    function refresh(){
      const total=D.CALENDAR.length;
      const n=Object.values(done).filter(Boolean).length;
      const pct=Math.round(n/total*100);
      const ring=document.querySelector('.ring'); if(ring){ ring.style.setProperty('--p',pct); ring.querySelector('b').textContent=pct+'%'; }
      const bar=document.querySelector('.progress-panel .bar'); if(bar) bar.style.width=pct+'%';
      const cnt=document.querySelector('[data-doncount]'); if(cnt) cnt.textContent=`${n} of ${total} days complete`;
    }
    root.querySelectorAll('.check').forEach(chk=>chk.addEventListener('change',()=>{
      const day=+chk.closest('.day').dataset.day;
      done[day]=chk.checked; store.set('sm_days',done);
      chk.closest('.day').classList.toggle('done',chk.checked);
      refresh();
    }));
    const resetBtn=document.querySelector('[data-resetdays]');
    if(resetBtn) resetBtn.addEventListener('click',()=>{
      if(confirm('Reset all 30-day progress?')){ done={}; store.set('sm_days',done);
        root.querySelectorAll('.check').forEach(c=>c.checked=false);
        root.querySelectorAll('.day').forEach(d=>d.classList.remove('done')); refresh(); }
    });
    refresh();
  }

  /* ---------- Landing progress mirror ---------- */
  function initLandingProgress(){
    const el=document.querySelector('[data-landingprogress]');
    if(!el) return;
    const done=store.get('sm_days',{});
    const total=(D.CALENDAR||[]).length||30;
    const n=Object.values(done).filter(Boolean).length;
    const pct=Math.round(n/total*100);
    const ring=el.querySelector('.ring'); if(ring){ring.style.setProperty('--p',pct);ring.querySelector('b').textContent=pct+'%';}
    const cnt=el.querySelector('[data-doncount]'); if(cnt) cnt.textContent=`${n} of ${total} days complete`;
    const bar=el.querySelector('.bar'); if(bar) bar.style.width=pct+'%';
  }

  /* ---------- PWA: offline + install ---------- */
  function initPWA(){
    // Register the service worker (works over http/https; ignored on file://).
    if('serviceWorker' in navigator && location.protocol.startsWith('http')){
      window.addEventListener('load',function(){
        var refreshing=false;
        var notice=document.createElement('div');
        notice.className='update-notice'; notice.hidden=true;
        notice.setAttribute('role','status');
        notice.innerHTML='<p><strong>New study content is available</strong>Update now to get the latest deep dives, sources and exam material.</p><button class="btn btn-amber btn-sm" type="button">Update now</button>';
        document.body.appendChild(notice);
        function offerUpdate(worker){
          if(!worker) return;
          notice.hidden=false;
          notice.querySelector('button').onclick=function(){
            this.disabled=true; this.textContent='Updating…';
            worker.postMessage({type:'SKIP_WAITING'});
          };
        }
        navigator.serviceWorker.addEventListener('controllerchange',function(){
          if(refreshing) return; refreshing=true; location.reload();
        });
        navigator.serviceWorker.register('service-worker.js').then(function(reg){
          if(reg.waiting) offerUpdate(reg.waiting);
          reg.addEventListener('updatefound',function(){
            var fresh=reg.installing;
            if(!fresh) return;
            fresh.addEventListener('statechange',function(){
              if(fresh.state==='installed' && navigator.serviceWorker.controller) offerUpdate(fresh);
            });
          });
          // Check at each visit instead of waiting for the browser's periodic check.
          reg.update().catch(function(){});
        }).catch(function(){});
      });
    }
    // Custom install button that appears only when the browser offers install.
    var deferred=null;
    var btn=document.createElement('button');
    btn.className='install-fab';
    btn.type='button';
    btn.innerHTML='<span>⤓</span> Install app';
    btn.style.display='none';
    document.body.appendChild(btn);

    window.addEventListener('beforeinstallprompt',function(e){
      e.preventDefault(); deferred=e; btn.style.display='inline-flex';
    });
    btn.addEventListener('click',function(){
      if(!deferred) return;
      deferred.prompt();
      deferred.userChoice.finally(function(){ deferred=null; btn.style.display='none'; });
    });
    window.addEventListener('appinstalled',function(){ btn.style.display='none'; });
  }

  document.addEventListener('DOMContentLoaded',function(){
    initNav(); initSpine(); initFlashcards(); initQuizzes(); initExam(); initCalendar(); initLandingProgress(); initPWA();
  });
})();
