const addDOM = document.querySelector('.add');
const notesDOM = document.querySelector('.notes');
const notesCountDOM = document.querySelector('.note-counter');

addDOM.addEventListener('click', () => {
    notesDOM.insertAdjacentHTML('afterbegin', `
        <div class="note">
            <textarea name="note" placeholder="Empty note"></textarea>
            <div class="remove">
                <span>Are you sure?</span>
                <button class="confirm" type="button">Confirm</button>
                <button class="cancel" type="button">Cancel</button>
            </div>
        </div>
        `);

    notesCountDOM.textContent = notesDOM.children.length
});


notesDOM.addEventListener('dblclick', e => {
    const note = e.target.closest('.note');
    const remove = note.querySelector('.remove')

    if (note) {
        remove.classList.add('enable');

        const confirm = remove.querySelector('.confirm');
        const cancel = remove.querySelector('.cancel');

        confirm.addEventListener('click', () => {
            note.remove();
            notesCountDOM.textContent = notesDOM.children.length;
        })

        cancel.addEventListener('click', () => {
            remove.classList.remove('enable');
        })
    }
})