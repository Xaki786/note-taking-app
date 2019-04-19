//=======================================================================
//  MAIN APPLICATION
let notes = [] ;
const filter = {
    searchText: ''
}
notes = getNotes() ;
renderNotes(notes, filter);
window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        notes = getNotes();
        renderNotes(notes, filter) ;
    }    
})
