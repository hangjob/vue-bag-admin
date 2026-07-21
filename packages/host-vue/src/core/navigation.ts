export interface HostNavigationConfig {
  homePath: string
  loginPath: string
  profilePath: string
  forbiddenPath: string
  notFoundPath: string
  redirectName: string
}

export const defaultHostNavigation: HostNavigationConfig = {
  homePath: '/dashboard',
  loginPath: '/login',
  profilePath: '/profile',
  forbiddenPath: '/403',
  notFoundPath: '/404',
  redirectName: 'Redirect'
}

let hostNavigationConfig: HostNavigationConfig = { ...defaultHostNavigation }

export const setupHostNavigation = (config?: Partial<HostNavigationConfig>) => {
  hostNavigationConfig = {
    ...defaultHostNavigation,
    ...config
  }
  return hostNavigationConfig
}

export const getHostNavigationConfig = () => hostNavigationConfig
