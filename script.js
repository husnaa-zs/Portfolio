// ---- Projects (edit repo names / descriptions here) ----
var GH="https://github.com/husnaa-zs/";
var P=[
{n:"Laundry Reservation",c:"#6f6a55",r:"LaundryStreamlining",d:"A full-stack web app where customers book laundry slots. Includes reservation workflows, a MySQL backend and Google Maps for location.",s:"Java · Vue.js · JSP · JDBC · MySQL · Google Maps API"},
{n:"AI Prompt Playground",c:"#7a8294",r:"AI-Prompt-Playground",d:"A web app to try different prompts and compare what the Google Gemini API returns, to learn what makes a prompt work.",s:"JavaScript · REST API · Gemini API"},
{n:"Factory Knowledge RAG Assistant",c:"#9a7448",r:"KOJO-Factory-Rag-Assistant",d:"Ask questions about factory documents (machine manuals, safety procedures, quality rules) and get answers with sources.",s:"Python · FastAPI · Hugging Face embeddings · Gemini API"},
{n:"Bookstore Web App",c:"#4b4a45",r:"Online-Web-Bookstore",d:"An online bookstore with login, product management and full CRUD operations on a MySQL database.",s:"PHP · MySQL · HTML · CSS · JavaScript"},
{n:"Pawradise : Pet Sitter Mobile A",c:"#5c6350",r:"Pawradise-Pet-Sitter-Mobile-App",d:"A mobile app connecting cat adopters, pet sitters and pet owners. Designed in Figma, built with Flutter and Firebase.",s:"Flutter · Firebase · Figma"},
{n:"Predictive Maintenance & Anomaly Detection",c:"#5c6350",r:"Predictive-Maintenance-Web",d:"Analyses machine sensor readings (temperature, vibration, pressure, rpm, current) to detect unusual behaviour** and **estimate the risk that a machine fails in the next 24 hours**.",s:"Python · Pandas · scikit-learn · PyTorch · FastAPI · SQLite"}
];
var st=document.getElementById("strips");
P.forEach(function(p,i){
 var a=document.createElement("a");a.className="strip";a.href=GH+p.r;a.target="_blank";a.rel="noopener";a.style.setProperty("--c",p.c);
 a.innerHTML='<span class="code">CODE_00'+(i+1)+' //</span><span class="vt">'+p.n+'</span><div class="box"><h3>'+p.n+'</h3><p>'+p.d+'</p><small>'+p.s+'</small><br><b>open on github</b></div>';
 st.appendChild(a);
});
// ---- UI/UX cards (swap in your Figma links / screenshots) ----
var U=[
{k:"Mobile app",t:"Pawradise",s:"Cat adoption &amp; pet services",c:"#3b6fb6",h:"https://www.behance.net/gallery/257442343/A-pet-service-mobile-app",f:"https://www.figma.com/proto/g1pzwaDuNYpJb74LocHci3/Pawradise?t=jxZnQPSAkbLQsgY2-1"},
{k:"Website",t:"Laundry Reservation",s:"Booking website for laundry services",c:"#e0829c",h:"https://www.behance.net/gallery/225512329/Laundry-Reservation-Website-Design"},
{k:"Web app",t:"Kojo RAG Assistant",s:"Ask questions about factory documents",c:"#1d2a4d",h:"https://www.behance.net/gallery/257469607/Kojo-Factory-Knowledge-RAG-Assistant",f:"https://www.figma.com/proto/FqCZO8MZANAaa3jp9rnTsX/KOJO?node-id=0-1&t=l8BGH3iGYsOUF6ze-1"},
{k:"Mobile app",t:"RuncitGO",s:"Hyperlocal grocery marketplace",c:"#4a8a7a",h:"https://www.behance.net/gallery/257682487/RuncitGO-Grocery-Marketplace-for-Malaysian",f:"https://www.figma.com/proto/BA8RLzs1V5X4HUW8ECCajz/RuncitGO-Hyperlocal-Grocery-App?node-id=0-1&t=RqXfpqTWextHOSA6-1"}
];
U.forEach(function(u,i){
 var d=document.createElement("div");d.className="card";d.style.setProperty("--c",u.c);d.style.setProperty("--i",i);
 var l="";
 if(u.h)l+='<a href="'+u.h+'" target="_blank" rel="noopener">behance ↗</a>';
 if(u.f)l+='<a href="'+u.f+'" target="_blank" rel="noopener">figma ↗</a>';
 d.innerHTML='<span class="top"><b>0'+(i+1)+'</b><em>'+u.k+'</em></span><h4>'+u.t+'</h4><p>'+u.s+'</p><span class="mock"><i></i><i></i><i></i></span><span class="cl">'+l+'</span>';
 fan.insertBefore(d,fan.firstChild);
});
// ---- Parallax + reveal + nav ----
var mx=0,my=0,els=[].slice.call(document.querySelectorAll("[data-speed]")),tk=false;
function tick(){tk=false;var vh=innerHeight;
 els.forEach(function(el){var r=el.parentElement.getBoundingClientRect();var y=(r.top+r.height/2-vh/2)*-(+el.dataset.speed);
  var m=+el.dataset.m||0;var rot=el.style.getPropertyValue("--rot");
  el.style.translate=(mx*m)+"px "+(y+my*m)+"px";});
 var cur="home";document.querySelectorAll("section").forEach(function(s){if(s.getBoundingClientRect().top<vh*.4)cur=s.id});
 document.querySelectorAll("nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+cur)});
}
function req(){if(!tk){tk=true;requestAnimationFrame(tick)}}
addEventListener("scroll",req,{passive:true});addEventListener("resize",req);
addEventListener("mousemove",function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;req()});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
tick();

