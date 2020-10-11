/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-11 09:57:03
 * @FilePath: /geleme/src/extension.ts
 * @LastEditTime: 2020-10-11 19:16:28
 * @不想有bug xinghe@gaoding.com
 */

import * as vscode from "vscode";

import { Provider } from "./tree/Provider";

export async function activate(context: vscode.ExtensionContext) {
    // 股票类
    const provider = new Provider();
    // 注册一下左侧视图
    vscode.window.registerTreeDataProvider("geleme", provider);

    // 注册刷新任务
    vscode.commands.registerCommand("geleme.refresh", () => provider.refresh());

    // 注册添加任务
    vscode.commands.registerCommand("geleme.add", () => provider.addItem());

    // 注册删除任务
    vscode.commands.registerCommand("geleme.delete", (item) =>
        provider.deleteItem(item.code)
    );

    //时间轮询 默认为2
    let interval = vscode.workspace.getConfiguration().get("geleme.interval", 2);
    if (interval < 2) {
        interval = 2;
    }

    //  注册全局事件
    let disposable = vscode.commands.registerCommand("geleme", () => {});

    // 定时任务 //刷不起啊 接口要钱
    //   setInterval(() => {
    // 	provider.refresh();
    //   }, interval * 1000);

    context.subscriptions.push(disposable);
}

export function deactivate() {}
