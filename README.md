# Lichess Puzzle Storm Analysis
_______________________________

This is a Data Analysis project I've wanted to do since [Lichess](https://lichess.org) launched the [Puzzle Storm Feature](https://lichess.org/storm). If you are a Lichess player and want to know how good/bad your score is this is your place!

## Methodology

This study was possible thanks to [Lichess Database](https://database.lichess.org/#standard_games) and [Lichess API](https://lichess.org/api)

This project was done following these steps

1. A very small portion of the Database was downloaded
2. For every game, the username of both players was extracted (remove duplicates!)
3. For every user, the API was called to get the current rating and puzzle storm score
4. Only users who had more than 5 tries in puzzle storm and also had an established rating in either Bullet/Blitz were considered
5. The plots were made using [matplotlib](https://matplotlib.org/) and Data Analysis with [numpy](https://numpy.org/) and [pandas](https://pandas.pydata.org/)

## Results

![Blitz/Bullet Results](/imgs/ResultBulletBlitz.png)

### Correlation
Both Bullet and Blitz rating have a correlation of 0.845 when compared with Puzzle Storm Score

### Curves of Best Fit
Using quadratic regression we get the equations for the following parabolas where Y is your Puzzle Storm Score and X is your Bullet/Blitz Rating:  

For Bullet   
<p align="center"> $y = 0.00001420323x^2 - 0.02129423x + 26.41750$ </p>   

For Blitz     
<p align="center"> $y = 0.00001865402x^2 - 0.0342326x + 32.27948$ </p>   

 ## Run this project
To run this project you will need to install [NodeJS](https://nodejs.org/en/) and [npm](https://www.npmjs.com/), then:

1. Clone this project 
2. Run `npm install` in the project folder

This project was divided into 3 files with different purposes:
* **getUsers.js**: It will take a Lichess pgn file as an input and will output a file with a list of lichess users
* **getData.js**: It will take a list of lichess users, then call the API, filter the ones we are looking for and finally outputs a .jsonl file with the users data
* **JSONtoCSV.js** It will take a .jsonl file and output one/various .csv files