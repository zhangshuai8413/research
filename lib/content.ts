import type { Book, Chapter, Locale } from "./types";
import { chapterReady } from "./chapter";

function draft(id: string, zh: string, en: string): Chapter {
  return { id, released: false, zh: { title: zh }, en: { title: en } };
}

export const books: Book[] = [
  {
    id: "mining",
    shelf: "industry",
    updated: "2026-09-30",
    frame: {
      zh: {
        title: "读这本先问三句",
        points: [
          "这一年不是所有金属一起涨。黄金回落的时候，铜的仓库仍可以很紧。",
          "机房大约吃掉今年多出来的铜。铁矿仍看中国的钢筋。",
          "看好铜价，不等于矿企下一年利润更高：还要扣产量、成本和政府拿走的那一截。",
        ],
      },
      en: {
        title: "Three questions for this book",
        points: [
          "The metals did not rise together. Gold can fall while a copper warehouse stays tight.",
          "Data-center buildings take about this year’s extra copper. Iron ore still follows China’s rebar.",
          "Liking the copper price is not higher next-year miner profit: volumes, costs, and the government’s cut still matter.",
        ],
      },
    },
    zh: {
      title: "全球矿业：铜为王、铁为盾",
      stance: "先分清是哪种金属，再看哪家矿企",
      blurb: "电线、钢筋、黄金和硫酸在前。矿企的利润、税和可能被证伪的信号在后。",
    },
    en: {
      title: "Global mining: copper over iron",
      stance: "Name the metal first, then the miner",
      blurb: "Wire, rebar, gold, and acid come first. Miner profit, tax, and what would break the view come after.",
    },
    chapters: [
      {
        id: "summary",
        released: true,
        layout: "thesis",
        source: "ICSG 2026-04-23；Kpler 2026-07-17；Westmetall 2026-09-24；LME 2026-09-21至25；CRU 2026-09-18",
        zh: {
          title: "五句就够",
          stance: "先分清是电线、钢筋，还是备用的钱",
          summary:
            "铜是充电线和墙上的电线，金是不想只拿一种钱时留着的备用现金，铁是小区里的钢筋。今年这三样不是一个故事。",
          points: [
            {
              judge: "全年账本和仓库不是一回事",
              contrast: {
                left: "9.6万吨",
                leftLabel: "ICSG：2026 年精铜过剩",
                right: "106美元",
                rightLabel: "9 月下旬现货比三个月贵（8 月中曾到 544）",
              },
              anchor: "全年可以略有富余，某一地的仓库仍可以很紧。",
              so: "别把 8 月的挤兑写成「今年全世界的铜不够」。",
            },
            {
              judge: "机房和 AI 要拆开",
              contrast: {
                left: "50万吨",
                leftLabel: "数据中心建设用铜，30–70 的中枢",
                right: "10–20万吨",
                rightLabel: "其中真正因 AI 设计多出来的",
              },
              anchor: "50 万吨大约等于今年全球多出来的 45 万吨需求。AI 那一层更小。",
              so: "看见 AI，先问这是整栋机房，还是多出来的那一层。",
            },
            {
              judge: "铁矿看的是钢筋",
              contrast: {
                left: "0.5%",
                leftLabel: "AI 相关的钢 ÷ 一年全球粗钢",
                right: "−36%",
                rightLabel: "中国地产用钢，相对 2020 年峰值",
              },
              anchor: "小区少用的钢筋，比数据中心的钢梁大得多。",
              so: "看到「AI 金属」，先确认它是不是铁矿。",
            },
            {
              judge: "黄金从高点回落",
              contrast: {
                left: "5627",
                leftLabel: "1 月 29 日高点，美元/盎司",
                right: "4256",
                rightLabel: "9 月 24 日伦敦定盘，约 −24%",
              },
              anchor: "备用的钱也会跌。年内涨跌幅这次没有重算。",
              so: "贵，不等于今年还在创新高。",
            },
            {
              judge: "硫酸是洗涤剂",
              contrast: {
                left: "5月",
                leftLabel: "中国暂停硫酸出口",
                right: "280万吨",
                rightLabel: "CRU：2026 年贸易市场少掉的量",
              },
              anchor: "矿石像脏衣服。没有酸，就洗不出铜和铀。",
              so: "8 月稿的硫磺涨 160%、缺口 510 万吨，没有新报价，这里不用。",
            },
          ],
        },
        en: {
          title: "Five sentences",
          stance: "Separate the wire, the rebar, and the cash reserve",
          summary:
            "Copper is the charger cable and the wire in the wall. Gold is cash kept so you are not holding only one kind of money. Iron is the rebar in an apartment block. This year those three are different stories.",
          points: [
            {
              judge: "The year’s ledger and the warehouse differ",
              contrast: {
                left: "96 kt",
                leftLabel: "ICSG: 2026 refined-copper surplus",
                right: "$106",
                rightLabel: "Late-Sep cash over 3M (about $544 in mid-August)",
              },
              anchor: "The year can show a small surplus while one region’s warehouse stays tight.",
              so: "Do not turn August’s squeeze into “the world ran out of copper.”",
            },
            {
              judge: "Split the building from the AI slice",
              contrast: {
                left: "0.50 Mt",
                leftLabel: "Copper in data-center construction, midpoint of 0.30–0.70",
                right: "0.10–0.20 Mt",
                rightLabel: "The extra from AI designs",
              },
              anchor: "0.50 Mt is about this year’s 0.45 Mt of extra global demand. The AI layer is smaller.",
              so: "When a sentence says AI, ask whether it means the whole building.",
            },
            {
              judge: "Iron ore is about rebar",
              contrast: {
                left: "0.5%",
                leftLabel: "AI-related steel ÷ one year of world steel",
                right: "−36%",
                rightLabel: "China property steel vs the 2020 peak",
              },
              anchor: "The steel apartments stopped using dwarfs the steel in data centers.",
              so: "If a label says AI metal, check that it is not iron ore.",
            },
            {
              judge: "Gold is down from the high",
              contrast: {
                left: "5627",
                leftLabel: "29 Jan peak, $/oz",
                right: "4256",
                rightLabel: "24 Sep London fix, about −24%",
              },
              anchor: "A cash reserve can fall. Year-to-date percentages were not recalculated.",
              so: "Expensive does not mean it is still making highs.",
            },
            {
              judge: "Sulfuric acid is the detergent",
              contrast: {
                left: "May",
                leftLabel: "China halted acid exports",
                right: "2.8 Mt",
                rightLabel: "CRU: tonnes leaving the 2026 trade",
              },
              anchor: "Ore is the dirty laundry. Without acid you do not get the copper or the uranium out.",
              so: "The August sulfur +160% and 5.1 Mt gap have no new quote, so they are not used here.",
            },
          ],
        },
      },
      {
        id: "panorama",
        released: true,
        layout: "compare",
        source: "Westmetall 2026-09-23/24；LME Weekly Review 2026-09-21至25；ICSG 2026-04-23",
        zh: {
          title: "同一年的两个故事",
          stance: "黄金在回落，铜的仓库紧过一阵",
          summary:
            "黄金像家里留着的备用现金。铜是墙上的电线。左边看离高点多远，右边看仓库还紧不紧。",
          compare: {
            left: {
              name: "黄金：备用的钱",
              lines: [
                "1 月 29 日高点约 5,627 美元/盎司",
                "6 月 30 日低点约 3,955",
                "9 月 24 日伦敦定盘 4,256，较高点约 −24%",
                "它不是手机里用掉的那点金属",
              ],
            },
            right: {
              name: "铜：墙上的电线",
              lines: [
                "8 月 17 日，现货比三个月贵约 544 美元/吨",
                "9 月 21–25 日当周，这个差价收到约 106 美元",
                "仓库大约 25 万吨，不再是被搬空的样子",
                "全年账本仍是过剩约 9.6 万吨（ICSG，4 月 23 日）",
              ],
            },
          },
        },
        en: {
          title: "Two stories in one year",
          stance: "Gold is off the high; copper’s warehouse was tight for a while",
          summary:
            "Gold is cash kept at home. Copper is the wire in the wall. Left: how far gold is from the peak. Right: whether the warehouse is still tight.",
          compare: {
            left: {
              name: "Gold: the cash reserve",
              lines: [
                "Peak about $5,627/oz on 29 January",
                "Trough about $3,955 on 30 June",
                "London fix $4,256 on 24 September, about −24% from the peak",
                "This is not the trace of metal inside a phone",
              ],
            },
            right: {
              name: "Copper: the wire in the wall",
              lines: [
                "On 17 August, cash was about $544/t over three-month",
                "In the week of 21–25 September that premium was about $106",
                "Stocks were about 250 kt, no longer an emptied warehouse",
                "The year’s ledger is still a surplus of about 96 kt (ICSG, 23 April)",
              ],
            },
          },
        },
      },
      {
        id: "copper",
        released: true,
        layout: "timeline",
        source: "LME Weekly Review 2026-09-21至25；Westmetall 2026-09-23；Reuters 2026-09-10；SMM 2026-09-29",
        zh: {
          title: "铜：仓库紧，不等于全年缺",
          stance: "8 月是挤兑，9 月升水收窄了",
          summary:
            "充电线和墙上的电线都是铜。饭桌已经坐满时，多来的客人会把今年新加的饭吃完，所以最后一碗定价。那桌客人主要是机房，不是 AI 单独一桌。全年账本（ICSG）仍是过剩约 9.6 万吨。",
          timeline: [
            { when: "4 月中起", what: "LME 可用库存流失，到 8 月初大约少了 75%" },
            { when: "8 月 17 日", what: "现货比三个月贵约 544 美元/吨" },
            { when: "8 月 18 日", what: "交仓之后，差价回到约 248 美元；三个月铜约 13,987" },
            { when: "9 月 21–25 日", what: "三个月铜约 14,623；升水约 106 美元；总库存约 25.2 万吨" },
            { when: "到 9 月 29 日", what: "精炼铜关税仍没有最终决定。没有公告，不等于取消" },
          ],
        },
        en: {
          title: "Copper: a tight warehouse is not an empty year",
          stance: "August was a squeeze; the September premium narrowed",
          summary:
            "Copper is the charger cable and the wire in the wall. When the table is already full, extra guests finish the rice added this year, so the last bowl sets the price. Those guests are mostly data-center buildings, not AI on its own. ICSG’s ledger for the year is still a surplus of about 96 kt.",
          timeline: [
            { when: "From mid-April", what: "LME available stocks drained, about 75% lower by early August" },
            { when: "17 Aug", what: "Cash about $544/t over three-month" },
            { when: "18 Aug", what: "After deliveries the premium fell to about $248; three-month copper about $13,987" },
            { when: "21–25 Sep", what: "Three-month about $14,623; premium about $106; stocks about 252 kt" },
            { when: "Through 29 Sep", what: "No final decision on a refined-copper tariff. Silence is not a cancellation" },
          ],
        },
      },
      {
        id: "uranium",
        released: true,
        chart: "bar",
        values: [90, 97],
        source: "TradeTech 2026-09-15 当周（FNArena 引述）；UxC 长期指标 9 月初约 96 美元/磅",
        zh: {
          title: "铀：电费愿意签长约",
          stance: "长协比现货贵，买的是夜里也有电",
          summary:
            "医院的灯夜里不能关，太阳能一到天黑就没了。核电站吃的是铀。9 月中旬现货约 90 美元/磅，长期合同约 97。数据中心用电要看 IEA 的路径：2024 年约 415 太瓦时，2030 年约 950，不是 2026 年已经超过 1,000。",
          categories: ["现货", "长期合同"],
          seriesName: "美元 / 磅",
          suffix: "",
        },
        en: {
          title: "Uranium: utilities pay up for a long contract",
          stance: "Term is above spot because the lights have to stay on",
          summary:
            "A hospital cannot switch the lights off at night, and solar goes dark. A reactor runs on uranium. In mid-September spot was about $90/lb and the long-term indicator about $97. Data-center power follows the IEA path: about 415 TWh in 2024 and about 950 TWh in 2030, not “already above 1,000 TWh in 2026.”",
          categories: ["Spot", "Term"],
          seriesName: "$ / lb",
          suffix: "",
        },
      },
      {
        id: "ai-tiers",
        released: true,
        layout: "matrix",
        source: "Kpler 2026-07-17；IEA《Energy and AI》；TradeTech 2026-09-15；CRU 2026-09-18；中钢协 2026-09-17",
        zh: {
          title: "一张表看完",
          stance: "先问你在生活里在哪遇见它",
          summary:
            "每种金属只记一个问题和一个数字。电工钢是变压器铁芯，交期可以拉到四五年，但这本书里的矿商几乎买不到它。",
          matrix: {
            headers: ["生活里在哪", "AI 算不算", "记住一个数"],
            rows: [
              { label: "铜", cells: ["充电线、墙上的电线", "机房大约等于今年增量；AI 只是其中 10–20 万吨", "50 万吨对 45 万吨"] },
              { label: "铀", cells: ["核电站，给不能断电的地方供电", "算，但是往后几年的电，不是今年已经 1,000 太瓦时", "长协 97 > 现货 90"] },
              { label: "铝", cells: ["易拉罐、窗框", "铜太贵时，电缆可以改用铝", "不是今年的主线"] },
              { label: "锡", cells: ["电路板上把芯片焊住的那一点", "算一点", "9 月 25 日库存 4,590 吨"] },
              { label: "铁矿", cells: ["小区里的钢筋", "几乎不算", "0.5% 对 −36%"] },
              { label: "硫酸", cells: ["不是金属，是洗涤剂", "没有它，铜和铀都洗不出来", "5 月停出口，贸易少约 280 万吨"] },
            ],
          },
        },
        en: {
          title: "One table",
          stance: "Start from where you already meet the metal",
          summary:
            "One problem and one number per metal. Electrical steel is the core of a transformer, and lead times can stretch to four or five years, but the miners in this book barely own it.",
          matrix: {
            headers: ["Where you meet it", "Does AI count", "One number"],
            rows: [
              { label: "Copper", cells: ["Charger cable, wire in the wall", "Buildings ≈ this year’s growth; AI is 0.10–0.20 Mt of that", "0.50 Mt vs 0.45 Mt"] },
              { label: "Uranium", cells: ["Reactors, for lights that stay on", "Yes, over several years — not 1,000 TWh already in 2026", "Term 97 > spot 90"] },
              { label: "Aluminium", cells: ["Cans and window frames", "Cable can switch when copper is expensive", "Not this year’s main line"] },
              { label: "Tin", cells: ["The solder dot holding a chip", "A little", "Stocks 4,590 t on 25 Sep"] },
              { label: "Iron ore", cells: ["Rebar in an apartment block", "Barely", "0.5% vs −36%"] },
              { label: "Acid", cells: ["Not a metal. The detergent", "Without it, copper and uranium stay in the rock", "Halt in May; about 2.8 Mt less trade"] },
            ],
          },
        },
      },
      {
        id: "rebar",
        released: true,
        layout: "compare",
        source: "中钢协 2026-09-17；地产用钢相对 2020 年峰值 −36.5%；数据中心用钢相对全球粗钢约 0.5%",
        zh: {
          title: "铁矿：看钢筋，不看机房",
          stance: "中国少盖的楼，比 AI 多出来的钢大得多",
          summary:
            "铁矿是小区里的钢筋。数据中心也用钢，相对一年的全球粗钢大约 0.5%。中国地产用钢比 2020 年峰值少了大约 36%。8 月全国粗钢日产 241 万吨。1–8 月 6.52 亿吨，按这个进度全年大约 9.8 亿吨，9.5 亿和 10 亿的分歧还在。",
          compare: {
            left: {
              name: "几乎可以忽略",
              lines: [
                "0.5%：数据中心的钢，相对一年全球粗钢",
                "未来五年最多大约 1,000 万吨钢",
                "全球一年粗钢大约 19 亿吨",
                "所以 AI 解释不了铁矿价格",
              ],
            },
            right: {
              name: "真正在定价",
              lines: [
                "−36%：中国地产用钢，相对 2020 年峰值",
                "8 月粗钢日产 240.68 万吨，同比 −3.7%",
                "1–8 月粗钢 6.52 亿吨，同比 −3.1%",
                "按进度全年约 9.8 亿吨，方向还没定死",
              ],
            },
          },
        },
        en: {
          title: "Iron ore: watch the rebar, not the data center",
          stance: "The steel China stopped using in apartments dwarfs AI steel",
          summary:
            "Iron ore is the rebar in an apartment block. Data centers use steel too, about 0.5% of one year of world crude steel. China property steel is about 36% below the 2020 peak. August national crude steel ran at 2.41 million tonnes a day. January–August was 652 million tonnes; that pace is about 980 million tonnes for the year. The 950-versus-1,000 million tonne argument is still open.",
          compare: {
            left: {
              name: "Small enough to ignore",
              lines: [
                "0.5%: data-center steel against one year of world crude steel",
                "At most about 10 million tonnes of steel over five years",
                "About 1.9 billion tonnes of crude steel in a single year",
                "AI does not explain the iron-ore price",
              ],
            },
            right: {
              name: "What actually prices it",
              lines: [
                "−36%: China property steel versus the 2020 peak",
                "August crude steel 2.4068 Mt a day, −3.7% year on year",
                "January–August crude steel 652 Mt, −3.1%",
                "That pace is about 980 Mt for the year. The direction is not settled",
              ],
            },
          },
        },
      },
      {
        id: "precious",
        released: true,
        chart: "bar",
        values: [5627, 3955, 4256],
        source: "1 月 29 日高点与 6 月 30 日低点见调研稿；Westmetall 伦敦定盘 2026-09-24 为 4,255.55",
        zh: {
          title: "黄金：备用的钱也会跌",
          stance: "较高点大约低了 24%",
          summary:
            "黄金不是手机里用掉的那种金属。它更像家里留着的备用现金：不是明天要花，是不想只拿一种钱。1 月高点 5,627，6 月低点 3,955，9 月 24 日伦敦定盘 4,256。峰值不能拿来给金矿估值。年内涨跌幅这次没有重算。",
          categories: ["1 月高点", "6 月低点", "9 月 24 日"],
          seriesName: "黄金美元/盎司",
          suffix: "",
        },
        en: {
          title: "Gold: the cash reserve can fall",
          stance: "About 24% below the high",
          summary:
            "Gold is not the metal a phone uses up. It is closer to cash kept at home: not for tomorrow’s shopping, but so you are not holding only one kind of money. The January high was 5,627, the June low 3,955, and the 24 September London fix 4,256. Do not value a gold mine on the peak. Year-to-date percentages were not recalculated.",
          categories: ["Jan peak", "Jun low", "24 Sep"],
          seriesName: "Gold $/oz",
          suffix: "",
        },
      },
      {
        id: "acid",
        released: true,
        layout: "thesis",
        source: "Bloomberg 2026-04-10；CRU / BC Insight 2026-05-27 与 2026-09-18。Cigar Lake 停产 12 天仍是 8 月稿，本次未重核公司公告",
        zh: {
          title: "硫酸：矿石的洗涤剂",
          stance: "缺的有时是酸，不是矿",
          summary:
            "铜矿石和铀矿石像脏衣服，硫酸是洗涤剂。2026 年 5 月起中国暂停硫酸出口，4 月只是通报。CRU 估计今年贸易市场少大约 280 万吨。智利到岸价从年初约 190 美元/吨升到 5 月约 500，后来从高点回落。8 月稿的涨 160% 和缺口 510 万吨不再引用。",
          points: [
            {
              judge: "5 月才停",
              contrast: {
                left: "5月",
                leftLabel: "暂停出口。4 月是通报",
                right: "280万吨",
                rightLabel: "CRU：2026 年贸易市场少掉的量",
              },
              anchor: "1–4 月还有大约 70 万吨出口配额。",
              so: "记月份和 280 万吨，不记那张没有新报价的涨幅榜。",
            },
            {
              judge: "铜和铀一起被卡住",
              anchor: "智利、刚果金把铜从矿石里洗出来，铀选厂也要酸。Cigar Lake 7 月断酸停产约 12 天，这句仍是 8 月稿。",
              so: "没有新的公司公告之前，不把 12 天写成新事实。",
            },
            {
              judge: "镍也吃酸",
              anchor: "印尼用酸从红土镍矿里提出镍。",
              so: "盯酸能不能运到，不必为了这个判断再单买一只酸。",
            },
          ],
        },
        en: {
          title: "Sulfuric acid: the detergent for ore",
          stance: "Sometimes the shortage is the acid, not the ore",
          summary:
            "Copper ore and uranium ore are dirty laundry. Sulfuric acid is the detergent. China halted acid exports from May 2026; April was the notice. CRU estimates about 2.8 million tonnes left the traded market this year. Chile’s delivered price rose from about $190/t at the start of the year to about $500/t in May, then eased. The August +160% and 5.1 Mt gap are not used.",
          points: [
            {
              judge: "The halt is May",
              contrast: {
                left: "May",
                leftLabel: "Exports halted. April was the notice",
                right: "2.8 Mt",
                rightLabel: "CRU: tonnes leaving the 2026 trade",
              },
              anchor: "January–April still had an export quota of about 0.7 Mt.",
              so: "Keep the month and the 2.8 Mt. Drop the unverified percentage board.",
            },
            {
              judge: "Copper and uranium stall together",
              anchor: "Chile and the DRC wash copper out of ore, and uranium mills need acid too. Cigar Lake’s roughly 12-day July stop is still the August draft.",
              so: "Without a fresh company notice, do not treat the 12 days as a new fact.",
            },
            {
              judge: "Nickel uses acid too",
              anchor: "Indonesia uses acid to pull nickel out of laterite ore.",
              so: "Watch whether the acid can ship. That does not require a separate acid stock.",
            },
          ],
        },
      },
      {
        id: "zijin",
        released: true,
        layout: "compare",
        source: "紫金矿业 2026 年半年度报告（2026-08-22 摘要）",
        zh: {
          title: "紫金：金价跌了，矿挖得更多",
          stance: "用正式半年报，不用业绩预告",
          summary:
            "这是中国最大的金铜矿商之一。金价从高点跌下来，矿产金仍有 46,702 千克，同比 +13.4%。归母净利润 391.70 亿元，+68.17%。当量碳酸锂 4.4 万吨。预告里的 +15% 和 +514% 不再使用。",
          compare: {
            left: {
              name: "正式数字",
              lines: [
                "归母净利润 391.70 亿元，+68.17%",
                "扣非 380.35 亿元，+75.89%",
                "矿产金 46,702 千克，+13.4%",
                "当量碳酸锂 4.4 万吨",
              ],
            },
            right: {
              name: "怎么读",
              lines: [
                "单价跌了，卖出的杯数更多，总账还可以涨",
                "这和少挖、把现金还给股东的路不一样",
                "铜产量仍受卡莫阿拖累",
                "矿山在很多国家，政治风险是标配",
              ],
            },
          },
        },
        en: {
          title: "Zijin: the gold price fell, and they mined more",
          stance: "Use the formal half-year report, not the preview",
          summary:
            "One of China’s largest gold-and-copper miners. Gold fell from its high, and mined gold was still 46,702 kg, up 13.4%. Net profit attributable to shareholders was RMB 39.170 billion, up 68.17%. Lithium carbonate equivalent was 44 kt. The preview’s +15% and +514% are not used.",
          compare: {
            left: {
              name: "The formal figures",
              lines: [
                "Net profit RMB 39.170 bn, +68.17%",
                "Adjusted RMB 38.035 bn, +75.89%",
                "Mined gold 46,702 kg, +13.4%",
                "Lithium carbonate equivalent 44 kt",
              ],
            },
            right: {
              name: "How to read it",
              lines: [
                "The price of each cup fell, and they sold more cups",
                "This is a different path from digging less and returning the cash",
                "Copper tonnes are still held back by Kamoa",
                "Mines sit in many countries, so politics is part of the position",
              ],
            },
          },
        },
      },
      {
        id: "tin-leaders",
        released: true,
        layout: "thesis",
        source: "Westmetall 2026-09-24；SMM 2026-09-25；Mysteel 2026-09-29。8 月涨跌幅未重算",
        zh: {
          title: "不要用一张涨跌榜概括今年",
          stance: "9 月没有重算谁涨得最多",
          summary:
            "8 月那张「锡 +37.5%、铜 +18%、钯 −22%」不再当现价。现在只放三个对得上的读数：黄金离高点、锡的仓库、铁矿的价格。",
          points: [
            {
              judge: "黄金看离高点多远",
              contrast: {
                left: "5627",
                leftLabel: "1 月 29 日，美元/盎司",
                right: "4256",
                rightLabel: "9 月 24 日，大约 −24%",
              },
              anchor: "备用的钱从高点跌下来了。",
              so: "年内涨了还是跌了，这次没有重算。",
            },
            {
              judge: "锡看仓库",
              contrast: {
                left: "5535吨",
                leftLabel: "8 月中旬库存，当时约等于 3 天",
                right: "4590吨",
                rightLabel: "9 月 25 日",
              },
              anchor: "仓库更少了。新的「等于几天」没有官方换算。",
              so: "不把 3 天写成 9 月的新结论。",
            },
            {
              judge: "铁矿看钢厂",
              anchor: "9 月 29 日，62% 低铝粉矿大约 97.5 美元/干吨。它跟着中国少产的钢走。",
              so: "不要把它写进 AI 的涨跌榜。",
            },
          ],
        },
        en: {
          title: "Do not summarize the year with one leaderboard",
          stance: "September did not re-rank who rose the most",
          summary:
            "The August board — tin +37.5%, copper +18%, palladium −22% — is not treated as the current price. Three readings that still match: gold versus its peak, tin in the warehouse, and the iron-ore price.",
          points: [
            {
              judge: "Gold: distance from the high",
              contrast: {
                left: "5627",
                leftLabel: "29 January, $/oz",
                right: "4256",
                rightLabel: "24 September, about −24%",
              },
              anchor: "The cash reserve is down from the peak.",
              so: "The year-to-date percentage was not recalculated.",
            },
            {
              judge: "Tin: the warehouse",
              contrast: {
                left: "5,535 t",
                leftLabel: "Mid-August stocks, then about 3 days",
                right: "4,590 t",
                rightLabel: "25 September",
              },
              anchor: "The warehouse is smaller. There is no new official conversion into days.",
              so: "Do not reprint “3 days” as a September fact.",
            },
            {
              judge: "Iron ore: the steel mill",
              anchor: "On 29 September, 62% low-alumina fines were about $97.50/dmt. It follows the steel China is producing less of.",
              so: "Do not put it on an AI leaderboard.",
            },
          ],
        },
      },
      {
        id: "lithium",
        released: true,
        layout: "thesis",
        source: "紫金矿业 2026 年半年度报告；富宝资讯电池级碳酸锂 2026-09-28 为 12.24 万元/吨",
        zh: {
          title: "锂：新矿开得很快",
          stance: "它复制不了铜那种「新矿要等很多年」",
          summary:
            "锂在手机电池和电动车里。紫金上半年当量碳酸锂 4.4 万吨，全年目标 12 万吨。供给爬得快，像一条街一年新开很多奶茶店。电池级现货 9 月 28 日大约 12.24 万元/吨，比 8 月底低了大约两成。正式报告没有写 +514%，这里也不写。稀土和钴的价格经常由出口管制和配额决定。",
          points: [
            {
              judge: "锂：店开得快",
              contrast: {
                left: "4.4万吨",
                leftLabel: "紫金上半年当量碳酸锂",
                right: "12.2万元",
                rightLabel: "9 月 28 日电池级，每吨",
              },
              anchor: "全年目标 12 万吨。价格已经从 8 月底往下走。",
              so: "别用铜的「等很多年才有新矿」来套锂。",
            },
            {
              judge: "稀土和钴看配额",
              anchor: "耳机和电机里的磁铁、电池里的钴，价格经常被出口管制和配额打断。",
              so: "这和电线、黄金那种自由定价不是同一套规则。",
            },
          ],
        },
        en: {
          title: "Lithium: new supply arrives quickly",
          stance: "It does not copy copper’s long wait for a new mine",
          summary:
            "Lithium is in the phone battery and the electric car. Zijin’s first-half lithium carbonate equivalent was 44 kt, with a full-year target of 120 kt. Supply ramps fast, like a street that opens many tea shops in one year. Battery-grade spot was about RMB 122,400/t on 28 September, roughly a fifth below the end of August. The formal report does not state +514%, and neither does this page. Rare earths and cobalt are often priced by export controls and quotas.",
          points: [
            {
              judge: "Lithium: the shops open fast",
              contrast: {
                left: "44 kt",
                leftLabel: "Zijin first-half LCE",
                right: "122k",
                rightLabel: "28 Sep battery grade, yuan per tonne",
              },
              anchor: "The full-year target is 120 kt. The price has already come down from the end of August.",
              so: "Do not use copper’s decade-long mine wait as the lithium frame.",
            },
            {
              judge: "Rare earths and cobalt follow quotas",
              anchor: "Magnets in earbuds and motors, and cobalt in batteries, often have their prices interrupted by export controls and quotas.",
              so: "That is a different rule from freely priced wire and gold.",
            },
          ],
        },
      },
      {
        id: "tin",
        released: true,
        layout: "thesis",
        source: "Westmetall 2026-09-23 库存 4,675 吨；SMM 2026-09-25 收盘库存 4,590 吨。8 月中旬 5,535 吨约等于 3 天，见当时调研稿",
        zh: {
          title: "锡：焊点很小，仓库也很小",
          stance: "9 月 25 日库存 4,590 吨",
          summary:
            "锡是把芯片焊在电路板上的那一点。9 月 25 日库存 4,590 吨，比 8 月中旬的 5,535 吨更少。5,535 吨当时大约等于全球 3 天的需求。仓库更低了，但「现在等于几天」没有新的官方换算，所以不把 3 天写成 9 月的结论。AI 服务器单台用锡大约是旧服务器的 4 倍，这句仍是 8 月稿，这次没有用新的原始报告重核。",
          points: [
            {
              judge: "仓库更少了",
              contrast: {
                left: "5535吨",
                leftLabel: "8 月中旬，当时约等于 3 天",
                right: "4590吨",
                rightLabel: "9 月 25 日",
              },
              anchor: "焊点很小，库存也只够很短的日子。",
              so: "天数停在 8 月的口径，不往前推。",
            },
            {
              judge: "和铜是同一类故事里更小的一份",
              anchor: "芯片要焊住，所以 AI 服务器会多用一点锡。倍数这次不更新。",
              so: "先看仓库还在不在，再看故事讲得多满。",
            },
          ],
        },
        en: {
          title: "Tin: a small dot of solder, and a small warehouse",
          stance: "Stocks were 4,590 tonnes on 25 September",
          summary:
            "Tin is the dot of solder holding a chip to the board. Stocks were 4,590 tonnes on 25 September, below 5,535 tonnes in mid-August. Those 5,535 tonnes were then about three days of world demand. The warehouse is smaller, and there is no new official conversion into days, so “three days” is not restated as a September fact. The claim that an AI server uses about four times the tin of an older server stays in the August draft and was not re-checked against a new primary note.",
          points: [
            {
              judge: "The warehouse got smaller",
              contrast: {
                left: "5,535 t",
                leftLabel: "Mid-August, then about 3 days",
                right: "4,590 t",
                rightLabel: "25 September",
              },
              anchor: "The solder dot is tiny, and the stock covers only a short stretch of days.",
              so: "Leave the day-count on the August basis.",
            },
            {
              judge: "A smaller cousin of the copper story",
              anchor: "Chips have to be soldered, so an AI server uses some extra tin. The multiple is not updated.",
              so: "Look at whether the warehouse is still there before trusting how full the story sounds.",
            },
          ],
        },
      },
      {
        id: "earnings",
        released: true,
        chart: "bar",
        values: [182, 145],
        source: "BHP FY26 results, 18 Aug 2026",
        zh: {
          title: "铜的利润已经超过铁矿",
          stance: "看商品组合，不看矿企这个总标签",
          summary: "BHP 2026 财年铜的 EBITDA 为 182 亿美元，铁矿为 145 亿美元。铜第一次成为更大的利润来源。铁矿下跌仍可能抵消铜价上涨。",
          categories: ["铜", "铁矿"],
          seriesName: "EBITDA",
          suffix: " 亿美元",
        },
        en: {
          title: "Copper profit has passed iron ore",
          stance: "Look at the commodity mix, not the miner label",
          summary: "In BHP's FY26, copper EBITDA was $18.2 billion and iron ore was $14.5 billion. Copper became the larger profit source. A weaker iron ore price can still offset a higher copper price.",
          categories: ["Copper", "Iron ore"],
          seriesName: "EBITDA",
          suffix: " $bn",
        },
      },
      {
        id: "ai",
        released: true,
        layout: "compare",
        source: "Kpler 2026-07-17；ICSG 2026-04-23；全球粗钢约 19 亿吨；中国地产用钢相对 2020 年峰值",
        zh: {
          title: "AI 对铜和铁矿，完全不是一回事",
          stance: "机房大约吃掉今年的铜增量。AI 只是其中 10–20 万吨。铁连 1% 都不到。",
          summary:
            "图上的 50 对 45 是数据中心这栋楼，不是 AI 芯片单独的用量。Kpler 把真正因 AI 设计多出来的铜单独估成 10–20 万吨。铁是 0.5% 对 −36%：AI 的钢相对一年全球粗钢可以忽略，中国地产少掉的钢比它大得多。",
          compare: {
            left: {
              name: "铜 · 50 对 45",
              lines: [
                "50 万吨：2026 年数据中心建设用铜，区间 30–70，图上取中值。",
                "45 万吨：同一年，全球铜需求一共只多出来这么多。",
                "其中真正因 AI 设计多出来的，Kpler 估成 10–20 万吨。电网用铜另计，不重复加进这栋楼。",
                "机房不到全部用铜量的 2%。紧的时候，定价的是多出来的最后一吨。",
              ],
            },
            right: {
              name: "铁矿 · 0.5% 对 −36%",
              lines: [
                "0.5%：未来五年数据中心要用的钢，最多约 1000 万吨，全球一年粗钢约 19 亿吨。",
                "−36%：中国地产用钢相对 2020 年峰值已经少了这么多。",
                "0.5 比 36 小一个数量级，所以 AI 盖不住地产少掉的钢。",
                "铁矿价格仍看中国钢需求和海运新矿，不看数据中心。",
              ],
            },
          },
        },
        en: {
          title: "AI is not the same story for copper and iron ore",
          stance: "Data-center buildings take this year’s extra copper. The AI-only slice is 0.10–0.20 Mt. Iron stays under 1%.",
          summary:
            "The picture’s 0.50 against 0.45 is the building, not the AI chip on its own. Kpler puts the copper added by AI designs at 0.10–0.20 Mt. Iron is 0.5% against −36%: AI steel is a rounding error next to one year of global steel, and China property has already cut far more.",
          compare: {
            left: {
              name: "Copper · 0.50 vs 0.45",
              lines: [
                "0.50 Mt: copper in 2026 data-center construction. The range is 0.30–0.70; the picture uses the midpoint.",
                "0.45 Mt: all of the world’s extra copper demand in that same year.",
                "Kpler puts the slice added by AI designs at 0.10–0.20 Mt. Grid copper is separate and is not added again.",
                "The buildings are still under 2% of all copper used. In a tight market the last extra tonne sets the price.",
              ],
            },
            right: {
              name: "Iron ore · 0.5% vs −36%",
              lines: [
                "0.5%: steel for data centers over five years, at most about 10 Mt, against about 1.9 billion tonnes of crude steel in a single year.",
                "−36%: China property steel versus its 2020 peak.",
                "0.5 is an order of magnitude smaller than 36, so AI does not replace the steel property stopped using.",
                "Iron ore still prices off China steel demand and new seaborne supply, not data centers.",
              ],
            },
          },
        },
      },
      {
        id: "elasticity",
        released: true,
        chart: "bar",
        values: [11, -15],
        source: "基于 BHP FY26 公开税率与矿权负担的简化弹性测算；非公司指引",
        zh: {
          title: "两个价格要一起看",
          stance: "铁矿的利润弹性仍然很大",
          summary: "按简化测算，铜价上涨 1000 美元/吨，大约增加 11 亿美元税后净利。铁矿价格下跌 10 美元/吨，大约减少 15 亿美元。只看铜价会算错 BHP。",
          categories: ["铜价 +1000 美元/吨", "铁矿 -10 美元/吨"],
          seriesName: "对税后净利的影响",
          suffix: " 亿美元",
        },
        en: {
          title: "Both prices have to be assumed together",
          stance: "Iron ore still moves profit by more",
          summary: "A simplified estimate puts a $1,000/t copper rise at about $1.1 billion of after-tax profit, and a $10/t iron ore drop at about $1.5 billion less. Copper alone is the wrong model for BHP.",
          categories: ["Copper +$1,000/t", "Iron ore −$10/t"],
          seriesName: "After-tax profit effect",
          suffix: " $bn",
        },
      },
      {
        id: "scenarios",
        released: true,
        chart: "bar",
        values: [74, -13, -116],
        source: "基于 BHP FY26 公开分部利润的价格情景测算；仅价格效应，非公司指引",
        zh: {
          title: "看好铜，不等于下一年利润更高",
          stance: "基准情景里，铜的上涨会被铁矿抵消",
          summary: "价格因素对 EBITDA 的粗算：牛市约增加 74 亿美元，基准情景大约持平到小幅下降，熊市约减少 116 亿美元。这还没计入已经看到的产量下降和成本上升。",
          categories: ["牛市", "基准", "熊市"],
          seriesName: "价格因素对 EBITDA 的影响",
          suffix: " 亿美元",
        },
        en: {
          title: "Liking copper is not the same as higher next-year profit",
          stance: "In the base case, copper's gain is offset by iron ore",
          summary: "A rough price-only sketch moves EBITDA by about +$7.4 billion in a bull case and −$11.6 billion in a bear case. The base case is roughly flat to slightly down. Known volume and cost headwinds are not included.",
          categories: ["Bull", "Base", "Bear"],
          seriesName: "Price effect on EBITDA",
          suffix: " $bn",
        },
      },
      {
        id: "factors",
        released: true,
        layout: "thesis",
        source: "TC/RC 长单公开结算；Grasberg 等矿端扰动公开报道；Reuters 2026-09-10；SMM 2026-09-29。法兴 2026 年 8 月隐含概率未重核",
        zh: {
          title: "铜价的八层因子",
          stance: "下一个最大催化剂往往不是 AI，是供给与关税",
          summary:
            "八层从冶炼加工费、矿端事故、232 条款、电网与电动车，到成本曲线、宏观资金、卖方目标和并购。日常先盯最灵敏的几项：TC/RC、非美库存、复产进度、COMEX–LME 价差。",
          points: [
            {
              judge: "冶炼端：TC/RC 崩到零",
              contrast: {
                left: "80→0",
                leftLabel: "长单加工费 2023→2026（美元/吨）",
                right: "≈45%",
                rightLabel: "中国冶炼产能占比",
              },
              anchor: "现货一度转负。精矿紧 → 冶炼减产 → 精铜二次收缩，恢复还会滞后一年。",
              so: "最被低估、传导最快的一层。",
            },
            {
              judge: "供给事故的长尾",
              anchor: "Grasberg 全面复产推迟至约 2028 年初；El Teniente、Kamoa 等扰动仍在。",
              so: "矿端明年恢复，也不等于精铜立刻宽松。",
            },
            {
              judge: "232 条款仍没有裁定",
              contrast: {
                left: "15%",
                leftLabel: "提议：2027年1月1日起",
                right: "30%",
                rightLabel: "提议：2028年1月1日起",
              },
              anchor: "到 9 月 29 日仍没有最终决定。8 月法兴的隐含概率（30% 关税约 37%，15% 关税约 15%）这次没有重核。",
              so: "没有公告不等于取消。落地会抽紧非美；若被否决，COMEX 库存回流。",
            },
            {
              judge: "需求不只是 AI",
              anchor: "电网加固、电动车、印东城镇化、国防，往往比数据中心本体更大。",
              so: "AI 是叙事入口，不是唯一引擎。",
            },
            {
              judge: "成本曲线在上移",
              anchor: "品位下降、淡化海水、能源与劳工、许可与 ESG，都把长期激励价往上推。",
              so: "慢变量：抬底，不宜当短期看多主因；高盛仍把长期激励价钉在约 11,000 美元/吨。",
            },
            {
              judge: "金融与宏观",
              anchor: "美元、联储路径、ETF/CTA、中国国储与刺激，都能放大波动。",
              so: "叙事里已有人喊中期 20,000 美元/吨——那是极端观点，不是共识。",
            },
            {
              judge: "卖方目标价校准",
              contrast: {
                left: "≈15,500",
                leftLabel: "UBS 2027 年中目标（美元/吨）",
                right: "≈11,250",
                rightLabel: "Cochilco 2027 均价折算",
              },
              anchor: "智利官方认为 2026 年涨价有尖峰成分，不是新平台。",
              so: "用官方下调与投行高目标对读，避免只听一边。",
            },
            {
              judge: "并购重估股价，不直接定铜价",
              anchor: "Anglo–Teck 合并瞄准铜敞口 >70%；South32 卖铝转铜年内大幅重估。",
              so: "稀缺铜资产溢价体现在股价，必须和铜价本身分开看。",
            },
          ],
        },
        en: {
          title: "Eight layers behind the copper price",
          stance: "The next catalyst is often supply and tariffs, not AI alone",
          summary:
            "Eight layers run from treatment charges and mine outages to Section 232, grids and EVs, the cost curve, macro flows, sell-side targets, and M&A. Day to day, watch TC/RC, non-US inventories, restart progress, and the COMEX–LME spread.",
          points: [
            {
              judge: "Smelting: TC/RC collapsed to zero",
              contrast: {
                left: "80→0",
                leftLabel: "annual TC 2023→2026 ($/t)",
                right: "~45%",
                rightLabel: "China’s share of refining capacity",
              },
              anchor: "Spot fees even went negative. Tight concentrate → smelter cuts → a second refined squeeze, with a lag of about a year.",
              so: "The most underwatched, fastest-transmitting layer.",
            },
            {
              judge: "Outage tails run long",
              anchor: "Grasberg full restart is pushed toward early 2028; El Teniente and Kamoa still matter.",
              so: "Mine recovery next year does not mean refined copper is loose now.",
            },
            {
              judge: "Section 232 still has no ruling",
              contrast: {
                left: "15%",
                leftLabel: "proposal from 1 Jan 2027",
                right: "30%",
                rightLabel: "proposal from 1 Jan 2028",
              },
              anchor: "No final decision as of 29 September. Société Générale’s August odds (about 37% for 30%, about 15% for 15%) were not rechecked.",
              so: "Silence is not a cancellation. Passage tightens markets outside the US; rejection sends COMEX stocks back.",
            },
            {
              judge: "Demand is bigger than AI",
              anchor: "Grid upgrades, EVs, India/SE Asia urbanization, and defense often dwarf the data-center shell itself.",
              so: "AI is the narrative door, not the only engine.",
            },
            {
              judge: "The cost curve is drifting up",
              anchor: "Lower grades, desalination, energy and labour, permits and ESG all lift the long-run incentive price.",
              so: "A slow floor, not a short-term bull case; Goldman still pegs the long incentive near $11,000/t.",
            },
            {
              judge: "Finance and macro",
              anchor: "The dollar, Fed path, ETF/CTA flows, and China stockpiling or stimulus can all amplify swings.",
              so: "Some narratives already float $20,000/t medium-term—that is extreme, not consensus.",
            },
            {
              judge: "Sell-side targets as a range check",
              contrast: {
                left: "~15,500",
                leftLabel: "UBS mid-2027 target ($/t)",
                right: "~11,250",
                rightLabel: "Cochilco 2027 average, converted",
              },
              anchor: "Chile’s official view treats 2026 strength partly as a spike, not a new plateau.",
              so: "Read official downgrades against bank highs—don’t hear only one side.",
            },
            {
              judge: "M&A re-rates equities, not the metal",
              anchor: "Anglo–Teck aims for copper exposure above 70%; South32’s aluminium-to-copper pivot re-rated hard this year.",
              so: "Scarce copper assets show up in stock prices—keep that separate from the copper price itself.",
            },
          ],
        },
      },
      {
        id: "iron",
        released: true,
        layout: "thesis",
        source: "SMM 铁矿供需模型；Simandou 爬坡公开数据；中国粗钢与地产用钢公开统计",
        zh: {
          title: "铁矿是防守资产",
          stance: "现金牛与估值之锚，不是 AI 弹性",
          summary:
            "过剩在扩大，Simandou 压成本曲线。巨头靠铁矿的稳定现金流给铜的资本开支买单——买铁敞口更像高股息，买铜敞口才是增长。",
          points: [
            {
              judge: "过剩还在加",
              contrast: {
                left: "≈190Mt",
                leftLabel: "2026 年全球过剩示意",
                right: "≈220Mt",
                rightLabel: "2030 年过剩示意",
              },
              anchor: "2026 年新增海运产能约 70Mt，Simandou 是主力。",
              so: "方向向下的供给故事，不是短缺叙事。",
            },
            {
              judge: "需求被中国钢盖住",
              contrast: {
                left: "−5%",
                leftLabel: "中国粗钢 2025 vs 2024 峰值附近",
                right: "−36.5%",
                rightLabel: "地产用钢 vs 2020 峰值",
              },
              anchor: "8 月粗钢日产 241 万吨，1–8 月 6.52 亿吨。平台化不等于重回增长。",
              so: "AI 用钢相对 19 亿吨粗钢只是噪音。",
            },
            {
              judge: "有限上行：高品位价差",
              contrast: {
                left: "≈88%",
                leftLabel: "Fortescue 赤铁矿对指数",
                right: "≈112%",
                rightLabel: "Iron Bridge 精矿对指数",
              },
              anchor: "欧盟 CBAM 已收费；海运基准品位降至 61% Fe，绿钢要 ≥65%。高低品价差结构性走阔。",
              so: "这是铁矿里仍值得单独追踪的 alpha，不是总量短缺。",
            },
            {
              judge: "投资含义",
              anchor: "铁矿提供约 61% 利润率量级的现金牛角色，给铜增长资本开支买单。",
              so: "Fortescue 缺铜敞口时，市场更用远期盈利下修来定价。",
            },
          ],
        },
        en: {
          title: "Iron ore is the defensive asset",
          stance: "Cash cow and valuation anchor—not AI torque",
          summary:
            "The surplus is still widening and Simandou presses the cost curve. Majors fund copper growth with iron-ore cash—iron exposure is more yield, copper exposure is growth.",
          points: [
            {
              judge: "The surplus is still growing",
              contrast: {
                left: "~190 Mt",
                leftLabel: "2026 global surplus sketch",
                right: "~220 Mt",
                rightLabel: "2030 surplus sketch",
              },
              anchor: "About 70 Mt of new seaborne capacity arrives in 2026, led by Simandou.",
              so: "A downward supply story, not a shortage story.",
            },
            {
              judge: "Demand is capped by China steel",
              contrast: {
                left: "−5%",
                leftLabel: "China crude steel 2025 vs near-2024 peak",
                right: "−36.5%",
                rightLabel: "property steel vs 2020 peak",
              },
              anchor: "August crude steel ran at 2.41 million tonnes a day; January–August was 652 million tonnes. A plateau is not a return to growth.",
              so: "AI steel need is noise versus ~1.9 bn t of crude steel.",
            },
            {
              judge: "Limited upside: grade differentials",
              contrast: {
                left: "~88%",
                leftLabel: "Fortescue hematite vs index",
                right: "~112%",
                rightLabel: "Iron Bridge concentrate vs index",
              },
              anchor: "EU CBAM is already charging; seaborne benchmarks slipped to 61% Fe while green steel wants ≥65%. High–low grade spreads are widening structurally.",
              so: "That is the iron alpha still worth tracking—not a bulk shortage.",
            },
            {
              judge: "What it means for portfolios",
              anchor: "Iron ore still funds copper growth capex with cash-cow margins around the low-60% EBITDA zone for majors.",
              so: "Without copper exposure, names like Fortescue are priced more on forward EPS cuts.",
            },
          ],
        },
      },
      {
        id: "tax",
        released: true,
        layout: "thesis",
        source: "BHP FY26 调整后税率与权益金披露；副产品收入与 Copper SA 成本披露；Rio 铜 C1 净成本公开口径",
        zh: {
          title: "税、汇率和副产品",
          stance: "涨价进不了股东口袋的那一截，也要算进去",
          summary:
            "政府先分走约四成；澳元升值抬美元成本；金价把铜矿现金成本压得很低——做铜多头，其实也隐含了金的多头。",
          points: [
            {
              judge: "政府先拿走约 43%",
              contrast: {
                left: "36.5%",
                leftLabel: "BHP FY26 调整后实际税率",
                right: "42.9%",
                rightLabel: "计入矿业权益金后",
              },
              anchor: "商品涨价 X → 股东多赚 Y，先乘约 0.57。",
              so: "弹性表若不算税负，会高估股东回报。",
            },
            {
              judge: "澳元是隐形成本",
              anchor: "收入美元、成本澳元。澳元每升值 1%，境内成本以美元计约升 1%。",
              so: "追踪 AUD/USD 与追踪铁矿价同等重要。",
            },
            {
              judge: "金价是铜矿的隐形杠杆",
              contrast: {
                left: "+45%",
                leftLabel: "BHP FY26 副产品收入同比",
                right: "−73%",
                rightLabel: "Copper SA 单位成本因此下降",
              },
              anchor: "Rio 铜 C1 净成本甚至一度转负。金价回落，成本曲线立刻上移。",
              so: "铜多头里嵌着金多头，很少有人单独对冲。",
            },
          ],
        },
        en: {
          title: "Tax, currency, and by-products",
          stance: "Count the slice of a price rise that never reaches equity",
          summary:
            "Government take is around two fifths; a stronger AUD lifts USD costs; gold is holding copper cash costs down—so a copper long embeds a gold long.",
          points: [
            {
              judge: "Government takes about 43% first",
              contrast: {
                left: "36.5%",
                leftLabel: "BHP FY26 adjusted effective tax rate",
                right: "42.9%",
                rightLabel: "including mineral royalties",
              },
              anchor: "Price up X → equity up Y needs a ~0.57 multiplier first.",
              so: "Elasticity tables that ignore tax overstate shareholder gains.",
            },
            {
              judge: "AUD is a hidden cost",
              anchor: "USD revenue, AUD costs. A 1% AUD rise lifts domestic USD costs by about 1%.",
              so: "Track AUD/USD with the same seriousness as iron-ore prices.",
            },
            {
              judge: "Gold is copper’s silent lever",
              contrast: {
                left: "+45%",
                leftLabel: "BHP FY26 by-product revenue y/y",
                right: "−73%",
                rightLabel: "Copper SA unit cost decline from credits",
              },
              anchor: "Rio’s copper C1 net cost even went negative for a stretch. Gold down, cost curve up.",
              so: "A copper long embeds a gold long few people hedge explicitly.",
            },
          ],
        },
      },
      {
        id: "risks",
        released: true,
        layout: "thesis",
        source: "Wood Mackenzie 数据中心在建比例；Reuters 2026-09-10；SMM 2026-09-29；BHP FY27 产量与成本指引。法兴 2026 年 8 月隐含概率未重核",
        zh: {
          title: "五个可能证伪的信号",
          stance: "叙事还在，这五盏灯先亮就要重估",
          summary:
            "证伪不靠感觉。AI 管线兑现、关税裁定、金价、铁矿是否跌破关键位、以及量减成本升，五个信号够用来每月复盘。",
          points: [
            {
              judge: "AI 管线证伪",
              contrast: {
                left: "≈12GW",
                leftLabel: "美国 2026 计划投产",
                right: "≈5GW",
                rightLabel: "实际在建（WoodMac）",
              },
              anchor: "变压器与开关柜交期卡住。若 2027 年兑现继续恶化，边际买家叙事受损。",
              so: "铜价最重要的需求侧下行灯之一。",
            },
            {
              judge: "232 条款若被否决",
              anchor: "到 9 月 29 日仍没有最终决定。提议仍是 2027 年 15%、2028 年 30%。若被否决，COMEX 库存回流，全球表会松。",
              so: "8 月「30% 关税不落地的概率不低」没有重核，不拿来当现在的赔率。",
            },
            {
              judge: "金价回落",
              anchor: "负/极低铜现金成本高度依赖副产品金。",
              so: "金跌 → 铜矿成本曲线上移 → 利润率压缩。",
            },
            {
              judge: "铁矿加速下行",
              anchor: "Simandou 爬坡快于预期 + 中国地产二次探底。",
              so: "铁矿跌破约 80 美元，可吃掉铜涨价的贡献。",
            },
            {
              judge: "量减 + 成本升",
              contrast: {
                left: "1.95→1.73Mt",
                leftLabel: "BHP 铜产量 FY26→FY27 中值指引",
                right: "≈+7%",
                rightLabel: "WAIO 单位成本指引上移量级",
              },
              anchor: "价增未必利润增。",
              so: "这是看好铜与看好铜矿股之间最关键的缝隙。",
            },
          ],
        },
        en: {
          title: "Five signals that would break the view",
          stance: "Keep the narrative, but re-rate when these lights turn on",
          summary:
            "Falsification is concrete: AI build-out delivery, tariff rulings, gold, iron ore below key levels, and volume-down/cost-up. Five monthly checks are enough.",
          points: [
            {
              judge: "AI pipeline fails to deliver",
              contrast: {
                left: "~12 GW",
                leftLabel: "US 2026 planned starts",
                right: "~5 GW",
                rightLabel: "actually under construction (WoodMac)",
              },
              anchor: "Transformers and switchgear are the bottleneck. If 2027 delivery worsens, the marginal-buyer story cracks.",
              so: "One of the key downside lights on copper demand.",
            },
            {
              judge: "Section 232, if it is rejected",
              anchor: "No final decision as of 29 September. The proposal is still 15% in 2027 and 30% in 2028. Rejection would send COMEX stocks back and loosen the world balance.",
              so: "The August line that “odds of no 30% tariff are not small” was not rechecked, so it is not the current price.",
            },
            {
              judge: "Gold falls",
              anchor: "Negative or tiny copper cash costs lean on gold credits.",
              so: "Gold down → copper cost curve up → margins compress.",
            },
            {
              judge: "Iron ore accelerates lower",
              anchor: "Simandou ramps faster than expected and China property retests the bottom.",
              so: "Iron ore through about $80 can erase copper’s price gains.",
            },
            {
              judge: "Volumes down, costs up",
              contrast: {
                left: "1.95→1.73 Mt",
                leftLabel: "BHP copper FY26 → FY27 midpoint guide",
                right: "~+7%",
                rightLabel: "WAIO unit-cost guide lift, order of magnitude",
              },
              anchor: "Higher prices need not mean higher profit.",
              so: "The sharpest gap between liking copper and liking copper equities.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "pharma",
    shelf: "industry",
    updated: "2026-08-23",
    frame: {
      zh: {
        title: "读医药先抓这三问",
        points: [
          "卖给谁：患者在哪，商业化能不能自己做。",
          "谁付钱：美国商保 / Medicare，还是中国医保。",
          "自己能拿走多少：首付、分成，还是产品利润。",
        ],
      },
      en: {
        title: "Read pharma through three questions",
        points: [
          "Who buys: where patients are, and whether you can commercialize yourself.",
          "Who pays: US commercial / Medicare, or China reimbursement.",
          "How much you keep: upfront, royalties, or product profit.",
        ],
      },
    },
    zh: {
      title: "医药",
      stance: "利润在美国，标题金额要打折",
      blurb: "对照柱、结论卡、时间线、双栏、矩阵都用。从支付方与土壤，到九因子、出海算术、超级牛股标准，再到日印镜鉴。",
    },
    en: {
      title: "Pharma",
      stance: "Profits sit in the US, and headline deal values need a discount",
      blurb: "Bars, thesis cards, timelines, compares, and matrices—from payers and national soil to the nine-factor frame, outbound math, ten-bagger gates, and Japan/India mirrors.",
    },
    chapters: [
      {
        id: "lens",
        released: true,
        layout: "thesis",
        source: "IQVIA Early Bird（2026-03）；白宫 Fact Sheet / MFN；医药魔方；WHO / 国家卫健委卫生费用通行口径",
        zh: {
          title: "十条结论里，先记住这五条",
          stance: "医药的天花板由支付方决定，不由科学决定",
          summary:
            "下面五条是全书的阅读镜头。后面每一章只展开其中一个判断。数字是锚点，不是完整报表。",
          points: [
            {
              judge: "利润池在美国",
              contrast: {
                left: "4%",
                leftLabel: "美国人口占全球",
                right: "≈一半",
                rightLabel: "全球品牌药支出",
              },
              anchor: "全球药市约 1.7 万亿美元。人口极少，支出极大——利润跟着支付方走。",
              so: "撼动美国药价，就是撼动全行业估值中枢。",
            },
            {
              judge: "美国定价正在被重构",
              contrast: {
                left: "17 家",
                leftLabel: "签署 MFN",
                right: "≈86%",
                rightLabel: "品牌药市场覆盖",
              },
              anchor: "美国溢价第一次被系统地摆上谈判桌。",
              so: "这不是一条新闻，是利润基石被改写。",
            },
            {
              judge: "超级牛股是五因子乘法",
              anchor: "需求 × 代差 × 专利 × 自建商业化 × 领域深耕",
              so: "赛道对不够；缺一项，公式直接归零。",
            },
            {
              judge: "出海是算术题",
              contrast: {
                left: "7%",
                leftLabel: "中国卫生费用 / GDP",
                right: "17%",
                rightLabel: "美国卫生费用 / GDP",
              },
              anchor: "同一个分子，支付能力差一个数量级。",
              so: "国内峰值常常只有美国价值的零头。",
            },
            {
              judge: "标题总额要打折",
              contrast: {
                left: "5%–6%",
                leftLabel: "已披露首付",
                right: "≈94%",
                rightLabel: "尚未到账里程碑",
              },
              anchor: "2026 年上半年 License-out：标题很大，现金很小。",
              so: "确定性估值只给首付和已触发里程碑。",
            },
          ],
        },
        en: {
          title: "Of the ten conclusions, keep these five first",
          stance: "Pharma’s ceiling is set by payers, not by science",
          summary:
            "These five lines are the reading lens for the whole book. Later chapters expand one judgment each. The numbers are anchors, not full statements.",
          points: [
            {
              judge: "The profit pool is in the US",
              contrast: {
                left: "4%",
                leftLabel: "US share of world population",
                right: "~half",
                rightLabel: "of branded drug spend",
              },
              anchor: "Global drug market ~$1.7 tn. Tiny population, huge spend—profit follows the payer.",
              so: "US drug-price shocks move the whole industry’s valuation center.",
            },
            {
              judge: "US pricing is being rewritten",
              contrast: {
                left: "17 firms",
                leftLabel: "signed MFN",
                right: "~86%",
                rightLabel: "of branded drug market",
              },
              anchor: "The US premium was put on the negotiating table as a system.",
              so: "Not one headline—the profit base is being rewritten.",
            },
            {
              judge: "A super winner is a five-factor product",
              anchor: "Need × edge × patents × own commercial × deep focus",
              so: "The right category is not enough; one zero zeros the formula.",
            },
            {
              judge: "Going overseas is arithmetic",
              contrast: {
                left: "7%",
                leftLabel: "China health spend / GDP",
                right: "17%",
                rightLabel: "US health spend / GDP",
              },
              anchor: "The same molecule meets a much larger payer.",
              so: "A domestic peak is often a fraction of US value.",
            },
            {
              judge: "Discount the headline total",
              contrast: {
                left: "5%–6%",
                leftLabel: "disclosed upfront",
                right: "~94%",
                rightLabel: "milestones not yet paid",
              },
              anchor: "2026H1 out-licensing: big headline, small cash.",
              so: "Give hard value only to upfront and already-hit milestones.",
            },
          ],
        },
      },
      {
        id: "payers",
        released: true,
        values: [7, 17],
        source: "WHO / 国家卫健委卫生总费用占 GDP 通行口径；引用前请核对最新年鉴",
        zh: {
          title: "利润池在美国",
          stance: "同一个分子，支付能力差一个数量级",
          summary: "卫生费用大约占中国 GDP 的 7%，占美国 GDP 的 17%。中国创新药单品的国内峰值常常是数十亿元，美国可以到数十亿至上百亿美元。",
          categories: ["中国", "美国"],
          seriesName: "卫生费用占 GDP",
          suffix: "%",
        },
        en: {
          title: "The profit pool is in the United States",
          stance: "The same molecule meets a much larger payer",
          summary: "Health spending is about 7% of GDP in China and about 17% in the United States. A Chinese innovative drug often peaks in the tens of billions of yuan at home, and in the tens of billions of dollars in the US.",
          categories: ["China", "United States"],
          seriesName: "Health spending as % of GDP",
          suffix: "%",
        },
      },
      {
        id: "pricing",
        released: true,
        layout: "timeline",
        source: "美国白宫 Fact Sheet、CMS/HHS、国会研究服务局（CRS）；IRA 与 MFN 相关行政令公开文件",
        zh: {
          title: "美国定价重构：关键时间线",
          stance: "这不是一次新闻，是利润基石被摆上谈判桌",
          summary:
            "从 IRA 到 MFN，再到 TrumpRx 上线，美国药价溢价第一次被系统处理。目前多为行政协议，任期结束可能到期——是否法典化，才是长期估值变量。",
          timeline: [
            { when: "2022-08", what: "IRA 签署，Medicare 药价谈判入法。" },
            { when: "2025-05", what: "行政令要求最惠国定价，推动药企直销。" },
            { when: "2025-09", what: "辉瑞率先签 MFN，换三年关税豁免。" },
            { when: "2026-02", what: "TrumpRx.gov 上线，首批数十个药品。" },
            { when: "2026-05", what: "17 家全部签署，覆盖品牌药市场约 86%。" },
          ],
        },
        en: {
          title: "US pricing rewrite: the key timeline",
          stance: "Not one headline—the profit base was put on the table",
          summary:
            "From the IRA to MFN and TrumpRx, the US drug premium was handled as a system for the first time. Most deals are still administrative and may expire with the term—codification is the long valuation variable.",
          timeline: [
            { when: "2022-08", what: "IRA signed; Medicare negotiation becomes law." },
            { when: "2025-05", what: "Executive order pushes most-favored-nation pricing and DTC." },
            { when: "2025-09", what: "Pfizer signs MFN first, in exchange for a three-year tariff waiver." },
            { when: "2026-02", what: "TrumpRx.gov launches with the first batch of drugs." },
            { when: "2026-05", what: "All 17 firms signed, covering about 86% of branded drugs." },
          ],
        },
      },
      {
        id: "glp1",
        released: true,
        values: [1120, 160],
        source: "YCharts / TradingEconomics 市值（2026-08）；经营指引以礼来、诺和诺德公司公告为准",
        zh: {
          title: "同一赛道，结果可以差很多",
          stance: "赛道对了，执行错了，仍然会跌",
          summary: "2026 年 8 月，礼来市值约 1.12 万亿美元，诺和诺德约 1600 亿美元。三年前两者接近。诺和没有输在 GLP-1 这个赛道上。",
          categories: ["礼来", "诺和诺德"],
          seriesName: "市值",
          suffix: " 十亿美元",
        },
        en: {
          title: "The same category can still split apart",
          stance: "A right market and weak execution can still fall",
          summary: "In August 2026 Eli Lilly was about $1.12 trillion and Novo Nordisk about $160 billion. They were close three years earlier. Novo did not lose because GLP-1 was the wrong category.",
          categories: ["Eli Lilly", "Novo Nordisk"],
          seriesName: "Market value",
          suffix: " $bn",
        },
      },
      {
        id: "upfront",
        chart: "pie",
        released: true,
        values: [6, 94],
        source: "医药魔方、国家药监局、国家医保局；2026H1 对外授权首付占比统计",
        zh: {
          title: "真正到账的只有首付",
          stance: "标题总额不能按面值算",
          summary: "2026 年上半年中国创新药对外授权里，已披露首付大约只占 5% 到 6%。其余大多是还没发生的里程碑。",
          categories: ["首付", "尚未到账"],
          seriesName: "交易金额结构",
          suffix: "%",
        },
        en: {
          title: "Only the upfront is cash in hand",
          stance: "Do not take the headline total at face value",
          summary: "In the first half of 2026, disclosed upfront payments were about 5% to 6% of announced China out-licensing value. Most of the rest is milestones that have not happened.",
          categories: ["Upfront", "Not yet received"],
          seriesName: "Deal value mix",
          suffix: "%",
        },
      },
      {
        id: "deals",
        chart: "line",
        released: true,
        values: [30, 522, 1357, 997],
        source: "医药魔方、国家药监局、国家医保局公开统计（口径或有 997 亿 / 1,100 亿分歧）",
        zh: {
          title: "出海交易总额四年跳了一个数量级",
          stance: "量起来了，不等于价值都拿走了",
          summary:
            "中国创新药对外授权交易总额从 2020 年约 30 亿美元，到 2024 年约 522 亿、2025 年约 1,357 亿；2026 年上半年已约 997 亿。读这张图时记住：2026 只是半年，且标题总额里大部分仍是未到账里程碑。",
          categories: ["2020", "2024", "2025", "2026H1"],
          seriesName: "对外授权交易总额",
          suffix: " 亿美元",
        },
        en: {
          title: "Out-licensing deal totals jumped an order of magnitude in four years",
          stance: "Volume rose; that does not mean China kept the value",
          summary:
            "China out-licensing deal totals went from about $30 bn in 2020 to about $522 bn in 2024 and about $1,357 bn in 2025; the first half of 2026 alone was about $997 bn. Read the chart knowing 2026 is only a half-year, and most of the headline total is still unearned milestones.",
          categories: ["2020", "2024", "2025", "2026H1"],
          seriesName: "Out-licensing deal totals",
          suffix: " $bn",
        },
      },
      {
        id: "peaks",
        chart: "pie",
        released: true,
        values: [58, 18, 7, 5],
        source: "创新药峰值销售地理拆分的行业示意口径（美约 50%–65%）；非单一机构普查，须按品种核实",
        zh: {
          title: "全球峰值销售：美国拿走一半以上",
          stance: "上限由支付方划定，不由科学划定",
          summary:
            "示意口径下，全球峰值销售大约美国占 50%–65%、欧洲五国 15%–20%、日本 5%–8%、中国 3%–8%。图中取中位：58 / 18 / 7 / 5。国内做到第一，也只拿走全球价值的一小段。",
          categories: ["美国", "欧洲五国", "日本", "中国"],
          seriesName: "约占全球峰值销售",
          suffix: "%",
        },
        en: {
          title: "Global peak sales: the US takes more than half",
          stance: "The ceiling is set by payers, not by science",
          summary:
            "In an illustrative split, peak sales are about 50%–65% in the US, 15%–20% in the EU5, 5%–8% in Japan, and 3%–8% in China. The chart uses midpoints: 58 / 18 / 7 / 5. Being number one at home still captures only a thin slice of global value.",
          categories: ["US", "EU5", "Japan", "China"],
          seriesName: "Share of global peak sales",
          suffix: "%",
        },
      },
      {
        id: "beone",
        chart: "pie",
        released: true,
        values: [74, 26],
        source: "百济神州 / BeOne Medicines 2025 年报、2026 半年报 / Q2 公告",
        zh: {
          title: "百济：自己在美国卖",
          stance: "少数拿走产品利润的样本",
          summary: "百悦泽约占产品收入 74%，美国是最大市场。风险集中在单品依赖，以及后面有没有产品接上。",
          categories: ["百悦泽", "其他产品"],
          seriesName: "占产品收入",
          suffix: "%",
        },
        en: {
          title: "BeOne sells in the US itself",
          stance: "One of the few that keeps the product profit",
          summary: "Brukinsa is about 74% of product revenue, and the US is the largest market. The risk is concentration, and whether another drug takes over.",
          categories: ["Brukinsa", "Other products"],
          seriesName: "Share of product revenue",
          suffix: "%",
        },
      },
      {
        id: "hengrui",
        released: true,
        layout: "compare",
        source: "百济神州 2026 半年报；恒瑞医药 2025 年报、2026 半年报",
        zh: {
          title: "百济和恒瑞：两条出海路",
          stance: "一个自己卖产品，一个靠授权加国内兑现",
          summary:
            "双栏对照比单根柱更合适。百济验证自建美国商业化；恒瑞验证国内创新药放量加 License-out / NewCo。营收数字可到各自章节核对。",
          compare: {
            left: {
              name: "百济神州",
              lines: [
                "命题：自建美国商业化，拿走产品利润",
                "2026H1 营收约 222 亿元，净利约 33 亿元",
                "大单品依赖高：百悦泽约占产品收入 74%",
                "美国已是第一大市场",
              ],
            },
            right: {
              name: "恒瑞医药",
              lines: [
                "命题：国内创新药放量 + 对外许可 / NewCo",
                "2026H1 营收约 155 亿元，净利约 45 亿元",
                "产品相对分散，利润更厚",
                "海外价值主要经伙伴间接收获",
              ],
            },
          },
        },
        en: {
          title: "BeOne and Hengrui: two outbound paths",
          stance: "One keeps product profit; the other licenses and monetizes at home",
          summary:
            "A side-by-side fits better than one bar. BeOne tests owning US commercial; Hengrui tests domestic innovative sales plus licensing / NewCo. Check each chapter for the revenue figures.",
          compare: {
            left: {
              name: "BeOne",
              lines: [
                "Thesis: own US commercial, keep product profit",
                "2026H1 revenue ~RMB 222 bn, net profit ~RMB 33 bn",
                "High concentration: Brukinsa ~74% of product revenue",
                "The US is already the largest market",
              ],
            },
            right: {
              name: "Hengrui",
              lines: [
                "Thesis: domestic innovative sales + licensing / NewCo",
                "2026H1 revenue ~RMB 155 bn, net profit ~RMB 45 bn",
                "More diversified products, thicker profit",
                "Overseas value mostly via partners",
              ],
            },
          },
        },
      },
      {
        id: "wuxi",
        chart: "pie",
        released: true,
        values: [84, 9, 6],
        source: "药明康德 2025 年报：持续经营分部收入披露",
        zh: {
          title: "药明康德：化学业务占了八成以上",
          stance: "它卖的是研发和生产服务，不是自有药品",
          summary: "2025 年持续经营收入里，化学业务约占 84%，测试约占 9%，生物学约占 6%。看它时跟踪在手订单和地缘，而不是某一个分子能不能获批。",
          categories: ["化学", "测试", "生物学"],
          seriesName: "占持续经营收入",
          suffix: "%",
        },
        en: {
          title: "WuXi AppTec: chemistry is more than four fifths",
          stance: "It sells research and manufacturing, not its own drugs",
          summary: "In 2025 continuing operations, chemistry was about 84% of revenue, testing about 9%, and biology about 6%. The things to track are the order book and geopolitics, not approval of one molecule.",
          categories: ["Chemistry", "Testing", "Biology"],
          seriesName: "Share of continuing revenue",
          suffix: "%",
        },
      },
      {
        id: "framework",
        released: true,
        layout: "thesis",
        source: "BIO/Informa 临床成功率统计；Tufts CSDD / Deloitte 资本化研发成本测算；九因子权重见产业调研框架",
        zh: {
          title: "九因子：怎么判断一款药",
          stance: "看好要拆开；有一项归零，总分归零",
          summary:
            "九因子是乘法：需求、靶点、代差、安全、CMC、专利、支付、商业化、资本耐心。中国常见画像是制造与速度强、支付与自建销售弱——所以 License-out 和 CXO 成了主线，自建美国商业化最难也最值钱。",
          points: [
            {
              judge: "先看基础赔率",
              contrast: {
                left: "8%–10%",
                leftLabel: "I 期到获批综合成功率",
                right: "20–28 亿$",
                rightLabel: "一款新药资本化成本量级",
              },
              anchor: "肿瘤更低。口径因机构而异，引用须注明来源年份。",
              so: "不能拆成可观察分项的「看好」，近似掷硬币。",
            },
            {
              judge: "九因子是乘法，不是加法",
              anchor: "F1 需求 · F2 靶点 · F3 代差 · F4 安全 · F5 CMC · F6 专利 · F7 支付 · F8 商业化 · F9 耐心",
              so: "无支付路径、造不出来、或现金断裂——任一接近零，总分归零。",
            },
            {
              judge: "中国资产的常见画像",
              contrast: {
                left: "F5 强",
                leftLabel: "造得出来、造得快",
                right: "F7/F8 弱",
                rightLabel: "支付与自建销售常外包",
              },
              anchor: "数学上常见解：用制造不可替代性，把支付和销售借给 MNC，并在代差上做出一两个样本。",
              so: "自建海外商业化极难，却是唯一能改这张画像的动作。",
            },
            {
              judge: "怎么用打分卡",
              anchor: "早期重靶点验证；后期重代差、安全、CMC、支付。每项写下证据来源。",
              so: "用途往往是提前发现「某一项已归零、市场还没反应」的资产。",
            },
          ],
        },
        en: {
          title: "Nine factors for judging a drug",
          stance: "Split the bull case; one zero zeros the score",
          summary:
            "Nine factors multiply: need, target, edge, safety, CMC, patents, payers, commercial, and capital patience. China’s common profile is strong making/speed and weak payers/own sales—so licensing and CXO dominate, while owning US commercial is hardest and most valuable.",
          points: [
            {
              judge: "Start with base odds",
              contrast: {
                left: "8%–10%",
                leftLabel: "Phase I to approval success",
                right: "$2.0–2.8 bn",
                rightLabel: "capitalized cost per new drug",
              },
              anchor: "Oncology is lower. Agency definitions differ—cite source and year.",
              so: "A bull case you cannot split into observables is close to a coin flip.",
            },
            {
              judge: "Nine factors multiply; they do not add",
              anchor: "F1 need · F2 target · F3 edge · F4 safety · F5 CMC · F6 patents · F7 payers · F8 commercial · F9 patience",
              so: "No payer path, cannot manufacture, or cash breaks—any near-zero zeros the total.",
            },
            {
              judge: "The common China-asset profile",
              contrast: {
                left: "Strong F5",
                leftLabel: "Can make it, fast",
                right: "Weak F7/F8",
                rightLabel: "Payers and sales often outsourced",
              },
              anchor: "The math often says: make yourself hard to replace, rent payers/sales to MNCs, and create one or two real edges.",
              so: "Owning overseas commercial is hard—and the only move that rewrites the profile.",
            },
            {
              judge: "How to use the scorecard",
              anchor: "Early weight on target validation; late weight on edge, safety, CMC, payers. Every score needs a source.",
              so: "The best use is often spotting an asset that already has a zero before the market does.",
            },
          ],
        },
      },
      {
        id: "china",
        released: true,
        chart: "bar",
        values: [1120, 50],
        source: "礼来市值：YCharts/TradingEconomics（2026-08）；中国医药市值第一梯队量级为公开市值区间示意",
        zh: {
          title: "中国土壤能长出什么公司",
          stance: "长得出弹药厂和工程化平台；难长出礼来式品牌药巨头",
          summary:
            "中国禀赋是成本 × 速度 × 制造，不是基金会式耐心资本。市值上限取决于能捕获多少美国净价利润，或多少全球外包订单。图中礼来约 1.12 万亿美元，对照中国第一梯队约数千亿人民币量级（图取约 500 亿美元示意）。",
          categories: ["礼来量级", "中国顶格示意"],
          seriesName: "市值量级对照",
          suffix: " 十亿美元",
        },
        en: {
          title: "What kind of company China can grow",
          stance: "Ammunition plants and engineering platforms grow; Lilly-style brand giants rarely do",
          summary:
            "China’s endowment is cost × speed × manufacturing, not foundation-style patient capital. Market-cap ceilings track how much US net-price profit—or global outsourcing orders—you can capture. The chart puts Lilly near $1.12 tn against a rough China top-tier sketch of about $50 bn.",
          categories: ["Lilly scale", "China top sketch"],
          seriesName: "Market-cap scale",
          suffix: " $bn",
        },
      },
      {
        id: "insurance",
        released: true,
        layout: "compare",
        source: "国家医保局集采与国谈公开口径；丙类目录与《支持创新药高质量发展的若干措施》；WHO/卫健委卫生费用通行口径",
        zh: {
          title: "医保：仿制药压价，创新药以价换量",
          stance: "双轨已经形成；国内仍不是高毛利池",
          summary:
            "左边是集采把仿制药定价权压到极限；右边是国谈、丙类、基药给创新药开通道。方向对，国内支付天花板仍在——所以出海仍是算术题。",
          compare: {
            left: {
              name: "仿制药轨",
              lines: [
                "国家集采十二批：平均降幅常见 50%–90%",
                "渠道费用 + 学术推广模型被拆掉",
                "2025–2026「反内卷」：边际压力见顶，不取消集采",
                "纯仿制药企更像现金流折现，不给成长溢价",
              ],
            },
            right: {
              name: "创新药轨",
              lines: [
                "国谈一年一调，历年平均降幅约 60%，换准入与放量",
                "丙类目录：承认需要第二支付方，力度仍不足",
                "基药目录首次系统性纳入创新药，对准进院",
                "价格保密保护全球价格体系——利好出海型公司",
              ],
            },
          },
        },
        en: {
          title: "Insurance: generics squeezed, innovative drugs trade price for volume",
          stance: "A dual track is real; domestic China is still not a high-margin pool",
          summary:
            "The left rail is volume-based procurement crushing generic pricing power; the right rail opens paths via national negotiation, commercial catalogs, and essential-drug lists. Direction is right; the domestic ceiling remains—so going overseas stays arithmetic.",
          compare: {
            left: {
              name: "Generics rail",
              lines: [
                "Twelve national procurement rounds: typical cuts 50%–90%",
                "Channel-fee + detailing models were dismantled",
                "2025–2026 anti-involution: marginal pressure peaks; procurement stays",
                "Pure generics look like cash-flow yields, not growth stories",
              ],
            },
            right: {
              name: "Innovative rail",
              lines: [
                "Annual national talks, ~60% average cut, traded for access and volume",
                "Commercial catalog admits a second payer; force is still limited",
                "Essential-drug list now systematically includes innovative drugs",
                "Price confidentiality protects global pricing—helps outbound firms",
              ],
            },
          },
        },
      },
      {
        id: "ai",
        released: true,
        chart: "pie",
        values: [12, 12, 5, 61, 10],
        source: "研发成本结构为产业常用资本化成本拆分示意；AI 渗透判断见调研正文与公开案例（Exscientia、Recursion、英矽智能等）",
        zh: {
          title: "AI：提速真实，价值常错位",
          stance: "提速在临床前；贵和难仍在临床",
          summary:
            "图按资本化成本粗分：临床 I/II/III 约占六成以上，AI 今天主要渗透靶点与分子优化。把临床前做快，总成本降幅有限；若真能抬高 II→III 成功率，NPV 弹性才大——后者尚缺有力证据。价值更确定流向卖铲子的 CXO，纯 AI 平台最危险。",
          categories: ["靶点发现", "分子优化", "IND 毒理CMC", "临床 I–III", "审批及其他"],
          seriesName: "资本化成本粗分（示意）",
          suffix: "%",
        },
        en: {
          title: "AI: real speed-up, often misplaced value",
          stance: "Speed-up is preclinical; cost and failure still sit in the clinic",
          summary:
            "The pie is an illustrative capitalized-cost split: Phase I–III is still about three fifths, while AI today mostly touches targets and molecule design. Faster preclinical work cuts total cost only modestly; lifting II→III success would move NPV more—and that proof is still thin. Value more reliably flows to pick-and-shovel CXO; pure AI platforms are riskiest.",
          categories: ["Target discovery", "Molecule design", "IND tox/CMC", "Phase I–III", "Approval & other"],
          seriesName: "Capitalized cost sketch",
          suffix: "%",
        },
      },
      {
        id: "japan",
        released: true,
        layout: "thesis",
        source: "日本厚生劳动省（MHLW）薬価改定与中医协文件；Drug Loss 统计公开口径；武田制药 FY2025 披露",
        zh: {
          title: "日本镜鉴：药价通缩三十年",
          stance: "支付方压价的终局，可能是国民拿不到药",
          summary:
            "日本用三十年药价改定做通缩机器；中国用不到十年走完双轨雏形。武田把本土收入压到约 10%、美国约 48%，证明必须靠近利润池——高杠杆并购也会锁死研发自由度。",
          points: [
            {
              judge: "Drug Loss：压价的终局风险",
              contrast: {
                left: "222",
                leftLabel: "2016–2020 欧美获批 NME",
                right: "143",
                rightLabel: "截至 2022 年末日本未获批",
              },
              anchor: "未获批里约六成连开发都未启动。新兴 Biotech、孤儿药、儿童用药尤其缺席。",
              so: "风险不只是药企亏钱，而是患者拿不到新药。",
            },
            {
              judge: "通缩机器怎么转",
              anchor: "两年改定 → 中间年改定；卖得好再算定；长期收载品阶梯降到仿制药价。",
              so: "与中国「仿制药极限压价、创新药单独通道」方向一致，只是节奏更快。",
            },
            {
              judge: "武田样本",
              contrast: {
                left: "≈48%",
                leftLabel: "收入来自美国",
                right: "≈10%",
                rightLabel: "收入来自日本",
              },
              anchor: "全球化成功的同时，近 4.9 万亿日元有息负债把公司变成偿债机器，研发费同比下降。",
              so: "走出去是活路；用高杠杆买规模，会牺牲资本效率。",
            },
            {
              judge: "对中国的提醒",
              anchor: "老龄化放大需求，也压缩支付；两者不会互相抵消。",
              so: "任何「老龄化 → 医药空间必然爆发」的叙事，都漏了分母。",
            },
          ],
        },
        en: {
          title: "Japan mirror: thirty years of price deflation",
          stance: "The endgame of payer pressure can be that patients cannot get drugs",
          summary:
            "Japan ran drug-price cuts for three decades; China built a dual-track sketch in under ten years. Takeda pushed Japan sales to about 10% and US sales to about 48%—you must get near the profit pool—while leveraged M&A can lock R&D freedom.",
          points: [
            {
              judge: "Drug Loss: the endgame risk of price cuts",
              contrast: {
                left: "222",
                leftLabel: "NMEs approved in US/EU 2016–2020",
                right: "143",
                rightLabel: "still unapproved in Japan by end-2022",
              },
              anchor: "About three fifths of the missing set never even started development. Emerging biotech, orphan, and pediatric drugs are especially absent.",
              so: "The risk is not only company losses—it is patients missing new drugs.",
            },
            {
              judge: "How the deflation machine runs",
              anchor: "Biennial cuts → mid-year cuts; volume clawbacks; long-listed brands stepped down to generic prices.",
              so: "Same direction as China’s generics crush + innovative-drug side path, only slower historically.",
            },
            {
              judge: "The Takeda sample",
              contrast: {
                left: "~48%",
                leftLabel: "revenue from the US",
                right: "~10%",
                rightLabel: "revenue from Japan",
              },
              anchor: "Globalization worked—and nearly ¥4.9 tn of interest-bearing debt turned the firm into a repayment machine, with R&D down year on year.",
              so: "Going out is survival; buying scale with leverage can kill capital efficiency.",
            },
            {
              judge: "A warning for China",
              anchor: "Aging raises demand and squeezes payers; the two do not cancel.",
              so: "Any story that “aging ⇒ pharma boom” skips the denominator.",
            },
          ],
        },
      },
      {
        id: "soil",
        released: true,
        layout: "thesis",
        source: "罗氏 / 诺和诺德基金会与年报披露；调研正文第 4 章国家土壤归因",
        zh: {
          title: "为什么是瑞士与丹麦",
          stance: "国家土壤解释起点；终点看离美国利润池有多近",
          summary:
            "两国人口合计不到中国 1%，却扛住全球创新药利润池一块。五个要素里，中国可复制上游溢出与临床标准，不可复制早期专利套利与小国被迫全球化。",
          points: [
            {
              judge: "产出密度反常",
              contrast: {
                left: "<1%",
                leftLabel: "两国人口 / 中国",
                right: "CHF 130亿",
                rightLabel: "罗氏 2024 研发（占收入 21.6%）",
              },
              anchor: "本国市场占收入都是个位数以下——生来就是全球公司。",
              so: "舒适内需是全球化最大的敌人（日本反例）。",
            },
            {
              judge: "上游决定能做哪种药",
              anchor: "瑞士：染料化工 → 小分子/抗体；丹麦：屠宰发酵 → 胰岛素 → 多肽 GLP-1。",
              so: "诺和 GLP-1 是百年蛋白工程延长线，不是偶然赛道选择。",
            },
            {
              judge: "基金会/家族把控制权锁死",
              contrast: {
                left: "≈77%",
                leftLabel: "诺和基金会投票权",
                right: "≈28%",
                rightLabel: "现金流权",
              },
              anchor: "换来长期研发耐心，也换来短期纠错变慢——2024–2026 崩塌是反面。",
              so: "耐心资本提高长期正确概率，降低短期纠错速度。",
            },
            {
              judge: "中国可复制什么",
              anchor: "上游溢出、MRCT、人才集群——高；长周期资本——中；专利套利与小国内需——不可复制且反向。",
              so: "中国更可能出全球研发与生产平台，而不是瑞式/美式品牌药巨头。",
            },
          ],
        },
        en: {
          title: "Why Switzerland and Denmark",
          stance: "Soil explains the start; the end is proximity to the US profit pool",
          summary:
            "Two countries under 1% of China’s population still carry a slice of global innovative-drug profits. Of five factors, China can copy upstream spillover and clinical standards—not early patent arbitrage or small-country forced globalization.",
          points: [
            {
              judge: "Odd output density",
              contrast: {
                left: "<1%",
                leftLabel: "Population vs China",
                right: "CHF 13 bn",
                rightLabel: "Roche 2024 R&D (21.6% of sales)",
              },
              anchor: "Home markets are single-digit shares of revenue—born global.",
              so: "Comfortable domestic demand is globalization’s enemy (Japan’s counterexample).",
            },
            {
              judge: "Upstream picks the drug type",
              anchor: "Switzerland: dyes → small molecules/antibodies; Denmark: slaughter/fermentation → insulin → peptide GLP-1.",
              so: "Novo’s GLP-1 is a century of protein engineering, not a lucky therapeutic pick.",
            },
            {
              judge: "Foundations lock control",
              contrast: {
                left: "~77%",
                leftLabel: "Novo foundation votes",
                right: "~28%",
                rightLabel: "Cash-flow rights",
              },
              anchor: "Buys R&D patience and slows short-term correction—the 2024–2026 collapse is the downside.",
              so: "Patient capital raises odds of being right long-term and slows fixes.",
            },
            {
              judge: "What China can copy",
              anchor: "Upstream spillover, MRCT, talent clusters—high; patient capital—medium; patent arbitrage and small-home forced globalization—closed and reversed.",
              so: "China more likely grows global R&D/manufacturing platforms than Roche/Lilly-style brand giants.",
            },
          ],
        },
      },
      {
        id: "supers",
        released: true,
        layout: "matrix",
        source: "调研正文第 13 章超级牛股标准与主线；IQVIA 肥胖症市场口径",
        zh: {
          title: "哪些细分可能出超级牛股",
          stance: "五因子乘法；满分 10，8 分以上才谈配置",
          summary:
            "定义：五到十年市值十倍以上，且由产品利润驱动。三道硬门槛：单品峰值 ≥50 亿美元、自捕价值 ≥50%、独占 ≥7 年。主线看代谢供给侧、自免 TCE/体内 CAR-T、下一代 ADC。",
          matrix: {
            headers: ["因子", "0 分（陷阱）", "2 分（超级）"],
            rows: [
              { label: "未满足需求", cells: ["已有多疗法，只是更方便", "无有效疗法，患者池千万级"] },
              { label: "疗效代差", cells: ["仅非劣", "头对头优效，能改指南"] },
              { label: "独占窗口", cells: ["<5 年或同靶点挤满 III 期", ">8 年 + 工艺/器械壁垒"] },
              { label: "价值捕获", cells: ["纯 License-out、分成个位数", "保留美国权益，自建/合建商业化"] },
              { label: "组织深耕", cells: ["管线横跨 4+ 无关领域", "单一领域十年以上连续投入"] },
            ],
          },
        },
        en: {
          title: "Where ten-baggers can come from",
          stance: "Five-factor multiplication; score 8+/10 before treating as core",
          summary:
            "Definition: 10× market cap in 5–10 years driven by product profit. Hard gates: peak ≥$5 bn, keep ≥50% of value, exclusivity ≥7 years. Watch metabolic supply, autoimmune TCE/in vivo CAR-T, and next-gen ADCs.",
          matrix: {
            headers: ["Factor", "0 (trap)", "2 (super)"],
            rows: [
              { label: "Unmet need", cells: ["Many therapies; only convenience", "No therapy; tens of millions of patients"] },
              { label: "Efficacy gap", cells: ["Non-inferior only", "Head-to-head win that rewrites guidelines"] },
              { label: "Exclusivity", cells: ["<5y or crowded Phase III", ">8y + process/device barriers"] },
              { label: "Value capture", cells: ["Pure license-out, single-digit royalty", "Keep US rights; own or co-build commercial"] },
              { label: "Focus", cells: ["Pipeline across 4+ unrelated areas", "One domain for 10+ years"] },
            ],
          },
        },
      },
      {
        id: "india",
        released: true,
        layout: "compare",
        source: "Pharmexcil / NITI Aayog；司美印度专利到期公开报道（2026-03）",
        zh: {
          title: "印度镜鉴：全球药房的天花板",
          stance: "供应全世界最多的药片，只拿走很小一块利润",
          summary:
            "FY2026 印度药品出口约 311 亿美元，约等于礼来一年营收指引的三分之一出头。司美到期当天约 50 个品牌、降价八成——执行力世界级，价值捕获极低。中印是上下游，不是对称竞争。",
          compare: {
            left: {
              name: "印度",
              lines: [
                "出口约 311 亿美元创纪录，却是仿制药利润通缩池",
                "美国仿制药处方量约四成来自印度供给",
                "API 结构上仍依赖中国发酵类中间体（约 65%+）",
                "到期日执行机器强：50 品牌、三种剂型、一夜铺货",
              ],
            },
            right: {
              name: "对中国的映射",
              lines: [
                "司美中国到期会复制价格坍塌 + 集采剧本",
                "国内司美类似药应极低权重，钱在下一代分子",
                "「印度替代」对中国原料药威胁常被高估",
                "中国优势在分子工程、临床速度与 CDMO，不在仿制药铺货机",
              ],
            },
          },
        },
        en: {
          title: "India mirror: the pharmacy-of-the-world ceiling",
          stance: "Most tablets, little of the profit pool",
          summary:
            "FY2026 India drug exports ~$31.1 bn—about a third of Lilly’s annual sales guide. Semaglutide day-one: ~50 brands and ~80% price cuts—world-class execution, tiny value capture. China–India is upstream/downstream, not a symmetric race.",
          compare: {
            left: {
              name: "India",
              lines: [
                "Record ~$31 bn exports sitting in generic price deflation",
                "~40% of US generic scripts supplied from India",
                "Structurally dependent on China for fermentation APIs (~65%+)",
                "Day-one machine: ~50 brands, three forms, shelf-ready overnight",
              ],
            },
            right: {
              name: "Map to China",
              lines: [
                "China sema expiry will copy price collapse + volume procurement",
                "Weight domestic sema biosimilars near zero; pay for next-gen molecules",
                "“India substitution” as a threat to China API is often overstated",
                "China’s edge is molecule engineering, trial speed, CDMO—not generic shelf fill",
              ],
            },
          },
        },
      },
      {
        id: "platforms",
        released: true,
        layout: "timeline",
        source: "调研正文第 6–8 章产业史与平台技术代际",
        zh: {
          title: "技术主线：从染料厂到平台公司",
          stance: "代际迁移决定谁还能吃到下一块利润",
          summary:
            "药企史不是连续涨价史，是五次范式迁移。当下资本在卡位自免体内 CAR-T / TCE 与下一代 ADC；中国在非病毒递送人体验证上局部领先，但证据等级仍小。",
          timeline: [
            { when: "染料/原料厂", what: "欧洲起源：化工溢出做药" },
            { when: "小分子黄金年代", what: "美国后来居上，利润池锚定商保" },
            { when: "生物药浪潮", what: "抗体与重组蛋白重写估值" },
            { when: "平台与 AI", what: "ADC、双抗、细胞/基因、AI 发现——卖铲人更稳" },
            { when: "2026 信号", what: "礼来等累计约百亿美元卡位体内 CAR-T；中国完成部分全球首例人体验证" },
          ],
        },
        en: {
          title: "Tech line: from dye works to platform firms",
          stance: "Paradigm shifts decide who still eats the next profit pool",
          summary:
            "Pharma history is five paradigm shifts, not endless price rises. Capital is now staking autoimmune in vivo CAR-T/TCE and next-gen ADCs; China leads some non-viral first-in-human proofs—with still-tiny evidence.",
          timeline: [
            { when: "Dye / API works", what: "European origin: chemical spillover into drugs" },
            { when: "Small-molecule golden age", what: "US catches up; profit pool anchors on commercial insurance" },
            { when: "Biologics wave", what: "Antibodies and recombinant proteins rewrite valuation" },
            { when: "Platforms & AI", what: "ADC, bispecifics, cell/gene, AI discovery—shovel sellers steadier" },
            { when: "2026 signal", what: "~$100 bn-class stakes into in vivo CAR-T; China posts some global FIH proofs" },
          ],
        },
      },
      {
        id: "china-lead",
        released: true,
        layout: "matrix",
        source: "调研正文第 12 章中国竞争力分层；药明生物 / 传奇 / 信达公开业绩",
        zh: {
          title: "中国哪些领域全球领先",
          stance: "从 1 到 10 世界第一；从 0 到 1 仍弱",
          summary:
            "第一档：CDMO/CRDMO、ADC 供给、原料药、传奇式 CAR-T 商业化。第四档缺席：原创 first-in-class、全球商业化（除百济）、高端制剂出口。拆开经营性利润与 BD 一次性收益。",
          matrix: {
            headers: ["档位", "领域", "证据一句话"],
            rows: [
              { label: "第一档", cells: ["生物药 CDMO / 小分子 CRDMO", "药明系订单与复杂分子占比"] },
              { label: "第一档", cells: ["ADC 资产供给 / 原料药", "全球授权高占比；印度 API 仍依赖中国"] },
              { label: "第一档", cells: ["CAR-T 全球商业化", "传奇 CARVYKTI 2025 约 18.9 亿美元、产品线已盈利"] },
              { label: "第二档", cells: ["双抗 / TCE / 代谢差异化", "定义规则的局部样本，非全面主导"] },
              { label: "第四档", cells: ["原创靶点 / 全球销售 / 仿制药出海", "结构性短板，印度占制剂国际化"] },
            ],
          },
        },
        en: {
          title: "Where China leads globally",
          stance: "World-class 1→10; still weak 0→1",
          summary:
            "Tier one: CDMO/CRDMO, ADC supply, APIs, Legend-style CAR-T commercialization. Tier four absent: original first-in-class, global commercial (ex BeOne), premium generic export. Split operating profit from one-off BD.",
          matrix: {
            headers: ["Tier", "Domain", "One-line proof"],
            rows: [
              { label: "One", cells: ["Biologics CDMO / small-mol CRDMO", "WuXi-class backlog and complex-molecule mix"] },
              { label: "One", cells: ["ADC supply / APIs", "High share of global licenses; India still leans on China API"] },
              { label: "One", cells: ["CAR-T global commercial", "Legend CARVYKTI ~$1.89 bn in 2025; product line profitable"] },
              { label: "Two", cells: ["Bispecifics / TCE / metabolic differentiation", "Local rule-setters, not full dominance"] },
              { label: "Four", cells: ["Origin targets / global sales / generic export", "Structural gaps; India owns formulation export"] },
            ],
          },
        },
      },
    ],
  },
  {
    id: "solar",
    shelf: "industry",
    updated: "2026-09-22",
    frame: {
      zh: {
        title: "读光伏先抓这三问",
        points: [
          "这一轮和以往哪里不一样：需求是否首次收缩、产能是否真退出。",
          "利润离“瓦”有多远：设备辅材赚钱，主链一体化亏。",
          "同一能源叙事，钱为什么流向电池而不是组件。",
        ],
      },
      en: {
        title: "Read solar through three questions",
        points: [
          "What is new this cycle: first demand contraction, and whether capacity really exits.",
          "How far profit sits from the watt: equipment/auxiliaries earn; integrated modules lose.",
          "Same energy narrative—why money flowed to batteries, not modules.",
        ],
      },
    },
    zh: {
      title: "光伏",
      stance: "离组件越远，越不容易亏",
      blurb: "价值链、出清、First Solar、天花板、去银、钙钛矿、三条逃离路径——长稿后半也拆开了。",
    },
    en: {
      title: "Solar",
      stance: "The further from the module, the less likely the loss",
      blurb: "Value map, clearance, First Solar, ceilings, silver thrift, perovskite, three escapes—the long memo’s back half is in.",
    },
    chapters: [
      {
        id: "margins",
        released: true,
        chart: "bar",
        values: [28.6, 5.33],
        source: "Canadian Solar（阿特斯）2025 年报分部毛利率",
        zh: {
          title: "同一家公司，储能和组件不是一门生意",
          stance: "赚不赚钱先看环节，再看公司",
          summary: "阿特斯 2025 年储能毛利率 28.6%，组件毛利率 5.33%。差距说明利润在环节，不在“光伏公司”这个标签。",
          categories: ["储能", "组件"],
          seriesName: "毛利率",
          suffix: "%",
        },
        en: {
          title: "Storage and modules are different businesses",
          stance: "Look at the step in the chain before the company label",
          summary: "Canadian Solar's 2025 storage gross margin was 28.6%, against 5.33% for modules. The gap sits in the business line, not in the label “solar company”.",
          categories: ["Storage", "Modules"],
          seriesName: "Gross margin",
          suffix: "%",
        },
      },
      {
        id: "cycle",
        released: true,
        layout: "thesis",
        source: "国家能源局装机；BNEF 全球装机预测；SMM 现货价（经公开转述）",
        zh: {
          title: "这一轮周期和以往哪里不一样",
          stance: "需求首次收缩，供给只减产不退出",
          summary:
            "以前过剩可以等需求追上来。这一轮中国上半年新增装机约 −66%，全球首次年度接近零增长甚至负增长；名义产能仍接近需求两倍。",
          points: [
            {
              judge: "需求第一次真收缩",
              contrast: {
                left: "−66%",
                leftLabel: "中国 2026H1 新增装机同比",
                right: "−0.9%",
                rightLabel: "BNEF 2026 全球装机预测",
              },
              anchor: "136 号文后约八成项目要裸泳；收益模型不确定，投资方观望。",
              so: "估值锚应从成长切到重置成本与现金流。",
            },
            {
              judge: "去产量易，去产能难",
              anchor: "硅片/电池/组件产能均已破 1000GW，闲置线可随时复产。",
              so: "价格稍回暖，闲置产能就能把价格重新打下去。",
            },
            {
              judge: "价格已击穿现金成本",
              contrast: {
                left: "≈0.71",
                leftLabel: "TOPCon 组件（元/瓦，8 月口径）",
                right: "≈−66%",
                rightLabel: "自 2023 年累计跌幅量级",
              },
              anchor: "8 月反弹要看成交与库存，不是看报价。",
              so: "2026 筑底、2027 盈利修复，不等于景气反转。",
            },
          ],
        },
        en: {
          title: "How this cycle differs",
          stance: "First demand contraction; supply cuts output, not capacity",
          summary:
            "Prior gluts waited for demand to catch up. This round China H1 installs are about −66% y/y and global growth is near flat to negative; nameplate capacity is still ~2× demand.",
          points: [
            {
              judge: "Demand truly contracts",
              contrast: {
                left: "−66%",
                leftLabel: "China 2026H1 new installs y/y",
                right: "−0.9%",
                rightLabel: "BNEF 2026 global installs",
              },
              anchor: "After Document 136, ~80% of projects swim without a firm tariff model.",
              so: "Re-anchor valuation on replacement cost and cash, not growth.",
            },
            {
              judge: "Cutting output ≠ retiring capacity",
              anchor: "Wafer/cell/module capacity already exceeds 1,000 GW; idle lines can restart.",
              so: "Any price bounce invites idle capacity back.",
            },
            {
              judge: "Prices through cash cost",
              contrast: {
                left: "~0.71",
                leftLabel: "TOPCon module (RMB/W, August print)",
                right: "~−66%",
                rightLabel: "Cumulative drop since 2023",
              },
              anchor: "August rebounds need trades and inventory, not just offers.",
              so: "2026 trough and 2027 profit repair ≠ a boom rebound.",
            },
          ],
        },
      },
      {
        id: "longi",
        released: true,
        chart: "bar",
        values: [-64.2, -36],
        source: "隆基绿能 2025 年报、2026 半年报预告（临 2026-038）",
        zh: {
          title: "隆基跌了八成之后",
          stance: "连亏十一季，市场只按清算锚定价",
          summary:
            "2025 年归母净利约 −64 亿元；2026H1 预告约 −34 至 −38 亿元。市值自 2021 高点跌超八成。BC 可能对，但要先看到组件季度转正。",
          categories: ["2025 归母净利", "2026H1 预告中值"],
          seriesName: "亿元",
          suffix: "",
        },
        en: {
          title: "LONGi after an 80% decline",
          stance: "Eleven losing quarters—priced on a liquidation anchor",
          summary:
            "2025 net profit about −RMB 64 bn; 2026H1 guidance about −34 to −38 bn. Market cap is down more than 80% from the 2021 peak. BC may be right, but the market waits for a quarterly module profit print.",
          categories: ["2025 net profit", "2026H1 guide midpoint"],
          seriesName: "RMB bn",
          suffix: "",
        },
      },
      {
        id: "catl",
        released: true,
        layout: "compare",
        source: "隆基 2026H1 预告；宁德时代 2026H1 业绩公告",
        zh: {
          title: "隆基和宁德时代：钱流向了电池",
          stance: "同一能源叙事，利润池不在组件",
          summary:
            "一边连亏、市值约千亿；一边半年净利约 433 亿、市值万亿级。差别在需求结构、毛利和份额，不在“新能源”三个字。",
          compare: {
            left: {
              name: "隆基",
              lines: [
                "2026H1 归母约 −34 至 −38 亿元",
                "Q1 组件毛利率第三方口径约 −1.2%",
                "市值约 950 亿元量级（2026-07）",
                "估值：PE 为负，PB 约 1.8 倍",
              ],
            },
            right: {
              name: "宁德时代",
              lines: [
                "2026H1 归母约 +433 亿元（+42%）",
                "综合毛利率约 24%；储能系统约 24%",
                "动力电池全球份额约 40%",
                "市值万亿级；仍有分红与回购",
              ],
            },
          },
        },
        en: {
          title: "LONGi and CATL: the money went to batteries",
          stance: "Same energy narrative—profit pool is not in modules",
          summary:
            "One side still loses with a ~RMB 100 bn market cap; the other prints ~RMB 433 bn H1 profit and a trillion-class cap. The gap is demand mix, margin, and share—not the word “new energy”.",
          compare: {
            left: {
              name: "LONGi",
              lines: [
                "2026H1 net about −RMB 34 to −38 bn",
                "Q1 module gross margin ~−1.2% (third-party)",
                "Market cap ~RMB 95 bn (Jul 2026)",
                "Valuation: negative PE, PB ~1.8×",
              ],
            },
            right: {
              name: "CATL",
              lines: [
                "2026H1 net about +RMB 433 bn (+42%)",
                "Blended gross ~24%; storage systems ~24%",
                "Global EV battery share ~40%",
                "Trillion-class market cap; dividends and buybacks",
              ],
            },
          },
        },
      },
      {
        id: "value-map",
        released: true,
        layout: "matrix",
        source: "开源证券：2025 年 50 家光伏上市公司分部统计",
        zh: {
          title: "离瓦越远越赚钱：价值链地图",
          stance: "主链收入七成、亏光利润；辅材设备不到三成却赚钱",
          summary:
            "设备毛利率约 30%、净利率正；硅片净利率约 −23% 全链最惨。规律：卖水人赢，淘金者亏。",
          matrix: {
            headers: ["环节", "毛利率", "归母净利率"],
            rows: [
              { label: "设备", cells: ["≈30%", "+10.4%（最赚钱）"] },
              { label: "金刚线", cells: ["≈18%", "+3.5%"] },
              { label: "一体化组件", cells: ["≈3.3%", "−7.6%（收入最大）"] },
              { label: "硅料", cells: ["≈2.4%", "−12%"] },
              { label: "硅片", cells: ["≈−1.5%", "−23%（最惨）"] },
            ],
          },
        },
        en: {
          title: "Further from the watt, more profit: value map",
          stance: "Main chain ~70% of sales and almost all losses; auxiliaries/equipment earn",
          summary:
            "Equipment gross ~30% with positive net; wafers ~−23% net, worst on the chain. Shovel sellers win; gold diggers lose.",
          matrix: {
            headers: ["Step", "Gross margin", "Net margin"],
            rows: [
              { label: "Equipment", cells: ["~30%", "+10.4% (best)"] },
              { label: "Diamond wire", cells: ["~18%", "+3.5%"] },
              { label: "Integrated modules", cells: ["~3.3%", "−7.6% (largest sales)"] },
              { label: "Polysilicon", cells: ["~2.4%", "−12%"] },
              { label: "Wafers", cells: ["~−1.5%", "−23% (worst)"] },
            ],
          },
        },
      },
      {
        id: "clearout",
        released: true,
        layout: "timeline",
        source: "市场监管总局约谈公开报道；光伏行业协会能耗国标与倡议书（2026）",
        zh: {
          title: "出清为什么这么慢",
          stance: "反内卷 1.0 被反垄断叫停；2.0 换成能耗与成本底线",
          summary:
            "收储平台被认定瓜分市场后，期待落空是 2025 年末杀跌主因。现在用能耗门槛 + 成本核算通则 + 倡议书，仍要看成交与产能退出。",
          timeline: [
            { when: "2025-12", what: "光和谦成等平台注册，龙头承债式收储思路" },
            { when: "2026-01", what: "市监总局约谈；限产限价自律暂停" },
            { when: "2026-07", what: "三项能耗强制性国标 + 成本核算通则" },
            { when: "2026-08", what: "八大多晶硅龙头签反内卷倡议书（覆盖约 90% 产能）" },
            { when: "判读", what: "价格脉冲 ≠ 拐点；要看真实减产、库存下降、产能物理退出" },
          ],
        },
        en: {
          title: "Why clearance is so slow",
          stance: "Anti-involution 1.0 died on antitrust; 2.0 is energy and cost floors",
          summary:
            "After the stockpile platform was framed as market allocation, dashed hopes drove the late-2025 selloff. Now energy caps, a cost-accounting code, and pledges—still need trades and real capacity exits.",
          timeline: [
            { when: "Dec 2025", what: "Platform registered; majors float debt-for-capacity buyouts" },
            { when: "Jan 2026", what: "SAMR talks; output/price self-discipline paused" },
            { when: "Jul 2026", what: "Three mandatory energy GB standards + cost accounting code" },
            { when: "Aug 2026", what: "Eight poly majors sign anti-involution pledge (~90% capacity)" },
            { when: "Read", what: "Price pulse ≠ trough turn; need cuts, inventory down, physical exits" },
          ],
        },
      },
      {
        id: "firstsolar",
        released: true,
        layout: "compare",
        source: "First Solar 2026Q2 与全年指引；隆基出货/亏损公开口径",
        zh: {
          title: "First Solar：不是赢在制造",
          stance: "四道墙——技术、政策、合同、纪律——把它放进另一个市场",
          summary:
            "出货约隆基五分之一，却指引 EBITDA 26–28 亿美元；隆基半年仍亏。赢在 CdTe/UFLPA、45X+232、长协锁价，不是产线效率。",
          compare: {
            left: {
              name: "First Solar",
              lines: [
                "2026 销量指引约 17–18GW",
                "调整后 EBITDA 指引 26–28 亿美元",
                "在手订单约 45GW / 136 亿美元至 2030",
                "45X 抵免约 21–22 亿美元（约 0.17 美元/瓦）",
              ],
            },
            right: {
              name: "对照隆基",
              lines: [
                "组件出货目标约 80GW 量级",
                "2026H1 归母约 −34 至 −38 亿元",
                "现货标准品定价，无美国政策墙",
                "与 First Solar 不在同一利润池竞争",
              ],
            },
          },
        },
        en: {
          title: "First Solar: not a manufacturing win",
          stance: "Four walls—tech, policy, contracts, discipline—put it in another market",
          summary:
            "Shipments ~1/5 of LONGi’s yet EBITDA guide $2.6–2.8 bn; LONGi still loses in H1. Wins on CdTe/UFLPA, 45X+232, and long contracts—not line efficiency.",
          compare: {
            left: {
              name: "First Solar",
              lines: [
                "2026 volume guide ~17–18 GW",
                "Adj. EBITDA guide $2.6–2.8 bn",
                "Backlog ~45 GW / $13.6 bn into 2030",
                "45X credits ~$2.1–2.2 bn (~$0.17/W)",
              ],
            },
            right: {
              name: "vs LONGi",
              lines: [
                "Module shipment target ~80 GW class",
                "2026H1 net about −RMB 34 to −38 bn",
                "Spot commodity pricing; no US policy wall",
                "Not competing in the same profit pool",
              ],
            },
          },
        },
      },
      {
        id: "ceilings",
        released: true,
        layout: "thesis",
        source: "EIA / WoodMac / IEA；First Solar 45X 法定退坡；调研正文第 8–9 章",
        zh: {
          title: "两道天花板：补贴到期与 AI 用电",
          stance: "需求可以很大，制造端价值捕获仍然很低",
          summary:
            "First Solar 的 45X 2033 归零与订单悬崖叠在一起；AI 缺电真实，但容量因子决定光伏是配菜，主菜是储能与可调节电源。",
          points: [
            {
              judge: "45X 有到期日",
              contrast: {
                left: "100%",
                leftLabel: "2026–2029 抵免比例",
                right: "0",
                rightLabel: "2033 及以后",
              },
              anchor: "剥离补贴后空方测算毛利率可坍到个位数；需国会延期或七年内大幅降本。",
              so: "护城河是有日历的。",
            },
            {
              judge: "AI 用电 ≠ 组件暴利",
              anchor: "1GW 7×24 负载约需 4–6GW 光伏 + 储能 + 兜底电源。",
              so: "同一叙事下钱流向电池与可调节电源，有物理原因。",
            },
            {
              judge: "渗透率自我通缩",
              anchor: "装机越多午间电价越低；中国利用率红线已下调，江苏分布式一度同比大跌。",
              so: "破解靠储能/需求响应/输电——没有一条让组件更值钱。",
            },
          ],
        },
        en: {
          title: "Two ceilings: subsidy expiry and AI power",
          stance: "Demand can be huge; manufacturing still captures little value",
          summary:
            "First Solar’s 45X hits zero in 2033 beside an order cliff; AI power need is real, but capacity factor makes PV a side dish—storage and dispatchable power are the mains.",
          points: [
            {
              judge: "45X has an end date",
              contrast: {
                left: "100%",
                leftLabel: "Credit rate 2026–2029",
                right: "0",
                rightLabel: "2033 onward",
              },
              anchor: "Bear cases show mid-single-digit margins without credits unless Congress extends or costs fall hard in seven years.",
              so: "The moat has a calendar.",
            },
            {
              judge: "AI power ≠ module windfall",
              anchor: "1 GW of 24/7 load needs ~4–6 GW PV plus storage and backup.",
              so: "Money goes to batteries and dispatchable power for physics reasons.",
            },
            {
              judge: "Penetration self-deflates",
              anchor: "More installs crush midday prices; China cut utilization red lines; Jiangsu distributed once plunged y/y.",
              so: "Fixes are storage/demand response/transmission—none make modules richer.",
            },
          ],
        },
      },
      {
        id: "escape",
        released: true,
        chart: "bar",
        values: [1800, 2200, 250],
        source: "公开市值口径（2026年7–8月）：NextEra；宁德时代；First Solar",
        zh: {
          title: "为什么没有超高市值的太阳能制造商",
          stance: "有高市值，但不在制造端",
          summary:
            "NextEra 约 1800 亿美元是电站+公用事业；宁德约 2200 亿美元是电池；First Solar 约二百多亿美元且含补贴叙事。逃离商品化靠逆变器/储能、电站运营、政策隔离市场。",
          categories: ["NextEra", "宁德时代", "First Solar"],
          seriesName: "市值示意",
          suffix: " 亿美元",
        },
        en: {
          title: "Why no mega-cap solar manufacturers",
          stance: "Mega-caps exist—just not in module making",
          summary:
            "NextEra ~$180 bn is generation+utility; CATL ~$220 bn is batteries; First Solar is mid-$100 bn class with a subsidy story. Escapes are inverter/storage, asset ownership, or policy-walled markets.",
          categories: ["NextEra", "CATL", "First Solar"],
          seriesName: "Market-cap sketch",
          suffix: " $bn",
        },
      },
      {
        id: "silver",
        released: true,
        layout: "thesis",
        source: "中信建投期货测算；CPIA / 索比光伏网综合口径；银价公开行情",
        zh: {
          title: "成本换主角：从拥硅到去银",
          stance: "银浆已超硅料，成为电池成本第一项",
          summary:
            "2026 年初银浆约占电池片总成本 42%，已超硅。BC 单瓦银耗最高。银价越过临界点后，去银（银包铜/电镀铜）比 TOPCon vs BC 之争更确定。",
          points: [
            {
              judge: "成本表第一行换人",
              contrast: {
                left: "≈42%",
                leftLabel: "银浆占电池片总成本",
                right: "+147%",
                rightLabel: "2025 年伦敦银涨幅量级",
              },
              anchor: "敏感度：银价涨 10%，组件单位成本约 +0.01 元/瓦。",
              so: "8 月组件涨价一半是成本推动——钱交给浆料与白银，不留在组件厂。",
            },
            {
              judge: "BC 最耗银",
              contrast: {
                left: "10–13",
                leftLabel: "TOPCon 单瓦银耗 mg/W",
                right: "15–18",
                rightLabel: "XBC / HPBC 单瓦银耗",
              },
              anchor: "效率溢价约 1–2 美分/瓦，同时被银价吃掉。",
              so: "隆基 BC 赌局的赔率被银价改写。",
            },
            {
              judge: "去银临界点已过",
              anchor: "现价约 16000 元/kg 以上，银包铜与铜浆经济性临界均被越过。",
              so: "比路线之争更硬的技术演进；铜浆仍需银/镍种子层，是半程方案。",
            },
          ],
        },
        en: {
          title: "Cost lead changes: from silicon to silver thrift",
          stance: "Silver paste already beat silicon as the top cell cost line",
          summary:
            "Early 2026 silver paste is ~42% of cell cost, above silicon. BC uses the most silver per watt. Past the silver-price threshold, thrifting (Ag-coated Cu / Cu plating) is more certain than TOPCon vs BC.",
          points: [
            {
              judge: "Top cost line changed",
              contrast: {
                left: "~42%",
                leftLabel: "Paste share of cell cost",
                right: "+147%",
                rightLabel: "2025 London silver move, order of magnitude",
              },
              anchor: "Sensitivity: +10% silver ≈ +RMB 0.01/W module cost.",
              so: "Half of August module lifts were cost-push—cash went to paste and silver, not module makers.",
            },
            {
              judge: "BC is the silver hog",
              contrast: {
                left: "10–13",
                leftLabel: "TOPCon mg Ag / W",
                right: "15–18",
                rightLabel: "XBC / HPBC mg Ag / W",
              },
              anchor: "Efficiency premium ~1–2 ¢/W gets eaten by silver at the same time.",
              so: "LONGi’s BC odds were rewritten by the silver tape.",
            },
            {
              judge: "Thrift thresholds already crossed",
              anchor: "Above ~RMB 16,000/kg, Ag-coated Cu and Cu paste economics both clear.",
              so: "Harder tech path than cell-architecture wars; Cu still needs Ag/Ni seed—half a solution.",
            },
          ],
        },
      },
      {
        id: "perovskite",
        released: true,
        layout: "timeline",
        source: "协鑫光电公开里程碑；TÜV 南德 / 交大白皮书；极电光能成本路径（公司口径）",
        zh: {
          title: "钙钛矿：可能让现有资产提前归零的期权",
          stance: "效率已赢，寿命未赢；估值里在计提技术归零",
          summary:
            "量产叠层效率已到 26.5%–28%，认证突破 30%。公司口径成本仍比晶硅贵约 1 元/瓦。产线折旧 20 年、技术寿命 3–5 年——终值不可信，故给低 PB。",
          timeline: [
            { when: "2025-06", what: "协鑫昆山 GW 级叠层产线投产（全球首条宣称）" },
            { when: "2025-12", what: "2m² 叠层稳态效率 27.06%；IEC 安全认证" },
            { when: "2026-03", what: "小批量量产，良率 98%+，开始交付小订单" },
            { when: "2026-06", what: "大面积叠层认证效率 30.23%，首次跨越 30%" },
            { when: "约束", what: "光照 1000h 保持率约 80%；面积放大效率掉台阶；出货仍百 MW 级" },
          ],
        },
        en: {
          title: "Perovskite: an option that can zero existing assets early",
          stance: "Efficiency already wins; lifetime does not—valuations accrue tech-zero risk",
          summary:
            "Production tandem efficiencies 26.5–28%, certified through 30%. Company cost still ~RMB 1/W above c-Si. 20-year depreciation vs 3–5-year tech life—terminal value untrustworthy, hence low PB.",
          timeline: [
            { when: "Jun 2025", what: "GCL Kunshan GW tandem line starts (claimed first)" },
            { when: "Dec 2025", what: "2 m² tandem steady 27.06%; IEC safety cert" },
            { when: "Mar 2026", what: "Small-batch production, 98%+ yield, early deliveries" },
            { when: "Jun 2026", what: "Large-area tandem certified 30.23%, first through 30%" },
            { when: "Constraint", what: "~80% after 1000h light; area scaling tax; shipments still ~100 MW class" },
          ],
        },
      },
      {
        id: "paths",
        released: true,
        layout: "compare",
        source: "阿特斯 2025 年报分部；CPIA 海外产能；调研正文第 16 章三条逃离路径",
        zh: {
          title: "逃离商品化的三条路",
          stance: "储能换环节、海外建墙、电站运营——已有人走通",
          summary:
            "阿特斯同一年报里储能毛利 28.6%、组件 5.33%。中东建厂买的是地缘中立，不是东南亚绕税。隆基在原环节做 BC，同行在换地图。",
          compare: {
            left: {
              name: "路径",
              lines: [
                "① 储能/系统：卖确定性，毛利数倍于卖瓦",
                "② 产能本地化：中东取得中立产地，服务本地+欧洲",
                "③ 电站/公用事业：价值留在发电资产端（NextEra 型）",
              ],
            },
            right: {
              name: "对隆基的含义",
              lines: [
                "五家头部里储能布局最慢",
                "BC 是在「卖瓦」位置争溢价",
                "叠层成熟可能让晶硅内部之争换战场",
                "跟踪：叠层路线图 + 协鑫 1GW 实际出货与衰减",
              ],
            },
          },
        },
        en: {
          title: "Three escapes from commoditization",
          stance: "Storage shift, overseas walls, asset ownership—already walked",
          summary:
            "Canadian Solar’s same 10-K: storage gross 28.6% vs modules 5.33%. Mid-East plants buy geopolitical neutrality, not SE-Asia tariff hops. LONGi fights BC inside modules while peers change maps.",
          compare: {
            left: {
              name: "Paths",
              lines: [
                "① Storage/systems: sell certainty; margins multiples of selling watts",
                "② Localized capacity: Mid-East neutrality for local + Europe",
                "③ Generation/utility: value stays in power assets (NextEra type)",
              ],
            },
            right: {
              name: "Read for LONGi",
              lines: [
                "Slowest storage move among the five majors",
                "BC seeks premium while still “selling watts”",
                "Mature tandems may relocate the c-Si efficiency war",
                "Watch: tandem roadmap + GCL 1 GW real shipments and fade",
              ],
            },
          },
        },
      },
    ],
  },
  {
    id: "robots",
    shelf: "industry",
    updated: "2026-08-17",
    frame: {
      zh: {
        title: "读机器人先抓这三问",
        points: [
          "钱花在哪一段：执行器与灵巧手吃掉大半 BOM。",
          "特斯拉难在哪里：供应链几乎要从零建。",
          "宇树毛利高能不能持续：全栈自研 vs 价格战与研发前移。",
        ],
      },
      en: {
        title: "Read robots through three questions",
        points: [
          "Where the money sits: actuators and hands eat most of the BOM.",
          "Why Tesla is hard: almost no mature supply chain.",
          "Can Unitree keep 60% gross: full-stack vs price war and R&D shift.",
        ],
      },
    },
    zh: {
      title: "机器人：特斯拉与宇树",
      stance: "整机组装很薄，全栈自研是例外",
      blurb: "难度四层、毛利金字塔、难度≠利润、利润迁移、特斯拉对照——备忘录主线都展开。",
    },
    en: {
      title: "Robots: Tesla and Unitree",
      stance: "Assembly is thin. A full-stack maker is the exception",
      blurb: "Difficulty layers, margin pyramid, hard≠rich, profit migration, Tesla compare—memo spine expanded.",
    },
    chapters: [
      {
        id: "margins",
        released: true,
        chart: "bar",
        values: [60, 38, 12],
        source: "宇树科技科创板招股书；优必选 2025 年报；组装环节毛利率为行业常见区间",
        zh: {
          title: "整机本身不赚钱，宇树是例外",
          stance: "先看毛利留在哪一段",
          summary: "宇树 2025 年主营毛利率 60%。优必选整体毛利率约 38%，并且仍然亏损。多数整机组装的毛利率只有大约 10% 到 15%。",
          categories: ["宇树", "优必选", "一般整机组装"],
          seriesName: "毛利率",
          suffix: "%",
        },
        en: {
          title: "The machine itself is a thin business",
          stance: "See which step keeps the margin",
          summary: "Unitree's 2025 gross margin was 60%. UBTECH's overall gross margin was about 38%, and it still lost money. Typical assembly margins are about 10% to 15%.",
          categories: ["Unitree", "UBTECH", "Typical assembly"],
          seriesName: "Gross margin",
          suffix: "%",
        },
      },
      {
        id: "tesla",
        released: true,
        layout: "thesis",
        source: "特斯拉 2026Q2 电话会；Optimus 公开产能规划与供应链报道",
        zh: {
          title: "特斯拉：难在一条还不存在的供应链",
          stance: "几乎所有零件都没有成熟供应商",
          summary:
            "马斯克原话：造车能买轮毂和玻璃；造 Optimus 要内部从零做。卡点在灵巧手、稀土磁体和数据闭环。",
          points: [
            {
              judge: "供应链要从零建",
              anchor: "初期爬坡会平缓且漫长；供应商被要求备好约 10 万套/年产能。",
              so: "整机厂把资本开支风险转给供应链。",
            },
            {
              judge: "灵巧手是最后一厘米",
              contrast: {
                left: "22",
                leftLabel: "Gen3 单手自由度",
                right: "≈50",
                rightLabel: "双手执行器数量量级",
              },
              anchor: "工程量接近整机一半；腱绳方案曾公开后又改口。",
              so: "难度乘数在微型化与集成。",
            },
            {
              judge: "稀土与数据闭环",
              anchor: "单台约 3.5kg 钕铁硼；中国约占九成磁体产能。工厂外部真实作业数据仍稀缺。",
              so: "没有部署就没有数据，没有数据就没有泛化。",
            },
          ],
        },
        en: {
          title: "Tesla: the missing supply chain",
          stance: "Almost no mature parts vendors exist",
          summary:
            "Musk’s line: cars have wheels and glass vendors; Optimus must be built inside from zero. Bottlenecks: hands, rare-earth magnets, and the data loop.",
          points: [
            {
              judge: "Build the chain from scratch",
              anchor: "Early ramp will be slow; suppliers are asked to stand up ~100k sets/year.",
              so: "OEMs push capex risk onto the supply base.",
            },
            {
              judge: "Hands are the last centimeter",
              contrast: {
                left: "22",
                leftLabel: "Gen3 DoF per hand",
                right: "~50",
                rightLabel: "Actuators across both hands",
              },
              anchor: "Near half the engineering; tendon designs were shown then walked back.",
              so: "Miniaturization multiplies difficulty.",
            },
            {
              judge: "Magnets and data",
              anchor: "~3.5 kg NdFeB per unit; China ~90% of magnet capacity. Real out-of-factory task data is still scarce.",
              so: "No deployment, no data; no data, no generalization.",
            },
          ],
        },
      },
      {
        id: "unitree",
        released: true,
        chart: "bar",
        values: [60.13, -52.55],
        source: "宇树科技科创板招股书；2026Q1 披露与半年指引",
        zh: {
          title: "宇树：毛利高，但一季度利润腰斩",
          stance: "用当期利润买大脑与品牌场券",
          summary:
            "2025 年主营毛利率约 60%。2026Q1 扣非净利同比约 −53%。研发与销售费用前移，招股书已提示毛利率难永久维持。",
          categories: ["2025 主营毛利率", "2026Q1 扣非净利同比"],
          seriesName: "",
          suffix: "%",
        },
        en: {
          title: "Unitree: high margin, then a profit drop",
          stance: "Spending current profit on “brain” and brand",
          summary:
            "2025 main-business gross margin ~60%. 2026Q1 adjusted net down ~53% y/y. R&D and selling costs moved forward; the prospectus already warns high margins may not last.",
          categories: ["2025 gross margin", "2026Q1 adj. net y/y"],
          seriesName: "",
          suffix: "%",
        },
      },
      {
        id: "chain",
        released: true,
        chart: "pie",
        values: [50, 18, 22, 10],
        source: "中国信通院 2026Q1 监测与券商 BOM 拆解（量级）",
        zh: {
          title: "一台机器人的钱花在哪",
          stance: "上游零部件吃掉约七成五到八成 BOM",
          summary:
            "执行器（含灵巧手）约 40%–60% 是价值最密的一块；感知、结构、控制器瓜分其余。中国供应链相对非中国供应链，单台物料成本可差近三倍。",
          categories: ["执行器中枢", "感知传感", "结构件", "控制与其他"],
          seriesName: "占 BOM 示意",
          suffix: "%",
        },
        en: {
          title: "Where the money in one robot goes",
          stance: "Upstream parts take about 75–80% of BOM",
          summary:
            "Actuators (including hands) at ~40–60% are the densest value block; sensing, structure, and control split the rest. China vs non-China bill-of-materials can differ by nearly 3× per unit.",
          categories: ["Actuators (mid)", "Sensing", "Structure", "Control & other"],
          seriesName: "BOM sketch",
          suffix: "%",
        },
      },
      {
        id: "hard",
        released: true,
        layout: "thesis",
        source: "调研正文第 6 章四层难度模型；Physical Intelligence 等公开 scaling 数据",
        zh: {
          title: "最难环节：四层难度",
          stance: "大脑全行业未解；灵巧手与良率次之",
          summary:
            "难度按技术天花板、良率、供给稀缺、验证周期排。最难不等于现在最赚钱。",
          points: [
            {
              judge: "第一难：大脑",
              anchor: "分布外场景断崖；数据 scaling 已走平；真机数据不可爬取。",
              so: "全行业都没解决——现在是成本中心。",
            },
            {
              judge: "第二难：灵巧手上游",
              anchor: "空心杯、腱绳、触觉；工程量近半台整机。",
              so: "供给稀缺时利润厚，一旦通了也会折旧。",
            },
            {
              judge: "第三难：量产良率",
              anchor: "从样机到十万套/年，良率工程决定谁能接特斯拉订单。",
              so: "资本开支风险常被整机厂转给供应链。",
            },
            {
              judge: "相对容易但被高估",
              anchor: "无框力矩电机、谐波减速器国产化已跑通。",
              so: "绿的谐波毛利率已连年下滑——稀缺窗口在关。",
            },
          ],
        },
        en: {
          title: "Hardest steps: four layers",
          stance: "Brain unsolved industry-wide; hands and yield next",
          summary:
            "Rank by tech ceiling, yield, scarcity, and qualification time. Hardest ≠ richest today.",
          points: [
            {
              judge: "Hardest: the brain",
              anchor: "OOD cliffs; scaling laws flat; robot data cannot be scraped.",
              so: "Industry-wide unsolved—still a cost center.",
            },
            {
              judge: "Second: hand upstream",
              anchor: "Hollow-cup motors, tendons, tactile; near half the machine’s engineering.",
              so: "Thick profit while scarce; depreciates once solved.",
            },
            {
              judge: "Third: production yield",
              anchor: "Prototype to 100k sets/year—yield engineering gates Tesla-class POs.",
              so: "OEMs often push capex risk onto suppliers.",
            },
            {
              judge: "Easier than hyped",
              anchor: "Frameless torque motors and harmonic reducers already localized.",
              so: "Leaderx gross margins already slide—scarcity window closing.",
            },
          ],
        },
      },
      {
        id: "pyramid",
        released: true,
        chart: "bar",
        values: [65, 55, 40, 12],
        source: "信通院/券商 BOM 测算；绿的谐波与宇树招股书交叉验证",
        zh: {
          title: "毛利率金字塔",
          stance: "顶层传感器与丝杠，底层组装；宇树是垂直整合例外",
          summary:
            "视觉传感约 60%–70%，行星滚柱丝杠约 50%–60%，谐波约 35%–45%，一般组装约 10%–15%。宇树 60% 是把上游吃进报表。",
          categories: ["视觉传感", "行星滚柱丝杠", "谐波减速器", "一般组装"],
          seriesName: "毛利率中枢示意",
          suffix: "%",
        },
        en: {
          title: "Gross-margin pyramid",
          stance: "Sensors and screws on top; assembly at the bottom; Unitree is vertical integration",
          summary:
            "Vision sensors ~60–70%, planetary roller screws ~50–60%, harmonics ~35–45%, typical assembly ~10–15%. Unitree’s 60% internalizes upstream.",
          categories: ["Vision sensors", "Roller screws", "Harmonics", "Typical assembly"],
          seriesName: "Gross-margin midpoints",
          suffix: "%",
        },
      },
      {
        id: "mismatch",
        released: true,
        layout: "matrix",
        source: "调研正文第 8 章难度≠利润四象限",
        zh: {
          title: "难度 ≠ 利润",
          stance: "产业链最大的认知错配",
          summary:
            "最难的大脑当下不赚钱；赚钱的是稀缺与切换成本。整机高毛利靠把上游变成自己。",
          matrix: {
            headers: ["", "利润厚", "利润薄"],
            rows: [
              { label: "难度高", cells: ["丝杠 / 灵巧手 / 六维力", "大脑（纯投入）"] },
              { label: "难度低", cells: ["全栈品牌整机（宇树）", "电机 / 结构件 / 纯组装"] },
            ],
          },
        },
        en: {
          title: "Hard ≠ rich",
          stance: "The chain’s biggest cognitive mismatch",
          summary:
            "The hardest brain earns nothing today; scarcity and switching costs pay. High OEM gross comes from owning upstream.",
          matrix: {
            headers: ["", "Thick profit", "Thin profit"],
            rows: [
              { label: "Hard", cells: ["Screws / hands / 6-axis force", "Brain (pure spend)"] },
              { label: "Easier", cells: ["Full-stack branded OEMs (Unitree)", "Motors / structure / pure assembly"] },
            ],
          },
        },
      },
      {
        id: "migrate",
        released: true,
        layout: "timeline",
        source: "调研正文第 9 章利润迁移三段论",
        zh: {
          title: "利润迁移：2026 / 2028 / 2030",
          stance: "钱从卡脖子螺丝迁到总成，再迁到大脑与服务",
          summary:
            "近两年确定性在丝杠与传感器；其后看关节模组与良率；更远才是模型、芯片与服务。",
          timeline: [
            { when: "2026–2027", what: "钱在行星滚柱丝杠、六维力/触觉、谐波、空心杯——供需缺口仍在" },
            { when: "2028–2030", what: "钱在关节模组总成与良率工程；单件差异化被磨平" },
            { when: "2030+", what: "钱在大脑、芯片与服务——前提是真机数据闭环跑通" },
          ],
        },
        en: {
          title: "Profit migration: 2026 / 2028 / 2030",
          stance: "From bottleneck screws to modules, then brain and services",
          summary:
            "Near-term certainty in screws and sensors; then joint modules and yield; only later models, chips, and services.",
          timeline: [
            { when: "2026–2027", what: "Money in roller screws, 6-axis/tactile, harmonics, hollow-cup—gap still open" },
            { when: "2028–2030", what: "Money in joint modules and yield engineering; single-part differentiation erodes" },
            { when: "2030+", what: "Money in brain, chips, services—if the real-world data loop closes" },
          ],
        },
      },
      {
        id: "versus",
        released: true,
        layout: "compare",
        source: "调研正文第 10 章特斯拉 vs 宇树模式对照",
        zh: {
          title: "特斯拉 vs 宇树",
          stance: "两种模式：从零建链 vs 全栈卖科研整机",
          summary:
            "特斯拉难在供应链与数据闭环，目标是工厂劳动力；宇树难在价格战与大脑投入，当下靠科研教育客户撑毛利。",
          compare: {
            left: {
              name: "特斯拉 Optimus",
              lines: [
                "几乎无成熟供应商，内部自研为主",
                "卡点：灵巧手、稀土磁体、真机数据",
                "把 10 万套/年产能义务压给供应商",
                "终局想象：自家工厂可规模化劳动力",
              ],
            },
            right: {
              name: "宇树",
              lines: [
                "自研率超 90%，毛利率约 60%",
                "客户偏科研教育，价格敏感度低",
                "2026Q1 扣非腰斩：研发+销售换场券",
                "自己也能打价格战，缓冲来自垂直整合",
              ],
            },
          },
        },
        en: {
          title: "Tesla vs Unitree",
          stance: "Two modes: build a chain from zero vs full-stack research machines",
          summary:
            "Tesla’s hard problems are supply chain and data loops aimed at factory labor; Unitree’s are price wars and brain spend, with research/education customers holding margins today.",
          compare: {
            left: {
              name: "Tesla Optimus",
              lines: [
                "Almost no mature vendors; mostly in-house",
                "Bottlenecks: hands, rare-earth magnets, real-task data",
                "Pushes ~100k sets/year readiness onto suppliers",
                "Endgame: scalable labor inside Tesla factories",
              ],
            },
            right: {
              name: "Unitree",
              lines: [
                ">90% self-made; gross margin ~60%",
                "Research/education buyers; lower price sensitivity",
                "2026Q1 adjusted net halved: R&D + selling buy the ticket",
                "Can wage price wars; buffer is vertical integration",
              ],
            },
          },
        },
      },
      {
        id: "bot-risks",
        released: true,
        layout: "thesis",
        source: "调研正文第 11 章风险提示",
        zh: {
          title: "机器人：风险清单",
          stance: "量产元年叙事下，五盏灯先亮要降预期",
          summary:
            "供应链地缘、价格战、大脑投入吞噬利润、特斯拉订单不及预期、估值对叙事过敏——比看好整机口号更重要。",
          points: [
            {
              judge: "稀土与出口管制",
              anchor: "单台约 3.5kg 钕铁硼；中国约占九成磁体产能。",
              so: "Optimus 量产进度对许可敏感。",
            },
            {
              judge: "价格战由龙头发起",
              anchor: "宇树有能力也有缓冲打价格；上游以量补价。",
              so: "零部件高毛利窗口可能比预期关得快。",
            },
            {
              judge: "大脑仍是成本中心",
              anchor: "募资大头投模型，当期净利被研发砸穿。",
              so: "高毛利整机 ≠ 高净利可持续。",
            },
          ],
        },
        en: {
          title: "Robots: risk list",
          stance: "In a “mass-production year” narrative, five lights still cut forecasts",
          summary:
            "Magnet geopolitics, price wars, brain spend eating profit, Tesla order misses, narrative-sensitive multiples—more important than OEM slogans.",
          points: [
            {
              judge: "Rare earths and export controls",
              anchor: "~3.5 kg NdFeB per unit; China ~90% of magnet capacity.",
              so: "Optimus ramps are license-sensitive.",
            },
            {
              judge: "Price wars started by leaders",
              anchor: "Unitree can and will cut; upstream shifts to volume over price.",
              so: "Fat component margins may close faster than expected.",
            },
            {
              judge: "Brain remains a cost center",
              anchor: "Fundraising skews to models; near-term net gets hit by R&D.",
              so: "High OEM gross ≠ durable high net.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "semiconductor",
    shelf: "industry",
    updated: "2026-07-15",
    frame: {
      zh: {
        title: "读半导体国产替代先抓这三问",
        points: [
          "替代弹性在哪一段：上游设备材料 EDA 更低国产化率。",
          "制造扩产是什么角色：上游订单的先行指标。",
          "什么会证伪：管制升级、周期下行、验证不及预期。",
        ],
      },
      en: {
        title: "Read domestic semis through three questions",
        points: [
          "Where substitution torque sits: equipment, materials, EDA are least localized.",
          "What fab expansion means: the lead indicator for upstream orders.",
          "What falsifies: tighter controls, cycle down, failed qualification.",
        ],
      },
    },
    zh: {
      title: "半导体：国产替代",
      stance: "越往上游，替代空间越大",
      blurb: "有的章用柱图，有的用矩阵和结论卡。先看国产化率量级，再看全景、分环节标的和风险。",
    },
    en: {
      title: "Semiconductors: domestic substitution",
      stance: "The further upstream, the more room there is",
      blurb: "Bars, a matrix, and thesis cards. Start with localization magnitudes, then the chain map, names by step, and risks.",
    },
    chapters: [
      {
        id: "localization",
        released: true,
        chart: "bar",
        values: [40, 20, 20, 10],
        source: "产业链公开信息的国产化率量级估计；非精确普查，请以公司财报与权威数据为准",
        zh: {
          title: "上游的国产化率更低",
          stance: "这是量级，不是精确统计",
          summary: "成熟芯片设计的国产化率大约在 30% 到 50%。设备、材料大致还在两成上下，EDA 更低。弹性在国产化率低的环节。",
          categories: ["成熟设计", "设备", "材料", "EDA"],
          seriesName: "大致国产化率",
          suffix: "%",
        },
        en: {
          title: "Upstream localization is still low",
          stance: "These are magnitudes, not a census",
          summary: "Mature chip design is roughly 30% to 50% localized. Equipment and materials are nearer 20%, and EDA is lower. The room is where localization is still low.",
          categories: ["Mature design", "Equipment", "Materials", "EDA"],
          seriesName: "Rough localization",
          suffix: "%",
        },
      },
      {
        id: "chain",
        released: true,
        layout: "thesis",
        source: "A 股半导体国产替代调研：产业链全景框架",
        zh: {
          title: "产业链全景",
          stance: "主链定义芯片，上游卖铲人吃替代弹性",
          summary:
            "设计 → 制造 → 封测是主链；EDA/IP、设备、材料、零部件是上游。投资含义：上游不押单一芯片赢家，客户是所有晶圆厂。",
          points: [
            {
              judge: "主链三环",
              anchor: "谁定义芯片（设计）、谁生产（制造）、谁封装测试（OSAT）。",
              so: "成熟制程扩产是上游订单的“水龙头”。",
            },
            {
              judge: "上游四类卖铲人",
              contrast: {
                left: "设备+材料",
                leftLabel: "弹性最大的量价方向",
                right: "EDA/IP",
                rightLabel: "长坡、极低国产化率",
              },
              anchor: "导入周期长，一旦通过验证粘性极强。",
              so: "先看验证进度，再看份额故事。",
            },
            {
              judge: "路径规律",
              anchor: "成熟先行、由易到难、自下而上。",
              so: "先进制程受管制，常用成熟制程 + 先进封装迂回。",
            },
          ],
        },
        en: {
          title: "The chain",
          stance: "Main chain defines the chip; upstream sells the shovels",
          summary:
            "Design → fab → OSAT is the main chain; EDA/IP, equipment, materials, and parts sit upstream. Upstream does not bet on one chip winner—fabs are the customer base.",
          points: [
            {
              judge: "Three main-chain steps",
              anchor: "Who defines (design), who builds (fab), who packages/tests (OSAT).",
              so: "Mature-node expansion is the upstream order faucet.",
            },
            {
              judge: "Four shovel categories",
              contrast: {
                left: "Equip + materials",
                leftLabel: "Biggest volume×price torque",
                right: "EDA / IP",
                rightLabel: "Long slope, very low localization",
              },
              anchor: "Long qualification; sticky once qualified.",
              so: "Watch qualification progress before share stories.",
            },
            {
              judge: "Substitution path",
              anchor: "Mature first, easy to hard, bottom-up.",
              so: "Advanced nodes constrained; mature nodes + advanced packaging are the detour.",
            },
          ],
        },
      },
      {
        id: "names",
        released: true,
        layout: "matrix",
        source: "公开产业链梳理示例；不构成推荐，请以最新财报为准",
        zh: {
          title: "分环节的标的",
          stance: "沿链看代表性，不按热搜点名单",
          summary:
            "矩阵只作结构示意。设备/材料弹性最大；制造是景气锚；设计看高端突破。",
          matrix: {
            headers: ["环节", "看点", "示例（代码）"],
            rows: [
              { label: "设备", cells: ["平台刻蚀/薄膜/清洗", "北方华创 002371；中微 688012"] },
              { label: "材料", cells: ["硅片/特气/靶材", "沪硅 688126；江丰 300666"] },
              { label: "制造", cells: ["成熟制程扩产基石", "中芯国际 688981"] },
              { label: "封测", cells: ["先进封装迂回", "长电 600584；通富 002156"] },
              { label: "设计", cells: ["AI/模拟/存储接口", "寒武纪 688256；澜起 688008"] },
              { label: "EDA/IP", cells: ["长坡工具链", "华大九天等（见调研原文）"] },
            ],
          },
        },
        en: {
          title: "Names by step",
          stance: "Representative map along the chain—not a hot-list",
          summary:
            "A structural sketch only. Equipment/materials carry torque; fabs anchor the cycle; design is high-end upside.",
          matrix: {
            headers: ["Step", "Angle", "Examples (codes)"],
            rows: [
              { label: "Equipment", cells: ["Etch/dep/clean platforms", "NAURA 002371; AMEC 688012"] },
              { label: "Materials", cells: ["Wafers/gases/targets", "NSIG 688126; Konfoong 300666"] },
              { label: "Fab", cells: ["Mature-node expansion", "SMIC 688981"] },
              { label: "OSAT", cells: ["Advanced packaging detour", "JCET 600584; TFME 002156"] },
              { label: "Design", cells: ["AI/analog/memory I/F", "Cambricon 688256; Montage 688008"] },
              { label: "EDA/IP", cells: ["Long-slope toolchain", "See memo for names"] },
            ],
          },
        },
      },
      {
        id: "risks",
        released: true,
        layout: "thesis",
        source: "A 股半导体国产替代调研 §七",
        zh: {
          title: "风险",
          stance: "确定性主线里，五盏灯仍要每月看",
          summary:
            "管制升级短期利空产能、中长期强化替代；周期、估值、良率、价格战都可能打断交易节奏。",
          points: [
            {
              judge: "出口管制双向",
              anchor: "进一步限制设备/材料/EDA 会拖慢扩产，但强化自主可控刚需。",
              so: "利空与催化并存，别只读一边。",
            },
            {
              judge: "周期与估值",
              anchor: "需求下行时资本开支收缩，上游订单最先疼；预期已部分计价。",
              so: "兑现不及预期会杀估值。",
            },
            {
              judge: "验证与竞争",
              anchor: "光刻/高端光刻胶等良率爬坡不确定；设计环节易内卷降价。",
              so: "先看头部晶圆厂批量供货证据。",
            },
          ],
        },
        en: {
          title: "Risks",
          stance: "Even on a durable theme, five lights still need monthly checks",
          summary:
            "Tighter controls slow capacity near-term and harden substitution longer-term; cycle, valuation, yield, and price wars can still break the trade.",
          points: [
            {
              judge: "Export controls cut both ways",
              anchor: "More limits on tools/materials/EDA slow expansion but raise the security mandate.",
              so: "Read both the headwind and the catalyst.",
            },
            {
              judge: "Cycle and valuation",
              anchor: "Downcycles cut capex first upstream; expectations are partly priced.",
              so: "Missed delivery kills multiples.",
            },
            {
              judge: "Qualification and competition",
              anchor: "Lithography/high-end resists still face yield risk; design segments price-war easily.",
              so: "Demand proof of volume supply into top fabs.",
            },
          ],
        },
      },
      {
        id: "drivers",
        released: true,
        layout: "thesis",
        source: "A 股半导体国产替代调研 §六成长空间四大驱动力",
        zh: {
          title: "四大驱动力",
          stance: "替代主线要拆成可验证的四股力",
          summary:
            "大市场低自给是底；出口管制把替代变成刚需；大基金与科创板提供长钱；成熟先行、自下而上是路径。制造扩产是上游订单的水龙头。",
          points: [
            {
              judge: "供需错配",
              anchor: "中国消费全球约三分之一半导体，自给远低于消费占比。",
              so: "空间在缺口，不在口号。",
            },
            {
              judge: "管制倒逼",
              anchor: "先进制程设备、EDA、高算力芯片受限，验证导入加速。",
              so: "短期伤产能，中长期强化国产订单。",
            },
            {
              judge: "资本与政策",
              anchor: "大基金三期、税收与科创板通道拉长投入周期。",
              so: "看验证进度与订单，不只看主题热度。",
            },
            {
              judge: "路径：成熟先行",
              anchor: "28nm 及以上扩产确定，直接拉动设备材料；先进封装迂回先进制程。",
              so: "组合：制造锚 + 设备材料弹性 + 高端设计进攻。",
            },
          ],
        },
        en: {
          title: "Four growth drivers",
          stance: "Split the substitution theme into four checkable forces",
          summary:
            "Big market / low self-sufficiency is the base; export controls make substitution mandatory; funds and STAR supply long capital; mature-first bottom-up is the path. Fab expansion is the upstream order faucet.",
          points: [
            {
              judge: "Supply–demand gap",
              anchor: "China consumes ~1/3 of global semis with far lower self-sufficiency.",
              so: "The room is the gap, not the slogan.",
            },
            {
              judge: "Controls force the issue",
              anchor: "Advanced tools, EDA, and high-compute chips restricted—qualification accelerates.",
              so: "Near-term capacity pain; longer-term domestic orders.",
            },
            {
              judge: "Capital and policy",
              anchor: "Big Fund III, tax, and STAR lengthen the capital cycle.",
              so: "Watch qualification and orders, not only theme heat.",
            },
            {
              judge: "Path: mature first",
              anchor: "28 nm+ expansion is solid and pulls tools/materials; advanced packaging detours leading-edge.",
              so: "Portfolio: fab anchor + tool/material torque + high-end design offense.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "moutai",
    shelf: "industry",
    updated: "2026-06-30",
    frame: {
      zh: {
        title: "读茅台与白酒先抓这三问",
        points: [
          "总量是不是结构性收缩：产量九连降不是普通回调。",
          "海外能不能当引擎：体量约 3%，仍是期权。",
          "未来增速中枢在哪：个位数稳健 + 高分红，还是幻想两位数。",
        ],
      },
      en: {
        title: "Read Moutai through three questions",
        points: [
          "Is volume structurally shrinking: nine years of declines are not a normal cycle dip.",
          "Can overseas be the engine: still ~3%—an option, not the driver.",
          "Where is the growth mid-point: mid-single digits plus dividends, or a fantasy of teens.",
        ],
      },
    },
    zh: {
      title: "茅台与白酒出海",
      stance: "国内是盘面，海外还是期权",
      blurb: "有的章用饼图，有的用柱图和情景卡。先看海外占比，再看产量收缩与 3–5 年增速情景。",
    },
    en: {
      title: "Moutai and Baijiu overseas",
      stance: "Domestic is the board; overseas is still an option",
      blurb: "Pie, bars, and scenario cards. Start with overseas share, then the volume decline and 3–5 year growth cases.",
    },
    chapters: [
      {
        id: "overseas",
        chart: "pie",
        released: true,
        values: [97, 3],
        source: "Kweichow Moutai 2025 annual report: overseas ~2.87% of main revenue",
        zh: {
          title: "海外只占主营大约百分之三",
          stance: "国际化是长坡，不是眼前的引擎",
          summary:
            "2025 年国外市场营收约 48.5 亿元，约占主营收入的 3%。国内仍是几乎全部利润来源。看出海时，先接受体量小，再看免税、东南亚和生肖酒这类增长质量。",
          categories: ["国内", "海外"],
          seriesName: "占主营收入",
          suffix: "%",
        },
        en: {
          title: "Overseas is still about three percent of sales",
          stance: "Internationalization is a long slope, not the near-term engine",
          summary:
            "Overseas revenue was about RMB 48.5 bn in 2025, roughly 3% of main sales. Domestic China still carries almost all of the profit. Treat overseas as a quality option first, then watch duty-free, Southeast Asia, and zodiac editions.",
          categories: ["Domestic", "Overseas"],
          seriesName: "Share of main revenue",
          suffix: "%",
        },
      },
      {
        id: "volume",
        released: true,
        chart: "line",
        values: [1358, 785, 414, 355],
        source: "国家统计局白酒产量公开序列（万千升）",
        zh: {
          title: "产量九连降说明什么",
          stance: "减量存量，不是普通库存周期",
          summary:
            "白酒产量从 2016 年约 1358 万千升落到 2025 年约 355 万千升，峰值跌去约七成四。人口与场景收缩压分母，份额向名酒集中。",
          categories: ["2016", "2019", "2024", "2025"],
          seriesName: "产量（万千升）",
          suffix: "",
        },
        en: {
          title: "Nine years of falling output",
          stance: "A shrinking pie, not a normal inventory cycle",
          summary:
            "Baijiu output fell from about 13.58 m kl in 2016 to about 3.55 m kl in 2025—roughly −74% from the peak. Demographics and occasions shrink the denominator; share consolidates into prestige names.",
          categories: ["2016", "2019", "2024", "2025"],
          seriesName: "Output (10k kl)",
          suffix: "",
        },
      },
      {
        id: "scenarios",
        released: true,
        layout: "thesis",
        source: "基于茅台 2025 年报的情景测算；非公司指引（公司未设 2026 增长目标）",
        zh: {
          title: "未来 3–5 年增速情景",
          stance: "最可能是个位数稳健 + 高分红",
          summary:
            "基准情景营收 CAGR 约 4%–5%、净利约 5%–6%。海外就算 CAGR 12%–18%，2030 年占比仍大约 4%–5%。",
          points: [
            {
              judge: "基准：换挡而非失速",
              contrast: {
                left: "0%~+2%",
                leftLabel: "2026E 营收（基准）",
                right: "+5%~+7%",
                rightLabel: "2028–2030E 营收中枢",
              },
              anchor: "提价、结构升级、直销占比对冲总量下行。",
              so: "把预期从两位数调到个位数。",
            },
            {
              judge: "海外仍是期权",
              anchor: "2025 年约 48.5 亿 → 2030 年约 90–110 亿量级（基准假设）。",
              so: "贡献品牌溢价与估值叙事，难成收入主引擎。",
            },
            {
              judge: "分红的确定性更珍贵",
              anchor: "2025 年现金红利约 650 亿元创历史新高。",
              so: "增速换挡期，股东回报是定价锚之一。",
            },
          ],
        },
        en: {
          title: "Growth scenarios for the next 3–5 years",
          stance: "Most likely: mid-single digits plus high payouts",
          summary:
            "Base case revenue CAGR ~4–5%, net ~5–6%. Even with overseas CAGR 12–18%, the 2030 share is still about 4–5%.",
          points: [
            {
              judge: "Base case: downshift, not stall",
              contrast: {
                left: "0%~+2%",
                leftLabel: "2026E revenue (base)",
                right: "+5%~+7%",
                rightLabel: "2028–2030E revenue mid-point",
              },
              anchor: "Price mix, structure upgrade, and direct sales offset volume pressure.",
              so: "Reset expectations from teens to single digits.",
            },
            {
              judge: "Overseas remains an option",
              anchor: "~RMB 48.5 bn in 2025 → ~90–110 bn by 2030 under base assumptions.",
              so: "Brand premium and narrative—not the revenue engine.",
            },
            {
              judge: "Dividends matter more in a downshift",
              anchor: "2025 cash dividends ~RMB 650 bn, a record.",
              so: "Shareholder yield is part of the pricing anchor.",
            },
          ],
        },
      },
      {
        id: "demographics",
        released: true,
        layout: "thesis",
        source: "国家统计局人口结构；调研正文第 3–4 章",
        zh: {
          title: "分母在收缩：人口与代际",
          stance: "总量压力来自核心饮酒人群，不只是周期",
          summary:
            "30–55 岁男性较 2020 年已少约 2137 万，2030 年或再少超 5000 万。年轻人转向低度酒，商务场景收缩。茅台靠分子（份额、价格、结构）对冲分母。",
          points: [
            {
              judge: "核心人群不可逆缩",
              contrast: {
                left: "−2137万",
                leftLabel: "30–55 岁男性 vs 2020",
                right: "−5000万+",
                rightLabel: "2030 年较 2020 示意",
              },
              anchor: "需求 ≈ 人群 × 频次 × 单次量，三项都在下行。",
              so: "老龄化不会自动托底白酒。",
            },
            {
              judge: "代际不是「还没到年纪」",
              anchor: "95 后白酒消费占比约 18%；八成以上年轻人更爱低度。",
              so: "社交货币属性在弱化，悦己与收藏要重新经营。",
            },
            {
              judge: "对茅台的含义",
              anchor: "稀缺与品牌是最强缓冲；回流酒与投资需求退潮仍冲击价盘。",
              so: "跟踪飞天批价与直销结构，比跟踪海外短期体量更紧要。",
            },
          ],
        },
        en: {
          title: "The denominator shrinks: people and cohorts",
          stance: "Volume pressure is structural demographics, not only cycle",
          summary:
            "Men aged 30–55 are already ~21.4 m below 2020 and may be 50 m+ lower by 2030. Youth shift to low-ABV; business occasions shrink. Moutai offsets the denominator with share, price, and mix.",
          points: [
            {
              judge: "Core cohort shrinks irreversibly",
              contrast: {
                left: "−21.4 m",
                leftLabel: "Men 30–55 vs 2020",
                right: "−50 m+",
                rightLabel: "2030 vs 2020 sketch",
              },
              anchor: "Demand ≈ people × frequency × pour size—all three soft.",
              so: "Aging does not automatically floor baijiu.",
            },
            {
              judge: "Generations are not “not old enough yet”",
              anchor: "Post-95 share of baijiu buyers ~18%; 80%+ prefer low-ABV.",
              so: "Social-currency weakens; self-drink and collectibles need work.",
            },
            {
              judge: "Implication for Moutai",
              anchor: "Scarcity and brand are the strongest buffers; recycled stock and fading investment demand still hit wholesale.",
              so: "Watch Feitian wholesale and direct-sales mix harder than near-term overseas size.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "hog",
    shelf: "industry",
    updated: "2026-06-30",
    frame: {
      zh: {
        title: "读生猪与牧原先抓这三问",
        points: [
          "周期玩法变了没有：波幅是否被政策压缩。",
          "谁能熬过底部：完全成本与现金成本差多少。",
          "份额为什么还升：效率竞争替代资本扩张。",
        ],
      },
      en: {
        title: "Read hogs through three questions",
        points: [
          "Did the cycle’s rules change: are swings institutionally capped.",
          "Who survives the trough: full cost versus cash cost.",
          "Why share still rises: efficiency competition replaces capital races.",
        ],
      },
    },
    zh: {
      title: "生猪与牧原",
      stance: "成本与现金流决定谁能熬过底部",
      blurb: "有的章用对照柱，有的用结论卡。先看成本垫，再看本轮周期新特征与出栏份额。",
    },
    en: {
      title: "Hogs and Muyuan",
      stance: "Cost and cash decide who survives the trough",
      blurb: "Bars and thesis cards. Start with the cost cushion, then what is new in this cycle and why slaughter share still rises.",
    },
    chapters: [
      {
        id: "cost",
        released: true,
        chart: "bar",
        values: [11.6, 10],
        source: "牧原股份公开披露与业绩交流（2026-03 完全成本约 11.6 元/kg；现金成本约 10 元/kg）",
        zh: {
          title: "牧原：完全成本约 11.6，现金成本约 10",
          stance: "低猪价期，先比谁亏得少",
          summary:
            "2026 年 3 月牧原完全成本约 11.6 元/公斤，现金成本约 10 元/公斤。全国出栏占比已升到约一成。磨底期比的是成本垫和现金流，不是出栏增速口号。",
          categories: ["完全成本", "现金成本"],
          seriesName: "元 / 公斤",
          suffix: "",
        },
        en: {
          title: "Muyuan: full cost about 11.6, cash cost about 10",
          stance: "In a low-price trough, lose less first",
          summary:
            "In March 2026 Muyuan’s full cost was about RMB 11.6/kg and cash cost about RMB 10/kg. National slaughter share is already around one tenth. In a trough, compare the cost cushion and cash, not slaughter-growth slogans.",
          categories: ["Full cost", "Cash cost"],
          seriesName: "RMB / kg",
          suffix: "",
        },
      },
      {
        id: "cycle",
        released: true,
        layout: "thesis",
        source: "农业农村部产能调控方案；公开存栏与价格第三方估计",
        zh: {
          title: "本轮猪周期有什么新特征",
          stance: "周期未消失，波幅被制度化压缩",
          summary:
            "供给惯性仍在，但能繁母猪目标下调、预警收紧。下行期叠加消费走弱与 PSY 提升——更少母猪就能满足相同供给。",
          points: [
            {
              judge: "去产能在进行",
              contrast: {
                left: "3904万",
                leftLabel: "2026-03 能繁母猪存栏",
                right: "−3.3%",
                rightLabel: "同比",
              },
              anchor: "自 2025 年 7 月起连续多月下降；正常保有量目标调至 3750 万头。",
              so: "赌猪价暴涨的博弈价值下降。",
            },
            {
              judge: "效率抬高供给弹性",
              anchor: "行业平均 PSY 约 23+，高效场约 30——同样出栏需要更少母猪。",
              so: "价格弹性与旧周期不可直接类比。",
            },
            {
              judge: "政策压缩波幅",
              anchor: "长期调母猪、中期调仔猪、短期调肥猪；大型集团备案。",
              so: "成本领先 + 现金流稳健，比博反转更重要。",
            },
          ],
        },
        en: {
          title: "What is new in this hog cycle",
          stance: "The cycle remains; swings are institutionally capped",
          summary:
            "Supply inertia persists, but sow targets were cut and alerts tightened. The downleg meets softer demand and higher PSY—fewer sows can meet the same output.",
          points: [
            {
              judge: "De-stocking is underway",
              contrast: {
                left: "39.04 m",
                leftLabel: "Breeding sows, Mar 2026",
                right: "−3.3%",
                rightLabel: "y/y",
              },
              anchor: "Multi-month decline since Jul 2025; normal inventory target cut to 37.5 m.",
              so: "Betting on a violent price spike is less valuable.",
            },
            {
              judge: "Efficiency raises supply elasticity",
              anchor: "Industry PSY ~23+; efficient farms ~30—same slaughter needs fewer sows.",
              so: "Do not map old-cycle price elasticities one-for-one.",
            },
            {
              judge: "Policy caps the swing",
              anchor: "Long sow / mid piglet / short hog tools; large groups file annual plans.",
              so: "Cost leadership and cash beat gambling the rebound.",
            },
          ],
        },
      },
      {
        id: "share",
        released: true,
        chart: "bar",
        values: [6, 10.83],
        source: "牧原股份公开出栏与全国占比披露（2021→2025）",
        zh: {
          title: "出栏份额为什么还在升",
          stance: "从资本扩张切到效率竞争",
          summary:
            "牧原出栏全国占比从约 6% 升到约 10.8%。2026 年计划出栏与 2025 持平量级，主动放缓增速、练内功。散户退出把份额送给成本领先者。",
          categories: ["2021 占比", "2025 占比"],
          seriesName: "全国出栏份额",
          suffix: "%",
        },
        en: {
          title: "Why slaughter share keeps rising",
          stance: "From capital races to efficiency contests",
          summary:
            "Muyuan’s national slaughter share rose from ~6% to ~10.8%. 2026 planned slaughter is roughly flat with 2025—growth slows on purpose. Exiting backyard farms gift share to cost leaders.",
          categories: ["2021 share", "2025 share"],
          seriesName: "National slaughter share",
          suffix: "%",
        },
      },
      {
        id: "policy",
        released: true,
        layout: "thesis",
        source: "农业农村部《生猪产能综合调控实施方案（2026年修订）》",
        zh: {
          title: "政策：制度化压缩波幅",
          stance: "能繁目标下调，大型集团被备案",
          summary:
            "正常保有量目标 3900→3750 万头；长期调母猪、中期调仔猪、短期调肥猪。头部无序扩产受约束，利好成本领先者的份额质量。",
          points: [
            {
              judge: "目标下调承认现实",
              contrast: {
                left: "3900万",
                leftLabel: "原正常保有量",
                right: "3750万",
                rightLabel: "2026 修订目标",
              },
              anchor: "消费达峰平台 + PSY 提升 + 前期产能偏高。",
              so: "政策站在压缩周期一边。",
            },
            {
              judge: "大企业窗口指导",
              anchor: "能繁 10 万头以上集团年度生产备案。",
              so: "「谁扩得快」不再是唯一竞争维度。",
            },
            {
              judge: "投资含义",
              anchor: "主动+被动去产能叠加，成本与现金流优势企业盈利周期可能拉长。",
              so: "跟踪能繁、仔猪与肥猪三段指标，而不是只看现货猪价。",
            },
          ],
        },
        en: {
          title: "Policy: institutional swing compression",
          stance: "Sow targets cut; large groups must file plans",
          summary:
            "Normal inventory target 39.0→37.5 m; long sow / mid piglet / short hog tools. Disorderly major expansion is constrained—good for cost leaders’ share quality.",
          points: [
            {
              judge: "Lower target admits reality",
              contrast: {
                left: "39.0 m",
                leftLabel: "Prior normal inventory",
                right: "37.5 m",
                rightLabel: "2026 revised target",
              },
              anchor: "Demand plateau + higher PSY + prior overcapacity.",
              so: "Policy stands on the side of compressing the cycle.",
            },
            {
              judge: "Window guidance for giants",
              anchor: "Groups with 100k+ sows file annual production plans.",
              so: "“Who expands fastest” is no longer the only contest.",
            },
            {
              judge: "Portfolio read",
              anchor: "Active + passive de-stocking may lengthen profitable stretches for cost/cash leaders.",
              so: "Track sow, piglet, and hog indicators—not only spot hog prices.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "meituan",
    shelf: "industry",
    updated: "2026-08-05",
    frame: {
      zh: {
        title: "读美团先抓这三问",
        points: [
          "千亿补贴买到了什么：份额位移大约十个百分点。",
          "减亏斜率是否成立：核心本地与新业务是否同步止血。",
          "Keeta 能不能重开成长估值：香港转正、沙特能否更快。",
        ],
      },
      en: {
        title: "Read Meituan through three questions",
        points: [
          "What did the trillion-scale war buy: about ten points of share shift.",
          "Is loss narrowing real: core local and new businesses both healing.",
          "Can Keeta reopen a growth multiple: Hong Kong profit, Saudi faster.",
        ],
      },
    },
    zh: {
      title: "美团",
      stance: "最坏的利润损伤在过去，份额保卫战还没完全结束",
      blurb: "有的章用饼图，有的用柱图和时间线。先看即时零售份额，再看减亏与 Keeta。",
    },
    en: {
      title: "Meituan",
      stance: "The worst profit damage is behind; the share war is not fully over",
      blurb: "Pie, bars, and a timeline. Start with instant-retail share, then loss narrowing and Keeta.",
    },
    chapters: [
      {
        id: "share",
        chart: "pie",
        released: true,
        values: [50.3, 39.4, 10.3],
        source: "汇丰 2026Q1 即时零售日均单量份额估计；美团港交所业绩公告",
        zh: {
          title: "即时零售：美团大约一半，阿里约四成，京东约一成",
          stance: "补贴买到的是份额位移，不是永久垄断",
          summary:
            "汇丰口径 2026 年一季度日均单量份额约为美团 50.3%、阿里系 39.4%、京东 10.3%。千亿级消耗战只换来大约十个百分点的位移。接下来更要看减亏和到店利润池，而不是只盯外卖口号。",
          categories: ["美团", "阿里系", "京东"],
          seriesName: "日均单量份额",
          suffix: "%",
        },
        en: {
          title: "Instant retail: Meituan about half, Alibaba about two fifths, JD about one tenth",
          stance: "Subsidies bought a share shift, not permanent monopoly",
          summary:
            "HSBC’s 2026Q1 daily-order share estimate is about Meituan 50.3%, Alibaba 39.4%, and JD 10.3%. A roughly RMB 173 bn war moved share by about ten points. What matters next is loss narrowing and the in-store profit pool, not delivery slogans alone.",
          categories: ["Meituan", "Alibaba", "JD"],
          seriesName: "Daily-order share",
          suffix: "%",
        },
      },
      {
        id: "losses",
        released: true,
        chart: "bar",
        values: [-250.4, -64.7],
        source: "美团港交所业绩公告（IFRS 经营利润）",
        zh: {
          title: "亏损收窄到什么程度",
          stance: "2025 全年换份额，2026Q1 出现减亏斜率",
          summary:
            "2025 年 IFRS 经营亏损约 250 亿元；2026Q1 经营亏损约 65 亿元，核心本地单季减亏约 80 亿元量级。销售费用占比从峰值回落，是止血信号。",
          categories: ["2025 全年", "2026Q1"],
          seriesName: "经营利润",
          suffix: " 亿元",
        },
        en: {
          title: "How far losses have narrowed",
          stance: "2025 bought share; 2026Q1 showed a healing slope",
          summary:
            "2025 IFRS operating loss ~RMB 250 bn; 2026Q1 operating loss ~65 bn, with core local improving by ~RMB 80 bn q/q. Selling expense ratio off the peak is the stop-bleed signal.",
          categories: ["FY2025", "2026Q1"],
          seriesName: "Operating profit",
          suffix: " bn RMB",
        },
      },
      {
        id: "keeta",
        released: true,
        layout: "timeline",
        source: "美团管理层沟通与财报确认（Keeta 进度）",
        zh: {
          title: "海外 Keeta 走到哪一步",
          stance: "香港是模板，沙特是放大器，巴西是期权",
          summary:
            "香港约 29 个月做到单月 UE 转正；沙特指引更快转正；巴西只做一城。出海是唯一可能重开成长估值的叙事。",
          timeline: [
            { when: "2023-05", what: "Keeta 上线中国香港" },
            { when: "2024", what: "进入沙特，首个海湾市场" },
            { when: "2025-10", what: "香港单月 UE 转正（约 29 个月），单量当地第一" },
            { when: "2026", what: "巴西圣保罗试点；沙特预期年底单月 UE 转正" },
            { when: "约束", what: "2026 新业务亏损承诺低于 2025 年的约 101 亿元" },
          ],
        },
        en: {
          title: "Where overseas Keeta stands",
          stance: "Hong Kong is the template; Saudi the amplifier; Brazil an option",
          summary:
            "Hong Kong reached monthly UE breakeven in ~29 months; Saudi is guided faster; Brazil is one-city only. Overseas is the narrative that can reopen a growth multiple.",
          timeline: [
            { when: "May 2023", what: "Keeta launches in Hong Kong" },
            { when: "2024", what: "Enters Saudi Arabia, first Gulf market" },
            { when: "Oct 2025", what: "Hong Kong monthly UE positive (~29 months); local order lead" },
            { when: "2026", what: "São Paulo pilot; Saudi guided to monthly UE by year-end" },
            { when: "Constraint", what: "2026 new-business losses guided below ~RMB 101 bn in 2025" },
          ],
        },
      },
      {
        id: "war",
        released: true,
        chart: "bar",
        values: [870, 440, 420],
        source: "汇丰测算：2025Q2–2026Q1 即时零售消耗战亏损分摊",
        zh: {
          title: "千亿战争买了十个百分点",
          stance: "负和博弈；阿里不会退出，但会要效率",
          summary:
            "一年合计约 1730 亿元亏损（阿里约 870、美团约 440、京东约 420），格局只移动约十个百分点。阿里把闪购当电商基石，三年内仍要规模。",
          categories: ["阿里", "美团", "京东"],
          seriesName: "消耗战亏损示意",
          suffix: " 亿元",
        },
        en: {
          title: "A trillion-scale war bought ten points",
          stance: "Negative-sum; Alibaba won’t exit, but will demand efficiency",
          summary:
            "About RMB 173 bn of losses in a year (Alibaba ~870, Meituan ~440, JD ~420) moved share by ~10 points. Alibaba treats flash purchase as e-commerce bedrock and still wants scale within three years.",
          categories: ["Alibaba", "Meituan", "JD"],
          seriesName: "War-loss sketch",
          suffix: " bn RMB",
        },
      },
      {
        id: "douyin",
        released: true,
        layout: "thesis",
        source: "美团深度调研第 4.5 节：抖音到店威胁",
        zh: {
          title: "真正的心腹之患在到店",
          stance: "外卖看阿里；利润池要防抖音",
          summary:
            "即时零售战争消耗的是利润表，到店酒旅才是美团利润池。抖音用内容分配流量，对到店的侵蚀比对配送更致命。",
          points: [
            {
              judge: "外卖对手是阿里",
              anchor: "闪购三年内仍要万亿 GMV 叙事，但已从抢份额转向要 UE。",
              so: "50:40 格局可接受，前提是减亏持续。",
            },
            {
              judge: "到店对手是抖音",
              anchor: "内容平台改写本地生活发现路径，佣金与广告模型不同。",
              so: "守住到店酒旅，比再抠一个外卖点份额更重要。",
            },
            {
              judge: "破局六条里的优先级",
              anchor: "结束份额战 → 修 UE → 零售化 → 守到店 → 出海 → 资本回报。",
              so: "叙事很多，验证指标要少而硬。",
            },
          ],
        },
        en: {
          title: "The real threat is in-store",
          stance: "Delivery faces Alibaba; the profit pool faces Douyin",
          summary:
            "The instant-retail war burns the P&L; in-store and travel are Meituan’s profit pool. Douyin’s content graph hits discovery harder than logistics.",
          points: [
            {
              judge: "Delivery foe: Alibaba",
              anchor: "Flash purchase still wants RMB 1 tn GMV within three years, but pivots from share to UE.",
              so: "A 50:40 split is fine if losses keep narrowing.",
            },
            {
              judge: "In-store foe: Douyin",
              anchor: "Content platforms rewrite local discovery; take-rate and ads differ.",
              so: "Defending in-store/travel beats another delivery share point.",
            },
            {
              judge: "Breakout priorities",
              anchor: "End share war → fix UE → retailize → defend in-store → overseas → capital returns.",
              so: "Many narratives; few hard verification metrics.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "midea",
    shelf: "industry",
    updated: "2026-06-30",
    frame: {
      zh: {
        title: "读美的与欧洲空调先抓这三问",
        points: [
          "热浪是脉冲，还是渗透率长坡的导火索。",
          "PortaSplit 卖的是免安装定义权，还是一个夏天的爆品。",
          "公司增速会不会爆炸：结构性利好 vs 中高个位数大盘。",
        ],
      },
      en: {
        title: "Read Midea through three questions",
        points: [
          "Are heatwaves a pulse or the fuse for a penetration climb.",
          "Is PortaSplit product-definition power—or one summer’s hit.",
          "Will company growth explode: structural upside vs mid-single-digit bulk.",
        ],
      },
    },
    zh: {
      title: "美的与欧洲空调",
      stance: "热浪是导火索，渗透率和产品定义权才是主线",
      blurb: "渗透率柱、结论卡、出货柱、份额折线、矩阵都用。先看空白市场与安装摩擦，再看 PortaSplit、海外底座与采暖下一张票。",
    },
    en: {
      title: "Midea and European air conditioning",
      stance: "Heatwaves lit the fuse; penetration and product definition are the story",
      blurb: "Penetration bars, thesis cards, shipment bars, share lines, and a matrix—from the blank market and install friction to PortaSplit, the overseas base, and the heating ticket.",
    },
    chapters: [
      {
        id: "heatwave",
        released: true,
        chart: "bar",
        values: [20, 5, 6, 10, 56, 90],
        source: "IEA / WHO / 各国气象与行业公开口径（渗透率口径不一，取常用锚点）",
        zh: {
          title: "欧洲空调渗透率：空白才是故事",
          stance: "热浪是导火索，低渗透才是主线",
          summary:
            "欧洲家庭空调渗透约 20%，约为全球升温最快大陆，却远低于美日约 90%。英德法仍低位，意大利约 56% 已证明「富裕+变热」会补课。2026 初夏 omega block：德法英荷等多国刷新纪录——逼出来的需求，碰上制度性安装摩擦。",
          categories: ["欧洲均", "英国", "德国", "法国", "意大利", "美/日"],
          seriesName: "家庭空调渗透率（约）",
          suffix: "%",
        },
        en: {
          title: "European AC penetration: the blank is the story",
          stance: "Heatwaves are the fuse; low penetration is the plot",
          summary:
            "Roughly 20% of European households have AC—on the fastest-warming continent—versus ~90% in the US/Japan. UK/Germany/France still sit low; Italy ~56% shows wealthy-and-hot markets catch up. The 2026 early-summer omega block reset records across DE/FR/UK/NL and more: forced demand hitting institutional install friction.",
          categories: ["EU avg", "UK", "Germany", "France", "Italy", "US/JP"],
          seriesName: "Household AC penetration (approx.)",
          suffix: "%",
        },
      },
      {
        id: "portasplit",
        released: true,
        layout: "thesis",
        source: "Nikkei / Midea 官网 / heise / TIME Best Inventions 2025；社媒公开转述",
        zh: {
          title: "PortaSplit：破解欧洲安装摩擦",
          stance: "卖的不是凉快，是制度缝隙里的产品定义权",
          summary:
            "窗台外挂、约 10 分钟免专业施工，绕开老建筑禁打孔与动辄超千欧的安装费。官方约 €699–900，黄牛炒到 €1,500–5,000；德国半年破 6 万台，全欧 H1 出货超 20 万台（约等于 2025 全年翻倍）。它还被定位成 DIY 空气源热泵——制冷爆完，采暖叙事已埋线。",
          points: [
            {
              judge: "制度摩擦才是护城河",
              contrast: {
                left: "~10 分钟",
                leftLabel: "免专业施工",
                right: ">€1,000",
                rightLabel: "传统分体安装常超",
              },
              anchor: "HOA 审批、立面保护、噪声规范——单管移动机又有负压缺陷。PortaSplit 切的是这条缝。",
              so: "可持续的是产品定义，不是一个夏天的脉冲。",
            },
            {
              judge: "现象级已经兑现",
              contrast: {
                left: ">20 万台",
                leftLabel: "2026H1 对欧出货",
                right: "≈2×",
                rightLabel: "相对 2025 全年",
              },
              anchor: "德国半年 >6 万；二级市场溢价数倍；库存追踪站与专版社区自发出现。",
              so: "先当爆品验证需求，再当份额与品牌势能的证据。",
            },
            {
              judge: "下一关是制冷剂合规",
              contrast: {
                left: "R32",
                leftLabel: "现行机型（GWP 675）",
                right: "R290",
                rightLabel: "目标 2027 夏入欧",
              },
              anchor: "F-Gas：2026 年底前入欧的 R32 仍可继续售完；2027 要靠丙烷版续命。",
              so: "爆品能否跨法规周期，比再热一个夏天更关键。",
            },
          ],
        },
        en: {
          title: "PortaSplit: cracking Europe’s install friction",
          stance: "Not cool air—product definition inside institutional gaps",
          summary:
            "Window-hung, ~10-minute DIY install bypasses facade bans and installs that often top €1,000. List ~€699–900; secondary €1,500–5,000. Germany >60k in H1; Europe >200k shipped H1’26—about 2× full-year 2025. Also framed as a DIY air-to-air heat pump: cooling spike, heating story already seeded.",
          points: [
            {
              judge: "Friction is the moat",
              contrast: {
                left: "~10 min",
                leftLabel: "No pro install",
                right: ">€1,000",
                rightLabel: "Typical split install",
              },
              anchor: "HOA approvals, facade rules, noise caps—and single-hose portables suffer negative pressure. PortaSplit cuts that seam.",
              so: "Sustainable edge is product definition, not one summer’s pulse.",
            },
            {
              judge: "Phenomenon already cashed",
              contrast: {
                left: ">200k",
                leftLabel: "H1’26 EU shipments",
                right: "~2×",
                rightLabel: "vs full-year 2025",
              },
              anchor: "Germany >60k in half a year; multi-fold secondary premiums; stock trackers and fan forums appeared organically.",
              so: "Treat it first as demand proof, then as share and brand evidence.",
            },
            {
              judge: "Next gate is refrigerant law",
              contrast: {
                left: "R32",
                leftLabel: "Current (GWP 675)",
                right: "R290",
                rightLabel: "Target summer 2027 EU",
              },
              anchor: "F-Gas: R32 units placed by end-2026 can still sell through; 2027 needs propane to stay legal for new introductions.",
              so: "Surviving the regulation cycle matters more than another hot summer.",
            },
          ],
        },
      },
      {
        id: "pulse",
        released: true,
        chart: "bar",
        values: [70, 100, 43, 70],
        source: "海关公开统计；美的/央视等公开出货与销售报道；产业在线同类口径",
        zh: {
          title: "2026H1 脉冲：数字已经落地",
          stance: "行业在加速，美的斜率更陡",
          summary:
            "美的西欧空调销售额 H1 同比 +70%+；PortaSplit 对欧出货约翻倍；中国对欧盟空调出口额约 37.6 亿美元（+43.2%），免安装移动机出口约 +70%。Joybuy 等渠道出现周级数十倍跳升；法国甚至紧急采购医用/养老机——需求侧不是故事，是海关与渠道数字。",
          categories: ["美的西欧空调", "PortaSplit 出货", "中→欧空调出口额", "免安装出口"],
          seriesName: "同比增速（约）",
          suffix: "%",
        },
        en: {
          title: "H1’26 pulse: the numbers already landed",
          stance: "The industry accelerated; Midea’s slope was steeper",
          summary:
            "Midea Western Europe AC sales +70%+ YoY in H1; PortaSplit EU shipments roughly doubled; China→EU AC exports ~$3.76 bn (+43.2%), install-free mobiles ~+70%. Channels like Joybuy saw week-scale multi-ten× jumps; France even emergency-ordered medical/care units—demand is customs and channel data, not narrative.",
          categories: ["Midea WE AC", "PortaSplit ship", "CN→EU AC $", "Install-free"],
          seriesName: "Approx. YoY growth",
          suffix: "%",
        },
      },
      {
        id: "europe",
        released: true,
        chart: "line",
        values: [27, 41],
        source: "海关与行业公开统计；Euromonitor：海尔+格力+美的合计约 32% 销量份额",
        zh: {
          title: "中国品牌欧洲空调市占：27% → 41%",
          stance: "短脉冲之外，份额在换成叙事",
          summary:
            "中国品牌欧洲空调市占从 2023 约 27% 升至 2026 约 41%，首次成为第一大供应来源。Euromonitor 更保守口径：海尔+格力+美的合计约 32% 销量份额——即便打折，中国货源已是主供应。叙事从「便宜」转向「谁定义免安装产品」。",
          categories: ["2023", "2026"],
          seriesName: "中国品牌欧洲空调市占",
          suffix: "%",
        },
        en: {
          title: "Chinese brands’ European AC share: 27% → 41%",
          stance: "Beyond the heat pulse, share is rewriting the story",
          summary:
            "Chinese brands’ European AC share rose from ~27% in 2023 to ~41% in 2026—largest supply source. Euromonitor’s tighter cut: Haier+Gree+Midea ~32% by volume—even discounted, China is the main pipe. The story shifts from cheap to who defines install-free products.",
          categories: ["2023", "2026"],
          seriesName: "Chinese brands’ European AC share",
          suffix: "%",
        },
      },
      {
        id: "magnitude",
        released: true,
        layout: "compare",
        source: "花旗等机构公开转述；美的集团 2025 年报营收口径",
        zh: {
          title: "量级：惊喜，不是改写大盘",
          stance: "西欧 ToC HVAC 是正面惊喜，不是颠覆变量",
          summary:
            "空调内外销在美的盘子里可观，但单一「西欧 ToC 暖通」撬不动 4585 亿营收的增速台阶。花旗看 Q2 欧洲 ToC HVAC 同比 +20%+——毛利率与品牌势能改善更重要。真正被验证的是 OBM + 本地化产研销。",
          compare: {
            left: {
              name: "已兑现的脉冲",
              lines: [
                "西欧空调 H1 销售额 +70%+",
                "PortaSplit 出货翻倍级",
                "A/H 股价瞬时反应（如 6/29）",
              ],
            },
            right: {
              name: "对公司大盘的含义",
              lines: [
                "一致预期仍是中高个位数营收增速",
                "结构性提质 > 颠覆性重估",
                "验证出海战略有效，而非改增速公式",
              ],
            },
          },
        },
        en: {
          title: "Magnitude: a beat, not a group rewrite",
          stance: "Western Europe ToC HVAC is a positive surprise, not a regime change",
          summary:
            "AC matters inside Midea, but one Western Europe ToC HVAC pocket cannot re-rate a ~RMB 459 bn revenue base. Citi framed Q2 Europe ToC HVAC +20%+ YoY—mix and brand matter more. What gets validated is OBM + localized R&D/make/sell.",
          compare: {
            left: {
              name: "Pulse already cashed",
              lines: [
                "WE AC H1 sales +70%+",
                "PortaSplit shipments ~doubled",
                "A/H price snap (e.g. 29 Jun)",
              ],
            },
            right: {
              name: "What it means for the group",
              lines: [
                "Consensus still mid/high single-digit revenue",
                "Quality mix > regime re-rate",
                "Validates outbound strategy—not a new growth formula",
              ],
            },
          },
        },
      },
      {
        id: "overseas",
        released: true,
        chart: "bar",
        values: [1959, 4585, 45],
        source: "美的集团 2025 年报；Arbonia 交割公告（企业价值约 7.6 亿欧元，2025-02）",
        zh: {
          title: "海外底座：OBM + 欧洲第二主场",
          stance: "出海已是第二增长曲线，欧洲在加深本地化",
          summary:
            "2025 海外收入约 1959 亿（+15.9%），占总营收约 4585 亿的四成出头；OBM 占海外智能家居收入已超 45%，自营覆盖 27→50 国。欧洲侧：收购 TEKA 推进 In Europe, for Europe；约 7.6 亿欧元拿下 Arbonia Climate，与 Clivet 组成 MBT Climate——制冷爆完，抢采暖/热泵下一张票。",
          categories: ["海外收入", "总营收", "OBM 占比"],
          seriesName: "亿元 / %",
          suffix: "",
        },
        en: {
          title: "Overseas base: OBM + Europe as second home",
          stance: "Outbound is already a second curve; Europe is deepening localization",
          summary:
            "2025 overseas ~RMB 196 bn (+15.9%) vs group ~RMB 459 bn—low-40s%. OBM >45% of overseas smart-home revenue; self-run coverage 27→50 countries. Europe: TEKA for In Europe, for Europe; ~€760 m EV for Arbonia Climate, paired with Clivet into MBT Climate—after the cooling spike, bid for the heating/heat-pump ticket.",
          categories: ["Overseas", "Group total", "OBM share"],
          seriesName: "RMB bn / %",
          suffix: "",
        },
      },
      {
        id: "outlook",
        released: true,
        layout: "thesis",
        source: "IEA / 行业规模预测；花旗等机构一致预期（公开转述）",
        zh: {
          title: "渗透率上升还能走多久",
          stance: "欧洲是多年上升周期，公司层面仍是稳健个位数",
          summary:
            "欧洲空调市场约 2025 $265 亿 → 2034 $464 亿，CAGR ~6.4%；IEA：欧盟保有量向 2050 或达 2.75 亿台（较 2019 翻倍以上）。美的受益，但一致预期 2026–2028 营收仍是中高个位数。",
          points: [
            {
              judge: "蛋糕在变大",
              contrast: {
                left: "$265 亿",
                leftLabel: "欧洲空调市场 2025",
                right: "≈6.4%",
                rightLabel: "至 2034 CAGR",
              },
              anchor: "极端高温频率上升，渗透率进入结构性补课——花旗定调多年 up-cycle。",
              so: "长坡厚雪，不是一个夏天的故事。",
            },
            {
              judge: "公司增速要打折看",
              contrast: {
                left: "~¥4,830 亿",
                leftLabel: "2026E 营收（约）",
                right: "中高个位数",
                rightLabel: "一致预期增速",
              },
              anchor: "欧洲 ToC HVAC 是正面惊喜；大盘仍由智能家居 + ToB + 全球化共同支撑。",
              so: "结构性提质，不是颠覆性变量。",
            },
            {
              judge: "下一张票在采暖",
              anchor: "Arbonia / MBT Climate + 欧盟热泵脱碳：制冷与供暖一体。PortaSplit 的 DIY 热泵叙事与此同向。",
              so: "制冷爆发之后，看能否守住采暖份额。",
            },
          ],
        },
        en: {
          title: "How long the penetration climb lasts",
          stance: "Europe is a multi-year upcycle; company growth stays mid-single digits",
          summary:
            "European AC market ~$265 bn (2025) → $464 bn (2034), CAGR ~6.4%. IEA: EU stock toward ~275 m units by 2050 (more than double vs 2019). Midea benefits, but consensus 2026–2028 revenue stays mid/high single digits.",
          points: [
            {
              judge: "The cake is still growing",
              contrast: {
                left: "$265 bn",
                leftLabel: "European AC market 2025",
                right: "~6.4%",
                rightLabel: "CAGR to 2034",
              },
              anchor: "More frequent extremes pull penetration into a structural catch-up—Citi’s multi-year up-cycle frame.",
              so: "Long slope—not one summer.",
            },
            {
              judge: "Discount company growth",
              contrast: {
                left: "~¥483 bn",
                leftLabel: "2026E revenue (approx.)",
                right: "Mid/high SD",
                rightLabel: "Consensus growth",
              },
              anchor: "Europe ToC HVAC is a beat; the group still rests on smart home + ToB + globalization.",
              so: "Quality mix shift, not a group rewrite.",
            },
            {
              judge: "Next ticket is heating",
              anchor: "Arbonia / MBT Climate + EU heat-pump decarbonization: cooling and heating fuse. PortaSplit’s DIY heat-pump frame points the same way.",
              so: "After the cooling spike, watch whether heating share sticks.",
            },
          ],
        },
      },
      {
        id: "ranking",
        released: true,
        layout: "matrix",
        source: "欧洲高温与美的家电分析报告 §六；Euromonitor / 公开渠道销售报道",
        zh: {
          title: "欧洲空调战：受益排序",
          stance: "美的最大，海尔次之，格力海外敞口小",
          summary:
            "中国品牌欧洲空调市占 27%→41%。本轮比的是免安装产品定义权 + OBM + 采暖布局，不是单纯出口量。TCL/海信跟进便携机；大金等在位者守高端与热泵，但受性价比冲击。",
          matrix: {
            headers: ["厂商", "欧洲空调敞口", "本轮受益"],
            rows: [
              { label: "美的", cells: ["PortaSplit + Arbonia + OBM", "最高"] },
              { label: "海尔智家", cells: ["欧洲平台大；德国家用空调份额报道约 22%", "高"] },
              { label: "TCL / 海信", cells: ["便携机跟进，西欧部分市场售罄", "中高"] },
              { label: "格力", cells: ["海外约 15%，欧洲自有品牌弱", "较低"] },
              { label: "大金等在位者", cells: ["高端/热泵在位，受性价比冲击", "中"] },
            ],
          },
        },
        en: {
          title: "European AC war: who benefits",
          stance: "Midea most, Haier next, Gree thin overseas",
          summary:
            "Chinese brands’ EU AC share 27%→41%. This round is install-free product definition + OBM + heating footprint—not export tonnes alone. TCL/Hisense chase portables; Daikin & peers hold premium/heat pumps under value shock.",
          matrix: {
            headers: ["Firm", "EU AC exposure", "This round"],
            rows: [
              { label: "Midea", cells: ["PortaSplit + Arbonia + OBM", "Highest"] },
              { label: "Haier", cells: ["Large EU platform; ~22% DE residential AC reported", "High"] },
              { label: "TCL / Hisense", cells: ["Portables follow; sell-outs in parts of WE", "Mid-high"] },
              { label: "Gree", cells: ["~15% overseas; weak EU OBM", "Lower"] },
              { label: "Daikin & incumbents", cells: ["Premium/heat-pump seats; value shock", "Mid"] },
            ],
          },
        },
      },
      {
        id: "risks",
        released: true,
        layout: "thesis",
        source: "EU F-Gas / 贸易救济公开讨论；行业与机构风险提示",
        zh: {
          title: "份额守得住吗：五条变量",
          stance: "爆品验证需求，法规与周期决定能否留下",
          summary:
            "脉冲兑现之后，真正的题是：渗透率补课里，中国品牌能否把 41% 的供应叙事做成可防守的 OBM 份额。五条变量决定答案。",
          points: [
            {
              judge: "F-Gas / 制冷剂换代",
              anchor: "R32 入欧窗口收到 2026 年底；R290 PortaSplit 目标 2027 夏。断档或涨价会伤爆品连续性。",
              so: "先看合规节奏，再看下一个夏天的出货。",
            },
            {
              judge: "贸易救济与关税",
              anchor: "份额跃升会引来欧盟救济讨论；本地化制造与 TEKA/Arbonia 是对冲，不是免罪金牌。",
              so: "OBM + 在欧产能比纯出口更抗压。",
            },
            {
              judge: "高温脉冲退潮",
              anchor: "一个凉夏会压渠道库存与黄牛溢价；渗透率长坡仍在，但节奏会抖。",
              so: "区分天气贝塔与渗透率阿尔法。",
            },
            {
              judge: "电网与电价",
              anchor: "高电价与电网约束可能抑制使用强度，甚至触发政策摩擦。",
              so: "能效与热泵叙事比纯制冷更重要。",
            },
            {
              judge: "在位者反击",
              anchor: "大金/BSH 等守高端与安装服务网络；中国品牌要用定义权换服务与品牌信任。",
              so: "份额胜负在售后与品牌，不只在出货周。",
            },
          ],
        },
        en: {
          title: "Can share stick: five variables",
          stance: "Hits prove demand; rules and cycles decide what remains",
          summary:
            "After the pulse, the real question is whether Chinese brands turn a 41% supply story into defensible OBM share inside the penetration climb. Five variables decide.",
          points: [
            {
              judge: "F-Gas / refrigerant swap",
              anchor: "R32 placement window closes end-2026; R290 PortaSplit targets summer 2027. Gaps or price jumps break hit continuity.",
              so: "Watch compliance cadence before the next summer’s shipments.",
            },
            {
              judge: "Trade remedies & tariffs",
              anchor: "Share jumps invite EU remedy talk; localized make plus TEKA/Arbonia hedges—doesn’t immunize.",
              so: "OBM + in-Europe capacity beats pure export under stress.",
            },
            {
              judge: "Heat pulse fades",
              anchor: "A cool summer hits channel stock and scalp premiums; the penetration slope remains, but the beat wobbles.",
              so: "Separate weather beta from penetration alpha.",
            },
            {
              judge: "Grid & power prices",
              anchor: "High tariffs and grid constraints can suppress usage intensity—or spark policy friction.",
              so: "Efficiency and heat-pump framing matter more than raw cooling.",
            },
            {
              judge: "Incumbent pushback",
              anchor: "Daikin/BSH hold premium and service networks; Chinese brands must trade definition rights for service and trust.",
              so: "Share is won in aftersales and brand, not only shipping weeks.",
            },
          ],
        },
      },
      {
        id: "verdict",
        released: true,
        layout: "thesis",
        source: "欧洲高温与美的家电分析报告 §七；公开年报与机构一致预期",
        zh: {
          title: "一页结论",
          stance: "导火索已响，长坡刚刚开始",
          summary:
            "用四句话收束全书：事件、赢家、增速、格局。后面再翻任何一章，都应对回这四条。",
          points: [
            {
              judge: "热浪是导火索，不是故事本身",
              contrast: {
                left: "~20%",
                leftLabel: "欧洲家庭空调渗透",
                right: "~90%",
                rightLabel: "美/日对照",
              },
              anchor: "真正驱动是渗透率结构性补课 + 免安装产品创新破解安装摩擦。",
              so: "读事件，先读空白市场。",
            },
            {
              judge: "美的是本轮最大赢家",
              anchor: "H1 西欧空调 +70%、PortaSplit 翻倍；中期叠 OBM 品牌化 + Arbonia 采暖；机构常列中国家电首选。",
              so: "短期看爆品，中期看第二主场是否做实。",
            },
            {
              judge: "增长是稳健提质，不是爆发",
              contrast: {
                left: "中高个位数",
                leftLabel: "2026–2028E 营收增速",
                right: "有限占比",
                rightLabel: "西欧 ToC HVAC / 集团",
              },
              anchor: "欧洲空调是高确定性增量，但撬不动整个增速公式。",
              so: "把惊喜记在质量账，不要记成颠覆账。",
            },
            {
              judge: "格局：中国三强领跑，欧洲成主战场",
              anchor: "美的（营收/产品定义）、海尔（销量/平台）受益最大；格力海外敞口小相对滞后。",
              so: "往后看份额能否守住，关键变量在法规、关税与采暖。",
            },
          ],
        },
        en: {
          title: "One-page verdict",
          stance: "The fuse has lit; the long slope is just starting",
          summary:
            "Close the book in four lines: event, winner, growth, structure. Every later chapter should map back here.",
          points: [
            {
              judge: "Heatwaves are the fuse, not the story",
              contrast: {
                left: "~20%",
                leftLabel: "EU household AC",
                right: "~90%",
                rightLabel: "US/JP reference",
              },
              anchor: "The real drivers are structural penetration catch-up plus install-free product innovation against friction.",
              so: "Read the blank market before the weather.",
            },
            {
              judge: "Midea is the round’s biggest winner",
              anchor: "H1 WE AC +70%, PortaSplit doubled; medium term stacks OBM branding + Arbonia heating; houses often rank it China appliances #1.",
              so: "Near term watch the hit; medium term watch whether the second home sticks.",
            },
            {
              judge: "Growth is steady quality, not an explosion",
              contrast: {
                left: "Mid/high SD",
                leftLabel: "2026–2028E revenue growth",
                right: "Limited share",
                rightLabel: "WE ToC HVAC / group",
              },
              anchor: "European AC is high-certainty incremental—not enough to rewrite group growth math.",
              so: "Book the beat as quality, not as a regime change.",
            },
            {
              judge: "Structure: China big-3 lead; Europe is the main field",
              anchor: "Midea (revenue/definition) and Haier (volume/platform) gain most; Gree lags on thin overseas.",
              so: "Whether share sticks turns on regulation, tariffs, and heating.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "h1",
    shelf: "allocation",
    updated: "2026-07-15",
    frame: {
      zh: {
        title: "读上半年复盘先抓这三问",
        points: [
          "同一半场四个指数差多远：结构比总量重要。",
          "资金是存量超配美国，还是边际在离开美国。",
          "下半年美股与 A 股各自换什么主线。",
        ],
      },
      en: {
        title: "Read the H1 review through three questions",
        points: [
          "How far four indexes diverged in one half: structure over totals.",
          "Is capital still overweight the US in stock, or leaving at the margin.",
          "What themes rotate for US and A-shares in H2.",
        ],
      },
    },
    zh: {
      title: "2026 年上半年复盘",
      stance: "资金去美国这件事要拆开看",
      blurb: "有的章用柱图，有的用结论卡。先看 A 股指数分化，再看资金两层含义与下半年方向。",
    },
    en: {
      title: "First-half 2026 review",
      stance: "“Money is going to the US” needs to be split apart",
      blurb: "Bars and thesis cards. Start with A-share index dispersion, then the two layers of capital flows and H2 direction.",
    },
    chapters: [
      {
        id: "panorama",
        released: true,
        chart: "bar",
        values: [64, 36, 20, 3],
        source: "Wind / 交易所公开指数收盘：上证、深证、创业板、科创50（2026H1）",
        zh: {
          title: "上半年 A 股：科创领跑，上证几乎原地",
          stance: "同一半场，四个指数不是同一场球",
          summary:
            "上半年科创 50 约涨 64%，创业板约涨 36%，深证约涨 20%，上证约涨 3%。主线都在科技成长，宽基指数会骗人。读资金流向前，先接受结构分化有多极端。",
          categories: ["科创50", "创业板", "深证", "上证"],
          seriesName: "上半年涨跌幅",
          suffix: "%",
        },
        en: {
          title: "H1 A-shares: STAR led, the Shanghai Composite barely moved",
          stance: "Same half-year, four indexes were not the same game",
          summary:
            "In the first half the STAR 50 was up about 64%, ChiNext about 36%, Shenzhen about 20%, and the Shanghai Composite about 3%. Tech growth carried the tape; broad indexes can mislead. Before arguing about capital flows, accept how extreme the split was.",
          categories: ["STAR 50", "ChiNext", "Shenzhen", "Shanghai"],
          seriesName: "First-half return",
          suffix: "%",
        },
      },
      {
        id: "us",
        released: true,
        layout: "compare",
        source: "Ashmore / T. Rowe / Wellington / J.P. Morgan 等公开再平衡观点；EM ETF 流入公开统计",
        zh: {
          title: "资金是不是都去了美国",
          stance: "存量超配是事实，边际再平衡也是事实",
          summary:
            "美股约占全球股票基准三分之二。但多家机构指出资金正从高度集中的美国资产边际流向新兴市场。美元方向是总开关。",
          compare: {
            left: {
              name: "存量：美国仍重",
              lines: [
                "美股占全球基准约 2/3",
                "AI + 强盈利仍吸金",
                "全球投资者历史性超配美元资产",
              ],
            },
            right: {
              name: "边际：再平衡启动",
              lines: [
                "机构观察资金流向 EM",
                "2025 年 EM 股票基金净流入创后疫情高",
                "从美国减配 1 个点，对更小的 EM 是大增量",
              ],
            },
          },
        },
        en: {
          title: "Is the money all going to the US",
          stance: "Overweight in stock is true; rotation at the margin is also true",
          summary:
            "US equities are about two thirds of global equity benchmarks. Yet several houses see marginal flows from crowded US assets into EM. The dollar is the master switch.",
          compare: {
            left: {
              name: "Stock: US still heavy",
              lines: [
                "US ~2/3 of global equity benchmarks",
                "AI + earnings still attract capital",
                "Historic overweight to dollar assets",
              ],
            },
            right: {
              name: "Margin: rebalancing starts",
              lines: [
                "Houses flag flows toward EM",
                "2025 EM equity fund inflows hit a post-COVID high",
                "A 1-pt US underweight is large for smaller EM",
              ],
            },
          },
        },
      },
      {
        id: "h2",
        released: true,
        layout: "thesis",
        source: "H1 2026 复盘备忘：投行 H2 观点公开转述",
        zh: {
          title: "下半年方向",
          stance: "美股广度扩散，A 股景气为纲",
          summary:
            "美股保留核心科技但向周期/金融/工业扩散；A 股走算力牛 + 复苏牛的结构性慢牛。再平衡利好非美，前提是美元不太强。",
          points: [
            {
              judge: "美股：从七巨头到广度",
              anchor: "投行方向一致看涨但领涨更广；警惕流动性管道风险。",
              so: "核心 AI 不撤，拥挤单点要设上限。",
            },
            {
              judge: "A 股：考核盈利能力",
              anchor: "概念炒作让位业绩确定与可持续产业趋势。",
              so: "景气主线：海外/国产算力、资源品、部分航天等。",
            },
            {
              judge: "总开关仍是美元",
              anchor: "美元走弱 + 不加息，EM（含中国相关资产）财务条件改善。",
              so: "增长超预期推升美元，可能逆转流入。",
            },
          ],
        },
        en: {
          title: "Second-half direction",
          stance: "US breadth; A-shares anchored on earnings momentum",
          summary:
            "US keeps core tech but broadens into cyclicals/financials/industrials; A-shares run a structural slow bull on compute + recovery. Rebalancing helps non-US if the dollar stays soft.",
          points: [
            {
              judge: "US: Mag7 toward breadth",
              anchor: "Banks stay constructive but want wider leadership; watch plumbing risk.",
              so: "Keep core AI; cap crowded single names.",
            },
            {
              judge: "A-shares: earnings test",
              anchor: "Concept trades yield to durable industry trends with prints.",
              so: "Momentum lines: overseas/domestic compute, resources, some aerospace.",
            },
            {
              judge: "Dollar remains the switch",
              anchor: "Soft dollar + no hike eases EM (including China-linked) financial conditions.",
              so: "Stronger US growth lifting the dollar can reverse inflows.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "roadmap",
    shelf: "allocation",
    updated: "2026-09-22",
    frame: {
      zh: {
        title: "读 8–12 月路线先抓这三问",
        points: [
          "8 月三个切换：业绩锚、资金结构、全球利率叙事。",
          "四阶段各自主导变量是什么，有效板块是否同名。",
          "三档排序里什么是底仓，什么只是交易。",
        ],
      },
      en: {
        title: "Read Aug–Dec through three questions",
        points: [
          "August’s three shifts: earnings anchor, fund structure, global rates narrative.",
          "What leads each of the four phases—and whether the same sectors work.",
          "In the three-tier map, what is core vs trade-only.",
        ],
      },
    },
    zh: {
      title: "8–12 月配置路线",
      stance: "先看 8 月的三个切换，再看后面四个月",
      blurb: "有的章用柱图，有的用时间线和矩阵。先看 7 月资金换手，再看四阶段与板块三档。",
    },
    en: {
      title: "August–December allocation",
      stance: "Start with August's three shifts, then the next four months",
      blurb: "Bars, a timeline, and a matrix. Start with July’s fund handoff, then the four phases and three-tier sector map.",
    },
    chapters: [
      {
        id: "august",
        released: true,
        chart: "bar",
        values: [4080, 4778],
        source: "Wind / 交易所与基金业协会公开数据：融资余额变化、股票型 ETF 净流入（2026-07）",
        zh: {
          title: "7 月：融资流出约四千亿，ETF 流入约四千八百亿",
          stance: "杠杆在退，稳市资金在进",
          summary:
            "7 月融资余额大约净流出 4,080 亿元，股票型 ETF 净流入约 4,778 亿元。这更像拥挤交易修正后的资金换手，而不是全面去杠杆崩盘。读 8 月切换时，先看钱从杠杆转到了 ETF。",
          categories: ["融资净流出", "ETF净流入"],
          seriesName: "7 月资金变化",
          suffix: " 亿元",
        },
        en: {
          title: "July: margin left by about 408 bn, ETFs took in about 478 bn",
          stance: "Leverage stepped back; stabilization money stepped in",
          summary:
            "In July margin balances fell by about RMB 408 bn while equity ETFs took in about RMB 478 bn. That looks more like a crowded-trade reset than a full deleveraging crash. Before reading August’s shifts, see money moving from leverage into ETFs.",
          categories: ["Margin outflow", "ETF inflow"],
          seriesName: "July fund flows",
          suffix: " bn RMB",
        },
      },
      {
        id: "path",
        released: true,
        layout: "timeline",
        source: "A股2026年8月交易逻辑与8-12月配置路线图 §四",
        zh: {
          title: "四阶段路线图",
          stance: "每个阶段主导变量不同，有效板块也不同",
          summary:
            "8 月业绩验证 → 9 月政策增量 → 10–11 月全球波动（含美国中期选举）→ 12 月政策定调。波动窗口往往是吸筹窗口。",
          timeline: [
            { when: "8 月", what: "中报筛选伪景气；超跌+业绩验证的科技硬件、涨价链、非银、创新药" },
            { when: "9 月", what: "增量政策窗口 + 美联储议息；内需/红利或有交易，消费反转未确认" },
            { when: "10–11 月", what: "三季报 + 美国中期选举；波动放大，提前降低组合波动、回撤中吸筹" },
            { when: "12 月", what: "中央经济工作会议与明年策略；主题切换 + 红利再平衡" },
          ],
        },
        en: {
          title: "Four-stage path",
          stance: "Different drivers each phase—different working sectors",
          summary:
            "Aug earnings screen → Sep policy add-ons → Oct–Nov global vol (US midterms) → Dec policy set. Vol windows are often accumulation windows.",
          timeline: [
            { when: "August", what: "Interim results weed fake momentum; oversold + verified tech hardware, price chains, brokers, innovative drugs" },
            { when: "September", what: "Domestic policy window + FOMC; domestic-demand/dividends may trade; consumption turn not confirmed" },
            { when: "Oct–Nov", what: "Q3 prints + US midterms; vol up—cut portfolio vol early, buy dips" },
            { when: "December", what: "Central Economic Work Conference and next-year strategy; theme rotate + dividend rebalance" },
          ],
        },
      },
      {
        id: "ranks",
        released: true,
        layout: "matrix",
        source: "A股2026年8月交易逻辑与8-12月配置路线图 §五；公开中报景气数据整理",
        zh: {
          title: "板块排序",
          stance: "三档：底仓、弹性、压舱石",
          summary:
            "第一档要能拿住；第二档赔率优于胜率；第三档降回撤。地产链与部分消费基本面未反转，政策窗口最多当交易。",
          matrix: {
            headers: ["档位", "方向", "一句话"],
            rows: [
              { label: "第一档", cells: ["AI 算力国产链 / 存储 / 涨价资源 / 化工 / 出海电设储能", "业绩+产业趋势双确认"] },
              { label: "第二档", cells: ["创新药 CXO / 非银 / 军工航天 / 人形机器人 / 保险", "景气拐点、仓位仍低"] },
              { label: "第三档", cells: ["煤炭 / 银行 / 石油石化 / 公用 / 交运", "降回撤，不追超额"] },
              { label: "降预期", cells: ["地产链、部分消费", "可有交易性反弹，未见基本面反转"] },
            ],
          },
        },
        en: {
          title: "Sector order",
          stance: "Three tiers: core, torque, ballast",
          summary:
            "Tier one must be holdable; tier two favors payoff over hit rate; tier three cuts drawdowns. Property-chain and some consumption lack a fundamental turn—policy windows are trades at best.",
          matrix: {
            headers: ["Tier", "Directions", "One line"],
            rows: [
              { label: "Core", cells: ["Domestic AI compute / memory / resources / chemicals / grid+storage export", "Earnings + industry trend confirmed"] },
              { label: "Torque", cells: ["Innovative drugs/CXO / brokers / defense-space / humanoids / insurance", "Inflection, still light positioning"] },
              { label: "Ballast", cells: ["Coal / banks / oil / utilities / transport", "Cut drawdowns, not chase alpha"] },
              { label: "Lower bar", cells: ["Property chain, some consumption", "Tradeable bounces; no confirmed turn"] },
            ],
          },
        },
      },
    ],
  },
];

export function getBook(id: string) {
  return books.find((book) => book.id === id);
}

export function chapterCopy(chapter: Chapter, locale: Locale) {
  return locale === "zh" ? chapter.zh : chapter.en;
}

export function visibleChapters(book: Book, locale: Locale) {
  return book.chapters.filter((chapter) => chapterCopy(chapter, locale));
}

export function getReleasedChapter(bookId: string, chapterId: string, locale: Locale) {
  const book = getBook(bookId);
  const chapter = book?.chapters.find((item) => item.id === chapterId && item.released);
  const copy = chapter ? chapterCopy(chapter, locale) : undefined;
  if (!book || !chapter || !chapterReady(chapter, copy)) return undefined;
  return { book, chapter, copy: copy! };
}
