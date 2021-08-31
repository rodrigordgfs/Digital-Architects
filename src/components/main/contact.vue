<template>
  <section class="contact">
    <head-title
      class="contact__title"
      label="Contact Us"
    />
    <div class="contact__container">
      <form class="contact__form">
        <input-text
          v-model="contact.name"
          class="contact__form_input"
          placeholder="Name"
          type="text"
        />
        <input-text
          v-model="contact.phone"
          class="contact__form_input"
          placeholder="Phone Number"
          type="tel"
        />
        <input-text
          v-model="contact.email"
          class="contact__form_input"
          placeholder="E-mail"
          type="email"
          :maxlength="100"
        />
        <input-text
          v-model="contact.interestedIn"
          class="contact__form_input"
          placeholder="Interested In"
          type="text"
          :maxlength="80"
        />
        <input-text
          v-model="contact.message"
          class="contact__form_input"
          placeholder="Message"
          type="text"
          :max-length="200"
        />
      </form>
      <div class="contact__image" />
    </div>
    <button-action
      class="send_email__button"
      label="Send email"
      :dark="true"
      :click="sendEmail"
    />
  </section>
</template>

<script>
import HeadTitle from "@/components/shared/HeadTitle";
import ButtonAction from "@/components/shared/ButtonAction";
import InputText from "@/components/shared/InputText";
import ScrollReveal from "scrollreveal";

export default {
  name: "Contact",

  components: {
    HeadTitle,
    ButtonAction,
    InputText,
  },

  data() {
    return {
      contact: {
        name: "",
        phone: "",
        email: "",
        interestedIn: "",
        message: "",
      },
    };
  },

  mounted() {
    this.scrollReveal();
  },

  methods: {
    sendEmail() {},

    scrollReveal() {
      let sr = ScrollReveal({
        origin: "right",
        distance: "50px",
        duration: 2000,
        reset: true,
      });

      sr.reveal(".contact__title", { delay: 200 });
      sr.reveal(".contact__form_input", { delay: 250 });
      sr.reveal(".contact__image", { delay: 300 });
      sr.reveal(".send_email__button", { delay: 350 });
    },
  },
};
</script>

<style lang="scss">
.contact {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
  .contact__container {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      gap: 20px;
        .contact__form {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 10px;
        }
        .contact__image {
            width: 100%;
            height: 280px;
            background-image: url("https://i.imgur.com/tsTESpi.png");
            background-position: right;
            background-size: cover;
        }
  }
}

.send_email__button {
    margin-top: 70px;
}

@media only screen and (max-width: 768px) {
    .contact {
        .contact__container {
            flex-direction: column;
            .contact__image {
                display: none;
            }
        }
    }
}
</style>
