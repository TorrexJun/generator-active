/**
 * @Description: 常量配置
 * @Author: tx
 * @Date: 2022-09-09 11:05:51
 * @LastEditTime: 2022-09-09 11:05:51
 * @LastEditors: tx
 */
// 生产地址
export const REAL_API_URL = '127.0.0.1:8081'
// 代理地址
export const PROXY_API_URL = '/api'
// 请求地址
export const BASE_URL: string = import.meta.env.DEV
  ? PROXY_API_URL
  : REAL_API_URL

export const TOKEN_NAME = 'Authorization'
