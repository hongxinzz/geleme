/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-11 11:29:41
 * @FilePath: /geleme/src/config/index.ts
 * @LastEditTime: 2020-10-11 19:16:03
 * @不想有bug xinghe@gaoding.com
 */
interface ApiConfig {
    listUrl: string
    moreUrl: string
}

interface GlobalConfig {
    name: string
    listPage?: number
    showWelcome: Boolean
    sign: string
    appid: number
    defaultStock: Array<number>
}

const apiConfig: ApiConfig = {
    // api 地址相关的
    listUrl: "https://route.showapi.com/1807-1", //列表数据
    moreUrl: "https://route.showapi.com/131-46", //多个股票查询
};

const globalConfig: GlobalConfig = {
    name: "请设置您的用户名",
    listPage: 10,
    showWelcome: true,
    sign: "aa39b6db8f5149618f7d01d478706f58",
    appid: 88655,
    defaultStock: [300750, 601012, 600999, 600519],
};

export { apiConfig, globalConfig };
