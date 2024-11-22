<template>
    <h3>我是父组件App</h3>
    <hr/>
<!--    <Child :info="info">-->
<!--        <template v-slot="props">-->
<!--           <p :style="{-->
<!--               background:props.suibian.done?'green':'red'-->
<!--           }">{{props.$index}}|{{props.suibian.do}}</p>-->
<!--        </template>-->
<!--    </Child>-->


    <!--可以通过解构赋值的形式接收数据-->
<!--    <Child :info="info">-->
<!--        <template v-slot="{suibian,$index}">-->
<!--            <p :style="{-->
<!--               background:suibian.done?'green':'red'-->
<!--           }">{{$index}}|{{suibian.do}}</p>-->
<!--        </template>-->
<!--    </Child>-->

<!--    <Child :info="info">-->
<!--        <template v-slot:default="{suibian,$index}">-->
<!--            <p :style="{-->
<!--               background:suibian.done?'green':'red'-->
<!--           }">{{$index}}|{{suibian.do}}</p>-->
<!--        </template>-->
<!--    </Child>-->

<!--    <Child :info="info">-->
<!--        <template #default="{suibian,$index}">-->
<!--            <p :style="{-->
<!--               background:suibian.done?'green':'red'-->
<!--           }">{{$index}}|{{suibian.do}}</p>-->
<!--        </template>-->
<!--    </Child>-->

    <Child :info="info">
        <template #="{suibian,$index}">
            <p :style="{
               background:suibian.done?'green':'red'
           }">{{$index}}|{{suibian.do}}</p>
        </template>
    </Child>
</template>

<script lang="ts" setup>
import Child from "@/components/Child.vue";
import {ref} from "vue";

const info = ref([
    {
        id: 1,
        do: "吃了一个包子！",
        done: true
    }, {
        id: 2,
        do: "扶老太太过马路！",
        done: false
    }
    , {
        id: 3,
        do: "赚了1000万！",
        done: true
    }
]);
</script>

<style scoped>
</style>