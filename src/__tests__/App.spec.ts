import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'
import i18n from '../i18n'
import { PROFILE } from '../content/profile'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: { template: '<div>Home</div>' } }],
})

describe('App', () => {
  it('mounts with brand name in header', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createPinia(), router, i18n],
        stubs: { SiteAtmosphere: true },
      },
    })

    await router.isReady()
    expect(wrapper.text()).toContain(PROFILE.name)
  })
})