// ---- Music: 30s Apple Music previews, starts on first click ----
var M=[
{t:"Enjoy Right Now, Today",a:"Artist",u:"https://embed.music.apple.com/my/song/enjoy-right-now-today/1254572586"},
{t:"Hati Emas",a:"Artist",u:"https://embed.music.apple.com/my/song/hati-emas/1442240328"},
{t:"Nyanyian Serambi",a:"Artist",u:"https://embed.music.apple.com/my/song/nyanyian-serambi/121057295"}
];
var mb=document.getElementById("mbtn"),mp=document.getElementById("mpanel"),ml=document.getElementById("mlist"),mpl=document.getElementById("mplayer");
var au=new Audio(),cur=-1,started=false,tries=0;au.volume=.4;au.preload="auto";

function lookup(id,cb){
 var n="itcb"+id,s=document.createElement("script");
 window[n]=function(r){cb(r&&r.results&&r.results[0]?r.results[0].previewUrl:null);delete window[n];s.remove()};
 s.onerror=function(){cb(null)};
 s.src="https://itunes.apple.com/lookup?id="+id+"&country=my&callback="+n;
 document.head.appendChild(s);
}
M.forEach(function(s){
 var m=s.u.match(/\/(\d+)(?:\?|$)/);
 if(m)lookup(m[1],function(p){s.p=p});
});

function next(){play((cur+1)%M.length)}
function play(i){
 cur=i;var s=M[i];
 ml.querySelectorAll("button").forEach(function(x,j){x.classList.toggle("on",j===i)});
 mpl.innerHTML='<div class="np">'+s.t+'<small>'+s.a+' · 30s preview</small></div><div class="bar"><i></i></div><div class="ctl"><button id="mpp">pause</button><button id="mnx">next ›</button><a href="'+s.u.replace("embed.","")+'" target="_blank" rel="noopener">apple music ↗</a></div>';
 document.getElementById("mpp").onclick=function(){au.paused?au.play():au.pause()};
 document.getElementById("mnx").onclick=next;
 if(!s.p){mpl.querySelector(".np small").textContent="preview not available";return}
 au.src=s.p;au.play().catch(function(){});
}
au.onplay=function(){var b=document.getElementById("mpp");if(b)b.textContent="pause";mb.textContent="♪ playing"};
au.onpause=function(){var b=document.getElementById("mpp");if(b)b.textContent="play";mb.textContent="♪ music"};
au.onended=next;
au.ontimeupdate=function(){
 var f=mpl.querySelector(".bar i");if(f&&au.duration)f.style.width=(au.currentTime/Math.min(au.duration,30)*100)+"%";
 if(au.currentTime>=30)next();
};

