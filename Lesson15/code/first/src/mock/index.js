import Mock from "mockjs";
import focusList from "./focus.json";
import floorList from "./floor.json";
// 执行之后，那么在你发送ajax请求时会被拦截。
// 拦截的条件：
// 1- 请求地址为/my
// 2- 请求方式为get
// 注意：
// 1- mock接收的第三个参数是响应体，第一个参数是地址，第二个参数是请求方式
// 2- 被拦截下来的ajax请求（xhr,fetch）在网络中是无法查看的。
Mock.mock("http://mock.com/adv/focus","get",{
    ok:200,
    data:focusList
})

// 获取轮播图底部的广告推荐商品
Mock.mock("http://mock.com/adv/topToday","get",{
    ok:200,
    data:[
        {
            id:1,
            imgUrl:"https://img14.360buyimg.com/n7/jfs/t1/160926/36/39154/42521/64cb95fbF17e9f5e2/46825eec5d36a9ac.jpg"
        },
        {
            id:2,
            imgUrl:"https://img12.360buyimg.com/n7/jfs/t1/114451/20/35763/328474/64cc52aeF75e02e83/a679d35a86500c90.png"
        },
        {
            id:3,
            imgUrl:"https://img10.360buyimg.com/n7/jfs/t1/118684/21/39853/31096/649182eaF26d07904/02445a2475df50e1.jpg"
        },{
            id:4,
            imgUrl:"https://img11.360buyimg.com/n7/jfs/t1/131081/19/39374/78410/64c77f21F7c291b6a/cb18f952320466fd.jpg"
        }

    ]
})
// 楼层数据
Mock.mock("http://mock.com/product/floorList","get",{
    ok:200,
    data:floorList
})