const addDOM = document.querySelector('.add');
const notesDOM = document.querySelector('.notes');
const noteDOM = document.getElementsByClassName('note');

addDOM.addEventListener('click', () => {
    notesDOM.insertAdjacentHTML('afterbegin', `
        <div class="note">
            <textarea name="note" id="note" placeholder="Empty note"></textarea>
            <div class="remove">
                <button class="confirm" type="submit">Confirm</button>
                <buttom class="cancel" type="submit">Cancel</button>
            </div>
        </div>
        `);

    for (const note of noteDOM) {
        note.addEventListener('dblclick', () => {
            note.classList.add('visible');
        })
    }
});

