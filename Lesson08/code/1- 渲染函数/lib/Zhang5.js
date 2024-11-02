function Zhang(config){
	// 增加实例属性$data
	this.$data = config.data;
	// 增加实例属性$el
	this.$el = document.querySelector(config.el);
	// 调用解析器
	this.compile();
}
Object.assign(Zhang.prototype,{
	// 增加解析器
	compile(){
		const nodes = this.$el.children;
		for(let i=0;i<nodes.length;i++){
			// 获取要解析的具体元素
			const node = nodes[i];
			// 判断元素是否使用了z-model
			if(node.hasAttribute("z-model")){
				// 获取到z-model的属性值
				const attrValue = node.getAttribute("z-model");// str
				// input的value属性值设置为data数据中的str属性值.
				node.value = this.$data[attrValue];
				// 为node增加input事件
				node.addEventListener("input",(e)=>{
					// 更新str数据状态
					this.$data[attrValue] = e.target.value;
				});
			}
			if(node.hasAttribute("z-text")){
				const attrValue = node.getAttribute("z-text");
				node.innerText = this.$data[attrValue];
			}
			if(node.hasAttribute("z-html")){
				const attrValue = node.getAttribute("z-html");
				node.innerHTML = this.$data[attrValue];
			}
			
		}
	}
})