export default {
    props: ["pageNo", "pageSum"],
    template: (`
        <div class="page">
            <a 
                v-for="i in pageSum" 
                href=";" 
                :class="{ active: i === pageNo }" 
                @click="$bus.$emit('getWeibo', i)"
            >
                {{ i }}
            </a>
        </div>
    `)
}
