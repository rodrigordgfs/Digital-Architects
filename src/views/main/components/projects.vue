<template>
  <section class="projects">
    <div class="projects__content">
      <div class="projects__content__text">
        <p class="projects__content__text__title">{{ firstTitle }}</p>
        <p class="projects__content__text__title__bold">{{ secondTitle }}</p>
      </div>
      <div class="projects__content__actions">
        <button-indicator
          class="projects__content__actions_left"
          side="left"
          :disabled="disableFirst"
          :click="previousProject"
        />
        <button-indicator
          class="projects__content__actions_right"
          side="right"
          :disabled="disableLast"
          :click="nextProject"
        />
      </div>
      <counter :current="currentProject" :total="totalProjects" />
    </div>
    <div class="projects__image">
      <div
        class="projects__image_picture"
        :style="{ backgroundImage: 'url(' + project.image + ')' }"
      ></div>
      <div class="projects__image_button">
        <button-action label="View Project" :click="openProject" />
      </div>
    </div>
  </section>
</template>

<script>
import Counter from "@/components/shared/Counter";
import ButtonIndicator from "@/components/shared/ButtonIndicator";
import ButtonAction from "@/components/shared/ButtonAction";

export default {
  name: "projects",

  components: {
    Counter,
    ButtonIndicator,
    ButtonAction,
  },

  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Mozaic House",
          image: "https://i.imgur.com/uorVayz.png",
        },
        {
          id: 2,
          name: "Modern House",
          image: "https://i.imgur.com/8zy7NWp.jpg",
        },
      ],

      project: {},
    };
  },

  mounted() {
    this.project = this.projects[0];
  },

  methods: {
    previousProject() {
      if (this.projects.indexOf(this.project) > 0) {
        this.project = this.projects[this.projects.indexOf(this.project) - 1];
      }
    },

    nextProject() {
      if (this.projects.indexOf(this.project) < this.projects.length - 1) {
        this.project = this.projects[this.projects.indexOf(this.project) + 1];
      }
    },

    openProject() {
      this.$router.push(`/projects/${this.project}`);
    },
  },

  computed: {
    totalProjects() {
      const total = this.projects.length;
      return total < 10 ? `0${total}` : total;
    },

    currentProject() {
      const current = this.projects.indexOf(this.project) + 1;
      return current < 10 ? `0${current}` : current;
    },

    firstTitle() {
      if (this.project.name) {
        return this.project.name.split(" ")[0];
      }
      return "";
    },

    secondTitle() {
      if (this.project.name) {
        return this.project.name.split(" ")[1];
      }
      return "";
    },

    disableFirst() {
      return this.projects.indexOf(this.project) === 0;
    },

    disableLast() {
      return this.projects.indexOf(this.project) === this.projects.length - 1;
    },
  },
};
</script>

<style lang="scss">
.projects {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  .projects__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    .projects__content__text {
      .projects__content__text__title {
        font-family: "Roboto", sans-serif;
        font-size: 4rem;
        font-weight: 300;
        text-transform: uppercase;
        color: #bdbdbd;
      }
      .projects__content__text__title__bold {
        font-family: "Roboto", sans-serif;
        font-size: 4rem;
        font-weight: 700;
        color: #333333;
      }
    }
    .projects__content__actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      margin: 90px 0;
    }
  }
  .projects__image {
    flex: 1.5;
    position: relative;
    .projects__image_picture {
      width: 100%;
      height: 770px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .projects__image_button {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}

@media only screen and (max-width: 915px) {
}
</style>
