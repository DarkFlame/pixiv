#!/usr/bin/env node
import app from '../app';
import http from 'http';

const server = http.createServer(app.callback()).listen(process.env.port || 8866,function () {
    console.log('Server listening on port ' + server.address().port);
});

