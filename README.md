# 小明的个人网站

一个使用 Vue 3 + Vite + Tailwind CSS 4 构建的活泼卡通风格个人网站。

## ✨ 特性

- 🎨 活泼卡通视觉风格（薄荷绿 + 天空蓝配色）
- 📱 完全响应式，适配移动端 / 平板 / 桌面
- 🎭 滚动入场动画、浮动装饰、按钮按压交互
- ⚡ 极速开发体验（Vite 6 + Tailwind CSS v4）
- 📝 所有文案集中管理，一键替换
- 🎯 零路由、零状态管理，轻量简洁

## 🛠 技术栈

- [Vue 3](https://vuejs.org/) — Composition API + `<script setup>`
- [Vite 6](https://vitejs.dev/) — 下一代构建工具
- [Tailwind CSS 4](https://tailwindcss.com/) — CSS-first 原子化样式

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建产物
npm run preview
```

## 📂 项目结构

```
├── public/
│   └── favicon.svg          # 站点图标
├── src/
│   ├── components/
│   │   ├── sections/        # 页面区块（Hero/About/Contact）
│   │   ├── AppNavbar.vue    # 顶部导航
│   │   ├── AppFooter.vue    # 页脚
│   │   ├── CartoonButton.vue# 卡通按钮
│   │   ├── Decorations.vue  # 装饰元素
│   │   ├── SectionWrapper.vue
│   │   └── SocialLinks.vue  # 社交链接
│   ├── composables/
│   │   └── useScrollAnimation.js
│   ├── data/
│   │   └── content.js       # ← 所有文案在这里修改
│   ├── assets/images/       # 图片资源
│   ├── App.vue
│   ├── main.js
│   └── style.css            # 全局样式 + 主题
├── index.html
├── vite.config.js
└── package.json
```

## ✏️ 自定义内容

所有网站文案都集中在 `src/data/content.js` 中。修改这个文件即可替换：

- 姓名、头衔
- Hero 区的问候语、标语、描述
- 关于我的介绍段落、技能列表、兴趣标签、趣味数据
- 联系方式（邮箱、社交链接）
- 导航和页脚文字

### 替换头像

当前头像为内联 SVG 卡通形象。如需替换为真实照片：

1. 将图片放入 `src/assets/images/` 目录
2. 编辑 `src/components/sections/HeroSection.vue`
3. 将 SVG 替换为 `<img>` 标签

## 📱 区块说明

| 区块 | 文件 | 说明 |
|------|------|------|
| 首页 Hero | `HeroSection.vue` | 自我介绍、CTA 按钮、卡通头像 |
| 关于我 | `AboutSection.vue` | 个人简介、技能条、兴趣、数据统计 |
| 联系方式 | `ContactSection.vue` | 邮件按钮、社交链接、联系表单 |

## 📄 许可

MIT
