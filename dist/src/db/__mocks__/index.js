const mockedDbSchemaModule = jest.genMockFromModule('..');
const mockedDbSchema = mockedDbSchemaModule.default;
mockedDbSchema.getTransaction.mockReturnValue({
    commitTransaction: jest.fn(),
    rollbackTransaction: jest.fn(),
    release: jest.fn(),
});
module.exports = {
    ...mockedDbSchemaModule,
    default: mockedDbSchema,
};
//# sourceMappingURL=index.js.map