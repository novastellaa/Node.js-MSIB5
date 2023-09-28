// getter
const person = {
        firstName: 'nova',
        lastName: 'stella',
        get fullName() {
            return (`${this.firstName} ${this.lastName}`)
        },
        set fullName(value) {
            const array = value.split(' ')
            this.firstName = array[0];
            this.lastName = array[1];
        }
    }
    // setter
person.fullName = 'ijat kamal';
console.table(person);