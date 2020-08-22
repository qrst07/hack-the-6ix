import React from 'react';
export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <script key="daily1" src="https://unpkg.com/@daily-co/daily-js" type="text/javascript" crossOrigin="" />,
  ]);
};
