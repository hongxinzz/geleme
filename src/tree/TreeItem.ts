/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-11 10:56:37
 * @FilePath: /geleme/src/tree/TreeItem.ts
 * @LastEditTime: 2020-10-11 20:07:10
 * @不想有bug xinghe@gaoding.com
 */
import { TreeItem } from "vscode";

export default class Items extends TreeItem {
    info: StockInfo;
    constructor(info: StockInfo) {
        const rate = Number(info.diffRate);
        const icon = rate >= 0 ? "📈" : "📉";
        const prev = rate >= 0 ? "+" : "-";
        const rage = `${prev}${Math.abs(rate)}%`;

        super(`📊  ${info.name}      💰 ${Number(info.nowPrice).toFixed(2)}      ${icon} ${rage}`);

        const tips = [
            `代码:　${info.code}`,
            `名称:　${info.name}`,
            `--------------------------`,
            `开盘价:　　　　 ${info.openPrice}`,
            `涨跌幅:　　　　　${info.diffRate}%`,
            `涨跌额:　　　　　${info.diffMoney}`,
            `现价:　　　　　　${info.nowPrice}`,
        ];

        this.info = info;
        this.tooltip = tips.join("\r\n");
    }
}
