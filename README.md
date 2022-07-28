# Lichess Puzzle Storm Analysis

This is a Data Analysis project I've wanted to do since [Lichess](https://lichess.org) launched the [Puzzle Storm Feature](https://lichess.org/storm). If you are a Lichess player and want to know how good/bad your score is this is your place!

# Methodology

This study was possible thanks to [Lichess Database](https://database.lichess.org/#standard_games) and [Lichess API](https://lichess.org/api)

This project was done following these steps

1. A small portion of the Database was downloaded (~500k games)
2. For every game, the username of both players was extracted (remove duplicates!)
3. For every user, the API was called to get the current rating and puzzle storm score
4. Only users who had more than 5 tries in puzzle storm and also had an established rating in either Bullet/Blitz were considered
5. The plots were made using [matplotlib](https://matplotlib.org/)

# Results

![Blitz/Bullet Results](/imgs/ResultBulletBlitz.png)

