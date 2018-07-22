---
title: "[안드로이드] Activity와 Context의 차이"
date: "2018-07-05T22:30:00.169Z"
layout: post
draft: false
path: "/posts/android/post-1"
category: "Android"
tags:
  - "Android"
  - "Fragment"
  - "Context"
  - "안드로이드"
description: "Fragment, 등에서 getActivity(), getContext()의 사용"
---

평범한(?) Activity에서 Toast는 다음과 같이 사용된다.

```Java
Toast.makeText(현재Activity.this, "Toast에 띄울 내용", Toast.LENGTH_SHORT).show();
```

하지만 Fragment에서 이를 사용하니, **현재Activity.this** 부분에서 빨간줄이 뜬 것을 확인하였다.
이렇게 평범한 Activity가 아닌 곳에서 context를 받아오려 하니, 문제가 생긴다.

이는 따로 Activity 정보를 받아옴으로 해결할 수 있다.

```Java
Activity root = getActivity();
Toast.makeText(root, "Toast에 띄울 내용", Toast.LENGTH_SHORT).show();
```

또는 Context를 받아오는 것으로도 해결할 수 있다.

```Java
Activity root = getContext();
Toast.makeText(root, "Toast에 띄울 내용", Toast.LENGTH_SHORT).show();
```

그러면 여기서 의문점이 생긴다...  


## Context랑 Activity랑 뭐가 다른거야?



쉽게 말해, **Context ⊃ Activity**
즉 Context가 Activity를 포함한 개념이고 Activity역시 Context이다.

Context는 안드로이드 시스템과의 연결통로와 동시에 어플리케이션 Resource에 접근할 수 있는 하나의 통로 라고 볼 수 있는데, Activity는 이런 Context를 상속받아 구현하는 컴포넌트중 하나이다.

### 사용 예제
- **RecyclerViewAdapter에서 Context 받아오기**
  ```Java
public class RecyclerViewAdapter extends RecyclerView.Adapter<RecyclerViewAdapter.ViewHolder>{
    private ArrayList<MyData> mDataSet = new ArrayList<>();

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, final int position) {
        holder.itemParent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(view.getContext(), String.valueOf(position), Toast.LENGTH_SHORT).show();
            }
        });
    }
    // 뒷부분 생략
    // 윗 부분은 무시하고 RecyclerView 에서 Toast를 쓰기위해 view.getContext()를 썼다는 것에 집중하자
```




- **RecyclerViewAdapter에서 Context 받아오기**

```Java
public class FragmentList extends Fragment {
    public static FragmentList newInstance() {
        return new FragmentList();
    }
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        View mView = inflater.inflate(R.layout.fragment_list, container, false);
        showListView.setOnItemClickListener(new ListView.OnItemClickListener(){

            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent intent = new Intent(getActivity(), NextActivity.class);
                startActivity(intent);
            }
        });
    }
}

```

getActivity() 부분을 보여주기 위해 따온 코드이므로 오류가 있을수 있다...
윗 부분은 무시하고 Fragment에서 intent를 쓸 때 getActivity()함수를 쓴 것에 집중하자.



~~사실 개발할 때는 귀찮아서 개념 생각 안하고 그냥 되는거 해보고 쓴다...~~

출처  
https://www.androidpub.com/1856256
http://jungwoo5394.blogspot.com/2015/04/fragment-toast.html
