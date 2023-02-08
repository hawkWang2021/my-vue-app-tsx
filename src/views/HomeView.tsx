import HelloTsx from '@/components/HelloTsx';
import HelloWorld from '@/components/HelloWorld.vue';
import { defineComponent } from 'vue';
import { useCounterStore } from '@/store';
import { storeToRefs } from 'pinia';
import { ElButton } from 'element-plus';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const counterStore = useCounterStore();
    const { count } = storeToRefs(counterStore);
    const { increment } = counterStore;
    return () => (
      <>
        <div>This is Home Page</div>
        <HelloTsx />
        <HelloWorld msg="Vite + Vue" />
        <button onClick={increment}>count from store {count.value}</button>
        <ElButton>饿了吗?</ElButton>
      </>
    );
  },
});
