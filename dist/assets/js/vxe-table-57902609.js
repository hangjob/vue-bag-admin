import { x as xeUtils } from "./xe-utils-a3a4c73c.js";
import { w as watch, N as h, R as resolveComponent, d as defineComponent, h as inject, l as ref, n as nextTick, S as createCommentVNode, c as reactive, I as createApp, j as computed, A as Teleport, p as provide, o as onMounted, f as onUnmounted, g as getCurrentInstance, m as onBeforeUnmount, B as onActivated, D as onDeactivated } from "./@vue-f3ca1b6f.js";
var iconPrefix = "vxe-icon--";
var GlobalConfig = {
  size: null,
  zIndex: 999,
  version: 0,
  emptyCell: "\u3000",
  table: {
    fit: true,
    showHeader: true,
    animat: true,
    delayHover: 250,
    radioConfig: {
      strict: true
    },
    checkboxConfig: {
      strict: true
    },
    validConfig: {
      showMessage: true,
      message: "default"
    },
    sortConfig: {
      showIcon: true
    },
    filterConfig: {
      showIcon: true
    },
    treeConfig: {
      rowtKey: "id",
      parentKey: "parentId",
      children: "children",
      hasChild: "hasChild",
      indent: 20,
      showIcon: true
    },
    expandConfig: {
      showIcon: true
    },
    editConfig: {
      showIcon: true,
      showAsterisk: true
    },
    importConfig: {
      modes: ["insert", "covering"]
    },
    exportConfig: {
      modes: ["current", "selected"]
    },
    printConfig: {
      modes: ["current", "selected"]
    },
    mouseConfig: {
      extension: true
    },
    areaConfig: {
      selectCellByHeader: true
    },
    clipConfig: {
      isCopy: true,
      isCut: true,
      isPaste: true
    },
    fnrConfig: {
      isFind: true,
      isReplace: true
    },
    scrollX: {
      enabled: true,
      gt: 60
    },
    scrollY: {
      enabled: true,
      gt: 100
    }
  },
  export: {
    types: {}
  },
  icon: {
    TABLE_SORT_ASC: iconPrefix + "caret-top",
    TABLE_SORT_DESC: iconPrefix + "caret-bottom",
    TABLE_FILTER_NONE: iconPrefix + "funnel",
    TABLE_FILTER_MATCH: iconPrefix + "funnel",
    TABLE_EDIT: iconPrefix + "edit-outline",
    TABLE_HELP: iconPrefix + "question",
    TABLE_TREE_LOADED: iconPrefix + "refresh roll",
    TABLE_TREE_OPEN: iconPrefix + "caret-right rotate90",
    TABLE_TREE_CLOSE: iconPrefix + "caret-right",
    TABLE_EXPAND_LOADED: iconPrefix + "refresh roll",
    TABLE_EXPAND_OPEN: iconPrefix + "arrow-right rotate90",
    TABLE_EXPAND_CLOSE: iconPrefix + "arrow-right",
    BUTTON_DROPDOWN: iconPrefix + "arrow-bottom",
    BUTTON_LOADING: iconPrefix + "refresh roll",
    SELECT_LOADED: iconPrefix + "refresh roll",
    SELECT_OPEN: iconPrefix + "caret-bottom rotate180",
    SELECT_CLOSE: iconPrefix + "caret-bottom",
    PAGER_JUMP_PREV: iconPrefix + "d-arrow-left",
    PAGER_JUMP_NEXT: iconPrefix + "d-arrow-right",
    PAGER_PREV_PAGE: iconPrefix + "arrow-left",
    PAGER_NEXT_PAGE: iconPrefix + "arrow-right",
    PAGER_JUMP_MORE: iconPrefix + "more",
    INPUT_CLEAR: iconPrefix + "close",
    INPUT_PWD: iconPrefix + "eye-slash",
    INPUT_SHOW_PWD: iconPrefix + "eye",
    INPUT_PREV_NUM: iconPrefix + "caret-top",
    INPUT_NEXT_NUM: iconPrefix + "caret-bottom",
    INPUT_DATE: iconPrefix + "calendar",
    INPUT_SEARCH: iconPrefix + "search",
    MODAL_ZOOM_IN: iconPrefix + "square",
    MODAL_ZOOM_OUT: iconPrefix + "zoomout",
    MODAL_CLOSE: iconPrefix + "close",
    MODAL_INFO: iconPrefix + "info",
    MODAL_SUCCESS: iconPrefix + "success",
    MODAL_WARNING: iconPrefix + "warning",
    MODAL_ERROR: iconPrefix + "error",
    MODAL_QUESTION: iconPrefix + "question",
    MODAL_LOADING: iconPrefix + "refresh roll",
    TOOLBAR_TOOLS_REFRESH: iconPrefix + "refresh",
    TOOLBAR_TOOLS_REFRESH_LOADING: iconPrefix + "refresh roll",
    TOOLBAR_TOOLS_IMPORT: iconPrefix + "upload",
    TOOLBAR_TOOLS_EXPORT: iconPrefix + "download",
    TOOLBAR_TOOLS_PRINT: iconPrefix + "print",
    TOOLBAR_TOOLS_ZOOM_IN: iconPrefix + "zoomin",
    TOOLBAR_TOOLS_ZOOM_OUT: iconPrefix + "zoomout",
    TOOLBAR_TOOLS_CUSTOM: iconPrefix + "menu",
    FORM_PREFIX: iconPrefix + "question",
    FORM_SUFFIX: iconPrefix + "question",
    FORM_FOLDING: iconPrefix + "arrow-top rotate180",
    FORM_UNFOLDING: iconPrefix + "arrow-top"
  },
  grid: {
    formConfig: {
      enabled: true
    },
    pagerConfig: {
      enabled: true
    },
    toolbarConfig: {
      enabled: true
    },
    proxyConfig: {
      enabled: true,
      autoLoad: true,
      message: true,
      props: {
        list: null,
        result: "result",
        total: "page.total",
        message: "message"
      }
    }
  },
  tooltip: {
    trigger: "hover",
    theme: "dark",
    leaveDelay: 300
  },
  pager: {},
  form: {
    validConfig: {
      showMessage: true,
      autoPos: true
    },
    titleAsterisk: true
  },
  input: {
    minDate: new Date(1900, 0, 1),
    maxDate: new Date(2100, 0, 1),
    startDay: 1,
    selectDay: 1,
    digits: 2,
    controls: true
  },
  textarea: {},
  select: {
    multiCharOverflow: 8
  },
  toolbar: {},
  button: {},
  radio: {},
  checkbox: {},
  switch: {},
  modal: {
    top: 15,
    showHeader: true,
    minWidth: 340,
    minHeight: 140,
    lockView: true,
    mask: true,
    duration: 3e3,
    marginSize: 0,
    dblclickZoom: true,
    showTitleOverflow: true,
    animat: true,
    showClose: true,
    draggable: true,
    storageKey: "VXE_MODAL_POSITION"
  },
  list: {
    scrollY: {
      enabled: true,
      gt: 100
    }
  },
  i18n: function(key) {
    return key;
  }
};
var zindexIndex = 0;
var lastZindex = 1;
function getLog(message, params) {
  return "[vxe-table] " + GlobalConfig.i18n(message, params);
}
function outLog(type) {
  return function(message, params) {
    var msg = getLog(message, params);
    console[type](msg);
    return msg;
  };
}
function isEnableConf(conf) {
  return conf && conf.enabled !== false;
}
function isEmptyValue(cellValue) {
  return cellValue === null || cellValue === void 0 || cellValue === "";
}
function parseFile(file) {
  var name = file.name;
  var tIndex = xeUtils.lastIndexOf(name, ".");
  var type = name.substring(tIndex + 1, name.length);
  var filename = name.substring(0, tIndex);
  return { filename, type };
}
function nextZIndex() {
  lastZindex = GlobalConfig.zIndex + zindexIndex++;
  return lastZindex;
}
function getLastZIndex() {
  return lastZindex;
}
var warnLog = outLog("warn");
var errLog = outLog("error");
function hasChildrenList(item) {
  return item && item.children && item.children.length > 0;
}
function getFuncText(content) {
  return content ? xeUtils.toValueString(GlobalConfig.translate ? GlobalConfig.translate("" + content) : content) : "";
}
function formatText(value, placeholder) {
  return "" + (isEmptyValue(value) ? placeholder ? GlobalConfig.emptyCell : "" : value);
}
function eqEmptyValue(cellValue) {
  return cellValue === "" || xeUtils.eqNull(cellValue);
}
var storeMap = {};
var interceptor = {
  mixin: function(options) {
    xeUtils.each(options, function(callback, type) {
      return interceptor.add(type, callback);
    });
    return interceptor;
  },
  get: function(type) {
    return storeMap[type] || [];
  },
  add: function(type, callback) {
    if (callback) {
      var eList = storeMap[type];
      if (!eList) {
        eList = storeMap[type] = [];
      }
      eList.push(callback);
    }
    return interceptor;
  },
  delete: function(type, callback) {
    var eList = storeMap[type];
    if (eList) {
      if (callback) {
        xeUtils.remove(eList, function(fn) {
          return fn === callback;
        });
      } else {
        delete storeMap[type];
      }
    }
  }
};
var ColumnInfo = function() {
  function ColumnInfo2($xetable, _vm, _a) {
    var _b = _a === void 0 ? {} : _a, renderHeader = _b.renderHeader, renderCell = _b.renderCell, renderFooter = _b.renderFooter, renderData = _b.renderData;
    var $xegrid = $xetable.xegrid;
    var formatter = _vm.formatter;
    var visible = xeUtils.isBoolean(_vm.visible) ? _vm.visible : true;
    Object.assign(this, {
      type: _vm.type,
      property: _vm.field,
      title: _vm.title,
      width: _vm.width,
      minWidth: _vm.minWidth,
      resizable: _vm.resizable,
      fixed: _vm.fixed,
      align: _vm.align,
      headerAlign: _vm.headerAlign,
      footerAlign: _vm.footerAlign,
      showOverflow: _vm.showOverflow,
      showHeaderOverflow: _vm.showHeaderOverflow,
      showFooterOverflow: _vm.showFooterOverflow,
      className: _vm.className,
      headerClassName: _vm.headerClassName,
      footerClassName: _vm.footerClassName,
      formatter,
      sortable: _vm.sortable,
      sortBy: _vm.sortBy,
      sortType: _vm.sortType,
      filters: toFilters(_vm.filters),
      filterMultiple: xeUtils.isBoolean(_vm.filterMultiple) ? _vm.filterMultiple : true,
      filterMethod: _vm.filterMethod,
      filterResetMethod: _vm.filterResetMethod,
      filterRecoverMethod: _vm.filterRecoverMethod,
      filterRender: _vm.filterRender,
      treeNode: _vm.treeNode,
      cellType: _vm.cellType,
      cellRender: _vm.cellRender,
      editRender: _vm.editRender,
      contentRender: _vm.contentRender,
      exportMethod: _vm.exportMethod,
      footerExportMethod: _vm.footerExportMethod,
      titleHelp: _vm.titleHelp,
      params: _vm.params,
      id: _vm.colId || xeUtils.uniqueId("col_"),
      parentId: null,
      visible,
      halfVisible: false,
      defaultVisible: visible,
      checked: false,
      halfChecked: false,
      disabled: false,
      level: 1,
      rowSpan: 1,
      colSpan: 1,
      order: null,
      sortTime: 0,
      renderWidth: 0,
      renderHeight: 0,
      resizeWidth: 0,
      renderLeft: 0,
      renderArgs: [],
      model: {},
      renderHeader: renderHeader || _vm.renderHeader,
      renderCell: renderCell || _vm.renderCell,
      renderFooter: renderFooter || _vm.renderFooter,
      renderData,
      slots: _vm.slots
    });
    if ($xegrid) {
      var computeProxyOpts = $xegrid.getComputeMaps().computeProxyOpts;
      var proxyOpts = computeProxyOpts.value;
      if (proxyOpts.beforeColumn) {
        proxyOpts.beforeColumn({ $grid: $xegrid, column: this });
      }
    }
  }
  ColumnInfo2.prototype.getTitle = function() {
    return getFuncText(this.title || (this.type === "seq" ? GlobalConfig.i18n("vxe.table.seqTitle") : ""));
  };
  ColumnInfo2.prototype.getKey = function() {
    return this.property || (this.type ? "type=" + this.type : null);
  };
  ColumnInfo2.prototype.update = function(name, value) {
    if (name !== "filters") {
      if (name === "field") {
        this.property = value;
      } else {
        this[name] = value;
      }
    }
  };
  return ColumnInfo2;
}();
var reClsMap = {};
var browse = xeUtils.browse();
function getClsRE(cls) {
  if (!reClsMap[cls]) {
    reClsMap[cls] = new RegExp("(?:^|\\s)" + cls + "(?!\\S)", "g");
  }
  return reClsMap[cls];
}
function getNodeOffset(elem, container, rest) {
  if (elem) {
    var parentElem = elem.parentNode;
    rest.top += elem.offsetTop;
    rest.left += elem.offsetLeft;
    if (parentElem && parentElem !== document.documentElement && parentElem !== document.body) {
      rest.top -= parentElem.scrollTop;
      rest.left -= parentElem.scrollLeft;
    }
    if (container && (elem === container || elem.offsetParent === container) ? 0 : elem.offsetParent) {
      return getNodeOffset(elem.offsetParent, container, rest);
    }
  }
  return rest;
}
function isPx(val) {
  return val && /^\d+(px)?$/.test(val);
}
function isScale(val) {
  return val && /^\d+%$/.test(val);
}
function hasClass(elem, cls) {
  return elem && elem.className && elem.className.match && elem.className.match(getClsRE(cls));
}
function removeClass(elem, cls) {
  if (elem && hasClass(elem, cls)) {
    elem.className = elem.className.replace(getClsRE(cls), "");
  }
}
function addClass(elem, cls) {
  if (elem && !hasClass(elem, cls)) {
    removeClass(elem, cls);
    elem.className = elem.className + " " + cls;
  }
}
function getDomNode() {
  var documentElement = document.documentElement;
  var bodyElem = document.body;
  return {
    scrollTop: documentElement.scrollTop || bodyElem.scrollTop,
    scrollLeft: documentElement.scrollLeft || bodyElem.scrollLeft,
    visibleHeight: documentElement.clientHeight || bodyElem.clientHeight,
    visibleWidth: documentElement.clientWidth || bodyElem.clientWidth
  };
}
function getOffsetHeight(elem) {
  return elem ? elem.offsetHeight : 0;
}
function getPaddingTopBottomSize(elem) {
  if (elem) {
    var computedStyle = getComputedStyle(elem);
    var paddingTop = xeUtils.toNumber(computedStyle.paddingTop);
    var paddingBottom = xeUtils.toNumber(computedStyle.paddingBottom);
    return paddingTop + paddingBottom;
  }
  return 0;
}
function setScrollTop(elem, scrollTop) {
  if (elem) {
    elem.scrollTop = scrollTop;
  }
}
function setScrollLeft(elem, scrollLeft) {
  if (elem) {
    elem.scrollLeft = scrollLeft;
  }
}
function updateCellTitle(overflowElem, column) {
  var content = column.type === "html" ? overflowElem.innerText : overflowElem.textContent;
  if (overflowElem.getAttribute("title") !== content) {
    overflowElem.setAttribute("title", content);
  }
}
function getEventTargetNode(evnt, container, queryCls, queryMethod) {
  var targetElem;
  var target = evnt.target;
  while (target && target.nodeType && target !== document) {
    if (queryCls && hasClass(target, queryCls) && (!queryMethod || queryMethod(target))) {
      targetElem = target;
    } else if (target === container) {
      return { flag: queryCls ? !!targetElem : true, container, targetElem };
    }
    target = target.parentNode;
  }
  return { flag: false };
}
function getOffsetPos(elem, container) {
  return getNodeOffset(elem, container, { left: 0, top: 0 });
}
function getAbsolutePos(elem) {
  var bounding = elem.getBoundingClientRect();
  var boundingTop = bounding.top;
  var boundingLeft = bounding.left;
  var _a = getDomNode(), scrollTop = _a.scrollTop, scrollLeft = _a.scrollLeft, visibleHeight = _a.visibleHeight, visibleWidth = _a.visibleWidth;
  return { boundingTop, top: scrollTop + boundingTop, boundingLeft, left: scrollLeft + boundingLeft, visibleHeight, visibleWidth };
}
var scrollIntoViewIfNeeded = "scrollIntoViewIfNeeded";
var scrollIntoView = "scrollIntoView";
function scrollToView(elem) {
  if (elem) {
    if (elem[scrollIntoViewIfNeeded]) {
      elem[scrollIntoViewIfNeeded]();
    } else if (elem[scrollIntoView]) {
      elem[scrollIntoView]();
    }
  }
}
function restoreScrollLocation($xetable, scrollLeft, scrollTop) {
  var internalData = $xetable.internalData;
  return $xetable.clearScroll().then(function() {
    if (scrollLeft || scrollTop) {
      internalData.lastScrollLeft = 0;
      internalData.lastScrollTop = 0;
      return $xetable.scrollTo(scrollLeft, scrollTop);
    }
  });
}
function removeScrollListener(scrollElem) {
  if (scrollElem && scrollElem._onscroll) {
    scrollElem.onscroll = null;
  }
}
function restoreScrollListener(scrollElem) {
  if (scrollElem && scrollElem._onscroll) {
    scrollElem.onscroll = scrollElem._onscroll;
  }
}
function getRowUniqueId() {
  return xeUtils.uniqueId("row_");
}
function getRowkey($xetable) {
  var props = $xetable.props;
  var rowId = props.rowId;
  return rowId || "_XID";
}
function getRowid($xetable, row) {
  var rowId = xeUtils.get(row, getRowkey($xetable));
  return xeUtils.eqNull(rowId) ? "" : encodeURIComponent(rowId);
}
var handleFieldOrColumn = function($xetable, fieldOrColumn) {
  if (fieldOrColumn) {
    return xeUtils.isString(fieldOrColumn) ? $xetable.getColumnByField(fieldOrColumn) : fieldOrColumn;
  }
  return null;
};
function getPaddingLeftRightSize(elem) {
  if (elem) {
    var computedStyle = getComputedStyle(elem);
    var paddingLeft = xeUtils.toNumber(computedStyle.paddingLeft);
    var paddingRight = xeUtils.toNumber(computedStyle.paddingRight);
    return paddingLeft + paddingRight;
  }
  return 0;
}
function getElemenMarginWidth(elem) {
  if (elem) {
    var computedStyle = getComputedStyle(elem);
    var marginLeft = xeUtils.toNumber(computedStyle.marginLeft);
    var marginRight = xeUtils.toNumber(computedStyle.marginRight);
    return elem.offsetWidth + marginLeft + marginRight;
  }
  return 0;
}
function queryCellElement(cell, selector) {
  return cell.querySelector(".vxe-cell" + selector);
}
function toFilters(filters) {
  if (filters && xeUtils.isArray(filters)) {
    return filters.map(function(_a) {
      var label = _a.label, value = _a.value, data = _a.data, resetValue = _a.resetValue, checked = _a.checked;
      return { label, value, data, resetValue, checked: !!checked, _checked: !!checked };
    });
  }
  return filters;
}
function getCellValue(row, column) {
  return xeUtils.get(row, column.property);
}
function setCellValue(row, column, value) {
  return xeUtils.set(row, column.property, value);
}
function getPropClass(property, params) {
  return property ? xeUtils.isFunction(property) ? property(params) : property : "";
}
function getColMinWidth(params) {
  var $table = params.$table, column = params.column, cell = params.cell;
  var tableProps2 = $table.props;
  var computeResizableOpts = $table.getComputeMaps().computeResizableOpts;
  var resizableOpts = computeResizableOpts.value;
  var reMinWidth = resizableOpts.minWidth;
  if (reMinWidth) {
    var customMinWidth = xeUtils.isFunction(reMinWidth) ? reMinWidth(params) : reMinWidth;
    if (customMinWidth !== "auto") {
      return Math.max(1, xeUtils.toNumber(customMinWidth));
    }
  }
  var allColumnHeaderOverflow = tableProps2.showHeaderOverflow;
  var showHeaderOverflow = column.showHeaderOverflow, colMinWidth = column.minWidth;
  var headOverflow = xeUtils.isUndefined(showHeaderOverflow) || xeUtils.isNull(showHeaderOverflow) ? allColumnHeaderOverflow : showHeaderOverflow;
  var showEllipsis = headOverflow === "ellipsis";
  var showTitle = headOverflow === "title";
  var showTooltip = headOverflow === true || headOverflow === "tooltip";
  var hasEllipsis = showTitle || showTooltip || showEllipsis;
  var minTitleWidth = xeUtils.floor((xeUtils.toNumber(getComputedStyle(cell).fontSize) || 14) * 1.6);
  var paddingLeftRight = getPaddingLeftRightSize(cell) + getPaddingLeftRightSize(queryCellElement(cell, ""));
  var mWidth = minTitleWidth + paddingLeftRight;
  if (hasEllipsis) {
    var checkboxIconWidth = getPaddingLeftRightSize(queryCellElement(cell, "--title>.vxe-cell--checkbox"));
    var requiredIconWidth = getElemenMarginWidth(queryCellElement(cell, ">.vxe-cell--required-icon"));
    var editIconWidth = getElemenMarginWidth(queryCellElement(cell, ">.vxe-cell--edit-icon"));
    var helpIconWidth = getElemenMarginWidth(queryCellElement(cell, ">.vxe-cell-help-icon"));
    var sortIconWidth = getElemenMarginWidth(queryCellElement(cell, ">.vxe-cell--sort"));
    var filterIconWidth = getElemenMarginWidth(queryCellElement(cell, ">.vxe-cell--filter"));
    mWidth += checkboxIconWidth + requiredIconWidth + editIconWidth + helpIconWidth + filterIconWidth + sortIconWidth;
  }
  if (colMinWidth) {
    var refTableBody = $table.getRefMaps().refTableBody;
    var tableBody = refTableBody.value;
    var bodyElem = tableBody ? tableBody.$el : null;
    if (bodyElem) {
      if (isScale(colMinWidth)) {
        var bodyWidth = bodyElem.clientWidth - 1;
        var meanWidth = bodyWidth / 100;
        return Math.max(mWidth, Math.floor(xeUtils.toInteger(colMinWidth) * meanWidth));
      } else if (isPx(colMinWidth)) {
        return Math.max(mWidth, xeUtils.toInteger(colMinWidth));
      }
    }
  }
  return mWidth;
}
function isColumnInfo(column) {
  return column && (column.constructor === ColumnInfo || column instanceof ColumnInfo);
}
function createColumn($xetable, options, renderOptions) {
  return isColumnInfo(options) ? options : new ColumnInfo($xetable, options, renderOptions);
}
function watchColumn(props, column) {
  Object.keys(props).forEach(function(name) {
    watch(function() {
      return props[name];
    }, function(value) {
      column.update(name, value);
    });
  });
}
function assemColumn($xetable, elem, column, colgroup) {
  var reactData = $xetable.reactData;
  var staticColumns = reactData.staticColumns;
  var parentElem = elem.parentNode;
  var parentColumn = colgroup ? colgroup.column : null;
  var parentCols = parentColumn ? parentColumn.children : staticColumns;
  if (parentElem && parentCols) {
    parentCols.splice(xeUtils.arrayIndexOf(parentElem.children, elem), 0, column);
    reactData.staticColumns = staticColumns.slice(0);
  }
}
function destroyColumn($xetable, column) {
  var reactData = $xetable.reactData;
  var staticColumns = reactData.staticColumns;
  var matchObj = xeUtils.findTree(staticColumns, function(item) {
    return item.id === column.id;
  }, { children: "children" });
  if (matchObj) {
    matchObj.items.splice(matchObj.index, 1);
  }
  reactData.staticColumns = staticColumns.slice(0);
}
function mergeBodyMethod(mergeList, _rowIndex, _columnIndex) {
  for (var mIndex = 0; mIndex < mergeList.length; mIndex++) {
    var _a = mergeList[mIndex], mergeRowIndex = _a.row, mergeColIndex = _a.col, mergeRowspan = _a.rowspan, mergeColspan = _a.colspan;
    if (mergeColIndex > -1 && mergeRowIndex > -1 && mergeRowspan && mergeColspan) {
      if (mergeRowIndex === _rowIndex && mergeColIndex === _columnIndex) {
        return { rowspan: mergeRowspan, colspan: mergeColspan };
      }
      if (_rowIndex >= mergeRowIndex && _rowIndex < mergeRowIndex + mergeRowspan && _columnIndex >= mergeColIndex && _columnIndex < mergeColIndex + mergeColspan) {
        return { rowspan: 0, colspan: 0 };
      }
    }
  }
}
function clearTableDefaultStatus($xetable) {
  var props = $xetable.props, internalData = $xetable.internalData;
  internalData.initStatus = false;
  $xetable.clearSort();
  $xetable.clearCurrentRow();
  $xetable.clearCurrentColumn();
  $xetable.clearRadioRow();
  $xetable.clearRadioReserve();
  $xetable.clearCheckboxRow();
  $xetable.clearCheckboxReserve();
  $xetable.clearRowExpand();
  $xetable.clearTreeExpand();
  $xetable.clearTreeExpandReserve();
  if ($xetable.clearFilter) {
    $xetable.clearFilter();
  }
  if ($xetable.clearSelected && (props.keyboardConfig || props.mouseConfig)) {
    $xetable.clearSelected();
  }
  if ($xetable.clearCellAreas && props.mouseConfig) {
    $xetable.clearCellAreas();
    $xetable.clearCopyCellArea();
  }
  return $xetable.clearScroll();
}
function clearTableAllStatus($xetable) {
  if ($xetable.clearFilter) {
    $xetable.clearFilter();
  }
  return clearTableDefaultStatus($xetable);
}
function rowToVisible($xetable, row) {
  var reactData = $xetable.reactData, internalData = $xetable.internalData;
  var refTableBody = $xetable.getRefMaps().refTableBody;
  var scrollYLoad = reactData.scrollYLoad;
  var afterFullData = internalData.afterFullData, scrollYStore = internalData.scrollYStore;
  var tableBody = refTableBody.value;
  var bodyElem = tableBody ? tableBody.$el : null;
  if (bodyElem) {
    var trElem = bodyElem.querySelector('[rowid="' + getRowid($xetable, row) + '"]');
    if (trElem) {
      var bodyHeight = bodyElem.clientHeight;
      var bodySrcollTop = bodyElem.scrollTop;
      var trOffsetParent = trElem.offsetParent;
      var trOffsetTop = trElem.offsetTop + (trOffsetParent ? trOffsetParent.offsetTop : 0);
      var trHeight = trElem.clientHeight;
      if (trOffsetTop < bodySrcollTop || trOffsetTop > bodySrcollTop + bodyHeight) {
        return $xetable.scrollTo(null, trOffsetTop);
      } else if (trOffsetTop + trHeight >= bodyHeight + bodySrcollTop) {
        return $xetable.scrollTo(null, bodySrcollTop + trHeight);
      }
    } else {
      if (scrollYLoad) {
        return $xetable.scrollTo(null, (afterFullData.indexOf(row) - 1) * scrollYStore.rowHeight);
      }
    }
  }
  return Promise.resolve();
}
function colToVisible($xetable, column) {
  var reactData = $xetable.reactData, internalData = $xetable.internalData;
  var refTableBody = $xetable.getRefMaps().refTableBody;
  var scrollXLoad = reactData.scrollXLoad;
  var visibleColumn = internalData.visibleColumn;
  var tableBody = refTableBody.value;
  var bodyElem = tableBody ? tableBody.$el : null;
  if (bodyElem) {
    var tdElem = bodyElem.querySelector("." + column.id);
    if (tdElem) {
      var bodyWidth = bodyElem.clientWidth;
      var bodySrcollLeft = bodyElem.scrollLeft;
      var tdOffsetParent = tdElem.offsetParent;
      var tdOffsetLeft = tdElem.offsetLeft + (tdOffsetParent ? tdOffsetParent.offsetLeft : 0);
      var tdWidth = tdElem.clientWidth;
      if (tdOffsetLeft < bodySrcollLeft || tdOffsetLeft > bodySrcollLeft + bodyWidth) {
        return $xetable.scrollTo(tdOffsetLeft);
      } else if (tdOffsetLeft + tdWidth >= bodyWidth + bodySrcollLeft) {
        return $xetable.scrollTo(bodySrcollLeft + tdWidth);
      }
    } else {
      if (scrollXLoad) {
        var scrollLeft = 0;
        for (var index = 0; index < visibleColumn.length; index++) {
          if (visibleColumn[index] === column) {
            break;
          }
          scrollLeft += visibleColumn[index].renderWidth;
        }
        return $xetable.scrollTo(scrollLeft);
      }
    }
  }
  return Promise.resolve();
}
function getOnName(type) {
  return "on" + type.substring(0, 1).toLocaleUpperCase() + type.substring(1);
}
var __assign$h = function() {
  __assign$h = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$h.apply(this, arguments);
};
var __spreadArray$4 = function(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
    to[j] = from[i];
  return to;
};
var componentDefaultModelProp = "modelValue";
var defaultCompProps = { transfer: true };
function getModelEvent(renderOpts) {
  switch (renderOpts.name) {
    case "input":
    case "textarea":
      return "input";
  }
  return "update:modelValue";
}
function getChangeEvent(renderOpts) {
  switch (renderOpts.name) {
    case "input":
    case "textarea":
    case "$input":
    case "$textarea":
      return "input";
  }
  return "change";
}
function parseDate(value, props) {
  return value && props.valueFormat ? xeUtils.toStringDate(value, props.valueFormat) : value;
}
function getFormatDate(value, props, defaultFormat) {
  var _a = props.dateConfig, dateConfig = _a === void 0 ? {} : _a;
  return xeUtils.toDateString(parseDate(value, props), dateConfig.labelFormat || defaultFormat);
}
function getLabelFormatDate(value, props) {
  return getFormatDate(value, props, GlobalConfig.i18n("vxe.input.date.labelFormat." + props.type));
}
function getComponentName(name) {
  return "vxe-" + name.replace("$", "");
}
function getDefaultComponent(_a) {
  var name = _a.name;
  return resolveComponent(getComponentName(name));
}
function handleConfirmFilter(params, checked, option) {
  var $panel = params.$panel;
  $panel.changeOption({}, checked, option);
}
function getNativeAttrs(renderOpts) {
  var name = renderOpts.name, attrs = renderOpts.attrs;
  if (name === "input") {
    attrs = Object.assign({ type: "text" }, attrs);
  }
  return attrs;
}
function getInputImmediateModel(renderOpts) {
  var name = renderOpts.name, immediate = renderOpts.immediate, props = renderOpts.props;
  if (!immediate) {
    if (name === "$input") {
      var type = (props || {}).type;
      return !(!type || type === "text" || type === "number" || type === "integer" || type === "float");
    }
    if (name === "input" || name === "textarea" || name === "$textarea") {
      return false;
    }
    return true;
  }
  return immediate;
}
function getCellEditProps(renderOpts, params, value, defaultProps) {
  var _a;
  return xeUtils.assign({ immediate: getInputImmediateModel(renderOpts) }, defaultCompProps, defaultProps, renderOpts.props, (_a = {}, _a[componentDefaultModelProp] = value, _a));
}
function getCellEditFilterProps(renderOpts, params, value, defaultProps) {
  var _a;
  return xeUtils.assign({}, defaultCompProps, defaultProps, renderOpts.props, (_a = {}, _a[componentDefaultModelProp] = value, _a));
}
function getComponentFormItemProps(renderOpts, params, value, defaultProps) {
  var _a;
  return xeUtils.assign({}, defaultCompProps, defaultProps, renderOpts.props, (_a = {}, _a[componentDefaultModelProp] = value, _a));
}
function isImmediateCell(renderOpts, params) {
  return params.$type === "cell" || getInputImmediateModel(renderOpts);
}
function getCellLabelVNs(renderOpts, params, cellLabel) {
  var placeholder = renderOpts.placeholder;
  return [
    h("span", {
      class: "vxe-cell--label"
    }, placeholder && isEmptyValue(cellLabel) ? [
      h("span", {
        class: "vxe-cell--placeholder"
      }, formatText(getFuncText(placeholder), 1))
    ] : formatText(cellLabel, 1))
  ];
}
function getElementOns(renderOpts, params, modelFunc, changeFunc) {
  var events = renderOpts.events;
  var modelEvent = getModelEvent(renderOpts);
  var changeEvent = getChangeEvent(renderOpts);
  var isSameEvent = changeEvent === modelEvent;
  var ons = {};
  if (events) {
    xeUtils.objectEach(events, function(func, key) {
      ons[getOnName(key)] = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        func.apply(void 0, __spreadArray$4([params], args));
      };
    });
  }
  if (modelFunc) {
    ons[getOnName(modelEvent)] = function(targetEvnt) {
      modelFunc(targetEvnt);
      if (isSameEvent && changeFunc) {
        changeFunc(targetEvnt);
      }
      if (events && events[modelEvent]) {
        events[modelEvent](params, targetEvnt);
      }
    };
  }
  if (!isSameEvent && changeFunc) {
    ons[getOnName(changeEvent)] = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      changeFunc.apply(void 0, args);
      if (events && events[changeEvent]) {
        events[changeEvent].apply(events, __spreadArray$4([params], args));
      }
    };
  }
  return ons;
}
function getComponentOns(renderOpts, params, modelFunc, changeFunc) {
  var events = renderOpts.events;
  var modelEvent = getModelEvent(renderOpts);
  var changeEvent = getChangeEvent(renderOpts);
  var ons = {};
  xeUtils.objectEach(events, function(func, key) {
    ons[getOnName(key)] = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      func.apply(void 0, __spreadArray$4([params], args));
    };
  });
  if (modelFunc) {
    ons[getOnName(modelEvent)] = function(targetEvnt) {
      modelFunc(targetEvnt);
      if (events && events[modelEvent]) {
        events[modelEvent](params, targetEvnt);
      }
    };
  }
  if (changeFunc) {
    ons[getOnName(changeEvent)] = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      changeFunc.apply(void 0, args);
      if (events && events[changeEvent]) {
        events[changeEvent].apply(events, __spreadArray$4([params], args));
      }
    };
  }
  return ons;
}
function getEditOns(renderOpts, params) {
  var $table = params.$table, row = params.row, column = params.column;
  var name = renderOpts.name;
  var model = column.model;
  var isImmediate = isImmediateCell(renderOpts, params);
  return getComponentOns(renderOpts, params, function(cellValue) {
    if (isImmediate) {
      setCellValue(row, column, cellValue);
    } else {
      model.update = true;
      model.value = cellValue;
    }
  }, function(eventParams) {
    if (!isImmediate && (name === "$input" || name === "$textarea")) {
      var cellValue = eventParams.value;
      model.update = true;
      model.value = cellValue;
      $table.updateStatus(params, cellValue);
    } else {
      $table.updateStatus(params);
    }
  });
}
function getFilterOns(renderOpts, params, option) {
  return getComponentOns(renderOpts, params, function(value) {
    option.data = value;
  }, function() {
    handleConfirmFilter(params, !xeUtils.eqNull(option.data), option);
  });
}
function getItemOns(renderOpts, params) {
  var $form = params.$form, data = params.data, property = params.property;
  return getComponentOns(renderOpts, params, function(value) {
    xeUtils.set(data, property, value);
  }, function() {
    $form.updateStatus(params);
  });
}
function getNativeEditOns(renderOpts, params) {
  var $table = params.$table, row = params.row, column = params.column;
  var model = column.model;
  return getElementOns(renderOpts, params, function(evnt) {
    var cellValue = evnt.target.value;
    if (isImmediateCell(renderOpts, params)) {
      setCellValue(row, column, cellValue);
    } else {
      model.update = true;
      model.value = cellValue;
    }
  }, function(evnt) {
    var cellValue = evnt.target.value;
    $table.updateStatus(params, cellValue);
  });
}
function getNativeFilterOns(renderOpts, params, option) {
  return getElementOns(renderOpts, params, function(evnt) {
    option.data = evnt.target.value;
  }, function() {
    handleConfirmFilter(params, !xeUtils.eqNull(option.data), option);
  });
}
function getNativeItemOns(renderOpts, params) {
  var $form = params.$form, data = params.data, property = params.property;
  return getElementOns(renderOpts, params, function(evnt) {
    var itemValue = evnt.target.value;
    xeUtils.set(data, property, itemValue);
  }, function() {
    $form.updateStatus(params);
  });
}
function nativeEditRender(renderOpts, params) {
  var row = params.row, column = params.column;
  var name = renderOpts.name;
  var cellValue = isImmediateCell(renderOpts, params) ? getCellValue(row, column) : column.model.value;
  return [
    h(name, __assign$h(__assign$h(__assign$h({ class: "vxe-default-" + name }, getNativeAttrs(renderOpts)), { value: cellValue }), getNativeEditOns(renderOpts, params)))
  ];
}
function defaultEditRender(renderOpts, params) {
  var row = params.row, column = params.column;
  var cellValue = getCellValue(row, column);
  return [
    h(getDefaultComponent(renderOpts), __assign$h(__assign$h({}, getCellEditProps(renderOpts, params, cellValue)), getEditOns(renderOpts, params)))
  ];
}
function defaultButtonEditRender(renderOpts, params) {
  return [
    h(resolveComponent("vxe-button"), __assign$h(__assign$h({}, getCellEditProps(renderOpts, params, null)), getComponentOns(renderOpts, params)))
  ];
}
function defaultButtonsEditRender(renderOpts, params) {
  return renderOpts.children.map(function(childRenderOpts) {
    return defaultButtonEditRender(childRenderOpts, params)[0];
  });
}
function renderNativeOptgroups(renderOpts, params, renderOptionsMethods) {
  var optionGroups = renderOpts.optionGroups, _a = renderOpts.optionGroupProps, optionGroupProps = _a === void 0 ? {} : _a;
  var groupOptions = optionGroupProps.options || "options";
  var groupLabel = optionGroupProps.label || "label";
  return optionGroups.map(function(group, gIndex) {
    return h("optgroup", {
      key: gIndex,
      label: group[groupLabel]
    }, renderOptionsMethods(group[groupOptions], renderOpts, params));
  });
}
function renderNativeOptions(options, renderOpts, params) {
  var _a = renderOpts.optionProps, optionProps = _a === void 0 ? {} : _a;
  var row = params.row, column = params.column;
  var labelProp = optionProps.label || "label";
  var valueProp = optionProps.value || "value";
  var disabledProp = optionProps.disabled || "disabled";
  var cellValue = isImmediateCell(renderOpts, params) ? getCellValue(row, column) : column.model.value;
  return options.map(function(option, oIndex) {
    return h("option", {
      key: oIndex,
      value: option[valueProp],
      disabled: option[disabledProp],
      selected: option[valueProp] == cellValue
    }, option[labelProp]);
  });
}
function nativeFilterRender(renderOpts, params) {
  var column = params.column;
  var name = renderOpts.name;
  var attrs = getNativeAttrs(renderOpts);
  return column.filters.map(function(option, oIndex) {
    return h(name, __assign$h(__assign$h(__assign$h({ key: oIndex, class: "vxe-default-" + name }, attrs), { value: option.data }), getNativeFilterOns(renderOpts, params, option)));
  });
}
function defaultFilterRender(renderOpts, params) {
  var column = params.column;
  return column.filters.map(function(option, oIndex) {
    var optionValue = option.data;
    return h(getDefaultComponent(renderOpts), __assign$h(__assign$h({ key: oIndex }, getCellEditFilterProps(renderOpts, renderOpts, optionValue)), getFilterOns(renderOpts, params, option)));
  });
}
function handleFilterMethod(_a) {
  var option = _a.option, row = _a.row, column = _a.column;
  var data = option.data;
  var cellValue = xeUtils.get(row, column.property);
  return cellValue == data;
}
function nativeSelectEditRender(renderOpts, params) {
  return [
    h("select", __assign$h(__assign$h({ class: "vxe-default-select" }, getNativeAttrs(renderOpts)), getNativeEditOns(renderOpts, params)), renderOpts.optionGroups ? renderNativeOptgroups(renderOpts, params, renderNativeOptions) : renderNativeOptions(renderOpts.options, renderOpts, params))
  ];
}
function defaultSelectEditRender(renderOpts, params) {
  var row = params.row, column = params.column;
  var options = renderOpts.options, optionProps = renderOpts.optionProps, optionGroups = renderOpts.optionGroups, optionGroupProps = renderOpts.optionGroupProps;
  var cellValue = getCellValue(row, column);
  return [
    h(getDefaultComponent(renderOpts), __assign$h(__assign$h({}, getCellEditProps(renderOpts, params, cellValue, { options, optionProps, optionGroups, optionGroupProps })), getEditOns(renderOpts, params)))
  ];
}
function getSelectCellValue(renderOpts, _a) {
  var row = _a.row, column = _a.column;
  var _b = renderOpts.props, props = _b === void 0 ? {} : _b, options = renderOpts.options, optionGroups = renderOpts.optionGroups, _c = renderOpts.optionProps, optionProps = _c === void 0 ? {} : _c, _d = renderOpts.optionGroupProps, optionGroupProps = _d === void 0 ? {} : _d;
  var cellValue = xeUtils.get(row, column.property);
  var selectItem;
  var labelProp = optionProps.label || "label";
  var valueProp = optionProps.value || "value";
  if (!isEmptyValue(cellValue)) {
    return xeUtils.map(props.multiple ? cellValue : [cellValue], optionGroups ? function(value) {
      var groupOptions = optionGroupProps.options || "options";
      for (var index = 0; index < optionGroups.length; index++) {
        selectItem = xeUtils.find(optionGroups[index][groupOptions], function(item) {
          return item[valueProp] == value;
        });
        if (selectItem) {
          break;
        }
      }
      return selectItem ? selectItem[labelProp] : value;
    } : function(value) {
      selectItem = xeUtils.find(options, function(item) {
        return item[valueProp] == value;
      });
      return selectItem ? selectItem[labelProp] : value;
    }).join(", ");
  }
  return "";
}
function nativeItemRender(renderOpts, params) {
  var data = params.data, property = params.property;
  var name = renderOpts.name;
  var attrs = getNativeAttrs(renderOpts);
  var itemValue = xeUtils.get(data, property);
  return [
    h(name, __assign$h(__assign$h(__assign$h({ class: "vxe-default-" + name }, attrs), { value: attrs && name === "input" && (attrs.type === "submit" || attrs.type === "reset") ? null : itemValue }), getNativeItemOns(renderOpts, params)))
  ];
}
function defaultItemRender(renderOpts, params) {
  var data = params.data, property = params.property;
  var itemValue = xeUtils.get(data, property);
  return [
    h(getDefaultComponent(renderOpts), __assign$h(__assign$h({}, getComponentFormItemProps(renderOpts, params, itemValue)), getItemOns(renderOpts, params)))
  ];
}
function defaultButtonItemRender(renderOpts, params) {
  return [
    h(resolveComponent("vxe-button"), __assign$h(__assign$h({}, getComponentFormItemProps(renderOpts, params, null)), getComponentOns(renderOpts, params)))
  ];
}
function defaultButtonsItemRender(renderOpts, params) {
  return renderOpts.children.map(function(childRenderOpts) {
    return defaultButtonItemRender(childRenderOpts, params)[0];
  });
}
function renderNativeFormOptions(options, renderOpts, params) {
  var data = params.data, property = params.property;
  var _a = renderOpts.optionProps, optionProps = _a === void 0 ? {} : _a;
  var labelProp = optionProps.label || "label";
  var valueProp = optionProps.value || "value";
  var disabledProp = optionProps.disabled || "disabled";
  var cellValue = xeUtils.get(data, property);
  return options.map(function(item, oIndex) {
    return h("option", {
      key: oIndex,
      value: item[valueProp],
      disabled: item[disabledProp],
      selected: item[valueProp] == cellValue
    }, item[labelProp]);
  });
}
function handleExportSelectMethod(params) {
  var row = params.row, column = params.column, options = params.options;
  return options.original ? getCellValue(row, column) : getSelectCellValue(column.editRender || column.cellRender, params);
}
function defaultFormItemRadioAndCheckboxRender(renderOpts, params) {
  var name = renderOpts.name, options = renderOpts.options, _a = renderOpts.optionProps, optionProps = _a === void 0 ? {} : _a;
  var data = params.data, property = params.property;
  var labelProp = optionProps.label || "label";
  var valueProp = optionProps.value || "value";
  var disabledProp = optionProps.disabled || "disabled";
  var itemValue = xeUtils.get(data, property);
  var compName = getComponentName(name);
  if (options) {
    return [
      h(resolveComponent(compName + "-group"), __assign$h(__assign$h({}, getComponentFormItemProps(renderOpts, params, itemValue)), getItemOns(renderOpts, params)), {
        default: function() {
          return options.map(function(item, index) {
            return h(resolveComponent(compName), {
              key: index,
              label: item[valueProp],
              content: item[labelProp],
              disabled: item[disabledProp]
            });
          });
        }
      })
    ];
  }
  return [
    h(resolveComponent(compName), __assign$h(__assign$h({}, getComponentFormItemProps(renderOpts, params, itemValue)), getItemOns(renderOpts, params)))
  ];
}
var renderMap = {
  input: {
    autofocus: "input",
    renderEdit: nativeEditRender,
    renderDefault: nativeEditRender,
    renderFilter: nativeFilterRender,
    defaultFilterMethod: handleFilterMethod,
    renderItemContent: nativeItemRender
  },
  textarea: {
    autofocus: "textarea",
    renderEdit: nativeEditRender,
    renderItemContent: nativeItemRender
  },
  select: {
    renderEdit: nativeSelectEditRender,
    renderDefault: nativeSelectEditRender,
    renderCell: function(renderOpts, params) {
      return getCellLabelVNs(renderOpts, params, getSelectCellValue(renderOpts, params));
    },
    renderFilter: function(renderOpts, params) {
      var column = params.column;
      return column.filters.map(function(option, oIndex) {
        return h("select", __assign$h(__assign$h({ key: oIndex, class: "vxe-default-select" }, getNativeAttrs(renderOpts)), getNativeFilterOns(renderOpts, params, option)), renderOpts.optionGroups ? renderNativeOptgroups(renderOpts, params, renderNativeOptions) : renderNativeOptions(renderOpts.options, renderOpts, params));
      });
    },
    defaultFilterMethod: handleFilterMethod,
    renderItemContent: function(renderOpts, params) {
      return [
        h("select", __assign$h(__assign$h({ class: "vxe-default-select" }, getNativeAttrs(renderOpts)), getNativeItemOns(renderOpts, params)), renderOpts.optionGroups ? renderNativeOptgroups(renderOpts, params, renderNativeFormOptions) : renderNativeFormOptions(renderOpts.options, renderOpts, params))
      ];
    },
    cellExportMethod: handleExportSelectMethod
  },
  $input: {
    autofocus: ".vxe-input--inner",
    renderEdit: defaultEditRender,
    renderCell: function(renderOpts, params) {
      var _a = renderOpts.props, props = _a === void 0 ? {} : _a;
      var row = params.row, column = params.column;
      var digits = props.digits || GlobalConfig.input.digits;
      var cellValue = xeUtils.get(row, column.property);
      if (cellValue) {
        switch (props.type) {
          case "date":
          case "week":
          case "month":
          case "year":
            cellValue = getLabelFormatDate(cellValue, props);
            break;
          case "float":
            cellValue = xeUtils.toFixed(xeUtils.floor(cellValue, digits), digits);
            break;
        }
      }
      return getCellLabelVNs(renderOpts, params, cellValue);
    },
    renderDefault: defaultEditRender,
    renderFilter: defaultFilterRender,
    defaultFilterMethod: handleFilterMethod,
    renderItemContent: defaultItemRender
  },
  $textarea: {
    autofocus: ".vxe-textarea--inner",
    renderItemContent: defaultItemRender
  },
  $button: {
    renderDefault: defaultButtonEditRender,
    renderItemContent: defaultButtonItemRender
  },
  $buttons: {
    renderDefault: defaultButtonsEditRender,
    renderItemContent: defaultButtonsItemRender
  },
  $select: {
    autofocus: ".vxe-input--inner",
    renderEdit: defaultSelectEditRender,
    renderDefault: defaultSelectEditRender,
    renderCell: function(renderOpts, params) {
      return getCellLabelVNs(renderOpts, params, getSelectCellValue(renderOpts, params));
    },
    renderFilter: function(renderOpts, params) {
      var column = params.column;
      var options = renderOpts.options, optionProps = renderOpts.optionProps, optionGroups = renderOpts.optionGroups, optionGroupProps = renderOpts.optionGroupProps;
      return column.filters.map(function(option, oIndex) {
        var optionValue = option.data;
        return h(getDefaultComponent(renderOpts), __assign$h(__assign$h({ key: oIndex }, getCellEditFilterProps(renderOpts, params, optionValue, { options, optionProps, optionGroups, optionGroupProps })), getFilterOns(renderOpts, params, option)));
      });
    },
    defaultFilterMethod: handleFilterMethod,
    renderItemContent: function(renderOpts, params) {
      var data = params.data, property = params.property;
      var options = renderOpts.options, optionProps = renderOpts.optionProps, optionGroups = renderOpts.optionGroups, optionGroupProps = renderOpts.optionGroupProps;
      var itemValue = xeUtils.get(data, property);
      return [
        h(getDefaultComponent(renderOpts), __assign$h(__assign$h({}, getComponentFormItemProps(renderOpts, params, itemValue, { options, optionProps, optionGroups, optionGroupProps })), getItemOns(renderOpts, params)))
      ];
    },
    cellExportMethod: handleExportSelectMethod
  },
  $radio: {
    autofocus: ".vxe-radio--input",
    renderItemContent: defaultFormItemRadioAndCheckboxRender
  },
  $checkbox: {
    autofocus: ".vxe-checkbox--input",
    renderItemContent: defaultFormItemRadioAndCheckboxRender
  },
  $switch: {
    autofocus: ".vxe-switch--button",
    renderEdit: defaultEditRender,
    renderDefault: defaultEditRender,
    renderItemContent: defaultItemRender
  }
};
var renderer = {
  mixin: function(opts) {
    xeUtils.each(opts, function(options, name) {
      return renderer.add(name, options);
    });
    return renderer;
  },
  get: function(name) {
    return renderMap[name] || null;
  },
  add: function(name, options) {
    if (name && options) {
      var renders_1 = renderMap[name];
      if (renders_1) {
        Object.assign(renders_1, options);
      } else {
        renderMap[name] = options;
      }
    }
    return renderer;
  },
  delete: function(name) {
    delete renderMap[name];
    return renderer;
  }
};
var Store = function() {
  function Store2() {
    this.store = {};
  }
  Store2.prototype.mixin = function(options) {
    Object.assign(this.store, options);
    return this;
  };
  Store2.prototype.has = function(name) {
    return !!this.get(name);
  };
  Store2.prototype.get = function(name) {
    return this.store[name];
  };
  Store2.prototype.add = function(name, render) {
    this.store[name] = render;
    return this;
  };
  Store2.prototype.delete = function(name) {
    delete this.store[name];
  };
  Store2.prototype.forEach = function(callback) {
    xeUtils.objectEach(this.store, callback);
  };
  return Store2;
}();
var commands = new Store();
var menus = new Store();
var formats = new Store();
var hooks = new Store();
var setup = function(options) {
  return xeUtils.merge(GlobalConfig, options);
};
function getExportOrImpotType(types, flag) {
  var rest = [];
  xeUtils.objectEach(types, function(val, type) {
    if (val === 0 || val === flag) {
      rest.push(type);
    }
  });
  return rest;
}
var installedPlugins = [];
function use(Plugin, options) {
  if (Plugin && Plugin.install) {
    if (installedPlugins.indexOf(Plugin) === -1) {
      Plugin.install(VXETable, options);
      installedPlugins.push(Plugin);
    }
  }
  return VXETable;
}
function t(key, args) {
  return GlobalConfig.i18n(key, args);
}
function _t(key, args) {
  return key ? xeUtils.toValueString(GlobalConfig.translate ? GlobalConfig.translate(key, args) : key) : "";
}
var VXETableConfig = function() {
  function VXETableConfig2() {
  }
  Object.defineProperty(VXETableConfig2.prototype, "zIndex", {
    get: function() {
      return getLastZIndex();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(VXETableConfig2.prototype, "nextZIndex", {
    get: function() {
      return nextZIndex();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(VXETableConfig2.prototype, "exportTypes", {
    get: function() {
      return getExportOrImpotType(GlobalConfig.export.types, 1);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(VXETableConfig2.prototype, "importTypes", {
    get: function() {
      return getExportOrImpotType(GlobalConfig.export.types, 2);
    },
    enumerable: false,
    configurable: true
  });
  return VXETableConfig2;
}();
var config = new VXETableConfig();
var v = "v4";
var VXETable = {
  v,
  setup,
  interceptor,
  renderer,
  commands,
  formats,
  menus,
  hooks,
  config,
  use,
  t,
  _t
};
var style$y = "";
var getAllColumns = function(columns, parentColumn) {
  var result = [];
  columns.forEach(function(column) {
    column.parentId = parentColumn ? parentColumn.id : null;
    if (column.visible) {
      if (column.children && column.children.length && column.children.some(function(column2) {
        return column2.visible;
      })) {
        result.push(column);
        result.push.apply(result, getAllColumns(column.children, column));
      } else {
        result.push(column);
      }
    }
  });
  return result;
};
var convertToRows$1 = function(originColumns) {
  var maxLevel = 1;
  var traverse = function(column, parent) {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children && column.children.length && column.children.some(function(column2) {
      return column2.visible;
    })) {
      var colSpan_1 = 0;
      column.children.forEach(function(subColumn) {
        if (subColumn.visible) {
          traverse(subColumn, column);
          colSpan_1 += subColumn.colSpan;
        }
      });
      column.colSpan = colSpan_1;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach(function(column) {
    column.level = 1;
    traverse(column);
  });
  var rows = [];
  for (var i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  var allColumns = getAllColumns(originColumns);
  allColumns.forEach(function(column) {
    if (column.children && column.children.length && column.children.some(function(column2) {
      return column2.visible;
    })) {
      column.rowSpan = 1;
    } else {
      column.rowSpan = maxLevel - column.level + 1;
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
var __assign$g = function() {
  __assign$g = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$g.apply(this, arguments);
};
var renderType$2 = "header";
var VxeTableHeader = defineComponent({
  name: "VxeTableHeader",
  props: {
    tableData: Array,
    tableColumn: Array,
    tableGroupColumn: Array,
    fixedColumn: Array,
    fixedType: { type: String, default: null }
  },
  setup: function(props) {
    var $xetable = inject("$xetable", {});
    var xID = $xetable.xID, tableProps2 = $xetable.props, tableReactData = $xetable.reactData, tableInternalData = $xetable.internalData;
    var _a = $xetable.getRefMaps(), tableRefElem = _a.refElem, refTableBody = _a.refTableBody, refLeftContainer = _a.refLeftContainer, refRightContainer = _a.refRightContainer, refCellResizeBar = _a.refCellResizeBar;
    var headerColumn = ref([]);
    var refElem = ref();
    var refHeaderTable = ref();
    var refHeaderColgroup = ref();
    var refHeaderTHead = ref();
    var refHeaderXSpace = ref();
    var refHeaderBorderRepair = ref();
    var uploadColumn = function() {
      var isGroup = tableReactData.isGroup;
      headerColumn.value = isGroup ? convertToRows$1(props.tableGroupColumn) : [];
    };
    var resizeMousedown = function(evnt, params) {
      var column = params.column;
      var fixedType = props.fixedType;
      var tableBody = refTableBody.value;
      var leftContainerElem = refLeftContainer.value;
      var rightContainerElem = refRightContainer.value;
      var resizeBarElem = refCellResizeBar.value;
      var dragClientX = evnt.clientX;
      var wrapperElem = refElem.value;
      var dragBtnElem = evnt.target;
      var cell = params.cell = dragBtnElem.parentNode;
      var dragLeft = 0;
      var tableBodyElem = tableBody.$el;
      var pos = getOffsetPos(dragBtnElem, wrapperElem);
      var dragBtnWidth = dragBtnElem.clientWidth;
      var dragBtnOffsetWidth = Math.floor(dragBtnWidth / 2);
      var minInterval = getColMinWidth(params) - dragBtnOffsetWidth;
      var dragMinLeft = pos.left - cell.clientWidth + dragBtnWidth + minInterval;
      var dragPosLeft = pos.left + dragBtnOffsetWidth;
      var domMousemove = document.onmousemove;
      var domMouseup = document.onmouseup;
      var isLeftFixed = fixedType === "left";
      var isRightFixed = fixedType === "right";
      var tableEl = tableRefElem.value;
      var fixedOffsetWidth = 0;
      if (isLeftFixed || isRightFixed) {
        var siblingProp = isLeftFixed ? "nextElementSibling" : "previousElementSibling";
        var tempCellElem = cell[siblingProp];
        while (tempCellElem) {
          if (hasClass(tempCellElem, "fixed--hidden")) {
            break;
          } else if (!hasClass(tempCellElem, "col--group")) {
            fixedOffsetWidth += tempCellElem.offsetWidth;
          }
          tempCellElem = tempCellElem[siblingProp];
        }
        if (isRightFixed && rightContainerElem) {
          dragPosLeft = rightContainerElem.offsetLeft + fixedOffsetWidth;
        }
      }
      var updateEvent = function(evnt2) {
        evnt2.stopPropagation();
        evnt2.preventDefault();
        var offsetX = evnt2.clientX - dragClientX;
        var left = dragPosLeft + offsetX;
        var scrollLeft = fixedType ? 0 : tableBodyElem.scrollLeft;
        if (isLeftFixed) {
          left = Math.min(left, (rightContainerElem ? rightContainerElem.offsetLeft : tableBodyElem.clientWidth) - fixedOffsetWidth - minInterval);
        } else if (isRightFixed) {
          dragMinLeft = (leftContainerElem ? leftContainerElem.clientWidth : 0) + fixedOffsetWidth + minInterval;
          left = Math.min(left, dragPosLeft + cell.clientWidth - minInterval);
        } else {
          dragMinLeft = Math.max(tableBodyElem.scrollLeft, dragMinLeft);
        }
        dragLeft = Math.max(left, dragMinLeft);
        resizeBarElem.style.left = dragLeft - scrollLeft + "px";
      };
      tableInternalData._isResize = true;
      addClass(tableEl, "drag--resize");
      resizeBarElem.style.display = "block";
      document.onmousemove = updateEvent;
      document.onmouseup = function(evnt2) {
        document.onmousemove = domMousemove;
        document.onmouseup = domMouseup;
        column.resizeWidth = column.renderWidth + (isRightFixed ? dragPosLeft - dragLeft : dragLeft - dragPosLeft);
        resizeBarElem.style.display = "none";
        tableInternalData._isResize = false;
        tableInternalData._lastResizeTime = Date.now();
        $xetable.analyColumnWidth();
        $xetable.recalculate(true).then(function() {
          $xetable.saveCustomResizable();
          $xetable.updateCellAreas();
          $xetable.dispatchEvent("resizable-change", params, evnt2);
        });
        removeClass(tableEl, "drag--resize");
      };
      updateEvent(evnt);
      if ($xetable.closeMenu) {
        $xetable.closeMenu();
      }
    };
    watch(function() {
      return props.tableColumn;
    }, uploadColumn);
    nextTick(function() {
      var fixedType = props.fixedType;
      var internalData = $xetable.internalData;
      var elemStore = internalData.elemStore;
      var prefix = (fixedType || "main") + "-header-";
      elemStore[prefix + "wrapper"] = refElem.value;
      elemStore[prefix + "table"] = refHeaderTable.value;
      elemStore[prefix + "colgroup"] = refHeaderColgroup.value;
      elemStore[prefix + "list"] = refHeaderTHead.value;
      elemStore[prefix + "xSpace"] = refHeaderXSpace.value;
      elemStore[prefix + "repair"] = refHeaderBorderRepair.value;
      uploadColumn();
    });
    var renderVN = function() {
      var fixedType = props.fixedType, fixedColumn = props.fixedColumn, tableColumn = props.tableColumn;
      var resizable = tableProps2.resizable, border = tableProps2.border, columnKey = tableProps2.columnKey, headerRowClassName = tableProps2.headerRowClassName, headerCellClassName = tableProps2.headerCellClassName, headerRowStyle = tableProps2.headerRowStyle, headerCellStyle = tableProps2.headerCellStyle, allColumnHeaderOverflow = tableProps2.showHeaderOverflow, allHeaderAlign = tableProps2.headerAlign, allAlign = tableProps2.align, mouseConfig = tableProps2.mouseConfig;
      var isGroup = tableReactData.isGroup, currentColumn = tableReactData.currentColumn, scrollXLoad = tableReactData.scrollXLoad, overflowX = tableReactData.overflowX, scrollbarWidth = tableReactData.scrollbarWidth;
      var headerGroups = headerColumn.value;
      if (!isGroup) {
        if (fixedType) {
          if (scrollXLoad || allColumnHeaderOverflow) {
            tableColumn = fixedColumn;
          }
        }
        headerGroups = [tableColumn];
      }
      return h("div", {
        ref: refElem,
        class: ["vxe-table--header-wrapper", fixedType ? "fixed-" + fixedType + "--wrapper" : "body--wrapper"],
        xid: xID
      }, [
        fixedType ? createCommentVNode() : h("div", {
          ref: refHeaderXSpace,
          class: "vxe-body--x-space"
        }),
        h("table", {
          ref: refHeaderTable,
          class: "vxe-table--header",
          xid: xID,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          h("colgroup", {
            ref: refHeaderColgroup
          }, tableColumn.map(function(column, $columnIndex) {
            return h("col", {
              name: column.id,
              key: $columnIndex
            });
          }).concat(scrollbarWidth ? [
            h("col", {
              name: "col_gutter"
            })
          ] : [])),
          h("thead", {
            ref: refHeaderTHead
          }, headerGroups.map(function(cols, $rowIndex) {
            return h("tr", {
              class: ["vxe-header--row", headerRowClassName ? xeUtils.isFunction(headerRowClassName) ? headerRowClassName({ $table: $xetable, $rowIndex, fixed: fixedType, type: renderType$2 }) : headerRowClassName : ""],
              style: headerRowStyle ? xeUtils.isFunction(headerRowStyle) ? headerRowStyle({ $table: $xetable, $rowIndex, fixed: fixedType, type: renderType$2 }) : headerRowStyle : null
            }, cols.map(function(column, $columnIndex) {
              var _a2;
              var type = column.type, showHeaderOverflow = column.showHeaderOverflow, headerAlign = column.headerAlign, align = column.align, headerClassName = column.headerClassName;
              var isColGroup = column.children && column.children.length;
              var fixedHiddenColumn = fixedType ? column.fixed !== fixedType && !isColGroup : !!column.fixed && overflowX;
              var headOverflow = xeUtils.isUndefined(showHeaderOverflow) || xeUtils.isNull(showHeaderOverflow) ? allColumnHeaderOverflow : showHeaderOverflow;
              var headAlign = headerAlign || align || allHeaderAlign || allAlign;
              var showEllipsis = headOverflow === "ellipsis";
              var showTitle = headOverflow === "title";
              var showTooltip = headOverflow === true || headOverflow === "tooltip";
              var hasEllipsis = showTitle || showTooltip || showEllipsis;
              var hasFilter = column.filters && column.filters.some(function(item) {
                return item.checked;
              });
              var columnIndex = $xetable.getColumnIndex(column);
              var _columnIndex = $xetable.getVTColumnIndex(column);
              var params = { $table: $xetable, $rowIndex, column, columnIndex, $columnIndex, _columnIndex, fixed: fixedType, type: renderType$2, isHidden: fixedHiddenColumn, hasFilter };
              var thOns = {
                onClick: function(evnt) {
                  return $xetable.triggerHeaderCellClickEvent(evnt, params);
                },
                onDblclick: function(evnt) {
                  return $xetable.triggerHeaderCellDblclickEvent(evnt, params);
                }
              };
              if (scrollXLoad && !hasEllipsis) {
                showEllipsis = hasEllipsis = true;
              }
              if (mouseConfig) {
                thOns.onMousedown = function(evnt) {
                  return $xetable.triggerHeaderCellMousedownEvent(evnt, params);
                };
              }
              return h("th", __assign$g(__assign$g({ class: [
                "vxe-header--column",
                column.id,
                (_a2 = {}, _a2["col--" + headAlign] = headAlign, _a2["col--" + type] = type, _a2["col--last"] = $columnIndex === cols.length - 1, _a2["col--fixed"] = column.fixed, _a2["col--group"] = isColGroup, _a2["col--ellipsis"] = hasEllipsis, _a2["fixed--hidden"] = fixedHiddenColumn, _a2["is--sortable"] = column.sortable, _a2["col--filter"] = !!column.filters, _a2["is--filter-active"] = hasFilter, _a2["col--current"] = currentColumn === column, _a2),
                headerClassName ? xeUtils.isFunction(headerClassName) ? headerClassName(params) : headerClassName : "",
                headerCellClassName ? xeUtils.isFunction(headerCellClassName) ? headerCellClassName(params) : headerCellClassName : ""
              ], colid: column.id, colspan: column.colSpan > 1 ? column.colSpan : null, rowspan: column.rowSpan > 1 ? column.rowSpan : null, style: headerCellStyle ? xeUtils.isFunction(headerCellStyle) ? headerCellStyle(params) : headerCellStyle : null }, thOns), { key: columnKey || isColGroup ? column.id : $columnIndex }), [
                h("div", {
                  class: ["vxe-cell", {
                    "c--title": showTitle,
                    "c--tooltip": showTooltip,
                    "c--ellipsis": showEllipsis
                  }]
                }, column.renderHeader(params)),
                !fixedHiddenColumn && !isColGroup && (xeUtils.isBoolean(column.resizable) ? column.resizable : resizable) ? h("div", {
                  class: ["vxe-resizable", {
                    "is--line": !border || border === "none"
                  }],
                  onMousedown: function(evnt) {
                    return resizeMousedown(evnt, params);
                  }
                }) : null
              ]);
            }).concat(scrollbarWidth ? [
              h("th", {
                class: "vxe-header--gutter col--gutter"
              })
            ] : []));
          }))
        ]),
        h("div", {
          ref: refHeaderBorderRepair,
          class: "vxe-table--header-border-line"
        })
      ]);
    };
    return renderVN;
  }
});
var dynamicContainerElem;
var dynamicStore = reactive({
  modals: []
});
var VxeDynamics = defineComponent({
  setup: function() {
    return function() {
      var modals = dynamicStore.modals;
      return h("div", {
        class: "vxe-dynamics--modal"
      }, modals.map(function(item) {
        return h(resolveComponent("vxe-modal"), item);
      }));
    };
  }
});
var dynamicApp = createApp(VxeDynamics);
function checkDynamic() {
  if (!dynamicContainerElem) {
    dynamicContainerElem = document.createElement("div");
    dynamicContainerElem.className = "vxe-dynamics";
    document.body.appendChild(dynamicContainerElem);
    dynamicApp.mount(dynamicContainerElem);
  }
}
var Header = Object.assign(VxeTableHeader, {
  install: function(app) {
    dynamicApp.component(VxeTableHeader.name, VxeTableHeader);
    app.component(VxeTableHeader.name, VxeTableHeader);
  }
});
var __assign$f = function() {
  __assign$f = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$f.apply(this, arguments);
};
var renderType$1 = "footer";
function mergeFooterMethod(mergeFooterList, _rowIndex, _columnIndex) {
  for (var mIndex = 0; mIndex < mergeFooterList.length; mIndex++) {
    var _a = mergeFooterList[mIndex], mergeRowIndex = _a.row, mergeColIndex = _a.col, mergeRowspan = _a.rowspan, mergeColspan = _a.colspan;
    if (mergeColIndex > -1 && mergeRowIndex > -1 && mergeRowspan && mergeColspan) {
      if (mergeRowIndex === _rowIndex && mergeColIndex === _columnIndex) {
        return { rowspan: mergeRowspan, colspan: mergeColspan };
      }
      if (_rowIndex >= mergeRowIndex && _rowIndex < mergeRowIndex + mergeRowspan && _columnIndex >= mergeColIndex && _columnIndex < mergeColIndex + mergeColspan) {
        return { rowspan: 0, colspan: 0 };
      }
    }
  }
}
var VxeTableFooterComponent = defineComponent({
  name: "VxeTableFooter",
  props: {
    footerTableData: { type: Array, default: function() {
      return [];
    } },
    tableColumn: { type: Array, default: function() {
      return [];
    } },
    fixedColumn: { type: Array, default: function() {
      return [];
    } },
    fixedType: { type: String, default: null }
  },
  setup: function(props) {
    var $xetable = inject("$xetable", {});
    var xID = $xetable.xID, tableProps2 = $xetable.props, tableReactData = $xetable.reactData, tableInternalData = $xetable.internalData;
    var _a = $xetable.getRefMaps(), refTableHeader = _a.refTableHeader, refTableBody = _a.refTableBody, refValidTooltip = _a.refValidTooltip;
    var computeTooltipOpts = $xetable.getComputeMaps().computeTooltipOpts;
    var refElem = ref();
    var refFooterTable = ref();
    var refFooterColgroup = ref();
    var refFooterTFoot = ref();
    var refFooterXSpace = ref();
    var scrollEvent = function(evnt) {
      var fixedType = props.fixedType;
      var scrollXLoad = tableReactData.scrollXLoad;
      var lastScrollLeft = tableInternalData.lastScrollLeft;
      var validTip = refValidTooltip.value;
      var tableHeader = refTableHeader.value;
      var tableBody = refTableBody.value;
      var headerElem = tableHeader ? tableHeader.$el : null;
      var footerElem = refElem.value;
      var bodyElem = tableBody.$el;
      var scrollLeft = footerElem.scrollLeft;
      var isX = scrollLeft !== lastScrollLeft;
      tableInternalData.lastScrollLeft = scrollLeft;
      tableInternalData.lastScrollTime = Date.now();
      if (headerElem) {
        headerElem.scrollLeft = scrollLeft;
      }
      if (bodyElem) {
        bodyElem.scrollLeft = scrollLeft;
      }
      if (scrollXLoad && isX) {
        $xetable.triggerScrollXEvent(evnt);
      }
      if (isX && validTip && validTip.reactData.visible) {
        validTip.updatePlacement();
      }
      $xetable.dispatchEvent("scroll", { type: renderType$1, fixed: fixedType, scrollTop: bodyElem.scrollTop, scrollLeft, isX, isY: false }, evnt);
    };
    nextTick(function() {
      var fixedType = props.fixedType;
      var elemStore = tableInternalData.elemStore;
      var prefix = (fixedType || "main") + "-footer-";
      elemStore[prefix + "wrapper"] = refElem.value;
      elemStore[prefix + "table"] = refFooterTable.value;
      elemStore[prefix + "colgroup"] = refFooterColgroup.value;
      elemStore[prefix + "list"] = refFooterTFoot.value;
      elemStore[prefix + "xSpace"] = refFooterXSpace.value;
    });
    var renderVN = function() {
      var fixedType = props.fixedType, fixedColumn = props.fixedColumn, tableColumn = props.tableColumn, footerTableData = props.footerTableData;
      var footerRowClassName = tableProps2.footerRowClassName, footerCellClassName = tableProps2.footerCellClassName, footerRowStyle = tableProps2.footerRowStyle, footerCellStyle = tableProps2.footerCellStyle, allFooterAlign = tableProps2.footerAlign, footerSpanMethod = tableProps2.footerSpanMethod, allAlign = tableProps2.align, columnKey = tableProps2.columnKey, allColumnFooterOverflow = tableProps2.showFooterOverflow;
      var visibleColumn = tableInternalData.visibleColumn;
      var scrollXLoad = tableReactData.scrollXLoad, overflowX = tableReactData.overflowX, scrollbarWidth = tableReactData.scrollbarWidth, currentColumn = tableReactData.currentColumn, mergeFooterList = tableReactData.mergeFooterList;
      var tooltipOpts = computeTooltipOpts.value;
      if (fixedType) {
        if (scrollXLoad || allColumnFooterOverflow) {
          if (!mergeFooterList.length || !footerSpanMethod) {
            tableColumn = fixedColumn;
          } else {
            tableColumn = visibleColumn;
          }
        } else {
          tableColumn = visibleColumn;
        }
      }
      return h("div", {
        ref: refElem,
        class: ["vxe-table--footer-wrapper", fixedType ? "fixed-" + fixedType + "--wrapper" : "body--wrapper"],
        xid: xID,
        onScroll: scrollEvent
      }, [
        fixedType ? createCommentVNode() : h("div", {
          ref: refFooterXSpace,
          class: "vxe-body--x-space"
        }),
        h("table", {
          ref: refFooterTable,
          class: "vxe-table--footer",
          xid: xID,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          h("colgroup", {
            ref: refFooterColgroup
          }, tableColumn.map(function(column, $columnIndex) {
            return h("col", {
              name: column.id,
              key: $columnIndex
            });
          }).concat(scrollbarWidth ? [
            h("col", {
              name: "col_gutter"
            })
          ] : [])),
          h("tfoot", {
            ref: refFooterTFoot
          }, footerTableData.map(function(list, _rowIndex) {
            var $rowIndex = _rowIndex;
            return h("tr", {
              class: ["vxe-footer--row", footerRowClassName ? xeUtils.isFunction(footerRowClassName) ? footerRowClassName({ $table: $xetable, _rowIndex, $rowIndex, fixed: fixedType, type: renderType$1 }) : footerRowClassName : ""],
              style: footerRowStyle ? xeUtils.isFunction(footerRowStyle) ? footerRowStyle({ $table: $xetable, _rowIndex, $rowIndex, fixed: fixedType, type: renderType$1 }) : footerRowStyle : null
            }, tableColumn.map(function(column, $columnIndex) {
              var _a2;
              var type = column.type, showFooterOverflow = column.showFooterOverflow, footerAlign = column.footerAlign, align = column.align, footerClassName = column.footerClassName;
              var showAllTip = tooltipOpts.showAll;
              var isColGroup = column.children && column.children.length;
              var fixedHiddenColumn = fixedType ? column.fixed !== fixedType && !isColGroup : column.fixed && overflowX;
              var footOverflow = xeUtils.isUndefined(showFooterOverflow) || xeUtils.isNull(showFooterOverflow) ? allColumnFooterOverflow : showFooterOverflow;
              var footAlign = footerAlign || align || allFooterAlign || allAlign;
              var showEllipsis = footOverflow === "ellipsis";
              var showTitle = footOverflow === "title";
              var showTooltip = footOverflow === true || footOverflow === "tooltip";
              var hasEllipsis = showTitle || showTooltip || showEllipsis;
              var attrs = { colid: column.id };
              var tfOns = {};
              var columnIndex = $xetable.getColumnIndex(column);
              var _columnIndex = $xetable.getVTColumnIndex(column);
              var itemIndex = _columnIndex;
              var params = { $table: $xetable, _rowIndex, $rowIndex, column, columnIndex, $columnIndex, _columnIndex, itemIndex, items: list, fixed: fixedType, type: renderType$1, data: footerTableData };
              if (scrollXLoad && !hasEllipsis) {
                showEllipsis = hasEllipsis = true;
              }
              if (showTitle || showTooltip || showAllTip) {
                tfOns.onMouseenter = function(evnt) {
                  if (showTitle) {
                    updateCellTitle(evnt.currentTarget, column);
                  } else if (showTooltip || showAllTip) {
                    $xetable.triggerFooterTooltipEvent(evnt, params);
                  }
                };
              }
              if (showTooltip || showAllTip) {
                tfOns.onMouseleave = function(evnt) {
                  if (showTooltip || showAllTip) {
                    $xetable.handleTargetLeaveEvent(evnt);
                  }
                };
              }
              tfOns.onClick = function(evnt) {
                $xetable.dispatchEvent("footer-cell-click", Object.assign({ cell: evnt.currentTarget }, params), evnt);
              };
              tfOns.onDblclick = function(evnt) {
                $xetable.dispatchEvent("footer-cell-dblclick", Object.assign({ cell: evnt.currentTarget }, params), evnt);
              };
              if (mergeFooterList.length) {
                var spanRest = mergeFooterMethod(mergeFooterList, _rowIndex, _columnIndex);
                if (spanRest) {
                  var rowspan = spanRest.rowspan, colspan = spanRest.colspan;
                  if (!rowspan || !colspan) {
                    return null;
                  }
                  if (rowspan > 1) {
                    attrs.rowspan = rowspan;
                  }
                  if (colspan > 1) {
                    attrs.colspan = colspan;
                  }
                }
              } else if (footerSpanMethod) {
                var _b = footerSpanMethod(params) || {}, _c = _b.rowspan, rowspan = _c === void 0 ? 1 : _c, _d = _b.colspan, colspan = _d === void 0 ? 1 : _d;
                if (!rowspan || !colspan) {
                  return null;
                }
                if (rowspan > 1) {
                  attrs.rowspan = rowspan;
                }
                if (colspan > 1) {
                  attrs.colspan = colspan;
                }
              }
              return h("td", __assign$f(__assign$f(__assign$f(__assign$f({ class: ["vxe-footer--column", column.id, (_a2 = {}, _a2["col--" + footAlign] = footAlign, _a2["col--" + type] = type, _a2["col--last"] = $columnIndex === tableColumn.length - 1, _a2["fixed--hidden"] = fixedHiddenColumn, _a2["col--ellipsis"] = hasEllipsis, _a2["col--current"] = currentColumn === column, _a2), getPropClass(footerClassName, params), getPropClass(footerCellClassName, params)] }, attrs), { style: footerCellStyle ? xeUtils.isFunction(footerCellStyle) ? footerCellStyle(params) : footerCellStyle : null }), tfOns), { key: columnKey ? column.id : $columnIndex }), [
                h("div", {
                  class: ["vxe-cell", {
                    "c--title": showTitle,
                    "c--tooltip": showTooltip,
                    "c--ellipsis": showEllipsis
                  }]
                }, column.renderFooter(params))
              ]);
            }).concat(scrollbarWidth ? [
              h("td", {
                class: "vxe-footer--gutter col--gutter"
              })
            ] : []));
          }))
        ])
      ]);
    };
    return renderVN;
  }
});
var Footer = Object.assign(VxeTableFooterComponent, {
  install: function(app) {
    dynamicApp.component(VxeTableFooterComponent.name, VxeTableFooterComponent);
    app.component(VxeTableFooterComponent.name, VxeTableFooterComponent);
  }
});
var Icon = {
  install: function() {
  }
};
var PanelComponent$1 = defineComponent({
  name: "VxeTableFilter",
  props: {
    filterStore: Object
  },
  setup: function(props) {
    var $xetable = inject("$xetable", {});
    var tableReactData = $xetable.reactData, tableInternalData = $xetable.internalData;
    var computeHasCheckOption = computed(function() {
      var filterStore = props.filterStore;
      return filterStore && filterStore.options.some(function(option) {
        return option.checked;
      });
    });
    var filterCheckAllEvent = function(evnt, value) {
      var filterStore = props.filterStore;
      filterStore.options.forEach(function(option) {
        option._checked = value;
        option.checked = value;
      });
      filterStore.isAllSelected = value;
      filterStore.isIndeterminate = false;
    };
    var confirmFilter = function(evnt) {
      var filterStore = props.filterStore;
      filterStore.options.forEach(function(option) {
        option.checked = option._checked;
      });
      $xetable.confirmFilterEvent(evnt);
    };
    var changeRadioOption = function(evnt, checked, item) {
      var filterStore = props.filterStore;
      filterStore.options.forEach(function(option) {
        option._checked = false;
      });
      item._checked = checked;
      $xetable.checkFilterOptions();
      confirmFilter(evnt);
    };
    var resetFilter = function(evnt) {
      var filterStore = props.filterStore;
      $xetable.handleClearFilter(filterStore.column);
      $xetable.confirmFilterEvent(evnt);
    };
    var changeMultipleOption = function(evnt, checked, item) {
      item._checked = checked;
      $xetable.checkFilterOptions();
    };
    var changeOption = function(evnt, checked, item) {
      var filterStore = props.filterStore;
      if (filterStore.multiple) {
        changeMultipleOption(evnt, checked, item);
      } else {
        changeRadioOption(evnt, checked, item);
      }
    };
    var changeAllOption = function(evnt, checked) {
      var filterStore = props.filterStore;
      if (filterStore.multiple) {
        filterCheckAllEvent(evnt, checked);
      } else {
        resetFilter(evnt);
      }
    };
    var $panel = {
      changeRadioOption,
      changeMultipleOption,
      changeAllOption,
      changeOption,
      confirmFilter,
      resetFilter
    };
    var renderOptions = function(filterRender, compConf) {
      var filterStore = props.filterStore;
      var column = filterStore.column, multiple = filterStore.multiple, maxHeight = filterStore.maxHeight;
      var slots = column.slots;
      var filterSlot = slots ? slots.filter : null;
      var params = Object.assign({}, tableInternalData._currFilterParams, { $panel, $table: $xetable });
      if (filterSlot) {
        return [
          h("div", {
            class: "vxe-table--filter-template"
          }, $xetable.callSlot(filterSlot, params))
        ];
      } else if (compConf && compConf.renderFilter) {
        return [
          h("div", {
            class: "vxe-table--filter-template"
          }, compConf.renderFilter(filterRender, params))
        ];
      }
      return [
        h("ul", {
          class: "vxe-table--filter-header"
        }, [
          h("li", {
            class: ["vxe-table--filter-option", {
              "is--checked": multiple ? filterStore.isAllSelected : !filterStore.options.some(function(item) {
                return item._checked;
              }),
              "is--indeterminate": multiple && filterStore.isIndeterminate
            }],
            title: GlobalConfig.i18n(multiple ? "vxe.table.allTitle" : "vxe.table.allFilter"),
            onClick: function(evnt) {
              changeAllOption(evnt, !filterStore.isAllSelected);
            }
          }, (multiple ? [
            h("span", {
              class: "vxe-checkbox--icon vxe-checkbox--checked-icon"
            }),
            h("span", {
              class: "vxe-checkbox--icon vxe-checkbox--unchecked-icon"
            }),
            h("span", {
              class: "vxe-checkbox--icon vxe-checkbox--indeterminate-icon"
            })
          ] : []).concat([
            h("span", {
              class: "vxe-checkbox--label"
            }, GlobalConfig.i18n("vxe.table.allFilter"))
          ]))
        ]),
        h("ul", {
          class: "vxe-table--filter-body",
          style: maxHeight ? {
            maxHeight: maxHeight + "px"
          } : {}
        }, filterStore.options.map(function(item) {
          return h("li", {
            class: ["vxe-table--filter-option", {
              "is--checked": item._checked
            }],
            title: item.label,
            onClick: function(evnt) {
              changeOption(evnt, !item._checked, item);
            }
          }, (multiple ? [
            h("span", {
              class: "vxe-checkbox--icon vxe-checkbox--checked-icon"
            }),
            h("span", {
              class: "vxe-checkbox--icon vxe-checkbox--unchecked-icon"
            }),
            h("span", {
              class: "vxe-checkbox--icon vxe-checkbox--indeterminate-icon"
            })
          ] : []).concat([
            h("span", {
              class: "vxe-checkbox--label"
            }, formatText(item.label, 1))
          ]));
        }))
      ];
    };
    var renderFooters = function() {
      var filterStore = props.filterStore;
      var column = filterStore.column, multiple = filterStore.multiple;
      var hasCheckOption = computeHasCheckOption.value;
      var filterRender = column.filterRender;
      var compConf = filterRender ? VXETable.renderer.get(filterRender.name) : null;
      var isDisabled = !hasCheckOption && !filterStore.isAllSelected && !filterStore.isIndeterminate;
      return multiple && (!compConf || compConf.showFilterFooter !== false) ? [
        h("div", {
          class: "vxe-table--filter-footer"
        }, [
          h("button", {
            class: {
              "is--disabled": isDisabled
            },
            disabled: isDisabled,
            onClick: confirmFilter
          }, GlobalConfig.i18n("vxe.table.confirmFilter")),
          h("button", {
            onClick: resetFilter
          }, GlobalConfig.i18n("vxe.table.resetFilter"))
        ])
      ] : [];
    };
    var renderVN = function() {
      var filterStore = props.filterStore;
      var initStore = tableReactData.initStore;
      var column = filterStore.column;
      var filterRender = column ? column.filterRender : null;
      var compConf = filterRender ? VXETable.renderer.get(filterRender.name) : null;
      return h("div", {
        class: ["vxe-table--filter-wrapper", "filter--prevent-default", compConf && compConf.className ? compConf.className : "", {
          "is--animat": $xetable.props.animat,
          "is--multiple": filterStore.multiple,
          "is--active": filterStore.visible
        }],
        style: filterStore.style
      }, initStore.filter && filterStore.visible ? renderOptions(filterRender, compConf).concat(renderFooters()) : []);
    };
    return renderVN;
  }
});
var __assign$e = function() {
  __assign$e = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$e.apply(this, arguments);
};
var tableFilterMethodKeys = ["setFilter", "clearFilter", "getCheckedFilters"];
var tableFilterHook = {
  setupTable: function($xetable) {
    var reactData = $xetable.reactData, internalData = $xetable.internalData;
    var _a = $xetable.getRefMaps(), refTableBody = _a.refTableBody, refTableFilter = _a.refTableFilter;
    var computeFilterOpts = $xetable.getComputeMaps().computeFilterOpts;
    var filterPrivateMethods = {
      checkFilterOptions: function() {
        var filterStore = reactData.filterStore;
        filterStore.isAllSelected = filterStore.options.every(function(item) {
          return item._checked;
        });
        filterStore.isIndeterminate = !filterStore.isAllSelected && filterStore.options.some(function(item) {
          return item._checked;
        });
      },
      triggerFilterEvent: function(evnt, column, params) {
        var initStore = reactData.initStore, filterStore = reactData.filterStore;
        if (filterStore.column === column && filterStore.visible) {
          filterStore.visible = false;
        } else {
          var targetElem_1 = evnt.target, pageX_1 = evnt.pageX;
          var visibleWidth_1 = getDomNode().visibleWidth;
          var filters = column.filters, filterMultiple = column.filterMultiple, filterRender = column.filterRender;
          var compConf = filterRender ? VXETable.renderer.get(filterRender.name) : null;
          var filterRecoverMethod_1 = column.filterRecoverMethod || (compConf ? compConf.filterRecoverMethod : null);
          internalData._currFilterParams = params;
          Object.assign(filterStore, {
            multiple: filterMultiple,
            options: filters,
            column,
            style: null
          });
          filterStore.options.forEach(function(option) {
            var _checked = option._checked, checked = option.checked;
            option._checked = checked;
            if (!checked && _checked !== checked) {
              if (filterRecoverMethod_1) {
                filterRecoverMethod_1({ option, column, $table: $xetable });
              }
            }
          });
          this.checkFilterOptions();
          filterStore.visible = true;
          initStore.filter = true;
          nextTick(function() {
            var tableBody = refTableBody.value;
            var bodyElem = tableBody.$el;
            var tableFilter = refTableFilter.value;
            var filterWrapperElem = tableFilter ? tableFilter.$el : null;
            var filterWidth = 0;
            var filterHeight = 0;
            var filterHeadElem = null;
            var filterFootElem = null;
            if (filterWrapperElem) {
              filterWidth = filterWrapperElem.offsetWidth;
              filterHeight = filterWrapperElem.offsetHeight;
              filterHeadElem = filterWrapperElem.querySelector(".vxe-table--filter-header");
              filterFootElem = filterWrapperElem.querySelector(".vxe-table--filter-footer");
            }
            var centerWidth = filterWidth / 2;
            var minMargin = 10;
            var maxLeft = bodyElem.clientWidth - filterWidth - minMargin;
            var left, right;
            var style2 = {
              top: targetElem_1.offsetTop + targetElem_1.offsetParent.offsetTop + targetElem_1.offsetHeight + 8 + "px"
            };
            var maxHeight = null;
            if (filterHeight >= bodyElem.clientHeight) {
              maxHeight = Math.max(40, bodyElem.clientHeight - (filterFootElem ? filterFootElem.offsetHeight : 0) - (filterHeadElem ? filterHeadElem.offsetHeight : 0));
            }
            if (column.fixed === "left") {
              left = targetElem_1.offsetLeft + targetElem_1.offsetParent.offsetLeft - centerWidth;
            } else if (column.fixed === "right") {
              right = targetElem_1.offsetParent.offsetWidth - targetElem_1.offsetLeft + (targetElem_1.offsetParent.offsetParent.offsetWidth - targetElem_1.offsetParent.offsetLeft) - column.renderWidth - centerWidth;
            } else {
              left = targetElem_1.offsetLeft + targetElem_1.offsetParent.offsetLeft - centerWidth - bodyElem.scrollLeft;
            }
            if (left) {
              var overflowWidth = pageX_1 + filterWidth - centerWidth + minMargin - visibleWidth_1;
              if (overflowWidth > 0) {
                left -= overflowWidth;
              }
              style2.left = Math.min(maxLeft, Math.max(minMargin, left)) + "px";
            } else if (right) {
              var overflowWidth = pageX_1 + filterWidth - centerWidth + minMargin - visibleWidth_1;
              if (overflowWidth > 0) {
                right += overflowWidth;
              }
              style2.right = Math.max(minMargin, right) + "px";
            }
            filterStore.style = style2;
            filterStore.maxHeight = maxHeight;
          });
        }
        $xetable.dispatchEvent("filter-visible", { column, property: column.property, filterList: $xetable.getCheckedFilters(), visible: filterStore.visible }, evnt);
      },
      handleClearFilter: function(column) {
        if (column) {
          var filters = column.filters, filterRender = column.filterRender;
          if (filters) {
            var compConf = filterRender ? VXETable.renderer.get(filterRender.name) : null;
            var filterResetMethod_1 = column.filterResetMethod || (compConf ? compConf.filterResetMethod : null);
            filters.forEach(function(item) {
              item._checked = false;
              item.checked = false;
              if (!filterResetMethod_1) {
                item.data = xeUtils.clone(item.resetValue, true);
              }
            });
            if (filterResetMethod_1) {
              filterResetMethod_1({ options: filters, column, $table: $xetable });
            }
          }
        }
      },
      confirmFilterEvent: function(evnt) {
        var filterStore = reactData.filterStore, scrollXLoad = reactData.scrollXLoad, scrollYLoad = reactData.scrollYLoad;
        var filterOpts = computeFilterOpts.value;
        var column = filterStore.column;
        var property = column.property;
        var values = [];
        var datas = [];
        column.filters.forEach(function(item) {
          if (item.checked) {
            values.push(item.value);
            datas.push(item.data);
          }
        });
        var filterList = $xetable.getCheckedFilters();
        if (!filterOpts.remote) {
          $xetable.handleTableData(true);
          $xetable.checkSelectionStatus();
          $xetable.updateFooter();
          if (scrollXLoad || scrollYLoad) {
            $xetable.clearScroll();
            if (scrollYLoad) {
              $xetable.updateScrollYSpace();
            }
          }
        }
        $xetable.dispatchEvent("filter-change", { column, property, values, datas, filters: filterList, filterList }, evnt);
        $xetable.closeFilter();
        nextTick(function() {
          $xetable.recalculate();
          $xetable.updateCellAreas();
        });
      }
    };
    var filterMethods = {
      setFilter: function(fieldOrColumn, options) {
        var column = handleFieldOrColumn($xetable, fieldOrColumn);
        if (column && column.filters && options) {
          column.filters = toFilters(options);
        }
        return nextTick();
      },
      clearFilter: function(fieldOrColumn) {
        var filterStore = reactData.filterStore;
        var tableFullColumn = internalData.tableFullColumn;
        var filterOpts = computeFilterOpts.value;
        var column;
        if (fieldOrColumn) {
          column = handleFieldOrColumn($xetable, fieldOrColumn);
          if (column) {
            filterPrivateMethods.handleClearFilter(column);
          }
        } else {
          tableFullColumn.forEach(filterPrivateMethods.handleClearFilter);
        }
        if (!fieldOrColumn || column !== filterStore.column) {
          Object.assign(filterStore, {
            isAllSelected: false,
            isIndeterminate: false,
            style: null,
            options: [],
            column: null,
            multiple: false,
            visible: false
          });
        }
        if (!filterOpts.remote) {
          return $xetable.updateData();
        }
        return nextTick();
      },
      getCheckedFilters: function() {
        var tableFullColumn = internalData.tableFullColumn;
        var filterList = [];
        tableFullColumn.filter(function(column) {
          var property = column.property, filters = column.filters;
          var valueList = [];
          var dataList = [];
          if (filters && filters.length) {
            filters.forEach(function(item) {
              if (item.checked) {
                valueList.push(item.value);
                dataList.push(item.data);
              }
            });
            if (valueList.length) {
              filterList.push({ column, property, values: valueList, datas: dataList });
            }
          }
        });
        return filterList;
      }
    };
    return __assign$e(__assign$e({}, filterMethods), filterPrivateMethods);
  },
  setupGrid: function($xegrid) {
    return $xegrid.extendTableMethods(tableFilterMethodKeys);
  }
};
var Filter = {
  Panel: PanelComponent$1,
  install: function(app) {
    VXETable.hooks.add("$tableFilter", tableFilterHook);
    dynamicApp.component(PanelComponent$1.name, PanelComponent$1);
    app.component(PanelComponent$1.name, PanelComponent$1);
  }
};
var __assign$d = function() {
  __assign$d = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$d.apply(this, arguments);
};
var __spreadArray$3 = function(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
    to[j] = from[i];
  return to;
};
var tableEditMethodKeys = ["insert", "insertAt", "remove", "removeCheckboxRow", "removeRadioRow", "removeCurrentRow", "getRecordset", "getInsertRecords", "getRemoveRecords", "getUpdateRecords", "getActiveRecord", "getSelectedCell", "clearActived", "clearSelected", "isActiveByRow", "setActiveRow", "setActiveCell", "setSelectCell"];
var editHook = {
  setupTable: function($xetable) {
    var props = $xetable.props, reactData = $xetable.reactData, internalData = $xetable.internalData;
    var refElem = $xetable.getRefMaps().refElem;
    var _a = $xetable.getComputeMaps(), computeMouseOpts = _a.computeMouseOpts, computeEditOpts = _a.computeEditOpts, computeCheckboxOpts = _a.computeCheckboxOpts, computeSYOpts = _a.computeSYOpts, computeTreeOpts = _a.computeTreeOpts;
    var editMethods = {};
    var editPrivateMethods = {};
    var getEditColumnModel = function(row, column) {
      var model = column.model, editRender = column.editRender;
      if (editRender) {
        model.value = getCellValue(row, column);
        model.update = false;
      }
    };
    var setEditColumnModel = function(row, column) {
      var model = column.model, editRender = column.editRender;
      if (editRender && model.update) {
        setCellValue(row, column, model.value);
        model.update = false;
        model.value = null;
      }
    };
    var removeCellSelectedClass = function() {
      var el = refElem.value;
      if (el) {
        var cell = el.querySelector(".col--selected");
        if (cell) {
          removeClass(cell, "col--selected");
        }
      }
    };
    function syncActivedCell() {
      var editStore = reactData.editStore, tableColumn = reactData.tableColumn;
      var editOpts = computeEditOpts.value;
      var actived = editStore.actived;
      var row = actived.row, column = actived.column;
      if (row || column) {
        if (editOpts.mode === "row") {
          tableColumn.forEach(function(column2) {
            return setEditColumnModel(row, column2);
          });
        } else {
          setEditColumnModel(row, column);
        }
      }
    }
    editMethods = {
      insert: function(records) {
        return editMethods.insertAt(records, null);
      },
      insertAt: function(records, row) {
        var _a2;
        var treeConfig = props.treeConfig;
        var mergeList = reactData.mergeList, editStore = reactData.editStore, scrollYLoad = reactData.scrollYLoad;
        var afterFullData = internalData.afterFullData, tableFullData = internalData.tableFullData;
        var sYOpts = computeSYOpts.value;
        if (!xeUtils.isArray(records)) {
          records = [records];
        }
        var newRecords = records.map(function(record) {
          return $xetable.defineField(Object.assign({}, record));
        });
        if (!row) {
          afterFullData.unshift.apply(afterFullData, newRecords);
          tableFullData.unshift.apply(tableFullData, newRecords);
          mergeList.forEach(function(mergeItem) {
            var mergeRowIndex = mergeItem.row;
            if (mergeRowIndex > 0) {
              mergeItem.row = mergeRowIndex + newRecords.length;
            }
          });
        } else {
          if (row === -1) {
            afterFullData.push.apply(afterFullData, newRecords);
            tableFullData.push.apply(tableFullData, newRecords);
            mergeList.forEach(function(mergeItem) {
              var mergeRowIndex = mergeItem.row, mergeRowspan = mergeItem.rowspan;
              if (mergeRowIndex + mergeRowspan > afterFullData.length) {
                mergeItem.rowspan = mergeRowspan + newRecords.length;
              }
            });
          } else {
            if (treeConfig) {
              throw new Error(getLog("vxe.error.noTree", ["insert"]));
            }
            var afIndex_1 = $xetable.findRowIndexOf(afterFullData, row);
            if (afIndex_1 === -1) {
              throw new Error(errLog("vxe.error.unableInsert"));
            }
            afterFullData.splice.apply(afterFullData, __spreadArray$3([afIndex_1, 0], newRecords));
            tableFullData.splice.apply(tableFullData, __spreadArray$3([$xetable.findRowIndexOf(tableFullData, row), 0], newRecords));
            mergeList.forEach(function(mergeItem) {
              var mergeRowIndex = mergeItem.row, mergeRowspan = mergeItem.rowspan;
              if (mergeRowIndex > afIndex_1) {
                mergeItem.row = mergeRowIndex + newRecords.length;
              } else if (mergeRowIndex + mergeRowspan > afIndex_1) {
                mergeItem.rowspan = mergeRowspan + newRecords.length;
              }
            });
          }
        }
        (_a2 = editStore.insertList).unshift.apply(_a2, newRecords);
        reactData.scrollYLoad = !treeConfig && sYOpts.gt > -1 && sYOpts.gt < tableFullData.length;
        $xetable.updateFooter();
        $xetable.updateCache();
        $xetable.handleTableData();
        $xetable.updateAfterDataIndex();
        $xetable.checkSelectionStatus();
        if (scrollYLoad) {
          $xetable.updateScrollYSpace();
        }
        return nextTick().then(function() {
          $xetable.updateCellAreas();
          return $xetable.recalculate();
        }).then(function() {
          return {
            row: newRecords.length ? newRecords[newRecords.length - 1] : null,
            rows: newRecords
          };
        });
      },
      remove: function(rows) {
        var treeConfig = props.treeConfig;
        var mergeList = reactData.mergeList, editStore = reactData.editStore, selection = reactData.selection, scrollYLoad = reactData.scrollYLoad;
        var afterFullData = internalData.afterFullData, tableFullData = internalData.tableFullData;
        var checkboxOpts = computeCheckboxOpts.value;
        var sYOpts = computeSYOpts.value;
        var actived = editStore.actived, removeList = editStore.removeList, insertList = editStore.insertList;
        var property = checkboxOpts.checkField;
        var rest = [];
        if (!rows) {
          rows = tableFullData;
        } else if (!xeUtils.isArray(rows)) {
          rows = [rows];
        }
        rows.forEach(function(row) {
          if (!$xetable.isInsertByRow(row)) {
            removeList.push(row);
          }
        });
        if (!property) {
          rows.forEach(function(row) {
            var sIndex = $xetable.findRowIndexOf(selection, row);
            if (sIndex > -1) {
              selection.splice(sIndex, 1);
            }
          });
        }
        if (tableFullData === rows) {
          rows = rest = tableFullData.slice(0);
          internalData.tableFullData = [];
          internalData.afterFullData = [];
          $xetable.clearMergeCells();
        } else {
          rows.forEach(function(row) {
            var tfIndex = $xetable.findRowIndexOf(tableFullData, row);
            if (tfIndex > -1) {
              var rItems = tableFullData.splice(tfIndex, 1);
              rest.push(rItems[0]);
            }
            var afIndex = $xetable.findRowIndexOf(afterFullData, row);
            if (afIndex > -1) {
              mergeList.forEach(function(mergeItem) {
                var mergeRowIndex = mergeItem.row, mergeRowspan = mergeItem.rowspan;
                if (mergeRowIndex > afIndex) {
                  mergeItem.row = mergeRowIndex - 1;
                } else if (mergeRowIndex + mergeRowspan > afIndex) {
                  mergeItem.rowspan = mergeRowspan - 1;
                }
              });
              afterFullData.splice(afIndex, 1);
            }
          });
        }
        if (actived.row && $xetable.findRowIndexOf(rows, actived.row) > -1) {
          editMethods.clearActived();
        }
        rows.forEach(function(row) {
          var iIndex = $xetable.findRowIndexOf(insertList, row);
          if (iIndex > -1) {
            insertList.splice(iIndex, 1);
          }
        });
        reactData.scrollYLoad = !treeConfig && sYOpts.gt > -1 && sYOpts.gt < tableFullData.length;
        $xetable.updateFooter();
        $xetable.updateCache();
        $xetable.handleTableData();
        $xetable.updateAfterDataIndex();
        $xetable.checkSelectionStatus();
        if (scrollYLoad) {
          $xetable.updateScrollYSpace();
        }
        return nextTick().then(function() {
          $xetable.updateCellAreas();
          return $xetable.recalculate();
        }).then(function() {
          return { row: rest.length ? rest[rest.length - 1] : null, rows: rest };
        });
      },
      removeCheckboxRow: function() {
        return editMethods.remove($xetable.getCheckboxRecords()).then(function(params) {
          $xetable.clearCheckboxRow();
          return params;
        });
      },
      removeRadioRow: function() {
        var radioRecord = $xetable.getRadioRecord();
        return editMethods.remove(radioRecord || []).then(function(params) {
          $xetable.clearRadioRow();
          return params;
        });
      },
      removeCurrentRow: function() {
        var currentRecord = $xetable.getCurrentRecord();
        return editMethods.remove(currentRecord || []).then(function(params) {
          $xetable.clearCurrentRow();
          return params;
        });
      },
      getRecordset: function() {
        return {
          insertRecords: editMethods.getInsertRecords(),
          removeRecords: editMethods.getRemoveRecords(),
          updateRecords: editMethods.getUpdateRecords()
        };
      },
      getInsertRecords: function() {
        var editStore = reactData.editStore;
        var tableFullData = internalData.tableFullData;
        var insertList = editStore.insertList;
        var insertRecords = [];
        if (insertList.length) {
          tableFullData.forEach(function(row) {
            if ($xetable.findRowIndexOf(insertList, row) > -1) {
              insertRecords.push(row);
            }
          });
        }
        return insertRecords;
      },
      getRemoveRecords: function() {
        var editStore = reactData.editStore;
        return editStore.removeList;
      },
      getUpdateRecords: function() {
        var keepSource = props.keepSource, treeConfig = props.treeConfig;
        var tableFullData = internalData.tableFullData;
        var treeOpts = computeTreeOpts.value;
        if (keepSource) {
          syncActivedCell();
          if (treeConfig) {
            return xeUtils.filterTree(tableFullData, function(row) {
              return $xetable.isUpdateByRow(row);
            }, treeOpts);
          }
          return tableFullData.filter(function(row) {
            return $xetable.isUpdateByRow(row);
          });
        }
        return [];
      },
      getActiveRecord: function() {
        var editStore = reactData.editStore;
        var afterFullData = internalData.afterFullData;
        var el = refElem.value;
        var _a2 = editStore.actived, args = _a2.args, row = _a2.row;
        if (args && $xetable.findRowIndexOf(afterFullData, row) > -1 && el.querySelectorAll(".vxe-body--column.col--actived").length) {
          return Object.assign({}, args);
        }
        return null;
      },
      getSelectedCell: function() {
        var editStore = reactData.editStore;
        var _a2 = editStore.selected, args = _a2.args, column = _a2.column;
        if (args && column) {
          return Object.assign({}, args);
        }
        return null;
      },
      clearActived: function(evnt) {
        var editStore = reactData.editStore;
        var actived = editStore.actived;
        var row = actived.row, column = actived.column;
        if (row || column) {
          syncActivedCell();
          actived.args = null;
          actived.row = null;
          actived.column = null;
          $xetable.updateFooter();
          $xetable.dispatchEvent("edit-closed", {
            row,
            rowIndex: $xetable.getRowIndex(row),
            $rowIndex: $xetable.getVMRowIndex(row),
            column,
            columnIndex: $xetable.getColumnIndex(column),
            $columnIndex: $xetable.getVMColumnIndex(column)
          }, evnt || null);
        }
        return ($xetable.clearValidate ? $xetable.clearValidate() : nextTick()).then(function() {
          return $xetable.recalculate();
        });
      },
      clearSelected: function() {
        var editStore = reactData.editStore;
        var selected = editStore.selected;
        selected.row = null;
        selected.column = null;
        removeCellSelectedClass();
        return nextTick();
      },
      isActiveByRow: function(row) {
        var editStore = reactData.editStore;
        return editStore.actived.row === row;
      },
      setActiveRow: function(row) {
        var visibleColumn = internalData.visibleColumn;
        return $xetable.setActiveCell(row, xeUtils.find(visibleColumn, function(column) {
          return isEnableConf(column.editRender);
        }));
      },
      setActiveCell: function(row, fieldOrColumn) {
        var editConfig = props.editConfig;
        var column = xeUtils.isString(fieldOrColumn) ? $xetable.getColumnByField(fieldOrColumn) : fieldOrColumn;
        if (row && column && isEnableConf(editConfig) && isEnableConf(column.editRender)) {
          return $xetable.scrollToRow(row, column).then(function() {
            var cell = $xetable.getCell(row, column);
            if (cell) {
              editPrivateMethods.handleActived({ row, rowIndex: $xetable.getRowIndex(row), column, columnIndex: $xetable.getColumnIndex(column), cell, $table: $xetable });
              internalData._lastCallTime = Date.now();
            }
            return nextTick();
          });
        }
        return nextTick();
      },
      setSelectCell: function(row, fieldOrColumn) {
        var tableData = reactData.tableData;
        var visibleColumn = internalData.visibleColumn;
        var editOpts = computeEditOpts.value;
        var column = xeUtils.isString(fieldOrColumn) ? $xetable.getColumnByField(fieldOrColumn) : fieldOrColumn;
        if (row && column && editOpts.trigger !== "manual") {
          var rowIndex = $xetable.findRowIndexOf(tableData, row);
          if (rowIndex > -1 && column) {
            var cell = $xetable.getCell(row, column);
            var params = { row, rowIndex, column, columnIndex: visibleColumn.indexOf(column), cell };
            $xetable.handleSelected(params, {});
          }
        }
        return nextTick();
      }
    };
    editPrivateMethods = {
      handleActived: function(params, evnt) {
        var editConfig = props.editConfig, mouseConfig = props.mouseConfig;
        var editStore = reactData.editStore, tableColumn = reactData.tableColumn;
        var editOpts = computeEditOpts.value;
        var mode = editOpts.mode, activeMethod = editOpts.activeMethod;
        var actived = editStore.actived;
        var row = params.row, column = params.column;
        var editRender = column.editRender;
        var cell = params.cell = params.cell || $xetable.getCell(row, column);
        if (isEnableConf(editConfig) && isEnableConf(editRender) && cell) {
          if (actived.row !== row || (mode === "cell" ? actived.column !== column : false)) {
            var type = "edit-disabled";
            if (!activeMethod || activeMethod(params)) {
              if (mouseConfig) {
                editMethods.clearSelected();
                if ($xetable.clearCellAreas) {
                  $xetable.clearCellAreas();
                  $xetable.clearCopyCellArea();
                }
              }
              $xetable.closeTooltip();
              editMethods.clearActived(evnt);
              type = "edit-actived";
              column.renderHeight = cell.offsetHeight;
              actived.args = params;
              actived.row = row;
              actived.column = column;
              if (mode === "row") {
                tableColumn.forEach(function(column2) {
                  return getEditColumnModel(row, column2);
                });
              } else {
                getEditColumnModel(row, column);
              }
              nextTick(function() {
                editPrivateMethods.handleFocus(params, evnt);
              });
            }
            $xetable.dispatchEvent(type, {
              row,
              rowIndex: $xetable.getRowIndex(row),
              $rowIndex: $xetable.getVMRowIndex(row),
              column,
              columnIndex: $xetable.getColumnIndex(column),
              $columnIndex: $xetable.getVMColumnIndex(column)
            }, evnt);
          } else {
            var oldColumn = actived.column;
            if (mouseConfig) {
              editMethods.clearSelected();
              if ($xetable.clearCellAreas) {
                $xetable.clearCellAreas();
                $xetable.clearCopyCellArea();
              }
            }
            if (oldColumn !== column) {
              var oldModel = oldColumn.model;
              if (oldModel.update) {
                setCellValue(row, oldColumn, oldModel.value);
              }
              if ($xetable.clearValidate) {
                $xetable.clearValidate();
              }
            }
            column.renderHeight = cell.offsetHeight;
            actived.args = params;
            actived.column = column;
            setTimeout(function() {
              editPrivateMethods.handleFocus(params, evnt);
            });
          }
          $xetable.focus();
        }
        return nextTick();
      },
      handleFocus: function(params) {
        var row = params.row, column = params.column, cell = params.cell;
        var editRender = column.editRender;
        if (isEnableConf(editRender)) {
          var compRender = renderer.get(editRender.name);
          var autofocus = editRender.autofocus, autoselect = editRender.autoselect;
          var inputElem = void 0;
          if (autofocus) {
            inputElem = cell.querySelector(autofocus);
          }
          if (!inputElem && compRender && compRender.autofocus) {
            inputElem = cell.querySelector(compRender.autofocus);
          }
          if (inputElem) {
            inputElem.focus();
            if (autoselect) {
              inputElem.select();
            } else {
              if (browse.msie) {
                var textRange = inputElem.createTextRange();
                textRange.collapse(false);
                textRange.select();
              }
            }
          } else {
            $xetable.scrollToRow(row, column);
          }
        }
      },
      handleSelected: function(params, evnt) {
        var mouseConfig = props.mouseConfig;
        var editStore = reactData.editStore;
        var mouseOpts = computeMouseOpts.value;
        var editOpts = computeEditOpts.value;
        var actived = editStore.actived, selected = editStore.selected;
        var row = params.row, column = params.column;
        var isMouseSelected = mouseConfig && mouseOpts.selected;
        var selectMethod = function() {
          if (isMouseSelected && (selected.row !== row || selected.column !== column)) {
            if (actived.row !== row || (editOpts.mode === "cell" ? actived.column !== column : false)) {
              editMethods.clearActived(evnt);
              editMethods.clearSelected();
              if ($xetable.clearCellAreas) {
                $xetable.clearCellAreas();
                $xetable.clearCopyCellArea();
              }
              selected.args = params;
              selected.row = row;
              selected.column = column;
              if (isMouseSelected) {
                editPrivateMethods.addCellSelectedClass();
              }
              $xetable.focus();
            }
          }
          return nextTick();
        };
        return selectMethod();
      },
      addCellSelectedClass: function() {
        var editStore = reactData.editStore;
        var selected = editStore.selected;
        var row = selected.row, column = selected.column;
        removeCellSelectedClass();
        if (row && column) {
          var cell = $xetable.getCell(row, column);
          if (cell) {
            addClass(cell, "col--selected");
          }
        }
      }
    };
    return __assign$d(__assign$d({}, editMethods), editPrivateMethods);
  },
  setupGrid: function($xegrid) {
    return $xegrid.extendTableMethods(tableEditMethodKeys);
  }
};
var Edit = {
  install: function() {
    VXETable.hooks.add("$tableEdit", editHook);
  }
};
var PanelComponent = defineComponent({
  name: "VxeTableContextMenu",
  setup: function(props, context) {
    var xID = xeUtils.uniqueId();
    var $xetable = inject("$xetable", {});
    var tableReactData = $xetable.reactData;
    var refElem = ref();
    var refMaps = {
      refElem
    };
    var $xemenupanel = {
      xID,
      props,
      context,
      getRefMaps: function() {
        return refMaps;
      }
    };
    var renderVN = function() {
      var ctxMenuStore = tableReactData.ctxMenuStore;
      var computeMenuOpts = $xetable.getComputeMaps().computeMenuOpts;
      var menuOpts = computeMenuOpts.value;
      return h(Teleport, {
        to: "body",
        disabled: false
      }, [
        h("div", {
          ref: refElem,
          class: ["vxe-table--context-menu-wrapper", menuOpts.className, {
            "is--visible": ctxMenuStore.visible
          }],
          style: ctxMenuStore.style
        }, ctxMenuStore.list.map(function(options, gIndex) {
          return options.every(function(item) {
            return item.visible === false;
          }) ? createCommentVNode() : h("ul", {
            class: "vxe-context-menu--option-wrapper",
            key: gIndex
          }, options.map(function(item, index) {
            var hasChildMenus = item.children && item.children.some(function(child) {
              return child.visible !== false;
            });
            return item.visible === false ? null : h("li", {
              class: [item.className, {
                "link--disabled": item.disabled,
                "link--active": item === ctxMenuStore.selected
              }],
              key: gIndex + "_" + index
            }, [
              h("a", {
                class: "vxe-context-menu--link",
                onClick: function(evnt) {
                  $xetable.ctxMenuLinkEvent(evnt, item);
                },
                onMouseover: function(evnt) {
                  $xetable.ctxMenuMouseoverEvent(evnt, item);
                },
                onMouseout: function(evnt) {
                  $xetable.ctxMenuMouseoutEvent(evnt, item);
                }
              }, [
                h("i", {
                  class: ["vxe-context-menu--link-prefix", item.prefixIcon]
                }),
                h("span", {
                  class: "vxe-context-menu--link-content"
                }, getFuncText(item.name)),
                h("i", {
                  class: ["vxe-context-menu--link-suffix", hasChildMenus ? item.suffixIcon || "suffix--haschild" : item.suffixIcon]
                })
              ]),
              hasChildMenus ? h("ul", {
                class: ["vxe-table--context-menu-clild-wrapper", {
                  "is--show": item === ctxMenuStore.selected && ctxMenuStore.showChild
                }]
              }, item.children.map(function(child, cIndex) {
                return child.visible === false ? null : h("li", {
                  class: [child.className, {
                    "link--disabled": child.disabled,
                    "link--active": child === ctxMenuStore.selectChild
                  }],
                  key: gIndex + "_" + index + "_" + cIndex
                }, [
                  h("a", {
                    class: "vxe-context-menu--link",
                    onClick: function(evnt) {
                      $xetable.ctxMenuLinkEvent(evnt, child);
                    },
                    onMouseover: function(evnt) {
                      $xetable.ctxMenuMouseoverEvent(evnt, item, child);
                    },
                    onMouseout: function(evnt) {
                      $xetable.ctxMenuMouseoutEvent(evnt, item);
                    }
                  }, [
                    h("i", {
                      class: ["vxe-context-menu--link-prefix", child.prefixIcon]
                    }),
                    h("span", {
                      class: "vxe-context-menu--link-content"
                    }, getFuncText(child.name))
                  ])
                ]);
              })) : null
            ]);
          }));
        }))
      ]);
    };
    $xemenupanel.renderVN = renderVN;
    return $xemenupanel;
  },
  render: function() {
    return this.renderVN();
  }
});
var EVENT_KEYS = {
  F2: "F2",
  ESCAPE: "Escape",
  ENTER: "Enter",
  TAB: "Tab",
  DELETE: "Delete",
  BACKSPACE: "Backspace",
  SPACEBAR: " ",
  CONTEXT_MENU: "ContextMenu",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown"
};
var convertEventKeys = {
  " ": "Spacebar",
  Apps: EVENT_KEYS.CONTEXT_MENU,
  Del: EVENT_KEYS.DELETE,
  Up: EVENT_KEYS.ARROW_UP,
  Down: EVENT_KEYS.ARROW_DOWN,
  Left: EVENT_KEYS.ARROW_LEFT,
  Right: EVENT_KEYS.ARROW_RIGHT
};
var wheelName = browse.firefox ? "DOMMouseScroll" : "mousewheel";
var eventStore$1 = [];
var hasEventKey = function(evnt, targetKey) {
  var key = evnt.key;
  targetKey = targetKey.toLowerCase();
  return key ? targetKey === key.toLowerCase() || !!(convertEventKeys[key] && convertEventKeys[key].toLowerCase() === targetKey) : false;
};
function triggerEvent(evnt) {
  var isWheel = evnt.type === wheelName;
  eventStore$1.forEach(function(_a) {
    var type = _a.type, cb = _a.cb;
    if (!evnt.cancelBubble) {
      if (type === evnt.type || isWheel && type === "mousewheel") {
        cb(evnt);
      }
    }
  });
}
var GlobalEvent = {
  on: function(comp, type, cb) {
    eventStore$1.push({ comp, type, cb });
  },
  off: function(comp, type) {
    xeUtils.remove(eventStore$1, function(item) {
      return item.comp === comp && item.type === type;
    });
  },
  trigger: triggerEvent,
  eqKeypad: function(evnt, keyVal) {
    var key = evnt.key;
    if (keyVal.toLowerCase() === key.toLowerCase()) {
      return true;
    }
    return false;
  }
};
if (browse.isDoc) {
  if (!browse.msie) {
    document.addEventListener("copy", triggerEvent, false);
    document.addEventListener("cut", triggerEvent, false);
    document.addEventListener("paste", triggerEvent, false);
  }
  document.addEventListener("keydown", triggerEvent, false);
  document.addEventListener("contextmenu", triggerEvent, false);
  window.addEventListener("mousedown", triggerEvent, false);
  window.addEventListener("blur", triggerEvent, false);
  window.addEventListener("resize", triggerEvent, false);
  window.addEventListener(wheelName, xeUtils.throttle(triggerEvent, 100, { leading: true, trailing: false }), { passive: true, capture: false });
}
var __assign$c = function() {
  __assign$c = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$c.apply(this, arguments);
};
var tableMenuMethodKeys = ["closeMenu"];
var tableMenuHook = {
  setupTable: function($xetable) {
    var xID = $xetable.xID, props = $xetable.props, reactData = $xetable.reactData, internalData = $xetable.internalData;
    var _a = $xetable.getRefMaps(), refElem = _a.refElem, refTableFilter = _a.refTableFilter, refTableMenu = _a.refTableMenu;
    var _b = $xetable.getComputeMaps(), computeMouseOpts = _b.computeMouseOpts, computeIsMenu = _b.computeIsMenu, computeMenuOpts = _b.computeMenuOpts;
    var menuMethods = {};
    var menuPrivateMethods = {};
    var openContextMenu = function(evnt, type, params) {
      var ctxMenuStore = reactData.ctxMenuStore;
      var isMenu = computeIsMenu.value;
      var menuOpts = computeMenuOpts.value;
      var config2 = menuOpts[type];
      var visibleMethod = menuOpts.visibleMethod;
      if (config2) {
        var options_1 = config2.options, disabled = config2.disabled;
        if (disabled) {
          evnt.preventDefault();
        } else if (isMenu && options_1 && options_1.length) {
          params.options = options_1;
          $xetable.preventEvent(evnt, "event.showMenu", params, function() {
            if (!visibleMethod || visibleMethod(params)) {
              evnt.preventDefault();
              $xetable.updateZindex();
              var _a2 = getDomNode(), scrollTop_1 = _a2.scrollTop, scrollLeft_1 = _a2.scrollLeft, visibleHeight_1 = _a2.visibleHeight, visibleWidth_1 = _a2.visibleWidth;
              var top_1 = evnt.clientY + scrollTop_1;
              var left_1 = evnt.clientX + scrollLeft_1;
              var handleVisible_1 = function() {
                internalData._currMenuParams = params;
                Object.assign(ctxMenuStore, {
                  visible: true,
                  list: options_1,
                  selected: null,
                  selectChild: null,
                  showChild: false,
                  style: {
                    zIndex: internalData.tZindex,
                    top: top_1 + "px",
                    left: left_1 + "px"
                  }
                });
                nextTick(function() {
                  var tableMenu = refTableMenu.value;
                  var ctxElem = tableMenu.getRefMaps().refElem.value;
                  var clientHeight = ctxElem.clientHeight;
                  var clientWidth = ctxElem.clientWidth;
                  var _a3 = getAbsolutePos(ctxElem), boundingTop = _a3.boundingTop, boundingLeft = _a3.boundingLeft;
                  var offsetTop = boundingTop + clientHeight - visibleHeight_1;
                  var offsetLeft = boundingLeft + clientWidth - visibleWidth_1;
                  if (offsetTop > -10) {
                    ctxMenuStore.style.top = Math.max(scrollTop_1 + 2, top_1 - clientHeight - 2) + "px";
                  }
                  if (offsetLeft > -10) {
                    ctxMenuStore.style.left = Math.max(scrollLeft_1 + 2, left_1 - clientWidth - 2) + "px";
                  }
                });
              };
              var keyboard = params.keyboard, row_1 = params.row, column_1 = params.column;
              if (keyboard && row_1 && column_1) {
                $xetable.scrollToRow(row_1, column_1).then(function() {
                  var cell = $xetable.getCell(row_1, column_1);
                  if (cell) {
                    var _a3 = getAbsolutePos(cell), boundingTop = _a3.boundingTop, boundingLeft = _a3.boundingLeft;
                    top_1 = boundingTop + scrollTop_1 + Math.floor(cell.offsetHeight / 2);
                    left_1 = boundingLeft + scrollLeft_1 + Math.floor(cell.offsetWidth / 2);
                  }
                  handleVisible_1();
                });
              } else {
                handleVisible_1();
              }
            } else {
              menuMethods.closeMenu();
            }
          });
        }
      }
      $xetable.closeFilter();
    };
    menuMethods = {
      closeMenu: function() {
        Object.assign(reactData.ctxMenuStore, {
          visible: false,
          selected: null,
          selectChild: null,
          showChild: false
        });
        return nextTick();
      }
    };
    menuPrivateMethods = {
      moveCtxMenu: function(evnt, ctxMenuStore, property, hasOper, operRest, menuList) {
        var selectItem;
        var selectIndex = xeUtils.findIndexOf(menuList, function(item) {
          return ctxMenuStore[property] === item;
        });
        if (hasOper) {
          if (operRest && hasChildrenList(ctxMenuStore.selected)) {
            ctxMenuStore.showChild = true;
          } else {
            ctxMenuStore.showChild = false;
            ctxMenuStore.selectChild = null;
          }
        } else if (hasEventKey(evnt, EVENT_KEYS.ARROW_UP)) {
          for (var len = selectIndex - 1; len >= 0; len--) {
            if (menuList[len].visible !== false) {
              selectItem = menuList[len];
              break;
            }
          }
          ctxMenuStore[property] = selectItem || menuList[menuList.length - 1];
        } else if (hasEventKey(evnt, EVENT_KEYS.ARROW_DOWN)) {
          for (var index = selectIndex + 1; index < menuList.length; index++) {
            if (menuList[index].visible !== false) {
              selectItem = menuList[index];
              break;
            }
          }
          ctxMenuStore[property] = selectItem || menuList[0];
        } else if (ctxMenuStore[property] && (hasEventKey(evnt, EVENT_KEYS.ENTER) || hasEventKey(evnt, EVENT_KEYS.SPACEBAR))) {
          menuPrivateMethods.ctxMenuLinkEvent(evnt, ctxMenuStore[property]);
        }
      },
      handleGlobalContextmenuEvent: function(evnt) {
        var mouseConfig = props.mouseConfig, menuConfig = props.menuConfig;
        var editStore = reactData.editStore, ctxMenuStore = reactData.ctxMenuStore;
        var visibleColumn = internalData.visibleColumn;
        var tableFilter = refTableFilter.value;
        var tableMenu = refTableMenu.value;
        var mouseOpts = computeMouseOpts.value;
        var menuOpts = computeMenuOpts.value;
        var el = refElem.value;
        var selected = editStore.selected;
        var layoutList = ["header", "body", "footer"];
        if (isEnableConf(menuConfig)) {
          if (ctxMenuStore.visible && tableMenu && getEventTargetNode(evnt, tableMenu.getRefMaps().refElem.value).flag) {
            evnt.preventDefault();
            return;
          }
          if (internalData._keyCtx) {
            var type = "body";
            var params = { type, $table: $xetable, keyboard: true, columns: visibleColumn.slice(0), $event: evnt };
            if (mouseConfig && mouseOpts.area) {
              var activeArea = $xetable.getActiveCellArea();
              if (activeArea && activeArea.row && activeArea.column) {
                params.row = activeArea.row;
                params.column = activeArea.column;
                openContextMenu(evnt, type, params);
                return;
              }
            } else if (mouseConfig && mouseOpts.selected) {
              if (selected.row && selected.column) {
                params.row = selected.row;
                params.column = selected.column;
                openContextMenu(evnt, type, params);
                return;
              }
            }
          }
          for (var index = 0; index < layoutList.length; index++) {
            var layout = layoutList[index];
            var columnTargetNode = getEventTargetNode(evnt, el, "vxe-" + layout + "--column", function(target) {
              return target.parentNode.parentNode.parentNode.getAttribute("xid") === xID;
            });
            var params = { type: layout, $table: $xetable, columns: visibleColumn.slice(0), $event: evnt };
            if (columnTargetNode.flag) {
              var cell = columnTargetNode.targetElem;
              var columnNodeRest = $xetable.getColumnNode(cell);
              var column = columnNodeRest ? columnNodeRest.item : null;
              var typePrefix = layout + "-";
              if (column) {
                Object.assign(params, { column, columnIndex: $xetable.getColumnIndex(column), cell });
              }
              if (layout === "body") {
                var rowNodeRest = $xetable.getRowNode(cell.parentNode);
                var row = rowNodeRest ? rowNodeRest.item : null;
                typePrefix = "";
                if (row) {
                  params.row = row;
                  params.rowIndex = $xetable.getRowIndex(row);
                }
              }
              var eventType = typePrefix + "cell-menu";
              openContextMenu(evnt, layout, params);
              $xetable.dispatchEvent(eventType, params, evnt);
              return;
            } else if (getEventTargetNode(evnt, el, "vxe-table--" + layout + "-wrapper", function(target) {
              return target.getAttribute("xid") === xID;
            }).flag) {
              if (menuOpts.trigger === "cell") {
                evnt.preventDefault();
              } else {
                openContextMenu(evnt, layout, params);
              }
              return;
            }
          }
        }
        if (tableFilter && !getEventTargetNode(evnt, tableFilter.$el).flag) {
          $xetable.closeFilter();
        }
        menuMethods.closeMenu();
      },
      ctxMenuMouseoverEvent: function(evnt, item, child) {
        var menuElem = evnt.currentTarget;
        var ctxMenuStore = reactData.ctxMenuStore;
        evnt.preventDefault();
        evnt.stopPropagation();
        ctxMenuStore.selected = item;
        ctxMenuStore.selectChild = child;
        if (!child) {
          ctxMenuStore.showChild = hasChildrenList(item);
          if (ctxMenuStore.showChild) {
            nextTick(function() {
              var childWrapperElem = menuElem.nextElementSibling;
              if (childWrapperElem) {
                var _a2 = getAbsolutePos(menuElem), boundingTop = _a2.boundingTop, boundingLeft = _a2.boundingLeft, visibleHeight = _a2.visibleHeight, visibleWidth = _a2.visibleWidth;
                var posTop = boundingTop + menuElem.offsetHeight;
                var posLeft = boundingLeft + menuElem.offsetWidth;
                var left = "";
                var right = "";
                if (posLeft + childWrapperElem.offsetWidth > visibleWidth - 10) {
                  left = "auto";
                  right = menuElem.offsetWidth + "px";
                }
                var top_2 = "";
                var bottom = "";
                if (posTop + childWrapperElem.offsetHeight > visibleHeight - 10) {
                  top_2 = "auto";
                  bottom = "0";
                }
                childWrapperElem.style.left = left;
                childWrapperElem.style.right = right;
                childWrapperElem.style.top = top_2;
                childWrapperElem.style.bottom = bottom;
              }
            });
          }
        }
      },
      ctxMenuMouseoutEvent: function(evnt, item) {
        var ctxMenuStore = reactData.ctxMenuStore;
        if (!item.children) {
          ctxMenuStore.selected = null;
        }
        ctxMenuStore.selectChild = null;
      },
      ctxMenuLinkEvent: function(evnt, menu) {
        if (!menu.disabled && (menu.code || !menu.children || !menu.children.length)) {
          var ctxMenuMethod = VXETable.menus.get(menu.code);
          var params = Object.assign({}, internalData._currMenuParams, { menu, $table: $xetable, $grid: $xetable.xegrid, $event: evnt });
          if (ctxMenuMethod) {
            ctxMenuMethod(params, evnt);
          }
          $xetable.dispatchEvent("menu-click", params, evnt);
          menuMethods.closeMenu();
        }
      }
    };
    return __assign$c(__assign$c({}, menuMethods), menuPrivateMethods);
  },
  setupGrid: function($xegrid) {
    return $xegrid.extendTableMethods(tableMenuMethodKeys);
  }
};
var Menu = {
  Panel: PanelComponent,
  install: function(app) {
    VXETable.hooks.add("$tableMenu", tableMenuHook);
    dynamicApp.component(PanelComponent.name, PanelComponent);
    app.component(PanelComponent.name, PanelComponent);
  }
};
function useSize(props) {
  var xesize = inject("xesize", null);
  var computeSize = computed(function() {
    return props.size || (xesize ? xesize.value : null);
  });
  provide("xesize", computeSize);
  return computeSize;
}
var VxeButtonComponent = defineComponent({
  name: "VxeButton",
  props: {
    type: String,
    className: String,
    size: { type: String, default: function() {
      return GlobalConfig.button.size || GlobalConfig.size;
    } },
    name: [String, Number],
    content: String,
    placement: String,
    status: String,
    icon: String,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
    loading: Boolean,
    destroyOnClose: Boolean,
    transfer: { type: Boolean, default: function() {
      return GlobalConfig.button.transfer;
    } }
  },
  emits: [
    "click",
    "dropdown-click"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var reactData = reactive({
      inited: false,
      showPanel: false,
      animatVisible: false,
      panelIndex: 0,
      panelStyle: {},
      panelPlacement: ""
    });
    var internalData = {
      showTime: null
    };
    var refElem = ref();
    var refButton = ref();
    var refBtnPanel = ref();
    var refMaps = {
      refElem
    };
    var $xebutton = {
      xID,
      props,
      context,
      reactData,
      internalData,
      getRefMaps: function() {
        return refMaps;
      }
    };
    var buttonMethods = {};
    var computeIsFormBtn = computed(function() {
      var type = props.type;
      if (type) {
        return ["submit", "reset", "button"].indexOf(type) > -1;
      }
      return false;
    });
    var computeBtnType = computed(function() {
      var type = props.type;
      return type && type === "text" ? type : "button";
    });
    var updateZindex = function() {
      if (reactData.panelIndex < getLastZIndex()) {
        reactData.panelIndex = nextZIndex();
      }
    };
    var updatePlacement = function() {
      return nextTick().then(function() {
        var transfer = props.transfer, placement = props.placement;
        var panelIndex = reactData.panelIndex;
        var targetElem = refButton.value;
        var panelElem = refBtnPanel.value;
        if (panelElem && targetElem) {
          var targetHeight = targetElem.offsetHeight;
          var targetWidth = targetElem.offsetWidth;
          var panelHeight = panelElem.offsetHeight;
          var panelWidth = panelElem.offsetWidth;
          var marginSize = 5;
          var panelStyle = {
            zIndex: panelIndex
          };
          var _a = getAbsolutePos(targetElem), boundingTop = _a.boundingTop, boundingLeft = _a.boundingLeft, visibleHeight = _a.visibleHeight, visibleWidth = _a.visibleWidth;
          var panelPlacement = "bottom";
          if (transfer) {
            var left = boundingLeft + targetWidth - panelWidth;
            var top_1 = boundingTop + targetHeight;
            if (placement === "top") {
              panelPlacement = "top";
              top_1 = boundingTop - panelHeight;
            } else if (!placement) {
              if (top_1 + panelHeight + marginSize > visibleHeight) {
                panelPlacement = "top";
                top_1 = boundingTop - panelHeight;
              }
              if (top_1 < marginSize) {
                panelPlacement = "bottom";
                top_1 = boundingTop + targetHeight;
              }
            }
            if (left + panelWidth + marginSize > visibleWidth) {
              left -= left + panelWidth + marginSize - visibleWidth;
            }
            if (left < marginSize) {
              left = marginSize;
            }
            Object.assign(panelStyle, {
              left: left + "px",
              right: "auto",
              top: top_1 + "px",
              minWidth: targetWidth + "px"
            });
          } else {
            if (placement === "top") {
              panelPlacement = "top";
              panelStyle.bottom = targetHeight + "px";
            } else if (!placement) {
              if (boundingTop + targetHeight + panelHeight > visibleHeight) {
                if (boundingTop - targetHeight - panelHeight > marginSize) {
                  panelPlacement = "top";
                  panelStyle.bottom = targetHeight + "px";
                }
              }
            }
          }
          reactData.panelStyle = panelStyle;
          reactData.panelPlacement = panelPlacement;
          return nextTick();
        }
      });
    };
    var clickEvent = function(evnt) {
      buttonMethods.dispatchEvent("click", { $event: evnt }, evnt);
    };
    var mousedownDropdownEvent = function(evnt) {
      var isLeftBtn = evnt.button === 0;
      if (isLeftBtn) {
        evnt.stopPropagation();
      }
    };
    var clickDropdownEvent = function(evnt) {
      var dropdownElem = evnt.currentTarget;
      var panelElem = refBtnPanel.value;
      var _a = getEventTargetNode(evnt, dropdownElem, "vxe-button"), flag = _a.flag, targetElem = _a.targetElem;
      if (flag) {
        if (panelElem) {
          panelElem.dataset.active = "N";
        }
        reactData.showPanel = false;
        setTimeout(function() {
          if (!panelElem || panelElem.dataset.active !== "Y") {
            reactData.animatVisible = false;
          }
        }, 350);
        buttonMethods.dispatchEvent("dropdown-click", { name: targetElem.getAttribute("name"), $event: evnt }, evnt);
      }
    };
    var mouseenterEvent = function() {
      var panelElem = refBtnPanel.value;
      if (panelElem) {
        panelElem.dataset.active = "Y";
        reactData.animatVisible = true;
        setTimeout(function() {
          if (panelElem.dataset.active === "Y") {
            reactData.showPanel = true;
            updateZindex();
            updatePlacement();
            setTimeout(function() {
              if (reactData.showPanel) {
                updatePlacement();
              }
            }, 50);
          }
        }, 20);
      }
    };
    var mouseenterTargetEvent = function() {
      var panelElem = refBtnPanel.value;
      if (panelElem) {
        panelElem.dataset.active = "Y";
        if (!reactData.inited) {
          reactData.inited = true;
        }
        internalData.showTime = setTimeout(function() {
          if (panelElem.dataset.active === "Y") {
            mouseenterEvent();
          } else {
            reactData.animatVisible = false;
          }
        }, 250);
      }
    };
    var closePanel = function() {
      var panelElem = refBtnPanel.value;
      clearTimeout(internalData.showTime);
      if (panelElem) {
        panelElem.dataset.active = "N";
        setTimeout(function() {
          if (panelElem.dataset.active !== "Y") {
            reactData.showPanel = false;
            setTimeout(function() {
              if (panelElem.dataset.active !== "Y") {
                reactData.animatVisible = false;
              }
            }, 350);
          }
        }, 100);
      } else {
        reactData.animatVisible = false;
        reactData.showPanel = false;
      }
    };
    var mouseleaveEvent = function() {
      closePanel();
    };
    var renderContent = function() {
      var content = props.content, icon = props.icon, loading = props.loading;
      var contVNs = [];
      if (loading) {
        contVNs.push(h("i", {
          class: ["vxe-button--loading-icon", GlobalConfig.icon.BUTTON_LOADING]
        }));
      } else if (icon) {
        contVNs.push(h("i", {
          class: ["vxe-button--icon", icon]
        }));
      }
      if (slots.default) {
        contVNs.push(h("span", {
          class: "vxe-button--content"
        }, slots.default({})));
      } else if (content) {
        contVNs.push(h("span", {
          class: "vxe-button--content"
        }, getFuncText(content)));
      }
      return contVNs;
    };
    buttonMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $button: $xebutton, $event: evnt }, params));
      },
      focus: function() {
        var btnElem = refButton.value;
        btnElem.focus();
        return nextTick();
      },
      blur: function() {
        var btnElem = refButton.value;
        btnElem.blur();
        return nextTick();
      }
    };
    Object.assign($xebutton, buttonMethods);
    onMounted(function() {
      GlobalEvent.on($xebutton, "mousewheel", function(evnt) {
        var panelElem = refBtnPanel.value;
        if (reactData.showPanel && !getEventTargetNode(evnt, panelElem).flag) {
          closePanel();
        }
      });
    });
    onUnmounted(function() {
      GlobalEvent.off($xebutton, "mousewheel");
    });
    var renderVN = function() {
      var _a, _b, _c, _d;
      var className = props.className, transfer = props.transfer, type = props.type, round = props.round, circle = props.circle, destroyOnClose = props.destroyOnClose, status = props.status, name = props.name, disabled = props.disabled, loading = props.loading;
      var inited = reactData.inited, showPanel = reactData.showPanel;
      var isFormBtn = computeIsFormBtn.value;
      var btnType = computeBtnType.value;
      var vSize = computeSize.value;
      if (slots.dropdowns) {
        return h("div", {
          ref: refElem,
          class: ["vxe-button--dropdown", className, (_a = {}, _a["size--" + vSize] = vSize, _a["is--active"] = showPanel, _a)]
        }, [
          h("button", {
            ref: refButton,
            class: ["vxe-button", "type--" + btnType, (_b = {}, _b["size--" + vSize] = vSize, _b["theme--" + status] = status, _b["is--round"] = round, _b["is--circle"] = circle, _b["is--disabled"] = disabled || loading, _b["is--loading"] = loading, _b)],
            name,
            type: isFormBtn ? type : "button",
            disabled: disabled || loading,
            onMouseenter: mouseenterTargetEvent,
            onMouseleave: mouseleaveEvent,
            onClick: clickEvent
          }, renderContent().concat([
            h("i", {
              class: "vxe-button--dropdown-arrow " + GlobalConfig.icon.BUTTON_DROPDOWN
            })
          ])),
          h(Teleport, {
            to: "body",
            disabled: transfer ? !inited : true
          }, [
            h("div", {
              ref: refBtnPanel,
              class: ["vxe-button--dropdown-panel", (_c = {}, _c["size--" + vSize] = vSize, _c["animat--leave"] = reactData.animatVisible, _c["animat--enter"] = showPanel, _c)],
              placement: reactData.panelPlacement,
              style: reactData.panelStyle
            }, inited ? [
              h("div", {
                class: "vxe-button--dropdown-wrapper",
                onMousedown: mousedownDropdownEvent,
                onClick: clickDropdownEvent,
                onMouseenter: mouseenterEvent,
                onMouseleave: mouseleaveEvent
              }, destroyOnClose && !showPanel ? [] : slots.dropdowns({}))
            ] : [])
          ])
        ]);
      }
      return h("button", {
        ref: refButton,
        class: ["vxe-button", "type--" + btnType, (_d = {}, _d["size--" + vSize] = vSize, _d["theme--" + status] = status, _d["is--round"] = round, _d["is--circle"] = circle, _d["is--disabled"] = disabled || loading, _d["is--loading"] = loading, _d)],
        name,
        type: isFormBtn ? type : "button",
        disabled: disabled || loading,
        onClick: clickEvent
      }, renderContent());
    };
    $xebutton.renderVN = renderVN;
    return $xebutton;
  },
  render: function() {
    return this.renderVN();
  }
});
var __assign$b = function() {
  __assign$b = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$b.apply(this, arguments);
};
var allActivedModals = [];
var msgQueue = [];
var VxeModalComponent = defineComponent({
  name: "VxeModal",
  props: {
    modelValue: Boolean,
    id: String,
    type: { type: String, default: "modal" },
    loading: { type: Boolean, default: null },
    status: String,
    iconStatus: String,
    className: String,
    top: { type: [Number, String], default: function() {
      return GlobalConfig.modal.top;
    } },
    position: [String, Object],
    title: String,
    duration: { type: [Number, String], default: function() {
      return GlobalConfig.modal.duration;
    } },
    message: [Number, String],
    content: [Number, String],
    cancelButtonText: { type: String, default: function() {
      return GlobalConfig.modal.cancelButtonText;
    } },
    confirmButtonText: { type: String, default: function() {
      return GlobalConfig.modal.confirmButtonText;
    } },
    lockView: { type: Boolean, default: function() {
      return GlobalConfig.modal.lockView;
    } },
    lockScroll: Boolean,
    mask: { type: Boolean, default: function() {
      return GlobalConfig.modal.mask;
    } },
    maskClosable: { type: Boolean, default: function() {
      return GlobalConfig.modal.maskClosable;
    } },
    escClosable: { type: Boolean, default: function() {
      return GlobalConfig.modal.escClosable;
    } },
    resize: Boolean,
    showHeader: { type: Boolean, default: function() {
      return GlobalConfig.modal.showHeader;
    } },
    showFooter: { type: Boolean, default: function() {
      return GlobalConfig.modal.showFooter;
    } },
    showZoom: Boolean,
    showClose: { type: Boolean, default: function() {
      return GlobalConfig.modal.showClose;
    } },
    dblclickZoom: { type: Boolean, default: function() {
      return GlobalConfig.modal.dblclickZoom;
    } },
    width: [Number, String],
    height: [Number, String],
    minWidth: { type: [Number, String], default: function() {
      return GlobalConfig.modal.minWidth;
    } },
    minHeight: { type: [Number, String], default: function() {
      return GlobalConfig.modal.minHeight;
    } },
    zIndex: Number,
    marginSize: { type: [Number, String], default: function() {
      return GlobalConfig.modal.marginSize;
    } },
    fullscreen: Boolean,
    draggable: { type: Boolean, default: function() {
      return GlobalConfig.modal.draggable;
    } },
    remember: { type: Boolean, default: function() {
      return GlobalConfig.modal.remember;
    } },
    destroyOnClose: { type: Boolean, default: function() {
      return GlobalConfig.modal.destroyOnClose;
    } },
    showTitleOverflow: { type: Boolean, default: function() {
      return GlobalConfig.modal.showTitleOverflow;
    } },
    transfer: { type: Boolean, default: function() {
      return GlobalConfig.modal.transfer;
    } },
    storage: { type: Boolean, default: function() {
      return GlobalConfig.modal.storage;
    } },
    storageKey: { type: String, default: function() {
      return GlobalConfig.modal.storageKey;
    } },
    animat: { type: Boolean, default: function() {
      return GlobalConfig.modal.animat;
    } },
    size: { type: String, default: function() {
      return GlobalConfig.modal.size || GlobalConfig.size;
    } },
    beforeHideMethod: { type: Function, default: function() {
      return GlobalConfig.modal.beforeHideMethod;
    } },
    slots: Object
  },
  emits: [
    "update:modelValue",
    "show",
    "hide",
    "before-hide",
    "close",
    "confirm",
    "cancel",
    "zoom"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var reactData = reactive({
      inited: false,
      visible: false,
      contentVisible: false,
      modalTop: 0,
      modalZindex: 0,
      zoomLocat: null,
      firstOpen: false
    });
    var refElem = ref();
    var refModalBox = ref();
    var refConfirmBtn = ref();
    var refCancelBtn = ref();
    var refMaps = {
      refElem
    };
    var $xemodal = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: function() {
        return refMaps;
      }
    };
    var modalMethods = {};
    var computeIsMsg = computed(function() {
      return props.type === "message";
    });
    var getBox = function() {
      var boxElem = refModalBox.value;
      return boxElem;
    };
    var recalculate = function() {
      var width = props.width, height = props.height;
      var boxElem = getBox();
      boxElem.style.width = "" + (width ? isNaN(width) ? width : width + "px" : "");
      boxElem.style.height = "" + (height ? isNaN(height) ? height : height + "px" : "");
      return nextTick();
    };
    var updateZindex = function() {
      var zIndex = props.zIndex;
      var modalZindex = reactData.modalZindex;
      if (zIndex) {
        reactData.modalZindex = zIndex;
      } else if (modalZindex < getLastZIndex()) {
        reactData.modalZindex = nextZIndex();
      }
    };
    var updatePosition = function() {
      return nextTick().then(function() {
        var position = props.position;
        var marginSize = xeUtils.toNumber(props.marginSize);
        var boxElem = getBox();
        var clientVisibleWidth = document.documentElement.clientWidth || document.body.clientWidth;
        var clientVisibleHeight = document.documentElement.clientHeight || document.body.clientHeight;
        var isPosCenter = position === "center";
        var _a = xeUtils.isString(position) ? { top: position, left: position } : Object.assign({}, position), top = _a.top, left = _a.left;
        var topCenter = isPosCenter || top === "center";
        var leftCenter = isPosCenter || left === "center";
        var posTop = "";
        var posLeft = "";
        if (left && !leftCenter) {
          posLeft = isNaN(left) ? left : left + "px";
        } else {
          posLeft = Math.max(marginSize, clientVisibleWidth / 2 - boxElem.offsetWidth / 2) + "px";
        }
        if (top && !topCenter) {
          posTop = isNaN(top) ? top : top + "px";
        } else {
          posTop = Math.max(marginSize, clientVisibleHeight / 2 - boxElem.offsetHeight / 2) + "px";
        }
        boxElem.style.top = posTop;
        boxElem.style.left = posLeft;
      });
    };
    var updateStyle = function() {
      nextTick(function() {
        var offsetTop = 0;
        msgQueue.forEach(function(comp) {
          var boxElem = comp.getBox();
          offsetTop += xeUtils.toNumber(comp.props.top);
          comp.reactData.modalTop = offsetTop;
          offsetTop += boxElem.clientHeight;
        });
      });
    };
    var removeMsgQueue = function() {
      if (msgQueue.indexOf($xemodal) > -1) {
        xeUtils.remove(msgQueue, function(comp) {
          return comp === $xemodal;
        });
      }
      updateStyle();
    };
    var closeModal2 = function(type) {
      var remember = props.remember, beforeHideMethod = props.beforeHideMethod;
      var visible = reactData.visible;
      var isMsg = computeIsMsg.value;
      var params = { type };
      if (visible) {
        Promise.resolve(beforeHideMethod ? beforeHideMethod(params) : null).then(function(rest) {
          if (!xeUtils.isError(rest)) {
            if (isMsg) {
              removeMsgQueue();
            }
            reactData.contentVisible = false;
            if (!remember) {
              reactData.zoomLocat = null;
            }
            xeUtils.remove(allActivedModals, function(item) {
              return item === $xemodal;
            });
            modalMethods.dispatchEvent("before-hide", params);
            setTimeout(function() {
              reactData.visible = false;
              emit("update:modelValue", false);
              modalMethods.dispatchEvent("hide", params);
            }, 200);
          }
        }).catch(function(e) {
          return e;
        });
      }
      return nextTick();
    };
    var closeEvent = function(evnt) {
      var type = "close";
      modalMethods.dispatchEvent(type, { type }, evnt);
      closeModal2(type);
    };
    var confirmEvent = function(evnt) {
      var type = "confirm";
      modalMethods.dispatchEvent(type, { type }, evnt);
      closeModal2(type);
    };
    var cancelEvent = function(evnt) {
      var type = "cancel";
      modalMethods.dispatchEvent(type, { type }, evnt);
      closeModal2(type);
    };
    var getStorageMap = function(key) {
      var version = GlobalConfig.version;
      var rest = xeUtils.toStringJSON(localStorage.getItem(key) || "");
      return rest && rest._v === version ? rest : { _v: version };
    };
    var hasPosStorage = function() {
      var id = props.id, remember = props.remember, storage = props.storage, storageKey = props.storageKey;
      return !!(id && remember && storage && getStorageMap(storageKey)[id]);
    };
    var restorePosStorage = function() {
      var id = props.id, remember = props.remember, storage = props.storage, storageKey = props.storageKey;
      if (id && remember && storage) {
        var posStorage = getStorageMap(storageKey)[id];
        if (posStorage) {
          var boxElem = getBox();
          var _a = posStorage.split(","), left = _a[0], top_1 = _a[1], width = _a[2], height = _a[3], zoomLeft = _a[4], zoomTop = _a[5], zoomWidth = _a[6], zoomHeight = _a[7];
          if (left) {
            boxElem.style.left = left + "px";
          }
          if (top_1) {
            boxElem.style.top = top_1 + "px";
          }
          if (width) {
            boxElem.style.width = width + "px";
          }
          if (height) {
            boxElem.style.height = height + "px";
          }
          if (zoomLeft && zoomTop) {
            reactData.zoomLocat = {
              left: zoomLeft,
              top: zoomTop,
              width: zoomWidth,
              height: zoomHeight
            };
          }
        }
      }
    };
    var addMsgQueue = function() {
      if (msgQueue.indexOf($xemodal) === -1) {
        msgQueue.push($xemodal);
      }
      updateStyle();
    };
    var savePosStorage = function() {
      var id = props.id, remember = props.remember, storage = props.storage, storageKey = props.storageKey;
      var zoomLocat = reactData.zoomLocat;
      if (id && remember && storage) {
        var boxElem = getBox();
        var posStorageMap = getStorageMap(storageKey);
        posStorageMap[id] = [
          boxElem.style.left,
          boxElem.style.top,
          boxElem.style.width,
          boxElem.style.height
        ].concat(zoomLocat ? [
          zoomLocat.left,
          zoomLocat.top,
          zoomLocat.width,
          zoomLocat.height
        ] : []).map(function(val) {
          return val ? xeUtils.toNumber(val) : "";
        }).join(",");
        localStorage.setItem(storageKey, xeUtils.toJSONString(posStorageMap));
      }
    };
    var maximize = function() {
      return nextTick().then(function() {
        if (!reactData.zoomLocat) {
          var marginSize = xeUtils.toNumber(props.marginSize);
          var boxElem = getBox();
          var _a = getDomNode(), visibleHeight = _a.visibleHeight, visibleWidth = _a.visibleWidth;
          reactData.zoomLocat = {
            top: boxElem.offsetTop,
            left: boxElem.offsetLeft,
            width: boxElem.offsetWidth + (boxElem.style.width ? 0 : 1),
            height: boxElem.offsetHeight + (boxElem.style.height ? 0 : 1)
          };
          Object.assign(boxElem.style, {
            top: marginSize + "px",
            left: marginSize + "px",
            width: visibleWidth - marginSize * 2 + "px",
            height: visibleHeight - marginSize * 2 + "px"
          });
          savePosStorage();
        }
      });
    };
    var openModal2 = function() {
      var duration = props.duration, remember = props.remember, showFooter = props.showFooter;
      var inited = reactData.inited, visible = reactData.visible;
      var isMsg = computeIsMsg.value;
      if (!inited) {
        reactData.inited = true;
      }
      if (!visible) {
        if (!remember) {
          recalculate();
        }
        reactData.visible = true;
        reactData.contentVisible = false;
        updateZindex();
        allActivedModals.push($xemodal);
        setTimeout(function() {
          reactData.contentVisible = true;
          nextTick(function() {
            if (showFooter) {
              var confirmBtn = refConfirmBtn.value;
              var cancelBtn = refCancelBtn.value;
              var operBtn = confirmBtn || cancelBtn;
              if (operBtn) {
                operBtn.focus();
              }
            }
            var type = "";
            var params = { type };
            emit("update:modelValue", true);
            modalMethods.dispatchEvent("show", params);
          });
        }, 10);
        if (isMsg) {
          addMsgQueue();
          if (duration !== -1) {
            setTimeout(function() {
              return closeModal2("close");
            }, xeUtils.toNumber(duration));
          }
        } else {
          nextTick(function() {
            var fullscreen = props.fullscreen;
            var firstOpen = reactData.firstOpen;
            if (!remember || !firstOpen) {
              updatePosition().then(function() {
                setTimeout(function() {
                  return updatePosition();
                }, 20);
              });
            }
            if (!firstOpen) {
              reactData.firstOpen = true;
              if (hasPosStorage()) {
                restorePosStorage();
              } else if (fullscreen) {
                nextTick(function() {
                  return maximize();
                });
              }
            }
          });
        }
      }
      return nextTick();
    };
    var selfClickEvent = function(evnt) {
      var el = refElem.value;
      if (props.maskClosable && evnt.target === el) {
        var type = "mask";
        closeModal2(type);
      }
    };
    var handleGlobalKeydownEvent = function(evnt) {
      var isEsc = hasEventKey(evnt, EVENT_KEYS.ESCAPE);
      if (isEsc) {
        var lastModal_1 = xeUtils.max(allActivedModals, function(item) {
          return item.reactData.modalZindex;
        });
        if (lastModal_1) {
          setTimeout(function() {
            if (lastModal_1 === $xemodal && lastModal_1.props.escClosable) {
              closeModal2("exit");
            }
          }, 10);
        }
      }
    };
    var isMaximized = function() {
      return !!reactData.zoomLocat;
    };
    var revert = function() {
      return nextTick().then(function() {
        var zoomLocat = reactData.zoomLocat;
        if (zoomLocat) {
          var boxElem = getBox();
          reactData.zoomLocat = null;
          Object.assign(boxElem.style, {
            top: zoomLocat.top + "px",
            left: zoomLocat.left + "px",
            width: zoomLocat.width + "px",
            height: zoomLocat.height + "px"
          });
          savePosStorage();
        }
      });
    };
    var zoom = function() {
      if (reactData.zoomLocat) {
        return revert().then(function() {
          return isMaximized();
        });
      }
      return maximize().then(function() {
        return isMaximized();
      });
    };
    var toggleZoomEvent = function(evnt) {
      var zoomLocat = reactData.zoomLocat;
      var params = { type: zoomLocat ? "revert" : "max" };
      return zoom().then(function() {
        modalMethods.dispatchEvent("zoom", params, evnt);
      });
    };
    var getPosition = function() {
      var isMsg = computeIsMsg.value;
      if (!isMsg) {
        var boxElem = getBox();
        if (boxElem) {
          return {
            top: boxElem.offsetTop,
            left: boxElem.offsetLeft
          };
        }
      }
      return null;
    };
    var setPosition = function(top, left) {
      var isMsg = computeIsMsg.value;
      if (!isMsg) {
        var boxElem = getBox();
        if (xeUtils.isNumber(top)) {
          boxElem.style.top = top + "px";
        }
        if (xeUtils.isNumber(left)) {
          boxElem.style.left = left + "px";
        }
      }
      return nextTick();
    };
    var boxMousedownEvent = function() {
      var modalZindex = reactData.modalZindex;
      if (allActivedModals.some(function(comp) {
        return comp.reactData.visible && comp.reactData.modalZindex > modalZindex;
      })) {
        updateZindex();
      }
    };
    var mousedownEvent = function(evnt) {
      var remember = props.remember, storage = props.storage;
      var zoomLocat = reactData.zoomLocat;
      var marginSize = xeUtils.toNumber(props.marginSize);
      var boxElem = getBox();
      if (!zoomLocat && evnt.button === 0 && !getEventTargetNode(evnt, boxElem, "trigger--btn").flag) {
        evnt.preventDefault();
        var domMousemove_1 = document.onmousemove;
        var domMouseup_1 = document.onmouseup;
        var disX_1 = evnt.clientX - boxElem.offsetLeft;
        var disY_1 = evnt.clientY - boxElem.offsetTop;
        var _a = getDomNode(), visibleHeight_1 = _a.visibleHeight, visibleWidth_1 = _a.visibleWidth;
        document.onmousemove = function(evnt2) {
          evnt2.preventDefault();
          var offsetWidth = boxElem.offsetWidth;
          var offsetHeight = boxElem.offsetHeight;
          var minX = marginSize;
          var maxX = visibleWidth_1 - offsetWidth - marginSize - 1;
          var minY = marginSize;
          var maxY = visibleHeight_1 - offsetHeight - marginSize - 1;
          var left = evnt2.clientX - disX_1;
          var top = evnt2.clientY - disY_1;
          if (left > maxX) {
            left = maxX;
          }
          if (left < minX) {
            left = minX;
          }
          if (top > maxY) {
            top = maxY;
          }
          if (top < minY) {
            top = minY;
          }
          boxElem.style.left = left + "px";
          boxElem.style.top = top + "px";
        };
        document.onmouseup = function() {
          document.onmousemove = domMousemove_1;
          document.onmouseup = domMouseup_1;
          if (remember && storage) {
            nextTick(function() {
              savePosStorage();
            });
          }
        };
      }
    };
    var dragEvent = function(evnt) {
      evnt.preventDefault();
      var remember = props.remember, storage = props.storage;
      var _a = getDomNode(), visibleHeight = _a.visibleHeight, visibleWidth = _a.visibleWidth;
      var marginSize = xeUtils.toNumber(props.marginSize);
      var targetElem = evnt.target;
      var type = targetElem.getAttribute("type");
      var minWidth = xeUtils.toNumber(props.minWidth);
      var minHeight = xeUtils.toNumber(props.minHeight);
      var maxWidth = visibleWidth;
      var maxHeight = visibleHeight;
      var boxElem = getBox();
      var domMousemove = document.onmousemove;
      var domMouseup = document.onmouseup;
      var clientWidth = boxElem.clientWidth;
      var clientHeight = boxElem.clientHeight;
      var disX = evnt.clientX;
      var disY = evnt.clientY;
      var offsetTop = boxElem.offsetTop;
      var offsetLeft = boxElem.offsetLeft;
      var params = { type: "resize" };
      document.onmousemove = function(evnt2) {
        evnt2.preventDefault();
        var dragLeft;
        var dragTop;
        var width;
        var height;
        switch (type) {
          case "wl":
            dragLeft = disX - evnt2.clientX;
            width = dragLeft + clientWidth;
            if (offsetLeft - dragLeft > marginSize) {
              if (width > minWidth) {
                boxElem.style.width = (width < maxWidth ? width : maxWidth) + "px";
                boxElem.style.left = offsetLeft - dragLeft + "px";
              }
            }
            break;
          case "swst":
            dragLeft = disX - evnt2.clientX;
            dragTop = disY - evnt2.clientY;
            width = dragLeft + clientWidth;
            height = dragTop + clientHeight;
            if (offsetLeft - dragLeft > marginSize) {
              if (width > minWidth) {
                boxElem.style.width = (width < maxWidth ? width : maxWidth) + "px";
                boxElem.style.left = offsetLeft - dragLeft + "px";
              }
            }
            if (offsetTop - dragTop > marginSize) {
              if (height > minHeight) {
                boxElem.style.height = (height < maxHeight ? height : maxHeight) + "px";
                boxElem.style.top = offsetTop - dragTop + "px";
              }
            }
            break;
          case "swlb":
            dragLeft = disX - evnt2.clientX;
            dragTop = evnt2.clientY - disY;
            width = dragLeft + clientWidth;
            height = dragTop + clientHeight;
            if (offsetLeft - dragLeft > marginSize) {
              if (width > minWidth) {
                boxElem.style.width = (width < maxWidth ? width : maxWidth) + "px";
                boxElem.style.left = offsetLeft - dragLeft + "px";
              }
            }
            if (offsetTop + height + marginSize < visibleHeight) {
              if (height > minHeight) {
                boxElem.style.height = (height < maxHeight ? height : maxHeight) + "px";
              }
            }
            break;
          case "st":
            dragTop = disY - evnt2.clientY;
            height = clientHeight + dragTop;
            if (offsetTop - dragTop > marginSize) {
              if (height > minHeight) {
                boxElem.style.height = (height < maxHeight ? height : maxHeight) + "px";
                boxElem.style.top = offsetTop - dragTop + "px";
              }
            }
            break;
          case "wr":
            dragLeft = evnt2.clientX - disX;
            width = dragLeft + clientWidth;
            if (offsetLeft + width + marginSize < visibleWidth) {
              if (width > minWidth) {
                boxElem.style.width = (width < maxWidth ? width : maxWidth) + "px";
              }
            }
            break;
          case "sest":
            dragLeft = evnt2.clientX - disX;
            dragTop = disY - evnt2.clientY;
            width = dragLeft + clientWidth;
            height = dragTop + clientHeight;
            if (offsetLeft + width + marginSize < visibleWidth) {
              if (width > minWidth) {
                boxElem.style.width = (width < maxWidth ? width : maxWidth) + "px";
              }
            }
            if (offsetTop - dragTop > marginSize) {
              if (height > minHeight) {
                boxElem.style.height = (height < maxHeight ? height : maxHeight) + "px";
                boxElem.style.top = offsetTop - dragTop + "px";
              }
            }
            break;
          case "selb":
            dragLeft = evnt2.clientX - disX;
            dragTop = evnt2.clientY - disY;
            width = dragLeft + clientWidth;
            height = dragTop + clientHeight;
            if (offsetLeft + width + marginSize < visibleWidth) {
              if (width > minWidth) {
                boxElem.style.width = (width < maxWidth ? width : maxWidth) + "px";
              }
            }
            if (offsetTop + height + marginSize < visibleHeight) {
              if (height > minHeight) {
                boxElem.style.height = (height < maxHeight ? height : maxHeight) + "px";
              }
            }
            break;
          case "sb":
            dragTop = evnt2.clientY - disY;
            height = dragTop + clientHeight;
            if (offsetTop + height + marginSize < visibleHeight) {
              if (height > minHeight) {
                boxElem.style.height = (height < maxHeight ? height : maxHeight) + "px";
              }
            }
            break;
        }
        boxElem.className = boxElem.className.replace(/\s?is--drag/, "") + " is--drag";
        if (remember && storage) {
          savePosStorage();
        }
        modalMethods.dispatchEvent("zoom", params, evnt2);
      };
      document.onmouseup = function() {
        reactData.zoomLocat = null;
        document.onmousemove = domMousemove;
        document.onmouseup = domMouseup;
        setTimeout(function() {
          boxElem.className = boxElem.className.replace(/\s?is--drag/, "");
        }, 50);
      };
    };
    var renderTitles = function() {
      var _a = props.slots, propSlots = _a === void 0 ? {} : _a, showClose = props.showClose, showZoom = props.showZoom, title = props.title;
      var zoomLocat = reactData.zoomLocat;
      var titleSlot = slots.title || propSlots.title;
      var titVNs = titleSlot ? titleSlot({ $modal: $xemodal }) : [
        h("span", {
          class: "vxe-modal--title"
        }, title ? getFuncText(title) : GlobalConfig.i18n("vxe.alert.title"))
      ];
      if (showZoom) {
        titVNs.push(h("i", {
          class: ["vxe-modal--zoom-btn", "trigger--btn", zoomLocat ? GlobalConfig.icon.MODAL_ZOOM_OUT : GlobalConfig.icon.MODAL_ZOOM_IN],
          title: GlobalConfig.i18n("vxe.modal.zoom" + (zoomLocat ? "Out" : "In")),
          onClick: toggleZoomEvent
        }));
      }
      if (showClose) {
        titVNs.push(h("i", {
          class: ["vxe-modal--close-btn", "trigger--btn", GlobalConfig.icon.MODAL_CLOSE],
          title: GlobalConfig.i18n("vxe.modal.close"),
          onClick: closeEvent
        }));
      }
      return titVNs;
    };
    var renderHeaders = function() {
      var _a = props.slots, propSlots = _a === void 0 ? {} : _a, showZoom = props.showZoom, draggable = props.draggable;
      var isMsg = computeIsMsg.value;
      var headerSlot = slots.header || propSlots.header;
      var headVNs = [];
      if (props.showHeader) {
        var headerOns = {};
        if (draggable) {
          headerOns.onMousedown = mousedownEvent;
        }
        if (showZoom && props.dblclickZoom && props.type === "modal") {
          headerOns.onDblclick = toggleZoomEvent;
        }
        headVNs.push(h("div", __assign$b({ class: ["vxe-modal--header", {
          "is--drag": draggable,
          "is--ellipsis": !isMsg && props.showTitleOverflow
        }] }, headerOns), headerSlot ? !reactData.inited || props.destroyOnClose && !reactData.visible ? [] : headerSlot({ $modal: $xemodal }) : renderTitles()));
      }
      return headVNs;
    };
    var renderBodys = function() {
      var _a = props.slots, propSlots = _a === void 0 ? {} : _a, status = props.status, message = props.message;
      var content = props.content || message;
      var isMsg = computeIsMsg.value;
      var defaultSlot = slots.default || propSlots.default;
      var contVNs = [];
      if (status) {
        contVNs.push(h("div", {
          class: "vxe-modal--status-wrapper"
        }, [
          h("i", {
            class: ["vxe-modal--status-icon", props.iconStatus || GlobalConfig.icon[("MODAL_" + status).toLocaleUpperCase()]]
          })
        ]));
      }
      contVNs.push(h("div", {
        class: "vxe-modal--content"
      }, defaultSlot ? !reactData.inited || props.destroyOnClose && !reactData.visible ? [] : defaultSlot({ $modal: $xemodal }) : getFuncText(content)));
      if (!isMsg) {
        contVNs.push(h("div", {
          class: ["vxe-loading", {
            "is--visible": props.loading
          }]
        }, [
          h("div", {
            class: "vxe-loading--spinner"
          })
        ]));
      }
      return [
        h("div", {
          class: "vxe-modal--body"
        }, contVNs)
      ];
    };
    var renderBtns = function() {
      var type = props.type;
      var btnVNs = [];
      if (type === "confirm") {
        btnVNs.push(h(VxeButtonComponent, {
          ref: refCancelBtn,
          content: props.cancelButtonText || GlobalConfig.i18n("vxe.button.cancel"),
          onClick: cancelEvent
        }));
      }
      btnVNs.push(h(VxeButtonComponent, {
        ref: refConfirmBtn,
        status: "primary",
        content: props.confirmButtonText || GlobalConfig.i18n("vxe.button.confirm"),
        onClick: confirmEvent
      }));
      return btnVNs;
    };
    var renderFooters = function() {
      var _a = props.slots, propSlots = _a === void 0 ? {} : _a;
      var isMsg = computeIsMsg.value;
      var footerSlot = slots.footer || propSlots.footer;
      var footVNs = [];
      if (props.showFooter) {
        footVNs.push(h("div", {
          class: "vxe-modal--footer"
        }, footerSlot ? !reactData.inited || props.destroyOnClose && !reactData.visible ? [] : footerSlot({ $modal: $xemodal }) : renderBtns()));
      }
      if (!isMsg && props.resize) {
        footVNs.push(h("span", {
          class: "vxe-modal--resize"
        }, ["wl", "wr", "swst", "sest", "st", "swlb", "selb", "sb"].map(function(type) {
          return h("span", {
            class: type + "-resize",
            type,
            onMousedown: dragEvent
          });
        })));
      }
      return footVNs;
    };
    modalMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $modal: $xemodal, $event: evnt }, params));
      },
      open: openModal2,
      close: function() {
        return closeModal2("close");
      },
      getBox,
      getPosition,
      setPosition,
      isMaximized,
      zoom,
      maximize,
      revert
    };
    Object.assign($xemodal, modalMethods);
    watch(function() {
      return props.width;
    }, recalculate);
    watch(function() {
      return props.height;
    }, recalculate);
    watch(function() {
      return props.modelValue;
    }, function(value) {
      if (value) {
        openModal2();
      } else {
        closeModal2("model");
      }
    });
    onMounted(function() {
      nextTick(function() {
        if (props.storage && !props.id) {
          errLog("vxe.error.reqProp", ["modal.id"]);
        }
        if (props.modelValue) {
          openModal2();
        }
        recalculate();
      });
      if (props.escClosable) {
        GlobalEvent.on($xemodal, "keydown", handleGlobalKeydownEvent);
      }
    });
    onUnmounted(function() {
      GlobalEvent.off($xemodal, "keydown");
      removeMsgQueue();
    });
    var renderVN = function() {
      var _a;
      var className = props.className, type = props.type, animat = props.animat, loading = props.loading, status = props.status, lockScroll = props.lockScroll, lockView = props.lockView, mask = props.mask, resize = props.resize;
      var inited = reactData.inited, zoomLocat = reactData.zoomLocat, modalTop = reactData.modalTop, contentVisible = reactData.contentVisible, visible = reactData.visible;
      var vSize = computeSize.value;
      return h(Teleport, {
        to: "body",
        disabled: props.transfer ? !inited : true
      }, [
        h("div", {
          ref: refElem,
          class: ["vxe-modal--wrapper", "type--" + type, className || "", (_a = {}, _a["size--" + vSize] = vSize, _a["status--" + status] = status, _a["is--animat"] = animat, _a["lock--scroll"] = lockScroll, _a["lock--view"] = lockView, _a["is--resize"] = resize, _a["is--mask"] = mask, _a["is--maximize"] = zoomLocat, _a["is--visible"] = contentVisible, _a["is--active"] = visible, _a["is--loading"] = loading, _a)],
          style: {
            zIndex: reactData.modalZindex,
            top: modalTop ? modalTop + "px" : null
          },
          onClick: selfClickEvent
        }, [
          h("div", {
            ref: refModalBox,
            class: "vxe-modal--box",
            onMousedown: boxMousedownEvent
          }, renderHeaders().concat(renderBodys(), renderFooters()))
        ])
      ]);
    };
    $xemodal.renderVN = renderVN;
    return $xemodal;
  },
  render: function() {
    return this.renderVN();
  }
});
var yearSize = 20;
var monthSize = 20;
var quarterSize = 8;
function toStringTimeDate(str) {
  if (str) {
    var rest = new Date();
    var h_1 = 0;
    var m = 0;
    var s = 0;
    if (xeUtils.isDate(str)) {
      h_1 = str.getHours();
      m = str.getMinutes();
      s = str.getSeconds();
    } else {
      str = xeUtils.toValueString(str);
      var parses = str.match(/^(\d{1,2})(:(\d{1,2}))?(:(\d{1,2}))?/);
      if (parses) {
        h_1 = xeUtils.toNumber(parses[1]);
        m = xeUtils.toNumber(parses[3]);
        s = xeUtils.toNumber(parses[5]);
      }
    }
    rest.setHours(h_1);
    rest.setMinutes(m);
    rest.setSeconds(s);
    return rest;
  }
  return new Date("");
}
var VxeInputConstructor = defineComponent({
  name: "VxeInput",
  props: {
    modelValue: [String, Number, Date],
    immediate: { type: Boolean, default: true },
    name: String,
    type: { type: String, default: "text" },
    clearable: { type: Boolean, default: function() {
      return GlobalConfig.input.clearable;
    } },
    readonly: Boolean,
    disabled: Boolean,
    placeholder: String,
    maxlength: [String, Number],
    autocomplete: { type: String, default: "off" },
    align: String,
    form: String,
    className: String,
    size: { type: String, default: function() {
      return GlobalConfig.input.size || GlobalConfig.size;
    } },
    min: { type: [String, Number], default: null },
    max: { type: [String, Number], default: null },
    step: [String, Number],
    exponential: { type: Boolean, default: function() {
      return GlobalConfig.input.exponential;
    } },
    controls: { type: Boolean, default: function() {
      return GlobalConfig.input.controls;
    } },
    digits: { type: [String, Number], default: function() {
      return GlobalConfig.input.digits;
    } },
    minDate: { type: [String, Number, Date], default: function() {
      return GlobalConfig.input.minDate;
    } },
    maxDate: { type: [String, Number, Date], default: function() {
      return GlobalConfig.input.maxDate;
    } },
    startWeek: Number,
    startDay: { type: [String, Number], default: function() {
      return GlobalConfig.input.startDay;
    } },
    labelFormat: { type: String, default: function() {
      return GlobalConfig.input.labelFormat;
    } },
    valueFormat: { type: String, default: function() {
      return GlobalConfig.input.valueFormat;
    } },
    editable: { type: Boolean, default: true },
    festivalMethod: { type: Function, default: function() {
      return GlobalConfig.input.festivalMethod;
    } },
    disabledMethod: { type: Function, default: function() {
      return GlobalConfig.input.disabledMethod;
    } },
    selectDay: { type: [String, Number], default: function() {
      return GlobalConfig.input.selectDay;
    } },
    prefixIcon: String,
    suffixIcon: String,
    placement: String,
    transfer: { type: Boolean, default: function() {
      return GlobalConfig.input.transfer;
    } }
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "keydown",
    "keyup",
    "wheel",
    "click",
    "focus",
    "blur",
    "clear",
    "search-click",
    "toggle-visible",
    "prev-number",
    "next-number",
    "prefix-click",
    "suffix-click",
    "date-prev",
    "date-today",
    "date-next"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var reactData = reactive({
      inited: false,
      panelIndex: 0,
      showPwd: false,
      visiblePanel: false,
      animatVisible: false,
      panelStyle: null,
      panelPlacement: "",
      isActivated: false,
      inputValue: props.modelValue,
      datetimePanelValue: null,
      datePanelValue: null,
      datePanelLabel: "",
      datePanelType: "day",
      selectMonth: null,
      currentDate: null
    });
    var refElem = ref();
    var refInputTarget = ref();
    var refInputPanel = ref();
    var refInputTimeBody = ref();
    var refMaps = {
      refElem,
      refInput: refInputTarget
    };
    var $xeinput = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: function() {
        return refMaps;
      }
    };
    var inputMethods = {};
    var computeIsDateTimeType = computed(function() {
      var type = props.type;
      return type === "time" || type === "datetime";
    });
    var computeIsNumType = computed(function() {
      return ["number", "integer", "float"].indexOf(props.type) > -1;
    });
    var computeIsDatePickerType = computed(function() {
      var isDateTimeType = computeIsDateTimeType.value;
      return isDateTimeType || ["date", "week", "month", "quarter", "year"].indexOf(props.type) > -1;
    });
    var computeIsPawdType = computed(function() {
      return props.type === "password";
    });
    var computeIsSearchType = computed(function() {
      return props.type === "search";
    });
    var computeDigitsValue = computed(function() {
      return xeUtils.toInteger(props.digits) || 1;
    });
    var computeStepValue = computed(function() {
      var type = props.type;
      var digitsValue = computeDigitsValue.value;
      var step = props.step;
      if (type === "integer") {
        return xeUtils.toInteger(step) || 1;
      } else if (type === "float") {
        return xeUtils.toNumber(step) || 1 / Math.pow(10, digitsValue);
      }
      return xeUtils.toNumber(step) || 1;
    });
    var computeIsClearable = computed(function() {
      var type = props.type;
      var isNumType = computeIsNumType.value;
      var isDatePickerType = computeIsDatePickerType.value;
      var isPawdType = computeIsPawdType.value;
      return props.clearable && (isPawdType || isNumType || isDatePickerType || type === "text" || type === "search");
    });
    var computeDateMinTime = computed(function() {
      return props.minDate ? xeUtils.toStringDate(props.minDate) : null;
    });
    var computeDateMaxTime = computed(function() {
      return props.maxDate ? xeUtils.toStringDate(props.maxDate) : null;
    });
    var computeDateValueFormat = computed(function() {
      var type = props.type;
      return type === "time" ? "HH:mm:ss" : props.valueFormat || (type === "datetime" ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd");
    });
    var computeDateValue = computed(function() {
      var modelValue = props.modelValue, type = props.type;
      var isDatePickerType = computeIsDatePickerType.value;
      var dateValueFormat = computeDateValueFormat.value;
      var val = null;
      if (modelValue && isDatePickerType) {
        var date = void 0;
        if (type === "time") {
          date = toStringTimeDate(modelValue);
        } else {
          date = xeUtils.toStringDate(modelValue, dateValueFormat);
        }
        if (xeUtils.isValidDate(date)) {
          val = date;
        }
      }
      return val;
    });
    var computeIsDisabledPrevDateBtn = computed(function() {
      var dateMinTime = computeDateMinTime.value;
      var selectMonth = reactData.selectMonth;
      if (selectMonth && dateMinTime) {
        return selectMonth <= dateMinTime;
      }
      return false;
    });
    var computeIsDisabledNextDateBtn = computed(function() {
      var dateMaxTime = computeDateMaxTime.value;
      var selectMonth = reactData.selectMonth;
      if (selectMonth && dateMaxTime) {
        return selectMonth >= dateMaxTime;
      }
      return false;
    });
    var computeDateTimeLabel = computed(function() {
      var datetimePanelValue = reactData.datetimePanelValue;
      if (datetimePanelValue) {
        return xeUtils.toDateString(datetimePanelValue, "HH:mm:ss");
      }
      return "";
    });
    var computeDateHMSTime = computed(function() {
      var dateValue = computeDateValue.value;
      var isDateTimeType = computeIsDateTimeType.value;
      return dateValue && isDateTimeType ? (dateValue.getHours() * 3600 + dateValue.getMinutes() * 60 + dateValue.getSeconds()) * 1e3 : 0;
    });
    var computeDateLabelFormat = computed(function() {
      var isDatePickerType = computeIsDatePickerType.value;
      if (isDatePickerType) {
        return props.labelFormat || GlobalConfig.i18n("vxe.input.date.labelFormat." + props.type);
      }
      return null;
    });
    var computeYearList = computed(function() {
      var selectMonth = reactData.selectMonth, currentDate = reactData.currentDate;
      var years = [];
      if (selectMonth && currentDate) {
        var currFullYear = currentDate.getFullYear();
        var startYear = new Date(xeUtils.toNumber(("" + selectMonth.getFullYear()).replace(/\d{1}$/, "0")), 0, 1);
        for (var index = -10; index < yearSize - 10; index++) {
          var date = xeUtils.getWhatYear(startYear, index, "first");
          var itemFullYear = date.getFullYear();
          years.push({
            date,
            isCurrent: true,
            isNow: currFullYear === itemFullYear,
            year: itemFullYear
          });
        }
      }
      return years;
    });
    var computeSelectDatePanelLabel = computed(function() {
      var isDatePickerType = computeIsDatePickerType.value;
      if (isDatePickerType) {
        var datePanelType = reactData.datePanelType, selectMonth = reactData.selectMonth;
        var yearList = computeYearList.value;
        var year = "";
        var month = void 0;
        if (selectMonth) {
          year = selectMonth.getFullYear();
          month = selectMonth.getMonth() + 1;
        }
        if (datePanelType === "quarter") {
          return GlobalConfig.i18n("vxe.input.date.quarterLabel", [year]);
        } else if (datePanelType === "month") {
          return GlobalConfig.i18n("vxe.input.date.monthLabel", [year]);
        } else if (datePanelType === "year") {
          return yearList.length ? yearList[0].year + " - " + yearList[yearList.length - 1].year : "";
        }
        return GlobalConfig.i18n("vxe.input.date.dayLabel", [year, month ? GlobalConfig.i18n("vxe.input.date.m" + month) : "-"]);
      }
      return "";
    });
    var computeWeekDatas = computed(function() {
      var weeks = [];
      var isDatePickerType = computeIsDatePickerType.value;
      if (isDatePickerType) {
        var startDay = props.startDay, startWeek = props.startWeek;
        var sWeek = xeUtils.toNumber(xeUtils.isNumber(startDay) || xeUtils.isString(startDay) ? startDay : startWeek);
        weeks.push(sWeek);
        for (var index = 0; index < 6; index++) {
          if (sWeek >= 6) {
            sWeek = 0;
          } else {
            sWeek++;
          }
          weeks.push(sWeek);
        }
      }
      return weeks;
    });
    var computeDateHeaders = computed(function() {
      var isDatePickerType = computeIsDatePickerType.value;
      if (isDatePickerType) {
        var weekDatas = computeWeekDatas.value;
        return weekDatas.map(function(day) {
          return {
            value: day,
            label: GlobalConfig.i18n("vxe.input.date.weeks.w" + day)
          };
        });
      }
      return [];
    });
    var computeWeekHeaders = computed(function() {
      var isDatePickerType = computeIsDatePickerType.value;
      if (isDatePickerType) {
        var dateHeaders = computeDateHeaders.value;
        return [{ label: GlobalConfig.i18n("vxe.input.date.weeks.w") }].concat(dateHeaders);
      }
      return [];
    });
    var computeYearDatas = computed(function() {
      var yearList = computeYearList.value;
      return xeUtils.chunk(yearList, 4);
    });
    var getDateQuarter = function(date) {
      var month = date.getMonth();
      if (month < 3) {
        return 1;
      } else if (month < 6) {
        return 2;
      } else if (month < 9) {
        return 3;
      }
      return 4;
    };
    var computeQuarterList = computed(function() {
      var selectMonth = reactData.selectMonth, currentDate = reactData.currentDate;
      var quarters = [];
      if (selectMonth && currentDate) {
        var currFullYear = currentDate.getFullYear();
        var currQuarter = getDateQuarter(currentDate);
        var firstYear = xeUtils.getWhatYear(selectMonth, 0, "first");
        var selFullYear = firstYear.getFullYear();
        for (var index = -2; index < quarterSize - 2; index++) {
          var date = xeUtils.getWhatQuarter(firstYear, index);
          var itemFullYear = date.getFullYear();
          var itemQuarter = getDateQuarter(date);
          var isPrev = itemFullYear < selFullYear;
          quarters.push({
            date,
            isPrev,
            isCurrent: itemFullYear === selFullYear,
            isNow: itemFullYear === currFullYear && itemQuarter === currQuarter,
            isNext: !isPrev && itemFullYear > selFullYear,
            quarter: itemQuarter
          });
        }
      }
      return quarters;
    });
    var computeQuarterDatas = computed(function() {
      var quarterList = computeQuarterList.value;
      return xeUtils.chunk(quarterList, 2);
    });
    var computeMonthList = computed(function() {
      var selectMonth = reactData.selectMonth, currentDate = reactData.currentDate;
      var months = [];
      if (selectMonth && currentDate) {
        var currFullYear = currentDate.getFullYear();
        var currMonth = currentDate.getMonth();
        var selFullYear = xeUtils.getWhatYear(selectMonth, 0, "first").getFullYear();
        for (var index = -4; index < monthSize - 4; index++) {
          var date = xeUtils.getWhatYear(selectMonth, 0, index);
          var itemFullYear = date.getFullYear();
          var itemMonth = date.getMonth();
          var isPrev = itemFullYear < selFullYear;
          months.push({
            date,
            isPrev,
            isCurrent: itemFullYear === selFullYear,
            isNow: itemFullYear === currFullYear && itemMonth === currMonth,
            isNext: !isPrev && itemFullYear > selFullYear,
            month: itemMonth
          });
        }
      }
      return months;
    });
    var computeMonthDatas = computed(function() {
      var monthList = computeMonthList.value;
      return xeUtils.chunk(monthList, 4);
    });
    var computeDayList = computed(function() {
      var selectMonth = reactData.selectMonth, currentDate = reactData.currentDate;
      var days = [];
      if (selectMonth && currentDate) {
        var dateHMSTime = computeDateHMSTime.value;
        var weekDatas = computeWeekDatas.value;
        var currFullYear = currentDate.getFullYear();
        var currMonth = currentDate.getMonth();
        var currDate = currentDate.getDate();
        var selFullYear = selectMonth.getFullYear();
        var selMonth = selectMonth.getMonth();
        var selDay = selectMonth.getDay();
        var prevOffsetDate = -weekDatas.indexOf(selDay);
        var startDate = new Date(xeUtils.getWhatDay(selectMonth, prevOffsetDate).getTime() + dateHMSTime);
        for (var index = 0; index < 42; index++) {
          var date = xeUtils.getWhatDay(startDate, index);
          var itemFullYear = date.getFullYear();
          var itemMonth = date.getMonth();
          var itemDate = date.getDate();
          var isPrev = date < selectMonth;
          days.push({
            date,
            isPrev,
            isCurrent: itemFullYear === selFullYear && itemMonth === selMonth,
            isNow: itemFullYear === currFullYear && itemMonth === currMonth && itemDate === currDate,
            isNext: !isPrev && selMonth !== itemMonth,
            label: itemDate
          });
        }
      }
      return days;
    });
    var computeDayDatas = computed(function() {
      var dayList = computeDayList.value;
      return xeUtils.chunk(dayList, 7);
    });
    var computeWeekDates = computed(function() {
      var dayDatas = computeDayDatas.value;
      return dayDatas.map(function(list) {
        var firstItem = list[0];
        var item = {
          date: firstItem.date,
          isWeekNumber: true,
          isPrev: false,
          isCurrent: false,
          isNow: false,
          isNext: false,
          label: xeUtils.getYearWeek(firstItem.date)
        };
        return [item].concat(list);
      });
    });
    var computeHourList = computed(function() {
      var list = [];
      var isDateTimeType = computeIsDateTimeType.value;
      if (isDateTimeType) {
        for (var index = 0; index < 24; index++) {
          list.push({
            value: index,
            label: ("" + index).padStart(2, "0")
          });
        }
      }
      return list;
    });
    var computeMinuteList = computed(function() {
      var list = [];
      var isDateTimeType = computeIsDateTimeType.value;
      if (isDateTimeType) {
        for (var index = 0; index < 60; index++) {
          list.push({
            value: index,
            label: ("" + index).padStart(2, "0")
          });
        }
      }
      return list;
    });
    var computeSecondList = computed(function() {
      var minuteList = computeMinuteList.value;
      return minuteList;
    });
    var computeInpReadonly = computed(function() {
      var type = props.type, readonly = props.readonly, editable = props.editable;
      return readonly || !editable || type === "week" || type === "quarter";
    });
    var computeInputType = computed(function() {
      var type = props.type;
      var showPwd = reactData.showPwd;
      var isNumType = computeIsNumType.value;
      var isDatePickerType = computeIsDatePickerType.value;
      var isPawdType = computeIsPawdType.value;
      if (isDatePickerType || isNumType || isPawdType && showPwd || type === "number") {
        return "text";
      }
      return type;
    });
    var computeInpPlaceholder = computed(function() {
      var placeholder = props.placeholder;
      if (placeholder) {
        return getFuncText(placeholder);
      }
      return "";
    });
    var computeInpMaxlength = computed(function() {
      var maxlength = props.maxlength;
      var isNumType = computeIsNumType.value;
      return isNumType && !xeUtils.toNumber(maxlength) ? 16 : maxlength;
    });
    var computeInpImmediate = computed(function() {
      var type = props.type, immediate = props.immediate;
      return immediate || !(type === "text" || type === "number" || type === "integer" || type === "float");
    });
    function getNumberValue(val) {
      var type = props.type, exponential = props.exponential;
      var inpMaxlength = computeInpMaxlength.value;
      var digitsValue = computeDigitsValue.value;
      var restVal = type === "float" ? xeUtils.toFixed(xeUtils.floor(val, digitsValue), digitsValue) : xeUtils.toValueString(val);
      if (exponential && (val === restVal || xeUtils.toValueString(val).toLowerCase() === xeUtils.toNumber(restVal).toExponential())) {
        return val;
      }
      return restVal.slice(0, inpMaxlength);
    }
    var triggerEvent2 = function(evnt) {
      var inputValue = reactData.inputValue;
      inputMethods.dispatchEvent(evnt.type, { value: inputValue }, evnt);
    };
    var emitModel = function(value, evnt) {
      reactData.inputValue = value;
      emit("update:modelValue", value);
      inputMethods.dispatchEvent("input", { value }, evnt);
      if (xeUtils.toValueString(props.modelValue) !== value) {
        inputMethods.dispatchEvent("change", { value }, evnt);
      }
    };
    var emitInputEvent = function(value, evnt) {
      var isDatePickerType = computeIsDatePickerType.value;
      var inpImmediate = computeInpImmediate.value;
      reactData.inputValue = value;
      if (!isDatePickerType) {
        if (inpImmediate) {
          emitModel(value, evnt);
        } else {
          inputMethods.dispatchEvent("input", { value }, evnt);
        }
      }
    };
    var inputEvent = function(evnt) {
      var inputElem = evnt.target;
      var value = inputElem.value;
      emitInputEvent(value, evnt);
    };
    var changeEvent = function(evnt) {
      var inpImmediate = computeInpImmediate.value;
      if (!inpImmediate) {
        triggerEvent2(evnt);
      }
    };
    var focusEvent = function(evnt) {
      reactData.isActivated = true;
      triggerEvent2(evnt);
    };
    var clickPrefixEvent = function(evnt) {
      var disabled = props.disabled;
      if (!disabled) {
        var inputValue = reactData.inputValue;
        inputMethods.dispatchEvent("prefix-click", { value: inputValue }, evnt);
      }
    };
    var hidePanelTimeout;
    var hidePanel = function() {
      reactData.visiblePanel = false;
      hidePanelTimeout = window.setTimeout(function() {
        reactData.animatVisible = false;
      }, 350);
    };
    var clearValueEvent = function(evnt, value) {
      var type = props.type;
      var isNumType = computeIsNumType.value;
      var isDatePickerType = computeIsDatePickerType.value;
      if (isDatePickerType) {
        hidePanel();
      }
      if (isNumType || ["text", "search", "password"].indexOf(type) > -1) {
        focus();
      }
      inputMethods.dispatchEvent("clear", { value }, evnt);
    };
    var clickSuffixEvent = function(evnt) {
      var disabled = props.disabled;
      if (!disabled) {
        if (hasClass(evnt.currentTarget, "is--clear")) {
          emitModel("", evnt);
          clearValueEvent(evnt, "");
        } else {
          var inputValue = reactData.inputValue;
          inputMethods.dispatchEvent("suffix-click", { value: inputValue }, evnt);
        }
      }
    };
    var dateParseValue = function(value) {
      var type = props.type;
      var valueFormat = props.valueFormat;
      var dateLabelFormat = computeDateLabelFormat.value;
      var dValue = null;
      var dLabel = "";
      if (value) {
        if (type === "time") {
          dValue = toStringTimeDate(value);
        } else {
          dValue = xeUtils.toStringDate(value, valueFormat);
        }
      }
      if (xeUtils.isValidDate(dValue)) {
        dLabel = xeUtils.toDateString(dValue, dateLabelFormat);
      } else {
        dValue = null;
      }
      reactData.datePanelValue = dValue;
      reactData.datePanelLabel = dLabel;
    };
    var changeValue = function() {
      var isDatePickerType = computeIsDatePickerType.value;
      var inputValue = reactData.inputValue;
      if (isDatePickerType) {
        dateParseValue(inputValue);
        reactData.inputValue = reactData.datePanelLabel;
      }
    };
    var initValue = function() {
      var type = props.type;
      var inputValue = reactData.inputValue;
      var isDatePickerType = computeIsDatePickerType.value;
      var digitsValue = computeDigitsValue.value;
      if (isDatePickerType) {
        changeValue();
      } else if (type === "float") {
        if (inputValue) {
          var validValue = xeUtils.toFixed(xeUtils.floor(inputValue, digitsValue), digitsValue);
          if (inputValue !== validValue) {
            emitModel(validValue, { type: "init" });
          }
        }
      }
    };
    var vaildMaxNum = function(num) {
      return props.max === null || xeUtils.toNumber(num) <= xeUtils.toNumber(props.max);
    };
    var vaildMinNum = function(num) {
      return props.min === null || xeUtils.toNumber(num) >= xeUtils.toNumber(props.min);
    };
    var dateRevert = function() {
      reactData.inputValue = reactData.datePanelLabel;
    };
    var dateCheckMonth = function(date) {
      var month = xeUtils.getWhatMonth(date, 0, "first");
      if (!xeUtils.isEqual(month, reactData.selectMonth)) {
        reactData.selectMonth = month;
      }
    };
    var dateChange = function(date) {
      var modelValue = props.modelValue;
      var datetimePanelValue = reactData.datetimePanelValue;
      var isDateTimeType = computeIsDateTimeType.value;
      var dateValueFormat = computeDateValueFormat.value;
      if (props.type === "week") {
        var sWeek = xeUtils.toNumber(props.selectDay);
        date = xeUtils.getWhatWeek(date, 0, sWeek);
      } else if (isDateTimeType) {
        date.setHours(datetimePanelValue.getHours());
        date.setMinutes(datetimePanelValue.getMinutes());
        date.setSeconds(datetimePanelValue.getSeconds());
      }
      var inpVal = xeUtils.toDateString(date, dateValueFormat);
      dateCheckMonth(date);
      if (!xeUtils.isEqual(modelValue, inpVal)) {
        emitModel(inpVal, { type: "update" });
      }
    };
    var afterCheckValue = function() {
      var type = props.type, min = props.min, max = props.max, exponential = props.exponential;
      var inputValue = reactData.inputValue, datetimePanelValue = reactData.datetimePanelValue;
      var isNumType = computeIsNumType.value;
      var isDatePickerType = computeIsDatePickerType.value;
      var dateLabelFormat = computeDateLabelFormat.value;
      var inpReadonly = computeInpReadonly.value;
      if (!inpReadonly) {
        if (isNumType) {
          if (inputValue) {
            var inpNumVal = type === "integer" ? xeUtils.toInteger(inputValue) : xeUtils.toNumber(inputValue);
            if (!vaildMinNum(inpNumVal)) {
              inpNumVal = min;
            } else if (!vaildMaxNum(inpNumVal)) {
              inpNumVal = max;
            }
            if (exponential) {
              var inpStringVal = xeUtils.toValueString(inputValue).toLowerCase();
              if (inpStringVal === xeUtils.toNumber(inpNumVal).toExponential()) {
                inpNumVal = inpStringVal;
              }
            }
            emitModel(getNumberValue(inpNumVal), { type: "check" });
          }
        } else if (isDatePickerType) {
          if (inputValue) {
            var inpDateVal = void 0;
            if (type === "time") {
              inpDateVal = toStringTimeDate(inputValue);
            } else {
              inpDateVal = xeUtils.toStringDate(inputValue, dateLabelFormat);
            }
            if (xeUtils.isValidDate(inpDateVal)) {
              if (type === "time") {
                inpDateVal = xeUtils.toDateString(inpDateVal, dateLabelFormat);
                if (inputValue !== inpDateVal) {
                  emitModel(inpDateVal, { type: "check" });
                }
                reactData.inputValue = inpDateVal;
              } else {
                var isChange = false;
                if (type === "datetime") {
                  var dateValue = computeDateValue.value;
                  if (inputValue !== xeUtils.toDateString(dateValue, dateLabelFormat) || inputValue !== xeUtils.toDateString(inpDateVal, dateLabelFormat)) {
                    isChange = true;
                    datetimePanelValue.setHours(inpDateVal.getHours());
                    datetimePanelValue.setMinutes(inpDateVal.getMinutes());
                    datetimePanelValue.setSeconds(inpDateVal.getSeconds());
                  }
                } else {
                  isChange = true;
                }
                reactData.inputValue = xeUtils.toDateString(inpDateVal, dateLabelFormat);
                if (isChange) {
                  dateChange(inpDateVal);
                }
              }
            } else {
              dateRevert();
            }
          } else {
            emitModel("", { type: "check" });
          }
        }
      }
    };
    var blurEvent = function(evnt) {
      var inputValue = reactData.inputValue;
      var inpImmediate = computeInpImmediate.value;
      if (!inpImmediate) {
        emitModel(inputValue, evnt);
      }
      afterCheckValue();
      if (!reactData.visiblePanel) {
        reactData.isActivated = false;
      }
      inputMethods.dispatchEvent("blur", { value: inputValue }, evnt);
    };
    var passwordToggleEvent = function(evnt) {
      var readonly = props.readonly, disabled = props.disabled;
      var showPwd = reactData.showPwd;
      if (!disabled && !readonly) {
        reactData.showPwd = !showPwd;
      }
      inputMethods.dispatchEvent("toggle-visible", { visible: reactData.showPwd }, evnt);
    };
    var searchEvent = function(evnt) {
      inputMethods.dispatchEvent("search-click", {}, evnt);
    };
    var numberChange = function(isPlus, evnt) {
      var min = props.min, max = props.max, type = props.type;
      var inputValue = reactData.inputValue;
      var stepValue = computeStepValue.value;
      var numValue = type === "integer" ? xeUtils.toInteger(inputValue) : xeUtils.toNumber(inputValue);
      var newValue = isPlus ? xeUtils.add(numValue, stepValue) : xeUtils.subtract(numValue, stepValue);
      var restNum;
      if (!vaildMinNum(newValue)) {
        restNum = min;
      } else if (!vaildMaxNum(newValue)) {
        restNum = max;
      } else {
        restNum = newValue;
      }
      emitInputEvent(getNumberValue(restNum), evnt);
    };
    var downbumTimeout;
    var numberNextEvent = function(evnt) {
      var readonly = props.readonly, disabled = props.disabled;
      clearTimeout(downbumTimeout);
      if (!disabled && !readonly) {
        numberChange(false, evnt);
      }
      inputMethods.dispatchEvent("next-number", {}, evnt);
    };
    var numberDownNextEvent = function(evnt) {
      downbumTimeout = window.setTimeout(function() {
        numberNextEvent(evnt);
        numberDownNextEvent(evnt);
      }, 60);
    };
    var numberPrevEvent = function(evnt) {
      var readonly = props.readonly, disabled = props.disabled;
      clearTimeout(downbumTimeout);
      if (!disabled && !readonly) {
        numberChange(true, evnt);
      }
      inputMethods.dispatchEvent("prev-number", {}, evnt);
    };
    var numberKeydownEvent = function(evnt) {
      var isUpArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_UP);
      var isDwArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_DOWN);
      if (isUpArrow || isDwArrow) {
        evnt.preventDefault();
        if (isUpArrow) {
          numberPrevEvent(evnt);
        } else {
          numberNextEvent(evnt);
        }
      }
    };
    var keydownEvent = function(evnt) {
      var exponential = props.exponential, controls = props.controls;
      var isNumType = computeIsNumType.value;
      if (isNumType) {
        var isCtrlKey = evnt.ctrlKey;
        var isShiftKey = evnt.shiftKey;
        var isAltKey = evnt.altKey;
        var keyCode = evnt.keyCode;
        if (!isCtrlKey && !isShiftKey && !isAltKey && (hasEventKey(evnt, EVENT_KEYS.SPACEBAR) || (!exponential || keyCode !== 69) && (keyCode >= 65 && keyCode <= 90) || keyCode >= 186 && keyCode <= 188 || keyCode >= 191)) {
          evnt.preventDefault();
        }
        if (controls) {
          numberKeydownEvent(evnt);
        }
      }
      triggerEvent2(evnt);
    };
    var keyupEvent = function(evnt) {
      triggerEvent2(evnt);
    };
    var numberStopDown = function() {
      clearTimeout(downbumTimeout);
    };
    var numberDownPrevEvent = function(evnt) {
      downbumTimeout = window.setTimeout(function() {
        numberPrevEvent(evnt);
        numberDownPrevEvent(evnt);
      }, 60);
    };
    var numberMousedownEvent = function(evnt) {
      numberStopDown();
      if (evnt.button === 0) {
        var isPrevNumber_1 = hasClass(evnt.currentTarget, "is--prev");
        if (isPrevNumber_1) {
          numberPrevEvent(evnt);
        } else {
          numberNextEvent(evnt);
        }
        downbumTimeout = window.setTimeout(function() {
          if (isPrevNumber_1) {
            numberDownPrevEvent(evnt);
          } else {
            numberDownNextEvent(evnt);
          }
        }, 500);
      }
    };
    var wheelEvent = function(evnt) {
      var isNumType = computeIsNumType.value;
      if (isNumType && props.controls) {
        if (reactData.isActivated) {
          var delta = evnt.deltaY;
          if (delta > 0) {
            numberNextEvent(evnt);
          } else if (delta < 0) {
            numberPrevEvent(evnt);
          }
          evnt.preventDefault();
        }
      }
      triggerEvent2(evnt);
    };
    var dateMonthHandle = function(date, offsetMonth) {
      reactData.selectMonth = xeUtils.getWhatMonth(date, offsetMonth, "first");
    };
    var dateNowHandle = function() {
      var currentDate = xeUtils.getWhatDay(Date.now(), 0, "first");
      reactData.currentDate = currentDate;
      dateMonthHandle(currentDate, 0);
    };
    var dateToggleTypeEvent = function() {
      var datePanelType = reactData.datePanelType;
      if (datePanelType === "month" || datePanelType === "quarter") {
        datePanelType = "year";
      } else {
        datePanelType = "month";
      }
      reactData.datePanelType = datePanelType;
    };
    var datePrevEvent = function(evnt) {
      var type = props.type;
      var datePanelType = reactData.datePanelType, selectMonth = reactData.selectMonth;
      var isDisabledPrevDateBtn = computeIsDisabledPrevDateBtn.value;
      if (!isDisabledPrevDateBtn) {
        if (type === "year") {
          reactData.selectMonth = xeUtils.getWhatYear(selectMonth, -yearSize, "first");
        } else if (type === "month" || type === "quarter") {
          if (datePanelType === "year") {
            reactData.selectMonth = xeUtils.getWhatYear(selectMonth, -yearSize, "first");
          } else {
            reactData.selectMonth = xeUtils.getWhatYear(selectMonth, -1, "first");
          }
        } else {
          if (datePanelType === "year") {
            reactData.selectMonth = xeUtils.getWhatYear(selectMonth, -yearSize, "first");
          } else if (datePanelType === "month") {
            reactData.selectMonth = xeUtils.getWhatYear(selectMonth, -1, "first");
          } else {
            reactData.selectMonth = xeUtils.getWhatMonth(selectMonth, -1, "first");
          }
        }
        inputMethods.dispatchEvent("date-prev", { type }, evnt);
      }
    };
    var dateTodayMonthEvent = function(evnt) {
      dateNowHandle();
      dateChange(reactData.currentDate);
      hidePanel();
      inputMethods.dispatchEvent("date-today", { type: props.type }, evnt);
    };
    var dateNextEvent = function(evnt) {
      var type = props.type;
      var datePanelType = reactData.datePanelType, selectMonth = reactData.selectMonth;
      var isDisabledNextDateBtn = computeIsDisabledNextDateBtn.value;
      if (!isDisabledNextDateBtn) {
        if (type === "year") {
          reactData.selectMonth = xeUtils.getWhatYear(selectMonth, yearSize, "first");
        } else if (type === "month" || type === "quarter") {
          if (datePanelType === "year") {
            reactData.selectMonth = xeUtils.getWhatYear(selectMonth, yearSize, "first");
          } else {
            reactData.selectMonth = xeUtils.getWhatYear(selectMonth, 1, "first");
          }
        } else {
          if (datePanelType === "year") {
            reactData.selectMonth = xeUtils.getWhatYear(selectMonth, yearSize, "first");
          } else if (datePanelType === "month") {
            reactData.selectMonth = xeUtils.getWhatYear(selectMonth, 1, "first");
          } else {
            reactData.selectMonth = xeUtils.getWhatMonth(selectMonth, 1, "first");
          }
        }
        inputMethods.dispatchEvent("date-next", { type }, evnt);
      }
    };
    var isDateDisabled = function(item) {
      var disabledMethod = props.disabledMethod;
      var datePanelType = reactData.datePanelType;
      return disabledMethod && disabledMethod({ type: datePanelType, viewType: datePanelType, date: item.date, $input: $xeinput });
    };
    var dateSelectItem = function(date) {
      var type = props.type;
      var datePanelType = reactData.datePanelType;
      if (type === "month") {
        if (datePanelType === "year") {
          reactData.datePanelType = "month";
          dateCheckMonth(date);
        } else {
          dateChange(date);
          hidePanel();
        }
      } else if (type === "year") {
        dateChange(date);
        hidePanel();
      } else if (type === "quarter") {
        if (datePanelType === "year") {
          reactData.datePanelType = "quarter";
          dateCheckMonth(date);
        } else {
          dateChange(date);
          hidePanel();
        }
      } else {
        if (datePanelType === "month") {
          reactData.datePanelType = type === "week" ? type : "day";
          dateCheckMonth(date);
        } else if (datePanelType === "year") {
          reactData.datePanelType = "month";
          dateCheckMonth(date);
        } else {
          dateChange(date);
          hidePanel();
        }
      }
    };
    var dateSelectEvent = function(item) {
      if (!isDateDisabled(item)) {
        dateSelectItem(item.date);
      }
    };
    var dateMoveDay = function(offsetDay) {
      if (!isDateDisabled({ date: offsetDay })) {
        var dayList = computeDayList.value;
        if (!dayList.some(function(item) {
          return xeUtils.isDateSame(item.date, offsetDay, "yyyyMMdd");
        })) {
          dateCheckMonth(offsetDay);
        }
        dateParseValue(offsetDay);
      }
    };
    var dateMoveYear = function(offsetYear) {
      if (!isDateDisabled({ date: offsetYear })) {
        var yearList = computeYearList.value;
        if (!yearList.some(function(item) {
          return xeUtils.isDateSame(item.date, offsetYear, "yyyy");
        })) {
          dateCheckMonth(offsetYear);
        }
        dateParseValue(offsetYear);
      }
    };
    var dateMoveQuarter = function(offsetQuarter) {
      if (!isDateDisabled({ date: offsetQuarter })) {
        var quarterList = computeQuarterList.value;
        if (!quarterList.some(function(item) {
          return xeUtils.isDateSame(item.date, offsetQuarter, "yyyyq");
        })) {
          dateCheckMonth(offsetQuarter);
        }
        dateParseValue(offsetQuarter);
      }
    };
    var dateMoveMonth = function(offsetMonth) {
      if (!isDateDisabled({ date: offsetMonth })) {
        var monthList = computeMonthList.value;
        if (!monthList.some(function(item) {
          return xeUtils.isDateSame(item.date, offsetMonth, "yyyyMM");
        })) {
          dateCheckMonth(offsetMonth);
        }
        dateParseValue(offsetMonth);
      }
    };
    var dateMouseenterEvent = function(item) {
      if (!isDateDisabled(item)) {
        var datePanelType = reactData.datePanelType;
        if (datePanelType === "month") {
          dateMoveMonth(item.date);
        } else if (datePanelType === "quarter") {
          dateMoveQuarter(item.date);
        } else if (datePanelType === "year") {
          dateMoveYear(item.date);
        } else {
          dateMoveDay(item.date);
        }
      }
    };
    var updateTimePos = function(liElem) {
      if (liElem) {
        var height = liElem.offsetHeight;
        var ulElem = liElem.parentNode;
        ulElem.scrollTop = liElem.offsetTop - height * 4;
      }
    };
    var dateTimeChangeEvent = function(evnt) {
      reactData.datetimePanelValue = new Date(reactData.datetimePanelValue.getTime());
      updateTimePos(evnt.currentTarget);
    };
    var dateHourEvent = function(evnt, item) {
      reactData.datetimePanelValue.setHours(item.value);
      dateTimeChangeEvent(evnt);
    };
    var dateConfirmEvent = function() {
      var dateValue = computeDateValue.value;
      dateChange(dateValue || reactData.currentDate);
      hidePanel();
    };
    var dateMinuteEvent = function(evnt, item) {
      reactData.datetimePanelValue.setMinutes(item.value);
      dateTimeChangeEvent(evnt);
    };
    var dateSecondEvent = function(evnt, item) {
      reactData.datetimePanelValue.setSeconds(item.value);
      dateTimeChangeEvent(evnt);
    };
    var dateOffsetEvent = function(evnt) {
      var isActivated = reactData.isActivated, datePanelValue = reactData.datePanelValue, datePanelType = reactData.datePanelType;
      if (isActivated) {
        evnt.preventDefault();
        var isLeftArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_LEFT);
        var isUpArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_UP);
        var isRightArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_RIGHT);
        var isDwArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_DOWN);
        if (datePanelType === "year") {
          var offsetYear = xeUtils.getWhatYear(datePanelValue || Date.now(), 0, "first");
          if (isLeftArrow) {
            offsetYear = xeUtils.getWhatYear(offsetYear, -1);
          } else if (isUpArrow) {
            offsetYear = xeUtils.getWhatYear(offsetYear, -4);
          } else if (isRightArrow) {
            offsetYear = xeUtils.getWhatYear(offsetYear, 1);
          } else if (isDwArrow) {
            offsetYear = xeUtils.getWhatYear(offsetYear, 4);
          }
          dateMoveYear(offsetYear);
        } else if (datePanelType === "quarter") {
          var offsetQuarter = xeUtils.getWhatQuarter(datePanelValue || Date.now(), 0, "first");
          if (isLeftArrow) {
            offsetQuarter = xeUtils.getWhatQuarter(offsetQuarter, -1);
          } else if (isUpArrow) {
            offsetQuarter = xeUtils.getWhatQuarter(offsetQuarter, -2);
          } else if (isRightArrow) {
            offsetQuarter = xeUtils.getWhatQuarter(offsetQuarter, 1);
          } else if (isDwArrow) {
            offsetQuarter = xeUtils.getWhatQuarter(offsetQuarter, 2);
          }
          dateMoveQuarter(offsetQuarter);
        } else if (datePanelType === "month") {
          var offsetMonth = xeUtils.getWhatMonth(datePanelValue || Date.now(), 0, "first");
          if (isLeftArrow) {
            offsetMonth = xeUtils.getWhatMonth(offsetMonth, -1);
          } else if (isUpArrow) {
            offsetMonth = xeUtils.getWhatMonth(offsetMonth, -4);
          } else if (isRightArrow) {
            offsetMonth = xeUtils.getWhatMonth(offsetMonth, 1);
          } else if (isDwArrow) {
            offsetMonth = xeUtils.getWhatMonth(offsetMonth, 4);
          }
          dateMoveMonth(offsetMonth);
        } else {
          var offsetDay = datePanelValue || xeUtils.getWhatDay(Date.now(), 0, "first");
          if (isLeftArrow) {
            offsetDay = xeUtils.getWhatDay(offsetDay, -1);
          } else if (isUpArrow) {
            offsetDay = xeUtils.getWhatWeek(offsetDay, -1);
          } else if (isRightArrow) {
            offsetDay = xeUtils.getWhatDay(offsetDay, 1);
          } else if (isDwArrow) {
            offsetDay = xeUtils.getWhatWeek(offsetDay, 1);
          }
          dateMoveDay(offsetDay);
        }
      }
    };
    var datePgOffsetEvent = function(evnt) {
      var isActivated = reactData.isActivated;
      if (isActivated) {
        var isPgUp = hasEventKey(evnt, EVENT_KEYS.PAGE_UP);
        evnt.preventDefault();
        if (isPgUp) {
          datePrevEvent(evnt);
        } else {
          dateNextEvent(evnt);
        }
      }
    };
    var dateOpenPanel = function() {
      var type = props.type;
      var isDateTimeType = computeIsDateTimeType.value;
      var dateValue = computeDateValue.value;
      if (["year", "quarter", "month", "week"].indexOf(type) > -1) {
        reactData.datePanelType = type;
      } else {
        reactData.datePanelType = "day";
      }
      reactData.currentDate = xeUtils.getWhatDay(Date.now(), 0, "first");
      if (dateValue) {
        dateMonthHandle(dateValue, 0);
        dateParseValue(dateValue);
      } else {
        dateNowHandle();
      }
      if (isDateTimeType) {
        reactData.datetimePanelValue = reactData.datePanelValue || xeUtils.getWhatDay(Date.now(), 0, "first");
        nextTick(function() {
          var timeBodyElem = refInputTimeBody.value;
          xeUtils.arrayEach(timeBodyElem.querySelectorAll("li.is--selected"), updateTimePos);
        });
      }
    };
    var updateZindex = function() {
      if (reactData.panelIndex < getLastZIndex()) {
        reactData.panelIndex = nextZIndex();
      }
    };
    var updatePlacement = function() {
      return nextTick().then(function() {
        var transfer = props.transfer, placement = props.placement;
        var panelIndex = reactData.panelIndex;
        var targetElem = refInputTarget.value;
        var panelElem = refInputPanel.value;
        if (targetElem && panelElem) {
          var targetHeight = targetElem.offsetHeight;
          var targetWidth = targetElem.offsetWidth;
          var panelHeight = panelElem.offsetHeight;
          var panelWidth = panelElem.offsetWidth;
          var marginSize = 5;
          var panelStyle = {
            zIndex: panelIndex
          };
          var _a = getAbsolutePos(targetElem), boundingTop = _a.boundingTop, boundingLeft = _a.boundingLeft, visibleHeight = _a.visibleHeight, visibleWidth = _a.visibleWidth;
          var panelPlacement = "bottom";
          if (transfer) {
            var left = boundingLeft;
            var top_1 = boundingTop + targetHeight;
            if (placement === "top") {
              panelPlacement = "top";
              top_1 = boundingTop - panelHeight;
            } else if (!placement) {
              if (top_1 + panelHeight + marginSize > visibleHeight) {
                panelPlacement = "top";
                top_1 = boundingTop - panelHeight;
              }
              if (top_1 < marginSize) {
                panelPlacement = "bottom";
                top_1 = boundingTop + targetHeight;
              }
            }
            if (left + panelWidth + marginSize > visibleWidth) {
              left -= left + panelWidth + marginSize - visibleWidth;
            }
            if (left < marginSize) {
              left = marginSize;
            }
            Object.assign(panelStyle, {
              left: left + "px",
              top: top_1 + "px",
              minWidth: targetWidth + "px"
            });
          } else {
            if (placement === "top") {
              panelPlacement = "top";
              panelStyle.bottom = targetHeight + "px";
            } else if (!placement) {
              if (boundingTop + targetHeight + panelHeight > visibleHeight) {
                if (boundingTop - targetHeight - panelHeight > marginSize) {
                  panelPlacement = "top";
                  panelStyle.bottom = targetHeight + "px";
                }
              }
            }
          }
          reactData.panelStyle = panelStyle;
          reactData.panelPlacement = panelPlacement;
          return nextTick();
        }
      });
    };
    var showPanel = function() {
      var disabled = props.disabled;
      var visiblePanel = reactData.visiblePanel;
      var isDatePickerType = computeIsDatePickerType.value;
      if (!disabled && !visiblePanel) {
        if (!reactData.inited) {
          reactData.inited = true;
        }
        clearTimeout(hidePanelTimeout);
        reactData.isActivated = true;
        reactData.animatVisible = true;
        if (isDatePickerType) {
          dateOpenPanel();
        }
        setTimeout(function() {
          reactData.visiblePanel = true;
        }, 10);
        updateZindex();
        updatePlacement();
      }
    };
    var datePickerOpenEvent = function(evnt) {
      var readonly = props.readonly;
      if (!readonly) {
        evnt.preventDefault();
        showPanel();
      }
    };
    var clickEvent = function(evnt) {
      var isDatePickerType = computeIsDatePickerType.value;
      if (isDatePickerType) {
        datePickerOpenEvent(evnt);
      }
      triggerEvent2(evnt);
    };
    var handleGlobalMousedownEvent = function(evnt) {
      var disabled = props.disabled;
      var visiblePanel = reactData.visiblePanel, isActivated = reactData.isActivated;
      var isDatePickerType = computeIsDatePickerType.value;
      var el = refElem.value;
      var panelElem = refInputPanel.value;
      if (!disabled && isActivated) {
        reactData.isActivated = getEventTargetNode(evnt, el).flag || getEventTargetNode(evnt, panelElem).flag;
        if (!reactData.isActivated) {
          if (isDatePickerType) {
            if (visiblePanel) {
              hidePanel();
              afterCheckValue();
            }
          } else {
            afterCheckValue();
          }
        }
      }
    };
    var handleGlobalKeydownEvent = function(evnt) {
      var clearable = props.clearable, disabled = props.disabled;
      var visiblePanel = reactData.visiblePanel;
      var isDatePickerType = computeIsDatePickerType.value;
      if (!disabled) {
        var isTab = hasEventKey(evnt, EVENT_KEYS.TAB);
        var isDel = hasEventKey(evnt, EVENT_KEYS.DELETE);
        var isEsc = hasEventKey(evnt, EVENT_KEYS.ESCAPE);
        var isEnter = hasEventKey(evnt, EVENT_KEYS.ENTER);
        var isLeftArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_LEFT);
        var isUpArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_UP);
        var isRightArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_RIGHT);
        var isDwArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_DOWN);
        var isPgUp = hasEventKey(evnt, EVENT_KEYS.PAGE_UP);
        var isPgDn = hasEventKey(evnt, EVENT_KEYS.PAGE_DOWN);
        var operArrow = isLeftArrow || isUpArrow || isRightArrow || isDwArrow;
        var isActivated = reactData.isActivated;
        if (isTab) {
          if (isActivated) {
            afterCheckValue();
          }
          isActivated = false;
          reactData.isActivated = isActivated;
        } else if (operArrow) {
          if (isDatePickerType) {
            if (isActivated) {
              if (visiblePanel) {
                dateOffsetEvent(evnt);
              } else if (isUpArrow || isDwArrow) {
                datePickerOpenEvent(evnt);
              }
            }
          }
        } else if (isEnter) {
          if (isDatePickerType) {
            if (visiblePanel) {
              if (reactData.datePanelValue) {
                dateSelectItem(reactData.datePanelValue);
              } else {
                hidePanel();
              }
            } else if (isActivated) {
              datePickerOpenEvent(evnt);
            }
          }
        } else if (isPgUp || isPgDn) {
          if (isDatePickerType) {
            if (isActivated) {
              datePgOffsetEvent(evnt);
            }
          }
        }
        if (isTab || isEsc) {
          if (visiblePanel) {
            hidePanel();
          }
        } else if (isDel && clearable) {
          if (isActivated) {
            clearValueEvent(evnt, null);
          }
        }
      }
    };
    var handleGlobalMousewheelEvent = function(evnt) {
      var disabled = props.disabled;
      var visiblePanel = reactData.visiblePanel;
      if (!disabled) {
        if (visiblePanel) {
          var panelElem = refInputPanel.value;
          if (getEventTargetNode(evnt, panelElem).flag) {
            updatePlacement();
          } else {
            hidePanel();
            afterCheckValue();
          }
        }
      }
    };
    var handleGlobalBlurEvent = function() {
      var isActivated = reactData.isActivated, visiblePanel = reactData.visiblePanel;
      if (visiblePanel) {
        hidePanel();
        afterCheckValue();
      } else if (isActivated) {
        afterCheckValue();
      }
    };
    var renderDateLabel = function(item, label) {
      var festivalMethod = props.festivalMethod;
      if (festivalMethod) {
        var datePanelType = reactData.datePanelType;
        var festivalRest = festivalMethod({ type: datePanelType, viewType: datePanelType, date: item.date, $input: $xeinput });
        var festivalItem = festivalRest ? xeUtils.isString(festivalRest) ? { label: festivalRest } : festivalRest : {};
        var extraItem = festivalItem.extra ? xeUtils.isString(festivalItem.extra) ? { label: festivalItem.extra } : festivalItem.extra : null;
        var labels = [
          h("span", {
            class: ["vxe-input--date-label", {
              "is-notice": festivalItem.notice
            }]
          }, extraItem && extraItem.label ? [
            h("span", label),
            h("span", {
              class: ["vxe-input--date-label--extra", extraItem.important ? "is-important" : "", extraItem.className],
              style: extraItem.style
            }, xeUtils.toValueString(extraItem.label))
          ] : label)
        ];
        var festivalLabel = festivalItem.label;
        if (festivalLabel) {
          var festivalLabels = xeUtils.toValueString(festivalLabel).split(",");
          labels.push(h("span", {
            class: ["vxe-input--date-festival", festivalItem.important ? "is-important" : "", festivalItem.className],
            style: festivalItem.style
          }, [
            festivalLabels.length > 1 ? h("span", {
              class: ["vxe-input--date-festival--overlap", "overlap--" + festivalLabels.length]
            }, festivalLabels.map(function(label2) {
              return h("span", label2.substring(0, 3));
            })) : h("span", {
              class: "vxe-input--date-festival--label"
            }, festivalLabels[0].substring(0, 3))
          ]));
        }
        return labels;
      }
      return label;
    };
    var renderDateDayTable = function() {
      var datePanelType = reactData.datePanelType, datePanelValue = reactData.datePanelValue;
      var dateValue = computeDateValue.value;
      var dateHeaders = computeDateHeaders.value;
      var dayDatas = computeDayDatas.value;
      var matchFormat = "yyyyMMdd";
      return [
        h("table", {
          class: "vxe-input--date-" + datePanelType + "-view",
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          h("thead", [
            h("tr", dateHeaders.map(function(item) {
              return h("th", item.label);
            }))
          ]),
          h("tbody", dayDatas.map(function(rows) {
            return h("tr", rows.map(function(item) {
              return h("td", {
                class: {
                  "is--prev": item.isPrev,
                  "is--current": item.isCurrent,
                  "is--now": item.isNow,
                  "is--next": item.isNext,
                  "is--disabled": isDateDisabled(item),
                  "is--selected": xeUtils.isDateSame(dateValue, item.date, matchFormat),
                  "is--hover": xeUtils.isDateSame(datePanelValue, item.date, matchFormat)
                },
                onClick: function() {
                  return dateSelectEvent(item);
                },
                onMouseenter: function() {
                  return dateMouseenterEvent(item);
                }
              }, renderDateLabel(item, item.label));
            }));
          }))
        ])
      ];
    };
    var renderDateWeekTable = function() {
      var datePanelType = reactData.datePanelType, datePanelValue = reactData.datePanelValue;
      var dateValue = computeDateValue.value;
      var weekHeaders = computeWeekHeaders.value;
      var weekDates = computeWeekDates.value;
      var matchFormat = "yyyyMMdd";
      return [
        h("table", {
          class: "vxe-input--date-" + datePanelType + "-view",
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          h("thead", [
            h("tr", weekHeaders.map(function(item) {
              return h("th", item.label);
            }))
          ]),
          h("tbody", weekDates.map(function(rows) {
            var isSelected = rows.some(function(item) {
              return xeUtils.isDateSame(dateValue, item.date, matchFormat);
            });
            var isHover = rows.some(function(item) {
              return xeUtils.isDateSame(datePanelValue, item.date, matchFormat);
            });
            return h("tr", rows.map(function(item) {
              return h("td", {
                class: {
                  "is--prev": item.isPrev,
                  "is--current": item.isCurrent,
                  "is--now": item.isNow,
                  "is--next": item.isNext,
                  "is--disabled": isDateDisabled(item),
                  "is--selected": isSelected,
                  "is--hover": isHover
                },
                onClick: function() {
                  return dateSelectEvent(item);
                },
                onMouseenter: function() {
                  return dateMouseenterEvent(item);
                }
              }, renderDateLabel(item, item.label));
            }));
          }))
        ])
      ];
    };
    var renderDateMonthTable = function() {
      var datePanelType = reactData.datePanelType, datePanelValue = reactData.datePanelValue;
      var dateValue = computeDateValue.value;
      var monthDatas = computeMonthDatas.value;
      var matchFormat = "yyyyMM";
      return [
        h("table", {
          class: "vxe-input--date-" + datePanelType + "-view",
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          h("tbody", monthDatas.map(function(rows) {
            return h("tr", rows.map(function(item) {
              return h("td", {
                class: {
                  "is--prev": item.isPrev,
                  "is--current": item.isCurrent,
                  "is--now": item.isNow,
                  "is--next": item.isNext,
                  "is--disabled": isDateDisabled(item),
                  "is--selected": xeUtils.isDateSame(dateValue, item.date, matchFormat),
                  "is--hover": xeUtils.isDateSame(datePanelValue, item.date, matchFormat)
                },
                onClick: function() {
                  return dateSelectEvent(item);
                },
                onMouseenter: function() {
                  return dateMouseenterEvent(item);
                }
              }, renderDateLabel(item, GlobalConfig.i18n("vxe.input.date.months.m" + item.month)));
            }));
          }))
        ])
      ];
    };
    var renderDateQuarterTable = function() {
      var datePanelType = reactData.datePanelType, datePanelValue = reactData.datePanelValue;
      var dateValue = computeDateValue.value;
      var quarterDatas = computeQuarterDatas.value;
      var matchFormat = "yyyyq";
      return [
        h("table", {
          class: "vxe-input--date-" + datePanelType + "-view",
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          h("tbody", quarterDatas.map(function(rows) {
            return h("tr", rows.map(function(item) {
              return h("td", {
                class: {
                  "is--prev": item.isPrev,
                  "is--current": item.isCurrent,
                  "is--now": item.isNow,
                  "is--next": item.isNext,
                  "is--disabled": isDateDisabled(item),
                  "is--selected": xeUtils.isDateSame(dateValue, item.date, matchFormat),
                  "is--hover": xeUtils.isDateSame(datePanelValue, item.date, matchFormat)
                },
                onClick: function() {
                  return dateSelectEvent(item);
                },
                onMouseenter: function() {
                  return dateMouseenterEvent(item);
                }
              }, renderDateLabel(item, GlobalConfig.i18n("vxe.input.date.quarters.q" + item.quarter)));
            }));
          }))
        ])
      ];
    };
    var renderDateYearTable = function() {
      var datePanelType = reactData.datePanelType, datePanelValue = reactData.datePanelValue;
      var dateValue = computeDateValue.value;
      var yearDatas = computeYearDatas.value;
      var matchFormat = "yyyy";
      return [
        h("table", {
          class: "vxe-input--date-" + datePanelType + "-view",
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          h("tbody", yearDatas.map(function(rows) {
            return h("tr", rows.map(function(item) {
              return h("td", {
                class: {
                  "is--disabled": isDateDisabled(item),
                  "is--current": item.isCurrent,
                  "is--now": item.isNow,
                  "is--selected": xeUtils.isDateSame(dateValue, item.date, matchFormat),
                  "is--hover": xeUtils.isDateSame(datePanelValue, item.date, matchFormat)
                },
                onClick: function() {
                  return dateSelectEvent(item);
                },
                onMouseenter: function() {
                  return dateMouseenterEvent(item);
                }
              }, renderDateLabel(item, item.year));
            }));
          }))
        ])
      ];
    };
    var renderDateTable = function() {
      var datePanelType = reactData.datePanelType;
      switch (datePanelType) {
        case "week":
          return renderDateWeekTable();
        case "month":
          return renderDateMonthTable();
        case "quarter":
          return renderDateQuarterTable();
        case "year":
          return renderDateYearTable();
      }
      return renderDateDayTable();
    };
    var renderDatePanel = function() {
      var datePanelType = reactData.datePanelType;
      var isDisabledPrevDateBtn = computeIsDisabledPrevDateBtn.value;
      var isDisabledNextDateBtn = computeIsDisabledNextDateBtn.value;
      var selectDatePanelLabel = computeSelectDatePanelLabel.value;
      return [
        h("div", {
          class: "vxe-input--date-picker-header"
        }, [
          h("div", {
            class: "vxe-input--date-picker-type-wrapper"
          }, [
            datePanelType === "year" ? h("span", {
              class: "vxe-input--date-picker-label"
            }, selectDatePanelLabel) : h("span", {
              class: "vxe-input--date-picker-btn",
              onClick: dateToggleTypeEvent
            }, selectDatePanelLabel)
          ]),
          h("div", {
            class: "vxe-input--date-picker-btn-wrapper"
          }, [
            h("span", {
              class: ["vxe-input--date-picker-btn vxe-input--date-picker-prev-btn", {
                "is--disabled": isDisabledPrevDateBtn
              }],
              onClick: datePrevEvent
            }, [
              h("i", {
                class: "vxe-icon--caret-left"
              })
            ]),
            h("span", {
              class: "vxe-input--date-picker-btn vxe-input--date-picker-current-btn",
              onClick: dateTodayMonthEvent
            }, [
              h("i", {
                class: "vxe-icon--dot"
              })
            ]),
            h("span", {
              class: ["vxe-input--date-picker-btn vxe-input--date-picker-next-btn", {
                "is--disabled": isDisabledNextDateBtn
              }],
              onClick: dateNextEvent
            }, [
              h("i", {
                class: "vxe-icon--caret-right"
              })
            ])
          ])
        ]),
        h("div", {
          class: "vxe-input--date-picker-body"
        }, renderDateTable())
      ];
    };
    var renderTimePanel = function() {
      var datetimePanelValue = reactData.datetimePanelValue;
      var dateTimeLabel = computeDateTimeLabel.value;
      var hourList = computeHourList.value;
      var minuteList = computeMinuteList.value;
      var secondList = computeSecondList.value;
      return [
        h("div", {
          class: "vxe-input--time-picker-header"
        }, [
          h("span", {
            class: "vxe-input--time-picker-title"
          }, dateTimeLabel),
          h("button", {
            class: "vxe-input--time-picker-confirm",
            type: "button",
            onClick: dateConfirmEvent
          }, GlobalConfig.i18n("vxe.button.confirm"))
        ]),
        h("div", {
          ref: refInputTimeBody,
          class: "vxe-input--time-picker-body"
        }, [
          h("ul", {
            class: "vxe-input--time-picker-hour-list"
          }, hourList.map(function(item, index) {
            return h("li", {
              key: index,
              class: {
                "is--selected": datetimePanelValue && datetimePanelValue.getHours() === item.value
              },
              onClick: function(evnt) {
                return dateHourEvent(evnt, item);
              }
            }, item.label);
          })),
          h("ul", {
            class: "vxe-input--time-picker-minute-list"
          }, minuteList.map(function(item, index) {
            return h("li", {
              key: index,
              class: {
                "is--selected": datetimePanelValue && datetimePanelValue.getMinutes() === item.value
              },
              onClick: function(evnt) {
                return dateMinuteEvent(evnt, item);
              }
            }, item.label);
          })),
          h("ul", {
            class: "vxe-input--time-picker-second-list"
          }, secondList.map(function(item, index) {
            return h("li", {
              key: index,
              class: {
                "is--selected": datetimePanelValue && datetimePanelValue.getSeconds() === item.value
              },
              onClick: function(evnt) {
                return dateSecondEvent(evnt, item);
              }
            }, item.label);
          }))
        ])
      ];
    };
    var renderPanel = function() {
      var _a;
      var type = props.type, transfer = props.transfer;
      var inited = reactData.inited, animatVisible = reactData.animatVisible, visiblePanel = reactData.visiblePanel, panelPlacement = reactData.panelPlacement, panelStyle = reactData.panelStyle;
      var vSize = computeSize.value;
      var isDatePickerType = computeIsDatePickerType.value;
      var renders = [];
      if (isDatePickerType) {
        if (type === "datetime") {
          renders.push(h("div", {
            class: "vxe-input--panel-layout-wrapper"
          }, [
            h("div", {
              class: "vxe-input--panel-left-wrapper"
            }, renderDatePanel()),
            h("div", {
              class: "vxe-input--panel-right-wrapper"
            }, renderTimePanel())
          ]));
        } else if (type === "time") {
          renders.push(h("div", {
            class: "vxe-input--panel-wrapper"
          }, renderTimePanel()));
        } else {
          renders.push(h("div", {
            class: "vxe-input--panel-wrapper"
          }, renderDatePanel()));
        }
        return h(Teleport, {
          to: "body",
          disabled: transfer ? !inited : true
        }, [
          h("div", {
            ref: refInputPanel,
            class: ["vxe-table--ignore-clear vxe-input--panel", "type--" + type, (_a = {}, _a["size--" + vSize] = vSize, _a["is--transfer"] = transfer, _a["animat--leave"] = animatVisible, _a["animat--enter"] = visiblePanel, _a)],
            placement: panelPlacement,
            style: panelStyle
          }, renders)
        ]);
      }
      return null;
    };
    var renderNumberIcon = function() {
      return h("span", {
        class: "vxe-input--number-suffix"
      }, [
        h("span", {
          class: "vxe-input--number-prev is--prev",
          onMousedown: numberMousedownEvent,
          onMouseup: numberStopDown,
          onMouseleave: numberStopDown
        }, [
          h("i", {
            class: ["vxe-input--number-prev-icon", GlobalConfig.icon.INPUT_PREV_NUM]
          })
        ]),
        h("span", {
          class: "vxe-input--number-next is--next",
          onMousedown: numberMousedownEvent,
          onMouseup: numberStopDown,
          onMouseleave: numberStopDown
        }, [
          h("i", {
            class: ["vxe-input--number-next-icon", GlobalConfig.icon.INPUT_NEXT_NUM]
          })
        ])
      ]);
    };
    var renderDatePickerIcon = function() {
      return h("span", {
        class: "vxe-input--date-picker-suffix",
        onClick: datePickerOpenEvent
      }, [
        h("i", {
          class: ["vxe-input--date-picker-icon", GlobalConfig.icon.INPUT_DATE]
        })
      ]);
    };
    var renderSearchIcon = function() {
      return h("span", {
        class: "vxe-input--search-suffix",
        onClick: searchEvent
      }, [
        h("i", {
          class: ["vxe-input--search-icon", GlobalConfig.icon.INPUT_SEARCH]
        })
      ]);
    };
    var renderPasswordIcon = function() {
      var showPwd = reactData.showPwd;
      return h("span", {
        class: "vxe-input--password-suffix",
        onClick: passwordToggleEvent
      }, [
        h("i", {
          class: ["vxe-input--password-icon", showPwd ? GlobalConfig.icon.INPUT_SHOW_PWD : GlobalConfig.icon.INPUT_PWD]
        })
      ]);
    };
    var rendePrefixIcon = function() {
      var prefixIcon = props.prefixIcon;
      var prefixSlot = slots.prefix;
      var icons = [];
      if (prefixSlot) {
        icons.push(h("span", {
          class: "vxe-input--prefix-icon"
        }, prefixSlot({})));
      } else if (prefixIcon) {
        icons.push(h("i", {
          class: ["vxe-input--prefix-icon", prefixIcon]
        }));
      }
      return icons.length ? h("span", {
        class: "vxe-input--prefix",
        onClick: clickPrefixEvent
      }, icons) : null;
    };
    var renderSuffixIcon2 = function() {
      var disabled = props.disabled, suffixIcon = props.suffixIcon;
      var inputValue = reactData.inputValue;
      var suffixSlot = slots.suffix;
      var isClearable = computeIsClearable.value;
      var icons = [];
      if (suffixSlot) {
        icons.push(h("span", {
          class: "vxe-input--suffix-icon"
        }, suffixSlot({})));
      } else if (suffixIcon) {
        icons.push(h("i", {
          class: ["vxe-input--suffix-icon", suffixIcon]
        }));
      }
      if (isClearable) {
        icons.push(h("i", {
          class: ["vxe-input--clear-icon", GlobalConfig.icon.INPUT_CLEAR]
        }));
      }
      return icons.length ? h("span", {
        class: ["vxe-input--suffix", {
          "is--clear": isClearable && !disabled && !(inputValue === "" || xeUtils.eqNull(inputValue))
        }],
        onClick: clickSuffixEvent
      }, icons) : null;
    };
    var renderExtraSuffixIcon = function() {
      var controls = props.controls;
      var isNumType = computeIsNumType.value;
      var isDatePickerType = computeIsDatePickerType.value;
      var isPawdType = computeIsPawdType.value;
      var isSearchType = computeIsSearchType.value;
      var icons;
      if (isPawdType) {
        icons = renderPasswordIcon();
      } else if (isNumType) {
        if (controls) {
          icons = renderNumberIcon();
        }
      } else if (isDatePickerType) {
        icons = renderDatePickerIcon();
      } else if (isSearchType) {
        icons = renderSearchIcon();
      }
      return icons ? h("span", {
        class: "vxe-input--extra-suffix"
      }, [icons]) : null;
    };
    inputMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $input: $xeinput, $event: evnt }, params));
      },
      focus: function() {
        var inputElem = refInputTarget.value;
        reactData.isActivated = true;
        inputElem.focus();
        return nextTick();
      },
      blur: function() {
        var inputElem = refInputTarget.value;
        inputElem.blur();
        reactData.isActivated = false;
        return nextTick();
      }
    };
    Object.assign($xeinput, inputMethods);
    watch(function() {
      return props.modelValue;
    }, function(val) {
      reactData.inputValue = val;
      changeValue();
    });
    watch(computeDateLabelFormat, function() {
      dateParseValue(reactData.datePanelValue);
      reactData.inputValue = reactData.datePanelLabel;
    });
    nextTick(function() {
      GlobalEvent.on($xeinput, "mousewheel", handleGlobalMousewheelEvent);
      GlobalEvent.on($xeinput, "mousedown", handleGlobalMousedownEvent);
      GlobalEvent.on($xeinput, "keydown", handleGlobalKeydownEvent);
      GlobalEvent.on($xeinput, "blur", handleGlobalBlurEvent);
    });
    onUnmounted(function() {
      numberStopDown();
      GlobalEvent.off($xeinput, "mousewheel");
      GlobalEvent.off($xeinput, "mousedown");
      GlobalEvent.off($xeinput, "keydown");
      GlobalEvent.off($xeinput, "blur");
    });
    initValue();
    var renderVN = function() {
      var _a;
      var className = props.className, controls = props.controls, type = props.type, align = props.align, name = props.name, disabled = props.disabled, readonly = props.readonly, autocomplete = props.autocomplete;
      var inputValue = reactData.inputValue, visiblePanel = reactData.visiblePanel, isActivated = reactData.isActivated;
      var vSize = computeSize.value;
      var isDatePickerType = computeIsDatePickerType.value;
      var inpReadonly = computeInpReadonly.value;
      var inpMaxlength = computeInpMaxlength.value;
      var inputType = computeInputType.value;
      var inpPlaceholder = computeInpPlaceholder.value;
      var childs = [];
      var prefix = rendePrefixIcon();
      var suffix = renderSuffixIcon2();
      if (prefix) {
        childs.push(prefix);
      }
      childs.push(h("input", {
        ref: refInputTarget,
        class: "vxe-input--inner",
        value: inputValue,
        name,
        type: inputType,
        placeholder: inpPlaceholder,
        maxlength: inpMaxlength,
        readonly: inpReadonly,
        disabled,
        autocomplete,
        onKeydown: keydownEvent,
        onKeyup: keyupEvent,
        onWheel: wheelEvent,
        onClick: clickEvent,
        onInput: inputEvent,
        onChange: changeEvent,
        onFocus: focusEvent,
        onBlur: blurEvent
      }));
      if (suffix) {
        childs.push(suffix);
      }
      childs.push(renderExtraSuffixIcon());
      if (isDatePickerType) {
        childs.push(renderPanel());
      }
      return h("div", {
        ref: refElem,
        class: ["vxe-input", "type--" + type, className, (_a = {}, _a["size--" + vSize] = vSize, _a["is--" + align] = align, _a["is--controls"] = controls, _a["is--prefix"] = !!prefix, _a["is--suffix"] = !!suffix, _a["is--readonly"] = readonly, _a["is--visivle"] = visiblePanel, _a["is--disabled"] = disabled, _a["is--active"] = isActivated, _a)]
      }, childs);
    };
    $xeinput.renderVN = renderVN;
    return $xeinput;
  },
  render: function() {
    return this.renderVN();
  }
});
var VxeCheckboxComponent = defineComponent({
  name: "VxeCheckbox",
  props: {
    modelValue: [String, Number, Boolean],
    label: { type: [String, Number], default: null },
    indeterminate: Boolean,
    title: [String, Number],
    checkedValue: { type: [String, Number, Boolean], default: true },
    uncheckedValue: { type: [String, Number, Boolean], default: false },
    content: [String, Number],
    disabled: Boolean,
    size: { type: String, default: function() {
      return GlobalConfig.checkbox.size || GlobalConfig.size;
    } }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var $xecheckbox = {
      xID,
      props,
      context
    };
    var checkboxMethods = {};
    var computeSize = useSize(props);
    var $xecheckboxgroup = inject("$xecheckboxgroup", null);
    var computeDisabled = computed(function() {
      return props.disabled || $xecheckboxgroup && $xecheckboxgroup.props.disabled;
    });
    var computeChecked = computed(function() {
      return $xecheckboxgroup ? xeUtils.includes($xecheckboxgroup.props.modelValue, props.label) : props.modelValue === props.checkedValue;
    });
    var changeEvent = function(evnt) {
      var checkedValue = props.checkedValue, uncheckedValue = props.uncheckedValue;
      var isDisabled = computeDisabled.value;
      if (!isDisabled) {
        var checked = evnt.target.checked;
        var value = checked ? checkedValue : uncheckedValue;
        var params = { checked, value, label: props.label };
        if ($xecheckboxgroup) {
          $xecheckboxgroup.handleChecked(params, evnt);
        } else {
          emit("update:modelValue", value);
          checkboxMethods.dispatchEvent("change", params, evnt);
        }
      }
    };
    checkboxMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $checkbox: $xecheckbox, $event: evnt }, params));
      }
    };
    Object.assign($xecheckbox, checkboxMethods);
    var renderVN = function() {
      var _a;
      var vSize = computeSize.value;
      var isDisabled = computeDisabled.value;
      return h("label", {
        class: ["vxe-checkbox", (_a = {}, _a["size--" + vSize] = vSize, _a["is--indeterminate"] = props.indeterminate, _a["is--disabled"] = isDisabled, _a)],
        title: props.title
      }, [
        h("input", {
          class: "vxe-checkbox--input",
          type: "checkbox",
          disabled: isDisabled,
          checked: computeChecked.value,
          onChange: changeEvent
        }),
        h("span", {
          class: "vxe-checkbox--icon"
        }),
        h("span", {
          class: "vxe-checkbox--label"
        }, slots.default ? slots.default({}) : getFuncText(props.content))
      ]);
    };
    $xecheckbox.renderVN = renderVN;
    return $xecheckbox;
  },
  render: function() {
    return this.renderVN();
  }
});
function isOptionVisible(option) {
  return option.visible !== false;
}
function getOptUniqueId() {
  return xeUtils.uniqueId("opt_");
}
var VxeSelectComponent = defineComponent({
  name: "VxeSelect",
  props: {
    modelValue: null,
    clearable: Boolean,
    placeholder: String,
    loading: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    multiCharOverflow: { type: [Number, String], default: function() {
      return GlobalConfig.select.multiCharOverflow;
    } },
    prefixIcon: String,
    placement: String,
    options: Array,
    optionProps: Object,
    optionGroups: Array,
    optionGroupProps: Object,
    className: [String, Function],
    size: { type: String, default: function() {
      return GlobalConfig.select.size || GlobalConfig.size;
    } },
    emptyText: String,
    optionId: { type: String, default: function() {
      return GlobalConfig.select.optionId;
    } },
    optionKey: Boolean,
    transfer: { type: Boolean, default: function() {
      return GlobalConfig.select.transfer;
    } }
  },
  emits: [
    "update:modelValue",
    "change",
    "clear"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var reactData = reactive({
      inited: false,
      staticOptions: [],
      fullGroupList: [],
      fullOptionList: [],
      visibleGroupList: [],
      visibleOptionList: [],
      panelIndex: 0,
      panelStyle: {},
      panelPlacement: null,
      currentValue: null,
      visiblePanel: false,
      animatVisible: false,
      isActivated: false
    });
    var refElem = ref();
    var refInput = ref();
    var refOptionWrapper = ref();
    var refOptionPanel = ref();
    var refMaps = {
      refElem
    };
    var $xeselect = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: function() {
        return refMaps;
      }
    };
    var selectMethods = {};
    var computePropsOpts = computed(function() {
      return props.optionProps || {};
    });
    var computeGroupPropsOpts = computed(function() {
      return props.optionGroupProps || {};
    });
    var computeLabelField = computed(function() {
      var propsOpts = computePropsOpts.value;
      return propsOpts.label || "label";
    });
    var computeValueField = computed(function() {
      var propsOpts = computePropsOpts.value;
      return propsOpts.value || "value";
    });
    var computeGroupLabelField = computed(function() {
      var groupPropsOpts = computeGroupPropsOpts.value;
      return groupPropsOpts.label || "label";
    });
    var computeGroupOptionsField = computed(function() {
      var groupPropsOpts = computeGroupPropsOpts.value;
      return groupPropsOpts.options || "options";
    });
    var computeIsGroup = computed(function() {
      return reactData.fullGroupList.some(function(item) {
        return item.options && item.options.length;
      });
    });
    var computeMultiMaxCharNum = computed(function() {
      return xeUtils.toNumber(props.multiCharOverflow);
    });
    var callSlot = function(slotFunc, params) {
      if (slotFunc) {
        if (xeUtils.isString(slotFunc)) {
          slotFunc = slots[slotFunc] || null;
        }
        if (xeUtils.isFunction(slotFunc)) {
          return slotFunc(params);
        }
      }
      return [];
    };
    var findOption = function(optionValue) {
      var fullOptionList = reactData.fullOptionList, fullGroupList = reactData.fullGroupList;
      var isGroup = computeIsGroup.value;
      var valueField = computeValueField.value;
      if (isGroup) {
        for (var gIndex = 0; gIndex < fullGroupList.length; gIndex++) {
          var group = fullGroupList[gIndex];
          if (group.options) {
            for (var index = 0; index < group.options.length; index++) {
              var option = group.options[index];
              if (optionValue === option[valueField]) {
                return option;
              }
            }
          }
        }
      }
      return fullOptionList.find(function(item) {
        return optionValue === item[valueField];
      });
    };
    var getSelectLabel = function(value) {
      var labelField = computeLabelField.value;
      var item = findOption(value);
      return xeUtils.toValueString(item ? item[labelField] : value);
    };
    var computeSelectLabel = computed(function() {
      var modelValue = props.modelValue, multiple = props.multiple;
      var multiMaxCharNum = computeMultiMaxCharNum.value;
      if (modelValue && multiple) {
        return (xeUtils.isArray(modelValue) ? modelValue : [modelValue]).map(function(val) {
          var label = getSelectLabel(val);
          if (multiMaxCharNum > 0 && label.length > multiMaxCharNum) {
            return label.substring(0, multiMaxCharNum) + "...";
          }
          return label;
        }).join(", ");
      }
      return getSelectLabel(modelValue);
    });
    var getOptkey = function() {
      return props.optionId || "_XID";
    };
    var getOptid = function(option) {
      var optid = option[getOptkey()];
      return optid ? encodeURIComponent(optid) : "";
    };
    var refreshOption = function() {
      var fullOptionList = reactData.fullOptionList, fullGroupList = reactData.fullGroupList;
      var isGroup = computeIsGroup.value;
      if (isGroup) {
        reactData.visibleGroupList = fullGroupList.filter(isOptionVisible);
      } else {
        reactData.visibleOptionList = fullOptionList.filter(isOptionVisible);
      }
      return nextTick();
    };
    var updateCache = function() {
      var fullOptionList = reactData.fullOptionList, fullGroupList = reactData.fullGroupList;
      var groupOptionsField = computeGroupOptionsField.value;
      var key = getOptkey();
      var handleOptis = function(item) {
        if (!getOptid(item)) {
          item[key] = getOptUniqueId();
        }
      };
      if (fullGroupList.length) {
        fullGroupList.forEach(function(group) {
          handleOptis(group);
          if (group[groupOptionsField]) {
            group[groupOptionsField].forEach(handleOptis);
          }
        });
      } else if (fullOptionList.length) {
        fullOptionList.forEach(handleOptis);
      }
      refreshOption();
    };
    var setCurrentOption = function(option) {
      var valueField = computeValueField.value;
      if (option) {
        reactData.currentValue = option[valueField];
      }
    };
    var scrollToOption = function(option, isAlignBottom) {
      return nextTick().then(function() {
        if (option) {
          var optWrapperElem = refOptionWrapper.value;
          var panelElem = refOptionPanel.value;
          var optElem = panelElem.querySelector("[optid='" + getOptid(option) + "']");
          if (optWrapperElem && optElem) {
            var wrapperHeight = optWrapperElem.offsetHeight;
            var offsetPadding = 5;
            if (isAlignBottom) {
              if (optElem.offsetTop + optElem.offsetHeight - optWrapperElem.scrollTop > wrapperHeight) {
                optWrapperElem.scrollTop = optElem.offsetTop + optElem.offsetHeight - wrapperHeight;
              }
            } else {
              if (optElem.offsetTop + offsetPadding < optWrapperElem.scrollTop || optElem.offsetTop + offsetPadding > optWrapperElem.scrollTop + optWrapperElem.clientHeight) {
                optWrapperElem.scrollTop = optElem.offsetTop - offsetPadding;
              }
            }
          }
        }
      });
    };
    var updateZindex = function() {
      if (reactData.panelIndex < getLastZIndex()) {
        reactData.panelIndex = nextZIndex();
      }
    };
    var updatePlacement = function() {
      return nextTick().then(function() {
        var transfer = props.transfer, placement = props.placement;
        var panelIndex = reactData.panelIndex;
        var el = refElem.value;
        var panelElem = refOptionPanel.value;
        if (panelElem && el) {
          var targetHeight = el.offsetHeight;
          var targetWidth = el.offsetWidth;
          var panelHeight = panelElem.offsetHeight;
          var panelWidth = panelElem.offsetWidth;
          var marginSize = 5;
          var panelStyle = {
            zIndex: panelIndex
          };
          var _a = getAbsolutePos(el), boundingTop = _a.boundingTop, boundingLeft = _a.boundingLeft, visibleHeight = _a.visibleHeight, visibleWidth = _a.visibleWidth;
          var panelPlacement = "bottom";
          if (transfer) {
            var left = boundingLeft;
            var top_1 = boundingTop + targetHeight;
            if (placement === "top") {
              panelPlacement = "top";
              top_1 = boundingTop - panelHeight;
            } else if (!placement) {
              if (top_1 + panelHeight + marginSize > visibleHeight) {
                panelPlacement = "top";
                top_1 = boundingTop - panelHeight;
              }
              if (top_1 < marginSize) {
                panelPlacement = "bottom";
                top_1 = boundingTop + targetHeight;
              }
            }
            if (left + panelWidth + marginSize > visibleWidth) {
              left -= left + panelWidth + marginSize - visibleWidth;
            }
            if (left < marginSize) {
              left = marginSize;
            }
            Object.assign(panelStyle, {
              left: left + "px",
              top: top_1 + "px",
              minWidth: targetWidth + "px"
            });
          } else {
            if (placement === "top") {
              panelPlacement = "top";
              panelStyle.bottom = targetHeight + "px";
            } else if (!placement) {
              if (boundingTop + targetHeight + panelHeight > visibleHeight) {
                if (boundingTop - targetHeight - panelHeight > marginSize) {
                  panelPlacement = "top";
                  panelStyle.bottom = targetHeight + "px";
                }
              }
            }
          }
          reactData.panelStyle = panelStyle;
          reactData.panelPlacement = panelPlacement;
          return nextTick();
        }
      });
    };
    var hidePanelTimeout;
    var showOptionPanel = function() {
      var loading = props.loading, disabled = props.disabled;
      if (!loading && !disabled) {
        clearTimeout(hidePanelTimeout);
        if (!reactData.inited) {
          reactData.inited = true;
        }
        reactData.isActivated = true;
        reactData.animatVisible = true;
        setTimeout(function() {
          var modelValue = props.modelValue, multiple = props.multiple;
          var currOption = findOption(multiple && modelValue ? modelValue[0] : modelValue);
          reactData.visiblePanel = true;
          if (currOption) {
            setCurrentOption(currOption);
            scrollToOption(currOption);
          }
        }, 10);
        updateZindex();
        updatePlacement();
      }
    };
    var hideOptionPanel = function() {
      reactData.visiblePanel = false;
      hidePanelTimeout = window.setTimeout(function() {
        reactData.animatVisible = false;
      }, 350);
    };
    var changeEvent = function(evnt, selectValue) {
      if (selectValue !== props.modelValue) {
        emit("update:modelValue", selectValue);
        selectMethods.dispatchEvent("change", { value: selectValue }, evnt);
      }
    };
    var clearValueEvent = function(evnt, selectValue) {
      changeEvent(evnt, selectValue);
      selectMethods.dispatchEvent("clear", { value: selectValue }, evnt);
    };
    var clearEvent = function(params, evnt) {
      clearValueEvent(evnt, null);
      hideOptionPanel();
    };
    var changeOptionEvent = function(evnt, selectValue) {
      var modelValue = props.modelValue, multiple = props.multiple;
      if (multiple) {
        var multipleValue = void 0;
        if (modelValue) {
          if (modelValue.indexOf(selectValue) === -1) {
            multipleValue = modelValue.concat([selectValue]);
          } else {
            multipleValue = modelValue.filter(function(val) {
              return val !== selectValue;
            });
          }
        } else {
          multipleValue = [selectValue];
        }
        changeEvent(evnt, multipleValue);
      } else {
        changeEvent(evnt, selectValue);
        hideOptionPanel();
      }
    };
    var handleGlobalMousewheelEvent = function(evnt) {
      var disabled = props.disabled;
      var visiblePanel = reactData.visiblePanel;
      if (!disabled) {
        if (visiblePanel) {
          var panelElem = refOptionPanel.value;
          if (getEventTargetNode(evnt, panelElem).flag) {
            updatePlacement();
          } else {
            hideOptionPanel();
          }
        }
      }
    };
    var handleGlobalMousedownEvent = function(evnt) {
      var disabled = props.disabled;
      var visiblePanel = reactData.visiblePanel;
      if (!disabled) {
        var el = refElem.value;
        var panelElem = refOptionPanel.value;
        reactData.isActivated = getEventTargetNode(evnt, el).flag || getEventTargetNode(evnt, panelElem).flag;
        if (visiblePanel && !reactData.isActivated) {
          hideOptionPanel();
        }
      }
    };
    var findOffsetOption = function(optionValue, isUpArrow) {
      var visibleOptionList = reactData.visibleOptionList, visibleGroupList = reactData.visibleGroupList;
      var isGroup = computeIsGroup.value;
      var valueField = computeValueField.value;
      var groupOptionsField = computeGroupOptionsField.value;
      var firstOption;
      var prevOption;
      var nextOption;
      var currOption;
      if (isGroup) {
        for (var gIndex = 0; gIndex < visibleGroupList.length; gIndex++) {
          var group = visibleGroupList[gIndex];
          var groupOptionList = group[groupOptionsField];
          var isGroupDisabled = group.disabled;
          if (groupOptionList) {
            for (var index = 0; index < groupOptionList.length; index++) {
              var option = groupOptionList[index];
              var isVisible = isOptionVisible(option);
              var isDisabled = isGroupDisabled || option.disabled;
              if (!firstOption && !isDisabled) {
                firstOption = option;
              }
              if (currOption) {
                if (isVisible && !isDisabled) {
                  nextOption = option;
                  if (!isUpArrow) {
                    return { offsetOption: nextOption };
                  }
                }
              }
              if (optionValue === option[valueField]) {
                currOption = option;
                if (isUpArrow) {
                  return { offsetOption: prevOption };
                }
              } else {
                if (isVisible && !isDisabled) {
                  prevOption = option;
                }
              }
            }
          }
        }
      } else {
        for (var index = 0; index < visibleOptionList.length; index++) {
          var option = visibleOptionList[index];
          var isDisabled = option.disabled;
          if (!firstOption && !isDisabled) {
            firstOption = option;
          }
          if (currOption) {
            if (!isDisabled) {
              nextOption = option;
              if (!isUpArrow) {
                return { offsetOption: nextOption };
              }
            }
          }
          if (optionValue === option[valueField]) {
            currOption = option;
            if (isUpArrow) {
              return { offsetOption: prevOption };
            }
          } else {
            if (!isDisabled) {
              prevOption = option;
            }
          }
        }
      }
      return { firstOption };
    };
    var handleGlobalKeydownEvent = function(evnt) {
      var clearable = props.clearable, disabled = props.disabled;
      var visiblePanel = reactData.visiblePanel, currentValue = reactData.currentValue;
      if (!disabled) {
        var isTab = hasEventKey(evnt, EVENT_KEYS.TAB);
        var isEnter = hasEventKey(evnt, EVENT_KEYS.ENTER);
        var isEsc = hasEventKey(evnt, EVENT_KEYS.ESCAPE);
        var isUpArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_UP);
        var isDwArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_DOWN);
        var isDel = hasEventKey(evnt, EVENT_KEYS.DELETE);
        var isSpacebar = hasEventKey(evnt, EVENT_KEYS.SPACEBAR);
        if (isTab) {
          reactData.isActivated = false;
        }
        if (visiblePanel) {
          if (isEsc || isTab) {
            hideOptionPanel();
          } else if (isEnter) {
            evnt.preventDefault();
            evnt.stopPropagation();
            changeOptionEvent(evnt, currentValue);
          } else if (isUpArrow || isDwArrow) {
            evnt.preventDefault();
            var _a = findOffsetOption(currentValue, isUpArrow), firstOption = _a.firstOption, offsetOption = _a.offsetOption;
            if (!offsetOption && !findOption(currentValue)) {
              offsetOption = firstOption;
            }
            setCurrentOption(offsetOption);
            scrollToOption(offsetOption, isDwArrow);
          } else if (isSpacebar) {
            evnt.preventDefault();
          }
        } else if ((isUpArrow || isDwArrow || isEnter || isSpacebar) && reactData.isActivated) {
          evnt.preventDefault();
          showOptionPanel();
        }
        if (reactData.isActivated) {
          if (isDel && clearable) {
            clearValueEvent(evnt, null);
          }
        }
      }
    };
    var handleGlobalBlurEvent = function() {
      hideOptionPanel();
    };
    var focusEvent = function() {
      if (!props.disabled) {
        reactData.isActivated = true;
      }
    };
    var blurEvent = function() {
      reactData.isActivated = false;
    };
    var togglePanelEvent = function(params) {
      var $event = params.$event;
      $event.preventDefault();
      if (reactData.visiblePanel) {
        hideOptionPanel();
      } else {
        showOptionPanel();
      }
    };
    var renderOption = function(list, group) {
      var optionKey = props.optionKey, modelValue = props.modelValue, multiple = props.multiple;
      var currentValue = reactData.currentValue;
      var labelField = computeLabelField.value;
      var valueField = computeValueField.value;
      var isGroup = computeIsGroup.value;
      return list.map(function(option, cIndex) {
        var slots2 = option.slots, className = option.className;
        var isVisible = !isGroup || isOptionVisible(option);
        var isDisabled = group && group.disabled || option.disabled;
        var optionValue = option[valueField];
        var optid = getOptid(option);
        var defaultSlot = slots2 ? slots2.default : null;
        return isVisible ? h("div", {
          key: optionKey ? optid : cIndex,
          class: ["vxe-select-option", className ? xeUtils.isFunction(className) ? className({ option, $select: $xeselect }) : className : "", {
            "is--disabled": isDisabled,
            "is--selected": multiple ? modelValue && modelValue.indexOf(optionValue) > -1 : modelValue === optionValue,
            "is--hover": currentValue === optionValue
          }],
          optid,
          onMousedown: function(evnt) {
            var isLeftBtn = evnt.button === 0;
            if (isLeftBtn) {
              evnt.stopPropagation();
            }
          },
          onClick: function(evnt) {
            if (!isDisabled) {
              changeOptionEvent(evnt, optionValue);
            }
          },
          onMouseenter: function() {
            if (!isDisabled) {
              setCurrentOption(option);
            }
          }
        }, defaultSlot ? callSlot(defaultSlot, { option, $select: $xeselect }) : formatText(getFuncText(option[labelField]))) : null;
      });
    };
    var renderOptgroup = function() {
      var optionKey = props.optionKey;
      var visibleGroupList = reactData.visibleGroupList;
      var groupLabelField = computeGroupLabelField.value;
      var groupOptionsField = computeGroupOptionsField.value;
      return visibleGroupList.map(function(group, gIndex) {
        var slots2 = group.slots, className = group.className;
        var optid = getOptid(group);
        var isGroupDisabled = group.disabled;
        var defaultSlot = slots2 ? slots2.default : null;
        return h("div", {
          key: optionKey ? optid : gIndex,
          class: ["vxe-optgroup", className ? xeUtils.isFunction(className) ? className({ option: group, $select: $xeselect }) : className : "", {
            "is--disabled": isGroupDisabled
          }],
          optid
        }, [
          h("div", {
            class: "vxe-optgroup--title"
          }, defaultSlot ? callSlot(defaultSlot, { option: group, $select: $xeselect }) : getFuncText(group[groupLabelField])),
          h("div", {
            class: "vxe-optgroup--wrapper"
          }, renderOption(group[groupOptionsField] || [], group))
        ]);
      });
    };
    var renderOpts = function() {
      var visibleGroupList = reactData.visibleGroupList, visibleOptionList = reactData.visibleOptionList;
      var isGroup = computeIsGroup.value;
      if (isGroup) {
        if (visibleGroupList.length) {
          return renderOptgroup();
        }
      } else {
        if (visibleOptionList.length) {
          return renderOption(visibleOptionList);
        }
      }
      return [
        h("div", {
          class: "vxe-select--empty-placeholder"
        }, props.emptyText || GlobalConfig.i18n("vxe.select.emptyText"))
      ];
    };
    selectMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $select: $xeselect, $event: evnt }, params));
      },
      isPanelVisible: function() {
        return reactData.visiblePanel;
      },
      togglePanel: function() {
        if (reactData.visiblePanel) {
          hideOptionPanel();
        } else {
          showOptionPanel();
        }
        return nextTick();
      },
      hidePanel: function() {
        if (reactData.visiblePanel) {
          hideOptionPanel();
        }
        return nextTick();
      },
      showPanel: function() {
        if (!reactData.visiblePanel) {
          showOptionPanel();
        }
        return nextTick();
      },
      refreshOption,
      focus: function() {
        var $input = refInput.value;
        reactData.isActivated = true;
        $input.blur();
        return nextTick();
      },
      blur: function() {
        var $input = refInput.value;
        $input.blur();
        reactData.isActivated = false;
        return nextTick();
      }
    };
    Object.assign($xeselect, selectMethods);
    watch(function() {
      return reactData.staticOptions;
    }, function(value) {
      if (value.some(function(item) {
        return item.options && item.options.length;
      })) {
        reactData.fullOptionList = [];
        reactData.fullGroupList = value;
      } else {
        reactData.fullGroupList = [];
        reactData.fullOptionList = value || [];
      }
      updateCache();
    });
    watch(function() {
      return props.options;
    }, function(value) {
      reactData.fullGroupList = [];
      reactData.fullOptionList = value || [];
      updateCache();
    });
    watch(function() {
      return props.optionGroups;
    }, function(value) {
      reactData.fullOptionList = [];
      reactData.fullGroupList = value || [];
      updateCache();
    });
    onMounted(function() {
      nextTick(function() {
        var options = props.options, optionGroups = props.optionGroups;
        if (optionGroups) {
          reactData.fullGroupList = optionGroups;
        } else if (options) {
          reactData.fullOptionList = options;
        }
        updateCache();
      });
      GlobalEvent.on($xeselect, "mousewheel", handleGlobalMousewheelEvent);
      GlobalEvent.on($xeselect, "mousedown", handleGlobalMousedownEvent);
      GlobalEvent.on($xeselect, "keydown", handleGlobalKeydownEvent);
      GlobalEvent.on($xeselect, "blur", handleGlobalBlurEvent);
    });
    onUnmounted(function() {
      GlobalEvent.off($xeselect, "mousewheel");
      GlobalEvent.off($xeselect, "mousedown");
      GlobalEvent.off($xeselect, "keydown");
      GlobalEvent.off($xeselect, "blur");
    });
    var renderVN = function() {
      var _a, _b;
      var className = props.className, transfer = props.transfer, disabled = props.disabled, loading = props.loading;
      var inited = reactData.inited, isActivated = reactData.isActivated, visiblePanel = reactData.visiblePanel;
      var vSize = computeSize.value;
      var selectLabel = computeSelectLabel.value;
      var prefixSlot = slots.prefix;
      return h("div", {
        ref: refElem,
        class: ["vxe-select", className ? xeUtils.isFunction(className) ? className({ $select: $xeselect }) : className : "", (_a = {}, _a["size--" + vSize] = vSize, _a["is--visivle"] = visiblePanel, _a["is--disabled"] = disabled, _a["is--loading"] = loading, _a["is--active"] = isActivated, _a)]
      }, [
        h("div", {
          class: "vxe-select-slots",
          ref: "hideOption"
        }, slots.default ? slots.default({}) : []),
        h(resolveComponent("vxe-input"), {
          ref: refInput,
          clearable: props.clearable,
          placeholder: props.placeholder,
          readonly: true,
          disabled,
          type: "text",
          prefixIcon: props.prefixIcon,
          suffixIcon: loading ? GlobalConfig.icon.SELECT_LOADED : visiblePanel ? GlobalConfig.icon.SELECT_OPEN : GlobalConfig.icon.SELECT_CLOSE,
          modelValue: selectLabel,
          onClear: clearEvent,
          onClick: togglePanelEvent,
          onFocus: focusEvent,
          onBlur: blurEvent,
          onSuffixClick: togglePanelEvent
        }, prefixSlot ? {
          prefix: function() {
            return prefixSlot({});
          }
        } : {}),
        h(Teleport, {
          to: "body",
          disabled: transfer ? !inited : true
        }, [
          h("div", {
            ref: refOptionPanel,
            class: ["vxe-table--ignore-clear vxe-select--panel", (_b = {}, _b["size--" + vSize] = vSize, _b["is--transfer"] = transfer, _b["animat--leave"] = !loading && reactData.animatVisible, _b["animat--enter"] = !loading && visiblePanel, _b)],
            placement: reactData.panelPlacement,
            style: reactData.panelStyle
          }, inited ? [
            h("div", {
              ref: refOptionWrapper,
              class: "vxe-select-option--wrapper"
            }, renderOpts())
          ] : [])
        ])
      ]);
    };
    $xeselect.renderVN = renderVN;
    provide("$xeselect", $xeselect);
    return $xeselect;
  },
  render: function() {
    return this.renderVN();
  }
});
var ExportPanelComponent = defineComponent({
  name: "VxeExportPanel",
  props: {
    defaultOptions: Object,
    storeData: Object
  },
  setup: function(props) {
    var $xetable = inject("$xetable", {});
    var _a = $xetable.getComputeMaps(), computeExportOpts = _a.computeExportOpts, computePrintOpts = _a.computePrintOpts;
    var reactData = reactive({
      isAll: false,
      isIndeterminate: false,
      loading: false
    });
    var xButtonConfirm = ref();
    var xInputFilename = ref();
    var xInputSheetname = ref();
    var computeCheckedAll = computed(function() {
      var storeData = props.storeData;
      return storeData.columns.every(function(column) {
        return column.checked;
      });
    });
    var computeShowSheet = computed(function() {
      var defaultOptions = props.defaultOptions;
      return ["html", "xml", "xlsx", "pdf"].indexOf(defaultOptions.type) > -1;
    });
    var computeSupportMerge = computed(function() {
      var storeData = props.storeData, defaultOptions = props.defaultOptions;
      return !defaultOptions.original && defaultOptions.mode === "current" && (storeData.isPrint || ["html", "xlsx"].indexOf(defaultOptions.type) > -1);
    });
    var computeSupportStyle = computed(function() {
      var defaultOptions = props.defaultOptions;
      return !defaultOptions.original && ["xlsx"].indexOf(defaultOptions.type) > -1;
    });
    var handleOptionCheck = function(column) {
      var storeData = props.storeData;
      var matchObj = xeUtils.findTree(storeData.columns, function(item) {
        return item === column;
      });
      if (matchObj && matchObj.parent) {
        var parent_1 = matchObj.parent;
        if (parent_1.children && parent_1.children.length) {
          parent_1.checked = parent_1.children.every(function(column2) {
            return column2.checked;
          });
          parent_1.halfChecked = !parent_1.checked && parent_1.children.some(function(column2) {
            return column2.checked || column2.halfChecked;
          });
          handleOptionCheck(parent_1);
        }
      }
    };
    var checkStatus = function() {
      var storeData = props.storeData;
      var columns = storeData.columns;
      reactData.isAll = columns.every(function(column) {
        return column.disabled || column.checked;
      });
      reactData.isIndeterminate = !reactData.isAll && columns.some(function(column) {
        return !column.disabled && (column.checked || column.halfChecked);
      });
    };
    var changeOption = function(column) {
      var isChecked = !column.checked;
      xeUtils.eachTree([column], function(item) {
        item.checked = isChecked;
        item.halfChecked = false;
      });
      handleOptionCheck(column);
      checkStatus();
    };
    var allColumnEvent = function() {
      var storeData = props.storeData;
      var isAll = !reactData.isAll;
      xeUtils.eachTree(storeData.columns, function(column) {
        if (!column.disabled) {
          column.checked = isAll;
          column.halfChecked = false;
        }
      });
      reactData.isAll = isAll;
      checkStatus();
    };
    var showEvent = function() {
      nextTick(function() {
        var filenameInp = xInputFilename.value;
        var sheetnameInp = xInputSheetname.value;
        var confirmBtn = xButtonConfirm.value;
        var targetElem = filenameInp || sheetnameInp || confirmBtn;
        if (targetElem) {
          targetElem.focus();
        }
      });
      checkStatus();
    };
    var getExportOption = function() {
      var storeData = props.storeData, defaultOptions = props.defaultOptions;
      var hasMerge = storeData.hasMerge, columns = storeData.columns;
      var checkedAll = computeCheckedAll.value;
      var supportMerge = computeSupportMerge.value;
      var expColumns = xeUtils.searchTree(columns, function(column) {
        return column.checked;
      }, { children: "children", mapChildren: "childNodes", original: true });
      return Object.assign({}, defaultOptions, {
        columns: expColumns,
        isMerge: hasMerge && supportMerge && checkedAll ? defaultOptions.isMerge : false
      });
    };
    var printEvent = function() {
      var storeData = props.storeData;
      var printOpts = computePrintOpts.value;
      storeData.visible = false;
      $xetable.print(Object.assign({}, printOpts, getExportOption()));
    };
    var exportEvent = function() {
      var storeData = props.storeData;
      var exportOpts = computeExportOpts.value;
      reactData.loading = true;
      $xetable.exportData(Object.assign({}, exportOpts, getExportOption())).then(function() {
        reactData.loading = false;
        storeData.visible = false;
      }).catch(function() {
        reactData.loading = false;
      });
    };
    var cancelEvent = function() {
      var storeData = props.storeData;
      storeData.visible = false;
    };
    var confirmEvent = function() {
      var storeData = props.storeData;
      if (storeData.isPrint) {
        printEvent();
      } else {
        exportEvent();
      }
    };
    var renderVN = function() {
      var defaultOptions = props.defaultOptions, storeData = props.storeData;
      var isAll = reactData.isAll, isIndeterminate = reactData.isIndeterminate;
      var hasTree = storeData.hasTree, hasMerge = storeData.hasMerge, isPrint = storeData.isPrint, hasColgroup = storeData.hasColgroup;
      var isHeader = defaultOptions.isHeader;
      var cols = [];
      var checkedAll = computeCheckedAll.value;
      var showSheet = computeShowSheet.value;
      var supportMerge = computeSupportMerge.value;
      var supportStyle = computeSupportStyle.value;
      xeUtils.eachTree(storeData.columns, function(column) {
        var colTitle = formatText(column.getTitle(), 1);
        var isColGroup = column.children && column.children.length;
        cols.push(h("li", {
          class: ["vxe-export--panel-column-option", "level--" + column.level, {
            "is--group": isColGroup,
            "is--checked": column.checked,
            "is--indeterminate": column.halfChecked,
            "is--disabled": column.disabled
          }],
          title: colTitle,
          onClick: function() {
            if (!column.disabled) {
              changeOption(column);
            }
          }
        }, [
          h("span", {
            class: "vxe-checkbox--icon vxe-checkbox--checked-icon"
          }),
          h("span", {
            class: "vxe-checkbox--icon vxe-checkbox--unchecked-icon"
          }),
          h("span", {
            class: "vxe-checkbox--icon vxe-checkbox--indeterminate-icon"
          }),
          h("span", {
            class: "vxe-checkbox--label"
          }, colTitle)
        ]));
      });
      return h(VxeModalComponent, {
        modelValue: storeData.visible,
        title: GlobalConfig.i18n(isPrint ? "vxe.export.printTitle" : "vxe.export.expTitle"),
        width: 660,
        mask: true,
        lockView: true,
        showFooter: false,
        escClosable: true,
        maskClosable: true,
        loading: reactData.loading,
        "onUpdate:modelValue": function(value) {
          storeData.visible = value;
        },
        onShow: showEvent
      }, {
        default: function() {
          return h("div", {
            class: "vxe-export--panel"
          }, [
            h("table", {
              cellspacing: 0,
              cellpadding: 0,
              border: 0
            }, [
              h("tbody", [
                [
                  isPrint ? createCommentVNode() : h("tr", [
                    h("td", GlobalConfig.i18n("vxe.export.expName")),
                    h("td", [
                      h(VxeInputConstructor, {
                        ref: xInputFilename,
                        modelValue: defaultOptions.filename,
                        type: "text",
                        clearable: true,
                        placeholder: GlobalConfig.i18n("vxe.export.expNamePlaceholder"),
                        "onUpdate:modelValue": function(value) {
                          defaultOptions.filename = value;
                        }
                      })
                    ])
                  ]),
                  isPrint ? createCommentVNode() : h("tr", [
                    h("td", GlobalConfig.i18n("vxe.export.expType")),
                    h("td", [
                      h(VxeSelectComponent, {
                        modelValue: defaultOptions.type,
                        options: storeData.typeList.map(function(item) {
                          return {
                            value: item.value,
                            label: GlobalConfig.i18n(item.label)
                          };
                        }),
                        "onUpdate:modelValue": function(value) {
                          defaultOptions.type = value;
                        }
                      })
                    ])
                  ]),
                  isPrint || showSheet ? h("tr", [
                    h("td", GlobalConfig.i18n("vxe.export.expSheetName")),
                    h("td", [
                      h(VxeInputConstructor, {
                        ref: xInputSheetname,
                        modelValue: defaultOptions.sheetName,
                        type: "text",
                        clearable: true,
                        placeholder: GlobalConfig.i18n("vxe.export.expSheetNamePlaceholder"),
                        "onUpdate:modelValue": function(value) {
                          defaultOptions.sheetName = value;
                        }
                      })
                    ])
                  ]) : createCommentVNode(),
                  h("tr", [
                    h("td", GlobalConfig.i18n("vxe.export.expMode")),
                    h("td", [
                      h(VxeSelectComponent, {
                        modelValue: defaultOptions.mode,
                        options: storeData.modeList.map(function(item) {
                          return {
                            value: item.value,
                            label: GlobalConfig.i18n(item.label)
                          };
                        }),
                        "onUpdate:modelValue": function(value) {
                          defaultOptions.mode = value;
                        }
                      })
                    ])
                  ]),
                  h("tr", [
                    h("td", [GlobalConfig.i18n("vxe.export.expColumn")]),
                    h("td", [
                      h("div", {
                        class: "vxe-export--panel-column"
                      }, [
                        h("ul", {
                          class: "vxe-export--panel-column-header"
                        }, [
                          h("li", {
                            class: ["vxe-export--panel-column-option", {
                              "is--checked": isAll,
                              "is--indeterminate": isIndeterminate
                            }],
                            title: GlobalConfig.i18n("vxe.table.allTitle"),
                            onClick: allColumnEvent
                          }, [
                            h("span", {
                              class: "vxe-checkbox--icon vxe-checkbox--checked-icon"
                            }),
                            h("span", {
                              class: "vxe-checkbox--icon vxe-checkbox--unchecked-icon"
                            }),
                            h("span", {
                              class: "vxe-checkbox--icon vxe-checkbox--indeterminate-icon"
                            }),
                            h("span", {
                              class: "vxe-checkbox--label"
                            }, GlobalConfig.i18n("vxe.export.expCurrentColumn"))
                          ])
                        ]),
                        h("ul", {
                          class: "vxe-export--panel-column-body"
                        }, cols)
                      ])
                    ])
                  ]),
                  h("tr", [
                    h("td", GlobalConfig.i18n("vxe.export.expOpts")),
                    h("td", [
                      h("div", {
                        class: "vxe-export--panel-option-row"
                      }, [
                        h(VxeCheckboxComponent, {
                          modelValue: defaultOptions.isHeader,
                          title: GlobalConfig.i18n("vxe.export.expHeaderTitle"),
                          content: GlobalConfig.i18n("vxe.export.expOptHeader"),
                          "onUpdate:modelValue": function(value) {
                            defaultOptions.isHeader = value;
                          }
                        }),
                        h(VxeCheckboxComponent, {
                          modelValue: defaultOptions.isFooter,
                          disabled: !storeData.hasFooter,
                          title: GlobalConfig.i18n("vxe.export.expFooterTitle"),
                          content: GlobalConfig.i18n("vxe.export.expOptFooter"),
                          "onUpdate:modelValue": function(value) {
                            defaultOptions.isFooter = value;
                          }
                        }),
                        h(VxeCheckboxComponent, {
                          modelValue: defaultOptions.original,
                          title: GlobalConfig.i18n("vxe.export.expOriginalTitle"),
                          content: GlobalConfig.i18n("vxe.export.expOptOriginal"),
                          "onUpdate:modelValue": function(value) {
                            defaultOptions.original = value;
                          }
                        })
                      ]),
                      h("div", {
                        class: "vxe-export--panel-option-row"
                      }, [
                        h(VxeCheckboxComponent, {
                          modelValue: isHeader && hasColgroup && supportMerge ? defaultOptions.isColgroup : false,
                          title: GlobalConfig.i18n("vxe.export.expColgroupTitle"),
                          disabled: !isHeader || !hasColgroup || !supportMerge,
                          content: GlobalConfig.i18n("vxe.export.expOptColgroup"),
                          "onUpdate:modelValue": function(value) {
                            defaultOptions.isColgroup = value;
                          }
                        }),
                        h(VxeCheckboxComponent, {
                          modelValue: hasMerge && supportMerge && checkedAll ? defaultOptions.isMerge : false,
                          title: GlobalConfig.i18n("vxe.export.expMergeTitle"),
                          disabled: !hasMerge || !supportMerge || !checkedAll,
                          content: GlobalConfig.i18n("vxe.export.expOptMerge"),
                          "onUpdate:modelValue": function(value) {
                            defaultOptions.isMerge = value;
                          }
                        }),
                        isPrint ? createCommentVNode() : h(VxeCheckboxComponent, {
                          modelValue: supportStyle ? defaultOptions.useStyle : false,
                          disabled: !supportStyle,
                          title: GlobalConfig.i18n("vxe.export.expUseStyleTitle"),
                          content: GlobalConfig.i18n("vxe.export.expOptUseStyle"),
                          "onUpdate:modelValue": function(value) {
                            defaultOptions.useStyle = value;
                          }
                        }),
                        h(VxeCheckboxComponent, {
                          modelValue: hasTree ? defaultOptions.isAllExpand : false,
                          disabled: !hasTree,
                          title: GlobalConfig.i18n("vxe.export.expAllExpandTitle"),
                          content: GlobalConfig.i18n("vxe.export.expOptAllExpand"),
                          "onUpdate:modelValue": function(value) {
                            defaultOptions.isAllExpand = value;
                          }
                        })
                      ])
                    ])
                  ])
                ]
              ])
            ]),
            h("div", {
              class: "vxe-export--panel-btns"
            }, [
              h(VxeButtonComponent, {
                content: GlobalConfig.i18n("vxe.export.expCancel"),
                onClick: cancelEvent
              }),
              h(VxeButtonComponent, {
                ref: xButtonConfirm,
                status: "primary",
                content: GlobalConfig.i18n(isPrint ? "vxe.export.expPrint" : "vxe.export.expConfirm"),
                onClick: confirmEvent
              })
            ])
          ]);
        }
      });
    };
    return renderVN;
  }
});
var VxeRadioGroupComponent = defineComponent({
  name: "VxeRadioGroup",
  props: {
    modelValue: [String, Number, Boolean],
    disabled: Boolean,
    size: { type: String, default: function() {
      return GlobalConfig.radio.size || GlobalConfig.size;
    } }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var $xeradiogroup = {
      xID,
      props,
      context,
      name: xeUtils.uniqueId("xegroup_")
    };
    var radioGroupMethods = {};
    useSize(props);
    var radioGroupPrivateMethods = {
      handleChecked: function(params) {
        emit("update:modelValue", params.label);
        radioGroupMethods.dispatchEvent("change", params);
      }
    };
    radioGroupMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $radioGroup: $xeradiogroup, $event: evnt }, params));
      }
    };
    var renderVN = function() {
      return h("div", {
        class: "vxe-radio-group"
      }, slots.default ? slots.default({}) : []);
    };
    Object.assign($xeradiogroup, radioGroupPrivateMethods, {
      renderVN,
      dispatchEvent
    });
    provide("$xeradiogroup", $xeradiogroup);
    return renderVN;
  }
});
var VxeRadioComponent = defineComponent({
  name: "VxeRadio",
  props: {
    modelValue: [String, Number, Boolean],
    label: { type: [String, Number, Boolean], default: null },
    title: [String, Number],
    content: [String, Number],
    disabled: Boolean,
    name: String,
    size: { type: String, default: function() {
      return GlobalConfig.radio.size || GlobalConfig.size;
    } }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var $xeradio = {
      xID,
      props,
      context
    };
    var computeSize = useSize(props);
    var $xeradiogroup = inject("$xeradiogroup", null);
    var radioMethods = {};
    var computeDisabled = computed(function() {
      return props.disabled || $xeradiogroup && $xeradiogroup.props.disabled;
    });
    var computeName = computed(function() {
      return $xeradiogroup ? $xeradiogroup.name : props.name;
    });
    var computeChecked = computed(function() {
      var modelValue = props.modelValue, label = props.label;
      return $xeradiogroup ? $xeradiogroup.props.modelValue === label : modelValue === label;
    });
    var changeEvent = function(evnt) {
      var label = props.label;
      var isDisabled = computeDisabled.value;
      if (!isDisabled) {
        if ($xeradiogroup) {
          $xeradiogroup.handleChecked({ label }, evnt);
        } else {
          emit("update:modelValue", label);
          radioMethods.dispatchEvent("change", { label }, evnt);
        }
      }
    };
    radioMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $radio: $xeradio, $event: evnt }, params));
      }
    };
    Object.assign($xeradio, radioMethods);
    var renderVN = function() {
      var _a;
      var vSize = computeSize.value;
      var isDisabled = computeDisabled.value;
      var name = computeName.value;
      var checked = computeChecked.value;
      return h("label", {
        class: ["vxe-radio", (_a = {}, _a["size--" + vSize] = vSize, _a["is--disabled"] = isDisabled, _a)],
        title: props.title
      }, [
        h("input", {
          class: "vxe-radio--input",
          type: "radio",
          name,
          checked,
          disabled: isDisabled,
          onChange: changeEvent
        }),
        h("span", {
          class: "vxe-radio--icon"
        }),
        h("span", {
          class: "vxe-radio--label"
        }, slots.default ? slots.default({}) : getFuncText(props.content))
      ]);
    };
    $xeradio.renderVN = renderVN;
    return $xeradio;
  },
  render: function() {
    return this.renderVN();
  }
});
var ImportPanelComponent = defineComponent({
  name: "VxeImportPanel",
  props: {
    defaultOptions: Object,
    storeData: Object
  },
  setup: function(props) {
    var $xetable = inject("$xetable", {});
    var computeImportOpts = $xetable.getComputeMaps().computeImportOpts;
    var reactData = reactive({
      loading: false
    });
    var refFileBtn = ref();
    var computeSelectName = computed(function() {
      var storeData = props.storeData;
      return storeData.filename + "." + storeData.type;
    });
    var computeHasFile = computed(function() {
      var storeData = props.storeData;
      return storeData.file && storeData.type;
    });
    var computeParseTypeLabel = computed(function() {
      var storeData = props.storeData;
      var type = storeData.type, typeList = storeData.typeList;
      if (type) {
        var selectItem = xeUtils.find(typeList, function(item) {
          return type === item.value;
        });
        return selectItem ? GlobalConfig.i18n(selectItem.label) : "*.*";
      }
      return "*." + typeList.map(function(item) {
        return item.value;
      }).join(", *.");
    });
    var clearFileEvent = function() {
      var storeData = props.storeData;
      Object.assign(storeData, {
        filename: "",
        sheetName: "",
        type: ""
      });
    };
    var selectFileEvent = function() {
      var storeData = props.storeData, defaultOptions = props.defaultOptions;
      $xetable.readFile(defaultOptions).then(function(params) {
        var file = params.file;
        Object.assign(storeData, parseFile(file), { file });
      }).catch(function(e) {
        return e;
      });
    };
    var showEvent = function() {
      nextTick(function() {
        var targetElem = refFileBtn.value;
        if (targetElem) {
          targetElem.focus();
        }
      });
    };
    var cancelEvent = function() {
      var storeData = props.storeData;
      storeData.visible = false;
    };
    var importEvent = function() {
      var storeData = props.storeData, defaultOptions = props.defaultOptions;
      var importOpts = computeImportOpts.value;
      reactData.loading = true;
      $xetable.importByFile(storeData.file, Object.assign({}, importOpts, defaultOptions)).then(function() {
        reactData.loading = false;
        storeData.visible = false;
      }).catch(function() {
        reactData.loading = false;
      });
    };
    var renderVN = function() {
      var defaultOptions = props.defaultOptions, storeData = props.storeData;
      var selectName = computeSelectName.value;
      var hasFile = computeHasFile.value;
      var parseTypeLabel = computeParseTypeLabel.value;
      return h(VxeModalComponent, {
        modelValue: storeData.visible,
        title: GlobalConfig.i18n("vxe.import.impTitle"),
        width: 440,
        mask: true,
        lockView: true,
        showFooter: false,
        escClosable: true,
        maskClosable: true,
        loading: reactData.loading,
        "onUpdate:modelValue": function(value) {
          storeData.visible = value;
        },
        onShow: showEvent
      }, {
        default: function() {
          return h("div", {
            class: "vxe-export--panel"
          }, [
            h("table", {
              cellspacing: 0,
              cellpadding: 0,
              border: 0
            }, [
              h("tbody", [
                h("tr", [
                  h("td", GlobalConfig.i18n("vxe.import.impFile")),
                  h("td", [
                    hasFile ? h("div", {
                      class: "vxe-import-selected--file",
                      title: selectName
                    }, [
                      h("span", selectName),
                      h("i", {
                        class: GlobalConfig.icon.INPUT_CLEAR,
                        onClick: clearFileEvent
                      })
                    ]) : h("button", {
                      ref: refFileBtn,
                      class: "vxe-import-select--file",
                      onClick: selectFileEvent
                    }, GlobalConfig.i18n("vxe.import.impSelect"))
                  ])
                ]),
                h("tr", [
                  h("td", GlobalConfig.i18n("vxe.import.impType")),
                  h("td", parseTypeLabel)
                ]),
                h("tr", [
                  h("td", GlobalConfig.i18n("vxe.import.impOpts")),
                  h("td", [
                    h(VxeRadioGroupComponent, {
                      modelValue: defaultOptions.mode,
                      "onUpdate:modelValue": function(value) {
                        defaultOptions.mode = value;
                      }
                    }, {
                      default: function() {
                        return storeData.modeList.map(function(item) {
                          return h(VxeRadioComponent, { label: item.value, content: GlobalConfig.i18n(item.label) });
                        });
                      }
                    })
                  ])
                ])
              ])
            ]),
            h("div", {
              class: "vxe-export--panel-btns"
            }, [
              h(VxeButtonComponent, {
                content: GlobalConfig.i18n("vxe.import.impCancel"),
                onClick: cancelEvent
              }),
              h(VxeButtonComponent, {
                status: "primary",
                disabled: !hasFile,
                content: GlobalConfig.i18n("vxe.import.impConfirm"),
                onClick: importEvent
              })
            ])
          ]);
        }
      });
    };
    return renderVN;
  }
});
var fileForm;
var fileInput;
var printFrame;
var defaultHtmlStyle = 'body{margin:0;color:#333333;font-size:14px;font-family:"Microsoft YaHei",\u5FAE\u8F6F\u96C5\u9ED1,"MicrosoftJhengHei",\u534E\u6587\u7EC6\u9ED1,STHeiti,MingLiu}body *{-webkit-box-sizing:border-box;box-sizing:border-box}.vxe-table{border-collapse:collapse;text-align:left;border-spacing:0}.vxe-table:not(.is--print){table-layout:fixed}.vxe-table,.vxe-table th,.vxe-table td,.vxe-table td{border-color:#D0D0D0;border-style:solid;border-width:0}.vxe-table.is--print{width:100%}.border--default,.border--full,.border--outer{border-top-width:1px}.border--default,.border--full,.border--outer{border-left-width:1px}.border--outer,.border--default th,.border--default td,.border--full th,.border--full td,.border--outer th,.border--inner th,.border--inner td{border-bottom-width:1px}.border--default,.border--outer,.border--full th,.border--full td{border-right-width:1px}.border--default th,.border--full th,.border--outer th{background-color:#f8f8f9}.vxe-table td>div,.vxe-table th>div{padding:.5em .4em}.col--center{text-align:center}.col--right{text-align:right}.vxe-table:not(.is--print) .col--ellipsis>div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.vxe-table--tree-node{text-align:left}.vxe-table--tree-node-wrapper{position:relative}.vxe-table--tree-icon-wrapper{position:absolute;top:50%;width:1em;height:1em;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.vxe-table--tree-unfold-icon,.vxe-table--tree-fold-icon{position:absolute;width:0;height:0;border-style:solid;border-width:.5em;border-right-color:transparent;border-bottom-color:transparent}.vxe-table--tree-unfold-icon{left:.3em;top:0;border-left-color:#939599;border-top-color:transparent}.vxe-table--tree-fold-icon{left:0;top:.3em;border-left-color:transparent;border-top-color:#939599}.vxe-table--tree-cell{display:block;padding-left:1.5em}.vxe-table input[type="checkbox"]{margin:0}.vxe-table input[type="checkbox"],.vxe-table input[type="radio"],.vxe-table input[type="checkbox"]+span,.vxe-table input[type="radio"]+span{vertical-align:middle;padding-left:0.4em}';
function createFrame() {
  var frame = document.createElement("iframe");
  frame.className = "vxe-table--print-frame";
  return frame;
}
function getExportBlobByContent(content, options) {
  if (window.Blob) {
    return new Blob([content], { type: "text/" + options.type + ";charset=utf-8;" });
  }
  return null;
}
function createHtmlPage(opts, content) {
  var style2 = opts.style;
  return [
    "<!DOCTYPE html><html>",
    "<head>",
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">',
    "<title>" + opts.sheetName + "</title>",
    "<style>" + defaultHtmlStyle + "</style>",
    style2 ? "<style>" + style2 + "</style>" : "",
    "</head>",
    "<body>" + content + "</body>",
    "</html>"
  ].join("");
}
var readLocalFile = function(options) {
  var opts = Object.assign({}, options);
  if (!fileForm) {
    fileForm = document.createElement("form");
    fileInput = document.createElement("input");
    fileForm.className = "vxe-table--file-form";
    fileInput.name = "file";
    fileInput.type = "file";
    fileForm.appendChild(fileInput);
    document.body.appendChild(fileForm);
  }
  return new Promise(function(resolve, reject) {
    var types = opts.types || [];
    var isAllType = !types.length || types.some(function(type) {
      return type === "*";
    });
    fileInput.multiple = !!opts.multiple;
    fileInput.accept = isAllType ? "" : "." + types.join(", .");
    fileInput.onchange = function(evnt) {
      var files = evnt.target.files;
      var file = files[0];
      var errType = "";
      if (!isAllType) {
        for (var fIndex = 0; fIndex < files.length; fIndex++) {
          var type = parseFile(files[fIndex]).type;
          if (!xeUtils.includes(types, type)) {
            errType = type;
            break;
          }
        }
      }
      if (!errType) {
        resolve({ status: true, files, file });
      } else {
        if (opts.message !== false) {
          VXETable.modal.message({ content: GlobalConfig.i18n("vxe.error.notType", [errType]), status: "error" });
        }
        var params = { status: false, files, file };
        reject(params);
      }
    };
    fileForm.reset();
    fileInput.click();
  });
};
function removePrintFrame() {
  if (printFrame) {
    if (printFrame.parentNode) {
      try {
        printFrame.contentDocument.write("");
      } catch (e) {
      }
      printFrame.parentNode.removeChild(printFrame);
    }
    printFrame = null;
  }
}
function appendPrintFrame() {
  if (!printFrame.parentNode) {
    document.body.appendChild(printFrame);
  }
}
function afterPrintEvent() {
  requestAnimationFrame(removePrintFrame);
}
function handlePrint($xetable, opts, content) {
  if (content === void 0) {
    content = "";
  }
  var beforePrintMethod = opts.beforePrintMethod;
  if (beforePrintMethod) {
    content = beforePrintMethod({ content, options: opts, $table: $xetable }) || "";
  }
  content = createHtmlPage(opts, content);
  var blob = getExportBlobByContent(content, opts);
  if (browse.msie) {
    removePrintFrame();
    printFrame = createFrame();
    appendPrintFrame();
    printFrame.contentDocument.write(content);
    printFrame.contentDocument.execCommand("print");
  } else {
    if (!printFrame) {
      printFrame = createFrame();
      printFrame.onload = function(evnt) {
        if (evnt.target.src) {
          evnt.target.contentWindow.onafterprint = afterPrintEvent;
          evnt.target.contentWindow.print();
        }
      };
    }
    appendPrintFrame();
    printFrame.src = URL.createObjectURL(blob);
  }
}
var saveLocalFile = function(options) {
  var filename = options.filename, type = options.type, content = options.content;
  var name = filename + "." + type;
  if (window.Blob) {
    var blob = content instanceof Blob ? content : getExportBlobByContent(xeUtils.toValueString(content), options);
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, name);
    } else {
      var linkElem = document.createElement("a");
      linkElem.target = "_blank";
      linkElem.download = name;
      linkElem.href = URL.createObjectURL(blob);
      document.body.appendChild(linkElem);
      linkElem.click();
      document.body.removeChild(linkElem);
    }
    return Promise.resolve();
  }
  return Promise.reject(new Error(getLog("vxe.error.notExp")));
};
var htmlCellElem;
var csvBOM = "\uFEFF";
var enterSymbol = "\r\n";
function defaultFilterExportColumn(column) {
  return column.property || ["seq", "checkbox", "radio"].indexOf(column.type) > -1;
}
var getConvertColumns = function(columns) {
  var result = [];
  columns.forEach(function(column) {
    if (column.childNodes && column.childNodes.length) {
      result.push(column);
      result.push.apply(result, getConvertColumns(column.childNodes));
    } else {
      result.push(column);
    }
  });
  return result;
};
var convertToRows = function(originColumns) {
  var maxLevel = 1;
  var traverse = function(column, parent) {
    if (parent) {
      column._level = parent._level + 1;
      if (maxLevel < column._level) {
        maxLevel = column._level;
      }
    }
    if (column.childNodes && column.childNodes.length) {
      var colSpan_1 = 0;
      column.childNodes.forEach(function(subColumn) {
        traverse(subColumn, column);
        colSpan_1 += subColumn._colSpan;
      });
      column._colSpan = colSpan_1;
    } else {
      column._colSpan = 1;
    }
  };
  originColumns.forEach(function(column) {
    column._level = 1;
    traverse(column);
  });
  var rows = [];
  for (var i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  var allColumns = getConvertColumns(originColumns);
  allColumns.forEach(function(column) {
    if (column.childNodes && column.childNodes.length) {
      column._rowSpan = 1;
    } else {
      column._rowSpan = maxLevel - column._level + 1;
    }
    rows[column._level - 1].push(column);
  });
  return rows;
};
function toTableBorder(border) {
  if (border === true) {
    return "full";
  }
  if (border) {
    return border;
  }
  return "default";
}
function getBooleanValue(cellValue) {
  return cellValue === "TRUE" || cellValue === "true" || cellValue === true;
}
function getHeaderTitle(opts, column) {
  return (opts.original ? column.property : column.getTitle()) || "";
}
function getFooterData(opts, footerTableData) {
  var footerFilterMethod = opts.footerFilterMethod;
  return footerFilterMethod ? footerTableData.filter(function(items, index) {
    return footerFilterMethod({ items, $rowIndex: index });
  }) : footerTableData;
}
function getCsvCellTypeLabel(column, cellValue) {
  if (cellValue) {
    switch (column.cellType) {
      case "string":
        if (!isNaN(cellValue)) {
          return "	" + cellValue;
        }
        break;
      case "number":
        break;
      default:
        if (cellValue.length >= 12 && !isNaN(cellValue)) {
          return "	" + cellValue;
        }
        break;
    }
  }
  return cellValue;
}
function toTxtCellLabel(val) {
  if (/[",\s\n]/.test(val)) {
    return '"' + val.replace(/"/g, '""') + '"';
  }
  return val;
}
function getElementsByTagName(elem, qualifiedName) {
  return elem.getElementsByTagName(qualifiedName);
}
function getTxtCellKey(now) {
  return "#" + now + "@" + xeUtils.uniqueId();
}
function replaceTxtCell(cell, vMaps) {
  return cell.replace(/#\d+@\d+/g, function(key) {
    return xeUtils.hasOwnProp(vMaps, key) ? vMaps[key] : key;
  });
}
function getTxtCellValue(val, vMaps) {
  var rest = replaceTxtCell(val, vMaps);
  return rest.replace(/^"+$/g, function(qVal) {
    return '"'.repeat(Math.ceil(qVal.length / 2));
  });
}
function parseCsvAndTxt(columns, content, cellSeparator) {
  var list = content.split(enterSymbol);
  var rows = [];
  var fields = [];
  if (list.length) {
    var vMaps_1 = {};
    var now_1 = Date.now();
    list.forEach(function(rVal) {
      if (rVal) {
        var item_1 = {};
        rVal = rVal.replace(/("")|(\n)/g, function(text, dVal) {
          var key = getTxtCellKey(now_1);
          vMaps_1[key] = dVal ? '"' : "\n";
          return key;
        }).replace(/"(.*?)"/g, function(text, cVal) {
          var key = getTxtCellKey(now_1);
          vMaps_1[key] = replaceTxtCell(cVal, vMaps_1);
          return key;
        });
        var cells = rVal.split(cellSeparator);
        if (!fields.length) {
          fields = cells.map(function(val) {
            return getTxtCellValue(val.trim(), vMaps_1);
          });
        } else {
          cells.forEach(function(val, colIndex) {
            if (colIndex < fields.length) {
              item_1[fields[colIndex]] = getTxtCellValue(val.trim(), vMaps_1);
            }
          });
          rows.push(item_1);
        }
      }
    });
  }
  return { fields, rows };
}
function parseCsv(columns, content) {
  return parseCsvAndTxt(columns, content, ",");
}
function parseTxt(columns, content) {
  return parseCsvAndTxt(columns, content, "	");
}
function parseHTML(columns, content) {
  var domParser = new DOMParser();
  var xmlDoc = domParser.parseFromString(content, "text/html");
  var bodyNodes = getElementsByTagName(xmlDoc, "body");
  var rows = [];
  var fields = [];
  if (bodyNodes.length) {
    var tableNodes = getElementsByTagName(bodyNodes[0], "table");
    if (tableNodes.length) {
      var theadNodes = getElementsByTagName(tableNodes[0], "thead");
      if (theadNodes.length) {
        xeUtils.arrayEach(getElementsByTagName(theadNodes[0], "tr"), function(rowNode) {
          xeUtils.arrayEach(getElementsByTagName(rowNode, "th"), function(cellNode) {
            fields.push(cellNode.textContent);
          });
        });
        var tbodyNodes = getElementsByTagName(tableNodes[0], "tbody");
        if (tbodyNodes.length) {
          xeUtils.arrayEach(getElementsByTagName(tbodyNodes[0], "tr"), function(rowNode) {
            var item = {};
            xeUtils.arrayEach(getElementsByTagName(rowNode, "td"), function(cellNode, colIndex) {
              if (fields[colIndex]) {
                item[fields[colIndex]] = cellNode.textContent || "";
              }
            });
            rows.push(item);
          });
        }
      }
    }
  }
  return { fields, rows };
}
function parseXML(columns, content) {
  var domParser = new DOMParser();
  var xmlDoc = domParser.parseFromString(content, "application/xml");
  var sheetNodes = getElementsByTagName(xmlDoc, "Worksheet");
  var rows = [];
  var fields = [];
  if (sheetNodes.length) {
    var tableNodes = getElementsByTagName(sheetNodes[0], "Table");
    if (tableNodes.length) {
      var rowNodes = getElementsByTagName(tableNodes[0], "Row");
      if (rowNodes.length) {
        xeUtils.arrayEach(getElementsByTagName(rowNodes[0], "Cell"), function(cellNode) {
          fields.push(cellNode.textContent);
        });
        xeUtils.arrayEach(rowNodes, function(rowNode, index) {
          if (index) {
            var item_2 = {};
            var cellNodes = getElementsByTagName(rowNode, "Cell");
            xeUtils.arrayEach(cellNodes, function(cellNode, colIndex) {
              if (fields[colIndex]) {
                item_2[fields[colIndex]] = cellNode.textContent;
              }
            });
            rows.push(item_2);
          }
        });
      }
    }
  }
  return { fields, rows };
}
function clearColumnConvert(columns) {
  xeUtils.eachTree(columns, function(column) {
    delete column._level;
    delete column._colSpan;
    delete column._rowSpan;
    delete column._children;
    delete column.childNodes;
  }, { children: "children" });
}
function checkImportData(columns, fields) {
  var tableFields = [];
  columns.forEach(function(column) {
    var field = column.property;
    if (field) {
      tableFields.push(field);
    }
  });
  return fields.some(function(field) {
    return tableFields.indexOf(field) > -1;
  });
}
var tableExportMethodKeys = ["exportData", "importByFile", "importData", "saveFile", "readFile", "print", "openImport", "openExport", "openPrint"];
var tableExportHook = {
  setupTable: function($xetable) {
    var props = $xetable.props, reactData = $xetable.reactData, internalData = $xetable.internalData;
    var _a = $xetable.getComputeMaps(), computeTreeOpts = _a.computeTreeOpts, computePrintOpts = _a.computePrintOpts, computeExportOpts = _a.computeExportOpts, computeImportOpts = _a.computeImportOpts, computeCustomOpts = _a.computeCustomOpts, computeSeqOpts = _a.computeSeqOpts, computeRadioOpts = _a.computeRadioOpts, computeCheckboxOpts = _a.computeCheckboxOpts;
    var $xegrid = inject("$xegrid", null);
    var hasTreeChildren = function(row) {
      var treeOpts = computeTreeOpts.value;
      return row[treeOpts.children] && row[treeOpts.children].length;
    };
    var getSeq = function(row, rowIndex, column, columnIndex) {
      var seqOpts = computeSeqOpts.value;
      var seqMethod = seqOpts.seqMethod || column.seqMethod;
      return seqMethod ? seqMethod({ row, rowIndex, column, columnIndex }) : seqOpts.startIndex + rowIndex + 1;
    };
    var toBooleanValue = function(cellValue) {
      return xeUtils.isBoolean(cellValue) ? cellValue ? "TRUE" : "FALSE" : cellValue;
    };
    var getLabelData = function(opts, columns, datas) {
      var isAllExpand = opts.isAllExpand;
      var treeConfig = props.treeConfig;
      var radioOpts = computeRadioOpts.value;
      var checkboxOpts = computeCheckboxOpts.value;
      var treeOpts = computeTreeOpts.value;
      if (!htmlCellElem) {
        htmlCellElem = document.createElement("div");
      }
      if (treeConfig) {
        var rest_1 = [];
        xeUtils.eachTree(datas, function(item, rowIndex, items, path, parent, nodes) {
          var row = item._row || item;
          var parentRow = parent && parent._row ? parent._row : parent;
          if (isAllExpand || !parentRow || $xetable.isTreeExpandByRow(parentRow)) {
            var hasRowChild = hasTreeChildren(row);
            var item_3 = {
              _row: row,
              _level: nodes.length - 1,
              _hasChild: hasRowChild,
              _expand: hasRowChild && $xetable.isTreeExpandByRow(row)
            };
            columns.forEach(function(column, columnIndex) {
              var cellValue = "";
              var renderOpts = column.editRender || column.cellRender;
              var exportLabelMethod = column.exportMethod;
              if (!exportLabelMethod && renderOpts && renderOpts.name) {
                var compConf = VXETable.renderer.get(renderOpts.name);
                if (compConf) {
                  exportLabelMethod = compConf.exportMethod;
                }
              }
              if (exportLabelMethod) {
                cellValue = exportLabelMethod({ $table: $xetable, row, column, options: opts });
              } else {
                switch (column.type) {
                  case "seq":
                    cellValue = getSeq(row, rowIndex, column, columnIndex);
                    break;
                  case "checkbox":
                    cellValue = toBooleanValue($xetable.isCheckedByCheckboxRow(row));
                    item_3._checkboxLabel = checkboxOpts.labelField ? xeUtils.get(row, checkboxOpts.labelField) : "";
                    item_3._checkboxDisabled = checkboxOpts.checkMethod && !checkboxOpts.checkMethod({ row });
                    break;
                  case "radio":
                    cellValue = toBooleanValue($xetable.isCheckedByRadioRow(row));
                    item_3._radioLabel = radioOpts.labelField ? xeUtils.get(row, radioOpts.labelField) : "";
                    item_3._radioDisabled = radioOpts.checkMethod && !radioOpts.checkMethod({ row });
                    break;
                  default:
                    if (opts.original) {
                      cellValue = getCellValue(row, column);
                    } else {
                      cellValue = $xetable.getCellLabel(row, column);
                      if (column.type === "html") {
                        htmlCellElem.innerHTML = cellValue;
                        cellValue = htmlCellElem.innerText.trim();
                      } else {
                        var cell = $xetable.getCell(row, column);
                        if (cell) {
                          cellValue = cell.innerText.trim();
                        }
                      }
                    }
                }
              }
              item_3[column.id] = xeUtils.toValueString(cellValue);
            });
            rest_1.push(Object.assign(item_3, row));
          }
        }, treeOpts);
        return rest_1;
      }
      return datas.map(function(row, rowIndex) {
        var item = {
          _row: row
        };
        columns.forEach(function(column, columnIndex) {
          var cellValue = "";
          var renderOpts = column.editRender || column.cellRender;
          var exportLabelMethod = column.exportMethod;
          if (!exportLabelMethod && renderOpts && renderOpts.name) {
            var compConf = VXETable.renderer.get(renderOpts.name);
            if (compConf) {
              exportLabelMethod = compConf.exportMethod;
            }
          }
          if (exportLabelMethod) {
            cellValue = exportLabelMethod({ $table: $xetable, row, column, options: opts });
          } else {
            switch (column.type) {
              case "seq":
                cellValue = getSeq(row, rowIndex, column, columnIndex);
                break;
              case "checkbox":
                cellValue = toBooleanValue($xetable.isCheckedByCheckboxRow(row));
                item._checkboxLabel = checkboxOpts.labelField ? xeUtils.get(row, checkboxOpts.labelField) : "";
                item._checkboxDisabled = checkboxOpts.checkMethod && !checkboxOpts.checkMethod({ row });
                break;
              case "radio":
                cellValue = toBooleanValue($xetable.isCheckedByRadioRow(row));
                item._radioLabel = radioOpts.labelField ? xeUtils.get(row, radioOpts.labelField) : "";
                item._radioDisabled = radioOpts.checkMethod && !radioOpts.checkMethod({ row });
                break;
              default:
                if (opts.original) {
                  cellValue = getCellValue(row, column);
                } else {
                  cellValue = $xetable.getCellLabel(row, column);
                  if (column.type === "html") {
                    htmlCellElem.innerHTML = cellValue;
                    cellValue = htmlCellElem.innerText.trim();
                  } else {
                    var cell = $xetable.getCell(row, column);
                    if (cell) {
                      cellValue = cell.innerText.trim();
                    }
                  }
                }
            }
          }
          item[column.id] = xeUtils.toValueString(cellValue);
        });
        return item;
      });
    };
    var getExportData = function(opts) {
      var columns = opts.columns, dataFilterMethod = opts.dataFilterMethod;
      var datas = opts.data;
      if (dataFilterMethod) {
        datas = datas.filter(function(row, index) {
          return dataFilterMethod({ row, $rowIndex: index });
        });
      }
      return getLabelData(opts, columns, datas);
    };
    var getFooterCellValue = function(opts, items, column) {
      var renderOpts = column.editRender || column.cellRender;
      var exportLabelMethod = column.footerExportMethod;
      if (!exportLabelMethod && renderOpts && renderOpts.name) {
        var compConf = VXETable.renderer.get(renderOpts.name);
        if (compConf) {
          exportLabelMethod = compConf.footerExportMethod;
        }
      }
      var _columnIndex = $xetable.getVTColumnIndex(column);
      var cellValue = exportLabelMethod ? exportLabelMethod({ $table: $xetable, items, itemIndex: _columnIndex, _columnIndex, column, options: opts }) : xeUtils.toValueString(items[_columnIndex]);
      return cellValue;
    };
    var toCsv = function(opts, columns, datas) {
      var content = csvBOM;
      if (opts.isHeader) {
        content += columns.map(function(column) {
          return toTxtCellLabel(getHeaderTitle(opts, column));
        }).join(",") + enterSymbol;
      }
      datas.forEach(function(row) {
        content += columns.map(function(column) {
          return toTxtCellLabel(getCsvCellTypeLabel(column, row[column.id]));
        }).join(",") + enterSymbol;
      });
      if (opts.isFooter) {
        var footerTableData = reactData.footerTableData;
        var footers = getFooterData(opts, footerTableData);
        footers.forEach(function(rows) {
          content += columns.map(function(column) {
            return toTxtCellLabel(getFooterCellValue(opts, rows, column));
          }).join(",") + enterSymbol;
        });
      }
      return content;
    };
    var toTxt = function(opts, columns, datas) {
      var content = "";
      if (opts.isHeader) {
        content += columns.map(function(column) {
          return toTxtCellLabel(getHeaderTitle(opts, column));
        }).join("	") + enterSymbol;
      }
      datas.forEach(function(row) {
        content += columns.map(function(column) {
          return toTxtCellLabel(row[column.id]);
        }).join("	") + enterSymbol;
      });
      if (opts.isFooter) {
        var footerTableData = reactData.footerTableData;
        var footers = getFooterData(opts, footerTableData);
        footers.forEach(function(rows) {
          content += columns.map(function(column) {
            return toTxtCellLabel(getFooterCellValue(opts, rows, column));
          }).join(",") + enterSymbol;
        });
      }
      return content;
    };
    var hasEllipsis = function(column, property, allColumnOverflow) {
      var columnOverflow = column[property];
      var headOverflow = xeUtils.isUndefined(columnOverflow) || xeUtils.isNull(columnOverflow) ? allColumnOverflow : columnOverflow;
      var showEllipsis = headOverflow === "ellipsis";
      var showTitle = headOverflow === "title";
      var showTooltip = headOverflow === true || headOverflow === "tooltip";
      var isEllipsis = showTitle || showTooltip || showEllipsis;
      var scrollXLoad = reactData.scrollXLoad, scrollYLoad = reactData.scrollYLoad;
      if ((scrollXLoad || scrollYLoad) && !isEllipsis) {
        isEllipsis = true;
      }
      return isEllipsis;
    };
    var toHtml = function(opts, columns, datas) {
      var id = props.id, border = props.border, treeConfig = props.treeConfig, allHeaderAlign = props.headerAlign, allAlign = props.align, allFooterAlign = props.footerAlign, allColumnOverflow = props.showOverflow, allColumnHeaderOverflow = props.showHeaderOverflow;
      var isAllSelected = reactData.isAllSelected, isIndeterminate = reactData.isIndeterminate, mergeList = reactData.mergeList;
      var treeOpts = computeTreeOpts.value;
      var isPrint = opts.print, isHeader = opts.isHeader, isFooter = opts.isFooter, isColgroup = opts.isColgroup, isMerge = opts.isMerge, colgroups = opts.colgroups, original = opts.original;
      var allCls = "check-all";
      var clss = [
        "vxe-table",
        "border--" + toTableBorder(border),
        isPrint ? "is--print" : "",
        isHeader ? "is--header" : ""
      ].filter(function(cls) {
        return cls;
      });
      var tables = [
        '<table class="' + clss.join(" ") + '" border="0" cellspacing="0" cellpadding="0">',
        "<colgroup>" + columns.map(function(column) {
          return '<col style="width:' + column.renderWidth + 'px">';
        }).join("") + "</colgroup>"
      ];
      if (isHeader) {
        tables.push("<thead>");
        if (isColgroup && !original) {
          colgroups.forEach(function(cols) {
            tables.push("<tr>" + cols.map(function(column) {
              var headAlign = column.headerAlign || column.align || allHeaderAlign || allAlign;
              var classNames = hasEllipsis(column, "showHeaderOverflow", allColumnHeaderOverflow) ? ["col--ellipsis"] : [];
              var cellTitle = getHeaderTitle(opts, column);
              var childWidth = 0;
              var countChild = 0;
              xeUtils.eachTree([column], function(item) {
                if (!item.childNodes || !column.childNodes.length) {
                  countChild++;
                }
                childWidth += item.renderWidth;
              }, { children: "childNodes" });
              var cellWidth = childWidth - countChild;
              if (headAlign) {
                classNames.push("col--" + headAlign);
              }
              if (column.type === "checkbox") {
                return '<th class="' + classNames.join(" ") + '" colspan="' + column._colSpan + '" rowspan="' + column._rowSpan + '"><div ' + (isPrint ? "" : 'style="width: ' + cellWidth + 'px"') + '><input type="checkbox" class="' + allCls + '" ' + (isAllSelected ? "checked" : "") + "><span>" + cellTitle + "</span></div></th>";
              }
              return '<th class="' + classNames.join(" ") + '" colspan="' + column._colSpan + '" rowspan="' + column._rowSpan + '" title="' + cellTitle + '"><div ' + (isPrint ? "" : 'style="width: ' + cellWidth + 'px"') + "><span>" + formatText(cellTitle, true) + "</span></div></th>";
            }).join("") + "</tr>");
          });
        } else {
          tables.push("<tr>" + columns.map(function(column) {
            var headAlign = column.headerAlign || column.align || allHeaderAlign || allAlign;
            var classNames = hasEllipsis(column, "showHeaderOverflow", allColumnHeaderOverflow) ? ["col--ellipsis"] : [];
            var cellTitle = getHeaderTitle(opts, column);
            if (headAlign) {
              classNames.push("col--" + headAlign);
            }
            if (column.type === "checkbox") {
              return '<th class="' + classNames.join(" ") + '"><div ' + (isPrint ? "" : 'style="width: ' + column.renderWidth + 'px"') + '><input type="checkbox" class="' + allCls + '" ' + (isAllSelected ? "checked" : "") + "><span>" + cellTitle + "</span></div></th>";
            }
            return '<th class="' + classNames.join(" ") + '" title="' + cellTitle + '"><div ' + (isPrint ? "" : 'style="width: ' + column.renderWidth + 'px"') + "><span>" + formatText(cellTitle, true) + "</span></div></th>";
          }).join("") + "</tr>");
        }
        tables.push("</thead>");
      }
      if (datas.length) {
        tables.push("<tbody>");
        if (treeConfig) {
          datas.forEach(function(item) {
            tables.push("<tr>" + columns.map(function(column) {
              var cellAlign = column.align || allAlign;
              var classNames = hasEllipsis(column, "showOverflow", allColumnOverflow) ? ["col--ellipsis"] : [];
              var cellValue = item[column.id];
              if (cellAlign) {
                classNames.push("col--" + cellAlign);
              }
              if (column.treeNode) {
                var treeIcon = "";
                if (item._hasChild) {
                  treeIcon = '<i class="' + (item._expand ? "vxe-table--tree-fold-icon" : "vxe-table--tree-unfold-icon") + '"></i>';
                }
                classNames.push("vxe-table--tree-node");
                if (column.type === "radio") {
                  return '<td class="' + classNames.join(" ") + '" title="' + cellValue + '"><div ' + (isPrint ? "" : 'style="width: ' + column.renderWidth + 'px"') + '><div class="vxe-table--tree-node-wrapper" style="padding-left: ' + item._level * treeOpts.indent + 'px"><div class="vxe-table--tree-icon-wrapper">' + treeIcon + '</div><div class="vxe-table--tree-cell"><input type="radio" name="radio_' + id + '" ' + (item._radioDisabled ? "disabled " : "") + (getBooleanValue(cellValue) ? "checked" : "") + "><span>" + item._radioLabel + "</span></div></div></div></td>";
                } else if (column.type === "checkbox") {
                  return '<td class="' + classNames.join(" ") + '" title="' + cellValue + '"><div ' + (isPrint ? "" : 'style="width: ' + column.renderWidth + 'px"') + '><div class="vxe-table--tree-node-wrapper" style="padding-left: ' + item._level * treeOpts.indent + 'px"><div class="vxe-table--tree-icon-wrapper">' + treeIcon + '</div><div class="vxe-table--tree-cell"><input type="checkbox" ' + (item._checkboxDisabled ? "disabled " : "") + (getBooleanValue(cellValue) ? "checked" : "") + "><span>" + item._checkboxLabel + "</span></div></div></div></td>";
                }
                return '<td class="' + classNames.join(" ") + '" title="' + cellValue + '"><div ' + (isPrint ? "" : 'style="width: ' + column.renderWidth + 'px"') + '><div class="vxe-table--tree-node-wrapper" style="padding-left: ' + item._level * treeOpts.indent + 'px"><div class="vxe-table--tree-icon-wrapper">' + treeIcon + '</div><div class="vxe-table--tree-cell">' + cellValue + "</div></div></div></td>";
              }
              if (column.type === "radio") {
                return '<td class="' + classNames.join(" ") + '"><div ' + (isPrint ? "" : 'style="width: ' + column.renderWidth + 'px"') + '><input type="radio" name="radio_' + id + '" ' + (item._radioDisabled ? "disabled " : "") + (getBooleanValue(cellValue) ? "checked" : "") + "><span>" + item._radioLabel + "</span></div></td>";
              } else if (column.type === "checkbox") {
                return '<td class="' + classNames.join(" ") + '"><div ' + (isPrint ? "" : 'style="width: ' + column.renderWidth + 'px"') + '><input type="checkbox" ' + (item._checkboxDisabled ? "disabled " : "") + (getBooleanValue(cellValue) ? "checked" : "") + "><span>" + item._checkboxLabel + "</span></div></td>";
              }
              return '<td class="' + classNames.join(" ") + '" title="' + cellValue + '"><div ' + (isPrint ? "" : 'style="width: ' + column.renderWidth + 'px"') + ">" + formatText(cellValue, true) + "</div></td>";
            }).join("") + "</tr>");
          });
        } else {
          datas.forEach(function(item) {
            tables.push("<tr>" + columns.map(function(column) {
              var cellAlign = column.align || allAlign;
              var classNames = hasEllipsis(column, "showOverflow", allColumnOverflow) ? ["col--ellipsis"] : [];
              var cellValue = item[column.id];
              var rowSpan = 1;
              var colSpan = 1;
              if (isMerge && mergeList.length) {
                var _rowIndex = $xetable.getVTRowIndex(item._row);
                var _columnIndex = $xetable.getVTColumnIndex(column);
                var spanRest = mergeBodyMethod(mergeList, _rowIndex, _columnIndex);
                if (spanRest) {
                  var rowspan = spanRest.rowspan, colspan = spanRest.colspan;
                  if (!rowspan || !colspan) {
                    return "";
                  }
                  if (rowspan > 1) {
                    rowSpan = rowspan;
                  }
                  if (colspan > 1) {
                    colSpan = colspan;
                  }
                }
              }
              if (cellAlign) {
                classNames.push("col--" + cellAlign);
              }
              if (column.type === "radio") {
                return '<td class="' + classNames.join(" ") + '" rowspan="' + rowSpan + '" colspan="' + colSpan + '"><div ' + (isPrint ? "" : 'style="width: ' + column.renderWidth + 'px"') + '><input type="radio" name="radio_' + id + '" ' + (item._radioDisabled ? "disabled " : "") + (getBooleanValue(cellValue) ? "checked" : "") + "><span>" + item._radioLabel + "</span></div></td>";
              } else if (column.type === "checkbox") {
                return '<td class="' + classNames.join(" ") + '" rowspan="' + rowSpan + '" colspan="' + colSpan + '"><div ' + (isPrint ? "" : 'style="width: ' + column.renderWidth + 'px"') + '><input type="checkbox" ' + (item._checkboxDisabled ? "disabled " : "") + (getBooleanValue(cellValue) ? "checked" : "") + "><span>" + item._checkboxLabel + "</span></div></td>";
              }
              return '<td class="' + classNames.join(" ") + '" rowspan="' + rowSpan + '" colspan="' + colSpan + '" title="' + cellValue + '"><div ' + (isPrint ? "" : 'style="width: ' + column.renderWidth + 'px"') + ">" + formatText(cellValue, true) + "</div></td>";
            }).join("") + "</tr>");
          });
        }
        tables.push("</tbody>");
      }
      if (isFooter) {
        var footerTableData = reactData.footerTableData;
        var footers = getFooterData(opts, footerTableData);
        if (footers.length) {
          tables.push("<tfoot>");
          footers.forEach(function(rows) {
            tables.push("<tr>" + columns.map(function(column) {
              var footAlign = column.footerAlign || column.align || allFooterAlign || allAlign;
              var classNames = hasEllipsis(column, "showOverflow", allColumnOverflow) ? ["col--ellipsis"] : [];
              var cellValue = getFooterCellValue(opts, rows, column);
              if (footAlign) {
                classNames.push("col--" + footAlign);
              }
              return '<td class="' + classNames.join(" ") + '" title="' + cellValue + '"><div ' + (isPrint ? "" : 'style="width: ' + column.renderWidth + 'px"') + ">" + formatText(cellValue, true) + "</div></td>";
            }).join("") + "</tr>");
          });
          tables.push("</tfoot>");
        }
      }
      var script = !isAllSelected && isIndeterminate ? '<script>(function(){var a=document.querySelector(".' + allCls + '");if(a){a.indeterminate=true}})()<\/script>' : "";
      tables.push("</table>", script);
      return isPrint ? tables.join("") : createHtmlPage(opts, tables.join(""));
    };
    var toXML = function(opts, columns, datas) {
      var xml = [
        '<?xml version="1.0"?>',
        '<?mso-application progid="Excel.Sheet"?>',
        '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40">',
        '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">',
        "<Version>16.00</Version>",
        "</DocumentProperties>",
        '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">',
        "<WindowHeight>7920</WindowHeight>",
        "<WindowWidth>21570</WindowWidth>",
        "<WindowTopX>32767</WindowTopX>",
        "<WindowTopY>32767</WindowTopY>",
        "<ProtectStructure>False</ProtectStructure>",
        "<ProtectWindows>False</ProtectWindows>",
        "</ExcelWorkbook>",
        '<Worksheet ss:Name="' + opts.sheetName + '">',
        "<Table>",
        columns.map(function(column) {
          return '<Column ss:Width="' + column.renderWidth + '"/>';
        }).join("")
      ].join("");
      if (opts.isHeader) {
        xml += "<Row>" + columns.map(function(column) {
          return '<Cell><Data ss:Type="String">' + getHeaderTitle(opts, column) + "</Data></Cell>";
        }).join("") + "</Row>";
      }
      datas.forEach(function(row) {
        xml += "<Row>" + columns.map(function(column) {
          return '<Cell><Data ss:Type="String">' + row[column.id] + "</Data></Cell>";
        }).join("") + "</Row>";
      });
      if (opts.isFooter) {
        var footerTableData = reactData.footerTableData;
        var footers = getFooterData(opts, footerTableData);
        footers.forEach(function(rows) {
          xml += "<Row>" + columns.map(function(column) {
            return '<Cell><Data ss:Type="String">' + getFooterCellValue(opts, rows, column) + "</Data></Cell>";
          }).join("") + "</Row>";
        });
      }
      return xml + "</Table></Worksheet></Workbook>";
    };
    var getContent = function(opts, columns, datas) {
      if (columns.length) {
        switch (opts.type) {
          case "csv":
            return toCsv(opts, columns, datas);
          case "txt":
            return toTxt(opts, columns, datas);
          case "html":
            return toHtml(opts, columns, datas);
          case "xml":
            return toXML(opts, columns, datas);
        }
      }
      return "";
    };
    var downloadFile = function(opts, content) {
      var filename = opts.filename, type = opts.type, download = opts.download;
      if (!download) {
        var blob = getExportBlobByContent(content, opts);
        return Promise.resolve({ type, content, blob });
      }
      saveLocalFile({ filename, type, content }).then(function() {
        if (opts.message !== false) {
          VXETable.modal.message({ content: GlobalConfig.i18n("vxe.table.expSuccess"), status: "success" });
        }
      });
    };
    var handleExport = function(opts) {
      var remote = opts.remote, columns = opts.columns, colgroups = opts.colgroups, exportMethod = opts.exportMethod, afterExportMethod = opts.afterExportMethod;
      return new Promise(function(resolve) {
        if (remote) {
          var params = { options: opts, $table: $xetable, $grid: $xegrid };
          resolve(exportMethod ? exportMethod(params) : params);
        } else {
          var datas_1 = getExportData(opts);
          resolve($xetable.preventEvent(null, "event.export", { options: opts, columns, colgroups, datas: datas_1 }, function() {
            return downloadFile(opts, getContent(opts, columns, datas_1));
          }));
        }
      }).then(function(params) {
        clearColumnConvert(columns);
        if (!opts.print) {
          if (afterExportMethod) {
            afterExportMethod({ status: true, options: opts, $table: $xetable, $grid: $xegrid });
          }
        }
        return Object.assign({ status: true }, params);
      }).catch(function() {
        clearColumnConvert(columns);
        if (!opts.print) {
          if (afterExportMethod) {
            afterExportMethod({ status: false, options: opts, $table: $xetable, $grid: $xegrid });
          }
        }
        var params = { status: false };
        return Promise.reject(params);
      });
    };
    var handleImport = function(content, opts) {
      var tableFullColumn = internalData.tableFullColumn, _importResolve = internalData._importResolve, _importReject = internalData._importReject;
      var rest = { fields: [], rows: [] };
      switch (opts.type) {
        case "csv":
          rest = parseCsv(tableFullColumn, content);
          break;
        case "txt":
          rest = parseTxt(tableFullColumn, content);
          break;
        case "html":
          rest = parseHTML(tableFullColumn, content);
          break;
        case "xml":
          rest = parseXML(tableFullColumn, content);
          break;
      }
      var fields = rest.fields, rows = rest.rows;
      var status = checkImportData(tableFullColumn, fields);
      if (status) {
        $xetable.createData(rows).then(function(data) {
          var loadRest;
          if (opts.mode === "insert") {
            loadRest = $xetable.insert(data);
          } else {
            loadRest = $xetable.reloadData(data);
          }
          if (opts.message !== false) {
            VXETable.modal.message({ content: GlobalConfig.i18n("vxe.table.impSuccess", [rows.length]), status: "success" });
          }
          return loadRest.then(function() {
            if (_importResolve) {
              _importResolve({ status: true });
            }
          });
        });
      } else if (opts.message !== false) {
        VXETable.modal.message({ content: GlobalConfig.i18n("vxe.error.impFields"), status: "error" });
        if (_importReject) {
          _importReject({ status: false });
        }
      }
    };
    var handleFileImport = function(file, opts) {
      var importMethod = opts.importMethod, afterImportMethod = opts.afterImportMethod;
      var _a2 = parseFile(file), type = _a2.type, filename = _a2.filename;
      if (!importMethod && !xeUtils.includes(VXETable.config.importTypes, type)) {
        if (opts.message !== false) {
          VXETable.modal.message({ content: GlobalConfig.i18n("vxe.error.notType", [type]), status: "error" });
        }
        var params = { status: false };
        return Promise.reject(params);
      }
      var rest = new Promise(function(resolve, reject) {
        var _importResolve = function(params2) {
          resolve(params2);
          internalData._importResolve = null;
          internalData._importReject = null;
        };
        var _importReject = function(params2) {
          reject(params2);
          internalData._importResolve = null;
          internalData._importReject = null;
        };
        internalData._importResolve = _importResolve;
        internalData._importReject = _importReject;
        if (window.FileReader) {
          var options_1 = Object.assign({ mode: "insert" }, opts, { type, filename });
          if (options_1.remote) {
            if (importMethod) {
              Promise.resolve(importMethod({ file, options: options_1, $table: $xetable })).then(function() {
                _importResolve({ status: true });
              }).catch(function() {
                _importResolve({ status: true });
              });
            } else {
              _importResolve({ status: true });
            }
          } else {
            var tableFullColumn = internalData.tableFullColumn;
            $xetable.preventEvent(null, "event.import", { file, options: options_1, columns: tableFullColumn }, function() {
              var reader = new FileReader();
              reader.onerror = function() {
                errLog("vxe.error.notType", [type]);
                _importReject({ status: false });
              };
              reader.onload = function(e) {
                handleImport(e.target.result, options_1);
              };
              reader.readAsText(file, "UTF-8");
            });
          }
        } else {
          _importResolve({ status: true });
        }
      });
      return rest.then(function() {
        if (afterImportMethod) {
          afterImportMethod({ status: true, options: opts, $table: $xetable });
        }
      }).catch(function(e) {
        if (afterImportMethod) {
          afterImportMethod({ status: false, options: opts, $table: $xetable });
        }
        return Promise.reject(e);
      });
    };
    var handleExportAndPrint = function(options, isPrint) {
      var treeConfig = props.treeConfig, showHeader = props.showHeader, showFooter = props.showFooter;
      var initStore = reactData.initStore, mergeList = reactData.mergeList, isGroup = reactData.isGroup, footerTableData = reactData.footerTableData, exportStore = reactData.exportStore, exportParams = reactData.exportParams;
      var collectColumn = internalData.collectColumn;
      var hasTree = treeConfig;
      var customOpts = computeCustomOpts.value;
      var selectRecords = $xetable.getCheckboxRecords();
      var hasFooter = !!footerTableData.length;
      var hasMerge = !hasTree && mergeList.length;
      var defOpts = Object.assign({ message: true, isHeader: showHeader, isFooter: showFooter }, options);
      var types = defOpts.types || VXETable.config.exportTypes;
      var modes = defOpts.modes;
      var checkMethod = customOpts.checkMethod;
      var exportColumns = collectColumn.slice(0);
      var columns = defOpts.columns;
      var typeList = types.map(function(value) {
        return {
          value,
          label: "vxe.export.types." + value
        };
      });
      var modeList = modes.map(function(value) {
        return {
          value,
          label: "vxe.export.modes." + value
        };
      });
      xeUtils.eachTree(exportColumns, function(column, index, items, path, parent) {
        var isColGroup = column.children && column.children.length;
        if (isColGroup || defaultFilterExportColumn(column)) {
          column.checked = columns ? columns.some(function(item) {
            if (isColumnInfo(item)) {
              return column === item;
            } else if (xeUtils.isString(item)) {
              return column.field === item;
            } else {
              var colid = item.id || item.colId;
              var type = item.type;
              var field = item.property || item.field;
              if (colid) {
                return column.id === colid;
              } else if (field && type) {
                return column.property === field && column.type === type;
              } else if (field) {
                return column.property === field;
              } else if (type) {
                return column.type === type;
              }
            }
          }) : column.visible;
          column.halfChecked = false;
          column.disabled = parent && parent.disabled || (checkMethod ? !checkMethod({ column }) : false);
        }
      });
      Object.assign(exportStore, {
        columns: exportColumns,
        typeList,
        modeList,
        hasFooter,
        hasMerge,
        hasTree,
        isPrint,
        hasColgroup: isGroup,
        visible: true
      });
      if (!initStore.export) {
        Object.assign(exportParams, {
          mode: selectRecords.length ? "selected" : "current"
        }, defOpts);
      }
      if (modes.indexOf(exportParams.mode) === -1) {
        exportParams.mode = modes[0];
      }
      if (types.indexOf(exportParams.type) === -1) {
        exportParams.type = types[0];
      }
      initStore.export = true;
      return nextTick();
    };
    var exportMethods = {
      exportData: function(options) {
        var treeConfig = props.treeConfig;
        var isGroup = reactData.isGroup, tableGroupColumn = reactData.tableGroupColumn;
        var tableFullColumn = internalData.tableFullColumn, afterFullData = internalData.afterFullData;
        var exportOpts = computeExportOpts.value;
        var treeOpts = computeTreeOpts.value;
        var opts = Object.assign({
          isHeader: true,
          isFooter: true,
          isColgroup: true,
          download: true,
          type: "csv",
          mode: "current"
        }, exportOpts, {
          print: false
        }, options);
        var type = opts.type, mode = opts.mode, columns = opts.columns, original = opts.original, beforeExportMethod = opts.beforeExportMethod;
        var groups = [];
        var customCols = columns && columns.length ? columns : null;
        var columnFilterMethod = opts.columnFilterMethod;
        if (!customCols && !columnFilterMethod) {
          columnFilterMethod = original ? function(_a3) {
            var column = _a3.column;
            return column.property;
          } : function(_a3) {
            var column = _a3.column;
            return defaultFilterExportColumn(column);
          };
        }
        if (customCols) {
          groups = xeUtils.searchTree(xeUtils.mapTree(customCols, function(item) {
            var targetColumn;
            if (item) {
              if (isColumnInfo(item)) {
                targetColumn = item;
              } else if (xeUtils.isString(item)) {
                targetColumn = $xetable.getColumnByField(item);
              } else {
                var colid = item.id || item.colId;
                var type_1 = item.type;
                var field_1 = item.property || item.field;
                if (colid) {
                  targetColumn = $xetable.getColumnById(colid);
                } else if (field_1 && type_1) {
                  targetColumn = tableFullColumn.find(function(column) {
                    return column.property === field_1 && column.type === type_1;
                  });
                } else if (field_1) {
                  targetColumn = $xetable.getColumnByField(field_1);
                } else if (type_1) {
                  targetColumn = tableFullColumn.find(function(column) {
                    return column.type === type_1;
                  });
                }
              }
              return targetColumn || {};
            }
          }, {
            children: "childNodes",
            mapChildren: "_children"
          }), function(column, index) {
            return isColumnInfo(column) && (!columnFilterMethod || columnFilterMethod({ column, $columnIndex: index }));
          }, {
            children: "_children",
            mapChildren: "childNodes",
            original: true
          });
        } else {
          groups = xeUtils.searchTree(isGroup ? tableGroupColumn : tableFullColumn, function(column, index) {
            return column.visible && (!columnFilterMethod || columnFilterMethod({ column, $columnIndex: index }));
          }, { children: "children", mapChildren: "childNodes", original: true });
        }
        var cols = [];
        xeUtils.eachTree(groups, function(column) {
          var isColGroup = column.children && column.children.length;
          if (!isColGroup) {
            cols.push(column);
          }
        }, { children: "childNodes" });
        opts.columns = cols;
        opts.colgroups = convertToRows(groups);
        if (!opts.filename) {
          opts.filename = GlobalConfig.i18n(opts.original ? "vxe.table.expOriginFilename" : "vxe.table.expFilename", [xeUtils.toDateString(Date.now(), "yyyyMMddHHmmss")]);
        }
        if (!opts.sheetName) {
          opts.sheetName = document.title;
        }
        if (!opts.exportMethod && !xeUtils.includes(VXETable.config.exportTypes, type)) {
          var params = { status: false };
          return Promise.reject(params);
        }
        if (!opts.print) {
          if (beforeExportMethod) {
            beforeExportMethod({ options: opts, $table: $xetable, $grid: $xegrid });
          }
        }
        if (!opts.data) {
          opts.data = afterFullData;
          if (mode === "selected") {
            var selectRecords_1 = $xetable.getCheckboxRecords();
            if (["html", "pdf"].indexOf(type) > -1 && treeConfig) {
              opts.data = xeUtils.searchTree($xetable.getTableData().fullData, function(item) {
                return $xetable.findRowIndexOf(selectRecords_1, item) > -1;
              }, Object.assign({}, treeOpts, { data: "_row" }));
            } else {
              opts.data = selectRecords_1;
            }
          } else if (mode === "all") {
            if ($xegrid && !opts.remote) {
              var gridReactData = $xegrid.reactData;
              var computeProxyOpts = $xegrid.getComputeMaps().computeProxyOpts;
              var proxyOpts = computeProxyOpts.value;
              var beforeQueryAll = proxyOpts.beforeQueryAll, afterQueryAll_1 = proxyOpts.afterQueryAll, _a2 = proxyOpts.ajax, ajax = _a2 === void 0 ? {} : _a2, _b = proxyOpts.props, props_1 = _b === void 0 ? {} : _b;
              var ajaxMethods = ajax.queryAll;
              if (ajaxMethods) {
                var params_1 = {
                  $table: $xetable,
                  $grid: $xegrid,
                  sort: gridReactData.sortData,
                  filters: gridReactData.filterData,
                  form: gridReactData.formData,
                  target: ajaxMethods,
                  options: opts
                };
                return Promise.resolve((beforeQueryAll || ajaxMethods)(params_1)).catch(function(e) {
                  return e;
                }).then(function(rest) {
                  opts.data = (props_1.list ? xeUtils.get(rest, props_1.list) : rest) || [];
                  if (afterQueryAll_1) {
                    afterQueryAll_1(params_1);
                  }
                  return handleExport(opts);
                });
              }
            }
          }
        }
        return handleExport(opts);
      },
      importByFile: function(file, options) {
        var opts = Object.assign({}, options);
        var beforeImportMethod = opts.beforeImportMethod;
        if (beforeImportMethod) {
          beforeImportMethod({ options: opts, $table: $xetable });
        }
        return handleFileImport(file, opts);
      },
      importData: function(options) {
        var importOpts = computeImportOpts.value;
        var opts = Object.assign({
          types: VXETable.config.importTypes
        }, importOpts, options);
        var beforeImportMethod = opts.beforeImportMethod, afterImportMethod = opts.afterImportMethod;
        if (beforeImportMethod) {
          beforeImportMethod({ options: opts, $table: $xetable });
        }
        return readLocalFile(opts).catch(function(e) {
          if (afterImportMethod) {
            afterImportMethod({ status: false, options: opts, $table: $xetable });
          }
          return Promise.reject(e);
        }).then(function(params) {
          var file = params.file;
          return handleFileImport(file, opts);
        });
      },
      saveFile: function(options) {
        return saveLocalFile(options);
      },
      readFile: function(options) {
        return readLocalFile(options);
      },
      print: function(options) {
        var printOpts = computePrintOpts.value;
        var opts = Object.assign({
          original: false
        }, printOpts, options, {
          type: "html",
          download: false,
          remote: false,
          print: true
        });
        if (!opts.sheetName) {
          opts.sheetName = document.title;
        }
        return new Promise(function(resolve) {
          if (opts.content) {
            resolve(handlePrint($xetable, opts, opts.content));
          } else {
            resolve(exportMethods.exportData(opts).then(function(_a2) {
              var content = _a2.content;
              return handlePrint($xetable, opts, content);
            }));
          }
        });
      },
      openImport: function(options) {
        var treeConfig = props.treeConfig, importConfig = props.importConfig;
        var initStore = reactData.initStore, importStore = reactData.importStore, importParams = reactData.importParams;
        var importOpts = computeImportOpts.value;
        var defOpts = Object.assign({ mode: "insert", message: true, types: VXETable.config.importTypes }, options, importOpts);
        var types = defOpts.types;
        var isTree = !!treeConfig;
        if (isTree) {
          if (defOpts.message) {
            VXETable.modal.message({ content: GlobalConfig.i18n("vxe.error.treeNotImp"), status: "error" });
          }
          return;
        }
        if (!importConfig) {
          errLog("vxe.error.reqProp", ["import-config"]);
        }
        var typeList = types.map(function(value) {
          return {
            value,
            label: "vxe.export.types." + value
          };
        });
        var modeList = defOpts.modes.map(function(value) {
          return {
            value,
            label: "vxe.import.modes." + value
          };
        });
        Object.assign(importStore, {
          file: null,
          type: "",
          filename: "",
          modeList,
          typeList,
          visible: true
        });
        Object.assign(importParams, defOpts);
        initStore.import = true;
      },
      openExport: function(options) {
        var exportOpts = computeExportOpts.value;
        handleExportAndPrint(Object.assign({}, exportOpts, options));
      },
      openPrint: function(options) {
        var printOpts = computePrintOpts.value;
        handleExportAndPrint(Object.assign({}, printOpts, options), true);
      }
    };
    return exportMethods;
  },
  setupGrid: function($xegrid) {
    return $xegrid.extendTableMethods(tableExportMethodKeys);
  }
};
var print = function(options) {
  var opts = Object.assign({}, options, {
    type: "html"
  });
  handlePrint(null, opts, opts.content);
};
var Export = {
  ExportPanel: ExportPanelComponent,
  ImportPanel: ImportPanelComponent,
  install: function(app) {
    VXETable.saveFile = saveLocalFile;
    VXETable.readFile = readLocalFile;
    VXETable.print = print;
    VXETable.setup({
      export: {
        types: {
          csv: 0,
          html: 0,
          xml: 0,
          txt: 0
        }
      }
    });
    VXETable.hooks.add("$tableExport", tableExportHook);
    dynamicApp.component(ExportPanelComponent.name, ExportPanelComponent);
    dynamicApp.component(ImportPanelComponent.name, ImportPanelComponent);
    app.component(ExportPanelComponent.name, ExportPanelComponent);
    app.component(ImportPanelComponent.name, ImportPanelComponent);
  }
};
function getTargetOffset(target, container) {
  var offsetTop = 0;
  var offsetLeft = 0;
  var triggerCheckboxLabel = !browse.firefox && hasClass(target, "vxe-checkbox--label");
  if (triggerCheckboxLabel) {
    var checkboxLabelStyle = getComputedStyle(target);
    offsetTop -= xeUtils.toNumber(checkboxLabelStyle.paddingTop);
    offsetLeft -= xeUtils.toNumber(checkboxLabelStyle.paddingLeft);
  }
  while (target && target !== container) {
    offsetTop += target.offsetTop;
    offsetLeft += target.offsetLeft;
    target = target.offsetParent;
    if (triggerCheckboxLabel) {
      var checkboxStyle = getComputedStyle(target);
      offsetTop -= xeUtils.toNumber(checkboxStyle.paddingTop);
      offsetLeft -= xeUtils.toNumber(checkboxStyle.paddingLeft);
    }
  }
  return { offsetTop, offsetLeft };
}
var tableKeyboardHook = {
  setupTable: function($xetable) {
    var props = $xetable.props, reactData = $xetable.reactData, internalData = $xetable.internalData;
    var refElem = $xetable.getRefMaps().refElem;
    var _a = $xetable.getComputeMaps(), computeEditOpts = _a.computeEditOpts, computeCheckboxOpts = _a.computeCheckboxOpts, computeMouseOpts = _a.computeMouseOpts, computeTreeOpts = _a.computeTreeOpts;
    function getCheckboxRangeRows(params, targetTrElem, moveRange) {
      var countHeight = 0;
      var rangeRows = [];
      var isDown = moveRange > 0;
      var moveSize = moveRange > 0 ? moveRange : Math.abs(moveRange) + targetTrElem.offsetHeight;
      var scrollYLoad = reactData.scrollYLoad;
      var afterFullData = internalData.afterFullData, scrollYStore = internalData.scrollYStore;
      if (scrollYLoad) {
        var _rowIndex = $xetable.getVTRowIndex(params.row);
        if (isDown) {
          rangeRows = afterFullData.slice(_rowIndex, _rowIndex + Math.ceil(moveSize / scrollYStore.rowHeight));
        } else {
          rangeRows = afterFullData.slice(_rowIndex - Math.floor(moveSize / scrollYStore.rowHeight) + 1, _rowIndex + 1);
        }
      } else {
        var siblingProp = isDown ? "next" : "previous";
        while (targetTrElem && countHeight < moveSize) {
          var rowNodeRest = $xetable.getRowNode(targetTrElem);
          if (rowNodeRest) {
            rangeRows.push(rowNodeRest.item);
            countHeight += targetTrElem.offsetHeight;
            targetTrElem = targetTrElem[siblingProp + "ElementSibling"];
          }
        }
      }
      return rangeRows;
    }
    var handleCheckboxRangeEvent = function(evnt, params) {
      var column = params.column, cell = params.cell;
      if (column.type === "checkbox") {
        var el_1 = refElem.value;
        var elemStore = internalData.elemStore;
        var disX_1 = evnt.clientX;
        var disY_1 = evnt.clientY;
        var bodyWrapperElem_1 = elemStore[(column.fixed || "main") + "-body-wrapper"] || elemStore["main-body-wrapper"];
        var checkboxRangeElem_1 = bodyWrapperElem_1.querySelector(".vxe-table--checkbox-range");
        var domMousemove_1 = document.onmousemove;
        var domMouseup_1 = document.onmouseup;
        var trElem_1 = cell.parentNode;
        var selectRecords_1 = $xetable.getCheckboxRecords();
        var lastRangeRows_1 = [];
        var marginSize_1 = 1;
        var offsetRest = getTargetOffset(evnt.target, bodyWrapperElem_1);
        var startTop_1 = offsetRest.offsetTop + evnt.offsetY;
        var startLeft_1 = offsetRest.offsetLeft + evnt.offsetX;
        var startScrollTop_1 = bodyWrapperElem_1.scrollTop;
        var rowHeight_1 = trElem_1.offsetHeight;
        var mouseScrollTimeout_1 = null;
        var isMouseScrollDown_1 = false;
        var mouseScrollSpaceSize_1 = 1;
        var triggerEvent_1 = function(type, evnt2) {
          $xetable.dispatchEvent("checkbox-range-" + type, { records: $xetable.getCheckboxRecords(), reserves: $xetable.getCheckboxReserveRecords() }, evnt2);
        };
        var handleChecked_1 = function(evnt2) {
          var clientX = evnt2.clientX, clientY = evnt2.clientY;
          var offsetLeft = clientX - disX_1;
          var offsetTop = clientY - disY_1 + (bodyWrapperElem_1.scrollTop - startScrollTop_1);
          var rangeHeight = Math.abs(offsetTop);
          var rangeWidth = Math.abs(offsetLeft);
          var rangeTop = startTop_1;
          var rangeLeft = startLeft_1;
          if (offsetTop < marginSize_1) {
            rangeTop += offsetTop;
            if (rangeTop < marginSize_1) {
              rangeTop = marginSize_1;
              rangeHeight = startTop_1;
            }
          } else {
            rangeHeight = Math.min(rangeHeight, bodyWrapperElem_1.scrollHeight - startTop_1 - marginSize_1);
          }
          if (offsetLeft < marginSize_1) {
            rangeLeft += offsetLeft;
            if (rangeWidth > startLeft_1) {
              rangeLeft = marginSize_1;
              rangeWidth = startLeft_1;
            }
          } else {
            rangeWidth = Math.min(rangeWidth, bodyWrapperElem_1.clientWidth - startLeft_1 - marginSize_1);
          }
          checkboxRangeElem_1.style.height = rangeHeight + "px";
          checkboxRangeElem_1.style.width = rangeWidth + "px";
          checkboxRangeElem_1.style.left = rangeLeft + "px";
          checkboxRangeElem_1.style.top = rangeTop + "px";
          checkboxRangeElem_1.style.display = "block";
          var rangeRows = getCheckboxRangeRows(params, trElem_1, offsetTop < marginSize_1 ? -rangeHeight : rangeHeight);
          if (rangeHeight > 10 && rangeRows.length !== lastRangeRows_1.length) {
            lastRangeRows_1 = rangeRows;
            if (evnt2.ctrlKey) {
              rangeRows.forEach(function(row) {
                $xetable.handleSelectRow({ row }, selectRecords_1.indexOf(row) === -1);
              });
            } else {
              $xetable.setAllCheckboxRow(false);
              $xetable.setCheckboxRow(rangeRows, true);
            }
            triggerEvent_1("change", evnt2);
          }
        };
        var stopMouseScroll_1 = function() {
          clearTimeout(mouseScrollTimeout_1);
          mouseScrollTimeout_1 = null;
        };
        var startMouseScroll_1 = function(evnt2) {
          stopMouseScroll_1();
          mouseScrollTimeout_1 = setTimeout(function() {
            if (mouseScrollTimeout_1) {
              var scrollLeft = bodyWrapperElem_1.scrollLeft, scrollTop = bodyWrapperElem_1.scrollTop, clientHeight = bodyWrapperElem_1.clientHeight, scrollHeight = bodyWrapperElem_1.scrollHeight;
              var topSize = Math.ceil(mouseScrollSpaceSize_1 * 50 / rowHeight_1);
              if (isMouseScrollDown_1) {
                if (scrollTop + clientHeight < scrollHeight) {
                  $xetable.scrollTo(scrollLeft, scrollTop + topSize);
                  startMouseScroll_1(evnt2);
                  handleChecked_1(evnt2);
                } else {
                  stopMouseScroll_1();
                }
              } else {
                if (scrollTop) {
                  $xetable.scrollTo(scrollLeft, scrollTop - topSize);
                  startMouseScroll_1(evnt2);
                  handleChecked_1(evnt2);
                } else {
                  stopMouseScroll_1();
                }
              }
            }
          }, 50);
        };
        addClass(el_1, "drag--range");
        document.onmousemove = function(evnt2) {
          evnt2.preventDefault();
          evnt2.stopPropagation();
          var clientY = evnt2.clientY;
          var boundingTop = getAbsolutePos(bodyWrapperElem_1).boundingTop;
          if (clientY < boundingTop) {
            isMouseScrollDown_1 = false;
            mouseScrollSpaceSize_1 = boundingTop - clientY;
            if (!mouseScrollTimeout_1) {
              startMouseScroll_1(evnt2);
            }
          } else if (clientY > boundingTop + bodyWrapperElem_1.clientHeight) {
            isMouseScrollDown_1 = true;
            mouseScrollSpaceSize_1 = clientY - boundingTop - bodyWrapperElem_1.clientHeight;
            if (!mouseScrollTimeout_1) {
              startMouseScroll_1(evnt2);
            }
          } else if (mouseScrollTimeout_1) {
            stopMouseScroll_1();
          }
          handleChecked_1(evnt2);
        };
        document.onmouseup = function(evnt2) {
          stopMouseScroll_1();
          removeClass(el_1, "drag--range");
          checkboxRangeElem_1.removeAttribute("style");
          document.onmousemove = domMousemove_1;
          document.onmouseup = domMouseup_1;
          triggerEvent_1("end", evnt2);
        };
        triggerEvent_1("start", evnt);
      }
    };
    var handleCellMousedownEvent = function(evnt, params) {
      var editConfig = props.editConfig, checkboxConfig = props.checkboxConfig, mouseConfig = props.mouseConfig;
      var checkboxOpts = computeCheckboxOpts.value;
      var mouseOpts = computeMouseOpts.value;
      var editOpts = computeEditOpts.value;
      if (mouseConfig && mouseOpts.area && $xetable.handleCellAreaEvent) {
        return $xetable.handleCellAreaEvent(evnt, params);
      } else {
        if (checkboxConfig && checkboxOpts.range) {
          handleCheckboxRangeEvent(evnt, params);
        }
        if (mouseConfig && mouseOpts.selected) {
          if (!editConfig || editOpts.mode === "cell") {
            $xetable.handleSelected(params, evnt);
          }
        }
      }
    };
    var keyboardMethods = {
      moveTabSelected: function(args, isLeft, evnt) {
        var editConfig = props.editConfig;
        var afterFullData = internalData.afterFullData, visibleColumn = internalData.visibleColumn;
        var editOpts = computeEditOpts.value;
        var targetRow;
        var targetRowIndex;
        var targetColumnIndex;
        var params = Object.assign({}, args);
        var _rowIndex = $xetable.getVTRowIndex(params.row);
        var _columnIndex = $xetable.getVTColumnIndex(params.column);
        evnt.preventDefault();
        if (isLeft) {
          if (_columnIndex <= 0) {
            if (_rowIndex > 0) {
              targetRowIndex = _rowIndex - 1;
              targetRow = afterFullData[targetRowIndex];
              targetColumnIndex = visibleColumn.length - 1;
            }
          } else {
            targetColumnIndex = _columnIndex - 1;
          }
        } else {
          if (_columnIndex >= visibleColumn.length - 1) {
            if (_rowIndex < afterFullData.length - 1) {
              targetRowIndex = _rowIndex + 1;
              targetRow = afterFullData[targetRowIndex];
              targetColumnIndex = 0;
            }
          } else {
            targetColumnIndex = _columnIndex + 1;
          }
        }
        var targetColumn = visibleColumn[targetColumnIndex];
        if (targetColumn) {
          if (targetRow) {
            params.rowIndex = targetRowIndex;
            params.row = targetRow;
          } else {
            params.rowIndex = _rowIndex;
          }
          params.columnIndex = targetColumnIndex;
          params.column = targetColumn;
          params.cell = $xetable.getCell(params.row, params.column);
          if (editConfig) {
            if (editOpts.trigger === "click" || editOpts.trigger === "dblclick") {
              if (editOpts.mode === "row") {
                $xetable.handleActived(params, evnt);
              } else {
                $xetable.scrollToRow(params.row, params.column).then(function() {
                  return $xetable.handleSelected(params, evnt);
                });
              }
            }
          } else {
            $xetable.scrollToRow(params.row, params.column).then(function() {
              return $xetable.handleSelected(params, evnt);
            });
          }
        }
      },
      moveCurrentRow: function(isUpArrow, isDwArrow, evnt) {
        var treeConfig = props.treeConfig;
        var currentRow = reactData.currentRow;
        var afterFullData = internalData.afterFullData;
        var treeOpts = computeTreeOpts.value;
        var targetRow;
        evnt.preventDefault();
        if (currentRow) {
          if (treeConfig) {
            var _a2 = xeUtils.findTree(afterFullData, function(item) {
              return item === currentRow;
            }, treeOpts), index = _a2.index, items = _a2.items;
            if (isUpArrow && index > 0) {
              targetRow = items[index - 1];
            } else if (isDwArrow && index < items.length - 1) {
              targetRow = items[index + 1];
            }
          } else {
            var _rowIndex = $xetable.getVTRowIndex(currentRow);
            if (isUpArrow && _rowIndex > 0) {
              targetRow = afterFullData[_rowIndex - 1];
            } else if (isDwArrow && _rowIndex < afterFullData.length - 1) {
              targetRow = afterFullData[_rowIndex + 1];
            }
          }
        } else {
          targetRow = afterFullData[0];
        }
        if (targetRow) {
          var params_1 = {
            $table: $xetable,
            row: targetRow,
            rowIndex: $xetable.getRowIndex(targetRow),
            $rowIndex: $xetable.getVMRowIndex(targetRow)
          };
          $xetable.scrollToRow(targetRow).then(function() {
            return $xetable.triggerCurrentRowEvent(evnt, params_1);
          });
        }
      },
      moveSelected: function(args, isLeftArrow, isUpArrow, isRightArrow, isDwArrow, evnt) {
        var afterFullData = internalData.afterFullData, visibleColumn = internalData.visibleColumn;
        var params = Object.assign({}, args);
        var _rowIndex = $xetable.getVTRowIndex(params.row);
        var _columnIndex = $xetable.getVTColumnIndex(params.column);
        evnt.preventDefault();
        if (isUpArrow && _rowIndex > 0) {
          params.rowIndex = _rowIndex - 1;
          params.row = afterFullData[params.rowIndex];
        } else if (isDwArrow && _rowIndex < afterFullData.length - 1) {
          params.rowIndex = _rowIndex + 1;
          params.row = afterFullData[params.rowIndex];
        } else if (isLeftArrow && _columnIndex) {
          params.columnIndex = _columnIndex - 1;
          params.column = visibleColumn[params.columnIndex];
        } else if (isRightArrow && _columnIndex < visibleColumn.length - 1) {
          params.columnIndex = _columnIndex + 1;
          params.column = visibleColumn[params.columnIndex];
        }
        $xetable.scrollToRow(params.row, params.column).then(function() {
          params.cell = $xetable.getCell(params.row, params.column);
          $xetable.handleSelected(params, evnt);
        });
      },
      triggerHeaderCellMousedownEvent: function(evnt, params) {
        var mouseConfig = props.mouseConfig;
        var mouseOpts = computeMouseOpts.value;
        if (mouseConfig && mouseOpts.area && $xetable.handleHeaderCellAreaEvent) {
          var cell = evnt.currentTarget;
          var triggerSort = getEventTargetNode(evnt, cell, "vxe-cell--sort").flag;
          var triggerFilter = getEventTargetNode(evnt, cell, "vxe-cell--filter").flag;
          $xetable.handleHeaderCellAreaEvent(evnt, Object.assign({ cell, triggerSort, triggerFilter }, params));
        }
        $xetable.focus();
        if ($xetable.closeMenu) {
          $xetable.closeMenu();
        }
      },
      triggerCellMousedownEvent: function(evnt, params) {
        var cell = evnt.currentTarget;
        params.cell = cell;
        handleCellMousedownEvent(evnt, params);
        $xetable.focus();
        $xetable.closeFilter();
        if ($xetable.closeMenu) {
          $xetable.closeMenu();
        }
      }
    };
    return keyboardMethods;
  }
};
var Keyboard = {
  install: function() {
    VXETable.hooks.add("$tableKeyboard", tableKeyboardHook);
  }
};
var __assign$a = function() {
  __assign$a = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$a.apply(this, arguments);
};
var Rule$1 = function() {
  function Rule2(rule) {
    Object.assign(this, {
      $options: rule,
      required: rule.required,
      min: rule.min,
      max: rule.max,
      type: rule.type,
      pattern: rule.pattern,
      validator: rule.validator,
      trigger: rule.trigger,
      maxWidth: rule.maxWidth
    });
  }
  Object.defineProperty(Rule2.prototype, "message", {
    get: function() {
      return getFuncText(this.$options.message);
    },
    enumerable: false,
    configurable: true
  });
  return Rule2;
}();
var tableValidatorMethodKeys = ["fullValidate", "validate", "clearValidate"];
var validatorHook = {
  setupTable: function($xetable) {
    var props = $xetable.props, reactData = $xetable.reactData, internalData = $xetable.internalData;
    var refValidTooltip = $xetable.getRefMaps().refValidTooltip;
    var _a = $xetable.getComputeMaps(), computeValidOpts = _a.computeValidOpts, computeTreeOpts = _a.computeTreeOpts, computeEditOpts = _a.computeEditOpts;
    var validatorMethods = {};
    var validatorPrivateMethods = {};
    var validRuleErr;
    var handleValidError = function(params) {
      return new Promise(function(resolve) {
        var validOpts = computeValidOpts.value;
        if (validOpts.autoPos === false) {
          $xetable.dispatchEvent("valid-error", params, null);
          resolve();
        } else {
          $xetable.handleActived(params, { type: "valid-error", trigger: "call" }).then(function() {
            setTimeout(function() {
              resolve(validatorPrivateMethods.showValidTooltip(params));
            }, 10);
          });
        }
      });
    };
    var beginValidate = function(rows, cb, isFull) {
      var validRest = {};
      var editRules = props.editRules, treeConfig = props.treeConfig;
      var afterFullData = internalData.afterFullData;
      var treeOpts = computeTreeOpts.value;
      var validOpts = computeValidOpts.value;
      var vaildDatas;
      if (rows === true) {
        vaildDatas = afterFullData;
      } else if (rows) {
        if (xeUtils.isFunction(rows)) {
          cb = rows;
        } else {
          vaildDatas = xeUtils.isArray(rows) ? rows : [rows];
        }
      }
      if (!vaildDatas) {
        if ($xetable.getInsertRecords) {
          vaildDatas = $xetable.getInsertRecords().concat($xetable.getUpdateRecords());
        } else {
          vaildDatas = [];
        }
      }
      var rowValids = [];
      internalData._lastCallTime = Date.now();
      validRuleErr = false;
      validatorMethods.clearValidate();
      if (editRules) {
        var columns_1 = $xetable.getColumns();
        var handleVaild = function(row) {
          if (isFull || !validRuleErr) {
            var colVailds_1 = [];
            columns_1.forEach(function(column) {
              if ((isFull || !validRuleErr) && xeUtils.has(editRules, column.property)) {
                colVailds_1.push(validatorPrivateMethods.validCellRules("all", row, column).catch(function(_a2) {
                  var rule = _a2.rule, rules = _a2.rules;
                  var rest = {
                    rule,
                    rules,
                    rowIndex: $xetable.getRowIndex(row),
                    row,
                    columnIndex: $xetable.getColumnIndex(column),
                    column,
                    $table: $xetable
                  };
                  if (!validRest[column.property]) {
                    validRest[column.property] = [];
                  }
                  validRest[column.property].push(rest);
                  if (!isFull) {
                    validRuleErr = true;
                    return Promise.reject(rest);
                  }
                }));
              }
            });
            rowValids.push(Promise.all(colVailds_1));
          }
        };
        if (treeConfig) {
          xeUtils.eachTree(vaildDatas, handleVaild, treeOpts);
        } else {
          vaildDatas.forEach(handleVaild);
        }
        return Promise.all(rowValids).then(function() {
          var ruleProps = Object.keys(validRest);
          return nextTick().then(function() {
            if (ruleProps.length) {
              return Promise.reject(validRest[ruleProps[0]][0]);
            }
            if (cb) {
              cb();
            }
          });
        }).catch(function(firstErrParams) {
          return new Promise(function(resolve, reject) {
            var finish = function() {
              nextTick(function() {
                if (cb) {
                  cb(validRest);
                  resolve();
                } else {
                  reject(validRest);
                }
              });
            };
            var posAndFinish = function() {
              firstErrParams.cell = $xetable.getCell(firstErrParams.row, firstErrParams.column);
              scrollToView(firstErrParams.cell);
              handleValidError(firstErrParams).then(finish);
            };
            var row = firstErrParams.row;
            var rowIndex = afterFullData.indexOf(row);
            var locatRow = rowIndex > 0 ? afterFullData[rowIndex - 1] : row;
            if (validOpts.autoPos === false) {
              finish();
            } else {
              if (treeConfig) {
                $xetable.scrollToTreeRow(locatRow).then(posAndFinish);
              } else {
                $xetable.scrollToRow(locatRow).then(posAndFinish);
              }
            }
          });
        });
      }
      return nextTick().then(function() {
        if (cb) {
          cb();
        }
      });
    };
    validatorMethods = {
      fullValidate: function(rows, cb) {
        return beginValidate(rows, cb, true);
      },
      validate: function(rows, cb) {
        return beginValidate(rows, cb);
      },
      clearValidate: function() {
        var validStore = reactData.validStore;
        var validTip = refValidTooltip.value;
        Object.assign(validStore, {
          visible: false,
          row: null,
          column: null,
          content: "",
          rule: null
        });
        if (validTip && validTip.reactData.visible) {
          validTip.close();
        }
        return nextTick();
      }
    };
    var validErrorRuleValue2 = function(rule, val) {
      var type = rule.type, min = rule.min, max = rule.max, pattern = rule.pattern;
      var isNumType = type === "number";
      var numVal = isNumType ? xeUtils.toNumber(val) : xeUtils.getSize(val);
      if (isNumType && isNaN(val)) {
        return true;
      }
      if (!xeUtils.eqNull(min) && numVal < xeUtils.toNumber(min)) {
        return true;
      }
      if (!xeUtils.eqNull(max) && numVal > xeUtils.toNumber(max)) {
        return true;
      }
      if (pattern && !(xeUtils.isRegExp(pattern) ? pattern : new RegExp(pattern)).test(val)) {
        return true;
      }
      return false;
    };
    validatorPrivateMethods = {
      validCellRules: function(validType, row, column, val) {
        var editRules = props.editRules;
        var property = column.property;
        var errorRules = [];
        var syncVailds = [];
        if (property && editRules) {
          var rules_1 = xeUtils.get(editRules, property);
          if (rules_1) {
            var cellValue_1 = xeUtils.isUndefined(val) ? xeUtils.get(row, property) : val;
            rules_1.forEach(function(rule) {
              var type = rule.type, trigger = rule.trigger, required = rule.required;
              if (validType === "all" || !trigger || validType === trigger) {
                if (xeUtils.isFunction(rule.validator)) {
                  var customValid = rule.validator({
                    cellValue: cellValue_1,
                    rule,
                    rules: rules_1,
                    row,
                    rowIndex: $xetable.getRowIndex(row),
                    column,
                    columnIndex: $xetable.getColumnIndex(column),
                    $table: $xetable
                  });
                  if (customValid) {
                    if (xeUtils.isError(customValid)) {
                      validRuleErr = true;
                      errorRules.push(new Rule$1({ type: "custom", trigger, message: customValid.message, rule: new Rule$1(rule) }));
                    } else if (customValid.catch) {
                      syncVailds.push(customValid.catch(function(e) {
                        validRuleErr = true;
                        errorRules.push(new Rule$1({ type: "custom", trigger, message: e && e.message ? e.message : rule.message, rule: new Rule$1(rule) }));
                      }));
                    }
                  }
                } else {
                  var isArrType = type === "array";
                  var hasEmpty = isArrType ? !xeUtils.isArray(cellValue_1) || !cellValue_1.length : eqEmptyValue(cellValue_1);
                  if (required ? hasEmpty || validErrorRuleValue2(rule, cellValue_1) : !hasEmpty && validErrorRuleValue2(rule, cellValue_1)) {
                    validRuleErr = true;
                    errorRules.push(new Rule$1(rule));
                  }
                }
              }
            });
          }
        }
        return Promise.all(syncVailds).then(function() {
          if (errorRules.length) {
            var rest = { rules: errorRules, rule: errorRules[0] };
            return Promise.reject(rest);
          }
        });
      },
      hasCellRules: function(type, row, column) {
        var editRules = props.editRules;
        var property = column.property;
        if (property && editRules) {
          var rules = xeUtils.get(editRules, property);
          return rules && !!xeUtils.find(rules, function(rule) {
            return type === "all" || !rule.trigger || type === rule.trigger;
          });
        }
        return false;
      },
      triggerValidate: function(type) {
        var editConfig = props.editConfig, editRules = props.editRules;
        var editStore = reactData.editStore, validStore = reactData.validStore;
        var actived = editStore.actived;
        var editOpts = computeEditOpts.value;
        if (editConfig && editRules && actived.row) {
          var _a2 = actived.args, row_1 = _a2.row, column_1 = _a2.column, cell_1 = _a2.cell;
          if (validatorPrivateMethods.hasCellRules(type, row_1, column_1)) {
            return validatorPrivateMethods.validCellRules(type, row_1, column_1).then(function() {
              if (editOpts.mode === "row") {
                if (validStore.visible && validStore.row === row_1 && validStore.column === column_1) {
                  validatorMethods.clearValidate();
                }
              }
            }).catch(function(_a3) {
              var rule = _a3.rule;
              if (!rule.trigger || type === rule.trigger) {
                var rest = { rule, row: row_1, column: column_1, cell: cell_1 };
                validatorPrivateMethods.showValidTooltip(rest);
                return Promise.reject(rest);
              }
              return Promise.resolve();
            });
          }
        }
        return Promise.resolve();
      },
      showValidTooltip: function(params) {
        var height = props.height;
        var tableData = reactData.tableData, validStore = reactData.validStore;
        var validOpts = computeValidOpts.value;
        var rule = params.rule, row = params.row, column = params.column, cell = params.cell;
        var validTip = refValidTooltip.value;
        var content = rule.message;
        return nextTick().then(function() {
          Object.assign(validStore, {
            row,
            column,
            rule,
            content,
            visible: true
          });
          $xetable.dispatchEvent("valid-error", params, null);
          if (validTip && (validOpts.message === "tooltip" || validOpts.message === "default" && !height && tableData.length < 2)) {
            return validTip.open(cell, content);
          }
        });
      }
    };
    return __assign$a(__assign$a({}, validatorMethods), validatorPrivateMethods);
  },
  setupGrid: function($xegrid) {
    return $xegrid.extendTableMethods(tableValidatorMethodKeys);
  }
};
var Validator = {
  install: function() {
    VXETable.hooks.add("$tableValidator", validatorHook);
  }
};
var __assign$9 = function() {
  __assign$9 = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$9.apply(this, arguments);
};
function renderHelpIcon(params) {
  var $table = params.$table, column = params.column;
  var titleHelp = column.titleHelp;
  return titleHelp ? [
    h("i", {
      class: ["vxe-cell-help-icon", titleHelp.icon || GlobalConfig.icon.TABLE_HELP],
      onMouseenter: function(evnt) {
        $table.triggerHeaderHelpEvent(evnt, params);
      },
      onMouseleave: function(evnt) {
        $table.handleTargetLeaveEvent(evnt);
      }
    })
  ] : [];
}
function renderTitleContent(params, content) {
  var $table = params.$table, column = params.column;
  var props = $table.props, internalData = $table.internalData;
  var computeTooltipOpts = $table.getComputeMaps().computeTooltipOpts;
  var allColumnHeaderOverflow = props.showHeaderOverflow;
  var type = column.type, showHeaderOverflow = column.showHeaderOverflow;
  var tooltipOpts = computeTooltipOpts.value;
  var showAllTip = tooltipOpts.showAll;
  var headOverflow = xeUtils.isUndefined(showHeaderOverflow) || xeUtils.isNull(showHeaderOverflow) ? allColumnHeaderOverflow : showHeaderOverflow;
  var showTitle = headOverflow === "title";
  var showTooltip = headOverflow === true || headOverflow === "tooltip";
  var ons = {};
  if (showTitle || showTooltip || showAllTip) {
    ons.onMouseenter = function(evnt) {
      if (internalData._isResize) {
        return;
      }
      if (showTitle) {
        updateCellTitle(evnt.currentTarget, column);
      } else if (showTooltip || showAllTip) {
        $table.triggerHeaderTooltipEvent(evnt, params);
      }
    };
  }
  if (showTooltip || showAllTip) {
    ons.onMouseleave = function(evnt) {
      if (internalData._isResize) {
        return;
      }
      if (showTooltip || showAllTip) {
        $table.handleTargetLeaveEvent(evnt);
      }
    };
  }
  return [
    type === "html" && xeUtils.isString(content) ? h("span", __assign$9({ class: "vxe-cell--title", innerHTML: content }, ons)) : h("span", __assign$9({ class: "vxe-cell--title" }, ons), content)
  ];
}
function getFooterContent(params) {
  var $table = params.$table, column = params.column, _columnIndex = params._columnIndex, items = params.items;
  var slots = column.slots, editRender = column.editRender, cellRender = column.cellRender;
  var renderOpts = editRender || cellRender;
  var footerSlot = slots ? slots.footer : null;
  if (footerSlot) {
    return $table.callSlot(footerSlot, params);
  }
  if (renderOpts) {
    var compConf = VXETable.renderer.get(renderOpts.name);
    if (compConf && compConf.renderFooter) {
      return compConf.renderFooter(renderOpts, params);
    }
  }
  return [formatText(items[_columnIndex], 1)];
}
function getDefaultCellLabel(params) {
  var $table = params.$table, row = params.row, column = params.column;
  return formatText($table.getCellLabel(row, column), 1);
}
var Cell = {
  createColumn: function($xetable, columnOpts) {
    var type = columnOpts.type, sortable = columnOpts.sortable, filters = columnOpts.filters, editRender = columnOpts.editRender, treeNode = columnOpts.treeNode;
    var props = $xetable.props;
    var editConfig = props.editConfig;
    var _a = $xetable.getComputeMaps(), computeEditOpts = _a.computeEditOpts, computeCheckboxOpts = _a.computeCheckboxOpts;
    var checkboxOpts = computeCheckboxOpts.value;
    var editOpts = computeEditOpts.value;
    var renConfs = {
      renderHeader: Cell.renderDefaultHeader,
      renderCell: treeNode ? Cell.renderTreeCell : Cell.renderDefaultCell,
      renderFooter: Cell.renderDefaultFooter
    };
    switch (type) {
      case "seq":
        renConfs.renderHeader = Cell.renderIndexHeader;
        renConfs.renderCell = treeNode ? Cell.renderTreeIndexCell : Cell.renderIndexCell;
        break;
      case "radio":
        renConfs.renderHeader = Cell.renderRadioHeader;
        renConfs.renderCell = treeNode ? Cell.renderTreeRadioCell : Cell.renderRadioCell;
        break;
      case "checkbox":
        renConfs.renderHeader = Cell.renderSelectionHeader;
        renConfs.renderCell = checkboxOpts.checkField ? treeNode ? Cell.renderTreeSelectionCellByProp : Cell.renderSelectionCellByProp : treeNode ? Cell.renderTreeSelectionCell : Cell.renderSelectionCell;
        break;
      case "expand":
        renConfs.renderCell = Cell.renderExpandCell;
        renConfs.renderData = Cell.renderExpandData;
        break;
      case "html":
        renConfs.renderCell = treeNode ? Cell.renderTreeHTMLCell : Cell.renderHTMLCell;
        if (filters && sortable) {
          renConfs.renderHeader = Cell.renderSortAndFilterHeader;
        } else if (sortable) {
          renConfs.renderHeader = Cell.renderSortHeader;
        } else if (filters) {
          renConfs.renderHeader = Cell.renderFilterHeader;
        }
        break;
      default:
        if (editConfig && editRender) {
          renConfs.renderHeader = Cell.renderEditHeader;
          renConfs.renderCell = editOpts.mode === "cell" ? treeNode ? Cell.renderTreeCellEdit : Cell.renderCellEdit : treeNode ? Cell.renderTreeRowEdit : Cell.renderRowEdit;
        } else if (filters && sortable) {
          renConfs.renderHeader = Cell.renderSortAndFilterHeader;
        } else if (sortable) {
          renConfs.renderHeader = Cell.renderSortHeader;
        } else if (filters) {
          renConfs.renderHeader = Cell.renderFilterHeader;
        }
    }
    return createColumn($xetable, columnOpts, renConfs);
  },
  renderHeaderTitle: function(params) {
    var $table = params.$table, column = params.column;
    var slots = column.slots, editRender = column.editRender, cellRender = column.cellRender;
    var renderOpts = editRender || cellRender;
    var headerSlot = slots ? slots.header : null;
    if (headerSlot) {
      return renderTitleContent(params, $table.callSlot(headerSlot, params));
    }
    if (renderOpts) {
      var compConf = VXETable.renderer.get(renderOpts.name);
      if (compConf && compConf.renderHeader) {
        return renderTitleContent(params, compConf.renderHeader(renderOpts, params));
      }
    }
    return renderTitleContent(params, formatText(column.getTitle(), 1));
  },
  renderDefaultHeader: function(params) {
    return renderHelpIcon(params).concat(Cell.renderHeaderTitle(params));
  },
  renderDefaultCell: function(params) {
    var $table = params.$table, row = params.row, column = params.column;
    var slots = column.slots, editRender = column.editRender, cellRender = column.cellRender;
    var renderOpts = editRender || cellRender;
    var defaultSlot = slots ? slots.default : null;
    if (defaultSlot) {
      return $table.callSlot(defaultSlot, params);
    }
    if (renderOpts) {
      var funName = editRender ? "renderCell" : "renderDefault";
      var compConf = VXETable.renderer.get(renderOpts.name);
      var compFn = compConf ? compConf[funName] : null;
      if (compFn) {
        return compFn(renderOpts, Object.assign({ $type: editRender ? "edit" : "cell" }, params));
      }
    }
    var cellValue = $table.getCellLabel(row, column);
    var cellPlaceholder = editRender ? editRender.placeholder : "";
    return [
      h("span", {
        class: "vxe-cell--label"
      }, editRender && eqEmptyValue(cellValue) ? [
        h("span", {
          class: "vxe-cell--placeholder"
        }, formatText(getFuncText(cellPlaceholder), 1))
      ] : formatText(cellValue, 1))
    ];
  },
  renderTreeCell: function(params) {
    return Cell.renderTreeIcon(params, Cell.renderDefaultCell(params));
  },
  renderDefaultFooter: function(params) {
    return [
      h("span", {
        class: "vxe-cell--item"
      }, getFooterContent(params))
    ];
  },
  renderTreeIcon: function(params, cellVNodes) {
    var $table = params.$table, isHidden = params.isHidden;
    var reactData = $table.reactData;
    var computeTreeOpts = $table.getComputeMaps().computeTreeOpts;
    var treeExpandeds = reactData.treeExpandeds, treeLazyLoadeds = reactData.treeLazyLoadeds;
    var treeOpts = computeTreeOpts.value;
    var row = params.row, column = params.column, level = params.level;
    var slots = column.slots;
    var children = treeOpts.children, hasChild = treeOpts.hasChild, indent = treeOpts.indent, lazy = treeOpts.lazy, trigger = treeOpts.trigger, iconLoaded = treeOpts.iconLoaded, showIcon = treeOpts.showIcon, iconOpen = treeOpts.iconOpen, iconClose = treeOpts.iconClose;
    var rowChilds = row[children];
    var iconSlot = slots ? slots.icon : null;
    var hasLazyChilds = false;
    var isAceived = false;
    var isLazyLoaded = false;
    var ons = {};
    if (iconSlot) {
      return $table.callSlot(iconSlot, params);
    }
    if (!isHidden) {
      isAceived = $table.findRowIndexOf(treeExpandeds, row) > -1;
      if (lazy) {
        isLazyLoaded = $table.findRowIndexOf(treeLazyLoadeds, row) > -1;
        hasLazyChilds = row[hasChild];
      }
    }
    if (!trigger || trigger === "default") {
      ons.onClick = function(evnt) {
        return $table.triggerTreeExpandEvent(evnt, params);
      };
    }
    return [
      h("div", {
        class: ["vxe-cell--tree-node", {
          "is--active": isAceived
        }],
        style: {
          paddingLeft: level * indent + "px"
        }
      }, [
        showIcon && (rowChilds && rowChilds.length || hasLazyChilds) ? [
          h("div", __assign$9({ class: "vxe-tree--btn-wrapper" }, ons), [
            h("i", {
              class: ["vxe-tree--node-btn", isLazyLoaded ? iconLoaded || GlobalConfig.icon.TABLE_TREE_LOADED : isAceived ? iconOpen || GlobalConfig.icon.TABLE_TREE_OPEN : iconClose || GlobalConfig.icon.TABLE_TREE_CLOSE]
            })
          ])
        ] : null,
        h("div", {
          class: "vxe-tree-cell"
        }, cellVNodes)
      ])
    ];
  },
  renderIndexHeader: function(params) {
    var $table = params.$table, column = params.column;
    var slots = column.slots;
    var headerSlot = slots ? slots.header : null;
    return renderTitleContent(params, headerSlot ? $table.callSlot(headerSlot, params) : formatText(column.getTitle(), 1));
  },
  renderIndexCell: function(params) {
    var $table = params.$table, column = params.column;
    var computeSeqOpts = $table.getComputeMaps().computeSeqOpts;
    var seqOpts = computeSeqOpts.value;
    var slots = column.slots;
    var defaultSlot = slots ? slots.default : null;
    if (defaultSlot) {
      return $table.callSlot(defaultSlot, params);
    }
    var $seq = params.$seq, seq = params.seq, level = params.level;
    var seqMethod = seqOpts.seqMethod;
    return [formatText(seqMethod ? seqMethod(params) : level ? $seq + "." + seq : (seqOpts.startIndex || 0) + seq, 1)];
  },
  renderTreeIndexCell: function(params) {
    return Cell.renderTreeIcon(params, Cell.renderIndexCell(params));
  },
  renderRadioHeader: function(params) {
    var $table = params.$table, column = params.column;
    var slots = column.slots;
    var headerSlot = slots ? slots.header : null;
    var titleSlot = slots ? slots.title : null;
    return renderTitleContent(params, headerSlot ? $table.callSlot(headerSlot, params) : [
      h("span", {
        class: "vxe-radio--label"
      }, titleSlot ? $table.callSlot(titleSlot, params) : formatText(column.getTitle(), 1))
    ]);
  },
  renderRadioCell: function(params) {
    var $table = params.$table, column = params.column, isHidden = params.isHidden;
    var reactData = $table.reactData;
    var computeRadioOpts = $table.getComputeMaps().computeRadioOpts;
    var selectRow = reactData.selectRow;
    var radioOpts = computeRadioOpts.value;
    var slots = column.slots;
    var labelField = radioOpts.labelField, checkMethod = radioOpts.checkMethod;
    var row = params.row;
    var defaultSlot = slots ? slots.default : null;
    var radioSlot = slots ? slots.radio : null;
    var isChecked = row === selectRow;
    var isDisabled = !!checkMethod;
    var ons;
    if (!isHidden) {
      ons = {
        onClick: function(evnt) {
          if (!isDisabled) {
            $table.triggerRadioRowEvent(evnt, params);
          }
        }
      };
      if (checkMethod) {
        isDisabled = !checkMethod({ row });
      }
    }
    var radioParams = __assign$9(__assign$9({}, params), { checked: isChecked, disabled: isDisabled });
    return radioSlot ? $table.callSlot(radioSlot, radioParams) : [
      h("span", __assign$9({ class: ["vxe-cell--radio", {
        "is--checked": isChecked,
        "is--disabled": isDisabled
      }] }, ons), [
        h("span", {
          class: "vxe-radio--icon vxe-radio--checked-icon"
        }),
        h("span", {
          class: "vxe-radio--icon vxe-radio--unchecked-icon"
        })
      ].concat(defaultSlot || labelField ? [
        h("span", {
          class: "vxe-radio--label"
        }, defaultSlot ? $table.callSlot(defaultSlot, radioParams) : xeUtils.get(row, labelField))
      ] : []))
    ];
  },
  renderTreeRadioCell: function(params) {
    return Cell.renderTreeIcon(params, Cell.renderRadioCell(params));
  },
  renderSelectionHeader: function(params) {
    var $table = params.$table, column = params.column, isHidden = params.isHidden;
    var reactData = $table.reactData;
    var _a = $table.getComputeMaps(), computeIsAllCheckboxDisabled = _a.computeIsAllCheckboxDisabled, computeCheckboxOpts = _a.computeCheckboxOpts;
    var isAllCheckboxIndeterminate = reactData.isIndeterminate, isAllSelected = reactData.isAllSelected;
    var isAllCheckboxDisabled = computeIsAllCheckboxDisabled.value;
    var slots = column.slots;
    var headerSlot = slots ? slots.header : null;
    var titleSlot = slots ? slots.title : null;
    var checkboxOpts = computeCheckboxOpts.value;
    var headerTitle = column.getTitle();
    var isChecked = false;
    var ons;
    if (!isHidden) {
      isChecked = isAllCheckboxDisabled ? false : isAllSelected;
      ons = {
        onClick: function(evnt) {
          if (!isAllCheckboxDisabled) {
            $table.triggerCheckAllEvent(evnt, !isChecked);
          }
        }
      };
    }
    var checkboxParams = __assign$9(__assign$9({}, params), { checked: isChecked, disabled: isAllCheckboxDisabled, indeterminate: isAllCheckboxIndeterminate });
    if (headerSlot) {
      return renderTitleContent(checkboxParams, $table.callSlot(headerSlot, checkboxParams));
    }
    if (checkboxOpts.checkStrictly ? !checkboxOpts.showHeader : checkboxOpts.showHeader === false) {
      return renderTitleContent(checkboxParams, [
        h("span", {
          class: "vxe-checkbox--label"
        }, titleSlot ? $table.callSlot(titleSlot, checkboxParams) : headerTitle)
      ]);
    }
    return renderTitleContent(checkboxParams, [
      h("span", __assign$9({ class: ["vxe-cell--checkbox", {
        "is--checked": isChecked,
        "is--disabled": isAllCheckboxDisabled,
        "is--indeterminate": isAllCheckboxIndeterminate
      }], title: GlobalConfig.i18n("vxe.table.allTitle") }, ons), [
        h("span", {
          class: "vxe-checkbox--icon vxe-checkbox--checked-icon"
        }),
        h("span", {
          class: "vxe-checkbox--icon vxe-checkbox--unchecked-icon"
        }),
        h("span", {
          class: "vxe-checkbox--icon vxe-checkbox--indeterminate-icon"
        })
      ].concat(titleSlot || headerTitle ? [
        h("span", {
          class: "vxe-checkbox--label"
        }, titleSlot ? $table.callSlot(titleSlot, checkboxParams) : headerTitle)
      ] : []))
    ]);
  },
  renderSelectionCell: function(params) {
    var $table = params.$table, row = params.row, column = params.column, isHidden = params.isHidden;
    var props = $table.props, reactData = $table.reactData;
    var treeConfig = props.treeConfig;
    var selection = reactData.selection, treeIndeterminates = reactData.treeIndeterminates;
    var computeCheckboxOpts = $table.getComputeMaps().computeCheckboxOpts;
    var checkboxOpts = computeCheckboxOpts.value;
    var labelField = checkboxOpts.labelField, checkMethod = checkboxOpts.checkMethod;
    var slots = column.slots;
    var defaultSlot = slots ? slots.default : null;
    var checkboxSlot = slots ? slots.checkbox : null;
    var indeterminate = false;
    var isChecked = false;
    var isDisabled = !!checkMethod;
    var ons;
    if (!isHidden) {
      isChecked = $table.findRowIndexOf(selection, row) > -1;
      ons = {
        onClick: function(evnt) {
          if (!isDisabled) {
            $table.triggerCheckRowEvent(evnt, params, !isChecked);
          }
        }
      };
      if (checkMethod) {
        isDisabled = !checkMethod({ row });
      }
      if (treeConfig) {
        indeterminate = $table.findRowIndexOf(treeIndeterminates, row) > -1;
      }
    }
    var checkboxParams = __assign$9(__assign$9({}, params), { checked: isChecked, disabled: isDisabled, indeterminate });
    return checkboxSlot ? $table.callSlot(checkboxSlot, checkboxParams) : [
      h("span", __assign$9({ class: ["vxe-cell--checkbox", {
        "is--checked": isChecked,
        "is--disabled": isDisabled,
        "is--indeterminate": indeterminate
      }] }, ons), [
        h("span", {
          class: "vxe-checkbox--icon vxe-checkbox--checked-icon"
        }),
        h("span", {
          class: "vxe-checkbox--icon vxe-checkbox--unchecked-icon"
        }),
        h("span", {
          class: "vxe-checkbox--icon vxe-checkbox--indeterminate-icon"
        })
      ].concat(defaultSlot || labelField ? [
        h("span", {
          class: "vxe-checkbox--label"
        }, defaultSlot ? $table.callSlot(defaultSlot, checkboxParams) : xeUtils.get(row, labelField))
      ] : []))
    ];
  },
  renderTreeSelectionCell: function(params) {
    return Cell.renderTreeIcon(params, Cell.renderSelectionCell(params));
  },
  renderSelectionCellByProp: function(params) {
    var $table = params.$table, row = params.row, column = params.column, isHidden = params.isHidden;
    var props = $table.props, reactData = $table.reactData;
    var treeConfig = props.treeConfig;
    var treeIndeterminates = reactData.treeIndeterminates;
    var computeCheckboxOpts = $table.getComputeMaps().computeCheckboxOpts;
    var checkboxOpts = computeCheckboxOpts.value;
    var labelField = checkboxOpts.labelField, property = checkboxOpts.checkField, halfField = checkboxOpts.halfField, checkMethod = checkboxOpts.checkMethod;
    var slots = column.slots;
    var defaultSlot = slots ? slots.default : null;
    var checkboxSlot = slots ? slots.checkbox : null;
    var indeterminate = false;
    var isChecked = false;
    var isDisabled = !!checkMethod;
    var ons;
    if (!isHidden) {
      isChecked = xeUtils.get(row, property);
      ons = {
        onClick: function(evnt) {
          if (!isDisabled) {
            $table.triggerCheckRowEvent(evnt, params, !isChecked);
          }
        }
      };
      if (checkMethod) {
        isDisabled = !checkMethod({ row });
      }
      if (treeConfig) {
        indeterminate = $table.findRowIndexOf(treeIndeterminates, row) > -1;
      }
    }
    var checkboxParams = __assign$9(__assign$9({}, params), { checked: isChecked, disabled: isDisabled, indeterminate });
    return checkboxSlot ? $table.callSlot(checkboxSlot, checkboxParams) : [
      h("span", __assign$9({ class: ["vxe-cell--checkbox", {
        "is--checked": isChecked,
        "is--disabled": isDisabled,
        "is--indeterminate": halfField && !isChecked ? row[halfField] : indeterminate
      }] }, ons), [
        h("span", {
          class: "vxe-checkbox--icon vxe-checkbox--checked-icon"
        }),
        h("span", {
          class: "vxe-checkbox--icon vxe-checkbox--unchecked-icon"
        }),
        h("span", {
          class: "vxe-checkbox--icon vxe-checkbox--indeterminate-icon"
        })
      ].concat(defaultSlot || labelField ? [
        h("span", {
          class: "vxe-checkbox--label"
        }, defaultSlot ? $table.callSlot(defaultSlot, checkboxParams) : xeUtils.get(row, labelField))
      ] : []))
    ];
  },
  renderTreeSelectionCellByProp: function(params) {
    return Cell.renderTreeIcon(params, Cell.renderSelectionCellByProp(params));
  },
  renderExpandCell: function(params) {
    var $table = params.$table, isHidden = params.isHidden, row = params.row, column = params.column;
    var reactData = $table.reactData;
    var rowExpandeds = reactData.rowExpandeds, expandLazyLoadeds = reactData.expandLazyLoadeds;
    var computeExpandOpts = $table.getComputeMaps().computeExpandOpts;
    var expandOpts = computeExpandOpts.value;
    var lazy = expandOpts.lazy, labelField = expandOpts.labelField, iconLoaded = expandOpts.iconLoaded, showIcon = expandOpts.showIcon, iconOpen = expandOpts.iconOpen, iconClose = expandOpts.iconClose, visibleMethod = expandOpts.visibleMethod;
    var slots = column.slots;
    var defaultSlot = slots ? slots.default : null;
    var iconSlot = slots ? slots.icon : null;
    var isAceived = false;
    var isLazyLoaded = false;
    if (iconSlot) {
      return $table.callSlot(iconSlot, params);
    }
    if (!isHidden) {
      isAceived = $table.findRowIndexOf(rowExpandeds, params.row) > -1;
      if (lazy) {
        isLazyLoaded = $table.findRowIndexOf(expandLazyLoadeds, row) > -1;
      }
    }
    return [
      showIcon && (!visibleMethod || visibleMethod(params)) ? h("span", {
        class: ["vxe-table--expanded", {
          "is--active": isAceived
        }],
        onClick: function(evnt) {
          $table.triggerRowExpandEvent(evnt, params);
        }
      }, [
        h("i", {
          class: ["vxe-table--expand-btn", isLazyLoaded ? iconLoaded || GlobalConfig.icon.TABLE_EXPAND_LOADED : isAceived ? iconOpen || GlobalConfig.icon.TABLE_EXPAND_OPEN : iconClose || GlobalConfig.icon.TABLE_EXPAND_CLOSE]
        })
      ]) : null,
      defaultSlot || labelField ? h("span", {
        class: "vxe-table--expand-label"
      }, defaultSlot ? $table.callSlot(defaultSlot, params) : xeUtils.get(row, labelField)) : null
    ];
  },
  renderExpandData: function(params) {
    var $table = params.$table, column = params.column;
    var slots = column.slots, contentRender = column.contentRender;
    var contentSlot = slots ? slots.content : null;
    if (contentSlot) {
      return $table.callSlot(contentSlot, params);
    }
    if (contentRender) {
      var compConf = VXETable.renderer.get(contentRender.name);
      if (compConf && compConf.renderExpand) {
        return compConf.renderExpand(contentRender, params);
      }
    }
    return [];
  },
  renderHTMLCell: function(params) {
    var $table = params.$table, column = params.column;
    var slots = column.slots;
    var defaultSlot = slots ? slots.default : null;
    if (defaultSlot) {
      return $table.callSlot(defaultSlot, params);
    }
    return [
      h("span", {
        class: "vxe-cell--html",
        innerHTML: getDefaultCellLabel(params)
      })
    ];
  },
  renderTreeHTMLCell: function(params) {
    return Cell.renderTreeIcon(params, Cell.renderHTMLCell(params));
  },
  renderSortAndFilterHeader: function(params) {
    return Cell.renderDefaultHeader(params).concat(Cell.renderSortIcon(params)).concat(Cell.renderFilterIcon(params));
  },
  renderSortHeader: function(params) {
    return Cell.renderDefaultHeader(params).concat(Cell.renderSortIcon(params));
  },
  renderSortIcon: function(params) {
    var $table = params.$table, column = params.column;
    var computeSortOpts = $table.getComputeMaps().computeSortOpts;
    var sortOpts = computeSortOpts.value;
    var showIcon = sortOpts.showIcon, iconAsc = sortOpts.iconAsc, iconDesc = sortOpts.iconDesc;
    var order = column.order;
    return showIcon ? [
      h("span", {
        class: "vxe-cell--sort"
      }, [
        h("i", {
          class: ["vxe-sort--asc-btn", iconAsc || GlobalConfig.icon.TABLE_SORT_ASC, {
            "sort--active": order === "asc"
          }],
          title: GlobalConfig.i18n("vxe.table.sortAsc"),
          onClick: function(evnt) {
            $table.triggerSortEvent(evnt, column, "asc");
          }
        }),
        h("i", {
          class: ["vxe-sort--desc-btn", iconDesc || GlobalConfig.icon.TABLE_SORT_DESC, {
            "sort--active": order === "desc"
          }],
          title: GlobalConfig.i18n("vxe.table.sortDesc"),
          onClick: function(evnt) {
            $table.triggerSortEvent(evnt, column, "desc");
          }
        })
      ])
    ] : [];
  },
  renderFilterHeader: function(params) {
    return Cell.renderDefaultHeader(params).concat(Cell.renderFilterIcon(params));
  },
  renderFilterIcon: function(params) {
    var $table = params.$table, column = params.column, hasFilter = params.hasFilter;
    var reactData = $table.reactData;
    var filterStore = reactData.filterStore;
    var computeFilterOpts = $table.getComputeMaps().computeFilterOpts;
    var filterOpts = computeFilterOpts.value;
    var showIcon = filterOpts.showIcon, iconNone = filterOpts.iconNone, iconMatch = filterOpts.iconMatch;
    return showIcon ? [
      h("span", {
        class: ["vxe-cell--filter", {
          "is--active": filterStore.visible && filterStore.column === column
        }]
      }, [
        h("i", {
          class: ["vxe-filter--btn", hasFilter ? iconMatch || GlobalConfig.icon.TABLE_FILTER_MATCH : iconNone || GlobalConfig.icon.TABLE_FILTER_NONE],
          title: GlobalConfig.i18n("vxe.table.filter"),
          onClick: function(evnt) {
            $table.triggerFilterEvent(evnt, params.column, params);
          }
        })
      ])
    ] : [];
  },
  renderEditHeader: function(params) {
    var $table = params.$table, column = params.column;
    var props = $table.props;
    var computeEditOpts = $table.getComputeMaps().computeEditOpts;
    var editConfig = props.editConfig, editRules = props.editRules;
    var editOpts = computeEditOpts.value;
    var sortable = column.sortable, filters = column.filters, editRender = column.editRender;
    var isRequired = false;
    if (editRules) {
      var columnRules = xeUtils.get(editRules, params.column.property);
      if (columnRules) {
        isRequired = columnRules.some(function(rule) {
          return rule.required;
        });
      }
    }
    return (isEnableConf(editConfig) ? [
      isRequired && editOpts.showAsterisk ? h("i", {
        class: "vxe-cell--required-icon"
      }) : null,
      isEnableConf(editRender) && editOpts.showIcon ? h("i", {
        class: ["vxe-cell--edit-icon", editOpts.icon || GlobalConfig.icon.TABLE_EDIT]
      }) : null
    ] : []).concat(Cell.renderDefaultHeader(params)).concat(sortable ? Cell.renderSortIcon(params) : []).concat(filters ? Cell.renderFilterIcon(params) : []);
  },
  renderRowEdit: function(params) {
    var $table = params.$table, column = params.column;
    var reactData = $table.reactData;
    var editStore = reactData.editStore;
    var actived = editStore.actived;
    var editRender = column.editRender;
    return Cell.runRenderer(params, isEnableConf(editRender) && actived && actived.row === params.row);
  },
  renderTreeRowEdit: function(params) {
    return Cell.renderTreeIcon(params, Cell.renderRowEdit(params));
  },
  renderCellEdit: function(params) {
    var $table = params.$table, column = params.column;
    var reactData = $table.reactData;
    var editStore = reactData.editStore;
    var actived = editStore.actived;
    var editRender = column.editRender;
    return Cell.runRenderer(params, isEnableConf(editRender) && actived && actived.row === params.row && actived.column === params.column);
  },
  renderTreeCellEdit: function(params) {
    return Cell.renderTreeIcon(params, Cell.renderCellEdit(params));
  },
  runRenderer: function(params, isEdit) {
    var $table = params.$table, column = params.column;
    var slots = column.slots, editRender = column.editRender, formatter = column.formatter;
    var defaultSlot = slots ? slots.default : null;
    var editSlot = slots ? slots.edit : null;
    var compConf = VXETable.renderer.get(editRender.name);
    if (isEdit) {
      if (editSlot) {
        return $table.callSlot(editSlot, params);
      }
      return compConf && compConf.renderEdit ? compConf.renderEdit(editRender, Object.assign({ $type: "edit" }, params)) : [];
    }
    if (defaultSlot) {
      return $table.callSlot(defaultSlot, params);
    }
    if (formatter) {
      return [
        h("span", {
          class: "vxe-cell--label"
        }, getDefaultCellLabel(params))
      ];
    }
    return Cell.renderDefaultCell(params);
  }
};
var columnProps = {
  colId: [String, Number],
  type: String,
  field: String,
  title: String,
  width: [Number, String],
  minWidth: [Number, String],
  resizable: { type: Boolean, default: null },
  fixed: String,
  align: String,
  headerAlign: String,
  footerAlign: String,
  showOverflow: { type: [Boolean, String], default: null },
  showHeaderOverflow: { type: [Boolean, String], default: null },
  showFooterOverflow: { type: [Boolean, String], default: null },
  className: [String, Function],
  headerClassName: [String, Function],
  footerClassName: [String, Function],
  formatter: [Function, Array, String],
  sortable: Boolean,
  sortBy: [String, Function],
  sortType: String,
  filters: { type: Array, default: null },
  filterMultiple: { type: Boolean, default: true },
  filterMethod: Function,
  filterResetMethod: Function,
  filterRecoverMethod: Function,
  filterRender: Object,
  treeNode: Boolean,
  visible: { type: Boolean, default: null },
  exportMethod: Function,
  footerExportMethod: Function,
  titleHelp: Object,
  cellType: String,
  cellRender: Object,
  editRender: Object,
  contentRender: Object,
  params: Object
};
var VxeTableColumnComponent = defineComponent({
  name: "VxeColumn",
  props: columnProps,
  setup: function(props, _a) {
    var slots = _a.slots;
    var refElem = ref();
    var $xetable = inject("$xetable", {});
    var colgroup = inject("xecolgroup", null);
    var column = Cell.createColumn($xetable, props);
    column.slots = slots;
    provide("$xegrid", null);
    watchColumn(props, column);
    onMounted(function() {
      assemColumn($xetable, refElem.value, column, colgroup);
    });
    onUnmounted(function() {
      destroyColumn($xetable, column);
    });
    var renderVN = function() {
      return h("div", {
        ref: refElem
      });
    };
    return renderVN;
  }
});
var Column = Object.assign(VxeTableColumnComponent, {
  install: function(app) {
    dynamicApp.component(VxeTableColumnComponent.name, VxeTableColumnComponent);
    app.component(VxeTableColumnComponent.name, VxeTableColumnComponent);
    dynamicApp.component("VxeTableColumn", VxeTableColumnComponent);
    app.component("VxeTableColumn", VxeTableColumnComponent);
  }
});
var VxeTableColgroupComponent = defineComponent({
  name: "VxeColgroup",
  props: columnProps,
  setup: function(props, _a) {
    var slots = _a.slots;
    var refElem = ref();
    var $xetable = inject("$xetable", {});
    var colgroup = inject("xecolgroup", null);
    var column = Cell.createColumn($xetable, props);
    var columnSlots = {};
    if (slots.header) {
      columnSlots.header = slots.header;
    }
    var xecolumn = { column };
    column.slots = columnSlots;
    column.children = [];
    provide("xecolgroup", xecolumn);
    provide("$xegrid", null);
    watchColumn(props, column);
    onMounted(function() {
      assemColumn($xetable, refElem.value, column, colgroup);
    });
    onUnmounted(function() {
      destroyColumn($xetable, column);
    });
    var renderVN = function() {
      return h("div", {
        ref: refElem
      }, slots.default ? slots.default() : []);
    };
    return renderVN;
  }
});
var Colgroup = Object.assign(VxeTableColgroupComponent, {
  install: function(app) {
    dynamicApp.component(VxeTableColgroupComponent.name, VxeTableColgroupComponent);
    app.component(VxeTableColgroupComponent.name, VxeTableColgroupComponent);
    dynamicApp.component("VxeTableColgroup", VxeTableColgroupComponent);
    app.component("VxeTableColgroup", VxeTableColgroupComponent);
  }
});
var tableProps = {
  id: String,
  data: Array,
  height: [Number, String],
  maxHeight: [Number, String],
  resizable: { type: Boolean, default: function() {
    return GlobalConfig.table.resizable;
  } },
  stripe: { type: Boolean, default: function() {
    return GlobalConfig.table.stripe;
  } },
  border: { type: [Boolean, String], default: function() {
    return GlobalConfig.table.border;
  } },
  round: { type: Boolean, default: function() {
    return GlobalConfig.table.round;
  } },
  size: { type: String, default: function() {
    return GlobalConfig.table.size || GlobalConfig.size;
  } },
  fit: { type: Boolean, default: function() {
    return GlobalConfig.table.fit;
  } },
  loading: Boolean,
  align: { type: String, default: function() {
    return GlobalConfig.table.align;
  } },
  headerAlign: { type: String, default: function() {
    return GlobalConfig.table.headerAlign;
  } },
  footerAlign: { type: String, default: function() {
    return GlobalConfig.table.footerAlign;
  } },
  showHeader: { type: Boolean, default: function() {
    return GlobalConfig.table.showHeader;
  } },
  highlightCurrentRow: { type: Boolean, default: function() {
    return GlobalConfig.table.highlightCurrentRow;
  } },
  highlightHoverRow: { type: Boolean, default: function() {
    return GlobalConfig.table.highlightHoverRow;
  } },
  highlightCurrentColumn: { type: Boolean, default: function() {
    return GlobalConfig.table.highlightCurrentColumn;
  } },
  highlightHoverColumn: { type: Boolean, default: function() {
    return GlobalConfig.table.highlightHoverColumn;
  } },
  highlightCell: Boolean,
  showFooter: Boolean,
  footerMethod: Function,
  rowClassName: [String, Function],
  cellClassName: [String, Function],
  headerRowClassName: [String, Function],
  headerCellClassName: [String, Function],
  footerRowClassName: [String, Function],
  footerCellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerCellStyle: [Object, Function],
  footerCellStyle: [Object, Function],
  rowStyle: [Object, Function],
  headerRowStyle: [Object, Function],
  footerRowStyle: [Object, Function],
  mergeCells: Array,
  mergeFooterItems: Array,
  spanMethod: Function,
  footerSpanMethod: Function,
  showOverflow: { type: [Boolean, String], default: function() {
    return GlobalConfig.table.showOverflow;
  } },
  showHeaderOverflow: { type: [Boolean, String], default: function() {
    return GlobalConfig.table.showHeaderOverflow;
  } },
  showFooterOverflow: { type: [Boolean, String], default: function() {
    return GlobalConfig.table.showFooterOverflow;
  } },
  columnKey: Boolean,
  rowKey: Boolean,
  rowId: { type: String, default: function() {
    return GlobalConfig.table.rowId;
  } },
  zIndex: Number,
  emptyText: { type: String, default: function() {
    return GlobalConfig.table.emptyText;
  } },
  keepSource: { type: Boolean, default: function() {
    return GlobalConfig.table.keepSource;
  } },
  autoResize: { type: Boolean, default: function() {
    return GlobalConfig.table.autoResize;
  } },
  syncResize: [Boolean, String, Number],
  columnConfig: Object,
  resizableConfig: Object,
  seqConfig: Object,
  sortConfig: Object,
  filterConfig: Object,
  radioConfig: Object,
  checkboxConfig: Object,
  tooltipConfig: Object,
  exportConfig: Object,
  importConfig: Object,
  printConfig: Object,
  expandConfig: Object,
  treeConfig: Object,
  menuConfig: Object,
  mouseConfig: Object,
  areaConfig: Object,
  keyboardConfig: Object,
  clipConfig: Object,
  fnrConfig: Object,
  editConfig: Object,
  validConfig: Object,
  editRules: Object,
  emptyRender: Object,
  customConfig: Object,
  scrollX: Object,
  scrollY: Object,
  animat: { type: Boolean, default: function() {
    return GlobalConfig.table.animat;
  } },
  delayHover: { type: Number, default: function() {
    return GlobalConfig.table.delayHover;
  } },
  params: Object
};
var tableEmits = [
  "update:data",
  "keydown",
  "paste",
  "copy",
  "cut",
  "current-change",
  "radio-change",
  "checkbox-change",
  "checkbox-all",
  "checkbox-range-start",
  "checkbox-range-change",
  "checkbox-range-end",
  "cell-click",
  "cell-dblclick",
  "cell-menu",
  "cell-mouseenter",
  "cell-mouseleave",
  "header-cell-click",
  "header-cell-dblclick",
  "header-cell-menu",
  "footer-cell-click",
  "footer-cell-dblclick",
  "footer-cell-menu",
  "clear-merge",
  "sort-change",
  "clear-sort",
  "filter-change",
  "filter-visible",
  "clear-filter",
  "resizable-change",
  "toggle-row-expand",
  "toggle-tree-expand",
  "menu-click",
  "edit-closed",
  "edit-actived",
  "edit-disabled",
  "valid-error",
  "scroll",
  "custom",
  "change-fnr",
  "open-fnr",
  "fnr-change",
  "fnr-find",
  "fnr-find-all",
  "fnr-replace",
  "fnr-replace-all",
  "cell-area-copy",
  "cell-area-cut",
  "cell-area-paste",
  "cell-area-merge",
  "clear-cell-area-merge",
  "header-cell-area-selection",
  "cell-area-selection-start",
  "cell-area-selection-end",
  "cell-area-extension-start",
  "cell-area-extension-end"
];
var __assign$8 = function() {
  __assign$8 = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$8.apply(this, arguments);
};
var __spreadArray$2 = function(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
    to[j] = from[i];
  return to;
};
var tableComponentPropKeys = Object.keys(tableProps);
var tableComponentMethodKeys = ["clearAll", "syncData", "updateData", "loadData", "reloadData", "reloadRow", "loadColumn", "reloadColumn", "getRowNode", "getColumnNode", "getRowIndex", "getVTRowIndex", "getVMRowIndex", "getColumnIndex", "getVTColumnIndex", "getVMColumnIndex", "createData", "createRow", "revertData", "clearData", "isInsertByRow", "isUpdateByRow", "getColumns", "getColumnById", "getColumnByField", "getTableColumn", "getData", "getCheckboxRecords", "getRowById", "getRowid", "getTableData", "hideColumn", "showColumn", "resetColumn", "refreshColumn", "refreshScroll", "recalculate", "closeTooltip", "isAllCheckboxChecked", "isAllCheckboxIndeterminate", "getCheckboxIndeterminateRecords", "setCheckboxRow", "isCheckedByCheckboxRow", "isIndeterminateByCheckboxRow", "toggleCheckboxRow", "setAllCheckboxRow", "getRadioReserveRecord", "clearRadioReserve", "getCheckboxReserveRecords", "clearCheckboxReserve", "toggleAllCheckboxRow", "clearCheckboxRow", "setCurrentRow", "isCheckedByRadioRow", "setRadioRow", "clearCurrentRow", "clearRadioRow", "getCurrentRecord", "getRadioRecord", "getCurrentColumn", "setCurrentColumn", "clearCurrentColumn", "sort", "clearSort", "isSort", "getSortColumns", "closeFilter", "isFilter", "isRowExpandLoaded", "clearRowExpandLoaded", "reloadExpandContent", "toggleRowExpand", "setAllRowExpand", "setRowExpand", "isExpandByRow", "clearRowExpand", "clearRowExpandReserve", "getRowExpandRecords", "getTreeExpandRecords", "isTreeExpandLoaded", "clearTreeExpandLoaded", "reloadTreeChilds", "toggleTreeExpand", "setAllTreeExpand", "setTreeExpand", "isTreeExpandByRow", "clearTreeExpand", "clearTreeExpandReserve", "getScroll", "scrollTo", "scrollToRow", "scrollToColumn", "clearScroll", "updateFooter", "updateStatus", "setMergeCells", "removeMergeCells", "getMergeCells", "clearMergeCells", "setMergeFooterItems", "removeMergeFooterItems", "getMergeFooterItems", "clearMergeFooterItems", "focus", "blur", "connect"];
var gridComponentEmits = __spreadArray$2(__spreadArray$2([], tableEmits), [
  "page-change",
  "form-submit",
  "form-submit-invalid",
  "form-reset",
  "form-collapse",
  "form-toggle-collapse",
  "toolbar-button-click",
  "toolbar-tool-click",
  "zoom"
]);
var VxeGridComponent = defineComponent({
  name: "VxeGrid",
  props: __assign$8(__assign$8({}, tableProps), { columns: Array, pagerConfig: Object, proxyConfig: Object, toolbarConfig: Object, formConfig: Object, zoomConfig: Object, size: { type: String, default: function() {
    return GlobalConfig.grid.size || GlobalConfig.size;
  } } }),
  emits: gridComponentEmits,
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var instance = getCurrentInstance();
    var computeSize = useSize(props);
    var reactData = reactive({
      tableLoading: false,
      proxyInited: false,
      isZMax: false,
      tableData: [],
      pendingRecords: [],
      filterData: [],
      formData: {},
      sortData: [],
      tZindex: 0,
      tablePage: {
        total: 0,
        pageSize: 10,
        currentPage: 1
      }
    });
    var refElem = ref();
    var refTable = ref();
    var refForm = ref();
    var refToolbar = ref();
    var refPager = ref();
    var refFormWrapper = ref();
    var refToolbarWrapper = ref();
    var refTopWrapper = ref();
    var refBottomWrapper = ref();
    var refPagerWrapper = ref();
    var extendTableMethods = function(methodKeys) {
      var funcs = {};
      methodKeys.forEach(function(name) {
        funcs[name] = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var $xetable = refTable.value;
          return $xetable && $xetable[name].apply($xetable, args);
        };
      });
      return funcs;
    };
    var gridExtendTableMethods = extendTableMethods(tableComponentMethodKeys);
    tableComponentMethodKeys.forEach(function(name) {
      gridExtendTableMethods[name] = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var $xetable = refTable.value;
        return $xetable && $xetable[name].apply($xetable, args);
      };
    });
    var computeProxyOpts = computed(function() {
      return Object.assign({}, GlobalConfig.grid.proxyConfig, props.proxyConfig);
    });
    var computeIsMsg = computed(function() {
      var proxyOpts = computeProxyOpts.value;
      return proxyOpts.message !== false;
    });
    var computePagerOpts = computed(function() {
      return Object.assign({}, GlobalConfig.grid.pagerConfig, props.pagerConfig);
    });
    var computeFormOpts = computed(function() {
      return Object.assign({}, GlobalConfig.grid.formConfig, props.formConfig);
    });
    var computeToolbarOpts = computed(function() {
      return Object.assign({}, GlobalConfig.grid.toolbarConfig, props.toolbarConfig);
    });
    var computeZoomOpts = computed(function() {
      return Object.assign({}, GlobalConfig.grid.zoomConfig, props.zoomConfig);
    });
    var computeStyles = computed(function() {
      return reactData.isZMax ? { zIndex: reactData.tZindex } : null;
    });
    var computeTableExtendProps = computed(function() {
      var rest = {};
      var gridProps = props;
      tableComponentPropKeys.forEach(function(key) {
        rest[key] = gridProps[key];
      });
      return rest;
    });
    var refMaps = {
      refElem,
      refTable,
      refForm,
      refToolbar,
      refPager
    };
    var computeMaps = {
      computeProxyOpts,
      computePagerOpts,
      computeFormOpts,
      computeToolbarOpts,
      computeZoomOpts
    };
    var $xegrid = {
      xID,
      props,
      context,
      instance,
      reactData,
      getRefMaps: function() {
        return refMaps;
      },
      getComputeMaps: function() {
        return computeMaps;
      }
    };
    var gridMethods = {};
    var handleRowClassName = function(params) {
      var pendingRecords = reactData.pendingRecords;
      var rowClassName = props.rowClassName;
      var clss = [];
      if (pendingRecords.some(function(item) {
        return item === params.row;
      })) {
        clss.push("row--pending");
      }
      clss.push(rowClassName ? xeUtils.isFunction(rowClassName) ? rowClassName(params) : rowClassName : "");
      return clss;
    };
    var handleActiveMethod = function(params) {
      var editConfig = props.editConfig;
      var pendingRecords = reactData.pendingRecords;
      var $xetable = refTable.value;
      var activeMethod = editConfig ? editConfig.activeMethod : null;
      return $xetable.findRowIndexOf(pendingRecords, params.row) === -1 && (!activeMethod || activeMethod(params));
    };
    var computeTableProps = computed(function() {
      var seqConfig = props.seqConfig, pagerConfig = props.pagerConfig, loading = props.loading, editConfig = props.editConfig, proxyConfig = props.proxyConfig;
      var isZMax = reactData.isZMax, tableLoading = reactData.tableLoading, tablePage = reactData.tablePage, tableData = reactData.tableData;
      var tableExtendProps = computeTableExtendProps.value;
      var proxyOpts = computeProxyOpts.value;
      var tableProps2 = Object.assign({}, tableExtendProps);
      if (isZMax) {
        if (tableExtendProps.maxHeight) {
          tableProps2.maxHeight = "auto";
        } else {
          tableProps2.height = "auto";
        }
      }
      if (proxyConfig) {
        tableProps2.loading = loading || tableLoading;
        tableProps2.data = tableData;
        tableProps2.rowClassName = handleRowClassName;
        if (proxyOpts.seq && isEnableConf(pagerConfig)) {
          tableProps2.seqConfig = Object.assign({}, seqConfig, { startIndex: (tablePage.currentPage - 1) * tablePage.pageSize });
        }
      }
      if (editConfig) {
        tableProps2.editConfig = Object.assign({}, editConfig, { activeMethod: handleActiveMethod });
      }
      return tableProps2;
    });
    var initToolbar = function() {
      nextTick(function() {
        var $xetable = refTable.value;
        var $xetoolbar = refToolbar.value;
        if ($xetable && $xetoolbar) {
          $xetable.connect($xetoolbar);
        }
      });
    };
    var initPages = function() {
      var pagerConfig = props.pagerConfig;
      var tablePage = reactData.tablePage;
      var pagerOpts = computePagerOpts.value;
      var currentPage = pagerOpts.currentPage, pageSize = pagerOpts.pageSize;
      if (pagerConfig) {
        if (currentPage) {
          tablePage.currentPage = currentPage;
        }
        if (pageSize) {
          tablePage.pageSize = pageSize;
        }
      }
    };
    var triggerPendingEvent = function(code) {
      var pendingRecords = reactData.pendingRecords;
      var isMsg = computeIsMsg.value;
      var $xetable = refTable.value;
      var selectRecords = $xetable.getCheckboxRecords();
      if (selectRecords.length) {
        var plus_1 = [];
        var minus_1 = [];
        selectRecords.forEach(function(data) {
          if (pendingRecords.some(function(item) {
            return data === item;
          })) {
            minus_1.push(data);
          } else {
            plus_1.push(data);
          }
        });
        if (minus_1.length) {
          reactData.pendingRecords = pendingRecords.filter(function(item) {
            return $xetable.findRowIndexOf(minus_1, item) === -1;
          }).concat(plus_1);
        } else if (plus_1.length) {
          reactData.pendingRecords = pendingRecords.concat(plus_1);
        }
        gridExtendTableMethods.clearCheckboxRow();
      } else {
        if (isMsg) {
          VXETable.modal.message({ id: code, content: GlobalConfig.i18n("vxe.grid.selectOneRecord"), status: "warning" });
        }
      }
    };
    var getRespMsg = function(rest, defaultMsg) {
      var proxyOpts = computeProxyOpts.value;
      var _a = proxyOpts.props, proxyProps = _a === void 0 ? {} : _a;
      var msg;
      if (rest && proxyProps.message) {
        msg = xeUtils.get(rest, proxyProps.message);
      }
      return msg || GlobalConfig.i18n(defaultMsg);
    };
    var handleDeleteRow = function(code, alertKey, callback) {
      var isMsg = computeIsMsg.value;
      var selectRecords = gridExtendTableMethods.getCheckboxRecords();
      if (isMsg) {
        if (selectRecords.length) {
          return VXETable.modal.confirm({ id: "cfm_" + code, content: GlobalConfig.i18n(alertKey), escClosable: true }).then(function(type) {
            if (type === "confirm") {
              callback();
            }
          });
        } else {
          VXETable.modal.message({ id: "msg_" + code, content: GlobalConfig.i18n("vxe.grid.selectOneRecord"), status: "warning" });
        }
      } else {
        if (selectRecords.length) {
          callback();
        }
      }
      return Promise.resolve();
    };
    var pageChangeEvent = function(params) {
      var proxyConfig = props.proxyConfig;
      var tablePage = reactData.tablePage;
      var currentPage = params.currentPage, pageSize = params.pageSize;
      tablePage.currentPage = currentPage;
      tablePage.pageSize = pageSize;
      gridMethods.dispatchEvent("page-change", params);
      if (proxyConfig) {
        gridMethods.commitProxy("query");
      }
    };
    var sortChangeEvent = function(params) {
      var $xetable = refTable.value;
      var proxyConfig = props.proxyConfig;
      var computeSortOpts = $xetable.getComputeMaps().computeSortOpts;
      var sortOpts = computeSortOpts.value;
      if (sortOpts.remote) {
        reactData.sortData = params.sortList;
        if (proxyConfig) {
          reactData.tablePage.currentPage = 1;
          gridMethods.commitProxy("query");
        }
      }
      gridMethods.dispatchEvent("sort-change", params);
    };
    var filterChangeEvent = function(params) {
      var $xetable = refTable.value;
      var proxyConfig = props.proxyConfig;
      var computeFilterOpts = $xetable.getComputeMaps().computeFilterOpts;
      var filterOpts = computeFilterOpts.value;
      if (filterOpts.remote) {
        reactData.filterData = params.filterList;
        if (proxyConfig) {
          reactData.tablePage.currentPage = 1;
          gridMethods.commitProxy("query");
        }
      }
      gridMethods.dispatchEvent("filter-change", params);
    };
    var submitFormEvent = function(params) {
      var proxyConfig = props.proxyConfig;
      if (proxyConfig) {
        gridMethods.commitProxy("reload");
      }
      gridMethods.dispatchEvent("form-submit", params);
    };
    var resetFormEvent = function(params) {
      var proxyConfig = props.proxyConfig;
      if (proxyConfig) {
        gridMethods.commitProxy("reload");
      }
      gridMethods.dispatchEvent("form-reset", params);
    };
    var submitInvalidEvent = function(params) {
      gridMethods.dispatchEvent("form-submit-invalid", params);
    };
    var collapseEvent = function(params) {
      nextTick(function() {
        return gridExtendTableMethods.recalculate(true);
      });
      gridMethods.dispatchEvent("form-toggle-collapse", params);
      gridMethods.dispatchEvent("form-collapse", params);
    };
    var handleZoom = function(isMax) {
      var isZMax = reactData.isZMax;
      if (isMax ? !isZMax : isZMax) {
        reactData.isZMax = !isZMax;
        if (reactData.tZindex < getLastZIndex()) {
          reactData.tZindex = nextZIndex();
        }
      }
      return nextTick().then(function() {
        return gridExtendTableMethods.recalculate(true);
      }).then(function() {
        return reactData.isZMax;
      });
    };
    var getFuncSlot = function(optSlots, slotKey) {
      var funcSlot = optSlots[slotKey];
      if (funcSlot) {
        if (xeUtils.isString(funcSlot)) {
          if (slots[funcSlot]) {
            return slots[funcSlot];
          }
        } else {
          return funcSlot;
        }
      }
      return null;
    };
    var renderForms = function() {
      var formConfig = props.formConfig, proxyConfig = props.proxyConfig;
      var formData = reactData.formData;
      var proxyOpts = computeProxyOpts.value;
      var formOpts = computeFormOpts.value;
      var restVNs = [];
      if (isEnableConf(formConfig) || slots.form) {
        var slotVNs = [];
        if (slots.form) {
          slotVNs = slots.form({ $grid: $xegrid });
        } else {
          if (formOpts.items) {
            var formSlots_1 = {};
            if (!formOpts.inited) {
              formOpts.inited = true;
              var beforeItem_1 = proxyOpts.beforeItem;
              if (proxyOpts && beforeItem_1) {
                formOpts.items.forEach(function(item) {
                  beforeItem_1({ $grid: $xegrid, item });
                });
              }
            }
            formOpts.items.forEach(function(item) {
              xeUtils.each(item.slots, function(func) {
                if (!xeUtils.isFunction(func)) {
                  if (slots[func]) {
                    formSlots_1[func] = slots[func];
                  }
                }
              });
            });
            slotVNs.push(h(resolveComponent("vxe-form"), __assign$8(__assign$8({ ref: refForm }, Object.assign({}, formOpts, {
              data: proxyConfig && proxyOpts.form ? formData : formOpts.data
            })), { onSubmit: submitFormEvent, onReset: resetFormEvent, onSubmitInvalid: submitInvalidEvent, onCollapse: collapseEvent }), formSlots_1));
          }
        }
        restVNs.push(h("div", {
          ref: refFormWrapper,
          class: "vxe-grid--form-wrapper"
        }, slotVNs));
      }
      return restVNs;
    };
    var renderToolbars = function() {
      var toolbarConfig = props.toolbarConfig;
      var toolbarOpts = computeToolbarOpts.value;
      var restVNs = [];
      if (isEnableConf(toolbarConfig) || slots.toolbar) {
        var slotVNs = [];
        if (slots.toolbar) {
          slotVNs = slots.toolbar({ $grid: $xegrid });
        } else {
          var toolbarOptSlots = toolbarOpts.slots;
          var buttonsSlot = void 0;
          var toolsSlot = void 0;
          var toolbarSlots = {};
          if (toolbarOptSlots) {
            buttonsSlot = getFuncSlot(toolbarOptSlots, "buttons");
            toolsSlot = getFuncSlot(toolbarOptSlots, "tools");
            if (buttonsSlot) {
              toolbarSlots.buttons = buttonsSlot;
            }
            if (toolsSlot) {
              toolbarSlots.tools = toolsSlot;
            }
          }
          slotVNs.push(h(resolveComponent("vxe-toolbar"), __assign$8({ ref: refToolbar }, toolbarOpts), toolbarSlots));
        }
        restVNs.push(h("div", {
          ref: refToolbarWrapper,
          class: "vxe-grid--toolbar-wrapper"
        }, slotVNs));
      }
      return restVNs;
    };
    var renderTops = function() {
      if (slots.top) {
        return [
          h("div", {
            ref: refTopWrapper,
            class: "vxe-grid--top-wrapper"
          }, slots.top({ $grid: $xegrid }))
        ];
      }
      return [];
    };
    var tableCompEvents = {};
    tableEmits.forEach(function(name) {
      var type = xeUtils.camelCase("on-" + name);
      tableCompEvents[type] = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return emit.apply(void 0, __spreadArray$2([name], args));
      };
    });
    var renderTables = function() {
      var proxyConfig = props.proxyConfig;
      var tableProps2 = computeTableProps.value;
      var proxyOpts = computeProxyOpts.value;
      var tableOns = Object.assign({}, tableCompEvents);
      var emptySlot = slots.empty;
      if (proxyConfig) {
        if (proxyOpts.sort) {
          tableOns.onSortChange = sortChangeEvent;
        }
        if (proxyOpts.filter) {
          tableOns.onFilterChange = filterChangeEvent;
        }
      }
      return [
        h(resolveComponent("vxe-table"), __assign$8(__assign$8({ ref: refTable }, tableProps2), tableOns), emptySlot ? {
          empty: function() {
            return emptySlot({});
          }
        } : {})
      ];
    };
    var renderBottoms = function() {
      if (slots.bottom) {
        return [
          h("div", {
            ref: refBottomWrapper,
            class: "vxe-grid--bottom-wrapper"
          }, slots.bottom({ $grid: $xegrid }))
        ];
      }
      return [];
    };
    var renderPagers = function() {
      var pagerConfig = props.pagerConfig;
      var pagerOpts = computePagerOpts.value;
      var restVNs = [];
      if (isEnableConf(pagerConfig) || slots.pager) {
        var slotVNs = [];
        if (slots.pager) {
          slotVNs = slots.pager({ $grid: $xegrid });
        } else {
          var pagerOptSlots = pagerOpts.slots;
          var pagerSlots = {};
          var leftSlot = void 0;
          var rightSlot = void 0;
          if (pagerOptSlots) {
            leftSlot = getFuncSlot(pagerOptSlots, "left");
            rightSlot = getFuncSlot(pagerOptSlots, "right");
            if (leftSlot) {
              pagerSlots.buttons = leftSlot;
            }
            if (rightSlot) {
              pagerSlots.tools = rightSlot;
            }
          }
          slotVNs.push(h(resolveComponent("vxe-pager"), __assign$8(__assign$8(__assign$8({ ref: refPager }, pagerOpts), props.proxyConfig ? reactData.tablePage : {}), { onPageChange: pageChangeEvent }), pagerSlots));
        }
        restVNs.push(h("div", {
          ref: refPagerWrapper,
          class: "vxe-grid--pager-wrapper"
        }, slotVNs));
      }
      return restVNs;
    };
    var initProxy = function() {
      var proxyConfig = props.proxyConfig, formConfig = props.formConfig;
      var proxyInited = reactData.proxyInited;
      var proxyOpts = computeProxyOpts.value;
      var formOpts = computeFormOpts.value;
      if (proxyConfig) {
        if (isEnableConf(formConfig) && proxyOpts.form && formOpts.items) {
          var formData_1 = {};
          formOpts.items.forEach(function(item) {
            var field = item.field, itemRender = item.itemRender;
            if (field) {
              var itemValue = null;
              if (itemRender) {
                var defaultValue = itemRender.defaultValue;
                if (xeUtils.isFunction(defaultValue)) {
                  itemValue = defaultValue({ item });
                } else if (!xeUtils.isUndefined(defaultValue)) {
                  itemValue = defaultValue;
                }
              }
              formData_1[field] = itemValue;
            }
          });
          reactData.formData = formData_1;
        }
        if (!proxyInited && proxyOpts.autoLoad !== false) {
          reactData.proxyInited = true;
          nextTick(function() {
            return gridMethods.commitProxy("_init");
          });
        }
      }
    };
    gridMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $grid: $xegrid, $event: evnt }, params));
      },
      commitProxy: function(proxyTarget) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        var toolbarConfig = props.toolbarConfig, pagerConfig = props.pagerConfig;
        var tablePage = reactData.tablePage, formData = reactData.formData;
        var isMsg = computeIsMsg.value;
        var proxyOpts = computeProxyOpts.value;
        var toolbarOpts = computeToolbarOpts.value;
        var beforeQuery = proxyOpts.beforeQuery, afterQuery = proxyOpts.afterQuery, beforeDelete = proxyOpts.beforeDelete, afterDelete = proxyOpts.afterDelete, beforeSave = proxyOpts.beforeSave, afterSave = proxyOpts.afterSave, _a = proxyOpts.ajax, ajax = _a === void 0 ? {} : _a, _b = proxyOpts.props, proxyProps = _b === void 0 ? {} : _b;
        var $xetable = refTable.value;
        var button = null;
        var code = null;
        if (xeUtils.isString(proxyTarget)) {
          var buttons = toolbarOpts.buttons;
          var matchObj = toolbarConfig && buttons ? xeUtils.findTree(buttons, function(item) {
            return item.code === proxyTarget;
          }, { children: "dropdowns" }) : null;
          button = matchObj ? matchObj.item : null;
          code = proxyTarget;
        } else {
          button = proxyTarget;
          code = button.code;
        }
        var btnParams = button ? button.params : null;
        switch (code) {
          case "insert":
            $xetable.insert({});
            break;
          case "insert_actived":
            $xetable.insert({}).then(function(_a2) {
              var row = _a2.row;
              return $xetable.setActiveRow(row);
            });
            break;
          case "mark_cancel":
            triggerPendingEvent(code);
            break;
          case "remove":
            return handleDeleteRow(code, "vxe.grid.removeSelectRecord", function() {
              return $xetable.removeCheckboxRow();
            });
          case "import":
            $xetable.importData(btnParams);
            break;
          case "open_import":
            $xetable.openImport(btnParams);
            break;
          case "export":
            $xetable.exportData(btnParams);
            break;
          case "open_export":
            $xetable.openExport(btnParams);
            break;
          case "reset_custom":
            $xetable.resetColumn(true);
            break;
          case "_init":
          case "reload":
          case "query": {
            var ajaxMethods = ajax.query;
            if (ajaxMethods) {
              var isInited = code === "_init";
              var isReload = code === "reload";
              var sortList = [];
              var filterList = [];
              var pageParams = {};
              if (pagerConfig) {
                if (isInited || isReload) {
                  tablePage.currentPage = 1;
                }
                if (isEnableConf(pagerConfig)) {
                  pageParams = __assign$8({}, tablePage);
                }
              }
              if (isInited) {
                var computeSortOpts = $xetable.getComputeMaps().computeSortOpts;
                var sortOpts = computeSortOpts.value;
                var defaultSort = sortOpts.defaultSort;
                if (defaultSort) {
                  if (!xeUtils.isArray(defaultSort)) {
                    defaultSort = [defaultSort];
                  }
                  sortList = defaultSort.map(function(item) {
                    return {
                      property: item.field,
                      order: item.order
                    };
                  });
                }
                filterList = $xetable.getCheckedFilters();
              } else {
                if (isReload) {
                  reactData.pendingRecords = [];
                  $xetable.clearAll();
                } else {
                  sortList = $xetable.getSortColumns();
                  filterList = $xetable.getCheckedFilters();
                }
              }
              var params = {
                code,
                button,
                $grid: $xegrid,
                page: pageParams,
                sort: sortList.length ? sortList[0] : {},
                sorts: sortList,
                filters: filterList,
                form: formData,
                options: ajaxMethods
              };
              reactData.sortData = sortList;
              reactData.filterData = filterList;
              reactData.tableLoading = true;
              var applyArgs_1 = [params].concat(args);
              return Promise.resolve((beforeQuery || ajaxMethods).apply(void 0, applyArgs_1)).catch(function(e) {
                return e;
              }).then(function(rest) {
                reactData.tableLoading = false;
                if (rest) {
                  if (isEnableConf(pagerConfig)) {
                    var total = xeUtils.get(rest, proxyProps.total || "page.total") || 0;
                    tablePage.total = total;
                    reactData.tableData = xeUtils.get(rest, proxyProps.result || "result") || [];
                    var pageCount = Math.max(Math.ceil(total / tablePage.pageSize), 1);
                    if (tablePage.currentPage > pageCount) {
                      tablePage.currentPage = pageCount;
                    }
                  } else {
                    reactData.tableData = (proxyProps.list ? xeUtils.get(rest, proxyProps.list) : rest) || [];
                  }
                } else {
                  reactData.tableData = [];
                }
                if (afterQuery) {
                  afterQuery.apply(void 0, applyArgs_1);
                }
              });
            }
            break;
          }
          case "delete": {
            var ajaxMethods_1 = ajax.delete;
            if (ajaxMethods_1) {
              var selectRecords_1 = gridExtendTableMethods.getCheckboxRecords();
              var removeRecords_1 = selectRecords_1.filter(function(row) {
                return !$xetable.isInsertByRow(row);
              });
              var body = { removeRecords: removeRecords_1 };
              var applyArgs_2 = [{ $grid: $xegrid, code, button, body, options: ajaxMethods_1 }].concat(args);
              if (selectRecords_1.length) {
                return handleDeleteRow(code, "vxe.grid.deleteSelectRecord", function() {
                  if (!removeRecords_1.length) {
                    return $xetable.remove(selectRecords_1);
                  }
                  reactData.tableLoading = true;
                  return Promise.resolve((beforeDelete || ajaxMethods_1).apply(void 0, applyArgs_2)).then(function(rest) {
                    reactData.tableLoading = false;
                    reactData.pendingRecords = reactData.pendingRecords.filter(function(row) {
                      return $xetable.findRowIndexOf(removeRecords_1, row) === -1;
                    });
                    if (isMsg) {
                      VXETable.modal.message({ content: getRespMsg(rest, "vxe.grid.delSuccess"), status: "success" });
                    }
                    if (afterDelete) {
                      afterDelete.apply(void 0, applyArgs_2);
                    } else {
                      gridMethods.commitProxy("query");
                    }
                  }).catch(function(rest) {
                    reactData.tableLoading = false;
                    if (isMsg) {
                      VXETable.modal.message({ id: code, content: getRespMsg(rest, "vxe.grid.operError"), status: "error" });
                    }
                  });
                });
              } else {
                if (isMsg) {
                  VXETable.modal.message({ id: code, content: GlobalConfig.i18n("vxe.grid.selectOneRecord"), status: "warning" });
                }
              }
            }
            break;
          }
          case "save": {
            var ajaxMethods_2 = ajax.save;
            if (ajaxMethods_2) {
              var body_1 = Object.assign({ pendingRecords: reactData.pendingRecords }, $xetable.getRecordset());
              var insertRecords_1 = body_1.insertRecords, removeRecords_2 = body_1.removeRecords, updateRecords_1 = body_1.updateRecords, pendingRecords_1 = body_1.pendingRecords;
              var applyArgs_3 = [{ $grid: $xegrid, code, button, body: body_1, options: ajaxMethods_2 }].concat(args);
              if (insertRecords_1.length) {
                body_1.pendingRecords = pendingRecords_1.filter(function(row) {
                  return $xetable.findRowIndexOf(insertRecords_1, row) === -1;
                });
              }
              if (pendingRecords_1.length) {
                body_1.insertRecords = insertRecords_1.filter(function(row) {
                  return $xetable.findRowIndexOf(pendingRecords_1, row) === -1;
                });
              }
              return $xetable.validate(body_1.insertRecords.concat(updateRecords_1)).then(function() {
                if (body_1.insertRecords.length || removeRecords_2.length || updateRecords_1.length || body_1.pendingRecords.length) {
                  reactData.tableLoading = true;
                  return Promise.resolve((beforeSave || ajaxMethods_2).apply(void 0, applyArgs_3)).then(function(rest) {
                    reactData.tableLoading = false;
                    reactData.pendingRecords = [];
                    if (isMsg) {
                      VXETable.modal.message({ content: getRespMsg(rest, "vxe.grid.saveSuccess"), status: "success" });
                    }
                    if (afterSave) {
                      afterSave.apply(void 0, applyArgs_3);
                    } else {
                      gridMethods.commitProxy("query");
                    }
                  }).catch(function(rest) {
                    reactData.tableLoading = false;
                    if (isMsg) {
                      VXETable.modal.message({ id: code, content: getRespMsg(rest, "vxe.grid.operError"), status: "error" });
                    }
                  });
                } else {
                  if (isMsg) {
                    VXETable.modal.message({ id: code, content: GlobalConfig.i18n("vxe.grid.dataUnchanged"), status: "info" });
                  }
                }
              }).catch(function(errMap) {
                return errMap;
              });
            }
            break;
          }
          default: {
            var btnMethod = VXETable.commands.get(code);
            if (btnMethod) {
              btnMethod.apply(void 0, __spreadArray$2([{ code, button, $grid: $xegrid, $table: $xetable }], args));
            }
          }
        }
        return nextTick();
      },
      zoom: function() {
        if (reactData.isZMax) {
          return gridMethods.revert();
        }
        return gridMethods.maximize();
      },
      isMaximized: function() {
        return reactData.isZMax;
      },
      maximize: function() {
        return handleZoom(true);
      },
      revert: function() {
        return handleZoom();
      },
      getFormItems: function(itemIndex) {
        var formOpts = computeFormOpts.value;
        var formConfig = props.formConfig;
        var items = formOpts.items;
        var itemList = [];
        xeUtils.eachTree(isEnableConf(formConfig) && items ? items : [], function(item) {
          itemList.push(item);
        }, { children: "children" });
        return xeUtils.isUndefined(itemIndex) ? itemList : itemList[itemIndex];
      },
      getPendingRecords: function() {
        return reactData.pendingRecords;
      },
      getProxyInfo: function() {
        if (props.proxyConfig) {
          var sortData = reactData.sortData;
          return {
            data: reactData.tableData,
            filter: reactData.filterData,
            form: reactData.formData,
            sort: sortData.length ? sortData[0] : {},
            sorts: sortData,
            pager: reactData.tablePage,
            pendingRecords: reactData.pendingRecords
          };
        }
        return null;
      }
    };
    var gridPrivateMethods = {
      extendTableMethods,
      callSlot: function(slotFunc, params) {
        if (slotFunc) {
          if (xeUtils.isString(slotFunc)) {
            slotFunc = slots[slotFunc] || null;
          }
          if (xeUtils.isFunction(slotFunc)) {
            return slotFunc(params);
          }
        }
        return [];
      },
      getExcludeHeight: function() {
        var height = props.height;
        var isZMax = reactData.isZMax;
        var el = refElem.value;
        var formWrapper = refFormWrapper.value;
        var toolbarWrapper = refToolbarWrapper.value;
        var topWrapper = refTopWrapper.value;
        var bottomWrapper = refBottomWrapper.value;
        var pagerWrapper = refPagerWrapper.value;
        var parentPaddingSize = isZMax || height !== "auto" ? 0 : getPaddingTopBottomSize(el.parentNode);
        return parentPaddingSize + getPaddingTopBottomSize(el) + getOffsetHeight(formWrapper) + getOffsetHeight(toolbarWrapper) + getOffsetHeight(topWrapper) + getOffsetHeight(bottomWrapper) + getOffsetHeight(pagerWrapper);
      },
      getParentHeight: function() {
        var el = refElem.value;
        if (el) {
          return (reactData.isZMax ? getDomNode().visibleHeight : xeUtils.toNumber(getComputedStyle(el.parentNode).height)) - gridPrivateMethods.getExcludeHeight();
        }
        return 0;
      },
      triggerToolbarBtnEvent: function(button, evnt) {
        gridMethods.commitProxy(button, evnt);
        gridMethods.dispatchEvent("toolbar-button-click", { code: button.code, button }, evnt);
      },
      triggerToolbarTolEvent: function(tool, evnt) {
        gridMethods.commitProxy(tool, evnt);
        gridMethods.dispatchEvent("toolbar-tool-click", { code: tool.code, tool, $event: evnt });
      },
      triggerZoomEvent: function(evnt) {
        gridMethods.zoom();
        gridMethods.dispatchEvent("zoom", { type: reactData.isZMax ? "max" : "revert" }, evnt);
      }
    };
    Object.assign($xegrid, gridExtendTableMethods, gridMethods, gridPrivateMethods);
    watch(function() {
      return props.columns;
    }, function(value) {
      nextTick(function() {
        return $xegrid.loadColumn(value || []);
      });
    });
    watch(function() {
      return props.toolbarConfig;
    }, function(value) {
      if (value) {
        initToolbar();
      }
    });
    watch(function() {
      return props.proxyConfig;
    }, function() {
      initProxy();
    });
    watch(function() {
      return props.pagerConfig;
    }, function() {
      initPages();
    });
    var handleGlobalKeydownEvent = function(evnt) {
      var zoomOpts = computeZoomOpts.value;
      var isEsc = hasEventKey(evnt, EVENT_KEYS.ESCAPE);
      if (isEsc && reactData.isZMax && zoomOpts.escRestore !== false) {
        gridPrivateMethods.triggerZoomEvent(evnt);
      }
    };
    VXETable.hooks.forEach(function(options) {
      var setupGrid = options.setupGrid;
      if (setupGrid) {
        var hookRest = setupGrid($xegrid);
        if (hookRest && xeUtils.isObject(hookRest)) {
          Object.assign($xegrid, hookRest);
        }
      }
    });
    onMounted(function() {
      nextTick(function() {
        var data = props.data, columns = props.columns, proxyConfig = props.proxyConfig;
        var proxyOpts = computeProxyOpts.value;
        var formOpts = computeFormOpts.value;
        if (proxyConfig && (data || proxyOpts.form && formOpts.data)) {
          errLog("errConflicts", ["grid.data", "grid.proxy-config"]);
        }
        if (columns && columns.length) {
          $xegrid.loadColumn(columns);
        }
        initToolbar();
        initPages();
        initProxy();
      });
      GlobalEvent.on($xegrid, "keydown", handleGlobalKeydownEvent);
    });
    onUnmounted(function() {
      GlobalEvent.off($xegrid, "keydown");
    });
    var renderVN = function() {
      var _a;
      var vSize = computeSize.value;
      var styles = computeStyles.value;
      return h("div", {
        ref: refElem,
        class: ["vxe-grid", (_a = {}, _a["size--" + vSize] = vSize, _a["is--animat"] = !!props.animat, _a["is--round"] = props.round, _a["is--maximize"] = reactData.isZMax, _a["is--loading"] = props.loading || reactData.tableLoading, _a)],
        style: styles
      }, renderForms().concat(renderToolbars(), renderTops(), renderTables(), renderBottoms(), renderPagers()));
    };
    $xegrid.renderVN = renderVN;
    provide("$xegrid", $xegrid);
    return $xegrid;
  },
  render: function() {
    return this.renderVN();
  }
});
var Grid = Object.assign(VxeGridComponent, {
  install: function(app) {
    dynamicApp.component(VxeGridComponent.name, VxeGridComponent);
    app.component(VxeGridComponent.name, VxeGridComponent);
  }
});
var __assign$7 = function() {
  __assign$7 = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$7.apply(this, arguments);
};
var VxeTooltipComponent = defineComponent({
  name: "VxeTooltip",
  props: {
    modelValue: Boolean,
    size: { type: String, default: function() {
      return GlobalConfig.tooltip.size || GlobalConfig.size;
    } },
    trigger: { type: String, default: function() {
      return GlobalConfig.tooltip.trigger;
    } },
    theme: { type: String, default: function() {
      return GlobalConfig.tooltip.theme;
    } },
    content: [String, Number],
    zIndex: [String, Number],
    isArrow: { type: Boolean, default: true },
    enterable: Boolean,
    leaveDelay: { type: Number, default: function() {
      return GlobalConfig.tooltip.leaveDelay;
    } },
    leaveMethod: Function
  },
  emits: [
    "update:modelValue"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var reactData = reactive({
      target: null,
      isUpdate: false,
      isHover: false,
      visible: false,
      message: "",
      tipTarget: null,
      tipZindex: 0,
      tipStore: {
        style: {},
        placement: "",
        arrowStyle: {}
      }
    });
    var refElem = ref();
    var refMaps = {
      refElem
    };
    var $xetooltip = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: function() {
        return refMaps;
      }
    };
    var tooltipMethods = {};
    var targetActive;
    var updateTipStyle = function() {
      var tipTarget = reactData.tipTarget, tipStore = reactData.tipStore;
      if (tipTarget) {
        var _a = getDomNode(), scrollTop = _a.scrollTop, scrollLeft = _a.scrollLeft, visibleWidth = _a.visibleWidth;
        var _b = getAbsolutePos(tipTarget), top_1 = _b.top, left = _b.left;
        var el = refElem.value;
        var marginSize = 6;
        var offsetHeight = el.offsetHeight;
        var offsetWidth = el.offsetWidth;
        var tipLeft = left;
        var tipTop = top_1 - offsetHeight - marginSize;
        tipLeft = Math.max(marginSize, left + Math.floor((tipTarget.offsetWidth - offsetWidth) / 2));
        if (tipLeft + offsetWidth + marginSize > scrollLeft + visibleWidth) {
          tipLeft = scrollLeft + visibleWidth - offsetWidth - marginSize;
        }
        if (top_1 - offsetHeight < scrollTop + marginSize) {
          tipStore.placement = "bottom";
          tipTop = top_1 + tipTarget.offsetHeight + marginSize;
        }
        tipStore.style.top = tipTop + "px";
        tipStore.style.left = tipLeft + "px";
        tipStore.arrowStyle.left = left - tipLeft + tipTarget.offsetWidth / 2 + "px";
      }
    };
    var updateValue = function(value) {
      if (value !== reactData.visible) {
        reactData.visible = value;
        reactData.isUpdate = true;
        emit("update:modelValue", value);
      }
    };
    var updateZindex = function() {
      if (reactData.tipZindex < getLastZIndex()) {
        reactData.tipZindex = nextZIndex();
      }
    };
    var clickEvent = function() {
      if (reactData.visible) {
        tooltipMethods.close();
      } else {
        tooltipMethods.open();
      }
    };
    var targetMouseenterEvent = function() {
      tooltipMethods.open();
    };
    var targetMouseleaveEvent = function() {
      var trigger = props.trigger, enterable = props.enterable, leaveDelay = props.leaveDelay;
      targetActive = false;
      if (enterable && trigger === "hover") {
        setTimeout(function() {
          if (!reactData.isHover) {
            tooltipMethods.close();
          }
        }, leaveDelay);
      } else {
        tooltipMethods.close();
      }
    };
    var wrapperMouseenterEvent = function() {
      reactData.isHover = true;
    };
    var wrapperMouseleaveEvent = function(evnt) {
      var leaveMethod = props.leaveMethod, trigger = props.trigger, enterable = props.enterable, leaveDelay = props.leaveDelay;
      reactData.isHover = false;
      if (!leaveMethod || leaveMethod({ $event: evnt }) !== false) {
        if (enterable && trigger === "hover") {
          setTimeout(function() {
            if (!targetActive) {
              tooltipMethods.close();
            }
          }, leaveDelay);
        }
      }
    };
    tooltipMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $tooltip: $xetooltip, $event: evnt }, params));
      },
      open: function(target, message) {
        return tooltipMethods.toVisible(target || reactData.target, message);
      },
      close: function() {
        reactData.tipTarget = null;
        Object.assign(reactData.tipStore, {
          style: {},
          placement: "",
          arrowStyle: null
        });
        updateValue(false);
        return nextTick();
      },
      toVisible: function(target, message) {
        targetActive = true;
        if (target) {
          var tipStore = reactData.tipStore;
          var el = refElem.value;
          var parentNode = el.parentNode;
          if (!parentNode) {
            document.body.appendChild(el);
          }
          if (message) {
            reactData.message = message;
          }
          reactData.tipTarget = target;
          updateValue(true);
          updateZindex();
          tipStore.placement = "top";
          tipStore.style = { width: "auto", left: 0, top: 0, zIndex: props.zIndex || reactData.tipZindex };
          tipStore.arrowStyle = { left: "50%" };
          return tooltipMethods.updatePlacement();
        }
        return nextTick();
      },
      updatePlacement: function() {
        return nextTick().then(function() {
          var tipTarget = reactData.tipTarget;
          var el = refElem.value;
          if (tipTarget && el) {
            updateTipStyle();
            return nextTick().then(updateTipStyle);
          }
        });
      }
    };
    Object.assign($xetooltip, tooltipMethods);
    watch(function() {
      return props.content;
    }, function() {
      reactData.message = props.content;
    });
    watch(function() {
      return props.modelValue;
    }, function() {
      if (!reactData.isUpdate) {
        if (props.modelValue) {
          tooltipMethods.open();
        } else {
          tooltipMethods.close();
        }
      }
      reactData.isUpdate = false;
    });
    onMounted(function() {
      nextTick(function() {
        var trigger = props.trigger, content = props.content, modelValue = props.modelValue;
        var wrapperElem = refElem.value;
        var parentNode = wrapperElem.parentNode;
        if (parentNode) {
          reactData.message = content;
          reactData.tipZindex = nextZIndex();
          xeUtils.arrayEach(wrapperElem.children, function(elem, index) {
            if (index > 1) {
              parentNode.insertBefore(elem, wrapperElem);
              if (!reactData.target) {
                reactData.target = elem;
              }
            }
          });
          parentNode.removeChild(wrapperElem);
          var target = reactData.target;
          if (target) {
            if (trigger === "hover") {
              target.onmouseleave = targetMouseleaveEvent;
              target.onmouseenter = targetMouseenterEvent;
            } else if (trigger === "click") {
              target.onclick = clickEvent;
            }
          }
          if (modelValue) {
            tooltipMethods.open();
          }
        }
      });
    });
    onBeforeUnmount(function() {
      var trigger = props.trigger;
      var target = reactData.target;
      var wrapperElem = refElem.value;
      if (wrapperElem) {
        var parentNode = wrapperElem.parentNode;
        if (parentNode) {
          parentNode.removeChild(wrapperElem);
        }
      }
      if (target) {
        if (trigger === "hover") {
          target.onmouseenter = null;
          target.onmouseleave = null;
        } else if (trigger === "click") {
          target.onclick = null;
        }
      }
    });
    var renderVN = function() {
      var _a;
      var theme = props.theme, isArrow = props.isArrow, enterable = props.enterable;
      var isHover = reactData.isHover, visible = reactData.visible, tipStore = reactData.tipStore, message = reactData.message;
      var vSize = computeSize.value;
      var ons;
      if (enterable) {
        ons = {
          onMouseenter: wrapperMouseenterEvent,
          onMouseleave: wrapperMouseleaveEvent
        };
      }
      return h("div", __assign$7({ ref: refElem, class: ["vxe-table--tooltip-wrapper", "theme--" + theme, (_a = {}, _a["size--" + vSize] = vSize, _a["placement--" + tipStore.placement] = tipStore.placement, _a["is--enterable"] = enterable, _a["is--visible"] = visible, _a["is--arrow"] = isArrow, _a["is--hover"] = isHover, _a)], style: tipStore.style }, ons), [
        h("div", {
          class: "vxe-table--tooltip-content"
        }, slots.content ? slots.content({}) : formatText(message)),
        h("div", {
          class: "vxe-table--tooltip-arrow",
          style: tipStore.arrowStyle
        })
      ].concat(slots.default ? slots.default({}) : []));
    };
    $xetooltip.renderVN = renderVN;
    return $xetooltip;
  },
  render: function() {
    return this.renderVN();
  }
});
var Tooltip = Object.assign(VxeTooltipComponent, {
  install: function(app) {
    VXETable.tooltip = true;
    dynamicApp.component(VxeTooltipComponent.name, VxeTooltipComponent);
    app.component(VxeTooltipComponent.name, VxeTooltipComponent);
  }
});
var __assign$6 = function() {
  __assign$6 = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$6.apply(this, arguments);
};
var VxeToolbarComponent = defineComponent({
  name: "VxeToolbar",
  props: {
    loading: Boolean,
    refresh: [Boolean, Object],
    import: [Boolean, Object],
    export: [Boolean, Object],
    print: [Boolean, Object],
    zoom: [Boolean, Object],
    custom: [Boolean, Object],
    buttons: { type: Array, default: function() {
      return GlobalConfig.toolbar.buttons;
    } },
    tools: { type: Array, default: function() {
      return GlobalConfig.toolbar.tools;
    } },
    perfect: { type: Boolean, default: function() {
      return GlobalConfig.toolbar.perfect;
    } },
    size: { type: String, default: function() {
      return GlobalConfig.toolbar.size || GlobalConfig.size;
    } },
    className: [String, Function]
  },
  emits: [
    "button-click",
    "tool-click"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var reactData = reactive({
      isRefresh: false,
      columns: []
    });
    var refElem = ref();
    var refCustomWrapper = ref();
    var customStore = reactive({
      isAll: false,
      isIndeterminate: false,
      activeBtn: false,
      activeWrapper: false,
      visible: false
    });
    var refMaps = {
      refElem
    };
    var $xetoolbar = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: function() {
        return refMaps;
      }
    };
    var toolbarMethods = {};
    var $xegrid = inject("$xegrid", null);
    var $xetable;
    var computeRefreshOpts = computed(function() {
      return Object.assign({}, GlobalConfig.toolbar.refresh, props.refresh);
    });
    var computeImportOpts = computed(function() {
      return Object.assign({}, GlobalConfig.toolbar.import, props.import);
    });
    var computeExportOpts = computed(function() {
      return Object.assign({}, GlobalConfig.toolbar.export, props.export);
    });
    var computePrintOpts = computed(function() {
      return Object.assign({}, GlobalConfig.toolbar.print, props.print);
    });
    var computeZoomOpts = computed(function() {
      return Object.assign({}, GlobalConfig.toolbar.zoom, props.zoom);
    });
    var computeCustomOpts = computed(function() {
      return Object.assign({}, GlobalConfig.toolbar.custom, props.custom);
    });
    var checkTable = function() {
      if ($xetable) {
        return true;
      }
      errLog("vxe.error.barUnableLink");
    };
    var checkCustomStatus = function() {
      var columns = reactData.columns;
      var computeTableCustomOpts = $xetable.getComputeMaps().computeCustomOpts;
      var tableCustomOpts = computeTableCustomOpts.value;
      var checkMethod = tableCustomOpts.checkMethod;
      customStore.isAll = columns.every(function(column) {
        return (checkMethod ? !checkMethod({ column }) : false) || column.visible;
      });
      customStore.isIndeterminate = !customStore.isAll && columns.some(function(column) {
        return (!checkMethod || checkMethod({ column })) && (column.visible || column.halfVisible);
      });
    };
    var showCustom = function() {
      customStore.visible = true;
      checkCustomStatus();
    };
    var handleTableCustom = function() {
      $xetable.handleCustom();
    };
    var closeCustom = function() {
      var custom = props.custom;
      var customOpts = computeCustomOpts.value;
      if (customStore.visible) {
        customStore.visible = false;
        if (custom && !customOpts.immediate) {
          handleTableCustom();
        }
      }
    };
    var emitCustomEvent = function(type, evnt) {
      var comp = $xegrid || $xetable;
      comp.dispatchEvent("custom", { type }, evnt);
    };
    var confirmCustomEvent = function(evnt) {
      closeCustom();
      emitCustomEvent("confirm", evnt);
    };
    var customOpenEvent = function(evnt) {
      if (checkTable()) {
        if (!customStore.visible) {
          showCustom();
          emitCustomEvent("open", evnt);
        }
      }
    };
    var customColseEvent = function(evnt) {
      if (customStore.visible) {
        closeCustom();
        emitCustomEvent("close", evnt);
      }
    };
    var resetCustomEvent = function(evnt) {
      var columns = reactData.columns;
      var computeTableCustomOpts = $xetable.getComputeMaps().computeCustomOpts;
      var tableCustomOpts = computeTableCustomOpts.value;
      var checkMethod = tableCustomOpts.checkMethod;
      xeUtils.eachTree(columns, function(column) {
        if (!checkMethod || checkMethod({ column })) {
          column.visible = column.defaultVisible;
          column.halfVisible = false;
        }
        column.resizeWidth = 0;
      });
      $xetable.saveCustomResizable(true);
      closeCustom();
      emitCustomEvent("reset", evnt);
    };
    var handleOptionCheck = function(column) {
      var columns = reactData.columns;
      var matchObj = xeUtils.findTree(columns, function(item) {
        return item === column;
      });
      if (matchObj && matchObj.parent) {
        var parent_1 = matchObj.parent;
        if (parent_1.children && parent_1.children.length) {
          parent_1.visible = parent_1.children.every(function(column2) {
            return column2.visible;
          });
          parent_1.halfVisible = !parent_1.visible && parent_1.children.some(function(column2) {
            return column2.visible || column2.halfVisible;
          });
          handleOptionCheck(parent_1);
        }
      }
    };
    var changeCustomOption = function(column) {
      var isChecked = !column.visible;
      var customOpts = computeCustomOpts.value;
      xeUtils.eachTree([column], function(item) {
        item.visible = isChecked;
        item.halfVisible = false;
      });
      handleOptionCheck(column);
      if (props.custom && customOpts.immediate) {
        handleTableCustom();
      }
      checkCustomStatus();
    };
    var allCustomEvent = function() {
      var columns = reactData.columns;
      var computeTableCustomOpts = $xetable.getComputeMaps().computeCustomOpts;
      var tableCustomOpts = computeTableCustomOpts.value;
      var checkMethod = tableCustomOpts.checkMethod;
      var isAll = !customStore.isAll;
      xeUtils.eachTree(columns, function(column) {
        if (!checkMethod || checkMethod({ column })) {
          column.visible = isAll;
          column.halfVisible = false;
        }
      });
      customStore.isAll = isAll;
      checkCustomStatus();
    };
    var handleGlobalMousedownEvent = function(evnt) {
      var customWrapperElem = refCustomWrapper.value;
      if (!getEventTargetNode(evnt, customWrapperElem).flag) {
        customColseEvent(evnt);
      }
    };
    var handleGlobalBlurEvent = function(evnt) {
      customColseEvent(evnt);
    };
    var handleClickSettingEvent = function(evnt) {
      if (customStore.visible) {
        customColseEvent(evnt);
      } else {
        customOpenEvent(evnt);
      }
    };
    var handleMouseenterSettingEvent = function(evnt) {
      customStore.activeBtn = true;
      customOpenEvent(evnt);
    };
    var handleMouseleaveSettingEvent = function(evnt) {
      customStore.activeBtn = false;
      setTimeout(function() {
        if (!customStore.activeBtn && !customStore.activeWrapper) {
          customColseEvent(evnt);
        }
      }, 300);
    };
    var handleWrapperMouseenterEvent = function(evnt) {
      customStore.activeWrapper = true;
      customOpenEvent(evnt);
    };
    var handleWrapperMouseleaveEvent = function(evnt) {
      customStore.activeWrapper = false;
      setTimeout(function() {
        if (!customStore.activeBtn && !customStore.activeWrapper) {
          customColseEvent(evnt);
        }
      }, 300);
    };
    var refreshEvent = function() {
      var isRefresh = reactData.isRefresh;
      var refreshOpts = computeRefreshOpts.value;
      if (!isRefresh) {
        var query = refreshOpts.query;
        if (query) {
          reactData.isRefresh = true;
          try {
            Promise.resolve(query({})).catch(function(e) {
              return e;
            }).then(function() {
              reactData.isRefresh = false;
            });
          } catch (e) {
            reactData.isRefresh = false;
          }
        } else if ($xegrid) {
          reactData.isRefresh = true;
          $xegrid.commitProxy("reload").catch(function(e) {
            return e;
          }).then(function() {
            reactData.isRefresh = false;
          });
        }
      }
    };
    var zoomEvent = function(evnt) {
      if ($xegrid) {
        $xegrid.triggerZoomEvent(evnt);
      }
    };
    var btnEvent = function(evnt, item) {
      var code = item.code;
      if (code) {
        if ($xegrid) {
          $xegrid.triggerToolbarBtnEvent(item, evnt);
        } else {
          var commandMethod = VXETable.commands.get(code);
          var params = { code, button: item, $table: $xetable, $event: evnt };
          if (commandMethod) {
            commandMethod(params, evnt);
          }
          $xetoolbar.dispatchEvent("button-click", params, evnt);
        }
      }
    };
    var tolEvent = function(evnt, item) {
      var code = item.code;
      if (code) {
        if ($xegrid) {
          $xegrid.triggerToolbarTolEvent(item, evnt);
        } else {
          var commandMethod = VXETable.commands.get(code);
          var params = { code, tool: item, $table: $xetable, $event: evnt };
          if (commandMethod) {
            commandMethod(params, evnt);
          }
          $xetoolbar.dispatchEvent("tool-click", params, evnt);
        }
      }
    };
    var importEvent = function() {
      if (checkTable()) {
        $xetable.openImport();
      }
    };
    var exportEvent = function() {
      if (checkTable()) {
        $xetable.openExport();
      }
    };
    var printEvent = function() {
      if (checkTable()) {
        $xetable.openPrint();
      }
    };
    var renderDropdowns = function(item, isBtn) {
      var dropdowns = item.dropdowns;
      var downVNs = [];
      if (dropdowns) {
        return dropdowns.map(function(child, index) {
          if (child.visible === false) {
            return createCommentVNode();
          }
          return h(resolveComponent("vxe-button"), {
            key: index,
            disabled: child.disabled,
            loading: child.loading,
            type: child.type,
            icon: child.icon,
            circle: child.circle,
            round: child.round,
            status: child.status,
            content: child.name,
            onClick: function(evnt) {
              return isBtn ? btnEvent(evnt, child) : tolEvent(evnt, child);
            }
          });
        });
      }
      return downVNs;
    };
    var renderBtns = function() {
      var buttons = props.buttons;
      var buttonsSlot = slots.buttons;
      if (buttonsSlot) {
        return buttonsSlot({ $grid: $xegrid, $table: $xetable });
      }
      var btnVNs = [];
      if (buttons) {
        buttons.forEach(function(item) {
          var dropdowns = item.dropdowns, buttonRender = item.buttonRender;
          if (item.visible !== false) {
            var compConf = buttonRender ? VXETable.renderer.get(buttonRender.name) : null;
            if (buttonRender && compConf && compConf.renderToolbarButton) {
              btnVNs.push(h("span", {
                class: "vxe-button--item"
              }, compConf.renderToolbarButton(buttonRender, { $grid: $xegrid, $table: $xetable, button: item })));
            } else {
              btnVNs.push(h(resolveComponent("vxe-button"), {
                disabled: item.disabled,
                loading: item.loading,
                type: item.type,
                icon: item.icon,
                circle: item.circle,
                round: item.round,
                status: item.status,
                content: item.name,
                destroyOnClose: item.destroyOnClose,
                placement: item.placement,
                transfer: item.transfer,
                onClick: function(evnt) {
                  return btnEvent(evnt, item);
                }
              }, dropdowns && dropdowns.length ? {
                dropdowns: function() {
                  return renderDropdowns(item, true);
                }
              } : {}));
            }
          }
        });
      }
      return btnVNs;
    };
    var renderRightTools = function() {
      var tools = props.tools;
      var toolsSlot = slots.tools;
      if (toolsSlot) {
        return toolsSlot({ $grid: $xegrid, $table: $xetable });
      }
      var btnVNs = [];
      if (tools) {
        tools.forEach(function(item) {
          var dropdowns = item.dropdowns, toolRender = item.toolRender;
          if (item.visible !== false) {
            var compConf = toolRender ? VXETable.renderer.get(toolRender.name) : null;
            if (toolRender && compConf && compConf.renderToolbarTool) {
              btnVNs.push(h("span", {
                class: "vxe-tool--item"
              }, compConf.renderToolbarTool(toolRender, { $grid: $xegrid, $table: $xetable, tool: item })));
            } else {
              btnVNs.push(h(resolveComponent("vxe-button"), {
                disabled: item.disabled,
                loading: item.loading,
                type: item.type,
                icon: item.icon,
                circle: item.circle,
                round: item.round,
                status: item.status,
                content: item.name,
                destroyOnClose: item.destroyOnClose,
                placement: item.placement,
                transfer: item.transfer,
                onClick: function(evnt) {
                  return tolEvent(evnt, item);
                }
              }, dropdowns && dropdowns.length ? {
                dropdowns: function() {
                  return renderDropdowns(item, false);
                }
              } : {}));
            }
          }
        });
      }
      return btnVNs;
    };
    var renderCustoms = function() {
      var columns = reactData.columns;
      var customOpts = computeCustomOpts.value;
      var colVNs = [];
      var customBtnOns = {};
      var customWrapperOns = {};
      var checkMethod;
      if ($xetable) {
        var computeTableCustomOpts = $xetable.getComputeMaps().computeCustomOpts;
        var tableCustomOpts = computeTableCustomOpts.value;
        checkMethod = tableCustomOpts.checkMethod;
      }
      if (customOpts.trigger === "manual")
        ;
      else if (customOpts.trigger === "hover") {
        customBtnOns.onMouseenter = handleMouseenterSettingEvent;
        customBtnOns.onMouseleave = handleMouseleaveSettingEvent;
        customWrapperOns.onMouseenter = handleWrapperMouseenterEvent;
        customWrapperOns.onMouseleave = handleWrapperMouseleaveEvent;
      } else {
        customBtnOns.onClick = handleClickSettingEvent;
      }
      xeUtils.eachTree(columns, function(column) {
        var colTitle = formatText(column.getTitle(), 1);
        var colKey = column.getKey();
        var isColGroup = column.children && column.children.length;
        var isDisabled = checkMethod ? !checkMethod({ column }) : false;
        if (isColGroup || colKey) {
          colVNs.push(h("li", {
            class: ["vxe-custom--option", "level--" + column.level, {
              "is--group": isColGroup,
              "is--checked": column.visible,
              "is--indeterminate": column.halfVisible,
              "is--disabled": isDisabled
            }],
            title: colTitle,
            onClick: function() {
              if (!isDisabled) {
                changeCustomOption(column);
              }
            }
          }, [
            h("span", {
              class: "vxe-checkbox--icon vxe-checkbox--checked-icon"
            }),
            h("span", {
              class: "vxe-checkbox--icon vxe-checkbox--unchecked-icon"
            }),
            h("span", {
              class: "vxe-checkbox--icon vxe-checkbox--indeterminate-icon"
            }),
            h("span", {
              class: "vxe-checkbox--label"
            }, colTitle)
          ]));
        }
      });
      return h("div", {
        class: ["vxe-custom--wrapper", {
          "is--active": customStore.visible
        }],
        ref: refCustomWrapper
      }, [
        h(resolveComponent("vxe-button"), __assign$6({ circle: true, icon: customOpts.icon || GlobalConfig.icon.TOOLBAR_TOOLS_CUSTOM, title: GlobalConfig.i18n("vxe.toolbar.custom") }, customBtnOns)),
        h("div", {
          class: "vxe-custom--option-wrapper"
        }, [
          h("ul", {
            class: "vxe-custom--header"
          }, [
            h("li", {
              class: ["vxe-custom--option", {
                "is--checked": customStore.isAll,
                "is--indeterminate": customStore.isIndeterminate
              }],
              title: GlobalConfig.i18n("vxe.table.allTitle"),
              onClick: allCustomEvent
            }, [
              h("span", {
                class: "vxe-checkbox--icon vxe-checkbox--checked-icon"
              }),
              h("span", {
                class: "vxe-checkbox--icon vxe-checkbox--unchecked-icon"
              }),
              h("span", {
                class: "vxe-checkbox--icon vxe-checkbox--indeterminate-icon"
              }),
              h("span", {
                class: "vxe-checkbox--label"
              }, GlobalConfig.i18n("vxe.toolbar.customAll"))
            ])
          ]),
          h("ul", __assign$6({ class: "vxe-custom--body" }, customWrapperOns), colVNs),
          customOpts.isFooter === false ? null : h("div", {
            class: "vxe-custom--footer"
          }, [
            h("button", {
              class: "btn--confirm",
              onClick: confirmCustomEvent
            }, GlobalConfig.i18n("vxe.toolbar.customConfirm")),
            h("button", {
              class: "btn--reset",
              onClick: resetCustomEvent
            }, GlobalConfig.i18n("vxe.toolbar.customRestore"))
          ])
        ])
      ]);
    };
    toolbarMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $toolbar: $xetoolbar, $event: evnt }, params));
      },
      syncUpdate: function(params) {
        var collectColumn = params.collectColumn;
        $xetable = params.$table;
        reactData.columns = collectColumn;
      }
    };
    Object.assign($xetoolbar, toolbarMethods);
    onMounted(function() {
      GlobalEvent.on($xetoolbar, "mousedown", handleGlobalMousedownEvent);
      GlobalEvent.on($xetoolbar, "blur", handleGlobalBlurEvent);
    });
    onUnmounted(function() {
      GlobalEvent.off($xetoolbar, "mousedown");
      GlobalEvent.off($xetoolbar, "blur");
    });
    nextTick(function() {
      var refresh = props.refresh;
      var refreshOpts = computeRefreshOpts.value;
      if (refresh && !$xegrid && !refreshOpts.query) {
        warnLog("vxe.error.notFunc", ["query"]);
      }
    });
    var renderVN = function() {
      var _a;
      var perfect = props.perfect, loading = props.loading, refresh = props.refresh, zoom = props.zoom, custom = props.custom, className = props.className;
      var vSize = computeSize.value;
      var refreshOpts = computeRefreshOpts.value;
      var importOpts = computeImportOpts.value;
      var exportOpts = computeExportOpts.value;
      var printOpts = computePrintOpts.value;
      var zoomOpts = computeZoomOpts.value;
      return h("div", {
        ref: refElem,
        class: ["vxe-toolbar", className ? xeUtils.isFunction(className) ? className({ $toolbar: $xetoolbar }) : className : "", (_a = {}, _a["size--" + vSize] = vSize, _a["is--perfect"] = perfect, _a["is--loading"] = loading, _a)]
      }, [
        h("div", {
          class: "vxe-buttons--wrapper"
        }, renderBtns()),
        h("div", {
          class: "vxe-tools--wrapper"
        }, renderRightTools()),
        h("div", {
          class: "vxe-tools--operate"
        }, [
          props.import ? h(resolveComponent("vxe-button"), {
            circle: true,
            icon: importOpts.icon || GlobalConfig.icon.TOOLBAR_TOOLS_IMPORT,
            title: GlobalConfig.i18n("vxe.toolbar.import"),
            onClick: importEvent
          }) : createCommentVNode(),
          props.export ? h(resolveComponent("vxe-button"), {
            circle: true,
            icon: exportOpts.icon || GlobalConfig.icon.TOOLBAR_TOOLS_EXPORT,
            title: GlobalConfig.i18n("vxe.toolbar.export"),
            onClick: exportEvent
          }) : createCommentVNode(),
          props.print ? h(resolveComponent("vxe-button"), {
            circle: true,
            icon: printOpts.icon || GlobalConfig.icon.TOOLBAR_TOOLS_PRINT,
            title: GlobalConfig.i18n("vxe.toolbar.print"),
            onClick: printEvent
          }) : createCommentVNode(),
          refresh ? h(resolveComponent("vxe-button"), {
            circle: true,
            icon: reactData.isRefresh ? refreshOpts.iconLoading || GlobalConfig.icon.TOOLBAR_TOOLS_REFRESH_LOADING : refreshOpts.icon || GlobalConfig.icon.TOOLBAR_TOOLS_REFRESH,
            title: GlobalConfig.i18n("vxe.toolbar.refresh"),
            onClick: refreshEvent
          }) : createCommentVNode(),
          zoom && $xegrid ? h(resolveComponent("vxe-button"), {
            circle: true,
            icon: $xegrid.isMaximized() ? zoomOpts.iconOut || GlobalConfig.icon.TOOLBAR_TOOLS_ZOOM_OUT : zoomOpts.iconIn || GlobalConfig.icon.TOOLBAR_TOOLS_ZOOM_IN,
            title: GlobalConfig.i18n("vxe.toolbar.zoom" + ($xegrid.isMaximized() ? "Out" : "In")),
            onClick: zoomEvent
          }) : createCommentVNode(),
          custom ? renderCustoms() : createCommentVNode()
        ])
      ]);
    };
    $xetoolbar.renderVN = renderVN;
    return $xetoolbar;
  },
  render: function() {
    return this.renderVN();
  }
});
var Toolbar = Object.assign(VxeToolbarComponent, {
  install: function(app) {
    dynamicApp.component(VxeToolbarComponent.name, VxeToolbarComponent);
    app.component(VxeToolbarComponent.name, VxeToolbarComponent);
  }
});
var __assign$5 = function() {
  __assign$5 = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$5.apply(this, arguments);
};
var VxePagerComponent = defineComponent({
  name: "VxePager",
  props: {
    size: { type: String, default: function() {
      return GlobalConfig.pager.size || GlobalConfig.size;
    } },
    layouts: { type: Array, default: function() {
      return GlobalConfig.pager.layouts || ["PrevJump", "PrevPage", "Jump", "PageCount", "NextPage", "NextJump", "Sizes", "Total"];
    } },
    currentPage: { type: Number, default: 1 },
    loading: Boolean,
    pageSize: { type: Number, default: function() {
      return GlobalConfig.pager.pageSize || 10;
    } },
    total: { type: Number, default: 0 },
    pagerCount: { type: Number, default: function() {
      return GlobalConfig.pager.pagerCount || 7;
    } },
    pageSizes: { type: Array, default: function() {
      return GlobalConfig.pager.pageSizes || [10, 15, 20, 50, 100];
    } },
    align: { type: String, default: function() {
      return GlobalConfig.pager.align;
    } },
    border: { type: Boolean, default: function() {
      return GlobalConfig.pager.border;
    } },
    background: { type: Boolean, default: function() {
      return GlobalConfig.pager.background;
    } },
    perfect: { type: Boolean, default: function() {
      return GlobalConfig.pager.perfect;
    } },
    autoHidden: { type: Boolean, default: function() {
      return GlobalConfig.pager.autoHidden;
    } },
    transfer: { type: Boolean, default: function() {
      return GlobalConfig.pager.transfer;
    } },
    className: [String, Function],
    iconPrevPage: String,
    iconJumpPrev: String,
    iconJumpNext: String,
    iconNextPage: String,
    iconJumpMore: String
  },
  emits: [
    "update:pageSize",
    "update:currentPage",
    "page-change"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var $xegrid = inject("$xegrid", null);
    var refElem = ref();
    var refMaps = {
      refElem
    };
    var $xepager = {
      xID,
      props,
      context,
      getRefMaps: function() {
        return refMaps;
      }
    };
    var pagerMethods = {};
    var pagerPrivateMethods = {};
    var getPageCount = function(total, size) {
      return Math.max(Math.ceil(total / size), 1);
    };
    var computePageCount = computed(function() {
      return getPageCount(props.total, props.pageSize);
    });
    var jumpPageEvent = function(evnt, currentPage) {
      emit("update:currentPage", currentPage);
      if (evnt && currentPage !== props.currentPage) {
        pagerMethods.dispatchEvent("page-change", { type: "current", pageSize: props.pageSize, currentPage }, evnt);
      }
    };
    var changeCurrentPage = function(currentPage, evnt) {
      emit("update:currentPage", currentPage);
      if (evnt && currentPage !== props.currentPage) {
        pagerMethods.dispatchEvent("page-change", { type: "current", pageSize: props.pageSize, currentPage }, evnt);
      }
    };
    var triggerJumpEvent = function(evnt) {
      var inputElem = evnt.target;
      var inpValue = xeUtils.toNumber(inputElem.value);
      var pageCount = computePageCount.value;
      var current = inpValue <= 0 ? 1 : inpValue >= pageCount ? pageCount : inpValue;
      inputElem.value = xeUtils.toValueString(current);
      changeCurrentPage(current, evnt);
    };
    var computeNumList = computed(function() {
      var pagerCount = props.pagerCount;
      var pageCount = computePageCount.value;
      var len = pageCount > pagerCount ? pagerCount - 2 : pagerCount;
      var rest = [];
      for (var index = 0; index < len; index++) {
        rest.push(index);
      }
      return rest;
    });
    var computeOffsetNumber = computed(function() {
      return Math.floor((props.pagerCount - 2) / 2);
    });
    var computeSizeList = computed(function() {
      return props.pageSizes.map(function(item) {
        if (xeUtils.isNumber(item)) {
          return {
            value: item,
            label: "" + GlobalConfig.i18n("vxe.pager.pagesize", [item])
          };
        }
        return __assign$5({ value: "", label: "" }, item);
      });
    });
    var handlePrevPage = function(evnt) {
      var currentPage = props.currentPage;
      var pageCount = computePageCount.value;
      if (currentPage > 1) {
        changeCurrentPage(Math.min(pageCount, Math.max(currentPage - 1, 1)), evnt);
      }
    };
    var handleNextPage = function(evnt) {
      var currentPage = props.currentPage;
      var pageCount = computePageCount.value;
      if (currentPage < pageCount) {
        changeCurrentPage(Math.min(pageCount, currentPage + 1), evnt);
      }
    };
    var handlePrevJump = function(evnt) {
      var numList = computeNumList.value;
      changeCurrentPage(Math.max(props.currentPage - numList.length, 1), evnt);
    };
    var handleNextJump = function(evnt) {
      var pageCount = computePageCount.value;
      var numList = computeNumList.value;
      changeCurrentPage(Math.min(props.currentPage + numList.length, pageCount), evnt);
    };
    var pageSizeEvent = function(params) {
      var value = params.value;
      var pageSize = xeUtils.toNumber(value);
      emit("update:pageSize", pageSize);
      pagerMethods.dispatchEvent("page-change", { type: "size", pageSize, currentPage: Math.min(props.currentPage, getPageCount(props.total, pageSize)) });
    };
    var jumpKeydownEvent = function(evnt) {
      if (hasEventKey(evnt, EVENT_KEYS.ENTER)) {
        triggerJumpEvent(evnt);
      } else if (hasEventKey(evnt, EVENT_KEYS.ARROW_UP)) {
        evnt.preventDefault();
        handleNextPage(evnt);
      } else if (hasEventKey(evnt, EVENT_KEYS.ARROW_DOWN)) {
        evnt.preventDefault();
        handlePrevPage(evnt);
      }
    };
    var renderPrevPage = function() {
      return h("button", {
        class: ["vxe-pager--prev-btn", {
          "is--disabled": props.currentPage <= 1
        }],
        type: "button",
        title: GlobalConfig.i18n("vxe.pager.prevPage"),
        onClick: handlePrevPage
      }, [
        h("i", {
          class: ["vxe-pager--btn-icon", props.iconPrevPage || GlobalConfig.icon.PAGER_PREV_PAGE]
        })
      ]);
    };
    var renderPrevJump = function(tagName) {
      return h(tagName || "button", {
        class: ["vxe-pager--jump-prev", {
          "is--fixed": !tagName,
          "is--disabled": props.currentPage <= 1
        }],
        type: "button",
        title: GlobalConfig.i18n("vxe.pager.prevJump"),
        onClick: handlePrevJump
      }, [
        tagName ? h("i", {
          class: ["vxe-pager--jump-more-icon", props.iconJumpMore || GlobalConfig.icon.PAGER_JUMP_MORE]
        }) : null,
        h("i", {
          class: ["vxe-pager--jump-icon", props.iconJumpPrev || GlobalConfig.icon.PAGER_JUMP_PREV]
        })
      ]);
    };
    var renderNextJump = function(tagName) {
      var pageCount = computePageCount.value;
      return h(tagName || "button", {
        class: ["vxe-pager--jump-next", {
          "is--fixed": !tagName,
          "is--disabled": props.currentPage >= pageCount
        }],
        type: "button",
        title: GlobalConfig.i18n("vxe.pager.nextJump"),
        onClick: handleNextJump
      }, [
        tagName ? h("i", {
          class: ["vxe-pager--jump-more-icon", props.iconJumpMore || GlobalConfig.icon.PAGER_JUMP_MORE]
        }) : null,
        h("i", {
          class: ["vxe-pager--jump-icon", props.iconJumpNext || GlobalConfig.icon.PAGER_JUMP_NEXT]
        })
      ]);
    };
    var renderNextPage = function() {
      var pageCount = computePageCount.value;
      return h("button", {
        class: ["vxe-pager--next-btn", {
          "is--disabled": props.currentPage >= pageCount
        }],
        type: "button",
        title: GlobalConfig.i18n("vxe.pager.nextPage"),
        onClick: handleNextPage
      }, [
        h("i", {
          class: ["vxe-pager--btn-icon", props.iconNextPage || GlobalConfig.icon.PAGER_NEXT_PAGE]
        })
      ]);
    };
    var renderNumber = function(showJump) {
      var currentPage = props.currentPage, pagerCount = props.pagerCount;
      var nums = [];
      var pageCount = computePageCount.value;
      var numList = computeNumList.value;
      var offsetNumber = computeOffsetNumber.value;
      var isOv = pageCount > pagerCount;
      var isLt = isOv && currentPage > offsetNumber + 1;
      var isGt = isOv && currentPage < pageCount - offsetNumber;
      var startNumber = 1;
      if (isOv) {
        if (currentPage >= pageCount - offsetNumber) {
          startNumber = Math.max(pageCount - numList.length + 1, 1);
        } else {
          startNumber = Math.max(currentPage - offsetNumber, 1);
        }
      }
      if (showJump && isLt) {
        nums.push(h("button", {
          class: "vxe-pager--num-btn",
          type: "button",
          onClick: function(evnt) {
            return jumpPageEvent(evnt, 1);
          }
        }, 1), renderPrevJump("span"));
      }
      numList.forEach(function(item, index) {
        var number = startNumber + index;
        if (number <= pageCount) {
          nums.push(h("button", {
            key: number,
            class: ["vxe-pager--num-btn", {
              "is--active": currentPage === number
            }],
            type: "button",
            onClick: function(evnt) {
              return jumpPageEvent(evnt, number);
            }
          }, number));
        }
      });
      if (showJump && isGt) {
        nums.push(renderNextJump("button"), h("button", {
          class: "vxe-pager--num-btn",
          type: "button",
          onClick: function(evnt) {
            return jumpPageEvent(evnt, pageCount);
          }
        }, pageCount));
      }
      return h("span", {
        class: "vxe-pager--btn-wrapper"
      }, nums);
    };
    var renderJumpNumber = function() {
      return renderNumber(true);
    };
    var renderSizes = function() {
      var sizeList = computeSizeList.value;
      return h(resolveComponent("vxe-select"), {
        class: "vxe-pager--sizes",
        modelValue: props.pageSize,
        placement: "top",
        transfer: props.transfer,
        options: sizeList,
        onChange: pageSizeEvent
      });
    };
    var renderJump = function(isFull) {
      return h("span", {
        class: "vxe-pager--jump"
      }, [
        isFull ? h("span", {
          class: "vxe-pager--goto-text"
        }, GlobalConfig.i18n("vxe.pager.goto")) : null,
        h("input", {
          class: "vxe-pager--goto",
          value: props.currentPage,
          type: "text",
          autocomplete: "off",
          onKeydown: jumpKeydownEvent,
          onBlur: triggerJumpEvent
        }),
        isFull ? h("span", {
          class: "vxe-pager--classifier-text"
        }, GlobalConfig.i18n("vxe.pager.pageClassifier")) : null
      ]);
    };
    var renderFullJump = function() {
      return renderJump(true);
    };
    var renderPageCount = function() {
      var pageCount = computePageCount.value;
      return h("span", {
        class: "vxe-pager--count"
      }, [
        h("span", {
          class: "vxe-pager--separator"
        }),
        h("span", pageCount)
      ]);
    };
    var renderTotal = function() {
      return h("span", {
        class: "vxe-pager--total"
      }, GlobalConfig.i18n("vxe.pager.total", [props.total]));
    };
    pagerMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $pager: $xepager, $event: evnt }, params));
      },
      prevPage: function() {
        handlePrevPage();
        return nextTick();
      },
      nextPage: function() {
        handleNextPage();
        return nextTick();
      },
      prevJump: function() {
        handlePrevJump();
        return nextTick();
      },
      nextJump: function() {
        handleNextJump();
        return nextTick();
      }
    };
    pagerPrivateMethods = {
      handlePrevPage,
      handleNextPage,
      handlePrevJump,
      handleNextJump
    };
    Object.assign($xepager, pagerMethods, pagerPrivateMethods);
    var renderVN = function() {
      var _a;
      var align = props.align, layouts = props.layouts, className = props.className;
      var childNodes = [];
      var vSize = computeSize.value;
      var pageCount = computePageCount.value;
      if (slots.left) {
        childNodes.push(h("span", {
          class: "vxe-pager--left-wrapper"
        }, slots.left({ $grid: $xegrid })));
      }
      layouts.forEach(function(name) {
        var renderFn;
        switch (name) {
          case "PrevPage":
            renderFn = renderPrevPage;
            break;
          case "PrevJump":
            renderFn = renderPrevJump;
            break;
          case "Number":
            renderFn = renderNumber;
            break;
          case "JumpNumber":
            renderFn = renderJumpNumber;
            break;
          case "NextJump":
            renderFn = renderNextJump;
            break;
          case "NextPage":
            renderFn = renderNextPage;
            break;
          case "Sizes":
            renderFn = renderSizes;
            break;
          case "FullJump":
            renderFn = renderFullJump;
            break;
          case "Jump":
            renderFn = renderJump;
            break;
          case "PageCount":
            renderFn = renderPageCount;
            break;
          case "Total":
            renderFn = renderTotal;
            break;
        }
        if (renderFn) {
          childNodes.push(renderFn());
        }
      });
      if (slots.right) {
        childNodes.push(h("span", {
          class: "vxe-pager--right-wrapper"
        }, slots.right({ $grid: $xegrid })));
      }
      return h("div", {
        ref: refElem,
        class: ["vxe-pager", className ? xeUtils.isFunction(className) ? className({ $pager: $xepager }) : className : "", (_a = {}, _a["size--" + vSize] = vSize, _a["align--" + align] = align, _a["is--border"] = props.border, _a["is--background"] = props.background, _a["is--perfect"] = props.perfect, _a["is--hidden"] = props.autoHidden && pageCount === 1, _a["is--loading"] = props.loading, _a)]
      }, [
        h("div", {
          class: "vxe-pager--wrapper"
        }, childNodes)
      ]);
    };
    $xepager.renderVN = renderVN;
    return $xepager;
  },
  render: function() {
    return this.renderVN();
  }
});
var Pager = Object.assign(VxePagerComponent, {
  install: function(app) {
    dynamicApp.component(VxePagerComponent.name, VxePagerComponent);
    app.component(VxePagerComponent.name, VxePagerComponent);
  }
});
var ItemInfo = function() {
  function ItemInfo2($xeform, item) {
    Object.assign(this, {
      id: xeUtils.uniqueId("item_"),
      title: item.title,
      field: item.field,
      span: item.span,
      align: item.align,
      titleAlign: item.titleAlign,
      titleWidth: item.titleWidth,
      titlePrefix: item.titlePrefix,
      titleSuffix: item.titleSuffix,
      titleOverflow: item.titleOverflow,
      resetValue: item.resetValue,
      visibleMethod: item.visibleMethod,
      visible: item.visible,
      folding: item.folding,
      collapseNode: item.collapseNode,
      className: item.className,
      itemRender: item.itemRender,
      showError: false,
      errRule: null,
      slots: item.slots,
      children: []
    });
  }
  ItemInfo2.prototype.update = function(name, value) {
    this[name] = value;
  };
  return ItemInfo2;
}();
function isFormItem(item) {
  return item instanceof ItemInfo;
}
function createItem($xeform, _vm) {
  return isFormItem(_vm) ? _vm : new ItemInfo($xeform, _vm);
}
function watchItem(props, formItem) {
  Object.keys(props).forEach(function(name) {
    watch(function() {
      return props[name];
    }, function(value) {
      formItem.update(name, value);
    });
  });
}
function assemItem($xeform, el, formItem, formGather) {
  var reactData = $xeform.reactData;
  var staticItems = reactData.staticItems;
  var parentElem = el.parentNode;
  var parentItem = formGather ? formGather.formItem : null;
  var parentItems = parentItem ? parentItem.children : staticItems;
  if (parentElem) {
    parentItems.splice(xeUtils.arrayIndexOf(parentElem.children, el), 0, formItem);
    reactData.staticItems = staticItems.slice(0);
  }
}
function destroyItem($xeform, formItem) {
  var reactData = $xeform.reactData;
  var staticItems = reactData.staticItems;
  var index = xeUtils.findIndexOf(staticItems, function(item) {
    return item.id === formItem.id;
  });
  if (index > -1) {
    staticItems.splice(index, 1);
  }
  reactData.staticItems = staticItems.slice(0);
}
function renderPrefixIcon(titlePrefix) {
  return h("span", {
    class: "vxe-form--item-title-prefix"
  }, [
    h("i", {
      class: titlePrefix.icon || GlobalConfig.icon.FORM_PREFIX
    })
  ]);
}
function renderSuffixIcon(titleSuffix) {
  return h("span", {
    class: "vxe-form--item-title-suffix"
  }, [
    h("i", {
      class: titleSuffix.icon || GlobalConfig.icon.FORM_SUFFIX
    })
  ]);
}
function renderTitle($xeform, item) {
  var data = $xeform.props.data;
  var slots = item.slots, field = item.field, itemRender = item.itemRender, titlePrefix = item.titlePrefix, titleSuffix = item.titleSuffix;
  var compConf = isEnableConf(itemRender) ? VXETable.renderer.get(itemRender.name) : null;
  var params = { data, property: field, item, $form: $xeform };
  var titleSlot = slots ? slots.title : null;
  var contVNs = [];
  var titVNs = [];
  if (titlePrefix) {
    titVNs.push(titlePrefix.message ? h(resolveComponent("vxe-tooltip"), {
      content: getFuncText(titlePrefix.message),
      enterable: titlePrefix.enterable,
      theme: titlePrefix.theme
    }, {
      default: function() {
        return renderPrefixIcon(titlePrefix);
      }
    }) : renderPrefixIcon(titlePrefix));
  }
  titVNs.push(h("span", {
    class: "vxe-form--item-title-label"
  }, compConf && compConf.renderItemTitle ? compConf.renderItemTitle(itemRender, params) : titleSlot ? $xeform.callSlot(titleSlot, params) : getFuncText(item.title)));
  contVNs.push(h("div", {
    class: "vxe-form--item-title-content"
  }, titVNs));
  var fixVNs = [];
  if (titleSuffix) {
    fixVNs.push(titleSuffix.message ? h(resolveComponent("vxe-tooltip"), {
      content: getFuncText(titleSuffix.message),
      enterable: titleSuffix.enterable,
      theme: titleSuffix.theme
    }, {
      default: function() {
        return renderSuffixIcon(titleSuffix);
      }
    }) : renderSuffixIcon(titleSuffix));
  }
  contVNs.push(h("div", {
    class: "vxe-form--item-title-postfix"
  }, fixVNs));
  return contVNs;
}
var __assign$4 = function() {
  __assign$4 = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$4.apply(this, arguments);
};
var Rule = function() {
  function Rule2(rule) {
    Object.assign(this, {
      $options: rule,
      required: rule.required,
      min: rule.min,
      max: rule.min,
      type: rule.type,
      pattern: rule.pattern,
      validator: rule.validator,
      trigger: rule.trigger,
      maxWidth: rule.maxWidth
    });
  }
  Object.defineProperty(Rule2.prototype, "message", {
    get: function() {
      return getFuncText(this.$options.message);
    },
    enumerable: false,
    configurable: true
  });
  return Rule2;
}();
var validErrorRuleValue = function(rule, val) {
  var type = rule.type, min = rule.min, max = rule.max, pattern = rule.pattern;
  var isNumType = type === "number";
  var numVal = isNumType ? xeUtils.toNumber(val) : xeUtils.getSize(val);
  if (isNumType && isNaN(val)) {
    return true;
  }
  if (!xeUtils.eqNull(min) && numVal < xeUtils.toNumber(min)) {
    return true;
  }
  if (!xeUtils.eqNull(max) && numVal > xeUtils.toNumber(max)) {
    return true;
  }
  if (pattern && !(xeUtils.isRegExp(pattern) ? pattern : new RegExp(pattern)).test(val)) {
    return true;
  }
  return false;
};
function getResetValue(value, resetValue) {
  if (xeUtils.isArray(value)) {
    resetValue = [];
  }
  return resetValue;
}
var VxeFormComponent = defineComponent({
  name: "VxeForm",
  props: {
    collapseStatus: { type: Boolean, default: true },
    loading: Boolean,
    data: Object,
    size: { type: String, default: function() {
      return GlobalConfig.form.size || GlobalConfig.size;
    } },
    span: [String, Number],
    align: { type: String, default: function() {
      return GlobalConfig.form.align;
    } },
    titleAlign: { type: String, default: function() {
      return GlobalConfig.form.titleAlign;
    } },
    titleWidth: [String, Number],
    titleColon: { type: Boolean, default: function() {
      return GlobalConfig.form.titleColon;
    } },
    titleAsterisk: { type: Boolean, default: function() {
      return GlobalConfig.form.titleAsterisk;
    } },
    titleOverflow: { type: [Boolean, String], default: null },
    className: [String, Function],
    items: Array,
    rules: Object,
    preventSubmit: { type: Boolean, default: function() {
      return GlobalConfig.form.preventSubmit;
    } },
    validConfig: Object,
    tooltipConfig: Object,
    customLayout: { type: Boolean, default: function() {
      return GlobalConfig.form.customLayout;
    } }
  },
  emits: [
    "update:collapseStatus",
    "collapse",
    "toggle-collapse",
    "submit",
    "submit-invalid",
    "reset"
  ],
  setup: function(props, context) {
    var hasUseTooltip = VXETable.tooltip;
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var reactData = reactive({
      collapseAll: props.collapseStatus,
      staticItems: [],
      formItems: []
    });
    var internalData = reactive({
      tooltipTimeout: null,
      tooltipActive: false,
      tooltipStore: {
        item: null,
        visible: false
      }
    });
    var refElem = ref();
    var refTooltip = ref();
    var formMethods = {};
    var computeValidOpts = computed(function() {
      return Object.assign({}, GlobalConfig.form.validConfig, props.validConfig);
    });
    var computeTooltipOpts = ref();
    var handleTooltipLeaveMethod = function() {
      var tooltipOpts = computeTooltipOpts.value;
      setTimeout(function() {
        if (!internalData.tooltipActive) {
          formMethods.closeTooltip();
        }
      }, tooltipOpts.leaveDelay);
      return false;
    };
    computeTooltipOpts = computed(function() {
      var opts = Object.assign({ leaveDelay: 300 }, GlobalConfig.form.tooltipConfig, props.tooltipConfig);
      if (opts.enterable) {
        opts.leaveMethod = handleTooltipLeaveMethod;
      }
      return opts;
    });
    var refMaps = {
      refElem
    };
    var computeMaps = {
      computeSize,
      computeValidOpts,
      computeTooltipOpts
    };
    var $xeform = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: function() {
        return refMaps;
      },
      getComputeMaps: function() {
        return computeMaps;
      }
    };
    var callSlot = function(slotFunc, params) {
      if (slotFunc) {
        if (xeUtils.isString(slotFunc)) {
          slotFunc = slots[slotFunc] || null;
        }
        if (xeUtils.isFunction(slotFunc)) {
          return slotFunc(params);
        }
      }
      return [];
    };
    var loadItem = function(list) {
      if (list.length) {
        reactData.staticItems = xeUtils.mapTree(list, function(item) {
          return createItem($xeform, item);
        }, { children: "children" });
      }
      return nextTick();
    };
    var getItems = function() {
      var itemList = [];
      xeUtils.eachTree(reactData.formItems, function(item) {
        itemList.push(item);
      }, { children: "children" });
      return itemList;
    };
    var getCollapseStatus = function() {
      return reactData.collapseAll;
    };
    var toggleCollapse = function() {
      var status = !getCollapseStatus();
      reactData.collapseAll = status;
      emit("update:collapseStatus", status);
      return nextTick();
    };
    var toggleCollapseEvent = function(evnt) {
      toggleCollapse();
      var status = getCollapseStatus();
      formMethods.dispatchEvent("toggle-collapse", { status, collapse: status, data: props.data }, evnt);
      formMethods.dispatchEvent("collapse", { status, collapse: status, data: props.data }, evnt);
    };
    var clearValidate = function(field) {
      var itemList = getItems();
      if (field) {
        var item = itemList.find(function(item2) {
          return item2.field === field;
        });
        if (item) {
          item.showError = false;
        }
      } else {
        itemList.forEach(function(item2) {
          item2.showError = false;
        });
      }
      return nextTick();
    };
    var reset = function() {
      var data = props.data;
      var itemList = getItems();
      if (data) {
        itemList.forEach(function(item) {
          var field = item.field, resetValue = item.resetValue, itemRender = item.itemRender;
          if (isEnableConf(itemRender)) {
            var compConf = VXETable.renderer.get(itemRender.name);
            if (compConf && compConf.itemResetMethod) {
              compConf.itemResetMethod({ data, property: field, item, $form: $xeform });
            } else if (field) {
              xeUtils.set(data, field, resetValue === null ? getResetValue(xeUtils.get(data, field), void 0) : resetValue);
            }
          }
        });
      }
      return clearValidate();
    };
    var resetEvent = function(evnt) {
      evnt.preventDefault();
      reset();
      formMethods.dispatchEvent("reset", { data: props.data }, evnt);
    };
    var handleFocus = function(fields) {
      var itemList = getItems();
      var el = refElem.value;
      fields.some(function(property, index) {
        var item = itemList.find(function(item2) {
          return item2.field === property;
        });
        if (item && isEnableConf(item.itemRender)) {
          var itemRender = item.itemRender;
          var compConf = VXETable.renderer.get(itemRender.name);
          var inputElem = null;
          if (!index) {
            scrollToView(el.querySelector("." + item.id));
          }
          if (itemRender.autofocus) {
            inputElem = el.querySelector("." + item.id + " " + itemRender.autofocus);
          }
          if (!inputElem && compConf && compConf.autofocus) {
            inputElem = el.querySelector("." + item.id + " " + compConf.autofocus);
          }
          if (inputElem) {
            inputElem.focus();
            return true;
          }
        }
      });
    };
    var validItemRules = function(validType, property, val) {
      var data = props.data, formRules = props.rules;
      var errorRules = [];
      var syncVailds = [];
      if (property && formRules) {
        var rules_1 = xeUtils.get(formRules, property);
        if (rules_1) {
          var itemValue_1 = xeUtils.isUndefined(val) ? xeUtils.get(data, property) : val;
          rules_1.forEach(function(rule) {
            var type = rule.type, trigger = rule.trigger, required = rule.required;
            if (validType === "all" || !trigger || validType === trigger) {
              if (xeUtils.isFunction(rule.validator)) {
                var customValid = rule.validator({
                  itemValue: itemValue_1,
                  rule,
                  rules: rules_1,
                  data,
                  property,
                  $form: $xeform
                });
                if (customValid) {
                  if (xeUtils.isError(customValid)) {
                    errorRules.push(new Rule({ type: "custom", trigger, message: customValid.message, rule: new Rule(rule) }));
                  } else if (customValid.catch) {
                    syncVailds.push(customValid.catch(function(e) {
                      errorRules.push(new Rule({ type: "custom", trigger, message: e ? e.message : rule.message, rule: new Rule(rule) }));
                    }));
                  }
                }
              } else {
                var isArrType = type === "array";
                var hasEmpty = isArrType ? !xeUtils.isArray(itemValue_1) || !itemValue_1.length : eqEmptyValue(itemValue_1);
                if (required ? hasEmpty || validErrorRuleValue(rule, itemValue_1) : !hasEmpty && validErrorRuleValue(rule, itemValue_1)) {
                  errorRules.push(new Rule(rule));
                }
              }
            }
          });
        }
      }
      return Promise.all(syncVailds).then(function() {
        if (errorRules.length) {
          var rest = { rules: errorRules, rule: errorRules[0] };
          return Promise.reject(rest);
        }
      });
    };
    var showErrTime;
    var beginValidate = function(itemList, type, callback) {
      var data = props.data, formRules = props.rules;
      var validOpts = computeValidOpts.value;
      var validRest = {};
      var validFields = [];
      var itemValids = [];
      clearValidate();
      clearTimeout(showErrTime);
      if (data && formRules) {
        itemList.forEach(function(item) {
          var field = item.field;
          if (field) {
            itemValids.push(validItemRules(type || "all", field).then(function() {
              item.errRule = null;
            }).catch(function(_a) {
              var rule = _a.rule, rules = _a.rules;
              var rest = { rule, rules, data, property: field, $form: $xeform };
              if (!validRest[field]) {
                validRest[field] = [];
              }
              validRest[field].push(rest);
              validFields.push(field);
              item.errRule = rule;
              return Promise.reject(rest);
            }));
          }
        });
        return Promise.all(itemValids).then(function() {
          if (callback) {
            callback();
          }
        }).catch(function() {
          return new Promise(function(resolve, reject) {
            showErrTime = window.setTimeout(function() {
              itemList.forEach(function(item) {
                if (item.errRule) {
                  item.showError = true;
                }
              });
            }, 20);
            if (validOpts.autoPos !== false) {
              nextTick(function() {
                handleFocus(validFields);
              });
            }
            if (callback) {
              callback(validRest);
              resolve();
            } else {
              reject(validRest);
            }
          });
        });
      }
      if (callback) {
        callback();
      }
      return Promise.resolve();
    };
    var validate = function(callback) {
      return beginValidate(getItems(), "", callback);
    };
    var validateField = function(field, callback) {
      return beginValidate(getItems().filter(function(item) {
        return item.field === field;
      }), "", callback);
    };
    var submitEvent = function(evnt) {
      evnt.preventDefault();
      if (!props.preventSubmit) {
        beginValidate(getItems()).then(function() {
          formMethods.dispatchEvent("submit", { data: props.data }, evnt);
        }).catch(function(errMap) {
          formMethods.dispatchEvent("submit-invalid", { data: props.data, errMap }, evnt);
        });
      }
    };
    var closeTooltip = function() {
      var tooltipStore = internalData.tooltipStore;
      var $tooltip = refTooltip.value;
      if (tooltipStore.visible) {
        Object.assign(tooltipStore, {
          item: null,
          visible: false
        });
        if ($tooltip) {
          $tooltip.close();
        }
      }
      return nextTick();
    };
    var triggerHeaderHelpEvent = function(evnt, params) {
      var item = params.item;
      var tooltipStore = internalData.tooltipStore;
      var $tooltip = refTooltip.value;
      var overflowElem = evnt.currentTarget.children[0];
      var content = (overflowElem.textContent || "").trim();
      var isCellOverflow = overflowElem.scrollWidth > overflowElem.clientWidth;
      clearTimeout(internalData.tooltipTimeout);
      internalData.tooltipActive = true;
      closeTooltip();
      if (content && isCellOverflow) {
        Object.assign(tooltipStore, {
          item,
          visible: true
        });
        if ($tooltip) {
          $tooltip.open(overflowElem, content);
        }
      }
    };
    var handleTargetLeaveEvent = function() {
      var tooltipOpts = computeTooltipOpts.value;
      internalData.tooltipActive = false;
      if (tooltipOpts.enterable) {
        internalData.tooltipTimeout = setTimeout(function() {
          var $tooltip = refTooltip.value;
          if ($tooltip && !$tooltip.reactData.isHover) {
            closeTooltip();
          }
        }, tooltipOpts.leaveDelay);
      } else {
        closeTooltip();
      }
    };
    var updateStatus = function(scope, itemValue) {
      var property = scope.property;
      if (property) {
        validItemRules("change", property, itemValue).then(function() {
          clearValidate(property);
        }).catch(function(_a) {
          var rule = _a.rule;
          var itemList = getItems();
          var item = itemList.find(function(item2) {
            return item2.field === property;
          });
          if (item) {
            item.showError = true;
            item.errRule = rule;
          }
        });
      }
    };
    var renderItems = function(itemList) {
      var data = props.data, rules = props.rules, allTitleOverflow = props.titleOverflow;
      var collapseAll = reactData.collapseAll;
      var validOpts = computeValidOpts.value;
      return itemList.map(function(item, index) {
        var slots2 = item.slots, title = item.title, visible = item.visible, folding = item.folding, visibleMethod = item.visibleMethod, field = item.field, collapseNode = item.collapseNode, itemRender = item.itemRender, showError = item.showError, errRule = item.errRule, className = item.className, titleOverflow = item.titleOverflow, children = item.children;
        var compConf = isEnableConf(itemRender) ? VXETable.renderer.get(itemRender.name) : null;
        var defaultSlot = slots2 ? slots2.default : null;
        var titleSlot = slots2 ? slots2.title : null;
        var span = item.span || props.span;
        var align = item.align || props.align;
        var titleAlign = item.titleAlign || props.titleAlign;
        var titleWidth = item.titleWidth || props.titleWidth;
        var itemOverflow = xeUtils.isUndefined(titleOverflow) || xeUtils.isNull(titleOverflow) ? allTitleOverflow : titleOverflow;
        var showEllipsis = itemOverflow === "ellipsis";
        var showTitle = itemOverflow === "title";
        var showTooltip = itemOverflow === true || itemOverflow === "tooltip";
        var hasEllipsis = showTitle || showTooltip || showEllipsis;
        var itemVisibleMethod = visibleMethod;
        var params = { data, property: field, item, $form: $xeform };
        if (visible === false) {
          return createCommentVNode();
        }
        var isRequired = false;
        if (rules) {
          var itemRules = rules[field];
          if (itemRules) {
            isRequired = itemRules.some(function(rule) {
              return rule.required;
            });
          }
        }
        var isGather = children && children.length > 0;
        if (isGather) {
          var childVNs = renderItems(item.children);
          return childVNs.length ? h("div", {
            class: ["vxe-form--gather vxe-row", item.id, span ? "vxe-col--" + span + " is--span" : "", className ? xeUtils.isFunction(className) ? className(params) : className : ""]
          }, childVNs) : createCommentVNode();
        }
        if (!itemVisibleMethod && compConf && compConf.itemVisibleMethod) {
          itemVisibleMethod = compConf.itemVisibleMethod;
        }
        var contentVNs = [];
        if (defaultSlot) {
          contentVNs = callSlot(defaultSlot, params);
        } else if (compConf && compConf.renderItemContent) {
          contentVNs = compConf.renderItemContent(itemRender, params);
        } else if (field) {
          contentVNs = ["" + xeUtils.get(data, field)];
        }
        if (collapseNode) {
          contentVNs.push(h("div", {
            class: "vxe-form--item-trigger-node",
            onClick: toggleCollapseEvent
          }, [
            h("span", {
              class: "vxe-form--item-trigger-text"
            }, collapseAll ? GlobalConfig.i18n("vxe.form.unfolding") : GlobalConfig.i18n("vxe.form.folding")),
            h("i", {
              class: ["vxe-form--item-trigger-icon", collapseAll ? GlobalConfig.icon.FORM_FOLDING : GlobalConfig.icon.FORM_UNFOLDING]
            })
          ]));
        }
        if (errRule && validOpts.showMessage) {
          contentVNs.push(h("div", {
            class: "vxe-form--item-valid",
            style: errRule.maxWidth ? {
              width: errRule.maxWidth + "px"
            } : null
          }, errRule.message));
        }
        var ons = showTooltip ? {
          onMouseenter: function(evnt) {
            triggerHeaderHelpEvent(evnt, params);
          },
          onMouseleave: handleTargetLeaveEvent
        } : {};
        return h("div", {
          class: ["vxe-form--item", item.id, span ? "vxe-col--" + span + " is--span" : "", className ? xeUtils.isFunction(className) ? className(params) : className : "", {
            "is--title": title,
            "is--required": isRequired,
            "is--hidden": folding && collapseAll,
            "is--active": !itemVisibleMethod || itemVisibleMethod(params),
            "is--error": showError
          }],
          key: index
        }, [
          h("div", {
            class: "vxe-form--item-inner"
          }, [
            title || titleSlot ? h("div", __assign$4({ class: ["vxe-form--item-title", titleAlign ? "align--" + titleAlign : null, {
              "is--ellipsis": hasEllipsis
            }], style: titleWidth ? {
              width: isNaN(titleWidth) ? titleWidth : titleWidth + "px"
            } : null, title: showTitle ? getFuncText(title) : null }, ons), renderTitle($xeform, item)) : null,
            h("div", {
              class: ["vxe-form--item-content", align ? "align--" + align : null]
            }, contentVNs)
          ])
        ]);
      });
    };
    formMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $form: $xeform, $event: evnt }, params));
      },
      reset,
      validate,
      validateField,
      clearValidate,
      updateStatus,
      toggleCollapse,
      getItems,
      closeTooltip
    };
    var formPrivateMethods = {
      callSlot,
      toggleCollapseEvent,
      triggerHeaderHelpEvent,
      handleTargetLeaveEvent
    };
    Object.assign($xeform, formMethods, formPrivateMethods);
    watch(function() {
      return reactData.staticItems;
    }, function(value) {
      reactData.formItems = value;
    });
    watch(function() {
      return props.items;
    }, function(value) {
      loadItem(value || []);
    });
    watch(function() {
      return props.collapseStatus;
    }, function(value) {
      reactData.collapseAll = !!value;
    });
    onMounted(function() {
      nextTick(function() {
        loadItem(props.items || []);
      });
    });
    var renderVN = function() {
      var _a;
      var loading = props.loading, className = props.className, data = props.data, titleColon = props.titleColon, titleAsterisk = props.titleAsterisk, customLayout = props.customLayout;
      var formItems = reactData.formItems;
      var vSize = computeSize.value;
      var tooltipOpts = computeTooltipOpts.value;
      var defaultSlot = slots.default;
      return h("form", {
        ref: refElem,
        class: ["vxe-form", className ? xeUtils.isFunction(className) ? className({ items: formItems, data, $form: $xeform }) : className : "", (_a = {}, _a["size--" + vSize] = vSize, _a["is--colon"] = titleColon, _a["is--asterisk"] = titleAsterisk, _a["is--loading"] = loading, _a)],
        onSubmit: submitEvent,
        onReset: resetEvent
      }, [
        h("div", {
          class: "vxe-form--wrapper vxe-row"
        }, customLayout ? defaultSlot ? defaultSlot({}) : [] : renderItems(formItems)),
        h("div", {
          class: "vxe-form-slots",
          ref: "hideItem"
        }, customLayout ? [] : defaultSlot ? defaultSlot({}) : []),
        h("div", {
          class: ["vxe-loading", {
            "is--visible": loading
          }]
        }, [
          h("div", {
            class: "vxe-loading--spinner"
          })
        ]),
        hasUseTooltip ? h(resolveComponent("vxe-tooltip"), __assign$4({ ref: refTooltip }, tooltipOpts)) : createCommentVNode()
      ]);
    };
    $xeform.renderVN = renderVN;
    provide("$xeform", $xeform);
    return $xeform;
  },
  render: function() {
    return this.renderVN();
  }
});
var Form = Object.assign(VxeFormComponent, {
  install: function(app) {
    dynamicApp.component(VxeFormComponent.name, VxeFormComponent);
    app.component(VxeFormComponent.name, VxeFormComponent);
  }
});
var __assign$3 = function() {
  __assign$3 = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$3.apply(this, arguments);
};
var formItemProps = {
  title: String,
  field: String,
  span: [String, Number],
  align: String,
  titleAlign: String,
  titleWidth: [String, Number],
  className: [String, Function],
  titleOverflow: { type: [Boolean, String], default: null },
  titlePrefix: Object,
  titleSuffix: Object,
  resetValue: { default: null },
  visibleMethod: Function,
  visible: { type: Boolean, default: null },
  folding: Boolean,
  collapseNode: Boolean,
  itemRender: Object
};
var VxeFormItemComponent = defineComponent({
  name: "VxeFormItem",
  props: formItemProps,
  setup: function(props, _a) {
    var slots = _a.slots;
    var refElem = ref();
    var $xeform = inject("$xeform", {});
    var formGather = inject("xeformgather", null);
    var formItem = createItem($xeform, props);
    formItem.slots = slots;
    watchItem(props, formItem);
    onMounted(function() {
      assemItem($xeform, refElem.value, formItem, formGather);
    });
    onUnmounted(function() {
      destroyItem($xeform, formItem);
    });
    var renderItem = function($xeform2, item) {
      var props2 = $xeform2.props, reactData = $xeform2.reactData;
      var data = props2.data, rules = props2.rules, allTitleOverflow = props2.titleOverflow;
      var collapseAll = reactData.collapseAll;
      var computeValidOpts = $xeform2.getComputeMaps().computeValidOpts;
      var validOpts = computeValidOpts.value;
      var slots2 = item.slots, title = item.title, visible = item.visible, folding = item.folding, visibleMethod = item.visibleMethod, field = item.field, collapseNode = item.collapseNode, itemRender = item.itemRender, showError = item.showError, errRule = item.errRule, className = item.className, titleOverflow = item.titleOverflow;
      var compConf = isEnableConf(itemRender) ? VXETable.renderer.get(itemRender.name) : null;
      var defaultSlot = slots2 ? slots2.default : null;
      var titleSlot = slots2 ? slots2.title : null;
      var span = item.span || props2.span;
      var align = item.align || props2.align;
      var titleAlign = item.titleAlign || props2.titleAlign;
      var titleWidth = item.titleWidth || props2.titleWidth;
      var itemOverflow = xeUtils.isUndefined(titleOverflow) || xeUtils.isNull(titleOverflow) ? allTitleOverflow : titleOverflow;
      var showEllipsis = itemOverflow === "ellipsis";
      var showTitle = itemOverflow === "title";
      var showTooltip = itemOverflow === true || itemOverflow === "tooltip";
      var hasEllipsis = showTitle || showTooltip || showEllipsis;
      var itemVisibleMethod = visibleMethod;
      var params = { data, property: field, item, $form: $xeform2 };
      var isRequired = false;
      if (rules) {
        var itemRules = rules[field];
        if (itemRules) {
          isRequired = itemRules.some(function(rule) {
            return rule.required;
          });
        }
      }
      if (!itemVisibleMethod && compConf && compConf.itemVisibleMethod) {
        itemVisibleMethod = compConf.itemVisibleMethod;
      }
      var contentVNs = [];
      if (defaultSlot) {
        contentVNs = $xeform2.callSlot(defaultSlot, params);
      } else if (compConf && compConf.renderItemContent) {
        contentVNs = compConf.renderItemContent(itemRender, params);
      } else if (field) {
        contentVNs = ["" + xeUtils.get(data, field)];
      }
      if (collapseNode) {
        contentVNs.push(h("div", {
          class: "vxe-form--item-trigger-node",
          onClick: $xeform2.toggleCollapseEvent
        }, [
          h("span", {
            class: "vxe-form--item-trigger-text"
          }, collapseAll ? GlobalConfig.i18n("vxe.form.unfolding") : GlobalConfig.i18n("vxe.form.folding")),
          h("i", {
            class: ["vxe-form--item-trigger-icon", collapseAll ? GlobalConfig.icon.FORM_FOLDING : GlobalConfig.icon.FORM_UNFOLDING]
          })
        ]));
      }
      if (errRule && validOpts.showMessage) {
        contentVNs.push(h("div", {
          class: "vxe-form--item-valid",
          style: errRule.maxWidth ? {
            width: errRule.maxWidth + "px"
          } : null
        }, errRule.message));
      }
      var ons = showTooltip ? {
        onMouseenter: function(evnt) {
          $xeform2.triggerHeaderHelpEvent(evnt, params);
        },
        onMouseleave: $xeform2.handleTargetLeaveEvent
      } : {};
      return h("div", {
        ref: refElem,
        class: ["vxe-form--item", item.id, span ? "vxe-col--" + span + " is--span" : "", className ? xeUtils.isFunction(className) ? className(params) : className : "", {
          "is--title": title,
          "is--required": isRequired,
          "is--hidden": visible === false || folding && collapseAll,
          "is--active": !itemVisibleMethod || itemVisibleMethod(params),
          "is--error": showError
        }]
      }, [
        h("div", {
          class: "vxe-form--item-inner"
        }, [
          title || titleSlot ? h("div", __assign$3({ class: ["vxe-form--item-title", titleAlign ? "align--" + titleAlign : null, {
            "is--ellipsis": hasEllipsis
          }], style: titleWidth ? {
            width: isNaN(titleWidth) ? titleWidth : titleWidth + "px"
          } : null, title: showTitle ? getFuncText(title) : null }, ons), renderTitle($xeform2, item)) : null,
          h("div", {
            class: ["vxe-form--item-content", align ? "align--" + align : null]
          }, contentVNs)
        ])
      ]);
    };
    var renderVN = function() {
      var formProps = $xeform ? $xeform.props : null;
      return formProps && formProps.customLayout ? renderItem($xeform, formItem) : h("div", {
        ref: refElem
      });
    };
    return renderVN;
  }
});
var FormItem = Object.assign(VxeFormItemComponent, {
  install: function(app) {
    dynamicApp.component(VxeFormItemComponent.name, VxeFormItemComponent);
    app.component(VxeFormItemComponent.name, VxeFormItemComponent);
  }
});
var VxeFormGatherComponent = defineComponent({
  name: "VxeFormGather",
  props: formItemProps,
  setup: function(props, _a) {
    var slots = _a.slots;
    var refElem = ref();
    var $xeform = inject("$xeform", {});
    var formGather = inject("xeformgather", null);
    var defaultSlot = slots.default;
    var formItem = createItem($xeform, props);
    var xeformitem = { formItem };
    formItem.children = [];
    provide("xeformgather", xeformitem);
    watchItem(props, formItem);
    onMounted(function() {
      assemItem($xeform, refElem.value, formItem, formGather);
    });
    onUnmounted(function() {
      destroyItem($xeform, formItem);
    });
    var renderVN = function() {
      return h("div", {
        ref: refElem
      }, defaultSlot ? defaultSlot() : []);
    };
    return renderVN;
  }
});
var FormGather = Object.assign(VxeFormGatherComponent, {
  install: function(app) {
    dynamicApp.component(VxeFormGatherComponent.name, VxeFormGatherComponent);
    app.component(VxeFormGatherComponent.name, VxeFormGatherComponent);
  }
});
var Checkbox = Object.assign(VxeCheckboxComponent, {
  install: function(app) {
    dynamicApp.component(VxeCheckboxComponent.name, VxeCheckboxComponent);
    app.component(VxeCheckboxComponent.name, VxeCheckboxComponent);
  }
});
var VxeCheckboxGroupComponent = defineComponent({
  name: "VxeCheckboxGroup",
  props: {
    modelValue: Array,
    disabled: Boolean,
    size: { type: String, default: function() {
      return GlobalConfig.checkbox.size || GlobalConfig.size;
    } }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var $xecheckboxgroup = {
      xID,
      props,
      context
    };
    useSize(props);
    var checkboxGroupMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $checkboxGroup: $xecheckboxgroup, $event: evnt }, params));
      }
    };
    var checkboxGroupPrivateMethods = {
      handleChecked: function(params, evnt) {
        var checked = params.checked, label = params.label;
        var checklist = props.modelValue || [];
        var checkIndex = checklist.indexOf(label);
        if (checked) {
          if (checkIndex === -1) {
            checklist.push(label);
          }
        } else {
          checklist.splice(checkIndex, 1);
        }
        emit("update:modelValue", checklist);
        $xecheckboxgroup.dispatchEvent("change", Object.assign({ checklist }, params), evnt);
      }
    };
    Object.assign($xecheckboxgroup, checkboxGroupMethods, checkboxGroupPrivateMethods);
    var renderVN = function() {
      return h("div", {
        class: "vxe-checkbox-group"
      }, slots.default ? slots.default({}) : []);
    };
    $xecheckboxgroup.renderVN = renderVN;
    provide("$xecheckboxgroup", $xecheckboxgroup);
    return renderVN;
  }
});
var CheckboxGroup = Object.assign(VxeCheckboxGroupComponent, {
  install: function(app) {
    dynamicApp.component(VxeCheckboxGroupComponent.name, VxeCheckboxGroupComponent);
    app.component(VxeCheckboxGroupComponent.name, VxeCheckboxGroupComponent);
  }
});
var Radio = Object.assign(VxeRadioComponent, {
  install: function(app) {
    dynamicApp.component(VxeRadioComponent.name, VxeRadioComponent);
    app.component(VxeRadioComponent.name, VxeRadioComponent);
  }
});
var RadioGroup = Object.assign(VxeRadioGroupComponent, {
  install: function(app) {
    dynamicApp.component(VxeRadioGroupComponent.name, VxeRadioGroupComponent);
    app.component(VxeRadioGroupComponent.name, VxeRadioGroupComponent);
  }
});
var VxeRadioButtonComponent = defineComponent({
  name: "VxeRadioButton",
  props: {
    modelValue: [String, Number, Boolean],
    label: { type: [String, Number, Boolean], default: null },
    title: [String, Number],
    content: [String, Number],
    disabled: Boolean,
    size: { type: String, default: function() {
      return GlobalConfig.radio.size || GlobalConfig.size;
    } }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var $xeradiobutton = {
      xID,
      props,
      context
    };
    var radioButtonMethods = {};
    var $xeradiogroup = inject("$xeradiogroup", null);
    var computeDisabled = computed(function() {
      return props.disabled || $xeradiogroup && $xeradiogroup.props.disabled;
    });
    var computeName = computed(function() {
      return $xeradiogroup ? $xeradiogroup.name : null;
    });
    var computeChecked = computed(function() {
      var modelValue = props.modelValue, label = props.label;
      return $xeradiogroup ? $xeradiogroup.props.modelValue === label : modelValue === label;
    });
    radioButtonMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $radioButton: $xeradiobutton, $event: evnt }, params));
      }
    };
    Object.assign($xeradiobutton, radioButtonMethods);
    var changeEvent = function(evnt) {
      var label = props.label;
      var isDisabled = computeDisabled.value;
      if (!isDisabled) {
        if ($xeradiogroup) {
          $xeradiogroup.handleChecked({ label }, evnt);
        } else {
          emit("update:modelValue", label);
          radioButtonMethods.dispatchEvent("change", { label }, evnt);
        }
      }
    };
    var renderVN = function() {
      var _a;
      var vSize = computeSize.value;
      var isDisabled = computeDisabled.value;
      var name = computeName.value;
      var checked = computeChecked.value;
      return h("label", {
        class: ["vxe-radio", "vxe-radio-button", (_a = {}, _a["size--" + vSize] = vSize, _a["is--disabled"] = isDisabled, _a)],
        title: props.title
      }, [
        h("input", {
          class: "vxe-radio--input",
          type: "radio",
          name,
          checked,
          disabled: isDisabled,
          onChange: changeEvent
        }),
        h("span", {
          class: "vxe-radio--label"
        }, slots.default ? slots.default({}) : getFuncText(props.content))
      ]);
    };
    Object.assign($xeradiobutton, {
      renderVN,
      dispatchEvent
    });
    return renderVN;
  }
});
var RadioButton = Object.assign(VxeRadioButtonComponent, {
  install: function(app) {
    dynamicApp.component(VxeRadioButtonComponent.name, VxeRadioButtonComponent);
    app.component(VxeRadioButtonComponent.name, VxeRadioButtonComponent);
  }
});
var VxeSwitchComponent = defineComponent({
  name: "VxeSwitch",
  props: {
    modelValue: [String, Number, Boolean],
    disabled: Boolean,
    size: { type: String, default: function() {
      return GlobalConfig.switch.size || GlobalConfig.size;
    } },
    openLabel: String,
    closeLabel: String,
    openValue: { type: [String, Number, Boolean], default: true },
    closeValue: { type: [String, Number, Boolean], default: false },
    openIcon: String,
    closeIcon: String
  },
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur"
  ],
  setup: function(props, context) {
    var emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var reactData = reactive({
      isActivated: false,
      hasAnimat: false,
      offsetLeft: 0
    });
    var $xeswitch = {
      xID,
      props,
      context,
      reactData
    };
    var refButton = ref();
    var switchMethods = {};
    var computeOnShowLabel = computed(function() {
      return getFuncText(props.openLabel);
    });
    var computeOffShowLabel = computed(function() {
      return getFuncText(props.closeLabel);
    });
    var computeIsChecked = computed(function() {
      return props.modelValue === props.openValue;
    });
    var _atimeout;
    var clickEvent = function(evnt) {
      if (!props.disabled) {
        var isChecked = computeIsChecked.value;
        clearTimeout(_atimeout);
        var value = isChecked ? props.closeValue : props.openValue;
        reactData.hasAnimat = true;
        emit("update:modelValue", value);
        switchMethods.dispatchEvent("change", { value }, evnt);
        _atimeout = setTimeout(function() {
          reactData.hasAnimat = false;
        }, 400);
      }
    };
    var focusEvent = function(evnt) {
      reactData.isActivated = true;
      switchMethods.dispatchEvent("focus", { value: props.modelValue }, evnt);
    };
    var blurEvent = function(evnt) {
      reactData.isActivated = false;
      switchMethods.dispatchEvent("blur", { value: props.modelValue }, evnt);
    };
    switchMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $switch: $xeswitch, $event: evnt }, params));
      },
      focus: function() {
        var btnElem = refButton.value;
        reactData.isActivated = true;
        btnElem.focus();
        return nextTick();
      },
      blur: function() {
        var btnElem = refButton.value;
        btnElem.blur();
        reactData.isActivated = false;
        return nextTick();
      }
    };
    Object.assign($xeswitch, switchMethods);
    var renderVN = function() {
      var _a;
      var disabled = props.disabled, openIcon = props.openIcon, closeIcon = props.closeIcon;
      var isChecked = computeIsChecked.value;
      var vSize = computeSize.value;
      var onShowLabel = computeOnShowLabel.value;
      var offShowLabel = computeOffShowLabel.value;
      return h("div", {
        class: ["vxe-switch", isChecked ? "is--on" : "is--off", (_a = {}, _a["size--" + vSize] = vSize, _a["is--disabled"] = disabled, _a["is--animat"] = reactData.hasAnimat, _a)]
      }, [
        h("button", {
          ref: refButton,
          class: "vxe-switch--button",
          type: "button",
          disabled,
          onClick: clickEvent,
          onFocus: focusEvent,
          onBlur: blurEvent
        }, [
          h("span", {
            class: "vxe-switch--label vxe-switch--label-on"
          }, [
            openIcon ? h("i", {
              class: ["vxe-switch--label-icon", openIcon]
            }) : createCommentVNode(),
            onShowLabel
          ]),
          h("span", {
            class: "vxe-switch--label vxe-switch--label-off"
          }, [
            closeIcon ? h("i", {
              class: ["vxe-switch--label-icon", closeIcon]
            }) : createCommentVNode(),
            offShowLabel
          ]),
          h("span", {
            class: "vxe-switch--icon"
          })
        ])
      ]);
    };
    $xeswitch.renderVN = renderVN;
    return $xeswitch;
  },
  render: function() {
    return this.renderVN();
  }
});
var Switch = Object.assign(VxeSwitchComponent, {
  install: function(app) {
    dynamicApp.component(VxeSwitchComponent.name, VxeSwitchComponent);
    app.component(VxeSwitchComponent.name, VxeSwitchComponent);
  }
});
var Input = Object.assign(VxeInputConstructor, {
  install: function(app) {
    dynamicApp.component(VxeInputConstructor.name, VxeInputConstructor);
    app.component(VxeInputConstructor.name, VxeInputConstructor);
  }
});
var Select = Object.assign(VxeSelectComponent, {
  install: function(app) {
    dynamicApp.component(VxeSelectComponent.name, VxeSelectComponent);
    app.component(VxeSelectComponent.name, VxeSelectComponent);
  }
});
var OptionInfo = function() {
  function OptionInfo2($xeselect, _vm) {
    Object.assign(this, {
      id: xeUtils.uniqueId("option_"),
      value: _vm.value,
      label: _vm.label,
      visible: _vm.visible,
      className: _vm.className,
      disabled: _vm.disabled
    });
  }
  OptionInfo2.prototype.update = function(name, value) {
    this[name] = value;
  };
  return OptionInfo2;
}();
function isOption(option) {
  return option instanceof OptionInfo;
}
function createOption($xeselect, _vm) {
  return isOption(_vm) ? _vm : new OptionInfo($xeselect, _vm);
}
function watchOption(props, option) {
  Object.keys(props).forEach(function(name) {
    watch(function() {
      return props[name];
    }, function(value) {
      option.update(name, value);
    });
  });
}
function assemOption($xeselect, el, option, optgroup) {
  var reactData = $xeselect.reactData;
  var staticOptions = reactData.staticOptions;
  var parentElem = el.parentNode;
  var parentOption = optgroup ? optgroup.option : null;
  var parentCols = parentOption ? parentOption.options : staticOptions;
  if (parentElem && parentCols) {
    parentCols.splice(xeUtils.arrayIndexOf(parentElem.children, el), 0, option);
    reactData.staticOptions = staticOptions.slice(0);
  }
}
function destroyOption($xeselect, option) {
  var reactData = $xeselect.reactData;
  var staticOptions = reactData.staticOptions;
  var matchObj = xeUtils.findTree(staticOptions, function(item) {
    return item.id === option.id;
  }, { children: "options" });
  if (matchObj) {
    matchObj.items.splice(matchObj.index, 1);
  }
  reactData.staticOptions = staticOptions.slice(0);
}
var VxeOptgroupComponent = defineComponent({
  name: "VxeOptgroup",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    visible: { type: Boolean, default: null },
    className: [String, Function],
    disabled: Boolean
  },
  setup: function(props, _a) {
    var slots = _a.slots;
    var elem = ref();
    var $xeselect = inject("$xeselect", {});
    var option = createOption($xeselect, props);
    var xeoption = { option };
    option.options = [];
    provide("xeoptgroup", xeoption);
    watchOption(props, option);
    onMounted(function() {
      assemOption($xeselect, elem.value, option);
    });
    onUnmounted(function() {
      destroyOption($xeselect, option);
    });
    return function() {
      return h("div", {
        ref: elem
      }, slots.default ? slots.default() : []);
    };
  }
});
var Optgroup = Object.assign(VxeOptgroupComponent, {
  install: function(app) {
    dynamicApp.component(VxeOptgroupComponent.name, VxeOptgroupComponent);
    app.component(VxeOptgroupComponent.name, VxeOptgroupComponent);
  }
});
var VxeOptionComponent = defineComponent({
  name: "VxeOption",
  props: {
    value: null,
    label: { type: [String, Number, Boolean], default: "" },
    visible: { type: Boolean, default: null },
    className: [String, Function],
    disabled: Boolean
  },
  setup: function(props, _a) {
    var slots = _a.slots;
    var elem = ref();
    var $xeselect = inject("$xeselect", {});
    var optgroup = inject("xeoptgroup", null);
    var option = createOption($xeselect, props);
    option.slots = slots;
    watchOption(props, option);
    onMounted(function() {
      assemOption($xeselect, elem.value, option, optgroup);
    });
    onUnmounted(function() {
      destroyOption($xeselect, option);
    });
    return function() {
      return h("div", {
        ref: elem
      });
    };
  }
});
var Option = Object.assign(VxeOptionComponent, {
  install: function(app) {
    dynamicApp.component(VxeOptionComponent.name, VxeOptionComponent);
    app.component(VxeOptionComponent.name, VxeOptionComponent);
  }
});
var autoTxtElem;
var VxeTextareaComponent = defineComponent({
  name: "VxeTextarea",
  props: {
    modelValue: [String, Number],
    className: String,
    immediate: { type: Boolean, default: true },
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    placeholder: String,
    maxlength: [String, Number],
    rows: { type: [String, Number], default: 2 },
    cols: { type: [String, Number], default: null },
    showWordCount: Boolean,
    countMethod: Function,
    autosize: [Boolean, Object],
    form: String,
    resize: { type: String, default: function() {
      return GlobalConfig.textarea.resize;
    } },
    size: { type: String, default: function() {
      return GlobalConfig.textarea.size || GlobalConfig.size;
    } }
  },
  emits: [
    "update:modelValue",
    "input",
    "keydown",
    "keyup",
    "click",
    "change",
    "focus",
    "blur"
  ],
  setup: function(props, context) {
    var emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var reactData = reactive({
      inputValue: props.modelValue
    });
    var refElem = ref();
    var refTextarea = ref();
    var refMaps = {
      refElem,
      refTextarea
    };
    var $xetextarea = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: function() {
        return refMaps;
      }
    };
    var textareaMethods = {};
    var computeInputCount = computed(function() {
      return xeUtils.getSize(reactData.inputValue);
    });
    var computeIsCountError = computed(function() {
      var inputCount = computeInputCount.value;
      return props.maxlength && inputCount > xeUtils.toNumber(props.maxlength);
    });
    var computeSizeOpts = computed(function() {
      return Object.assign({ minRows: 1, maxRows: 10 }, GlobalConfig.textarea.autosize, props.autosize);
    });
    var updateAutoTxt = function() {
      var size = props.size, autosize = props.autosize;
      var inputValue = reactData.inputValue;
      if (autosize) {
        if (!autoTxtElem) {
          autoTxtElem = document.createElement("div");
        }
        if (!autoTxtElem.parentNode) {
          document.body.appendChild(autoTxtElem);
        }
        var textElem = refTextarea.value;
        var textStyle = getComputedStyle(textElem);
        autoTxtElem.className = ["vxe-textarea--autosize", size ? "size--" + size : ""].join(" ");
        autoTxtElem.style.width = textElem.clientWidth + "px";
        autoTxtElem.style.padding = textStyle.padding;
        autoTxtElem.innerHTML = ("" + (inputValue || "\u3000")).replace(/\n$/, "\n\u3000");
      }
    };
    var handleResize = function() {
      if (props.autosize) {
        nextTick(function() {
          var sizeOpts = computeSizeOpts.value;
          var minRows = sizeOpts.minRows, maxRows = sizeOpts.maxRows;
          var textElem = refTextarea.value;
          var sizeHeight = autoTxtElem.clientHeight;
          var textStyle = getComputedStyle(textElem);
          var lineHeight = xeUtils.toNumber(textStyle.lineHeight);
          var paddingTop = xeUtils.toNumber(textStyle.paddingTop);
          var paddingBottom = xeUtils.toNumber(textStyle.paddingBottom);
          var borderTopWidth = xeUtils.toNumber(textStyle.borderTopWidth);
          var borderBottomWidth = xeUtils.toNumber(textStyle.borderBottomWidth);
          var intervalHeight = paddingTop + paddingBottom + borderTopWidth + borderBottomWidth;
          var rowNum = (sizeHeight - intervalHeight) / lineHeight;
          var textRows = rowNum && /[0-9]/.test("" + rowNum) ? rowNum : Math.floor(rowNum) + 1;
          var vaildRows = textRows;
          if (textRows < minRows) {
            vaildRows = minRows;
          } else if (textRows > maxRows) {
            vaildRows = maxRows;
          }
          textElem.style.height = vaildRows * lineHeight + intervalHeight + "px";
        });
      }
    };
    var triggerEvent2 = function(evnt) {
      var value = reactData.inputValue;
      $xetextarea.dispatchEvent(evnt.type, { value }, evnt);
    };
    var emitUpdate = function(value, evnt) {
      reactData.inputValue = value;
      emit("update:modelValue", value);
      if (xeUtils.toValueString(props.modelValue) !== value) {
        textareaMethods.dispatchEvent("change", { value }, evnt);
      }
    };
    var inputEvent = function(evnt) {
      var immediate = props.immediate;
      var textElem = evnt.target;
      var value = textElem.value;
      reactData.inputValue = value;
      if (immediate) {
        emitUpdate(value, evnt);
      }
      $xetextarea.dispatchEvent("input", { value }, evnt);
      handleResize();
    };
    var changeEvent = function(evnt) {
      var immediate = props.immediate;
      if (immediate) {
        triggerEvent2(evnt);
      } else {
        emitUpdate(reactData.inputValue, evnt);
      }
    };
    var blurEvent = function(evnt) {
      var immediate = props.immediate;
      var inputValue = reactData.inputValue;
      if (!immediate) {
        emitUpdate(inputValue, evnt);
      }
      $xetextarea.dispatchEvent("blur", { value: inputValue }, evnt);
    };
    textareaMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $textarea: $xetextarea, $event: evnt }, params));
      },
      focus: function() {
        var textElem = refTextarea.value;
        textElem.focus();
        return nextTick();
      },
      blur: function() {
        var textElem = refTextarea.value;
        textElem.blur();
        return nextTick();
      }
    };
    Object.assign($xetextarea, textareaMethods);
    watch(function() {
      return props.modelValue;
    }, function(val) {
      reactData.inputValue = val;
      updateAutoTxt();
    });
    nextTick(function() {
      var autosize = props.autosize;
      if (autosize) {
        updateAutoTxt();
        handleResize();
      }
    });
    var renderVN = function() {
      var _a;
      var className = props.className, resize = props.resize, placeholder = props.placeholder, disabled = props.disabled, maxlength = props.maxlength, autosize = props.autosize, showWordCount = props.showWordCount, countMethod = props.countMethod, rows = props.rows, cols = props.cols;
      var inputValue = reactData.inputValue;
      var vSize = computeSize.value;
      var isCountError = computeIsCountError.value;
      var inputCount = computeInputCount.value;
      return h("div", {
        ref: refElem,
        class: ["vxe-textarea", className, (_a = {}, _a["size--" + vSize] = vSize, _a["is--autosize"] = autosize, _a["is--disabled"] = disabled, _a["def--rows"] = !xeUtils.eqNull(rows), _a["def--cols"] = !xeUtils.eqNull(cols), _a)]
      }, [
        h("textarea", {
          ref: refTextarea,
          class: "vxe-textarea--inner",
          value: inputValue,
          name: props.name,
          placeholder: placeholder ? getFuncText(placeholder) : null,
          maxlength,
          readonly: props.readonly,
          disabled,
          rows,
          cols,
          style: resize ? {
            resize
          } : null,
          onInput: inputEvent,
          onChange: changeEvent,
          onKeydown: triggerEvent2,
          onKeyup: triggerEvent2,
          onClick: triggerEvent2,
          onFocus: triggerEvent2,
          onBlur: blurEvent
        }),
        showWordCount ? h("span", {
          class: ["vxe-textarea--count", {
            "is--error": isCountError
          }]
        }, countMethod ? "" + countMethod({ value: inputValue }) : "" + inputCount + (maxlength ? "/" + maxlength : "")) : null
      ]);
    };
    $xetextarea.renderVN = renderVN;
    return $xetextarea;
  },
  render: function() {
    return this.renderVN();
  }
});
var Textarea = Object.assign(VxeTextareaComponent, {
  install: function(app) {
    dynamicApp.component(VxeTextareaComponent.name, VxeTextareaComponent);
    app.component(VxeTextareaComponent.name, VxeTextareaComponent);
  }
});
var Button = Object.assign(VxeButtonComponent, {
  install: function(app) {
    dynamicApp.component(VxeButtonComponent.name, VxeButtonComponent);
    app.component(VxeButtonComponent.name, VxeButtonComponent);
  }
});
var __assign$2 = function() {
  __assign$2 = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$2.apply(this, arguments);
};
function openModal(options) {
  checkDynamic();
  return new Promise(function(resolve) {
    if (options && options.id && allActivedModals.some(function(comp) {
      return comp.props.id === options.id;
    })) {
      resolve("exist");
    } else {
      var _onHide_1 = options.onHide;
      var modalOpts_1 = Object.assign(options, {
        key: xeUtils.uniqueId(),
        modelValue: true,
        onHide: function(params) {
          var modalList = dynamicStore.modals;
          if (_onHide_1) {
            _onHide_1(params);
          }
          dynamicStore.modals = modalList.filter(function(item) {
            return item.key !== modalOpts_1.key;
          });
          resolve(params.type);
        }
      });
      dynamicStore.modals.push(modalOpts_1);
    }
  });
}
function getModal(id) {
  return xeUtils.find(allActivedModals, function($modal) {
    return $modal.props.id === id;
  });
}
function closeModal(id) {
  var modals = id ? [getModal(id)] : allActivedModals;
  var restPromises = [];
  modals.forEach(function($modal) {
    if ($modal) {
      restPromises.push($modal.close());
    }
  });
  return Promise.all(restPromises);
}
function handleOpen(defOpts, content, title, options) {
  var opts;
  if (xeUtils.isObject(content)) {
    opts = content;
  } else {
    opts = { content: xeUtils.toValueString(content), title };
  }
  return openModal(__assign$2(__assign$2(__assign$2({}, defOpts), options), opts));
}
function openAlert(content, title, options) {
  return handleOpen({
    type: "alert",
    showFooter: true
  }, content, title, options);
}
function openConfirm(content, title, options) {
  return handleOpen({
    type: "confirm",
    status: "question",
    showFooter: true
  }, content, title, options);
}
function openMessage(content, options) {
  return handleOpen({
    type: "message",
    mask: false,
    lockView: false,
    showHeader: false
  }, content, "", options);
}
var ModalController = {
  get: getModal,
  close: closeModal,
  open: openModal,
  alert: openAlert,
  confirm: openConfirm,
  message: openMessage
};
var Modal = Object.assign(VxeModalComponent, {
  install: function(app) {
    dynamicApp.component(VxeModalComponent.name, VxeModalComponent);
    app.component(VxeModalComponent.name, VxeModalComponent);
    VXETable.modal = ModalController;
  }
});
var resizeTimeout;
var eventStore = [];
var defaultInterval = 500;
function eventHandle() {
  if (eventStore.length) {
    eventStore.forEach(function(item) {
      item.tarList.forEach(function(observer) {
        var target = observer.target, width = observer.width, heighe = observer.heighe;
        var clientWidth = target.clientWidth;
        var clientHeight = target.clientHeight;
        var rWidth = clientWidth && width !== clientWidth;
        var rHeight = clientHeight && heighe !== clientHeight;
        if (rWidth || rHeight) {
          observer.width = clientWidth;
          observer.heighe = clientHeight;
          setTimeout(item.callback);
        }
      });
    });
    eventListener();
  }
}
function eventListener() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(eventHandle, GlobalConfig.resizeInterval || defaultInterval);
}
var XEResizeObserver = function() {
  function XEResizeObserver2(callback) {
    this.tarList = [];
    this.callback = callback;
  }
  XEResizeObserver2.prototype.observe = function(target) {
    var _this = this;
    if (target) {
      var tarList = this.tarList;
      if (!tarList.some(function(observer) {
        return observer.target === target;
      })) {
        tarList.push({
          target,
          width: target.clientWidth,
          heighe: target.clientHeight
        });
      }
      if (!eventStore.length) {
        eventListener();
      }
      if (!eventStore.some(function(item) {
        return item === _this;
      })) {
        eventStore.push(this);
      }
    }
  };
  XEResizeObserver2.prototype.unobserve = function(target) {
    xeUtils.remove(eventStore, function(item) {
      return item.tarList.some(function(observer) {
        return observer.target === target;
      });
    });
  };
  XEResizeObserver2.prototype.disconnect = function() {
    var _this = this;
    xeUtils.remove(eventStore, function(item) {
      return item === _this;
    });
  };
  return XEResizeObserver2;
}();
function createResizeEvent(callback) {
  if (window.ResizeObserver) {
    return new window.ResizeObserver(callback);
  }
  return new XEResizeObserver(callback);
}
var VxeListComponent = defineComponent({
  name: "VxeList",
  props: {
    data: Array,
    height: [Number, String],
    maxHeight: [Number, String],
    loading: Boolean,
    className: [String, Function],
    size: { type: String, default: function() {
      return GlobalConfig.list.size || GlobalConfig.size;
    } },
    autoResize: { type: Boolean, default: function() {
      return GlobalConfig.list.autoResize;
    } },
    syncResize: [Boolean, String, Number],
    scrollY: Object
  },
  emits: [
    "scroll"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var reactData = reactive({
      scrollYLoad: false,
      bodyHeight: 0,
      rowHeight: 0,
      topSpaceHeight: 0,
      items: []
    });
    var refElem = ref();
    var refVirtualWrapper = ref();
    var refVirtualBody = ref();
    var internalData = {
      fullData: [],
      lastScrollLeft: 0,
      lastScrollTop: 0,
      scrollYStore: {
        startIndex: 0,
        endIndex: 0,
        visibleSize: 0,
        offsetSize: 0,
        rowHeight: 0
      }
    };
    var refMaps = {
      refElem
    };
    var $xelist = {
      xID,
      props,
      context,
      reactData,
      internalData,
      getRefMaps: function() {
        return refMaps;
      }
    };
    var listMethods = {};
    var computeSYOpts = computed(function() {
      return Object.assign({}, GlobalConfig.list.scrollY, props.scrollY);
    });
    var computeStyles = computed(function() {
      var height = props.height, maxHeight = props.maxHeight;
      var style2 = {};
      if (height) {
        style2.height = "" + (isNaN(height) ? height : height + "px");
      } else if (maxHeight) {
        style2.height = "auto";
        style2.maxHeight = "" + (isNaN(maxHeight) ? maxHeight : maxHeight + "px");
      }
      return style2;
    });
    var updateYSpace = function() {
      var scrollYLoad = reactData.scrollYLoad;
      var scrollYStore = internalData.scrollYStore, fullData = internalData.fullData;
      reactData.bodyHeight = scrollYLoad ? fullData.length * scrollYStore.rowHeight : 0;
      reactData.topSpaceHeight = scrollYLoad ? Math.max(scrollYStore.startIndex * scrollYStore.rowHeight, 0) : 0;
    };
    var handleData = function() {
      var scrollYLoad = reactData.scrollYLoad;
      var fullData = internalData.fullData, scrollYStore = internalData.scrollYStore;
      reactData.items = scrollYLoad ? fullData.slice(scrollYStore.startIndex, scrollYStore.endIndex) : fullData.slice(0);
      return nextTick();
    };
    var updateYData = function() {
      handleData();
      updateYSpace();
    };
    var computeScrollLoad = function() {
      return nextTick().then(function() {
        var scrollYLoad = reactData.scrollYLoad;
        var scrollYStore = internalData.scrollYStore;
        var virtualBodyElem = refVirtualBody.value;
        var sYOpts = computeSYOpts.value;
        var rowHeight = 0;
        var firstItemElem;
        if (virtualBodyElem) {
          if (sYOpts.sItem) {
            firstItemElem = virtualBodyElem.querySelector(sYOpts.sItem);
          }
          if (!firstItemElem) {
            firstItemElem = virtualBodyElem.children[0];
          }
        }
        if (firstItemElem) {
          rowHeight = firstItemElem.offsetHeight;
        }
        rowHeight = Math.max(20, rowHeight);
        scrollYStore.rowHeight = rowHeight;
        if (scrollYLoad) {
          var scrollBodyElem = refVirtualWrapper.value;
          var visibleYSize = Math.max(8, Math.ceil(scrollBodyElem.clientHeight / rowHeight));
          var offsetYSize = sYOpts.oSize ? xeUtils.toNumber(sYOpts.oSize) : browse.edge ? 10 : 0;
          scrollYStore.offsetSize = offsetYSize;
          scrollYStore.visibleSize = visibleYSize;
          scrollYStore.endIndex = Math.max(scrollYStore.startIndex, visibleYSize + offsetYSize, scrollYStore.endIndex);
          updateYData();
        } else {
          updateYSpace();
        }
        reactData.rowHeight = rowHeight;
      });
    };
    var clearScroll = function() {
      var scrollBodyElem = refVirtualWrapper.value;
      if (scrollBodyElem) {
        scrollBodyElem.scrollTop = 0;
      }
      return nextTick();
    };
    var scrollTo = function(scrollLeft, scrollTop) {
      var scrollBodyElem = refVirtualWrapper.value;
      if (xeUtils.isNumber(scrollLeft)) {
        scrollBodyElem.scrollLeft = scrollLeft;
      }
      if (xeUtils.isNumber(scrollTop)) {
        scrollBodyElem.scrollTop = scrollTop;
      }
      if (reactData.scrollYLoad) {
        return new Promise(function(resolve) {
          return setTimeout(function() {
            return resolve(nextTick());
          }, 50);
        });
      }
      return nextTick();
    };
    var refreshScroll = function() {
      var lastScrollLeft = internalData.lastScrollLeft, lastScrollTop = internalData.lastScrollTop;
      return clearScroll().then(function() {
        if (lastScrollLeft || lastScrollTop) {
          internalData.lastScrollLeft = 0;
          internalData.lastScrollTop = 0;
          return scrollTo(lastScrollLeft, lastScrollTop);
        }
      });
    };
    var recalculate = function() {
      var el = refElem.value;
      if (el.clientWidth && el.clientHeight) {
        return computeScrollLoad();
      }
      return Promise.resolve();
    };
    var loadYData = function(evnt) {
      var scrollYStore = internalData.scrollYStore;
      var startIndex = scrollYStore.startIndex, endIndex = scrollYStore.endIndex, visibleSize = scrollYStore.visibleSize, offsetSize = scrollYStore.offsetSize, rowHeight = scrollYStore.rowHeight;
      var scrollBodyElem = evnt.target;
      var scrollTop = scrollBodyElem.scrollTop;
      var toVisibleIndex = Math.floor(scrollTop / rowHeight);
      var offsetStartIndex = Math.max(0, toVisibleIndex - 1 - offsetSize);
      var offsetEndIndex = toVisibleIndex + visibleSize + offsetSize;
      if (toVisibleIndex <= startIndex || toVisibleIndex >= endIndex - visibleSize - 1) {
        if (startIndex !== offsetStartIndex || endIndex !== offsetEndIndex) {
          scrollYStore.startIndex = offsetStartIndex;
          scrollYStore.endIndex = offsetEndIndex;
          updateYData();
        }
      }
    };
    var scrollEvent = function(evnt) {
      var scrollBodyElem = evnt.target;
      var scrollTop = scrollBodyElem.scrollTop;
      var scrollLeft = scrollBodyElem.scrollLeft;
      var isX = scrollLeft !== internalData.lastScrollLeft;
      var isY = scrollTop !== internalData.lastScrollTop;
      internalData.lastScrollTop = scrollTop;
      internalData.lastScrollLeft = scrollLeft;
      if (reactData.scrollYLoad) {
        loadYData(evnt);
      }
      listMethods.dispatchEvent("scroll", { scrollLeft, scrollTop, isX, isY }, evnt);
    };
    listMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $list: $xelist, $event: evnt }, params));
      },
      loadData: function(datas) {
        var scrollYStore = internalData.scrollYStore;
        var sYOpts = computeSYOpts.value;
        var fullData = datas || [];
        Object.assign(scrollYStore, {
          startIndex: 0,
          endIndex: 1,
          visibleSize: 0
        });
        internalData.fullData = fullData;
        reactData.scrollYLoad = !!sYOpts.enabled && sYOpts.gt > -1 && sYOpts.gt <= fullData.length;
        handleData();
        return computeScrollLoad().then(function() {
          refreshScroll();
        });
      },
      reloadData: function(datas) {
        clearScroll();
        return listMethods.loadData(datas);
      },
      recalculate,
      scrollTo,
      refreshScroll,
      clearScroll
    };
    Object.assign($xelist, listMethods);
    watch(function() {
      return props.data;
    }, function(value) {
      listMethods.loadData(value || []);
    });
    watch(function() {
      return props.syncResize;
    }, function(value) {
      if (value) {
        recalculate();
        nextTick(function() {
          return setTimeout(function() {
            return recalculate();
          });
        });
      }
    });
    var resizeObserver;
    nextTick(function() {
      GlobalEvent.on($xelist, "resize", function() {
        recalculate();
      });
      if (props.autoResize) {
        var el = refElem.value;
        resizeObserver = createResizeEvent(function() {
          return recalculate();
        });
        resizeObserver.observe(el);
      }
      listMethods.loadData(props.data || []);
    });
    onUnmounted(function() {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      GlobalEvent.off($xelist, "resize");
    });
    var renderVN = function() {
      var _a;
      var className = props.className, loading = props.loading;
      var bodyHeight = reactData.bodyHeight, topSpaceHeight = reactData.topSpaceHeight, items = reactData.items;
      var vSize = computeSize.value;
      var styles = computeStyles.value;
      return h("div", {
        ref: refElem,
        class: ["vxe-list", className ? xeUtils.isFunction(className) ? className({ $list: $xelist }) : className : "", (_a = {}, _a["size--" + vSize] = vSize, _a["is--loading"] = loading, _a)]
      }, [
        h("div", {
          ref: refVirtualWrapper,
          class: "vxe-list--virtual-wrapper",
          style: styles,
          onScroll: scrollEvent
        }, [
          h("div", {
            class: "vxe-list--y-space",
            style: {
              height: bodyHeight ? bodyHeight + "px" : ""
            }
          }),
          h("div", {
            ref: refVirtualBody,
            class: "vxe-list--body",
            style: {
              marginTop: topSpaceHeight ? topSpaceHeight + "px" : ""
            }
          }, slots.default ? slots.default({ items, $list: $xelist }) : [])
        ]),
        h("div", {
          class: ["vxe-list--loading vxe-loading", {
            "is--visible": loading
          }]
        }, [
          h("div", {
            class: "vxe-loading--spinner"
          })
        ])
      ]);
    };
    $xelist.renderVN = renderVN;
    return $xelist;
  },
  render: function() {
    return this.renderVN();
  }
});
var List = Object.assign(VxeListComponent, {
  install: function(app) {
    dynamicApp.component(VxeListComponent.name, VxeListComponent);
    app.component(VxeListComponent.name, VxeListComponent);
  }
});
var VxePulldownComponent = defineComponent({
  name: "VxePulldown",
  props: {
    disabled: Boolean,
    placement: String,
    size: { type: String, default: function() {
      return GlobalConfig.size;
    } },
    destroyOnClose: Boolean,
    transfer: Boolean
  },
  emits: [
    "hide-panel"
  ],
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var reactData = reactive({
      inited: false,
      panelIndex: 0,
      panelStyle: null,
      panelPlacement: null,
      visiblePanel: false,
      animatVisible: false,
      isActivated: false
    });
    var refElem = ref();
    var refPulldowContent = ref();
    var refPulldowPnanel = ref();
    var refMaps = {
      refElem
    };
    var $xepulldown = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: function() {
        return refMaps;
      }
    };
    var pulldownMethods = {};
    var updateZindex = function() {
      if (reactData.panelIndex < getLastZIndex()) {
        reactData.panelIndex = nextZIndex();
      }
    };
    var isPanelVisible = function() {
      return reactData.visiblePanel;
    };
    var updatePlacement = function() {
      return nextTick().then(function() {
        var transfer = props.transfer, placement = props.placement;
        var panelIndex = reactData.panelIndex, visiblePanel = reactData.visiblePanel;
        if (visiblePanel) {
          var targetElem = refPulldowContent.value;
          var panelElem = refPulldowPnanel.value;
          if (panelElem && targetElem) {
            var targetHeight = targetElem.offsetHeight;
            var targetWidth = targetElem.offsetWidth;
            var panelHeight = panelElem.offsetHeight;
            var panelWidth = panelElem.offsetWidth;
            var marginSize = 5;
            var panelStyle = {
              zIndex: panelIndex
            };
            var _a = getAbsolutePos(targetElem), boundingTop = _a.boundingTop, boundingLeft = _a.boundingLeft, visibleHeight = _a.visibleHeight, visibleWidth = _a.visibleWidth;
            var panelPlacement = "bottom";
            if (transfer) {
              var left = boundingLeft;
              var top_1 = boundingTop + targetHeight;
              if (placement === "top") {
                panelPlacement = "top";
                top_1 = boundingTop - panelHeight;
              } else if (!placement) {
                if (top_1 + panelHeight + marginSize > visibleHeight) {
                  panelPlacement = "top";
                  top_1 = boundingTop - panelHeight;
                }
                if (top_1 < marginSize) {
                  panelPlacement = "bottom";
                  top_1 = boundingTop + targetHeight;
                }
              }
              if (left + panelWidth + marginSize > visibleWidth) {
                left -= left + panelWidth + marginSize - visibleWidth;
              }
              if (left < marginSize) {
                left = marginSize;
              }
              Object.assign(panelStyle, {
                left: left + "px",
                top: top_1 + "px",
                minWidth: targetWidth + "px"
              });
            } else {
              if (placement === "top") {
                panelPlacement = "top";
                panelStyle.bottom = targetHeight + "px";
              } else if (!placement) {
                if (boundingTop + targetHeight + panelHeight > visibleHeight) {
                  if (boundingTop - targetHeight - panelHeight > marginSize) {
                    panelPlacement = "top";
                    panelStyle.bottom = targetHeight + "px";
                  }
                }
              }
            }
            reactData.panelStyle = panelStyle;
            reactData.panelPlacement = panelPlacement;
          }
        }
        return nextTick();
      });
    };
    var hidePanelTimeout;
    var showPanel = function() {
      if (!reactData.inited) {
        reactData.inited = true;
      }
      return new Promise(function(resolve) {
        if (!props.disabled) {
          clearTimeout(hidePanelTimeout);
          reactData.isActivated = true;
          reactData.animatVisible = true;
          setTimeout(function() {
            reactData.visiblePanel = true;
            updatePlacement();
            setTimeout(function() {
              resolve(updatePlacement());
            }, 40);
          }, 10);
          updateZindex();
        } else {
          resolve(nextTick());
        }
      });
    };
    var hidePanel = function() {
      reactData.visiblePanel = false;
      return new Promise(function(resolve) {
        if (reactData.animatVisible) {
          hidePanelTimeout = window.setTimeout(function() {
            reactData.animatVisible = false;
            resolve(nextTick());
          }, 350);
        } else {
          resolve(nextTick());
        }
      });
    };
    var togglePanel = function() {
      if (reactData.visiblePanel) {
        return hidePanel();
      }
      return showPanel();
    };
    var handleGlobalMousewheelEvent = function(evnt) {
      var disabled = props.disabled;
      var visiblePanel = reactData.visiblePanel;
      var panelElem = refPulldowPnanel.value;
      if (!disabled) {
        if (visiblePanel) {
          if (getEventTargetNode(evnt, panelElem).flag) {
            updatePlacement();
          } else {
            hidePanel();
            pulldownMethods.dispatchEvent("hide-panel", {}, evnt);
          }
        }
      }
    };
    var handleGlobalMousedownEvent = function(evnt) {
      var disabled = props.disabled;
      var visiblePanel = reactData.visiblePanel;
      var el = refElem.value;
      var panelElem = refPulldowPnanel.value;
      if (!disabled) {
        reactData.isActivated = getEventTargetNode(evnt, el).flag || getEventTargetNode(evnt, panelElem).flag;
        if (visiblePanel && !reactData.isActivated) {
          hidePanel();
          pulldownMethods.dispatchEvent("hide-panel", {}, evnt);
        }
      }
    };
    var handleGlobalBlurEvent = function(evnt) {
      if (reactData.visiblePanel) {
        reactData.isActivated = false;
        hidePanel();
        pulldownMethods.dispatchEvent("hide-panel", {}, evnt);
      }
    };
    pulldownMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $pulldown: $xepulldown, $event: evnt }, params));
      },
      isPanelVisible,
      togglePanel,
      showPanel,
      hidePanel
    };
    Object.assign($xepulldown, pulldownMethods);
    nextTick(function() {
      GlobalEvent.on($xepulldown, "mousewheel", handleGlobalMousewheelEvent);
      GlobalEvent.on($xepulldown, "mousedown", handleGlobalMousedownEvent);
      GlobalEvent.on($xepulldown, "blur", handleGlobalBlurEvent);
    });
    onUnmounted(function() {
      GlobalEvent.off($xepulldown, "mousewheel");
      GlobalEvent.off($xepulldown, "mousedown");
      GlobalEvent.off($xepulldown, "blur");
    });
    var renderVN = function() {
      var _a, _b;
      var destroyOnClose = props.destroyOnClose, transfer = props.transfer, disabled = props.disabled;
      var inited = reactData.inited, isActivated = reactData.isActivated, animatVisible = reactData.animatVisible, visiblePanel = reactData.visiblePanel, panelStyle = reactData.panelStyle, panelPlacement = reactData.panelPlacement;
      var vSize = computeSize.value;
      return h("div", {
        ref: refElem,
        class: ["vxe-pulldown", (_a = {}, _a["size--" + vSize] = vSize, _a["is--visivle"] = visiblePanel, _a["is--disabled"] = disabled, _a["is--active"] = isActivated, _a)]
      }, [
        h("div", {
          ref: refPulldowContent,
          class: "vxe-pulldown--content"
        }, slots.default ? slots.default({ $pulldown: $xepulldown }) : []),
        h(Teleport, {
          to: "body",
          disabled: transfer ? !inited : true
        }, [
          h("div", {
            ref: refPulldowPnanel,
            class: ["vxe-table--ignore-clear vxe-pulldown--panel", (_b = {}, _b["size--" + vSize] = vSize, _b["is--transfer"] = transfer, _b["animat--leave"] = animatVisible, _b["animat--enter"] = visiblePanel, _b)],
            placement: panelPlacement,
            style: panelStyle
          }, slots.dropdown ? [
            h("div", {
              class: "vxe-pulldown--wrapper"
            }, !inited || destroyOnClose && !visiblePanel && !animatVisible ? [] : slots.dropdown({ $pulldown: $xepulldown }))
          ] : [])
        ])
      ]);
    };
    $xepulldown.renderVN = renderVN;
    return $xepulldown;
  },
  render: function() {
    return this.renderVN();
  }
});
var Pulldown = Object.assign(VxePulldownComponent, {
  install: function(app) {
    dynamicApp.component(VxePulldownComponent.name, VxePulldownComponent);
    app.component(VxePulldownComponent.name, VxePulldownComponent);
  }
});
var __assign$1 = function() {
  __assign$1 = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
var __spreadArray$1 = function(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
    to[j] = from[i];
  return to;
};
var renderType = "body";
var lineOffsetSizes = {
  mini: 3,
  small: 2,
  medium: 1
};
var TableBodyComponent = defineComponent({
  name: "VxeTableBody",
  props: {
    tableData: Array,
    tableColumn: Array,
    fixedColumn: Array,
    fixedType: { type: String, default: null }
  },
  setup: function(props) {
    var $xetable = inject("$xetable", {});
    var xesize = inject("xesize", null);
    var xID = $xetable.xID, tableProps2 = $xetable.props, tableContext = $xetable.context, tableReactData = $xetable.reactData, tableInternalData = $xetable.internalData;
    var _a = $xetable.getRefMaps(), refTableHeader = _a.refTableHeader, refTableBody = _a.refTableBody, refTableFooter = _a.refTableFooter, refTableLeftBody = _a.refTableLeftBody, refTableRightBody = _a.refTableRightBody, refValidTooltip = _a.refValidTooltip;
    var _b = $xetable.getComputeMaps(), computeEditOpts = _b.computeEditOpts, computeMouseOpts = _b.computeMouseOpts, computeSYOpts = _b.computeSYOpts, computeEmptyOpts = _b.computeEmptyOpts, computeKeyboardOpts = _b.computeKeyboardOpts, computeTooltipOpts = _b.computeTooltipOpts, computeRadioOpts = _b.computeRadioOpts, computeTreeOpts = _b.computeTreeOpts, computeCheckboxOpts = _b.computeCheckboxOpts, computeValidOpts = _b.computeValidOpts;
    var refElem = ref();
    var refBodyTable = ref();
    var refBodyColgroup = ref();
    var refBodyTBody = ref();
    var refBodyXSpace = ref();
    var refBodyYSpace = ref();
    var refBodyEmptyBlock = ref();
    var getOffsetSize = function() {
      if (xesize) {
        var vSize = xesize.value;
        if (vSize) {
          return lineOffsetSizes[vSize] || 0;
        }
      }
      return 0;
    };
    var countTreeExpand = function(prevRow, params) {
      var treeOpts = computeTreeOpts.value;
      var rowChildren = prevRow[treeOpts.children];
      var count = 1;
      if ($xetable.isTreeExpandByRow(prevRow)) {
        for (var index = 0; index < rowChildren.length; index++) {
          count += countTreeExpand(rowChildren[index]);
        }
      }
      return count;
    };
    var calcTreeLine = function(params, items) {
      var $rowIndex = params.$rowIndex;
      var expandSize = 1;
      if ($rowIndex) {
        expandSize = countTreeExpand(items[$rowIndex - 1]);
      }
      return tableReactData.rowHeight * expandSize - ($rowIndex ? 1 : 12 - getOffsetSize());
    };
    var isOperateMouse = function() {
      var delayHover = tableProps2.delayHover;
      var lastScrollTime = tableInternalData.lastScrollTime, _isResize = tableInternalData._isResize;
      return _isResize || lastScrollTime && Date.now() < lastScrollTime + delayHover;
    };
    var renderLine = function(rowLevel, items, params) {
      var column = params.column;
      var treeConfig = tableProps2.treeConfig;
      var treeOpts = computeTreeOpts.value;
      var slots = column.slots, treeNode = column.treeNode;
      if (slots && slots.line) {
        return $xetable.callSlot(slots.line, params);
      }
      if (treeConfig && treeNode && treeOpts.line) {
        return [
          h("div", {
            class: "vxe-tree--line-wrapper"
          }, [
            h("div", {
              class: "vxe-tree--line",
              style: {
                height: calcTreeLine(params, items) + "px",
                left: rowLevel * treeOpts.indent + (rowLevel ? 2 - getOffsetSize() : 0) + 16 + "px"
              }
            })
          ])
        ];
      }
      return [];
    };
    var renderColumn = function($seq, seq, rowid, fixedType, rowLevel, row, rowIndex, $rowIndex, _rowIndex, column, $columnIndex, columns, items) {
      var _a2;
      var columnKey = tableProps2.columnKey, height = tableProps2.height, allColumnOverflow = tableProps2.showOverflow, cellClassName = tableProps2.cellClassName, cellStyle = tableProps2.cellStyle, allAlign = tableProps2.align, spanMethod = tableProps2.spanMethod, mouseConfig = tableProps2.mouseConfig, editConfig = tableProps2.editConfig, editRules = tableProps2.editRules, tooltipConfig = tableProps2.tooltipConfig;
      var tableData = tableReactData.tableData, overflowX = tableReactData.overflowX, scrollXLoad = tableReactData.scrollXLoad, scrollYLoad = tableReactData.scrollYLoad, currentColumn = tableReactData.currentColumn, mergeList = tableReactData.mergeList, editStore = tableReactData.editStore, validStore = tableReactData.validStore, isAllOverflow = tableReactData.isAllOverflow;
      var afterFullData = tableInternalData.afterFullData;
      var validOpts = computeValidOpts.value;
      var checkboxOpts = computeCheckboxOpts.value;
      var editOpts = computeEditOpts.value;
      var tooltipOpts = computeTooltipOpts.value;
      var sYOpts = computeSYOpts.value;
      var type = column.type, cellRender = column.cellRender, editRender = column.editRender, align = column.align, showOverflow = column.showOverflow, className = column.className, treeNode = column.treeNode;
      var actived = editStore.actived;
      var rHeight = sYOpts.rHeight;
      var showAllTip = tooltipOpts.showAll;
      var columnIndex = $xetable.getColumnIndex(column);
      var _columnIndex = $xetable.getVTColumnIndex(column);
      var isEdit = isEnableConf(editRender);
      var fixedHiddenColumn = fixedType ? column.fixed !== fixedType : column.fixed && overflowX;
      var cellOverflow = xeUtils.isUndefined(showOverflow) || xeUtils.isNull(showOverflow) ? allColumnOverflow : showOverflow;
      var showEllipsis = cellOverflow === "ellipsis";
      var showTitle = cellOverflow === "title";
      var showTooltip = cellOverflow === true || cellOverflow === "tooltip";
      var hasEllipsis = showTitle || showTooltip || showEllipsis;
      var isDirty;
      var tdOns = {};
      var cellAlign = align || allAlign;
      var hasValidError = validStore.row === row && validStore.column === column;
      var showValidTip = editRules && validOpts.showMessage && (validOpts.message === "default" ? height || tableData.length > 1 : validOpts.message === "inline");
      var attrs = { colid: column.id };
      var params = { $table: $xetable, $seq, seq, rowid, row, rowIndex, $rowIndex, _rowIndex, column, columnIndex, $columnIndex, _columnIndex, fixed: fixedType, type: renderType, isHidden: fixedHiddenColumn, level: rowLevel, visibleData: afterFullData, data: tableData, items };
      if ((scrollXLoad || scrollYLoad) && !hasEllipsis) {
        showEllipsis = hasEllipsis = true;
      }
      if (showTitle || showTooltip || showAllTip || tooltipConfig) {
        tdOns.onMouseenter = function(evnt) {
          if (isOperateMouse()) {
            return;
          }
          if (showTitle) {
            updateCellTitle(evnt.currentTarget, column);
          } else if (showTooltip || showAllTip) {
            $xetable.triggerBodyTooltipEvent(evnt, params);
          }
          $xetable.dispatchEvent("cell-mouseenter", Object.assign({ cell: evnt.currentTarget }, params), evnt);
        };
      }
      if (showTooltip || showAllTip || tooltipConfig) {
        tdOns.onMouseleave = function(evnt) {
          if (isOperateMouse()) {
            return;
          }
          if (showTooltip || showAllTip) {
            $xetable.handleTargetLeaveEvent(evnt);
          }
          $xetable.dispatchEvent("cell-mouseleave", Object.assign({ cell: evnt.currentTarget }, params), evnt);
        };
      }
      if (checkboxOpts.range || mouseConfig) {
        tdOns.onMousedown = function(evnt) {
          $xetable.triggerCellMousedownEvent(evnt, params);
        };
      }
      tdOns.onClick = function(evnt) {
        $xetable.triggerCellClickEvent(evnt, params);
      };
      tdOns.onDblclick = function(evnt) {
        $xetable.triggerCellDblclickEvent(evnt, params);
      };
      if (mergeList.length) {
        var spanRest = mergeBodyMethod(mergeList, _rowIndex, _columnIndex);
        if (spanRest) {
          var rowspan = spanRest.rowspan, colspan = spanRest.colspan;
          if (!rowspan || !colspan) {
            return null;
          }
          if (rowspan > 1) {
            attrs.rowspan = rowspan;
          }
          if (colspan > 1) {
            attrs.colspan = colspan;
          }
        }
      } else if (spanMethod) {
        var _b2 = spanMethod(params) || {}, _c = _b2.rowspan, rowspan = _c === void 0 ? 1 : _c, _d = _b2.colspan, colspan = _d === void 0 ? 1 : _d;
        if (!rowspan || !colspan) {
          return null;
        }
        if (rowspan > 1) {
          attrs.rowspan = rowspan;
        }
        if (colspan > 1) {
          attrs.colspan = colspan;
        }
      }
      if (fixedHiddenColumn && mergeList) {
        if (attrs.colspan > 1 || attrs.rowspan > 1) {
          fixedHiddenColumn = false;
        }
      }
      if (!fixedHiddenColumn && editConfig && (editRender || cellRender) && (editOpts.showStatus || editOpts.showUpdateStatus)) {
        isDirty = $xetable.isUpdateByRow(row, column.property);
      }
      var tdVNs = [];
      if (fixedHiddenColumn && (allColumnOverflow ? isAllOverflow : allColumnOverflow)) {
        tdVNs.push(h("div", {
          class: ["vxe-cell", {
            "c--title": showTitle,
            "c--tooltip": showTooltip,
            "c--ellipsis": showEllipsis
          }],
          style: {
            maxHeight: hasEllipsis && rHeight ? rHeight + "px" : ""
          }
        }));
      } else {
        tdVNs.push.apply(tdVNs, __spreadArray$1(__spreadArray$1([], renderLine(rowLevel, items, params)), [h("div", {
          class: ["vxe-cell", {
            "c--title": showTitle,
            "c--tooltip": showTooltip,
            "c--ellipsis": showEllipsis
          }],
          style: {
            maxHeight: hasEllipsis && rHeight ? rHeight + "px" : ""
          },
          title: showTitle ? $xetable.getCellLabel(row, column) : null
        }, column.renderCell(params))]));
        if (showValidTip && hasValidError) {
          tdVNs.push(h("div", {
            class: "vxe-cell--valid",
            style: validStore.rule && validStore.rule.maxWidth ? {
              width: validStore.rule.maxWidth + "px"
            } : null
          }, [
            h("span", {
              class: "vxe-cell--valid-msg"
            }, validStore.content)
          ]));
        }
      }
      return h("td", __assign$1(__assign$1(__assign$1({ class: ["vxe-body--column", column.id, (_a2 = {}, _a2["col--" + cellAlign] = cellAlign, _a2["col--" + type] = type, _a2["col--last"] = $columnIndex === columns.length - 1, _a2["col--tree-node"] = treeNode, _a2["col--edit"] = isEdit, _a2["col--ellipsis"] = hasEllipsis, _a2["fixed--hidden"] = fixedHiddenColumn, _a2["col--dirty"] = isDirty, _a2["col--actived"] = editConfig && isEdit && (actived.row === row && (actived.column === column || editOpts.mode === "row")), _a2["col--valid-error"] = hasValidError, _a2["col--current"] = currentColumn === column, _a2), getPropClass(className, params), getPropClass(cellClassName, params)], key: columnKey ? column.id : $columnIndex }, attrs), { style: Object.assign({
        height: hasEllipsis && rHeight ? rHeight + "px" : ""
      }, cellStyle ? xeUtils.isFunction(cellStyle) ? cellStyle(params) : cellStyle : null) }), tdOns), tdVNs);
    };
    var renderRows = function($seq, rowLevel, fixedType, tableData, tableColumn) {
      var stripe = tableProps2.stripe, rowKey = tableProps2.rowKey, highlightHoverRow = tableProps2.highlightHoverRow, rowClassName = tableProps2.rowClassName, rowStyle = tableProps2.rowStyle, allColumnOverflow = tableProps2.showOverflow, editConfig = tableProps2.editConfig, treeConfig = tableProps2.treeConfig;
      var hasFixedColumn = tableReactData.hasFixedColumn, treeExpandeds = tableReactData.treeExpandeds, scrollYLoad = tableReactData.scrollYLoad, editStore = tableReactData.editStore, rowExpandeds = tableReactData.rowExpandeds, expandColumn = tableReactData.expandColumn, selectRow = tableReactData.selectRow;
      var scrollYStore = tableInternalData.scrollYStore;
      var checkboxOpts = computeCheckboxOpts.value;
      var radioOpts = computeRadioOpts.value;
      var treeOpts = computeTreeOpts.value;
      var editOpts = computeEditOpts.value;
      var rows = [];
      tableData.forEach(function(row, $rowIndex) {
        var trOn = {};
        var rowIndex = $rowIndex;
        var seq = rowIndex + 1;
        if (scrollYLoad) {
          seq += scrollYStore.startIndex;
        }
        var _rowIndex = $xetable.getVTRowIndex(row);
        rowIndex = $xetable.getRowIndex(row);
        if (highlightHoverRow) {
          trOn.onMouseenter = function(evnt) {
            if (isOperateMouse()) {
              return;
            }
            $xetable.triggerHoverEvent(evnt, { row, rowIndex });
          };
          trOn.onMouseleave = function() {
            if (isOperateMouse()) {
              return;
            }
            $xetable.clearHoverRow();
          };
        }
        var rowid = getRowid($xetable, row);
        var params = { $table: $xetable, $seq, seq, rowid, fixed: fixedType, type: renderType, level: rowLevel, row, rowIndex, $rowIndex, _rowIndex };
        var isNewRow = false;
        if (editConfig) {
          isNewRow = $xetable.findRowIndexOf(editStore.insertList, row) > -1;
        }
        rows.push(h("tr", __assign$1({ class: ["vxe-body--row", {
          "row--stripe": stripe && ($xetable.getVTRowIndex(row) + 1) % 2 === 0,
          "is--new": isNewRow,
          "row--new": isNewRow && (editOpts.showStatus || editOpts.showInsertStatus),
          "row--radio": radioOpts.highlight && selectRow === row,
          "row--checked": checkboxOpts.highlight && $xetable.isCheckedByCheckboxRow(row)
        }, rowClassName ? xeUtils.isFunction(rowClassName) ? rowClassName(params) : rowClassName : ""], rowid, style: rowStyle ? xeUtils.isFunction(rowStyle) ? rowStyle(params) : rowStyle : null, key: rowKey || treeConfig ? rowid : $rowIndex }, trOn), tableColumn.map(function(column, $columnIndex) {
          return renderColumn($seq, seq, rowid, fixedType, rowLevel, row, rowIndex, $rowIndex, _rowIndex, column, $columnIndex, tableColumn, tableData);
        })));
        if (expandColumn && rowExpandeds.length && $xetable.findRowIndexOf(rowExpandeds, row) > -1) {
          var cellStyle = void 0;
          if (treeConfig) {
            cellStyle = {
              paddingLeft: rowLevel * treeOpts.indent + 30 + "px"
            };
          }
          var showOverflow = expandColumn.showOverflow;
          var hasEllipsis = xeUtils.isUndefined(showOverflow) || xeUtils.isNull(showOverflow) ? allColumnOverflow : showOverflow;
          var expandParams = { $table: $xetable, $seq, seq, column: expandColumn, fixed: fixedType, type: renderType, level: rowLevel, row, rowIndex, $rowIndex, _rowIndex };
          rows.push(h("tr", __assign$1({ class: "vxe-body--expanded-row", key: "expand_" + rowid, style: rowStyle ? xeUtils.isFunction(rowStyle) ? rowStyle(expandParams) : rowStyle : null }, trOn), [
            h("td", {
              class: ["vxe-body--expanded-column", {
                "fixed--hidden": fixedType && !hasFixedColumn,
                "col--ellipsis": hasEllipsis
              }],
              colspan: tableColumn.length
            }, [
              h("div", {
                class: "vxe-body--expanded-cell",
                style: cellStyle
              }, [
                expandColumn.renderData(expandParams)
              ])
            ])
          ]));
        }
        if (treeConfig && treeExpandeds.length) {
          var rowChildren = row[treeOpts.children];
          if (rowChildren && rowChildren.length && $xetable.findRowIndexOf(treeExpandeds, row) > -1) {
            rows.push.apply(rows, renderRows($seq ? $seq + "." + seq : "" + seq, rowLevel + 1, fixedType, rowChildren, tableColumn));
          }
        }
      });
      return rows;
    };
    var scrollProcessTimeout;
    var syncBodyScroll = function(scrollTop, elem1, elem2) {
      if (elem1 || elem2) {
        if (elem1) {
          removeScrollListener(elem1);
          elem1.scrollTop = scrollTop;
        }
        if (elem2) {
          removeScrollListener(elem2);
          elem2.scrollTop = scrollTop;
        }
        clearTimeout(scrollProcessTimeout);
        scrollProcessTimeout = setTimeout(function() {
          restoreScrollListener(elem1);
          restoreScrollListener(elem2);
        }, 300);
      }
    };
    var scrollEvent = function(evnt) {
      var fixedType = props.fixedType;
      var highlightHoverRow = tableProps2.highlightHoverRow;
      var scrollXLoad = tableReactData.scrollXLoad, scrollYLoad = tableReactData.scrollYLoad;
      var elemStore = tableInternalData.elemStore, lastScrollTop = tableInternalData.lastScrollTop, lastScrollLeft = tableInternalData.lastScrollLeft;
      var tableHeader = refTableHeader.value;
      var tableBody = refTableBody.value;
      var tableFooter = refTableFooter.value;
      var leftBody = refTableLeftBody.value;
      var rightBody = refTableRightBody.value;
      var validTip = refValidTooltip.value;
      var scrollBodyElem = refElem.value;
      var headerElem = tableHeader ? tableHeader.$el : null;
      var footerElem = tableFooter ? tableFooter.$el : null;
      var bodyElem = tableBody.$el;
      var leftElem = leftBody ? leftBody.$el : null;
      var rightElem = rightBody ? rightBody.$el : null;
      var bodyYElem = elemStore["main-body-ySpace"];
      var bodyXElem = elemStore["main-body-xSpace"];
      var bodyHeight = bodyYElem ? bodyYElem.clientHeight : 0;
      var bodyWidth = bodyXElem ? bodyXElem.clientWidth : 0;
      var scrollTop = scrollBodyElem.scrollTop;
      var scrollLeft = bodyElem.scrollLeft;
      var isRollX = scrollLeft !== lastScrollLeft;
      var isRollY = scrollTop !== lastScrollTop;
      tableInternalData.lastScrollTop = scrollTop;
      tableInternalData.lastScrollLeft = scrollLeft;
      tableInternalData.lastScrollTime = Date.now();
      if (highlightHoverRow) {
        $xetable.clearHoverRow();
      }
      if (leftElem && fixedType === "left") {
        scrollTop = leftElem.scrollTop;
        syncBodyScroll(scrollTop, bodyElem, rightElem);
      } else if (rightElem && fixedType === "right") {
        scrollTop = rightElem.scrollTop;
        syncBodyScroll(scrollTop, bodyElem, leftElem);
      } else {
        if (isRollX) {
          if (headerElem) {
            headerElem.scrollLeft = bodyElem.scrollLeft;
          }
          if (footerElem) {
            footerElem.scrollLeft = bodyElem.scrollLeft;
          }
        }
        if (leftElem || rightElem) {
          $xetable.checkScrolling();
          if (isRollY) {
            syncBodyScroll(scrollTop, leftElem, rightElem);
          }
        }
      }
      if (scrollXLoad && isRollX) {
        $xetable.triggerScrollXEvent(evnt);
      }
      if (scrollYLoad && isRollY) {
        $xetable.triggerScrollYEvent(evnt);
      }
      if (isRollX && validTip && validTip.reactData.visible) {
        validTip.updatePlacement();
      }
      $xetable.dispatchEvent("scroll", { type: renderType, fixed: fixedType, scrollTop, scrollLeft, bodyHeight, bodyWidth, isX: isRollX, isY: isRollY }, evnt);
    };
    var wheelTime;
    var wheelYSize = 0;
    var wheelYInterval = 0;
    var wheelYTotal = 0;
    var isPrevWheelTop = false;
    var handleWheel = function(evnt, isTopWheel, deltaTop, isRollX, isRollY) {
      var elemStore = tableInternalData.elemStore;
      var tableBody = refTableBody.value;
      var leftBody = refTableLeftBody.value;
      var rightBody = refTableRightBody.value;
      var leftElem = leftBody ? leftBody.$el : null;
      var rightElem = rightBody ? rightBody.$el : null;
      var bodyElem = tableBody.$el;
      var bodyYElem = elemStore["main-body-ySpace"];
      var bodyXElem = elemStore["main-body-xSpace"];
      var bodyHeight = bodyYElem ? bodyYElem.clientHeight : 0;
      var bodyWidth = bodyXElem ? bodyXElem.clientWidth : 0;
      var remainSize = isPrevWheelTop === isTopWheel ? Math.max(0, wheelYSize - wheelYTotal) : 0;
      isPrevWheelTop = isTopWheel;
      wheelYSize = Math.abs(isTopWheel ? deltaTop - remainSize : deltaTop + remainSize);
      wheelYInterval = 0;
      wheelYTotal = 0;
      clearTimeout(wheelTime);
      var handleSmooth = function() {
        if (wheelYTotal < wheelYSize) {
          var fixedType = props.fixedType;
          wheelYInterval = Math.max(5, Math.floor(wheelYInterval * 1.5));
          wheelYTotal = wheelYTotal + wheelYInterval;
          if (wheelYTotal > wheelYSize) {
            wheelYInterval = wheelYInterval - (wheelYTotal - wheelYSize);
          }
          var scrollTop = bodyElem.scrollTop, clientHeight = bodyElem.clientHeight, scrollHeight = bodyElem.scrollHeight;
          var targerTop = scrollTop + wheelYInterval * (isTopWheel ? -1 : 1);
          bodyElem.scrollTop = targerTop;
          if (leftElem) {
            leftElem.scrollTop = targerTop;
          }
          if (rightElem) {
            rightElem.scrollTop = targerTop;
          }
          if (isTopWheel ? targerTop < scrollHeight - clientHeight : targerTop >= 0) {
            wheelTime = setTimeout(handleSmooth, 10);
          }
          $xetable.dispatchEvent("scroll", { type: renderType, fixed: fixedType, scrollTop: bodyElem.scrollTop, scrollLeft: bodyElem.scrollLeft, bodyHeight, bodyWidth, isX: isRollX, isY: isRollY }, evnt);
        }
      };
      handleSmooth();
    };
    var wheelEvent = function(evnt) {
      var deltaY = evnt.deltaY, deltaX = evnt.deltaX;
      var highlightHoverRow = tableProps2.highlightHoverRow;
      var scrollYLoad = tableReactData.scrollYLoad;
      var lastScrollTop = tableInternalData.lastScrollTop, lastScrollLeft = tableInternalData.lastScrollLeft;
      var tableBody = refTableBody.value;
      var scrollBodyElem = refElem.value;
      var bodyElem = tableBody.$el;
      var deltaTop = browse.firefox ? deltaY * 40 : deltaY;
      var deltaLeft = browse.firefox ? deltaX * 40 : deltaX;
      var isTopWheel = deltaTop < 0;
      if (isTopWheel ? scrollBodyElem.scrollTop <= 0 : scrollBodyElem.scrollTop >= scrollBodyElem.scrollHeight - scrollBodyElem.clientHeight) {
        return;
      }
      var scrollTop = scrollBodyElem.scrollTop + deltaTop;
      var scrollLeft = bodyElem.scrollLeft + deltaLeft;
      var isRollX = scrollLeft !== lastScrollLeft;
      var isRollY = scrollTop !== lastScrollTop;
      if (isRollY) {
        evnt.preventDefault();
        tableInternalData.lastScrollTop = scrollTop;
        tableInternalData.lastScrollLeft = scrollLeft;
        tableInternalData.lastScrollTime = Date.now();
        if (highlightHoverRow) {
          $xetable.clearHoverRow();
        }
        handleWheel(evnt, isTopWheel, deltaTop, isRollX, isRollY);
        if (scrollYLoad) {
          $xetable.triggerScrollYEvent(evnt);
        }
      }
    };
    onMounted(function() {
      nextTick(function() {
        var fixedType = props.fixedType;
        var elemStore = tableInternalData.elemStore;
        var prefix = (fixedType || "main") + "-body-";
        var el = refElem.value;
        elemStore[prefix + "wrapper"] = refElem.value;
        elemStore[prefix + "table"] = refBodyTable.value;
        elemStore[prefix + "colgroup"] = refBodyColgroup.value;
        elemStore[prefix + "list"] = refBodyTBody.value;
        elemStore[prefix + "xSpace"] = refBodyXSpace.value;
        elemStore[prefix + "ySpace"] = refBodyYSpace.value;
        elemStore[prefix + "emptyBlock"] = refBodyEmptyBlock.value;
        el.onscroll = scrollEvent;
        el._onscroll = scrollEvent;
      });
    });
    onBeforeUnmount(function() {
      var el = refElem.value;
      clearTimeout(wheelTime);
      el._onscroll = null;
      el.onscroll = null;
    });
    var renderVN = function() {
      var fixedColumn = props.fixedColumn, fixedType = props.fixedType, tableColumn = props.tableColumn;
      var keyboardConfig = tableProps2.keyboardConfig, allColumnOverflow = tableProps2.showOverflow, spanMethod = tableProps2.spanMethod, mouseConfig = tableProps2.mouseConfig;
      var tableData = tableReactData.tableData, mergeList = tableReactData.mergeList, scrollXLoad = tableReactData.scrollXLoad, scrollYLoad = tableReactData.scrollYLoad, isAllOverflow = tableReactData.isAllOverflow;
      var visibleColumn = tableInternalData.visibleColumn;
      var slots = tableContext.slots;
      var sYOpts = computeSYOpts.value;
      var emptyOpts = computeEmptyOpts.value;
      var keyboardOpts = computeKeyboardOpts.value;
      var mouseOpts = computeMouseOpts.value;
      if (fixedType) {
        if (scrollXLoad || scrollYLoad || (allColumnOverflow ? isAllOverflow : allColumnOverflow)) {
          if (!mergeList.length && !spanMethod && !(keyboardConfig && keyboardOpts.isMerge)) {
            tableColumn = fixedColumn;
          } else {
            tableColumn = visibleColumn;
          }
        } else {
          tableColumn = visibleColumn;
        }
      }
      var emptyContent;
      if (slots.empty) {
        emptyContent = $xetable.callSlot(slots.empty, { $table: $xetable });
      } else {
        var compConf = emptyOpts.name ? VXETable.renderer.get(emptyOpts.name) : null;
        var renderEmpty = compConf ? compConf.renderEmpty : null;
        if (renderEmpty) {
          emptyContent = renderEmpty(emptyOpts, { $table: $xetable });
        } else {
          emptyContent = tableProps2.emptyText || GlobalConfig.i18n("vxe.table.emptyText");
        }
      }
      return h("div", __assign$1({ ref: refElem, class: ["vxe-table--body-wrapper", fixedType ? "fixed-" + fixedType + "--wrapper" : "body--wrapper"], xid: xID }, scrollYLoad && sYOpts.mode === "wheel" ? { onWheel: wheelEvent } : {}), [
        fixedType ? createCommentVNode() : h("div", {
          ref: refBodyXSpace,
          class: "vxe-body--x-space"
        }),
        h("div", {
          ref: refBodyYSpace,
          class: "vxe-body--y-space"
        }),
        h("table", {
          ref: refBodyTable,
          class: "vxe-table--body",
          xid: xID,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          h("colgroup", {
            ref: refBodyColgroup
          }, tableColumn.map(function(column, $columnIndex) {
            return h("col", {
              name: column.id,
              key: $columnIndex
            });
          })),
          h("tbody", {
            ref: refBodyTBody
          }, renderRows("", 0, fixedType, tableData, tableColumn))
        ]),
        h("div", {
          class: "vxe-table--checkbox-range"
        }),
        mouseConfig && mouseOpts.area ? h("div", {
          class: "vxe-table--cell-area"
        }, [
          h("span", {
            class: "vxe-table--cell-main-area"
          }, mouseOpts.extension ? [
            h("span", {
              class: "vxe-table--cell-main-area-btn",
              onMousedown: function(evnt) {
                $xetable.triggerCellExtendMousedownEvent(evnt, { $table: $xetable, fixed: fixedType, type: renderType });
              }
            })
          ] : []),
          h("span", {
            class: "vxe-table--cell-copy-area"
          }),
          h("span", {
            class: "vxe-table--cell-extend-area"
          }),
          h("span", {
            class: "vxe-table--cell-multi-area"
          }),
          h("span", {
            class: "vxe-table--cell-active-area"
          })
        ]) : null,
        !fixedType ? h("div", {
          class: "vxe-table--empty-block",
          ref: refBodyEmptyBlock
        }, [
          h("div", {
            class: "vxe-table--empty-content"
          }, emptyContent)
        ]) : null
      ]);
    };
    return renderVN;
  }
});
var __assign = function() {
  __assign = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t2[p] = s[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var __spreadArray = function(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
    to[j] = from[i];
  return to;
};
var isWebkit = browse["-webkit"] && !browse.edge;
var resizableStorageKey = "VXE_TABLE_CUSTOM_COLUMN_WIDTH";
var visibleStorageKey = "VXE_TABLE_CUSTOM_COLUMN_VISIBLE";
var VxeTableComponent = defineComponent({
  name: "VxeTable",
  props: tableProps,
  emits: tableEmits,
  setup: function(props, context) {
    var slots = context.slots, emit = context.emit;
    var hasUseTooltip = VXETable.tooltip;
    var xID = xeUtils.uniqueId();
    var computeSize = useSize(props);
    var instance = getCurrentInstance();
    var reactData = reactive({
      staticColumns: [],
      tableGroupColumn: [],
      tableColumn: [],
      tableData: [],
      scrollXLoad: false,
      scrollYLoad: false,
      overflowY: true,
      overflowX: false,
      scrollbarWidth: 0,
      scrollbarHeight: 0,
      rowHeight: 0,
      parentHeight: 0,
      isGroup: false,
      isAllOverflow: false,
      isAllSelected: false,
      isIndeterminate: false,
      selection: [],
      currentRow: null,
      currentColumn: null,
      selectRow: null,
      footerTableData: [],
      expandColumn: null,
      treeNodeColumn: null,
      hasFixedColumn: false,
      rowExpandeds: [],
      expandLazyLoadeds: [],
      treeExpandeds: [],
      treeLazyLoadeds: [],
      treeIndeterminates: [],
      mergeList: [],
      mergeFooterList: [],
      initStore: {
        filter: false,
        import: false,
        export: false
      },
      filterStore: {
        isAllSelected: false,
        isIndeterminate: false,
        style: null,
        options: [],
        column: null,
        multiple: false,
        visible: false,
        maxHeight: null
      },
      columnStore: {
        leftList: [],
        centerList: [],
        rightList: [],
        resizeList: [],
        pxList: [],
        pxMinList: [],
        scaleList: [],
        scaleMinList: [],
        autoList: []
      },
      ctxMenuStore: {
        selected: null,
        visible: false,
        showChild: false,
        selectChild: null,
        list: [],
        style: null
      },
      editStore: {
        indexs: {
          columns: []
        },
        titles: {
          columns: []
        },
        selected: {
          row: null,
          column: null
        },
        copyed: {
          cut: false,
          rows: [],
          columns: []
        },
        actived: {
          row: null,
          column: null
        },
        insertList: [],
        removeList: []
      },
      validStore: {
        visible: false,
        row: null,
        column: null,
        content: "",
        rule: null,
        isArrow: false
      },
      importStore: {
        inited: false,
        file: null,
        type: "",
        modeList: [],
        typeList: [],
        filename: "",
        visible: false
      },
      importParams: {
        mode: "",
        types: null,
        message: true
      },
      exportStore: {
        inited: false,
        name: "",
        modeList: [],
        typeList: [],
        columns: [],
        isPrint: false,
        hasFooter: false,
        hasMerge: false,
        hasTree: false,
        hasColgroup: false,
        visible: false
      },
      exportParams: {
        filename: "",
        sheetName: "",
        mode: "",
        type: "",
        isColgroup: false,
        isMerge: false,
        isAllExpand: false,
        useStyle: false,
        original: false,
        message: true,
        isHeader: false,
        isFooter: false
      }
    });
    var internalData = {
      tZindex: 0,
      elemStore: {},
      scrollXStore: {
        offsetSize: 0,
        visibleSize: 0,
        startIndex: 0,
        endIndex: 0
      },
      scrollYStore: {
        rowHeight: 0,
        offsetSize: 0,
        visibleSize: 0,
        startIndex: 0,
        endIndex: 0
      },
      tooltipStore: {},
      tableWidth: 0,
      tableHeight: 0,
      headerHeight: 0,
      footerHeight: 0,
      customHeight: 0,
      customMaxHeight: 0,
      hoverRow: null,
      lastScrollLeft: 0,
      lastScrollTop: 0,
      lastScrollTime: 0,
      radioReserveRow: null,
      checkboxReserveRowMap: {},
      rowExpandedReserveRowMap: {},
      treeExpandedReserveRowMap: {},
      tableFullData: [],
      afterFullData: [],
      tableSynchData: [],
      tableSourceData: [],
      collectColumn: [],
      tableFullColumn: [],
      visibleColumn: [],
      fullAllDataRowIdData: {},
      fullDataRowIdData: {},
      fullColumnIdData: {},
      fullColumnFieldData: {},
      inited: false,
      tooltipActive: false,
      tooltipTimeout: null,
      initStatus: false,
      isActivated: false
    };
    var tableMethods = {};
    var tablePrivateMethods = {};
    var refElem = ref();
    var refTooltip = ref();
    var refCommTooltip = ref();
    var refValidTooltip = ref();
    var refTableFilter = ref();
    var refTableMenu = ref();
    var refTableHeader = ref();
    var refTableBody = ref();
    var refTableFooter = ref();
    var refTableLeftHeader = ref();
    var refTableLeftBody = ref();
    var refTableLeftFooter = ref();
    var refTableRightHeader = ref();
    var refTableRightBody = ref();
    var refTableRightFooter = ref();
    var refLeftContainer = ref();
    var refRightContainer = ref();
    var refCellResizeBar = ref();
    var refEmptyPlaceholder = ref();
    var $xegrid = inject("$xegrid", null);
    var $xetoolbar;
    var computeValidOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.validConfig, props.validConfig);
    });
    var computeSXOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.scrollX, props.scrollX);
    });
    var computeSYOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.scrollY, props.scrollY);
    });
    var computeRowHeightMaps = computed(function() {
      return {
        default: 48,
        medium: 44,
        small: 40,
        mini: 36
      };
    });
    var computeColumnOpts = computed(function() {
      return Object.assign({}, props.columnConfig);
    });
    var computeResizableOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.resizableConfig, props.resizableConfig);
    });
    var computeSeqOpts = computed(function() {
      return Object.assign({ startIndex: 0 }, GlobalConfig.table.seqConfig, props.seqConfig);
    });
    var computeRadioOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.radioConfig, props.radioConfig);
    });
    var computeCheckboxOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.checkboxConfig, props.checkboxConfig);
    });
    var computeTooltipOpts = ref();
    var handleTooltipLeaveMethod = function() {
      var tooltipOpts = computeTooltipOpts.value;
      setTimeout(function() {
        if (!internalData.tooltipActive) {
          tableMethods.closeTooltip();
        }
      }, tooltipOpts.leaveDelay);
      return false;
    };
    computeTooltipOpts = computed(function() {
      var opts = Object.assign({ leaveDelay: 300 }, GlobalConfig.table.tooltipConfig, props.tooltipConfig);
      if (opts.enterable) {
        opts.leaveMethod = handleTooltipLeaveMethod;
      }
      return opts;
    });
    var computeValidTipOpts = computed(function() {
      var tooltipOpts = computeTooltipOpts.value;
      return Object.assign({ isArrow: false }, tooltipOpts);
    });
    var computeEditOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.editConfig, props.editConfig);
    });
    var computeSortOpts = computed(function() {
      return Object.assign({ orders: ["asc", "desc", null] }, GlobalConfig.table.sortConfig, props.sortConfig);
    });
    var computeFilterOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.filterConfig, props.filterConfig);
    });
    var computeMouseOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.mouseConfig, props.mouseConfig);
    });
    var computeAreaOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.areaConfig, props.areaConfig);
    });
    var computeKeyboardOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.keyboardConfig, props.keyboardConfig);
    });
    var computeClipOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.clipConfig, props.clipConfig);
    });
    var computeFNROpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.fnrConfig, props.fnrConfig);
    });
    var computeMenuOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.menuConfig, props.menuConfig);
    });
    var computeHeaderMenu = computed(function() {
      var menuOpts = computeMenuOpts.value;
      var headerOpts = menuOpts.header;
      return headerOpts && headerOpts.options ? headerOpts.options : [];
    });
    var computeBodyMenu = computed(function() {
      var menuOpts = computeMenuOpts.value;
      var bodyOpts = menuOpts.body;
      return bodyOpts && bodyOpts.options ? bodyOpts.options : [];
    });
    var computeFooterMenu = computed(function() {
      var menuOpts = computeMenuOpts.value;
      var footerOpts = menuOpts.footer;
      return footerOpts && footerOpts.options ? footerOpts.options : [];
    });
    var computeIsMenu = computed(function() {
      var menuOpts = computeMenuOpts.value;
      var headerMenu = computeHeaderMenu.value;
      var bodyMenu = computeBodyMenu.value;
      var footerMenu = computeFooterMenu.value;
      return !!(props.menuConfig && isEnableConf(menuOpts) && (headerMenu.length || bodyMenu.length || footerMenu.length));
    });
    var computeMenuList = computed(function() {
      var ctxMenuStore = reactData.ctxMenuStore;
      var rest = [];
      ctxMenuStore.list.forEach(function(list) {
        list.forEach(function(item) {
          rest.push(item);
        });
      });
      return rest;
    });
    var computeExportOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.exportConfig, props.exportConfig);
    });
    var computeImportOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.importConfig, props.importConfig);
    });
    var computePrintOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.printConfig, props.printConfig);
    });
    var computeExpandOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.expandConfig, props.expandConfig);
    });
    var computeTreeOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.treeConfig, props.treeConfig);
    });
    var computeEmptyOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.emptyRender, props.emptyRender);
    });
    var computeCellOffsetWidth = computed(function() {
      return props.border ? Math.max(2, Math.ceil(reactData.scrollbarWidth / reactData.tableColumn.length)) : 1;
    });
    var computeCustomOpts = computed(function() {
      return Object.assign({}, GlobalConfig.table.customConfig, props.customConfig);
    });
    var computeTableBorder = computed(function() {
      var border = props.border;
      if (border === true) {
        return "full";
      }
      if (border) {
        return border;
      }
      return "default";
    });
    var computeIsAllCheckboxDisabled = computed(function() {
      props.treeConfig;
      var tableData = reactData.tableData;
      var tableFullData = internalData.tableFullData;
      var checkboxOpts = computeCheckboxOpts.value;
      var strict = checkboxOpts.strict, checkMethod = checkboxOpts.checkMethod;
      if (strict) {
        if (tableData.length || tableFullData.length) {
          if (checkMethod) {
            return tableFullData.every(function(row) {
              return !checkMethod({ row });
            });
          }
          return false;
        }
        return true;
      }
      return false;
    });
    var refMaps = {
      refElem,
      refTooltip,
      refValidTooltip,
      refTableFilter,
      refTableMenu,
      refTableHeader,
      refTableBody,
      refTableFooter,
      refTableLeftHeader,
      refTableLeftBody,
      refTableLeftFooter,
      refTableRightHeader,
      refTableRightBody,
      refTableRightFooter,
      refLeftContainer,
      refRightContainer,
      refCellResizeBar
    };
    var computeMaps = {
      computeSize,
      computeValidOpts,
      computeSXOpts,
      computeSYOpts,
      computeResizableOpts,
      computeSeqOpts,
      computeRadioOpts,
      computeCheckboxOpts,
      computeTooltipOpts,
      computeEditOpts,
      computeSortOpts,
      computeFilterOpts,
      computeMouseOpts,
      computeAreaOpts,
      computeKeyboardOpts,
      computeClipOpts,
      computeFNROpts,
      computeHeaderMenu,
      computeBodyMenu,
      computeFooterMenu,
      computeIsMenu,
      computeMenuOpts,
      computeExportOpts,
      computeImportOpts,
      computePrintOpts,
      computeExpandOpts,
      computeTreeOpts,
      computeEmptyOpts,
      computeCustomOpts,
      computeIsAllCheckboxDisabled
    };
    var $xetable = {
      xID,
      props,
      context,
      instance,
      reactData,
      internalData,
      getRefMaps: function() {
        return refMaps;
      },
      getComputeMaps: function() {
        return computeMaps;
      },
      xegrid: $xegrid
    };
    var eqCellValue = function(row1, row2, field) {
      var val1 = xeUtils.get(row1, field);
      var val2 = xeUtils.get(row2, field);
      if (eqEmptyValue(val1) && eqEmptyValue(val2)) {
        return true;
      }
      if (xeUtils.isString(val1) || xeUtils.isNumber(val1)) {
        return val1 == val2;
      }
      return xeUtils.isEqual(val1, val2);
    };
    var getNextSortOrder = function(column) {
      var sortOpts = computeSortOpts.value;
      var orders = sortOpts.orders;
      var currOrder = column.order || null;
      var oIndex = orders.indexOf(currOrder) + 1;
      return orders[oIndex < orders.length ? oIndex : 0];
    };
    var getCustomStorageMap = function(key) {
      var version = GlobalConfig.version;
      var rest = xeUtils.toStringJSON(localStorage.getItem(key) || "");
      return rest && rest._v === version ? rest : { _v: version };
    };
    var getRecoverRow = function(list) {
      var fullAllDataRowIdData = internalData.fullAllDataRowIdData;
      return list.filter(function(row) {
        var rowid = getRowid($xetable, row);
        return !!fullAllDataRowIdData[rowid];
      });
    };
    var handleReserveRow = function(reserveRowMap) {
      var fullDataRowIdData = internalData.fullDataRowIdData;
      var reserveList = [];
      xeUtils.each(reserveRowMap, function(item, rowid) {
        if (fullDataRowIdData[rowid] && $xetable.findRowIndexOf(reserveList, fullDataRowIdData[rowid].row) === -1) {
          reserveList.push(fullDataRowIdData[rowid].row);
        }
      });
      return reserveList;
    };
    var computeVirtualX = function() {
      var visibleColumn = internalData.visibleColumn;
      var tableBody = refTableBody.value;
      var tableBodyElem = tableBody ? tableBody.$el : null;
      if (tableBodyElem) {
        var scrollLeft = tableBodyElem.scrollLeft, clientWidth = tableBodyElem.clientWidth;
        var endWidth = scrollLeft + clientWidth;
        var toVisibleIndex = -1;
        var cWidth = 0;
        var visibleSize = 0;
        for (var colIndex = 0, colLen = visibleColumn.length; colIndex < colLen; colIndex++) {
          cWidth += visibleColumn[colIndex].renderWidth;
          if (toVisibleIndex === -1 && scrollLeft < cWidth) {
            toVisibleIndex = colIndex;
          }
          if (toVisibleIndex >= 0) {
            visibleSize++;
            if (cWidth > endWidth) {
              break;
            }
          }
        }
        return { toVisibleIndex: Math.max(0, toVisibleIndex), visibleSize: Math.max(8, visibleSize) };
      }
      return { toVisibleIndex: 0, visibleSize: 8 };
    };
    var computeVirtualY = function() {
      var tableHeader = refTableHeader.value;
      var tableBody = refTableBody.value;
      var tableBodyElem = tableBody ? tableBody.$el : null;
      var vSize = computeSize.value;
      var rowHeightMaps = computeRowHeightMaps.value;
      if (tableBodyElem) {
        var tableHeaderElem = tableHeader ? tableHeader.$el : null;
        var rowHeight = 0;
        var firstTrElem = void 0;
        firstTrElem = tableBodyElem.querySelector("tr");
        if (!firstTrElem && tableHeaderElem) {
          firstTrElem = tableHeaderElem.querySelector("tr");
        }
        if (firstTrElem) {
          rowHeight = firstTrElem.clientHeight;
        }
        if (!rowHeight) {
          rowHeight = rowHeightMaps[vSize || "default"];
        }
        var visibleSize = Math.max(8, Math.ceil(tableBodyElem.clientHeight / rowHeight) + 2);
        return { rowHeight, visibleSize };
      }
      return { rowHeight: 0, visibleSize: 8 };
    };
    var calculateMergerOffserIndex = function(list, offsetItem, type) {
      for (var mcIndex = 0, len = list.length; mcIndex < len; mcIndex++) {
        var mergeItem = list[mcIndex];
        var startIndex = offsetItem.startIndex, endIndex = offsetItem.endIndex;
        var mergeStartIndex = mergeItem[type];
        var mergeSpanNumber = mergeItem[type + "span"];
        var mergeEndIndex = mergeStartIndex + mergeSpanNumber;
        if (mergeStartIndex < startIndex && startIndex < mergeEndIndex) {
          offsetItem.startIndex = mergeStartIndex;
        }
        if (mergeStartIndex < endIndex && endIndex < mergeEndIndex) {
          offsetItem.endIndex = mergeEndIndex;
        }
        if (offsetItem.startIndex !== startIndex || offsetItem.endIndex !== endIndex) {
          mcIndex = -1;
        }
      }
    };
    var setMerges = function(merges, mList, rowList) {
      if (merges) {
        var treeConfig = props.treeConfig;
        var visibleColumn_1 = internalData.visibleColumn;
        if (treeConfig) {
          errLog("vxe.error.noTree", ["merge-footer-items"]);
          return;
        }
        if (!xeUtils.isArray(merges)) {
          merges = [merges];
        }
        merges.forEach(function(item) {
          var row = item.row, col = item.col, rowspan = item.rowspan, colspan = item.colspan;
          if (rowList && xeUtils.isNumber(row)) {
            row = rowList[row];
          }
          if (xeUtils.isNumber(col)) {
            col = visibleColumn_1[col];
          }
          if ((rowList ? row : xeUtils.isNumber(row)) && col && (rowspan || colspan)) {
            rowspan = xeUtils.toNumber(rowspan) || 1;
            colspan = xeUtils.toNumber(colspan) || 1;
            if (rowspan > 1 || colspan > 1) {
              var mcIndex = xeUtils.findIndexOf(mList, function(item2) {
                return (item2._row === row || getRowid($xetable, item2._row) === getRowid($xetable, row)) && (item2._col.id === col || item2._col.id === col.id);
              });
              var mergeItem = mList[mcIndex];
              if (mergeItem) {
                mergeItem.rowspan = rowspan;
                mergeItem.colspan = colspan;
                mergeItem._rowspan = rowspan;
                mergeItem._colspan = colspan;
              } else {
                var mergeRowIndex = rowList ? $xetable.findRowIndexOf(rowList, row) : row;
                var mergeColIndex = tableMethods.getVTColumnIndex(col);
                mList.push({
                  row: mergeRowIndex,
                  col: mergeColIndex,
                  rowspan,
                  colspan,
                  _row: row,
                  _col: col,
                  _rowspan: rowspan,
                  _colspan: colspan
                });
              }
            }
          }
        });
      }
    };
    var removeMerges = function(merges, mList, rowList) {
      var rest = [];
      if (merges) {
        var treeConfig = props.treeConfig;
        var visibleColumn_2 = internalData.visibleColumn;
        if (treeConfig) {
          throw new Error(getLog("vxe.error.noTree", ["merge-cells"]));
        }
        if (!xeUtils.isArray(merges)) {
          merges = [merges];
        }
        merges.forEach(function(item) {
          var row = item.row, col = item.col;
          if (rowList && xeUtils.isNumber(row)) {
            row = rowList[row];
          }
          if (xeUtils.isNumber(col)) {
            col = visibleColumn_2[col];
          }
          var mcIndex = xeUtils.findIndexOf(mList, function(item2) {
            return (item2._row === row || getRowid($xetable, item2._row) === getRowid($xetable, row)) && (item2._col.id === col || item2._col.id === col.id);
          });
          if (mcIndex > -1) {
            var rItems = mList.splice(mcIndex, 1);
            rest.push(rItems[0]);
          }
        });
      }
      return rest;
    };
    var clearAllSort = function() {
      var tableFullColumn = internalData.tableFullColumn;
      tableFullColumn.forEach(function(column) {
        column.order = null;
      });
    };
    var calcHeight = function(key) {
      var parentHeight = reactData.parentHeight;
      var val = props[key];
      var num = 0;
      if (val) {
        if (val === "auto") {
          num = parentHeight;
        } else {
          var excludeHeight = $xetable.getExcludeHeight();
          if (isScale(val)) {
            num = Math.floor((xeUtils.toInteger(val) || 1) / 100 * parentHeight);
          } else {
            num = xeUtils.toNumber(val);
          }
          num = Math.max(40, num - excludeHeight);
        }
      }
      return num;
    };
    var restoreCustomStorage = function() {
      var id = props.id, customConfig = props.customConfig;
      var collectColumn = internalData.collectColumn;
      var customOpts = computeCustomOpts.value;
      var storage = customOpts.storage;
      var isResizable = storage === true || storage && storage.resizable;
      var isVisible = storage === true || storage && storage.visible;
      if (customConfig && (isResizable || isVisible)) {
        var customMap_1 = {};
        if (!id) {
          errLog("vxe.error.reqProp", ["id"]);
          return;
        }
        if (isResizable) {
          var columnWidthStorage = getCustomStorageMap(resizableStorageKey)[id];
          if (columnWidthStorage) {
            xeUtils.each(columnWidthStorage, function(resizeWidth, field) {
              customMap_1[field] = { field, resizeWidth };
            });
          }
        }
        if (isVisible) {
          var columnVisibleStorage = getCustomStorageMap(visibleStorageKey)[id];
          if (columnVisibleStorage) {
            var colVisibles = columnVisibleStorage.split("|");
            var colHides = colVisibles[0] ? colVisibles[0].split(",") : [];
            var colShows = colVisibles[1] ? colVisibles[1].split(",") : [];
            colHides.forEach(function(field) {
              if (customMap_1[field]) {
                customMap_1[field].visible = false;
              } else {
                customMap_1[field] = { field, visible: false };
              }
            });
            colShows.forEach(function(field) {
              if (customMap_1[field]) {
                customMap_1[field].visible = true;
              } else {
                customMap_1[field] = { field, visible: true };
              }
            });
          }
        }
        var keyMap_1 = {};
        xeUtils.eachTree(collectColumn, function(column) {
          var colKey = column.getKey();
          if (colKey) {
            keyMap_1[colKey] = column;
          }
        });
        xeUtils.each(customMap_1, function(_a, field) {
          var visible = _a.visible, resizeWidth = _a.resizeWidth;
          var column = keyMap_1[field];
          if (column) {
            if (xeUtils.isNumber(resizeWidth)) {
              column.resizeWidth = resizeWidth;
            }
            if (xeUtils.isBoolean(visible)) {
              column.visible = visible;
            }
          }
        });
      }
    };
    var cacheColumnMap = function() {
      var tableFullColumn = internalData.tableFullColumn, collectColumn = internalData.collectColumn;
      var fullColumnIdData = internalData.fullColumnIdData = {};
      var fullColumnFieldData = internalData.fullColumnFieldData = {};
      computeMouseOpts.value;
      var isGroup = collectColumn.some(hasChildrenList);
      var isAllOverflow = !!props.showOverflow;
      var expandColumn;
      var treeNodeColumn;
      var handleFunc = function(column, index, items, path, parent) {
        var colid = column.id, property = column.property;
        column.fixed;
        var type = column.type, treeNode = column.treeNode;
        var rest = { column, colid, index, items, parent };
        if (property) {
          fullColumnFieldData[property] = rest;
        }
        if (treeNode) {
          if (!treeNodeColumn) {
            treeNodeColumn = column;
          }
        } else if (type === "expand") {
          if (!expandColumn) {
            expandColumn = column;
          }
        }
        if (isAllOverflow && column.showOverflow === false) {
          isAllOverflow = false;
        }
        if (fullColumnIdData[colid]) {
          errLog("vxe.error.colRepet", ["colId", colid]);
        }
        fullColumnIdData[colid] = rest;
      };
      if (isGroup) {
        xeUtils.eachTree(collectColumn, function(column, index, items, path, parent, nodes) {
          column.level = nodes.length;
          handleFunc(column, index, items, path, parent);
        });
      } else {
        tableFullColumn.forEach(handleFunc);
      }
      reactData.isGroup = isGroup;
      reactData.treeNodeColumn = treeNodeColumn;
      reactData.expandColumn = expandColumn;
      reactData.isAllOverflow = isAllOverflow;
    };
    var updateHeight = function() {
      internalData.customHeight = calcHeight("height");
      internalData.customMaxHeight = calcHeight("maxHeight");
    };
    var autoCellWidth = function(headerElem, bodyElem, footerElem) {
      var tableWidth = 0;
      var minCellWidth = 40;
      var bodyWidth = bodyElem.clientWidth - 1;
      var remainWidth = bodyWidth;
      var meanWidth = remainWidth / 100;
      var fit = props.fit;
      var columnStore = reactData.columnStore;
      var resizeList = columnStore.resizeList, pxMinList = columnStore.pxMinList, pxList = columnStore.pxList, scaleList = columnStore.scaleList, scaleMinList = columnStore.scaleMinList, autoList = columnStore.autoList;
      pxMinList.forEach(function(column) {
        var minWidth = parseInt(column.minWidth);
        tableWidth += minWidth;
        column.renderWidth = minWidth;
      });
      scaleMinList.forEach(function(column) {
        var scaleWidth = Math.floor(parseInt(column.minWidth) * meanWidth);
        tableWidth += scaleWidth;
        column.renderWidth = scaleWidth;
      });
      scaleList.forEach(function(column) {
        var scaleWidth = Math.floor(parseInt(column.width) * meanWidth);
        tableWidth += scaleWidth;
        column.renderWidth = scaleWidth;
      });
      pxList.forEach(function(column) {
        var width = parseInt(column.width);
        tableWidth += width;
        column.renderWidth = width;
      });
      resizeList.forEach(function(column) {
        var width = parseInt(column.resizeWidth);
        tableWidth += width;
        column.renderWidth = width;
      });
      remainWidth -= tableWidth;
      meanWidth = remainWidth > 0 ? Math.floor(remainWidth / (scaleMinList.length + pxMinList.length + autoList.length)) : 0;
      if (fit) {
        if (remainWidth > 0) {
          scaleMinList.concat(pxMinList).forEach(function(column) {
            tableWidth += meanWidth;
            column.renderWidth += meanWidth;
          });
        }
      } else {
        meanWidth = minCellWidth;
      }
      autoList.forEach(function(column) {
        var width = Math.max(meanWidth, minCellWidth);
        column.renderWidth = width;
        tableWidth += width;
      });
      if (fit) {
        var dynamicList = scaleList.concat(scaleMinList).concat(pxMinList).concat(autoList);
        var dynamicSize = dynamicList.length - 1;
        if (dynamicSize > 0) {
          var odiffer = bodyWidth - tableWidth;
          if (odiffer > 0) {
            while (odiffer > 0 && dynamicSize >= 0) {
              odiffer--;
              dynamicList[dynamicSize--].renderWidth++;
            }
            tableWidth = bodyWidth;
          }
        }
      }
      var tableHeight = bodyElem.offsetHeight;
      var overflowY = bodyElem.scrollHeight > bodyElem.clientHeight;
      var scrollbarWidth = 0;
      if (overflowY) {
        scrollbarWidth = Math.max(bodyElem.offsetWidth - bodyElem.clientWidth, 0);
      }
      reactData.scrollbarWidth = scrollbarWidth;
      reactData.overflowY = overflowY;
      internalData.tableWidth = tableWidth;
      internalData.tableHeight = tableHeight;
      var headerHeight = 0;
      if (headerElem) {
        headerHeight = headerElem.clientHeight;
        nextTick(function() {
          if (headerElem && bodyElem && headerElem.scrollLeft !== bodyElem.scrollLeft) {
            headerElem.scrollLeft = bodyElem.scrollLeft;
          }
        });
      }
      internalData.headerHeight = headerHeight;
      var overflowX = false;
      var footerHeight = 0;
      var scrollbarHeight = 0;
      if (footerElem) {
        footerHeight = footerElem.offsetHeight;
        overflowX = tableWidth > footerElem.clientWidth;
        if (overflowX) {
          scrollbarHeight = Math.max(footerHeight - footerElem.clientHeight, 0);
        }
      } else {
        overflowX = tableWidth > bodyWidth;
        if (overflowX) {
          scrollbarHeight = Math.max(tableHeight - bodyElem.clientHeight, 0);
        }
      }
      internalData.footerHeight = footerHeight;
      reactData.overflowX = overflowX;
      reactData.scrollbarHeight = scrollbarHeight;
      updateHeight();
      reactData.parentHeight = Math.max(internalData.headerHeight + footerHeight + 20, tablePrivateMethods.getParentHeight());
      if (overflowX) {
        tablePrivateMethods.checkScrolling();
      }
    };
    var getOrderField = function(column) {
      var sortBy = column.sortBy, sortType = column.sortType;
      return function(row) {
        var cellValue;
        if (sortBy) {
          cellValue = xeUtils.isFunction(sortBy) ? sortBy({ row, column }) : xeUtils.get(row, sortBy);
        } else {
          cellValue = tablePrivateMethods.getCellLabel(row, column);
        }
        if (!sortType || sortType === "auto") {
          return isNaN(cellValue) ? cellValue : xeUtils.toNumber(cellValue);
        } else if (sortType === "number") {
          return xeUtils.toNumber(cellValue);
        } else if (sortType === "string") {
          return xeUtils.toValueString(cellValue);
        }
        return cellValue;
      };
    };
    var updateAfterDataIndex = function() {
      var afterFullData = internalData.afterFullData, fullDataRowIdData = internalData.fullDataRowIdData;
      afterFullData.forEach(function(row, _index) {
        var rowid = getRowid($xetable, row);
        var rest = fullDataRowIdData[rowid];
        if (rest) {
          rest._index = _index;
        } else {
          fullDataRowIdData[rowid] = { row, rowid, index: -1, $index: -1, _index, items: [], parent: null };
        }
      });
    };
    var updateAfterFullData = function() {
      var tableFullColumn = internalData.tableFullColumn, tableFullData = internalData.tableFullData;
      var filterOpts = computeFilterOpts.value;
      var sortOpts = computeSortOpts.value;
      var allRemoteFilter = filterOpts.remote, allFilterMethod = filterOpts.filterMethod;
      var allRemoteSort = sortOpts.remote, allSortMethod = sortOpts.sortMethod;
      var tableData = tableFullData.slice(0);
      if (!allRemoteFilter || !allRemoteSort) {
        var filterColumns_1 = [];
        var orderColumns_1 = [];
        tableFullColumn.forEach(function(column) {
          var sortable = column.sortable, order = column.order, filters = column.filters;
          if (!allRemoteFilter && filters && filters.length) {
            var valueList_1 = [];
            var itemList_1 = [];
            filters.forEach(function(item) {
              if (item.checked) {
                itemList_1.push(item);
                valueList_1.push(item.value);
              }
            });
            if (itemList_1.length) {
              filterColumns_1.push({ column, valueList: valueList_1, itemList: itemList_1 });
            }
          }
          if (!allRemoteSort && sortable && order) {
            orderColumns_1.push({ column, property: column.property, order });
          }
        });
        if (!allRemoteFilter && filterColumns_1.length) {
          tableData = tableData.filter(function(row) {
            return filterColumns_1.every(function(_a) {
              var column = _a.column, valueList = _a.valueList, itemList = _a.itemList;
              var filterMethod = column.filterMethod, filterRender = column.filterRender;
              var compConf = filterRender ? VXETable.renderer.get(filterRender.name) : null;
              var compFilterMethod = compConf ? compConf.filterMethod : null;
              var defaultFilterMethod = compConf ? compConf.defaultFilterMethod : null;
              var cellValue = getCellValue(row, column);
              if (filterMethod) {
                return itemList.some(function(item) {
                  return filterMethod({ value: item.value, option: item, cellValue, row, column, $table: $xetable });
                });
              } else if (compFilterMethod) {
                return itemList.some(function(item) {
                  return compFilterMethod({ value: item.value, option: item, cellValue, row, column, $table: $xetable });
                });
              } else if (allFilterMethod) {
                return allFilterMethod({ options: itemList, values: valueList, cellValue, row, column });
              } else if (defaultFilterMethod) {
                return itemList.some(function(item) {
                  return defaultFilterMethod({ value: item.value, option: item, cellValue, row, column, $table: $xetable });
                });
              }
              return valueList.indexOf(xeUtils.get(row, column.property)) > -1;
            });
          });
        }
        if (!allRemoteSort && orderColumns_1.length) {
          if (allSortMethod) {
            var sortRests = allSortMethod({ data: tableData, sortList: orderColumns_1, $table: $xetable });
            tableData = xeUtils.isArray(sortRests) ? sortRests : tableData;
          } else {
            tableData = xeUtils.orderBy(tableData, orderColumns_1.map(function(_a) {
              var column = _a.column, order = _a.order;
              return [getOrderField(column), order];
            }));
          }
        }
      }
      internalData.afterFullData = tableData;
      updateAfterDataIndex();
      return tableData;
    };
    var updateStyle = function() {
      var border = props.border, showFooter = props.showFooter, allColumnOverflow = props.showOverflow, allColumnHeaderOverflow = props.showHeaderOverflow, allColumnFooterOverflow = props.showFooterOverflow, mouseConfig = props.mouseConfig, spanMethod = props.spanMethod, footerSpanMethod = props.footerSpanMethod, keyboardConfig = props.keyboardConfig;
      var isGroup = reactData.isGroup, currentRow = reactData.currentRow, tableColumn = reactData.tableColumn, scrollXLoad = reactData.scrollXLoad, scrollYLoad = reactData.scrollYLoad, scrollbarWidth = reactData.scrollbarWidth, scrollbarHeight = reactData.scrollbarHeight, columnStore = reactData.columnStore, editStore = reactData.editStore, mergeList = reactData.mergeList, mergeFooterList = reactData.mergeFooterList, isAllOverflow = reactData.isAllOverflow;
      var visibleColumn = internalData.visibleColumn, fullColumnIdData = internalData.fullColumnIdData, tableHeight = internalData.tableHeight, tableWidth = internalData.tableWidth, headerHeight = internalData.headerHeight, footerHeight = internalData.footerHeight, elemStore = internalData.elemStore, customHeight = internalData.customHeight, customMaxHeight = internalData.customMaxHeight;
      var containerList = ["main", "left", "right"];
      var emptyPlaceholderElem = refEmptyPlaceholder.value;
      var cellOffsetWidth = computeCellOffsetWidth.value;
      var mouseOpts = computeMouseOpts.value;
      var keyboardOpts = computeKeyboardOpts.value;
      var bodyWrapperElem = elemStore["main-body-wrapper"];
      if (emptyPlaceholderElem) {
        emptyPlaceholderElem.style.top = headerHeight + "px";
        emptyPlaceholderElem.style.height = bodyWrapperElem ? bodyWrapperElem.offsetHeight - scrollbarHeight + "px" : "";
      }
      if (customHeight > 0) {
        if (showFooter) {
          customHeight += scrollbarHeight;
        }
      }
      containerList.forEach(function(name, index) {
        var fixedType = index > 0 ? name : "";
        var layoutList = ["header", "body", "footer"];
        var isFixedLeft = fixedType === "left";
        var fixedColumn = [];
        var fixedWrapperElem;
        if (fixedType) {
          fixedColumn = isFixedLeft ? columnStore.leftList : columnStore.rightList;
          fixedWrapperElem = isFixedLeft ? refLeftContainer.value : refRightContainer.value;
        }
        layoutList.forEach(function(layout) {
          var wrapperElem = elemStore[name + "-" + layout + "-wrapper"];
          var tableElem = elemStore[name + "-" + layout + "-table"];
          if (layout === "header") {
            var tWidth = tableWidth;
            var isOptimize = false;
            if (!isGroup) {
              if (fixedType) {
                if (scrollXLoad || allColumnHeaderOverflow) {
                  isOptimize = true;
                }
              }
            }
            if (isOptimize) {
              tableColumn = fixedColumn;
            }
            if (isOptimize || scrollXLoad) {
              tWidth = tableColumn.reduce(function(previous, column) {
                return previous + column.renderWidth;
              }, 0);
            }
            if (tableElem) {
              tableElem.style.width = tWidth ? tWidth + scrollbarWidth + "px" : "";
              if (browse.msie) {
                xeUtils.arrayEach(tableElem.querySelectorAll(".vxe-resizable"), function(resizeElem) {
                  resizeElem.style.height = resizeElem.parentNode.offsetHeight + "px";
                });
              }
            }
            var repairElem = elemStore[name + "-" + layout + "-repair"];
            if (repairElem) {
              repairElem.style.width = tableWidth + "px";
            }
            var listElem = elemStore[name + "-" + layout + "-list"];
            if (isGroup && listElem) {
              xeUtils.arrayEach(listElem.querySelectorAll(".col--group"), function(thElem) {
                var colNode = tableMethods.getColumnNode(thElem);
                if (colNode) {
                  var column_1 = colNode.item;
                  var showHeaderOverflow = column_1.showHeaderOverflow;
                  var cellOverflow = xeUtils.isBoolean(showHeaderOverflow) ? showHeaderOverflow : allColumnHeaderOverflow;
                  var showEllipsis = cellOverflow === "ellipsis";
                  var showTitle = cellOverflow === "title";
                  var showTooltip = cellOverflow === true || cellOverflow === "tooltip";
                  var hasEllipsis = showTitle || showTooltip || showEllipsis;
                  var childWidth_1 = 0;
                  var countChild_1 = 0;
                  if (hasEllipsis) {
                    xeUtils.eachTree(column_1.children, function(item) {
                      if (!item.children || !column_1.children.length) {
                        countChild_1++;
                      }
                      childWidth_1 += item.renderWidth;
                    });
                  }
                  thElem.style.width = hasEllipsis ? childWidth_1 - countChild_1 - (border ? 2 : 0) + "px" : "";
                }
              });
            }
          } else if (layout === "body") {
            var emptyBlockElem = elemStore[name + "-" + layout + "-emptyBlock"];
            if (wrapperElem) {
              if (customMaxHeight) {
                wrapperElem.style.maxHeight = (fixedType ? customMaxHeight - headerHeight - (showFooter ? 0 : scrollbarHeight) : customMaxHeight - headerHeight) + "px";
              } else {
                if (customHeight > 0) {
                  wrapperElem.style.height = (fixedType ? (customHeight > 0 ? customHeight - headerHeight - footerHeight : tableHeight) - (showFooter ? 0 : scrollbarHeight) : customHeight - headerHeight - footerHeight) + "px";
                } else {
                  wrapperElem.style.height = "";
                }
              }
            }
            if (fixedWrapperElem) {
              if (wrapperElem) {
                wrapperElem.style.top = headerHeight + "px";
              }
              fixedWrapperElem.style.height = (customHeight > 0 ? customHeight - headerHeight - footerHeight : tableHeight) + headerHeight + footerHeight - scrollbarHeight * (showFooter ? 2 : 1) + "px";
              fixedWrapperElem.style.width = fixedColumn.reduce(function(previous, column) {
                return previous + column.renderWidth;
              }, isFixedLeft ? 0 : scrollbarWidth) + "px";
            }
            var tWidth = tableWidth;
            if (fixedType) {
              if (scrollXLoad || scrollYLoad || (allColumnOverflow ? isAllOverflow : allColumnOverflow)) {
                if (!mergeList.length && !spanMethod && !(keyboardConfig && keyboardOpts.isMerge)) {
                  tableColumn = fixedColumn;
                } else {
                  tableColumn = visibleColumn;
                }
              } else {
                tableColumn = visibleColumn;
              }
            }
            tWidth = tableColumn.reduce(function(previous, column) {
              return previous + column.renderWidth;
            }, 0);
            if (tableElem) {
              tableElem.style.width = tWidth ? tWidth + "px" : "";
              tableElem.style.paddingRight = scrollbarWidth && fixedType && (browse["-moz"] || browse.safari) ? scrollbarWidth + "px" : "";
            }
            if (emptyBlockElem) {
              emptyBlockElem.style.width = tWidth ? tWidth + "px" : "";
            }
          } else if (layout === "footer") {
            var tWidth = tableWidth;
            if (fixedType) {
              if (scrollXLoad || allColumnFooterOverflow) {
                if (!mergeFooterList.length || !footerSpanMethod) {
                  tableColumn = fixedColumn;
                } else {
                  tableColumn = visibleColumn;
                }
              } else {
                tableColumn = visibleColumn;
              }
            }
            tWidth = tableColumn.reduce(function(previous, column) {
              return previous + column.renderWidth;
            }, 0);
            if (wrapperElem) {
              if (fixedWrapperElem) {
                wrapperElem.style.top = (customHeight > 0 ? customHeight - footerHeight : tableHeight + headerHeight) + "px";
              }
              wrapperElem.style.marginTop = -Math.max(1, scrollbarHeight) + "px";
            }
            if (tableElem) {
              tableElem.style.width = tWidth ? tWidth + scrollbarWidth + "px" : "";
            }
          }
          var colgroupElem = elemStore[name + "-" + layout + "-colgroup"];
          if (colgroupElem) {
            xeUtils.arrayEach(colgroupElem.children, function(colElem) {
              var colid = colElem.getAttribute("name");
              if (colid === "col_gutter") {
                colElem.style.width = scrollbarWidth + "px";
              }
              if (fullColumnIdData[colid]) {
                var column_2 = fullColumnIdData[colid].column;
                var showHeaderOverflow = column_2.showHeaderOverflow, showFooterOverflow = column_2.showFooterOverflow, showOverflow = column_2.showOverflow;
                var cellOverflow = void 0;
                colElem.style.width = column_2.renderWidth + "px";
                if (layout === "header") {
                  cellOverflow = xeUtils.isUndefined(showHeaderOverflow) || xeUtils.isNull(showHeaderOverflow) ? allColumnHeaderOverflow : showHeaderOverflow;
                } else if (layout === "footer") {
                  cellOverflow = xeUtils.isUndefined(showFooterOverflow) || xeUtils.isNull(showFooterOverflow) ? allColumnFooterOverflow : showFooterOverflow;
                } else {
                  cellOverflow = xeUtils.isUndefined(showOverflow) || xeUtils.isNull(showOverflow) ? allColumnOverflow : showOverflow;
                }
                var showEllipsis = cellOverflow === "ellipsis";
                var showTitle = cellOverflow === "title";
                var showTooltip = cellOverflow === true || cellOverflow === "tooltip";
                var hasEllipsis_1 = showTitle || showTooltip || showEllipsis;
                var listElem2 = elemStore[name + "-" + layout + "-list"];
                if (layout === "header" || layout === "footer") {
                  if (scrollXLoad && !hasEllipsis_1) {
                    hasEllipsis_1 = true;
                  }
                } else {
                  if ((scrollXLoad || scrollYLoad) && !hasEllipsis_1) {
                    hasEllipsis_1 = true;
                  }
                }
                if (listElem2) {
                  xeUtils.arrayEach(listElem2.querySelectorAll("." + column_2.id), function(elem) {
                    var colspan = parseInt(elem.getAttribute("colspan") || 1);
                    var cellElem = elem.querySelector(".vxe-cell");
                    var colWidth = column_2.renderWidth;
                    if (cellElem) {
                      if (colspan > 1) {
                        var columnIndex = tableMethods.getColumnIndex(column_2);
                        for (var index_1 = 1; index_1 < colspan; index_1++) {
                          var nextColumn = tableMethods.getColumns(columnIndex + index_1);
                          if (nextColumn) {
                            colWidth += nextColumn.renderWidth;
                          }
                        }
                      }
                      cellElem.style.width = hasEllipsis_1 ? colWidth - cellOffsetWidth * colspan + "px" : "";
                    }
                  });
                }
              }
            });
          }
        });
      });
      if (currentRow) {
        tableMethods.setCurrentRow(currentRow);
      }
      if (mouseConfig && mouseOpts.selected && editStore.selected.row && editStore.selected.column) {
        $xetable.addCellSelectedClass();
      }
      return nextTick();
    };
    var checkValidate = function(type) {
      if ($xetable.triggerValidate) {
        return $xetable.triggerValidate(type);
      }
      return nextTick();
    };
    var handleChangeCell = function(evnt, params) {
      checkValidate("blur").catch(function(e) {
        return e;
      }).then(function() {
        $xetable.handleActived(params, evnt).then(function() {
          return checkValidate("change");
        }).catch(function(e) {
          return e;
        });
      });
    };
    var handleDefaultSort = function() {
      var sortConfig = props.sortConfig;
      if (sortConfig) {
        var sortOpts = computeSortOpts.value;
        var defaultSort = sortOpts.defaultSort;
        if (defaultSort) {
          if (!xeUtils.isArray(defaultSort)) {
            defaultSort = [defaultSort];
          }
          if (defaultSort.length) {
            (sortConfig.multiple ? defaultSort : defaultSort.slice(0, 1)).forEach(function(item) {
              var field = item.field, order = item.order;
              if (field && order) {
                var column = tableMethods.getColumnByField(field);
                if (column && column.sortable) {
                  column.order = order;
                }
              }
            });
            if (!sortOpts.remote) {
              tablePrivateMethods.handleTableData(true).then(updateStyle);
            }
          }
        }
      }
    };
    var handleDefaultSelectionChecked = function() {
      var checkboxConfig = props.checkboxConfig;
      if (checkboxConfig) {
        var fullDataRowIdData_1 = internalData.fullDataRowIdData;
        var checkboxOpts = computeCheckboxOpts.value;
        var checkAll = checkboxOpts.checkAll, checkRowKeys = checkboxOpts.checkRowKeys;
        if (checkAll) {
          tableMethods.setAllCheckboxRow(true);
        } else if (checkRowKeys) {
          var defSelection_1 = [];
          checkRowKeys.forEach(function(rowid) {
            if (fullDataRowIdData_1[rowid]) {
              defSelection_1.push(fullDataRowIdData_1[rowid].row);
            }
          });
          tableMethods.setCheckboxRow(defSelection_1, true);
        }
      }
    };
    var handleDefaultRadioChecked = function() {
      var _a;
      var radioConfig = props.radioConfig;
      if (radioConfig) {
        var fullDataRowIdData = internalData.fullDataRowIdData;
        var radioOpts = computeRadioOpts.value;
        var rowid = radioOpts.checkRowKey, reserve = radioOpts.reserve;
        if (rowid) {
          if (fullDataRowIdData[rowid]) {
            tableMethods.setRadioRow(fullDataRowIdData[rowid].row);
          }
          if (reserve) {
            var rowkey = getRowkey($xetable);
            internalData.radioReserveRow = (_a = {}, _a[rowkey] = rowid, _a);
          }
        }
      }
    };
    var handleDefaultRowExpand = function() {
      var expandConfig = props.expandConfig;
      if (expandConfig) {
        var fullDataRowIdData_2 = internalData.fullDataRowIdData;
        var expandOpts = computeExpandOpts.value;
        var expandAll = expandOpts.expandAll, expandRowKeys = expandOpts.expandRowKeys;
        if (expandAll) {
          tableMethods.setAllRowExpand(true);
        } else if (expandRowKeys) {
          var defExpandeds_1 = [];
          expandRowKeys.forEach(function(rowid) {
            if (fullDataRowIdData_2[rowid]) {
              defExpandeds_1.push(fullDataRowIdData_2[rowid].row);
            }
          });
          tableMethods.setRowExpand(defExpandeds_1, true);
        }
      }
    };
    var handleRadioReserveRow = function(row) {
      var radioOpts = computeRadioOpts.value;
      if (radioOpts.reserve) {
        internalData.radioReserveRow = row;
      }
    };
    var handleCheckboxReserveRow = function(row, checked) {
      var checkboxReserveRowMap = internalData.checkboxReserveRowMap;
      var checkboxOpts = computeCheckboxOpts.value;
      if (checkboxOpts.reserve) {
        var rowid = getRowid($xetable, row);
        if (checked) {
          checkboxReserveRowMap[rowid] = row;
        } else if (checkboxReserveRowMap[rowid]) {
          delete checkboxReserveRowMap[rowid];
        }
      }
    };
    var handleReserveStatus = function() {
      var treeConfig = props.treeConfig;
      var expandColumn = reactData.expandColumn, currentRow = reactData.currentRow, selectRow = reactData.selectRow, selection = reactData.selection, rowExpandeds = reactData.rowExpandeds, treeExpandeds = reactData.treeExpandeds;
      var fullDataRowIdData = internalData.fullDataRowIdData, fullAllDataRowIdData = internalData.fullAllDataRowIdData, radioReserveRow = internalData.radioReserveRow;
      var expandOpts = computeExpandOpts.value;
      var treeOpts = computeTreeOpts.value;
      var radioOpts = computeRadioOpts.value;
      var checkboxOpts = computeCheckboxOpts.value;
      if (selectRow && !fullAllDataRowIdData[getRowid($xetable, selectRow)]) {
        reactData.selectRow = null;
      }
      if (radioOpts.reserve && radioReserveRow) {
        var rowid = getRowid($xetable, radioReserveRow);
        if (fullDataRowIdData[rowid]) {
          tableMethods.setRadioRow(fullDataRowIdData[rowid].row);
        }
      }
      reactData.selection = getRecoverRow(selection);
      if (checkboxOpts.reserve) {
        tableMethods.setCheckboxRow(handleReserveRow(internalData.checkboxReserveRowMap), true);
      }
      if (currentRow && !fullAllDataRowIdData[getRowid($xetable, currentRow)]) {
        reactData.currentRow = null;
      }
      reactData.rowExpandeds = expandColumn ? getRecoverRow(rowExpandeds) : [];
      if (expandColumn && expandOpts.reserve) {
        tableMethods.setRowExpand(handleReserveRow(internalData.rowExpandedReserveRowMap), true);
      }
      reactData.treeExpandeds = treeConfig ? getRecoverRow(treeExpandeds) : [];
      if (treeConfig && treeOpts.reserve) {
        tableMethods.setTreeExpand(handleReserveRow(internalData.treeExpandedReserveRowMap), true);
      }
    };
    var handleDefaultTreeExpand = function() {
      var treeConfig = props.treeConfig;
      if (treeConfig) {
        var tableFullData_1 = internalData.tableFullData;
        var treeOpts_1 = computeTreeOpts.value;
        var expandAll = treeOpts_1.expandAll, expandRowKeys = treeOpts_1.expandRowKeys;
        if (expandAll) {
          tableMethods.setAllTreeExpand(true);
        } else if (expandRowKeys) {
          var defExpandeds_2 = [];
          var rowkey_1 = getRowkey($xetable);
          expandRowKeys.forEach(function(rowid) {
            var matchObj = xeUtils.findTree(tableFullData_1, function(item) {
              return rowid === xeUtils.get(item, rowkey_1);
            }, treeOpts_1);
            if (matchObj) {
              defExpandeds_2.push(matchObj.item);
            }
          });
          tableMethods.setTreeExpand(defExpandeds_2, true);
        }
      }
    };
    var handleAsyncTreeExpandChilds = function(row) {
      var treeExpandeds = reactData.treeExpandeds, treeLazyLoadeds = reactData.treeLazyLoadeds;
      var fullAllDataRowIdData = internalData.fullAllDataRowIdData;
      var treeOpts = computeTreeOpts.value;
      var checkboxOpts = computeCheckboxOpts.value;
      var loadMethod = treeOpts.loadMethod;
      var checkStrictly = checkboxOpts.checkStrictly;
      var rest = fullAllDataRowIdData[getRowid($xetable, row)];
      return new Promise(function(resolve) {
        if (loadMethod) {
          treeLazyLoadeds.push(row);
          loadMethod({ $table: $xetable, row }).catch(function() {
            return [];
          }).then(function(childRecords) {
            rest.treeLoaded = true;
            xeUtils.remove(treeLazyLoadeds, function(item) {
              return $xetable.eqRow(item, row);
            });
            if (!xeUtils.isArray(childRecords)) {
              childRecords = [];
            }
            if (childRecords) {
              tableMethods.loadChildren(row, childRecords).then(function(childRows) {
                if (childRows.length && $xetable.findRowIndexOf(treeExpandeds, row) === -1) {
                  treeExpandeds.push(row);
                }
                if (!checkStrictly && tableMethods.isCheckedByCheckboxRow(row)) {
                  tableMethods.setCheckboxRow(childRows, true);
                }
              });
            }
            resolve(nextTick().then(function() {
              return tableMethods.recalculate();
            }));
          });
        } else {
          resolve();
        }
      });
    };
    var handleTreeExpandReserve = function(row, expanded) {
      var treeExpandedReserveRowMap = internalData.treeExpandedReserveRowMap;
      var treeOpts = computeTreeOpts.value;
      if (treeOpts.reserve) {
        var rowid = getRowid($xetable, row);
        if (expanded) {
          treeExpandedReserveRowMap[rowid] = row;
        } else if (treeExpandedReserveRowMap[rowid]) {
          delete treeExpandedReserveRowMap[rowid];
        }
      }
    };
    var handleAsyncRowExpand = function(row) {
      var rowExpandeds = reactData.rowExpandeds, expandLazyLoadeds = reactData.expandLazyLoadeds;
      var fullAllDataRowIdData = internalData.fullAllDataRowIdData;
      var rest = fullAllDataRowIdData[getRowid($xetable, row)];
      return new Promise(function(resolve) {
        var expandOpts = computeExpandOpts.value;
        var loadMethod = expandOpts.loadMethod;
        if (loadMethod) {
          expandLazyLoadeds.push(row);
          loadMethod({ $table: $xetable, row, rowIndex: tableMethods.getRowIndex(row), $rowIndex: tableMethods.getVMRowIndex(row) }).catch(function(e) {
            return e;
          }).then(function() {
            rest.expandLoaded = true;
            xeUtils.remove(expandLazyLoadeds, function(item) {
              return $xetable.eqRow(item, row);
            });
            rowExpandeds.push(row);
            resolve(nextTick().then(function() {
              return tableMethods.recalculate();
            }));
          });
        } else {
          resolve();
        }
      });
    };
    var handleRowExpandReserve = function(row, expanded) {
      var rowExpandedReserveRowMap = internalData.rowExpandedReserveRowMap;
      var expandOpts = computeExpandOpts.value;
      if (expandOpts.reserve) {
        var rowid = getRowid($xetable, row);
        if (expanded) {
          rowExpandedReserveRowMap[rowid] = row;
        } else if (rowExpandedReserveRowMap[rowid]) {
          delete rowExpandedReserveRowMap[rowid];
        }
      }
    };
    var handleDefaultMergeCells = function() {
      var mergeCells = props.mergeCells;
      if (mergeCells) {
        tableMethods.setMergeCells(mergeCells);
      }
    };
    var handleDefaultMergeFooterItems = function() {
      var mergeFooterItems = props.mergeFooterItems;
      if (mergeFooterItems) {
        tableMethods.setMergeFooterItems(mergeFooterItems);
      }
    };
    var computeScrollLoad = function() {
      return nextTick().then(function() {
        var scrollXLoad = reactData.scrollXLoad, scrollYLoad = reactData.scrollYLoad;
        var scrollXStore = internalData.scrollXStore, scrollYStore = internalData.scrollYStore;
        var sYOpts = computeSYOpts.value;
        var sXOpts = computeSXOpts.value;
        if (scrollXLoad) {
          var visibleXSize = computeVirtualX().visibleSize;
          var offsetXSize = sXOpts.oSize ? xeUtils.toNumber(sXOpts.oSize) : browse.msie ? 10 : browse.edge ? 5 : 0;
          scrollXStore.offsetSize = offsetXSize;
          scrollXStore.visibleSize = visibleXSize;
          scrollXStore.endIndex = Math.max(scrollXStore.startIndex + scrollXStore.visibleSize + offsetXSize, scrollXStore.endIndex);
          tablePrivateMethods.updateScrollXData();
        } else {
          tablePrivateMethods.updateScrollXSpace();
        }
        var _a = computeVirtualY(), rowHeight = _a.rowHeight, visibleYSize = _a.visibleSize;
        scrollYStore.rowHeight = rowHeight;
        if (scrollYLoad) {
          var offsetYSize = sYOpts.oSize ? xeUtils.toNumber(sYOpts.oSize) : browse.msie ? 20 : browse.edge ? 10 : 0;
          scrollYStore.offsetSize = offsetYSize;
          scrollYStore.visibleSize = visibleYSize;
          scrollYStore.endIndex = Math.max(scrollYStore.startIndex + visibleYSize + offsetYSize, scrollYStore.endIndex);
          tablePrivateMethods.updateScrollYData();
        } else {
          tablePrivateMethods.updateScrollYSpace();
        }
        reactData.rowHeight = rowHeight;
        nextTick(updateStyle);
      });
    };
    var loadTableData = function(datas) {
      var keepSource = props.keepSource, treeConfig = props.treeConfig;
      var editStore = reactData.editStore, oldScrollYLoad = reactData.scrollYLoad;
      var scrollYStore = internalData.scrollYStore, scrollXStore = internalData.scrollXStore, lastScrollLeft = internalData.lastScrollLeft, lastScrollTop = internalData.lastScrollTop;
      var sYOpts = computeSYOpts.value;
      var treeOpts = computeTreeOpts.value;
      if (treeConfig && treeOpts.transform) {
        datas = xeUtils.toArrayTree(datas, { key: treeOpts.rowtKey, parentKey: treeOpts.parentKey, children: treeOpts.children });
      }
      var tableFullData = datas ? datas.slice(0) : [];
      var scrollYLoad = !treeConfig && !!sYOpts.enabled && sYOpts.gt > -1 && sYOpts.gt < tableFullData.length;
      scrollYStore.startIndex = 0;
      scrollYStore.endIndex = 1;
      scrollXStore.startIndex = 0;
      scrollXStore.endIndex = 1;
      editStore.insertList = [];
      editStore.removeList = [];
      internalData.tableFullData = tableFullData;
      tablePrivateMethods.updateCache(true);
      internalData.tableSynchData = datas;
      if (keepSource) {
        internalData.tableSourceData = xeUtils.clone(tableFullData, true);
      }
      reactData.scrollYLoad = scrollYLoad;
      if ($xetable.clearCellAreas && props.mouseConfig) {
        $xetable.clearCellAreas();
        $xetable.clearCopyCellArea();
      }
      tableMethods.clearMergeCells();
      tableMethods.clearMergeFooterItems();
      tablePrivateMethods.handleTableData(true);
      tableMethods.updateFooter();
      return nextTick().then(function() {
        updateHeight();
        updateStyle();
      }).then(function() {
        computeScrollLoad();
      }).then(function() {
        if (scrollYLoad) {
          scrollYStore.endIndex = scrollYStore.visibleSize;
        }
        handleReserveStatus();
        tablePrivateMethods.checkSelectionStatus();
        return new Promise(function(resolve) {
          nextTick().then(function() {
            return tableMethods.recalculate();
          }).then(function() {
            if (oldScrollYLoad === scrollYLoad) {
              restoreScrollLocation($xetable, lastScrollLeft, lastScrollTop).then(resolve);
            } else {
              setTimeout(function() {
                return restoreScrollLocation($xetable, lastScrollLeft, lastScrollTop).then(resolve);
              });
            }
          });
        });
      });
    };
    var handleLoadDefaults = function() {
      handleDefaultSelectionChecked();
      handleDefaultRadioChecked();
      handleDefaultRowExpand();
      handleDefaultTreeExpand();
      handleDefaultMergeCells();
      handleDefaultMergeFooterItems();
      nextTick(function() {
        return setTimeout(function() {
          return tableMethods.recalculate();
        });
      });
    };
    var handleInitDefaults = function() {
      handleDefaultSort();
    };
    var handleTableColumn = function() {
      var scrollXLoad = reactData.scrollXLoad;
      var visibleColumn = internalData.visibleColumn, scrollXStore = internalData.scrollXStore, fullColumnIdData = internalData.fullColumnIdData;
      var tableColumn = scrollXLoad ? visibleColumn.slice(scrollXStore.startIndex, scrollXStore.endIndex) : visibleColumn.slice(0);
      tableColumn.forEach(function(column, $index) {
        var colid = column.id;
        var rest = fullColumnIdData[colid];
        if (rest) {
          rest.$index = $index;
        }
      });
      reactData.tableColumn = tableColumn;
    };
    var loadScrollXData = function() {
      var mergeList = reactData.mergeList, mergeFooterList = reactData.mergeFooterList;
      var scrollXStore = internalData.scrollXStore;
      var startIndex = scrollXStore.startIndex, endIndex = scrollXStore.endIndex, offsetSize = scrollXStore.offsetSize;
      var _a = computeVirtualX(), toVisibleIndex = _a.toVisibleIndex, visibleSize = _a.visibleSize;
      var offsetItem = {
        startIndex: Math.max(0, toVisibleIndex - 1 - offsetSize),
        endIndex: toVisibleIndex + visibleSize + offsetSize
      };
      calculateMergerOffserIndex(mergeList.concat(mergeFooterList), offsetItem, "col");
      var offsetStartIndex = offsetItem.startIndex, offsetEndIndex = offsetItem.endIndex;
      if (toVisibleIndex <= startIndex || toVisibleIndex >= endIndex - visibleSize - 1) {
        if (startIndex !== offsetStartIndex || endIndex !== offsetEndIndex) {
          scrollXStore.startIndex = offsetStartIndex;
          scrollXStore.endIndex = offsetEndIndex;
          tablePrivateMethods.updateScrollXData();
        }
      }
      tableMethods.closeTooltip();
    };
    var getColumnList = function(columns) {
      var result = [];
      columns.forEach(function(column) {
        result.push.apply(result, column.children && column.children.length ? getColumnList(column.children) : [column]);
      });
      return result;
    };
    var parseColumns = function() {
      var leftList = [];
      var centerList = [];
      var rightList = [];
      var isGroup = reactData.isGroup, columnStore = reactData.columnStore;
      var sXOpts = computeSXOpts.value;
      var collectColumn = internalData.collectColumn, tableFullColumn = internalData.tableFullColumn, scrollXStore = internalData.scrollXStore, fullColumnIdData = internalData.fullColumnIdData;
      if (isGroup) {
        var leftGroupList_1 = [];
        var centerGroupList_1 = [];
        var rightGroupList_1 = [];
        xeUtils.eachTree(collectColumn, function(column, index, items, path, parent) {
          var isColGroup = hasChildrenList(column);
          if (parent && parent.fixed) {
            column.fixed = parent.fixed;
          }
          if (parent && column.fixed !== parent.fixed) {
            errLog("vxe.error.groupFixed");
          }
          if (isColGroup) {
            column.visible = !!xeUtils.findTree(column.children, function(subColumn) {
              return hasChildrenList(subColumn) ? false : subColumn.visible;
            });
          } else if (column.visible) {
            if (column.fixed === "left") {
              leftList.push(column);
            } else if (column.fixed === "right") {
              rightList.push(column);
            } else {
              centerList.push(column);
            }
          }
        });
        collectColumn.forEach(function(column) {
          if (column.visible) {
            if (column.fixed === "left") {
              leftGroupList_1.push(column);
            } else if (column.fixed === "right") {
              rightGroupList_1.push(column);
            } else {
              centerGroupList_1.push(column);
            }
          }
        });
        reactData.tableGroupColumn = leftGroupList_1.concat(centerGroupList_1).concat(rightGroupList_1);
      } else {
        tableFullColumn.forEach(function(column) {
          if (column.visible) {
            if (column.fixed === "left") {
              leftList.push(column);
            } else if (column.fixed === "right") {
              rightList.push(column);
            } else {
              centerList.push(column);
            }
          }
        });
      }
      var visibleColumn = leftList.concat(centerList).concat(rightList);
      var scrollXLoad = !!sXOpts.enabled && sXOpts.gt > -1 && sXOpts.gt < tableFullColumn.length;
      reactData.hasFixedColumn = leftList.length > 0 || rightList.length > 0;
      Object.assign(columnStore, { leftList, centerList, rightList });
      if (scrollXLoad && isGroup) {
        scrollXLoad = false;
      }
      if (scrollXLoad) {
        var visibleSize = computeVirtualX().visibleSize;
        scrollXStore.startIndex = 0;
        scrollXStore.endIndex = visibleSize;
        scrollXStore.visibleSize = visibleSize;
      }
      if (visibleColumn.length !== internalData.visibleColumn.length || !internalData.visibleColumn.every(function(column, index) {
        return column === visibleColumn[index];
      })) {
        tableMethods.clearMergeCells();
        tableMethods.clearMergeFooterItems();
      }
      reactData.scrollXLoad = scrollXLoad;
      visibleColumn.forEach(function(column, _index) {
        var colid = column.id;
        var rest = fullColumnIdData[colid];
        if (rest) {
          rest._index = _index;
        }
      });
      internalData.visibleColumn = visibleColumn;
      handleTableColumn();
      return tableMethods.updateFooter().then(function() {
        return tableMethods.recalculate();
      }).then(function() {
        tablePrivateMethods.updateCellAreas();
        return tableMethods.recalculate();
      });
    };
    var handleColumn = function(collectColumn) {
      internalData.collectColumn = collectColumn;
      var tableFullColumn = getColumnList(collectColumn);
      internalData.tableFullColumn = tableFullColumn;
      cacheColumnMap();
      restoreCustomStorage();
      parseColumns().then(function() {
        if (reactData.scrollXLoad) {
          loadScrollXData();
        }
      });
      tableMethods.clearMergeCells();
      tableMethods.clearMergeFooterItems();
      tablePrivateMethods.handleTableData(true);
      return nextTick().then(function() {
        if ($xetoolbar) {
          $xetoolbar.syncUpdate({ collectColumn, $table: $xetable });
        }
        return tableMethods.recalculate();
      });
    };
    var loadScrollYData = function(evnt) {
      var mergeList = reactData.mergeList;
      var scrollYStore = internalData.scrollYStore;
      var startIndex = scrollYStore.startIndex, endIndex = scrollYStore.endIndex, visibleSize = scrollYStore.visibleSize, offsetSize = scrollYStore.offsetSize, rowHeight = scrollYStore.rowHeight;
      var scrollBodyElem = evnt.currentTarget || evnt.target;
      var scrollTop = scrollBodyElem.scrollTop;
      var toVisibleIndex = Math.floor(scrollTop / rowHeight);
      var offsetItem = {
        startIndex: Math.max(0, toVisibleIndex - 1 - offsetSize),
        endIndex: toVisibleIndex + visibleSize + offsetSize
      };
      calculateMergerOffserIndex(mergeList, offsetItem, "row");
      var offsetStartIndex = offsetItem.startIndex, offsetEndIndex = offsetItem.endIndex;
      if (toVisibleIndex <= startIndex || toVisibleIndex >= endIndex - visibleSize - 1) {
        if (startIndex !== offsetStartIndex || endIndex !== offsetEndIndex) {
          scrollYStore.startIndex = offsetStartIndex;
          scrollYStore.endIndex = offsetEndIndex;
          tablePrivateMethods.updateScrollYData();
        }
      }
    };
    var debounceScrollY = xeUtils.debounce(function(evnt) {
      loadScrollYData(evnt);
    }, 20, { leading: false, trailing: true });
    var keyCtxTimeout;
    tableMethods = {
      dispatchEvent: function(type, params, evnt) {
        emit(type, Object.assign({ $table: $xetable, $event: evnt }, params));
      },
      clearAll: function() {
        return clearTableAllStatus($xetable);
      },
      syncData: function() {
        return nextTick().then(function() {
          reactData.tableData = [];
          emit("update:data", internalData.tableFullData);
          return nextTick();
        });
      },
      updateData: function() {
        return tablePrivateMethods.handleTableData(true).then(tableMethods.updateFooter).then(function() {
          return tableMethods.recalculate();
        });
      },
      loadData: function(datas) {
        var inited = internalData.inited, initStatus = internalData.initStatus;
        return loadTableData(datas).then(function() {
          internalData.inited = true;
          internalData.initStatus = true;
          if (!initStatus) {
            handleLoadDefaults();
          }
          if (!inited) {
            handleInitDefaults();
          }
          return tableMethods.recalculate();
        });
      },
      reloadData: function(datas) {
        var inited = internalData.inited;
        return tableMethods.clearAll().then(function() {
          internalData.inited = true;
          internalData.initStatus = true;
          return loadTableData(datas);
        }).then(function() {
          handleLoadDefaults();
          if (!inited) {
            handleInitDefaults();
          }
          return tableMethods.recalculate();
        });
      },
      reloadRow: function(row, record, field) {
        var keepSource = props.keepSource;
        var tableData = reactData.tableData;
        var tableSourceData = internalData.tableSourceData;
        if (keepSource) {
          var rowIndex = tableMethods.getRowIndex(row);
          var oRow = tableSourceData[rowIndex];
          if (oRow && row) {
            if (field) {
              xeUtils.set(oRow, field, xeUtils.get(record || row, field));
            } else {
              if (record) {
                tableSourceData[rowIndex] = record;
                xeUtils.clear(row, void 0);
                Object.assign(row, tablePrivateMethods.defineField(Object.assign({}, record)));
                tablePrivateMethods.updateCache(true);
              } else {
                xeUtils.destructuring(oRow, xeUtils.clone(row, true));
              }
            }
          }
          reactData.tableData = tableData.slice(0);
        }
        return nextTick();
      },
      loadChildren: function(row, childRecords) {
        return tableMethods.createData(childRecords).then(function(rows) {
          var keepSource = props.keepSource;
          var fullDataRowIdData = internalData.fullDataRowIdData, fullAllDataRowIdData = internalData.fullAllDataRowIdData;
          var tableSourceData = internalData.tableSourceData;
          var treeOpts = computeTreeOpts.value;
          var children = treeOpts.children;
          if (keepSource) {
            var rowid_1 = getRowid($xetable, row);
            var matchObj = xeUtils.findTree(tableSourceData, function(item) {
              return rowid_1 === getRowid($xetable, item);
            }, treeOpts);
            if (matchObj) {
              matchObj.item[children] = xeUtils.clone(rows, true);
            }
          }
          xeUtils.eachTree(rows, function(childRow, index, items, path, parent) {
            var rowid = getRowid($xetable, childRow);
            var rest = { row: childRow, rowid, index: -1, _index: -1, $index: -1, items, parent };
            fullDataRowIdData[rowid] = rest;
            fullAllDataRowIdData[rowid] = rest;
          }, treeOpts);
          row[children] = rows;
          return rows;
        });
      },
      loadColumn: function(columns) {
        var collectColumn = xeUtils.mapTree(columns, function(column) {
          return reactive(Cell.createColumn($xetable, column));
        });
        return handleColumn(collectColumn);
      },
      reloadColumn: function(columns) {
        return tableMethods.clearAll().then(function() {
          return tableMethods.loadColumn(columns);
        });
      },
      getRowNode: function(tr) {
        if (tr) {
          var fullAllDataRowIdData = internalData.fullAllDataRowIdData;
          var rowid = tr.getAttribute("rowid");
          if (rowid) {
            var rest = fullAllDataRowIdData[rowid];
            if (rest) {
              return { rowid: rest.rowid, item: rest.row, index: rest.index, items: rest.items, parent: rest.parent };
            }
          }
        }
        return null;
      },
      getColumnNode: function(cell) {
        if (cell) {
          var fullColumnIdData = internalData.fullColumnIdData;
          var colid = cell.getAttribute("colid");
          if (colid) {
            var rest = fullColumnIdData[colid];
            if (rest) {
              return { colid: rest.colid, item: rest.column, index: rest.index, items: rest.items, parent: rest.parent };
            }
          }
        }
        return null;
      },
      getRowIndex: function(row) {
        var fullDataRowIdData = internalData.fullDataRowIdData;
        if (row) {
          var rowid = getRowid($xetable, row);
          var rest = fullDataRowIdData[rowid];
          if (rest) {
            return rest.index;
          }
        }
        return -1;
      },
      getVTRowIndex: function(row) {
        var fullDataRowIdData = internalData.fullDataRowIdData;
        if (row) {
          var rowid = getRowid($xetable, row);
          var rest = fullDataRowIdData[rowid];
          if (rest) {
            return rest._index;
          }
        }
        return -1;
      },
      getVMRowIndex: function(row) {
        var fullDataRowIdData = internalData.fullDataRowIdData;
        if (row) {
          var rowid = getRowid($xetable, row);
          var rest = fullDataRowIdData[rowid];
          if (rest) {
            return rest.$index;
          }
        }
        return -1;
      },
      getColumnIndex: function(column) {
        var fullColumnIdData = internalData.fullColumnIdData;
        if (column) {
          var rest = fullColumnIdData[column.id];
          if (rest) {
            return rest.index;
          }
        }
        return -1;
      },
      getVTColumnIndex: function(column) {
        var fullColumnIdData = internalData.fullColumnIdData;
        if (column) {
          var rest = fullColumnIdData[column.id];
          if (rest) {
            return rest._index;
          }
        }
        return -1;
      },
      getVMColumnIndex: function(column) {
        var fullColumnIdData = internalData.fullColumnIdData;
        if (column) {
          var rest = fullColumnIdData[column.id];
          if (rest) {
            return rest.$index;
          }
        }
        return -1;
      },
      createData: function(records) {
        var treeConfig = props.treeConfig;
        var treeOpts = computeTreeOpts.value;
        var handleRrecord = function(record) {
          return reactive(tablePrivateMethods.defineField(Object.assign({}, record)));
        };
        var rows = treeConfig ? xeUtils.mapTree(records, handleRrecord, treeOpts) : records.map(handleRrecord);
        return nextTick().then(function() {
          return rows;
        });
      },
      createRow: function(records) {
        var isArr = xeUtils.isArray(records);
        if (!isArr) {
          records = [records];
        }
        return nextTick().then(function() {
          return tableMethods.createData(records).then(function(rows) {
            return isArr ? rows : rows[0];
          });
        });
      },
      revertData: function(rows, field) {
        var keepSource = props.keepSource;
        var tableSourceData = internalData.tableSourceData, tableFullData = internalData.tableFullData;
        if (!keepSource) {
          return nextTick();
        }
        var targetRows = rows;
        if (rows) {
          if (!xeUtils.isArray(rows)) {
            targetRows = [rows];
          }
        } else {
          targetRows = xeUtils.toArray($xetable.getUpdateRecords());
        }
        if (targetRows.length) {
          targetRows.forEach(function(row) {
            if (!tableMethods.isInsertByRow(row)) {
              var rowIndex = $xetable.findRowIndexOf(tableFullData, row);
              var oRow = tableSourceData[rowIndex];
              if (oRow && row) {
                if (field) {
                  xeUtils.set(row, field, xeUtils.clone(xeUtils.get(oRow, field), true));
                } else {
                  xeUtils.destructuring(row, xeUtils.clone(oRow, true));
                }
              }
            }
          });
        }
        if (rows) {
          return nextTick();
        }
        return tableMethods.reloadData(tableSourceData);
      },
      clearData: function(rows, field) {
        var tableFullData = internalData.tableFullData, visibleColumn = internalData.visibleColumn;
        if (!arguments.length) {
          rows = tableFullData;
        } else if (rows && !xeUtils.isArray(rows)) {
          rows = [rows];
        }
        if (field) {
          rows.forEach(function(row) {
            return xeUtils.set(row, field, null);
          });
        } else {
          rows.forEach(function(row) {
            visibleColumn.forEach(function(column) {
              if (column.property) {
                setCellValue(row, column, null);
              }
            });
          });
        }
        return nextTick();
      },
      isInsertByRow: function(row) {
        var editStore = reactData.editStore;
        return $xetable.findRowIndexOf(editStore.insertList, row) > -1;
      },
      removeInsertRow: function() {
        var editStore = reactData.editStore;
        return $xetable.remove(editStore.insertList);
      },
      isUpdateByRow: function(row, field) {
        var _a, _b;
        var keepSource = props.keepSource, treeConfig = props.treeConfig;
        var visibleColumn = internalData.visibleColumn, tableSourceData = internalData.tableSourceData, fullDataRowIdData = internalData.fullDataRowIdData;
        var treeOpts = computeTreeOpts.value;
        if (keepSource) {
          var oRow = void 0, property = void 0;
          var rowid_2 = getRowid($xetable, row);
          if (!fullDataRowIdData[rowid_2]) {
            return false;
          }
          if (treeConfig) {
            var children = treeOpts.children;
            var matchObj = xeUtils.findTree(tableSourceData, function(item) {
              return rowid_2 === getRowid($xetable, item);
            }, treeOpts);
            row = Object.assign({}, row, (_a = {}, _a[children] = null, _a));
            if (matchObj) {
              oRow = Object.assign({}, matchObj.item, (_b = {}, _b[children] = null, _b));
            }
          } else {
            var oRowIndex = fullDataRowIdData[rowid_2].index;
            oRow = tableSourceData[oRowIndex];
          }
          if (oRow) {
            if (arguments.length > 1) {
              return !eqCellValue(oRow, row, field);
            }
            for (var index = 0, len = visibleColumn.length; index < len; index++) {
              property = visibleColumn[index].property;
              if (property && !eqCellValue(oRow, row, property)) {
                return true;
              }
            }
          }
        }
        return false;
      },
      getColumns: function(columnIndex) {
        var columns = internalData.visibleColumn;
        return xeUtils.isUndefined(columnIndex) ? columns.slice(0) : columns[columnIndex];
      },
      getColumnById: function(colid) {
        var fullColumnIdData = internalData.fullColumnIdData;
        return fullColumnIdData[colid] ? fullColumnIdData[colid].column : null;
      },
      getColumnByField: function(field) {
        var fullColumnFieldData = internalData.fullColumnFieldData;
        return fullColumnFieldData[field] ? fullColumnFieldData[field].column : null;
      },
      getTableColumn: function() {
        return {
          collectColumn: internalData.collectColumn.slice(0),
          fullColumn: internalData.tableFullColumn.slice(0),
          visibleColumn: internalData.visibleColumn.slice(0),
          tableColumn: reactData.tableColumn.slice(0)
        };
      },
      getData: function(rowIndex) {
        var tableSynchData = props.data || internalData.tableSynchData;
        return xeUtils.isUndefined(rowIndex) ? tableSynchData.slice(0) : tableSynchData[rowIndex];
      },
      getCheckboxRecords: function(isFull) {
        var treeConfig = props.treeConfig;
        var tableFullData = internalData.tableFullData, afterFullData = internalData.afterFullData;
        var treeOpts = computeTreeOpts.value;
        var checkboxOpts = computeCheckboxOpts.value;
        var property = checkboxOpts.checkField;
        var rowList = [];
        var currTableData = isFull ? tableFullData : afterFullData;
        if (property) {
          if (treeConfig) {
            rowList = xeUtils.filterTree(currTableData, function(row) {
              return xeUtils.get(row, property);
            }, treeOpts);
          } else {
            rowList = currTableData.filter(function(row) {
              return xeUtils.get(row, property);
            });
          }
        } else {
          var selection_1 = reactData.selection;
          if (treeConfig) {
            rowList = xeUtils.filterTree(currTableData, function(row) {
              return $xetable.findRowIndexOf(selection_1, row) > -1;
            }, treeOpts);
          } else {
            rowList = currTableData.filter(function(row) {
              return $xetable.findRowIndexOf(selection_1, row) > -1;
            });
          }
        }
        return rowList;
      },
      getRowById: function(rowid) {
        var fullDataRowIdData = internalData.fullDataRowIdData;
        return fullDataRowIdData[rowid] ? fullDataRowIdData[rowid].row : null;
      },
      getRowid: function(row) {
        return getRowid($xetable, row);
      },
      getTableData: function() {
        var tableData = reactData.tableData, footerTableData = reactData.footerTableData;
        var tableFullData = internalData.tableFullData, afterFullData = internalData.afterFullData;
        return {
          fullData: tableFullData.slice(0),
          visibleData: afterFullData.slice(0),
          tableData: tableData.slice(0),
          footerData: footerTableData.slice(0)
        };
      },
      hideColumn: function(fieldOrColumn) {
        var column = handleFieldOrColumn($xetable, fieldOrColumn);
        if (column) {
          column.visible = false;
        }
        return tablePrivateMethods.handleCustom();
      },
      showColumn: function(fieldOrColumn) {
        var column = handleFieldOrColumn($xetable, fieldOrColumn);
        if (column) {
          column.visible = true;
        }
        return tablePrivateMethods.handleCustom();
      },
      resetColumn: function(options) {
        var tableFullColumn = internalData.tableFullColumn;
        var customOpts = computeCustomOpts.value;
        var checkMethod = customOpts.checkMethod;
        var opts = Object.assign({ visible: true, resizable: options === true }, options);
        tableFullColumn.forEach(function(column) {
          if (opts.resizable) {
            column.resizeWidth = 0;
          }
          if (!checkMethod || checkMethod({ column })) {
            column.visible = column.defaultVisible;
          }
        });
        if (opts.resizable) {
          tablePrivateMethods.saveCustomResizable(true);
        }
        return tablePrivateMethods.handleCustom();
      },
      refreshColumn: function() {
        return parseColumns().then(function() {
          return tableMethods.refreshScroll();
        }).then(function() {
          return tableMethods.recalculate();
        });
      },
      refreshScroll: function() {
        var lastScrollLeft = internalData.lastScrollLeft, lastScrollTop = internalData.lastScrollTop;
        var tableBody = refTableBody.value;
        var tableFooter = refTableFooter.value;
        var leftBody = refTableLeftBody.value;
        var rightBody = refTableRightBody.value;
        var tableBodyElem = tableBody ? tableBody.$el : null;
        var leftBodyElem = leftBody ? leftBody.$el : null;
        var rightBodyElem = rightBody ? rightBody.$el : null;
        var tableFooterElem = tableFooter ? tableFooter.$el : null;
        if (lastScrollLeft || lastScrollTop) {
          return restoreScrollLocation($xetable, lastScrollLeft, lastScrollTop);
        }
        setScrollTop(tableBodyElem, lastScrollTop);
        setScrollTop(leftBodyElem, lastScrollTop);
        setScrollTop(rightBodyElem, lastScrollTop);
        setScrollLeft(tableFooterElem, lastScrollLeft);
        return nextTick();
      },
      recalculate: function(refull) {
        var tableHeader = refTableHeader.value;
        var tableBody = refTableBody.value;
        var tableFooter = refTableFooter.value;
        var bodyElem = tableBody ? tableBody.$el : null;
        var headerElem = tableHeader ? tableHeader.$el : null;
        var footerElem = tableFooter ? tableFooter.$el : null;
        if (bodyElem) {
          autoCellWidth(headerElem, bodyElem, footerElem);
          if (refull === true) {
            return computeScrollLoad().then(function() {
              autoCellWidth(headerElem, bodyElem, footerElem);
              return computeScrollLoad();
            });
          }
        }
        return computeScrollLoad();
      },
      openTooltip: function(target, content) {
        var $commTip = refCommTooltip.value;
        if ($commTip) {
          return $commTip.open(target, content);
        }
        return nextTick();
      },
      closeTooltip: function() {
        var tooltipStore = internalData.tooltipStore;
        var $tooltip = refTooltip.value;
        var $commTip = refCommTooltip.value;
        if (tooltipStore.visible) {
          Object.assign(tooltipStore, {
            row: null,
            column: null,
            content: null,
            visible: false
          });
          if ($tooltip) {
            $tooltip.close();
          }
        }
        if ($commTip) {
          $commTip.close();
        }
        return nextTick();
      },
      isAllCheckboxChecked: function() {
        return reactData.isAllSelected;
      },
      isAllCheckboxIndeterminate: function() {
        return !reactData.isAllSelected && reactData.isIndeterminate;
      },
      getCheckboxIndeterminateRecords: function(isFull) {
        var treeConfig = props.treeConfig;
        var afterFullData = internalData.afterFullData;
        var treeIndeterminates = reactData.treeIndeterminates;
        if (treeConfig) {
          return isFull ? treeIndeterminates.slice(0) : treeIndeterminates.filter(function(row) {
            return $xetable.findRowIndexOf(afterFullData, row) > -1;
          });
        }
        return [];
      },
      setCheckboxRow: function(rows, value) {
        if (rows && !xeUtils.isArray(rows)) {
          rows = [rows];
        }
        rows.forEach(function(row) {
          return tablePrivateMethods.handleSelectRow({ row }, !!value);
        });
        return nextTick();
      },
      isCheckedByCheckboxRow: function(row) {
        var selection = reactData.selection;
        var checkboxOpts = computeCheckboxOpts.value;
        var property = checkboxOpts.checkField;
        if (property) {
          return xeUtils.get(row, property);
        }
        return $xetable.findRowIndexOf(selection, row) > -1;
      },
      isIndeterminateByCheckboxRow: function(row) {
        var treeIndeterminates = reactData.treeIndeterminates;
        return $xetable.findRowIndexOf(treeIndeterminates, row) > -1 && !tableMethods.isCheckedByCheckboxRow(row);
      },
      toggleCheckboxRow: function(row) {
        tablePrivateMethods.handleToggleCheckRowEvent(null, { row });
        return nextTick();
      },
      setAllCheckboxRow: function(value) {
        var treeConfig = props.treeConfig;
        var selection = reactData.selection;
        var afterFullData = internalData.afterFullData, checkboxReserveRowMap = internalData.checkboxReserveRowMap;
        var treeOpts = computeTreeOpts.value;
        var checkboxOpts = computeCheckboxOpts.value;
        var property = checkboxOpts.checkField, reserve = checkboxOpts.reserve, checkStrictly = checkboxOpts.checkStrictly, checkMethod = checkboxOpts.checkMethod;
        var selectRows = [];
        var beforeSelection = treeConfig ? [] : selection.filter(function(row) {
          return $xetable.findRowIndexOf(afterFullData, row) === -1;
        });
        if (checkStrictly) {
          reactData.isAllSelected = value;
        } else {
          if (property) {
            var checkValFn = function(row) {
              if (!checkMethod || checkMethod({ row })) {
                if (value) {
                  selectRows.push(row);
                }
                xeUtils.set(row, property, value);
              }
            };
            if (treeConfig) {
              xeUtils.eachTree(afterFullData, checkValFn, treeOpts);
            } else {
              afterFullData.forEach(checkValFn);
            }
          } else {
            if (treeConfig) {
              if (value) {
                xeUtils.eachTree(afterFullData, function(row) {
                  if (!checkMethod || checkMethod({ row })) {
                    selectRows.push(row);
                  }
                }, treeOpts);
              } else {
                if (checkMethod) {
                  xeUtils.eachTree(afterFullData, function(row) {
                    if (checkMethod({ row }) ? 0 : $xetable.findRowIndexOf(selection, row) > -1) {
                      selectRows.push(row);
                    }
                  }, treeOpts);
                }
              }
            } else {
              if (value) {
                if (checkMethod) {
                  selectRows = afterFullData.filter(function(row) {
                    return $xetable.findRowIndexOf(selection, row) > -1 || checkMethod({ row });
                  });
                } else {
                  selectRows = afterFullData.slice(0);
                }
              } else {
                if (checkMethod) {
                  selectRows = afterFullData.filter(function(row) {
                    return checkMethod({ row }) ? 0 : $xetable.findRowIndexOf(selection, row) > -1;
                  });
                }
              }
            }
          }
          if (reserve) {
            if (value) {
              selectRows.forEach(function(row) {
                checkboxReserveRowMap[getRowid($xetable, row)] = row;
              });
            } else {
              afterFullData.forEach(function(row) {
                return handleCheckboxReserveRow(row, false);
              });
            }
          }
          reactData.selection = property ? [] : beforeSelection.concat(selectRows);
        }
        reactData.treeIndeterminates = [];
        tablePrivateMethods.checkSelectionStatus();
        return nextTick();
      },
      getRadioReserveRecord: function(isFull) {
        var treeConfig = props.treeConfig;
        var fullDataRowIdData = internalData.fullDataRowIdData, radioReserveRow = internalData.radioReserveRow, afterFullData = internalData.afterFullData;
        var radioOpts = computeRadioOpts.value;
        var treeOpts = computeTreeOpts.value;
        if (radioOpts.reserve && radioReserveRow) {
          var rowid_3 = getRowid($xetable, radioReserveRow);
          if (isFull) {
            if (!fullDataRowIdData[rowid_3]) {
              return radioReserveRow;
            }
          } else {
            var rowkey_2 = getRowkey($xetable);
            if (treeConfig) {
              var matchObj = xeUtils.findTree(afterFullData, function(row) {
                return rowid_3 === xeUtils.get(row, rowkey_2);
              }, treeOpts);
              if (matchObj) {
                return radioReserveRow;
              }
            } else {
              if (!afterFullData.some(function(row) {
                return rowid_3 === xeUtils.get(row, rowkey_2);
              })) {
                return radioReserveRow;
              }
            }
          }
        }
        return null;
      },
      clearRadioReserve: function() {
        internalData.radioReserveRow = null;
        return nextTick();
      },
      getCheckboxReserveRecords: function(isFull) {
        var treeConfig = props.treeConfig;
        var afterFullData = internalData.afterFullData, fullDataRowIdData = internalData.fullDataRowIdData, checkboxReserveRowMap = internalData.checkboxReserveRowMap;
        var checkboxOpts = computeCheckboxOpts.value;
        var treeOpts = computeTreeOpts.value;
        var reserveSelection = [];
        if (checkboxOpts.reserve) {
          xeUtils.each(checkboxReserveRowMap, function(oldRow, oldRowid) {
            if (oldRow) {
              if (isFull) {
                if (!fullDataRowIdData[oldRowid]) {
                  reserveSelection.push(oldRow);
                }
              } else {
                if (treeConfig) {
                  if (!xeUtils.findTree(afterFullData, function(row) {
                    return getRowid($xetable, row) === oldRowid;
                  }, treeOpts)) {
                    reserveSelection.push(oldRow);
                  }
                } else {
                  if (!afterFullData.some(function(row) {
                    return getRowid($xetable, row) === oldRowid;
                  })) {
                    reserveSelection.push(oldRow);
                  }
                }
              }
            }
          });
        }
        return reserveSelection;
      },
      clearCheckboxReserve: function() {
        internalData.checkboxReserveRowMap = {};
        return nextTick();
      },
      toggleAllCheckboxRow: function() {
        tablePrivateMethods.triggerCheckAllEvent(null, !reactData.isAllSelected);
        return nextTick();
      },
      clearCheckboxRow: function() {
        var treeConfig = props.treeConfig;
        var tableFullData = internalData.tableFullData;
        var treeOpts = computeTreeOpts.value;
        var checkboxOpts = computeCheckboxOpts.value;
        var property = checkboxOpts.checkField, reserve = checkboxOpts.reserve;
        if (property) {
          if (treeConfig) {
            xeUtils.eachTree(tableFullData, function(item) {
              return xeUtils.set(item, property, false);
            }, treeOpts);
          } else {
            tableFullData.forEach(function(item) {
              return xeUtils.set(item, property, false);
            });
          }
        }
        if (reserve) {
          tableFullData.forEach(function(row) {
            return handleCheckboxReserveRow(row, false);
          });
        }
        reactData.isAllSelected = false;
        reactData.isIndeterminate = false;
        reactData.selection = [];
        reactData.treeIndeterminates = [];
        return nextTick();
      },
      setCurrentRow: function(row) {
        var el = refElem.value;
        tableMethods.clearCurrentRow();
        tableMethods.clearCurrentColumn();
        reactData.currentRow = row;
        if (props.highlightCurrentRow) {
          if (el) {
            xeUtils.arrayEach(el.querySelectorAll('[rowid="' + getRowid($xetable, row) + '"]'), function(elem) {
              return addClass(elem, "row--current");
            });
          }
        }
        return nextTick();
      },
      isCheckedByRadioRow: function(row) {
        return reactData.selectRow === row;
      },
      setRadioRow: function(row) {
        var radioOpts = computeRadioOpts.value;
        var checkMethod = radioOpts.checkMethod;
        if (row && (!checkMethod || checkMethod({ row }))) {
          reactData.selectRow = row;
          handleRadioReserveRow(row);
        }
        return nextTick();
      },
      clearCurrentRow: function() {
        var el = refElem.value;
        reactData.currentRow = null;
        internalData.hoverRow = null;
        if (el) {
          xeUtils.arrayEach(el.querySelectorAll(".row--current"), function(elem) {
            return removeClass(elem, "row--current");
          });
        }
        return nextTick();
      },
      clearRadioRow: function() {
        reactData.selectRow = null;
        return nextTick();
      },
      getCurrentRecord: function() {
        return props.highlightCurrentRow ? reactData.currentRow : null;
      },
      getRadioRecord: function(isFull) {
        var treeConfig = props.treeConfig;
        var fullDataRowIdData = internalData.fullDataRowIdData, afterFullData = internalData.afterFullData;
        var selectRow = reactData.selectRow;
        var treeOpts = computeTreeOpts.value;
        if (selectRow) {
          var rowid_4 = getRowid($xetable, selectRow);
          if (isFull) {
            if (!fullDataRowIdData[rowid_4]) {
              return selectRow;
            }
          } else {
            if (treeConfig) {
              var rowkey_3 = getRowkey($xetable);
              var matchObj = xeUtils.findTree(afterFullData, function(row) {
                return rowid_4 === xeUtils.get(row, rowkey_3);
              }, treeOpts);
              if (matchObj) {
                return selectRow;
              }
            } else {
              if (afterFullData.indexOf(selectRow) > -1) {
                return selectRow;
              }
            }
          }
        }
        return null;
      },
      getCurrentColumn: function() {
        return props.highlightCurrentColumn ? reactData.currentColumn : null;
      },
      setCurrentColumn: function(fieldOrColumn) {
        var column = handleFieldOrColumn($xetable, fieldOrColumn);
        if (column) {
          tableMethods.clearCurrentRow();
          tableMethods.clearCurrentColumn();
          reactData.currentColumn = column;
        }
        return nextTick();
      },
      clearCurrentColumn: function() {
        reactData.currentColumn = null;
        return nextTick();
      },
      sort: function(sortConfs, sortOrder) {
        var sortOpts = computeSortOpts.value;
        var multiple = sortOpts.multiple, remote = sortOpts.remote, orders = sortOpts.orders;
        if (sortConfs) {
          if (xeUtils.isString(sortConfs)) {
            sortConfs = [
              { field: sortConfs, order: sortOrder }
            ];
          }
        }
        if (!xeUtils.isArray(sortConfs)) {
          sortConfs = [sortConfs];
        }
        if (sortConfs.length) {
          if (!multiple) {
            clearAllSort();
          }
          (multiple ? sortConfs : [sortConfs[0]]).forEach(function(confs) {
            var field = confs.field, order = confs.order;
            var column = field;
            if (xeUtils.isString(field)) {
              column = tableMethods.getColumnByField(field);
            }
            if (column && column.sortable) {
              if (orders.indexOf(order) === -1) {
                order = getNextSortOrder(column);
              }
              if (column.order !== order) {
                column.order = order;
              }
              column.sortTime = Date.now();
            }
          });
          if (!remote) {
            tablePrivateMethods.handleTableData(true);
          }
          return nextTick().then(updateStyle);
        }
        return nextTick();
      },
      clearSort: function(fieldOrColumn) {
        var sortOpts = computeSortOpts.value;
        if (fieldOrColumn) {
          var column = handleFieldOrColumn($xetable, fieldOrColumn);
          if (column) {
            column.order = null;
          }
        } else {
          clearAllSort();
        }
        if (!sortOpts.remote) {
          tablePrivateMethods.handleTableData(true);
        }
        return nextTick().then(updateStyle);
      },
      isSort: function(fieldOrColumn) {
        if (fieldOrColumn) {
          var column = handleFieldOrColumn($xetable, fieldOrColumn);
          return column ? column.sortable && !!column.order : false;
        }
        return tableMethods.getSortColumns().length > 0;
      },
      getSortColumns: function() {
        var sortList = [];
        var tableFullColumn = internalData.tableFullColumn;
        tableFullColumn.forEach(function(column) {
          var order = column.order;
          if (column.sortable && order) {
            sortList.push({ column, property: column.property, order });
          }
        });
        return sortList;
      },
      closeFilter: function() {
        var filterStore = reactData.filterStore;
        var column = filterStore.column, visible = filterStore.visible;
        Object.assign(filterStore, {
          isAllSelected: false,
          isIndeterminate: false,
          options: [],
          visible: false
        });
        if (visible) {
          $xetable.dispatchEvent("filter-visible", { column, property: column.property, filterList: $xetable.getCheckedFilters(), visible: false }, null);
        }
        return nextTick();
      },
      isFilter: function(fieldOrColumn) {
        var column = handleFieldOrColumn($xetable, fieldOrColumn);
        if (column) {
          return column.filters && column.filters.some(function(option) {
            return option.checked;
          });
        }
        return $xetable.getCheckedFilters().length > 0;
      },
      isRowExpandLoaded: function(row) {
        var fullAllDataRowIdData = internalData.fullAllDataRowIdData;
        var rest = fullAllDataRowIdData[getRowid($xetable, row)];
        return rest && !!rest.expandLoaded;
      },
      clearRowExpandLoaded: function(row) {
        var expandLazyLoadeds = reactData.expandLazyLoadeds;
        var fullAllDataRowIdData = internalData.fullAllDataRowIdData;
        var expandOpts = computeExpandOpts.value;
        var lazy = expandOpts.lazy;
        var rest = fullAllDataRowIdData[getRowid($xetable, row)];
        if (lazy && rest) {
          rest.expandLoaded = false;
          xeUtils.remove(expandLazyLoadeds, function(item) {
            return $xetable.eqRow(item, row);
          });
        }
        return nextTick();
      },
      reloadExpandContent: function(row) {
        var expandLazyLoadeds = reactData.expandLazyLoadeds;
        var expandOpts = computeExpandOpts.value;
        var lazy = expandOpts.lazy;
        if (lazy && $xetable.findRowIndexOf(expandLazyLoadeds, row) === -1) {
          tableMethods.clearRowExpandLoaded(row).then(function() {
            return handleAsyncRowExpand(row);
          });
        }
        return nextTick();
      },
      toggleRowExpand: function(row) {
        return tableMethods.setRowExpand(row, !tableMethods.isExpandByRow(row));
      },
      setAllRowExpand: function(expanded) {
        var expandOpts = computeExpandOpts.value;
        return tableMethods.setRowExpand(expandOpts.lazy ? reactData.tableData : internalData.tableFullData, expanded);
      },
      setRowExpand: function(rows, expanded) {
        var rowExpandeds = reactData.rowExpandeds, expandLazyLoadeds = reactData.expandLazyLoadeds, column = reactData.expandColumn;
        var fullAllDataRowIdData = internalData.fullAllDataRowIdData;
        var expandOpts = computeExpandOpts.value;
        var reserve = expandOpts.reserve, lazy = expandOpts.lazy, accordion = expandOpts.accordion, toggleMethod = expandOpts.toggleMethod;
        var lazyRests = [];
        var columnIndex = tableMethods.getColumnIndex(column);
        var $columnIndex = tableMethods.getVMColumnIndex(column);
        if (rows) {
          if (!xeUtils.isArray(rows)) {
            rows = [rows];
          }
          if (accordion) {
            rowExpandeds = [];
            rows = rows.slice(rows.length - 1, rows.length);
          }
          var validRows_1 = toggleMethod ? rows.filter(function(row) {
            return toggleMethod({ $table: $xetable, expanded, column, columnIndex, $columnIndex, row, rowIndex: tableMethods.getRowIndex(row), $rowIndex: tableMethods.getVMRowIndex(row) });
          }) : rows;
          if (expanded) {
            validRows_1.forEach(function(row) {
              if ($xetable.findRowIndexOf(rowExpandeds, row) === -1) {
                var rest = fullAllDataRowIdData[getRowid($xetable, row)];
                var isLoad = lazy && !rest.expandLoaded && $xetable.findRowIndexOf(expandLazyLoadeds, row) === -1;
                if (isLoad) {
                  lazyRests.push(handleAsyncRowExpand(row));
                } else {
                  rowExpandeds.push(row);
                }
              }
            });
          } else {
            xeUtils.remove(rowExpandeds, function(row) {
              return $xetable.findRowIndexOf(validRows_1, row) > -1;
            });
          }
          if (reserve) {
            validRows_1.forEach(function(row) {
              return handleRowExpandReserve(row, expanded);
            });
          }
        }
        reactData.rowExpandeds = rowExpandeds;
        return Promise.all(lazyRests).then(function() {
          return tableMethods.recalculate();
        });
      },
      isExpandByRow: function(row) {
        var rowExpandeds = reactData.rowExpandeds;
        return $xetable.findRowIndexOf(rowExpandeds, row) > -1;
      },
      clearRowExpand: function() {
        var rowExpandeds = reactData.rowExpandeds;
        var tableFullData = internalData.tableFullData;
        var expandOpts = computeExpandOpts.value;
        var reserve = expandOpts.reserve;
        var isExists = rowExpandeds.length;
        reactData.rowExpandeds = [];
        if (reserve) {
          tableFullData.forEach(function(row) {
            return handleRowExpandReserve(row, false);
          });
        }
        return nextTick().then(function() {
          if (isExists) {
            tableMethods.recalculate();
          }
        });
      },
      clearRowExpandReserve: function() {
        internalData.rowExpandedReserveRowMap = {};
        return nextTick();
      },
      getRowExpandRecords: function() {
        return reactData.rowExpandeds.slice(0);
      },
      getTreeExpandRecords: function() {
        return reactData.treeExpandeds.slice(0);
      },
      isTreeExpandLoaded: function(row) {
        var fullAllDataRowIdData = internalData.fullAllDataRowIdData;
        var rest = fullAllDataRowIdData[getRowid($xetable, row)];
        return rest && !!rest.treeLoaded;
      },
      clearTreeExpandLoaded: function(row) {
        var treeExpandeds = reactData.treeExpandeds;
        var fullAllDataRowIdData = internalData.fullAllDataRowIdData;
        var treeOpts = computeTreeOpts.value;
        var lazy = treeOpts.lazy;
        var rest = fullAllDataRowIdData[getRowid($xetable, row)];
        if (lazy && rest) {
          rest.treeLoaded = false;
          xeUtils.remove(treeExpandeds, function(item) {
            return $xetable.eqRow(item, row);
          });
        }
        return nextTick();
      },
      reloadTreeChilds: function(row) {
        var treeLazyLoadeds = reactData.treeLazyLoadeds;
        var treeOpts = computeTreeOpts.value;
        var lazy = treeOpts.lazy, hasChild = treeOpts.hasChild;
        if (lazy && row[hasChild] && $xetable.findRowIndexOf(treeLazyLoadeds, row) === -1) {
          tableMethods.clearTreeExpandLoaded(row).then(function() {
            return handleAsyncTreeExpandChilds(row);
          });
        }
        return nextTick();
      },
      toggleTreeExpand: function(row) {
        return tableMethods.setTreeExpand(row, !tableMethods.isTreeExpandByRow(row));
      },
      setAllTreeExpand: function(expanded) {
        var tableFullData = internalData.tableFullData;
        var treeOpts = computeTreeOpts.value;
        var lazy = treeOpts.lazy, children = treeOpts.children;
        var expandeds = [];
        xeUtils.eachTree(tableFullData, function(row) {
          var rowChildren = row[children];
          if (lazy || rowChildren && rowChildren.length) {
            expandeds.push(row);
          }
        }, treeOpts);
        return tableMethods.setTreeExpand(expandeds, expanded);
      },
      setTreeExpand: function(rows, expanded) {
        var treeExpandeds = reactData.treeExpandeds, treeLazyLoadeds = reactData.treeLazyLoadeds, treeNodeColumn = reactData.treeNodeColumn;
        var fullAllDataRowIdData = internalData.fullAllDataRowIdData, tableFullData = internalData.tableFullData;
        var treeOpts = computeTreeOpts.value;
        var reserve = treeOpts.reserve, lazy = treeOpts.lazy, hasChild = treeOpts.hasChild, children = treeOpts.children, accordion = treeOpts.accordion, toggleMethod = treeOpts.toggleMethod;
        var result = [];
        var columnIndex = tableMethods.getColumnIndex(treeNodeColumn);
        var $columnIndex = tableMethods.getVMColumnIndex(treeNodeColumn);
        if (rows) {
          if (!xeUtils.isArray(rows)) {
            rows = [rows];
          }
          if (rows.length) {
            var validRows_2 = toggleMethod ? rows.filter(function(row) {
              return toggleMethod({ $table: $xetable, expanded, column: treeNodeColumn, columnIndex, $columnIndex, row });
            }) : rows;
            if (accordion) {
              validRows_2 = validRows_2.length ? [validRows_2[validRows_2.length - 1]] : [];
              var matchObj_1 = xeUtils.findTree(tableFullData, function(item) {
                return item === validRows_2[0];
              }, treeOpts);
              if (matchObj_1) {
                xeUtils.remove(treeExpandeds, function(item) {
                  return matchObj_1.items.indexOf(item) > -1;
                });
              }
            }
            if (expanded) {
              validRows_2.forEach(function(row) {
                if ($xetable.findRowIndexOf(treeExpandeds, row) === -1) {
                  var rest = fullAllDataRowIdData[getRowid($xetable, row)];
                  var isLoad = lazy && row[hasChild] && !rest.treeLoaded && $xetable.findRowIndexOf(treeLazyLoadeds, row) === -1;
                  if (isLoad) {
                    result.push(handleAsyncTreeExpandChilds(row));
                  } else {
                    if (row[children] && row[children].length) {
                      treeExpandeds.push(row);
                    }
                  }
                }
              });
            } else {
              xeUtils.remove(treeExpandeds, function(row) {
                return $xetable.findRowIndexOf(validRows_2, row) > -1;
              });
            }
            if (reserve) {
              validRows_2.forEach(function(row) {
                return handleTreeExpandReserve(row, expanded);
              });
            }
            return Promise.all(result).then(function() {
              return tableMethods.recalculate();
            });
          }
        }
        return nextTick();
      },
      isTreeExpandByRow: function(row) {
        var treeExpandeds = reactData.treeExpandeds;
        return $xetable.findRowIndexOf(treeExpandeds, row) > -1;
      },
      clearTreeExpand: function() {
        var treeExpandeds = reactData.treeExpandeds;
        var tableFullData = internalData.tableFullData;
        var treeOpts = computeTreeOpts.value;
        var reserve = treeOpts.reserve;
        var isExists = treeExpandeds.length;
        reactData.treeExpandeds = [];
        if (reserve) {
          xeUtils.eachTree(tableFullData, function(row) {
            return handleTreeExpandReserve(row, false);
          }, treeOpts);
        }
        return nextTick().then(function() {
          if (isExists) {
            tableMethods.recalculate();
          }
        });
      },
      clearTreeExpandReserve: function() {
        internalData.treeExpandedReserveRowMap = {};
        return nextTick();
      },
      getScroll: function() {
        var scrollXLoad = reactData.scrollXLoad, scrollYLoad = reactData.scrollYLoad;
        var tableBody = refTableBody.value;
        var bodyElem = tableBody.$el;
        return {
          virtualX: scrollXLoad,
          virtualY: scrollYLoad,
          scrollTop: bodyElem.scrollTop,
          scrollLeft: bodyElem.scrollLeft
        };
      },
      scrollTo: function(scrollLeft, scrollTop) {
        var tableBody = refTableBody.value;
        var tableFooter = refTableFooter.value;
        var rightBody = refTableRightBody.value;
        var tableBodyElem = tableBody ? tableBody.$el : null;
        var rightBodyElem = rightBody ? rightBody.$el : null;
        var tableFooterElem = tableFooter ? tableFooter.$el : null;
        if (xeUtils.isNumber(scrollLeft)) {
          setScrollLeft(tableFooterElem || tableBodyElem, scrollLeft);
        }
        if (xeUtils.isNumber(scrollTop)) {
          setScrollTop(rightBodyElem || tableBodyElem, scrollTop);
        }
        if (reactData.scrollXLoad || reactData.scrollYLoad) {
          return new Promise(function(resolve) {
            return setTimeout(function() {
              return resolve(nextTick());
            }, 50);
          });
        }
        return nextTick();
      },
      scrollToRow: function(row, fieldOrColumn) {
        var rest = [];
        if (row) {
          if (props.treeConfig) {
            rest.push(tablePrivateMethods.scrollToTreeRow(row));
          } else {
            rest.push(rowToVisible($xetable, row));
          }
        }
        if (fieldOrColumn) {
          rest.push(tableMethods.scrollToColumn(fieldOrColumn));
        }
        return Promise.all(rest);
      },
      scrollToColumn: function(fieldOrColumn) {
        var fullColumnIdData = internalData.fullColumnIdData;
        var column = handleFieldOrColumn($xetable, fieldOrColumn);
        if (column && fullColumnIdData[column.id]) {
          return colToVisible($xetable, column);
        }
        return nextTick();
      },
      clearScroll: function() {
        var scrollXStore = internalData.scrollXStore, scrollYStore = internalData.scrollYStore;
        var tableBody = refTableBody.value;
        var tableFooter = refTableFooter.value;
        var rightBody = refTableRightBody.value;
        var tableBodyElem = tableBody ? tableBody.$el : null;
        var rightBodyElem = rightBody ? rightBody.$el : null;
        var tableFooterElem = tableFooter ? tableFooter.$el : null;
        if (rightBodyElem) {
          restoreScrollListener(rightBodyElem);
          rightBodyElem.scrollTop = 0;
        }
        if (tableFooterElem) {
          tableFooterElem.scrollLeft = 0;
        }
        if (tableBodyElem) {
          restoreScrollListener(tableBodyElem);
          tableBodyElem.scrollTop = 0;
          tableBodyElem.scrollLeft = 0;
        }
        scrollXStore.startIndex = 0;
        scrollYStore.startIndex = 0;
        return nextTick();
      },
      updateFooter: function() {
        var showFooter = props.showFooter, footerMethod = props.footerMethod;
        var visibleColumn = internalData.visibleColumn, afterFullData = internalData.afterFullData;
        if (showFooter && footerMethod) {
          reactData.footerTableData = visibleColumn.length ? footerMethod({ columns: visibleColumn, data: afterFullData, $table: $xetable, $grid: $xegrid }) : [];
        }
        return nextTick();
      },
      updateStatus: function(scope, cellValue) {
        var customVal = !xeUtils.isUndefined(cellValue);
        return nextTick().then(function() {
          var editRules = props.editRules;
          var validStore = reactData.validStore;
          var tableBody = refTableBody.value;
          if (scope && tableBody && editRules) {
            var row_1 = scope.row, column_3 = scope.column;
            var type = "change";
            if ($xetable.hasCellRules) {
              if ($xetable.hasCellRules(type, row_1, column_3)) {
                var cell_1 = tablePrivateMethods.getCell(row_1, column_3);
                if (cell_1) {
                  return $xetable.validCellRules(type, row_1, column_3, cellValue).then(function() {
                    if (customVal && validStore.visible) {
                      setCellValue(row_1, column_3, cellValue);
                    }
                    $xetable.clearValidate();
                  }).catch(function(_a) {
                    var rule = _a.rule;
                    if (customVal) {
                      setCellValue(row_1, column_3, cellValue);
                    }
                    $xetable.showValidTooltip({ rule, row: row_1, column: column_3, cell: cell_1 });
                  });
                }
              }
            }
          }
        });
      },
      setMergeCells: function(merges) {
        if (props.spanMethod) {
          errLog("vxe.error.errConflicts", ["merge-cells", "span-method"]);
        }
        setMerges(merges, reactData.mergeList, internalData.afterFullData);
        return nextTick().then(function() {
          return tablePrivateMethods.updateCellAreas();
        });
      },
      removeMergeCells: function(merges) {
        if (props.spanMethod) {
          errLog("vxe.error.errConflicts", ["merge-cells", "span-method"]);
        }
        var rest = removeMerges(merges, reactData.mergeList, internalData.afterFullData);
        return nextTick().then(function() {
          tablePrivateMethods.updateCellAreas();
          return rest;
        });
      },
      getMergeCells: function() {
        return reactData.mergeList.slice(0);
      },
      clearMergeCells: function() {
        reactData.mergeList = [];
        return nextTick();
      },
      setMergeFooterItems: function(merges) {
        if (props.footerSpanMethod) {
          errLog("vxe.error.errConflicts", ["merge-footer-items", "footer-span-method"]);
        }
        setMerges(merges, reactData.mergeFooterList);
        return nextTick().then(function() {
          return tablePrivateMethods.updateCellAreas();
        });
      },
      removeMergeFooterItems: function(merges) {
        if (props.footerSpanMethod) {
          errLog("vxe.error.errConflicts", ["merge-footer-items", "footer-span-method"]);
        }
        var rest = removeMerges(merges, reactData.mergeFooterList);
        return nextTick().then(function() {
          tablePrivateMethods.updateCellAreas();
          return rest;
        });
      },
      getMergeFooterItems: function() {
        return reactData.mergeFooterList.slice(0);
      },
      clearMergeFooterItems: function() {
        reactData.mergeFooterList = [];
        return nextTick();
      },
      focus: function() {
        internalData.isActivated = true;
        return nextTick();
      },
      blur: function() {
        internalData.isActivated = false;
        return nextTick();
      },
      connect: function($toolbar) {
        if ($toolbar) {
          $xetoolbar = $toolbar;
          $xetoolbar.syncUpdate({ collectColumn: internalData.collectColumn, $table: $xetable });
        } else {
          errLog("vxe.error.barUnableLink");
        }
        return nextTick();
      }
    };
    var handleGlobalMousedownEvent = function(evnt) {
      var editStore = reactData.editStore, ctxMenuStore = reactData.ctxMenuStore, filterStore = reactData.filterStore;
      var mouseConfig = props.mouseConfig;
      var el = refElem.value;
      var editOpts = computeEditOpts.value;
      var actived = editStore.actived;
      var $validTooltip = refValidTooltip.value;
      var tableFilter = refTableFilter.value;
      var tableMenu = refTableMenu.value;
      if (tableFilter) {
        if (getEventTargetNode(evnt, el, "vxe-cell--filter").flag)
          ;
        else if (getEventTargetNode(evnt, tableFilter.$el).flag)
          ;
        else {
          if (!getEventTargetNode(evnt, document.body, "vxe-table--ignore-clear").flag) {
            tablePrivateMethods.preventEvent(evnt, "event.clearFilter", filterStore.args, tableMethods.closeFilter);
          }
        }
      }
      if (actived.row) {
        if (!(editOpts.autoClear === false)) {
          var cell = actived.args.cell;
          if (!cell || !getEventTargetNode(evnt, cell).flag) {
            if ($validTooltip && getEventTargetNode(evnt, $validTooltip.$el).flag)
              ;
            else if (!internalData._lastCallTime || internalData._lastCallTime + 50 < Date.now()) {
              if (!getEventTargetNode(evnt, document.body, "vxe-table--ignore-clear").flag) {
                tablePrivateMethods.preventEvent(evnt, "event.clearActived", actived.args, function() {
                  var isClear;
                  if (editOpts.mode === "row") {
                    var rowTargetNode = getEventTargetNode(evnt, el, "vxe-body--row");
                    var rowNodeRest = rowTargetNode.flag ? tableMethods.getRowNode(rowTargetNode.targetElem) : null;
                    isClear = rowNodeRest ? !$xetable.eqRow(rowNodeRest.item, actived.args.row) : false;
                  } else {
                    isClear = !getEventTargetNode(evnt, el, "col--edit").flag;
                  }
                  if (!isClear) {
                    isClear = getEventTargetNode(evnt, el, "vxe-header--row").flag;
                  }
                  if (!isClear) {
                    isClear = getEventTargetNode(evnt, el, "vxe-footer--row").flag;
                  }
                  if (!isClear && props.height && !reactData.overflowY) {
                    var bodyWrapperElem = evnt.target;
                    if (hasClass(bodyWrapperElem, "vxe-table--body-wrapper")) {
                      isClear = evnt.offsetY < bodyWrapperElem.clientHeight;
                    }
                  }
                  if (isClear || !getEventTargetNode(evnt, el).flag) {
                    setTimeout(function() {
                      return $xetable.clearActived(evnt);
                    });
                  }
                });
              }
            }
          }
        }
      } else if (mouseConfig) {
        if (!getEventTargetNode(evnt, el).flag && !($xegrid && getEventTargetNode(evnt, $xegrid.getRefMaps().refElem.value).flag) && !(tableMenu && getEventTargetNode(evnt, tableMenu.getRefMaps().refElem.value).flag) && !($xetoolbar && getEventTargetNode(evnt, $xetoolbar.getRefMaps().refElem.value).flag)) {
          $xetable.clearSelected();
          if ($xetable.clearCellAreas) {
            if (!getEventTargetNode(evnt, document.body, "vxe-table--ignore-areas-clear").flag) {
              tablePrivateMethods.preventEvent(evnt, "event.clearAreas", {}, function() {
                $xetable.clearCellAreas();
                $xetable.clearCopyCellArea();
              });
            }
          }
        }
      }
      if ($xetable.closeMenu) {
        if (ctxMenuStore.visible && tableMenu && !getEventTargetNode(evnt, tableMenu.getRefMaps().refElem.value).flag) {
          $xetable.closeMenu();
        }
      }
      internalData.isActivated = getEventTargetNode(evnt, $xegrid ? $xegrid.getRefMaps().refElem.value : el).flag;
    };
    var handleGlobalBlurEvent = function() {
      tableMethods.closeFilter();
      if ($xetable.closeMenu) {
        $xetable.closeMenu();
      }
    };
    var handleGlobalMousewheelEvent = function() {
      tableMethods.closeTooltip();
      if ($xetable.closeMenu) {
        $xetable.closeMenu();
      }
    };
    var keydownEvent = function(evnt) {
      var mouseConfig = props.mouseConfig, keyboardConfig = props.keyboardConfig;
      var filterStore = reactData.filterStore, ctxMenuStore = reactData.ctxMenuStore, editStore = reactData.editStore;
      var mouseOpts = computeMouseOpts.value;
      var actived = editStore.actived;
      var isEsc = hasEventKey(evnt, EVENT_KEYS.ESCAPE);
      if (isEsc) {
        tablePrivateMethods.preventEvent(evnt, "event.keydown", null, function() {
          if (keyboardConfig && mouseConfig && mouseOpts.area && $xetable.handleKeyboardEvent) {
            $xetable.handleKeyboardEvent(evnt);
          } else if (actived.row || filterStore.visible || ctxMenuStore.visible) {
            evnt.stopPropagation();
            if ($xetable.closeMenu) {
              $xetable.closeMenu();
            }
            tableMethods.closeFilter();
            if (actived.row) {
              var params_1 = actived.args;
              $xetable.clearActived(evnt);
              if (mouseOpts.selected) {
                nextTick(function() {
                  return $xetable.handleSelected(params_1, evnt);
                });
              }
            }
          }
          tableMethods.dispatchEvent("keydown", {}, evnt);
        });
      }
    };
    var handleGlobalKeydownEvent = function(evnt) {
      if (internalData.isActivated) {
        tablePrivateMethods.preventEvent(evnt, "event.keydown", null, function() {
          var mouseConfig = props.mouseConfig, keyboardConfig = props.keyboardConfig, treeConfig = props.treeConfig, editConfig = props.editConfig, highlightCurrentRow = props.highlightCurrentRow;
          var ctxMenuStore = reactData.ctxMenuStore, editStore = reactData.editStore, currentRow = reactData.currentRow;
          var isMenu = computeIsMenu.value;
          var bodyMenu = computeBodyMenu.value;
          var keyboardOpts = computeKeyboardOpts.value;
          var mouseOpts = computeMouseOpts.value;
          var editOpts = computeEditOpts.value;
          var treeOpts = computeTreeOpts.value;
          var menuList = computeMenuList.value;
          var selected = editStore.selected, actived = editStore.actived;
          var keyCode = evnt.keyCode;
          var isEsc = hasEventKey(evnt, EVENT_KEYS.ESCAPE);
          var isBack = hasEventKey(evnt, EVENT_KEYS.BACKSPACE);
          var isTab = hasEventKey(evnt, EVENT_KEYS.TAB);
          var isEnter = hasEventKey(evnt, EVENT_KEYS.ENTER);
          var isSpacebar = hasEventKey(evnt, EVENT_KEYS.SPACEBAR);
          var isLeftArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_LEFT);
          var isUpArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_UP);
          var isRightArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_RIGHT);
          var isDwArrow = hasEventKey(evnt, EVENT_KEYS.ARROW_DOWN);
          var isDel = hasEventKey(evnt, EVENT_KEYS.DELETE);
          var isF2 = hasEventKey(evnt, EVENT_KEYS.F2);
          var isContextMenu = hasEventKey(evnt, EVENT_KEYS.CONTEXT_MENU);
          var hasMetaKey = evnt.metaKey;
          var hasCtrlKey = evnt.ctrlKey;
          var hasShiftKey = evnt.shiftKey;
          var isAltKey = evnt.altKey;
          var operArrow = isLeftArrow || isUpArrow || isRightArrow || isDwArrow;
          var operCtxMenu = isMenu && ctxMenuStore.visible && (isEnter || isSpacebar || operArrow);
          var isEditStatus = isEnableConf(editConfig) && actived.column && actived.row;
          var params;
          if (operCtxMenu) {
            evnt.preventDefault();
            if (ctxMenuStore.showChild && hasChildrenList(ctxMenuStore.selected)) {
              $xetable.moveCtxMenu(evnt, ctxMenuStore, "selectChild", isLeftArrow, false, ctxMenuStore.selected.children);
            } else {
              $xetable.moveCtxMenu(evnt, ctxMenuStore, "selected", isRightArrow, true, menuList);
            }
          } else if (keyboardConfig && mouseConfig && mouseOpts.area && $xetable.handleKeyboardEvent) {
            $xetable.handleKeyboardEvent(evnt);
          } else if (isEsc) {
            if ($xetable.closeMenu) {
              $xetable.closeMenu();
            }
            tableMethods.closeFilter();
            if (actived.row) {
              if (actived.row) {
                var params_2 = actived.args;
                $xetable.clearActived(evnt);
                if (mouseOpts.selected) {
                  nextTick(function() {
                    return $xetable.handleSelected(params_2, evnt);
                  });
                }
              }
            }
          } else if (isSpacebar && keyboardConfig && keyboardOpts.isChecked && selected.row && selected.column && (selected.column.type === "checkbox" || selected.column.type === "radio")) {
            evnt.preventDefault();
            if (selected.column.type === "checkbox") {
              tablePrivateMethods.handleToggleCheckRowEvent(evnt, selected.args);
            } else {
              tablePrivateMethods.triggerRadioRowEvent(evnt, selected.args);
            }
          } else if (isF2 && isEnableConf(editConfig)) {
            if (!isEditStatus) {
              if (selected.row && selected.column) {
                evnt.preventDefault();
                $xetable.handleActived(selected.args, evnt);
              }
            }
          } else if (isContextMenu) {
            internalData._keyCtx = selected.row && selected.column && bodyMenu.length;
            clearTimeout(keyCtxTimeout);
            keyCtxTimeout = setTimeout(function() {
              internalData._keyCtx = false;
            }, 1e3);
          } else if (isEnter && !isAltKey && keyboardConfig && keyboardOpts.isEnter && (selected.row || actived.row || treeConfig && highlightCurrentRow && currentRow)) {
            if (hasCtrlKey) {
              if (actived.row) {
                params = actived.args;
                $xetable.clearActived(evnt);
                if (mouseOpts.selected) {
                  nextTick(function() {
                    return $xetable.handleSelected(params, evnt);
                  });
                }
              }
            } else {
              if (selected.row || actived.row) {
                var targetArgs = selected.row ? selected.args : actived.args;
                if (hasShiftKey) {
                  if (keyboardOpts.enterToTab) {
                    $xetable.moveTabSelected(targetArgs, hasShiftKey, evnt);
                  } else {
                    $xetable.moveSelected(targetArgs, isLeftArrow, true, isRightArrow, false, evnt);
                  }
                } else {
                  if (keyboardOpts.enterToTab) {
                    $xetable.moveTabSelected(targetArgs, hasShiftKey, evnt);
                  } else {
                    $xetable.moveSelected(targetArgs, isLeftArrow, false, isRightArrow, true, evnt);
                  }
                }
              } else if (treeConfig && highlightCurrentRow && currentRow) {
                var childrens = currentRow[treeOpts.children];
                if (childrens && childrens.length) {
                  evnt.preventDefault();
                  var targetRow_1 = childrens[0];
                  params = {
                    $table: $xetable,
                    row: targetRow_1,
                    rowIndex: tableMethods.getRowIndex(targetRow_1),
                    $rowIndex: tableMethods.getVMRowIndex(targetRow_1)
                  };
                  tableMethods.setTreeExpand(currentRow, true).then(function() {
                    return tableMethods.scrollToRow(targetRow_1);
                  }).then(function() {
                    return tablePrivateMethods.triggerCurrentRowEvent(evnt, params);
                  });
                }
              }
            }
          } else if (operArrow && keyboardConfig && keyboardOpts.isArrow) {
            if (!isEditStatus) {
              if (selected.row && selected.column) {
                $xetable.moveSelected(selected.args, isLeftArrow, isUpArrow, isRightArrow, isDwArrow, evnt);
              } else if ((isUpArrow || isDwArrow) && highlightCurrentRow) {
                $xetable.moveCurrentRow(isUpArrow, isDwArrow, evnt);
              }
            }
          } else if (isTab && keyboardConfig && keyboardOpts.isTab) {
            if (selected.row || selected.column) {
              $xetable.moveTabSelected(selected.args, hasShiftKey, evnt);
            } else if (actived.row || actived.column) {
              $xetable.moveTabSelected(actived.args, hasShiftKey, evnt);
            }
          } else if (keyboardConfig && isEnableConf(editConfig) && (isDel || (treeConfig && highlightCurrentRow && currentRow ? isBack && keyboardOpts.isArrow : isBack))) {
            if (!isEditStatus) {
              var delMethod = keyboardOpts.delMethod, backMethod = keyboardOpts.backMethod;
              if (keyboardOpts.isDel && (selected.row || selected.column)) {
                if (delMethod) {
                  delMethod({
                    row: selected.row,
                    rowIndex: tableMethods.getRowIndex(selected.row),
                    column: selected.column,
                    columnIndex: tableMethods.getColumnIndex(selected.column),
                    $table: $xetable
                  });
                } else {
                  setCellValue(selected.row, selected.column, null);
                }
                if (isBack) {
                  if (backMethod) {
                    backMethod({
                      row: selected.row,
                      rowIndex: tableMethods.getRowIndex(selected.row),
                      column: selected.column,
                      columnIndex: tableMethods.getColumnIndex(selected.column),
                      $table: $xetable
                    });
                  } else {
                    $xetable.handleActived(selected.args, evnt);
                  }
                } else if (isDel) {
                  tableMethods.updateFooter();
                }
              } else if (isBack && keyboardOpts.isArrow && treeConfig && highlightCurrentRow && currentRow) {
                var parentRow_1 = xeUtils.findTree(internalData.afterFullData, function(item) {
                  return item === currentRow;
                }, treeOpts).parent;
                if (parentRow_1) {
                  evnt.preventDefault();
                  params = {
                    $table: $xetable,
                    row: parentRow_1,
                    rowIndex: tableMethods.getRowIndex(parentRow_1),
                    $rowIndex: tableMethods.getVMRowIndex(parentRow_1)
                  };
                  tableMethods.setTreeExpand(parentRow_1, false).then(function() {
                    return tableMethods.scrollToRow(parentRow_1);
                  }).then(function() {
                    return tablePrivateMethods.triggerCurrentRowEvent(evnt, params);
                  });
                }
              }
            }
          } else if (keyboardConfig && isEnableConf(editConfig) && keyboardOpts.isEdit && !hasCtrlKey && !hasMetaKey && (isSpacebar || keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode <= 90 || keyCode >= 96 && keyCode <= 111 || keyCode >= 186 && keyCode <= 192 || keyCode >= 219 && keyCode <= 222)) {
            var editMethod = keyboardOpts.editMethod;
            if (selected.column && selected.row && isEnableConf(selected.column.editRender)) {
              if (!editOpts.activeMethod || editOpts.activeMethod(selected.args)) {
                if (editMethod) {
                  editMethod({
                    row: selected.row,
                    rowIndex: tableMethods.getRowIndex(selected.row),
                    column: selected.column,
                    columnIndex: tableMethods.getColumnIndex(selected.column),
                    $table: $xetable
                  });
                } else {
                  setCellValue(selected.row, selected.column, null);
                  $xetable.handleActived(selected.args, evnt);
                }
              }
            }
          }
          tableMethods.dispatchEvent("keydown", {}, evnt);
        });
      }
    };
    var handleGlobalPasteEvent = function(evnt) {
      var keyboardConfig = props.keyboardConfig, mouseConfig = props.mouseConfig;
      var editStore = reactData.editStore, filterStore = reactData.filterStore;
      var isActivated = internalData.isActivated;
      var mouseOpts = computeMouseOpts.value;
      var keyboardOpts = computeKeyboardOpts.value;
      var actived = editStore.actived;
      if (isActivated && !filterStore.visible) {
        if (!(actived.row || actived.column)) {
          if (keyboardConfig && keyboardOpts.isClip && mouseConfig && mouseOpts.area && $xetable.handlePasteCellAreaEvent) {
            $xetable.handlePasteCellAreaEvent(evnt);
          }
        }
        tableMethods.dispatchEvent("paste", {}, evnt);
      }
    };
    var handleGlobalCopyEvent = function(evnt) {
      var keyboardConfig = props.keyboardConfig, mouseConfig = props.mouseConfig;
      var editStore = reactData.editStore, filterStore = reactData.filterStore;
      var isActivated = internalData.isActivated;
      var mouseOpts = computeMouseOpts.value;
      var keyboardOpts = computeKeyboardOpts.value;
      var actived = editStore.actived;
      if (isActivated && !filterStore.visible) {
        if (!(actived.row || actived.column)) {
          if (keyboardConfig && keyboardOpts.isClip && mouseConfig && mouseOpts.area && $xetable.handleCopyCellAreaEvent) {
            $xetable.handleCopyCellAreaEvent(evnt);
          }
        }
        tableMethods.dispatchEvent("copy", {}, evnt);
      }
    };
    var handleGlobalCutEvent = function(evnt) {
      var keyboardConfig = props.keyboardConfig, mouseConfig = props.mouseConfig;
      var editStore = reactData.editStore, filterStore = reactData.filterStore;
      var isActivated = internalData.isActivated;
      var mouseOpts = computeMouseOpts.value;
      var keyboardOpts = computeKeyboardOpts.value;
      var actived = editStore.actived;
      if (isActivated && !filterStore.visible) {
        if (!(actived.row || actived.column)) {
          if (keyboardConfig && keyboardOpts.isClip && mouseConfig && mouseOpts.area && $xetable.handleCutCellAreaEvent) {
            $xetable.handleCutCellAreaEvent(evnt);
          }
        }
        tableMethods.dispatchEvent("cut", {}, evnt);
      }
    };
    var handleGlobalResizeEvent = function() {
      if ($xetable.closeMenu) {
        $xetable.closeMenu();
      }
      tablePrivateMethods.updateCellAreas();
      tableMethods.recalculate(true);
    };
    var handleTargetEnterEvent = function() {
      clearTimeout(internalData.tooltipTimeout);
      internalData.tooltipActive = true;
      tableMethods.closeTooltip();
    };
    var handleTooltip = function(evnt, cell, overflowElem, tipElem, params) {
      params.cell = cell;
      var tooltipStore = internalData.tooltipStore;
      var tooltipOpts = computeTooltipOpts.value;
      var column = params.column, row = params.row;
      var showAll = tooltipOpts.showAll, contentMethod = tooltipOpts.contentMethod;
      var $tooltip = refTooltip.value;
      var customContent = contentMethod ? contentMethod(params) : null;
      var useCustom = contentMethod && !xeUtils.eqNull(customContent);
      var content = useCustom ? customContent : (column.type === "html" ? overflowElem.innerText : overflowElem.textContent).trim();
      var isCellOverflow = overflowElem.scrollWidth > overflowElem.clientWidth;
      if (content && (showAll || useCustom || isCellOverflow)) {
        Object.assign(tooltipStore, {
          row,
          column,
          visible: true
        });
        if ($tooltip) {
          $tooltip.open(isCellOverflow ? overflowElem : tipElem || overflowElem, formatText(content));
        }
      }
      return nextTick();
    };
    tablePrivateMethods = {
      updateAfterDataIndex,
      callSlot: function(slotFunc, params) {
        if (slotFunc) {
          if ($xegrid) {
            return $xegrid.callSlot(slotFunc, params);
          }
          if (xeUtils.isFunction(slotFunc)) {
            return slotFunc(params);
          }
        }
        return [];
      },
      getParentElem: function() {
        var el = refElem.value;
        if ($xegrid) {
          var gridEl = $xegrid.getRefMaps().refElem.value;
          return gridEl ? gridEl.parentNode : null;
        }
        return el ? el.parentNode : null;
      },
      getParentHeight: function() {
        var height = props.height;
        var el = refElem.value;
        if (el) {
          var parentElem = el.parentNode;
          var parentPaddingSize = height === "auto" ? getPaddingTopBottomSize(parentElem) : 0;
          return Math.floor($xegrid ? $xegrid.getParentHeight() : xeUtils.toNumber(getComputedStyle(parentElem).height) - parentPaddingSize);
        }
        return 0;
      },
      getExcludeHeight: function() {
        return $xegrid ? $xegrid.getExcludeHeight() : 0;
      },
      defineField: function(record) {
        var treeConfig = props.treeConfig;
        var expandOpts = computeExpandOpts.value;
        var treeOpts = computeTreeOpts.value;
        var radioOpts = computeRadioOpts.value;
        var checkboxOpts = computeCheckboxOpts.value;
        var rowkey = getRowkey($xetable);
        internalData.tableFullColumn.forEach(function(column) {
          var property = column.property, editRender = column.editRender;
          if (property && !xeUtils.has(record, property)) {
            var cellValue = null;
            if (editRender) {
              var defaultValue = editRender.defaultValue;
              if (xeUtils.isFunction(defaultValue)) {
                cellValue = defaultValue({ column });
              } else if (!xeUtils.isUndefined(defaultValue)) {
                cellValue = defaultValue;
              }
            }
            xeUtils.set(record, property, cellValue);
          }
        });
        var otherFields = [radioOpts.labelField, checkboxOpts.checkField, checkboxOpts.labelField, expandOpts.labelField];
        otherFields.forEach(function(key) {
          if (key && eqEmptyValue(xeUtils.get(record, key))) {
            xeUtils.set(record, key, null);
          }
        });
        if (treeConfig && treeOpts.lazy && xeUtils.isUndefined(record[treeOpts.children])) {
          record[treeOpts.children] = null;
        }
        if (eqEmptyValue(xeUtils.get(record, rowkey))) {
          xeUtils.set(record, rowkey, getRowUniqueId());
        }
        return record;
      },
      handleTableData: function(force) {
        var scrollYLoad = reactData.scrollYLoad;
        var scrollYStore = internalData.scrollYStore, fullDataRowIdData = internalData.fullDataRowIdData;
        var fullData = force ? updateAfterFullData() : internalData.afterFullData;
        var tableData = scrollYLoad ? fullData.slice(scrollYStore.startIndex, scrollYStore.endIndex) : fullData.slice(0);
        tableData.forEach(function(row, $index) {
          var rowid = getRowid($xetable, row);
          var rest = fullDataRowIdData[rowid];
          if (rest) {
            rest.$index = $index;
          }
        });
        reactData.tableData = tableData;
        return nextTick();
      },
      updateCache: function(isSource) {
        var treeConfig = props.treeConfig;
        var treeOpts = computeTreeOpts.value;
        var fullDataRowIdData = internalData.fullDataRowIdData, fullAllDataRowIdData = internalData.fullAllDataRowIdData, tableFullData = internalData.tableFullData;
        var rowkey = getRowkey($xetable);
        var isLazy = treeConfig && treeOpts.lazy;
        var handleCache = function(row, index, items, path, parent) {
          var rowid = getRowid($xetable, row);
          if (eqEmptyValue(rowid)) {
            rowid = getRowUniqueId();
            xeUtils.set(row, rowkey, rowid);
          }
          if (isLazy && row[treeOpts.hasChild] && xeUtils.isUndefined(row[treeOpts.children])) {
            row[treeOpts.children] = null;
          }
          var rest = { row, rowid, index: treeConfig && parent ? -1 : index, _index: -1, $index: -1, items, parent };
          if (isSource) {
            fullDataRowIdData[rowid] = rest;
          }
          fullAllDataRowIdData[rowid] = rest;
        };
        if (isSource) {
          fullDataRowIdData = internalData.fullDataRowIdData = {};
        }
        fullAllDataRowIdData = internalData.fullAllDataRowIdData = {};
        if (treeConfig) {
          xeUtils.eachTree(tableFullData, handleCache, treeOpts);
        } else {
          tableFullData.forEach(handleCache);
        }
      },
      analyColumnWidth: function() {
        var tableFullColumn = internalData.tableFullColumn;
        var columnOpts = computeColumnOpts.value;
        var defaultWidth = columnOpts.width, defaultMinWidth = columnOpts.minWidth;
        var resizeList = [];
        var pxList = [];
        var pxMinList = [];
        var scaleList = [];
        var scaleMinList = [];
        var autoList = [];
        tableFullColumn.forEach(function(column) {
          if (defaultWidth && !column.width) {
            column.width = defaultWidth;
          }
          if (defaultMinWidth && !column.minWidth) {
            column.minWidth = defaultMinWidth;
          }
          if (column.visible) {
            if (column.resizeWidth) {
              resizeList.push(column);
            } else if (isPx(column.width)) {
              pxList.push(column);
            } else if (isScale(column.width)) {
              scaleList.push(column);
            } else if (isPx(column.minWidth)) {
              pxMinList.push(column);
            } else if (isScale(column.minWidth)) {
              scaleMinList.push(column);
            } else {
              autoList.push(column);
            }
          }
        });
        Object.assign(reactData.columnStore, { resizeList, pxList, pxMinList, scaleList, scaleMinList, autoList });
      },
      saveCustomResizable: function(isReset) {
        var id = props.id, customConfig = props.customConfig;
        var customOpts = computeCustomOpts.value;
        var collectColumn = internalData.collectColumn;
        var storage = customOpts.storage;
        var isResizable = storage === true || storage && storage.resizable;
        if (customConfig && isResizable) {
          var columnWidthStorageMap = getCustomStorageMap(resizableStorageKey);
          var columnWidthStorage_1;
          if (!id) {
            errLog("vxe.error.reqProp", ["id"]);
            return;
          }
          if (!isReset) {
            columnWidthStorage_1 = xeUtils.isPlainObject(columnWidthStorageMap[id]) ? columnWidthStorageMap[id] : {};
            xeUtils.eachTree(collectColumn, function(column) {
              if (column.resizeWidth) {
                var colKey = column.getKey();
                if (colKey) {
                  columnWidthStorage_1[colKey] = column.renderWidth;
                }
              }
            });
          }
          columnWidthStorageMap[id] = xeUtils.isEmpty(columnWidthStorage_1) ? void 0 : columnWidthStorage_1;
          localStorage.setItem(resizableStorageKey, xeUtils.toJSONString(columnWidthStorageMap));
        }
      },
      saveCustomVisible: function() {
        var id = props.id, customConfig = props.customConfig;
        var collectColumn = internalData.collectColumn;
        var customOpts = computeCustomOpts.value;
        var checkMethod = customOpts.checkMethod, storage = customOpts.storage;
        var isVisible = storage === true || storage && storage.visible;
        if (customConfig && isVisible) {
          var columnVisibleStorageMap = getCustomStorageMap(visibleStorageKey);
          var colHides_1 = [];
          var colShows_1 = [];
          if (!id) {
            errLog("vxe.error.reqProp", ["id"]);
            return;
          }
          xeUtils.eachTree(collectColumn, function(column) {
            if (!checkMethod || checkMethod({ column })) {
              if (!column.visible && column.defaultVisible) {
                var colKey = column.getKey();
                if (colKey) {
                  colHides_1.push(colKey);
                }
              } else if (column.visible && !column.defaultVisible) {
                var colKey = column.getKey();
                if (colKey) {
                  colShows_1.push(colKey);
                }
              }
            }
          });
          columnVisibleStorageMap[id] = [colHides_1.join(",")].concat(colShows_1.length ? [colShows_1.join(",")] : []).join("|") || void 0;
          localStorage.setItem(visibleStorageKey, xeUtils.toJSONString(columnVisibleStorageMap));
        }
      },
      handleCustom: function() {
        tablePrivateMethods.saveCustomVisible();
        tablePrivateMethods.analyColumnWidth();
        return tableMethods.refreshColumn();
      },
      preventEvent: function(evnt, type, args, next, end) {
        var evntList = VXETable.interceptor.get(type);
        var rest;
        if (!evntList.some(function(func) {
          return func(Object.assign({ $grid: $xegrid, $table: $xetable, $event: evnt }, args)) === false;
        })) {
          if (next) {
            rest = next();
          }
        }
        if (end) {
          end();
        }
        return rest;
      },
      checkSelectionStatus: function() {
        var treeConfig = props.treeConfig;
        var selection = reactData.selection, treeIndeterminates = reactData.treeIndeterminates;
        var afterFullData = internalData.afterFullData;
        var checkboxOpts = computeCheckboxOpts.value;
        var checkField = checkboxOpts.checkField, halfField = checkboxOpts.halfField, checkStrictly = checkboxOpts.checkStrictly, checkMethod = checkboxOpts.checkMethod;
        if (!checkStrictly) {
          var isAllSelected = false;
          var isIndeterminate = false;
          if (checkField) {
            isAllSelected = afterFullData.length > 0 && afterFullData.every(checkMethod ? function(row) {
              return !checkMethod({ row }) || xeUtils.get(row, checkField);
            } : function(row) {
              return xeUtils.get(row, checkField);
            });
            if (treeConfig) {
              if (halfField) {
                isIndeterminate = !isAllSelected && afterFullData.some(function(row) {
                  return xeUtils.get(row, checkField) || xeUtils.get(row, halfField) || $xetable.findRowIndexOf(treeIndeterminates, row) > -1;
                });
              } else {
                isIndeterminate = !isAllSelected && afterFullData.some(function(row) {
                  return xeUtils.get(row, checkField) || $xetable.findRowIndexOf(treeIndeterminates, row) > -1;
                });
              }
            } else {
              if (halfField) {
                isIndeterminate = !isAllSelected && afterFullData.some(function(row) {
                  return xeUtils.get(row, checkField) || xeUtils.get(row, halfField);
                });
              } else {
                isIndeterminate = !isAllSelected && afterFullData.some(function(row) {
                  return xeUtils.get(row, checkField);
                });
              }
            }
          } else {
            isAllSelected = afterFullData.length > 0 && afterFullData.every(checkMethod ? function(row) {
              return !checkMethod({ row }) || $xetable.findRowIndexOf(selection, row) > -1;
            } : function(row) {
              return $xetable.findRowIndexOf(selection, row) > -1;
            });
            if (treeConfig) {
              isIndeterminate = !isAllSelected && afterFullData.some(function(row) {
                return $xetable.findRowIndexOf(treeIndeterminates, row) > -1 || $xetable.findRowIndexOf(selection, row) > -1;
              });
            } else {
              isIndeterminate = !isAllSelected && afterFullData.some(function(row) {
                return $xetable.findRowIndexOf(selection, row) > -1;
              });
            }
          }
          reactData.isAllSelected = isAllSelected;
          reactData.isIndeterminate = isIndeterminate;
        }
      },
      handleSelectRow: function(_a, value) {
        var row = _a.row;
        var treeConfig = props.treeConfig;
        var selection = reactData.selection, treeIndeterminates = reactData.treeIndeterminates;
        var afterFullData = internalData.afterFullData;
        var treeOpts = computeTreeOpts.value;
        var checkboxOpts = computeCheckboxOpts.value;
        var property = checkboxOpts.checkField, checkStrictly = checkboxOpts.checkStrictly, checkMethod = checkboxOpts.checkMethod;
        if (property) {
          if (treeConfig && !checkStrictly) {
            if (value === -1) {
              if ($xetable.findRowIndexOf(treeIndeterminates, row) === -1) {
                treeIndeterminates.push(row);
              }
              xeUtils.set(row, property, false);
            } else {
              xeUtils.eachTree([row], function(item) {
                if ($xetable.eqRow(item, row) || (!checkMethod || checkMethod({ row: item }))) {
                  xeUtils.set(item, property, value);
                  xeUtils.remove(treeIndeterminates, function(half) {
                    return half === item;
                  });
                  handleCheckboxReserveRow(row, value);
                }
              }, treeOpts);
            }
            var matchObj = xeUtils.findTree(afterFullData, function(item) {
              return item === row;
            }, treeOpts);
            if (matchObj && matchObj.parent) {
              var parentStatus = void 0;
              var vItems_1 = checkMethod ? matchObj.items.filter(function(item) {
                return checkMethod({ row: item });
              }) : matchObj.items;
              var indeterminatesItem = xeUtils.find(matchObj.items, function(item) {
                return $xetable.findRowIndexOf(treeIndeterminates, item) > -1;
              });
              if (indeterminatesItem) {
                parentStatus = -1;
              } else {
                var selectItems = matchObj.items.filter(function(item) {
                  return xeUtils.get(item, property);
                });
                parentStatus = selectItems.filter(function(item) {
                  return $xetable.findRowIndexOf(vItems_1, item) > -1;
                }).length === vItems_1.length ? true : selectItems.length || value === -1 ? -1 : false;
              }
              return tablePrivateMethods.handleSelectRow({ row: matchObj.parent }, parentStatus);
            }
          } else {
            if (!checkMethod || checkMethod({ row })) {
              xeUtils.set(row, property, value);
              handleCheckboxReserveRow(row, value);
            }
          }
        } else {
          if (treeConfig && !checkStrictly) {
            if (value === -1) {
              if ($xetable.findRowIndexOf(treeIndeterminates, row) === -1) {
                treeIndeterminates.push(row);
              }
              xeUtils.remove(selection, function(item) {
                return item === row;
              });
            } else {
              xeUtils.eachTree([row], function(item) {
                if ($xetable.eqRow(item, row) || (!checkMethod || checkMethod({ row: item }))) {
                  if (value) {
                    selection.push(item);
                  } else {
                    xeUtils.remove(selection, function(select) {
                      return select === item;
                    });
                  }
                  xeUtils.remove(treeIndeterminates, function(half) {
                    return half === item;
                  });
                  handleCheckboxReserveRow(row, value);
                }
              }, treeOpts);
            }
            var matchObj = xeUtils.findTree(afterFullData, function(item) {
              return item === row;
            }, treeOpts);
            if (matchObj && matchObj.parent) {
              var parentStatus = void 0;
              var vItems_2 = checkMethod ? matchObj.items.filter(function(item) {
                return checkMethod({ row: item });
              }) : matchObj.items;
              var indeterminatesItem = xeUtils.find(matchObj.items, function(item) {
                return $xetable.findRowIndexOf(treeIndeterminates, item) > -1;
              });
              if (indeterminatesItem) {
                parentStatus = -1;
              } else {
                var selectItems = matchObj.items.filter(function(item) {
                  return $xetable.findRowIndexOf(selection, item) > -1;
                });
                parentStatus = selectItems.filter(function(item) {
                  return $xetable.findRowIndexOf(vItems_2, item) > -1;
                }).length === vItems_2.length ? true : selectItems.length || value === -1 ? -1 : false;
              }
              return tablePrivateMethods.handleSelectRow({ row: matchObj.parent }, parentStatus);
            }
          } else {
            if (!checkMethod || checkMethod({ row })) {
              if (value) {
                if ($xetable.findRowIndexOf(selection, row) === -1) {
                  selection.push(row);
                }
              } else {
                xeUtils.remove(selection, function(item) {
                  return item === row;
                });
              }
              handleCheckboxReserveRow(row, value);
            }
          }
        }
        tablePrivateMethods.checkSelectionStatus();
      },
      triggerHeaderHelpEvent: function(evnt, params) {
        var column = params.column;
        var titleHelp = column.titleHelp;
        if (titleHelp.message) {
          var tooltipStore = internalData.tooltipStore;
          var $tooltip = refTooltip.value;
          var content = getFuncText(titleHelp.message);
          handleTargetEnterEvent();
          tooltipStore.visible = true;
          if ($tooltip) {
            $tooltip.open(evnt.currentTarget, content);
          }
        }
      },
      triggerHeaderTooltipEvent: function(evnt, params) {
        var tooltipStore = internalData.tooltipStore;
        var column = params.column;
        var titleElem = evnt.currentTarget;
        handleTargetEnterEvent();
        if (tooltipStore.column !== column || !tooltipStore.visible) {
          handleTooltip(evnt, titleElem, titleElem, null, params);
        }
      },
      triggerBodyTooltipEvent: function(evnt, params) {
        var editConfig = props.editConfig;
        var editStore = reactData.editStore;
        var tooltipStore = internalData.tooltipStore;
        var editOpts = computeEditOpts.value;
        var actived = editStore.actived;
        var row = params.row, column = params.column;
        var cell = evnt.currentTarget;
        handleTargetEnterEvent();
        if (isEnableConf(editConfig)) {
          if (editOpts.mode === "row" && actived.row === row || actived.row === row && actived.column === column) {
            return;
          }
        }
        if (tooltipStore.column !== column || tooltipStore.row !== row || !tooltipStore.visible) {
          var overflowElem = void 0;
          var tipElem = void 0;
          if (column.treeNode) {
            overflowElem = cell.querySelector(".vxe-tree-cell");
            if (column.type === "html") {
              tipElem = cell.querySelector(".vxe-cell--html");
            }
          } else {
            tipElem = cell.querySelector(column.type === "html" ? ".vxe-cell--html" : ".vxe-cell--label");
          }
          handleTooltip(evnt, cell, overflowElem || cell.children[0], tipElem, params);
        }
      },
      triggerFooterTooltipEvent: function(evnt, params) {
        var column = params.column;
        var tooltipStore = internalData.tooltipStore;
        var cell = evnt.currentTarget;
        handleTargetEnterEvent();
        if (tooltipStore.column !== column || !tooltipStore.visible) {
          handleTooltip(evnt, cell, cell.querySelector(".vxe-cell--item") || cell.children[0], null, params);
        }
      },
      handleTargetLeaveEvent: function() {
        var tooltipOpts = computeTooltipOpts.value;
        internalData.tooltipActive = false;
        if (tooltipOpts.enterable) {
          internalData.tooltipTimeout = setTimeout(function() {
            var $tooltip = refTooltip.value;
            if ($tooltip && !$tooltip.reactData.isHover) {
              tableMethods.closeTooltip();
            }
          }, tooltipOpts.leaveDelay);
        } else {
          tableMethods.closeTooltip();
        }
      },
      triggerHeaderCellClickEvent: function(evnt, params) {
        var _lastResizeTime = internalData._lastResizeTime;
        var sortOpts = computeSortOpts.value;
        var column = params.column;
        var cell = evnt.currentTarget;
        var triggerResizable = _lastResizeTime && _lastResizeTime > Date.now() - 300;
        var triggerSort = getEventTargetNode(evnt, cell, "vxe-cell--sort").flag;
        var triggerFilter = getEventTargetNode(evnt, cell, "vxe-cell--filter").flag;
        if (sortOpts.trigger === "cell" && !(triggerResizable || triggerSort || triggerFilter)) {
          tablePrivateMethods.triggerSortEvent(evnt, column, getNextSortOrder(column));
        }
        tableMethods.dispatchEvent("header-cell-click", Object.assign({ triggerResizable, triggerSort, triggerFilter, cell }, params), evnt);
        if (props.highlightCurrentColumn) {
          tableMethods.setCurrentColumn(column);
        }
      },
      triggerHeaderCellDblclickEvent: function(evnt, params) {
        tableMethods.dispatchEvent("header-cell-dblclick", Object.assign({ cell: evnt.currentTarget }, params), evnt);
      },
      triggerCellClickEvent: function(evnt, params) {
        var highlightCurrentRow = props.highlightCurrentRow, editConfig = props.editConfig;
        var editStore = reactData.editStore;
        var expandOpts = computeExpandOpts.value;
        var editOpts = computeEditOpts.value;
        var treeOpts = computeTreeOpts.value;
        var radioOpts = computeRadioOpts.value;
        var checkboxOpts = computeCheckboxOpts.value;
        var actived = editStore.actived;
        var row = params.row, column = params.column;
        var type = column.type, treeNode = column.treeNode;
        var isRadioType = type === "radio";
        var isCheckboxType = type === "checkbox";
        var isExpandType = type === "expand";
        var cell = evnt.currentTarget;
        var triggerRadio = isRadioType && getEventTargetNode(evnt, cell, "vxe-cell--radio").flag;
        var triggerCheckbox = isCheckboxType && getEventTargetNode(evnt, cell, "vxe-cell--checkbox").flag;
        var triggerTreeNode = treeNode && getEventTargetNode(evnt, cell, "vxe-tree--btn-wrapper").flag;
        var triggerExpandNode = isExpandType && getEventTargetNode(evnt, cell, "vxe-table--expanded").flag;
        params = Object.assign({ cell, triggerRadio, triggerCheckbox, triggerTreeNode, triggerExpandNode }, params);
        if (!triggerCheckbox && !triggerRadio) {
          if (!triggerExpandNode && (expandOpts.trigger === "row" || isExpandType && expandOpts.trigger === "cell")) {
            tablePrivateMethods.triggerRowExpandEvent(evnt, params);
          }
          if (treeOpts.trigger === "row" || treeNode && treeOpts.trigger === "cell") {
            tablePrivateMethods.triggerTreeExpandEvent(evnt, params);
          }
        }
        if (!triggerTreeNode) {
          if (!triggerExpandNode) {
            if (highlightCurrentRow) {
              if (!triggerCheckbox && !triggerRadio) {
                tablePrivateMethods.triggerCurrentRowEvent(evnt, params);
              }
            }
            if (!triggerRadio && (radioOpts.trigger === "row" || isRadioType && radioOpts.trigger === "cell")) {
              tablePrivateMethods.triggerRadioRowEvent(evnt, params);
            }
            if (!triggerCheckbox && (checkboxOpts.trigger === "row" || isCheckboxType && checkboxOpts.trigger === "cell")) {
              tablePrivateMethods.handleToggleCheckRowEvent(evnt, params);
            }
          }
          if (isEnableConf(editConfig)) {
            if (editOpts.trigger === "manual") {
              if (actived.args && actived.row === row && column !== actived.column) {
                handleChangeCell(evnt, params);
              }
            } else if (!actived.args || row !== actived.row || column !== actived.column) {
              if (editOpts.trigger === "click") {
                handleChangeCell(evnt, params);
              } else if (editOpts.trigger === "dblclick") {
                if (editOpts.mode === "row" && actived.row === row) {
                  handleChangeCell(evnt, params);
                }
              }
            }
          }
        }
        tableMethods.dispatchEvent("cell-click", params, evnt);
      },
      triggerCellDblclickEvent: function(evnt, params) {
        var editConfig = props.editConfig;
        var editStore = reactData.editStore;
        var editOpts = computeEditOpts.value;
        var actived = editStore.actived;
        var cell = evnt.currentTarget;
        params = Object.assign({ cell }, params);
        if (isEnableConf(editConfig) && editOpts.trigger === "dblclick") {
          if (!actived.args || evnt.currentTarget !== actived.args.cell) {
            if (editOpts.mode === "row") {
              checkValidate("blur").catch(function(e) {
                return e;
              }).then(function() {
                $xetable.handleActived(params, evnt).then(function() {
                  return checkValidate("change");
                }).catch(function(e) {
                  return e;
                });
              });
            } else if (editOpts.mode === "cell") {
              $xetable.handleActived(params, evnt).then(function() {
                return checkValidate("change");
              }).catch(function(e) {
                return e;
              });
            }
          }
        }
        tableMethods.dispatchEvent("cell-dblclick", params, evnt);
      },
      handleToggleCheckRowEvent: function(evnt, params) {
        var selection = reactData.selection;
        var checkboxOpts = computeCheckboxOpts.value;
        var property = checkboxOpts.checkField;
        var row = params.row;
        var value = property ? !xeUtils.get(row, property) : $xetable.findRowIndexOf(selection, row) === -1;
        if (evnt) {
          tablePrivateMethods.triggerCheckRowEvent(evnt, params, value);
        } else {
          tablePrivateMethods.handleSelectRow(params, value);
        }
      },
      triggerCheckRowEvent: function(evnt, params, value) {
        var checkboxOpts = computeCheckboxOpts.value;
        var checkMethod = checkboxOpts.checkMethod;
        if (!checkMethod || checkMethod({ row: params.row })) {
          tablePrivateMethods.handleSelectRow(params, value);
          tableMethods.dispatchEvent("checkbox-change", Object.assign({
            records: tableMethods.getCheckboxRecords(),
            reserves: tableMethods.getCheckboxReserveRecords(),
            indeterminates: tableMethods.getCheckboxIndeterminateRecords(),
            checked: value
          }, params), evnt);
        }
      },
      triggerCheckAllEvent: function(evnt, value) {
        tableMethods.setAllCheckboxRow(value);
        if (evnt) {
          tableMethods.dispatchEvent("checkbox-all", {
            records: tableMethods.getCheckboxRecords(),
            reserves: tableMethods.getCheckboxReserveRecords(),
            indeterminates: tableMethods.getCheckboxIndeterminateRecords(),
            checked: value
          }, evnt);
        }
      },
      triggerRadioRowEvent: function(evnt, params) {
        var oldValue = reactData.selectRow;
        var row = params.row;
        var radioOpts = computeRadioOpts.value;
        var newValue = row;
        var isChange = oldValue !== newValue;
        if (isChange) {
          tableMethods.setRadioRow(newValue);
        } else if (!radioOpts.strict) {
          isChange = oldValue === newValue;
          if (isChange) {
            newValue = null;
            tableMethods.clearRadioRow();
          }
        }
        if (isChange) {
          tableMethods.dispatchEvent("radio-change", __assign({ oldValue, newValue }, params), evnt);
        }
      },
      triggerCurrentRowEvent: function(evnt, params) {
        var oldValue = reactData.currentRow;
        var newValue = params.row;
        var isChange = oldValue !== newValue;
        tableMethods.setCurrentRow(newValue);
        if (isChange) {
          tableMethods.dispatchEvent("current-change", __assign({ oldValue, newValue }, params), evnt);
        }
      },
      triggerRowExpandEvent: function(evnt, params) {
        var expandLazyLoadeds = reactData.expandLazyLoadeds, column = reactData.expandColumn;
        var expandOpts = computeExpandOpts.value;
        var row = params.row;
        var lazy = expandOpts.lazy;
        if (!lazy || $xetable.findRowIndexOf(expandLazyLoadeds, row) === -1) {
          var expanded = !tableMethods.isExpandByRow(row);
          var columnIndex = tableMethods.getColumnIndex(column);
          var $columnIndex = tableMethods.getVMColumnIndex(column);
          tableMethods.setRowExpand(row, expanded);
          tableMethods.dispatchEvent("toggle-row-expand", {
            expanded,
            column,
            columnIndex,
            $columnIndex,
            row,
            rowIndex: tableMethods.getRowIndex(row),
            $rowIndex: tableMethods.getVMRowIndex(row)
          }, evnt);
        }
      },
      triggerTreeExpandEvent: function(evnt, params) {
        var treeLazyLoadeds = reactData.treeLazyLoadeds;
        var treeOpts = computeTreeOpts.value;
        var row = params.row, column = params.column;
        var lazy = treeOpts.lazy;
        if (!lazy || $xetable.findRowIndexOf(treeLazyLoadeds, row) === -1) {
          var expanded = !tableMethods.isTreeExpandByRow(row);
          var columnIndex = tableMethods.getColumnIndex(column);
          var $columnIndex = tableMethods.getVMColumnIndex(column);
          tableMethods.setTreeExpand(row, expanded);
          tableMethods.dispatchEvent("toggle-tree-expand", { expanded, column, columnIndex, $columnIndex, row }, evnt);
        }
      },
      triggerSortEvent: function(evnt, column, order) {
        var sortOpts = computeSortOpts.value;
        var property = column.property;
        if (column.sortable) {
          if (!order || column.order === order) {
            tableMethods.clearSort(sortOpts.multiple ? column : null);
          } else {
            tableMethods.sort({ field: property, order });
          }
          var params = { column, property, order: column.order, sortList: tableMethods.getSortColumns() };
          tableMethods.dispatchEvent("sort-change", params, evnt);
        }
      },
      triggerScrollXEvent: function() {
        loadScrollXData();
      },
      triggerScrollYEvent: function(evnt) {
        var scrollYStore = internalData.scrollYStore;
        var adaptive = scrollYStore.adaptive, offsetSize = scrollYStore.offsetSize, visibleSize = scrollYStore.visibleSize;
        if (isWebkit && adaptive && offsetSize * 2 + visibleSize <= 40) {
          loadScrollYData(evnt);
        } else {
          debounceScrollY(evnt);
        }
      },
      scrollToTreeRow: function(row) {
        var treeConfig = props.treeConfig;
        var tableFullData = internalData.tableFullData;
        var rests = [];
        if (treeConfig) {
          var treeOpts = computeTreeOpts.value;
          var matchObj = xeUtils.findTree(tableFullData, function(item) {
            return item === row;
          }, treeOpts);
          if (matchObj) {
            var nodes_1 = matchObj.nodes;
            nodes_1.forEach(function(row2, index) {
              if (index < nodes_1.length - 1 && !tableMethods.isTreeExpandByRow(row2)) {
                rests.push(tableMethods.setTreeExpand(row2, true));
              }
            });
          }
        }
        return Promise.all(rests).then(function() {
          return rowToVisible($xetable, row);
        });
      },
      updateScrollXSpace: function() {
        var scrollXLoad = reactData.scrollXLoad, scrollbarWidth = reactData.scrollbarWidth;
        var visibleColumn = internalData.visibleColumn, scrollXStore = internalData.scrollXStore, elemStore = internalData.elemStore, tableWidth = internalData.tableWidth;
        var tableHeader = refTableHeader.value;
        var tableBody = refTableBody.value;
        var tableFooter = refTableFooter.value;
        var tableBodyElem = tableBody ? tableBody.$el : null;
        if (tableBodyElem) {
          var tableHeaderElem = tableHeader ? tableHeader.$el : null;
          var tableFooterElem = tableFooter ? tableFooter.$el : null;
          var headerElem = tableHeaderElem ? tableHeaderElem.querySelector(".vxe-table--header") : null;
          var bodyElem = tableBodyElem.querySelector(".vxe-table--body");
          var footerElem = tableFooterElem ? tableFooterElem.querySelector(".vxe-table--footer") : null;
          var leftSpaceWidth = visibleColumn.slice(0, scrollXStore.startIndex).reduce(function(previous, column) {
            return previous + column.renderWidth;
          }, 0);
          var marginLeft = "";
          if (scrollXLoad) {
            marginLeft = leftSpaceWidth + "px";
          }
          if (headerElem) {
            headerElem.style.marginLeft = marginLeft;
          }
          bodyElem.style.marginLeft = marginLeft;
          if (footerElem) {
            footerElem.style.marginLeft = marginLeft;
          }
          var containerList = ["main"];
          containerList.forEach(function(name) {
            var layoutList = ["header", "body", "footer"];
            layoutList.forEach(function(layout) {
              var xSpaceElem = elemStore[name + "-" + layout + "-xSpace"];
              if (xSpaceElem) {
                xSpaceElem.style.width = scrollXLoad ? tableWidth + (layout === "header" ? scrollbarWidth : 0) + "px" : "";
              }
            });
          });
          nextTick(updateStyle);
        }
      },
      updateScrollYSpace: function() {
        var scrollYLoad = reactData.scrollYLoad;
        var scrollYStore = internalData.scrollYStore, elemStore = internalData.elemStore, afterFullData = internalData.afterFullData;
        var startIndex = scrollYStore.startIndex, rowHeight = scrollYStore.rowHeight;
        var bodyHeight = afterFullData.length * rowHeight;
        var topSpaceHeight = Math.max(0, startIndex * rowHeight);
        var containerList = ["main", "left", "right"];
        var marginTop = "";
        var ySpaceHeight = "";
        if (scrollYLoad) {
          marginTop = topSpaceHeight + "px";
          ySpaceHeight = bodyHeight + "px";
        }
        containerList.forEach(function(name) {
          var layoutList = ["header", "body", "footer"];
          var tableElem = elemStore[name + "-body-table"];
          if (tableElem) {
            tableElem.style.marginTop = marginTop;
          }
          layoutList.forEach(function(layout) {
            var ySpaceElem = elemStore[name + "-" + layout + "-ySpace"];
            if (ySpaceElem) {
              ySpaceElem.style.height = ySpaceHeight;
            }
          });
        });
        nextTick(updateStyle);
      },
      updateScrollXData: function() {
        handleTableColumn();
        tablePrivateMethods.updateScrollXSpace();
      },
      updateScrollYData: function() {
        tablePrivateMethods.handleTableData();
        tablePrivateMethods.updateScrollYSpace();
      },
      checkScrolling: function() {
        var leftContainerElem = refLeftContainer.value;
        var rightContainerElem = refRightContainer.value;
        var tableBody = refTableBody.value;
        var bodyElem = tableBody ? tableBody.$el : null;
        if (bodyElem) {
          if (leftContainerElem) {
            if (bodyElem.scrollLeft > 0) {
              addClass(leftContainerElem, "scrolling--middle");
            } else {
              removeClass(leftContainerElem, "scrolling--middle");
            }
          }
          if (rightContainerElem) {
            if (bodyElem.clientWidth < bodyElem.scrollWidth - Math.ceil(bodyElem.scrollLeft)) {
              addClass(rightContainerElem, "scrolling--middle");
            } else {
              removeClass(rightContainerElem, "scrolling--middle");
            }
          }
        }
      },
      updateZindex: function() {
        if (props.zIndex) {
          internalData.tZindex = props.zIndex;
        } else if (internalData.tZindex < getLastZIndex()) {
          internalData.tZindex = nextZIndex();
        }
      },
      updateCellAreas: function() {
        var mouseConfig = props.mouseConfig;
        var mouseOpts = computeMouseOpts.value;
        if (mouseConfig && mouseOpts.area && $xetable.handleUpdateCellAreas) {
          $xetable.handleUpdateCellAreas();
        }
      },
      triggerHoverEvent: function(evnt, _a) {
        var row = _a.row;
        tablePrivateMethods.setHoverRow(row);
      },
      setHoverRow: function(row) {
        var rowid = getRowid($xetable, row);
        var el = refElem.value;
        tablePrivateMethods.clearHoverRow();
        if (el) {
          xeUtils.arrayEach(el.querySelectorAll('[rowid="' + rowid + '"]'), function(elem) {
            return addClass(elem, "row--hover");
          });
        }
        internalData.hoverRow = row;
      },
      clearHoverRow: function() {
        var el = refElem.value;
        if (el) {
          xeUtils.arrayEach(el.querySelectorAll(".vxe-body--row.row--hover"), function(elem) {
            return removeClass(elem, "row--hover");
          });
        }
        internalData.hoverRow = null;
      },
      getCell: function(row, column) {
        var rowid = getRowid($xetable, row);
        var tableBody = refTableBody.value;
        var leftBody = refTableLeftBody.value;
        var rightBody = refTableRightBody.value;
        var bodyElem;
        if (column.fixed) {
          if (column.fixed === "left") {
            if (leftBody) {
              bodyElem = leftBody.$el;
            }
          } else {
            if (rightBody) {
              bodyElem = rightBody.$el;
            }
          }
        }
        if (!bodyElem) {
          bodyElem = tableBody.$el;
        }
        if (bodyElem) {
          return bodyElem.querySelector('.vxe-body--row[rowid="' + rowid + '"] .' + column.id);
        }
        return null;
      },
      getCellLabel: function(row, column) {
        var formatter = column.formatter;
        var cellValue = getCellValue(row, column);
        var cellLabel = cellValue;
        if (formatter) {
          var formatData = void 0;
          var fullAllDataRowIdData = internalData.fullAllDataRowIdData;
          var rowid = getRowid($xetable, row);
          var colid = column.id;
          var rest = fullAllDataRowIdData[rowid];
          if (rest) {
            formatData = rest.formatData;
            if (!formatData) {
              formatData = fullAllDataRowIdData[rowid].formatData = {};
            }
            if (rest && formatData[colid]) {
              if (formatData[colid].value === cellValue) {
                return formatData[colid].label;
              }
            }
          }
          var formatParams = { cellValue, row, rowIndex: tableMethods.getRowIndex(row), column, columnIndex: tableMethods.getColumnIndex(column) };
          if (xeUtils.isString(formatter)) {
            var globalFunc = VXETable.formats.get(formatter);
            cellLabel = globalFunc ? globalFunc(formatParams) : "";
          } else if (xeUtils.isArray(formatter)) {
            var globalFunc = VXETable.formats.get(formatter[0]);
            cellLabel = globalFunc ? globalFunc.apply(void 0, __spreadArray([formatParams], formatter.slice(1))) : "";
          } else {
            cellLabel = formatter(formatParams);
          }
          if (formatData) {
            formatData[colid] = { value: cellValue, label: cellLabel };
          }
        }
        return cellLabel;
      },
      findRowIndexOf: function(list, row) {
        return row ? xeUtils.findIndexOf(list, function(item) {
          return $xetable.eqRow(item, row);
        }) : -1;
      },
      eqRow: function(row1, row2) {
        if (row1 && row2) {
          if (row1 === row2) {
            return true;
          }
          return getRowid($xetable, row1) === getRowid($xetable, row2);
        }
        return false;
      }
    };
    Object.assign($xetable, tableMethods, tablePrivateMethods);
    var renderFixed = function(fixedType) {
      var showHeader = props.showHeader, showFooter = props.showFooter;
      var tableData = reactData.tableData, tableColumn = reactData.tableColumn, tableGroupColumn = reactData.tableGroupColumn, columnStore = reactData.columnStore, footerTableData = reactData.footerTableData;
      var isFixedLeft = fixedType === "left";
      var fixedColumn = isFixedLeft ? columnStore.leftList : columnStore.rightList;
      return h("div", {
        ref: isFixedLeft ? refLeftContainer : refRightContainer,
        class: "vxe-table--fixed-" + fixedType + "-wrapper"
      }, [
        showHeader ? h(resolveComponent("vxe-table-header"), {
          ref: isFixedLeft ? refTableLeftHeader : refTableRightHeader,
          fixedType,
          tableData,
          tableColumn,
          tableGroupColumn,
          fixedColumn
        }) : createCommentVNode(),
        h(TableBodyComponent, {
          ref: isFixedLeft ? refTableLeftBody : refTableRightBody,
          fixedType,
          tableData,
          tableColumn,
          fixedColumn
        }),
        showFooter ? h(resolveComponent("vxe-table-footer"), {
          ref: isFixedLeft ? refTableLeftFooter : refTableRightFooter,
          footerTableData,
          tableColumn,
          fixedColumn,
          fixedType
        }) : createCommentVNode()
      ]);
    };
    var renderEmptyContenet = function() {
      var emptyOpts = computeEmptyOpts.value;
      var params = { $table: $xetable };
      if (slots.empty) {
        return slots.empty(params);
      } else {
        var compConf = emptyOpts.name ? VXETable.renderer.get(emptyOpts.name) : null;
        var renderEmpty = compConf ? compConf.renderEmpty : null;
        if (renderEmpty) {
          return renderEmpty(emptyOpts, params);
        }
      }
      return getFuncText(props.emptyText) || GlobalConfig.i18n("vxe.table.emptyText");
    };
    function handleUupdateResize() {
      var el = refElem.value;
      if (el && el.clientWidth && el.clientHeight) {
        tableMethods.recalculate();
      }
    }
    watch(function() {
      return props.data;
    }, function(value) {
      var inited = internalData.inited, initStatus = internalData.initStatus;
      loadTableData(value || []).then(function() {
        reactData.scrollXLoad;
        reactData.scrollYLoad;
        reactData.expandColumn;
        internalData.inited = true;
        internalData.initStatus = true;
        if (!initStatus) {
          handleLoadDefaults();
        }
        if (!inited) {
          handleInitDefaults();
        }
        tableMethods.recalculate();
      });
    });
    watch(function() {
      return reactData.staticColumns;
    }, function(value) {
      handleColumn(value);
    });
    watch(function() {
      return reactData.tableColumn;
    }, function() {
      tablePrivateMethods.analyColumnWidth();
    });
    watch(function() {
      return props.showHeader;
    }, function() {
      nextTick(function() {
        tableMethods.recalculate(true).then(function() {
          return tableMethods.refreshScroll();
        });
      });
    });
    watch(function() {
      return props.showFooter;
    }, function() {
      nextTick(function() {
        tableMethods.recalculate(true).then(function() {
          return tableMethods.refreshScroll();
        });
      });
    });
    watch(function() {
      return props.height;
    }, function() {
      nextTick(function() {
        return tableMethods.recalculate(true);
      });
    });
    watch(function() {
      return props.maxHeight;
    }, function() {
      nextTick(function() {
        return tableMethods.recalculate(true);
      });
    });
    watch(function() {
      return props.syncResize;
    }, function(value) {
      if (value) {
        handleUupdateResize();
        nextTick(function() {
          handleUupdateResize();
          setTimeout(function() {
            return handleUupdateResize();
          });
        });
      }
    });
    watch(function() {
      return props.mergeCells;
    }, function(value) {
      tableMethods.clearMergeCells();
      nextTick(function() {
        if (value) {
          tableMethods.setMergeCells(value);
        }
      });
    });
    watch(function() {
      return props.mergeFooterItems;
    }, function(value) {
      tableMethods.clearMergeFooterItems();
      nextTick(function() {
        if (value) {
          tableMethods.setMergeFooterItems(value);
        }
      });
    });
    VXETable.hooks.forEach(function(options) {
      var setupTable = options.setupTable;
      if (setupTable) {
        var hookRest = setupTable($xetable);
        if (hookRest && xeUtils.isObject(hookRest)) {
          Object.assign($xetable, hookRest);
        }
      }
    });
    tablePrivateMethods.preventEvent(null, "created", { $table: $xetable });
    var resizeObserver;
    onActivated(function() {
      tableMethods.recalculate().then(function() {
        return tableMethods.refreshScroll();
      });
      tablePrivateMethods.preventEvent(null, "activated", { $table: $xetable });
    });
    onDeactivated(function() {
      internalData.isActivated = false;
      tablePrivateMethods.preventEvent(null, "deactivated", { $table: $xetable });
    });
    onMounted(function() {
      nextTick(function() {
        var data = props.data;
        props.treeConfig;
        props.showOverflow;
        var scrollXStore = internalData.scrollXStore, scrollYStore = internalData.scrollYStore;
        var sYOpts = computeSYOpts.value;
        computeEditOpts.value;
        computeTreeOpts.value;
        computeRadioOpts.value;
        computeCheckboxOpts.value;
        computeExpandOpts.value;
        Object.assign(scrollYStore, {
          startIndex: 0,
          endIndex: 0,
          visibleSize: 0,
          adaptive: sYOpts.adaptive !== false
        });
        Object.assign(scrollXStore, {
          startIndex: 0,
          endIndex: 0,
          visibleSize: 0
        });
        loadTableData(data || []).then(function() {
          if (data && data.length) {
            internalData.inited = true;
            internalData.initStatus = true;
            handleLoadDefaults();
            handleInitDefaults();
          }
          updateStyle();
        });
        if (props.autoResize) {
          var el = refElem.value;
          var parentEl = tablePrivateMethods.getParentElem();
          resizeObserver = createResizeEvent(function() {
            if (props.autoResize) {
              tableMethods.recalculate(true);
            }
          });
          if (el) {
            resizeObserver.observe(el);
          }
          if (parentEl) {
            resizeObserver.observe(parentEl);
          }
        }
      });
      GlobalEvent.on($xetable, "paste", handleGlobalPasteEvent);
      GlobalEvent.on($xetable, "copy", handleGlobalCopyEvent);
      GlobalEvent.on($xetable, "cut", handleGlobalCutEvent);
      GlobalEvent.on($xetable, "mousedown", handleGlobalMousedownEvent);
      GlobalEvent.on($xetable, "blur", handleGlobalBlurEvent);
      GlobalEvent.on($xetable, "mousewheel", handleGlobalMousewheelEvent);
      GlobalEvent.on($xetable, "keydown", handleGlobalKeydownEvent);
      GlobalEvent.on($xetable, "resize", handleGlobalResizeEvent);
      if ($xetable.handleGlobalContextmenuEvent) {
        GlobalEvent.on($xetable, "contextmenu", $xetable.handleGlobalContextmenuEvent);
      }
      tablePrivateMethods.preventEvent(null, "mounted", { $table: $xetable });
    });
    onBeforeUnmount(function() {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      tableMethods.closeFilter();
      if ($xetable.closeMenu) {
        $xetable.closeMenu();
      }
      tablePrivateMethods.preventEvent(null, "beforeUnmount", { $table: $xetable });
    });
    onUnmounted(function() {
      GlobalEvent.off($xetable, "paste");
      GlobalEvent.off($xetable, "copy");
      GlobalEvent.off($xetable, "cut");
      GlobalEvent.off($xetable, "mousedown");
      GlobalEvent.off($xetable, "blur");
      GlobalEvent.off($xetable, "mousewheel");
      GlobalEvent.off($xetable, "keydown");
      GlobalEvent.off($xetable, "resize");
      GlobalEvent.off($xetable, "contextmenu");
      tablePrivateMethods.preventEvent(null, "unmounted", { $table: $xetable });
    });
    var renderVN = function() {
      var _a;
      var loading = props.loading, stripe = props.stripe, showHeader = props.showHeader, height = props.height, treeConfig = props.treeConfig, mouseConfig = props.mouseConfig, showFooter = props.showFooter, highlightCell = props.highlightCell, highlightHoverRow = props.highlightHoverRow, highlightHoverColumn = props.highlightHoverColumn, editConfig = props.editConfig;
      var isGroup = reactData.isGroup, overflowX = reactData.overflowX, overflowY = reactData.overflowY, scrollXLoad = reactData.scrollXLoad, scrollYLoad = reactData.scrollYLoad, scrollbarHeight = reactData.scrollbarHeight, tableData = reactData.tableData, tableColumn = reactData.tableColumn, tableGroupColumn = reactData.tableGroupColumn, footerTableData = reactData.footerTableData, initStore = reactData.initStore, columnStore = reactData.columnStore, filterStore = reactData.filterStore;
      var leftList = columnStore.leftList, rightList = columnStore.rightList;
      var tooltipOpts = computeTooltipOpts.value;
      var treeOpts = computeTreeOpts.value;
      var vSize = computeSize.value;
      var tableBorder = computeTableBorder.value;
      var mouseOpts = computeMouseOpts.value;
      var validOpts = computeValidOpts.value;
      var validTipOpts = computeValidTipOpts.value;
      var isMenu = computeIsMenu.value;
      return h("div", {
        ref: refElem,
        class: ["vxe-table", "vxe-table--render-default", "tid_" + xID, "border--" + tableBorder, (_a = {}, _a["size--" + vSize] = vSize, _a["vxe-editable"] = !!editConfig, _a["cell--highlight"] = highlightCell, _a["cell--selected"] = mouseConfig && mouseOpts.selected, _a["cell--area"] = mouseConfig && mouseOpts.area, _a["row--highlight"] = highlightHoverRow, _a["column--highlight"] = highlightHoverColumn, _a["is--header"] = showHeader, _a["is--footer"] = showFooter, _a["is--group"] = isGroup, _a["is--tree-line"] = treeConfig && treeOpts.line, _a["is--fixed-left"] = leftList.length, _a["is--fixed-right"] = rightList.length, _a["is--animat"] = !!props.animat, _a["is--round"] = props.round, _a["is--stripe"] = !treeConfig && stripe, _a["is--loading"] = loading, _a["is--empty"] = !loading && !tableData.length, _a["is--scroll-y"] = overflowY, _a["is--scroll-x"] = overflowX, _a["is--virtual-x"] = scrollXLoad, _a["is--virtual-y"] = scrollYLoad, _a)],
        onKeydown: keydownEvent
      }, [
        h("div", {
          class: "vxe-table-slots"
        }, slots.default ? slots.default({}) : []),
        h("div", {
          class: "vxe-table--render-wrapper"
        }, [
          h("div", {
            class: "vxe-table--main-wrapper"
          }, [
            showHeader ? h(resolveComponent("vxe-table-header"), {
              ref: refTableHeader,
              tableData,
              tableColumn,
              tableGroupColumn
            }) : createCommentVNode(),
            h(TableBodyComponent, {
              ref: refTableBody,
              tableData,
              tableColumn
            }),
            showFooter ? h(resolveComponent("vxe-table-footer"), {
              ref: refTableFooter,
              footerTableData,
              tableColumn
            }) : createCommentVNode()
          ]),
          h("div", {
            class: "vxe-table--fixed-wrapper"
          }, [
            leftList && leftList.length && overflowX ? renderFixed("left") : createCommentVNode(),
            rightList && rightList.length && overflowX ? renderFixed("right") : createCommentVNode()
          ])
        ]),
        h("div", {
          ref: refEmptyPlaceholder,
          class: "vxe-table--empty-placeholder"
        }, [
          h("div", {
            class: "vxe-table--empty-content"
          }, renderEmptyContenet())
        ]),
        h("div", {
          class: "vxe-table--border-line"
        }),
        h("div", {
          ref: refCellResizeBar,
          class: "vxe-table--resizable-bar",
          style: overflowX ? {
            "padding-bottom": scrollbarHeight + "px"
          } : null
        }),
        h("div", {
          class: ["vxe-table--loading vxe-loading", {
            "is--visible": loading
          }]
        }, [
          h("div", {
            class: "vxe-loading--spinner"
          })
        ]),
        initStore.filter ? h(resolveComponent("vxe-table-filter"), {
          ref: refTableFilter,
          filterStore
        }) : createCommentVNode(),
        initStore.import && props.importConfig ? h(resolveComponent("vxe-import-panel"), {
          defaultOptions: reactData.importParams,
          storeData: reactData.importStore
        }) : createCommentVNode(),
        initStore.export && (props.exportConfig || props.printConfig) ? h(resolveComponent("vxe-export-panel"), {
          defaultOptions: reactData.exportParams,
          storeData: reactData.exportStore
        }) : createCommentVNode(),
        isMenu ? h(resolveComponent("vxe-table-context-menu"), {
          ref: refTableMenu
        }) : createCommentVNode(),
        hasUseTooltip ? h(resolveComponent("vxe-tooltip"), {
          ref: refCommTooltip,
          isArrow: false,
          enterable: false
        }) : createCommentVNode(),
        hasUseTooltip && props.editRules && validOpts.showMessage && (validOpts.message === "default" ? !height : validOpts.message === "tooltip") ? h(resolveComponent("vxe-tooltip"), __assign({ ref: refValidTooltip, class: "vxe-table--valid-error" }, validOpts.message === "tooltip" || tableData.length === 1 ? validTipOpts : {})) : createCommentVNode(),
        hasUseTooltip ? h(resolveComponent("vxe-tooltip"), __assign({ ref: refTooltip }, tooltipOpts)) : createCommentVNode()
      ]);
    };
    $xetable.renderVN = renderVN;
    provide("xecolgroup", null);
    provide("$xetable", $xetable);
    return $xetable;
  },
  render: function() {
    return this.renderVN();
  }
});
var Table = Object.assign(VxeTableComponent, {
  install: function(app) {
    dynamicApp.component(VxeTableComponent.name, VxeTableComponent);
    app.component(VxeTableComponent.name, VxeTableComponent);
  }
});
var style$x = "";
var style$w = "";
var style$v = "";
var style$u = "";
var style$t = "";
var style$s = "";
var style$r = "";
var style$q = "";
var style$p = "";
var style$o = "";
var style$n = "";
var style$m = "";
var style$l = "";
var style$k = "";
var style$j = "";
var style$i = "";
var style$h = "";
var style$g = "";
var style$f = "";
var style$e = "";
var style$d = "";
var style$c = "";
var style$b = "";
var style$a = "";
var style$9 = "";
var style$8 = "";
var style$7 = "";
var style$6 = "";
var style$5 = "";
var style$4 = "";
var style$3 = "";
var style$2 = "";
var style$1 = "";
var style = "";
var zhCN = {
  vxe: {
    error: {
      groupFixed: "\u5982\u679C\u4F7F\u7528\u5206\u7EC4\u8868\u5934\uFF0C\u56FA\u5B9A\u5217\u5FC5\u987B\u6309\u7EC4\u8BBE\u7F6E",
      groupMouseRange: '\u5206\u7EC4\u8868\u5934\u4E0E "{0}" \u4E0D\u80FD\u540C\u65F6\u4F7F\u7528\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u51FA\u73B0\u9519\u8BEF',
      groupTag: '\u5206\u7EC4\u5217\u5934\u5E94\u8BE5\u4F7F\u7528 "{0}" \u800C\u4E0D\u662F "{1}"\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u51FA\u73B0\u9519\u8BEF',
      scrollErrProp: '\u542F\u7528\u865A\u62DF\u6EDA\u52A8\u540E\u4E0D\u652F\u6301\u8BE5\u53C2\u6570 "{0}"',
      scrollXNotGroup: '\u6A2A\u5411\u865A\u62DF\u6EDA\u52A8\u4E0D\u652F\u6301\u5206\u7EC4\u8868\u5934\uFF0C\u9700\u8981\u8BBE\u7F6E "scroll-x.enabled=false" \u53C2\u6570\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u5BFC\u81F4\u51FA\u73B0\u9519\u8BEF',
      errConflicts: '\u53C2\u6570 "{0}" \u4E0E "{1}" \u6709\u51B2\u7A81',
      unableInsert: "\u65E0\u6CD5\u63D2\u5165\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570\u662F\u5426\u6B63\u786E",
      useErr: '\u5B89\u88C5 "{0}" \u6A21\u5757\u65F6\u53D1\u751F\u9519\u8BEF\uFF0C\u53EF\u80FD\u987A\u5E8F\u4E0D\u6B63\u786E\uFF0C\u4F9D\u8D56\u7684\u6A21\u5757\u9700\u8981\u5728 Table \u4E4B\u524D\u5B89\u88C5',
      barUnableLink: "\u5DE5\u5177\u680F\u65E0\u6CD5\u5173\u8054\u8868\u683C",
      expandContent: '\u5C55\u5F00\u884C\u7684\u63D2\u69FD\u5E94\u8BE5\u662F "content"\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u6B63\u786E',
      reqModule: '\u7F3A\u5C11 "{0}" \u6A21\u5757',
      reqProp: '\u7F3A\u5C11\u5FC5\u8981\u7684 "{0}" \u53C2\u6570\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u51FA\u73B0\u9519\u8BEF',
      emptyProp: '\u53C2\u6570 "{0}" \u4E0D\u5141\u8BB8\u4E3A\u7A7A',
      errProp: '\u4E0D\u652F\u6301\u7684\u53C2\u6570 "{0}"\uFF0C\u53EF\u80FD\u4E3A "{1}"',
      colRepet: 'column.{0}="{1}" \u91CD\u590D\u4E86\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u67D0\u4E9B\u529F\u80FD\u65E0\u6CD5\u4F7F\u7528',
      notFunc: '\u65B9\u6CD5 "{0}" \u4E0D\u5B58\u5728',
      notSlot: '\u63D2\u69FD "{0}" \u4E0D\u5B58\u5728',
      noTree: '\u6811\u7ED3\u6784\u4E0D\u652F\u6301 "{0}"',
      notProp: '\u4E0D\u652F\u6301\u7684\u53C2\u6570 "{0}"',
      coverProp: '"{0}" \u7684\u53C2\u6570 "{1}" \u88AB\u8986\u76D6\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u51FA\u73B0\u9519\u8BEF',
      delFunc: '\u65B9\u6CD5 "{0}" \u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 "{1}"',
      delProp: '\u53C2\u6570 "{0}" \u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 "{1}"',
      delEvent: '\u4E8B\u4EF6 "{0}" \u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 "{1}"',
      removeProp: '\u53C2\u6570 "{0}" \u5DF2\u5E9F\u5F03\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u51FA\u73B0\u9519\u8BEF',
      errFormat: '\u5168\u5C40\u7684\u683C\u5F0F\u5316\u5185\u5BB9\u5E94\u8BE5\u4F7F\u7528 "VXETable.formats" \u5B9A\u4E49\uFF0C\u6302\u8F7D "formatter={0}" \u7684\u65B9\u5F0F\u5DF2\u4E0D\u5EFA\u8BAE\u4F7F\u7528',
      notType: '\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B "{0}"',
      notExp: "\u8BE5\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5BFC\u5165/\u5BFC\u51FA\u529F\u80FD",
      impFields: "\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5B57\u6BB5\u540D\u548C\u6570\u636E\u683C\u5F0F\u662F\u5426\u6B63\u786E",
      treeNotImp: "\u6811\u8868\u683C\u4E0D\u652F\u6301\u5BFC\u5165"
    },
    renderer: {
      search: "\u641C\u7D22",
      cases: {
        equal: "\u7B49\u4E8E",
        unequal: "\u4E0D\u7B49\u4E8E",
        gt: "\u5927\u4E8E",
        ge: "\u5927\u4E8E\u6216\u7B49\u4E8E",
        lt: "\u5C0F\u4E8E",
        le: "\u5C0F\u4E8E\u6216\u7B49\u4E8E",
        begin: "\u5F00\u5934\u662F",
        notbegin: "\u5F00\u5934\u4E0D\u662F",
        endin: "\u7ED3\u5C3E\u662F",
        notendin: "\u7ED3\u5C3E\u4E0D\u662F",
        include: "\u5305\u542B",
        exclude: "\u4E0D\u5305\u542B",
        between: "\u4ECB\u4E8E",
        custom: "\u81EA\u5B9A\u4E49\u7B5B\u9009",
        insensitive: "\u4E0D\u533A\u5206\u5927\u5C0F\u5199",
        isSensitive: "\u533A\u5206\u5927\u5C0F\u5199"
      },
      combination: {
        menus: {
          sortAsc: "\u5347\u5E8F",
          sortDesc: "\u964D\u5E8F",
          fixedColumn: "\u9501\u5B9A\u5217",
          fixedGroup: "\u9501\u5B9A\u7EC4",
          cancelFixed: "\u53D6\u6D88\u9501\u5B9A",
          fixedLeft: "\u9501\u5B9A\u5DE6\u4FA7",
          fixedRight: "\u9501\u5B9A\u53F3\u4FA7",
          clearFilter: "\u6E05\u9664\u7B5B\u9009",
          textOption: "\u6587\u672C\u7B5B\u9009",
          numberOption: "\u6570\u503C\u7B5B\u9009"
        },
        popup: {
          title: "\u81EA\u5B9A\u4E49\u7B5B\u9009\u7684\u65B9\u5F0F",
          currColumnTitle: "\u5F53\u524D\u5217\uFF1A",
          and: "\u4E0E",
          or: "\u6216",
          describeHtml: "\u53EF\u7528 ? \u4EE3\u8868\u5355\u4E2A\u5B57\u7B26<br/>\u7528 * \u4EE3\u8868\u4EFB\u610F\u591A\u4E2A\u5B57\u7B26"
        },
        empty: "(\u7A7A\u767D)",
        notData: "\u65E0\u5339\u914D\u9879"
      }
    },
    pro: {
      area: {
        mergeErr: "\u65E0\u6CD5\u5BF9\u5408\u5E76\u5355\u5143\u683C\u8FDB\u884C\u8BE5\u64CD\u4F5C",
        multiErr: "\u65E0\u6CD5\u5BF9\u591A\u91CD\u9009\u62E9\u533A\u57DF\u8FDB\u884C\u8BE5\u64CD\u4F5C",
        extendErr: "\u5982\u679C\u5EF6\u4F38\u7684\u533A\u57DF\u5305\u542B\u88AB\u5408\u5E76\u7684\u5355\u5143\u683C\uFF0C\u6240\u6709\u5408\u5E76\u7684\u5355\u5143\u683C\u9700\u5927\u5C0F\u76F8\u540C"
      },
      fnr: {
        title: "\u67E5\u627E\u548C\u66FF\u6362",
        findLabel: "\u67E5\u627E",
        replaceLabel: "\u66FF\u6362",
        findTitle: "\u67E5\u627E\u5185\u5BB9\uFF1A",
        replaceTitle: "\u66FF\u6362\u4E3A\uFF1A",
        tabs: {
          find: "\u67E5\u627E",
          replace: "\u66FF\u6362"
        },
        filter: {
          re: "\u6B63\u5219\u8868\u8FBE\u5F0F",
          whole: "\u5168\u8BCD\u5339\u914D",
          sensitive: "\u533A\u5206\u5927\u5C0F\u5199"
        },
        btns: {
          findNext: "\u67E5\u627E\u4E0B\u4E00\u4E2A",
          findAll: "\u67E5\u627E\u5168\u90E8",
          replace: "\u66FF\u6362",
          replaceAll: "\u66FF\u6362\u5168\u90E8",
          cancel: "\u53D6\u6D88"
        },
        header: {
          seq: "#",
          cell: "\u5355\u5143\u683C",
          value: "\u503C"
        },
        empty: "(\u7A7A\u503C)",
        reError: "\u65E0\u6548\u7684\u6B63\u5219\u8868\u8FBE\u5F0F",
        recordCount: "\u5DF2\u627E\u5230 {0} \u4E2A\u5355\u5143\u683C",
        notCell: "\u627E\u4E0D\u5230\u5339\u914D\u7684\u5355\u5143\u683C",
        replaceSuccess: "\u6210\u529F\u66FF\u6362 {0} \u4E2A\u5355\u5143\u683C"
      }
    },
    table: {
      emptyText: "\u6682\u65E0\u6570\u636E",
      allTitle: "\u5168\u9009/\u53D6\u6D88",
      seqTitle: "#",
      confirmFilter: "\u7B5B\u9009",
      resetFilter: "\u91CD\u7F6E",
      allFilter: "\u5168\u90E8",
      sortAsc: "\u5347\u5E8F\uFF1A\u6700\u4F4E\u5230\u6700\u9AD8",
      sortDesc: "\u964D\u5E8F\uFF1A\u6700\u9AD8\u5230\u6700\u4F4E",
      filter: "\u5BF9\u6240\u9009\u7684\u5217\u542F\u7528\u7B5B\u9009",
      impSuccess: "\u6210\u529F\u5BFC\u5165 {0} \u6761\u8BB0\u5F55",
      expLoading: "\u6B63\u5728\u5BFC\u51FA\u4E2D",
      expSuccess: "\u5BFC\u51FA\u6210\u529F",
      expFilename: "\u5BFC\u51FA_{0}",
      expOriginFilename: "\u5BFC\u51FA_\u6E90_{0}",
      customTitle: "\u5217\u8BBE\u7F6E",
      customAll: "\u5168\u90E8",
      customConfirm: "\u786E\u8BA4",
      customRestore: "\u8FD8\u539F"
    },
    grid: {
      selectOneRecord: "\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u8BB0\u5F55\uFF01",
      deleteSelectRecord: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6240\u9009\u8BB0\u5F55\u5417\uFF1F",
      removeSelectRecord: "\u60A8\u786E\u5B9A\u8981\u79FB\u9664\u6240\u9009\u8BB0\u5F55\u5417\uFF1F",
      dataUnchanged: "\u6570\u636E\u672A\u6539\u52A8\uFF01",
      delSuccess: "\u6210\u529F\u5220\u9664\u6240\u9009\u8BB0\u5F55\uFF01",
      saveSuccess: "\u4FDD\u5B58\u6210\u529F\uFF01",
      operError: "\u53D1\u751F\u9519\u8BEF\uFF0C\u64CD\u4F5C\u5931\u8D25\uFF01"
    },
    select: {
      emptyText: "\u6682\u65E0\u6570\u636E"
    },
    pager: {
      goto: "\u524D\u5F80",
      pagesize: "{0}\u6761/\u9875",
      total: "\u5171 {0} \u6761\u8BB0\u5F55",
      pageClassifier: "\u9875",
      prevPage: "\u4E0A\u4E00\u9875",
      nextPage: "\u4E0B\u4E00\u9875",
      prevJump: "\u5411\u4E0A\u8DF3\u9875",
      nextJump: "\u5411\u4E0B\u8DF3\u9875"
    },
    alert: {
      title: "\u6D88\u606F\u63D0\u793A"
    },
    button: {
      confirm: "\u786E\u8BA4",
      cancel: "\u53D6\u6D88"
    },
    import: {
      modes: {
        covering: "\u8986\u76D6",
        insert: "\u65B0\u589E"
      },
      impTitle: "\u5BFC\u5165\u6570\u636E",
      impFile: "\u6587\u4EF6\u540D",
      impSelect: "\u9009\u62E9\u6587\u4EF6",
      impType: "\u6587\u4EF6\u7C7B\u578B",
      impOpts: "\u53C2\u6570\u8BBE\u7F6E",
      impConfirm: "\u5BFC\u5165",
      impCancel: "\u53D6\u6D88"
    },
    export: {
      types: {
        csv: "CSV (\u9017\u53F7\u5206\u9694)(*.csv)",
        html: "\u7F51\u9875(*.html)",
        xml: "XML \u6570\u636E(*.xml)",
        txt: "\u6587\u672C\u6587\u4EF6(\u5236\u8868\u7B26\u5206\u9694)(*.txt)",
        xls: "Excel 97-2003 \u5DE5\u4F5C\u7C3F(*.xls)",
        xlsx: "Excel \u5DE5\u4F5C\u7C3F(*.xlsx)",
        pdf: "PDF (*.pdf)"
      },
      modes: {
        current: "\u5F53\u524D\u6570\u636E\uFF08\u5F53\u524D\u9875\u7684\u6570\u636E\uFF09",
        selected: "\u9009\u4E2D\u6570\u636E\uFF08\u5F53\u524D\u9875\u9009\u4E2D\u7684\u6570\u636E\uFF09",
        all: "\u5168\u91CF\u6570\u636E\uFF08\u5305\u62EC\u6240\u6709\u5206\u9875\u7684\u6570\u636E\uFF09"
      },
      printTitle: "\u6253\u5370\u6570\u636E",
      expTitle: "\u5BFC\u51FA\u6570\u636E",
      expName: "\u6587\u4EF6\u540D",
      expNamePlaceholder: "\u8BF7\u8F93\u5165\u6587\u4EF6\u540D",
      expSheetName: "\u6807\u9898",
      expSheetNamePlaceholder: "\u8BF7\u8F93\u5165\u6807\u9898",
      expType: "\u4FDD\u5B58\u7C7B\u578B",
      expMode: "\u9009\u62E9\u6570\u636E",
      expCurrentColumn: "\u5168\u90E8\u5B57\u6BB5",
      expColumn: "\u9009\u62E9\u5B57\u6BB5",
      expOpts: "\u53C2\u6570\u8BBE\u7F6E",
      expOptHeader: "\u8868\u5934",
      expHeaderTitle: "\u662F\u5426\u9700\u8981\u8868\u5934",
      expOptFooter: "\u8868\u5C3E",
      expFooterTitle: "\u662F\u5426\u9700\u8981\u8868\u5C3E",
      expOptColgroup: "\u5206\u7EC4\u8868\u5934",
      expColgroupTitle: "\u5982\u679C\u5B58\u5728\uFF0C\u5219\u652F\u6301\u5E26\u6709\u5206\u7EC4\u7ED3\u6784\u7684\u8868\u5934",
      expOptMerge: "\u5408\u5E76",
      expMergeTitle: "\u5982\u679C\u5B58\u5728\uFF0C\u5219\u652F\u6301\u5E26\u6709\u5408\u5E76\u7ED3\u6784\u7684\u5355\u5143\u683C",
      expOptAllExpand: "\u5C55\u5F00\u5C42\u7EA7",
      expAllExpandTitle: "\u5982\u679C\u5B58\u5728\uFF0C\u5219\u652F\u6301\u5C06\u5E26\u6709\u5C42\u7EA7\u7ED3\u6784\u7684\u6570\u636E\u5168\u90E8\u5C55\u5F00",
      expOptUseStyle: "\u6837\u5F0F",
      expUseStyleTitle: "\u5982\u679C\u5B58\u5728\uFF0C\u5219\u652F\u6301\u5E26\u6837\u5F0F\u7684\u5355\u5143\u683C",
      expOptOriginal: "\u6E90\u6570\u636E",
      expOriginalTitle: "\u5982\u679C\u4E3A\u6E90\u6570\u636E\uFF0C\u5219\u652F\u6301\u5BFC\u5165\u5230\u8868\u683C\u4E2D",
      expPrint: "\u6253\u5370",
      expConfirm: "\u5BFC\u51FA",
      expCancel: "\u53D6\u6D88"
    },
    modal: {
      zoomIn: "\u6700\u5927\u5316",
      zoomOut: "\u8FD8\u539F",
      close: "\u5173\u95ED"
    },
    form: {
      folding: "\u6536\u8D77",
      unfolding: "\u5C55\u5F00"
    },
    toolbar: {
      import: "\u5BFC\u5165",
      export: "\u5BFC\u51FA",
      print: "\u6253\u5370",
      refresh: "\u5237\u65B0",
      zoomIn: "\u5168\u5C4F",
      zoomOut: "\u8FD8\u539F",
      custom: "\u5217\u8BBE\u7F6E",
      customAll: "\u5168\u90E8",
      customConfirm: "\u786E\u8BA4",
      customRestore: "\u8FD8\u539F"
    },
    input: {
      date: {
        m1: "01 \u6708",
        m2: "02 \u6708",
        m3: "03 \u6708",
        m4: "04 \u6708",
        m5: "05 \u6708",
        m6: "06 \u6708",
        m7: "07 \u6708",
        m8: "08 \u6708",
        m9: "09 \u6708",
        m10: "10 \u6708",
        m11: "11 \u6708",
        m12: "12 \u6708",
        quarterLabel: "{0} \u5E74",
        monthLabel: "{0} \u5E74",
        dayLabel: "{0} \u5E74 {1}",
        labelFormat: {
          date: "yyyy-MM-dd",
          time: "HH:mm:ss",
          datetime: "yyyy-MM-dd HH:mm:ss",
          week: "yyyy \u5E74\u7B2C WW \u5468",
          month: "yyyy-MM",
          quarter: "yyyy \u5E74\u7B2C q \u5B63\u5EA6",
          year: "yyyy"
        },
        weeks: {
          w: "\u5468",
          w0: "\u5468\u65E5",
          w1: "\u5468\u4E00",
          w2: "\u5468\u4E8C",
          w3: "\u5468\u4E09",
          w4: "\u5468\u56DB",
          w5: "\u5468\u4E94",
          w6: "\u5468\u516D"
        },
        months: {
          m0: "\u4E00\u6708",
          m1: "\u4E8C\u6708",
          m2: "\u4E09\u6708",
          m3: "\u56DB\u6708",
          m4: "\u4E94\u6708",
          m5: "\u516D\u6708",
          m6: "\u4E03\u6708",
          m7: "\u516B\u6708",
          m8: "\u4E5D\u6708",
          m9: "\u5341\u6708",
          m10: "\u5341\u4E00\u6708",
          m11: "\u5341\u4E8C\u6708"
        },
        quarters: {
          q1: "\u7B2C\u4E00\u5B63\u5EA6",
          q2: "\u7B2C\u4E8C\u5B63\u5EA6",
          q3: "\u7B2C\u4E09\u5B63\u5EA6",
          q4: "\u7B2C\u56DB\u5B63\u5EA6"
        }
      }
    }
  }
};
export { Button as B, Column as C, Edit as E, Footer as F, Grid as G, Header as H, Icon as I, Keyboard as K, List as L, Menu as M, Optgroup as O, Pager as P, Radio as R, Switch as S, Tooltip as T, VXETable as V, Filter as a, Export as b, Validator as c, Colgroup as d, Toolbar as e, Form as f, FormItem as g, FormGather as h, Checkbox as i, CheckboxGroup as j, RadioGroup as k, RadioButton as l, Input as m, Select as n, Option as o, Textarea as p, Modal as q, Pulldown as r, Table as s, zhCN as z };
