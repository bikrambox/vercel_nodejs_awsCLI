// import type { VercelRequest, VercelResponse } from '@vercel/node'

// export default function handler(req: VercelRequest, res: VercelResponse) {
//   const { name = 'walal' } = req.query
//     return res.json({
//         message: `Hello ${name}!`,
//           })
//           }



// server.js
const { createServer } = require('@vercel/node');
const fs = require('fs');

const server = createServer((req, res) => {
  if (req.url === '/') {
      // Serve the index.html file
          fs.readFile(__dirname + '/index.html', (err, data) => {
                if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                                res.end('Internal Server Error');
                                      } else {
                                              res.writeHead(200, { 'Content-Type': 'text/html' });
                                                      res.end(data);
                                                            }
                                                                });
                                                                  } else {
                                                                      // Handle other requests
                                                                          res.writeHead(404, { 'Content-Type': 'text/plain' });
                                                                              res.end('Not Found');
                                                                                }
                                                                                });

                                                                                module.exports = server;
                                                                                