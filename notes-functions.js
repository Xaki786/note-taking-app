//=======================================================================
// GENERATING HTML FOR ALL THE NOTES 
const generateNoteHTML = function(note){
    //  NOTE ELEMENT FOR REPRESENTATION OF A COMPLETE NOTE    
    const noteElem = document.createElement('li') ;
    noteElem.classList.add('list-group-item') ;
    noteElem.classList.add('d-flex') ;

    //  DIV FOR REPRESENTATION OF NOTE TITLE
    //  LINK IS ALSO ASSOCIATED TO MOVE TO THE EDIT NOTE TITLE PAGE
    const noteTitleDiv = document.createElement('div') ;
    noteTitleDiv.classList.add('mr-auto') ;
    const noteLink = noteLinkDOM(note) ;
    noteTitleDiv.appendChild(noteLink) ;   
    
    //  DIV FOR NOTE TIME
    const noteTimeElem = noteTimeDOM(note) ;

    //  DIV FOR REMOVE BUTTON
    const noteRemoveDiv = document.createElement('div') ;
    const noteRemoveButton = noteRemoveButtonDOM(notes, note) ;
    noteRemoveDiv.appendChild(noteRemoveButton) ;
    noteElem.appendChild(noteTitleDiv) ;    
    noteElem.appendChild(noteTimeElem)
    noteElem.appendChild(noteRemoveDiv) ;
    return noteElem ;
}
//=======================================================================
//  CREATE DOM FOR NOTE TIME ELEMENT TO SHOW HOW MUCH TIME BEFORE NOTE
//  WAS CREATED
const noteTimeDOM = function(note){
    const time = moment.unix(note.createdAt).fromNow();
    const timeDiv = document.createElement('small') ;
    timeDiv.classList.add('mr-3');
    timeDiv.classList.add('text-muted');
    timeDiv.textContent = `created ${time}` ;
    return timeDiv ;
}

//=======================================================================
//  CREATE DOM FOR NOTE TITLE LINK TO MOVE TO THE NOTE EDITING PAGE
const noteLinkDOM = function(note){
    const noteTitleSpan = document.createElement('span') ;    
    const noteLink = document.createElement('a') ;
    // noteLink.href = '' ;
    // noteLink.href = window.location.href + 'note-edit.html?' + note.id ;    
    noteLink.href = '/note-edit.html?' + note.id ;    
    if(note.title.length > 0){
        noteTitleSpan.textContent = note.title ;    
    }else{
        noteTitleSpan.textContent = 'Unnamed Note' ;
    }

    noteLink.appendChild(noteTitleSpan) ;
    return noteLink ;
}
//=======================================================================
//  CREATE DOM FOR NOTE RTEMOVE BUTTON
const noteRemoveButtonDOM = function(notes, note){
    const noteRemoveButton = document.createElement('button') ;
    noteRemoveButton.classList.add('btn') ;
    noteRemoveButton.classList.add('btn-danger') ;
    noteRemoveButton.addEventListener('click', function(e){                
        removeNote(notes, note.id) ;
        saveNotes(notes) ;
        renderNotes(notes, filter) ;
    })
    noteRemoveButton.textContent = 'X' ;
    return noteRemoveButton ;
}

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