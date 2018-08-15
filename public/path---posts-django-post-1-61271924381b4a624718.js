webpackJsonp([0x6ac34a94d70b],{443:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Blog by J.Spin",subtitle:"ComputerVision / MachineLearning / Android(Java) / ReactJS / NodeJS",copyright:"© All rights reserved.",author:{name:"제이스핀 (J.Spin)",instagram:"paeng___"},disqusShortname:"",url:"https://lumen.netlify.com"}},markdownRemark:{id:"/Users/paeng/dev/web/nuggy875.github.io/src/pages/articles/2018-07-21---Django REST Framework 시작하기/index.md absPath of file >>> MarkdownRemark",html:'<p>Django에는 REST API를 만들 수 있는 <em>Django REST framework</em> 가 존재한다.<br>\n<a href="http://www.django-rest-framework.org/tutorial/quickstart/">Django REST framework Quickstart</a>에서는 Django tutorial과 다른 디렉토리 구조를 사용하고 django에 기본적으로 내장 되어있는 User, Group 에 대한 예제를 다룬다.<br>\n이 포스트에서는 Django tutorial에서 사용하는 디렉토리 구조를 사용하고 새로운 앱과 모델을 생성하여 REST API를 생성하는 방법에 대해 작성하였다.  </p>\n<h2>프로젝트 설정</h2>\n<p>프로젝트를 실행할 Root 디렉토리를 생성하자. 이름은 맘대로~  </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ mkdir django-rest-tutorial  \n$ cd django-rest-tutorial</code></pre>\n      </div>\n<p><em>django</em> 와 <em>djangorestframework</em> 를 pip로 설치한다.  </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ pip install django  \n$ pip install djangorestframework</code></pre>\n      </div>\n<p>프로젝트와 앱을 생성한다.\n프로젝트 이름은 <em>tutorial</em> , 앱이름은 <em>myapp</em> 이라고 하겠다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ django-admin.py startproject tutorial\n$ cd tutorial\n$ python manage.py startapp myapp</code></pre>\n      </div>\n<h2>Settings</h2>\n<p><em>Django REST Framework</em> 를 사용하기 위해서는<br>\n<em>tutorial/settings.py</em> 에 아래와 같이 추가해주자.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">#...생략...</span>\n    <span class="token string">\'rest_framework\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'myapp\'</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>Models</h2>\n<p><em>first_name</em> 과 <em>last_name</em> 필드를 가진 <em>Person</em> 이라는 model을 정의해보았다.</p>\n<p><em>myapp/models.py</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> Models\n\n<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>\n      first_name <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">)</span>\n      last_name <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2>Serializers</h2>\n<p>Serializer를 사용한다.\n<em>myapp/serializers.py</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> myapp<span class="token punctuation">.</span>models <span class="token keyword">import</span> Person\n<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers\n\n<span class="token keyword">class</span> <span class="token class-name">PersonSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>HyperlinkedModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>\n        model <span class="token operator">=</span> Person\n        fields <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">\'first_name\'</span><span class="token punctuation">,</span> <span class="token string">\'last_name\'</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2>Views</h2>\n<p>View들을 그룹화하여 간결하게 사용할 수 있다.\n<em>myapp/views.py</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> viewsets\n<span class="token keyword">from</span> myapp<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> PersonSerializer\n<span class="token keyword">from</span> myapp<span class="token punctuation">.</span>models <span class="token keyword">import</span> Person\n\n\n<span class="token keyword">class</span> <span class="token class-name">PersonViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    queryset <span class="token operator">=</span> Person<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    serializer_class <span class="token operator">=</span> PersonSerializer</code></pre>\n      </div>\n<h2>URLs</h2>\n<p>views에서 작성한 viewset을 Router에 연결하면 url을 자동으로 편하게 연결해준다.</p>\n<p><em>tutorial/urls.py</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> django<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>urls <span class="token keyword">import</span> url<span class="token punctuation">,</span> include\n<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> routers\n<span class="token keyword">from</span> myapp <span class="token keyword">import</span> views\n\n\nrouter <span class="token operator">=</span> routers<span class="token punctuation">.</span>DefaultRouter<span class="token punctuation">(</span><span class="token punctuation">)</span>\nrouter<span class="token punctuation">.</span>register<span class="token punctuation">(</span>r<span class="token string">\'persons\'</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>PersonViewSet<span class="token punctuation">)</span>\n\nurlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>\n    url<span class="token punctuation">(</span>r<span class="token string">\'^\'</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span>router<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    url<span class="token punctuation">(</span>r<span class="token string">\'^api-auth/\'</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span><span class="token string">\'rest_framework.urls\'</span><span class="token punctuation">,</span> namespace<span class="token operator">=</span><span class="token string">\'rest_framework\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">]</span></code></pre>\n      </div>\n<h2>드디어 실행…</h2>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">python manage.py makemigrations\npython manage.py migrate\npython manage.py runserver</code></pre>\n      </div>\n<p>이 세 줄을 실행 후 <em><a href="http://localhost:8080">http://localhost:8080</a></em> 에 접속하면 확인할 수 있다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/run-35d2baf74ebcf5cf8b7b8349eaf36bc9-6bb82.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABbElEQVQ4y82QW0/CQBCF+6dBuUQIlxpNMPwWHwRaoKARIdDW24MPIgSJgUBbGmkp9HKcbgz6pJjw4Gy+3ZPJ7JnZ5QYvfQyf+5hNJhgNBlC7XdzKMtSeDEVWmFZ6PSiUv1MUPKgq7r/Ra3XQbrXRuZRwfVUHl45EwCeTOEmlcEock84nEsjG40gnjsCTTh/EkI5GWU0hm0Uhk6EzgzOimMuhyPPIxw6Ri8fANZpNCNUqxFoNNUmCSFpgiBBFEQIR5kIqpCuCwCgT5xdlnJcqKAlVSI0G6gQHCs/z4DgO/ho3fRPSk47HN3ub41zXxXyuQdN0mAsTum7AsmxqsP6R1WqNpbVi2KTDoUIvLggCjF7HGI6nmBpLLG0qdjawbedXQtMVnZuNiyBc5MUFNKZpmDBmBt51E8v5ApZmwrYc1nkX4/V6w567NfR9H77rMTzqxqAneJ6/E+H9rSHt2EcEnz7sD/fB14R7jv9v+AEhkstT8Vs7uAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="hi"\n        title=""\n        src="/static/run-35d2baf74ebcf5cf8b7b8349eaf36bc9-c83f1.png"\n        srcset="/static/run-35d2baf74ebcf5cf8b7b8349eaf36bc9-569e3.png 240w,\n/static/run-35d2baf74ebcf5cf8b7b8349eaf36bc9-93400.png 480w,\n/static/run-35d2baf74ebcf5cf8b7b8349eaf36bc9-c83f1.png 960w,\n/static/run-35d2baf74ebcf5cf8b7b8349eaf36bc9-23e13.png 1440w,\n/static/run-35d2baf74ebcf5cf8b7b8349eaf36bc9-10d8f.png 1920w,\n/static/run-35d2baf74ebcf5cf8b7b8349eaf36bc9-6bb82.png 2880w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>출처 : <a href="https://cjh5414.github.io/django-rest-framework/">https://cjh5414.github.io/django-rest-framework/</a></p>',fields:{tagSlugs:["/tags/django/","/tags/rest-api/","/tags/python/","/tags/장고/"]},frontmatter:{title:"[장고] Django REST API 시작하기",tags:["django","REST API","Python","장고"],date:"2018-07-22T05:24:32.169Z",description:"Django REST API 시작하여 간단한 웹 서비스 시작하기"}}},pathContext:{slug:"/posts/django/post-1"}}}});
//# sourceMappingURL=path---posts-django-post-1-61271924381b4a624718.js.map