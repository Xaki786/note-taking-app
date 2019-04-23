//=======================================================================
// SORT NOTES BY LAST EDITED
const sortByEdited = function(notes, filter){
    notes.sort(function(a,b){
        if(a.updatedAt < b.updatedAt){
            return 1 ;
        }else if(a.updatedAt > b.updatedAt){
            return -1
        }else{
            return 0 ;
        }
    })
}
//=======================================================================
// SORT NOTES BY LAST CREATED
const sortByCreated = function(notes, filter){
    notes.sort(function(a,b){
        if(a.createdAt < b.createdAt){
            return 1 ;
        }else if(a.createdAt > b.createdAt){
            return -1
        }else{
            return 0 ;
        }
    }) ;
}
//=======================================================================
// SORT NOTES BY ALPHABETICALLY
const sortByAlphabet = function(notes, filter){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() > b.title.toLowerCase()){
            return 1 ;
        }else if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else{
            return 0 ;
        }
    })
}
//=======================================================================
// SORT NOTES
const sortNotes = function(notes, filter){    
    switch (filter.sortBy) {        
        case 'byCreated':
            sortByCreated(notes, filter)
        break;

        case 'alphabetically':
            sortByAlphabet(notes, filter)
        break;
    
        default:
            sortByEdited(notes, filter)
        break;
    }
}