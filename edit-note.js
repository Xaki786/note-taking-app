const searchString = location.search; 
const searchID = searchString.substring(1) ;
let notes = getNotes() ;
let note = findNote(notes, searchID) ;
if(note === undefined){
    location.assign('/index.html') ;
}
const noteTitleDOM = document.querySelector('#note-title') ;
const noteBodyDOM = document.querySelector('#note-body') ;
noteTitleDOM.value = note.title ;
noteBodyDOM.value = note.body ;

noteTitleDOM.addEventListener('input', e => {
    note.title = e.target.value; 
    note.updatedAt = moment().unix();
    lastEditChange(note.updatedAt)
    saveNotes(notes) ;    
});

noteBodyDOM.addEventListener('input', e => {
    note.body = e.target.value;     
    note.updatedAt = moment().unix();
    lastEditChange(note.updatedAt)
    saveNotes(notes) ;      
});

window.addEventListener('storage', e => {
    if(e.key === 'notes'){
        notes = getNotes();
        note = findNote(notes, searchID) ;
        if(note === undefined){
            location.assign('/index.html') ;
        }        
        noteTitleDOM.value = note.title ;
        noteBodyDOM.value = note.body ;
        lastEditChange(note.updatedAt)
    }    
})

const lastEditChange = time => {
    const timeString = `Last edited ${moment.unix(time).fromNow().substring(1)}`;
    const lastEdited = document.querySelector('#last-edited') ;
    lastEdited.textContent = timeString ;
}
if(note.updatedAt > 0){
    lastEditChange(note.updatedAt) ;    
}