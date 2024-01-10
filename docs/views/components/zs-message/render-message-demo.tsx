import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ZsMessage } from "@zsjs/mui-components";

export default function ColorButtons() {
  const renderMessage = () => {
    ZsMessage.renderMessage({ content: <p>hello world</p>, duration: 2000, type: 'success' })
  }
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={() => renderMessage()} variant="contained" color="success">
        renderMessage
      </Button>
    </Stack>
  );
}