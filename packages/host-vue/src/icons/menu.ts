import { h } from 'vue'

function IconBox(props: { children: any }) {
  return h(
    'span',
    { style: { display: 'inline-flex', width: '16px', height: '16px', alignItems: 'center' } },
    props.children
  )
}

export function renderMenuIcon(name?: string) {
  if (name === 'dashboard') {
    return () =>
      IconBox({
        children: h('svg', { viewBox: '0 0 24 24', fill: 'none', width: '16', height: '16' }, [
          h('path', {
            d: 'M3 13h8V3H3v10Zm10 8h8V11h-8v10ZM3 21h8v-6H3v6Zm10-10h8V3h-8v8Z',
            fill: 'currentColor'
          })
        ])
      })
  }

  if (name === 'settings') {
    return () =>
      IconBox({
        children: h('svg', { viewBox: '0 0 24 24', fill: 'none', width: '16', height: '16' }, [
          h('path', {
            d: 'M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.1 7.1 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 13.9 1h-3.8a.5.5 0 0 0-.49.42l-.36 2.54c-.58.23-1.12.54-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 7.48a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.83 14.52a.5.5 0 0 0-.12.64l1.92 3.32c.13.23.4.32.64.22l2.39-.96c.5.4 1.05.71 1.63.94l.36 2.54c.04.24.25.42.49.42h3.8c.24 0 .45-.18.49-.42l.36-2.54c.58-.23 1.12-.54 1.63-.94l2.39.96c.24.1.51.01.64-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z',
            fill: 'currentColor'
          })
        ])
      })
  }

  if (name === 'shop') {
    return () =>
      IconBox({
        children: h(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            width: '16',
            height: '16'
          },
          [
            h('path', { d: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' }),
            h('line', { x1: '3', y1: '6', x2: '21', y2: '6' }),
            h('path', { d: 'M16 10a4 4 0 0 1-8 0' })
          ]
        )
      })
  }

  if (name === 'order') {
    return () =>
      IconBox({
        children: h(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            width: '16',
            height: '16'
          },
          [
            h('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
            h('polyline', { points: '14 2 14 8 20 8' }),
            h('line', { x1: '16', y1: '13', x2: '8', y2: '13' }),
            h('line', { x1: '16', y1: '17', x2: '8', y2: '17' }),
            h('polyline', { points: '10 9 9 9 8 9' })
          ]
        )
      })
  }

  if (name === 'user') {
    return () =>
      IconBox({
        children: h(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            width: '16',
            height: '16'
          },
          [
            h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
            h('circle', { cx: '9', cy: '7', r: '4' }),
            h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
            h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
          ]
        )
      })
  }

  if (name === 'star') {
    return () =>
      IconBox({
        children: h(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            width: '16',
            height: '16'
          },
          [
            h('polygon', {
              points:
                '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
            })
          ]
        )
      })
  }

  if (name === 'chat') {
    return () =>
      IconBox({
        children: h(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            width: '16',
            height: '16'
          },
          [h('path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' })]
        )
      })
  }

  if (name === 'money') {
    return () =>
      IconBox({
        children: h(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            width: '16',
            height: '16'
          },
          [
            h('line', { x1: '12', y1: '1', x2: '12', y2: '23' }),
            h('path', { d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' })
          ]
        )
      })
  }

  if (name === 'store') {
    return () =>
      IconBox({
        children: h(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            width: '16',
            height: '16'
          },
          [
            h('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
            h('polyline', { points: '9 22 9 12 15 12 15 22' })
          ]
        )
      })
  }

  return undefined
}
