(function(){
var root=document.querySelector('.jal');if(!root)return;
root.querySelectorAll('.yr').forEach(function(e){e.textContent=new Date().getFullYear()});
root.querySelectorAll('.faq-q').forEach(function(b){b.addEventListener('click',function(){
 var open=b.getAttribute('aria-expanded')==='true';
 root.querySelectorAll('.faq-q').forEach(function(x){x.setAttribute('aria-expanded','false')});
 b.setAttribute('aria-expanded',open?'false':'true');});});
root.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var id=a.getAttribute('href').slice(1);if(!id)return;var t=document.getElementById(id);if(!t)return;e.preventDefault();t.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'start'});history.replaceState(null,'','#'+id);});});
var m=root.querySelector('.menu'),n=root.querySelector('nav');
if(m){m.addEventListener('click',function(){var o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)});
 n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open')})});}
var sel=root.querySelector('#coverage-select');
if(sel){var p=new URLSearchParams(location.search).get('coverage');if(p)sel.value=p;
 root.querySelectorAll('.card[data-cov]').forEach(function(c){c.addEventListener('click',function(){sel.value=c.dataset.cov})});}
var f=root.querySelector('#quote-form');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),
 label=sel.options[sel.selectedIndex].text,
 body='Name: '+d.get('name')+'\nBusiness: '+d.get('business')+'\nEmail: '+d.get('email')+'\nPhone: '+d.get('phone')+'\nCoverage: '+label+'\n\nNeeds:\n'+d.get('needs');
 location.href='mailto:info@jalali-insurance.com?subject='+encodeURIComponent('Quote request: '+label)+'&body='+encodeURIComponent(body);});}
})();