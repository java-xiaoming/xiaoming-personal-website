<script setup>
import { siteContent } from '../data/content.js'
import { useSeo } from '../composables/useSeo.js'
import HeroSection from '../components/sections/HeroSection.vue'
import IntentBar from '../components/IntentBar.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

// 首页结构化数据：Person + ProfilePage
useSeo({
  title: '陈明智 | AI 产品经理（2027届）',
  description:
    '陈明智，AI 产品经理，河南工业大学计算机科学与技术在读。熵变智元 AI PM 实习，主导智小天 AIGC 视频混剪 0-1；并作为负责人落地零食电商智能客服 Agent。',
  url: siteContent.siteUrl + '/',
  type: 'website',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: siteContent.name,
      alternateName: siteContent.nameEn,
      jobTitle: siteContent.role,
      email: 'mailto:' + siteContent.contact.email,
      telephone: siteContent.contact.phone,
      url: siteContent.siteUrl,
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: siteContent.about.education[0].school,
      },
    },
  },
})
</script>

<template>
  <div>
    <HeroSection />
    <IntentBar />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>
