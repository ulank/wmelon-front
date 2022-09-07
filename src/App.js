import './App.css';
import {Alert, Button, Stack} from "@mui/material";

function App() {
    return (
        <Stack spacing={2} direction="column">
            <Button variant="contained">Bauka lox</Button>
            <Button variant="outlined">Outlined</Button>
            <Alert severity="error"> ОЛЖАС ГЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЙ!</Alert>
        </Stack>
    );
}

export default App;
