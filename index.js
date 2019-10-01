#!/usr/bin/env node

const { Worker, isMainThread, workerData, threadId } = require('worker_threads');

const runForrest = () => {
    if( isMainThread ) {
        const threadCount = 12;
        for(let i = 0; i < threadCount; i++) {
            new Worker(__filename, {workerData: {name: `thread${i}`}});
        }
    } else {
        console.log(`waiting for worker ${workerData.name} ${threadId} to finish!`);
        console.log(isMainThread);
        setTimeout(() => {
            console.log(`worker ${workerData.name} finished!`);
        }, 5000);
    }
};

runForrest();