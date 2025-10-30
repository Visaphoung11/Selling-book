import { Request, Response } from "express";
import { Author } from "@/model/author";

export const createAuthor = async (req: Request, res: Response) => {
    try {
      // This is the request body to test in postman
      const { name, phone, dob } = req.body;
      // This is the condition for author if they dont put thier name it will show Name is required
      if (!name) {
        res.status(400).json({ success: false, message: "Name is required" });
        return;
      }

      const existingAuthor = await Author.findOne({
        $or: [{ name }, ...(phone ? [{ phone }] : [])],
      });

      if (existingAuthor) {
        const field = existingAuthor.name === name ? "Name" : "Phone";
        res
          .status(409)
          .json({ success: false, message: `${field} already exists` });
        return;
      }
      // This is the funtion to find existing author if they create with the same name and phone, it will throw ${field} already exists
      const newAuthor = await Author.create({ name, phone, dob });
      res.status(201).json({ success: true, data: newAuthor });
    } catch (error: any) {
        console.error(error);
        if (error.code === 11000) {
          // 11000 This means that a client attempted to insert or update a document with a value for a unique field that already exists in the collection.
          const field = Object.keys(error.keyPattern)[0];
          res
            .status(409)
            .json({ success: false, message: `${field} already exists` });
        } else {
            res.status(500).json({ success: false, message: "Server Error" });
        }
    }
};

export const getAuthors = async (req: Request, res: Response) => {
    try {
        const authors = await Author.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: authors });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}; //  we use sorts the documents in descending order (-1) based on their 
// createdAt field. This means the most recently created authors will be first. 


export const getAuthorById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // this mean we query param by user author id
      const author = await Author.findById(id);

      if (!author) {
        res.status(404).json({ success: false, message: "Author not found" });
        return;
      } // This is the condition for getAuthor if they not find author by id, it will throw Author not found

      res.status(200).json({ success: true, data: author });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}; // All funtions used try and catch.

export const updateAuthor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // This is the condition for updatingAuthor by id param as well 
        // but it has request body
        const { name, phone, dob } = req.body;

        const author = await Author.findById(id);
        if (!author) {
            res.status(404).json({ success: false, message: "Author not found" });
            return;
        }

        if (name && name !== author.name) {
            const existingName = await Author.findOne({ name });
            if (existingName) {
                res.status(409).json({ success: false, message: "Name already exists" });
                return;
            }
        }

        if (phone && phone !== author.phone) {
            const existingPhone = await Author.findOne({ phone });
            if (existingPhone) {
                res.status(409).json({ success: false, message: "Phone already exists" });
                return;
            }
        } // They are the condition setting up for name and phone that already existed.

        const updatedAuthor = await Author.findByIdAndUpdate(
            id,
            { name, phone, dob },
            { new: true, runValidators: true }
        );

        res.status(200).json({ success: true, data: updatedAuthor });
    } catch (error: any) {
        console.error(error);
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            res.status(409).json({ success: false, message: `${field} already exists` });
        } else {
            res.status(500).json({ success: false, message: "Server Error" });
        }
    }
};

export const deleteAuthor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const author = await Author.findByIdAndDelete(id);

        if (!author) {
            res.status(404).json({ success: false, message: "Author not found" });
            return;
        }

        res.status(200).json({ success: true, message: "Author deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}; // This is the funtion for deleting author by param id 
// as well also use try catch to query data and catch error.
