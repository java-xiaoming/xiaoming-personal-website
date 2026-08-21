// ============================================
// 网站内容集中管理
// 修改此文件即可替换网站上的所有文案
// ============================================

export const siteContent = {
  name: '小明',
  title: '前端开发者 & 创意爱好者',

  // ===== Hero 首屏 =====
  hero: {
    greeting: '你好，我是 👋',
    name: '小明',
    tagline: '一个热爱创造有趣事物的开发者',
    description:
      '我喜欢用代码把奇思妙想变成现实，专注于打造既好看又好用的 Web 体验。不写代码的时候，你可以在咖啡馆、书店或跑道上找到我。',
    ctaPrimary: '了解我',
    ctaSecondary: '联系我',
  },

  // ===== 关于我 =====
  about: {
    title: '关于我',
    paragraphs: [
      '嗨！我是小明，一名充满热情的前端开发者。我相信好的设计和好的代码同样重要——它们共同创造出让人愉悦的数字体验。',
      '我有多年的 Web 开发经验，喜欢探索新技术，也喜欢打磨界面上的每一个像素。对我来说，编程不仅是一份工作，更是一种表达创造力的方式。',
    ],
    skills: [
      { name: 'Vue.js', level: 92, color: 'mint' },
      { name: 'JavaScript', level: 88, color: 'sky' },
      { name: 'CSS / Tailwind', level: 90, color: 'coral' },
      { name: 'React', level: 75, color: 'sunny' },
      { name: 'Node.js', level: 70, color: 'mint' },
      { name: 'UI / UX 设计', level: 78, color: 'sky' },
    ],
    interests: [
      { emoji: '🎨', label: '数字插画' },
      { emoji: '🎮', label: '独立游戏' },
      { emoji: '📚', label: '科幻阅读' },
      { emoji: '🏃', label: '晨跑打卡' },
      { emoji: '☕', label: '手冲咖啡' },
      { emoji: '📷', label: '街头摄影' },
    ],
    stats: [
      { value: 50, suffix: '+', label: '完成项目' },
      { value: 1000, suffix: '+', label: '杯咖啡' },
      { value: 5, suffix: '年', label: '开发经验' },
      { value: 99, suffix: '%', label: '热情值' },
    ],
  },

  // ===== 联系方式 =====
  contact: {
    title: '联系我',
    subtitle: '有什么想聊的？合作、交流、或者只是打个招呼，随时找我！',
    email: 'hello@xiaoming.dev',
    ctaButton: '给我发邮件',
    form: {
      nameLabel: '你的名字',
      namePlaceholder: '请输入你的名字',
      emailLabel: '邮箱地址',
      emailPlaceholder: 'your@email.com',
      messageLabel: '想说的话',
      messagePlaceholder: '写下你想说的话...',
      submit: '发送消息',
      success: '消息已发送！我会尽快回复你 🎉',
    },
    socials: [
      {
        name: 'GitHub',
        url: 'https://github.com',
        icon: 'github',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com',
        icon: 'twitter',
      },
      {
        name: 'Email',
        url: 'mailto:hello@xiaoming.dev',
        icon: 'mail',
      },
    ],
  },

  // ===== 导航 =====
  nav: {
    links: [
      { label: '首页', href: '#hero' },
      { label: '关于', href: '#about' },
      { label: '联系', href: '#contact' },
    ],
  },

  // ===== 页脚 =====
  footer: {
    copyright: '© 2026 小明. 保留所有权利.',
    madeWith: '用 ❤️ 和 Vue 制作',
  },
}
