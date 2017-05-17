#!/usr/bin/env node
import app from '../app';
app.listen(8866, () => {
    console.log('The server is running at http://localhost:' + '8866');
});