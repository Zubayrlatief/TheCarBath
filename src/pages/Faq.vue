<template>
  <div ref="root" class="page-detail">
    <section class="svc-head svc-head--text chapter-ink">
      <div class="wrap svc-head__grid">
        <div>
        <nav class="crumbs" aria-label="Breadcrumb"><RouterLink to="/">Home</RouterLink> <span aria-hidden="true">/</span> <span aria-current="page">FAQ</span></nav>
        <h1 class="quiet svc-head__title" data-snap>Car wash and detailing questions, answered.</h1>
        <p class="lead svc-head__answer" data-rise>Everything people ask us about prices, where we work, how to book and how we look after your car.</p>
      </div>
        <figure class="svc-head__pic"><img src="/img/white-side.webp" alt="White BMW convertible with a polished bonnet" width="1000" height="750" fetchpriority="high" /></figure>
      </div>
    </section>

    <section v-for="(g, i) in faqGroups" :key="g.title" class="svc-faq" :class="i % 2 ? 'chapter-white' : 'chapter-paper'">
      <div class="wrap svc-faq__grid">
        <h2 class="quiet" data-snap>{{ g.title }}</h2>
        <FaqList :items="g.items" />
      </div>
    </section>

    <ClosingCall title="Still have a question?" line="We’re quick on WhatsApp." />
  </div>
</template>

<script setup>
import ClosingCall from '../components/ClosingCall.vue'
import FaqList from '../components/FaqList.vue'
import { useChoreography } from '../composables/useChoreography'
import { useSeo } from '../composables/useSeo'
import { faqGroups } from '../data/faq'
import { faqSchema } from '../data/seo'

const root = useChoreography()
useSeo('/faq', { schema: [faqSchema(faqGroups.flatMap((g) => g.items))] })
</script>
