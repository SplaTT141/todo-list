const addDOM = document.querySelector('.add');
const notesDOM = document.querySelector('.notes')

addDOM.addEventListener('click', () => {
    notesDOM.insertAdjacentHTML('afterbegin', `<div class="note"><textarea name="note" id="note" placeholder="Empty note"></textarea></div>`);
});