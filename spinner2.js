let moveArr = ['|', '/', '-', '\\', '|'];
let time = 0; 
for (let move of moveArr) {
  setTimeout(() => process.stdout.write(`\r${move}`), time += 800);
}; 
setTimeout(() => console.log('\n'), time);
