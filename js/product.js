const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// const a = $('.the-product__desc')
const tabs = $$('.the-product__desc-tab')
const panes = $$('.desc-tab__detail-tab-item')

const tabActive = $('.the-product__desc-tab.active')
const line = $('.the-product__desc-more .line')

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function() {
        $(".the-product__desc-tab.active").classList.remove("active")
        $(".desc-tab__detail-tab-item.active").classList.remove("active")

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
        
        this.classList.add("active")
        pane.classList.add("active")
    }
})