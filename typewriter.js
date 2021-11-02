const sentence = "hello there from lighthouse labs/n";
let time = 0;
for(const char of sentence){
  
  setTimeout(() => {
    process.stdout.write(char);
    }, time);
    time += 50
    
};

