import firestore from '../../../lib/firestore';

const viewsCollection = firestore().collection('views');

export default async (req, res) => {
  try {
    if (req.method === 'GET') {
      const doc = await viewsCollection.doc(req.query.id).get();
      if (doc.exists) {
        res.status(200).json(doc.data());
      } else {
        res.json({ count: 0 });
      }
    }

    if (req.method === 'POST') {
      if (req.body.increment) {
        const response = await viewsCollection.doc(req.query.id).set(
          {
            count: firestore.FieldValue.increment(1),
          },
          {
            merge: true,
          }
        );
        res.status(201).json({ message: `Updated ${req.query.id}` });
      }
    }
  } catch (err) {
    res.json({ err });
  }
};
