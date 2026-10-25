import React from "react";
// @ts-expect-error CSS is loaded by the bundler; TypeScript has no CSS module declaration.
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Stack direction="column">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h4">
            Create React App on TS with REDUX
          </Typography>
        </Box>
        <Button variant="contained">Contained</Button>
      </Stack>
    </Container>
  );
}

export default App;
