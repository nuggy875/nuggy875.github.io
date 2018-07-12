---
title: "[안드로이드] 특수문자 포함된 String을 Split,Replace하기"
date: "2018-07-13T00:30:32.169Z"
layout: post
draft: false
path: "/posts/android/post-6"
category: "Android"
tags:
  - "Android"
  - "Java"
  - "String"
  - "Split"
  - "특수문자"
description: "split함수와 replace함수에 대해. 그리고 특수문자에 대한 적용."
---

Java언어로 많이 쓰이는 String에 대한 함수 `split()` `replace`에 대해서 알아보자!

따로 설명할 필요 없이 사용예시를 보면 이해가 될 것이다.
## split()함수를 이해해보자!

```JAVA
String colorPower = "빨강:주황:노랑:초록";
String[] colorPowers = colorPower.split(":");
```

위와 같은 경우에서  

```JAVA
colorPowers[0] == "빨강"
colorPowers[1] == "주황"
colorPowers[2] == "노랑"
colorPowers[3] == "초록"
```
과 같은 결과를 얻을 수 있다.
어떠한 문자에 대해서 `split`한 다음 스트링 배열에 입력하게 된다.


## replace()함수의 사용 예시도 들어볼까?

```JAVA
String colorPower = "빨강:주황:노랑:초록";
String colorPowerReplaced = colorPower.replace(":","이");
```

```JAVA
colorPowerReplaced = "빨강이주황이노랑이초록";
```
위와 같이 문자를 대체할 수 있는 기능이 있다.


하지만 안드로이드에서 (JAVA에서도 동일)  
"*", ".", "$", 등등의

### 특정 특수문자에 대하여 이 함수가 작동하지 않는 것을 확인하였다.

**
이땐 간단하게 앞에 \\\를 붙혀주면 된다.

```JAVA
String colorPower = "빨강.주황.노랑.초록";
String[] colorPowers = colorPower.split("\\.");
```
```JAVA
colorPowers[0] == "빨강"
colorPowers[1] == "주황"
colorPowers[2] == "노랑"
colorPowers[3] == "초록"
```

쉽죠잉?
