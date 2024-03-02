# v4-Portfolio

quick delete of unused merged local branches

Make sure you are on the main branch

```
git checkout main
```

Fetch the latest from the git

```
git pull --prune
```

See the list of local git branches

```
git branch
```

Delete all local branches that have been merged to main branch

```
git branch -vv | where {$_ -match '\[origin/.*: gone\]'} | foreach { git branch -d $_.split(" ", [StringSplitOptions]'RemoveEmptyEntries')[0]}
```

Sometimes it may give you an error that the the branch is not fully merged and you will need to change the -d to a -D

See the list of local git branches that remain

```
git branch
```
