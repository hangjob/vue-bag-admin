<template>
  <section id="community" class="bag-community">
    <span class="bag-community-ghost" aria-hidden="true">CONNECT</span>

    <header class="bag-community-heading">
      <span class="bag-community-eyebrow">COMMUNITY & CONTACT</span>
      <h2>社区与联系</h2>
      <p>不止交流代码，也分享生活、技术和新的合作想法。</p>
    </header>

    <div class="bag-community-grid">
      <article class="bag-community-card bag-community-card--wechat">
        <span class="bag-community-card-icon bag-community-card-icon--wechat" aria-hidden="true">
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="15" r="6" />
            <circle cx="11" cy="19" r="4" />
            <circle cx="37" cy="19" r="4" />
            <path d="M13 38v-5c0-7 5-11 11-11s11 4 11 11v5" />
            <path d="M3 37v-4c0-5 3-8 8-8 2 0 4 1 5 2" />
            <path d="M45 37v-4c0-5-3-8-8-8-2 0-4 1-5 2" />
          </svg>
        </span>
        <span class="bag-community-doodle bag-community-doodle--wechat" aria-hidden="true"></span>
        <span class="bag-community-star" aria-hidden="true">✦</span>

        <div class="bag-community-surface bag-community-wechat-surface">
          <div class="bag-community-copy">
            <h3>微信群</h3>
            <span class="bag-community-title-mark" aria-hidden="true"></span>
            <p class="bag-community-name">Vue-Bag-Admin 社区</p>
            <span class="bag-community-dots" aria-hidden="true"></span>
            <strong class="bag-community-join">
              <span aria-hidden="true">★</span>
              扫码加入交流群
            </strong>
          </div>

          <a
            class="bag-community-qr-card"
            :href="wechatInviteUrl"
            target="_blank"
            rel="noopener noreferrer"
            title="打开微信邀请链接"
          >
            <img
              class="bag-community-qr-image"
              :src="wechatQrUrl"
              alt="Vue-Bag-Admin 微信群邀请二维码"
            />
          </a>
        </div>
      </article>

      <a
        class="bag-community-card bag-community-link-card bag-community-link-card--station"
        href="https://www.itnavs.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="bag-community-link-surface">
          <span class="bag-community-card-icon bag-community-card-icon--station" aria-hidden="true">
            <svg viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="15" />
              <path d="m29 17-4 9-8 5 4-9 8-5Z" />
            </svg>
          </span>

          <div class="bag-community-link-copy">
            <h3>知航驿站</h3>
            <span class="bag-community-title-mark" aria-hidden="true"></span>
            <p>记录生活、技术与思考</p>
            <span class="bag-community-dots" aria-hidden="true"></span>
            <strong class="bag-community-action bag-community-action--station">
              <span aria-hidden="true">→</span>
              访问网站
            </strong>
          </div>

          <div class="bag-community-station-art" aria-hidden="true">
            <span class="bag-community-note bag-community-note--life"></span>
            <span class="bag-community-note bag-community-note--tech"></span>
            <span class="bag-community-compass">
              <i></i>
            </span>
          </div>

          <span
            class="bag-community-doodle bag-community-doodle--station"
            aria-hidden="true"
          ></span>
        </div>
      </a>

      <a
        class="bag-community-card bag-community-link-card bag-community-link-card--contact"
        href="https://yh.itnavs.com/contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="bag-community-link-surface">
          <span class="bag-community-card-icon bag-community-card-icon--contact" aria-hidden="true">
            <svg viewBox="0 0 48 48">
              <path d="m8 26 8 8c2 2 5 2 7 0l4-4" />
              <path d="m40 26-8 8c-2 2-5 2-7 0L14 23" />
              <path d="m20 17 4-4c2-2 5-2 7 0l9 9" />
              <path d="m28 17-3 3c-2 2-5 2-7 0l-1-1-9 9" />
            </svg>
          </span>

          <div class="bag-community-link-copy">
            <h3>合作机会</h3>
            <span class="bag-community-title-mark" aria-hidden="true"></span>
            <p>项目合作 / 技术交流</p>
            <span class="bag-community-dots" aria-hidden="true"></span>
            <strong class="bag-community-action bag-community-action--contact">
              <span aria-hidden="true">→</span>
              联系我
            </strong>
          </div>

          <div class="bag-community-contact-art" aria-hidden="true">
            <span class="bag-community-message">
              <i></i>
              <i></i>
              <i></i>
            </span>
            <span class="bag-community-handshake">
              <svg viewBox="0 0 64 64">
                <path d="m7 31 9-11 14 9-8 10c-2 3-6 3-8 1l-7-6c-1-1-1-2 0-3Z" />
                <path d="m57 31-9-11-14 9 8 10c2 3 6 3 8 1l7-6c1-1 1-2 0-3Z" />
                <path d="m22 30 8-7c2-2 5-2 7 0l8 7-13 13-10-13Z" />
              </svg>
            </span>
          </div>

          <span
            class="bag-community-doodle bag-community-doodle--contact"
            aria-hidden="true"
          ></span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'

const wechatInviteUrl = 'https://u.wechat.com/MC3P_4dYw_2FOyOWJvE-Ph0?s=2'
const wechatQrUrl = withBase('/wechat-group-qr.png')
</script>
