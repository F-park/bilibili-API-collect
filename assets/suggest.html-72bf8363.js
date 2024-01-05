import{_ as s,o as n,c as t,e as a}from"./app-29a18b4e.js";const p={},e=a(`<h1 id="搜索建议" tabindex="-1"><a class="header-anchor" href="#搜索建议" aria-hidden="true">#</a> 搜索建议</h1><h2 id="获取搜索建议关键词-web端" tabindex="-1"><a class="header-anchor" href="#获取搜索建议关键词-web端" aria-hidden="true">#</a> 获取搜索建议关键词（web端）</h2><blockquote><p>https://s.search.bilibili.com/main/suggest</p></blockquote><p><em>请求方式：GET</em></p><p>搜索建议最多提供10个候选关键词</p><p>搜索建议内容可为任意语言（中 英 日等....），中文拼音支持全拼联想词</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>term</td><td>str</td><td>需要获得建议的输入内容</td><td>必要</td><td></td></tr><tr><td>main_ver</td><td>str</td><td>v1</td><td>非必要</td><td>固定为<code>v1</code></td></tr><tr><td>highlight</td><td>str</td><td>任意</td><td>非必要</td><td>有此项开启关键词高亮标签</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>cost</td><td>obj</td><td>详细搜索用时</td><td>大概是吧？</td></tr><tr><td>result</td><td>obj</td><td>搜索建议结果</td><td></td></tr><tr><td>page caches</td><td>obj</td><td>？？？</td><td>作用尚不明确</td></tr><tr><td>sengine</td><td>obj</td><td>？？？</td><td>作用尚不明确</td></tr><tr><td>stoken</td><td>str</td><td>？？？</td><td>作用尚不明确</td></tr></tbody></table><p><code>cost</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>about</td><td>obj</td><td>套了个娃</td><td></td></tr></tbody></table><p><code>cost</code>中的<code>about</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>params_check</td><td>str</td><td></td><td></td></tr><tr><td>total</td><td>str</td><td></td><td></td></tr><tr><td>main_handler</td><td>str</td><td></td><td></td></tr></tbody></table><p><code>result</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>tag</td><td>array</td><td>套了个娃</td><td></td></tr></tbody></table><p><code>result</code>中的<code>tag</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>第1建议关键词</td><td></td></tr><tr><td>n</td><td>obj</td><td>第（n+1）建议关键词</td><td>按照相关程度与热度顺序</td></tr><tr><td>9</td><td>obj</td><td>第10建议关键词</td><td>最后一项</td></tr></tbody></table><p><code>tag</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>value</td><td>str</td><td>关键词内容</td><td></td></tr><tr><td>ref</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>name</td><td>str</td><td>显示内容</td><td>在无高亮显示时与<code>value</code>相同<br>有高亮显示时带有<code>&lt;em class=&quot;suggest_high_light&quot;&gt;</code>的xml标签</td></tr><tr><td>spid</td><td>num</td><td>？？？</td><td>作用尚不明确</td></tr></tbody></table><p><code>page caches</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>save cache</td><td>str</td><td>no</td><td>作用尚不明确</td></tr></tbody></table><p><code>sengine</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>usage</td><td>num</td><td>0</td><td>作用尚不明确</td></tr></tbody></table><p><strong>示例：</strong></p><p>获取关于<code>lei</code>的搜索建议，关键词带有高亮</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://s.search.bilibili.com/main/suggest&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;term=lei&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;main_ver=v1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;highlight=&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cost&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;about&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;params_check&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.000103&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.011644&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;main_handler&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.011472&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;雷军&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;雷军&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;雷之律者&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;雷之律者&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LEI神&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;LEI&lt;/em&gt;神&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LEIGH ELLEXSON&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;LEI&lt;/em&gt;GH ELLEXSON&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LEICA Q2&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;LEI&lt;/em&gt;CA Q2&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LEIGHANNE&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em class=\\&quot;suggest_high_light\\&quot;&gt;LEI&lt;/em&gt;GHANNE&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;雷达探测姬&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;雷达探测姬&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;雷律&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;雷律&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;雷霆嘎巴&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;雷霆嘎巴&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;雷霆沙赞&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;雷霆沙赞&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;spid&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;page caches&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;save cache&quot;</span><span class="token operator">:</span> <span class="token string">&quot;no&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sengine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;usage&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stoken&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12344377692164099019&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,29),o=[e];function l(c,r){return n(),t("div",null,o)}const d=s(p,[["render",l],["__file","suggest.html.vue"]]);export{d as default};
