import PageList from "./PageList.js";
const template = (`
	<div class="commentOn">
        <div class="noContent" v-show="contentList.length===0">暂无留言</div>
        <div class="messList">
            <div v-for="item in contentList" :key="item._id" class="reply">
                <p class="replyContent">{{item.content}}</p>
                <p class="operation">
                    <span class="replyTime">{{item.addTime | date}}</span>
                    <span class="handle">
                        <a href="javascript:;" @click="putWeibo(item._id,1)" class="top">{{item.topNum}}</a>
                        <a href="javascript:;" @click="putWeibo(item._id,2)" class="down_icon">{{item.downNum}}</a>
                        <a href="javascript:;" @click="deleteWeibo(item._id)" class="cut">删除</a>
                    </span>
                </p>
            </div>
        </div>
        <page-list :page-sum="pageSum" :page-no="pageNo"></page-list>
    </div>
`);
export default {
	template,
	data(){
		return {
			contentList:[],
			pageNo:1,// 当前页
			pageSum:1// 总页数
		}
	},
	components:{
		PageList
	},
	methods:{
		async getWeibo(pageNo=1){
			const {contentList,pageNo:pageIndex,pageSum} = await this.$axios.get(`/weibo/${pageNo}?pageSize=3`);
			this.contentList = contentList;
			this.pageNo = pageIndex;
			this.pageSum = pageSum;
		},
		async putWeibo(id,type){
			await this.$axios.put(`/weibo/${id}/${type}`);
			this.getWeibo(this.pageNo);
		},
		async deleteWeibo(id){
			await this.$axios.delete(`/weibo/${id}`);
			this.getWeibo(this.pageNo);
		}
	},
	filters:{
		date(t){
			const timer = new Date(t);
			return timer.getFullYear() + "-" +
				(timer.getMonth() + 1).toString().padStart(2, 0) + "-" +
				timer.getDate().toString().padStart(2, 0) + " " +
				timer.getHours().toString().padStart(2, 0) + ":" +
				timer.getMinutes().toString().padStart(2, 0) + ":" +
				timer.getSeconds().toString().padStart(2, 0);
		}
	},
	mounted(){
		this.getWeibo();
		this.$bus.$on("getWeibo",this.getWeibo)
	}
}