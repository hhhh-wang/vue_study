import maizuo from "@/request/maizuo";
export const getGateway = function(pageNum,pageSize,type){
	return maizuo.get("/gateway",{
		params:{
			cityId:310100,
			pageNum,
			pageSize,
			type,
			t:Date.now()
		}
	})
}
