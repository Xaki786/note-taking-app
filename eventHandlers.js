//=======================================================================
//  FILTERING NOTES BY USING INPUT ELEMENT
document.querySelector('#notes-filter').addEventListener('input', function(e){    
    filter.searchText = e.target.value ;
    renderNotes(notes, filter) ;
});

//=======================================================================
//  ADDING NEW NOTE THROUGH THE FORM
document.querySelector('#create-note').addEventListener('click', function(e){
    const newNote = {
        id: uuidv1(),
        title: '',
        body: '',
        createdAt: moment().unix(),
        updatedAt: 0
    } ;            
    notes.push(newNote) ;
    saveNotes(notes) ;
    // const currentLocation = window.location.href ;
    // const newLocation = `${currentLocation}note-edit.html?${newNote.id}`        
    const newLocation = `/note-edit.html?${newNote.id}`        
    // window.location = newLocation ;
    location.assign(newLocation) ;    
}) ;

//=======================================================================
//  
document.querySelector('#filter-by').addEventListener('change', function(e){
    filter.sortBy = e.target.value ;    
    renderNotes(notes, filter);
})