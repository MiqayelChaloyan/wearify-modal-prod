import admin from 'firebase-admin';

const fileNamePref = 'closetScreenshot';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://w2wprod-f2fd0-default-rtdb.firebaseio.com",
    storageBucket: "gs://w2wprod-f2fd0.appspot.com"
});



const db = admin.database();
const dbRef = db.ref("new/");

const bucket = admin.storage().bucket();

const destination = `WEB/${id}/${fileNamePref}_${id}.png`;

// Upload the file
await bucket.upload(filePath, {
    destination: destination,
    metadata: {
        contentType: 'image/png'
    }
});

const usersRef = dbRef.child(id);
usersRef.set({
    ...item,
    status: 'pending',
});