import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ZsMessage } from "@zsjs/mui-components";

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={() => ZsMessage.success({ content: 'Success' })} variant="contained" color="success">
        Success
      </Button>
      <Button onClick={() => ZsMessage.info({ content: 'info' })} variant="contained" color="info">
        info
      </Button>
      <Button onClick={() => ZsMessage.warning({ content: 'warning' })} variant="contained" color="warning">
        warning
      </Button>
      <Button onClick={() => ZsMessage.error({ content: 'error' })} variant="contained" color="error">
        error
      </Button>
    </Stack>
  );
}