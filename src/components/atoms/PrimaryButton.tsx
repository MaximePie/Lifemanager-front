import { Button } from '@mui/material';
import React, { MouseEvent } from 'react';

type PrimaryButtonProps = {
  text: string,
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function PrimaryButton({ text, onClick }: PrimaryButtonProps) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        marginY: 2,
      }}
    >
      {text}
    </Button>
  );
}
