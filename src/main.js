import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faFacebook,
  faWordpress,
  faVuejs,
  faCss3,
  faJs,
  faNode,
  faPython,
  faPhp
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faInstagram,
  faTwitter,
  faGithub,
  faFacebook,
  faWordpress,
  faVuejs,
  faCss3,
  faJs,
  faNode,
  faPython,
  faPhp,
  faHeart
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
