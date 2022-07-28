# Lichess Puzzle Storm Analysis

This is a Data Analysis project I've wanted to do since [Lichess](https://lichess.org) launched the [Puzzle Storm Feature](https://lichess.org/storm). If you are a Lichess player and want to know how good/bad your score is this is your place!

## Methodology
_________________

This study was possible thanks to [Lichess Database](https://database.lichess.org/#standard_games) and [Lichess API](https://lichess.org/api)

This project was done following these steps

1. A very small portion of the Database was downloaded
2. For every game, the username of both players was extracted (remove duplicates!)
3. For every user, the API was called to get the current rating and puzzle storm score
4. Only users who had more than 5 tries in puzzle storm and also had an established rating in either Bullet/Blitz were considered
5. The plots were made using [matplotlib](https://matplotlib.org/)

## Results
_________________

![Blitz/Bullet Results](/imgs/ResultBulletBlitz.png)

Both Bullet and Blitz rating have a correlation of 0.845 with Puzzle Storm Score

Using quadratic regression we get the equations for the following parabolas of best fit:  
For Bullet  
> $y = 0.00001420323x^2 - 0.02129423x + 26.41750$  

For Blitz    
>$y = 0.00001865402x^2 - 0.0342326x + 32.27948$  

where Y is your Puzzle Storm Score and X is your Bullet/Blitz Rating
 