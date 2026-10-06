# 行业笔记 · Agent 工作约定

给后续 AI / 协作者看的项目要求摘要。细节以代码与 `content/memos/` 为准；本文件只记**稳定规则**和**内容蒸馏标准**。

---

## 1. 产品是什么

个人行业研究 H5，同时是给普通人看的科普站：

```text
大厅 → 书 → 章
```

- **不是**把 Markdown 整篇上线。
- **是**从 `content/memos/*.md` 抽出「一个结论 + 一张主视觉」，按大厅 / 目录 / 章节让人读完。
- 读者不假设懂研报术语。判断可以尖锐，句子要让没读过研报的人看懂。
- 图表优先；数字必须带来源；页脚免责声明：「研究整理，不是投资建议。」
- 章末有私密提问框「还想看懂什么」——只收集、不公开展示，用于修订。

正式站：`https://research.alan-design.win`  
测试站：`https://test.research.alan-design.win`  
本机：`http://localhost:3000`

---

## 2. 技术栈与关键路径

| 路径 | 职责 |
| --- | --- |
| `lib/content.ts` | 全部已发布书与章节（中英 copy、数字、layout） |
| `lib/types.ts` | `ChapterLayout` / `ChartKind` / `ThesisPoint` 等 |
| `lib/locales.ts` | 启用语言与计划语言；业务代码不散落语言码 |
| `content/memos/` | 调研素材（源稿），核对数字用 |
| `components/ChapterBody.tsx` | 按 layout 渲染主视觉 |
| `components/Chart.tsx` | bar / pie / line |
| `components/BookCover.tsx` | 大厅/目录书封 SVG |
| `components/ChapterSketch.tsx` | 章节页示意图（按书+章或 layout） |
| `app/monitor/` | 多 appId 埋点汇总 |
| `README.md` | 多语言开发节奏（先中英） |

框架：Next.js App Router。路由：`/[locale]/[book]/[chapter]`。

---

## 3. 多语言（硬约束）

**开发期只做 `zh` + `en`。**  
计划语言：`ja` / `fr` / `de` / `es` / `ko` / `ar`（RTL）——**功能与内容定稿后再适配**，目标 UI 为单一按钮 + 下拉。

规则：

- 中文是源稿语义；英文同步同一章，**数字共用**。
- 缺英文的章：英文站不展示该章。
- 不要提前铺 8 套文案；不要在需求未稳时做 RTL。

---

## 4. 章节展示形态

每章选**一种**主 layout（可再配 chart kind）：

| layout | 用途 | 何时用 |
| --- | --- | --- |
| `chart` + `bar` | 多类目对照 | 渗透率、增速、收入量级 |
| `chart` + `line` | 时间序列 | 市占 27→41、价格轨迹 |
| `chart` + `pie` | 结构占比 | 收入拆分、份额结构 |
| `thesis` | 结论卡（判断 / 锚点 / 所以呢） | 机制、量级判断、风险、一页结论；可加 `contrast` 左右对照 |
| `compare` | 双栏 | 存量 vs 边际、脉冲 vs 大盘含义 |
| `timeline` | 时间线 | 政策/并购节点 |
| `matrix` | 对照表 | 受益排序、厂商敞口 |

**同一本书内 layout 要多样**，避免全书只剩柱图。  
**一章一个主视觉**；不要堆第二张完整大图。次要数字进 summary / contrast / 表单元格。

视觉增强（允许）：

- 书封 `BookCover`、章节 `ChapterSketch`：小幅 SVG 示意，帮助扫读。
- thesis 的 `contrast`、compare、matrix：把 memo 里的**关键表**变成可扫的结构，而不是整表粘贴。

图要自己把话说完：

- 读者先看到章节示意图（它在提问框和正文上面）。**图里必须写出这一章的关键数字和结论。**
- 两个空矩形、只有「vs」的占位图不算完成。例如对照章应直接画出「50 万吨 vs 45 万吨」，而不是等正文去解释。
- 图、表、正文用**同一组数字**。图一套、正文另一套，等于没说清。

不做：账号、公开评论、广告、付费、装饰性动画、整页插画相册。

---

## 5. 从 memo 到书：蒸馏标准

### 5.0 工作顺序

旧稿数据有限、表抓不住要点、或读者看不懂时，按这个顺序做，不要跳步：

