export default {
	props:["pageNo","pageSum"],
	template:(`
		<div class="page">
            <a @click="$bus.$emit('getWeibo',i)" v-for="i in pageSum" href="javascript:;" :class="{active:i===pageNo}">{{i}}</a>
        </div>
	`)
}