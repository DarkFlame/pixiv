import {
    join
} from 'path';

let config = {
    env: 'development',
    mongodb: {
        url: 'mongodb://127.0.0.1/pixtv'
    },
    user:{
      username:'XXXXXX',
      password:'XXXXXX'
    },
    allowOrigins: ["http://localhost:9102","http://192.168.10.42:9102","http://localhost:63342","http://localhost:8080","http://localhost:9020"],
    port: 9988,
    uploadDir: join(__dirname,'../../uploads'),
    fileDir: join(__dirname,'../../files'),
    logDir: join(__dirname,'../../logs'),
    logLevel: 'info',
    poolSize: 200,
    apiTimeout: 60000
};


export default config;
