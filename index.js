const chalk = require('chalk')
const { Command } = require('commander');

const { listContacts, getContactById, removeContact, addContact } = require("./contacts")



const program = new Command();
program
    .requiredOption('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();


const invokeAction = async ({ action, id, name, email, phone }) => {

    switch (action) {
        case 'list':
            const contacts = await listContacts()
            console.table(contacts);
            break;

        case 'get':
            const contactById = await getContactById(id)
            if (contactById) {

                console.log(chalk.green(`contact ${contactById.name} found`));
                return
            }
            console.log(chalk.red('contact not found'))
            break;

        case 'add':
            const contact = await addContact(name, email, phone)
            console.log(chalk.green('contact added'));
            console.log(contact);
            break;

        case 'remove':
            // ... id
            break;

        default:
            console.warn(chalk.red('Unknown action type!'));
    }
}

invokeAction(argv).then(() => console.log('operation success'));
