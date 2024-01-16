# rewardRewire

This project is a timer app to improve productivity.
The following concepts are used for rewarding
1. Reward based on productivity - A person can accumulate reward hours based on the amount of productive work.
2. Random rewards to trigger dopamine - A study suggests that we release dopamine in anticpation of reward. We are using this mechanism to motivate the person to do productive work. The timer app rewards are random, thus creating a good hit of dopamine. This feedback can create addictive productivity.

## Dependencies
```
npm install vite
```

## Run 
```
npm run dev
```

## Build 

```
npx vite build
```

## Deploy
Build the project, rename 
```
mv dist/assests/<bundle name>.js vite-rendered.js
git add vite-rendered.js
git stash
git checkout deploy
git rm vite-rendered.js
git stash pop
git add vite-rendered.js
git commit -m "new deployment"
git push
```





