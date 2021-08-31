<template>
  <main class="gallery">
    <section-title
      class="gallery__title"
      first="Photo"
      second="Gallery"
    />
    <divider
      class="gallery__divider"
      type="horizontal"
    />
    <viewer
      class="viewer"
      :images="images"
      :options="options"
    >
      <img
        v-for="src in images"
        :key="src"
        class="image__viewer"
        :src="src"
      >
    </viewer>
  </main>
</template>

<script>
import SectionTitle from "@/components/shared/SectionTitle";
import Divider from "@/components/shared/Divider";

export default {
  name: "Gallery",

  components: {
    SectionTitle,
    Divider,
  },

  data() {
    return {
      images: [
        "https://i.imgur.com/hTuWdnC.jpg",
        "https://i.imgur.com/oUmU7cb.jpg",
        "https://i.imgur.com/eJJRwo2.jpg",
        "https://i.imgur.com/xNdbzYD.jpg",
        "https://i.imgur.com/k9oF6Ok.jpg",
        "https://i.imgur.com/qleyj4e.jpg",
        "https://i.imgur.com/BNgxjah.jpg",
        "https://i.imgur.com/K6isZou.jpg",
        "https://i.imgur.com/iIvjmaH.jpg",
        "https://i.imgur.com/ABqIo9C.jpg",
        "https://i.imgur.com/VN6QSmo.jpg",
        "https://i.imgur.com/q7hLoXS.jpg"
      ],
      options: {
          "title": false,
          "rotatable": false,
          "scalable": false,
          "fullscreen": false,
          "keyboard": false,
      }
    };
  },
};
</script>

<style lang="scss">
.gallery {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px 120px;
  .gallery__title {
    margin: 60px 0;
  }
}

.gallery__divider {
    margin-bottom: 60px;
}

.viewer {
    text-align: center;
}

.image__viewer {
    width: calc(1084px / 4);
    height: 180px;
    object-fit: cover;
    padding: 0 2px;
}
</style>
