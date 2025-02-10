

export class User {
  constructor(email, caption, description) {
    this.email = email;
    this.caption = caption;
    this.description = description;
    this.issueDate = Date.now().toLocaleString('sv-SE');
    this.issueNumber = crypto.randomUUID().replaceAll('-', '');//generate random unique identifier
  }
}
