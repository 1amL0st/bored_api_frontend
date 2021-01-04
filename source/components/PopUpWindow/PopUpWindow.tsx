import classNames from 'classnames';
import { Button } from 'components/Button';
import React from 'react';
import './PopUpWindow.scss';

interface IProps {
  className?: string;
  children: React.ReactNode;
  closeBtnText?: string;
  onClose: () => void;
}

export const PopUpWindow: React.FC<IProps> = ({
  className,
  onClose,
  children,
  closeBtnText,
}: IProps) => {
  const onClick = () => {
    onClose();
  };

  const onContentClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const onCloseBtnClick = () => onClose();

  return (
    <div className={classNames('pop-up-window', className)} onClick={onClick}>
      <div className="pop-up-window-content" onClick={onContentClick}>
        {children}
        <Button className="pop-up-window-close-btn" onClick={onCloseBtnClick}>
          {closeBtnText || 'Close'}
        </Button>
      </div>
    </div>
  );
};
