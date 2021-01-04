import { API } from 'api';
import { Checkbox } from 'components/Checkbox';
import { PopUpWindow } from 'components/PopUpWindow';
import { View } from 'layouts/View';
import React, { useState } from 'react';
import './Layout.scss';

const WelcomeGif = require('assets/welcome.gif').default;

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
              onCheck={onCheckboxCheck}
            />
          </div>
        </PopUpWindow>
      ) : null}
      <View />
    </div>
  );
};
