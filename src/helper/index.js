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


export const truncateText = (str = "", limit) => {
    if (str.length < limit) {
        return str;
    } else {
        return str.slice(0, limit) + "...";
    }
}


export const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}