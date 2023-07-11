"use client"
import Script from "next/script";

function FBScript() {
  return (
    <>
      <Script id="FBScript">
        {`window.fbAsyncInit = function() {
            FB.init({
              appId      : '230495993197048',
              xfbml      : true,
              version    : 'v17.0'
            });
            FB.AppEvents.logPageView();
          };

          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));`}
      </Script>
      <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></Script>
    </>
  );
}

export default FBScript;