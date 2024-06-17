export const navScroll = () => {
    window.addEventListener('scroll', function () {
        var top = this.scrollY;
        if (top > 100) {
            this.document.querySelector('nav')?.classList.add('bg-slate-950');
        } else {
            this.document.querySelector('nav')?.classList.remove('bg-slate-950');
        }
    })
}