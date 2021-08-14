---
date: 2021-08-13
title: Test
slug: test
---

Then add it to your project’s `gatsby-config.js` file:

```js
// comment
type BreakpointToken = "mobile" | "phablet" | "tablet" | "desktop" | "hd"

type Breakpoints = Record<BreakpointToken, number>

// highlight-start
const breakpoints: Breakpoints = {
  mobile: 360,
  phablet: 550,
  tablet: 750,
  desktop: 1000,
  hd: 1300,
}
// highlight-end

export { breakpoints }
```

```shell{promptUser: alice}{promptHost: dev.localhost}
ls -las
```

```rust
fn main() {
    let x = vec![0, 1000];
    println!("{}", x);
}
```

```json
{
  "id": "asdf"
}
```

```c
#include <stdio.h>

#define MAXLINE 100

int main()
{
    char line[MAXLINE];
}
```

```cpp
#include <stdio.h>

#define MAXLINE 100

int main()
{
    char line[MAXLINE];
}
```
