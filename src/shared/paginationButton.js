
export const button = (type, page) => {
    const button = `
    <button class="btn-inline results__btn--${type}" data-pagenum = ${type === 'next' ? page + 1 : page - 1}>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${type === 'next' ? 'right' : 'left'}"></use>
    </svg>
    <span>Page${type === 'next' ? page + 1 : page - 1}</span>
</button> `

    return button
}