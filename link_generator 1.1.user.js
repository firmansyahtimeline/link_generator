// ==UserScript==
// @name         Link Generator
// @namespace    link
// @version      1.1
// @description  https://github.com/firmansyahtimeline/link_generator/
// @author       Firmansyah
// @downloadURL  https://raw.githubusercontent.com/firmansyahtimeline/link_generator/master/link_generator.js
// @updateURL    https://raw.githubusercontent.com/firmansyahtimeline/link_generator/master/link_generator.js
// @match        *://*/*
// @license      https://raw.githubusercontent.com/firmansyahtimeline/link_generator/master/readme.md
// @grant        none
// ==/UserScript==

function base64decode(str){
var enc = atob(str);
return enc;
}


//start ui
function showsticky(str){
document.getElementById("sticky").innerHTML = str+'<br><br><center><a href="javascript:hidesticky();" onClick="hidesticky();" >[X] CLOSE</a></center>';
document.getElementById("sticky").style.position='fixed';
document.getElementById("sticky").style.background='black';
document.getElementById("sticky").style.display='initial';
document.getElementById("sticky").style.padding='1em';

setTimeout(
    function() {
      hidesticky();
    }, 5000);
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

var fragment = create('<div id="sticky" class="sticky"></div>');
// You can use native DOM methods to insert the fragment:
document.body.insertBefore(fragment, document.body.childNodes[0]);
document.getElementById("sticky").style.display='none';
document.getElementById("sticky").style.top='10%';
document.getElementById("sticky").style.left='10%';
document.getElementById("sticky").style.color='white';

var sheet = document.createElement('style');
sheet.innerHTML = ".sticky{    z-index: 999;}";

//document.body.appendChild(sheet); // append in body
document.head.appendChild(sheet); // append in head

var isiscripthide= base64decode('CmZ1bmN0aW9uIGhpZGVzdGlja3koKXsKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInN0aWNreSIpLmlubmVySFRNTCA9ICcnOwpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgic3RpY2t5Iikuc3R5bGUucG9zaXRpb249Jyc7CmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJzdGlja3kiKS5zdHlsZS5iYWNrZ3JvdW5kPScnOwpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgic3RpY2t5Iikuc3R5bGUuZGlzcGxheT0nbm9uZSc7Cn0K');
var scripthide=document.createElement('script');
scripthide.innerHTML=isiscripthide;
document.head.appendChild(scripthide); // append in head





function hidesticky(){
document.getElementById("sticky").innerHTML = '';
document.getElementById("sticky").style.position='';
document.getElementById("sticky").style.background='';
document.getElementById("sticky").style.display='none';
}
//end ui

function goto(linknya)
{
showsticky('<a href=\"'+linknya+'\">'+linknya+'</a>');
}
function urldecode(str){
var uri_dec = decodeURI(str);
return uri_dec;
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
var as=extractparam(window.location.href);
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

[].forEach.call(document.querySelectorAll('a'), function(link) {
    link.addEventListener('mouseover', function(event) {
var deas=urldecode(this.href);

var as1=extractparam(deas);
var lenas1=as1.length;
var l11=0;
while(lenas1>0&&l11<=lenas1)
{
var string1="ok";
    try{
string1 = base64decode(as1[l11]);
 
    }catch(err){}
var aa2=chkurl(string1);
if (aa2 == "true")
{
goto(string1);}
l11=l11+1;
}
        console.log(this.href); // `this` being the element triggering the event.
    });
});



showsticky('<a>Link Generator Initialized</a>');
