import { useState , useEffect } from "react";

import { projectStorage , projectFirestore ,timestamp} from "../firebase/config";    // import the storage from the config file

const useStorage = (file) => { 
    const [progress , setProgress] = useState(0);    // set the progress to 0
    const [error ,setError] = useState(null);        // set the error to null
    const [url , setUrl] =useState(null);            // set the url to null

    useEffect( () => { // this is a hook that runs everytime the file changes
        // references
        const storageRef = projectStorage.ref(file.name);    // create a reference to the file in the storage
        const collectionRef = projectFirestore.collection('images');  // create a reference to the collection in the firestore
   storageRef.put(file).on('state_changed' , (snap) => {
     let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;   // calculate the percentage of the upload`
     setProgress(percentage);

   },(err) =>  {
         setError(err);
   }, async () => {
         const url = await storageRef.getDownloadURL();   // get the url of the file
         const createdAt = timestamp();                  // get the timestamp of the file
       collectionRef.add({url , createdAt })
         setUrl(url);
    
   })  
         

    } ,[file])

    return {progress , url , error}
 }    // this is a custom hook

 export default useStorage;