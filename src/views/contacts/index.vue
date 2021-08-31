<template>
  <main class="contacts">
    <div class="contacts__informations">
      <section-title
        class="contacts__title"
        first="Contact"
        second="Information"
      />
      <div class="contacts__informations__company">
        <h2>Digital Architects</h2>
        <p>1234 Sample Street Austin Texas, 76401</p>
      </div>
      <div class="contacts__informations__phone">
        <h2>512.333.2222</h2>
      </div>
      <div class="contacts__informations__email">
        <p>sample@shinodalabs.com.br</p>
      </div>
      <button-action
        class="contacts__informations_button"
        label="Contact Us"
        :dark="true"
        :show-icon="false"
        :click="contactUs"
      />
    </div>
    <div class="contacts__map">
      <iframe
        class="contacts__map_iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.8993890724323!2d-101.94316208558715!3d21.354463381956347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bd3ceff840b83%3A0x5d202dfd568340d9!2sDigital%20Architecture%20Sucursal%20Lagos%20de%20Moreno!5e0!3m2!1spt-BR!2sbr!4v1630390065944!5m2!1spt-BR!2sbr"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      />
    </div>
  </main>
</template>

<script>
import SectionTitle from "@/components/shared/SectionTitle";
import ButtonAction from "@/components/shared/ButtonAction";
import ScrollReveal from "scrollreveal";

export default {
  name: "Contacts",

  components: {
    SectionTitle,
    ButtonAction,
  },

  mounted() {
    this.scrollReveal();
  },

  methods: {
    contactUs() {},

    scrollReveal() {
      let sr = ScrollReveal({
        origin: "left",
        distance: "50px",
        duration: 2000,
        reset: true,
      });

      ScrollReveal({
        origin: "top",
        distance: "50px",
        duration: 2000,
        reset: true,
      }).reveal(".contacts__title", { delay: 200 });

      ScrollReveal({
        origin: "right",
        distance: "50px",
        duration: 2000,
        reset: true,
      }).reveal(".contacts__map_iframe", { delay: 500 });

      sr.reveal(".contacts__informations__company", { delay: 250 });
      sr.reveal(".contacts__informations__phone", { delay: 300 });
      sr.reveal(".contacts__informations__email", { delay: 350 });
      sr.reveal(".contacts__informations_button", { delay: 400 })
    },
  },
};
</script>

<style lang="scss">
.contacts {
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px 10px 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .contacts__informations {
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    gap: 35px;
    flex: 1;
    .contacts__informations__company {
      h2 {
        font-weight: 700;
        font-size: 18px;
        color: #333333;
      }
      p {
        margin-top: 5px;
        font-weight: 300;
        font-size: 16px;
        color: #333333;
      }
    }
    .contacts__informations__phone {
      h2 {
        font-weight: 700;
        font-size: 18px;
        color: #333333;
      }
    }
    .contacts__informations__email {
      p {
        font-weight: 300;
        font-size: 16px;
        color: #333333;
      }
    }
  }
  .contacts__map {
      flex: 1.5;
  }
  .contacts__map_iframe {
      width: 100%;
      height: 550px;
  }
}

@media only screen and (max-width: 768px) {
    .contacts {
        flex-direction: column;;
    }

    .contacts__map {
        margin-top: 30px;
    }
}
</style>
