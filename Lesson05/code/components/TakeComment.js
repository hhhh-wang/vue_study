const template = (`
	<div class="takeComment">
       <textarea ref="contentRef" name="textarea" class="takeTextField" id="tijiaoText"></textarea>
       <div class="takeSbmComment">
           <input @click="postWeibo"  type="button" class="inputs" value="" />
       </div>
    </div>
`);
const methods = {
	async postWeibo(){
		const content = this.$refs.contentRef.value.trim();
		if(content.length === 0){
			alert("请输入微博内容！");
			return;
		}
		// 第二个参数是请求体：
		// 类型是对象：application/json
		// 类型是字符串：application/x-www-form-urlencoded
		const res = await this.$axios.post("/weibo",{
			content
		});
		this.$refs.contentRef.value = null;
		// 发布getWeibo消息
		this.$bus.$emit("getWeibo");
	}
}
export default {
	template,
	methods
}