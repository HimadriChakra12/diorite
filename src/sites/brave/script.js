define BRAVE {
    url("*://search.brave.com/*")

    loop("RESULT", ".title.search-snippet-title.line-clamp-1.svelte-14r20fy")
    focus(j, goto(next, "RESULT"))
    focus(k, goto(prev, "RESULT"))
    click(enter, selected("RESULT"))

    focus(gi, "input#searchbox")
    gotourl(gu, "https://github.com/HimadriChakra12/diorite")

    navigate(H, prev)
    navigate(L, next)

    action(x, close)
    action(r, reload)

    scroll(gg, up, full)
    scroll(G, down, 100)
}
