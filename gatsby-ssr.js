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
return w.location.protocol==='https:'&&w.location.hostname==='ketamine.pacificpaingroup.com'&&w.location.pathname==='/';
}});
})(window);`,
      }}
    />,
    <script
      key="gtm-head"
      dangerouslySetInnerHTML={{
        __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
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
