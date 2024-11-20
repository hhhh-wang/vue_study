<template>
    <div>
        <input ref="inputRef" v-if="isEdit" v-model="str" type="text">
        <span v-else>{{ str }}</span>

        <button @click="onEdit">{{isEdit?"完成":"编辑"}}</button>
    </div>
</template>
<script setup lang="ts">
import {ref, nextTick, reactive} from "vue";

let str = ref("你现在过的还好吗？");
let isEdit = ref(false);
let inputRef = ref();
const onEdit = function(){
    isEdit.value = !isEdit.value;
    if(isEdit.value){
        nextTick(function(){
            inputRef.value.focus();
        })

    }
}
</script>