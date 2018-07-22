webpackJsonp([5916469481849],{438:function(a,e){a.exports={data:{site:{siteMetadata:{title:"Blog by J.Spin",subtitle:"ComputerVision / MachineLearning / Android(Java) / ReactJS / NodeJS",copyright:"© All rights reserved.",author:{name:"제이스핀 (J.Spin)",instagram:"paeng___"},disqusShortname:"",url:"https://lumen.netlify.com"}},markdownRemark:{id:"/Users/paeng/dev/web/nuggy875.github.io/src/pages/articles/2018-07-10---getDrawable error/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/error-a14267a342e53c048b459de7691006d0-aece5.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 23.670668953687823%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA0klEQVQY01WPW26EMBRDWVQ1w7QMCSTkRQjMo/tfinudEqn9sI51Adt0NiTMLsJZi1Ep3JXGbBdY72GsyCUsPmKcDIZxwjBoDHeN/vaJS3/DRXilF31ce3RrORC3HVEYcgELqCWulYaSwGlxUhww+1Bpz7vxSZ55aOvwpSZ02+OF/flGEW7HE3l/IElBKnsly9otSiEH0Lch9PZPaXe8vkEVCWUwfZZgrg3rBt+UcqUTcj3ZFPLvO8os6NjampuP54J0qi4R8sYAfsjfG/T8T7z9AL83t79rVxDqAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="error_image"\n        title=""\n        src="/static/error-a14267a342e53c048b459de7691006d0-c83f1.png"\n        srcset="/static/error-a14267a342e53c048b459de7691006d0-569e3.png 240w,\n/static/error-a14267a342e53c048b459de7691006d0-93400.png 480w,\n/static/error-a14267a342e53c048b459de7691006d0-c83f1.png 960w,\n/static/error-a14267a342e53c048b459de7691006d0-23e13.png 1440w,\n/static/error-a14267a342e53c048b459de7691006d0-10d8f.png 1920w,\n/static/error-a14267a342e53c048b459de7691006d0-aece5.png 2332w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><em>Call requires API level 21 (current min is 14): android.content.Context#getDrawable less… (⌘F1)\nThis check scans through all the Android API calls in the application and warns about any calls that are not available on all versions targeted by this application (according to its minimum SDK attribute in the manifest).  If you really want to use this API and don’t need to support older devices just set the minSdkVersion in your build.gradle or AndroidManifest.xml files. … 후략</em></p>\n<h3>다음과 같은 에러를 본 적이 있는가?</h3>\n<p>분명 Context도 맞게 쓰고 모두 옳게 작성했지만 또 또 찡찡댄다..<br>\n에러를 해석해보면 API Level 21 이상의 Device에서만 이 함수가 동작한단다.<br>\n(21이면 롤리팝 버전이다…;)  </p>\n<p>고것도 안되는 똥폰 갖다 버리라고 하고 싶지만 우리는 모두를 위한 개발자이므로(?)<br>\n이를 해결해보자.</p>\n<h3>다행히도 쉽게 해결하는 방법이 있다.</h3>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java">Drawable mDrawable = mContext.getDrawable(R.drawable.ic_add_black_24dp);</code></pre>\n      </div>\n<p>(mContext는 <code class="language-text">Context</code>를 변수로 받아온 것이다.)<br>\n위와 같이 썼을 때 문제가 되는 것이었는데, 이를 아래와 같이 고쳐보자</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java">Drawable mDrawable = ContextCompat.getDrawable(mContext, R.drawable.ic_add_black_24dp);</code></pre>\n      </div>\n<p><code class="language-text">ContextCompat</code>이라는 친구를 사용하게되면 빨간줄이 없어지고 편안해진다.</p>',fields:{tagSlugs:["/tags/android/","/tags/error/","/tags/get-drawable/","/tags/drawable/","/tags/api-level/"]},frontmatter:{title:"[안드로이드] getDrawable 오류 해결 방법",tags:["Android","Error","getDrawable","drawable","API Level"],date:"2018-07-10T06:33:10.169Z",description:"getDrawable() 함수 사용 시 Call Requires API Level 21 어쩌구 해결방법"}}},pathContext:{slug:"/posts/android/post-5"}}}});
//# sourceMappingURL=path---posts-android-post-5-73d2eb9329faee661e71.js.map