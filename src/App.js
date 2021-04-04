import { GoogleSpreadsheet } from "google-spreadsheet";

function App() {
  const setup = async () => {
    const doc = new GoogleSpreadsheet(
      "1LNwSvduwjKEibHKIMaP6D_nySSfQbHT8mXd855q4ip4"
    );
    await doc.useServiceAccountAuth({
      client_email: "pretty-sheets@propane-tree-309009.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCafFZwa97g0tOH\n5gXkjqoWlCXsRCQt1FWKqsD4Qlsy8ahBd/01H2Zo/S92uWfo2HoSiAIFHkrRD3Gn\nAxgDkfPG/cSCnBKMeMbD+0uxkrqBHts5o/c9LEstGiP1yYvN3AJ7eHjhVF7SdhI8\nKmKd4J/mr0u55Q09V530hGU6GN6fBnKgjzCPjbNlH25lVzhzq0kR6qR5wyM2nPCt\n6lG1Ma4KSRpzM+GeabfaOC2t1Hht37CfldfQio7T/NKh/8LcxbQHu42/5+EcZWRH\nQhE9V9uvRSlh1Ej+L3j4DOoefkhNVVtPjm1IXoS0kp+D56qGPhIAWxqgD/htTWNH\neR0jtmXPAgMBAAECggEAFvPMP+228n5AUVuamoebu7kNHVpOacS3ZN/Txc7OD/aZ\nggiaxS7CH20mhSQszQqEsIYmjq4efYsm3qJ2CenAZ1tCvAkGNHqpRWrrpxlevlpg\nReMXk64mCTBuEVF9hPtgHwoaI5hOckR6lxfRCRXbjAGVZawjWG7RGAgnpgcV5Fhs\nxBsqxx7Ljg6uEjqBU9m6EtqVYLT2OAFmG2IG4+qvZzNMglGs/OveFFvdIiv8ECe8\nLOhq+bTklm+gr7Xgpy26a2N52Uq0Otq1ce9aSATK4/8ieiNGMCUXnr25AUZ+DEWX\n+96UKKXJIyLxwURxkcNNPqbSpgtVTDnjPXMl3D3+mQKBgQDOAZLVXyuUMSvsWqoi\nNhi7Z8ZytRR3U8DM0BsDzyA5mNKLMXhreoFARvwdPyCDk5luFRqtvE/okjUMLhYC\n0mGAzihIErUsTeuGumoGWuJ7vRspWXoaQlRmow/Niwfpzm5zY+qRPKU95PWIC4yL\nDiv5nkutAJDAP2RSeUdHpLt72wKBgQC/+ft3IRfHNZM5qeiLJjlmqLsMercqYBHn\nN7/WdUM+E1I7gJBjU3/ac44N6FL8wz+ZeExQ6IKFx0GowsXM19KpPoVU2lNzpEDp\nBco72xhOLa/xVBrCS/pqzqFccCPOMCRlG7ZeNXneA+e8as+FAFECsZ3QnShRMbEG\nuhkIcEl6HQKBgQC9189j2NeFMqdCoe7Fpkq2cZT84okgyksTs/ghU4Bj88SbR5Ss\nn3F7Na9imGkzOBMd0k8Kqk6NiideuR3Jrezy0Ylnme3iDVCukR3iC2FKHORp/645\ngsTa7QxEJAq/2WAJ8JsbCuNQna3zmIkFIKM/3zPoE2xR7llac69Pg6zPHwKBgQCo\npc4AYIUIDwuwG5BbNZA1nEL9+owQYOc5bWNM3iTdUpHqDc5KQ59M5DjGBPNqc4fa\npbC9XxTSuzH2NG0Zv/ujjHYLDeVD8ObJDroTjSyz+TTYV59OUvrBe5aLo0QBLY+7\ndvXlmyrdHCcnAdoeKCICsNBH5Nf3RCUVGMVHAYW7DQKBgBvUJ68SaJ43hSRWSLxG\noThk8gwF07Do5zkMCoaqGMI+m3lY1zGMStlzHGPGIajFGcw5MX4AFS0B95XoFGK2\niK2OvEEotUb+UZ5pXj1HjPicw5BM1QDQD7xYk4G07VbDyz2X0+ttHBIbIvn2IJyV\n/mgGlYm4tHX+RJ0kmKrVhdDe\n-----END PRIVATE KEY-----\n",
    });
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    console.log(sheet.title);
    console.log(sheet);
    const rows = await sheet.getRows();
    console.log(rows);
    await sheet.loadCells("A1:W10"); // loads a range of cells
    console.log(sheet.cellStats); // total cells, loaded, how many non-empty
    // const a1 = sheet.getCell(1, 1); // access cells using a zero-based index
    const b3 = sheet.getCellByA1("B3"); // or A1 style notation
    // access everything about the cell
    console.log(b3.value);
  };
  setup();
  return <div>App</div>;
}

export default App;
