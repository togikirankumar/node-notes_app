const validator=require("validator")
const notes=require("./notes.js")
const chalk=require("chalk")
const yargs=require("yargs")

//Customize yargs version
yargs.version("1.1.0")

//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Body of Note",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){

        notes.addNotes(argv.title,argv.body)

    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Remove note',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){

        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command:'list',
    describe:'List all notes',
    handler:function(){
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builer:{
        title:{
            describe:'Read the note',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)
