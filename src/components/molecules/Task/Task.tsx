import React from 'react';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import StyledTask from './styles';
import { TaskProps } from './types';
import useTask from './useTask';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';

export default function TaskComponent(props: TaskProps) {
  const {
    formattedTask: {
      name, isOK, repetitionDelay: delay, remainingDays,
    },
    onDeleteClick,
    onTick,
  } = useTask(props);

  return (
    <StyledTask isOK={isOK}>
      <DeleteButton onClick={onDeleteClick} />
      <div className="Task__name">
        <p>
          {name}
          {remainingDays && `(${remainingDays})`}
        </p>
        {delay && (
          <span>
            <HourglassBottomIcon
              color="primary"
              fontSize="small"
            />
            {delay}
            J
          </span>
        )}
      </div>
      <input
        type="checkbox"
        onChange={onTick}
        checked={isOK}
      />
    </StyledTask>
  );
}
