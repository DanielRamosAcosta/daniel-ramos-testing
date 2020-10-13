export class House {
  constructor(rooms) {
    this.rooms = rooms;
    this.membersAmount = 0;
  }

  countRooms() {
    return this.rooms;
  }

  addMember(amount) {
    const total = this.membersAmount + amount;
    this.membersAmount = Math.min(total, this.rooms);
  }

  countMembers() {
    return this.membersAmount;
  }

  resetMembers() {
    this.membersAmount = 0;
  }
}
