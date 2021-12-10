
const fs = require('fs/promises')
const path = require('path')
const crypto = require('crypto')

const contactsPath = path.join(__dirname, 'db', 'contacts.json');


const readContent = async () => {
    const content = await fs.readFile(contactsPath, 'utf8')
    const result = JSON.parse(content)
    return result
}

const listContacts = async () => {
    return await readContent()

}

const getContactById = async (contactId) => {
    const contacts = await readContent()
    const [result] = contacts.filter(contact => contact.id === contactId)
    return result
}

const removeContact = async (contactId) => {
    const contacts = await readContent()
    const newContacts = contacts.filter(contact => contact.id !== contactId)
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
    return newContacts
}

const addContact = async (name, email, phone) => {
    const contacts = await readContent()
    const newContact = { name, email, phone, id: crypto.randomUUID() }
    contacts.push(newContact)
    await fs.writeFile(path.join(__dirname, 'db', 'contacts.json'), JSON.stringify(contacts, null, 2))
    return newContact
}
module.exports = { listContacts, getContactById, removeContact, addContact }