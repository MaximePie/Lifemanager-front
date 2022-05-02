import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
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
      <p className="Task__name">
        {name}
        {' '}
        {delay && `(${delay}J)`}
        {remainingDays && `(${remainingDays})`}
      </p>
      <input
        type="checkbox"
        onChange={onTick}
        checked={isOK}
      />
    </StyledTask>
  );
}
