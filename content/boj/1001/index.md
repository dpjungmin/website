---
date: 2022-12-05
title: "백준 1001번: A-B"
slug: /boj/1001/
description: "백준 1001번: A-B"
---

https://www.acmicpc.net/problem/1001

```cpp
#include <bits/stdc++.h>

using namespace std;

int main(void) {
  cin.tie(nullptr)->sync_with_stdio(false);
  cin.exceptions(ios::badbit | ios::failbit);

  int a, b;
  cin >> a >> b;
  cout << a - b;

  return 0;
}
```
