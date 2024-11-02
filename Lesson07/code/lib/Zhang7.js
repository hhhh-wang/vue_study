function Zhang(config){
	// 增加实例属性$data
	this.$data = config.data;
	// 增加实例属性$el
	this.$el = document.querySelector(config.el);
	// 绑定数据下的订阅者
	this.binds = {};
	for(let key in config.methods){
		this[key] = config.methods[key].bind(this);
	}
	
	// 调用发布者
	this.observe();
	// 调用解析器
	this.compile(this.$el);
}
Object.assign(Zhang.prototype,{
	// 发布者:1- 侦听数据发生改变 2- 通知订阅者
	observe(){
		for(let key in this.$data){
			this.binds[key] = [];
			Object.defineProperty(this,key,{
				get(){
					return this.$data[key];
				},
				set(v){

					this.$data[key] = v;
					this.binds[key].forEach(item=>item.update())
				}
			})
		}
	},
	// 增加解析器
	compile(el){
		const nodes = el.children;
		for(let i=0;i<nodes.length;i++){
			// 获取要解析的具体元素
			const node = nodes[i];
			this.compile(node);
			// 判断元素是否拥有@click属性
			if(node.hasAttribute("@click")){
				const attrValue = node.getAttribute("@click");
				// 为node增加click事件
				node.addEventListener("click",this[attrValue])
			}
			// 判断元素是否使用了z-model
			if(node.hasAttribute("z-model")){
				// 获取到z-model的属性值
				const attrValue = node.getAttribute("z-model");// str
				// input的value属性值设置为data数据中的str属性值.
				node.value = this[attrValue];
				// 为node增加input事件
				node.addEventListener("input",(e)=>{
					// 更新str数据状态
					this[attrValue] = e.target.value;
				});
				// 提供一个修改node元素value属性值的方法
				// this.binds[attrValue].push(()=>{
				// 	node.value = this[attrValue];
				// });
				this.binds[attrValue].push(new Watcher(node,"value",this,attrValue))
			}
			if(node.hasAttribute("z-text")){
				const attrValue = node.getAttribute("z-text");
				node.innerText = this[attrValue];
				// 提供一个修改node元素的innerText属性值的方法
				// this.binds[attrValue].push(()=>{
				// 	node.innerText = this[attrValue];
				// })
				this.binds[attrValue].push(new Watcher(node,"innerText",this,attrValue))
			}
			if(node.hasAttribute("z-html")){
				const attrValue = node.getAttribute("z-html");
				node.innerHTML = this[attrValue];
				// 提供一个修改node元素的innerHTML属性值的方法
				// this.binds[attrValue].push(()=>{
				// 	node.innerHTML = this[attrValue];
				// });
				
				this.binds[attrValue].push(new Watcher(node,"innerHTML",this,attrValue))
			}
			
		}
	}
})
/*
* node:元素
* attr:元素属性名
* zm:实例
* prop:实例属性名
* */
function Watcher(node,attr,zm,prop){
	this.node = node;
	this.attr = attr;
	this.zm = zm;
	this.prop = prop;
}
Watcher.prototype.update = function(){
	// 将元素下的某个属性的值设置为实例中的状态下的某个属性值
	this.node[this.attr] = this.zm[this.prop];
}