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
  "about.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/about.json"),
  "contact.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/contact.json"),
  "posts-perfecting-the-art-of-perfection.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/posts-perfecting-the-art-of-perfection.json"),
  "tags-handwriting.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-handwriting.json"),
  "tags-learning-to-write.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-learning-to-write.json"),
  "categories-design-inspiration.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/categories-design-inspiration.json"),
  "posts-the-origins-of-social-stationery-lettering.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/posts-the-origins-of-social-stationery-lettering.json"),
  "tags-typefaces.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-typefaces.json"),
  "tags-lettering.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-lettering.json"),
  "tags-history.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-history.json"),
  "categories-design-culture.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/categories-design-culture.json"),
  "posts-a-brief-history-of-typography.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/posts-a-brief-history-of-typography.json"),
  "tags-linotype.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-linotype.json"),
  "tags-monotype.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-monotype.json"),
  "tags-history-of-typography.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-history-of-typography.json"),
  "tags-helvetica.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-helvetica.json"),
  "posts-the-birth-of-movable-type.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/posts-the-birth-of-movable-type.json"),
  "tags-open-source.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-open-source.json"),
  "tags-gatsby.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-gatsby.json"),
  "tags-typography.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-typography.json"),
  "categories-typography.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/categories-typography.json"),
  "posts-humane-typography-in-the-digital-age.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/posts-humane-typography-in-the-digital-age.json"),
  "tags-design.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-design.json"),
  "tags-web-development.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-web-development.json"),
  "posts-start-blog.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/posts-start-blog.json"),
  "tags-etc.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-etc.json"),
  "tags-react.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags-react.json"),
  "categories-etc.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/categories-etc.json"),
  "dev-404-page.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/404.json"),
  "categories.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/categories.json"),
  "index.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/index.json"),
  "tags.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/tags.json"),
  "404-html.json": require("/Users/paeng/dev/web/nuggy875.github.io/.cache/json/404-html.json")
}