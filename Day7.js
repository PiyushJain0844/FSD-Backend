//Program 2 CRUD operation in node js
import fs from "fs/promises"
const fileName="student.txt";
async function createFile() {
    try{
    await fs.writeFile(
        fileName,
        "Name:Satwik Teotia\nEmail:abc@gmmail.com,Btech,CSE"
    );
    console.log("file created..");
    
    }
    catch(error){
    console.log("ERROR:....");
    
    }
    
}then()