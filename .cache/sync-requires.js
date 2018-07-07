// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/paeng/dev/web/nuggy875.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-page-template-jsx": preferDefault(require("/Users/paeng/dev/web/nuggy875.github.io/src/templates/page-template.jsx")),
  "component---src-templates-post-template-jsx": preferDefault(require("/Users/paeng/dev/web/nuggy875.github.io/src/templates/post-template.jsx")),
  "component---src-templates-tag-template-jsx": preferDefault(require("/Users/paeng/dev/web/nuggy875.github.io/src/templates/tag-template.jsx")),
  "component---src-templates-category-template-jsx": preferDefault(require("/Users/paeng/dev/web/nuggy875.github.io/src/templates/category-template.jsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/paeng/dev/web/nuggy875.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/Users/paeng/dev/web/nuggy875.github.io/src/pages/404.jsx")),
  "component---src-pages-categories-jsx": preferDefault(require("/Users/paeng/dev/web/nuggy875.github.io/src/pages/categories.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/paeng/dev/web/nuggy875.github.io/src/pages/index.jsx")),
  "component---src-pages-tags-jsx": preferDefault(require("/Users/paeng/dev/web/nuggy875.github.io/src/pages/tags.jsx"))
}

exports.json = {
  "layout-index.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/layout-index.json"),
  "contact.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/contact.json"),
  "posts-start-blog.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/posts-start-blog.json"),
  "tags-이것저것.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-이것저것.json"),
  "categories-이것저것.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/categories-이것저것.json"),
  "posts-android-post-1.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/posts-android-post-1.json"),
  "tags-android.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-android.json"),
  "tags-fragment.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-fragment.json"),
  "tags-context.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-context.json"),
  "tags-안드로이드.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-안드로이드.json"),
  "categories-android.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/categories-android.json"),
  "posts-android-post-2.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/posts-android-post-2.json"),
  "tags-simple-date-format.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-simple-date-format.json"),
  "posts-markdown-post-1.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/posts-markdown-post-1.json"),
  "tags-markdown.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-markdown.json"),
  "tags-error.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-error.json"),
  "categories-markdown.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/categories-markdown.json"),
  "about.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/about.json"),
  "posts-android-post-3.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/posts-android-post-3.json"),
  "tags-edit-text.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-edit-text.json"),
  "dev-404-page.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/404.json"),
  "categories.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/categories.json"),
  "index.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/index.json"),
  "tags.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags.json"),
  "404-html.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/404-html.json")
}