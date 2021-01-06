import React, { useState } from 'react';

import { Checkbox } from 'components/Checkbox';
import { PopUpWindow } from 'components/PopUpWindow';
import { View } from 'layouts/View';
import { API } from 'api';

import WelcomeGif from 'assets/welcome.gif';
import './Layout.scss';

export const Layout: React.FC = () => {
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
              onChange={onCheckboxCheck}
            />
          </div>
        </PopUpWindow>
      ) : null}
      <View />
    </div>
  );
};
