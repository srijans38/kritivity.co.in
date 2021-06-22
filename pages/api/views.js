import firestore from '../../lib/firestore';

export default async (req, res) => {
  const snapshot = await firestore.collection('views').get();
  res.json(snapshot.docs[0].data());
};
