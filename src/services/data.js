import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../helpers/firebase";

const collections = {
  interior_design: "interiorProjects"
};

export const getProjectsList = async () => {
  const query = await getDocs(collection(db, collections["interior_design"]));
  //console.log(query.docs.map( doc => ({id: doc.id, data: doc.data()}) ));
  return query.docs.map( doc => ({id: doc.id, data: doc.data()}) )
};

