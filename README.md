# threads-with-nodejs

Thiw project is mean to better understand how to do multithreating with nodejs 12.10.0.
For this, i installed [htop](https://hisham.hm/htop/) to be able to keep track of the
processes and threads.

Before running my node program, i went ahead and (through `htop`) filter my processes
in a tree mode as well as searching for the program i'm running which is `node index.js`.
Right away i can see that nothing is displayed:

![alt text](https://github.com/opposite-bracket/threads-with-nodejs/blob/master/before-execution.png?raw=true "htop before execution")

Then i went ahead and implemented a simple program which seems to run a single thread with
only one worker and this is what it looked like:

![alt text](https://github.com/opposite-bracket/threads-with-nodejs/blob/master/main-thread-with-1-thread.png?raw=true "htop running program with 1 worker")

As you can see, it spun up a thread with 6 additional workers on top of the one
i needed to run. Seeing this, I was currious what would happened if I added 2 more workers.

![alt text](https://github.com/opposite-bracket/threads-with-nodejs/blob/master/main-thread-with-3-thread.png?raw=true "htop running program with 3 worker")

Interestingly enough, it seems to always add 6 additional workers and this seems to be a patter
even when i add 12 workers:

![alt text](https://github.com/opposite-bracket/threads-with-nodejs/blob/master/main-thread-with-12-thread.png?raw=true "htop running program with 12 worker")