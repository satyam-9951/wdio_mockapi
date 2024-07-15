// // server-utils.js
// import { spawn } from 'child_process';
// let serverProcess;

// function startServer() {
//     return new Promise((resolve, reject) => {
//         serverProcess = spawn('node', ['server.js']);
//         serverProcess.stdout.on('data', (data) => {
//             console.log(`Server stdout: ${data}`);
//             if (data.includes('Server is running')) {
//                 resolve();
//             }
//         });
//         serverProcess.stderr.on('data', (data) => {
//             console.error(`Server stderr: ${data}`);
//             reject(data);
//         });
//     });
// }

// function stopServer() {
//     return new Promise((resolve, reject) => {
//         if (serverProcess) {
//             serverProcess.on('close', (code) => {
//                 console.log(`Server process exited with code ${code}`);
//                 resolve();
//             });
//             serverProcess.kill();
//         } else {
//             resolve();
//         }
//     });
// }

// module.exports = {
//     startServer,
//     stopServer
// };

// server-utils.js
import { spawn } from 'child_process';

let serverProcess;

export function startServer() {
    return new Promise((resolve, reject) => {
        serverProcess = spawn('node', ['server.js']);
        serverProcess.stdout.on('data', (data) => {
            console.log(`Server stdout: ${data}`);
            if (data.includes('Server is running')) {
                resolve();
            }
        });
        serverProcess.stderr.on('data', (data) => {
            console.error(`Server stderr: ${data}`);
            reject(data);
        });
    });
}

export function stopServer() {
    return new Promise((resolve, reject) => {
        if (serverProcess) {
            serverProcess.on('close', (code) => {
                console.log(`Server process exited with code ${code}`);
                resolve();
            });
            serverProcess.kill();
        } else {
            resolve();
        }
    });
}
