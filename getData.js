import * as dotenv from 'dotenv';
dotenv.config()
import fetch from 'node-fetch';
import fs from 'fs';
import readline from 'readline';
import { setTimeout }  from "timers/promises";

const headers = {
    Authorization: 'Bearer ' + process.env.lichessToken,
};

const fetchInfo = async (user) => {
    try {
        const response = await fetch('https://lichess.org/api/user/' + user, { headers });
        const body = await response.json();
        return body;
    } catch (err){
        console.log(err);
        return null;
    }
}

function validateInfo(info){
    if(!info.perfs || !info.perfs.storm){
      return false;
    }

    return (info.perfs.storm.runs > 5)
}

async function mainProcess() {
  const readStream = fs.createReadStream('Users.txt');
  const writeStream = fs.createWriteStream('Results.jsonl', {flags:'a'});

  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  let used = 0;
  let total = 0;

  for await (const user of rl) {
    await setTimeout(10);
    total++;
    var info = await fetchInfo(user);
    if(!info){continue}
    console.clear();
    console.log(info.id + " rate: " + used/total + " total: " + total);

    if(validateInfo(info)){
        used++;
        var data = {id: info.id, perfs: info.perfs};
        writeStream.write(JSON.stringify(data) + '\n');
    }
  }
}

mainProcess();

