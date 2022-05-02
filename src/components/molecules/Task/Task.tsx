import React from 'react';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone'; import SyncTwoToneIcon from '@mui/icons-material/SyncTwoTone';
import { StyledTask, Detail, Details } from './styles';
import { TaskProps } from './types';
import useTask from './useTask';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';

export default function TaskComponent(props: TaskProps) {
  const {
    formattedTask: {
      name, isOK, repetitionDelay: delay, remainingTime,
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
        </p>
        <Details>
          {delay && (
            <Detail>
              <SyncTwoToneIcon
                color="primary"
                fontSize="small"
              />
              {delay}
              J
            </Detail>
          )}
          {remainingTime !== undefined && (
            <Detail>
              <HourglassBottomTwoToneIcon
                color="warning"
                fontSize="small"
              />
              {remainingTime}
            </Detail>
          )}
        </Details>
      </div>
      <input
        type="checkbox"
        onChange={onTick}
        checked={isOK}
      />
    </StyledTask>
  );
}
