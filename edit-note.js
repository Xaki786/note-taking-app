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

noteTitleDOM.addEventListener('input', function(e){
    note.title = e.target.value; 
    saveNotes(notes) ;    
});

noteBodyDOM.addEventListener('input', function(e){
    note.body = e.target.value;     
    saveNotes(notes) ;      
});

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        notes = getNotes();
        note = findNote(notes, searchID) ;
        if(note === undefined){
            location.assign('/index.html') ;
        }        
        noteTitleDOM.value = note.title ;
        noteBodyDOM.value = note.body ;
    }    
})

window.addEventListener('click', () => console.log('Hello'))
