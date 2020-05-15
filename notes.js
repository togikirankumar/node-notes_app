const fs=require('fs')
const chalk=require('chalk')


const addNotes=function(title,body)
{
    const notes=loadNotes()
   const duplicatenotes=notes.filter((note) => note.title==title)
   //const duplicatenotes=notes.find((note) => note.title==title) //it will find the first occurence of title and return  undefined is no match found .it will stop there wont check till the n-1
    // const duplicatenotes=notes.filter(function(note){
    //     return note.title===title
    // })

   debugger

    if(duplicatenotes.length===0)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    }else{
        console.log(chalk.bgRed('Title already taken'))
    }


}

///function to remove note
const removeNote=function(title){

        const notes=loadNotes()
        const notesToKeep=notes.filter(function(note){
            return note.title!==title
        })
        const check=notes.filter(function(note){
            return note.title===title
        })
        if(check.length===1)
        {
            saveNotes(notesToKeep)
            console.log(chalk.bgGreen('Note Removed!'))
        }else{
            console.log(chalk.bgRed('No Note Found!'))
        }



}


//List of notes
const listNotes=function(){

    console.log(chalk.bgGreen('Your Notes'))
    const notes=loadNotes()
    notes.filter(function(note){
        console.log(note.title)
    })
}


//Read Notes
const readNotes=function(title){

    const notes=loadNotes()
    const find=notes.filter((note)=>note.title===title)

    if(find.length===1)
    {
        console.log(chalk.bgYellow(title))
        notes.filter((note)=>{
            if(note.title===title)
            {
                console.log(note.body)
            }
        })
    }else{
        console.log(chalk.bgRed('Title not found'))
    }


}


const saveNotes=function(notes){

    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=function(){

    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
        }
    catch(e){
        return []
    }

}
module.exports={
    addNotes:addNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}
