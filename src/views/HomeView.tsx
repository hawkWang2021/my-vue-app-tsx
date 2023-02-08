import HelloTsx from '@/components/HelloTsx';
import HelloWorld from '@/components/HelloWorld.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    return () => (
      <>
        <div>This is Home Page</div>
        <HelloTsx />
        <HelloWorld msg="Vite + Vue" />
      </>
    );
  },
});
