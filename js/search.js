const evolutionoriginitems = document.querySelectorAll('.movie')
document.querySelector('.search').addEventListener('input', filterList)

function filterList() {
    const searchInput = document.querySelector('.search')
    const filter = searchInput.value.toLowerCase()
    const evolutionoriginitems = document.querySelectorAll('.movie')

        evolutionoriginitems.forEach((item) => {
        let text = item.textContent;
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            item.hidden = false;
        }
        else {
            item.hidden = true;
        }
    });
}