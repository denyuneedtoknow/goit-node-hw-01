
const { Command } = require('commander');
const program = new Command();
program
    .requiredOption('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            // ...
            break;

        case 'get':
            // ... id
            break;

        case 'add':
            // ... name email phone
            break;

        case 'remove':
            // ... id
            break;

        default:
            console.warn(('Unknown action type!'));
    }
}

invokeAction(argv).then(() => console.log('operation success'));;
