---
title: "[안드로이드] 안드로이드 테두리 만들기"
date: "2018-07-22T05:24:32.169Z"
layout: post
draft: false
path: "/posts/android/post-7"
category: "android"
tags:
  - "Android"
  - "XML"
  - "Design"
  - "안드로이드"

description: "Layout이나 View들에 테두리를 만들고 싶다면?"
---

View에 테두리를 적용하는건 생각보다 어렵지 않다.

drawable 폴더 내에 xml파일을 따로 하나 만들어 주자

```xml
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <solid
        android:color="#00000000"/>

    <corners android:radius="10dp"/>

    <stroke android:width="2dp"
        android:color="#1c626262" />


    <padding
        android:left="10dp"
        android:top="10dp"
        android:right="10dp"
        android:bottom="10dp" />
</shape>

```

위 코드는 옅은 회색의 약간 둥근 테두리를 가진다.  
drawable 폴더에 들어있는 위 xml파일 자체를 background로 적용시키면 된다.  
위 파일 이름을 ridge_gray_round.xml 이라고 해보자.
  
어떤 LinearLayout 에 대해서 위 테두리를 적용시키고 싶다면  

```xml
<LinearLayout
        android:layout_width="200dp"
        android:layout_height="120dp"
        android:background="@drawable/ridge_gray_round"
        android:orientation="vertical">

</LinearLayout>

```

  

위와 같이 해주면 됨.