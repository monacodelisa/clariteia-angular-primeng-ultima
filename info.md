angular runtime removed from netlify deployment cos it was creating issues always returning build error -

```
10:01:51 AM: Plugin "@netlify/angular-runtime" failed                      
10:01:51 AM: ────────────────────────────────────────────────────────────────
10:01:51 AM: ​
10:01:51 AM:   Error message
10:01:51 AM:   Error: Publish directory is configured incorrectly. Please set it to "dist/".
```

even though it was set to `/dist` the whole time
