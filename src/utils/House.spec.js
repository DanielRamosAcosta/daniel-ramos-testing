import { House } from "./House";

describe("House", () => {
  let house;

  beforeEach(() => {
    house = new House(4);
  });

  it("creates serveral rooms", () => {
    expect(house.countRooms()).toEqual(4);
  });

  it("can add members to the house", () => {
    house.addMember(1);

    expect(house.countMembers()).toEqual(1);
  });

  describe("when there are already two members", () => {
    beforeEach(() => {
      house.addMember(2);
    });

    it("can add several members to the house", () => {
      house.addMember(1);

      expect(house.countMembers()).toEqual(3);
    });
  });

  it("can add several members to the house", () => {
    house.addMember(1);
    house.addMember(1);
    house.addMember(1);

    expect(house.countMembers()).toEqual(3);
  });

  it("adds the maximum of members", () => {
    house.addMember(6);

    expect(house.countMembers()).toEqual(4);
  });
});
