import { defineComponent } from 'vue';
import { useCounterStore } from '@/store';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'AboutPage',
  setup() {
    const counterStore = useCounterStore();
    const { count } = storeToRefs(counterStore);
    const { increment } = counterStore;
    return () => (
      <>
        <div>This is About Page</div>
        <button onClick={increment}>count from store {count.value}</button>
      </>
    );
  },
});
