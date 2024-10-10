import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id information', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "I do not have an Andrew ID, but I am a bot created by a student."
          ));
    });

    test('should return name information', () => {
      const query = "What is your name";
      const response: string = QueryProcessor(query);
      expect(response).toBe((
          "Rohan"
        ));
  });

  test('should add numbers', () => {
    expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
    expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
  });

  test('should minus numbers', () => {
    expect(QueryProcessor("What is 5 minus 52?")).toEqual("-47");
    expect(QueryProcessor("What is 12 minus 1?")).toEqual("11");
  });

  test('should sum numbers', () => {
    expect(QueryProcessor("What is 5 plus 52 plus 1?")).toEqual("58");
    expect(QueryProcessor("What is 12 plus 1 plus 2?")).toEqual("15");
  });

});