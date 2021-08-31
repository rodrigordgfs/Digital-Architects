<template>
  <main class="projects">
    <section-title
      class="projects__title"
      first="Our"
      second="Projects"
    />
    <divider
      class="projects__divider"
      type="horizontal"
    />
    <div class="projects__container">
      <card-project
        v-for="project in projects"
        :key="project.id"
        class="projects__item"
        :project="project"
      />
    </div>
  </main>
</template>

<script>
import SectionTitle from "@/components/shared/SectionTitle";
import Divider from "@/components/shared/Divider";
import CardProject from "@/components/projects/CardProject";
import ScrollReveal from "scrollreveal"; 

export default {
  name: "Projects",

  components: {
    SectionTitle,
    Divider,
    CardProject,
  },

  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Sample Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'https://i.imgur.com/oUmU7cb.jpg',
        },
        {
          id: 2,
          title: 'Sample Project 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'https://i.imgur.com/eJJRwo2.jpg',
        },
        {
          id: 3,
          title: 'Sample Project 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'https://i.imgur.com/k9oF6Ok.jpg',
        },
      ]
    }
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
      }).reveal(".projects__title", { delay: 200 });

      ScrollReveal({
        origin: "left",
        distance: "50px",
        duration: 2000,
        reset: true,
      }).reveal(".projects__item", { delay: 200 })
    },
  },
};
</script>

<style lang="scss">
.projects {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  .projects__title {
    margin: 60px 0;
  }
  .projects__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 150px;
  }
}

.projects__divider {
  margin-bottom: 60px;
  width: 100%;
}
</style>
