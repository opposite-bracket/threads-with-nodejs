#!/usr/bin/env node

const { isMainThread } = require('worker_threads');

const runForrest = () => {
    if( !isMainThread ) {
        console.log('waiting for worker to finish!');
        console.log(isMainThread);
        setTimeout(() => {
          console.log('called!')
        }, 5000);
    }
};

runForrest();