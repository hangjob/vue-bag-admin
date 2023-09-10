(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(`@charset "UTF-8";.spin[data-v-89c42259] {
  height: 100%;
}
.spin[data-v-89c42259] .n-spin-content {
  height: 100%;
}

/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/
/*!
 * animate.css - https://animate.style/
 * Version - 4.1.1
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2020 Animate.css
 */
:root {
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
}
.animate__animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animate__animated.animate__infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.animate__animated.animate__repeat-1 {
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: var(--animate-repeat);
  animation-iteration-count: var(--animate-repeat);
}
.animate__animated.animate__repeat-2 {
  -webkit-animation-iteration-count: calc(1 * 2);
  animation-iteration-count: calc(1 * 2);
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 2);
  animation-iteration-count: calc(var(--animate-repeat) * 2);
}
.animate__animated.animate__repeat-3 {
  -webkit-animation-iteration-count: calc(1 * 3);
  animation-iteration-count: calc(1 * 3);
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 3);
  animation-iteration-count: calc(var(--animate-repeat) * 3);
}
.animate__animated.animate__delay-1s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
  -webkit-animation-delay: var(--animate-delay);
  animation-delay: var(--animate-delay);
}
.animate__animated.animate__delay-2s {
  -webkit-animation-delay: calc(1s * 2);
  animation-delay: calc(1s * 2);
  -webkit-animation-delay: calc(var(--animate-delay) * 2);
  animation-delay: calc(var(--animate-delay) * 2);
}
.animate__animated.animate__delay-3s {
  -webkit-animation-delay: calc(1s * 3);
  animation-delay: calc(1s * 3);
  -webkit-animation-delay: calc(var(--animate-delay) * 3);
  animation-delay: calc(var(--animate-delay) * 3);
}
.animate__animated.animate__delay-4s {
  -webkit-animation-delay: calc(1s * 4);
  animation-delay: calc(1s * 4);
  -webkit-animation-delay: calc(var(--animate-delay) * 4);
  animation-delay: calc(var(--animate-delay) * 4);
}
.animate__animated.animate__delay-5s {
  -webkit-animation-delay: calc(1s * 5);
  animation-delay: calc(1s * 5);
  -webkit-animation-delay: calc(var(--animate-delay) * 5);
  animation-delay: calc(var(--animate-delay) * 5);
}
.animate__animated.animate__faster {
  -webkit-animation-duration: calc(1s / 2);
  animation-duration: calc(1s / 2);
  -webkit-animation-duration: calc(var(--animate-duration) / 2);
  animation-duration: calc(var(--animate-duration) / 2);
}
.animate__animated.animate__fast {
  -webkit-animation-duration: calc(1s * 0.8);
  animation-duration: calc(1s * 0.8);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.8);
  animation-duration: calc(var(--animate-duration) * 0.8);
}
.animate__animated.animate__slow {
  -webkit-animation-duration: calc(1s * 2);
  animation-duration: calc(1s * 2);
  -webkit-animation-duration: calc(var(--animate-duration) * 2);
  animation-duration: calc(var(--animate-duration) * 2);
}
.animate__animated.animate__slower {
  -webkit-animation-duration: calc(1s * 3);
  animation-duration: calc(1s * 3);
  -webkit-animation-duration: calc(var(--animate-duration) * 3);
  animation-duration: calc(var(--animate-duration) * 3);
}
@media print, (prefers-reduced-motion: reduce) {
  .animate__animated {
    -webkit-animation-duration: 1ms !important;
    animation-duration: 1ms !important;
    -webkit-transition-duration: 1ms !important;
    transition-duration: 1ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
  }

  .animate__animated[class*='Out'] {
    opacity: 0;
  }
}
/* Attention seekers  */
@-webkit-keyframes bounce {
  from,
  20%,
  53%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}
@keyframes bounce {
  from,
  20%,
  53%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}
.animate__bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
@-webkit-keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
@keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
.animate__flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
@-webkit-keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}
@-webkit-keyframes shakeX {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}
@keyframes shakeX {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}
.animate__shakeX {
  -webkit-animation-name: shakeX;
  animation-name: shakeX;
}
@-webkit-keyframes shakeY {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
}
@keyframes shakeY {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
}
.animate__shakeY {
  -webkit-animation-name: shakeY;
  animation-name: shakeY;
}
@-webkit-keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.animate__headShake {
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: headShake;
  animation-name: headShake;
}
@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
.animate__swing {
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}
@-webkit-keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes wobble {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes wobble {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}
@-webkit-keyframes jello {
  from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}
@keyframes jello {
  from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}
.animate__jello {
  -webkit-animation-name: jello;
  animation-name: jello;
  -webkit-transform-origin: center;
  transform-origin: center;
}
@-webkit-keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.animate__heartBeat {
  -webkit-animation-name: heartBeat;
  animation-name: heartBeat;
  -webkit-animation-duration: calc(1s * 1.3);
  animation-duration: calc(1s * 1.3);
  -webkit-animation-duration: calc(var(--animate-duration) * 1.3);
  animation-duration: calc(var(--animate-duration) * 1.3);
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
/* Back entrances */
@-webkit-keyframes backInDown {
  0% {
    -webkit-transform: translateY(-1200px) scale(0.7);
    transform: translateY(-1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInDown {
  0% {
    -webkit-transform: translateY(-1200px) scale(0.7);
    transform: translateY(-1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInDown {
  -webkit-animation-name: backInDown;
  animation-name: backInDown;
}
@-webkit-keyframes backInLeft {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInLeft {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInLeft {
  -webkit-animation-name: backInLeft;
  animation-name: backInLeft;
}
@-webkit-keyframes backInRight {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInRight {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInRight {
  -webkit-animation-name: backInRight;
  animation-name: backInRight;
}
@-webkit-keyframes backInUp {
  0% {
    -webkit-transform: translateY(1200px) scale(0.7);
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInUp {
  0% {
    -webkit-transform: translateY(1200px) scale(0.7);
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInUp {
  -webkit-animation-name: backInUp;
  animation-name: backInUp;
}
/* Back exits */
@-webkit-keyframes backOutDown {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(700px) scale(0.7);
    transform: translateY(700px) scale(0.7);
    opacity: 0.7;
  }
}
@keyframes backOutDown {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(700px) scale(0.7);
    transform: translateY(700px) scale(0.7);
    opacity: 0.7;
  }
}
.animate__backOutDown {
  -webkit-animation-name: backOutDown;
  animation-name: backOutDown;
}
@-webkit-keyframes backOutLeft {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }
}
@keyframes backOutLeft {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }
}
.animate__backOutLeft {
  -webkit-animation-name: backOutLeft;
  animation-name: backOutLeft;
}
@-webkit-keyframes backOutRight {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }
}
@keyframes backOutRight {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }
}
.animate__backOutRight {
  -webkit-animation-name: backOutRight;
  animation-name: backOutRight;
}
@-webkit-keyframes backOutUp {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(-700px) scale(0.7);
    transform: translateY(-700px) scale(0.7);
    opacity: 0.7;
  }
}
@keyframes backOutUp {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(-700px) scale(0.7);
    transform: translateY(-700px) scale(0.7);
    opacity: 0.7;
  }
}
.animate__backOutUp {
  -webkit-animation-name: backOutUp;
  animation-name: backOutUp;
}
/* Bouncing entrances  */
@-webkit-keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__bounceIn {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}
@-webkit-keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}
@-webkit-keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0) scaleX(3);
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0) scaleX(1);
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0) scaleX(3);
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0) scaleX(1);
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}
@-webkit-keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0) scaleX(3);
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0) scaleX(1);
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0) scaleX(0.98);
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0) scaleX(0.995);
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0) scaleX(3);
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0) scaleX(1);
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0) scaleX(0.98);
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0) scaleX(0.995);
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}
@-webkit-keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0) scaleY(5);
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0) scaleY(5);
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}
/* Bouncing exits  */
@-webkit-keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
@keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
.animate__bounceOut {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
}
@-webkit-keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.985);
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0) scaleY(3);
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
}
@keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.985);
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0) scaleY(3);
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
}
.animate__bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}
@-webkit-keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0) scaleX(0.9);
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0) scaleX(2);
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
}
@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0) scaleX(0.9);
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0) scaleX(2);
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
}
.animate__bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}
@-webkit-keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0) scaleX(0.9);
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0) scaleX(2);
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
}
@keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0) scaleX(0.9);
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0) scaleX(2);
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
}
.animate__bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}
@-webkit-keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.985);
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0) scaleY(0.9);
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0) scaleY(3);
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
}
@keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.985);
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0) scaleY(0.9);
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0) scaleY(3);
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
}
.animate__bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}
/* Fading entrances  */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.animate__fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}
@-webkit-keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}
@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}
@-webkit-keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}
@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}
@-webkit-keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
@-webkit-keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}
@-webkit-keyframes fadeInTopLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInTopLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInTopLeft {
  -webkit-animation-name: fadeInTopLeft;
  animation-name: fadeInTopLeft;
}
@-webkit-keyframes fadeInTopRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInTopRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInTopRight {
  -webkit-animation-name: fadeInTopRight;
  animation-name: fadeInTopRight;
}
@-webkit-keyframes fadeInBottomLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInBottomLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInBottomLeft {
  -webkit-animation-name: fadeInBottomLeft;
  animation-name: fadeInBottomLeft;
}
@-webkit-keyframes fadeInBottomRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInBottomRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInBottomRight {
  -webkit-animation-name: fadeInBottomRight;
  animation-name: fadeInBottomRight;
}
/* Fading exits */
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
.animate__fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}
@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
.animate__fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}
@-webkit-keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
.animate__fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}
@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.animate__fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}
@-webkit-keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
@keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
.animate__fadeOutLeftBig {
  -webkit-animation-name: fadeOutLeftBig;
  animation-name: fadeOutLeftBig;
}
@-webkit-keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
.animate__fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}
@-webkit-keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
@keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
.animate__fadeOutRightBig {
  -webkit-animation-name: fadeOutRightBig;
  animation-name: fadeOutRightBig;
}
@-webkit-keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
.animate__fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}
@-webkit-keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
@keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
.animate__fadeOutUpBig {
  -webkit-animation-name: fadeOutUpBig;
  animation-name: fadeOutUpBig;
}
@-webkit-keyframes fadeOutTopLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
}
@keyframes fadeOutTopLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
}
.animate__fadeOutTopLeft {
  -webkit-animation-name: fadeOutTopLeft;
  animation-name: fadeOutTopLeft;
}
@-webkit-keyframes fadeOutTopRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
}
@keyframes fadeOutTopRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
}
.animate__fadeOutTopRight {
  -webkit-animation-name: fadeOutTopRight;
  animation-name: fadeOutTopRight;
}
@-webkit-keyframes fadeOutBottomRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
}
@keyframes fadeOutBottomRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
}
.animate__fadeOutBottomRight {
  -webkit-animation-name: fadeOutBottomRight;
  animation-name: fadeOutBottomRight;
}
@-webkit-keyframes fadeOutBottomLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
}
@keyframes fadeOutBottomLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
}
.animate__fadeOutBottomLeft {
  -webkit-animation-name: fadeOutBottomLeft;
  animation-name: fadeOutBottomLeft;
}
/* Flippers */
@-webkit-keyframes flip {
  from {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
@keyframes flip {
  from {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
.animate__animated.animate__flip {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
}
@-webkit-keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
.animate__flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}
@-webkit-keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
@keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
.animate__flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}
@-webkit-keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
@keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
.animate__flipOutX {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}
@-webkit-keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}
@keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}
.animate__flipOutY {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}
/* Lightspeed */
@-webkit-keyframes lightSpeedInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes lightSpeedInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__lightSpeedInRight {
  -webkit-animation-name: lightSpeedInRight;
  animation-name: lightSpeedInRight;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}
@-webkit-keyframes lightSpeedInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(5deg);
    transform: skewX(5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes lightSpeedInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(5deg);
    transform: skewX(5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__lightSpeedInLeft {
  -webkit-animation-name: lightSpeedInLeft;
  animation-name: lightSpeedInLeft;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}
@-webkit-keyframes lightSpeedOutRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
@keyframes lightSpeedOutRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
.animate__lightSpeedOutRight {
  -webkit-animation-name: lightSpeedOutRight;
  animation-name: lightSpeedOutRight;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}
@-webkit-keyframes lightSpeedOutLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(-30deg);
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
}
@keyframes lightSpeedOutLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(-30deg);
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
}
.animate__lightSpeedOutLeft {
  -webkit-animation-name: lightSpeedOutLeft;
  animation-name: lightSpeedOutLeft;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}
/* Rotating entrances */
@-webkit-keyframes rotateIn {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateIn {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateIn {
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
  -webkit-transform-origin: center;
  transform-origin: center;
}
@-webkit-keyframes rotateInDownLeft {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInDownLeft {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateInDownLeft {
  -webkit-animation-name: rotateInDownLeft;
  animation-name: rotateInDownLeft;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
@-webkit-keyframes rotateInDownRight {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInDownRight {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateInDownRight {
  -webkit-animation-name: rotateInDownRight;
  animation-name: rotateInDownRight;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
@-webkit-keyframes rotateInUpLeft {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInUpLeft {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateInUpLeft {
  -webkit-animation-name: rotateInUpLeft;
  animation-name: rotateInUpLeft;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
@-webkit-keyframes rotateInUpRight {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInUpRight {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateInUpRight {
  -webkit-animation-name: rotateInUpRight;
  animation-name: rotateInUpRight;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
/* Rotating exits */
@-webkit-keyframes rotateOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}
@keyframes rotateOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}
.animate__rotateOut {
  -webkit-animation-name: rotateOut;
  animation-name: rotateOut;
  -webkit-transform-origin: center;
  transform-origin: center;
}
@-webkit-keyframes rotateOutDownLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}
@keyframes rotateOutDownLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}
.animate__rotateOutDownLeft {
  -webkit-animation-name: rotateOutDownLeft;
  animation-name: rotateOutDownLeft;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
@-webkit-keyframes rotateOutDownRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
@keyframes rotateOutDownRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
.animate__rotateOutDownRight {
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
@-webkit-keyframes rotateOutUpLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
@keyframes rotateOutUpLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
.animate__rotateOutUpLeft {
  -webkit-animation-name: rotateOutUpLeft;
  animation-name: rotateOutUpLeft;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
@-webkit-keyframes rotateOutUpRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}
@keyframes rotateOutUpRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}
.animate__rotateOutUpRight {
  -webkit-animation-name: rotateOutUpRight;
  animation-name: rotateOutUpRight;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
/* Specials */
@-webkit-keyframes hinge {
  0% {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
@keyframes hinge {
  0% {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
.animate__hinge {
  -webkit-animation-duration: calc(1s * 2);
  animation-duration: calc(1s * 2);
  -webkit-animation-duration: calc(var(--animate-duration) * 2);
  animation-duration: calc(var(--animate-duration) * 2);
  -webkit-animation-name: hinge;
  animation-name: hinge;
  -webkit-transform-origin: top left;
  transform-origin: top left;
}
@-webkit-keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.animate__jackInTheBox {
  -webkit-animation-name: jackInTheBox;
  animation-name: jackInTheBox;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}
@keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}
.animate__rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}
/* Zooming entrances */
@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
.animate__zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}
@-webkit-keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomInDown {
  -webkit-animation-name: zoomInDown;
  animation-name: zoomInDown;
}
@-webkit-keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomInLeft {
  -webkit-animation-name: zoomInLeft;
  animation-name: zoomInLeft;
}
@-webkit-keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomInRight {
  -webkit-animation-name: zoomInRight;
  animation-name: zoomInRight;
}
@-webkit-keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomInUp {
  -webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
}
/* Zooming exits */
@-webkit-keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}
@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}
.animate__zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}
@-webkit-keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomOutDown {
  -webkit-animation-name: zoomOutDown;
  animation-name: zoomOutDown;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
@-webkit-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
}
@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
}
.animate__zoomOutLeft {
  -webkit-animation-name: zoomOutLeft;
  animation-name: zoomOutLeft;
  -webkit-transform-origin: left center;
  transform-origin: left center;
}
@-webkit-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
}
@keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
}
.animate__zoomOutRight {
  -webkit-animation-name: zoomOutRight;
  animation-name: zoomOutRight;
  -webkit-transform-origin: right center;
  transform-origin: right center;
}
@-webkit-keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomOutUp {
  -webkit-animation-name: zoomOutUp;
  animation-name: zoomOutUp;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
/* Sliding entrances */
@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}
@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}
@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}
@-webkit-keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
}
/* Sliding exits */
@-webkit-keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
.animate__slideOutDown {
  -webkit-animation-name: slideOutDown;
  animation-name: slideOutDown;
}
@-webkit-keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.animate__slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}
@-webkit-keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
.animate__slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}
@-webkit-keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
.animate__slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
main,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
  display: none;
}
body {
  line-height: 1;
}
menu,
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
:root {
  --animate-duration: 0.3s;
  --animate-delay: 0.3s;
}
.bag-scroll::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.bag-scroll::-webkit-scrollbar-thumb {
  background-color: var(--n-action-color);
}
.bag-scroll::-webkit-scrollbar-track,
.bag-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.bag-scroll::-webkit-scrollbar-thumb {
  background-color: var(--n-action-color);
  border-radius: 6px;
}
html,
body,
#app {
  height: 100%;
  width: 100%;
}
.mobile-mask {
  z-index: 2999;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}
.bag-grey {
  filter: grayscale(100%);
}
.bag-weak {
  filter: invert(15%);
}
/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

[data-v-032302c4] .n-form-item-blank {
  justify-content: flex-end;
}
.layout-pattern[data-v-032302c4] {
  display: flex;
}
.layout-pattern .pattern-item[data-v-032302c4] {
  background: #f0f2f5;
  border-radius: 4px;
  box-shadow: 0 1px 2.5px #0000002e;
  cursor: pointer;
  height: 50px;
  overflow: hidden;
  position: relative;
  flex: 1;
  margin-right: 20px;
}
.layout-pattern .pattern-item[data-v-032302c4]:last-of-type {
  margin-right: 0;
}
.layout-pattern .pattern-item span[data-v-032302c4] {
  display: inline-block;
  vertical-align: top;
}
.layout-pattern .pattern-item .pattern-item-icon[data-v-032302c4] {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(20%, -5%);
}
.layout-pattern .pattern-item.ml .left[data-v-032302c4] {
  height: 100%;
  width: 30%;
  background: var(--n-title-text-color);
}
.layout-pattern .pattern-item.ml .top[data-v-032302c4] {
  height: 30%;
  position: absolute;
  right: 0;
  top: 0;
  width: 70%;
  background: #fff;
  box-shadow: 0 0 1px #f6f6f6;
}
.layout-pattern .pattern-item.mt .left[data-v-032302c4] {
  background: var(--n-title-text-color);
  box-shadow: 0 0 1px #f6f6f6;
  width: 100%;
}
.layout-pattern .pattern-item.mt .top[data-v-032302c4] {
  height: 30%;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  background: var(--n-color);
  box-shadow: 0 0 1px #f6f6f6;
}
.layout-pattern .pattern-item.tm .left[data-v-032302c4] {
  background: var(--n-title-text-color);
  height: 30%;
  width: 100%;
}
.layout-pattern .pattern-item.tm .top[data-v-032302c4] {
  position: absolute;
  background: var(--n-color);
  width: 30%;
  height: 70%;
  bottom: 0;
  z-index: 999;
  left: 0;
}
.user-set[data-v-434fa856] {
  display: flex;
  height: 50px;
  flex-shrink: 0;
  margin-left: 50px;
}
.user-set .set-item[data-v-434fa856] {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  flex-shrink: 0;
}
.user-set .set-item .n-icon[data-v-434fa856] {
  outline: none;
}
.user-set .set-item .n-icon svg[data-v-434fa856] {
  outline: none;
}
.user-set .set-item.hover-color[data-v-434fa856]:last-of-type {
  padding-right: 2px;
}
.user-set .set-item.hover-color[data-v-434fa856]:hover {
  color: var(--primary-color);
}
.menu-visible-icon[data-v-61bf55dc] {
  margin-right: 20px;
  cursor: pointer;
}
.header-logo[data-v-0dc4e4b8] {
  display: flex;
  align-items: center;
  width: 240px;
  justify-content: center;
  border-right: 1px solid var(--n-border-color);
  flex-shrink: 0;
  transition: all 0.3s;
  height: 50px;
  border-bottom: 1px solid var(--n-border-color);
  box-sizing: border-box;
}
.header-logo img[data-v-0dc4e4b8] {
  max-width: 100%;
  height: 32px;
}
.header-logo span[data-v-0dc4e4b8] {
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  height: 32px;
  line-height: 32px;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.scrollbar[data-v-0632d4c0] {
  height: 40px;
  position: relative;
  white-space: nowrap;
  display: flex;
  box-sizing: border-box;
}
.scrollbar .arrow[data-v-0632d4c0] {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  z-index: 999;
  box-sizing: border-box;
  background-color: var(--n-color);
  border-bottom: 1px solid var(--divider-color);
}
.scrollbar .arrow.arrow-next[data-v-0632d4c0] {
  border-left: 1px solid var(--divider-color);
}
.scrollbar .arrow.arrow-prev[data-v-0632d4c0] {
  border-right: 1px solid var(--divider-color);
}
.scrollbar .arrow.arrow-more[data-v-0632d4c0] {
  border-left: 1px solid var(--divider-color);
}
.scrollbar .sutra[data-v-0632d4c0] {
  padding: 3px;
  border-bottom: 1px solid var(--divider-color);
}
.scrollbar .sutra .tabs-item[data-v-0632d4c0] {
  border-radius: 3px;
  border: 1px solid var(--border-color);
  background-color: var(--card-color);
}
.scrollbar .tact[data-v-0632d4c0] {
  padding-top: 3px;
  background-color: var(--tab-color);
  box-sizing: border-box;
  border-bottom: 1px solid var(--divider-color);
}
.scrollbar .tact .tabs-item[data-v-0632d4c0] {
  background-color: var(--n-color);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.scrollbar .tact .tabs-item.active[data-v-0632d4c0] {
  border: none;
  color: var(--primary-color);
}
.scrollbar .tact .tabs-item.active[data-v-0632d4c0]::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0px;
  left: 0;
  background-color: var(--primary-color);
}
.scrollbar .tabs[data-v-0632d4c0] {
  position: relative;
  transition: transform 0.5s ease-in-out;
  white-space: nowrap;
  display: flex;
  height: 40px;
  flex: 1;
  float: left;
  box-sizing: border-box;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar .tabs[data-v-0632d4c0]::-webkit-scrollbar {
  display: none;
}
.scrollbar .tabs-item[data-v-0632d4c0] {
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding: 0 8px;
  box-sizing: border-box;
  transition: all 0.3s;
  position: relative;
}
.scrollbar .tabs-item span[data-v-0632d4c0] {
  font-size: var(--font-size);
}
.scrollbar .tabs-item[data-v-0632d4c0]:first-child {
  margin-left: 10px;
}
.scrollbar .tabs-item .icon[data-v-0632d4c0] {
  padding-right: 3px;
}
.scrollbar .tabs-item .icon-close[data-v-0632d4c0] {
  font-size: 0;
  transition: all 0.3s;
}
.scrollbar .tabs-item:hover .icon-close[data-v-0632d4c0] {
  padding-left: 5px;
  font-size: 18px;
}
.scrollbar .tabs-item:hover .icon-close[data-v-0632d4c0]:hover {
  color: var(--primary-color);
}
.scrollbar .tabs-item.active[data-v-0632d4c0] {
  border: 1px solid var(--primary-color);
}
.scrollbar .tabs-item.active:hover .icon-close[data-v-0632d4c0] {
  color: var(--primary-color);
}
.main[data-v-4ed6bac8] {
  padding: 8px;
  overflow-y: scroll;
  height: calc(100% - 40px);
}
.n-config-provider {
  height: 100%;
  width: 100%;
}
.header[data-v-77c118b9] {
  display: flex;
  height: 50px;
}
.header-plan[data-v-77c118b9] {
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.header-user[data-v-77c118b9] {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
}
.layout-main[data-v-77c118b9] {
  background-color: var(--action-color);
  height: 100%;
}
.mobile[data-v-77c118b9] {
  position: fixed;
  top: 0;
  left: -250px;
  bottom: 0;
  z-index: 3000;
  transition: left 0.3s ease-in;
}`));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { NButton, NDropdown, NSpace, NCard, NSpin, useMessage, NInput, NFormItem, NCol, NRow, NForm, NIcon, NTag, NInputGroup, darkTheme, zhCN, dateZhCN, NMessageProvider, NNotificationProvider, NConfigProvider, NBreadcrumbItem, NBreadcrumb, NDivider, NSelect, NSwitch, NDrawerContent, NDrawer, NAvatar, NText, NThing, NListItem, NList, NTabPane, NNumberAnimation, NStatistic, NEmpty, NTabs, NPopover, NH2, NEl, NButtonGroup, NMenu, NLayoutSider, NLayoutHeader, NLayout } from "naive-ui";
import { openBlock, createElementBlock, defineComponent, createBlock, withCtx, createTextVNode, createVNode, ref, reactive, watch, onMounted, createElementVNode, Fragment, withKeys, withModifiers, toDisplayString, getCurrentScope, onScopeDispose, unref, computed, watchEffect, getCurrentInstance, createStaticVNode, h, renderSlot, createCommentVNode, readonly, resolveComponent, renderList, resolveDynamicComponent, normalizeClass, withDirectives, vShow, pushScopeId, popScopeId, normalizeStyle, inject, nextTick, Transition, KeepAlive } from "vue";
import { defineStore, createPinia } from "pinia";
import * as vueRouter from "vue-router";
import { useRouter, useRoute, createWebHashHistory } from "vue-router";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$h = {};
function _sfc_render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, "error");
}
const error = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: error
}, Symbol.toStringTag, { value: "Module" }));
const options = [
  {
    label: "杰·盖茨比",
    key: "jay gatsby"
  },
  {
    label: "黛西·布坎南",
    key: "daisy buchanan"
  },
  {
    type: "divider",
    key: "d1"
  },
  {
    label: "尼克·卡拉威",
    key: "nick carraway"
  },
  {
    label: "其他",
    key: "others1",
    children: [
      {
        label: "乔丹·贝克",
        key: "jordan baker"
      },
      {
        label: "汤姆·布坎南",
        key: "tom buchanan"
      },
      {
        label: "其他",
        key: "others2",
        children: [
          {
            label: "鸡肉",
            key: "chicken"
          },
          {
            label: "牛肉",
            key: "beef"
          }
        ]
      }
    ]
  }
];
const _sfc_main$g = defineComponent({
  setup() {
    const router2 = useRouter();
    return {
      options,
      handleSelect(key) {
        router2.push({ path: "/about" });
      }
    };
  }
});
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_button = NButton;
  const _component_n_dropdown = NDropdown;
  const _component_n_space = NSpace;
  return openBlock(), createBlock(_component_n_space, null, {
    default: withCtx(() => [
      createTextVNode(" 22 "),
      createVNode(_component_n_dropdown, {
        placement: "bottom-start",
        trigger: "click",
        size: "small",
        options: _ctx.options,
        onSelect: _ctx.handleSelect
      }, {
        default: withCtx(() => [
          createVNode(_component_n_button, null, {
            default: withCtx(() => [
              createTextVNode("小号")
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["options", "onSelect"]),
      createVNode(_component_n_dropdown, {
        placement: "bottom-start",
        trigger: "click",
        size: "medium",
        options: _ctx.options,
        onSelect: _ctx.handleSelect
      }, {
        default: withCtx(() => [
          createVNode(_component_n_button, null, {
            default: withCtx(() => [
              createTextVNode("中号")
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["options", "onSelect"]),
      createVNode(_component_n_dropdown, {
        placement: "bottom-start",
        trigger: "click",
        size: "large",
        options: _ctx.options,
        onSelect: _ctx.handleSelect
      }, {
        default: withCtx(() => [
          createVNode(_component_n_button, null, {
            default: withCtx(() => [
              createTextVNode("大号")
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["options", "onSelect"]),
      createVNode(_component_n_dropdown, {
        placement: "bottom-start",
        trigger: "click",
        size: "huge",
        options: _ctx.options,
        onSelect: _ctx.handleSelect
      }, {
        default: withCtx(() => [
          createVNode(_component_n_button, null, {
            default: withCtx(() => [
              createTextVNode("巨大号")
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["options", "onSelect"])
    ]),
    _: 1
  });
}
const index$3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = defineComponent({
  setup() {
    const route = useRoute();
    const iframe = ref(null);
    const compData = reactive({
      src: route.meta.url,
      show: true
    });
    watch(route, () => {
      compData.src = route.meta.url;
    });
    onMounted(() => {
      iframe.value.onload = function() {
        compData.show = false;
      };
    });
    return {
      compData,
      iframe
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_89c42259_lang = "";
const _hoisted_1$1O = ["src"];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_card = NCard;
  const _component_n_spin = NSpin;
  return openBlock(), createBlock(_component_n_spin, {
    show: _ctx.compData.show,
    class: "spin"
  }, {
    default: withCtx(() => [
      createVNode(_component_n_card, {
        style: { "height": "100%" },
        "content-style": "height:100%;padding:0"
      }, {
        default: withCtx(() => [
          createElementVNode("iframe", {
            ref: "iframe",
            style: { "height": "100%", "width": "100%" },
            src: _ctx.compData.src
          }, null, 8, _hoisted_1$1O)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["show"]);
}
const globalViewIframe = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__scopeId", "data-v-89c42259"]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: globalViewIframe
}, Symbol.toStringTag, { value: "Module" }));
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
const typeOfTest = (type) => (thing) => typeof thing === type;
const { isArray: isArray$7 } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer$4(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$4(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString = typeOfTest("string");
const isFunction$4 = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject$a = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject$2 = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
const isDate = kindOfTest("Date");
const isFile = kindOfTest("File");
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject$a(val) && isFunction$4(val.pipe);
const isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction$4(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction$4(thing.toString) && thing.toString() === "[object FormData]"));
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray$7(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys2 = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys2.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys2[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys2 = Object.keys(obj);
  let i = keys2.length;
  let _key;
  while (i-- > 0) {
    _key = keys2[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== "undefined")
    return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge$2() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue2 = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject$2(result[targetKey]) && isPlainObject$2(val)) {
      result[targetKey] = merge$2(result[targetKey], val);
    } else if (isPlainObject$2(val)) {
      result[targetKey] = merge$2({}, val);
    } else if (isArray$7(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue2);
  }
  return result;
}
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction$4(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null)
    return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray$7(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
const isTypedArray$3 = ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
const hasOwnProperty$b = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction$4(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction$4(value))
      return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray$7(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop$3 = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$4(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject$a(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray$7(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing) => thing && (isObject$a(thing) || isFunction$4(thing)) && isFunction$4(thing.then) && isFunction$4(thing.catch);
const utils = {
  isArray: isArray$7,
  isArrayBuffer,
  isBuffer: isBuffer$4,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject: isObject$a,
  isPlainObject: isPlainObject$2,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction: isFunction$4,
  isStream,
  isURLSearchParams,
  isTypedArray: isTypedArray$3,
  isFileList,
  forEach,
  merge: merge$2,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: hasOwnProperty$b,
  hasOwnProp: hasOwnProperty$b,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop: noop$3,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};
function AxiosError(message, code, config2, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config2 && (this.config = config2);
  request && (this.request = request);
  response && (this.response = response);
}
utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const prototype$1 = AxiosError.prototype;
const descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", { value: true });
AxiosError.from = (error2, code, config2, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);
  utils.toFlatObject(error2, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error2.message, code, config2, request, response);
  axiosError.cause = error2;
  axiosError.name = error2.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
const httpAdapter = null;
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}
function removeBrackets(key) {
  return utils.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path)
    return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options2) {
  if (!utils.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new FormData();
  options2 = utils.toFlatObject(options2, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils.isUndefined(source[option]);
  });
  const metaTokens = options2.metaTokens;
  const visitor = options2.visitor || defaultVisitor;
  const dots = options2.dots;
  const indexes = options2.indexes;
  const _Blob = options2.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);
  if (!utils.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils.isBlob(value)) {
      throw new AxiosError("Blob is not supported. Use a Buffer instead.");
    }
    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils.isArray(value) && isFlatArray(value) || (utils.isFileList(value) || utils.endsWith(key, "[]")) && (arr = utils.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index2) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index2, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils.isUndefined(value))
      return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options2) {
  this._pairs = [];
  params && toFormData(params, this, options2);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options2) {
  if (!params) {
    return url;
  }
  const _encode = options2 && options2.encode || encode;
  const serializeFn = options2 && options2.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options2);
  } else {
    serializedParams = utils.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options2).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options2) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options2 ? options2.synchronous : false,
      runWhen: options2 ? options2.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id2) {
    if (this.handlers[id2]) {
      this.handlers[id2] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h2) {
      if (h2 !== null) {
        fn(h2);
      }
    });
  }
}
const InterceptorManager$1 = InterceptorManager;
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
})();
const isStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const platform = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function toURLEncodedForm(data, options2) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options2));
}
function parsePropPath(name) {
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys2 = Object.keys(arr);
  let i;
  const len = keys2.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys2[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index2) {
    let name = path[index2++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index2 >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index2);
    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};
    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
const DEFAULT_CONTENT_TYPE = {
  "Content-Type": void 0
};
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils.isObject(data);
    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils.isFormData(data);
    if (isFormData2) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
const defaults$1 = defaults;
const ignoreDuplicateOf = utils.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};
const $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils.isString(value))
    return;
  if (utils.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys2 = Object.keys(this);
    let i = keys2.length;
    let deleted = false;
    while (i--) {
      const key = keys2[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed2 = new this(first);
    targets.forEach((target) => computed2.set(target));
    return computed2;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);
const AxiosHeaders$1 = AxiosHeaders;
function transformData(fns, response) {
  const config2 = this || defaults$1;
  const context = response || config2;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils.forEach(fns, function transform(fn) {
    data = fn.call(config2, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}
function CanceledError(message, config2, request) {
  AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config2, request);
  this.name = "CanceledError";
}
utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      "Request failed with status code " + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}
const cookies = platform.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value));
        if (utils.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils.isString(path)) {
          cookie.push("path=" + path);
        }
        if (utils.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read(name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return {
      write: function write() {
      },
      read: function read() {
        return null;
      },
      remove: function remove() {
      }
    };
  }()
);
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const isURLSameOrigin = platform.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv2() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    function resolveURL(url) {
      let href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin2(requestURL) {
      const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv2() {
    return function isURLSameOrigin2() {
      return true;
    };
  }()
);
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return (e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e
    };
    data[isDownloadStream ? "download" : "upload"] = true;
    listener(data);
  };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config2) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config2.data;
    const requestHeaders = AxiosHeaders$1.from(config2.headers).normalize();
    const responseType = config2.responseType;
    let onCanceled;
    function done() {
      if (config2.cancelToken) {
        config2.cancelToken.unsubscribe(onCanceled);
      }
      if (config2.signal) {
        config2.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils.isFormData(requestData)) {
      if (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false);
      } else {
        requestHeaders.setContentType("multipart/form-data;", false);
      }
    }
    let request = new XMLHttpRequest();
    if (config2.auth) {
      const username = config2.auth.username || "";
      const password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    const fullPath = buildFullPath(config2.baseURL, config2.url);
    request.open(config2.method.toUpperCase(), buildURL(fullPath, config2.params, config2.paramsSerializer), true);
    request.timeout = config2.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders$1.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config2,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config2, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config2, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config2.timeout ? "timeout of " + config2.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = config2.transitional || transitionalDefaults;
      if (config2.timeoutErrorMessage) {
        timeoutErrorMessage = config2.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config2,
        request
      ));
      request = null;
    };
    if (platform.isStandardBrowserEnv) {
      const xsrfValue = (config2.withCredentials || isURLSameOrigin(fullPath)) && config2.xsrfCookieName && cookies.read(config2.xsrfCookieName);
      if (xsrfValue) {
        requestHeaders.set(config2.xsrfHeaderName, xsrfValue);
      }
    }
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils.isUndefined(config2.withCredentials)) {
      request.withCredentials = !!config2.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = config2.responseType;
    }
    if (typeof config2.onDownloadProgress === "function") {
      request.addEventListener("progress", progressEventReducer(config2.onDownloadProgress, true));
    }
    if (typeof config2.onUploadProgress === "function" && request.upload) {
      request.upload.addEventListener("progress", progressEventReducer(config2.onUploadProgress));
    }
    if (config2.cancelToken || config2.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config2, request) : cancel);
        request.abort();
        request = null;
      };
      config2.cancelToken && config2.cancelToken.subscribe(onCanceled);
      if (config2.signal) {
        config2.signal.aborted ? onCanceled() : config2.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(fullPath);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config2));
      return;
    }
    request.send(requestData || null);
  });
};
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};
utils.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
const adapters = {
  getAdapter: (adapters2) => {
    adapters2 = utils.isArray(adapters2) ? adapters2 : [adapters2];
    const { length } = adapters2;
    let nameOrAdapter;
    let adapter;
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters2[i];
      if (adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
        break;
      }
    }
    if (!adapter) {
      if (adapter === false) {
        throw new AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          "ERR_NOT_SUPPORT"
        );
      }
      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
      );
    }
    if (!utils.isFunction(adapter)) {
      throw new TypeError("adapter is not a function");
    }
    return adapter;
  },
  adapters: knownAdapters
};
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
  if (config2.signal && config2.signal.aborted) {
    throw new CanceledError(null, config2);
  }
}
function dispatchRequest(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = AxiosHeaders$1.from(config2.headers);
  config2.data = transformData.call(
    config2,
    config2.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config2.method) !== -1) {
    config2.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters.getAdapter(config2.adapter || defaults$1.adapter);
  return adapter(config2).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config2);
    response.data = transformData.call(
      config2,
      config2.transformResponse,
      response
    );
    response.headers = AxiosHeaders$1.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config2);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config2,
          config2.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config3 = {};
  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({ caseless }, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(void 0, a, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };
  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
  });
  return config3;
}
const VERSION = "1.4.0";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options2, schema, allowUnknown) {
  if (typeof options2 !== "object") {
    throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys2 = Object.keys(options2);
  let i = keys2.length;
  while (i-- > 0) {
    const opt = keys2[i];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options2[opt];
      const result = value === void 0 || validator2(value, opt, options2);
      if (result !== true) {
        throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config2) {
    if (typeof configOrUrl === "string") {
      config2 = config2 || {};
      config2.url = configOrUrl;
    } else {
      config2 = configOrUrl || {};
    }
    config2 = mergeConfig(this.defaults, config2);
    const { transitional: transitional2, paramsSerializer, headers } = config2;
    if (transitional2 !== void 0) {
      validator.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config2.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }
    config2.method = (config2.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders;
    contextHeaders = headers && utils.merge(
      headers.common,
      headers[config2.method]
    );
    contextHeaders && utils.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config2.headers = AxiosHeaders$1.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config2);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config2;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error2) {
        onRejected.call(this, error2);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error2) {
      return Promise.reject(error2);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config2) {
    config2 = mergeConfig(this.defaults, config2);
    const fullPath = buildFullPath(config2.baseURL, config2.url);
    return buildURL(fullPath, config2.params, config2.paramsSerializer);
  }
}
utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios.prototype[method] = function(url, config2) {
    return this.request(mergeConfig(config2 || {}, {
      method,
      url,
      data: (config2 || {}).data
    }));
  };
});
utils.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config2) {
      return this.request(mergeConfig(config2 || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
const Axios$1 = Axios;
class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config2, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError(message, config2, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index2 = this._listeners.indexOf(listener);
    if (index2 !== -1) {
      this._listeners.splice(index2, 1);
    }
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}
const CancelToken$1 = CancelToken;
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError(payload) {
  return utils.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
const HttpStatusCode$1 = HttpStatusCode;
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);
  utils.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
  utils.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios = createInstance(defaults$1);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;
axios.AxiosError = AxiosError;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing) => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const axios$1 = axios;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
const denyList = /* @__PURE__ */ new Set([
  "ENOTFOUND",
  "ENETUNREACH",
  // SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
  "UNABLE_TO_GET_ISSUER_CERT",
  "UNABLE_TO_GET_CRL",
  "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
  "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
  "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
  "CERT_SIGNATURE_FAILURE",
  "CRL_SIGNATURE_FAILURE",
  "CERT_NOT_YET_VALID",
  "CERT_HAS_EXPIRED",
  "CRL_NOT_YET_VALID",
  "CRL_HAS_EXPIRED",
  "ERROR_IN_CERT_NOT_BEFORE_FIELD",
  "ERROR_IN_CERT_NOT_AFTER_FIELD",
  "ERROR_IN_CRL_LAST_UPDATE_FIELD",
  "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
  "OUT_OF_MEM",
  "DEPTH_ZERO_SELF_SIGNED_CERT",
  "SELF_SIGNED_CERT_IN_CHAIN",
  "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
  "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
  "CERT_CHAIN_TOO_LONG",
  "CERT_REVOKED",
  "INVALID_CA",
  "PATH_LENGTH_EXCEEDED",
  "INVALID_PURPOSE",
  "CERT_UNTRUSTED",
  "CERT_REJECTED",
  "HOSTNAME_MISMATCH"
]);
var isRetryAllowed = (error2) => !denyList.has(error2 && error2.code);
const isRetryAllowed$1 = /* @__PURE__ */ getDefaultExportFromCjs(isRetryAllowed);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error2) {
    reject(error2);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var namespace$1 = "axios-retry";
function isNetworkError(error2) {
  return !error2.response && Boolean(error2.code) && // Prevents retrying cancelled requests
  error2.code !== "ECONNABORTED" && // Prevents retrying timed out requests
  isRetryAllowed$1(error2);
}
var SAFE_HTTP_METHODS = ["get", "head", "options"];
var IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(["put", "delete"]);
function isRetryableError(error2) {
  return error2.code !== "ECONNABORTED" && (!error2.response || error2.response.status >= 500 && error2.response.status <= 599);
}
function isSafeRequestError(error2) {
  if (!error2.config) {
    return false;
  }
  return isRetryableError(error2) && SAFE_HTTP_METHODS.indexOf(error2.config.method) !== -1;
}
function isIdempotentRequestError(error2) {
  if (!error2.config) {
    return false;
  }
  return isRetryableError(error2) && IDEMPOTENT_HTTP_METHODS.indexOf(error2.config.method) !== -1;
}
function isNetworkOrIdempotentRequestError(error2) {
  return isNetworkError(error2) || isIdempotentRequestError(error2);
}
function noDelay() {
  return 0;
}
function exponentialDelay() {
  var retryNumber = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var delayFactor = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 100;
  var delay = Math.pow(2, retryNumber) * delayFactor;
  var randomSum = delay * 0.2 * Math.random();
  return delay + randomSum;
}
function getCurrentState(config2) {
  var currentState = config2[namespace$1] || {};
  currentState.retryCount = currentState.retryCount || 0;
  config2[namespace$1] = currentState;
  return currentState;
}
function getRequestOptions(config2, defaultOptions) {
  return _objectSpread(_objectSpread({}, defaultOptions), config2[namespace$1]);
}
function fixConfig(axios2, config2) {
  if (axios2.defaults.agent === config2.agent) {
    delete config2.agent;
  }
  if (axios2.defaults.httpAgent === config2.httpAgent) {
    delete config2.httpAgent;
  }
  if (axios2.defaults.httpsAgent === config2.httpsAgent) {
    delete config2.httpsAgent;
  }
}
function shouldRetry(_x, _x2, _x3, _x4) {
  return _shouldRetry.apply(this, arguments);
}
function _shouldRetry() {
  _shouldRetry = _asyncToGenerator(function* (retries, retryCondition, currentState, error2) {
    var shouldRetryOrPromise = currentState.retryCount < retries && retryCondition(error2);
    if (typeof shouldRetryOrPromise === "object") {
      try {
        var shouldRetryPromiseResult = yield shouldRetryOrPromise;
        return shouldRetryPromiseResult !== false;
      } catch (_err) {
        return false;
      }
    }
    return shouldRetryOrPromise;
  });
  return _shouldRetry.apply(this, arguments);
}
function axiosRetry(axios2, defaultOptions) {
  var requestInterceptorId = axios2.interceptors.request.use((config2) => {
    var currentState = getCurrentState(config2);
    currentState.lastRequestTime = Date.now();
    return config2;
  });
  var responseInterceptorId = axios2.interceptors.response.use(null, /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* (error2) {
      var {
        config: config2
      } = error2;
      if (!config2) {
        return Promise.reject(error2);
      }
      var {
        retries = 3,
        retryCondition = isNetworkOrIdempotentRequestError,
        retryDelay = noDelay,
        shouldResetTimeout = false,
        onRetry = () => {
        }
      } = getRequestOptions(config2, defaultOptions);
      var currentState = getCurrentState(config2);
      if (yield shouldRetry(retries, retryCondition, currentState, error2)) {
        currentState.retryCount += 1;
        var delay = retryDelay(currentState.retryCount, error2);
        fixConfig(axios2, config2);
        if (!shouldResetTimeout && config2.timeout && currentState.lastRequestTime) {
          var lastRequestDuration = Date.now() - currentState.lastRequestTime;
          var timeout = config2.timeout - lastRequestDuration - delay;
          if (timeout <= 0) {
            return Promise.reject(error2);
          }
          config2.timeout = timeout;
        }
        config2.transformRequest = [(data) => data];
        onRetry(currentState.retryCount, error2, config2);
        return new Promise((resolve) => setTimeout(() => resolve(axios2(config2)), delay));
      }
      return Promise.reject(error2);
    });
    return function(_x5) {
      return _ref.apply(this, arguments);
    };
  }());
  return {
    requestInterceptorId,
    responseInterceptorId
  };
}
axiosRetry.isNetworkError = isNetworkError;
axiosRetry.isSafeRequestError = isSafeRequestError;
axiosRetry.isIdempotentRequestError = isIdempotentRequestError;
axiosRetry.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
axiosRetry.exponentialDelay = exponentialDelay;
axiosRetry.isRetryableError = isRetryableError;
const http = axios$1.create({
  withCredentials: true
});
axiosRetry(http, {
  retries: 3,
  shouldResetTimeout: true,
  retryDelay: (retryCount) => retryCount * 1500
  // 间隔时间
});
http.interceptors.request.use((config2) => {
  return config2;
}, (error2) => {
  return Promise.reject(error2);
});
http.interceptors.response.use((response) => {
  const { code } = response.data;
  if (code === 1) {
    return response.data;
  }
  return response;
}, (error2) => {
  return Promise.reject(error2);
});
const post = (url, params, config2) => {
  return http.post(url, params, config2);
};
const apiMap = {
  login: "/login",
  menus: "/menus",
  userInfo: "/userInfo"
};
const login$1 = () => {
  return post(apiMap.login);
};
const menus = () => {
  return post(apiMap.menus);
};
const userInfo = () => {
  return post(apiMap.userInfo);
};
const _sfc_main$e = defineComponent({
  setup() {
    const formRef = ref(null);
    const rPasswordFormItemRef = ref(null);
    const message = useMessage();
    console.log(useMessage);
    const modelRef = ref({
      age: 1,
      password: 1,
      reenteredPassword: null
    });
    function validatePasswordStartWith(rule, value) {
      return !!modelRef.value.password && modelRef.value.password.startsWith(value) && modelRef.value.password.length >= value.length;
    }
    function validatePasswordSame(rule, value) {
      return value === modelRef.value.password;
    }
    const rules = {
      age: [
        {
          required: true,
          validator(rule, value) {
            if (!value) {
              return new Error("需要年龄");
            } else if (!/^\d*$/.test(value)) {
              return new Error("年龄应该为整数");
            } else if (Number(value) < 18) {
              return new Error("年龄应该超过十八岁");
            }
            return true;
          },
          trigger: ["input", "blur"]
        }
      ],
      password: [
        {
          required: true,
          message: "请输入密码"
        }
      ],
      reenteredPassword: [
        {
          required: true,
          message: "请再次输入密码",
          trigger: ["input", "blur"]
        },
        {
          validator: validatePasswordStartWith,
          message: "两次密码输入不一致",
          trigger: "input"
        },
        {
          validator: validatePasswordSame,
          message: "两次密码输入不一致",
          trigger: ["blur", "password-input"]
        }
      ]
    };
    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules,
      handlePasswordInput() {
        var _a;
        if (modelRef.value.reenteredPassword) {
          (_a = rPasswordFormItemRef.value) == null ? void 0 : _a.validate({ trigger: "password-input" });
        }
      },
      handleValidateButtonClick(e) {
        var _a;
        e.preventDefault();
        login$1();
        (_a = formRef.value) == null ? void 0 : _a.validate((errors) => {
          if (!errors) {
            message.success("验证成功");
          } else {
            console.log(errors);
            message.error("验证失败");
          }
        });
      }
    };
  }
});
const _hoisted_1$1N = { style: { "display": "flex", "justify-content": "flex-end" } };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_input = NInput;
  const _component_n_form_item = NFormItem;
  const _component_n_button = NButton;
  const _component_n_col = NCol;
  const _component_n_row = NRow;
  const _component_n_form = NForm;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_n_form, {
      ref: "formRef",
      model: _ctx.model,
      rules: _ctx.rules
    }, {
      default: withCtx(() => [
        createVNode(_component_n_form_item, {
          path: "age",
          label: "年龄"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_input, {
              value: _ctx.model.age,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.model.age = $event),
              onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
              }, ["prevent"]), ["enter"]))
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, {
          path: "password",
          label: "密码"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_input, {
              value: _ctx.model.password,
              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => _ctx.model.password = $event),
              type: "password",
              onInput: _ctx.handlePasswordInput,
              onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(() => {
              }, ["prevent"]), ["enter"]))
            }, null, 8, ["value", "onInput"])
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, {
          ref: "rPasswordFormItemRef",
          first: "",
          path: "reenteredPassword",
          label: "重复密码"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_input, {
              value: _ctx.model.reenteredPassword,
              "onUpdate:value": _cache[4] || (_cache[4] = ($event) => _ctx.model.reenteredPassword = $event),
              disabled: !_ctx.model.password,
              type: "password",
              onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(() => {
              }, ["prevent"]), ["enter"]))
            }, null, 8, ["value", "disabled"])
          ]),
          _: 1
        }, 512),
        createVNode(_component_n_row, { gutter: [0, 24] }, {
          default: withCtx(() => [
            createVNode(_component_n_col, { span: 24 }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_1$1N, [
                  createVNode(_component_n_button, {
                    disabled: _ctx.model.age === null,
                    round: "",
                    type: "primary",
                    onClick: _ctx.handleValidateButtonClick
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 验证 ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model", "rules"]),
    createElementVNode("pre", null, toDisplayString(JSON.stringify(_ctx.model, null, 2)) + "\n", 1)
  ], 64);
}
const login = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {};
function _sfc_render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, "test");
}
const index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$2
}, Symbol.toStringTag, { value: "Module" }));
const config = {
  whiteList: ["/login"],
  resetPath: "/login",
  menus: [],
  // 通过注入函数，让框架获取外部文件
  getViews: () => {
    return /* @__PURE__ */ Object.assign({ "../packages/view/error/404.vue": __vite_glob_0_0, "../packages/view/home/index.vue": __vite_glob_0_1, "../packages/view/iframe/index.vue": __vite_glob_0_2, "../packages/view/login/index.vue": __vite_glob_0_3, "../packages/view/test/index.vue": __vite_glob_0_4 });
  }
};
const paths = ["userSetting"], id = "app";
const appLoca = window.localStorage.getItem(id);
if (appLoca) {
  const { userSetting } = JSON.parse(appLoca);
  if (userSetting.lasting) {
    paths.push("tabs");
  }
}
const app = defineStore({
  id,
  persist: {
    storage: window.localStorage,
    paths
  },
  // 持久化存储插件其他配置
  state: () => {
    return {
      browser: {},
      // 当前浏览器信息
      configOptions: config,
      // 框架配置
      collapsed: false,
      // 是否折叠
      mobile: false,
      // 是否移动端
      userSetting: {
        // 主题设置
        layoutName: "ml",
        // 主题名称
        themeColor: "#519a73",
        // 主题颜色
        themeName: null,
        // 主题模式 深色 和 白色
        language: "zhCN",
        // 语言
        tabsStyle: "sutra",
        // 标签风格
        hideTabs: false,
        // 隐藏标签
        lasting: false,
        // 标签持久化
        gray: false,
        // 灰色模式
        weak: false,
        // 色弱模式
        isFullscreen: false,
        // 全屏模式
        animation: "animate__slideInLeft",
        // 类型 参考animation.css
        disableAnimation: false,
        // 动画
        keepAlive: false
        // 是否缓存
      },
      userInfo: {},
      userState: false,
      allMenus: [],
      // 所有菜单
      treeMenus: [],
      // 渲染的菜单
      paths: [],
      // 路由路径
      tabs: [],
      // 标签
      currentRouter: {}
      // 当前路由信息
    };
  },
  getters: {
    getTabs(state) {
      return state.tabs.sort((a, b) => (b.meta.order || 0) - (a.meta.order || 0));
    }
  }
});
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$4(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$4;
var eq$3 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$3(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index2 = assocIndexOf$2(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$5 = root$7.Symbol;
var _Symbol = Symbol$5;
var Symbol$4 = _Symbol;
var objectProto$d = Object.prototype;
var hasOwnProperty$a = objectProto$d.hasOwnProperty;
var nativeObjectToString$1 = objectProto$d.toString;
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$a.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$c = Object.prototype;
var nativeObjectToString = objectProto$c.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$3 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : void 0;
function baseGetTag$5(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$5;
function isObject$9(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$9;
var baseGetTag$4 = _baseGetTag, isObject$8 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$8(value)) {
    return false;
  }
  var tag = baseGetTag$4(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$7 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$b = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$9).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$7(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative, root$5 = _root;
var Map$4 = getNative$6(root$5, "Map");
var _Map = Map$4;
var getNative$5 = _getNative;
var nativeCreate$4 = getNative$5(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$8.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$7.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$2(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$2.prototype.clear = mapCacheClear;
MapCache$2.prototype["delete"] = mapCacheDelete;
MapCache$2.prototype.get = mapCacheGet;
MapCache$2.prototype.has = mapCacheHas;
MapCache$2.prototype.set = mapCacheSet;
var _MapCache = MapCache$2;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype["delete"] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2;
var getNative$4 = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$3(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$3;
var baseAssignValue$2 = _baseAssignValue, eq$2 = eq_1;
function assignMergeValue$2(object, key, value) {
  if (value !== void 0 && !eq$2(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue$2(object, key, value);
  }
}
var _assignMergeValue = assignMergeValue$2;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
var _cloneBuffer = { exports: {} };
_cloneBuffer.exports;
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
var _cloneBufferExports = _cloneBuffer.exports;
var root$4 = _root;
var Uint8Array$2 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$2;
var Uint8Array$1 = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneTypedArray$2(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$2;
function copyArray$2(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var _copyArray = copyArray$2;
var isObject$6 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$6(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var getPrototype$3 = overArg$1(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$3;
var objectProto$8 = Object.prototype;
function isPrototype$3(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$8;
  return value === proto;
}
var _isPrototype = isPrototype$3;
var baseCreate = _baseCreate, getPrototype$2 = _getPrototype, isPrototype$2 = _isPrototype;
function initCloneObject$2(object) {
  return typeof object.constructor == "function" && !isPrototype$2(object) ? baseCreate(getPrototype$2(object)) : {};
}
var _initCloneObject = initCloneObject$2;
function isObjectLike$7(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$7;
var baseGetTag$3 = _baseGetTag, isObjectLike$6 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$6(value) && baseGetTag$3(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$5 = isObjectLike_1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
var isArguments$3 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$5(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$3;
var isArray$5 = Array.isArray;
var isArray_1 = isArray$5;
const isArray$6 = /* @__PURE__ */ getDefaultExportFromCjs(isArray_1);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$2;
var isFunction$1 = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$4(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$4;
var isArrayLike$3 = isArrayLike_1, isObjectLike$4 = isObjectLike_1;
function isArrayLikeObject$2(value) {
  return isObjectLike$4(value) && isArrayLike$3(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$2;
var isBuffer$3 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
isBuffer$3.exports;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$3, isBuffer$3.exports);
var isBufferExports = isBuffer$3.exports;
var baseGetTag$2 = _baseGetTag, getPrototype$1 = _getPrototype, isObjectLike$3 = isObjectLike_1;
var objectTag$3 = "[object Object]";
var funcProto = Function.prototype, objectProto$6 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike$3(value) || baseGetTag$2(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$5.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$1;
var baseGetTag$1 = _baseGetTag, isLength = isLength_1, isObjectLike$2 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$2(value) && isLength(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$3(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$3;
var _nodeUtil = { exports: {} };
_nodeUtil.exports;
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var _nodeUtilExports = _nodeUtil.exports;
var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtilExports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
function safeGet$2(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var _safeGet = safeGet$2;
var baseAssignValue$1 = _baseAssignValue, eq$1 = eq_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function assignValue$2(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$2;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$5(source, props, object, customizer2) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer2 ? customizer2(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$5;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var baseTimes = _baseTimes, isArguments$2 = isArguments_1, isArray$4 = isArray_1, isBuffer$2 = isBufferExports, isIndex$1 = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$4(value), isArg = !isArr && isArguments$2(value), isBuff = !isArr && !isArg && isBuffer$2(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$5 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$5(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$2 = isArrayLike_1;
function keysIn$5(object) {
  return isArrayLike$2(object) ? arrayLikeKeys$1(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$5;
var copyObject$4 = _copyObject, keysIn$4 = keysIn_1;
function toPlainObject$1(value) {
  return copyObject$4(value, keysIn$4(value));
}
var toPlainObject_1 = toPlainObject$1;
var assignMergeValue$1 = _assignMergeValue, cloneBuffer$1 = _cloneBufferExports, cloneTypedArray$1 = _cloneTypedArray, copyArray$1 = _copyArray, initCloneObject$1 = _initCloneObject, isArguments$1 = isArguments_1, isArray$3 = isArray_1, isArrayLikeObject$1 = isArrayLikeObject_1, isBuffer$1 = isBufferExports, isFunction = isFunction_1, isObject$4 = isObject_1, isPlainObject = isPlainObject_1, isTypedArray = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer2, stack) {
  var objValue = safeGet$1(object, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue$1(object, key, stacked);
    return;
  }
  var newValue = customizer2 ? customizer2(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$3(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$3(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject$1(objValue)) {
        newValue = copyArray$1(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer$1(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray$1(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$4(objValue) || isFunction(objValue)) {
        newValue = initCloneObject$1(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer2, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue$1(object, key, newValue);
}
var _baseMergeDeep = baseMergeDeep$1;
var Stack$1 = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$3 = isObject_1, keysIn$3 = keysIn_1, safeGet = _safeGet;
function baseMerge$2(object, source, srcIndex, customizer2, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack$1());
    if (isObject$3(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge$2, customizer2, stack);
    } else {
      var newValue = customizer2 ? customizer2(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn$3);
}
var _baseMerge = baseMerge$2;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1, overRest = _overRest, setToString = _setToString;
function baseRest$2(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var _baseRest = baseRest$2;
var eq = eq_1, isArrayLike$1 = isArrayLike_1, isIndex = _isIndex, isObject$2 = isObject_1;
function isIterateeCall$1(value, index2, object) {
  if (!isObject$2(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike$1(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$1;
var baseRest$1 = _baseRest, isIterateeCall = _isIterateeCall;
function createAssigner$2(assigner) {
  return baseRest$1(function(object, sources) {
    var index2 = -1, length = sources.length, customizer2 = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer2 = assigner.length > 3 && typeof customizer2 == "function" ? (length--, customizer2) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer2 = length < 3 ? void 0 : customizer2;
      length = 1;
    }
    object = Object(object);
    while (++index2 < length) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer2);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$2;
var baseMerge$1 = _baseMerge, createAssigner$1 = _createAssigner;
var mergeWith = createAssigner$1(function(object, source, srcIndex, customizer2) {
  baseMerge$1(object, source, srcIndex, customizer2);
});
var mergeWith_1 = mergeWith;
const cloneDeep$2 = /* @__PURE__ */ getDefaultExportFromCjs(mergeWith_1);
const style = "";
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = typeof window !== "undefined";
const noop$2 = () => {
};
function createFilterWrapper(filter2, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter2(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function throttleFilter(ms, trailing = true, leading = true, rejectOnCancel = false) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop$2;
  let lastValue;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop$2;
    }
  };
  const filter2 = (_invoke) => {
    const duration = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter2;
}
function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = Number.parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(
    throttleFilter(ms, trailing, leading, rejectOnCancel),
    fn
  );
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options2;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options2] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options2] = args;
  }
  if (!target)
    return noop$2;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options22) => {
    el.addEventListener(event, listener, options22);
    return () => el.removeEventListener(event, listener, options22);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options2)],
    ([el, options22]) => {
      cleanup();
      if (!el)
        return;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, options22));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance()) {
    onMounted(() => {
      isMounted.value = true;
    });
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery(query, options2 = {}) {
  const { window: window2 = defaultWindow } = options2;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
function useBreakpoints(breakpoints, options2 = {}) {
  function getValue2(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window: window2 = defaultWindow } = options2;
  function match(query) {
    if (!window2)
      return false;
    return window2.matchMedia(query).matches;
  }
  const greaterOrEqual = (k) => {
    return useMediaQuery(`(min-width: ${getValue2(k)})`, options2);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greaterOrEqual(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return Object.assign(shortcutMethods, {
    greater(k) {
      return useMediaQuery(`(min-width: ${getValue2(k, 0.1)})`, options2);
    },
    greaterOrEqual,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue2(k, -0.1)})`, options2);
    },
    smallerOrEqual(k) {
      return useMediaQuery(`(max-width: ${getValue2(k)})`, options2);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b, -0.1)})`, options2);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue2(k, 0.1)})`);
    },
    isGreaterOrEqual(k) {
      return match(`(min-width: ${getValue2(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue2(k, -0.1)})`);
    },
    isSmallerOrEqual(k) {
      return match(`(max-width: ${getValue2(k)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b, -0.1)})`);
    },
    current() {
      const points = Object.keys(breakpoints).map((i) => [i, greaterOrEqual(i)]);
      return computed(() => points.filter(([, v]) => v.value).map(([k]) => k));
    }
  });
}
const eventHandlers = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function useFullscreen(target, options2 = {}) {
  const {
    document: document2 = defaultDocument,
    autoExit = false
  } = options2;
  const targetRef = computed(() => {
    var _a;
    return (_a = unrefElement(target)) != null ? _a : document2 == null ? void 0 : document2.querySelector("html");
  });
  const isFullscreen = ref(false);
  const requestMethod = computed(() => {
    return [
      "requestFullscreen",
      "webkitRequestFullscreen",
      "webkitEnterFullscreen",
      "webkitEnterFullScreen",
      "webkitRequestFullScreen",
      "mozRequestFullScreen",
      "msRequestFullscreen"
    ].find((m) => document2 && m in document2 || targetRef.value && m in targetRef.value);
  });
  const exitMethod = computed(() => {
    return [
      "exitFullscreen",
      "webkitExitFullscreen",
      "webkitExitFullScreen",
      "webkitCancelFullScreen",
      "mozCancelFullScreen",
      "msExitFullscreen"
    ].find((m) => document2 && m in document2 || targetRef.value && m in targetRef.value);
  });
  const fullscreenEnabled = computed(() => {
    return [
      "fullScreen",
      "webkitIsFullScreen",
      "webkitDisplayingFullscreen",
      "mozFullScreen",
      "msFullscreenElement"
    ].find((m) => document2 && m in document2 || targetRef.value && m in targetRef.value);
  });
  const fullscreenElementMethod = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((m) => document2 && m in document2);
  const isSupported = useSupported(
    () => targetRef.value && document2 && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0
  );
  const isCurrentElementFullScreen = () => {
    if (fullscreenElementMethod)
      return (document2 == null ? void 0 : document2[fullscreenElementMethod]) === targetRef.value;
    return false;
  };
  const isElementFullScreen = () => {
    if (fullscreenEnabled.value) {
      if (document2 && document2[fullscreenEnabled.value] != null) {
        return document2[fullscreenEnabled.value];
      } else {
        const target2 = targetRef.value;
        if ((target2 == null ? void 0 : target2[fullscreenEnabled.value]) != null) {
          return Boolean(target2[fullscreenEnabled.value]);
        }
      }
    }
    return false;
  };
  async function exit() {
    if (!isSupported.value || !isFullscreen.value)
      return;
    if (exitMethod.value) {
      if ((document2 == null ? void 0 : document2[exitMethod.value]) != null) {
        await document2[exitMethod.value]();
      } else {
        const target2 = targetRef.value;
        if ((target2 == null ? void 0 : target2[exitMethod.value]) != null)
          await target2[exitMethod.value]();
      }
    }
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported.value || isFullscreen.value)
      return;
    if (isElementFullScreen())
      await exit();
    const target2 = targetRef.value;
    if (requestMethod.value && (target2 == null ? void 0 : target2[requestMethod.value]) != null) {
      await target2[requestMethod.value]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    await (isFullscreen.value ? exit() : enter());
  }
  const handlerCallback = () => {
    const isElementFullScreenValue = isElementFullScreen();
    if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen())
      isFullscreen.value = isElementFullScreenValue;
  };
  useEventListener(document2, eventHandlers, handlerCallback, false);
  useEventListener(() => unrefElement(targetRef), eventHandlers, handlerCallback, false);
  if (autoExit)
    tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}
function arrayEach$1(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$1;
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
function keys$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var keys_1 = keys$3;
var copyObject$3 = _copyObject, keys$2 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$3(source, keys$2(source), object);
}
var _baseAssign = baseAssign$1;
var copyObject$2 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$2(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
function arrayFilter$1(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$1 = Object.prototype;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$3;
var copyObject$1 = _copyObject, getSymbols$2 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$1(source, getSymbols$2(source), object);
}
var _copySymbols = copySymbols$1;
function arrayPush$3(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var _arrayPush = arrayPush$3;
var arrayPush$2 = _arrayPush, getPrototype = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush$2(result, getSymbols$1(object));
    object = getPrototype(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var arrayPush$1 = _arrayPush, isArray$2 = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$2(object) ? result : arrayPush$1(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys$1(object, keys$1, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
function getAllKeysIn$1(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;
var getNative$3 = _getNative, root$3 = _root;
var DataView$1 = getNative$3(root$3, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$2 = _root;
var Promise$2 = getNative$2(root$2, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$1 = _root;
var Set$3 = getNative$1(root$1, "Set");
var _Set = Set$3;
var getNative = _getNative, root = _root;
var WeakMap$1 = getNative(root, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$2 = _Set, WeakMap = _WeakMap, baseGetTag = _baseGetTag, toSource = _toSource;
var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap);
var getTag$3 = baseGetTag;
if (DataView && getTag$3(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag$3(new Map$1()) != mapTag$3 || Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag || Set$2 && getTag$3(new Set$2()) != setTag$3 || WeakMap && getTag$3(new WeakMap()) != weakMapTag$1) {
  getTag$3 = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag$3;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$2 = _Symbol;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtilExports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBufferExports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray$1 = isArray_1, isBuffer = isBufferExports, isMap = isMap_1, isObject$1 = isObject_1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value, bitmask, customizer2, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer2) {
    result = object ? customizer2(value, key, object, stack) : customizer2(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer2, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer2, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone$1(subValue, bitmask, customizer2, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
const cloneDeep$1 = /* @__PURE__ */ getDefaultExportFromCjs(cloneDeep_1);
const toTree = ({ arr = [], keyField = "id", children = "children", pid = "pid", callback = () => {
} }) => {
  const data = cloneDeep$1(arr);
  const map = {};
  data.forEach(function(item) {
    map[item[keyField]] = item;
  });
  const new_data = [];
  data.forEach(function(item) {
    const parent = map[item[pid]];
    if (parent) {
      (parent[children] || (parent[children] = [])).push(item);
    } else {
      new_data.push(item);
    }
    callback && callback(item);
  });
  return new_data;
};
const getObjectPath = ({ arr = [], id: id2 = "" }) => {
  const data = cloneDeep$1(arr);
  for (const i in arr) {
    if (data.hasOwnProperty(i)) {
      if (arr[i].id === id2) {
        return [data[i]];
      }
      if (data[i].children) {
        const node = getObjectPath({ arr: data[i].children, id: id2 });
        if (node !== void 0) {
          return node.concat(data[i]);
        }
      }
    }
  }
};
function htmlElementClass(state, clsName, target) {
  const targetEl = target || document.body;
  if (state) {
    targetEl.classList.add(clsName);
  } else {
    targetEl.classList.remove(clsName);
  }
}
const throttledFn = useThrottleFn(() => {
  const app$1 = app();
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const xs = breakpoints.smaller("sm");
  const sm = breakpoints.between("sm", "md");
  const md = breakpoints.between("md", "lg");
  const lg = breakpoints.between("lg", "xl");
  const xl = breakpoints.between("xl", "2xl");
  const xxl = breakpoints["2xl"];
  app$1.browser = { xs, sm, md, lg, xl, xxl };
  app$1.mobile = xs.value;
  app$1.collapsed = sm.value || md.value;
}, 200);
const updateHtmlGray = () => {
  const app$1 = app();
  htmlElementClass(app$1.userSetting.gray, "bag-grey");
};
const updateHtmlWeak = () => {
  const app$1 = app();
  htmlElementClass(app$1.userSetting.weak, "bag-weak");
};
const setupGlobal = () => {
  throttledFn().then(() => useEventListener(window, "resize", throttledFn));
};
function isObject(v) {
  return typeof v === "object" && v !== null;
}
function normalizeOptions(options2, factoryOptions) {
  options2 = isObject(options2) ? options2 : /* @__PURE__ */ Object.create(null);
  return new Proxy(options2, {
    get(target, key, receiver) {
      if (key === "key")
        return Reflect.get(target, key, receiver);
      return Reflect.get(target, key, receiver) || Reflect.get(factoryOptions, key, receiver);
    }
  });
}
function get(state, path) {
  return path.reduce((obj, p) => {
    return obj == null ? void 0 : obj[p];
  }, state);
}
function set(state, path, val) {
  return path.slice(0, -1).reduce((obj, p) => {
    if (/^(__proto__)$/.test(p))
      return {};
    else
      return obj[p] = obj[p] || {};
  }, state)[path[path.length - 1]] = val, state;
}
function pick(baseState, paths2) {
  return paths2.reduce((substate, path) => {
    const pathArray = path.split(".");
    return set(substate, pathArray, get(baseState, pathArray));
  }, {});
}
function hydrateStore(store, { storage, serializer, key, debug }) {
  try {
    const fromStorage = storage == null ? void 0 : storage.getItem(key);
    if (fromStorage)
      store.$patch(serializer == null ? void 0 : serializer.deserialize(fromStorage));
  } catch (error2) {
    if (debug)
      console.error(error2);
  }
}
function persistState(state, { storage, serializer, key, paths: paths2, debug }) {
  try {
    const toStore = Array.isArray(paths2) ? pick(state, paths2) : state;
    storage.setItem(key, serializer.serialize(toStore));
  } catch (error2) {
    if (debug)
      console.error(error2);
  }
}
function createPersistedState(factoryOptions = {}) {
  return (context) => {
    const { auto = false } = factoryOptions;
    const {
      options: { persist = auto },
      store,
      pinia: pinia2
    } = context;
    if (!persist)
      return;
    if (!(store.$id in pinia2.state.value)) {
      const original_store = pinia2._s.get(store.$id.replace("__hot:", ""));
      if (original_store)
        Promise.resolve().then(() => original_store.$persist());
      return;
    }
    const persistences = (Array.isArray(persist) ? persist.map((p) => normalizeOptions(p, factoryOptions)) : [normalizeOptions(persist, factoryOptions)]).map(
      ({
        storage = localStorage,
        beforeRestore = null,
        afterRestore = null,
        serializer = {
          serialize: JSON.stringify,
          deserialize: JSON.parse
        },
        key = store.$id,
        paths: paths2 = null,
        debug = false
      }) => {
        var _a;
        return {
          storage,
          beforeRestore,
          afterRestore,
          serializer,
          key: ((_a = factoryOptions.key) != null ? _a : (k) => k)(typeof key == "string" ? key : key(store.$id)),
          paths: paths2,
          debug
        };
      }
    );
    store.$persist = () => {
      persistences.forEach((persistence) => {
        persistState(store.$state, persistence);
      });
    };
    store.$hydrate = ({ runHooks = true } = {}) => {
      persistences.forEach((persistence) => {
        const { beforeRestore, afterRestore } = persistence;
        if (runHooks)
          beforeRestore == null ? void 0 : beforeRestore(context);
        hydrateStore(store, persistence);
        if (runHooks)
          afterRestore == null ? void 0 : afterRestore(context);
      });
    };
    persistences.forEach((persistence) => {
      const { beforeRestore, afterRestore } = persistence;
      beforeRestore == null ? void 0 : beforeRestore(context);
      hydrateStore(store, persistence);
      afterRestore == null ? void 0 : afterRestore(context);
      store.$subscribe(
        (_mutation, state) => {
          persistState(state, persistence);
        },
        {
          detached: true
        }
      );
    });
  };
}
var src_default = createPersistedState();
const pinia = createPinia();
function initStore(app$1) {
  const appStore = app();
  const { configOptions } = app$1.config.globalProperties;
  appStore.configOptions = configOptions;
  updateHtmlGray();
  updateHtmlWeak();
}
const setupPinia = (app2) => {
  pinia.use(src_default);
  app2.use(pinia);
  initStore(app2);
};
const _hoisted_1$1M = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1L = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1B = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$N = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M256 367.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$r = [_hoisted_2$1L, _hoisted_3$1B, _hoisted_4$N];
const AlertCircleOutline = defineComponent({
  name: "AlertCircleOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1M, _hoisted_5$r);
  }
});
const _hoisted_1$1L = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1K = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M80 152v256a40.12 40.12 0 0 0 40 40h272a40.12 40.12 0 0 0 40-40V152",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1A = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "48",
    y: "64",
    width: "416",
    height: "80",
    rx: "28",
    ry: "28",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$M = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M320 304l-64 64l-64-64"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$q = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M256 345.89V224"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$e = [_hoisted_2$1K, _hoisted_3$1A, _hoisted_4$M, _hoisted_5$q];
const ArchiveOutline = defineComponent({
  name: "ArchiveOutline",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1L, _hoisted_6$e);
  }
});
const _hoisted_1$1K = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1J = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M454.66 169.4A31.86 31.86 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.78 31.78 0 0 0-9.34-22.6zM320 336h-48v48a16 16 0 0 1-32 0v-48h-48a16 16 0 0 1 0-32h48v-48a16 16 0 0 1 32 0v48h48a16 16 0 0 1 0 32zm16-176H176v-16a80 80 0 0 1 160 0z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1z = [_hoisted_2$1J];
const BagAdd = defineComponent({
  name: "BagAdd",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1K, _hoisted_3$1z);
  }
});
const _hoisted_1$1J = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1I = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6zM332.49 274l-89.6 112a16 16 0 0 1-12.23 6h-.26a16 16 0 0 1-12.16-5.6l-38.4-44.88a16 16 0 1 1 24.32-20.8L230 350.91L307.51 254a16 16 0 0 1 25 20zM336 160H176v-16a80 80 0 0 1 160 0z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1y = [_hoisted_2$1I];
const BagCheck = defineComponent({
  name: "BagCheck",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1J, _hoisted_3$1y);
  }
});
const _hoisted_1$1I = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1H = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6zM176 144a80 80 0 0 1 160 0v16H176zm192 96a112 112 0 0 1-224 0v-16a16 16 0 0 1 32 0v16a80 80 0 0 0 160 0v-16a16 16 0 0 1 32 0z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1x = [_hoisted_2$1H];
const BagHandle = defineComponent({
  name: "BagHandle",
  render: function render5(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1I, _hoisted_3$1x);
  }
});
const _hoisted_1$1H = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1G = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "32",
    y: "144",
    width: "400",
    height: "224",
    rx: "45.7",
    ry: "45.7",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "square",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1w = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "85.69",
    y: "198.93",
    width: "154.31",
    height: "114.13",
    rx: "4",
    ry: "4",
    stroke: "currentColor",
    "stroke-linecap": "square",
    "stroke-miterlimit": "10",
    "stroke-width": "32",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$L = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32",
    d: "M480 218.67v74.66"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$p = [_hoisted_2$1G, _hoisted_3$1w, _hoisted_4$L];
const BatteryHalf = defineComponent({
  name: "BatteryHalf",
  render: function render6(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1H, _hoisted_5$p);
  }
});
const _hoisted_1$1G = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1F = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M388 288a76 76 0 1 0 76 76a76.24 76.24 0 0 0-76-76z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1v = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M124 288a76 76 0 1 0 76 76a76.24 76.24 0 0 0-76-76z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$K = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M256 360v-86l-64-42l80-88l40 72h56"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$o = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M320 136a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 72a32 32 0 1 0-.2 64z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$d = [_hoisted_2$1F, _hoisted_3$1v, _hoisted_4$K, _hoisted_5$o];
const BicycleOutline = defineComponent({
  name: "BicycleOutline",
  render: function render7(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1G, _hoisted_6$d);
  }
});
const _hoisted_1$1F = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1E = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1u = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M256 160v288"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$J = [_hoisted_2$1E, _hoisted_3$1u];
const BookOutline = defineComponent({
  name: "BookOutline",
  render: function render8(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1F, _hoisted_4$J);
  }
});
const _hoisted_1$1E = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1D = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M463.55 272.13H400v-48.2q0-4.32-.27-8.47c29.57-27.88 32.25-64.63 32.27-103c0-8.61-6.64-16-15.25-16.41A16 16 0 0 0 400 112c0 28-1.86 48.15-9.9 63.84c-19.22-41.15-65.78-63.91-134.1-63.91c-39.8 0-74.19 9.13-99.43 26.39c-14.9 10.19-26.2 22.91-33.7 37.72C114 160.65 112 141 112 112.46c0-8.61-6.6-16-15.2-16.44A16 16 0 0 0 80 112c0 37.63 2.61 73.73 32.44 101.63q-.43 5.06-.44 10.3v48.2H48.45c-8.61 0-16 6.62-16.43 15.23a16 16 0 0 0 16 16.77h64V320a143.32 143.32 0 0 0 10.39 53.69C96.74 396.64 80.18 422 80 463.34c0 8.74 6.62 16.3 15.36 16.65A16 16 0 0 0 112 464c0-27.66 9.1-44.71 26.17-61.32A144.37 144.37 0 0 0 220 459.42a16 16 0 0 0 20-15.49V192.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 192v251.93a16 16 0 0 0 20 15.49a144.4 144.4 0 0 0 81.82-56.74c17 16.54 26.09 33.52 26.17 60.95a16.27 16.27 0 0 0 15.1 16.37A16 16 0 0 0 432 464c0-41.68-16.6-67.23-42.39-90.31A143.32 143.32 0 0 0 400 320v-15.87h64a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1t = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M321.39 104l.32.09c13.57 3.8 25.07-10.55 18.2-22.85A95.86 95.86 0 0 0 256.21 32h-.42a95.87 95.87 0 0 0-84.19 50.13c-6.84 12.58 5.14 27 18.84 22.86c19.71-6 41.79-9.06 65.56-9.06c24.09 0 46.09 2.72 65.39 8.07z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$I = [_hoisted_2$1D, _hoisted_3$1t];
const Bug = defineComponent({
  name: "Bug",
  render: function render9(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1E, _hoisted_4$I);
  }
});
const _hoisted_1$1D = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1C = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 0 1 2.1-3.1A162 162 0 0 0 464 215c.3-92.2-77.5-167-173.7-167c-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 0 0-3.7 34.2c0 92.3 74.8 169.1 171 169.1c15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 0 1 9.3-1.7a26 26 0 0 1 10.1 2l56.7 20.1a13.52 13.52 0 0 0 3.9 1a8 8 0 0 0 8-8a12.85 12.85 0 0 0-.5-2.7z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1s = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M66.46 232a146.23 146.23 0 0 0 6.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 0 0 2.71 7.68A8.17 8.17 0 0 0 72 464a7.26 7.26 0 0 0 2.91-.6l56.21-22a15.7 15.7 0 0 1 12 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 0 0 284 432.11",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$H = [_hoisted_2$1C, _hoisted_3$1s];
const ChatbubblesOutline = defineComponent({
  name: "ChatbubblesOutline",
  render: function render10(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1D, _hoisted_4$H);
  }
});
const _hoisted_1$1C = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1B = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M352 176L217.6 336L160 272"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1r = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "64",
    y: "64",
    width: "384",
    height: "384",
    rx: "48",
    ry: "48",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$G = [_hoisted_2$1B, _hoisted_3$1r];
const CheckboxOutline = defineComponent({
  name: "CheckboxOutline",
  render: function render11(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1C, _hoisted_4$G);
  }
});
const _hoisted_1$1B = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1A = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "48",
    d: "M328 112L184 256l144 144"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1q = [_hoisted_2$1A];
const ChevronBackOutline = defineComponent({
  name: "ChevronBackOutline",
  render: function render12(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1B, _hoisted_3$1q);
  }
});
const _hoisted_1$1A = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1z = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "48",
    d: "M184 112l144 144l-144 144"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1p = [_hoisted_2$1z];
const ChevronForwardOutline = defineComponent({
  name: "ChevronForwardOutline",
  render: function render13(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1A, _hoisted_3$1p);
  }
});
const _hoisted_1$1z = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1y = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1o = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M320 320L192 192"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$F = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M192 320l128-128"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$n = [_hoisted_2$1y, _hoisted_3$1o, _hoisted_4$F];
const CloseCircleOutline = defineComponent({
  name: "CloseCircleOutline",
  render: function render14(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1z, _hoisted_5$n);
  }
});
const _hoisted_1$1y = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1x = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M368 368L144 144"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1n = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M368 144L144 368"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$E = [_hoisted_2$1x, _hoisted_3$1n];
const CloseOutline = defineComponent({
  name: "CloseOutline",
  render: function render15(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1y, _hoisted_4$E);
  }
});
const _hoisted_1$1x = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1w = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2c-60 5.7-112 35.88-112 98.4S70 336 136 336h56",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1m = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M192 400.1l64 63.9l64-63.9"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$D = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M256 224v224.03"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$m = [_hoisted_2$1w, _hoisted_3$1m, _hoisted_4$D];
const CloudDownloadOutline = defineComponent({
  name: "CloudDownloadOutline",
  render: function render16(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1x, _hoisted_5$m);
  }
});
const _hoisted_1$1w = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1v = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8c-69 0-113.44 45.79-128 91.2c-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1l = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M320 255.79l-64-64l-64 64"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$C = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M256 448.21V207.79"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$l = [_hoisted_2$1v, _hoisted_3$1l, _hoisted_4$C];
const CloudUploadOutline = defineComponent({
  name: "CloudUploadOutline",
  render: function render17(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1w, _hoisted_5$l);
  }
});
const _hoisted_1$1v = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1u = /* @__PURE__ */ createStaticVNode('<path d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9c-11.5-1.9-15.9-4-22.6-10c-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2c-34.2-30.1-80.1-45-127.8-45c-55.7 0-113.9 20.3-158.8 60.1c-83.5 73.8-83.5 194.7 0 268.5c41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4c14.4-12.7 11.99-36.6.1-47.7z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><circle cx="144" cy="208" r="32" fill="currentColor"></circle><circle cx="152" cy="311" r="32" fill="currentColor"></circle><circle cx="224" cy="144" r="32" fill="currentColor"></circle><circle cx="256" cy="367" r="48" fill="currentColor"></circle><circle cx="328" cy="144" r="32" fill="currentColor"></circle>', 6);
const _hoisted_8$3 = [_hoisted_2$1u];
const ColorPaletteOutline = defineComponent({
  name: "ColorPaletteOutline",
  render: function render18(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1v, _hoisted_8$3);
  }
});
const _hoisted_1$1u = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1t = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1k = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$B = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$k = [_hoisted_2$1t, _hoisted_3$1k, _hoisted_4$B];
const CreateOutline = defineComponent({
  name: "CreateOutline",
  render: function render19(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1u, _hoisted_5$k);
  }
});
const _hoisted_1$1t = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1s = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M448 341.37V170.61A32 32 0 0 0 432.11 143l-152-88.46a47.94 47.94 0 0 0-48.24 0L79.89 143A32 32 0 0 0 64 170.61v170.76A32 32 0 0 0 79.89 369l152 88.46a48 48 0 0 0 48.24 0l152-88.46A32 32 0 0 0 448 341.37z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1j = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M69 153.99l187 110l187-110"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$A = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M256 463.99v-200"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$j = [_hoisted_2$1s, _hoisted_3$1j, _hoisted_4$A];
const CubeOutline = defineComponent({
  name: "CubeOutline",
  render: function render20(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1t, _hoisted_5$j);
  }
});
const _hoisted_1$1s = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1r = /* @__PURE__ */ createStaticVNode('<circle cx="104" cy="152" r="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="104" cy="360" r="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path d="M157 175l-11 15l37 15s3.46-6.42 7-10z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32"></path><path d="M154.17 334.43L460 162c-2.5-6.7-28-12-64-4c-29.12 6.47-121.16 29.05-159.16 56.05C205.85 236.06 227 272 192 298c-25.61 19-44.43 22.82-44.43 22.82z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></path><path d="M344.47 278.24L295 306.67c14.23 6.74 65.54 33.27 117 36.33c14.92.89 30 .39 39-6z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></path><circle cx="256" cy="240" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></circle>', 6);
const _hoisted_8$2 = [_hoisted_2$1r];
const CutOutline = defineComponent({
  name: "CutOutline",
  render: function render21(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1s, _hoisted_8$2);
  }
});
const _hoisted_1$1r = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1q = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "32",
    y: "64",
    width: "448",
    height: "320",
    rx: "32",
    ry: "32",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1i = /* @__PURE__ */ createElementVNode(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M304 448l-8-64h-80l-8 64h96z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$z = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M368 448H144"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$i = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M32 304v48a32.09 32.09 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32v-48zm224 64a16 16 0 1 1 16-16a16 16 0 0 1-16 16z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$c = [_hoisted_2$1q, _hoisted_3$1i, _hoisted_4$z, _hoisted_5$i];
const DesktopOutline = defineComponent({
  name: "DesktopOutline",
  render: function render22(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1r, _hoisted_6$c);
  }
});
const _hoisted_1$1q = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1p = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M256 176a80 80 0 1 0 80 80a80.09 80.09 0 0 0-80-80zm0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1h = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61zM256 368a112 112 0 1 1 112-112a112.12 112.12 0 0 1-112 112z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$y = [_hoisted_2$1p, _hoisted_3$1h];
const Disc = defineComponent({
  name: "Disc",
  render: function render23(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1q, _hoisted_4$y);
  }
});
const _hoisted_1$1p = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1o = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M368 128h.09",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1g = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M479.55 96h-91.06l8.92-35.66l38.32-13.05c8.15-2.77 13-11.43 10.65-19.71a16 16 0 0 0-20.54-10.73l-47 16a16 16 0 0 0-10.36 11.27L355.51 96H224.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 224 128h2.75l1 8.66A8.3 8.3 0 0 0 236 144c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 0 1 371 218.07a123.4 123.4 0 0 1 10.12 29.51a7.83 7.83 0 0 0 3.29 4.88a72 72 0 0 1 26.38 86.43a7.92 7.92 0 0 0-.15 5.53A96 96 0 0 1 416 376c0 22.34-7.6 43.63-21.4 59.95a80.12 80.12 0 0 1-28.78 21.67a8 8 0 0 0-4.21 4.37a108.19 108.19 0 0 1-17.37 29.86a2.5 2.5 0 0 0 1.9 4.11h49.21a48.22 48.22 0 0 0 47.85-44.14L477.4 128h2.6a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$x = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M108.69 320a23.87 23.87 0 0 1 17 7l15.51 15.51a4 4 0 0 0 5.66 0L162.34 327a23.87 23.87 0 0 1 17-7h196.58a8 8 0 0 0 8.08-7.92V312a40.07 40.07 0 0 0-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0 0 16 312a8 8 0 0 0 8 8z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$h = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M185.94 352a8 8 0 0 0-5.66 2.34l-22.14 22.15a20 20 0 0 1-28.28 0l-22.14-22.15a8 8 0 0 0-5.66-2.34h-69.4a15.93 15.93 0 0 0-15.76 13.17A65.22 65.22 0 0 0 16 376c0 30.59 21.13 55.51 47.26 56c2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55c8.85-10.69 14.73-24.35 17.16-39.47c26.13-.47 47.26-25.39 47.26-56a65.22 65.22 0 0 0-.9-10.83A15.93 15.93 0 0 0 367.34 352z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$b = [_hoisted_2$1o, _hoisted_3$1g, _hoisted_4$x, _hoisted_5$h];
const FastFood = defineComponent({
  name: "FastFood",
  render: function render24(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1p, _hoisted_6$b);
  }
});
const _hoisted_1$1o = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1n = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48V272l-32-152c-5-27-23-40-48-40z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1f = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M48 272h144"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$w = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M320 272h144"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$g = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M192 272a64 64 0 0 0 128 0",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$a = [_hoisted_2$1n, _hoisted_3$1f, _hoisted_4$w, _hoisted_5$g];
const FileTrayOutline = defineComponent({
  name: "FileTrayOutline",
  render: function render25(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1o, _hoisted_6$a);
  }
});
const _hoisted_1$1n = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1m = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 0 0 2.33 2.77h0a2.36 2.36 0 0 0 1.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 0 0-2.44-2.75h0a2.42 2.42 0 0 0-1.95 1z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1e = [_hoisted_2$1m];
const FlashOutline = defineComponent({
  name: "FlashOutline",
  render: function render26(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1n, _hoisted_3$1e);
  }
});
const _hoisted_1$1m = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1l = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "256",
    cy: "256",
    r: "43",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1d = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M475.93 303.91a67.49 67.49 0 0 0-47.62-115.6c-2.88 0-6.2.14-9.93.43c2.75-2.36 5.23-4.62 7.33-6.71A67.83 67.83 0 0 0 378 66.33h-.25a67.27 67.27 0 0 0-47.82 20c-2.11 2.11-4.37 4.59-6.72 7.33c.29-3.75.44-7.07.44-9.93a67.69 67.69 0 1 0-135.38 0c0 2.87.15 6.19.44 9.93c-2.36-2.74-4.62-5.22-6.72-7.33a67.27 67.27 0 0 0-47.82-20H134A67.9 67.9 0 0 0 86.29 182c2.1 2.09 4.58 4.35 7.34 6.72c-3.74-.29-7.06-.44-9.94-.44a67.69 67.69 0 0 0 0 135.38c2.86 0 6.18-.15 9.93-.44c-2.74 2.35-5.22 4.61-7.33 6.72a67.55 67.55 0 0 0 47.82 115.42h.25A67.32 67.32 0 0 0 182 425.71c2.09-2.1 4.35-4.58 6.71-7.33c-.28 3.73-.43 7.05-.43 9.93a67.69 67.69 0 0 0 135.38 0c0-2.87-.15-6.19-.44-9.94c2.36 2.75 4.62 5.24 6.72 7.34a67.32 67.32 0 0 0 47.67 19.68h.25A67.5 67.5 0 0 0 425.71 330c-2.11-2.11-4.59-4.37-7.33-6.72c3.75.29 7.07.44 9.93.44a67.27 67.27 0 0 0 47.62-19.81zM256 341a85 85 0 1 1 85-85a85.1 85.1 0 0 1-85 85z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$v = [_hoisted_2$1l, _hoisted_3$1d];
const FlowerSharp = defineComponent({
  name: "FlowerSharp",
  render: function render27(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1m, _hoisted_4$v);
  }
});
const _hoisted_1$1l = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1k = /* @__PURE__ */ createStaticVNode('<circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 175.15l-76.09 63.83L200 320h112l20.09-81.02L256 175.15z"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M332.09 238.98l52.87-22.4l25.78-73.26"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M447 269.97l-62.04-53.39"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M179.91 238.98l-52.87-22.4l-25.78-73.26"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M65 269.97l62.04-53.39"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 175.15v-57.57l64-42.64"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 74.93l64 42.65"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M312 320l28 48l-28 71"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M410.74 368H342"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M200 320l-28 48l28.37 71.5"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M101.63 368H172"></path>', 12);
const _hoisted_14$1 = [_hoisted_2$1k];
const FootballOutline = defineComponent({
  name: "FootballOutline",
  render: function render28(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1l, _hoisted_14$1);
  }
});
const _hoisted_1$1k = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1j = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M200 246.84c8.81 58.62-7.33 90.67-52.91 97.41c-50.65 7.49-71.52-26.44-80.33-85.06c-11.85-78.88 16-127.94 55.71-131.1c36.14-2.87 68.71 60.14 77.53 118.75z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1c = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M223.65 409.53c3.13 33.28-14.86 64.34-42 69.66c-27.4 5.36-58.71-16.37-65.09-49.19s17.75-34.56 47.32-40.21s55.99-20.4 59.77 19.74z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$u = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M312 150.83c-8.81 58.62 7.33 90.67 52.9 97.41c50.66 7.49 71.52-26.44 80.33-85.06c11.86-78.89-16-128.22-55.7-131.1c-36.4-2.64-68.71 60.13-77.53 118.75z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$f = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M288.35 313.53c-3.13 33.27 14.86 64.34 42 69.66c27.4 5.36 58.71-16.37 65.09-49.19s-17.75-34.56-47.32-40.22s-55.99-20.4-59.77 19.75z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$9 = [_hoisted_2$1j, _hoisted_3$1c, _hoisted_4$u, _hoisted_5$f];
const FootstepsOutline = defineComponent({
  name: "FootstepsOutline",
  render: function render29(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1k, _hoisted_6$9);
  }
});
const _hoisted_1$1j = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1i = /* @__PURE__ */ createStaticVNode('<path d="M256 104v56h56a56 56 0 1 0-56-56z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></path><path d="M256 104v56h-56a56 56 0 1 1 56-56z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></path><rect x="64" y="160" width="384" height="112" rx="32" ry="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></rect><path d="M416 272v144a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V272" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 160v304"></path>', 5);
const _hoisted_7$2 = [_hoisted_2$1i];
const GiftOutline = defineComponent({
  name: "GiftOutline",
  render: function render30(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1j, _hoisted_7$2);
  }
});
const _hoisted_1$1i = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1h = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "184",
    cy: "232",
    r: "24",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1b = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 0 1 7.82-10.17h175.69a8 8 0 0 1 7.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$t = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "328",
    cy: "232",
    r: "24",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$e = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "256",
    cy: "256",
    r: "208",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$8 = [_hoisted_2$1h, _hoisted_3$1b, _hoisted_4$t, _hoisted_5$e];
const HappyOutline = defineComponent({
  name: "HappyOutline",
  render: function render31(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1i, _hoisted_6$8);
  }
});
const _hoisted_1$1h = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1g = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1a = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M333.2 297.69c18.28-23.39 27.06-47.43 26.79-73.37c-.31-31.06-25.22-56.33-55.53-56.33c-20.4 0-35 10.64-44.11 20.42a5.93 5.93 0 0 1-8.7 0c-9.11-9.78-23.71-20.42-44.11-20.42L206 168a4 4 0 0 0-2.75 6.84l124 123.21a3.92 3.92 0 0 0 5.95-.36z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$s = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M158.84 221a4 4 0 0 0-6.82 2.72v.64c-.28 27.1 9.31 52.13 29.3 76.5c9.38 11.44 26.4 29.73 65.7 56.41a15.93 15.93 0 0 0 18 0c5.15-3.49 9.9-6.84 14.31-10a4 4 0 0 0 .46-6.07z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$d = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M336 368a15.92 15.92 0 0 1-11.31-4.69l-176-176a16 16 0 0 1 22.62-22.62l176 176A16 16 0 0 1 336 368z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$7 = [_hoisted_2$1g, _hoisted_3$1a, _hoisted_4$s, _hoisted_5$d];
const HeartDislikeCircleOutline = defineComponent({
  name: "HeartDislikeCircleOutline",
  render: function render32(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1h, _hoisted_6$7);
  }
});
const _hoisted_1$1g = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1f = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$19 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$r = [_hoisted_2$1f, _hoisted_3$19];
const Home = defineComponent({
  name: "Home",
  render: function render33(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1g, _hoisted_4$r);
  }
});
const _hoisted_1$1f = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1e = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$18 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$q = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M400 179V64h-48v69"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$c = [_hoisted_2$1e, _hoisted_3$18, _hoisted_4$q];
const HomeOutline = defineComponent({
  name: "HomeOutline",
  render: function render34(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1f, _hoisted_5$c);
  }
});
const _hoisted_1$1e = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1d = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M145.61 464h220.78c19.8 0 35.55-16.29 33.42-35.06C386.06 308 304 310 304 256s83.11-51 95.8-172.94c2-18.78-13.61-35.06-33.41-35.06H145.61c-19.8 0-35.37 16.28-33.41 35.06C124.89 205 208 201 208 256s-82.06 52-95.8 172.94c-2.14 18.77 13.61 35.06 33.41 35.06z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$17 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2c-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.23 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87c9.95 12.04 6.47 29.13-9.1 29.13z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$p = [_hoisted_2$1d, _hoisted_3$17];
const HourglassOutline = defineComponent({
  name: "HourglassOutline",
  render: function render35(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1e, _hoisted_4$p);
  }
});
const _hoisted_1$1d = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1c = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "48",
    y: "80",
    width: "416",
    height: "352",
    rx: "48",
    ry: "48",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$16 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "336",
    cy: "176",
    r: "32",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$o = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M304 335.79l-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$b = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M224 432l123.34-123.34a32 32 0 0 1 43.11-2L464 368",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$6 = [_hoisted_2$1c, _hoisted_3$16, _hoisted_4$o, _hoisted_5$b];
const ImageOutline = defineComponent({
  name: "ImageOutline",
  render: function render36(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1d, _hoisted_6$6);
  }
});
const _hoisted_1$1c = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1b = /* @__PURE__ */ createStaticVNode('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 112h288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 64v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 448l96-224l96 224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M301.5 384h133"></path><path d="M281.3 112S257 206 199 277S80 384 80 384" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M256 336s-35-27-72-75s-56-85-56-85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>', 6);
const _hoisted_8$1 = [_hoisted_2$1b];
const LanguageOutline = defineComponent({
  name: "LanguageOutline",
  render: function render37(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1c, _hoisted_8$1);
  }
});
const _hoisted_1$1b = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1a = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "48",
    y: "96",
    width: "416",
    height: "304",
    rx: "32.14",
    ry: "32.14",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$15 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32",
    d: "M16 416h480",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$n = [_hoisted_2$1a, _hoisted_3$15];
const LaptopOutline = defineComponent({
  name: "LaptopOutline",
  render: function render38(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1b, _hoisted_4$n);
  }
});
const _hoisted_1$1a = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$19 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M434.8 137.65l-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$14 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$m = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M160 204.48l-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$a = [_hoisted_2$19, _hoisted_3$14, _hoisted_4$m];
const LayersOutline = defineComponent({
  name: "LayersOutline",
  render: function render39(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1a, _hoisted_5$a);
  }
});
const _hoisted_1$19 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$18 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7c77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$13 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M173 253c86 81 175 129 292 147",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$l = [_hoisted_2$18, _hoisted_3$13];
const LeafOutline = defineComponent({
  name: "LeafOutline",
  render: function render40(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$19, _hoisted_4$l);
  }
});
const _hoisted_1$18 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$17 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M102.41 32C62.38 32 32 64.12 32 103.78v304.45C32 447.86 64.38 480 104.41 480h303.2c40 0 72.39-32.14 72.39-71.77v-3.11c-1.35-.56-115.47-48.57-174.5-76.7c-39.82 48.57-91.18 78-144.5 78c-90.18 0-120.8-78.22-78.1-129.72c9.31-11.22 25.15-21.94 49.73-28c38.45-9.36 99.64 5.85 157 24.61a309.41 309.41 0 0 0 25.46-61.67H138.34V194h91.13v-31.83H119.09v-17.75h110.38V99s0-7.65 7.82-7.65h44.55v53H391v17.75H281.84V194h89.08a359.41 359.41 0 0 1-37.72 94.43c27 9.69 49.31 18.88 67.39 24.89c60.32 20 77.23 22.45 79.41 22.7V103.78C480 64.12 447.6 32 407.61 32h-305.2zM152 274.73q-5.81.06-11.67.63c-11.3 1.13-32.5 6.07-44.09 16.23c-34.74 30-13.94 84.93 56.37 84.93c40.87 0 81.71-25.9 113.79-67.37c-41.36-20-77-34.85-114.4-34.42z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$12 = [_hoisted_2$17];
const LogoAlipay = defineComponent({
  name: "LogoAlipay",
  render: function render41(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$18, _hoisted_3$12);
  }
});
const _hoisted_1$17 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$16 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M188.8 255.93a67.2 67.2 0 1 0 67.2-67.18a67.38 67.38 0 0 0-67.2 67.18z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$11 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M476.75 217.79v.05a206.63 206.63 0 0 0-7-28.84h-.11a202.16 202.16 0 0 1 7.07 29a203.5 203.5 0 0 0-7.07-29h-155.4c19.05 17 31.36 40.17 31.36 67.05a86.55 86.55 0 0 1-12.31 44.73L231 478.45a2.44 2.44 0 0 1 0 .27v.28v-.26a224 224 0 0 0 25 1.26c6.84 0 13.61-.39 20.3-1a222.91 222.91 0 0 0 29.78-4.74C405.68 451.52 480 362.4 480 255.94a225.25 225.25 0 0 0-3.25-38.15z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$k = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M256 345.5c-33.6 0-61.6-17.91-77.29-44.79L76 123.05l-.14-.24A224 224 0 0 0 207.4 474.55v-.05l77.69-134.6a84.13 84.13 0 0 1-29.09 5.6z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$9 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M91.29 104.57l77.35 133.25A89.19 89.19 0 0 1 256 166h205.17a246.51 246.51 0 0 0-25.78-43.94l.12.08A245.26 245.26 0 0 1 461.17 166h.17a245.91 245.91 0 0 0-25.66-44a2.63 2.63 0 0 1-.35-.26a223.93 223.93 0 0 0-344.19-17.4l.14.24z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$5 = [_hoisted_2$16, _hoisted_3$11, _hoisted_4$k, _hoisted_5$9];
const LogoChrome = defineComponent({
  name: "LogoChrome",
  render: function render42(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$17, _hoisted_6$5);
  }
});
const _hoisted_1$16 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$15 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M256 153.9A102.1 102.1 0 1 0 358.1 256A102.23 102.23 0 0 0 256 153.9z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$10 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "402.59",
    cy: "116.45",
    r: "46.52",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$j = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M459.86 163.2l-1.95-4.28l-3.11 3.52a70 70 0 0 1-28.06 19.32l-3 1.1l1.22 2.93A181.43 181.43 0 0 1 439 256c0 100.92-82.1 183-183 183S73 356.92 73 256S155.08 73 256 73a180.94 180.94 0 0 1 78.43 17.7l2.87 1.3l1.25-2.92A70.19 70.19 0 0 1 359.21 62l3.67-2.93l-4.17-2.07A221.61 221.61 0 0 0 256 32C132.49 32 32 132.49 32 256s100.49 224 224 224s224-100.49 224-224a222.19 222.19 0 0 0-20.14-92.8z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$8 = [_hoisted_2$15, _hoisted_3$10, _hoisted_4$j];
const LogoIonic = defineComponent({
  name: "LogoIonic",
  render: function render43(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$16, _hoisted_5$8);
  }
});
const _hoisted_1$15 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$14 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M256.05 32c-123.7 0-224 100.3-224 224c0 91.7 55.2 170.5 134.1 205.2c-.6-15.6-.1-34.4 3.9-51.4c4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58c20.4 0 30.2 15.3 30.2 33.6c0 20.5-13.1 51.1-19.8 79.5c-5.6 23.8 11.9 43.1 35.4 43.1c42.4 0 71-54.5 71-119.1c0-49.1-33.1-85.8-93.2-85.8c-67.9 0-110.3 50.7-110.3 107.3c0 19.5 5.8 33.3 14.8 43.9c4.1 4.9 4.7 6.9 3.2 12.5c-1.1 4.1-3.5 14-4.6 18c-1.5 5.7-6.1 7.7-11.2 5.6c-31.3-12.8-45.9-47-45.9-85.6c0-63.6 53.7-139.9 160.1-139.9c85.5 0 141.8 61.9 141.8 128.3c0 87.9-48.9 153.5-120.9 153.5c-24.2 0-46.9-13.1-54.7-27.9c0 0-13 51.6-15.8 61.6c-4.7 17.3-14 34.5-22.5 48a225.13 225.13 0 0 0 63.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$$ = [_hoisted_2$14];
const LogoPinterest = defineComponent({
  name: "LogoPinterest",
  render: function render44(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$15, _hoisted_3$$);
  }
});
const _hoisted_1$14 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$13 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M496 128.05A64 64 0 0 0 389.62 80a64.52 64.52 0 0 0-12.71 15.3v.06c-.54.9-1.05 1.82-1.55 2.74l-.24.49c-.42.79-.81 1.59-1.19 2.4c-.12.25-.23.5-.34.75c-.33.73-.65 1.47-.95 2.22c-.13.31-.25.62-.37.93c-.27.7-.53 1.4-.78 2.11l-.36 1.06c-.22.68-.43 1.37-.63 2.06c-.12.39-.23.77-.33 1.16c-.19.67-.35 1.35-.51 2c-.1.41-.2.82-.29 1.23c-.14.68-.27 1.37-.39 2c-.08.42-.16.84-.23 1.26c-.11.7-.2 1.41-.29 2.12c-.05.41-.11.82-.16 1.24c-.08.77-.13 1.54-.19 2.32c0 .36-.06.72-.08 1.08c-.06 1.14-.1 2.28-.1 3.44c0 1 0 2 .08 2.94v.64q.08 1.41.21 2.82l.06.48c.09.85.19 1.69.32 2.52c0 .17 0 .35.07.52c.14.91.31 1.81.49 2.71c0 .22.09.43.13.65c.18.86.38 1.72.6 2.57v.19c.23.89.48 1.76.75 2.63l.21.68c.27.85.55 1.68.85 2.51c.06.18.13.36.2.54c.27.71.55 1.42.84 2.12c.08.21.16.41.25.61c.34.79.69 1.58 1.06 2.36l.33.67c.35.7.7 1.4 1.07 2.09a64.34 64.34 0 0 0 22.14 23.81a62.22 62.22 0 0 0 7.62 4.15l.39.18q2.66 1.2 5.43 2.16l.95.32l1.5.47c.45.14.9.26 1.36.39l1.92.5l1.73.4l1.15.23l1.83.33l.94.15c.9.13 1.81.25 2.72.35l.77.07c.73.06 1.47.12 2.21.16l.86.05c1 0 1.94.08 2.92.08c1.16 0 2.3 0 3.44-.1l1.08-.08c.78-.06 1.55-.11 2.32-.19l1.25-.16c.7-.09 1.41-.18 2.11-.29l1.26-.23c.68-.12 1.37-.25 2-.39l1.23-.29c.68-.16 1.36-.32 2-.51c.39-.1.77-.21 1.16-.33c.69-.2 1.38-.41 2.06-.63l1.06-.36c.71-.25 1.41-.51 2.11-.78l.93-.37c.75-.3 1.49-.62 2.22-.95l.75-.34c.81-.38 1.61-.77 2.4-1.19l.49-.24c.92-.5 1.84-1 2.74-1.55h.06A64.52 64.52 0 0 0 480 170.38a63.81 63.81 0 0 0 16-42.33z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$_ = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M371.38 202.53l-105.56 82.1a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l94.22-73.28A95.86 95.86 0 0 1 348.81 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V211.19a95.85 95.85 0 0 1-108.62-8.66z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$i = [_hoisted_2$13, _hoisted_3$_];
const MailUnread = defineComponent({
  name: "MailUnread",
  render: function render45(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$14, _hoisted_4$i);
  }
});
const _hoisted_1$13 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$12 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm0 80a48.14 48.14 0 0 1 48 48v64a47.84 47.84 0 0 1-.63 7.71a2 2 0 0 1-3.46 1l-84.42-92.86a4 4 0 0 1-.47-4.77A48.08 48.08 0 0 1 256 128zm32 256h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 224 352h16v-17.74a103.71 103.71 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224a15.91 15.91 0 0 1 16.39-16A16.26 16.26 0 0 1 192 224.4v23.82c0 25.66 28 55.48 64 55.48c1.67 0 3.37-.09 5.06-.24a3.94 3.94 0 0 1 3.29 1.29l21.07 23.19a2 2 0 0 1-.89 3.26a100.33 100.33 0 0 1-12.53 3.06V352h15.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 288 384zm-77.89-138.91l36.46 40.11a1 1 0 0 1-.95 1.66a48.26 48.26 0 0 1-37.25-41a1 1 0 0 1 1.74-.77zm152.65 119.75a16 16 0 0 1-22.6-1.08l-192-210a16 16 0 0 1 23.68-21.52l192 210a16 16 0 0 1-1.08 22.6zM352 248.22a77.12 77.12 0 0 1-11.93 40.87a2 2 0 0 1-3.19.3l-19.19-21.1a4 4 0 0 1-.76-4.16a43.35 43.35 0 0 0 3.07-15.91v-23.8a16.3 16.3 0 0 1 13.64-16.24c9.88-1.48 18.36 6.51 18.36 16.12z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$Z = [_hoisted_2$12];
const MicOffCircle = defineComponent({
  name: "MicOffCircle",
  render: function render46(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$13, _hoisted_3$Z);
  }
});
const _hoisted_1$12 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$11 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216c88.68 0 166.73-51.57 200-128c-26.39 11.49-57.38 16-88 16c-119.29 0-216-96.71-216-216z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$Y = [_hoisted_2$11];
const MoonOutline = defineComponent({
  name: "MoonOutline",
  render: function render47(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$12, _hoisted_3$Y);
  }
});
const _hoisted_1$11 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$10 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zM144 308l28-36v-32.3a131.83 131.83 0 0 1 2.34-25.42L285.92 336H144zm112.18 76C233.6 384 216 373.75 216 352h80c-.3 21.37-17.45 32-39.82 32zm93.48-3.74l-211-227l23.68-21.52l211 227zM368 330.85l-.32-.38l-155.5-169.63a73.4 73.4 0 0 1 15.82-5.41l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$X = [_hoisted_2$10];
const NotificationsOffCircleSharp = defineComponent({
  name: "NotificationsOffCircleSharp",
  render: function render48(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$11, _hoisted_3$X);
  }
});
const _hoisted_1$10 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$$ = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M427.68 351.43C402 320 383.87 304 383.87 217.35C383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53c-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43C73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$W = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M320 384v16a64 64 0 0 1-128 0v-16",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$h = [_hoisted_2$$, _hoisted_3$W];
const NotificationsOutline = defineComponent({
  name: "NotificationsOutline",
  render: function render49(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$10, _hoisted_4$h);
  }
});
const _hoisted_1$$ = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$_ = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55c-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$V = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "256",
    cy: "256",
    r: "160",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$g = [_hoisted_2$_, _hoisted_3$V];
const PlanetOutline = defineComponent({
  name: "PlanetOutline",
  render: function render50(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$$, _hoisted_4$g);
  }
});
const _hoisted_1$_ = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$Z = /* @__PURE__ */ createStaticVNode('<path d="M336 336h80v80h-80z" fill="currentColor"></path><path d="M272 272h64v64h-64z" fill="currentColor"></path><path d="M416 416h64v64h-64z" fill="currentColor"></path><path d="M432 272h48v48h-48z" fill="currentColor"></path><path d="M272 432h48v48h-48z" fill="currentColor"></path><path d="M336 96h80v80h-80z" fill="currentColor"></path><path d="M480 240H272V32h208zm-164-44h120V76H316z" fill="currentColor"></path><path d="M96 96h80v80H96z" fill="currentColor"></path><path d="M240 240H32V32h208zM76 196h120V76H76z" fill="currentColor"></path><path d="M96 336h80v80H96z" fill="currentColor"></path><path d="M240 480H32V272h208zM76 436h120V316H76z" fill="currentColor"></path>', 11);
const _hoisted_13$1 = [_hoisted_2$Z];
const QrCodeSharp = defineComponent({
  name: "QrCodeSharp",
  render: function render51(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$_, _hoisted_13$1);
  }
});
const _hoisted_1$Z = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$Y = /* @__PURE__ */ createStaticVNode('<path d="M114.61 162.85A16.07 16.07 0 0 0 128 149.6C140.09 76.17 193.63 32 256 32c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0 0 12.2 9.87c50 8.15 91.6 41.54 91.6 99.59c0 59.4-48.6 100.8-108 100.8H130c-49.5 0-90-24.7-90-79.2c0-48.47 38.67-72.22 74.61-77.95z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 384l-32 48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 384l-64 96"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 384l-32 48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 384l-64 96"></path>', 5);
const _hoisted_7$1 = [_hoisted_2$Y];
const RainyOutline = defineComponent({
  name: "RainyOutline",
  render: function render52(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$Z, _hoisted_7$1);
  }
});
const _hoisted_1$Y = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$X = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "28"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$U = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "28",
    d: "M256 149l40 40l-40 40"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$f = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$7 = [_hoisted_2$X, _hoisted_3$U, _hoisted_4$f];
const RefreshCircleOutline = defineComponent({
  name: "RefreshCircleOutline",
  render: function render53(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$Y, _hoisted_5$7);
  }
});
const _hoisted_1$X = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$W = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "256",
    cy: "160",
    r: "128",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$T = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M143.65 227.82L48 400l86.86-.42a16 16 0 0 1 13.82 7.8L192 480l88.33-194.32",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$e = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M366.54 224L464 400l-86.86-.42a16 16 0 0 0-13.82 7.8L320 480l-64-140.8",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$6 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "256",
    cy: "160",
    r: "64",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$4 = [_hoisted_2$W, _hoisted_3$T, _hoisted_4$e, _hoisted_5$6];
const RibbonOutline = defineComponent({
  name: "RibbonOutline",
  render: function render54(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$X, _hoisted_6$4);
  }
});
const _hoisted_1$W = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$V = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M416 128c-18.9 4.25-36.8 8.94-53.7 13.95c-40.5 12-75.5 27.15-105.4 41.65c-19.3 9.37-26.2 13.51-51.5 28.23c-58.4 33.69-93.4 77.4-93.4 142.81C112 428.55 167.6 480 256 480s144-55.81 144-129.72S339 225.24 416 128z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$S = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M264 180.19c-19.69-27-38.2-38.69-52.7-46.59C162.6 107.1 96 96 96 96c41.5 43.7 37.2 90.1 32 128c0 0-3.87 32.88 1.91 58.41",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$d = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M372 139.15C356.55 102.6 336 64 336 64s-63.32 0-135.69 64",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$5 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M253.48 87.57C221.25 45.81 176 32 176 32c-15.3 20.8-28.79 51.58-34.87 74.17",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$3 = [_hoisted_2$V, _hoisted_3$S, _hoisted_4$d, _hoisted_5$5];
const RoseOutline = defineComponent({
  name: "RoseOutline",
  render: function render55(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$W, _hoisted_6$3);
  }
});
const _hoisted_1$V = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$U = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M336 448h56a56 56 0 0 0 56-56v-56",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$R = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M448 176v-56a56 56 0 0 0-56-56h-56",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$c = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M176 448h-56a56 56 0 0 1-56-56v-56",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$4 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M64 176v-56a56 56 0 0 1 56-56h56",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$2 = [_hoisted_2$U, _hoisted_3$R, _hoisted_4$c, _hoisted_5$4];
const ScanOutline = defineComponent({
  name: "ScanOutline",
  render: function render56(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$V, _hoisted_6$2);
  }
});
const _hoisted_1$U = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$T = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$Q = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32",
    d: "M338.29 338.29L448 448"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$b = [_hoisted_2$T, _hoisted_3$Q];
const SearchOutline = defineComponent({
  name: "SearchOutline",
  render: function render57(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$U, _hoisted_4$b);
  }
});
const _hoisted_1$T = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$S = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$P = [_hoisted_2$S];
const SettingsOutline = defineComponent({
  name: "SettingsOutline",
  render: function render58(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$T, _hoisted_3$P);
  }
});
const _hoisted_1$S = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$R = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M447.88 313.27l19.25-10.64l-21.28-38.51l-19.25 10.64a133.42 133.42 0 0 0-38.54 32.1L300 256l88.07-50.86a133.42 133.42 0 0 0 38.54 32.1l19.25 10.64l21.28-38.51l-19.25-10.64a89.27 89.27 0 0 1-20.93-16L480 152.05L458 114l-53 30.58a89.07 89.07 0 0 1-3.42-26.15l.41-22l-44-.82l-.41 22a133.62 133.62 0 0 0 8.49 49.39L278 217.89V116.18a133.52 133.52 0 0 0 47.06-17.33L343.9 87.5l-22.71-37.69l-18.84 11.35A89.5 89.5 0 0 1 278 71.27V16h-44v55.27a89.5 89.5 0 0 1-24.35-10.11l-18.84-11.35L168.1 87.5l18.84 11.35A133.52 133.52 0 0 0 234 116.18v101.71L145.93 167a133.62 133.62 0 0 0 8.53-49.43l-.41-22l-44 .82l.41 22a89.07 89.07 0 0 1-3.42 26.15L54 114l-22 38.1l53.05 30.64a89.27 89.27 0 0 1-20.93 16l-19.25 10.63l21.28 38.51l19.25-10.64a133.42 133.42 0 0 0 38.54-32.1L212 256l-88.07 50.86a133.42 133.42 0 0 0-38.54-32.1l-19.24-10.64l-21.28 38.51l19.25 10.64a89.27 89.27 0 0 1 20.93 16L32 360l22 38.1l53.05-30.63a89.07 89.07 0 0 1 3.42 26.15l-.41 22l44 .82l.41-22a133.62 133.62 0 0 0-8.54-49.44L234 294.11v101.71a133.52 133.52 0 0 0-47.06 17.33L168.1 424.5l22.71 37.69l18.84-11.35A89.5 89.5 0 0 1 234 440.73V496h44v-55.27a89.5 89.5 0 0 1 24.35 10.11l18.84 11.35l22.71-37.69l-18.84-11.35A133.52 133.52 0 0 0 278 395.82V294.11L366.07 345a133.62 133.62 0 0 0-8.53 49.43l.41 22l44-.82l-.41-22a89.07 89.07 0 0 1 3.46-26.19l53 30.63L480 360l-53-30.69a89.27 89.27 0 0 1 20.88-16.04z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$O = [_hoisted_2$R];
const SnowSharp = defineComponent({
  name: "SnowSharp",
  render: function render59(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$S, _hoisted_3$O);
  }
});
const _hoisted_1$R = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$Q = /* @__PURE__ */ createStaticVNode('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 416v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 108.92l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 369.14l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M464 256h-48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M96 256H48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 403.08l-33.94-33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 142.86l-33.94-33.94"></path><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></circle>', 9);
const _hoisted_11$1 = [_hoisted_2$Q];
const SunnyOutline = defineComponent({
  name: "SunnyOutline",
  render: function render60(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$R, _hoisted_11$1);
  }
});
const _hoisted_1$Q = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$P = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$N = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M351.82 271.87v-16A96.15 96.15 0 0 0 184.09 192m-24.2 48.17v16A96.22 96.22 0 0 0 327.81 320",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$a = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M135.87 256l23.59-23.6l24.67 23.6"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$3 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M376.13 256l-23.59 23.6l-24.67-23.6"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$1 = [_hoisted_2$P, _hoisted_3$N, _hoisted_4$a, _hoisted_5$3];
const SyncCircleOutline = defineComponent({
  name: "SyncCircleOutline",
  render: function render61(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$Q, _hoisted_6$1);
  }
});
const _hoisted_1$P = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$O = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "32",
    y: "96",
    width: "448",
    height: "272",
    rx: "32.14",
    ry: "32.14",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$M = /* @__PURE__ */ createElementVNode(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32",
    d: "M128 416h256",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$9 = [_hoisted_2$O, _hoisted_3$M];
const TvOutline = defineComponent({
  name: "TvOutline",
  render: function render62(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$P, _hoisted_4$9);
  }
});
const _hoisted_1$O = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$N = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "48",
    y: "144",
    width: "416",
    height: "288",
    rx: "48",
    ry: "48",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$L = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$8 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$2 = [_hoisted_2$N, _hoisted_3$L, _hoisted_4$8];
const WalletOutline = defineComponent({
  name: "WalletOutline",
  render: function render63(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$O, _hoisted_5$2);
  }
});
const _hoisted_1$N = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$M = /* @__PURE__ */ createElementVNode(
  "defs",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$K = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M952 474H829.8C812.5 327.6 696.4 211.5 550 194.2V72c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v122.2C327.6 211.5 211.5 327.6 194.2 474H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h122.2C211.5 696.4 327.6 812.5 474 829.8V952c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V829.8C696.4 812.5 812.5 696.4 829.8 550H952c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM512 756c-134.8 0-244-109.2-244-244s109.2-244 244-244s244 109.2 244 244s-109.2 244-244 244z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$7 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M512 392c-32.1 0-62.1 12.4-84.8 35.2c-22.7 22.7-35.2 52.7-35.2 84.8s12.5 62.1 35.2 84.8C449.9 619.4 480 632 512 632s62.1-12.5 84.8-35.2C619.4 574.1 632 544 632 512s-12.5-62.1-35.2-84.8C574.1 404.4 544.1 392 512 392z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$1 = [_hoisted_2$M, _hoisted_3$K, _hoisted_4$7];
const AimOutlined = defineComponent({
  name: "AimOutlined",
  render: function render64(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$N, _hoisted_5$1);
  }
});
const _hoisted_1$M = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$L = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M512 244c176.18 0 319 142.82 319 319v233a32 32 0 0 1-32 32H225a32 32 0 0 1-32-32V563c0-176.18 142.82-319 319-319zM484 68h56a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8zM177.25 191.66a8 8 0 0 1 11.32 0l67.88 67.88a8 8 0 0 1 0 11.31l-39.6 39.6a8 8 0 0 1-11.31 0l-67.88-67.88a8 8 0 0 1 0-11.31l39.6-39.6zm669.6 0l39.6 39.6a8 8 0 0 1 0 11.3l-67.88 67.9a8 8 0 0 1-11.32 0l-39.6-39.6a8 8 0 0 1 0-11.32l67.89-67.88a8 8 0 0 1 11.31 0zM192 892h640a32 32 0 0 1 32 32v24a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-24a32 32 0 0 1 32-32zm148-317v253h64V575h-64z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$J = [_hoisted_2$L];
const AlertFilled = defineComponent({
  name: "AlertFilled",
  render: function render65(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$M, _hoisted_3$J);
  }
});
const _hoisted_1$L = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$K = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M193 796c0 17.7 14.3 32 32 32h574c17.7 0 32-14.3 32-32V563c0-176.2-142.8-319-319-319S193 386.8 193 563v233zm72-233c0-136.4 110.6-247 247-247s247 110.6 247 247v193H404V585c0-5.5-4.5-10-10-10h-44c-5.5 0-10 4.5-10 10v171h-75V563zm-48.1-252.5l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3l-67.9-67.9a8.03 8.03 0 0 0-11.3 0l-39.6 39.6a8.03 8.03 0 0 0 0 11.3l67.9 67.9c3.1 3.1 8.1 3.1 11.3 0zm669.6-79.2l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-67.9 67.9a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.2 3.1-8.2 0-11.3zM832 892H192c-17.7 0-32 14.3-32 32v24c0 4.4 3.6 8 8 8h688c4.4 0 8-3.6 8-8v-24c0-17.7-14.3-32-32-32zM484 180h56c4.4 0 8-3.6 8-8V76c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$I = [_hoisted_2$K];
const AlertOutlined = defineComponent({
  name: "AlertOutlined",
  render: function render66(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$L, _hoisted_3$I);
  }
});
const _hoisted_1$K = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$J = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M825 768.9c-3.3-.9-7.3-.4-11.9 1.3c-61.6 28.2-121.5 48.3-179.7 60.2C507.7 856 385.2 842.6 266 790.3c-33.1-14.6-79.1-39.2-138-74a9.36 9.36 0 0 0-5.3-2c-2-.1-3.7.1-5.3.9c-1.6.8-2.8 1.8-3.7 3.1c-.9 1.3-1.1 3.1-.4 5.4c.6 2.2 2.1 4.7 4.6 7.4c10.4 12.2 23.3 25.2 38.6 39s35.6 29.4 60.9 46.8c25.3 17.4 51.8 32.9 79.3 46.4c27.6 13.5 59.6 24.9 96.1 34.1s73 13.8 109.4 13.8c36.2 0 71.4-3.7 105.5-10.9c34.2-7.3 63-15.9 86.5-25.9c23.4-9.9 45-21 64.8-33c19.8-12 34.4-22.2 43.9-30.3c9.5-8.2 16.3-14.6 20.2-19.4c4.6-5.7 6.9-10.6 6.9-14.9c.1-4.5-1.7-7.1-5-7.9zM527.4 348.1c-15.2 1.3-33.5 4.1-55 8.3c-21.5 4.1-41.4 9.3-59.8 15.4s-37.2 14.6-56.3 25.4c-19.2 10.8-35.5 23.2-49 37s-24.5 31.1-33.1 52c-8.6 20.8-12.9 43.7-12.9 68.7c0 27.1 4.7 51.2 14.3 72.5c9.5 21.3 22.2 38 38.2 50.4c15.9 12.4 34 22.1 54 29.2c20 7.1 41.2 10.3 63.2 9.4c22-.9 43.5-4.3 64.4-10.3c20.8-5.9 40.4-15.4 58.6-28.3c18.2-12.9 33.1-28.2 44.8-45.7c4.3 6.6 8.1 11.5 11.5 14.7l8.7 8.9c5.8 5.9 14.7 14.6 26.7 26.1c11.9 11.5 24.1 22.7 36.3 33.7l104.4-99.9l-6-4.9c-4.3-3.3-9.4-8-15.2-14.3c-5.8-6.2-11.6-13.1-17.2-20.5c-5.7-7.4-10.6-16.1-14.7-25.9c-4.1-9.8-6.2-19.3-6.2-28.5V258.7c0-10.1-1.9-21-5.7-32.8c-3.9-11.7-10.7-24.5-20.7-38.3c-10-13.8-22.4-26.2-37.2-37c-14.9-10.8-34.7-20-59.6-27.4c-24.8-7.4-52.6-11.1-83.2-11.1c-31.3 0-60.4 3.7-87.6 10.9c-27.1 7.3-50.3 17-69.7 29.2c-19.3 12.2-35.9 26.3-49.7 42.4c-13.8 16.1-24.1 32.9-30.8 50.4c-6.7 17.5-10.1 35.2-10.1 53.1L408 310c5.5-16.4 12.9-30.6 22-42.8c9.2-12.2 17.9-21 25.8-26.5c8-5.5 16.6-9.9 25.7-13.2c9.2-3.3 15.4-5 18.6-5.4c3.2-.3 5.7-.4 7.6-.4c26.7 0 45.2 7.9 55.6 23.6c6.5 9.5 9.7 23.9 9.7 43.3v56.6c-15.2.6-30.4 1.6-45.6 2.9zM573.1 500c0 16.6-2.2 31.7-6.5 45c-9.2 29.1-26.7 47.4-52.4 54.8c-22.4 6.6-43.7 3.3-63.9-9.8c-21.5-14-32.2-33.8-32.2-59.3c0-19.9 5-36.9 15-51.1c10-14.1 23.3-24.7 40-31.7s33-12 49-14.9c15.9-3 33-4.8 51-5.4V500zm335.2 218.9c-4.3-5.4-15.9-8.9-34.9-10.7c-19-1.8-35.5-1.7-49.7.4c-15.3 1.8-31.1 6.2-47.3 13.4c-16.3 7.1-23.4 13.1-21.6 17.8l.7 1.3l.9.7l1.4.2h4.6c.8 0 1.8-.1 3.2-.2c1.4-.1 2.7-.3 3.9-.4c1.2-.1 2.9-.3 5.1-.4c2.1-.1 4.1-.4 6-.7c.3 0 3.7-.3 10.3-.9c6.6-.6 11.4-1 14.3-1.3c2.9-.3 7.8-.6 14.5-.9c6.7-.3 12.1-.3 16.1 0c4 .3 8.5.7 13.6 1.1c5.1.4 9.2 1.3 12.4 2.7c3.2 1.3 5.6 3 7.1 5.1c5.2 6.6 4.2 21.2-3 43.9s-14 40.8-20.4 54.2c-2.8 5.7-2.8 9.2 0 10.7s6.7.1 11.9-4c15.6-12.2 28.6-30.6 39.1-55.3c6.1-14.6 10.5-29.8 13.1-45.7c2.4-15.9 2-26.2-1.3-31z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$H = [_hoisted_2$J];
const AmazonOutlined = defineComponent({
  name: "AmazonOutlined",
  render: function render67(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$K, _hoisted_3$H);
  }
});
const _hoisted_1$J = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$I = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5c-34.9-50-87.7-77.5-157.3-82.8c-65.9-5.2-138 38.4-164.4 38.4c-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8c23.8 68.2 109.6 235.3 199.1 232.6c46.8-1.1 79.9-33.2 140.8-33.2c59.1 0 89.7 33.2 141.9 33.2c90.3-1.3 167.9-153.2 190.5-221.6c-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7c-44.8 2.6-96.6 30.5-126.1 64.8c-32.5 36.8-51.6 82.3-47.5 133.6c48.4 3.7 92.6-21.2 129-63.7z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$G = [_hoisted_2$I];
const AppleFilled = defineComponent({
  name: "AppleFilled",
  render: function render68(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$J, _hoisted_3$G);
  }
});
const _hoisted_1$I = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$H = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5c-34.9-50-87.7-77.5-157.3-82.8c-65.9-5.2-138 38.4-164.4 38.4c-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8c23.8 68.2 109.6 235.3 199.1 232.6c46.8-1.1 79.9-33.2 140.8-33.2c59.1 0 89.7 33.2 141.9 33.2c90.3-1.3 167.9-153.2 190.5-221.6c-121.1-57.1-114.6-167.2-114.6-170.7zm-10.6 267c-14.3 19.9-28.7 35.6-41.9 45.7c-10.5 8-18.6 11.4-24 11.6c-9-.1-17.7-2.3-34.7-8.8c-1.2-.5-2.5-1-4.2-1.6l-4.4-1.7c-17.4-6.7-27.8-10.3-41.1-13.8c-18.6-4.8-37.1-7.4-56.9-7.4c-20.2 0-39.2 2.5-58.1 7.2c-13.9 3.5-25.6 7.4-42.7 13.8c-.7.3-8.1 3.1-10.2 3.9c-3.5 1.3-6.2 2.3-8.7 3.2c-10.4 3.6-17 5.1-22.9 5.2c-.7 0-1.3-.1-1.8-.2c-1.1-.2-2.5-.6-4.1-1.3c-4.5-1.8-9.9-5.1-16-9.8c-14-10.9-29.4-28-45.1-49.9c-27.5-38.6-53.5-89.8-66-125.7c-15.4-44.8-23-87.7-23-128.6c0-60.2 17.8-106 48.4-137.1c26.3-26.6 61.7-41.5 97.8-42.3c5.9.1 14.5 1.5 25.4 4.5c8.6 2.3 18 5.4 30.7 9.9c3.8 1.4 16.9 6.1 18.5 6.7c7.7 2.8 13.5 4.8 19.2 6.6c18.2 5.8 32.3 9 47.6 9c15.5 0 28.8-3.3 47.7-9.8c7.1-2.4 32.9-12 37.5-13.6c25.6-9.1 44.5-14 60.8-15.2c4.8-.4 9.1-.4 13.2-.1c22.7 1.8 42.1 6.3 58.6 13.8c-37.6 43.4-57 96.5-56.9 158.4c-.3 14.7.9 31.7 5.1 51.8c6.4 30.5 18.6 60.7 37.9 89c14.7 21.5 32.9 40.9 54.7 57.8c-11.5 23.7-25.6 48.2-40.4 68.8zm-94.5-572c50.7-60.2 46.1-115 44.6-134.7c-44.8 2.6-96.6 30.5-126.1 64.8c-32.5 36.8-51.6 82.3-47.5 133.6c48.4 3.7 92.6-21.2 129-63.7z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$F = [_hoisted_2$H];
const AppleOutlined = defineComponent({
  name: "AppleOutlined",
  render: function render69(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$I, _hoisted_3$F);
  }
});
const _hoisted_1$H = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$G = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M120 160H72c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm833 0h-48c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM200 736h112c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm321 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm126 0h178c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H647c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-255 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-79 64H201c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm257 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm256 0H648c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h178c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-385 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$E = [_hoisted_2$G];
const BarcodeOutlined = defineComponent({
  name: "BarcodeOutlined",
  render: function render70(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$H, _hoisted_3$E);
  }
});
const _hoisted_1$G = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$F = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M634 294.3h199.5v48.4H634zM434.1 485.8c44.1-21.1 67.2-53.2 67.2-102.8c0-98.1-73-121.9-157.3-121.9H112v492.4h238.5c89.4 0 173.3-43 173.3-143c0-61.8-29.2-107.5-89.7-124.7zM220.2 345.1h101.5c39.1 0 74.2 10.9 74.2 56.3c0 41.8-27.3 58.6-66 58.6H220.2V345.1zm115.5 324.8H220.1V534.3H338c47.6 0 77.7 19.9 77.7 70.3c0 49.6-35.9 65.3-80 65.3zm575.8-89.5c0-105.5-61.7-193.4-173.3-193.4c-108.5 0-182.3 81.7-182.3 188.8c0 111 69.9 187.2 182.3 187.2c85.1 0 140.2-38.3 166.7-120h-86.3c-9.4 30.5-47.6 46.5-77.3 46.5c-57.4 0-87.4-33.6-87.4-90.7h256.9c.3-5.9.7-12.1.7-18.4zM653.9 537c3.1-46.9 34.4-76.2 81.2-76.2c49.2 0 73.8 28.9 78.1 76.2H653.9z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$D = [_hoisted_2$F];
const BehanceOutlined = defineComponent({
  name: "BehanceOutlined",
  render: function render71(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$G, _hoisted_3$D);
  }
});
const _hoisted_1$F = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$E = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M959 413.4L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6l-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2l-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2l-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40l60.3-35.2a8 8 0 0 0 3-10.8zM264 621c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm388 75c0 4.4-3.6 8-8 8H380c-4.4 0-8-3.6-8-8v-84c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v36h168v-36c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v84zm108-75c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zM220 418l72.7-199.9l.5-1.3l.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$C = [_hoisted_2$E];
const CarFilled = defineComponent({
  name: "CarFilled",
  render: function render72(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$F, _hoisted_3$C);
  }
});
const _hoisted_1$E = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$D = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$B = [_hoisted_2$D];
const CaretDownFilled = defineComponent({
  name: "CaretDownFilled",
  render: function render73(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$E, _hoisted_3$B);
  }
});
const _hoisted_1$D = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$C = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$A = [_hoisted_2$C];
const CaretLeftOutlined = defineComponent({
  name: "CaretLeftOutlined",
  render: function render74(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$D, _hoisted_3$A);
  }
});
const _hoisted_1$C = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$B = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$z = [_hoisted_2$B];
const CaretRightFilled = defineComponent({
  name: "CaretRightFilled",
  render: function render75(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$C, _hoisted_3$z);
  }
});
const _hoisted_1$B = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$A = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$y = [_hoisted_2$A];
const CaretRightOutlined = defineComponent({
  name: "CaretRightOutlined",
  render: function render76(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$B, _hoisted_3$y);
  }
});
const _hoisted_1$A = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$z = /* @__PURE__ */ createElementVNode(
  "defs",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$x = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-.3 1.5-.4 3-.4 4.4c0 14.4 11.6 26 26 26h723c1.5 0 3-.1 4.4-.4c14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$6 = [_hoisted_2$z, _hoisted_3$x];
const ClearOutlined = defineComponent({
  name: "ClearOutlined",
  render: function render77(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$A, _hoisted_4$6);
  }
});
const _hoisted_1$z = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$y = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6C64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9c-27-3.4-52.5-15.2-72.1-34.5c-24-23.5-37.2-55.1-37.2-88.6c0-28 9.1-54.4 26.2-76.4c16.7-21.4 40.2-36.9 66.1-43.7l37.9-10l13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5c14.9-19.2 32.6-36 52.4-50c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50c15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6l37.8 10c54.2 14.4 92.1 63.7 92.1 120c0 33.6-13.2 65.1-37.2 88.6c-19.5 19.2-44.9 31.1-71.9 34.5c-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8c101.7-9.2 182.5-94 183.2-198.2c.6-93.4-62.7-172.1-148.6-194.9z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$w = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M376.9 656.4c1.8-33.5 15.7-64.7 39.5-88.6c25.4-25.5 60-39.8 96-39.8c36.2 0 70.3 14.1 96 39.8c1.4 1.4 2.7 2.8 4.1 4.3l-25 19.6a8 8 0 0 0 3 14.1l98.2 24c5 1.2 9.9-2.6 9.9-7.7l.5-101.3c0-6.7-7.6-10.5-12.9-6.3L663 532.7c-36.6-42-90.4-68.6-150.5-68.6c-107.4 0-195 85.1-199.4 191.7c-.2 4.5 3.4 8.3 8 8.3H369c4.2-.1 7.7-3.4 7.9-7.7zM703 664h-47.9c-4.2 0-7.7 3.3-8 7.6c-1.8 33.5-15.7 64.7-39.5 88.6c-25.4 25.5-60 39.8-96 39.8c-36.2 0-70.3-14.1-96-39.8c-1.4-1.4-2.7-2.8-4.1-4.3l25-19.6a8 8 0 0 0-3-14.1l-98.2-24c-5-1.2-9.9 2.6-9.9 7.7l-.4 101.4c0 6.7 7.6 10.5 12.9 6.3l23.2-18.2c36.6 42 90.4 68.6 150.5 68.6c107.4 0 195-85.1 199.4-191.7c.2-4.5-3.4-8.3-8-8.3z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$5 = [_hoisted_2$y, _hoisted_3$w];
const CloudSyncOutlined = defineComponent({
  name: "CloudSyncOutlined",
  render: function render78(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$z, _hoisted_4$5);
  }
});
const _hoisted_1$y = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$x = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M924.8 385.6a446.7 446.7 0 0 0-96-142.4a446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96a446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263c70.3-70.3 163.7-109 263-109c99.4 0 192.8 38.7 263 109c70.3 70.3 109 163.7 109 263c0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2a55.95 55.95 0 0 0 79.2 0a55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$v = [_hoisted_2$x];
const DashboardOutlined = defineComponent({
  name: "DashboardOutlined",
  render: function render79(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$y, _hoisted_3$v);
  }
});
const _hoisted_1$x = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$w = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M512 96C282.6 96 96 282.6 96 512s186.6 416 416 416s416-186.6 416-416S741.4 96 512 96zm275.1 191.8c49.5 60.5 79.5 137.5 80.2 221.4c-11.7-2.5-129.2-26.3-247.4-11.4c-2.5-6.1-5-12.2-7.6-18.3c-7.4-17.3-15.3-34.6-23.6-51.5C720 374.3 779.6 298 787.1 287.8zM512 157.2c90.3 0 172.8 33.9 235.5 89.5c-6.4 9.1-59.9 81-186.2 128.4c-58.2-107-122.7-194.8-132.6-208c27.3-6.6 55.2-9.9 83.3-9.9zM360.9 191c9.4 12.8 72.9 100.9 131.7 205.5C326.4 440.6 180 440 164.1 439.8c23.1-110.3 97.4-201.9 196.8-248.8zM156.7 512.5c0-3.6.1-7.3.2-10.9c15.5.3 187.7 2.5 365.2-50.6c10.2 19.9 19.9 40.1 28.8 60.3c-4.7 1.3-9.4 2.7-14 4.2C353.6 574.9 256.1 736.4 248 750.1c-56.7-63-91.3-146.3-91.3-237.6zM512 867.8c-82.2 0-157.9-28-218.1-75c6.4-13.1 78.3-152 278.7-221.9l2.3-.8c49.9 129.6 70.5 238.3 75.8 269.5A350.46 350.46 0 0 1 512 867.8zm198.5-60.7c-3.6-21.6-22.5-125.6-69-253.3C752.9 536 850.7 565.2 862.8 569c-15.8 98.8-72.5 184.2-152.3 238.1z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$u = [_hoisted_2$w];
const DribbbleOutlined = defineComponent({
  name: "DribbbleOutlined",
  render: function render80(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$x, _hoisted_3$u);
  }
});
const _hoisted_1$w = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$v = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M854.6 289.1a362.49 362.49 0 0 0-79.9-115.7a370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5c-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142c0 70.6 16.9 140.9 50.1 208.7c26.7 54.5 64 107.6 111 158.1c80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1c23.9-14.1 108.1-66.8 188.4-153c47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1c0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$t = [_hoisted_2$v];
const EnvironmentOutlined = defineComponent({
  name: "EnvironmentOutlined",
  render: function render81(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$w, _hoisted_3$t);
  }
});
const _hoisted_1$v = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$u = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372zm117.7-588.6c-15.9-3.5-34.4-5.4-55.3-5.4c-106.7 0-178.9 55.7-198.6 149.9H344c-4.4 0-8 3.6-8 8v27.2c0 4.4 3.6 8 8 8h26.4c-.3 4.1-.3 8.4-.3 12.8v36.9H344c-4.4 0-8 3.6-8 8V568c0 4.4 3.6 8 8 8h30.2c17.2 99.2 90.4 158 200.2 158c20.9 0 39.4-1.7 55.3-5.1c3.7-.8 6.4-4 6.4-7.8v-42.8c0-5-4.6-8.8-9.5-7.8c-14.7 2.8-31.9 4.1-51.8 4.1c-68.5 0-114.5-36.6-129.8-98.6h130.6c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H439.2v-36c0-4.7 0-9.4.3-13.8h135.9c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H447.1c17.2-56.9 62.3-90.4 127.6-90.4c19.9 0 37.1 1.5 51.7 4.4a8 8 0 0 0 9.6-7.8v-42.8c0-3.8-2.6-7-6.3-7.8z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$s = [_hoisted_2$u];
const EuroOutlined = defineComponent({
  name: "EuroOutlined",
  render: function render82(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$v, _hoisted_3$s);
  }
});
const _hoisted_1$u = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$t = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8c-1.4 1.5-3 1.9-4.1 2c-1.1.1-2.8-.1-4.3-1.5c-1.4-1.2-2.1-3-2-4.8c3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9c-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1a352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4c0-43.5 9.8-85.2 29.1-124c18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0 0 58.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0 0 12.1-46.5c24.1 22.2 44.3 49 61.2 80.4c33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0 0 24.4 59.8a73.36 73.36 0 0 0 53.4 18.8c19.7-1 37.8-9.7 51-24.4c13.3-14.9 24.8-30.1 34.4-45.6c14 17.9 25.7 37.4 35 58.4c15.9 35.8 24 73.9 24 113.1c0 74.9-29.5 145.4-83 198.4z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$r = [_hoisted_2$t];
const FireOutlined = defineComponent({
  name: "FireOutlined",
  render: function render83(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$u, _hoisted_3$r);
  }
});
const _hoisted_1$t = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$s = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M288 421a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM512 533c-85.5 0-155.6 67.3-160 151.6a8 8 0 0 0 8 8.4h48.1c4.2 0 7.8-3.2 8.1-7.4C420 636.1 461.5 597 512 597s92.1 39.1 95.8 88.6c.3 4.2 3.9 7.4 8.1 7.4H664a8 8 0 0 0 8-8.4C667.6 600.3 597.5 533 512 533z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$q = [_hoisted_2$s];
const FrownOutlined = defineComponent({
  name: "FrownOutlined",
  render: function render84(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_3$q);
  }
});
const _hoisted_1$s = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$r = /* @__PURE__ */ createElementVNode(
  "defs",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$p = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M944 299H692c-4.4 0-8 3.6-8 8v406c0 4.4 3.6 8 8 8h59.2c4.4 0 8-3.6 8-8V549.9h168.2c4.4 0 8-3.6 8-8V495c0-4.4-3.6-8-8-8H759.2V364.2H944c4.4 0 8-3.6 8-8V307c0-4.4-3.6-8-8-8zm-356 1h-56c-4.4 0-8 3.6-8 8v406c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V308c0-4.4-3.6-8-8-8zM452 500.9H290.5c-4.4 0-8 3.6-8 8v43.7c0 4.4 3.6 8 8 8h94.9l-.3 8.9c-1.2 58.8-45.6 98.5-110.9 98.5c-76.2 0-123.9-59.7-123.9-156.7c0-95.8 46.8-155.2 121.5-155.2c54.8 0 93.1 26.9 108.5 75.4h76.2c-13.6-87.2-86-143.4-184.7-143.4C150 288 72 375.2 72 511.9C72 650.2 149.1 736 273 736c114.1 0 187-70.7 187-181.6v-45.5c0-4.4-3.6-8-8-8z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$4 = [_hoisted_2$r, _hoisted_3$p];
const GifOutlined = defineComponent({
  name: "GifOutlined",
  render: function render85(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$s, _hoisted_4$4);
  }
});
const _hoisted_1$r = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$q = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$o = [_hoisted_2$q];
const GithubOutlined = defineComponent({
  name: "GithubOutlined",
  render: function render86(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$r, _hoisted_3$o);
  }
});
const _hoisted_1$q = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$p = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M512.1 172.6l-370 369.7h96V868H392V640c0-22.1 17.9-40 40-40h160c22.1 0 40 17.9 40 40v228h153.9V542.3H882L535.2 195.7l-23.1-23.1zm434.5 422.9c-6 6-13.1 10.8-20.8 13.9c7.7-3.2 14.8-7.9 20.8-13.9zm-887-34.7c5 30.3 31.4 53.5 63.1 53.5h.9c-31.9 0-58.9-23-64-53.5zm-.9-10.5v-1.9v1.9zm.1-2.6c.1-3.1.5-6.1 1-9.1c-.6 2.9-.9 6-1 9.1z",
    "fill-opacity": ".15",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$n = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M951 510c0-.1-.1-.1-.1-.2l-1.8-2.1c-.1-.1-.2-.3-.4-.4c-.7-.8-1.5-1.6-2.2-2.4L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.6 63.6 0 0 0-16 26.6l-.6 2.1l-.3 1.1l-.3 1.2c-.2.7-.3 1.4-.4 2.1c0 .1 0 .3-.1.4c-.6 3-.9 6-1 9.1v3.3c0 .5 0 1 .1 1.5c0 .5 0 .9.1 1.4c0 .5.1 1 .1 1.5c0 .6.1 1.2.2 1.8c0 .3.1.6.1.9l.3 2.5v.1c5.1 30.5 32.2 53.5 64 53.5h42.5V940h691.7V614.3h43.4c8.6 0 16.9-1.7 24.5-4.9s14.7-7.9 20.8-13.9a63.6 63.6 0 0 0 18.7-45.3c0-14.7-5-28.8-14.3-40.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7l23.1 23.1L882 542.3h-96.1z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$3 = [_hoisted_2$p, _hoisted_3$n];
const HomeTwotone = defineComponent({
  name: "HomeTwotone",
  render: function render87(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$q, _hoisted_4$3);
  }
});
const _hoisted_1$p = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$o = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M852.6 367.6c16.3-36.9 32.1-90.7 32.1-131.8c0-109.1-119.5-147.6-314.5-57.9c-161.4-10.8-316.8 110.5-355.6 279.7c46.3-52.3 117.4-123.4 183-151.7C316.1 378.3 246.7 470 194 565.6c-31.1 56.9-66 148.8-66 217.5c0 147.9 139.3 129.8 270.4 63c47.1 23.1 99.8 23.4 152.5 23.4c145.7 0 276.4-81.4 325.2-219H694.9c-78.8 132.9-295.2 79.5-295.2-71.2h493.2c9.6-65.4-2.5-143.6-40.3-211.7zM224.8 648.3c26.6 76.7 80.6 143.8 150.4 185c-133.1 73.4-259.9 43.6-150.4-185zm174-163.3c3-82.7 75.4-142.3 156-142.3c80.1 0 153 59.6 156 142.3h-312zm276.8-281.4c32.1-15.4 72.8-33 108.8-33c47.1 0 81.4 32.6 81.4 80.6c0 30-11.1 73.5-21.9 101.8c-39.3-63.5-98.9-122.4-168.3-149.4z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$m = [_hoisted_2$o];
const IeOutlined = defineComponent({
  name: "IeOutlined",
  render: function render88(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_3$m);
  }
});
const _hoisted_1$o = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$n = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1S717.1 625.5 717.1 512S625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7S645.3 438.6 645.3 512S585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9s47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8c-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1c-18.2-7.3-31.8-16.1-45.8-30.2c-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9c7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2c14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$l = [_hoisted_2$n];
const InstagramOutlined = defineComponent({
  name: "InstagramOutlined",
  render: function render89(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_3$l);
  }
});
const _hoisted_1$n = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$m = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4L360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 0 1-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 0 1 6.8-17.2z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$k = [_hoisted_2$m];
const MediumOutlined = defineComponent({
  name: "MediumOutlined",
  render: function render90(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_3$k);
  }
});
const _hoisted_1$m = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$l = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M288 421a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 565H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$j = [_hoisted_2$l];
const MehOutlined = defineComponent({
  name: "MehOutlined",
  render: function render91(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$j);
  }
});
const _hoisted_1$l = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$k = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$i = [_hoisted_2$k];
const MenuOutlined = defineComponent({
  name: "MenuOutlined",
  render: function render92(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$i);
  }
});
const _hoisted_1$k = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$j = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$h = [_hoisted_2$j];
const MenuUnfoldOutlined = defineComponent({
  name: "MenuUnfoldOutlined",
  render: function render93(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_3$h);
  }
});
const _hoisted_1$j = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$i = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1 0 80 0a40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0a40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0a40 40 0 1 0-80 0z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$g = [_hoisted_2$i];
const ProfileOutlined = defineComponent({
  name: "ProfileOutlined",
  render: function render94(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_3$g);
  }
});
const _hoisted_1$i = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$h = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5L214 654.3V226.7l298-101.6l298 101.6v427.6zM430.5 318h-46c-1.7 0-3.3.4-4.8 1.2a10.1 10.1 0 0 0-4 13.6l88 161.1h-45.2c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1v29.7h-63.1c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1V658c0 5.5 4.5 10 10 10h41.3c5.5 0 10-4.5 10-10v-51.8h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-63.4v-29.7h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-45.7l87.7-161.1a10.05 10.05 0 0 0-8.8-14.8h-45c-3.8 0-7.2 2.1-8.9 5.5l-73.2 144.3l-72.9-144.3c-1.7-3.4-5.2-5.5-9-5.5z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$f = [_hoisted_2$h];
const PropertySafetyOutlined = defineComponent({
  name: "PropertySafetyOutlined",
  render: function render95(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_3$f);
  }
});
const _hoisted_1$h = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$g = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3l6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5l48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$e = [_hoisted_2$g];
const ReadOutlined = defineComponent({
  name: "ReadOutlined",
  render: function render96(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$e);
  }
});
const _hoisted_1$g = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$f = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M925.6 405.1l-203-253.7a6.5 6.5 0 0 0-5-2.4H306.4c-1.9 0-3.8.9-5 2.4l-203 253.7a6.5 6.5 0 0 0 .2 8.3l408.6 459.5c1.2 1.4 3 2.1 4.8 2.1c1.8 0 3.5-.8 4.8-2.1l408.6-459.5a6.5 6.5 0 0 0 .2-8.3zM645.2 206.4l34.4 133.9l-132.5-133.9h98.1zm8.2 178.5H370.6L512 242l141.4 142.9zM378.8 206.4h98.1L344.3 340.3l34.5-133.9zm-53.4 7l-44.1 171.5h-93.1l137.2-171.5zM194.6 434.9H289l125.8 247.7l-220.2-247.7zM512 763.4L345.1 434.9h333.7L512 763.4zm97.1-80.8L735 434.9h94.4L609.1 682.6zm133.6-297.7l-44.1-171.5l137.2 171.5h-93.1z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$d = [_hoisted_2$f];
const SketchOutlined = defineComponent({
  name: "SketchOutlined",
  render: function render97(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$d);
  }
});
const _hoisted_1$f = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$e = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M288 421a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$c = [_hoisted_2$e];
const SmileOutlined = defineComponent({
  name: "SmileOutlined",
  render: function render98(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$c);
  }
});
const _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$d = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$b = [_hoisted_2$d];
const StepBackwardFilled = defineComponent({
  name: "StepBackwardFilled",
  render: function render99(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$b);
  }
});
const _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$c = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$a = [_hoisted_2$c];
const StepForwardFilled = defineComponent({
  name: "StepForwardFilled",
  render: function render100(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$a);
  }
});
const _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372c0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$9 = [_hoisted_2$b];
const StopOutlined = defineComponent({
  name: "StopOutlined",
  render: function render101(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$9);
  }
});
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zM315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 1 1 0-98.8zM366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5l32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2c23.8 23.9 20.7 56.8 6.7 100.1zm427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1l43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5l46.5-14.4l38.8 94.9l-57.3 23.9l-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4c-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8c6.8 10.8 24.2 12.6 35.3 13.1c1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2c-10.9 4.4-22 9.2-33.6 14.2c-11.2 14.3-24.2 29-38.7 43.5c.5.8-50-28.4-50-28.4c52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$8 = [_hoisted_2$a];
const TaobaoCircleFilled = defineComponent({
  name: "TaobaoCircleFilled",
  render: function render102(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$8);
  }
});
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200c-109.1 1.7-197 90.6-197 200c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88c24-24.6 56.1-38.3 90.4-38.7c33.9-.3 66.8 12.9 91 36.6c24.8 24.3 38.4 56.8 38.4 91.4c0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4c0-15.9 1.5-31.4 4.3-46.5c.7-3.6-1.2-7.3-4.5-8.8c-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6c24.7-25.3 57.9-39.1 93.2-38.7c31.9.3 62.7 12.6 86 34.4c7.9 7.4 14.7 15.6 20.4 24.4c2 3.1 5.9 4.4 9.3 3.2c17.6-6.1 36.2-10.4 55.3-12.4c5.6-.6 8.8-6.6 6.3-11.6c-32.5-64.3-98.9-108.7-175.7-109.9c-110.9-1.7-203.3 89.2-203.3 199.9c0 62.8 28.9 118.8 74.2 155.5c-31.8 14.7-61.1 35-86.5 60.4c-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5c29.4-29.4 65.4-49.8 104.7-59.7c3.9-1 6.5-4.7 6-8.7z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$7 = [_hoisted_2$9];
const TeamOutlined = defineComponent({
  name: "TeamOutlined",
  render: function render103(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$7);
  }
});
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$6 = [_hoisted_2$8];
const UserOutlined = defineComponent({
  name: "UserOutlined",
  render: function render104(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$6);
  }
});
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode(
  "defs",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M759 335c0-137-111-248-248-248S263 198 263 335c0 82.8 40.6 156.2 103 201.2c-.4.2-.7.3-.9.4c-44.7 18.9-84.8 46-119.3 80.6c-34.5 34.5-61.5 74.7-80.4 119.5C146.9 780.5 137 827 136 874.8c-.1 4.5 3.5 8.2 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8c2-77.2 32.9-149.5 87.6-204.3C356 614.2 431 583 511 583c137 0 248-111 248-248zM511 507c-95 0-172-77-172-172s77-172 172-172s172 77 172 172s-77 172-172 172zm105 221h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H703.5l47.2-60.1c1.1-1.4 1.7-3.2 1.7-4.9c0-4.4-3.6-8-8-8h-72.6c-4.9 0-9.5 2.3-12.6 6.1l-68.5 87.1c-4.4 5.6-6.8 12.6-6.8 19.8c.1 17.7 14.4 32 32.1 32zm240 64H592c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h176.5l-47.2 60.1c-1.1 1.4-1.7 3.2-1.7 4.9c0 4.4 3.6 8 8 8h72.6c4.9 0 9.5-2.3 12.6-6.1l68.5-87.1c4.4-5.6 6.8-12.6 6.8-19.8c-.1-17.7-14.4-32-32.1-32z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$2 = [_hoisted_2$7, _hoisted_3$5];
const UserSwitchOutlined = defineComponent({
  name: "UserSwitchOutlined",
  render: function render105(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_4$2);
  }
});
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4c0-15.9 1.5-31.4 4.3-46.5c.7-3.6-1.2-7.3-4.5-8.8c-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6c24.7-25.3 57.9-39.1 93.2-38.7c31.9.3 62.7 12.6 86 34.4c7.9 7.4 14.7 15.6 20.4 24.4c2 3.1 5.9 4.4 9.3 3.2c17.6-6.1 36.2-10.4 55.3-12.4c5.6-.6 8.8-6.6 6.3-11.6c-32.5-64.3-98.9-108.7-175.7-109.9c-110.8-1.7-203.2 89.2-203.2 200c0 62.8 28.9 118.8 74.2 155.5c-31.8 14.7-61.1 35-86.5 60.4c-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5c29.4-29.4 65.4-49.8 104.7-59.7c3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88c24-24.6 56.1-38.3 90.4-38.7c33.9-.3 66.8 12.9 91 36.6c24.8 24.3 38.4 56.8 38.4 91.4c-.1 34.2-13.4 66.3-37.6 90.5z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$4 = [_hoisted_2$6];
const UsergroupAddOutlined = defineComponent({
  name: "UsergroupAddOutlined",
  render: function render106(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$4);
  }
});
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4l-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1c-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2l-12.9-.7c-.8 0-19.6-.9-41.4 10.6c-35.7 19-51.7 56.4-58.7 84.4c-18.4 73.1-44.6 123.9-55.7 145.6c-3.3 6.4-5.3 10.2-6.2 12.8c-1.8 4.9-.8 9.8 2.8 13c10.5 9.5 38.2-2.9 38.5-3c.6-.3 1.3-.6 2.2-1c13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4c-3.7 7-7.3 14-10.7 20.8c-21.3 42.2-43.4 85.8-126.3 153.6c-3.6 2.8-7 8-4.8 13.7c2.4 6.3 9.3 9.1 24.6 9.1c5.4 0 11.8-.3 19.4-1c49.9-4.4 100.8-18 135.1-87.6c17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8l-108.1-123l-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$3 = [_hoisted_2$5];
const ZhihuOutlined = defineComponent({
  name: "ZhihuOutlined",
  render: function render107(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$3);
  }
});
const icons = {
  Home,
  UserSwitchOutlined,
  BookOutline,
  CloudSyncOutlined,
  DribbbleOutlined,
  CubeOutline,
  PlanetOutline,
  SunnyOutline,
  SettingsOutline,
  LeafOutline,
  FileTrayOutline,
  UsergroupAddOutlined,
  BehanceOutlined,
  CloseOutline,
  RefreshCircleOutline,
  ChevronBackOutline,
  ChevronForwardOutline,
  HomeOutline,
  MenuOutlined,
  TeamOutlined,
  UserOutlined,
  StepBackwardFilled,
  StepForwardFilled,
  StopOutlined,
  SmileOutlined,
  FlashOutline,
  MenuUnfoldOutlined,
  SearchOutline,
  NotificationsOutline,
  LanguageOutline,
  ScanOutline,
  HappyOutline,
  MoonOutline,
  CloseCircleOutline,
  SyncCircleOutline,
  CheckboxOutline,
  BagCheck,
  BatteryHalf,
  Bug,
  ChatbubblesOutline,
  CloudDownloadOutline,
  ColorPaletteOutline,
  CutOutline,
  FlowerSharp,
  GiftOutline,
  HeartDislikeCircleOutline,
  HourglassOutline,
  LayersOutline,
  LogoAlipay,
  LogoChrome,
  LogoIonic,
  LogoPinterest,
  MailUnread,
  MicOffCircle,
  NotificationsOffCircleSharp,
  QrCodeSharp,
  RainyOutline,
  RibbonOutline,
  RoseOutline,
  SnowSharp,
  WalletOutline,
  FireOutlined,
  GithubOutlined,
  IeOutlined,
  SketchOutlined,
  TaobaoCircleFilled,
  ZhihuOutlined,
  EuroOutlined,
  DashboardOutlined,
  BarcodeOutlined,
  AppleFilled,
  AmazonOutlined,
  AlertFilled,
  AimOutlined,
  AppleOutlined,
  CarFilled,
  CaretLeftOutlined,
  CaretRightFilled,
  CaretRightOutlined,
  CaretDownFilled,
  ClearOutlined,
  EnvironmentOutlined,
  GifOutlined,
  HomeTwotone,
  MehOutlined,
  PropertySafetyOutlined,
  ProfileOutlined,
  BagAdd,
  BagHandle,
  BicycleOutline,
  Disc,
  FastFood,
  FootballOutline,
  FootstepsOutline,
  DesktopOutline,
  TvOutline,
  ImageOutline,
  MediumOutlined,
  ReadOutlined,
  LaptopOutline,
  CreateOutline,
  AlertCircleOutline,
  FrownOutlined,
  AlertOutlined,
  InstagramOutlined,
  CloudUploadOutline,
  ArchiveOutline
};
function renderIcon(iconName) {
  return () => h(NIcon, null, { default: () => h(icons[iconName]) });
}
const setupIcons = (app2) => {
  for (const iconsKey in icons) {
    app2.component(iconsKey, icons[iconsKey]);
  }
};
var nprogress$1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(module, exports) {
  (function(root2, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var NProgress2 = {};
    NProgress2.version = "0.2.0";
    var Settings = NProgress2.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress2.configure = function(options2) {
      var key, value;
      for (key in options2) {
        value = options2[key];
        if (value !== void 0 && options2.hasOwnProperty(key))
          Settings[key] = value;
      }
      return this;
    };
    NProgress2.status = null;
    NProgress2.set = function(n) {
      var started = NProgress2.isStarted();
      n = clamp(n, Settings.minimum, 1);
      NProgress2.status = n === 1 ? null : n;
      var progress = NProgress2.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
      progress.offsetWidth;
      queue(function(next) {
        if (Settings.positionUsing === "")
          Settings.positionUsing = NProgress2.getPositioningCSS();
        css(bar, barPositionCSS(n, speed, ease));
        if (n === 1) {
          css(progress, {
            transition: "none",
            opacity: 1
          });
          progress.offsetWidth;
          setTimeout(function() {
            css(progress, {
              transition: "all " + speed + "ms linear",
              opacity: 0
            });
            setTimeout(function() {
              NProgress2.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });
      return this;
    };
    NProgress2.isStarted = function() {
      return typeof NProgress2.status === "number";
    };
    NProgress2.start = function() {
      if (!NProgress2.status)
        NProgress2.set(0);
      var work = function() {
        setTimeout(function() {
          if (!NProgress2.status)
            return;
          NProgress2.trickle();
          work();
        }, Settings.trickleSpeed);
      };
      if (Settings.trickle)
        work();
      return this;
    };
    NProgress2.done = function(force) {
      if (!force && !NProgress2.status)
        return this;
      return NProgress2.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress2.inc = function(amount) {
      var n = NProgress2.status;
      if (!n) {
        return NProgress2.start();
      } else {
        if (typeof amount !== "number") {
          amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
        }
        n = clamp(n + amount, 0, 0.994);
        return NProgress2.set(n);
      }
    };
    NProgress2.trickle = function() {
      return NProgress2.inc(Math.random() * Settings.trickleRate);
    };
    (function() {
      var initial = 0, current = 0;
      NProgress2.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }
        if (current === 0) {
          NProgress2.start();
        }
        initial++;
        current++;
        $promise.always(function() {
          current--;
          if (current === 0) {
            initial = 0;
            NProgress2.done();
          } else {
            NProgress2.set((initial - current) / initial);
          }
        });
        return this;
      };
    })();
    NProgress2.render = function(fromStart) {
      if (NProgress2.isRendered())
        return document.getElementById("nprogress");
      addClass(document.documentElement, "nprogress-busy");
      var progress = document.createElement("div");
      progress.id = "nprogress";
      progress.innerHTML = Settings.template;
      var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress2.status || 0), parent = document.querySelector(Settings.parent), spinner;
      css(bar, {
        transition: "all 0 linear",
        transform: "translate3d(" + perc + "%,0,0)"
      });
      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement(spinner);
      }
      if (parent != document.body) {
        addClass(parent, "nprogress-custom-parent");
      }
      parent.appendChild(progress);
      return progress;
    };
    NProgress2.remove = function() {
      removeClass(document.documentElement, "nprogress-busy");
      removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
      var progress = document.getElementById("nprogress");
      progress && removeElement(progress);
    };
    NProgress2.isRendered = function() {
      return !!document.getElementById("nprogress");
    };
    NProgress2.getPositioningCSS = function() {
      var bodyStyle = document.body.style;
      var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
      if (vendorPrefix + "Perspective" in bodyStyle) {
        return "translate3d";
      } else if (vendorPrefix + "Transform" in bodyStyle) {
        return "translate";
      } else {
        return "margin";
      }
    };
    function clamp(n, min, max) {
      if (n < min)
        return min;
      if (n > max)
        return max;
      return n;
    }
    function toBarPerc(n) {
      return (-1 + n) * 100;
    }
    function barPositionCSS(n, speed, ease) {
      var barCSS;
      if (Settings.positionUsing === "translate3d") {
        barCSS = { transform: "translate3d(" + toBarPerc(n) + "%,0,0)" };
      } else if (Settings.positionUsing === "translate") {
        barCSS = { transform: "translate(" + toBarPerc(n) + "%,0)" };
      } else {
        barCSS = { "margin-left": toBarPerc(n) + "%" };
      }
      barCSS.transition = "all " + speed + "ms " + ease;
      return barCSS;
    }
    var queue = function() {
      var pending = [];
      function next() {
        var fn = pending.shift();
        if (fn) {
          fn(next);
        }
      }
      return function(fn) {
        pending.push(fn);
        if (pending.length == 1)
          next();
      };
    }();
    var css = function() {
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
      function camelCase(string) {
        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }
      function getVendorProp(name) {
        var style2 = document.body.style;
        if (name in style2)
          return name;
        var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
        while (i--) {
          vendorName = cssPrefixes[i] + capName;
          if (vendorName in style2)
            return vendorName;
        }
        return name;
      }
      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }
      function applyCss(element, prop, value) {
        prop = getStyleProp(prop);
        element.style[prop] = value;
      }
      return function(element, properties) {
        var args = arguments, prop, value;
        if (args.length == 2) {
          for (prop in properties) {
            value = properties[prop];
            if (value !== void 0 && properties.hasOwnProperty(prop))
              applyCss(element, prop, value);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      };
    }();
    function hasClass(element, name) {
      var list = typeof element == "string" ? element : classList(element);
      return list.indexOf(" " + name + " ") >= 0;
    }
    function addClass(element, name) {
      var oldList = classList(element), newList = oldList + name;
      if (hasClass(oldList, name))
        return;
      element.className = newList.substring(1);
    }
    function removeClass(element, name) {
      var oldList = classList(element), newList;
      if (!hasClass(element, name))
        return;
      newList = oldList.replace(" " + name + " ", " ");
      element.className = newList.substring(1, newList.length - 1);
    }
    function classList(element) {
      return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    function removeElement(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress2;
  });
})(nprogress$1);
var nprogressExports = nprogress$1.exports;
const NProgress = /* @__PURE__ */ getDefaultExportFromCjs(nprogressExports);
const nprogress = "";
let firstReload = true;
function updateCurrentRouter(to) {
  const appStore = app();
  appStore.currentRouter = { ...to };
}
function updatePaths(to) {
  const appStore = app();
  const paths2 = getObjectPath({ arr: toTree({ arr: appStore.allMenus }), id: to.meta.id });
  appStore.paths = paths2 && paths2.reverse() || [];
}
function updateTbas(current) {
  const appStore = app();
  const { href, hash, name, path, query, meta } = current;
  const tag = appStore.tabs.find((item) => item.meta.id === meta.id);
  if (!tag) {
    meta.tempPath = path;
    appStore.tabs.push(cloneDeep$1({ href, hash, name, path, query, meta }));
  }
}
function updateTbasFix() {
  const appStore = app();
  if (firstReload) {
    appStore.allMenus.forEach((current) => {
      if (current.tabFix && current.path) {
        updateTbas({ meta: current });
      }
    });
    firstReload = false;
  }
}
const afterEach = (to) => {
  updateCurrentRouter(to);
  updatePaths(to);
  updateTbas(to);
  updateTbasFix();
};
const _sfc_main$c = defineComponent({
  setup() {
    const formRef = ref(null);
    const compData = reactive({
      form: { name: "" }
    });
    return {
      formRef,
      compData
    };
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_button = NButton;
  const _component_n_input = NInput;
  const _component_n_form_item = NFormItem;
  const _component_n_tag = NTag;
  const _component_n_input_group = NInputGroup;
  const _component_n_space = NSpace;
  const _component_n_form = NForm;
  const _component_n_card = NCard;
  return openBlock(), createBlock(_component_n_space, { vertical: "" }, {
    default: withCtx(() => [
      createVNode(_component_n_card, {
        segmented: { content: true, footer: true },
        "header-style": "padding:10px",
        "footer-style": "padding:10px",
        "content-style": "padding:10px;"
      }, {
        header: withCtx(() => [
          createVNode(_component_n_button, null, {
            default: withCtx(() => [
              createTextVNode("添加测试")
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(_component_n_form, {
            "label-placement": "left",
            "label-width": 100,
            ref: "formRef",
            model: _ctx.compData.form
          }, {
            default: withCtx(() => [
              createVNode(_component_n_form_item, {
                label: "测试1-key",
                path: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: _ctx.compData.form.name,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.compData.form.name = $event),
                    clearable: ""
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, { label: "测试1-value" }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, null, {
                    default: withCtx(() => [
                      createVNode(_component_n_tag, {
                        type: "info",
                        closable: "",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("测试1-1")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_tag, {
                        type: "info",
                        closable: "",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("测试1-1")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_tag, {
                        type: "info",
                        closable: "",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("测试1-1")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_tag, {
                        type: "info",
                        closable: "",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("测试1-1")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_tag, {
                        type: "info",
                        closable: "",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("测试1-1")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_input_group, null, {
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: _ctx.compData.form.name,
                            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => _ctx.compData.form.name = $event),
                            clearable: ""
                          }, null, 8, ["value"]),
                          createVNode(_component_n_button, {
                            type: "primary",
                            ghost: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("添加")
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
              createVNode(_component_n_form_item, {
                label: "测试1-key",
                path: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input, {
                    value: _ctx.compData.form.name,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => _ctx.compData.form.name = $event),
                    clearable: ""
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, { label: "测试1-value" }, {
                default: withCtx(() => [
                  createVNode(_component_n_space, null, {
                    default: withCtx(() => [
                      createVNode(_component_n_tag, {
                        type: "info",
                        closable: "",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("测试1-1")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_tag, {
                        type: "info",
                        closable: "",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("测试1-1")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_tag, {
                        type: "info",
                        closable: "",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("测试1-1")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_tag, {
                        type: "info",
                        closable: "",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("测试1-1")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_tag, {
                        type: "info",
                        closable: "",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("测试1-1")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_input_group, null, {
                        default: withCtx(() => [
                          createVNode(_component_n_input, {
                            value: _ctx.compData.form.name,
                            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => _ctx.compData.form.name = $event),
                            clearable: ""
                          }, null, 8, ["value"]),
                          createVNode(_component_n_button, {
                            type: "primary",
                            ghost: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("添加")
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
          }, 8, ["model"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const sku = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const routerMap = [
  {
    path: "/",
    name: "main",
    component: () => Promise.resolve().then(() => index$1),
    redirect: "home",
    children: []
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    component: login
  },
  {
    path: "/sku",
    name: "sku",
    meta: { title: "登录" },
    component: sku
  },
  {
    path: "/:pathMatch(.*)*",
    meta: { title: "出错了" },
    component: error
  }
];
var baseMerge = _baseMerge, createAssigner = _createAssigner;
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var merge_1 = merge;
const merge$1 = /* @__PURE__ */ getDefaultExportFromCjs(merge_1);
var Symbol$1 = _Symbol, isArguments = isArguments_1, isArray = isArray_1;
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten$1;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index2-- : ++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return index2;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
function baseIsNaN$1(value) {
  return value !== value;
}
var _baseIsNaN = baseIsNaN$1;
function strictIndexOf$1(array, value, fromIndex) {
  var index2 = fromIndex - 1, length = array.length;
  while (++index2 < length) {
    if (array[index2] === value) {
      return index2;
    }
  }
  return -1;
}
var _strictIndexOf = strictIndexOf$1;
var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
function baseIndexOf$1(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
var _baseIndexOf = baseIndexOf$1;
var baseIndexOf = _baseIndexOf;
function arrayIncludes$1(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
var _arrayIncludes = arrayIncludes$1;
function arrayIncludesWith$1(array, value, comparator) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (comparator(value, array[index2])) {
      return true;
    }
  }
  return false;
}
var _arrayIncludesWith = arrayIncludesWith$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
function noop$1() {
}
var noop_1 = noop$1;
function setToArray$2(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$2;
var Set$1 = _Set, noop = noop_1, setToArray$1 = _setToArray;
var INFINITY = 1 / 0;
var createSet$1 = !(Set$1 && 1 / setToArray$1(new Set$1([, -0]))[1] == INFINITY) ? noop : function(values) {
  return new Set$1(values);
};
var _createSet = createSet$1;
var SetCache = _SetCache, arrayIncludes = _arrayIncludes, arrayIncludesWith = _arrayIncludesWith, cacheHas = _cacheHas, createSet = _createSet, setToArray = _setToArray;
var LARGE_ARRAY_SIZE = 200;
function baseUniq$1(array, iteratee, comparator) {
  var index2 = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set2 = iteratee ? null : createSet(array);
    if (set2) {
      return setToArray(set2);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index2 < length) {
      var value = array[index2], computed2 = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed2 === computed2) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed2) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed2);
        }
        result.push(value);
      } else if (!includes(seen, computed2, comparator)) {
        if (seen !== result) {
          seen.push(computed2);
        }
        result.push(value);
      }
    }
  return result;
}
var _baseUniq = baseUniq$1;
function last$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_1 = last$1;
var baseFlatten = _baseFlatten, baseRest = _baseRest, baseUniq = _baseUniq, isArrayLikeObject = isArrayLikeObject_1, last = last_1;
var unionWith = baseRest(function(arrays) {
  var comparator = last(arrays);
  comparator = typeof comparator == "function" ? comparator : void 0;
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), void 0, comparator);
});
var unionWith_1 = unionWith;
const unionWith$1 = /* @__PURE__ */ getDefaultExportFromCjs(unionWith_1);
let hasRoles = false;
const namespace = "main";
const packagesViews = /* @__PURE__ */ Object.assign({ "../packages/view/error/404.vue": __vite_glob_0_0, "../packages/view/home/index.vue": __vite_glob_0_1, "../packages/view/iframe/index.vue": __vite_glob_0_2, "../packages/view/login/index.vue": __vite_glob_0_3, "../packages/view/test/index.vue": __vite_glob_0_4 });
function findComponent(filePath) {
  const appStore = app();
  const views = merge$1(appStore.configOptions.getViews(), packagesViews);
  const key = Object.keys(views).find((path) => {
    return path.toLowerCase().indexOf(filePath.toLowerCase()) > -1;
  });
  return filePath && views[key] && views[key].default;
}
function addRouter(item) {
  let component = null;
  if (item.isIframe === true && item.file === "") {
    component = globalViewIframe;
  } else {
    if (item.file) {
      component = findComponent(item.file);
    }
  }
  if (component) {
    router.addRoute(item.namespace ? item.namespace : namespace, {
      path: item.path,
      name: item.name,
      component,
      meta: item
    });
  }
}
function createRouterComponent(allMenus) {
  console.log(allMenus);
  allMenus.forEach((item) => {
    addRouter(item);
    if (item.add && Object.keys(item.add).length !== 0) {
      addRouter(item.add);
    }
    if (item.edit && Object.keys(item.edit).length !== 0) {
      addRouter(item.edit);
    }
    if (isArray$6(item.children)) {
      createRouterComponent(item.children);
    }
  });
}
function hasWhiteRouter(path) {
  const appStore = app();
  return appStore.configOptions.whiteList.some((e) => path.indexOf(e) === 0);
}
function hasUserInfo() {
  const appStore = app();
  return Object.keys(appStore.userInfo).length !== 0;
}
function getUserInfo(to, from, next) {
  const appStore = app();
  userInfo().then((res) => {
    appStore.userInfo = res.data;
    updateRouterAll(to, from, next);
  }).catch(() => {
    next(appStore.configOptions.resetPath);
  });
}
function updateRouterAll(to, from, next) {
  const appStore = app();
  if (hasRoles) {
    next();
  } else {
    menus().then((res) => {
      const { menus: menus2 } = appStore.configOptions;
      const allMenus = unionWith$1(res.data, menus2);
      appStore.allMenus = allMenus.map((item) => {
        if (item.icon) {
          item.iconName = item.icon;
          item.icon = renderIcon(item.iconName);
        } else {
          delete item.icon;
        }
        item.name = item.name || item.path;
        return item;
      });
      appStore.treeMenus = toTree({ arr: appStore.allMenus.filter((item) => item.shows) });
      createRouterComponent(allMenus);
    }).finally(() => {
      hasRoles = true;
      next(to.fullPath);
    });
  }
}
const beforeEach = (to, from, next) => {
  if (hasWhiteRouter(to.path)) {
    return next();
  }
  if (hasUserInfo()) {
    updateRouterAll(to, from, next);
  } else {
    getUserInfo(to, from, next);
  }
};
NProgress.configure({
  easing: "ease",
  // 动画方式
  speed: 1e3,
  // 递增进度条的速度
  showSpinner: false,
  // 是否显示加载ico
  trickleSpeed: 200,
  // 自动递增间隔
  minimum: 0.3
  // 初始化时的最小百分比
});
const router = vueRouter.createRouter({
  history: createWebHashHistory(),
  routes: routerMap
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  beforeEach(to, from, next);
});
router.afterEach((to) => {
  NProgress.done();
  afterEach(to);
});
const _sfc_main$b = defineComponent({
  props: {
    permission: [String, Array]
  },
  setup(props) {
    const app$1 = app();
    const permissions = app$1.currentRouter.meta.permission || [];
    const showSlot = computed(() => {
      if (!props.permission) {
        return true;
      }
      if (!permissions) {
        return false;
      }
      if (Array.isArray(props.permission)) {
        return props.permission.every((item) => permissions.includes(item));
      } else {
        return permissions.includes(props.permission);
      }
    });
    return {
      showSlot,
      permissions
    };
  }
});
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.showSlot ? renderSlot(_ctx.$slots, "default", {
    key: 0,
    userPermission: _ctx.permissions
  }) : createCommentVNode("", true);
}
const Authority = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const setupComponents = (app2) => {
  app2.component("Authority", Authority);
};
const emitter = mitt();
function customizer(objValue, srcValue) {
  if (isArray$6(objValue)) {
    return objValue.concat(srcValue);
  }
}
const install$1 = (app2, options2) => {
  const configOptions = cloneDeep$2(cloneDeep$2(config), cloneDeep$2(options2), customizer);
  app2.config.globalProperties["configOptions"] = configOptions;
  app2.provide("configOptions", readonly(configOptions));
  app2.provide("$mitt", emitter);
  setupPinia(app2);
  setupIcons(app2);
  setupGlobal();
  setupComponents(app2);
};
const _sfc_main$a = defineComponent({
  setup() {
    const app$1 = app();
    const themeOverrides = reactive({
      common: {
        primaryColor: computed(() => app$1.userSetting.themeColor),
        primaryColorHover: computed(() => app$1.userSetting.themeColor),
        progressRailColor: computed(() => app$1.userSetting.themeColor)
      }
    });
    return {
      darkTheme: computed(() => app$1.userSetting.themeName ? darkTheme : null),
      themeOverrides,
      locale: computed(() => app$1.userSetting.language ? zhCN : null),
      dateLocale: computed(() => app$1.userSetting.language ? dateZhCN : null)
    };
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_n_message_provider = NMessageProvider;
  const _component_n_notification_provider = NNotificationProvider;
  const _component_n_config_provider = NConfigProvider;
  return openBlock(), createBlock(_component_n_config_provider, {
    theme: _ctx.darkTheme,
    "theme-overrides": _ctx.themeOverrides,
    locale: _ctx.locale,
    "date-locale": _ctx.dateLocale
  }, {
    default: withCtx(() => [
      createVNode(_component_n_notification_provider, null, {
        default: withCtx(() => [
          createVNode(_component_n_message_provider, null, {
            default: withCtx(() => [
              createVNode(_component_router_view)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["theme", "theme-overrides", "locale", "date-locale"]);
}
const install = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const _sfc_main$9 = defineComponent({
  setup() {
    const appStore = app();
    return {
      paths: computed(() => appStore.paths)
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_breadcrumb_item = NBreadcrumbItem;
  const _component_n_breadcrumb = NBreadcrumb;
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
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "left" }, null, -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "top" }, null, -1));
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_divider = NDivider;
  const _component_n_select = NSelect;
  const _component_n_form_item = NFormItem;
  const _component_CheckboxOutline = resolveComponent("CheckboxOutline");
  const _component_n_icon = NIcon;
  const _component_n_switch = NSwitch;
  const _component_n_form = NForm;
  const _component_n_button = NButton;
  const _component_n_drawer_content = NDrawerContent;
  const _component_n_drawer = NDrawer;
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
              createElementVNode("div", _hoisted_1$5, [
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
        h("div", null, [h(NText, { depth: 2 }, { default: () => "羊先生" })]),
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
const UserSet_vue_vue_type_style_index_0_scoped_434fa856_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-434fa856"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "user-set" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_35 = { class: "set-item" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_tag = NTag;
  const _component_n_space = NSpace;
  const _component_n_thing = NThing;
  const _component_n_list_item = NListItem;
  const _component_n_list = NList;
  const _component_n_tab_pane = NTabPane;
  const _component_n_number_animation = NNumberAnimation;
  const _component_n_statistic = NStatistic;
  const _component_n_button = NButton;
  const _component_n_empty = NEmpty;
  const _component_n_tabs = NTabs;
  const _component_n_card = NCard;
  const _component_n_popover = NPopover;
  const _component_n_h2 = NH2;
  const _component_n_icon = NIcon;
  const _component_n_el = NEl;
  const _component_MoonOutline = resolveComponent("MoonOutline");
  const _component_SunnyOutline = resolveComponent("SunnyOutline");
  const _component_n_switch = NSwitch;
  const _component_n_dropdown = NDropdown;
  const _component_n_input = NInput;
  const _component_n_form_item = NFormItem;
  const _component_n_form = NForm;
  const _component_CloseCircleOutline = resolveComponent("CloseCircleOutline");
  const _component_SyncCircleOutline = resolveComponent("SyncCircleOutline");
  const _component_SearchOutline = resolveComponent("SearchOutline");
  const _component_n_button_group = NButtonGroup;
  const _component_n_drawer_content = NDrawerContent;
  const _component_n_drawer = NDrawer;
  const _component_UserSetting = resolveComponent("UserSetting");
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("div", _hoisted_1$4, [
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
      createElementVNode("div", _hoisted_35, [
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
const UserSet = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-434fa856"]]);
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
    const router2 = useRouter();
    const updateExpandedKeys = () => {
      const paths2 = getObjectPath({ arr: toTree({ arr: app$1.allMenus }), id: app$1.currentRouter.meta.id });
      const tabPaths = paths2.filter((item) => item.shows);
      compData.expandedKeys = tabPaths.map((item) => item.id);
    };
    const compData = reactive({
      expandedKeys: [],
      styleLeft: computed(() => {
        return app$1.mobile ? props.isOpen ? 0 : "-250px" : 0;
      }),
      allMenus: [],
      handleSelect(key, item) {
        router2.push(item.path);
      },
      handleUpdateExpandedKeys(keys2) {
        compData.expandedKeys = keys2;
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
      () => router2.currentRoute.value.path,
      () => {
        updateExpandedKeys();
        if (router2.currentRoute.value.meta.shows) {
          compData.value = app$1.currentRouter.meta.id;
        } else {
          compData.value = compData.expandedKeys[0];
        }
      },
      { immediate: true, deep: true }
    );
    watch(app$1.userSetting, () => {
      if (app$1.userSetting.layoutName === "tm") {
        compData.allMenus = computed(() => cloneDeep$1(app$1.paths[0].children || app$1.paths));
      } else {
        compData.allMenus = computed(() => cloneDeep$1(app$1.treeMenus));
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
  const _component_n_menu = NMenu;
  const _component_n_layout_sider = NLayoutSider;
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
    const router2 = useRouter();
    const compData = reactive({
      expandedKeys: [],
      handleSelect(key, item) {
        router2.push(item.path);
      },
      handleUpdateExpandedKeys(keys2) {
        compData.expandedKeys = keys2;
      }
    });
    return {
      app: app$1,
      compData
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_menu = NMenu;
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
    const router2 = useRouter();
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
        item.disabled = computed(() => !(app$1.getTabs.length > 1));
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
        return app$1.getTabs.length > 1;
      },
      handleActionRouter(item) {
        router2.push(item.meta.tempPath || item.meta.path);
      },
      handleColseRouter(item, zt) {
        if (app$1.getTabs.length <= 1) {
          return false;
        }
        const idx = app$1.getTabs.findIndex((k) => k.meta.id === item.meta.id);
        if (zt === "l") {
          app$1.getTabs.splice(0, idx);
        } else if (zt === "r") {
          app$1.getTabs.splice(idx + 1, app$1.getTabs.length);
        } else if (zt === "c") {
          app$1.getTabs.splice(0, idx);
          app$1.getTabs.splice(1, app$1.getTabs.length);
        } else {
          app$1.getTabs.splice(idx, 1);
          if (app$1.currentRouter.meta.id === item.meta.id) {
            const current = app$1.getTabs[idx - 1 <= -1 ? 0 : idx - 1];
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
const index_vue_vue_type_style_index_0_scoped_0632d4c0_lang = "";
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
  const _component_n_el = NEl;
  const _component_ChevronForwardOutline = resolveComponent("ChevronForwardOutline");
  const _component_SmileOutlined = resolveComponent("SmileOutlined");
  const _component_n_dropdown = NDropdown;
  return openBlock(), createBlock(_component_n_el, {
    tag: "div",
    class: "scrollbar"
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
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
        _ctx.app.getTabs.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.app.getTabs, (item, idx) => {
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
              createElementVNode("span", null, toDisplayString(item.meta.title), 1),
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
        _ctx.app.getTabs.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.app.getTabs, (item, idx) => {
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
              createElementVNode("span", null, toDisplayString(item.meta.title), 1),
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
      createElementVNode("div", {
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
      createElementVNode("div", _hoisted_3, [
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
const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-0632d4c0"]]);
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
  const _component_n_layout_header = NLayoutHeader;
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_BagMain = resolveComponent("BagMain");
  const _component_n_el = NEl;
  const _component_n_layout = NLayout;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_n_layout, { style: { "height": "100%" } }, {
      default: withCtx(() => [
        createVNode(_component_n_layout_header, {
          class: "header",
          bordered: ""
        }, {
          default: withCtx(() => [
            !_ctx.app.mobile ? (openBlock(), createBlock(_component_AppLogo, { key: 0 })) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_1, [
              _ctx.app.mobile ? (openBlock(), createBlock(_component_MenuVisibleIcon, {
                key: 0,
                onClick: _ctx.compData.handleMobileMask
              }, null, 8, ["onClick"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                _ctx.app.userSetting.layoutName === "ml" ? (openBlock(), createBlock(_component_Breadcrumb, { key: 0 })) : (openBlock(), createBlock(_component_Navbar, { key: 1 }))
              ], 64))
            ]),
            createElementVNode("div", _hoisted_2, [
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
    withDirectives(createElementVNode("div", {
      class: "mobile-mask",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.compData.handleMobileMask && _ctx.compData.handleMobileMask(...args))
    }, null, 512), [
      [vShow, _ctx.compData.isOpen]
    ])
  ], 64);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-77c118b9"]]);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
export {
  http as axios,
  install as default,
  install$1 as install,
  router
};
