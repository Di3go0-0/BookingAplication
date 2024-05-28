import app from './app.js'
import {connect} from './db.js'
import { PORT } from './config.js';
import events from 'events';


events.EventEmitter.defaultMaxListeners = 20;

connect();

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
});