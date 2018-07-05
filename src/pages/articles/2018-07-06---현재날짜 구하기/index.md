---
title: "[안드로이드] 현재 날짜, 시간 구하기"
date: "2018-07-06T01:52:32.169Z"
layout: post
draft: false
path: "/posts/android/post-2"
category: "Android"
tags:
  - "Android"
  - "SimpleDateFormat"
  - "안드로이드"
description: "SimpleDateFormat 이용"
---

현재 시간을 필요로 하는 경우가 있다.  
안드로이드에서는 이를 기본 라이브러리로 제공한다. (사실 자바 라이브러리)

1. 현재 시간을 가져온다.
  ```Java
  long now = System.currentMills();
  ```
2. Date형식으로 고친다.
  ```Java
  Date mDate = new Date(now);
  ```

3. 날짜, 시간을 가져오고 싶은 형식으로 가져올 수 있다.
  ```Java
  SimpleDateFormat simpleDate = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
  String getTime = simpleDate.format(mDate);
  ```

위와 같이 작성할 경우, getTime 변수에 **2018-07-06 01:42:00** 이런식으로 날짜를 가져올 수 있다.

MM-dd 만 작성할 경우 "07-06" 이런식으로 Customize 할 수 있다.
