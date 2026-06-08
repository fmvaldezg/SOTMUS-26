/// <reference types="vite/client" />
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  app.config.globalProperties.$base = import.meta.env.BASE_URL

  // Slidev's path generator includes the full base prefix in navigation paths
  // (e.g. /SOTMUS-26/2), but Vue Router routes are defined without it (/:no).
  // Strip the base prefix before route matching so /SOTMUS-26/2 → /2.
  const base = import.meta.env.BASE_URL
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base

  if (prefix && router) {
    router.beforeEach((to, _from, next) => {
      if (to.path.startsWith(prefix + '/') || to.path === prefix) {
        next({
          path: to.path.slice(prefix.length) || '/',
          query: to.query,
          hash: to.hash,
          replace: true,
        })
      } else {
        next()
      }
    })
  }
})
