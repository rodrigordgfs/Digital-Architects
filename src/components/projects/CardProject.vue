<template>
  <section class="card_project">
    <div
      class="card_project_image"
      :style="{ backgroundImage: 'url(' + project.image + ')' }"
    />
    <div class="card_project_content">
      <h2 class="card_project_title">
        {{ project.title }}
      </h2>
      <p class="card_project_description">
        {{ project.description }}
      </p>
      <button-action
        class="card_project_action"
        label="View More"
        :click="viewMore"
        dark
      />
    </div>
  </section>
</template>

<script>
import ButtonAction from "@/components/shared/ButtonAction";

export default {
  name: "CardProject",

  components: {
    ButtonAction,
  },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  methods: {
    viewMore() {
      this.$router.push(`/projects/${this.project.id}`);
    },
  },
};
</script>

<style lang="scss">
.card_project {
    background: #fbfbfb;
    display: flex;
    flex-direction: row;
    .card_project_image {
        flex: 1;
        width: 100%;
        height: inherit;
        background-size: cover;
        background-position: center;
    }
    .card_project_content {
        flex: 1.5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: "Roboto", sans-serif;
        padding: 30px;
        .card_project_title {
            font-size: 40px;
            font-weight: 300;
            color: #bdbdbd;
        }
        .card_project_description {
            font-weight: 300;
            color: #000000;
            line-height: 25px;
            margin: 25px 0;
        }
    }
}

@media only screen and (max-width: 768px) {
    .card_project {
        flex-direction: column;
        .card_project_image {
            flex: none;
            height: 300px;
        }
    }
}
</style>
