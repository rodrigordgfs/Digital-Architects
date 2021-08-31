<template>
  <section class="projects">
    <div class="projects__content">
      <section-title 
        :first="firstTitle"
        :second="secondTitle"
      />
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
    </div>
    <div class="projects__image">
      <div
        class="projects__image_picture"
        :style="{ backgroundImage: 'url(' + project.image + ')' }"
      />
      <div class="projects__image_button">
        <button-action
          label="View Project"
          :click="openProject"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonIndicator from "@/components/shared/ButtonIndicator";
import ButtonAction from "@/components/shared/ButtonAction";
import SectionTitle from "@/components/shared/SectionTitle";

export default {
  name: "Projects",

  components: {
    ButtonIndicator,
    ButtonAction,
    SectionTitle
  },

  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Mozaic Lorem",
          image: "https://i.imgur.com/uorVayz.png",
        },
        {
          id: 2,
          name: "Modern House",
          image: "https://i.imgur.com/8zy7NWp.jpg",
        },
        {
          id: 3,
          name: "Villa Savoye",
          image: "https://i.imgur.com/wgZkX7h.jpg",
        },
        {
          id: 4,
          name: "Eero Saarinen",
          image: "https://i.imgur.com/bFTiR7R.jpg",
        },
        {
          id: 5,
          name: "Eames House",
          image: "https://i.imgur.com/S4UI8xI.jpg",
        },
      ],

      project: {},
    };
  },

  computed: {
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
};
</script>

<style lang="scss">
.projects {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  .projects__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-self: center;
    .projects__content__actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      margin-top: 50px;
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

@media only screen and (max-width: 768px) {
  .projects {
    flex-direction: column;
    .projects__content {
      justify-content: center;
      align-items: center;
      .projects__content__text {
        .projects__content__text__title {
          text-align: center;
        }
        .projects__content__text__title__bold {
          text-align: center;
        }
      }
      .projects__content__actions {
        margin: 10px 0 20px;
      }
    }
    .projects__image {
      .projects__image_picture {
        height: 350px;
      }
    }
  }
}
</style>
