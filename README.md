# project-a

这是一个拉取 github npm registry 的示例。
这个项目同时是使用 renovate github action 更新 package 依赖的示例。

## 配置

根据[文档](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) 配置 personal access token，允许 package:read 权限。
配置 ~/.npmrc 配（可以在全局，也可以在项目中配置）：

```shell
# TOKEN 为第一步中拿到的 personal access token
//npm.pkg.github.com/:_authToken=TOKEN
# toyfield 为 github 名称，自行替换
@toyfield:registry=https://npm.pkg.github.com
```