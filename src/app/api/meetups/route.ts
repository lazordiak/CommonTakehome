import admin from "firebase-admin";

if (!admin.apps.length) {
  //If this weren't a takehome I WOULDN'T store this here!!!! Just to be clear!

  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail:
        "firebase-adminsdk-q8y83@common-engineering-takehome.iam.gserviceaccount.com",
      projectId: "common-engineering-takehome",
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQChw5wuX31aQdSu\nk3xTS7+NsL2Afbl7Lav9qUEMrIP4IvmsLy3kE2ie7jdps36japMgnCnd9hUcp5jz\nR4xALQ4rZ8pzhG8HaKizrA8KFzDn5b/PBv2TC7uSiBa3bvb0TBO5Q5+eIg9v9aTO\nyYIWxIp2pdN4IBHWYA6ye61tnS1PR3DuB/cIrGvbjYOVP8NojppaREhb9Dq+fUJT\nJq2sGyvueW7+LFq4ErDLXbJdH7qrkB2j6Ghaf8kSO29Up7BKLXqGo5QGavJ9k91m\nIhlK2Ol+Vln0SQzFD0HjvQIB6lhOTfe+KFJvODcsZFn3nEbo8Vfh5Lup6i0VGFiP\ng6PQxXhTAgMBAAECggEAETocXIaSz5U0fyWkbIJ5SIT1SW/E3Fdaz6LCE1rJRcMD\nxSXTxKGZ11hrJ6M+mKH1lS12+p+wU+LiqQCKRnNbOkgis/al6atoUT9rl+7W/dCR\nLWJYiDEMWBM3csWAdeJ8NJNSYQF46hAbmGIMATy2ZOL4CFJHVAXaytXc/FAWzoW+\nXxL9jxbTGPuuMgPJjrDMFCtURWML/o5FCDFIXdkxUmdeS28mVQyyHXanVXGMYic+\n4tThTyIxQrJ/rdzsu/kXTmCj+W7goADfVM4AzS/AmwOnHO0ALqVjyV27XEXQKo1+\nahkI0hRBHtoIRf9ugWDo8PAF13LBex0UVIcaE7REAQKBgQDb5ua/WNSsQFRsdGPY\nuTGFVdSdHZvfgG8p/UMCuGTWIHipifAEaNoljY5OcddC4GFomOF5XLR+uSZasDTE\nSor+LNgNE0fk4KGAxGZhPg1ohgDfHKXklLsQrE48TyWORpEa+CaxN4JEeVifTVnr\nl0p+ZJyYIVgVs0vBFxkkjiSfAQKBgQC8UYolr7sbYtR4qJ+hhzLSw0QNhNgZD/OB\nUgOhyhvxqM8U0vBL4pY0paJqitT7aVWlu4nZvbh+9oVCA590HuqsZW/KXUf/75ej\n/3ZPl2ZGf7i0wCh72yAXV4IpUf0vve0Y8XSTJALPJyGr2GnBuTU0PZhKxpYd0WhB\noTmFDPDrUwKBgC8ff/spMgnnjy/ekTb0GKSWDAXPPoPapfe9igqfMRyhwLm0EXcg\ncP7zIre0tYhjRPyBJnA3aYZubsWoVOZrgvWM7o9+vj1R1coeTEIyZfUsIiutm+8r\n4Bpmki1iWI3wmU/KNaBsYMIDrvYUQVy3AwOq09PV8WZVEbrDFGQ9AaQBAoGBAJC4\nKO4lSikVnirLi0Fa4NfPb7Dj8h3wgDVVjaz74NWp4Noj8L6gdsYms9YksuAyZrti\nj+FhRzNqx6Wfmx5l0/qASZS+cuJggaxqWcV4mAR9irh9I59rGhJWEZUniObzkg2l\nIO0is3X2oI2rVjql1hk7bJmqWxq3HuOwvr9c3pg5AoGAXlsHBPoAZyAGZmPu9TPJ\nGfua3559JeqUNOqRfFeJK3eUR1tOgNmELlbkg9355yhhlTq6rZs1MSyqmnuPjzFS\neVTPC8nKBM+6mERWV5BLbeHxu3fXLleimt9kVPLq7GrMJjFLU0jHd2HWiTTnfn8y\nZHVPZk5AHOx7liPhlqpYzGs=\n-----END PRIVATE KEY-----\n",
    }),
  });
}

const db = admin.firestore();

export async function GET(req: Request, res: Response) {
  const snapshot = await db.collection("meetups").get();
  const data = snapshot.docs.map((doc) => doc.data());
  return Response.json({ data: data });
}
