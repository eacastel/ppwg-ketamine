// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="ppwg-consent-style" rel="stylesheet" href="/ppwg-public-consent-native.css" />,
    <script key="ppwg-consent-native" src="/ppwg-public-consent-native.js" />,
    <script
      key="ppwg-consent-init"
      dangerouslySetInnerHTML={{
        __html: `(function(w){
w['ga-disable-G-VK55BK4WPF']=true;
if(w.ppwgNativeConsent)w.ppwgNativeConsent.install({loadCmp:true,
measurementIds:['G-VK55BK4WPF'],isPublicPage:function(){
return w.location.protocol==='https:'&&!w.location.port&&w.location.hostname==='ketamine.pacificpaingroup.com'&&w.location.pathname==='/';
}});
})(window);`,
      }}
    />,
    <script
      key="gtm-head"
      dangerouslySetInnerHTML={{
        __html: `
(function(w,d,s,l,i){
var started=false;
function maybeStart(){
var bridge=w.ppwgNativeConsent,state;
try{state=bridge&&bridge.getState();}catch(_){return;}
if(started||!state||state.completed!==true||state.analytics!==true||state.pendingWithdrawal===true||w['ga-disable-G-VK55BK4WPF']!==false)return;
if(w.location.protocol!=='https:'||w.location.port||w.location.hostname!=='ketamine.pacificpaingroup.com'||w.location.pathname!=='/')return;
started=true;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var j=d.createElement(s),dl=l!=='dataLayer'?'&l='+l:'';j.async=true;
j.setAttribute('data-cookieyes','cookieyes-analytics');
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;d.head.appendChild(j);
}
d.addEventListener('ppwg_consent_update',maybeStart);maybeStart();
})(window,document,'script','dataLayer','GTM-M55HVZQ3');`,
      }}
    />,
    <meta
      key="fb-domain-verification"
      name="facebook-domain-verification"
      content="xag2ppwaqjtrhm9zpql57potzfyyhv"
    />,
  ]);

  // No noscript tracking iframe: a visitor without JavaScript cannot choose
  // optional analytics. The regular container retains its existing ID above.
};
