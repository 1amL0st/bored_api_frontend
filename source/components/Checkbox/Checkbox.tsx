import React, { useState } from 'react';
import classNames from 'classnames';

import './Checkbox.scss';

interface IProps {
  className?: string;
  label: string;
  onChange(isChecked: boolean): void;
}

export const Checkbox: React.FC<IProps> = ({
  className,
  onChange: onCheck,
  label,
}: IProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    onCheck(!isChecked);
    setIsChecked(!isChecked);
  };

  /*
    NOTE: Maybe implement checking on <div> click?
  */
  return (
    <div className={classNames('checkbox', className)}>
      <input
        className="checkbox-input"
        type="checkbox"
        onChange={checkHandler}
      />
      <label className="checkbox-label">{label}</label>
    </div>
  );
};
