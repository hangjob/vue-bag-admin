import { d as defineComponent, u as useSsrAdapter, c as cssrAnchorMetaName, o as onMounted, a as onActivated, b as onDeactivated, e as computed, r as ref, f as useMemo, g as depx, p as pxfy, h, m as mergeProps, V as VResizeObserver, i as c, j as beforeNextFrameOnce, n as nextTick, k as renderSlot, l as resizeObserverManager, q as onBeforeUnmount, w as watch, s as isBrowser, t as onBeforeMount, v as isSymbol, x as isObject, y as toString, z as root, A as replaceable, B as cB, C as cM, D as c$1, E as cNotM, F as useStyle, G as toRef, N as NBaseIcon, H as commonLight, I as cE, J as useConfig, K as useTheme, L as useLocale, M as inject, O as configProviderInjectionKey, P as createKey, Q as useThemeClass, R as createTheme, S as scrollbarLight, T as internalSelectionMenuInjectionKey, U as render, W as Transition, X as fadeInScaleUpTransition, Y as createIndexGetter, Z as getMargin, _ as provide, $ as internalSelectionMenuBodyInjectionKey, a0 as resolveWrappedSlot, a1 as NBaseLoading, a2 as NScrollbar, a3 as resolveSlot, a4 as happensIn, a5 as changeColor, a6 as createInjectionKey, a7 as watchEffect, a8 as warnOnce, a9 as useRtl, aa as color2Class, ab as call, ac as popoverLight, ad as NBaseSuffix, ae as Wrapper, af as __unplugin_components_12, ag as Fragment, ah as commonVariables$4, ai as composite, aj as insideModal, ak as insidePopover, al as onUnmounted, am as warn, an as buttonGroupInjectionKey, ao as asModal, ap as useMergedState, aq as createTreeMate, ar as useCompitable, as as useFormItem, at as isMounted, au as useAdjustedTo, av as VBinder, aw as VTarget, ax as VFollower, ay as withDirectives, az as vShow, aA as clickoutside, aB as getPreciseEventTarget, aC as popoverBaseProps, aD as drawerInjectionKey, aE as drawerBodyInjectionKey, aF as popoverBodyInjectionKey, aG as modalBodyInjectionKey, aH as FocusTrap, aI as fadeInTransition, aJ as formatLength, aK as zindexable, aL as LazyTeleport, aM as throwError, aN as dropdownLight, aO as useReactivated, aP as ChevronRightIcon, aQ as __unplugin_components_2$2, aR as NFadeInExpandTransition, aS as keep, aT as keysOf, aU as iconSwitchTransition, aV as isSlotEmpty, aW as NIconSwitchTransition, aX as flatten, aY as onFontsReady, aZ as TransitionGroup, a_ as cloneVNode, a$ as app, b0 as _export_sfc, b1 as openBlock, b2 as createBlock, b3 as withCtx, b4 as createElementBlock, b5 as renderList, b6 as resolveDynamicComponent, b7 as createTextVNode, b8 as toDisplayString, b9 as renderIcon, ba as reactive, bb as updateHtmlGray, bc as updateHtmlWeak, bd as resolveComponent, be as createVNode, bf as createBaseVNode, bg as normalizeClass, bh as __unplugin_components_19, bi as NIcon, bj as __unplugin_components_20, bk as __unplugin_components_8, bl as pushScopeId, bm as popScopeId, bn as useFullscreen, bo as createCommentVNode, bp as __unplugin_components_18, bq as __unplugin_components_1$4, br as normalizeStyle, bs as useRouter, bt as getObjectPath, bu as toTree, bv as cloneDeep, bw as withModifiers, bx as NProgress, by as KeepAlive } from "./install-3d09e01e.js";
function omit(object, keys = [], rest) {
  const omitedObject = {};
  const originalKeys = Object.getOwnPropertyNames(object);
  originalKeys.forEach((originalKey) => {
    if (!keys.includes(originalKey)) {
      omitedObject[originalKey] = object[originalKey];
    }
  });
  return Object.assign(omitedObject, rest);
}
function getTitleAttribute(value) {
  switch (typeof value) {
    case "string":
      return value || void 0;
    case "number":
      return String(value);
    default:
      return void 0;
  }
}
function mergeEventHandlers(handlers) {
  const filteredHandlers = handlers.filter((handler) => handler !== void 0);
  if (filteredHandlers.length === 0)
    return void 0;
  if (filteredHandlers.length === 1)
    return filteredHandlers[0];
  return (e) => {
    handlers.forEach((handler) => {
      if (handler) {
        handler(e);
      }
    });
  };
}
const eventSet = /* @__PURE__ */ new WeakSet();
function markEventEffectPerformed(event) {
  eventSet.add(event);
}
function eventEffectNotPerformed(event) {
  return !eventSet.has(event);
}
function lowBit(n) {
  return n & -n;
}
class FinweckTree {
  /**
   * @param l length of the array
   * @param min min value of the array
   */
  constructor(l, min) {
    this.l = l;
    this.min = min;
    const ft = new Array(l + 1);
    for (let i = 0; i < l + 1; ++i) {
      ft[i] = 0;
    }
    this.ft = ft;
  }
  /**
   * Add arr[i] by n, start from 0
   * @param i the index of the element to be added
   * @param n the value to be added
   */
  add(i, n) {
    if (n === 0)
      return;
    const { l, ft } = this;
    i += 1;
    while (i <= l) {
      ft[i] += n;
      i += lowBit(i);
    }
  }
  /**
   * Get the value of index i
   * @param i index
   * @returns value of the index
   */
  get(i) {
    return this.sum(i + 1) - this.sum(i);
  }
  /**
   * Get the sum of first i elements
   * @param i count of head elements to be added
   * @returns the sum of first i elements
   */
  sum(i) {
    if (i === void 0)
      i = this.l;
    if (i <= 0)
      return 0;
    const { ft, min, l } = this;
    if (i > l)
      throw new Error("[FinweckTree.sum]: `i` is larger than length.");
    let ret = i * min;
    while (i > 0) {
      ret += ft[i];
      i -= lowBit(i);
    }
    return ret;
  }
  /**
   * Get the largest count of head elements whose sum are <= threshold
   * @param threshold
   * @returns the largest count of head elements whose sum are <= threshold
   */
  getBound(threshold) {
    let l = 0;
    let r = this.l;
    while (r > l) {
      const m = Math.floor((l + r) / 2);
      const sumM = this.sum(m);
      if (sumM > threshold) {
        r = m;
        continue;
      } else if (sumM < threshold) {
        if (l === m) {
          if (this.sum(l + 1) <= threshold)
            return l + 1;
          return m;
        }
        l = m;
      } else {
        return m;
      }
    }
    return l;
  }
}
let maybeTouch;
function ensureMaybeTouch() {
  if (maybeTouch === void 0) {
    if ("matchMedia" in window) {
      maybeTouch = window.matchMedia("(pointer:coarse)").matches;
    } else {
      maybeTouch = false;
    }
  }
  return maybeTouch;
}
let wheelScale;
function ensureWheelScale() {
  if (wheelScale === void 0) {
    wheelScale = "chrome" in window ? window.devicePixelRatio : 1;
  }
  return wheelScale;
}
const styles$1 = c(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  c("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    c("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]);
const VVirtualList = defineComponent({
  name: "VirtualList",
  inheritAttrs: false,
  props: {
    showScrollbar: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      default: () => []
    },
    // it is suppose to be the min height
    itemSize: {
      type: Number,
      required: true
    },
    itemResizable: Boolean,
    itemsStyle: [String, Object],
    visibleItemsTag: {
      type: [String, Object],
      default: "div"
    },
    visibleItemsProps: Object,
    ignoreItemResize: Boolean,
    onScroll: Function,
    onWheel: Function,
    onResize: Function,
    defaultScrollKey: [Number, String],
    defaultScrollIndex: Number,
    keyField: {
      type: String,
      default: "key"
    },
    // Whether it is a good API?
    // ResizeObserver + footer & header is not enough.
    // Too complex for simple case
    paddingTop: {
      type: [Number, String],
      default: 0
    },
    paddingBottom: {
      type: [Number, String],
      default: 0
    }
  },
  setup(props) {
    const ssrAdapter = useSsrAdapter();
    styles$1.mount({
      id: "vueuc/virtual-list",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    onMounted(() => {
      const { defaultScrollIndex, defaultScrollKey } = props;
      if (defaultScrollIndex !== void 0 && defaultScrollIndex !== null) {
        scrollTo({ index: defaultScrollIndex });
      } else if (defaultScrollKey !== void 0 && defaultScrollKey !== null) {
        scrollTo({ key: defaultScrollKey });
      }
    });
    let isDeactivated = false;
    let activateStateInitialized = false;
    onActivated(() => {
      isDeactivated = false;
      if (!activateStateInitialized) {
        activateStateInitialized = true;
        return;
      }
      scrollTo({ top: scrollTopRef.value, left: scrollLeft });
    });
    onDeactivated(() => {
      isDeactivated = true;
      if (!activateStateInitialized) {
        activateStateInitialized = true;
      }
    });
    const keyIndexMapRef = computed(() => {
      const map = /* @__PURE__ */ new Map();
      const { keyField } = props;
      props.items.forEach((item, index2) => {
        map.set(item[keyField], index2);
      });
      return map;
    });
    const listElRef = ref(null);
    const listHeightRef = ref(void 0);
    const keyToHeightOffset = /* @__PURE__ */ new Map();
    const finweckTreeRef = computed(() => {
      const { items, itemSize, keyField } = props;
      const ft = new FinweckTree(items.length, itemSize);
      items.forEach((item, index2) => {
        const key = item[keyField];
        const heightOffset = keyToHeightOffset.get(key);
        if (heightOffset !== void 0) {
          ft.add(index2, heightOffset);
        }
      });
      return ft;
    });
    const finweckTreeUpdateTrigger = ref(0);
    let scrollLeft = 0;
    const scrollTopRef = ref(0);
    const startIndexRef = useMemo(() => {
      return Math.max(finweckTreeRef.value.getBound(scrollTopRef.value - depx(props.paddingTop)) - 1, 0);
    });
    const viewportItemsRef = computed(() => {
      const { value: listHeight } = listHeightRef;
      if (listHeight === void 0)
        return [];
      const { items, itemSize } = props;
      const startIndex = startIndexRef.value;
      const endIndex = Math.min(startIndex + Math.ceil(listHeight / itemSize + 1), items.length - 1);
      const viewportItems = [];
      for (let i = startIndex; i <= endIndex; ++i) {
        viewportItems.push(items[i]);
      }
      return viewportItems;
    });
    const scrollTo = (options, y) => {
      if (typeof options === "number") {
        scrollToPosition(options, y, "auto");
        return;
      }
      const { left, top, index: index2, key, position, behavior, debounce: debounce2 = true } = options;
      if (left !== void 0 || top !== void 0) {
        scrollToPosition(left, top, behavior);
      } else if (index2 !== void 0) {
        scrollToIndex(index2, behavior, debounce2);
      } else if (key !== void 0) {
        const toIndex = keyIndexMapRef.value.get(key);
        if (toIndex !== void 0)
          scrollToIndex(toIndex, behavior, debounce2);
      } else if (position === "bottom") {
        scrollToPosition(0, Number.MAX_SAFE_INTEGER, behavior);
      } else if (position === "top") {
        scrollToPosition(0, 0, behavior);
      }
    };
    let anchorIndex;
    let anchorTimerId = null;
    function scrollToIndex(index2, behavior, debounce2) {
      const { value: ft } = finweckTreeRef;
      const targetTop = ft.sum(index2) + depx(props.paddingTop);
      if (!debounce2) {
        listElRef.value.scrollTo({
          left: 0,
          top: targetTop,
          behavior
        });
      } else {
        anchorIndex = index2;
        if (anchorTimerId !== null) {
          window.clearTimeout(anchorTimerId);
        }
        anchorTimerId = window.setTimeout(() => {
          anchorIndex = void 0;
          anchorTimerId = null;
        }, 16);
        const { scrollTop, offsetHeight } = listElRef.value;
        if (targetTop > scrollTop) {
          const itemSize = ft.get(index2);
          if (targetTop + itemSize <= scrollTop + offsetHeight)
            ;
          else {
            listElRef.value.scrollTo({
              left: 0,
              top: targetTop + itemSize - offsetHeight,
              behavior
            });
          }
        } else {
          listElRef.value.scrollTo({
            left: 0,
            top: targetTop,
            behavior
          });
        }
      }
    }
    function scrollToPosition(left, top, behavior) {
      listElRef.value.scrollTo({
        left,
        top,
        behavior
      });
    }
    function handleItemResize(key, entry) {
      var _a, _b, _c;
      if (isDeactivated)
        return;
      if (props.ignoreItemResize)
        return;
      if (isHideByVShow(entry.target))
        return;
      const { value: ft } = finweckTreeRef;
      const index2 = keyIndexMapRef.value.get(key);
      const previousHeight = ft.get(index2);
      const height = (_c = (_b = (_a = entry.borderBoxSize) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.blockSize) !== null && _c !== void 0 ? _c : entry.contentRect.height;
      if (height === previousHeight)
        return;
      const offset = height - props.itemSize;
      if (offset === 0) {
        keyToHeightOffset.delete(key);
      } else {
        keyToHeightOffset.set(key, height - props.itemSize);
      }
      const delta = height - previousHeight;
      if (delta === 0)
        return;
      ft.add(index2, delta);
      const listEl = listElRef.value;
      if (listEl != null) {
        if (anchorIndex === void 0) {
          const previousHeightSum = ft.sum(index2);
          if (listEl.scrollTop > previousHeightSum) {
            listEl.scrollBy(0, delta);
          }
        } else {
          if (index2 < anchorIndex) {
            listEl.scrollBy(0, delta);
          } else if (index2 === anchorIndex) {
            const previousHeightSum = ft.sum(index2);
            if (height + previousHeightSum > // Note, listEl shouldn't have border, nor offsetHeight won't be
            // correct
            listEl.scrollTop + listEl.offsetHeight) {
              listEl.scrollBy(0, delta);
            }
          }
        }
        syncViewport();
      }
      finweckTreeUpdateTrigger.value++;
    }
    const mayUseWheel = !ensureMaybeTouch();
    let wheelCatched = false;
    function handleListScroll(e) {
      var _a;
      (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
      if (!mayUseWheel || !wheelCatched) {
        syncViewport();
      }
    }
    function handleListWheel(e) {
      var _a;
      (_a = props.onWheel) === null || _a === void 0 ? void 0 : _a.call(props, e);
      if (mayUseWheel) {
        const listEl = listElRef.value;
        if (listEl != null) {
          if (e.deltaX === 0) {
            if (listEl.scrollTop === 0 && e.deltaY <= 0) {
              return;
            }
            if (listEl.scrollTop + listEl.offsetHeight >= listEl.scrollHeight && e.deltaY >= 0) {
              return;
            }
          }
          e.preventDefault();
          listEl.scrollTop += e.deltaY / ensureWheelScale();
          listEl.scrollLeft += e.deltaX / ensureWheelScale();
          syncViewport();
          wheelCatched = true;
          beforeNextFrameOnce(() => {
            wheelCatched = false;
          });
        }
      }
    }
    function handleListResize(entry) {
      if (isDeactivated)
        return;
      if (isHideByVShow(entry.target))
        return;
      if (entry.contentRect.height === listHeightRef.value)
        return;
      listHeightRef.value = entry.contentRect.height;
      const { onResize } = props;
      if (onResize !== void 0)
        onResize(entry);
    }
    function syncViewport() {
      const { value: listEl } = listElRef;
      if (listEl == null)
        return;
      scrollTopRef.value = listEl.scrollTop;
      scrollLeft = listEl.scrollLeft;
    }
    function isHideByVShow(el) {
      let cursor = el;
      while (cursor !== null) {
        if (cursor.style.display === "none")
          return true;
        cursor = cursor.parentElement;
      }
      return false;
    }
    return {
      listHeight: listHeightRef,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: keyIndexMapRef,
      itemsStyle: computed(() => {
        const { itemResizable } = props;
        const height = pxfy(finweckTreeRef.value.sum());
        finweckTreeUpdateTrigger.value;
        return [
          props.itemsStyle,
          {
            boxSizing: "content-box",
            height: itemResizable ? "" : height,
            minHeight: itemResizable ? height : "",
            paddingTop: pxfy(props.paddingTop),
            paddingBottom: pxfy(props.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: computed(() => {
        finweckTreeUpdateTrigger.value;
        return {
          transform: `translateY(${pxfy(finweckTreeRef.value.sum(startIndexRef.value))})`
        };
      }),
      viewportItems: viewportItemsRef,
      listElRef,
      itemsElRef: ref(null),
      scrollTo,
      handleListResize,
      handleListScroll,
      handleListWheel,
      handleItemResize
    };
  },
  render() {
    const { itemResizable, keyField, keyToIndex, visibleItemsTag } = this;
    return h(VResizeObserver, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var _a, _b;
        return h("div", mergeProps(this.$attrs, {
          class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
          onScroll: this.handleListScroll,
          onWheel: this.handleListWheel,
          ref: "listElRef"
        }), [
          this.items.length !== 0 ? h("div", {
            ref: "itemsElRef",
            class: "v-vl-items",
            style: this.itemsStyle
          }, [
            h(visibleItemsTag, Object.assign({
              class: "v-vl-visible-items",
              style: this.visibleItemsStyle
            }, this.visibleItemsProps), {
              default: () => this.viewportItems.map((item) => {
                const key = item[keyField];
                const index2 = keyToIndex.get(key);
                const itemVNode = this.$slots.default({
                  item,
                  index: index2
                })[0];
                if (itemResizable) {
                  return h(VResizeObserver, {
                    key,
                    onResize: (entry) => this.handleItemResize(key, entry)
                  }, {
                    default: () => itemVNode
                  });
                }
                itemVNode.key = key;
                return itemVNode;
              })
            })
          ]) : (_b = (_a = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a)
        ]);
      }
    });
  }
});
const styles = c(".v-x-scroll", {
  overflow: "auto",
  scrollbarWidth: "none"
}, [
  c("&::-webkit-scrollbar", {
    width: 0,
    height: 0
  })
]);
const VXScroll = defineComponent({
  name: "XScroll",
  props: {
    disabled: Boolean,
    onScroll: Function
  },
  setup() {
    const selfRef = ref(null);
    function handleWheel(e) {
      const preventYWheel = e.currentTarget.offsetWidth < e.currentTarget.scrollWidth;
      if (!preventYWheel || e.deltaY === 0)
        return;
      e.currentTarget.scrollLeft += e.deltaY + e.deltaX;
      e.preventDefault();
    }
    const ssrAdapter = useSsrAdapter();
    styles.mount({
      id: "vueuc/x-scroll",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    const exposedMethods = {
      scrollTo(...args) {
        var _a;
        (_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(...args);
      }
    };
    return Object.assign({
      selfRef,
      handleWheel
    }, exposedMethods);
  },
  render() {
    return h("div", {
      ref: "selfRef",
      onScroll: this.onScroll,
      onWheel: this.disabled ? void 0 : this.handleWheel,
      class: "v-x-scroll"
    }, this.$slots);
  }
});
const hiddenAttr = "v-hidden";
const style$n = c("[v-hidden]", {
  display: "none!important"
});
const VOverflow = defineComponent({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateOverflow: Function
  },
  setup(props, { slots }) {
    const selfRef = ref(null);
    const counterRef = ref(null);
    function deriveCounter() {
      const { value: self2 } = selfRef;
      const { getCounter, getTail } = props;
      let counter;
      if (getCounter !== void 0)
        counter = getCounter();
      else {
        counter = counterRef.value;
      }
      if (!self2 || !counter)
        return;
      if (counter.hasAttribute(hiddenAttr)) {
        counter.removeAttribute(hiddenAttr);
      }
      const { children } = self2;
      const containerWidth = self2.offsetWidth;
      const childWidths = [];
      const tail = slots.tail ? getTail === null || getTail === void 0 ? void 0 : getTail() : null;
      let childWidthSum = tail ? tail.offsetWidth : 0;
      let overflow = false;
      const len = self2.children.length - (slots.tail ? 1 : 0);
      for (let i = 0; i < len - 1; ++i) {
        if (i < 0)
          continue;
        const child = children[i];
        if (overflow) {
          if (!child.hasAttribute(hiddenAttr)) {
            child.setAttribute(hiddenAttr, "");
          }
          continue;
        } else if (child.hasAttribute(hiddenAttr)) {
          child.removeAttribute(hiddenAttr);
        }
        const childWidth = child.offsetWidth;
        childWidthSum += childWidth;
        childWidths[i] = childWidth;
        if (childWidthSum > containerWidth) {
          const { updateCounter } = props;
          for (let j = i; j >= 0; --j) {
            const restCount = len - 1 - j;
            if (updateCounter !== void 0) {
              updateCounter(restCount);
            } else {
              counter.textContent = `${restCount}`;
            }
            const counterWidth = counter.offsetWidth;
            childWidthSum -= childWidths[j];
            if (childWidthSum + counterWidth <= containerWidth || j === 0) {
              overflow = true;
              i = j - 1;
              if (tail) {
                if (i === -1) {
                  tail.style.maxWidth = `${containerWidth - counterWidth}px`;
                  tail.style.boxSizing = "border-box";
                } else {
                  tail.style.maxWidth = "";
                }
              }
              break;
            }
          }
        }
      }
      const { onUpdateOverflow } = props;
      if (!overflow) {
        if (onUpdateOverflow !== void 0) {
          onUpdateOverflow(false);
        }
        counter.setAttribute(hiddenAttr, "");
      } else {
        if (onUpdateOverflow !== void 0) {
          onUpdateOverflow(true);
        }
      }
    }
    const ssrAdapter = useSsrAdapter();
    style$n.mount({
      id: "vueuc/overflow",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    onMounted(deriveCounter);
    return {
      selfRef,
      counterRef,
      sync: deriveCounter
    };
  },
  render() {
    const { $slots } = this;
    nextTick(this.sync);
    return h("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      renderSlot($slots, "default"),
      // $slots.counter should only has 1 element
      $slots.counter ? $slots.counter() : h("span", {
        style: {
          display: "inline-block"
        },
        ref: "counterRef"
      }),
      // $slots.tail should only has 1 element
      $slots.tail ? $slots.tail() : null
    ]);
  }
});
function useOnResize(elRef, onResize) {
  if (onResize) {
    onMounted(() => {
      const { value: el } = elRef;
      if (el) {
        resizeObserverManager.registerHandler(el, onResize);
      }
    });
    onBeforeUnmount(() => {
      const { value: el } = elRef;
      if (el) {
        resizeObserverManager.unregisterHandler(el);
      }
    });
  }
}
let lockCount = 0;
let originalMarginRight = "";
let originalOverflow = "";
let originalOverflowX = "";
let originalOverflowY = "";
const lockHtmlScrollRightCompensationRef = ref("0px");
function useLockHtmlScroll(lockRef) {
  if (typeof document === "undefined")
    return;
  const el = document.documentElement;
  let watchStopHandle;
  let activated = false;
  const unlock = () => {
    el.style.marginRight = originalMarginRight;
    el.style.overflow = originalOverflow;
    el.style.overflowX = originalOverflowX;
    el.style.overflowY = originalOverflowY;
    lockHtmlScrollRightCompensationRef.value = "0px";
  };
  onMounted(() => {
    watchStopHandle = watch(lockRef, (value) => {
      if (value) {
        if (!lockCount) {
          const scrollbarWidth = window.innerWidth - el.offsetWidth;
          if (scrollbarWidth > 0) {
            originalMarginRight = el.style.marginRight;
            el.style.marginRight = `${scrollbarWidth}px`;
            lockHtmlScrollRightCompensationRef.value = `${scrollbarWidth}px`;
          }
          originalOverflow = el.style.overflow;
          originalOverflowX = el.style.overflowX;
          originalOverflowY = el.style.overflowY;
          el.style.overflow = "hidden";
          el.style.overflowX = "hidden";
          el.style.overflowY = "hidden";
        }
        activated = true;
        lockCount++;
      } else {
        lockCount--;
        if (!lockCount) {
          unlock();
        }
        activated = false;
      }
    }, {
      immediate: true
    });
  });
  onBeforeUnmount(() => {
    watchStopHandle === null || watchStopHandle === void 0 ? void 0 : watchStopHandle();
    if (activated) {
      lockCount--;
      if (!lockCount) {
        unlock();
      }
      activated = false;
    }
  });
}
const isComposingRef = ref(false);
const compositionStartHandler = () => {
  isComposingRef.value = true;
};
const compositionEndHandler = () => {
  isComposingRef.value = false;
};
let mountedCount = 0;
const useIsComposing = () => {
  if (isBrowser) {
    onBeforeMount(() => {
      if (!mountedCount) {
        window.addEventListener("compositionstart", compositionStartHandler);
        window.addEventListener("compositionend", compositionEndHandler);
      }
      mountedCount++;
    });
    onBeforeUnmount(() => {
      if (mountedCount <= 1) {
        window.removeEventListener("compositionstart", compositionStartHandler);
        window.removeEventListener("compositionend", compositionEndHandler);
        mountedCount = 0;
      } else {
        mountedCount--;
      }
    });
  }
  return isComposingRef;
};
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
function toInteger(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index2 = -1, length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index2];
  }
  while (++index2 < length) {
    accumulator = iteratee(accumulator, array[index2], index2, array);
  }
  return accumulator;
}
function basePropertyOf(object) {
  return function(key) {
    return object == null ? void 0 : object[key];
  };
}
var deburredLetters = {
  // Latin-1 Supplement block.
  "À": "A",
  "Á": "A",
  "Â": "A",
  "Ã": "A",
  "Ä": "A",
  "Å": "A",
  "à": "a",
  "á": "a",
  "â": "a",
  "ã": "a",
  "ä": "a",
  "å": "a",
  "Ç": "C",
  "ç": "c",
  "Ð": "D",
  "ð": "d",
  "È": "E",
  "É": "E",
  "Ê": "E",
  "Ë": "E",
  "è": "e",
  "é": "e",
  "ê": "e",
  "ë": "e",
  "Ì": "I",
  "Í": "I",
  "Î": "I",
  "Ï": "I",
  "ì": "i",
  "í": "i",
  "î": "i",
  "ï": "i",
  "Ñ": "N",
  "ñ": "n",
  "Ò": "O",
  "Ó": "O",
  "Ô": "O",
  "Õ": "O",
  "Ö": "O",
  "Ø": "O",
  "ò": "o",
  "ó": "o",
  "ô": "o",
  "õ": "o",
  "ö": "o",
  "ø": "o",
  "Ù": "U",
  "Ú": "U",
  "Û": "U",
  "Ü": "U",
  "ù": "u",
  "ú": "u",
  "û": "u",
  "ü": "u",
  "Ý": "Y",
  "ý": "y",
  "ÿ": "y",
  "Æ": "Ae",
  "æ": "ae",
  "Þ": "Th",
  "þ": "th",
  "ß": "ss",
  // Latin Extended-A block.
  "Ā": "A",
  "Ă": "A",
  "Ą": "A",
  "ā": "a",
  "ă": "a",
  "ą": "a",
  "Ć": "C",
  "Ĉ": "C",
  "Ċ": "C",
  "Č": "C",
  "ć": "c",
  "ĉ": "c",
  "ċ": "c",
  "č": "c",
  "Ď": "D",
  "Đ": "D",
  "ď": "d",
  "đ": "d",
  "Ē": "E",
  "Ĕ": "E",
  "Ė": "E",
  "Ę": "E",
  "Ě": "E",
  "ē": "e",
  "ĕ": "e",
  "ė": "e",
  "ę": "e",
  "ě": "e",
  "Ĝ": "G",
  "Ğ": "G",
  "Ġ": "G",
  "Ģ": "G",
  "ĝ": "g",
  "ğ": "g",
  "ġ": "g",
  "ģ": "g",
  "Ĥ": "H",
  "Ħ": "H",
  "ĥ": "h",
  "ħ": "h",
  "Ĩ": "I",
  "Ī": "I",
  "Ĭ": "I",
  "Į": "I",
  "İ": "I",
  "ĩ": "i",
  "ī": "i",
  "ĭ": "i",
  "į": "i",
  "ı": "i",
  "Ĵ": "J",
  "ĵ": "j",
  "Ķ": "K",
  "ķ": "k",
  "ĸ": "k",
  "Ĺ": "L",
  "Ļ": "L",
  "Ľ": "L",
  "Ŀ": "L",
  "Ł": "L",
  "ĺ": "l",
  "ļ": "l",
  "ľ": "l",
  "ŀ": "l",
  "ł": "l",
  "Ń": "N",
  "Ņ": "N",
  "Ň": "N",
  "Ŋ": "N",
  "ń": "n",
  "ņ": "n",
  "ň": "n",
  "ŋ": "n",
  "Ō": "O",
  "Ŏ": "O",
  "Ő": "O",
  "ō": "o",
  "ŏ": "o",
  "ő": "o",
  "Ŕ": "R",
  "Ŗ": "R",
  "Ř": "R",
  "ŕ": "r",
  "ŗ": "r",
  "ř": "r",
  "Ś": "S",
  "Ŝ": "S",
  "Ş": "S",
  "Š": "S",
  "ś": "s",
  "ŝ": "s",
  "ş": "s",
  "š": "s",
  "Ţ": "T",
  "Ť": "T",
  "Ŧ": "T",
  "ţ": "t",
  "ť": "t",
  "ŧ": "t",
  "Ũ": "U",
  "Ū": "U",
  "Ŭ": "U",
  "Ů": "U",
  "Ű": "U",
  "Ų": "U",
  "ũ": "u",
  "ū": "u",
  "ŭ": "u",
  "ů": "u",
  "ű": "u",
  "ų": "u",
  "Ŵ": "W",
  "ŵ": "w",
  "Ŷ": "Y",
  "ŷ": "y",
  "Ÿ": "Y",
  "Ź": "Z",
  "Ż": "Z",
  "Ž": "Z",
  "ź": "z",
  "ż": "z",
  "ž": "z",
  "Ĳ": "IJ",
  "ĳ": "ij",
  "Œ": "Oe",
  "œ": "oe",
  "ŉ": "'n",
  "ſ": "s"
};
var deburrLetter = basePropertyOf(deburredLetters);
const deburrLetter$1 = deburrLetter;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
var rsCombo$1 = "[" + rsComboRange$1 + "]";
var reComboMark = RegExp(rsCombo$1, "g");
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter$1).replace(reComboMark, "");
}
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos$1 = "['’]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}
var rsApos = "['’]";
var reApos = RegExp(rsApos, "g");
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
  };
}
var nativeIsFinite = root.isFinite, nativeMin$1 = Math.min;
function createRound(methodName) {
  var func = Math[methodName];
  return function(number, precision) {
    number = toNumber(number);
    precision = precision == null ? 0 : nativeMin$1(toInteger(precision), 292);
    if (precision && nativeIsFinite(number)) {
      var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
      pair = (toString(value) + "e").split("e");
      return +(pair[0] + "e" + (+pair[1] - precision));
    }
    return func(number);
  };
}
var now = function() {
  return root.Date.now();
};
const now$1 = now;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var kebabCase = createCompounder(function(result, word, index2) {
  return result + (index2 ? "-" : "") + word.toLowerCase();
});
const kebabCase$1 = kebabCase;
var round = createRound("round");
const round$1 = round;
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
const AddIcon = defineComponent({
  name: "Add",
  render() {
    return h(
      "svg",
      { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      h("path", { d: "M256 112V400M400 256H112", stroke: "currentColor", "stroke-width": "32", "stroke-linecap": "round", "stroke-linejoin": "round" })
    );
  }
});
const FinishedIcon = defineComponent({
  name: "Checkmark",
  render() {
    return h(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
      h(
        "g",
        { fill: "none" },
        h("path", { d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z", fill: "currentColor" })
      )
    );
  }
});
const ErrorIcon = replaceable("close", h(
  "svg",
  { viewBox: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true },
  h(
    "g",
    { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
    h(
      "g",
      { fill: "currentColor", "fill-rule": "nonzero" },
      h("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" })
    )
  )
));
const EmptyIcon = defineComponent({
  name: "Empty",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      h("path", { d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z", fill: "currentColor" }),
      h("path", { d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z", fill: "currentColor" })
    );
  }
});
const ChevronDownFilledIcon = defineComponent({
  name: "ChevronDownFilled",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      h("path", { d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z", fill: "currentColor" })
    );
  }
});
const style$m = cB("base-close", `
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`, [cM("absolute", `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `), c$1("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), cNotM("disabled", [c$1("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), c$1("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), c$1("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), c$1("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), c$1("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), cM("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), cM("round", [c$1("&::before", `
 border-radius: 50%;
 `)])]);
const NBaseClose = defineComponent({
  name: "BaseClose",
  props: {
    isButtonTag: {
      type: Boolean,
      default: true
    },
    clsPrefix: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    focusable: {
      type: Boolean,
      default: true
    },
    round: Boolean,
    onClick: Function,
    absolute: Boolean
  },
  setup(props) {
    useStyle("-base-close", style$m, toRef(props, "clsPrefix"));
    return () => {
      const { clsPrefix, disabled, absolute, round: round2, isButtonTag } = props;
      const Tag = isButtonTag ? "button" : "div";
      return h(
        Tag,
        { type: isButtonTag ? "button" : void 0, tabindex: disabled || !props.focusable ? -1 : 0, "aria-disabled": disabled, "aria-label": "close", role: isButtonTag ? void 0 : "button", disabled, class: [
          `${clsPrefix}-base-close`,
          absolute && `${clsPrefix}-base-close--absolute`,
          disabled && `${clsPrefix}-base-close--disabled`,
          round2 && `${clsPrefix}-base-close--round`
        ], onMousedown: (e) => {
          if (!props.focusable) {
            e.preventDefault();
          }
        }, onClick: props.onClick },
        h(NBaseIcon, { clsPrefix }, {
          default: () => h(ErrorIcon, null)
        })
      );
    };
  }
});
const FocusDetector = defineComponent({
  props: {
    onFocus: Function,
    onBlur: Function
  },
  setup(props) {
    return () => h("div", { style: "width: 0; height: 0", tabindex: 0, onFocus: props.onFocus, onBlur: props.onBlur });
  }
});
const commonVars$4 = {
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
const self$i = (vars) => {
  const { textColorDisabled, iconColor, textColor2, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeHuge } = vars;
  return Object.assign(Object.assign({}, commonVars$4), {
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    textColor: textColorDisabled,
    iconColor,
    extraTextColor: textColor2
  });
};
const emptyLight = {
  name: "Empty",
  common: commonLight,
  self: self$i
};
const emptyLight$1 = emptyLight;
const style$l = cB("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [cE("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [c$1("+", [cE("description", `
 margin-top: 8px;
 `)])]), cE("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cE("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);
const emptyProps = Object.assign(Object.assign({}, useTheme.props), { description: String, showDescription: {
  type: Boolean,
  default: true
}, showIcon: {
  type: Boolean,
  default: true
}, size: {
  type: String,
  default: "medium"
}, renderIcon: Function });
const __unplugin_components_9 = defineComponent({
  name: "Empty",
  props: emptyProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Empty", "-empty", style$l, emptyLight$1, props, mergedClsPrefixRef);
    const { localeRef } = useLocale("Empty");
    const NConfigProvider = inject(configProviderInjectionKey, null);
    const mergedDescriptionRef = computed(() => {
      var _a, _b, _c;
      return (_a = props.description) !== null && _a !== void 0 ? _a : (_c = (_b = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedComponentPropsRef.value) === null || _b === void 0 ? void 0 : _b.Empty) === null || _c === void 0 ? void 0 : _c.description;
    });
    const mergedRenderIconRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Empty) === null || _b === void 0 ? void 0 : _b.renderIcon) || (() => h(EmptyIcon, null));
    });
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: { [createKey("iconSize", size)]: iconSize, [createKey("fontSize", size)]: fontSize, textColor, iconColor, extraTextColor } } = themeRef.value;
      return {
        "--n-icon-size": iconSize,
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-text-color": textColor,
        "--n-icon-color": iconColor,
        "--n-extra-text-color": extraTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("empty", computed(() => {
      let hash = "";
      const { size } = props;
      hash += size[0];
      return hash;
    }), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedRenderIcon: mergedRenderIconRef,
      localizedDescription: computed(() => {
        return mergedDescriptionRef.value || localeRef.value.description;
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const { $slots, mergedClsPrefix, onRender } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(
      "div",
      { class: [`${mergedClsPrefix}-empty`, this.themeClass], style: this.cssVars },
      this.showIcon ? h("div", { class: `${mergedClsPrefix}-empty__icon` }, $slots.icon ? $slots.icon() : h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: this.mergedRenderIcon })) : null,
      this.showDescription ? h("div", { class: `${mergedClsPrefix}-empty__description` }, $slots.default ? $slots.default() : this.localizedDescription) : null,
      $slots.extra ? h("div", { class: `${mergedClsPrefix}-empty__extra` }, $slots.extra()) : null
    );
  }
});
const commonVariables$3 = {
  height: "calc(var(--n-option-height) * 7.6)",
  paddingSmall: "4px 0",
  paddingMedium: "4px 0",
  paddingLarge: "4px 0",
  paddingHuge: "4px 0",
  optionPaddingSmall: "0 12px",
  optionPaddingMedium: "0 12px",
  optionPaddingLarge: "0 12px",
  optionPaddingHuge: "0 12px",
  loadingSize: "18px"
};
const self$h = (vars) => {
  const { borderRadius, popoverColor, textColor3, dividerColor, textColor2, primaryColorPressed, textColorDisabled, primaryColor, opacityDisabled, hoverColor, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeHuge, heightSmall, heightMedium, heightLarge, heightHuge } = vars;
  return Object.assign(Object.assign({}, commonVariables$3), { optionFontSizeSmall: fontSizeSmall, optionFontSizeMedium: fontSizeMedium, optionFontSizeLarge: fontSizeLarge, optionFontSizeHuge: fontSizeHuge, optionHeightSmall: heightSmall, optionHeightMedium: heightMedium, optionHeightLarge: heightLarge, optionHeightHuge: heightHuge, borderRadius, color: popoverColor, groupHeaderTextColor: textColor3, actionDividerColor: dividerColor, optionTextColor: textColor2, optionTextColorPressed: primaryColorPressed, optionTextColorDisabled: textColorDisabled, optionTextColorActive: primaryColor, optionOpacityDisabled: opacityDisabled, optionCheckColor: primaryColor, optionColorPending: hoverColor, optionColorActive: "rgba(0, 0, 0, 0)", optionColorActivePending: hoverColor, actionTextColor: textColor2, loadingColor: primaryColor });
};
const internalSelectMenuLight = createTheme({
  name: "InternalSelectMenu",
  common: commonLight,
  peers: {
    Scrollbar: scrollbarLight,
    Empty: emptyLight$1
  },
  self: self$h
});
const internalSelectMenuLight$1 = internalSelectMenuLight;
function renderCheckMark(show, clsPrefix) {
  return h(Transition, { name: "fade-in-scale-up-transition" }, {
    default: () => show ? h(NBaseIcon, { clsPrefix, class: `${clsPrefix}-base-select-option__check` }, {
      default: () => h(FinishedIcon)
    }) : null
  });
}
const NSelectOption = defineComponent({
  name: "NBaseSelectOption",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {
      valueRef,
      pendingTmNodeRef,
      multipleRef,
      valueSetRef,
      renderLabelRef,
      renderOptionRef,
      labelFieldRef,
      valueFieldRef,
      showCheckmarkRef,
      nodePropsRef,
      handleOptionClick,
      handleOptionMouseEnter
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(internalSelectionMenuInjectionKey);
    const isPendingRef = useMemo(() => {
      const { value: pendingTmNode } = pendingTmNodeRef;
      if (!pendingTmNode)
        return false;
      return props.tmNode.key === pendingTmNode.key;
    });
    function handleClick(e) {
      const { tmNode } = props;
      if (tmNode.disabled)
        return;
      handleOptionClick(e, tmNode);
    }
    function handleMouseEnter(e) {
      const { tmNode } = props;
      if (tmNode.disabled)
        return;
      handleOptionMouseEnter(e, tmNode);
    }
    function handleMouseMove(e) {
      const { tmNode } = props;
      const { value: isPending } = isPendingRef;
      if (tmNode.disabled || isPending)
        return;
      handleOptionMouseEnter(e, tmNode);
    }
    return {
      multiple: multipleRef,
      isGrouped: useMemo(() => {
        const { tmNode } = props;
        const { parent } = tmNode;
        return parent && parent.rawNode.type === "group";
      }),
      showCheckmark: showCheckmarkRef,
      nodeProps: nodePropsRef,
      isPending: isPendingRef,
      isSelected: useMemo(() => {
        const { value } = valueRef;
        const { value: multiple } = multipleRef;
        if (value === null)
          return false;
        const optionValue = props.tmNode.rawNode[valueFieldRef.value];
        if (multiple) {
          const { value: valueSet } = valueSetRef;
          return valueSet.has(optionValue);
        } else {
          return value === optionValue;
        }
      }),
      labelField: labelFieldRef,
      renderLabel: renderLabelRef,
      renderOption: renderOptionRef,
      handleMouseMove,
      handleMouseEnter,
      handleClick
    };
  },
  render() {
    const { clsPrefix, tmNode: { rawNode }, isSelected, isPending, isGrouped, showCheckmark, nodeProps, renderOption, renderLabel, handleClick, handleMouseEnter, handleMouseMove } = this;
    const checkmark = renderCheckMark(isSelected, clsPrefix);
    const children = renderLabel ? [renderLabel(rawNode, isSelected), showCheckmark && checkmark] : [
      render(rawNode[this.labelField], rawNode, isSelected),
      showCheckmark && checkmark
    ];
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const node = h(
      "div",
      Object.assign({}, attrs, { class: [
        `${clsPrefix}-base-select-option`,
        rawNode.class,
        attrs === null || attrs === void 0 ? void 0 : attrs.class,
        {
          [`${clsPrefix}-base-select-option--disabled`]: rawNode.disabled,
          [`${clsPrefix}-base-select-option--selected`]: isSelected,
          [`${clsPrefix}-base-select-option--grouped`]: isGrouped,
          [`${clsPrefix}-base-select-option--pending`]: isPending,
          [`${clsPrefix}-base-select-option--show-checkmark`]: showCheckmark
        }
      ], style: [(attrs === null || attrs === void 0 ? void 0 : attrs.style) || "", rawNode.style || ""], onClick: mergeEventHandlers([handleClick, attrs === null || attrs === void 0 ? void 0 : attrs.onClick]), onMouseenter: mergeEventHandlers([
        handleMouseEnter,
        attrs === null || attrs === void 0 ? void 0 : attrs.onMouseenter
      ]), onMousemove: mergeEventHandlers([handleMouseMove, attrs === null || attrs === void 0 ? void 0 : attrs.onMousemove]) }),
      h("div", { class: `${clsPrefix}-base-select-option__content` }, children)
    );
    return rawNode.render ? rawNode.render({ node, option: rawNode, selected: isSelected }) : renderOption ? renderOption({ node, option: rawNode, selected: isSelected }) : node;
  }
});
const NSelectGroupHeader = defineComponent({
  name: "NBaseSelectGroupHeader",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup() {
    const {
      renderLabelRef,
      renderOptionRef,
      labelFieldRef,
      nodePropsRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(internalSelectionMenuInjectionKey);
    return {
      labelField: labelFieldRef,
      nodeProps: nodePropsRef,
      renderLabel: renderLabelRef,
      renderOption: renderOptionRef
    };
  },
  render() {
    const { clsPrefix, renderLabel, renderOption, nodeProps, tmNode: { rawNode } } = this;
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const children = renderLabel ? renderLabel(rawNode, false) : render(rawNode[this.labelField], rawNode, false);
    const node = h("div", Object.assign({}, attrs, { class: [`${clsPrefix}-base-select-group-header`, attrs === null || attrs === void 0 ? void 0 : attrs.class] }), children);
    return rawNode.render ? rawNode.render({ node, option: rawNode }) : renderOption ? renderOption({ node, option: rawNode, selected: false }) : node;
  }
});
const style$k = cB("base-select-menu", `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [cB("scrollbar", `
 max-height: var(--n-height);
 `), cB("virtual-list", `
 max-height: var(--n-height);
 `), cB("base-select-option", `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [cE("content", `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), cB("base-select-group-header", `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), cB("base-select-menu-option-wrapper", `
 position: relative;
 width: 100%;
 `), cE("loading, empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), cE("loading", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), cE("action", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), cB("base-select-group-header", `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), cB("base-select-option", `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [cM("show-checkmark", `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `), c$1("&::before", `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), c$1("&:active", `
 color: var(--n-option-text-color-pressed);
 `), cM("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), cM("pending", [c$1("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), cM("selected", `
 color: var(--n-option-text-color-active);
 `, [c$1("&::before", `
 background-color: var(--n-option-color-active);
 `), cM("pending", [c$1("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 `, [cNotM("selected", `
 color: var(--n-option-text-color-disabled);
 `), cM("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), cE("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [fadeInScaleUpTransition({
  enterScale: "0.5"
})])])]);
const NInternalSelectMenu = defineComponent({
  name: "InternalSelectMenu",
  props: Object.assign(Object.assign({}, useTheme.props), {
    clsPrefix: {
      type: String,
      required: true
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    treeMate: {
      type: Object,
      required: true
    },
    multiple: Boolean,
    size: {
      type: String,
      default: "medium"
    },
    value: {
      type: [String, Number, Array],
      default: null
    },
    autoPending: Boolean,
    virtualScroll: {
      type: Boolean,
      default: true
    },
    // show is used to toggle pending state initialization
    show: {
      type: Boolean,
      default: true
    },
    labelField: {
      type: String,
      default: "label"
    },
    valueField: {
      type: String,
      default: "value"
    },
    loading: Boolean,
    focusable: Boolean,
    renderLabel: Function,
    renderOption: Function,
    nodeProps: Function,
    showCheckmark: { type: Boolean, default: true },
    onMousedown: Function,
    onScroll: Function,
    onFocus: Function,
    onBlur: Function,
    onKeyup: Function,
    onKeydown: Function,
    onTabOut: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onResize: Function,
    resetMenuOnOptionsChange: {
      type: Boolean,
      default: true
    },
    inlineThemeDisabled: Boolean,
    // deprecated
    onToggle: Function
  }),
  setup(props) {
    const themeRef = useTheme("InternalSelectMenu", "-internal-select-menu", style$k, internalSelectMenuLight$1, props, toRef(props, "clsPrefix"));
    const selfRef = ref(null);
    const virtualListRef = ref(null);
    const scrollbarRef = ref(null);
    const flattenedNodesRef = computed(() => props.treeMate.getFlattenedNodes());
    const fIndexGetterRef = computed(() => createIndexGetter(flattenedNodesRef.value));
    const pendingNodeRef = ref(null);
    function initPendingNode() {
      const { treeMate } = props;
      let defaultPendingNode = null;
      const { value } = props;
      if (value === null) {
        defaultPendingNode = treeMate.getFirstAvailableNode();
      } else {
        if (props.multiple) {
          defaultPendingNode = treeMate.getNode((value || [])[(value || []).length - 1]);
        } else {
          defaultPendingNode = treeMate.getNode(value);
        }
        if (!defaultPendingNode || defaultPendingNode.disabled) {
          defaultPendingNode = treeMate.getFirstAvailableNode();
        }
      }
      if (defaultPendingNode) {
        setPendingTmNode(defaultPendingNode);
      } else {
        setPendingTmNode(null);
      }
    }
    function clearPendingNodeIfInvalid() {
      const { value: pendingNode } = pendingNodeRef;
      if (pendingNode && !props.treeMate.getNode(pendingNode.key)) {
        pendingNodeRef.value = null;
      }
    }
    let initPendingNodeWatchStopHandle;
    watch(() => props.show, (show) => {
      if (show) {
        initPendingNodeWatchStopHandle = watch(() => props.treeMate, () => {
          if (props.resetMenuOnOptionsChange) {
            if (props.autoPending) {
              initPendingNode();
            } else {
              clearPendingNodeIfInvalid();
            }
            void nextTick(scrollToPendingNode);
          } else {
            clearPendingNodeIfInvalid();
          }
        }, {
          immediate: true
        });
      } else {
        initPendingNodeWatchStopHandle === null || initPendingNodeWatchStopHandle === void 0 ? void 0 : initPendingNodeWatchStopHandle();
      }
    }, {
      immediate: true
    });
    onBeforeUnmount(() => {
      initPendingNodeWatchStopHandle === null || initPendingNodeWatchStopHandle === void 0 ? void 0 : initPendingNodeWatchStopHandle();
    });
    const itemSizeRef = computed(() => {
      return depx(themeRef.value.self[createKey("optionHeight", props.size)]);
    });
    const paddingRef = computed(() => {
      return getMargin(themeRef.value.self[createKey("padding", props.size)]);
    });
    const valueSetRef = computed(() => {
      if (props.multiple && Array.isArray(props.value)) {
        return new Set(props.value);
      }
      return /* @__PURE__ */ new Set();
    });
    const emptyRef = computed(() => {
      const tmNodes = flattenedNodesRef.value;
      return tmNodes && tmNodes.length === 0;
    });
    function doToggle(tmNode) {
      const { onToggle } = props;
      if (onToggle)
        onToggle(tmNode);
    }
    function doScroll(e) {
      const { onScroll } = props;
      if (onScroll)
        onScroll(e);
    }
    function handleVirtualListScroll(e) {
      var _a;
      (_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync();
      doScroll(e);
    }
    function handleVirtualListResize() {
      var _a;
      (_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync();
    }
    function getPendingTmNode() {
      const { value: pendingTmNode } = pendingNodeRef;
      if (pendingTmNode)
        return pendingTmNode;
      return null;
    }
    function handleOptionMouseEnter(e, tmNode) {
      if (tmNode.disabled)
        return;
      setPendingTmNode(tmNode, false);
    }
    function handleOptionClick(e, tmNode) {
      if (tmNode.disabled)
        return;
      doToggle(tmNode);
    }
    function handleKeyUp(e) {
      var _a;
      if (happensIn(e, "action"))
        return;
      (_a = props.onKeyup) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleKeyDown(e) {
      var _a;
      if (happensIn(e, "action"))
        return;
      (_a = props.onKeydown) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleMouseDown(e) {
      var _a;
      (_a = props.onMousedown) === null || _a === void 0 ? void 0 : _a.call(props, e);
      if (props.focusable)
        return;
      e.preventDefault();
    }
    function next() {
      const { value: pendingTmNode } = pendingNodeRef;
      if (pendingTmNode) {
        setPendingTmNode(pendingTmNode.getNext({ loop: true }), true);
      }
    }
    function prev() {
      const { value: pendingTmNode } = pendingNodeRef;
      if (pendingTmNode) {
        setPendingTmNode(pendingTmNode.getPrev({ loop: true }), true);
      }
    }
    function setPendingTmNode(tmNode, doScroll2 = false) {
      pendingNodeRef.value = tmNode;
      if (doScroll2)
        scrollToPendingNode();
    }
    function scrollToPendingNode() {
      var _a, _b;
      const tmNode = pendingNodeRef.value;
      if (!tmNode)
        return;
      const fIndex = fIndexGetterRef.value(tmNode.key);
      if (fIndex === null)
        return;
      if (props.virtualScroll) {
        (_a = virtualListRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo({ index: fIndex });
      } else {
        (_b = scrollbarRef.value) === null || _b === void 0 ? void 0 : _b.scrollTo({
          index: fIndex,
          elSize: itemSizeRef.value
        });
      }
    }
    function handleFocusin(e) {
      var _a, _b;
      if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        (_b = props.onFocus) === null || _b === void 0 ? void 0 : _b.call(props, e);
      }
    }
    function handleFocusout(e) {
      var _a, _b;
      if (!((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
        (_b = props.onBlur) === null || _b === void 0 ? void 0 : _b.call(props, e);
      }
    }
    provide(internalSelectionMenuInjectionKey, {
      handleOptionMouseEnter,
      handleOptionClick,
      valueSetRef,
      pendingTmNodeRef: pendingNodeRef,
      nodePropsRef: toRef(props, "nodeProps"),
      showCheckmarkRef: toRef(props, "showCheckmark"),
      multipleRef: toRef(props, "multiple"),
      valueRef: toRef(props, "value"),
      renderLabelRef: toRef(props, "renderLabel"),
      renderOptionRef: toRef(props, "renderOption"),
      labelFieldRef: toRef(props, "labelField"),
      valueFieldRef: toRef(props, "valueField")
    });
    provide(internalSelectionMenuBodyInjectionKey, selfRef);
    onMounted(() => {
      const { value } = scrollbarRef;
      if (value)
        value.sync();
    });
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: { height, borderRadius, color, groupHeaderTextColor, actionDividerColor, optionTextColorPressed, optionTextColor, optionTextColorDisabled, optionTextColorActive, optionOpacityDisabled, optionCheckColor, actionTextColor, optionColorPending, optionColorActive, loadingColor, loadingSize, optionColorActivePending, [createKey("optionFontSize", size)]: fontSize, [createKey("optionHeight", size)]: optionHeight, [createKey("optionPadding", size)]: optionPadding } } = themeRef.value;
      return {
        "--n-height": height,
        "--n-action-divider-color": actionDividerColor,
        "--n-action-text-color": actionTextColor,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-border-radius": borderRadius,
        "--n-color": color,
        "--n-option-font-size": fontSize,
        "--n-group-header-text-color": groupHeaderTextColor,
        "--n-option-check-color": optionCheckColor,
        "--n-option-color-pending": optionColorPending,
        "--n-option-color-active": optionColorActive,
        "--n-option-color-active-pending": optionColorActivePending,
        "--n-option-height": optionHeight,
        "--n-option-opacity-disabled": optionOpacityDisabled,
        "--n-option-text-color": optionTextColor,
        "--n-option-text-color-active": optionTextColorActive,
        "--n-option-text-color-disabled": optionTextColorDisabled,
        "--n-option-text-color-pressed": optionTextColorPressed,
        "--n-option-padding": optionPadding,
        "--n-option-padding-left": getMargin(optionPadding, "left"),
        "--n-option-padding-right": getMargin(optionPadding, "right"),
        "--n-loading-color": loadingColor,
        "--n-loading-size": loadingSize
      };
    });
    const { inlineThemeDisabled } = props;
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("internal-select-menu", computed(() => props.size[0]), cssVarsRef, props) : void 0;
    const exposedProps = {
      selfRef,
      next,
      prev,
      getPendingTmNode
    };
    useOnResize(selfRef, props.onResize);
    return Object.assign({
      mergedTheme: themeRef,
      virtualListRef,
      scrollbarRef,
      itemSize: itemSizeRef,
      padding: paddingRef,
      flattenedNodes: flattenedNodesRef,
      empty: emptyRef,
      virtualListContainer() {
        const { value } = virtualListRef;
        return value === null || value === void 0 ? void 0 : value.listElRef;
      },
      virtualListContent() {
        const { value } = virtualListRef;
        return value === null || value === void 0 ? void 0 : value.itemsElRef;
      },
      doScroll,
      handleFocusin,
      handleFocusout,
      handleKeyUp,
      handleKeyDown,
      handleMouseDown,
      handleVirtualListResize,
      handleVirtualListScroll,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedProps);
  },
  render() {
    const { $slots, virtualScroll, clsPrefix, mergedTheme, themeClass, onRender } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(
      "div",
      { ref: "selfRef", tabindex: this.focusable ? 0 : -1, class: [
        `${clsPrefix}-base-select-menu`,
        themeClass,
        this.multiple && `${clsPrefix}-base-select-menu--multiple`
      ], style: this.cssVars, onFocusin: this.handleFocusin, onFocusout: this.handleFocusout, onKeyup: this.handleKeyUp, onKeydown: this.handleKeyDown, onMousedown: this.handleMouseDown, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave },
      this.loading ? h(
        "div",
        { class: `${clsPrefix}-base-select-menu__loading` },
        h(NBaseLoading, { clsPrefix, strokeWidth: 20 })
      ) : !this.empty ? h(NScrollbar, { ref: "scrollbarRef", theme: mergedTheme.peers.Scrollbar, themeOverrides: mergedTheme.peerOverrides.Scrollbar, scrollable: this.scrollable, container: virtualScroll ? this.virtualListContainer : void 0, content: virtualScroll ? this.virtualListContent : void 0, onScroll: virtualScroll ? void 0 : this.doScroll }, {
        default: () => {
          return virtualScroll ? h(VVirtualList, { ref: "virtualListRef", class: `${clsPrefix}-virtual-list`, items: this.flattenedNodes, itemSize: this.itemSize, showScrollbar: false, paddingTop: this.padding.top, paddingBottom: this.padding.bottom, onResize: this.handleVirtualListResize, onScroll: this.handleVirtualListScroll, itemResizable: true }, {
            default: ({ item: tmNode }) => {
              return tmNode.isGroup ? h(NSelectGroupHeader, { key: tmNode.key, clsPrefix, tmNode }) : tmNode.ignored ? null : h(NSelectOption, { clsPrefix, key: tmNode.key, tmNode });
            }
          }) : h("div", { class: `${clsPrefix}-base-select-menu-option-wrapper`, style: {
            paddingTop: this.padding.top,
            paddingBottom: this.padding.bottom
          } }, this.flattenedNodes.map((tmNode) => tmNode.isGroup ? h(NSelectGroupHeader, { key: tmNode.key, clsPrefix, tmNode }) : h(NSelectOption, { clsPrefix, key: tmNode.key, tmNode })));
        }
      }) : h("div", { class: `${clsPrefix}-base-select-menu__empty`, "data-empty": true }, resolveSlot($slots.empty, () => [
        h(__unplugin_components_9, { theme: mergedTheme.peers.Empty, themeOverrides: mergedTheme.peerOverrides.Empty })
      ])),
      resolveWrappedSlot($slots.action, (children) => children && [
        h("div", { class: `${clsPrefix}-base-select-menu__action`, "data-action": true, key: "action" }, children),
        h(FocusDetector, { onFocus: this.onTabOut, key: "focus-detector" })
      ])
    );
  }
});
const commonVariables$2 = {
  closeIconSizeTiny: "12px",
  closeIconSizeSmall: "12px",
  closeIconSizeMedium: "14px",
  closeIconSizeLarge: "14px",
  closeSizeTiny: "16px",
  closeSizeSmall: "16px",
  closeSizeMedium: "18px",
  closeSizeLarge: "18px",
  padding: "0 7px",
  closeMargin: "0 0 0 4px",
  closeMarginRtl: "0 4px 0 0"
};
const self$g = (vars) => {
  const { textColor2, primaryColorHover, primaryColorPressed, primaryColor, infoColor, successColor, warningColor, errorColor, baseColor, borderColor, opacityDisabled, tagColor, closeIconColor, closeIconColorHover, closeIconColorPressed, borderRadiusSmall: borderRadius, fontSizeMini, fontSizeTiny, fontSizeSmall, fontSizeMedium, heightMini, heightTiny, heightSmall, heightMedium, closeColorHover, closeColorPressed, buttonColor2Hover, buttonColor2Pressed, fontWeightStrong } = vars;
  return Object.assign(Object.assign({}, commonVariables$2), {
    closeBorderRadius: borderRadius,
    heightTiny: heightMini,
    heightSmall: heightTiny,
    heightMedium: heightSmall,
    heightLarge: heightMedium,
    borderRadius,
    opacityDisabled,
    fontSizeTiny: fontSizeMini,
    fontSizeSmall: fontSizeTiny,
    fontSizeMedium: fontSizeSmall,
    fontSizeLarge: fontSizeMedium,
    fontWeightStrong,
    // checked
    textColorCheckable: textColor2,
    textColorHoverCheckable: textColor2,
    textColorPressedCheckable: textColor2,
    textColorChecked: baseColor,
    colorCheckable: "#0000",
    colorHoverCheckable: buttonColor2Hover,
    colorPressedCheckable: buttonColor2Pressed,
    colorChecked: primaryColor,
    colorCheckedHover: primaryColorHover,
    colorCheckedPressed: primaryColorPressed,
    // default
    border: `1px solid ${borderColor}`,
    textColor: textColor2,
    color: tagColor,
    colorBordered: "rgb(250, 250, 252)",
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    borderPrimary: `1px solid ${changeColor(primaryColor, { alpha: 0.3 })}`,
    textColorPrimary: primaryColor,
    colorPrimary: changeColor(primaryColor, { alpha: 0.12 }),
    colorBorderedPrimary: changeColor(primaryColor, { alpha: 0.1 }),
    closeIconColorPrimary: primaryColor,
    closeIconColorHoverPrimary: primaryColor,
    closeIconColorPressedPrimary: primaryColor,
    closeColorHoverPrimary: changeColor(primaryColor, { alpha: 0.12 }),
    closeColorPressedPrimary: changeColor(primaryColor, { alpha: 0.18 }),
    borderInfo: `1px solid ${changeColor(infoColor, { alpha: 0.3 })}`,
    textColorInfo: infoColor,
    colorInfo: changeColor(infoColor, { alpha: 0.12 }),
    colorBorderedInfo: changeColor(infoColor, { alpha: 0.1 }),
    closeIconColorInfo: infoColor,
    closeIconColorHoverInfo: infoColor,
    closeIconColorPressedInfo: infoColor,
    closeColorHoverInfo: changeColor(infoColor, { alpha: 0.12 }),
    closeColorPressedInfo: changeColor(infoColor, { alpha: 0.18 }),
    borderSuccess: `1px solid ${changeColor(successColor, { alpha: 0.3 })}`,
    textColorSuccess: successColor,
    colorSuccess: changeColor(successColor, { alpha: 0.12 }),
    colorBorderedSuccess: changeColor(successColor, { alpha: 0.1 }),
    closeIconColorSuccess: successColor,
    closeIconColorHoverSuccess: successColor,
    closeIconColorPressedSuccess: successColor,
    closeColorHoverSuccess: changeColor(successColor, { alpha: 0.12 }),
    closeColorPressedSuccess: changeColor(successColor, { alpha: 0.18 }),
    borderWarning: `1px solid ${changeColor(warningColor, { alpha: 0.35 })}`,
    textColorWarning: warningColor,
    colorWarning: changeColor(warningColor, { alpha: 0.15 }),
    colorBorderedWarning: changeColor(warningColor, { alpha: 0.12 }),
    closeIconColorWarning: warningColor,
    closeIconColorHoverWarning: warningColor,
    closeIconColorPressedWarning: warningColor,
    closeColorHoverWarning: changeColor(warningColor, { alpha: 0.12 }),
    closeColorPressedWarning: changeColor(warningColor, { alpha: 0.18 }),
    borderError: `1px solid ${changeColor(errorColor, { alpha: 0.23 })}`,
    textColorError: errorColor,
    colorError: changeColor(errorColor, { alpha: 0.1 }),
    colorBorderedError: changeColor(errorColor, { alpha: 0.08 }),
    closeIconColorError: errorColor,
    closeIconColorHoverError: errorColor,
    closeIconColorPressedError: errorColor,
    closeColorHoverError: changeColor(errorColor, { alpha: 0.12 }),
    closeColorPressedError: changeColor(errorColor, { alpha: 0.18 })
  });
};
const tagLight = {
  name: "Tag",
  common: commonLight,
  self: self$g
};
const tagLight$1 = tagLight;
const commonProps = {
  color: Object,
  type: {
    type: String,
    default: "default"
  },
  round: Boolean,
  size: {
    type: String,
    default: "medium"
  },
  closable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  }
};
const style$j = cB("tag", `
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`, [cM("strong", `
 font-weight: var(--n-font-weight-strong);
 `), cE("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), cE("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), cE("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), cE("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), cM("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [cE("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), cE("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), cM("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), cM("icon, avatar", [cM("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), cM("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), cM("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [cNotM("disabled", [c$1("&:hover", "background-color: var(--n-color-hover-checkable);", [cNotM("checked", "color: var(--n-text-color-hover-checkable);")]), c$1("&:active", "background-color: var(--n-color-pressed-checkable);", [cNotM("checked", "color: var(--n-text-color-pressed-checkable);")])]), cM("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [cNotM("disabled", [c$1("&:hover", "background-color: var(--n-color-checked-hover);"), c$1("&:active", "background-color: var(--n-color-checked-pressed);")])])])]);
const tagProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), commonProps), {
  bordered: {
    type: Boolean,
    default: void 0
  },
  checked: Boolean,
  checkable: Boolean,
  strong: Boolean,
  triggerClickOnClose: Boolean,
  onClose: [Array, Function],
  onMouseenter: Function,
  onMouseleave: Function,
  "onUpdate:checked": Function,
  onUpdateChecked: Function,
  // private
  internalCloseFocusable: {
    type: Boolean,
    default: true
  },
  internalCloseIsButtonTag: {
    type: Boolean,
    default: true
  },
  // deprecated
  onCheckedChange: Function
});
const tagInjectionKey = createInjectionKey("n-tag");
const __unplugin_components_0$4 = defineComponent({
  name: "Tag",
  props: tagProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.onCheckedChange !== void 0) {
          warnOnce("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
        }
      });
    }
    const contentRef = ref(null);
    const { mergedBorderedRef, mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Tag", "-tag", style$j, tagLight$1, props, mergedClsPrefixRef);
    provide(tagInjectionKey, {
      roundRef: toRef(props, "round")
    });
    function handleClick(e) {
      if (!props.disabled) {
        if (props.checkable) {
          const { checked, onCheckedChange, onUpdateChecked, "onUpdate:checked": _onUpdateChecked } = props;
          if (onUpdateChecked)
            onUpdateChecked(!checked);
          if (_onUpdateChecked)
            _onUpdateChecked(!checked);
          if (onCheckedChange)
            onCheckedChange(!checked);
        }
      }
    }
    function handleCloseClick(e) {
      if (!props.triggerClickOnClose) {
        e.stopPropagation();
      }
      if (!props.disabled) {
        const { onClose } = props;
        if (onClose)
          call(onClose, e);
      }
    }
    const tagPublicMethods = {
      setTextContent(textContent) {
        const { value } = contentRef;
        if (value)
          value.textContent = textContent;
      }
    };
    const rtlEnabledRef = useRtl("Tag", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { type, size, color: { color, textColor } = {} } = props;
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: { padding, closeMargin, closeMarginRtl, borderRadius, opacityDisabled, textColorCheckable, textColorHoverCheckable, textColorPressedCheckable, textColorChecked, colorCheckable, colorHoverCheckable, colorPressedCheckable, colorChecked, colorCheckedHover, colorCheckedPressed, closeBorderRadius, fontWeightStrong, [createKey("colorBordered", type)]: colorBordered, [createKey("closeSize", size)]: closeSize, [createKey("closeIconSize", size)]: closeIconSize, [createKey("fontSize", size)]: fontSize, [createKey("height", size)]: height, [createKey("color", type)]: typedColor, [createKey("textColor", type)]: typeTextColor, [createKey("border", type)]: border, [createKey("closeIconColor", type)]: closeIconColor, [createKey("closeIconColorHover", type)]: closeIconColorHover, [createKey("closeIconColorPressed", type)]: closeIconColorPressed, [createKey("closeColorHover", type)]: closeColorHover, [createKey("closeColorPressed", type)]: closeColorPressed } } = themeRef.value;
      return {
        "--n-font-weight-strong": fontWeightStrong,
        "--n-avatar-size-override": `calc(${height} - 8px)`,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-border-radius": borderRadius,
        "--n-border": border,
        "--n-close-icon-size": closeIconSize,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-color-hover": closeColorHover,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-close-icon-color-disabled": closeIconColor,
        "--n-close-margin": closeMargin,
        "--n-close-margin-rtl": closeMarginRtl,
        "--n-close-size": closeSize,
        "--n-color": color || (mergedBorderedRef.value ? colorBordered : typedColor),
        "--n-color-checkable": colorCheckable,
        "--n-color-checked": colorChecked,
        "--n-color-checked-hover": colorCheckedHover,
        "--n-color-checked-pressed": colorCheckedPressed,
        "--n-color-hover-checkable": colorHoverCheckable,
        "--n-color-pressed-checkable": colorPressedCheckable,
        "--n-font-size": fontSize,
        "--n-height": height,
        "--n-opacity-disabled": opacityDisabled,
        "--n-padding": padding,
        "--n-text-color": textColor || typeTextColor,
        "--n-text-color-checkable": textColorCheckable,
        "--n-text-color-checked": textColorChecked,
        "--n-text-color-hover-checkable": textColorHoverCheckable,
        "--n-text-color-pressed-checkable": textColorPressedCheckable
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("tag", computed(() => {
      let hash = "";
      const { type, size, color: { color, textColor } = {} } = props;
      hash += type[0];
      hash += size[0];
      if (color) {
        hash += `a${color2Class(color)}`;
      }
      if (textColor) {
        hash += `b${color2Class(textColor)}`;
      }
      if (mergedBorderedRef.value) {
        hash += "c";
      }
      return hash;
    }), cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, tagPublicMethods), {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      contentRef,
      mergedBordered: mergedBorderedRef,
      handleClick,
      handleCloseClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a, _b;
    const { mergedClsPrefix, rtlEnabled, closable, color: { borderColor } = {}, round: round2, onRender, $slots } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const avatarNode = resolveWrappedSlot($slots.avatar, (children) => children && h("div", { class: `${mergedClsPrefix}-tag__avatar` }, children));
    const iconNode = resolveWrappedSlot($slots.icon, (children) => children && h("div", { class: `${mergedClsPrefix}-tag__icon` }, children));
    return h(
      "div",
      { class: [
        `${mergedClsPrefix}-tag`,
        this.themeClass,
        {
          [`${mergedClsPrefix}-tag--rtl`]: rtlEnabled,
          [`${mergedClsPrefix}-tag--strong`]: this.strong,
          [`${mergedClsPrefix}-tag--disabled`]: this.disabled,
          [`${mergedClsPrefix}-tag--checkable`]: this.checkable,
          [`${mergedClsPrefix}-tag--checked`]: this.checkable && this.checked,
          [`${mergedClsPrefix}-tag--round`]: round2,
          [`${mergedClsPrefix}-tag--avatar`]: avatarNode,
          [`${mergedClsPrefix}-tag--icon`]: iconNode,
          [`${mergedClsPrefix}-tag--closable`]: closable
        }
      ], style: this.cssVars, onClick: this.handleClick, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave },
      iconNode || avatarNode,
      h("span", { class: `${mergedClsPrefix}-tag__content`, ref: "contentRef" }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)),
      !this.checkable && closable ? h(NBaseClose, { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-tag__close`, disabled: this.disabled, onClick: this.handleCloseClick, focusable: this.internalCloseFocusable, round: round2, isButtonTag: this.internalCloseIsButtonTag, absolute: true }) : null,
      !this.checkable && this.mergedBordered ? h("div", { class: `${mergedClsPrefix}-tag__border`, style: { borderColor } }) : null
    );
  }
});
const commonVars$3 = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
const self$f = (vars) => {
  const { borderRadius, textColor2, textColorDisabled, inputColor, inputColorDisabled, primaryColor, primaryColorHover, warningColor, warningColorHover, errorColor, errorColorHover, borderColor, iconColor, iconColorDisabled, clearColor, clearColorHover, clearColorPressed, placeholderColor, placeholderColorDisabled, fontSizeTiny, fontSizeSmall, fontSizeMedium, fontSizeLarge, heightTiny, heightSmall, heightMedium, heightLarge } = vars;
  return Object.assign(Object.assign({}, commonVars$3), {
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    borderRadius,
    // default
    textColor: textColor2,
    textColorDisabled,
    placeholderColor,
    placeholderColorDisabled,
    color: inputColor,
    colorDisabled: inputColorDisabled,
    colorActive: inputColor,
    border: `1px solid ${borderColor}`,
    borderHover: `1px solid ${primaryColorHover}`,
    borderActive: `1px solid ${primaryColor}`,
    borderFocus: `1px solid ${primaryColorHover}`,
    boxShadowHover: "none",
    boxShadowActive: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    caretColor: primaryColor,
    arrowColor: iconColor,
    arrowColorDisabled: iconColorDisabled,
    loadingColor: primaryColor,
    // warning
    borderWarning: `1px solid ${warningColor}`,
    borderHoverWarning: `1px solid ${warningColorHover}`,
    borderActiveWarning: `1px solid ${warningColor}`,
    borderFocusWarning: `1px solid ${warningColorHover}`,
    boxShadowHoverWarning: "none",
    boxShadowActiveWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    boxShadowFocusWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    colorActiveWarning: inputColor,
    caretColorWarning: warningColor,
    // error
    borderError: `1px solid ${errorColor}`,
    borderHoverError: `1px solid ${errorColorHover}`,
    borderActiveError: `1px solid ${errorColor}`,
    borderFocusError: `1px solid ${errorColorHover}`,
    boxShadowHoverError: "none",
    boxShadowActiveError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    colorActiveError: inputColor,
    caretColorError: errorColor,
    clearColor,
    clearColorHover,
    clearColorPressed
  });
};
const internalSelectionLight = createTheme({
  name: "InternalSelection",
  common: commonLight,
  peers: {
    Popover: popoverLight
  },
  self: self$f
});
const internalSelectionLight$1 = internalSelectionLight;
const style$i = c$1([cB("base-selection", `
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `, [cB("base-loading", `
 color: var(--n-loading-color);
 `), cB("base-selection-tags", "min-height: var(--n-height);"), cE("border, state-border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), cE("state-border", `
 z-index: 1;
 border-color: #0000;
 `), cB("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [cE("arrow", `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), cB("base-selection-overlay", `
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `, [cE("wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), cB("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [cE("inner", `
 max-width: 100%;
 overflow: hidden;
 `)]), cB("base-selection-tags", `
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB("base-selection-label", `
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `, [cB("base-selection-input", `
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `, [cE("content", `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), cE("render-label", `
 color: var(--n-text-color);
 `)]), cNotM("disabled", [c$1("&:hover", [cE("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), cM("focus", [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), cM("active", [cE("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), cB("base-selection-label", "background-color: var(--n-color-active);"), cB("base-selection-tags", "background-color: var(--n-color-active);")])]), cM("disabled", "cursor: not-allowed;", [cE("arrow", `
 color: var(--n-arrow-color-disabled);
 `), cB("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [cB("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), cE("render-label", `
 color: var(--n-text-color-disabled);
 `)]), cB("base-selection-tags", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), cB("base-selection-placeholder", `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), cB("base-selection-input-tag", `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [cE("input", `
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `), cE("mirror", `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ["warning", "error"].map((status) => cM(`${status}-status`, [cE("state-border", `border: var(--n-border-${status});`), cNotM("disabled", [c$1("&:hover", [cE("state-border", `
 box-shadow: var(--n-box-shadow-hover-${status});
 border: var(--n-border-hover-${status});
 `)]), cM("active", [cE("state-border", `
 box-shadow: var(--n-box-shadow-active-${status});
 border: var(--n-border-active-${status});
 `), cB("base-selection-label", `background-color: var(--n-color-active-${status});`), cB("base-selection-tags", `background-color: var(--n-color-active-${status});`)]), cM("focus", [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)])])]))]), cB("base-selection-popover", `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), cB("base-selection-tag-wrapper", `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [c$1("&:last-child", "padding-right: 0;"), cB("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [cE("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]);
const NInternalSelection = defineComponent({
  name: "InternalSelection",
  props: Object.assign(Object.assign({}, useTheme.props), { clsPrefix: {
    type: String,
    required: true
  }, bordered: {
    type: Boolean,
    default: void 0
  }, active: Boolean, pattern: {
    type: String,
    default: ""
  }, placeholder: String, selectedOption: {
    type: Object,
    default: null
  }, selectedOptions: {
    type: Array,
    default: null
  }, labelField: { type: String, default: "label" }, valueField: {
    type: String,
    default: "value"
  }, multiple: Boolean, filterable: Boolean, clearable: Boolean, disabled: Boolean, size: {
    type: String,
    default: "medium"
  }, loading: Boolean, autofocus: Boolean, showArrow: {
    type: Boolean,
    default: true
  }, inputProps: Object, focused: Boolean, renderTag: Function, onKeydown: Function, onClick: Function, onBlur: Function, onFocus: Function, onDeleteOption: Function, maxTagCount: [String, Number], onClear: Function, onPatternInput: Function, onPatternFocus: Function, onPatternBlur: Function, renderLabel: Function, status: String, inlineThemeDisabled: Boolean, ignoreComposition: { type: Boolean, default: true }, onResize: Function }),
  setup(props) {
    const patternInputMirrorRef = ref(null);
    const patternInputRef = ref(null);
    const selfRef = ref(null);
    const multipleElRef = ref(null);
    const singleElRef = ref(null);
    const patternInputWrapperRef = ref(null);
    const counterRef = ref(null);
    const counterWrapperRef = ref(null);
    const overflowRef = ref(null);
    const inputTagElRef = ref(null);
    const showTagsPopoverRef = ref(false);
    const patternInputFocusedRef = ref(false);
    const hoverRef = ref(false);
    const themeRef = useTheme("InternalSelection", "-internal-selection", style$i, internalSelectionLight$1, props, toRef(props, "clsPrefix"));
    const mergedClearableRef = computed(() => {
      return props.clearable && !props.disabled && (hoverRef.value || props.active);
    });
    const filterablePlaceholderRef = computed(() => {
      return props.selectedOption ? props.renderTag ? props.renderTag({
        option: props.selectedOption,
        handleClose: () => {
        }
      }) : props.renderLabel ? props.renderLabel(props.selectedOption, true) : render(props.selectedOption[props.labelField], props.selectedOption, true) : props.placeholder;
    });
    const labelRef = computed(() => {
      const option = props.selectedOption;
      if (!option)
        return void 0;
      return option[props.labelField];
    });
    const selectedRef = computed(() => {
      if (props.multiple) {
        return !!(Array.isArray(props.selectedOptions) && props.selectedOptions.length);
      } else {
        return props.selectedOption !== null;
      }
    });
    function syncMirrorWidth() {
      var _a;
      const { value: patternInputMirrorEl } = patternInputMirrorRef;
      if (patternInputMirrorEl) {
        const { value: patternInputEl } = patternInputRef;
        if (patternInputEl) {
          patternInputEl.style.width = `${patternInputMirrorEl.offsetWidth}px`;
          if (props.maxTagCount !== "responsive") {
            (_a = overflowRef.value) === null || _a === void 0 ? void 0 : _a.sync();
          }
        }
      }
    }
    function hideInputTag() {
      const { value: inputTagEl } = inputTagElRef;
      if (inputTagEl)
        inputTagEl.style.display = "none";
    }
    function showInputTag() {
      const { value: inputTagEl } = inputTagElRef;
      if (inputTagEl)
        inputTagEl.style.display = "inline-block";
    }
    watch(toRef(props, "active"), (value) => {
      if (!value)
        hideInputTag();
    });
    watch(toRef(props, "pattern"), () => {
      if (props.multiple) {
        void nextTick(syncMirrorWidth);
      }
    });
    function doFocus(e) {
      const { onFocus } = props;
      if (onFocus)
        onFocus(e);
    }
    function doBlur(e) {
      const { onBlur } = props;
      if (onBlur)
        onBlur(e);
    }
    function doDeleteOption(value) {
      const { onDeleteOption } = props;
      if (onDeleteOption)
        onDeleteOption(value);
    }
    function doClear(e) {
      const { onClear } = props;
      if (onClear)
        onClear(e);
    }
    function doPatternInput(value) {
      const { onPatternInput } = props;
      if (onPatternInput)
        onPatternInput(value);
    }
    function handleFocusin(e) {
      var _a;
      if (!e.relatedTarget || !((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
        doFocus(e);
      }
    }
    function handleFocusout(e) {
      var _a;
      if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))
        return;
      doBlur(e);
    }
    function handleClear(e) {
      doClear(e);
    }
    function handleMouseEnter() {
      hoverRef.value = true;
    }
    function handleMouseLeave() {
      hoverRef.value = false;
    }
    function handleMouseDown(e) {
      if (!props.active || !props.filterable)
        return;
      if (e.target === patternInputRef.value)
        return;
      e.preventDefault();
    }
    function handleDeleteOption(option) {
      doDeleteOption(option);
    }
    function handlePatternKeyDown(e) {
      if (e.key === "Backspace" && !isComposingRef2.value) {
        if (!props.pattern.length) {
          const { selectedOptions } = props;
          if (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) {
            handleDeleteOption(selectedOptions[selectedOptions.length - 1]);
          }
        }
      }
    }
    const isComposingRef2 = ref(false);
    let cachedInputEvent = null;
    function handlePatternInputInput(e) {
      const { value: patternInputMirrorEl } = patternInputMirrorRef;
      if (patternInputMirrorEl) {
        const inputText = e.target.value;
        patternInputMirrorEl.textContent = inputText;
        syncMirrorWidth();
      }
      if (props.ignoreComposition) {
        if (!isComposingRef2.value) {
          doPatternInput(e);
        } else {
          cachedInputEvent = e;
        }
      } else {
        doPatternInput(e);
      }
    }
    function handleCompositionStart() {
      isComposingRef2.value = true;
    }
    function handleCompositionEnd() {
      isComposingRef2.value = false;
      if (props.ignoreComposition) {
        doPatternInput(cachedInputEvent);
      }
      cachedInputEvent = null;
    }
    function handlePatternInputFocus(e) {
      var _a;
      patternInputFocusedRef.value = true;
      (_a = props.onPatternFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handlePatternInputBlur(e) {
      var _a;
      patternInputFocusedRef.value = false;
      (_a = props.onPatternBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function blur() {
      var _a, _b;
      if (props.filterable) {
        patternInputFocusedRef.value = false;
        (_a = patternInputWrapperRef.value) === null || _a === void 0 ? void 0 : _a.blur();
        (_b = patternInputRef.value) === null || _b === void 0 ? void 0 : _b.blur();
      } else if (props.multiple) {
        const { value: multipleEl } = multipleElRef;
        multipleEl === null || multipleEl === void 0 ? void 0 : multipleEl.blur();
      } else {
        const { value: singleEl } = singleElRef;
        singleEl === null || singleEl === void 0 ? void 0 : singleEl.blur();
      }
    }
    function focus() {
      var _a, _b, _c;
      if (props.filterable) {
        patternInputFocusedRef.value = false;
        (_a = patternInputWrapperRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      } else if (props.multiple) {
        (_b = multipleElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
      } else {
        (_c = singleElRef.value) === null || _c === void 0 ? void 0 : _c.focus();
      }
    }
    function focusInput() {
      const { value: patternInputEl } = patternInputRef;
      if (patternInputEl) {
        showInputTag();
        patternInputEl.focus();
      }
    }
    function blurInput() {
      const { value: patternInputEl } = patternInputRef;
      if (patternInputEl) {
        patternInputEl.blur();
      }
    }
    function updateCounter(count) {
      const { value } = counterRef;
      if (value) {
        value.setTextContent(`+${count}`);
      }
    }
    function getCounter() {
      const { value } = counterWrapperRef;
      return value;
    }
    function getTail() {
      return patternInputRef.value;
    }
    let enterTimerId = null;
    function clearEnterTimer() {
      if (enterTimerId !== null)
        window.clearTimeout(enterTimerId);
    }
    function handleMouseEnterCounter() {
      if (props.disabled || props.active)
        return;
      clearEnterTimer();
      enterTimerId = window.setTimeout(() => {
        if (selectedRef.value) {
          showTagsPopoverRef.value = true;
        }
      }, 100);
    }
    function handleMouseLeaveCounter() {
      clearEnterTimer();
    }
    function onPopoverUpdateShow(show) {
      if (!show) {
        clearEnterTimer();
        showTagsPopoverRef.value = false;
      }
    }
    watch(selectedRef, (value) => {
      if (!value) {
        showTagsPopoverRef.value = false;
      }
    });
    onMounted(() => {
      watchEffect(() => {
        const patternInputWrapperEl = patternInputWrapperRef.value;
        if (!patternInputWrapperEl)
          return;
        patternInputWrapperEl.tabIndex = props.disabled || patternInputFocusedRef.value ? -1 : 0;
      });
    });
    useOnResize(selfRef, props.onResize);
    const { inlineThemeDisabled } = props;
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: {
        borderRadius,
        color,
        placeholderColor,
        textColor,
        paddingSingle,
        paddingMultiple,
        caretColor,
        colorDisabled,
        textColorDisabled,
        placeholderColorDisabled,
        colorActive,
        boxShadowFocus,
        boxShadowActive,
        boxShadowHover,
        border,
        borderFocus,
        borderHover,
        borderActive,
        arrowColor,
        arrowColorDisabled,
        loadingColor,
        // form warning
        colorActiveWarning,
        boxShadowFocusWarning,
        boxShadowActiveWarning,
        boxShadowHoverWarning,
        borderWarning,
        borderFocusWarning,
        borderHoverWarning,
        borderActiveWarning,
        // form error
        colorActiveError,
        boxShadowFocusError,
        boxShadowActiveError,
        boxShadowHoverError,
        borderError,
        borderFocusError,
        borderHoverError,
        borderActiveError,
        // clear
        clearColor,
        clearColorHover,
        clearColorPressed,
        clearSize,
        // arrow
        arrowSize,
        [createKey("height", size)]: height,
        [createKey("fontSize", size)]: fontSize
      } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-border": border,
        "--n-border-active": borderActive,
        "--n-border-focus": borderFocus,
        "--n-border-hover": borderHover,
        "--n-border-radius": borderRadius,
        "--n-box-shadow-active": boxShadowActive,
        "--n-box-shadow-focus": boxShadowFocus,
        "--n-box-shadow-hover": boxShadowHover,
        "--n-caret-color": caretColor,
        "--n-color": color,
        "--n-color-active": colorActive,
        "--n-color-disabled": colorDisabled,
        "--n-font-size": fontSize,
        "--n-height": height,
        "--n-padding-single": paddingSingle,
        "--n-padding-multiple": paddingMultiple,
        "--n-placeholder-color": placeholderColor,
        "--n-placeholder-color-disabled": placeholderColorDisabled,
        "--n-text-color": textColor,
        "--n-text-color-disabled": textColorDisabled,
        "--n-arrow-color": arrowColor,
        "--n-arrow-color-disabled": arrowColorDisabled,
        "--n-loading-color": loadingColor,
        // form warning
        "--n-color-active-warning": colorActiveWarning,
        "--n-box-shadow-focus-warning": boxShadowFocusWarning,
        "--n-box-shadow-active-warning": boxShadowActiveWarning,
        "--n-box-shadow-hover-warning": boxShadowHoverWarning,
        "--n-border-warning": borderWarning,
        "--n-border-focus-warning": borderFocusWarning,
        "--n-border-hover-warning": borderHoverWarning,
        "--n-border-active-warning": borderActiveWarning,
        // form error
        "--n-color-active-error": colorActiveError,
        "--n-box-shadow-focus-error": boxShadowFocusError,
        "--n-box-shadow-active-error": boxShadowActiveError,
        "--n-box-shadow-hover-error": boxShadowHoverError,
        "--n-border-error": borderError,
        "--n-border-focus-error": borderFocusError,
        "--n-border-hover-error": borderHoverError,
        "--n-border-active-error": borderActiveError,
        // clear
        "--n-clear-size": clearSize,
        "--n-clear-color": clearColor,
        "--n-clear-color-hover": clearColorHover,
        "--n-clear-color-pressed": clearColorPressed,
        // arrow-size
        "--n-arrow-size": arrowSize
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("internal-selection", computed(() => {
      return props.size[0];
    }), cssVarsRef, props) : void 0;
    return {
      mergedTheme: themeRef,
      mergedClearable: mergedClearableRef,
      patternInputFocused: patternInputFocusedRef,
      filterablePlaceholder: filterablePlaceholderRef,
      label: labelRef,
      selected: selectedRef,
      showTagsPanel: showTagsPopoverRef,
      isComposing: isComposingRef2,
      // dom ref
      counterRef,
      counterWrapperRef,
      patternInputMirrorRef,
      patternInputRef,
      selfRef,
      multipleElRef,
      singleElRef,
      patternInputWrapperRef,
      overflowRef,
      inputTagElRef,
      handleMouseDown,
      handleFocusin,
      handleClear,
      handleMouseEnter,
      handleMouseLeave,
      handleDeleteOption,
      handlePatternKeyDown,
      handlePatternInputInput,
      handlePatternInputBlur,
      handlePatternInputFocus,
      handleMouseEnterCounter,
      handleMouseLeaveCounter,
      handleFocusout,
      handleCompositionEnd,
      handleCompositionStart,
      onPopoverUpdateShow,
      focus,
      focusInput,
      blur,
      blurInput,
      updateCounter,
      getCounter,
      getTail,
      renderLabel: props.renderLabel,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const { status, multiple, size, disabled, filterable, maxTagCount, bordered, clsPrefix, onRender, renderTag, renderLabel } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const maxTagCountResponsive = maxTagCount === "responsive";
    const maxTagCountNumeric = typeof maxTagCount === "number";
    const useMaxTagCount = maxTagCountResponsive || maxTagCountNumeric;
    const suffix = h(Wrapper, null, {
      default: () => h(NBaseSuffix, { clsPrefix, loading: this.loading, showArrow: this.showArrow, showClear: this.mergedClearable && this.selected, onClear: this.handleClear }, {
        default: () => {
          var _a, _b;
          return (_b = (_a = this.$slots).arrow) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      })
    });
    let body;
    if (multiple) {
      const { labelField } = this;
      const createTag = (option) => h("div", { class: `${clsPrefix}-base-selection-tag-wrapper`, key: option.value }, renderTag ? renderTag({
        option,
        handleClose: () => {
          this.handleDeleteOption(option);
        }
      }) : h(__unplugin_components_0$4, { size, closable: !option.disabled, disabled, onClose: () => {
        this.handleDeleteOption(option);
      }, internalCloseIsButtonTag: false, internalCloseFocusable: false }, {
        default: () => renderLabel ? renderLabel(option, true) : render(option[labelField], option, true)
      }));
      const createOriginalTagNodes = () => (maxTagCountNumeric ? this.selectedOptions.slice(0, maxTagCount) : this.selectedOptions).map(createTag);
      const input = filterable ? h(
        "div",
        { class: `${clsPrefix}-base-selection-input-tag`, ref: "inputTagElRef", key: "__input-tag__" },
        h("input", Object.assign({}, this.inputProps, { ref: "patternInputRef", tabindex: -1, disabled, value: this.pattern, autofocus: this.autofocus, class: `${clsPrefix}-base-selection-input-tag__input`, onBlur: this.handlePatternInputBlur, onFocus: this.handlePatternInputFocus, onKeydown: this.handlePatternKeyDown, onInput: this.handlePatternInputInput, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd })),
        h("span", { ref: "patternInputMirrorRef", class: `${clsPrefix}-base-selection-input-tag__mirror` }, this.pattern)
      ) : null;
      const renderCounter = maxTagCountResponsive ? () => h(
        "div",
        { class: `${clsPrefix}-base-selection-tag-wrapper`, ref: "counterWrapperRef" },
        h(__unplugin_components_0$4, { size, ref: "counterRef", onMouseenter: this.handleMouseEnterCounter, onMouseleave: this.handleMouseLeaveCounter, disabled })
      ) : void 0;
      let counter;
      if (maxTagCountNumeric) {
        const rest = this.selectedOptions.length - maxTagCount;
        if (rest > 0) {
          counter = h(
            "div",
            { class: `${clsPrefix}-base-selection-tag-wrapper`, key: "__counter__" },
            h(__unplugin_components_0$4, { size, ref: "counterRef", onMouseenter: this.handleMouseEnterCounter, disabled }, {
              default: () => `+${rest}`
            })
          );
        }
      }
      const tags = maxTagCountResponsive ? filterable ? h(VOverflow, { ref: "overflowRef", updateCounter: this.updateCounter, getCounter: this.getCounter, getTail: this.getTail, style: {
        width: "100%",
        display: "flex",
        overflow: "hidden"
      } }, {
        default: createOriginalTagNodes,
        counter: renderCounter,
        tail: () => input
      }) : h(VOverflow, { ref: "overflowRef", updateCounter: this.updateCounter, getCounter: this.getCounter, style: {
        width: "100%",
        display: "flex",
        overflow: "hidden"
      } }, {
        default: createOriginalTagNodes,
        counter: renderCounter
      }) : maxTagCountNumeric ? createOriginalTagNodes().concat(counter) : createOriginalTagNodes();
      const renderPopover = useMaxTagCount ? () => h("div", { class: `${clsPrefix}-base-selection-popover` }, maxTagCountResponsive ? createOriginalTagNodes() : this.selectedOptions.map(createTag)) : void 0;
      const popoverProps = useMaxTagCount ? {
        show: this.showTagsPanel,
        trigger: "hover",
        overlap: true,
        placement: "top",
        width: "trigger",
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      } : null;
      const showPlaceholder = this.selected ? false : this.active ? !this.pattern && !this.isComposing : true;
      const placeholder = showPlaceholder ? h(
        "div",
        { class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay` },
        h("div", { class: `${clsPrefix}-base-selection-placeholder__inner` }, this.placeholder)
      ) : null;
      const popoverTrigger = filterable ? h(
        "div",
        { ref: "patternInputWrapperRef", class: `${clsPrefix}-base-selection-tags` },
        tags,
        maxTagCountResponsive ? null : input,
        suffix
      ) : h(
        "div",
        { ref: "multipleElRef", class: `${clsPrefix}-base-selection-tags`, tabindex: disabled ? void 0 : 0 },
        tags,
        suffix
      );
      body = h(
        Fragment,
        null,
        useMaxTagCount ? h(__unplugin_components_12, Object.assign({}, popoverProps, { scrollable: true, style: "max-height: calc(var(--v-target-height) * 6.6);" }), {
          trigger: () => popoverTrigger,
          default: renderPopover
        }) : popoverTrigger,
        placeholder
      );
    } else {
      if (filterable) {
        const hasInput = this.pattern || this.isComposing;
        const showPlaceholder = this.active ? !hasInput : !this.selected;
        const showSelectedLabel = this.active ? false : this.selected;
        body = h(
          "div",
          { ref: "patternInputWrapperRef", class: `${clsPrefix}-base-selection-label` },
          h("input", Object.assign({}, this.inputProps, { ref: "patternInputRef", class: `${clsPrefix}-base-selection-input`, value: this.active ? this.pattern : "", placeholder: "", readonly: disabled, disabled, tabindex: -1, autofocus: this.autofocus, onFocus: this.handlePatternInputFocus, onBlur: this.handlePatternInputBlur, onInput: this.handlePatternInputInput, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd })),
          showSelectedLabel ? h(
            "div",
            { class: `${clsPrefix}-base-selection-label__render-label ${clsPrefix}-base-selection-overlay`, key: "input" },
            h("div", { class: `${clsPrefix}-base-selection-overlay__wrapper` }, renderTag ? renderTag({
              option: this.selectedOption,
              handleClose: () => {
              }
            }) : renderLabel ? renderLabel(this.selectedOption, true) : render(this.label, this.selectedOption, true))
          ) : null,
          showPlaceholder ? h(
            "div",
            { class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`, key: "placeholder" },
            h("div", { class: `${clsPrefix}-base-selection-overlay__wrapper` }, this.filterablePlaceholder)
          ) : null,
          suffix
        );
      } else {
        body = h(
          "div",
          { ref: "singleElRef", class: `${clsPrefix}-base-selection-label`, tabindex: this.disabled ? void 0 : 0 },
          this.label !== void 0 ? h(
            "div",
            { class: `${clsPrefix}-base-selection-input`, title: getTitleAttribute(this.label), key: "input" },
            h("div", { class: `${clsPrefix}-base-selection-input__content` }, renderTag ? renderTag({
              option: this.selectedOption,
              handleClose: () => {
              }
            }) : renderLabel ? renderLabel(this.selectedOption, true) : render(this.label, this.selectedOption, true))
          ) : h(
            "div",
            { class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`, key: "placeholder" },
            h("div", { class: `${clsPrefix}-base-selection-placeholder__inner` }, this.placeholder)
          ),
          suffix
        );
      }
    }
    return h(
      "div",
      { ref: "selfRef", class: [
        `${clsPrefix}-base-selection`,
        this.themeClass,
        status && `${clsPrefix}-base-selection--${status}-status`,
        {
          [`${clsPrefix}-base-selection--active`]: this.active,
          [`${clsPrefix}-base-selection--selected`]: this.selected || this.active && this.pattern,
          [`${clsPrefix}-base-selection--disabled`]: this.disabled,
          [`${clsPrefix}-base-selection--multiple`]: this.multiple,
          // focus is not controlled by selection itself since it always need
          // to be managed together with menu. provide :focus style will cause
          // many redundant codes.
          [`${clsPrefix}-base-selection--focus`]: this.focused
        }
      ], style: this.cssVars, onClick: this.onClick, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onKeydown: this.onKeydown, onFocusin: this.handleFocusin, onFocusout: this.handleFocusout, onMousedown: this.handleMouseDown },
      body,
      bordered ? h("div", { class: `${clsPrefix}-base-selection__border` }) : null,
      bordered ? h("div", { class: `${clsPrefix}-base-selection__state-border` }) : null
    );
  }
});
const {
  cubicBezierEaseInOut,
  cubicBezierEaseOut: cubicBezierEaseOut$4,
  cubicBezierEaseIn: cubicBezierEaseIn$4
} = commonVariables$4;
function fadeInHeightExpandTransition({
  overflow = "hidden",
  duration = ".3s",
  originalTransition = "",
  leavingDelay = "0s",
  foldPadding = false,
  enterToProps = void 0,
  leaveToProps = void 0,
  reverse = false
} = {}) {
  const enterClass = reverse ? "leave" : "enter";
  const leaveClass = reverse ? "enter" : "leave";
  return [c$1(`&.fade-in-height-expand-transition-${leaveClass}-from,
 &.fade-in-height-expand-transition-${enterClass}-to`, Object.assign(Object.assign({}, enterToProps), {
    opacity: 1
  })), c$1(`&.fade-in-height-expand-transition-${leaveClass}-to,
 &.fade-in-height-expand-transition-${enterClass}-from`, Object.assign(Object.assign({}, leaveToProps), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: foldPadding ? "0 !important" : void 0,
    paddingBottom: foldPadding ? "0 !important" : void 0
  })), c$1(`&.fade-in-height-expand-transition-${leaveClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 opacity ${duration} ${cubicBezierEaseOut$4} ${leavingDelay},
 margin-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 margin-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay}
 ${originalTransition ? "," + originalTransition : ""}
 `), c$1(`&.fade-in-height-expand-transition-${enterClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut},
 opacity ${duration} ${cubicBezierEaseIn$4},
 margin-top ${duration} ${cubicBezierEaseInOut},
 margin-bottom ${duration} ${cubicBezierEaseInOut},
 padding-top ${duration} ${cubicBezierEaseInOut},
 padding-bottom ${duration} ${cubicBezierEaseInOut}
 ${originalTransition ? "," + originalTransition : ""}
 `)];
}
function getIsGroup(option) {
  return option.type === "group";
}
function getIgnored(option) {
  return option.type === "ignored";
}
function patternMatched(pattern, value) {
  try {
    return !!(1 + value.toString().toLowerCase().indexOf(pattern.trim().toLowerCase()));
  } catch (err) {
    return false;
  }
}
function createTmOptions(valueField, childrenField) {
  const options = {
    getIsGroup,
    getIgnored,
    getKey(option) {
      if (getIsGroup(option)) {
        return option.name || option.key || "key-required";
      }
      return option[valueField];
    },
    getChildren(option) {
      return option[childrenField];
    }
  };
  return options;
}
function filterOptions(originalOpts, filter, pattern, childrenField) {
  if (!filter)
    return originalOpts;
  function traverse(options) {
    if (!Array.isArray(options))
      return [];
    const filteredOptions = [];
    for (const option of options) {
      if (getIsGroup(option)) {
        const children = traverse(option[childrenField]);
        if (children.length) {
          filteredOptions.push(Object.assign({}, option, {
            [childrenField]: children
          }));
        }
      } else if (getIgnored(option)) {
        continue;
      } else if (filter(pattern, option)) {
        filteredOptions.push(option);
      }
    }
    return filteredOptions;
  }
  return traverse(originalOpts);
}
function createValOptMap(options, valueField, childrenField) {
  const valOptMap = /* @__PURE__ */ new Map();
  options.forEach((option) => {
    if (getIsGroup(option)) {
      option[childrenField].forEach((selectGroupOption) => {
        valOptMap.set(selectGroupOption[valueField], selectGroupOption);
      });
    } else {
      valOptMap.set(option[valueField], option);
    }
  });
  return valOptMap;
}
const isImageSupportNativeLazy = isBrowser && "loading" in document.createElement("img");
const resolveOptionsAndHash = (options = {}) => {
  var _a;
  const { root: root2 = null } = options;
  return {
    hash: `${options.rootMargin || "0px 0px 0px 0px"}-${Array.isArray(options.threshold) ? options.threshold.join(",") : (_a = options.threshold) !== null && _a !== void 0 ? _a : "0"}`,
    options: Object.assign(Object.assign({}, options), { root: (typeof root2 === "string" ? document.querySelector(root2) : root2) || document.documentElement })
  };
};
const observers = /* @__PURE__ */ new WeakMap();
const unobserveHandleMap = /* @__PURE__ */ new WeakMap();
const shouldStartLoadingRefMap = /* @__PURE__ */ new WeakMap();
const observeIntersection = (el, options, shouldStartLoadingRef) => {
  if (!el)
    return () => {
    };
  const resolvedOptionsAndHash = resolveOptionsAndHash(options);
  const { root: root2 } = resolvedOptionsAndHash.options;
  let rootObservers;
  const _rootObservers = observers.get(root2);
  if (_rootObservers) {
    rootObservers = _rootObservers;
  } else {
    rootObservers = /* @__PURE__ */ new Map();
    observers.set(root2, rootObservers);
  }
  let observer;
  let observerAndObservedElements;
  if (rootObservers.has(resolvedOptionsAndHash.hash)) {
    observerAndObservedElements = // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    rootObservers.get(resolvedOptionsAndHash.hash);
    if (!observerAndObservedElements[1].has(el)) {
      observer = observerAndObservedElements[0];
      observerAndObservedElements[1].add(el);
      observer.observe(el);
    }
  } else {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const _unobserve = unobserveHandleMap.get(entry.target);
          const _shouldStartLoadingRef = shouldStartLoadingRefMap.get(entry.target);
          if (_unobserve)
            _unobserve();
          if (_shouldStartLoadingRef) {
            _shouldStartLoadingRef.value = true;
          }
        }
      });
    }, resolvedOptionsAndHash.options);
    observer.observe(el);
    observerAndObservedElements = [observer, /* @__PURE__ */ new Set([el])];
    rootObservers.set(resolvedOptionsAndHash.hash, observerAndObservedElements);
  }
  let unobservered = false;
  const unobserve = () => {
    if (unobservered)
      return;
    unobserveHandleMap.delete(el);
    shouldStartLoadingRefMap.delete(el);
    unobservered = true;
    if (observerAndObservedElements[1].has(el)) {
      observerAndObservedElements[0].unobserve(el);
      observerAndObservedElements[1].delete(el);
    }
    if (observerAndObservedElements[1].size <= 0) {
      rootObservers.delete(resolvedOptionsAndHash.hash);
    }
    if (!rootObservers.size) {
      observers.delete(root2);
    }
  };
  unobserveHandleMap.set(el, unobserve);
  shouldStartLoadingRefMap.set(el, shouldStartLoadingRef);
  return unobserve;
};
const self$e = (vars) => {
  const { borderRadius, avatarColor, cardColor, fontSize, heightTiny, heightSmall, heightMedium, heightLarge, heightHuge, modalColor, popoverColor } = vars;
  return {
    borderRadius,
    fontSize,
    border: `2px solid ${cardColor}`,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    color: composite(cardColor, avatarColor),
    colorModal: composite(modalColor, avatarColor),
    colorPopover: composite(popoverColor, avatarColor)
  };
};
const avatarLight = {
  name: "Avatar",
  common: commonLight,
  self: self$e
};
const avatarLight$1 = avatarLight;
const avatarGroupInjectionKey = createInjectionKey("n-avatar-group");
const style$h = cB("avatar", `
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`, [insideModal(c$1("&", "--n-merged-color: var(--n-color-modal);")), insidePopover(c$1("&", "--n-merged-color: var(--n-color-popover);")), c$1("img", `
 width: 100%;
 height: 100%;
 `), cE("text", `
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `), cB("icon", `
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `), cE("text", "line-height: 1.25")]);
const avatarProps = Object.assign(Object.assign({}, useTheme.props), {
  size: [String, Number],
  src: String,
  circle: {
    type: Boolean,
    default: void 0
  },
  objectFit: String,
  round: {
    type: Boolean,
    default: void 0
  },
  bordered: {
    type: Boolean,
    default: void 0
  },
  onError: Function,
  fallbackSrc: String,
  intersectionObserverOptions: Object,
  lazy: Boolean,
  onLoad: Function,
  renderPlaceholder: Function,
  renderFallback: Function,
  imgProps: Object,
  /** @deprecated */
  color: String
});
const NAvatar = defineComponent({
  name: "Avatar",
  props: avatarProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const hasLoadErrorRef = ref(false);
    let memoedTextHtml = null;
    const textRef = ref(null);
    const selfRef = ref(null);
    const fitTextTransform = () => {
      const { value: textEl } = textRef;
      if (textEl) {
        if (memoedTextHtml === null || memoedTextHtml !== textEl.innerHTML) {
          memoedTextHtml = textEl.innerHTML;
          const { value: selfEl } = selfRef;
          if (selfEl) {
            const { offsetWidth: elWidth, offsetHeight: elHeight } = selfEl;
            const { offsetWidth: textWidth, offsetHeight: textHeight } = textEl;
            const radix = 0.9;
            const ratio = Math.min(elWidth / textWidth * radix, elHeight / textHeight * radix, 1);
            textEl.style.transform = `translateX(-50%) translateY(-50%) scale(${ratio})`;
          }
        }
      }
    };
    const NAvatarGroup = inject(avatarGroupInjectionKey, null);
    const mergedSizeRef = computed(() => {
      const { size } = props;
      if (size)
        return size;
      const { size: avatarGroupSize } = NAvatarGroup || {};
      if (avatarGroupSize)
        return avatarGroupSize;
      return "medium";
    });
    const themeRef = useTheme("Avatar", "-avatar", style$h, avatarLight$1, props, mergedClsPrefixRef);
    const TagInjection = inject(tagInjectionKey, null);
    const mergedRoundRef = computed(() => {
      if (NAvatarGroup)
        return true;
      const { round: round2, circle } = props;
      if (round2 !== void 0 || circle !== void 0)
        return round2 || circle;
      if (TagInjection) {
        return TagInjection.roundRef.value;
      }
      return false;
    });
    const mergedBorderedRef = computed(() => {
      if (NAvatarGroup)
        return true;
      return props.bordered || false;
    });
    const handleError = (e) => {
      var _a;
      if (!shouldStartLoadingRef.value)
        return;
      hasLoadErrorRef.value = true;
      const { onError, imgProps } = props;
      (_a = imgProps === null || imgProps === void 0 ? void 0 : imgProps.onError) === null || _a === void 0 ? void 0 : _a.call(imgProps, e);
      if (onError) {
        onError(e);
      }
    };
    watch(() => props.src, () => hasLoadErrorRef.value = false);
    const cssVarsRef = computed(() => {
      const size = mergedSizeRef.value;
      const round2 = mergedRoundRef.value;
      const bordered = mergedBorderedRef.value;
      const { color: propColor } = props;
      const { self: { borderRadius, fontSize, color, border, colorModal, colorPopover }, common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 } } = themeRef.value;
      let height;
      if (typeof size === "number") {
        height = `${size}px`;
      } else {
        height = themeRef.value.self[createKey("height", size)];
      }
      return {
        "--n-font-size": fontSize,
        "--n-border": bordered ? border : "none",
        "--n-border-radius": round2 ? "50%" : borderRadius,
        "--n-color": propColor || color,
        "--n-color-modal": propColor || colorModal,
        "--n-color-popover": propColor || colorPopover,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-merged-size": `var(--n-avatar-size-override, ${height})`
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("avatar", computed(() => {
      const size = mergedSizeRef.value;
      const round2 = mergedRoundRef.value;
      const bordered = mergedBorderedRef.value;
      const { color } = props;
      let hash = "";
      if (size) {
        if (typeof size === "number") {
          hash += `a${size}`;
        } else {
          hash += size[0];
        }
      }
      if (round2) {
        hash += "b";
      }
      if (bordered) {
        hash += "c";
      }
      if (color) {
        hash += color2Class(color);
      }
      return hash;
    }), cssVarsRef, props) : void 0;
    const shouldStartLoadingRef = ref(!props.lazy);
    onMounted(() => {
      if (isImageSupportNativeLazy) {
        return;
      }
      let unobserve;
      const stopWatchHandle = watchEffect(() => {
        unobserve === null || unobserve === void 0 ? void 0 : unobserve();
        unobserve = void 0;
        if (props.lazy) {
          unobserve = observeIntersection(selfRef.value, props.intersectionObserverOptions, shouldStartLoadingRef);
        }
      });
      onBeforeUnmount(() => {
        stopWatchHandle();
        unobserve === null || unobserve === void 0 ? void 0 : unobserve();
      });
    });
    const loadedRef = ref(!props.lazy);
    return {
      textRef,
      selfRef,
      mergedRoundRef,
      mergedClsPrefix: mergedClsPrefixRef,
      fitTextTransform,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      hasLoadError: hasLoadErrorRef,
      handleError,
      shouldStartLoading: shouldStartLoadingRef,
      loaded: loadedRef,
      mergedOnLoad: (e) => {
        var _a;
        const { onLoad, imgProps } = props;
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(e);
        (_a = imgProps === null || imgProps === void 0 ? void 0 : imgProps.onLoad) === null || _a === void 0 ? void 0 : _a.call(imgProps, e);
        loadedRef.value = true;
      }
    };
  },
  render() {
    var _a, _b;
    const { $slots, src, mergedClsPrefix, lazy, onRender, mergedOnLoad, shouldStartLoading, loaded, hasLoadError } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    let img;
    const placeholderNode = !loaded && !hasLoadError && (this.renderPlaceholder ? this.renderPlaceholder() : (_b = (_a = this.$slots).placeholder) === null || _b === void 0 ? void 0 : _b.call(_a));
    if (this.hasLoadError) {
      img = this.renderFallback ? this.renderFallback() : resolveSlot($slots.fallback, () => [
        h("img", { src: this.fallbackSrc, style: { objectFit: this.objectFit } })
      ]);
    } else {
      img = resolveWrappedSlot($slots.default, (children) => {
        if (children) {
          return h(VResizeObserver, { onResize: this.fitTextTransform }, {
            default: () => h("span", { ref: "textRef", class: `${mergedClsPrefix}-avatar__text` }, children)
          });
        } else if (src) {
          const { imgProps } = this;
          return h("img", Object.assign(Object.assign({}, imgProps), { loading: (
            // If interseciton observer options is set, do not use native lazy
            isImageSupportNativeLazy && !this.intersectionObserverOptions && lazy ? "lazy" : "eager"
          ), src: isImageSupportNativeLazy ? src : shouldStartLoading || loaded ? src : void 0, onLoad: mergedOnLoad, "data-image-src": src, onError: this.handleError, style: [
            imgProps === null || imgProps === void 0 ? void 0 : imgProps.style,
            { objectFit: this.objectFit },
            placeholderNode ? {
              height: "0",
              width: "0",
              visibility: "hidden",
              position: "absolute"
            } : ""
          ] }));
        }
      });
    }
    return h(
      "span",
      { ref: "selfRef", class: [`${mergedClsPrefix}-avatar`, this.themeClass], style: this.cssVars },
      img,
      lazy && placeholderNode
    );
  }
});
const commonVariables$1 = {
  fontWeightActive: "400"
};
const self$d = (vars) => {
  const { fontSize, textColor3, textColor2, borderRadius, buttonColor2Hover, buttonColor2Pressed } = vars;
  return Object.assign(Object.assign({}, commonVariables$1), { fontSize, itemLineHeight: "1.25", itemTextColor: textColor3, itemTextColorHover: textColor2, itemTextColorPressed: textColor2, itemTextColorActive: textColor2, itemBorderRadius: borderRadius, itemColorHover: buttonColor2Hover, itemColorPressed: buttonColor2Pressed, separatorColor: textColor3 });
};
const breadcrumbLight = {
  name: "Breadcrumb",
  common: commonLight,
  self: self$d
};
const breadcrumbLight$1 = breadcrumbLight;
const style$g = cB("breadcrumb", `
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`, [c$1("ul", `
 list-style: none;
 padding: 0;
 margin: 0;
 `), c$1("a", `
 color: inherit;
 text-decoration: inherit;
 `), cB("breadcrumb-item", `
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `, [cB("icon", `
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `), c$1("&:not(:last-child)", [cM("clickable", [cE("link", `
 cursor: pointer;
 `, [c$1("&:hover", `
 background-color: var(--n-item-color-hover);
 `), c$1("&:active", `
 background-color: var(--n-item-color-pressed); 
 `)])])]), cE("link", `
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `, [c$1("&:hover", `
 color: var(--n-item-text-color-hover);
 `, [cB("icon", `
 color: var(--n-item-text-color-hover);
 `)]), c$1("&:active", `
 color: var(--n-item-text-color-pressed);
 `, [cB("icon", `
 color: var(--n-item-text-color-pressed);
 `)])]), cE("separator", `
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `), c$1("&:last-child", [cE("link", `
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `, [cB("icon", `
 color: var(--n-item-text-color-active);
 `)]), cE("separator", `
 display: none;
 `)])])]);
const breadcrumbInjectionKey = createInjectionKey("n-breadcrumb");
const breadcrumbProps = Object.assign(Object.assign({}, useTheme.props), { separator: {
  type: String,
  default: "/"
} });
const __unplugin_components_1$3 = defineComponent({
  name: "Breadcrumb",
  props: breadcrumbProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Breadcrumb", "-breadcrumb", style$g, breadcrumbLight$1, props, mergedClsPrefixRef);
    provide(breadcrumbInjectionKey, {
      separatorRef: toRef(props, "separator"),
      mergedClsPrefixRef
    });
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: { separatorColor, itemTextColor, itemTextColorHover, itemTextColorPressed, itemTextColorActive, fontSize, fontWeightActive, itemBorderRadius, itemColorHover, itemColorPressed, itemLineHeight } } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-item-text-color": itemTextColor,
        "--n-item-text-color-hover": itemTextColorHover,
        "--n-item-text-color-pressed": itemTextColorPressed,
        "--n-item-text-color-active": itemTextColorActive,
        "--n-separator-color": separatorColor,
        "--n-item-color-hover": itemColorHover,
        "--n-item-color-pressed": itemColorPressed,
        "--n-item-border-radius": itemBorderRadius,
        "--n-font-weight-active": fontWeightActive,
        "--n-item-line-height": itemLineHeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("breadcrumb", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(
      "nav",
      { class: [`${this.mergedClsPrefix}-breadcrumb`, this.themeClass], style: this.cssVars, "aria-label": "Breadcrumb" },
      h("ul", null, this.$slots)
    );
  }
});
const useBrowserLocation = (customWindow = isBrowser ? window : null) => {
  const getWindowLocation = () => {
    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (customWindow === null || customWindow === void 0 ? void 0 : customWindow.location) || {};
    return {
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };
  const updateLocation = () => {
    locationState.value = getWindowLocation();
  };
  const locationState = ref(getWindowLocation());
  onMounted(() => {
    if (customWindow) {
      customWindow.addEventListener("popstate", updateLocation);
      customWindow.addEventListener("hashchange", updateLocation);
    }
  });
  onUnmounted(() => {
    if (customWindow) {
      customWindow.removeEventListener("popstate", updateLocation);
      customWindow.removeEventListener("hashchange", updateLocation);
    }
  });
  return locationState;
};
const breadcrumbItemProps = {
  separator: String,
  href: String,
  clickable: {
    type: Boolean,
    default: true
  },
  onClick: Function
};
const __unplugin_components_0$3 = defineComponent({
  name: "BreadcrumbItem",
  props: breadcrumbItemProps,
  setup(props, { slots }) {
    const NBreadcrumb = inject(breadcrumbInjectionKey, null);
    if (!NBreadcrumb) {
      if (process.env.NODE_ENV !== "production") {
        warn("breadcrumb", "`n-breadcrumb-item` must be placed inside `n-breadcrumb`.");
      }
      return () => null;
    }
    const { separatorRef, mergedClsPrefixRef } = NBreadcrumb;
    const browserLocationRef = useBrowserLocation();
    const htmlTagRef = computed(() => props.href ? "a" : "span");
    const ariaCurrentRef = computed(() => browserLocationRef.value.href === props.href ? "location" : null);
    return () => {
      const { value: mergedClsPrefix } = mergedClsPrefixRef;
      return h(
        "li",
        { class: [
          `${mergedClsPrefix}-breadcrumb-item`,
          props.clickable && `${mergedClsPrefix}-breadcrumb-item--clickable`
        ] },
        h(htmlTagRef.value, {
          class: `${mergedClsPrefix}-breadcrumb-item__link`,
          "aria-current": ariaCurrentRef.value,
          href: props.href,
          onClick: props.onClick
        }, slots),
        h("span", { class: `${mergedClsPrefix}-breadcrumb-item__separator`, "aria-hidden": "true" }, resolveSlot(slots.separator, () => {
          var _a;
          return [
            (_a = props.separator) !== null && _a !== void 0 ? _a : separatorRef.value
          ];
        }))
      );
    };
  }
});
const zero = "0!important";
const n1 = "-1px!important";
function createLeftBorderStyle(type) {
  return cM(type + "-type", [c$1("& +", [cB("button", {}, [cM(type + "-type", [cE("border", {
    borderLeftWidth: zero
  }), cE("state-border", {
    left: n1
  })])])])]);
}
function createTopBorderStyle(type) {
  return cM(type + "-type", [c$1("& +", [cB("button", [cM(type + "-type", [cE("border", {
    borderTopWidth: zero
  }), cE("state-border", {
    top: n1
  })])])])]);
}
const style$f = cB("button-group", `
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`, [cNotM("vertical", {
  flexDirection: "row"
}, [cNotM("rtl", [cB("button", [c$1("&:first-child:not(:last-child)", `
 margin-right: ${zero};
 border-top-right-radius: ${zero};
 border-bottom-right-radius: ${zero};
 `), c$1("&:last-child:not(:first-child)", `
 margin-left: ${zero};
 border-top-left-radius: ${zero};
 border-bottom-left-radius: ${zero};
 `), c$1("&:not(:first-child):not(:last-child)", `
 margin-left: ${zero};
 margin-right: ${zero};
 border-radius: ${zero};
 `), createLeftBorderStyle("default"), cM("ghost", [createLeftBorderStyle("primary"), createLeftBorderStyle("info"), createLeftBorderStyle("success"), createLeftBorderStyle("warning"), createLeftBorderStyle("error")])])])]), cM("vertical", {
  flexDirection: "column"
}, [cB("button", [c$1("&:first-child:not(:last-child)", `
 margin-bottom: ${zero};
 margin-left: ${zero};
 margin-right: ${zero};
 border-bottom-left-radius: ${zero};
 border-bottom-right-radius: ${zero};
 `), c$1("&:last-child:not(:first-child)", `
 margin-top: ${zero};
 margin-left: ${zero};
 margin-right: ${zero};
 border-top-left-radius: ${zero};
 border-top-right-radius: ${zero};
 `), c$1("&:not(:first-child):not(:last-child)", `
 margin: ${zero};
 border-radius: ${zero};
 `), createTopBorderStyle("default"), cM("ghost", [createTopBorderStyle("primary"), createTopBorderStyle("info"), createTopBorderStyle("success"), createTopBorderStyle("warning"), createTopBorderStyle("error")])])])]);
const buttonGroupProps = {
  size: {
    type: String,
    default: void 0
  },
  vertical: Boolean
};
const __unplugin_components_21 = defineComponent({
  name: "ButtonGroup",
  props: buttonGroupProps,
  setup(props) {
    const { mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
    useStyle("-button-group", style$f, mergedClsPrefixRef);
    provide(buttonGroupInjectionKey, props);
    const rtlEnabledRef = useRtl("ButtonGroup", mergedRtlRef, mergedClsPrefixRef);
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef
    };
  },
  render() {
    const { mergedClsPrefix } = this;
    return h("div", { class: [
      `${mergedClsPrefix}-button-group`,
      this.rtlEnabled && `${mergedClsPrefix}-button-group--rtl`,
      this.vertical && `${mergedClsPrefix}-button-group--vertical`
    ], role: "group" }, this.$slots);
  }
});
const commonVariables = {
  paddingSmall: "12px 16px 12px",
  paddingMedium: "19px 24px 20px",
  paddingLarge: "23px 32px 24px",
  paddingHuge: "27px 40px 28px",
  titleFontSizeSmall: "16px",
  titleFontSizeMedium: "18px",
  titleFontSizeLarge: "18px",
  titleFontSizeHuge: "18px",
  closeIconSize: "18px",
  closeSize: "22px"
};
const self$c = (vars) => {
  const { primaryColor, borderRadius, lineHeight, fontSize, cardColor, textColor2, textColor1, dividerColor, fontWeightStrong, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, modalColor, boxShadow1, popoverColor, actionColor } = vars;
  return Object.assign(Object.assign({}, commonVariables), {
    lineHeight,
    color: cardColor,
    colorModal: modalColor,
    colorPopover: popoverColor,
    colorTarget: primaryColor,
    colorEmbedded: actionColor,
    colorEmbeddedModal: actionColor,
    colorEmbeddedPopover: actionColor,
    textColor: textColor2,
    titleTextColor: textColor1,
    borderColor: dividerColor,
    actionColor,
    titleFontWeight: fontWeightStrong,
    closeColorHover,
    closeColorPressed,
    closeBorderRadius: borderRadius,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    fontSizeSmall: fontSize,
    fontSizeMedium: fontSize,
    fontSizeLarge: fontSize,
    fontSizeHuge: fontSize,
    boxShadow: boxShadow1,
    borderRadius
  });
};
const cardLight = {
  name: "Card",
  common: commonLight,
  self: self$c
};
const cardLight$1 = cardLight;
const style$e = c$1([cB("card", `
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [asModal({
  background: "var(--n-color-modal)"
}), cM("hoverable", [c$1("&:hover", "box-shadow: var(--n-box-shadow);")]), cM("content-segmented", [c$1(">", [cE("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), cM("content-soft-segmented", [c$1(">", [cE("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), cM("footer-segmented", [c$1(">", [cE("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), cM("footer-soft-segmented", [c$1(">", [cE("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), c$1(">", [cB("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [cE("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), cE("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cE("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), cE("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), cE("content", "flex: 1; min-width: 0;"), cE("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [c$1("&:first-child", {
  paddingTop: "var(--n-padding-bottom)"
})]), cE("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), cB("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [c$1("img", `
 display: block;
 width: 100%;
 `)]), cM("bordered", `
 border: 1px solid var(--n-border-color);
 `, [c$1("&:target", "border-color: var(--n-color-target);")]), cM("action-segmented", [c$1(">", [cE("action", [c$1("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), cM("content-segmented, content-soft-segmented", [c$1(">", [cE("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [c$1("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), cM("footer-segmented, footer-soft-segmented", [c$1(">", [cE("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [c$1("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), cM("embedded", `
 background-color: var(--n-color-embedded);
 `)]), insideModal(cB("card", `
 background: var(--n-color-modal);
 `, [cM("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), insidePopover(cB("card", `
 background: var(--n-color-popover);
 `, [cM("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]);
const cardBaseProps = {
  title: String,
  contentStyle: [Object, String],
  headerStyle: [Object, String],
  headerExtraStyle: [Object, String],
  footerStyle: [Object, String],
  embedded: Boolean,
  segmented: {
    type: [Boolean, Object],
    default: false
  },
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: true
  },
  closable: Boolean,
  hoverable: Boolean,
  role: String,
  onClose: [Function, Array],
  tag: {
    type: String,
    default: "div"
  }
};
const cardProps = Object.assign(Object.assign({}, useTheme.props), cardBaseProps);
const __unplugin_components_11 = defineComponent({
  name: "Card",
  props: cardProps,
  setup(props) {
    const handleCloseClick = () => {
      const { onClose } = props;
      if (onClose)
        call(onClose);
    };
    const { inlineThemeDisabled, mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Card", "-card", style$e, cardLight$1, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Card", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { self: { color, colorModal, colorTarget, textColor, titleTextColor, titleFontWeight, borderColor, actionColor, borderRadius, lineHeight, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, closeBorderRadius, closeIconSize, closeSize, boxShadow, colorPopover, colorEmbedded, colorEmbeddedModal, colorEmbeddedPopover, [createKey("padding", size)]: padding, [createKey("fontSize", size)]: fontSize, [createKey("titleFontSize", size)]: titleFontSize }, common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 } } = themeRef.value;
      const { top: paddingTop, left: paddingLeft, bottom: paddingBottom } = getMargin(padding);
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-border-radius": borderRadius,
        "--n-color": color,
        "--n-color-modal": colorModal,
        "--n-color-popover": colorPopover,
        "--n-color-embedded": colorEmbedded,
        "--n-color-embedded-modal": colorEmbeddedModal,
        "--n-color-embedded-popover": colorEmbeddedPopover,
        "--n-color-target": colorTarget,
        "--n-text-color": textColor,
        "--n-line-height": lineHeight,
        "--n-action-color": actionColor,
        "--n-title-text-color": titleTextColor,
        "--n-title-font-weight": titleFontWeight,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-border-color": borderColor,
        "--n-box-shadow": boxShadow,
        // size
        "--n-padding-top": paddingTop,
        "--n-padding-bottom": paddingBottom,
        "--n-padding-left": paddingLeft,
        "--n-font-size": fontSize,
        "--n-title-font-size": titleFontSize,
        "--n-close-size": closeSize,
        "--n-close-icon-size": closeIconSize,
        "--n-close-border-radius": closeBorderRadius
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("card", computed(() => {
      return props.size[0];
    }), cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      handleCloseClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const { segmented, bordered, hoverable, mergedClsPrefix, rtlEnabled, onRender, embedded, tag: Component, $slots } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(
      Component,
      { class: [
        `${mergedClsPrefix}-card`,
        this.themeClass,
        embedded && `${mergedClsPrefix}-card--embedded`,
        {
          [`${mergedClsPrefix}-card--rtl`]: rtlEnabled,
          [`${mergedClsPrefix}-card--content${typeof segmented !== "boolean" && segmented.content === "soft" ? "-soft" : ""}-segmented`]: segmented === true || segmented !== false && segmented.content,
          [`${mergedClsPrefix}-card--footer${typeof segmented !== "boolean" && segmented.footer === "soft" ? "-soft" : ""}-segmented`]: segmented === true || segmented !== false && segmented.footer,
          [`${mergedClsPrefix}-card--action-segmented`]: segmented === true || segmented !== false && segmented.action,
          [`${mergedClsPrefix}-card--bordered`]: bordered,
          [`${mergedClsPrefix}-card--hoverable`]: hoverable
        }
      ], style: this.cssVars, role: this.role },
      resolveWrappedSlot($slots.cover, (children) => children && h("div", { class: `${mergedClsPrefix}-card-cover`, role: "none" }, children)),
      resolveWrappedSlot($slots.header, (children) => {
        return children || this.title || this.closable ? h(
          "div",
          { class: `${mergedClsPrefix}-card-header`, style: this.headerStyle },
          h("div", { class: `${mergedClsPrefix}-card-header__main`, role: "heading" }, children || this.title),
          resolveWrappedSlot($slots["header-extra"], (children2) => children2 && h("div", { class: `${mergedClsPrefix}-card-header__extra`, style: this.headerExtraStyle }, children2)),
          this.closable ? h(NBaseClose, { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-card-header__close`, onClick: this.handleCloseClick, absolute: true }) : null
        ) : null;
      }),
      resolveWrappedSlot($slots.default, (children) => children && h("div", { class: `${mergedClsPrefix}-card__content`, style: this.contentStyle, role: "none" }, children)),
      resolveWrappedSlot($slots.footer, (children) => children && [
        h("div", { class: `${mergedClsPrefix}-card__footer`, style: this.footerStyle, role: "none" }, children)
      ]),
      resolveWrappedSlot($slots.action, (children) => children && h("div", { class: `${mergedClsPrefix}-card__action`, role: "none" }, children))
    );
  }
});
const easeOut = (t) => 1 - Math.pow(1 - t, 5);
function tween(props) {
  const { from, to, duration, onUpdate, onFinish } = props;
  const tick = () => {
    const current = performance.now();
    const elapsedTime = Math.min(current - startTime, duration);
    const currentValue = from + (to - from) * easeOut(elapsedTime / duration);
    if (elapsedTime === duration) {
      onFinish();
      return;
    }
    onUpdate(currentValue);
    requestAnimationFrame(tick);
  };
  const startTime = performance.now();
  tick();
}
const numberAnimationProps = {
  to: {
    type: Number,
    default: 0
  },
  precision: {
    type: Number,
    default: 0
  },
  showSeparator: Boolean,
  locale: String,
  from: { type: Number, default: 0 },
  active: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 2e3
  },
  onFinish: Function
};
const __unplugin_components_6 = defineComponent({
  name: "NumberAnimation",
  props: numberAnimationProps,
  setup(props) {
    const { localeRef } = useLocale("name");
    const { duration } = props;
    const displayedValueRef = ref(props.from);
    const mergedLocaleRef = computed(() => {
      const { locale } = props;
      if (locale !== void 0)
        return locale;
      return localeRef.value;
    });
    let animating = false;
    const onUpdate = (currentValue) => {
      displayedValueRef.value = currentValue;
    };
    const onFinish = () => {
      var _a;
      displayedValueRef.value = props.to;
      animating = false;
      (_a = props.onFinish) === null || _a === void 0 ? void 0 : _a.call(props);
    };
    const animate = (from = props.from, to = props.to) => {
      animating = true;
      displayedValueRef.value = props.from;
      if (from !== to) {
        tween({
          from,
          to,
          duration,
          onUpdate,
          onFinish
        });
      }
    };
    const formattedValueRef = computed(() => {
      var _a;
      const formatted = round$1(displayedValueRef.value, props.precision).toFixed(props.precision);
      const splitValue = formatted.split(".");
      const numberFormatter = new Intl.NumberFormat(mergedLocaleRef.value);
      const decimalSeparator = (_a = numberFormatter.formatToParts(0.5).find((part) => part.type === "decimal")) === null || _a === void 0 ? void 0 : _a.value;
      const integer = props.showSeparator ? numberFormatter.format(Number(splitValue[0])) : splitValue[0];
      const decimal = splitValue[1];
      return {
        integer,
        decimal,
        decimalSeparator
      };
    });
    function play() {
      if (animating)
        return;
      animate();
    }
    onMounted(() => {
      watchEffect(() => {
        if (props.active)
          animate();
      });
    });
    const exposedMethods = { play };
    return Object.assign({ formattedValue: formattedValueRef }, exposedMethods);
  },
  render() {
    const { formattedValue: { integer, decimal, decimalSeparator } } = this;
    return [integer, decimal ? decimalSeparator : null, decimal];
  }
});
function self$b(vars) {
  const { boxShadow2 } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
}
const selectLight = createTheme({
  name: "Select",
  common: commonLight,
  peers: {
    InternalSelection: internalSelectionLight$1,
    InternalSelectMenu: internalSelectMenuLight$1
  },
  self: self$b
});
const selectLight$1 = selectLight;
const style$d = c$1([cB("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `), cB("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [fadeInScaleUpTransition({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]);
const selectProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clearable: Boolean,
  clearFilterAfterSelect: {
    type: Boolean,
    default: true
  },
  options: {
    type: Array,
    default: () => []
  },
  defaultValue: {
    type: [String, Number, Array],
    default: null
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  value: [String, Number, Array],
  placeholder: String,
  menuProps: Object,
  multiple: Boolean,
  size: String,
  filterable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  },
  remote: Boolean,
  loading: Boolean,
  filter: Function,
  placement: {
    type: String,
    default: "bottom-start"
  },
  widthMode: {
    type: String,
    default: "trigger"
  },
  tag: Boolean,
  onCreate: Function,
  fallbackOption: {
    type: [Function, Boolean],
    default: void 0
  },
  show: {
    type: Boolean,
    default: void 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  maxTagCount: [Number, String],
  consistentMenuWidth: {
    type: Boolean,
    default: true
  },
  virtualScroll: {
    type: Boolean,
    default: true
  },
  labelField: {
    type: String,
    default: "label"
  },
  valueField: {
    type: String,
    default: "value"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  renderLabel: Function,
  renderOption: Function,
  renderTag: Function,
  "onUpdate:value": [Function, Array],
  inputProps: Object,
  nodeProps: Function,
  ignoreComposition: { type: Boolean, default: true },
  showOnFocus: Boolean,
  // for jsx
  onUpdateValue: [Function, Array],
  onBlur: [Function, Array],
  onClear: [Function, Array],
  onFocus: [Function, Array],
  onScroll: [Function, Array],
  onSearch: [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:show": [Function, Array],
  displayDirective: {
    type: String,
    default: "show"
  },
  resetMenuOnOptionsChange: {
    type: Boolean,
    default: true
  },
  status: String,
  showCheckmark: {
    type: Boolean,
    default: true
  },
  /** deprecated */
  onChange: [Function, Array],
  items: Array
});
const __unplugin_components_1$2 = defineComponent({
  name: "Select",
  props: selectProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.items !== void 0) {
          warnOnce("select", "`items` is deprecated, please use `options` instead.");
        }
        if (props.onChange !== void 0) {
          warnOnce("select", "`on-change` is deprecated, please use `on-update:value` instead.");
        }
      });
    }
    const { mergedClsPrefixRef, mergedBorderedRef, namespaceRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Select", "-select", style$d, selectLight$1, props, mergedClsPrefixRef);
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const focusedRef = ref(false);
    const patternRef = ref("");
    const treeMateRef = computed(() => {
      const { valueField, childrenField } = props;
      const options = createTmOptions(valueField, childrenField);
      return createTreeMate(filteredOptionsRef.value, options);
    });
    const valOptMapRef = computed(() => createValOptMap(localOptionsRef.value, props.valueField, props.childrenField));
    const uncontrolledShowRef = ref(false);
    const mergedShowRef = useMergedState(toRef(props, "show"), uncontrolledShowRef);
    const triggerRef = ref(null);
    const followerRef = ref(null);
    const menuRef = ref(null);
    const { localeRef } = useLocale("Select");
    const localizedPlaceholderRef = computed(() => {
      var _a;
      return (_a = props.placeholder) !== null && _a !== void 0 ? _a : localeRef.value.placeholder;
    });
    const compitableOptionsRef = useCompitable(props, ["items", "options"]);
    const emptyArray = [];
    const createdOptionsRef = ref([]);
    const beingCreatedOptionsRef = ref([]);
    const memoValOptMapRef = ref(/* @__PURE__ */ new Map());
    const wrappedFallbackOptionRef = computed(() => {
      const { fallbackOption } = props;
      if (fallbackOption === void 0) {
        const { labelField, valueField } = props;
        return (value) => ({
          [labelField]: String(value),
          [valueField]: value
        });
      }
      if (fallbackOption === false)
        return false;
      return (value) => {
        return Object.assign(fallbackOption(value), {
          value
        });
      };
    });
    const localOptionsRef = computed(() => {
      return beingCreatedOptionsRef.value.concat(createdOptionsRef.value).concat(compitableOptionsRef.value);
    });
    const resolvedFilterRef = computed(() => {
      const { filter } = props;
      if (filter)
        return filter;
      const { labelField, valueField } = props;
      return (pattern, option) => {
        if (!option)
          return false;
        const label = option[labelField];
        if (typeof label === "string") {
          return patternMatched(pattern, label);
        }
        const value = option[valueField];
        if (typeof value === "string") {
          return patternMatched(pattern, value);
        }
        if (typeof value === "number") {
          return patternMatched(pattern, String(value));
        }
        return false;
      };
    });
    const filteredOptionsRef = computed(() => {
      if (props.remote) {
        return compitableOptionsRef.value;
      } else {
        const { value: localOptions } = localOptionsRef;
        const { value: pattern } = patternRef;
        if (!pattern.length || !props.filterable) {
          return localOptions;
        } else {
          return filterOptions(localOptions, resolvedFilterRef.value, pattern, props.childrenField);
        }
      }
    });
    function getMergedOptions(values) {
      const remote = props.remote;
      const { value: memoValOptMap } = memoValOptMapRef;
      const { value: valOptMap } = valOptMapRef;
      const { value: wrappedFallbackOption } = wrappedFallbackOptionRef;
      const options = [];
      values.forEach((value) => {
        if (valOptMap.has(value)) {
          options.push(valOptMap.get(value));
        } else if (remote && memoValOptMap.has(value)) {
          options.push(memoValOptMap.get(value));
        } else if (wrappedFallbackOption) {
          const option = wrappedFallbackOption(value);
          if (option) {
            options.push(option);
          }
        }
      });
      return options;
    }
    const selectedOptionsRef = computed(() => {
      if (props.multiple) {
        const { value: values } = mergedValueRef;
        if (!Array.isArray(values))
          return [];
        return getMergedOptions(values);
      }
      return null;
    });
    const selectedOptionRef = computed(() => {
      const { value: mergedValue } = mergedValueRef;
      if (!props.multiple && !Array.isArray(mergedValue)) {
        if (mergedValue === null)
          return null;
        return getMergedOptions([mergedValue])[0] || null;
      }
      return null;
    });
    const formItem = useFormItem(props);
    const { mergedSizeRef, mergedDisabledRef, mergedStatusRef } = formItem;
    function doUpdateValue(value, option) {
      const { onChange, "onUpdate:value": _onUpdateValue, onUpdateValue } = props;
      const { nTriggerFormChange, nTriggerFormInput } = formItem;
      if (onChange)
        call(onChange, value, option);
      if (onUpdateValue)
        call(onUpdateValue, value, option);
      if (_onUpdateValue) {
        call(_onUpdateValue, value, option);
      }
      uncontrolledValueRef.value = value;
      nTriggerFormChange();
      nTriggerFormInput();
    }
    function doBlur(e) {
      const { onBlur } = props;
      const { nTriggerFormBlur } = formItem;
      if (onBlur)
        call(onBlur, e);
      nTriggerFormBlur();
    }
    function doClear() {
      const { onClear } = props;
      if (onClear)
        call(onClear);
    }
    function doFocus(e) {
      const { onFocus, showOnFocus } = props;
      const { nTriggerFormFocus } = formItem;
      if (onFocus)
        call(onFocus, e);
      nTriggerFormFocus();
      if (showOnFocus) {
        openMenu();
      }
    }
    function doSearch(value) {
      const { onSearch } = props;
      if (onSearch)
        call(onSearch, value);
    }
    function doScroll(e) {
      const { onScroll } = props;
      if (onScroll)
        call(onScroll, e);
    }
    function updateMemorizedOptions() {
      var _a;
      const { remote, multiple } = props;
      if (remote) {
        const { value: memoValOptMap } = memoValOptMapRef;
        if (multiple) {
          const { valueField } = props;
          (_a = selectedOptionsRef.value) === null || _a === void 0 ? void 0 : _a.forEach((option) => {
            memoValOptMap.set(option[valueField], option);
          });
        } else {
          const option = selectedOptionRef.value;
          if (option) {
            memoValOptMap.set(option[props.valueField], option);
          }
        }
      }
    }
    function doUpdateShow(value) {
      const { onUpdateShow, "onUpdate:show": _onUpdateShow } = props;
      if (onUpdateShow)
        call(onUpdateShow, value);
      if (_onUpdateShow)
        call(_onUpdateShow, value);
      uncontrolledShowRef.value = value;
    }
    function openMenu() {
      if (!mergedDisabledRef.value) {
        doUpdateShow(true);
        uncontrolledShowRef.value = true;
        if (props.filterable) {
          focusSelectionInput();
        }
      }
    }
    function closeMenu() {
      doUpdateShow(false);
    }
    function handleMenuAfterLeave() {
      patternRef.value = "";
      beingCreatedOptionsRef.value = emptyArray;
    }
    const activeWithoutMenuOpenRef = ref(false);
    function onTriggerInputFocus() {
      if (props.filterable) {
        activeWithoutMenuOpenRef.value = true;
      }
    }
    function onTriggerInputBlur() {
      if (props.filterable) {
        activeWithoutMenuOpenRef.value = false;
        if (!mergedShowRef.value) {
          handleMenuAfterLeave();
        }
      }
    }
    function handleTriggerClick() {
      if (mergedDisabledRef.value)
        return;
      if (!mergedShowRef.value) {
        openMenu();
      } else {
        if (!props.filterable) {
          closeMenu();
        } else {
          focusSelectionInput();
        }
      }
    }
    function handleTriggerBlur(e) {
      var _a, _b;
      if ((_b = (_a = menuRef.value) === null || _a === void 0 ? void 0 : _a.selfRef) === null || _b === void 0 ? void 0 : _b.contains(e.relatedTarget)) {
        return;
      }
      focusedRef.value = false;
      doBlur(e);
      closeMenu();
    }
    function handleTriggerFocus(e) {
      doFocus(e);
      focusedRef.value = true;
    }
    function handleMenuFocus(e) {
      focusedRef.value = true;
    }
    function handleMenuBlur(e) {
      var _a;
      if ((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.relatedTarget))
        return;
      focusedRef.value = false;
      doBlur(e);
      closeMenu();
    }
    function handleMenuTabOut() {
      var _a;
      (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      closeMenu();
    }
    function handleMenuClickOutside(e) {
      var _a;
      if (mergedShowRef.value) {
        if (!((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(getPreciseEventTarget(e)))) {
          closeMenu();
        }
      }
    }
    function createClearedMultipleSelectValue(value) {
      if (!Array.isArray(value))
        return [];
      if (wrappedFallbackOptionRef.value) {
        return Array.from(value);
      } else {
        const { remote } = props;
        const { value: valOptMap } = valOptMapRef;
        if (remote) {
          const { value: memoValOptMap } = memoValOptMapRef;
          return value.filter((v) => valOptMap.has(v) || memoValOptMap.has(v));
        } else {
          return value.filter((v) => valOptMap.has(v));
        }
      }
    }
    function handleToggleByTmNode(tmNode) {
      handleToggleByOption(tmNode.rawNode);
    }
    function handleToggleByOption(option) {
      if (mergedDisabledRef.value)
        return;
      const { tag, remote, clearFilterAfterSelect, valueField } = props;
      if (tag && !remote) {
        const { value: beingCreatedOptions } = beingCreatedOptionsRef;
        const beingCreatedOption = beingCreatedOptions[0] || null;
        if (beingCreatedOption) {
          const createdOptions = createdOptionsRef.value;
          if (!createdOptions.length) {
            createdOptionsRef.value = [beingCreatedOption];
          } else {
            createdOptions.push(beingCreatedOption);
          }
          beingCreatedOptionsRef.value = emptyArray;
        }
      }
      if (remote) {
        memoValOptMapRef.value.set(option[valueField], option);
      }
      if (props.multiple) {
        const changedValue = createClearedMultipleSelectValue(mergedValueRef.value);
        const index2 = changedValue.findIndex((value) => value === option[valueField]);
        if (~index2) {
          changedValue.splice(index2, 1);
          if (tag && !remote) {
            const createdOptionIndex = getCreatedOptionIndex(option[valueField]);
            if (~createdOptionIndex) {
              createdOptionsRef.value.splice(createdOptionIndex, 1);
              if (clearFilterAfterSelect)
                patternRef.value = "";
            }
          }
        } else {
          changedValue.push(option[valueField]);
          if (clearFilterAfterSelect)
            patternRef.value = "";
        }
        doUpdateValue(changedValue, getMergedOptions(changedValue));
      } else {
        if (tag && !remote) {
          const createdOptionIndex = getCreatedOptionIndex(option[valueField]);
          if (~createdOptionIndex) {
            createdOptionsRef.value = [
              createdOptionsRef.value[createdOptionIndex]
            ];
          } else {
            createdOptionsRef.value = emptyArray;
          }
        }
        focusSelection();
        closeMenu();
        doUpdateValue(option[valueField], option);
      }
    }
    function getCreatedOptionIndex(optionValue) {
      const createdOptions = createdOptionsRef.value;
      return createdOptions.findIndex((createdOption) => createdOption[props.valueField] === optionValue);
    }
    function handlePatternInput(e) {
      if (!mergedShowRef.value) {
        openMenu();
      }
      const { value } = e.target;
      patternRef.value = value;
      const { tag, remote } = props;
      doSearch(value);
      if (tag && !remote) {
        if (!value) {
          beingCreatedOptionsRef.value = emptyArray;
          return;
        }
        const { onCreate } = props;
        const optionBeingCreated = onCreate ? onCreate(value) : { [props.labelField]: value, [props.valueField]: value };
        const { valueField } = props;
        if (compitableOptionsRef.value.some((option) => option[valueField] === optionBeingCreated[valueField]) || createdOptionsRef.value.some((option) => option[valueField] === optionBeingCreated[valueField])) {
          beingCreatedOptionsRef.value = emptyArray;
        } else {
          beingCreatedOptionsRef.value = [optionBeingCreated];
        }
      }
    }
    function handleClear(e) {
      e.stopPropagation();
      const { multiple } = props;
      if (!multiple && props.filterable) {
        closeMenu();
      }
      doClear();
      if (multiple) {
        doUpdateValue([], []);
      } else {
        doUpdateValue(null, null);
      }
    }
    function handleMenuMousedown(e) {
      if (!happensIn(e, "action") && !happensIn(e, "empty"))
        e.preventDefault();
    }
    function handleMenuScroll(e) {
      doScroll(e);
    }
    function handleKeydown(e) {
      var _a, _b, _c, _d, _e;
      if (!props.keyboard) {
        e.preventDefault();
        return;
      }
      switch (e.key) {
        case " ":
          if (props.filterable)
            break;
          else {
            e.preventDefault();
          }
        case "Enter":
          if (!((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.isComposing)) {
            if (mergedShowRef.value) {
              const pendingTmNode = (_b = menuRef.value) === null || _b === void 0 ? void 0 : _b.getPendingTmNode();
              if (pendingTmNode) {
                handleToggleByTmNode(pendingTmNode);
              } else if (!props.filterable) {
                closeMenu();
                focusSelection();
              }
            } else {
              openMenu();
              if (props.tag && activeWithoutMenuOpenRef.value) {
                const beingCreatedOption = beingCreatedOptionsRef.value[0];
                if (beingCreatedOption) {
                  const optionValue = beingCreatedOption[props.valueField];
                  const { value: mergedValue } = mergedValueRef;
                  if (props.multiple) {
                    if (Array.isArray(mergedValue) && mergedValue.some((value) => value === optionValue))
                      ;
                    else {
                      handleToggleByOption(beingCreatedOption);
                    }
                  } else {
                    handleToggleByOption(beingCreatedOption);
                  }
                }
              }
            }
          }
          e.preventDefault();
          break;
        case "ArrowUp":
          e.preventDefault();
          if (props.loading)
            return;
          if (mergedShowRef.value) {
            (_c = menuRef.value) === null || _c === void 0 ? void 0 : _c.prev();
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (props.loading)
            return;
          if (mergedShowRef.value) {
            (_d = menuRef.value) === null || _d === void 0 ? void 0 : _d.next();
          } else {
            openMenu();
          }
          break;
        case "Escape":
          if (mergedShowRef.value) {
            markEventEffectPerformed(e);
            closeMenu();
          }
          (_e = triggerRef.value) === null || _e === void 0 ? void 0 : _e.focus();
          break;
      }
    }
    function focusSelection() {
      var _a;
      (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    }
    function focusSelectionInput() {
      var _a;
      (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focusInput();
    }
    function handleTriggerOrMenuResize() {
      var _a;
      if (!mergedShowRef.value)
        return;
      (_a = followerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    updateMemorizedOptions();
    watch(toRef(props, "options"), updateMemorizedOptions);
    const exposedMethods = {
      focus: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
    const cssVarsRef = computed(() => {
      const { self: { menuBoxShadow } } = themeRef.value;
      return {
        "--n-menu-box-shadow": menuBoxShadow
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("select", void 0, cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exposedMethods), {
      mergedStatus: mergedStatusRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      namespace: namespaceRef,
      treeMate: treeMateRef,
      isMounted: isMounted(),
      triggerRef,
      menuRef,
      pattern: patternRef,
      uncontrolledShow: uncontrolledShowRef,
      mergedShow: mergedShowRef,
      adjustedTo: useAdjustedTo(props),
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      followerRef,
      localizedPlaceholder: localizedPlaceholderRef,
      selectedOption: selectedOptionRef,
      selectedOptions: selectedOptionsRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      focused: focusedRef,
      activeWithoutMenuOpen: activeWithoutMenuOpenRef,
      inlineThemeDisabled,
      onTriggerInputFocus,
      onTriggerInputBlur,
      handleTriggerOrMenuResize,
      handleMenuFocus,
      handleMenuBlur,
      handleMenuTabOut,
      handleTriggerClick,
      handleToggle: handleToggleByTmNode,
      handleDeleteOption: handleToggleByOption,
      handlePatternInput,
      handleClear,
      handleTriggerBlur,
      handleTriggerFocus,
      handleKeydown,
      handleMenuAfterLeave,
      handleMenuClickOutside,
      handleMenuScroll,
      handleMenuKeydown: handleKeydown,
      handleMenuMousedown,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    return h(
      "div",
      { class: `${this.mergedClsPrefix}-select` },
      h(VBinder, null, {
        default: () => [
          h(VTarget, null, {
            default: () => h(NInternalSelection, { ref: "triggerRef", inlineThemeDisabled: this.inlineThemeDisabled, status: this.mergedStatus, inputProps: this.inputProps, clsPrefix: this.mergedClsPrefix, showArrow: this.showArrow, maxTagCount: this.maxTagCount, bordered: this.mergedBordered, active: this.activeWithoutMenuOpen || this.mergedShow, pattern: this.pattern, placeholder: this.localizedPlaceholder, selectedOption: this.selectedOption, selectedOptions: this.selectedOptions, multiple: this.multiple, renderTag: this.renderTag, renderLabel: this.renderLabel, filterable: this.filterable, clearable: this.clearable, disabled: this.mergedDisabled, size: this.mergedSize, theme: this.mergedTheme.peers.InternalSelection, labelField: this.labelField, valueField: this.valueField, themeOverrides: this.mergedTheme.peerOverrides.InternalSelection, loading: this.loading, focused: this.focused, onClick: this.handleTriggerClick, onDeleteOption: this.handleDeleteOption, onPatternInput: this.handlePatternInput, onClear: this.handleClear, onBlur: this.handleTriggerBlur, onFocus: this.handleTriggerFocus, onKeydown: this.handleKeydown, onPatternBlur: this.onTriggerInputBlur, onPatternFocus: this.onTriggerInputFocus, onResize: this.handleTriggerOrMenuResize, ignoreComposition: this.ignoreComposition }, {
              arrow: () => {
                var _a, _b;
                return [(_b = (_a = this.$slots).arrow) === null || _b === void 0 ? void 0 : _b.call(_a)];
              }
            })
          }),
          h(VFollower, { ref: "followerRef", show: this.mergedShow, to: this.adjustedTo, teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey, containerClass: this.namespace, width: this.consistentMenuWidth ? "target" : void 0, minWidth: "target", placement: this.placement }, {
            default: () => h(Transition, { name: "fade-in-scale-up-transition", appear: this.isMounted, onAfterLeave: this.handleMenuAfterLeave }, {
              default: () => {
                var _a, _b, _c;
                if (!(this.mergedShow || this.displayDirective === "show")) {
                  return null;
                }
                (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
                return withDirectives(h(NInternalSelectMenu, Object.assign({}, this.menuProps, { ref: "menuRef", onResize: this.handleTriggerOrMenuResize, inlineThemeDisabled: this.inlineThemeDisabled, virtualScroll: this.consistentMenuWidth && this.virtualScroll, class: [
                  `${this.mergedClsPrefix}-select-menu`,
                  this.themeClass,
                  (_b = this.menuProps) === null || _b === void 0 ? void 0 : _b.class
                ], clsPrefix: this.mergedClsPrefix, focusable: true, labelField: this.labelField, valueField: this.valueField, autoPending: true, nodeProps: this.nodeProps, theme: this.mergedTheme.peers.InternalSelectMenu, themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu, treeMate: this.treeMate, multiple: this.multiple, size: "medium", renderOption: this.renderOption, renderLabel: this.renderLabel, value: this.mergedValue, style: [(_c = this.menuProps) === null || _c === void 0 ? void 0 : _c.style, this.cssVars], onToggle: this.handleToggle, onScroll: this.handleMenuScroll, onFocus: this.handleMenuFocus, onBlur: this.handleMenuBlur, onKeydown: this.handleMenuKeydown, onTabOut: this.handleMenuTabOut, onMousedown: this.handleMenuMousedown, show: this.mergedShow, showCheckmark: this.showCheckmark, resetMenuOnOptionsChange: this.resetMenuOnOptionsChange }), {
                  empty: () => {
                    var _a2, _b2;
                    return [(_b2 = (_a2 = this.$slots).empty) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
                  },
                  action: () => {
                    var _a2, _b2;
                    return [(_b2 = (_a2 = this.$slots).action) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
                  }
                }), this.displayDirective === "show" ? [
                  [vShow, this.mergedShow],
                  [
                    clickoutside,
                    this.handleMenuClickOutside,
                    void 0,
                    { capture: true }
                  ]
                ] : [
                  [
                    clickoutside,
                    this.handleMenuClickOutside,
                    void 0,
                    { capture: true }
                  ]
                ]);
              }
            })
          })
        ]
      })
    );
  }
});
const commonVars$2 = {
  padding: "8px 14px"
};
const self$a = (vars) => {
  const { borderRadius, boxShadow2, baseColor } = vars;
  return Object.assign(Object.assign({}, commonVars$2), { borderRadius, boxShadow: boxShadow2, color: composite(baseColor, "rgba(0, 0, 0, .85)"), textColor: baseColor });
};
const tooltipLight = createTheme({
  name: "Tooltip",
  common: commonLight,
  peers: {
    Popover: popoverLight
  },
  self: self$a
});
const tooltipLight$1 = tooltipLight;
const tooltipProps = Object.assign(Object.assign({}, popoverBaseProps), useTheme.props);
const NTooltip = defineComponent({
  name: "Tooltip",
  props: tooltipProps,
  __popover__: true,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props);
    const themeRef = useTheme("Tooltip", "-tooltip", void 0, tooltipLight$1, props, mergedClsPrefixRef);
    const popoverRef = ref(null);
    const tooltipExposedMethod = {
      syncPosition() {
        popoverRef.value.syncPosition();
      },
      setShow(show) {
        popoverRef.value.setShow(show);
      }
    };
    return Object.assign(Object.assign({}, tooltipExposedMethod), { popoverRef, mergedTheme: themeRef, popoverThemeOverrides: computed(() => {
      return themeRef.value.self;
    }) });
  },
  render() {
    const { mergedTheme, internalExtraClass } = this;
    return h(__unplugin_components_12, Object.assign(Object.assign({}, this.$props), { theme: mergedTheme.peers.Popover, themeOverrides: mergedTheme.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: internalExtraClass.concat("tooltip"), ref: "popoverRef" }), this.$slots);
  }
});
const self$9 = (vars) => {
  const { textColor1, dividerColor, fontWeightStrong } = vars;
  return {
    textColor: textColor1,
    color: dividerColor,
    fontWeight: fontWeightStrong
  };
};
const dividerLight = {
  name: "Divider",
  common: commonLight,
  self: self$9
};
const dividerLight$1 = dividerLight;
const style$c = cB("divider", `
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`, [cNotM("vertical", `
 margin-top: 24px;
 margin-bottom: 24px;
 `, [cNotM("no-title", `
 display: flex;
 align-items: center;
 `)]), cE("title", `
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `), cM("title-position-left", [cE("line", [cM("left", {
  width: "28px"
})])]), cM("title-position-right", [cE("line", [cM("right", {
  width: "28px"
})])]), cM("dashed", [cE("line", `
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]), cM("vertical", `
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `), cE("line", `
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `), cNotM("dashed", [cE("line", {
  backgroundColor: "var(--n-color)"
})]), cM("dashed", [cE("line", {
  borderColor: "var(--n-color)"
})]), cM("vertical", {
  backgroundColor: "var(--n-color)"
})]);
const dividerProps = Object.assign(Object.assign({}, useTheme.props), { titlePlacement: {
  type: String,
  default: "center"
}, dashed: Boolean, vertical: Boolean });
const __unplugin_components_0$2 = defineComponent({
  name: "Divider",
  props: dividerProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Divider", "-divider", style$c, dividerLight$1, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: { color, textColor, fontWeight } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-color": color,
        "--n-text-color": textColor,
        "--n-font-weight": fontWeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("divider", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const { $slots, titlePlacement, vertical, dashed, cssVars, mergedClsPrefix } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(
      "div",
      { role: "separator", class: [
        `${mergedClsPrefix}-divider`,
        this.themeClass,
        {
          [`${mergedClsPrefix}-divider--vertical`]: vertical,
          [`${mergedClsPrefix}-divider--no-title`]: !$slots.default,
          [`${mergedClsPrefix}-divider--dashed`]: dashed,
          [`${mergedClsPrefix}-divider--title-position-${titlePlacement}`]: $slots.default && titlePlacement
        }
      ], style: cssVars },
      !vertical ? h("div", { class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--left` }) : null,
      !vertical && $slots.default ? h(
        Fragment,
        null,
        h("div", { class: `${mergedClsPrefix}-divider__title` }, this.$slots),
        h("div", { class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--right` })
      ) : null
    );
  }
});
const self$8 = (vars) => {
  const { modalColor, textColor1, textColor2, boxShadow3, lineHeight, fontWeightStrong, dividerColor, closeColorHover, closeColorPressed, closeIconColor, closeIconColorHover, closeIconColorPressed, borderRadius, primaryColorHover } = vars;
  return {
    bodyPadding: "16px 24px",
    headerPadding: "16px 24px",
    footerPadding: "16px 24px",
    color: modalColor,
    textColor: textColor2,
    titleTextColor: textColor1,
    titleFontSize: "18px",
    titleFontWeight: fontWeightStrong,
    boxShadow: boxShadow3,
    lineHeight,
    headerBorderBottom: `1px solid ${dividerColor}`,
    footerBorderTop: `1px solid ${dividerColor}`,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeSize: "22px",
    closeIconSize: "18px",
    closeColorHover,
    closeColorPressed,
    closeBorderRadius: borderRadius,
    resizableTriggerColorHover: primaryColorHover
  };
};
const drawerLight = createTheme({
  name: "Drawer",
  common: commonLight,
  peers: {
    Scrollbar: scrollbarLight
  },
  self: self$8
});
const drawerLight$1 = drawerLight;
const NDrawerBodyWrapper = defineComponent({
  name: "NDrawerContent",
  inheritAttrs: false,
  props: {
    blockScroll: Boolean,
    show: {
      type: Boolean,
      default: void 0
    },
    displayDirective: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      required: true
    },
    contentStyle: [Object, String],
    nativeScrollbar: {
      type: Boolean,
      required: true
    },
    scrollbarProps: Object,
    trapFocus: {
      type: Boolean,
      default: true
    },
    autoFocus: {
      type: Boolean,
      default: true
    },
    showMask: {
      type: [Boolean, String],
      required: true
    },
    resizable: Boolean,
    onClickoutside: Function,
    onAfterLeave: Function,
    onAfterEnter: Function,
    onEsc: Function
  },
  setup(props) {
    const displayedRef = ref(!!props.show);
    const bodyRef = ref(null);
    const NDrawer = inject(drawerInjectionKey);
    let startPosition = 0;
    let memoizedBodyStyleCursor = "";
    let hoverTimerId = null;
    const isHoverOnResizeTriggerRef = ref(false);
    const isDraggingRef = ref(false);
    const isVertical = computed(() => {
      return props.placement === "top" || props.placement === "bottom";
    });
    const { mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
    const rtlEnabledRef = useRtl("Drawer", mergedRtlRef, mergedClsPrefixRef);
    const handleMousedownResizeTrigger = (e) => {
      isDraggingRef.value = true;
      startPosition = isVertical.value ? e.clientY : e.clientX;
      memoizedBodyStyleCursor = document.body.style.cursor;
      document.body.style.cursor = isVertical.value ? "ns-resize" : "ew-resize";
      document.body.addEventListener("mousemove", handleBodyMousemove);
      document.body.addEventListener("mouseleave", handleBodyMouseleave);
      document.body.addEventListener("mouseup", handleBodyMouseup);
    };
    const handleMouseenterResizeTrigger = () => {
      if (hoverTimerId !== null) {
        window.clearTimeout(hoverTimerId);
        hoverTimerId = null;
      }
      if (isDraggingRef.value) {
        isHoverOnResizeTriggerRef.value = true;
      } else {
        hoverTimerId = window.setTimeout(() => {
          isHoverOnResizeTriggerRef.value = true;
        }, 300);
      }
    };
    const handleMouseleaveResizeTrigger = () => {
      if (hoverTimerId !== null) {
        window.clearTimeout(hoverTimerId);
        hoverTimerId = null;
      }
      isHoverOnResizeTriggerRef.value = false;
    };
    const { doUpdateHeight, doUpdateWidth } = NDrawer;
    const handleBodyMousemove = (e) => {
      var _a, _b;
      if (isDraggingRef.value) {
        if (isVertical.value) {
          let height = ((_a = bodyRef.value) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
          const increment = startPosition - e.clientY;
          height += props.placement === "bottom" ? increment : -increment;
          doUpdateHeight(height);
          startPosition = e.clientY;
        } else {
          let width = ((_b = bodyRef.value) === null || _b === void 0 ? void 0 : _b.offsetWidth) || 0;
          const increment = startPosition - e.clientX;
          width += props.placement === "right" ? increment : -increment;
          doUpdateWidth(width);
          startPosition = e.clientX;
        }
      }
    };
    const handleBodyMouseup = () => {
      if (isDraggingRef.value) {
        startPosition = 0;
        isDraggingRef.value = false;
        document.body.style.cursor = memoizedBodyStyleCursor;
        document.body.removeEventListener("mousemove", handleBodyMousemove);
        document.body.removeEventListener("mouseup", handleBodyMouseup);
        document.body.removeEventListener("mouseleave", handleBodyMouseleave);
      }
    };
    const handleBodyMouseleave = handleBodyMouseup;
    watchEffect(() => {
      if (props.show)
        displayedRef.value = true;
    });
    watch(() => props.show, (value) => {
      if (!value) {
        handleBodyMouseup();
      }
    });
    onBeforeUnmount(() => {
      handleBodyMouseup();
    });
    const bodyDirectivesRef = computed(() => {
      const { show } = props;
      const directives = [[vShow, show]];
      if (!props.showMask) {
        directives.push([
          clickoutside,
          props.onClickoutside,
          void 0,
          { capture: true }
        ]);
      }
      return directives;
    });
    function handleAfterLeave() {
      var _a;
      displayedRef.value = false;
      (_a = props.onAfterLeave) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    useLockHtmlScroll(computed(() => props.blockScroll && displayedRef.value));
    provide(drawerBodyInjectionKey, bodyRef);
    provide(popoverBodyInjectionKey, null);
    provide(modalBodyInjectionKey, null);
    return {
      bodyRef,
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: NDrawer.mergedClsPrefixRef,
      isMounted: NDrawer.isMountedRef,
      mergedTheme: NDrawer.mergedThemeRef,
      displayed: displayedRef,
      transitionName: computed(() => {
        return {
          right: "slide-in-from-right-transition",
          left: "slide-in-from-left-transition",
          top: "slide-in-from-top-transition",
          bottom: "slide-in-from-bottom-transition"
        }[props.placement];
      }),
      handleAfterLeave,
      bodyDirectives: bodyDirectivesRef,
      handleMousedownResizeTrigger,
      handleMouseenterResizeTrigger,
      handleMouseleaveResizeTrigger,
      isDragging: isDraggingRef,
      isHoverOnResizeTrigger: isHoverOnResizeTriggerRef
    };
  },
  render() {
    const { $slots, mergedClsPrefix } = this;
    return this.displayDirective === "show" || this.displayed || this.show ? withDirectives(
      /* Keep the wrapper dom. Make sure the drawer has a host.
        Nor the detached content will disappear without transition */
      h(
        "div",
        { role: "none" },
        h(FocusTrap, { disabled: !this.showMask || !this.trapFocus, active: this.show, autoFocus: this.autoFocus, onEsc: this.onEsc }, {
          default: () => h(Transition, { name: this.transitionName, appear: this.isMounted, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave }, {
            default: () => withDirectives(h("div", mergeProps(this.$attrs, {
              role: "dialog",
              ref: "bodyRef",
              "aria-modal": "true",
              class: [
                `${mergedClsPrefix}-drawer`,
                this.rtlEnabled && `${mergedClsPrefix}-drawer--rtl`,
                `${mergedClsPrefix}-drawer--${this.placement}-placement`,
                /**
                 * When the mouse is pressed to resize the drawer,
                 * disable text selection
                 */
                this.isDragging && `${mergedClsPrefix}-drawer--unselectable`,
                this.nativeScrollbar && `${mergedClsPrefix}-drawer--native-scrollbar`
              ]
            }), [
              this.resizable ? h("div", { class: [
                `${mergedClsPrefix}-drawer__resize-trigger`,
                (this.isDragging || this.isHoverOnResizeTrigger) && `${mergedClsPrefix}-drawer__resize-trigger--hover`
              ], onMouseenter: this.handleMouseenterResizeTrigger, onMouseleave: this.handleMouseleaveResizeTrigger, onMousedown: this.handleMousedownResizeTrigger }) : null,
              this.nativeScrollbar ? h("div", { class: `${mergedClsPrefix}-drawer-content-wrapper`, style: this.contentStyle, role: "none" }, $slots) : h(NScrollbar, Object.assign({}, this.scrollbarProps, { contentStyle: this.contentStyle, contentClass: `${mergedClsPrefix}-drawer-content-wrapper`, theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar }), $slots)
            ]), this.bodyDirectives)
          })
        })
      ),
      [
        [
          vShow,
          this.displayDirective === "if" || this.displayed || this.show
        ]
      ]
    ) : null;
  }
});
const { cubicBezierEaseIn: cubicBezierEaseIn$3, cubicBezierEaseOut: cubicBezierEaseOut$3 } = commonVariables$4;
function slideInFromRightTransition({ duration = "0.3s", leaveDuration = "0.2s", name = "slide-in-from-right" } = {}) {
  return [
    c$1(`&.${name}-transition-leave-active`, {
      transition: `transform ${leaveDuration} ${cubicBezierEaseIn$3}`
    }),
    c$1(`&.${name}-transition-enter-active`, {
      transition: `transform ${duration} ${cubicBezierEaseOut$3}`
    }),
    c$1(`&.${name}-transition-enter-to`, {
      transform: "translateX(0)"
    }),
    c$1(`&.${name}-transition-enter-from`, {
      transform: "translateX(100%)"
    }),
    c$1(`&.${name}-transition-leave-from`, {
      transform: "translateX(0)"
    }),
    c$1(`&.${name}-transition-leave-to`, {
      transform: "translateX(100%)"
    })
  ];
}
const { cubicBezierEaseIn: cubicBezierEaseIn$2, cubicBezierEaseOut: cubicBezierEaseOut$2 } = commonVariables$4;
function slideInFromLeftTransition({ duration = "0.3s", leaveDuration = "0.2s", name = "slide-in-from-left" } = {}) {
  return [
    c$1(`&.${name}-transition-leave-active`, {
      transition: `transform ${leaveDuration} ${cubicBezierEaseIn$2}`
    }),
    c$1(`&.${name}-transition-enter-active`, {
      transition: `transform ${duration} ${cubicBezierEaseOut$2}`
    }),
    c$1(`&.${name}-transition-enter-to`, {
      transform: "translateX(0)"
    }),
    c$1(`&.${name}-transition-enter-from`, {
      transform: "translateX(-100%)"
    }),
    c$1(`&.${name}-transition-leave-from`, {
      transform: "translateX(0)"
    }),
    c$1(`&.${name}-transition-leave-to`, {
      transform: "translateX(-100%)"
    })
  ];
}
const { cubicBezierEaseIn: cubicBezierEaseIn$1, cubicBezierEaseOut: cubicBezierEaseOut$1 } = commonVariables$4;
function slideInFromTopTransition({ duration = "0.3s", leaveDuration = "0.2s", name = "slide-in-from-top" } = {}) {
  return [
    c$1(`&.${name}-transition-leave-active`, {
      transition: `transform ${leaveDuration} ${cubicBezierEaseIn$1}`
    }),
    c$1(`&.${name}-transition-enter-active`, {
      transition: `transform ${duration} ${cubicBezierEaseOut$1}`
    }),
    c$1(`&.${name}-transition-enter-to`, {
      transform: "translateY(0)"
    }),
    c$1(`&.${name}-transition-enter-from`, {
      transform: "translateY(-100%)"
    }),
    c$1(`&.${name}-transition-leave-from`, {
      transform: "translateY(0)"
    }),
    c$1(`&.${name}-transition-leave-to`, {
      transform: "translateY(-100%)"
    })
  ];
}
const { cubicBezierEaseIn, cubicBezierEaseOut } = commonVariables$4;
function slideInFromBottomTransition({ duration = "0.3s", leaveDuration = "0.2s", name = "slide-in-from-bottom" } = {}) {
  return [
    c$1(`&.${name}-transition-leave-active`, {
      transition: `transform ${leaveDuration} ${cubicBezierEaseIn}`
    }),
    c$1(`&.${name}-transition-enter-active`, {
      transition: `transform ${duration} ${cubicBezierEaseOut}`
    }),
    c$1(`&.${name}-transition-enter-to`, {
      transform: "translateY(0)"
    }),
    c$1(`&.${name}-transition-enter-from`, {
      transform: "translateY(100%)"
    }),
    c$1(`&.${name}-transition-leave-from`, {
      transform: "translateY(0)"
    }),
    c$1(`&.${name}-transition-leave-to`, {
      transform: "translateY(100%)"
    })
  ];
}
const style$b = c$1([cB("drawer", `
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `, [slideInFromRightTransition(), slideInFromLeftTransition(), slideInFromTopTransition(), slideInFromBottomTransition(), cM("unselectable", `
 user-select: none; 
 -webkit-user-select: none;
 `), cM("native-scrollbar", [cB("drawer-content-wrapper", `
 overflow: auto;
 height: 100%;
 `)]), cE("resize-trigger", `
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `, [cM("hover", `
 background-color: var(--n-resize-trigger-color-hover);
 `)]), cB("drawer-content-wrapper", `
 box-sizing: border-box;
 `), cB("drawer-content", `
 height: 100%;
 display: flex;
 flex-direction: column;
 `, [cM("native-scrollbar", [cB("drawer-body-content-wrapper", `
 height: 100%;
 overflow: auto;
 `)]), cB("drawer-body", `
 flex: 1 0 0;
 overflow: hidden;
 `), cB("drawer-body-content-wrapper", `
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `), cB("drawer-header", `
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `, [cE("close", `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), cB("drawer-footer", `
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]), cM("right-placement", `
 top: 0;
 bottom: 0;
 right: 0;
 `, [cE("resize-trigger", `
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]), cM("left-placement", `
 top: 0;
 bottom: 0;
 left: 0;
 `, [cE("resize-trigger", `
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]), cM("top-placement", `
 top: 0;
 left: 0;
 right: 0;
 `, [cE("resize-trigger", `
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]), cM("bottom-placement", `
 left: 0;
 bottom: 0;
 right: 0;
 `, [cE("resize-trigger", `
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]), c$1("body", [c$1(">", [cB("drawer-container", {
  position: "fixed"
})])]), cB("drawer-container", `
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `, [c$1("> *", {
  pointerEvents: "all"
})]), cB("drawer-mask", `
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [cM("invisible", `
 background-color: rgba(0, 0, 0, 0)
 `), fadeInTransition({
  enterDuration: "0.2s",
  leaveDuration: "0.2s",
  enterCubicBezier: "var(--n-bezier-in)",
  leaveCubicBezier: "var(--n-bezier-out)"
})])]);
const drawerProps = Object.assign(Object.assign({}, useTheme.props), {
  show: Boolean,
  width: [Number, String],
  height: [Number, String],
  placement: {
    type: String,
    default: "right"
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  showMask: {
    type: [Boolean, String],
    default: true
  },
  to: [String, Object],
  displayDirective: {
    type: String,
    default: "if"
  },
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  zIndex: Number,
  onMaskClick: Function,
  scrollbarProps: Object,
  contentStyle: [Object, String],
  trapFocus: {
    type: Boolean,
    default: true
  },
  onEsc: Function,
  autoFocus: {
    type: Boolean,
    default: true
  },
  closeOnEsc: {
    type: Boolean,
    default: true
  },
  blockScroll: {
    type: Boolean,
    default: true
  },
  resizable: Boolean,
  defaultWidth: {
    type: [Number, String],
    default: 251
  },
  defaultHeight: {
    type: [Number, String],
    default: 251
  },
  onUpdateWidth: [Function, Array],
  onUpdateHeight: [Function, Array],
  "onUpdate:width": [Function, Array],
  "onUpdate:height": [Function, Array],
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  onAfterEnter: Function,
  onAfterLeave: Function,
  /** @deprecated */
  drawerStyle: [String, Object],
  drawerClass: String,
  target: null,
  onShow: Function,
  onHide: Function
});
const __unplugin_components_23 = defineComponent({
  name: "Drawer",
  inheritAttrs: false,
  props: drawerProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.drawerStyle !== void 0) {
          warnOnce("drawer", "`drawer-style` is deprecated, please use `style` instead.");
        }
        if (props.drawerClass !== void 0) {
          warnOnce("drawer", "`drawer-class` is deprecated, please use `class` instead.");
        }
        if (props.target !== void 0) {
          warnOnce("drawer", "`target` is deprecated, please use `to` instead.");
        }
        if (props.onShow !== void 0) {
          warnOnce("drawer", "`on-show` is deprecated, please use `on-update:show` instead.");
        }
        if (props.onHide !== void 0) {
          warnOnce("drawer", "`on-hide` is deprecated, please use `on-update:show` instead.");
        }
      });
    }
    const { mergedClsPrefixRef, namespaceRef, inlineThemeDisabled } = useConfig(props);
    const isMountedRef = isMounted();
    const themeRef = useTheme("Drawer", "-drawer", style$b, drawerLight$1, props, mergedClsPrefixRef);
    const uncontrolledWidthRef = ref(props.defaultWidth);
    const uncontrolledHeightRef = ref(props.defaultHeight);
    const mergedWidthRef = useMergedState(toRef(props, "width"), uncontrolledWidthRef);
    const mergedHeightRef = useMergedState(toRef(props, "height"), uncontrolledHeightRef);
    const styleWidthRef = computed(() => {
      const { placement } = props;
      if (placement === "top" || placement === "bottom")
        return "";
      return formatLength(mergedWidthRef.value);
    });
    const styleHeightRef = computed(() => {
      const { placement } = props;
      if (placement === "left" || placement === "right")
        return "";
      return formatLength(mergedHeightRef.value);
    });
    const doUpdateWidth = (value) => {
      const { onUpdateWidth, "onUpdate:width": _onUpdateWidth } = props;
      if (onUpdateWidth)
        call(onUpdateWidth, value);
      if (_onUpdateWidth)
        call(_onUpdateWidth, value);
      uncontrolledWidthRef.value = value;
    };
    const doUpdateHeight = (value) => {
      const { onUpdateHeight, "onUpdate:width": _onUpdateHeight } = props;
      if (onUpdateHeight)
        call(onUpdateHeight, value);
      if (_onUpdateHeight)
        call(_onUpdateHeight, value);
      uncontrolledHeightRef.value = value;
    };
    const mergedBodyStyleRef = computed(() => {
      return [
        {
          width: styleWidthRef.value,
          height: styleHeightRef.value
        },
        props.drawerStyle || ""
      ];
    });
    function handleMaskClick(e) {
      const { onMaskClick, maskClosable } = props;
      if (maskClosable) {
        doUpdateShow(false);
      }
      if (onMaskClick)
        onMaskClick(e);
    }
    const isComposingRef2 = useIsComposing();
    function handleEsc(e) {
      var _a;
      (_a = props.onEsc) === null || _a === void 0 ? void 0 : _a.call(props);
      if (props.show && props.closeOnEsc && eventEffectNotPerformed(e)) {
        !isComposingRef2.value && doUpdateShow(false);
      }
    }
    function doUpdateShow(show) {
      const { onHide, onUpdateShow, "onUpdate:show": _onUpdateShow } = props;
      if (onUpdateShow)
        call(onUpdateShow, show);
      if (_onUpdateShow)
        call(_onUpdateShow, show);
      if (onHide && !show)
        call(onHide, show);
    }
    provide(drawerInjectionKey, {
      isMountedRef,
      mergedThemeRef: themeRef,
      mergedClsPrefixRef,
      doUpdateShow,
      doUpdateHeight,
      doUpdateWidth
    });
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2, cubicBezierEaseIn: cubicBezierEaseIn2, cubicBezierEaseOut: cubicBezierEaseOut2 }, self: { color, textColor, boxShadow, lineHeight, headerPadding, footerPadding, bodyPadding, titleFontSize, titleTextColor, titleFontWeight, headerBorderBottom, footerBorderTop, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, closeIconSize, closeSize, closeBorderRadius, resizableTriggerColorHover } } = themeRef.value;
      return {
        "--n-line-height": lineHeight,
        "--n-color": color,
        "--n-text-color": textColor,
        "--n-box-shadow": boxShadow,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-bezier-out": cubicBezierEaseOut2,
        "--n-bezier-in": cubicBezierEaseIn2,
        "--n-header-padding": headerPadding,
        "--n-body-padding": bodyPadding,
        "--n-footer-padding": footerPadding,
        "--n-title-text-color": titleTextColor,
        "--n-title-font-size": titleFontSize,
        "--n-title-font-weight": titleFontWeight,
        "--n-header-border-bottom": headerBorderBottom,
        "--n-footer-border-top": footerBorderTop,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-close-size": closeSize,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-icon-size": closeIconSize,
        "--n-close-border-radius": closeBorderRadius,
        "--n-resize-trigger-color-hover": resizableTriggerColorHover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("drawer", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      mergedBodyStyle: mergedBodyStyleRef,
      handleMaskClick,
      handleEsc,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      isMounted: isMountedRef
    };
  },
  render() {
    const { mergedClsPrefix } = this;
    return h(LazyTeleport, { to: this.to, show: this.show }, {
      default: () => {
        var _a;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return withDirectives(h(
          "div",
          { class: [
            `${mergedClsPrefix}-drawer-container`,
            this.namespace,
            this.themeClass
          ], style: this.cssVars, role: "none" },
          this.showMask ? h(Transition, { name: "fade-in-transition", appear: this.isMounted }, {
            default: () => this.show ? h("div", { "aria-hidden": true, class: [
              `${mergedClsPrefix}-drawer-mask`,
              this.showMask === "transparent" && `${mergedClsPrefix}-drawer-mask--invisible`
            ], onClick: this.handleMaskClick }) : null
          }) : null,
          h(NDrawerBodyWrapper, Object.assign({}, this.$attrs, { class: [this.drawerClass, this.$attrs.class], style: [this.mergedBodyStyle, this.$attrs.style], blockScroll: this.blockScroll, contentStyle: this.contentStyle, placement: this.placement, scrollbarProps: this.scrollbarProps, show: this.show, displayDirective: this.displayDirective, nativeScrollbar: this.nativeScrollbar, onAfterEnter: this.onAfterEnter, onAfterLeave: this.onAfterLeave, trapFocus: this.trapFocus, autoFocus: this.autoFocus, resizable: this.resizable, showMask: this.showMask, onEsc: this.handleEsc, onClickoutside: this.handleMaskClick }), this.$slots)
        ), [[zindexable, { zIndex: this.zIndex, enabled: this.show }]]);
      }
    });
  }
});
const drawerContentProps = {
  title: {
    type: String
  },
  headerStyle: [Object, String],
  footerStyle: [Object, String],
  bodyStyle: [Object, String],
  bodyContentStyle: [Object, String],
  nativeScrollbar: { type: Boolean, default: true },
  scrollbarProps: Object,
  closable: Boolean
};
const __unplugin_components_22 = defineComponent({
  name: "DrawerContent",
  props: drawerContentProps,
  setup() {
    const NDrawer = inject(drawerInjectionKey, null);
    if (!NDrawer) {
      throwError("drawer-content", "`n-drawer-content` must be placed inside `n-drawer`.");
    }
    const { doUpdateShow } = NDrawer;
    function handleCloseClick() {
      doUpdateShow(false);
    }
    return {
      handleCloseClick,
      mergedTheme: NDrawer.mergedThemeRef,
      mergedClsPrefix: NDrawer.mergedClsPrefixRef
    };
  },
  render() {
    const { title, mergedClsPrefix, nativeScrollbar, mergedTheme, bodyStyle, bodyContentStyle, headerStyle, footerStyle, scrollbarProps, closable, $slots } = this;
    return h(
      "div",
      { role: "none", class: [
        `${mergedClsPrefix}-drawer-content`,
        nativeScrollbar && `${mergedClsPrefix}-drawer-content--native-scrollbar`
      ] },
      $slots.header || title || closable ? h(
        "div",
        { class: `${mergedClsPrefix}-drawer-header`, style: headerStyle, role: "none" },
        h("div", { class: `${mergedClsPrefix}-drawer-header__main`, role: "heading", "aria-level": "1" }, $slots.header !== void 0 ? $slots.header() : title),
        closable && h(NBaseClose, { onClick: this.handleCloseClick, clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-drawer-header__close`, absolute: true })
      ) : null,
      nativeScrollbar ? h(
        "div",
        { class: `${mergedClsPrefix}-drawer-body`, style: bodyStyle, role: "none" },
        h("div", { class: `${mergedClsPrefix}-drawer-body-content-wrapper`, style: bodyContentStyle, role: "none" }, $slots)
      ) : h(NScrollbar, Object.assign({ themeOverrides: mergedTheme.peerOverrides.Scrollbar, theme: mergedTheme.peers.Scrollbar }, scrollbarProps, { class: `${mergedClsPrefix}-drawer-body`, contentClass: `${mergedClsPrefix}-drawer-body-content-wrapper`, contentStyle: bodyContentStyle }), $slots),
      $slots.footer ? h("div", { class: `${mergedClsPrefix}-drawer-footer`, style: footerStyle, role: "none" }, $slots.footer()) : null
    );
  }
});
const elementLight = {
  name: "Element",
  common: commonLight
};
const elementLight$1 = elementLight;
const elementProps = Object.assign(Object.assign({}, useTheme.props), { tag: {
  type: String,
  default: "div"
} });
const __unplugin_components_1$1 = defineComponent({
  name: "Element",
  alias: ["El"],
  props: elementProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Element", "-element", void 0, elementLight$1, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { common } = themeRef.value;
      return Object.keys(common).reduce((prevValue, key) => {
        prevValue[`--${kebabCase$1(key)}`] = common[key];
        return prevValue;
      }, {});
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("element", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const { tag, mergedClsPrefix, cssVars, themeClass, onRender, $slots } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(tag, {
      role: "none",
      class: [`${mergedClsPrefix}-element`, themeClass],
      style: cssVars
    }, (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots));
  }
});
const self$7 = (vars) => {
  const { baseColor, textColor2, bodyColor, cardColor, dividerColor, actionColor, scrollbarColor, scrollbarColorHover, invertedColor } = vars;
  return {
    textColor: textColor2,
    textColorInverted: "#FFF",
    color: bodyColor,
    colorEmbedded: actionColor,
    headerColor: cardColor,
    headerColorInverted: invertedColor,
    footerColor: actionColor,
    footerColorInverted: invertedColor,
    headerBorderColor: dividerColor,
    headerBorderColorInverted: invertedColor,
    footerBorderColor: dividerColor,
    footerBorderColorInverted: invertedColor,
    siderBorderColor: dividerColor,
    siderBorderColorInverted: invertedColor,
    siderColor: cardColor,
    siderColorInverted: invertedColor,
    siderToggleButtonBorder: `1px solid ${dividerColor}`,
    siderToggleButtonColor: baseColor,
    siderToggleButtonIconColor: textColor2,
    siderToggleButtonIconColorInverted: textColor2,
    siderToggleBarColor: composite(bodyColor, scrollbarColor),
    siderToggleBarColorHover: composite(bodyColor, scrollbarColorHover),
    // hack for inverted background
    __invertScrollbar: "true"
  };
};
const layoutLight = createTheme({
  name: "Layout",
  common: commonLight,
  peers: {
    Scrollbar: scrollbarLight
  },
  self: self$7
});
const layoutLight$1 = layoutLight;
const self$6 = (vars) => {
  const { textColor2, cardColor, modalColor, popoverColor, dividerColor, borderRadius, fontSize, hoverColor } = vars;
  return {
    textColor: textColor2,
    color: cardColor,
    colorHover: hoverColor,
    colorModal: modalColor,
    colorHoverModal: composite(modalColor, hoverColor),
    colorPopover: popoverColor,
    colorHoverPopover: composite(popoverColor, hoverColor),
    borderColor: dividerColor,
    borderColorModal: composite(modalColor, dividerColor),
    borderColorPopover: composite(popoverColor, dividerColor),
    borderRadius,
    fontSize
  };
};
const listLight = {
  name: "List",
  common: commonLight,
  self: self$6
};
const listLight$1 = listLight;
function createPartialInvertedVars(color, activeItemColor, activeTextColor, groupTextColor) {
  return {
    itemColorHoverInverted: "#0000",
    itemColorActiveInverted: activeItemColor,
    itemColorActiveHoverInverted: activeItemColor,
    itemColorActiveCollapsedInverted: activeItemColor,
    itemTextColorInverted: color,
    itemTextColorHoverInverted: activeTextColor,
    itemTextColorChildActiveInverted: activeTextColor,
    itemTextColorChildActiveHoverInverted: activeTextColor,
    itemTextColorActiveInverted: activeTextColor,
    itemTextColorActiveHoverInverted: activeTextColor,
    itemTextColorHorizontalInverted: color,
    itemTextColorHoverHorizontalInverted: activeTextColor,
    itemTextColorChildActiveHorizontalInverted: activeTextColor,
    itemTextColorChildActiveHoverHorizontalInverted: activeTextColor,
    itemTextColorActiveHorizontalInverted: activeTextColor,
    itemTextColorActiveHoverHorizontalInverted: activeTextColor,
    itemIconColorInverted: color,
    itemIconColorHoverInverted: activeTextColor,
    itemIconColorActiveInverted: activeTextColor,
    itemIconColorActiveHoverInverted: activeTextColor,
    itemIconColorChildActiveInverted: activeTextColor,
    itemIconColorChildActiveHoverInverted: activeTextColor,
    itemIconColorCollapsedInverted: color,
    itemIconColorHorizontalInverted: color,
    itemIconColorHoverHorizontalInverted: activeTextColor,
    itemIconColorActiveHorizontalInverted: activeTextColor,
    itemIconColorActiveHoverHorizontalInverted: activeTextColor,
    itemIconColorChildActiveHorizontalInverted: activeTextColor,
    itemIconColorChildActiveHoverHorizontalInverted: activeTextColor,
    arrowColorInverted: color,
    arrowColorHoverInverted: activeTextColor,
    arrowColorActiveInverted: activeTextColor,
    arrowColorActiveHoverInverted: activeTextColor,
    arrowColorChildActiveInverted: activeTextColor,
    arrowColorChildActiveHoverInverted: activeTextColor,
    groupTextColorInverted: groupTextColor
  };
}
const self$5 = (vars) => {
  const { borderRadius, textColor3, primaryColor, textColor2, textColor1, fontSize, dividerColor, hoverColor, primaryColorHover } = vars;
  return Object.assign({
    borderRadius,
    color: "#0000",
    groupTextColor: textColor3,
    itemColorHover: hoverColor,
    itemColorActive: changeColor(primaryColor, { alpha: 0.1 }),
    itemColorActiveHover: changeColor(primaryColor, { alpha: 0.1 }),
    itemColorActiveCollapsed: changeColor(primaryColor, { alpha: 0.1 }),
    itemTextColor: textColor2,
    itemTextColorHover: textColor2,
    itemTextColorActive: primaryColor,
    itemTextColorActiveHover: primaryColor,
    itemTextColorChildActive: primaryColor,
    itemTextColorChildActiveHover: primaryColor,
    itemTextColorHorizontal: textColor2,
    itemTextColorHoverHorizontal: primaryColorHover,
    itemTextColorActiveHorizontal: primaryColor,
    itemTextColorActiveHoverHorizontal: primaryColor,
    itemTextColorChildActiveHorizontal: primaryColor,
    itemTextColorChildActiveHoverHorizontal: primaryColor,
    itemIconColor: textColor1,
    itemIconColorHover: textColor1,
    itemIconColorActive: primaryColor,
    itemIconColorActiveHover: primaryColor,
    itemIconColorChildActive: primaryColor,
    itemIconColorChildActiveHover: primaryColor,
    itemIconColorCollapsed: textColor1,
    itemIconColorHorizontal: textColor1,
    itemIconColorHoverHorizontal: primaryColorHover,
    itemIconColorActiveHorizontal: primaryColor,
    itemIconColorActiveHoverHorizontal: primaryColor,
    itemIconColorChildActiveHorizontal: primaryColor,
    itemIconColorChildActiveHoverHorizontal: primaryColor,
    itemHeight: "42px",
    arrowColor: textColor2,
    arrowColorHover: textColor2,
    arrowColorActive: primaryColor,
    arrowColorActiveHover: primaryColor,
    arrowColorChildActive: primaryColor,
    arrowColorChildActiveHover: primaryColor,
    colorInverted: "#0000",
    borderColorHorizontal: "#0000",
    fontSize,
    dividerColor
  }, createPartialInvertedVars("#BBB", primaryColor, "#FFF", "#AAA"));
};
const menuLight = createTheme({
  name: "Menu",
  common: commonLight,
  peers: {
    Tooltip: tooltipLight$1,
    Dropdown: dropdownLight
  },
  self: self$5
});
const menuLight$1 = menuLight;
const self$4 = (vars) => {
  const { textColor2, textColor3, fontSize, fontWeight } = vars;
  return {
    labelFontSize: fontSize,
    labelFontWeight: fontWeight,
    valueFontWeight: fontWeight,
    valueFontSize: "24px",
    labelTextColor: textColor3,
    valuePrefixTextColor: textColor2,
    valueSuffixTextColor: textColor2,
    valueTextColor: textColor2
  };
};
const statisticLight = {
  name: "Statistic",
  common: commonLight,
  self: self$4
};
const statisticLight$1 = statisticLight;
const commonVars$1 = {
  buttonHeightSmall: "14px",
  buttonHeightMedium: "18px",
  buttonHeightLarge: "22px",
  buttonWidthSmall: "14px",
  buttonWidthMedium: "18px",
  buttonWidthLarge: "22px",
  buttonWidthPressedSmall: "20px",
  buttonWidthPressedMedium: "24px",
  buttonWidthPressedLarge: "28px",
  railHeightSmall: "18px",
  railHeightMedium: "22px",
  railHeightLarge: "26px",
  railWidthSmall: "32px",
  railWidthMedium: "40px",
  railWidthLarge: "48px"
};
const self$3 = (vars) => {
  const { primaryColor, opacityDisabled, borderRadius, textColor3 } = vars;
  const railOverlayColor = "rgba(0, 0, 0, .14)";
  return Object.assign(Object.assign({}, commonVars$1), { iconColor: textColor3, textColor: "white", loadingColor: primaryColor, opacityDisabled, railColor: railOverlayColor, railColorActive: primaryColor, buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", buttonColor: "#FFF", railBorderRadiusSmall: borderRadius, railBorderRadiusMedium: borderRadius, railBorderRadiusLarge: borderRadius, buttonBorderRadiusSmall: borderRadius, buttonBorderRadiusMedium: borderRadius, buttonBorderRadiusLarge: borderRadius, boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, { alpha: 0.2 })}` });
};
const switchLight = {
  name: "Switch",
  common: commonLight,
  self: self$3
};
const switchLight$1 = switchLight;
const sizeVariables = {
  tabFontSizeSmall: "14px",
  tabFontSizeMedium: "14px",
  tabFontSizeLarge: "16px",
  tabGapSmallLine: "36px",
  tabGapMediumLine: "36px",
  tabGapLargeLine: "36px",
  tabGapSmallLineVertical: "8px",
  tabGapMediumLineVertical: "8px",
  tabGapLargeLineVertical: "8px",
  tabPaddingSmallLine: "6px 0",
  tabPaddingMediumLine: "10px 0",
  tabPaddingLargeLine: "14px 0",
  tabPaddingVerticalSmallLine: "6px 12px",
  tabPaddingVerticalMediumLine: "8px 16px",
  tabPaddingVerticalLargeLine: "10px 20px",
  tabGapSmallBar: "36px",
  tabGapMediumBar: "36px",
  tabGapLargeBar: "36px",
  tabGapSmallBarVertical: "8px",
  tabGapMediumBarVertical: "8px",
  tabGapLargeBarVertical: "8px",
  tabPaddingSmallBar: "4px 0",
  tabPaddingMediumBar: "6px 0",
  tabPaddingLargeBar: "10px 0",
  tabPaddingVerticalSmallBar: "6px 12px",
  tabPaddingVerticalMediumBar: "8px 16px",
  tabPaddingVerticalLargeBar: "10px 20px",
  tabGapSmallCard: "4px",
  tabGapMediumCard: "4px",
  tabGapLargeCard: "4px",
  tabGapSmallCardVertical: "4px",
  tabGapMediumCardVertical: "4px",
  tabGapLargeCardVertical: "4px",
  tabPaddingSmallCard: "8px 16px",
  tabPaddingMediumCard: "10px 20px",
  tabPaddingLargeCard: "12px 24px",
  tabPaddingSmallSegment: "4px 0",
  tabPaddingMediumSegment: "6px 0",
  tabPaddingLargeSegment: "8px 0",
  tabPaddingVerticalLargeSegment: "0 8px",
  tabPaddingVerticalSmallCard: "8px 12px",
  tabPaddingVerticalMediumCard: "10px 16px",
  tabPaddingVerticalLargeCard: "12px 20px",
  tabPaddingVerticalSmallSegment: "0 4px",
  tabPaddingVerticalMediumSegment: "0 6px",
  tabGapSmallSegment: "0",
  tabGapMediumSegment: "0",
  tabGapLargeSegment: "0",
  tabGapSmallSegmentVertical: "0",
  tabGapMediumSegmentVertical: "0",
  tabGapLargeSegmentVertical: "0",
  panePaddingSmall: "8px 0 0 0",
  panePaddingMedium: "12px 0 0 0",
  panePaddingLarge: "16px 0 0 0",
  closeSize: "18px",
  closeIconSize: "14px"
};
const self$2 = (vars) => {
  const { textColor2, primaryColor, textColorDisabled, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, tabColor, baseColor, dividerColor, fontWeight, textColor1, borderRadius, fontSize, fontWeightStrong } = vars;
  return Object.assign(Object.assign({}, sizeVariables), {
    colorSegment: tabColor,
    tabFontSizeCard: fontSize,
    tabTextColorLine: textColor1,
    tabTextColorActiveLine: primaryColor,
    tabTextColorHoverLine: primaryColor,
    tabTextColorDisabledLine: textColorDisabled,
    tabTextColorSegment: textColor1,
    tabTextColorActiveSegment: textColor2,
    tabTextColorHoverSegment: textColor2,
    tabTextColorDisabledSegment: textColorDisabled,
    tabTextColorBar: textColor1,
    tabTextColorActiveBar: primaryColor,
    tabTextColorHoverBar: primaryColor,
    tabTextColorDisabledBar: textColorDisabled,
    tabTextColorCard: textColor1,
    tabTextColorHoverCard: textColor1,
    tabTextColorActiveCard: primaryColor,
    tabTextColorDisabledCard: textColorDisabled,
    barColor: primaryColor,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    closeBorderRadius: borderRadius,
    tabColor,
    tabColorSegment: baseColor,
    tabBorderColor: dividerColor,
    tabFontWeightActive: fontWeight,
    tabFontWeight: fontWeight,
    tabBorderRadius: borderRadius,
    paneTextColor: textColor2,
    fontWeightStrong
  });
};
const tabsLight = {
  name: "Tabs",
  common: commonLight,
  self: self$2
};
const tabsLight$1 = tabsLight;
const self$1 = (vars) => {
  const { textColor1, textColor2, fontWeightStrong, fontSize } = vars;
  return {
    fontSize,
    titleTextColor: textColor1,
    textColor: textColor2,
    titleFontWeight: fontWeightStrong
  };
};
const thingLight = {
  name: "Thing",
  common: commonLight,
  self: self$1
};
const thingLight$1 = thingLight;
const commonVars = {
  headerFontSize1: "30px",
  headerFontSize2: "22px",
  headerFontSize3: "18px",
  headerFontSize4: "16px",
  headerFontSize5: "16px",
  headerFontSize6: "16px",
  headerMargin1: "28px 0 20px 0",
  headerMargin2: "28px 0 20px 0",
  headerMargin3: "28px 0 20px 0",
  headerMargin4: "28px 0 18px 0",
  headerMargin5: "28px 0 18px 0",
  headerMargin6: "28px 0 18px 0",
  headerPrefixWidth1: "16px",
  headerPrefixWidth2: "16px",
  headerPrefixWidth3: "12px",
  headerPrefixWidth4: "12px",
  headerPrefixWidth5: "12px",
  headerPrefixWidth6: "12px",
  headerBarWidth1: "4px",
  headerBarWidth2: "4px",
  headerBarWidth3: "3px",
  headerBarWidth4: "3px",
  headerBarWidth5: "3px",
  headerBarWidth6: "3px",
  pMargin: "16px 0 16px 0",
  liMargin: ".25em 0 0 0",
  olPadding: "0 0 0 2em",
  ulPadding: "0 0 0 2em"
};
const self = (vars) => {
  const { primaryColor, textColor2, borderColor, lineHeight, fontSize, borderRadiusSmall, dividerColor, fontWeightStrong, textColor1, textColor3, infoColor, warningColor, errorColor, successColor, codeColor } = vars;
  return Object.assign(Object.assign({}, commonVars), { aTextColor: primaryColor, blockquoteTextColor: textColor2, blockquotePrefixColor: borderColor, blockquoteLineHeight: lineHeight, blockquoteFontSize: fontSize, codeBorderRadius: borderRadiusSmall, liTextColor: textColor2, liLineHeight: lineHeight, liFontSize: fontSize, hrColor: dividerColor, headerFontWeight: fontWeightStrong, headerTextColor: textColor1, pTextColor: textColor2, pTextColor1Depth: textColor1, pTextColor2Depth: textColor2, pTextColor3Depth: textColor3, pLineHeight: lineHeight, pFontSize: fontSize, headerBarColor: primaryColor, headerBarColorPrimary: primaryColor, headerBarColorInfo: infoColor, headerBarColorError: errorColor, headerBarColorWarning: warningColor, headerBarColorSuccess: successColor, textColor: textColor2, textColor1Depth: textColor1, textColor2Depth: textColor2, textColor3Depth: textColor3, textColorPrimary: primaryColor, textColorInfo: infoColor, textColorSuccess: successColor, textColorWarning: warningColor, textColorError: errorColor, codeTextColor: textColor2, codeColor, codeBorder: "1px solid #0000" });
};
const typographyLight = {
  name: "Typography",
  common: commonLight,
  self
};
const typographyLight$1 = typographyLight;
const layoutSiderInjectionKey = createInjectionKey("n-layout-sider");
const positionProp = {
  type: String,
  default: "static"
};
const style$a = cB("layout", `
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`, [cB("layout-scroll-container", `
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `), cM("absolute-positioned", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);
const layoutProps = {
  embedded: Boolean,
  position: positionProp,
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  scrollbarProps: Object,
  onScroll: Function,
  contentStyle: {
    type: [String, Object],
    default: ""
  },
  hasSider: Boolean,
  siderPlacement: {
    type: String,
    default: "left"
  }
};
const layoutInjectionKey = createInjectionKey("n-layout");
function createLayoutComponent(isContent) {
  return defineComponent({
    name: isContent ? "LayoutContent" : "Layout",
    props: Object.assign(Object.assign({}, useTheme.props), layoutProps),
    setup(props) {
      const scrollableElRef = ref(null);
      const scrollbarInstRef = ref(null);
      const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
      const themeRef = useTheme("Layout", "-layout", style$a, layoutLight$1, props, mergedClsPrefixRef);
      function scrollTo(options, y) {
        if (props.nativeScrollbar) {
          const { value: scrollableEl } = scrollableElRef;
          if (scrollableEl) {
            if (y === void 0) {
              scrollableEl.scrollTo(options);
            } else {
              scrollableEl.scrollTo(options, y);
            }
          }
        } else {
          const { value: scrollbarInst } = scrollbarInstRef;
          if (scrollbarInst) {
            scrollbarInst.scrollTo(options, y);
          }
        }
      }
      provide(layoutInjectionKey, props);
      let scrollX = 0;
      let scrollY = 0;
      const handleNativeElScroll = (e) => {
        var _a;
        const target = e.target;
        scrollX = target.scrollLeft;
        scrollY = target.scrollTop;
        (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
      };
      useReactivated(() => {
        if (props.nativeScrollbar) {
          const el = scrollableElRef.value;
          if (el) {
            el.scrollTop = scrollY;
            el.scrollLeft = scrollX;
          }
        }
      });
      const hasSiderStyle = {
        display: "flex",
        flexWrap: "nowrap",
        width: "100%",
        flexDirection: "row"
      };
      const exposedMethods = {
        scrollTo
      };
      const cssVarsRef = computed(() => {
        const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: self2 } = themeRef.value;
        return {
          "--n-bezier": cubicBezierEaseInOut2,
          "--n-color": props.embedded ? self2.colorEmbedded : self2.color,
          "--n-text-color": self2.textColor
        };
      });
      const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout", computed(() => {
        return props.embedded ? "e" : "";
      }), cssVarsRef, props) : void 0;
      return Object.assign({
        mergedClsPrefix: mergedClsPrefixRef,
        scrollableElRef,
        scrollbarInstRef,
        hasSiderStyle,
        mergedTheme: themeRef,
        handleNativeElScroll,
        cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
        themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
        onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
      }, exposedMethods);
    },
    render() {
      var _a;
      const { mergedClsPrefix, hasSider } = this;
      (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
      const hasSiderStyle = hasSider ? this.hasSiderStyle : void 0;
      const layoutClass = [
        this.themeClass,
        isContent && `${mergedClsPrefix}-layout-content`,
        `${mergedClsPrefix}-layout`,
        `${mergedClsPrefix}-layout--${this.position}-positioned`
      ];
      return h("div", { class: layoutClass, style: this.cssVars }, this.nativeScrollbar ? h("div", { ref: "scrollableElRef", class: `${mergedClsPrefix}-layout-scroll-container`, style: [this.contentStyle, hasSiderStyle], onScroll: this.handleNativeElScroll }, this.$slots) : h(NScrollbar, Object.assign({}, this.scrollbarProps, { onScroll: this.onScroll, ref: "scrollbarInstRef", theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentStyle: [this.contentStyle, hasSiderStyle] }), this.$slots));
    }
  });
}
const __unplugin_components_2$1 = createLayoutComponent(false);
const style$9 = cB("layout-header", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`, [cM("absolute-positioned", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `), cM("bordered", `
 border-bottom: solid 1px var(--n-border-color);
 `)]);
const headerProps$1 = {
  position: positionProp,
  inverted: Boolean,
  bordered: {
    type: Boolean,
    default: false
  }
};
const __unplugin_components_0$1 = defineComponent({
  name: "LayoutHeader",
  props: Object.assign(Object.assign({}, useTheme.props), headerProps$1),
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Layout", "-layout-header", style$9, layoutLight$1, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: self2 } = themeRef.value;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut2
      };
      if (props.inverted) {
        vars["--n-color"] = self2.headerColorInverted;
        vars["--n-text-color"] = self2.textColorInverted;
        vars["--n-border-color"] = self2.headerBorderColorInverted;
      } else {
        vars["--n-color"] = self2.headerColor;
        vars["--n-text-color"] = self2.textColor;
        vars["--n-border-color"] = self2.headerBorderColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout-header", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const { mergedClsPrefix } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", { class: [
      `${mergedClsPrefix}-layout-header`,
      this.themeClass,
      this.position && `${mergedClsPrefix}-layout-header--${this.position}-positioned`,
      this.bordered && `${mergedClsPrefix}-layout-header--bordered`
    ], style: this.cssVars }, this.$slots);
  }
});
const style$8 = cB("layout-sider", `
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`, [cM("bordered", [cE("border", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]), cE("left-placement", [cM("bordered", [cE("border", `
 right: 0;
 `)])]), cM("right-placement", `
 justify-content: flex-start;
 `, [cM("bordered", [cE("border", `
 left: 0;
 `)]), cM("collapsed", [cB("layout-toggle-button", [cB("base-icon", `
 transform: rotate(180deg);
 `)]), cB("layout-toggle-bar", [c$1("&:hover", [cE("top", {
  transform: "rotate(-12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(12deg) scale(1.15) translateY(2px)"
})])])]), cB("layout-toggle-button", `
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `, [cB("base-icon", `
 transform: rotate(0);
 `)]), cB("layout-toggle-bar", `
 left: -28px;
 transform: rotate(180deg);
 `, [c$1("&:hover", [cE("top", {
  transform: "rotate(12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(-12deg) scale(1.15) translateY(2px)"
})])])]), cM("collapsed", [cB("layout-toggle-bar", [c$1("&:hover", [cE("top", {
  transform: "rotate(-12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(12deg) scale(1.15) translateY(2px)"
})])]), cB("layout-toggle-button", [cB("base-icon", `
 transform: rotate(0);
 `)])]), cB("layout-toggle-button", `
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `, [cB("base-icon", `
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]), cB("layout-toggle-bar", `
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `, [cE("top, bottom", `
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `), cE("bottom", `
 position: absolute;
 top: 34px;
 `), c$1("&:hover", [cE("top", {
  transform: "rotate(12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(-12deg) scale(1.15) translateY(2px)"
})]), cE("top, bottom", {
  backgroundColor: "var(--n-toggle-bar-color)"
}), c$1("&:hover", [cE("top, bottom", {
  backgroundColor: "var(--n-toggle-bar-color-hover)"
})])]), cE("border", `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `), cB("layout-sider-scroll-container", `
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `), cM("show-content", [cB("layout-sider-scroll-container", {
  opacity: 1
})]), cM("absolute-positioned", `
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]);
const ToggleButton = defineComponent({
  name: "LayoutToggleButton",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function
  },
  render() {
    const { clsPrefix } = this;
    return h(
      "div",
      { class: `${clsPrefix}-layout-toggle-button`, onClick: this.onClick },
      h(NBaseIcon, { clsPrefix }, {
        default: () => h(ChevronRightIcon, null)
      })
    );
  }
});
const ToggleBar = defineComponent({
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function
  },
  render() {
    const { clsPrefix } = this;
    return h(
      "div",
      { onClick: this.onClick, class: `${clsPrefix}-layout-toggle-bar` },
      h("div", { class: `${clsPrefix}-layout-toggle-bar__top` }),
      h("div", { class: `${clsPrefix}-layout-toggle-bar__bottom` })
    );
  }
});
const layoutSiderProps = {
  position: positionProp,
  bordered: Boolean,
  collapsedWidth: {
    type: Number,
    default: 48
  },
  width: {
    type: [Number, String],
    default: 272
  },
  contentStyle: {
    type: [String, Object],
    default: ""
  },
  collapseMode: {
    type: String,
    default: "transform"
  },
  collapsed: {
    type: Boolean,
    default: void 0
  },
  defaultCollapsed: Boolean,
  showCollapsedContent: {
    type: Boolean,
    default: true
  },
  showTrigger: {
    type: [Boolean, String],
    default: false
  },
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  inverted: Boolean,
  scrollbarProps: Object,
  triggerStyle: [String, Object],
  collapsedTriggerStyle: [String, Object],
  "onUpdate:collapsed": [Function, Array],
  onUpdateCollapsed: [Function, Array],
  onAfterEnter: Function,
  onAfterLeave: Function,
  // deprecated
  onExpand: [Function, Array],
  onCollapse: [Function, Array],
  onScroll: Function
};
const __unplugin_components_1 = defineComponent({
  name: "LayoutSider",
  props: Object.assign(Object.assign({}, useTheme.props), layoutSiderProps),
  setup(props) {
    const layoutProps2 = inject(layoutInjectionKey);
    if (process.env.NODE_ENV !== "production") {
      if (!layoutProps2) {
        warn("layout-sider", "Layout sider is not allowed to be put outside layout.");
      } else {
        if (!layoutProps2.hasSider) {
          warn("layout-sider", "You are putting `n-layout-sider` in a `n-layout` but haven't set `has-sider` on the `n-layout`.");
        }
      }
    }
    const scrollableElRef = ref(null);
    const scrollbarInstRef = ref(null);
    const styleMaxWidthRef = computed(() => {
      return formatLength(mergedCollapsedRef.value ? props.collapsedWidth : props.width);
    });
    const scrollContainerStyleRef = computed(() => {
      if (props.collapseMode !== "transform")
        return {};
      return {
        minWidth: formatLength(props.width)
      };
    });
    const siderPlacementRef = computed(() => {
      return layoutProps2 ? layoutProps2.siderPlacement : "left";
    });
    const uncontrolledCollapsedRef = ref(props.defaultCollapsed);
    const mergedCollapsedRef = useMergedState(toRef(props, "collapsed"), uncontrolledCollapsedRef);
    function scrollTo(options, y) {
      if (props.nativeScrollbar) {
        const { value: scrollableEl } = scrollableElRef;
        if (scrollableEl) {
          if (y === void 0) {
            scrollableEl.scrollTo(options);
          } else {
            scrollableEl.scrollTo(options, y);
          }
        }
      } else {
        const { value: scrollbarInst } = scrollbarInstRef;
        if (scrollbarInst) {
          scrollbarInst.scrollTo(options, y);
        }
      }
    }
    function handleTriggerClick() {
      const {
        "onUpdate:collapsed": _onUpdateCollapsed,
        onUpdateCollapsed,
        // deprecated
        onExpand,
        onCollapse
      } = props;
      const { value: collapsed } = mergedCollapsedRef;
      if (onUpdateCollapsed) {
        call(onUpdateCollapsed, !collapsed);
      }
      if (_onUpdateCollapsed) {
        call(_onUpdateCollapsed, !collapsed);
      }
      uncontrolledCollapsedRef.value = !collapsed;
      if (collapsed) {
        if (onExpand)
          call(onExpand);
      } else {
        if (onCollapse)
          call(onCollapse);
      }
    }
    let scrollX = 0;
    let scrollY = 0;
    const handleNativeElScroll = (e) => {
      var _a;
      const target = e.target;
      scrollX = target.scrollLeft;
      scrollY = target.scrollTop;
      (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    useReactivated(() => {
      if (props.nativeScrollbar) {
        const el = scrollableElRef.value;
        if (el) {
          el.scrollTop = scrollY;
          el.scrollLeft = scrollX;
        }
      }
    });
    provide(layoutSiderInjectionKey, {
      collapsedRef: mergedCollapsedRef,
      collapseModeRef: toRef(props, "collapseMode")
    });
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Layout", "-layout-sider", style$8, layoutLight$1, props, mergedClsPrefixRef);
    function handleTransitionend(e) {
      var _a, _b;
      if (e.propertyName === "max-width") {
        if (mergedCollapsedRef.value) {
          (_a = props.onAfterLeave) === null || _a === void 0 ? void 0 : _a.call(props);
        } else {
          (_b = props.onAfterEnter) === null || _b === void 0 ? void 0 : _b.call(props);
        }
      }
    }
    const exposedMethods = {
      scrollTo
    };
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: self2 } = themeRef.value;
      const { siderToggleButtonColor, siderToggleButtonBorder, siderToggleBarColor, siderToggleBarColorHover } = self2;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-toggle-button-color": siderToggleButtonColor,
        "--n-toggle-button-border": siderToggleButtonBorder,
        "--n-toggle-bar-color": siderToggleBarColor,
        "--n-toggle-bar-color-hover": siderToggleBarColorHover
      };
      if (props.inverted) {
        vars["--n-color"] = self2.siderColorInverted;
        vars["--n-text-color"] = self2.textColorInverted;
        vars["--n-border-color"] = self2.siderBorderColorInverted;
        vars["--n-toggle-button-icon-color"] = self2.siderToggleButtonIconColorInverted;
        vars.__invertScrollbar = self2.__invertScrollbar;
      } else {
        vars["--n-color"] = self2.siderColor;
        vars["--n-text-color"] = self2.textColor;
        vars["--n-border-color"] = self2.siderBorderColor;
        vars["--n-toggle-button-icon-color"] = self2.siderToggleButtonIconColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout-sider", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    return Object.assign({
      scrollableElRef,
      scrollbarInstRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      styleMaxWidth: styleMaxWidthRef,
      mergedCollapsed: mergedCollapsedRef,
      scrollContainerStyle: scrollContainerStyleRef,
      siderPlacement: siderPlacementRef,
      handleNativeElScroll,
      handleTransitionend,
      handleTriggerClick,
      inlineThemeDisabled,
      cssVars: cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedMethods);
  },
  render() {
    var _a;
    const { mergedClsPrefix, mergedCollapsed, showTrigger } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(
      "aside",
      { class: [
        `${mergedClsPrefix}-layout-sider`,
        this.themeClass,
        `${mergedClsPrefix}-layout-sider--${this.position}-positioned`,
        `${mergedClsPrefix}-layout-sider--${this.siderPlacement}-placement`,
        this.bordered && `${mergedClsPrefix}-layout-sider--bordered`,
        mergedCollapsed && `${mergedClsPrefix}-layout-sider--collapsed`,
        (!mergedCollapsed || this.showCollapsedContent) && `${mergedClsPrefix}-layout-sider--show-content`
      ], onTransitionend: this.handleTransitionend, style: [
        this.inlineThemeDisabled ? void 0 : this.cssVars,
        {
          maxWidth: this.styleMaxWidth,
          width: formatLength(this.width)
        }
      ] },
      !this.nativeScrollbar ? h(NScrollbar, Object.assign({}, this.scrollbarProps, {
        onScroll: this.onScroll,
        ref: "scrollbarInstRef",
        style: this.scrollContainerStyle,
        contentStyle: this.contentStyle,
        theme: this.mergedTheme.peers.Scrollbar,
        themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
        // here is a hack, since in light theme the scrollbar color is dark,
        // we need to invert it in light color...
        builtinThemeOverrides: this.inverted && this.cssVars.__invertScrollbar === "true" ? {
          colorHover: "rgba(255, 255, 255, .4)",
          color: "rgba(255, 255, 255, .3)"
        } : void 0
      }), this.$slots) : h("div", { class: `${mergedClsPrefix}-layout-sider-scroll-container`, onScroll: this.handleNativeElScroll, style: [
        this.scrollContainerStyle,
        {
          overflow: "auto"
        },
        this.contentStyle
      ], ref: "scrollableElRef" }, this.$slots),
      showTrigger ? showTrigger === "bar" ? h(ToggleBar, { clsPrefix: mergedClsPrefix, style: mergedCollapsed ? this.collapsedTriggerStyle : this.triggerStyle, onClick: this.handleTriggerClick }) : h(ToggleButton, { clsPrefix: mergedClsPrefix, style: mergedCollapsed ? this.collapsedTriggerStyle : this.triggerStyle, onClick: this.handleTriggerClick }) : null,
      this.bordered ? h("div", { class: `${mergedClsPrefix}-layout-sider__border` }) : null
    );
  }
});
const style$7 = c$1([cB("list", `
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `, [cM("show-divider", [cB("list-item", [c$1("&:not(:last-child)", [cE("divider", `
 background-color: var(--n-merged-border-color);
 `)])])]), cM("clickable", [cB("list-item", `
 cursor: pointer;
 `)]), cM("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `), cM("hoverable", [cB("list-item", `
 border-radius: var(--n-border-radius);
 `, [c$1("&:hover", `
 background-color: var(--n-merged-color-hover);
 `, [cE("divider", `
 background-color: transparent;
 `)])])]), cM("bordered, hoverable", [cB("list-item", `
 padding: 12px 20px;
 `), cE("header, footer", `
 padding: 12px 20px;
 `)]), cE("header, footer", `
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `, [c$1("&:not(:last-child)", `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]), cB("list-item", `
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cE("prefix", `
 margin-right: 20px;
 flex: 0;
 `), cE("suffix", `
 margin-left: 20px;
 flex: 0;
 `), cE("main", `
 flex: 1;
 `), cE("divider", `
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]), insideModal(cB("list", `
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)), insidePopover(cB("list", `
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);
const listProps = Object.assign(Object.assign({}, useTheme.props), { size: {
  type: String,
  default: "medium"
}, bordered: Boolean, clickable: Boolean, hoverable: Boolean, showDivider: {
  type: Boolean,
  default: true
} });
const listInjectionKey = createInjectionKey("n-list");
const __unplugin_components_4 = defineComponent({
  name: "List",
  props: listProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const rtlEnabledRef = useRtl("List", mergedRtlRef, mergedClsPrefixRef);
    const themeRef = useTheme("List", "-list", style$7, listLight$1, props, mergedClsPrefixRef);
    provide(listInjectionKey, {
      showDividerRef: toRef(props, "showDivider"),
      mergedClsPrefixRef
    });
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: { fontSize, textColor, color, colorModal, colorPopover, borderColor, borderColorModal, borderColorPopover, borderRadius, colorHover, colorHoverModal, colorHoverPopover } } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-text-color": textColor,
        "--n-color": color,
        "--n-border-radius": borderRadius,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover,
        "--n-color-modal": colorModal,
        "--n-color-popover": colorPopover,
        "--n-color-hover": colorHover,
        "--n-color-hover-modal": colorHoverModal,
        "--n-color-hover-popover": colorHoverPopover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("list", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const { $slots, mergedClsPrefix, onRender } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(
      "ul",
      { class: [
        `${mergedClsPrefix}-list`,
        this.rtlEnabled && `${mergedClsPrefix}-list--rtl`,
        this.bordered && `${mergedClsPrefix}-list--bordered`,
        this.showDivider && `${mergedClsPrefix}-list--show-divider`,
        this.hoverable && `${mergedClsPrefix}-list--hoverable`,
        this.clickable && `${mergedClsPrefix}-list--clickable`,
        this.themeClass
      ], style: this.cssVars },
      $slots.header ? h("div", { class: `${mergedClsPrefix}-list__header` }, $slots.header()) : null,
      (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots),
      $slots.footer ? h("div", { class: `${mergedClsPrefix}-list__footer` }, $slots.footer()) : null
    );
  }
});
const __unplugin_components_3 = defineComponent({
  name: "ListItem",
  setup() {
    const listInjection = inject(listInjectionKey, null);
    if (!listInjection) {
      throwError("list-item", "`n-list-item` must be placed in `n-list`.");
    }
    return {
      showDivider: listInjection.showDividerRef,
      mergedClsPrefix: listInjection.mergedClsPrefixRef
    };
  },
  render() {
    const { $slots, mergedClsPrefix } = this;
    return h(
      "li",
      { class: `${mergedClsPrefix}-list-item` },
      $slots.prefix ? h("div", { class: `${mergedClsPrefix}-list-item__prefix` }, $slots.prefix()) : null,
      $slots.default ? h("div", { class: `${mergedClsPrefix}-list-item__main` }, $slots) : null,
      $slots.suffix ? h("div", { class: `${mergedClsPrefix}-list-item__suffix` }, $slots.suffix()) : null,
      this.showDivider && h("div", { class: `${mergedClsPrefix}-list-item__divider` })
    );
  }
});
const menuInjectionKey = createInjectionKey("n-menu");
const submenuInjectionKey = createInjectionKey("n-submenu");
const menuItemGroupInjectionKey = createInjectionKey("n-menu-item-group");
const ICON_MARGIN_RIGHT = 8;
function useMenuChild(props) {
  const NMenu = inject(menuInjectionKey);
  const { props: menuProps2, mergedCollapsedRef } = NMenu;
  const NSubmenu2 = inject(submenuInjectionKey, null);
  const NMenuOptionGroup2 = inject(menuItemGroupInjectionKey, null);
  const horizontalRef = computed(() => {
    return menuProps2.mode === "horizontal";
  });
  const dropdownPlacementRef = computed(() => {
    if (horizontalRef.value) {
      return menuProps2.dropdownPlacement;
    }
    if ("tmNodes" in props)
      return "right-start";
    return "right";
  });
  const maxIconSizeRef = computed(() => {
    var _a;
    return Math.max((_a = menuProps2.collapsedIconSize) !== null && _a !== void 0 ? _a : menuProps2.iconSize, menuProps2.iconSize);
  });
  const activeIconSizeRef = computed(() => {
    var _a;
    if (!horizontalRef.value && props.root && mergedCollapsedRef.value) {
      return (_a = menuProps2.collapsedIconSize) !== null && _a !== void 0 ? _a : menuProps2.iconSize;
    } else {
      return menuProps2.iconSize;
    }
  });
  const paddingLeftRef = computed(() => {
    if (horizontalRef.value)
      return void 0;
    const { collapsedWidth, indent, rootIndent } = menuProps2;
    const { root: root2, isGroup } = props;
    const mergedRootIndent = rootIndent === void 0 ? indent : rootIndent;
    if (root2) {
      if (mergedCollapsedRef.value) {
        return collapsedWidth / 2 - maxIconSizeRef.value / 2;
      }
      return mergedRootIndent;
    }
    if (NMenuOptionGroup2) {
      return indent / 2 + NMenuOptionGroup2.paddingLeftRef.value;
    }
    if (NSubmenu2) {
      return (isGroup ? indent / 2 : indent) + NSubmenu2.paddingLeftRef.value;
    }
    return void 0;
  });
  const iconMarginRightRef = computed(() => {
    const { collapsedWidth, indent, rootIndent } = menuProps2;
    const { value: maxIconSize } = maxIconSizeRef;
    const { root: root2 } = props;
    if (horizontalRef.value)
      return ICON_MARGIN_RIGHT;
    if (!root2)
      return ICON_MARGIN_RIGHT;
    if (!mergedCollapsedRef.value)
      return ICON_MARGIN_RIGHT;
    const mergedRootIndent = rootIndent === void 0 ? indent : rootIndent;
    return mergedRootIndent + maxIconSize + ICON_MARGIN_RIGHT - (collapsedWidth + maxIconSize) / 2;
  });
  return {
    dropdownPlacement: dropdownPlacementRef,
    activeIconSize: activeIconSizeRef,
    maxIconSize: maxIconSizeRef,
    paddingLeft: paddingLeftRef,
    iconMarginRight: iconMarginRightRef,
    NMenu,
    NSubmenu: NSubmenu2
  };
}
const useMenuChildProps = {
  internalKey: {
    type: [String, Number],
    required: true
  },
  root: Boolean,
  isGroup: Boolean,
  level: {
    type: Number,
    required: true
  },
  title: [String, Function],
  extra: [String, Function]
};
const menuItemGroupProps = Object.assign(Object.assign({}, useMenuChildProps), { tmNode: {
  type: Object,
  required: true
}, tmNodes: {
  type: Array,
  required: true
} });
const NMenuOptionGroup = defineComponent({
  name: "MenuOptionGroup",
  props: menuItemGroupProps,
  setup(props) {
    provide(submenuInjectionKey, null);
    const MenuChild = useMenuChild(props);
    provide(menuItemGroupInjectionKey, {
      paddingLeftRef: MenuChild.paddingLeft
    });
    const { mergedClsPrefixRef, props: menuProps2 } = inject(menuInjectionKey);
    return function() {
      const { value: mergedClsPrefix } = mergedClsPrefixRef;
      const paddingLeft = MenuChild.paddingLeft.value;
      const { nodeProps } = menuProps2;
      const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(props.tmNode.rawNode);
      return h(
        "div",
        { class: `${mergedClsPrefix}-menu-item-group`, role: "group" },
        h(
          "div",
          Object.assign({}, attrs, { class: [`${mergedClsPrefix}-menu-item-group-title`, attrs === null || attrs === void 0 ? void 0 : attrs.class], style: [
            (attrs === null || attrs === void 0 ? void 0 : attrs.style) || "",
            paddingLeft !== void 0 ? `padding-left: ${paddingLeft}px;` : ""
          ] }),
          render(props.title),
          props.extra ? h(
            Fragment,
            null,
            " ",
            render(props.extra)
          ) : null
        ),
        h("div", null, props.tmNodes.map((tmNode) => itemRenderer(tmNode, menuProps2)))
      );
    };
  }
});
const NMenuOptionContent = defineComponent({
  name: "MenuOptionContent",
  props: {
    collapsed: Boolean,
    disabled: Boolean,
    title: [String, Function],
    icon: Function,
    extra: [String, Function],
    showArrow: Boolean,
    childActive: Boolean,
    hover: Boolean,
    paddingLeft: Number,
    selected: Boolean,
    maxIconSize: {
      type: Number,
      required: true
    },
    activeIconSize: {
      type: Number,
      required: true
    },
    iconMarginRight: {
      type: Number,
      required: true
    },
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function,
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { props: menuProps2 } = inject(menuInjectionKey);
    return {
      menuProps: menuProps2,
      style: computed(() => {
        const { paddingLeft } = props;
        return { paddingLeft: paddingLeft && `${paddingLeft}px` };
      }),
      iconStyle: computed(() => {
        const { maxIconSize, activeIconSize, iconMarginRight } = props;
        return {
          width: `${maxIconSize}px`,
          height: `${maxIconSize}px`,
          fontSize: `${activeIconSize}px`,
          marginRight: `${iconMarginRight}px`
        };
      })
    };
  },
  render() {
    const { clsPrefix, tmNode, menuProps: { renderIcon: renderIcon2, renderLabel, renderExtra, expandIcon } } = this;
    const icon = renderIcon2 ? renderIcon2(tmNode.rawNode) : render(this.icon);
    return h(
      "div",
      { onClick: (e) => {
        var _a;
        (_a = this.onClick) === null || _a === void 0 ? void 0 : _a.call(this, e);
      }, role: "none", class: [
        `${clsPrefix}-menu-item-content`,
        {
          [`${clsPrefix}-menu-item-content--selected`]: this.selected,
          [`${clsPrefix}-menu-item-content--collapsed`]: this.collapsed,
          [`${clsPrefix}-menu-item-content--child-active`]: this.childActive,
          [`${clsPrefix}-menu-item-content--disabled`]: this.disabled,
          [`${clsPrefix}-menu-item-content--hover`]: this.hover
        }
      ], style: this.style },
      icon && h("div", { class: `${clsPrefix}-menu-item-content__icon`, style: this.iconStyle, role: "none" }, [icon]),
      h(
        "div",
        { class: `${clsPrefix}-menu-item-content-header`, role: "none" },
        renderLabel ? renderLabel(tmNode.rawNode) : render(this.title),
        this.extra || renderExtra ? h(
          "span",
          { class: `${clsPrefix}-menu-item-content-header__extra` },
          " ",
          renderExtra ? renderExtra(tmNode.rawNode) : render(this.extra)
        ) : null
      ),
      this.showArrow ? h(NBaseIcon, { ariaHidden: true, class: `${clsPrefix}-menu-item-content__arrow`, clsPrefix }, {
        default: () => expandIcon ? expandIcon(tmNode.rawNode) : h(ChevronDownFilledIcon, null)
      }) : null
    );
  }
});
const submenuProps = Object.assign(Object.assign({}, useMenuChildProps), { rawNodes: {
  type: Array,
  default: () => []
}, tmNodes: {
  type: Array,
  default: () => []
}, tmNode: {
  type: Object,
  required: true
}, disabled: {
  type: Boolean,
  default: false
}, icon: Function, onClick: Function });
const NSubmenu = defineComponent({
  name: "Submenu",
  props: submenuProps,
  setup(props) {
    const MenuChild = useMenuChild(props);
    const { NMenu, NSubmenu: NSubmenu2 } = MenuChild;
    const { props: menuProps2, mergedCollapsedRef, mergedThemeRef } = NMenu;
    const mergedDisabledRef = computed(() => {
      const { disabled } = props;
      if (NSubmenu2 === null || NSubmenu2 === void 0 ? void 0 : NSubmenu2.mergedDisabledRef.value)
        return true;
      if (menuProps2.disabled)
        return true;
      return disabled;
    });
    const dropdownShowRef = ref(false);
    provide(submenuInjectionKey, {
      paddingLeftRef: MenuChild.paddingLeft,
      mergedDisabledRef
    });
    provide(menuItemGroupInjectionKey, null);
    function doClick() {
      const { onClick } = props;
      if (onClick)
        onClick();
    }
    function handleClick() {
      if (!mergedDisabledRef.value) {
        if (!mergedCollapsedRef.value) {
          NMenu.toggleExpand(props.internalKey);
        }
        doClick();
      }
    }
    function handlePopoverShowChange(value) {
      dropdownShowRef.value = value;
    }
    return {
      menuProps: menuProps2,
      mergedTheme: mergedThemeRef,
      doSelect: NMenu.doSelect,
      inverted: NMenu.invertedRef,
      isHorizontal: NMenu.isHorizontalRef,
      mergedClsPrefix: NMenu.mergedClsPrefixRef,
      maxIconSize: MenuChild.maxIconSize,
      activeIconSize: MenuChild.activeIconSize,
      iconMarginRight: MenuChild.iconMarginRight,
      dropdownPlacement: MenuChild.dropdownPlacement,
      dropdownShow: dropdownShowRef,
      paddingLeft: MenuChild.paddingLeft,
      mergedDisabled: mergedDisabledRef,
      mergedValue: NMenu.mergedValueRef,
      childActive: useMemo(() => {
        return NMenu.activePathRef.value.includes(props.internalKey);
      }),
      collapsed: computed(() => {
        if (menuProps2.mode === "horizontal")
          return false;
        if (mergedCollapsedRef.value) {
          return true;
        }
        return !NMenu.mergedExpandedKeysRef.value.includes(props.internalKey);
      }),
      dropdownEnabled: computed(() => {
        return !mergedDisabledRef.value && (menuProps2.mode === "horizontal" || mergedCollapsedRef.value);
      }),
      handlePopoverShowChange,
      handleClick
    };
  },
  render() {
    var _a;
    const { mergedClsPrefix, menuProps: { renderIcon: renderIcon2, renderLabel } } = this;
    const createSubmenuItem = () => {
      const { isHorizontal, paddingLeft, collapsed, mergedDisabled, maxIconSize, activeIconSize, title, childActive, icon, handleClick, menuProps: { nodeProps }, dropdownShow, iconMarginRight, tmNode, mergedClsPrefix: mergedClsPrefix2 } = this;
      const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(tmNode.rawNode);
      return h(
        "div",
        Object.assign({}, attrs, { class: [`${mergedClsPrefix2}-menu-item`, attrs === null || attrs === void 0 ? void 0 : attrs.class], role: "menuitem" }),
        h(NMenuOptionContent, { tmNode, paddingLeft, collapsed, disabled: mergedDisabled, iconMarginRight, maxIconSize, activeIconSize, title, extra: this.extra, showArrow: !isHorizontal, childActive, clsPrefix: mergedClsPrefix2, icon, hover: dropdownShow, onClick: handleClick })
      );
    };
    const createSubmenuChildren = () => {
      return h(NFadeInExpandTransition, null, {
        default: () => {
          const { tmNodes, collapsed } = this;
          return !collapsed ? h("div", { class: `${mergedClsPrefix}-submenu-children`, role: "menu" }, tmNodes.map((item) => itemRenderer(item, this.menuProps))) : null;
        }
      });
    };
    return this.root ? h(__unplugin_components_2$2, Object.assign({ size: "large", trigger: "hover" }, (_a = this.menuProps) === null || _a === void 0 ? void 0 : _a.dropdownProps, { themeOverrides: this.mergedTheme.peerOverrides.Dropdown, theme: this.mergedTheme.peers.Dropdown, builtinThemeOverrides: {
      fontSizeLarge: "14px",
      optionIconSizeLarge: "18px"
    }, value: this.mergedValue, disabled: !this.dropdownEnabled, placement: this.dropdownPlacement, keyField: this.menuProps.keyField, labelField: this.menuProps.labelField, childrenField: this.menuProps.childrenField, onUpdateShow: this.handlePopoverShowChange, options: this.rawNodes, onSelect: this.doSelect, inverted: this.inverted, renderIcon: renderIcon2, renderLabel }), {
      default: () => h(
        "div",
        { class: `${mergedClsPrefix}-submenu`, role: "menuitem", "aria-expanded": !this.collapsed },
        createSubmenuItem(),
        this.isHorizontal ? null : createSubmenuChildren()
      )
    }) : h(
      "div",
      { class: `${mergedClsPrefix}-submenu`, role: "menuitem", "aria-expanded": !this.collapsed },
      createSubmenuItem(),
      createSubmenuChildren()
    );
  }
});
const menuItemProps = Object.assign(Object.assign({}, useMenuChildProps), { tmNode: {
  type: Object,
  required: true
}, disabled: Boolean, icon: Function, onClick: Function });
const NMenuOption = defineComponent({
  name: "MenuOption",
  props: menuItemProps,
  setup(props) {
    const MenuChild = useMenuChild(props);
    const { NSubmenu: NSubmenu2, NMenu } = MenuChild;
    const { props: menuProps2, mergedClsPrefixRef, mergedCollapsedRef } = NMenu;
    const submenuDisabledRef = NSubmenu2 ? NSubmenu2.mergedDisabledRef : { value: false };
    const mergedDisabledRef = computed(() => {
      return submenuDisabledRef.value || props.disabled;
    });
    function doClick(e) {
      const { onClick } = props;
      if (onClick)
        onClick(e);
    }
    function handleClick(e) {
      if (!mergedDisabledRef.value) {
        NMenu.doSelect(props.internalKey, props.tmNode.rawNode);
        doClick(e);
      }
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      dropdownPlacement: MenuChild.dropdownPlacement,
      paddingLeft: MenuChild.paddingLeft,
      iconMarginRight: MenuChild.iconMarginRight,
      maxIconSize: MenuChild.maxIconSize,
      activeIconSize: MenuChild.activeIconSize,
      mergedTheme: NMenu.mergedThemeRef,
      menuProps: menuProps2,
      dropdownEnabled: useMemo(() => {
        return props.root && mergedCollapsedRef.value && menuProps2.mode !== "horizontal" && !mergedDisabledRef.value;
      }),
      selected: useMemo(() => {
        if (NMenu.mergedValueRef.value === props.internalKey)
          return true;
        return false;
      }),
      mergedDisabled: mergedDisabledRef,
      handleClick
    };
  },
  render() {
    const { mergedClsPrefix, mergedTheme, tmNode, menuProps: { renderLabel, nodeProps } } = this;
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(tmNode.rawNode);
    return h(
      "div",
      Object.assign({}, attrs, { role: "menuitem", class: [`${mergedClsPrefix}-menu-item`, attrs === null || attrs === void 0 ? void 0 : attrs.class] }),
      h(NTooltip, { theme: mergedTheme.peers.Tooltip, themeOverrides: mergedTheme.peerOverrides.Tooltip, trigger: "hover", placement: this.dropdownPlacement, disabled: !this.dropdownEnabled || this.title === void 0, internalExtraClass: ["menu-tooltip"] }, {
        default: () => renderLabel ? renderLabel(tmNode.rawNode) : render(this.title),
        trigger: () => h(NMenuOptionContent, { tmNode, clsPrefix: mergedClsPrefix, paddingLeft: this.paddingLeft, iconMarginRight: this.iconMarginRight, maxIconSize: this.maxIconSize, activeIconSize: this.activeIconSize, selected: this.selected, title: this.title, extra: this.extra, disabled: this.mergedDisabled, icon: this.icon, onClick: this.handleClick })
      })
    );
  }
});
const NMenuDivider = defineComponent({
  name: "MenuDivider",
  setup() {
    const NMenu = inject(menuInjectionKey);
    const { mergedClsPrefixRef, isHorizontalRef } = NMenu;
    return () => isHorizontalRef.value ? null : h("div", { class: `${mergedClsPrefixRef.value}-menu-divider` });
  }
});
const groupPropKeys = keysOf(menuItemGroupProps);
const itemPropKeys = keysOf(menuItemProps);
const submenuPropKeys = keysOf(submenuProps);
function isIgnoredNode(rawNode) {
  return rawNode.type === "divider" || rawNode.type === "render";
}
function isDividerNode(rawNode) {
  return rawNode.type === "divider";
}
function itemRenderer(tmNode, menuProps2) {
  const { rawNode } = tmNode;
  const { show } = rawNode;
  if (show === false) {
    return null;
  }
  if (isIgnoredNode(rawNode)) {
    if (isDividerNode(rawNode)) {
      return h(NMenuDivider, Object.assign({ key: tmNode.key }, rawNode.props));
    }
    return null;
  }
  const { labelField } = menuProps2;
  const { key, level, isGroup } = tmNode;
  const props = Object.assign(Object.assign({}, rawNode), {
    title: rawNode.title || rawNode[labelField],
    extra: rawNode.titleExtra || rawNode.extra,
    key,
    internalKey: key,
    // since key can't be used as a prop
    level,
    root: level === 0,
    isGroup
  });
  if (tmNode.children) {
    if (tmNode.isGroup) {
      return h(NMenuOptionGroup, keep(props, groupPropKeys, { tmNode, tmNodes: tmNode.children, key }));
    }
    return h(NSubmenu, keep(props, submenuPropKeys, {
      key,
      rawNodes: rawNode[menuProps2.childrenField],
      tmNodes: tmNode.children,
      tmNode
    }));
  } else {
    return h(NMenuOption, keep(props, itemPropKeys, {
      key,
      tmNode
    }));
  }
}
function useCheckDeprecated(props) {
  watchEffect(() => {
    if (props.items) {
      warnOnce("menu", "`items` is deprecated, please use `options` instead.");
    }
    if (props.onOpenNamesChange) {
      warnOnce("menu", "`on-open-names-change` is deprecated, please use `on-update:expanded-keys` instead.");
    }
    if (props.onSelect) {
      warnOnce("menu", "`on-select` is deprecated, please use `on-update:value` instead.");
    }
    if (props.onExpandedNamesChange) {
      warnOnce("menu", "`on-expanded-names-change` is deprecated, please use `on-update:expanded-keys` instead.");
    }
    if (props.expandedNames) {
      warnOnce("menu", "`expanded-names` is deprecated, please use `expanded-keys` instead.");
    }
    if (props.defaultExpandedNames) {
      warnOnce("menu", "`default-expanded-names` is deprecated, please use `default-expanded-keys` instead.");
    }
  });
}
const hoverStyleChildren = [c$1("&::before", "background-color: var(--n-item-color-hover);"), cE("arrow", `
 color: var(--n-arrow-color-hover);
 `), cE("icon", `
 color: var(--n-item-icon-color-hover);
 `), cB("menu-item-content-header", `
 color: var(--n-item-text-color-hover);
 `, [c$1("a", `
 color: var(--n-item-text-color-hover);
 `), cE("extra", `
 color: var(--n-item-text-color-hover);
 `)])];
const horizontalHoverStyleChildren = [cE("icon", `
 color: var(--n-item-icon-color-hover-horizontal);
 `), cB("menu-item-content-header", `
 color: var(--n-item-text-color-hover-horizontal);
 `, [c$1("a", `
 color: var(--n-item-text-color-hover-horizontal);
 `), cE("extra", `
 color: var(--n-item-text-color-hover-horizontal);
 `)])];
const style$6 = c$1([cB("menu", `
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `, [cM("horizontal", `
 display: inline-flex;
 padding-bottom: 0;
 `, [cB("submenu", "margin: 0;"), cB("menu-item", "margin: 0;"), cB("menu-item-content", `
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `, [c$1("&::before", "display: none;"), cM("selected", "border-bottom: 2px solid var(--n-border-color-horizontal)")]), cB("menu-item-content", [cM("selected", [cE("icon", "color: var(--n-item-icon-color-active-horizontal);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active-horizontal);
 `, [c$1("a", "color: var(--n-item-text-color-active-horizontal);"), cE("extra", "color: var(--n-item-text-color-active-horizontal);")])]), cM("child-active", `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `, [cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-horizontal);
 `, [c$1("a", `
 color: var(--n-item-text-color-child-active-horizontal);
 `), cE("extra", `
 color: var(--n-item-text-color-child-active-horizontal);
 `)]), cE("icon", `
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]), cNotM("disabled", [cNotM("selected, child-active", [c$1("&:focus-within", horizontalHoverStyleChildren)]), cM("selected", [hoverStyle(null, [cE("icon", "color: var(--n-item-icon-color-active-hover-horizontal);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover-horizontal);
 `, [c$1("a", "color: var(--n-item-text-color-active-hover-horizontal);"), cE("extra", "color: var(--n-item-text-color-active-hover-horizontal);")])])]), cM("child-active", [hoverStyle(null, [cE("icon", "color: var(--n-item-icon-color-child-active-hover-horizontal);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `, [c$1("a", "color: var(--n-item-text-color-child-active-hover-horizontal);"), cE("extra", "color: var(--n-item-text-color-child-active-hover-horizontal);")])])]), hoverStyle("border-bottom: 2px solid var(--n-border-color-horizontal);", horizontalHoverStyleChildren)]), cB("menu-item-content-header", [c$1("a", "color: var(--n-item-text-color-horizontal);")])])]), cM("collapsed", [cB("menu-item-content", [cM("selected", [c$1("&::before", `
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]), cB("menu-item-content-header", "opacity: 0;"), cE("arrow", "opacity: 0;"), cE("icon", "color: var(--n-item-icon-color-collapsed);")])]), cB("menu-item", `
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `), cB("menu-item-content", `
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [c$1("> *", "z-index: 1;"), c$1("&::before", `
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), cM("disabled", `
 opacity: .45;
 cursor: not-allowed;
 `), cM("collapsed", [cE("arrow", "transform: rotate(0);")]), cM("selected", [c$1("&::before", "background-color: var(--n-item-color-active);"), cE("arrow", "color: var(--n-arrow-color-active);"), cE("icon", "color: var(--n-item-icon-color-active);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active);
 `, [c$1("a", "color: var(--n-item-text-color-active);"), cE("extra", "color: var(--n-item-text-color-active);")])]), cM("child-active", [cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active);
 `, [c$1("a", `
 color: var(--n-item-text-color-child-active);
 `), cE("extra", `
 color: var(--n-item-text-color-child-active);
 `)]), cE("arrow", `
 color: var(--n-arrow-color-child-active);
 `), cE("icon", `
 color: var(--n-item-icon-color-child-active);
 `)]), cNotM("disabled", [cNotM("selected, child-active", [c$1("&:focus-within", hoverStyleChildren)]), cM("selected", [hoverStyle(null, [cE("arrow", "color: var(--n-arrow-color-active-hover);"), cE("icon", "color: var(--n-item-icon-color-active-hover);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover);
 `, [c$1("a", "color: var(--n-item-text-color-active-hover);"), cE("extra", "color: var(--n-item-text-color-active-hover);")])])]), cM("child-active", [hoverStyle(null, [cE("arrow", "color: var(--n-arrow-color-child-active-hover);"), cE("icon", "color: var(--n-item-icon-color-child-active-hover);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover);
 `, [c$1("a", "color: var(--n-item-text-color-child-active-hover);"), cE("extra", "color: var(--n-item-text-color-child-active-hover);")])])]), cM("selected", [hoverStyle(null, [c$1("&::before", "background-color: var(--n-item-color-active-hover);")])]), hoverStyle(null, hoverStyleChildren)]), cE("icon", `
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `), cE("arrow", `
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `), cB("menu-item-content-header", `
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `, [c$1("a", `
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `, [c$1("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cE("extra", `
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]), cB("submenu", `
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `, [cB("menu-item-content", `
 height: var(--n-item-height);
 `), cB("submenu-children", `
 overflow: hidden;
 padding: 0;
 `, [fadeInHeightExpandTransition({
  duration: ".2s"
})])]), cB("menu-item-group", [cB("menu-item-group-title", `
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]), cB("menu-tooltip", [c$1("a", `
 color: inherit;
 text-decoration: none;
 `)]), cB("menu-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);
function hoverStyle(props, children) {
  return [cM("hover", props, children), c$1("&:hover", props, children)];
}
const menuProps = Object.assign(Object.assign({}, useTheme.props), {
  options: {
    type: Array,
    default: () => []
  },
  collapsed: {
    type: Boolean,
    default: void 0
  },
  collapsedWidth: {
    type: Number,
    default: 48
  },
  iconSize: {
    type: Number,
    default: 20
  },
  collapsedIconSize: {
    type: Number,
    default: 24
  },
  rootIndent: Number,
  indent: {
    type: Number,
    default: 32
  },
  labelField: {
    type: String,
    default: "label"
  },
  keyField: {
    type: String,
    default: "key"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  disabledField: {
    type: String,
    default: "disabled"
  },
  defaultExpandAll: Boolean,
  defaultExpandedKeys: Array,
  expandedKeys: Array,
  value: [String, Number],
  defaultValue: {
    type: [String, Number],
    default: null
  },
  mode: {
    type: String,
    default: "vertical"
  },
  watchProps: {
    type: Array,
    default: void 0
  },
  disabled: Boolean,
  show: {
    type: Boolean,
    default: true
  },
  inverted: Boolean,
  "onUpdate:expandedKeys": [Function, Array],
  onUpdateExpandedKeys: [Function, Array],
  onUpdateValue: [Function, Array],
  "onUpdate:value": [Function, Array],
  expandIcon: Function,
  renderIcon: Function,
  renderLabel: Function,
  renderExtra: Function,
  dropdownProps: Object,
  accordion: Boolean,
  nodeProps: Function,
  // deprecated
  items: Array,
  onOpenNamesChange: [Function, Array],
  onSelect: [Function, Array],
  onExpandedNamesChange: [Function, Array],
  expandedNames: Array,
  defaultExpandedNames: Array,
  dropdownPlacement: {
    type: String,
    default: "bottom"
  }
});
const __unplugin_components_0 = defineComponent({
  name: "Menu",
  props: menuProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      useCheckDeprecated(props);
    }
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Menu", "-menu", style$6, menuLight$1, props, mergedClsPrefixRef);
    const layoutSider = inject(layoutSiderInjectionKey, null);
    const mergedCollapsedRef = computed(() => {
      var _a;
      const { collapsed } = props;
      if (collapsed !== void 0)
        return collapsed;
      if (layoutSider) {
        const { collapseModeRef, collapsedRef } = layoutSider;
        if (collapseModeRef.value === "width") {
          return (_a = collapsedRef.value) !== null && _a !== void 0 ? _a : false;
        }
      }
      return false;
    });
    const treeMateRef = computed(() => {
      const { keyField, childrenField, disabledField } = props;
      return createTreeMate(props.items || props.options, {
        getIgnored(node) {
          return isIgnoredNode(node);
        },
        getChildren(node) {
          return node[childrenField];
        },
        getDisabled(node) {
          return node[disabledField];
        },
        getKey(node) {
          var _a;
          return (_a = node[keyField]) !== null && _a !== void 0 ? _a : node.name;
        }
      });
    });
    const treeKeysLevelOneRef = computed(() => new Set(treeMateRef.value.treeNodes.map((e) => e.key)));
    const { watchProps } = props;
    const uncontrolledValueRef = ref(null);
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultValue")) {
      watchEffect(() => {
        uncontrolledValueRef.value = props.defaultValue;
      });
    } else {
      uncontrolledValueRef.value = props.defaultValue;
    }
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const uncontrolledExpandedKeysRef = ref([]);
    const initUncontrolledExpandedKeys = () => {
      uncontrolledExpandedKeysRef.value = props.defaultExpandAll ? treeMateRef.value.getNonLeafKeys() : props.defaultExpandedNames || props.defaultExpandedKeys || treeMateRef.value.getPath(mergedValueRef.value, {
        includeSelf: false
      }).keyPath;
    };
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultExpandedKeys")) {
      watchEffect(initUncontrolledExpandedKeys);
    } else {
      initUncontrolledExpandedKeys();
    }
    const controlledExpandedKeysRef = useCompitable(props, [
      "expandedNames",
      "expandedKeys"
    ]);
    const mergedExpandedKeysRef = useMergedState(controlledExpandedKeysRef, uncontrolledExpandedKeysRef);
    const tmNodesRef = computed(() => treeMateRef.value.treeNodes);
    const activePathRef = computed(() => {
      return treeMateRef.value.getPath(mergedValueRef.value).keyPath;
    });
    provide(menuInjectionKey, {
      props,
      mergedCollapsedRef,
      mergedThemeRef: themeRef,
      mergedValueRef,
      mergedExpandedKeysRef,
      activePathRef,
      mergedClsPrefixRef,
      isHorizontalRef: computed(() => props.mode === "horizontal"),
      invertedRef: toRef(props, "inverted"),
      doSelect,
      toggleExpand
    });
    function doSelect(value, item) {
      const { "onUpdate:value": _onUpdateValue, onUpdateValue, onSelect } = props;
      if (onUpdateValue) {
        call(onUpdateValue, value, item);
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, item);
      }
      if (onSelect) {
        call(onSelect, value, item);
      }
      uncontrolledValueRef.value = value;
    }
    function doUpdateExpandedKeys(value) {
      const { "onUpdate:expandedKeys": _onUpdateExpandedKeys, onUpdateExpandedKeys, onExpandedNamesChange, onOpenNamesChange } = props;
      if (_onUpdateExpandedKeys) {
        call(_onUpdateExpandedKeys, value);
      }
      if (onUpdateExpandedKeys) {
        call(onUpdateExpandedKeys, value);
      }
      if (onExpandedNamesChange) {
        call(onExpandedNamesChange, value);
      }
      if (onOpenNamesChange) {
        call(onOpenNamesChange, value);
      }
      uncontrolledExpandedKeysRef.value = value;
    }
    function toggleExpand(key) {
      const currentExpandedKeys = Array.from(mergedExpandedKeysRef.value);
      const index2 = currentExpandedKeys.findIndex((expanededKey) => expanededKey === key);
      if (~index2) {
        currentExpandedKeys.splice(index2, 1);
      } else {
        if (props.accordion) {
          if (treeKeysLevelOneRef.value.has(key)) {
            const closeKeyIndex = currentExpandedKeys.findIndex((e) => treeKeysLevelOneRef.value.has(e));
            if (closeKeyIndex > -1) {
              currentExpandedKeys.splice(closeKeyIndex, 1);
            }
          }
        }
        currentExpandedKeys.push(key);
      }
      doUpdateExpandedKeys(currentExpandedKeys);
    }
    const showOption = (key) => {
      const selectedKeyPath = treeMateRef.value.getPath(key !== null && key !== void 0 ? key : mergedValueRef.value, {
        includeSelf: false
      }).keyPath;
      if (!selectedKeyPath.length)
        return;
      const currentExpandedKeys = Array.from(mergedExpandedKeysRef.value);
      const nextExpandedKeys = /* @__PURE__ */ new Set([
        ...currentExpandedKeys,
        ...selectedKeyPath
      ]);
      if (props.accordion) {
        treeKeysLevelOneRef.value.forEach((firstLevelKey) => {
          if (nextExpandedKeys.has(firstLevelKey) && !selectedKeyPath.includes(firstLevelKey)) {
            nextExpandedKeys.delete(firstLevelKey);
          }
        });
      }
      doUpdateExpandedKeys(Array.from(nextExpandedKeys));
    };
    const cssVarsRef = computed(() => {
      const { inverted } = props;
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: self2 } = themeRef.value;
      const { borderRadius, borderColorHorizontal, fontSize, itemHeight, dividerColor } = self2;
      const vars = {
        "--n-divider-color": dividerColor,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-font-size": fontSize,
        "--n-border-color-horizontal": borderColorHorizontal,
        "--n-border-radius": borderRadius,
        "--n-item-height": itemHeight
      };
      if (inverted) {
        vars["--n-group-text-color"] = self2.groupTextColorInverted;
        vars["--n-color"] = self2.colorInverted;
        vars["--n-item-text-color"] = self2.itemTextColorInverted;
        vars["--n-item-text-color-hover"] = self2.itemTextColorHoverInverted;
        vars["--n-item-text-color-active"] = self2.itemTextColorActiveInverted;
        vars["--n-item-text-color-child-active"] = self2.itemTextColorChildActiveInverted;
        vars["--n-item-text-color-child-active-hover"] = self2.itemTextColorChildActiveInverted;
        vars["--n-item-text-color-active-hover"] = self2.itemTextColorActiveHoverInverted;
        vars["--n-item-icon-color"] = self2.itemIconColorInverted;
        vars["--n-item-icon-color-hover"] = self2.itemIconColorHoverInverted;
        vars["--n-item-icon-color-active"] = self2.itemIconColorActiveInverted;
        vars["--n-item-icon-color-active-hover"] = self2.itemIconColorActiveHoverInverted;
        vars["--n-item-icon-color-child-active"] = self2.itemIconColorChildActiveInverted;
        vars["--n-item-icon-color-child-active-hover"] = self2.itemIconColorChildActiveHoverInverted;
        vars["--n-item-icon-color-collapsed"] = self2.itemIconColorCollapsedInverted;
        vars["--n-item-text-color-horizontal"] = self2.itemTextColorHorizontalInverted;
        vars["--n-item-text-color-hover-horizontal"] = self2.itemTextColorHoverHorizontalInverted;
        vars["--n-item-text-color-active-horizontal"] = self2.itemTextColorActiveHorizontalInverted;
        vars["--n-item-text-color-child-active-horizontal"] = self2.itemTextColorChildActiveHorizontalInverted;
        vars["--n-item-text-color-child-active-hover-horizontal"] = self2.itemTextColorChildActiveHoverHorizontalInverted;
        vars["--n-item-text-color-active-hover-horizontal"] = self2.itemTextColorActiveHoverHorizontalInverted;
        vars["--n-item-icon-color-horizontal"] = self2.itemIconColorHorizontalInverted;
        vars["--n-item-icon-color-hover-horizontal"] = self2.itemIconColorHoverHorizontalInverted;
        vars["--n-item-icon-color-active-horizontal"] = self2.itemIconColorActiveHorizontalInverted;
        vars["--n-item-icon-color-active-hover-horizontal"] = self2.itemIconColorActiveHoverHorizontalInverted;
        vars["--n-item-icon-color-child-active-horizontal"] = self2.itemIconColorChildActiveHorizontalInverted;
        vars["--n-item-icon-color-child-active-hover-horizontal"] = self2.itemIconColorChildActiveHoverHorizontalInverted;
        vars["--n-arrow-color"] = self2.arrowColorInverted;
        vars["--n-arrow-color-hover"] = self2.arrowColorHoverInverted;
        vars["--n-arrow-color-active"] = self2.arrowColorActiveInverted;
        vars["--n-arrow-color-active-hover"] = self2.arrowColorActiveHoverInverted;
        vars["--n-arrow-color-child-active"] = self2.arrowColorChildActiveInverted;
        vars["--n-arrow-color-child-active-hover"] = self2.arrowColorChildActiveHoverInverted;
        vars["--n-item-color-hover"] = self2.itemColorHoverInverted;
        vars["--n-item-color-active"] = self2.itemColorActiveInverted;
        vars["--n-item-color-active-hover"] = self2.itemColorActiveHoverInverted;
        vars["--n-item-color-active-collapsed"] = self2.itemColorActiveCollapsedInverted;
      } else {
        vars["--n-group-text-color"] = self2.groupTextColor;
        vars["--n-color"] = self2.color;
        vars["--n-item-text-color"] = self2.itemTextColor;
        vars["--n-item-text-color-hover"] = self2.itemTextColorHover;
        vars["--n-item-text-color-active"] = self2.itemTextColorActive;
        vars["--n-item-text-color-child-active"] = self2.itemTextColorChildActive;
        vars["--n-item-text-color-child-active-hover"] = self2.itemTextColorChildActiveHover;
        vars["--n-item-text-color-active-hover"] = self2.itemTextColorActiveHover;
        vars["--n-item-icon-color"] = self2.itemIconColor;
        vars["--n-item-icon-color-hover"] = self2.itemIconColorHover;
        vars["--n-item-icon-color-active"] = self2.itemIconColorActive;
        vars["--n-item-icon-color-active-hover"] = self2.itemIconColorActiveHover;
        vars["--n-item-icon-color-child-active"] = self2.itemIconColorChildActive;
        vars["--n-item-icon-color-child-active-hover"] = self2.itemIconColorChildActiveHover;
        vars["--n-item-icon-color-collapsed"] = self2.itemIconColorCollapsed;
        vars["--n-item-text-color-horizontal"] = self2.itemTextColorHorizontal;
        vars["--n-item-text-color-hover-horizontal"] = self2.itemTextColorHoverHorizontal;
        vars["--n-item-text-color-active-horizontal"] = self2.itemTextColorActiveHorizontal;
        vars["--n-item-text-color-child-active-horizontal"] = self2.itemTextColorChildActiveHorizontal;
        vars["--n-item-text-color-child-active-hover-horizontal"] = self2.itemTextColorChildActiveHoverHorizontal;
        vars["--n-item-text-color-active-hover-horizontal"] = self2.itemTextColorActiveHoverHorizontal;
        vars["--n-item-icon-color-horizontal"] = self2.itemIconColorHorizontal;
        vars["--n-item-icon-color-hover-horizontal"] = self2.itemIconColorHoverHorizontal;
        vars["--n-item-icon-color-active-horizontal"] = self2.itemIconColorActiveHorizontal;
        vars["--n-item-icon-color-active-hover-horizontal"] = self2.itemIconColorActiveHoverHorizontal;
        vars["--n-item-icon-color-child-active-horizontal"] = self2.itemIconColorChildActiveHorizontal;
        vars["--n-item-icon-color-child-active-hover-horizontal"] = self2.itemIconColorChildActiveHoverHorizontal;
        vars["--n-arrow-color"] = self2.arrowColor;
        vars["--n-arrow-color-hover"] = self2.arrowColorHover;
        vars["--n-arrow-color-active"] = self2.arrowColorActive;
        vars["--n-arrow-color-active-hover"] = self2.arrowColorActiveHover;
        vars["--n-arrow-color-child-active"] = self2.arrowColorChildActive;
        vars["--n-arrow-color-child-active-hover"] = self2.arrowColorChildActiveHover;
        vars["--n-item-color-hover"] = self2.itemColorHover;
        vars["--n-item-color-active"] = self2.itemColorActive;
        vars["--n-item-color-active-hover"] = self2.itemColorActiveHover;
        vars["--n-item-color-active-collapsed"] = self2.itemColorActiveCollapsed;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("menu", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      controlledExpandedKeys: controlledExpandedKeysRef,
      uncontrolledExpanededKeys: uncontrolledExpandedKeysRef,
      mergedExpandedKeys: mergedExpandedKeysRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      activePath: activePathRef,
      tmNodes: tmNodesRef,
      mergedTheme: themeRef,
      mergedCollapsed: mergedCollapsedRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      showOption
    };
  },
  render() {
    const { mergedClsPrefix, mode, themeClass, onRender } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", { role: mode === "horizontal" ? "menubar" : "menu", class: [
      `${mergedClsPrefix}-menu`,
      themeClass,
      `${mergedClsPrefix}-menu--${mode}`,
      this.mergedCollapsed && `${mergedClsPrefix}-menu--collapsed`
    ], style: this.cssVars }, this.tmNodes.map((tmNode) => itemRenderer(tmNode, this.$props)));
  }
});
const style$5 = cB("statistic", [cE("label", `
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `), cB("statistic-value", `
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `, [cE("prefix", `
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `, [cB("icon", {
  verticalAlign: "-0.125em"
})]), cE("content", `
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `), cE("suffix", `
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `, [cB("icon", {
  verticalAlign: "-0.125em"
})])])]);
const statisticProps = Object.assign(Object.assign({}, useTheme.props), { tabularNums: Boolean, label: String, value: [String, Number] });
const __unplugin_components_7 = defineComponent({
  name: "Statistic",
  props: statisticProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Statistic", "-statistic", style$5, statisticLight$1, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Statistic", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { self: { labelFontWeight, valueFontSize, valueFontWeight, valuePrefixTextColor, labelTextColor, valueSuffixTextColor, valueTextColor, labelFontSize }, common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-label-font-size": labelFontSize,
        "--n-label-font-weight": labelFontWeight,
        "--n-label-text-color": labelTextColor,
        "--n-value-font-weight": valueFontWeight,
        "--n-value-font-size": valueFontSize,
        "--n-value-prefix-text-color": valuePrefixTextColor,
        "--n-value-suffix-text-color": valueSuffixTextColor,
        "--n-value-text-color": valueTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("statistic", void 0, cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const { mergedClsPrefix, $slots: { default: defaultSlot, label: labelSlot, prefix: prefixSlot, suffix: suffixSlot } } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(
      "div",
      { class: [
        `${mergedClsPrefix}-statistic`,
        this.themeClass,
        this.rtlEnabled && `${mergedClsPrefix}-statistic--rtl`
      ], style: this.cssVars },
      resolveWrappedSlot(labelSlot, (children) => h("div", { class: `${mergedClsPrefix}-statistic__label` }, this.label || children)),
      h(
        "div",
        { class: `${mergedClsPrefix}-statistic-value`, style: {
          fontVariantNumeric: this.tabularNums ? "tabular-nums" : ""
        } },
        resolveWrappedSlot(prefixSlot, (children) => children && h("span", { class: `${mergedClsPrefix}-statistic-value__prefix` }, children)),
        this.value !== void 0 ? h("span", { class: `${mergedClsPrefix}-statistic-value__content` }, this.value) : resolveWrappedSlot(defaultSlot, (children) => children && h("span", { class: `${mergedClsPrefix}-statistic-value__content` }, children)),
        resolveWrappedSlot(suffixSlot, (children) => children && h("span", { class: `${mergedClsPrefix}-statistic-value__suffix` }, children))
      )
    );
  }
});
const style$4 = cB("switch", `
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`, [cE("children-placeholder", `
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `), cE("rail-placeholder", `
 display: flex;
 flex-wrap: none;
 `), cE("button-placeholder", `
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `), cB("base-loading", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `, [iconSwitchTransition({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), cE("checked, unchecked", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `), cE("checked", `
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), cE("unchecked", `
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), c$1("&:focus", [cE("rail", `
 box-shadow: var(--n-box-shadow-focus);
 `)]), cM("round", [cE("rail", "border-radius: calc(var(--n-rail-height) / 2);", [cE("button", "border-radius: calc(var(--n-button-height) / 2);")])]), cNotM("disabled", [cNotM("icon", [cM("rubber-band", [cM("pressed", [cE("rail", [cE("button", "max-width: var(--n-button-width-pressed);")])]), cE("rail", [c$1("&:active", [cE("button", "max-width: var(--n-button-width-pressed);")])]), cM("active", [cM("pressed", [cE("rail", [cE("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]), cE("rail", [c$1("&:active", [cE("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]), cM("active", [cE("rail", [cE("button", "left: calc(100% - var(--n-button-width) - var(--n-offset))")])]), cE("rail", `
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `, [cE("button-icon", `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `, [iconSwitchTransition()]), cE("button", `
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]), cM("active", [cE("rail", "background-color: var(--n-rail-color-active);")]), cM("loading", [cE("rail", `
 cursor: wait;
 `)]), cM("disabled", [cE("rail", `
 cursor: not-allowed;
 opacity: .5;
 `)])]);
const switchProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: String,
    default: "medium"
  },
  value: {
    type: [String, Number, Boolean],
    default: void 0
  },
  loading: Boolean,
  defaultValue: {
    type: [String, Number, Boolean],
    default: false
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  round: {
    type: Boolean,
    default: true
  },
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  checkedValue: {
    type: [String, Number, Boolean],
    default: true
  },
  uncheckedValue: {
    type: [String, Number, Boolean],
    default: false
  },
  railStyle: Function,
  rubberBand: {
    type: Boolean,
    default: true
  },
  /** @deprecated */
  onChange: [Function, Array]
});
let supportCssMax;
const __unplugin_components_16 = defineComponent({
  name: "Switch",
  props: switchProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.onChange) {
          warnOnce("switch", "`on-change` is deprecated, please use `on-update:value` instead.");
        }
      });
    }
    if (supportCssMax === void 0) {
      if (typeof CSS !== "undefined") {
        if (typeof CSS.supports !== "undefined") {
          supportCssMax = CSS.supports("width", "max(1px)");
        } else {
          supportCssMax = false;
        }
      } else {
        supportCssMax = true;
      }
    }
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Switch", "-switch", style$4, switchLight$1, props, mergedClsPrefixRef);
    const formItem = useFormItem(props);
    const { mergedSizeRef, mergedDisabledRef } = formItem;
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const checkedRef = computed(() => {
      return mergedValueRef.value === props.checkedValue;
    });
    const pressedRef = ref(false);
    const focusedRef = ref(false);
    const mergedRailStyleRef = computed(() => {
      const { railStyle } = props;
      if (!railStyle)
        return void 0;
      return railStyle({ focused: focusedRef.value, checked: checkedRef.value });
    });
    function doUpdateValue(value) {
      const { "onUpdate:value": _onUpdateValue, onChange, onUpdateValue } = props;
      const { nTriggerFormInput, nTriggerFormChange } = formItem;
      if (_onUpdateValue)
        call(_onUpdateValue, value);
      if (onUpdateValue)
        call(onUpdateValue, value);
      if (onChange)
        call(onChange, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function doFocus() {
      const { nTriggerFormFocus } = formItem;
      nTriggerFormFocus();
    }
    function doBlur() {
      const { nTriggerFormBlur } = formItem;
      nTriggerFormBlur();
    }
    function handleClick() {
      if (props.loading || mergedDisabledRef.value)
        return;
      if (mergedValueRef.value !== props.checkedValue) {
        doUpdateValue(props.checkedValue);
      } else {
        doUpdateValue(props.uncheckedValue);
      }
    }
    function handleFocus() {
      focusedRef.value = true;
      doFocus();
    }
    function handleBlur() {
      focusedRef.value = false;
      doBlur();
      pressedRef.value = false;
    }
    function handleKeyup(e) {
      if (props.loading || mergedDisabledRef.value)
        return;
      if (e.key === " ") {
        if (mergedValueRef.value !== props.checkedValue) {
          doUpdateValue(props.checkedValue);
        } else {
          doUpdateValue(props.uncheckedValue);
        }
        pressedRef.value = false;
      }
    }
    function handleKeydown(e) {
      if (props.loading || mergedDisabledRef.value)
        return;
      if (e.key === " ") {
        e.preventDefault();
        pressedRef.value = true;
      }
    }
    const cssVarsRef = computed(() => {
      const { value: size } = mergedSizeRef;
      const { self: { opacityDisabled, railColor, railColorActive, buttonBoxShadow, buttonColor, boxShadowFocus, loadingColor, textColor, iconColor, [createKey("buttonHeight", size)]: buttonHeight, [createKey("buttonWidth", size)]: buttonWidth, [createKey("buttonWidthPressed", size)]: buttonWidthPressed, [createKey("railHeight", size)]: railHeight, [createKey("railWidth", size)]: railWidth, [createKey("railBorderRadius", size)]: railBorderRadius, [createKey("buttonBorderRadius", size)]: buttonBorderRadius }, common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 } } = themeRef.value;
      let offset;
      let height;
      let width;
      if (supportCssMax) {
        offset = `calc((${railHeight} - ${buttonHeight}) / 2)`;
        height = `max(${railHeight}, ${buttonHeight})`;
        width = `max(${railWidth}, calc(${railWidth} + ${buttonHeight} - ${railHeight}))`;
      } else {
        offset = pxfy((depx(railHeight) - depx(buttonHeight)) / 2);
        height = pxfy(Math.max(depx(railHeight), depx(buttonHeight)));
        width = depx(railHeight) > depx(buttonHeight) ? railWidth : pxfy(depx(railWidth) + depx(buttonHeight) - depx(railHeight));
      }
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-button-border-radius": buttonBorderRadius,
        "--n-button-box-shadow": buttonBoxShadow,
        "--n-button-color": buttonColor,
        "--n-button-width": buttonWidth,
        "--n-button-width-pressed": buttonWidthPressed,
        "--n-button-height": buttonHeight,
        "--n-height": height,
        "--n-offset": offset,
        "--n-opacity-disabled": opacityDisabled,
        "--n-rail-border-radius": railBorderRadius,
        "--n-rail-color": railColor,
        "--n-rail-color-active": railColorActive,
        "--n-rail-height": railHeight,
        "--n-rail-width": railWidth,
        "--n-width": width,
        "--n-box-shadow-focus": boxShadowFocus,
        "--n-loading-color": loadingColor,
        "--n-text-color": textColor,
        "--n-icon-color": iconColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("switch", computed(() => {
      return mergedSizeRef.value[0];
    }), cssVarsRef, props) : void 0;
    return {
      handleClick,
      handleBlur,
      handleFocus,
      handleKeyup,
      handleKeydown,
      mergedRailStyle: mergedRailStyleRef,
      pressed: pressedRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      checked: checkedRef,
      mergedDisabled: mergedDisabledRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const { mergedClsPrefix, mergedDisabled, checked, mergedRailStyle, onRender, $slots } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const { checked: checkedSlot, unchecked: uncheckedSlot, icon: iconSlot, "checked-icon": checkedIconSlot, "unchecked-icon": uncheckedIconSlot } = $slots;
    const hasIcon = !(isSlotEmpty(iconSlot) && isSlotEmpty(checkedIconSlot) && isSlotEmpty(uncheckedIconSlot));
    return h(
      "div",
      { role: "switch", "aria-checked": checked, class: [
        `${mergedClsPrefix}-switch`,
        this.themeClass,
        hasIcon && `${mergedClsPrefix}-switch--icon`,
        checked && `${mergedClsPrefix}-switch--active`,
        mergedDisabled && `${mergedClsPrefix}-switch--disabled`,
        this.round && `${mergedClsPrefix}-switch--round`,
        this.loading && `${mergedClsPrefix}-switch--loading`,
        this.pressed && `${mergedClsPrefix}-switch--pressed`,
        this.rubberBand && `${mergedClsPrefix}-switch--rubber-band`
      ], tabindex: !this.mergedDisabled ? 0 : void 0, style: this.cssVars, onClick: this.handleClick, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown },
      h(
        "div",
        { class: `${mergedClsPrefix}-switch__rail`, "aria-hidden": "true", style: mergedRailStyle },
        resolveWrappedSlot(checkedSlot, (checkedSlotChildren) => resolveWrappedSlot(uncheckedSlot, (uncheckedSlotChildren) => {
          if (checkedSlotChildren || uncheckedSlotChildren) {
            return h(
              "div",
              { "aria-hidden": true, class: `${mergedClsPrefix}-switch__children-placeholder` },
              h(
                "div",
                { class: `${mergedClsPrefix}-switch__rail-placeholder` },
                h("div", { class: `${mergedClsPrefix}-switch__button-placeholder` }),
                checkedSlotChildren
              ),
              h(
                "div",
                { class: `${mergedClsPrefix}-switch__rail-placeholder` },
                h("div", { class: `${mergedClsPrefix}-switch__button-placeholder` }),
                uncheckedSlotChildren
              )
            );
          }
          return null;
        })),
        h(
          "div",
          { class: `${mergedClsPrefix}-switch__button` },
          resolveWrappedSlot(iconSlot, (icon) => resolveWrappedSlot(checkedIconSlot, (checkedIcon) => resolveWrappedSlot(uncheckedIconSlot, (uncheckedIcon) => {
            return h(NIconSwitchTransition, null, {
              default: () => this.loading ? h(NBaseLoading, { key: "loading", clsPrefix: mergedClsPrefix, strokeWidth: 20 }) : this.checked && (checkedIcon || icon) ? h("div", { class: `${mergedClsPrefix}-switch__button-icon`, key: checkedIcon ? "checked-icon" : "icon" }, checkedIcon || icon) : !this.checked && (uncheckedIcon || icon) ? h("div", { class: `${mergedClsPrefix}-switch__button-icon`, key: uncheckedIcon ? "unchecked-icon" : "icon" }, uncheckedIcon || icon) : null
            });
          }))),
          resolveWrappedSlot(checkedSlot, (children) => children && h("div", { key: "checked", class: `${mergedClsPrefix}-switch__checked` }, children)),
          resolveWrappedSlot(uncheckedSlot, (children) => children && h("div", { key: "unchecked", class: `${mergedClsPrefix}-switch__unchecked` }, children))
        )
      )
    );
  }
});
const tabsInjectionKey = createInjectionKey("n-tabs");
const tabPaneProps = {
  tab: [String, Number, Object, Function],
  name: {
    type: [String, Number],
    required: true
  },
  disabled: Boolean,
  displayDirective: {
    type: String,
    default: "if"
  },
  closable: {
    type: Boolean,
    default: void 0
  },
  tabProps: Object,
  /** @deprecated */
  label: [String, Number, Object, Function]
};
const __unplugin_components_5 = defineComponent({
  __TAB_PANE__: true,
  name: "TabPane",
  alias: ["TabPanel"],
  props: tabPaneProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.label !== void 0) {
          warnOnce("tab-pane", "`label` is deprecated, please use `tab` instead.");
        }
      });
    }
    const NTab = inject(tabsInjectionKey, null);
    if (!NTab) {
      throwError("tab-pane", "`n-tab-pane` must be placed inside `n-tabs`.");
    }
    return {
      style: NTab.paneStyleRef,
      class: NTab.paneClassRef,
      mergedClsPrefix: NTab.mergedClsPrefixRef
    };
  },
  render() {
    return h("div", { class: [`${this.mergedClsPrefix}-tab-pane`, this.class], style: this.style }, this.$slots);
  }
});
const tabProps = Object.assign({ internalLeftPadded: Boolean, internalAddable: Boolean, internalCreatedByPane: Boolean }, omit(tabPaneProps, ["displayDirective"]));
const Tab = defineComponent({
  __TAB__: true,
  inheritAttrs: false,
  name: "Tab",
  props: tabProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      valueRef,
      typeRef,
      closableRef,
      tabStyleRef,
      tabChangeIdRef,
      onBeforeLeaveRef,
      triggerRef,
      handleAdd,
      activateTab,
      handleClose
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(tabsInjectionKey);
    return {
      trigger: triggerRef,
      mergedClosable: computed(() => {
        if (props.internalAddable)
          return false;
        const { closable } = props;
        if (closable === void 0)
          return closableRef.value;
        return closable;
      }),
      style: tabStyleRef,
      clsPrefix: mergedClsPrefixRef,
      value: valueRef,
      type: typeRef,
      handleClose(e) {
        e.stopPropagation();
        if (props.disabled)
          return;
        handleClose(props.name);
      },
      activateTab() {
        if (props.disabled)
          return;
        if (props.internalAddable) {
          handleAdd();
          return;
        }
        const { name: nameProp } = props;
        const id = ++tabChangeIdRef.id;
        if (nameProp !== valueRef.value) {
          const { value: onBeforeLeave } = onBeforeLeaveRef;
          if (!onBeforeLeave) {
            activateTab(nameProp);
          } else {
            void Promise.resolve(onBeforeLeave(props.name, valueRef.value)).then((allowLeave) => {
              if (allowLeave && tabChangeIdRef.id === id) {
                activateTab(nameProp);
              }
            });
          }
        }
      }
    };
  },
  render() {
    const { internalAddable, clsPrefix, name, disabled, label, tab, value, mergedClosable, style: style2, trigger, $slots: { default: defaultSlot } } = this;
    const mergedTab = label !== null && label !== void 0 ? label : tab;
    return h(
      "div",
      { class: `${clsPrefix}-tabs-tab-wrapper` },
      this.internalLeftPadded ? h("div", { class: `${clsPrefix}-tabs-tab-pad` }) : null,
      h(
        "div",
        Object.assign({ key: name, "data-name": name, "data-disabled": disabled ? true : void 0 }, mergeProps({
          class: [
            `${clsPrefix}-tabs-tab`,
            value === name && `${clsPrefix}-tabs-tab--active`,
            disabled && `${clsPrefix}-tabs-tab--disabled`,
            mergedClosable && `${clsPrefix}-tabs-tab--closable`,
            internalAddable && `${clsPrefix}-tabs-tab--addable`
          ],
          onClick: trigger === "click" ? this.activateTab : void 0,
          onMouseenter: trigger === "hover" ? this.activateTab : void 0,
          style: internalAddable ? void 0 : style2
        }, this.internalCreatedByPane ? this.tabProps || {} : this.$attrs)),
        h("span", { class: `${clsPrefix}-tabs-tab__label` }, internalAddable ? h(
          Fragment,
          null,
          h("div", { class: `${clsPrefix}-tabs-tab__height-placeholder` }, " "),
          h(NBaseIcon, { clsPrefix }, {
            default: () => h(AddIcon, null)
          })
        ) : defaultSlot ? defaultSlot() : typeof mergedTab === "object" ? mergedTab : render(mergedTab !== null && mergedTab !== void 0 ? mergedTab : name)),
        mergedClosable && this.type === "card" ? h(NBaseClose, { clsPrefix, class: `${clsPrefix}-tabs-tab__close`, onClick: this.handleClose, disabled }) : null
      )
    );
  }
});
const style$3 = cB("tabs", `
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`, [cM("segment-type", [cB("tabs-rail", [c$1("&.transition-disabled", "color: red;", [cB("tabs-tab", `
 transition: none;
 `)])])]), cM("top", [cB("tab-pane", `
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]), cM("left", [cB("tab-pane", `
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]), cM("left, right", `
 flex-direction: row;
 `, [cB("tabs-bar", `
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB("tabs-tab", `
 padding: var(--n-tab-padding-vertical); 
 `)]), cM("right", `
 flex-direction: row-reverse;
 `, [cB("tab-pane", `
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `), cB("tabs-bar", `
 left: 0;
 `)]), cM("bottom", `
 flex-direction: column-reverse;
 justify-content: flex-end;
 `, [cB("tab-pane", `
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `), cB("tabs-bar", `
 top: 0;
 `)]), cB("tabs-rail", `
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [cB("tabs-tab-wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [cB("tabs-tab", `
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [cM("active", `
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `), c$1("&:hover", `
 color: var(--n-tab-text-color-hover);
 `)])])]), cM("flex", [cB("tabs-nav", {
  width: "100%"
}, [cB("tabs-wrapper", {
  width: "100%"
}, [cB("tabs-tab", {
  marginRight: 0
})])])]), cB("tabs-nav", `
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `, [cE("prefix, suffix", `
 display: flex;
 align-items: center;
 `), cE("prefix", "padding-right: 16px;"), cE("suffix", "padding-left: 16px;")]), cM("top, bottom", [cB("tabs-nav-scroll-wrapper", [c$1("&::before", `
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `), c$1("&::after", `
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `), cM("shadow-start", [c$1("&::before", `
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]), cM("shadow-end", [c$1("&::after", `
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]), cM("left, right", [cB("tabs-nav-scroll-wrapper", [c$1("&::before", `
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), c$1("&::after", `
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), cM("shadow-start", [c$1("&::before", `
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]), cM("shadow-end", [c$1("&::after", `
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]), cB("tabs-nav-scroll-wrapper", `
 flex: 1;
 position: relative;
 overflow: hidden;
 `, [cB("tabs-nav-y-scroll", `
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `, [c$1("&::-webkit-scrollbar", `
 width: 0;
 height: 0;
 `)]), c$1("&::before, &::after", `
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]), cB("tabs-nav-scroll-content", `
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `), cB("tabs-wrapper", `
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `), cB("tabs-tab-wrapper", `
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `), cB("tabs-tab", `
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cM("disabled", {
  cursor: "not-allowed"
}), cE("close", `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), cE("label", `
 display: flex;
 align-items: center;
 `)]), cB("tabs-bar", `
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [c$1("&.transition-disabled", `
 transition: none;
 `), cM("disabled", `
 background-color: var(--n-tab-text-color-disabled)
 `)]), cB("tabs-pane-wrapper", `
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `), cB("tab-pane", `
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `, [c$1("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `), c$1("&.next-transition-leave-active, &.prev-transition-leave-active", `
 position: absolute;
 `), c$1("&.next-transition-enter-from, &.prev-transition-leave-to", `
 transform: translateX(32px);
 opacity: 0;
 `), c$1("&.next-transition-leave-to, &.prev-transition-enter-from", `
 transform: translateX(-32px);
 opacity: 0;
 `), c$1("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to", `
 transform: translateX(0);
 opacity: 1;
 `)]), cB("tabs-tab-pad", `
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `), cM("line-type, bar-type", [cB("tabs-tab", `
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `, [c$1("&:hover", {
  color: "var(--n-tab-text-color-hover)"
}), cM("active", `
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `), cM("disabled", {
  color: "var(--n-tab-text-color-disabled)"
})])]), cB("tabs-nav", [cM("line-type", [cM("top", [cE("prefix, suffix", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 bottom: -1px;
 `)]), cM("left", [cE("prefix, suffix", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 right: -1px;
 `)]), cM("right", [cE("prefix, suffix", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 left: -1px;
 `)]), cM("bottom", [cE("prefix, suffix", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 top: -1px;
 `)]), cE("prefix, suffix", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-nav-scroll-content", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-bar", `
 border-radius: 0;
 `)]), cM("card-type", [cE("prefix, suffix", `
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-tab-pad", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-tab", `
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `, [cM("addable", `
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `, [cE("height-placeholder", `
 width: 0;
 font-size: var(--n-tab-font-size);
 `), cNotM("disabled", [c$1("&:hover", `
 color: var(--n-tab-text-color-hover);
 `)])]), cM("closable", "padding-right: 8px;"), cM("active", `
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `), cM("disabled", "color: var(--n-tab-text-color-disabled);")]), cB("tabs-scroll-padding", "border-bottom: 1px solid var(--n-tab-border-color);")]), cM("left, right", [cB("tabs-wrapper", `
 flex-direction: column;
 `, [cB("tabs-tab-wrapper", `
 flex-direction: column;
 `, [cB("tabs-tab-pad", `
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]), cM("top", [cM("card-type", [cB("tabs-tab", `
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-bottom: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]), cM("left", [cM("card-type", [cB("tabs-tab", `
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-right: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-right: 1px solid var(--n-tab-border-color);
 `)])]), cM("right", [cM("card-type", [cB("tabs-tab", `
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-left: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-left: 1px solid var(--n-tab-border-color);
 `)])]), cM("bottom", [cM("card-type", [cB("tabs-tab", `
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-top: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]);
const tabsProps = Object.assign(Object.assign({}, useTheme.props), {
  value: [String, Number],
  defaultValue: [String, Number],
  trigger: {
    type: String,
    default: "click"
  },
  type: {
    type: String,
    default: "bar"
  },
  closable: Boolean,
  justifyContent: String,
  size: {
    type: String,
    default: "medium"
  },
  placement: {
    type: String,
    default: "top"
  },
  tabStyle: [String, Object],
  barWidth: Number,
  paneClass: String,
  paneStyle: [String, Object],
  paneWrapperClass: String,
  paneWrapperStyle: [String, Object],
  addable: [Boolean, Object],
  tabsPadding: {
    type: Number,
    default: 0
  },
  animated: Boolean,
  onBeforeLeave: Function,
  onAdd: Function,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onClose: [Function, Array],
  // deprecated
  labelSize: String,
  activeName: [String, Number],
  onActiveNameChange: [Function, Array]
});
const __unplugin_components_10 = defineComponent({
  name: "Tabs",
  props: tabsProps,
  setup(props, { slots }) {
    var _a, _b, _c, _d;
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.labelSize !== void 0) {
          warnOnce("tabs", "`label-size` is deprecated, please use `size` instead.");
        }
        if (props.activeName !== void 0) {
          warnOnce("tabs", "`active-name` is deprecated, please use `value` instead.");
        }
        if (props.onActiveNameChange !== void 0) {
          warnOnce("tabs", "`on-active-name-change` is deprecated, please use `on-update:value` instead.");
        }
      });
    }
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Tabs", "-tabs", style$3, tabsLight$1, props, mergedClsPrefixRef);
    const tabsElRef = ref(null);
    const barElRef = ref(null);
    const scrollWrapperElRef = ref(null);
    const addTabInstRef = ref(null);
    const xScrollInstRef = ref(null);
    const startReachedRef = ref(true);
    const endReachedRef = ref(true);
    const compitableSizeRef = useCompitable(props, ["labelSize", "size"]);
    const compitableValueRef = useCompitable(props, ["activeName", "value"]);
    const uncontrolledValueRef = ref((_b = (_a = compitableValueRef.value) !== null && _a !== void 0 ? _a : props.defaultValue) !== null && _b !== void 0 ? _b : slots.default ? (_d = (_c = flatten(slots.default())[0]) === null || _c === void 0 ? void 0 : _c.props) === null || _d === void 0 ? void 0 : _d.name : null);
    const mergedValueRef = useMergedState(compitableValueRef, uncontrolledValueRef);
    const tabChangeIdRef = { id: 0 };
    const tabWrapperStyleRef = computed(() => {
      if (!props.justifyContent || props.type === "card")
        return void 0;
      return {
        display: "flex",
        justifyContent: props.justifyContent
      };
    });
    watch(mergedValueRef, () => {
      tabChangeIdRef.id = 0;
      updateCurrentBarStyle();
      updateCurrentScrollPosition();
    });
    function getCurrentEl() {
      var _a2;
      const { value } = mergedValueRef;
      if (value === null)
        return null;
      const tabEl = (_a2 = tabsElRef.value) === null || _a2 === void 0 ? void 0 : _a2.querySelector(`[data-name="${value}"]`);
      return tabEl;
    }
    function updateBarStyle(tabEl) {
      if (props.type === "card")
        return;
      const { value: barEl } = barElRef;
      if (!barEl)
        return;
      if (tabEl) {
        const disabledClassName = `${mergedClsPrefixRef.value}-tabs-bar--disabled`;
        const { barWidth, placement } = props;
        if (tabEl.dataset.disabled === "true") {
          barEl.classList.add(disabledClassName);
        } else {
          barEl.classList.remove(disabledClassName);
        }
        if (["top", "bottom"].includes(placement)) {
          clearBarStyle(["top", "maxHeight", "height"]);
          if (typeof barWidth === "number" && tabEl.offsetWidth >= barWidth) {
            const offsetDiffLeft = Math.floor((tabEl.offsetWidth - barWidth) / 2) + tabEl.offsetLeft;
            barEl.style.left = `${offsetDiffLeft}px`;
            barEl.style.maxWidth = `${barWidth}px`;
          } else {
            barEl.style.left = `${tabEl.offsetLeft}px`;
            barEl.style.maxWidth = `${tabEl.offsetWidth}px`;
          }
          barEl.style.width = "8192px";
          void barEl.offsetWidth;
        } else {
          clearBarStyle(["left", "maxWidth", "width"]);
          if (typeof barWidth === "number" && tabEl.offsetHeight >= barWidth) {
            const offsetDiffTop = Math.floor((tabEl.offsetHeight - barWidth) / 2) + tabEl.offsetTop;
            barEl.style.top = `${offsetDiffTop}px`;
            barEl.style.maxHeight = `${barWidth}px`;
          } else {
            barEl.style.top = `${tabEl.offsetTop}px`;
            barEl.style.maxHeight = `${tabEl.offsetHeight}px`;
          }
          barEl.style.height = "8192px";
          void barEl.offsetHeight;
        }
      }
    }
    function clearBarStyle(styleProps) {
      const { value: barEl } = barElRef;
      if (!barEl)
        return;
      for (const prop of styleProps) {
        barEl.style[prop] = "";
      }
    }
    function updateCurrentBarStyle() {
      if (props.type === "card")
        return;
      const tabEl = getCurrentEl();
      if (tabEl) {
        updateBarStyle(tabEl);
      }
    }
    function updateCurrentScrollPosition(smooth) {
      var _a2;
      const scrollWrapperEl = (_a2 = xScrollInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.$el;
      if (!scrollWrapperEl)
        return;
      const tabEl = getCurrentEl();
      if (!tabEl)
        return;
      const { scrollLeft: scrollWrapperElScrollLeft, offsetWidth: scrollWrapperElOffsetWidth } = scrollWrapperEl;
      const { offsetLeft: tabElOffsetLeft, offsetWidth: tabElOffsetWidth } = tabEl;
      if (scrollWrapperElScrollLeft > tabElOffsetLeft) {
        scrollWrapperEl.scrollTo({
          top: 0,
          left: tabElOffsetLeft,
          behavior: "smooth"
        });
      } else if (tabElOffsetLeft + tabElOffsetWidth > scrollWrapperElScrollLeft + scrollWrapperElOffsetWidth) {
        scrollWrapperEl.scrollTo({
          top: 0,
          left: tabElOffsetLeft + tabElOffsetWidth - scrollWrapperElOffsetWidth,
          behavior: "smooth"
        });
      }
    }
    const tabsPaneWrapperRef = ref(null);
    let fromHeight = 0;
    let hangingTransition = null;
    function onAnimationBeforeLeave(el) {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        fromHeight = el.getBoundingClientRect().height;
        const fromHeightPx = `${fromHeight}px`;
        const applyFromStyle = () => {
          tabsPaneWrapperEl.style.height = fromHeightPx;
          tabsPaneWrapperEl.style.maxHeight = fromHeightPx;
        };
        if (!hangingTransition) {
          hangingTransition = applyFromStyle;
        } else {
          applyFromStyle();
          hangingTransition();
          hangingTransition = null;
        }
      }
    }
    function onAnimationEnter(el) {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        const targetHeight = el.getBoundingClientRect().height;
        const applyTargetStyle = () => {
          void document.body.offsetHeight;
          tabsPaneWrapperEl.style.maxHeight = `${targetHeight}px`;
          tabsPaneWrapperEl.style.height = `${Math.max(fromHeight, targetHeight)}px`;
        };
        if (!hangingTransition) {
          hangingTransition = applyTargetStyle;
        } else {
          hangingTransition();
          hangingTransition = null;
          applyTargetStyle();
        }
      }
    }
    function onAnimationAfterEnter() {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        tabsPaneWrapperEl.style.maxHeight = "";
        tabsPaneWrapperEl.style.height = "";
      }
    }
    const renderNameListRef = { value: [] };
    const animationDirectionRef = ref("next");
    function activateTab(panelName) {
      const currentValue = mergedValueRef.value;
      let dir = "next";
      for (const name of renderNameListRef.value) {
        if (name === currentValue) {
          break;
        }
        if (name === panelName) {
          dir = "prev";
          break;
        }
      }
      animationDirectionRef.value = dir;
      doUpdateValue(panelName);
    }
    function doUpdateValue(panelName) {
      const { onActiveNameChange, onUpdateValue, "onUpdate:value": _onUpdateValue } = props;
      if (onActiveNameChange) {
        call(onActiveNameChange, panelName);
      }
      if (onUpdateValue)
        call(onUpdateValue, panelName);
      if (_onUpdateValue)
        call(_onUpdateValue, panelName);
      uncontrolledValueRef.value = panelName;
    }
    function handleClose(panelName) {
      const { onClose } = props;
      if (onClose)
        call(onClose, panelName);
    }
    function updateBarPositionInstantly() {
      const { value: barEl } = barElRef;
      if (!barEl)
        return;
      const disableTransitionClassName = "transition-disabled";
      barEl.classList.add(disableTransitionClassName);
      updateCurrentBarStyle();
      barEl.classList.remove(disableTransitionClassName);
    }
    let memorizedWidth = 0;
    function _handleNavResize(entry) {
      var _b2;
      if (entry.contentRect.width === 0 && entry.contentRect.height === 0) {
        return;
      }
      if (memorizedWidth === entry.contentRect.width) {
        return;
      }
      memorizedWidth = entry.contentRect.width;
      const { type } = props;
      if (type === "line" || type === "bar") {
        {
          updateBarPositionInstantly();
        }
      }
      if (type !== "segment") {
        deriveScrollShadow((_b2 = xScrollInstRef.value) === null || _b2 === void 0 ? void 0 : _b2.$el);
      }
    }
    const handleNavResize = throttle(_handleNavResize, 64);
    watch([() => props.justifyContent, () => props.size], () => {
      void nextTick(() => {
        const { type } = props;
        if (type === "line" || type === "bar") {
          updateBarPositionInstantly();
        }
      });
    });
    const addTabFixedRef = ref(false);
    function _handleTabsResize(entry) {
      var _a2;
      const { target, contentRect: { width } } = entry;
      const containerWidth = target.parentElement.offsetWidth;
      if (!addTabFixedRef.value) {
        if (containerWidth < width) {
          addTabFixedRef.value = true;
        }
      } else {
        const { value: addTabInst } = addTabInstRef;
        if (!addTabInst)
          return;
        if (containerWidth - width > addTabInst.$el.offsetWidth) {
          addTabFixedRef.value = false;
        }
      }
      deriveScrollShadow((_a2 = xScrollInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.$el);
    }
    const handleTabsResize = throttle(_handleTabsResize, 64);
    function handleAdd() {
      const { onAdd } = props;
      if (onAdd)
        onAdd();
      void nextTick(() => {
        const currentEl = getCurrentEl();
        const { value: xScrollInst } = xScrollInstRef;
        if (!currentEl || !xScrollInst)
          return;
        xScrollInst.scrollTo({
          left: currentEl.offsetLeft,
          top: 0,
          behavior: "smooth"
        });
      });
    }
    function deriveScrollShadow(el) {
      if (!el)
        return;
      const { placement } = props;
      if (placement === "top" || placement === "bottom") {
        const { scrollLeft, scrollWidth, offsetWidth } = el;
        startReachedRef.value = scrollLeft <= 0;
        endReachedRef.value = scrollLeft + offsetWidth >= scrollWidth;
      } else {
        const { scrollTop, scrollHeight, offsetHeight } = el;
        startReachedRef.value = scrollTop <= 0;
        endReachedRef.value = scrollTop + offsetHeight >= scrollHeight;
      }
    }
    const handleScroll = throttle((e) => {
      deriveScrollShadow(e.target);
    }, 64);
    provide(tabsInjectionKey, {
      triggerRef: toRef(props, "trigger"),
      tabStyleRef: toRef(props, "tabStyle"),
      paneClassRef: toRef(props, "paneClass"),
      paneStyleRef: toRef(props, "paneStyle"),
      mergedClsPrefixRef,
      typeRef: toRef(props, "type"),
      closableRef: toRef(props, "closable"),
      valueRef: mergedValueRef,
      tabChangeIdRef,
      onBeforeLeaveRef: toRef(props, "onBeforeLeave"),
      activateTab,
      handleClose,
      handleAdd
    });
    onFontsReady(() => {
      updateCurrentBarStyle();
      updateCurrentScrollPosition();
    });
    watchEffect(() => {
      const { value: el } = scrollWrapperElRef;
      if (!el)
        return;
      const { value: clsPrefix } = mergedClsPrefixRef;
      const shadowStartClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-start`;
      const shadowEndClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-end`;
      if (startReachedRef.value) {
        el.classList.remove(shadowStartClass);
      } else {
        el.classList.add(shadowStartClass);
      }
      if (endReachedRef.value) {
        el.classList.remove(shadowEndClass);
      } else {
        el.classList.add(shadowEndClass);
      }
    });
    const tabsRailElRef = ref(null);
    watch(mergedValueRef, () => {
      if (props.type === "segment") {
        const tabsRailEl = tabsRailElRef.value;
        if (tabsRailEl) {
          void nextTick(() => {
            tabsRailEl.classList.add("transition-disabled");
            void tabsRailEl.offsetWidth;
            tabsRailEl.classList.remove("transition-disabled");
          });
        }
      }
    });
    const exposedMethods = {
      syncBarPosition: () => {
        updateCurrentBarStyle();
      }
    };
    const cssVarsRef = computed(() => {
      const { value: size } = compitableSizeRef;
      const { type } = props;
      const typeSuffix = {
        card: "Card",
        bar: "Bar",
        line: "Line",
        segment: "Segment"
      }[type];
      const sizeType = `${size}${typeSuffix}`;
      const { self: { barColor, closeIconColor, closeIconColorHover, closeIconColorPressed, tabColor, tabBorderColor, paneTextColor, tabFontWeight, tabBorderRadius, tabFontWeightActive, colorSegment, fontWeightStrong, tabColorSegment, closeSize, closeIconSize, closeColorHover, closeColorPressed, closeBorderRadius, [createKey("panePadding", size)]: panePadding, [createKey("tabPadding", sizeType)]: tabPadding, [createKey("tabPaddingVertical", sizeType)]: tabPaddingVertical, [createKey("tabGap", sizeType)]: tabGap, [createKey("tabGap", `${sizeType}Vertical`)]: tabGapVertical, [createKey("tabTextColor", type)]: tabTextColor, [createKey("tabTextColorActive", type)]: tabTextColorActive, [createKey("tabTextColorHover", type)]: tabTextColorHover, [createKey("tabTextColorDisabled", type)]: tabTextColorDisabled, [createKey("tabFontSize", size)]: tabFontSize }, common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-color-segment": colorSegment,
        "--n-bar-color": barColor,
        "--n-tab-font-size": tabFontSize,
        "--n-tab-text-color": tabTextColor,
        "--n-tab-text-color-active": tabTextColorActive,
        "--n-tab-text-color-disabled": tabTextColorDisabled,
        "--n-tab-text-color-hover": tabTextColorHover,
        "--n-pane-text-color": paneTextColor,
        "--n-tab-border-color": tabBorderColor,
        "--n-tab-border-radius": tabBorderRadius,
        "--n-close-size": closeSize,
        "--n-close-icon-size": closeIconSize,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-tab-color": tabColor,
        "--n-tab-font-weight": tabFontWeight,
        "--n-tab-font-weight-active": tabFontWeightActive,
        "--n-tab-padding": tabPadding,
        "--n-tab-padding-vertical": tabPaddingVertical,
        "--n-tab-gap": tabGap,
        "--n-tab-gap-vertical": tabGapVertical,
        "--n-pane-padding-left": getMargin(panePadding, "left"),
        "--n-pane-padding-right": getMargin(panePadding, "right"),
        "--n-pane-padding-top": getMargin(panePadding, "top"),
        "--n-pane-padding-bottom": getMargin(panePadding, "bottom"),
        "--n-font-weight-strong": fontWeightStrong,
        "--n-tab-color-segment": tabColorSegment
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("tabs", computed(() => {
      return `${compitableSizeRef.value[0]}${props.type[0]}`;
    }), cssVarsRef, props) : void 0;
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      renderedNames: /* @__PURE__ */ new Set(),
      tabsRailElRef,
      tabsPaneWrapperRef,
      tabsElRef,
      barElRef,
      addTabInstRef,
      xScrollInstRef,
      scrollWrapperElRef,
      addTabFixed: addTabFixedRef,
      tabWrapperStyle: tabWrapperStyleRef,
      handleNavResize,
      mergedSize: compitableSizeRef,
      handleScroll,
      handleTabsResize,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      animationDirection: animationDirectionRef,
      renderNameListRef,
      onAnimationBeforeLeave,
      onAnimationEnter,
      onAnimationAfterEnter,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedMethods);
  },
  render() {
    const { mergedClsPrefix, type, placement, addTabFixed, addable, mergedSize, renderNameListRef, onRender, paneWrapperClass, paneWrapperStyle, $slots: { default: defaultSlot, prefix: prefixSlot, suffix: suffixSlot } } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const tabPaneChildren = defaultSlot ? flatten(defaultSlot()).filter((v) => {
      return v.type.__TAB_PANE__ === true;
    }) : [];
    const tabChildren = defaultSlot ? flatten(defaultSlot()).filter((v) => {
      return v.type.__TAB__ === true;
    }) : [];
    const showPane = !tabChildren.length;
    const isCard = type === "card";
    const isSegment = type === "segment";
    const mergedJustifyContent = !isCard && !isSegment && this.justifyContent;
    renderNameListRef.value = [];
    const scrollContent = () => {
      const tabs = h(
        "div",
        { style: this.tabWrapperStyle, class: [`${mergedClsPrefix}-tabs-wrapper`] },
        mergedJustifyContent ? null : h("div", { class: `${mergedClsPrefix}-tabs-scroll-padding`, style: { width: `${this.tabsPadding}px` } }),
        showPane ? tabPaneChildren.map((tabPaneVNode, index2) => {
          renderNameListRef.value.push(tabPaneVNode.props.name);
          return justifyTabDynamicProps(h(Tab, Object.assign({}, tabPaneVNode.props, { internalCreatedByPane: true, internalLeftPadded: index2 !== 0 && (!mergedJustifyContent || mergedJustifyContent === "center" || mergedJustifyContent === "start" || mergedJustifyContent === "end") }), tabPaneVNode.children ? {
            default: tabPaneVNode.children.tab
          } : void 0));
        }) : tabChildren.map((tabVNode, index2) => {
          renderNameListRef.value.push(tabVNode.props.name);
          if (index2 !== 0 && !mergedJustifyContent) {
            return justifyTabDynamicProps(createLeftPaddedTabVNode(tabVNode));
          } else {
            return justifyTabDynamicProps(tabVNode);
          }
        }),
        !addTabFixed && addable && isCard ? createAddTag(addable, (showPane ? tabPaneChildren.length : tabChildren.length) !== 0) : null,
        mergedJustifyContent ? null : h("div", { class: `${mergedClsPrefix}-tabs-scroll-padding`, style: { width: `${this.tabsPadding}px` } })
      );
      return h(
        "div",
        { ref: "tabsElRef", class: `${mergedClsPrefix}-tabs-nav-scroll-content` },
        isCard && addable ? h(VResizeObserver, { onResize: this.handleTabsResize }, {
          default: () => tabs
        }) : tabs,
        isCard ? h("div", { class: `${mergedClsPrefix}-tabs-pad` }) : null,
        isCard ? null : h("div", { ref: "barElRef", class: `${mergedClsPrefix}-tabs-bar` })
      );
    };
    const resolvedPlacement = isSegment ? "top" : placement;
    return h(
      "div",
      { class: [
        `${mergedClsPrefix}-tabs`,
        this.themeClass,
        `${mergedClsPrefix}-tabs--${type}-type`,
        `${mergedClsPrefix}-tabs--${mergedSize}-size`,
        mergedJustifyContent && `${mergedClsPrefix}-tabs--flex`,
        `${mergedClsPrefix}-tabs--${resolvedPlacement}`
      ], style: this.cssVars },
      h(
        "div",
        { class: [
          // the class should be applied here since it's possible
          // to make tabs nested in tabs, style may influence each
          // other. adding a class will make it easy to write the
          // style.
          `${mergedClsPrefix}-tabs-nav--${type}-type`,
          `${mergedClsPrefix}-tabs-nav--${resolvedPlacement}`,
          `${mergedClsPrefix}-tabs-nav`
        ] },
        resolveWrappedSlot(prefixSlot, (children) => children && h("div", { class: `${mergedClsPrefix}-tabs-nav__prefix` }, children)),
        isSegment ? h("div", { class: `${mergedClsPrefix}-tabs-rail`, ref: "tabsRailElRef" }, showPane ? tabPaneChildren.map((tabPaneVNode, index2) => {
          renderNameListRef.value.push(tabPaneVNode.props.name);
          return h(Tab, Object.assign({}, tabPaneVNode.props, { internalCreatedByPane: true, internalLeftPadded: index2 !== 0 }), tabPaneVNode.children ? {
            default: tabPaneVNode.children.tab
          } : void 0);
        }) : tabChildren.map((tabVNode, index2) => {
          renderNameListRef.value.push(tabVNode.props.name);
          if (index2 === 0) {
            return tabVNode;
          } else {
            return createLeftPaddedTabVNode(tabVNode);
          }
        })) : h(VResizeObserver, { onResize: this.handleNavResize }, {
          default: () => h("div", { class: `${mergedClsPrefix}-tabs-nav-scroll-wrapper`, ref: "scrollWrapperElRef" }, ["top", "bottom"].includes(resolvedPlacement) ? h(VXScroll, { ref: "xScrollInstRef", onScroll: this.handleScroll }, {
            default: scrollContent
          }) : h("div", { class: `${mergedClsPrefix}-tabs-nav-y-scroll`, onScroll: this.handleScroll }, scrollContent()))
        }),
        addTabFixed && addable && isCard ? createAddTag(addable, true) : null,
        resolveWrappedSlot(suffixSlot, (children) => children && h("div", { class: `${mergedClsPrefix}-tabs-nav__suffix` }, children))
      ),
      showPane && (this.animated && (resolvedPlacement === "top" || resolvedPlacement === "bottom") ? h("div", { ref: "tabsPaneWrapperRef", style: paneWrapperStyle, class: [`${mergedClsPrefix}-tabs-pane-wrapper`, paneWrapperClass] }, filterMapTabPanes(tabPaneChildren, this.mergedValue, this.renderedNames, this.onAnimationBeforeLeave, this.onAnimationEnter, this.onAnimationAfterEnter, this.animationDirection)) : filterMapTabPanes(tabPaneChildren, this.mergedValue, this.renderedNames))
    );
  }
});
function filterMapTabPanes(tabPaneVNodes, value, renderedNames, onBeforeLeave, onEnter, onAfterEnter, animationDirection) {
  const children = [];
  tabPaneVNodes.forEach((vNode) => {
    const { name, displayDirective, "display-directive": _displayDirective } = vNode.props;
    const matchDisplayDirective = (directive) => displayDirective === directive || _displayDirective === directive;
    const show = value === name;
    if (vNode.key !== void 0) {
      vNode.key = name;
    }
    if (show || matchDisplayDirective("show") || matchDisplayDirective("show:lazy") && renderedNames.has(name)) {
      if (!renderedNames.has(name)) {
        renderedNames.add(name);
      }
      const useVShow = !matchDisplayDirective("if");
      children.push(useVShow ? withDirectives(vNode, [[vShow, show]]) : vNode);
    }
  });
  if (!animationDirection) {
    return children;
  }
  return h(TransitionGroup, { name: `${animationDirection}-transition`, onBeforeLeave, onEnter, onAfterEnter }, { default: () => children });
}
function createAddTag(addable, internalLeftPadded) {
  return h(Tab, { ref: "addTabInstRef", key: "__addable", name: "__addable", internalCreatedByPane: true, internalAddable: true, internalLeftPadded, disabled: typeof addable === "object" && addable.disabled });
}
function createLeftPaddedTabVNode(tabVNode) {
  const modifiedVNode = cloneVNode(tabVNode);
  if (modifiedVNode.props) {
    modifiedVNode.props.internalLeftPadded = true;
  } else {
    modifiedVNode.props = {
      internalLeftPadded: true
    };
  }
  return modifiedVNode;
}
function justifyTabDynamicProps(tabVNode) {
  if (Array.isArray(tabVNode.dynamicProps)) {
    if (!tabVNode.dynamicProps.includes("internalLeftPadded")) {
      tabVNode.dynamicProps.push("internalLeftPadded");
    }
  } else {
    tabVNode.dynamicProps = ["internalLeftPadded"];
  }
  return tabVNode;
}
const style$2 = cB("thing", `
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`, [cB("thing-avatar", `
 margin-right: 12px;
 margin-top: 2px;
 `), cB("thing-avatar-header-wrapper", `
 display: flex;
 flex-wrap: nowrap;
 `, [cB("thing-header-wrapper", `
 flex: 1;
 `)]), cB("thing-main", `
 flex-grow: 1;
 `, [cB("thing-header", `
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `, [cE("title", `
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]), cE("description", [c$1("&:not(:last-child)", `
 margin-bottom: 4px;
 `)]), cE("content", [c$1("&:not(:first-child)", `
 margin-top: 12px;
 `)]), cE("footer", [c$1("&:not(:first-child)", `
 margin-top: 12px;
 `)]), cE("action", [c$1("&:not(:first-child)", `
 margin-top: 12px;
 `)])])]);
const thingProps = Object.assign(Object.assign({}, useTheme.props), { title: String, titleExtra: String, description: String, descriptionStyle: [String, Object], content: String, contentStyle: [String, Object], contentIndented: Boolean });
const __unplugin_components_2 = defineComponent({
  name: "Thing",
  props: thingProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Thing", "-thing", style$2, thingLight$1, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Thing", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { self: { titleTextColor, textColor, titleFontWeight, fontSize }, common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-font-size": fontSize,
        "--n-text-color": textColor,
        "--n-title-font-weight": titleFontWeight,
        "--n-title-text-color": titleTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("thing", void 0, cssVarsRef, props) : void 0;
    return () => {
      var _a;
      const { value: mergedClsPrefix } = mergedClsPrefixRef;
      const rtlEnabled = rtlEnabledRef ? rtlEnabledRef.value : false;
      (_a = themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender) === null || _a === void 0 ? void 0 : _a.call(themeClassHandle);
      return h(
        "div",
        { class: [
          `${mergedClsPrefix}-thing`,
          themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
          rtlEnabled && `${mergedClsPrefix}-thing--rtl`
        ], style: inlineThemeDisabled ? void 0 : cssVarsRef.value },
        slots.avatar && props.contentIndented ? h("div", { class: `${mergedClsPrefix}-thing-avatar` }, slots.avatar()) : null,
        h(
          "div",
          { class: `${mergedClsPrefix}-thing-main` },
          !props.contentIndented && (slots.header || props.title || slots["header-extra"] || props.titleExtra || slots.avatar) ? h(
            "div",
            { class: `${mergedClsPrefix}-thing-avatar-header-wrapper` },
            slots.avatar ? h("div", { class: `${mergedClsPrefix}-thing-avatar` }, slots.avatar()) : null,
            slots.header || props.title || slots["header-extra"] || props.titleExtra ? h(
              "div",
              { class: `${mergedClsPrefix}-thing-header-wrapper` },
              h(
                "div",
                { class: `${mergedClsPrefix}-thing-header` },
                slots.header || props.title ? h("div", { class: `${mergedClsPrefix}-thing-header__title` }, slots.header ? slots.header() : props.title) : null,
                slots["header-extra"] || props.titleExtra ? h("div", { class: `${mergedClsPrefix}-thing-header__extra` }, slots["header-extra"] ? slots["header-extra"]() : props.titleExtra) : null
              ),
              slots.description || props.description ? h("div", { class: `${mergedClsPrefix}-thing-main__description`, style: props.descriptionStyle }, slots.description ? slots.description() : props.description) : null
            ) : null
          ) : h(
            Fragment,
            null,
            slots.header || props.title || slots["header-extra"] || props.titleExtra ? h(
              "div",
              { class: `${mergedClsPrefix}-thing-header` },
              slots.header || props.title ? h("div", { class: `${mergedClsPrefix}-thing-header__title` }, slots.header ? slots.header() : props.title) : null,
              slots["header-extra"] || props.titleExtra ? h("div", { class: `${mergedClsPrefix}-thing-header__extra` }, slots["header-extra"] ? slots["header-extra"]() : props.titleExtra) : null
            ) : null,
            slots.description || props.description ? h("div", { class: `${mergedClsPrefix}-thing-main__description`, style: props.descriptionStyle }, slots.description ? slots.description() : props.description) : null
          ),
          slots.default || props.content ? h("div", { class: `${mergedClsPrefix}-thing-main__content`, style: props.contentStyle }, slots.default ? slots.default() : props.content) : null,
          slots.footer ? h("div", { class: `${mergedClsPrefix}-thing-main__footer` }, slots.footer()) : null,
          slots.action ? h("div", { class: `${mergedClsPrefix}-thing-main__action` }, slots.action()) : null
        )
      );
    };
  }
});
const style$1 = cB("h", `
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [c$1("&:first-child", {
  marginTop: 0
}), cM("prefix-bar", {
  position: "relative",
  paddingLeft: "var(--n-prefix-width)"
}, [cM("align-text", {
  paddingLeft: 0
}, [c$1("&::before", {
  left: "calc(-1 * var(--n-prefix-width))"
})]), c$1("&::before", `
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `), c$1("&::before", {
  backgroundColor: "var(--n-bar-color)"
})])]);
const headerProps = Object.assign(Object.assign({}, useTheme.props), { type: {
  type: String,
  default: "default"
}, prefix: String, alignText: Boolean });
const createHeader = (level) => defineComponent({
  name: `H${level}`,
  props: headerProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Typography", "-h", style$1, typographyLight$1, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { type } = props;
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: { headerFontWeight, headerTextColor, [createKey("headerPrefixWidth", level)]: prefixWidth, [createKey("headerFontSize", level)]: fontSize, [createKey("headerMargin", level)]: margin, [createKey("headerBarWidth", level)]: barWidth, [createKey("headerBarColor", type)]: barColor } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-font-size": fontSize,
        "--n-margin": margin,
        "--n-bar-color": barColor,
        "--n-bar-width": barWidth,
        "--n-font-weight": headerFontWeight,
        "--n-text-color": headerTextColor,
        "--n-prefix-width": prefixWidth
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass(`h${level}`, computed(() => props.type[0]), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const { prefix, alignText, mergedClsPrefix, cssVars, $slots } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(`h${level}`, {
      class: [
        `${mergedClsPrefix}-h`,
        `${mergedClsPrefix}-h${level}`,
        this.themeClass,
        {
          [`${mergedClsPrefix}-h--prefix-bar`]: prefix,
          [`${mergedClsPrefix}-h--align-text`]: alignText
        }
      ],
      style: cssVars
    }, $slots);
  }
});
createHeader("1");
const NH2 = createHeader("2");
createHeader("3");
createHeader("4");
createHeader("5");
createHeader("6");
const style = cB("text", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [cM("strong", `
 font-weight: var(--n-font-weight-strong);
 `), cM("italic", {
  fontStyle: "italic"
}), cM("underline", {
  textDecoration: "underline"
}), cM("code", `
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]);
const textProps = Object.assign(Object.assign({}, useTheme.props), {
  code: Boolean,
  type: {
    type: String,
    default: "default"
  },
  delete: Boolean,
  strong: Boolean,
  italic: Boolean,
  underline: Boolean,
  depth: [String, Number],
  tag: String,
  // deprecated
  as: {
    type: String,
    validator: () => {
      if (process.env.NODE_ENV !== "production") {
        warn("text", "`as` is deprecated, please use `tag` instead.");
      }
      return true;
    },
    default: void 0
  }
});
const NText = defineComponent({
  name: "Text",
  props: textProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Typography", "-text", style, typographyLight$1, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { depth, type } = props;
      const textColorKey = type === "default" ? depth === void 0 ? "textColor" : `textColor${depth}Depth` : createKey("textColor", type);
      const { common: { fontWeightStrong, fontFamilyMono, cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: { codeTextColor, codeBorderRadius, codeColor, codeBorder, [textColorKey]: textColor } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-text-color": textColor,
        "--n-font-weight-strong": fontWeightStrong,
        "--n-font-famliy-mono": fontFamilyMono,
        "--n-code-border-radius": codeBorderRadius,
        "--n-code-text-color": codeTextColor,
        "--n-code-color": codeColor,
        "--n-code-border": codeBorder
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("text", computed(() => `${props.type[0]}${props.depth || ""}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      compitableTag: useCompitable(props, ["as", "tag"]),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b, _c;
    const { mergedClsPrefix } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    const textClass = [
      `${mergedClsPrefix}-text`,
      this.themeClass,
      {
        [`${mergedClsPrefix}-text--code`]: this.code,
        [`${mergedClsPrefix}-text--delete`]: this.delete,
        [`${mergedClsPrefix}-text--strong`]: this.strong,
        [`${mergedClsPrefix}-text--italic`]: this.italic,
        [`${mergedClsPrefix}-text--underline`]: this.underline
      }
    ];
    const children = (_c = (_b = this.$slots).default) === null || _c === void 0 ? void 0 : _c.call(_b);
    return this.code ? h("code", { class: textClass, style: this.cssVars }, this.delete ? h("del", null, children) : children) : this.delete ? h("del", { class: textClass, style: this.cssVars }, children) : h(this.compitableTag || "span", { class: textClass, style: this.cssVars }, children);
  }
});
const _sfc_main$9 = defineComponent({
  setup() {
    const appStore = app();
    return {
      paths: computed(() => appStore.paths)
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_breadcrumb_item = __unplugin_components_0$3;
  const _component_n_breadcrumb = __unplugin_components_1$3;
  return openBlock(), createBlock(_component_n_breadcrumb, null, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.paths, (item) => {
        return openBlock(), createBlock(_component_n_breadcrumb_item, {
          key: item.id
        }, {
          default: withCtx(() => [
            item.icon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              (openBlock(), createBlock(resolveDynamicComponent(item.icon))),
              createTextVNode(" " + toDisplayString(item.title), 1)
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(item.title), 1)
            ], 64))
          ]),
          _: 2
        }, 1024);
      }), 128))
    ]),
    _: 1
  });
}
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const themeOptions = [
  { label: "苍翠", value: "#519a73" },
  { label: "杏红", value: "#ff8c31" },
  { label: "蔚蓝", value: "#70f3ff" },
  { label: "桃红", value: "#f47983" },
  { label: "柳绿", value: "#afdd22" },
  { label: "湖蓝", value: "#30dff3" }
];
const tabsMore = [
  { label: "重新加载", key: "1", icon: renderIcon("RefreshCircleOutline") },
  { label: "关闭当前页面", key: "2", icon: renderIcon("CloseOutline") },
  { type: "divider", key: "d1" },
  { label: "关闭左侧页面", key: "3", zt: "l", icon: renderIcon("StepBackwardFilled") },
  { label: "关闭右侧页面", key: "4", zt: "r", icon: renderIcon("StepForwardFilled") },
  { label: "关闭全部页面", key: "5", zt: "c", icon: renderIcon("StopOutlined") }
];
const themeTabsStyle = [
  { label: "经典卡片", key: "1", value: "sutra" },
  { label: "圆滑灵动", key: "2", value: "tact" }
];
const animations = [
  { label: "禁用动画", key: "100", value: "disabled", out: "disabled", prefix: "" },
  {
    label: "backInDown",
    key: "1",
    value: "animate__backInDown",
    out: "animate__backOutDown",
    prefix: "animate__animated"
  },
  {
    label: "backInLeft",
    key: "2",
    value: "animate__backInLeft",
    out: "animate__backOutLeft",
    prefix: "animate__animated"
  },
  {
    label: "backInRight",
    key: "3",
    value: "animate__backInRight",
    out: "animate__backOutRight",
    prefix: "animate__animated"
  },
  { label: "backInUp", key: "4", value: "animate__backInUp", out: "animate__backOutUp", prefix: "animate__animated" },
  {
    label: "lightSpeedInRight",
    key: "5",
    value: "animate__lightSpeedInRight",
    out: "animate__lightSpeedOutRight",
    prefix: "animate__animated"
  },
  {
    label: "slideInLeft",
    key: "6",
    value: "animate__slideInLeft",
    out: "animate__slideOutLeft",
    prefix: "animate__animated"
  },
  {
    label: "fadeInLeft",
    key: "7",
    value: "animate__fadeInLeft",
    out: "animate__fadeOutLeft",
    prefix: "animate__animated"
  }
];
const _sfc_main$8 = defineComponent({
  setup() {
    const showhide = ref(false);
    const app$1 = app();
    const change = (state = true) => {
      showhide.value = state;
    };
    const layoutOptions = ["ml", "mt", "tm"];
    const model = reactive({});
    const handleUpdateGray = (value) => {
      app$1.userSetting.gray = value;
      updateHtmlGray();
    };
    const handleUpdateWeak = (value) => {
      app$1.userSetting.weak = value;
      updateHtmlWeak();
    };
    const handlePattern = (value) => {
      app$1.userSetting.layoutName = value;
    };
    return {
      showhide,
      change,
      model,
      handlePattern,
      themeOptions,
      layoutOptions,
      themeTabsStyle,
      app: app$1,
      handleUpdateGray,
      handleUpdateWeak,
      animations
    };
  }
});
const UserSetting_vue_vue_type_style_index_0_scoped_032302c4_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-032302c4"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "layout-pattern" };
const _hoisted_2$4 = ["onClick"];
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "left" }, null, -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "top" }, null, -1));
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_divider = __unplugin_components_0$2;
  const _component_n_select = __unplugin_components_1$2;
  const _component_n_form_item = __unplugin_components_19;
  const _component_CheckboxOutline = resolveComponent("CheckboxOutline");
  const _component_n_icon = NIcon;
  const _component_n_switch = __unplugin_components_16;
  const _component_n_form = __unplugin_components_20;
  const _component_n_button = __unplugin_components_8;
  const _component_n_drawer_content = __unplugin_components_22;
  const _component_n_drawer = __unplugin_components_23;
  return openBlock(), createBlock(_component_n_drawer, {
    show: _ctx.showhide,
    "onUpdate:show": _cache[8] || (_cache[8] = ($event) => _ctx.showhide = $event),
    "default-width": 350,
    placement: "right",
    resizable: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_n_drawer_content, {
        closable: "",
        title: "设置"
      }, {
        footer: withCtx(() => [
          createVNode(_component_n_button, null, {
            default: withCtx(() => [
              createTextVNode("保存设置")
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(_component_n_form, {
            ref: "formRef",
            model: _ctx.model,
            "label-placement": "left",
            "label-width": "auto"
          }, {
            default: withCtx(() => [
              createVNode(_component_n_divider, { dashed: "" }, {
                default: withCtx(() => [
                  createTextVNode(" 颜色主题 ")
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "主题",
                path: "themeColor"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_select, {
                    value: _ctx.app.userSetting.themeColor,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.app.userSetting.themeColor = $event),
                    placeholder: "选择主题",
                    options: _ctx.themeOptions
                  }, null, 8, ["value", "options"])
                ]),
                _: 1
              }),
              createVNode(_component_n_divider, { dashed: "" }, {
                default: withCtx(() => [
                  createTextVNode(" 布局模式 ")
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_1$5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.layoutOptions, (item) => {
                  return openBlock(), createElementBlock("div", {
                    class: normalizeClass(["pattern-item", item]),
                    onClick: ($event) => _ctx.handlePattern(item),
                    key: item
                  }, [
                    _hoisted_3$2,
                    _hoisted_4$1,
                    withDirectives(createVNode(_component_n_icon, {
                      class: "pattern-item-icon",
                      size: "18",
                      color: "#0e7a0d"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_CheckboxOutline)
                      ]),
                      _: 2
                    }, 1536), [
                      [vShow, item === _ctx.app.userSetting.layoutName]
                    ])
                  ], 10, _hoisted_2$4);
                }), 128))
              ]),
              createVNode(_component_n_divider, { dashed: "" }, {
                default: withCtx(() => [
                  createTextVNode(" 界面展示 ")
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "标签风格",
                path: "selectValue"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_select, {
                    value: _ctx.app.userSetting.tabsStyle,
                    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => _ctx.app.userSetting.tabsStyle = $event),
                    placeholder: "选择标签风格",
                    options: _ctx.themeTabsStyle
                  }, null, 8, ["value", "options"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "隐藏标签",
                path: "hideTag"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_switch, {
                    value: _ctx.app.userSetting.hideTabs,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => _ctx.app.userSetting.hideTabs = $event)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "标签持久化",
                path: "lasting"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_switch, {
                    value: _ctx.app.userSetting.lasting,
                    "onUpdate:value": _cache[3] || (_cache[3] = ($event) => _ctx.app.userSetting.lasting = $event)
                  }, {
                    checked: withCtx(() => [
                      createTextVNode(" 请刷新页面生效 ")
                    ]),
                    unchecked: withCtx(() => [
                      createTextVNode(" 开启标签持久化 ")
                    ]),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "灰色模式",
                path: "gray"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_switch, {
                    "onUpdate:value": [
                      _ctx.handleUpdateGray,
                      _cache[4] || (_cache[4] = ($event) => _ctx.app.userSetting.gray = $event)
                    ],
                    value: _ctx.app.userSetting.gray
                  }, null, 8, ["onUpdate:value", "value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "色弱模式",
                path: "weak"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_switch, {
                    "onUpdate:value": [
                      _ctx.handleUpdateWeak,
                      _cache[5] || (_cache[5] = ($event) => _ctx.app.userSetting.weak = $event)
                    ],
                    value: _ctx.app.userSetting.weak
                  }, null, 8, ["onUpdate:value", "value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "页面缓存",
                path: "weak"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_switch, {
                    value: _ctx.app.userSetting.keepAlive,
                    "onUpdate:value": _cache[6] || (_cache[6] = ($event) => _ctx.app.userSetting.keepAlive = $event)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_divider, { dashed: "" }, {
                default: withCtx(() => [
                  createTextVNode(" 页面动画 ")
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "动画方式",
                path: "selectValue"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_select, {
                    value: _ctx.app.userSetting.animation,
                    "onUpdate:value": _cache[7] || (_cache[7] = ($event) => _ctx.app.userSetting.animation = $event),
                    placeholder: "选择动画方式",
                    options: _ctx.animations
                  }, null, 8, ["value", "options"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["show"]);
}
const UserSetting = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-032302c4"]]);
function renderCustomHeader() {
  return h(
    "div",
    {
      style: "display: flex; align-items: center; padding: 8px 12px;"
    },
    [
      h(NAvatar, {
        round: true,
        style: "margin-right: 12px;",
        src: "https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG"
      }),
      h("div", null, [
        h("div", null, [h(NText, { depth: 2 }, { default: () => "打工仔" })]),
        h("div", { style: "font-size: 12px;" }, [
          h(
            NText,
            { depth: 3, style: "margin-top: 5px;display:inline-block;" },
            { default: () => "毫无疑问，你是办公室里最亮的星" }
          )
        ])
      ])
    ]
  );
}
const _sfc_main$7 = defineComponent({
  components: {
    UserSetting
  },
  setup() {
    const UserSettingRef = ref(null);
    const app$1 = app();
    const { themeName } = app$1.userSetting;
    const { isFullscreen, toggle } = useFullscreen(document.body);
    app$1.userSetting.isFullscreen = isFullscreen;
    const formRef = ref(null);
    const userIcon = ref(
      [
        { size: 18, color: "0e7a0d", name: "SearchOutline", show: computed(() => !app$1.browser.xs) },
        { size: 18, color: "0e7a0d", name: "NotificationsOutline", show: true },
        { size: 18, color: "0e7a0d", name: "HappyOutline", show: true },
        { size: 18, color: "0e7a0d", name: "LanguageOutline", show: true },
        { size: 18, color: "0e7a0d", name: "ScanOutline", show: computed(() => !app$1.browser.xs) },
        { size: 18, color: "0e7a0d", name: "SettingsOutline", show: true }
      ]
    );
    const compData = reactive({
      searchModel: false,
      formValue: {
        user: { name: "", age: "" },
        phone: ""
      },
      rules: {
        user: {
          name: { required: true, message: "请输入姓名", trigger: "blur" },
          age: { required: true, message: "请输入年龄", trigger: ["input", "blur"] }
        },
        phone: { required: true, message: "请输入电话号码", trigger: ["input"] }
      },
      handleValidateClick(e) {
        e.preventDefault();
      },
      SettingsOutline: () => {
        UserSettingRef.value.change();
      },
      LanguageOutline() {
        app$1.userSetting.language = app$1.userSetting.language ? null : "zhCN";
      },
      ScanOutline() {
        toggle();
      },
      SearchOutline() {
        compData.searchModel = true;
      },
      handleDarkTheme(value) {
        app$1.userSetting.themeName = value ? "darkTheme" : null;
      }
    });
    return {
      compData,
      app: app$1,
      formRef,
      UserSettingRef,
      darkTheme: themeName !== null,
      userOptions: [
        { key: "header", type: "render", render: renderCustomHeader },
        { key: "header-divider", type: "divider" },
        { label: "处理群消息 342 条", key: "stmt1" },
        { label: "被 @ 58 次", key: "stmt2" },
        { label: "加入群 17 个", key: "stmt3" }
      ],
      userIcon
    };
  }
});
const UserSet_vue_vue_type_style_index_0_scoped_418f24df_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-418f24df"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "user-set" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_35 = { class: "set-item" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_tag = __unplugin_components_0$4;
  const _component_n_space = __unplugin_components_1$4;
  const _component_n_thing = __unplugin_components_2;
  const _component_n_list_item = __unplugin_components_3;
  const _component_n_list = __unplugin_components_4;
  const _component_n_tab_pane = __unplugin_components_5;
  const _component_n_number_animation = __unplugin_components_6;
  const _component_n_statistic = __unplugin_components_7;
  const _component_n_button = __unplugin_components_8;
  const _component_n_empty = __unplugin_components_9;
  const _component_n_tabs = __unplugin_components_10;
  const _component_n_card = __unplugin_components_11;
  const _component_n_popover = __unplugin_components_12;
  const _component_n_h2 = NH2;
  const _component_n_icon = NIcon;
  const _component_n_el = __unplugin_components_1$1;
  const _component_MoonOutline = resolveComponent("MoonOutline");
  const _component_SunnyOutline = resolveComponent("SunnyOutline");
  const _component_n_switch = __unplugin_components_16;
  const _component_n_dropdown = __unplugin_components_2$2;
  const _component_n_input = __unplugin_components_18;
  const _component_n_form_item = __unplugin_components_19;
  const _component_n_form = __unplugin_components_20;
  const _component_CloseCircleOutline = resolveComponent("CloseCircleOutline");
  const _component_SyncCircleOutline = resolveComponent("SyncCircleOutline");
  const _component_SearchOutline = resolveComponent("SearchOutline");
  const _component_n_button_group = __unplugin_components_21;
  const _component_n_drawer_content = __unplugin_components_22;
  const _component_n_drawer = __unplugin_components_23;
  const _component_UserSetting = resolveComponent("UserSetting");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1$4, [
      !_ctx.app.browser.sm ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.userIcon, (item, idx) => {
        return openBlock(), createElementBlock(Fragment, { key: idx }, [
          item.show ? (openBlock(), createBlock(_component_n_el, {
            key: 0,
            tag: "div",
            class: "set-item hover-color",
            onClick: _ctx.compData[item.name]
          }, {
            default: withCtx(() => [
              createVNode(_component_n_icon, {
                size: item.size,
                color: item.color
              }, {
                default: withCtx(() => [
                  item.name === "NotificationsOutline" ? (openBlock(), createBlock(_component_n_popover, {
                    key: 0,
                    trigger: "click",
                    style: { "padding": "0" }
                  }, {
                    trigger: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(item.name)))
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_card, {
                        title: "",
                        style: { "margin-bottom": "16px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_tabs, {
                            type: "line",
                            animated: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_tab_pane, {
                                name: "oasis",
                                tab: "待办"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_list, {
                                    style: { "width": "300px" },
                                    hoverable: "",
                                    clickable: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_n_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_n_thing, {
                                            title: "你好，我是羊先生",
                                            "content-style": "margin-top: 10px;"
                                          }, {
                                            description: withCtx(() => [
                                              createVNode(_component_n_space, {
                                                size: "small",
                                                style: { "margin-top": "4px" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_n_tag, {
                                                    bordered: false,
                                                    type: "info",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("暑夜 ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_n_tag, {
                                                    bordered: false,
                                                    type: "info",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("晚春 ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createTextVNode(" 今天的阳光很温顺，也许是我很久没出去走走了吧，看着阳外的天气，我靠在沙发睡着了..."),
                                              _hoisted_2$3
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_n_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_n_thing, {
                                            title: "他是一个单身，我的标签",
                                            "content-style": "margin-top: 10px;"
                                          }, {
                                            description: withCtx(() => [
                                              createVNode(_component_n_space, {
                                                size: "small",
                                                style: { "margin-top": "4px" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_n_tag, {
                                                    bordered: false,
                                                    type: "info",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("前端程序员 ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_n_tag, {
                                                    bordered: false,
                                                    type: "info",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("杭州·西湖 ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_n_tag, {
                                                    bordered: false,
                                                    type: "warning",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" 会弹几首吉他 ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createTextVNode(" 曾经有人问我，你是怎么坚持下来的？"),
                                              _hoisted_3$1,
                                              createTextVNode(" 终有一天，你会明白，能找到自己喜欢的东西，并保持热爱，是多么的幸运，一辈子转瞬即逝，至少活的有态度些。"),
                                              _hoisted_4,
                                              createTextVNode(" 前路坎坷，我辈当不忘初心，愿你出走半生，归来仍是少年！"),
                                              _hoisted_5
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_tab_pane, {
                                name: "the beatles",
                                tab: "消息"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_statistic, {
                                    label: "你一共处理了",
                                    "tabular-nums": ""
                                  }, {
                                    suffix: withCtx(() => [
                                      createTextVNode(" 条群消息 ")
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_n_number_animation, {
                                        ref_for: true,
                                        ref: "numberAnimationInstRef",
                                        from: 0,
                                        to: 12039
                                      }, null, 512)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_n_space, { vertical: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 花时间、花精力、花心思，愿你每一份努力都不负所望 "),
                                      createVNode(_component_n_button, null, {
                                        default: withCtx(() => [
                                          createTextVNode("处理群消息")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_tab_pane, {
                                name: "jay chou",
                                tab: "通知"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_empty, { description: "你什么也找不到" }, {
                                    extra: withCtx(() => [
                                      createVNode(_component_n_button, { size: "small" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" 要不看看别的 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1024)) : item.name === "HappyOutline" ? (openBlock(), createBlock(_component_n_popover, {
                    key: 1,
                    trigger: "click",
                    style: { "padding": "0" }
                  }, {
                    trigger: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(item.name)))
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_card, {
                        title: "",
                        style: { "margin-bottom": "16px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_tabs, { type: "segment" }, {
                            default: withCtx(() => [
                              createVNode(_component_n_tab_pane, {
                                name: "chap1",
                                tab: "故乡"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_h2, null, {
                                    default: withCtx(() => [
                                      createTextVNode("许巍")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" 天边夕阳再次映上我的脸庞，再次映着我那不安的心"),
                                  _hoisted_6,
                                  _hoisted_7,
                                  createTextVNode(" 这是什么地方依然是如此的荒凉，那无尽的旅程如此漫长"),
                                  _hoisted_8,
                                  _hoisted_9,
                                  createTextVNode(" 我是永远向着远方独行的浪子，你是茫茫人海之中我的女人"),
                                  _hoisted_10,
                                  _hoisted_11,
                                  createTextVNode(" 在异乡的路上每一个寒冷的夜晚，这思念它如刀让我伤痛"),
                                  _hoisted_12,
                                  _hoisted_13,
                                  createTextVNode(" 总是在梦里我看到你无助的双眼，我的心又一次被唤醒"),
                                  _hoisted_14,
                                  _hoisted_15,
                                  createTextVNode(" 我站在这里想起和你曾经离别情景，你站在人群中间那么孤单"),
                                  _hoisted_16,
                                  _hoisted_17,
                                  createTextVNode(" 那是你 衣裙漫飞，那是你 温柔如水"),
                                  _hoisted_18
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_tab_pane, {
                                name: "chap2",
                                tab: "平凡之路"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_h2, null, {
                                    default: withCtx(() => [
                                      createTextVNode("朴树")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" 徘徊着的 在路上的 你要走吗 Via Via 易碎的 骄傲着 那也曾是我的模样"),
                                  _hoisted_19,
                                  _hoisted_20,
                                  createTextVNode(" 沸腾着的 不安着的 你要去哪 Via Via 谜一样的 沉默着的 故事你真的在听吗"),
                                  _hoisted_21,
                                  _hoisted_22,
                                  createTextVNode(" 我曾经跨过山和大海 也穿过人山人海 "),
                                  _hoisted_23,
                                  _hoisted_24,
                                  createTextVNode(" 我曾经拥有着的一切 转眼都飘散如烟"),
                                  _hoisted_25,
                                  _hoisted_26,
                                  createTextVNode(" 我曾经失落失望失掉所有方向 直到看见平凡才是唯一的答案"),
                                  _hoisted_27
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_tab_pane, {
                                name: "chap3",
                                tab: "成都"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_h2, null, {
                                    default: withCtx(() => [
                                      createTextVNode("赵雷")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" 让我掉下眼泪的 不止昨夜的酒，让我依依不舍的 不止你的温柔"),
                                  _hoisted_28,
                                  _hoisted_29,
                                  createTextVNode(" 雨路还要走多久 你攥着我的手，让我感到为难的 是挣扎的自由"),
                                  _hoisted_30,
                                  _hoisted_31,
                                  createTextVNode(" 分别总是在九月 回忆是思念的愁，深秋嫩绿的垂柳 亲吻着我额头"),
                                  _hoisted_32,
                                  _hoisted_33,
                                  createTextVNode(" 在那座阴雨的小城里 我从未忘记你，成都 带不走的 只有你"),
                                  _hoisted_34
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1024)) : (openBlock(), createBlock(resolveDynamicComponent(item.name), { key: 2 }))
                ]),
                _: 2
              }, 1032, ["size", "color"])
            ]),
            _: 2
          }, 1032, ["onClick"])) : createCommentVNode("", true)
        ], 64);
      }), 128)) : createCommentVNode("", true),
      createVNode(_component_n_el, {
        tag: "div",
        class: "set-item"
      }, {
        default: withCtx(() => [
          createVNode(_component_n_switch, {
            "onUpdate:value": [
              _ctx.compData.handleDarkTheme,
              _cache[0] || (_cache[0] = ($event) => _ctx.darkTheme = $event)
            ],
            value: _ctx.darkTheme,
            size: "medium"
          }, {
            "checked-icon": withCtx(() => [
              createVNode(_component_n_icon, { size: 14 }, {
                default: withCtx(() => [
                  createVNode(_component_MoonOutline)
                ]),
                _: 1
              })
            ]),
            "unchecked-icon": withCtx(() => [
              createVNode(_component_n_icon, { size: 14 }, {
                default: withCtx(() => [
                  createVNode(_component_SunnyOutline)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onUpdate:value", "value"])
        ]),
        _: 1
      }),
      createBaseVNode("div", _hoisted_35, [
        createVNode(_component_n_dropdown, {
          trigger: "click",
          options: _ctx.userOptions
        }, {
          default: withCtx(() => [
            createTextVNode("管理员")
          ]),
          _: 1
        }, 8, ["options"])
      ])
    ]),
    createVNode(_component_n_drawer, {
      show: _ctx.compData.searchModel,
      "onUpdate:show": _cache[4] || (_cache[4] = ($event) => _ctx.compData.searchModel = $event),
      width: 502,
      placement: "top"
    }, {
      default: withCtx(() => [
        createVNode(_component_n_drawer_content, { title: "搜索" }, {
          footer: withCtx(() => [
            createVNode(_component_n_button_group, null, {
              default: withCtx(() => [
                createVNode(_component_n_button, { ghost: "" }, {
                  icon: withCtx(() => [
                    createVNode(_component_n_icon, { size: "16" }, {
                      default: withCtx(() => [
                        createVNode(_component_CloseCircleOutline)
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" 关闭 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_n_button, { ghost: "" }, {
                  icon: withCtx(() => [
                    createVNode(_component_n_icon, null, {
                      default: withCtx(() => [
                        createVNode(_component_SyncCircleOutline)
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" 重置 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  onClick: _ctx.compData.handleValidateClick,
                  ghost: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_n_icon, { size: "16" }, {
                      default: withCtx(() => [
                        createVNode(_component_SearchOutline)
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" 搜索 ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_form, {
              ref: "formRef",
              inline: "",
              "label-width": 180,
              model: _ctx.compData.formValue,
              rules: _ctx.compData.rules,
              size: "medium"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_form_item, {
                  label: "姓名",
                  path: "user.name"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input, {
                      value: _ctx.compData.formValue.user.name,
                      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => _ctx.compData.formValue.user.name = $event),
                      placeholder: "输入姓名"
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_form_item, {
                  label: "年龄",
                  path: "user.age"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input, {
                      value: _ctx.compData.formValue.user.age,
                      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => _ctx.compData.formValue.user.age = $event),
                      placeholder: "输入年龄"
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_form_item, {
                  label: "电话号码",
                  path: "phone"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input, {
                      value: _ctx.compData.formValue.phone,
                      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => _ctx.compData.formValue.phone = $event),
                      placeholder: "电话号码"
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["show"]),
    createVNode(_component_UserSetting, { ref: "UserSettingRef" }, null, 512)
  ], 64);
}
const UserSet = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-418f24df"]]);
const _sfc_main$6 = defineComponent({});
const MenuVisibleIcon_vue_vue_type_style_index_0_scoped_61bf55dc_lang = "";
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenuUnfoldOutlined = resolveComponent("MenuUnfoldOutlined");
  const _component_n_icon = NIcon;
  return openBlock(), createBlock(_component_n_icon, {
    class: "menu-visible-icon",
    size: "18",
    color: "#0e7a0d"
  }, {
    default: withCtx(() => [
      createVNode(_component_MenuUnfoldOutlined)
    ]),
    _: 1
  });
}
const MenuVisibleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-61bf55dc"]]);
const _sfc_main$5 = defineComponent({
  setup() {
    const app$1 = app();
    return {
      app: app$1
    };
  }
});
const AppLogo_vue_vue_type_style_index_0_scoped_0dc4e4b8_lang = "";
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$2 = { key: 1 };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "header-logo",
    style: normalizeStyle({ width: _ctx.app.collapsed ? "64px" : null })
  }, [
    _ctx.app.collapsed ? (openBlock(), createElementBlock("span", _hoisted_1$3, "品茗")) : (openBlock(), createElementBlock("span", _hoisted_2$2, "品茗科技"))
  ], 4);
}
const AppLogo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-0dc4e4b8"]]);
const _sfc_main$4 = defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AppLogo
  },
  emits: ["update:isOpen"],
  setup(props, { emit }) {
    const app$1 = app();
    const router = useRouter();
    const updateExpandedKeys = () => {
      const paths = getObjectPath({ arr: toTree({ arr: app$1.allMenus }), id: app$1.currentRouter.meta.id });
      const tabPaths = paths.filter((item) => item.shows);
      compData.expandedKeys = tabPaths.map((item) => item.id);
    };
    const compData = reactive({
      expandedKeys: [],
      styleLeft: computed(() => {
        return app$1.mobile ? props.isOpen ? 0 : "-250px" : 0;
      }),
      allMenus: [],
      handleSelect(key, item) {
        router.push(item.path);
      },
      handleUpdateExpandedKeys(keys) {
        compData.expandedKeys = keys;
      },
      handleCollapse() {
        if (app$1.mobile) {
          emit("update:isOpen", false);
        } else {
          app$1.collapsed = true;
        }
      },
      value: void 0
    });
    watch(
      () => router.currentRoute.value.path,
      () => {
        updateExpandedKeys();
        if (router.currentRoute.value.meta.shows) {
          compData.value = app$1.currentRouter.meta.id;
        } else {
          compData.value = compData.expandedKeys[0];
        }
      },
      { immediate: true, deep: true }
    );
    watch(app$1.userSetting, () => {
      if (app$1.userSetting.layoutName === "tm") {
        compData.allMenus = computed(() => cloneDeep(app$1.paths[0].children || app$1.paths));
      } else {
        compData.allMenus = computed(() => cloneDeep(app$1.treeMenus));
      }
    }, {
      immediate: true
    });
    return {
      compData,
      app: app$1
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppLogo = resolveComponent("AppLogo");
  const _component_n_menu = __unplugin_components_0;
  const _component_n_layout_sider = __unplugin_components_1;
  return _ctx.app.userSetting.layoutName !== "mt" || _ctx.app.mobile ? (openBlock(), createBlock(_component_n_layout_sider, {
    key: 0,
    bordered: "",
    "show-trigger": "",
    "collapse-mode": "width",
    "collapsed-width": 64,
    width: 240,
    "native-scrollbar": false,
    collapsed: _ctx.app.collapsed,
    class: normalizeClass([_ctx.app.mobile ? "mobile" : null]),
    style: normalizeStyle({ left: _ctx.compData.styleLeft }),
    onCollapse: _ctx.compData.handleCollapse,
    onExpand: _cache[1] || (_cache[1] = ($event) => _ctx.app.collapsed = false)
  }, {
    default: withCtx(() => [
      _ctx.app.mobile ? (openBlock(), createBlock(_component_AppLogo, { key: 0 })) : createCommentVNode("", true),
      createVNode(_component_n_menu, {
        "collapsed-width": 64,
        "collapsed-icon-size": 22,
        "icon-size": 18,
        "key-field": "id",
        "label-field": "title",
        value: _ctx.compData.value,
        "onUpdate:value": [
          _cache[0] || (_cache[0] = ($event) => _ctx.compData.value = $event),
          _ctx.compData.handleSelect
        ],
        options: _ctx.compData.allMenus,
        "expanded-keys": _ctx.compData.expandedKeys,
        "onUpdate:expandedKeys": _ctx.compData.handleUpdateExpandedKeys
      }, null, 8, ["value", "options", "expanded-keys", "onUpdate:value", "onUpdate:expandedKeys"])
    ]),
    _: 1
  }, 8, ["collapsed", "class", "style", "onCollapse"])) : createCommentVNode("", true);
}
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:isOpen"],
  setup() {
    const app$1 = app();
    const router = useRouter();
    const compData = reactive({
      expandedKeys: [],
      handleSelect(key, item) {
        router.push(item.path);
      },
      handleUpdateExpandedKeys(keys) {
        compData.expandedKeys = keys;
      }
    });
    return {
      app: app$1,
      compData
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_menu = __unplugin_components_0;
  return openBlock(), createBlock(_component_n_menu, {
    "icon-size": 18,
    "key-field": "id",
    "label-field": "title",
    value: _ctx.app.currentRouter.meta.id,
    mode: "horizontal",
    options: _ctx.app.treeMenus,
    "onUpdate:value": _ctx.compData.handleSelect,
    "onUpdate:expandedKeys": _ctx.compData.handleUpdateExpandedKeys
  }, null, 8, ["value", "options", "onUpdate:value", "onUpdate:expandedKeys"]);
}
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = defineComponent({
  setup() {
    const app$1 = app();
    const tabsRefs = ref(null);
    const router = useRouter();
    const $mitt = inject("$mitt");
    let step = 0;
    const handleArrowScroll = (direction = "prev") => {
      const scrollWidth = tabsRefs.value.scrollWidth;
      const clientWidth = tabsRefs.value.clientWidth;
      const beScrollWidth = scrollWidth - clientWidth;
      direction === "next" ? step += 300 : step -= 300;
      if (step >= beScrollWidth) {
        step = beScrollWidth;
      }
      if (direction === "prev" && step <= 0) {
        step = 0;
      }
      tabsRefs.value.scrollTo({ left: step, behavior: "smooth" });
    };
    tabsMore.forEach((item) => {
      if (item.key === "1") {
        item.props = {
          onClick: () => {
            $mitt.emit("onReload");
          }
        };
      } else {
        item.disabled = computed(() => !(app$1.tabs.length > 1));
        item.props = {
          onClick: () => {
            compData.handleColseRouter(app$1.currentRouter, item.zt);
          }
        };
      }
    });
    const compData = reactive({
      tabsMore,
      isClose() {
        return app$1.tabs.length > 1;
      },
      handleActionRouter(item) {
        router.push(item.meta.tempPath || item.meta.path);
      },
      handleColseRouter(item, zt) {
        if (app$1.tabs.length <= 1) {
          return false;
        }
        const idx = app$1.tabs.findIndex((k) => k.meta.id === item.meta.id);
        if (zt === "l") {
          app$1.tabs.splice(0, idx);
        } else if (zt === "r") {
          app$1.tabs.splice(idx + 1, app$1.tabs.length);
        } else if (zt === "c") {
          app$1.tabs.splice(0, idx);
          app$1.tabs.splice(1, app$1.tabs.length);
        } else {
          app$1.tabs.splice(idx, 1);
          if (app$1.currentRouter.meta.id === item.meta.id) {
            const current = app$1.tabs[idx - 1 <= -1 ? 0 : idx - 1];
            if (current) {
              compData.handleActionRouter(current);
            }
          }
        }
      }
    });
    return {
      compData,
      app: app$1,
      tabsRefs,
      handleArrowScroll
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_d2db0254_lang = "";
const _hoisted_1$2 = {
  key: 0,
  class: "tact tabs",
  ref: "tabsRefs"
};
const _hoisted_2$1 = {
  key: 1,
  class: "sutra tabs",
  ref: "tabsRefs"
};
const _hoisted_3 = { class: "arrow arrow-more" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChevronBackOutline = resolveComponent("ChevronBackOutline");
  const _component_n_icon = NIcon;
  const _component_CloseOutline = resolveComponent("CloseOutline");
  const _component_n_el = __unplugin_components_1$1;
  const _component_ChevronForwardOutline = resolveComponent("ChevronForwardOutline");
  const _component_SmileOutlined = resolveComponent("SmileOutlined");
  const _component_n_dropdown = __unplugin_components_2$2;
  return openBlock(), createBlock(_component_n_el, {
    tag: "div",
    class: "scrollbar"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handleArrowScroll("prev")),
        class: "arrow arrow-prev"
      }, [
        createVNode(_component_n_icon, {
          size: "18",
          color: "var(--primary-color)"
        }, {
          default: withCtx(() => [
            createVNode(_component_ChevronBackOutline)
          ]),
          _: 1
        })
      ]),
      _ctx.app.userSetting.tabsStyle === "tact" ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        _ctx.app.tabs.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.app.tabs, (item, idx) => {
          return openBlock(), createBlock(_component_n_el, {
            onClick: ($event) => _ctx.compData.handleActionRouter(item),
            key: idx,
            tag: "div",
            class: normalizeClass(["tabs-item", item.meta.id === _ctx.app.currentRouter.meta.id ? "active" : null])
          }, {
            default: withCtx(() => [
              item.meta.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.meta.icon), {
                key: 0,
                class: "icon"
              })) : createCommentVNode("", true),
              createBaseVNode("span", null, toDisplayString(item.meta.title), 1),
              _ctx.compData.isClose(item) ? (openBlock(), createBlock(_component_n_icon, {
                key: 1,
                class: "icon-close",
                onClick: withModifiers(($event) => _ctx.compData.handleColseRouter(item), ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_CloseOutline)
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1032, ["onClick", "class"]);
        }), 128)) : createCommentVNode("", true)
      ], 512)) : (openBlock(), createElementBlock("div", _hoisted_2$1, [
        _ctx.app.tabs.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.app.tabs, (item, idx) => {
          return openBlock(), createBlock(_component_n_el, {
            onClick: ($event) => _ctx.compData.handleActionRouter(item),
            key: idx,
            tag: "div",
            class: normalizeClass(["tabs-item", item.meta.id === _ctx.app.currentRouter.meta.id ? "active" : null])
          }, {
            default: withCtx(() => [
              item.meta.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.meta.icon), {
                key: 0,
                class: "icon"
              })) : createCommentVNode("", true),
              createBaseVNode("span", null, toDisplayString(item.meta.title), 1),
              _ctx.compData.isClose(item) ? (openBlock(), createBlock(_component_n_icon, {
                key: 1,
                class: "icon-close",
                onClick: withModifiers(($event) => _ctx.compData.handleColseRouter(item), ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_CloseOutline)
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1032, ["onClick", "class"]);
        }), 128)) : createCommentVNode("", true)
      ], 512)),
      createBaseVNode("div", {
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleArrowScroll("next")),
        class: "arrow arrow-next"
      }, [
        createVNode(_component_n_icon, {
          size: "18",
          color: "var(--primary-color)"
        }, {
          default: withCtx(() => [
            createVNode(_component_ChevronForwardOutline)
          ]),
          _: 1
        })
      ]),
      createBaseVNode("div", _hoisted_3, [
        createVNode(_component_n_dropdown, {
          options: _ctx.compData.tabsMore,
          placement: "bottom-start",
          trigger: "click"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_icon, { size: "18" }, {
              default: withCtx(() => [
                createVNode(_component_SmileOutlined)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["options"])
      ])
    ]),
    _: 1
  });
}
const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-d2db0254"]]);
const _sfc_main$1 = defineComponent({
  setup() {
    const app$1 = app();
    const $mitt = inject("$mitt");
    const isRoad = ref(true);
    const caches = computed(() => {
      return app$1.allMenus.filter((item) => item.keepAlive).map((item) => item.name);
    });
    $mitt.on("onReload", () => {
      if (!NProgress.status) {
        NProgress.start();
        isRoad.value = false;
        nextTick(() => {
          isRoad.value = true;
          NProgress.done();
        });
      }
    });
    const enterActiveClass = computed(() => {
      let item = animations.find((item2) => app$1.userSetting.animation === item2.value);
      return [item.prefix, item.value].join(" ");
    });
    const leaveActiveClass = computed(() => {
      let item = animations.find((item2) => app$1.userSetting.animation === item2.value);
      return [item.prefix, item.out].join(" ");
    });
    return {
      app: app$1,
      enterActiveClass,
      leaveActiveClass,
      isRoad,
      caches
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_4ed6bac8_lang = "";
const _hoisted_1$1 = { class: "main bag-scroll" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    _ctx.isRoad ? (openBlock(), createBlock(_component_router_view, { key: 0 }, {
      default: withCtx(({ Component }) => [
        createVNode(Transition, {
          mode: "out-in",
          "enter-active-class": _ctx.enterActiveClass,
          "leave-active-class": _ctx.leaveActiveClass
        }, {
          default: withCtx(() => [
            _ctx.app.userSetting.keepAlive ? (openBlock(), createBlock(KeepAlive, {
              key: 0,
              max: 30,
              include: _ctx.caches
            }, [
              (openBlock(), createBlock(resolveDynamicComponent(Component)))
            ], 1032, ["include"])) : (openBlock(), createBlock(resolveDynamicComponent(Component), { key: 1 }))
          ]),
          _: 2
        }, 1032, ["enter-active-class", "leave-active-class"])
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ]);
}
const BagMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-4ed6bac8"]]);
const _sfc_main = defineComponent({
  components: {
    Breadcrumb,
    UserSet,
    MenuVisibleIcon,
    AppLogo,
    Sidebar,
    Navbar,
    Tabs,
    BagMain
  },
  setup() {
    const app$1 = app();
    const compData = reactive({
      isOpen: false,
      handleMobileMask() {
        compData.isOpen = !compData.isOpen;
      }
    });
    return {
      compData,
      app: app$1
    };
  }
});
const index_vue_vue_type_style_index_0_lang = "";
const index_vue_vue_type_style_index_1_scoped_77c118b9_lang = "";
const _hoisted_1 = { class: "header-plan" };
const _hoisted_2 = { class: "header-user" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppLogo = resolveComponent("AppLogo");
  const _component_MenuVisibleIcon = resolveComponent("MenuVisibleIcon");
  const _component_Breadcrumb = resolveComponent("Breadcrumb");
  const _component_Navbar = resolveComponent("Navbar");
  const _component_UserSet = resolveComponent("UserSet");
  const _component_n_layout_header = __unplugin_components_0$1;
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_BagMain = resolveComponent("BagMain");
  const _component_n_el = __unplugin_components_1$1;
  const _component_n_layout = __unplugin_components_2$1;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_n_layout, { style: { "height": "100%" } }, {
      default: withCtx(() => [
        createVNode(_component_n_layout_header, {
          class: "header",
          bordered: ""
        }, {
          default: withCtx(() => [
            !_ctx.app.mobile ? (openBlock(), createBlock(_component_AppLogo, { key: 0 })) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_1, [
              _ctx.app.mobile ? (openBlock(), createBlock(_component_MenuVisibleIcon, {
                key: 0,
                onClick: _ctx.compData.handleMobileMask
              }, null, 8, ["onClick"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                _ctx.app.userSetting.layoutName === "ml" ? (openBlock(), createBlock(_component_Breadcrumb, { key: 0 })) : (openBlock(), createBlock(_component_Navbar, { key: 1 }))
              ], 64))
            ]),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_UserSet)
            ])
          ]),
          _: 1
        }),
        createVNode(_component_n_layout, {
          "has-sider": "",
          style: { "height": "calc(100% - 50px)" }
        }, {
          default: withCtx(() => [
            createVNode(_component_Sidebar, {
              isOpen: _ctx.compData.isOpen,
              "onUpdate:isOpen": _cache[0] || (_cache[0] = ($event) => _ctx.compData.isOpen = $event)
            }, null, 8, ["isOpen"]),
            createVNode(_component_n_layout, { style: { "height": "100%" } }, {
              default: withCtx(() => [
                createVNode(_component_n_el, {
                  tag: "div",
                  class: "layout-main"
                }, {
                  default: withCtx(() => [
                    withDirectives(createVNode(_component_Tabs, null, null, 512), [
                      [vShow, !_ctx.app.userSetting.hideTabs]
                    ]),
                    createVNode(_component_BagMain)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    withDirectives(createBaseVNode("div", {
      class: "mobile-mask",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.compData.handleMobileMask && _ctx.compData.handleMobileMask(...args))
    }, null, 512), [
      [vShow, _ctx.compData.isOpen]
    ])
  ], 64);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-77c118b9"]]);
export {
  index as default
};
