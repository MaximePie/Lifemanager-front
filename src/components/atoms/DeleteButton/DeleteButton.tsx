import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import DeleteButtonProps from './types';

export default function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <IconButton
      aria-label="delete"
      onClick={onClick}
      color="error"
    >
      <DeleteIcon />
    </IconButton>
  );
}
