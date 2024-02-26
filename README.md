# v4-Portfolio
test
quick delete of unused merged local branches

```powershell
git branch --merged | ForEach-Object { $_.Trim() } | Where-Object { $_ -notmatch '^\*' } | ForEach-Object { git branch -d $\_ }
```
