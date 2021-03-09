import{o as a,c as s,d as n}from"./app.e9a601c8.js";const e='{"title":"Radiate\\\\Auth\\\\AuthManager","description":"","frontmatter":{},"headers":[{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"validate","slug":"validate"},{"level":3,"title":"attempt","slug":"attempt"},{"level":3,"title":"loginUsingId","slug":"loginusingid"},{"level":3,"title":"login","slug":"login"},{"level":3,"title":"logout","slug":"logout"},{"level":3,"title":"user","slug":"user"},{"level":3,"title":"id","slug":"id"},{"level":3,"title":"check","slug":"check"},{"level":3,"title":"guest","slug":"guest"},{"level":3,"title":"guard","slug":"guard"}],"relativePath":"api/auth/auth-manager.md","lastUpdated":1615319147775}',t={},o=n('<h1 id="radiate-auth-authmanager"><a class="header-anchor" href="#radiate-auth-authmanager" aria-hidden="true">#</a> Radiate\\Auth\\AuthManager</h1><h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><h3 id="validate"><a class="header-anchor" href="#validate" aria-hidden="true">#</a> <code>validate</code></h3><p>Validate a user&#39;s credentials.</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">validate</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$credentials</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>\n</code></pre></div><h4 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h4><ul><li><code>$credentials</code> An array containing the keys &#39;username&#39; and &#39;password&#39;<div class="language-php"><pre><code><span class="token variable">$credentials</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;username&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;@admin&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;password&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;P@ssw0rd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre></div></li></ul><h3 id="attempt"><a class="header-anchor" href="#attempt" aria-hidden="true">#</a> <code>attempt</code></h3><p>Attempt a login</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">attempt</span><span class="token punctuation">(</span><span class="token class-name">ArrayAccess</span><span class="token operator">|</span><span class="token keyword type-declaration">array</span> <span class="token variable">$credentials</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$remember</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>\n</code></pre></div><h4 id="properties-2"><a class="header-anchor" href="#properties-2" aria-hidden="true">#</a> Properties</h4><ul><li><code>$credentials</code> An array containing the keys &#39;username&#39; and &#39;password&#39;<div class="language-php"><pre><code><span class="token variable">$credentials</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;username&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;@admin&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;password&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;P@ssw0rd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre></div></li><li><code>$remember</code> Sets the <code>rememberme</code>: See the <a href="https://developer.wordpress.org/reference/functions/wp_set_auth_cookie/#description" target="_blank" rel="noopener noreferrer">WordPress documentation</a> for more information</li></ul><h3 id="loginusingid"><a class="header-anchor" href="#loginusingid" aria-hidden="true">#</a> <code>loginUsingId</code></h3><p>Log in by the user ID</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">loginUsingId</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$remember</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>\n</code></pre></div><h4 id="properties-3"><a class="header-anchor" href="#properties-3" aria-hidden="true">#</a> Properties</h4><ul><li><code>$id</code> A user ID</li><li><code>$remember</code> Sets the <code>rememberme</code>: See the <a href="https://developer.wordpress.org/reference/functions/wp_set_auth_cookie/#description" target="_blank" rel="noopener noreferrer">WordPress documentation</a> for more information</li></ul><h3 id="login"><a class="header-anchor" href="#login" aria-hidden="true">#</a> <code>login</code></h3><p>Login a user</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\\</span>WP_User</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$remember</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>\n</code></pre></div><h4 id="properties-4"><a class="header-anchor" href="#properties-4" aria-hidden="true">#</a> Properties</h4><ul><li><code>$user</code> A WP_User instance</li><li><code>$remember</code> Sets the <code>rememberme</code>: See the <a href="https://developer.wordpress.org/reference/functions/wp_set_auth_cookie/#description" target="_blank" rel="noopener noreferrer">WordPress documentation</a> for more information</li></ul><h3 id="logout"><a class="header-anchor" href="#logout" aria-hidden="true">#</a> <code>logout</code></h3><p>Log out</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>\n</code></pre></div><h3 id="user"><a class="header-anchor" href="#user" aria-hidden="true">#</a> <code>user</code></h3><p>Return the user</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>WP_User</span><span class="token operator">|</span><span class="token keyword type-declaration">false</span>\n</code></pre></div><h3 id="id"><a class="header-anchor" href="#id" aria-hidden="true">#</a> <code>id</code></h3><p>Return the user id</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span><span class="token operator">|</span><span class="token keyword type-declaration">false</span>\n</code></pre></div><h3 id="check"><a class="header-anchor" href="#check" aria-hidden="true">#</a> <code>check</code></h3><p>Determine if the user is logged in</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>\n</code></pre></div><h3 id="guest"><a class="header-anchor" href="#guest" aria-hidden="true">#</a> <code>guest</code></h3><p>Determine if the user is a guest</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">guest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>\n</code></pre></div><h3 id="guard"><a class="header-anchor" href="#guard" aria-hidden="true">#</a> <code>guard</code></h3><p>Return the auth guard</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">guard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>\n</code></pre></div>',40);t.render=function(n,e,t,p,r,c){return a(),s("div",null,[o])};export default t;export{e as __pageData};
