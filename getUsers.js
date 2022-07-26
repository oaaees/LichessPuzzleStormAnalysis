import fs from 'fs';
import readline from 'readline';

async function mainProcess() {
    const readStream = fs.createReadStream('LichessGames.txt');
    const writeStream = fs.createWriteStream('Users.txt');
  
    const rl = readline.createInterface({
      input: readStream,
      crlfDelay: Infinity
    });
  
    for await (const line of rl) {
        let user = line.match(/(?<=White "|Black ").*?(?=")/g);
        if(user){
            writeStream.write(user + '\n');
        }
    }
  }
  
mainProcess();