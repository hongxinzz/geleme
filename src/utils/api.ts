/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-11 11:15:01
 * @FilePath: /geleme/src/utils/api.ts
 * @LastEditTime: 2020-10-11 20:24:04
 * @不想有bug xinghe@gaoding.com
 */
import axios from 'axios';
import { apiConfig, globalConfig } from '../config/index';

const { listPage, sign, appid } = globalConfig;
const { listUrl, moreUrl } = apiConfig;

const defaultParmas = {
    showapi_sign: sign,
    showapi_appid: appid
};

/**
 * 股票列表
 */
export const getList = async () => {
    return await get(listUrl, { page: 1, maxResult: listPage, ...defaultParmas });
};

/**
 * 股票批量查询
 */
export const getMore = async (params: object) => {
    return await get(moreUrl, { ...params, ...defaultParmas });
};





/**
 * axios
 * @param url
 * @param params
 */
function get(url: string, params: object): Promise<Object> {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: { ...params } }).then(function (res) {
            if (res.data.showapi_res_code === 0) {
                resolve(res.data.showapi_res_body);
            } else {
                reject(new Error('您被割了么提醒您：数据获取失败！'));
            }
        });
    });
}