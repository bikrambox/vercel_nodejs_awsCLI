import type { VercelRequest, VercelResponse } from '@vercel/node'
const fs = require('fs');

// export default function handler(req: VercelRequest, res: VercelResponse) {
//   const { name = 'walal' } = req.query
//     return res.json({
//         message: `Hello ${name}!`,
//           })
//           }


export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
      // Read the HTML file from the filesystem
          const data = fs.readFileSync('./index.html', 'utf8');
              res.status(200).send(data);
                } catch (err) {
                    console.error('Error reading file:', err);
                        res.status(500).json({ error: 'Internal Server Error' });
                          }
                          }
                          


// // server.js
// const { createServer } = require('@vercel/node');

// const server = createServer((req, res) => {
//   if (req.url === '/') {
//       // Serve the index.html file
//           fs.readFile(__dirname + '/index.html', (err, data) => {
//                 if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                                 res.end('Internal Server Error');
//                                       } else {
//                                               res.writeHead(200, { 'Content-Type': 'text/html' });
//                                                       res.end(data);
//                                                             }
//                                                                 });
//                                                                   } else {
//                                                                       // Handle other requests
//                                                                           res.writeHead(404, { 'Content-Type': 'text/plain' });
//                                                                               res.end('Not Found');
//                                                                                 }
//                                                                                 });

//                                                                                 module.exports = server;
