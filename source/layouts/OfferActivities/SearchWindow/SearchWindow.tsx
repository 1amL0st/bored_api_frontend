import React from 'react';

import { PopUpWindow } from 'components/PopUpWindow';

import FailedSearchGif from 'assets/failed_search.gif';
import SearchGif from 'assets/search.gif';

// FIXME: There is a copy of this enum in ../controls/coontrols.tsx!!!
enum SearchStage {
  Idle,
  Searching,
  Failed,
}

interface IProps {
  stage: SearchStage;
  closeCallback: () => void;
}

export const SearchWindow: React.FC<IProps> = ({
  stage,
  closeCallback,
}: IProps) => {
  if (stage === SearchStage.Idle) return null;

  if (stage === SearchStage.Searching) {
    return (
      <PopUpWindow>
        <div className="searching-window">
          <img src={SearchGif} width="256px" height="256px" />
        </div>
      </PopUpWindow>
    );
  }

  return (
    <PopUpWindow closeBtnText="Close" onClose={closeCallback}>
      <div className="searching-window">
        <img src={FailedSearchGif} width="256px" height="256px" />
        <span>We can't find. Try again later...</span>
      </div>
    </PopUpWindow>
  );
};
