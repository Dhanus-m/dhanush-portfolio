async function loadPortfolio(){try{const r=await fetch('portfolio.json');if(!r.ok)throw Error('portfolio.json unavailable');return await r.json()}catch(e){console.error(e);return null}}
const $=s=>document.querySelector(s);
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n}
function render(d){
 if(!d)return;document.title=`${d.name} | ${d.role}`;$('#brandName').textContent=d.name;$('#footerName').textContent=`© ${new Date().getFullYear()} ${d.name}`;$('#role').textContent=d.role.toUpperCase();$('#headline').textContent=d.headline;$('#tagline').textContent=d.tagline;$('#experience').textContent=d.experience;$('#aboutText').textContent=d.about;
 const resume=$('#resumeBtn');if(d.resume){resume.href=d.resume;resume.hidden=false}
 const photo=$('#profilePhoto'),placeholder=$('#photoPlaceholder');if(d.photo){photo.src=d.photo;photo.hidden=false;placeholder.hidden=true}
 $('#linkedin').href=d.linkedin;$('#github').href=d.github;$('#emailLink').href=`mailto:${d.email}`;$('#contactEmail').href=`mailto:${d.email}`;$('#contactLinkedin').href=d.linkedin;$('#contactGithub').href=d.github;
 const exp=$('#experienceList');d.experienceItems.forEach(x=>{const a=el('article','timeline-item'),top=el('div','timeline-top'),left=el('div');left.append(el('h3','',x.company),el('span','role',x.role));top.append(left,el('time','',x.dates));a.append(top,el('p','',x.description));exp.append(a)});
 d.earlyExperience.forEach(x=>{const a=el('div','early-card');a.append(el('strong','',x.company),el('span','',`${x.role} · ${x.dates}`));$('#earlyList').append(a)});
 d.projects.forEach((x,i)=>{const a=el('article','project-card'),top=el('div','project-top');top.append(el('span','project-number',`PROJECT / 0${i+1}`),el('span','project-domain',x.domain));a.append(top,el('h3','',x.name),el('p','',x.description));const ul=el('ul','highlights');x.highlights.forEach(h=>ul.append(el('li','',h)));a.append(ul);const tags=el('div','tags');x.stack.forEach(s=>tags.append(el('span','',s)));a.append(tags);$('#projectGrid').append(a)});
 d.skills.forEach(x=>{const a=el('article','skill-card');a.append(el('h3','',x.group),el('p','',x.items.join('  ·  ')));$('#skillGrid').append(a)});
 d.certifications.forEach(x=>{const a=el('article','credential-card');a.append(el('span','card-kicker','CERTIFICATION'),el('h4','',x.name),el('p','',`Issued ${x.issued}`));if(x.validity)a.append(el('p','muted',x.validity));$('#certList').append(a)});
 $('#degree').textContent=d.education.degree;$('#institution').textContent=d.education.institution;$('#affiliation').textContent=d.education.affiliation;$('#gradYear').textContent=d.education.year;
}
loadPortfolio().then(render);
const saved=localStorage.getItem('portfolio-theme');if(saved)document.documentElement.dataset.theme=saved;
$('#themeToggle').addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;localStorage.setItem('portfolio-theme',next)});
$('#menuToggle').addEventListener('click',()=>$('#nav').classList.toggle('open'));document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>$('#nav').classList.remove('open')));
