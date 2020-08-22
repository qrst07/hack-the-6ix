import React from 'react';
export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <script key="alertify" src="https://unpkg.com/@daily-co/daily-js" type="text/javascript" crossOrigin="" />,
    <script
      key="fun_javascript"
      dangerouslySetInnerHTML={{
        __html: `
        callFrame = window.DailyIframe.createFrame();
        callFrame.join({ url: 'https://notate.daily.co/hello' })
      `,
      }}
    />,
  ]);
};
