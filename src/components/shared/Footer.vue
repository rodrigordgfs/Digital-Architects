<template>
  <footer class="footer-wrapper">
    <div class="footer">
      <div class="footer__content">
        <div class="footer__content__brand">
          <img
            src="img/icons/logo-white.svg"
            alt="Logo"
          >
        </div>
        <div class="footer__content__map_menu">
          <p class="footer__content_title">
            Information
          </p>
          <ul class="footer__content_menu">
            <li
              v-for="route in routes"
              :key="route.path"
            >
              <router-link
                class="footer__content_link"
                :to="route.path"
              >
                {{
                  route.name
                }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer__content__contacts">
          <p class="footer__content_title">
            Contacts
          </p>
          <div class="footer__content__contacts__list">
            <div
              v-for="contact in contacts"
              :key="contact.text"
              class="footer__content__contacts__list_item"
            >
              <img
                :src="contact.icon"
                :alt="contact.type"
              >
              <p>{{ contact.text }}</p>
            </div>
          </div>
        </div>
        <div class="footer__content__social">
          <p class="footer__content_title">
            Social Media
          </p>
          <div class="footer__content__social__list">
            <a
              v-for="socialMedia in socialMedias"
              :key="socialMedia.title"
              :title="socialMedia.title"
              class="footer__content__social__list_item"
              :href="socialMedia.link"
              target="__blank"
            >
              <img
                :src="socialMedia.icon"
                :alt="socialMedia.title"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <p>&copy; {{ currentYear }} All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterApp",

  data() {
    return {
      currentYear: new Date().getFullYear(),

      contacts: [
        {
          icon: "img/icons/location.svg",
          type: "Address",
          text: "1234 Sample Street, Austin Texas 78704",
        },
        {
          icon: "img/icons/phone.svg",
          type: "Phone",
          text: "512.333.2222",
        },
        {
          icon: "img/icons/mail.svg",
          type: "E-Mail",
          text: "sample@shinodalabs.com.br",
        },
      ],

      socialMedias: [
        {
          icon: "img/icons/facebook.svg",
          link: "https://facebook.com",
          title: "Facebook",
        },
        {
          icon: "img/icons/twitter.svg",
          link: "https://twitter.com",
          title: "Twitter",
        },
        {
          icon: "img/icons/linkedin.svg",
          link: "https://linkedin.com",
          title: "Linkedin",
        },
        {
          icon: "img/icons/pinterest.svg",
          link: "https://pinterest.com",
          title: "Pinterest",
        },
      ],
    };
  },

  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style lang="scss">
.footer-wrapper {
  width: 100%;
  background: #2c2c2c;
  .footer {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    .footer__content {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      .footer__content__map_menu {
        .footer__content_menu {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          .footer__content_link {
            font-weight: 400;
            font-size: 14px;
            color: #ffffff;
            transition: 0.5s cubic-bezier(0.06, 0.29, 0.19, 1.4);
            &:hover {
              color: #bcbcbc;
            }
          }
        }
      }
      .footer__content__contacts {
        .footer__content__contacts__list {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          .footer__content__contacts__list_item {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20px;
            p {
              color: #ffffff;
              font-size: 14px;
              font-weight: 400;
            }
          }
        }
      }
      .footer__content__social {
        .footer__content__social__list {
          margin-top: 25px;
          display: flex;
          flex-direction: row;
          gap: 10px;
          .footer__content__social__list_item {
            padding: 10px;
          }
        }
      }
    }
  }
}

.footer__copyright {
  width: 100%;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 24px 0;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: #c8c8c8;
  text-transform: uppercase;
}

.footer__content_title {
  color: #bdbdbd;
  font-weight: 700;
  letter-spacing: 1px;
}

@media only screen and (max-width: 915px) {
  .footer-wrapper {
    .footer {
      .footer__content {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .footer__content__map_menu {
          .footer__content_menu {
            align-items: center;
            margin-top: 5px;
          }
        }
        .footer__content__contacts {
          .footer__content__contacts__list {
            align-items: center;
            margin-top: 5px;
            gap: 10px;
          }
        }
        .footer__content__social {
          .footer__content__social__list {
            margin-top: 5px;
          }
        }
      }
    }
  }

  .footer__content_title {
  text-align: center;
  margin-top: 40px;
}
}
</style>
