import Note from "../models/Note.js";

export const getAllNotes = async(req,res) => {
    try {

        const Notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(Notes);

    } catch (error) {

        console.error("Error in getAllNotes Controller.", error);
        res.status(500).json({message: "Internal server error!!!"});

    }
}

export const createNote = async (req,res) => {
    try {

        const {title,content} = req.body;
        const newNote = new Note({title,content});

        await newNote.save();
        res.status(201).json({message: "Note created successfully."});

    } catch (error) {
        
        console.error("Error in createNote Controller.",error);
        res.status(500).json({message: "Internal server error!!!"});

    }
}

export const updateNote = async (req,res) => {
    try {

        const {title,content} = req.body;
        const id = req.params.id;
        const updatedNote = await Note.findByIdAndUpdate(id,{title,content},{new: true});

        if(!updatedNote) {
           return res.status(404).json({message: "Note Not found!!!"});
        }

        res.status(200).json({message: "Note updated successfully."});
        
    } catch (error) {

        console.error("Error in updateNote Controller.",error);
        res.status(500).json({message: "Internal server error!!!"});

    }
}

export const deleteNote = async (req,res) => {
    try {

        const id = req.params.id;
        const deletedNote = await Note.findByIdAndDelete(id);

        if(!deletedNote) {
            return res.status(404).json({message: "Note not found!!!"});
        }

        res.status(200).json({message: "Note deleted successfully."});
        
    } catch (error) {

        console.error("Error in updateNote Controller.",error);
        res.status(500).json({message: "Internal server error!!!"});
        
    }
}

export const getNoteById = async (req,res) => {
    try {

        const id = req.params.id;
        const note = await Note.findById(id);

        if(!note) {
            return res.status(404).json({message: "Note note found!!!"});
        }

        res.status(200).json(note);
        
    } catch (error) {
        
        console.error("Error in updateNote Controller.",error);
        res.status(500).json({message: "Internal server error!!!"});

    }   
}