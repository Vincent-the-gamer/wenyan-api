/**
 * 文渊阁总目，文淵閣總目, wyg-registry
 */
import { WygPackage } from "../types"


const registry: WygPackage[] = [
    { name: "子曰", aliases: ["ziyue"], gitRepo: "https://github.com/antfu/ziyue-wy.git"},
    { name: "干支", aliases: ["ganzhi"], gitRepo: "https://github.com/lee-flower/ganzhi-wy.git"},
    { name: "交互秘術", aliases: ["jiaohu"], gitRepo: "https://github.com/GLanguage/jiaohu-wy.git"},
    { name: "刻漏", aliases: ["kelou"], gitRepo: "https://github.com/akira-cn/kelou-wy.git"},
    { name: "柯裡化法", aliases: ["currying"], gitRepo: "https://github.com/akira-cn/currying-wy.git"},
    { name: "符經", aliases: ["fujing"], gitRepo: "https://github.com/GLanguage/fujing-wy.git"},
    { name: "造類秘術", aliases: ["class","zaolei"], gitRepo: "https://github.com/GLanguage/class-wy.git"},
    { name: "简化方言", aliases: ["simplified-dialect"], gitRepo: "https://github.com/XiLaiTL/simplified-dialect-wy.git"},
    { name: "简体秘术", aliases: ["jiantihua"], gitRepo: "https://github.com/lymslive/wyg-packages.git"},
    { name: "腳本秘術", aliases: ["script"], gitRepo: "https://github.com/akira-cn/script-wy.git"},
    { name: "解析整數", aliases: ["zh_parseint"], gitRepo: "https://github.com/alainsaas/zh_parseint-wy.git"},
    { name: "質問", aliases: ["prompt"], gitRepo: "https://github.com/alainsaas/prompt-wy.git"},
    { name: "閱文秘術", aliases: ["stdin"], gitRepo: "https://github.com/DGCK81LNN/wenyan-stdin.git"},
    { name: "器經", aliases: ["qijing"], gitRepo: "https://github.com/Eletary/qijing.git"},
    { name: "異步秘術", aliases: ["async-wy"], gitRepo: "https://github.com/akira-cn/async-wy.git"},
    { name: "控制秘術", aliases: ["control-wy"], gitRepo: "https://github.com/akira-cn/control-wy.git"}
]

export default registry