import type { Component } from 'vue'
import DefaultLayout from './DefaultLayout.vue'
import BlankLayout from './BlankLayout.vue'

const layoutRegistry: Record<string, Component> = {}

layoutRegistry.default = DefaultLayout
layoutRegistry.blank = BlankLayout

export function registerLayout(name: string, component: Component) {
  layoutRegistry[name] = component
}

export function getLayout(name: string) {
  return layoutRegistry[name]
}

export function getDefaultLayout() {
  return layoutRegistry.default
}
