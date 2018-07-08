---
title: "[안드로이드] ScrollView Library 소개"
date: "2018-07-09T03:30:32.169Z"
layout: post
draft: false
path: "/posts/android/post-4"
category: "Android"
tags:
  - "Android"
  - "ScrollView"
  - "Responsive"
  - "Library"
  - "Design"

description: "스크롤에 따라 생겼다 사라졌다 하는 ConcealerNestedScrollView 를 소개한다."
---


이 Android Library는 스크롤 뷰를 스크롤 할때 위와 아랫 부분에 view를 보이고 숨기는 기능이 있는 Library이다.


![gif_image](https://user-images.githubusercontent.com/24822099/34994798-e5d54432-fae9-11e7-8246-a12e66b20f18.gif)


## Usage

### Gradle

``` gradle
implementation 'com.simmorsal.library:concealer_nested_scroll_view:2.0.0'
```

먼저 build.gradle (Module: app)에 위 라이브러리를 추가해주자.

### XML
XML은 아래 그림과 같이 구성 되어야 한다.

![concealernsv-layout-setup](https://user-images.githubusercontent.com/24822099/34965249-ea66cfca-fa67-11e7-9982-20bf76e61551.png)

`ConcealerNestedScrollView`를 맨 위에 써주고 header와 footer View들을 아래 작성해 주자.

__IMPORTANT:__ header view에 `margin_top`, 또는 footer view에 `margin_bottom`값을 주지 말자.
Java 코드에서 작성해야 한다.  
~~그래야 한다니까 그렇게 하자~~  


### JAVA

Java 코드는 매우 간단하다.

`ConcealerNestedScrollView`, `CardView`, `LinearLayout` reference를 추가하고 xml id와 연결시켜주자.


``` JAVA
    ConcealerNestedScrollView cnsv = findViewById(R.id.cnsv);
    CardView crdHeaderView;
    LinearLayout linFooterView;
```

``` JAVA
    concealerNSV = findViewById(R.id.concealerNSV);
    crdHeaderView = findViewById(R.id.crdHeaderView);
    linFooterView = findViewById(R.id.linFooterView);
```

그리고 위에서 설명했듯이 JAVA코드에 `onCreate`내부에 `headerView`와 `footerView`의 margin속성을 추가해주기 위해 다음과 같이 입력하자.


``` JAVA
    headerView.post(new Runnable() {
        @Override
        public void run() {
            // parameters are (View headerView, int marginTop)
            cnsv.setHeaderView(headerView, 15);
        }
    });
    footerView.post(new Runnable() {
        @Override
        public void run() {
            // parameters are (View footerView, int marginBottom)
            cnsv.setFooterView(footerView, 0);
        }
    });
```

예시 코드는 아래 출처에서 확인할 수 있다.



출처 : https://github.com/SIMMORSAL/ConcealerNestedScrollView-ConcealerRecyclerView
