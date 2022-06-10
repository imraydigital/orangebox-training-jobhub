// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {exercises} from '../../data';

export default function handler(req, res) {
  if(req.method === 'GET'){

  res.status(200).json(exercises);

  } else if(req.method === 'POST'){
    console.log(req.body);
    res.status(200).json({message: 'Received request successfully.'})
  } else {
    res.status(404).json({message: 'Not found.'})
  }
}
