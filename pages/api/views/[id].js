import firestore from '../../../lib/firestore';

const viewsCollection = firestore().collection('views');

export default async (req, res) => {
  try {
    if (req.method === 'GET') {
      const doc = await viewsCollection.doc(req.query.id).get();
      if (doc.exists) {
        res.status(200).json(doc.data());
      } else {
        throw `Document '${req.query.id}' does not exist`;
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
    res.status(404).json({ err });
  }
};
