// 存储当前脚本标签的哈希值集合
let scriptHashes = new Set();

/**
 * 从首页获取脚本标签的哈希值集合
 * @returns {Promise<Set<string>>} 返回包含脚本标签的哈希值的集合
 */
async function fetchScriptHashes() {
    // 获取首页HTML内容
    const html = await fetch('/').then((res) => res.text());
    // 正则表达式匹配所有<script>标签
    const scriptRegex = /<script[^>]*>[\s\S]*<\/script>/g;
    // 获取匹配到的所有<script>标签内容
    const scripts = html.match(scriptRegex) ?? [];
    // 将脚本标签内容存入集合并返回
    return new Set(scripts);
}

/**
 * 比较当前脚本标签的哈希值集合与新获取的集合，检测是否有更新
 */
function automaticUpdate(updateNotice, time = 3000) {
    let timer = null;
    const polling = async () => {
        // 获取新的脚本标签哈希值集合
        const newScriptHashes = await fetchScriptHashes();
        if (scriptHashes.size === 0) {
            // 初次运行时，存储当前脚本标签哈希值
            scriptHashes = newScriptHashes;
        } else if (
            scriptHashes.size !== newScriptHashes.size ||
            ![...scriptHashes].every((hash) => newScriptHashes.has(hash))
        ) {
            timer && clearInterval(timer);
            updateNotice && updateNotice();
        }
    }
    timer = setInterval(polling, time)
}

export default automaticUpdate
