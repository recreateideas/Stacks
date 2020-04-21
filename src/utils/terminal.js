/* eslint-disable no-case-declarations */
const childProcess = window.require('child_process');
const fs = window.require('fs');

const openTerminalWithCommand = (commandName, args) => {
    let command = 'clear\n';
    switch (commandName) {
        case 'docker-exec':
        default:
            const { serviceName } = args;
            command += `docker exec -it ${serviceName} sh`;
            break;
    }
    const scriptFile = 'command.sh';
    fs.writeFileSync(`${scriptFile}`, command);
    fs.chmodSync(scriptFile, '755');
    childProcess.spawnSync('open', ['-a', 'Terminal', scriptFile]);
};

export {
    // eslint-disable-next-line import/prefer-default-export
    openTerminalWithCommand,
};
