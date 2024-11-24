- go to firebase console
  - add new project
    - create new project
- create a firestore database in firebase
  - choose test mode (when your application is production ready movie it to production mode)
- install firebase in react app

```
npm install firebase

```

- Set Up Firebase in Your Web App:

  - Click on the gear icon (project settings) in the Firebase Console.
  - Under the "Your apps" section, click on the web icon (</>) to add a new web app.
  - Follow the instructions to register your app.
  - Copy the Firebase config object that is provided.

  ```
  var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
  };
  ```

## collections and doc

- how to create collection
  ```
    firestore.collection("nameofcollection");
  ```
- how to get particular doc of collection
  ```
    firestore.collection("nameofcollection").doc("fjsvkajf1213");
  ```
- how to get subcollection

  ```
    firestore.collection("nameofcollection").doc("fjsvkajf1213").collection("subcollectionname");
  ```

  - note it chain multiple times ex - collection.doc.collection.doc.collection.doc

- OR

- You can use like

```
  firestore.collection("nameofcollection/fjsvkajf1213/subcollectionname")

  or

  firestore.doc("nameofcollection/fjsvkajf1213/subcollectionname/jksadvasvk333")
```

## ordering or limit or query

### orderBy

```
firestore.doc("nameofcollection").orderBy('createdAt","desc");
```

### limit

```
firestore.doc("nameofcollection").limit(1);
```

### query

```
firestore.doc("nameofcollection").where('col','condition',"tocompare");

firestore.doc("post").where('likes','>=',10);
```

### additional

here we are refrence to the database not actual data

```
const cartRef = collection(db, "cart");
```

we can get actual data with firestore methods

```
const querySnapshot = await getDocs(cartRef);
```

it return querysnapshot which is a promise

- can get all the data or iterate through by inbuild forEach
```
querySnapshot.forEach(doc=>//perform some operation)
```