1. **重新调研**公开源，补缺口。数字写来源、口径和日期。
2. **先落地 Markdown**，写进 `content/memos/`。这里放核对过的表、生活例子和「所以呢」。
3. **再做成页面**，蒸馏进 `lib/content.ts`。页面只留核心对照，不把文档整篇搬上去。

### 5.1 必保信息（缺了要补）

对照 `content/memos/` 与已上线章节时，至少覆盖：

1. **事件 / 催化剂**（发生了什么）
2. **结构性背景**（为什么不只是脉冲：渗透率、制度摩擦、政策）
3. **可核对数字**（海关、年报、市占、出货；带来源口径）
4. **对公司的量级**（惊喜 vs 改写大盘）
5. **竞争排序 / 对照表**（谁受益、谁敞口小）
6. **中期展望**（蛋糕 CAGR、公司一致预期）
7. **风险与失效条件**
8. **一页结论**（可映射回 frame 三问）

允许**重新调研**公开源补充 memo 缺口（法规窗口、并购对价、竞品份额等），但：

- 新数字必须写 `source`
- 与 memo 冲突时，在 summary 里标明口径或取常用锚点
- 不编造精确到未公开的财报细项

### 5.2 memo 里的表怎么处理

表的任务是抓住核心对照，不是把调研附录贴上来。每一行要能回答：这是什么、跟什么比、所以呢。

| memo 形态 | H5 做法 |
| --- | --- |
| 2–6 行关键对照 | `matrix` 或 `bar`/`line` |
| 财务一行指标 | `bar` + summary，或 thesis `contrast` |
| 长附录表 | **不整表上线**；抽 3–5 个决策相关格 |
| 受益排序星级 | matrix「本轮受益」列 |
| 时间节点列表 | `timeline` |

### 5.3 文案语气：投资者判断 + 科普能懂

- 短句、判断在前。stance = 态度句；summary = 一段读完；thesis：`judge` / `anchor` / `so`。
- 避免研报套话堆砌；避免把「不是投资建议」写进正文判断里（页脚已有）。
- **按这个产业的特性，用一个生活例子说明一个问题。** 例子解释机制，不另开一个无关故事，也不代替数字。
- 一章一个例子就够。术语第一次出现时，用这个例子或一句白话带过。
- 例子要具体到读者家里、街上、手机里能对上的东西。例如：铜是墙上的电线和充电器；锡是把芯片焊在板上的那一点焊锡；硫酸不是你看见的金属，而是把矿石里的铜洗出来的那瓶「洗涤剂」——没有它，矿石堆着也变不成金属。

### 5.4 发布门禁

- `released: true` 才出现在目录可点列表与英文可见性逻辑中。
- 中英都要有完整 copy（含 categories / points 等 layout 所需字段）。
- 改 `content.ts` 后应用 curl 或浏览器走：大厅 → 书 → 新章 → 中英切换。

---

## 6. 书架与素材映射

### 行业 / 公司书（`shelf: "industry"`）

| book id | 主素材 |
| --- | --- |
| `mining` | `全球矿业调研.md` 与 `global_mining_industry_research.md`，合成一本书 |
| `pharma` | `global_pharma_industry_research.md`（药明等可挂章节） |
| `solar` | `全球光伏产业调研_周期与竞争力.md` |
| `robots` | `全球机器人产业调研_特斯拉与宇树.md` |
| `semiconductor` | `a股半导体国产替代调研.md` |
| `moutai` | `kweichow_moutai_internationalization_research.md` |
| `hog` | `muyuan_hog_industry_research_report.md` |
| `meituan` | `meituan_3690_deep_research_report.md` |
| `midea` | `欧洲高温与美的家电分析报告.md` |

两份矿业稿合成一本书 `mining`。旧地址 `/metals` 转到 `/mining`。

### 配置（`shelf: "allocation"`）

| book id | 主素材 |
| --- | --- |
| `h1` | `h1_2026_market_review.md` |
| （路线图书） | `a股2026年8月交易逻辑与8-12月配置路线图.md` |

### 不上站

- `semiconductor_speech.md`（演讲稿）
- 作者私密确认问题、未核对数字的草稿表

公司稿默认挂进行业书章节；无行业书时可单独成书（茅台、猪、美团、美的等现状）。

---

## 7. 美的书（当前范例要求）

