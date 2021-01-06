import React from 'react';
import classNames from 'classnames';

import { Button } from 'components/Button';

import './PopUpWindow.scss';

interface IProps {
  className?: string;
  children: React.ReactNode;
  closeBtnText?: string;
  onClose?: () => void;
}

export const PopUpWindow: React.FC<IProps> = ({
  className,
  onClose,
  children,
  closeBtnText,
}: IProps) => {
  const onContentClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const onCloseBtnClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const closeButton = onClose ? (
    <Button className="pop-up-window-close-btn" onClick={onCloseBtnClick}>
      {closeBtnText || 'Close'}
    </Button>
  ) : null;

  return (
    <div className={classNames('pop-up-window', className)}>
      <div className="pop-up-window-content" onClick={onContentClick}>
        <div className="pop-up-window-children">{children}</div>
        {closeButton}
      </div>
    </div>
  );
};
