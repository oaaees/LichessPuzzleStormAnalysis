import fs from 'fs';
import readline from 'readline';

async function mainProcess() {
  const readStream = fs.createReadStream('Results.jsonl');
  const writeStreamBullet = fs.createWriteStream('ResultsCSV/ResultsBullet.csv', {flags:'a'});
  const writeStreamBlitz = fs.createWriteStream('ResultsCSV/ResultsBlitz.csv', {flags:'a'});
  const writeStreamRapid = fs.createWriteStream('ResultsCSV/ResultsRapid.csv', {flags:'a'});
  const writeStreamClassical = fs.createWriteStream('ResultsCSV/ResultsClassical.csv', {flags:'a'});
  const writeStreamPuzzle = fs.createWriteStream('ResultsCSV/ResultsPuzzle.csv', {flags:'a'});

  writeStreamBullet.write("id,bullet,storm\n");
  writeStreamBlitz.write("id,blitz,storm\n");
  writeStreamRapid.write("id,rapid,storm\n");
  writeStreamClassical.write("id,classical,storm\n");
  writeStreamPuzzle.write("id,puzzle,storm\n");  

  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    let user = JSON.parse(line);
    if(user.perfs.bullet.rd < 80){
      writeStreamBullet.write(user.id + ',' + user.perfs.bullet.rating +',' + user.perfs.storm.score + '\n');
    } 
    if(user.perfs.blitz.rd < 80){
      writeStreamBlitz.write(user.id + ',' + user.perfs.blitz.rating +',' + user.perfs.storm.score + '\n');
    } 
    if(user.perfs.rapid.rd < 80){
      writeStreamRapid.write(user.id + ',' + user.perfs.rapid.rating +',' + user.perfs.storm.score + '\n');
    } 
    if(user.perfs.classical.rd < 80){
      writeStreamClassical.write(user.id + ',' + user.perfs.classical.rating +',' + user.perfs.storm.score + '\n');
    }
    if(user.perfs.puzzle && user.perfs.puzzle.rd < 80){
      writeStreamPuzzle.write(user.id + ',' + user.perfs.puzzle.rating +',' + user.perfs.storm.score + '\n');
    }
  }
}

mainProcess();