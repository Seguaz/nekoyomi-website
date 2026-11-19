<script setup lang="ts">
import { AUTHOR_URL } from '../../config/constants'
</script>

<template>
  <p class="MadeBy">
    Made with
    <svg class="heart" viewBox="0 0 24 24" aria-label="love" role="img">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
    by
    <a :href="AUTHOR_URL" target="_blank" rel="noopener noreferrer">Seguaz</a>
  </p>
</template>

<style scoped>
.MadeBy {
  margin: 0;
  padding: 24px 24px 32px;
  text-align: center;
  font-size: 12px;
  line-height: 1.5;
  color: var(--vp-c-text-3);
}

.heart {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 2px;
  vertical-align: -1px;
  fill: var(--neko-c-accent);
}

.MadeBy a {
  color: var(--vp-c-text-2);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.25s;
}

.MadeBy a:hover {
  color: var(--vp-c-brand-1);
}
</style>
