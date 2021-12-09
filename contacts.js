// contacts.js

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */
const fs = require('fs/promises')
const path = require('path')
const crypto = require('crypto')
const readContent = async () => {
    const content = await fs.readFile(path.join(__dirname, 'db', 'contacts.json'), 'utf8',)
    const result = JSON.parse(content)
    return result
}
// TODO: задокументировать каждую функцию
const listContacts = async () => {
    return await readContant()
    // ...твой код
}

function getContactById(contactId) {
    // ...твой код
}

function removeContact(contactId) {
    // ...твой код
}

function addContact(name, email, phone) {
    // ...твой код
}
module.exports = { listContacts, getContactById, removeContact, addContact }