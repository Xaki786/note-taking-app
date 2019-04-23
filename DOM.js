//=======================================================================
// GENERATING HTML FOR ALL THE NOTES 
const generateNoteHTML = (note) => {
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

    //  APPENDING CHILDS TO THE MAIN ELEMENT OF NOTE DOM
    noteElem.appendChild(noteTitleDiv) ;    
    noteElem.appendChild(noteTimeElem)
    noteElem.appendChild(noteRemoveDiv) ;
    return noteElem ;
}
//=======================================================================
//  CREATE DOM FOR NOTE TIME ELEMENT TO SHOW HOW MUCH TIME BEFORE NOTE
//  WAS CREATED
const noteTimeDOM = (note) => {
    const timeElem = document.createElement('small') ;
    timeElem.classList.add('mr-3');
    timeElem.classList.add('text-muted');
    if(note.updatedAt > 0){
        let time = moment.unix(note.updatedAt).fromNow();        
        time = time.substring(1) ;
        timeElem.textContent = `updated ${time}` ;
        return timeElem ;
    }    
    const time = moment.unix(note.createdAt).fromNow();        
    timeElem.textContent = `created ${time}` ;
    return timeElem ;
}

//=======================================================================
//  CREATE DOM FOR NOTE TITLE LINK TO MOVE TO THE NOTE EDITING PAGE
const noteLinkDOM = (note) => {
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
const noteRemoveButtonDOM = (notes, note) => {
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
