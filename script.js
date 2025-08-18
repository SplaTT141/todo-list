const addDOM = document.querySelector('.add');
const notesDOM = document.querySelector('.notes')

addDOM.addEventListener('click', () => {
    // noteDOM.classList.add('active');
    // console.log(notesDOM);
    notesDOM.insertAdjacentHTML('afterbegin', `<div class="note"><textarea name="note" id="note" placeholder="Empty note"></textarea></div>`);
});