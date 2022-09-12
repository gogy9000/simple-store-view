import {initializeApp} from "firebase/app";
import {getFirestore, setDoc, collection, getDocs, doc, getDoc, query, where, onSnapshot} from "firebase/firestore";
import {SelectedProductType} from "../BLL/Content/types";



const firebaseConfig = {
    apiKey: "AIzaSyCBwGgJXl4URpp0aIvA7nNGnslra9PxW7U",
    authDomain: "simplestore-3df57.firebaseapp.com",
    projectId: "simplestore-3df57",
    storageBucket: "simplestore-3df57.appspot.com",
    messagingSenderId: "583188753816",
    appId: "1:583188753816:web:050bb6ab8cfcf803fc4fed",
    measurementId: "G-NFB7NTTHC9"
};

const appFireBase = initializeApp(firebaseConfig);

export const db = getFirestore(appFireBase)

export type ContentItemType={
    image:string
    price:number
    title:string
    id:string
}

export const getStaff = async () => {
    const docSnap = await getDoc<{ [content: string]: ContentItemType[] }>(doc(db, "storeContent", "content"));
    if (docSnap.exists()) {
      return {resultCode:0, data:docSnap.data()}
    } else {
        return {resultCode:1, data:null}
    }

}
export const getShoppingCart = async () => {
    const docSnap = await getDoc<{ [placeAnOrder: string]: ContentItemType[] }>(doc(db, "storeContent", "placeAnOrder"));
    if (docSnap.exists()) {
        return {resultCode:0, data:docSnap.data()}
    } else {
        return {resultCode:1, data:null}
    }

}
export const placeAnOrder =async (payload: {shoppingCart: SelectedProductType[] }) => {
  await setDoc(doc(db,"storeContent","placeAnOrder"),payload)
  .catch((e)=>{
      console.log(e)
  })
}

export const getContentAndShoppingCart = async () => {
    const q = query(collection(db, "storeContent"));
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
         console.log(doc.data())
    });

}

// export const onSubScribeDoc = () => {
//     const unSubscribe = onSnapshot(doc(db, "cities", "SF"), {includeMetadataChanges: true}, (doc) => {
//         const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
//         console.log(source, " data: ", doc.data());
//         console.log("Current data: ", doc.data());
//     },(error) => {console.log(error)});
//     unSubscribe()
// }
// export const onSubScribeAllDoc = () => {
//     const q = query(collection(db, "storeContent"));
//     const unSubscribe = onSnapshot(q, (querySnapshot) => {
//         const product: any = [];
//         querySnapshot.forEach((doc) => {
//             product.push(doc.data().name);
//         });
//         console.log("Current cities in CA: ", product.join(", "));
//     },(error) => {console.log(error)});
//     unSubscribe()
// }
// export const SubscribeOnChanges = () => {
//     const q = query(collection(db, "storeContent"))
//     const unSubscribe = onSnapshot(q, (snapshot) => {
//             snapshot.docChanges().forEach((change) => {
//                 if (change.type === "added") {
//                     console.log("New city: ", change.doc.data());
//                 }
//                 if (change.type === "modified") {
//                     console.log("Modified city: ", change.doc.data());
//                 }
//                 if (change.type === "removed") {
//                     console.log("Removed city: ", change.doc.data());
//                 }
//             });
//         }, (error) => {console.log(error)}
//     );
//     unSubscribe()
// }


