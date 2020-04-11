const { Socket } = require('net');
const { spawn } = require('child_process');

const port = process.env.PORT ? (process.env.PORT - 100) : 5000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new Socket();

let startedElectron = false;
const tryConnection = () => client.connect({ port }, () => {
    client.end();
    if (!startedElectron) {
        startedElectron = true;
        const { stdout } = spawn('npm', ['run', 'electron-dev']);
        stdout.on('data', function (data) {
            console.log(data.toString().trim());
        });
    }
}
);

tryConnection();

client.on('error', (error) => {
    setTimeout(tryConnection, 1000);
});
