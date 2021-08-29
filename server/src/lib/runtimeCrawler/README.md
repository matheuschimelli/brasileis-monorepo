# Brasileis Crawler Runtime execution
## What does it does?
Basically it allows us to store javascript code into database and run it without using eval or anything like that. The runtime enviroment is safe enought to only allow the execution of pre-defined functions and keywords from javascript.

## How it works
- Create a execution path 
- Put inside the created execution path a file with the code retrieved from database
- Execute code
- remove execution path