// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
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
  ]);

  setPreBodyComponents([
    <noscript key="gtm-noscript">
      <iframe
        title="GTM"
        src="https://www.googletagmanager.com/ns.html?id=GTM-M55HVZQ3"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>,
  ]);
};
