/* site.js — KelpyShark Documentation */
(function () {
  "use strict";

  /* ══════════════════════════════════════════════════════
     NAVIGATION MANIFEST
     Describes every page in every section.
  ══════════════════════════════════════════════════════ */
  const NAV = {
    tutorial: {
      label: "Tutorial",
      root: "/tutorial/",
      groups: [
        {
          title: "Getting Started",
          pages: [
            { slug: "introduction",       title: "Introduction" },
            { slug: "setup",              title: "Installation & Setup" },
            { slug: "hello-world",        title: "Hello, World!" },
            { slug: "syntax",             title: "Syntax Overview" },
            { slug: "comments",           title: "Comments" },
          ],
        },
        {
          title: "Variables & Types",
          pages: [
            { slug: "variables",          title: "Variables" },
            { slug: "data-types",         title: "Data Types" },
            { slug: "type-casting",       title: "Type Casting" },
            { slug: "operators",          title: "Operators" },
          ],
        },
        {
          title: "Strings",
          pages: [
            { slug: "strings",            title: "Strings" },
            { slug: "string-methods",     title: "String Methods" },
            { slug: "string-formatting",  title: "String Formatting" },
          ],
        },
        {
          title: "Control Flow",
          pages: [
            { slug: "booleans",           title: "Booleans" },
            { slug: "if-else",            title: "If / Elif / Else" },
            { slug: "while-loops",        title: "While Loops" },
            { slug: "for-loops",          title: "For Loops" },
            { slug: "break-continue",     title: "Break & Continue" },
          ],
        },
        {
          title: "Functions",
          pages: [
            { slug: "functions",          title: "Functions" },
            { slug: "return-values",      title: "Return Values" },
            { slug: "scope",              title: "Scope" },
          ],
        },
        {
          title: "Collections",
          pages: [
            { slug: "lists",              title: "Lists" },
            { slug: "dictionaries",       title: "Dictionaries" },
          ],
        },
        {
          title: "Classes & OOP",
          pages: [
            { slug: "classes-intro",      title: "Introduction to Classes" },
            { slug: "attributes",         title: "Attributes" },
            { slug: "constructors",       title: "Constructors" },
            { slug: "methods",            title: "Methods" },
            { slug: "inheritance",        title: "Inheritance" },
          ],
        },
        {
          title: "Error Handling",
          pages: [
            { slug: "errors",             title: "Error Handling" },
            { slug: "throw",              title: "Throwing Errors" },
          ],
        },
        {
          title: "Modules",
          pages: [
            { slug: "imports",            title: "Imports" },
            { slug: "stdlib",             title: "Standard Library" },
          ],
        },
      ],
    },

    reference: {
      label: "Reference",
      root: "/reference/",
      groups: [
        {
          title: "Language",
          pages: [
            { slug: "keywords",           title: "Keywords" },
            { slug: "operators",          title: "Operators" },
            { slug: "types",              title: "Type System" },
            { slug: "grammar",            title: "Grammar (BNF)" },
          ],
        },
        {
          title: "Built-ins",
          pages: [
            { slug: "builtin-functions",  title: "Built-in Functions" },
            { slug: "string-methods",     title: "String Methods" },
            { slug: "list-methods",       title: "List Methods" },
          ],
        },
        {
          title: "Standard Library",
          pages: [
            { slug: "math",               title: "math" },
            { slug: "strings",            title: "strings" },
            { slug: "io",                 title: "io" },
            { slug: "json",               title: "json" },
            { slug: "sys",                title: "sys" },
            { slug: "http",               title: "http" },
          ],
        },
        {
          title: "Errors",
          pages: [
            { slug: "error-types",        title: "Error Types" },
          ],
        },
      ],
    },

    general: {
      label: "General",
      root: "/general/",
      groups: [
        {
          title: "Overview",
          pages: [
            { slug: "about",              title: "About KelpyShark" },
            { slug: "cli",                title: "CLI Reference" },
            { slug: "package-manager",    title: "Package Manager" },
          ],
        },
        {
          title: "Internals",
          pages: [
            { slug: "compiler",           title: "Compiler Architecture" },
            { slug: "codegen",            title: "Code Generation" },
          ],
        },
        {
          title: "Meta",
          pages: [
            { slug: "faq",                title: "FAQ" },
            { slug: "changelog",          title: "Changelog" },
          ],
        },
      ],
    },
  };

  /* ══════════════════════════════════════════════════════
     SIDEBAR INJECTION
  ══════════════════════════════════════════════════════ */
  function buildSidebar(sectionKey, activeSlug) {
    const section = NAV[sectionKey];
    if (!section) return;

    const sidebar = document.querySelector(".sidebar");
    if (!sidebar) return;
    sidebar.dataset.section = sectionKey;

    let html = "";
    for (const group of section.groups) {
      html += `<div class="sidebar-group">`;
      html += `<div class="sidebar-group-title">${group.title}</div>`;
      for (const page of group.pages) {
        const href = resolveHref(sectionKey, page.slug);
        const cls  = page.slug === activeSlug ? " active" : "";
        html += `<a href="${href}"${cls ? ` class="${cls.trim()}"` : ""}>${page.title}</a>`;
      }
      html += `</div>`;
    }

    sidebar.innerHTML = html;

    // Scroll active link into view
    const active = sidebar.querySelector(".active");
    if (active) {
      active.scrollIntoView({ block: "nearest" });
    }
  }

  function resolveHref(sectionKey, slug) {
    // Determine depth from current page so links are relative
    const depth = getPathDepth();
    const root  = "../".repeat(depth);
    return `${root}${sectionKey}/${slug}`;
  }

  function getPathDepth() {
    // Count directory segments below /docs/, excluding the filename itself.
    // e.g. docs/tutorial/foo.html  → depth 1  → "../" once to reach docs root
    //      docs/index.html         → depth 0  → no prefix needed
    const parts = window.location.pathname
      .split("/")
      .filter(Boolean);
    const docsIdx = parts.findIndex(p => p === "docs");
    if (docsIdx === -1) return 1;
    // subtract 1 for "docs" itself and 1 for the filename (last segment)
    return parts.length - docsIdx - 2;
  }

  /* ══════════════════════════════════════════════════════
     PREV / NEXT NAVIGATION
  ══════════════════════════════════════════════════════ */
  function buildPageNav(sectionKey, activeSlug) {
    const section = NAV[sectionKey];
    if (!section) return;

    // Flatten all pages in order
    const all = section.groups.flatMap(g => g.pages);
    const idx = all.findIndex(p => p.slug === activeSlug);
    if (idx === -1) return;

    const prev = idx > 0 ? all[idx - 1] : null;
    const next = idx < all.length - 1 ? all[idx + 1] : null;

    const container = document.querySelector(".page-nav");
    if (!container) return;

    let html = "";
    if (prev) {
      const href = resolveHref(sectionKey, prev.slug);
      html += `<a class="btn-nav prev" href="${href}">&#8592; ${prev.title}</a>`;
    } else {
      html += `<span></span>`;
    }
    if (next) {
      const href = resolveHref(sectionKey, next.slug);
      html += `<a class="btn-nav next" href="${href}">${next.title} &#8594;</a>`;
    }

    container.innerHTML = html;
  }

  /* ══════════════════════════════════════════════════════
     HEADER NAV ACTIVE STATE
  ══════════════════════════════════════════════════════ */
  function setHeaderActive(sectionKey) {
    document.querySelectorAll(".site-nav a[data-section]").forEach(a => {
      a.classList.toggle("active", a.dataset.section === sectionKey);
    });
  }

  /* ══════════════════════════════════════════════════════
     MOBILE SIDEBAR TOGGLE
  ══════════════════════════════════════════════════════ */
  function initMobileToggle() {
    const toggle   = document.querySelector(".sidebar-toggle");
    const sidebar  = document.querySelector(".sidebar");
    const backdrop = document.querySelector(".sidebar-backdrop");
    if (!toggle || !sidebar) return;

    function close() {
      sidebar.classList.remove("open");
      if (backdrop) backdrop.classList.remove("open");
    }
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      if (backdrop) backdrop.classList.toggle("open");
    });
    if (backdrop) backdrop.addEventListener("click", close);

    // Close on nav link click (mobile)
    sidebar.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  }

  /* ══════════════════════════════════════════════════════
     SYNTAX HIGHLIGHTING
     Tokenises text inside <code> elements that have
     the class "language-ks" or sit inside .code-block.
  ══════════════════════════════════════════════════════ */
  const KEYWORDS = new Set([
    "def","if","elif","else","while","for","in","return",
    "import","true","false","and","or","not","break",
    "continue","try","catch","throw","class","null","new",
    "self","static","from","as","pub","print",
  ]);
  const BUILTINS = new Set(["len","type","str","num","push","pop","range"]);

  function highlight(codeEl) {
    const raw = codeEl.textContent;
    let out = "";
    let i = 0;

    function peek(n=1) { return raw.slice(i, i+n); }
    function adv(n=1)  { const s = raw.slice(i, i+n); i+=n; return s; }
    function esc(s)    { return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

    while (i < raw.length) {
      // Comment
      if (peek(1) === "#") {
        let s = "";
        while (i < raw.length && raw[i] !== "\n") s += adv();
        out += `<span class="com">${esc(s)}</span>`;
        continue;
      }

      // Double-quoted string
      if (peek(1) === '"') {
        let s = adv(); // opening "
        let inner = "";
        while (i < raw.length && raw[i] !== '"') {
          if (raw[i] === "\\") { s += adv(); s += adv(); }
          else if (raw[i] === "{" && raw[i+1] === "$") {
            // interpolation {$var}
            inner += `<span class="str">${esc(s)}</span>`;
            s = "";
            let interp = "";
            while (i < raw.length && raw[i] !== "}") interp += adv();
            interp += adv(); // closing }
            inner += `<span class="ivar">${esc(interp)}</span>`;
          } else {
            s += adv();
          }
        }
        if (i < raw.length) s += adv(); // closing "
        out += inner + `<span class="str">${esc(s)}</span>`;
        continue;
      }

      // Single-quoted string
      if (peek(1) === "'") {
        let s = adv();
        while (i < raw.length && raw[i] !== "'") {
          if (raw[i] === "\\") { s += adv(); }
          s += adv();
        }
        if (i < raw.length) s += adv();
        out += `<span class="str">${esc(s)}</span>`;
        continue;
      }

      // Number
      if (/[0-9]/.test(peek()) || (peek() === "-" && /[0-9]/.test(raw[i+1] || ""))) {
        let s = "";
        if (peek() === "-") s += adv();
        while (i < raw.length && /[0-9._]/.test(raw[i])) s += adv();
        out += `<span class="num">${esc(s)}</span>`;
        continue;
      }

      // Word (keyword / builtin / identifier)
      if (/[a-zA-Z_]/.test(peek())) {
        let word = "";
        while (i < raw.length && /[a-zA-Z0-9_]/.test(raw[i])) word += adv();
        if (KEYWORDS.has(word)) {
          out += `<span class="kw">${esc(word)}</span>`;
        } else if (BUILTINS.has(word)) {
          out += `<span class="bi">${esc(word)}</span>`;
        } else if (i < raw.length && raw[i] === "(") {
          out += `<span class="fn">${esc(word)}</span>`;
        } else {
          out += esc(word);
        }
        continue;
      }

      // Operator chars
      if (/[+\-*/%=!<>&|^~]/.test(peek())) {
        let s = "";
        while (i < raw.length && /[+\-*/%=!<>&|^~]/.test(raw[i])) s += adv();
        out += `<span class="op">${esc(s)}</span>`;
        continue;
      }

      // Everything else (whitespace, parens, braces, etc.)
      out += esc(adv());
    }

    codeEl.innerHTML = out;
  }

  function highlightAll() {
    document.querySelectorAll(
      ".code-block pre code, code.language-ks, pre.language-ks code"
    ).forEach(el => {
      try { highlight(el); } catch (e) { /* graceful degrade */ }
    });
  }

  /* ══════════════════════════════════════════════════════
     KEYBOARD NAVIGATION
  ══════════════════════════════════════════════════════ */
  function initKeyNav() {
    document.addEventListener("keydown", e => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      const prev = document.querySelector(".btn-nav.prev");
      const next = document.querySelector(".btn-nav.next");
      if (e.key === "ArrowLeft"  && prev) location.href = prev.href;
      if (e.key === "ArrowRight" && next) location.href = next.href;
    });
  }

  function initSearch() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var wrapper = document.createElement("div");
    wrapper.className = "site-search";

    var input = document.createElement("input");
    input.type = "search";
    input.className = "site-search-input";
    input.placeholder = "Search docs…";
    input.setAttribute("aria-label", "Search documentation");
    input.setAttribute("autocomplete", "off");

    var dropdown = document.createElement("div");
    dropdown.className = "site-search-dropdown";

    wrapper.appendChild(input);
    wrapper.appendChild(dropdown);
    header.appendChild(wrapper);

    var index = null;
    var currentResults = [];
    var focusedIdx = -1;
    var suppressDropdown = false;

    // Resolve path to search-index.json relative to current page depth
    var depth = getPathDepth();
    var prefix = "../".repeat(depth);
    fetch(prefix + "search-index.json")
      .then(function(r) { return r.json(); })
      .then(function(data) {
        // Rewrite hrefs to be relative to current page depth
        index = data.map(function(item) {
          return Object.assign({}, item, { href: prefix + item.href });
        });
      })
      .catch(function() { index = []; });

    function query(q) {
      if (!index) return [];
      var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
      var scored = [];
      for (var i = 0; i < index.length; i++) {
        var item = index[i];
        var score = 0;
        for (var t = 0; t < terms.length; t++) {
          var term = terms[t];
          if (item.title.toLowerCase().includes(term)) score += 10;
          if (item.section.toLowerCase().includes(term)) score += 3;
          if (item.snippet.toLowerCase().includes(term)) score += 1;
        }
        if (score > 0) scored.push({ item: item, score: score });
      }
      scored.sort(function(a, b) { return b.score - a.score; });
      return scored.slice(0, 8).map(function(s) { return s.item; });
    }

    function esc(s) { return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

    function highlight(text, terms) {
      var out = esc(text);
      terms.forEach(function(t) {
        if (!t) return;
        out = out.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + ")", "gi"),
          '<mark style="background:var(--brand-primary);color:#000;border-radius:2px;padding:0 2px">$1</mark>');
      });
      return out;
    }

    function renderResults(results, terms) {
      currentResults = results;
      focusedIdx = -1;
      dropdown.innerHTML = "";
      if (results.length === 0) {
        var empty = document.createElement("div");
        empty.className = "search-empty";
        empty.textContent = "No results found";
        dropdown.appendChild(empty);
      } else {
        results.forEach(function(item) {
          var a = document.createElement("a");
          a.className = "search-result";
          a.href = item.href;
          var sectionHtml = item.section ? '<span class="search-result-section">' + esc(item.section) + '</span>' : '';
          var snippetHtml = item.snippet ? '<span class="search-result-snippet">' + highlight(item.snippet.slice(0, 120), terms) + '</span>' : '';
          a.innerHTML = '<span class="search-result-title">' + highlight(item.title, terms) + '</span>' + sectionHtml + snippetHtml;
          a.addEventListener("mousedown", function(e) {
            e.preventDefault();
            window.location.href = item.href;
          });
          dropdown.appendChild(a);
        });
      }
      dropdown.classList.add("open");
    }

    function hideDropdown() {
      dropdown.classList.remove("open");
      focusedIdx = -1;
      dropdown.querySelectorAll(".search-result").forEach(function(el) {
        el.classList.remove("focused");
      });
    }

    function updateFocus() {
      var els = dropdown.querySelectorAll(".search-result");
      els.forEach(function(el, i) { el.classList.toggle("focused", i === focusedIdx); });
      if (focusedIdx >= 0 && els[focusedIdx]) els[focusedIdx].scrollIntoView({ block: "nearest" });
    }

    function runSearch() {
      var q = input.value.trim();
      if (!q) { hideDropdown(); return; }
      var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
      var results = query(q);
      renderResults(results, terms);
    }

    input.addEventListener("input", function() { suppressDropdown = false; runSearch(); });
    input.addEventListener("focus", function() { if (!suppressDropdown && input.value.trim()) runSearch(); });
    input.addEventListener("blur", function() { setTimeout(hideDropdown, 150); });

    input.addEventListener("keydown", function(e) {
      var els = dropdown.querySelectorAll(".search-result");
      if (e.key === "Escape") {
        suppressDropdown = true; hideDropdown(); input.blur(); return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault(); suppressDropdown = false;
        if (!dropdown.classList.contains("open") && input.value.trim()) runSearch();
        if (els.length) { focusedIdx = Math.min(focusedIdx + 1, els.length - 1); updateFocus(); }
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (els.length) { focusedIdx = Math.max(focusedIdx - 1, 0); updateFocus(); }
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        var target = focusedIdx >= 0 ? currentResults[focusedIdx] : currentResults[0];
        if (target) window.location.href = target.href;
        return;
      }
    });

    document.addEventListener("click", function(e) { if (!wrapper.contains(e.target)) hideDropdown(); });
  }

  /* ══════════════════════════════════════════════════════
     PUBLIC INIT
     Called by each page with its section + slug.
  ══════════════════════════════════════════════════════ */
  window.KSDoc = {
    init(sectionKey, activeSlug) {
      document.addEventListener("DOMContentLoaded", () => {
        buildSidebar(sectionKey, activeSlug);
        buildPageNav(sectionKey, activeSlug);
        setHeaderActive(sectionKey);
        initMobileToggle();
        highlightAll();
        initKeyNav();
        initSearch();
      });
    },
    initSearch,
    highlightAll,
  };

})();