mb.addEventListener("click",function(){
 var open=mp.hidden;mp.hidden=!open;mb.setAttribute("aria-expanded",open);
});
M.forEach(function(s,i){
 var li=document.createElement("li"),b=document.createElement("button");
 b.innerHTML=s.t+"<small>"+s.a+"</small>";
 b.addEventListener("click",function(){play(i)});
 li.appendChild(b);ml.appendChild(li);
});

function startMusic(){
 if(started)return;started=true;
 ["click","keydown","touchend"].forEach(function(e){document.removeEventListener(e,startMusic)});
 go();
}
function go(){
 if(!M[0].p&&tries++<20){setTimeout(go,250);return}
 if(cur===-1)play(0);
}
["click","keydown","touchend"].forEach(function(e){document.addEventListener(e,startMusic)});
// ---- Writing (edit your articles here) ----
var W=[
{t:"Beyond the Firewall: Why Healthcare AI Needs a Data Safe Haven",k:"UI/UX Case Study",y:"2026",d:"One or two sentences about A research-based perspective on healthcare data governance, responsible AI, and the infrastructure required to turn sensitive medical information into public value.",u:"https://platinum-mandrill-c22.notion.site/Beyond-the-Firewall-Why-Healthcare-AI-Needs-a-Data-Safe-Haven-407cf52970bd81d89abbfae2b135fb2c",c:"#c4552f",w:48,h:330},
{t:"RuncitGo UX_UI Thesis Case Study",k:"Research",y:"2026",d:"A Hyperlocal Grocery Marketplace for Malaysian Neighbourhoods.",u:"https://drive.google.com/file/d/1ZVz6RfCwC5g54psB4ETTwktHoDXgjdFb/view?usp=sharing",c:"#2f5d8a",w:40,h:300},
{t:"Is Access to Research Data Really a Subscription? A Global Comparison of Data Safe Havens",k:"Document",y:"2025",d:"Notes on secure data handling for AI research.",u:"#",c:"#d9a441",w:54,h:340,draft:true},
{t:"What Could Malaysia Learn from Global Healthcare Data Safe Havens?",k:"Article",y:"2025",d:"Short description here.",u:"#",c:"#3f7a5f",w:42,h:310,draft:true},
{t:"The Five Safes Framework Explained Through a Hospital AI Research Scenario",k:"Document",y:"2025",d:"Short description here.",u:"#",c:"#8d3f5c",w:50,h:325,draft:true},
{t:"SungaiKita — A Community-Powered River Care Platform",k:"UI/UX Case Study",y:"2024",d:"Short description here.",u:"#",c:"#4a4a52",w:38,h:295,draft:true}
];
var sh=document.getElementById("shelf");
W.forEach(function(b){
 var a=document.createElement(b.draft?"div":"a");
 a.className="book"+(b.draft?" draft":"");
 if(b.draft){a.tabIndex=0}else{a.href=b.u;a.target="_blank";a.rel="noopener"}
 a.style.setProperty("--c",b.c);a.style.setProperty("--w",b.w+"px");a.style.setProperty("--h",b.h+"px");
 var cta=b.draft?'<b class="soon">in progress</b>':'<b>read ↗</b>';
 a.innerHTML='<span class="sp">'+b.t+'</span><span class="cv"><em>'+b.k+'</em>'+b.t+'</span><span class="inf"><em>'+b.k+' · '+b.y+'</em><h3>'+b.t+'</h3><p>'+b.d+'</p>'+cta+'</span>';
 sh.appendChild(a);
});

