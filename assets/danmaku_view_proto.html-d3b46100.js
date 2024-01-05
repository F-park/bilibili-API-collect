import{_ as o,r as e,o as d,c as i,a as n,b as s,d as t,w as l,e as c}from"./app-29a18b4e.js";const r={},u=n("h1",{id:"弹幕元数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#弹幕元数据","aria-hidden":"true"},"#"),s(" 弹幕元数据")],-1),k=n("p",null,"2020-09-25 B站更新了互动弹幕功能，包括UP主头像弹幕、关联视频弹幕、视频内嵌引导关注按钮三大功能",-1),m=n("p",null,"详情见：",-1),b={href:"https://www.bilibili.com/read/cv7728299",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.bilibili.com/blackboard/activity-c8a0iDRQy.html",target:"_blank",rel:"noopener noreferrer"},h=c(`<h2 id="获取弹幕个人配置与互动弹幕及bas-代码-弹幕专包-web端" tabindex="-1"><a class="header-anchor" href="#获取弹幕个人配置与互动弹幕及bas-代码-弹幕专包-web端" aria-hidden="true">#</a> 获取弹幕个人配置与互动弹幕及BAS（代码）弹幕专包（web端）</h2><blockquote><p>https://api.bilibili.com/x/v2/dm/web/view</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：仅可Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>弹幕类</td><td>必要</td><td>1：视频弹幕</td></tr><tr><td>oid</td><td>num</td><td>视频cid</td><td>必要</td><td></td></tr><tr><td>pid</td><td>num</td><td>稿件avid</td><td>非必要</td><td></td></tr></tbody></table><p><strong>proto回复：</strong></p><p>消息<code>DmWebViewReply</code>：</p><table><thead><tr><th>名称</th><th>类型</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>state</td><td>int32</td><td>弹幕开放状态</td><td>0：开放弹幕<br>1：禁止弹幕</td></tr><tr><td>text</td><td>string</td><td>？</td><td></td></tr><tr><td>textSide</td><td>string</td><td>？</td><td></td></tr><tr><td>dmSge</td><td>DmSegConfig</td><td>分段弹幕包信息？</td><td></td></tr><tr><td>flag</td><td>DanmakuFlagConfig</td><td>？</td><td></td></tr><tr><td>specialDms</td><td>repeated string</td><td>BAS（代码）弹幕专包url</td><td></td></tr><tr><td>checkBox</td><td>bool</td><td>？</td><td></td></tr><tr><td>count</td><td>int64</td><td>实际弹幕总数</td><td>具有1500-6000不等的上限</td></tr><tr><td>commandDms</td><td>repeated CommandDm</td><td>互动弹幕条目</td><td></td></tr><tr><td>dmSetting</td><td>DanmuWebPlayerConfig</td><td>弹幕个人配置</td><td>仅登录后存在</td></tr></tbody></table><p>消息<code>dmSge</code>：</p><table><thead><tr><th>名称</th><th>类型</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>pageSize</td><td>int64</td><td>分段时间？</td><td>单位为毫秒</td></tr><tr><td>total</td><td>int64</td><td>最大分页数？</td><td></td></tr></tbody></table><p>消息<code>flag</code>：</p><table><thead><tr><th>名称</th><th>类型</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>recFlag</td><td>int32</td><td>？</td><td></td></tr><tr><td>recText</td><td>string</td><td>？</td><td></td></tr><tr><td>recSwitch</td><td>int32</td><td>？</td><td></td></tr></tbody></table><p>消息<code>commandDms</code>：</p><table><thead><tr><th>名称</th><th>类型</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>int64</td><td>弹幕dmid</td><td></td></tr><tr><td>oid</td><td>int64</td><td>视频cid</td><td></td></tr><tr><td>mid</td><td>int64</td><td>发送者mid</td><td></td></tr><tr><td>command</td><td>string</td><td>弹幕指令</td><td><code>#UP#</code>：UP主头像弹幕<br><code>#LINK#</code>：关联视频弹幕<br><code>#ATTENTION#</code>：视频内嵌引导关注按钮</td></tr><tr><td>content</td><td>string</td><td>弹幕文字</td><td></td></tr><tr><td>progress</td><td>int32</td><td>弹幕出现时间</td><td>单位为毫秒</td></tr><tr><td>ctime</td><td>string</td><td>创建时间？</td><td>此项为空</td></tr><tr><td>mtime</td><td>string</td><td>修改时间？</td><td>此项为空</td></tr><tr><td>extra</td><td>string</td><td>弹幕负载数据</td><td>json序列字串</td></tr><tr><td>idStr</td><td>string</td><td>弹幕dmid</td><td>字串形式</td></tr></tbody></table><p><code>extra</code>json序列：</p><p>类型为【UP主头像弹幕】时：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>icon</td><td>str</td><td>UP主头像url</td><td></td></tr></tbody></table><p>类型为【关联视频弹幕】时：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>关联视频的avid</td><td></td></tr><tr><td>title</td><td>str</td><td>关联视频的标题</td><td></td></tr><tr><td>icon</td><td>str</td><td>关联视频按钮图片url</td><td></td></tr><tr><td>bvid</td><td>str</td><td>关联视频的bvid</td><td></td></tr></tbody></table><p>类型为【视频内嵌引导关注按钮】时：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>duration</td><td>num</td><td>持续时间</td><td>单位为毫秒</td></tr><tr><td>posX</td><td>num</td><td>X坐标</td><td>区间：[118-549]</td></tr><tr><td>posY</td><td>num</td><td>Y坐标</td><td>区间：[82-293]</td></tr><tr><td>icon</td><td>str</td><td>按钮图片url</td><td>不应该是关注按钮吗，但这个是圆形的</td></tr><tr><td>type</td><td>num</td><td>关注按钮类型</td><td>0：仅关注<br>1：仅三联<br>2：关注+三联</td></tr></tbody></table><p>消息<code>dmSetting</code>：</p><table><thead><tr><th>名称</th><th>类型</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>dmSwitch</td><td>bool</td><td>弹幕开关</td><td>true：开启<br>false：关闭</td></tr><tr><td>aiSwitch</td><td>bool</td><td>智能云屏蔽</td><td>同上</td></tr><tr><td>aiLevel</td><td>int32</td><td>智能云屏蔽级别</td><td>区间：[1-10]</td></tr><tr><td>blocktop</td><td>bool</td><td>屏蔽类型-顶部</td><td>true：不屏蔽<br>false：屏蔽</td></tr><tr><td>blockscroll</td><td>bool</td><td>屏蔽类型-滚动</td><td>同上</td></tr><tr><td>blockbottom</td><td>bool</td><td>屏蔽类型-底部</td><td>同上</td></tr><tr><td>blockcolor</td><td>bool</td><td>屏蔽类型-彩色</td><td>同上</td></tr><tr><td>blockspecial</td><td>bool</td><td>屏蔽类型-特殊</td><td>同上</td></tr><tr><td>preventshade</td><td>bool</td><td>防挡弹幕（底部15%）</td><td>true：开启<br>false：关闭</td></tr><tr><td>dmask</td><td>bool</td><td>智能防挡弹幕（人像蒙版）</td><td>同上</td></tr><tr><td>opacity</td><td>float</td><td>弹幕不透明度</td><td>区间：[0-1]</td></tr><tr><td>dmarea</td><td>int32</td><td>弹幕显示区域</td><td>100：不重叠<br>75：3/4屏<br>50：半瓶<br>25：1/4屏<br>0：不限</td></tr><tr><td>speedplus</td><td>float</td><td>弹幕速度</td><td>区间：[0.4-1.6]</td></tr><tr><td>fontsize</td><td>float</td><td>字体大小</td><td>区间：[0.4-1.6]</td></tr><tr><td>screensync</td><td>bool</td><td>跟随屏幕缩放比例</td><td></td></tr><tr><td>speedsync</td><td>bool</td><td>根据播放倍速调整速度</td><td></td></tr><tr><td>fontfamily</td><td>string</td><td>字体类型？</td><td>未启用</td></tr><tr><td>bold</td><td>bool</td><td>粗体？</td><td>未启用</td></tr><tr><td>fontborder</td><td>int32</td><td>描边类型</td><td>0：重墨<br>1：描边<br>2：45°投影</td></tr><tr><td>drawType</td><td>string</td><td>渲染类型？</td><td>未启用</td></tr></tbody></table><p>protobuf结构体：</p><p><strong>web_dmview.proto</strong></p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//分段弹幕包信息？</span>
<span class="token keyword">message</span> <span class="token class-name">DmSegConfig</span> <span class="token punctuation">{</span>
    <span class="token builtin">int64</span> pageSize <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//分段时间？</span>
    <span class="token builtin">int64</span> total <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>    <span class="token comment">//最大分页数？</span>
<span class="token punctuation">}</span>

<span class="token comment">//</span>
<span class="token keyword">message</span> <span class="token class-name">DanmakuFlagConfig</span> <span class="token punctuation">{</span>
    <span class="token builtin">int32</span> recFlag <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>   <span class="token comment">//</span>
    <span class="token builtin">string</span> recText <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>  <span class="token comment">//</span>
    <span class="token builtin">int32</span> recSwitch <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">//</span>
<span class="token punctuation">}</span>

<span class="token comment">// 互动弹幕条目</span>
<span class="token keyword">message</span> <span class="token class-name">CommandDm</span> <span class="token punctuation">{</span>
    <span class="token builtin">int64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>       <span class="token comment">//弹幕dmid</span>
    <span class="token builtin">int64</span> oid <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>      <span class="token comment">//视频cid</span>
    <span class="token builtin">int64</span> mid <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>      <span class="token comment">//发送者mid</span>
    <span class="token builtin">string</span> command <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">//弹幕指令</span>
    <span class="token builtin">string</span> content <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//弹幕文字</span>
    <span class="token builtin">int32</span> progress <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">//弹幕出现时间</span>
    <span class="token builtin">string</span> ctime <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>   <span class="token comment">//</span>
    <span class="token builtin">string</span> mtime <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>   <span class="token comment">//</span>
    <span class="token builtin">string</span> extra <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>   <span class="token comment">//弹幕负载数据</span>
    <span class="token builtin">string</span> idStr <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">//弹幕dmid（字串形式）</span>
<span class="token punctuation">}</span>

<span class="token comment">//弹幕个人配置</span>
<span class="token keyword">message</span> <span class="token class-name">DanmuWebPlayerConfig</span><span class="token punctuation">{</span>
    <span class="token builtin">bool</span> dmSwitch<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>      <span class="token comment">//弹幕开关</span>
    <span class="token builtin">bool</span> aiSwitch<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>      <span class="token comment">//智能云屏蔽</span>
    <span class="token builtin">int32</span> aiLevel<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>      <span class="token comment">//智能云屏蔽级别</span>
    <span class="token builtin">bool</span> blocktop<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>      <span class="token comment">//屏蔽类型-顶部</span>
    <span class="token builtin">bool</span> blockscroll<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>   <span class="token comment">//屏蔽类型-滚动</span>
    <span class="token builtin">bool</span> blockbottom<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span>   <span class="token comment">//屏蔽类型-底部</span>
    <span class="token builtin">bool</span> blockcolor<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">;</span>    <span class="token comment">//屏蔽类型-彩色</span>
    <span class="token builtin">bool</span> blockspecial<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">;</span>  <span class="token comment">//屏蔽类型-特殊</span>
    <span class="token builtin">bool</span> preventshade<span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">;</span>  <span class="token comment">//防挡弹幕（底部15%）</span>
    <span class="token builtin">bool</span> dmask<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>        <span class="token comment">//智能防挡弹幕（人像蒙版）</span>
    <span class="token builtin">float</span> opacity<span class="token operator">=</span><span class="token number">11</span><span class="token punctuation">;</span>     <span class="token comment">//弹幕不透明度</span>
    <span class="token builtin">int32</span> dmarea<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">;</span>      <span class="token comment">//弹幕显示区域</span>
    <span class="token builtin">float</span> speedplus<span class="token operator">=</span><span class="token number">13</span><span class="token punctuation">;</span>   <span class="token comment">//弹幕速度</span>
    <span class="token builtin">float</span> fontsize<span class="token operator">=</span><span class="token number">14</span><span class="token punctuation">;</span>    <span class="token comment">//字体大小</span>
    <span class="token builtin">bool</span> screensync<span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">;</span>   <span class="token comment">//跟随屏幕缩放比例</span>
    <span class="token builtin">bool</span> speedsync<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">;</span>    <span class="token comment">//根据播放倍速调整速度</span>
    <span class="token builtin">string</span> fontfamily<span class="token operator">=</span><span class="token number">17</span><span class="token punctuation">;</span> <span class="token comment">//字体类型？</span>
    <span class="token builtin">bool</span> bold<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">;</span>         <span class="token comment">//粗体？</span>
    <span class="token builtin">int32</span> fontborder<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">;</span>  <span class="token comment">//描边类型</span>
    <span class="token builtin">string</span> drawType<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>   <span class="token comment">//渲染类型？</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">DmWebViewReply</span> <span class="token punctuation">{</span>
    <span class="token builtin">int32</span> state <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>                     <span class="token comment">//弹幕开放状态</span>
    <span class="token builtin">string</span> text <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>                     <span class="token comment">//</span>
    <span class="token builtin">string</span> textSide <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>                 <span class="token comment">//</span>
    <span class="token positional-class-name class-name">DmSegConfig</span> dmSge <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>               <span class="token comment">//分段弹幕包信息？</span>
    <span class="token positional-class-name class-name">DanmakuFlagConfig</span> flag <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>          <span class="token comment">//</span>
    <span class="token keyword">repeated</span> <span class="token builtin">string</span> specialDms <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>      <span class="token comment">//BAS（代码）弹幕专包url</span>
    <span class="token builtin">bool</span> checkBox <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>                   <span class="token comment">//</span>
    <span class="token builtin">int64</span> count <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>                     <span class="token comment">//实际弹幕总数</span>
    <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">CommandDm</span> commandDms <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>   <span class="token comment">//互动弹幕条目</span>
    <span class="token positional-class-name class-name">DanmuWebPlayerConfig</span> dmSetting <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//弹幕个人配置</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p><p>获取视频<code>av797164471(cid=236871317)</code>的弹幕元数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/dm/web/view&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;type=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;oid=236871317&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;pid=797164471&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-o</span> <span class="token string">&#39;danmaku_view.bin&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应正文为protubuf二进制数据</p><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><h3 id="获取互动弹幕" tabindex="-1"><a class="header-anchor" href="#获取互动弹幕" aria-hidden="true">#</a> 获取互动弹幕</h3><p>获取并显示视频<code>av797164471(cid=236871317)</code>的所有互动弹幕</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> web_dmview_pb2
<span class="token keyword">import</span> requests

AVID <span class="token operator">=</span> <span class="token number">797164471</span>
CID <span class="token operator">=</span> <span class="token number">236871317</span>
url <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&#39;https://api.bilibili.com/x/v2/dm/web/view?type=1&amp;oid=</span><span class="token interpolation"><span class="token punctuation">{</span>CID<span class="token punctuation">}</span></span><span class="token string">&amp;pid=</span><span class="token interpolation"><span class="token punctuation">{</span>AVID<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>

data <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
target <span class="token operator">=</span> web_dmview_pb2<span class="token punctuation">.</span>DmWebViewReply<span class="token punctuation">(</span><span class="token punctuation">)</span>
target<span class="token punctuation">.</span>ParseFromString<span class="token punctuation">(</span>data<span class="token punctuation">.</span>content<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;互动弹幕数=</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">len</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>commandDms<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> target<span class="token punctuation">.</span>commandDms<span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;&#39;&#39;\\
---弹幕ID=</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">}</span></span><span class="token string">
---视频cid=</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">.</span>oid<span class="token punctuation">}</span></span><span class="token string">
---发送者mid=</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">.</span>mid<span class="token punctuation">}</span></span><span class="token string">
---弹幕指令=</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">.</span>command<span class="token punctuation">}</span></span><span class="token string">
---弹幕文字=</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">.</span>content<span class="token punctuation">}</span></span><span class="token string">
---弹幕出现时间=</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">.</span>progress<span class="token punctuation">}</span></span><span class="token string">
---弹幕负载数据=</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">.</span>extra<span class="token punctuation">}</span></span><span class="token string">
---弹幕ID（字串）=</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">.</span>idStr<span class="token punctuation">}</span></span><span class="token string">&#39;&#39;&#39;</span></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>互动弹幕数=1
---弹幕ID=38469676112019463
---视频cid=236871317
---发送者mid=501183549
---弹幕指令=#UP#
---弹幕文字=这个视频没有恰饭！别紧张！
---弹幕出现时间=157818
---弹幕负载数据={&quot;icon&quot;:&quot;https://i1.hdslb.com/bfs/face/559abe31f561f71f3106d8ee7b2065cac50c1235.jpg&quot;}
---弹幕ID（字串）=38469676112019463
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取bas-代码-弹幕专包" tabindex="-1"><a class="header-anchor" href="#获取bas-代码-弹幕专包" aria-hidden="true">#</a> 获取BAS（代码）弹幕专包</h3><p>BAS弹幕（<code>pool=2</code> <code>mode=9</code>）只能从此包获取，代码弹幕（<code>pool=2</code> <code>mode=8</code>）也能从此包获取</p><p>获取并显示视频<code>av2(cid=62131)</code>的所有BAS（代码）弹幕专包</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> web_dmview_pb2
<span class="token keyword">import</span> requests

AVID <span class="token operator">=</span> <span class="token number">2</span>
CID <span class="token operator">=</span> <span class="token number">62131</span>
url <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&#39;https://api.bilibili.com/x/v2/dm/web/view?type=1&amp;oid=</span><span class="token interpolation"><span class="token punctuation">{</span>CID<span class="token punctuation">}</span></span><span class="token string">&amp;pid=</span><span class="token interpolation"><span class="token punctuation">{</span>AVID<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>

data <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
target <span class="token operator">=</span> web_dmview_pb2<span class="token punctuation">.</span>DmWebViewReply<span class="token punctuation">(</span><span class="token punctuation">)</span>
target<span class="token punctuation">.</span>ParseFromString<span class="token punctuation">(</span>data<span class="token punctuation">.</span>content<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;特殊弹幕包数=</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">len</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>specialDms<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> target<span class="token punctuation">.</span>specialDms<span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;特殊弹幕包url=</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>特殊弹幕包数=1
特殊弹幕包url=https://i0.hdslb.com/bfs/dm/b0d5f08c12be59292aa0d4e09b6dd8e54c2ba886.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function g(y,f){const a=e("ExternalLinkIcon"),p=e("RouterLink");return d(),i("div",null,[u,k,m,n("ul",null,[n("li",null,[n("a",b,[s("【客户端更新】6.10版本更新！UP主支持发布关联视频弹幕"),t(a)])]),n("li",null,[n("a",v,[s("引导关注卡片"),t(a)])])]),h,n("p",null,[s("使用"),t(p,{to:"/docs/danmaku/danmaku_proto.html#%E8%8E%B7%E5%8F%96%E5%AE%9E%E6%97%B6%E5%BC%B9%E5%B9%95"},{default:l(()=>[s("普通分段包弹幕")]),_:1}),s("的proto结构体反序列化此bin数据")])])}const _=o(r,[["render",g],["__file","danmaku_view_proto.html.vue"]]);export{_ as default};
