import { FileHelper } from "../components/FileHelper.js";

describe("file helper should read text from text file", () => {
  const fileHelper = new FileHelper();
  const result = fileHelper.readStringFromFile("test-input.txt");
  const commandLines = result.split(/\n/);

  it("result should be able to read text file", () => {
    expect(result).toBe("test1\ntest2");
  });

  it("command line 1 should read test1", () => {
    expect(commandLines[0]).toBe("test1");
  });

  it("command line 2 should read test2", () => {
    expect(commandLines[1]).toBe("test2");
  });
});
