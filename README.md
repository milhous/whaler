# whaler

# Getting Started with NextJS

这个项目是使用引导程序启动的 [NextJS](https://beta.nextjs.org/docs/getting-started).

## 目录结构

```
|－ whaler
|     |－ @types 声明文件
|     |－ public 静态文件，可以从 base URL (/) 引用文件
|     |－ webpack webpack配置文件
|     |－ app 源文件
|           |－ api API 路由
|           |－ assets 公共静态资源
|                 |－ fonts 字体
|                 |－ images 图片
|                 |－ ...
|           |－ libs 公共库
|           |－ ui UI库
|                 |－ header 头部
|                 |－ footer 底部
|                 |－ ...
|           |－ widget Widget库
|                 |－ modal 弹窗
|                 |－ ...
|           |－ home 页面 - 首页
|                 |－ assets 静态资源
|                 |－ components 组件
|                 |－ utils 实用工具
|                 |－ types 类型声明
|           |－ nft 页面 - NFT类相关
|                 |－ ...
|           |－ services 页面 - 服务类相关
|                 |－ ...
|           |－ tools 页面 - 工具类相关
|                 |－ batchQueryBalance 批量查询余额
|                 |－ createWallet 批量生成钱包
|                 |－ moreToOne 代币批量归集
|                 |－ nftMoreToOne NFT 批量归集
|                 |－ nftSender NFT 批量发送
|                 |－ solanaMoreToOne Solana 批量归集
|                 |－ tokenSender 批量发送代币
|                 |－ vanityGeneratorEth 靓号生成
|                 |－ ...
|           |－ globals.scss 全局样式
|           |－ head.tsx head 内容相关
|           |－ layout.tsx 页面公共内容相关
|           |－ middleware.ts nextJS 中间件
|           |－ next.config NextJS 配置文件
|           |－ postcss.config Postcss 配置文件
|           |－ tailwind.config Tailwind 配置文件
```

## Available Scripts

在项目目录中，你可以运行：

### `yarn run dev`

在开发模式下运行应用程序。

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 以查看它。

当您进行更改时，页面将重新加载。

您还可以在控制台中查看任何 lint 错误。

### `yarn run build`

将应用程序构建为生产版本并输出到“.next”文件夹。

它会在生产模式下正确地捆绑 React，并优化构建以获得最佳性能。

该构建已被压缩，文件名包括哈希值。

您的应用程序已准备好部署！

### `yarn run start`

在生产模式下运行应用程序。

### `yarn run update`

更新依赖包版本号。

## Learn More

学习 React，请查看 [React documentation](https://reactjs.org/).

学习 NextJS，请查看 [NextJS documentation](https://beta.nextjs.org/docs/getting-started/).

学习 NextJS 示例，请查看 [NextJS Examples](https://app-dir.vercel.app/)

学习 Tailwindcss [Tailwindcss documentation](https://tailwindcss.com/docs/installation/).
