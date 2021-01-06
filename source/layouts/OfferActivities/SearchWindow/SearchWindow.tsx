import React from 'react';

import { PopUpWindow } from 'components/PopUpWindow';

import FailedSearchGif from 'assets/failed_search.gif';
import SearchGif from 'assets/search.gif';

enum SearchStage {
  none,
  searching,
  failed,
}

interface ISearchWindowProps {
  stage: SearchStage;
  closeCallback: () => void;
}

export const SearchWindow: React.FC<ISearchWindowProps> = ({
  stage,
  closeCallback,
}: ISearchWindowProps) => {
  if (stage !== SearchStage.none) {
    if (stage === SearchStage.searching) {
      return (
        <PopUpWindow>
          <div className="searching-window">
            <img src={SearchGif} width="256px" height="256px" />
          </div>
        </PopUpWindow>
      );
    } else {
      return (
        <PopUpWindow closeBtnText="Close" onClose={closeCallback}>
          <div className="searching-window">
            <img src={FailedSearchGif} width="256px" height="256px" />
            <span>We can't find try. Try again later...</span>
          </div>
        </PopUpWindow>
      );
    }
  } else {
    return null;
  }
};
