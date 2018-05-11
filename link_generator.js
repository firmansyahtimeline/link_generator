// ==UserScript==
// @name         Link Generator
// @namespace    link
// @version      2.1
// @description  bypass safelink with link generator
// @author       Firmansyah
// @contactURL   https://reek.github.io/firmansyahtimeline/#contact
// @downloadURL  https://raw.githubusercontent.com/firmansyahtimeline/link_generator/master/link_generator.js
// @updateURL    https://raw.githubusercontent.com/firmansyahtimeline/link_generator/master/link_generator.js
// @match        *://*/*
// @license      MIT
// @grant        none
// ==/UserScript==



function urldecode(url) {

  return decodeURIComponent(url.replace(/\+/g, ' '));

}

function urlencode(str) {
  return encodeURIComponent(str + '');
}

function base64decode(str){
var enc = atob(str);
return enc;
}
function base64encode(str){
var enc = btoa(str);
return enc;
}
function find_base64(str){
var re = /aHR0([a-zA-Z0-9\+\=\/]{11,})/;
var found = str.match(re);
return (found[0]);
} 
/*
function hidesticky(){
document.getElementById("sticky").innerHTML = '';
document.getElementById("sticky").style.position='';
document.getElementById("sticky").style.background='';
document.getElementById("sticky").style.display='none';
}
*/

var isiscripthide= base64decode('CmZ1bmN0aW9uIGhpZGVzdGlja3koKXsKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInN0aWNreSIpLmlubmVySFRNTCA9ICcnOwpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgic3RpY2t5Iikuc3R5bGUucG9zaXRpb249Jyc7CmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJzdGlja3kiKS5zdHlsZS5iYWNrZ3JvdW5kPScnOwpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgic3RpY2t5Iikuc3R5bGUuZGlzcGxheT0nbm9uZSc7Cn0K');
var scripthide=document.createElement('script');
scripthide.innerHTML=isiscripthide;
document.head.appendChild(scripthide); // append in head



function goto(linknya)
{
var aa="8@739#+%937+@9#+hksjd";
var bb=window.location.href;
if(bb.length>0){
aa=bb;
}
    if (linknya.indexOf(aa) > -1) {
showsticky('<a href=\"'+linknya+'\">'+'Reff'+'</a>');
        }else{
showsticky('<a href=\"'+linknya+'\">'+linknya+'</a>');
}
}

function showsticky(str){
document.getElementById("sticky").innerHTML = str+'<br><br><center><a href="javascript:hidesticky();" onClick="hidesticky();" >[X] CLOSE</a></center>';
document.getElementById("sticky").style.position='fixed';
document.getElementById("sticky").style.background='black';
document.getElementById("sticky").style.display='initial';
document.getElementById("sticky").style.padding='1em';
/*
setTimeout(
    function() {
      hidesticky();
    }, 5000);
*/
}

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}


function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function chkurl(url) {
var re = /^(http|https|ftp)/

if(!re.test(url)) {
    return "false";
}else{
return "true";
}
}
function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}



function explode(delim, str)
{
    return str.split(delim);
}





var fragment = create('<div id="sticky" class="sticky"></div>');
// You can use native DOM methods to insert the fragment:
document.body.insertBefore(fragment, document.body.childNodes[0]);
document.getElementById("sticky").style.display='none';
document.getElementById("sticky").style.right='0%';
document.getElementById("sticky").style.bottom='0%';
document.getElementById("sticky").style.left='0%';
document.getElementById("sticky").style.color='white';

var sheet = document.createElement('style');
sheet.innerHTML = "   div.sticky{     background-color:black; position:fixed;  display: inline-block;    color: white;    text-align: center;    padding: 14px;    text-decoration: none;              overflow: auto;\n        white-space: nowrap;  z-index: 999;    } ";

//document.body.appendChild(sheet); // append in body
document.head.appendChild(sheet); // append in head

var isiscripthide= base64decode('CmZ1bmN0aW9uIGhpZGVzdGlja3koKXsKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInN0aWNreSIpLmlubmVySFRNTCA9ICcnOwpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgic3RpY2t5Iikuc3R5bGUucG9zaXRpb249Jyc7CmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJzdGlja3kiKS5zdHlsZS5iYWNrZ3JvdW5kPScnOwpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgic3RpY2t5Iikuc3R5bGUuZGlzcGxheT0nbm9uZSc7Cn0K');
var scripthide=document.createElement('script');
scripthide.innerHTML=isiscripthide;
document.head.appendChild(scripthide); // append in head




/*
var str = 'http://aku.in/hahaahrokudea/=+kajy@$+(sxgd';
var zz= find_base64(str);
if(zz.length>0){
document.write(zz);
}
*/

//method


function m_findinurl(str){ 
var count = (str.match(/(http|https)/g) || []).length;
if(count<2){
return '';
}else{
var uri= str.split(/http|https*/);
var uris= (str.match(/(http|https)/g) || []);
try{
uri =uris[1]+urldecode(uri[2]);
}catch(err){}
goto(uri);
return uri;
}
}

function m_base64(str){

var zz= find_base64(str);
if(zz.length>0){
zz=base64decode(zz);

var aa2=chkurl(zz);
if (aa2 == "true")
{
goto(zz);}//true chkurl
}//length>0
}

function m_param(str){

var as=extractparam(str);
var lenas=as.length;
var l1=0;
while(lenas>0&&l1<=lenas)
{


var string="ok";
    try{
string = base64decode(as[l1]);

    }catch(err){

}
var aa1=chkurl(string);
if (aa1 == "true")
{
goto(string);}
l1=l1+1;
}
}

function allmethod(str){
var c=str.length;
if(c>10){
m_findinurl(str);
m_base64(str);
}
}

//method
//standar
function extractparam(str){
var res=[];
var text=str;

var hostnamedmn=extractHostname(str);
try{
text=replaceAll(text,hostnamedmn+"/", "&aa=");
}catch(err){}

try{
text=replaceAll(text,"%26", "&");
}catch(err){}


try{
text=text.replace("?", '&');
}catch(err){}
try{
var tanya =urldecode("3F");
text=replaceAll(text,tanya, "&a");
}catch(err){}
try{
text=replaceAll(text,"%3D", "=");
}catch(err){}

try{
text=replaceAll(text,"%2B", "+");
}catch(err){}
try{
text=replaceAll(text,"%3F", "&");
}catch(err){}
try{
text=replaceAll(text,"%2F", "/");
}catch(err){}
    var subs = explode('&', text);
    for(var i = 0; i < subs.length; ++i)
    {
    try{
        var vals=subs[i].replace("=", 'kodedireplace');
        //replacefirst
        vals = explode('kodedireplace', vals);
        var valsa=vals[1];
        res.push(valsa);
}catch(err){}

    }
    return res;
}
var x=window.location.href;
if(x>10){

m_param(window.location.href);
allmethod(window.location.href);
}
[].forEach.call(document.querySelectorAll('a'), function(link) {
    link.addEventListener('mouseover', function(event) {
var deas=urldecode(this.href);
allmethod(deas);

m_param(deas);
        console.log(this.href); // `this` being the element triggering the event.
    });
});
//standar
