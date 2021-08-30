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
          Laborum deserunt duis est commodo. Do mollit Lorem elit minim aute Lorem dolore excepteur Lorem consectetur proident.
        </p>
      </div>
      <div class="main-focus__item">
        <p class="main-focus__item-count">
          2
        </p>
        <p class="main-focus__item-text">
          Laborum deserunt duis est commodo. Do mollit Lorem elit minim aute Lorem dolore excepteur Lorem consectetur proident.
        </p>
      </div>
    </div>
  </section>
</template>

<script>

import HeadTitle from '@/components/shared/HeadTitle'

export default {
    name: "MainFocus",

    components: {
        HeadTitle,
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