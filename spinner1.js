let slash = '\\';

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 700);

setTimeout(() => {
  process.stdout.write(`\r${slash}   `);
}, 1000);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1600);

setTimeout(() => {
  process.stdout.write('\r-  '); 
}, 700);
