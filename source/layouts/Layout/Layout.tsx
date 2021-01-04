import React, { useState } from 'react';

import { View } from 'layouts/View';

import { Button } from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import { PopUpWindow } from 'components/PopUpWindow';

import { API } from 'api';

import WelcomeGif from 'assets/welcome.gif';

import './Layout.scss';

export const Layout = () => {
  const [isWindowOpen, setWindowOpen] = useState(
    API.getShouldShowWelcomeWindow()
  );

  const closeWindow = () => {
    setWindowOpen(false);
  };

  const onCheckboxCheck = (isChecked: boolean) => {
    // console.log('onCheckboxCheck isChecked = ', isChecked);
    API.setShouldShowWelcomeWindow(!isChecked);
  };

  return (
    <div className="layout">
      {isWindowOpen ? (
        <PopUpWindow onClose={closeWindow} closeBtnText="Hi!">
          <div className="welcome-window">
            <img src={WelcomeGif} />
            <Checkbox
              className="welcome-window-checkbox"
              label="Don't show again"
              onCheck={onCheckboxCheck}
            />
          </div>
        </PopUpWindow>
      ) : null}
      <View />
    </div>
  );
};
