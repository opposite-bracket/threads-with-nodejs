#!/usr/bin/env node

const { Worker, isMainThread, workerData, threadId } = require('worker_threads');

const runForrest = () => {
    if( isMainThread ) {
        new Worker(__filename, {workerData: {name: 'thread1'}});
        new Worker(__filename, {workerData: {name: 'thread2'}});
        new Worker(__filename, {workerData: {name: 'thread3'}});
        new Worker(__filename, {workerData: {name: 'thread4'}});
        new Worker(__filename, {workerData: {name: 'thread5'}});
        new Worker(__filename, {workerData: {name: 'thread6'}});
        new Worker(__filename, {workerData: {name: 'thread7'}});
        new Worker(__filename, {workerData: {name: 'thread8'}});
        new Worker(__filename, {workerData: {name: 'thread9'}});
        new Worker(__filename, {workerData: {name: 'thread10'}});
        new Worker(__filename, {workerData: {name: 'thread11'}});
        new Worker(__filename, {workerData: {name: 'thread12'}});
    } else {

        console.log(`waiting for worker ${workerData.name} ${threadId} to finish!`);
        console.log(isMainThread);
        setTimeout(() => {
            console.log(`worker ${workerData.name} finished!`);
        }, 5000);
    }
};

runForrest();