读框三问：热浪脉冲 vs 渗透长坡；PortaSplit 定义权 vs 夏日爆品；公司增速爆炸 vs 中高个位数。

建议章节骨架（可微调 id，但信息勿丢）：

| 章 | layout | 必保锚点 |
| --- | --- | --- |
| 渗透 / 热浪 | bar | 欧 ~20% vs 美日 ~90%；英德法低位 |
| PortaSplit | thesis | 免安装、黄牛价、H1 出货、F-Gas R32→R290 |
| H1 脉冲 | bar | 西欧空调 +70%、出口 +43%、免安装 +70% |
| 市占 | line | 中国品牌 27%→41%（可注 Euromonitor 三强 ~32%） |
| 量级 | compare | 脉冲兑现 vs 大盘仍中高个位数 |
| 海外底座 | bar / thesis | 海外 1959 / 总 4585、OBM>45%、Arbonia / TEKA / MBT |
| 展望 | thesis | 市场 CAGR ~6.4%、一致预期、采暖下一张票 |
| 受益排序 | matrix | 美的 > 海尔 > TCL/海信 > 格力；在位者中 |
| 风险 | thesis | F-Gas、关税、凉夏、电价电网、在位者 |
| 一页结论 | thesis | 导火索 / 赢家 / 稳健提质 / 格局 |

允许补充调研：PortaSplit 出货与溢价、Arbonia EV、F-Gas 时间窗、竞品渠道数字——均需来源句。

---

## 8. 埋点与监控

- 多 `appId` 采集；汇总在 `/monitor`。
- 改追踪或验收时，优先走既有 analytics 类型与 store，不另起平行协议。

---

## 9. 发布

推送到 GitHub **不会**单独发布。`main` 上的 `.github/workflows/deploy.yml` 才会构建并部署到 Cloudflare Workers（正式站和测试站是同一个 Worker）。

- 仓库 Secret 必须有 `CLOUDFLARE_API_TOKEN`（Cloudflare「Edit Cloudflare Workers」模板，范围限定当前账号）。没有它，Actions 的 deploy 步会以退出码 1 失败。Node 20 弃用提示和 Ubuntu 镜像通知不是失败原因。
- 账号 ID 写在 `wrangler.jsonc` 的 `account_id`，不要再另存一份进仓库。
- `package.json` 的 `build` 必须是 `next build`。写成 `opennextjs-cloudflare build` 会自己调用自己，部署停在构建循环里。
- 本机直接发布用 `npm run deploy`，前提是本机已经 `wrangler login`。本机登录不能代替 GitHub Secret。
- 密钥只放 GitHub Secrets 或本机，不写进仓库，不写进本文件。

浏览器：

- **不要新开浏览器。** 本机已经开着 Google Chrome，登录、令牌页、Actions 都沿用这个窗口。
- 不要再用 Playwright 或 `open` 另起一个浏览器。

---

## 10. Agent 工作时的检查清单

改内容前：

- [ ] 读对应 `content/memos/*.md` 的目录与关键表
- [ ] 数据有限或表说不清时：先调研，先改 memo，再改 `content.ts`
- [ ] 新数字写 source、口径和日期
- [ ] 选定 layout，保证与书内其他章有差异
- [ ] 表只留核心对照；每章一个生活例子，说明这一个产业问题
- [ ] 中英同步；图、表、正文用同一组数字
- [ ] `ChapterSketch` 把本章关键数字画出来，不用空占位图
- [ ] 验证 `released` 章节 URL（zh + en）

改工程前：

- [ ] 不扩散语言码；只动 `ACTIVE_LOCALES` 计划表之外的功能需先问
- [ ] 不提交密钥；不擅自 commit / push（除非用户明确要求）
- [ ] 大块替换 `content.ts` 时用脚本按 `id` 边界拼接，避免半截替换失败

---

## 11. 明确不做

- 把 memo 全文或全部附录表搬上 H5  
- 为每家公司再加第四层路由  
- 开发期做齐 8 语 / 语言下拉（见 README）  
- 公开评论、账号体系、付费墙  
- 无来源的精确业绩预测冒充事实  

---

*最后同步意图：这是研究站，也是科普站。调研先落 memo，再蒸馏成页面；表抓核心对照；图自己把数字说清；每种产业用一个生活例子讲清一个问题；中英先完工。*
