//=======================================================================
// RETRIEVING NOTES FROM LOCAL STORAGE
const getNotes = function(){    
    const notes = JSON.parse(localStorage.getItem('notes')) ;    
    if(notes){
        return notes ;
    }
    return [] ;    
}

//=======================================================================
// FILTERING NOTES ON THE SPECIFIED CRITERIA AND SHOWING THEM ON TO THE SCREEN
const filterNotes = function(notes, filter){
    sortNotes(notes, filter) ;
    return notes.filter(function(note){
        const searchText = filter.searchText.toLowerCase() ;
        const title = note.title.toLowerCase() ;
        const body = note.body.toLowerCase() ;
        return title.includes(searchText) || body.includes(searchText)
    })
}

//=======================================================================
// RENDERING ALL THE NOTES ON THE SCREEN
const renderNotes = function(notes, filter){    
    const notesUL = document.querySelector('#notes-ul') ;
    notesUL.textContent = '' ;        
    if(notes.length > 0){
        const filteredNotes = filterNotes(notes, filter) ;
        if(filteredNotes.length > 0){
            filteredNotes.forEach(function(note){        
                const noteElem = generateNoteHTML(note) ;
                notesUL.appendChild(noteElem) ;
            })
        } else{
            notesUL.textContent = `Search Query didn't match !!!` ;
        }         
    } else{
        notesUL.textContent = 'Start using this app by adding some important notes' ;        
    }   
}

//=======================================================================
// DELETING SPECIFIC NOTE
const removeNote = function(notes, id){
    const noteIndex = notes.findIndex(function(note){
        return note.id === id
    }) ;
    if(noteIndex > -1){
        notes.splice(noteIndex, 1) ;    
    }    
}

//=======================================================================
// SAVE NOTES TO THE LOCAL STORAGE
const saveNotes = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes)) ;
}

//=======================================================================
// FIND SPECIFIC NOTE BASED ON ITS ID
const findNote = function(notes, id){
    return notes.find(function(note){
        return note.id === id
    }) ;
}

//=======================================================================
// UPDATE SPECIFIC NOTE 
const updateNote = function(notes, note){
    const noteIndex = notes.findIndex(function(note){
        return note.id === id
    }) ;
    if(noteIndex > -1){
        const noteId = notes[noteIndex].id ;
        note.id = noteId ;
        notes[noteIndex] = note ;    
    }
}