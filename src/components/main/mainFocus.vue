<template>
  <section class="main-focus">
    <head-title
      class="main-focus__title"
      label="Main Focus"
    />
    <div class="main-focus__content">
      <div class="main-focus__item">
        <p class="main-focus__item-count">
          1
        </p>
        <p class="main-focus__item-text">
          It's famous because of the company's existence, it's something non-concrete that drives the organization from its creation to the end of it. It is giving meaning to existence, a motivation.
        </p>
      </div>
      <div class="main-focus__item">
        <p class="main-focus__item-count">
          2
        </p>
        <p class="main-focus__item-text">
          It's the dreamy side of the company, it's when an organization looks to the future and thinks “This is what I want to be”, and based on this, the company walks in search of what was projected for the coming years.
        </p>
      </div>
    </div>
  </section>
</template>

<script>

import HeadTitle from '@/components/shared/HeadTitle'
import ScrollReveal from "scrollreveal";

export default {
    name: "MainFocus",

    components: {
        HeadTitle,
    },

    mounted() {
      this.scrollReveal();
    },

    methods: {
      scrollReveal() {
      let sr = ScrollReveal({
        origin: "left",
        distance: "50px",
        duration: 2000,
        reset: true,
      });

      sr.reveal(".main-focus__title", { delay: 200 });
      sr.reveal(".main-focus__item-count", { delay: 250 });
      sr.reveal(".main-focus__item-text", { delay: 300 });
    },
    }
}
</script>

<style lang="scss">
.main-focus {
    max-width: 1100px;
    margin: 0 auto;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
    .main-focus__title {
        padding-top: 55px;
    }
    .main-focus__content {
        flex: 1 1 50%;
        display: flex;
        flex-direction: row;
        gap: 10px;
        .main-focus__item {
            display: flex;
            flex-direction: row;
            font-family: "Roboto", sans-serif;
            justify-content: center;
            align-items: center;
            gap: 10px;
            .main-focus__item-count {
                font-size: 200px;
                color: #bdbdbd;
                font-weight: 900;
            }
            .main-focus__item-text {
                font-size: 22px;
                color: #333333;
            }
        }
        &:nth-child(2) {
          margin-bottom: 55px;
        }
    }
}

@media only screen and (max-width: 768px) {
    .main-focus {
        .main-focus__content {
            flex-direction: column;
            gap: 0;
        }
    }
}
</style>