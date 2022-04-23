module.exports = [
  [
    'scripts-plugin', {
      postBodyTags: [
        `<script>
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '223853962474196');
          fbq('track', 'PageView');
        </script>`,
        `<script>
            window.intercomSettings = {
              app_id: "n4cr7229",
            };
        </script>`,
        `<script>
              // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/n4cr7229'
              (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/n4cr7229';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
        </script><script src="https://hwydcnfx4l0w.statuspage.io/embed/script.js"></script>`,
      ]
    }
  ],
  [
    require.resolve('docusaurus-gtm-plugin'),
    {
      id: 'GTM-MNRS8XR', // GTM Container ID
    }
  ]
]
