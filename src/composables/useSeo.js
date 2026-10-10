import { onBeforeUnmount } from 'vue'

// 内部标记，区分由本工具创建 / 管理的标签
const SEO_ATTR = 'data-seo-managed'

function upsertMeta(attr, key) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    el.setAttribute(SEO_ATTR, '')
    document.head.appendChild(el)
  }
  return el
}

function upsertLink(rel) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    el.setAttribute(SEO_ATTR, '')
    document.head.appendChild(el)
  }
  return el
}

/**
 * 零依赖 SEO 组合式函数
 * @param {Object} options
 * @param {string} options.title        页面标题
 * @param {string} options.description  页面描述
 * @param {string} [options.url]        canonical 完整 URL
 * @param {string} [options.type]       OG 类型，默认 website
 * @param {Object} [options.jsonLd]     JSON-LD 结构化数据对象
 */
export function useSeo({ title, description, url, type = 'website', jsonLd } = {}) {
  if (title) document.title = title

  if (description) {
    upsertMeta('name', 'description').setAttribute('content', description)

    // Open Graph
    upsertMeta('property', 'og:title').setAttribute('content', title || '')
    upsertMeta('property', 'og:description').setAttribute('content', description)
    upsertMeta('property', 'og:type').setAttribute('content', type)
    upsertMeta('property', 'og:locale').setAttribute('content', 'zh_CN')

    // Twitter Card
    upsertMeta('name', 'twitter:card').setAttribute('content', 'summary_large_image')
    upsertMeta('name', 'twitter:title').setAttribute('content', title || '')
    upsertMeta('name', 'twitter:description').setAttribute('content', description)
  }

  if (url) {
    upsertLink('canonical').setAttribute('href', url)
    upsertMeta('property', 'og:url').setAttribute('content', url)
  }

  // JSON-LD：每页只保留一份，卸载时清理，防止 SPA 串数据
  let scriptEl = null
  if (jsonLd) {
    document.head
      .querySelectorAll(`script[${SEO_ATTR}="jsonld"]`)
      .forEach((el) => el.remove())
    scriptEl = document.createElement('script')
    scriptEl.type = 'application/ld+json'
    scriptEl.setAttribute(SEO_ATTR, 'jsonld')
    scriptEl.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(scriptEl)
  }

  onBeforeUnmount(() => {
    scriptEl?.remove()
  })
}
