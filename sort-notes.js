//=======================================================================
// SORT NOTES BY LAST EDITED
const sortByEdited = (notes, filter) => {
    notes.sort((a,b) => {
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
const sortByCreated = (notes, filter) => {
    notes.sort((a,b) => {
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
const sortByAlphabet = (notes, filter) => {
    notes.sort((a,b) => {
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
const sortNotes = (notes, filter) => {    
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