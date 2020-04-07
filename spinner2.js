let time = 100;
let loops = 4;
setTimeout(() => {
for (let i = 0; i < loops; i++) {
setTimeout(() => {process.stdout.write('\r|   ');}, time);
setTimeout(() => {process.stdout.write('\r/   ');}, time + (2 * time));
setTimeout(() => {process.stdout.write('\r-   ');}, time + (4 * time));
setTimeout(() => {process.stdout.write('\r\\   '); }, time + (6 * time));
}}, 300);