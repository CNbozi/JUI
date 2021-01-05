import { defineComponent } from 'vue';
import './index.scss';

const Footer = defineComponent({
  setup() {
    return () => (
      <footer class='footer'>
        <div class='footer__container'>
          <div class='footer__tips'>
            Made for 👸Lumos by Desmond
          </div>
        </div>
      </footer>
    );
  },
});

export default Footer;
