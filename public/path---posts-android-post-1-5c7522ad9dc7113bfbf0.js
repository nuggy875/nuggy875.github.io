webpackJsonp([0x673b2494ee7a],{420:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Blog by Gilbert Paeng",subtitle:"Computer Vision / Machine Learning / Android(Java) / ReactJS / NodeJS",copyright:"© All rights reserved.",author:{name:"Gilbert Paeng",instagram:"paeng___"},disqusShortname:"",url:"https://lumen.netlify.com"}},markdownRemark:{id:"/Users/paeng/dev/web/nuggy875.github.io/src/pages/articles/2018-05-07---Fragment 에서 Toast 사용하기/index.md absPath of file >>> MarkdownRemark",html:'<p>평범한(?) Activity에서 Toast는 다음과 같이 사용된다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java">Toast.makeText(현재Activity.this, &quot;Toast에 띄울 내용&quot;, Toast.LENGTH_SHORT).show();</code></pre>\n      </div>\n<p>하지만 Fragment에서 이를 사용하니, <strong>현재Activity.this</strong> 부분에서 빨간줄이 뜬 것을 확인하였다.\n이렇게 평범한 Activity가 아닌 곳에서 context를 받아오려 하니, 문제가 생긴다.</p>\n<p>이는 따로 Activity 정보를 받아옴으로 해결할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java">Activity root = getActivity();\nToast.makeText(root, &quot;Toast에 띄울 내용&quot;, Toast.LENGTH_SHORT).show();</code></pre>\n      </div>\n<p>또는 Context를 받아오는 것으로도 해결할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java">Activity root = getContext();\nToast.makeText(root, &quot;Toast에 띄울 내용&quot;, Toast.LENGTH_SHORT).show();</code></pre>\n      </div>\n<p>그러면 여기서 의문점이 생긴다…  </p>\n<h3>Context랑 Activity랑 뭐가 다른거야?</h3>\n<p>쉽게 말해, <strong>Context ⊃ Activity</strong>\n즉 Context가 Activity를 포함한 개념이고 Activity역시 Context이다.</p>\n<p>Context는 안드로이드 시스템과의 연결통로와 동시에 어플리케이션 Resource에 접근할 수 있는 하나의 통로 라고 볼 수 있는데, Activity는 이런 Context를 상속받아 구현하는 컴포넌트중 하나이다.</p>\n<h4>사용 예제</h4>\n<ul>\n<li>\n<p><strong>RecyclerViewAdapter에서 Context 받아오기</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java">public class RecyclerViewAdapter extends RecyclerView.Adapter&lt;RecyclerViewAdapter.ViewHolder&gt;{\nprivate ArrayList&lt;MyData&gt; mDataSet = new ArrayList&lt;&gt;();\n\n@Override\npublic void onBindViewHolder(@NonNull ViewHolder holder, final int position) {\n    holder.itemParent.setOnClickListener(new View.OnClickListener() {\n        @Override\n        public void onClick(View view) {\n            Toast.makeText(view.getContext(), String.valueOf(position), Toast.LENGTH_SHORT).show();\n        }\n    });\n}\n//뒷부분 생략</code></pre>\n      </div>\n</li>\n</ul>\n<ul>\n<li>\n<p><strong>RecyclerViewAdapter에서 Context 받아오기</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java">public class FragmentList extends Fragment {\npublic static FragmentList newInstance() {\n    return new FragmentList();\n}\n@Nullable\n@Override\npublic View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {\n    View mView = inflater.inflate(R.layout.fragment_list, container, false);\n    showListView.setOnItemClickListener(new ListView.OnItemClickListener(){\n\n        @Override\n        public void onItemClick(AdapterView&lt;?&gt; parent, View view, int position, long id) {\n            Intent intent = new Intent(getActivity(), NextActivity.class);\n            startActivity(intent);\n        }\n    });\n}\n}\n\n//getActivity() 부분을 보여주기 위해 따온 코드이므로 오류가 있을수 있다...</code></pre>\n      </div>\n</li>\n</ul>\n<p><del>사실 개발할 때는 귀찮아서 개념 생각 안하고 그냥 되는거 해보고 쓴다…</del></p>\n<p>출처\n<a href="https://www.androidpub.com/1856256">https://www.androidpub.com/1856256</a>\n<a href="http://jungwoo5394.blogspot.com/2015/04/fragment-toast.html">http://jungwoo5394.blogspot.com/2015/04/fragment-toast.html</a></p>',fields:{tagSlugs:["/tags/android/","/tags/fragment/"]},frontmatter:{title:"Activity와 Context의 차이",tags:["Android","Fragment"],date:"2018-07-05T22:30:00.169Z",description:"Fragment에서 getActivity(), getContext()의 사용"}}},pathContext:{slug:"/posts/android/post-1"}}}});
//# sourceMappingURL=path---posts-android-post-1-5c7522ad9dc7113bfbf0.js.map