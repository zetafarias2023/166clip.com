let _tt;function toast(m){const t=document.getElementById('toast');if(!t)return;t.textContent=m;t.classList.add('on');clearTimeout(_tt);_tt=setTimeout(()=>t.classList.remove('on'),2300)}
const $=id=>document.getElementById(id),v=$('v'),cv=$('cv'),x=cv.getContext('2d'),rs=$('rs'),rg=$('rg'),ph=$('ph'),root=document.documentElement;
$('th').onclick=()=>{const d=root.dataset.theme==='dark'||(!root.dataset.theme&&matchMedia('(prefers-color-scheme:dark)').matches);root.dataset.theme=d?'light':'dark'};
/* ---- Firebase (solo funciona alojado en un dominio autorizado) ---- */
const FBC={apiKey:"AIzaSyBooprZzsfe6kSmL7H5gmadRgpx4JcsFno",authDomain:"zeta166-933e3.firebaseapp.com",projectId:"zeta166-933e3",storageBucket:"zeta166-933e3.firebasestorage.app",messagingSenderId:"269766305625",appId:"1:269766305625:web:808af181fddf4ce30f8e48"};
let fb=null,user=null;
(async()=>{try{const V='https://www.gstatic.com/firebasejs/10.12.2/',{initializeApp}=await import(V+'firebase-app.js'),A=await import(V+'firebase-auth.js'),auth=A.getAuth(initializeApp(FBC));fb={A,auth};
A.onAuthStateChanged(auth,u=>setUser(u?{name:u.displayName||u.email||'Usuario'}:null));$('fs').textContent='Login con Google listo ✔'}
catch(e){$('fs').textContent='Vista previa: el login con Google se activa al alojar la web en tu dominio de Firebase. Mientras tanto, entrá sin cuenta.'}})();
function setUser(u){user=u;$('login').classList.toggle('hid',!!u);$('app').classList.toggle('hid',!u);$('nv').classList.toggle('hid',!u);const c=$('uc');c.innerHTML='';
if(u){const a=document.createElement('span');a.className='av';a.textContent=(u.name||'?')[0].toUpperCase();const n=document.createElement('span');n.textContent=u.name;const b=document.createElement('button');b.textContent='Salir';b.onclick=async()=>{try{if(fb)await fb.A.signOut(fb.auth)}catch(e){}setUser(null)};c.append(a,n,b)}}
$('gl').onclick=async()=>{if(!fb){$('fs').textContent='Google no está disponible en esta vista previa. Probá alojando la web en Firebase Hosting, o entrá sin cuenta.';return}
try{await fb.A.signInWithPopup(fb.auth,new fb.A.GoogleAuthProvider())}catch(e){$('fs').textContent='No se pudo iniciar sesión: '+(e.code||e.message)}};
$('gu').onclick=()=>setUser({name:'Invitado'});
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{document.querySelectorAll('.tab').forEach(o=>o.classList.toggle('on',o===t));['a','e','v','c','g','b'].forEach(k=>$('s-'+k).classList.toggle('hid',k!==t.dataset.t))});
/* ---- Plantillas ---- */
const T=[{n:'Neón Kick',bg:['#04110a','#0b3a14'],m:'card',ac:'#53fc18'},{n:'Twitch',bg:['#150a2e','#5b21b6'],m:'card',ac:'#a970ff'},{n:'Fuego',bg:['#2a0600','#c2410c'],m:'card',ac:'#fdba74'},{n:'Océano',bg:['#021a2e','#0369a1'],m:'card',ac:'#38bdf8'},{n:'Rosa neón',bg:['#2b0420','#be185d'],m:'card',ac:'#f472b6'},{n:'Oro cine',bg:['#000','#1c1710'],m:'card',ac:'#ffd84d'},{n:'Blur pro',bg:['#222','#000'],m:'blur',ac:'#ffffff'},{n:'Pantalla completa',bg:['#333','#111'],m:'flat',ac:'#53fc18'},{n:'Hielo',bg:['#0b1d2a','#94a3b8'],m:'card',ac:'#e0f2fe'},{n:'Sangre',bg:['#1a0000','#7f1d1d'],m:'card',ac:'#f87171'}];
let ti=0,lay='single',pn=0,subs=[],blob=null,busy=false,url=null,photo=null,logo=null,clips=[];const F=[{z:1,x:.5,y:.5},{z:1,x:.5,y:.5}];
[['grid','glow','#a3ff7a'],['dots','grad','#ec4899'],['stripes','grad','#ef4444'],['grid','double',''],['dots','glow',''],['none','double',''],['none','thin',''],['none','none',''],['dots','double',''],['stripes','glow','']].forEach((a,i)=>Object.assign(T[i],{pat:a[0],fr:a[1],a2:a[2]}));
T.push({n:'Cyber',bg:['#05010f','#1e0a4a'],m:'card',ac:'#22d3ee',a2:'#e879f9',pat:'grid',fr:'grad'},{n:'Atardecer',bg:['#3b0764','#f97316'],m:'card',ac:'#fde68a',a2:'#fb7185',pat:'dots',fr:'grad'},{n:'Blanco limpio',bg:['#f8fafc','#cbd5e1'],m:'card',ac:'#0f172a',a2:'#64748b',pat:'none',fr:'thick'});
T.forEach((t,i)=>{const b=document.createElement('button');b.textContent=t.n;b.style.background=`linear-gradient(135deg,${t.bg[0]},${t.bg[1]})`;b.onclick=()=>{ti=i;document.querySelectorAll('.tpl button').forEach((o,j)=>o.classList.toggle('on',j===i))};if(!i)b.className='on';$('tp').appendChild(b)});
document.querySelectorAll('#ly button').forEach(b=>b.onclick=()=>{lay=b.dataset.l;document.querySelectorAll('#ly button').forEach(o=>o.classList.toggle('on',o===b));$('phw').classList.toggle('hid',lay!=='photo');const two=lay==='split'||lay==='37'||lay==='pip';if(lay==='pip'&&F[1].z===1)Object.assign(F[1],{z:1.8,x:.1,y:.15});$('pn').classList.toggle('hid',!two);$('pn').previousElementSibling.classList.toggle('hid',!two);if(!two){pn=0;$('pn').value=0}sync()});
function sync(){const f=F[pn];$('zm').value=f.z;$('px').value=f.x;$('py').value=f.y}
$('pn').onchange=()=>{pn=+$('pn').value;sync()};
['zm','px','py'].forEach((k,i)=>$(k).oninput=()=>{F[pn][['z','x','y'][i]]=+$(k).value});
$('pn').classList.add('hid');$('pn').previousElementSibling.classList.add('hid');
$('fm').onchange=()=>{const s={v:[1080,1920],s:[1080,1080],h:[1920,1080]}[$('fm').value];cv.width=s[0];cv.height=s[1]};
const img=(inp,cb)=>inp.onchange=()=>{const f=inp.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const i=new Image();i.onload=()=>cb(i);i.src=r.result};r.readAsDataURL(f)};
img($('pf'),i=>photo=i);img($('lf'),i=>logo=i);
const fmt=s=>Math.floor(s/60)+':'+(s%60).toFixed(1).padStart(4,'0');
$('drop').onclick=()=>$('f').click();
['dragover','dragenter'].forEach(e=>$('drop').addEventListener(e,k=>{k.preventDefault();$('drop').classList.add('h')}));
['dragleave','drop'].forEach(e=>$('drop').addEventListener(e,k=>{k.preventDefault();$('drop').classList.remove('h')}));
$('drop').addEventListener('drop',k=>{if(k.dataTransfer.files[0])load(k.dataTransfer.files[0])});
$('f').onchange=e=>{if(e.target.files[0])load(e.target.files[0])};
function vsrc(el,b,u,fail){delete el.dataset.fb;el.onerror=()=>{if(el.dataset.fb){fail&&fail();return}el.dataset.fb=1;const r=new FileReader();r.onload=()=>{el.src=r.result};r.onerror=()=>fail&&fail();r.readAsDataURL(b)};el.src=u}
function load(f,cv2){if(url)URL.revokeObjectURL(url);url=URL.createObjectURL(f);$('lerr').textContent='';vsrc(v,f,url,()=>{if(cv2||!window.__ffix){$('lerr').textContent='No se pudo abrir este video, ni siquiera convertido. Probá con otro archivo.';return}window.__ffix(f,$('lerr')).then(n=>load(n,1)).catch(()=>{})});$('nm').value=f.name.replace(/\.[^.]+$/,'')+'-clip';$('ed').classList.remove('hid');$('drop').classList.add('hid');$('rc').classList.add('hid')}
v.onloadedmetadata=()=>{rs.max=rg.max=v.duration;rs.value=0;rg.value=Math.min(v.duration,30);upd();v.currentTime=0};
const pt=s=>{s=String(s).trim().replace(',','.');if(s.includes(':')){const p=s.split(':').map(Number);return p.some(isNaN)?NaN:p.reduce((a,n)=>a*60+n,0)}return parseFloat(s)};
function upd(){let a=+rs.value,b=+rg.value,m=+rs.max||1;if(b<=a){b=Math.min(m,a+.5);rg.value=b}$('ts').textContent=fmt(a);$('te').textContent=fmt(b);$('td').textContent=(b-a).toFixed(1)+'s';ph.min=a;ph.max=b;if(document.activeElement!==$('si'))$('si').value=fmt(a);if(document.activeElement!==$('ei'))$('ei').value=fmt(b);$('tf').style.left=a/m*100+'%';$('tf').style.width=(b-a)/m*100+'%'}
$('si').onchange=()=>{const n=pt($('si').value);if(!isNaN(n)){rs.value=Math.max(0,Math.min(n,+rs.max));upd();v.currentTime=+rs.value}else upd()};
$('ei').onchange=()=>{const n=pt($('ei').value);if(!isNaN(n)){rg.value=Math.max(0,Math.min(n,+rg.max));upd();v.currentTime=+rg.value}else upd()};
document.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>{const k=b.dataset.n,el=k[0]==='s'?rs:rg;el.value=Math.max(0,Math.min(+el.value+parseFloat(k.slice(1)),+el.max));upd();v.currentTime=+el.value});
document.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{rg.value=Math.min(+rg.max,+rs.value+ +b.dataset.d);upd()});
rs.oninput=()=>{upd();v.currentTime=+rs.value};rg.oninput=()=>{upd();v.currentTime=+rg.value};
$('bs').onclick=()=>{rs.value=v.currentTime;upd()};$('be').onclick=()=>{rg.value=v.currentTime;upd()};
$('pl').onclick=()=>{if(v.paused){if(v.currentTime<+rs.value||v.currentTime>=+rg.value-.1)v.currentTime=+rs.value;v.play()}else v.pause()};
ph.oninput=()=>{v.currentTime=+ph.value};
/* ---- Render ---- */
function rects(W,H,c){const p=c?W*.05:0,w=W-2*p,q=(a,b,d,e)=>[p,c?H*a:H*b,w,c?H*d:H*e];
return{single:[q(.1,0,.8,1)],split:[q(.1,0,.38,.5),q(.52,.5,.38,.5)],'37':[q(.08,0,.26,.3),q(.36,.3,.54,.7)],photo:[q(.08,0,.36,.4),q(.46,.4,.44,.6)],pip:[q(.08,0,.84,1),[p+W*.04,(c?.92:1)*H-W*.4,W*.36,W*.36]],wide:[[p,(H-w*9/16)/2-H*.04,w,w*9/16]]}[lay]}
function rr(r,k){x.beginPath();x.roundRect(r[0],r[1],r[2],r[3],k??cv.width*.03)}
function pan(r,src,f,card,ac,c){const sw=src&&(src.videoWidth||src.width);x.save();if(c)rr(r,r[2]/2);else if(card)rr(r);else{x.beginPath();x.rect(...r)}x.clip();
if(sw){const sh=src.videoHeight||src.height,s=Math.max(r[2]/sw,r[3]/sh)*f.z,dw=sw*s,dh=sh*s;x.drawImage(src,r[0]+(r[2]-dw)*f.x,r[1]+(r[3]-dh)*f.y,dw,dh)}
else{x.fillStyle='#1f2937';x.fillRect(...r);x.fillStyle='#9ca3af';x.font='700 34px system-ui';x.textAlign='center';x.fillText('🖼 Subí una foto',r[0]+r[2]/2,r[1]+r[3]/2)}
x.restore();if(card||c)frm(r,ac,c)}
function frm(r,ac,c){const t=T[ti],f=t.fr||'glow',R=q=>rr(q,c?q[2]/2:undefined);x.save();
if(f==='glow'){x.strokeStyle=ac;x.lineWidth=4;x.shadowColor=ac;x.shadowBlur=24;R(r);x.stroke()}
else if(f==='grad'){const g=x.createLinearGradient(r[0],r[1],r[0]+r[2],r[1]+r[3]);g.addColorStop(0,ac);g.addColorStop(1,t.a2||ac);x.strokeStyle=g;x.lineWidth=6;x.shadowColor=ac;x.shadowBlur=18;R(r);x.stroke()}
else if(f==='double'){x.strokeStyle=ac;x.lineWidth=3;R(r);x.stroke();const o=cv.width*.012;R([r[0]-o,r[1]-o,r[2]+2*o,r[3]+2*o]);x.lineWidth=1.5;x.stroke()}
else if(f==='thick'){x.strokeStyle=ac;x.lineWidth=10;R(r);x.stroke()}
else if(f==='thin'){x.strokeStyle='rgba(255,255,255,.5)';x.lineWidth=2;R(r);x.stroke()}
x.restore()}
function pat(W,H,t){if(!t.pat||t.pat==='none')return;x.save();x.globalAlpha=.1;x.strokeStyle=x.fillStyle='#fff';
if(t.pat==='grid'){x.lineWidth=2;const s=W/12;for(let i=0;i<=W;i+=s){x.beginPath();x.moveTo(i,0);x.lineTo(i,H);x.stroke()}for(let j=0;j<=H;j+=s){x.beginPath();x.moveTo(0,j);x.lineTo(W,j);x.stroke()}}
else if(t.pat==='dots'){const s=W/16;for(let i=s/2;i<W;i+=s)for(let j=s/2;j<H;j+=s){x.beginPath();x.arc(i,j,3,0,7);x.fill()}}
else{x.lineWidth=W*.025;for(let i=-H;i<W;i+=W*.11){x.beginPath();x.moveTo(i,H);x.lineTo(i+H,0);x.stroke()}}
x.restore()}
function ttl(W,H,t){const tx=$('ti').value.trim();if(!tx)return;const st=$('tst').value,fs=W*.065*$('tsz').value/100,up=st==='imp'||st==='cmc'||st==='box'||st==='pil',s=up?tx.toUpperCase():tx;
x.font=`900 ${fs}px Impact,"Arial Black",system-ui,sans-serif`;x.textAlign='center';x.textBaseline='middle';x.lineJoin='round';
const L=[''];s.split(/\s+/).forEach(w=>{const c=L[L.length-1]?L[L.length-1]+' '+w:w;if(x.measureText(c).width>W*.84&&L[L.length-1])L.push(w);else L[L.length-1]=c});
const lh=fs*1.15,cy=({top:.065,mid:.5,low:.87})[$('tpo').value]*H,y0=cy-(L.length-1)*lh/2;x.save();
if(st==='cmc'){x.translate(W/2,cy);x.rotate(-.06);x.translate(-W/2,-cy)}
L.forEach((ln,i)=>{const y=y0+i*lh,w=x.measureText(ln).width;
if(st==='box'||st==='pil'){x.fillStyle=st==='box'?'#ffe600':t.ac;x.beginPath();x.roundRect(W/2-w/2-fs*.4,y-lh/2,w+fs*.8,lh,st==='pil'?lh/2:fs*.18);x.fill();x.fillStyle=st==='box'?'#000':'#07100a';x.fillText(ln,W/2,y)}
else if(st==='bnr'){x.fillStyle='rgba(0,0,0,.65)';x.fillRect(0,y-lh/2,W,lh);x.fillStyle=t.ac;x.fillRect(0,y+lh/2-4,W,4);x.fillStyle='#fff';x.fillText(ln,W/2,y)}
else if(st==='neo'){x.shadowColor=t.ac;x.shadowBlur=fs*.6;x.fillStyle='#fff';x.fillText(ln,W/2,y);x.shadowBlur=fs*.3;x.fillStyle=t.ac;x.globalAlpha=.55;x.fillText(ln,W/2,y);x.globalAlpha=1;x.shadowBlur=0}
else if(st==='grd'){const g=x.createLinearGradient(W/2-w/2,0,W/2+w/2,0);g.addColorStop(0,t.ac);g.addColorStop(1,t.a2||'#fff');x.lineWidth=fs*.16;x.strokeStyle='#000';x.strokeText(ln,W/2,y);x.fillStyle=g;x.fillText(ln,W/2,y)}
else if(st==='cmc'){x.fillStyle='#ef4444';x.fillText(ln,W/2+fs*.06,y+fs*.06);x.lineWidth=fs*.18;x.strokeStyle='#000';x.strokeText(ln,W/2,y);x.fillStyle='#fff';x.fillText(ln,W/2,y)}
else if(st==='min'){x.shadowColor='rgba(0,0,0,.8)';x.shadowBlur=12;x.fillStyle='#fff';x.fillText(ln,W/2,y);x.shadowBlur=0}
else{x.lineWidth=fs*.18;x.strokeStyle='#000';x.strokeText(ln,W/2,y);x.fillStyle='#fff';x.fillText(ln,W/2,y)}});x.restore()}
function frame(){const W=cv.width,H=cv.height,t=T[ti],card=t.m!=='flat';x.filter='none';x.shadowBlur=0;x.globalAlpha=1;
const g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,t.bg[0]);g.addColorStop(1,t.bg[1]);x.fillStyle=g;x.fillRect(0,0,W,H);pat(W,H,t);
if(v.videoWidth&&(t.m==='blur'||lay==='wide')){x.filter='blur(30px) brightness(.5)';x.drawImage(v,-60,-60,W+120,H+120);x.filter='none'}
if(v.videoWidth){const R=rects(W,H,card),P=lay==='photo'?[[R[0],photo,{z:1,x:.5,y:.5}],[R[1],v,F[0]]]:R.map((r,i)=>[r,v,F[i]]);P.forEach((p,i)=>pan(p[0],p[1],p[2],card,t.ac,lay==='pip'&&i===1))}
x.textAlign='center';x.textBaseline='middle';x.lineJoin='round';
if(logo){const s=W*.14,k=Math.min(s/logo.width,s/logo.height);x.drawImage(logo,W-W*.03-logo.width*k,H*.015,logo.width*k,logo.height*k)}
const tt=$('ti').value,hd=$('hd').value;
ttl(W,H,t);
if(hd){x.font=`800 ${W*.045}px system-ui,Arial,sans-serif`;x.fillStyle=t.ac;x.fillText(hd,W/2,H*.95,W*.9)}
sub(W,H)}
function sub(W,H){const ct=v.currentTime,s=subs.find(q=>ct>=q.s&&ct<q.e);if(!s||!s.t.trim())return;
const st=$('ss').value,fs=+$('fz').value*W/720,up=st==='k'||st==='p';let w=s.t.trim().split(/\s+/);if(up)w=w.map(a=>a.toUpperCase());
x.font=`900 ${fs}px Impact,"Arial Black",system-ui,sans-serif`;x.textAlign='left';
const sp=x.measureText(' ').width,mx=W*.88,L=[[]];let lw=0;
w.forEach((a,i)=>{const ww=x.measureText(a).width;if(lw+ww>mx&&L[L.length-1].length){L.push([]);lw=0}L[L.length-1].push({a,i,ww});lw+=ww+sp});
const act=Math.min(w.length-1,Math.floor((ct-s.s)/(s.e-s.s)*w.length)),lh=fs*1.25,ps=$('sp').value,y0=(ps==='t'?.2:ps==='m'?.5:.77)*H-(L.length-1)*lh/2;
L.forEach((ln,li)=>{const tw=ln.reduce((q,o)=>q+o.ww+sp,-sp),y=y0+li*lh;let px=(W-tw)/2;
if(st==='c'){x.fillStyle='rgba(0,0,0,.7)';x.fillRect(px-14,y-lh/2,tw+28,lh)}
ln.forEach(o=>{if(up){x.lineWidth=fs*.2;x.strokeStyle='#000';x.strokeText(o.a,px,y)}
if(st==='m'){x.shadowColor='#000';x.shadowBlur=8}
x.fillStyle=st==='k'?(o.i===act?T[ti].ac:'#fff'):st==='p'?'#ffe600':'#fff';x.fillText(o.a,px,y);x.shadowBlur=0;px+=o.ww+sp})})}
function loop(){try{if(user){frame();tts()}}catch(e){}
if(!busy&&!v.paused&&v.currentTime>=+rg.value){v.pause();v.currentTime=+rs.value}
if(document.activeElement!==ph)ph.value=v.currentTime;$('pl').textContent=v.paused?'▶':'⏸';requestAnimationFrame(loop)}
loop();
/* ---- Subtítulos ---- */
function rl(){const c=$('sl');c.innerHTML='';subs.sort((a,b)=>a.s-b.s).forEach(q=>{const d=document.createElement('div');d.className='sr';d.innerHTML='<input type="number" step="0.1"><input type="number" step="0.1"><input type="text"><button>✕</button>';const[a,b,t,k]=d.children;a.value=q.s.toFixed(1);b.value=q.e.toFixed(1);t.value=q.t;a.onchange=()=>q.s=+a.value;b.onchange=()=>q.e=+b.value;t.oninput=()=>q.t=t.value;k.onclick=()=>{subs=subs.filter(o=>o!==q);rl()};c.appendChild(d)})}
$('add').onclick=()=>{const s=v.currentTime;subs.push({s,e:s+2,t:'Nuevo subtítulo'});rl()};
$('clr').onclick=()=>{subs=[];rl()};
$('gen').onclick=()=>{const w=$('tx').value.trim().split(/\s+/).filter(Boolean);if(!w.length)return;const n=Math.max(1,+$('wn').value||4),a=+rs.value,b=+rg.value,c=[];for(let i=0;i<w.length;i+=n)c.push(w.slice(i,i+n).join(' '));const d=(b-a)/c.length;subs=c.map((t,i)=>({s:a+i*d,e:a+(i+1)*d,t}));rl()};
$('sf').onchange=async e=>{const f=e.target.files[0];if(!f)return;const tx=(await f.text()).replace(/\r/g,''),r=/(\d+):(\d+):(\d+)[,.](\d+)\s*-->\s*(\d+):(\d+):(\d+)[,.](\d+)[^\n]*\n([\s\S]*?)(?=\n\s*\n|$)/g,c=(h,m,s,ms)=>+h*3600+ +m*60+ +s+ +ms/1000;subs=[];let m;while((m=r.exec(tx)))subs.push({s:c(...m.slice(1,5)),e:c(...m.slice(5,9)),t:m[9].replace(/\n/g,' ').replace(/<[^>]+>/g,'')});rl()};
/* ---- Frases rápidas ---- */
['😱 NO LO PUEDO CREER','🔥 JUGADA ÉPICA','😂 MOMENTAZO','🏆 CLUTCH INCREÍBLE','💀 LO DESTRUYÓ','🤯 NADIE LO ESPERABA','⚡ MIRÁ ESTO','👀 ESPERÁ AL FINAL'].forEach(s=>{const b=document.createElement('button');b.className='chip';b.textContent=s;b.onclick=()=>{$('ti').value=s};$('tc').appendChild(b)});
/* ---- Subtítulos automáticos por voz ---- */
let dic=null;$('aun').textContent='Reproduce el tramo y escucha el audio por el micrófono. Usá parlantes con buen volumen (sin auriculares) y silencio alrededor. Después corregí el texto si hace falta.';
try{claude.use('dictation').then(d=>{dic=d;if(!d)$('aun').textContent='No disponible en este navegador o cuenta (probá Chrome de escritorio). Podés pegar el texto o importar un .srt.'})}catch(e){$('aun').textContent='No disponible acá. Podés pegar el texto o importar un .srt.'}
function addChunks(t,s,e){const w=t.split(/\s+/).filter(Boolean),n=Math.max(1,+$('wn').value||4);if(!w.length||e<=s)return;const c=[];for(let i=0;i<w.length;i+=n)c.push(w.slice(i,i+n));const d=(e-s)/w.length;let k=s;c.forEach(g=>{const l=g.length*d;subs.push({s:k,e:k+l,t:g.join(' ')});k+=l});rl()}
$('au').onclick=()=>{if(!dic){$('aus').textContent='La función de voz no está disponible acá.';return}if(busy)return;
const a=+rs.value,b=+rg.value;busy=true;noX=true;subs=[];rl();let seg=null,last=a,fin=false;v.pause();v.currentTime=a;$('au').classList.add('hid');$('ax').classList.remove('hid');$('aus').textContent='Iniciando micrófono…';
const u1=dic.onPartial(({text})=>{if(text&&seg===null)seg=v.currentTime;if(text)$('aus').textContent='🎙 '+text}),u2=dic.onFinal(({text})=>{const t=text.trim(),e=Math.min(b,v.currentTime);if(t)addChunks(t,Math.max(last,Math.min(seg??last,e)),e);last=e;seg=null});
const chk=()=>{if(v.currentTime>=b-.05)end()};
const end=async msg=>{if(fin)return;fin=true;v.removeEventListener('timeupdate',chk);v.pause();try{await dic.stop()}catch(e){}u1();u2();busy=false;noX=false;v.currentTime=a;$('au').classList.remove('hid');$('ax').classList.add('hid');$('aus').textContent=msg||(subs.length?'Listo: '+subs.length+' subtítulos. Revisalos y corregí el texto abajo.':'No se detectó voz. Subí el volumen del parlante y probá de nuevo.')};
$('ax').onclick=()=>end();
dic.start($('al').value?{language:$('al').value}:undefined).then(()=>{v.muted=false;v.volume=1;v.addEventListener('timeupdate',chk);v.play().catch(()=>end('El navegador bloqueó la reproducción: tocá ▶ y probá de nuevo.'))}).catch(e=>end(e&&e.code==='not_granted'?'Permiso de micrófono denegado.':e&&e.code==='unavailable'?'Idioma no disponible: probá “Automático”.':'No se pudo iniciar: '+((e&&e.message)||e)))};
const shf=d=>{subs.forEach(q=>{q.s=Math.max(0,q.s+d);q.e=Math.max(q.s+.2,q.e+d)});rl()};$('sy1').onclick=()=>shf(-.5);$('sy2').onclick=()=>shf(.5);
/* ---- Audio: mezcla, música, voz en off y voz IA ---- */
let ctx=null,G=null,mus=null,vo=null,live=[],noX=false,tabNow=false;const AC=window.AudioContext||window.webkitAudioContext,need=()=>mus||vo||+$('ov').value!==100;
function graph(){if(G)return G;ctx=ctx||new AC();const dest=ctx.createMediaStreamDestination(),mon=ctx.createGain(),vg=ctx.createGain(),src=ctx.createMediaElementSource(v);src.connect(vg);vg.connect(mon);vg.connect(dest);mon.connect(ctx.destination);return G={dest,mon,vg}}
const dec=async f=>{ctx=ctx||new AC();return await ctx.decodeAudioData(await f.arrayBuffer())};
$('mf').onchange=async e=>{const f=e.target.files[0];mus=null;if(!f)return;try{mus=await dec(f);$('au2').textContent='Música cargada ('+mus.duration.toFixed(0)+' s).'}catch(x){$('au2').textContent='No se pudo leer ese audio. Probá con MP3 o WAV.'}};
$('vf').onchange=async e=>{const f=e.target.files[0];vo=null;if(!f)return;try{vo=await dec(f);$('au2').textContent='Voz en off cargada ('+vo.duration.toFixed(0)+' s).'}catch(x){$('au2').textContent='No se pudo leer ese audio. Probá con MP3 o WAV.'}};
[['ov','ovl'],['mv','mvl'],['vv','vvl']].forEach(([k,l])=>$(k).oninput=()=>{$(l).textContent=$(k).value;if(G&&k==='ov')G.vg.gain.value=$('ov').value/100});
function stopX(){live.forEach(s=>{try{s.stop()}catch(e){}});live=[]}
function startX(){stopX();if(noX||!ctx||!G)return;const a=+rs.value,b=+rg.value,t0=Math.max(0,v.currentTime-a),n=ctx.currentTime+.05,left=Math.max(.1,b-v.currentTime),d=+$('vd').value||0;
const add=(buf,vol,when,off,mu)=>{if(off>=buf.duration)return;const s=ctx.createBufferSource(),g=ctx.createGain(),k=vol/100;s.buffer=buf;g.gain.setValueAtTime(k,0);
if(mu&&vo&&$('dk').checked){const vs=n+Math.max(0,d-t0),ve=vs+vo.duration-Math.max(0,t0-d);g.gain.setValueAtTime(k,Math.max(n,vs-.15));g.gain.linearRampToValueAtTime(k*.25,Math.max(n,vs));g.gain.setValueAtTime(k*.25,ve);g.gain.linearRampToValueAtTime(k,ve+.4)}
if(mu&&$('mfd').checked){g.gain.setValueAtTime(k,n+Math.max(0,left-2));g.gain.linearRampToValueAtTime(0,n+left)}
s.connect(g);g.connect(G.mon);g.connect(G.dest);s.start(when,off);s.stop(n+left+.1);live.push(s)};
if(mus)add(mus,+$('mv').value,n,(+$('mo').value||0)+t0,true);if(vo)add(vo,+$('vv').value,n+Math.max(0,d-t0),Math.max(0,t0-d),false)}
v.addEventListener('play',()=>{spk();if(!noX&&need()){const g=graph();ctx.resume();g.vg.gain.value=$('ov').value/100;startX()}});
v.addEventListener('pause',()=>{stopX();if(window.speechSynthesis)speechSynthesis.cancel()});v.addEventListener('seeking',()=>spk());
const spoken=new Set();function spk(){spoken.clear();if(window.speechSynthesis)speechSynthesis.cancel()}
function say(txt,rate){const u=new SpeechSynthesisUtterance(txt),o=speechSynthesis.getVoices().find(z=>z.name===$('tv').value);if(o){u.voice=o;u.lang=o.lang}else u.lang='es-AR';u.rate=rate;u.pitch=+$('tp2').value;speechSynthesis.speak(u)}
function tts(){if(!window.speechSynthesis||!$('tt').checked||v.paused||(busy&&!tabNow))return;const ct=v.currentTime;subs.forEach(q=>{if(!spoken.has(q)&&ct>=q.s&&ct<q.e-.1){spoken.add(q);const n=q.t.trim().split(/\s+/).length,r=$('tr').value;say(q.t,r==='a'?Math.min(2,Math.max(.8,n/2.6/Math.max(.4,q.e-ct))):+r)}})}
function fillV(){const vs=speechSynthesis.getVoices().slice().sort((a,b)=>(/^es/.test(b.lang)-/^es/.test(a.lang))||a.name.localeCompare(b.name));$('tv').innerHTML='';vs.forEach(o=>{const p=document.createElement('option');p.value=o.name;p.textContent=o.name+' ('+o.lang+')';$('tv').appendChild(p)})}
if(window.speechSynthesis){fillV();speechSynthesis.onvoiceschanged=fillV;$('tb').onclick=()=>{speechSynthesis.cancel();say('Hola, así suena esta voz en tu clip.',+$('tr').value||1)}}else{$('tt').disabled=true;$('tb').disabled=true}
/* ---- Exportar ---- */
async function save(b,name,el){try{const d=await claude.use('downloads');
if(!d){el.textContent='Descarga directa no disponible acá: mantené apretado el video y elegí “Guardar video”, o clic derecho → Guardar video como.';return}
const n=(name||'clip').replace(/[^\w\-áéíóúñ ]/gi,'').trim()||'clip';await d.save({filename:n+'.webm',data:b});el.textContent='Clip guardado ✔'}
catch(e){el.textContent=e&&e.code==='declined'?'Cancelaste la descarga.':'No se pudo descargar: '+((e&&e.message)||e)}}
$('dl').onclick=()=>blob&&save(blob,$('nm').value,$('dn'));
$('go').onclick=async()=>{if(busy)return;const a=+rs.value,b=+rg.value,cap=v.captureStream||v.mozCaptureStream;
if(!cap||!window.MediaRecorder){$('st').textContent='Tu navegador no soporta exportar. Probá Chrome, Edge o Firefox actualizados.';return}
busy=true;$('go').disabled=true;$('rc').classList.add('hid');
let ds=null;const tabMode=$('tt').checked&&$('tx2').checked;tabNow=tabMode;
if(tabMode){try{ds=await navigator.mediaDevices.getDisplayMedia({video:true,audio:true,preferCurrentTab:true,selfBrowserSurface:'include'});ds.getVideoTracks().forEach(t=>t.stop());if(!ds.getAudioTracks().length)throw new Error('marcá “Compartir audio de la pestaña” al elegirla')}catch(e){tabNow=false;$('st').textContent='No se pudo capturar el audio de la pestaña: '+(e.message||e)+'. En la vista previa de Claude no está permitido: usá el archivo index.html en tu dominio, o desmarcá “Incluir la voz IA”.';busy=false;$('go').disabled=false;return}}
try{v.pause();await new Promise(r=>{v.onseeked=r;v.currentTime=a});v.onseeked=null;
const s=cv.captureStream(30);if(need()&&!G)graph();let tr;
if(ds)tr=ds.getAudioTracks();else if(G){G.mon.gain.value=0;G.vg.gain.value=$('ov').value/100;tr=G.dest.stream.getAudioTracks()}else tr=cap.call(v).getAudioTracks();
if(G&&ds)G.mon.gain.value=1;if(ctx)await ctx.resume();tr.forEach(t=>s.addTrack(t));
const mt=['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'].find(m=>MediaRecorder.isTypeSupported(m)),rec=new MediaRecorder(s,{mimeType:mt,videoBitsPerSecond:7e6}),ch=[];
rec.ondataavailable=e=>{if(e.data.size)ch.push(e.data)};const done=new Promise(r=>rec.onstop=r);
$('pb').classList.remove('hid');rec.start(500);await v.play();
await new Promise(res=>{const t=()=>{const p=Math.min(1,(v.currentTime-a)/(b-a));$('pi').style.width=p*100+'%';$('st').textContent='Grabando… '+Math.round(p*100)+'%';if(v.currentTime>=b){v.removeEventListener('timeupdate',t);res()}};v.addEventListener('timeupdate',t);v.addEventListener('ended',()=>res(),{once:true})});
v.pause();await new Promise(r=>setTimeout(r,150));rec.stop();await done;
blob=new Blob(ch,{type:'video/webm'});const u=URL.createObjectURL(blob);vsrc($('rv'),blob,u);$('rc').classList.remove('hid');$('st').textContent='¡Listo! 🎉';
clips.unshift({n:$('nm').value||'clip',b:blob,u});drawClips();$('rc').scrollIntoView({behavior:'smooth'})
}catch(e){$('st').textContent='Error al crear el clip: '+(e.message||e)}
busy=false;tabNow=false;if(G)G.mon.gain.value=1;if(ds)ds.getTracks().forEach(t=>t.stop());$('go').disabled=false;$('pb').classList.add('hid');v.currentTime=a};
function drawClips(){$('ce').classList.toggle('hid',clips.length>0);const m=$('mc');m.innerHTML='';clips.forEach(c=>{const d=document.createElement('div');const vv=document.createElement('video');vsrc(vv,c.b,c.u);vv.controls=true;vv.playsInline=true;const t=document.createElement('div');t.className='note';t.textContent=c.n;const b=document.createElement('button');b.textContent='⬇ Descargar';const s=document.createElement('div');s.className='note';b.onclick=()=>save(c.b,c.n,s);d.append(vv,t,b,s);m.appendChild(d)})}
/* ---- Marcar momento ---- */
const marks=[],sec=s=>{const p=String(s).trim().split(':').map(Number);return p.some(isNaN)?null:p.reduce((a,n)=>a*60+n,0)},esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
$('mk').onclick=()=>{const s=sec($('ms').value),e=sec($('me').value),u=$('u').value.trim();if(s===null||e===null||e<=s){alert('Revisá los tiempos: el fin tiene que ser mayor al inicio.');return}
let l=u;try{const U=new URL(u),h=Math.floor(s/3600),m=Math.floor(s%3600/60),z=Math.floor(s%60);if(/twitch\.tv/.test(U.host)){U.searchParams.set('t',`${h}h${m}m${z}s`);l=U.href}else if(/youtu/.test(U.host)){U.searchParams.set('t',Math.floor(s)+'s');l=U.href}}catch(_){}
marks.unshift({t:$('mt').value||'Clip sin título',s:$('ms').value,e:$('me').value,l,d:Math.round(e-s)});
$('ml').innerHTML=marks.map((k,i)=>`<div class="card" style="margin:12px 0 0"><b>${esc(k.t)}</b><div class="btns"><span class="chip">${esc(k.s)} → ${esc(k.e)} (${k.d}s)</span>${k.l?`<span class="chip">${esc(k.l)}</span><button data-i="${i}">Copiar</button>`:''}</div></div>`).join('');
$('ml').querySelectorAll('button').forEach(b=>b.onclick=async()=>{const k=marks[b.dataset.i];try{await navigator.clipboard.writeText(k.t+' ['+k.s+'-'+k.e+'] '+k.l);b.textContent='¡Copiado!'}catch(_){b.textContent='Copiá a mano'}})};
/* ---- Editor de video y convertidor ---- */
(()=>{
const AX=window.AudioContext||window.webkitAudioContext,fm2=s=>Math.floor(s/60)+':'+(s%60).toFixed(1).padStart(4,'0');
const RES=[['800×600 (4:3)',800,600],['1280×720 (HD)',1280,720],['1920×1080 (Full HD)',1920,1080],['2560×1440 (2K)',2560,1440],['1080×1920 (vertical)',1080,1920],['1080×1080 (cuadrado)',1080,1080]];
const MT={mp4:['video/mp4;codecs=avc1.640028,mp4a.40.2','video/mp4;codecs=avc1,mp4a.40.2','video/mp4'],webm:['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm']};
const mimeOf=k=>window.MediaRecorder?MT[k].find(m=>MediaRecorder.isTypeSupported(m)):null;
RES.forEach(r=>{[$('xrs'),$('yr')].forEach((s,i)=>{const o=new Option(r[0],r[1]+'x'+r[2]);if(i===0&&r[1]===1920)o.selected=true;s.add(o)})});
$('yr').insertBefore(new Option('Igual al original','o'),$('yr').firstChild);$('yr').selectedIndex=0;
$('xrs').onchange=()=>{const[w,h]=$('xrs').value.split('x').map(Number);E.W=w;E.H=h};
let ac=null,ad=null,srcA=[],PPS=40,AN=null;const PH=$('xph');
const A0=()=>{if(!ac){ac=new AX();ad=ac.createMediaStreamDestination();AN=ac.createAnalyser();AN.fftSize=512}return ac};
function ag(el){A0();if(!el._g){const s=ac.createMediaElementSource(el),g=ac.createGain();s.connect(g);g.connect(ad);g.connect(ac.destination);g.connect(AN);el._g=g}return el._g}
const E={sa:-1,so:-1,v1:100,v2:100,cl:[],i:0,sel:-1,ov:[],au:[],t:0,play:false,st:[],D:0,W:1920,H:1080},xc=$('xc'),g0=xc.getContext('2d'),dur=c=>(c.b-c.a)/c.sp;
function calc(){let s=0;E.st=E.cl.map(c=>{const r=s;s+=dur(c);return r});E.D=s;$('xh').max=s||1}
const loc=t=>{for(let i=E.cl.length-1;i>=0;i--)if(t>=E.st[i])return i;return 0};
function go(t){t=Math.max(0,Math.min(t,E.D));const i=loc(t),c=E.cl[i];E.t=t;if(!c)return;E.cl.forEach(o=>o.el!==c.el&&o.el.pause());E.i=i;const e=c.el;e.currentTime=c.a+(t-E.st[i])*c.sp;e.playbackRate=c.sp;if(AX)ag(e).gain.value=cg(c);if(E.play)e.play().catch(()=>{})}
function auStop(){srcA.forEach(s=>{try{s.stop()}catch(e){}});srcA=[]}
function auGo(from){auStop();A0();E.au.forEach(a=>{an(a);if(E.m2||a.mute)return;const w=a.t-from,sk=Math.max(0,-w),rem=a.len-sk;if(rem<=.02)return;const s=ac.createBufferSource(),g=ac.createGain(),k=a.vol/100*E.v2/100,T=ac.currentTime+Math.max(0,w);s.buffer=a.buf;
const f0=a.fi>0?Math.min(1,sk/a.fi):1,f1=a.fo>0?Math.min(1,rem/a.fo):1;g.gain.setValueAtTime(k*Math.min(f0,f1),T);
if(a.fi>0&&sk<a.fi)g.gain.linearRampToValueAtTime(k,T+a.fi-sk);
if(a.fo>0){const ts=a.len-a.fo-sk;if(ts>0)g.gain.setValueAtTime(k,T+ts);g.gain.linearRampToValueAtTime(0,T+rem)}
s.connect(g);g.connect(ad);g.connect(ac.destination);g.connect(AN);s.start(T,a.off+sk,rem);srcA.push(s)})}
function play(){if(!E.cl.length)return;if(E.t>=E.D-.05)E.t=0;A0().resume();E.play=true;go(E.t);auGo(E.t)}
function pause(){E.play=false;E.cl.forEach(c=>c.el.pause());auStop()}
function drawE(g,W,H,t){g.fillStyle='#000';g.fillRect(0,0,W,H);const c=E.cl[E.i];
if(c&&c.el.videoWidth){const e=c.el,z=(c.zm||100)/100,s=Math.min(W/e.videoWidth,H/e.videoHeight)*z,w=e.videoWidth*s,h=e.videoHeight*s,f=c.fx||{},lt=t-E.st[E.i],d=dur(c);let al=1;if(c.fi>0)al=Math.min(al,lt/c.fi);if(c.fo>0)al=Math.min(al,(d-lt)/c.fo);g.globalAlpha=Math.max(0,Math.min(1,al));if(f.b!==100||f.c!==100||f.s!==100||f.g||f.e||f.l)g.filter=`brightness(${f.b}%) contrast(${f.c}%) saturate(${f.s}%) grayscale(${f.g}%) sepia(${f.e}%) blur(${f.l*W/1920}px)`;g.drawImage(e,(W-w)/2,(H-h)/2,w,h);g.filter='none';g.globalAlpha=1}
E.ov.forEach(o=>{if(t<o.s||t>=o.e)return;const z=o.z/100*W,px=o.x/100*W;let py=o.y/100*H,k=1,al=1;const lt=t-o.s;
if(o.an==='pop'){const u=Math.min(1,lt/.28);k=u<1?.5+.5*u+.18*Math.sin(u*Math.PI):1}else if(o.an==='fade')al=Math.max(0,Math.min(1,lt/.35,(o.e-t)/.35));else if(o.an==='slide'){const u=Math.min(1,lt/.35);py+=(1-u)*(1-u)*H*.12;al=u}
g.save();g.globalAlpha=al;g.translate(px,py);g.scale(k,k);g.translate(-px,-py);
if(o.im){const q=z/o.im.width,h=o.im.height*q;g.drawImage(o.im,px-z/2,py-h/2,z,h)}
else{g.font='900 '+(z*.25)+'px Impact,"Arial Black",sans-serif';g.textAlign='center';g.textBaseline='middle';g.lineJoin='round';g.lineWidth=z*.04;g.strokeStyle='#000';g.fillStyle=o.col||'#fff';g.strokeText(o.t,px,py,W*.95);g.fillText(o.t,px,py,W*.95)}
g.restore()})}
function tick(){if(E.play){const c=E.cl[E.i];if(c){const e=c.el;E.t=E.st[E.i]+(e.currentTime-c.a)/c.sp;if(e.currentTime>=c.b-.04||e.ended){if(E.i>=E.cl.length-1){pause();E.t=E.D}else go(E.st[E.i+1]+.001)}}else pause()}
if(xc.width!==E.W||xc.height!==E.H){xc.width=E.W;xc.height=E.H}
drawE(g0,E.W,E.H,E.t);PH.style.left=(6+E.t*PPS)+'px';mt();$('xt').textContent=fm2(E.t)+' / '+fm2(E.D);$('xp').textContent=E.play?'⏸':'▶';if(document.activeElement!==$('xh'))$('xh').value=E.t;requestAnimationFrame(tick)}
tick();
$('xp').onclick=()=>E.play?pause():play();
$('xh').oninput=()=>{go(+$('xh').value);if(E.play)auGo(E.t)};
/* línea de tiempo */
function fill(){const c=E.cl[E.sel];['xci','xco','xcs','xcv'].forEach(k=>$(k).disabled=!c);if(!c)return;$('xci').value=c.a.toFixed(1);$('xco').value=c.b.toFixed(1);$('xcs').value=c.sp;$('xcv').value=c.vol;$('xcvl').textContent=c.vol;FXI.forEach(n=>n.value=n.dataset.fx?c.fx[n.dataset.fx]:c[n.dataset.cp])}
function rt(){const t=$('xl');t.innerHTML='';E.cl.forEach((c,i)=>{const d=document.createElement('div');d.className='tb'+(i===E.sel?' on':'');d.style.flex='none';d.style.width=Math.max(24,dur(c)*PPS)+'px';d.innerHTML='<b></b><span></span>';d.children[0].textContent=c.n;d.children[1].textContent=dur(c).toFixed(1)+'s'+(c.sp!==1?' · '+c.sp+'×':'')+(c.mute?' · 🔇':'');if(c.th&&c.th.length){const sb=document.createElement('div');sb.className='tbs';const n=c.th.length,D=c.el.duration,i0=Math.floor(c.a/D*n),i1=Math.max(i0+1,Math.ceil(c.b/D*n));for(let q=i0;q<i1&&q<n;q++){const im=document.createElement('img');im.src=c.th[q];im.draggable=false;sb.appendChild(im)}d.prepend(sb)}d.onclick=ev=>{E.sel=i;E.sa=E.so=-1;if(E.tool!=='razor')tab('lp2');rt();go(Math.max(E.st[i],Math.min(E.st[i]+dur(c)-.01,(ev.clientX-t.getBoundingClientRect().left+t.scrollLeft-6)/PPS)));if(E.play)auGo(E.t);if(E.tool==='razor')$('xsp').click()};t.appendChild(d)});$('xte').classList.toggle('hid',E.cl.length>0);fill();rtx();srcMon();ra(1);ro(1)}
const ch=()=>{calc();rt()};
const mkc=(el,n)=>({el,n:n.replace(/\.[^.]+$/,''),a:0,b:el.duration,sp:1,vol:100,fx:{b:100,c:100,s:100,g:0,e:0,l:0},zm:100,fi:0,fo:0}),opn=f=>new Promise(r=>{const el=document.createElement('video');el.playsInline=true;el.preload='auto';el.src=URL.createObjectURL(f);el.onloadedmetadata=()=>r(el.videoWidth&&isFinite(el.duration)?el:null);el.onerror=()=>r(null)});
$('xvf').onchange=async e=>{const first=E.cl.length;hs();for(let f of e.target.files){let el=await opn(f);if(!el){try{f=await ffix(f,$('xms'));el=await opn(f)}catch(x){continue}}if(!el){$('xms').textContent='No se pudo abrir '+f.name;continue}$('xms').textContent='';{const c=mkc(el,f.name);E.cl.push(c);thumbs(c)}}e.target.value='';if(E.cl.length>first){E.sel=first;calc();rt();go(E.st[first])}};
$('xci').onchange=()=>{const c=E.cl[E.sel];if(!c)return;c.a=Math.max(0,Math.min(+$('xci').value,c.b-.1));ch();go(E.st[E.sel])};
$('xco').onchange=()=>{const c=E.cl[E.sel];if(!c)return;c.b=Math.min(c.el.duration,Math.max(+$('xco').value,c.a+.1));ch()};
$('xcs').onchange=()=>{const c=E.cl[E.sel];if(!c)return;c.sp=+$('xcs').value;ch()};
$('xcv').oninput=()=>{const c=E.cl[E.sel];if(!c)return;c.vol=+$('xcv').value;$('xcvl').textContent=c.vol;if(c.el._g)c.el._g.gain.value=cg(c)};
$('xsp').onclick=()=>{if(E.sa>=0&&E.au[E.sa]){const A=E.au[E.sa];if(E.t>A.t+.1&&E.t<A.t+A.len-.1){hs();const cut=E.t-A.t,B={...A,t:E.t,off:A.off+cut,len:A.len-cut,fi:0};A.len=cut;A.fo=0;E.au.splice(E.sa+1,0,B);E.sa+=1;ra();toast('Audio dividido');if(E.play)auGo(E.t)}else toast('Poné la aguja dentro del bloque de audio');return}const i=loc(E.t),c=E.cl[i];if(!c)return;const s=c.a+(E.t-E.st[i])*c.sp;if(s<=c.a+.1||s>=c.b-.1){alert('Poné la aguja dentro del clip, lejos de los bordes.');return}const t=E.t;hs();E.cl.splice(i+1,0,{...c,fx:{...c.fx},a:s,fi:0});c.fo=0;c.b=s;E.sel=i+1;calc();rt();E.t=t};
$('xdl').onclick=()=>{if(E.sa>=0&&E.au[E.sa]){hs();E.au.splice(E.sa,1);E.sa=-1;ra();toast('Audio eliminado');if(E.play)auGo(E.t);return}if(E.so>=0&&E.ov[E.so]){hs();E.ov.splice(E.so,1);E.so=-1;ro();toast('Elemento eliminado');return}if(E.sel<0)return;hs();pause();E.cl.splice(E.sel,1);E.sel=Math.min(E.sel,E.cl.length-1);E.i=0;calc();rt();go(0)};
const mv=d=>{const i=E.sel,j=i+d;if(!E.cl[i]||!E.cl[j])return;hs();[E.cl[i],E.cl[j]]=[E.cl[j],E.cl[i]];E.sel=j;ch()};$('xml').onclick=()=>mv(-1);$('xmr').onclick=()=>mv(1);
/* memes, textos y audio */
function ro(nr){const l=$('xol');l.innerHTML='';E.ov.forEach((o,i)=>{const d=document.createElement('div');d.className='ovc'+(i===E.so?' sel':'');d.dataset.i=i;
d.innerHTML='<div class="mx1"><b></b><button class="ic" title="Eliminar">🗑</button></div>'+(o.im?'':'<div class="orow3"><input type="text" data-k="t"><input type="color" data-k="col"></div>')+'<div class="mx3 m5"><label>Inicio<input type="number" step="0.1" data-k="s"></label><label>Fin<input type="number" step="0.1" data-k="e"></label><label>X %<input type="number" data-k="x"></label><label>Y %<input type="number" data-k="y"></label><label>Tamaño<input type="number" data-k="z"></label></div><div class="orow3"><select data-k="an"><option value="">Sin animación</option><option value="pop">Pop</option><option value="fade">Fundido</option><option value="slide">Deslizar</option></select></div>';
d.firstChild.firstChild.textContent=o.n;
d.querySelectorAll('[data-k]').forEach(n=>{const q=n.dataset.k;n.value=q==='t'||q==='an'?(o[q]||''):q==='col'?(o.col||'#ffffff'):+(+o[q]).toFixed(q==='s'||q==='e'?1:0);n.onfocus=hs;if(q==='col')n.oninput=()=>{o.col=n.value};n.onchange=()=>{if(q==='t'){o.t=n.value;o.n=n.value||'Texto'}else if(q==='an'||q==='col')o[q]=n.value;else o[q]=+n.value;rtx()}});
d.querySelector('.ic').onclick=()=>{hs();E.ov.splice(i,1);E.so=-1;ro();toast('Elemento eliminado')};
d.onclick=e=>{if(E.so!==i&&e.target.tagName!=='BUTTON')selK('o',o)};l.appendChild(d)});$('xoe').classList.toggle('hid',E.ov.length>0);if(!nr)rtx()}
$('xif').onchange=e=>{[...e.target.files].forEach(f=>{const im=new Image();im.onload=()=>{E.ov.push({n:f.name,im,s:E.t,e:E.t+3,x:50,y:50,z:40,an:'pop'});ro()};im.src=URL.createObjectURL(f)});e.target.value=''};
$('xtb').onclick=()=>{const t=$('xtx').value.trim();if(!t)return;E.ov.push({n:t,t,s:E.t,e:E.t+3,x:50,y:85,z:60,col:'#ffffff',an:'pop'});$('xtx').value='';ro()};
function ra(nr){const l=$('xal');l.innerHTML='';const h=t=>{const e=document.createElement('div');e.className='mxh';e.textContent=t;l.appendChild(e)};
if(E.cl.length){h('A1 · Audio de los videos');E.cl.forEach((c,i)=>{const d=document.createElement('div');d.className='mx'+(i===E.sel&&E.sa<0&&E.so<0?' cur':'');d.innerHTML='<div class="mx1"><b></b><button class="ic" title="Silenciar / activar">🔊</button><button class="ic wd" title="Separar el audio en una pista propia">✂ Separar</button></div><div class="mx2"><input type="range" min="0" max="150"><em></em></div>';
const[t,m,xb]=d.querySelector('.mx1').children,r=d.querySelector('input'),pc=d.querySelector('em');t.textContent=c.n;r.value=c.vol;pc.textContent=c.mute?'🔇':c.vol+'%';m.textContent=c.mute?'🔇':'🔊';m.classList.toggle('on',!!c.mute);
r.onpointerdown=hs;r.oninput=()=>{c.vol=+r.value;pc.textContent=c.vol+'%';if(c.el._g)c.el._g.gain.value=cg(c);if(i===E.sel)fill()};
m.onclick=()=>{hs();c.mute=!c.mute;if(c.el._g)c.el._g.gain.value=cg(c);ra(1);rtx()};xb.onclick=()=>sepAud(i);l.appendChild(d)})}
if(E.au.length)h('A2 · Música y sonidos');
E.au.forEach((a,i)=>{an(a);const d=document.createElement('div');d.className='mx'+(i===E.sa?' sel':'');d.dataset.ai=i;
d.innerHTML='<div class="mx1"><b></b><button class="ic" title="Silenciar / activar">🔊</button><button class="ic" title="Eliminar este audio">🗑</button></div><div class="mx2"><input type="range" min="0" max="200"><em></em></div><div class="mx3"><label>Inicio<input type="number" step="0.1" min="0" data-k="t"></label><label>Duración<input type="number" step="0.1" min="0.2" data-k="len"></label><label>Entra<input type="number" step="0.1" min="0" data-k="fi"></label><label>Sale<input type="number" step="0.1" min="0" data-k="fo"></label></div>';
const[t,m,k]=d.querySelector('.mx1').children,r=d.querySelector('input[type=range]'),pc=d.querySelector('em');t.textContent=a.n;r.value=a.vol;pc.textContent=a.mute?'🔇':a.vol+'%';m.textContent=a.mute?'🔇':'🔊';m.classList.toggle('on',a.mute);
d.onclick=e=>{if(E.sa!==i&&e.target.tagName!=='BUTTON')selK('a',a)};
r.onpointerdown=hs;r.oninput=()=>{a.vol=+r.value;pc.textContent=a.vol+'%';rsa()};r.onchange=()=>rtx();
m.onclick=()=>{hs();a.mute=!a.mute;rsa();ra(1);rtx()};k.onclick=()=>{hs();E.au.splice(i,1);E.sa=-1;ra(1);rtx();rsa();toast('Audio eliminado')};
d.querySelectorAll('.mx3 input').forEach(n=>{const q=n.dataset.k;n.value=(+a[q]).toFixed(1);n.onfocus=hs;n.onchange=()=>{let v=Math.max(0,+n.value||0);if(q==='len')v=Math.max(.2,Math.min(v,a.buf.duration-a.off));if(q==='fi'||q==='fo')v=Math.min(v,a.len);a[q]=v;n.value=v.toFixed(1);rtx();rsa()}});l.appendChild(d)});
$('xae').classList.toggle('hid',E.au.length>0||E.cl.length>0);if(!nr)rtx()}
$('xaf').onchange=async e=>{A0();for(const f of e.target.files){try{const b=await ac.decodeAudioData(await f.arrayBuffer());hs();E.au.push(an({n:f.name,buf:b,t:E.t,vol:80}));E.sa=E.au.length-1;E.so=-1;toast('Audio agregado: '+f.name)}catch(x){alert('No se pudo leer '+f.name+'. Probá con MP3 o WAV.')}}e.target.value='';ra()};
/* grabación y descarga */
async function rec(W,H,mime,draw,begin,done,prog){const oc=document.createElement('canvas');oc.width=W;oc.height=H;const g=oc.getContext('2d'),s=oc.captureStream(30);A0();ad.stream.getAudioTracks().forEach(t=>s.addTrack(t));
const r=new MediaRecorder(s,{mimeType:mime,videoBitsPerSecond:Math.min(2e7,W*H*5)}),c=[];r.ondataavailable=e=>e.data.size&&c.push(e.data);const fin=new Promise(o=>r.onstop=o);
r.start(500);await begin();await new Promise(res=>{const f=()=>{draw(g,W,H);prog();done()?res():requestAnimationFrame(f)};f()});await new Promise(o=>setTimeout(o,250));r.stop();await fin;return new Blob(c,{type:mime.split(';')[0]})}
async function dlf(b,name){try{const d=await claude.use('downloads');if(d){await d.save({filename:name,data:b});return}}catch(e){if(e&&e.code==='declined')return}const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;a.click()}
const pick=k=>{let m=mimeOf(k),n='';if(!m&&k==='mp4'){m=mimeOf('webm');k='webm';n=' Tu navegador no graba MP4 directo: se guardó como WebM (probá Chrome o Edge actualizados).'}return{m,k,n}};
const nmOf=s=>(s||'video').replace(/[^\w\-áéíóúñ ]/gi,'').trim()||'video';
let xb=null,yb=null;
$('xgo').onclick=async()=>{if(!E.cl.length){$('xst').textContent='Agregá al menos un video a la línea de tiempo.';return}
const p=pick($('xfm').value);if(!p.m){$('xst').textContent='Tu navegador no soporta exportar video.';return}
const[W,H]=$('xrs').value.split('x').map(Number);$('xgo').disabled=true;pause();$('xrc').classList.add('hid');$('xpb').classList.remove('hid');
try{const b=await rec(W,H,p.m,(g,w,h)=>drawE(g,w,h,E.t),async()=>{E.t=0;A0().resume();E.play=true;go(0);auGo(0)},()=>!E.play,()=>{const q=Math.min(1,E.t/E.D);$('xpi').style.width=q*100+'%';$('xst').textContent='Grabando… '+Math.round(q*100)+'%'});
let ob=b,ok=p.k;if(p.k==='webm'&&$('xfm').value==='mp4'){try{$('xst').textContent='Pasando a MP4…';ob=await ffconv(new File([b],'x.webm'),q=>$('xst').textContent='Pasando a MP4… '+q+'%',true);ok='mp4'}catch(x){}}xb={b:ob,n:nmOf($('xnm').value)+'.'+ok};$('xrv').src=URL.createObjectURL(ob);$('xrc').classList.remove('hid');$('xst').textContent='¡Listo! 🎉'+(ok==='mp4'?'':p.n)}
catch(e){$('xst').textContent='Error al exportar: '+(e.message||e)}
pause();go(0);$('xgo').disabled=false;$('xpb').classList.add('hid')};
$('xdb').onclick=()=>xb&&dlf(xb.b,xb.n);
/* convertidor */

/* ---- FFmpeg: abrir y convertir cualquier formato ---- */
let ffp=null;
async function ffl(){if(ffp)return ffp;ffp=(async()=>{const B='https://cdn.jsdelivr.net/npm/',U=B+'@ffmpeg/ffmpeg@0.12.10/dist/umd/',C=B+'@ffmpeg/core@0.12.6/dist/umd/';
await new Promise((ok,no)=>{const s=document.createElement('script');s.src=U+'ffmpeg.js';s.onload=ok;s.onerror=()=>no(new Error('no se pudo descargar FFmpeg (revisá tu conexión)'));document.head.appendChild(s)});
const bu=async(u,t)=>URL.createObjectURL(new Blob([await(await fetch(u)).arrayBuffer()],{type:t}));
const f=new FFmpegWASM.FFmpeg();await f.load({classWorkerURL:await bu(U+'814.ffmpeg.js','text/javascript'),coreURL:await bu(C+'ffmpeg-core.js','text/javascript'),wasmURL:await bu(C+'ffmpeg-core.wasm','application/wasm')});return f})();ffp.catch(()=>ffp=null);return ffp}
async function ffconv(file,msg,keep,o){o=o||{};const f=await ffl(),ext=(file.name.match(/\.(\w+)$/)||[0,'bin'])[1],inn='in.'+ext,k=o.k||'mp4',out='out.'+k,w=o.W,h=o.H;
const vf=w?`scale=${w}:${h}:force_original_aspect_ratio=decrease,pad=${w}:${h}:(ow-iw)/2:(oh-ih)/2,setsar=1`:keep?'scale=trunc(iw/2)*2:trunc(ih/2)*2':'scale=-2:min(ih\\,1080)';
const cb=({progress})=>msg&&msg(Math.round(Math.max(0,Math.min(1,progress))*100));f.on('progress',cb);
try{await f.writeFile(inn,new Uint8Array(await file.arrayBuffer()));
const enc=k==='webm'?['-c:v','libvpx','-deadline','realtime','-cpu-used','8','-b:v','2M','-c:a','libvorbis']:['-c:v','libx264','-preset','ultrafast','-crf','22','-pix_fmt','yuv420p','-c:a','aac','-movflags','+faststart'];
const rc=await f.exec(['-i',inn,'-vf',vf,...enc,out]);if(rc!==0)throw new Error('FFmpeg no pudo leer este archivo');
const d=await f.readFile(out);return new File([d],file.name.replace(/\.[^.]+$/,'')+'.'+k,{type:k==='webm'?'video/webm':'video/mp4'})}
finally{f.off('progress',cb);try{await f.deleteFile(inn)}catch(e){}try{await f.deleteFile(out)}catch(e){}}}
async function ffix(file,el){el.textContent='Formato que el navegador no abre: lo convierto a MP4 (la primera vez baja FFmpeg, unos 30 MB)…';try{const r=await ffconv(file,q=>el.textContent='Convirtiendo '+file.name+'… '+q+'%');el.textContent='';return r}catch(x){el.textContent='No se pudo convertir: '+(x.message||x)+'. Si el archivo pesa más de 1,5 GB, convertilo antes con HandBrake.';throw x}}
window.__ffix=ffix;
/* ---- Editor pro: deshacer, atajos, efectos, arrastrar memes ---- */
const HU=[],HR=[],snap=()=>({cl:E.cl.map(c=>({...c,fx:{...c.fx}})),ov:E.ov.map(o=>({...o})),au:E.au.map(a=>({...a})),sel:E.sel}),jr=(k,v)=>k==='el'||k==='im'||k==='buf'?undefined:v;
function hs(){const s=snap(),l=HU[HU.length-1];if(l&&JSON.stringify(l,jr)===JSON.stringify(s,jr))return;HU.push(s);if(HU.length>60)HU.shift();HR.length=0}
function rs2(s){pause();E.cl=s.cl;E.ov=s.ov;E.au=s.au;E.sel=Math.min(s.sel,E.cl.length-1);E.sa=E.so=-1;E.i=0;calc();rt();ro();ra();go(Math.min(E.t,E.D))}
const und=()=>{if(!HU.length)return;HR.push(snap());rs2(HU.pop())},red=()=>{if(!HR.length)return;HU.push(snap());rs2(HR.pop())},stp=d=>{pause();go(E.t+d)};
$('xun').onclick=und;$('xre').onclick=red;$('xf1').onclick=()=>stp(-1/30);$('xf2').onclick=()=>stp(1/30);
['xci','xco','xcs','xcv','xtb'].forEach(k=>{$(k).addEventListener('focus',hs);$(k).addEventListener('pointerdown',hs)});
$('xz').oninput=()=>{PPS=+$('xz').value;rt()};
$('xl').addEventListener('click',e=>{if(e.target.closest('.tb'))return;const l=$('xl');go((e.clientX-l.getBoundingClientRect().left+l.scrollLeft-6)/PPS);if(E.play)auGo(E.t)});
document.addEventListener('keydown',e=>{if($('s-e').classList.contains('hid'))return;const T=e.target.tagName;if(T==='BUTTON')e.target.blur();else if((T==='INPUT'&&e.target.type!=='range')||T==='TEXTAREA'||T==='SELECT')return;
const k=e.key.toLowerCase(),m=e.ctrlKey||e.metaKey;
if(m&&k==='z'){e.preventDefault();e.shiftKey?red():und()}else if(m&&k==='y'){e.preventDefault();red()}
else if(k===' '){e.preventDefault();$('xp').click()}else if(k==='s'&&!m)$('xsp').click();else if(k==='delete'||k==='backspace'){e.preventDefault();$('xdl').click()}
else if(k==='arrowleft'||k==='arrowright'){e.preventDefault();stp((k==='arrowleft'?-1:1)*(e.shiftKey?1:1/30))}});
const FXI=[...document.querySelectorAll('[data-fx],[data-cp]')];
FXI.forEach(n=>{n.addEventListener('pointerdown',hs);n.addEventListener('focus',hs);n.oninput=n.onchange=()=>{const c=E.cl[E.sel];if(!c)return;if(n.dataset.fx)c.fx[n.dataset.fx]=+n.value;else c[n.dataset.cp]=+n.value}});
$('xfr').onclick=()=>{const c=E.cl[E.sel];if(!c)return;hs();c.fx={b:100,c:100,s:100,g:0,e:0,l:0};c.zm=100;c.fi=c.fo=0;fill()};
let dg=null;const cp=e=>{const r=xc.getBoundingClientRect();return[(e.clientX-r.left)/r.width*100,(e.clientY-r.top)/r.height*100]};
const hit=(o,px,py)=>{const w=o.z,h=(o.im?o.z*o.im.height/o.im.width:o.z*.3)*E.W/E.H;return Math.abs(px-o.x)<=w/2&&Math.abs(py-o.y)<=h/2};
xc.addEventListener('pointerdown',e=>{const[px,py]=cp(e);for(let i=E.ov.length-1;i>=0;i--){const o=E.ov[i];if(E.t>=o.s&&E.t<o.e&&hit(o,px,py)){hs();selK('o',o);dg={o,dx:o.x-px,dy:o.y-py};xc.setPointerCapture(e.pointerId);return}}});
xc.addEventListener('pointermove',e=>{if(!dg)return;const[px,py]=cp(e);dg.o.x=Math.max(0,Math.min(100,px+dg.dx));dg.o.y=Math.max(0,Math.min(100,py+dg.dy))});
xc.addEventListener('pointerup',()=>{if(dg){dg=null;ro()}});
/* ---- Convertidor con FFmpeg (rápido, MP4 real H.264) ---- */
let cf=null;
$('yf').onchange=e=>{const f=e.target.files[0];if(!f)return;cf=f;$('yrc').classList.add('hid');const el=document.createElement('video');el.src=URL.createObjectURL(f);el.onloadedmetadata=()=>$('ys').textContent=f.name+' · '+el.videoWidth+'×'+el.videoHeight+' · '+fm2(el.duration);el.onerror=()=>$('ys').textContent=f.name+' · el navegador no lo abre, pero FFmpeg lo convierte igual.'};
$('yg').onclick=async()=>{if(!cf){$('yst').textContent='Primero elegí un video.';return}
const k=$('yfm').value,r=$('yr').value,[W,H]=r==='o'?[0,0]:r.split('x').map(Number);$('yg').disabled=true;$('yrc').classList.add('hid');$('ypb').classList.remove('hid');$('yst').textContent='Cargando FFmpeg (la primera vez baja unos 30 MB)…';
try{const b=await ffconv(cf,q=>{$('ypi').style.width=q+'%';$('yst').textContent='Convirtiendo… '+q+'%'},true,{k,W,H});yb={b,n:nmOf(cf.name.replace(/\.[^.]+$/,''))+'.'+k};$('yrv').src=URL.createObjectURL(b);$('yrc').classList.remove('hid');$('yst').textContent='¡Listo! 🎉'}
catch(x){$('yst').textContent='No se pudo convertir: '+(x.message||x)+'. Si el archivo pesa más de 1,5 GB, usá HandBrake.'}
$('yg').disabled=false;$('ypb').classList.add('hid')};
$('ydb').onclick=()=>yb&&dlf(yb.b,yb.n);
/* ---- Interfaz tipo editor profesional ---- */
E.tool='sel';
const PK=new WeakMap();
async function pk(el){PK.set(el,null);try{const b=await(await fetch(el.src)).blob();if(b.size>2e8)throw 0;const buf=await A0().decodeAudioData(await b.arrayBuffer()),d=buf.getChannelData(0),n=Math.ceil(buf.duration*50),p=new Float32Array(n),k=Math.max(1,Math.floor(d.length/n));for(let i=0;i<n;i++){let m=0;for(let j=i*k;j<(i+1)*k&&j<d.length;j+=8){const v=Math.abs(d[j]);if(v>m)m=v}p[i]=m}PK.set(el,{p,dur:buf.duration});rtx()}catch(e){PK.set(el,{p:null})}}
function wv(cn,c,w){cn.width=Math.round(w);cn.height=44;const g=cn.getContext('2d'),r=PK.get(c.el);if(r===undefined)pk(c.el);if(!r||!r.p){g.fillStyle='rgba(255,255,255,.2)';g.fillRect(0,21,w,2);return}g.fillStyle='#bbf7d0';for(let x=0;x<w;x++){const t=c.a+x/w*(c.b-c.a),v=r.p[Math.min(r.p.length-1,Math.floor(t*50))]||0,h=Math.max(1,v*42);g.fillRect(x,22-h/2,1,h)}}
function blk(o,ks,ke,name,cls,fd){const d=document.createElement('div');d.className=cls+(E.ov[E.so]===o?' sel':'');const du=()=>ke?o[ke]-o[ks]:fd,ps=()=>{d.style.left=(6+o[ks]*PPS)+'px';d.style.width=Math.max(10,du()*PPS)+'px'};ps();d.textContent=name;
d.onpointerdown=e=>{e.stopPropagation();hs();selK('o',o);const r=d.getBoundingClientRect(),rz=ke&&e.clientX>r.right-8,x0=e.clientX,s0=o[ks],e0=ke?o[ke]:0;d.setPointerCapture(e.pointerId);
d.onpointermove=m=>{const dl=(m.clientX-x0)/PPS;if(rz)o[ke]=Math.max(o[ks]+.2,e0+dl);else{o[ks]=Math.max(0,s0+dl);if(ke)o[ke]=e0+(o[ks]-s0)}ps()};
d.onpointerup=()=>{d.onpointermove=d.onpointerup=null;ke?ro():ra()}};return d}
function rtx(){const W=((Math.max(E.D,10)+8)*PPS+12)+'px';['xrl','xl','xo','xa1','xa2'].forEach(k=>$(k).style.width=W);
const R=$('xrl');R.innerHTML='';const st=PPS>=80?1:PPS>=40?2:PPS>=20?5:10;for(let s=0;s<=E.D+8;s+=st){const d=document.createElement('i');d.style.left=(6+s*PPS)+'px';d.textContent=Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');R.appendChild(d)}
const O=$('xo');O.innerHTML='';E.ov.forEach(o=>O.appendChild(blk(o,'s','e',o.n,'ob')));
const A=$('xa1');A.innerHTML='';E.cl.forEach((c,i)=>{const d=document.createElement('div'),w=Math.max(4,dur(c)*PPS);d.className='ab'+(c.mute?' mu':'');d.style.left=(6+E.st[i]*PPS)+'px';d.style.width=w+'px';const cn=document.createElement('canvas');d.appendChild(cn);A.appendChild(d);wv(cn,c,w)});
const M=$('xa2');M.innerHTML='';E.au.forEach(a=>M.appendChild(blkA(a)))}
function srcMon(){const v2=$('xsv'),c=E.cl[E.sel];if(!c){if(v2._c){v2._c=null;v2._u=null;v2.removeAttribute('src');v2.load()}return}if(v2._c!==c){v2._c=c;if(v2._u!==c.el.src){v2.src=c.el.src;v2._u=c.el.src}v2.currentTime=c.a}}
function mt(){const w=$('xtr');if(E.play){const x=6+E.t*PPS;if(x>w.scrollLeft+w.clientWidth-40)w.scrollLeft=x-60}const a=AN,L=[$('xm1'),$('xm2')];if(!a||!L[0])return;const d=new Uint8Array(a.fftSize);a.getByteTimeDomainData(d);let m=0;for(const v of d)m=Math.max(m,Math.abs(v-128));const h=Math.min(100,m/128*110);L.forEach(l=>l.firstChild.style.height=h+'%')}
document.querySelectorAll('.lt').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lt').forEach(o=>o.classList.toggle('on',o===b));document.querySelectorAll('.lp').forEach(p=>p.classList.toggle('hid',p.id!==b.dataset.p))});
$('xib').onclick=()=>$('xvf').click();$('xiib').onclick=()=>$('xif').click();$('xiab').onclick=()=>$('xaf').click();$('xex').onclick=()=>$('xlt3').click();
[['xts','sel'],['xtr2','razor']].forEach(([id,k])=>$(id).onclick=()=>{E.tool=k;$('xts').classList.toggle('on',k==='sel');$('xtr2').classList.toggle('on',k==='razor');$('xl').style.cursor=k==='razor'?'crosshair':'pointer'});
const zs=f=>{PPS=Math.max(10,Math.min(200,PPS*f));$('xz').value=PPS;rt()};$('xzi').onclick=()=>zs(1.4);$('xzo').onclick=()=>zs(1/1.4);
$('xm1b').onclick=()=>{E.m1=!E.m1;$('xm1b').classList.toggle('on',E.m1);const c=E.cl[E.i];if(c&&c.el._g)c.el._g.gain.value=cg(c)};
$('xm2b').onclick=()=>{E.m2=!E.m2;$('xm2b').classList.toggle('on',E.m2);if(E.play)auGo(E.t)};
$('xmi').onclick=()=>{const c=E.cl[E.sel];if(!c)return;hs();c.a=Math.max(0,Math.min($('xsv').currentTime,c.b-.1));ch();go(E.st[E.sel])};
$('xmo').onclick=()=>{const c=E.cl[E.sel];if(!c)return;hs();c.b=Math.min(c.el.duration,Math.max($('xsv').currentTime,c.a+.1));ch()};
['xrl','xo','xa1','xa2'].forEach(k=>$(k).addEventListener('click',e=>{go((e.clientX-$(k).getBoundingClientRect().left-6)/PPS);if(E.play)auGo(E.t)}));
rtx();
/* ---- Mezclador, selección, miniaturas y extras del editor ---- */
function cg(c){return(E.m1||c.mute)?0:c.vol/100*E.v1/100}
function an(a){a.off=a.off||0;a.len=a.len||Math.max(.1,a.buf.duration-a.off);a.fi=a.fi||0;a.fo=a.fo||0;a.mute=!!a.mute;return a}
function rsa(){if(E.play){clearTimeout(E._r);E._r=setTimeout(()=>auGo(E.t),120)}}
const PKA=new WeakMap();
function pkA(buf){let p=PKA.get(buf);if(p)return p;const d=buf.getChannelData(0),n=Math.max(1,Math.ceil(buf.duration*50)),k=Math.max(1,Math.floor(d.length/n));p=new Float32Array(n);for(let i=0;i<n;i++){let m=0;for(let j=i*k;j<(i+1)*k&&j<d.length;j+=Math.max(1,k>>5)){const q=Math.abs(d[j]);if(q>m)m=q}p[i]=m}PKA.set(buf,p);return p}
function drawA(a,cn,w){cn.width=Math.max(4,Math.round(w));cn.height=32;const g=cn.getContext('2d'),p=pkA(a.buf);g.fillStyle='rgba(255,255,255,.8)';for(let q=0;q<cn.width;q++){const t=a.off+q/cn.width*a.len,v=p[Math.min(p.length-1,Math.floor(t*50))]||0,h=Math.max(1,v*Math.min(1.7,a.vol/100+.3)*30);g.fillRect(q,16-h/2,1,h)}}
function blkA(a){an(a);const d=document.createElement('div');d.className='mb2'+(E.au[E.sa]===a?' sel':'')+(a.mute?' mu':'');const ps=()=>{d.style.left=(6+a.t*PPS)+'px';d.style.width=Math.max(10,a.len*PPS)+'px'};ps();
const cn=document.createElement('canvas');d.appendChild(cn);drawA(a,cn,a.len*PPS);
const fi=document.createElement('i'),fo=document.createElement('i');fi.className='fd fi';fo.className='fd fo';const fp=()=>{fi.style.width=a.fi*PPS+'px';fo.style.width=a.fo*PPS+'px'};fp();d.append(fi,fo);
const lb=document.createElement('span');lb.className='lb';lb.textContent=(a.mute?'🔇 ':'♪ ')+a.n+' · '+a.vol+'%';d.appendChild(lb);
const hd=document.createElement('b');hd.className='rz';d.appendChild(hd);
d.onpointerdown=e=>{e.stopPropagation();hs();selK('a',a);const rz=e.target===hd,x0=e.clientX,t0=a.t,l0=a.len;d.setPointerCapture(e.pointerId);
d.onpointermove=m=>{const dl=(m.clientX-x0)/PPS;if(rz){a.len=Math.max(.2,Math.min(a.buf.duration-a.off,l0+dl));a.fo=Math.min(a.fo,a.len);drawA(a,cn,a.len*PPS);fp()}else a.t=Math.max(0,t0+dl);ps()};
d.onpointerup=()=>{d.onpointermove=d.onpointerup=null;ra(1);rtx();rsa()}};return d}
function tab(p){const b=document.querySelector('.lt[data-p="'+p+'"]');if(b&&!b.classList.contains('on'))b.click()}
function selK(k,o){if(k==='a'){E.sa=E.au.indexOf(o);E.so=-1}else{E.so=E.ov.indexOf(o);E.sa=-1}
document.querySelectorAll('#xa2 .mb2').forEach((e,i)=>e.classList.toggle('sel',i===E.sa));document.querySelectorAll('#xo .ob').forEach((e,i)=>e.classList.toggle('sel',i===E.so));
tab(k==='a'?'lp4':'lp5');
document.querySelectorAll('#xal .mx[data-ai]').forEach(e=>e.classList.toggle('sel',+e.dataset.ai===E.sa));document.querySelectorAll('#xol .ovc').forEach(e=>e.classList.toggle('sel',+e.dataset.i===E.so));
const r=document.querySelector(k==='a'?'#xal .mx.sel':'#xol .ovc.sel');if(r&&r.scrollIntoView)r.scrollIntoView({block:'nearest'})}
async function thumbs(c){try{const v2=document.createElement('video');v2.muted=true;v2.playsInline=true;v2.preload='auto';v2.src=c.el.src;await new Promise((ok,no)=>{v2.onloadeddata=ok;v2.onerror=no});const n=12,out=[],cn=document.createElement('canvas');cn.width=112;cn.height=63;const g=cn.getContext('2d');for(let i=0;i<n;i++){await new Promise(r=>{v2.onseeked=r;v2.currentTime=c.el.duration*(i+.5)/n});g.drawImage(v2,0,0,112,63);out.push(cn.toDataURL('image/jpeg',.6))}c.th=out;rt()}catch(e){c.th=[]}}
async function sepAud(i){const c=E.cl[i];if(!c)return;if(c.sp!==1){toast('Poné la velocidad en 1× para separar el audio');return}toast('Separando audio…');
try{const b=await(await fetch(c.el.src)).blob(),buf=await A0().decodeAudioData(await b.arrayBuffer()),sr=buf.sampleRate,s0=Math.floor(c.a*sr),s1=Math.min(buf.length,Math.floor(c.b*sr)),n=Math.max(1,s1-s0),nb=ac.createBuffer(buf.numberOfChannels,n,sr);
for(let ch=0;ch<buf.numberOfChannels;ch++)nb.copyToChannel(buf.getChannelData(ch).subarray(s0,s1),ch);
hs();E.au.push(an({n:c.n,buf:nb,t:E.st[i],vol:c.vol}));c.mute=true;if(c.el._g)c.el._g.gain.value=cg(c);E.sa=E.au.length-1;E.so=-1;ra();rt();tab('lp4');toast('Audio separado: ahora es una pista propia')}
catch(e){toast('Este video no tiene audio o no se pudo leer')}}
$('xv1').oninput=()=>{E.v1=+$('xv1').value;E.cl.forEach(c=>{if(c.el._g)c.el._g.gain.value=cg(c)})};
$('xv2').oninput=()=>{E.v2=+$('xv2').value;rsa()};
['xv1','xv2'].forEach(k=>$(k).addEventListener('dblclick',()=>{$(k).value=100;$(k).oninput()}));
document.querySelectorAll('.lt').forEach(b=>{const f=b.onclick;b.onclick=()=>{f();if(b.dataset.p==='lp4')ra(1)}});
$('xiab').onclick=()=>$('xaf').click();
[['😱 NO LO CREO',45],['🔥 JUGADA ÉPICA',45],['😂 JAJAJA',45],['👀 MIRÁ ESTO',45],['💀 LO ROMPIÓ',45],['GG',30]].forEach(([t,z])=>{const b=document.createElement('button');b.className='chip';b.textContent=t;b.onclick=()=>{hs();const o={n:t,t,s:E.t,e:E.t+3,x:50,y:20,z:z+20,col:'#ffffff',an:'pop'};E.ov.push(o);E.so=E.ov.length-1;E.sa=-1;ro();tab('lp5')};$('xqp').appendChild(b)});
['🔥','😂','💀','👑','⚡','❤️','😱','🏆','👍','💯','🎯','🤯'].forEach(t=>{const b=document.createElement('button');b.className='emj';b.textContent=t;b.onclick=()=>{hs();E.ov.push({n:t,t,s:E.t,e:E.t+3,x:50,y:45,z:40,col:'#ffffff',an:'pop'});E.so=E.ov.length-1;E.sa=-1;ro();tab('lp5')};$('xst2').appendChild(b)});
ra(1);ro(1);

})();

/* relleno de sliders */
(()=>{const f=e=>{const i=e.target;if(i&&i.type==='range'&&i.id!=='rs'&&i.id!=='rg'){const mn=+i.min||0,mx=+i.max||100;i.style.setProperty('--pc',((+i.value-mn)/(mx-mn)*100)+'%')}};
document.addEventListener('input',f,true);
const all=()=>document.querySelectorAll('input[type=range]').forEach(i=>f({target:i}));
new MutationObserver(all).observe(document.body,{childList:true,subtree:true});all();document.addEventListener('change',f,true)})();
