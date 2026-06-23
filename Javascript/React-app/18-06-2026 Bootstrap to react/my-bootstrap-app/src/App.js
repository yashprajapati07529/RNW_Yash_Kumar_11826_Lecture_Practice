
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// React Bootstrap से कंपोनेंट्स इम्पोर्ट करें
import { Button, Container, Alert } from 'react-bootstrap';

function App() {
  return (
    <Container className="mt-5">
      <Alert variant="success">
        आपकी Bootstrap वेबसाइट अब React में बदल चुकी है!
      </Alert>
      <Button variant="primary">click me</Button>
    </Container>
  );
}

export default App;

