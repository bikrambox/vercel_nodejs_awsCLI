import type { VercelRequest, VercelResponse } from '@vercel/node'
const fs = require('fs');

// export default function handler(req: VercelRequest, res: VercelResponse) {
//   const { name = 'walal' } = req.query
//     return res.json({
//         message: `Hello ${name}!`,
//           })
//           }


// Define the handler function
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Read the HTML file from the filesystem
    fs.readFile('/index.html', 'utf8', (err, data) => {
        if (err) {
              // Handle error if the file cannot be read
                    res.status(500).json({ error: 'Internal Server Error' });
                        } else {
                              // Send the HTML content as a response
                                    res.status(200).send(data);
                                        }
                                          });
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
