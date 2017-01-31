# sixflix

> 🎬 Detects whether a host environment supports ES6. [Algorithm by Netflix][algo].

# features

- detects ES6 support
- extremely tiny

# install

```shell
npm install sixflix --save
```

# api

`require('sixflix')` returns a function. calling this function returns `true` if the host environment supports ES6, `false` otherwise.

# related

- [Netflix JavaScript Talks - Transpilers: Bridge to the Future][talk]

# license

mit

[algo]: https://gist.github.com/DaBs/89ccc2ffd1d435efdacff05248514f38
[talk]: https://www.youtube.com/watch?v=M1qm-AWWu-M&feature=youtu.be&t=50m14s
