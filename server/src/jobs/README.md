# Brasileis Crawlers

## 1. Directory organization
```javascript
folderName
    |-- index.ts // required
    |-- sandBox.ts // optional
    |-- crawlerName.ts // required
    |-- workers // optional
        |-- processor.ts 
        |-- runner.ts

```
## Directory explanation
- `foldeName` : folderName should be replaced with the crawler's name or with the job name
- `sandBox.ts` : this file is optional. If a crawlers has a proccess which should be executed on a sandbox enviroment this file is necessary.
- `crawlerName.ts` : this file contains the crawler/job code which will run on a sandbox or not
- `/workers/` 
    - `processor.ts` : this file will process on sandBox any code related with the main job which should be executed on another job 
    - `runner.ts` :  this file will call the processor.ts to be executed