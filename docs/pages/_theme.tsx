import React from 'react'
import { createTheme, defaultSideNavs } from 'vite-pages-theme-doc'

import Component404 from './404'

export default createTheme({
  logo: <div style={{ fontSize: '20px' }}>📘 Vite Pages</div>,
  topNavs: [
    {
      label: 'Index',
      path: '/',
      activeIfMatch: {
        // match all first-level paths
        path: '/:foo',
        end: true,
      },
    },
    {
      label: 'Components',
      path: '/examples/components/my-button',
      activeIfMatch: '/examples/components',
    },
    {
      label: 'Controllers',
      path: '/examples/controlllers/ws-controller',
      activeIfMatch: '/examples/controllers',
    },
    { label: 'Vite', href: 'https://github.com/vitejs/vite' },
    {
      label: 'Vite Pages',
      href: 'https://github.com/vitejs/vite-plugin-react-pages',
    },
  ],
  sideNavs: (ctx) => {
    // dont render side menu in home page
    if (ctx.loadState.routePath === '/') return null
    return defaultSideNavs(ctx, {
      groupConfig: {
        components: {
          general: {
            label: 'General',
            order: 1,
          },
        },
        controller: {
          general: {
            label: 'General',
            order: 1,
          },
        },
      },
    })
  },
  Component404,
})
