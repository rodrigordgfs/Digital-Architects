<template>
  <main class="project_detail">
    <section-title
      class="project_detail__title"
      first="Sample"
      second="Project 1"
    />
    <divider
      class="project_detail__divider"
      type="horizontal"
    />
    <div class="project_detail__content">
      <div
        class="project_detail__content__cover"
        :style="{ backgroundImage: 'url(https://i.imgur.com/VN6QSmo.jpg)' }"
      />
      <div class="project_detail__content_info">
        <div
          class="project_detail__content_info_image"
          :style="{ backgroundImage: 'url(https://i.imgur.com/iIvjmaH.jpg)' }"
        />
        <div class="project_detail__content_info_text">
          <p>
            Commodo consectetur commodo voluptate pariatur commodo minim ut eu
            excepteur magna. Aute do id irure elit pariatur qui proident commodo
            laboris. Ex magna adipisicing ea exercitation aute sint consequat
            officia commodo nostrud occaecat reprehenderit.<br>
            Lorem aliqua laborum adipisicing dolore adipisicing tempor culpa
            aliquip aute exercitation. Ut nisi pariatur laborum Lorem. Consequat
            id laboris ullamco culpa proident est qui aliqua incididunt non
            adipisicing enim nulla pariatur.<br>
            Mollit est elit et consectetur non exercitation nisi do laboris sunt
            eu. Exercitation occaecat in est ullamco enim aliquip occaecat
            voluptate ex. Nulla aliquip nostrud sunt ad cillum dolore tempor
            incididunt nulla. Minim aliqua fugiat qui esse labore labore dolor
            laboris minim nulla quis deserunt. Consectetur esse ullamco
            consequat mollit dolore dolor nisi. Aute enim est incididunt ad
            ullamco amet voluptate labore adipisicing consequat nostrud
            adipisicing nisi do.
          </p>
        </div>
      </div>
      <div class="project_detail__content_info">
        <div class="project_detail__content_info_text">
          <p>
            Commodo consectetur commodo voluptate pariatur commodo minim ut eu
            excepteur magna. Aute do id irure elit pariatur qui proident commodo
            laboris. Ex magna adipisicing ea exercitation aute sint consequat
            officia commodo nostrud occaecat reprehenderit.<br>
            Lorem aliqua laborum adipisicing dolore adipisicing tempor culpa
            aliquip aute exercitation. Ut nisi pariatur laborum Lorem. Consequat
            id laboris ullamco culpa proident est qui aliqua incididunt non
            adipisicing enim nulla pariatur.<br>
            Mollit est elit et consectetur non exercitation nisi do laboris sunt
            eu. Exercitation occaecat in est ullamco enim aliquip occaecat
            voluptate ex. Nulla aliquip nostrud sunt ad cillum dolore tempor
            incididunt nulla. Minim aliqua fugiat qui esse labore labore dolor
            laboris minim nulla quis deserunt. Consectetur esse ullamco
            consequat mollit dolore dolor nisi. Aute enim est incididunt ad
            ullamco amet voluptate labore adipisicing consequat nostrud
            adipisicing nisi do.
          </p>
        </div>
        <div
          class="project_detail__content_info_image"
          :style="{ backgroundImage: 'url(https://i.imgur.com/VN6QSmo.jpg)' }"
        />
      </div>
      <div
        class="project_detail__content_blueprint"
        :style="{ backgroundImage: 'url(https://i.imgur.com/L7Zung7.jpg)' }"
      />
    </div>
  </main>
</template>

<script>
import SectionTitle from "@/components/shared/SectionTitle";
import Divider from "@/components/shared/Divider";
import ScrollReveal from "scrollreveal";

export default {
  name: "ProjectDetail",

  components: {
    SectionTitle,
    Divider,
  },

  mounted() {
    this.scrollReveal();
  },

  methods: {
    scrollReveal() {
      ScrollReveal({
        origin: "top",
        distance: "50px",
        duration: 2000,
        reset: true,
      }).reveal(".project_detail__title", { delay: 200 });

      ScrollReveal({
        origin: "bottom",
        distance: "50px",
        duration: 2000,
        reset: true,
      }).reveal(".project_detail__content__cover", { delay: 250 });

      ScrollReveal({
        origin: "left",
        distance: "50px",
        duration: 2000,
        reset: true,
      }).reveal(".project_detail__content_info_image", { delay: 300 });

      ScrollReveal({
        origin: "left",
        distance: "50px",
        duration: 2000,
        reset: true,
      }).reveal(".project_detail__content_info_text", { delay: 350 });

      ScrollReveal({
        origin: "top",
        distance: "50px",
        duration: 2000,
        reset: true,
      }).reveal(".project_detail__content_blueprint", { delay: 350 });
    },
  },
};
</script>

<style lang="scss">
.project_detail {
  max-width: 1100px;
  margin: 0 auto 100px;
  padding: 0 10px;
  .project_detail__title {
    margin: 60px 0;
  }
  .project_detail__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .project_detail__content__cover {
      width: 100%;
      height: 350px;
      background-size: cover;
      background-position: center;
    }
    .project_detail__content_info {
      display: flex;
      flex-direction: row;
      gap: 20px;
      .project_detail__content_info_image {
        width: 100%;
        height: inherit;
        background-size: cover;
        background-position: center;
      }
      .project_detail__content_info_text {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        line-height: 25px;
        color: #000;
        font-weight: 16px;
      }
    }
    .project_detail__content_blueprint {
      width: 100%;
      height: 350px;
      background-size: cover;
      background-position: center;
    }
  }
}

.project_detail__divider {
  margin-bottom: 60px;
}

@media only screen and (max-width: 768px) {
  .project_detail {
    .project_detail__content {
      .project_detail__content_info {
          flex-direction: column;
          .project_detail__content_info_image {
              height: 350px;
          }
      }
    }
  }
}
</style>
